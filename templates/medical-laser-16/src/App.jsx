import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
brand: {
black: '#050505',
dark: '#0a0a0a',
panel: '#0F0F0F',
green: '#2ecc71',
green_dim: '#27ae60',
gray: '#888888',
border: 'rgba(255,255,255,0.08)'
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}
function scrollSlider(direction) {
const container = document.getElementById('related-slider');
const scrollAmount = 400;
if (direction === 'left') {
container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
} else {
container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 glass-header">
<div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-green/10 rounded-md flex items-center justify-center border border-brand-green/20 group-hover:bg-brand-green/20 transition-all duration-300">
<svg className="lucide lucide-zap w-5 h-5 text-brand-green stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-white font-semibold tracking-tight text-lg">THE LASER AGENT</span>
</a>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Lasers</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Buy</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Sell</a>
<a className="text-sm font-medium hover:text-white transition-colors" href="#">Service</a>
</nav>
</div>
<div className="flex items-center gap-6">
<div className="hidden lg:flex flex-col items-end leading-tight">
<span className="text-xs text-brand-gray">Questions? Call us</span>
<span className="text-sm text-white font-medium tracking-tight hover:text-brand-green transition-colors cursor-pointer">(463) 227-0238</span>
</div>
<button className="relative p-2 hover:bg-white/10 rounded-full transition-colors group">
<svg className="lucide lucide-shopping-bag w-6 h-6 text-white stroke-[1.5]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-green rounded-full shadow-[0_0_8px_#2ecc71]"></span>
</button>
</div>
</div>
</header>

<main className="max-w-[1600px] mr-auto ml-auto pt-32 pr-20 pb-24 pl-20">

<nav className="flex items-center gap-2 text-sm text-brand-gray mb-8 pl-1">
<a className="hover:text-white transition-colors" href="#">Home</a>
<svg className="lucide lucide-chevron-right w-4 h-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<a className="hover:text-white transition-colors" href="#">Lasers</a>
<svg className="lucide lucide-chevron-right w-4 h-4 stroke-[1.5]" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<span className="text-white">Vivace RF</span>
</nav>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

<div className="lg:col-span-7 flex flex-col gap-4">

<div className="relative w-full aspect-[4/3] bg-brand-panel rounded-lg overflow-hidden group border border-brand-border">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-brand-green/5 blur-[100px] rounded-full pointer-events-none"></div>
<img alt="Vivace Front View" className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=2030&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-6 left-6 z-10">
<div className="bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-brand-green stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-medium text-white tracking-wide uppercase">Certified Pre-Owned</span>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/3] bg-brand-panel rounded-lg overflow-hidden group border border-brand-border">
<img alt="Vivace Detail View" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative w-full aspect-[4/3] bg-brand-panel rounded-lg overflow-hidden group border border-brand-border">
<img alt="Vivace Handpiece" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="relative w-full aspect-[4/3] bg-brand-panel rounded-lg overflow-hidden group border border-brand-border flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>

<img alt="Vivace Interface" className="w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-28 h-fit flex flex-col gap-8 animate-fade-in">

<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-brand-green font-medium tracking-wide uppercase text-xs border border-brand-green/20 bg-brand-green/5 px-2 py-1 rounded">Aesthetics Biomedical</span>
<div className="flex items-center gap-1">
<div className="flex">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-xs text-brand-gray ml-2 underline decoration-brand-gray/30 underline-offset-4 cursor-pointer">12 Reviews</span>
</div>
</div>
<h1 className="text-4xl lg:text-5xl font-medium text-white tracking-tight leading-[1.1]">
                            2018 Vivace Microneedling RF System
                        </h1>
<div className="flex items-center gap-4 pt-2">
<div className="flex items-end gap-3">
<span className="text-3xl font-medium text-white tracking-tight">$34,950</span>
<span className="text-lg text-brand-gray line-through mb-1.5">$65,000</span>
</div>
<span className="px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-medium border border-brand-green/20">Save 46%</span>
</div>
</div>

<div className="p-6 rounded-2xl glass border border-brand-border bg-brand-panel/30 backdrop-blur-xl">
<div className="flex items-center gap-2 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
</span>
<span className="text-sm font-medium text-white">In Stock - Ships Tomorrow</span>
</div>
<div className="flex flex-col gap-3">
<button className="group relative flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green_dim text-brand-black text-base font-medium py-4 px-6 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(46,204,113,0.15)] hover:shadow-[0_0_30px_rgba(46,204,113,0.25)] w-full">
<span>Add to Cart</span>
<svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform stroke-[2]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="w-full flex items-center justify-center gap-2 bg-transparent border border-white/10 hover:border-white/30 text-white text-base font-medium py-4 px-6 rounded-xl transition-all duration-300">
                                Contact Sales
                            </button>
</div>
<p className="text-center text-xs text-brand-gray mt-4">
                            Financing available from <span className="text-white">$685/mo</span>. <a className="text-brand-green hover:underline" href="#">Apply now</a>
</p>
</div>

<div className="border-t border-brand-border pt-4">
<details className="group py-2">
<summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium hover:text-brand-green transition-colors select-none">
<span className="text-sm">System Includes</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-3 leading-relaxed pl-2 border-l border-brand-border ml-1">
<ul className="space-y-2">
<li>Base System (2018)</li>
<li>Power Cord &amp; Foot Pedal</li>
<li>Protective Eyewear (x2)</li>
<li>Owner's Manual</li>
<li>Professional Crating</li>
</ul>
</div>
</details>
<div className="w-full h-px bg-brand-border my-2"></div>
<details className="group py-2" open="">
<summary className="flex items-center justify-between cursor-pointer list-none text-white font-medium hover:text-brand-green transition-colors select-none">
<span className="text-sm">Specifications</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-3 space-y-2 pl-2 border-l border-brand-border ml-1">
<div className="flex justify-between"><span>Ref:</span> <span className="text-white">TLA4373</span></div>
<div className="flex justify-between"><span>Year:</span> <span className="text-white">2018</span></div>
<div className="flex justify-between"><span>Pulse:</span> <span className="text-white">RF 1MHz &amp; 2MHz</span></div>
<div className="flex justify-between"><span>Condition:</span> <span className="text-white">Refurbished</span></div>
</div>
</details>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24"></div>

<section className="max-w-5xl mx-auto mb-24">
<span className="text-brand-green font-medium tracking-wide uppercase text-xs mb-4 block">The Ultimate Solution</span>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-8 leading-tight">
                Vivace Microneedling: The Ultimate Solution for Your Patients' Skin Concerns
            </h2>
<div className="prose prose-invert prose-lg text-brand-gray max-w-none leading-relaxed">
<p className="text-xl text-white/80 font-light mb-8">
                    Are you tired of using treatments that provide inconsistent results or require lengthy downtimes for your patients? Do you want to offer your patients a procedure that is not only effective but also comfortable and convenient? Vivace Microneedling might be the solution you've been searching for.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-12">
<div>
<p className="mb-4">
                            With the Vivace Microneedling system, you can provide your patients with a treatment that addresses a variety of skin concerns, including fine lines, wrinkles, and acne scarring. Plus, the system is versatile enough to be used on multiple areas of the body, from the face to the neck, chest, and hands.
                        </p>
<p>
                            But that's not all - the Vivace Microneedling system is designed to be comfortable for patients, thanks to its unique, robotic precision technology. Patients can expect minimal discomfort during the procedure and minimal downtime after.
                        </p>
</div>
<div className="bg-brand-panel rounded-2xl p-8 border border-brand-border flex flex-col justify-center">
<blockquote className="text-white text-lg font-medium italic mb-6">
                            "It could be the boost your patients have been waiting for, and the boost your practice needs to stay ahead of the competition."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-brand-green/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-award w-5 h-5 text-brand-green" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
</div>
<div>
<div className="text-white font-medium text-sm">Best-in-Class RF</div>
<div className="text-brand-gray text-xs">Award Winning Technology</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 relative rounded-3xl overflow-hidden border border-brand-border bg-black group">
<div className="absolute inset-0 bg-brand-green/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="aspect-video w-full flex items-center justify-center relative">

<img className="absolute inset-0 w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1620331317312-74b88bf40907?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<button className="relative w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:scale-110 transition-transform duration-300 group/btn">
<svg className="lucide lucide-play w-8 h-8 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
<div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-50"></div>
</button>
<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
<span className="text-xs font-medium text-brand-green uppercase tracking-wider bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Watch Video</span>
<h3 className="text-2xl text-white font-medium mt-2">Vivace Experience Overview</h3>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mb-24">
<div className="text-center mb-16">
<h3 className="text-3xl font-medium text-white mb-4">Why Choose Vivace?</h3>
<p className="text-brand-gray">State-of-the-art system that offers numerous benefits over traditional microneedling.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl bg-brand-panel border border-brand-border hover:border-brand-green/30 transition-colors duration-300">
<svg className="lucide lucide-clock w-8 h-8 text-brand-green stroke-[1.5] mb-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h4 className="text-lg text-white font-medium mb-2">Reduced Downtime</h4>
<p className="text-sm text-brand-gray leading-relaxed">Unlike up to a week for traditional treatments, patients typically resume activities the same day.</p>
</div>

<div className="p-6 rounded-2xl bg-brand-panel border border-brand-border hover:border-brand-green/30 transition-colors duration-300">
<svg className="lucide lucide-smile w-8 h-8 text-brand-green stroke-[1.5] mb-4" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
<h4 className="text-lg text-white font-medium mb-2">Improved Comfort</h4>
<p className="text-sm text-brand-gray leading-relaxed">Proprietary needle system designed to minimize discomfort. Many report little to no pain.</p>
</div>

<div className="p-6 rounded-2xl bg-brand-panel border border-brand-border hover:border-brand-green/30 transition-colors duration-300">
<svg className="lucide lucide-sliders w-8 h-8 text-brand-green stroke-[1.5] mb-4" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg>
<h4 className="text-lg text-white font-medium mb-2">Customizable</h4>
<p className="text-sm text-brand-gray leading-relaxed">Precise customization of depth and energy levels to tailor treatment for each patient.</p>
</div>

<div className="p-6 rounded-2xl bg-brand-panel border border-brand-border hover:border-brand-green/30 transition-colors duration-300">
<svg className="lucide lucide-activity w-8 h-8 text-brand-green stroke-[1.5] mb-4" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
<h4 className="text-lg text-white font-medium mb-2">Effective Results</h4>
<p className="text-sm text-brand-gray leading-relaxed">Combination of microneedling and RF produces better collagen stimulation than needles alone.</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
<div>
<h3 className="text-2xl font-medium text-white mb-6">What is Vivace &amp; How Does It Work?</h3>
<div className="space-y-6 text-brand-gray leading-relaxed">
<p>
                        Vivace Microneedling is a revolutionary treatment that uses advanced technology to address a range of skin concerns, including fine lines, wrinkles, acne scars, and uneven skin texture.
                    </p>
<p>
                        During the treatment, a specialized device is used to create tiny microchannels in the skin's surface, stimulating the body's natural collagen production. The device uses radiofrequency energy and LED light therapy to improve the skin's tone and texture, leaving patients with a smoother, more youthful-looking complexion.
                    </p>
</div>
</div>
<div>
<h3 className="text-2xl font-medium text-white mb-6">What to Expect During Treatment</h3>
<div className="bg-brand-panel p-8 rounded-2xl border border-brand-border relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/5 blur-3xl rounded-full"></div>
<ul className="space-y-4 relative z-10">
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center justify-center mt-0.5">1</span>
<div>
<h4 className="text-white font-medium text-sm">Preparation</h4>
<p className="text-sm text-brand-gray mt-1">Skin is numbed with topical anesthetic to minimize discomfort.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center justify-center mt-0.5">2</span>
<div>
<h4 className="text-white font-medium text-sm">Procedure</h4>
<p className="text-sm text-brand-gray mt-1">Handpiece passes over skin delivering RF energy. Takes 30-60 minutes.</p>
</div>
</li>
<li className="flex gap-4">
<span className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center justify-center mt-0.5">3</span>
<div>
<h4 className="text-white font-medium text-sm">Aftercare</h4>
<p className="text-sm text-brand-gray mt-1">Little to no pain post-procedure with minimal downtime.</p>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="mb-24">
<h3 className="text-2xl font-medium text-white mb-8">What Professionals Say</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-brand-border bg-gradient-to-br from-brand-panel to-transparent">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-gray text-sm mb-6 leading-relaxed">"Adding the Vivace to our practice was the best ROI decision we made this year. Patients love the zero downtime."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white">DS</div>
<div>
<div className="text-white text-xs font-medium">Dr. Sarah M.</div>
<div className="text-brand-gray text-[10px]">Dermatologist</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-brand-border bg-gradient-to-br from-brand-panel to-transparent">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-gray text-sm mb-6 leading-relaxed">"The Laser Agent delivered the unit in pristine condition. Saved nearly $30k compared to buying new."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white">MK</div>
<div>
<div className="text-white text-xs font-medium">Michael K.</div>
<div className="text-brand-gray text-[10px]">MedSpa Owner</div>
</div>
</div>
</div>

<div className="p-6 rounded-xl border border-brand-border bg-gradient-to-br from-brand-panel to-transparent">
<div className="flex gap-1 mb-4">
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-brand-green fill-brand-green" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-brand-gray text-sm mb-6 leading-relaxed">"Excellent support team. They walked us through the setup and the financing process was seamless."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-xs font-bold text-white">JL</div>
<div>
<div className="text-white text-xs font-medium">Jennifer L.</div>
<div className="text-brand-gray text-[10px]">Practice Manager</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 relative group/slider">
<div className="flex items-center justify-between mb-8 px-2">
<h3 className="text-2xl font-medium text-white">Related Systems</h3>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" onclick="scrollSlider('left')">
<svg className="lucide lucide-arrow-left w-4 h-4 stroke-[1.5]" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors" onclick="scrollSlider('right')">
<svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<a className="text-sm text-brand-green hover:underline" href="#">View all</a>
</div>
</div>

<div className="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar -mx-20 mx-1 pb-4 relative gap-x-6 gap-y-6" id="related-slider">

<div className="group relative min-w-[280px] md:min-w-[340px] snap-start">
<div className="h-full bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 flex flex-col shadow-lg">
<div className="relative aspect-[4/3] overflow-hidden bg-black/50">
<img className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-white border border-white/10 rounded">In Stock</span>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="mb-auto">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-brand-green transition-colors">GentleMax Pro</h3>
<p className="text-brand-gray text-xs mt-1">Candela • Dual Wavelength</p>
</div>
<div className="mt-6 flex items-end justify-between border-t border-brand-border/50 pt-4">
<div>
<span className="block text-[10px] text-brand-gray uppercase tracking-wider mb-0.5">Price</span>
<span className="text-white font-medium text-lg">$45,000</span>
</div>
<button className="text-xs text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">View</button>
</div>
</div>
</div>
</div>

<div className="group relative min-w-[280px] md:min-w-[340px] snap-start">
<div className="h-full bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 flex flex-col shadow-lg">
<div className="relative aspect-[4/3] overflow-hidden bg-black/50">
<img className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-white border border-white/10 rounded">In Stock</span>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="mb-auto">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-brand-green transition-colors">PicoSure</h3>
<p className="text-brand-gray text-xs mt-1">Cynosure • Picosecond Laser</p>
</div>
<div className="mt-6 flex items-end justify-between border-t border-brand-border/50 pt-4">
<div>
<span className="block text-[10px] text-brand-gray uppercase tracking-wider mb-0.5">Price</span>
<span className="text-white font-medium text-lg">$85,000</span>
</div>
<button className="text-xs text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">View</button>
</div>
</div>
</div>
</div>

<div className="group relative min-w-[280px] md:min-w-[340px] snap-start">
<div className="h-full bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 flex flex-col shadow-lg">
<div className="relative aspect-[4/3] overflow-hidden bg-black/50">
<img className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-white/10 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-brand-gray border border-white/5 rounded">Sold Out</span>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="mb-auto">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-brand-green transition-colors">M22</h3>
<p className="text-brand-gray text-xs mt-1">Lumenis • Multi-Application</p>
</div>
<div className="mt-6 flex items-end justify-between border-t border-brand-border/50 pt-4">
<div>
<span className="block text-[10px] text-brand-gray uppercase tracking-wider mb-0.5">Price</span>
<span className="text-white font-medium text-lg">$32,000</span>
</div>
<button className="text-xs text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">View</button>
</div>
</div>
</div>
</div>

<div className="group relative min-w-[280px] md:min-w-[340px] snap-start">
<div className="h-full bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 flex flex-col shadow-lg">
<div className="relative aspect-[4/3] overflow-hidden bg-black/50">
<img className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-white border border-white/10 rounded">In Stock</span>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="mb-auto">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-brand-green transition-colors">HydraFacial Elite</h3>
<p className="text-brand-gray text-xs mt-1">HydraFacial • MD System</p>
</div>
<div className="mt-6 flex items-end justify-between border-t border-brand-border/50 pt-4">
<div>
<span className="block text-[10px] text-brand-gray uppercase tracking-wider mb-0.5">Price</span>
<span className="text-white font-medium text-lg">$18,500</span>
</div>
<button className="text-xs text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">View</button>
</div>
</div>
</div>
</div>

<div className="group relative min-w-[280px] md:min-w-[340px] snap-start">
<div className="h-full bg-brand-dark border border-brand-border rounded-xl overflow-hidden hover:border-brand-green/30 transition-all duration-300 flex flex-col shadow-lg">
<div className="relative aspect-[4/3] overflow-hidden bg-black/50">
<img className="object-cover w-full h-full opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-black/60 backdrop-blur text-[10px] uppercase tracking-wider font-medium text-white border border-white/10 rounded">In Stock</span>
</div>
</div>
<div className="p-5 flex flex-col flex-1">
<div className="mb-auto">
<h3 className="text-white font-medium text-lg leading-tight group-hover:text-brand-green transition-colors">Emsculpt Neo</h3>
<p className="text-brand-gray text-xs mt-1">BTL Aesthetics • Body Contouring</p>
</div>
<div className="mt-6 flex items-end justify-between border-t border-brand-border/50 pt-4">
<div>
<span className="block text-[10px] text-brand-gray uppercase tracking-wider mb-0.5">Price</span>
<span className="text-white font-medium text-lg">$115,000</span>
</div>
<button className="text-xs text-white border border-white/20 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition-all">View</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-24 max-w-3xl mx-auto">
<h3 className="text-2xl font-medium text-white mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-brand-panel rounded-lg border border-brand-border">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white p-4">
<span>Is there a warranty included?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-0 px-4 pb-4 leading-relaxed border-t border-brand-border/50 pt-4">
                        Yes, all our certified pre-owned systems come with a comprehensive 90-day warranty. We also offer extended warranty packages for up to 1 year for additional peace of mind.
                    </div>
</details>
<details className="group bg-brand-panel rounded-lg border border-brand-border">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white p-4">
<span>Do you offer training?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-0 px-4 pb-4 leading-relaxed border-t border-brand-border/50 pt-4">
                        We provide clinical manuals and operational guides. For in-depth clinical training, we can connect you with certified third-party trainers who specialize in Vivace systems.
                    </div>
</details>
<details className="group bg-brand-panel rounded-lg border border-brand-border">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white p-4">
<span>How is the device shipped?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-0 px-4 pb-4 leading-relaxed border-t border-brand-border/50 pt-4">
                        Every system is professionally crated to ensure safety during transit. We use fully insured freight carriers. Shipping typically takes 3-5 business days depending on your location.
                    </div>
</details>
<details className="group bg-brand-panel rounded-lg border border-brand-border">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-white p-4">
<span>Can I finance this purchase?</span>
<span className="transition group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-4 h-4 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-brand-gray text-sm mt-0 px-4 pb-4 leading-relaxed border-t border-brand-border/50 pt-4">
                        Absolutely. We work with multiple medical equipment lenders to offer competitive rates. Payments can be as low as $685/month for qualified buyers.
                    </div>
</details>
</div>
</section>

<section className="bg-gradient-to-r from-brand-green/20 to-brand-panel rounded-3xl p-8 md:p-12 border border-brand-green/20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-3xl text-white font-medium mb-4">Offer Your Patients the Best in Skin Rejuvenation</h2>
<p className="text-brand-gray mb-8 text-lg">
                    The Laser Agent has you covered. Our Vivace Microneedling systems are available for sale at up to 80% off, making it easy and affordable to invest in the latest technology.
                </p>
<div className="flex gap-4">
<button className="bg-brand-green text-brand-black px-6 py-3 rounded-xl font-medium hover:bg-white transition-colors">Contact Sales</button>
<button className="border border-white/20 text-white px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors">View Inventory</button>
</div>
</div>
</section>
</main>

<footer className="border-t border-brand-border bg-[#020202] pt-16 pb-12">
<div className="max-w-[1600px] mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-brand-green/20 rounded flex items-center justify-center border border-brand-green/30">
<svg className="lucide lucide-zap w-3.5 h-3.5 text-brand-green stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span className="text-white font-semibold tracking-tight">THE LASER AGENT</span>
</div>
<p className="text-sm text-brand-gray leading-relaxed">
                        The industry leader in certified pre-owned cosmetic and aesthetic lasers. Quality you can trust, prices you can afford.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Shop</h4>
<ul className="space-y-3 text-sm text-brand-gray">
<li><a className="hover:text-brand-green transition-colors" href="#">Buy a Laser</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Sell a Laser</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Parts &amp; Consumables</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Support</h4>
<ul className="space-y-3 text-sm text-brand-gray">
<li><a className="hover:text-brand-green transition-colors" href="#">Service Repair</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Financing</a></li>
<li><a className="hover:text-brand-green transition-colors" href="#">Shipping Policy</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
<ul className="space-y-3 text-sm text-brand-gray">
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 stroke-[1.5]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                            (463) 227-0238
                        </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail w-4 h-4 stroke-[1.5]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            sales@laseragent.com
                        </li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 stroke-[1.5]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Indianapolis, IN
                        </li>
</ul>
</div>
</div>
<div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-brand-gray">© 2023 The Laser Agent. All rights reserved.</p>
<div className="flex gap-4">
<svg className="lucide lucide-facebook w-4 h-4 text-brand-gray hover:text-white cursor-pointer transition-colors" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-twitter w-4 h-4 text-brand-gray hover:text-white cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-linkedin w-4 h-4 text-brand-gray hover:text-white cursor-pointer transition-colors" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<svg className="lucide lucide-instagram w-4 h-4 text-brand-gray hover:text-white cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
</div>
</footer>



    </>
  );
}
