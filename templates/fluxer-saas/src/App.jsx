import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



    document.addEventListener('click', function(e) {
          const trigger = e.target.closest('[data-dropdown-trigger]');
          const activeDropdown = document.querySelector('[data-dropdown-content]:not(.invisible)');
          
          if (trigger) {
            const targetId = trigger.dataset.dropdownTrigger;
            const targetContent = document.getElementById(targetId);
            
            if (activeDropdown && activeDropdown !== targetContent) {
              activeDropdown.classList.add('invisible', 'opacity-0', 'translate-y-2');
              activeDropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
              const activeTriggerIcon = document.querySelector(`[data-dropdown-trigger="${activeDropdown.id.replace('-content','').replace('-dropdown','-dropdown')}"] svg`);
              if(activeTriggerIcon) activeTriggerIcon.style.transform = 'rotate(0deg)';
            }
            
            const isClosed = targetContent.classList.contains('invisible');
            if (isClosed) {
              targetContent.classList.remove('invisible', 'opacity-0', 'translate-y-2');
              targetContent.classList.add('visible', 'opacity-100', 'translate-y-0');
              trigger.querySelector('svg').style.transform = 'rotate(180deg)';
            } else {
              targetContent.classList.add('invisible', 'opacity-0', 'translate-y-2');
              targetContent.classList.remove('visible', 'opacity-100', 'translate-y-0');
              trigger.querySelector('svg').style.transform = 'rotate(0deg)';
            }
          } else if (activeDropdown && !e.target.closest('[data-dropdown-content]')) {
            activeDropdown.classList.add('invisible', 'opacity-0', 'translate-y-2');
            activeDropdown.classList.remove('visible', 'opacity-100', 'translate-y-0');
            const activeTrigger = document.querySelector(`button[data-dropdown-trigger="${activeDropdown.id}"]`);
            if(activeTrigger) activeTrigger.querySelector('svg').style.transform = 'rotate(0deg)';
          }
        });
  


    function toggleFaq(button) {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.icon-plus');
      const isExpanded = content.style.gridTemplateRows === '1fr';

      // Reset all others
      document.querySelectorAll('.faq-content').forEach(el => {
        el.style.gridTemplateRows = '0fr';
        el.previousElementSibling.querySelector('.icon-plus').style.transform = 'rotate(0deg)';
        el.previousElementSibling.querySelector('.icon-plus').style.color = 'rgba(255,255,255,0.4)';
      });

      // Toggle current
      if (!isExpanded) {
        content.style.gridTemplateRows = '1fr';
        icon.style.transform = 'rotate(45deg)';
        icon.style.color = '#F97316'; // Orange-500
      }
    }
  


      lucide.createIcons();

      const plans = {
          creator: { title: "Creator Plan", price: "$29", features: ["AI Trend Analysis", "3 Platform Connections", "Basic Auto-Reply"] },
          pro: { title: "Pro Team", price: "$79", features: ["Advanced Analytics", "10 Platform Connections", "Team Collaboration"] },
          agency: { title: "Agency", price: "$199", features: ["Unlimited Accounts", "API Access", "White-label Reporting"] }
      };

      function setPlan(plan) {
          // Update Buttons
          document.querySelectorAll('section button[id^="btn-"]').forEach(btn => {
              btn.className = "w-full text-left p-4 rounded-lg border border-white/[0.06] text-white/60 hover:text-white hover:bg-white/[0.02] transition-all group";
              // remove highlight
              if(btn.querySelector('.absolute')) btn.querySelector('.absolute').remove();
              if(btn.querySelector('.w-2.h-2')) btn.querySelector('.w-2.h-2').remove();
          });

          const activeBtn = document.getElementById('btn-' + plan);
          activeBtn.className = "w-full text-left p-4 rounded-lg bg-white/[0.04] border border-orange-500/40 text-white transition-all group relative overflow-hidden";
          activeBtn.insertAdjacentHTML('afterbegin', '<div class="absolute inset-0 bg-orange-500/5"></div>');
          activeBtn.querySelector('div.flex').insertAdjacentHTML('beforeend', '<span class="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>');

          // Update SVG Lines
          ['creator', 'pro', 'agency'].forEach(p => {
              const path = document.getElementById('path-' + p);
              if(p === plan) {
                  path.setAttribute('stroke', '#F97316');
                  path.setAttribute('class', 'animate-flow');
              } else {
                  path.setAttribute('stroke', 'rgba(255,255,255,0.1)');
                  path.setAttribute('class', '');
              }
          });

          // Update Text
          document.getElementById('plan-title').textContent = plans[plan].title;
          document.getElementById('plan-price').textContent = plans[plan].price;

          const featureList = document.getElementById('plan-features');
          featureList.innerHTML = '';
          plans[plan].features.forEach(f => {
              featureList.insertAdjacentHTML('beforeend', `
                  <li class="flex items-center gap-3 text-sm text-white/80">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-orange-400"><path d="M20 6 9 17l-5-5"/></svg>
                      ${f}
                  </li>
              `);
          });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 linear-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-500/10 blur-[120px] rounded-full opacity-40"></div>
</div>

<nav className="fixed border-white/[0.06] supports-[backdrop-filter]:bg-[#0B0C0E]/60 bg-[#0B0C0E]/80 w-full z-50 border-b top-0 backdrop-blur-xl">
<div className="flex h-14 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex gap-x-2 gap-y-2 items-center" onclick="window.location.href='/home'" role="button">
<div className="relative flex items-center justify-center w-6 h-6">
<svg className="w-5 h-5 text-orange-400/90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
<span className="text-sm font-medium text-white/90 tracking-tight">
        Fluxer
      </span>
</div>

<div className="hidden md:flex items-center gap-6">

<div className="relative group">
<button className="flex gap-1.5 text-[13px] hover:text-white transition-colors focus:outline-none text-white/60 pt-4 pb-4 gap-x-1.5 gap-y-1.5 items-center" data-dropdown-trigger="products-dropdown">
          Products
          <svg className="opacity-50 transition-transform duration-200" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 translate-y-2 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[340px] transition-all duration-200 ease-out z-50" data-dropdown-content="" id="products-dropdown">
<div className="bg-[#0E0F11] border border-white/[0.08] rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] p-2 backdrop-blur-3xl overflow-hidden ring-1 ring-white/[0.05]">
<div className="grid gap-0.5">
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="/fluxerai">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Fluxer AI</span>
<span className="text-[12px] text-white/50 leading-snug">Design at the speed of thought</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<path d="M3 9h18"></path>
<path d="M9 21V9"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Visual Editor</span>
<span className="text-[12px] text-white/50 leading-snug">Total design freedom</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Team Work</span>
<span className="text-[12px] text-white/50 leading-snug">Comment, review, and approve</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">CMS</span>
<span className="text-[12px] text-white/50 leading-snug">Flexible content modeling</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path>
<path d="M12 12v9"></path>
<path d="m16 16-4-4-4 4"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Global Hosting</span>
<span className="text-[12px] text-white/50 leading-snug">Edge network deployment</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">SEO &amp; Social</span>
<span className="text-[12px] text-white/50 leading-snug">Fine-tune your visibility</span>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="relative group">
<button className="flex text-[13px] hover:text-white transition-colors focus:outline-none text-white/60 pt-4 pb-4 gap-x-1.5 gap-y-1.5 items-center" data-dropdown-trigger="templates-dropdown">
          Resources
          <svg className="transition-transform duration-200 opacity-50 w-[12px] h-[12px]" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m6 9 6 6 6-6"></path>
</svg>
</button>
<div className="invisible opacity-0 translate-y-2 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] transition-all duration-200 ease-out z-50" data-dropdown-content="" id="templates-dropdown">
<div className="bg-[#0E0F11] border border-white/[0.08] rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] p-2 backdrop-blur-3xl overflow-hidden ring-1 ring-white/[0.05]">
<div className="grid gap-0.5">
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
<path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
<path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Startup</span>
<span className="text-[12px] text-white/50 leading-snug">Launch your business</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Agency</span>
<span className="text-[12px] text-white/50 leading-snug">For creative teams</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="/marketplace">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Marketplace</span>
<span className="text-[12px] text-white/50 leading-snug">Templates and Components</span>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="relative group">
<button className="flex gap-1.5 text-[13px] hover:text-white transition-colors focus:outline-none text-white/60 pt-4 pb-4 gap-x-1.5 gap-y-1.5 items-center" data-dropdown-trigger="resources-dropdown">
          Solutions
          <svg className="opacity-50 transition-transform duration-200" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 translate-y-2 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] transition-all duration-200 ease-out z-50" data-dropdown-content="" id="resources-dropdown">
