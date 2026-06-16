import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Navigation Logic
        function navTo(pageId, extraParam = null) {
            // Hide all pages
            document.querySelectorAll('.view-page').forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('block'); // ensure block is removed
            });

            // Show target page
            const target = document.getElementById(pageId);
            if (target) {
                target.classList.remove('hidden');
                // Use flex for auth pages that need centering
                if(pageId.startsWith('page-') && (pageId === 'page-login' || pageId === 'page-signup' || pageId === 'page-forgot' || pageId === 'page-reset' || pageId === 'page-otp')) {
                    // It already has flex in classes, removing hidden is enough
                } else {
                    target.classList.add('block');
                }
            }

            // Handle Header/Footer visibility (hide on auth screens)
            const isAuthScreen = ['page-login', 'page-signup', 'page-forgot', 'page-reset', 'page-otp'].includes(pageId);
            document.getElementById('global-nav').style.display = isAuthScreen ? 'none' : 'block';
            document.getElementById('global-footer').style.display = isAuthScreen ? 'none' : 'block';

            // Handle extra params (like scrolling to section or switching tabs)
            if (pageId === 'page-home' && extraParam === 'how-it-works') {
                setTimeout(() => {
                    document.getElementById('how-it-works').scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else if (pageId === 'page-signup' && extraParam) {
                switchSignupTab(extraParam);
            } else {
                window.scrollTo(0, 0);
            }
        }

        // Signup Tabs Logic
        function switchSignupTab(tabId) {
            document.getElementById('tab-buyer').classList.add('hidden');
            document.getElementById('tab-farmer').classList.add('hidden');
            
            document.getElementById('btn-tab-buyer').className = 'flex-1 py-1.5 text-sm font-medium rounded-md text-neutral-500 hover:text-neutral-900 border border-transparent transition-all';
            document.getElementById('btn-tab-farmer').className = 'flex-1 py-1.5 text-sm font-medium rounded-md text-neutral-500 hover:text-neutral-900 border border-transparent transition-all';

            document.getElementById(tabId).classList.remove('hidden');
            document.getElementById('btn-' + tabId).className = 'flex-1 py-1.5 text-sm font-medium rounded-md bg-white text-neutral-900 shadow-sm border border-neutral-200 transition-all';
        }

        // FAQ Accordion Logic
        function toggleFaq(id) {
            const content = document.getElementById('faq-content-' + id);
            const icon = document.getElementById('faq-icon-' + id);
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
            } else {
                content.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
            }
        }

        // OTP Auto-advance fake logic
        const otpInputs = document.querySelectorAll('#page-otp input[type="text"]');
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                if (e.target.value.length === 1 && index < otpInputs.length - 1) {
                    otpInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value.length === 0 && index > 0) {
                    otpInputs[index - 1].focus();
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all" id="global-nav">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-1.5 text-neutral-900 group" href="#" onclick="navTo('page-home')">
<div className="w-6 h-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-semibold text-xs relative overflow-hidden">
                    K
                    <div className="absolute inset-0 bg-[#e11d48] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="absolute inset-0 flex items-center justify-center text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">F</span>
</div>
<span className="font-semibold tracking-tighter text-base">KIZFARM</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-home')">Home</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-home', 'how-it-works')">How It Works</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-home')">Marketplace</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-signup', 'tab-farmer')">Become a Farmer</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-contact')">Contact</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors font-medium" href="#" onclick="navTo('page-faq')">FAQ</a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:block hover:text-neutral-900 transition-colors font-medium text-neutral-600 pt-2 pr-4 pb-2 pl-4" onclick="navTo('page-login')">Login</button>
<button className="px-4 py-2 bg-[#16a34a] hover:bg-[#15803d] text-white font-medium rounded-lg transition-colors shadow-sm" onclick="navTo('page-signup')">Sign Up</button>
</div>
</div>
</nav>

<main className="" id="app-root">



<div className="view-page block" id="page-home">

<section className="relative overflow-hidden pt-20 pb-28">
<div className="grid md:grid-cols-2 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="max-w-lg z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium text-xs mb-6 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                            Trusted by 10,000+ Farmers
                        </div>
<h1 className="text-4xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
                            Fresh Produce Delivered Safely From Farm to Home.
                        </h1>
