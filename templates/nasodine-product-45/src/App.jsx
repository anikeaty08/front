import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
blue: '#108BCB',
teal: '#7DCECF',
50: '#f0f9ff',
100: '#e0f2fe',
900: '#0c4a6e',
},
slate: {
850: '#1e293b',
}
},
animation: {
marquee: 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<button className="lg:hidden text-slate-900">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-slate-500">
<a className="hover:text-brand-blue transition-colors" href="#">Shop</a>
<a className="hover:text-brand-blue transition-colors" href="#">Science</a>
<a className="hover:text-brand-blue transition-colors" href="#">About</a>
<a className="hover:text-brand-blue transition-colors" href="#">Clinicians</a>
</div>

<a className="text-xl tracking-tighter font-semibold text-slate-900" href="#">
                Nasodine
            </a>

<div className="flex items-center gap-6">
<a className="hidden sm:block text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-brand-blue transition-colors" href="#">Account</a>
<button className="group flex items-center gap-2 text-slate-900">
<span className="bg-slate-100 group-hover:bg-brand-blue group-hover:text-white transition-colors rounded-full w-8 h-8 flex items-center justify-center">
<iconify-icon icon="lucide:shopping-bag" strokeWidth="1.5" width="16"></iconify-icon>
</span>
<span className="hidden sm:inline text-xs font-medium">0</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-slate-100 overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-teal/20 via-brand-blue/5 to-transparent blur-[100px] pointer-events-none opacity-60"></div>
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-slate-50 w-fit">
<span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
<span className="text-xs font-medium tracking-wide uppercase text-slate-600">Now Available</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1]">
                        Clean Nose.<br/>
                        Clear Mind.<br/>
<span className="text-brand-blue">Carry On.</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg font-light leading-relaxed">
                        A simple daily mist made with povidone-iodine to help you stay ahead of whatever’s going around.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4">
<button className="h-12 px-8 bg-brand-blue text-white hover:bg-sky-600 transition-colors flex items-center justify-center text-sm font-medium tracking-wide uppercase rounded-sm shadow-sm">
                            Buy Now
                        </button>
<button className="h-12 px-8 border border-slate-200 hover:border-brand-blue hover:text-brand-blue transition-colors flex items-center justify-center text-sm font-medium tracking-wide uppercase text-slate-600 rounded-sm">
                            For Clinicians
                        </button>
</div>
</div>

<div className="lg:col-span-6 relative">
<div className="aspect-[4/3] lg:aspect-square bg-slate-100 rounded-sm overflow-hidden relative">
<img alt="Lifestyle Nasal Health" className="absolute inset-0 w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1512413914633-b5043f4041ea?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent mix-blend-overlay"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white border-b border-slate-100">
<div className="max-w-3xl mx-auto px-4 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                Meet the Daily Mist for Shared-Air Moments
            </h2>
<p className="text-lg text-slate-500 font-light leading-relaxed mb-8">
                Nasodine was created by scientists who asked a simple question:<br/>
<span className="text-brand-blue font-normal">What if staying well could start right inside the nose?</span>
</p>
<a className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wide text-slate-900 border-b border-slate-900 hover:text-brand-blue hover:border-brand-blue transition-colors pb-1" href="#">
                Learn More
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 h-auto lg:h-[600px]">

<div className="relative bg-white border border-slate-200 rounded-lg overflow-hidden h-[400px] lg:h-auto group">
<img alt="Daily Habit" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 sm:p-12">
<h3 className="text-2xl sm:text-3xl font-medium text-white tracking-tight max-w-sm">
                            A Simple Daily Habit for a World That Moves Fast
                        </h3>
</div>
</div>

<div className="flex flex-col gap-4 lg:gap-8 h-full">

<div className="flex-1 bg-white border border-slate-200 rounded-lg p-8 sm:p-12 flex flex-col justify-center">
<div className="grid gap-8">
<div className="">
<h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-blue mb-2">
<iconify-icon icon="lucide:microscope" width="18"></iconify-icon>
                                    Clinically-Inspired
                                </h4>
<p className="text-slate-500 text-sm leading-relaxed">Designed by scientists to support cleanliness right where exposure begins.</p>
</div>
<div className="">
<h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-blue mb-2">
<iconify-icon icon="lucide:shield-check" width="18"></iconify-icon>
                                    Small Mist. Big Confidence.
                                </h4>
