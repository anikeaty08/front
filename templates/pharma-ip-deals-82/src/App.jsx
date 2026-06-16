import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons();

      function toggleModal(show, title, ticker, valuation, price) {
          const overlay = document.getElementById('modal-overlay');
          const content = document.getElementById('modal-content');

          if (show) {
              // Update Content if provided
              if(title) document.getElementById('modal-title').innerText = title;
              if(ticker) document.getElementById('modal-ticker').innerText = ticker;
              if(valuation) document.getElementById('modal-valuation').innerHTML = valuation + '<span class="text-slate-400">.00</span>';
              if(price) document.getElementById('modal-price').innerText = price;

              overlay.classList.remove('hidden');
              // Small delay to allow display:block to apply before opacity transition
              setTimeout(() => {
                  overlay.classList.remove('opacity-0');
                  content.classList.remove('opacity-0', 'scale-95');
                  content.classList.add('opacity-100', 'scale-100');
              }, 10);
              document.body.style.overflow = 'hidden'; // Prevent background scrolling
          } else {
              overlay.classList.add('opacity-0');
              content.classList.remove('opacity-100', 'scale-100');
              content.classList.add('opacity-0', 'scale-95');

              setTimeout(() => {
                  overlay.classList.add('hidden');
                  document.body.style.overflow = 'auto';
              }, 300);
          }
      }
    


      function toggleChat() {
          const chat = document.getElementById('ai-chat-window');
          if (chat.classList.contains('invisible')) {
              chat.classList.remove('invisible', 'opacity-0', 'scale-90', 'pointer-events-none');
              chat.classList.add('opacity-100', 'scale-100', 'pointer-events-auto');
          } else {
              chat.classList.add('invisible', 'opacity-0', 'scale-90', 'pointer-events-none');
              chat.classList.remove('opacity-100', 'scale-100', 'pointer-events-auto');
          }
      }

      function handleChatSubmit(e) {
          e.preventDefault();
          const input = document.getElementById('chat-input');
          const container = document.getElementById('chat-messages');
          const text = input.value.trim();

          if (!text) return;

          // User Message
          const userHtml = `
              <div class="flex justify-end mb-4 animate-[float_0.3s_ease-out]">
                  <div class="bg-teal-600 text-white px-4 py-2.5 rounded-2xl rounded-tr-none shadow-md text-xs max-w-[85%] leading-relaxed">
                      ${text}
                  </div>
              </div>
          `;
          container.insertAdjacentHTML('beforeend', userHtml);
          input.value = '';
          container.scrollTop = container.scrollHeight;

          // Bot Response Simulation
          setTimeout(() => {
              const botHtml = `
                  <div class="flex gap-3 max-w-[90%] mb-4 animate-[float_0.3s_ease-out]">
                      <div class="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1 shadow-sm">
                          <i data-lucide="bot" class="w-3.5 h-3.5 text-teal-600"></i>
                      </div>
                      <div class="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 text-xs text-slate-600 leading-relaxed">
                          <p>Scanning active listings for <span class="font-bold text-slate-800">"${text}"</span>...</p>
                          <div class="mt-3 pt-2 border-t border-slate-100 space-y-2">
                              <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                                  <div class="flex justify-between items-center mb-1">
                                      <span class="font-bold text-slate-700">CardioFlow</span>
                                      <span class="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Low Risk</span>
                                  </div>
                                  <div class="flex justify-between text-[10px] text-slate-500">
                                      <span>3 Active Years</span>
                                      <span>+12% Yield</span>
                                  </div>
                              </div>
                               <div class="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                                  <div class="flex justify-between items-center mb-1">
                                      <span class="font-bold text-slate-700">NeuroLink</span>
                                      <span class="text-[9px] font-bold text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded">Stock Breakout</span>
                                  </div>
                                  <div class="flex justify-between text-[10px] text-slate-500">
                                      <span>5 Active Years</span>
                                      <span>Phase II</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              `;
              container.insertAdjacentHTML('beforeend', botHtml);
              container.scrollTop = container.scrollHeight;
              if(window.lucide) window.lucide.createIcons();
          }, 1000);
      }
      // Initialize icons for chat immediately
      if(window.lucide) setTimeout(() => window.lucide.createIcons(), 100);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 w-full z-40 flex justify-center px-4">
