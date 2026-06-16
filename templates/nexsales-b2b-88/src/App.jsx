import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      // Initialize Lucide Icons
      lucide.createIcons();

      // Modal Logic
      function toggleModal(show) {
        const modal = document.getElementById('booking-modal');
        const form = document.getElementById('booking-form');
        const success = document.getElementById('booking-success');
        
        if (show) {
          modal.classList.remove('hidden');
          document.body.style.overflow = 'hidden'; // Prevent scrolling
          // Reset state
          form.style.display = 'block';
          success.classList.add('hidden');
        } else {
          modal.classList.add('hidden');
          document.body.style.overflow = ''; // Restore scrolling
        }
      }

      // FAQ Accordion Logic
      function toggleFaq(button) {
        const item = button.parentElement;
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(faq => {
          faq.classList.remove('active');
        });

        // Toggle clicked item
        if (!isActive) {
          item.classList.add('active');
        }
      }

      // Booking Simulation
      function confirmBooking() {
        const form = document.getElementById('booking-form');
        const success = document.getElementById('booking-success');
        
        // Simple cross-fade simulation
        form.style.opacity = '0';
        setTimeout(() => {
          form.style.display = 'none';
          success.classList.remove('hidden');
          success.style.opacity = '0';
          setTimeout(() => {
            success.style.opacity = '1';
            form.style.opacity = '1';
          }, 50);
        }, 300);
      }

      // Smooth Scroll for Anchors
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if(target) {
             target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Simple Reveal on Scroll
      const observerOptions = {
        threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe elements with reveal classes if any (dynamically adding basic fade-in for section headers)
      document.querySelectorAll('h2').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                }
            });
        }, { threshold: 0.1 }).observe(el);
      });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<div className="bg-[#00332a] text-[#00ffc4] border-b border-[#00ffc4]/20 py-3 px-4 flex items-center justify-center text-sm relative z-50">
<div className="flex flex-col sm:flex-row items-center gap-3 text-center">
<span className="text-neutral-300">Experience B2B Revenue Orchestration Risk-Free (Limited Spots)</span>
<button className="hover:bg-[#00ffc4]/20 transition-colors flex group text-xs font-semibold text-[#00ffc4] bg-[#00ffc4]/10 border-[#00ffc4]/30 border rounded-full pt-1 pr-4 pb-1 pl-4 gap-x-1 gap-y-1 items-center" onclick="toggleModal(true)">Launch A Pilot Campaign at No Upfront Cost </button>
</div>
<button className="absolute right-4 text-[#00ffc4]/50 hover:text-[#00ffc4] hidden sm:block">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<nav className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-x-8 gap-y-8 items-end">
<a className="text-xl font-semibold tracking-tight flex items-center gap-2" href="#">
<span className="bg-center text-white/0 w-24 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63c0675d-4600-4a02-a30a-14a056724971_320w.png)] bg-contain"></span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="/#key-solutions">Solutions</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="/#playbook">
        Playbooks
        <span className="bg-[#00ffc4]/10 text-[#00ffc4] text-[10px] px-1.5 py-0.5 rounded border border-[#00ffc4]/20 font-semibold uppercase tracking-wide">New</span>
</a>
<a className="hover:text-white transition-colors" href="/#resources">Resources</a>
<a className="hover:text-white transition-colors" href="#">About Us</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hover:bg-neutral-200 transition-all flex text-sm font-medium text-black bg-white rounded-lg pt-2.5 pr-5 pb-2.5 pl-5 shadow-[0_0_15px_rgba(255,255,255,0.1)] gap-x-2 gap-y-2 items-center" onclick="toggleModal(true)">Get 3X PipeGen</button>
</div>
</div>
</nav>

<main className="overflow-hidden pt-16 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#00ffc4] rounded-full blur-[120px] opacity-10 -z-10 pointer-events-none"></div>
<div className="z-10 text-center max-w-5xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 bg-neutral-900/50 border border-white/10 rounded-full pl-1 pr-4 py-1 shadow-sm mb-8 hover:border-[#00ffc4]/30 transition-colors cursor-default backdrop-blur-sm">
<span className="text-[10px] flex items-center gap-1 font-semibold text-white bg-[#047857] rounded-full pt-0.5 pr-2 pb-0.5 pl-2 shadow-sm">Rated 4.9/5 on G2 <svg className="lucide lucide-star w-2 h-2 fill-current text-[#00ffc4]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></span>
<span className="text-sm font-medium text-neutral-300">Meet The World's First B2B Revenue Orchestrators</span>
</div>
<h1 className="leading-[1.1] md:text-5xl text-5xl font-semibold text-white tracking-tight max-w-5xl mr-auto mb-6 ml-auto">We orchestrate B2B revenue systems <br className="hidden md:block"/> <span className="font-normal text-[#00ffc4] font-serif-italic drop-shadow-[0_0_15px_rgba(0,255,196,0.3)]">that compound pipeline growth</span></h1>
<p className="md:text-xl leading-relaxed text-lg font-normal text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">Strategic growth partners for CROs, CMOs, and RevOps leaders to improve efficiency and generate pipeline</p>
<div className="flex flex-col items-center gap-4 mb-20">
<button className="group relative bg-[#047857] hover:bg-[#059669] text-white text-lg font-medium px-8 py-4 rounded-xl shadow-[0_0_30px_rgba(4,120,87,0.4)] transition-all flex items-center gap-3 w-full sm:w-auto justify-center overflow-hidden border border-[#10b981]/30" onclick="toggleModal(true)">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
<span className="relative">Start With A Pilot Campaign</span>
<svg className="lucide lucide-arrow-right relative w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex items-center gap-2 text-sm text-neutral-500 bg-neutral-900/80 px-3 py-1 rounded-md border border-white/5 backdrop-blur-sm">
<span className="bg-[#00ffc4]/10 text-[#00ffc4] border border-[#00ffc4]/20 text-[10px] font-bold px-1.5 py-0.5 rounded">NEW</span>
<span className="font-medium text-neutral-400"> We'll launch a no-obligation pilot to prove results first.</span>
</div>
</div><div className="w-full max-w-7xl mx-auto px-6 mb-20 relative z-10 animate-slide-up" style={{animationDelay: '0.2s'}}>
<div className="text-center mb-8">
<p className="text-xs font-semibold text-neutral-500 uppercase tracking-[0.2em]">Trusted by revenue leaders at</p>
</div>

<div className="relative overflow-hidden w-full" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>

<div className="flex items-center gap-16 animate-ticker w-max">

