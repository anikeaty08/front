import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Newsreader', 'serif'],
},
colors: {
brand: {
sky: '#38BDF8', // Cyan/Sky blue for AI feel
purple: '#818cf8',
dark: '#050505',
panel: '#0F110E',
}
},
animation: {
'beam': 'beam 3s linear infinite',
'spin-slow': 'spin 12s linear infinite',
'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
beam: {
'0%': { strokeDashoffset: '1000' },
'100%': { strokeDashoffset: '0' },
},
shimmer: {
from: { backgroundPosition: '0 0' },
to: { backgroundPosition: '-200% 0' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();
        
        // Spotlight Effect for Cards
        document.querySelectorAll('.spotlight-card').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.background = `radial-gradient(800px circle at ${x}px ${y}px, rgba(255,255,255,0.06), rgba(255,255,255,0.03) 40%)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.background = 'rgba(255,255,255,0.03)';
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

<nav className="fixed -translate-x-1/2 flex shadow-black/50 transition-all duration-300 bg-white/5 w-full lg:w-fit max-w-[90vw] z-50 rounded-full ring-white/10 ring-1 pt-1.5 pr-2 pb-1.5 pl-4 top-6 left-1/2 backdrop-blur-xl items-center justify-between">
<div className="flex gap-2.5 items-center mr-8">
<div className="relative flex items-center justify-center text-brand-sky">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="font-sans font-medium text-sm tracking-tight text-white">Engenious University</span>
</div>
<div className="hidden md:flex items-center gap-6 mr-8">
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#benefits">Benefits</a>
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#requirements">Requirements</a>
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#instructor">Instructor Path</a>
<a className="text-xs font-medium text-white/50 hover:text-white transition-colors" href="#apply">Apply</a>
</div>
<button className="flex gap-2 hover:bg-brand-sky hover:text-black transition-colors group text-xs font-semibold text-white bg-white/10 rounded-full py-2 px-4 items-center">
            Join Cohort
            <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</button>
</nav>

<main className="container lg:px-12 min-h-[90vh] flex flex-col lg:flex-row z-10 mx-auto pt-32 lg:pt-0 relative items-center">

<div className="lg:w-1/2 flex flex-col justify-center w-full px-6 lg:px-0">
<div className="flex items-center gap-2 mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-sky opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-sky"></span>
</span>
<h4 className="text-xs font-mono tracking-[0.2em] text-brand-sky uppercase">Volunteers Needed</h4>
</div>
<h1 className="lg:text-7xl leading-[1.1] text-white text-glow text-5xl tracking-tight font-medium mb-6">
                Break Into <span className="text-brand-sky font-serif italic">AI Testing</span><br/>
<span className="opacity-50 font-sans font-light">Lead the future.</span>
</h1>
<p className="font-sans text-lg lg:text-xl font-light text-white/60 leading-relaxed tracking-tight max-w-xl mb-10">
                An exclusive offer for current and former students. Reinforce your learning, build a portfolio that stands out, and qualify to become a paid Instructor.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<a className="shiny-cta" href="#apply">
<span>Apply to Volunteer</span>
</a>
<button className="flex items-center gap-2 px-6 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-sm text-white/70">
<i className="w-4 h-4" data-lucide="play-circle"></i>
                    Watch Overview
                </button>
</div>
<div className="mt-12 flex items-center gap-4 text-xs text-white/30 font-mono">
<span>[ OPEN ]</span>
<div className="h-px w-12 bg-white/10"></div>
<span>LIMITED SPOTS AVAILABLE FOR UPCOMING COHORT</span>
</div>
</div>

<div className="lg:w-1/2 h-[500px] lg:h-[800px] w-full relative flex items-center justify-center pointer-events-none">
<svg className="absolute inset-0 w-full h-full overflow-visible" viewbox="0 0 600 600">

<path className="beam-line animate-beam opacity-40" d="M 0 300 C 150 300, 150 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1"></path>
<path className="beam-line animate-beam opacity-40" d="M 600 300 C 450 300, 450 300, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1" style={{animationDelay: '-1.5s'}}></path>
<path className="beam-line animate-beam opacity-40" d="M 300 0 C 300 150, 300 150, 300 300" fill="none" stroke="#38BDF8" strokeWidth="1" style={{animationDelay: '-0.7s'}}></path>

<g transform="translate(300, 300)">
<circle className="opacity-20" fill="url(#center-glow)" r="80"></circle>
<circle className="animate-spin-slow" fill="none" r="120" stroke="white" stroke-dasharray="4 4" stroke-opacity="0.1"></circle>
<circle fill="none" r="90" stroke="#38BDF8" stroke-opacity="0.2" strokeWidth="0.5"></circle>
<circle fill="#0A0A0A" r="15" stroke="#38BDF8" strokeWidth="2"></circle>

<foreignobject height="20" width="20" x="-10" y="-10">
<div className="text-brand-sky flex justify-center items-center h-full">
<i className="w-5 h-5" data-lucide="brain-circuit"></i>
</div>
</foreignobject>
</g>
<defs>
<radialgradient cx="0.5" cy="0.5" id="center-glow" r="0.5">
<stop offset="0%" stop-color="#38BDF8" stop-opacity="0.5"></stop>
<stop offset="100%" stop-color="#38BDF8" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>

<div className="absolute top-[30%] right-[20%] bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded text-[10px] text-brand-sky font-mono animate-pulse">
                STATUS: ACTIVE
            </div>
<div className="absolute bottom-[30%] left-[20%] bg-white/5 border border-white/10 backdrop-blur-md px-3 py-1.5 rounded text-[10px] text-white/50 font-mono">
                ROLE: AI TESTER
            </div>
</div>
</main>

<section className="border-y border-white/5 bg-white/[0.02] py-8 overflow-hidden relative">
<div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10"></div>
<div className="flex gap-16 items-center whitespace-nowrap animate-[shimmer_20s_linear_infinite] opacity-50 px-6">

<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">AUTOMATION</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">PYTHON</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">GENERATIVE AI</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">SELENIUM</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">LLM TESTING</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">CI/CD PIPELINES</span></div>

<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">AUTOMATION</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">PYTHON</span></div>
<div className="flex items-center gap-2"><i className="w-4 h-4 text-brand-sky" data-lucide="check-circle"></i><span className="text-sm font-mono tracking-widest text-white/60">GENERATIVE AI</span></div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 relative" id="benefits">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col items-center text-center mb-20">
<span className="text-xs font-mono text-brand-sky uppercase tracking-[0.2em] mb-4">Why Volunteer?</span>
<h2 className="text-4xl lg:text-5xl font-serif font-medium text-white mb-6">Invest in your <span className="text-white/50 italic">trajectory.</span></h2>
<p className="text-white/60 max-w-2xl text-lg font-light">Don't just learn. Apply, master, and teach. This program is designed to bridge the gap between student and industry leader.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="spotlight-card group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-sky/20 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Reinforce Mastery</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">The best way to learn is to do. Solidify your understanding of AI testing frameworks by working on real-world scenarios in upcoming cohorts.</p>
</div>

<div className="spotlight-card group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-sky/20 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="file-check"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Resume Value</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">Add "Volunteer AI Testing Lead" to your resume. Demonstrate leadership and active engagement in the AI tech community to potential employers.</p>
</div>

<div className="spotlight-card group p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-brand-sky/20 transition-all duration-500 relative overflow-hidden">
<div className="w-12 h-12 rounded-full bg-brand-sky/10 flex items-center justify-center text-brand-sky mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="coins"></i>
</div>
<h3 className="text-xl font-medium text-white mb-3">Become an Instructor</h3>
<p className="text-sm text-white/50 leading-relaxed font-light">Top performing volunteers are fast-tracked to become paid Instructors. Monetize your expertise and build a secondary income stream.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-[#050505] relative border-t border-white/5" id="requirements">
<div className="max-w-5xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="md:w-1/3">
<span className="text-xs font-mono text-brand-sky uppercase tracking-[0.2em] mb-4 block">Prerequisites</span>
<h3 className="text-3xl font-serif text-white mb-4">Minimum <br/> <span className="text-white/50 italic">Requirements</span></h3>
<p className="text-sm text-white/60 font-light leading-relaxed">
                        To maintain the quality of our cohorts, all volunteers must meet these baseline criteria before applying.
                    </p>
</div>
<div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">

<div className="flex gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-brand-sky" data-lucide="graduation-cap"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Previous Alumni</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">You must have previously completed the Career Accelerator Cohort.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-brand-sky" data-lucide="calendar-check"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">80% Attendance Required</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">You must commit to attending at least 80% of the live sessions to support students effectively.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-brand-sky" data-lucide="heart-handshake"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Passion for Teaching</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">A genuine desire to help others debug code, understand concepts, and succeed in their journey.</p>
</div>
</div>

<div className="flex gap-4">
<div className="mt-1">
<i className="w-5 h-5 text-brand-sky" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Technical Proficiency</h4>
<p className="text-xs text-white/50 font-light leading-relaxed">Demonstrated ability in AI Testing, LLM Testing, Promptfoo, Prompt Engineerning, and testing principles during your time as a student.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-[#030303] py-32 px-6 lg:px-12 relative overflow-hidden" id="instructor">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
<div className="lg:w-1/2">
<div className="flex items-center gap-2 mb-6">
<div className="px-2 py-1 rounded border border-brand-sky/30 bg-brand-sky/10 text-[10px] text-brand-sky font-mono uppercase">
                        Career Path
                    </div>
</div>
<h2 className="text-4xl lg:text-6xl font-serif font-medium text-white mb-6 leading-none">
                    From Student to <br/><span className="text-brand-sky">Paid Instructor.</span>
</h2>
<p className="text-lg text-white/50 font-light mb-8">
                    We hire from within. Prove your skills as a volunteer, mentor new students, and unlock the opportunity to join the Engenious faculty.
                </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-3 text-white/80 font-light text-sm">
<i className="w-4 h-4 text-brand-sky" data-lucide="check"></i>
                        Identify &amp; support struggling students
                    </li>
<li className="flex items-center gap-3 text-white/80 font-light text-sm">
<i className="w-4 h-4 text-brand-sky" data-lucide="check"></i>
                        Facilitate code reviews &amp; debugging sessions
                    </li>
<li className="flex items-center gap-3 text-white/80 font-light text-sm">
<i className="w-4 h-4 text-brand-sky" data-lucide="check"></i>
                        Earn competitive rates as an Instructor
                    </li>
</ul>
<a className="inline-block" href="#apply">
<button className="shiny-cta">
<span>Start Your Journey</span>
</button>
</a>
</div>
<div className="lg:w-1/2 w-full">

<div className="relative w-full aspect-video rounded-xl bg-[#0F110E] border border-white/10 shadow-2xl overflow-hidden group">

<div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
<div className="w-3 h-3 rounded-full bg-red-500/20"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
<span className="ml-4 text-[10px] font-mono text-white/30">instructor_dashboard.tsx</span>
</div>

<div className="p-6 grid grid-cols-2 gap-6">

<div className="col-span-1 bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[10px] text-white/40 font-mono mb-2 uppercase">Students Mentored</div>
<div className="text-2xl text-white font-mono">124</div>
<div className="w-full bg-white/10 h-1 mt-3 rounded-full overflow-hidden">
<div className="bg-brand-sky h-full w-[80%]"></div>
</div>
</div>

<div className="col-span-1 bg-white/5 rounded-lg p-4 border border-white/5">
<div className="text-[10px] text-white/40 font-mono mb-2 uppercase">Review Rating</div>
<div className="text-2xl text-white font-mono">4.9/5</div>
<div className="flex gap-0.5 mt-3">
<i className="w-3 h-3 text-brand-sky fill-brand-sky" data-lucide="star"></i>
<i className="w-3 h-3 text-brand-sky fill-brand-sky" data-lucide="star"></i>
<i className="w-3 h-3 text-brand-sky fill-brand-sky" data-lucide="star"></i>
<i className="w-3 h-3 text-brand-sky fill-brand-sky" data-lucide="star"></i>
<i className="w-3 h-3 text-brand-sky fill-brand-sky" data-lucide="star"></i>
</div>
</div>

<div className="col-span-2 bg-brand-sky/10 border border-brand-sky/20 rounded-lg p-3 flex items-center gap-3">
<div className="p-1.5 bg-brand-sky rounded-full text-black">
<i className="w-3 h-3" data-lucide="trophy"></i>
</div>
<div>
<div className="text-xs text-brand-sky font-medium">Eligible for Instructor Promotion</div>
<div className="text-[10px] text-white/50">Based on recent cohort performance.</div>
</div>
</div>
</div>

<div className="absolute -bottom-20 -right-20 w-64 h-64 bg-brand-sky/20 blur-[80px] rounded-full pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 relative overflow-hidden" id="apply">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-white/20"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-8 tracking-tight">
                "Volunteering bridged the gap between my bootcamp and my first Senior QA role."
            </h2>
<div className="flex items-center justify-center gap-4 mb-16">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center overflow-hidden">
<i className="text-white/50 w-6 h-6" data-lucide="user"></i>
</div>
<div className="text-left">
<div className="text-sm text-white font-medium">Alex Johnson</div>
<div className="text-xs text-brand-sky font-mono">Now Lead SDET @ TechCorp</div>
</div>
</div>

<div className="relative group max-w-2xl mx-auto">
<div className="absolute -inset-0.5 bg-gradient-to-r from-brand-sky to-brand-purple rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 sm:p-10 text-left">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-xl font-medium text-white">Application Form</h3>
<p className="text-xs text-white/40 mt-1">Please fill out all fields correctly.</p>
</div>
<div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
<i className="w-4 h-4 text-brand-sky" data-lucide="file-signature"></i>
</div>
</div>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-mono text-white/50 uppercase tracking-wider ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-sky/50 focus:bg-white/10 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-mono text-white/50 uppercase tracking-wider ml-1" htmlFor="email">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-sky/50 focus:bg-white/10 transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-mono text-white/50 uppercase tracking-wider ml-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-sky/50 focus:bg-white/10 transition-all" id="phone" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-mono text-white/50 uppercase tracking-wider ml-1" htmlFor="location">Location</label>
<input className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-brand-sky/50 focus:bg-white/10 transition-all" id="location" placeholder="San Francisco, CA" type="text"/>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-white text-black hover:bg-brand-sky transition-colors px-6 py-4 rounded-lg text-sm font-bold uppercase tracking-wide flex items-center justify-center gap-2 group" type="button">
                                Secure Spot
                                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="mt-4 text-center text-[10px] text-white/30 uppercase tracking-widest">Application based • Limited Availability</p>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] py-12 px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white/40">
<i className="w-5 h-5" data-lucide="cpu"></i>
<span className="text-sm font-medium">Engenious University</span>
</div>
<div className="flex gap-8 text-xs text-white/30 font-mono">
<a className="hover:text-white transition-colors" href="#">Program Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>


    </>
  );
}
