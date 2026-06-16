import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Get current page from URL or default to handyman
        const urlParams = new URLSearchParams(window.location.search);
        const currentPage = urlParams.get('page') || 'handyman';
        
        // Show the correct page
        function showPage(pageName) {
            // Hide all pages
            document.querySelectorAll('main').forEach(page => {
                page.classList.add('hidden');
            });
            
            // Show selected page
            const targetPage = document.getElementById(pageName + '-page');
            if (targetPage) {
                targetPage.classList.remove('hidden');
            }
            
            // Update nav tabs
            document.querySelectorAll('[data-page-tab]').forEach(tab => {
                if (tab.dataset.pageTab === pageName) {
                    tab.classList.remove('bg-white', 'text-slate-600', 'border', 'border-slate-200');
                    tab.classList.add('bg-emerald-500', 'text-white', 'shadow-lg', 'shadow-emerald-500/20');
                } else {
                    tab.classList.add('bg-white', 'text-slate-600', 'border', 'border-slate-200');
                    tab.classList.remove('bg-emerald-500', 'text-white', 'shadow-lg', 'shadow-emerald-500/20');
                }
            });
        }
        
        // Initialize icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 w-full p-4 md:p-6">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-slate-200/50">
<a className="flex items-center gap-2 group" href="index.html">
<div className="bg-emerald-500 p-1.5 rounded-lg group-hover:bg-emerald-600 transition-colors text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="home"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Swarnim</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="index.html">Home</a>
<div className="relative group">
<button className="text-sm font-medium transition-colors text-emerald-600 flex items-center gap-1">
                        Services
                        <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
<div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" href="handyman.html">Handyman</a>
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" href="plumbing.html">Plumbing</a>
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" href="electrical.html">Electrical</a>
<a className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg" href="smart-home.html">Smart Home</a>
</div>
</div>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="index.html#team">Team</a>
<a className="text-sm font-medium transition-colors text-slate-600 hover:text-emerald-600" href="index.html#contact">Contact</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 bg-emerald-500 text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:bg-emerald-600 text-white" href="index.html#book">
                Book Service
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<button className="md:hidden text-slate-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</nav>
</header>

<div className="pt-28 pb-4 bg-slate-50 sticky top-20 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<a className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-emerald-500 text-white shadow-lg shadow-emerald-500/20" href="handyman.html">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="hammer"></i> Handyman</span>
</a>
<a className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600" href="plumbing.html">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="droplets"></i> Plumbing</span>
</a>
<a className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600" href="electrical.html">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="zap"></i> Electrical</span>
</a>
<a className="px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all bg-white text-slate-600 border border-slate-200 hover:border-emerald-300 hover:text-emerald-600" href="smart-home.html">
<span className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="smartphone"></i> Smart Home</span>
</a>
</div>
</div>
</div>

<main id="handyman-page">

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700">
<i className="w-5 h-5" data-lucide="hammer"></i>
<span className="text-sm font-semibold">Handyman Services</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Handyman</span> Services
                        </h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                            From small fixes to complete installations, our skilled handymen handle every task with precision and care. No job is too big or too small.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-amber-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-1 hover:bg-amber-600 text-white" href="index.html#book">
                                Book Handyman
                                <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:5551234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                                (555) 123-4567
                            </a>
