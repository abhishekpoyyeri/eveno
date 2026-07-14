
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function AdminDashboardPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">

<section className="mb-section-gap">
<div className="mb-stack-lg">
<h2 className="font-headline-md text-headline-md text-primary">Dashboard Overview</h2>
<p className="text-on-surface-variant">Orchestrating platform excellence and vendor synergy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

<div className="glass-card rounded-2xl p-stack-lg shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50 hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-md">
<span className="text-on-surface-variant font-micro-label uppercase">Total Users</span>
<div className="p-2 rounded-full bg-primary/5 text-primary">
<span className="material-symbols-outlined text-lg">group</span>
</div>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-display-lg-mobile font-display-lg text-primary">12,842</h3>
<span className="text-secondary text-sm font-bold flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 8%
                        </span>
</div>
</div>

<div className="glass-card rounded-2xl p-stack-lg shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50 hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-md">
<span className="text-on-surface-variant font-micro-label uppercase">Active Events</span>
<div className="p-2 rounded-full bg-secondary/5 text-secondary">
<span className="material-symbols-outlined text-lg">sensors</span>
</div>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-display-lg-mobile font-display-lg text-primary">452</h3>
<span className="text-secondary text-sm font-bold flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 12%
                        </span>
</div>
</div>

<div className="glass-card rounded-2xl p-stack-lg shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50 hover:scale-[1.02] transition-transform duration-300">
<div className="flex justify-between items-start mb-stack-md">
<span className="text-on-surface-variant font-micro-label uppercase">Platform Revenue</span>
<div className="p-2 rounded-full bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim">
<span className="material-symbols-outlined text-lg">payments</span>
</div>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-display-lg-mobile font-display-lg text-primary">$1.2M</h3>
<span className="text-secondary text-sm font-bold flex items-center">
<span className="material-symbols-outlined text-sm">trending_up</span> 4%
                        </span>
</div>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">

