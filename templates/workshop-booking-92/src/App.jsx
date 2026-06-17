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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#F5F5F7',
surface: '#FFFFFF',
primary: '#1A1A1A',
secondary: '#666666',
accent: '#EB3A14',
line: '#E5E5E5'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
fontSize: {
'xxs': '0.625rem',
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
}
}
}
}



        // --- Initialization ---
        lucide.createIcons();
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        
        document.getElementById('term-date').innerText = new Date().toDateString();

        // --- Loader & Entrance ---
        let loadPct = 0;
        const loadInterval = setInterval(() => {
            loadPct += Math.floor(Math.random() * 5) + 1;
            if(loadPct > 100) loadPct = 100;
            document.getElementById('loader-pct').innerText = loadPct + '%';
            document.getElementById('loader-bar').style.width = loadPct + '%';
            
            if(loadPct === 100) {
                clearInterval(loadInterval);
                const tl = gsap.timeline();
                tl.to('#loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.2 })
                  .to('.reveal-hero-text', { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, "-=0.4")
                  .to('.reveal-hero', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.8");
            }
        }, 30);

        // --- Data State ---
        const workshops = {
            candle: { title: "Candle Making", price: 85, desc: "Scent profiling and soy wax pouring.", slots: ["10:00", "14:00"], color: "accent" },
            ceramic: { title: "Clay & Form", price: 120, desc: "Hand-building organic vessels.", slots: ["09:00", "13:00", "16:00"], color: "blue-900" },
            leather: { title: "Leathercraft", price: 180, desc: "Stitch your own vegetable-tanned tote.", slots: ["11:00"], color: "stone-600" }
        };
        let currentWs = 'candle';
        let isAdmin = false;

        // --- Interaction Logic ---
        function scrollToWorkshops() {
            lenis.scrollTo('#workshops');
        }

        function setWorkshop(key) {
            currentWs = key;
            const data = workshops[key];
            
            // Visual feedback on cards
            ['candle', 'ceramic', 'leather'].forEach(k => {
                document.getElementById(`border-${k}`).style.opacity = k === key ? '1' : '0';
            });

            // Update Booking Panel with GSAP flip-like feel
            gsap.to('#booking', { opacity: 0.5, duration: 0.2, onComplete: () => {
                document.getElementById('panel-title').innerText = data.title;
                document.getElementById('panel-desc').innerText = data.desc;
                document.getElementById('panel-price').innerText = `€${data.price}.00`;
                document.getElementById('panel-date').innerText = "Select a date";
                document.getElementById('panel-slots').innerHTML = '<span class="text-sm text-gray-400 italic">Select date first</span>';
                document.getElementById('book-btn').disabled = true;
                
                // Reset calendar visuals
                document.querySelectorAll('.calendar-day').forEach(el => el.classList.remove('selected'));
                
                gsap.to('#booking', { opacity: 1, duration: 0.2 });
            }});
        }

        // Initialize first workshop selection
        setWorkshop('candle');

        // Calendar Generator
        const calendarEl = document.getElementById('calendar-days');
        for(let i=0; i<3; i++) calendarEl.innerHTML += `<div class="bg-bg min-h-[5rem]"></div>`; // Padding days
        
        for(let i=1; i<=31; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.className = 'calendar-day group';
            dayDiv.innerHTML = `<span class="font-mono text-sm">${i}</span>`;
            
            // Random Availability Logic
            if(i % 7 === 0) {
                dayDiv.classList.add('disabled');
                dayDiv.innerHTML += `<span class="text-xxs text-gray-300 mt-auto uppercase">Closed</span>`;
            } else {
                dayDiv.onclick = () => selectDate(dayDiv, i);
                dayDiv.innerHTML += `<div class="mt-auto flex justify-between items-end">
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </div>`;
            }
            calendarEl.appendChild(dayDiv);
        }

        function selectDate(el, day) {
            if(isAdmin) {
                el.classList.toggle('blocked');
                return;
            }
            if(el.classList.contains('disabled') || el.classList.contains('blocked')) return;

            document.querySelectorAll('.calendar-day').forEach(d => d.classList.remove('selected'));
            el.classList.add('selected');

            document.getElementById('panel-date').innerText = `October ${day}, 2025`;
            
            // Populate slots
            const slotsContainer = document.getElementById('panel-slots');
            slotsContainer.innerHTML = '';
            workshops[currentWs].slots.forEach(time => {
                const btn = document.createElement('button');
                btn.className = 'px-3 py-1 border border-gray-200 rounded text-xs font-mono hover:bg-black hover:text-white transition-colors';
                btn.innerText = time;
                btn.onclick = () => {
                    document.querySelectorAll('#panel-slots button').forEach(b => b.classList.remove('bg-black', 'text-white'));
                    btn.classList.add('bg-black', 'text-white');
                    document.getElementById('book-btn').disabled = false;
                    
                    // Update Checkout Modal Data
                    document.getElementById('checkout-title').innerText = workshops[currentWs].title;
                    document.getElementById('checkout-price').innerText = `€${workshops[currentWs].price}.00`;
                    document.getElementById('checkout-date').innerText = `Oct ${day}, ${time}`;
                };
                slotsContainer.appendChild(btn);
            });
        }

        // Admin Toggle
        document.getElementById('admin-toggle').addEventListener('change', (e) => {
            isAdmin = e.target.checked;
            document.body.classList.toggle('admin-mode');
            if(isAdmin) {
                alert("Host Mode Active: Click calendar dates to block/unblock them.");
            }
        });

        // Checkout Modal
        function toggleCheckout() {
            document.getElementById('checkout-modal').classList.toggle('active');
        }

        // AI Terminal
        const aiInput = document.getElementById('ai-input');
        const termOut = document.getElementById('terminal-output');

        aiInput.addEventListener('keypress', async (e) => {
            if (e.key === 'Enter') {
                const query = aiInput.value.trim().toLowerCase();
                if(!query) return;

                // User Line
                termOut.innerHTML += `<div class="mb-1"><span class="text-green-500">➜</span> <span class="text-white">${aiInput.value}</span></div>`;
                aiInput.value = '';
                termOut.scrollTop = termOut.scrollHeight;

                // Fake Thinking
                const thinkingId = Date.now();
                termOut.innerHTML += `<div id="${thinkingId}" class="mb-2 text-gray-500 italic">... processing query</div>`;
                
                await new Promise(r => setTimeout(r, 600));
                document.getElementById(thinkingId).remove();

                // Response Logic
                let response = "I'm focusing on workshop details. Try asking about 'price', 'time', or 'materials'.";
                if(query.includes('price') || query.includes('cost')) response = `The ${workshops[currentWs].title} workshop costs €${workshops[currentWs].price} per person. Includes all materials.`;
                else if(query.includes('park') || query.includes('location')) response = "We are located in Chiado. Parking is available at 'Armazéns do Chiado' (2 min walk).";
                else if(query.includes('beginner') || query.includes('level')) response = "All our workshops are beginner-friendly. Our masters will guide you step-by-step.";
                else if(query.includes('materials') || query.includes('bring')) response = "We provide everything! Aprons, tools, and raw materials are included.";

                termOut.innerHTML += `<div class="mb-4 text-gray-300 border-l-2 border-accent pl-3">${response}</div>`;
                termOut.scrollTop = termOut.scrollHeight;
            }
        });

        // Cursor Animation
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            cursorDot.style.top = mouseY + 'px'; cursorDot.style.left = mouseX + 'px';
        });

        gsap.ticker.add(() => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.top = ringY + 'px';
            cursorRing.style.left = ringX + 'px';
        });

        document.querySelectorAll('a, button, .cursor-pointer, input, .magnetic-el').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

        function toggleLang() {
            const btn = document.getElementById('lang-btn');
            btn.innerText = btn.innerText === 'EN' ? 'PT' : 'EN';
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
      


<div className="loader-overlay" id="loader" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0%, -100%) translate(0px, -2048px)'}}>
<div className="flex flex-col items-center gap-4">
<span className="uppercase text-xs text-red-400 tracking-widest font-mono">Loading Experience</span>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-white w-0" id="loader-bar" style={{width: '100%'}}></div>
</div>
<div className="text-4xl font-semibold tracking-tighter font-mono" id="loader-pct">100%</div>
</div>
</div><div className="cursor-dot" style={{top: '0px', left: '504px'}}></div>
<div className="cursor-ring" style={{top: '0.0003957px', left: '504.005px'}}></div>

<nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-40 mix-blend-exclusion text-white pointer-events-none">
<div className="pointer-events-auto">
<a className="font-mono text-sm font-bold uppercase tracking-widest leading-none hover:opacity-70 transition-opacity block" href="#">
                Lisbon<br/>Makers
            </a>
</div>
<div className="flex items-center gap-8 pointer-events-auto">
<div className="hidden md:flex bg-white/10 border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-md gap-x-6 gap-y-6">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#workshops">Workshops</a>
<a className="uppercase hover:text-accent transition-colors text-xs tracking-widest font-mono" href="#booking">Calendar</a>
</div>
<button className="font-mono text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors w-8 text-right" id="lang-btn" onclick="toggleLang()">EN</button>
</div>
</nav>

<div className="checkout-modal" id="checkout-modal">
<div className="checkout-bg" onclick="toggleCheckout()"></div>
<div className="checkout-panel flex flex-col shadow-2xl">
<div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white z-10">
<h2 className="font-semibold text-xl tracking-tight">Reservation</h2>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors magnetic-el" onclick="toggleCheckout()">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-8 space-y-8">

<div className="bg-bg rounded-lg p-6 border border-gray-200">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-mono text-xxs uppercase tracking-widest text-secondary">Workshop</span>
<h3 className="text-lg font-semibold mt-1" id="checkout-title">Candle Making</h3>
</div>
<div className="text-right">
<span className="font-mono text-xxs uppercase tracking-widest text-secondary">Total</span>
<div className="text-lg font-semibold mt-1" id="checkout-price">€85.00</div>
</div>
</div>
<div className="flex items-center gap-2 text-sm text-secondary border-t border-gray-200 pt-3 mt-3">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span id="checkout-date">Oct 12, 10:00 AM</span>
</div>
</div>

