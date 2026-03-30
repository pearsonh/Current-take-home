import { fetchSignedInUser } from '@/app/lib/data';
import Table from '@/app/ui/contacts/table';
import { PaysTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page(
    { searchParams }: { searchParams?: {
        query?: string;
    }
}) {
    searchParams = await searchParams;
    const query = searchParams?.query || '';
    const user = await fetchSignedInUser();

    return (
        <div className="w-full">
            <Suspense key={query} fallback={<PaysTableSkeleton />}>
                <Table user={user} query={query} />
            </Suspense>
        </div>
    );
}