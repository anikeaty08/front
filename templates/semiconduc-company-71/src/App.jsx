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
      

<nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-neutral-100 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold">SV</span>
</div>
<span className="font-semibold text-lg tracking-tight">Si-Vision</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">About</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">Industries</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">Knowledge</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">Careers</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">Academy</a>
<a className="text-sm text-neutral-600 hover:text-neutral-900 transition" href="#">Culture</a>
</div>
<a className="hidden md:inline-flex px-4 py-2 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition" href="#">
                    Contact Us
                </a>
<button className="md:hidden p-2">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
<i className="w-4 h-4" data-lucide="sparkles" strokeWidth="1.5"></i>
                        About Si-Vision
                    </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 mb-6">
                        Pioneering the Future of
                        <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Semiconductor</span> Technology
                    </h1>
<p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
                        A leading semiconductor and technology solutions company specializing in advanced chip design, IP development, and high-performance engineering services.
                    </p>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
<div className="relative">
<img alt="Semiconductor chip technology" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&amp;h=600&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-blue-600" data-lucide="cpu" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">100+ Products</div>
<div className="text-xs text-neutral-500">Delivered Worldwide</div>
</div>
</div>
</div>
<div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 hidden sm:block">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
<i className="w-5 h-5 text-indigo-600" data-lucide="award" strokeWidth="1.5"></i>
</div>
<div>
<div className="text-sm font-medium text-neutral-900">18+ Years</div>
<div className="text-xs text-neutral-500">Of Innovation</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 border-y border-neutral-100 bg-neutral-50/50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
<div className="text-center">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-2">1,000+</div>
<div className="text-base text-neutral-500">Employees Worldwide</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-2">100+</div>
<div className="text-base text-neutral-500">Products Delivered</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-2">18+</div>
<div className="text-base text-neutral-500">Years of Innovation</div>
</div>
<div className="text-center">
<div className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-900 mb-2">50+</div>
<div className="text-base text-neutral-500">Global Partners</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">Who We Are</h2>
<div className="space-y-5 text-base lg:text-lg text-neutral-600 leading-relaxed">
<p>
                            Our teams work on cutting-edge innovations that power the next generation of consumer electronics, automotive systems, AI-driven devices, and communication technologies.
                        </p>
<p>
                            With a strong commitment to excellence, continuous learning, and employee growth, Si-Vision provides an environment where talented engineers, developers, and business professionals can build meaningful, impactful careers.
                        </p>
<p>
                            We believe in fostering innovation, encouraging creativity, and empowering every team member to contribute to solutions that reshape the future of technology.
                        </p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-2xl opacity-60"></div>
<img alt="Technology" className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&amp;h=600&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-neutral-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-3xl"></div>
<div className="relative p-8 lg:p-10">
<div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="target" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Our Mission</h3>
<p className="text-lg text-neutral-300 leading-relaxed">
                            World Class Engineers bringing continuous success to our worldwide partners by delivering high-quality and innovative solutions that drive technological advancement.
                        </p>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl"></div>
<div className="relative p-8 lg:p-10">
<div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="eye" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-4">Our Vision</h3>
<p className="text-lg text-neutral-300 leading-relaxed">
                            We maintain a strong employee base, expand our global footprint, secure investment capital, and sustain a solid cash position while increasing Si-Vision capacity and market readiness.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">What Makes Us Different</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Our core values drive everything we do, from product development to customer relationships.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition">
<i className="w-6 h-6 text-blue-600" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Integrity</h3>
<p className="text-base text-neutral-600">We uphold honesty, accountability, and transparency in everything we do.</p>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition">
<i className="w-6 h-6 text-indigo-600" data-lucide="lightbulb" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Innovation</h3>
<p className="text-base text-neutral-600">We push boundaries and create cutting-edge IC design solutions.</p>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition">
<i className="w-6 h-6 text-purple-600" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Customer First</h3>
<p className="text-base text-neutral-600">We prioritize our clients' needs and consistently deliver solutions that exceed expectations.</p>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition">
<i className="w-6 h-6 text-emerald-600" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Agility</h3>
<p className="text-base text-neutral-600">We adapt quickly to new technologies and shifting market demands.</p>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-amber-200 hover:bg-amber-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition">
<i className="w-6 h-6 text-amber-600" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium text-neutral-900 mb-2">Team Work</h3>
<p className="text-base text-neutral-600">We collaborate with trust, respect, and shared purpose to achieve extraordinary results.</p>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">Our Journey</h2>
<p className="text-lg text-neutral-600 max-w-2xl mx-auto">Three decades of innovation, growth, and technological breakthroughs.</p>
</div>
<div className="relative max-w-3xl mx-auto">

<div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600"></div>

