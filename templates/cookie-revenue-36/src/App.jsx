import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<style>
      :root {
        /* Brand palette injected with minimal change to structure */
        --crc-obsidian: #020617;
        --crc-imperial: #020617;
        --crc-frost: #f9fafb;
        --crc-archgray: #9ca3af;
        --crc-executive: #f97316;
      }

      /* Map existing custom color names to new brand colors via overrides */
      .bg-obsidian {
        background-color: var(--crc-obsidian) !important;
      }
      .bg-imperial {
        background-color: var(--crc-imperial) !important;
      }
      .bg-frost {
        background-color: var(--crc-frost) !important;
      }
      .bg-archgray {
        background-color: var(--crc-archgray) !important;
      }
      .bg-executive {
        background-color: var(--crc-executive) !important;
      }

      .text-frost {
        color: var(--crc-frost) !important;
      }
      .text-frost\/80 {
        color: rgba(249, 250, 251, 0.8) !important;
      }
      .text-frost\/70 {
        color: rgba(249, 250, 251, 0.7) !important;
      }
      .text-archgray {
        color: var(--crc-archgray) !important;
      }
      .text-executive {
        color: var(--crc-executive) !important;
      }

      .border-executive\/70 {
        border-color: rgba(249, 115, 22, 0.7) !important;
      }
      .border-executive\/60 {
        border-color: rgba(249, 115, 22, 0.6) !important;
      }
      .border-executive\/40 {
        border-color: rgba(249, 115, 22, 0.4) !important;
      }
      .bg-executive\/10 {
        background-color: rgba(249, 115, 22, 0.1) !important;
      }
      .bg-executive\/20 {
        background-color: rgba(249, 115, 22, 0.2) !important;
      }
      .bg-executive\/40 {
        background-color: rgba(249, 115, 22, 0.4) !important;
      }
      .bg-executive\/50 {
        background-color: rgba(249, 115, 22, 0.5) !important;
      }
      .bg-executive\/60 {
        background-color: rgba(249, 115, 22, 0.6) !important;
      }
      .bg-executive\/70 {
        background-color: rgba(249, 115, 22, 0.7) !important;
      }
      .bg-executive\/80 {
        background-color: rgba(249, 115, 22, 0.8) !important;
      }
      .bg-executive\/90 {
        background-color: rgba(249, 115, 22, 0.9) !important;
      }

      .text-obsidian {
        color: var(--crc-obsidian) !important;
      }
    </style>
<div className="min-h-screen flex flex-col" id="app">

<header className="fixed top-0 inset-x-0 z-40 border-b bg-imperial/80 backdrop-blur border-white/5">
<div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 lg:px-0">
<button className="flex items-center gap-2 group" onclick="navigateTo('home')">
<div className="w-9 h-9 rounded-full bg-gradient-to-br from-executive/80 to-executive/40 flex items-center justify-center text-xs font-semibold tracking-tight text-obsidian border border-executive/70 shadow-md">
              CRC
            </div>
<div className="text-left">
<div className="text-sm font-medium tracking-tight">Cookie Revenue Co.</div>
<div className="text-xs text-archgray">Where Cookie Brands Become Businesses.</div>
</div>
</button>
<nav className="hidden md:flex items-center gap-8 text-xs font-medium text-frost/80">
<button className="nav-link" onclick="navigateTo('home')">Home</button>
<button className="nav-link" onclick="navigateTo('how')">How It Works</button>
<button className="nav-link" onclick="navigateTo('brands')">For Cookie Brands</button>
<button className="nav-link" onclick="navigateTo('about')">About</button>
<button className="nav-link" onclick="navigateTo('faq')">FAQ</button>
<button className="ml-4 inline-flex items-center gap-2 rounded-full border border-executive/70 bg-executive/10 px-4 py-1.5 text-xs font-medium text-executive hover:bg-executive/20 transition" onclick="navigateTo('apply')">
              Apply
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</nav>
<div className="md:hidden flex items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-full border border-executive/70 bg-executive/10 px-3 py-1.5 text-xs font-medium text-executive hover:bg-executive/20 transition" onclick="navigateTo('apply')">
              Apply
            </button>
<button className="text-frost/80 hover:text-frost" onclick="toggleMobileNav()">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<line strokeLinecap="round" x1="4" x2="20" y1="7" y2="7"></line>
<line strokeLinecap="round" x1="4" x2="20" y1="12" y2="12"></line>
<line strokeLinecap="round" x1="4" x2="20" y1="17" y2="17"></line>
</svg>
</button>
</div>
</div>
<div className="md:hidden border-t bg-imperial hidden border-white/5" id="mobileNav">
<div className="px-4 py-3 flex flex-col gap-2 text-xs text-frost/80">
<button className="text-left py-1" onclick="navigateTo('home');toggleMobileNav()">Home</button>
<button className="text-left py-1" onclick="navigateTo('how');toggleMobileNav()">How It Works</button>
<button className="text-left py-1" onclick="navigateTo('brands');toggleMobileNav()">For Cookie Brands</button>
<button className="text-left py-1" onclick="navigateTo('about');toggleMobileNav()">About</button>
<button className="text-left py-1" onclick="navigateTo('faq');toggleMobileNav()">FAQ</button>
<button className="text-left py-1 text-executive" onclick="navigateTo('apply');toggleMobileNav()">Apply</button>
</div>
</div>
</header>

