import { ContactField, PayForm } from '@/app/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { UpdatePay } from '@/app/ui/pays/buttons'
import { deletePay } from "@/app/lib/actions";

export default function deletePayForm({
  user,
  pay,
  contacts,
}: {
  user: string,
  pay: PayForm;
  contacts: ContactField[];
}) {
  const contact = contacts.filter((contact) => pay.contact_id === contact.id)[0];
  return (
    <form action={deletePay}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <input hidden id='user' name='user' value= {user} readOnly/>
        <input hidden id='id' name='id' value= {pay.id} readOnly/>
        <input hidden id='pay_id' name='pay_id' value= {pay.pay_id} readOnly/>
        <span id='deleteWarningHeader'>Are you sure you want to delete this pay?</span>
        <br/>
        <br/>
        {/* Contact Name */}
        <div className="mb-4">
          <label htmlFor="contact" className="mb-2 block text-sm font-medium">
            Contact
          </label>
          <span id='contact'>{contact.name}</span> 
        </div>

        {/* Pay Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount {' ' + (pay.is_request === 'request' ? 'Requested' : 'Paid')}
          </label>
          <span id='amount'>{pay.amount}</span> 
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/pays"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <UpdatePay id={pay.id} />
        <Button type="submit">Delete Pay</Button>
      </div>
    </form>
  );
}
