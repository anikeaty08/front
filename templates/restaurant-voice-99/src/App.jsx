import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons();
        const year = document.getElementById('year');
        if (year) year.textContent = new Date().getFullYear();
        const btn = document.getElementById('menuBtn');
        const nav = document.getElementById('mobileNav');
        if (btn && nav) {
          btn.addEventListener('click', () => {
            nav.classList.toggle('hidden');
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="px-4 sm:px-6 lg:px-8 py-4">
<div className="mx-auto max-w-7xl">
<div className="flex items-center justify-between gap-4">
<a className="inline-flex items-center gap-2" href="#">
<span className="relative inline-flex h-8 w-8 items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700 rounded-xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
<svg className="lucide lucide-sparkles h-4 w-4 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</span>
<span className="text-lg font-semibold tracking-tight">Customer Solutions</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-700 hover:text-slate-900" href="#how-it-works">How it works</a>
<a className="text-slate-700 hover:text-slate-900 inline-flex items-center gap-1" href="#opentable">OpenTable <span className="inline-flex items-center rounded-full bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[0.7rem] border border-emerald-100">Ready</span></a>
<a className="text-slate-700 hover:text-slate-900" href="#results">Results</a>
<a className="text-slate-700 hover:text-slate-900" href="#faq">FAQ</a>
<a className="text-slate-700 hover:text-slate-900" href="#docs">Docs</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden md:inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50" href="#demo">
              Book a demo
            </a>
<a className="hidden md:inline-flex items-center gap-2 ring-1 ring-black/5 hover:bg-black text-sm font-medium text-white bg-slate-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" href="#docs">
              Docs
            </a>
<button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm" id="menuBtn">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
<div className="md:hidden hidden mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm" id="mobileNav">
<div className="grid gap-2 text-sm">
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#how-it-works">How it works</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50 inline-flex items-center justify-between" href="#opentable">OpenTable <span className="text-[0.7rem] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">Ready</span></a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#results">Results</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#faq">FAQ</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-50" href="#docs" id="docs">Docs</a>
<a className="px-2 py-2 rounded-lg hover:bg-slate-900 hover:text-white inline-flex items-center gap-2 bg-slate-900 text-white mt-2" href="#demo">
              Book a demo
            </a>
</div>
</div>
</div>
</header>
<main className="px-4 sm:px-6 lg:px-8 pb-16">
<section className="max-w-7xl sm:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 shadow-sm">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Never miss another order
            </div>
<h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              Restaurant voice AI that never lets a call slip
            </h1>
<p className="mt-4 text-base leading-7 text-slate-600">
              Customer Solutions is the restaurant voice AI that handles every call, takes perfect orders, and stays on 24/7. Built to plug into OpenTable so your team can stay on the floor.
            </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3" id="demo">
<button className="button shadow-[rgba(50,_50,_93,_0.25)_0px_13px_27px_-5px,_rgba(0,_0,_0,_0.3)_0px_8px_16px_-8px]" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
    Book a demo
    <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
<style>
  .button {
    cursor: pointer;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.25s ease;
    background: radial-gradient(65.28% 65.28% at 50% 100%,
        rgba(34, 211, 238, 0.8) 0%,
        rgba(34, 211, 238, 0) 100%),
      linear-gradient(0deg, #2563eb, #2563eb);
    border-radius: 0.75rem;
    border: none;
    outline: none;
    padding: 12px 18px;
    min-height: 48px;
    min-width: 102px;
  }

  .button::before,
  .button::after {
    content: "";
    position: absolute;
    transition: all 0.5s ease-in-out;
    z-index: 0;
  }

  .button::before {
    inset: 1px;
    background: linear-gradient(177.95deg,
        rgba(255, 255, 255, 0.19) 0%,
        rgba(255, 255, 255, 0) 100%);
    border-radius: calc(0.75rem - 1px);
  }

  .button::after {
    inset: 2px;
    background: radial-gradient(65.28% 65.28% at 50% 100%,
        rgba(34, 211, 238, 0.8) 0%,
        rgba(34, 211, 238, 0) 100%),
      linear-gradient(0deg, #2563eb, #2563eb);
    border-radius: calc(0.75rem - 2px);
  }

  .button:active {
    transform: scale(0.95);
  }

  .points_wrapper {
    overflow: hidden;
    width: 100%;
    height: 100%;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  .points_wrapper .point {
    bottom: -10px;
    position: absolute;
    animation: floating-points infinite ease-in-out;
    pointer-events: none;
    width: 2px;
    height: 2px;
    background-color: #fff;
    border-radius: 9999px;
  }

  @keyframes floating-points {
    0% {
      transform: translateY(0);
    }

    85% {
      opacity: 0;
    }

    100% {
      transform: translateY(-55px);
      opacity: 0;
    }
  }

  .points_wrapper .point:nth-child(1) {
    left: 10%;
    opacity: 1;
    animation-duration: 2.35s;
    animation-delay: 0.2s;
  }

  .points_wrapper .point:nth-child(2) {
    left: 30%;
    opacity: 0.7;
    animation-duration: 2.5s;
    animation-delay: 0.5s;
  }

  .points_wrapper .point:nth-child(3) {
    left: 25%;
    opacity: 0.8;
    animation-duration: 2.2s;
    animation-delay: 0.1s;
  }

  .points_wrapper .point:nth-child(4) {
    left: 44%;
    opacity: 0.6;
    animation-duration: 2.05s;
  }

  .points_wrapper .point:nth-child(5) {
    left: 50%;
    opacity: 1;
    animation-duration: 1.9s;
  }

  .points_wrapper .point:nth-child(6) {
    left: 75%;
    opacity: 0.5;
    animation-duration: 1.5s;
    animation-delay: 1.5s;
  }

  .points_wrapper .point:nth-child(7) {
    left: 88%;
    opacity: 0.9;
    animation-duration: 2.2s;
    animation-delay: 0.2s;
  }

  .points_wrapper .point:nth-child(8) {
    left: 58%;
    opacity: 0.8;
    animation-duration: 2.25s;
    animation-delay: 0.2s;
  }

  .points_wrapper .point:nth-child(9) {
    left: 98%;
    opacity: 0.6;
    animation-duration: 2.6s;
    animation-delay: 0.1s;
  }

  .points_wrapper .point:nth-child(10) {
    left: 65%;
    opacity: 1;
    animation-duration: 2.5s;
    animation-delay: 0.2s;
  }

  .inner {
    z-index: 2;
    gap: 6px;
    position: relative;
    width: 100%;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    transition: color 0.2s ease-in-out;
  }

  .inner svg.icon {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
    stroke: white;
    fill: none;
  }

  .button:hover svg.icon {
    transform: translateX(2px);
  }

  .button:hover svg.icon path {
    animation: dash 0.8s linear forwards;
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 0, 20;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 10, 10;
      stroke-dashoffset: -5;
    }

    100% {
      stroke-dasharray: 20, 0;
      stroke-dashoffset: -10;
    }
  }
</style>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50" href="#hear-call">
                Hear Customer Solutions on a call
              </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6" id="results">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-slate-500">Service metrics</span>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">98.6%</div>
<p className="mt-1 text-xs text-slate-600">calls answered in under two rings</p>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">612</div>
<p className="mt-1 text-xs text-slate-600">reservations synced this month</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-slate-500">Caller satisfaction</span>
<div className="flex items-center gap-2">
<span className="text-2xl font-semibold tracking-tight text-slate-900">92%</span>
<span className="text-xs text-slate-600">rate the experience “excellent”</span>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2" id="how-it-works">
<div className="relative">
<div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-emerald-500/10 via-sky-500/10 to-amber-500/10 blur-2xl"></div>
<div className="relative grid grid-cols-2 gap-4 rounded-[24px] bg-slate-100/60 p-4">
<div className="grid gap-4">
<div className="rounded-2xl bg-white p-4 border border-slate-200">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 text-xs px-2 py-1 border border-emerald-100">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      Call in progress
                    </div>
<p className="mt-3 text-xs font-medium text-slate-900">Guest</p>
<p className="mt-1 text-xs text-slate-600">Hi, can you seat four at 7 tonight?</p>
<p className="mt-3 text-xs font-medium text-slate-900">Customer Solutions</p>
<p className="mt-1 text-xs text-slate-600">
                      We have 6:45 PM or 7:15 PM. I’ve locked 7:15 PM in OpenTable and noted the birthday dessert.
                    </p>
</div>
<div className="rounded-2xl bg-slate-900 text-white p-4">
<p className="text-xs font-medium text-slate-300">Logged automatically</p>
<p className="mt-2 text-xs">
                      Dunn party of 4 • 7:15 PM • High-top avoided • Birthday dessert.
                    </p>
<p className="mt-4 text-xs font-medium text-slate-300">Operations pulse</p>
<p className="mt-2 text-xs text-slate-100">
                      Waitlist auto-texts Taylor party of 5 with a 12 min quote. VIP pickup routed to the on-duty manager with transcript attached.
                    </p>
</div>
<div className="rounded-2xl bg-white p-4 border border-slate-200">
<p className="text-xs font-medium text-slate-900">OpenTable updated</p>
<p className="mt-2 text-xs text-slate-600">
                      Dunn party of 6 set for 7:15 PM. Close-of-shift digest drops every call summary in your inbox.
                    </p>
</div>
</div>
<div className="grid gap-4" id="opentable">
<div className="rounded-2xl bg-white p-4 border border-slate-200">
<div className="inline-flex items-center gap-2 text-xs text-slate-700">
<svg className="lucide lucide-phone-call h-4 w-4 text-emerald-600" data-lucide="phone-call" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 6A5 5 0 0 1 18 9.95"></path><path d="M14.05 2A9 9 0 0 1 22 9.95"></path><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
<span>Your restaurant phones, always answered.</span>
</div>
<p className="mt-3 text-xs text-slate-600">
                      Customer Solutions answers in two rings, quotes OpenTable availability, and loops a manager in only when guests truly need you.
                    </p>
</div>
<div className="rounded-2xl bg-slate-900 text-white p-4">
<p className="text-xs font-medium text-emerald-300">Tonight at a glance</p>
<ul className="mt-3 space-y-2 text-xs">
<li>5:45 PM • Lopez party of 2 confirmed by Customer Solutions.</li>
<li>6:10 PM • Taylor party of 5 waitlisted with 18 min quote.</li>
<li>7:00 PM • Dunn party of 4 reminder text delivered.</li>
</ul>
</div>
<div className="rounded-2xl bg-white p-4 border border-slate-200">
<p className="text-xs font-medium text-slate-900">Forward your main line. Launch in under one week.</p>
<p className="mt-2 text-xs text-slate-600">
                      Live OpenTable updates logged automatically. Handles menus, allergies, and catering like your best host. Escalates with transcripts so nothing slips.
                    </p>
<a className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 hover:text-emerald-800" href="#hear-call" id="hear-call">
                      See the OpenTable sync
                      <svg className="lucide lucide-arrow-right h-3 w-3" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl sm:p-10 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mt-12 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
      Customer Solutions for restaurants
    </div>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
        Phones handled. Guests seated.
      </h2>
<p className="text-sm text-slate-600 sm:max-w-md">
        Voice AI that speaks like your host, books through OpenTable, and keeps the dining room calm—so every guest gets an answer in seconds.
      </p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="flex items-center justify-between">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white">
<svg className="lucide lucide-phone-incoming h-5 w-5" data-lucide="phone-incoming" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 2 16 8 22 8"></polyline><line x1="22" x2="16" y1="2" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"></path></svg>
</div>
<span className="text-xs text-slate-500">98.6% pickup</span>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Every call, under two rings</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Unlimited concurrent calls with restaurant-trained AI. Never send guests to voicemail or lose a catering request to a busy shift.
      </p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-600 text-white">
<svg className="lucide lucide-calendar-check h-5 w-5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">OpenTable-ready bookings</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Quotes live OpenTable availability, locks reservations, and syncs notes—like birthdays, seating preferences, and allergies—automatically.
      </p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white">
<svg className="lucide lucide-utensils h-5 w-5" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 3v8"></path><path d="M8 3v8"></path><path d="M12 3v8"></path><path d="M3 11h10"></path><path d="M19 3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2"></path><path d="M19 3c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2"></path><path d="M19 21v-9"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Menus, allergies, and catering</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Answers menu questions, handles allergy calls, and takes catering details with the same care as your best host.
      </p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Transcripts you can act on</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Every call is logged with transcripts, notes, and outcomes. Escalations arrive with context so nothing slips through.
      </p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600 text-white">
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-3-3.87"></path><path d="M7 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="12" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M2 21v-2a4 4 0 0 1 3-3.87"></path><circle cx="19" cy="7" r="3"></circle><circle cx="5" cy="7" r="3"></circle></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Hosts stay on the floor</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Win back up to 37 hours of host time each week. Phones stop hijacking the stand, and your team stays with guests in the room.
      </p>
</div>
<div className="rounded-2xl border border-slate-200 p-5 bg-white hover:bg-slate-50 transition">
<div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-600 text-white">
<svg className="h-5 w-5" data-lucide="servers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="18" x="3" y="4"></rect><rect height="8" rx="2" width="18" x="3" y="12"></rect><path d="M7 8h.01"></path><path d="M7 16h.01"></path></svg>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-slate-900">Multi-location ready</h3>
<p className="mt-2 text-sm leading-6 text-slate-600">
        Handle multiple locations or concepts with one system. Route VIPs to managers and share call insights across the group.
      </p>
</div>
</div>
</section>

<section className="max-w-7xl sm:p-10 sm:mt-12 shadow-[0_10px_40px_rgba(15,23,42,0.08)] bg-white rounded-3xl mt-8 mr-auto ml-auto pt-6 pr-6 pb-6 pl-6">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-slate-900"></span>
      Results at a glance
    </div>
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Phones covered, service elevated</h2>
<p className="text-sm text-slate-600 sm:max-w-md">Forward your main line and launch inside a week. Customer Solutions keeps guests moving from call to seat without adding headcount.</p>
</div>
</div>
<div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Answer rate</h3>
<span className="text-xs text-slate-500">Service level</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">98.6%</span>
</div>
<p className="mt-3 text-sm text-slate-700">
        calls picked up in under two rings—no more missed reservations, voicemails, or overflow on busy nights.
      </p>
</div>

<div className="rounded-2xl border-2 border-emerald-500/60 bg-gradient-to-b from-emerald-50/40 to-white p-6 shadow-sm flex flex-col relative">
<span className="absolute -top-3 right-4 inline-flex items-center rounded-full bg-emerald-600 text-white text-[10px] font-medium px-2 py-1 shadow-sm">OpenTable sync</span>
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Reservations logged</h3>
<span className="text-xs text-slate-500">Last month</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">612</span>
</div>
<p className="mt-3 text-sm text-slate-700">
        OpenTable reservations synced automatically, complete with notes and call transcripts when guests need a human.
      </p>
<div className="mt-4 rounded-xl bg-slate-900 text-white text-xs px-3 py-2">
        “Phones stopped hijacking our host stand. We see every call, every day, without losing the room.”
      </div>
</div>

<div className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Host time won back</h3>
<span className="text-xs text-slate-500">Per week</span>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-slate-900">37 hrs</span>
</div>
<p className="mt-3 text-sm text-slate-700">
        your team stays on the floor while Customer Solutions handles reservations, waitlists, and phone orders.
      </p>
</div>
</div>
</section>

<section className="max-w-7xl sm:p-10 bg-white rounded-3xl mx-auto mt-8 sm:mt-12 shadow-[0_10px_40px_rgba(15,23,42,0.08)] p-6" id="faq">
<div className="flex flex-col gap-4">
<div className="inline-flex gap-2 text-xs text-slate-600 bg-slate-50 border-slate-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
      Frequently asked questions
    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">How Customer Solutions fits your floor</h2>
</div>
<div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">How does Customer Solutions compare to an answering service?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        Customer Solutions answers every call with restaurant-trained AI at a predictable monthly cost. You get unlimited concurrent calls, consistent hospitality, and transcripts you can act on—without the overhead of extra labor or third-party scripts.
      </p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">What can Customer Solutions handle on a call?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        Reservations, waitlists, basic menu questions, allergies, catering inquiries, and order capture. When a guest truly needs a human, we escalate with a transcript so your team has full context.
      </p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">Does it work with our OpenTable setup?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        Yes. Customer Solutions is built to plug into OpenTable. We sync availability, log reservations and notes, and keep your existing pacing and table settings intact.
      </p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">What do you need from us to go live?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        A quick walkthrough of your OpenTable settings, menu, and escalation preferences, plus call forwarding from your main line. Most restaurants launch in under one week.
      </p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">How does it handle multiple locations or concepts?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        We configure separate playbooks for each concept and route calls accordingly. Group-level reporting shows you volume, reservations, and call outcomes across the portfolio.
      </p>
</details>
<details className="group rounded-xl border border-slate-200 bg-white p-4 open:bg-slate-50">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-slate-900">What happens when a guest needs a human?</span>
<svg className="lucide lucide-chevron-down h-4 w-4 text-slate-500 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<p className="mt-3 text-sm text-slate-600">
        We escalate to your on-duty manager or host based on your rules, with a live handoff and transcript attached so your team can step in with full context.
      </p>
</details>
</div>
</section>

<section className="relative max-w-7xl mx-auto mt-8 sm:mt-12 overflow-hidden rounded-3xl">
<img alt="" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/12695d49-b1f6-4e12-afcb-9dab9c700176_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/70"></div>
<div className="relative p-6 sm:p-10">
<div className="inline-flex gap-2 text-xs text-white/80 bg-white/10 border border-white/20 rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm items-center w-fit">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
        Ready to cover every call?
      </div>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white">Keep guests on the line—and your team on the floor</h2>
<p className="mt-3 text-sm sm:text-base text-white/80">
        Customer Solutions pairs hospitality experts with voice AI that knows your menu, handles OpenTable updates, and captures clean orders—so guests get answers in seconds and your team stays on the floor.
      </p>
<p className="mt-3 text-sm sm:text-base text-white/70">
        Tell us about your guest traffic and we’ll craft a coverage plan the same day.
      </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-100" href="mailto:hello@customersolutions.ai">
          Book a working session
          <span className="text-xs text-slate-500">(Response time: under 24 hours)</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white hover:bg-white/20" href="mailto:hello@customersolutions.ai">
          Email us at hello@customersolutions.ai
        </a>
</div>
</div>
</section>
</main>
<footer className="px-4 sm:px-6 lg:px-8 pb-10">
<div className="mx-auto max-w-7xl">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
<p className="">© <span id="year">2025</span> Customer Solutions. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-700 inline-flex items-center gap-1" href="#docs">
<svg className="lucide lucide-shield h-4 w-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Privacy
            </a>
<a className="hover:text-slate-700 inline-flex items-center gap-1" href="#docs">
<svg className="lucide lucide-file-text h-4 w-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
              Terms
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