<main className="flex-1 pt-20">

<section className="page-section" id="page-home">

<section className="relative overflow-hidden bg-gradient-to-b from-obsidian via-imperial to-imperial">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 right-0 w-[40rem] h-[40rem] rounded-full bg-executive/10 blur-3xl"></div>
<div className="absolute bottom-[-8rem] left-[-5rem] w-[30rem] h-[30rem] rounded-full bg-executive/5 blur-3xl"></div>
</div>
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-24 relative">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-executive/40 bg-executive/10 px-3 py-1 text-xs text-executive">
<span className="h-1.5 w-1.5 rounded-full bg-executive"></span>
                    Performance-based growth partner for cookie brands
                  </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-frost">
                    Where Cookie Brands Become Businesses.
                  </h1>
<p className="text-sm sm:text-base text-frost/80 max-w-xl">
                    Cookie Revenue Co. partners with premium cookie brands on a pure performance model. We design the revenue engine, own the growth stack, and participate only when you get paid.
                  </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-executive px-6 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                      Apply to Work With Us
                      <svg className="w-3.5 h-3.5 ml-2" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="inline-flex items-center gap-2 text-xs text-frost/80 hover:text-frost transition" onclick="scrollToSection('home-how-it-works')">
                      See How It Works
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5V19M12 19L7 14M12 19L17 14" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="flex flex-wrap gap-6 pt-4 border-t mt-4 border-white/5">
<div>
<div className="text-xs text-archgray uppercase tracking-[0.08em]">Model</div>
<div className="text-sm text-frost">Performance-only, revenue share.</div>
</div>
<div>
<div className="text-xs text-archgray uppercase tracking-[0.08em]">Focus</div>
<div className="text-sm text-frost">Orders, AOV, repeat customers, drops.</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-executive/20 via-transparent to-executive/10 blur-2xl"></div>
<div className="relative rounded-3xl border bg-gradient-to-b from-obsidian/80 to-imperial/90 p-6 shadow-2xl space-y-6 border-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full border border-executive/60 bg-executive/10 flex items-center justify-center text-xs font-semibold tracking-tight text-executive">
                          CRC
                        </div>
<div>
<div className="text-xs text-archgray uppercase">Partner View</div>
<div className="text-sm font-medium text-frost">Revenue Console</div>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-archgray">
<span>Live</span>
<span className="h-1.5 w-1.5 rounded-full bg-executive"></span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="rounded-2xl border bg-obsidian/60 p-3 border-white/5">
<div className="text-xs text-archgray">Projected Monthly Revenue</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-frost">$184,000</div>
<div className="mt-1 flex items-center gap-2 text-xs text-executive">
<span className="inline-flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15L12 8L19 15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                            +38% MoM
                          </span>
</div>
</div>
<div className="rounded-2xl border bg-obsidian/60 p-3 border-white/5">
<div className="text-xs text-archgray">Revenue Per Drop</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-frost">$52,400</div>
<div className="mt-1 text-xs text-frost/70">Across 3 curated releases</div>
</div>
</div>
<div className="rounded-2xl border bg-obsidian/60 p-4 border-white/5">
<div className="flex items-center justify-between">
<div className="text-xs text-archgray">Growth Focus</div>
<div className="flex items-center gap-2 text-xs text-frost/70">
<span>Orders</span>
<span className="h-1 w-1 rounded-full bg-archgray"></span>
<span>AOV</span>
<span className="h-1 w-1 rounded-full bg-archgray"></span>
<span>Retention</span>
</div>
</div>
<div className="mt-3 grid grid-cols-4 gap-2 items-end h-24">
<div className="relative group">
<div className="h-full rounded-full bg-executive/15 border border-executive/30 flex items-end">
<div className="w-full rounded-full bg-executive/70" style={{height: '40%'}}></div>
</div>
<div className="mt-1 text-[0.65rem] text-archgray text-center">Q1</div>
</div>
<div className="relative group">
<div className="h-full rounded-full bg-executive/15 border border-executive/30 flex items-end">
<div className="w-full rounded-full bg-executive/80" style={{height: '60%'}}></div>
</div>
<div className="mt-1 text-[0.65rem] text-archgray text-center">Q2</div>
</div>
<div className="relative group">
<div className="h-full rounded-full bg-executive/15 border border-executive/30 flex items-end">
<div className="w-full rounded-full bg-executive" style={{height: '80%'}}></div>
</div>
<div className="mt-1 text-[0.65rem] text-archgray text-center">Q3</div>
</div>
<div className="relative group">
<div className="h-full rounded-full bg-executive/15 border border-executive/30 flex items-end">
<div className="w-full rounded-full bg-executive/90" style={{height: '95%'}}></div>
</div>
<div className="mt-1 text-[0.65rem] text-archgray text-center">Q4</div>
</div>
</div>
</div>
<div className="flex items-center justify-between text-xs text-archgray">
<div>Performance Based • No Retainers • Revenue-First</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-executive/70"></span>
<span>Brand-safe scaling</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t bg-imperial border-white/5">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-sm font-medium text-frost">
                Performance-Only. Revenue-First. Brand-Safe.
              </div>
