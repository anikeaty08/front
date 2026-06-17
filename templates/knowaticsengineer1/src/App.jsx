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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
brand: {
green: '#2ECC71',
dark: '#2B2B2B',
}
},
boxShadow: {
'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
'card': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'glow': '0 0 20px rgba(46, 204, 113, 0.15)',
}
}
}
}

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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#2B2B2B] text-white p-1 rounded-sm">
<iconify-icon height="20" icon="lucide:activity" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tighter text-[#2B2B2B] group-hover:text-[#2ECC71] transition-colors">KNOWATICS</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-slate-500 hover:text-[#2B2B2B] transition-colors" href="#about">About</a>
<a className="text-slate-500 hover:text-[#2B2B2B] transition-colors" href="#services">Services</a>
<a className="text-slate-500 hover:text-[#2B2B2B] transition-colors" href="#why-us">Why Us</a>
<a className="bg-[#2B2B2B] text-white px-4 py-2 rounded-md hover:bg-[#2ECC71] transition-all duration-300 shadow-subtle hover:shadow-glow" href="#contact">
                    Get Quote
                </a>
</div>

<button className="md:hidden text-[#2B2B2B]">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
<div className="absolute top-20 right-0 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-20 left-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2ECC71] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#2ECC71]"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">Engineering Safety &amp; Precision</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#2B2B2B] mb-6 leading-[1.1]">
                Engineered for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B2B2B] to-[#555]">Absolute</span>
<span className="underline decoration-[#2ECC71] decoration-4 underline-offset-4 decoration-skip-ink">Reliability</span>.
            </h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Comprehensive fire safety, surveillance, and industrial fabrication solutions. We secure your assets with precision engineering and certified expertise.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="w-full md:w-auto px-8 py-3.5 bg-[#2ECC71] hover:bg-[#27ae60] text-white rounded-lg font-medium transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 flex items-center justify-center gap-2" href="#services">
                    Explore Solutions
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="2" width="18"></iconify-icon>
</a>
<a className="w-full md:w-auto px-8 py-3.5 bg-white border border-slate-200 text-[#2B2B2B] hover:bg-slate-50 rounded-lg font-medium transition-all flex items-center justify-center gap-2" href="#contact">
                    Contact Experts
                </a>
</div>
</div>
</section>

<section className="py-12 border-y border-slate-200/60 bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by industry leaders</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800">
<iconify-icon className="text-[#2ECC71]" icon="lucide:hexagon"></iconify-icon> NEXUS IND
                </div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800">
<iconify-icon className="text-[#2ECC71]" icon="lucide:triangle"></iconify-icon> APEX CORP
                </div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800">
<iconify-icon className="text-[#2ECC71]" icon="lucide:circle"></iconify-icon> ORBITAL
                </div>
<div className="flex items-center gap-2 font-semibold text-xl tracking-tight text-slate-800">
<iconify-icon className="text-[#2ECC71]" icon="lucide:square"></iconify-icon> STRATUM
                </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B2B2B] mb-6">
                    Redefining safety standards through engineering excellence.
                </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-6 font-light">
                    At Knowatics Engineers, we don't just install systems; we engineer peace of mind. Founded on the principles of precision and integrity, we provide end-to-end solutions ranging from critical fire safety infrastructures to advanced electronics services.
                </p>
<div className="grid grid-cols-2 gap-6 mt-8">
<div className="border-l-2 border-[#2ECC71] pl-4">
<p className="text-3xl font-semibold text-[#2B2B2B] tracking-tight">500+</p>
<p className="text-sm text-slate-500">Projects Completed</p>
</div>
<div className="border-l-2 border-[#2ECC71] pl-4">
<p className="text-3xl font-semibold text-[#2B2B2B] tracking-tight">100%</p>
<p className="text-sm text-slate-500">Compliance Rate</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-video bg-slate-200 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200">

