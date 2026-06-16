import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Accent
      const accent = '#913d43';

      // Sections
      const landing = document.getElementById('landing');
      const inRoom = document.getElementById('inRoom');
      const marketing = document.getElementById('marketing');

      // UI elements
      const loaderText = document.getElementById('loaderText');
      const progressText = document.getElementById('progressText');
      const bar = document.getElementById('bar');
      const yearEl = document.getElementById('year');
      const landingBg = document.getElementById('landingBg');

      // Links
      const toMarketingTop = document.getElementById('toMarketingTop');
      const toMarketingBottom = document.getElementById('toMarketingBottom');
      const toMarketingFromInroom = document.getElementById('toMarketingFromInroom');
      const toInRoomFromMarketing = document.getElementById('toInRoomFromMarketing');

      // Initialize icons
      function initIcons() {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      }

      function showSection(target) {
        // hide all
        [landing, inRoom, marketing].forEach(s => {
          if (!s) return;
          s.classList.add('opacity-0', 'pointer-events-none');
          s.classList.add('hidden');
        });

        // show target
        const el = target === 'landing' ? landing : target === 'inroom' ? inRoom : marketing;
        el.classList.remove('hidden');
        setTimeout(() => {
          el.classList.remove('opacity-0', 'pointer-events-none');
        }, 10);

        // Rebuild icons after DOM changes
        setTimeout(initIcons, 30);
      }

      function simulateLoader(route = 'inroom') {
        const steps = [
          { t: 400, text: 'Checking your location…', p: 18 },
          { t: 1100, text: 'Validating network & security…', p: 42 },
          { t: 1850, text: 'Confirming room occupancy…', p: 67 },
          { t: 2600, text: 'Preparing your menu…', p: 88 },
          { t: 3200, text: 'You’re all set', p: 100 },
        ];

        let total = 0;
        steps.forEach((s) => {
          total += s.t;
          setTimeout(() => {
            loaderText.textContent = s.text;
            bar.style.width = s.p + '%';
            progressText.textContent = s.p + '%';
          }, total);
        });

        // Final route
        setTimeout(() => {
          if (route === 'marketing') {
            showSection('marketing');
          } else {
            showSection('inroom');
          }
        }, total + 350);
      }

      function getQueryFlag(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
      }

      // Simple background slideshow for verification screen
      function initLandingBackground() {
        if (!landingBg) return;
        const slides = landingBg.querySelectorAll('img');
        if (!slides.length) return;
        let i = 0;
        setInterval(() => {
          const prev = i;
          i = (i + 1) % slides.length;
          slides[prev].classList.add('opacity-0');
          slides[prev].classList.remove('opacity-100');
          slides[i].classList.remove('opacity-0');
          slides[i].classList.add('opacity-100');
        }, 3500);
      }

      // Event handlers
      [toMarketingTop, toMarketingBottom, toMarketingFromInroom].forEach(el => {
        if (el) {
          el.addEventListener('click', () => showSection('marketing'));
        }
      });
      if (toInRoomFromMarketing) {
        toInRoomFromMarketing.addEventListener('click', () => showSection('inroom'));
      }

      // Init
      window.addEventListener('DOMContentLoaded', () => {
        initIcons();
        initLandingBackground();
        yearEl.textContent = new Date().getFullYear();

        const wantsMarketing = getQueryFlag('marketing') === '1';
        showSection('landing');
        simulateLoader(wantsMarketing ? 'marketing' : 'inroom');
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1559595500-e15296bdb5c0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop">
<source src="https://cdn.coverr.co/videos/coverr-contemporary-hotel-lobby-2718/1080p.mp4" type="video/mp4"/>
<source src="https://cdn.coverr.co/videos/coverr-contemporary-hotel-lobby-2718/720p.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]"></div>
<div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white/80 to-transparent"></div>
</div>

<header className="fixed top-0 inset-x-0 z-40">
<div className="mx-auto px-4">
<div className="flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-[#913d43] flex items-center justify-center ring-1 ring-neutral-200 shadow-lg shadow-[#913d43]/20">
<span className="text-sm font-semibold tracking-tight text-white">AT</span>
</div>
<div className="flex flex-col leading-tight">
<span className="text-[15px] font-semibold tracking-tight">AeroTag Assist</span>
<span className="text-xs text-neutral-500 -mt-0.5">Smart Guest Experience</span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors cursor-pointer" id="toMarketingTop">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sparkles"></i>
<span className="text-neutral-700">View marketing experience</span>
</a>
</div>
</div>
</div>
<div className="border-t border-neutral-200"></div>
</header>

<main className="relative min-h-screen flex items-center justify-center px-4" id="landing">

<div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute inset-0" id="landingBg">
<img alt="Hotel exterior" className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
<img alt="Lobby" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1920&amp;q=80&amp;auto=format&amp;fit=crop"/>
<img alt="Suite" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1920&amp;q=80&amp;auto=format&amp;fit=crop"/>
<img alt="Pool" className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700" src="https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&amp;w=1920&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/70 to-white/80"></div>
</div>
<div className="mx-auto w-full max-w-sm relative z-10">
<div className="flex flex-col items-center text-center pt-16">

<div className="relative">
<div className="absolute inset-0 rounded-full">
<span className="absolute inset-0 rounded-full animate-ping bg-[#913d43]/20"></span>
</div>
<div className="relative flex items-center justify-center h-36 w-36 rounded-full bg-white ring-1 ring-neutral-200 shadow-2xl shadow-neutral-900/5">
<div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-neutral-100 to-transparent"></div>
<i className="relative w-16 h-16 text-neutral-900" data-lucide="qr-code"></i>
</div>
</div>
<h1 className="mt-8 text-3xl font-semibold tracking-tight">Verifying your stay</h1>
<p className="mt-2 text-sm text-neutral-600">Please hold while we confirm your location and room status.</p>

<div className="mt-8 flex flex-col items-center gap-4">
<div className="relative h-10 w-10">
<span className="absolute inset-0 rounded-full border-2 border-neutral-200"></span>
<span className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#913d43] animate-spin"></span>
</div>
<div className="w-full">
<div className="h-1.5 w-full rounded-full bg-neutral-200 overflow-hidden">
<div className="h-1.5 rounded-full bg-[#913d43]" id="bar" style={{width: '0%', transition: 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)'}}></div>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-neutral-500">
<span id="loaderText">Checking your location…</span>
<span id="progressText">0%</span>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center justify-center gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200">
<i className="w-4 h-4 text-[#913d43]" data-lucide="locate-fixed"></i>
              Location services
            </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200">
<i className="w-4 h-4 text-[#913d43]" data-lucide="door-open"></i>
              Room occupancy
            </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200">
<i className="w-4 h-4 text-[#913d43]" data-lucide="wifi"></i>
              Network secure
            </span>
</div>

<div className="mt-6 inline-flex items-center gap-3 rounded-lg bg-white/90 ring-1 ring-neutral-200 px-3 py-2 backdrop-blur">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center ring-1 ring-neutral-300 shadow-sm">
<span className="text-xs font-semibold tracking-tight">GH</span>
</div>
<div className="flex flex-col items-start leading-tight">
<span className="text-sm font-medium tracking-tight">Grand Hill Hotel</span>
<span className="text-[11px] text-neutral-500">Powered by AeroTag Assist</span>
</div>
</div>

<div className="mt-8 flex flex-col items-center gap-3">
<button className="text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2" id="toMarketingBottom">
<i className="w-4 h-4 text-[#913d43]" data-lucide="map-pin"></i>
              Not in your room? Explore offers
            </button>
<div className="text-xs text-neutral-500">Scan detected via AeroTag. This typically takes 3–5 seconds.</div>
</div>

<div className="mt-8 w-full">
<div className="flex items-center justify-between">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#913d43]" data-lucide="image"></i>
                Around the hotel
              </h4>
<span className="text-xs text-neutral-500">Swipe</span>
</div>
<div className="mt-3 flex gap-3 overflow-x-auto pb-1">
<div className="min-w-[140px] rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Hotel exterior at dusk" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<p className="text-xs text-neutral-700">Exterior</p>
</div>
</div>
<div className="min-w-[140px] rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Modern hotel lobby" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-2">
<p className="text-xs text-neutral-700">Lobby</p>
</div>
</div>
<div className="min-w-[140px] rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Signature suite interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-2">
<p className="text-xs text-neutral-700">Suite</p>
</div>
</div>
<div className="min-w-[140px] rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Infinity pool with city view" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503481766315-7a586b20f66d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2">
<p className="text-xs text-neutral-700">Pool</p>
</div>
</div>
</div>
</div>


<div className="mt-6 w-full">
<h4 className="text-sm font-medium tracking-tight text-neutral-900 inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sparkles"></i>
              Hotel highlights
            </h4>
<div className="mt-2 flex gap-2 overflow-x-auto pb-1">
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-4 h-4 text-[#913d43]" data-lucide="waves"></i>
                Rooftop Pool
              </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-4 h-4 text-[#913d43]" data-lucide="cup-soda"></i>
                Lobby Bar
              </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sparkles"></i>
                Thermal Spa
              </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs rounded-md bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sun"></i>
                Oceanfront
              </span>
</div>
</div>

</div>
</div>
</main>

<section className="hidden opacity-0 pointer-events-none transition-opacity duration-500 relative min-h-screen px-4" id="inRoom">
<div className="mx-auto max-w-sm pt-24 pb-10">
<div className="flex flex-col gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Welcome to Room 1814</h2>
<p className="mt-2 text-neutral-600">Your in-room companion is ready. Order, book and control — all in one place.</p>
<div className="mt-4 inline-flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4 text-[#913d43]" data-lucide="shield-check"></i>
              Verified inside geofence • Occupied
            </div>
</div>
<div className="flex items-center gap-2">
<a className="text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 cursor-pointer" id="toMarketingFromInroom">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sparkles"></i>
              Switch to marketing view
            </a>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-5">

<div className="relative overflow-hidden rounded-xl bg-white ring-1 ring-neutral-200 p-5">

<div aria-hidden="true" className="absolute inset-0 pointer-events-none">
<img alt="Hotel lobby backdrop" className="w-full h-full object-cover blur-md opacity-30 scale-105" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1920&amp;q=80&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-white/70"></div>
</div>
<div className="relative flex items-center justify-between">
<div>
<h3 className="text-2xl font-semibold tracking-tight">In-Room Menu</h3>
<p className="mt-1 text-sm text-neutral-600">Food &amp; beverage, housekeeping, amenities, and more.</p>
</div>
<div className="hidden md:block">
<div className="h-12 w-12 rounded-full bg-[#913d43]/10 flex items-center justify-center ring-1 ring-[#913d43]/20">
<i className="w-6 h-6 text-[#913d43]" data-lucide="concierge-bell"></i>
</div>
</div>
</div>
<div className="relative mt-5 grid grid-cols-2 gap-3">
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="chef-hat"></i>
<span className="text-sm">Room Service</span>
</button>
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="bed"></i>
<span className="text-sm">Housekeeping</span>
</button>
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="sparkles"></i>
<span className="text-sm">Spa &amp; Wellness</span>
</button>
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="tv"></i>
<span className="text-sm">TV &amp; Casting</span>
</button>
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="route"></i>
<span className="text-sm">City Guide</span>
</button>
<button className="group flex items-center gap-3 rounded-lg px-3 py-3 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="headset"></i>
<span className="text-sm">Concierge</span>
</button>
</div>
<div className="relative mt-5 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[#913d43] hover:bg-[#7e3439] ring-1 ring-[#913d43]/30 hover:ring-[#913d43]/40 transition-colors text-white">
<i className="w-5 h-5" data-lucide="menu"></i>
<span className="text-sm font-medium">Open In-Room Menu</span>
</button>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<i className="w-5 h-5 text-[#913d43]" data-lucide="file-text"></i>
<span className="text-sm">View Invoice</span>
</button>
</div>
</div>

<div className="space-y-5">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Today</p>
<p className="mt-1 text-lg font-semibold tracking-tight">Housekeeping at 3:30 PM</p>
</div>
<i className="w-6 h-6 text-[#913d43]" data-lucide="calendar-check-2"></i>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-neutral-600">Change or reschedule</span>
<button className="text-xs rounded-md px-3 py-1.5 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">Manage</button>
</div>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-neutral-600">Welcome gift</p>
<p className="mt-1 text-lg font-semibold tracking-tight">Two drinks at Lobby Bar</p>
</div>
<i className="w-6 h-6 text-[#913d43]" data-lucide="ticket"></i>
</div>
<div className="mt-4 flex items-center justify-between">
<span className="text-xs text-neutral-600">Valid today 5–7 PM</span>
<button className="text-xs rounded-md px-3 py-1.5 bg-[#913d43]/10 hover:bg-[#913d43]/20 text-neutral-900 ring-1 ring-[#913d43]/20 hover:ring-[#913d43]/30 transition-colors">Redeem</button>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#913d43]" data-lucide="clock"></i>
<p className="text-sm text-neutral-600">Estimated delivery for room service is 25–35 minutes.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors text-sm">
<i className="w-4 h-4 text-[#913d43]" data-lucide="phone"></i>
                Contact front desk
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="hidden opacity-0 pointer-events-none transition-opacity duration-500 relative min-h-screen px-4" id="marketing">
<div className="mx-auto max-w-sm pt-24 pb-10">
<div className="flex flex-col gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight">Discover your next stay</h2>
<p className="mt-2 text-neutral-600">You’re outside the room or the room is vacant. Explore offers and book with confidence.</p>
<div className="mt-3 inline-flex items-center gap-2 text-xs text-neutral-500">
<i className="w-4 h-4 text-[#913d43]" data-lucide="map-pin"></i>
              Outside geofence / vacant
            </div>
</div>
<div className="flex items-center gap-2">
<a className="text-sm text-neutral-600 hover:text-neutral-900 inline-flex items-center gap-2 cursor-pointer" id="toInRoomFromMarketing">
<i className="w-4 h-4 text-[#913d43]" data-lucide="badge-check"></i>
              I’m in my room now
            </a>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-5">

<div className="rounded-xl overflow-hidden ring-1 ring-neutral-200 bg-white">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Resort view" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&amp;w=2067&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight">Members Save 20%</h3>
<span className="text-xs px-2 py-1 rounded bg-[#913d43]/10 text-[#913d43] ring-1 ring-[#913d43]/20">Limited</span>
</div>
<p className="mt-2 text-sm text-neutral-600">Unlock exclusive rates when signing in. Flexible cancellation included.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-[#913d43] hover:bg-[#7e3439] ring-1 ring-[#913d43]/30 hover:ring-[#913d43]/40 transition-colors text-sm text-white">
<i className="w-4 h-4" data-lucide="calendar"></i>
                  Book now
                </button>
<button className="text-sm text-neutral-600 hover:text-neutral-900">Details</button>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden ring-1 ring-neutral-200 bg-white">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Dining" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Chef’s Tasting Menu</h3>
<p className="mt-2 text-sm text-neutral-600">A five-course experience at the signature restaurant.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors text-sm">
<i className="w-4 h-4 text-[#913d43]" data-lucide="chef-hat"></i>
                  Reserve table
                </button>
<button className="text-sm text-neutral-600 hover:text-neutral-900">View menu</button>
</div>
</div>
</div>

<div className="rounded-xl overflow-hidden ring-1 ring-neutral-200 bg-white">
<div className="aspect-[16/9] overflow-hidden">
<img alt="Spa" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<h3 className="text-lg font-semibold tracking-tight">Spa Escape</h3>
<p className="mt-2 text-sm text-neutral-600">Complimentary thermal circuit with any 60-minute treatment.</p>
<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-white hover:bg-neutral-50 ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors text-sm">
<i className="w-4 h-4 text-[#913d43]" data-lucide="sparkles"></i>
                  Book treatment
                </button>
<button className="text-sm text-neutral-600 hover:text-neutral-900">Explore spa</button>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-[#913d43]" data-lucide="images"></i>
            Hotel highlights
          </h3>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Oceanfront resort exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
</img></div>
<div className="p-2">
<p className="text-xs text-neutral-700">Oceanfront</p>
</div>
</div>
<div className="rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Craft cocktails at the bar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
</img></div>
<div className="p-2">
<p className="text-xs text-neutral-700">Lobby Bar</p>
</div>
</div>
<div className="rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="Indoor spa relaxation area" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80" />
</img></div>
<div className="p-2">
<p className="text-xs text-neutral-700">Thermal Spa</p>
</div>
</div>
<div className="rounded-lg overflow-hidden bg-white ring-1 ring-neutral-200 hover:ring-neutral-300 transition-colors">
<div className="aspect-[4/3]">
<img alt="City view rooftop pool" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-2">
<p className="text-xs text-neutral-700">Rooftop Pool</p>
</div>
</div>
</div>
</div>


<div className="mt-10 rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="flex flex-col gap-4">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-[#913d43]" data-lucide="globe-2"></i>
<p className="text-sm text-neutral-600">Flexible rates with local taxes and fees displayed at checkout.</p>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md px-3 py-2 bg-[#913d43] hover:bg-[#7e3439] ring-1 ring-[#913d43]/30 hover:ring-[#913d43]/40 transition-colors text-sm text-white">
<i className="w-4 h-4" data-lucide="calendar-range"></i>
                Check availability
              </button>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10">
<div className="mx-auto px-4 py-8">
<div className="flex flex-col items-center justify-between gap-4 text-xs text-neutral-600">
<div className="flex items-center gap-2">
<span>© <span id="year"></span> AeroTag Assist</span>
<span className="hidden sm:inline">·</span>
<span className="hidden sm:inline">Privacy &amp; Safety First</span>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5">
<i className="w-3 h-3 text-[#913d43]" data-lucide="circle"></i>
              Live
            </span>
<span className="inline-flex items-center gap-1.5">
<i className="w-3 h-3 text-neutral-500" data-lucide="shield"></i>
              Secured
            </span>
</div>
</div>
</div>
</footer>


    </>
  );
}
