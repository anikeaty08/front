import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#f2fcf5',
100: '#e1f8e8',
600: '#357a3d', // Approx match to screenshot button/text
700: '#2d6a35',
800: '#26552d',
900: '#1f4425',
}
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<i className="text-brand-600 w-8 h-8 fill-brand-100" data-lucide="leaf"></i>
<span className="text-xl font-semibold tracking-tight text-brand-600">Green Habitat</span>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">Book Your Hotel</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">Best Deals</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">Green Badge</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">FAQs</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<div className="flex items-center gap-1">

<div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200">
<svg height="10" viewbox="0 0 60 30" width="20" xmlns="http://www.w3.org/2000/svg">
<clippath id="s">
<path d="M0,0 v30 h60 v-30 z"></path>
</clippath>
<clippath id="t">
<path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"></path>
</clippath>
<g clipPath="url(#s)">
<path d="M0,0 v30 h60 v-30 z" fill="#012169"></path>
<path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"></path>
<path clipPath="url(#t)" d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4"></path>
<path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"></path>
<path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"></path>
</g>
</svg>
</div>
</div>
<button className="bg-brand-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm">
                    Schedule your demo
                </button>
<button className="border border-brand-600 text-brand-600 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-brand-50 transition-colors">
                    Sign in
                </button>
</div>

<button className="lg:hidden text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-sm font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                A New Era of Employee Engagement
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-slate-900 tracking-tight mb-8 max-w-5xl mx-auto leading-tight">
                Empower Your Workforce, Reduce Costs, and Enhance <span className="text-brand-600">Well-Being.</span>
</h1>
<p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
                Green Habitat provides businesses with a smart and flexible travel rewards program. Access 460,000+ hotels worldwide, drive cost savings, and improve employee satisfaction with meaningful benefits.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/20 flex items-center justify-center gap-2">
                    Get Your 1-Year Pass
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl text-lg font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="calendar"></i>
                    Schedule Demo
                </button>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Why Corporate Benefits Matter</h2>
<p className="text-lg text-slate-600 max-w-2xl">
                    In today’s competitive market, offering meaningful, high-value benefits can significantly boost employee morale and company loyalty.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-blue-600 w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Enhance Satisfaction</h3>
<p className="text-lg text-slate-600">Competitive benefits show employees they are valued, increasing motivation and long-term commitment.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-purple-600 w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Improve Productivity</h3>
<p className="text-lg text-slate-600">Meaningful rewards help employees recharge and return more focused, improving overall workplace efficiency.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-indigo-600 w-6 h-6" data-lucide="building-2"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Employer Branding</h3>
<p className="text-lg text-slate-600">Companies offering flexible perks are more attractive to potential hires and create a stronger corporate identity.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-emerald-600 w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Financial Efficiency</h3>
<p className="text-lg text-slate-600">Save on costs while providing highly desirable perks through exclusive corporate travel rewards.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center mb-6">
<i className="text-amber-600 w-6 h-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Drive Client Loyalty</h3>
<p className="text-lg text-slate-600">Offer meaningful incentives to clients—such as exclusive travel deals—to foster deeper partnerships and improve long-term retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-8">
                    A Smart Corporate Benefit Solution
                </h2>