</div>
</div>
<div className="relative">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10">
<img alt="Handyman Services" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Same Day Service</p>
<p className="text-xs text-slate-500">Available 7 days a week</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                        What We <span className="text-amber-500">Offer</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                        Comprehensive handyman solutions for every corner of your home.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="image"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Hanging &amp; Mounting</h3>
<p className="text-slate-500 font-medium mb-4">Pictures, mirrors, shelves, TVs, and decorative items mounted securely.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $49</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="armchair"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Furniture Assembly</h3>
<p className="text-slate-500 font-medium mb-4">Expert assembly of all furniture types from any retailer or brand.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $59</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="tv"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">TV Mounting</h3>
<p className="text-slate-500 font-medium mb-4">Professional TV installation with cable management and alignment.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $79</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="blinds"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Window Treatments</h3>
<p className="text-slate-500 font-medium mb-4">Blinds, curtains, and shades installed with precision.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $45</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="door-open"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Door &amp; Lock Repair</h3>
<p className="text-slate-500 font-medium mb-4">Door adjustments, lock replacements, and hardware installation.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $55</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="move"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Moving Help</h3>
<p className="text-slate-500 font-medium mb-4">Heavy lifting, rearranging furniture, and moving assistance.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $69/hr</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="paint-bucket"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Painting &amp; Patching</h3>
<p className="text-slate-500 font-medium mb-4">Touch-ups, drywall repair, and small painting projects.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $75</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="fence"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Deck &amp; Fence Repair</h3>
<p className="text-slate-500 font-medium mb-4">Outdoor repairs, board replacement, and maintenance.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $89</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50 hover:border-amber-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-5 group-hover:bg-amber-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="wrench"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">General Repairs</h3>
<p className="text-slate-500 font-medium mb-4">Caulking, weatherstripping, squeaky floors, and more.</p>
<p className="text-amber-600 font-semibold text-sm">Starting at $49</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-amber-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-slate-900">
                            Why Choose Our <span className="text-amber-500">Handyman</span> Services?
                        </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="check-circle"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Skilled Professionals</h4>
<p className="text-slate-500 font-medium">Our handymen have years of experience and are trained in multiple trades.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">On-Time Arrival</h4>
<p className="text-slate-500 font-medium">We respect your time with punctual arrivals and efficient work.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Satisfaction Guaranteed</h4>
<p className="text-slate-500 font-medium">We stand behind our work with a 100% satisfaction guarantee.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
<i className="w-6 h-6" data-lucide="banknote"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900 mb-1">Upfront Pricing</h4>
<p className="text-slate-500 font-medium">No hidden fees. Get a clear quote before work begins.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<img alt="Handyman at work" className="rounded-3xl shadow-xl" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
<div className="flex items-center gap-2 mb-2">
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
<i className="w-5 h-5 text-yellow-400 fill-yellow-400" data-lucide="star"></i>
</div>
<p className="text-slate-600 font-medium text-sm italic">"Best handyman service I've ever used. Quick, professional, and great prices!"</p>
<p className="text-slate-900 font-semibold text-sm mt-2">— Sarah M.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-amber-500">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    Ready to Get Things Done?
                </h2>
<p className="text-xl text-amber-100 font-medium mb-8">
                    Book your handyman service today and cross those tasks off your list.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-amber-50 text-amber-600 shadow-xl" href="index.html#book">
                        Book Now
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-amber-600 text-white" href="tel:5551234567">
<i className="w-5 h-5" data-lucide="phone"></i>
                        Call Us
                    </a>
</div>
</div>
</section>
</main>

<main className="hidden" id="plumbing-page">

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700">
<i className="w-5 h-5" data-lucide="droplets"></i>
<span className="text-sm font-semibold">Plumbing Services</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Plumbing</span> Solutions
                        </h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                            Expert plumbing services for all your water and drainage needs. From leaky faucets to complete pipe repairs, we've got you covered.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-blue-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-1 hover:bg-blue-600 text-white" href="index.html#book">
                                Book Plumber
                                <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:5551234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                                Emergency: (555) 123-4567
                            </a>
</div>
</div>
<div className="relative">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
<img alt="Plumbing Services" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600">
<i className="w-6 h-6" data-lucide="siren"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">24/7 Emergency</p>
<p className="text-xs text-slate-500">Available for urgent repairs</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                        Our Plumbing <span className="text-blue-500">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                        Complete plumbing solutions for residential and commercial properties.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Leak Detection &amp; Repair</h3>
<p className="text-slate-500 font-medium mb-4">Advanced leak detection and prompt repairs to prevent water damage.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $89</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="pipette"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Drain Cleaning</h3>
<p className="text-slate-500 font-medium mb-4">Clear clogged drains quickly with professional equipment.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $79</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="bath"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Faucet Installation</h3>
<p className="text-slate-500 font-medium mb-4">Upgrade or replace faucets in kitchens and bathrooms.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $99</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="toilet"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Toilet Repair &amp; Installation</h3>
<p className="text-slate-500 font-medium mb-4">Fix running toilets, clogs, and complete replacements.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $129</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="thermometer"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Water Heater Service</h3>
<p className="text-slate-500 font-medium mb-4">Repair, maintenance, and installation of water heaters.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $149</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-blue-50 hover:border-blue-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="waves"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Pipe Repair &amp; Replacement</h3>
<p className="text-slate-500 font-medium mb-4">Fix burst pipes, corrosion, and complete repiping services.</p>
<p className="text-blue-600 font-semibold text-sm">Starting at $199</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-blue-500">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    Plumbing Emergency?
                </h2>
