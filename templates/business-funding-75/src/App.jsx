import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    lucide.createIcons();

    // HLS Video Integration Script
    document.addEventListener('DOMContentLoaded', () => {
      const videoContainers = document.querySelectorAll('.hls-video-container');

      videoContainers.forEach(container => {
        const videoElement = container.querySelector('.hls-video-player');
        const videoTrigger = container.querySelector('.hls-video-trigger');
        const videoSrc = container.getAttribute('data-video-src');

        container.addEventListener('click', () => {
          if(!videoElement || !videoTrigger || !videoSrc) return;
          
          // Prevent multiple initializations if already clicked
          if(!videoElement.classList.contains('hidden')) return;

          // Hide original image/overlay trigger and show native video tag
          videoTrigger.classList.add('hidden');
          videoElement.classList.remove('hidden');

          // Initialize HLS.js or native playback
          if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(videoSrc);
            hls.attachMedia(videoElement);
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
              videoElement.play();
            });
          } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
            // Fallback to native HLS support (Safari)
            videoElement.src = videoSrc;
            videoElement.addEventListener('loadedmetadata', function() {
              videoElement.play();
            });
          }
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="pointer-events-auto glass rounded-full pl-5 pr-2 py-2 flex items-center justify-between gap-4 md:gap-10 shadow-2xl shadow-black/50 w-full max-w-5xl transition-all duration-300">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="font-serif text-xl md:text-2xl tracking-tight italic font-medium group-hover:text-[#eac74d] transition-colors text-white">
          Rich By Credit.
        </span>
</a>

<a className="text-xs px-4 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group shadow-md hover:shadow-lg hover:shadow-[#eac74d]/20 bg-white text-black hover:bg-[#eac74d] shrink-0" href="#book-call">
        Get Qualified Now
        <svg className="lucide lucide-arrow-right w-3 h-3 transition-transform group-hover:translate-x-0.5 hidden sm:block" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 shadow-black/20 overflow-hidden md:mb-16 text-center bg-[#0A0A0A] border-white/5 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-2xl">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#222_1px,transparent_1px),linear-gradient(to_bottom,#222_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-30"></div>
<div className="z-10 flex flex-col max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up w-fit border px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-montserrat font-semibold mb-6 md:mb-8 bg-[#eac74d]/10 border-[#eac74d]/20 text-[#eac74d]">
          ATTENTION BUSINESS OWNERS AND ENTREPRENEURS
        </div>

<h1 className="animate-fade-up delay-100 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-white tracking-tighter font-serif mb-6">Finally Get Access to <span className="bg-clip-text italic text-transparent bg-gradient-to-r from-[#eac74d] to-[#f9e08e] pr-2">$50,000+ in 0% Interest</span> Business Funding Even If You're Just Getting Started</h1>

<p className="animate-fade-up delay-200 md:text-xl leading-relaxed md:mb-12 text-base font-light text-slate-50 max-w-3xl mb-8 pr-2 pl-2">Stop letting lack of capital hold your business back. Our proven done-for-you system has helped entrepreneurs secure over $10 million in 0% business credit without income verification, business tax returns, or giving up equity.</p>

<div className="hls-video-container animate-fade-up delay-300 relative w-full max-w-4xl aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 shadow-black ring-white/5" data-video-src="https://embed-cloudfront.wistia.com/deliveries/22613c515cda10c7f2b35565f0622d71c3463f67.m3u8">

<video className="hls-video-player hidden absolute inset-0 w-full h-full object-cover z-20 bg-black" controls="" playsinline=""></video>

<div className="hls-video-trigger z-10 w-full h-full relative">

<img alt="Process Video" className="group-hover:opacity-40 transition-all duration-700 group-hover:scale-105 opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center" role="button">
<div className="md:w-24 md:h-24 flex transition-all duration-300 group-hover:scale-110 group-hover:bg-white/10 bg-black/40 w-14 h-14 border-white/10 border rounded-full shadow-[0_0_40px_rgba(0,0,0,0.5)] backdrop-blur-md items-center justify-center">
<div className="md:w-16 md:h-16 flex md:pl-1 text-black bg-white w-10 h-10 rounded-full pl-0.5 shadow-lg items-center justify-center">
<svg className="lucide lucide-play md:w-7 md:h-7 fill-black w-[16px] h-[16px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 backdrop-blur-md text-[10px] md:text-xs px-2.5 py-1 md:px-3 md:py-1.5 rounded-full font-montserrat flex items-center gap-2 border bg-black/60 text-white border-white/10">
<div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#eac74d] animate-pulse"></div>
              Watch the strategy breakdown
            </div>
</div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 w-full mb-6 gap-x-3 gap-y-3 items-center justify-center">
<a className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-full text-sm hover:shadow-xl hover:shadow-[#eac74d]/20 transition-all duration-300 flex items-center justify-center gap-2 font-montserrat font-medium group bg-white text-black hover:bg-[#eac74d]" href="#book-call">
            Get Qualified Now
            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="w-full sm:w-auto border px-8 py-3.5 md:py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center justify-center gap-2 bg-transparent border-white/10 text-white hover:border-white/30 hover:bg-white/5" href="#process">
            Learn More
          </a>
</div>

<p className="animate-fade-up delay-500 text-[10px] md:text-xs font-montserrat text-gray-500">
          Book a Free Strategy Session. No obligations attached.
        </p>
</div>
</section>

<div className="w-full py-8 md:py-12 mb-16 md:mb-20 text-center border-b border-white/5">
<h3 className="text-xl md:text-2xl font-serif mb-2 text-white">
        Trusted by Entrepreneurs in Every Industry
      </h3>
<p className="text-[10px] md:text-xs font-montserrat uppercase tracking-widest mb-8 md:mb-10 text-gray-500">
        Real Estate Investors | E-commerce Owners | Amazon FBA Sellers | Dropshippers | Service Providers | Contractors
      </p>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-50 scale-90 md:scale-100 invert">
<div className="flex items-center gap-2">
<svg className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Real Estate</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">E-commerce</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">Amazon FBA</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">Dropshipping</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">Services</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Contractors</span>
</div>
</div>

<div className="flex items-center gap-10 md:gap-16 px-4 md:px-8 grayscale opacity-50 scale-90 md:scale-100 invert">
<div className="flex items-center gap-2">
<svg className="lucide lucide-triangle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Real Estate</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-hexagon w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="font-bold text-base md:text-lg">E-commerce</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-circle w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="font-bold text-base md:text-lg">Amazon FBA</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-box w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path>
<path d="m3.3 7 8.7 5 8.7-5"></path>
<path d="M12 22V12"></path>
</svg>
<span className="font-bold text-base md:text-lg">Dropshipping</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-slack w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1.5" width="3" x="13" y="2"></rect>
<path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"></path>
<rect height="8" rx="1.5" width="3" x="8" y="14"></rect>
<path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"></path>
<rect height="3" rx="1.5" width="8" x="14" y="13"></rect>
<path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"></path>
<rect height="3" rx="1.5" width="8" x="2" y="8"></rect>
<path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"></path>
</svg>
<span className="font-bold text-base md:text-lg">Services</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-figma w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path>
<path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path>
<path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path>
<path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>
</svg>
<span className="font-bold text-base md:text-lg">Contractors</span>
</div>
</div>
</div>
</div>
</div>

<section className="py-12 md:py-20 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white px-4">
        Most Business Owners Approach Funding Completely Wrong
      </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8">

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-[#eac74d]/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(234,199,77,0.3), rgba(234,199,77,0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-trending-down w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 17h6v-6"></path>
<path d="m22 17-8.5-8.5-5 5L2 7"></path>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            The Self-Funding Trap
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            You're stuck in the self-funding trap, burning through your personal savings and limiting your growth potential. Every month you delay scaling costs you thousands in lost revenue.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-[#eac74d]/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(234,199,77,0.3), rgba(234,199,77,0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-users w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            Traditional Bank Loans
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Traditional business loans are a nightmare. Banks demand years of tax returns, perfect credit, and still deny 80% of applications. Expect 10-25% interest rates that crush cash flow.
          </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-2xl hover:shadow-[#eac74d]/10 transition-all duration-300 bg-gradient-to-br from-[#121212] to-[#0a0a0a] rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-lg shadow-black" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(234,199,77,0.3), rgba(234,199,77,0.05))', -BorderRadiusBefore: '1.5rem'}}>
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-clock w-5 h-5 md:w-6 md:h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg md:text-xl font-montserrat font-semibold mb-2 md:mb-3 text-white">
            Greedy Equity Partners
          </h3>
<p className="text-gray-400 font-light leading-relaxed text-sm">
            Equity partners want to steal your business. You didn't build your company to hand over control and profits to investors who don't understand your vision or work ethic.
          </p>
</div>
</div>
</section>

<section className="py-12 md:py-20">
<div className="text-center mb-10 md:mb-16 px-4">
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight font-serif mb-4">
          The 0% Business Credit Strategy That's Funding 7-Figure Businesses
        </h2>
<p className="text-gray-400 max-w-2xl mx-auto font-light text-sm md:text-base">
          While everyone else fights for expensive loans or gives away equity, smart entrepreneurs are accessing $50,000 to $200,000 in 0% interest business credit lines.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#eac74d]/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="md:text-2xl md:mb-4 text-xl font-medium text-white font-montserrat mb-3">
            No Income Verification
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            This isn't theory. This is the exact funding strategy that built multiple 7-figure businesses and helped hundreds of clients scale faster than they ever thought possible.
          </p>
<div className="mt-auto self-end group-hover:text-[#eac74d] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-crosshair w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="22" x2="18" y1="12" y2="12"></line>
<line x1="6" x2="2" y1="12" y2="12"></line>
<line x1="12" x2="12" y1="6" y2="2"></line>
<line x1="12" x2="12" y1="22" y2="18"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#eac74d]/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
            No Tax Returns Needed
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            Forget about digging up years of complicated tax documents. We secure your funding based on specialized credit strategies that skip the massive documentation traditional banks demand.
          </p>
<div className="mt-auto self-end group-hover:text-[#eac74d] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-monitor w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="3"></rect>
<line x1="8" x2="16" y1="21" y2="21"></line>
<line x1="12" x2="12" y1="17" y2="21"></line>
</svg>
</div>
</div>

<div className="group md:rounded-3xl md:p-8 overflow-hidden md:h-80 flex flex-col transition-all hover:border-[#eac74d]/30 bg-gradient-to-br from-[#0f0f0f] to-[#050505] h-64 border border-white/5 rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 relative">
<h3 className="text-xl md:text-2xl font-montserrat font-medium mb-3 md:mb-4 text-white">
            Keep 100% Equity
          </h3>
<p className="text-gray-400 font-light text-sm leading-relaxed z-10 relative">
            Don't give up pieces of your company. Maintain full control and ownership while leveraging massive capital with zero personal credit damage.
          </p>
<div className="mt-auto self-end group-hover:text-[#eac74d] transition-colors duration-500 transform group-hover:scale-110 text-white/5">
<svg className="lucide lucide-shield-check w-16 h-16 md:w-24 md:h-24 stroke-[1px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-8 py-3.5 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 bg-white text-black hover:bg-[#eac74d]" href="#book-call">
          Book a Call
          <svg className="lucide lucide-phone w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
</svg>
</a>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 rounded-[2rem] md:rounded-[2.5rem] border shadow-2xl shadow-black/40 text-center bg-[#0a0a0a] border-white/5">
<div className="max-w-3xl mx-auto">
<div className="inline-flex justify-center mb-6 md:mb-8 text-[#eac74d]">
<svg className="lucide lucide-quote w-8 h-8 md:w-12 md:h-12 fill-current opacity-20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path className="" d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
</div>
<h3 className="md:text-4xl lg:text-5xl leading-tight md:mb-10 text-2xl italic text-white font-serif mb-8 pr-2 pl-2">
          "Rich By Credit helped me secure $75,000 in 0% credit when traditional banks kept denying me. I used it to scale my Section 8 portfolio and now I'm making $12,500 monthly profit. This completely changed my business trajectory."
        </h3>
<div className="flex flex-col items-center">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-4 overflow-hidden border-2 shadow-md bg-neutral-800 border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="font-montserrat font-semibold text-white">
            Jose M.
          </div>
<div className="text-xs md:text-sm font-light text-gray-500">
            Real Estate Investor
          </div>
</div>
</div>
</section>

<section className="py-16 md:py-24" id="process">
<div className="text-center mb-12 md:mb-16">
<span className="text-[10px] md:text-xs font-montserrat font-bold tracking-widest uppercase mb-3 block text-[#eac74d]">
          How It Works
        </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white">
          Our Done-For-You System Gets You Funded in 3 Simple Steps
        </h2>
</div>
<div className="grid md:grid-cols-3 gap-10 md:gap-8 relative max-w-6xl mx-auto">

<div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent to-transparent -z-10 via-white/10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#eac74d] group-hover:text-[#eac74d] transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            1
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            Custom Strategy Creation
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            We analyze your business and credit profile to build a personalized 0% credit strategy. No cookie-cutter approaches. Every plan is tailored.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#eac74d] group-hover:text-[#eac74d] transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            2
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            Application Execution
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            We handle all paperwork and applications using our internal banking relationships. You don't lift a finger while we navigate the underwriting process.
          </p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-20 h-20 md:w-24 md:h-24 border rounded-full flex items-center justify-center text-xl md:text-2xl font-serif mb-5 md:mb-6 shadow-sm group-hover:border-[#eac74d] group-hover:text-[#eac74d] transition-colors bg-[#0a0a0a] border-white/10 text-gray-600">
            3
          </div>
<h3 className="text-lg md:text-xl font-bold font-montserrat mb-2 md:mb-3 text-white">
            Credit Deployment
          </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed max-w-xs px-4 md:px-0">
            Get approved for $30,000 to $200,000 in 0% credit lines with 9-18 month promotional periods. We show you how to maintain 0% indefinitely.
          </p>
</div>
</div>
<div className="flex justify-center mt-12 md:mt-16">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-[#eac74d]/20 bg-white text-black hover:bg-[#eac74d]" href="#book-call">
          Get Qualified Now
          <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>

<section className="mb-16 md:mb-24 px-0 md:px-6">
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 py-10 md:p-20 border shadow-2xl shadow-black/20 text-center relative overflow-hidden bg-[#0a0a0a] border-white/5">
<div className="relative z-10">
<h2 className="text-2xl md:text-5xl font-serif font-medium mb-4 md:mb-6 tracking-tight text-white">
            Transform Your Business with Unlimited Growth Capital
          </h2>
<p className="text-sm md:text-lg text-gray-400 font-light mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Watch the video below to learn how we secure $50,000 to $200,000 in 0% credit for our clients across multiple funding sources without personal credit damage.
          </p>
<div className="hls-video-container relative w-full max-w-4xl mx-auto aspect-video rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-2xl overflow-hidden mb-8 md:mb-12 group cursor-pointer ring-1 bg-black border-white/10 ring-white/5" data-video-src="https://embed-cloudfront.wistia.com/deliveries/22613c515cda10c7f2b35565f0622d71c3463f67.m3u8">

<video className="hls-video-player hidden absolute inset-0 w-full h-full object-cover z-20 bg-black" controls="" playsinline=""></video>

<div className="hls-video-trigger relative w-full h-full z-10">
<img alt="Process Deep Dive" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-16 h-16 md:w-24 md:h-24 backdrop-blur-md rounded-full flex items-center justify-center border shadow-xl transition-all duration-300 group-hover:scale-110 bg-white/10 border-white/20">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-sm pl-1 bg-white text-black">
<svg className="lucide lucide-play w-5 h-5 md:w-7 md:h-7 fill-current" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full sm:w-auto justify-center px-10 py-4 rounded-full text-sm transition-all duration-300 font-montserrat font-medium flex items-center gap-2 shadow-lg shadow-black/50 hover:shadow-[#eac74d]/20 bg-white text-black hover:bg-[#eac74d]" href="#book-call">
              Get Qualified Now
              <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-20 -mx-4 md:-mx-6 px-4 md:px-6 rounded-[2.5rem] md:rounded-[3rem] bg-[#0a0a0a] border-y border-white/5">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
          Why Rich By Credit Gets Results When Others Fail
        </h2>
<div className="rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-16 border shadow-2xl shadow-black relative overflow-hidden bg-[#111] border-white/5">
<div className="absolute top-0 right-0 w-[20rem] h-[20rem] md:w-[40rem] md:h-[40rem] bg-gradient-to-b to-transparent rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none from-[#eac74d]/10"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="text-center mb-8 md:mb-12 max-w-3xl">
<span className="font-bold tracking-widest uppercase text-[10px] md:text-xs font-montserrat mb-4 block text-[#eac74d]">
                Exclusive Features
              </span>
<h3 className="text-2xl md:text-4xl font-serif mb-4 md:mb-6 text-white">
                Transform Your Business with Unlimited Growth Capital
              </h3>
<p className="text-gray-400 font-light text-base md:text-lg">
                We've consolidated our internal banking relationships and custom underwriting strategies to get you results when others fail.
              </p>
</div>
<div className="grid md:grid-cols-2 gap-y-4 gap-x-20 md:gap-y-6 w-full max-w-4xl mb-12 md:mb-16">
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Done-For-You Application Process
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Internal Banking Relationships
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Custom Underwriting Strategy
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Ongoing Credit Optimization
                  </span>
</li>
</ul>
<ul className="space-y-4 md:space-y-6">
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Get 2-3x Higher Credit Limits
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Protect Your Personal Credit Score
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-medium font-montserrat text-sm md:text-lg text-gray-300">
                    Access Multiple Funding Sources
                  </span>
</li>
<li className="flex items-center gap-3 md:gap-4">
<div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center shrink-0 bg-[#eac74d]/10 text-[#eac74d] border border-[#eac74d]/20">
<svg className="lucide lucide-check w-3.5 h-3.5 md:w-5 md:h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<span className="font-bold font-montserrat text-sm md:text-lg border-b-2 text-white border-[#eac74d]/40">
                    Guaranteed Results Program
                  </span>
</li>
</ul>
</div>
<div className="flex flex-col items-center w-full">
<a className="w-full md:w-auto text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full transition-all duration-300 shadow-xl font-montserrat font-medium flex items-center justify-center gap-3 group bg-white text-black hover:bg-[#eac74d] shadow-black/50" href="#book-call">
                Get Qualified Now
                <svg className="lucide lucide-arrow-right w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<p className="mt-4 md:mt-6 text-xs md:text-sm font-montserrat text-gray-500">
                We only get paid when you get approved.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24">
<h2 className="text-3xl md:text-5xl text-center mb-10 md:mb-16 tracking-tight font-serif font-medium text-white">
        What People Are Saying
      </h2>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
            "I was denied by 3 traditional lenders before finding Rich By Credit. They got me approved for $150,000 in 0% credit that I used to launch my e-commerce business. I'm now doing $50K monthly revenue."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">Carlos R.</div>
<div className="text-xs text-gray-500">E-commerce Owner</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
            "The team at Rich By Credit secured over $200,000 in 0% credit for my construction business after banks kept rejecting me. Now I can take on bigger projects and my revenue has tripled."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">Ingrid S.</div>
<div className="text-xs text-gray-500">Construction Business Owner</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border shadow-sm bg-[#0a0a0a] border-white/5">
<p className="text-gray-400 text-sm leading-relaxed italic mb-6">
            "Rich By Credit didn't just get me funded - they taught me how to use credit strategically. I've now secured over $300,000 across multiple businesses and my net worth has increased by 400%."
          </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800"></div>
<div>
<div className="text-sm font-bold text-white">Marcus T.</div>
<div className="text-xs text-gray-500">Serial Entrepreneur</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center border-t border-white/5">
<div className="order-2 lg:order-1">
<h2 className="text-3xl md:text-5xl mb-6 md:mb-8 tracking-tight font-serif font-medium text-white">
          Ready to Get Funded?
        </h2>
<div className="space-y-4 md:space-y-6 text-sm md:text-base text-gray-400 font-light leading-relaxed">
<p>
            Stop waiting for capital that may never come. Every day you delay is money left on the table.
          </p>
<p>
            While you're struggling with limited funds, your competitors are scaling with unlimited 0% capital. The entrepreneurs getting ahead aren't smarter or luckier. They just have access to funding you don't know about. Let us be your unfair advantage.
          </p>
</div>
<a className="inline-block mt-6 md:mt-8 font-semibold border-b pb-0.5 transition-all text-[#eac74d] border-[#eac74d]/30 hover:border-[#eac74d]" href="#book-call">
          Get Qualified Now
        </a>
</div>
<div className="relative order-1 lg:order-2 h-64 md:h-[500px] w-full rounded-[2rem] overflow-hidden bg-neutral-900">
<img alt="Success" className="hover:grayscale-0 transition-all duration-700 hover:opacity-100 opacity-80 w-full h-full object-cover grayscale" src="https://image2url.com/r2/default/images/1773727366992-4b6e66f6-ff40-4e4e-9607-a7804ae5dc5a.png"/>
</div>
</section>

<section className="py-16 md:py-20 mb-16 md:mb-20 rounded-[2rem] md:rounded-[2.5rem] text-center px-4 md:px-6 relative overflow-hidden bg-[#0a0a0a] border border-white/5" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#eac74d]/10 via-transparent to-transparent"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl mb-4 md:mb-6 tracking-tight font-serif font-medium text-white">
          Your Business Deserves Unlimited Growth Capital
        </h2>
<p className="text-base md:text-lg mb-8 md:mb-10 font-light text-gray-400">
          You have three choices right now. Do nothing, try this alone and risk damaging your credit, or let our proven system get you funded with $50,000 to $200,000 in 0% business credit.
        </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
<input className="flex-1 border rounded-full px-6 py-3.5 md:py-4 placeholder-gray-600 focus:outline-none focus:border-[#eac74d] transition-colors backdrop-blur-sm bg-white/5 border-white/10 text-white" placeholder="Enter your email" type="email"/>
<button className="md:py-4 hover:bg-[#eac74d] transition-colors shadow-lg shadow-black/30 font-bold text-black bg-white rounded-full pt-3.5 pr-8 pb-3.5 pl-8 whitespace-nowrap" type="button">
            Get Qualified Now
          </button>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto py-8 md:py-10 mb-16 md:mb-24 px-2 md:px-6">
<h2 className="text-2xl md:text-3xl text-center mb-10 md:mb-12 tracking-tight font-serif font-medium text-white">
        Frequently Asked Questions
      </h2>
<div className="space-y-4">

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What if I don't have business tax returns?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Not required. Our system works for new businesses and established companies without the traditional documentation banks demand.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            Will this hurt my personal credit?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            No. Business credit doesn't report to your personal credit profile, so your personal score remains protected throughout the process.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            How quickly can I get approved?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Most clients receive their first approvals within 2-3 weeks. Full credit portfolio deployment typically takes 30-60 days depending on your goals.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            What if I get denied?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            We only work with qualified applicants and have a 95% approval rate. If we can't get you funded, you don't pay anything.
          </div>
</details>

<details className="group border rounded-2xl overflow-hidden transition-all duration-300 open:shadow-md bg-[#0a0a0a] border-white/5">
<summary className="flex justify-between items-center p-5 md:p-6 cursor-pointer font-medium font-montserrat select-none text-white text-sm md:text-base">
            Is there a limit to how much credit I can get?
            <svg className="lucide lucide-chevron-down w-4 h-4 md:w-5 md:h-5 transition-transform group-open:rotate-180 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</summary>
<div className="px-5 md:px-6 pb-6 text-sm text-gray-400 leading-relaxed font-light border-t pt-4 border-white/5">
            Our clients regularly secure $50,000 to $200,000+ in total credit limits. Your final amount depends on your credit profile and business needs.
          </div>
</details>
</div>
<p className="text-center text-sm mt-8 text-gray-500">
        Don't see what you're looking for?
        <a className="underline transition-all text-[#eac74d] decoration-[#eac74d]/30 hover:decoration-[#eac74d]" href="#book-call">
          Get in touch
        </a>
        .
      </p>
</section>

<section className="mx-auto py-16 md:py-24 px-4 md:px-6 max-w-7xl" id="book-call">
<div className="text-center mb-10 md:mb-16">
<h2 className="text-3xl md:text-5xl font-serif font-medium text-white mb-6 tracking-tight">
          Get Qualified Now
        </h2>
<p className="text-base md:text-lg text-gray-400 font-light max-w-2xl mx-auto">
          Book a no-commitment discovery call to discuss how we can help you
          secure $50,000 to $200,000 in 0% business credit.
        </p>
</div>
<div className="w-full bg-[#0a0a0a] rounded-[2rem] border border-white/5 shadow-sm overflow-hidden">

<div className="calendly-inline-widget" data-url="https://calendly.com/henry-funnelarchitects/discovery-call-clone" style={{minWidth: '320px', height: '700px', width: '100%'}}></div>


</div>
</section>
</main>

<footer className="border-t pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6 bg-[#050505] border-white/5">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-10">

<div className="text-center md:text-left">
<a className="font-serif text-2xl tracking-tight italic font-medium text-white" href="#">
          Rich By Credit.
        </a>
<p className="text-xs mt-3 max-w-xs font-light text-gray-500 mx-auto md:mx-0">
          Scaling businesses with unlimited 0% interest growth capital.
        </p>
</div>

<div className="flex flex-col gap-3 text-center md:text-right">
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-[#eac74d]" href="#">
          Services
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-[#eac74d]" href="#">
          Case Studies
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-[#eac74d]" href="#">
          About
        </a>
<a className="text-sm transition-colors font-medium text-gray-400 hover:text-[#eac74d]" href="#book-call">
          Contact
        </a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 md:mt-16 pt-8 border-t text-center text-[10px] md:text-xs font-montserrat border-white/5 text-gray-600">
<p>© 2024 Rich By Credit. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