<div className="grid grid-cols-2 md:flex gap-4 text-xs text-frost/80">
<div className="flex items-center gap-2">
<span>Performance Model</span>
</div>
<div className="flex items-center gap-2"></div>
<div className="flex items-center gap-2"></div>
<div className="flex items-center gap-2"></div>
</div>
</div>
</section>

<section className="bg-imperial py-16" id="home-who">
<div className="max-w-6xl mx-auto px-4 lg:px-0">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-frost">Who We Work With</h2>
<p className="mt-2 text-sm text-frost/80 max-w-md">
                    We partner with ambitious cookie operators who are ready to leave the hobby tier and build a real, durable business.
                  </p>
</div>
<p className="text-xs text-archgray max-w-sm">
                  We are intentionally selective. If your product is exceptional and your operations are real, we can architect the revenue engine around it.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="group rounded-3xl border bg-gradient-to-b from-obsidian/50 to-imperial/60 p-6 hover:border-executive/60 hover:-translate-y-1 transition border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Profile 01</div>
<span className="h-1.5 w-6 rounded-full bg-executive/60"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-frost mb-2">Home bakers turning into real businesses</h3>
<p className="text-sm text-frost/80">
                    You are already selling out drops from your kitchen or shared space. Demand is real, but systems, pricing, and marketing are not.
                  </p>
</div>
<div className="group rounded-3xl border bg-gradient-to-b from-obsidian/50 to-imperial/60 p-6 hover:border-executive/60 hover:-translate-y-1 transition border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Profile 02</div>
<span className="h-1.5 w-6 rounded-full bg-executive/60"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-frost mb-2">Small cookie brands with real demand</h3>
<p className="text-sm text-frost/80">
                    You’ve proven product-market fit. Social proofs are strong, but revenue is inconsistent and not engineered for scale.
                  </p>
</div>
<div className="group rounded-3xl border bg-gradient-to-b from-obsidian/50 to-imperial/60 p-6 hover:border-executive/60 hover:-translate-y-1 transition border-white/5">
<div className="flex items-center justify-between mb-4">
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Profile 03</div>
<span className="h-1.5 w-6 rounded-full bg-executive/60"></span>
</div>
<h3 className="text-base font-semibold tracking-tight text-frost mb-2">Boutique shops with premium product</h3>
<p className="text-sm text-frost/80">
                    You run a physical or hybrid concept. Your cookies are premium, but your digital growth engine doesn’t match the quality of your product.
                  </p>
</div>
</div>
</div>
</section>

<section className="bg-obsidian py-16" id="home-how-it-works">
<div className="max-w-6xl mx-auto px-4 lg:px-0">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-frost">The Cookie Revenue Model</h2>
<p className="mt-2 text-sm text-frost/80 max-w-md">
                    A structured, performance-based partnership designed to turn cookie brands into durable revenue machines.
                  </p>
</div>
<button className="inline-flex items-center gap-2 text-xs text-executive hover:text-executive/80 transition" onclick="navigateTo('how')">
                  Deep dive into the model
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="relative overflow-hidden rounded-3xl border bg-gradient-to-r from-imperial/80 via-obsidian/90 to-imperial/80 p-6 md:p-8 border-white/5">
<div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-executive/40 via-executive/10 to-transparent opacity-40 pointer-events-none"></div>
<div className="grid md:grid-cols-4 gap-6 md:gap-4 items-start">

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full border border-executive/60 bg-executive/10 flex items-center justify-center text-xs text-executive font-medium">1</div>
<span className="text-xs text-archgray uppercase tracking-[0.12em]">Audit</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-frost">
                      We study your brand and set profitable pricing.
                    </h3>
<p className="text-sm text-frost/80">
                      We audit product economics, capacity, and demand to design pricing and offers that support scale without eroding brand equity.
                    </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full border border-executive/60 bg-executive/10 flex items-center justify-center text-xs text-executive font-medium">2</div>
