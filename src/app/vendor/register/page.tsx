import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import RegisterForm from './RegisterForm';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function VendorRegisterPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background pb-section-gap">
        <RegisterForm />
      </main>
      <Footer />
    </>
  );
}
