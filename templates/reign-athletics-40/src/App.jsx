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
logo: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#afcb14',
dim: '#8a9f10',
light: '#d4e85e'
},
dark: {
900: '#0a0a0a',
800: '#121212',
700: '#1a1a1a'
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'scroll': 'scroll 40s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">

<div className="relative w-10 h-10">
<svg className="w-full h-full text-white group-hover:text-brand transition-colors duration-300 logo-stroke" fill="none" stroke="currentColor" strokeWidth="6" viewbox="0 0 100 100">

<path d="M 25 80 V 20 H 60 L 78 38 L 60 56 H 25"></path>

<path d="M 45 56 L 70 80"></path>

<path d="M 50 38 L 60 38 L 50 48" strokeWidth="4"></path>
</svg>
</div>

<div className="flex flex-col justify-center">
<span className="font-logo font-semibold text-2xl leading-[0.85] tracking-tight text-white group-hover:text-white transition-colors">REIGN</span>
<span className="font-sans text-[0.6rem] font-normal tracking-[0.35em] text-gray-400 group-hover:text-brand transition-colors leading-none ml-[1px] mt-[2px]">ATHLETICS</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-400">
<a className="hover:text-brand transition-colors" href="#">The Facility</a>
<a className="hover:text-brand transition-colors" href="#">Equipment</a>
<a className="hover:text-brand transition-colors" href="#">Training</a>
<a className="hover:text-brand transition-colors" href="#">Shop</a>
</div>
<a className="bg-white text-black px-5 py-2 rounded-full text-sm font-normal hover:bg-brand transition-colors duration-300 flex items-center justify-center" href="#membership-plans">
    Join Now
</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Atmosphere" className="w-full h-full object-cover opacity-40 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
<div className="bg-gradient-to-r from-black/80 via-transparent to-black/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand/30 bg-brand/10 text-brand text-xs font-normal mb-6 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                New Facility Coming 2025
            </div>
<h1 className="text-6xl md:text-8xl font-medium text-white tracking-tight leading-[0.95] mb-8 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                More than <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-400 to-gray-600">just a gym.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                Forged in the heat of Houston. We are a warehouse gym where iron meets sweat. <span className="text-white">But evolution is coming.</span> Experience the raw atmosphere today and secure your spot in our future state-of-the-art facility.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
<a className="w-full sm:w-auto px-8 py-4 bg-brand text-black font-normal rounded-lg hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_30px_-10px_rgba(175,203,20,0.6)] flex items-center justify-center gap-2" href="#new-facility">
                    Secure Founder Rates
                    <svg className="lucide lucide-arrow-right w-5 h-5 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-normal rounded-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2" href="#current-facility">
                    View Current Warehouse
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500">
<svg className="lucide lucide-chevron-down w-6 h-6 stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="py-24 bg-dark-900 relative" id="new-facility">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="">
<h2 className="text-brand text-sm font-normal tracking-widest uppercase mb-4">The Evolution</h2>
<h3 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                        From the Warehouse Heat <br/>
<span className="text-gray-500">To High-End Precision.</span>
</h3>
<div className="space-y-6 text-lg text-gray-400 font-light">
<p>
                            Reign Athletics is built on grit. Our members love the heat and the grunge of our current warehouse. It's where the work gets done.
                        </p>
<p className="">
<span className="text-white font-normal">Coming Soon:</span> We are breaking ground on a brand new facility built from the ground up. Fully air-conditioned, luxury amenities, and lines of super high-end equipment you won't find anywhere else in Houston.
                        </p>
<div className="bg-dark-800 border border-brand/20 p-6 rounded-xl mt-8">
<div className="flex items-start gap-4">
<div className="bg-brand/10 p-3 rounded-lg text-brand">
<svg className="lucide lucide-ticket w-6 h-6 stroke-[1.5]" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
<div className="">
<h4 className="text-white font-normal text-xl mb-1">Pre-Sale Access</h4>
<p className="text-sm text-gray-400 mb-4 font-light">Sign up at our current location today and lock in discounted rates for the new luxury facility before prices increase.</p>
<button className="text-brand text-sm font-normal hover:text-white transition-colors flex items-center gap-1">
                                        Claim Offer <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="relative group">

<div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] shadow-2xl shadow-brand/5">
<img alt="New Facility Render" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute top-6 right-6">
<div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg">
<span className="text-white text-xs font-normal tracking-wider">COMING 2025</span>
</div>
</div>
<div className="absolute bottom-6 left-6 right-6">
<div className="flex justify-between items-end">
<div>
<p className="text-brand text-sm mb-1 font-light">Project Reign</p>
<p className="text-white text-2xl font-medium tracking-tight">The New HQ</p>
</div>
<div className="hidden sm:flex gap-2">
<span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs text-gray-300 font-light">AC Controlled</span>
<span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs text-gray-300 font-light">Sauna</span>
<span className="px-3 py-1 bg-black/50 border border-white/10 rounded-full text-xs text-gray-300 font-light">Recovery</span>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-brand/20 blur-[100px] rounded-full"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="current-facility">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4">Current Facility</h2>
<p className="text-gray-400 font-light">24/7 Access. The best machinery in the world. No excuses.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 auto-rows-[200px]">

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-2xl font-semibold text-gray-500 group-hover:text-white transition-colors tracking-tighter">ARSENAL</span>
</div>

