'use server'

import { z } from 'zod'
import {pays} from "@/app/lib/placeholder-data";

const FormSchema = z.object({
    id: z.string(),
    contactId: z.string(),
    amount: z.coerce.number(),
    is_request: z.enum(['request', 'payment']),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreatePay = FormSchema.omit({ id: true, date: true, is_request: true });
export async function createPay(formData: FormData) {
    console.log('log');
    const { contactId, amount, status } = CreatePay.parse({
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        status: formData.get('status') ?? 'pending',
    });
    const create_date = new Date();
    pays.push({
        id: crypto.randomUUID.toString(),
        receiver: contactId,
        amount: status === 'paid' ? -1 * amount : amount, 
        create_date: create_date.getTime(),
        finalize_date: status === 'pending' ? null : create_date.getTime()
    })
}

const UpdatePay = FormSchema.omit({date: true });
export async function updatePay(formData: FormData) {
    console.log('running');
    const { id, contactId, amount, is_request, status } = UpdatePay.parse({
        id: formData.get('id'),
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        is_request: formData.get('is_request'),
        status: formData.get('status') ?? 'pending',
    });
    const current_date = new Date();
    let edit_index = pays.findIndex(e => e.id === id);
    pays[edit_index].receiver = contactId,
    pays[edit_index].amount = is_request ? amount * -1 : amount,
    pays[edit_index].finalize_date = status === 'pending' ? null : current_date.getTime()
}