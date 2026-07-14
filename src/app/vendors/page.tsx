
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function VendorsPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">

<section className="mb-stack-lg pt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Vendor Directory</h2>
<p className="text-on-surface-variant max-w-2xl mb-8">Curated excellence for your most significant moments. Connect with the industry's finest artisans.</p>

<div className="sticky top-14 md:top-24 z-40 py-4 bg-surface/80 backdrop-blur-sm -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
<div className="flex items-center gap-3">
<div className="relative flex-grow">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
<input className="w-full h-14 pl-12 pr-4 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Search venues, catering..." type="text"/>
</div>
<button className="h-14 px-6 flex items-center gap-2 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all active:scale-95" >
<span className="material-symbols-outlined">tune</span>
<span className="hidden md:inline">Filters</span>
</button>
</div>

<div className="flex gap-2 overflow-x-auto scroll-hide mt-4 py-2">
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-primary text-white text-micro-label uppercase tracking-widest">All Vendors</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-surface-container-high text-primary text-micro-label uppercase tracking-widest hover:bg-primary-container/20 transition-colors">Venues</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-surface-container-high text-primary text-micro-label uppercase tracking-widest hover:bg-primary-container/20 transition-colors">Catering</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-surface-container-high text-primary text-micro-label uppercase tracking-widest hover:bg-primary-container/20 transition-colors">Decor</button>
<button className="whitespace-nowrap px-6 py-2 rounded-full bg-surface-container-high text-primary text-micro-label uppercase tracking-widest hover:bg-primary-container/20 transition-colors">Floral</button>
</div>
</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A breathtaking luxury event venue with high ceilings, grand chandeliers, and floor-to-ceiling windows overlooking a city skyline at sunset. Warm golden lighting, opulent atmosphere, premium photography style for a high-end service directory." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtzxxAJIrzbn2AxU2yaamZ10wJfOKASFlECEEJnCpXFe-BMoQgUixuUMuMd4y7of7F26NaJ0Ze5mADqnsbPQFO9mBg5KohUqQOpwPStu5ivcvZtvy0y0LvI5QQ5U0-EGwlDJh8-ZuYCHRvIl5W4OQ6vVGfdaMMlntseLLJ95MbudHwGHJdtTPYjlLRg_zZtoVmyRjiwjFBw05qrY2cZ55kNoX2VUZr5dZdlhT_g-Sgf7QSdrEOvKjDEE8EtJwolm4dbeUbes96t88"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Premium Venue</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">Skyline Loft</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">4.9</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Manhattan, NY</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Exquisite gourmet catering presentation on long white marble tables. Minimalist food styling with fresh microgreens, edible flowers, and artisanal plating. Soft natural daylight, bright and airy luxury hospitality aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU9UnVQ-6BQZg5a8q9N6MxYkcA2GQSJFEOeDoZwwL7MRPjvXxm7MloVAhx0YR9aIhu68M1uCLHT83sjtv5sDbKA887AZ3-KK9b2o1U34yvEHybeNtRbOaa59VvWx4IOxhv7X4EeCVFifK2dynkMfgh_jrQ27i6CQTDuot_z4Gza2M2WiwUxGuMXmdFncVP9B83RQVBAI0Yh57gPraBSP1awF3GXnEA8pFcI9WUBeqimvEFyOXbHV40mBfjO40TsGnhdSvvP3Z3ySE"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Catering</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">Gourmet Artisans</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">4.8</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Brooklyn, NY</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="Sophisticated floral arrangement for a luxury gala. Tall glass vases with cascading white orchids and soft peach roses. Dim ambient event lighting with blue and violet undertones. Elegant and modern decor focus." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXzv3_KPb3V_m4v-GRIDWryr6nuKrhZYxuwq17Gmx-frvia5vfOL8xB43HXuRNFVyY0odzxaEBYMx70ubc9D3xWBaYWZvBGFz2RUxQZv_ojH4GkCq7uAoqUBdGWxK6Y5Q2I8c3F_W5cWVyf2DCUJF3gvRKKORfDDBnIeZb0N5m1UcqmjAK9dePLUNAv3T-eWD6jMSrW3aFIVmBGhCtT9KpEBb9tNpqGKwg7Z6Y5ajjKMgPiUx_q_2A6sceef9ajJknDke2Na-uzQg"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Decor & Floral</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">Velvet & Vine</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">5.0</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Jersey City, NJ</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="High-end cocktail bar setup with professional mixologists in formal attire. Crystal glassware, gold bar accents, and premium spirit bottles. Sophisticated moody lounge lighting, vibrant teal and gold accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_zS1zjsryOrF9ZUR5hp6nSp5LC0_qzyiYd31MvS5zPVJPDoo9kIXDryZ7GECB4MqNIQjkri4dtei5LD51-NDk3c9ajVd5t7qwA0NOSWBdkOO4iCcEx7JNnTEZtXPFPUVXqURgTJ3jte2ScwxZfWbUtX-MN85iS6XXAs4qZ8BfsRaGvPU8X2JNnsdAysnF1IDDX15e0_9lpbszUsbsHsqJ0bRSWoW-OaD0e37PLmBUUY306Qewr3qfNXQi3d4SLcENn5aGVeGizMU"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Mixology</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">Crystal Curation</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">4.7</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Manhattan, NY</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A grand ballroom set for a wedding with thousands of fairy lights draped from the ceiling like a starry night. Elegant table settings with white linens and silver accents. Dreamy romantic atmosphere with a luxury modern finish." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPG283O4OLL5wAFMwR93AWQrRH32fzdKXziuck7sBBaKEYAW5UWmzQVkrbJLjBFwe4lMDCfoxor33IzJjwOPBBJfq92bzN8FX7nxGATtMfquj229Hmq7dVDDD_xTkixAVyQNuV7SwBul2ziTwJjn0yDsl0eN_YUuEZA0_2l7LZFFIX1GrRkjoTBfQjf58yTaJLimYcn2yq7n17mDpSvDA5fdaH3zmvIlVdUre17C249sI34AJCKbmFsDvn_Qaq1n8sQVp3zLCE3P4"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Venue</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">The Glass Pavilion</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">4.9</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Westchester, NY</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>

