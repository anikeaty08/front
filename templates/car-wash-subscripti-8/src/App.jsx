import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Mulish', 'sans-serif'],
},
colors: {
electric: {
400: '#33B5FF',
500: '#00A3FF',
600: '#0082CC',
},
neutral: {
50: '#fafafa', // Pure White feel
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
800: '#27272a',
900: '#18181b',
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



function handleSpotlight(e) {
const rect = e.currentTarget.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
}



    // Simple smooth scroll highlighting for sidebar
    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll("aside nav a");
    
    window.onscroll = () => {
      var current = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 150) {
          current = section.getAttribute("id");
        }
      });
      navLi.forEach((a) => {
        a.classList.remove("text-neutral-900", "bg-white/50", "border-neutral-200", "shadow-sm");
        a.classList.add("text-neutral-500");
        if (a.getAttribute("href").includes(current)) {
          a.classList.add("text-neutral-900", "bg-white/50", "border-neutral-200", "shadow-sm");
          a.classList.remove("text-neutral-500");
          // Update icon color logic if needed, simplifying here
        }
      });
    };
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">

<aside className="lg:w-72 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-white/50 lg:backdrop-blur-xl lg:border-r border-neutral-200/50 w-full border-b p-8 justify-between">
<div>
<div className="mb-12 animate-fade-up" style={{animationDelay: '0.1s'}}>
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-electric-500 flex items-center justify-center text-white shadow-lg shadow-electric-500/30">
<iconify-icon icon="lucide:zap" width="18"></iconify-icon>
</div>
<span className="text-2xl tracking-tighter font-bold text-neutral-900">YuvGo</span>
</a>
</div>
<nav className="space-y-1 animate-fade-up" style={{animationDelay: '0.2s'}}>
<p className="text-xs font-semibold text-neutral-400 uppercase tracking-widest mb-4 pl-3">Overview</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-900 bg-white/50 border border-neutral-200 shadow-sm transition-all" href="#hero">
<iconify-icon className="text-electric-500" icon="lucide:home" width="16"></iconify-icon>
            Introduction
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/30 transition-all" href="#how-it-works">
<iconify-icon icon="lucide:layers" width="16"></iconify-icon>
            How it Works
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/30 transition-all" href="#app">
<iconify-icon icon="lucide:smartphone" width="16"></iconify-icon>
            App Experience
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-white/30 transition-all" href="#pricing">
<iconify-icon icon="lucide:credit-card" width="16"></iconify-icon>
            Pricing Models
          </a>
</nav>
</div>
<div className="hidden lg:block space-y-4 animate-fade-up" style={{animationDelay: '0.3s'}}>
<div className="p-4 rounded-2xl bg-gradient-to-br from-electric-500 to-electric-600 text-white shadow-lg shadow-electric-500/25 relative overflow-hidden group cursor-pointer">
<div className="absolute top-0 right-0 p-3 opacity-20 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:sparkles" width="48"></iconify-icon>
</div>
<p className="text-xs font-medium opacity-80 mb-1">Status</p>
<p className="text-sm font-bold tracking-tight">System Operational</p>
<div className="flex items-center gap-2 mt-3 text-xs opacity-90">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
            Live Updates
          </div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-neutral-200/60">
<img alt="User" className="w-8 h-8 rounded-full ring-2 ring-white shadow-sm" src="https://ui-avatars.com/api/?name=User+Profile&amp;background=00A3FF&amp;color=fff"/>
<div className="text-xs leading-tight">
<p className="font-semibold text-neutral-900">Guest User</p>
<p className="text-neutral-400">View Account</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 p-6 lg:p-16 flex flex-col gap-24 lg:gap-32 overflow-hidden scroll-smooth">

<section className="relative pt-10 lg:pt-16" id="hero">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 space-y-8 animate-fade-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/20 text-electric-600 text-xs font-semibold tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-electric-500 animate-pulse"></span>
              The Future of Car Care
            </div>
<h1 className="text-5xl lg:text-7xl font-bold text-neutral-900 tracking-tight leading-[1.1]">
              Your Car, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-500 to-electric-600">Always Clean.</span><br/>
              One Subscription.
            </h1>
<p className="text-lg text-neutral-500 max-w-lg leading-relaxed font-medium">
              Access premium car washes across the city with a single QR code. No cash, no waiting, no limits. Join the revolution.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="btn-electric text-white font-semibold text-base px-8 py-4 rounded-full shadow-lg shadow-electric-500/20 flex items-center gap-2">
                Get Started
                <iconify-icon icon="lucide:arrow-right" width="18"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full border border-neutral-200 font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors flex items-center gap-2 bg-white">
<iconify-icon icon="lucide:play-circle" width="18"></iconify-icon>
                View Demo
              </button>
</div>
<div className="flex items-center gap-4 text-sm text-neutral-400 pt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-400"></div>
</div>
<p>Trusted by <span className="text-neutral-900 font-semibold">2,000+</span> drivers in Tashkent</p>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] hidden lg:block animate-float">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-electric-500/20 rounded-full blur-[100px] -z-10"></div>