<p className="text-slate-500 text-sm leading-relaxed">A compact bottle made for commutes, classrooms, and crowded places.</p>
</div>
<div className="">
<h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-blue mb-2">
<iconify-icon icon="lucide:wind" width="18"></iconify-icon>
                                    Menthol-Scented
                                </h4>
<p className="text-slate-500 text-sm leading-relaxed">A refreshing mist that feels clean, crisp, and easy anytime.</p>
</div>
</div>
</div>

<div className="flex-1 bg-brand-blue text-white rounded-lg p-8 sm:p-12 flex items-center">
<p className="text-lg sm:text-xl font-light leading-relaxed">
                            Formulated with povidone-iodine — a trusted hospital cleansing agent — Nasodine fits into the moments that matter most: before the plane boards, after school lets out, or whenever the world feels a little too close for comfort.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-100 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-3xl"></div>
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">The Science at a Glance</h2>
</div>
<div className="grid lg:grid-cols-3 items-center gap-12">

<div className="space-y-12 text-center lg:text-right">
<div className="group">
<h3 className="text-lg font-medium text-slate-900 mb-2">Trusted Compound</h3>
<p className="text-slate-500 text-sm leading-relaxed">Powered by povidone-iodine (PVP-I), trusted in hospitals for decades.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 mb-2">Targeted Action</h3>
<p className="text-slate-500 text-sm leading-relaxed">Works on contact right where exposure begins.</p>
</div>
</div>

<div className="flex justify-center relative">
<div className="w-64 h-80 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-center shadow-2xl shadow-brand-blue/10 relative z-10">

<div className="text-center">
<div className="w-20 h-48 bg-gradient-to-b from-white to-slate-100 border border-slate-200 mx-auto rounded-t-full rounded-b-lg shadow-sm mb-4 relative overflow-hidden">
<div className="absolute top-12 left-0 w-full h-12 bg-brand-blue/10 flex items-center justify-center text-[10px] font-bold text-brand-blue tracking-widest uppercase">Label</div>
</div>
<span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Nasodine Daily</span>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-0 hidden lg:block"></div>
<div className="absolute top-0 left-1/2 h-full w-px bg-slate-200 -z-0 hidden lg:block"></div>
</div>

<div className="space-y-12 text-center lg:text-left">
<div className="group">
<h3 className="text-lg font-medium text-slate-900 mb-2">Cleansing Power</h3>
<p className="text-slate-500 text-sm leading-relaxed">Effectively removes nasal contaminants.</p>
</div>
<div className="group">
<h3 className="text-lg font-medium text-slate-900 mb-2">Daily Freshness</h3>
<p className="text-slate-500 text-sm leading-relaxed">Supports daily nasal freshness for confident breathing.</p>
</div>
</div>
</div>
<div className="text-center mt-16">
<button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 text-slate-900 text-sm font-medium uppercase tracking-wide rounded-sm hover:bg-slate-200 transition-colors">
                    Explore the Science
                    <iconify-icon icon="lucide:flask-conical" width="16"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-b p-0">

<div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
<div className="flex flex-col justify-center p-12 md:p-20 lg:p-24 order-2 md:order-1 bg-white">
<div className="w-12 h-12 bg-brand-blue/10 text-brand-blue flex items-center justify-center rounded-lg mb-8">
<iconify-icon icon="lucide:test-tube-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">Born in the Lab.Built for Daily Life.</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-md">Formulated by scientists for real-world moments. We bridged the gap between clinical efficacy and your morning commute.</p>
</div>
<div className="relative h-64 md:h-full w-full overflow-hidden order-1 md:order-2 bg-slate-100 group">
<img alt="Happy woman walking in city" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1554196346-b998315d845e?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
<div className="relative h-64 md:h-full w-full overflow-hidden bg-slate-100 group">
<img alt="Travel lifestyle" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-center p-12 md:p-20 lg:p-24 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100">
<div className="w-12 h-12 bg-brand-teal/10 text-brand-teal flex items-center justify-center rounded-lg mb-8">
<iconify-icon icon="lucide:pocket" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">Pocket-SizedPeace of Mind.</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-md">Easy to carry, easy to use, always within reach. Designed to fit seamlessly into your pocket, purse, or carry-on.</p>
</div>
</div>