<div className="glass-panel flex gap-12 transition-all hover:scale-[1.01] hover:shadow-md rounded-full pt-2 pr-2 pb-2 pl-5 shadow-sm gap-x-12 gap-y-12 items-center">
<a className="flex items-center gap-2 group" href="#">
<div className="w-7 h-7 bg-gradient-to-br from-teal-400 to-sky-500 rounded-full flex items-center justify-center text-white shadow-sm">
<i className="w-3.5 h-3.5 stroke-[2]" data-lucide="activity"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-900">
            Growthally
          </span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-teal-700 transition-colors text-xs font-medium text-slate-500 pt-2 pr-3 pb-2 pl-3" href="#">
            About us
          </a>
<a className="text-xs font-semibold text-teal-700 bg-teal-50/50 rounded-full pt-2 pr-3 pb-2 pl-3" href="/deals">
            Marketplace
          </a>
<a className="hover:text-teal-700 transition-colors text-xs font-medium text-slate-500 pt-2 pr-3 pb-2 pl-3" href="/homepage-opt1">Newsletter</a>
</div>
<a className="hidden md:flex text-[10px] hover:bg-slate-800 transition-all shadow-slate-200 font-semibold text-white tracking-wide bg-slate-900 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow-lg" href="#contact">
          Connect with us
        </a>
<button className="md:hidden p-2 text-slate-600">
<i className="w-4 h-4" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="overflow-hidden pt-32 pr-6 pb-12 pl-6 relative">
<div className="max-w-7xl mx-auto text-center relative z-10">
<h1 className="md:text-7xl text-5xl font-light text-slate-900 tracking-tighter mb-6">
          Active Deal Flow
        </h1>
<p className="max-w-2xl mx-auto text-lg text-slate-500 font-light leading-relaxed mb-10">
          A decentralized exchange for pharmaceutical IP. Verify clinical data,
          value assets with autonomous agents, and execute M&amp;A transactions
          on-chain.
        </p>

<div className="flex flex-col md:flex-row items-center justify-between gap-4 max-w-5xl mx-auto mt-12 bg-white rounded-2xl p-2 shadow-sm border border-slate-200/60">

<div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 px-2 no-scrollbar">
<button className="px-4 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-semibold uppercase tracking-wider shadow-md">
              All Assets
            </button>
<button className="px-4 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1">
              Oncology
              <span className="bg-slate-100 text-slate-400 px-1.5 rounded-md text-[9px]">
                12
              </span>
</button>
<button className="px-4 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1">
              Neurology
              <span className="bg-slate-100 text-slate-400 px-1.5 rounded-md text-[9px]">
                8
              </span>
</button>
<button className="px-4 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1">
              Cardio
              <span className="bg-slate-100 text-slate-400 px-1.5 rounded-md text-[9px]">
                5
              </span>
</button>
<button className="px-4 py-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-900 text-[11px] font-semibold uppercase tracking-wider transition-colors flex items-center gap-1">
              AI Agents
              <span className="bg-teal-50 text-teal-600 px-1.5 rounded-md text-[9px]">
                New
              </span>
</button>
</div>

<div className="relative w-full md:w-64">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" data-lucide="search"></i>
<input className="w-full bg-slate-50 border-none rounded-xl py-2 pl-10 pr-4 text-xs font-medium text-slate-700 focus:ring-2 focus:ring-teal-500/20 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Search ticker or mechanism..." type="text"/>
</div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-50/50 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
</header>

<section className="pr-6 pb-32 pl-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">

<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg shadow-slate-200">
<span className="font-bold text-lg tracking-tighter">Ae</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-teal-50 border border-teal-100 text-teal-700 text-[10px] uppercase font-bold tracking-wider">
                  Series A
                </span>
</div>

<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  Aether BioSciences
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Oncology • mRNA
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Developing a novel lipid nanoparticle delivery system for
                  solid tumors with 3x efficiency over current standards.
                </p>
</div>

<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Valuation Cap</span>
<span className="font-semibold text-slate-900">$45M</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Clinical Status</span>
<span className="font-semibold text-teal-600">
                    Phase II Ready
                  </span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>

