
import React from 'react';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function LoginPage() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-background">

<div className="fixed inset-0 z-0">
<img alt="Luxury event orchestration background" className="w-full h-full object-cover brightness-[0.7]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNak5Ku1UB-MdPdj2rIDMTn3yz6nkVq9dxXd_h4lPdRdCBvk5cfHP0oob7UAdRCWqK6r0jyaQCVVzTfia99K9nmbNsX9W-9mAYhpuJCC2LBTO32VTHPUpGNN9wVvMYIO5pvU6mZlElM7vxrNBaZ1xD6PjmofZQQqGQQ6z4kivUeqkyL49TpNxIrHmEGDKq44_G6tV_aFh5X9dUizBAapkM_1-55G2qrz3whPuluOyTHxc__rHKAGTPpUTl3g1QhSPCE_uo4BOOwdA"/>
<div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-primary/40"></div>
</div>

<div className="relative z-10 w-full max-w-[440px] animate-in fade-in slide-in-from-bottom-8 duration-700">

<div className="text-center mb-stack-lg">
<h1 className="font-display-lg-mobile text-display-lg-mobile text-white tracking-tight">Eveno</h1>
<p className="font-body-md text-white/80 mt-1">Orchestrating Excellence</p>
</div>

<div className="glass-card rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden relative">

<div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[80px]"></div>
<header className="mb-stack-lg">
<h2 className="font-headline-md text-headline-md text-primary mb-2">Welcome Back</h2>
<p className="font-body-md text-on-surface-variant">Sign in to manage your luxury events.</p>
</header>
<form className="space-y-5" >

<div className="space-y-2">
<label className="font-micro-label text-micro-label text-outline uppercase tracking-widest ml-1" htmlFor="email">Email Address</label>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">mail</span>
<input className="w-full h-14 pl-12 pr-4 bg-white/50 border-outline-variant rounded-xl focus:ring-primary focus:border-primary transition-all duration-300 input-focus-effect placeholder:text-outline-variant" id="email" placeholder="name@evently.com" type="email"/>
</div>
</div>

<div className="space-y-2">
<div className="flex justify-between items-center px-1">
<label className="font-micro-label text-micro-label text-outline uppercase tracking-widest" htmlFor="password">Password</label>
<a className="text-xs font-bold text-primary hover:text-secondary transition-colors" href="#">Forgot Password?</a>
</div>
<div className="relative group">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors">lock</span>
<input className="w-full h-14 pl-12 pr-12 bg-white/50 border-outline-variant rounded-xl focus:ring-primary focus:border-primary transition-all duration-300 input-focus-effect" id="password" placeholder="••••••••" type="password"/>
<button className="absolute right-4 top-1/2 -translate-y-1/2 text-outline-variant hover:text-outline" type="button">
<span className="material-symbols-outlined">visibility</span>
</button>
</div>
</div>

<button className="w-full h-14 mt-4 bg-primary text-white font-bold rounded-full shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group">
                        Sign In
                        <span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</form>

<div className="relative my-stack-lg flex items-center">
<div className="flex-grow border-t border-outline-variant/30"></div>
<span className="px-4 font-micro-label text-micro-label text-outline whitespace-nowrap">OR CONTINUE WITH</span>
<div className="flex-grow border-t border-outline-variant/30"></div>
</div>

<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center h-12 bg-white border border-outline-variant rounded-xl hover:bg-surface transition-colors duration-200 group">
<svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="#EA4335" />
</svg>
<span className="text-sm font-semibold">Google</span>
</button>
<button className="flex items-center justify-center h-12 bg-black text-white rounded-xl hover:bg-zinc-800 transition-colors duration-200 group">
<svg className="w-5 h-5 mr-2 fill-current" viewBox="0 0 24 24">
<path d="M17.05 20.28c-.96 0-2.04-.6-3.23-.6-1.21 0-2.31.6-3.16.6-1.5 0-4.04-2.18-4.04-5.71 0-3.32 2.21-5.11 4.14-5.11.96 0 1.77.56 2.39.56.58 0 1.5-.6 2.56-.6 1.11 0 2.51.58 3.25 1.62-2.26 1.19-1.9 4.17.43 5.16-.76 1.76-1.78 3.51-3.34 4.08zM14.54 6.72c-.51.64-1.39 1.1-2.21 1.1-.11 0-.21-.01-.29-.02.03-1.01.55-1.99 1.15-2.67.59-.68 1.54-1.16 2.37-1.16.09 0 .19.01.27.02-.02 1.05-.62 2.05-1.29 2.73z" />
</svg>
<span className="text-sm font-semibold">Apple</span>
</button>
</div>
</div>

<div className="mt-8 text-center">
<p className="font-body-md text-white/90">
                    Don't have an account? 
                    <a className="font-bold text-white underline underline-offset-4 decoration-secondary hover:text-secondary transition-colors ml-1" href="#">Sign Up</a>
</p>
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