<div className="bg-[#0E0F11] border border-white/[0.08] rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] p-2 backdrop-blur-3xl overflow-hidden ring-1 ring-white/[0.05]">
<div className="grid gap-0.5">
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Blog</span>
<span className="text-[12px] text-white/50 leading-snug">Latest updates &amp; stories</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="4"></circle>
<line x1="4.93" x2="9.17" y1="4.93" y2="9.17"></line>
<line x1="14.83" x2="19.07" y1="14.83" y2="19.07"></line>
<line x1="14.83" x2="19.07" y1="9.17" y2="4.93"></line>
<line x1="14.83" x2="9.17" y1="14.83" y2="19.07"></line>
<line x1="4.93" x2="9.17" y1="19.07" y2="14.83"></line>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Help Center</span>
<span className="text-[12px] text-white/50 leading-snug">Everything you need to know</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="/tutorials">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Tutorials</span>
<span className="text-[12px] text-white/50 leading-snug">Learn how to build</span>
</div>
</a>
</div>
</div>
</div>
</div>

<div className="relative group">
<button className="flex text-[13px] hover:text-white transition-colors focus:outline-none text-white/60 pt-4 pb-4 gap-x-1.5 gap-y-1.5 items-center" data-dropdown-trigger="community-dropdown">
          Community
          <svg className="opacity-50 transition-transform duration-200" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="invisible opacity-0 translate-y-2 absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[320px] transition-all duration-200 ease-out z-50" data-dropdown-content="" id="community-dropdown">
<div className="bg-[#0E0F11] border border-white/[0.08] rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.8)] p-2 backdrop-blur-3xl overflow-hidden ring-1 ring-white/[0.05]">
<div className="grid gap-0.5">
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Discord</span>
<span className="text-[12px] text-white/50 leading-snug">Chat with the community</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="#">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Twitter</span>
<span className="text-[12px] text-white/50 leading-snug">Follow for updates</span>
</div>
</a>
<a className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/[0.04] transition-colors group" href="/events">
<div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.04] flex items-center justify-center text-white shrink-0 group-hover:bg-white/[0.1] transition-colors">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
</svg>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-[13px] font-medium text-white group-hover:text-white">Events</span>
<span className="text-[12px] text-white/50 leading-snug">Meetups and workshops</span>
</div>
</a>
</div>
</div>
</div>
</div>
<a className="text-[13px] hover:text-white transition-colors text-white/60" href="/pricing">
        Pricing
      </a>
</div>

<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<a className="hidden sm:block text-[13px] hover:text-white transition-colors text-white/60" href="/login">
        Log in
      </a>

<button className="md:hidden text-white/60 hover:text-white transition-colors focus:outline-none" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-white/[0.06] bg-[#0B0C0E] max-h-[80vh] overflow-y-auto" id="mobile-menu">
<div className="px-6 py-4 space-y-4">

<div className="space-y-3">
<button className="flex items-center justify-between w-full text-sm font-medium text-white/80" onclick="document.getElementById('mobile-products').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
          Products
          <svg className="transition-transform duration-200 text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden pl-4 space-y-3 border-l border-white/10 ml-2" id="mobile-products">
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="/fluxerai">Fluxer AI</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Visual Editor</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Team Work</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">CMS</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Global Hosting</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">SEO &amp; Social</a>
</div>
</div>

<div className="space-y-3">
<button className="flex items-center justify-between w-full text-sm font-medium text-white/80" onclick="document.getElementById('mobile-resources').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
          Resources
          <svg className="transition-transform duration-200 text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden pl-4 space-y-3 border-l border-white/10 ml-2" id="mobile-resources">
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Startup</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Agency</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="/marketplace">Marketplace</a>
</div>
</div>

<div className="space-y-3">
<button className="flex items-center justify-between w-full text-sm font-medium text-white/80" onclick="document.getElementById('mobile-solutions').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
          Solutions
          <svg className="transition-transform duration-200 text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden pl-4 space-y-3 border-l border-white/10 ml-2" id="mobile-solutions">
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Blog</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Help Center</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="/tutorials">Tutorials</a>
</div>
</div>

<div className="space-y-3">
<button className="flex items-center justify-between w-full text-sm font-medium text-white/80" onclick="document.getElementById('mobile-community').classList.toggle('hidden'); this.querySelector('svg').classList.toggle('rotate-180')">
          Community
          <svg className="transition-transform duration-200 text-white/40" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden pl-4 space-y-3 border-l border-white/10 ml-2" id="mobile-community">
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Discord</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="#">Twitter</a>
<a className="block text-sm text-white/60 hover:text-white transition-colors" href="/events">Events</a>
</div>
</div>
<a className="block text-sm font-medium text-white/80 py-2 hover:text-white transition-colors" href="/#pricing">Pricing</a>
<div className="pt-4 border-t border-white/10">
<a className="block w-full py-2.5 text-center text-sm font-medium text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors" href="#">Log in</a>
</div>
</div>
</div>

</nav>

<main className="z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col animate-fade-up opacity-0 items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
</span>
<span className="text-xs font-medium text-orange-400/90 tracking-tight">
              Fluxer 2.0 is live
            </span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
            The internet is
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-orange-400 to-amber-500">
              your canvas.
            </span>
</h1>
<p className="text-lg text-white/60 max-w-lg mb-10 leading-relaxed font-light">
            Fluxer is where teams design and publish stunning sites. From start
            to finish, all in one place. No code required.
          </p>
<div className="flex flex-wrap items-center gap-4">
<button className="shine-button h-12 px-8 rounded-full bg-[#EBEBEB] text-[#0B0C0E] text-[15px] font-medium hover:bg-white transition-colors shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Start for free
            </button>
<button className="h-12 px-8 rounded-full border border-white/[0.08] bg-transparent text-white/80 text-[15px] font-medium hover:bg-white/[0.04] transition-colors flex items-center gap-2">
              Watch video
              <svg className="lucide lucide-play-circle text-white/40 ml-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
</button>
</div>
</div>

<div className="relative opacity-0 animate-fade-up delay-2">

<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent blur-[60px] rounded-full opacity-40"></div>

<div className="relative w-full max-w-md ml-auto bg-[#131418] rounded-2xl border border-white/[0.08] p-6 shadow-2xl shadow-black/50 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

<div className="relative z-10 flex justify-between items-start mb-8">
<div className="">
<div className="text-[13px] text-white/40 font-medium mb-1 uppercase tracking-wider">
                  OPTIMIZATION
                </div>
<h3 className="text-xl text-white font-medium tracking-tight">
                  Site Performance
                </h3>
</div>
<div className="px-2 py-1 bg-orange-500/10 border border-orange-500/20 rounded text-[11px] font-medium text-orange-400 flex items-center gap-1.5">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3 h-3" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                100
              </div>
</div>

<div className="relative z-10 h-32 w-full mb-8">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="glowGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#F97316" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#F97316" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path className="drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]" d="M0 80 C 40 80, 50 60, 80 50 C 110 40, 130 20, 160 15 C 180 10, 190 5, 200 0" fill="none" stroke="#F97316" strokeLinecap="round" strokeWidth="2"></path>
<path className="" d="M0 80 C 40 80, 50 60, 80 50 C 110 40, 130 20, 160 15 C 180 10, 190 5, 200 0 V 100 H 0 Z" fill="url(#glowGradient)" stroke="none"></path>
</svg>

<div className="absolute top-0 right-0 w-3 h-3 bg-[#131418] border-2 border-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,1)]"></div>
</div>

<div className="relative z-10 space-y-3">
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></div>
<span className="text-[13px] text-white/80">
                    Lighthouse Score
                  </span>
</div>
<span className="text-[13px] font-medium text-white">100</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.03] border border-white/[0.04]">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.4)] bg-orange-500"></div>
<span className="text-[13px] text-white/80">
                    First Contentful Paint
                  </span>
</div>
<span className="text-[13px] font-medium text-white">0.2s</span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="animate-fade-up delay-3 opacity-0 max-w-7xl mt-40 mr-auto ml-auto pr-6 pb-32 pl-6">
<div className="border-white/[0.08] overflow-hidden group bg-[#0E0F11] border rounded-xl relative shadow-2xl">

<div className="absolute top-[-20%] left-[20%] w-[60%] h-[400px] bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>

<div className="border-white/[0.06] flex h-12 border-b px-4 items-center justify-between bg-[#0E0F11] relative z-20">

<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
</div>
<div className="h-4 w-[1px] bg-white/[0.08]"></div>
<div className="flex items-center gap-1 text-white/40 hover:text-white transition-colors cursor-pointer">
<svg className="lucide lucide-menu" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</div>