<div className="grid md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
<div className="flex flex-col justify-center p-12 md:p-20 lg:p-24 order-2 md:order-1 bg-white">
<div className="w-12 h-12 bg-blue-100 text-brand-blue flex items-center justify-center rounded-lg mb-8">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 leading-tight">Feels Fresh —Not Medicinal.</h3>
<p className="text-lg text-slate-500 font-light leading-relaxed max-w-md">Menthol-scented for a clean, confident daily ritual. It's the nasal care that feels like a breath of fresh air.</p>
</div>
<div className="relative h-64 md:h-full w-full overflow-hidden order-1 md:order-2 bg-slate-100 group">
<img alt="Fresh air breathing" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="sm:px-6 max-w-screen-2xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 max-w-lg">
                    Made for the Moments You Share the Air
                </h2>
<button className="text-sm font-medium uppercase tracking-wide text-brand-blue border-b border-brand-blue pb-0.5 hover:text-sky-600 transition-colors">
                    Buy Now
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">


<div className="group relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 h-64 p-8 flex flex-col justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:backpack" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 relative z-10">After School Lets Out</h3>
<p className="text-sm text-slate-500 relative z-10">A simple ritual for busy parents keeping routines healthy.</p>
</div><div className="group overflow-hidden flex flex-col bg-slate-50 h-64 border-slate-200 border rounded-lg pt-8 pr-8 pb-8 pl-8 relative justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:plane" width="32"></iconify-icon>
</div>
<h3 className="z-10 text-lg font-medium text-slate-900 mb-2 relative">Before the Plane Boards</h3>
<p className="text-sm text-slate-500 relative z-10">Your go-to mist for crowded cabins and recycled air.</p>
</div>

<div className="group relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 h-64 p-8 flex flex-col justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:train" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 relative z-10">During the Commute</h3>
<p className="text-sm text-slate-500 relative z-10">Buses, trains, rideshares — mist before the crowd closes in.</p>
</div>

<div className="group relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 h-64 p-8 flex flex-col justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:briefcase" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 relative z-10">At Work or Conferences</h3>
<p className="text-sm text-slate-500 relative z-10">Professional spaces don’t always provide personal space.</p>
</div>

<div className="group relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 h-64 p-8 flex flex-col justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:map-pin" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 relative z-10">Travel Days &amp; Layovers</h3>
<p className="text-sm text-slate-500 relative z-10">Fresh confidence for airports, hotels, and everything between.</p>
</div>

<div className="group relative overflow-hidden rounded-lg bg-slate-50 border border-slate-200 h-64 p-8 flex flex-col justify-end">
<div className="absolute top-6 right-6 text-slate-300 group-hover:text-brand-blue transition-colors">
<iconify-icon icon="lucide:cloud" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2 relative z-10">Seasonal Transitions</h3>
<p className="text-sm text-slate-500 relative z-10">When things in the air shift, so does your routine.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">People Love the Clean, Confident Feeling</h2>
<a className="text-xs font-medium uppercase tracking-wide text-slate-500 hover:text-brand-blue" href="#">See All Reviews</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 border border-slate-200 rounded-lg">
<div className="flex text-brand-blue mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6">"Finally something that feels proactive without being aggressive. I use it every time I get off the subway."</p>
<span className="text-xs font-bold text-slate-900 uppercase">Sarah J.</span>
</div>

<div className="bg-white p-8 border border-slate-200 rounded-lg">
<div className="flex text-brand-blue mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6">"The menthol scent is surprisingly subtle and refreshing. It's become a staple in my travel bag."</p>
<span className="text-xs font-bold text-slate-900 uppercase">Michael T.</span>
</div>

<div className="bg-white p-8 border border-slate-200 rounded-lg">
<div className="flex text-brand-blue mb-4 gap-1">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-600 italic mb-6">"As a teacher, I'm surrounded by germs. This gives me a little extra peace of mind every day."</p>
<span className="text-xs font-bold text-slate-900 uppercase">Elena R.</span>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6 text-center">
<h3 className="text-sm font-medium uppercase tracking-widest text-slate-400 mb-2">As Seen In</h3>
<p className="text-slate-500 mb-8 font-light text-sm">Trusted by those who study, test, and talk about better nasal health.</p>
<div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-40 grayscale">