<span className="text-xs text-archgray uppercase tracking-[0.12em]">Engine</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-frost">
                      We build and control your funnel, offers, and ads.
                    </h3>
<p className="text-sm text-frost/80">
                      Full-funnel architecture across paid, owned, and lifecycle channels. You focus on product; we own the revenue stack.
                    </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full border border-executive/60 bg-executive/10 flex items-center justify-center text-xs text-executive font-medium">3</div>
<span className="text-xs text-archgray uppercase tracking-[0.12em]">Checkout</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-frost">
                      Customers pay through our system.
                    </h3>
<p className="text-sm text-frost/80">
                      We route demand through controlled checkouts for precise tracking, optimization, and transparent reporting.
                    </p>
</div>

<div className="flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="w-7 h-7 rounded-full border border-executive/60 bg-executive/10 flex items-center justify-center text-xs text-executive font-medium">4</div>
<span className="text-xs text-archgray uppercase tracking-[0.12em]">Share</span>
</div>
<h3 className="text-sm font-semibold tracking-tight text-frost">
                      We split the revenue: you bake, we scale.
                    </h3>
<p className="text-sm text-frost/80">
                      Payouts and performance are tied. No retainers, no vanity metrics — only shared upside driven by real revenue.
                    </p>
</div>
</div>
<div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-archgray border-t pt-4 border-white/5">
<div className="flex items-center gap-3">
<div className="h-px w-10 bg-executive/50"></div>
<span>From first audit to live revenue in as little as 30–45 days.</span>
</div>
<button className="inline-flex items-center gap-2 text-xs text-executive hover:text-executive/80 transition" onclick="navigateTo('apply')">
                    Explore a revenue partnership
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="bg-imperial py-16">
<div className="max-w-6xl mx-auto px-4 lg:px-0">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-frost">Outcomes We Focus On</h2>
<p className="mt-2 text-sm text-frost/80 max-w-md">
                    Every decision is anchored in measurable, bottom-line impact — not impressions or likes.
                  </p>
</div>
<p className="text-xs text-archgray max-w-sm">
                  Numbers below are illustrative only — your dashboard will be fully custom to your brand, drops, and revenue goals.
                </p>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="rounded-3xl border bg-obsidian/70 p-5 flex flex-col justify-between border-white/5">
<div>
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Monthly Orders</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-frost">4,280</div>
<div className="mt-1 text-xs text-executive flex items-center">
<svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 15L12 8L19 15" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
                      +182% vs baseline
                    </div>
</div>
<div className="mt-4 h-16 flex items-end gap-1">
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive/60 rounded-full" style={{height: '35%'}}></div>
</div>
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive/70 rounded-full" style={{height: '55%'}}></div>
</div>
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive rounded-full" style={{height: '80%'}}></div>
</div>
</div>
</div>
<div className="rounded-3xl border bg-obsidian/70 p-5 flex flex-col justify-between border-white/5">
<div>
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Average Order Value</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-frost">$82.40</div>
<div className="mt-1 text-xs text-executive">+3.4x vs prior</div>
</div>
<div className="mt-4 relative h-16">
<div className="absolute inset-0 flex items-center justify-between text-[0.65rem] text-archgray">
<span>Baseline</span>
<span>Engineered</span>
</div>
<div className="absolute left-0 right-0 bottom-2 h-2 rounded-full bg-executive/20 overflow-hidden">
<div className="h-full w-[30%] bg-executive/50"></div>
</div>
<div className="absolute left-0 right-0 bottom-2 h-2 rounded-full border border-executive/40"></div>
<div className="absolute left-0 bottom-2 h-2 rounded-full bg-executive" style={{width: '70%'}}></div>
</div>
</div>
<div className="rounded-3xl border bg-obsidian/70 p-5 flex flex-col justify-between border-white/5">
<div>
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Repeat Customers</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-frost">63%</div>
<div className="mt-1 text-xs text-frost/70">Within 90 days of first order</div>
</div>
<div className="mt-4 flex flex-col gap-1 text-[0.65rem] text-archgray">
<div className="flex items-center justify-between">
<span>Lifecycle flows</span>
<span className="w-24 h-1 rounded-full bg-executive/40"></span>
</div>
<div className="flex items-center justify-between">
<span>Winback automations</span>
<span className="w-16 h-1 rounded-full bg-executive/20"></span>
</div>
<div className="flex items-center justify-between">
<span>VIP programs</span>
<span className="w-20 h-1 rounded-full bg-executive/30"></span>
</div>
</div>
</div>
<div className="rounded-3xl border bg-obsidian/70 p-5 flex flex-col justify-between border-white/5">
<div>
<div className="text-xs text-archgray uppercase tracking-[0.12em]">Revenue Per Drop</div>
<div className="mt-2 text-lg font-semibold tracking-tight text-frost">$52,400</div>
<div className="mt-1 text-xs text-frost/70">Engineered scarcity &amp; launch calendars</div>
</div>
<div className="mt-4">
<div className="flex items-end gap-1 h-16">
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive/60 rounded-full" style={{height: '45%'}}></div>
</div>
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive/70 rounded-full" style={{height: '65%'}}></div>
</div>
<div className="flex-1 bg-executive/20 rounded-full">
<div className="w-full bg-executive rounded-full" style={{height: '100%'}}></div>
</div>
</div>
<div className="mt-2 flex justify-between text-[0.65rem] text-archgray">
<span>Drop 1</span><span>Drop 2</span><span>Drop 3</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-obsidian py-16">
<div className="max-w-6xl mx-auto px-4 lg:px-0">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-frost">Signals Of What We Ship</h2>
<p className="mt-2 text-sm text-frost/80 max-w-md">
                    We’ll plug in real case studies here. For now, these placeholders reflect the type of outcomes we engineer.
                  </p>