<form className="space-y-6" onsubmit="event.preventDefault(); alert('Booking Confirmed! Email sent.'); toggleCheckout();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-2">
<label className="font-mono text-xs uppercase text-secondary">First Name</label>
<input className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="font-mono text-xs uppercase text-secondary">Last Name</label>
<input className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="font-mono text-xs uppercase text-secondary">Email Address</label>
<input className="w-full bg-transparent border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="pt-4">
<label className="flex items-center gap-3 cursor-pointer">
<input className="custom-check" type="checkbox"/>
<span className="text-xs text-secondary">I agree to the Terms of Service and Cancellation Policy.</span>
</label>
</div>
<button className="w-full bg-primary text-white py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors" type="submit">
                        Confirm &amp; Pay
                    </button>
</form>
</div>
</div>
</div>

<header className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-20">

<canvas className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" id="noise-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F7] pointer-events-none"></div>
<div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-8 opacity-0 reveal-hero" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="font-mono text-xxs uppercase tracking-widest text-secondary">Season 2025 Open</span>
</span>
</div>
<h1 className="text-[12vw] leading-[0.85] font-semibold tracking-tighter text-primary mb-8 select-none mix-blend-darken">
<div className="overflow-hidden"><span className="block reveal-hero-text" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Make.</span></div>
<div className="overflow-hidden"><span className="block reveal-hero-text text-secondary/40" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Build.</span></div>
<div className="overflow-hidden"><span className="block reveal-hero-text" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>Create.</span></div>
</h1>
<p className="text-secondary md:text-lg text-balance reveal-hero text-base font-light opacity-0 max-w-md mr-auto mb-12 ml-auto" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
                Join our intimate workshops in the heart of Chiado. Master the arts of Ceramics, Leather, and Chandlery with local masters.
            </p>
<div className="opacity-0 reveal-hero magnetic-wrap" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<button className="magnetic-area px-8 py-4 bg-primary text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300" onclick="scrollToWorkshops()">
                    Explore Classes
                </button>
</div>
</div>
</header>

<div className="py-6 border-y border-gray-200 bg-white overflow-hidden select-none">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs uppercase tracking-[0.4em] text-secondary">
                Lisbon Makers • Handcrafted • Ceramics • Leather • Scent • Design • Community • Workshop • Lisbon Makers • Handcrafted • Ceramics • Leather • Scent • Design • Community • Workshop • 
            </div>
