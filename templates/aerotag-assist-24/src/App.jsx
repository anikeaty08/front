import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize lucide icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
      });

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Journey Switcher
      const switchOn = document.getElementById('switch-on');
      const switchOff = document.getElementById('switch-off');
      const journeyOn = document.getElementById('journey-on');
      const journeyOff = document.getElementById('journey-off');
      const previewOn = document.getElementById('preview-on');
      const previewOff = document.getElementById('preview-off');

      function setOnPremise() {
        journeyOn.classList.remove('hidden');
        previewOn.classList.remove('hidden');
        journeyOff.classList.add('hidden');
        previewOff.classList.add('hidden');

        switchOn.classList.add('bg-white', 'shadow-sm', 'border', 'border-neutral-200', 'text-neutral-900');
        switchOff.classList.remove('bg-white', 'shadow-sm', 'border', 'border-neutral-200', 'text-neutral-900');
        switchOff.classList.add('text-neutral-700');
      }

      function setOffPremise() {
        journeyOn.classList.add('hidden');
        previewOn.classList.add('hidden');
        journeyOff.classList.remove('hidden');
        previewOff.classList.remove('hidden');

        switchOff.classList.add('bg-white', 'shadow-sm', 'border', 'border-neutral-200', 'text-neutral-900');
        switchOn.classList.remove('bg-white', 'shadow-sm', 'border', 'border-neutral-200', 'text-neutral-900');
        switchOn.classList.add('text-neutral-700');
      }

      switchOn.addEventListener('click', setOnPremise);
      switchOff.addEventListener('click', setOffPremise);

      // Chart.js preview
      const ctx = document.getElementById('requestsChart');
      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
            datasets: [{
              label: 'Requests',
              data: [42, 58, 47, 63, 70, 55, 60],
              backgroundColor: 'rgba(23,23,23,0.85)',
              borderRadius: 6,
              borderSkipped: false
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: { display: false, beginAtZero: true },
              x: { grid: { display: false } }
            },
            plugins: {
              legend: { display: false },
              tooltip: { enabled: true, backgroundColor: 'rgba(23,23,23,0.95)', padding: 10, titleColor: '#fff', bodyColor: '#fff', displayColors: false }
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
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center tracking-tighter text-sm font-semibold group-hover:scale-95 transition">
              AA
            </div>
<div className="flex flex-col leading-none">
<span className="text-sm font-semibold tracking-tight">AeroTag Assist</span>
<span className="text-[11px] text-neutral-500">Geo-Fenced QR for Hotels</span>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#problem">Problem</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#solution">Solution</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#how">How It Works</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#features">Features</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#why">Why Choose</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center h-9 px-4 rounded-md border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition text-sm font-medium" href="#demo">
              See How It Works
            </a>
<a className="inline-flex items-center h-9 px-4 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium" href="#demo">
              Book a Demo
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-neutral-200/60 blur-3xl"></div>
<div className="absolute -bottom-32 -left-24 w-[520px] h-[520px] rounded-full bg-neutral-200/50 blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<p className="text-xs uppercase tracking-[0.14em] text-neutral-600 font-medium mb-3">Leading Geo-Fenced Hotel Room QR Communication System</p>
<h1 className="text-4xl sm:text-5xl tracking-tight font-semibold text-neutral-900">
              Smarter Guest Communication. Secure, Intuitive, Geo-Fenced.
            </h1>
<p className="mt-5 text-neutral-700 leading-relaxed">
              With AeroTag Assist, one QR code unlocks seamless in-room services for guests inside your hotel — and transforms into a powerful marketing tool when scanned outside. Unlike traditional QR systems, our geo-fenced solution protects your operations from post-checkout misuse while enhancing guest satisfaction.
            </p>
<div className="mt-7 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition font-medium" href="#demo">
                Book a Demo
              </a>
<a className="inline-flex items-center justify-center h-11 px-5 rounded-md border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition font-medium" href="#how">
                See How It Works
              </a>
</div>
<div className="mt-8 flex items-center gap-6 text-xs text-neutral-600">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="shield-check"></i>
<span>Privacy-first</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
<span>Geo-fenced</span>
</div>
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
<span>Auto-expiry</span>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[16/10] rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden">
<img alt="Modern hotel room with QR-enabled services" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-5 -right-5 bg-white border border-neutral-200 rounded-lg shadow-sm p-4 w-[280px]">
<div className="flex items-center gap-3 mb-2">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center text-xs font-semibold tracking-tight">AA</div>
<div>
<p className="text-sm font-medium">AeroTag Portal</p>
<p className="text-[11px] text-neutral-500">Live requests</p>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-700">Room Service</span>
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="check-circle"></i> Active
                  </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-700">Housekeeping</span>
<span className="inline-flex items-center gap-1 text-emerald-600">
<i className="w-4 h-4" data-lucide="check-circle"></i> Active
                  </span>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-700">Concierge</span>
<span className="inline-flex items-center gap-1 text-amber-600">
<i className="w-4 h-4" data-lucide="activity"></i> 2 new
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 border-t border-neutral-200 bg-white" id="problem">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-3xl tracking-tight font-semibold">The Risk No One Talks About in Hotel QR Systems</h2>
<p className="mt-4 text-neutral-700 leading-relaxed">
              Most hotels have adopted QR-based guest service systems, but there’s a serious flaw that often goes unnoticed. Once a guest scans the QR, they can save the link or photo of the code. Even after checkout, they can still access the service page — and place requests to rooms they no longer occupy.
            </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-red-500 mt-0.5" data-lucide="x-octagon"></i>
<span className="text-neutral-800">Wrong orders being sent to rooms.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-orange-500 mt-0.5" data-lucide="hourglass"></i>
<span className="text-neutral-800">Wasted staff time chasing invalid requests.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-amber-600 mt-0.5" data-lucide="shield-alert"></i>
<span className="text-neutral-800">Risk of spam or malicious misuse.</span>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-yellow-600 mt-0.5" data-lucide="alert-triangle"></i>
<span className="text-neutral-800">Confusion and poor experiences for staff and future guests.</span>
</li>
</ul>
<p className="mt-6 text-neutral-700">
              Hotels expect convenience, but instead, they inherit an operational and security problem.
            </p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-600 text-sm">
<i className="w-4 h-4" data-lucide="alert-octagon"></i>
              Real-world scenario
            </div>
<div className="mt-4 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-sm font-medium text-neutral-900">During Stay</p>
<p className="text-sm text-neutral-600 mt-2">QR works, requests are valid, staff responds quickly.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<p className="text-sm font-medium text-neutral-900">After Checkout</p>
<p className="text-sm text-neutral-600 mt-2">Saved link still works in legacy systems — causing misuse.</p>
</div>
</div>
<div className="mt-5 p-4 rounded-lg border border-red-200 bg-red-50">
<div className="flex items-center gap-2 text-red-700 text-sm">
<i className="w-4 h-4" data-lucide="ban"></i>
                Legacy QR is not context-aware.
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white" id="solution">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold">One QR. Two Journeys. Zero Misuse.</h2>
<p className="mt-4 text-neutral-700 max-w-3xl">
          AeroTag Assist eliminates these flaws with geo-fenced access and time-limited control. Our intelligent QR system ensures guests only get the right services, at the right time, in the right place.
        </p>

<div className="mt-8">
<div className="inline-flex p-1 rounded-lg border border-neutral-200 bg-neutral-100">
<button className="journey-tab inline-flex items-center gap-2 px-4 h-10 rounded-md text-sm font-medium text-neutral-900 bg-white shadow-sm border border-neutral-200" id="switch-on">
<i className="w-4 h-4" data-lucide="building-2"></i>
              On-Premise Access
            </button>
<button className="journey-tab inline-flex items-center gap-2 px-4 h-10 rounded-md text-sm font-medium text-neutral-700 hover:text-neutral-900" id="switch-off">
<i className="w-4 h-4" data-lucide="megaphone"></i>
              Off-Premise Access
            </button>
</div>
</div>

<div className="mt-8 grid lg:grid-cols-2 gap-8">

<div className="journey-panel" id="journey-on">
<div className="rounded-xl border border-neutral-200 bg-white p-6 h-full">
<div className="flex items-center gap-2 text-neutral-600 text-sm">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                Inside the hotel
              </div>
<h3 className="mt-3 text-2xl tracking-tight font-semibold">Guest Services Portal</h3>
<p className="mt-2 text-neutral-700">
                Guests scan and instantly see the Guest Services Portal with options for room service, housekeeping, spa, concierge, and more.
              </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="concierge-bell"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Room Service &amp; Housekeeping</p>
<p className="text-neutral-600 text-sm">Curated menus, cleaning requests, linen swaps, maintenance tickets.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="sparkles"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Spa &amp; Concierge</p>
<p className="text-neutral-600 text-sm">Book treatments, tours, transfers, dining reservations.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="lock"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Context-Aware Access</p>
<p className="text-neutral-600 text-sm">Only works on-premise with active stay; expires on checkout.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="journey-panel hidden" id="journey-off">
<div className="rounded-xl border border-neutral-200 bg-white p-6 h-full">
<div className="flex items-center gap-2 text-neutral-600 text-sm">
<i className="w-4 h-4" data-lucide="navigation"></i>
                Outside the hotel
              </div>
<h3 className="mt-3 text-2xl tracking-tight font-semibold">Marketing &amp; Promotional Page</h3>
<p className="mt-2 text-neutral-700">
                If scanned outside or via a saved photo, guests see your brand, offers, loyalty, and booking links — never internal services.
              </p>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="ticket"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Offers &amp; Loyalty</p>
<p className="text-neutral-600 text-sm">Exclusive packages, member rates, signup prompts.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="link"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Booking Engine Redirect</p>
<p className="text-neutral-600 text-sm">Drive direct bookings with clear calls to action.</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-800 mt-0.5" data-lucide="eye-off"></i>
<div>
<p className="text-neutral-900 text-sm font-medium">Privacy-First Design</p>
<p className="text-neutral-600 text-sm">No room identity or guest details are ever exposed.</p>
</div>
</li>
</ul>
</div>
</div>

<div className="journey-preview transition" id="preview-on">
<div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
<div className="mx-auto w-full max-w-sm">
<div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-3">
<div className="rounded-[22px] bg-white border border-neutral-200 overflow-hidden">
<div className="h-10 bg-neutral-100/70 flex items-center justify-center text-[11px] text-neutral-500">AeroTag — Guest Services</div>
<div className="p-4 space-y-3">
<div className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition">
<i className="w-5 h-5" data-lucide="utensils"></i>
<div className="text-sm">
<p className="font-medium text-neutral-900">Room Service</p>
<p className="text-neutral-600">Browse menu, track delivery</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition">
<i className="w-5 h-5" data-lucide="broom"></i>
<div className="text-sm">
<p className="font-medium text-neutral-900">Housekeeping</p>
<p className="text-neutral-600">Cleaning, linens, amenities</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<div className="text-sm">
<p className="font-medium text-neutral-900">Spa</p>
<p className="text-neutral-600">Book treatments</p>
</div>
</div>
<div className="flex items-center gap-3 p-3 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition">
<i className="w-5 h-5" data-lucide="map"></i>
<div className="text-sm">
<p className="font-medium text-neutral-900">Concierge</p>
<p className="text-neutral-600">Tours, transfers, dining</p>
</div>
</div>
<button className="w-full mt-2 h-9 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">Submit Request</button>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-3">Works only inside hotel premises with active stay.</p>
</div>
</div>
</div>

<div className="journey-preview hidden transition" id="preview-off">
<div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
<div className="mx-auto w-full max-w-sm">
<div className="rounded-[28px] border border-neutral-200 bg-neutral-50 p-3">
<div className="rounded-[22px] bg-white border border-neutral-200 overflow-hidden">
<div className="h-10 bg-neutral-100/70 flex items-center justify-center text-[11px] text-neutral-500">AeroTag — Marketing</div>
<div className="relative">
<img alt="Hotel lobby marketing background" className="h-28 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
</div>
<div className="p-4 space-y-3">
<div className="text-center">
<p className="text-xs uppercase tracking-[0.12em] text-neutral-600">Welcome Back</p>
<h4 className="text-lg font-semibold tracking-tight">Exclusive Member Offers</h4>
<p className="text-sm text-neutral-600 mt-1">Unlock loyalty perks and best direct rates.</p>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="border border-neutral-200 rounded-lg p-3 hover:bg-neutral-50 transition">
<p className="text-xs text-neutral-600">Save</p>
<p className="text-sm font-medium text-neutral-900">15% Direct</p>
</div>
<div className="border border-neutral-200 rounded-lg p-3 hover:bg-neutral-50 transition">
<p className="text-xs text-neutral-600">Perk</p>
<p className="text-sm font-medium text-neutral-900">Late Checkout</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 h-9 rounded-md bg-neutral-900 text-white text-sm font-medium hover:bg-neutral-800 transition">Book Now</button>
<button className="flex-1 h-9 rounded-md border border-neutral-300 text-neutral-900 text-sm font-medium hover:bg-neutral-100 transition">Join Loyalty</button>
</div>
<p className="text-center text-[11px] text-neutral-600">No access to in-stay services outside the property.</p>
</div>
</div>
</div>
<p className="text-center text-xs text-neutral-600 mt-3">Outside scans become marketing opportunities.</p>
</div>
</div>
</div>
</div>

<div className="mt-10 grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4" data-lucide="clock"></i>
<span className="text-sm font-medium">Automatic Expiry</span>
</div>
<p className="mt-2 text-sm text-neutral-700">When a guest checks out, access expires — preventing misuse.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4" data-lucide="shield"></i>
<span className="text-sm font-medium">Privacy-First Design</span>
</div>
<p className="mt-2 text-sm text-neutral-700">No guest details or room identity are ever exposed outside the property.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200 bg-white" id="how">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold">Simple for Guests. Smart for Hotels.</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center">
<span className="text-sm font-semibold">1</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Scan</h3>
<p className="text-neutral-700 text-sm mt-1">Guests scan the AeroTag QR code placed in their room or anywhere within the hotel.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center">
<span className="text-sm font-semibold">2</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Geo-Intelligent Redirect</h3>
<p className="text-neutral-700 text-sm mt-1">Inside: Room &amp; Services Portal. Outside: Marketing &amp; Promotions.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="w-10 h-10 rounded-md bg-neutral-900 text-white flex items-center justify-center">
<span className="text-sm font-semibold">3</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight">Secure Access</h3>
<p className="text-neutral-700 text-sm mt-1">Once the guest checks out, access automatically expires — ensuring only the current guest can use the system.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold">Powerful Features for a Modern Hotel Experience</h2>
<div className="mt-8 grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="map-pin"></i> Geo-Fenced Access
            </div>
<p className="text-sm text-neutral-700 mt-2">QR works only within hotel premises.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="clock"></i> Auto Expiry on Checkout
            </div>
<p className="text-sm text-neutral-700 mt-2">No misuse after a guest’s stay ends.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="git-branch"></i> Dual-Purpose Redirects
            </div>
<p className="text-sm text-neutral-700 mt-2">Services for guests, marketing for outsiders.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="concierge-bell"></i> Complete Guest Services Portal
            </div>
<p className="text-sm text-neutral-700 mt-2">Room service, housekeeping, maintenance, spa, concierge, and more.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i> Hotel Dashboard
            </div>
<p className="text-sm text-neutral-700 mt-2">Manage and track requests in real time.</p>

<div className="mt-4 rounded-lg border border-neutral-200 bg-white p-3">
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-600">Requests (Week)</div>
<div className="text-[11px] text-emerald-600 inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="trending-up"></i> +12%
                </div>
</div>
<div className="mt-2">
<div className="h-28">
<div className="h-full">
<canvas id="requestsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="shield"></i> Data Security
            </div>
<p className="text-sm text-neutral-700 mt-2">Guest privacy is always protected.</p>
<div className="mt-3 flex items-center gap-3 text-xs text-neutral-600">
<i className="w-4 h-4" data-lucide="lock"></i> Context-aware access • Tokenized sessions
            </div>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 lg:col-span-3">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="paintbrush"></i> Custom Branding
            </div>
<p className="text-sm text-neutral-700 mt-2">Tailored to match your hotel’s look and feel.</p>
</div>
</div>
</div>
</section>

<section className="py-16 border-t border-neutral-200 bg-white" id="why">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl tracking-tight font-semibold">The Smarter Choice for Hotels That Value Security and Service</h2>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="smile"></i> Increase Guest Satisfaction
            </div>
<p className="text-sm text-neutral-700 mt-2">Guests get instant access to all services without downloading an app.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="timer"></i> Boost Staff Efficiency
            </div>
<p className="text-sm text-neutral-700 mt-2">Only valid, in-stay requests reach your team.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="megaphone"></i> Unlock Marketing Potential
            </div>
<p className="text-sm text-neutral-700 mt-2">Every offsite scan becomes a chance to promote your hotel and capture bookings.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="shield-off"></i> Protect Operations
            </div>
<p className="text-sm text-neutral-700 mt-2">Prevent misuse of old links or saved QR codes after checkout.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-6">
<div className="flex items-center gap-2 text-neutral-700 text-sm">
<i className="w-4 h-4" data-lucide="credit-card"></i> Drive More Direct Revenue
            </div>
<p className="text-sm text-neutral-700 mt-2">Redirect offsite scans to booking engines and exclusive offers.</p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-neutral-50 border-t border-neutral-200">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-200 bg-white p-8 md:p-10">
<div className="grid md:grid-cols-3 gap-8 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl tracking-tight font-semibold">Ready to Upgrade Your Guest Experience and Protect Your Hotel?</h3>
<p className="mt-2 text-neutral-700">
                AeroTag Assist is the only geo-fenced, misuse-proof QR communication system for hotels. Enhance guest services, safeguard your operations, and turn every scan into an opportunity.
              </p>
</div>
<div className="flex md:justify-end items-center gap-3">
<a className="inline-flex items-center h-11 px-5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition font-medium" href="#demo">Book a Demo</a>
<a className="inline-flex items-center h-11 px-5 rounded-md border border-neutral-300 text-neutral-900 hover:bg-neutral-100 transition font-medium" href="#demo">Talk to Our Team</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white" id="demo">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 md:p-8">
<div className="flex items-center gap-2 text-neutral-700">
<i className="w-4 h-4" data-lucide="calendar"></i>
<span className="text-sm font-medium">Book a Demo</span>
</div>
<form className="mt-5 grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-1">
<label className="block text-sm text-neutral-700 mb-1">Full Name</label>
<input className="w-full h-10 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm bg-white" placeholder="Jane Doe" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm text-neutral-700 mb-1">Work Email</label>
<input className="w-full h-10 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm bg-white" placeholder="jane@hotelgroup.com" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm text-neutral-700 mb-1">Hotel / Group</label>
<input className="w-full h-10 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm bg-white" placeholder="AeroStay Hotels" type="text"/>
</div>
<div className="sm:col-span-1">
<label className="block text-sm text-neutral-700 mb-1">Country</label>
<input className="w-full h-10 px-3 rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm bg-white" placeholder="United States" type="text"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-neutral-700 mb-1">Notes</label>
<textarea className="w-full h-24 px-3 py-2 rounded-md border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-900/10 focus:border-neutral-400 text-sm bg-white" placeholder="Tell us about your property and goals..."></textarea>
</div>
<div className="sm:col-span-2 flex items-center justify-between">
<div className="text-xs text-neutral-600">By submitting, you agree to be contacted about AeroTag Assist.</div>
<button className="inline-flex items-center h-10 px-5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition text-sm font-medium" type="button">Request Demo</button>
</div>
</form>
</div>
</div>
</section>

<footer className="py-10 border-t border-neutral-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white flex items-center justify-center tracking-tighter text-sm font-semibold">AA</div>
<div>
<p className="text-sm font-semibold tracking-tight">AeroTag Assist</p>
<p className="text-xs text-neutral-600">Smarter, secure QR for hotels</p>
</div>
</div>
<div className="flex gap-6 text-sm">
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#solution">Solution</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#features">Features</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#why">Why Choose</a>
<a className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-4" href="#demo">Book a Demo</a>
</div>
</div>
<div className="mt-6 text-xs text-neutral-600">© <span id="year"></span> AeroTag Assist. All rights reserved.</div>
</div>
</footer>


    </>
  );
}
