import { useReducer } from "react";
import {formatCurrency} from './utils';
import {contacts, pays, activity} from "@/app/lib/placeholder-data";

export async function fetchActivity() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    await new Promise((resolve) => setTimeout(resolve, getRandomMillis(3)));

    let new_activity = [];
    pays.forEach((pay) => {
      let create_date: Date = getDateFromUnix(pay.create_date);
      let create_date_key: string = create_date.toLocaleString('default', {month: 'short'}) + ', ' + create_date.getFullYear();
      let existing_key = new_activity.findIndex((entry) => entry.month === create_date_key);
      if (existing_key > 0) {
        new_activity[existing_key].activity += pay.amount;
      } else [
        new_activity.push({
          month: create_date_key,
          activity: pay.amount
        })
      ]
    })
    return new_activity.slice(-12);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch activity data.');
  }
}

export async function fetchLatestPays() {
  try {
    let latest_pays: Object[] = [];
    await new Promise((resolve) => {
      pays.forEach((payment) => {
        let contact = contacts[contacts.findIndex((e) => e['id'] == payment.receiver)];
        latest_pays.push({
          id: payment.id,
          image_url: contact.image_url,
          name: contact.name,
          email: contact.email,
          amount: payment.amount
        })
      });
      setTimeout(resolve, getRandomMillis(3));
    }
      
    );
    return latest_pays;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest pays.');
  }
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

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredPays(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {

    // TODO: filter the related pay joined data for the query string passed
    return [];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pays.');
  }
}

export async function fetchPaysPages(query: string) {
  try {
    // TODO: filter the related pay joined data for the query string passed to find this value
    return 0;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of pays.');
  }
}

export async function fetchPayById(id: string) {
  try {

    return pays.filter((e) => e['id'] == id);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch pay.');
  }
}

export async function fetchContacts() {
  try {
    //TODO
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all contacts.');
  }
}

export async function fetchFilteredContacts(query: string) {
  try {
    let filtered_contacts = contacts.filter((e) => e.name.match(query));
    let table_contacts: Object[] = [];
    filtered_contacts.forEach((e) => {
      let new_contact: Object = e; 
      let contact_payments = pays.filter((k) => e.id == k.receiver);
      new_contact.total_pays = contact_payments.reduce((total, next) => {
        return total + next.amount
      }, 0);
      new_contact.total_paid = contact_payments.reduce((total, next) => {
        return total + (next.finalize_date ? next.amount : 0)
      }, 0);
      new_contact.total_pending = contact_payments.reduce((total, next) => {
        return total + (!next.finalize_date ? next.amount : 0)
      }, 0);
      table_contacts.push(new_contact);
    })
    return table_contacts;
    return filtered_contacts;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch contact table.');
  }
}

function getRandomMillis(max) {
  return Math.random() * max * 1000;
}

function getDateFromUnix(unix_time: number): Date {
  return new Date(unix_time * 1000);
}