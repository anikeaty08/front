import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
slate: {
850: '#1f2937',
900: '#0f172a',
950: '#020617',
},
brand: {
primary: '#f97316', // Orange
secondary: '#fbbf24', // Amber/Yellow
accent: '#22c55e', // Green
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        function switchTab(type) {
            const btnStudent = document.getElementById('btn-student');
            const btnStartup = document.getElementById('btn-startup');
            const contentArea = document.getElementById('content-area');

            // Reset Styles
            const activeClass = ['bg-white', 'text-black', 'shadow-lg'];
            const inactiveClass = ['text-slate-400', 'hover:text-white'];

            if(type === 'student') {
                btnStudent.classList.add(...activeClass);
                btnStudent.classList.remove(...inactiveClass);
                btnStartup.classList.remove(...activeClass);
                btnStartup.classList.add(...inactiveClass);
                
                // Content Change Animation with New Colors
                contentArea.style.opacity = '0';
                setTimeout(() => {
                    contentArea.innerHTML = `
                        <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:user-circle-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Smart Profile Creation</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Build a profile that highlights your potential, not just your GPA. Showcase projects, skills, and ambition.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:magic-stick-3-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">AI Matching</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Our algorithm connects you with opportunities that align with your career goals and values perfectly.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:rocket-2-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Fast-Track Career</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Skip the corporate ladder. Join high-growth startups where your work directly impacts the bottom line.</p>
                        </div>
                    `;
                    contentArea.style.opacity = '1';
                }, 300);

            } else {
                btnStartup.classList.add(...activeClass);
                btnStartup.classList.remove(...inactiveClass);
                btnStudent.classList.remove(...activeClass);
                btnStudent.classList.add(...inactiveClass);

                // Content Change Animation with New Colors
                contentArea.style.opacity = '0';
                setTimeout(() => {
                    contentArea.innerHTML = `
                         <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:users-group-two-rounded-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Access Top Talent</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Reach motivated students from top universities who are ready to make an immediate impact on your product.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:verified-check-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Vetted Candidates</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Save time with pre-vetted candidates. We check skills and cultural fit before they ever hit your dashboard.</p>
                        </div>
                        <div class="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
                            <div class="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <iconify-icon icon="solar:chart-2-linear" width="28" stroke-width="1.5"></iconify-icon>
                            </div>
                            <h3 class="text-xl font-medium text-white mb-3 tracking-tight">Scale Faster</h3>
                            <p class="text-sm text-slate-400 leading-relaxed">Fill roles in days, not months. Build your core team with flexible internship-to-hire pipelines.</p>
                        </div>
                    `;
                    contentArea.style.opacity = '1';
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-black font-semibold text-lg tracking-tighter">
                    m
                </div>
<span className="font-semibold text-lg tracking-tight text-white group-hover:text-slate-200 transition-colors">matchup</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#students">For Students</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#startups">For Startups</a>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#features">How it works</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-300 hover:text-white hidden sm:block" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-all transform hover:scale-105" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-primary/20 rounded-full blur-[120px] -z-10 opacity-40"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 rounded-full bg-brand-accent"></span>
<span className="text-xs font-medium text-slate-300 tracking-wide uppercase">Connecting Future Talent</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                Where ambition meets <br/>
<span className="glow-accent">opportunity.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Matchup bridges the gap between driven students and high-growth startups. Find your next internship or hire your next star performer.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
                    Find an Internship
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                    Hire Talent
                </button>
</div>

<div className="mt-20 relative mx-auto max-w-3xl animate-float">
<div className="rounded-xl bg-[#0A0A0A] border border-white/10 p-2 shadow-2xl shadow-brand-primary/10">
<div className="rounded-lg bg-[#0f1115] overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#141414]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-brand-secondary/20 border border-brand-secondary/50"></div>
<div className="w-3 h-3 rounded-full bg-brand-accent/20 border border-brand-accent/50"></div>
</div>
<div className="h-2 w-20 bg-white/10 rounded-full"></div>
</div>

<div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center">
<iconify-icon icon="solar:figma-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">98% Match</span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-1">Product Designer</h3>
<p className="text-xs text-slate-500">San Francisco • Remote</p>
<div className="mt-4 flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-slate-700 border border-[#0f1115]"></div>
<div className="w-6 h-6 rounded-full bg-slate-600 border border-[#0f1115]"></div>
<div className="w-6 h-6 rounded-full bg-slate-500 border border-[#0f1115] flex items-center justify-center text-[8px] text-white font-medium">+5</div>
</div>
</div>

<div className="p-4 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group cursor-pointer">
<div className="flex items-start justify-between mb-4">
<div className="w-10 h-10 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
<iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full border border-green-400/20">95% Match</span>
</div>
<h3 className="text-sm font-medium text-slate-200 mb-1">Frontend Dev</h3>
<p className="text-xs text-slate-500">New York • Hybrid</p>
<div className="mt-4 flex items-center gap-2">
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-brand-primary rounded-full"></div>
</div>
<span className="text-[10px] text-slate-400">3d left</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-12">
<p className="text-center text-sm text-slate-500 mb-8 font-medium">TRUSTED BY INNOVATIVE TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:atom-linear"></iconify-icon> ACME AI</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:infinity-linear"></iconify-icon> Loop</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:planet-linear"></iconify-icon> Orbit</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear"></iconify-icon> Stack</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:bolt-linear"></iconify-icon> Flash</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4">Tailored for both sides</h2>
<p className="text-slate-400 max-w-lg mx-auto">Whether you're looking to learn or looking to lead, we've built the perfect ecosystem.</p>

<div className="mt-10 inline-flex rounded-full p-1 bg-white/5 border border-white/10 backdrop-blur-sm relative" id="toggle-container">
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all text-black bg-white shadow-lg" id="btn-student" onclick="switchTab('student')">Student</button>
<button className="px-6 py-2 rounded-full text-sm font-medium transition-all text-slate-400 hover:text-white" id="btn-startup" onclick="switchTab('startup')">Startup</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-opacity duration-300" id="content-area">

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Smart Profile Creation</h3>
<p className="text-sm text-slate-400 leading-relaxed">Build a profile that highlights your potential, not just your GPA. Showcase projects, skills, and ambition.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Matching</h3>
<p className="text-sm text-slate-400 leading-relaxed">Our algorithm connects you with opportunities that align with your career goals and values perfectly.</p>
</div>

<div className="p-8 rounded-2xl bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 hover:border-white/20 transition-all group">
<div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:rocket-2-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Fast-Track Career</h3>
<p className="text-sm text-slate-400 leading-relaxed">Skip the corporate ladder. Join high-growth startups where your work directly impacts the bottom line.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-1">500+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Startups</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-1">10k+</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Students</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-1">98%</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Match Rate</div>
</div>
<div>
<div className="text-4xl font-semibold text-white tracking-tighter mb-1">24h</div>
<div className="text-xs text-slate-500 uppercase tracking-widest">Avg Response</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="rounded-3xl border border-white/10 bg-[#0A0A0A] p-12 md:p-20 text-center shadow-2xl overflow-hidden relative group">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-primary/20 blur-[80px] rounded-full group-hover:bg-brand-primary/30 transition-all"></div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6 relative z-10">
                    Ready to start your journey?
                </h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto relative z-10">
                    Join thousands of students and startups building the future together. No credit card required to start.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<input className="w-full sm:w-80 px-5 py-3.5 bg-white/5 border border-white/10 rounded-full text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all custom-input" placeholder="Enter your email" type="email"/>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white text-black rounded-full font-medium hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                        Get Early Access
                    </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded-md bg-white text-black flex items-center justify-center font-bold text-xs">m</div>
<span className="font-semibold text-white tracking-tight">matchup</span>
</a>
<p className="text-sm text-slate-500 max-w-xs">
                        Connecting the next generation of talent with the companies building tomorrow.
                    </p>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs text-slate-600">© 2024 Matchup Inc. All rights reserved.</p>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-x-linear" width="18"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
