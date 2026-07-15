import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { createClient } from '@/utils/supabase/server';

export default async function VendorsPage() {
  const supabase = await createClient();
  const { data: vendors, error } = await supabase
    .from('vendors')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-background">
        <section className="mb-stack-lg pt-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-2">Vendor Directory</h2>
          <p className="text-on-surface-variant max-w-2xl mb-8">Curated excellence for your most significant moments. Connect with the industry's finest artisans.</p>

          <a href="/vendor/login" className="block w-full bg-red-600 hover:bg-red-700 text-white rounded-2xl p-6 mb-8 text-center transition-colors shadow-lg group">
            <h3 className="text-xl md:text-2xl font-bold flex items-center justify-center gap-2">
              Join as a Vendor
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </h3>
            <p className="text-white/80 mt-2 text-sm md:text-base">Showcase your services to a premium audience. Apply today.</p>
          </a>

          <div className="sticky top-14 md:top-24 z-40 py-4 bg-surface/80 backdrop-blur-sm -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
            <div className="flex items-center gap-3">
              <div className="relative flex-grow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
                <input className="w-full h-14 pl-12 pr-4 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="Search venues, catering..." type="text" />
              </div>
              <button className="h-14 px-6 flex items-center gap-2 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all active:scale-95">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          {error && <p className="text-red-500">Error loading vendors: {error.message}</p>}
          {!error && vendors?.length === 0 && <p className="col-span-full text-center text-on-surface-variant">No vendors registered yet.</p>}
          
          {vendors?.map((vendor) => (
            <div key={vendor.id} className="group relative flex flex-col bg-white rounded-3xl overflow-hidden shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={vendor.images?.[0] || "https://lh3.googleusercontent.com/aida-public/AB6AXuAtzxxAJIrzbn2AxU2yaamZ10wJfOKASFlECEEJnCpXFe-BMoQgUixuUMuMd4y7of7F26NaJ0Ze5mADqnsbPQFO9mBg5KohUqQOpwPStu5ivcvZtvy0y0LvI5QQ5U0-EGwlDJh8-ZuYCHRvIl5W4OQ6vVGfdaMMlntseLLJ95MbudHwGHJdtTPYjlLRg_zZtoVmyRjiwjFBw05qrY2cZ55kNoX2VUZr5dZdlhT_g-Sgf7QSdrEOvKjDEE8EtJwolm4dbeUbes96t88"} alt={vendor.name} />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-full glass-card text-primary font-bold text-xs uppercase tracking-wider">{vendor.category}</span>
                </div>
                <button className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full glass-card flex items-center justify-center text-primary hover:text-secondary transition-colors">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>favorite</span>
                </button>
              </div>
              <div className="p-stack-lg flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline-md text-primary text-xl leading-tight">{vendor.name}</h3>
                  <div className="flex items-center gap-1 bg-secondary/10 text-secondary px-2 py-1 rounded-lg">
                    <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="font-bold text-sm">5.0</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant mb-4">
                  <span className="material-symbols-outlined text-sm">location_on</span>
                  <span className="text-sm">{vendor.service_area}</span>
                </div>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{vendor.description}</p>
                <div className="mt-auto flex gap-3">
                  <button className="flex-grow py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-container transition-all">View Details</button>
                  <button className="w-14 h-14 flex items-center justify-center border-2 border-primary/20 text-primary rounded-full hover:bg-primary/5 transition-all">
                    <span className="material-symbols-outlined">calendar_today</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
