import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-slate-50/80 backdrop-blur-md border-b border-slate-200/50 z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-semibold tracking-tighter uppercase text-slate-900">
                HOSTELOS
            </div>
<a className="text-sm font-medium text-white bg-slate-900 px-4 py-2 rounded-full hover:bg-slate-800 transition-colors" href="#install">
                Get Started
            </a>
</div>
</nav>

<header className="pt-32 pb-24 px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-gradient-to-b from-slate-200/50 to-transparent rounded-full blur-3xl -z-10" style={{opacity: '0.6'}}></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-sm text-slate-600 mb-8 shadow-sm">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>The 100% Ownership Model</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Stop Renting Your Booking System.<br/>
<span className="text-slate-400">Start Owning Your Success.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                The only Professional Hostel Management System that lives on YOUR server, handles YOUR guests via WhatsApp, and takes 0% commission on your hard-earned bookings. Forever.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 text-white text-base font-medium hover:bg-slate-800 transition-colors flex items-center justify-center gap-2" href="#install">
                    Claim Your Digital Property
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-slate-700 border border-slate-200 text-base font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 shadow-sm" href="#benefits">
                    View Features
                </a>
</div>
</div>
</header>

<section className="py-24 bg-white border-y border-slate-200/50 px-6" id="benefits">
<div className="max-w-7xl mx-auto">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Fixing the broken model.</h2>
<p className="text-base text-slate-500 font-medium">We rebuilt hostel management from the ground up to give power, data, and profits back to the owners.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Zero Commissions</h3>
<p className="text-sm text-slate-500 leading-relaxed">OTA platforms take 15-20%. Our system takes 0%. If you book RM10,000, you keep exactly RM10,000.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Instant WhatsApp Alerts</h3>
<p className="text-sm text-slate-500 leading-relaxed">No more missed emails. Get booking notifications and guest details straight to your WhatsApp the second they hit 'Confirm'.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Verified Leads Only</h3>
<p className="text-sm text-slate-500 leading-relaxed">Stop the spam. Built-in SMS/WhatsApp OTP verification ensures every booking comes from a real person.</p>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-300 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-5 group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:server-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">100% Data Sovereignty</h3>
<p className="text-sm text-slate-500 leading-relaxed">Your guest list is your most valuable asset. It lives on your server, under your complete control. No third parties.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="mb-20 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-4">Engineered for conversion.</h2>
<p className="text-base text-slate-500 font-medium">Premium technology, optimized to turn visitors into verified guests instantly.</p>
</div>
<div className="space-y-32">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
<iconify-icon className="text-2xl" icon="solar:smartphone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Professional Guest Portal</h3>
<p className="text-base text-slate-500 leading-relaxed">A high-end, mobile-first booking experience that feels like a 5-star hotel interface. Smooth transitions, instant availability checks, and a seamless filter system makes finding the perfect bed effortless.</p>
</div>

<div className="flex-1 w-full max-w-md relative">
<div className="absolute inset-0 bg-slate-200 blur-2xl rounded-full opacity-50 -z-10"></div>
<div className="bg-white border border-slate-200 rounded-[2rem] p-4 shadow-xl shadow-slate-200/50">
<div className="w-full h-8 flex justify-between items-center mb-4 px-2">
<div className="w-4 h-4 rounded-full bg-slate-200"></div>
<div className="w-16 h-2 rounded-full bg-slate-200"></div>
</div>
<div className="space-y-3">
<div className="h-40 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col justify-end relative overflow-hidden">
<div className="absolute top-3 right-3 px-2 py-1 bg-white rounded text-xs font-medium text-slate-600 shadow-sm">Available</div>
<div className="w-1/2 h-3 rounded-full bg-slate-300 mb-2"></div>
<div className="w-1/3 h-2 rounded-full bg-slate-200"></div>
</div>
<div className="h-40 bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col justify-end relative overflow-hidden opacity-50">
<div className="absolute top-3 right-3 px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs font-medium text-slate-400">Sold Out</div>
<div className="w-1/2 h-3 rounded-full bg-slate-200 mb-2"></div>
<div className="w-1/3 h-2 rounded-full bg-slate-100"></div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center px-2">
<div className="w-12 h-3 rounded-full bg-slate-200"></div>
<div className="w-20 h-8 rounded-full bg-slate-900"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Smart OTP Guard</h3>
<p className="text-base text-slate-500 leading-relaxed">Every guest is verified via WhatsApp OTP before confirming. This completely eliminates "ghost bookings" and blocks non-serious inquiries before they even reach your dashboard, saving you time and frustration.</p>
</div>