</div>
<div className="font-serif text-sm text-frost/70 italic max-w-sm">
                  “Our entire mandate is simple: build revenue systems so strong that the cookies can barely keep up.”
                </div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="rounded-3xl border bg-imperial/70 p-6 border-white/5">
<div className="text-xs text-archgray uppercase tracking-[0.12em] mb-2">Case Snapshot</div>
<div className="text-lg font-semibold tracking-tight text-frost mb-2">+180% orders in 60 days</div>
<p className="text-sm text-frost/80">
                    Scaling from “sold out weekends” to a predictable, weekly order cadence without burning out the kitchen.
                  </p>
</div>
<div className="rounded-3xl border bg-imperial/70 p-6 border-white/5">
<div className="text-xs text-archgray uppercase tracking-[0.12em] mb-2">Case Snapshot</div>
<div className="text-lg font-semibold tracking-tight text-frost mb-2">3.4x increase in AOV</div>
<p className="text-sm text-frost/80">
                    Strategic bundles, gifting, and subscription design lifted transaction value while keeping brand positioning elevated.
                  </p>
</div>
<div className="rounded-3xl border bg-imperial/70 p-6 border-white/5">
<div className="text-xs text-archgray uppercase tracking-[0.12em] mb-2">Case Snapshot</div>
<div className="text-lg font-semibold tracking-tight text-frost mb-2">Fully booked for 6 straight months</div>
<p className="text-sm text-frost/80">
                    Launch calendars, waitlists, and controlled scarcity turned a local favorite into a nationwide cult brand.
                  </p>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-imperial via-obsidian to-imperial border-y border-white/5">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-frost">
                  We don’t charge retainers. We don’t sell “likes.” We grow revenue.
                </h3>
<p className="mt-2 text-sm text-frost/80 max-w-xl">
                  If your cookies are exceptional and you’re ready to scale responsibly, we should talk.
                </p>
</div>
<button className="inline-flex items-center justify-center rounded-full bg-executive px-7 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                Apply for a Growth Partnership
              </button>
</div>
</section>
</section>

<section className="page-section hidden" id="page-how">
<section className="bg-obsidian py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0">
<div className="mb-10">
<h1 className="text-3xl font-semibold tracking-tight text-frost">How the Revenue Partnership Works</h1>
<p className="mt-3 text-sm text-frost/80 max-w-xl">
                  Cookie Revenue Co. is a performance-based growth partner. We only win when you win — which means our incentives are aligned with your revenue, not our billable hours.
                </p>
</div>
<div className="space-y-8">
<stepblock label="Selection" number="01" title="We Select the Right Brands">
                  We work with a small portfolio of partners at any given time. Minimum quality, pricing, and capacity standards ensure we can scale without compromising brand integrity or guest experience.
                </stepblock>
<stepblock label="Offers" number="02" title="We Rebuild Your Offers">
                  We re-architect what you sell: bundles, gift boxes, corporate gifting, subscriptions, and limited drops. Every SKU is redesigned around margin, positioning, and repeatability.
                </stepblock>
<stepblock label="Engine" number="03" title="We Own the Growth Engine">
                  We design and operate the entire growth stack: acquisition, funnels, landing pages, email/SMS, retention, and analytics. You focus on craft; we focus on cashflow.
                </stepblock>
<stepblock label="Payouts" number="04" title="You Get Paid Out">
                  Revenue flows through our controlled checkout. Weekly payouts and transparent reporting keep every number visible — from first click to final cookie shipped.
                </stepblock>
</div>
</div>
</section>

