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
      

<div className="w-full h-2 bg-[#2E7D32]"></div>

<header className="w-full bg-white border-b border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)] sticky top-0 z-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5">
<div className="flex flex-col gap-6">

<div className="flex justify-between items-center w-full">

<a className="group flex flex-col items-center relative" href="#">

<div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#2E7D32] transition-transform group-hover:-translate-y-1 duration-300">
<div className="relative">
<i className="w-6 h-6 fill-[#2E7D32] text-[#2E7D32] rotate-[-15deg] stroke-[1.5]" data-lucide="leaf"></i>

<div className="absolute top-5 -left-4 w-14 h-[2px] bg-[#2E7D32] rounded-full transform -rotate-12"></div>
</div>
</div>

<div className="flex items-start mt-2">
<span className="text-2xl font-medium tracking-tight text-[#2E7D32]">Green Habitat</span>
<span className="text-[10px] text-[#2E7D32] font-medium mt-1 ml-0.5">®</span>
</div>
</a>

<div className="hidden md:flex items-center gap-5">
<button aria-label="Select Language" className="p-1 rounded-full hover:bg-gray-50 transition-colors">
<img alt="United Kingdom" className="w-6 h-6 object-cover rounded-full shadow-sm border border-gray-100" src="https://flagcdn.com/w40/gb.png"/>
</button>
<a className="bg-[#2E7D32] hover:bg-[#256428] text-white text-base font-medium px-5 py-2.5 rounded-md shadow-sm border border-transparent transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95" href="#demo">
                            Schedule your demo
                        </a>
<a className="bg-white hover:bg-green-50 text-[#2E7D32] text-base font-medium px-5 py-2.5 rounded-md border border-[#2E7D32] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md active:scale-95" href="#">
                            Sign in
                        </a>
</div>

<button className="md:hidden text-gray-600 hover:text-[#2E7D32] transition-colors">
<i className="w-8 h-8 stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>