<p className="text-base text-neutral-500 mb-8 leading-relaxed">
                            Connecting farmers directly with buyers. Experience fast delivery, reliable tracking, and the freshest agricultural produce worldwide.
                        </p>
<div className="flex flex-wrap items-center gap-3">
<button className="px-5 py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-medium rounded-lg transition-all shadow-sm">Shop Products</button>
<button className="px-5 py-2.5 bg-white border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 text-neutral-700 font-medium rounded-lg transition-all flex items-center gap-2 group" onclick="navTo('page-signup', 'tab-farmer')">
                                Become a Farmer
                                <iconify-icon className="text-neutral-400 group-hover:text-[#e11d48] transition-colors" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>

<div className="relative flex justify-center items-center lg:justify-end">
<div className="globe-container">
<div className="globe-map"></div>
<svg className="absolute inset-0 w-full h-full drop-shadow-md" viewbox="0 0 100 100">

<path className="network-line delay-1" d="M 25,60 Q 50,20 75,40"></path>
<path className="network-line delay-2" d="M 30,75 Q 60,95 85,65"></path>
<path className="network-line delay-3" d="M 15,40 Q 40,50 65,15"></path>
<path className="network-line delay-1" d="M 75,40 Q 85,55 60,80" stroke="#e11d48"></path>

<circle className="network-node" cx="25" cy="60" fill="#16a34a" r="1.5"></circle>
<circle className="network-node" cx="75" cy="40" fill="#16a34a" r="1.5" style={{animationDelay: '1s'}}></circle>
<circle className="network-node" cx="30" cy="75" fill="#e11d48" r="1.5"></circle>
<circle className="network-node" cx="85" cy="65" fill="#e11d48" r="1.5" style={{animationDelay: '2s'}}></circle>
<circle className="network-node" cx="15" cy="40" fill="#16a34a" r="1.5"></circle>
<circle className="network-node" cx="65" cy="15" fill="#16a34a" r="1.5" style={{animationDelay: '0.5s'}}></circle>
<circle className="network-node" cx="60" cy="80" fill="#e11d48" r="1.5"></circle>
</svg>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur pl-2 pr-3 py-1.5 rounded-lg border border-neutral-100 shadow-sm flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
<iconify-icon className="text-xs" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-[0.65rem] font-medium text-neutral-400 uppercase tracking-wider">Transit</p>
<p className="text-xs font-semibold text-neutral-900">Nairobi → London</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50 border-y border-neutral-100" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight mb-3">How KIZ FARM Works</h2>
<p className="text-neutral-500">A seamless process designed to bring the farm to your doorstep with total transparency.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-1/6 right-1/6 h-[1px] bg-gradient-to-r from-transparent via-neutral-200 to-transparent z-0"></div>

<div className="relative z-10 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-emerald-50 text-[#16a34a] flex items-center justify-center mb-5 ring-4 ring-white">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Browse Products</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Explore a wide variety of fresh, locally and globally sourced agricultural produce.</p>
</div>

<div className="relative z-10 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-rose-50 text-[#e11d48] flex items-center justify-center mb-5 ring-4 ring-white">
<iconify-icon className="text-xl" icon="solar:chat-round-dots-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Chat With the Farmer</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Communicate directly to confirm quality, quantity, and specific requirements.</p>
</div>

<div className="relative z-10 bg-white p-6 rounded-2xl border border-neutral-100 shadow-sm flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-5 ring-4 ring-white">
<iconify-icon className="text-xl" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-neutral-900 mb-2">Order &amp; Track Delivery</h3>
<p className="text-xs text-neutral-500 leading-relaxed">Securely pay and track your produce's journey from the farm to your home.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-6xl mx-auto px-6">
<div className="flex items-end justify-between mb-10">
<div>
<h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-2">Fresh Arrivals</h2>
<p className="text-neutral-500">Direct from trusted farms.</p>
</div>
<button className="text-[#16a34a] font-medium hover:text-[#15803d] flex items-center gap-1 group">
                            View All
                            <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