<section className="bg-imperial py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0">
<h2 className="text-2xl font-semibold tracking-tight text-frost mb-6">Money Flow Diagram</h2>
<div className="rounded-3xl border bg-gradient-to-r from-obsidian/90 via-imperial/90 to-obsidian/90 p-6 md:p-8 border-white/5">
<div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">

</div>
<div className="mt-6 text-xs text-archgray">
                  You never pre-fund large ad tests or multi-month retainers. Spend scales in lockstep with performance, governed by agreed guardrails.
                </div>
</div>
</div>
</section>

<section className="bg-obsidian py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-frost">Partnership Details</h2>
<p className="mt-2 text-sm text-frost/80 max-w-md">
                    A few of the questions serious founders ask before they plug us into their business.
                  </p>
</div>
<button className="inline-flex items-center gap-2 text-xs text-executive hover:text-executive/80 transition" onclick="navigateTo('faq')">
                  View full FAQ
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
<div className="space-y-4">

</div>
</div>
</section>

<section className="bg-imperial py-12 border-t border-white/5">
<div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-frost">Ready to see if your brand qualifies?</h3>
<p className="mt-2 text-sm text-frost/80 max-w-xl">
                  We review every application manually and prioritize brands with exceptional product, real demand, and operational readiness.
                </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-executive px-7 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                See If Your Brand Qualifies
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12H19M12 5L19 12L12 19" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>
</section>
</section>

<section className="page-section hidden" id="page-brands">
<section className="bg-obsidian py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0">
<div className="mb-10 space-y-3">
<h1 className="text-3xl font-semibold tracking-tight text-frost">For Cookie Brands</h1>
<p className="text-sm text-frost/80 max-w-xl">
                  This is written for the founder who is tired of being “the local favorite” and ready to build a real, premium cookie business — without becoming a full-time marketer.
                </p>
</div>

<div className="mb-12">
<h2 className="text-xl font-semibold tracking-tight text-frost mb-4">This Is for You If…</h2>
<div className="grid md:grid-cols-3 gap-6">
<brandcard title="You’re constantly sold out but not truly profitable" />
                    Demand is wild, but by the time ingredients, labor, and packaging hit, there’s not much left. You’re working too hard for too little.
                  </brandcard>
<brandcard title="You know you’re undercharging for what you make" />
                    Your cookies belong in the premium tier, but your pricing and offers scream “side hustle.” You’re ready to align price with product.
                  </brandcard>
<brandcard title="You’re done DIY-ing your marketing" />
                    You’ve tried boosting posts, random influencers, and cobbled-together funnels. You want a proven engine, not experiments.
                  </brandcard>
</div>
</div>

<div className="mb-12 grid md:grid-cols-2 gap-10">
<div>
<h2 className="text-xl font-semibold tracking-tight text-frost mb-4">What We Do For You</h2>
<ul className="space-y-3 text-sm text-frost/80">
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-executive/80"></span>
<span><span className="text-frost">Pricing strategy &amp; offer design</span> — engineered around margin, positioning, and repeat orders.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-executive/80"></span>
<span><span className="text-frost">Full funnel builds</span> — landing pages, launch calendars, waitlists, and drop mechanics.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-executive/80"></span>
<span><span className="text-frost">Paid social &amp; retention</span> — acquisition plus email/SMS that quietly compound your LTV.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-executive/80"></span>
<span><span className="text-frost">Creative direction &amp; content systems</span> — what to shoot, how to launch, and how to make every post sell.</span>
</li>
</ul>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-frost mb-4">What You Don’t Have to Worry About</h2>
<ul className="space-y-3 text-sm text-frost/80">
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-archgray/90"></span>
<span>No managing ad accounts or dashboards. We run the growth stack.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-archgray/90"></span>
<span>No figuring out funnels alone. We architect and operate them.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-archgray/90"></span>
<span>No retainers, hourly fees, or bloated “strategy decks” that never ship.</span>
</li>
<li className="flex gap-2">
<span className="mt-1 h-1 w-4 rounded-full bg-archgray/90"></span>
<span>No chasing vanity metrics. If it doesn’t move revenue, it doesn’t matter.</span>
</li>
</ul>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-semibold tracking-tight text-frost mb-4">How We Compare</h2>
<div className="overflow-hidden rounded-3xl border bg-imperial/80 border-white/5">
<div className="grid grid-cols-3 text-xs text-archgray border-b border-white/5">
<div className="py-3 px-4"></div>
<div className="py-3 px-4 font-medium text-frost">Traditional Agency</div>
<div className="py-3 px-4 font-medium text-executive">Cookie Revenue Co.</div>
</div>
</div>
</div>

<div className="mb-12">
<h2 className="text-xl font-semibold tracking-tight text-frost mb-4">Future Case Studies</h2>
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-3xl border bg-imperial/70 p-6 border-white/5">
<div className="text-xs text-archgray uppercase tracking-[0.12em] mb-2">Founder Interview</div>
<p className="text-sm text-frost/80 mb-3">
                      “We went from juggling DMs and spreadsheets to a real revenue console. For the first time, we know exactly which drops, bundles, and campaigns are driving profit.”
                    </p>
