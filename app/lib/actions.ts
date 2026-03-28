'use server'

import { z } from 'zod'
import {pays} from "@/app/lib/placeholder-data";

const FormSchema = z.object({
    id: z.string(),
    contactId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreatePay = FormSchema.omit({ id: true, date: true });
export async function createPay(formData: FormData) {
    const { contactId, amount, status } = CreatePay.parse({
        contactId: formData.get('contactId'),
        amount: formData.get('amount'),
        status: formData.get('status') ?? 'pending',
    });
    const create_date = new Date();
    pays.push({
        id: crypto.randomUUID.toString(),
        receiver: contactId,
        amount: amount, 
        create_date: create_date.getTime(),
        finalize_date: status === 'pending' ? null : create_date.getTime()
    })
}