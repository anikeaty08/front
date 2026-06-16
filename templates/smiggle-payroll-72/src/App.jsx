import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      const links = menu.querySelectorAll('a');

      if (btn && menu) {
          btn.addEventListener('click', () => {
              menu.classList.toggle('hidden');
          });

          links.forEach(link => {
              link.addEventListener('click', () => {
                  menu.classList.add('hidden');
              });
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-slate-100/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-mono font-semibold text-lg tracking-tight text-slate-900">
              SMIGGLE
            </span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-purple-500 transition-colors" href="#product">
              Product
            </a>
<a className="text-sm font-medium hover:text-purple-500 transition-colors" href="#pricing">
              Pricing
            </a>
<a className="text-sm font-medium hover:text-purple-500 transition-colors" href="#resources">
              Resources
            </a>
<a className="text-sm font-medium hover:text-purple-500 transition-colors" href="#demo">
              Demo
            </a>
</nav>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900" href="#pricing">
            See pricing
          </a>
<div className="flex items-center gap-3">
<span className="hidden lg:block text-xs text-slate-400 font-mono">
              Trusted by 500+ teams
            </span>
<a className="hover:bg-purple-600 transition-all hover:shadow-md flex items-center gap-2 text-xs font-medium text-white tracking-tighter bg-purple-500 rounded-lg pt-2 pr-1 pb-2 pl-2 shadow-sm" href="#">
<span className="">Start payroll in 10 mins</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>

<button className="md:hidden text-slate-900" id="mobile-menu-btn">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-icon-replaced="true" data-icon-set="lucide" data-lucide="menu" data-width="24" fill="none" height="24" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
<div className="hidden md:hidden absolute top-full left-0 w-full bg-slate-100/95 backdrop-blur-md border-b border-slate-200 p-6 shadow-beautiful z-40" id="mobile-menu">
<nav className="flex flex-col gap-4">
<a className="block text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#product">
            Product
          </a>
<a className="block text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="block text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#resources">
            Resources
          </a>
<a className="block text-sm font-medium text-slate-600 hover:text-purple-600 transition-colors" href="#demo">
            Demo
          </a>
<div className="h-px bg-slate-200 my-2"></div>
<a className="block text-sm font-medium text-slate-500 hover:text-slate-900" href="#pricing">
            See pricing
          </a>
<a className="block text-sm font-medium text-purple-600 font-mono" href="#">
            Start payroll in 10 mins →
          </a>
</nav>
</div>
</header>

<section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-medium text-purple-600">
<span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
            Now with AI Tax Auto-Filing
          </div>
<h1 className="text-5xl lg:text-6xl font-mono font-semibold text-slate-900 leading-[1.1] tracking-tight">
            Payroll that actually
            <span className="text-purple-500">finishes itself.</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-xl">
            Smiggle automates taxes, runs on-time payroll, and keeps your people
            paid — without chasing spreadsheets or stressing over compliance.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-medium transition-all shadow-beautiful hover:translate-y-[-2px] flex items-center justify-center gap-2">
              Run my first payroll
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-3.5 rounded-lg font-medium transition-all shadow-sm hover:bg-slate-50 flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
              See it in 90s
            </button>
</div>
<div className="flex flex-wrap gap-x-6 gap-y-3 pt-4">
<div className="flex items-center gap-2 text-sm text-slate-600">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
              Automated tax calculations
            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
              On-time direct deposit
            </div>
<div className="flex items-center gap-2 text-sm text-slate-600">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
              Built for compliance
            </div>
</div>
<p className="text-xs text-slate-400">
            No credit card required. Set up in 10 minutes. Integrates with
            Quickbooks &amp; Xero.
          </p>
</div>

<div className="relative animate-float">

<div className="bg-white rounded-xl border border-slate-200 shadow-beautiful p-2 relative z-10">
<div className="bg-slate-50 rounded-lg border border-slate-100 p-6 overflow-hidden">

<div className="flex justify-between items-center mb-8">
<div className="space-y-1">
<div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
<div className="h-3 w-20 bg-slate-200 rounded opacity-60"></div>
</div>
<div className="h-8 w-24 bg-purple-100 rounded text-purple-600 text-xs font-mono flex items-center justify-center">
                  Running...
                </div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                      JD
                    </div>
<div className="space-y-1">
<div className="h-3 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<div className="text-green-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                      AS
                    </div>
<div className="space-y-1">
<div className="h-3 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<div className="text-green-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between p-3 bg-white rounded border border-slate-100 shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                      MR
                    </div>
<div className="space-y-1">
<div className="h-3 w-24 bg-slate-200 rounded"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
</div>
<div className="text-green-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="mt-8 bg-slate-900 rounded-lg p-4 text-white shadow-xl transform scale-105">
<div className="flex items-center gap-3 mb-2">
<svg aria-hidden="true" className="iconify text-purple-400 iconify--lucide" data-icon="lucide:timer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 2h4m-2 12l3-3"></path>
<circle cx="12" cy="14" r="8"></circle>
</g>
</svg>
<span className="font-mono text-sm font-semibold">
                    Time Saved This Run
                  </span>
</div>
<div className="text-4xl font-mono font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white">
                  3h 12m
                </div>
</div>
</div>
</div>

<div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-slate-300/20 rounded-full blur-2xl"></div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-mono text-slate-400 mb-8 uppercase tracking-wider">
          Trusted by growing teams and their accountants
        </p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 font-bold text-xl">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            ACME Corp
          </div>
<div className="flex items-center gap-2 font-bold text-xl">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Vortex
          </div>
<div className="flex items-center gap-2 font-bold text-xl">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle-dashed" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Orbit
          </div>
<div className="flex items-center gap-2 font-bold text-xl">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:boxes" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path>
<path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path>
</g>
</svg>
            Blocks
          </div>
<div className="flex items-center gap-2 font-bold text-xl">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</g>
</svg>
            Stack
          </div>
</div>
<div className="flex justify-center gap-8 mt-10 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:shield-check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12l2 2l4-4"></path>
</g>
</svg>
            SOC 2 Compliant
          </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:star" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            4.9/5 Average Rating
          </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:users" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</g>
</svg>
            500+ Companies
          </div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>
<div className="relative z-10 group">
<div className="w-16 h-16 bg-white border border-slate-200 shadow-beautiful rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-red-400 transition-colors iconify--lucide" data-icon="lucide:file-warning" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Zm-3 7v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-mono font-semibold text-slate-900 mb-3">
            Payroll is a time-sink.
          </h3>
<p className="text-slate-500 text-sm leading-relaxed">
            HR teams spend an average of 3 days per month fixing missed direct
            deposits, tax errors, and spreadsheet typos.
          </p>
</div>
<div className="relative z-10 group">
<div className="w-16 h-16 bg-white border border-slate-200 shadow-beautiful rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-purple-500 transition-colors iconify--lucide" data-icon="lucide:zap" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-xl font-mono font-semibold text-slate-900 mb-3">
            Background, not task.
          </h3>
<p className="text-slate-500 text-sm leading-relaxed">
            Smiggle changed payroll from a monthly headache to a background
            process. One setup, automated runs, real-time validation.
          </p>
</div>
<div className="relative z-10 group">
<div className="w-16 h-16 bg-white border border-slate-200 shadow-beautiful rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify text-slate-400 group-hover:text-green-500 transition-colors iconify--lucide" data-icon="lucide:smile" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01"></path>
</g>
</svg>
</div>
<h3 className="text-xl font-mono font-semibold text-slate-900 mb-3">
            Teams focus on people.
          </h3>
<p className="text-slate-500 text-sm leading-relaxed">
            Pay on time, avoid late penalties, and keep your team happy.
            <a className="text-purple-600 hover:underline decoration-1 underline-offset-2 ml-1" href="#">
              See the 3-step setup
            </a>
</p>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200" id="product">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-4xl font-mono font-semibold text-slate-900 tracking-tight mb-4">
            Everything you need to
            <br/>
            pay your team right.
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calculator" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="2" width="16" x="4" y="2"></rect>
<path d="M8 6h8m0 8v4m0-8h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              Automated tax &amp; filings
            </h3>
<p className="text-sm text-slate-500 mb-4">
              We calculate, file, and pay payroll taxes across all 50 states
              automatically.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 17h6v-6"></path>
<path d="m22 17l-8.5-8.5l-5 5L2 7"></path>
</g>
</svg>
              99% fewer tax errors
            </div>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              One-click runs
            </h3>
<p className="text-sm text-slate-500 mb-4">
              Run payroll in minutes with pre-calculated accurate pay data.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</g>
</svg>
              Avg run time: 8 mins
            </div>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:alert-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 8v4m0 4h.01"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              Real-time alerts
            </h3>
<p className="text-sm text-slate-500 mb-4">
              Instantly flags mismatches, missing info, &amp; filing deadlines
              before they hit.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Zero penalties
            </div>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:refresh-cw" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
<path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
<path d="M8 16H3v5"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              Seamless Integrations
            </h3>
<p className="text-sm text-slate-500 mb-4">
              Syncs with QuickBooks, Xero, ADP import &amp; your favorite HRIS
              tools.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
</g>
</svg>
              Reduces manual entry by 80%
            </div>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</g>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              Employee self-serve
            </h3>
<p className="text-sm text-slate-500 mb-4">
              Employees access payslips, tax forms, and manage direct deposits.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Cuts HR queries by 60%
            </div>
</div>

<div className="group p-6 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:shadow-beautiful transition-all duration-300 cursor-pointer">
<div className="w-10 h-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center mb-4 text-purple-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</g>
</svg>
</div>
<h3 className="text-lg font-mono font-semibold text-slate-900 mb-2">
              Security &amp; Privacy
            </h3>
<p className="text-sm text-slate-500 mb-4">
              SOC 2 compliant, 256-bit encryption, role-based access control.
            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-400 bg-slate-100 w-fit px-2 py-1 rounded">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:server" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<path d="M6 6h.01M6 18h.01"></path>
</g>
</svg>
              Enterprise-grade
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto text-center" id="demo">
<h2 className="text-3xl font-mono font-semibold text-slate-900 mb-8 tracking-tight">
        See Smiggle in action (90s)
      </h2>
<div className="relative aspect-video bg-slate-900 rounded-xl overflow-hidden shadow-beautiful border border-slate-200 group cursor-pointer">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="iconify text-white ml-1 iconify--lucide" data-icon="lucide:play" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 flex gap-2">
<div className="h-1 bg-purple-500 flex-1 rounded-full"></div>
<div className="h-1 bg-white/30 flex-1 rounded-full hover:bg-white/50 transition"></div>
<div className="h-1 bg-white/30 flex-1 rounded-full hover:bg-white/50 transition"></div>
<div className="h-1 bg-white/30 flex-1 rounded-full hover:bg-white/50 transition"></div>
</div>

<div className="absolute bottom-2 left-6 right-6 flex text-[10px] text-white/70 font-mono justify-between px-1">
<span>Setup</span>
<span>Run Payroll</span>
<span>Reports</span>
<span>Taxes</span>
</div>
</div>
<div className="mt-8 flex justify-center gap-4">
<button className="text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors">
          Watch full demo
        </button>
<span className="text-slate-300">|</span>
<button className="text-sm font-medium text-slate-900 hover:text-purple-600 transition-colors">
          Launch Sandbox
        </button>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<div className="mb-6">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:quote" data-width="40" height="40" role="img" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<h3 className="text-2xl font-medium text-slate-900 leading-relaxed mb-6">
            "Smiggle cut our payroll processing from 6 hours to 20 minutes. It's
            the first time in 5 years we haven't had a single tax error."
          </h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">

<div className="w-full h-full bg-slate-300"></div>
</div>
<div>
<div className="font-bold text-slate-900">Aisha Mensah</div>
<div className="text-sm text-slate-500">People Ops, BranchCo</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-slate-100 flex gap-8">
<div>
<div className="text-2xl font-mono font-bold text-slate-900">
                12hr
              </div>
<div className="text-xs text-slate-500 uppercase tracking-wide">
                Saved / Month
              </div>
</div>
<div>
<div className="text-2xl font-mono font-bold text-slate-900">0%</div>
<div className="text-xs text-slate-500 uppercase tracking-wide">
                Error Rate
              </div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-xl p-8 border border-slate-200 shadow-sm relative overflow-hidden">
<div className="relative z-10">
<span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded text-xs font-mono mb-4 text-purple-600">
              Case Study
            </span>
<h4 className="text-xl font-bold text-slate-900 mb-2">
              How TechFlow scaled to 200 employees
            </h4>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
              TechFlow was drowning in spreadsheets. Smiggle automated their
              entire multi-state tax filing process during hypergrowth.
            </p>
<a className="text-sm font-semibold text-slate-900 flex items-center gap-2 hover:gap-3 transition-all" href="#">
              Read full story
              <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl font-mono font-semibold text-slate-900 tracking-tight mb-4">
          Simple pricing that scales
        </h2>
<p className="text-slate-500">First month free for annual signups.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="font-mono text-lg font-semibold text-slate-900 mb-2">
            Starter
          </h3>
<div className="text-3xl font-bold text-slate-900 mb-1">
            $40
            <span className="text-sm font-normal text-slate-500">/mo base</span>
</div>
<p className="text-xs text-slate-500 mb-6">+ $6 per person</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors mb-6">
            Choose Plan
          </button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Automated Payroll
            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Single State Tax Filing
            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-green-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Direct Deposit (4-day)
            </li>
</ul>
</div>

<div className="p-8 rounded-xl border-2 border-purple-500 bg-white shadow-beautiful relative transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Most Popular
          </div>
<h3 className="font-mono text-lg font-semibold text-slate-900 mb-2">
            Scale
          </h3>
<div className="text-3xl font-bold text-slate-900 mb-1">
            $80
            <span className="text-sm font-normal text-slate-500">/mo base</span>
</div>
<p className="text-xs text-slate-500 mb-6">+ $12 per person</p>
<button className="w-full py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors mb-6 shadow-lg shadow-purple-500/20">
            Choose Scale
          </button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Multi-State Tax Filing
            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-purple-500 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Next-Day Direct Deposit
            </li>
</ul>
</div>

<div className="p-8 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
<h3 className="font-mono text-lg font-semibold text-slate-900 mb-2">
            Enterprise
          </h3>
<div className="text-3xl font-bold text-slate-900 mb-1">Custom</div>
<p className="text-xs text-slate-500 mb-6">Volume discounts</p>
<button className="w-full py-2.5 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors mb-6">
            Contact Sales
          </button>
<ul className="space-y-3 text-sm text-slate-600">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Dedicated Account Manager
            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              HRIS Sync
            </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-400 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
              Custom Reporting
            </li>
</ul>
</div>
</div>
<div className="text-center mt-8">
<a className="text-xs text-slate-400 hover:text-purple-500 border-b border-transparent hover:border-purple-500 transition-all pb-0.5" href="#">
          Billing FAQ &amp; Switching Policy
        </a>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-200">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-mono font-semibold text-slate-900 mb-12 text-center tracking-tight">
          Switch in 3 simple steps
        </h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-bold">
                1
              </div>
<div className="flex-1 w-px bg-slate-200 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Sync your data
              </h3>
<p className="text-slate-500 text-sm">
                Upload a CSV or connect your previous payroll provider. We map
                the fields automatically.
              </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-mono text-sm font-bold border border-slate-200">
                2
              </div>
<div className="flex-1 w-px bg-slate-200 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Verify tax setup
              </h3>
<p className="text-slate-500 text-sm">
                Our system validates your state registrations and tax IDs in
                real-time.
              </p>
</div>
</div>
<div className="flex gap-6">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-mono text-sm font-bold">
                3
              </div>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-2">
                Run first payroll
              </h3>
<p className="text-slate-500 text-sm">
                Review the preview, click confirm, and your team gets paid.
                Migration complete.
              </p>
<a className="inline-flex items-center gap-2 text-xs font-semibold text-purple-600 mt-4 bg-purple-50 px-3 py-1.5 rounded hover:bg-purple-100 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:file-text" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path>
</g>
</svg>
                Download Migration Playbook (PDF)
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="resources">
<div className="border-b border-slate-200 mb-12 overflow-x-auto">
<div className="flex gap-8 min-w-max">
<button className="pb-4 border-b-2 border-purple-500 text-slate-900 font-medium text-sm">
            Payroll Engine
          </button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">
            Tax Compliance
          </button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">
            API &amp; Integrations
          </button>
<button className="pb-4 border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-medium text-sm transition-colors">
            Security
          </button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-6">
<h3 className="text-2xl font-mono font-semibold text-slate-900">
            Developer-friendly API
          </h3>
<p className="text-slate-500 leading-relaxed">
            Build custom workflows or integrate Smiggle into your own platform.
            Our REST API gives you full control over employee data, payroll
            runs, and tax documents.
          </p>
<a className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors" href="#">
            Read the docs
            <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
</div>
<div className="bg-slate-900 rounded-xl p-6 shadow-beautiful overflow-hidden">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<pre className="font-mono text-xs text-purple-300 overflow-x-auto"><code><span className="text-purple-400">POST</span> /v1/payroll/runs
{
  <span className="text-white">"pay_period_start"</span>: <span className="text-green-300">"2023-10-01"</span>,
  <span className="text-white">"pay_period_end"</span>: <span className="text-green-300">"2023-10-15"</span>,
  <span className="text-white">"employees"</span>: [
    {
      <span className="text-white">"id"</span>: <span className="text-green-300">"emp_123"</span>,
      <span className="text-white">"regular_hours"</span>: <span className="text-yellow-300">80</span>
    }
  ]
}</code></pre>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6 bg-white rounded-2xl shadow-beautiful p-8 md:p-12">
<h2 className="text-2xl font-mono font-semibold text-slate-900 mb-8 text-center">
          How much time will Smiggle save you?
        </h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-8">
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-4">
                Company Size:
                <span className="text-slate-900">50 employees</span>
</label>
<input className="accent-purple-500" max="200" min="1" type="range" value="50"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-4">
                Current HR Hours/Week:
                <span className="text-slate-900">15 hours</span>
</label>
<input className="accent-purple-500" max="40" min="1" type="range" value="15"/>
</div>
<div>
<label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-4">
                Hourly Cost:
                <span className="text-slate-900">$45/hr</span>
</label>
<input className="accent-purple-500" max="100" min="20" type="range" value="45"/>
</div>
</div>
<div className="bg-slate-900 rounded-xl p-8 text-center flex flex-col justify-center text-white">
<div className="text-sm text-slate-400 mb-2">
              Estimated Annual Savings
            </div>
<div className="text-5xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-white mb-6">
              $32,400
            </div>
<div className="text-sm text-slate-400 mb-2">Hours Saved</div>
<div className="text-2xl font-mono font-bold text-white mb-6">
              720 hrs
            </div>
<button className="w-full bg-white text-slate-900 py-2 rounded font-bold text-sm hover:bg-slate-100 transition-colors">
              Email me this report
            </button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="text-2xl font-mono font-semibold text-slate-900 mb-12 text-center">
        Frequently asked questions
      </h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
            How long does setup take?
            <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-slate-400 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
            Typically 10–45 minutes depending on complexity. If you're switching
            from another provider, we can import your data automatically.
          </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
            Do you support multi-state payroll?
            <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-slate-400 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
            Yes. We handle multi-state wages, tax registrations, and filings
            across all 50 states automatically.
          </div>
</details>
<details className="group bg-white border border-slate-200 rounded-lg open:shadow-sm transition-all duration-300">
<summary className="flex items-center justify-between cursor-pointer p-6 font-medium text-slate-900">
            How secure is my payroll data?
            <svg aria-hidden="true" className="iconify group-open:rotate-180 transition-transform text-slate-400 iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</summary>
<div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">
            We are SOC 2 Type II compliant. All data is encrypted with 256-bit
            encryption at rest and in transit, with strict role-based access
            controls.
          </div>
</details>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-12 md:p-20 text-center shadow-2xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6 tracking-tight">
            Ready to stop dreading payroll?
          </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Set up in minutes. Trusted by 500+ teams. Join the future of
            automated work.
          </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-purple-500/25">
              Start payroll — Free
            </button>
<button className="bg-transparent border border-slate-700 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-bold text-lg transition-all">
              Book a live demo
            </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="font-mono font-bold text-slate-900">SMIGGLE</span>
</div>
<p className="text-sm text-slate-500 mb-6">
              Automating payroll so you can focus on your people.
            </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:github" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path>
<path d="M9 18c-4.51 2-5-2-7-2"></path>
</g>
</svg>
</a>
</div>
</div>
<div>
<h4 className="font-mono font-semibold text-slate-900 mb-4 text-sm">
              Product
            </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Payroll
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Benefits
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Tax Filing
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-mono font-semibold text-slate-900 mb-4 text-sm">
              Resources
            </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Support
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  API Docs
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-mono font-semibold text-slate-900 mb-4 text-sm">
              Company
            </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  About
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-purple-600 transition-colors" href="#">
                  Legal
                </a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Smiggle Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
