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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#C9145A08_80%,#00A88F10_100%)]"></div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="flex flex-col leading-none font-semibold tracking-tight text-3xl" href="#">
<span className="text-[#C9145A]">Go</span>
<span className="text-[#00A88F]">Digital</span>
</a>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#pillars">Pillars</a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#tools">Digital Tools</a>
<a className="hover:text-slate-900 transition-colors text-base font-medium text-slate-500" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex hover:text-slate-900 transition-colors text-base font-medium text-slate-600" href="https://godigital.tz" target="_blank">godigital.tz</a>
<a className="inline-flex items-center justify-center hover:bg-[#00927c] transition-all hover:shadow-md text-base font-medium text-white bg-[#00A88F] rounded-full pt-3 pr-6 pb-3 pl-6 shadow-sm" href="#contact">
                    Work With Us
                </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-24 relative">
<div className="text-center max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-slate-900 mb-8 max-w-5xl mx-auto leading-tight">
                Ushering the Next Era of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C9145A] to-[#00A88F]">Doing Business.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-500 font-normal max-w-3xl mx-auto mb-12 leading-relaxed">
                We are a local boutique tech &amp; consulting firm providing your business with cutting edge ideas, best industry practices, and tech solutions to help you navigate the digital age.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm" href="#services">
                    Our Services
                    <iconify-icon className="text-xl ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all" href="#contact">
                    Contact Us
                    <iconify-icon className="text-xl ml-2" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50/50 py-16">
<div className="max-w-4xl mx-auto px-6 text-center">
<p className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 leading-relaxed">
                "How well positioned is your business to take advantage of the digital economy?"
            </p>
<p className="text-lg text-slate-500 mt-6">
                The world is shifting from the 3rd to the 4th Industrial Revolution. We help businesses embrace the digital age and <strong>Go Digital</strong>.
            </p>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50 rounded-t-[3rem] border-t border-slate-200" id="pillars">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 flex flex-col md:flex-row gap-8 justify-between items-end">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Our Digital Transformation Pillars</h2>
<p className="text-xl text-slate-500 font-normal">
                        Guiding you on your digital transformation journey based on your unique needs.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">

<div className="md:col-span-2 md:row-span-2 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between overflow-hidden relative group">
<div className="relative z-10">
<iconify-icon className="text-4xl text-[#00A88F] mb-6" icon="solar:server-square-linear"></iconify-icon>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">IT Uplift</h3>
<p className="text-lg text-slate-500 font-normal mb-6">Modernised IT systems and software architectures designed for the future.</p>
<ul className="space-y-3 text-base text-slate-600 font-medium">
<li className="flex items-center gap-2"><iconify-icon className="text-[#00A88F]" icon="solar:check-circle-linear"></iconify-icon> DevOps Teams</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00A88F]" icon="solar:check-circle-linear"></iconify-icon> IT Architects</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#00A88F]" icon="solar:check-circle-linear"></iconify-icon> Change Management</li>
</ul>
</div>
<div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gradient-to-br from-[#00A88F]/10 to-transparent rounded-full blur-3xl group-hover:bg-[#00A88F]/20 transition-colors duration-500"></div>
</div>

<div className="md:col-span-2 rounded-3xl bg-slate-900 p-8 flex items-center justify-between relative overflow-hidden group">
<div className="relative z-10">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-3">Digitizing Operations</h3>
<p className="text-lg text-slate-400 font-normal max-w-sm">Optimizing existing business operations through data analytics and flexible platforms for maximum efficiency and cost reduction.</p>
</div>
<div className="w-16 h-16 rounded-full bg-white/10 shrink-0 flex items-center justify-center border border-white/20">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:pie-chart-2-linear"></iconify-icon>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-[#C9145A] p-8 flex flex-col justify-between relative overflow-hidden text-white">
<iconify-icon className="text-4xl text-white/80 mb-6" icon="solar:cart-large-linear"></iconify-icon>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Digital Marketing</h3>
<p className="text-base text-white/80 font-normal">Digital tools for e-commerce, marketing, and acquisition.</p>
</div>
</div>

<div className="md:col-span-1 rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between">
<iconify-icon className="text-4xl text-[#00A88F] mb-6" icon="solar:lightbulb-minimalistic-linear"></iconify-icon>
<div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">New Ventures</h3>
<p className="text-base text-slate-500 font-normal">Creating new business models and innovation processes.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white border-b border-slate-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Our Services</h2>
<p className="text-xl text-slate-500 font-normal max-w-2xl mx-auto">
                    We offer end-to-end expertise depending on your needs and where you are positioned on your digital transformation journey.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#00A88F]" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Web &amp; Software Development</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Custom software, mobile apps, e-commerce platforms, UI/UX design, cloud-based solutions, API integrations, and legacy system modernization.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:megaphone-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Digital Marketing</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Maximizing online presence with digital strategy, local SEO, PPC advertising, social media marketing, conversion rate optimization, and data analytics.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-slate-800" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Business Setup &amp; Licensing</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Guidance for entrepreneurs in Tanzania. Legal structures, registration, business planning, financial guidance, taxation, compliance, and market research.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#00A88F]" icon="solar:palette-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Branding &amp; Digital Assets</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Brand strategy development, guidelines, logo design, content creation, brand refresh, crisis communication, and securing your digital assets.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">GTM Strategy &amp; Execution</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Bringing products to market effectively. Market analysis, entry strategies, pricing models, demand generation, and sales channel development.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-slate-800" icon="solar:settings-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Business Tooling &amp; IT Support</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Needs assessment, workflow automation, CRM/ERP implementation, data management, collaboration tools, cloud adoption, and ongoing support.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-50" id="tools">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16 md:mb-24 text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[#00A88F] mb-6">
<iconify-icon className="text-xl" icon="solar:widget-linear"></iconify-icon>
<span className="text-base font-medium tracking-tight">Our Proprietary Platform</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Simple Digital Tools for SMEs</h2>
<p className="text-xl text-slate-500 font-normal max-w-2xl mx-auto">
                    Manage your sales, inventory, and business operations in one single, practical platform designed for local businesses.
                </p>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Moving past notebooks and spreadsheets.
                    </h3>
<p className="text-slate-500 text-lg leading-relaxed mb-8 font-normal">
                        Most businesses today rely on fragmented, manual processes. Tracking stock in notebooks, calculating sales on paper, and lacking real visibility into daily operations makes growth incredibly difficult.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-base text-slate-600 font-medium">
<iconify-icon className="text-slate-400 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Lost records and scattered spreadsheets
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600 font-medium">
<iconify-icon className="text-slate-400 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            Struggling to track exact stock levels
                        </li>
<li className="flex items-center gap-3 text-base text-slate-600 font-medium">
<iconify-icon className="text-slate-400 text-xl shrink-0" icon="solar:close-circle-linear"></iconify-icon>
                            No clear overview of overall business health
                        </li>
</ul>
</div>
<div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
<div className="w-14 h-14 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-center mb-8">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:layers-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                        What we do
                    </h3>
<p className="text-slate-500 text-base leading-relaxed mb-8 font-normal">
                        We build simple tools that help businesses manage their day-to-day operations digitally. Think of it as a lightweight, practical ERP designed specifically for local SMEs.
                    </p>
<p className="text-slate-900 font-medium text-base mb-6">
                        One simple platform to:
                    </p>
<ul className="grid grid-cols-2 gap-y-4 gap-x-6">
<li className="flex items-center gap-2 text-base text-slate-600 font-medium">
<iconify-icon className="text-[#00A88F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Record sales
                        </li>
<li className="flex items-center gap-2 text-base text-slate-600 font-medium">
<iconify-icon className="text-[#00A88F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Track inventory
                        </li>
<li className="flex items-center gap-2 text-base text-slate-600 font-medium">
<iconify-icon className="text-[#00A88F] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                            Monitor cash flow
                        </li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#00A88F]" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Sales Tracking</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Easily record every transaction. Keep an accurate history of your daily, weekly, and monthly sales volume.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:box-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Inventory Management</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Know exactly what you have in stock. Get insights into low-stock items before you run out completely.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-slate-800" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Financial Overview</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Monitor cash coming in and going out. Maintain a clear view of your operational margins and cash flow.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 md:col-span-1 lg:col-span-1">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#00A88F]" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Business Reporting</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed">
                        Generate clean, simple reports. Understand historical trends to make better purchasing decisions.
                    </p>
</div>

<div className="group relative p-8 rounded-3xl border border-slate-200 bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 md:col-span-2 lg:col-span-2">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-3xl text-[#C9145A]" icon="solar:widget-5-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-4">Simple Dashboard</h3>
<p className="text-base text-slate-500 font-normal leading-relaxed max-w-xl">
                        A centralized, non-technical dashboard that gives you immediate visibility into your business at a glance. Everything you need, nothing you don't.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[#00A88F]/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-16 items-center justify-between">
<div className="flex-1 text-center lg:text-left">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6">Ready to go digital?</h2>
<p className="text-xl text-slate-300 font-normal mb-10 max-w-lg mx-auto lg:mx-0">
                    Let's discuss how we can help transform your ideas into reality and position your business for the 4th Industrial Revolution.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-200" href="mailto:business@godigital.tz">
                        Email Us
                        <iconify-icon className="text-xl ml-2" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 lg:p-10">
<h3 className="text-2xl font-medium tracking-tight mb-8">Contact Information</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-[#00A88F]" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm text-slate-400 mb-1">Email</p>
<a className="text-lg font-medium hover:text-[#00A88F] transition-colors" href="mailto:business@godigital.tz">business@godigital.tz</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl text-slate-300" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm text-slate-400 mb-1">Address</p>
<p className="text-lg font-medium leading-relaxed text-slate-200">
                                1st Floor Habconsult,<br/>
                                Hubert Kariuki St,<br/>
                                Dar es Salaam, Tanzania
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 lg:col-span-2">
<a className="flex flex-col leading-none font-semibold tracking-tight text-2xl mb-6" href="#">
<span className="text-[#C9145A]">Go</span>
<span className="text-[#00A88F]">Digital</span>
</a>
<p className="text-base text-slate-500 font-normal max-w-xs mb-6">
                        A local boutique tech &amp; consulting firm specializing in tech solutions and industry best practices.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-[#00A88F] transition-all" href="#">
<iconify-icon className="text-xl" height="20" icon="solar:link-linear" style={{color: 'rgb(0, 168, 143)'}} width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-[#00A88F] transition-all" href="#">
<svg className="text-xl" data-icon-set="solar" data-solar="global-linear" height="20" style={{color: 'rgb(0, 168, 143)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12a10 10 0 1 1-20.001 0A10 10 0 0 1 22 12Z"></path><path d="M16 12c0 1.313-.104 2.614-.305 3.827c-.2 1.213-.495 2.315-.867 3.244c-.371.929-.812 1.665-1.297 2.168c-.486.502-1.006.761-1.531.761s-1.045-.259-1.53-.761c-.486-.503-.927-1.24-1.298-2.168c-.372-.929-.667-2.03-.868-3.244A23.6 23.6 0 0 1 8 12c0-1.313.103-2.614.304-3.827s.496-2.315.868-3.244c.371-.929.812-1.665 1.297-2.168C10.955 2.26 11.475 2 12 2s1.045.259 1.53.761c.486.503.927 1.24 1.298 2.168c.372.929.667 2.03.867 3.244C15.897 9.386 16 10.687 16 12Z"></path><path d="M2 12h20" strokeLinecap="round"></path></g></svg>
</a>
</div>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-6 tracking-tight">Services &amp; Tools</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-[#00A88F] transition-colors" href="#services">Software Dev</a></li>
<li><a className="text-base text-slate-500 hover:text-[#00A88F] transition-colors" href="#services">Digital Marketing</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-[#00A88F] transition-colors" href="#services">Business Setup</a></li>
</ul>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900 mb-6 tracking-tight">Pillars</h4>
<ul className="space-y-4">
<li className=""><a className="text-base text-slate-500 hover:text-[#C9145A] transition-colors" href="#pillars">IT Uplift</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-[#C9145A] transition-colors" href="#pillars">Digitizing Ops</a></li>
<li className=""><a className="text-base text-slate-500 hover:text-[#C9145A] transition-colors" href="#pillars">Digital Marketing</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900 mb-6 tracking-tight">Company</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="https://godigital.tz" target="_blank">Website</a></li>
<li><a className="text-base text-slate-500 hover:text-slate-900 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-400 font-normal">
                    © 2026 Go Digital. All rights reserved.
                </p>
<div className="flex items-center gap-2 text-sm text-slate-400 font-normal">
<span>godigital.tz</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
