
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function VendorDashboardPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">

<section className="mb-section-gap">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-stack-md">
<div>
<span className="font-micro-label text-micro-label text-secondary uppercase tracking-widest mb-stack-sm block">Vendor Portal</span>
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container">Welcome back, Artisanal Catering</h2>
</div>
<div className="flex gap-stack-sm">
<button className="bg-primary hover:scale-105 active:scale-95 transition-all text-white px-8 py-3 rounded-full font-bold flex items-center gap-2">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>add</span>
                        New Listing
                    </button>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-section-gap">
<div className="glass-card p-8 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-lg">
<div className="p-3 bg-primary-fixed rounded-xl text-primary">
<span className="material-symbols-outlined">person_add</span>
</div>
<span className="text-secondary font-bold text-micro-label">+12%</span>
</div>
<h4 className="text-on-surface-variant font-micro-label uppercase tracking-widest mb-1">New Leads</h4>
<p className="font-display-lg text-display-lg-mobile text-primary-container">12</p>
</div>
<div className="glass-card p-8 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-lg">
<div className="p-3 bg-tertiary-fixed rounded-xl text-tertiary">
<span className="material-symbols-outlined">event_available</span>
</div>
<span className="text-on-tertiary-container font-bold text-micro-label">Next: Sat</span>
</div>
<h4 className="text-on-surface-variant font-micro-label uppercase tracking-widest mb-1">Upcoming Events</h4>
<p className="font-display-lg text-display-lg-mobile text-primary-container">8</p>
</div>
<div className="glass-card p-8 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-lg">
<div className="p-3 bg-secondary-fixed rounded-xl text-secondary">
<span className="material-symbols-outlined">payments</span>
</div>
<span className="text-secondary font-bold text-micro-label">Record High</span>
</div>
<h4 className="text-on-surface-variant font-micro-label uppercase tracking-widest mb-1">Revenue</h4>
<p className="font-display-lg text-display-lg-mobile text-primary-container">$45,200</p>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter items-start">

<section className="lg:col-span-2 glass-card rounded-2xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)]">
<div className="p-8 border-b border-outline-variant/20 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-primary-container">Recent Inquiries</h3>
<a className="text-secondary font-bold text-micro-label hover:underline" href="#">VIEW ALL</a>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead className="bg-surface-container-low">
<tr>
<th className="px-8 py-4 font-micro-label text-on-surface-variant uppercase">Client Name</th>
<th className="px-8 py-4 font-micro-label text-on-surface-variant uppercase">Event Type</th>
<th className="px-8 py-4 font-micro-label text-on-surface-variant uppercase">Date</th>
<th className="px-8 py-4 font-micro-label text-on-surface-variant uppercase text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Portrait of a young bride-to-be, elegantly dressed in a contemporary silk gown, looking at venue photos on a tablet. The lighting is soft and ethereal, set against a backdrop of a high-end bridal boutique with minimalist decor. The image communicates a sense of luxury, anticipation, and detailed event planning." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoN7_RS6kFxkG88nx5QAQ1lfeukb6eEH42hEIKAbSLXvMO75pz3l-ubYUOf_k3ssqP8nRI0DCd5XyVBUL7HOfrGBM1k-FqDXlrlQgTT752B9P5p9yMkYLBzRDItEDNhbkedHRgBoErpCqofcuvMhc0ovUILFs65Jc2SwdV7Xw9WptLUEAnz-HVCmvu0cGS1leo_bULuPjmF1YQnKh4B_mOOJ-iH9nz1m4IVXdfD2P24pwDbaRRRRUX1Q3k2ta3IW6z52Zs1kFo3rM"/>
</div>
<span className="font-bold text-primary">Eleanor Vance</span>
</div>
</td>
<td className="px-8 py-6 text-on-surface-variant">Wedding Reception</td>
<td className="px-8 py-6 text-on-surface-variant">Sep 24, 2024</td>
<td className="px-8 py-6 text-right">
<button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-micro-label hover:scale-105 transition-transform">RESPOND</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A confident corporate executive in a tailored charcoal suit, standing in a modern glass skyscraper lobby. The environment is sleek, featuring polished stone floors and expansive views of a metropolitan skyline at dusk. The mood is professional, high-stakes, and elite, reflecting a premium corporate event atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADbdIWh7MFO46kw3pXdHRPVAy11nhuA6uLS9gskGvOxwDolO1jrav3IBqk2yYqqrslf_nBaC6rLyvXd7ClBC09AtuW3lRvIIttRj-5I7R6onPIb5Swhb-yuoGbHU00ZXl_Olw3H2c2z4remvdhELI-RMUnnMiiRYnc64-HkeVgc5oQlE2bYxfSTGpp_lfcWbg_Nm_zTi5tuh1SOcXTGBF2-zgoZpGAA5_mw6IS1WJIuuxqhRB_4gntbKkf6tXWL4Qa_Do7DfxxbRc"/>
</div>
<span className="font-bold text-primary">Marcus Thorne</span>
</div>
</td>
<td className="px-8 py-6 text-on-surface-variant">Gala Dinner</td>
<td className="px-8 py-6 text-on-surface-variant">Oct 12, 2024</td>
<td className="px-8 py-6 text-right">
<button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-micro-label hover:scale-105 transition-transform">RESPOND</button>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest transition-colors">
<td className="px-8 py-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A stylish woman in an avant-garde cocktail dress, laughing while holding a crystal glass at a sophisticated rooftop party. The background shows a vibrant city at night with blurred bokeh lights. The visual style is chic, cinematic, and full of life, embodying the effortless luxury of a boutique celebration." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtiyn85FZX8u_Dq5E8Bnfp5H0xhyYBN4dDeERCFdScx3wYRPWNFF_hVakKmUu46Sb8UU7p7b_2Szpi6oQpGqrJjlRrByBP6mKpBe8ixQjlWmmyIMbwrZU-7f3eCfKiWR_dIiOsPrkGuhoXJH-OiDY0pbqEOtmIfg2iyMTvAg0T8GOAw1FSe2KEyqga6r9d3dSI0Q0FPvNVxu1o-d8uQ4HyOhdkPjMyL3wf3vD1aie7bpiuRZFDW2TlUxtKOumvEovFk9PKDAGWSto"/>
</div>
<span className="font-bold text-primary">Sophia Chen</span>
</div>
</td>
<td className="px-8 py-6 text-on-surface-variant">Anniversary</td>
<td className="px-8 py-6 text-on-surface-variant">Nov 05, 2024</td>
<td className="px-8 py-6 text-right">
<button className="bg-primary text-white px-5 py-2 rounded-full font-bold text-micro-label hover:scale-105 transition-transform">RESPOND</button>
</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="glass-card rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] h-full">
<div className="p-8 border-b border-outline-variant/20">
<h3 className="font-headline-md text-headline-md text-primary-container">Active Projects</h3>
</div>
<div className="p-8 flex flex-col gap-stack-md">

