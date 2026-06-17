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
      
<header className="w-full absolute top-0 left-0 z-50">
<div className="md:py-8 flex max-w-7xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<a className="text-xl md:text-2xl font-medium tracking-tight text-white" href="#">
          Padel 360
        </a>
<nav className="hidden md:flex items-center gap-8">
<a className="transition-colors hover:text-white text-base font-medium text-white/80" href="#">
            Home
          </a>
<a className="transition-colors hover:text-white text-base font-medium text-white/80" href="/about-us">
            About Us
          </a>
<a className="text-base font-medium tracking-tight text-[#1A1A1A] bg-white border px-6 py-2.5 rounded-full hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] transition-all shadow-sm border-transparent" href="#">
            Get a Quote
          </a>
</nav>
<button className="md:hidden text-2xl flex items-center text-white">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</header>

<section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Padel Court Background" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/50"></div>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center pt-24">
<div className="inline-flex items-center justify-center gap-2 text-sm text-[#D4F859] mb-6 font-medium tracking-wide uppercase">
<iconify-icon className="text-lg" icon="solar:medal-ribbon-linear"></iconify-icon>
          One partner. Zero guesswork.
        </div>
<h1 className="text-5xl md:text-7xl lg:text-[6rem] tracking-tight leading-[1.05] text-white mb-8 font-medium">
          Building the Future of
          <br/>
<em className="font-medium italic text-[#D4F859]">Australian Padel.</em>
</h1>
<p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
          High-performance court construction and strategic advisory for clubs,
          developers, and private venues. We provide the technical expertise to
          help you bring Padel to your community.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="flex items-center gap-3 group cursor-pointer bg-[#D4F859] px-8 py-4 rounded-full hover:bg-white transition-colors shadow-lg">
<span className="text-base font-medium tracking-tight text-[#1A1A1A]">
              Get a Project Estimate
            </span>
<iconify-icon className="text-xl text-[#1A1A1A] group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="flex items-center gap-2 text-white/90 hover:text-white transition-colors cursor-pointer group" href="#process">
<span className="text-base font-medium">Explore Our Courts</span>
<iconify-icon className="text-lg group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 border-t border-b border-[#E5E5E5]/50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
<h3 className="text-sm font-medium text-[#737373] tracking-[0.1em] uppercase shrink-0">
        Partners &amp; Suppliers
      </h3>
