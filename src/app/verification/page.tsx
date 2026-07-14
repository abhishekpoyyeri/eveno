
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function UserVerificationPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-primary-fixed-dim/20 blur-[120px]"></div>
<div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-tertiary-fixed/20 blur-[120px]"></div>
</div>

<div className="glass-card relative z-10 w-full max-w-[480px] rounded-2xl border border-white/50 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] p-stack-lg flex flex-col items-center text-center">

<div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-stack-md animate-pulse">
<span className="material-symbols-outlined text-primary text-4xl" data-icon="verified_user" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
</div>

<h2 className="font-headline-md text-headline-md text-primary mb-2">Verify Your Identity</h2>
<p className="font-body-md text-on-surface-variant mb-stack-lg">To maintain our premium event standard, we require a quick identity check. This only takes a minute.</p>

<div className="w-full space-y-stack-md mb-stack-lg">

<button className="w-full group flex items-center p-4 bg-white border border-primary-fixed-dim/40 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-md text-left">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mr-4 group-hover:bg-primary-fixed-dim transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="badge">badge</span>
</div>
<div className="flex-1">
<span className="block font-bold text-primary">Upload ID Document</span>
<span className="block text-xs text-on-surface-variant font-micro-label">Passport, License, or ID Card</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</button>

<button className="w-full group flex items-center p-4 bg-white border border-primary-fixed-dim/40 rounded-xl hover:border-primary transition-all duration-300 hover:shadow-md text-left">
<div className="w-12 h-12 rounded-lg bg-surface flex items-center justify-center mr-4 group-hover:bg-primary-fixed-dim transition-colors">
<span className="material-symbols-outlined text-primary" data-icon="add_a_photo">add_a_photo</span>
</div>
<div className="flex-1">
<span className="block font-bold text-primary">Take a Selfie</span>
<span className="block text-xs text-on-surface-variant font-micro-label">Live facial recognition check</span>
</div>
<span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors" data-icon="chevron_right">chevron_right</span>
</button>
</div>

<button className="w-full bg-primary-fixed-dim text-on-primary-fixed-variant font-bold py-4 px-6 rounded-full opacity-60 cursor-not-allowed mb-stack-md transition-all" disabled>
                Submit Verification
            </button>

<button className="text-on-surface-variant hover:text-primary transition-colors font-micro-label uppercase tracking-widest text-xs">
                Skip for now
            </button>
</div>

<div className="mt-stack-lg flex items-center gap-2 text-outline">
<span className="material-symbols-outlined text-sm" data-icon="lock" style={{ fontVariationSettings: "'wght' 200" }}>lock</span>
<span className="font-micro-label text-[10px]">ENCRYPTED WITH 256-BIT SSL SECURITY</span>
</div>
</main>
      <Footer />
    </>
  );
}
