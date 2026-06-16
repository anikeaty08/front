import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const btn = document.getElementById('mobile-menu-btn');
            const menu = document.getElementById('mobile-menu');
            const links = menu.querySelectorAll('a');

            btn.addEventListener('click', () => {
                menu.classList.toggle('hidden');
            });

            links.forEach(link => {
                link.addEventListener('click', () => {
                    menu.classList.add('hidden');
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<a className="flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center">
<iconify-icon className="text-amber-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-slate-900 text-lg uppercase">
                        Vishnu Prajapat Stamp Vendor
                    </span>
</a>

<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end">
<span className="text-xs text-slate-500 font-medium">Call for Consultation</span>
<a className="text-sm font-semibold tracking-tight text-slate-900 hover:text-amber-600 transition-colors" href="tel:9950320525">
                            +91 99503 20525
                        </a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white shadow-sm hover:bg-slate-800 transition-colors" href="#contact">
                        Contact Us
                    </a>
<button className="md:hidden p-2 text-slate-600 hover:text-slate-900" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-b border-slate-200" id="mobile-menu">
<div className="px-4 pt-2 pb-4 space-y-1 flex flex-col">
<a className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md" href="#services">Services</a>
<a className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md" href="#about">About Us</a>
<a className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-md" href="#faq">FAQ</a>
<a className="block px-3 py-2 text-base font-medium text-amber-600 hover:bg-amber-50 rounded-md" href="#contact">Contact Now</a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-amber-400 text-xs font-medium mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                Authorized Stamp Vendor in Jodhpur
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 leading-tight max-w-4xl text-slate-50">
                Get Your Property &amp; Legal Work Done <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Quickly &amp; Legally</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                Expert assistance for Plot Registry, Rent Agreements, Wasiyatnama, and all legal documentation. <span className="text-slate-300">Sahi salah, pakka kaam.</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-amber-500 px-8 text-sm font-medium text-slate-950 shadow-sm hover:bg-amber-400 transition-colors" href="tel:9950320525">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
                    Call 99503 20525
                </a>
<a className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-slate-800 border border-slate-700 px-8 text-sm font-medium text-white hover:bg-slate-700 transition-colors" href="#services">
                    View All Services
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="border-b border-slate-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-center text-xs font-medium text-slate-500 tracking-tight uppercase mb-6">Trusted for various legal and property needs</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 text-slate-400 opacity-70">
<div className="flex items-center gap-2 font-semibold tracking-tighter text-lg"><iconify-icon icon="solar:buildings-linear"></iconify-icon> JDA PATTA</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-lg"><iconify-icon icon="solar:home-angle-linear"></iconify-icon> PLOT REGISTRY</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-lg"><iconify-icon icon="solar:document-add-linear"></iconify-icon> STAMP DUTY</div>
<div className="flex items-center gap-2 font-semibold tracking-tighter text-lg"><iconify-icon icon="solar:scale-linear"></iconify-icon> LEGAL ADVICE</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Local expertise you can rely on in Jodhpur.
                    </h2>
<p className="text-base text-slate-600 mb-6 leading-relaxed">
                        Navigating legal documents and property registries can be complex. At Vishnu Prajapat Stamp Vendor, we simplify the process. Whether you are buying a plot, drafting a will (Wasiyatnama), or needing a simple rent agreement, we ensure your documents are legally binding and processed without delays.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="mt-1 bg-amber-100 text-amber-600 rounded-full p-1 w-6 h-6 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Zero Jargon, Clear Advice</h3>
<p className="text-sm text-slate-500">We explain everything in simple language, both Hindi and English, so you know exactly what you are signing.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-amber-100 text-amber-600 rounded-full p-1 w-6 h-6 flex items-center justify-center shrink-0">
<iconify-icon className="text-sm" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Fast Turnaround</h3>
<p className="text-sm text-slate-500">Time is money. We prioritize getting your documentation drafted, stamped, and registered as fast as legally possible.</p>
</div>
</div>
</div>
<a className="text-sm font-medium text-amber-600 hover:text-amber-700 flex items-center gap-1" href="#contact">
                        Visit our office in Jodhpur <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative">
<div className="aspect-square bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200 shadow-sm">

<div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
<div className="w-full h-full bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-6xl text-slate-300" icon="solar:buildings-2-linear"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm border border-slate-200 p-4 rounded-xl shadow-lg flex items-center gap-4">
<div className="bg-amber-100 text-amber-600 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">100% Legally Compliant</p>
<p className="text-xs text-slate-500">All documents follow Rajasthan State laws.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    Comprehensive Legal &amp; Documentation Services
                </h2>
<p className="text-base text-slate-600">
                    From basic stamp paper vending to complex property litigation support, we handle your paperwork with precision.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm group-hover:text-amber-500 group-hover:border-amber-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Property &amp; Registry</h3>
<p className="text-sm text-slate-600 mb-4">Complete assistance for property buyers and sellers.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Plot Registry</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> JDA Patta Work</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Property Title Services</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Property Documentation</li>
</ul>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm group-hover:text-amber-500 group-hover:border-amber-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:document-medicine-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Agreements &amp; Wills</h3>
<p className="text-sm text-slate-600 mb-4">Drafting clear and binding agreements for individuals and businesses.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Rent Agreements</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Will Writing (Wasiyatnama)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Power of Attorney</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Contracts &amp; Agreements</li>
</ul>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 mb-4 shadow-sm group-hover:text-amber-500 group-hover:border-amber-200 transition-colors">
<iconify-icon className="text-xl" icon="solar:diploma-verified-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">Litigation &amp; Advice</h3>
<p className="text-sm text-slate-600 mb-4">Professional guidance and documentation for legal disputes.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Legal Advice</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Property Litigation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Legal Settlements</li>
<li className="flex items-center gap-2"><iconify-icon className="text-amber-500" icon="solar:check-circle-linear"></iconify-icon> Malpractice Litigation</li>
</ul>
</div>

<div className="p-6 rounded-2xl border border-slate-200 bg-slate-900 text-white md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden">
<div className="absolute right-0 top-0 opacity-10 pointer-events-none">
<iconify-icon className="text-[12rem]" icon="solar:stamp-linear"></iconify-icon>
</div>
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/10 text-white text-xs font-medium mb-3">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon> Core Service
                        </div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Stamp Vendor &amp; Document Preparation</h3>
<p className="text-sm text-slate-300">
                            We are authorized stamp vendors providing e-stamps, traditional stamp papers, and end-to-end legal document preparation services. Skip the long queues and let us handle the paperwork efficiently.
                        </p>
</div>
<a className="shrink-0 relative z-10 bg-white text-slate-900 px-6 py-2.5 rounded-md text-sm font-medium hover:bg-slate-100 transition-colors" href="#contact">
                        Request Stamp Paper
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="testimonials">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10">
                Trusted by Jodhpur Locals
            </h2>
<div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x snap-mandatory">

<div className="min-w-[300px] max-w-[350px] shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-medium italic">
                        "Got my rent agreement done within an hour. Very professional service and they explained all the legal terms in Hindi clearly. Highly recommended in Jodhpur."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">RS</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">Rajendra Singh</p>
<p className="text-xs text-slate-500">Rent Agreement</p>
</div>
</div>
</div>

<div className="min-w-[300px] max-w-[350px] shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-medium italic">
                        "The plot registry process usually takes days, but Vishnu ji handled all the paperwork and stamp duty calculations perfectly. Saved us a lot of headache."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">PK</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">Pooja Kumawat</p>
<p className="text-xs text-slate-500">Plot Registry</p>
</div>
</div>
</div>

<div className="min-w-[300px] max-w-[350px] shrink-0 snap-start bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6 font-medium italic">
                        "Needed a Wasiyatnama drafted urgently. They were very respectful of our family situation and provided sound legal advice alongside the drafting."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">AS</div>
<div>
<p className="text-sm font-semibold tracking-tight text-slate-900">Amit Sharma</p>
<p className="text-xs text-slate-500">Will Writing</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">
                Frequently Asked Questions
            </h2>
<div className="space-y-4">
<details className="group bg-slate-50 rounded-xl border border-slate-200" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm sm:text-base tracking-tight text-slate-900">
<span>What is required for a Plot Registry in Jodhpur?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0">
<p className="text-slate-500 text-sm font-normal leading-relaxed">
                            Typically, you need the original title deed, identity proofs (Aadhar/PAN) of both buyer and seller, passport-size photographs, and the required stamp duty amount based on the DLC rate. We can help calculate the exact stamp duty and prepare all annexures.
                        </p>
</div>
</details>
<details className="group bg-slate-50 rounded-xl border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm sm:text-base tracking-tight text-slate-900">
<span>Do you provide e-stamp papers?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0">
<p className="text-slate-500 text-sm font-normal leading-relaxed">
                            Yes, as an authorized vendor, we provide both physical stamp papers and e-stamps for various denominations required for your specific legal agreements.
                        </p>
</div>
</details>
<details className="group bg-slate-50 rounded-xl border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm sm:text-base tracking-tight text-slate-900">
<span>How long does it take to make a Rent Agreement?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0">
<p className="text-slate-500 text-sm font-normal leading-relaxed">
                            A standard 11-month rent agreement can usually be drafted, printed on stamp paper, and notarized on the same day within a few hours, provided both parties are present with their ID proofs.
                        </p>
</div>
</details>
<details className="group bg-slate-50 rounded-xl border border-slate-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm sm:text-base tracking-tight text-slate-900">
<span>Can you help with JDA Patta related work?</span>
<span className="transition-transform group-open:rotate-180 text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-5 pb-5 pt-0">
<p className="text-slate-500 text-sm font-normal leading-relaxed">
                            Yes, we assist with documentation, application drafting, and guidance for Jodhpur Development Authority (JDA) Patta procedures to ensure your file is complete and legally sound.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Visit our office in Jodhpur
                    </h2>
<p className="text-base text-slate-600 mb-8">
                        Drop by for a consultation or to get your documents stamped. We are centrally located and easy to find.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Address</h3>
<p className="text-sm text-slate-600 mt-1">Vishnu Prajapat Stamp Vendor<br/>Jodhpur, Rajasthan, India</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Phone</h3>
<p className="text-sm text-slate-600 mt-1">
<a className="hover:text-amber-600 transition-colors" href="tel:9950320525">+91 99503 20525</a>
</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 shrink-0 shadow-sm">
<iconify-icon className="text-lg" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-slate-900">Working Hours</h3>
<p className="text-sm text-slate-600 mt-1">Mon - Sat: 9:30 AM - 6:30 PM<br/>Sun: Closed</p>
</div>
</div>
</div>

<div className="w-full h-64 bg-slate-200 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114457.77112005937!2d72.93663953538466!3d26.29656834460592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06fcb9%3A0x8114ea5b0ea1cac1!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-6">Send an Inquiry</h3>
<form action="#" className="space-y-4" method="POST">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="name">Full Name</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="name" name="name" placeholder="Your name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="phone">Phone Number</label>
<input className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors" id="phone" name="phone" placeholder="Your mobile number" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="service">Service Required</label>
<select className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-slate-600 appearance-none" id="service" name="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="stamp">Stamp Paper / E-Stamp</option>
<option value="registry">Plot Registry</option>
<option value="rent">Rent Agreement</option>
<option value="will">Will (Wasiyatnama)</option>
<option value="other">Other Legal Advice</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message (Optional)</label>
<textarea className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors resize-none" id="message" name="message" placeholder="Briefly describe your requirement..." rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors mt-2" type="submit">
                            Submit Inquiry
                        </button>
<p className="text-xs text-slate-500 text-center mt-4">We usually reply within 2-3 hours during working days.</p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-8 h-8 rounded bg-white flex items-center justify-center">
<iconify-icon className="text-slate-900 text-lg" icon="solar:document-text-linear"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-white text-lg uppercase">
                            VP Legal
                        </span>
</a>
<p className="text-sm mb-4 max-w-xs">
                        Vishnu Prajapat Stamp Vendor. Your trusted local partner for fast, secure, and legally sound documentation in Jodhpur.
                    </p>
</div>
<div>
<h4 className="text-white font-medium tracking-tight mb-4 text-sm">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-amber-400 transition-colors" href="#services">All Services</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#testimonials">Client Reviews</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#contact">Contact Office</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium tracking-tight mb-4 text-sm">Top Services</h4>
<ul className="space-y-2 text-sm">
<li>Plot Registry in Jodhpur</li>
<li>JDA Patta Documentation</li>
<li>Rent Agreement Drafting</li>
<li>E-Stamp Vendor Services</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Vishnu Prajapat Stamp Vendor. All rights reserved.</p>
<p>Designed for trust and reliability.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">

<a aria-label="Chat on WhatsApp" className="w-12 h-12 bg-[#25D366] text-white rounded-full shadow-lg shadow-[#25D366]/20 flex items-center justify-center hover:-translate-y-1 transition-transform border border-white/20" href="https://wa.me/919950320525" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-2xl" icon="solar:chat-round-line-linear"></iconify-icon>
</a>

<a aria-label="Call Now" className="w-12 h-12 bg-slate-900 text-white rounded-full shadow-lg shadow-slate-900/20 flex items-center justify-center hover:-translate-y-1 transition-transform border border-white/10" href="tel:9950320525">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
</div>



    </>
  );
}
