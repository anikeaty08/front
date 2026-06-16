import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const penContainer = document.getElementById('pen-container');
            const heroSection = document.getElementById('hero');
            const transitionZone = document.getElementById('transition-zone');
            
            let lastScrollY = window.scrollY;
            
            function onScroll() {
                const scrollY = window.scrollY;
                const viewportHeight = window.innerHeight;
                
                // 1. Pen/Stylus Rotation & Initial Descent
                // Minimal rotation for "calm" feel, moves straight down mostly
                const rotation = Math.min(scrollY * 0.02, 5); 
                
                // 2. Docking Logic
                const transitionRect = transitionZone.getBoundingClientRect();
                const dockOffset = 150; 
                
                if (transitionRect.top < (viewportHeight / 2) + dockOffset) {
                    // Lock phase into the dark section
                    // Settle effect
                    penContainer.style.transform = `translate(-50%, -50%) rotate(${rotation}deg) scale(0.9)`;
                    
                    // Fade out slightly when deep in footer to not distract from text
                    if (transitionRect.top < 0) {
                        penContainer.style.opacity = Math.max(0.1, 1 + (transitionRect.top / 600));
                    } else {
                        penContainer.style.opacity = 1;
                    }

                } else {
                    // Floating Phase
                    penContainer.style.opacity = 1;
                    // Move pen down with scroll to act as a "guide"
                    const travelDistance = Math.min(scrollY * 0.5, 300);
                    penContainer.style.transform = `translate(-50%, calc(-50% + ${travelDistance}px)) rotate(${rotation}deg)`;
                }

                // 3. Hero Text Parallax
                const heroText = heroSection.querySelector('.text-center');
                if (scrollY < viewportHeight && heroText) {
                    heroText.style.transform = `translateY(${scrollY * 0.4}px)`;
                    heroText.style.opacity = 1 - (scrollY / (viewportHeight * 0.8));
                }

                lastScrollY = scrollY;
                requestAnimationFrame(onScroll);
            }

            // Init reveal animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));

            window.addEventListener('scroll', () => requestAnimationFrame(onScroll));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed md:px-12 md:py-8 flex text-slate-900 mix-blend-darken w-full z-40 pt-6 pr-6 pb-6 pl-6 top-0 items-center justify-between">
<a className="font-sans-clean tracking-[0.1em] font-medium text-sm text-slate-700" href="#">YesOnUs</a>
<div className="flex items-center gap-6">

</div>
</nav>


<div id="pen-container">
<svg className="beaklet-pen" preserveaspectratio="xMidYMid meet" viewbox="0 0 100 600">
<defs>

