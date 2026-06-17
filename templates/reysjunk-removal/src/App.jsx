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
      

<header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E5E5E5] shadow-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-3 shrink-0" href="#">

<div className="w-12 h-12 rounded-lg bg-[#E5E5E5]/50 border border-[#E5E5E5] flex items-center justify-center overflow-hidden">
<img alt="Your Logo" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4187c250-5eee-448b-ae4a-11f104a3b549_320w.png"/>
</div>
<span className="hidden sm:block text-lg font-medium text-[#111111] tracking-tight">Rey's Junk Removal</span>
</a>

<nav className="hidden md:flex space-x-8">
<a className="text-base text-[#333333] hover:text-[#C62828] transition-colors" href="#services">Services</a>
<a className="text-base text-[#333333] hover:text-[#C62828] transition-colors" href="#demolition">Demolition</a>
<a className="text-base text-[#333333] hover:text-[#C62828] transition-colors" href="#how-it-works">How it Works</a>
<a className="text-base text-[#333333] hover:text-[#C62828] transition-colors" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<div className="hidden lg:flex flex-col items-end mr-4">
<a className="text-base font-medium text-[#111111] tracking-tight hover:text-[#C62828] transition-colors" href="tel:9094911629">(909) 491-1629</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-[#C62828] text-white text-base rounded-xl hover:bg-[#8E1B1B] transition-all shadow-sm shadow-[#C62828]/20" href="tel:9094911629">
<i className="w-4 h-4" data-lucide="phone-call" strokeWidth="1.5"></i>
                        Call Now
                    </a>

<button className="md:hidden p-2 text-[#333333]">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</header>

<section className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C62828]/10 border border-[#C62828]/20 text-[#C62828] text-sm mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C62828] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#C62828]"></span>
</span>
                        Serving Salinas, CA &amp; Surrounding Areas
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-medium text-[#111111] leading-tight mb-6">
                        Junk Removal &amp; <br className="hidden sm:block"/>
<span className="text-[#C62828]">Demolition Services</span>
</h1>
<p className="text-xl text-[#333333] mb-8 max-w-xl leading-relaxed">
                        Rey’s Junk Removal &amp; Transportation is dedicated to providing reliable, fast, and affordable junk removal and demolition services. We handle jobs of all sizes—from small pickups to full property cleanouts.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-[#C62828] text-white text-lg rounded-xl hover:bg-[#8E1B1B] transition-all shadow-md shadow-[#C62828]/20" href="tel:9094911629">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                            Call Now
                        </a>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-[#111111] border border-[#E5E5E5] text-lg rounded-xl hover:bg-[#E5E5E5]/50 transition-all shadow-sm" href="#contact">
<i className="w-5 h-5" data-lucide="calculator" strokeWidth="1.5"></i>
                            Get Free Quote
                        </a>
</div>

<div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#E5E5E5]">
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="clock" strokeWidth="1.5"></i>
                            Available 24/7
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="zap" strokeWidth="1.5"></i>
                            Fast Response
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="tag" strokeWidth="1.5"></i>
                            Affordable Rates
                        </div>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-lg aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-[#111111]/5"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://res.cloudinary.com/diyzkopah/video/upload/v1776122629/hf_20260413_231510_4a26aab9-4b56-426f-8b88-7138814f0afc_im2hqt.mp4"></video>
<img alt="Rey's Junk Removal team" className="bg-[#E5E5E5] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#111111]/20 to-transparent pointer-events-none"></div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-[#C62828]/5 rounded-full blur-3xl pointer-events-none z-0"></div>
</section>

<section className="py-24 bg-[#E5E5E5]/30" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl tracking-tight font-medium text-[#111111] mb-4">Comprehensive Hauling &amp; Removal Services</h2>
<p className="text-lg text-[#333333]">Our team is committed to delivering high-quality service with efficiency and professionalism, ensuring customer satisfaction every time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-[#E5E5E5] hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#C62828]/10 text-[#C62828] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C62828] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111111] mb-2">Furniture &amp; Appliances</h3>
<p className="text-base text-[#333333] leading-relaxed">Fast removal of heavy furniture, mattresses, refrigerators, washers, dryers, and electronics recycling.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-[#E5E5E5] hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#C62828]/10 text-[#C62828] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C62828] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111111] mb-2">Property Cleanouts</h3>
<p className="text-base text-[#333333] leading-relaxed">Complete residential and commercial cleanouts. We handle all garbage and junk pickup, big or small.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-[#E5E5E5] hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#C62828]/10 text-[#C62828] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C62828] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111111] mb-2">Yard &amp; Storm Debris</h3>
<p className="text-base text-[#333333] leading-relaxed">Landscaping waste removal, storm debris cleanup, Christmas tree disposal, and soil removal.</p>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm ring-1 ring-[#E5E5E5] hover:shadow-md transition-shadow group">
<div className="w-12 h-12 bg-[#C62828]/10 text-[#C62828] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#C62828] group-hover:text-white transition-colors">
<i className="w-6 h-6" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#111111] mb-2">Demolition &amp; Construction</h3>
<p className="text-base text-[#333333] leading-relaxed">Full and partial structure demolition, interior/exterior teardowns, and construction debris removal.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] text-white overflow-hidden relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl tracking-tight font-medium mb-8 text-white">Why Choose Rey's?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#C62828]" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="text-lg font-medium tracking-tight mb-1">Available 24/7 &amp; Fast Response</h4>
<p className="text-base text-[#E5E5E5] leading-relaxed">We work around your schedule. Open 24 hours a day, 7 days a week with rapid response times when you need us most.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#C62828]" data-lucide="tag" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="text-lg font-medium tracking-tight mb-1">Affordable Pricing</h4>
<p className="text-base text-[#E5E5E5] leading-relaxed">We believe high-quality service shouldn't break the bank. You get honest, upfront, and competitive rates.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-[#333333] flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-[#C62828]" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="">
<h4 className="text-lg font-medium tracking-tight mb-1">Professional &amp; Dependable</h4>
<p className="text-base text-[#E5E5E5] leading-relaxed">No job is too big or small. From single pickups to heavy demolition, we handle everything with extreme professionalism.</p>
</div>
</div>
</div>
</div>

<div className="bg-[#333333]/80 p-8 sm:p-10 rounded-3xl ring-1 ring-white/10 backdrop-blur-sm" id="how-it-works">
<h2 className="text-2xl tracking-tight font-medium mb-8">How It Works</h2>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-[1.15rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#E5E5E5]/20 before:to-transparent">

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-[#C62828] text-white flex items-center justify-center font-medium text-base shrink-0 z-10 shadow-lg shadow-[#C62828]/30">1</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight mb-1">Contact Us 24/7</h4>
<p className="text-base text-[#E5E5E5]">Call (909) 491-1629 or fill out our online form to describe what you need removed or demolished.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-[#111111] border-2 border-[#333333] text-white flex items-center justify-center font-medium text-base shrink-0 z-10">2</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight mb-1">Get an Affordable Quote</h4>
<p className="text-base text-[#E5E5E5]">We provide a transparent estimate based on the scope of the cleanout or demolition project.</p>
</div>
</div>

<div className="relative flex items-start gap-6">
<div className="w-10 h-10 rounded-full bg-[#111111] border-2 border-[#333333] text-white flex items-center justify-center font-medium text-base shrink-0 z-10">3</div>
<div className="pt-1.5">
<h4 className="text-lg font-medium tracking-tight mb-1">We Handle the Rest</h4>
<p className="text-base text-[#E5E5E5]">Our crew executes the heavy lifting, teardown, loading, and disposal safely and efficiently.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]" id="demolition">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-[#E5E5E5]/30 rounded-3xl p-8 sm:p-12 border border-[#E5E5E5]">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#333333]">
<i className="w-8 h-8" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111111] mb-4">Complete Property Cleanouts</h3>
<p className="text-base text-[#333333] mb-6 leading-relaxed">
                        Reclaim your space. We handle everything from single mattress pickups to complete estate, garage, and office cleanouts. Say goodbye to clutter, garbage, and electronics waste.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Garbage &amp; Junk Pickup
                        </li>
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Mattress &amp; Furniture Disposal
                        </li>
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Appliance &amp; Electronics Recycling
                        </li>
</ul>
</div>

<div className="bg-[#E5E5E5]/30 rounded-3xl p-8 sm:p-12 border border-[#E5E5E5]">
<div className="w-14 h-14 bg-white rounded-2xl shadow-sm border border-[#E5E5E5] flex items-center justify-center mb-6 text-[#333333]">
<i className="w-8 h-8" data-lucide="building-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-medium text-[#111111] mb-4">Professional Demolition Services</h3>
<p className="text-base text-[#333333] mb-6 leading-relaxed">
                        Safe and controlled demolition solutions. Whether you need an interior wall taken down or a full structure removed, we have the tools and expertise to get it done properly.
                    </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Interior Demolition
                        </li>
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Exterior Surface &amp; Wall Demolition
                        </li>
<li className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="check-circle-2" strokeWidth="1.5"></i> Partial &amp; Full Structure Demolition
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E5E5E5]/30 border-y border-[#E5E5E5]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-7 space-y-12">
<div className="">
<h2 className="text-3xl tracking-tight font-medium text-[#111111] mb-4">Specialized Hauling Needs</h2>
<p className="text-lg text-[#333333]">Heavy, messy, or complicated? From soil removal to storm damage, we have the crew to handle it.</p>
</div>
<div className="space-y-10">

<div className="">
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-2">Construction Debris</h4>
<p className="text-base text-[#333333] leading-relaxed">Cleanup after renovations or our demolition services. We haul away drywall, wood scraps, flooring, and messy site debris promptly.</p>
</div>

<div className="">
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-2">Landscaping &amp; Soil Removal</h4>
<p className="text-base text-[#333333] leading-relaxed">Clearing out branches, brush, heavy soil removal, old fencing, and landscaping leftovers to give you your yard back.</p>
</div>

<div className="">
<h4 className="text-xl font-medium tracking-tight text-[#111111] mb-2">Storm Cleanup &amp; Seasonal</h4>
<p className="text-base text-[#333333] leading-relaxed">Rapid storm debris cleanup to make your property safe again, plus seasonal services like bulk Christmas tree disposal.</p>
</div>
</div>
</div>

<div className="lg:col-span-5 flex justify-center lg:justify-end lg:sticky lg:top-28">
<div className="w-full max-w-[540px]">
<iframe allowfullscreen="true" allowtransparency="true" className="instagram-media instagram-media-rendered" data-instgrm-payload-id="instagram-media-payload-0" frameborder="0" height="789" id="instagram-embed-0" scrolling="no" src="https://www.instagram.com/p/DTPMFjLD6eq/embed/?cr=1&amp;v=14&amp;wp=467&amp;rd=null&amp;rp=srcdoc#%7B%22ci%22%3A0%2C%22os%22%3A380%2C%22ls%22%3A43.10000014305115%2C%22le%22%3A49.200000047683716%7D" style={{background: 'white', maxWidth: '540px', width: 'calc(100% - 2px)', borderRadius: '3px', border: '1px solid rgb(219, 219, 219)', boxShadow: 'none', display: 'block', margin: '0px 0px 12px', minWidth: '326px', padding: '0px'}}></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#333333] text-white relative overflow-hidden">
<div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10 flex flex-col items-center">
<i className="w-12 h-12 text-[#C62828] mb-6" data-lucide="leaf" strokeWidth="1.5"></i>
<h2 className="text-3xl tracking-tight font-medium mb-4">Responsible Recycling &amp; Disposal</h2>
<p className="text-lg text-[#E5E5E5] leading-relaxed max-w-2xl mx-auto">
                We care about our community. We ensure that your appliances, electronics, and construction debris are properly processed, sorted, and recycled whenever possible to minimize landfill waste.
            </p>
</div>
</section>

<section className="bg-[#FDFBF7] pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-medium text-[#111111] mb-12 text-center">See the Difference</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="grid grid-cols-2 gap-2">
<div className="aspect-square flex bg-[#E5E5E5]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91375426-1a23-4a94-9eb4-90e40c6e0f53_800w.png)] bg-cover bg-center border-[#E5E5E5] border rounded-l-2xl relative items-center justify-center">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#111111] text-xs font-medium px-2 py-1 rounded-md shadow-sm">Before</span>
</div>
<div className="aspect-square flex bg-[#E5E5E5]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/923dd908-b353-48db-98b0-b55cabf5e490_800w.png)] bg-cover bg-center border-[#E5E5E5] border rounded-r-2xl relative items-center justify-center">
<span className="absolute top-3 left-3 bg-[#C62828]/90 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm">After</span>
</div>
<p className="col-span-2 text-center text-base text-[#333333] mt-2">Property Cleanout</p>
</div>

<div className="grid grid-cols-2 gap-2">
<div className="aspect-square flex bg-[#E5E5E5]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59377ebe-5736-4635-bd41-df2908deb7ca_800w.jpg)] bg-cover bg-center border-[#E5E5E5] border rounded-l-2xl relative items-center justify-center">
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[#111111] text-xs font-medium px-2 py-1 rounded-md shadow-sm">Before</span>
</div>
<div className="aspect-square flex bg-[#E5E5E5]/50 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/89c96035-9282-4b49-a3b7-9b7075d4e676_800w.jpg)] bg-cover bg-center border-[#E5E5E5] border rounded-r-2xl relative items-center justify-center">
<span className="absolute top-3 left-3 bg-[#C62828]/90 backdrop-blur text-white text-xs font-medium px-2 py-1 rounded-md shadow-sm">After</span>
</div>
<p className="col-span-2 text-center text-base text-[#333333] mt-2">Structure Demolition &amp; Debris Removal</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#E5E5E5]/30 border-t border-[#E5E5E5]" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-medium text-[#111111] mb-12 text-center">Trusted by Local Residents</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E5E5E5]">
<div className="flex text-[#C62828] mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-[#333333] mb-6 italic">"Rey's team was incredibly fast. I called them late for a pickup of an old couch and fridge, and they were extremely accommodating. Great price too!"</p>
<div className="text-[#111111] text-base">- Sarah M., Salinas</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E5E5E5]">
<div className="flex text-[#C62828] mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-[#333333] mb-6 italic">"We needed a partial demolition on our property and a mountain of debris removed. These guys knocked it out safely and left the area spotless. Highly recommend!"</p>
<div className="text-[#111111] text-base">- David R., Monterey</div>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-[#E5E5E5]">
<div className="flex text-[#C62828] mb-4 gap-1">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-base text-[#333333] mb-6 italic">"Friendly crew and straightforward pricing. They helped us clear out landscaping waste and heavy soil, taking a lot of stress off our shoulders."</p>
<div className="text-[#111111] text-base">- Jessica T., Seaside</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFBF7]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl tracking-tight font-medium text-[#111111] mb-8">Frequently Asked Questions</h2>
<div className="space-y-4">
<div className="border-b border-[#E5E5E5] pb-4">
<h4 className="text-lg font-medium text-[#111111] mb-2">Are you really available 24/7?</h4>
<p className="text-base text-[#333333]">Yes, we are open 24 hours a day, 7 days a week. We pride ourselves on fast response times whenever you need service.</p>
</div>
<div className="border-b border-[#E5E5E5] pb-4">
<h4 className="text-lg font-medium text-[#111111] mb-2">What kind of demolition do you do?</h4>
<p className="text-base text-[#333333]">We handle everything from interior tear-downs and exterior wall removal to partial and full structure demolitions.</p>
</div>
<div className="border-b border-[#E5E5E5] pb-4">
<h4 className="text-lg font-medium text-[#111111] mb-2">Do you recycle electronics and appliances?</h4>
<p className="text-base text-[#333333]">Absolutely. We properly dispose of and recycle e-waste, refrigerators, washers, and other large appliances in compliance with local regulations.</p>
</div>
</div>
</div>

<div className="bg-[#E5E5E5]/30 p-8 sm:p-10 rounded-3xl border border-[#E5E5E5]">
<h2 className="text-2xl tracking-tight font-medium text-[#111111] mb-6">Service Areas</h2>
<p className="text-base text-[#333333] mb-6">Based in Salinas, CA, we proudly serve the entire region and surrounding communities, including:</p>
<div className="grid grid-cols-2 gap-y-3 gap-x-6">
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Salinas
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Monterey
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Seaside
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Marina
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Carmel
                        </div>
<div className="flex items-center gap-2 text-base text-[#333333]">
<i className="w-5 h-5 text-[#C62828]" data-lucide="map-pin" strokeWidth="1.5"></i> Watsonville
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#111111] text-white relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl tracking-tight font-medium mb-2">Request a Free Quote</h2>
<p className="text-base text-[#E5E5E5] mb-8">Fill out the form below or call us directly. We respond quickly, 24/7.</p>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-sm text-[#E5E5E5]">Full Name</label>
<input className="w-full px-4 py-3 bg-[#333333] border border-[#333333] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#C62828]/50 focus:border-[#C62828] transition-all text-white placeholder:text-[#E5E5E5]/50" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-sm text-[#E5E5E5]">Phone Number</label>
<input className="w-full px-4 py-3 bg-[#333333] border border-[#333333] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#C62828]/50 focus:border-[#C62828] transition-all text-white placeholder:text-[#E5E5E5]/50" placeholder="(909) 555-0123" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm text-[#E5E5E5]">Email Address</label>
<input className="w-full px-4 py-3 bg-[#333333] border border-[#333333] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#C62828]/50 focus:border-[#C62828] transition-all text-white placeholder:text-[#E5E5E5]/50" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-sm text-[#E5E5E5]">Service Needed</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-[#333333] border border-[#333333] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#C62828]/50 focus:border-[#C62828] transition-all text-white appearance-none pr-10">
<option>General Junk Pickup</option>
<option>Demolition Services</option>
<option>Property Cleanout</option>
<option>Furniture/Appliance Removal</option>
<option>Construction Debris</option>
<option>Yard/Storm Debris</option>
<option>Other</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#E5E5E5]">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-sm text-[#E5E5E5]">Message (Optional)</label>
<textarea className="w-full px-4 py-3 bg-[#333333] border border-[#333333] rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-[#C62828]/50 focus:border-[#C62828] transition-all text-white placeholder:text-[#E5E5E5]/50 resize-none" placeholder="Briefly describe your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-[#C62828] text-white text-lg font-medium rounded-xl hover:bg-[#8E1B1B] transition-colors shadow-lg shadow-[#C62828]/20" type="button">
                            Submit Request
                        </button>
</form>
</div>

<div className="space-y-8">

<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-[#333333]/50 p-6 rounded-2xl border border-[#333333] backdrop-blur-sm">
<i className="w-6 h-6 text-[#C62828] mb-3" data-lucide="phone-call" strokeWidth="1.5"></i>
<h4 className="text-base font-medium mb-1">Call Us 24/7</h4>
<a className="text-lg hover:text-[#C62828] transition-colors" href="tel:9094911629">(909) 491-1629</a>
</div>
<div className="bg-[#333333]/50 p-6 rounded-2xl border border-[#333333] backdrop-blur-sm">
<i className="w-6 h-6 text-[#C62828] mb-3" data-lucide="map-pin" strokeWidth="1.5"></i>
<h4 className="text-base font-medium mb-1">Service Area</h4>
<p className="text-base text-[#E5E5E5] leading-relaxed">Salinas, CA<br/>&amp; Surrounding Areas</p>
</div>
</div>

<div className="bg-[#333333]/50 p-6 sm:p-8 rounded-2xl border border-[#333333] backdrop-blur-sm">
<h4 className="text-xl font-medium tracking-tight mb-4 flex items-center gap-2">
<i className="w-5 h-5 text-[#C62828]" data-lucide="clock" strokeWidth="1.5"></i> Hours of Operation
                        </h4>
<ul className="space-y-2 text-base text-[#E5E5E5]">
<li className="flex justify-between items-center"><span className="text-[#E5E5E5]/70">Monday</span> <span>Open 24 Hours</span></li>
<li className="flex justify-between items-center"><span className="text-[#E5E5E5]/70">Tuesday</span> <span>Open 24 Hours</span></li>
<li className="flex justify-between items-center"><span className="text-[#E5E5E5]/70">Wednesday</span> <span>Open 24 Hours</span></li>
</ul>
</div>

<div className="rounded-2xl overflow-hidden border border-[#333333] shadow-xl">
<iframe allowfullscreen="" height="250" loading="lazy" src="https://www.google.com/maps?q=Salinas,California&amp;output=embed" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#C62828] text-white text-center">
<div className="max-w-4xl mx-auto px-4">
<h2 className="text-3xl sm:text-4xl tracking-tight font-medium mb-6">Need hauling or demolition right away?</h2>
<p className="text-xl text-[#E5E5E5] mb-8">Call today for a fast quote. We are available 24/7 to handle jobs of all sizes.</p>
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-[#111111] text-lg font-medium rounded-xl hover:bg-[#E5E5E5] transition-all shadow-lg" href="tel:9094911629">
                Call (909) 491-1629 Now
            </a>
</div>
</section>

<footer className="bg-[#111111] pt-16 pb-8 border-t border-[#333333] text-[#E5E5E5]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="bg-[#333333] text-[#E5E5E5] rounded-lg p-1 flex items-center justify-center">
<i className="w-4 h-4" data-lucide="trash-2" strokeWidth="1.5"></i>
</div>
<span className="text-lg tracking-tight font-medium text-white uppercase">Rey's Junk Removal</span>
</a>
<p className="text-base leading-relaxed mb-6">Rey’s Junk Removal &amp; Transportation is dedicated to providing reliable, fast, and affordable junk removal and demolition services for jobs of all sizes.</p>
</div>

<div>
<h4 className="text-white font-medium mb-6 tracking-tight text-lg">Quick Links</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-white transition-colors" href="#services">Hauling Services</a></li>
<li><a className="hover:text-white transition-colors" href="#demolition">Demolition</a></li>
<li><a className="hover:text-white transition-colors" href="#how-it-works">How It Works</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6 tracking-tight text-lg">Contact Information</h4>
<ul className="space-y-3 text-base">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#E5E5E5]/70 mt-0.5" data-lucide="phone" strokeWidth="1.5"></i>
<a className="hover:text-white transition-colors" href="tel:9094911629">(909) 491-1629</a>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#E5E5E5]/70 mt-0.5" data-lucide="clock" strokeWidth="1.5"></i>
<span>Available 24/7</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-[#E5E5E5]/70 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span>Salinas, CA<br/>and Surrounding Areas</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#333333] flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#E5E5E5]/70">
<p>© 2023 Rey’s Junk Removal &amp; Transportation. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
