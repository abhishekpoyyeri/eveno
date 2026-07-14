
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function VendorRegisterPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">
<div className="max-w-3xl mx-auto">

<div className="flex items-center justify-between mb-section-gap relative">

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-surface-container-highest -z-10 -translate-y-1/2"></div>

<div className="flex flex-col items-center gap-stack-sm bg-background px-4">
<div className="w-10 h-10 rounded-full step-completed flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
</div>
<span className="font-micro-label text-micro-label text-primary">1. BASIC INFO</span>
</div>

<div className="flex flex-col items-center gap-stack-sm bg-background px-4">
<div className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary font-bold">
                        2
                    </div>
<span className="font-micro-label text-micro-label text-primary">2. BUSINESS DETAILS</span>
</div>

<div className="flex flex-col items-center gap-stack-sm bg-background px-4">
<div className="w-10 h-10 rounded-full border-2 border-surface-container-highest bg-white flex items-center justify-center text-outline-variant font-bold">
                        3
                    </div>
<span className="font-micro-label text-micro-label text-on-surface-variant">3. VERIFICATION</span>
</div>
</div>

<div className="mb-stack-lg">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-sm">Grow your business with Eveno</h1>
<p className="text-on-surface-variant font-body-lg">Tell us more about your company to start receiving high-end event inquiries.</p>
</div>

<div className="bg-white rounded-2xl p-stack-lg md:p-12 soft-shadow border border-outline-variant/10">
<form className="space-y-stack-lg">

<div className="space-y-2">
<label className="font-bold text-on-surface-variant text-sm block">Company Name</label>
<input className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-200" placeholder="e.g. Majestic Florals &amp; Decor" type="text"/>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
<div className="space-y-2">
<label className="font-bold text-on-surface-variant text-sm block">Category</label>
<div className="relative">
<select className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest appearance-none transition-all duration-200">
<option disabled value="">Select a category</option>
<option value="venue">Venue</option>
<option value="catering">Catering</option>
<option value="photography">Photography</option>
<option value="music">Music &amp; Entertainment</option>
<option value="planning">Event Planning</option>
</select>
<span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-outline">expand_more</span>
</div>
</div>
<div className="space-y-2">
<label className="font-bold text-on-surface-variant text-sm block">Service Area</label>
<input className="w-full h-14 px-4 rounded-xl border border-outline-variant bg-surface-container-lowest transition-all duration-200" placeholder="e.g. Greater London, NYC Metro" type="text"/>
</div>
</div>

<div className="space-y-4">
<div>
<label className="font-bold text-on-surface-variant text-sm block">Portfolio / Past Events</label>
<p className="text-xs text-outline mb-2">Upload PDFs, or high-resolution images of your best work (Max 20MB)</p>
</div>
<div className="border-2 border-dashed border-primary/20 bg-primary-fixed/10 rounded-2xl py-12 flex flex-col items-center justify-center group hover:border-primary/50 transition-all cursor-pointer" id="dropzone">
<div className="w-16 h-16 rounded-full bg-white soft-shadow flex items-center justify-center text-primary mb-stack-md group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>cloud_upload</span>
</div>
<p className="font-bold text-primary">Upload your portfolio</p>
<p className="text-on-surface-variant text-sm">Drag and drop or click to browse files</p>
<input className="hidden" id="fileInput" multiple type="file"/>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
<div className="aspect-square rounded-lg bg-surface-container-high relative overflow-hidden group">
<div className="w-full h-full bg-cover bg-center" data-alt="A professional high-end luxury wedding reception setup with crystal chandeliers and white floral arrangements, captured in soft evening lighting with a shallow depth of field. The aesthetic is clean, sophisticated, and evokes a premium event vibe consistent with a high-end service portfolio." style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBTn1-striYw9oxBjiwpuVIkKstC768qFJ_vHLEKNfcMEIwSrq8_r5ve5Xj4aZFWBj9UpLv2it2Qvu5MI6Xnp7XMRf-1ST8RoN8RThz23jawcRksQ-sYooq0XPfI8PhYyGKoD7dJnUJd6udvM5u2h5ZvpKPATF4JvL3eIzHOrP77IzpYkP1ETrbKSXBI3NmCYDBavdMhIykwRd309miw-J6sLOEsTna5FwgNXSpAUCP1FEJmd-Fl5T8ioMsJ1iIR4HEoaZ7rPged4A')" }}></div>
<button className="absolute top-2 right-2 bg-black/40 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="material-symbols-outlined text-sm">close</span>
</button>
</div>
<div className="aspect-square rounded-lg bg-surface-container-high border border-outline-variant/30 flex flex-col items-center justify-center gap-1 text-outline">
<span className="material-symbols-outlined text-2xl">description</span>
<span className="text-[10px] font-bold">PORTFOLIO_V2.PDF</span>
</div>
</div>
</div>
</form>
</div>

<div className="mt-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md">
<button className="w-full md:w-auto px-10 h-14 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary-fixed transition-all flex items-center justify-center gap-2">
<span className="material-symbols-outlined">arrow_back</span>
                    Back
                </button>
<button className="w-full md:w-auto px-12 h-14 rounded-full step-completed text-white font-bold hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg">
                    Next Step
                    <span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>

<p className="text-center text-outline text-sm mt-stack-lg">
                Your data is stored securely. By continuing, you agree to our <a className="text-primary underline" href="#">Privacy Policy</a>.
            </p>
</div>
</main>
      <Footer />
    </>
  );
}