<div className="col-span-1 md:col-span-2 row-span-2 relative rounded-xl overflow-hidden border border-white/10 group">
<img alt="Gym Interior" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="text-white font-normal text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Dumbbell Sector</span>
</div>
</div>

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-2xl font-semibold text-gray-500 group-hover:text-brand transition-colors italic">ROGUE</span>
</div>

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-xl font-semibold text-gray-500 group-hover:text-white transition-colors">HAMMERSTRENGTH</span>
</div>

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-xl font-semibold text-gray-500 group-hover:text-white transition-colors">PRIME</span>
</div>

<div className="col-span-2 md:col-span-2 relative rounded-xl overflow-hidden border border-white/10 group">
<img alt="Squat Racks" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4">
<span className="text-white font-normal text-sm bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Power Racks</span>
</div>
</div>

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-xl font-semibold text-gray-500 group-hover:text-white transition-colors">ELIEKO</span>
</div>

<div className="glass flex items-center justify-center p-6 rounded-xl hover:bg-white/5 transition-colors group">
<span className="text-xl font-semibold text-gray-500 group-hover:text-brand transition-colors">PANATTA</span>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xl text-white font-normal mb-6">Interested in 1-1 Personal Training?</p>
<button className="text-gray-400 hover:text-brand underline underline-offset-4 decoration-1 font-light">Meet our Trainers</button>
</div>
</div>
</section>

<section className="py-24 bg-dark-900 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand text-xs font-medium tracking-widest uppercase mb-3 block">Membership Plans</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Choose Your Access</h2>
<p className="text-gray-400 text-lg font-light leading-relaxed">We've paused regular memberships to prepare for the new facility. Select an option below to secure your spot.</p>
</div>

<div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">

<div className="group bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-normal text-white">24 Hour Pass</h3>
<div className="bg-white/5 p-2 rounded-lg text-gray-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-ticket w-5 h-5 stroke-[1.5]" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
</div>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$26</span>
<span className="text-gray-500 text-sm font-light">/visit</span>
</div>
<p className="text-xs text-gray-500 mb-6 font-light">Includes $1.00 processing fee</p>
<p className="text-sm text-gray-400 font-light mb-8 min-h-[40px]">Perfect for travelers or those wanting to test the facility. Valid ID required.</p>
<button className="w-full py-3 rounded-lg bg-white/5 text-white font-normal text-sm hover:bg-white hover:text-black transition-all border border-white/5 hover:border-transparent mb-8">Purchase Pass</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Stop by front desk on first visit
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        24 Hour Access
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Locker room amenities
                     </div>
