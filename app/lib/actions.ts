'use server'

import { z } from 'zod'

import {Pay} from "@/app/lib/definitions";
import {pays} from "@/app/lib/placeholder-data";
import { fetchSignedInUser } from './data';

const FormSchema = z.object({
    id: z.string(),
    pay_id: z.coerce.number(),
    user: z.string(),
    contactId: z.string(),
    amount: z.coerce.number().gt(0),
    is_request: z.enum(['request', 'payment']),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreatePay = FormSchema.omit({ id: true, date: true, is_request: true });
export async function createPay(formData: FormData) {
    const {user, contactId, amount, status } = CreatePay.parse({
        user: formData.get('user'),
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        status: formData.get('status') ?? 'pending',
    });
    const create_date = new Date();
    pays.push({
        id: crypto.randomUUID(),
        pay_id: Math.max(...pays.map(e => e.pay_id))+1,
        contact_id: contactId,
        user_id: user,
        amount: status === 'paid' ? -1 * amount : amount, 
        create_date: create_date.getTime(),
        finalize_date: status === 'pending' ? null : create_date.getTime(),
        update_date: create_date.getTime(),
        delete_date: null
    })
}

const UpdatePay = FormSchema.omit({date: true });
export async function updatePay(formData: FormData) {
    const { id, pay_id, user, contactId, amount, is_request, status } = UpdatePay.parse({
        id: formData.get('id')?.toString(),
        pay_id: formData.get('pay_id'),
        user: formData.get('user'),
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        is_request: formData.get('is_request'),
        status: formData.get('status') ?? 'pending',
    });
    if (user !== await fetchSignedInUser()) {
        throw new Error ('You are not permitted to edit this pay');
    }
    const current_date = new Date();
    const finalize_date: number | null = status === 'pending' ? null : current_date.getTime()
    let index = pays.findIndex(e => e.id === id);
    if (pays[index]) {
        let new_element: Pay = {
            ...pays[index],
            id: crypto.randomUUID(),
            pay_id: pay_id,
            contact_id: contactId,
            amount: is_request == 'payment' ? amount * -1 : amount,
            finalize_date: finalize_date,
            update_date: current_date.getTime()
        }
        pays.push(new_element);
        pays[index].delete_date = current_date.getTime()
    }

}

const DeletePay = FormSchema.omit({ 
    pay_id: true,
    user: true,
    contactId: true,
    amount: true,
    is_request: true,
    status: true,
    date: true});
export async function deletePay(formData: FormData) {
    const {id} = DeletePay.parse({
        id: formData.get('id')?.toString()
    });
    let pay_index = pays.findIndex(pay => pay.id === id);
    if (pay_index) {
        pays[pay_index].delete_date = new Date().getTime();
    }

}