</div>
</div>

<main className="max-w-[1600px] mx-auto p-6 md:p-12 space-y-32">

<section className="scroll-mt-24" id="workshops">
<div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Select Craft</h2>
<span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">03 Disciplines</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer relative" id="card-candle" onclick="setWorkshop('candle')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0EB] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<svg className="lucide lucide-flame w-32 h-32 text-accent stroke-1" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<div className="absolute top-6 right-6 font-mono text-sm font-medium">€85</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Candle Making</h3>
<p className="text-sm text-secondary line-clamp-2">Scent profiling and soy wax pouring with Master Sofia.</p>
</div>
<div className="border-primary transition-opacity bg-center opacity-0 bg-[url(https://images.unsplash.com/photo-1532170579297-281918c8ae72?w=1600&amp;q=80)] bg-cover border-2 rounded-xl absolute top-0 right-0 bottom-0 left-0" id="border-candle" style={{opacity: '1'}}></div>
</div>
</div>

<div className="group cursor-pointer relative" id="card-ceramic" onclick="setWorkshop('ceramic')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F0F4F8] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<svg className="lucide lucide-boxes w-32 h-32 text-blue-900 stroke-1" data-lucide="boxes" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path><path d="m7 16.5-4.74-2.85"></path><path d="m7 16.5 5-3"></path><path d="M7 16.5v5.17"></path><path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path><path d="m17 16.5-5-3"></path><path d="m17 16.5 4.74-2.85"></path><path d="M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path><path d="M12 8 7.26 5.15"></path><path d="m12 8 4.74-2.85"></path><path d="M12 13.5V8"></path></svg>
</div>
<div className="absolute top-6 right-6 font-mono text-sm font-medium">€120</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Clay &amp; Form</h3>
<p className="text-sm text-secondary line-clamp-2">Hand-building organic vessels and glazing techniques.</p>
</div>
<div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 transition-opacity" id="border-ceramic" style={{opacity: '0'}}></div>
</div>
</div>

