import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      window.addEventListener('scroll', () => {
        const leftNav = document.getElementById('left-nav');
        if (leftNav) {
          if (window.scrollY > 300) {
            leftNav.classList.remove('opacity-0', 'pointer-events-none', '-translate-x-4');
            leftNav.classList.add('opacity-100', 'translate-x-0');
          } else {
            leftNav.classList.add('opacity-0', 'pointer-events-none', '-translate-x-4');
            leftNav.classList.remove('opacity-100', 'translate-x-0');
          }
        }
      });
    


    function switchStep(step) {
      for (let i = 1; i <= 4; i++) {
        const mockup = document.getElementById('mockup-' + i);
        const line = document.getElementById('step-line-' + i);
        const icon = document.getElementById('step-icon-' + i);
        const container = document.getElementById('step-container-' + i);

        if (i === step) {
          // Show active mockup
          mockup.classList.remove('opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none', 'z-0');
          mockup.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'z-10');

          // Show active line
          if(line) {
            line.classList.remove('opacity-0');
            line.classList.add('opacity-100');
          }

          // Active icon styles
          icon.classList.remove('bg-white', 'text-[#64748B]', 'border-[#E2E8F0]', 'shadow-sm');
          icon.classList.add('bg-[#14B8A6]/10', 'text-[#14B8A6]', 'border-[#14B8A6]/30', 'shadow-md');
          
          // Active container styles
          container.classList.remove('border-transparent');
          container.classList.add('bg-white', 'border-[#E2E8F0]', 'shadow-sm');
        } else {
          // Hide inactive mockup
          mockup.classList.add('opacity-0', 'translate-y-4', 'scale-95', 'pointer-events-none', 'z-0');
          mockup.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'z-10');

          // Hide inactive line
          if(line) {
            line.classList.add('opacity-0');
            line.classList.remove('opacity-100');
          }

          // Inactive icon styles
          icon.classList.add('bg-white', 'text-[#64748B]', 'border-[#E2E8F0]', 'shadow-sm');
          icon.classList.remove('bg-[#14B8A6]/10', 'text-[#14B8A6]', 'border-[#14B8A6]/30', 'shadow-md');
          
          // Inactive container styles
          container.classList.add('border-transparent');
          container.classList.remove('bg-white', 'border-[#E2E8F0]', 'shadow-sm');
        }
      }
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="z-50 bg-[#ffffff]/80 border-[#E2E8F0] border-b backdrop-blur-md">
<nav className="flex max-w-[1200px] h-20 mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<img alt="RapidVisaDesk Logo" className="w-12 h-12 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/699c756d-37f8-430a-9929-905c3c4d67d7_320w.png"/>
<span className="text-xl font-medium tracking-tighter">
            Rapid<span className="" style={{color: '#1E3A8A'}}>Visa</span>Desk
</span>
</div>
<div className="flex items-center gap-8">
<div className="hidden md:flex items-center gap-8 text-sm font-light text-[#64748B]">
<a className="hover:text-[#0F172A] transition-colors" href="#">
        How it works
      </a>
<a className="hover:text-[#0F172A] transition-colors" href="#">
        Pricing
      </a>
<a className="hover:text-[#0F172A] transition-colors" href="#">
        Agents
      </a>
</div>
<div className="flex items-center gap-5">

<div className="relative group">
<button className="flex items-center gap-2 focus:outline-none rounded-full ring-2 ring-transparent hover:ring-[#E2E8F0] transition-all">
<img alt="User Profile" className="w-10 h-10 rounded-full border border-[#E2E8F0] object-cover shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
</button>