<lineargradient id="barrelGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#cbd5e1', stopOpacity: '1'}}></stop>
<stop offset="40%" style={{stopColor: '#f1f5f9', stopOpacity: '1'}}></stop>
<stop offset="60%" style={{stopColor: '#f1f5f9', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#94a3b8', stopOpacity: '1'}}></stop>
</lineargradient>
<lineargradient id="gripGrad" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#475569', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#64748b', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#334155', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path d="M35,50 L65,50 L65,450 C65,460 60,480 50,490 C40,480 35,460 35,450 Z" fill="url(#barrelGrad)"></path>

<rect fill="url(#gripGrad)" height="120" rx="2" width="34" x="33" y="50"></rect>

<rect fill="#94a3b8" height="4" width="34" x="33" y="170"></rect>

<path d="M40,490 L50,530 L60,490 Z" fill="#64748b"></path>
</svg>
</div>

<section className="flex flex-col z-10 w-full min-h-screen relative items-center justify-center" id="hero">
<div className="text-center relative top-[-5vh] px-4">
<h1 className="md:text-7xl leading-[1.1] reveal-text text-5xl font-light text-slate-800 tracking-tight font-serif-display visible">
                Healthcare is<br/>complicated.
            </h1>
<p className="md:text-4xl reveal-text text-2xl text-slate-500 font-serif-display italic text-center mt-6 relative left-0 visible">
                You shouldn’t have to navigate it alone.
            </p>
</div>
<div className="absolute bottom-16 md:bottom-24 text-center max-w-lg px-6 reveal-text visible">
<p className="font-sans-clean text-sm md:text-base font-light text-slate-600 tracking-wide leading-relaxed">
                YesOnUs is a patient-first coordination and planning layer. We help patients, families, and care teams make sense of care, coverage, and next steps — without pressure, upselling, or judgment.
            </p>
</div>
</section>

<section className="w-full py-24 md:py-32 relative z-20" id="products">
<div className="max-w-4xl mx-auto px-6 md:px-12">

<div className="mb-24">
<div className="text-center mb-16">
<h2 className="font-serif-display text-3xl md:text-4xl text-slate-800 font-light mb-4">If You’re Here, It’s Usually Because…</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 items-start font-sans-clean text-slate-600 font-light">
<div className="group">
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-12 transition-all duration-500"></div>
<p>You or someone you love needs care, and you’re trying to understand options, bills, or next steps.</p>
</div>
<div className="group">
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-12 transition-all duration-500"></div>
<p>You want clarity before, during, or after treatment.</p>
</div>
<div className="group">
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-12 transition-all duration-500"></div>
<p>You’re doing everything you can — and it still feels heavy.</p>
</div>
<div className="group">
<div className="w-8 h-[1px] bg-slate-300 mb-4 group-hover:w-12 transition-all duration-500"></div>
<p className="italic text-slate-500">That’s normal. The system wasn’t built to make this easy.</p>
</div>
</div>
</div>

<div className="md:text-center max-w-2xl mx-auto mt-32">
<h2 className="font-serif-display text-3xl md:text-4xl text-slate-800 font-light mb-8">What YesOnUs Is</h2>
<p className="font-sans-clean text-slate-600 leading-relaxed mb-8">
                    YesOnUs exists to give people back clarity, continuity, and control — without telling them what to do.
                </p>
<ul className="text-left font-sans-clean text-sm md:text-base text-slate-600 space-y-4 list-none pl-4 border-l border-slate-200">
<li>We help patients understand their care options.</li>
<li>We document what matters to them.</li>
<li>We get support when dental and medical care overlap.</li>
<li>We navigate billing questions that are often ignored or mishandled.</li>
<li>We create continuity between visits, providers, and decisions.</li>
</ul>
<div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs uppercase tracking-wider text-slate-400 font-sans-clean">
<span>We don't diagnose</span>
<span>We don't replace providers</span>
<span>We don't push treatments</span>
</div>
<p className="mt-8 font-serif-display text-xl text-slate-700 italic">
                    We help people think clearly — and be heard.
                </p>
</div>
</div>
</section>

<section className="w-full py-24 bg-[#FDFDFB] relative z-20" id="story">
<div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-5">
<h2 className="font-serif-display text-4xl md:text-5xl text-slate-800 leading-[1.1] font-light tracking-tight">
                    Why This Matters
                </h2>
<div className="mt-8 text-slate-500 font-sans-clean text-sm leading-relaxed space-y-4">
<p>Most care decisions are made from stress, short visits, incomplete information, and memory, not records.</p>
<p>Patients are asked to explain themselves again and again. Care teams are forced to work without context. Families are left trying to piece everything together.</p>
</div>
</div>

<div className="md:col-span-6 md:col-start-7 flex flex-col gap-8 pt-2">
<p className="font-serif-display text-2xl text-slate-700 italic">
                    YesOnUs helps change that.
                </p>
<div className="font-sans-clean text-sm text-slate-600 leading-relaxed space-y-2">
<p>We support the creation of:</p>
<ul className="list-disc pl-5 space-y-2 marker:text-slate-300">
<li>Clear records of symptoms, preferences, and outcomes</li>
<li>Pre-visit and post-visit logs</li>
<li>Shared context that follows the patient — not the provider</li>
</ul>
</div>
<p className="font-sans-clean text-sm font-medium text-slate-800">
                    Better context leads to better conversations. <br/>
                    Better conversations lead to better care.
                </p>
</div>
</div>

<div className="max-w-4xl mx-auto px-6 mt-32 border-t border-slate-200 pt-16">
<h3 className="font-serif-display text-3xl text-slate-800 mb-6">For Social Workers, Nurses, and Care Advocates</h3>
<p className="font-sans-clean text-slate-600 mb-8 max-w-2xl">
                You carry the hardest parts of care — often without tools, time, or recognition. YesOnUs is built to support your work, not replace it.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans-clean text-sm text-slate-600">
<ul className="space-y-3">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-circle-linear"></iconify-icon> A safe place to refer patients who need clarity</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-circle-linear"></iconify-icon> No cost to you or your patients</li>
</ul>
<ul className="space-y-3">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Resources that reduce your burden</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-slate-400" icon="solar:check-circle-linear"></iconify-icon> Documentation patients can bring with them</li>
</ul>
</div>
<p className="mt-8 font-serif-display italic text-lg text-slate-700">You do the human work. We help with the structure.</p>
</div>
</section>

<div className="relative w-full z-30" id="transition-zone">

<div className="absolute -top-1 w-full overflow-hidden leading-[0] rotate-180 transform z-40">
<svg className="relative block w-[calc(100%+1.3px)] h-[100px] md:h-[150px]" data-name="Layer 1" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#FDFDFB"></path>
</svg>
</div>

<section className="w-full bg-slate-900 min-h-screen relative pt-48 pb-24 flex flex-col items-center overflow-hidden">
<div className="relative z-50 text-center px-6 max-w-3xl" id="final-content">

<div className="mb-20">
<h2 className="font-serif-display text-3xl md:text-4xl text-slate-100 font-light mb-8">How YesOnUs Is Funded</h2>
<p className="font-sans-clean text-slate-300 text-sm mb-6">Patients never pay us.</p>
<div className="font-sans-clean text-slate-400 text-xs tracking-wider uppercase space-y-2 mb-8">
<p>Provider-side services</p>
<p>•</p>
<p>Medical–Dental Billing Coordination</p>
</div>
<p className="font-serif-display italic text-slate-300">If something isn’t right for a patient, we say so.<br/>Transparency matters here.</p>
</div>

<div className="mb-24 w-full">
<h3 className="font-sans-clean text-xs font-semibold tracking-widest uppercase text-slate-500 mb-8">How You Can Start</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<a className="group border border-slate-700 p-6 rounded hover:bg-slate-800 transition-colors" href="/go">
<span className="block text-slate-200 font-serif-display text-lg mb-2 group-hover:text-white">Patient or Family</span>
<span className="text-slate-500 text-xs group-hover:text-slate-400">View resources →</span>
</a>
<a className="group border border-slate-700 p-6 rounded hover:bg-slate-800 transition-colors" href="/care">
<span className="block text-slate-200 font-serif-display text-lg mb-2 group-hover:text-white">Social Worker</span>
<span className="text-slate-500 text-xs group-hover:text-slate-400">For advocates →</span>
</a>
<a className="group border border-slate-700 p-6 rounded hover:bg-slate-800 transition-colors" href="/providers">
<span className="block text-slate-200 font-serif-display text-lg mb-2 group-hover:text-white">Clinician</span>
<span className="text-slate-500 text-xs group-hover:text-slate-400">For practices →</span>
</a>
</div>
<p className="mt-6 text-slate-500 text-sm italic font-serif-display">You’ll be guided without pressure.</p>
</div>

<div className="border-t border-slate-800 pt-16 max-w-xl mx-auto">
<h4 className="font-sans-clean text-xs tracking-widest uppercase text-slate-500 mb-4">A Note From The Founders</h4>
<p className="font-serif-display text-slate-300 text-xl font-light leading-relaxed mb-6">
                        "We built YesOnUs because too many people were being asked to make life-altering decisions without clarity, continuity, or support. The level of care coordination usually reserved for the wealthy should be available to everyone."
                    </p>
<p className="font-sans-clean text-slate-400 text-sm">
                        This is our way of making that standard —<br/>quietly, responsibly, and at scale.
                    </p>
</div>
</div>

<div className="absolute top-32 left-1/2 -translate-x-1/2 w-1 h-1" id="pen-dock"></div>
<footer className="mt-auto pt-24 pb-8 w-full text-center border-t border-slate-800/50 w-full max-w-4xl">
<div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mb-4 font-sans-clean text-[11px] tracking-widest uppercase text-slate-500">
<span>Phone + Email</span>
<span>Privacy</span>
<span>Transparency</span>
<span>Continuity</span>
</div>
<p className="text-slate-700 text-[10px] font-sans-clean tracking-widest uppercase">© 2024 YesOnUs.</p>
</footer>
</section>
</div>


    </>
  );
}