<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="text-[11px] uppercase hover:bg-teal-600 transition-colors shadow-slate-200/50 font-bold text-white tracking-widest bg-slate-900 rounded-xl pt-3 pb-3 shadow-lg" onclick="toggleModal(true, 'Aether BioSciences', 'AE', '$45,000,000', '$12.40')">
                  Buy Equity
                </button>
<button className="text-[11px] uppercase hover:border-slate-300 hover:bg-slate-50 transition-colors font-bold text-slate-600 tracking-widest border-slate-200 border rounded-xl pt-3 pb-3" onclick="toggleModal(true, 'Aether BioSciences', 'AE', '$45,000,000', '$12.40')">
                  Sell
                </button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="brain-circuit"></i>
</div>
<span className="px-2.5 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] uppercase font-bold tracking-wider">
                  Seed
                </span>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  NeuroLink Ltd
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Neuro • AI Diagnostics
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Early-onset Alzheimer's detection via retinal scanning using
                  proprietary computer vision models.
                </p>
</div>
<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Valuation Cap</span>
<span className="font-semibold text-slate-900">$12M</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Patent</span>
<span className="font-semibold text-indigo-600">
                    Granted US-991
                  </span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="py-3 rounded-xl bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200/50" onclick="toggleModal(true, 'NeuroLink Ltd', 'NRL', '$12,000,000', '$4.20')">
                  Buy Equity
                </button>
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="toggleModal(true, 'NeuroLink Ltd', 'NRL', '$12,000,000', '$4.20')">
                  Sell
                </button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="heart-pulse"></i>
</div>
<span className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-100 text-sky-700 text-[10px] uppercase font-bold tracking-wider">
                  FDA Review
                </span>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  CardioFlow
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Cardio • Implants
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Non-invasive cardiac monitoring implants with 10-year battery
                  life. Currently under FDA 510(k) review.
                </p>
</div>
<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Valuation</span>
<span className="font-semibold text-slate-900">$85M</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Revenue</span>
<span className="font-semibold text-sky-600">$2.1M ARR</span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="py-3 rounded-xl bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200/50" onclick="toggleModal(true, 'CardioFlow', 'CFLO', '$85,000,000', '$28.15')">
                  Buy Equity
                </button>
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="toggleModal(true, 'CardioFlow', 'CFLO', '$85,000,000', '$28.15')">
                  Sell
                </button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-100">
<span className="font-bold text-lg tracking-tighter">Gx</span>
</div>
<span className="px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 text-[10px] uppercase font-bold tracking-wider">
                  Series B
                </span>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  GeneX Systems
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Genomics • CRISPR
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Scalable CRISPR-Cas9 delivery vectors for treating rare
                  genetic disorders.
                </p>
</div>
<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Valuation</span>
<span className="font-semibold text-slate-900">$210M</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Pipeline</span>
<span className="font-semibold text-emerald-600">3 Assets</span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="text-[11px] uppercase hover:bg-teal-600 transition-colors shadow-slate-200/50 font-bold text-white tracking-widest bg-slate-900 rounded-xl pt-3 pb-3 shadow-lg" onclick="toggleModal(true, 'GeneX Systems', 'GNX', '$210,000,000', '$55.80')">
                  Buy Equity
                </button>
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="toggleModal(true, 'GeneX Systems', 'GNX', '$210,000,000', '$55.80')">
                  Sell
                </button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shadow-lg shadow-orange-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="flask-conical"></i>
</div>
<span className="px-2.5 py-1 rounded-md bg-orange-50 border border-orange-100 text-orange-700 text-[10px] uppercase font-bold tracking-wider">
                  Seed Open
                </span>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  Helix Synthetic
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Synthetic Bio • Manufacturing
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Biological manufacturing platform reducing protein synthesis
                  costs by 40% using enzyme engineering.
                </p>
</div>
<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Target Raise</span>
<span className="font-semibold text-slate-900">$4M</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">IP Status</span>
<span className="font-semibold text-orange-600">Provisional</span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="text-[11px] uppercase hover:bg-teal-600 transition-colors shadow-slate-200/50 font-bold text-white tracking-widest bg-slate-900 rounded-xl pt-3 pb-3 shadow-lg" onclick="toggleModal(true, 'Helix Synthetic', 'HLX', '$4,000,000', '$2.10')">
                  Buy Equity
                </button>
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="toggleModal(true, 'Helix Synthetic', 'HLX', '$4,000,000', '$2.10')">
                  Sell
                </button>
