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



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex');
        });

        // Interactive Accordion Logic
        let activeIndex = 1; // Default open index
        
        function toggleCurriculum(index) {
            // Reset all
            for (let i = 0; i < 4; i++) {
                const desc = document.getElementById(`desc-${i}`);
                const icon = document.getElementById(`icon-${i}`);
                const title = document.getElementById(`title-${i}`);
                const wrapper = desc.parentElement.parentElement; // The .group div

                if (i === index) {
                    // Activate this one
                    desc.classList.remove('h-0', 'opacity-0');
                    desc.classList.add('h-auto', 'opacity-100');
                    icon.parentElement.classList.remove('bg-white/5', 'text-white');
                    icon.parentElement.classList.add('bg-[#D3FF2E]', 'text-black');
                    icon.classList.add('rotate-45');
                    title.classList.remove('text-white');
                    title.classList.add('text-[#D3FF2E]');
                } else {
                    // Deactivate others
                    desc.classList.remove('h-auto', 'opacity-100');
                    desc.classList.add('h-0', 'opacity-0');
                    icon.parentElement.classList.remove('bg-[#D3FF2E]', 'text-black');
                    icon.parentElement.classList.add('bg-white/5');
                    icon.classList.remove('rotate-45');
                    title.classList.remove('text-[#D3FF2E]');
                    title.classList.add('text-white');
                }
            }
            activeIndex = index;
        }

        // Testimonial Animation Data
        const testimonials = [
            {
                text: "\"Cross Vision Media transformed our company's image. Steve's attention to detail during our corporate shoot was unmatched, and the final video drove 3x more engagement.\"",
                name: "Marcus Chen",
                role: "Marketing Director, Stripe"
            },
            {
                text: "\"The podcast studio quality is incredible. They handle everything from recording to distribution, making my job as a host effortless.\"",
                name: "Elena Rodriguez",
                role: "Host, 'Future Tech'"
            },
            {
                text: "\"We hired Steve for our annual expo. The live stream was flawless, and the highlight reel captured the energy perfectly.\"",
                name: "James Wilson",
                role: "Event Director, Shopify"
            }
        ];

        const bubbles = [
            {
                text: "\"Steve's team made our live event coverage seamless. Highly recommend!\"",
                name: "Sarah Jenkins",
                role: "Event Planner",
                img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=50&h=50"
            },
            {
                text: "\"The branding package gave us a whole new professional look.\"",
                name: "David Kim",
                role: "CEO, Nexa",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=50&h=50"
            },
            {
                text: "\"Best podcast production in the city. Hands down.\"",
                name: "Anita Patel",
                role: "Creator",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=50&h=50"
            }
        ];

        let currentTestimonial = 0;
        
        function rotateTestimonials() {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            
            // Main Card Animation
            const content = document.getElementById('testimonial-content');
            content.style.opacity = '0';
            
            setTimeout(() => {
                const t = testimonials[currentTestimonial];
                content.innerHTML = `
                    <p class="text-xl text-[#E4E4E7] italic mb-6 leading-relaxed font-light">${t.text}</p>
                    <div>
                        <div class="font-bold text-white text-lg">${t.name}</div>
                        <div class="text-[#71717A] text-sm">${t.role}</div>
                    </div>
                `;
                content.style.opacity = '1';
                
                // Update dots
                [0, 1, 2].forEach(i => {
                    const el = document.getElementById(`indicator-${i}`);
                    if (i === currentTestimonial) {
                        el.classList.remove('bg-white/20');
                        el.classList.add('bg-[#D3FF2E]');
                    } else {
                        el.classList.remove('bg-[#D3FF2E]');
                        el.classList.add('bg-white/20');
                    }
                });
            }, 500);

            // Bubble Animation (offset slightly)
            const bubble = document.getElementById('bubble-card');
            
            setTimeout(() => {
                bubble.classList.add('opacity-0', 'translate-y-4');
                setTimeout(() => {
                    const b = bubbles[currentTestimonial];
                    document.getElementById('bubble-text').innerText = b.text;
                    document.getElementById('bubble-name').innerText = b.name;
                    document.getElementById('bubble-role').innerText = b.role;
                    document.getElementById('bubble-img').src = b.img;
                    
                    bubble.classList.remove('opacity-0', 'translate-y-4');
                }, 500);
            }, 1000);
        }

        setInterval(rotateTestimonials, 5000);

    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="px-6 py-4 flex justify-between items-center max-w-[1600px] mx-auto">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="relative">