<p className="text-xl text-slate-600 mb-10">Unparalleled advantages for businesses and employees. Green Habitat bridges the gap between cost savings and premium experiences.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-brand-600 fill-brand-50" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Save Up to 60% on Accommodations</h4>
<p className="text-lg text-slate-600 mt-1">Deeply discounted rates across a vast range of hotels, from cost-effective to premium.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-brand-600 fill-brand-50" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Improve Work-Life Balance</h4>
<p className="text-lg text-slate-600 mt-1">Encourage well-earned breaks to reduce burnout and increase happiness.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-brand-600 fill-brand-50" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Flexible &amp; Customizable</h4>
<p className="text-lg text-slate-600 mt-1">Employees and clients choose when and how to use their travel rewards.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<i className="w-6 h-6 text-brand-600 fill-brand-50" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-900">Enhance Client Relationships</h4>
<p className="text-lg text-slate-600 mt-1">Strengthen partnerships by offering VIP clients travel perks.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand-600 blur-3xl opacity-10 rounded-full"></div>
<img alt="Luxury Hotel" className="relative rounded-3xl shadow-2xl border border-slate-200 w-full object-cover h-[600px]" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-slate-100 shadow-xl">
<div className="flex items-center justify-between mb-4">
<div>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Average Savings</p>
<p className="text-3xl font-semibold text-brand-600">€1,750</p>
</div>
<div className="h-10 w-10 bg-brand-100 rounded-full flex items-center justify-center text-brand-600">
<i className="w-5 h-5" data-lucide="piggy-bank"></i>
</div>
</div>
<p className="text-sm text-slate-600">Per employee per year, creating tangible financial benefits.</p>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-brand-400 text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="star"></i>
                    The Smartest Corporate Benefit
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">1-Year Advantage Pass</h2>
<p className="text-lg text-slate-300">A simple and flexible way to reward employees and clients, providing year-round access to top-tier travel options.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<i className="text-brand-400 w-10 h-10 mb-6" data-lucide="map-pin"></i>
<h3 className="text-xl font-semibold mb-3">460,000+ Hotels</h3>
<p className="text-lg text-slate-400">Options across every budget range, ensuring there’s something for everyone worldwide.</p>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<i className="text-brand-400 w-10 h-10 mb-6" data-lucide="sliders"></i>
<h3 className="text-xl font-semibold mb-3">Personalized Rewards</h3>
<p className="text-lg text-slate-400">Employees and clients can tailor their travel experiences to their specific needs and preferences.</p>
</div>
<div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
<i className="text-brand-400 w-10 h-10 mb-6" data-lucide="mouse-pointer-2"></i>
<h3 className="text-xl font-semibold mb-3">Optimized Booking</h3>
<p className="text-lg text-slate-400">A seamless booking platform that simplifies travel planning for employees and business trips.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50 border-b border-brand-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Sustainability Transparency</h2>
<p className="text-lg text-slate-600 mb-6">
                        We offer a diverse selection of hotels designed to accommodate different corporate travel needs. Whether for business trips, employee rewards, or client perks, our platform provides clear sustainability indicators.
                    </p>
<p className="text-lg text-slate-600">
                        We ensure companies and employees can make informed decisions based on their values and preferences through our Green Badge system.
                    </p>
</div>
<div className="grid gap-6">

<div className="bg-white p-6 rounded-xl border-l-4 border-l-brand-300 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-brand-300 fill-brand-300" data-lucide="leaf"></i>
<h3 className="text-lg font-semibold text-slate-900">Eco Essential</h3>
</div>
<p className="text-slate-600">Basic sustainable practices: energy-efficient lighting, water-saving systems, and responsible waste management.</p>
</div>

<div className="bg-white p-6 rounded-xl border-l-4 border-l-brand-500 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-brand-500 fill-brand-500" data-lucide="leaf"></i>
<h3 className="text-lg font-semibold text-slate-900">Eco Plus</h3>
</div>
<p className="text-slate-600">Beyond basics: featuring eco-friendly operations, locally sourced materials, and green certifications.</p>
</div>

