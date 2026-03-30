import Form from '@/app/ui/pays/create-form';
import Breadcrumbs from '@/app/ui/pays/breadcrumbs';
import { fetchContacts, fetchSignedInUser } from '@/app/lib/data';

export default async function Page() {
    const user = await fetchSignedInUser();
    const contacts = await fetchContacts(user);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Pays', href: '/dashboard/pays' },
                    {
                        label: 'Create Pay',
                        href: '/dashboard/pays/create',
                        active: true,
                    },
                ]}
            />
            <Form user={user} contacts={contacts} />
        </main>
    );
}