<div className="absolute inset-0 bg-[#D3FF2E] blur-sm opacity-20 group-hover:opacity-50 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-[#D3FF2E] relative z-10" data-icon="solar:videocamera-record-bold-duotone" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109C5.281 2.5 7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391C21.5 5.281 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.719 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.719 2.5 16.479 2.5 12" fill="currentColor" opacity=".5"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path></svg>
</div>
<span className="text-lg font-bold tracking-tight text-white uppercase">Cross<span className="text-[#D3FF2E]">Vision</span></span>
</div>

<div className="hidden md:flex gap-8 text-sm font-medium text-[#A1A1AA]">
<a className="hover:text-[#D3FF2E] transition-colors" href="#">Services</a>
<a className="hover:text-[#D3FF2E] transition-colors" href="#">Our Work</a>
<a className="hover:text-[#D3FF2E] transition-colors" href="#">About Steve</a>
<a className="hover:text-[#D3FF2E] transition-colors" href="#">Events</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-[#D3FF2E] transition-colors" href="#">Client Portal</a>
<a className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#D3FF2E] text-[#000000] text-sm font-bold hover:bg-white hover:scale-105 transition-all shadow-[0_0_15px_rgba(211,255,46,0.3)]" href="#">
                    Start Project
                </a>
</div>

<button className="md:hidden text-white p-1 hover:text-[#D3FF2E]" id="menu-btn">
<svg height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"></path></svg>
</button>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-white/10 p-6 flex-col gap-4 shadow-2xl" id="mobile-menu">
<a className="text-[#A1A1AA] hover:text-[#D3FF2E] text-lg font-medium" href="#">Services</a>
<a className="text-[#A1A1AA] hover:text-[#D3FF2E] text-lg font-medium" href="#">Our Work</a>
<a className="text-[#A1A1AA] hover:text-[#D3FF2E] text-lg font-medium" href="#">About Steve</a>
<a className="text-[#A1A1AA] hover:text-[#D3FF2E] text-lg font-medium" href="#">Events</a>
<hr className="border-white/10 my-2"/>
<a className="text-white text-lg font-medium" href="#">Client Portal</a>
<a className="bg-[#D3FF2E] text-[#000000] text-center py-3 rounded-lg font-bold" href="#">Start Project</a>
</div>
</nav>

<header className="lg:px-10 overflow-hidden text-white bg-[#09090B] rounded-b-[3rem] pt-12 pr-6 pb-24 pl-6 relative pt-32 border-b border-white/5">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D3FF2E] rounded-full blur-[120px] opacity-[0.07] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-20">