<div className="absolute right-0 mt-2 w-56 bg-white border border-[#E2E8F0] rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="px-4 py-2 border-b border-[#E2E8F0] mb-1">
<p className="text-sm font-medium text-[#0F172A]">Sarah Jenkins</p>
<p className="text-xs text-[#64748B]">sarah@example.com</p>
</div>
<a className="flex items-center gap-2 px-4 py-2 text-sm font-light text-[#0F172A] hover:bg-[#F8FAFC] transition-colors" href="#">
<svg className="text-[#64748B]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
            Profile
          </a>
<a className="flex items-center gap-2 px-4 py-2 text-sm font-light text-[#0F172A] hover:bg-[#F8FAFC] transition-colors" href="#">
<svg className="text-[#64748B]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
            My Applications
          </a>
<a className="flex items-center gap-2 px-4 py-2 text-sm font-light text-[#0F172A] hover:bg-[#F8FAFC] transition-colors" href="#">
<svg className="text-[#64748B]" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z">
</path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
            Settings
          </a>
<div className="h-px bg-[#E2E8F0] my-1"></div>
<a className="flex items-center gap-2 px-4 py-2 text-sm font-light text-[#ef4444] hover:bg-[#F8FAFC] transition-colors" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
            Log out
          </a>
</div>
</div>

<div className="hidden sm:block w-px h-6 bg-[#E2E8F0]"></div>

<button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#F8FAFC] transition-colors focus:outline-none ring-2 ring-transparent hover:ring-[#E2E8F0]">
<img alt="India Flag" className="w-5 h-5 rounded-full object-cover border border-[#E2E8F0] shadow-sm" src="https://flagcdn.com/w40/in.png"/>
<span className="text-sm font-medium text-[#0F172A] hidden sm:block">IN</span>
<svg className="text-[#64748B] hidden sm:block" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</button>
</div>
</div>
</nav>
</header>
<nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4 transition-all duration-300 hidden xl:flex" id="left-nav">
<div className="flex flex-col gap-2 bg-white/90 border-[#E2E8F0] border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md gap-x-2 gap-y-2">
<a className="group relative w-12 h-12 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-all" href="#how-it-works" title="How it works">
<svg className="lucide lucide-route" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="absolute left-full ml-4 px-3 py-1.5 bg-[#0F172A] text-white rounded-md text-[11px] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-sm">
            How it works
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0F172A]"></div>
</span>
</a>
<a className="group relative w-12 h-12 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-all" href="#pricing" title="Pricing">
<svg className="lucide lucide-credit-card" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<span className="absolute left-full ml-4 px-3 py-1.5 bg-[#0F172A] text-white rounded-md text-[11px] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-sm">
            Pricing
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0F172A]"></div>
</span>
</a>
<a className="group relative w-12 h-12 rounded-full flex items-center justify-center text-[#64748B] hover:text-[#0F172A] hover:bg-[#F8FAFC] transition-all" href="#agents" title="Agents">
<svg className="lucide lucide-users" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
<span className="absolute left-full ml-4 px-3 py-1.5 bg-[#0F172A] text-white rounded-md text-[11px] font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap shadow-sm">
            Agents
            <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[#0F172A]"></div>
</span>
</a>
</div>
</nav>


<section className="overflow-hidden pt-20 pb-12 relative">
<style className="">
        .bg-guilloche {
          background-image: 
            repeating-radial-gradient(circle at 0% 0%, transparent 0, transparent 20px, rgba(30, 58, 138, 0.04) 20px, rgba(30, 58, 138, 0.04) 21px),
            repeating-radial-gradient(circle at 100% 100%, transparent 0, transparent 24px, rgba(20, 184, 166, 0.03) 24px, rgba(20, 184, 166, 0.03) 25px);
        }
        @keyframes scanline {
          0% { transform: translateY(-200px); }
          100% { transform: translateY(800px); }
        }
        @keyframes scanline-left {
          0% { transform: translateY(800px); }
          100% { transform: translateY(-200px); }
        }
      </style>

<div className="absolute inset-0 bg-[#F8FAFC] pointer-events-none z-0"></div>

<div className="absolute inset-0 bg-guilloche pointer-events-none z-0"></div>

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#F8FAFC_20%,_transparent_80%)] pointer-events-none z-0"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F8FAFC] pointer-events-none z-0"></div>


<div className="absolute left-[-20%] md:left-[-10%] top-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-[#14B8A6] pointer-events-none z-0 transform -rotate-12">
<svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="4" id="globe-dots" patternunits="userSpaceOnUse" width="4" x="0" y="0">
<circle cx="2" cy="2" fill="currentColor" r="0.8"></circle>
</pattern>
<radialgradient cx="40%" cy="40%" id="globe-mask-grad" r="60%">
<stop offset="0%" stop-color="white" stop-opacity="1"></stop>
<stop offset="70%" stop-color="white" stop-opacity="0.6"></stop>
<stop offset="100%" stop-color="white" stop-opacity="0"></stop>
</radialgradient>
<mask id="globe-mask">
<circle cx="100" cy="100" fill="url(#globe-mask-grad)" r="98"></circle>
</mask>
</defs>

<circle cx="100" cy="100" fill="url(#globe-dots)" mask="url(#globe-mask)" r="98"></circle>

<g fill="none" mask="url(#globe-mask)" stroke="currentColor" stroke-dasharray="1 3" strokeWidth="0.5">
<ellipse cx="100" cy="100" rx="98" ry="20"></ellipse>
<ellipse cx="100" cy="100" rx="98" ry="50"></ellipse>
<ellipse cx="100" cy="100" rx="98" ry="80"></ellipse>
<ellipse cx="100" cy="100" rx="20" ry="98"></ellipse>
<ellipse cx="100" cy="100" rx="50" ry="98"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="98"></ellipse>
<circle cx="100" cy="100" r="98"></circle>
</g>
</svg>
<svg className="absolute inset-0 w-full h-full transform scale-[1.05] opacity-[0.02]" viewbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<circle cx="100" cy="100" fill="none" r="98" stroke="currentColor" stroke-dasharray="1 4" strokeWidth="0.5"></circle>
</svg>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#14B8A6]/10 to-transparent h-[150px] w-full blur-md" style={{animation: 'scanline-left 8s linear infinite'}}></div>
</div>

<div className="absolute right-[-20%] md:right-[-10%] top-[0%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] text-[#1E3A8A] pointer-events-none z-0 transform rotate-12 overflow-hidden rounded-full">
<svg className="absolute inset-0 w-full h-full opacity-[0.04]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
<path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
<path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
<path d="M2 12a10 10 0 0 1 18-6"></path>
<path d="M2 16h.01"></path>
<path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
<path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
<path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
<path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path>
</svg>
<svg className="absolute inset-0 w-full h-full transform scale-[0.9] opacity-[0.03]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
<path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
<path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
<path d="M2 12a10 10 0 0 1 18-6"></path>
<path d="M2 16h.01"></path>
<path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
<path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
<path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
<path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path>
</svg>
<svg className="absolute inset-0 w-full h-full transform scale-[1.1] opacity-[0.02]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></path>
<path d="M14 13.12c0 2.38 0 6.38-1 8.88"></path>
<path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></path>
<path d="M2 12a10 10 0 0 1 18-6"></path>
<path d="M2 16h.01"></path>
<path d="M21.8 16c.2-2 .131-5.354 0-6"></path>
<path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></path>
<path d="M8.65 22c.21-.66.45-1.32.57-2"></path>
<path d="M9 6.8a6 6 0 0 1 9 5.2v2"></path>
</svg>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E3A8A]/10 to-transparent h-[150px] w-full blur-md" style={{animation: 'scanline 6s linear infinite'}}></div>
</div>
<div className="max-w-[1200px] mx-auto px-4 relative z-10">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h1 className="md:text-6xl leading-tight text-5xl font-medium text-[#0F172A] tracking-tight mb-6">Fast, structured visa applications</h1>
<p className="text-base md:text-lg font-light text-[#64748B] mb-10 leading-relaxed max-w-2xl mx-auto">
            Complete your visa application in minutes using your saved profile.
            Clear steps, no confusion, full visibility from start to finish.
          </p>