<nav className="hidden md:flex items-center gap-10 pb-2">
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">About</a>
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">Book Your Hotel</a>
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">Best Deals</a>
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">Green Badge</a>
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">FAQs</a>
<a className="text-lg font-medium text-gray-700 hover:text-[#2E7D32] transition-colors" href="#">Contact</a>
</nav>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="max-w-4xl">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-[#2E7D32] text-xs font-medium uppercase tracking-wider mb-6 border border-green-100">
                        New Era of Engagement
                    </span>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-8 leading-[1.1]">
                        Corporate Benefits: <br/>
<span className="text-gray-400">A New Era of</span> <span className="text-[#2E7D32]">Employee Engagement</span>
</h1>
<p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mb-10 max-w-2xl">
                        Empower your workforce, reduce costs, and enhance employee well-being. Offer meaningful, high-value benefits that boost morale and loyalty with our smart travel rewards program.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center bg-[#2E7D32] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-sm hover:bg-[#256428] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95" href="#demo">
                            Schedule a Live Demo
                            <i className="ml-2 w-5 h-5" data-lucide="arrow-right"></i>
</a>
<a className="inline-flex justify-center items-center bg-white text-gray-700 text-lg font-medium px-8 py-4 rounded-lg border border-gray-200 hover:border-[#2E7D32] hover:text-[#2E7D32] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95" href="#advantage-pass">
                            View Advantage Pass
                        </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-y border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-4">Why Corporate Benefits Matter</h2>
<p className="text-lg text-gray-500 max-w-2xl">Essential tools for attracting talent, improving efficiency, and building long-term relationships.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="smile"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Satisfaction &amp; Retention</h3>
<p className="text-gray-500 leading-relaxed text-sm">Competitive benefits show employees they are valued, increasing motivation and long-term commitment.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="trending-up"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Productivity &amp; Performance</h3>
<p className="text-gray-500 leading-relaxed text-sm">Travel incentives help employees recharge and return focused, improving workplace efficiency.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="building-2"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Employer Branding</h3>
<p className="text-gray-500 leading-relaxed text-sm">Personalized perks create a stronger corporate identity, making you attractive to potential hires.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all duration-300">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Financial Efficiency</h3>
<p className="text-gray-500 leading-relaxed text-sm">Save costs while providing highly desirable perks by leveraging exclusive travel rewards.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-[#2E7D32]/30 hover:shadow-lg transition-all duration-300 md:col-span-2 lg:col-span-2">
<div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Drive Client Loyalty</h3>
<p className="text-gray-500 leading-relaxed text-sm">Foster deeper partnerships by offering meaningful incentives to clients—such as exclusive travel deals—improving long-term customer retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6">A Smart Corporate Benefit Solution</h2>
<p className="text-xl text-gray-500 mb-10 font-light">Unparalleled advantages for businesses and employees. Experience flexibility without compromise.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Save Up to 60% on Accommodations</h4>
<p className="text-gray-500 mt-1">Deeply discounted rates from cost-effective stays to premium experiences.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Improve Work-Life Balance</h4>
<p className="text-gray-500 mt-1">Encourage well-earned breaks to reduce burnout and increase happiness.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Flexible &amp; Customizable Rewards</h4>
<p className="text-gray-500 mt-1">Employees and clients choose when and how to use their travel rewards.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Exclusive Hotel Deals for Business</h4>
<p className="text-gray-500 mt-1">Cut travel costs while ensuring access to high-quality stays for work trips.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0">
<i className="w-6 h-6 text-[#2E7D32]" data-lucide="check-circle-2"></i>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Enhance Client Relationships</h4>
<p className="text-gray-500 mt-1">Strengthen partnerships by offering VIP clients unique travel perks.</p>
</div>
</div>
</div>
</div>
<div className="relative bg-gray-50 rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50" id="advantage-pass">
<div className="absolute top-0 right-0 p-6 opacity-10">
<i className="w-48 h-48 text-[#2E7D32]" data-lucide="plane"></i>
</div>
<span className="text-[#2E7D32] font-semibold tracking-wide uppercase text-sm">The Smartest Benefit</span>
<h3 className="text-3xl font-medium text-gray-900 mt-2 mb-6 tracking-tight">1-Year Advantage Pass</h3>
<p className="text-gray-600 mb-8 leading-relaxed">A simple and flexible way to reward employees and clients, providing year-round access to top-tier travel options.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="text-2xl font-semibold text-[#2E7D32] mb-1">460k+</div>
<div className="text-xs text-gray-500 uppercase font-medium">Hotel Partnerships</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
<div className="text-2xl font-semibold text-[#2E7D32] mb-1">€1,750</div>
<div className="text-xs text-gray-500 uppercase font-medium">Avg. Savings / Year</div>
</div>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-600">
<i className="w-4 h-4 text-[#2E7D32] mr-3" data-lucide="check"></i> Optimized Booking System
                            </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-4 h-4 text-[#2E7D32] mr-3" data-lucide="check"></i> Personalized Rewards
                            </li>
<li className="flex items-center text-sm text-gray-600">
<i className="w-4 h-4 text-[#2E7D32] mr-3" data-lucide="check"></i> Options for every budget
                            </li>
</ul>
<button className="w-full bg-[#2E7D32] hover:bg-[#256428] text-white font-medium py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
                            Get the Advantage Pass
                        </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2E7D32]/5">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-6">Sustainability Transparency</h2>
<p className="text-lg text-gray-600">
                        We provide clear sustainability indicators, ensuring companies and employees can make informed decisions based on their values.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl p-8 border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#2E7D32] opacity-40"></div>
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-[#2E7D32] opacity-60" data-lucide="leaf"></i>
<h3 className="text-lg font-medium text-gray-900">Eco Essential</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
                            Hotels integrating basic sustainable practices: energy-efficient lighting, water-saving systems, and responsible waste management.
                        </p>
</div>

<div className="bg-white rounded-xl p-8 border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#2E7D32] opacity-70"></div>
<div className="flex items-center gap-3 mb-4">
<i className="w-6 h-6 text-[#2E7D32] opacity-80" data-lucide="leaf"></i>
<i className="w-6 h-6 text-[#2E7D32] opacity-80 -ml-4" data-lucide="leaf"></i>
<h3 className="text-lg font-medium text-gray-900">Eco Plus</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
                            Going beyond basics with eco-friendly operations, locally sourced materials, and recognized green certifications.
                        </p>
</div>

<div className="bg-white rounded-xl p-8 border border-green-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-1 bg-[#2E7D32]"></div>
<div className="flex items-center gap-3 mb-4">
<div className="flex">
<i className="w-6 h-6 text-[#2E7D32] fill-[#2E7D32]" data-lucide="leaf"></i>
<i className="w-6 h-6 text-[#2E7D32] fill-[#2E7D32] -ml-3" data-lucide="leaf"></i>
<i className="w-6 h-6 text-[#2E7D32] fill-[#2E7D32] -ml-3" data-lucide="leaf"></i>
</div>
<h3 className="text-lg font-medium text-gray-900">Champions</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed">
                            Highest sustainability scores prioritizing carbon reduction, renewable energy, and strong environmental initiatives.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-gray-100">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900 mb-4">Corporate Benefits That Deliver Real Impact</h2>
<p className="text-gray-500 text-lg">A simple process to enroll and start saving.</p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gray-200 -z-10"></div>

<div className="relative bg-white pt-4 md:pr-4">
<div className="w-16 h-16 bg-[#2E7D32] text-white text-xl font-medium rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-900/10">1</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Enroll Your Team</h3>
<p className="text-gray-500 text-sm leading-relaxed">Effortlessly provide employees and key clients with access to exclusive travel rewards.</p>
</div>

<div className="relative bg-white pt-4 md:px-2">
<div className="w-16 h-16 bg-white text-[#2E7D32] border border-[#2E7D32] text-xl font-medium rounded-2xl flex items-center justify-center mb-6 shadow-sm">2</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Unlock Perks</h3>
<p className="text-gray-500 text-sm leading-relaxed">Enjoy high-value travel benefits with significant cost savings on hotels worldwide.</p>
</div>

<div className="relative bg-white pt-4 md:pl-4">
<div className="w-16 h-16 bg-white text-[#2E7D32] border border-[#2E7D32] text-xl font-medium rounded-2xl flex items-center justify-center mb-6 shadow-sm">3</div>
<h3 className="text-xl font-medium text-gray-900 mb-2">Track &amp; Optimize</h3>
<p className="text-gray-500 text-sm leading-relaxed">Monitor engagement and see how travel rewards improve employee satisfaction and retention.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-20">

<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">Why Choose Green Habitat?</h2>
<div className="space-y-6">
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<h4 className="font-medium text-gray-900 flex items-center gap-2">
<i className="w-5 h-5 text-[#2E7D32]" data-lucide="shield-check"></i>
                                    Trusted by Leading Companies
                                </h4>
<p className="text-gray-500 text-sm mt-2 pl-7">Delivering measurable value for employees and clients across businesses of all sizes.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<h4 className="font-medium text-gray-900 flex items-center gap-2">
<i className="w-5 h-5 text-[#2E7D32]" data-lucide="lightbulb"></i>
                                    Smarter Approach
                                </h4>
<p className="text-gray-500 text-sm mt-2 pl-7">Go beyond cash bonuses—offer flexible travel rewards that employees genuinely value.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<h4 className="font-medium text-gray-900 flex items-center gap-2">
<i className="w-5 h-5 text-[#2E7D32]" data-lucide="coins"></i>
                                    Cost-Effective &amp; Impactful
                                </h4>
<p className="text-gray-500 text-sm mt-2 pl-7">Maximize savings while providing a premium experience for your workforce.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
<h4 className="font-medium text-gray-900 flex items-center gap-2">
<i className="w-5 h-5 text-[#2E7D32]" data-lucide="layers"></i>
                                    Multi-Purpose Utility
                                </h4>
<p className="text-gray-500 text-sm mt-2 pl-7">Works for employee perks, client gifts, and internal travel savings.</p>
</div>
</div>
</div>

<div>
<h2 className="text-3xl font-medium tracking-tight text-gray-900 mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border-b border-gray-200 pb-4">
<h3 className="font-medium text-gray-900 mb-2">Can employees use the pass for personal travel?</h3>
<p className="text-gray-600 text-sm leading-relaxed">Yes, the 1-Year Advantage Pass can be used for both work-related and personal travel, ensuring employees enjoy year-round benefits.</p>
</div>
<div className="border-b border-gray-200 pb-4 pt-4">
<h3 className="font-medium text-gray-900 mb-2">How does this save businesses money?</h3>
<p className="text-gray-600 text-sm leading-relaxed">Companies can reduce costs by offering employees exclusive travel perks instead of costly, short-term incentives. Additionally, the pass provides substantial savings on internal business travel.</p>
</div>
<div className="border-b border-gray-200 pb-4 pt-4">
<h3 className="font-medium text-gray-900 mb-2">How customizable is the program?</h3>
<p className="text-gray-600 text-sm leading-relaxed">Employees and clients can book accommodations based on their preferences, making this a highly flexible and appreciated benefit.</p>
</div>
<div className="pt-4">
<h3 className="font-medium text-gray-900 mb-2">Does this align with CSR initiatives?</h3>
<p className="text-gray-600 text-sm leading-relaxed">While sustainability is a key consideration with our Green Badge system, Green Habitat offers a range of hotel options to ensure every employee or client finds the best fit.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="demo">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-gray-900 mb-6">Ready to Transform Your Strategy?</h2>
<p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-light">Join Green Habitat and provide your employees, clients, and business travelers with meaningful rewards that enhance retention.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="inline-flex justify-center items-center bg-[#2E7D32] text-white text-lg font-medium px-8 py-4 rounded-lg shadow-xl shadow-green-900/10 hover:bg-[#256428] transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
<i className="mr-2 w-5 h-5" data-lucide="calendar"></i>
                        Schedule a Live Demo
                    </button>
<button className="inline-flex justify-center items-center bg-white text-[#2E7D32] border border-[#2E7D32] text-lg font-medium px-8 py-4 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:-translate-y-1 active:scale-95">
<i className="mr-2 w-5 h-5" data-lucide="gift"></i>
                        Get Advantage Pass
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-gray-900 text-white py-16 border-t border-gray-800">
<div className="max-w-[1400px] mx-auto px-6 lg:px-12">
<div className="grid md:grid-cols-2 gap-16">

<div>
<div className="flex items-center gap-2 mb-4 text-[#2E7D32]">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
<span className="font-semibold tracking-tight uppercase text-sm">TwoWings Foundation</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed">
                        TwoWings, founded in 1996, supports small, sustainable education programs in developing regions with a focus on the education of women, youth, and children.
                    </p>
</div>

<div>
<div className="flex items-center gap-2 mb-4 text-[#2E7D32]">
<i className="w-6 h-6" data-lucide="sprout"></i>
<span className="font-semibold tracking-tight uppercase text-sm">Planting Hope</span>
</div>
<p className="text-gray-400 text-sm leading-relaxed">
                        An initiative launched by the TwoWings Foundation focusing on community development and environmental protection. Supporting educational and tree-planting programs in Colombia and Zambia to promote sustainable agricultural practices.
                    </p>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
<p>© 2024 Green Habitat. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