<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-surface-container-highest flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="An exquisite, multi-layered wedding cake featuring delicate gold leaf accents and edible floral decorations, displayed on a minimalist marble pedestal. The surrounding environment is a bright, high-end venue with soft focus backgrounds. The lighting is warm and inviting, emphasizing the craftsmanship and luxury of professional artisanal catering." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIa-kKy79rG10BnoA1k8LksXJ5kqcD_C1yuHa0TiAYyt_4d3jGWjkDKqEV-Fs5CMkeWRb0bXHhyTlb6-O9OSlaK_wyd-tSK-2JhoYKuHVUJ8soU4pABewz1xlGV2FfMkOKa8JRvBwF4Yv7EVaMCHR3yIhlIYMBsH_IVsPBCEhnZwCshtZcovi3gBn2Sg9niszRLx2_-PddC4M2w1Exn_HfNNJvqJKA-LHzyRWz7bsO_tgWakK0E3WBkdyLaR1xzNsfH4jRShLRToo"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h5 className="font-bold text-primary">The Hilton Gala</h5>
<span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">Active</span>
</div>
<p className="text-on-surface-variant text-sm mb-2">350 Guests • Plated Dinner</p>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: '75%' }}></div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-surface-container-highest flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A beautifully arranged spread of artisanal hors d'oeuvres on a sleek black slate board, featuring micro-greens and vibrant edible flowers. The setting is a professional studio with soft, directional lighting that creates elegant highlights and deep, rich shadows. The mood is sophisticated and culinary-focused, representing premium vendor quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_DWEOhX9J2LV_Q15gWS8w0z-wsQEAgaG9MA-_hrSG7XKoojwRrI9M1QrCOHkQkarp0Gl6ngqc_OkoVt_r9c5Bb9vB4lt9T0EvMTnPTqeS7IYRfunxqxy3w0m9J5bUALIZTIZZvTH6DtuTqdrZRQCBkdS00rZ52P2oH6-ak3H9Clrs_zTPOHVg6pXmhMswKJTAzZV9jUAG-N8B3w8zuWqS5A5oNj1lpEhuofSd2kQhdBjvt42uyJvZyIVX8dvKZKelEdHOfT0F3CQ"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h5 className="font-bold text-primary">Modern Art Launch</h5>
<span className="bg-tertiary-fixed-dim/20 text-on-tertiary-container px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">Pending</span>
</div>
<p className="text-on-surface-variant text-sm mb-2">120 Guests • Canapés</p>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-tertiary-fixed-dim h-full" style={{ width: '30%' }}></div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-16 h-16 rounded-xl bg-surface-container-highest flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A refined table setting for a luxury private dinner, featuring fine bone china, silver cutlery, and crystal glassware on a crisp white linen tablecloth. Minimalist floral centerpieces in muted tones add a touch of nature. The lighting is warm and candlelit, creating an intimate, exclusive atmosphere for high-end hospitality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiGThOgdC0MAJD2xzo2vO-8zNGFdcOxhJuIwM1nUxSCAb3FInsL18sCWMsnx7_NLMpYBFEIbHxiEKnCPA4ZnfL8p8-SeCsFmwPE7o5kxG30JKpoP0nM2ge2W_0HzcI-xY4S3eOZ5gQwUVZgZNEwaiIwnhfrBe8dSP6dgBi3KHMMEO--lmbR7sX1IeTfikGEpgMckVyBUvgoM1pKnntPVGYEXoBNbPMGGGr5f6Gc2PySpGcQPwUtM9tkuEfx6umiLnc60onqDZXHEQ"/>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-1">
<h5 className="font-bold text-primary">Riverside Private</h5>
<span className="bg-secondary/10 text-secondary px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tighter">Active</span>
</div>
<p className="text-on-surface-variant text-sm mb-2">24 Guests • Tasting Menu</p>
<div className="w-full bg-surface-container-high h-1 rounded-full overflow-hidden">
<div className="bg-secondary h-full" style={{ width: '90%' }}></div>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
      <Footer />
    </>
  );
}