</div>
</div>

<div className="group bg-dark-800 border border-brand/40 rounded-2xl p-8 relative shadow-[0_0_40px_-15px_rgba(175,203,20,0.15)] md:-mt-4 md:mb-4 z-10 flex flex-col h-full">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-black text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-brand/20">First 100 Only</div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-normal text-white">Reign 2.0 Early Access</h3>
<div className="bg-brand/10 p-2 rounded-lg text-brand">
<svg className="lucide lucide-zap w-5 h-5 stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-5xl font-medium text-white tracking-tight">$89.99</span>
<span className="text-gray-500 text-sm font-light">/month</span>
</div>
<div className="mb-6">
<p className="text-brand text-sm font-normal">Due Today: $44.99</p>
<p className="text-xs text-gray-500 font-light">50% Off Initiation Fee</p>
</div>
<p className="text-sm text-gray-400 font-light mb-8 min-h-[40px]">Secure your spot at Reign 2.0 (3116 Jensen Dr). Regular memberships are paused.</p>
<button className="w-full py-3 rounded-lg bg-brand text-black font-normal text-sm hover:brightness-110 transition-all shadow-lg shadow-brand/10 mb-8 flex items-center justify-center gap-2">
                    Secure Early Access
                    <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3 text-sm text-white font-normal">
<svg className="lucide lucide-check w-4 h-4 text-brand shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Exclusive Care Package (First 100)
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-brand shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Early Access to New Facility
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-brand shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Exclusive Invites
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-brand shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        6 Month Agreement
                     </div>
</div>
</div>

<div className="group bg-dark-800 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 flex flex-col h-full">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-normal text-white">7 Day Pass</h3>
<div className="bg-white/5 p-2 rounded-lg text-gray-400 group-hover:text-white transition-colors">
<svg className="lucide lucide-calendar-days w-5 h-5 stroke-[1.5]" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
</div>
</div>
<div className="mb-2 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$52</span>
<span className="text-gray-500 text-sm font-light">/week</span>
</div>
<p className="text-xs text-gray-500 mb-6 font-light">Includes $2.00 processing fee</p>
<p className="text-sm text-gray-400 font-light mb-8 min-h-[40px]">Have access for a full week. Perfect for short term stays.</p>
<button className="w-full py-3 rounded-lg bg-white/5 text-white font-normal text-sm hover:bg-white hover:text-black transition-all border border-white/5 hover:border-transparent mb-8">Purchase Week Pass</button>
<div className="space-y-4 mt-auto">
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Stop by front desk on first visit
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        Full equipment access
                     </div>
<div className="flex items-start gap-3 text-sm text-gray-300 font-light">
<svg className="lucide lucide-check w-4 h-4 text-gray-500 shrink-0 mt-0.5 stroke-[1.5]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                        7 consecutive days
                     </div>
</div>
</div>
</div>

<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-sm text-gray-500 font-light">
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-brand stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Secure Payment Processing</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-4 h-4 text-brand stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Instant Membership Activation</span>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden bg-blue-700">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDQwaDQwVjBIOHYzMmgzMnY4eiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
<div className="absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[80px] mix-blend-screen"></div>
<div className="bg-dark-900 bg-gradient-to-tl from-brand/20 to-transparent w-full h-full absolute right-0 bottom-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="text-center md:text-left">
<div className="inline-block px-4 py-1 rounded-full bg-brand text-black text-xs font-semibold uppercase tracking-widest mb-6">
                        Member Exclusive
                     </div>
