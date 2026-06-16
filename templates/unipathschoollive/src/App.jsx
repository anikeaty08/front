import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, i) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('is-visible');
                        }, i * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });

            document.querySelectorAll('main h1, main h2, main h3, main p, main button, main .group, main .grid > div, footer h1').forEach(el => {
                if (!el.closest('.animate-marquee') && !el.classList.contains('ai-plane') && !el.classList.contains('absolute')) {
                    el.classList.add('reveal-on-scroll');
                    observer.observe(el);
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="border-dashed sticky bg-[#0F172A]/90 w-full z-50 top-0 backdrop-blur-md border-b border-white/10">
<div className="grid grid-cols-12 h-16 sm:h-20">

<div className="col-span-4 hidden md:flex items-center">
<a className="flex items-center justify-center hover:text-white transition-colors border-dashed text-xs font-medium tracking-wide h-full border-white/10 border-r px-8 font-heading uppercase" href="#platform">
                    Platform
                </a>
<a className="h-full px-8 flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 font-heading uppercase" href="#schools">
                    Schools
                </a>
<a className="h-full px-8 flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 font-heading uppercase" href="#resources">
                    Resources
                </a>
</div>

<div className="col-span-2 md:hidden flex items-center pl-6 border-r border-dashed border-white/10">
<iconify-icon className="text-white text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>

<div className="col-span-8 md:col-span-4 flex relative items-center justify-center border-r border-dashed border-white/10">
<div className="flex items-center gap-3">
<div className="relative w-8 h-8 flex items-center justify-center text-[#6366F1]">
<iconify-icon className="text-3xl" icon="solar:branching-paths-up-linear"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="font-heading font-semibold text-white tracking-tight text-xl leading-none uppercase">UNIPATH</span>
<span className="font-heading font-medium text-[#6366F1] text-xs uppercase tracking-widest leading-none mt-1 w-full text-justify flex justify-between">
                            SCHOOL
                        </span>
</div>
</div>
</div>

<div className="col-span-2 md:col-span-4 flex items-center justify-end">
<a className="h-full px-8 hidden md:flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-r border-dashed border-white/10 font-heading uppercase" href="#pricing">
                    Pricing
                </a>
<a className="h-full px-8 hidden md:flex items-center justify-center text-xs font-medium tracking-wide hover:text-white transition-colors border-dashed border-white/10 font-heading uppercase" href="#">
                    Login
                </a>
<a className="h-full w-full md:w-auto px-8 flex items-center justify-center text-xs font-medium tracking-wide text-white hover:text-[#6366F1] transition-colors gap-2 font-heading uppercase bg-white/5 hover:bg-white/10 border-l border-dashed border-white/10" href="#pricing">
                    Start Free
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</header>
<main className="flex-grow flex flex-col">

<div className="grid grid-cols-1 lg:grid-cols-2 border-dashed border-white/10 border-b overflow-hidden bg-[#0F172A]">

<div className="relative flex flex-col lg:px-20 lg:py-32 pt-20 pr-6 pb-20 pl-6 justify-center border-dashed border-white/10 border-r bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#2563EB]/10 via-[#0F172A] to-[#0F172A] reveal-on-scroll">
<div className="relative z-10 max-w-2xl">
<div className="flex items-center gap-2 mb-8">
<span className="flex h-2 w-2 rounded-full bg-[#6366F1] animate-pulse"></span>
<p className="text-[#6366F1] font-mono text-xs tracking-widest uppercase font-medium">
                            AI Career Intelligence
                        </p>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8 font-heading font-light tracking-tight reveal-on-scroll">
                        Your Career Shouldn't Be
                        <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#2563EB]">Guesswork.</span>
</h1>
<p className="text-lg sm:text-xl leading-relaxed max-w-lg mb-12 font-light text-white/80 reveal-on-scroll tracking-tight">
                        UNIPATH SCHOOL uses AI to help students discover the right career, build the exact skills companies expect, and prepare for real interviews.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 border border-dashed border-white/10 max-w-lg rounded-sm overflow-hidden bg-white/5">
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-[#6366F1]/10 transition-all duration-300 border-b sm:border-b-0 sm:border-r border-dashed border-white/10 reveal-on-scroll">
<span className="text-white font-medium tracking-wide text-xs uppercase font-heading">
                                Start Career Path
                            </span>
</button>
<button className="group flex items-center justify-center gap-3 px-8 py-5 hover:bg-white/10 transition-all duration-300 reveal-on-scroll">
<span className="text-white/70 hover:text-white font-medium tracking-wide text-xs uppercase font-heading transition-colors">
                                For Schools
                            </span>
<iconify-icon className="text-white/70 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all text-base" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="mt-8 flex items-center gap-3 reveal-on-scroll">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-[#0F172A]"></div>
<div className="w-8 h-8 rounded-full bg-slate-700 border-2 border-[#0F172A]"></div>
<div className="w-8 h-8 rounded-full bg-slate-600 border-2 border-[#0F172A]"></div>
</div>
<p className="text-xs text-white/50 font-medium tracking-wide">Trusted by ambitious students preparing for real careers.</p>
</div>
</div>
</div>

<div className="group/hero-visual overflow-hidden reveal-on-scroll bg-[#0F172A] z-10 relative flex items-center justify-center min-h-[500px] lg:min-h-auto transition-colors duration-700 hover:bg-[#6366F1]/[0.02]">
<div className="absolute inset-0 bg-gradient-to-br from-[#6366F1]/5 via-[#0F172A] to-[#0F172A] opacity-40 group-hover/hero-visual:opacity-100 group-hover/hero-visual:from-[#6366F1]/10 transition-all duration-700"></div>
<div className="scene-3d w-full h-full flex items-center justify-center relative">
<div className="ai-plane w-80 h-80 sm:w-96 sm:h-96 bg-[#1E293B]/90 border border-white/10 rounded-xl relative overflow-hidden backdrop-blur-sm transition-all duration-500 group-hover/hero-visual:border-[#6366F1]/40 group-hover/hero-visual:shadow-[0_0_80px_rgba(99,102,241,0.15)]">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] group-hover/hero-visual:bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] transition-all duration-500"></div>

<div className="absolute top-1/2 left-0 w-full h-[2px] bg-white/5 transform -translate-y-10 group-hover/hero-visual:bg-[#6366F1]/30 transition-colors duration-500"></div>
<div className="absolute top-1/4 left-1/4 w-1/2 h-[2px] bg-white/5 transform rotate-45 group-hover/hero-visual:bg-[#2563EB]/30 transition-colors duration-500"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
<div className="absolute w-32 h-32 rounded-full border border-[#6366F1]/20 bg-[#6366F1]/5 pulse-circle group-hover/hero-visual:bg-[#6366F1]/10 transition-colors duration-500"></div>
<div className="relative z-20 w-12 h-12 bg-[#0F172A] rounded-xl border border-[#6366F1] flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-[#6366F1] text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>

<div className="absolute z-30 ai-badge">
<div className="bg-white text-[#0F172A] px-3 py-1.5 rounded text-xs font-semibold tracking-wide uppercase shadow-lg flex items-center gap-2 whitespace-nowrap">
<iconify-icon className="text-[#2563EB]" icon="solar:check-circle-linear"></iconify-icon>
                                    Career Path Found
                                </div>
<div className="w-2 h-2 bg-white rotate-45 absolute bottom-[-4px] left-1/2 -translate-x-1/2"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 z-10 data-packet">
<div className="w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] border-2 border-[#1E293B]"></div>
</div>
</div>

<div className="absolute bottom-20 right-10 lg:right-20 bg-[#1E293B] border border-white/10 p-4 rounded-lg shadow-2xl backdrop-blur-md hidden sm:block animate-[float-plane_6s_ease-in-out_infinite] group-hover/hero-visual:border-[#6366F1]/30 transition-colors duration-500">
<div className="flex items-center gap-2 mb-2">
<div className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse"></div>
<span className="text-xs text-white font-medium uppercase font-heading tracking-wide">AI Analysis</span>
</div>
<div className="text-xs text-white/50 font-mono space-y-1">
<div>Skills Matched: 85%</div>
<div>Readiness: High</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-dashed bg-[#0F172A] border-white/10 border-b group/footer">
<div className="max-w-screen-2xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12">
<div className="col-span-12 md:col-span-2 py-6 px-6 md:px-10 border-b md:border-b-0 md:border-r border-dashed border-white/10 flex items-center bg-[#0F172A] relative z-20 reveal-on-scroll">
<span className="text-xs font-medium tracking-widest text-white/40 uppercase font-heading">
                            Platform Scale
                        </span>
</div>
<div className="col-span-12 md:col-span-10 relative overflow-hidden h-20 flex items-center reveal-on-scroll" style={{maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'}}>
<div className="animate-marquee">

<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#6366F1]" icon="solar:route-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">50+ Career Paths</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#2563EB]" icon="solar:dialog-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">10,000+ Interview Qs</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#6366F1]" icon="solar:cpu-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">24/7 AI Guidance</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#2563EB]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">Real Job Prep</span>
</div>

<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#6366F1]" icon="solar:route-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">50+ Career Paths</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#2563EB]" icon="solar:dialog-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">10,000+ Interview Qs</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#6366F1]" icon="solar:cpu-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">24/7 AI Guidance</span>
</div>
<div className="w-72 h-20 flex-shrink-0 flex items-center justify-center border-r border-dashed border-white/10 opacity-50 hover:opacity-100 transition-opacity gap-3">
<iconify-icon className="text-xl text-[#2563EB]" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-sm font-medium text-white tracking-wide font-heading uppercase">Real Job Prep</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24 pb-24 relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 relative z-10">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<div className="flex items-center gap-3 mb-6">
<span className="uppercase text-xs font-semibold text-[#6366F1] tracking-widest font-heading">
                                    01. The Problem
                                </span>
</div>
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-6 font-heading leading-tight reveal-on-scroll">
                                Students Are Lost After
                                <span className="font-medium">Graduation.</span>
</h2>
<p className="text-lg text-white/70 reveal-on-scroll font-light">
                                Universities teach theory, but companies hire for practical skills. UNIPATH bridges this gap with AI intelligence.
                            </p>
</div>
</div>
<div className="mt-16 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 relative z-10">

<div className="group relative flex h-full flex-col bg-[#0F172A] reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex-1 flex flex-col p-10">
<div className="w-12 h-12 rounded-lg bg-[#1E293B] border border-white/10 flex items-center justify-center mb-8 text-white/50 group-hover:text-[#6366F1] transition-colors">
<iconify-icon className="text-2xl" icon="solar:question-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4 font-heading tracking-tight">Career Confusion</h3>
<p className="text-sm leading-relaxed text-white/60">
                                Students don't know which path actually fits their strengths and market demand.
                            </p>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#0F172A] reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex-1 flex flex-col p-10">
<div className="w-12 h-12 rounded-lg bg-[#1E293B] border border-white/10 flex items-center justify-center mb-8 text-white/50 group-hover:text-[#2563EB] transition-colors">
<iconify-icon className="text-2xl" icon="solar:diagram-down-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4 font-heading tracking-tight">Skill Gap</h3>
<p className="text-sm leading-relaxed text-white/60">
                                Curriculums lag behind industry needs. Students miss the exact technical skills companies require today.
                            </p>
</div>
</div>

<div className="group relative flex h-full flex-col bg-[#0F172A] reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative flex-1 flex flex-col p-10">
<div className="w-12 h-12 rounded-lg bg-[#1E293B] border border-white/10 flex items-center justify-center mb-8 text-white/50 group-hover:text-[#6366F1] transition-colors">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-4 font-heading tracking-tight">Interview Failure</h3>
<p className="text-sm leading-relaxed text-white/60">
                                Most students fail initial screenings because they never practiced structured, real-world interviews.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24" id="platform">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<span className="uppercase text-xs font-semibold text-[#6366F1] tracking-widest font-heading block mb-6 reveal-on-scroll">
                        02. The Platform
                    </span>
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-6 font-heading leading-tight reveal-on-scroll">
                        One Platform That Makes Students <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Job-Ready.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dashed border-white/10">

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#6366F1] transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">AI Career Discovery</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Find the career path that perfectly matches your interests, academic background, and strengths.
                        </p>
</div>

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#2563EB] transition-colors">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">Career Roadmap</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Get a step-by-step actionable plan guiding you from a confused student to a job-ready professional.
                        </p>
</div>

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#6366F1] transition-colors">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">ATS Resume Builder</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Create optimized resumes formatted exactly how modern Applicant Tracking Systems expect them.
                        </p>
</div>

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#2563EB] transition-colors">
<iconify-icon className="text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">Skill Gap Analyzer</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Our AI identifies the exact technical and soft skills you are missing for your target role.
                        </p>
</div>

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#6366F1] transition-colors relative">
<div className="absolute -top-1 -right-1 w-2 h-2 bg-[#6366F1] rounded-full animate-pulse"></div>
<iconify-icon className="text-xl" icon="solar:microphone-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">AI Interview Prep</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Practice with dynamic, structured interview questions generated by AI based on real company data.
                        </p>
</div>

<div className="p-10 border-r border-b border-dashed border-white/10 group hover:bg-white/[0.02] transition-colors reveal-on-scroll">
<div className="mb-6 w-10 h-10 rounded bg-white/5 flex items-center justify-center text-white/70 group-hover:text-[#2563EB] transition-colors">
<iconify-icon className="text-xl" icon="solar:pie-chart-linear"></iconify-icon>
</div>
<h3 className="text-lg text-white font-medium mb-3 font-heading tracking-tight">Progress Dashboard</h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                            Track your overall readiness score and see how prepared you are to enter the industry.
                        </p>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 border border-dashed border-white/10 bg-[#1E293B]/20">

<div className="col-span-12 md:col-span-6 border-b md:border-b-0 md:border-r border-dashed border-white/10 p-10 flex flex-col justify-between reveal-on-scroll">
<div>
<span className="inline-block px-3 py-1 text-xs font-medium text-[#6366F1] border border-[#6366F1]/20 rounded bg-[#6366F1]/10 mb-6 font-heading tracking-wide uppercase">
                                Core Engine
                            </span>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4 font-heading">Know Exactly Why Companies Reject Candidates.</h3>
<p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-md">
                                UNIPATH analyzes job roles and compares them with your current profile to build a personalized improvement plan.
                            </p>
</div>

<div className="bg-[#0F172A] border border-white/5 rounded-lg p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent opacity-50"></div>
<div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-white/10">
<span className="text-xs font-medium text-white/80 font-heading">Target: Software Developer</span>
<span className="text-xs text-[#2563EB] font-mono">Analysis Complete</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<span className="text-xs text-white/40 uppercase tracking-widest block mb-3">Required</span>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-white/80"><iconify-icon className="text-[#6366F1]" icon="solar:check-circle-linear"></iconify-icon> Python</li>
<li className="flex items-center gap-2 text-xs text-white/80"><iconify-icon className="text-[#6366F1]" icon="solar:check-circle-linear"></iconify-icon> Data Structures</li>
<li className="flex items-center gap-2 text-xs text-white/80"><iconify-icon className="text-slate-500" icon="solar:minus-circle-linear"></iconify-icon> Git</li>
<li className="flex items-center gap-2 text-xs text-white/80"><iconify-icon className="text-slate-500" icon="solar:minus-circle-linear"></iconify-icon> System Design</li>
</ul>
</div>
<div className="bg-[#2563EB]/5 border border-[#2563EB]/20 rounded p-4">
<span className="text-xs text-[#2563EB] uppercase tracking-widest block mb-3 font-medium">Missing Skills</span>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded border border-[#2563EB]/20">Git</span>
<span className="px-2 py-1 bg-[#2563EB]/10 text-[#2563EB] text-xs rounded border border-[#2563EB]/20">System Design</span>
</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-6 p-10 flex flex-col justify-between relative overflow-hidden reveal-on-scroll">

<div className="absolute top-1/2 right-0 w-64 h-64 bg-[#6366F1]/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10">
<span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 border border-amber-400/20 rounded bg-amber-400/10 mb-6 font-heading tracking-wide uppercase">
                                Premium Feature
                            </span>
<h3 className="text-2xl text-white font-medium tracking-tight mb-4 font-heading">AI Mock Interviews That Feel Like Real Hiring.</h3>
<p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-md">
                                Practice real scenarios. Get instantaneous, actionable feedback on your communication, technical knowledge, and confidence.
                            </p>
</div>

<div className="space-y-3 relative z-10">

<div className="bg-[#0F172A] border border-white/5 p-4 flex items-center justify-between group hover:border-white/10 transition-colors">
<div className="flex items-center gap-4">
<div className="w-8 h-8 rounded bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1]">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium">Performance Score</h4>
<p className="text-xs text-white/50">Overall rating based on industry baseline.</p>
</div>
</div>
<span className="text-lg font-heading font-medium text-[#6366F1]">82/100</span>
</div>

<div className="bg-[#0F172A] border border-white/5 p-4 flex items-center gap-4 group hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/50">
<iconify-icon icon="solar:chat-round-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium">Delivery &amp; Confidence</h4>
<p className="text-xs text-white/50">Suggestions to improve tone and structure.</p>
</div>
</div>

<div className="bg-[#0F172A] border border-white/5 p-4 flex items-center gap-4 group hover:border-white/10 transition-colors">
<div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-white/50">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm text-white font-medium">Readiness Rating</h4>
<p className="text-xs text-white/50">Probability of passing a real HR screen.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="uppercase text-xs font-semibold text-[#6366F1] tracking-widest font-heading mb-4 block">
                        03. Process
                    </span>
<h2 className="text-3xl md:text-4xl text-white font-light tracking-tight font-heading">
                        From Student to <span className="font-medium">Job-Ready.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">

<div className="bg-[#0F172A] p-8 relative reveal-on-scroll">
<span className="text-4xl font-light text-white/10 absolute top-6 right-6 font-heading">1</span>
<div className="mt-8">
<h4 className="text-base text-white font-medium mb-2 font-heading tracking-tight">Create Profile</h4>
<p className="text-xs text-white/50 leading-relaxed">Tell us about your interests, education, and ultimate goals.</p>
</div>
</div>

<div className="bg-[#0F172A] p-8 relative reveal-on-scroll">
<span className="text-4xl font-light text-[#6366F1]/20 absolute top-6 right-6 font-heading">2</span>
<div className="mt-8">
<h4 className="text-base text-white font-medium mb-2 font-heading tracking-tight text-[#6366F1]">AI Mapping</h4>
<p className="text-xs text-white/50 leading-relaxed">UNIPATH recommends careers perfectly suited for you.</p>
</div>
</div>

<div className="bg-[#0F172A] p-8 relative reveal-on-scroll">
<span className="text-4xl font-light text-white/10 absolute top-6 right-6 font-heading">3</span>
<div className="mt-8">
<h4 className="text-base text-white font-medium mb-2 font-heading tracking-tight">Skill Build</h4>
<p className="text-xs text-white/50 leading-relaxed">Follow a guided, personalized roadmap to fill gaps.</p>
</div>
</div>

<div className="bg-[#0F172A] p-8 relative reveal-on-scroll">
<span className="text-4xl font-light text-[#2563EB]/20 absolute top-6 right-6 font-heading">4</span>
<div className="mt-8">
<h4 className="text-base text-white font-medium mb-2 font-heading tracking-tight text-[#2563EB]">Interviews</h4>
<p className="text-xs text-white/50 leading-relaxed">Practice real hiring scenarios with instant AI feedback.</p>
</div>
</div>

<div className="bg-[#0F172A] p-8 relative reveal-on-scroll">
<span className="text-4xl font-light text-white/10 absolute top-6 right-6 font-heading">5</span>
<div className="mt-8">
<h4 className="text-base text-white font-medium mb-2 font-heading tracking-tight">Hired</h4>
<p className="text-xs text-white/50 leading-relaxed">Apply to companies with verified confidence and skills.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24 pb-24 relative overflow-hidden" id="pricing">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-[#6366F1]/50 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="uppercase text-xs font-semibold text-[#6366F1] tracking-widest font-heading mb-4 block">
                        04. Pricing
                    </span>
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight font-heading mb-4">
                        Invest in Your <span className="font-medium">Career.</span>
</h2>
<p className="text-sm text-white/60">Not just another course. A complete career infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="border border-dashed border-white/10 bg-[#1E293B]/30 p-10 flex flex-col reveal-on-scroll">
<div className="mb-8">
<h3 className="text-xl text-white font-medium font-heading tracking-tight mb-2">Free Plan</h3>
<p className="text-xs text-white/50 mb-6">For exploration and basic mapping.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl text-white font-light font-heading tracking-tight">₹0</span>
</div>
</div>
<div className="flex-grow mb-10">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white/70">
<iconify-icon className="text-white/30 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Career Path Discovery
                                </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<iconify-icon className="text-white/30 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Basic Career Roadmap
                                </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<iconify-icon className="text-white/30 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Resume Builder
                                </li>
<li className="flex items-start gap-3 text-sm text-white/70">
<iconify-icon className="text-white/30 mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Limited Interview Questions
                                </li>
</ul>
</div>
<button className="w-full py-4 border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors font-heading">
                            Start Free
                        </button>
</div>

<div className="border border-[#6366F1]/30 bg-[#1E293B]/80 p-10 flex flex-col relative shadow-[0_0_40px_rgba(99,102,241,0.05)] reveal-on-scroll">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#6366F1] to-[#2563EB]"></div>
<div className="absolute top-6 right-6">
<span className="px-3 py-1 bg-[#6366F1]/10 text-[#6366F1] text-xs font-semibold uppercase tracking-widest rounded-full border border-[#6366F1]/20">Most Popular</span>
</div>
<div className="mb-8 mt-2">
<h3 className="text-xl text-white font-medium font-heading tracking-tight mb-2">Pro Plan</h3>
<p className="text-xs text-[#6366F1] mb-6 font-medium">Know exactly what to improve to land a job.</p>
<div className="flex items-baseline gap-1">
<span className="text-4xl text-white font-medium font-heading tracking-tight">₹499</span>
<span className="text-xs text-white/50">/month</span>
</div>
</div>
<div className="flex-grow mb-10">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-[#6366F1] mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    AI Mock Interviews (Unlimited)
                                </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-[#6366F1] mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Skill Gap Detection Engine
                                </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-[#6366F1] mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Personalized Skill Roadmaps
                                </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-[#6366F1] mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Career Readiness Score
                                </li>
<li className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-[#6366F1] mt-0.5 text-base" icon="solar:check-circle-linear"></iconify-icon>
                                    Advanced Resume Optimization
                                </li>
</ul>
</div>
<button className="w-full py-4 bg-[#6366F1] text-white text-sm font-medium hover:bg-[#4F46E5] transition-colors font-heading shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            Upgrade to Pro
                        </button>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-24 pb-24" id="schools">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="flex flex-col group h-full border-white/10 border border-dashed p-10 relative reveal-on-scroll bg-gradient-to-br from-white/[0.02] to-transparent">
<div className="mb-8">
<span className="inline-block px-3 py-1 text-xs font-medium text-white/50 border border-white/10 rounded bg-white/5 font-heading uppercase tracking-widest">
                                B2B Platform
                            </span>
</div>
<div className="mb-4">
<span className="text-2xl font-medium text-white tracking-tight font-heading">
                                Built for Schools That Care About Outcomes.
                            </span>
</div>
<p className="text-white/60 text-sm mb-10 font-light leading-relaxed">
                            Equip your institution with an Analytics Dashboard, track student placement preparation, and run AI Interview Labs.
                        </p>
<div className="mt-auto mb-10">
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-1 h-1 bg-[#2563EB] rounded-full"></div> Institution Analytics
                                </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<div className="w-1 h-1 bg-[#2563EB] rounded-full"></div> Student Tracking
                                </li>
</ul>
</div>
<button className="w-full py-4 rounded bg-white text-[#0F172A] hover:bg-gray-200 transition-colors text-sm font-medium font-heading">
                            Request School Demo
                        </button>
</div>

<div className="flex flex-col h-full border-white/10 border border-dashed p-10 relative reveal-on-scroll bg-[#1E293B]/20 justify-center">
<div className="text-[#6366F1] mb-6">
<iconify-icon className="text-4xl opacity-50" icon="solar:quote-left-linear"></iconify-icon>
</div>
<p className="text-lg md:text-xl text-white font-light leading-relaxed mb-8 tracking-tight italic">
                            "UNIPATH helped me realize what exact skills I lacked for data science. The AI interview practice was incredibly helpful and gave me the confidence to pass my actual technical screen."
                        </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10"></div>
<div>
<h4 className="text-sm font-medium text-white font-heading">Computer Science Student</h4>
<span className="text-xs text-white/50">Placed at Tech Corp</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-dashed bg-[#0F172A] border-white/10 border-b pt-32 pb-32 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#6366F1]/10 via-transparent to-transparent pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10 reveal-on-scroll">
<h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-8 font-heading">
                    Your Future Career Deserves <br/><span className="font-medium">Better Preparation.</span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-4 bg-[#6366F1] text-white text-sm font-medium hover:bg-[#4F46E5] transition-colors font-heading shadow-lg rounded-sm">
                        Upgrade to Pro
                    </button>
<button className="w-full sm:w-auto px-8 py-4 border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors font-heading rounded-sm">
                        Start Free
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-[#0F172A] border-white/10 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col font-body border-dashed border-white/10 border-x border-b">

<div className="relative bg-[#2563EB] text-white w-full overflow-hidden border-b border-dashed border-white/20">
<div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-none opacity-20">
<div className="border-r border-dashed border-white/50 h-full"></div>
<div className="border-r border-dashed border-white/50 h-full"></div>
<div className="border-r border-dashed border-white/50 h-full"></div>
</div>
<div className="relative z-10 px-8 py-16 md:px-16 md:py-24 flex flex-col justify-between min-h-[300px]">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 z-20 text-sm font-medium">
<div className="col-span-1 md:col-span-1 flex flex-col gap-2">
<span className="font-heading font-semibold text-xl tracking-tight mb-2">UNIPATH</span>
<p className="text-white/80 font-light leading-relaxed max-w-[200px]">
                                AI Career Intelligence Platform for students and schools.
                            </p>
</div>
<div className="flex flex-col gap-4">
<span className="block text-white/60 font-semibold tracking-wide uppercase text-xs font-heading">Platform</span>
<div className="flex flex-col gap-3">
<a className="hover:text-white/80 transition-colors font-light" href="#">Discovery</a>
<a className="hover:text-white/80 transition-colors font-light" href="#">Pricing</a>
<a className="hover:text-white/80 transition-colors font-light" href="#">Schools</a>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="block text-white/60 font-semibold tracking-wide uppercase text-xs font-heading">Company</span>
<div className="flex flex-col gap-3">
<a className="hover:text-white/80 transition-colors font-light" href="#">Resources</a>
<a className="hover:text-white/80 transition-colors font-light" href="#">Contact</a>
<a className="hover:text-white/80 transition-colors font-light" href="#">Privacy</a>
</div>
</div>
<div className="flex flex-col gap-4">
<span className="block text-white/60 font-semibold tracking-wide uppercase text-xs font-heading">Connect</span>
<div className="flex flex-col gap-3">
<a className="hover:text-white/80 transition-colors font-light" href="#">LinkedIn</a>
<a className="hover:text-white/80 transition-colors font-light" href="#">Twitter</a>
</div>
</div>
</div>
</div>
</div>

<div className="relative bg-[#0F172A] text-white w-full overflow-hidden pt-16 pb-8">
<div className="relative z-10 w-full flex justify-center items-end leading-none select-none">
<h1 className="text-[18vw] md:text-[14vw] font-semibold tracking-tighter text-center leading-[0.75] mb-[-0.05em] text-white/5 font-heading reveal-on-scroll">
                        UNIPATH
                    </h1>
</div>
<div className="absolute bottom-4 left-0 w-full text-center text-xs text-white/30 font-light font-mono z-20">
                    © 2024 UNIPATH SCHOOL. All rights reserved.
                </div>
</div>
</div>
</footer>


    </>
  );
}
