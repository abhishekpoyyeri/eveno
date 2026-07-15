import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { vendorLogin } from './actions';
import Link from 'next/link';

export default async function VendorLoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const params = await searchParams;
  const error = params?.error;
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background flex flex-col items-center justify-center px-margin-mobile md:px-0">

<div className="fixed inset-0 z-0">
<img alt="Luxury event orchestration background" className="w-full h-full object-cover brightness-[0.7]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNak5Ku1UB-MdPdj2rIDMTn3yz6nkVq9dxXd_h4lPdRdCBvk5cfHP0oob7UAdRCWqK6r0jyaQCVVzTfia99K9nmbNsX9W-9mAYhpuJCC2LBTO32VTHPUpGNN9wVvMYIO5pvU6mZlElM7vxrNBaZ1xD6PjmofZQQqGQQ6z4kivUeqkyL49TpNxIrHmEGDKq44_G6tV_aFh5X9dUizBAapkM_1-55G2qrz3whPuluOyTHxc__rHKAGTPpUTl3g1QhSPCE_uo4BOOwdA"/>
<div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40"></div>
</div>

<div className="relative z-10 w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-8 duration-700">

<div className="text-center mb-stack-lg">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-white tracking-tight">Evenow Vendor</h1>
<p className="font-body-md text-white/80 mt-1">Partner with Excellence</p>
</div>

<div className="glass-card rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden relative">

<div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
<header className="mb-stack-lg">
<h2 className="font-headline-md text-headline-md text-primary mb-2">Vendor Access</h2>
<p className="font-body-md text-on-surface-variant">Sign in with your user account to register as a vendor.</p>
</header>
<form className="space-y-5">
{error && (
  <div className="bg-red-500/10 text-red-400 p-3 rounded-xl text-sm font-medium border border-red-500/20 text-center">
    {error}
  </div>
)}

<div className="space-y-2">
<label className="font-micro-label text-micro-label text-outline uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
<input name="email" required className="w-full h-14 pl-12 pr-4 bg-white/50 border-outline-variant rounded-xl focus:ring-primary focus:border-primary transition-all duration-300 input-focus-effect placeholder:text-outline-variant" id="email" placeholder="name@evently.com" type="email"/>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="font-micro-label text-micro-label text-outline uppercase tracking-widest" htmlFor="password">Password</label>
<a className="text-xs font-bold text-primary hover:text-secondary transition-colors" href="#">Forgot Password?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
<input name="password" required className="w-full h-14 pl-12 pr-12 bg-white/50 border-outline-variant rounded-xl focus:ring-primary focus:border-primary transition-all duration-300 input-focus-effect" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>

<button formAction={vendorLogin} type="submit" className="w-full h-14 mt-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group">
                        Sign In & Proceed
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>

<div className="mt-8 text-center">
<p className="font-body-md text-white/90">
                    Don't have an account? 
                    <Link href="/signup" className="font-bold text-white underline underline-offset-4 decoration-secondary hover:text-secondary transition-colors ml-1">Create one first</Link>
</p>
</div>
</form>
</div>
</div>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 text-white/40 flex gap-6 text-[10px] font-micro-label uppercase tracking-[0.2em] z-10">
<span>Privacy</span>
<span>Terms</span>
<span>Support</span>
</div>
</main>
      <Footer />
    </>
  );
}