<div className="space-y-8">

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block">
<div className="text-sm font-medium text-blue-600 mb-1">2007</div>
<h4 className="text-base font-medium text-neutral-900">Company Founded</h4>
<p className="text-base text-neutral-600">A Company Established By An Ambitious Team Driven By Great Aspirations</p>
</div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10 lg:hidden">
<div className="text-sm font-medium text-blue-600 mb-1">2007</div>
<h4 className="text-base font-medium text-neutral-900">Company Founded</h4>
<p className="text-base text-neutral-600">A Company Established By An Ambitious Team Driven By Great Aspirations</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 hidden lg:block"></div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10">
<div className="text-sm font-medium text-blue-600 mb-1">2009</div>
<h4 className="text-base font-medium text-neutral-900">Wireless Expansion</h4>
<p className="text-base text-neutral-600">Expanded Focus To Wireless IP Business</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block">
<div className="text-sm font-medium text-indigo-600 mb-1">2011</div>
<h4 className="text-base font-medium text-neutral-900">Industry Recognition</h4>
<p className="text-base text-neutral-600">Became A Leading Wireless IP Provider; Received 5 Asia-Pacific (APAC) Prestigious Awards</p>
</div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10 lg:hidden">
<div className="text-sm font-medium text-indigo-600 mb-1">2011</div>
<h4 className="text-base font-medium text-neutral-900">Industry Recognition</h4>
<p className="text-base text-neutral-600">Became A Leading Wireless IP Provider; Received 5 Asia-Pacific (APAC) Prestigious Awards</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 hidden lg:block"></div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10">
<div className="text-sm font-medium text-indigo-600 mb-1">2015</div>
<h4 className="text-base font-medium text-neutral-900">Strategic Acquisition</h4>
<p className="text-base text-neutral-600">Our Wireless Business Assets Has Been Acquired By A World-Class Semiconductor IP Provider</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block">
<div className="text-sm font-medium text-purple-600 mb-1">2018</div>
<h4 className="text-base font-medium text-neutral-900">Global Expansion</h4>
<p className="text-base text-neutral-600">Expanded Customer Base Across New Regions</p>
</div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10 lg:hidden">
<div className="text-sm font-medium text-purple-600 mb-1">2018</div>
<h4 className="text-base font-medium text-neutral-900">Global Expansion</h4>
<p className="text-base text-neutral-600">Expanded Customer Base Across New Regions</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 hidden lg:block"></div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10">
<div className="text-sm font-medium text-purple-600 mb-1">2019</div>
<h4 className="text-base font-medium text-neutral-900">Quality Certification</h4>
<p className="text-base text-neutral-600">ISO 9001 Quality Certified</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 lg:text-right hidden lg:block">
<div className="text-sm font-medium text-blue-600 mb-1">2023</div>
<h4 className="text-base font-medium text-neutral-900">Security Milestone</h4>
<p className="text-base text-neutral-600">ISO 27001 Information Security Certified</p>
</div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10 lg:hidden">
<div className="text-sm font-medium text-blue-600 mb-1">2023</div>
<h4 className="text-base font-medium text-neutral-900">Security Milestone</h4>
<p className="text-base text-neutral-600">ISO 27001 Information Security Certified</p>
</div>
</div>

<div className="relative flex items-start gap-6 lg:gap-0">
<div className="lg:w-1/2 lg:pr-12 hidden lg:block"></div>
<div className="absolute left-6 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full ring-4 ring-white"></div>
<div className="lg:w-1/2 lg:pl-12 pl-10">
<div className="text-sm font-medium text-blue-600 mb-1">2025</div>
<h4 className="text-base font-medium text-neutral-900">Market Leadership</h4>
<p className="text-base text-neutral-600">Proving A Market Leader Position Through Hiring, Educating, Injecting Millinery Engineering Talents</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-32">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 lg:p-16">
<div %3e%3c="" 0="" 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30v0h-2v4h-4v2h4v4h2v6h4v4h-4zm6="" 34v-4h4v4h0v2h4v4h2v-4h4v-2h6zm6="" 4v0h4v4h0v2h4v4h2v6h4v4h6z\"="" 60="" 60\"="" className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\" d='\"M36' fill='\"%23ffffff\"' fillOpacity='\"0.05\"%3E%3Cpath' fill-rule='\"evenodd\"%3E%3Cg' g%3e%3c="" height='\"60\"' opacity-50"="" svg%3e')]="" viewbox='\"0' xmlns='\"http://www.w3.org/2000/svg\"%3E%3Cg'></div>
<div className="relative text-center">
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-white mb-4">Join Our Team</h2>
<p className="text-lg text-blue-100 max-w-2xl mx-auto mb-8">At Si-Vision, you will work with world-class experts, collaborate on high-impact projects, and join a culture that values integrity, ownership, teamwork, and long-term development.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-blue-600 text-base font-medium rounded-xl hover:bg-blue-50 transition" href="#">
                            View Open Positions
                            <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white text-base font-medium rounded-xl hover:bg-white/20 transition border border-white/20" href="#">
                            Learn About Culture
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 bg-neutral-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
<div className="col-span-2 lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
<span className="text-white text-sm font-semibold">SV</span>
</div>
<span className="font-semibold text-lg tracking-tight">Si-Vision</span>
</div>
<p className="text-base text-neutral-600 mb-4">Your AI-Augmented Innovation Design Partner</p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 bg-neutral-200 hover:bg-neutral-300 rounded-lg flex items-center justify-center transition" href="#">
<i className="w-4 h-4 text-neutral-600" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-9 h-9 bg-neutral-200 hover:bg-neutral-300 rounded-lg flex items-center justify-center transition" href="#">
<i className="w-4 h-4 text-neutral-600" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-9 h-9 bg-neutral-200 hover:bg-neutral-300 rounded-lg flex items-center justify-center transition" href="#">
<i className="w-4 h-4 text-neutral-600" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">About Us</a></li>
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">Industries</a></li>
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">Knowledge Center</a></li>
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">Events</a></li>
<li><a className="text-base text-neutral-600 hover:text-neutral-900 transition" href="#">Academy</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900 mb-4">Contact Us</h4>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-base text-neutral-600">
<i className="w-4 h-4 mt-1 flex-shrink-0" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Square 142, Al Esaa Salah Zaki St., Shorokon Heliopolis, Cairo</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-500">© 2025 Si-Vision. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-sm text-neutral-500 hover:text-neutral-700 transition" href="#">Privacy Policy</a>
<a className="text-sm text-neutral-500 hover:text-neutral-700 transition" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
