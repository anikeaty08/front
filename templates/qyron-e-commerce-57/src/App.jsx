import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function showPage(pageId) {
            const pages = ['home-page', 'catalog-page', 'about-page', 'contact-page'];
            
            // Scroll to top
            window.scrollTo(0, 0);

            // Hide all pages, show requested
            pages.forEach(id => {
                const el = document.getElementById(id);
                if (id === pageId + '-page') {
                    el.classList.remove('hidden');
                    el.classList.add('block');
                } else {
                    el.classList.remove('block');
                    el.classList.add('hidden');
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#" onclick="showPage('home')">
<img alt="Qyron Logo" className="h-10 w-auto object-contain brightness-110 contrast-125" src="https://i.imgur.com/vHqYhO5.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<button className="text-sm font-medium hover:text-white transition-colors" onclick="showPage('home')">Home</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="showPage('catalog')">Products</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="showPage('about')">About</button>
<button className="text-sm font-medium hover:text-white transition-colors" onclick="showPage('contact')">Contact</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white">
<i className="w-5 h-5" data-lucide="search"></i>
</button>
<button className="relative group">
<i className="w-5 h-5 text-zinc-400 group-hover:text-yellow-400 transition-colors" data-lucide="shopping-bag"></i>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full"></span>
</button>
<button className="md:hidden">
<i className="w-6 h-6 text-zinc-300" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<main className="pt-20">

<div className="block animate-in fade-in duration-500" id="home-page">

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-zinc-800">
<div className="absolute inset-0 hero-gradient"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/10 text-yellow-400 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
</span>
                        New Arrival: Thunderbolt 4 Series
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                        The Backbone of <br/>
<span className="text-gradient">Singapore's Connectivity</span>
</h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Engineered for speed, built for durability. Qyron delivers professional-grade data cables designed to withstand the humidity and demands of the modern Lion City workspace.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-yellow-400 to-lime-500 text-zinc-950 font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2" onclick="showPage('catalog')">
                            Shop Collection <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="w-full md:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium rounded-lg hover:bg-zinc-800 transition-colors" onclick="showPage('about')">
                            Our Technology
                        </button>
</div>
</div>
</section>

<section className="py-12 border-b border-zinc-800 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-zinc-500 mb-8">ENGINEERED FOR SEAMLESS COMPATIBILITY WITH</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-bold tracking-tighter text-white">Apple</span>
<span className="text-xl font-bold tracking-tighter text-white">SAMSUNG</span>
<span className="text-xl font-bold tracking-tighter text-white italic">Dell</span>
<span className="text-xl font-bold tracking-tighter text-white">Lenovo</span>
<span className="text-xl font-bold tracking-tighter text-white">SONY</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Performance without compromise.</h2>
<p className="text-lg text-zinc-400 max-w-2xl">We stripped away the marketing fluff and focused on physics. Copper quality, shielding, and connector integrity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative h-96 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-zinc-800/20 to-zinc-950/0 z-0"></div>
<div className="absolute bottom-0 left-0 p-8 z-10">
<div className="bg-yellow-500/10 p-3 rounded-lg w-fit mb-4">
<i className="w-6 h-6 text-yellow-400" data-lucide="zap"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">100W Power Delivery</h3>
<p className="text-lg text-zinc-400">Charge your MacBook Pro, iPad, and iPhone at maximum rated speeds. E-Marker chips ensure safety.</p>
</div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover opacity-20 group-hover:opacity-30 transition-opacity"></div>
</div>

<div className="relative h-96 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group">
<div className="absolute p-8 z-10">
<i className="w-8 h-8 text-lime-400 mb-6" data-lucide="shield-check"></i>
<h3 className="text-2xl font-medium text-white mb-2">Kevlar® Core</h3>
<p className="text-lg text-zinc-400">50,000+ bend lifespan. Tested for daily abuse.</p>
</div>
</div>

<div className="relative h-96 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group">
<div className="absolute p-8 z-10">
<i className="w-8 h-8 text-yellow-400 mb-6" data-lucide="arrow-left-right"></i>
<h3 className="text-2xl font-medium text-white mb-2">40Gbps Transfer</h3>
<p className="text-lg text-zinc-400">Move 4K movies in seconds. Thunderbolt 4 ready.</p>
</div>
</div>

<div className="md:col-span-2 relative h-96 rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden group">
<div className="absolute bottom-0 left-0 p-8 z-10 w-full md:w-2/3">
<h3 className="text-2xl font-medium text-white mb-2">Anti-Oxidation Coating</h3>
<p className="text-lg text-zinc-400">Specifically treated connectors to resist Singapore's high humidity environment, preventing connection failures over time.</p>
</div>
<div className="absolute top-8 right-8">
<i className="w-8 h-8 text-cyan-400" data-lucide="droplets"></i>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden animate-in fade-in duration-500" id="catalog-page">

<section className="pt-12 pb-8 border-b border-zinc-800 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end">
<div>
<p className="text-yellow-400 font-medium mb-2 uppercase tracking-widest text-sm">The Collection</p>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Data &amp; Power</h1>
</div>
<div className="mt-6 md:mt-0 flex gap-3">
<button className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sliders-horizontal"></i> Filters
                            </button>
<button className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-2">
                                Sort by: Featured <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group">
<div className="relative bg-zinc-900 rounded-2xl overflow-hidden aspect-square border border-zinc-800 mb-4 group-hover:border-zinc-600 transition-colors">
<div className="absolute top-3 left-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded">BESTSELLER</div>
<img alt="Cable" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-yellow-400 transition-colors">Qyron Thunderbolt 4 Pro</h3>
<p className="text-zinc-500 text-sm">0.8m • 40Gbps • 100W</p>
</div>
<p className="text-white font-medium">S$49.90</p>
</div>
</div>

<div className="group">
<div className="relative bg-zinc-900 rounded-2xl overflow-hidden aspect-square border border-zinc-800 mb-4 group-hover:border-zinc-600 transition-colors">
<div className="absolute top-3 left-3 bg-zinc-800 text-white text-xs font-bold px-2 py-1 rounded border border-zinc-700">NEW</div>
<img alt="Cable" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-yellow-400 transition-colors">Qyron Flex USB-C</h3>
<p className="text-zinc-500 text-sm">2.0m • Braided • 60W</p>
</div>
<p className="text-white font-medium">S$24.90</p>
</div>
</div>

<div className="group">
<div className="relative bg-zinc-900 rounded-2xl overflow-hidden aspect-square border border-zinc-800 mb-4 group-hover:border-zinc-600 transition-colors">
<img alt="Cable" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-yellow-400 transition-colors">Lightning Dura-Sync</h3>
<p className="text-zinc-500 text-sm">1.2m • MFi Certified</p>
</div>
<p className="text-white font-medium">S$32.90</p>
</div>
</div>

<div className="group">
<div className="relative bg-zinc-900 rounded-2xl overflow-hidden aspect-square border border-zinc-800 mb-4 group-hover:border-zinc-600 transition-colors">
<img alt="Cable" className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-black opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
<i className="w-5 h-5" data-lucide="plus"></i>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-lg mb-1 group-hover:text-yellow-400 transition-colors">HDMI 2.1 Ultra</h3>
<p className="text-zinc-500 text-sm">3.0m • 8K Support</p>
</div>
<p className="text-white font-medium">S$55.00</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="hidden animate-in fade-in duration-500" id="about-page">

<section className="relative py-24 border-b border-zinc-800 bg-zinc-950 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-zinc-950/0 to-zinc-950/0"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<p className="text-yellow-400 font-medium mb-4 uppercase tracking-widest text-sm">Our Mission</p>
<h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        Eliminating the <br/> <span className="text-zinc-500">Disposable Culture.</span>
</h1>
<p className="text-xl text-zinc-400 leading-relaxed">
                        We started Qyron because we were tired of replacing cables every 3 months. In a world of planned obsolescence, we engineer products designed to outlast the devices they connect.
                    </p>
</div>
</section>

<section className="border-b border-zinc-800 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
<div className="py-12 px-6 text-center">
<span className="block text-4xl font-medium text-white mb-2">2019</span>
<span className="text-sm text-zinc-500 uppercase tracking-widest">Founded in SG</span>
</div>
<div className="py-12 px-6 text-center">
<span className="block text-4xl font-medium text-white mb-2">12%</span>
<span className="text-sm text-zinc-500 uppercase tracking-widest">Revenue to R&amp;D</span>
</div>
<div className="py-12 px-6 text-center">
<span className="block text-4xl font-medium text-white mb-2">0.4%</span>
<span className="text-sm text-zinc-500 uppercase tracking-widest">Return Rate</span>
</div>
<div className="py-12 px-6 text-center">
<span className="block text-4xl font-medium text-white mb-2">20k+</span>
<span className="text-sm text-zinc-500 uppercase tracking-widest">Pro Users</span>
</div>
</div>
</section>

<section className="py-24 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 mb-6 text-yellow-400">
<i className="w-5 h-5" data-lucide="microscope"></i>
<span className="font-medium">The Lab at Tai Seng</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Physics, not Marketing.</h2>
<div className="space-y-6 text-lg text-zinc-400">
<p>
                                Most cable brands are just logos slapped on generic factory outputs. Qyron is different. We design our own connector molds and specify our own copper purity levels.
                            </p>
<p>
                                We discovered that 85% of cable failures in Singapore are due to humidity-induced oxidation at the connector contact points. That's why every Qyron Pro cable undergoes a specialized 24-hour salt spray test and receives a proprietary plating treatment.
                            </p>
<p>
                                We don't just sell cables; we sell the assurance that your data transfer won't fail during a critical render export.
                            </p>
</div>
</div>
<div className="relative h-[500px] bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
<img alt="Engineering Lab" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-zinc-950 to-transparent">
<p className="text-white font-medium">Quality Control Station 04</p>
<p className="text-zinc-500 text-sm">Every cable is hand-tested before packaging.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">Core Principles</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<i className="w-8 h-8 text-lime-400 mb-6" data-lucide="recycle"></i>
<h3 className="text-xl font-medium text-white mb-3">Sustainable by Design</h3>
<p className="text-zinc-400 leading-relaxed">We eliminated plastic blister packs in 2021. Our packaging is 100% recyclable paper, and our cables are built to last years, reducing e-waste.</p>
</div>
<div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<i className="w-8 h-8 text-yellow-400 mb-6" data-lucide="shield-check"></i>
<h3 className="text-xl font-medium text-white mb-3">Honest Specs</h3>
<p className="text-zinc-400 leading-relaxed">If we say 100W, it sustains 100W. If we say USB 3.2 Gen 2, it hits 10Gbps. No theoretical maximums, only real-world sustained performance.</p>
</div>
<div className="p-8 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
<i className="w-8 h-8 text-sky-400 mb-6" data-lucide="users"></i>
<h3 className="text-xl font-medium text-white mb-3">Community First</h3>
<p className="text-zinc-400 leading-relaxed">We are active in the local tech scene. We support local creators, photographers, and developers with gear and sponsorships.</p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden animate-in fade-in duration-500" id="contact-page">

<section className="pt-24 pb-12 border-b border-zinc-800 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Get in touch</h1>
<p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Whether you need technical support, have a warranty claim, or want to equip your office, our team is ready to help.
                    </p>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 space-y-8">

<div className="grid gap-4">
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
<div className="flex items-center gap-4 mb-2">
<div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-400"><i className="w-5 h-5" data-lucide="mail"></i></div>
<h3 className="text-white font-medium">Email Us</h3>
</div>
<p className="text-zinc-400 text-sm ml-14">support@qyron.sg</p>
<p className="text-zinc-500 text-xs ml-14 mt-1">Replies within 24 hours</p>
</div>
<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
<div className="flex items-center gap-4 mb-2">
<div className="p-2 bg-lime-500/10 rounded-lg text-lime-400"><i className="w-5 h-5" data-lucide="message-circle"></i></div>
<h3 className="text-white font-medium">WhatsApp</h3>
</div>
<p className="text-zinc-400 text-sm ml-14">+65 8888 1234</p>
<p className="text-zinc-500 text-xs ml-14 mt-1">Mon-Fri, 9am - 6pm SGT</p>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
<div className="h-48 bg-zinc-800 w-full relative">

<div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Map_of_Singapore_with_regions.svg/1200px-Map_of_Singapore_with_regions.svg.png')] bg-cover bg-center grayscale invert"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
<div className="relative flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 border-2 border-black"></span>
</div>
</div>
</div>
<div className="p-6">
<h3 className="text-white font-medium mb-2">Singapore HQ &amp; Service Centre</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-4">
                                     22 Tai Seng Drive, #04-01<br/>
                                     Singapore 535222
                                 </p>
<a className="text-sm text-yellow-400 hover:text-white transition-colors flex items-center gap-1" href="#">Get Directions <i className="w-3 h-3" data-lucide="external-link"></i></a>
</div>
</div>
</div>

<div className="lg:col-span-3">
<form className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400">First Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Jane" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-400">Last Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="Doe" type="text"/>
</div>
</div>
<div className="mb-6 space-y-2">
<label className="text-sm font-medium text-zinc-400">Email Address</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" placeholder="jane@example.com" type="email"/>
</div>
<div className="mb-6 space-y-2">
<label className="text-sm font-medium text-zinc-400">Topic</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all appearance-none">
<option>General Inquiry</option>
<option>Warranty Claim</option>
<option>Order Status</option>
<option>Corporate Sales</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>
<div className="mb-8 space-y-2">
<label className="text-sm font-medium text-zinc-400">Message</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none" placeholder="How can we help you?" rows="5"></textarea>
</div>
<button className="w-full py-4 bg-white text-zinc-950 font-medium rounded-lg hover:bg-zinc-200 transition-colors" type="button">Send Message</button>
</form>
</div>
</div>
</section>

<section className="py-16 border-t border-zinc-800 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-white font-medium mb-8 text-center">Specific Support Channels</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<i className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400 transition-colors" data-lucide="package-check"></i>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
<h4 className="text-white font-medium mb-1">Warranty Center</h4>
<p className="text-zinc-500 text-sm">Start a return or exchange process.</p>
</a>
<a className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<i className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400 transition-colors" data-lucide="truck"></i>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
<h4 className="text-white font-medium mb-1">Track Order</h4>
<p className="text-zinc-500 text-sm">Check NinjaVan delivery status.</p>
</a>
<a className="group p-6 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-all" href="#">
<div className="flex items-center justify-between mb-4">
<i className="w-6 h-6 text-zinc-400 group-hover:text-yellow-400 transition-colors" data-lucide="file-text"></i>
<i className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" data-lucide="arrow-right"></i>
</div>
<h4 className="text-white font-medium mb-1">Product Manuals</h4>
<p className="text-zinc-500 text-sm">Download technical specs PDF.</p>
</a>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-zinc-950 border-t border-zinc-800 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<img alt="Qyron Logo" className="h-8 w-auto object-contain brightness-110 contrast-125" src="https://i.imgur.com/vHqYhO5.png"/>
</div>
<p className="text-zinc-500 text-lg leading-relaxed">
                        Engineered in Singapore.<br/>Built for the world.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-6">Products</h4>
<ul className="space-y-4 text-zinc-500">
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('catalog')">USB-C Cables</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('catalog')">Lightning Cables</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('catalog')">Thunderbolt</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('catalog')">Adapters</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Support</h4>
<ul className="space-y-4 text-zinc-500">
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('contact')">Warranty Claim</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('contact')">Shipping Policy</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('about')">About Us</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#" onclick="showPage('contact')">Contact Us</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-6">Stay Connected</h4>
<div className="flex gap-2 mb-6">
<input className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:border-yellow-400 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition-colors"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm">
<p>© 2023 Qyron Singapore Pte Ltd. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
<a className="hover:text-zinc-400" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
