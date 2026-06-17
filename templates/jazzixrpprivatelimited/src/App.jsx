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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
},
slate: {
850: '#1e293b',
900: '#0f172a',
}
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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-100 bg-white/90 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 font-semibold tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<span className="iconify" data-icon="lucide:user" data-strokeWidth="1.5"></span>
</div>
                Jahanzaib Afzal
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="hover:text-brand-600 transition-colors" href="#skills">Skills</a>
<a className="hover:text-brand-600 transition-colors" href="#experience">Experience</a>
<a className="hover:text-brand-600 transition-colors" href="#education">Education</a>
</div>
<a className="text-xs font-semibold bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:bg-brand-600 transition-colors shadow-sm ring-1 ring-slate-900/5" href="#contact">
                Contact Me
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none"></div>
<div className="relative max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-xs font-medium text-brand-700 mb-8 fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                Available for opportunities
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-6 leading-[1.1] fade-in-up delay-100">
                Digital Marketer &amp; <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">Growth Strategist</span>
</h1>
<p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed fade-in-up delay-200">
                Specializing in Meta &amp; Google Ads, Shopify optimization, and lead generation. I help businesses scale revenue through data-driven campaigns and creative storytelling.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-300">
<a className="w-full sm:w-auto h-12 px-8 rounded-lg bg-brand-600 text-white text-sm font-medium hover:bg-brand-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-500/20" href="#contact">
                    Hire Me
                    <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5"></span>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 hover:text-slate-900 transition-all flex items-center justify-center" href="#contact">
                    Contact Me
                </a>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-4">About Me</h2>
<div className="w-12 h-1 bg-brand-600 rounded-full mb-6"></div>
<p className="text-sm text-slate-500">Based in Lahore, Pakistan</p>
</div>
<div className="md:w-2/3 space-y-6 text-slate-600 leading-relaxed">
<p>
                        I am a dedicated Digital Marketer with a proven track record in driving growth for businesses. My expertise lies in crafting high-conversion campaigns across <strong>Meta (Facebook/Instagram)</strong> and <strong>Google Ads</strong>, ensuring every dollar spent yields measurable returns.
                    </p>
<p>
                        Beyond paid advertising, I possess a holistic skill set including <strong>Shopify store management</strong>, <strong>Email Marketing</strong> automation, and impactful <strong>Canva design</strong>. I bridge the gap between technical data analysis and creative visual communication to build comprehensive lead generation strategies.
                    </p>
<div className="flex flex-wrap gap-3 pt-4">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-sm">Meta Ads</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-sm">Google Ads</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-sm">Shopify</span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-700 shadow-sm">Lead Gen</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="skills">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Professional Skills</h2>
<p className="text-slate-500">A comprehensive toolkit for digital growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-brand-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:megaphone" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-6">Advertising &amp; Marketing</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Meta Ads (FB/Insta)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Google Ads (PPC)
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Email Marketing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Lead Generation
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Telemarketing
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-brand-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:palette" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-6">Design &amp; Editing</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Canva Editing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Ad Creative Design
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Photo Editing
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Basic Video Editing
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:border-brand-200 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5"></span>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-6">Tools &amp; Management</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Shopify Expert
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Microsoft Office
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Spreadsheets
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<span className="iconify text-brand-500" data-icon="lucide:check-circle-2" data-width="16"></span> Data Management
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="experience">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12">Work Experience</h2>
<div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="w-3 h-3 bg-brand-600 rounded-full"></span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-slate-900">Freelance Digital Marketer</h3>
<span className="text-xs font-medium text-brand-600 bg-brand-50 px-2 py-1 rounded">Aug 2023 – Dec 2024</span>
</div>
<p className="text-sm text-slate-500 mb-3">Self-Employed</p>
<ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside marker:text-brand-500">
<li>Managed end-to-end ad campaigns on Meta and Google Ads.</li>
<li>Designed high-converting creatives using Canva.</li>
<li>Delivered consistent lead generation results for clients.</li>
</ul>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="w-3 h-3 bg-slate-300 rounded-full"></span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-slate-900">Digital Marketing Intern</h3>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">ARFA KAREEM INDUSTRY</span>
</div>
<p className="text-sm text-slate-500 mb-3">Lahore</p>
<ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside marker:text-slate-400">
<li>Gained hands-on experience in digital marketing fundamentals.</li>
<li>Assisted in campaign setup and performance tracking.</li>
<li>Received High Grade certification for performance.</li>
</ul>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="w-3 h-3 bg-slate-300 rounded-full"></span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex justify-between items-start mb-2">
<h3 className="font-semibold text-slate-900">Telemarketing Executive</h3>
<span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded">Tricon Marketing</span>
</div>
<p className="text-sm text-slate-500 mb-3">UK Electricity &amp; Gas Campaign</p>
<ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside marker:text-slate-400">
<li>Executed cold calls to potential customers in the UK market.</li>
<li>Refined sales communication and negotiation skills.</li>
<li>Exceeded daily call targets and lead quotas.</li>
</ul>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
<span className="w-3 h-3 bg-slate-300 rounded-full"></span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-1">Truck Dispatching Assistant</h3>
<p className="text-sm text-slate-500 mb-3">Logistics Support</p>
<ul className="text-sm text-slate-600 space-y-1.5 list-disc list-inside marker:text-slate-400">
<li>Coordinated fleet movements and schedules.</li>
<li>Maintained accurate data logs and spreadsheets.</li>
<li>Managed communication between drivers and brokers.</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="education">
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8 flex items-center gap-3">
<span className="p-2 bg-brand-50 rounded-lg text-brand-600"><span className="iconify" data-icon="lucide:graduation-cap" data-width="20"></span></span>
                        Education
                    </h2>
