import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
        
        // Mobile Menu Toggle Logic
        document.addEventListener('DOMContentLoaded', () => {
            const menuBtn = document.getElementById('menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIconOpen = document.getElementById('menu-icon-open');
            const menuIconClose = document.getElementById('menu-icon-close');

            if(menuBtn && mobileMenu) {
                menuBtn.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.contains('hidden');
                    
                    if (isHidden) {
                        mobileMenu.classList.remove('hidden');
                        menuIconOpen.classList.add('hidden');
                        menuIconClose.classList.remove('hidden');
                    } else {
                        mobileMenu.classList.add('hidden');
                        menuIconOpen.classList.remove('hidden');
                        menuIconClose.classList.add('hidden');
                    }
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky z-50 bg-[#050505]/80 w-full border-zinc-900/50 border-b top-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">

<a className="block group hover:opacity-100 transition-opacity opacity-100 shrink-0" href="/home">
<img alt="Project Enfield" className="w-auto h-16 object-contain" src="https://project-enfield.udyomi.com/wp-content/uploads/2025/11/Header-e1764266749790.png?w=800&amp;q=80"/>
</a>

<nav className="hidden lg:flex items-center gap-3">
<a className="flex items-center gap-2 hover:text-white hover:border-zinc-600 transition-all text-sm font-medium text-zinc-400 bg-zinc-900/50 border-zinc-800 border rounded-full pt-2 pr-4 pb-2 pl-4" href="https://whatsapp.com/channel/0029VbBf0VhLSmbhrqqCpl2U">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                    Join WhatsApp Channel
                </a>
<a className="flex items-center gap-2 hover:text-white hover:border-zinc-600 transition-all text-sm font-medium text-zinc-400 bg-zinc-900/50 border-zinc-800 border rounded-full pt-2 pr-4 pb-2 pl-4" href="/support-center">
<svg className="lucide lucide-life-buoy w-4 h-4" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
                    Support Center
                </a>
<a className="flex items-center gap-2 hover:bg-zinc-200 transition-all text-sm font-medium text-black bg-white border-white border rounded-full pt-2 pr-4 pb-2 pl-4" href="/dashboard/">
<svg className="lucide lucide-layout-dashboard w-4 h-4" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                    Dashboard
                </a>
</nav>

<button className="lg:hidden p-2 text-zinc-400 hover:text-white focus:outline-none" id="menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" id="menu-icon-open" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
<svg className="lucide lucide-x w-6 h-6 hidden" data-lucide="x" fill="none" height="24" id="menu-icon-close" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="hidden lg:hidden border-b border-zinc-900 bg-[#050505] absolute top-20 left-0 w-full px-6 py-6 shadow-2xl flex flex-col space-y-4" id="mobile-menu">
<a className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-zinc-900/50 p-3 rounded-lg transition-colors border border-transparent hover:border-zinc-800" href="https://whatsapp.com/channel/0029VbBf0VhLSmbhrqqCpl2U">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="font-medium">Join WhatsApp Channel</span>
</a>
<a className="flex items-center gap-3 text-zinc-400 hover:text-white hover:bg-zinc-900/50 p-3 rounded-lg transition-colors border border-transparent hover:border-zinc-800" href="/support-center">
<svg className="lucide lucide-life-buoy w-5 h-5" data-lucide="life-buoy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path><circle cx="12" cy="12" r="4"></circle></svg>
<span className="font-medium">Support Center</span>
</a>
<a className="flex items-center gap-3 text-black bg-white hover:bg-zinc-200 p-3 rounded-lg transition-colors border border-white" href="/dashboard/">
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium">Dashboard</span>
</a>
</div>
</header>

<main className="flex flex-col max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 items-center">

<div className="flex flex-col items-center text-center space-y-8 mb-20 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/30">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="uppercase text-xs font-medium text-zinc-400 tracking-widest">Welcome to Project Enfield!</span>
</div>
<h1 className="text-4xl font-semibold text-white tracking-tight leading-[1.1] max-w-3xl md:text-5xl">Turn learning into experience <br/> <span className="text-zinc-500">through Project Enfield!</span></h1>
</div>

<div className="w-full max-w-5xl space-y-6">

<a className="group flex flex-col md:flex-row overflow-hidden hover:border-zinc-600 transition-all duration-300 shadow-black/50 bg-[#0f0f10] w-full border-zinc-800 border rounded-3xl relative shadow-2xl" href="https://project-enfield.udyomi.com/projects/project-enfield/lessons/featured-video-project-enfield/">

<div className="md:w-5/12 md:h-auto overflow-hidden bg-zinc-800 w-full h-64 relative">
<img alt="Newsletter" className="group-hover:scale-105 transition-transform duration-500 opacity-100 w-full h-full object-cover" src="https://project-enfield.udyomi.com/wp-content/uploads/2025/12/Modern-Comparison-YouTube-Thumbnail-1.png?w=800&amp;q=80"/>
<div className="md:bg-gradient-to-l bg-gradient-to-r from-[#0f0f10] via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div className="text-[10px] uppercase font-semibold text-white tracking-wider bg-red-600 border-white/10 border rounded px-2 py-1 absolute top-4 left-4 backdrop-blur">LIVE CHALLENGE</div>
</div>

<div className="flex-1 md:p-10 flex flex-col pt-8 pr-8 pb-8 pl-8 relative items-start justify-center">
<div className="inline-flex text-black bg-white w-12 h-12 rounded-xl mb-6 items-center justify-center">
<svg className="lucide lucide-mail stroke-[1.5] w-6 h-6" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-3">Project Enfield</h2>
<p className="leading-relaxed text-lg text-zinc-400 max-w-lg mb-8">Project Enfield is not just a course — it’s your path to growth, confidence, and real experience.
Stay consistent, trust the process, and you’ll achieve more than you expect.</p>
<div className="inline-flex group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 text-sm font-medium text-white border-zinc-700 border rounded-full mt-auto pt-2.5 pr-6 pb-2.5 pl-6 items-center">Continue Learning<svg className="lucide lucide-arrow-right transition-transform group-hover:translate-x-1 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
</div>
</a>
</div>
</main>

<footer className="bg-[#050505] border-zinc-900 border-t mt-20 pt-20 pb-12">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">

<div className="space-y-6">
<div className="block">

<img alt="Project Enfield" className="w-auto h-14 object-contain cursor-pointer" onclick="window.location.href='/home'" role="button" src="https://project-enfield.udyomi.com/wp-content/uploads/2025/11/Header-e1764266749790.png?w=800&amp;q=80"/>
</div>
<p className="leading-relaxed text-lg text-zinc-500 max-w-md">Focused learning. Real skills. Real financial impact.</p>
</div>

<div className="md:flex md:justify-end">
<div className="space-y-6">
<h3 className="uppercase text-sm font-semibold text-white tracking-wider">Resources</h3>
<ul className="space-y-4">
<li className=""><a className="hover:text-white transition-colors text-lg text-zinc-500" href="https://udyomi.com/privacy-policy/">Privacy Policy</a></li>
<li className=""><a className="hover:text-white transition-colors text-lg text-zinc-500" href="https://udyomi.com/terms-and-conditions/">Terms &amp; Conditions</a></li><li className=""><a className="hover:text-white transition-colors text-lg text-zinc-500" href="https://udyomi.com/refund_returns/">Refund &amp; Returns Policy</a></li>
</ul>
</div>
</div>
</div>

<div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-sm text-zinc-600">© 2025, UDYOMI. All Rights Reserved</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors text-zinc-600" href="https://www.facebook.com/CallMeAtu">
<svg className="lucide lucide-facebook" data-icon-replaced="true" data-icon-set="lucide" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="hover:text-white transition-colors text-zinc-600" href="https://instagram.com/itsAtanuSaha">
<svg className="lucide lucide-instagram w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="hover:text-white transition-colors text-zinc-600" href="https://www.youtube.com/@itsAtanuSaha">
<svg className="lucide lucide-youtube w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a><a className="hover:text-white transition-colors text-zinc-600" href="https://linkedin.com/in/itsAtanuSaha">
<svg className="lucide lucide-linkedin lucide-youtube w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
