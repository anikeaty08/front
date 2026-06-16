import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="816" style={{width: '100%', height: '100%'}} width="1312"></canvas></div></div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute inset-0 bg-grid"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/20 blur-[100px] rounded-full opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-900/10 blur-[120px] rounded-full opacity-30"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:border-indigo-500/50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<span className="text-sm font-medium tracking-tight text-white">NEXUS</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#features">Capabilities</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#workflow">Workflow</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign in</a>
<a className="group relative px-4 py-2 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all overflow-hidden flex items-center gap-2" href="#">
<span>Get Access</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</nav>

<section className="z-10 pt-32 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 text-xs font-medium hover:border-indigo-500/30 transition-colors cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                Nexus V2.0 is now live
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                Scale your outreach <br/>
<span className="animate-shine bg-clip-text text-transparent bg-[linear-gradient(110deg,#93c5fd,45%,#e0e7ff,55%,#93c5fd)]">
                    without hiring humans.
                </span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
                Deploy autonomous AI agents that find leads, personalize emails, and book meetings 24/7. Turn your outbound motion into a predictable revenue engine.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-100 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2">
                    Start Scaling Free
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-slate-300 rounded-full font-medium text-sm hover:bg-white/10 hover:text-white transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    View Demo
                </button>
</div>
<div className="pt-16 pb-8">
<p className="text-xs font-medium text-slate-600 mb-6 tracking-wide">TRUSTED BY NEXT-GEN TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-tight text-lg">ACME</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-bold tracking-tight text-lg">VORTEX</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
<span className="font-bold tracking-tight text-lg">ORBIT</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:square" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="18" rx="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect></svg>
<span className="font-bold tracking-tight text-lg">LUMA</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pb-32 px-4 md:px-6">
<div className="max-w-6xl mx-auto">
<div className="relative rounded-xl border border-white/10 bg-[#0A0A0A] shadow-2xl overflow-hidden group">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>

<div className="h-11 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-[#FB5F57]"></div>
<div className="w-3 h-3 rounded-full bg-[#FDBF2D]"></div>
<div className="w-3 h-3 rounded-full bg-[#27CB3F]"></div>
<div className="ml-auto flex items-center gap-2 px-3 py-1 bg-white/5 rounded-md border border-white/5 text-[10px] text-slate-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:lock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                        nexus-app.com
                    </div>
</div>
<div className="flex h-[550px] md:h-[650px]">

<div className="w-60 border-r border-white/5 bg-white/[0.01] hidden md:flex flex-col p-4">
<div className="text-[10px] font-semibold text-slate-500 mb-4 px-2 tracking-wider">AGENTS</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 bg-indigo-500/10 text-indigo-300 rounded-md text-xs font-medium border border-indigo-500/20 shadow-inner shadow-indigo-500/10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Outbound SDR
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-md text-xs font-medium transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
                                Lead Enricher
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-md text-xs font-medium transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Follow-up Bot
                            </div>
</div>
<div className="mt-8 text-[10px] font-semibold text-slate-500 mb-4 px-2 tracking-wider">ANALYTICS</div>
<div className="space-y-1">
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-md text-xs font-medium transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Overview
                            </div>
<div className="flex items-center gap-3 px-3 py-2 text-slate-400 hover:text-slate-200 hover:bg-white/5 rounded-md text-xs font-medium transition-colors cursor-pointer">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m14 12l2 2l4-4"></path></g></svg>
                                Deliverability
                            </div>
</div>
<div className="mt-auto">
<div className="p-3 bg-white/5 rounded-lg border border-white/5">
<div className="flex justify-between items-center mb-2">
<div className="text-[10px] text-slate-400">Credits</div>
<div className="text-[10px] text-white font-medium">72%</div>
</div>
<div className="w-full bg-slate-800 h-1 rounded-full mb-1 overflow-hidden">
<div className="bg-indigo-500 h-1 rounded-full w-[72%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
</div>
<div className="text-[10px] text-slate-500 mt-2 flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:refresh-cw" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></g></svg> Resets in 4d
                                </div>
</div>
</div>
</div>

<div className="flex-1 bg-[#0A0A0A] p-6 md:p-8 overflow-y-auto relative">

<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-lg font-medium text-white tracking-tight">Campaign Performance</h3>
<p className="text-xs text-slate-500 mt-1">Real-time metrics from your active agents.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded text-[10px] border border-white/10 text-slate-400 bg-white/[0.02]">Last 24h</span>
<span className="px-2 py-1 rounded text-[10px] bg-white text-slate-950 font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                                    Live
                                </span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div className="glass p-5 rounded-lg hover:border-white/20 transition-colors group/card">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Emails Sent</span>
<svg aria-hidden="true" className="iconify text-slate-600 group-hover/card:text-slate-400 transition-colors iconify--lucide" data-icon="lucide:send" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-2xl font-medium text-white tracking-tight">12,405</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-2 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg> +18.2%
                                </div>
