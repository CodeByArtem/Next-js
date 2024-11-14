"use client"


import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/lib/api';
import Promotion from '@/app/components/promotion';

export interface CompanyPromotionProps {
  companyId: string
}

export default function CompanyPromotions({
  companyId, }: CompanyPromotionProps) {
  const {data} = useQuery({
    queryKey: ['promotion', companyId],
    queryFn: () => getPromotions({companyId}),
    staleTime: 10 * 1000,
  })

  return (
    <div className="grid grid-cols12 gap-5">
      {data?.map((promotion) => (
      <div key={promotion.id} className="col-span-4">
        <Promotion promotion={promotion}/>
      </div>
      ))}
    </div>
  )
}