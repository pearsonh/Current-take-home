import Form from '@/app/ui/pays/edit-form';
import Breadcrumbs from '@/app/ui/pays/breadcrumbs';
import { fetchContacts, fetchPayById } from '@/app/lib/data';

export default async function Page(
    { searchParams }: { searchParams?: {
        id?: string;
    }
}) {
    searchParams = await searchParams;
    const contacts = await fetchContacts();
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
            <Form pay={pay} contacts={contacts} />
        </main>
    );
}