<div className="flex gap-16 shrink-0 gap-x-16 gap-y-16 items-center">
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 font-roboto">Vonage</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl italic text-neutral-600 font-instrument-serif">D&amp;B</span>
<span className="hover:text-white transition-colors duration-300 cursor-default uppercase text-xl font-medium text-neutral-600 tracking-tight font-space-grotesk">Pallas Security</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-semibold italic text-neutral-600 font-playfair">SecureSave</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold text-neutral-600 tracking-tighter font-dm-sans">Schneider Electric</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-extrabold text-neutral-600 font-manrope">Interactions LLC</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-black italic text-neutral-600 font-roboto">hp</span>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl font-bold italic text-neutral-600 font-bricolage">COMODO</span>
<span className="hover:text-white transition-colors duration-300 cursor-default text-2xl italic text-neutral-600 font-instrument-serif">Vantage</span>
<span className="text-xl font-space-grotesk font-medium text-neutral-600 hover:text-white transition-colors duration-300 cursor-default tracking-tight uppercase">Echo<span className="text-[#00ffc4]">.ai</span></span>
<span className="text-2xl font-playfair font-semibold italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Helix</span>
<span className="text-2xl font-dm-sans font-bold tracking-tighter text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Stratis</span>
<span className="text-2xl font-manrope font-extrabold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">BOLT</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Aura</span>
</div>

<div className="flex items-center gap-16 shrink-0">
<span className="text-2xl font-bricolage font-bold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Nexus</span>
<span className="text-2xl font-instrument-serif italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Vantage</span>
<span className="text-xl font-space-grotesk font-medium text-neutral-600 hover:text-white transition-colors duration-300 cursor-default tracking-tight uppercase">Echo<span className="text-[#00ffc4]">.ai</span></span>
<span className="text-2xl font-playfair font-semibold italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Helix</span>
<span className="text-2xl font-dm-sans font-bold tracking-tighter text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Stratis</span>
<span className="text-2xl font-manrope font-extrabold text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">BOLT</span>
<span className="text-2xl font-merriweather font-black italic text-neutral-600 hover:text-white transition-colors duration-300 cursor-default">Aura</span>
</div>
</div>
</div>
<style>
        @keyframes ticker-slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
        }
        .animate-ticker {
            animation: ticker-slide 40s linear infinite;
        }
        .animate-ticker:hover {
            animation-play-state: paused;
        }
    </style>
</div>

<div className="max-w-5xl mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-b from-[#00ffc4]/20 to-transparent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-neutral-900 aspect-video ring-1 ring-black/5">
<img alt="Masterclass" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity duration-500 grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40"></div>
<div className="md:p-12 flex flex-col pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-[#00ffc4]/30 overflow-hidden shadow-lg">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80" style={{}}/>
</div>
<div className="text-left">
<h3 className="leading-tight text-shadow-sm text-lg font-medium text-white">$10M in Pipeline in 3 months</h3>
<p className="text-sm text-neutral-400" style={{}}>with Dan Leary at Pallas Security</p>
</div>
</div>
<div className="hidden sm:flex gap-3 text-white/90 text-sm font-medium">
<span className="flex items-center gap-2 bg-black/50 border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur-md">Quick Wins with Nexsales</span>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-300 cursor-pointer">
<div className="w-24 h-24 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_40px_rgba(0,255,196,0.1)] group-hover:shadow-[0_0_60px_rgba(0,255,196,0.2)] transition-shadow">
<svg className="lucide lucide-play w-10 h-10 text-white fill-white ml-1" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="flex justify-between items-end">
<div className="bg-black/60 backdrop-blur-md rounded-lg px-4 py-2 text-white text-sm font-medium border border-white/10">
                  See how we book 50+ meetings/mo
                </div>
<div className="flex gap-4">
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><svg className="lucide lucide-volume-2 w-5 h-5" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg></button>
<button className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"><svg className="lucide lucide-maximize w-5 h-5" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg></button>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
<div className="py-12 px-6 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2" style={{}}>$2B+</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Pipeline Generated <svg className="lucide lucide-trending-up w-4 h-4 text-neutral-600" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg></div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">8.2x</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Higher Engagement with AI</div>
</div>
<div className="flex flex-col group hover:bg-white/[0.02] transition-colors text-center pt-12 pr-6 pb-12 pl-6 items-center justify-center">
<div className="md:text-5xl group-hover:text-[#00ffc4] transition-colors text-4xl font-semibold text-white tracking-tight mb-2">$30M+</div>
<div className="uppercase flex gap-2 text-sm font-medium text-neutral-500 tracking-wide gap-x-2 gap-y-2 items-center">Marketing Spend Saved</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-32 pb-32 relative">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-20">
<h2 className="md:text-6xl leading-[1.1] transition-all duration-700 text-5xl font-semibold text-white tracking-tight opacity-0 translate-y-4">
            If you deal with any of 
            <span className="font-normal font-serif-italic">this we can help...</span>
</h2>
</div>

<div className="flex flex-wrap justify-center gap-6 mb-20">

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-indigo-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Your campaigns are underperforming due to dirty data in your CRM.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-zinc-500/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-zinc-700/10 border border-zinc-700/20 flex items-center justify-center text-zinc-400 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-ghost w-5 h-5" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">You've tried lead generation. Got ghosted by MQLs. Gave up.</p>
</div>

<div className="md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-neutral-900 transition-colors duration-300 group hover:border-red-900/30 bg-neutral-900/50 w-full border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-activity w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Your pipeline looks like a heart monitor - up, down, terrifying.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-orange-900/30">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-thumbs-down w-5 h-5" data-lucide="thumbs-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"></path><path d="M17 14V2"></path></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Your reps work hard on the wrong accounts at the wrong time.</p>
</div>

<div className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-neutral-900/50 border border-white/5 rounded-2xl p-8 hover:bg-neutral-900 transition-colors duration-300 group hover:border-yellow-900/30">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<p className="leading-relaxed text-lg font-medium text-neutral-300">Your team spends more time researching than selling.</p>
</div>
</div>