<div className="flex flex-wrap items-center gap-8 md:gap-12 opacity-60">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:box-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium text-[#1A1A1A]">
            Gimpadel Court Manufacturer
          </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium text-[#1A1A1A]">
            Australian Padel Federation
          </span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:crown-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium text-[#1A1A1A]">
            Adidas Padel Courts
          </span>
</div>
<div className="flex items-center gap-2 hidden lg:flex">
<iconify-icon className="text-xl" icon="solar:earth-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium text-[#1A1A1A]">
            Spanish-manufactured courts
          </span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="bg-[#1A1A1A] rounded-[2.5rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 shadow-xl">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#D4F859]/10 rounded-bl-full -z-0 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-tr-full -z-0 pointer-events-none"></div>
<div className="w-full lg:max-w-2xl z-10">
<span className="text-sm text-[#D4F859] tracking-[0.1em] uppercase mb-4 block font-medium">
            Our Mission
          </span>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight text-white mb-6 leading-[1.05]">
            Padel is taking over.
            <br className="hidden sm:block"/>
<em className="italic font-medium text-[#D4F859]">
              Australia is next.
            </em>
</h2>
<p className="text-xl text-[#A3A3A3] leading-relaxed font-normal mb-10">
            Padel is now played in 90+ countries. We're on a mission to build
            the national infrastructure that brings this highly social sport to
            every community. Australia is tracking 5–7 years behind Europe — the
            window for first-mover advantage is open right now.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="flex items-center justify-center gap-3 group cursor-pointer bg-[#D4F859] text-[#1A1A1A] px-8 py-4 rounded-full hover:bg-white transition-colors">
<span className="text-base font-medium tracking-tight">
                Start Your Project
              </span>
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="w-full lg:w-auto grid grid-cols-2 gap-4 z-10 shrink-0">
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
<div className="text-4xl font-medium tracking-tight text-white mb-1">
              90+
            </div>
<div className="text-sm text-[#A3A3A3] font-normal">
              Countries Played
            </div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
<div className="text-4xl font-medium tracking-tight text-white mb-1">
              25M
            </div>
<div className="text-sm text-[#A3A3A3] font-normal">Active Players</div>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
<div className="text-4xl font-medium tracking-tight text-white mb-1">
              200%
            </div>
<div className="text-sm text-[#A3A3A3] font-normal">YoY Growth</div>
</div>
<div className="bg-[#D4F859] p-6 rounded-2xl flex flex-col justify-center items-start shadow-[0_8px_30px_rgb(212,248,89,0.2)]">
<iconify-icon className="text-4xl text-[#1A1A1A] mb-3" icon="solar:bolt-circle-linear"></iconify-icon>
<div className="text-base font-medium text-[#1A1A1A] tracking-tight leading-tight">
              First-Mover
              <br/>
              Advantage
            </div>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-[#E5E5E5]/50 py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-3xl">
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
            The Padel 360 Edge
          </span>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-[#1A1A1A] mb-8">
            Precision Engineering for
            <em className="italic font-medium">Australian Conditions</em>
</h2>
<p className="text-xl text-[#737373] leading-relaxed font-normal">
            Focus on being a specialist, not a giant corporation. We don't just
            supply courts; we ensure they are built to last. Our focus is on
            structural integrity, premium materials, and providing the guidance
            you need to get your project off the ground.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-[2rem] bg-[#F6F6F4] border border-[#E5E5E5]/50 hover:shadow-sm transition-shadow">
<iconify-icon className="text-3xl text-[#1A1A1A] mb-6" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-3">
              Premium Materials
            </h3>
<p className="text-[#737373] leading-relaxed font-normal">
              Reinforced galvanized steel and high-impact tempered glass
              designed for durability.
            </p>
</div>
<div className="p-8 rounded-[2rem] bg-[#F6F6F4] border border-[#E5E5E5]/50 hover:shadow-sm transition-shadow">
<iconify-icon className="text-3xl text-[#1A1A1A] mb-6" icon="solar:hammer-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-3">
              Specialist Installation
            </h3>
<p className="text-[#737373] leading-relaxed font-normal">
              Expert assembly crews focused on court leveling and playability.
            </p>
</div>
<div className="p-8 rounded-[2rem] bg-[#D4F859] border border-[#D4F859] shadow-[0_8px_30px_rgb(212,248,89,0.2)]">
<iconify-icon className="text-3xl text-[#1A1A1A] mb-6" icon="solar:map-linear"></iconify-icon>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-3">
              Development Roadmap
            </h3>
<p className="text-[#1A1A1A]/80 leading-relaxed font-normal">
              We share the "Padel 360 Blueprint" to help guide you through the
              planning and operational stages.
            </p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="text-center md:text-left mb-16 lg:mb-20">
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
          Our Services
        </span>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.1] text-[#1A1A1A] mb-6 max-w-4xl">
          Comprehensive support for your
          <em className="italic font-medium">Padel venue.</em>
</h2>
<p className="text-xl text-[#737373] leading-relaxed font-normal max-w-2xl">
          We provide the technical expertise, physical assembly, and strategic
          guidance you need to successfully bring Padel to your community.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="group bg-white p-8 lg:p-10 rounded-[2rem] border border-[#E5E5E5]/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-[#D4F859] transition-colors h-full flex flex-col cursor-default">
<div className="w-12 h-12 rounded-full bg-[#F6F6F4] flex items-center justify-center mb-8 shrink-0">
<span className="text-lg text-[#1A1A1A] font-medium tracking-tight">
              01
            </span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            Court Construction
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal flex-grow">
            The core of what we do. From the first bolt to the final turf
            brushing, we handle the physical assembly of world-class Padel
            environments.
          </p>
</div>

<div className="group bg-[#1A1A1A] p-8 lg:p-10 rounded-[2rem] border border-[#1A1A1A] shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full flex flex-col relative overflow-hidden cursor-default">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#D4F859]/10 rounded-bl-[100px] -z-0"></div>
<div className="w-12 h-12 rounded-full bg-[#262626] flex items-center justify-center mb-8 z-10 text-[#D4F859] shrink-0">
<span className="text-lg font-medium tracking-tight">02</span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4 z-10">
            Development Advisory
          </h3>
<p className="text-lg text-[#A3A3A3] leading-relaxed font-normal flex-grow z-10">
            Building a club involves many moving parts. We provide the technical
            data, site requirements, and court layouts you need to support your
            planning and permit applications.
          </p>
</div>

<div className="group bg-white p-8 lg:p-10 rounded-[2rem] border border-[#E5E5E5]/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-[#D4F859] transition-colors h-full flex flex-col cursor-default">
<div className="w-12 h-12 rounded-full bg-[#F6F6F4] flex items-center justify-center mb-8 shrink-0">
<span className="text-lg text-[#1A1A1A] font-medium tracking-tight">
              03
            </span>
</div>
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            Strategic Consulting
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal flex-grow">
            Ready to launch? We advise on club flow, court booking integrations,
            and revenue models to help you maximize your footprint.
          </p>
</div>
</div>
<div className="mt-12 md:mt-16 flex justify-center md:justify-start">
<button className="flex items-center gap-4 group cursor-pointer border border-[#E5E5E5] bg-white px-8 py-4 rounded-full hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-all shadow-sm">
<span className="text-base font-medium tracking-tight">
            Discuss your project
          </span>
<iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#E5E5E5]/50">
<div className="mb-16 max-w-3xl">
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
          Clubs We've Built
        </span>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-[#1A1A1A] mb-8">
          Built from the
          <em className="italic font-medium">ground up.</em>
</h2>
<p className="text-xl text-[#737373] leading-relaxed font-normal">
          We don't just supply materials; we construct venues. From civil
          engineering and structural framing to the grand opening of
          high-traffic clubs, our precision ensures longevity and premium player
          experience.
        </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="w-full h-72 md:h-80 rounded-[2rem] overflow-hidden mb-6 bg-white border border-[#E5E5E5]/50 shadow-sm">
<img alt="Site Groundwork" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-medium text-[#1A1A1A] bg-[#E5E5E5] px-3 py-1 rounded-full">
              Phase 1
            </span>
<span className="text-xs font-medium text-[#737373] uppercase tracking-wider">
              Civil &amp; Groundwork
            </span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-2">
            Structural Foundation
          </h3>
<p className="text-[#737373] font-normal leading-relaxed text-sm">
            Precision levelling, drainage installation, and reinforced concrete
            footings specifically engineered for Australian soils and
            conditions.
          </p>
</div>

<div className="group cursor-pointer">
<div className="w-full h-72 md:h-80 rounded-[2rem] overflow-hidden mb-6 bg-white border border-[#E5E5E5]/50 shadow-sm">
<img alt="Structural Steel" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-medium text-[#1A1A1A] bg-[#E5E5E5] px-3 py-1 rounded-full">
              Phase 2
            </span>
<span className="text-xs font-medium text-[#737373] uppercase tracking-wider">
              Steel &amp; Glass
            </span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-2">
            Frame Installation
          </h3>
<p className="text-[#737373] font-normal leading-relaxed text-sm">
            Erecting imported Spanish galvanised steel frames paired with 12mm
            tempered safety glass, securing the court's integrity and bounce
            dynamics.
          </p>
</div>

<div className="group cursor-pointer md:col-span-2 lg:col-span-1">
<div className="w-full h-72 md:h-80 rounded-[2rem] overflow-hidden mb-6 bg-[#D4F859] border border-[#D4F859] shadow-[0_8px_30px_rgb(212,248,89,0.2)]">
<img alt="Finished Padel Club" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-90 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3">
<span className="text-xs font-medium text-[#1A1A1A] bg-[#D4F859] px-3 py-1 rounded-full shadow-sm">
              Completed
            </span>
<span className="text-xs font-medium text-[#737373] uppercase tracking-wider">
              Turnkey Venue
            </span>
</div>
<h3 className="text-xl font-medium tracking-tight text-[#1A1A1A] mb-2">
            Belconnen Padel Club
          </h3>
<p className="text-[#737373] font-normal leading-relaxed text-sm">
            A fully operational 4-court venue, complete with premium texturised
            turf, LED lighting systems, and custom club branding.
          </p>
</div>
</div>
</section>

<section className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="process">
<div className="bg-white rounded-[2.5rem] lg:rounded-[3rem] px-6 py-20 lg:p-24 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#E5E5E5]/30">
<div className="text-center mb-16 md:mb-24">
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
            Our Process
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] mb-6">
            Five stages. One team.
            <em className="italic font-medium">No surprises.</em>
</h2>
<p className="text-xl text-[#737373] max-w-2xl mx-auto font-normal leading-relaxed">
            We've designed this process so venue operators can focus on their
            business while we manage the complexity. Every project follows the
            same rigorous framework.
          </p>
</div>

<div className="max-w-3xl mx-auto relative">

<div className="hidden md:block absolute left-[23.5px] top-0 bottom-0 w-px bg-[#E5E5E5]/80"></div>

<div className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-10 md:pb-16 last:pb-0">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm text-[#737373] font-medium bg-white z-10 group-hover:bg-[#D4F859] group-hover:border-[#D4F859] group-hover:text-[#1A1A1A] transition-colors ring-8 ring-white">
              01
            </div>
<div className="flex-1 md:pt-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
                Vision &amp; Planning
              </h3>
<p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
                We map your goals, evaluate the site, and build a tailored
                proposal aligned to your budget and timeline.
              </p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-10 md:pb-16 last:pb-0">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm text-[#737373] font-medium bg-white z-10 group-hover:bg-[#D4F859] group-hover:border-[#D4F859] group-hover:text-[#1A1A1A] transition-colors ring-8 ring-white">
              02
            </div>
<div className="flex-1 md:pt-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
                Design &amp; Approval
              </h3>
<p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
                Our engineers design courts to Australian standards. We manage
                all council, structural, and regulatory submissions.
              </p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-10 md:pb-16 last:pb-0">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm text-[#737373] font-medium bg-white z-10 group-hover:bg-[#D4F859] group-hover:border-[#D4F859] group-hover:text-[#1A1A1A] transition-colors ring-8 ring-white">
              03
            </div>
<div className="flex-1 md:pt-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
                Construction
              </h3>
<p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
                Courts are manufactured in Spain, shipped to site, and installed
                in 3 days. Our project managers keep everything on schedule.
              </p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-10 md:pb-16 last:pb-0">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm text-[#737373] font-medium bg-white z-10 group-hover:bg-[#D4F859] group-hover:border-[#D4F859] group-hover:text-[#1A1A1A] transition-colors ring-8 ring-white">
              04
            </div>
<div className="flex-1 md:pt-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
                Operational Launch
              </h3>
<p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
                8–12 weeks before opening we build your launch plan: media,
                community outreach, coaching structure, and revenue model.
              </p>
</div>
</div>

<div className="group relative flex flex-col md:flex-row md:items-start gap-6 md:gap-12 pb-10 md:pb-16 last:pb-0">
<div className="w-12 h-12 shrink-0 rounded-full border border-[#E5E5E5] flex items-center justify-center text-sm text-[#737373] font-medium bg-white z-10 group-hover:bg-[#D4F859] group-hover:border-[#D4F859] group-hover:text-[#1A1A1A] transition-colors ring-8 ring-white">
              05
            </div>
<div className="flex-1 md:pt-2">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#1A1A1A] mb-2 md:mb-3">
                Handover &amp; Support
              </h3>
<p className="text-base md:text-lg text-[#737373] leading-relaxed font-normal">
                Full QA review, complete documentation, and ongoing advisory
                support. We remain your partner long after the courts open.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-[#E5E5E5]/50">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div>
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
            Active Development Pipeline
          </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1A1A1A]">
            Venues in development
            <em className="italic font-medium">across Australia.</em>
</h2>
<p className="text-[#737373] mt-4 font-normal">
            We're building the national padel infrastructure — one venue at a
            time.
          </p>
</div>
<div className="text-right">
<div className="text-5xl font-medium tracking-tight text-[#1A1A1A] mb-1">
            4+
          </div>
<div className="text-sm text-[#737373] uppercase tracking-wider font-medium">
            Venues Active
          </div>
</div>
</div>
<div className="w-full overflow-x-auto">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="border-b border-[#E5E5E5]">
<th className="pb-4 font-medium text-[#737373] text-sm uppercase tracking-wider w-[40%]">
                Venue
              </th>
<th className="pb-4 font-medium text-[#737373] text-sm uppercase tracking-wider w-[30%]">
                Courts
              </th>
<th className="pb-4 font-medium text-[#737373] text-sm uppercase tracking-wider w-[30%] text-right">
                Status
              </th>
</tr>
</thead>
<tbody className="text-lg">
<tr className="border-b border-[#E5E5E5]/40 group hover:bg-white transition-colors">
<td className="py-6 pr-4">
<div className="font-medium text-[#1A1A1A] tracking-tight">
                  Belconnen Bowling Club
                </div>
<div className="text-sm text-[#737373] mt-1 font-normal">
                  Hawker, ACT
                </div>
</td>
<td className="py-6 text-[#1A1A1A] font-normal">4 courts</td>
<td className="py-6 text-right text-[#525252] font-normal">
                Negotiation
              </td>
</tr>
<tr className="border-b border-[#E5E5E5]/40 group hover:bg-white transition-colors">
<td className="py-6 pr-4">
<div className="font-medium text-[#1A1A1A] tracking-tight">
                  Turner Bowls Club (RUC)
                </div>
<div className="text-sm text-[#737373] mt-1 font-normal">
                  Turner, ACT
                </div>
</td>
<td className="py-6 text-[#1A1A1A] font-normal">TBC</td>
<td className="py-6 text-right text-[#525252] font-normal">
                In Discussion
              </td>
</tr>
<tr className="group hover:bg-[#D4F859]/20 transition-colors cursor-pointer">
<td className="py-6 pr-4">
<div className="font-medium text-[#1A1A1A] tracking-tight flex items-center gap-2">
                  Your venue could be here
                  <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="text-sm text-[#737373] mt-1 font-normal">
                  Nationally open
                </div>
</td>
<td className="py-6 text-[#1A1A1A] font-normal">2–8 courts</td>
<td className="py-6 text-right text-[#1A1A1A] font-medium">
                Enquire
              </td>
</tr>
</tbody>
</table>
</div>
<p className="text-[#737373] text-sm mt-8 text-center max-w-xl mx-auto font-normal">
        Interested in partnering on a venue in your city or region? We're
        actively seeking suitable sites nationally.
      </p>
</section>

<section className="bg-[#1A1A1A] text-white py-32 px-6">
<div className="max-w-4xl mx-auto text-center">
<iconify-icon className="text-5xl text-[#D4F859] mb-8 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-12">
          "Padel isn't a trend. It's the most
          <em className="italic font-medium">social sport</em>
          ever built. Australia is just getting started."
        </h2>
<p className="text-xl text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto font-normal">
          Every Australian deserves access to a sport that's as much about
          connection as it is competition. We're building the infrastructure
          that makes that possible.
        </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 border-b border-[#E5E5E5]/50">
<div className="mb-16 md:mb-20">
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
          Expert Knowledge Base
        </span>
<h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] text-[#1A1A1A] mb-6 max-w-4xl">
          Everything you need to know about building a
          <em className="italic font-medium">Padel venue in Australia.</em>
</h2>
<p className="text-xl text-[#737373] leading-relaxed font-normal max-w-3xl">
          As Australia's leading padel development partner, we've compiled the
          most critical considerations regarding court construction, planning
          permits, and venue design to help you kickstart your journey.
        </p>
</div>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
<div className="border-t border-[#E5E5E5]/50 pt-8">
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            What are the standard Padel court dimensions?
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal">
            A standard padel court measures 20m x 10m. However, factoring in
            run-out zones, structural steel framing, and spectator walkways, we
            typically recommend a minimum footprint of 21m x 11m per court. For
            a 4-court commercial club, you'll need at least 1,000 to 1,200 sqm
            to comfortably accommodate play, amenities, and player pathways.
          </p>
</div>
<div className="border-t border-[#E5E5E5]/50 pt-8">
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            Do I need planning permits for Padel courts?
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal">
            Yes, in almost all Australian municipalities, you will require
            Development Approval (DA) for civil groundwork, lighting, and
            commercial operations. Our development advisory team assists with
            the provision of technical drawings, acoustic reports, and site
            plans to streamline your local council submissions.
          </p>
</div>
<div className="border-t border-[#E5E5E5]/50 pt-8">
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            How much does it cost to build a Padel club?
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal">
            Construction costs vary significantly depending on existing ground
            conditions, indoor vs. outdoor setup, canopy requirements, and
            amenity standards. As a turnkey development partner, we provide
            accurate, transparent project estimates encompassing civil works,
            imported premium courts, and full localized assembly.
          </p>
</div>
<div className="border-t border-[#E5E5E5]/50 pt-8">
<h3 className="text-2xl font-medium tracking-tight text-[#1A1A1A] mb-4">
            Why choose Spanish-manufactured courts?
          </h3>
<p className="text-lg text-[#737373] leading-relaxed font-normal">
            Spain is the global epicenter of padel engineering. We source
            exclusively from industry-leading manufacturers to ensure our
            Australian clients receive courts with optimal bounce dynamics,
            robust galvanized steel profiles, and 12mm tempered safety glass
            designed to withstand rigorous daily use and diverse weather
            conditions.
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<span className="text-sm text-[#737373] tracking-[0.1em] uppercase mb-4 block font-medium">
            Talk to us about your project
          </span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-[#1A1A1A] mb-8 leading-[1.1]">
            Ready to build Australia's next
            <em className="italic font-medium">padel venue?</em>
</h2>
<p className="text-xl text-[#737373] mb-12 leading-relaxed font-normal">
            Whether you have a site in mind, a club looking to diversify, or
            just a strong hunch about the opportunity — we want to hear from
            you. No commitment, just a conversation.
          </p>
<ul className="space-y-4">
<li className="flex items-center gap-4 text-lg text-[#1A1A1A] font-medium">
<div className="w-8 h-8 rounded-full bg-[#E5E5E5]/50 flex items-center justify-center">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
              Free 30-minute discovery call
            </li>
<li className="flex items-center gap-4 text-lg text-[#1A1A1A] font-medium">
<div className="w-8 h-8 rounded-full bg-[#E5E5E5]/50 flex items-center justify-center">
<iconify-icon icon="solar:map-linear"></iconify-icon>
</div>
              Site assessment &amp; feasibility overview
            </li>
<li className="flex items-center gap-4 text-lg text-[#1A1A1A] font-medium">
<div className="w-8 h-8 rounded-full bg-[#E5E5E5]/50 flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
              No obligation to proceed
            </li>
</ul>
</div>
<div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-[#E5E5E5]/50">
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-[#525252]">
                  Your name
                </label>
<input className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all font-normal" placeholder="Jane Dee" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#525252]">
                  Email address
                </label>
<input className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all font-normal" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-[#525252]">
                  Phone number
                </label>
<input className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all font-normal" placeholder="+61 ..." type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-[#525252]">
                  City / State
                </label>
<input className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] placeholder:text-[#A3A3A3] focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all font-normal" placeholder="Sydney, NSW" type="text"/>
</div>
</div>
<div className="space-y-2 relative">
<label className="text-sm font-medium text-[#525252]">
                What's your situation?
              </label>
<select className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] appearance-none focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all cursor-pointer font-normal">
<option>Exploring the opportunity</option>
<option>Have a site, need feasibility</option>
<option>Ready to build</option>
<option>Existing club looking to add courts</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-[#737373] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<div className="space-y-2 relative">
<label className="text-sm font-medium text-[#525252]">
                How many courts?
              </label>
<select className="w-full bg-[#F8F9FA] border border-[#E5E5E5] rounded-xl px-4 py-3 text-[#1A1A1A] appearance-none focus:outline-none focus:border-[#1A1A1A] focus:ring-1 focus:ring-[#1A1A1A] transition-all cursor-pointer font-normal">
<option>2–4 courts</option>
<option>5–8 courts</option>
<option>8+ courts</option>
<option>Not sure yet</option>
</select>
<iconify-icon className="absolute right-4 top-[38px] text-[#737373] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<button className="w-full bg-[#1A1A1A] text-white rounded-xl px-4 py-4 text-center font-medium tracking-wide hover:bg-[#1A1A1A]/90 transition-colors mt-4" type="button">
              Book a Discovery Call
            </button>
<p className="text-xs text-[#A3A3A3] text-center mt-4 font-normal">
<iconify-icon className="inline align-middle mr-1" icon="solar:clock-circle-linear"></iconify-icon>
              We typically respond within 1 business day.
            </p>
</form>
</div>
</div>
</section>

<footer className="border-t border-[#E5E5E5]/50 bg-white py-16 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<h4 className="text-xl tracking-tight text-[#1A1A1A] font-medium mb-4">
            Padel 360
          </h4>
<p className="text-sm text-[#737373] leading-relaxed max-w-[200px] font-normal">
            Australia's padel development partner. From first conversation to
            opening day.
          </p>
</div>
<div>
<h5 className="text-sm tracking-wider uppercase text-[#A3A3A3] mb-6 font-medium">
            Services
          </h5>
<ul className="space-y-4 text-sm text-[#525252] font-normal">
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
                Court Construction
              </a>
</li>
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
                Development Advisory
              </a>
</li>
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
                Strategic Consulting
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm tracking-wider uppercase text-[#A3A3A3] mb-6 font-medium">
            Company
          </h5>
<ul className="space-y-4 text-sm text-[#525252] font-normal">
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
                The Padel 360 Edge
              </a>
</li>
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#process">
                Our Process
              </a>
</li>
<li>
<a className="hover:text-[#1A1A1A] transition-colors" href="#">
                Pipeline
              </a>
</li>
</ul>
</div>
<div>
<h5 className="text-sm tracking-wider uppercase text-[#A3A3A3] mb-6 font-medium">
            Follow
          </h5>
<ul className="space-y-4 text-sm text-[#525252] font-normal">
<li>
<a className="hover:text-[#1A1A1A] transition-colors flex items-center gap-2" href="#">
                Instagram
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
<li>
<a className="hover:text-[#1A1A1A] transition-colors flex items-center gap-2" href="#">
                LinkedIn
                <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#E5E5E5]/50 text-xs text-[#A3A3A3] flex flex-col md:flex-row justify-between items-center gap-4 font-normal">
<p>© 2024 Padel 360. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