<div className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
<div className="relative aspect-[4/3] overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" data-alt="A professional lighting and sound production setup for a high-energy corporate event. Dramatic beam lights in indigo and coral, sleek staging, and high-definition LED screens. Professional technical excellence atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAtfXpT4gKa6K77o5G4a3QAiLti5rchNTijt9cA4tp0eDzOaHXQCHnOZcs1pNJwFzcoNS3cPqMey_Y4ludVuRhSZDiha88E1jLSjftHZ7nP5RLn4XFMgtT1eHDW6vc1pu-_ZX9MmWsht__9hCMxH60ggz4YEqS4bO4gi56_eJ-2ujRKHc9gn7Z6NMTYk6WNS_Vp7kmpCJm2DI85z60figFP7l0SjyG2i1i3GVQ_j0WagzK9s_JJfYhkcbHqESV53YYt8dV1zG7Gjc"/>
<div className="absolute top-4 left-4 z-20">
<span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">Production</span>
</div>
<button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="p-stack-lg flex flex-col flex-grow">
<div className="flex justify-between items-start mb-2">
<h3 className="font-headline-md text-primary text-xl leading-tight">Lumina Events</h3>
<div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
<span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="font-bold text-sm">4.6</span>
</div>
</div>
<div className="flex items-center gap-2 text-on-surface-variant mb-6">
<span className="material-symbols-outlined text-sm">location_on</span>
<span className="text-sm">Long Island, NY</span>
</div>
<div className="mt-auto flex gap-3">
<button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
<button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
<span className="material-symbols-outlined">calendar_today</span>
</button>
</div>
</div>
</div>
</div>
</main>
      <Footer />
    </>
  );
}