<div className="flex items-center gap-1 ml-2">
<button className="p-1.5 rounded bg-white/[0.1] text-white"><svg className="lucide lucide-mouse-pointer-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><path className="" d="m12 6 2-2h6a2 2 0 0 1 2 2v13.5"></path><path className="" d="m14.7 15.3 4.1 4.1a2 2 0 0 1-2.8 2.8l-4.1-4.1"></path><path d="m8.97 19.9-2.2 2.3a2.02 2.02 0 0 1-2.83 0l-1.2-1.23a2 2 0 0 1 0-2.83l2.3-2.2"></path><path className="" d="m9.7 13.7 2.3 2.3a2 2 0 0 0 2.8 0L21 9.8a2 2 0 0 0 0-2.83L17 3"></path></svg></button>
<button className="p-1.5 rounded hover:bg-white/[0.04] text-white/40"><svg className="lucide lucide-layout-template" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg></button>
<button className="p-1.5 rounded hover:bg-white/[0.04] text-white/40"><svg className="lucide lucide-type" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14"><line x1="4" x2="20" y1="6" y2="6"></line><line x1="9" x2="15" y1="6" y2="6"></line><line x1="12" x2="12" y1="6" y2="21"></line></svg></button>
</div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 bg-[#0B0C0E] border border-white/[0.06] rounded-md px-3 py-1 shadow-sm">
<svg className="text-orange-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
<span className="text-[12px] text-white/80 font-medium">Fluxer Project</span>
<span className="text-[12px] text-white/20">/</span>
<span className="text-[12px] text-white/40">Home</span>
</div>

<div className="flex items-center gap-4">
<div className="flex items-center -space-x-2">
<div className="w-6 h-6 rounded-full border border-[#0E0F11] flex items-center justify-center text-[9px] font-bold text-white bg-orange-500">JD</div>
<div className="w-6 h-6 rounded-full bg-purple-500 border border-[#0E0F11] flex items-center justify-center text-[9px] font-bold text-white">AS</div>
<div className="w-6 h-6 rounded-full bg-white/[0.1] border border-[#0E0F11] border-dashed flex items-center justify-center text-[9px] text-white/40">+2</div>
</div>
<div className="w-[1px] h-4 bg-white/[0.08]"></div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-white/40 font-mono">100%</span>
</div>
<button className="bg-orange-600 text-[11px] font-medium text-white px-3 py-1.5 rounded hover:bg-orange-700 transition-colors shadow-lg shadow-orange-900/20">
                    Publish
                </button>
</div>
</div>

<div className="grid grid-cols-12 min-h-[650px] bg-[#0B0C0E]/50 backdrop-blur-sm relative">

<div className="hidden md:flex flex-col col-span-2 border-r border-white/[0.06] bg-[#0B0C0E]/40">

<div className="p-3 border-b border-white/[0.06]">
<div className="relative group">
<svg className="absolute left-2.5 top-2 w-3.5 h-3.5 text-white/20 group-focus-within:text-white/40 transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<input className="w-full bg-white/[0.03] border border-transparent focus:border-white/[0.08] hover:bg-white/[0.05] rounded-md py-1.5 pl-8 pr-2 text-[12px] text-white placeholder-white/20 focus:outline-none transition-all" placeholder="Search layers" type="text"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-2 space-y-4">
<div className="">
<div className="flex items-center justify-between px-2 mb-2">
<div className="text-[11px] font-medium text-white/40 uppercase">Pages</div>
<svg className="w-3 h-3 text-white/20 hover:text-white/60 cursor-pointer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<ul className="space-y-0.5">
<li className="px-2 py-1.5 rounded-md bg-white/[0.06] text-[12px] text-white font-medium flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-2">
<svg className="w-3.5 h-3.5 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                                    Home
                                </div>
</li>
</ul>
</div>
<div>
<div className="text-[11px] font-medium text-white/40 uppercase mb-2 px-2">Layers</div>
<ul className="space-y-0.5">
<li className="px-2 py-1.5 rounded-md text-[12px] text-white/80 hover:bg-white/[0.03] flex items-center gap-1.5 cursor-pointer">
<svg className="w-3 h-3 text-white/40 -rotate-90" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
<svg className="w-3.5 h-3.5 text-purple-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
                                Desktop
                            </li>

</ul>
</div>
</div>

<div className="border-t border-white/[0.06] p-2">
<div className="px-2 py-2 flex items-center justify-between text-[11px] font-medium text-white/40 uppercase cursor-pointer hover:text-white/60">
<span>Assets</span>
<svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-10 lg:col-span-7 bg-[#0B0C0E] relative overflow-hidden flex flex-col">

<div className="h-6 w-full border-b border-white/[0.06] bg-[#0E0F11] flex items-end px-2">
<div className="flex justify-between w-full text-[9px] text-white/30 font-mono select-none">
<span>0</span><span className="">100</span><span className="">200</span><span>300</span><span>400</span><span>500</span><span>600</span><span>700</span><span>800</span>
</div>
</div>

<div className="flex-1 p-8 relative">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="relative group border border-transparent hover:border-orange-500/30 transition-colors p-4 -m-4 rounded-xl">
<div className="mb-8 relative">

<div className="absolute -inset-4 border border-orange-500 rounded-lg pointer-events-none z-10 flex flex-col justify-between">
<div className="absolute -top-3 left-2 bg-orange-500 text-[9px] text-white px-1.5 py-0.5 rounded font-medium">H2 · Heading</div>
<div className="w-2 h-2 bg-white border border-orange-500 absolute -top-1 -left-1"></div>
<div className="w-2 h-2 bg-white border border-orange-500 absolute -top-1 -right-1"></div>
<div className="w-2 h-2 bg-white border border-orange-500 absolute -bottom-1 -left-1"></div>
<div className="w-2 h-2 bg-white border border-orange-500 absolute -bottom-1 -right-1"></div>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
<span className="text-xs font-medium text-orange-400">
                                Desktop · 1200px
                                </span>
</div>
<h2 className="text-3xl font-medium tracking-tight text-white font-serif">
                                The browser that works for you
                            </h2>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="p-4 rounded-lg bg-[#0E0F11] border border-white/[0.06] shadow-xl">
<div className="flex justify-between items-start mb-4">
<span className="text-[11px] text-white/40 uppercase tracking-wider font-medium">Width</span>
<svg className="w-3.5 h-3.5 text-orange-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6Z"></path><path d="M6 10V6"></path><path d="M9 10V6"></path><path d="M12 10V6"></path><path d="M15 10V6"></path><path d="M18 10V6"></path></svg>
</div>
<div className="text-2xl text-white font-medium tracking-tight font-mono">
                                    1fr
                                </div>
<div className="text-[10px] text-orange-400 mt-1 flex items-center gap-1">
<svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                    Fill Container
                                </div>
</div>

<div className="p-4 rounded-lg bg-[#0E0F11] border border-white/[0.06] shadow-xl relative overflow-hidden">
<div className="absolute right-0 top-0 p-2 opacity-50"><svg className="w-4 h-4 text-white/20" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
<div className="text-[11px] text-white/40 uppercase tracking-wider font-medium mb-3">Generated CSS</div>
<div className="font-mono text-[10px] text-white/70 leading-relaxed">
<span className="text-purple-400">display</span>: <span className="text-orange-300">grid</span>;
                                    <span className="text-purple-400">gap</span>: <span className="text-orange-300">1rem</span>;
                                    <span className="text-purple-400">color</span>: <span className="text-white">#fff</span>;
                                </div>
</div>

<div className="col-span-2 p-3 rounded-lg bg-gradient-to-r from-orange-500/10 to-transparent border border-orange-500/20 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/20 flex items-center justify-center text-orange-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v8"></path><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="m8 17 4-4 4 4"></path></svg>
</div>
<div className="">
<div className="text-[12px] text-white font-medium">Assets Ready</div>
<div className="text-[10px] text-white/50">3 images optimized</div>
</div>
</div>
<button className="h-7 px-3 rounded text-[10px] font-medium bg-white/10 hover:bg-white/20 text-white transition-colors">Download</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#131418] border border-white/[0.08] rounded-full px-4 py-2 flex items-center gap-4 shadow-2xl z-20">
<button className="text-white/40 hover:text-white transition-colors" title="Hand Tool"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg></button>
<div className="w-[1px] h-4 bg-white/[0.1]"></div>
<button className="text-orange-400" title="Select"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="m12 6 2-2h6a2 2 0 0 1 2 2v13.5"></path><path d="m14.7 15.3 4.1 4.1a2 2 0 0 1-2.8 2.8l-4.1-4.1"></path><path d="m8.97 19.9-2.2 2.3a2.02 2.02 0 0 1-2.83 0l-1.2-1.23a2 2 0 0 1 0-2.83l2.3-2.2"></path><path d="m9.7 13.7 2.3 2.3a2 2 0 0 0 2.8 0L21 9.8a2 2 0 0 0 0-2.83L17 3"></path></svg></button>
<div className="w-[1px] h-4 bg-white/[0.1]"></div>
<button className="text-white/40 hover:text-white transition-colors" title="Comment"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></button>
</div>
</div>

<div className="hidden lg:block col-span-3 border-l border-white/[0.06] bg-[#0B0C0E]/40 overflow-y-auto">

<div className="flex border-b border-white/[0.06]">
<button className="flex-1 py-3 text-[11px] font-medium text-white border-b border-orange-500">Design</button>
<button className="flex-1 py-3 text-[11px] font-medium text-white/40 hover:text-white transition-colors">Prototype</button>
<button className="flex-1 py-3 text-[11px] font-medium text-white/40 hover:text-white transition-colors">Inspect</button>
</div>
<div className="p-4 space-y-6">

<div>
<div className="flex items-center justify-between mb-3 px-1">
<div className="text-[11px] font-medium text-white/40 uppercase">Layout</div>
<svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M12 5v14M5 12h14"></path></svg>
</div>
<div className="flex gap-1 mb-2 bg-white/[0.02] p-1 rounded-md border border-white/[0.06]">
<button className="flex-1 h-6 rounded hover:bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg></button>
<button className="flex-1 h-6 rounded hover:bg-white/[0.06] flex items-center justify-center text-white/60 hover:text-white"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><line x1="12" x2="12" y1="3" y2="21"></line><line x1="8" x2="8" y1="3" y2="21"></line><line x1="16" x2="16" y1="3" y2="21"></line></svg></button>
<button className="flex-1 h-6 rounded bg-white/[0.08] text-white flex items-center justify-center"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path></svg></button>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 p-1.5 rounded border border-white/[0.06] bg-white/[0.02] group hover:border-white/20 transition-colors">
<svg className="w-3 h-3 text-white/20 group-hover:text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 13h8v8h-8zM3 13h8v8H3zM13 3h8v8h-8zM3 3h8v8H3z"></path></svg>
<span className="text-[11px] text-white font-mono">24px</span>
</div>
<div className="flex items-center gap-2 p-1.5 rounded border border-white/[0.06] bg-white/[0.02] group hover:border-white/20 transition-colors">
<svg className="w-3 h-3 text-white/20 group-hover:text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><rect height="18" rx="2" width="18" x="3" y="3"></rect></svg>
<span className="text-[11px] text-white font-mono">16px</span>
</div>
</div>
</div>

<div className="border-t border-white/[0.06] pt-4">
<div className="flex items-center justify-between mb-3 px-1">
<div className="text-[11px] font-medium text-white/40 uppercase">Typography</div>
</div>
<div className="space-y-2">
<div className="w-full flex items-center justify-between p-1.5 px-2 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
<span className="text-[12px] text-white">Inter Display</span>
<svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center justify-between p-1.5 px-2 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
<span className="text-[12px] text-white">Medium</span>
</div>
<div className="flex items-center justify-between p-1.5 px-2 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
<span className="text-[12px] text-white">32</span>
<span className="text-[10px] text-white/20">px</span>
</div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="flex items-center gap-2 p-1.5 px-2 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
<svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M8 12h8M12 8v8"></path></svg>
<span className="text-[12px] text-white/60">Auto</span>
</div>
<div className="flex items-center gap-2 p-1.5 px-2 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-colors">
<svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M3 3h18"></path></svg>
<span className="text-[12px] text-white/60">-2%</span>
</div>
</div>
</div>
</div>

<div className="border-t border-white/[0.06] pt-4">
<div className="flex items-center justify-between mb-3 px-1">
<div className="text-[11px] font-medium text-white/40 uppercase">Fill</div>
<svg className="w-3 h-3 text-white/20 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex items-center gap-2 p-1.5 rounded border border-white/[0.06] bg-white/[0.02] group hover:border-white/20 transition-colors">
<div className="w-4 h-4 rounded bg-white border border-white/20"></div>
<span className="text-[12px] text-white font-mono uppercase flex-1">#FFFFFF</span>
<span className="text-[12px] text-white/40">100%</span>
<svg className="w-3 h-3 text-white/20 opacity-0 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
</div>

<div className="border-t border-white/[0.06] pt-4">
<div className="flex items-center justify-between mb-3 px-1">
<div className="text-[11px] font-medium text-white/40 uppercase">Effects</div>
<svg className="w-3 h-3 text-white/20 hover:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex items-center gap-2 p-1.5 rounded border border-white/[0.06] bg-white/[0.02] group hover:border-white/20 transition-colors">
<svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-[12px] text-white flex-1">Drop Shadow</span>
<svg className="w-3 h-3 text-white/20" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M18 15l-6-6-6 6"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-y border-white/[0.06]">
<div className="max-w-7xl mr-auto ml-auto pt-10 pr-6 pb-10 pl-6">
<p className="text-center text-xs font-medium text-white/30 mb-8 tracking-widest uppercase">
          Trusted by world-class teams
        </p>
<div className="flex flex-wrap hover:opacity-100 transition-all duration-500 opacity-40 grayscale gap-x-12 gap-y-8 items-center justify-center">
<iconify-icon className="text-white" height="36" icon="simple-icons:google" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:microsoft" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:stripe" width="96"></iconify-icon>
<iconify-icon className="text-white" height="36" icon="simple-icons:anthropic" width="96"></iconify-icon>
</div>
</div>
</section>

<section className="border-white/[0.06] max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
          Ship with speed.
        </h2>
<p className="text-lg font-light text-white/60 max-w-3xl">
          Turn your design into a live website in seconds. World-class
          infrastructure, built-in.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="md:col-span-2 linear-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M12 2v4"></path>
<path d="m16.2 7.8 2.9-2.9"></path>
<path d="M18 12h4"></path>
<path d="m16.2 16.2 2.9 2.9"></path>
<path d="M12 18v4"></path>
<path d="m4.9 19.1 2.9-2.9"></path>
<path d="M2 12h4"></path>
<path d="m4.9 4.9 2.9 2.9"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">
                Layout &amp; Effects
              </h3>
<p className="text-sm text-white/60 max-w-md leading-relaxed mb-8">
                Design with auto-layout, stacks, and grids. Add scroll transforms
                and appear animations visually.
              </p>
</div>

<div className="w-full h-32 bg-white/[0.02] border border-white/[0.06] rounded-lg p-3 relative overflow-hidden group-hover:border-white/[0.1] transition-colors">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px'}}></div>

<div className="relative h-full flex gap-3">

<div className="w-1/4 h-full bg-white/[0.04] rounded border border-white/[0.04] flex flex-col gap-2 p-2 group-hover:w-1/3 transition-all duration-500 ease-out">
<div className="w-full h-2 bg-white/[0.08] rounded"></div>
<div className="w-2/3 h-2 bg-white/[0.04] rounded"></div>
<div className="mt-auto w-full h-8 bg-orange-500/10 rounded border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors"></div>
</div>

<div className="flex-1 h-full flex flex-col gap-3">

<div className="w-full h-8 bg-white/[0.04] rounded border border-white/[0.04] flex items-center px-2 gap-2 group-hover:translate-y-1 transition-transform duration-500 delay-75">
<div className="w-4 h-4 rounded-full bg-white/[0.08]"></div>
<div className="w-20 h-2 bg-white/[0.08] rounded"></div>
</div>

<div className="flex-1 grid grid-cols-2 gap-3">
<div className="bg-gradient-to-br from-white/[0.08] to-transparent rounded border border-white/[0.04] group-hover:scale-[1.02] transition-transform duration-500 delay-100"></div>
<div className="bg-gradient-to-br from-white/[0.08] to-transparent rounded border border-white/[0.04] group-hover:scale-[1.02] transition-transform duration-500 delay-150"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="linear-card rounded-xl p-8 group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white transition-colors group-hover:text-orange-400">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
</div>
<h3 className="text-lg text-white font-medium mb-2">CMS</h3>
<p className="text-sm text-white/60 leading-relaxed mb-6">
              Manage content for your blog, portfolio, or changelog with a
              flexible CMS.
            </p>

<div className="space-y-2 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0B0C0E]/50 to-[#0B0C0E] z-10"></div>

<div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/[0.04] group-hover:translate-x-1 transition-transform duration-300">
<div className="w-6 h-6 rounded bg-white/[0.1]"></div>
<div className="flex-1 space-y-1">
<div className="w-16 h-1.5 bg-white/[0.1] rounded"></div>
<div className="w-8 h-1.5 bg-white/[0.05] rounded"></div>
</div>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>

<div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/[0.04] group-hover:translate-x-1 transition-transform duration-300 delay-75 opacity-70">
<div className="w-6 h-6 rounded bg-white/[0.1]"></div>
<div className="flex-1 space-y-1">
<div className="w-12 h-1.5 bg-white/[0.1] rounded"></div>
<div className="w-10 h-1.5 bg-white/[0.05] rounded"></div>
</div>
<div className="w-2 h-2 rounded-full bg-white/[0.2]"></div>
</div>

<div className="flex items-center gap-3 p-2 rounded bg-white/[0.03] border border-white/[0.04] group-hover:translate-x-1 transition-transform duration-300 delay-150 opacity-40">
<div className="w-6 h-6 rounded bg-white/[0.1]"></div>
<div className="flex-1 space-y-1">
<div className="w-14 h-1.5 bg-white/[0.1] rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-purple-400 transition-colors">
<svg className="" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path className="" d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
<path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
<path d="M12 2v2"></path>
<path d="M12 22v-2"></path>
<path d="m17 17-1.4-1.4"></path>
<path d="m17 7-1.4 1.4"></path>
<path d="m7 17 1.4-1.4"></path>
<path d="m7 7 1.4 1.4"></path>
</svg>
</div>
<h3 className="text-lg text-white font-medium mb-2">Localization</h3>
<p className="text-sm text-white/60 leading-relaxed mb-6">
              Customize your site for every region, language, and culture.
            </p>

<div className="h-28 relative flex items-center justify-center border border-white/[0.06] rounded-lg bg-white/[0.01]">

<div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<svg className="text-white/40" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>

<div className="absolute w-24 h-24 rounded-full border border-white/[0.05] animate-[spin_10s_linear_infinite]"></div>

<div className="absolute top-4 right-4 bg-[#0B0C0E] border border-white/10 px-1.5 py-0.5 rounded text-[9px] text-white/80 font-mono shadow-lg group-hover:-translate-y-2 group-hover:translate-x-1 transition-transform duration-500">
                    EN
                </div>
<div className="absolute bottom-4 left-4 bg-[#0B0C0E] border border-white/10 px-1.5 py-0.5 rounded text-[9px] text-white/80 font-mono shadow-lg group-hover:translate-y-2 group-hover:-translate-x-1 transition-transform duration-500 delay-75">
                    ES
                </div>
<div className="absolute top-1/2 -left-2 bg-[#0B0C0E] border border-orange-500/30 px-1.5 py-0.5 rounded text-[9px] text-orange-400 font-mono shadow-lg group-hover:-translate-x-2 transition-transform duration-500 delay-100">
                    JP
                </div>
</div>
</div>
</div>

<div className="md:col-span-2 linear-card rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 group relative overflow-hidden">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500/5 blur-[80px] rounded-full group-hover:bg-orange-500/10 transition-colors duration-500"></div>
<div className="flex-1 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-orange-400 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-shadow duration-300">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
</div>
<h3 className="text-xl text-white font-medium mb-2">Fluxer AI</h3>
<p className="text-sm text-white/60 leading-relaxed max-w-sm">
              Generate new pages, translate content, and rewrite copy with
              advanced AI tools.
            </p>
<div className="mt-6 flex items-center gap-2 text-xs text-orange-400 font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300">
<span className="">Try Fluxer AI</span>
<svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>

<div className="w-full md:w-72 bg-[#09090b] rounded-lg border border-white/10 p-4 relative shadow-2xl">

<div className="flex gap-1.5 mb-4 opacity-50">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>

<div className="space-y-3">

<div className="flex items-start gap-3">
<div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<svg className="text-white/60" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div className="space-y-1.5 flex-1">
<div className="h-2 w-16 bg-white/10 rounded"></div>
<div className="h-2 w-full bg-white/5 rounded"></div>
</div>
</div>

<div className="flex items-start gap-3 pl-4 border-l-2 border-orange-500/30">
<div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center shrink-0">
<svg className="text-orange-400" fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>
<div className="space-y-2 flex-1 pt-1">
<div className="h-2 w-full bg-orange-500/10 rounded animate-[pulse_2s_infinite]"></div>
<div className="h-2 w-[90%] bg-orange-500/10 rounded animate-[pulse_2s_infinite_0.3s]"></div>
<div className="h-2 w-[60%] bg-orange-500/10 rounded animate-[pulse_2s_infinite_0.6s]"></div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-orange-500/5 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</section><section className="border-white/[0.06] max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative overflow-hidden">

<div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] blur-[120px] rounded-full pointer-events-none bg-orange-500/10"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border mb-6 border-orange-500/20 bg-orange-500/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[11px] font-medium tracking-tight uppercase text-orange-400">Now in Beta</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
        Design together, 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-400">
          in real-time.
        </span>
</h2>
<p className="text-lg font-light text-white/60 mb-10 leading-relaxed max-w-lg">
        Fluxer brings your entire team into a shared workspace. See cursors, leave comments, and ship faster without the back-and-forth.
      </p>
<div className="space-y-8">

<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] transition-all duration-300">
<svg className="text-white/80 w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10h2.5"></path>
<path d="m8 18 4 4 6-6"></path>
</svg>
</div>
<div>
<h3 className="text-white font-medium mb-1.5 text-[15px]">Multiplayer Editing</h3>
<p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
              Multiple team members can edit the same page simultaneously. Watch changes happen live with zero latency.
            </p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] transition-all duration-300">