<div className="text-xs text-archgray">Placeholder • Premium cookie brand, US</div>
</div>
<div className="rounded-3xl border bg-imperial/70 p-6 border-white/5">
<div className="text-xs text-archgray uppercase tracking-[0.12em] mb-2">Metrics Snapshot</div>
<ul className="space-y-2 text-sm text-frost/80">
<li>• Orders up 210% in the first 90 days.</li>
<li>• AOV lifted from $24 to $71 via engineered bundles.</li>
<li>• Consistent sellout drops without operational chaos.</li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-frost/80 max-w-md">
                  If this sounds like where you want your brand to be — booked out, profitable, and calm — the next step is a short application.
                </p>
<button className="inline-flex items-center gap-2 rounded-full bg-executive px-7 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                  Start Your Application
                </button>
</div>
</div>
</section>
</section>

<section className="page-section hidden" id="page-about">
<section className="bg-obsidian py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0 space-y-10">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-frost mb-3">About Cookie Revenue Co.</h1>
<p className="text-sm text-frost/80 max-w-xl">
                  Cookie Revenue Co. exists for a simple reason: too many incredible cookie brands stay small — not because their product isn’t world-class, but because they never build a serious growth engine around it.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-10">
<div>
<h2 className="text-xl font-semibold tracking-tight text-frost mb-3">Our Philosophy</h2>
<ul className="space-y-3 text-sm text-frost/80">
<li><span className="text-frost">Revenue First.</span> Everything we do is measured against net revenue and profit, not noise.</li>
<li><span className="text-frost">Aligned Incentives.</span> If your brand doesn’t win, neither do we. Our upside is tied to yours.</li>
<li><span className="text-frost">Limited Partners Only.</span> We work with a small, curated portfolio so each partner gets institutional-level focus.</li>
</ul>
</div>
<div>
<h2 className="text-xl font-semibold tracking-tight text-frost mb-3">What We Believe</h2>
<div className="space-y-3 text-sm text-frost/80">
<p>“Creators should focus on craft.” Your job is to make the best cookies in the category — not to live inside ad dashboards.</p>
<p>“Agencies should be paid on performance.” If the work doesn’t drive revenue, it shouldn’t be rewarded.</p>
<p>“Premium brands deserve premium growth engines.” Your marketing should feel as considered and elevated as your product.</p>
</div>
</div>
</div>

<div className="pt-4 border-t border-white/5">
<h2 className="text-xl font-semibold tracking-tight text-frost mb-6">Leadership</h2>
<div className="grid md:grid-cols-3 gap-6">
<leadercard role="Founder / Growth Architect"></leadercard>
<leadercard role="Head of Performance"></leadercard>
<leadercard role="Partner Success Lead"></leadercard>
</div>
</div>
</div>
</section>
<section className="bg-imperial py-12 border-t border-white/5">
<div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-serif text-sm text-frost/80 italic max-w-xl">
                “Our promise is simple: if we partner, your growth engine will be as meticulously crafted as your cookies.”
              </div>
<button className="inline-flex items-center gap-2 rounded-full bg-executive px-7 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                Apply to Work With Cookie Revenue Co.
              </button>
</div>
</section>
</section>

<section className="page-section hidden" id="page-faq">
<section className="bg-obsidian py-16">
<div className="max-w-5xl mx-auto px-4 lg:px-0">
<div className="mb-10">
<h1 className="text-3xl font-semibold tracking-tight text-frost mb-3">Frequently Asked Questions</h1>
<p className="text-sm text-frost/80 max-w-xl">
                  If you’re the kind of founder we work with, you ask sharp questions. Below are answers to the most common ones — with room for deeper discussion once you apply.
                </p>
</div>
<div className="space-y-4">
<faqitem question="Do you work with new brands?">
                  We do, provided the product quality is exceptional and you can demonstrate real demand — even if it’s currently informal (DM orders, pop-ups, etc.). We care more about product-market fit than follower count.
                </faqitem>
<faqitem question="What if my prices are low right now?">
                  That’s common. Part of our work is recalibrating pricing and offer structure so your brand can support real marketing and operational scale without eroding margins.
                </faqitem>
<faqitem question="Do you help outside cookies?">
                  Our core specialization is premium cookie brands. We occasionally consider adjacent baked goods with similar economics, but cookies are our focus.
                </faqitem>
<faqitem question="What does ‘performance-based’ really mean?">
                  It means our compensation is tied directly to the revenue we help generate. No bloated retainers, no billing for “strategy decks.” If the engine doesn’t produce revenue, we don’t get paid.
                </faqitem>