<div className="bg-white p-6 rounded-xl border-l-4 border-l-brand-700 shadow-sm">
<div className="flex items-center gap-3 mb-2">
<i className="w-5 h-5 text-brand-700 fill-brand-700" data-lucide="leaf"></i>
<h3 className="text-lg font-semibold text-slate-900">Sustainability Champions</h3>
</div>
<p className="text-slate-600">Highest scores: prioritizing carbon reduction, renewable energy, and strong environmental initiatives.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 text-center tracking-tight mb-16">How It Works</h2>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-slate-200 -z-10"></div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-8">
<span className="text-3xl font-semibold text-brand-600">1</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Enroll Your Team</h3>
<p className="text-lg text-slate-600">Effortlessly provide employees and key clients with access to exclusive travel rewards.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-8">
<span className="text-3xl font-semibold text-brand-600">2</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Unlock Perks</h3>
<p className="text-lg text-slate-600">Enjoy high-value travel benefits with significant cost savings on hotels worldwide.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-lg mb-8">
<span className="text-3xl font-semibold text-brand-600">3</span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-4">Track &amp; Optimize</h3>
<p className="text-lg text-slate-600">Monitor engagement and see how travel rewards improve satisfaction and retention.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="flex flex-col gap-3">
<i className="text-brand-600 w-8 h-8 mb-2" data-lucide="shield-check"></i>
<h4 className="text-lg font-semibold text-slate-900">Trusted Partner</h4>
<p className="text-slate-600">Partnering with businesses of all sizes to deliver measurable value.</p>
</div>
<div className="flex flex-col gap-3">
<i className="text-brand-600 w-8 h-8 mb-2" data-lucide="lightbulb"></i>
<h4 className="text-lg font-semibold text-slate-900">Smarter Approach</h4>
<p className="text-slate-600">Go beyond cash bonuses with flexible travel rewards employees value.</p>
</div>
<div className="flex flex-col gap-3">
<i className="text-brand-600 w-8 h-8 mb-2" data-lucide="coins"></i>
<h4 className="text-lg font-semibold text-slate-900">Cost-Effective</h4>
<p className="text-slate-600">Maximize savings while providing a premium experience.</p>
</div>
<div className="flex flex-col gap-3">
<i className="text-brand-600 w-8 h-8 mb-2" data-lucide="briefcase"></i>
<h4 className="text-lg font-semibold text-slate-900">Multi-Purpose</h4>
<p className="text-slate-600">Versatile for employee perks, client gifts, and business travel.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="text-lg font-medium text-slate-900">Can employees use the pass for personal travel?</span>
<span className="transition-transform group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-slate-600 border-t border-transparent group-open:border-slate-100">
                        Yes, the 1-Year Advantage Pass can be used for both work-related and personal travel, ensuring employees enjoy year-round benefits.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="text-lg font-medium text-slate-900">How does this save businesses money?</span>
<span className="transition-transform group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-slate-600 border-t border-transparent group-open:border-slate-100">
                        Companies can reduce costs by offering employees exclusive travel perks instead of costly, short-term incentives. Additionally, the pass provides substantial savings on internal business travel.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="text-lg font-medium text-slate-900">How customizable is the program?</span>
<span className="transition-transform group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-slate-600 border-t border-transparent group-open:border-slate-100">
                        Employees and clients can book accommodations based on their preferences, making this a highly flexible and appreciated benefit.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-slate-50 transition-colors">
<span className="text-lg font-medium text-slate-900">Does this align with CSR initiatives?</span>
<span className="transition-transform group-open:rotate-180">
<i className="text-slate-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="p-6 pt-0 text-lg text-slate-600 border-t border-transparent group-open:border-slate-100">
                        While sustainability is a key consideration, Green Habitat offers a range of hotel options to ensure every employee or client finds the best fit, with clear indicators for eco-friendly choices.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-brand-600 text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to Transform Your Corporate Benefits Strategy?</h2>
<p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
                Join Green Habitat and provide your employees, clients, and business travelers with meaningful, high-value rewards.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-brand-700 px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-50 transition-colors shadow-lg">
                    Schedule a Live Demo
                </button>
<button className="w-full sm:w-auto bg-brand-700 border border-brand-500 text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-brand-800 transition-colors">
                    Get Advantage Pass
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 mb-12">
<div>
<div className="flex items-center gap-2 mb-6">
<i className="text-brand-600 w-6 h-6 fill-brand-100" data-lucide="leaf"></i>
<span className="text-lg font-semibold text-brand-600">Green Habitat</span>
</div>
<p className="text-slate-500 max-w-sm mb-6">
                        Empowering workforces through sustainable travel rewards and corporate benefits.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-600" href="#"><i className="w-5 h-5" data-lucide="linkedin"></i></a>
<a className="text-slate-400 hover:text-brand-600" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-slate-400 hover:text-brand-600" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 text-sm text-slate-500">
<div>
<h4 className="font-semibold text-slate-900 mb-3">TwoWings</h4>
<p className="mb-2">Founded in 1996, supporting small, sustainable education programs in developing regions with a focus on women, youth, and children.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-3">Planting Hope</h4>
<p>An initiative by TwoWings Foundation focusing on community development and environmental protection in Colombia and Zambia.</p>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-sm text-slate-400">© 2024 Green Habitat. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
