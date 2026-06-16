import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
900: '#121212',
950: '#0a0a0a',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-white text-xl font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<iconify-icon className="text-red-500 text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Ironcore
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#plans">Plans</a>
<a className="hover:text-white transition-colors" href="#trainers">Trainers</a>
<a className="hover:text-white transition-colors" href="#transformations">Transformations</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium hover:text-white transition-colors" href="#login">Log In</a>
<a className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]" href="#plans">
                    Join Now
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym background" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
</div>
<div className="z-10 w-full max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/50 border border-neutral-800 text-xs font-medium text-blue-400 mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                    Open 24/7 in downtown
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">Body</span>.<br/>
                    Transform Your Life.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 leading-relaxed font-light">
                    Elite equipment, world-class trainers, and an electrifying atmosphere. Stop making excuses and start building the best version of yourself today.
                </p>
<div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
<a className="hover:bg-neutral-200 transition-all duration-300 flex items-center justify-center gap-2 text-base font-semibold text-neutral-950 text-center bg-white rounded-full pt-4 pr-8 pb-4 pl-8" href="#plans">
                        Start Your Journey
                        <iconify-icon className="text-xl" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300 flex items-center justify-center gap-2 group text-base font-semibold text-white text-center bg-neutral-900 border-neutral-800 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#contact">
<iconify-icon className="text-xl text-blue-500 group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Watch Video
                    </a>
</div>
</div>
</div>
</section>

<section className="relative z-20 -mt-10 max-w-7xl mx-auto px-6">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-xl">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-neutral-800/50">
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">500+</div>
<div className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-medium">Active Members</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">50+</div>
<div className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-medium">Expert Trainers</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">24/7</div>
<div className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-medium">Unlimited Access</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">30+</div>
<div className="text-xs md:text-sm text-neutral-500 uppercase tracking-widest font-medium">Weekly Classes</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Everything you need to succeed.</h2>
<p className="text-neutral-400 text-base">We provide a comprehensive ecosystem designed to push your limits and maximize your results, regardless of your starting point.</p>
</div>
<a className="text-sm font-medium text-white hover:text-red-400 transition-colors flex items-center gap-1" href="#">
                    Explore all services <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-neutral-900/50 border border-neutral-800 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:dumbbell-large-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Strength Training</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Build functional power and muscle mass with our premium free weights and selectorized machines.</p>
</div>

<div className="group bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Cardio &amp; Endurance</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Burn calories and improve heart health in our expansive cardio zone featuring the latest tech.</p>
</div>

<div className="group bg-neutral-900/50 border border-neutral-800 hover:border-red-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Group Classes</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Join high-energy sessions including HIIT, yoga, boxing, and spin, led by motivating instructors.</p>
</div>

<div className="group bg-neutral-900/50 border border-neutral-800 hover:border-blue-500/30 rounded-2xl p-6 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-3">Nutrition Planning</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-6">Fuel your body right. Get customized meal plans tailored to your specific fitness goals.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/30 border-y border-neutral-900" id="plans">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Choose your commitment.</h2>
<p className="text-neutral-400 text-base">Simple, transparent pricing. No hidden fees. Cancel anytime.</p>

<div className="mt-8 inline-flex bg-neutral-900 rounded-full p-1 border border-neutral-800">
<button className="px-6 py-2 rounded-full text-sm font-medium bg-neutral-800 text-white shadow-sm transition-all">Monthly</button>
<button className="px-6 py-2 rounded-full text-sm font-medium text-neutral-400 hover:text-white transition-all">Yearly <span className="text-red-500 text-xs ml-1">-20%</span></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">

<div className="hover:border-neutral-700 transition-colors bg-neutral-950 border-neutral-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="text-neutral-400 text-sm font-medium uppercase tracking-wider mb-4">Starter</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight">₹1500
</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-sm text-neutral-400 border-neutral-800 border-b mb-8 pb-8">Perfect for beginners looking to get into a consistent routine.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Standard gym access
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Locker room access
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Free fitness assessment
                        </li>
</ul>
<a className="block hover:bg-neutral-800 transition-colors text-sm font-medium text-white text-center bg-neutral-900 w-full border-neutral-800 border rounded-xl pt-3 pr-4 pb-3 pl-4" href="/#">Choose Starter</a>
</div>

<div className="bg-neutral-900 border border-red-500/30 rounded-3xl p-8 relative shadow-[0_0_40px_rgba(220,38,38,0.1)] md:scale-105 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full tracking-wide">MOST POPULAR</div>
<div className="text-red-400 text-sm font-medium uppercase tracking-wider mb-4">Pro</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-5xl font-semibold text-white tracking-tight">₹3000</span>
<span className="text-neutral-500 text-sm">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8 border-b border-neutral-800 pb-8">Everything you need to crush your goals and optimize recovery.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-red-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 24/7 Unlimited access
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-red-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> All group classes included
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-red-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Sauna &amp; recovery zone
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-red-600 hover:bg-red-500 text-white text-sm font-medium text-center rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]" href="#">Get Started</a>
</div>