<section className="lg:col-span-2">
<div className="glass-card rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50 overflow-hidden">
<div className="p-stack-lg border-b border-outline-variant/10 flex justify-between items-center">
<h3 className="font-headline-md text-headline-md text-primary">Pending Vendor Approvals</h3>
<button className="text-sm text-primary font-bold hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="text-on-surface-variant font-micro-label uppercase bg-surface-container-low/50">
<th className="px-stack-lg py-4">Vendor Name</th>
<th className="px-stack-lg py-4">Category</th>
<th className="px-stack-lg py-4">Location</th>
<th className="px-stack-lg py-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-outline-variant/10">
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-stack-lg py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A luxury catering company's professional logo and sample hors d'oeuvres. The imagery is bright, elegant, and uses high-end styling with white linens and gold accents, fitting the sophisticated modernism of the Eveno brand." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwV4Z2vMXmG_oUA8QDSgSFB4bJGxUk0K4odGJNctqct8wNpVsnTcJwl7Aeu-T_D0eK0kFVOeeVlkSVpWdu0RIM_bmY3DLND1UycGMCqL9o1YeukFNffy6AdyoSOGG1BmbM-nkXsu9Lc6F4g9DeDsrWVe7-k8djiNo95pHxdM_yBYFB92RMCJA3BWplBV--ZiU3xc3s9Y-7CsdwL25YywNycOa5SOjLDQr7CwUKBEmBhjfs0r68kEAL_yS0yFtpccmDxMiWQ9yb5Hc"/>
</div>
<span className="font-bold text-primary">Royal Culinary Arts</span>
</div>
</td>
<td className="px-stack-lg py-5 text-on-surface-variant">Catering &amp; Fine Dining</td>
<td className="px-stack-lg py-5 text-on-surface-variant">Paris, FR</td>
<td className="px-stack-lg py-5 text-right">
<div className="flex justify-end gap-2">
<button className="px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">Approve</button>
<button className="px-4 py-2 rounded-full border-2 border-outline text-outline font-bold text-xs hover:border-error hover:text-error transition-all">Reject</button>
</div>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-stack-lg py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A high-end audio-visual production company's equipment setup in a minimalist showroom. Includes sleek black speakers, atmospheric purple and blue accent lighting, and a clean technological aesthetic that feels modern and professional." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApbTFHhF52wznju2O76xU0C_-zwuwohYAdwO49fxFvEDaQyMsMDBUKXKZkN917sVbLSuugVEUIrVL4b19AGujdgU2oedXxe93exrHwqg0BXO3PXIybOviVxIQtIp_WQRn-qRQB4JWsLBqGbGsnawkkRGaBD9mCrtM8piyfUxRlCqKyLBvrzNnJv8NLD8yvO8LEqa1iHGihmNpi6zrmnGK89nO7BRtqk8lEkJz7vScJF89vOa7YTRMN3bGgYSPTyiVLoxTaSvbKaJQ"/>
</div>
<span className="font-bold text-primary">Lumina AV Systems</span>
</div>
</td>
<td className="px-stack-lg py-5 text-on-surface-variant">AV &amp; Lighting</td>
<td className="px-stack-lg py-5 text-on-surface-variant">London, UK</td>
<td className="px-stack-lg py-5 text-right">
<div className="flex justify-end gap-2">
<button className="px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">Approve</button>
<button className="px-4 py-2 rounded-full border-2 border-outline text-outline font-bold text-xs hover:border-error hover:text-error transition-all">Reject</button>
</div>
</td>
</tr>
<tr className="hover:bg-primary/5 transition-colors group">
<td className="px-stack-lg py-5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Floral design studio showcasing architectural orchid arrangements. The background is a crisp white minimalist space, allowing the vibrant colors of the exotic flowers to pop. The lighting is soft and diffused, emphasizing luxury and artistic detail." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp-gy2HmoLI1uHzOQd8p5pMGsFgGHlUgHzHdqGhVvRNRINqew7JLxBf1ORUJRzNAHhqkQ5gi1w80ScbnMNCATXTuW2yaNUfuVxTCt555RC4rf7yK-7ofCBP7NMUgGHyQJ25nZeRQky_dhJNnv90meilmIC-PFz0ilKNSiGQHTg-6vWiB9XH__ZkKRNTMFZR3mhK-SBUpWZLcB_N_dvFlisjMMup9OXb6H3v1k_HIkeuNiqBrjcgf09kmUNrF_JVUMySQJrTTd30w4"/>
</div>
<span className="font-bold text-primary">Bloom &amp; Structure</span>
</div>
</td>
<td className="px-stack-lg py-5 text-on-surface-variant">Floral &amp; Decor</td>
<td className="px-stack-lg py-5 text-on-surface-variant">New York, US</td>
<td className="px-stack-lg py-5 text-right">
<div className="flex justify-end gap-2">
<button className="px-4 py-2 rounded-full border-2 border-primary text-primary font-bold text-xs hover:bg-primary hover:text-white transition-all">Approve</button>
<button className="px-4 py-2 rounded-full border-2 border-outline text-outline font-bold text-xs hover:border-error hover:text-error transition-all">Reject</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="lg:col-span-1">
<div className="glass-card rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.04)] border border-white/50 h-full">
<div className="p-stack-lg border-b border-outline-variant/10">
<h3 className="font-headline-md text-headline-md text-primary">System Health</h3>
</div>
<div className="p-stack-lg flex flex-col gap-stack-md">

<div className="flex gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-primary">
<div className="text-primary">
<span className="material-symbols-outlined">info</span>
</div>
<div>
<p className="font-bold text-primary text-sm">Scheduled Maintenance</p>
<p className="text-xs text-on-surface-variant mt-1">Global DB optimization starting at 02:00 UTC.</p>
<p className="text-[10px] text-outline mt-2">2 hours ago</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary">
<div className="text-secondary">
<span className="material-symbols-outlined">warning</span>
</div>
<div>
<p className="font-bold text-primary text-sm">High Traffic Alert</p>
<p className="text-xs text-on-surface-variant mt-1">Vendor onboarding portal seeing 3x normal load.</p>
<p className="text-[10px] text-outline mt-2">45 minutes ago</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl bg-surface-container-low border-l-4 border-outline">
<div className="text-outline">
<span className="material-symbols-outlined">check_circle</span>
</div>
<div>
<p className="font-bold text-primary text-sm">API Sync Complete</p>
<p className="text-xs text-on-surface-variant mt-1">Payment gateway integration verified successfully.</p>
<p className="text-[10px] text-outline mt-2">12 minutes ago</p>
</div>
</div>
</div>
<div className="mt-auto p-stack-lg">
<div className="rounded-xl bg-primary-container p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-white text-xs font-bold uppercase tracking-widest">All Systems Operational</span>
</div>
<span className="material-symbols-outlined text-white/50 text-sm">bolt</span>
</div>
</div>
</div>
</section>
</div>

<div className="md:hidden mt-stack-lg px-4 py-8 glass-card rounded-2xl text-center">
<p className="text-primary font-bold">Orchestrating Excellence</p>
<p className="text-on-surface-variant text-sm mt-2">Eveno Admin Platform © 2024</p>
</div>
</main>
      <Footer />
    </>
  );
}
