import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Hero Video Logic
    document.addEventListener("DOMContentLoaded", () => {
      const videoList = [
        "https://assets.cdn.filesafe.space/MjyEHjDJZG3zbHPDNIPy/media/636a036ad232181f09b8f532.mp4",
        "https://assets.cdn.filesafe.space/MjyEHjDJZG3zbHPDNIPy/media/64486f8dc34c710016002595.quicktime",
        "https://assets.cdn.filesafe.space/MjyEHjDJZG3zbHPDNIPy/media/63d366fb26d6cd3deaf74f0e.mp4"
      ];
      
      const heroVideo = document.getElementById('hero-video');
      let currentVideoIndex = 0;

      if (heroVideo) {
        const playNextVideo = () => {
          currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
          heroVideo.src = videoList[currentVideoIndex];
          heroVideo.play().catch(e => console.warn("Video play interrupted:", e));
        };
        heroVideo.src = videoList[currentVideoIndex];
        heroVideo.addEventListener('ended', playNextVideo);
        heroVideo.addEventListener('error', playNextVideo);
      }
    });

    // Mobile Menu Logic
    function toggleMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('mobile-menu-icon');
      
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('icon', 'lucide:x');
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('icon', 'lucide:menu');
        document.body.style.overflow = '';
      }
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const icon = document.getElementById('mobile-menu-icon');
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      icon.setAttribute('icon', 'lucide:menu');
      document.body.style.overflow = '';
    }

    // Modal Logic
    const modal = document.getElementById('booking-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const panel = document.getElementById('modal-panel');

    function openBookingModal() {
      // Unhide wrapper
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
      
      // Force a reflow so the transition applies
      void modal.offsetWidth;
      
      // Animate in
      backdrop.classList.remove('opacity-0');
      backdrop.classList.add('opacity-100');
      
      panel.classList.remove('opacity-0', 'translate-y-8', 'sm:translate-y-0', 'sm:scale-95');
      panel.classList.add('opacity-100', 'translate-y-0', 'sm:scale-100');
    }

    function closeBookingModal() {
      // Animate out
      backdrop.classList.remove('opacity-100');
      backdrop.classList.add('opacity-0');
      
      panel.classList.remove('opacity-100', 'translate-y-0', 'sm:scale-100');
      panel.classList.add('opacity-0', 'translate-y-8', 'sm:translate-y-0', 'sm:scale-95');
      
      // Hide wrapper after transition completes
      setTimeout(() => {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore background scrolling
      }, 300);
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav aria-label="Main navigation" className="sticky top-0 z-[100] flex items-center justify-between px-6 py-4 md:px-10 md:py-5 bg-[#FAF8F4]/80 backdrop-blur-xl border-b border-[#E0DACE]">

<a className="flex items-baseline gap-2 no-underline group" href="/">
<span className="text-3xl md:text-4xl font-normal text-[#1A1410] tracking-tighter transition-opacity group-hover:opacity-80" style={{fontFamily: '\'Instrument Serif\', serif'}}>FIND YOU</span>
<span className="text-xs font-light text-[#6B6560] uppercase tracking-widest">MEDIA</span>
</a>

<button className="lg:hidden text-[#1A1410] flex items-center justify-center relative z-[110] transition-transform duration-200" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="lucide:menu" id="mobile-menu-icon" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</button>

<ul className="hidden lg:flex items-center gap-8 list-none text-xs uppercase tracking-widest font-light text-[#6B6560]">
<li><a className="hover:text-[#1A1410] transition-colors duration-200" href="/services">Content Creation</a></li>
<li><a className="hover:text-[#1A1410] transition-colors duration-200" href="/services">Editing</a></li>
<li><a className="hover:text-[#1A1410] transition-colors duration-200" href="/services">Social Media</a></li>
<li><a className="hover:text-[#1A1410] transition-colors duration-200" href="/industries">Industries</a></li>
<li><a className="hover:text-[#1A1410] transition-colors duration-200" href="/about">About</a></li>
<li>
<button className="inline-flex items-center justify-center py-2.5 px-6 bg-[#C8441E] hover:bg-[#A83518] text-white font-normal text-xs tracking-widest uppercase transition-all duration-300 rounded-full shadow-sm" onclick="openBookingModal()">
          Book a Project
        </button>
</li>
</ul>
</nav>

<div className="fixed inset-0 z-[90] bg-[#FAF8F4] pt-28 px-6 pb-6 lg:hidden flex-col overflow-y-auto hidden" id="mobile-menu">
<ul className="flex flex-col gap-8 list-none text-sm uppercase tracking-widest font-medium text-[#1A1410]">
<li><a className="block hover:text-[#C8441E] transition-colors" href="/services" onclick="closeMobileMenu()">Content Creation</a></li>
<li><a className="block hover:text-[#C8441E] transition-colors" href="/services" onclick="closeMobileMenu()">Editing</a></li>
<li><a className="block hover:text-[#C8441E] transition-colors" href="/services" onclick="closeMobileMenu()">Social Media</a></li>
<li><a className="block hover:text-[#C8441E] transition-colors" href="/industries" onclick="closeMobileMenu()">Industries</a></li>
<li><a className="block hover:text-[#C8441E] transition-colors" href="/about" onclick="closeMobileMenu()">About</a></li>
</ul>
<div className="mt-12 pt-8 border-t border-[#E0DACE]">
<button className="w-full inline-flex justify-center items-center px-8 py-4 bg-[#C8441E] hover:bg-[#A83518] text-white font-normal text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm" onclick="closeMobileMenu(); openBookingModal()">
        Book a Project
      </button>
</div>
</div>

<div className="fixed top-0 left-0 w-full h-screen -z-20 overflow-hidden bg-[#1A1410]">
<video autoplay="" className="w-full h-full object-cover opacity-90" id="hero-video" loop="" muted="" playsinline=""></video>
</div>

<header className="relative pt-32 pb-24 md:pt-44 md:pb-36 px-6 w-full flex flex-col items-center justify-center overflow-hidden bg-transparent z-10 min-h-[90vh]">

<div className="absolute inset-0 w-full h-full bg-[#1A1410]/40 -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto w-full text-center relative z-10">

<div className="inline-flex items-center gap-2 mb-8 bg-black/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#E8A060] animate-pulse"></span>
<p className="text-xs uppercase tracking-widest text-[#E8A060] font-medium drop-shadow-sm">
          Documentary-Style Content for BC Businesses
        </p>
</div>

<h1 className="text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tighter mb-8 max-w-4xl mx-auto text-white font-normal drop-shadow-lg" style={{fontFamily: '\'Instrument Serif\', serif'}}>
        Creating <em className="italic text-[#E8A060] pr-1">Authentic</em> Content That Builds Lifetime Customers
      </h1>

<p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
        We produce documentary-style brand videos, social media content, and full-service editing for dealerships, restaurants, and local businesses across the Fraser Valley and Metro Vancouver. Real people. Real stories. Real results.
      </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex justify-center items-center px-8 py-3.5 bg-[#C8441E] hover:bg-[#A83518] text-white font-medium text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm w-full sm:w-auto cursor-pointer" onclick="openBookingModal()">
          Book a Free Strategy Call
        </button>
<a className="inline-flex justify-center items-center px-8 py-3.5 bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 font-medium text-xs tracking-widest uppercase rounded-full transition-all duration-300 w-full sm:w-auto" href="#services">
          See Our Services
        </a>
</div>

<div className="mt-16 pt-8 border-t border-white/20">
<div className="flex items-center justify-center gap-2 mb-3 text-[#E8A060]">
<iconify-icon height="20" icon="lucide:shield-check" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed max-w-2xl mx-auto tracking-wide drop-shadow-sm font-light">
          Trusted by <span className="text-white font-normal">MSA Ford</span>, <span className="text-white font-normal">Richmond Volkswagen</span>,
          <span className="text-white font-normal">Fraser Valley Auto Mall</span>, and <span className="text-white font-normal">30+ BC businesses</span> since 2021.
        </p>
</div>
</div>
</header>

<section className="relative z-10 py-20 md:py-32 px-6 bg-white border-t border-[#E0DACE]" id="philosophy">
<div className="max-w-6xl mx-auto">
<div className="mb-16 max-w-2xl">
<p className="text-xs uppercase tracking-widest text-[#E8A060] font-medium mb-4">Our Approach</p>
<h2 className="text-5xl md:text-6xl tracking-tighter mb-6 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Why Authenticity Wins in a World of AI Content
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
<div className="lg:col-span-7 flex flex-col gap-12">
<div>
<h3 className="text-3xl tracking-tight mb-3 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>We Use AI. We Don't Hide Behind It.</h3>
<p className="text-base md:text-lg text-[#6B6560] font-light leading-relaxed">
              Find You Media embraces AI wholeheartedly — for editing workflows, content scheduling, and scaling output. But we never let it replace the thing that actually converts strangers into customers: a real human being, on camera, telling a true story.
            </p>
</div>
<div>
<h3 className="text-3xl tracking-tight mb-3 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Built for the Long Term</h3>
<p className="text-base md:text-lg text-[#6B6560] font-light leading-relaxed">
              Trends come and go. The businesses that win over five and ten years are the ones that invest in deep, embedded trust with their community. Our documentary approach creates content that compounds — each video strengthening the relationship between your brand and your audience.
            </p>
</div>
</div>

<div className="lg:col-span-5 bg-[#1A1410] text-[#FAF8F4] p-10 md:p-14 rounded-3xl shadow-xl sticky top-32">
<iconify-icon className="text-[#E8A060] mb-8 opacity-70" height="32" icon="lucide:quote" style={{strokeWidth: '1.5px'}} width="32"></iconify-icon>
<blockquote className="text-3xl md:text-4xl leading-snug tracking-tight font-normal italic mb-10 text-white" style={{fontFamily: '\'Instrument Serif\', serif'}}>
            "Real people generate the kind of deep, embedded trust that someone will have in a business
            long term. By creating that, you build a foundation that won't crumble."
          </blockquote>
<div className="flex items-center gap-4 pt-6 border-t border-white/10">
<div className="w-10 h-10 rounded-full bg-[#E8A060]/10 flex items-center justify-center border border-[#E8A060]/20 text-[#E8A060]">
<span className="text-xs font-medium tracking-widest">DA</span>
</div>
<div>
<span className="block text-sm font-normal text-white tracking-wide">Desiré Amouzou</span>
<span className="block text-xs font-light text-[#A09890]">Founder &amp; Creative Director</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 md:py-32 px-6 bg-[#EFEAE1] border-t border-[#E0DACE]" id="industries">
<div className="max-w-6xl mx-auto">
<div className="mb-16 max-w-2xl">
<p className="text-xs uppercase tracking-widest text-[#E8A060] font-medium mb-4">Industries We Serve</p>
<h2 className="text-5xl md:text-6xl tracking-tighter mb-6 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Proven Results Across Automotive, Hospitality, and Local Business
        </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E0DACE] shadow-sm flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-[#E8A060]/10 flex items-center justify-center mb-6 text-[#E8A060]">
<iconify-icon height="24" icon="lucide:car" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl tracking-tight mb-4 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Automotive Dealerships</h3>
<p className="text-base text-[#6B6560] font-light leading-relaxed flex-grow">
            Organic, authentic content that drives showroom traffic. We've built serialized video formats that generate millions of views and real buyer engagement.
          </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E0DACE] shadow-sm flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-[#E8A060]/10 flex items-center justify-center mb-6 text-[#E8A060]">
<iconify-icon height="24" icon="lucide:utensils" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl tracking-tight mb-4 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Restaurants &amp; Hospitality</h3>
<p className="text-base text-[#6B6560] font-light leading-relaxed flex-grow">
            From multi-location groups to expanding concepts, we create the video content and social media strategy that fills seats and builds regulars.
          </p>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-[#E0DACE] shadow-sm flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-[#E8A060]/10 flex items-center justify-center mb-6 text-[#E8A060]">
<iconify-icon height="24" icon="lucide:store" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<h3 className="text-3xl tracking-tight mb-4 text-[#1A1410] font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Local Business</h3>
<p className="text-base text-[#6B6560] font-light leading-relaxed flex-grow">
            Our work with chambers of commerce and business associations produces event coverage and brand photography that lifts the entire community.
          </p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-20 md:py-32 px-6 bg-[#1A1410] text-[#FAF8F4]" id="services">
<div className="max-w-6xl mx-auto">
<div className="mb-16 max-w-2xl">
<p className="text-xs uppercase tracking-widest text-[#E8A060] font-medium mb-4">What We Do</p>
<h2 className="text-5xl md:text-6xl tracking-tighter mb-6 text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Video Production, Editing, and Social Media Services
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">

<div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h3 className="text-3xl tracking-tight text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Content Creation</h3>
<span className="px-3 py-1 rounded-full bg-[#E8A060]/10 border border-[#E8A060]/20 text-[#E8A060] text-xs font-medium tracking-wide whitespace-nowrap">From $495 CAD</span>
</div>
<p className="text-base text-[#A09890] font-light leading-relaxed mb-8 flex-grow">
            Documentary-style brand videos, collaborative Instagram Reels, and full video campaigns. We travel to you and produce content that works across every platform.
          </p>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h3 className="text-3xl tracking-tight text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Professional Editing</h3>
<span className="px-3 py-1 rounded-full bg-[#E8A060]/10 border border-[#E8A060]/20 text-[#E8A060] text-xs font-medium tracking-wide whitespace-nowrap">From $550 CAD/mo</span>
</div>
<p className="text-base text-[#A09890] font-light leading-relaxed mb-8 flex-grow">
            You film it, we transform it. Monthly editing retainers you can pause and unpause anytime. Our editors work across top software with Creative Director oversight.
          </p>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h3 className="text-3xl tracking-tight text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Social Management</h3>
<span className="px-3 py-1 rounded-full bg-[#E8A060]/10 border border-[#E8A060]/20 text-[#E8A060] text-xs font-medium tracking-wide whitespace-nowrap">From $1,200 CAD/mo</span>
</div>
<p className="text-base text-[#A09890] font-light leading-relaxed mb-8 flex-grow">
            Posting services for businesses that have content but need consistent distribution. We handle captions, scheduling, analytics, and strategy.
          </p>
</div>

<div className="p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col h-full">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
<h3 className="text-3xl tracking-tight text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>Brand Strategy &amp; CMO</h3>
<span className="px-3 py-1 rounded-full bg-[#E8A060]/10 border border-[#E8A060]/20 text-[#E8A060] text-xs font-medium tracking-wide whitespace-nowrap">Custom Engagement</span>
</div>
<p className="text-base text-[#A09890] font-light leading-relaxed mb-8 flex-grow">
            For businesses that need a strategic partner. We serve as fractional CMO, manage multi-location strategies, and build full marketing ecosystems.
          </p>
<button className="inline-flex items-center text-xs font-medium uppercase tracking-widest text-white hover:text-[#E8A060] transition-colors gap-2 w-fit" onclick="openBookingModal()">
            Let's Talk <iconify-icon height="16" icon="lucide:arrow-right" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-4 md:px-10 pb-16 pt-20 bg-[#FAF8F4]" id="book">
<div className="max-w-6xl mx-auto bg-[#1A1410] text-[#FAF8F4] rounded-[2.5rem] md:rounded-[4rem] px-6 py-20 md:py-32 text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-[#E8A060]/15 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<p className="text-xs uppercase tracking-widest text-[#E8A060] font-medium mb-6">Ready to Start?</p>
<h2 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-8 text-white font-normal" style={{fontFamily: '\'Instrument Serif\', serif'}}>
          Let's Build Content That Works as Hard as You Do
        </h2>
<p className="text-lg text-[#A09890] font-light leading-relaxed mb-10 max-w-xl mx-auto">
          Book a free strategy call. We'll walk through your current content, identify the gaps, and map out a plan that fits your growth goals.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="inline-flex justify-center items-center px-8 py-4 bg-white text-[#1A1410] hover:bg-[#EFEAE1] font-medium text-xs tracking-widest uppercase rounded-full transition-all duration-300 shadow-sm w-full sm:w-auto cursor-pointer" onclick="openBookingModal()">
            Book a Free Strategy Call
          </button>
</div>
</div>
</div>
</section>
<footer className="relative z-10 py-10 px-6 bg-[#FAF8F4] text-center border-t border-[#E0DACE]">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-[#6B6560] font-light tracking-wide">
        © 2026 Find You Media Corporation.
      </p>
</div>
</footer>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[200] hidden" id="booking-modal" role="dialog">

<div className="fixed inset-0 bg-[#1A1410]/70 backdrop-blur-md transition-opacity duration-300 ease-out opacity-0" id="modal-backdrop" onclick="closeBookingModal()"></div>
<div className="fixed inset-0 z-10 w-screen overflow-y-auto">

<div className="flex min-h-full items-end justify-center p-0 sm:items-center sm:p-4 md:p-8">

<div className="relative transform overflow-hidden rounded-t-[1.5rem] sm:rounded-[2.5rem] bg-white text-left shadow-2xl transition-all duration-300 ease-out sm:my-8 w-full sm:max-w-4xl opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95 flex flex-col h-[95vh] sm:h-auto max-h-[98vh]" id="modal-panel">

<div className="bg-white px-4 py-4 sm:px-6 sm:py-5 border-b border-[#E0DACE]/60 flex items-center justify-between sticky top-0 z-20 shrink-0">
<div>
<p className="text-[10px] sm:text-xs uppercase tracking-widest text-[#E8A060] font-medium mb-0.5 sm:mb-1">Get in Touch</p>
<h3 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-[#1A1410]" id="modal-title" style={{fontFamily: '\'Instrument Serif\', serif'}}>
                Strategy Call
              </h3>
</div>
<button className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-[#FAF8F4] border border-[#E0DACE] text-[#6B6560] hover:text-[#1A1410] hover:bg-[#EFEAE1] transition-colors outline-none focus:ring-2 focus:ring-[#E8A060]" onclick="closeBookingModal()" type="button">
<span className="sr-only">Close panel</span>
<iconify-icon className="sm:w-[24px] sm:h-[24px]" height="20" icon="lucide:x" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
</button>
</div>

<div className="bg-white flex-1 overflow-y-auto w-full relative">

<iframe id="cugtWGRTJ3a1dT8tDhvk_1774982263717" scrolling="no" src="https://links.findyou.media/widget/booking/JIvQoPMPp6posLDymF40" style={{width: '100%', minHeight: '650px', border: 'none', overflow: 'hidden'}}></iframe>

</div>
</div>
</div>
</div>
</div>



    </>
  );
}