<p className="text-xl text-blue-100 font-medium mb-8">
                    We're available 24/7 for emergency plumbing repairs. Don't wait!
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-blue-50 text-blue-600 shadow-xl" href="index.html#book">
                        Book Now
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-blue-600 text-white" href="tel:5551234567">
<i className="w-5 h-5" data-lucide="phone"></i>
                        Emergency Line
                    </a>
</div>
</div>
</section>
</main>

<main className="hidden" id="electrical-page">

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
<i className="w-5 h-5" data-lucide="zap"></i>
<span className="text-sm font-semibold">Electrical Services</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                            Safe &amp; Reliable <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Electrical</span> Services
                        </h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                            Licensed electricians for all your home electrical needs. From lighting installations to complete rewiring, we ensure safety first.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-yellow-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-1 hover:bg-yellow-600 text-white" href="index.html#book">
                                Book Electrician
                                <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:5551234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                                (555) 123-4567
                            </a>
</div>
</div>
<div className="relative">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-yellow-900/10">
<img alt="Electrical Services" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Fully Licensed</p>
<p className="text-xs text-slate-500">Certified electricians</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                        Electrical <span className="text-yellow-500">Services</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                        Professional electrical work with safety as our top priority.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Lighting Installation</h3>
<p className="text-slate-500 font-medium mb-4">Install new fixtures, recessed lighting, and LED upgrades.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $89</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="plug"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Outlet &amp; Switch Installation</h3>
<p className="text-slate-500 font-medium mb-4">Add new outlets, USB ports, and dimmer switches.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $79</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="fan"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Ceiling Fan Installation</h3>
<p className="text-slate-500 font-medium mb-4">Install or replace ceiling fans with proper wiring.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $99</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="gauge"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Panel Upgrades</h3>
<p className="text-slate-500 font-medium mb-4">Upgrade electrical panels for more capacity and safety.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $599</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="car"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">EV Charger Installation</h3>
<p className="text-slate-500 font-medium mb-4">Home electric vehicle charging station setup.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $399</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-yellow-50 hover:border-yellow-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-yellow-100 text-yellow-600 flex items-center justify-center mb-5 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="wind"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Exhaust Fan Installation</h3>
<p className="text-slate-500 font-medium mb-4">Bathroom and kitchen exhaust fan wiring and installation.</p>
<p className="text-yellow-600 font-semibold text-sm">Starting at $129</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-yellow-500">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    Need Electrical Work Done Right?
                </h2>
<p className="text-xl text-yellow-100 font-medium mb-8">
                    Our licensed electricians ensure safe, code-compliant work every time.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-yellow-50 text-yellow-600 shadow-xl" href="index.html#book">
                        Book Now
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-yellow-600 text-white" href="tel:5551234567">
<i className="w-5 h-5" data-lucide="phone"></i>
                        Call Us
                    </a>
</div>
</div>
</section>
</main>

<main className="hidden" id="smart-home-page">

<section className="py-16 lg:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700">
<i className="w-5 h-5" data-lucide="smartphone"></i>
<span className="text-sm font-semibold">Smart Home Services</span>
</div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter leading-[1.1] text-slate-900">
                            Transform Your Home Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Smart Home</span>
</h1>
<p className="text-lg text-slate-500 font-medium max-w-lg leading-relaxed">
                            Connect, automate, and control your home with cutting-edge smart technology. We make your home smarter, safer, and more efficient.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-purple-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:-translate-y-1 hover:bg-purple-600 text-white" href="index.html#book">
                                Book Consultation
                                <i className="w-4 h-4" data-lucide="calendar"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-700 border-slate-200" href="tel:5551234567">
<i className="w-4 h-4" data-lucide="phone"></i>
                                (555) 123-4567
                            </a>