<div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-300 flex items-center justify-center">
<iconify-icon className="text-[#2ECC71] opacity-80" icon="lucide:shield-check" width="64"></iconify-icon>
</div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
<div className="flex items-start gap-3">
<div className="bg-green-50 p-2 rounded-lg text-[#2ECC71]">
<iconify-icon icon="lucide:check-circle" width="20"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#2B2B2B] text-sm">ISO Certified Process</p>
<p className="text-xs text-slate-400 mt-1">Ensuring global quality standards in every audit.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-[#2ECC71] font-medium text-sm tracking-wide uppercase">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#2B2B2B] mt-3 mb-4">Comprehensive Solutions</h2>
<p className="text-slate-500 font-light">Delivering top-tier services across safety, surveillance, and industrial engineering domains.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 bg-white border border-slate-100 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-red-50 text-red-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 tracking-tight">Fire Safety Solutions</h3>
<p className="text-sm text-slate-500 leading-relaxed">Installation and maintenance of hydrants, sprinklers, and suppression systems tailored to your facility.</p>
</div>

<div className="group p-6 bg-white border border-slate-100 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 tracking-tight">CCTV Installation</h3>
<p className="text-sm text-slate-500 leading-relaxed">High-definition surveillance systems with remote monitoring capabilities for 24/7 security.</p>
</div>

<div className="group p-6 bg-white border border-slate-100 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-green-50 text-[#2ECC71] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#2ECC71] group-hover:text-white transition-colors">
<iconify-icon icon="lucide:clipboard-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 tracking-tight">Safety Audits</h3>
<p className="text-sm text-slate-500 leading-relaxed">Comprehensive risk assessment and compliance audits to ensure your workspace meets legal standards.</p>
</div>

<div className="group p-6 bg-white border border-slate-100 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 tracking-tight">Fabrication Services</h3>
<p className="text-sm text-slate-500 leading-relaxed">Custom industrial fabrication, welding, and structural modifications executed with precision.</p>
</div>

<div className="group p-6 bg-white border border-slate-100 rounded-xl shadow-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 text-purple-500 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#2B2B2B] mb-3 tracking-tight">Electronics Services</h3>
<p className="text-sm text-slate-500 leading-relaxed">Repair, maintenance, and setup of industrial electronic components and control systems.</p>
</div>

<div className="group p-6 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-center items-center text-center hover:bg-slate-100 transition-all duration-300">
<div className="w-12 h-12 bg-slate-200 text-slate-600 rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="lucide:plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-[#2B2B2B] mb-1 tracking-tight">Need Custom Solutions?</h3>
<p className="text-xs text-slate-500 mb-4">We adapt to your specific engineering needs.</p>
<a className="text-sm font-medium text-[#2ECC71] hover:underline" href="#contact">Contact Support →</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2B2B2B] text-white" id="why-us">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                        Why industry leaders <br/> trust Knowatics.
                    </h2>
<p className="text-slate-400 text-lg font-light mb-8">
                        We combine technical expertise with a relentless focus on safety protocols. Our team is dedicated to protecting lives and assets through engineering excellence.
                    </p>
<div className="flex flex-col gap-4">
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-[#2ECC71]" icon="lucide:award" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-white">Certified Experts</h4>
<p className="text-xs text-slate-400">Qualified engineers handling critical systems.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-[#2ECC71]" icon="lucide:shield-check" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-white">Safety Compliance</h4>
<p className="text-xs text-slate-400">Adhering to National and International safety standards.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
<iconify-icon className="text-[#2ECC71]" icon="lucide:headphones" strokeWidth="1.5" width="28"></iconify-icon>
<div>
<h4 className="font-medium text-white">Customer-Focused Support</h4>
<p className="text-xs text-slate-400">Responsive service and long-term maintenance care.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-[#333] rounded-2xl border border-white/10 p-8 flex flex-col justify-between">
<div className="space-y-6">
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<p className="text-xs text-[#2ECC71] font-medium uppercase mb-1">Audit Score</p>
<p className="text-2xl font-semibold">98.5%</p>
</div>
<iconify-icon className="text-slate-500" icon="lucide:trending-up"></iconify-icon>
</div>
<div className="flex justify-between items-start border-b border-white/10 pb-4">
<div>
<p className="text-xs text-[#2ECC71] font-medium uppercase mb-1">Response Time</p>
<p className="text-2xl font-semibold">&lt; 24 Hrs</p>
</div>
<iconify-icon className="text-slate-500" icon="lucide:clock"></iconify-icon>
</div>
</div>
<div>
<blockquote className="text-slate-300 italic text-sm mb-4">
                            "Knowatics Engineers transformed our facility's safety infrastructure. Their attention to detail during the audit and subsequent fabrication work was impeccable."
                        </blockquote>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-xs font-bold">JD</div>
<div>
<p className="text-xs font-semibold text-white">John Doe</p>
<p className="text-[10px] text-slate-400">Operations Manager, Nexus Ind</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-5 gap-12">
<div className="md:col-span-2">
<h2 className="text-3xl font-semibold tracking-tight text-[#2B2B2B] mb-4">Get in touch</h2>
<p className="text-slate-500 mb-8 font-light">Have a project in mind? Fill out the form or reach us directly.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#2B2B2B] border border-slate-100">
<iconify-icon icon="lucide:map-pin" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#2B2B2B] text-sm">Headquarters</p>
<p className="text-sm text-slate-500 mt-1">123 Engineering Hub, Industrial Area,<br/>Metro City, 560001</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#2B2B2B] border border-slate-100">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#2B2B2B] text-sm">Email Us</p>
<a className="text-sm text-slate-500 mt-1 hover:text-[#2ECC71] transition-colors" href="mailto:info@knowatics.com">info@knowatics.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#2B2B2B] border border-slate-100">
<iconify-icon icon="lucide:phone" width="18"></iconify-icon>
</div>
<div>
<p className="font-medium text-[#2B2B2B] text-sm">Call Us</p>
<p className="text-sm text-slate-500 mt-1">+91 98765 43210</p>
</div>
</div>
</div>
</div>
<div className="md:col-span-3 bg-slate-50 rounded-2xl p-8 border border-slate-100">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#2ECC71]/20 focus:border-[#2ECC71] transition-all" placeholder="Jane" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#2ECC71]/20 focus:border-[#2ECC71] transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Service Interest</label>
<div className="relative">
<select className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#2ECC71]/20 focus:border-[#2ECC71] transition-all appearance-none cursor-pointer">
<option>Fire Safety Solutions</option>
<option>CCTV Installation</option>
<option>Safety Audit</option>
<option>Fabrication</option>
<option>Electronics Service</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-slate-700">Message</label>
<textarea className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#2ECC71]/20 focus:border-[#2ECC71] transition-all resize-none" placeholder="Describe your requirements..." rows="4"></textarea>
</div>
<div className="flex items-center gap-2">
<input className="appearance-none w-4 h-4 border border-slate-300 rounded checked:bg-[#2ECC71] checked:border-[#2ECC71] cursor-pointer relative after:content-['✓'] after:absolute after:text-white after:text-[10px] after:left-[2px] after:top-0" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="terms">I agree to the privacy policy.</label>
</div>
<button className="w-full bg-[#2B2B2B] text-white font-medium py-3 rounded-lg hover:bg-[#2ECC71] transition-colors duration-300 shadow-lg shadow-gray-200">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="bg-[#2B2B2B] text-white p-1 rounded-sm">
<iconify-icon height="16" icon="lucide:activity" width="16"></iconify-icon>
</div>
<span className="text-base font-semibold tracking-tighter text-[#2B2B2B]">KNOWATICS</span>
</div>
<p className="text-xs text-slate-400">© 2023 Knowatics Engineers. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#2B2B2B] transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#2B2B2B] transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-slate-400 hover:text-[#2B2B2B] transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
