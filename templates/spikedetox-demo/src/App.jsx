import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Simple Intersection Observer for Fade In animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeIn 0.8s ease-out forwards ${entry.target.classList.contains('delay-100') ? '0.1s' : entry.target.classList.contains('delay-200') ? '0.2s' : ''}`;
                    entry.target.style.opacity = 1;
                }
            });
        });

        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="py-2 text-center text-sm font-medium tracking-wide bg-amber-400 text-black">
<div className="flex items-center justify-center gap-2">
<span>HOLIDAY SALE ENDS IN:</span>
<div className="flex gap-1 font-mono text-xs items-center px-2 py-0.5 rounded bg-amber-300">
<span>02</span>:<span>14</span>:<span>33</span>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 backdrop-blur-md border-b bg-black/80 border-orange-900">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-amber-400 text-black">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight text-orange-100">Spike<span className="text-amber-400">Detox</span></span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-orange-400">
<a className="transition-colors hover:text-amber-400" href="#science">The Science</a>
<a className="transition-colors hover:text-amber-400" href="#benefits">Benefits</a>
<a className="transition-colors hover:text-amber-400" href="#reviews">Reviews</a>
</div>
<button className="relative p-2 rounded-full transition-colors hover:bg-orange-950">
<svg className="lucide lucide-shopping-bag w-5 h-5 text-stone-200" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full"></span>
</button>
</div>
</nav>

<header className="lg:pt-24 lg:pb-32 overflow-hidden bg-gradient-to-b from-orange-950 to-black pt-12 pb-20 relative">

<div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-50 pointer-events-none bg-amber-900"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="space-y-8 reveal" style={{animation: '0.8s ease-out 0s 1 normal forwards running fadeIn', opacity: '1'}}>
<div className="inline-flex items-center gap-2 border px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-950 border-amber-900 text-amber-300">
<svg className="lucide lucide-flame w-3 h-3 fill-current text-red-400" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
                    High Potency Formula
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-orange-100">
                    The Ultimate Defense Against <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Spike Proteins</span>
</h1>
<p className="text-xl max-w-lg leading-relaxed text-orange-400">
                    Scientifically formulated with Nattokinase and Dandelion Root to help your body break down unwanted proteins and restore immune harmony.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="text-lg font-medium py-4 px-8 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group bg-amber-400 hover:bg-amber-300 text-black shadow-amber-400/30">
                        Unlock Your Health
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center gap-3 px-4 py-2">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64" style={{}}/>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-500">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs font-medium text-orange-500">12,000+ Happy Customers</span>
</div>
</div>
</div>
<div className="flex gap-6 text-sm text-orange-500 pt-2">
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>365-Day Guarantee</span>
</div>
<div className="flex items-center gap-1.5">
<svg className="lucide lucide-truck w-4 h-4 text-green-500" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="">Free Shipping US</span>
</div>
</div>
</div>

<div className="relative reveal delay-200" style={{animation: '0.8s ease-out 0.2s 1 normal forwards running fadeIn', opacity: '1'}}>

<div className="absolute inset-0 bg-gradient-to-tr to-transparent rounded-full blur-3xl opacity-60 transform scale-75 from-amber-900"></div>

<div className="relative z-10 animate-float flex justify-center">
<img alt="Spike Detox Bottle" className="hover:scale-105 transition-transform duration-500 w-full max-w-sm object-cover drop-shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3acb4a44-27d3-4290-ab8f-275e3c209621_800w.png"/>
</div>

<div className="absolute top-10 right-10 backdrop-blur shadow-xl rounded-xl p-4 animate-float bg-black/90" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-amber-900 text-amber-400">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<div>
<p className="text-xs text-orange-500 uppercase font-semibold">Heart Health</p>
<p className="font-bold text-orange-100">Supported</p>
</div>
</div>
</div>
<div className="absolute bottom-20 left-0 backdrop-blur shadow-xl rounded-xl p-4 animate-float bg-black/90" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-green-900 text-green-400">
<svg className="lucide lucide-shield w-6 h-6" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div>
<p className="text-xs text-orange-500 uppercase font-semibold">Immunity</p>
<p className="font-bold text-orange-100">Restored</p>
</div>
</div>
</div>
</div>
</div>
</header>

<div className="py-4 overflow-hidden relative bg-orange-100 text-black">
<div className="flex animate-marquee whitespace-nowrap">
<div className="flex gap-12 mx-6 items-center uppercase tracking-widest text-sm font-semibold">
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Doctor Recommended Formula</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Lab Tested for Purity</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Made in USA</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Non-GMO Ingredients</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Gluten Free</span>
</div>

<div className="flex gap-12 mx-6 items-center uppercase tracking-widest text-sm font-semibold">
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Doctor Recommended Formula</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Lab Tested for Purity</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Made in USA</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Non-GMO Ingredients</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-star w-4 h-4 text-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> Gluten Free</span>
</div>
</div>
</div>

<section className="bg-black pt-24 pb-24" id="science">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16 reveal" style={{animation: '0.8s ease-out 0s 1 normal forwards running fadeIn', opacity: '1'}}>
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6 text-orange-100">
                    How Modern Stressors <span className="text-amber-400">Compromise</span> Your Body's Natural Defense
                </h2>
<p className="text-xl text-orange-500 leading-relaxed">
                    Lingering proteins from environmental exposures can clog your system, leading to fatigue and brain fog. Our ancestors didn't face these synthetic threats—your body needs modern support.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center reveal delay-100" style={{animation: '0.8s ease-out 0.1s 1 normal forwards running fadeIn', opacity: '1'}}>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<img alt="Fatigue" className="rounded-2xl shadow-lg w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<div className="p-6 rounded-2xl border bg-orange-950 border-orange-900">
<svg className="lucide lucide-frown w-8 h-8 mb-3 text-stone-600" data-lucide="frown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<h3 className="font-semibold text-orange-100">Chronic Fatigue</h3>
<p className="text-sm text-orange-500 mt-1">Feeling drained despite sleep.</p>
</div>
</div>
<div className="space-y-4">
<div className="p-6 rounded-2xl border bg-amber-950 border-amber-900">
<svg className="lucide lucide-alert-triangle w-8 h-8 text-red-500 mb-3" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<h3 className="font-semibold text-orange-100">Brain Fog</h3>
<p className="text-sm text-orange-500 mt-1">Difficulty focusing and mental clarity issues.</p>
</div>
<img alt="Science Research" className="rounded-2xl shadow-lg w-full h-64 object-cover filter sepia hover:sepia-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
</div>

<div className="pl-0 md:pl-12">
<h3 className="text-2xl font-semibold mb-6 text-orange-100">The Science of Proteolytic Enzymes</h3>
<p className="text-lg mb-8 leading-relaxed text-orange-400">
                        Nattokinase isn't just a supplement; it's a functional food enzyme derived from Natto. Studies suggest it acts like a pair of "molecular scissors," helping to break down excess fibrin and spike proteins that may linger in your cardiovascular system.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<div className="rounded-full p-1 mt-1 bg-green-900"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-orange-300">Dissolves fibrin accumulation naturally</span>
</li>
<li className="flex items-start gap-3">
<div className="rounded-full p-1 mt-1 bg-green-900"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-orange-300">Supports healthy blood flow and circulation</span>
</li>
<li className="flex items-start gap-3">
<div className="rounded-full p-1 mt-1 bg-green-900"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="font-medium text-orange-300">Boosts respiratory recovery</span>
</li>
</ul>
<a className="inline-flex items-center font-semibold hover:gap-2 transition-all text-amber-400" href="#">
                        Read the Clinical Studies <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<div className="py-16 border-y bg-orange-950 border-orange-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-4 group cursor-default">
<div className="w-16 h-16 rounded-2xl shadow-sm border mx-auto flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors bg-black border-orange-800">
<svg className="lucide lucide-flower-2 w-8 h-8 group-hover:text-red-500 transition-colors text-stone-300" data-lucide="flower-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></path><circle cx="12" cy="8" r="2"></circle><path d="M12 10v12"></path><path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></path><path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></path></svg>
</div>
<h4 className="font-semibold text-orange-100">Nattokinase</h4>
<p className="text-xs text-orange-500 mt-1 uppercase tracking-wide">2000 FU Potency</p>
</div>
<div className="p-4 group cursor-default">
<div className="w-16 h-16 rounded-2xl shadow-sm border mx-auto flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors bg-black border-orange-800">
<svg className="lucide lucide-leaf w-8 h-8 group-hover:text-red-500 transition-colors text-stone-300" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h4 className="font-semibold text-orange-100">Dandelion Root</h4>
<p className="text-xs text-orange-500 mt-1 uppercase tracking-wide">Detox Support</p>
</div>
<div className="p-4 group cursor-default">
<div className="w-16 h-16 rounded-2xl shadow-sm border mx-auto flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors bg-black border-orange-800">
<svg className="lucide lucide-droplets w-8 h-8 group-hover:text-red-500 transition-colors text-stone-300" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h4 className="font-semibold text-orange-100">Black Cumin Seed</h4>
<p className="text-xs text-orange-500 mt-1 uppercase tracking-wide">Immune Defense</p>
</div>
<div className="p-4 group cursor-default">
<div className="w-16 h-16 rounded-2xl shadow-sm border mx-auto flex items-center justify-center mb-4 group-hover:border-amber-200 transition-colors bg-black border-orange-800">
<svg className="lucide lucide-shield-plus w-8 h-8 group-hover:text-red-500 transition-colors text-stone-300" data-lucide="shield-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M9 12h6"></path><path d="M12 9v6"></path></svg>
</div>
<h4 className="font-semibold text-orange-100">Selenium</h4>
<p className="text-xs text-orange-500 mt-1 uppercase tracking-wide">Cellular Repair</p>
</div>
</div>
</div>
</div>

<section className="py-24 overflow-hidden" id="benefits">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-center mb-20 text-orange-100">
                What Should I Expect?
            </h2>
<div className="relative">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b to-transparent from-amber-400 via-orange-800"></div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16 items-center">
<div className="md:w-1/2 text-left md:text-right order-2 md:order-1">
<span className="inline-block px-3 py-1 rounded-md font-semibold text-sm mb-2 bg-orange-900 text-orange-400"><svg className="lucide lucide-calendar w-3 h-3 inline mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 1 Week</span>
<h3 className="text-2xl font-semibold mb-2 text-orange-100">Restored Energy Levels</h3>
<p className="text-orange-500">Noticeable lift in daily energy and reduced afternoon slumps as your circulation begins to optimize.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 border-4 border-amber-500 rounded-full z-10 bg-black"></div>
<div className="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
<div className="p-4 rounded-xl border inline-block bg-amber-950 border-amber-900">
<svg className="lucide lucide-zap w-6 h-6 text-red-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 mb-16 items-center">
<div className="md:w-1/2 md:text-right pr-0 md:pr-12 order-2 md:order-1 hidden md:block">
<div className="p-4 rounded-xl border inline-block bg-orange-950 border-orange-900">
<svg className="lucide lucide-brain-circuit w-6 h-6 text-blue-400" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-4 z-10 shadow-lg bg-orange-100 border-black"></div>
<div className="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
<span className="inline-block px-3 py-1 rounded-md font-semibold text-sm mb-2 bg-orange-900 text-orange-400"><svg className="lucide lucide-calendar w-3 h-3 inline mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 1 Month</span>
<h3 className="text-2xl font-semibold mb-2 text-orange-100">Mental Clarity</h3>
<p className="text-orange-500">Brain fog dissipates. Ingredients like Dandelion Root support liver detox, leading to clearer thinking and sharper focus.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row gap-8 items-center">
<div className="md:w-1/2 text-left md:text-right order-2 md:order-1">
<span className="inline-block px-3 py-1 rounded-md font-semibold text-sm mb-2 bg-orange-900 text-orange-400"><svg className="lucide lucide-calendar w-3 h-3 inline mr-1" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg> 3 Months</span>
<h3 className="text-2xl font-semibold mb-2 text-orange-100">Systemic Harmony</h3>
<p className="text-orange-500">Full cycle support. Your immune system feels resilient, inflammatory markers are managed, and vitality is reclaimed.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 border-4 border-amber-500 rounded-full z-10 bg-black"></div>
<div className="md:w-1/2 pl-12 md:pl-0 order-1 md:order-2">
<div className="p-4 rounded-xl border inline-block bg-green-950 border-green-900">
<svg className="lucide lucide-heart-pulse w-6 h-6 text-green-400" data-lucide="heart-pulse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"></path></svg>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center">
<button className="text-lg font-medium py-4 px-10 rounded-full shadow-xl transition-all hover:scale-105 bg-orange-100 hover:bg-orange-200 text-black shadow-orange-100/20">
                    Start Your Detox Journey
                </button>
<p className="mt-4 text-xs text-orange-600">
<svg className="lucide lucide-check-circle w-3 h-3 inline text-green-500" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> Backed by our 365-day money-back guarantee
                </p>
</div>
</div>
</section>

<section className="py-24 bg-orange-950">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-center text-3xl lg:text-4xl font-semibold tracking-tight mb-4 text-orange-100">Hands Down The Most Potent Formula</h2>
<p className="text-center text-orange-500 mb-16">Why we hand-picked these specific ingredients vs generic alternatives.</p>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-3xl p-6 shadow-sm border relative overflow-hidden group hover:shadow-xl transition-shadow bg-black border-orange-800">
<div className="absolute top-0 left-0 w-full h-2 bg-amber-400"></div>
<div className="flex justify-between items-start mb-6">
<h3 className="font-semibold text-lg text-orange-100">Nattokinase</h3>
<div className="p-2 rounded-lg bg-amber-900 text-amber-300"><svg className="lucide lucide-sword w-5 h-5" data-lucide="sword" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 19-6-6"></path><path d="m5 21-2-2"></path><path d="m8 16-4 4"></path><path d="M9.5 17.5 21 6V3h-3L6.5 14.5"></path></svg></div>
</div>
<div className="flex items-center justify-center gap-4 mb-6">
<div className="text-center">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 bg-amber-950">
<img alt="Molecule" className="w-10 h-10 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
</div>
<div className="font-black text-2xl italic text-orange-700">VS</div>
<div className="text-center grayscale opacity-50">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-orange-900">
<svg className="lucide lucide-apple w-8 h-8 text-stone-600" data-lucide="apple" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path><path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10 3 3 0 0 0 3.648.648 5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path></svg>
</div>
</div>
</div>
<div className="text-center py-2 rounded-lg text-sm font-medium mb-4 bg-amber-400 text-black">
                        20x More Fibrinolytic Activity
                    </div>
<p className="text-sm text-orange-500 text-center">Than standard bromelain or fruit enzymes alone.</p>
</div>

<div className="rounded-3xl p-6 shadow-sm border relative overflow-hidden group hover:shadow-xl transition-shadow bg-black border-orange-800">
<div className="absolute top-0 left-0 w-full h-2 bg-orange-100"></div>
<div className="flex justify-between items-start mb-6">
<h3 className="font-semibold text-lg text-orange-100">Black Cumin</h3>
<div className="p-2 rounded-lg bg-orange-900 text-orange-300"><svg className="lucide lucide-shield w-5 h-5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
</div>
<div className="flex items-center justify-center gap-4 mb-6">
<div className="text-center">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 bg-orange-950">
<svg className="lucide lucide-droplet w-10 h-10 text-stone-200" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
</div>
</div>
<div className="font-black text-2xl italic text-orange-700">VS</div>
<div className="text-center grayscale opacity-50">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-orange-900">
<svg className="lucide lucide-pill w-8 h-8 text-stone-600" data-lucide="pill" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"></path><path d="m8.5 8.5 7 7"></path></svg>
</div>
</div>
</div>
<div className="text-center py-2 rounded-lg text-sm font-medium mb-4 bg-orange-100 text-black">
                        100x More Thymoquinone
                    </div>
<p className="text-sm text-orange-500 text-center">Standardized extract vs generic seed powder.</p>
</div>

<div className="rounded-3xl p-6 shadow-sm border relative overflow-hidden group hover:shadow-xl transition-shadow bg-black border-orange-800">
<div className="absolute top-0 left-0 w-full h-2 bg-amber-400"></div>
<div className="flex justify-between items-start mb-6">
<h3 className="font-semibold text-lg text-orange-100">Dandelion</h3>
<div className="p-2 rounded-lg bg-amber-900 text-amber-300"><svg className="lucide lucide-flower w-5 h-5" data-lucide="flower" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="3"></circle><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"></path><path d="M12 7.5V9"></path><path d="M7.5 12H9"></path><path d="M16.5 12H15"></path><path d="M12 16.5V15"></path><path d="m8 8 1.88 1.88"></path><path d="M14.12 9.88 16 8"></path><path d="m8 16 1.88-1.88"></path><path d="M14.12 14.12 16 16"></path></svg></div>
</div>
<div className="flex items-center justify-center gap-4 mb-6">
<div className="text-center">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-2 bg-amber-950">
<svg className="lucide lucide-sprout w-10 h-10 text-red-400" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
</div>
<div className="font-black text-2xl italic text-orange-700">VS</div>
<div className="text-center grayscale opacity-50">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 bg-orange-900">
<svg className="lucide lucide-coffee w-8 h-8 text-stone-600" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
</div>
</div>
<div className="text-center py-2 rounded-lg text-sm font-medium mb-4 bg-amber-400 text-black">
                        Superior Liver Support
                    </div>
<p className="text-sm text-orange-500 text-center">Specifically targets spike protein filtration.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16 text-orange-100">How To Use</h2>
<div className="flex flex-col md:flex-row justify-center gap-8 relative">

<div className="hidden md:block absolute top-12 left-20 right-20 h-0.5 border-t-2 border-dotted z-0 border-orange-700"></div>

<div className="relative z-10 w-full md:w-1/3 text-center group">
<div className="w-24 h-24 mx-auto border-4 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-amber-500 transition-colors bg-black border-orange-900">
<span className="text-3xl font-bold text-orange-100">1</span>
</div>
<div className="rounded-2xl p-6 border h-full bg-orange-950 border-orange-900">
<img alt="Open" className="w-full h-48 object-cover rounded-xl mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" style={{}}/>
<h3 className="text-xl font-semibold mb-2">Open The Bottle</h3>
<p className="text-orange-500 text-sm">Pop the safety seal. You'll smell the natural earthiness of the Black Cumin Seed.</p>
</div>
</div>

<div className="relative z-10 w-full md:w-1/3 text-center group">
<div className="w-24 h-24 mx-auto border-4 rounded-full flex items-center justify-center mb-6 shadow-lg bg-orange-100 border-orange-100">
<span className="text-3xl font-bold text-black">2</span>
</div>
<div className="rounded-2xl p-6 border h-full bg-orange-950 border-orange-900">
<img alt="Take" className="w-full h-48 object-cover rounded-xl mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<h3 className="text-xl font-semibold mb-2">Take 2 Capsules</h3>
<p className="text-orange-500 text-sm">Best taken on an empty stomach, either 1 hour before or 2 hours after a meal.</p>
</div>
</div>

<div className="relative z-10 w-full md:w-1/3 text-center group">
<div className="w-24 h-24 mx-auto border-4 rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:border-green-500 transition-colors bg-black border-orange-900">
<span className="text-3xl font-bold text-orange-100">3</span>
</div>
<div className="rounded-2xl p-6 border h-full bg-orange-950 border-orange-900">
<img alt="Enjoy" className="w-full h-48 object-cover rounded-xl mb-4" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<h3 className="text-xl font-semibold mb-2">Stay Consistent</h3>
<p className="text-orange-500 text-sm">Daily use compounds the effects. Hydrate well to assist the detox process.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 text-center bg-orange-950">
<h2 className="text-3xl font-semibold mb-12 text-orange-100">State-Of-The-Art Facility in USA</h2>
<div className="relative max-w-lg mx-auto mb-10">
<div className="absolute inset-0 rounded-full blur-2xl opacity-10 bg-amber-400"></div>
<img alt="Lab" className="relative z-10 rounded-full w-80 h-80 object-cover mx-auto border-8 shadow-2xl border-black" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
<div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-orange-300">
<span className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-100" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> GMP Certified</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-100" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Lab Tested</span>
<span className="flex items-center gap-2"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-stone-100" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> FDA Registered Facility</span>
</div>
</section>

<section className="py-24 bg-black" id="reviews">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-center mb-16 text-orange-100">
                Here's What Others Are Saying
            </h2>
<div className="space-y-6">

<div className="p-6 rounded-2xl border flex gap-4 bg-orange-950 border-orange-900">
<img alt="User" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100" style={{}}/>
<div className="flex-1">
<div className="flex items-baseline justify-between mb-1">
<h4 className="font-bold text-orange-100">Sarah Jenkins</h4>
<span className="text-xs text-orange-600">2 days ago</span>
</div>
<div className="flex text-yellow-500 w-20 mb-2">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-orange-400">I was skeptical about "detox" supplements, but the brain fog I've had for 2 years lifted after about 10 days on this. I feel like my old self.</p>
</div>
</div>

<div className="p-6 rounded-2xl border flex gap-4 bg-orange-950 border-orange-900">
<img alt="User" className="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="flex-1">
<div className="flex items-baseline justify-between mb-1">
<h4 className="font-bold text-orange-100">Michael R.</h4>
<span className="text-xs text-orange-600">1 week ago</span>
</div>
<div className="flex text-yellow-500 w-20 mb-2">
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3 h-3 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="leading-relaxed text-orange-400">Fast shipping. The combination of Nattokinase and Dandelion is hard to find in one quality pill. Highly recommend for anyone worried about spike proteins.</p>

<div className="mt-4 p-4 rounded-xl border text-sm bg-black border-orange-800">
<p className="font-bold mb-1 flex items-center gap-1 text-amber-400"><svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg> SpikeDetox Team</p>
<p className="text-orange-500">Thanks Michael! We use a high-potency extract to ensure maximum absorption.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-16 text-center relative overflow-hidden bg-orange-100 text-black">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tight mb-6">Invest In Your Long-Term Health</h2>
<p className="text-xl mb-10 text-orange-600">Don't wait for symptoms to worsen. Start your detox protocol today.</p>
<button className="hover:bg-amber-500 text-xl font-semibold py-5 px-12 rounded-full shadow-2xl transition-all hover:scale-105 animate-pulse bg-amber-400 text-black shadow-amber-100/50">
                UNLOCK YOUR TRUE POWER <svg className="lucide lucide-zap w-5 h-5 inline ml-2 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</button>
<p className="mt-6 text-sm text-orange-500">
<svg className="lucide lucide-lock w-3 h-3 inline" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Secure 256-bit Encrypted Checkout
            </p>
</div>
</div>

<footer className="border-t py-12 bg-orange-950 border-orange-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-orange-600">
                © 2024 Spike Detox. All rights reserved.
            </div>
<div className="flex gap-6 text-sm text-orange-500 font-medium">
<a className="hover:text-orange-100" href="#">Privacy Policy</a>
<a className="hover:text-orange-100" href="#">Terms of Service</a>
<a className="hover:text-orange-100" href="#">Support</a>
</div>
<div className="flex gap-4">
<svg className="lucide lucide-instagram w-5 h-5 cursor-pointer transition-colors text-stone-600 hover:text-red-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-5 h-5 cursor-pointer transition-colors text-stone-600 hover:text-blue-400" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-twitter w-5 h-5 hover:text-sky-500 cursor-pointer transition-colors text-stone-600" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
</div>
<div className="max-w-4xl mx-auto px-6 mt-8 text-center">
<p className="text-[10px] leading-normal text-orange-600">
                *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Results may vary. Consult your physician before starting any new supplement regimen.
            </p>
</div>
</footer>


    </>
  );
}