<faqitem question="Is there a minimum revenue required?">
                  We typically look for brands doing at least a consistent baseline of monthly orders with the capacity to fulfill significantly more. If you’re earlier, you can still apply and we’ll tell you clearly where you stand.
                </faqitem>
<faqitem question="Who handles operations and production?">
                  You do. We don’t run kitchens or manage staff. Our mandate is demand, revenue, and system design — yours is product, quality, and guest experience.
                </faqitem>
<faqitem question="Who owns the customer data?">
                  You do. While we control checkout and analytics for performance reasons, your brand owns the underlying customer relationships and data.
                </faqitem>
<faqitem question="Do you guarantee results?">
                  No serious partner can. What we do guarantee is a fully-aligned model: we only invest resources where we believe we can win, and we only win when you do.
                </faqitem>
<faqitem question="How long is the partnership?">
                  We generally structure partnerships with an initial term to build and stabilize the engine, followed by ongoing collaboration as long as the relationship remains materially beneficial to both sides.
                </faqitem>
<faqitem question="What happens after I apply?">
                  We review your application manually. If there’s a potential fit, we’ll schedule a call to dive into product, operations, and goals before proposing a structure.
                </faqitem>
</div>
</div>
</section>
<section className="bg-imperial py-12 border-t border-white/5">
<div className="max-w-5xl mx-auto px-4 lg:px-0 flex flex-col md:flex-row items-center justify-between gap-6">
<div>
<h3 className="text-xl font-semibold tracking-tight text-frost">Still have questions?</h3>
<p className="mt-2 text-sm text-frost/80 max-w-xl">
                  The fastest way to get clear, specific answers is to apply. We respond directly to serious brands.
                </p>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-executive px-7 py-2 text-xs font-medium text-obsidian hover:bg-executive/90 transition" onclick="navigateTo('apply')">
                Apply for a Revenue Partnership
              </button>
</div>
</section>
</section>

<section className="page-section hidden" id="page-apply">
<section className="bg-obsidian py-16">
<div className="max-w-3xl mx-auto px-4 lg:px-0">
<div className="mb-8">
<h1 className="text-3xl font-semibold tracking-tight text-frost mb-3">Apply to Work With Cookie Revenue Co.</h1>
<p className="text-sm text-frost/80 max-w-xl">
                  We partner with a limited number of cookie brands who are serious about scale. This application helps us understand if there’s a strong, mutual fit.
                </p>
</div>

<div className="mb-8">
<div className="flex items-center justify-between text-xs text-archgray mb-2">
<span id="apply-step-label">Step 1 of 4</span>
<span id="apply-step-name">Brand Basics</span>
</div>
<div className="h-1.5 rounded-full bg-obsidian/70 overflow-hidden border border-white/5">
<div className="h-full rounded-full bg-executive/80" id="apply-progress-bar" style={{width: '25%'}}></div>
</div>
</div>

<form className="space-y-8" id="apply-form" onsubmit="handleApplySubmit(event)">

<div className="apply-step space-y-4" data-step="1">
<h2 className="text-lg font-semibold tracking-tight text-frost">Step 1 — Brand Basics</h2>
<div className="grid md:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-archgray mb-1">Brand name *</label>
<input className="w-full rounded-xl border bg-imperial/60 px-3 py-2 text-sm text-frost placeholder:text-archgray focus:outline-none focus:ring-1 focus:ring-executive/70 border-white/10" name="brandName" placeholder="e.g., Midnight Crumb Co." required=""/>
</div>
<div>
<label className="block text-xs text-archgray mb-1">Location (city, country) *</label>
<input className="w-full rounded-xl border bg-imperial/60 px-3 py-2 text-sm text-frost placeholder:text-archgray focus:outline-none focus:ring-1 focus:ring-executive/70 border-white/10" name="location" placeholder="e.g., Austin, USA" required=""/>
</div>
</div>
<div className="grid md:grid-cols-3 gap-4">
<div>
<label className="block text-xs text-archgray mb-1">Website</label>
<input className="w-full rounded-xl border bg-imperial/60 px-3 py-2 text-sm text-frost placeholder:text-archgray focus:outline-none focus:ring-1 focus:ring-executive/70 border-white/10" name="website" placeholder="https://..."/>
</div>
<div>
<label className="block text-xs text-archgray mb-1">Instagram</label>
<input className="w-full rounded-xl border bg-imperial/60 px-3 py-2 text-sm text-frost placeholder:text-archgray focus:outline-none focus:ring-1 focus:ring-executive/70 border-white/10" name="instagram" placeholder="@yourbrand"/>
</div>
<div>
<label className="block text-xs text-archgray mb-1">TikTok</label>
</div></div></div></form></div></section></section></main></div>
    </>
  );
}