</div>

<div className="relative p-5 rounded-lg border border-indigo-500/30 bg-indigo-500/5 overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 blur-xl"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] uppercase tracking-wider text-indigo-300/70 font-medium">Meetings Booked</span>
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:calendar-check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18M9 16l2 2l4-4"></path></g></svg>
</div>
<div className="text-2xl font-medium text-white tracking-tight">48</div>
<div className="text-[10px] text-indigo-300 flex items-center gap-1 mt-2 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg> +100%
                                    </div>
</div>
</div>

<div className="glass p-5 rounded-lg hover:border-white/20 transition-colors group/card">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">Reply Rate</span>
<svg aria-hidden="true" className="iconify text-slate-600 group-hover/card:text-slate-400 transition-colors iconify--lucide" data-icon="lucide:message-circle" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-2xl font-medium text-white tracking-tight">8.2%</div>
<div className="text-[10px] text-emerald-400 flex items-center gap-1 mt-2 font-medium">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg> +2.4%
                                </div>
</div>
</div>

<div className="border border-white/10 rounded-lg bg-white/[0.01]">
<div className="px-4 py-3 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
<span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Live Agent Feed</span>
<svg aria-hidden="true" className="iconify text-slate-600 iconify--lucide" data-icon="lucide:activity" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="divide-y divide-white/5">
<div className="p-4 flex gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.1)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-white mb-0.5 truncate"><span className="font-medium text-purple-300">Agent Alpha</span> personalized a pitch</div>
<div className="text-[10px] text-slate-500 truncate">Prospect: CTO at TechCorp Inc. "Saw your funding round..."</div>
</div>
<div className="ml-auto text-[10px] text-slate-600 whitespace-nowrap">Just now</div>
</div>
<div className="p-4 flex gap-4 hover:bg-white/[0.02] transition-colors">
<div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-white mb-0.5 truncate"><span className="font-medium text-blue-300">Scheduler</span> booked a meeting</div>
<div className="text-[10px] text-slate-500 truncate">With Sarah J. for Tuesday 10:00 AM PST.</div>
</div>
<div className="ml-auto text-[10px] text-slate-600 whitespace-nowrap">5m ago</div>
</div>
<div className="p-4 flex gap-4 hover:bg-white/[0.02] transition-colors opacity-60">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 shrink-0">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-xs text-white mb-0.5 truncate"><span className="font-medium text-emerald-300">Scraper</span> found 50 new leads</div>
<div className="text-[10px] text-slate-500 truncate">Criteria: SaaS, Series A, North America.</div>
</div>
<div className="ml-auto text-[10px] text-slate-600 whitespace-nowrap">12m ago</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-32 bg-indigo-500/10 blur-[120px] -z-10"></div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-white/5" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Architected for precision.</h2>
<p className="text-slate-400 max-w-xl text-sm leading-relaxed">Unlike generic spam bots, Nexus agents understand context, research prospects deeply, and write with human-level nuance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 scale-150">
<svg aria-hidden="true" className="iconify w-48 h-48 text-indigo-500 iconify--lucide" data-icon="lucide:network" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.15)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Hyper-Personalization Engine</h3>
<p className="text-sm text-slate-400 max-w-md leading-relaxed">
                            Nexus scans LinkedIn, News, and Company Blogs to construct unique opening lines for every single prospect.
                        </p>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-2 text-xs text-slate-300 p-2 bg-white/5 rounded border border-white/5">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                                Funding news analysis
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-300 p-2 bg-white/5 rounded border border-white/5">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                                Tech stack detection
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-300 p-2 bg-white/5 rounded border border-white/5">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                                Personality matching
                            </div>
<div className="flex items-center gap-2 text-xs text-slate-300 p-2 bg-white/5 rounded border border-white/5">
<svg aria-hidden="true" className="iconify text-emerald-400 iconify--lucide" data-icon="lucide:check-circle" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg>
                                Podcast referencing
                            </div>
</div>
</div>
</div>

<div className="glass rounded-2xl p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 border border-pink-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Infinite Scale</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6">
                        Spin up 10 or 10,000 agents instantly. Handle email volume that would require 50 humans.
                    </p>
<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-500/10 to-transparent"></div>
<div className="flex items-end gap-1 h-20 mt-auto opacity-60 px-2">
<div className="w-full bg-slate-800 rounded-t-sm h-[20%] group-hover:bg-pink-500/20 transition-colors duration-500"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[35%] group-hover:bg-pink-500/40 transition-colors duration-500 delay-75"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[50%] group-hover:bg-pink-500/60 transition-colors duration-500 delay-100"></div>
<div className="w-full bg-pink-500 rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
</div>
</div>

