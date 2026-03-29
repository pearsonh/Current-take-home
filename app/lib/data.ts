import { useReducer } from "react";
import {formatCurrency} from './utils';
import {Contact, Activity, Pay, LatestPay, FormattedContactsTable, PaysTable, PayForm} from '@/app/lib/definitions';
import {contacts, pays} from "@/app/lib/placeholder-data";
import { format } from "path";

export async function fetchActivity() {
    let activity_data: Activity[] = await new Promise((resolve, reject) => {
      try {
        let new_activity: Activity[] = [];
        let sorted_pays = getDateSortedPaysAsc();
        sorted_pays.forEach((pay) => {
          let create_date: Date = getDateFromUnix(pay.create_date);
          let create_date_key: string = create_date.toLocaleString('default', {month: 'short'}) + ', ' + create_date.getFullYear();
          let existing_key = new_activity.findIndex((entry) => entry.month === create_date_key);
          if (existing_key > 0) {
            new_activity[existing_key].activity += pay.amount;
          } else {
            new_activity.push({
              month: create_date_key,
              activity: pay.amount
            })
          }
        })
        resolve(new_activity);
      } catch (error) {
        console.error('Database Error:', error);
        reject();
        throw new Error('Failed to fetch activity data.');
      }
    });
    return activity_data.slice(-12);
    
  
}

const MAX_LATEST_PAYS = 8;

export async function fetchLatestPays(): Promise<LatestPay[]> {
  return await new Promise((resolve, reject) => {
    try {
      let latest_pays: LatestPay[] = [];
      let sorted_pays = getDateSortedPaysDesc().splice(0,  MAX_LATEST_PAYS);
      sorted_pays.forEach((payment) => {
        let contact = contacts[contacts.findIndex((e) => e['id'] == payment.contactId)];
        let latest_pay: LatestPay = {
          id: payment.id,
          name: contact.name,
          email: contact.email,
          amount: formatCurrency(payment.amount),
          image_url: contact.image_url,
          finalize_date: payment.finalize_date ? new Date(payment.finalize_date).toLocaleString() : 'Pending',
        };
        latest_pays.push(latest_pay);
      });
      resolve(latest_pays.splice(0, MAX_LATEST_PAYS));
    } catch (error) {
      console.error('Database Error:', error);
      reject();
      throw new Error('Failed to fetch the latest pays.');
    }
  })
  
}

export async function fetchCardData() {
  try {
    const payCountPromise = new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));
    const contactCountPromise = new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));
    const payStatusPromise = new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));

    const data = await Promise.all([
      payCountPromise,
      contactCountPromise,
      payStatusPromise,
    ]);

    const numberOfPays = pays.length;
    const numberOfContacts = contacts.length;
    const totalPaidPays = pays.filter((e) => e.finalize_date !== null).length;
    const totalPendingPays = pays.filter((e) => e.finalize_date == null).length;

    return {
      numberOfContacts,
      numberOfPays,
      totalPaidPays,
      totalPendingPays,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}

const ITEMS_PER_PAGE = 30;
export async function fetchTotalFilteredPays(query: string): Promise<PaysTable[]> {
  return await new Promise((resolve, reject) => {
    try {
      let filtered_pays: PaysTable[] = [];
      let sorted_pays = getDateSortedPaysDesc();
      sorted_pays.forEach((payment) => {
        let contact = contacts[contacts.findIndex((e) => e['id'] == payment.contactId)];
        if (contact.name.match(query) || contact.email.match(query)) {
          let filtered_pay: PaysTable = {
            id: payment.id,
            contact_id: contact.id, 
            create_date: getDateFromUnix(payment.create_date).toLocaleString(),
            date: payment.finalize_date ? getDateFromUnix(payment.finalize_date).toLocaleString() : 'Pending',
            status: payment.finalize_date === null ? 'pending' : 'paid',
            name: contact.name,
            email: contact.email,
            amount: formatCurrency(payment.amount),
            image_url: contact.image_url
          };
          filtered_pays.push(filtered_pay);
        }
      });
      resolve(filtered_pays);
    } catch (error) {
      console.error('Database Error:', error);
      reject();  
      throw new Error('Failed to fetch pays.');
    }
  })
}

export async function fetchFilteredPays(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  let filtered_pays = await fetchTotalFilteredPays(query);
  return filtered_pays.slice(offset, offset+ITEMS_PER_PAGE);  
}

export async function fetchPaysPages(query: string) {
  try {
    let filtered_pays = await fetchTotalFilteredPays(query);
    return (filtered_pays.length / ITEMS_PER_PAGE) + 1;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pays.');
  }
}

export async function fetchPayById(id: string): Promise<PayForm> {
  return await new Promise((resolve, reject) => {
    try {
      let specific_pay = pays.filter((e) => e['id'] == id)[0];
      resolve({
        id: specific_pay.id,
        contact_id: specific_pay.contactId,
        amount: Math.abs(specific_pay.amount),
        is_request: specific_pay.amount < 0 ? 'payment' : 'request',
        status: specific_pay.finalize_date === null ? "pending" : "paid"
      });
    } catch (error) {
      console.error('Database Error:', error);
      reject();
      throw new Error('Failed to fetch pay.');
    }
  })
}

export async function fetchContacts() {
  let table_contacts: FormattedContactsTable[] = await new Promise((resolve, reject) => {
    try {
      let contacts_with_pay: FormattedContactsTable[] = [];
      contacts.forEach((e) => {
        let contact_payments = pays.filter((k) => e.id == k.contactId);
        let total_paid: number = contact_payments.reduce((total, next) => {
            return total + (next.finalize_date ? next.amount : 0)
          }, 0);
        let total_pending = contact_payments.reduce((total, next) => {
            return total + (!next.finalize_date ? next.amount : 0)
        }, 0);

        contacts_with_pay.push({
          id: e.id,
          name: e.name,
          email: e.email,
          image_url: e.image_url,
          total_pays: contact_payments.length,
          total_paid: formatCurrency(total_paid),
          total_pending: formatCurrency(total_pending)
        });
      });
      resolve(contacts_with_pay);
    } catch (err) {
      console.error('Database Error:', err);
      reject();
      throw new Error('Failed to fetch all contacts.');
    }
  });
  return table_contacts;
}

export async function fetchFilteredContacts(query: string) {
  try {
    let unfiltered_contacts = await fetchContacts();
    let filtered_contacts = unfiltered_contacts.filter((e) => e.name.match(query) || e.email.match(query));
   
    return filtered_contacts;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch contact table.');
  }
}

function getRandomMillis(max: number) {
  return Math.random() * max * 1000;
}

function getDateFromUnix(unix_time: number): Date {
  return new Date(unix_time);
}

//Returns a *copy* of the pays array, sorted by create_date descending
function getDateSortedPaysDesc(): Pay[] {
  let sorted_pays = [...pays];
  sorted_pays.sort((a, b) => {
    return b.create_date - a.create_date
  });
  return sorted_pays;
}

//Returns a *copy* of the pays array, sorted by create_date ascending
function getDateSortedPaysAsc(): Pay[] {
  let sorted_pays = [...pays];
  sorted_pays.sort((a, b) => {
    return a.create_date - b.create_date
  });
  return sorted_pays;
}