<div className="flex flex-col items-center text-center">
<button className="relative group" onclick="toggleModal(true)">
<div className="absolute -inset-1 bg-gradient-to-r from-[#00ffc4] to-[#047857] rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
<div className="hover:from-[#059669] hover:to-[#10b981] flex gap-3 transition-all text-xl font-semibold text-white bg-gradient-to-r from-[#047857] to-[#059669] border-white/10 border rounded-xl pt-5 pr-12 pb-5 pl-12 relative shadow-2xl gap-x-3 gap-y-3 items-center">Book A Consultation Call</div>
</button>
<div className="flex flex-col md:flex-row gap-3 text-sm text-neutral-400 mt-8 gap-x-3 gap-y-3 items-center">
<div className="flex items-center gap-2">
</div>
<span className="">A diagnostic conversation to understand your GTM challenges and design a tailored solution.</span>
</div>
<div className="mt-6 inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5 border border-white/10 backdrop-blur-sm">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-300">Limited Spots Available For February 2026</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-[#047857] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 bg-[#00ffc4]/10 border border-[#00ffc4]/20 rounded-full px-3 py-1 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#00ffc4]"></span>
<span className="uppercase text-xs font-semibold text-[#00ffc4] tracking-wide">Demand Generation &amp; ABM</span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.1] transition-all duration-700 text-4xl font-semibold text-white tracking-tight mb-8 opacity-0 translate-y-4">We find prospects in the dark funnel</h2>
</div>
<div className="grid md:grid-cols-12 gap-12 mt-12 gap-x-12 gap-y-12">
<div className="md:col-span-7 space-y-6">
<h3 className="text-2xl font-medium text-white">Everyone talks about ICP. We focus on <span className="text-[#00ffc4]">the human behind the persona.</span></h3>
<div className="space-y-6 text-lg text-neutral-400 leading-relaxed">
<p className="">Here's the reality: only 3% of your audience is in-market. Rest 97%? They're in this dark funnel that you're not focusing on.</p>
<p className="font-medium text-white">We activate that demand.</p>
<p className="">We dig into what's actually going on in your prospects' heads — surveys, discussion threads, digital interactions, intent and find the data points that signal someone's in a situation where they need what you sell.</p>
<p className="">Right timing, right messaging and a very high rate of disqualification of our very own leads to ensure that only the right ones pass the test of "real intent"</p>
</div>
<div className="border-white/5 border-t mt-8 pt-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<svg className="lucide lucide-message-circle w-6 h-6 text-white" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div className="text-xl font-medium text-white">Result: Shared Ownership of Leads, Positive Conversations &amp; Pipeline Generation!</div>
</div>
</div>
</div>

<div className="md:col-span-5 relative">
<div className="bg-neutral-900 rounded-2xl border border-white/10 p-6 h-full relative overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-[shimmer_2s_infinite]" style={{animation: 'shimmer 4s infinite linear'}}></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-8">

<div className="bg-neutral-950/50 p-4 rounded-xl border border-white/5 opacity-50 blur-[1px]">
<div className="text-xs text-neutral-500 mb-2 font-mono">TRADITIONAL ICP TARGETING</div>
<div className="text-sm text-neutral-400">"Hi {FirstName}, are you looking for software..."</div>
</div>

<div className="flex justify-center"><svg className="lucide lucide-arrow-down w-6 h-6 text-neutral-600" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg></div>