<div className="absolute top-0 right-0 w-80 h-64 glass-panel rounded-3xl p-2 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl z-10">
<div className="w-full h-full rounded-2xl bg-neutral-900 relative overflow-hidden">
<img alt="Premium Car" className="object-cover w-full h-full opacity-80" src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute bottom-4 left-4">
<div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs text-white font-medium">
                      Premium Wash
                    </div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-0 w-72 glass-panel rounded-3xl p-6 -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-xl z-20 bg-white">
<div className="flex justify-between items-start mb-4">
<div>
<p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">Balance</p>
<p className="text-2xl font-bold text-neutral-900">Unlimited</p>
</div>
<div className="w-10 h-10 rounded-full bg-electric-50 text-electric-500 flex items-center justify-center">
<iconify-icon icon="lucide:infinity" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-electric-500 rounded-full"></div>
</div>
<p className="text-xs text-neutral-400 text-right">24 days remaining</p>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-y border-neutral-200/60 bg-white/50 backdrop-blur-sm py-8 overflow-hidden">
<div className="relative w-full max-w-full overflow-hidden">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10"></div>
<div className="flex w-max animate-marquee gap-16 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">

<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:tesla"></iconify-icon> TESLA</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:porsche"></iconify-icon> PORSCHE</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:mercedes"></iconify-icon> MERCEDES-BENZ</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:bmw"></iconify-icon> BMW</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="lucide:droplets"></iconify-icon> BLACK STAR</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="lucide:zap"></iconify-icon> QUICKWASH</div>

<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:tesla"></iconify-icon> TESLA</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:porsche"></iconify-icon> PORSCHE</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:mercedes"></iconify-icon> MERCEDES-BENZ</div>
<div className="flex items-center gap-2 text-xl font-bold font-sans tracking-tighter"><iconify-icon icon="simple-icons:bmw"></iconify-icon> BMW</div>
</div>
</div>
</section>

<section className="space-y-12" id="how-it-works">
<div className="max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Simple. Fast. Clean.</h2>
<p className="text-neutral-500 text-lg">Three steps to a perpetually clean vehicle. We've removed the friction from the traditional car wash experience.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-3xl spotlight-card group cursor-default" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:check-circle" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">1. Select Plan</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Choose from 30, 90, or 365-day access. All plans include unlimited washes at partner locations.</p>
</div>

<div className="glass-panel p-8 rounded-3xl spotlight-card group cursor-default" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:map-pin" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">2. Find Location</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Use our interactive map to find the nearest high-rated car wash partner. There's always one nearby.</p>
</div>

<div className="glass-panel p-8 rounded-3xl spotlight-card group cursor-default" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-900 mb-6 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="lucide:qr-code" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3">3. Scan &amp; Go</h3>
<p className="text-neutral-500 leading-relaxed text-sm">Show your dynamic QR code at the terminal. The gate opens, you wash, you drive away clean.</p>
</div>
</div>
</section>

<section className="bg-neutral-900 rounded-[3rem] p-8 lg:p-20 relative overflow-hidden text-white" id="app">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-electric-600/30 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight">The power of clean in your pocket.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon icon="lucide:cloud-rain" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold mb-1">AI Weather Alerts</h4>
<p className="text-neutral-400 text-sm">We'll notify you the best days to wash based on upcoming rain forecasts.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/10">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-semibold mb-1">Savings Tracker</h4>
<p className="text-neutral-400 text-sm">See exactly how much you're saving compared to paying per wash.</p>
</div>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-end">
<div className="relative w-[300px] h-[600px] bg-neutral-950 rounded-[2.5rem] border-[8px] border-neutral-800 shadow-2xl shadow-black overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">

<div className="absolute top-0 inset-x-0 h-6 bg-neutral-800 z-20 rounded-b-xl w-32 mx-auto"></div>

<div className="w-full h-full bg-white text-neutral-900 flex flex-col relative">

<div className="p-6 pt-12 bg-neutral-50 border-b border-neutral-100">
<div className="flex justify-between items-center mb-4">
<div>
<p className="text-xs text-neutral-500">Good Morning</p>
<p className="font-bold text-lg">Azizbek</p>
</div>
<div className="w-8 h-8 rounded-full bg-electric-100 flex items-center justify-center text-electric-600">
<iconify-icon icon="lucide:bell" width="16"></iconify-icon>
</div>
</div>

<div className="bg-electric-500 text-white p-4 rounded-2xl shadow-lg shadow-electric-500/30">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-medium bg-white/20 px-2 py-0.5 rounded">Premium Plan</span>
<iconify-icon icon="lucide:wifi" width="16"></iconify-icon>
</div>
<p className="text-2xl font-bold mb-1">Ready to Wash</p>
<p className="text-xs opacity-80">Find a location to scan</p>
</div>
</div>

<div className="flex-1 p-6 bg-neutral-50 overflow-hidden">
<p className="text-xs font-bold uppercase tracking-wide text-neutral-400 mb-3">Nearby</p>