<div className="flex-1 w-full max-w-md relative">
<div className="absolute inset-0 bg-slate-200 blur-2xl rounded-full opacity-50 -z-10"></div>
<div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
<div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<iconify-icon icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">WhatsApp System</div>
<div className="text-xs text-slate-400">Just now</div>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-4 border border-slate-100 rounded-tl-none">
<p className="text-sm text-slate-600 mb-3">Your booking verification code for Hostelos is:</p>
<div className="text-2xl font-semibold tracking-widest text-slate-900">849-201</div>
</div>
<div className="mt-6 flex gap-2 justify-center">
<div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-900 shadow-inner">8</div>
<div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-900 shadow-inner">4</div>
<div className="w-12 h-12 rounded bg-slate-50 border border-slate-200 flex items-center justify-center text-lg font-medium text-slate-900 shadow-inner">9</div>
<div className="w-4 flex items-center justify-center text-slate-300">-</div>
<div className="w-12 h-12 rounded bg-white border-2 border-slate-900 flex items-center justify-center text-lg font-medium shadow-sm relative">
<span className="w-[1px] h-5 bg-slate-900 animate-pulse"></span>
</div>
<div className="w-12 h-12 rounded bg-slate-50 border border-slate-200"></div>
<div className="w-12 h-12 rounded bg-slate-50 border border-slate-200"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 space-y-6">
<div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-800">
<iconify-icon className="text-2xl" icon="solar:widget-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">Total Management Control</h3>
<ul className="space-y-4 mt-6">
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="font-semibold text-slate-900 text-sm block mb-1">Inventory at a Glance</span>
<span className="text-sm text-slate-500">Manage private rooms or dormitory beds effortlessly.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="font-semibold text-slate-900 text-sm block mb-1">Dynamic Pricing</span>
<span className="text-sm text-slate-500">Set base rates and seasonal adjustments; totals calculate instantly.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-1" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<span className="font-semibold text-slate-900 text-sm block mb-1">SEO Ready</span>
<span className="text-sm text-slate-500">Built-in metadata ensures you rank on Google to capture direct traffic.</span>
</div>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-md relative">
<div className="absolute inset-0 bg-slate-200 blur-2xl rounded-full opacity-50 -z-10"></div>
<div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xl shadow-slate-200/50 flex flex-col gap-3">

<div className="p-3 border border-slate-100 rounded-xl flex items-center justify-between bg-slate-50">
<span className="text-sm font-medium text-slate-700">Accepting Bookings</span>
<div className="w-10 h-6 bg-slate-900 rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
<div className="text-xs text-slate-400 mb-1">Today's Revenue</div>
<div className="text-lg font-semibold text-slate-900">RM 1,240</div>
</div>
<div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
<div className="text-xs text-slate-400 mb-1">Occupancy</div>
<div className="text-lg font-semibold text-slate-900">85%</div>
</div>
</div>
<div className="p-4 border border-slate-100 rounded-xl bg-white shadow-sm">
<div className="flex justify-between items-center mb-4">
<div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Recent</div>
<div className="text-xs text-slate-400 hover:text-slate-900 cursor-pointer">View All</div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-xs font-medium">JD</div>
<div className="text-sm text-slate-700">Dorm 4</div>
</div>
<div className="text-sm font-medium text-slate-900">Paid</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-xs font-medium">AM</div>
<div className="text-sm text-slate-700">Private 1</div>
</div>
<div className="text-sm font-medium text-slate-900">Paid</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
<div className="max-w-4xl mx-auto relative z-10">
<div className="text-center mb-16">
<span className="text-slate-400 text-sm font-medium uppercase tracking-widest mb-4 block">The Business Logic</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
                    Why pay RM200/month for life when you can own the code for a one-time fee?
                </h2>
</div>
<div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
<p className="text-lg text-slate-300 mb-8 leading-relaxed font-medium">
                    Most software locks you in. If you stop paying, your business stops running. With our system, you break free from the subscription trap.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-200">Install once on your hosting.</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-200">Zero monthly subscriptions.</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-200">No per-booking hidden fees.</span>
</div>
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-base font-medium text-slate-200">Total control. You are the boss.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-slate-50" id="install">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Claim Your Digital Property Today</h2>
<p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                Stop being a tenant to big software companies. Secure your own professional booking engine, automate your guest communication, and keep 100% of your profits.
            </p>
<button className="px-8 py-4 rounded-full bg-slate-900 text-white text-lg font-medium hover:bg-slate-800 transition-all hover:scale-[1.02] shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 mx-auto">
                Schedule Your 1-Click Installation Now
                <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<p className="text-xs text-slate-400 mt-6 font-medium uppercase tracking-wider">One-time setup. Lifetime ownership.</p>
</div>
</section>

<footer className="py-8 border-t border-slate-200/50 bg-white text-center">
<div className="text-sm font-semibold tracking-tighter uppercase text-slate-400 mb-2">
            HOSTELOS
        </div>
<p className="text-xs text-slate-400">© 2023 Self-Hosted Solutions. All rights reserved.</p>
</footer>

    </>
  );
}