<div className="flex items-center h-16 bg-white border border-[#E2E8F0] p-1.5 mb-10 shadow-sm focus-within:border-[#14B8A6] focus-within:ring-1 focus-within:ring-[#14B8A6] transition-all max-w-2xl mx-auto rounded-full">
<div className="pl-4 pr-3 text-[#64748B] flex items-center">
<iconify-icon className="" height="24" icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-base font-light text-[#0F172A] placeholder:text-[#64748B] h-full w-full" placeholder="Where are you traveling to?" type="text"/>
<button className="h-full px-8 bg-[#1E3A8A] text-white text-sm font-medium hover:bg-[#1E3A8A]/90 transition-colors rounded-full">
              Search
            </button>
</div>
<div className="flex flex-col items-center gap-8 w-full mt-2">

<div className="flex flex-col items-center gap-4">
<span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider">
                Popular Searches
              </span>
<div className="flex flex-wrap justify-center gap-3">
<a className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-full text-sm font-medium hover:bg-[#F8FAFC] hover:border-[#1E3A8A]/30 transition-all inline-flex items-center gap-2 shadow-sm" href="#">
<iconify-icon height="18" icon="twemoji:flag-united-arab-emirates" width="18"></iconify-icon>
                  UAE Visa
                </a>
<a className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-full text-sm font-medium hover:bg-[#F8FAFC] hover:border-[#1E3A8A]/30 transition-all inline-flex items-center gap-2 shadow-sm" href="#">
<iconify-icon className="" height="18" icon="twemoji:flag-singapore" width="18"></iconify-icon>
                  Singapore
                </a>
<a className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-full text-sm font-medium hover:bg-[#F8FAFC] hover:border-[#1E3A8A]/30 transition-all inline-flex items-center gap-2 shadow-sm" href="#">
<iconify-icon className="" height="18" icon="twemoji:flag-united-states" width="18"></iconify-icon>
                  US B1/B2
                </a>
<a className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-full text-sm font-medium hover:bg-[#F8FAFC] hover:border-[#1E3A8A]/30 transition-all inline-flex items-center gap-2 shadow-sm" href="#">
<iconify-icon height="18" icon="twemoji:flag-united-kingdom" width="18"></iconify-icon>
                  UK Standard
                </a>
<a className="h-10 px-4 bg-white border border-[#E2E8F0] text-[#0F172A] rounded-full text-sm font-medium hover:bg-[#F8FAFC] hover:border-[#1E3A8A]/30 transition-all inline-flex items-center gap-2 shadow-sm" href="#">
<iconify-icon height="18" icon="twemoji:flag-australia" width="18"></iconify-icon>
                  Australia 600
                </a>
</div>
</div>

<div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-6 pt-6 border-t border-[#E2E8F0] max-w-4xl mx-auto w-full">

<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-10 h-10 rounded-full bg-[#F59E0B] flex items-center justify-center border-2 border-white shadow-sm z-30">
<svg className="lucide lucide-star" fill="white" height="16" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<img alt="Traveller" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-20" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<img alt="Traveller" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm z-10" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&amp;h=64&amp;fit=crop&amp;crop=faces"/>
<div className="w-10 h-10 rounded-full bg-[#1E3A8A] text-white text-[11px] font-semibold flex items-center justify-center border-2 border-white shadow-sm z-0">
                    +24k
                  </div>
</div>
<div className="flex flex-col text-left">
<div className="flex gap-0.5 text-[#F59E0B] mb-0.5">
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
<svg fill="currentColor" height="14" stroke="none" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
</svg>
</div>
<span className="text-sm font-medium text-[#0F172A] leading-tight">
                    Verified by 24,000+ travellers
                  </span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 text-[#14B8A6] flex items-center justify-center border border-[#14B8A6]/20">
<svg className="lucide lucide-shield-check" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-[#0F172A] leading-tight mb-0.5">
                    ISO 27001 · DPDP compliant
                  </span>
<span className="text-xs text-[#64748B] font-light">
                    Bank-grade data security
                  </span>
</div>
</div>

<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] flex items-center justify-center border border-[#1E3A8A]/20">
<svg className="lucide lucide-globe-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"></path>
<path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-[#0F172A] leading-tight mb-0.5">
                    60+ Destinations
                  </span>
<span className="text-xs text-[#64748B] font-light">
                    Global coverage for Indians
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#ffffff] pt-24 pb-24">
<div className="lg:px-8 max-w-[1200px] mr-auto ml-auto pr-4 pl-4">
<div className="flex justify-center items-center">
<div className="inline-flex text-[11px] uppercase overflow-hidden font-bold tracking-widest bg-white border-[#E2E8F0] border rounded-full mb-10 px-3 py-1.5 relative shadow-sm gap-x-2.5 gap-y-2.5 items-center">
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
              Popular Destinations
            </span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="United Arab Emirates" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              United Arab Emirates
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹6,500
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  24-48 hrs
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  eTA
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Tourist &amp; Business Visas processing made simple. Get your
            electronic travel authorization securely and quickly.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span>Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="Singapore" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              Singapore
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹2,800
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  3-5 days
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Tourist
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Quick and easy tourist visa approval to explore the vibrant
            city-state of Singapore seamlessly.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span>Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="Thailand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              Thailand
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#22C55E] tracking-tight">
                Free
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Special Offer
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Instant
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div className="">
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Visa-free
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Instant tourist entry for Indian passports. Pack your bags and
            fly without any visa documentation worries.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span className="">Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="Schengen Area" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              Schengen Area
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹8,500
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  15-30 days
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Short-stay
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Access 27 European countries with a single unified short-stay
            visa. Full documentation guidance provided.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span className="">Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="United States" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              United States
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹13,500
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  2-3 weeks
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  B1/B2
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Multiple-entry tourist and business visa for the United States.
            Comprehensive interview preparation included.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span>Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="United Kingdom" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              United Kingdom
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹11,200
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="">
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  3-4 weeks
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Standard
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            6-month multiple entry visa to visit the UK for tourism,
            business, or family visits. Full guidance provided.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span className="">Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
<div className="relative h-[220px] w-full overflow-hidden shrink-0">
<img alt="Australia" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="bg-white p-4 relative z-10 -mt-6 rounded-[32px] rounded-b-[0px] shadow-[0_-12px_24px_rgba(0,0,0,0.06)] flex-1 flex flex-col">
<div className="w-10 h-1 bg-[#E2E8F0] rounded-full mx-auto mb-3 shrink-0"></div>
<div className="flex justify-between items-start mb-3 shrink-0">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] leading-tight max-w-[60%]">
              Australia
            </h3>
<div className="text-right">
<div className="text-lg font-medium text-[#0F172A] tracking-tight">
                ₹10,800
              </div>
<div className="text-[10px] font-medium text-[#64748B] uppercase tracking-wider">
                Starting From
              </div>
</div>
</div>
<div className="grid grid-cols-2 gap-2 mb-3 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-clock" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Processing
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  15-25 days
                </div>
</div>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg border border-[#E2E8F0] flex items-center justify-center text-[#0F172A] shrink-0">
<svg className="lucide lucide-star" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
</polygon>
</svg>
</div>
<div>
<div className="text-[10px] font-normal text-[#64748B]">
                  Visa Type
                </div>
<div className="text-[11px] font-medium text-[#0F172A]">
                  Subclass 600
                </div>
</div>
</div>
</div>
<p className="text-[12px] font-normal text-[#64748B] leading-relaxed mb-4 line-clamp-2 mt-auto">
            Explore Australia with a tourist stream visa. Fully online
            processing with seamless biometrics support.
          </p>
<button className="w-full h-10 bg-[#1E1B4B] hover:bg-[#0f0e26] text-white text-[13px] font-medium flex justify-between items-center px-4 transition-colors shrink-0 rounded-full">
<span>Apply now</span>
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col items-center justify-center bg-white rounded-[32px] border-2 border-dashed border-[#E2E8F0] p-4 text-center hover:border-[#1E1B4B] transition-all duration-300 h-full cursor-pointer group shadow-sm hover:shadow-xl">
<div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#1E1B4B] mb-4 group-hover:scale-110 transition-transform duration-500 border border-[#E2E8F0]">
<svg className="lucide lucide-globe-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
<path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17">
</path>
<path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] mb-2">
          Explore the World
        </h3>
<p className="text-[12px] font-normal text-[#64748B] mb-5 max-w-[200px] leading-relaxed">
          Unlock access to over 60+ countries with our simplified and
          transparent visa processes.
        </p>
<button className="h-10 px-5 bg-[#F8FAFC] border border-[#E2E8F0] text-[#0F172A] text-[13px] font-medium inline-flex items-center justify-center gap-2 transition-colors shadow-sm w-full max-w-[240px] group-hover:bg-[#1E1B4B] group-hover:text-white group-hover:border-[#1E1B4B] rounded-full">
              View all 60+
              <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-[#F8FAFC] border-[#E2E8F0] pt-24 pb-24 relative" id="how-it-works">
<div className="lg:px-8 max-w-[1200px] mr-auto ml-auto pr-4 pl-4">

<div className="z-10 text-center flex mr-auto mb-0 ml-auto relative">
<div className="inline-flex w-fit items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[11px] font-semibold tracking-widest uppercase mb-6 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
          Simple Process
        </span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="aspect-square lg:aspect-[4/3] overflow-visible flex bg-[#ffffff] w-full border-[#E2E8F0] border rounded-3xl relative shadow-inner items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#14B8A6]/20 blur-[80px] rounded-full pointer-events-none">
</div>

<div className="absolute inset-6 transition-all duration-500" id="mockup-1">
<div className="w-full h-full bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden relative flex flex-col">
<div className="h-28 bg-gradient-to-br from-[#1E3A8A] to-[#1E1B4B] w-full shrink-0"></div>
<div className="px-8 pb-8 -mt-12 relative flex-1 flex flex-col">
<div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-sm flex items-center justify-center mb-5 overflow-hidden shrink-0">
<img alt="Profile" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&amp;h=200&amp;fit=crop"/>
</div>
<div className="w-32 h-4 bg-[#0F172A] rounded-full mb-3 shrink-0"></div>
<div className="w-24 h-3 bg-[#64748B]/50 rounded-full mb-8 shrink-0"></div>
<div className="grid grid-cols-2 gap-4">
<div className="h-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"></div>
<div className="h-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"></div>
<div className="h-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"></div>
<div className="h-10 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg"></div>
</div>
</div>
</div>

<div className="absolute -right-4 lg:-right-8 bottom-12 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#E2E8F0] w-56">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-semibold text-[#0F172A]">Profile Complete</span>
<span className="text-xs font-bold text-[#14B8A6]">100%</span>
</div>
<div className="w-full h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
<div className="w-full h-full bg-[#14B8A6] rounded-full"></div>
</div>
</div>
</div>

<div className="absolute inset-6 transition-all duration-500" id="mockup-2">
<div className="w-full h-full bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden relative flex flex-col p-6 lg:p-8">
<div className="flex items-center gap-3 mb-6">
<svg className="text-[#64748B]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<circle cx="11" cy="11" r="8"></circle>
<path d="m21 21-4.3-4.3"></path>
</svg>
<div className="h-12 flex-1 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl flex items-center px-4 shadow-sm">
<div className="w-40 h-2.5 bg-[#E2E8F0] rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4 flex-1">
<div className="bg-white border-2 border-[#14B8A6] p-4 rounded-xl flex items-center gap-4 relative overflow-hidden shadow-sm">
<div className="absolute top-0 right-0 w-8 h-8 bg-[#14B8A6] rounded-bl-xl flex items-center justify-center text-white">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="14">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex-shrink-0 flex items-center justify-center overflow-hidden">
<img alt="UAE" className="w-full h-full object-cover" src="https://flagcdn.com/w80/ae.png"/>
</div>
<div>
<div className="h-3 w-20 bg-[#0F172A] rounded-full mb-2"></div>
<div className="h-2 w-12 bg-[#64748B] rounded-full"></div>
</div>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex-shrink-0 overflow-hidden">
<img alt="SG" className="w-full h-full object-cover" src="https://flagcdn.com/w80/sg.png"/>
</div>
<div>
<div className="h-3 w-16 bg-[#0F172A]/70 rounded-full mb-2"></div>
<div className="h-2 w-10 bg-[#64748B]/50 rounded-full"></div>
</div>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex-shrink-0 overflow-hidden">
<img alt="US" className="w-full h-full object-cover" src="https://flagcdn.com/w80/us.png"/>
</div>
<div>
<div className="h-3 w-24 bg-[#0F172A]/70 rounded-full mb-2"></div>
<div className="h-2 w-14 bg-[#64748B]/50 rounded-full"></div>
</div>
</div>
<div className="bg-[#F8FAFC] border border-[#E2E8F0] p-4 rounded-xl flex items-center gap-4 shadow-sm">
<div className="w-12 h-12 rounded-full bg-[#E2E8F0] flex-shrink-0 overflow-hidden">
<img alt="UK" className="w-full h-full object-cover" src="https://flagcdn.com/w80/gb.png"/>
</div>
<div>
<div className="h-3 w-16 bg-[#0F172A]/70 rounded-full mb-2"></div>
<div className="h-2 w-12 bg-[#64748B]/50 rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="absolute -left-4 lg:-left-8 bottom-20 bg-[#0F172A] text-white p-4 rounded-2xl shadow-xl w-56 flex items-center gap-4 border border-white/10">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<div className="text-xs font-medium text-white/60 mb-0.5">Selected Visa</div>
<div className="text-sm font-semibold">UAE Tourist eTA</div>
</div>
</div>
</div>

<div className="absolute inset-6 transition-all duration-500" id="mockup-3">
<div className="w-full h-full bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden relative flex flex-col p-6 lg:p-8">
<div className="h-28 rounded-2xl border-2 border-dashed border-[#14B8A6]/40 bg-[#14B8A6]/5 flex flex-col items-center justify-center mb-6 shrink-0">
<svg className="mb-3" fill="none" height="28" stroke="#14B8A6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
<div className="text-sm font-medium text-[#14B8A6]">Drag &amp; Drop secure files</div>
</div>
<div className="flex flex-col gap-3">
<div className="p-3 border border-[#E2E8F0] rounded-xl flex items-center justify-between bg-[#F8FAFC]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center text-xs font-bold">
              PDF</div>
<div>
<div className="h-2.5 w-24 bg-[#0F172A] rounded-full mb-2"></div>
<div className="h-1.5 w-16 bg-[#64748B] rounded-full"></div>
</div>
</div>
<svg fill="none" height="20" stroke="#14B8A6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="p-3 border border-[#E2E8F0] rounded-xl flex items-center justify-between bg-[#F8FAFC]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center text-xs font-bold">
              JPG</div>
<div>
<div className="h-2.5 w-20 bg-[#0F172A] rounded-full mb-2"></div>
<div className="h-1.5 w-12 bg-[#64748B] rounded-full"></div>
</div>
</div>
<svg fill="none" height="20" stroke="#14B8A6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
</div>
</div>

<div className="absolute -right-2 lg:-right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#14B8A6]/30 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="pr-2">
<div className="text-sm font-semibold text-[#0F172A] mb-0.5">AI Verification</div>
<div className="text-xs text-[#64748B]">Quality check passed</div>
</div>
</div>
</div>

<div className="absolute inset-6 transition-all duration-500" id="mockup-4">
<div className="w-full h-full bg-white rounded-3xl border border-[#E2E8F0] shadow-xl overflow-hidden relative flex flex-col p-6 lg:p-8">
<div className="bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] rounded-2xl p-6 text-white mb-8 shadow-md">
<div className="text-sm font-medium text-white/70 mb-1">Application ID</div>
<div className="text-2xl font-semibold tracking-tight">RVD-9482X</div>
</div>
<div className="relative ml-5 border-l-2 border-[#E2E8F0] flex flex-col gap-8 flex-1">
<div className="relative -ml-[9px] flex items-center gap-5">
<div className="w-4 h-4 bg-[#14B8A6] rounded-full ring-4 ring-white"></div>
<div>
<div className="text-base font-semibold text-[#0F172A]">Documents Verified</div>
<div className="text-sm text-[#64748B]">Today, 10:45 AM</div>
</div>
</div>
<div className="relative -ml-[9px] flex items-center gap-5">
<div className="w-4 h-4 bg-white border-2 border-[#1E3A8A] rounded-full ring-4 ring-white"></div>
<div>
<div className="text-base font-semibold text-[#1E3A8A]">Embassy Review</div>
<div className="text-sm text-[#1E3A8A]/70">In progress</div>
</div>
</div>
<div className="relative -ml-[9px] flex items-center gap-5">
<div className="w-4 h-4 bg-[#E2E8F0] rounded-full ring-4 ring-white"></div>
<div>
<div className="text-base font-medium text-[#64748B]">Visa Issued</div>
<div className="text-sm text-[#64748B] opacity-50">Pending</div>
</div>
</div>
</div>
</div>

<div className="absolute right-4 lg:-right-4 bottom-10 bg-white p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-[#E2E8F0] flex items-center gap-4 w-56">
<div className="w-12 h-12 rounded-full bg-[#F59E0B]/10 flex items-center justify-center text-[#F59E0B]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
</div>
<div className="">
<div className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">Est. Delivery</div>
<div className="text-base font-bold text-[#0F172A]">Oct 24, 2023</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4 relative py-4 lg:pl-6">

<div className="relative flex items-start gap-5 p-4 rounded-2xl cursor-pointer group transition-all border" id="step-container-1" onmouseenter="switchStep(1)">
<div className="hidden" id="step-line-1"></div>
<div className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-300 relative z-20 border" id="step-icon-1">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] mb-1.5 transition-colors">
              1. Create your profile
            </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed max-w-sm">
              Save your details once to auto-fill future applications automatically.
            </p>
</div>
</div>

<div className="relative flex items-start gap-5 p-4 rounded-2xl cursor-pointer group transition-all border hover:bg-white hover:border-[#E2E8F0] hover:shadow-sm" id="step-container-2" onmouseenter="switchStep(2)">
<div className="hidden" id="step-line-2"></div>
<div className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-300 relative z-20 border" id="step-icon-2">
<svg className="" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" r="10"></circle>
<path className="" d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] mb-1.5 transition-colors">
              2. Choose destination
            </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed max-w-sm">
              Select your country and visa type to view exact requirements and costs.
            </p>
</div>
</div>

<div className="relative flex items-start gap-5 p-4 rounded-2xl cursor-pointer group transition-all border hover:bg-white hover:border-[#E2E8F0] hover:shadow-sm" id="step-container-3" onmouseenter="switchStep(3)">
<div className="hidden" id="step-line-3"></div>
<div className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-300 relative z-20 border" id="step-icon-3">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M12 18v-6"></path>
<path d="m9 15 3-3 3 3"></path>
</svg>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] mb-1.5 transition-colors">
              3. Upload documents
            </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed max-w-sm">
              Securely upload files. Our system checks for quality and compliance.
            </p>
</div>
</div>

<div className="relative flex items-start gap-5 p-4 rounded-2xl cursor-pointer group transition-all border hover:bg-white hover:border-[#E2E8F0] hover:shadow-sm" id="step-container-4" onmouseenter="switchStep(4)">
<div className="hidden" id="step-line-4"></div>
<div className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center transition-all duration-300 relative z-20 border" id="step-icon-4">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="19" r="3"></circle>
<path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
<circle cx="18" cy="5" r="3"></circle>
</svg>
</div>
<div className="flex flex-col pt-0.5">
<h3 className="text-lg font-medium tracking-tight text-[#0F172A] mb-1.5 transition-colors">
              4. Track application
            </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed max-w-sm">
              Monitor your visa status in real-time until your passport is returned.
            </p>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 bg-white relative overflow-hidden">

<div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'20\\' height=\\'20\\' viewBox=\\'0 0 20 20\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'%230F172A\\' fillOpacity=\\'1\\' fill-rule=\\'evenodd\\'%3E%3Ccircle cx=\\'2\\' cy=\\'2\\' r=\\'1\\'/%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-[1200px] mx-auto px-4 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="flex flex-col">
<div className="mb-5">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[11px] font-semibold tracking-widest uppercase mb-10 relative overflow-hidden">
<div className="bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
              Smart Features
            </span>
</div>
<h2 className="lg:text-5xl leading-tight text-4xl font-medium text-[#0F172A] tracking-tight mb-6">A smarter way to apply.
  </h2>
<p className="leading-relaxed text-lg font-light text-[#64748B] max-w-xl">Simple steps, fewer errors, complete
    transparency.</p>
</div>
<div className="flex flex-col gap-2 w-full">

<div className="group flex gap-5 p-4 -ml-4 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all duration-300 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shrink-0 shadow-sm">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M15 4V2"></path><path d="M15 16v-2"></path><path d="M8 9h2"></path><path d="M20 9h2"></path><path d="M17.8 11.8l1.4 1.4"></path><path d="M17.8 6.2l1.4-1.4"></path><path d="M12.2 6.2l-1.4-1.4"></path><path d="M12.2 11.8l-1.4 1.4"></path><path d="m3 21 9-9"></path><path d="M12.2 6.2 11 5"></path></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-[#0F172A] mb-1.5">Profile-based auto-fill</h4>
<p className="text-sm font-light text-[#64748B] leading-relaxed">Enter data once. We automatically map your details to standard embassy forms, saving you hours of repetitive typing.</p>
</div>
</div>

<div className="group flex gap-5 p-4 -ml-4 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all duration-300 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shrink-0 shadow-sm">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-[#0F172A] mb-1.5">Country-specific requirements</h4>
<p className="text-sm font-light text-[#64748B] leading-relaxed">Get dynamic checklists tailored exactly to your destination, nationality, and employment type instantly.</p>
</div>
</div>

<div className="group flex gap-5 p-4 -ml-4 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all duration-300 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shrink-0 shadow-sm">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-[#0F172A] mb-1.5">Success meter guidance</h4>
<p className="text-sm font-light text-[#64748B] leading-relaxed">Identify weak spots in your application before submission. Our AI checks for consistency across all your documents.</p>
</div>
</div>

<div className="group flex gap-5 p-4 -ml-4 rounded-2xl hover:bg-[#F8FAFC] border border-transparent hover:border-[#E2E8F0] transition-all duration-300 hover:shadow-sm">
<div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors shrink-0 shadow-sm">
<svg fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
</div>
<div className="">
<h4 className="text-base font-semibold text-[#0F172A] mb-1.5">Real-time application tracking</h4>
<p className="text-sm font-light text-[#64748B] leading-relaxed">Receive instant notifications as your visa moves through embassy processing stages until passport delivery.</p>
</div>
</div>
</div>
</div>

<div className="relative lg:ml-8 mt-12 lg:mt-0">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[120%] bg-gradient-to-tr from-[#1E3A8A]/15 to-[#14B8A6]/15 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative bg-white border border-[#E2E8F0] rounded-[24px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">

<div className="px-6 py-5 border-b border-[#E2E8F0] bg-[#F8FAFC]/50 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white border border-[#E2E8F0] flex items-center justify-center text-[#1E3A8A] shadow-sm">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
</div>
<h3 className="text-sm font-semibold text-[#0F172A]">Document Quality Check</h3>
</div>
<div className="px-2.5 py-1 rounded-md bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-[#14B8A6] text-[11px] font-semibold tracking-wider uppercase flex items-center gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse"></div>
              Scanning
            </div>
</div>

<div className="p-6 space-y-4 bg-[#F8FAFC]/30">

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-lg bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div className="">
<div className="text-sm font-medium text-[#0F172A] mb-0.5">Bank Statement (6 mos)</div>
<div className="text-[11px] text-[#64748B] font-medium">HDFC_Statement.pdf • 2.4 MB</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-1.5 rounded-lg shrink-0 w-fit">
<svg className="" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Validated
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/5 shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F59E0B]"></div>
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-lg bg-white text-[#F59E0B] border border-[#F59E0B]/20 shadow-sm">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<div>
<div className="text-sm font-medium text-[#0F172A] mb-0.5">Passport Photograph</div>
<div className="text-[11px] text-[#F59E0B] font-medium">Action Required</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-3 py-1.5 rounded-lg shrink-0 w-fit">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
                Too Dark
              </div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded-lg bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div>
<div className="text-sm font-medium text-[#0F172A] mb-0.5">Employment Letter</div>
<div className="text-[11px] text-[#64748B] font-medium">TCS_Letter.pdf • 1.1 MB</div>
</div>
</div>
<div className="flex items-center gap-1.5 text-xs font-semibold text-[#22C55E] bg-[#22C55E]/10 border border-[#22C55E]/20 px-3 py-1.5 rounded-lg shrink-0 w-fit">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                Validated
              </div>
</div>
</div>

<div className="p-6 bg-white border-t border-[#E2E8F0]">
<div className="flex justify-between items-end mb-4">
<div>
<span className="text-xs font-semibold text-[#64748B] uppercase tracking-wider block mb-1">Application Strength</span>
<span className="text-3xl font-semibold tracking-tight text-[#0F172A]">85<span className="text-xl text-[#64748B] font-medium">%</span></span>
</div>
<div className="text-right">
<span className="text-xs font-semibold text-[#14B8A6] flex items-center gap-1 bg-[#14B8A6]/10 px-2.5 py-1.5 rounded-md">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                  Good
                </span>
</div>
</div>
<div className="w-full bg-[#F8FAFC] border border-[#E2E8F0] h-3 rounded-full overflow-hidden p-0.5">
<div className="bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] h-full w-[85%] rounded-full relative">
<div className="absolute inset-0 bg-white/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>
</div>
<div className="mt-5 flex items-start gap-2.5 p-3.5 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl shadow-sm">
<svg className="text-[#14B8A6] shrink-0 mt-0.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="16" y2="12"></line><line x1="12" x2="12.01" y1="8" y2="8"></line></svg>
<p className="text-[13px] font-medium text-[#64748B] leading-relaxed">
                Fix <span className="text-[#0F172A] font-semibold">1 warning</span> to improve your approval likelihood to 98%.
              </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-[#E2E8F0]" id="pricing">
<div className="max-w-[1200px] mx-auto px-4 lg:px-8 w-full">
<div className="mb-12 max-w-2xl">
<div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[11px] font-semibold tracking-widest uppercase mb-6 relative overflow-hidden">
<div className="bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
              Our Commitment
            </span>
</div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#0F172A] mb-4">
      Built on trust and transparency
    </h2>
<p className="text-base font-normal text-[#64748B] leading-relaxed">
      We understand the critical nature of travel documents. That's why we've built our entire infrastructure around security, clarity, and precision.
    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group relative p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
<svg className="text-[#1E3A8A]" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300 relative z-10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#0F172A] mb-3 relative z-10">
        Transparent pricing
      </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed relative z-10">
        See exact embassy fees, taxes, and our service charge upfront. No
        hidden costs or last-minute surprises.
      </p>
</div>

<div className="group relative p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
<svg className="text-[#1E3A8A]" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300 relative z-10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#0F172A] mb-3 relative z-10">
        Estimated delivery timelines
      </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed relative z-10">
        We analyze historical data from embassies to provide you with
        realistic, accurate processing expectations.
      </p>
</div>

<div className="group relative p-8 rounded-[24px] bg-white border border-[#E2E8F0] shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0">
<svg className="text-[#1E3A8A]" fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="80" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="w-12 h-12 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm flex items-center justify-center text-[#1E3A8A] mb-6 group-hover:bg-[#1E3A8A] group-hover:text-white transition-colors duration-300 relative z-10">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-semibold tracking-tight text-[#0F172A] mb-3 relative z-10">
        Document responsibility
      </h3>
<p className="text-sm font-normal text-[#64748B] leading-relaxed relative z-10">
        Your physical passports are handled with strict security protocols
        and returned via tracked, insured courier.
      </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#F1F5F9]" id="agents">
<div className="max-w-[1200px] mx-auto px-4 text-center">
<div className="flex w-fit mx-auto items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[11px] font-bold tracking-widest uppercase mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
            For Partners
          </span>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-6">
          Built for travel agents and companies
        </h2>
<p className="text-base font-light text-[#64748B] max-w-2xl mx-auto mb-10">
          A dedicated portal to manage hundreds of client applications
          seamlessly. Replace messy spreadsheets and emails with a structured
          dashboard.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-10 text-sm font-light text-[#0F172A]">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1E3A8A]" height="18" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Manage client applications
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1E3A8A]" height="18" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            OTP-based secure access
          </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#1E3A8A]" height="18" icon="solar:check-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Replace manual workflows
          </div>
</div>
<a className="h-12 px-8 bg-white border border-[#E2E8F0] text-[#0F172A] text-sm font-medium inline-flex items-center justify-center shadow-sm hover:bg-[#F8FAFC] transition-colors rounded-full" href="#">
          Explore Agent Platform
        </a>
</div>
</section>

<section className="py-24">
<div className="max-w-[800px] mx-auto px-4 text-center">
<div className="flex w-fit mx-auto items-center gap-2.5 px-3 py-1.5 rounded-full bg-white border border-[#E2E8F0] shadow-sm text-[11px] font-bold tracking-widest uppercase mb-4 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/5 to-[#14B8A6]/5"></div>
<div className="relative flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-[#14B8A6]/40 animate-ping absolute"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] relative z-10"></div>
</div>
<span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6]">
            Get Started
          </span>
</div>
<h2 className="text-3xl font-medium tracking-tight mb-4">
          Start your visa application today
        </h2>
<p className="text-base font-light text-[#64748B] mb-8">
          Complete your application faster with a guided process designed for
          clarity.
        </p>
<a className="h-12 px-8 bg-[#1E3A8A] text-white text-sm font-medium inline-flex items-center justify-center hover:bg-[#1E3A8A]/90 transition-colors shadow-sm rounded-full" href="#">
          Start Application
        </a>
</div>
</section>

<footer className="py-16 bg-white border-t border-[#E2E8F0]">
<div className="max-w-[1200px] mx-auto px-4">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

<div>
<div className="flex items-center gap-2 mb-6">
<img alt="RapidVisaDesk Logo" className="w-6 h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/699c756d-37f8-430a-9929-905c3c4d67d7_320w.png"/>
<span className="text-sm font-medium tracking-tight">
                RapidVisaDesk
              </span>
</div>
<p className="text-xs font-light text-[#64748B] pr-4">
              Simplifying global mobility with structured, transparent visa
              processing.
            </p>
</div>

<div>
<h4 className="text-sm font-medium text-[#0F172A] mb-4">Product</h4>
<ul className="space-y-3 text-sm font-light text-[#64748B]">
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Destinations
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  How it works
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Agent Portal
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-[#0F172A] mb-4">Company</h4>
<ul className="space-y-3 text-sm font-light text-[#64748B]">
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  About Us
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Contact
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Blog
                </a>
</li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-[#0F172A] mb-4">Legal</h4>
<ul className="space-y-3 text-sm font-light text-[#64748B]">
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Terms of Service
                </a>
</li>
<li>
<a className="hover:text-[#1E3A8A] transition-colors" href="#">
                  Refund Policy
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-[#64748B]">
<p>© 2023 RapidVisaDesk. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-[#1E3A8A]" href="#">
<iconify-icon height="18" icon="solar:letter-linear" width="18"></iconify-icon>
</a>
<a className="hover:text-[#1E3A8A]" href="#">
<iconify-icon height="18" icon="solar:phone-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
