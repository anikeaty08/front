import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    tailwind.config={
      darkMode:'class',
      theme:{
        extend:{
          fontFamily:{sans:['Inter','ui-sans-serif','system-ui']},
          colors:{
            surface:{900:'#0c0c0c',800:'#141414'},
            accent:{500:'#4ade80',600:'#22c55e'}
          },
          borderRadius:{xl2:'1.25rem'}
        }
      }
    };
  


    lucide.createIcons();

    // Animate in sequence
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.getElementById('hero-left').classList.add('visible');
      }, 200);
      setTimeout(() => {
        document.getElementById('hero-right').classList.add('visible');
      }, 650);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="flex-1 flex items-center justify-center">
<section className="hero-split flex flex-row w-full max-w-7xl mx-auto min-h-[90vh] px-4 lg:px-8 py-10 gap-12">

<div className="hero-col w-1/2 flex flex-col justify-center z-10">
<div className="slide-in-left" id="hero-left">
<span className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full bg-accent-500/10 text-accent-500 font-medium mb-6">
<svg className="w-4 h-4" data-lucide="layout-dashboard"></svg>
            Next-Gen Project OS
          </span>
<h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            All Your Projects,<br/>
<span className="text-accent-500">One Command Center</span>
</h1>
<p className="text-lg text-gray-400 mb-9 leading-relaxed max-w-md">
            Supercharge your team with a unified workspace for documents, tasks, insights, and workflows. NexusFlow helps you plan, track, and deliver projects <span className="text-accent-500 font-semibold">twice as fast</span>—from kickoff to launch.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-block px-6 py-3 rounded-full bg-accent-500 text-surface-900 font-semibold text-base hover:bg-accent-600 transition" onclick="alert('Getting Started...')">
              Get Started
            </button>
<button className="inline-block px-6 py-3 rounded-full border border-gray-700 text-gray-200 font-semibold text-base hover:bg-surface-800 transition" onclick="alert('Demo Coming Soon!')">
              View Demo
            </button>
</div>
<div className="mt-8 flex items-center gap-3">
<img alt="Alex Rodriguez" className="w-10 h-10 rounded-full border-2 border-accent-500 shadow" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<div>
<div className="text-white font-semibold text-sm">Alex Rodriguez</div>
<div className="text-xs text-gray-400">Product Lead, NexusFlow</div>
</div>
</div>
</div>
</div>

<div className="hero-col w-1/2 flex items-center z-10">
<div className="window slide-in-right w-full max-w-lg mx-auto p-8 relative" id="hero-right">
<div className="flex flex-col gap-6">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-5 h-5 text-blue-400" data-lucide="credit-card"></svg>
<h2 className="text-lg font-semibold">SmartPay Integration</h2>
</div>
<span className="bg-amber-600/20 text-amber-400 px-3 py-1 rounded-full flex items-center gap-1 text-xs">
<svg className="w-3 h-3" data-lucide="clock"></svg> In Development
              </span>
</div>

<div className="relative aspect-video bg-gradient-to-br from-gray-900/90 to-surface-800 rounded-xl border border-gray-800 flex items-center justify-center overflow-hidden">
<img alt="Architecture Diagram" className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none select-none" src="https://images.unsplash.com/photo-1634635720982-88d440c3f4a7?w=900&amp;q=80"/>

<div className="absolute top-8 left-8 w-16 h-8 bg-blue-500/30 border border-blue-400/50 rounded text-xs flex items-center justify-center text-blue-300 font-semibold z-10 cursor-pointer group hover:scale-105 transition">
                API
                <div className="absolute left-20 top-0 text-xs text-blue-200 bg-surface-800 border border-blue-400/30 px-2 py-1 rounded shadow hidden group-hover:block">REST &amp; Webhook</div>
</div>
<div className="absolute top-8 right-8 w-16 h-8 bg-green-500/30 border border-green-400/50 rounded text-xs flex items-center justify-center text-green-300 font-semibold z-10 cursor-pointer group hover:scale-105 transition">
                DB
                <div className="absolute right-20 top-0 text-xs text-green-200 bg-surface-800 border border-green-400/30 px-2 py-1 rounded shadow hidden group-hover:block">Postgres 14</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-20 h-8 bg-purple-500/30 border border-purple-400/50 rounded text-xs flex items-center justify-center text-purple-300 font-semibold z-10 cursor-pointer group hover:scale-105 transition">
                Frontend
                <div className="absolute left-1/2 -translate-x-1/2 -top-10 text-xs text-purple-200 bg-surface-800 border border-purple-400/30 px-2 py-1 rounded shadow hidden group-hover:block">Next.js v14</div>
</div>
<div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-400 z-10">SmartPay Flow v2.1</div>
</div>

<div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
<div>
<dt className="text-gray-400 uppercase text-xs mb-1">Timeline</dt>
<dd>
<span className="text-gray-300 flex items-center gap-1">
<svg className="w-3 h-3" data-lucide="calendar"></svg> Jun 2024 → Q1 2025
                  </span>
</dd>
</div>
<div>
<dt className="text-gray-400 uppercase text-xs mb-1">Priority</dt>
<dd>
<span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-xs font-medium">High</span>
</dd>
</div>
<div>
<dt className="text-gray-400 uppercase text-xs mb-1">Lead</dt>
<dd className="flex items-center gap-2">
<span className="w-6 h-6 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black rounded-full text-xs font-semibold text-white">AR</span>
                  Alex Rodriguez
                </dd>
</div>
<div>
<dt className="text-gray-400 uppercase text-xs mb-1">Features</dt>
<dd>
<span className="text-gray-300">Split pay, Fraud detection</span>
</dd>
</div>
</div>

<div className="flex items-center justify-between mt-2 border-t border-gray-700 pt-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 flex items-center justify-center bg-gradient-to-b from-gray-900 to-black rounded-full text-white text-xs font-semibold">AR</div>
<div>
<div className="text-white font-medium text-sm">Alex Rodriguez</div>
<div className="text-xs text-gray-400">Technical Lead</div>
</div>
</div>
<div className="text-right">
<div className="signature mb-1">Alex Rodriguez</div>
<div className="text-xs text-gray-500">Approved: Aug 15, 2024</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