<div className="group border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 hover:shadow-sm transition-all bg-white">
<div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-neutral-100 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-4xl" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<h4 className="font-medium text-neutral-900 mb-1">Organic Tomatoes</h4>
<p className="text-xs text-neutral-500 mb-3">Green Valley Farm</p>
<div className="flex items-center justify-between">
<span className="font-semibold text-neutral-900">$4.50 <span className="text-xs font-normal text-neutral-400">/ kg</span></span>
<button aria-label="Add to cart" className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-[#16a34a] hover:text-white text-neutral-600 flex items-center justify-center transition-colors border border-neutral-200 hover:border-transparent">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 hover:shadow-sm transition-all bg-white">
<div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-neutral-100 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-4xl" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<h4 className="font-medium text-neutral-900 mb-1">Red Onions</h4>
<p className="text-xs text-neutral-500 mb-3">Savannah Growers</p>
<div className="flex items-center justify-between">
<span className="font-semibold text-neutral-900">$2.10 <span className="text-xs font-normal text-neutral-400">/ kg</span></span>
<button aria-label="Add to cart" className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-[#16a34a] hover:text-white text-neutral-600 flex items-center justify-center transition-colors border border-neutral-200 hover:border-transparent">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 hover:shadow-sm transition-all bg-white">
<div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-amber-100/50 to-neutral-100 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-4xl" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<h4 className="font-medium text-neutral-900 mb-1">Sweet Corn</h4>
<p className="text-xs text-neutral-500 mb-3">Highland Agri</p>
<div className="flex items-center justify-between">
<span className="font-semibold text-neutral-900">$1.80 <span className="text-xs font-normal text-neutral-400">/ cob</span></span>
<button aria-label="Add to cart" className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-[#16a34a] hover:text-white text-neutral-600 flex items-center justify-center transition-colors border border-neutral-200 hover:border-transparent">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group border border-neutral-100 rounded-xl overflow-hidden hover:border-neutral-200 hover:shadow-sm transition-all bg-white">
<div className="aspect-[4/3] bg-neutral-100 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-neutral-100 flex items-center justify-center text-neutral-300">
<iconify-icon className="text-4xl" icon="solar:leaf-linear"></iconify-icon>
</div>
</div>
<div className="p-4">
<h4 className="font-medium text-neutral-900 mb-1">Fresh Hass Avocados</h4>
<p className="text-xs text-neutral-500 mb-3">Rift Valley Produce</p>
<div className="flex items-center justify-between">
<span className="font-semibold text-neutral-900">$3.00 <span className="text-xs font-normal text-neutral-400">/ pc</span></span>
<button aria-label="Add to cart" className="w-8 h-8 rounded-full bg-neutral-50 hover:bg-[#16a34a] hover:text-white text-neutral-600 flex items-center justify-center transition-colors border border-neutral-200 hover:border-transparent">
<iconify-icon icon="solar:cart-plus-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#16a34a] py-20 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Are you a farmer? Sell your produce on KIZ FARM</h2>
<p className="text-emerald-100 text-base mb-8 max-w-2xl mx-auto">Join thousands of farmers reaching new markets globally. Easy setup, secure payments, and reliable logistics support.</p>
<button className="px-6 py-3 bg-white text-[#16a34a] hover:bg-neutral-50 font-medium rounded-lg transition-colors shadow-sm text-base" onclick="navTo('page-signup', 'tab-farmer')">
                        Become a Farmer
                    </button>
</div>
</section>
</div>



<div className="view-page hidden" id="page-about">
<div className="py-20 border-b border-neutral-100 bg-neutral-50/30">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">About KIZ FARM</h1>
<p className="text-lg text-neutral-500">Empowering farmers. Delivering fresh food globally.</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-4">Our Story</h2>
<p className="text-neutral-500 leading-relaxed mb-4">
                            KIZ FARM began with a simple idea: the supply chain between hardworking farmers and consumers was too long, too complex, and unfair. We set out to build a platform that bridges this gap using technology.
                        </p>
<p className="text-neutral-500 leading-relaxed">
                            Today, we provide a seamless marketplace that ensures farmers get fair prices for their produce, while buyers receive fresh, traceable food with guaranteed safety and swift logistics.
                        </p>
</div>
<div className="aspect-square md:aspect-[4/3] bg-neutral-100 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#16a34a]/10 to-transparent flex items-center justify-center">
<iconify-icon className="text-6xl text-neutral-300" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl border border-neutral-100 bg-white shadow-sm">
<div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#16a34a] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Mission</h3>
<p className="text-neutral-500 text-sm leading-relaxed">To create a direct, transparent, and efficient bridge between agricultural producers and global consumers.</p>
</div>
<div className="p-8 rounded-2xl border border-neutral-100 bg-white shadow-sm">
<div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Vision</h3>
<p className="text-neutral-500 text-sm leading-relaxed">A world where fresh food is accessible to everyone, and every farmer thrives through fair trade.</p>
</div>
<div className="p-8 rounded-2xl border border-neutral-100 bg-white shadow-sm">
<div className="w-12 h-12 rounded-lg bg-rose-50 text-[#e11d48] flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:heart-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3">Values</h3>
<p className="text-neutral-500 text-sm leading-relaxed">Transparency, quality, farmer empowerment, and sustainable agricultural practices.</p>
</div>
</div>
</div>
</div>



<div className="view-page hidden" id="page-contact">
<div className="py-20 border-b border-neutral-100 bg-neutral-50/30">
<div className="max-w-3xl mx-auto px-6 text-center">
<h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Contact Us</h1>
<p className="text-lg text-neutral-500">Have questions? We're here to help.</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 py-20">
<div className="grid md:grid-cols-5 gap-12">
<div className="md:col-span-3">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Full Name</label>
<input placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Email</label>
<input placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Phone Number</label>
<input placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Subject</label>
<input placeholder="How can we help?" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Message</label>
<textarea placeholder="Write your message here..." rows="5"></textarea>
</div>
<button className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg transition-colors w-full sm:w-auto">
                                Send Message
                            </button>
</form>
</div>
<div className="md:col-span-2 space-y-6">
<div className="p-6 rounded-xl border border-neutral-100 bg-neutral-50/50">
<h3 className="text-base font-semibold text-neutral-900 mb-6">Contact Information</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5 text-lg" icon="solar:phone-linear"></iconify-icon>
<div>
<p className="text-xs font-medium text-neutral-500 mb-0.5">Phone</p>
<p className="text-neutral-900">+1 (800) 123-4567</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5 text-lg" icon="solar:letter-linear"></iconify-icon>
<div>
<p className="text-xs font-medium text-neutral-500 mb-0.5">Email</p>
<p className="text-neutral-900">support@kizfarm.com</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-400 mt-0.5 text-lg" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="text-xs font-medium text-neutral-500 mb-0.5">Office</p>
<p className="text-neutral-900">123 Agri Valley Road<br/>Tech Hub, CA 94000</p>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-neutral-200 flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:twitter-outline"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-outline"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:instagram-outline"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</div>



<div className="view-page hidden" id="page-faq">
<div className="py-20 border-b border-neutral-100 bg-neutral-50/30 relative overflow-hidden">

<div className="absolute top-1/2 right-[-20%] md:right-[-5%] lg:right-[10%] -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-[0.25] pointer-events-none z-0" style={{animation: 'float-subtle 6s ease-in-out infinite'}}>

<div className="w-full h-full rounded-full relative overflow-hidden" style="
                        background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Land_ocean_ice_2048.jpg/1024px-Land_ocean_ice_2048.jpg') repeat-x center;
                        background-size: auto 100%;
                        animation: spin-earth 60s linear infinite;
                        box-shadow: inset -30px -30px 50px rgba(0,0,0,0.6), inset 10px 10px 30px rgba(255,255,255,0.4);
                    "></div>

<svg className="absolute inset-0 w-full h-full z-10" style={{filter: 'drop-shadow(0 0 5px rgba(34, 197, 94, 0.9))'}} viewbox="0 0 100 100">
<path d="M 20,45 Q 50,20 80,45" fill="none" stroke="#4ade80" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="0.8" style={{animation: 'dash 4s ease-in-out infinite alternate'}}></path>
<path d="M 25,65 Q 55,35 85,60" fill="none" stroke="#22c55e" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="0.6" style={{animation: 'dash 5s ease-in-out infinite alternate 1s'}}></path>
<path d="M 15,55 Q 40,75 70,30" fill="none" stroke="#f43f5e" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="0.7" style={{animation: 'dash 4.5s ease-in-out infinite alternate 0.5s'}}></path>
<circle cx="20" cy="45" fill="#4ade80" r="1.5" style={{animation: 'pulse-dot 2s infinite'}}></circle>
<circle cx="80" cy="45" fill="#4ade80" r="1.5" style={{animation: 'pulse-dot 2s infinite 1s'}}></circle>
<circle cx="25" cy="65" fill="#22c55e" r="1.5" style={{animation: 'pulse-dot 2s infinite 0.5s'}}></circle>
<circle cx="85" cy="60" fill="#22c55e" r="1.5" style={{animation: 'pulse-dot 2s infinite 1.5s'}}></circle>
<circle cx="15" cy="55" fill="#f43f5e" r="1.5" style={{animation: 'pulse-dot 2s infinite 0.2s'}}></circle>
<circle cx="70" cy="30" fill="#f43f5e" r="1.5" style={{animation: 'pulse-dot 2s infinite 1.2s'}}></circle>
</svg>
</div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h1 className="text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Frequently Asked Questions</h1>
<p className="text-lg text-neutral-500">Everything you need to know about the product and billing.</p>
</div>
</div>
<div className="max-w-3xl mx-auto px-6 py-20 relative z-10">
<div className="space-y-4">

<div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
<button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:bg-neutral-50" onclick="toggleFaq(1)">
<span className="font-medium text-neutral-900">How do I order?</span>
<iconify-icon className="text-neutral-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="faq-icon-1"></iconify-icon>
</button>
<div className="hidden px-5 pb-4 text-neutral-500 text-sm leading-relaxed" id="faq-content-1">
                            Browse the marketplace, select your desired produce, add to cart, and proceed to checkout. You can communicate with the farmer before finalizing the order.
                        </div>
</div>

<div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
<button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:bg-neutral-50" onclick="toggleFaq(2)">
<span className="font-medium text-neutral-900">How do I become a farmer?</span>
<iconify-icon className="text-neutral-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="faq-icon-2"></iconify-icon>
</button>
<div className="hidden px-5 pb-4 text-neutral-500 text-sm leading-relaxed" id="faq-content-2">
                            Click on "Sign Up" and select the "Farmer" tab. Fill in your details, farm information, and upload required ID verification. Once approved, you can start listing products.
                        </div>
</div>

<div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
<button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:bg-neutral-50" onclick="toggleFaq(3)">
<span className="font-medium text-neutral-900">How do deliveries work?</span>
<iconify-icon className="text-neutral-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="faq-icon-3"></iconify-icon>
</button>
<div className="hidden px-5 pb-4 text-neutral-500 text-sm leading-relaxed" id="faq-content-3">
                            We partner with vetted logistics companies to ensure safe and timely delivery. You will receive a tracking link once your order is dispatched from the farm.
                        </div>
</div>

<div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
<button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:bg-neutral-50" onclick="toggleFaq(4)">
<span className="font-medium text-neutral-900">How do I pay?</span>
<iconify-icon className="text-neutral-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="faq-icon-4"></iconify-icon>
</button>
<div className="hidden px-5 pb-4 text-neutral-500 text-sm leading-relaxed" id="faq-content-4">
                            We accept all major credit cards, digital wallets, and regional mobile payment options depending on your location. Payments are held securely until delivery is confirmed.
                        </div>
</div>

<div className="border border-neutral-200 rounded-lg overflow-hidden bg-white">
<button className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:bg-neutral-50" onclick="toggleFaq(5)">
<span className="font-medium text-neutral-900">How do refunds work?</span>
<iconify-icon className="text-neutral-400 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="faq-icon-5"></iconify-icon>
</button>
<div className="hidden px-5 pb-4 text-neutral-500 text-sm leading-relaxed" id="faq-content-5">
                            If produce arrives damaged or differs significantly from the description, you can raise a dispute within 24 hours of delivery for a full or partial refund.
                        </div>
</div>
</div>
</div>
</div>




<div className="view-page hidden min-h-screen flex items-stretch" id="page-login">
<div className="hidden lg:flex flex-1 bg-neutral-50 flex-col justify-between p-12 border-r border-neutral-200">
<div>
<a className="flex items-center gap-1.5 text-neutral-900 group inline-flex" href="#" onclick="navTo('page-home')">
<div className="w-8 h-8 rounded-lg bg-[#16a34a] text-white flex items-center justify-center font-semibold text-sm">K</div>
<span className="font-semibold tracking-tighter text-xl">KIZFARM</span>
</a>
</div>
<div>
<h2 className="text-3xl font-semibold text-neutral-900 tracking-tight mb-4">Welcome back to KIZ FARM!</h2>
<p className="text-neutral-500">Log in to manage your orders, communicate with farmers, and track your fresh produce deliveries.</p>
</div>
<div className="text-xs text-neutral-400">© 2024 KIZ FARM. All rights reserved.</div>
</div>
<div className="flex-1 flex items-center justify-center p-6 bg-white">
<div className="w-full max-w-sm">
<div className="lg:hidden mb-8">
<a className="flex items-center gap-1.5 text-neutral-900" href="#" onclick="navTo('page-home')">
<div className="w-6 h-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-semibold text-xs">K</div>
<span className="font-semibold tracking-tighter text-base">KIZFARM</span>
</a>
</div>
<h3 className="text-2xl font-semibold text-neutral-900 tracking-tight mb-1">Log in</h3>
<p className="text-neutral-500 text-sm mb-8">Enter your credentials to access your account.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); navTo('page-home');">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5" htmlFor="login-email">Email</label>
<input autocomplete="username" id="login-email" placeholder="name@example.com" required="" type="email"/>
</div>
<div>
<div className="flex items-center justify-between mb-1.5">
<label className="block text-xs font-medium text-neutral-700" htmlFor="login-pass">Password</label>
<a className="text-xs font-medium text-[#16a34a] hover:text-[#15803d]" href="#" onclick="navTo('page-forgot')">Forgot password?</a>
</div>
<input autocomplete="current-password" id="login-pass" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg transition-colors mt-2" type="submit">
                            Log in
                        </button>
</form>
<p className="text-center text-sm text-neutral-500 mt-6">
                        Don't have an account? <a className="text-neutral-900 font-medium hover:underline" href="#" onclick="navTo('page-signup')">Sign Up</a>
</p>
</div>
</div>
</div>

<div className="view-page hidden min-h-screen flex items-center justify-center p-6 bg-neutral-50/50" id="page-signup">
<div className="w-full max-w-md bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
<div className="text-center mb-6">
<a className="inline-flex items-center gap-1.5 text-neutral-900 mb-4" href="#" onclick="navTo('page-home')">
<div className="w-6 h-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-semibold text-xs">K</div>
<span className="font-semibold tracking-tighter text-base">KIZFARM</span>
</a>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight">Create an account</h3>
</div>

<div className="flex p-1 bg-neutral-100 rounded-lg mb-6">
<button className="flex-1 py-1.5 text-sm font-medium rounded-md bg-white text-neutral-900 shadow-sm border border-neutral-200 transition-all" id="btn-tab-buyer" onclick="switchSignupTab('tab-buyer')">Buyer</button>
<button className="flex-1 py-1.5 text-sm font-medium rounded-md text-neutral-500 hover:text-neutral-900 border border-transparent transition-all" id="btn-tab-farmer" onclick="switchSignupTab('tab-farmer')">Farmer</button>
</div>

<form className="space-y-4" id="tab-buyer" onsubmit="event.preventDefault(); navTo('page-otp');">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Full Name</label>
<input placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Email</label>
<input placeholder="john@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Phone Number</label>
<input placeholder="+1 234 567 890" required="" type="tel"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Password</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Confirm</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
</div>
<div className="flex items-start gap-2 mt-2">
<input className="mt-0.5" id="terms-buyer" required="" type="checkbox"/>
<label className="text-xs text-neutral-500 leading-tight" htmlFor="terms-buyer">I agree to the <a className="text-neutral-900 underline" href="#">Terms</a> and <a className="text-neutral-900 underline" href="#">Privacy Policy</a>.</label>
</div>
<button className="w-full py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-medium rounded-lg transition-colors mt-2" type="submit">
                        Create Account
                    </button>
</form>

<form className="space-y-4 hidden" id="tab-farmer" onsubmit="event.preventDefault(); navTo('page-otp');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Full Name</label>
<input placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Phone</label>
<input placeholder="+1 234 567" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Email</label>
<input placeholder="jane@farm.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Farm Name</label>
<input placeholder="Green Valley Produce" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Farm Location</label>
<input placeholder="City, Country" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">ID Upload (Gov/Tax ID)</label>
<div className="border border-dashed border-neutral-300 rounded-lg p-3 text-center hover:bg-neutral-50 transition-colors cursor-pointer relative">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" required="" type="file"/>
<span className="text-xs text-neutral-500 flex items-center justify-center gap-1"><iconify-icon icon="solar:upload-linear"></iconify-icon> Click to upload</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Password</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Confirm</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
</div>
<div className="flex items-start gap-2 mt-2">
<input className="mt-0.5" id="terms-farmer" required="" type="checkbox"/>
<label className="text-xs text-neutral-500 leading-tight" htmlFor="terms-farmer">I agree to the <a className="text-neutral-900 underline" href="#">Terms</a> and <a className="text-neutral-900 underline" href="#">Privacy Policy</a>.</label>
</div>
<button className="w-full py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-medium rounded-lg transition-colors mt-2" type="submit">
                        Create Farmer Account
                    </button>
</form>
<p className="text-center text-sm text-neutral-500 mt-6">
                    Already have an account? <a className="text-neutral-900 font-medium hover:underline" href="#" onclick="navTo('page-login')">Log in</a>
</p>
</div>
</div>

<div className="view-page hidden min-h-screen flex items-center justify-center p-6 bg-neutral-50/50" id="page-forgot">
<div className="w-full max-w-sm bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
<button aria-label="Go back" className="mb-6 w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50 transition-colors" onclick="navTo('page-login')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">Reset Password</h3>
<p className="text-neutral-500 text-sm mb-6">Enter your email address and we'll send you a link to reset your password.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); navTo('page-reset');">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Email</label>
<input placeholder="name@example.com" required="" type="email"/>
</div>
<button className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg transition-colors" type="submit">
                        Send Reset Link
                    </button>
</form>
</div>
</div>

<div className="view-page hidden min-h-screen flex items-center justify-center p-6 bg-neutral-50/50" id="page-reset">
<div className="w-full max-w-sm bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm">
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">Set New Password</h3>
<p className="text-neutral-500 text-sm mb-6">Must be at least 8 characters.</p>
<form className="space-y-4" onsubmit="event.preventDefault(); navTo('page-login');">
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">New Password</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">Confirm Password</label>
<input placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white font-medium rounded-lg transition-colors mt-2" type="submit">
                       Reset Password
                   </button>
</form>
</div>
</div>

<div className="view-page hidden min-h-screen flex items-center justify-center p-6 bg-neutral-50/50" id="page-otp">
<div className="w-full max-w-sm bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm text-center">
<div className="w-12 h-12 rounded-full bg-emerald-50 text-[#16a34a] flex items-center justify-center mx-auto mb-4">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-2">Check your email</h3>
<p className="text-neutral-500 text-sm mb-6">Enter the 6-digit code sent to your email to verify your account.</p>
<form className="space-y-6" onsubmit="event.preventDefault(); navTo('page-home');">
<div className="flex justify-between gap-2">
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
<input className="w-10 h-12 text-center text-lg font-semibold" maxlength="1" required="" type="text"/>
</div>
<button className="w-full py-2.5 bg-[#16a34a] hover:bg-[#15803d] text-white font-medium rounded-lg transition-colors" type="submit">
                       Verify Account
                   </button>
</form>
<p className="text-sm text-neutral-500 mt-6">
                   Didn't receive code? <button className="text-neutral-900 font-medium hover:underline">Resend</button>
</p>
</div>
</div>
</main>

<footer className="border-t border-neutral-100 bg-white pt-16 pb-8 transition-all" id="global-footer">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-1.5 text-neutral-900 mb-4 inline-flex" href="#" onclick="navTo('page-home')">
<div className="w-6 h-6 rounded bg-[#16a34a] text-white flex items-center justify-center font-semibold text-xs">K</div>
<span className="font-semibold tracking-tighter text-base">KIZFARM</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed max-w-xs">Connecting the world's farmers with buyers directly. Fresh produce, fair trade, swift delivery.</p>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Platform</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-home')">Marketplace</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-signup', 'tab-farmer')">Sell Produce</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-home', 'how-it-works')">How it works</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-about')">About Us</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-contact')">Contact</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#" onclick="navTo('page-faq')">FAQ</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2024 KIZ FARM. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-outline"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-outline"></iconify-icon></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:linkedin-outline"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
