import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      lucide.createIcons();
      // Set uniform stroke width 1.5 for all icons
      document.querySelectorAll('svg.lucide').forEach(svg => svg.setAttribute('stroke-width', '1.5'));

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      mobileBtn?.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });

      // Year
      const yearSpan = document.getElementById('yearSpan');
      if (yearSpan) yearSpan.textContent = new Date().getFullYear();

      // Demo modal
      const demoOpenBtns = document.querySelectorAll('[data-demo-open]');
      const demoCloseBtns = document.querySelectorAll('[data-demo-close]');
      const demoModal = document.getElementById('demoModal');
      demoOpenBtns.forEach(btn => btn.addEventListener('click', () => {
        demoModal.classList.remove('hidden');
      }));
      demoCloseBtns.forEach(btn => btn.addEventListener('click', () => {
        demoModal.classList.add('hidden');
      }));
      demoModal?.addEventListener('click', (e) => {
        if (e.target === demoModal) demoModal.classList.add('hidden');
      });

      // Switcher logic
      const tabOn = document.getElementById('tabOn');
      const tabOff = document.getElementById('tabOff');
      const panelOn = document.getElementById('panelOn');
      const panelOff = document.getElementById('panelOff');
      const phoneOn = document.getElementById('phoneOn');
      const phoneOff = document.getElementById('phoneOff');
      const previewTitle = document.getElementById('previewTitle');
      const previewSub = document.getElementById('previewSub');

      function setMode(mode) {
        const isOn = mode === 'on';
        tabOn.setAttribute('aria-selected', isOn);
        tabOff.setAttribute('aria-selected', !isOn);

        panelOn.classList.toggle('hidden', !isOn);
        panelOff.classList.toggle('hidden', isOn);

        phoneOn.classList.toggle('hidden', !isOn);
        phoneOff.classList.toggle('hidden', isOn);

        if (isOn) {
          previewTitle.textContent = 'Guest Services Portal';
          previewSub.textContent = 'Inside hotel: instant access to in‑room services';
        } else {
          previewTitle.textContent = 'Marketing & Promotional Page';
          previewSub.textContent = 'Outside hotel: offers, loyalty, and direct bookings';
        }
      }
      tabOn.addEventListener('click', () => setMode('on'));
      tabOff.addEventListener('click', () => setMode('off'));
      setMode('on');

      // Dashboard chart
      const chartEl = document.getElementById('reqChart');
      if (chartEl && window.Chart) {
        const ctx = chartEl.getContext('2d');
        const primary = 'rgba(15, 23, 42, 1)'; // slate-900
        const accent = 'rgba(30, 64, 175, 1)'; // blue-800
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Requests',
                data: [82, 96, 110, 105, 128, 94, 88],
                borderColor: primary,
                backgroundColor: 'rgba(15, 23, 42, 0.08)',
                fill: true,
                tension: 0.35,
                pointRadius: 2.5,
                pointBackgroundColor: primary,
                borderWidth: 2
              },
              {
                label: 'Fulfilled',
                data: [70, 90, 100, 99, 120, 88, 83],
                borderColor: accent,
                backgroundColor: 'rgba(30, 64, 175, 0.08)',
                fill: true,
                tension: 0.35,
                pointRadius: 2.5,
                pointBackgroundColor: accent,
                borderWidth: 2
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                labels: { boxWidth: 10, color: '#334155', font: { family: 'Inter', size: 11 } }
              },
              tooltip: {
                backgroundColor: 'rgba(2,6,23,0.9)',
                titleColor: '#fff',
                bodyColor: '#e2e8f0',
                padding: 10,
                displayColors: false
              }
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { color: '#64748b', font: { family: 'Inter', size: 11 } }
              },
              y: {
                grid: { color: 'rgba(148,163,184,0.25)' },
                ticks: { color: '#64748b', font: { family: 'Inter', size: 11 }, precision: 0 },
                suggestedMin: 0
              }
            }
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md border border-slate-300 flex items-center justify-center text-slate-900 tracking-tight text-sm font-semibold">
              AT
            </div>
<div className="text-slate-900 text-base sm:text-lg font-semibold tracking-tight">AeroTag Assist</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#how">How it Works</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#dashboard">Dashboard</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#why">Why Choose</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="h-9 px-3 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium transition-colors">Sign In</button>
<button className="h-9 px-3 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors" data-demo-open="">Book a Demo</button>
</div>

