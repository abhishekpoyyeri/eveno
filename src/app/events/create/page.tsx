
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function EventCreatePage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">

<div className="fixed top-0 left-0 w-full h-screen -z-10 pointer-events-none opacity-40">

</div>
<div className="flex flex-col gap-stack-lg">

<div className="space-y-1">
<span className="font-micro-label text-secondary uppercase tracking-widest">Step 01 of 03</span>
<h2 className="font-display-lg-mobile text-display-lg-mobile text-primary">Core Essentials</h2>
<p className="text-on-surface-variant text-body-md">Tell us the fundamental details of your upcoming orchestration.</p>
</div>

<section className="glass-card custom-shadow rounded-xl p-stack-lg space-y-stack-md">
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
<h3 className="font-headline-md text-headline-md text-primary">Event Details</h3>
</div>
<div className="grid grid-cols-1 gap-gutter">

<div className="flex flex-col gap-2">
<label className="font-micro-label text-on-surface-variant uppercase ml-1">Event Name</label>
<input className="h-[56px] px-4 rounded-xl border border-outline-variant bg-white/50 focus:bg-white transition-all text-body-md" placeholder="e.g. Celestial Gala 2024" type="text"/>
</div>

<div className="flex flex-col gap-2">
<label className="font-micro-label text-on-surface-variant uppercase ml-1">Date &amp; Time</label>
<div className="relative">
<input className="w-full h-[56px] pl-4 pr-12 rounded-xl border border-outline-variant bg-white/50 focus:bg-white transition-all text-body-md" placeholder="Select date and time" type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-micro-label text-on-surface-variant uppercase ml-1">Location</label>
<div className="relative">
<input className="w-full h-[56px] pl-4 pr-12 rounded-xl border border-outline-variant bg-white/50 focus:bg-white transition-all text-body-md" placeholder="Venue or City" type="text"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-micro-label text-on-surface-variant uppercase ml-1">Expected Guests</label>
<div className="relative">
<input className="w-full h-[56px] pl-4 pr-12 rounded-xl border border-outline-variant bg-white/50 focus:bg-white transition-all text-body-md" placeholder="0" type="number"/>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline">groups</span>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 gap-stack-md">

<section className="glass-card custom-shadow rounded-xl p-stack-lg">
<div className="flex items-center justify-between mb-stack-md">
<h4 className="font-headline-md text-[20px] text-primary">Budget Overview</h4>
<span className="material-symbols-outlined text-tertiary">payments</span>
</div>
<div className="flex items-end justify-between">
<div>
<p className="font-micro-label text-on-surface-variant mb-1">ALLOCATED</p>
<p className="font-headline-md text-primary">$0.00</p>
</div>
<button className="text-primary font-bold text-micro-label border-b-2 border-primary/20 hover:border-primary transition-all">Set Budget</button>
</div>
<div className="mt-stack-md w-full h-2 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-secondary w-0"></div>
</div>
</section>

<section className="glass-card custom-shadow rounded-xl p-stack-lg">
<div className="flex items-center justify-between mb-stack-md">
<h4 className="font-headline-md text-[20px] text-primary">Required Vendors</h4>
<span className="material-symbols-outlined text-secondary">storefront</span>
</div>
<div className="flex flex-col gap-stack-sm">
<label className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/10 hover:bg-white/40 cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
<span className="text-body-md flex-1">Catering &amp; Dining</span>
<span className="text-outline text-[14px]">Unassigned</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/10 hover:bg-white/40 cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
<span className="text-body-md flex-1">Premium Venue</span>
<span className="text-outline text-[14px]">Searching...</span>
</label>
<label className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/10 hover:bg-white/40 cursor-pointer transition-colors">
<input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline-variant" type="checkbox"/>
<span className="text-body-md flex-1">Audiovisual &amp; Lighting</span>
<span className="text-outline text-[14px]">Unassigned</span>
</label>
</div>
<button className="mt-stack-md w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary/5 transition-colors">
<span className="material-symbols-outlined text-[20px]">add</span>
                        Add Custom Vendor
                    </button>
</section>
</div>

<div className="relative w-full h-48 rounded-xl overflow-hidden custom-shadow">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A lush, ultra-luxury wedding venue setup in a grand ballroom with crystal chandeliers, deep purple orchids, and soft golden ambient lighting. The atmosphere is sophisticated and professional, reflecting high-end event planning. High-contrast photography style with a focus on elegant details and clean white linens." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD45zBE1cXMS_A1gCeIA7a7XFYAAAGnWe1OXu_QBlA6PToC2qIS6NbUY8cJgDYlg04FkLaODYaoL8SUDtZOch1zkW8u5A3gqvI2V93chK3gNX79CGS453B9YWnmDb-jQ624w5cMaqcp775rgoG-p1dISrjd_lJAeq7DkfeAyo9vmab8x26xwl6kwFeVU7fOEI3YX0TS6mzP_gVYUVkUQwfyw3bNkYUkGeYN7Gpo3oytKZBBjaAbIXeapYN-d5dKOxmAs2gLIVcMQpg')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-stack-md">
<p className="text-white font-headline-md text-[18px]">Visual Inspiration</p>
<p className="text-white/80 text-micro-label">Let Eveno suggest styles based on your details.</p>
</div>
</div>
</div>
</main>
      <Footer />
    </>
  );
}
