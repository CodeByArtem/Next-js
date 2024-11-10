import React from 'react';
import Sidebar from '@/app/components/sidebar';


export interface LayoutProps {
  children: React.ReactNode;
}


export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-69">{children}</div>
    </>
  );
}