<div className="group cursor-pointer relative" id="card-leather" onclick="setWorkshop('leather')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F2F2F0] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<svg className="lucide lucide-briefcase w-32 h-32 text-stone-600 stroke-1" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="absolute top-6 right-6 font-mono text-sm font-medium">€180</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<h3 className="text-2xl font-semibold tracking-tight mb-2">Leathercraft</h3>
<p className="text-sm text-secondary line-clamp-2">Cut, punch, and stitch your own vegetable-tanned tote.</p>
</div>
<div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 transition-opacity" id="border-leather" style={{opacity: '0'}}></div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 transition-opacity duration-500" id="booking" style={{opacity: '1'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-8">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-4">
<h3 className="font-mono text-sm font-bold uppercase tracking-widest">October 2025</h3>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-white transition-colors magnetic-el"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full hover:bg-white transition-colors magnetic-el"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-secondary">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white border border-gray-300"></span> Available</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary"></span> Selected</span>
</div>
</div>
<div className="grid grid-cols-7 mb-2 text-center">
<span className="text-xxs font-mono text-secondary uppercase py-2">Mon</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Tue</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Wed</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Thu</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Fri</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Sat</span>
<span className="text-xxs font-mono text-secondary uppercase py-2">Sun</span>
</div>
<div className="calendar-grid rounded-lg overflow-hidden" id="calendar-days">

<div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="bg-bg min-h-[5rem]"></div><div className="calendar-day group"><span className="font-mono text-sm">1</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">2</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">3</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">4</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">5</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">6</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">7</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">8</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">9</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">10</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">11</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">12</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">13</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">14</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">15</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">16</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">17</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">18</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">19</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">20</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">21</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">22</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">23</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">24</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">25</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">26</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">27</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group disabled"><span className="font-mono text-sm">28</span><span className="text-xxs text-gray-300 mt-auto uppercase">Closed</span></div><div className="calendar-day group"><span className="font-mono text-sm">29</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">30</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div><div className="calendar-day group"><span className="font-mono text-sm">31</span><div className="mt-auto flex justify-between items-end">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</div></div></div>
</div>

<div className="lg:col-span-4 sticky top-24">
<div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
<div className="mb-8">
<span className="font-mono text-xxs uppercase tracking-widest text-accent mb-2 block">Selected Workshop</span>
<h3 className="text-2xl font-semibold tracking-tight" id="panel-title">Candle Making</h3>
<p className="text-sm text-secondary mt-1" id="panel-desc">Scent profiling and soy wax pouring.</p>
</div>
<div className="space-y-6">
<div>
<label className="font-mono text-xxs uppercase tracking-widest text-secondary block mb-2">Date</label>
<div className="text-lg font-medium border-b border-gray-100 pb-2" id="panel-date">Select a date</div>
</div>
<div>
<label className="font-mono text-xxs uppercase tracking-widest text-secondary block mb-3">Available Time</label>
<div className="flex flex-wrap gap-2" id="panel-slots"><span className="text-sm text-gray-400 italic">Select date first</span></div>
</div>
<div className="pt-6 border-t border-gray-100 flex items-center justify-between">
<div>
<span className="font-mono text-xxs uppercase tracking-widest text-secondary block">Price / Person</span>
<span className="text-xl font-semibold" id="panel-price">€85.00</span>
</div>
<button className="bg-primary text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-all" disabled="" id="book-btn" onclick="toggleCheckout()">
                                    Reserve
                                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20"><svg className="lucide lucide-shield w-24 h-24" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/10 pb-6 gap-6">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight">Host Control Panel</h2>
<p className="text-sm text-gray-500 mt-1 font-mono">Manage availability and view rosters.</p>
</div>
<div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">Block Dates Mode</span>
<input className="toggle-switch" id="admin-toggle" type="checkbox"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">

<div className="bg-white/5 p-6 rounded-lg border border-white/5">
<span className="font-mono text-xs text-gray-500 uppercase">Upcoming Revenue</span>
<div className="text-3xl font-medium mt-2">€2,450</div>
<div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[70%]"></div>
</div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5">
<span className="font-mono text-xs text-gray-500 uppercase">Occupancy Rate</span>
<div className="text-3xl font-medium mt-2">84%</div>
<div className="text-xs text-green-400 mt-1 font-mono">+12% vs last month</div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5 flex flex-col justify-between">
<span className="font-mono text-xs text-gray-500 uppercase">Next Session</span>
<div>
<div className="font-medium mt-1">Ceramics / Group B</div>
<div className="text-gray-400 text-xs mt-1">Tomorrow, 10:00 AM • 8/10 pax</div>
</div>
<button className="text-xs text-accent text-left mt-2 hover:underline">View Attendee List →</button>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto pt-10">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Have questions?</h2>
<p className="text-secondary text-sm">Ask our workshop AI about materials, parking, or levels.</p>
</div>
<div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden font-mono text-sm border border-gray-800">
<div className="bg-[#2A2A2A] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<span className="ml-4 text-xs text-gray-500">faq-bot — zsh — 80x24</span>
</div>
<div className="p-6 h-[300px] overflow-y-auto flex flex-col" id="terminal-output">
<div className="mb-4 text-gray-400">
                        Last login: <span id="term-date">Fri Jan 16 2026</span> on ttys001<br/>
                        Welcome to Lisbon Makers Helper v2.1.0
                    </div>
<div className="mb-2">
<span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-gray-300">How can I help you today?</span>
</div>
</div>
<div className="p-4 bg-[#252525] border-t border-gray-700 flex items-center gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder-gray-600" id="ai-input" placeholder="Type here (e.g., 'parking', 'beginner friendly?')" type="text"/>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-200 py-12 mt-20 text-center">
<div className="flex justify-center gap-6 mb-8 text-secondary">
<svg className="lucide lucide-instagram w-5 h-5 hover:text-primary cursor-pointer transition-colors" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-twitter w-5 h-5 hover:text-primary cursor-pointer transition-colors" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<svg className="lucide lucide-mail w-5 h-5 hover:text-primary cursor-pointer transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<p className="font-mono text-xs uppercase text-gray-400 tracking-widest">© 2025 Lisbon Maker Workshops. Made in Chiado.</p>
</footer>


    </>
  );
}