<div className="space-y-6">
<div className="pl-4 border-l-2 border-slate-100">
<h3 className="text-lg font-medium text-slate-900">Superior College Pak Arab Campus</h3>
<p className="text-sm text-brand-600 mb-1">2023 – 2025</p>
<p className="text-sm text-slate-500">Subjects: Computer Science, Mathematics, Physics</p>
</div>
<div className="pl-4 border-l-2 border-slate-100">
<h3 className="text-lg font-medium text-slate-900">Aabroo Welfare Higher Secondary School</h3>
<p className="text-sm text-brand-600 mb-1">2021 – 2023</p>
<p className="text-sm text-slate-500">Matriculation</p>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-8 flex items-center gap-3">
<span className="p-2 bg-yellow-50 rounded-lg text-yellow-600"><span className="iconify" data-icon="lucide:trophy" data-width="20"></span></span>
                        Awards &amp; Certifications
                    </h2>
<div className="space-y-4">
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
<div className="mt-1 text-brand-600">
<span className="iconify" data-icon="lucide:award" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Digital Marketing Certificate</h3>
<p className="text-sm text-slate-500">Arfa Kareem Industry (High Grade)</p>
</div>
</div>
<div className="p-5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-4">
<div className="mt-1 text-brand-600">
<span className="iconify" data-icon="lucide:star" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-slate-900">Best Student of the Year</h3>
<p className="text-sm text-slate-500">Superior College (July 2024)</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Let's Work Together</h2>
<p className="text-slate-400">Available for freelance projects and full-time opportunities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="space-y-6 md:col-span-1">
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-white/5 border border-white/10">
<span className="iconify text-brand-400" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Location</p>
<p className="text-white">Lahore, Pakistan</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-white/5 border border-white/10">
<span className="iconify text-brand-400" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Phone</p>
<a className="text-white hover:text-brand-300 transition-colors" href="tel:03291042005">0329-1042005</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 rounded-lg bg-white/5 border border-white/10">
<span className="iconify text-brand-400" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Email</p>
<a className="text-white hover:text-brand-300 transition-colors" href="mailto:jazzixrp@gmail.com">jazzixrp@gmail.com</a>
</div>
</div>
</div>

<form className="md:col-span-2 space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Name</label>
<input className="w-full bg-slate-800/50 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Email</label>
<input className="w-full bg-slate-800/50 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600" placeholder="your@email.com" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-300">Message</label>
<textarea className="w-full bg-slate-800/50 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all placeholder:text-slate-600 resize-none" placeholder="How can I help you?" rows="4"></textarea>
</div>
<button className="w-full bg-brand-600 text-white font-medium h-11 rounded-lg hover:bg-brand-500 transition-colors flex items-center justify-center gap-2 mt-2" type="button">
                        Send Message
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-500 py-8 border-t border-white/5">
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
<p>© 2024 Jahanzaib Afzal. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Resume</a>
</div>
</div>
</footer>

    </>
  );
}
