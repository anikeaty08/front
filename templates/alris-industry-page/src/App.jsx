import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            
            // Initialize Lucide Icons for the new section
            lucide.createIcons();
            
            // 1. Initial Page Load Reveal
            setTimeout(() => {
                document.querySelectorAll('.reveal-up:not(.parallax-el .reveal-up)').forEach(el => {
                    if (el.getBoundingClientRect().top < window.innerHeight) {
                        el.classList.add('active');
                    }
                });
            }, 100);

            // 2. Intersection Observer for Scroll Reveals
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            document.querySelectorAll('.reveal-up').forEach(el => {
                revealObserver.observe(el);
            });

            // 3. Parallax Effect for Hero
            const parallaxEl = document.querySelector('.parallax-el');
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                if (scrolled < window.innerHeight && parallaxEl) {
                    parallaxEl.style.transform = `translateY(${scrolled * 0.12}px)`;
                    parallaxEl.style.opacity = 1 - (scrolled * 0.002);
                }
            });

            // 4. Timeline Line Fill Animation
            const timelineContainer = document.getElementById('timeline-container');
            const timelineProgress = document.getElementById('timeline-progress');
            if (timelineContainer && timelineProgress) {
                window.addEventListener('scroll', () => {
                    const rect = timelineContainer.getBoundingClientRect();
                    const winHeight = window.innerHeight;
                    if (rect.top < winHeight / 2 && rect.bottom > 0) {
                        const progress = ((winHeight / 2 - rect.top) / rect.height) * 100;
                        timelineProgress.style.height = `${Math.min(Math.max(progress, 0), 100)}%`;
                    }
                });
            }

            // 5. Number Counter Animation (Metrics)
            const counters = document.querySelectorAll('.counter');
            let hasCounted = false;

            const counterObserver = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && !hasCounted) {
                    hasCounted = true;
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000;
                        const start = 0;
                        const increment = target / (duration / 16);
                        
                        let current = start;
                        const updateCounter = () => {
                            current += increment;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCounter();
                    });
                }
            }, { threshold: 0.5 });

            const metricsSection = document.getElementById('metrics-section');
            if (metricsSection) {
                counterObserver.observe(metricsSection);
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-zinc-200/50 transition-all duration-300">
<div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#8624FF]/20 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
<a className="text-sm font-medium tracking-widest text-zinc-900 hover:text-[#8624FF] transition-colors uppercase font-roboto" href="#">
                Alris
            </a>
<div className="flex items-center">
<a className="group relative inline-flex h-8 items-center justify-center rounded-md bg-zinc-900 px-4 text-xs font-normal text-white transition-all shadow-sm hover:shadow-[0_4px_12px_rgba(134,36,255,0.2)] overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-[#8624FF]/0 via-[#8624FF]/40 to-[#8624FF]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
<span className="relative z-10 font-roboto">Book Demo</span>
</a>
</div>
</div>
</header>
<main className="pt-14 overflow-hidden">

<section className="md:pt-40 md:pb-32 parallax-container max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative justify-center">
<div className="absolute inset-0 bg-grid pointer-events-none -z-20 mask-image:linear-gradient(to_bottom,black,transparent)">
</div>
<div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
<div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] bg-gradient-to-br from-[#8624FF]/20 to-[#4318FF]/20 blur-[120px] rounded-full mix-blend-multiply glow-pulse">
</div>
<div className="absolute top-[10%] right-[-10%] w-[50%] h-[70%] bg-gradient-to-bl from-[#00E5FF]/15 to-[#8624FF]/10 blur-[100px] rounded-full mix-blend-multiply glow-pulse" style={{animationDelay: '-3s'}}></div>
</div>
<div className="parallax-el stagger-wrap z-10 text-center max-w-none pr-0 pl-0 relative">
<div className="inline-flex reveal-up active text-xs font-normal text-[#8624FF] font-roboto text-center border-[#8624FF]/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm items-center">
<iconify-icon height="14" icon="solar:health-linear" width="14"></iconify-icon>
      AI Healthcare Automation
    </div>
<h1 className="leading-[1.05] text-balance reveal-up delay-100 active md:text-7xl text-5xl font-medium text-zinc-900 tracking-tight font-roboto text-center mb-6">
      AI Automation for <br/>
<span className="gradient-text font-medium font-bricolage text-center bg-gradient-to-r from-[#8624FF] to-[#00E5FF] pr-2 pb-2">Patient Engagement</span>
</h1>
<div className="md:text-xl leading-relaxed reveal-up delay-200 active text-lg font-medium text-zinc-500 font-roboto text-center max-w-3xl mb-10 mx-auto">
      Alris AI agents handle patient calls 24/7, schedule appointments, send SMS reminders, and follow up via email —
      all in
      one connected ecosystem.
      <p></p>
</div>
<div className="flex reveal-up delay-300 active text-center gap-x-6 gap-y-6 items-center">
<a className="group inline-flex items-center justify-center transition-all duration-300 hover:scale-100 hover:shadow-[0_8px_25px_rgba(134,36,255,0.3)] gap-2 overflow-hidden text-sm font-normal text-white bg-zinc-900 h-11 border-zinc-800 border rounded-lg pr-6 pl-6 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] mx-auto" href="#">
<div className="group-hover:opacity-100 transition-opacity duration-500 z-0 bg-[#8624FF] opacity-0 absolute top-0 right-0 bottom-0 left-0">
</div>
<span className="relative z-10 flex items-center gap-2 font-roboto">
                            Book Healthcare Demo
                            <iconify-icon className="transition-transform group-hover:translate-x-0.5" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="md:py-24 border-y z-10 bg-zinc-100/80 border-zinc-200/50 pt-16 pb-16 relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 reveal-trigger">
<div className="md:p-16 lg:p-20 reveal-up active bg-white border-zinc-200/60 border rounded-2xl pt-10 pr-10 pb-10 pl-10 shadow-[0_2px_20px_rgba(0,0,0,0.03)]">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24 items-start">
<div className="lg:col-span-6">
<h2 className="text-3xl md:text-4xl tracking-tight text-zinc-900 uppercase font-medium leading-[1.15] text-balance font-roboto">
                                WE AUTOMATE PATIENT <br/> COMMUNICATION <br/> SEAMLESSLY
                            </h2>
</div>
<div className="lg:col-span-5 lg:col-start-8 flex flex-col items-start lg:pt-1">
<p className="text-base text-zinc-600 mb-8 leading-relaxed font-normal font-roboto">
                                Whether it's managing appointment scheduling, answering routine clinic inquiries, or sending vital pre-visit instructions, we bring efficiency and reliability to every patient interaction.
                            </p>
<a className="inline-flex h-11 items-center justify-center rounded-sm bg-zinc-950 px-8 text-sm font-medium text-white transition-all hover:bg-zinc-800 font-roboto" href="#">
                                Know More About us
                            </a>
</div>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
<div className="flex flex-col gap-3">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-widest font-roboto">Interactions Automated</p>
<p className="md:text-6xl text-5xl font-medium text-[#8624FF] tracking-tight font-roboto">60%</p>
</div>
<div className="flex flex-col gap-3">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest font-roboto">Happy Clinics</p>
<p className="md:text-6xl text-5xl font-medium text-[#8624FF] tracking-tight font-roboto">100+</p>
</div>
<div className="flex flex-col gap-3">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-widest font-roboto">Less manual admin work</p>
<p className="md:text-6xl text-5xl font-medium text-[#8624FF] tracking-tight font-roboto">50%</p>
</div>
<div className="flex flex-col gap-3">
<p className="uppercase text-xs font-medium text-zinc-500 tracking-widest font-roboto">Fewer no-shows</p>
<p className="md:text-6xl text-5xl font-medium text-[#8624FF] tracking-tight font-roboto">30%</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-zinc-200/50 border-t relative">
<div className="md:py-32 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 reveal-trigger max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 gap-x-16 gap-y-16 items-stretch">
<div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-12 reveal-up active">
<span className="text-xs font-medium tracking-widest text-[#8624FF] uppercase mb-4 block font-roboto">The Problem</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-zinc-900 mb-10 text-balance leading-tight font-medium font-roboto">
                        Your Front Desk is Overloaded. Patients Feel the Delay.
                    </h2>
<h3 className="text-sm font-medium text-zinc-900 mb-6 uppercase tracking-wider font-roboto">Healthcare teams spend hours managing</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-base text-zinc-600 group">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-[#8624FF]/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-[#8624FF] transition-colors" height="14" icon="solar:clock-circle-linear" width="14"></iconify-icon>
</div>
<span className="pt-0.5 font-roboto">Patient calls for scheduling &amp; rescheduling</span>
</li>
<li className="flex items-start gap-4 text-base text-zinc-600 group">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-rose-500/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-rose-500 transition-colors" height="14" icon="solar:phone-calling-linear" width="14"></iconify-icon>
</div>
<span className="pt-0.5 font-roboto">Missed calls during peak clinic hours</span>
</li>
<li className="flex items-start gap-4 text-base text-zinc-600 group">
<div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 group-hover:bg-[#8624FF]/10 transition-colors">
<iconify-icon className="text-zinc-400 group-hover:text-[#8624FF] transition-colors" height="14" icon="solar:letter-linear" width="14"></iconify-icon>
</div>
<span className="pt-0.5 font-roboto">Manual reminders via SMS or email workflows</span>
</li>
</ul>
</div>
<div className="lg:col-span-5 bg-zinc-900 rounded-3xl p-8 md:p-10 border border-zinc-800 relative overflow-hidden reveal-up delay-200 transition-all shadow-xl shadow-zinc-200/50 flex flex-col justify-between group active">
<div className="dark-bg-grid opacity-20 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#8624FF]/10 blur-3xl rounded-full pointer-events-none transition-opacity group-hover:opacity-20"></div>
<div className="relative z-10">
<h3 className="text-sm font-medium text-white mb-8 flex items-center gap-2 tracking-wide font-roboto">
<iconify-icon className="text-rose-400" height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
                            WHAT ACTUALLY HAPPENS
                        </h3>
<ul className="space-y-6">
<li className="flex items-start gap-4 text-base text-zinc-300 leading-relaxed font-roboto">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500/50 shrink-0 mt-2"></div>
                                Patients wait on hold or call multiple times
                            </li>
<li className="flex items-start gap-4 text-base text-zinc-300 leading-relaxed font-roboto">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500/50 shrink-0 mt-2"></div>
                                Staff spends 10–15 hours/week on pure admin
                            </li>
<li className="flex items-start gap-4 text-base text-zinc-300 leading-relaxed font-roboto">
<div className="w-1.5 h-1.5 rounded-full bg-rose-500/50 shrink-0 mt-2"></div>
                                Fragmented communication across different tools
                            </li>
</ul>
</div>
<div className="mt-12 pt-6 border-t border-zinc-800 relative z-10">
<p className="text-xs font-normal text-zinc-400 leading-relaxed font-roboto">
<span className="text-rose-400 font-medium font-manrope">Up to 30%</span> of healthcare operational effort is wasted on manual administrative work.
                        </p>
</div>
</div>
</div>
</section>

<section className="md:py-32 overflow-hidden bg-white border-zinc-200/50 border-t pt-24 pb-24 relative">
<div className="reveal-trigger max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:gap-12 gap-x-16 gap-y-16 items-center">

<div className="flex flex-col lg:pr-8 reveal-up active pr-0">
<h2 className="md:text-7xl leading-[1.05] text-balance text-5xl font-medium text-zinc-900 tracking-tight font-roboto text-center mb-8">
      One System. Every Channel.</h2>
<p className="md:text-xl leading-relaxed text-balance text-lg font-normal text-zinc-600 font-roboto text-center">From the first call
      to follow-ups, everything happens automatically in one unified thread. We ensure your interactions are seamless
      and
      consistent.</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 reveal-up delay-200 active gap-x-4 gap-y-4">

<div className="md:p-10 flex flex-col min-h-[340px] shadow-[#8624FF]/10 transition-transform hover:-translate-y-1 duration-300 bg-zinc-50 border-zinc-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-auto">
<i className="w-8 h-8 text-white" data-lucide="mic" strokeWidth="1.5"></i>
</div>
<div className="mt-12">
<h3 className="text-xl font-normal text-zinc-900 tracking-tight font-roboto">Voice AI Receptionist</h3>
<div className="h-px bg-zinc-400/40 w-full mb-5 mt-5"></div>
<p className="leading-relaxed text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Answers patient calls instantly
  </p>
<p className="leading-relaxed -multi text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2 pr-2">- Schedules &amp; reschedules
    appointments</p>
<p className="leading-relaxed mt text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Handles FAQs and routing</p>
</div>
</div>

<div className="md:p-10 flex flex-col min-h-[340px] transition-transform hover:-translate-y-1 duration-300 bg-zinc-50 border-zinc-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-auto">
<i className="w-8 h-8 text-zinc-900" data-lucide="message-square" strokeWidth="1.5"></i>
</div>
<div className="mt-12">
<h3 className="text-xl font-normal text-zinc-900 tracking-tight font-roboto">SMS Automation</h3>
<div className="h-px bg-zinc-400/40 w-full mb-5 mt-5"></div>
<p className="leading-relaxed text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Appointment confirmations</p>
<p className="leading-relaxed -multi text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2 pr-2">- Reminder messages</p>
<p className="leading-relaxed mt text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Two-way patient communication</p>
</div>
</div>

<div className="md:p-10 flex flex-col min-h-[340px] transition-transform hover:-translate-y-1 duration-300 bg-zinc-50 border-neutral-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-auto">
<i className="w-8 h-8 text-zinc-900" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div className="mt-12">
<h3 className="text-xl font-normal text-zinc-900 tracking-tight font-roboto">Email Automation</h3>
<div className="h-px bg-zinc-400/40 w-full mb-5 mt-5"></div>
<p className="leading-relaxed text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Pre-visit instructions</p>
<p className="leading-relaxed -multi text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2 pr-2">- Intake forms</p>
<p className="leading-relaxed mt text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Post-visit follow-ups</p>
</div>
</div>

<div className="md:p-10 flex flex-col min-h-[340px] transition-transform hover:-translate-y-1 duration-300 bg-zinc-50 border-neutral-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-auto">
<i className="w-8 h-8 text-zinc-900" data-lucide="database" strokeWidth="1.5"></i>
</div>
<div className="mt-12">
<h3 className="text-xl font-normal text-zinc-900 tracking-tight font-roboto">EHR / CRM Integration</h3>
<div className="h-px bg-zinc-400/40 w-full mb-5 mt-5"></div>
<p className="leading-relaxed text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- Auto-update patient records</p>
<p className="leading-relaxed -multi text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2 pr-2">- Unified patient conversation history</p>
<p className="leading-relaxed mt text-lg font-normal text-zinc-500 font-roboto mt-2 mb-2">- No manual data entry</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200/50 bg-white">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start reveal-trigger">
<div className="lg:col-span-7">
<div className="mb-16 reveal-up active">
<span className="text-xs font-medium tracking-widest text-[#8624FF] uppercase block mb-4 font-roboto">Real Healthcare Workflow</span>
<h2 className="text-3xl md:text-4xl tracking-tight text-zinc-900 leading-tight font-medium font-roboto">How It Works in Reality</h2>
<p className="mt-4 text-base text-zinc-500 max-w-md font-roboto">Watch Alris handle a typical patient interaction effortlessly.</p>
</div>
<div className="relative space-y-12 pl-4" id="timeline-container">
<div className="absolute left-[27px] top-4 bottom-0 w-px bg-zinc-100 rounded-full"></div>
<div className="absolute left-[27px] top-4 w-px bg-gradient-to-b from-[#8624FF] via-[#00E5FF] to-transparent rounded-full timeline-line" id="timeline-progress" style={{height: '6.3778%'}}></div>
<div className="relative flex items-start gap-8 group reveal-up timeline-step active">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-sm z-10 text-xs font-medium text-zinc-500 transition-all duration-300 group-hover:border-[#8624FF] group-hover:text-[#8624FF] group-hover:scale-110 font-roboto">1</div>
<div className="pt-1">
<h4 className="text-base font-medium text-zinc-900 font-roboto">Patient Calls</h4>
<div className="mt-3 text-sm text-zinc-600 bg-zinc-50 rounded-lg p-4 border border-zinc-100">
<p className="italic text-zinc-500 mb-3 border-l-2 border-[#8624FF]/30 pl-3 font-roboto">"Hi, I need to reschedule my appointment."</p>
<span className="text-[#8624FF] text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5 font-roboto">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
                                        AI offers available slots
                                    </span>
</div>
</div>
</div>
<div className="relative flex items-start gap-8 group reveal-up timeline-step delay-100 active">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-sm z-10 text-xs font-medium text-zinc-500 transition-all duration-300 group-hover:border-blue-500 group-hover:text-blue-500 group-hover:scale-110 font-roboto">2</div>
<div className="pt-1 w-full">
<h4 className="text-base font-medium text-zinc-900 font-roboto">AI Sends SMS</h4>
<div className="mt-3 text-sm text-zinc-600 bg-zinc-50 rounded-lg p-4 border border-zinc-100">
<p className="italic text-zinc-500 mb-3 border-l-2 border-blue-500/30 pl-3 font-roboto">"Here are your times. Reply with what works."</p>
<span className="text-blue-500 text-[10px] font-medium uppercase tracking-widest flex items-center gap-1.5 font-roboto">
<iconify-icon height="14" icon="solar:bolt-linear" width="14"></iconify-icon>
                                        Patient confirms
                                    </span>
</div>
</div>
</div>
<div className="relative flex items-start gap-8 group reveal-up timeline-step delay-200 active">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white border border-zinc-200 shadow-sm z-10 text-xs font-medium text-zinc-500 transition-all duration-300 group-hover:border-emerald-500 group-hover:text-emerald-500 group-hover:scale-110 font-roboto">3</div>
<div className="pt-1">
<h4 className="text-base font-medium text-zinc-900 font-roboto">Automated Follow-ups</h4>
<p className="mt-2 text-base text-zinc-500 leading-relaxed font-roboto">Email confirmation and SMS reminders triggered perfectly on schedule.</p>
</div>
</div>
<div className="relative flex items-start gap-8 group reveal-up timeline-step delay-300 active">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#8624FF] to-[#4318FF] border border-[#8624FF] z-10 text-xs font-medium text-white shadow-[0_0_20px_rgba(134,36,255,0.4)]">
<iconify-icon height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<div className="pt-1">
<h4 className="text-base font-medium text-[#8624FF] font-roboto">Everything Logged</h4>
<p className="mt-2 text-base text-zinc-500 leading-relaxed font-roboto">Interactions recorded. Calendar updated. EHR synced seamlessly.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 lg:sticky lg:top-32 reveal-up delay-200 active">
<div className="rounded-3xl p-1 relative overflow-hidden bg-gradient-to-b from-zinc-200 to-white shadow-xl shadow-zinc-200/50">
<div className="bg-white rounded-[23px] p-8 md:p-10 relative overflow-hidden h-full border border-white">
<div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-gradient-to-bl from-[#8624FF]/10 to-transparent rounded-full blur-3xl"></div>
<h3 className="text-xs font-medium tracking-widest text-[#8624FF] mb-8 uppercase flex items-center gap-2 font-roboto">
<iconify-icon height="16" icon="solar:chart-square-linear" width="16"></iconify-icon>
                                The Outcome
                            </h3>
<ul className="space-y-6 relative z-10">
<li className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<div className="flex h-8 w-8 rounded-full bg-[#8624FF]/10 items-center justify-center shrink-0">
<iconify-icon className="text-[#8624FF]" height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-base font-medium text-zinc-800 font-roboto">Zero manual data entry</span>
</li>
<li className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<div className="flex h-8 w-8 rounded-full bg-[#8624FF]/10 items-center justify-center shrink-0">
<iconify-icon className="text-[#8624FF]" height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-base font-medium text-zinc-800 font-roboto">No missed communications</span>
</li>
<li className="flex items-center gap-4 bg-zinc-50 p-4 rounded-xl border border-zinc-100">
<div className="flex h-8 w-8 rounded-full bg-[#8624FF]/10 items-center justify-center shrink-0">
<iconify-icon className="text-[#8624FF]" height="16" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-base font-medium text-zinc-800 font-roboto">Seamless patient experience</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-zinc-200/50 bg-zinc-50/50 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#8624FF]/[0.02] via-transparent to-transparent pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32 reveal-trigger relative z-10">
<div className="mb-16 text-center reveal-up active">
<h2 className="text-3xl md:text-4xl tracking-tight text-zinc-900 font-medium font-roboto">Designed for Healthcare Workflows</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr reveal-up delay-200 active">
<div className="md:col-span-2 relative flex flex-col justify-between bg-white rounded-2xl p-8 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(134,36,255,0.06)] transition-all overflow-hidden group">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-bl from-[#8624FF]/10 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-purple-50 text-purple-700 text-[10px] font-medium tracking-widest uppercase mb-6 border border-purple-100 font-roboto">
                                Core Workflow
                            </span>
<h3 className="text-xl tracking-tight text-zinc-900 mb-3 font-medium font-roboto">Scheduling &amp; Reminders</h3>
<p className="text-base text-zinc-500 max-w-md font-roboto">Completely hands-free booking system that reduces no-shows by 40% using multi-channel reminders.</p>
</div>
<div className="mt-10 flex gap-3 relative z-10">
<div className="h-1.5 flex-1 rounded-full bg-purple-100 overflow-hidden"><div className="h-full w-full bg-[#8624FF] rounded-full"></div></div>
<div className="h-1.5 flex-1 rounded-full bg-purple-100 overflow-hidden"><div className="h-full w-full bg-[#8624FF] rounded-full opacity-60"></div></div>
<div className="h-1.5 flex-1 rounded-full bg-purple-100 overflow-hidden"><div className="h-full w-1/2 bg-[#8624FF] rounded-full opacity-30"></div></div>
</div>
</div>
<div className="md:col-span-1 flex flex-col justify-between bg-white rounded-2xl p-8 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,229,255,0.06)] transition-all overflow-hidden group relative">
<div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-[#00E5FF]/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-6">
<iconify-icon height="20" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3 font-roboto">Onboarding</h3>
<p className="text-base text-zinc-500 font-roboto">Automated multi-step follow-ups for incomplete patient forms.</p>
</div>
</div>
<div className="md:col-span-1 flex flex-col justify-between bg-white rounded-2xl p-8 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.06)] transition-all overflow-hidden group relative">
<div className="absolute -left-10 -top-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon height="20" icon="solar:headset-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-3 font-roboto">24/7 Support</h3>
<p className="text-base text-zinc-500 font-roboto">Omnichannel support that keeps full patient context intact.</p>
</div>
</div>
<div className="md:col-span-2 relative flex flex-col justify-between bg-zinc-900 rounded-2xl p-8 border border-zinc-800 shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgba(134,36,255,0.15)] transition-all overflow-hidden group">
<div className="absolute inset-0 dark-bg-grid opacity-30"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#8624FF]/10 via-transparent to-[#00E5FF]/10 blur-3xl pointer-events-none group-hover:opacity-100 opacity-50 transition-opacity duration-700"></div>
<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 h-full">
<div>
<span className="text-[10px] font-medium text-[#8624FF] tracking-widest uppercase mb-4 block font-roboto">Smart Routing</span>
<h3 className="text-xl tracking-tight text-white mb-3 font-medium font-roboto">AI IVR Navigation</h3>
<p className="text-base text-zinc-400 max-w-sm font-roboto">No "Press 1, Press 2" frustration. Patients speak naturally, and AI routes or resolves the query instantly.</p>
</div>
<div className="flex items-center gap-3 bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50 backdrop-blur-md shrink-0">
<div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center"><iconify-icon className="text-zinc-300" icon="solar:user-linear"></iconify-icon></div>
<div className="w-12 h-px bg-gradient-to-r from-zinc-600 to-[#8624FF]"></div>
<div className="w-10 h-10 rounded-full bg-[#8624FF]/20 border border-[#8624FF]/50 flex items-center justify-center shadow-[0_0_15px_rgba(134,36,255,0.3)]">
<iconify-icon className="text-[#8624FF]" icon="solar:cpu-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 text-white relative overflow-hidden" id="metrics-section">
<div className="absolute inset-0 dark-bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8624FF]/20 via-[#00E5FF]/5 to-transparent pointer-events-none blur-3xl opacity-60"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#8624FF]/50 to-transparent"></div>
<div className="mx-auto max-w-7xl px-6 py-32 relative z-10 text-center reveal-trigger">
<h2 className="text-2xl md:text-3xl tracking-tight text-zinc-300 mb-20 reveal-up active font-medium font-roboto">Measurable Healthcare Impact</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-0 reveal-up delay-200 active">
<div className="flex flex-col items-center justify-center relative group">
<div className="absolute inset-0 bg-[#8624FF]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-5xl md:text-6xl tracking-tight text-white mb-3 flex items-baseline relative z-10 font-normal font-roboto">
<span className="counter font-bricolage font-normal" data-target="60">60</span>%
                        </div>
<div className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase relative z-10 font-roboto">Fewer Missed Calls</div>
</div>
<div className="flex flex-col items-center justify-center relative group">
<div className="absolute inset-0 bg-[#00E5FF]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-5xl md:text-6xl tracking-tight bg-gradient-to-br from-white to-zinc-400 gradient-text mb-3 flex items-baseline relative z-10 font-normal font-roboto">
<span className="counter font-bricolage font-normal" data-target="3">3</span>×
                        </div>
<div className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase relative z-10 font-roboto">Faster Responses</div>
</div>
<div className="flex flex-col items-center justify-center relative group">
<div className="absolute inset-0 bg-[#8624FF]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-5xl md:text-6xl tracking-tight text-white mb-3 flex items-baseline relative z-10 font-normal font-roboto">
<span className="counter font-bricolage font-normal" data-target="50">50</span>%
                        </div>
<div className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase relative z-10 font-roboto">Less Admin Work</div>
</div>
<div className="flex flex-col items-center justify-center relative group">
<div className="absolute inset-0 bg-zinc-800/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-5xl md:text-6xl tracking-tight text-[#8624FF] mb-3 relative z-10 drop-shadow-[0_0_15px_rgba(134,36,255,0.5)] font-normal font-roboto">
                            ↓
                        </div>
<div className="text-[10px] font-medium text-zinc-500 tracking-widest uppercase relative z-10 font-roboto">Lower Costs</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-zinc-200/50">
<div className="mx-auto max-w-7xl px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-24 reveal-trigger">
<div className="reveal-up active">
<span className="text-xs font-medium tracking-widest text-[#8624FF] uppercase mb-4 block font-roboto">Ecosystem</span>
<h2 className="text-3xl tracking-tight text-zinc-900 mb-4 font-medium font-roboto">Works Inside Your Tools</h2>
<p className="text-base text-zinc-500 mb-12 font-roboto">No new software to learn. Alris connects directly via API to your EHR and scheduling systems.</p>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-md hover:border-[#8624FF]/30 transition-all cursor-default">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-[#8624FF] shadow-sm"><iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900 font-roboto">EHR Systems</h4>
<p className="text-sm text-zinc-500 font-roboto">Auto-syncs patient records and history</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-md hover:border-blue-500/30 transition-all cursor-default">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-blue-500 shadow-sm"><iconify-icon icon="solar:calendar-mark-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900 font-roboto">Scheduling Platforms</h4>
<p className="text-sm text-zinc-500 font-roboto">Real-time availability and booking</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:shadow-md hover:border-teal-500/30 transition-all cursor-default">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200 flex items-center justify-center text-teal-500 shadow-sm"><iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon></div>
<div>
<h4 className="text-sm font-medium text-zinc-900 font-roboto">CRM &amp; Marketing</h4>
<p className="text-sm text-zinc-500 font-roboto">Logs interactions for patient follow-ups</p>
</div>
</div>
</div>
</div>
<div className="reveal-up delay-200 active">
<span className="text-xs font-medium tracking-widest text-emerald-500 uppercase mb-4 block font-roboto">Compliance</span>
<h2 className="text-3xl tracking-tight text-zinc-900 mb-4 font-medium font-roboto">Enterprise-Grade Security</h2>
<p className="text-base text-zinc-500 mb-10 text-balance font-roboto">Patient data is encrypted and handled with strict compliance standards.</p>
<div className="flex flex-wrap gap-3 mb-10">
<span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-medium text-emerald-700 shadow-sm font-roboto">
<iconify-icon height="14" icon="solar:shield-check-bold" width="14"></iconify-icon>
                            HIPAA-Ready
                        </span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700 shadow-sm font-roboto">
<iconify-icon height="14" icon="solar:document-text-bold" width="14"></iconify-icon>
                            SOC 2 Type II
                        </span>
<span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-4 py-2 text-xs font-medium text-purple-700 shadow-sm font-roboto">
<iconify-icon height="14" icon="solar:lock-keyhole-bold" width="14"></iconify-icon>
                            AES-256
                        </span>
</div>
<div className="bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
<ul className="space-y-5">
<li className="flex items-center gap-3 text-base font-normal text-zinc-700 font-roboto">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Compliant workflows tailored for healthcare
                            </li>
<li className="flex items-center gap-3 text-base font-normal text-zinc-700 font-roboto">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Routine third-party penetration testing
                            </li>
<li className="flex items-center gap-3 text-base font-normal text-zinc-700 font-roboto">
<iconify-icon className="text-emerald-500" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
                                Data stored solely within secure regions
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative overflow-hidden bg-zinc-950 border-t border-zinc-800 reveal-trigger py-32 md:py-48">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#8624FF]/20 via-[#4318FF]/10 to-transparent pointer-events-none glow-pulse mix-blend-screen blur-3xl"></div>
<div className="absolute inset-0 dark-bg-grid opacity-30"></div>
<div className="mx-auto max-w-4xl px-6 text-center relative z-10 reveal-up active">
<h2 className="text-4xl md:text-6xl tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight text-balance font-medium font-roboto">
                    Automate Your Patient Communication Today
                </h2>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-xl mx-auto text-balance font-roboto">
                    Operate faster, reduce missed calls, and deliver a better patient experience with zero extra headcount.
                </p>
<a className="group relative inline-flex h-14 items-center justify-center rounded-xl bg-white px-8 text-sm font-medium text-zinc-900 transition-all duration-300 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)] gap-2 overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-zinc-100 to-white opacity-0 group-hover:opacity-100 transition-opacity z-0"></div>
<span className="relative z-10 flex items-center gap-2 font-roboto">
                        Get Started with Alris
                        <iconify-icon className="transition-transform group-hover:translate-x-1" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</a>
</div>
</section>
</main>

<footer className="bg-zinc-950 border-t border-zinc-900">
<div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-sm font-medium tracking-widest text-zinc-400 uppercase font-roboto">Alris</span>
<span className="text-sm text-zinc-600 font-roboto">© 2025 Alris AI. All rights reserved.</span>
</div>
</footer>



    </>
  );
}