<div className="glass rounded-2xl p-8 relative overflow-hidden group">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Inbox Guard</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                        Automated warm-up, rotation, and spam detection ensures your domain reputation stays at 100%.
                    </p>
</div>

<div className="md:col-span-2 glass rounded-2xl p-8 relative overflow-hidden group flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Multi-Channel Orchestration</h3>
<p className="text-sm text-slate-400 leading-relaxed">
                            Nexus coordinates touchpoints across LinkedIn, Email, and Voice for a unified strategy.
                        </p>
</div>
<div className="flex-1 w-full max-w-sm">
<div className="bg-slate-950 border border-white/10 rounded-lg p-4 space-y-2 shadow-2xl">
<div className="flex items-center gap-3 animate-pulse">
<div className="w-6 h-6 rounded bg-[#0A66C2] flex items-center justify-center text-white text-[10px] font-bold">in</div>
<div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
</div>
<div className="flex items-center justify-center h-4">
<div className="h-full w-px bg-slate-800"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-slate-400"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg></div>
<div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-slate-950/50" id="pricing">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Simple, transparent pricing</h2>
<p className="text-slate-400 text-sm">Scale as you grow. No hidden setup fees.</p>

<div className="flex items-center justify-center gap-3 mt-8">
<span className="text-xs text-slate-400 font-medium">Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only toggle-checkbox" type="checkbox"/>
<div className="w-10 h-6 bg-slate-800 rounded-full border border-slate-700 toggle-label transition-colors"></div>
<div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all toggle-checkbox:checked"></div>
</label>
<span className="text-xs text-white font-medium">Yearly <span className="text-emerald-400 ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white">Starter</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$49</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-2">Perfect for solo founders.</p>
<button className="w-full mt-8 py-2 px-4 rounded-lg bg-slate-800 text-white text-xs font-medium hover:bg-slate-700 transition-colors border border-white/5">
                        Get Started
                    </button>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1 Active Agent
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            500 Leads / mo
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Basic Personalization
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/50 bg-[#0A0B1A] relative shadow-[0_0_50px_rgba(79,70,229,0.15)] transform md:-translate-y-4">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-[9px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                        Most Popular
                    </div>
<h3 className="text-base font-medium text-white">Growth</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$149</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-2">For scaling sales teams.</p>
<button className="w-full mt-8 py-2 px-4 rounded-lg bg-indigo-600 text-white text-xs font-medium hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-500/20">
                        Start Free Trial
                    </button>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            5 Active Agents
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Unlimited Leads
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-indigo-400 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Deep Research AI
                        </li>
</ul>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<h3 className="text-base font-medium text-white">Scale</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-medium text-white tracking-tight">$399</span>
<span className="text-xs text-slate-500">/mo</span>
</div>
<p className="text-xs text-slate-400 mt-2">Complete autonomy.</p>
<button className="w-full mt-8 py-2 px-4 rounded-lg bg-slate-800 text-white text-xs font-medium hover:bg-slate-700 transition-colors border border-white/5">
                        Contact Sales
                    </button>
<ul className="mt-8 space-y-3">
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Unlimited Agents
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Dedicated IP
                        </li>
<li className="flex items-center gap-3 text-xs text-slate-300">
<svg aria-hidden="true" className="iconify text-slate-500 iconify--lucide" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Custom Models
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-indigo-500/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-slate-950 to-slate-950"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white mb-6">Ready to automate revenue?</h2>
<p className="text-base text-slate-400 mb-10 font-light">Join 2,000+ companies using Nexus to replace manual prospecting.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10">
                    Get Started for Free
                </button>
<button className="px-8 py-3 bg-transparent border border-white/10 text-white rounded-full font-medium text-sm hover:bg-white/5 transition-all">
                    Book a Strategy Call
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1 pr-8">
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-indigo-500 iconify--lucide" data-icon="lucide:bot" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
<span className="text-sm font-medium tracking-tight text-white">NEXUS</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed">Autonomous outreach agents for the modern sales stack. Built for precision, scaled for growth.</p>
</div>
<div className="">
<h4 className="text-white text-xs font-medium mb-4 uppercase tracking-wider">Product</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4 uppercase tracking-wider">Resources</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium mb-4 uppercase tracking-wider">Company</h4>
<ul className="space-y-2 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-600">© 2024 Nexus AI Inc. All rights reserved.</p>
<div className="flex gap-4">
<svg aria-hidden="true" className="iconify text-slate-600 hover:text-white cursor-pointer transition-colors iconify--lucide" data-icon="lucide:twitter" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-slate-600 hover:text-white cursor-pointer transition-colors iconify--lucide" data-icon="lucide:github" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg>
<svg aria-hidden="true" className="iconify text-slate-600 hover:text-white cursor-pointer transition-colors iconify--lucide" data-icon="lucide:linkedin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</div>
</div>
</footer>

    </>
  );
}
