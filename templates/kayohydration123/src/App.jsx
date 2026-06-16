import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function switchPage(pageId) {
            // 1. Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.add('hidden');
                page.classList.remove('fade-in'); 
            });

            // 2. Show selected page
            const selectedPage = document.getElementById(`page-${pageId}`);
            if (selectedPage) {
                selectedPage.classList.remove('hidden');
                void selectedPage.offsetWidth; // Trigger reflow
                selectedPage.classList.add('fade-in');
            }

            // 3. Update Nav States
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-zinc-400');
            });

            const activeNav = document.getElementById(`nav-${pageId}`);
            if (activeNav) {
                activeNav.classList.remove('text-zinc-400');
                activeNav.classList.add('text-white');
            }
            
            // 4. Scroll to top
            window.scrollTo(0, 0);
        }

        function toggleMobile() {
            document.getElementById('mobile-menu').classList.toggle('hidden');
        }

        // Initialize Home Page on Load
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-panel">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-3 group shrink-0" href="#" onclick="switchPage('home'); return false;">
<div className="flex group-hover:rotate-12 transition-transform duration-300 bg-center font-semibold text-black tracking-tighter bg-white w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6471bda-2f3e-45c6-85b6-323987211fe3_320w.jpg)] bg-cover rounded-lg items-center justify-center cursor-pointer" onclick="window.location.href='/home'" role="button">
</div>
<span className="text-xl font-semibold tracking-tight text-white group-hover:text-zinc-300 transition-colors">KAYO Hydration</span>
</a>

<div className="hidden lg:flex items-center gap-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<button className="px-4 py-2 rounded-full text-sm font-medium text-white hover:text-neon hover:bg-white/5 transition-all" id="nav-home" onclick="switchPage('home')">Home</button>
<button className="hover:text-white hover:bg-white/5 transition-all cursor-pointer text-sm font-medium text-zinc-400 rounded-full pt-2 pr-4 pb-2 pl-4" id="nav-products" onclick="switchPage('products');window.location.href='/product'" role="button">Products</button>
<button className="hover:text-white hover:bg-white/5 transition-all cursor-pointer text-sm font-medium text-zinc-400 rounded-full pt-2 pr-4 pb-2 pl-4" id="nav-subs" onclick="switchPage('subs');window.location.href='/subscription'" role="button">Subscriptions</button>
<button className="hover:text-white hover:bg-white/5 transition-all whitespace-nowrap text-sm font-medium text-zinc-400 rounded-full pt-2 pr-4 pb-2 pl-4 cursor-pointer" id="nav-run" onclick="switchPage('run');window.location.href='/kayo-run-series'" role="button">KAYO Run Series</button>
<button className="hover:text-white hover:bg-white/5 transition-all text-sm font-medium text-zinc-400 rounded-full pt-2 pr-4 pb-2 pl-4 cursor-pointer" id="nav-partners" onclick="switchPage('partners');window.location.href='/partners'" role="button">Partners</button>
</div>