<button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-300 hover:bg-slate-50 transition-colors" id="mobileMenuBtn">
<i data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200" id="mobileMenu">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<nav className="flex flex-col gap-2 text-sm">
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#how">How it Works</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#features">Features</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#dashboard">Dashboard</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#why">Why Choose</a>
<a className="px-2 py-2 rounded-md hover:bg-slate-50" href="#contact">Contact</a>
<div className="pt-2 flex gap-2">
<button className="flex-1 h-9 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium">Sign In</button>
<button className="flex-1 h-9 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium" data-demo-open="">Book a Demo</button>
</div>
</nav>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,_rgba(16,24,40,.08),_transparent_60%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
<div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-full border border-slate-300 bg-white text-slate-700 text-xs font-medium">
<i className="h-4 w-4" data-lucide="shield-check"></i>
              Leading Geo-Fenced Hotel Room QR Communication System
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Smarter Guest Communication. Secure, Intuitive, Geo‑Fenced.
            </h1>
<p className="mt-4 text-slate-600 text-base leading-relaxed">
              With AeroTag Assist, one QR code unlocks seamless in-room services for guests inside your hotel — and transforms into a powerful marketing tool when scanned outside. Unlike traditional QR systems, our geo-fenced solution protects your operations from post-checkout misuse while enhancing guest satisfaction.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="h-11 px-5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium" data-demo-open="">
                Book a Demo
              </button>
<a className="h-11 px-5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium inline-flex items-center justify-center gap-2" href="#how">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                See How It Works
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs text-slate-500">
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="lock"></i>
                Privacy‑first
              </div>
<div className="hidden sm:inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="map-pin"></i>
                Geo‑fenced access
              </div>
<div className="inline-flex items-center gap-2">
<i className="h-4 w-4" data-lucide="timer"></i>
                Auto expiry
              </div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-6 sm:-inset-8 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(30,41,59,0.06),rgba(2,6,23,0)_60%)] rounded-3xl"></div>
<div className="relative rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">

<div className="grid grid-cols-2 gap-4">
<div className="col-span-2">
<div className="rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="qr-code"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">One QR, Two Journeys</div>
<div className="text-xs text-slate-500">On‑premise services, off‑premise marketing</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Inside hotel</div>
<div className="mt-1 text-sm font-medium text-slate-800">Guest Services Portal</div>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">Outside</div>
<div className="mt-1 text-sm font-medium text-slate-800">Marketing &amp; Offers</div>
</div>
</div>
</div>
</div>

<div className="col-span-2">
<div className="mx-auto w-full max-w-[380px] rounded-[2rem] border border-slate-300 bg-white shadow-sm">
<div className="h-6 flex items-center justify-center">
<div className="h-1.5 w-28 bg-slate-200 rounded-full mt-2"></div>
</div>
<div className="p-4">
<div className="h-40 rounded-xl overflow-hidden border border-slate-200">
<img alt="Hotel lobby" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 bg-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="building-2"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">AeroTag Portal</div>
<div className="text-xs text-slate-500">Fast access to what guests need</div>
</div>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="rounded-lg border border-slate-200 p-3 text-center">
<i className="h-5 w-5 mx-auto" data-lucide="utensils"></i>
<div className="mt-2 text-xs font-medium">Room Service</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 text-center">
<i className="h-5 w-5 mx-auto" data-lucide="broom"></i>
<div className="mt-2 text-xs font-medium">Housekeeping</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 text-center">
<i className="h-5 w-5 mx-auto" data-lucide="concierge-bell"></i>
<div className="mt-2 text-xs font-medium">Concierge</div>
</div>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<button className="h-9 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800">Order Now</button>
<button className="h-9 rounded-md border border-slate-300 bg-white text-slate-900 text-xs font-medium hover:bg-slate-50">Request Service</button>
</div>
</div>
<div className="h-6"></div>
</div>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            The Risk No One Talks About in Hotel QR Systems
          </h2>
<p className="mt-4 text-slate-600">
            Most hotels have adopted QR-based guest service systems, but there’s a serious flaw that often goes unnoticed. Once a guest scans the QR, they can save the link or photo of the code. Even after checkout, they can still access the service page — and place requests to rooms they no longer occupy.
          </p>