</div>
</div>
<div className="relative">
<div className="rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10">
<img alt="Smart Home Services" className="w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600">
<i className="w-6 h-6" data-lucide="wifi"></i>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">Fully Connected</p>
<p className="text-xs text-slate-500">Smart automation experts</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-slate-900">
                        Smart Home <span className="text-purple-500">Solutions</span>
</h2>
<p className="text-lg text-slate-500 font-medium">
                        Complete smart home installation and setup services.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Lock Installation</h3>
<p className="text-slate-500 font-medium mb-4">Keyless entry systems with app control and remote access.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $149</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="video"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Video Doorbell Setup</h3>
<p className="text-slate-500 font-medium mb-4">See who's at your door from anywhere with smart doorbells.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $129</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Security Camera Installation</h3>
<p className="text-slate-500 font-medium mb-4">Indoor and outdoor security cameras with cloud storage.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $199</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="thermometer-sun"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Thermostat</h3>
<p className="text-slate-500 font-medium mb-4">Energy-saving thermostats with learning capabilities.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $179</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="wifi"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Wi-Fi Network Setup</h3>
<p className="text-slate-500 font-medium mb-4">Mesh networks and router optimization for full coverage.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $99</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="speaker"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Speaker &amp; Hub Setup</h3>
<p className="text-slate-500 font-medium mb-4">Alexa, Google Home, and smart hub configuration.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $79</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Smart Lighting</h3>
<p className="text-slate-500 font-medium mb-4">Automated lighting with schedules and voice control.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $89</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="blinds"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Motorized Blinds</h3>
<p className="text-slate-500 font-medium mb-4">Automated window treatments with app and voice control.</p>
<p className="text-purple-600 font-semibold text-sm">Starting at $249</p>
</div>

<div className="group p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-purple-50 hover:border-purple-200 transition-all">
<div className="w-14 h-14 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center mb-5 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<i className="w-7 h-7" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Whole Home Automation</h3>
<p className="text-slate-500 font-medium mb-4">Complete smart home integration and custom scenes.</p>
<p className="text-purple-600 font-semibold text-sm">Custom Quote</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">
                    Ready for a Smarter Home?
                </h2>
<p className="text-xl text-purple-100 font-medium mb-8">
                    Let us help you design and install the perfect smart home system.
                </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex justify-center items-center gap-2 bg-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-purple-50 text-purple-600 shadow-xl" href="index.html#book">
                        Get Started
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border-2 border-white text-base font-semibold px-8 py-4 rounded-full transition-all hover:bg-white hover:text-purple-600 text-white" href="tel:5551234567">
<i className="w-5 h-5" data-lucide="phone"></i>
                        Free Consultation
                    </a>
</div>
</div>
</section>
</main>

<footer className="pt-20 pb-10 border-t bg-slate-50 border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div className="space-y-6">
<a className="flex items-center gap-2" href="index.html">
<div className="bg-emerald-500 p-1.5 rounded-lg text-white">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="home"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Swarnim</span>
</a>
<p className="text-slate-500 font-medium leading-relaxed">
                        Your trusted partner for all home services. Professional, reliable, and always on time.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all bg-white border-slate-200 text-emerald-600 hover:text-white" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
</div>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="map-pin"></i>
<span>123 Service Lane, Metro City, ST 12345</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="phone"></i>
<span>(555) 123-4567</span>
</li>
<li className="flex items-center gap-3 text-slate-500 font-medium">
<i className="w-5 h-5 text-emerald-500 shrink-0" data-lucide="mail"></i>
<span>info@swarnim.com</span>
</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900">Business Hours</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-slate-900">7:00 AM - 7:00 PM</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-slate-900">8:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-slate-900">Emergency Only</span>
</li>
</ul>
</div>
<div>
<h4 className="font-bold mb-6 text-slate-900">Services</h4>
<ul className="space-y-3 text-slate-500 font-medium">
<li><a className="hover:text-emerald-500 transition-colors" href="handyman.html">Handyman</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="plumbing.html">Plumbing</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="electrical.html">Electrical</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="smart-home.html">Smart Home</a></li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
<p className="text-slate-500 font-medium text-sm">© 2024 Swarnim Home Services. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-emerald-600" href="#">Privacy Policy</a>
<a className="hover:text-emerald-600" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