</div>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-1 border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1">
<div className="relative p-7 rounded-[20px] bg-gradient-to-b from-slate-50/50 to-transparent h-full flex flex-col justify-between overflow-hidden">
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center text-white shadow-lg shadow-violet-100">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="network"></i>
</div>
<span className="px-2.5 py-1 rounded-md bg-violet-50 border border-violet-100 text-violet-700 text-[10px] uppercase font-bold tracking-wider">
                  Late Stage
                </span>
</div>
<div className="mb-8 relative z-10">
<h3 className="text-xl font-medium text-slate-900 mb-1 tracking-tight">
                  MediChain Data
                </h3>
<p className="text-[10px] text-slate-400 uppercase tracking-widest mb-4 font-semibold">
                  Infrastructure • Privacy
                </p>
<p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-3">
                  Decentralized patient data exchange compliant with HIPAA and
                  GDPR, allowing patients to monetize their own health records.
                </p>
</div>
<div className="absolute inset-x-0 bottom-24 mx-4 p-4 rounded-xl glass-panel opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20 flex flex-col gap-2">
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Token</span>
<span className="font-semibold text-slate-900">MCN</span>
</div>
<div className="flex justify-between items-center text-xs">
<span className="text-slate-500">Volume</span>
<span className="font-semibold text-violet-600">$450k / 24h</span>
</div>
<a className="mt-2 w-full flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-600 hover:text-teal-600 transition-colors py-2 border-t border-slate-200/50" href="#">
                  View Data Room
                  <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-2 gap-3 mt-auto relative z-30">
<button className="py-3 rounded-xl bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200/50" onclick="toggleModal(true, 'MediChain Data', 'MCN', '$65,000,000', '$0.85')">
                  Buy Equity
                </button>
<button className="py-3 rounded-xl border border-slate-200 text-slate-600 text-[11px] font-bold uppercase tracking-widest hover:border-slate-300 hover:bg-slate-50 transition-colors" onclick="toggleModal(true, 'MediChain Data', 'MCN', '$65,000,000', '$0.85')">
                  Sell
                </button>
</div>
</div>
</div>
</div>

<div className="flex justify-center mt-16 gap-3">
<button className="w-10 h-10 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-900 shadow-sm hover:border-teal-400 transition-colors">
            1
          </button>
<button className="w-10 h-10 rounded-full bg-transparent border border-transparent text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">
            2
          </button>
<button className="w-10 h-10 rounded-full bg-transparent border border-transparent text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors">
            3
          </button>
<button className="w-10 h-10 rounded-full bg-transparent border border-transparent text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors flex items-center justify-center">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#021214] text-white transition-colors duration-500" id="contact">

<div className="absolute inset-0 z-0">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[100px] animate-blob"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-800/20 rounded-full blur-[100px] animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-900/10 to-transparent rounded-full blur-3xl animate-spin-slow" style={{animationDuration: '20s'}}></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">

<div className="w-full md:w-5/12 pt-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-900/20 backdrop-blur-md mb-6">
<span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
<span className="text-[10px] uppercase tracking-widest font-semibold text-teal-200">
                Advisory Desk
              </span>
</div>
<h2 className="text-5xl font-light tracking-tighter mb-6">
              Intelligent
              <br/>
              Acquisition Support
            </h2>
<p className="text-slate-400 font-light leading-relaxed mb-8">
              Our specialized M&amp;A team works with institutional buyers to
              configure data rooms, verify IP chains, and execute large-block
              transactions.
            </p>
<div className="flex gap-4 mb-10">
<div className="flex -space-x-3">
<img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-bold text-white">Expert Team</span>
<span className="text-[10px] text-slate-400">
                  Available 24/7 for Due Diligence
                </span>
</div>
</div>
</div>

<div className="w-full md:w-7/12">
<div className="glass-dark rounded-3xl p-8 md:p-10 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      First Name
                    </label>