<div className="mt-6 grid sm:grid-cols-2 gap-3">
<div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
<i className="h-5 w-5 text-slate-700" data-lucide="list-x"></i>
<div className="text-sm">
<div className="font-medium">Wrong orders being sent to rooms.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
<i className="h-5 w-5 text-slate-700" data-lucide="timer-off"></i>
<div className="text-sm">
<div className="font-medium">Wasted staff time chasing invalid requests.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
<i className="h-5 w-5 text-slate-700" data-lucide="shield-alert"></i>
<div className="text-sm">
<div className="font-medium">Risk of spam or malicious misuse.</div>
</div>
</div>
<div className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-3">
<i className="h-5 w-5 text-slate-700" data-lucide="help-circle"></i>
<div className="text-sm">
<div className="font-medium">Confusion and poor experiences for staff and future guests.</div>
</div>
</div>
</div>
<p className="mt-4 text-slate-600">
            Hotels expect convenience, but instead, they inherit an operational and security problem.
          </p>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50" id="solution">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            One QR. Two Journeys. Zero Misuse.
          </h2>
<p className="mt-4 text-slate-600">
            AeroTag Assist eliminates these flaws with geo-fenced access and time-limited control. Our intelligent QR system ensures guests only get the right services, at the right time, in the right place.
          </p>
</div>

<div className="mt-8">
<div className="inline-flex rounded-lg border border-slate-300 bg-white p-1">
<button aria-selected="true" className="tab-btn h-9 px-4 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 aria-selected:bg-slate-900 aria-selected:text-white" id="tabOn">
<i className="h-4 w-4" data-lucide="scan"></i>
              On‑Premise Journey
            </button>
<button aria-selected="false" className="tab-btn h-9 px-4 rounded-md text-sm font-medium text-slate-700 hover:bg-slate-50 flex items-center gap-2 aria-selected:bg-slate-900 aria-selected:text-white" id="tabOff">
<i className="h-4 w-4" data-lucide="route"></i>
              Off‑Premise Journey
            </button>
</div>
</div>

<div className="mt-8 grid lg:grid-cols-2 gap-8 items-start">

<div className="order-2 lg:order-1">
<div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="qr-code"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" id="previewTitle">Guest Services Portal</div>
<div className="text-xs text-slate-500" id="previewSub">Inside hotel: instant access to in‑room services</div>
</div>
</div>
<div className="text-xs text-slate-500 hidden sm:block">
                  Live preview
                </div>
</div>
<div className="mt-5 mx-auto w-full max-w-[420px] rounded-[2rem] border border-slate-300 bg-white shadow-sm">
<div className="h-6 flex items-center justify-center">
<div className="h-1.5 w-28 bg-slate-200 rounded-full mt-2"></div>
</div>
<div className="p-4 transition-all" id="phonePanel">

<div className="space-y-3" id="phoneOn">
<div className="h-36 rounded-xl overflow-hidden border border-slate-200">
<img alt="In-room dining" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="grid grid-cols-3 gap-2">
<div className="rounded-lg border border-slate-200 p-3 text-center hover:bg-slate-50 transition-colors">
<i className="h-5 w-5 mx-auto" data-lucide="utensils"></i>
<div className="mt-2 text-xs font-medium">Room Service</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 text-center hover:bg-slate-50 transition-colors">
<i className="h-5 w-5 mx-auto" data-lucide="broom"></i>
<div className="mt-2 text-xs font-medium">Housekeeping</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 text-center hover:bg-slate-50 transition-colors">
<i className="h-5 w-5 mx-auto" data-lucide="concierge-bell"></i>
<div className="mt-2 text-xs font-medium">Concierge</div>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="h-9 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800">Order Now</button>
<button className="h-9 rounded-md border border-slate-300 bg-white text-slate-900 text-xs font-medium hover:bg-slate-50">Request Pickup</button>
</div>
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="shield-check"></i>
                        Geo‑fenced to your hotel. Access expires on checkout.
                      </div>
</div>
</div>