<div className="flex items-center gap-2 text-zinc-400 shrink-0">
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 hover:text-white transition-colors"></button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 hover:text-white transition-colors"></button>
<button className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 hover:text-white transition-colors relative group">
<svg className="" data-icon-set="lucide" data-lucide="shopping-bag" height="22" style={{}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="absolute top-2.5 right-2.5 w-2 h-2 bg-neon rounded-full ring-2 ring-zinc-950 group-hover:scale-110 transition-transform"></span>
</button>

<button className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-white transition-colors ml-1" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="" data-icon-set="lucide" data-lucide="menu" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="hidden lg:hidden bg-zinc-950 border-b border-zinc-800 px-6 py-6 absolute w-full left-0 top-20" id="mobile-menu">
<div className="flex flex-col gap-6">
<button className="text-left text-lg font-medium text-white hover:text-neon" onclick="switchPage('home'); toggleMobile()">Home</button>
<button className="text-left text-lg font-medium text-zinc-400 hover:text-white" onclick="switchPage('products'); toggleMobile()">Products</button>
<button className="text-left text-lg font-medium text-zinc-400 hover:text-white" onclick="switchPage('subs'); toggleMobile()">Subscriptions</button>
<button className="text-left text-lg font-medium text-zinc-400 hover:text-white" onclick="switchPage('run'); toggleMobile()">KAYO Run Series</button>
<button className="text-left text-lg font-medium text-zinc-400 hover:text-white" onclick="switchPage('partners'); toggleMobile()">Partners</button>
</div>
</div>
</nav>

<main className="flex-grow pt-20">

<div className="page-section fade-in" id="page-home">

<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Athlete training" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-[2s]" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="z-10 hero-overlay absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
<h1 className="md:text-8xl leading-[0.95] text-5xl font-semibold text-white tracking-tighter mb-6">
                        Fuel Your Performance.<br/>
<span className="text-zinc-500">Never Run Dry.</span>
</h1>
<p className="text-xl text-zinc-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        Precision hydration designed for the modern athlete. Electrolytes, zero sugar, and rapid absorption for when every second counts.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="sm:w-auto hover:bg-[#b8e629] transition-all active:scale-95 font-semibold text-zinc-950 w-full rounded-full pt-4 pr-10 pb-4 pl-10 shadow-[#ceff2f20]" onclick="switchPage('products');window.location.href='/product'" role="button" style={{backgroundColor: '#CEFF2F'}}>
                            Shop Now
                        </button>
<button className="sm:w-auto hover:border-white transition-all active:scale-95 font-semibold text-white bg-zinc-800/50 w-full border-zinc-700 border rounded-full pt-4 pr-10 pb-4 pl-10 backdrop-blur" onclick="switchPage('subs');window.location.href='/subscription'" role="button">
                            Subscribe &amp; Save
                        </button>
</div>
</div>
</section>

<section className="bg-zinc-950 border-zinc-900 border-b pt-24 pb-24">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tighter mb-4">Meet the Flavors</h2>
<p className="text-lg text-zinc-400">Designed for performance, built for taste.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="bg-zinc-900 rounded-[32px] p-2 border border-neon flex flex-col group relative overflow-hidden transition-all duration-300 shadow-[0_0_40px_-15px_rgba(206,255,47,0.2)]">

<div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[24px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-100 mix-blend-normal w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8b8a61b-ed20-4f6c-98d9-a349d8a4f9a1_800w.jpg" style={{}}/>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="flex invisible absolute top-0 right-0 bottom-0 left-0 grayscale items-center justify-center">
</div>
</div>

<div className="p-6 flex flex-col flex-grow">
<h3 className="text-2xl font-bold text-white tracking-tight mb-2">Mint Mojito</h3>
<p className="text-sm font-medium text-zinc-400 mb-8">Refreshing • Light • Crisp Mint</p>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="hover:bg-[#b8e629] transition-colors shadow-lime-900/20 text-sm font-semibold text-zinc-950 text-center rounded-full pt-3 pr-4 pb-3 pl-4 shadow-lg" onclick="switchPage('products');window.location.href='/product'" role="button">Shop Now</button>
<button className="hover:border-white transition-colors text-sm font-semibold text-white text-center bg-transparent border-zinc-700 border rounded-full pt-3 pr-4 pb-3 pl-4" onclick="switchPage('products');window.location.href='/product-mint-mojito'" role="button">Learn More</button>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-[32px] p-2 border border-zinc-800 hover:border-zinc-600 flex flex-col group relative overflow-hidden transition-all duration-300">
<div className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-[24px] aspect-[4/5] relative flex items-center justify-center overflow-hidden">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-100 mix-blend-overlay w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/017d0c47-88bc-4fd6-beb5-2fd94b09ff0f_800w.jpg?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-black/20"></div>
<div className="flex bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f8b97db-d342-4845-b696-c30631a8d04e_800w.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
</div>
</div>
<div className="p-6 flex flex-col flex-grow">
<h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Berry Blast</h3>
<p className="text-zinc-400 text-sm font-medium mb-8">Fruity • Smooth • Easy Drinking</p>
<div className="mt-auto grid grid-cols-2 gap-3">
<button className="hover:bg-[#b8e629] transition-colors text-sm font-semibold text-zinc-950 text-center rounded-full pt-3 pr-4 pb-3 pl-4 cursor-pointer" onclick="switchPage('products');window.location.href='/product'" role="button">Shop Now</button>
<button className="hover:border-white transition-colors text-sm font-semibold text-white text-center bg-transparent border-zinc-700 border rounded-full pt-3 pr-4 pb-3 pl-4" onclick="switchPage('products');window.location.href='/product-berry-blast'" role="button">Learn More</button>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon opacity-[0.03] blur-[120px] rounded-full"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<span className="inline-block py-1 px-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-6">Automate Your Hydration</span>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">Never Run Dry.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left max-w-2xl mx-auto">
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
<div className="text-neon mb-2 font-bold">Starter</div>
<div className="text-sm text-zinc-400">Monthly refill of your favorite box.</div>
</div>
<div className="p-6 rounded-2xl border border-neon bg-zinc-900/80 shadow-lg shadow-lime-900/10 transform scale-105">
<div className="text-neon mb-2 font-bold">Athlete</div>
<div className="text-sm text-zinc-400">Bi-weekly delivery + free merch.</div>
</div>
<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/50">
<div className="text-neon mb-2 font-bold">Elite</div>
<div className="text-sm text-zinc-400">Weekly bulk supply for serious training.</div>
</div>
</div>
<button className="hover:bg-white hover:text-black transition-colors font-medium text-white border-zinc-700 border rounded-full pt-3 pr-8 pb-3 pl-8" onclick="switchPage('subs');window.location.href='/subscription'" role="button">Explore Subscriptions</button>
</div>
</section>

<section className="relative h-[60vh] flex items-center">
<img className="absolute inset-0 w-full h-full object-cover grayscale opacity-50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-xl">
<div className="flex items-center gap-3 mb-4">
<span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span>
<span className="text-neon font-bold text-xs uppercase tracking-widest">Community Event</span>
</div>
<h2 className="text-5xl font-semibold text-white tracking-tighter mb-6">KO Run Series</h2>
<p className="text-lg text-zinc-300 mb-8 leading-relaxed">Join the squad. 5km and 10km monthly runs in major cities. Hydration stations, music, and post-run recovery included.</p>
<button className="hover:bg-zinc-200 transition-all font-semibold text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8" onclick="switchPage('run');window.location.href='/kayo-run-series'" role="button">See Upcoming Runs</button>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 border-t border-zinc-800">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl font-semibold text-white mb-4 tracking-tight">Join the KAYO Squad</h2>
<p className="text-zinc-400 mb-8">Get early access to new drops, run sign-ups, and training tips.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-grow px-6 py-4 rounded-full bg-zinc-950 border border-zinc-800 text-white focus:outline-none focus:border-neon transition-colors" placeholder="Enter your email" type="email"/>
<button className="px-8 py-4 bg-neon hover:bg-[#b8e629] text-black font-semibold rounded-full transition-colors whitespace-nowrap" type="button">Sign Up</button>
</form>
</div>
</section>
</div>

<div className="page-section hidden" id="page-products">

<div className="pt-12 pb-20 px-6 bg-zinc-950 border-b border-zinc-900">
<div className="max-w-7xl mx-auto">
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">Performance<br/><span className="text-zinc-600">Hydration.</span></h1>
<p className="text-xl text-zinc-400 max-w-2xl">Scientifically formulated electrolyte mixes for before, during, and after your grind.</p>
</div>
</div>
<div className="bg-zinc-950 py-20">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">

<div className="group">
<div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative border border-zinc-800 group-hover:border-neon transition-colors duration-300">
<img className="w-full h-full object-cover mix-blend-overlay opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-neon border border-zinc-700">MINT MOJITO</div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-white">Hydration Box (30)</h3>
<span className="text-white font-medium">R289</span>
</div>
<p className="text-sm text-zinc-500 mb-6">Cooling mint blend for high heat.</p>
<a className="block w-full text-center py-3 bg-white hover:bg-zinc-200 text-zinc-950 rounded-full font-semibold text-sm transition-colors" href="https://shopify.com" target="_blank">Buy on Shopify</a>
</div>

<div className="group">
<div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative border border-zinc-800 group-hover:border-neon transition-colors duration-300">
<img className="w-full h-full object-cover mix-blend-overlay opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-neon border border-zinc-700">BERRY BLAST</div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-white">Hydration Box (30)</h3>
<span className="text-white font-medium">R289</span>
</div>
<p className="text-sm text-zinc-500 mb-6">Mixed berry profile for daily use.</p>
<a className="block w-full text-center py-3 bg-white hover:bg-zinc-200 text-zinc-950 rounded-full font-semibold text-sm transition-colors" href="https://shopify.com" target="_blank">Buy on Shopify</a>
</div>

<div className="group">
<div className="aspect-square bg-zinc-900 rounded-3xl overflow-hidden mb-6 relative border border-zinc-800 group-hover:border-neon transition-colors duration-300">
<img className="w-full h-full object-cover mix-blend-overlay opacity-60" src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-black/50 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-neon border border-zinc-700">MANGO PEACH</div>
</div>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold text-white">Hydration Box (30)</h3>
<span className="text-white font-medium">R289</span>
</div>
<p className="text-sm text-zinc-500 mb-6">Tropical sweetness with zero sugar.</p>
<a className="block w-full text-center py-3 bg-white hover:bg-zinc-200 text-zinc-950 rounded-full font-semibold text-sm transition-colors" href="https://shopify.com" target="_blank">Buy on Shopify</a>
</div>
</div>

<div className="border-t border-zinc-800 pt-20">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col gap-4">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-neon border border-zinc-800">
<svg className="" data-icon-set="lucide" data-lucide="zap" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white">Rapid Absorption</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Hypotonic formula designed to enter the bloodstream faster than water alone.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-neon border border-zinc-800">
<svg className="" data-icon-set="lucide" data-lucide="droplet" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white">Optimal Electrolytes</h3>
<p className="text-zinc-400 text-sm leading-relaxed">1000mg Sodium, 200mg Potassium, 60mg Magnesium per serving.</p>
</div>
<div className="flex flex-col gap-4">
<div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-neon border border-zinc-800">
<svg className="" data-icon-set="lucide" data-lucide="check-circle" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
</div>
<h3 className="text-xl font-semibold text-white">Clean Ingredients</h3>
<p className="text-zinc-400 text-sm leading-relaxed">No artificial dyes, fillers, or banned substances. Safe for competition.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-subs">
<div className="bg-zinc-950 py-24">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center max-w-3xl mx-auto mb-20">
<h1 className="text-5xl font-semibold tracking-tighter text-white mb-6">Never Run Dry.</h1>
<p className="text-xl text-zinc-400 mb-8">Save up to 20% and get free shipping when you automate your hydration.</p>
<div className="inline-flex bg-zinc-900 p-1.5 rounded-2xl border border-zinc-800">
<button className="px-8 py-3 rounded-xl bg-zinc-800 text-white text-sm font-semibold shadow-sm">Monthly</button>
<button className="px-8 py-3 rounded-xl text-zinc-500 text-sm font-semibold hover:text-white transition-colors">Quarterly</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">

<div className="p-8 rounded-[32px] bg-zinc-900/40 border border-zinc-800 flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Starter</h3>
<p className="text-zinc-500 text-sm mb-6">For the casual athlete.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R300</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300"><svg className="text-zinc-600" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 4 Boxes / month</li>
<li className="flex gap-3 text-sm text-zinc-300"><svg className="text-zinc-600" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 5% Savings</li>
</ul>
<button className="w-full py-4 rounded-full border border-zinc-700 hover:border-white text-white font-medium text-sm transition-colors">Subscribe Now</button>
</div>

<div className="p-8 rounded-[32px] bg-zinc-900/80 border border-neon relative shadow-2xl shadow-lime-900/10 transform md:-translate-y-4">
<div className="absolute top-0 right-0 -mt-3 mr-6 px-4 py-1 bg-neon text-zinc-950 text-xs font-bold uppercase tracking-wider rounded-full">Best Value</div>
<h3 className="text-xl font-medium text-white mb-2">Athlete</h3>
<p className="text-neon text-sm mb-6">Most popular choice.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R580</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white"><svg className="text-neon" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 8 Boxes / month</li>
<li className="flex gap-3 text-sm text-white"><svg className="text-neon" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 15% Savings</li>
</ul>
<button className="w-full py-4 rounded-full bg-neon hover:bg-[#b8e629] text-zinc-950 font-bold text-sm transition-colors">Subscribe Now</button>
</div>

<div className="p-8 rounded-[32px] bg-zinc-900/40 border border-zinc-800 flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Elite</h3>
<p className="text-zinc-500 text-sm mb-6">For heavy training.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">R850</span>
<span className="text-zinc-500">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300"><svg className="text-zinc-600" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 12 Boxes / month</li>
<li className="flex gap-3 text-sm text-zinc-300"><svg className="text-zinc-600" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> 20% Savings</li>
</ul>
<button className="w-full py-4 rounded-full border border-zinc-700 hover:border-white text-white font-medium text-sm transition-colors">Subscribe Now</button>
</div>
</div>

<div className="mb-24">
<h2 className="text-2xl font-semibold text-center mb-12">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<span className="text-4xl font-bold text-zinc-800 mb-4 block">01</span>
<h4 className="text-white font-medium mb-2">Choose Tier</h4>
<p className="text-sm text-zinc-500">Select the volume that matches your training load.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<span className="text-4xl font-bold text-zinc-800 mb-4 block">02</span>
<h4 className="text-white font-medium mb-2">Pick Flavors</h4>
<p className="text-sm text-zinc-500">Mix and match any of our 3 core flavors.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<span className="text-4xl font-bold text-zinc-800 mb-4 block">03</span>
<h4 className="text-white font-medium mb-2">Get Delivered</h4>
<p className="text-sm text-zinc-500">Free shipping directly to your door.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800">
<span className="text-4xl font-bold text-zinc-800 mb-4 block">04</span>
<h4 className="text-white font-medium mb-2">Manage</h4>
<p className="text-sm text-zinc-500">Pause, skip, or cancel anytime via SMS.</p>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto border-t border-zinc-800 pt-16">
<h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-zinc-900 rounded-xl border border-zinc-800">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">Can I swap flavors monthly?</span>
<span className="transition group-open:rotate-180"><svg className="" data-icon-set="lucide" data-lucide="chevron-down" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm">
                                    Yes! You will receive an email 3 days before your renewal where you can customize your box selection.
                                </div>
</details>
<details className="group bg-zinc-900 rounded-xl border border-zinc-800">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-white">Is shipping really free?</span>
<span className="transition group-open:rotate-180"><svg className="" data-icon-set="lucide" data-lucide="chevron-down" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></span>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm">
                                    Shipping is included on all subscription orders within the country.
                                </div>
</details>
</div>
</div>

<div className="mt-24 text-center">
<p className="text-zinc-400 mb-4">Not ready to commit?</p>
<button className="text-neon font-medium hover:underline decoration-neon underline-offset-4" onclick="switchPage('products')">Shop single boxes →</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-run">

<section className="relative h-[70vh] flex items-end pb-20 overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-white mb-6">Join the <br/><span className="text-neon">KAYO Run Series</span></h1>
<p className="text-xl text-zinc-300 max-w-xl">More than a run club. It's a movement. Monthly timed races, community vibes, and serious hydration.</p>
</div>
</section>

<section className="py-20 bg-zinc-950 border-b border-zinc-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-semibold text-white mb-10">What's Included</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
<svg className="text-neon text-3xl mb-4" data-icon-set="lucide" data-lucide="map-pin" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
<h4 className="font-medium text-white">Marked Routes</h4>
</div>
<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
<svg className="text-neon text-3xl mb-4" data-icon-set="lucide" data-lucide="droplet" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h4 className="font-medium text-white">Hydration Stations</h4>
</div>
<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
<svg className="text-neon text-3xl mb-4" data-icon-set="lucide" data-lucide="music" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></g></svg>
<h4 className="font-medium text-white">Live DJ</h4>
</div>
<div className="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800">
<svg className="text-neon text-3xl mb-4" data-icon-set="lucide" data-lucide="camera" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
<h4 className="font-medium text-white">Pro Photos</h4>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-white mb-12">Upcoming Runs</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group hover:border-neon transition-all">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Jan 10</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-white mb-2">Twilight Run: Cape Town</h3>
<p className="text-zinc-400 mb-6 flex items-center gap-2"><svg className="" data-icon-set="lucide" data-lucide="map-pin" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Green Point Promenade</p>
<button className="w-full py-4 bg-zinc-800 hover:bg-neon hover:text-black text-white font-semibold rounded-xl transition-colors">Register - R50</button>
</div>
</div>

<div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 group hover:border-neon transition-all">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Feb 14</div>
</div>
<div className="p-8">
<h3 className="text-2xl font-bold text-white mb-2">Valentines Dash: Joburg</h3>
<p className="text-zinc-400 mb-6 flex items-center gap-2"><svg className="" data-icon-set="lucide" data-lucide="map-pin" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> The Wilds, Houghton</p>
<button className="w-full py-4 bg-zinc-800 hover:bg-neon hover:text-black text-white font-semibold rounded-xl transition-colors">Register - R50</button>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-partners">
<div className="bg-zinc-950 pt-20 pb-32">
<div className="max-w-6xl mx-auto px-6">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-6 text-center">Partner with KAYO</h1>
<p className="text-xl text-zinc-400 text-center max-w-2xl mx-auto mb-20">We fuel the best. From local run clubs to premier gyms, bring KAYO hydration to your community.</p>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-neon transition-colors">
<svg className="text-white text-3xl mb-4" data-icon-set="lucide" data-lucide="dumbbell" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="font-semibold text-white mb-2">Gyms &amp; Studios</h3>
<p className="text-sm text-zinc-500">Wholesale retail opportunities.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-neon transition-colors">
<svg className="text-white text-3xl mb-4" data-icon-set="lucide" data-lucide="trophy" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978m7-7.318v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978M18 9h1.5a1 1 0 0 0 0-5H18M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm0 0H4.5a1 1 0 0 1 0-5H6"></path></g></svg>
<h3 className="font-semibold text-white mb-2">Sports Teams</h3>
<p className="text-sm text-zinc-500">Bulk supply for the season.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-neon transition-colors">
<svg className="text-white text-3xl mb-4" data-icon-set="lucide" data-lucide="users" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<h3 className="font-semibold text-white mb-2">Run Clubs</h3>
<p className="text-sm text-zinc-500">Event sponsorship &amp; sampling.</p>
</div>
<div className="bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-neon transition-colors">
<svg className="text-white text-3xl mb-4" data-icon-set="lucide" data-lucide="store" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
<h3 className="font-semibold text-white mb-2">Retailers</h3>
<p className="text-sm text-zinc-500">Stock KAYO on your shelves.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl font-semibold text-white mb-8">Why Partner?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center shrink-0 mt-1"><svg className="text-black text-xs" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div>
<h4 className="text-white font-medium">Competitive Wholesale Pricing</h4>
<p className="text-zinc-500 text-sm">Strong margins for retailers.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-neon flex items-center justify-center shrink-0 mt-1"><svg className="text-black text-xs" data-icon-set="lucide" data-lucide="check" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<div>
<h4 className="text-white font-medium">Marketing Support</h4>
<p className="text-zinc-500 text-sm">Social media assets and shoutouts.</p>
</div>
</li>
</ul>
</div>

<div className="bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
<h3 className="text-xl font-semibold text-white mb-6">Inquiry Form</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-500 mb-1">Contact Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon" type="text"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Business Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs text-zinc-500 mb-1">Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon" type="email"/>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Phone</label>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Type</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300 focus:outline-none focus:border-neon appearance-none">
<option>Gym / Studio</option>
<option>Retail Store</option>
<option>Sports Team</option>
<option>Event Organizer</option>
</select>
<svg className="absolute right-4 top-3.5 text-zinc-500 pointer-events-none" data-icon-set="lucide" data-lucide="chevron-down" height="1em" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<label className="block text-xs text-zinc-500 mb-1">Message</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-neon" rows="4"></textarea>
</div>
<button className="w-full bg-white hover:bg-zinc-200 text-zinc-950 font-bold py-4 rounded-xl text-sm transition-colors mt-2" type="button">Submit Inquiry</button>
</form>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-zinc-800 border-t pt-16 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">

<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="flex text-neon bg-zinc-900 w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6471bda-2f3e-45c6-85b6-323987211fe3_320w.jpg)] bg-cover bg-center border-zinc-800 border rounded-lg items-center justify-center">
</div>
<span className="text-xl font-bold text-white tracking-tight">KAYO</span>
</div>
<p className="text-zinc-400 mb-6 max-w-sm">Perform. Recover. Repeat. <br/>The new standard in athletic hydration.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#"><svg className="" data-icon-set="lucide" data-lucide="instagram" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#"><svg className="" data-icon-set="lucide" data-lucide="twitter" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" href="#"><svg className="" data-icon-set="lucide" data-lucide="youtube" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg></a>
</div>
</div>

<div className="">
<h4 className="text-white font-semibold mb-4 text-sm">Shop</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><button className="hover:text-neon transition-colors" onclick="switchPage('products');window.location.href='/product'" role="button">All Products</button></li>
<li className=""><button className="hover:text-neon transition-colors" onclick="switchPage('subs');window.location.href='/subscription'" role="button">Subscriptions</button></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><button className="hover:text-neon transition-colors" onclick="switchPage('partners')">Partners</button></li>
<li className=""><a className="hover:text-neon transition-colors" href="#">About Us</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-semibold mb-4 text-sm">Support</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li className=""><a className="hover:text-neon transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-neon transition-colors" href="#">Shipping</a></li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-white font-semibold mb-4 text-sm">Join the Squad</h4>
<form className="space-y-3">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-neon" placeholder="Email address" type="email"/>
<button className="w-full bg-neon hover:bg-[#b8e629] text-zinc-950 font-bold py-2.5 rounded-lg text-sm transition-colors">Subscribe</button>
</form>
</div>
</div>
<div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
<p>© 2024 KAYO Hydration. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-zinc-400" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
