import Pagination from '@/app/ui/pays/pagination';
import { fetchPaysPages, fetchSignedInUser } from "@/app/lib/data";
import Search from '@/app/ui/search';
import Table from '@/app/ui/pays/table';
import { CreatePay } from '@/app/ui/pays/buttons';
import { lusitana } from '@/app/ui/fonts';
import { PaysTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    }
}) {
    searchParams = await searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const user = await fetchSignedInUser();

    const totalPages = await fetchPaysPages(user, query);

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Pays</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search pays..." />
                <CreatePay />
            </div>
            <Suspense key={query + currentPage} fallback={<PaysTableSkeleton />}>
                <Table user={user} query={query} currentPage={currentPage} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    );
}