<h2 className="text-6xl font-semibold text-white tracking-tighter mb-2 outline-text">GIVEAWAY</h2>
<h2 className="text-6xl font-semibold text-brand tracking-tighter mb-2">GIVEAWAY</h2>
<h2 className="text-6xl font-semibold text-white tracking-tighter mb-6 opacity-50">GIVEAWAY</h2>
<p className="text-blue-100 text-lg mb-8 max-w-md font-light">
                         We regularly reward our members with exclusive gear, supplements, and equipment. Join Reign Athletics to enter.
                     </p>
<button className="px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                         See Current Prizes
                     </button>
</div>
<div className="hidden md:flex justify-center items-center">
<svg className="lucide lucide-gift w-64 h-64 text-brand opacity-80 drop-shadow-2xl stroke-[1]" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="flex flex-col gap-3 group mb-6" href="#">

<div className="relative w-14 h-14">
<svg className="w-full h-full text-white logo-stroke" fill="none" stroke="currentColor" strokeWidth="6" viewbox="0 0 100 100">
<path d="M 25 80 V 20 H 60 L 78 38 L 60 56 H 25"></path>
<path d="M 45 56 L 70 80"></path>
<path d="M 50 38 L 60 38 L 50 48" strokeWidth="4"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="font-logo font-semibold text-3xl leading-[0.85] tracking-tight text-white">REIGN</span>
<span className="font-sans text-xs font-normal tracking-[0.35em] text-gray-400 leading-none ml-[1px] mt-1">ATHLETICS</span>
</div>
</a>
<p className="text-gray-500 text-sm font-light">
                        Reign Athletics Gym<br/>
                        Houston's Premier Training Facility.
                    </p>
</div>
<div>
<h4 className="text-white font-normal mb-4">Address</h4>
<p className="text-gray-500 text-sm leading-relaxed font-light">
                        3300 Jensen Dr<br/>
                        Houston, TX 77026
                    </p>
<a className="text-brand text-sm mt-2 inline-flex items-center gap-1 hover:underline font-light" href="#">Get Directions <svg className="lucide lucide-external-link w-3 h-3 stroke-[1.5]" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg></a>
</div>
<div>
<h4 className="text-white font-normal mb-4">Business Hours</h4>
<ul className="text-gray-500 text-sm space-y-2 font-light">
<li className="flex justify-between max-w-[200px]"><span>Mon - Tue</span> <span>5:00 am – 12:00 am</span></li>
<li className="flex justify-between max-w-[200px]"><span>Wed - Fri</span> <span>5:00 am – 12:00 am</span></li>
<li className="flex justify-between max-w-[200px]"><span>Saturday</span> <span>7:00 am – 10:00 pm</span></li>
<li className="flex justify-between max-w-[200px]"><span>Sunday</span> <span>7:00 am – 10:00 pm</span></li>
</ul>
</div>
<div>
<h4 className="text-white font-normal mb-4">Contact</h4>
<p className="text-gray-500 text-sm mb-2 font-light">reignathleticsgym@gmail.com</p>
<p className="text-gray-500 text-sm font-light">346-542-7044</p>
<div className="flex gap-4 mt-6">
<a className="text-gray-400 hover:text-white" href="#"><svg className="lucide lucide-facebook w-5 h-5 stroke-[1.5]" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-gray-400 hover:text-white" href="#"><svg className="lucide lucide-instagram w-5 h-5 stroke-[1.5]" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-400 hover:text-white" href="#"><svg className="lucide lucide-twitter w-5 h-5 stroke-[1.5]" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-light">
<div className="flex gap-6 mb-4 md:mb-0">
<a className="hover:text-gray-400" href="#">Private Policy</a>
<a className="hover:text-gray-400" href="#">Contact Us</a>
<a className="hover:text-gray-400" href="#">FAQ'S</a>
<a className="hover:text-gray-400" href="#">Careers</a>
</div>
<p>© 2025 Reign Athletics LLC | All Rights Reserved</p>
</div>
<div className="text-center mt-8">
<p className="text-[10px] text-gray-700 tracking-widest uppercase">Let your Reign Begin</p>
</div>
</div>
</footer>


    </>
  );
}
