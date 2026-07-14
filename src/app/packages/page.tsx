
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">

<section className="pt-stack-lg mb-section-gap text-center space-y-stack-md">
<h2 className="font-display-lg-mobile text-display-lg-mobile text-primary">Exquisite Packages for Every Occasion</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xs mx-auto">
                Indulge in a world of effortless luxury where every detail is orchestrated with professional precision and curated taste.
            </p>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-stack-lg max-w-container-max mx-auto px-margin-mobile items-stretch">

<article className="glass-card w-full rounded-3xl p-stack-lg shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 transition-all duration-300 hover:scale-[1.02]">
<div className="flex justify-between items-start mb-stack-md">
<div>
<span className="font-micro-label text-micro-label text-outline uppercase tracking-widest">Essential</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">Foundation</h3>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-primary">From $10k</p>
<p className="font-micro-label text-micro-label text-on-surface-variant">BASE TIER</p>
</div>
</div>
<ul className="space-y-stack-md mb-stack-lg">
<li className="flex items-center gap-stack-md font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Curated Venue Sourcing
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Signature Multi-course Catering
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Professional Sound &amp; Audio Setup
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Essential Floral Design
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        On-site Day Coordinator
                    </li>
</ul>
<button className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold transition-all hover:bg-primary/5 active:scale-95">
                    Select Package
                </button>
</article>

<article className="relative glass-card w-full rounded-3xl p-stack-lg shadow-[0px_20px_40px_rgba(49,46,129,0.08)] border-2 border-secondary-container transition-all duration-300 hover:scale-[1.02]">

<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container px-6 py-1.5 rounded-full shadow-lg">
<span className="font-micro-label text-micro-label text-white uppercase italic">Best Value</span>
</div>
<div className="flex justify-between items-start mb-stack-md pt-2">
<div>
<span className="font-micro-label text-micro-label text-secondary uppercase tracking-widest">Premium</span>
<h3 className="font-headline-md text-headline-md text-primary mt-1">Connoisseur</h3>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-primary">From $25k</p>
<p className="font-micro-label text-micro-label text-on-surface-variant">MOST POPULAR</p>
</div>
</div>
<ul className="space-y-stack-md mb-stack-lg">
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Complete End-to-End Planning
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Premium Artisanal Catering
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Immersive Thematic Decor
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Professional Photography &amp; Film
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Live Entertainment Selection
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-on-surface">
<span className="material-symbols-outlined text-secondary text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        Bespoke Guest Experiences
                    </li>
</ul>
<button className="w-full py-4 rounded-full primary-gradient text-white font-bold transition-all hover:shadow-lg hover:shadow-primary/20 active:scale-95">
                    Select Package
                </button>
</article>

<article className="glass-card w-full rounded-3xl p-stack-lg shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-outline-variant/20 transition-all duration-300 hover:scale-[1.02] bg-primary text-white">
<div className="flex justify-between items-start mb-stack-md">
<div>
<span className="font-micro-label text-micro-label text-primary-container uppercase tracking-widest">Luxury</span>
<h3 className="font-headline-md text-headline-md text-white mt-1">Masterpiece</h3>
</div>
<div className="text-right">
<p className="font-headline-md text-headline-md text-white">From $75k</p>
<p className="font-micro-label text-micro-label text-primary-container">ULTRA-PREMIUM</p>
</div>
</div>
<ul className="space-y-stack-md mb-stack-lg">
<li className="flex items-center gap-stack-md font-body-md text-white/90">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        White-Glove Concierge Service
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-white/90">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        Michelin-Star Private Catering
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-white/90">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        Celebrity Vendor Access
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-white/90">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        Unlimited Bespoke Design
                    </li>
<li className="flex items-center gap-stack-md font-body-md text-white/90">
<span className="material-symbols-outlined text-secondary-fixed-dim text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                        Worldwide Travel Management
                    </li>
</ul>
<button className="w-full py-4 rounded-full bg-white text-primary font-bold transition-all hover:bg-surface-container-high active:scale-95">
                    Select Package
                </button>
</article>
</div>

<section className="mt-section-gap mb-stack-lg">
<div className="w-full h-48 rounded-3xl overflow-hidden relative shadow-xl">
<img className="w-full h-full object-cover" data-alt="A cinematic, shallow depth-of-field shot of a luxurious long table setting at an outdoor twilight event. Warm fairy lights sparkle in the background, while the foreground shows crystal glassware, sterling silver cutlery, and delicate white peonies. The mood is sophisticated and magical, reflecting the highest level of event orchestration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9mDdqVYOLW-EHY2PYQE8JOjVmiM6OmnmhQPu_DCu1r4c4osYm8F10V4kYO-ZaeCk2DQ6FjCTXGAPpzVGvY-dJdIlzazPKJrGhBMrL1n8mtdUtodq8O_c71WgOQzzI1BhpN_6KD5vnZmnCFxa5DNkjMtF5VzsFAeP_JTt3lv5LHdvpO3l3D_pvzbt7D_7OB-U1wEvxeTRKlLsVpm0EoX5eYpDl_HSGJRR8V9HW3uExBbR4bRFvZpAtPRB1WWMZrlo_f9HKisZNNek"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-stack-lg">
<p className="text-white font-headline-md text-headline-md italic">Creating memories that resonate forever.</p>
</div>
</div>
</section>
</main>
      <Footer />
    </>
  );
}