<span className="text-xl font-bold tracking-tight">HEALTHLINE</span>
<span className="text-xl font-bold tracking-tight font-serif">WIRED</span>
<span className="text-xl font-bold tracking-tight">Bloomberg</span>
<span className="text-xl font-bold tracking-tight font-serif">Vogue</span>
</div>
<div className="mt-8">
<a className="text-xs text-brand-blue hover:text-slate-900 transition-colors" href="#">See News &amp; Reviews</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12 text-center">Questions? We’ve Got You.</h2>
<div className="divide-y divide-slate-100">

<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">What is povidone-iodine?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-slate-500 text-sm leading-relaxed">
                        Povidone-iodine is a broad-spectrum antiseptic used for decades in hospitals for cleansing and disinfecting. We've formulated it safely for nasal use.
                    </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">How often can I use Nasodine?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-slate-500 text-sm leading-relaxed">
                        Nasodine is designed for daily use. We recommend using it before entering crowded spaces and after leaving them.
                    </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">Is Nasodine safe for daily use?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-slate-500 text-sm leading-relaxed">
                        Yes, our formula is non-habit forming and free from steroids, making it suitable for regular use as part of your hygiene routine.
                    </div>
</details>

<details className="group">
<summary className="flex justify-between items-center py-6 cursor-pointer list-none">
<span className="text-base font-medium text-slate-900">Does it smell like iodine?</span>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="pb-6 text-slate-500 text-sm leading-relaxed">
                        We have formulated Nasodine with a refreshing menthol scent that masks the iodine, leaving a clean, crisp feeling.
                    </div>
</details>
</div>
<div className="text-center mt-10">
<a className="inline-block px-6 py-3 border border-slate-200 rounded-sm text-sm font-medium uppercase tracking-wide text-slate-600 hover:bg-slate-50 transition-colors" href="#">See All FAQs</a>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5 border-t border-slate-100">
<div className="max-w-xl mx-auto px-4 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Stay Fresh. Stay Informed.</h2>
<p className="text-slate-500 text-sm mb-8">Get tips, updates, and special offers delivered straight to your inbox.</p>
<form className="flex gap-2">
<input className="flex-1 bg-white border border-slate-200 px-4 py-3 text-sm text-slate-900 rounded-sm focus:outline-none focus:border-brand-blue placeholder:text-slate-400 shadow-sm" placeholder="Email address" type="email"/>
<button className="bg-brand-blue text-white px-6 py-3 text-sm font-medium uppercase rounded-sm hover:bg-sky-600 transition-colors shadow-sm" type="submit">Sign Up</button>
</form>
</div>
</section>

<section className="py-24 bg-brand-blue text-white">
<div className="max-w-screen-xl mx-auto px-4 text-center">
<h2 className="text-4xl sm:text-5xl font-semibold tracking-tight mb-8">Ready for Your Daily Mist?</h2>
<button className="h-14 px-10 bg-white text-brand-blue hover:bg-slate-50 transition-colors inline-flex items-center justify-center text-sm font-bold tracking-wide uppercase rounded-sm shadow-lg">
                Buy Now
            </button>
</div>
</section>

<footer className="bg-white pt-20 pb-8 border-t border-slate-200">
<div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

<div className="flex flex-col gap-6">
<a className="text-2xl font-bold tracking-tighter text-slate-900" href="#">Nasodine</a>
<p className="text-slate-500 text-sm font-light leading-relaxed max-w-xs">
                        Share the Air, Not the Germs.
                    </p>
</div>

<div>
<h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest mb-6">Shop</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Buy Now</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Our Products</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Clinicians</a></li>
</ul>
</div>

<div>
<h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest mb-6">Learn</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">The Science</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">About Nasodine</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">FAQs</a></li>
</ul>
</div>

<div>
<h4 className="text-slate-900 font-bold uppercase text-xs tracking-widest mb-6">Support</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-blue transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Shipping Info</a></li>
<li><a className="hover:text-brand-blue transition-colors" href="#">Returns &amp; Refunds</a></li>
</ul>
</div>
</div>

<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© Nasodine LLC 2024</p>
<div className="flex gap-4 text-slate-400">
<a className="hover:text-brand-blue" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-brand-blue" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="hover:text-brand-blue" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
</div>
</div>
<div className="mt-8 p-4 bg-slate-50 rounded-sm text-center">
<p className="text-[10px] text-slate-400 uppercase tracking-wide leading-relaxed">
                    "Nasodine is a cosmetic nasal cleanser not intended to diagnose, treat, cure, or prevent any disease."
                </p>
</div>
</div>
</footer>

    </>
  );
}