<div className="lg:col-span-6 flex flex-col gap-8 z-10">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D3FF2E]/30 bg-[#D3FF2E]/10 text-[#D3FF2E] text-xs font-bold uppercase tracking-wider mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D3FF2E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#D3FF2E]"></span>
</span>
                            Accepting New Clients
                        </div>
<h1 className="lg:text-[5.5rem] leading-[0.95] text-6xl text-white mb-6 font-bold tracking-tighter">
                            Capturing Vision. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D3FF2E] to-[#ffffff]">Creating Impact.</span>
</h1>
<p className="text-[#A1A1AA] text-lg font-light leading-relaxed max-w-lg">
                            We don't just record video; we engineer stories. Owned by Steve Cross, specializing in high-end corporate productions, podcasting, and media branding.
                        </p>
</div>

<div className="flex flex-wrap items-center gap-6 mt-2">
<a className="px-8 py-4 bg-[#D3FF2E] text-[#000000] rounded-xl font-bold text-base hover:bg-white transition-colors shadow-[0_0_30px_rgba(211,255,46,0.3)]" href="#">
                            View Portfolio
                        </a>
<div className="flex flex-col border-l border-white/10 pl-6">
<span className="text-sm font-semibold text-white">Next Available</span>
<span className="text-sm text-[#71717A]">Booking for Nov</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#18181B] aspect-[4/3] group">
<div className="absolute inset-0 bg-gradient-to-tr from-[#D3FF2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
<div className="absolute top-6 right-6 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl shadow-lg max-w-[180px]">
<div className="text-[10px] font-bold text-[#D3FF2E] uppercase tracking-wider mb-1">Since 2015</div>
<div className="text-sm font-semibold text-white leading-tight">Delivering Excellence in Media</div>
</div>
<img alt="Video production set" className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="flex mt-8 pr-4 pl-4 space-x-4 items-start justify-between border-t border-white/5 pt-6">
<div className="text-center lg:text-left">
<h3 className="text-3xl font-bold text-white tracking-tight mb-1">500+</h3>
<p className="text-[#52525B] text-xs font-bold uppercase tracking-wide">Projects Done</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-bold text-[#D3FF2E] tracking-tight mb-1">4K</h3>
<p className="text-[#52525B] text-xs font-bold uppercase tracking-wide">Production Quality</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-bold text-white tracking-tight mb-1">100+</h3>
<p className="text-[#52525B] text-xs font-bold uppercase tracking-wide">Brands Served</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-bold text-[#D3FF2E] tracking-tight mb-1">Top</h3>
<p className="text-[#52525B] text-xs font-bold uppercase tracking-wide">Industry Gear</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#09090B] via-transparent to-[#09090B]"></div>
<div className="flex overflow-hidden w-full">
<div className="flex gap-6 animate-marquee w-max pt-4 pb-4 gap-x-6 gap-y-6">

<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-[#D3FF2E] group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109C5.281 2.5 7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391C21.5 5.281 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.719 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.719 2.5 16.479 2.5 12" fill="currentColor" opacity=".5"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Corporate Productions</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            High-end interviews, company profiles, and promotional content that elevates your brand authority.
        </p>
</div>

<div className="w-[350px] bg-[#D3FF2E] rounded-3xl p-8 flex flex-col h-full border border-[#D3FF2E] hover:scale-[1.02] transition-transform duration-300 group">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-[#D3FF2E] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:microphone-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5" fill="currentColor" opacity=".5"></path><path d="M19.99 13.998c0-.422-.323-.787-.745-.758a6.994 6.994 0 0 1-14.49 0c-.422-.029-.745.336-.745.758c0 3.332 2.373 6.138 5.49 6.84V22h5v-1.16c3.117-.702 5.49-3.508 5.49-6.842" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-black mb-3 font-bold tracking-tight">Podcast Production</h3>
<p className="text-black/70 text-sm leading-relaxed font-medium">
            Full-service audio and video podcasting. Studio setup, recording, editing, and distribution strategy.
        </p>
</div>

<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.87 1.22 5.46 3.16 7.29c.47.45.67.63 1.05.81c.21.1.43.14.65.11c.26-.03.51-.15.71-.35c.42-.42.43-.88.43-1.6V16a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1.5c0-.83.67-1.5 1.5-1.5h1.5a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2v-.5c0-.83.67-1.5 1.5-1.5H12z" fill="currentColor" opacity=".5"></path><path d="M17.5 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-11 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Media Branding</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Cohesive visual identities, motion graphics, and media kits that define your corporate presence.
        </p>
</div>

<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:users-group-two-rounded-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.062 14.502a3.003 3.003 0 0 1 5.876 0c.263 1.14-.153 2.155-.838 2.651c-.628.455-1.428.608-2.1.608s-1.472-.153-2.1-.608c-.685-.496-1.101-1.51-.838-2.651m1.788-3.957a1.15 1.15 0 1 1 2.3 0a1.15 1.15 0 0 1-2.3 0" fill="currentColor" opacity=".5"></path><path d="M12.984 6.908a3.15 3.15 0 1 1-6.3 0a3.15 3.15 0 0 1 6.3 0m4.408 8.04c.31.135.52.427.52.766c0 1.222-1.026 2.062-1.954 2.457c-.89.38-1.944.444-2.822.193c.188-.415.342-.87.447-1.37a5.003 5.003 0 0 0-3.166-5.632c.382-.416.906-.69 1.503-.69c.89 0 1.93.303 2.91 1.282c.98.98 1.96 1.708 2.562 2.994M7.844 11.237c-1.336 0-2.388.728-3.368 1.708c-.98.98-2.02 1.282-2.91 1.282c-.598 0-1.121-.274-1.504-.69a5.004 5.004 0 0 0 2.22 6.777c.307.12.637.164.965.122c-.878.25-1.932.187-2.822-.192C-.447 19.847-1.473 19.007-1.473 17.785c0-.339.21-.63.52-.766c.602-1.286 1.582-2.014 2.562-2.994" fill="currentColor"></path><path d="M16.92 10.158a3.15 3.15 0 1 0-1.518-6.079a3.15 3.15 0 0 0 1.518 6.08m-9.84-6.08a3.15 3.15 0 1 0 1.518 6.08a3.15 3.15 0 0 0-1.518-6.08" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Live Events</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Streaming and coverage for conferences, keynotes, and corporate gatherings.
        </p>
</div>


<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-[#D3FF2E] group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:videocamera-record-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109C5.281 2.5 7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391C21.5 5.281 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.719 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.719 2.5 16.479 2.5 12" fill="currentColor" opacity=".5"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Corporate Productions</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            High-end interviews, company profiles, and promotional content that elevates your brand authority.
        </p>
</div>

<div className="w-[350px] bg-[#D3FF2E] rounded-3xl p-8 flex flex-col h-full border border-[#D3FF2E] hover:scale-[1.02] transition-transform duration-300 group">
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-[#D3FF2E] group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:microphone-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5" fill="currentColor" opacity=".5"></path><path d="M19.99 13.998c0-.422-.323-.787-.745-.758a6.994 6.994 0 0 1-14.49 0c-.422-.029-.745.336-.745.758c0 3.332 2.373 6.138 5.49 6.84V22h5v-1.16c3.117-.702 5.49-3.508 5.49-6.842" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-black mb-3 font-bold tracking-tight">Podcast Production</h3>
<p className="text-black/70 text-sm leading-relaxed font-medium">
            Full-service audio and video podcasting. Studio setup, recording, editing, and distribution strategy.
        </p>
</div>

<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.87 1.22 5.46 3.16 7.29c.47.45.67.63 1.05.81c.21.1.43.14.65.11c.26-.03.51-.15.71-.35c.42-.42.43-.88.43-1.6V16a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1.5c0-.83.67-1.5 1.5-1.5h1.5a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2v-.5c0-.83.67-1.5 1.5-1.5H12z" fill="currentColor" opacity=".5"></path><path d="M17.5 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-11 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Media Branding</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Cohesive visual identities, motion graphics, and media kits that define your corporate presence.
        </p>
</div>

<div className="w-[350px] bg-[#121214] rounded-3xl p-8 flex flex-col h-full border border-white/5 hover:border-[#D3FF2E] transition-all duration-300 group shadow-lg hover:shadow-[#D3FF2E]/10">
<div className="w-12 h-12 bg-[#18181B] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform border border-white/5">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:users-group-two-rounded-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.062 14.502a3.003 3.003 0 0 1 5.876 0c.263 1.14-.153 2.155-.838 2.651c-.628.455-1.428.608-2.1.608s-1.472-.153-2.1-.608c-.685-.496-1.101-1.51-.838-2.651m1.788-3.957a1.15 1.15 0 1 1 2.3 0a1.15 1.15 0 0 1-2.3 0" fill="currentColor" opacity=".5"></path><path d="M12.984 6.908a3.15 3.15 0 1 1-6.3 0a3.15 3.15 0 0 1 6.3 0m4.408 8.04c.31.135.52.427.52.766c0 1.222-1.026 2.062-1.954 2.457c-.89.38-1.944.444-2.822.193c.188-.415.342-.87.447-1.37a5.003 5.003 0 0 0-3.166-5.632c.382-.416.906-.69 1.503-.69c.89 0 1.93.303 2.91 1.282c.98.98 1.96 1.708 2.562 2.994M7.844 11.237c-1.336 0-2.388.728-3.368 1.708c-.98.98-2.02 1.282-2.91 1.282c-.598 0-1.121-.274-1.504-.69a5.004 5.004 0 0 0 2.22 6.777c.307.12.637.164.965.122c-.878.25-1.932.187-2.822-.192C-.447 19.847-1.473 19.007-1.473 17.785c0-.339.21-.63.52-.766c.602-1.286 1.582-2.014 2.562-2.994" fill="currentColor"></path><path d="M16.92 10.158a3.15 3.15 0 1 0-1.518-6.079a3.15 3.15 0 0 0 1.518 6.08m-9.84-6.08a3.15 3.15 0 1 0 1.518 6.08a3.15 3.15 0 0 0-1.518-6.08" fill="currentColor"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors">Live Events</h3>
<p className="text-[#A1A1AA] text-sm leading-relaxed">
            Streaming and coverage for conferences, keynotes, and corporate gatherings.
        </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-16 bg-white">
<div className="flex flex-wrap gap-12 lg:gap-20 transition-all max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 justify-center items-center">
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="logos:adobe-premiere"></span>
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="logos:adobe-after-effects"></span>
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="simple-icons:blackmagicdesign"></span>
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="simple-icons:red"></span>
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="simple-icons:sony"></span>
<span className="iconify text-4xl text-black w-[48px] h-[48px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all" data-icon="logos:youtube-icon"></span>
</div>
</section>

<section className="py-24 bg-white text-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#D3FF2E]"></div>
<span className="text-sm font-bold uppercase tracking-wider text-[#000000]">Why Cross Vision</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="flex -space-x-4">
<img alt="Client" className="w-14 h-14 rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-14 h-14 rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="Client" className="w-14 h-14 rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
</div>
<div className="">
<div className="font-bold text-xl text-black">High-End Production</div>
<div className="text-gray-500 text-sm font-medium">Trusted by Industry Leaders</div>
</div>
</div>
</div>
<div className="">
<h2 className="lg:text-5xl leading-tight text-4xl text-black mb-6 font-bold tracking-tighter">
                        Led by Steve Cross. <br/>Driven by <span className="text-[#6366F1]">Vision.</span>
</h2>
<p className="text-xl text-gray-600 leading-relaxed mb-8 font-normal">
                        At Cross Vision Media, we combine cinematic storytelling with corporate strategy. Whether it's a multi-camera podcast setup or a large-scale event, Steve Cross and his team deliver content that resonates with your audience and amplifies your brand.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8">
<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-[#D3FF2E] rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform -z-10"></div>
<img alt="Steve Cross Filming" className="w-full h-80 object-cover rounded-[2rem] border border-black/10 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-5 relative group">
<div className="absolute inset-0 bg-[#050505] rounded-[2rem] translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform -z-10"></div>
<img alt="Podcast Studio" className="w-full h-80 object-cover rounded-[2rem] border border-black/10 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
</div>
<div className="md:col-span-2 flex items-end justify-end">
<a className="w-full h-full min-h-[100px] bg-[#050505] text-white rounded-[2rem] flex flex-col items-center justify-center gap-3 hover:bg-[#D3FF2E] hover:text-black transition-all p-6 text-center shadow-xl group cursor-pointer" href="#">
<span className="text-lg font-bold">Meet the Team</span>
<svg aria-hidden="true" className="iconify text-2xl group-hover:translate-x-1 transition-transform iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-6 bg-[#050505]">
<div className="bg-[#121212] text-white rounded-[2.5rem] p-8 lg:p-20 relative overflow-hidden border border-white/10">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#7928CA] rounded-full blur-[150px] opacity-[0.15] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start mb-16">
<div className="max-w-xl">
<span className="text-[#D3FF2E] text-sm font-bold tracking-wide uppercase mb-4 block">— Comprehensive Services</span>
<h2 className="text-4xl lg:text-5xl text-white font-bold tracking-tighter">Production Excellence.</h2>
</div>
<div className="mt-6 md:mt-0 max-w-xs text-[#A1A1AA] text-lg font-light">
                        From pre-production strategy to post-production polish. We handle every frame.
                        <a className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-[#D3FF2E] text-black rounded-full text-sm font-bold hover:bg-white transition-colors" href="#">
                            Download Brochure
                            <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:download-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12" fill="currentColor" opacity=".5"></path><path d="M12.75 7a.75.75 0 0 0-1.5 0v5.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72zM8 16.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z" fill="currentColor"></path></svg>
</a>
</div>
</div>

<div className="flex flex-col border-t border-white/10" id="curriculum-list">


<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(0)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors" id="title-0">Corporate Productions</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#D3FF2E] group-hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:videocamera-record-bold-duotone" height="1em" id="icon-0" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109C5.281 2.5 7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391C21.5 5.281 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.719 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.719 2.5 16.479 2.5 12" fill="currentColor" opacity=".5"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-0">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    We craft compelling corporate narratives. From executive interviews and company culture videos to product demos and internal training content.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(1)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-[#D3FF2E] font-bold tracking-tight" id="title-1">Podcast Productions</h3>
<div className="rounded-full bg-[#D3FF2E] text-black p-3 transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform rotate-45 iconify--solar" data-icon="solar:microphone-3-bold-duotone" height="1em" id="icon-1" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a5 5 0 0 0-5 5v7a5 5 0 0 0 10 0V7a5 5 0 0 0-5-5" fill="currentColor" opacity=".5"></path><path d="M19.99 13.998c0-.422-.323-.787-.745-.758a6.994 6.994 0 0 1-14.49 0c-.422-.029-.745.336-.745.758c0 3.332 2.373 6.138 5.49 6.84V22h5v-1.16c3.117-.702 5.49-3.508 5.49-6.842" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-auto overflow-hidden transition-all duration-500 ease-in-out opacity-100" id="desc-1">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Launch your voice with broadcast-quality production. We handle studio recording (audio &amp; video), editing, mixing, and social media cut-downs.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(2)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors" id="title-2">Media Branding</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#D3FF2E] group-hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:palette-bold-duotone" height="1em" id="icon-2" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 2.87 1.22 5.46 3.16 7.29c.47.45.67.63 1.05.81c.21.1.43.14.65.11c.26-.03.51-.15.71-.35c.42-.42.43-.88.43-1.6V16a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2v-1.5c0-.83.67-1.5 1.5-1.5h1.5a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-3a2 2 0 0 1-2-2v-.5c0-.83.67-1.5 1.5-1.5H12z" fill="currentColor" opacity=".5"></path><path d="M17.5 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-11 3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m3.5-5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m4.5-3a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-2">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Your visual identity is everything. We create cohesive media packages, motion graphics, and channel branding to ensure you look consistent across all platforms.
                                </p>
</div>
</div>
</div>

<div className="group border-b border-white/10 transition-all duration-300" onclick="toggleCurriculum(3)">
<div className="py-8 flex flex-col cursor-pointer">
<div className="flex justify-between items-center">
<h3 className="text-2xl text-white font-bold tracking-tight group-hover:text-[#D3FF2E] transition-colors" id="title-3">Live Events</h3>
<div className="rounded-full bg-white/5 p-3 group-hover:bg-[#D3FF2E] group-hover:text-black transition-colors">
<svg aria-hidden="true" className="iconify text-2xl transform transition-transform duration-300 iconify--solar" data-icon="solar:users-group-two-rounded-bold-duotone" height="1em" id="icon-3" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.062 14.502a3.003 3.003 0 0 1 5.876 0c.263 1.14-.153 2.155-.838 2.651c-.628.455-1.428.608-2.1.608s-1.472-.153-2.1-.608c-.685-.496-1.101-1.51-.838-2.651m1.788-3.957a1.15 1.15 0 1 1 2.3 0a1.15 1.15 0 0 1-2.3 0" fill="currentColor" opacity=".5"></path><path d="M12.984 6.908a3.15 3.15 0 1 1-6.3 0a3.15 3.15 0 0 1 6.3 0m4.408 8.04c.31.135.52.427.52.766c0 1.222-1.026 2.062-1.954 2.457c-.89.38-1.944.444-2.822.193c.188-.415.342-.87.447-1.37a5.003 5.003 0 0 0-3.166-5.632c.382-.416.906-.69 1.503-.69c.89 0 1.93.303 2.91 1.282c.98.98 1.96 1.708 2.562 2.994M7.844 11.237c-1.336 0-2.388.728-3.368 1.708c-.98.98-2.02 1.282-2.91 1.282c-.598 0-1.121-.274-1.504-.69a5.004 5.004 0 0 0 2.22 6.777c.307.12.637.164.965.122c-.878.25-1.932.187-2.822-.192C-.447 19.847-1.473 19.007-1.473 17.785c0-.339.21-.63.52-.766c.602-1.286 1.582-2.014 2.562-2.994" fill="currentColor"></path><path d="M16.92 10.158a3.15 3.15 0 1 0-1.518-6.079a3.15 3.15 0 0 0 1.518 6.08m-9.84-6.08a3.15 3.15 0 1 0 1.518 6.08a3.15 3.15 0 0 0-1.518-6.08" fill="currentColor"></path></svg>
</div>
</div>
<div className="h-0 overflow-hidden transition-all duration-500 ease-in-out opacity-0" id="desc-3">
<p className="text-[#A1A1AA] max-w-2xl text-lg font-light pt-4">
                                    Capture the energy of your event. We provide multi-camera live streaming, highlight reels, and full event documentation for conferences and expos.
                                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div className="">
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-black"></div>
<span className="text-sm font-bold uppercase tracking-wider text-black">Latest Work</span>
</div>
<h2 className="text-4xl lg:text-5xl text-black font-bold tracking-tighter">Recent Productions</h2>
</div>
<a className="px-6 py-3 bg-black text-white rounded-full text-sm font-bold hover:bg-[#D3FF2E] hover:text-black transition-colors flex items-center gap-2 mt-6 md:mt-0" href="#">
                    View All Projects
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group cursor-pointer bg-[#F4F4F5] p-4 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-black/5">
<div className="bg-black rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors z-10 bg-center bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Interview" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1559070169-a3077159ee16?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#D3FF2E] text-black text-xs font-bold">Corporate</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div>
<h3 className="text-2xl mb-1 text-black font-bold tracking-tight">TechSummit Keynote</h3>
<p className="text-gray-500 text-lg font-medium">Event Coverage &amp; Highlight Reel</p>
</div>
<div className="p-3 rounded-full bg-white text-black group-hover:bg-black group-hover:text-[#D3FF2E] transition-colors shadow-md">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>

<div className="group cursor-pointer bg-[#F4F4F5] p-4 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-black/5">
<div className="bg-black rounded-[2rem] overflow-hidden mb-6 relative aspect-[4/3]">
<div className="group-hover:bg-black/10 transition-colors bg-center z-10 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Podcast" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-6 z-20">
<span className="inline-block px-4 py-1 rounded-full bg-[#D3FF2E] text-black text-xs font-bold">Podcast Series</span>
</div>
</div>
<div className="flex justify-between items-start px-2 pb-2">
<div className="">
<h3 className="text-2xl mb-1 text-black font-bold tracking-tight">The Founder's Journey</h3>
<p className="text-gray-500 text-lg font-medium">4K Multi-Cam Studio Production</p>
</div>
<div className="p-3 rounded-full bg-white text-black group-hover:bg-black group-hover:text-[#D3FF2E] transition-colors shadow-md">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] text-white py-24 overflow-hidden rounded-t-[3rem] relative border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="">
<div className="flex items-center gap-3 mb-8">
<div className="h-px w-8 bg-[#D3FF2E]"></div>
<span className="text-sm font-bold uppercase tracking-wider text-[#D3FF2E]">Testimonials</span>
</div>
<h2 className="text-4xl lg:text-6xl mb-8 text-white font-bold tracking-tighter">Trusted by Brands.</h2>

<div className="bg-[#121212] border border-white/5 p-10 rounded-[2rem] max-w-lg relative mb-10 min-h-[300px] flex flex-col justify-between transition-all shadow-2xl shadow-[#D3FF2E]/5" id="testimonial-card">
<div className="">
<span className="iconify text-[#6366F1] text-4xl mb-6" data-icon="solar:quote-up-square-bold-duotone"></span>
<div className="transition-opacity duration-500 opacity-100" id="testimonial-content">
<p className="text-xl text-[#E4E4E7] italic mb-6 leading-relaxed font-light">
                                "Cross Vision Media transformed our company's image. Steve's attention to detail during our corporate shoot was unmatched, and the final video drove 3x more engagement."
                            </p>
<div>
<div className="font-bold text-white text-lg">Marcus Chen</div>
<div className="text-[#71717A] text-sm">Marketing Director, Stripe</div>
</div>
</div>
</div>

<div className="flex gap-2 mt-8">
<div className="h-1 rounded-full bg-[#D3FF2E] w-8 transition-all duration-300" id="indicator-0"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-1"></div>
<div className="h-1 rounded-full bg-white/20 w-8 transition-all duration-300" id="indicator-2"></div>
</div>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-[#D3FF2E] transition-colors" href="#">
                    Read More Reviews
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</a>
</div>
<div className="relative h-full min-h-[500px]">

<div className="absolute inset-0 rounded-[2.5rem] overflow-hidden">
<img className="opacity-50 mix-blend-overlay w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=2528&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#6366F1] rounded-full blur-[100px] opacity-20 mix-blend-screen pointer-events-none"></div>
</div>

<div className="absolute top-20 -left-10 bg-[#D3FF2E] text-black p-6 rounded-[2rem] shadow-2xl max-w-xs hidden lg:block transform transition-all duration-700 hover:-translate-y-2" id="bubble-card">
<p className="text-sm font-bold leading-relaxed mb-4" id="bubble-text">"Steve's team made our live event coverage seamless. Highly recommend!"</p>
<div className="flex items-center gap-3">
<img className="w-10 h-10 rounded-full object-cover ring-2 ring-black" id="bubble-img" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=50&amp;h=50"/>
<div>
<div className="font-bold text-xs" id="bubble-name">Sarah Jenkins</div>
<div className="text-xs opacity-70" id="bubble-role">Event Planner</div>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-4 items-end">
<div className="flex items-center gap-3 text-right bg-[#18181B]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full">
<div className="text-xs text-[#A1A1AA]">
<div className="font-bold text-white">4K Cinema</div>
<div className="">Cameras</div>
</div>
<span className="iconify text-[#D3FF2E] text-2xl" data-icon="simple-icons:red"></span>
</div>
<div className="flex items-center gap-3 text-right bg-[#18181B]/90 backdrop-blur border border-white/10 px-4 py-2 rounded-full">
<div className="text-xs text-[#A1A1AA]">
<div className="font-bold text-white">Pro Audio</div>
<div className="">Recording</div>
</div>
<span className="iconify text-[#D3FF2E] text-2xl" data-icon="solar:microphone-3-bold-duotone"></span>
</div>
</div>
</div>
</div>
</section>

<div className="bg-[#050505] mb-0 pr-6 pb-6 pl-6">
<div className="lg:p-24 overflow-hidden group text-center bg-[#121212] max-w-7xl border-white/10 border rounded-[2.5rem] mr-auto ml-auto pt-12 pr-12 pb-12 pl-12 relative">
<h2 className="text-4xl lg:text-6xl text-white font-bold tracking-tighter mb-6 relative z-10">Ready to tell your story?</h2>
<p className="text-[#A1A1AA] text-lg max-w-xl mx-auto mb-10 relative z-10">
                Our calendar fills up quickly. Book a consultation with Steve Cross today and lets bring your vision to life.
            </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
<a className="px-8 py-4 bg-[#D3FF2E] text-black rounded-full font-bold text-lg hover:bg-white transition-colors shadow-[0_0_20px_rgba(211,255,46,0.4)]" href="#">
                    Book Consultation
                </a>
<a className="px-8 py-4 border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors" href="#">
                    View Pricing
                </a>
</div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D3FF2E] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-[#6366F1] rounded-full blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
</div>
</div>

<footer className="bg-[#050505] border-white/5 border-t mt-0 mb-0 pt-24 pr-6 pb-12 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<svg aria-hidden="true" className="iconify text-[#D3FF2E]" data-icon="solar:videocamera-record-bold-duotone" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109C5.281 2.5 7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391C21.5 5.281 21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109C18.719 21.5 16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391C2.5 18.719 2.5 16.479 2.5 12" fill="currentColor" opacity=".5"></path><path d="M16 12a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path></svg>
<span className="text-xl font-bold tracking-tight text-white uppercase">Cross<span className="text-[#D3FF2E]">Vision</span></span>
</div>
<p className="text-[#71717A] text-sm leading-relaxed max-w-xs mb-6">
                        The premier video production agency for corporate brands, podcasts, and live events. Owned and operated by Steve Cross.
                    </p>
<div className="flex gap-4">
<a className="text-[#A1A1AA] hover:text-[#D3FF2E]" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:twitter" height="1em" role="img" viewbox="0 0 256 209" width="1.23em" xmlns="http://www.w3.org/2000/svg"><path d="M256 25.45a105 105 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.2 105.2 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.3 52.3 0 0 1-23.79-6.57q-.004.33-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.6 52.6 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435q0-3.417-.152-6.795A106.8 106.8 0 0 0 256 25.45" fill="currentColor"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-[#D3FF2E]" href="#"><svg aria-hidden="true" className="iconify text-xl iconify--logos" data-icon="logos:linkedin-icon" height="1em" role="img" viewbox="0 0 256 256" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="currentColor"></path></svg></a>
<a className="text-[#A1A1AA] hover:text-[#D3FF2E]" href="#"><span className="iconify text-xl" data-icon="simple-icons:instagram"></span></a>
</div>
</div>
<div className="">
<h4 className="text-white font-bold mb-6">Services</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Corporate Video</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Podcast Production</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Media Branding</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Live Events</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-bold mb-6">Company</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li className=""><a className="hover:text-[#D3FF2E] transition-colors" href="#">About Steve Cross</a></li>
<li className=""><a className="hover:text-[#D3FF2E] transition-colors" href="#">Portfolio</a></li>
<li className=""><a className="hover:text-[#D3FF2E] transition-colors" href="#">Client Portal</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-bold mb-6">Connect</h4>
<ul className="flex flex-col gap-4 text-sm text-[#A1A1AA]">
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">YouTube</a></li>
<li><a className="hover:text-[#D3FF2E] transition-colors" href="#">Book a Call</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[#52525B] text-sm">© 2024 Cross Vision Media. All rights reserved.</p>
<div className="flex gap-8 text-sm text-[#52525B]">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