<input className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:bg-teal-900/20 transition-colors text-white placeholder-slate-500" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      Last Name
                    </label>
<input className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:bg-teal-900/20 transition-colors text-white placeholder-slate-500" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Corporate Email
                  </label>
<input className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:bg-teal-900/20 transition-colors text-white placeholder-slate-500" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      Deal Size Interest
                    </label>
<select className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition-colors text-slate-300">
<option className="bg-[#042f2e]">&lt; $10M</option>
<option className="bg-[#042f2e]">$10M - $50M</option>
<option className="bg-[#042f2e]">$50M - $250M</option>
<option className="bg-[#042f2e]">
                        Institutional / Block
                      </option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                      Asset Type
                    </label>
<select className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 transition-colors text-slate-300">
<option className="bg-[#042f2e]">Equity</option>
<option className="bg-[#042f2e]">IP / Patent Only</option>
<option className="bg-[#042f2e]">Data Rights</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                    Investment Thesis
                  </label>
<textarea className="w-full bg-[#0f3a3e]/40 border border-teal-800/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-400 focus:bg-teal-900/20 transition-colors text-white resize-none placeholder-slate-500" placeholder="Describe your acquisition criteria..." rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-teal-500 to-teal-400 text-[#021214] font-bold uppercase tracking-widest text-xs py-4 rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all transform hover:-translate-y-1">
                  Initiate Advisory Contact
                </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#010e10] text-white py-16 border-t border-teal-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
<i className="w-3 h-3 text-[#010e10] stroke-[3]" data-lucide="activity"></i>
</div>
<span className="text-xl font-medium tracking-tight">Growthally</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-slate-400">
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest mb-2">
                General
              </span>
<a className="hover:text-teal-400 transition-colors" href="#">
                Developer
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Academy
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Ecosystem
              </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest mb-2">
                Tools
              </span>
<a className="hover:text-teal-400 transition-colors" href="#">
                Explorer
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Auto Status
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Telemetry
              </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest mb-2">
                Products
              </span>
<a className="hover:text-teal-400 transition-colors" href="#">
                Auto Suite
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Auto ID
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Space Acres
              </a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-bold uppercase tracking-widest mb-2">
                About
              </span>
<a className="hover:text-teal-400 transition-colors" href="#">Team</a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Brand Kit
              </a>
<a className="hover:text-teal-400 transition-colors" href="#">
                Careers
              </a>
</div>
</div>
</div>
<div className="border-t border-teal-900/20 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest gap-4">
<p>© 2025 Growthally Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
              Terms of Use
            </a>
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans">

<div className="w-[340px] h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col transition-all duration-300 origin-bottom-right transform scale-90 opacity-0 pointer-events-none invisible mb-2" id="ai-chat-window">

<div className="bg-[#032b2e] p-4 flex justify-between items-center rounded-t-2xl border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-sky-500 flex items-center justify-center shadow-lg">
<i className="w-4 h-4 text-white" data-lucide="bot"></i>
</div>
<div>
<h5 className="text-xs font-bold text-white uppercase tracking-wider">
                Deal Analyst AI
              </h5>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
<span className="text-[10px] text-slate-400 font-medium">
                  Online • v2.4
                </span>
</div>
</div>
</div>
<button className="p-1.5 rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors" onclick="toggleChat()">
<i className="w-4 h-4" data-lucide="x"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4" id="chat-messages">
<div className="flex justify-center my-2">
<span className="text-[10px] text-slate-400 font-medium bg-slate-200/50 px-2 py-1 rounded-full">
              Today
            </span>
</div>

<div className="flex gap-3 max-w-[90%]">
<div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mt-1 shadow-sm">
<i className="w-3.5 h-3.5 text-teal-600" data-lucide="bot"></i>
</div>
<div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 text-xs text-slate-600 leading-relaxed">
<p className="mb-2 font-medium text-slate-900">
                Hello! I'm your M&amp;A assistant.
              </p>
<p>I can help you screen companies based on key metrics:</p>
<ul className="mt-2 space-y-1.5">
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-teal-500"></span>
                  Profitability &amp; Pricing
                </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-teal-500"></span>
                  Field &amp; Active Years
                </li>
<li className="flex items-center gap-2">
<span className="w-1 h-1 rounded-full bg-teal-500"></span>
                  Stock Patterns &amp; Stake Risk
                </li>
</ul>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100">
<form className="relative flex items-center gap-2" onsubmit="handleChatSubmit(event)">
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-4 pr-10 text-xs font-medium text-slate-700 focus:outline-none focus:border-teal-500 focus:bg-white transition-all placeholder:text-slate-400" id="chat-input" placeholder="Ask about risk, yield, or field..." type="text"/>
<button className="p-2.5 bg-[#032b2e] rounded-xl text-white hover:bg-teal-600 transition-colors shadow-lg shadow-slate-200" type="submit">
<i className="w-3.5 h-3.5" data-lucide="send"></i>
</button>
</form>
</div>
</div>

<button className="relative w-14 h-14 bg-[#032b2e] hover:bg-teal-900 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-105 transition-all duration-300 border border-white/10 z-50 group" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500 border-2 border-[#032b2e]"></span>
</span>
<i className="w-6 h-6 transition-transform group-hover:rotate-[-10deg]" data-lucide="message-square-text"></i>
</button>
</div>

<div aria-hidden="true" className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm hidden transition-opacity duration-300 opacity-0" id="modal-overlay">
<div className="flex items-center justify-center min-h-screen px-4 py-6">
<div className="bg-[#FAFAF9] rounded-[40px] shadow-2xl w-full max-w-5xl overflow-hidden relative transform transition-all scale-95 opacity-0" id="modal-content">

<div className="p-8 md:p-12">

<div className="flex justify-between items-start mb-8">
<div>
<h2 className="text-3xl font-light text-slate-900 tracking-tight" id="modal-title">
                  Aether BioSciences
                </h2>
<div className="flex items-center gap-2 mt-1">
<span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-600 uppercase tracking-wider" id="modal-ticker">
                    AE
                  </span>
<span className="text-slate-400 text-sm font-light">
                    Oncology • Series A
                  </span>
</div>
</div>
<button className="p-2 rounded-full hover:bg-slate-200 transition-colors" onclick="toggleModal(false)">
<i className="w-6 h-6 text-slate-500" data-lucide="x"></i>
</button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-12 bg-gradient-to-br from-indigo-50/80 via-white to-teal-50/80 rounded-[30px] p-8 border border-white/50 shadow-sm relative overflow-hidden">
<div className="flex justify-between items-start mb-8 relative z-10">
<div>
<p className="text-slate-500 text-xs font-medium uppercase tracking-widest mb-1">
                      Current Valuation
                    </p>
<h3 className="text-4xl font-light text-slate-900 tracking-tighter" id="modal-valuation">
                      $45,000,000
                      <span className="text-slate-400">.00</span>
</h3>
</div>
<div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-100">
<button className="px-4 py-1.5 rounded-full text-[10px] font-bold bg-slate-900 text-white shadow-md">
                      USD
                    </button>
<button className="px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-400 hover:text-slate-600">
                      ETH
                    </button>
</div>
</div>

<div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 relative z-10 my-6">

<div className="w-48 h-48 rounded-full glass-panel flex flex-col items-center justify-center text-center -mr-4 z-10 hover:z-20 transition-all hover:scale-105 duration-500">
<span className="text-xs text-slate-500 font-medium mb-1">
                      Share Price
                    </span>
<span className="text-2xl font-semibold text-slate-900" id="modal-price">
                      $12.40
                    </span>
<span className="text-[10px] text-teal-600 font-bold bg-teal-50 px-2 py-0.5 rounded-full mt-2">
                      +2.4%
                    </span>
</div>

<div className="w-56 h-56 rounded-full bg-gradient-to-b from-teal-400 to-indigo-500 shadow-xl shadow-indigo-200 flex flex-col items-center justify-center text-center text-white z-20 transform hover:scale-105 duration-500 border-4 border-white/20">
<span className="text-xs text-teal-100 font-medium mb-1 uppercase tracking-widest">
                      Available Equity
                    </span>
<span className="text-3xl font-bold tracking-tight">
                      $23,558
                    </span>
<span className="text-[10px] text-white/80 mt-1">
                      Class B Common
                    </span>
</div>

<div className="w-48 h-48 rounded-full glass-panel flex flex-col items-center justify-center text-center -ml-4 z-10 hover:z-20 transition-all hover:scale-105 duration-500">
<span className="text-xs text-slate-500 font-medium mb-1">
                      24h Volume
                    </span>
<span className="text-2xl font-semibold text-slate-900">
                      $39,792
                    </span>
<span className="text-[10px] text-slate-400 mt-2">
                      1,240 Trades
                    </span>
</div>
</div>

<div className="absolute top-8 right-8 hidden md:flex flex-col gap-3">
<button className="px-6 py-3 rounded-2xl bg-white border border-slate-200 text-xs font-bold text-slate-600 shadow-sm hover:bg-slate-50 transition-colors">
                    View Cap Table
                  </button>
<button className="px-6 py-3 rounded-2xl bg-slate-900 text-xs font-bold text-white shadow-lg shadow-slate-200 hover:bg-slate-800 transition-colors">
                    Trade History
                  </button>
</div>
</div>

<div className="lg:col-span-5 bg-slate-100/50 rounded-[30px] p-8 border border-slate-200/50">
<div className="flex justify-between items-center mb-10">
<h4 className="text-sm font-semibold text-slate-700">
                    Volume Statistic
                  </h4>
<button className="bg-white px-3 py-1 rounded-full text-[10px] font-bold text-slate-500 shadow-sm">
                    Monthly
                  </button>
</div>
<div className="flex items-end justify-between h-40 gap-2">

<div className="w-full bg-slate-200 rounded-t-xl h-[40%] hover:bg-slate-300 transition-colors relative group"></div>
<div className="w-full bg-slate-200 rounded-t-xl h-[55%] hover:bg-slate-300 transition-colors relative group"></div>
<div className="w-full bg-gradient-to-b from-indigo-400 to-teal-400 rounded-t-xl h-[85%] shadow-lg shadow-indigo-200 relative group">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold py-1 px-2 rounded-lg opacity-100 shadow-xl">
                      $45k
                      <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
</div>
</div>
<div className="w-full bg-slate-200 rounded-t-xl h-[60%] hover:bg-slate-300 transition-colors relative group"></div>
<div className="w-full bg-slate-200 rounded-t-xl h-[45%] hover:bg-slate-300 transition-colors relative group"></div>
</div>
<div className="flex justify-between mt-4 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
<span>May</span>
<span>Jun</span>
<span className="text-slate-900">Jul</span>
<span>Aug</span>
<span>Sep</span>
</div>
</div>

<div className="lg:col-span-7 bg-gradient-to-br from-blue-500 to-teal-400 rounded-[30px] p-8 text-white shadow-xl shadow-teal-100 relative overflow-hidden group">
<div className="relative z-10 flex justify-between items-start">
<div>
<h4 className="text-sm font-medium text-white/90">
                      Growth Metrix
                    </h4>
<div className="mt-4">
<span className="text-5xl font-light tracking-tighter">
                        85%
                      </span>
<span className="block text-xs text-white/70 mt-1 font-light">
                        Growth since last round
                      </span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-white" data-lucide="refresh-cw"></i>
</button>
</div>

<div className="absolute bottom-0 left-0 right-0 h-48 z-0">
<svg className="w-full h-full opacity-60 group-hover:opacity-80 transition-opacity" viewbox="0 0 400 150">
<path d="M0,120 C50,120 80,90 120,100 C160,110 180,60 220,70 C260,80 300,30 350,40 C380,45 400,20 400,20" fill="none" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<circle className="animate-pulse" cx="350" cy="40" fill="white" r="4"></circle>
<text fill="white" fontFamily="Inter" fontSize="12" text-anchor="middle" x="350" y="70">
                      16.75k
                    </text>
</svg>
</div>
<div className="absolute bottom-6 left-8 text-xs font-bold text-white/60 z-10">
                  7.26k
                </div>
</div>
</div>

<div className="mt-8 flex gap-4">
<button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-lg transition-transform hover:-translate-y-0.5">
                Confirm Purchase
              </button>
<button className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs transition-colors">
                Place Limit Order
              </button>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
