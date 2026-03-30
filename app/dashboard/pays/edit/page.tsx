import Form from '@/app/ui/pays/edit-form';
import Breadcrumbs from '@/app/ui/pays/breadcrumbs';
import { fetchContacts, fetchPayById, fetchSignedInUser } from '@/app/lib/data';
import {pays} from '@/app/lib/placeholder-data';

export default async function Page(
    { 
        searchParams
    }: { 
        searchParams?: {
        id?: string;
    }
}) {
    searchParams = await searchParams;
    const user = await fetchSignedInUser();
    const contacts = await fetchContacts(user);
    const pay = await fetchPayById(searchParams?.id || 'null');

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Pays', href: '/dashboard/pays' },
                    {
                        label: 'Edit Pay',
                        href: '/dashboard/pays/edit',
                        active: true,
                    },
                ]}
            />
            <Form user={user} pay={pay} contacts={contacts} />
        </main>
    );
}