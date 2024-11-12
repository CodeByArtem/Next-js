import React from 'react';
import Toolbar from '@/app/components/toolbar';
import AddCompanyButton from '@/app/components/add-company-button';
import SearchInput from '@/app/components/search-input';


export type PageProps = object


export default function Page({}: PageProps) {
  return (
    <Toolbar action={<AddCompanyButton />}>
      <SearchInput />
    </Toolbar>
  );
}