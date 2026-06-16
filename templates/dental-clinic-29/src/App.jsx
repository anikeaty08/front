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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:tooth-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="tracking-tighter font-semibold text-lg leading-none">PEARL</span>
<span className="text-[0.65rem] text-zinc-500 font-medium tracking-wide uppercase mt-0.5">Dental Clinic</span>
</div>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#clinic">The Clinic</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:09470344718">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                        094703 44718
                    </a>
<a className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-zinc-900 text-white hover:bg-zinc-800 transition-colors shadow-sm" href="#contact">
                        Book Appointment
                    </a>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
<div className="absolute inset-0 bg-grid-pattern opacity-[0.3] pointer-events-none w-full h-[60vh] mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Accepting New Patients in Ranchi
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-zinc-900 mb-6 leading-[1.1]">
                    Precision Dental Care.<br/>
<span className="text-zinc-400">Radiant Smiles.</span>
</h1>
<p className="text-base sm:text-lg text-zinc-500 mb-2 max-w-2xl">
                    Experience world-class dentistry at Pearl Dental Clinic. Advanced technology meets compassionate care in the heart of Jharkhand.
                </p>
<p className="text-sm text-zinc-400 font-medium mb-10 tracking-wide">
                    (पर्ल डेंटल क्लिनिक)
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg gap-2" href="#contact">
                        Schedule a Visit
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium rounded-xl bg-white border border-zinc-200 text-zinc-900 hover:bg-zinc-50 transition-all shadow-sm gap-2" href="tel:09470344718">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        094703 44718
                    </a>
</div>
</div>
</div>
</main>

<section className="py-20 bg-white border-t border-zinc-200/50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 md:mb-16">
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-zinc-900 mb-4">Comprehensive Care</h2>
<p className="text-sm md:text-base text-zinc-500 max-w-2xl">From routine checkups to advanced procedures, we offer a full spectrum of dental services designed to keep your smile healthy and beautiful.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 group-hover:text-zinc-900 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:stethoscope-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">General Dentistry</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Routine checkups, professional cleaning, and preventative care to maintain optimal oral health.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 group-hover:text-zinc-900 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Cosmetic Procedures</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Teeth whitening, veneers, and smile makeovers to enhance the aesthetic appearance of your teeth.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 group-hover:text-zinc-900 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Restorative Care</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Dental implants, crowns, and bridges to restore functionality and structure to damaged teeth.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-50 border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-sm">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-6 text-zinc-700 group-hover:text-zinc-900 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-zinc-900 mb-2">Painless Extraction</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Safe and comfortable tooth removal, including complex wisdom teeth extractions using modern techniques.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

<div className="flex flex-col gap-8">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-zinc-900 mb-4">Visit Our Clinic</h2>
<p className="text-sm text-zinc-500">Located conveniently in Hinoo, Ranchi. We have created a modern, relaxing environment equipped with the latest dental technology.</p>
</div>
<div className="flex flex-col gap-4">

<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-1">Clinic Address</h4>
<p className="text-sm text-zinc-600 leading-relaxed">
                                    Pearl Dental Clinic (पर्ल डेंटल क्लिनिक)<br/>
                                    Anand Plaza, Saket Nagar Rd,<br/>
                                    Beside Indira Palace, Kilburn Colony,<br/>
                                    Shivpuri Colony, Hinoo,<br/>
                                    Ranchi, Jharkhand 834002
                                </p>
</div>
</div>

<a className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex items-center gap-4 hover:border-zinc-300 transition-colors group" href="tel:09470344718">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-0.5">Call Us</h4>
<p className="text-sm text-zinc-600">094703 44718</p>
</div>
</a>

<div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm flex items-start gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 flex-shrink-0">
<iconify-icon icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div className="w-full">
<h4 className="text-sm font-semibold text-zinc-900 mb-3">Consultation Hours</h4>
<div className="space-y-2 text-sm text-zinc-600">
<div className="flex justify-between border-b border-zinc-100 pb-2">
<span>Mon - Sat</span>
<span className="font-medium text-zinc-900">10:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between pt-1">
<span>Sunday</span>
<span className="font-medium text-zinc-900">By Appointment</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="h-full min-h-[400px] bg-zinc-200 rounded-3xl border border-zinc-300 relative overflow-hidden flex items-center justify-center shadow-inner">

<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="relative z-10 flex flex-col items-center gap-3 text-zinc-500">
<iconify-icon className="text-4xl text-zinc-400" icon="solar:map-bold-duotone"></iconify-icon>
<span className="text-sm font-medium">Interactive Map Area</span>
<a className="mt-2 px-4 py-2 bg-white rounded-lg border border-zinc-200 shadow-sm text-xs font-medium text-zinc-900 hover:bg-zinc-50 transition-colors flex items-center gap-2" href="https://maps.google.com/?q=Pearl+Dental+Clinic+Anand+Plaza+Saket+Nagar+Rd+Ranchi" target="_blank">
                            Open in Google Maps
                            <iconify-icon icon="solar:external-link-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 py-12 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:tooth-linear"></iconify-icon>
</div>
<span className="tracking-tighter font-semibold text-sm">PEARL</span>
</div>
<p className="text-xs text-zinc-500 text-center md:text-left">
                © 2023 Pearl Dental Clinic, Ranchi. All rights reserved.
            </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:shield-warning-linear"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