<svg className="text-white/80 w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
<line x1="9" x2="15" y1="10" y2="10"></line>
<line x1="9" x2="13" y1="14" y2="14"></line>
</svg>
</div>
<div>
<h3 className="text-white font-medium mb-1.5 text-[15px]">Contextual Comments</h3>
<p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
              Pin feedback directly to elements. Mention teammates, resolve threads, and keep design reviews focused.
            </p>
</div>
</div>

<div className="flex gap-5 group">
<div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:bg-white/[0.06] group-hover:border-white/[0.15] transition-all duration-300">
<svg className="text-white/80 w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div>
<h3 className="text-white font-medium mb-1.5 text-[15px]">Presence Indicators</h3>
<p className="text-[13px] text-white/50 leading-relaxed max-w-sm">
              See who is currently viewing or editing the project. Avoid conflicts with active selection locking.
            </p>
</div>
</div>
</div>
</div>

<div className="relative group h-[500px] w-full bg-[#131418] border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl shadow-black/50">

<div className="h-10 border-b border-white/[0.06] bg-white/[0.02] flex items-center justify-between px-4 absolute top-0 left-0 w-full z-20 backdrop-blur-md">
<div className="flex gap-1.5 opacity-50">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
</div>
<div className="flex items-center gap-3">
<div className="text-[10px] text-white/40 font-mono">workspace / landing-page</div>
<div className="h-3 w-[1px] bg-white/10"></div>
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-orange-500 ring-2 ring-[#131418] flex items-center justify-center text-[9px] font-bold text-white shadow-lg z-30">JD</div>
<div className="w-6 h-6 rounded-full ring-2 ring-[#131418] flex items-center justify-center text-[9px] font-bold text-white shadow-lg z-20 bg-orange-500">AS</div>
<div className="w-6 h-6 rounded-full bg-purple-500 ring-2 ring-[#131418] flex items-center justify-center text-[9px] font-bold text-white shadow-lg z-10">MK</div>
<div className="w-6 h-6 rounded-full bg-[#27272A] ring-2 ring-[#131418] flex items-center justify-center text-[9px] font-bold text-white/60 shadow-lg z-0">+2</div>
</div>
</div>
</div>

<div className="absolute inset-0 top-10 bg-[#0B0C0E] overflow-hidden">
<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>

<div className="absolute top-[20%] left-[20%] w-64 bg-[#1C1C1E] rounded-lg border border-white/[0.08] p-4 shadow-lg group-hover:translate-x-2 transition-transform duration-700 ease-out">
<div className="w-8 h-8 rounded bg-white/[0.1] mb-3"></div>
<div className="h-2 w-24 bg-white/[0.1] rounded mb-2"></div>
<div className="h-2 w-full bg-white/[0.05] rounded mb-1"></div>
<div className="h-2 w-2/3 bg-white/[0.05] rounded"></div>
</div>

<div className="absolute top-[45%] right-[20%] w-64 bg-[#1C1C1E] rounded-lg border p-4 shadow-[0_0_0_1px_rgba(59,130,246,0.3),0_10px_30px_-5px_rgba(0,0,0,0.5)] z-10 border-orange-500/50">

<div className="absolute -top-6 left-0 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-t rounded-br flex items-center gap-1 bg-orange-500">
             Alex Smith
           </div>
<div className="flex items-center justify-between mb-4">
<div className="h-2 w-16 bg-white/[0.1] rounded"></div>
<div className="h-2 w-8 rounded bg-orange-500/20"></div>
</div>
<div className="space-y-2">
<div className="flex gap-2">
<div className="flex-1 h-20 bg-white/[0.02] rounded border border-white/[0.05]"></div>
<div className="flex-1 h-20 bg-white/[0.02] rounded border border-white/[0.05]"></div>
</div>
</div>
</div>

<div className="absolute bottom-[10%] left-[30%] w-80 h-32 bg-[#1C1C1E] rounded-lg border border-white/[0.08] opacity-50 blur-[1px]"></div>

<div className="absolute top-[48%] right-[18%] z-20 pointer-events-none group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-1000 ease-in-out">
<svg className="drop-shadow-md text-orange-500" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="currentColor" stroke="white" strokeWidth="1.5"></path>
</svg>
</div>

<div className="absolute bottom-[30%] left-[40%] z-20 pointer-events-none animate-[pulse_4s_infinite]">
<svg className="text-purple-500 drop-shadow-md" fill="none" height="24" viewbox="0 0 24 24" width="24">
<path d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19169L11.7841 12.3673H5.65376Z" fill="currentColor" stroke="white" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-4 top-4 bg-purple-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap">
              Sarah
            </div>
</div>

<div className="absolute top-[25%] right-[10%] max-w-[180px] bg-[#1C1C1E] border border-white/10 rounded-xl rounded-tl-sm p-3 shadow-xl z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0">
<div className="flex items-center gap-2 mb-1.5">
<div className="w-4 h-4 rounded-full bg-purple-500 flex items-center justify-center text-[8px] font-bold text-white">S</div>
<span className="text-[10px] text-white/40 font-medium">Just now</span>
</div>
<p className="text-[11px] text-white/90 leading-snug">
             Can we increase the padding on this container? It feels a bit tight.
           </p>
</div>

<div className="absolute bottom-6 left-6 px-3 py-1.5 bg-[#1C1C1E]/80 backdrop-blur border border-white/10 rounded-full flex items-center gap-2 shadow-lg z-20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-[10px] text-white/60 font-medium">Live connection established</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="mb-16">
<h2 className="md:text-5xl text-4xl font-medium text-white tracking-tight mb-4">Made with Fluxer</h2>
<p className="text-sm font-light text-white/60 max-w-xl mt-2">
      Discover stunning websites and designs created by the Fluxer community.
    </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Virtual Teleportation Portal" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37f704fc-8b0f-4c5d-8a64-a61ac371001c_800w.jpg"/>
<div className="group-hover:bg-white/[0.02] transition-colors duration-300 bg-white/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<h3 className="text-sm font-medium text-white mb-2">Virtual Teleportation Portal</h3>
<div className="flex items-center gap-2">
<img alt="Masaya Takizawa" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9a81c103-dcf7-43e9-9cd2-0303feeb09c5_320w.webp"/>
<span className="text-xs text-white/50">Masaya Takizawa</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Bubbles Design System" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e6d81c2-cf3e-4584-8882-0f6b81574c76_800w.webp"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Bubbles Design System</h3>
<div className="flex items-center gap-2">
<img alt="Raul Marin Calleja" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=64&amp;q=80"/>
<span className="text-xs text-white/50">Raul Marin Calleja</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Virtual Graffiti Wall" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b94d3e8f-eec0-412f-a354-97f86fa23ae0_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Virtual Graffiti Wall</h3>
<div className="flex items-center gap-2">
<img alt="Seungmee Lee" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/96a71491-ccb5-4cb6-a369-be4b7a348c85_320w.webp"/>
<span className="text-xs text-white/50">Seungmee Lee</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Virtual Graffiti Wall" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b1b4397-d561-464c-9729-1d5617f66579_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Pixel Editor</h3>
<div className="flex items-center gap-2">
<img alt="Ayaneshu Bhardwaj" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fd677079-3f31-4f37-a5fe-e62ece74636c_320w.webp"/>
<span className="text-xs text-white/50">Ayaneshu Bhardwaj</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Cursor Images" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cd1d4fc-703c-4e4d-a54e-9c08b0644568_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Cursor Images</h3>
<div className="flex items-center gap-2">
<img alt="Gui Seiz" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a5db304-521a-4815-86d8-0c7198201df9_320w.webp"/>
<span className="text-xs text-white/50">Gui Seiz</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Pattern Generator" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9e5019c-5dfa-4d86-9a59-c29b6c5b66d2_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Pattern Generator</h3>
<div className="flex items-center gap-2">
<img alt="Benjamin Leonard" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bc75d62c-68d8-4593-88cb-73960a20b022_320w.webp"/>
<span className="text-xs text-white/50">Benjamin Leonard</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Flower Catcher" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2a4bfa35-9462-4ac6-9c81-6a5beaf863e6_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Flower Catcher</h3>
<div className="flex items-center gap-2">
<img alt="Nayli C. Naza" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5cbf539-f61a-4c9d-aff7-ea01dc1ddcb9_320w.webp"/>
<span className="text-xs text-white/50">Nayli C. Naza</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden border-white/[0.06] aspect-[4/3] group-hover:border-white/[0.1] transition-all border rounded-xl mb-4 relative">
<img alt="Earworm Studio" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f693f1af-ff5f-4c7a-8480-30014bdb75ef_800w.jpg"/>
</div>
<h3 className="text-sm font-medium text-white mb-2">Earworm Studio</h3>
<div className="flex items-center gap-2">
<img alt="Holly Li" className="w-5 h-5 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&amp;q=80"/>
<span className="text-xs text-white/50">Holly Li</span>
</div>
</div>
</div>

<div className="text-center pt-8">
<a className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors border-b border-white/20 hover:border-white/40 pb-1" href="#">
      Explore more
      <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section><section className="sm:px-6 lg:px-8 sm:py-10 md:py-12 max-w-7xl mr-auto ml-auto pt-8 pr-4 pb-8 pl-4">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-zinc-400">Community love</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-zinc-100">Testimonials</h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-zinc-400">
<svg aria-hidden="true" className="lucide lucide-quote w-4 h-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<span className="text-sm">Real feedback from creators</span>
</div>
</div>
<div className="relative mt-6 sm:mt-8 overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-zinc-950 to-transparent z-10">
</div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-zinc-950 to-transparent z-10">
</div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Fluxer's visual editor feels just like my design tool, but the code it outputs is production-ready. Incredible.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_des</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            We shipped our new marketing site in days, not weeks. The AI suggestions for copy and layout were spot on.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86a541ae-1b5d-4597-8538-e55c0858f4ff_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak_art</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The CMS flexibility is unmatched. We can model complex content structures without touching a single line of code.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ethan Garcia</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@egarcia_fe</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Global hosting at the edge meant our site load times dropped by 40% instantly. Our SEO rankings shot up.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ava Thompson</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Fluxer's visual editor feels just like my design tool, but the code it outputs is production-ready. Incredible.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Noah Patel</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@noah_des</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            We shipped our new marketing site in days, not weeks. The AI suggestions for copy and layout were spot on.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Maya Kim</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@mayak_art</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The CMS flexibility is unmatched. We can model complex content structures without touching a single line of code.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Ethan Garcia</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@egarcia_fe</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Global hosting at the edge meant our site load times dropped by 40% instantly. Our SEO rankings shot up.
          </p>
</article>
</div>
</div>
<div className="border-t border-zinc-900/80"></div>

<div className="relative py-6 sm:py-8">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/358aaa92-ba50-4778-b2a2-7c8f7310e44c_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_creates</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Collaboration is seamless. My team can comment directly on the canvas, and we iterate in real-time.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            I was skeptical about 'no-code' but Fluxer gives me full control over CSS when I need it. Best of both worlds.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-zinc-900/40 border-zinc-900 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec17a2e2-e4f4-4164-b631-f074e640a0c1_320w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofia_agency</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Migrating our agency's clients to Fluxer has saved us so much maintenance overhead. It just works.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0aab170-b3d3-4816-9435-0ac1e1d853a3_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jackson_pm</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The export feature is clean. If we ever need to self-host, we can just grab the code and go. No lock-in.
          </p>
</article>

<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/480fa0bd-ee9a-4aa1-8f7a-5307cc4541f5_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Priya Singh</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@priya_creates</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Collaboration is seamless. My team can comment directly on the canvas, and we iterate in real-time.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e0bbf4a4-5f58-4644-bea6-85d2fef73d4a_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Leo Martin</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@leom_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            I was skeptical about 'no-code' but Fluxer gives me full control over CSS when I need it. Best of both worlds.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27a2c31e-38f3-479f-a831-858e91b9bd84_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Sofia Alvarez</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@sofia_agency</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            Migrating our agency's clients to Fluxer has saved us so much maintenance overhead. It just works.
          </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-zinc-900 bg-zinc-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-zinc-100">Jackson Lee</span>
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-orange-400" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<p className="text-xs text-zinc-400">@jackson_pm</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-zinc-300">
            The export feature is clean. If we ever need to self-host, we can just grab the code and go. No lock-in.
          </p>
</article>
</div>
</div>
</div>
<style>
    @keyframes marquee-rtl {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-50%);
      }
    }

    @keyframes marquee-ltr {
      0% {
        transform: translateX(-50%);
      }

      100% {
        transform: translateX(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {

      .animate-\[marquee-rtl_45s_linear_infinite\],
      .animate-\[marquee-ltr_45s_linear_infinite\] {
        animation: none !important;
      }
    }
  </style>
</section><section className="border-white/[0.06] max-w-7xl border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
<div className="max-w-3xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-8 leading-[1.1]">
        Pick a starting point. Build whatever you imagine.
      </h2>
<button className="shine-button h-12 px-6 rounded-full border border-white/[0.15] bg-transparent text-white text-[15px] font-medium hover:bg-white/[0.04] transition-colors">
        Browse templates
      </button>
</div>
<div className="flex gap-6 pb-2 gap-x-6 gap-y-6 items-center">
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.2] transition-colors text-white group cursor-pointer" onclick="document.getElementById('template-carousel').scrollBy({left: -340, behavior: 'smooth'})">
<svg className="text-white/60 group-hover:text-white transition-colors" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path></svg>
</button>
<button className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.2] transition-colors text-white group cursor-pointer" onclick="document.getElementById('template-carousel').scrollBy({left: 340, behavior: 'smooth'})">
<svg className="group-hover:text-white transition-colors w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>

<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mx-6 px-6 no-scrollbar" id="template-carousel" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06]">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Websites</h3>

<div className="absolute left-5 right-5 bottom-[-40px] shadow-2xl transition-transform group-hover:-translate-y-4 duration-500">
<div className="bg-[#1C1C1E] rounded-t-lg border-x border-t border-black/10 aspect-[3/4] p-1">
<div className="h-6 flex items-center gap-1.5 px-2 mb-2 bg-white/5 rounded-t mx-[-4px] mt-[-4px]">
<div className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#FEBC2E]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#28C840]"></div>
</div>
<div className="bg-black/40 h-full rounded border border-white/5 overflow-hidden relative">
<div className="p-4 space-y-4">
<div className="w-16 h-4 bg-white/10 rounded"></div>
<div className="w-3/4 h-10 bg-white/20 rounded"></div>
<div className="w-1/2 h-8 bg-white/10 rounded"></div>
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="h-24 bg-lime-400/10 rounded border border-lime-400/20"></div>
<div className="h-24 bg-white/5 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06]">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Mobile apps</h3>

<div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 flex gap-4 transition-transform group-hover:-translate-y-4 duration-500">

<div className="w-32 h-64 bg-black rounded-[24px] border-[5px] border-[#1C1C1E] shadow-2xl overflow-hidden relative transform -rotate-6 translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#1C1C1E] rounded-b-lg z-20"></div>
<div className="w-full h-full bg-white p-2 pt-6 flex flex-col items-center">
<div className="w-8 h-8 rounded-full mb-2 bg-orange-500"></div>
<div className="w-12 h-1.5 bg-gray-200 rounded mb-4"></div>
<div className="w-full h-24 rounded-lg mb-2 border relative overflow-hidden bg-orange-50 border-orange-100">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full blur-xl opacity-50 bg-orange-500"></div>
</div>
</div>
<div className="w-full h-10 bg-gray-50 rounded-lg"></div>
</div>
</div>

<div className="w-32 h-64 bg-black rounded-[24px] border-[5px] border-[#1C1C1E] shadow-2xl overflow-hidden relative transform rotate-3 z-10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-[#1C1C1E] rounded-b-lg z-20"></div>
<div className="w-full h-full bg-[#FF7D54] p-2 pt-6">
<div className="w-full aspect-square bg-white/10 rounded-lg border border-white/20 flex items-center justify-center backdrop-blur-sm">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="24"><path d="M12 2v20M2 12h20"></path></svg>
</div>
<div className="mt-4 space-y-2">
<div className="w-full h-2 bg-white/40 rounded"></div>
<div className="w-2/3 h-2 bg-white/20 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06]">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Social media</h3>

<div className="px-4 py-4 absolute top-24 right-0 bottom-0 left-0">
<div className="grid grid-cols-2 gap-3 rotate-6 scale-110 opacity-90 transition-transform group-hover:rotate-3 duration-500">
<div className="aspect-square rounded-lg overflow-hidden relative shadow-lg bg-orange-600">
<div className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter leading-none text-center">ModernDance</div>
</div>
<div className="aspect-[4/5] bg-black rounded-lg overflow-hidden relative border border-white/10 shadow-lg">
<div className="absolute top-2 left-2 w-4 h-4 rounded-full bg-white/20"></div>
<div className="absolute bottom-4 left-2 right-2 h-2 bg-white/20 rounded"></div>
<div className="absolute inset-x-2 top-8 bottom-8 bg-gradient-to-b from-purple-500/50 rounded to-orange-500/50"></div>
</div>
<div className="col-span-2 h-24 bg-[#1a1a1a] rounded-lg overflow-hidden flex items-center p-3 gap-3 shadow-lg border border-white/10">
<div className="w-10 h-10 bg-orange-500 rounded-full shrink-0"></div>
<div className="space-y-1.5 w-full">
<div className="h-2 bg-white/20 rounded w-1/2"></div>
<div className="h-2 bg-white/10 rounded w-3/4"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06]">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Presentations</h3>