<div className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-5 rounded-xl border border-[#00ffc4]/30 shadow-[0_0_30px_rgba(0,255,196,0.1)]">
<div className="flex items-center gap-2 mb-3">
<div className="text-[10px] font-bold text-black bg-[#00ffc4] rounded pt-0.5 pr-1.5 pb-0.5 pl-1.5">ICP DETECTED</div>
<div className="text-xs text-neutral-400 font-mono">SIGNAL: HIRING + COMMUNITY POST</div>
</div>
<div className="leading-snug text-sm text-neutral-200">"Saw you're scaling the security team but mentioned struggling with compliance data accuracy on Reddit..."</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-b pt-24 pb-24" id="key-solutions">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">

<h1 className="md:text-5xl md:mb-20 text-4xl font-semibold text-white tracking-tight text-center mb-16">Two ways we help our clients grow</h1>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen"></div>

<div className="relative h-40 mb-2 flex items-center">

<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<svg className="lucide lucide-bot w-7 h-7 text-emerald-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>

<div className="absolute left-8 md:left-10 bg-[#1A1D21] border border-white/10 shadow-2xl rounded-xl p-4 flex items-start gap-4 w-full max-w-[340px] animate-float backdrop-blur-md z-10 top-2">

<div className="shrink-0 bg-white rounded-lg p-1.5 mt-0.5 shadow-sm">
<svg className="w-5 h-5" fill="none" viewbox="0 0 127 127" xmlns="http://www.w3.org/2000/svg">
<path d="M28.35 0C12.7 0 0 12.7 0 28.35C0 44 12.7 56.7 28.35 56.7H42.5V28.35C42.5 12.7 29.8 0 28.35 0Z" fill="#36C5F0"></path>
<path d="M56.7 42.5C56.7 58.15 44 70.85 28.35 70.85C12.7 70.85 0 58.15 0 42.5V28.35H28.35C44 28.35 56.7 41.05 56.7 42.5Z" fill="#2EB67D"></path>
<path d="M42.5 84.5C42.5 100.15 55.2 112.85 70.85 112.85C86.5 112.85 99.2 100.15 99.2 84.5V70.35H70.85C55.2 70.35 42.5 83.05 42.5 84.5Z" fill="#ECB22E"></path>
<path d="M84.5 56.7C84.5 41.05 97.2 28.35 112.85 28.35C128.5 28.35 141.2 41.05 141.2 56.7V70.85H112.85C97.2 70.85 84.5 58.15 84.5 56.7Z" fill="#E01E5A"></path>
</svg>
</div>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between w-full mb-1">
<span className="text-sm font-semibold text-white tracking-tight">Notification from Nexsales</span>
<span className="text-[10px] text-neutral-500">Just now</span>
</div>
<span className="text-sm text-neutral-300 leading-snug">New meeting booked with <span className="text-emerald-400 font-medium">Acme Inc.</span> for Tuesday at 2pm.</span>

<div className="flex gap-2 mt-3">
<div className="flex text-[10px] font-medium text-neutral-400 bg-white/5 h-6 border-white/10 border rounded pr-3 pl-3 items-center">View CRM</div>
<div className="flex text-[10px] font-medium text-neutral-400 bg-white/5 h-6 border-white/10 border rounded pr-3 pl-3 items-center">View Sales Intel</div>
</div>
</div>
</div>
</div>

<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">Demand Generation</h2>
<p className="text-xs font-semibold tracking-[0.15em] text-emerald-500 uppercase mb-6">
                            WE BOOK. YOU CLOSE.
                        </p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 max-w-md mb-8">We run the whole outbound motion - from research to booked meetings. Rep calendar fills up automatically. You only pay 50% for qualified meetings and balance 50% upon pipegen</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<ul className="space-y-3">
<li className="flex gap-3 md:text-base group-hover:text-neutral-200 transition-colors text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(16, 185, 129)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Full service execution
                            </li>
<li className="flex gap-3 md:text-base group-hover:text-neutral-200 transition-colors text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">Performance based pilot</li>
</ul>
</div>
</div>

<div className="group md:p-12 overflow-hidden flex flex-col transition-all duration-500 hover:border-white/20 hover:bg-[#0f0f0f] bg-[#0A0A0A] h-full border-white/10 border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse-slow mix-blend-screen"></div>

<div className="relative h-40 mb-2 flex items-center">

<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm z-0">
<svg className="lucide lucide-database w-7 h-7 text-blue-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>

<div className="absolute left-10 md:left-12 bg-[#1A1D21]/95 border border-white/10 shadow-2xl rounded-xl p-3 w-[220px] animate-float backdrop-blur-md z-10 top-0" style={{animationDelay: '-2s'}}>
<div className="flex items-center gap-2.5 mb-3 border-b border-white/5 pb-2.5">
<div className="w-7 h-7 rounded-full bg-neutral-700 flex items-center justify-center text-[10px] font-medium text-white shrink-0">JD</div>
<div className="min-w-0">
<div className="text-[11px] font-semibold text-white truncate">John Doe</div>
<div className="text-[10px] truncate text-neutral-500">VP Sales @ TechCorp</div>
</div>
</div>
<div className="space-y-1.5">

<div className="flex items-center justify-between text-[10px] reveal-delay-1 bg-white/5 p-1.5 rounded border border-white/5">
<span className="text-neutral-400 flex items-center gap-1.5"><svg className="lucide lucide-smartphone w-2.5 h-2.5" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg> Mobile</span>
<span className="text-blue-200 font-mono tracking-wide">...555-0123</span>
</div>

<div className="flex items-center justify-between text-[10px] reveal-delay-2 bg-white/5 p-1.5 rounded border border-white/5">
<span className="text-neutral-400 flex items-center gap-1.5"><svg className="lucide lucide-mail w-2.5 h-2.5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> Work</span>
<span className="text-emerald-200 flex items-center gap-1">Verified <svg className="lucide lucide-check-circle-2 w-2.5 h-2.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg></span>
</div>

<div className="flex items-center gap-2 text-[10px] text-neutral-400 reveal-delay-3 pt-1">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                                    Trigger: New in role
                                </div>
</div>
</div>
</div>

<div className="relative z-0 mt-auto pt-6">
<h2 className="md:text-3xl transition-all duration-700 text-2xl font-semibold text-white tracking-tight mb-3 opacity-0 translate-y-4">BDR Orchestration</h2>
<p className="uppercase text-xs font-semibold text-blue-500 tracking-[0.15em] mb-6">
                            YOUR REPS. SUPERCHARGED.
                        </p>
<p className="leading-relaxed text-lg font-normal text-neutral-400 mb-8">We deliver ready-to-work motions i.e. lists, sequences, messaging and intel so that your team stops researching and starts closing. Improve efficiencies with 3X PipeGen Guaranteed.</p>
<div className="w-full h-px bg-white/10 mb-8"></div>
<ul className="space-y-3">
<li className="flex gap-3 md:text-base group-hover:text-neutral-200 transition-colors text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Verified phone numbers &amp; emails
                            </li>
<li className="flex items-center gap-3 text-neutral-400 text-sm md:text-base group-hover:text-neutral-200 transition-colors">
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                                Real-time buying signals
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col text-white bg-[#050505] w-full border-white/5 border-b pt-20 pb-40 relative items-center">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] mask-radial pointer-events-none"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffc4] rounded-full blur-[150px] opacity-[0.05] pointer-events-none"></div>
<div className="text-center w-full max-w-4xl z-10 relative mb-2 px-6">
<h2 className="md:text-6xl bg-clip-text transition-all duration-700 text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-b from-white via-white/90 to-white/50 mb-6 pb-4 opacity-0 translate-y-4">Our Sales Intel Reports</h2>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto">A 4-Layered Intelligence Report. Context for Your Sellers.</p>
</div>
<div className="relative flex flex-col items-center w-full max-w-[1400px]">

<div className="relative w-[500px] h-[500px] flex items-center justify-center z-20 scale-75 md:scale-100 origin-bottom">
<div className="absolute inset-0 animate-spin-slow">
<svg className="absolute inset-0 w-full h-full text-white/5" viewbox="0 0 600 600">
<g className="stroke-current stroke-[1]">
<line className="animate-flow-in" x1="300" x2="300" y1="50" y2="220"></line>
<line className="animate-flow-in delay-1" x1="550" x2="380" y1="300" y2="300"></line>
<line className="animate-flow-in delay-2" x1="300" x2="300" y1="550" y2="380"></line>
<line className="animate-flow-in delay-3" x1="50" x2="220" y1="300" y2="300"></line>
<line className="animate-flow-in delay-1" x1="476" x2="356" y1="123" y2="243"></line>
<line className="animate-flow-in delay-2" x1="476" x2="356" y1="476" y2="356"></line>
<line className="animate-flow-in delay-3" x1="123" x2="243" y1="476" y2="356"></line>
<line className="animate-flow-in" x1="123" x2="243" y1="123" y2="243"></line>
</g>
</svg>

<div className="absolute top-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)] z-20">
<svg className="lucide lucide-cpu w-7 h-7 text-[#00ffc4]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
<div className="absolute top-[123px] right-[123px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-bot w-7 h-7 text-[#00ffc4]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
<div className="absolute top-1/2 right-[50px] translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-linkedin w-7 h-7 text-[#00ffc4]" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>
<div className="absolute bottom-[123px] right-[123px] translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-database w-7 h-7 text-[#00ffc4]" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
</div>
<div className="absolute bottom-[50px] left-1/2 -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-webhook w-7 h-7 text-[#00ffc4]" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg>
</div>
</div>
<div className="absolute bottom-[123px] left-[123px] -translate-x-1/2 translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-globe w-7 h-7 text-[#00ffc4]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>
<div className="absolute top-1/2 left-[50px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-messages-square w-7 h-7 text-[#00ffc4]" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
</div>
</div>
<div className="absolute top-[123px] left-[123px] -translate-x-1/2 -translate-y-1/2 animate-spin-slow-reverse">
<div className="w-14 h-14 bg-neutral-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg">
<svg className="lucide lucide-cloud w-7 h-7 text-[#00ffc4]" data-lucide="cloud" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
</div>
</div>
</div>
<div className="absolute z-30 flex items-center justify-center">
<div className="w-28 h-28 bg-[#0a0a0a] rounded-3xl border border-[#00ffc4]/30 flex items-center justify-center shadow-[0_0_50px_rgba(0,255,196,0.2)] relative overflow-hidden ring-1 ring-white/10">
<div className="absolute inset-0 bg-[#00ffc4]/10 animate-pulse"></div>
<svg className="lucide lucide-layers z-10 relative w-[48px] h-[48px]" data-icon-replaced="true" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '48px', height: '48px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
</div>
</div>

<div className="relative w-full max-w-4xl h-32 -mt-20 z-10 px-4 hidden md:block">
<div className="absolute left-1/2 -translate-x-px top-0 w-[1px] h-[40%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-main"></div>
</div>
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[50%] h-[1px] bg-white/5 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00ffc4] to-transparent animate-pulse-expand"></div>
</div>
<div className="absolute top-[40%] left-[25%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
<div className="absolute top-[40%] left-[75%] -translate-x-px w-[1px] h-[60%] bg-white/5 overflow-hidden">
<div className="w-full h-full bg-gradient-to-b from-transparent via-[#00ffc4] to-transparent absolute animate-pulse-feeder"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-20 md:mt-0 w-full max-w-4xl mt-4 pr-4 pl-4 relative gap-x-6 gap-y-6">
<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '0s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00ffc4] to-[#047857] flex items-center justify-center text-[10px] font-bold text-black">TW</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Firmographics &amp; Contact Info</span>
<span className="text-[10px] text-neutral-500">Last Updated: 12 hours ago</span>
</div>
<div className="ml-auto text-neutral-600"><svg className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500">Account Name: Acme Corp </span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '0.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">BC</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Organizational Intent</span>
<span className="text-[10px] text-neutral-500">Last Updated: 3 hours ago</span>
</div>
<div className="ml-auto text-neutral-600"><svg className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="aspect-video overflow-hidden flex bg-black/50 w-full border-white/5 border rounded-lg mb-3 relative items-center justify-center">
<span className="text-xs text-neutral-500">Acme Corp's PR, 6Sense Intent, Bombora Intent etc. to be added</span>
</div>
<div className="mt-auto pt-2 flex items-center gap-1.5 border-t border-white/5">
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '1s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-[10px] font-bold text-white">MK</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Individual Intent</span>
<span className="text-[10px] text-neutral-500">Curated by AI Agents &amp; Social Analysts</span>
</div>
<div className="ml-auto text-neutral-600"><svg className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="relative w-full aspect-video rounded-lg border border-white/5 overflow-hidden mb-3 bg-black/50 flex items-center justify-center">
<span className="text-xs text-neutral-500">Web Scraping &amp; LinkedIn Category Intent to be added</span>
</div>
</div>
</div>

<div className="group relative bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all hover:border-[#00ffc4]/30 animate-float-card" style={{animationDelay: '1.5s'}}>
<div className="p-5 flex flex-col h-full">
<div className="flex items-center gap-3 mb-4">
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-[10px] font-bold text-white">AL</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-neutral-200">Buyer Intelligence</span>
<span className="text-[10px] text-neutral-500">DISC Profiling for Outreach Approach</span>
</div>
<div className="ml-auto text-neutral-600"><svg className="lucide lucide-reply w-3.5 h-3.5" data-lucide="reply" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 18v-2a4 4 0 0 0-4-4H4"></path><path d="m9 17-5-5 5-5"></path></svg></div>
</div>
<div className="relative w-full aspect-video rounded-lg border border-white/5 overflow-hidden mb-3 bg-black/50 flex items-center justify-center">
<span className="text-xs text-neutral-500">DISC profile to be added along with approach notes</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 relative" id="playbook">
<div className="absolute inset-0 bg-gradient-to-b from-[#047857]/20 via-[#050505] to-[#047857]/20 opacity-20 pointer-events-none"></div>
<div className="max-w-5xl z-10 mr-auto ml-auto pr-6 pl-6 relative">

<div className="text-center mb-24">
<div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-6">
<span className="w-2 h-2 rounded-full bg-[#00ffc4] animate-pulse"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">Our Demand Activation Framework</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] drop-shadow-sm transition-all duration-700 opacity-0 translate-y-4">
            How we turn strangers  into pipeline
          </h2>
</div>

<div className="relative w-full">

<div className="sticky top-24 z-10 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-[#00ffc4]/10 text-[#00ffc4] p-2 rounded-lg border border-[#00ffc4]/20"><svg className="lucide lucide-search w-6 h-6" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg></div>
<span className="uppercase text-sm font-semibold text-[#00ffc4] tracking-wide">Step 1</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Market Research &amp; ICP Deep-Dive</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Before we send a single message, we figure out what's actually going on in your prospects' world. We scrape LinkedIn posts, build intel, and uncover 4-layered intel.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">The exact words your prospects use</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Macro triggers that indicate intent</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 p-4 rounded-xl border border-white/10 shadow-sm mb-3">
<div className="flex items-center gap-2 mb-2">
<div className="w-5 h-5 bg-orange-600 rounded-full"></div>
<span className="text-[10px] text-neutral-500">u/SaaS_Founder • 2d ago</span>
</div>
<div className="text-sm font-semibold text-white mb-1">How do you handle outbound at scale?</div>
<p className="text-xs text-neutral-400 leading-relaxed bg-yellow-900/20 p-1 -mx-1 rounded">My biggest frustration is <span className="font-bold text-white">bad data accuracy</span>.</p>
</div>
</div>
</div>
</div>

<div className="sticky top-28 z-20 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-purple-900/30 text-purple-400 p-2 rounded-lg border border-purple-500/20"><svg className="lucide lucide-network w-6 h-6" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg></div>
<span className="uppercase text-sm font-semibold text-purple-400 tracking-wide">Step 2</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Signal Mapping &amp; Data Collection</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Most signals don't live in standard databases. We build custom AI agents to find specific certifications, forum posts, or tech stack changes that indicate buying intent.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Custom scrapers for unique signals</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Automated enrichment workflows</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center font-mono">
<div className="text-xs text-green-500 mb-1">&gt; Initiating scan for "Soc2 Type II"...</div>
<div className="bg-neutral-800/50 p-3 rounded mb-2 border-l-2 border-[#00ffc4]">
<div className="text-[10px] text-neutral-400 mb-1">MATCH FOUND: Acme Corp</div>
<div className="text-xs text-white">Signal: "Hiring Head of Security"</div>
</div>
</div>
</div>
</div>

<div className="sticky top-32 z-30 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-blue-900/30 text-blue-400 p-2 rounded-lg border border-blue-500/20"><svg className="lucide lucide-send w-6 h-6" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></div>
<span className="uppercase text-sm font-semibold text-blue-400 tracking-wide">Step 3</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">1:1 Outreach</h3>
<p className="leading-relaxed text-neutral-400 mb-8">Every message is crafted for that specific person. Surveys gathered signals and AI writes copy that's relevant, timely, and actually worth replying to. All with human-in-the-loop</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Messages referencing specific pain</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Offers positioned around their context</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 rounded-xl shadow-sm border border-white/10 overflow-hidden p-5">
<p className="text-sm text-neutral-200 leading-relaxed">Hey James,  Saw you guys just posted looking for a <span className="bg-yellow-900/50 text-yellow-200 px-1 rounded">Head of Security</span>...</p>
</div>
</div>
</div>
</div>

<div className="sticky top-36 z-40 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-pink-900/30 text-pink-400 p-2 rounded-lg border border-pink-500/20"><svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg></div>
<span className="uppercase text-sm font-semibold text-pink-400 tracking-wide">Step 4</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Reply Handling &amp; Booking</h3>
<p className="leading-relaxed text-neutral-400 mb-8">We don't just dump positive replies in your inbox. We handle the meeting orchestration, follow-up post meeting and OWN the Pipeline.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Replies handled within hours</span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm text-neutral-300 font-medium">Objections managed automatically</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center items-center">
<div className="bg-neutral-800 w-full rounded-xl border border-[#00ffc4]/20 p-3 shadow-sm flex items-center gap-3">
<div className="bg-[#00ffc4]/10 p-2 rounded-lg text-[#00ffc4]"><svg className="lucide lucide-calendar-check w-5 h-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg></div>
<div className="">
<div className="text-xs font-bold text-white">Meeting Booked</div>
<div className="text-[10px] text-neutral-400">Tue, Oct 24 • 2:00 PM EST</div>
</div>
</div>
</div>
</div>
</div>

<div className="sticky top-40 z-50 mb-12">
<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl ring-1 ring-white/5 flex flex-col md:flex-row gap-12 relative overflow-hidden min-h-[500px] border border-white/5">
<div className="md:w-1/2 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-6">
<div className="bg-teal-900/30 text-teal-400 p-2 rounded-lg border border-teal-500/20"><svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg></div>
<span className="uppercase text-sm font-semibold text-teal-400 tracking-wide">Step 5 &amp; On-Going</span>
</div>
<h3 className="text-3xl font-semibold text-white tracking-tight mb-4">Ongoing Management &amp; Optimization</h3>
<p className="leading-relaxed text-neutral-400 mb-8">We manage everything - paid media, UI/UX, A/B testing new angles, reporting, and scaling volume. You focus on closing.</p>
<div className="space-y-4">
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Business Intelligence </span>
</div>
<div className="flex items-start gap-3">
<div className="mt-1 bg-[#059669]/20 p-1 rounded-full"><svg className="lucide lucide-check w-3 h-3 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<span className="text-sm font-medium text-neutral-300">Personalization &amp; Prioritization Engine</span>
</div>
</div>
</div>
<div className="md:w-1/2 bg-black/40 rounded-2xl border border-white/10 p-6 relative overflow-hidden flex flex-col justify-center">
<div className="bg-neutral-800 p-5 rounded-xl border border-white/10 shadow-sm">
<div className="flex justify-between items-center mb-6">
<h4 className="font-semibold text-white text-sm">Campaign Performance</h4>
<span className="bg-[#00ffc4]/10 text-[#00ffc4] text-[10px] font-bold px-2 py-1 rounded-full">+24% MoM</span>
</div>
<div className="flex items-end gap-2 h-32 w-full">
<div className="w-full bg-[#059669]/30 rounded-t h-[30%]"></div>
<div className="w-full bg-[#059669]/50 rounded-t h-[45%]"></div>
<div className="w-full bg-[#059669]/70 rounded-t h-[60%]"></div>
<div className="w-full bg-[#059669] rounded-t h-[90%] shadow-[0_0_10px_rgba(5,150,105,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0a0a0a] border-white/5 border-t pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-16 flex justify-center items-center gap-6">
<svg className="w-12 h-12 md:w-20 md:h-20 text-neutral-800 opacity-50" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24"><path d="M18 20c0-6-3-11-8-12M6 20c0-6 3-11 8-12"></path><path d="M18 20c-1-2-1.5-3.5-1.5-5M6 20c1-2 1.5-3.5 1.5-5"></path><path d="M13 13c1 0 2 .5 2 1.5s-1 1.5-2 1.5M11 13c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path d="M16 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5M8 10c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path d="M17 7c1 0 2 .5 2 1.5s-1 1.5-2 1.5M7 7c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path></svg>
<h2 className="md:text-5xl transition-all duration-700 text-3xl font-semibold text-white tracking-tight max-w-3xl opacity-0 translate-y-4">In 2025, we’ve helped 40+ businesses with PipeGen</h2>
<svg className="w-12 h-12 md:w-20 md:h-20 text-neutral-800 opacity-50 transform scale-x-[-1]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24"><path d="M18 20c0-6-3-11-8-12M6 20c0-6 3-11 8-12"></path><path d="M18 20c-1-2-1.5-3.5-1.5-5M6 20c1-2 1.5-3.5 1.5-5"></path><path d="M13 13c1 0 2 .5 2 1.5s-1 1.5-2 1.5M11 13c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path d="M16 10c1 0 2 .5 2 1.5s-1 1.5-2 1.5M8 10c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path><path d="M17 7c1 0 2 .5 2 1.5s-1 1.5-2 1.5M7 7c-1 0-2 .5-2 1.5s1 1.5 2 1.5"></path></svg>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="space-y-6">
<div className="bg-neutral-900 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-relaxed font-medium text-neutral-300 mb-6">"Nexsales built the engine we needed. We went from 0 to 15 meetings a month."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div className=""><div className="text-sm font-semibold text-white">Kieran Routledge</div><div className="text-[10px] text-neutral-500">Head of Demand Gen, Premier Int.</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">"The attention to detail on the ICP research is insane. They knew our market better than we did."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div className=""><div className="text-sm font-semibold text-white">James Miller</div><div className="text-[10px] text-neutral-500">CEO @ ScaleUp</div></div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-relaxed font-medium text-neutral-300 mb-6">"We are seeing awesome results from the BDR orchestration system. Pipeline is fuller than ever."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div className=""><div className="text-sm font-semibold text-white">Will Heylings</div><div className="text-[10px] text-neutral-500">CRO @ Atom Learning</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="text-neutral-300 leading-relaxed mb-6 font-medium text-sm">"A true partner in growth. Not just a vendor. Their team is proactive and incredibly smart."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div className=""><div className="text-sm font-semibold text-white">Sarah Jenkins</div><div className="text-[10px] text-neutral-500">VP Marketing @ TechFlow</div></div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">"Their campaigns have consistently delivered around the clock with a consistent conversion rate. This is the most effective way that we've found."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80" style={{}}/>
<div><div className="text-sm font-semibold text-white">Adam Jones</div><div className="text-[10px] text-neutral-500">CCO @ BePro</div></div>
</div>
</div>
<div className="bg-neutral-900 rounded-2xl p-6 shadow-sm border border-white/5">
<div className="flex gap-1 text-yellow-400 mb-4"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-relaxed text-sm font-medium text-neutral-300 mb-6">"The ROI we've seen in just 3 months is absurd. They paid for themselves 10x over."</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63c0675d-4600-4a02-a30a-14a056724971_800w.png" style={{}}/>
<div><div className="text-sm font-semibold text-white">Michael Ross</div><div className="text-[10px] text-neutral-500">Founder @ DataSync</div></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/5 border-t pt-24 pb-24" id="resources">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="">
<h2 className="md:text-5xl transition-all duration-700 text-3xl font-semibold text-white tracking-tight mb-4">Engineered Results</h2>
<p className="text-lg text-neutral-400 max-w-xl">Real revenue impact for high-growth B2B companies.</p>
</div>
</div>
<div className="space-y-12">

<div className="bg-neutral-900 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-[#047857]/10 border border-white/5 flex flex-col md:flex-row gap-12 items-center relative overflow-hidden group">
<div className="flex-1 space-y-8 relative z-10">
<div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span className="">Case Study: Premier International</span>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">400% Increase in qualified pipeline within 90 days.</h3>
<p className="leading-relaxed text-lg text-neutral-400">"Before Nexsales, we relied on sporadic referrals. They built an engine that now generates 70% of our new business revenue."</p>
<div className="space-y-3">
<div className="flex items-center gap-3"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#00ffc4]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span className="font-medium text-neutral-300">Sales Qualified Leads</span></div>
<div className="flex items-center gap-3"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#00ffc4]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span className="font-medium text-neutral-300">B2B Data</span></div>
</div>
<button className="btn-glow inline-flex transition-transform hover:-translate-y-1 hover:shadow-lg font-medium text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center" onclick="toggleModal(true)">Partner With Us</button>
</div>
<div className="flex-1 w-full h-[400px] bg-[#047857]/20 rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-white/5">

<div className="bg-gradient-to-br from-[#00ffc4]/10 via-transparent to-[#047857]/10 opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
<div className="relative bg-black text-white rounded-3xl p-6 shadow-2xl w-72 border border-white/10">

<div className="absolute -top-3 left-4 right-4 h-4 bg-neutral-800 rounded-t-xl opacity-50 scale-95"></div>
<div className="absolute -top-6 left-8 right-8 h-4 bg-neutral-800 rounded-t-xl opacity-30 scale-90"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/5">
<svg className="lucide lucide-trending-up w-6 h-6 text-[#00ffc4]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 bg-[#00ffc4] rounded-full animate-pulse"></span>
<span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">New</span>
</div>
<div className="text-lg font-bold text-white" style={{}}>$33M Pipe</div>
<div className="text-xs text-neutral-500">from 23 HQLs &amp; SQLs</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="md:p-12 shadow-[#047857]/10 flex flex-col md:flex-row-reverse overflow-hidden group bg-neutral-900 border-white/5 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-12 gap-y-12 items-center">
<div className="flex-1 space-y-8 relative z-10">
<div className="flex items-center gap-2 text-neutral-500 text-sm font-medium">
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> <span className="">Case Study: Vonage</span>
</div>
<h3 className="md:text-5xl leading-tight text-4xl font-semibold text-white tracking-tight">$2.4M Closed-won revenue attributed to Nexsales.</h3>
<p className="leading-relaxed text-lg text-neutral-400">"The precision of their targeting is unmatched. We aren't just meeting ICPs; we are having high-context conversations with the right decision makers."</p>
<div className="space-y-3">
<div className="flex items-center gap-3"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#00ffc4]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span className="font-medium text-neutral-300">Enterprise Deal Cycles Reduced</span></div>
<div className="flex items-center gap-3"><svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#00ffc4]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg><span className="font-medium text-neutral-300">Revenue Attribution Dashboards</span></div>
</div>
<button className="btn-glow inline-flex transition-transform hover:-translate-y-1 hover:shadow-lg font-medium text-black bg-white rounded-full pt-4 pr-8 pb-4 pl-8 items-center justify-center" onclick="toggleModal(true)">View Case Study</button>
</div>
<div className="flex-1 w-full h-[400px] bg-[#00ffc4]/10 rounded-[2rem] flex items-center justify-center relative overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-[#00ffc4]/20 via-transparent to-[#059669]/20 opacity-60"></div>
<div className="relative z-10 transform transition-transform duration-700 group-hover:scale-105">
<div className="text-white bg-black w-72 border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 relative shadow-2xl">
<div className="absolute -top-3 left-4 right-4 h-4 bg-neutral-800 rounded-t-xl opacity-50 scale-95"></div>
<div className="absolute -top-6 left-8 right-8 h-4 bg-neutral-800 rounded-t-xl opacity-30 scale-90"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center border border-white/5">
<svg className="lucide lucide-arrow-up-right w-6 h-6 text-[#00ffc4]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1">
<span className="w-2 h-2 bg-[#00ffc4] rounded-full animate-pulse"></span>
<span className="text-[10px] text-neutral-400 font-semibold uppercase tracking-wider">New</span>
</div>
<div className="text-lg font-bold text-white">Deal Signed!</div>
<div className="text-xs text-neutral-500">with Unified Intelligence &amp; AI</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5 relative">
<div className="max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-2 transition-all duration-700 opacity-0 translate-y-4">Got questions? <span className="font-normal text-[#00ffc4] font-serif-italic">We got answers.</span></h2>
</div>
<div className="space-y-4">

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex text-left w-full pt-6 pr-6 pb-6 pl-6 items-center justify-between" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">How are you different from other agencies?</span>
<svg className="lucide lucide-plus faq-icon transition-transform duration-300 w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                Most agencies generate leads and charge retainers whether it works or not. We find right descision makers, curate outreach using data we scrape ourselves,setup qualified meetings that show up and own the pipeline generation.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">What counts as a qualified meeting?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                We decide together before we start. Industry, size, title, revenue, techstack - whatever matters to you. If they don't fit, you don't pay.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">How do you find data others can't?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                We build custom AI agents that scrape signals no database has. If it exists online, we can get it.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">How fast will I see results?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                Most clients see meetings within weeks. One closed $240K in 30 days. Depends on your market.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">What if it doesn't work?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                You don't pay.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="group-hover:text-[#00ffc4] transition-colors text-lg font-medium text-white">Long-term contract?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                No. Minimum commitment to give it time, but no lock-ins.
              </div>
</div>
</div>

<div className="faq-item group bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#00ffc4]/20">
<button className="flex items-center justify-between w-full p-6 text-left" onclick="toggleFaq(this)">
<span className="text-lg font-medium text-white group-hover:text-[#00ffc4] transition-colors">Why performance-based?</span>
<svg className="lucide lucide-plus faq-icon w-5 h-5 text-neutral-500 transition-transform duration-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
<div className="faq-answer">
<div className="px-6 pb-6 text-neutral-400 leading-relaxed">
                It keeps us honest. If we don't deliver, we don't eat.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden flex flex-col text-center border-white/5 border-t pt-32 pb-32 relative items-center">

<div className="absolute inset-0 bg-gradient-to-t from-[#047857]/20 to-transparent opacity-40 pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#00ffc4] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl px-6">
<h2 className="md:text-7xl leading-tight transition-all duration-700 text-5xl font-semibold text-white tracking-tight mb-8 opacity-0 translate-y-4">The 97% is waiting.</h2>
<p className="leading-relaxed text-xl text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">
          While everyone's fighting over the 3% actively buying. We'll introduce you to the rest. 
          <span className="text-white font-medium">You only pay when it works.</span>
</p>
<button className="group hover:bg-[#059669] hover:text-white hover:shadow-[0_0_60px_rgba(0,255,196,0.5)] transition-all flex gap-3 text-xl font-bold text-black bg-[#00ffc4] rounded-full mr-auto ml-auto pt-5 pr-10 pb-5 pl-10 relative shadow-[0_0_40px_rgba(0,255,196,0.3)] gap-x-3 gap-y-3 items-center justify-center" onclick="toggleModal(true)">
<span className="">Apply For A Pilot Campaign</span>
<svg className="lucide lucide-arrow-right w-6 h-6 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</section>

<footer className="bg-[#0a0a0a] border-t border-white/5 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
</div>
<div className="text-sm text-neutral-500">© 2025 Nexsales Corp. All rights reserved.</div>
<div className="flex gap-6 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</footer>

<div className="fixed bottom-6 left-6 z-40 max-w-sm w-full animate-slide-up hidden md:block">
<div className="bg-neutral-900 p-5 rounded-xl shadow-2xl border border-white/10 relative">
<button className="absolute top-2 right-2 text-neutral-500 hover:text-white transition-colors" onclick="this.parentElement.style.display='none'">
<svg className="lucide lucide-x w-[12px] h-[12px]" data-icon-replaced="true" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '12px', height: '12px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex gap-1 text-yellow-400 mb-2"><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg></div>
<p className="leading-snug text-sm text-neutral-300 mb-3">"We rely on Nexsales to generate high quality Sales Qualified Leads. And, also for delivering insights that fuel our go-to-market playbooks"</p>
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<img className="w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className=""><div className="text-xs font-semibold text-white">Dave Stranton</div><div className="text-[10px] text-neutral-500">CMO, Atlas Systems</div></div>
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-[#00ffc4] ml-auto" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden flex items-center justify-center p-4" id="booking-modal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="toggleModal(false)"></div>
<div className="relative bg-neutral-900 rounded-2xl shadow-2xl border border-white/10 w-full max-w-4xl h-[600px] overflow-hidden flex flex-col md:flex-row">
<button className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-neutral-800 p-1 rounded-full text-neutral-400 transition-colors" onclick="toggleModal(false)">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="md:w-1/3 bg-black/40 p-8 border-r border-white/5 flex flex-col">
<div className="w-12 h-12 rounded-full bg-neutral-800 mb-4 overflow-hidden border border-white/10">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<h3 className="text-neutral-500 font-medium text-sm uppercase tracking-wide mb-1">David Chen</h3>
<h2 className="text-xl font-bold text-white mb-6 opacity-0 translate-y-4 transition-all duration-700">Discovery Call</h2>
<div className="space-y-4 text-neutral-400 text-sm">
<div className="flex items-start gap-3"><svg className="lucide lucide-clock w-5 h-5 text-neutral-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> <span>30 min</span></div>
<div className="flex items-start gap-3"><svg className="lucide lucide-video w-5 h-5 text-neutral-600" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg> <span>Web conferencing details provided upon confirmation.</span></div>
<p className="text-neutral-500 leading-relaxed mt-4 text-xs">Book a session to see how we would engineer an unstoppable pipeline for you - without changing your workflow.</p>
</div>
</div>
<div className="md:w-2/3 p-8 bg-neutral-900 overflow-y-auto relative">

<div className="absolute inset-0 bg-neutral-900 z-20 flex flex-col items-center justify-center text-center p-8 hidden" id="booking-success">
<div className="w-16 h-16 bg-[#00ffc4]/10 rounded-full flex items-center justify-center mb-6"><svg className="lucide lucide-check w-8 h-8 text-[#00ffc4]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg></div>
<h3 className="text-2xl font-bold text-white mb-2">You're Booked!</h3>
<p className="text-neutral-400 mb-8 max-w-xs">A calendar invitation has been sent to your email address.</p>
<button className="bg-[#047857] hover:bg-[#059669] text-white px-6 py-2 rounded-lg transition-colors" onclick="toggleModal(false)">Close</button>
</div>
<div id="booking-form">
<h3 className="font-semibold text-lg mb-6 text-white">Select a Date &amp; Time</h3>
<div className="mb-8">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-white">October 2024</span>
<div className="flex gap-2">
<button className="p-1 hover:bg-white/5 rounded text-neutral-400"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-1 hover:bg-white/5 rounded text-neutral-400"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-7 gap-2 text-center text-sm">
<div className="text-neutral-600 text-xs py-2">MON</div>
<div className="text-neutral-600 text-xs py-2">TUE</div>
<div className="text-neutral-600 text-xs py-2">WED</div>
<div className="text-neutral-600 text-xs py-2">THU</div>
<div className="text-neutral-600 text-xs py-2">FRI</div>
<div className="text-neutral-600 text-xs py-2">SAT</div>
<div className="text-neutral-600 text-xs py-2">SUN</div>
<span className="p-2 text-neutral-700">29</span>
<span className="p-2 text-neutral-700">30</span>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">1</button>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">2</button>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">3</button>
<span className="p-2 text-neutral-700">4</span>
<span className="p-2 text-neutral-700">5</span>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">6</button>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">7</button>
<button className="p-2 bg-[#047857] text-white rounded-full font-semibold shadow-md">8</button>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">9</button>
<button className="p-2 text-neutral-300 hover:bg-[#00ffc4]/10 hover:text-[#00ffc4] rounded-full transition-colors">10</button>
<span className="p-2 text-neutral-700">11</span>
<span className="p-2 text-neutral-700">12</span>
</div>
</div>
<div className="text-sm font-medium text-white mb-3">Tuesday, Oct 8</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<button className="border border-[#00ffc4] text-[#00ffc4] py-2 rounded hover:bg-[#00ffc4]/10 font-medium transition-colors" onclick="confirmBooking()">9:00am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">9:30am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">10:00am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">11:15am</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">1:00pm</button>
<button className="border border-white/10 text-neutral-300 py-2 rounded hover:border-[#00ffc4] hover:text-[#00ffc4] transition-colors" onclick="confirmBooking()">3:30pm</button>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-center">
<p className="text-xs text-neutral-500">Times are shown in your local timezone (EST).</p>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