<div className="space-y-3 hidden" id="phoneOff">
<div className="h-36 rounded-xl overflow-hidden border border-slate-200">
<img alt="Marketing destination" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&amp;w=1400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="rounded-lg border border-slate-200 p-3">
<div className="text-xs text-slate-500">You’re outside the property</div>
<div className="text-sm font-medium">Explore offers &amp; book your next stay</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition-colors">
<div className="text-xs font-medium">Member Rates</div>
<div className="text-xs text-slate-500">Save up to 15%</div>
</div>
<div className="rounded-lg border border-slate-200 p-3 hover:bg-slate-50 transition-colors">
<div className="text-xs font-medium">Spa Packages</div>
<div className="text-xs text-slate-500">Exclusive weekend deals</div>
</div>
</div>
<button className="w-full h-9 rounded-md bg-slate-900 text-white text-xs font-medium hover:bg-slate-800">Book Direct</button>
<div className="rounded-lg border border-slate-200 bg-slate-50/60 p-3">
<div className="flex items-center gap-2 text-xs text-slate-600">
<i className="h-4 w-4" data-lucide="link-2-off"></i>
                        Service links hidden. No room or guest data exposed.
                      </div>
</div>
</div>
</div>
<div className="h-6"></div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="space-y-4" id="panelOn">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div>
<div className="font-semibold tracking-tight">On‑Premise Access</div>
<div className="text-sm text-slate-600 mt-1">
                      Guests inside your hotel scan and instantly see the Guest Services Portal with options for room service, housekeeping, spa, concierge, and more.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="sparkles"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Complete Guest Services Portal</div>
<div className="text-sm text-slate-600 mt-1">
                      Well‑organized categories, clear actions, and no app download required.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Privacy‑First Design</div>
<div className="text-sm text-slate-600 mt-1">
                      No guest details or room identity are exposed within requests visible to outsiders.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="clock"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Automatic Expiry</div>
<div className="text-sm text-slate-600 mt-1">
                      When a guest checks out, access expires — preventing misuse and post‑stay requests.
                    </div>
</div>
</div>
</div>
</div>
<div className="space-y-4 hidden" id="panelOff">
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="route"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Off‑Premise Redirects</div>
<div className="text-sm text-slate-600 mt-1">
                      If the QR is scanned outside or via a saved photo, guests see your Marketing Page with offers, loyalty, and booking links.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="megaphone"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Unlock Marketing Potential</div>
<div className="text-sm text-slate-600 mt-1">
                      Every offsite scan becomes a chance to promote your brand and capture bookings directly.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Data Security</div>
<div className="text-sm text-slate-600 mt-1">
                      Service endpoints and room context are shielded offsite. No leakage of sensitive flows.
                    </div>
</div>
</div>
</div>
<div className="rounded-lg border border-slate-200 bg-white p-4">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="clock"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Automatic Expiry</div>
<div className="text-sm text-slate-600 mt-1">
                      Post‑checkout scans never reach live service pages. They are safely redirected to marketing.
                    </div>
</div>
</div>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="h-10 px-4 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium" data-demo-open="">
                Book a Demo
              </button>
<a className="h-10 px-4 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium inline-flex items-center gap-2" href="#how">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                See the Steps
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="how">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Simple for Guests. Smart for Hotels.
          </h2>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="scan"></i>
</div>
<div className="mt-3 font-semibold tracking-tight">Step 1 – Scan</div>
<p className="mt-1 text-sm text-slate-600">
              Guests scan the AeroTag QR code placed in their room or anywhere within the hotel.
            </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="map-pin"></i>
</div>
<div className="mt-3 font-semibold tracking-tight">Step 2 – Geo‑Intelligent Redirect</div>
<p className="mt-1 text-sm text-slate-600">
              Inside the hotel: Guests are taken to the Room &amp; Guest Services Portal. Outside the hotel: The QR redirects to your Marketing &amp; Promotional Page.
            </p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<div className="mt-3 font-semibold tracking-tight">Step 3 – Secure Access</div>
<p className="mt-1 text-sm text-slate-600">
              Once the guest checks out, access automatically expires — ensuring only the current guest can use the system.
            </p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Powerful Features for a Modern Hotel Experience
          </h2>
<p className="mt-3 text-slate-600">
            Geo‑Fenced Access – QR works only within hotel premises. Auto Expiry on Checkout – No misuse after a guest’s stay ends. Dual‑Purpose Redirects – Services for guests, marketing for outsiders. Complete Guest Services Portal – Room service, housekeeping, maintenance, spa, concierge, and more. Hotel Dashboard – Manage and track requests in real time. Data Security – Guest privacy is always protected. Custom Branding – Tailored to match your hotel’s look and feel.
          </p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="map"></i></div>