<div className="hover:border-neutral-700 transition-colors bg-neutral-950 border-neutral-800 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="text-neutral-400 text-sm font-medium uppercase tracking-wider mb-4">Elite</div>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold text-white tracking-tight"></span>
<span className="text-sm text-neutral-500">₹9000/mo
</span>
</div>
<p className="text-sm text-neutral-400 border-neutral-800 border-b mb-8 pb-8">The ultimate VIP experience with dedicated one-on-one coaching.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Everything in Pro
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 4 PT sessions per month
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Custom meal plans
                        </li>
</ul>
<a className="block w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium text-center rounded-xl transition-colors border border-neutral-800" href="#">Choose Elite</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-950" id="trainers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Meet your mentors.</h2>
<p className="text-neutral-400 text-base">Elite professionals dedicated to pushing you past your perceived limits safely and effectively.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-900 cursor-pointer">
<img alt="Trainer" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white tracking-tight mb-1">Marcus Kane</h4>
<p className="text-sm text-red-400 font-medium mb-3">Head Strength Coach</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-900 cursor-pointer">
<img alt="Trainer" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white tracking-tight mb-1">Elena Rostova</h4>
<p className="text-sm text-blue-400 font-medium mb-3">Mobility &amp; Yoga</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-900 cursor-pointer">
<img alt="Trainer" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white tracking-tight mb-1">David Chen</h4>
<p className="text-sm text-red-400 font-medium mb-3">HIIT Specialist</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-900 cursor-pointer">
<img alt="Trainer" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-xl font-semibold text-white tracking-tight mb-1">Sarah Jenkins</h4>
<p className="text-sm text-blue-400 font-medium mb-3">Nutrition &amp; Weight Loss</p>
<div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-neutral-900/50 border-y border-neutral-900 overflow-hidden relative" id="transformations">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Real results. No BS.</h2>
<p className="text-neutral-400 text-base max-w-xl">Don't just take our word for it. Hear from the members who put in the work and changed their lives.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
<div className="flex text-red-500 mb-6 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-base leading-relaxed mb-8">"I was intimidated by gyms for years. The trainers here didn't just give me a workout plan; they taught me how to move, eat, and think. Down 30lbs and stronger than ever."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-semibold text-sm">JS</div>
<div>
<div className="text-sm font-semibold text-white">James Sullivan</div>
<div className="text-xs text-neutral-500">Member since 2022</div>
</div>
</div>
</div>

<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
<div className="flex text-red-500 mb-6 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-base leading-relaxed mb-8">"The equipment is top tier and the atmosphere is electric. It's the kind of place that makes you want to push harder. Best facility in the city hands down."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-semibold text-sm">MR</div>
<div>
<div className="text-sm font-semibold text-white">Michael Reed</div>
<div className="text-xs text-neutral-500">Competitive Powerlifter</div>
</div>
</div>
</div>

<div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-8">
<div className="flex text-red-500 mb-6 gap-1">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-neutral-300 text-base leading-relaxed mb-8">"I joined for the group classes but stayed for the community. The coaches know everyone by name and the energy is unmatched. It feels like a second family."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-white font-semibold text-sm">AT</div>
<div>
<div className="text-sm font-semibold text-white">Amanda Torres</div>
<div className="text-xs text-neutral-500">Member since 2023</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="contact">
<div className="absolute inset-0 z-0">
<img alt="Gym" className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1593079831268-3381b0c1239b?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-950/90"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to forge your legacy?</h2>
<p className="text-lg text-neutral-400 mb-10 max-w-2xl mx-auto">Claim your free 3-day pass today and experience the Ironcore difference for yourself. No commitment required.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10">
<input className="flex-1 bg-neutral-900/80 border border-neutral-700 text-white text-sm rounded-xl px-5 py-4 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all backdrop-blur-sm" placeholder="Enter your email address" required="" type="email"/>
<button className="bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-8 py-4 rounded-xl transition-all shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] whitespace-nowrap" type="submit">
                    Get Free Pass
                </button>
</form>
<p className="text-xs text-neutral-500">By subscribing, you agree to our Terms of Service and Privacy Policy.</p>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-white text-2xl font-semibold tracking-tighter uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-red-500 text-3xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Ironcore
                    </a>
<p className="text-sm text-neutral-400 mb-6">Building stronger bodies and minds since 2018. The premier destination for serious fitness enthusiasts.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:instagram-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:twitter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all" href="#">
<iconify-icon className="text-xl" icon="solar:youtube-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Company</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Support</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-semibold mb-6 uppercase tracking-wider">Visit Us</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>123 Iron Avenue<br/>Downtown District, NY 10001</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>hello@ironcore.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© 2023 Ironcore Fitness. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-neutral-500">
<span className="w-2 h-2 rounded-full bg-green-500"></span> All systems operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
