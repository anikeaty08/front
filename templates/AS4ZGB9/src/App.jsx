import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Mobile menu toggle
      document.getElementById('menuBtn').addEventListener('click', () => {
        const menu = document.getElementById('mobileMenu');
        menu.classList.toggle('hidden');
      });

      // FAQ accordion
      document.addEventListener('DOMContentLoaded', () => {
        // Initialize open states
        document.querySelectorAll('#faq [data-accordion-item]').forEach(item => {
          const open = item.hasAttribute('data-open');
          const btn = item.querySelector('[data-accordion="faq"]');
          const a = item.querySelector('[data-qa="a"]');
          const plus = item.querySelector('[data-icon="plus"]');
          const minus = item.querySelector('[data-icon="minus"]');
          btn.setAttribute('aria-expanded', open ? 'true' : 'false');
          a.classList.toggle('hidden', !open);
          if (plus) plus.classList.toggle('hidden', open);
          if (minus) minus.classList.toggle('hidden', !open);
        });

        // Toggle behavior
        document.querySelectorAll('#faq [data-accordion="faq"]').forEach(btn => {
          btn.addEventListener('click', () => {
            const item = btn.closest('[data-accordion-item]');
            const content = item.querySelector('[data-qa="a"]');
            const plus = item.querySelector('[data-icon="plus"]');
            const minus = item.querySelector('[data-icon="minus"]');
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            content.classList.toggle('hidden');
            if (plus) plus.classList.toggle('hidden');
            if (minus) minus.classList.toggle('hidden');
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="relative">
<div className="max-w-7xl sm:px-6 lg:px-8 fixed top-4 z-50 left-1/2 transform -translate-x-1/2 w-full px-4">
<div className="flex shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-white border-white/20 border rounded-[28px] pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg items-center justify-between">
<a aria-label="Lala" className="inline-flex items-center justify-center h-[40px] w-[120px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37623fdd-ceb4-464d-a301-ff8b1166efc4_800w.jpg)] bg-cover rounded invert" href="#"></a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="font-medium text-black/80 hover:text-black font-geist" href="#">Services</a>
<a className="font-medium text-black/80 hover:text-black font-geist" href="#">Pricing</a>
<a className="font-medium text-black/80 hover:text-black font-geist" href="#">About</a>
<a className="font-medium text-black/80 hover:text-black font-geist" href="#">Contact</a>
</nav>
<div className="hidden md:flex gap-3 items-center">
<a className="text-sm font-medium text-black/80 hover:text-black font-geist" href="#">Customer Login</a>
<a className="inline-flex items-center gap-2 hover:bg-black/90 text-sm font-medium text-neutral-100 font-geist bg-black rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book now
            </a>
</div>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 bg-black/10 ring-black/15" id="menuBtn">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>

<div className="hidden md:hidden" id="mobileMenu">
<div className="mt-2 space-y-1 rounded-[24px] border p-2 border-white/20 bg-white shadow-sm">
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/5 hover:text-black font-geist" href="#">Services</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/5 hover:text-black font-geist" href="#">Pricing</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/5 hover:text-black font-geist" href="#">About</a>
<a className="block rounded-lg px-3 py-2 text-sm font-medium text-black/80 hover:bg-black/5 hover:text-black font-geist" href="#">Contact</a>
<div className="flex items-center gap-2 px-3 pt-2">
<a className="text-sm font-medium text-black/80 hover:text-black font-geist" href="#">Customer Login</a>
<a className="ml-auto inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium bg-black text-neutral-100 hover:bg-black/90 font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book now
              </a>
</div>
</div>
</div>
</div>
</header>

<section className="relative mt-40 mb-8">
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid gap-10 md:grid-cols-2 md:items-center pr-40 pl-40">
<div className="pt-2 pb-2">
<h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl tracking-tight font-geist font-semibold">
        Your space, spotless
      </h1>
<p className="mt-4 text-base sm:text-lg text-black/70 font-geist">
        Professional cleaning services for homes and offices. Eco‑friendly products, flexible scheduling, and a 100% satisfaction guarantee.
      </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 hover:bg-black/90 text-sm font-medium text-neutral-100 font-geist bg-black rounded-xl pt-3 pr-5 pb-3 pl-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
          Schedule cleaning
        </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium border bg-gray-100 text-black hover:bg-gray-200 border-white/20 font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
          Get quote
        </a>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-2xl border p-4 border-white/20 bg-white shadow-sm">
<div className="flex items-center gap-2 text-sm font-medium font-geist">
<span className="inline-flex h-6 w-6 items-center justify-center text-[#000000]/50 font-geist bg-slate-50/15 ring-slate-950/10 ring-1 rounded-md">01</span>
            Book online
          </div>
<p className="mt-2 text-xs text-black/60 font-geist">Schedule in 60 seconds with our easy booking system.</p>
</div>
<div className="rounded-2xl border p-4 border-white/20 bg-white shadow-sm">
<div className="flex gap-2 text-sm font-medium font-geist items-center">
<span className="inline-flex h-6 w-6 items-center justify-center text-[#000000]/50 font-geist bg-slate-50/15 ring-slate-950/10 ring-1 rounded-md">02</span>
            We clean
          </div>
<p className="mt-2 text-xs text-black/60 font-geist">Licensed, insured team arrives with supplies.</p>
</div>
<div className="rounded-2xl border p-4 border-white/20 bg-white shadow-sm">
<div className="flex items-center gap-2 text-sm font-medium font-geist">
<span className="inline-flex h-6 w-6 items-center justify-center text-[#000000]/50 font-geist bg-slate-50/15 ring-slate-950/10 ring-1 rounded-md">03</span>
            You relax
          </div>
<p className="mt-2 text-xs text-black/60 font-geist">Come home to a sparkling clean space.</p>
</div>
</div>
</div>
<div className="relative">
<div className="relative overflow-hidden bg-white rounded-3xl shadow-sm">
<img alt="Clean modern kitchen" className="h-80 w-full sm:h-[28rem] object-cover" src="https://cdn.midjourney.com/750da74f-ec69-4676-b50f-066f0d7a01a0/0_0.png?w=800&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
<div className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs backdrop-blur border bg-white/70 text-black/80 border-white/30 font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
            Deep cleaned to perfection
          </div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full max-w-7xl mt-6 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Trusted by leading cleaning professionals</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6 mt-6">
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/1040d3ec-8da2-47f6-b134-1341261ccfb9_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ca43984b-3298-41bb-871b-d113545c657c_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/33a31345-28f8-4702-985f-4c087c82987d_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/07ee863a-59fe-4785-a806-5592f2439df2_320w.jpg)] bg-cover rounded invert" href="#"></a><a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/62da197c-b71a-4478-9ce5-ded8ced2b11b_320w.jpg)] bg-cover rounded invert" href="#"></a>
<a className="inline-flex items-center justify-center h-[40px] w-[150px] bg-center mix-blend-multiply bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3347b589-6a0c-4520-a84f-11a867a72d7f_320w.jpg)] bg-cover rounded invert" href="#"></a>
</div>
</div><section className="relative mt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="grid gap-6 md:grid-cols-3">
<div className="bg-white border-slate-300/30 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-geist">Residential cleaning</h3>
<span className="inline-flex h-9 w-9 items-center justify-center bg-gray-100 border border-white/20 rounded-lg">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</span>
</div>
<p className="mt-2 text-sm text-black/70 font-geist">Regular house cleaning, deep cleans, move-in/out, and post-construction cleanup.</p>
<div className="mt-4 overflow-hidden rounded-2xl border border-white/20">
<img alt="Clean living room" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/af70531f-9d5c-45cf-bde3-36bb8794d771_800w.jpg"/>
</div>
</div>
<div className="bg-white border-slate-300/30 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-geist">Office cleaning</h3>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 border-white/20">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M12 6h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M16 6h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path><path d="M8 6h.01"></path><path d="M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</span>
</div>
<p className="mt-2 text-sm text-black/70 font-geist">Daily, weekly, or monthly office cleaning. Restrooms, break rooms, and workspaces.</p>
<div className="mt-4 overflow-hidden rounded-2xl border border-white/20">
<img alt="Clean modern office" className="h-40 w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b4b8e26d-1669-40cf-95e9-42917b568b73_800w.jpg"/>
</div>
</div>
<div className="bg-white border-slate-300/30 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight font-geist">Eco-friendly</h3>
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 border-white/20">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</span>
</div>
<p className="mt-2 text-sm text-black/70 font-geist">Safe for kids and pets. Green certified products and sustainable cleaning practices.</p>
<div className="mt-4 overflow-hidden rounded-2xl border border-white/20">
<img alt="Eco cleaning supplies" className="h-40 w-full object-cover" src="https://cdn.midjourney.com/e5ab5b80-3fa7-487d-aa14-f1eb951755c7/0_0.png"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:mt-20 mt-8 mb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

<div className="md:col-span-5">
<h2 className="text-5xl sm:text-6xl lg:text-7xl leading-none font-semibold text-gray-900 tracking-tight font-geist">
                  Questions.</h2>
<p className="mt-3 text-sm sm:text-base text-gray-600 font-geist">
                  Find answers to common questions about our cleaning services and booking process.
                </p>
<a className="mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium tracking-tight text-gray-700 bg-gray-100 hover:bg-gray-200 border border-white/20 font-geist" href="#contact">
<span className="">Get in touch</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>

<div className="md:col-span-7">
<div className="space-y-3">

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="" data-open="true">
<button aria-expanded="true" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">How do I book a cleaning service?</span>
<span className="shrink-0">
<svg className="w-5 h-5 hidden" data-icon="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-[20px] h-[20px]" data-icon="minus" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist" data-qa="a">
                      Simply click "Book now" and fill out our quick form with your location, service type, and preferred date. You'll receive confirmation within minutes with all the details.
                    </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">What cleaning products do you use?</span>
<span className="shrink-0">
<svg className="w-5 h-5" data-icon="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 hidden" data-icon="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                      We use eco-friendly, green-certified cleaning products that are safe for children and pets. All supplies and equipment are included in our service at no extra cost.
                    </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">Are your cleaners insured and bonded?</span>
<span className="shrink-0">
<svg className="w-5 h-5" data-icon="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 hidden" data-icon="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                      Yes, all our cleaning professionals are fully licensed, insured, and bonded. We conduct thorough background checks and provide ongoing training to ensure quality service.
                    </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">Can I schedule recurring cleanings?</span>
<span className="shrink-0">
<svg className="w-5 h-5" data-icon="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 hidden" data-icon="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                      Absolutely! We offer weekly, bi-weekly, or monthly recurring services at discounted rates. You can modify or pause your schedule anytime through our customer portal.
                    </div>
</div>

<div className="rounded-2xl border border-white/20 bg-white shadow-sm" data-accordion-item="">
<button aria-expanded="false" className="w-full flex items-center justify-between gap-4 p-5 text-left" data-accordion="faq" type="button">
<span className="text-base sm:text-lg font-semibold tracking-tight text-gray-900 font-geist">What if I'm not satisfied with the cleaning?</span>
<span className="shrink-0">
<svg className="w-5 h-5" data-icon="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="w-5 h-5 hidden" data-icon="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</span>
</button>
<div className="px-5 pb-5 text-sm text-gray-600 font-geist hidden" data-qa="a">
                      We offer a 100% satisfaction guarantee. If you're not completely happy with our service, we'll return within 24 hours to make it right at no additional charge.
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid gap-8 lg:grid-cols-3">
<div className="lg:col-span-2 bg-white rounded-2xl pt-8 pr-8 pb-8 pl-8">
<h2 className="text-3xl tracking-tight font-geist font-semibold">Simple booking process</h2>
<p className="mt-2 text-sm text-black/70 font-geist">Get your space cleaned in three easy steps.</p>
<div className="mt-6 grid gap-4 md:grid-cols-2">
<div className="border-stone/20 bg-white border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center gap-2 text-sm font-medium font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Choose your location
                    </div>
<p className="mt-2 text-xs text-black/60 font-geist">Enter your address and select the type of cleaning you need.</p>
</div>
<div className="border-stone/20 bg-white border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-sm">
<div className="flex items-center gap-2 text-sm font-medium font-geist">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                      Pick your time
                    </div>
<p className="mt-2 text-xs text-black/60 font-geist">Schedule for any day of the week, including same-day availability.</p>
</div>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 hover:bg-black/90 text-sm font-medium text-neutral-100 font-geist bg-black rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    Book service
                  </a>
</div>
</div>
<div className="bg-white border-white/70 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<div className="overflow-hidden rounded-2xl border border-white/20">
<img alt="Professional cleaner at work" className="h-72 w-full object-cover" src="https://cdn.midjourney.com/5f71bd40-b9ea-4b80-9677-7c668df314f2/0_0.png"/>
</div>
<div className="bg-white border-white/20 border rounded-2xl mt-4 pt-4 pr-4 pb-4 pl-4">
<h4 className="text-base font-semibold tracking-tight font-geist">Professional equipment</h4>
<p className="mt-1 text-sm text-black/70 font-geist">We bring all supplies and equipment—from HEPA vacuums to microfiber cloths.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative mt-20 mb-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[40px] border border-white/20 bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-8">
<div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
<div className="sm:p-8 bg-white border-slate-950/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<p className="text-xl font-semibold tracking-tight text-black font-geist">
                  "Lala has been a game-changer for our family. Our house stays consistently clean, and the team is so reliable."
                </p>
<div className="mt-4 flex items-center gap-3">
<img alt="Happy customer" className="h-10 w-10 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f22e2d52-709a-41a5-a3c8-a608fbb46dea_320w.jpg"/>
<div className="">
<div className="text-sm font-medium font-geist">Sarah M.</div>
<div className="text-xs text-black/60 font-geist">Regular customer for 2 years</div>
</div>
</div>
</div>
<div className="sm:p-8 bg-white border-slate-950/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-xl font-semibold tracking-tight font-geist">Ready to get started?</h3>
<p className="mt-2 text-sm text-black/70 font-geist">Book your first cleaning today and see why thousands trust Lala with their homes.</p>
<div className="mt-4 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 hover:bg-black/90 text-sm font-medium text-neutral-100 font-geist bg-black rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                    Schedule now
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium border bg-gray-100 text-black hover:bg-gray-200 border-white/20 font-geist" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    Call us
                  </a>
</div>
</div>
</div>
</div>
</div>
</div>
</section><footer className="relative mt-10 mb-8">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="relative">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="relative sm:p-8 pt-6 pr-6 pb-6 pl-6">
<div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">

<div className="lg:col-span-1">
<a aria-label="Lala" className="inline-flex items-center justify-center h-[40px] w-[120px] bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/37623fdd-ceb4-464d-a301-ff8b1166efc4_800w.jpg)] bg-cover rounded mix-blend-multiply invert" href="#"></a>
<p className="mt-4 text-sm text-black/70 font-geist">
              Professional cleaning services for homes and offices. Trusted by thousands of customers.
            </p>
<div className="mt-6 flex gap-4">
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772"></path></svg>
</a>
<a className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-gray-100 text-black/60 hover:text-black border-white/20" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-black tracking-tight font-geist">Services</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Residential Cleaning</a></li>
<li><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Office Cleaning</a></li>
<li><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Deep Cleaning</a></li>
<li><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Move-in/Move-out</a></li>
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Post-Construction</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-black tracking-tight font-geist">Company</h3>
<ul className="mt-4 space-y-3">
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">About Us</a></li>
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Careers</a></li>
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Service Areas</a></li>
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Reviews</a></li>
<li className=""><a className="text-sm text-black/70 hover:text-black font-geist" href="#">Blog</a></li>
</ul>
</div>

<div className="">
<h3 className="text-sm font-semibold text-black tracking-tight font-geist">Contact</h3>
<ul className="mt-4 space-y-3">
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-black/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
<span className="text-sm text-black/70 font-geist">(555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<svg className="h-4 w-4 text-black/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-10 5L2 7"></path></svg>
<span className="text-sm text-black/70 font-geist">hello@lala.com</span>
</li>
<li className="flex items-start gap-3">
<svg className="h-4 w-4 text-black/60 mt-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-sm text-black/70 font-geist">123 Main StreetSan Francisco, CA 94102</span>
</li>
</ul>
<div className="mt-6">
<a className="inline-flex items-center gap-2 hover:bg-black/90 text-sm font-medium text-neutral-100 font-geist bg-black rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Book now
              </a>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-black/10">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<p className="text-sm text-black/60 font-geist">
              © 2024 Lala Cleaning Services. All rights reserved.
            </p>
<div className="flex flex-wrap gap-6">
<a className="text-sm text-black/60 hover:text-black font-geist" href="#">Privacy Policy</a>
<a className="text-sm text-black/60 hover:text-black font-geist" href="#">Terms of Service</a>
<a className="text-sm text-black/60 hover:text-black font-geist" href="#">Cookie Policy</a>
</div>
</div>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
