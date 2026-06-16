import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Initialize lucide icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          lucide.createIcons({
            attrs: { 'stroke-width': 1.5 }
          });
        }
      });

      // Simple register handler
      const form = document.getElementById('reg-form');
      const btn = document.getElementById('reg-btn');
      const toast = document.getElementById('toast');
      if (form) {
        form.addEventListener('submit', function (e) {
          e.preventDefault();
          btn.disabled = true;
          btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> Processing';
          setTimeout(() => {
            btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Registered';
            toast.classList.remove('hidden');
            setTimeout(() => { toast.classList.add('hidden'); }, 4000);
          }, 1100);
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/15 shadow-sm" style={{background: 'linear-gradient(140deg, rgba(118,201,67,0.18), rgba(118,201,67,0.04))'}}>
<span className="text-[14px] font-semibold tracking-tight" style={{color: '#76C943'}}>Y</span>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition">Yubico Events</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-neutral-300 hover:text-white transition" href="#overview">Overview</a>
<a className="text-neutral-300 hover:text-white transition" href="#themes">Themes</a>
<a className="text-neutral-300 hover:text-white transition" href="#details">Details</a>
<a className="text-neutral-300 hover:text-white transition" href="#agenda">Agenda</a>
<a className="text-neutral-300 hover:text-white transition" href="#speakers">Speakers</a>
<a className="text-neutral-300 hover:text-white transition" href="#social-proof">Why Attend</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-black hover:shadow-[0_0_0_3px_rgba(118,201,67,0.2)] transition" href="#register" style={{background: '#76C943'}}>
<i className="w-4 h-4" data-lucide="calendar-days"></i>
            Register
          </a>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="overview">

<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-64 -left-40 h-[640px] w-[640px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(118,201,67,0.35), transparent 70%)'}}></div>
<div className="absolute -bottom-40 -right-40 h-[560px] w-[560px] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(closest-side, rgba(118,201,67,0.25), transparent 70%)'}}></div>
<div className="absolute inset-0 opacity-[0.12]">
<svg aria-hidden="true" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="text-white" fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
</div>
<div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">

<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-neutral-300">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i>
              Flagship Event • 2025
            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              YubiSummit 2025
            </h1>
<p className="text-lg sm:text-xl text-neutral-300 max-w-2xl">
              Securing the next decade: Practical strategies for phishing-resistant, user-loved authentication at global scale.
            </p>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-black transition hover:shadow-[0_0_0_6px_rgba(118,201,67,0.18)]" href="#register" style={{background: '#76C943'}}>
<i className="w-4 h-4" data-lucide="zap"></i>
                Register now
              </a>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-white/90 ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition" href="#agenda">
<i className="w-4 h-4" data-lucide="notebook-text"></i>
                Get the agenda
              </a>
</div>

<div className="pt-6">
<div className="text-xs uppercase tracking-wider text-neutral-400 mb-3">Trusted by security-first teams</div>
<div className="flex flex-wrap items-center gap-2">
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">Aperture</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">Granite</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">SignalNorth</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">Nimbus</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">Monarch</div>
</div>
</div>
</div>

<div className="relative">
<div className="relative mx-auto max-w-lg">
<div className="aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] shadow-2xl overflow-hidden">
<div className="absolute inset-0">
<div className="absolute -top-8 -left-8 h-64 w-64 rounded-full blur-2xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(118,201,67,0.35), transparent 70%)'}}></div>
</div>
<div className="relative h-full w-full p-6 sm:p-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg grid place-items-center" style={{background: 'linear-gradient(140deg, rgba(118,201,67,0.15), rgba(118,201,67,0.05))'}}>
<i className="w-5 h-5 text-white" data-lucide="key-round"></i>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Passkeys</div>
<div className="text-xs text-neutral-400">FIDO2 at scale</div>
</div>
</div>
<div className="text-xs text-neutral-400">Live Demo</div>
</div>
<div className="mt-6 grid grid-cols-3 gap-3">
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white" data-lucide="users"></i>
<div className="mt-3 text-sm font-medium tracking-tight">User UX</div>
<div className="text-xs text-neutral-400">Delight without tradeoffs</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white" data-lucide="shield"></i>
<div className="mt-3 text-sm font-medium tracking-tight">Zero Trust</div>
<div className="text-xs text-neutral-400">From device to cloud</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5 hover:ring-white/20 transition">
<i className="w-5 h-5 text-white" data-lucide="cloud-lock"></i>
<div className="mt-3 text-sm font-medium tracking-tight">Enterprise</div>
<div className="text-xs text-neutral-400">Scale &amp; compliance</div>
</div>
</div>
<div className="mt-6 h-36 rounded-xl ring-1 ring-white/10 overflow-hidden bg-black/40 grid place-items-center">
<div className="flex items-center gap-3 text-neutral-300">
<i className="w-5 h-5" data-lucide="fingerprint"></i>
<span className="text-sm">Real-time phishing resistance test</span>
</div>
</div>
</div>
</div>
<div className="absolute -bottom-6 -left-6 hidden sm:block">
<div className="rounded-xl px-4 py-3 ring-1 ring-white/10 bg-white/5 backdrop-blur text-xs text-neutral-300">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="sparkles"></i>
<span>New: Hardware key roadmap &amp; passkey deep dive</span>
</div>
</div>
</div>
<div className="absolute -top-4 -right-4 hidden sm:block">
<div className="rounded-xl px-4 py-3 ring-1 ring-white/10 bg-white/5 backdrop-blur text-xs text-neutral-300">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="broadcast"></i>
<span>In-person + global livestream</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="themes">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">What you’ll gain</h2>
<p className="mt-2 text-neutral-400 max-w-2xl">Clear, actionable guidance from leaders driving standards, products, and deployments across the identity ecosystem.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-black transition hover:shadow-[0_0_0_6px_rgba(118,201,67,0.18)]" href="#register" style={{background: '#76C943'}}>
<i className="w-4 h-4" data-lucide="badge-check"></i>
            Save my spot
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="key-round"></i>
</div>
<div className="text-base font-medium tracking-tight">Passkeys at scale</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Operational patterns for rolling out passkeys across workforce and consumer surfaces.</p>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="shield"></i>
</div>
<div className="text-base font-medium tracking-tight">Phishing resistance</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Quantifying risk reduction and defeating real-world adversaries with hardware-backed auth.</p>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<div className="text-base font-medium tracking-tight">Hardware roadmap</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Where YubiKey is heading: security chips, attestation, and new enterprise capabilities.</p>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="workflow"></i>
</div>
<div className="text-base font-medium tracking-tight">Zero Trust in practice</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Architectures connecting device trust, identity, and policy enforcement in hybrid environments.</p>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="package"></i>
</div>
<div className="text-base font-medium tracking-tight">Supply chain security</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Protecting dev pipelines, signing, and release integrity with hardware-backed roots of trust.</p>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="user-check"></i>
</div>
<div className="text-base font-medium tracking-tight">UX that users love</div>
</div>
<p className="mt-3 text-sm text-neutral-400">Frictionless sign-in journeys and recovery flows that keep helpdesk tickets down.</p>
</div>
</div>
</div>
</section>

<section className="relative" id="details">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="calendar"></i>
</div>
<div>
<div className="text-base font-medium tracking-tight">Date</div>
<div className="text-sm text-neutral-400">May 13–15, 2025</div>
</div>
</div>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-base font-medium tracking-tight">Location</div>
<div className="text-sm text-neutral-400">San Francisco, CA + Global Livestream</div>
</div>
</div>
</div>
<div className="rounded-2xl p-6 ring-1 ring-white/10 bg-white/[0.03]">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg grid place-items-center" style={{background: 'linear-gradient(160deg, rgba(118,201,67,0.18), rgba(118,201,67,0.06))'}}>
<i className="w-5 h-5" data-lucide="users-2"></i>
</div>
<div>
<div className="text-base font-medium tracking-tight">Who should attend</div>
<div className="text-sm text-neutral-400">CISOs, IAM leaders, architects, product &amp; security engineers</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden" id="agenda">
<div className="px-6 sm:px-8 py-6 border-b border-white/10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Agenda highlights</h3>
<p className="text-sm text-neutral-400 mt-1">High-signal keynotes, technical deep dives, and hands-on labs.</p>
</div>
<div className="grid lg:grid-cols-3 gap-0">

<div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
<div className="text-xs uppercase tracking-wider text-neutral-400">Day 1 • Vision</div>
<div className="mt-3 space-y-4">
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="mic-2"></i>
                    Opening keynote: Securing the next decade
                  </div>
<div className="text-xs text-neutral-400 mt-1">State of phishing, hardware-backed identity, and standards momentum</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="key-square"></i>
                    Passkeys for workforce &amp; customers
                  </div>
<div className="text-xs text-neutral-400 mt-1">Enrollment, migration, and policy at global scale</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="handshake"></i>
                    Partner strategies roundtable
                  </div>
<div className="text-xs text-neutral-400 mt-1">Integrations across IdPs, MDM, and platform ecosystems</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
<div className="text-xs uppercase tracking-wider text-neutral-400">Day 2 • Build</div>
<div className="mt-3 space-y-4">
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="hammer"></i>
                    Developer lab: FIDO2 + WebAuthn
                  </div>
<div className="text-xs text-neutral-400 mt-1">Guided lab: strong attestation, RP IDs, recovery patterns</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="server-cog"></i>
                    Admin clinic: device trust + policy
                  </div>
<div className="text-xs text-neutral-400 mt-1">Policy baselines, conditional access, and audit readiness</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="shield-alert"></i>
                    Red vs. blue: live phishing gauntlet
                  </div>
<div className="text-xs text-neutral-400 mt-1">Attack simulation and mitigation walk-through</div>
</div>
</div>
</div>

<div className="p-6 sm:p-8">
<div className="text-xs uppercase tracking-wider text-neutral-400">Day 3 • Scale</div>
<div className="mt-3 space-y-4">
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="line-chart"></i>
                    ROI &amp; outcomes: the business case
                  </div>
<div className="text-xs text-neutral-400 mt-1">Risk reduction, MFA fatigue elimination, helpdesk impact</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="globe-lock"></i>
                    Global deployments: lessons learned
                  </div>
<div className="text-xs text-neutral-400 mt-1">Multi-geo, regulated industries, supply chain partners</div>
</div>
<div className="rounded-xl p-4 ring-1 ring-white/10 bg-white/5">
<div className="flex items-center gap-2 text-sm font-medium tracking-tight">
<i className="w-4 h-4 text-neutral-300" data-lucide="compass"></i>
                    The road ahead: standards &amp; roadmap
                  </div>
<div className="text-xs text-neutral-400 mt-1">FIDO roadmap, passkey evolution, enterprise security chips</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center justify-between gap-4">
<p className="text-sm text-neutral-400">Space is limited for in-person sessions. Livestream access available worldwide.</p>
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-black transition hover:shadow-[0_0_0_6px_rgba(118,201,67,0.18)]" href="#register" style={{background: '#76C943'}}>
<i className="w-4 h-4" data-lucide="ticket"></i>
            Reserve your seat
          </a>
</div>
</div>
</section>

<section className="relative" id="speakers">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
<div className="flex items-end justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured speakers</h2>
<p className="mt-2 text-neutral-400 max-w-2xl">A curated lineup from standards bodies, platform leaders, and security-first enterprises.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-white/90 ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition" href="#register">
<i className="w-4 h-4" data-lucide="bell-ring"></i>
            Get notified
          </a>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Alexandra Chen</div>
<div className="text-sm text-neutral-400">Chief Technology Officer, Yubico</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Marcus Patel</div>
<div className="text-sm text-neutral-400">Head of Identity, GlobalCloud</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Priya Narayanan</div>
<div className="text-sm text-neutral-400">Director, FIDO Standards</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Diego Martínez</div>
<div className="text-sm text-neutral-400">CISO, Meridian Bank</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Hannah Lee</div>
<div className="text-sm text-neutral-400">Security Architect, Contoso</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Kenji Sato</div>
<div className="text-sm text-neutral-400">Principal Engineer, EdgeWorks</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Fatima Al-Masri</div>
<div className="text-sm text-neutral-400">VP Product, SecureID</div>
</div>
</div>
<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.03]">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Speaker headshot" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="text-base font-medium tracking-tight">Lars Holm</div>
<div className="text-sm text-neutral-400">Head of Platform Security, NordApps</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative" id="social-proof">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
<div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
<div className="px-6 sm:px-8 py-6 border-b border-white/10">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Why attend</h3>
<p className="text-sm text-neutral-400 mt-1">Hear from leaders who shipped secure, delightful auth—and the measurable results they achieved.</p>
</div>
<div className="grid lg:grid-cols-3 gap-0">
<div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-300" data-lucide="quote"></i>
<div>
<p className="text-sm text-neutral-300">“We cut account takeover by 98% within months. The sessions made our rollout plan obvious.”</p>
<div className="mt-3 text-xs text-neutral-400">Jamie Rivera, Head of Security Engineering</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-300" data-lucide="quote"></i>
<div>
<p className="text-sm text-neutral-300">“Finally, a pragmatic path to passkeys for both workforce and customers—no guesswork.”</p>
<div className="mt-3 text-xs text-neutral-400">Aria Gupta, Director of Identity</div>
</div>
</div>
</div>
<div className="p-6 sm:p-8">
<div className="flex items-start gap-3">
<i className="w-5 h-5 text-neutral-300" data-lucide="quote"></i>
<div>
<p className="text-sm text-neutral-300">“World-class speakers, hands-on labs, and proof you can take to your CFO.”</p>
<div className="mt-3 text-xs text-neutral-400">Samir Khan, CISO</div>
</div>
</div>
</div>
</div>

<div className="px-6 sm:px-8 py-6 border-t border-white/10">
<div className="text-xs uppercase tracking-wider text-neutral-400 mb-3">In partnership with</div>
<div className="flex flex-wrap items-center gap-3">
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">FIDO Alliance</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">GlobalCloud</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">EdgeWorks</div>
<div className="px-3 py-1.5 rounded-md ring-1 ring-white/10 text-neutral-300 text-xs tracking-tight">SecureID</div>
</div>
</div>
</div>
<div className="flex justify-end mt-6">
<a className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium tracking-tight text-black transition hover:shadow-[0_0_0_6px_rgba(118,201,67,0.18)]" href="#register" style={{background: '#76C943'}}>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
            Join the community
          </a>
</div>
</div>
</section>

<section className="relative" id="register">
<div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
<div className="grid lg:grid-cols-2 gap-6 items-start">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Register for YubiSummit 2025</h2>
<p className="mt-2 text-neutral-400 max-w-2xl">Secure your spot for the in-person experience in San Francisco or join the global livestream.</p>
<div className="mt-6 rounded-2xl ring-1 ring-white/10 bg-white/[0.03] p-6">
<ul className="space-y-3 text-sm text-neutral-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle2" style={{color: '#76C943'}}></i>
                  Hands-on labs with experts
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle2" style={{color: '#76C943'}}></i>
                  Exclusive roadmap previews
                </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle2" style={{color: '#76C943'}}></i>
                  Access to session recordings
                </li>
</ul>
</div>
</div>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.04] p-6 sm:p-8">
<form className="space-y-4" id="reg-form">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="firstName">First name</label>
<input className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="firstName" name="firstName" placeholder="Alex" required=""/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="lastName">Last name</label>
<input className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="lastName" name="lastName" placeholder="Morgan" required=""/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="email">Work email</label>
<input className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="email" name="email" placeholder="alex@company.com" required="" type="email"/>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="company">Company</label>
<input className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="company" name="company" placeholder="Your Company" required=""/>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="role">Role</label>
<input className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="role" name="role" placeholder="Security Architect" required=""/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="attendance">Attendance</label>
<select className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none transition" id="attendance" name="attendance">
<option>In-person (San Francisco)</option>
<option>Livestream (Global)</option>
</select>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="size">Company size</label>
<select className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none transition" id="size" name="size">
<option>1–100</option>
<option>101–1,000</option>
<option>1,001–10,000</option>
<option>10,000+</option>
</select>
</div>
</div>
<div>
<label className="block text-xs text-neutral-400 mb-2" htmlFor="notes">Topics of interest (optional)</label>
<textarea className="w-full rounded-lg bg-black/40 text-sm px-3 py-2.5 ring-1 ring-white/10 focus:ring-2 focus:ring-[rgba(118,201,67,0.5)] outline-none placeholder:text-neutral-500 transition" id="notes" name="notes" placeholder="Passkeys for customers, device trust, etc." rows="3"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<p className="text-xs text-neutral-400">By registering, you agree to event terms and our privacy policy.</p>
<button className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium tracking-tight text-black transition hover:shadow-[0_0_0_6px_rgba(118,201,67,0.18)] disabled:opacity-60" id="reg-btn" style={{background: '#76C943'}} type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                  Register
                </button>
</div>
</form>
</div>
</div>

<div className="mt-10 rounded-xl ring-1 ring-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.02] px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-neutral-300" data-lucide="lock-keyhole"></i>
<p className="text-sm text-neutral-300">Can’t travel? Join the livestream and access recordings after the event.</p>
</div>
<a className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium tracking-tight text-white/90 ring-1 ring-white/15 hover:ring-white/30 hover:text-white transition" href="#register">
<i className="w-4 h-4" data-lucide="play-circle"></i>
            Attend virtually
          </a>
</div>
</div>
</section>

<footer className="relative border-t border-white/10">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-lg grid place-items-center ring-1 ring-white/15 shadow-sm" style={{background: 'linear-gradient(140deg, rgba(118,201,67,0.18), rgba(118,201,67,0.04))'}}>
<span className="text-[14px] font-semibold tracking-tight" style={{color: '#76C943'}}>Y</span>
</div>
<div className="text-sm text-neutral-400">© 2025 Yubico. All rights reserved.</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-neutral-400 hover:text-white transition" href="#">Privacy</a>
<a className="text-neutral-400 hover:text-white transition" href="#">Terms</a>
<a className="text-neutral-400 hover:text-white transition" href="#">Support</a>
</div>
</div>
</div>
</footer>

<div className="fixed top-4 right-4 z-[60] hidden" id="toast">
<div className="rounded-lg px-4 py-3 ring-1 ring-white/10 bg-white/10 backdrop-blur text-sm text-neutral-100 shadow-lg">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="check-circle" style={{color: '#76C943'}}></i>
<span>Thanks for registering! Check your email for confirmation.</span>
</div>
</div>
</div>


    </>
  );
}