<div className="mt-3 font-semibold tracking-tight">Geo‑Fenced Access</div>
<p className="mt-1 text-sm text-slate-600">Works only within hotel premises for accurate service delivery.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="timer"></i></div>
<div className="mt-3 font-semibold tracking-tight">Auto Expiry on Checkout</div>
<p className="mt-1 text-sm text-slate-600">Eliminates post‑stay misuse from saved links or photos.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="git-branch"></i></div>
<div className="mt-3 font-semibold tracking-tight">Dual‑Purpose Redirects</div>
<p className="mt-1 text-sm text-slate-600">Guest services when inside, marketing and bookings when outside.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="layout-grid"></i></div>
<div className="mt-3 font-semibold tracking-tight">Guest Services Portal</div>
<p className="mt-1 text-sm text-slate-600">From dining to spa and maintenance, all in one place without an app.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="activity"></i></div>
<div className="mt-3 font-semibold tracking-tight">Hotel Dashboard</div>
<p className="mt-1 text-sm text-slate-600">Manage and track requests in real‑time to boost team efficiency.</p>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-5">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="shield"></i></div>
<div className="mt-3 font-semibold tracking-tight">Data Security &amp; Privacy</div>
<p className="mt-1 text-sm text-slate-600">No guest or room data exposed outside the property. Ever.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="dashboard">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            Dashboard Preview
          </h2>
<p className="mt-3 text-slate-600">
            See a quick snapshot of live requests, fulfillment pace, and team load — optimized for clarity and speed.
          </p>
</div>
<div className="mt-8 grid lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 rounded-xl border border-slate-200 bg-white p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="activity"></i>
</div>
<div>
<div className="font-semibold tracking-tight">Requests Over Time</div>
<div className="text-xs text-slate-500">Last 7 days</div>
</div>
</div>
<div className="text-xs text-slate-500">Live</div>
</div>
<div className="mt-4 rounded-lg border border-slate-200 bg-white p-3">

<div className="relative h-56">
<canvas id="reqChart"></canvas>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white p-5 space-y-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="check-circle-2"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Fulfilled Today</div>
<div className="text-xs text-slate-500">63 orders</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="clock"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Median Response</div>
<div className="text-xs text-slate-500">7 min</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md border border-slate-200 flex items-center justify-center">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Active Staff</div>
<div className="text-xs text-slate-500">18 online</div>
</div>
</div>
<div className="pt-2">
<div className="text-xs font-medium text-slate-700">Live Requests</div>
<div className="mt-2 space-y-2">
<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/60 p-2.5">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="utensils"></i>
<span className="text-xs">Room Service</span>
</div>
<span className="text-xs text-slate-500">12 pending</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/60 p-2.5">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="broom"></i>
<span className="text-xs">Housekeeping</span>
</div>
<span className="text-xs text-slate-500">7 pending</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50/60 p-2.5">
<div className="flex items-center gap-2">
<i className="h-4 w-4" data-lucide="concierge-bell"></i>
<span className="text-xs">Concierge</span>
</div>
<span className="text-xs text-slate-500">3 pending</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200" id="why">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            The Smarter Choice for Hotels That Value Security and Service
          </h2>
<p className="mt-3 text-slate-600">
            Increase Guest Satisfaction – Guests get instant access to all services without downloading an app. Boost Staff Efficiency – Only valid, in‑stay requests reach your team. Unlock Marketing Potential – Every offsite scan becomes a chance to promote your hotel and capture bookings. Protect Operations – Prevent misuse of old links or saved QR codes after checkout. Drive More Direct Revenue – Redirect offsite scans to booking engines and exclusive offers.
          </p>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="smile"></i></div>