<div className="absolute inset-0 top-12 flex items-center justify-center pointer-events-none">
<div className="relative w-full h-full">

<div className="absolute left-[-10%] bottom-16 w-48 h-32 bg-[#0E0F11] rounded-lg shadow-xl transform rotate-[-8deg] flex items-center justify-center overflow-hidden border border-white/10 group-hover:translate-x-2 transition-transform duration-500 z-10">
<div className="text-[50px] font-bold text-[#00C2FF] opacity-90 leading-none tracking-tighter -ml-8">X8</div>
</div>

<div className="absolute right-[-15%] top-20 w-48 h-32 bg-[#FF6B4A] rounded-lg shadow-xl transform rotate-[6deg] p-4 flex flex-col justify-between group-hover:-translate-x-2 transition-transform duration-500 z-20">
<div className="text-[9px] font-bold uppercase tracking-wider text-black/60">Agency</div>
<div className="text-3xl font-black uppercase tracking-tighter leading-[0.8] text-black">PITCHDECK</div>
</div>

<div className="absolute left-[20%] bottom-[-25%] w-48 h-32 bg-[#FFD6D6] rounded-lg shadow-xl transform rotate-[-3deg] p-4 group-hover:-translate-y-2 transition-transform duration-500 z-30">
<div className="grid grid-cols-3 gap-0 h-full items-center">
<div className="text-3xl font-serif font-bold text-center text-black">1</div>
<div className="text-3xl font-serif font-bold text-center text-black border-x border-black/10">2</div>
<div className="text-3xl font-serif font-bold text-center text-black">3</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center group overflow-hidden transition-all hover:scale-[1.01] duration-500 cursor-pointer h-[420px] border-[#ffffff]/10 border rounded-xl pt-6 pr-6 pb-6 pl-6 relative bg-white/[0.02]">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Invitations</h3>

<div className="flex flex-col absolute top-16 right-0 bottom-0 left-0 items-center justify-center">

<div className="absolute w-48 h-32 bg-[#4A3B69] rounded transform -rotate-12 translate-x-4 translate-y-4 shadow-xl flex items-center justify-center overflow-hidden opacity-90 group-hover:rotate-[-15deg] transition-transform duration-500">
<div className="text-white/30 text-[8px] font-mono p-4 leading-tight">YOU'RE INVITED TO CELEBRATE...JOIN US FOR AN EVENING OF...</div>
</div>

<div className="absolute w-56 h-36 bg-[#D8E678] rounded transform rotate-6 shadow-2xl border border-black/5 p-4 flex flex-col justify-between group-hover:rotate-3 transition-transform duration-500 z-10">
<div className="flex justify-between w-full">
<div className="text-[8px] font-mono tracking-widest text-[#2C4A34]">(06.12.25)</div>
<div className="w-6 h-6 rounded-full border border-[#2C4A34]/20 flex items-center justify-center">
<svg className="text-[#2C4A34]" fill="none" height="10" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="10"><path className="" d="M12 5v14M5 12h14"></path></svg>
</div>
</div>
<div className="text-center py-2">
<div className="text-4xl font-black tracking-tighter text-[#2C4A34] leading-none">BDAY</div>
<div className="text-4xl font-black tracking-tighter text-transparent leading-none" style={{WebkitTextStroke: '1px #2C4A34'}}>BASH</div>
</div>
<div className="text-[8px] font-mono uppercase text-center w-full border-t border-[#2C4A34]/10 pt-1 text-[#2C4A34]">
                420 Drake Ave, Feb 12 at 5pm
             </div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Icons</h3>
<div className="absolute inset-x-8 bottom-8 top-20 flex items-center justify-center">
<div className="grid grid-cols-3 gap-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">

<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[0ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[50ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 14.14 14.14"></path></svg></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[100ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div>

<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[150ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg></div>
<div className="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300 delay-[200ms] z-10 from-orange-500 to-orange-600"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[250ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path></svg></div>

<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[300ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[350ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div>
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform duration-300 delay-[400ms]"><svg className="text-white" fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Illustrations</h3>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-48 h-48 group-hover:scale-110 transition-transform duration-700 ease-out">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/20 blur-2xl rounded-full"></div>
<svg className="absolute top-0 left-0 w-full h-full animate-[spin_10s_linear_infinite]" fill="none" viewbox="0 0 100 100">
<path className="group-hover:stroke-purple-400/50 transition-colors" d="M50 0 L100 25 L100 75 L50 100 L0 75 L0 25 Z" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
</svg>
<div className="absolute top-8 left-10 w-12 h-12 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-full opacity-80 group-hover:-translate-y-4 transition-transform duration-500"></div>
<div className="absolute bottom-10 right-8 w-16 h-16 bg-gradient-to-bl to-cyan-400 rounded-full opacity-80 group-hover:translate-y-4 transition-transform duration-500 delay-75 mix-blend-screen from-orange-500"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
<div className="w-10 h-10 bg-white rounded-full shadow-lg shadow-white/20"></div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Portfolio</h3>
<div className="absolute bottom-[-20px] left-8 right-8 top-16 flex flex-col gap-3 group-hover:-translate-y-2 transition-transform duration-500">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-white/10 shrink-0 overflow-hidden">
<div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
</div>
<div className="space-y-1.5 w-full">
<div className="h-2.5 bg-white/20 rounded w-1/3"></div>
<div className="h-2 bg-white/10 rounded w-1/2"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 h-full">
<div className="bg-white/5 rounded-lg border border-white/5 h-32 relative overflow-hidden group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-transparent"></div>
</div>
<div className="bg-white/5 rounded-lg border border-white/5 h-32 relative overflow-hidden mt-6 group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent"></div>
</div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Plugins</h3>
<div className="absolute inset-0 flex items-center justify-center">
<div className="relative w-full h-full">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#1C1C1E] border border-white/20 rounded-xl flex items-center justify-center z-10 shadow-2xl group-hover:scale-110 transition-transform duration-300">
<svg className="text-white" fill="none" height="24" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="24"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path></svg>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none text-white/10" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1.5">
<line className="group-hover:text-white/30 transition-colors duration-500" x1="50%" x2="20%" y1="50%" y2="30%"></line>
<line className="group-hover:text-white/30 transition-colors duration-500 delay-75" x1="50%" x2="80%" y1="50%" y2="30%"></line>
<line className="group-hover:text-white/30 transition-colors duration-500 delay-100" x1="50%" x2="20%" y1="50%" y2="70%"></line>
<line className="group-hover:text-white/30 transition-colors duration-500 delay-150" x1="50%" x2="80%" y1="50%" y2="70%"></line>
</svg>

<div className="absolute top-[25%] left-[15%] w-10 h-10 border rounded-lg flex items-center justify-center group-hover:translate-y-1 transition-transform duration-500 bg-orange-500/20 border-orange-500/30"><div className="w-4 h-4 rounded-full bg-orange-500"></div></div>
<div className="absolute top-[25%] right-[15%] w-10 h-10 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500"><div className="w-4 h-4 rounded-full bg-green-500"></div></div>
<div className="absolute bottom-[25%] left-[15%] w-10 h-10 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500"><div className="w-4 h-4 rounded-full bg-red-500"></div></div>
<div className="absolute bottom-[25%] right-[15%] w-10 h-10 bg-yellow-500/20 border border-yellow-500/30 rounded-lg flex items-center justify-center group-hover:translate-y-1 transition-transform duration-500"><div className="w-4 h-4 rounded-full bg-yellow-500"></div></div>
</div>
</div>
</div>

<div className="flex-shrink-0 w-[85vw] sm:w-[320px] snap-center linear-card group overflow-hidden rounded-xl pt-8 pr-8 pb-8 pl-8 relative bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] transition-colors">
<h3 className="text-lg font-semibold text-[#ffffff] mb-1">Ads Banner</h3>
<div className="absolute bottom-8 left-6 right-6 top-16 flex flex-col justify-end">
<div className="w-full aspect-[2/1] bg-gradient-to-r from-[#FF4D4D] to-[#F9CB28] rounded-lg shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 flex flex-col items-center justify-center p-4 relative overflow-hidden border border-white/10">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30"></div>
<div className="text-[10px] font-black text-black/40 uppercase tracking-widest mb-1 relative z-10">Limited Offer</div>
<div className="text-2xl font-black text-white relative z-10 tracking-tight">50% OFF</div>
<div className="mt-2 px-3 py-1 bg-black text-white text-[8px] font-bold uppercase rounded-full shadow-lg relative z-10 group-hover:scale-110 transition-transform">Shop Now</div>
</div>

<div className="w-[90%] h-2 mx-auto bg-white/5 rounded-full blur-md mt-4"></div>
</div>
</div>
</div>
</section><section className="border-white/[0.06] max-w-7xl border-t mx-auto px-6 py-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-4">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Frequently asked questions</h2>
<p className="text-sm text-white/60 leading-relaxed font-light mb-8">
        Everything you need to know about Fluxer. Can’t find the answer you’re looking for? 
        <a className="text-white hover:text-orange-400 transition-colors border-b border-white/20 hover:border-orange-400/50 pb-0.5" href="#">Contact support</a>.
      </p>
</div>

<div className="lg:col-span-8">
<div className="space-y-2">

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Can I use my own custom domain?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                Yes, absolutely. All paid plans include the ability to connect a custom domain. We provide free SSL certificates for all domains connected to Fluxer, automatically managed and renewed for you.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">What happens if I exceed my visitor limit?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                We don't shut off your site. If you consistently exceed the limits of your plan, we'll reach out to discuss upgrading to a plan that better suits your needs. For sudden traffic spikes, there are no overage charges.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Can I export the code to host elsewhere?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                Yes. The Basic and Pro plans allow you to export your project as a clean, semantic HTML/CSS/JS bundle. You can host this on Netlify, Vercel, or your own infrastructure without any lock-in.
              </p>
</div>
</div>
</div>

<div className="group border-b border-white/[0.06] last:border-0">
<button className="flex w-full items-start justify-between py-6 text-left focus:outline-none" onclick="toggleFaq(this)">
<span className="text-[15px] font-medium text-white/90 group-hover:text-white transition-colors">Is there a discount for open source or non-profits?</span>
<span className="ml-6 flex items-center justify-center pt-1 text-white/40 transition-transform duration-300 group-hover:text-white">
<svg className="lucide lucide-plus transition-transform duration-300 icon-plus" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</span>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out faq-content">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 font-light leading-relaxed">
                We support the community. If you're building an open-source project or represent a non-profit organization, please contact us for a special discount on our Pro plan.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="bg-black pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex mb-16 items-start justify-between">
<div className="flex flex-col gap-4 max-w-xs">
<div className="text-2xl font-semibold text-white">Fluxer</div>
<p className="text-sm text-white/50 leading-relaxed font-light">
          The design tool that writes production-ready code. Build faster, ship better.
        </p>
</div>
<div className="flex gap-16 hidden md:flex">
<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold text-white uppercase tracking-wider">Product</h5>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Fluxer Design</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Fluxer Dev</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Fluxer Slides</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Fluxer Board</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold text-white uppercase tracking-wider">Use Cases</h5>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">UI Design</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">UX Design</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Wireframing</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Prototyping</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold text-white uppercase tracking-wider">Resources</h5>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Community</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Help Center</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Resource Library</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-xs font-bold text-white uppercase tracking-wider">Company</h5>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Legal</a>
<a className="text-sm text-white/50 hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/[0.1]">
<div className="flex items-center gap-6 mb-4 md:mb-0">
<a className="text-xs text-white/30 hover:text-white transition-colors" href="#">Cookie settings</a>
<a className="text-xs text-white/30 hover:text-white transition-colors" href="#">English</a>
</div>
<div className="flex items-center gap-6">
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a className="text-white/40 hover:text-white transition-colors" href="#">
<svg aria-hidden="true" className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