<div className="bg-white p-3 rounded-xl border border-neutral-100 shadow-sm mb-3 flex gap-3 items-center">
<div className="w-12 h-12 rounded-lg bg-neutral-100 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1552930294-6b595f4c2974?auto=format&amp'}}></div>
<div className="flex-1">
<h4 className="font-bold text-sm">Black Star Wash</h4>
<p className="text-xs text-neutral-400">1.2 km • Open Now</p>
</div>
<div className="bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-bold">9.2</div>
</div>

<div className="mt-8 flex flex-col items-center justify-center">
<div className="w-40 h-40 bg-white p-2 rounded-2xl border-2 border-dashed border-electric-300 flex items-center justify-center relative">
<iconify-icon className="text-neutral-900" icon="lucide:qr-code" width="80"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-b from-electric-500/20 to-transparent animate-shimmer h-1 w-full top-1/2"></div>
</div>
<p className="text-xs text-neutral-400 mt-4 text-center">Scan at terminal</p>
</div>
</div>

<div className="h-16 bg-white border-t border-neutral-100 flex justify-around items-center px-4 pb-2">
<iconify-icon className="text-electric-500" icon="lucide:home" width="24"></iconify-icon>
<iconify-icon className="text-neutral-300" icon="lucide:map" width="24"></iconify-icon>
<iconify-icon className="text-neutral-300" icon="lucide:user" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="space-y-12" id="pricing">
<div className="text-center max-w-xl mx-auto">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Choose your clean.</h2>
<p className="text-neutral-500">Transparent pricing. No hidden fees. Cancel anytime.</p>
</div>
<div className="grid lg:grid-cols-3 gap-6 items-start">

<div className="glass-panel p-8 rounded-[2rem] hover:border-neutral-300 transition-all">
<h3 className="text-lg font-medium mb-2">Monthly</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold tracking-tight">$39</span>
<span className="text-neutral-400">/mo</span>
</div>
<p className="text-sm text-neutral-500 mb-8 h-10">Perfect for trying out the service.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Unlimited Washes</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> 5 Locations</li>
<li className="flex gap-3 text-sm text-neutral-400"><iconify-icon className="text-neutral-300" icon="lucide:x"></iconify-icon> Priority Lane</li>
</ul>
<button className="w-full py-3 rounded-xl border border-neutral-200 font-semibold hover:bg-neutral-50 transition-colors">Select Plan</button>
</div>

<div className="bg-white p-8 rounded-[2rem] border-2 border-electric-500 shadow-[0_0_40px_rgba(0,163,255,0.15)] relative transform lg:-translate-y-4">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-electric-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                 Most Popular
              </div>
<h3 className="text-lg font-medium mb-2 text-electric-600">Quarterly</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl font-bold tracking-tight">$99</span>
<span className="text-neutral-400">/3mo</span>
</div>
<p className="text-sm text-neutral-500 mb-8 h-10">Save 15% compared to monthly.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-neutral-900 font-medium"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Unlimited Washes</li>
<li className="flex gap-3 text-sm text-neutral-900 font-medium"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> All Locations</li>
<li className="flex gap-3 text-sm text-neutral-900 font-medium"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Priority Lane Access</li>
<li className="flex gap-3 text-sm text-neutral-900 font-medium"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Interior Vacuum (2x/mo)</li>
</ul>
<button className="w-full py-3 rounded-xl bg-electric-500 text-white font-semibold hover:bg-electric-600 transition-colors shadow-lg shadow-electric-500/30">Get Started</button>
</div>

<div className="glass-panel p-8 rounded-[2rem] hover:border-neutral-300 transition-all">
<h3 className="text-lg font-medium mb-2">Annual</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-bold tracking-tight">$350</span>
<span className="text-neutral-400">/yr</span>
</div>
<p className="text-sm text-neutral-500 mb-8 h-10">Best value for car enthusiasts.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Unlimited Washes</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> All Locations</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Priority Lane</li>
<li className="flex gap-3 text-sm text-neutral-600"><iconify-icon className="text-electric-500" icon="lucide:check"></iconify-icon> Free Waxing (1x/mo)</li>
</ul>
<button className="w-full py-3 rounded-xl border border-neutral-200 font-semibold hover:bg-neutral-50 transition-colors">Select Plan</button>
</div>
</div>
</section>

<footer className="pt-12 border-t border-neutral-200/60">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-neutral-900 flex items-center justify-center text-white text-xs">
<iconify-icon icon="lucide:zap"></iconify-icon>
</div>
<span className="font-bold tracking-tight">YuvGo Inc.</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-electric-500 transition-colors" href="#">Privacy</a>
<a className="hover:text-electric-500 transition-colors" href="#">Terms</a>
<a className="hover:text-electric-500 transition-colors" href="#">Support</a>
</div>
<p className="text-xs text-neutral-400">© 2024 YuvGo. Crafted with speed.</p>
</div>
</footer>
</main>
</div>


    </>
  );
}