<div>
<div className="font-semibold tracking-tight">Increase Guest Satisfaction</div>
<p className="mt-1 text-sm text-slate-600">Instant access to everything they need, no app installation required.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="users"></i></div>
<div>
<div className="font-semibold tracking-tight">Boost Staff Efficiency</div>
<p className="mt-1 text-sm text-slate-600">Only valid requests reach your teams, reducing noise and confusion.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="credit-card"></i></div>
<div>
<div className="font-semibold tracking-tight">Drive Direct Revenue</div>
<p className="mt-1 text-sm text-slate-600">Convert offsite scans into bookings and loyalty sign‑ups.</p>
</div>
</div>
</div>
<div className="rounded-xl border border-slate-200 bg-white p-6">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 flex items-center justify-center"><i className="h-5 w-5" data-lucide="shield-check"></i></div>
<div>
<div className="font-semibold tracking-tight">Protect Operations</div>
<p className="mt-1 text-sm text-slate-600">Prevent misuse from old links and saved QR images after checkout.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 bg-slate-50/50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Ready to Upgrade Your Guest Experience and Protect Your Hotel?
              </h3>
<p className="mt-3 text-slate-600">
                AeroTag Assist is the only geo‑fenced, misuse‑proof QR communication system for hotels. Enhance guest services, safeguard your operations, and turn every scan into an opportunity.
              </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="h-11 px-5 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium" data-demo-open="">
                  Book a Demo
                </button>
<button className="h-11 px-5 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm font-medium" data-demo-open="">
                  Talk to Our Team
                </button>
</div>
</div>
<div className="md:block">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md border border-slate-200 bg-white flex items-center justify-center">
<i className="h-5 w-5" data-lucide="headphones"></i>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Priority Support</div>
<div className="text-xs text-slate-500">White‑glove onboarding</div>
</div>
</div>
<div className="mt-3 text-xs text-slate-600">
                  We’ll help you launch property‑wide in days, not months, with custom branding and secure access configuration.
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-7 w-7 rounded-md border border-slate-300 flex items-center justify-center text-slate-900 tracking-tight text-xs font-semibold">
              AT
            </div>
<div className="text-sm font-medium text-slate-700">AeroTag Assist</div>
</div>
<div className="text-xs text-slate-500">
            © <span id="yearSpan"></span> AeroTag Assist. All rights reserved.
          </div>
<div className="flex items-center gap-4 text-xs">
<a className="text-slate-600 hover:text-slate-900" href="#">Privacy</a>
<a className="text-slate-600 hover:text-slate-900" href="#">Terms</a>
<a className="text-slate-600 hover:text-slate-900" href="#">Security</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="demoModal">
<div className="absolute inset-0 bg-slate-900/30"></div>
<div className="relative max-w-lg mx-auto mt-24 px-4">
<div className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-slate-200">
<div className="text-base font-semibold tracking-tight">Book a Demo</div>
<button aria-label="Close" className="h-8 w-8 rounded-md border border-slate-300 hover:bg-slate-50 inline-flex items-center justify-center" data-demo-close="">
<i data-lucide="x"></i>
</button>
</div>
<div className="p-5">
<form action="https://httpbin.org/post" className="space-y-4" method="POST">
<input name="source" type="hidden" value="AeroTag Assist — Demo Request"/>
<div>
<label className="text-sm text-slate-700">Full Name</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" name="full_name" placeholder="Jane Doe" required="" type="text" />
</input></div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm text-slate-700">Hotel / Property</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" name="property" placeholder="Skyline Suites" required="" type="text"/>
</div>
<div>
<label className="text-sm text-slate-700">Work Email</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" name="email" placeholder="you@hotel.com" required="" type="email"/>
</div>
</div>
<div>
<label className="text-sm text-slate-700">Approx. Rooms</label>
<input className="mt-1 w-full h-10 rounded-md border border-slate-300 bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" min="1" name="rooms" placeholder="120" required="" type="number"/>
</div>
<div>
<label className="text-sm text-slate-700">Notes</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" name="notes" placeholder="Share goals or timelines…" rows="3"></textarea>
</div>
<div className="pt-2 flex items-center justify-between">
<div className="text-xs text-slate-500 flex items-center gap-2">
<i className="h-4 w-4" data-lucide="lock"></i>
                  Your details are protected.
                </div>
<button className="h-10 px-4 rounded-md border border-slate-300 bg-white hover:bg-slate-50 text-slate-900 text-sm" data-demo-close="" type="button">Cancel</button>
<button className="h-10 px-4 rounded-md bg-slate-900 hover:bg-slate-800 text-white text-sm" type="submit">Request Demo</button>
</div>
</form>
</div>
</div>
</div>
</div>





    </>
  );
}
