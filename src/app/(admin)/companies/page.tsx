import React from 'react';
import CompanyTable from '@/app/components/company-table';
import getQueryClient from '@/lib/utils/getQueryClient';
import { getCompanies } from '@/lib/api';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';


// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface PageProps {
  // Интерфейс для пропсов страницы
}

export default async function Page({}: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 10 * 1000
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompanyTable />
    </HydrationBoundary>
  );
}