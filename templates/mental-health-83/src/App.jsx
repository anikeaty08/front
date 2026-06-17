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



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fadeIn');
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });
        });
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4A90E2]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-[#93C5FD]/20 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-[#E0E7FF]/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
</div>

<nav className="relative z-50 w-full px-6 py-6 border-b border-[#E2E8F0] backdrop-blur-sm bg-[#FFFFFF]/90">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-[#4A90E2] transition-transform group-hover:rotate-12" data-icon="lucide:life-buoy" data-width="24"></span>
<span className="text-lg font-semibold tracking-tight text-[#0F172A]">lifejacket</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#64748B]">
<a className="hover:text-[#4A90E2] transition-colors" href="#features">Manifesto</a>
<a className="hover:text-[#4A90E2] transition-colors" href="#practitioners">Practitioners</a>
<a className="hover:text-[#4A90E2] transition-colors" href="#security">Safety</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-[#64748B] hover:text-[#4A90E2] hidden sm:block" href="#">Log in</a>
<a className="px-5 py-2 bg-[#4A90E2] hover:bg-[#3B7ECC] text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-[#4A90E2]/20 hover:shadow-xl hover:-translate-y-0.5" href="#join">
                    Request Access
                </a>
</div>
</div>
</nav>

<main className="relative z-10 pt-20 pb-32 px-6">
<div className="max-w-4xl mx-auto text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4A90E2]/5 border border-[#4A90E2]/10 text-[#4A90E2] text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4A90E2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#4A90E2]"></span>
</span>
                Accepting early access for therapists
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[#0F172A] mb-6 leading-[1.1]">
                Your practice,<br/>
<span className="text-[#94A3B8]">anchored in calm.</span>
</h1>
<p className="text-lg md:text-xl text-[#64748B] font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Lifejacket is the quiet operating system for modern mental health professionals. We automate the noise so you can focus on the human connection.
            </p>

<form className="max-w-md mx-auto relative group reveal delay-200">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#4A90E2] to-[#E0E7FF] rounded-full opacity-40 group-hover:opacity-100 transition duration-500 blur"></div>
<div className="relative flex items-center bg-white rounded-full p-1.5 shadow-sm ring-1 ring-[#0F172A]/5">
<div className="pl-4 text-[#94A3B8]">
<span className="iconify" data-icon="lucide:mail" data-width="18"></span>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-[#0F172A] placeholder-[#94A3B8] text-sm h-10 px-3 outline-none" placeholder="Enter your work email" type="email"/>
<button className="px-5 py-2.5 bg-[#4A90E2] hover:bg-[#3B7ECC] text-white text-sm font-medium rounded-full transition-colors flex items-center gap-2" type="button">
<span>Join Waitlist</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
<p className="mt-3 text-xs text-[#94A3B8] font-medium">Restricted to licensed practitioners.</p>
</form>
</div>

<div className="mt-24 relative max-w-5xl mx-auto h-64 md:h-96 reveal delay-300 hidden md:block">

<div className="absolute left-10 top-10 bg-white/70 backdrop-blur-xl border border-[#E2E8F0] p-5 rounded-2xl shadow-xl shadow-[#4A90E2]/5 w-64 animate-float transform rotate-[-3deg]">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-[#94A3B8] uppercase tracking-wider">Next Session</span>
<span className="h-2 w-2 rounded-full bg-[#4A90E2]"></span>
</div>
<div className="flex items-center gap-3 mb-3">
<div className="h-10 w-10 rounded-full bg-[#F7F9FC] border border-[#E2E8F0] flex items-center justify-center text-[#64748B] font-medium text-sm">JS</div>
<div>
<p className="text-sm font-medium text-[#0F172A]">Jordan S.</p>
<p className="text-xs text-[#94A3B8]">Video call • 2:00 PM</p>
</div>
</div>

<div className="mt-2">
<div className="flex justify-between text-[10px] text-[#94A3B8] mb-1">
<span>Anxiety Level</span>
<span>Low</span>
</div>
<div className="h-1.5 w-full bg-[#F7F9FC] rounded-full overflow-hidden">
<div className="h-full bg-[#4A90E2] w-1/3 rounded-full"></div>
</div>
</div>
</div>

<div className="absolute right-10 top-0 bg-white/80 backdrop-blur-xl border border-[#E2E8F0] p-6 rounded-2xl shadow-xl shadow-[#4A90E2]/5 w-72 animate-float-delayed transform rotate-[2deg]">
<div className="flex items-center gap-2 mb-3 text-[#64748B]">
<span className="iconify" data-icon="lucide:mic" data-width="16"></span>
<span className="text-xs font-medium">Transcription Active</span>
</div>
<div className="space-y-2">
<div className="h-2 bg-[#F7F9FC] rounded-full w-3/4"></div>
<div className="h-2 bg-[#F7F9FC] rounded-full w-full"></div>
<div className="h-2 bg-[#F7F9FC] rounded-full w-5/6"></div>
</div>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 rounded-md bg-[#F7F9FC] text-[#4A90E2] text-[10px] font-medium border border-[#E2E8F0]">Coping Strat</span>
<span className="px-2 py-1 rounded-md bg-[#F7F9FC] text-[#64748B] text-[10px] font-medium border border-[#E2E8F0]">Progress</span>
</div>
</div>

<div className="absolute left-1/2 top-20 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-[#E2E8F0] flex items-center gap-1 z-20">
<button className="px-4 py-1.5 rounded-full bg-[#0F172A] text-white text-xs font-medium shadow-sm">Provider View</button>
<button className="px-4 py-1.5 rounded-full text-[#64748B] hover:bg-[#F7F9FC] text-xs font-medium transition-colors">Client View</button>
</div>
</div>
</main>

<section className="py-12 border-y border-[#E2E8F0] bg-[#F7F9FC]">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-[#94A3B8] mb-8">TRUSTED BY CLINICIANS FROM</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale mix-blend-multiply">

<span className="text-xl font-semibold tracking-tighter text-[#0F172A] flex items-center gap-1"><span className="iconify" data-icon="lucide:hexagon" data-width="20"></span> Alma</span>
<span className="text-xl font-semibold tracking-tighter text-[#0F172A] flex items-center gap-1"><span className="iconify" data-icon="lucide:triangle" data-width="20"></span> Headway</span>
<span className="text-xl font-semibold tracking-tighter text-[#0F172A] flex items-center gap-1"><span className="iconify" data-icon="lucide:circle" data-width="20"></span> Talkspace</span>
<span className="text-xl font-semibold tracking-tighter text-[#0F172A] flex items-center gap-1"><span className="iconify" data-icon="lucide:square" data-width="20"></span> BetterHelp</span>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-[#F7F9FC]" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:mb-24 max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0F172A] mb-6">Designed to prevent burnout, not cause it.</h2>
<p className="text-lg text-[#64748B] font-light leading-relaxed">Most practice management software feels like a tax audit. Lifejacket feels like a deep breath. We handle the scheduling, billing, and notes so you can stay present.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#4A90E2] hover:shadow-xl hover:shadow-[#4A90E2]/10 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-[#F7F9FC] text-[#4A90E2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">AI-Assisted Notes</h3>
<p className="text-[#64748B] font-light text-sm leading-relaxed">Turn your rough shorthand into compliant, SOAP-format clinical notes in seconds. Secure and private by default.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#4A90E2] hover:shadow-xl hover:shadow-[#4A90E2]/10 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-[#F7F9FC] text-[#4A90E2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:calendar-clock" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">Fluid Scheduling</h3>
<p className="text-[#64748B] font-light text-sm leading-relaxed">Smart buffers between sessions prevent overrun. Calendar sync that actually works and respects your downtime.</p>
</div>

<div className="group p-8 rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#4A90E2] hover:shadow-xl hover:shadow-[#4A90E2]/10 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-[#F7F9FC] text-[#4A90E2] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-[#0F172A] mb-3 tracking-tight">HIPAA Compliant</h3>
<p className="text-[#64748B] font-light text-sm leading-relaxed">Bank-grade encryption for all client data. We worry about compliance so you don't have to lose sleep.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-[#E2E8F0] overflow-hidden">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 order-2 md:order-1">

<div className="bg-[#F7F9FC] p-8 rounded-[2rem] border border-[#E2E8F0] shadow-2xl shadow-[#0F172A]/5 relative">
<div className="flex items-center justify-between mb-8">
<div>
<h4 className="text-[#0F172A] font-semibold text-lg">Weekly Availability</h4>
<p className="text-[#94A3B8] text-xs">Set your boundaries.</p>
</div>
<div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-2 border-[#E2E8F0] appearance-none cursor-pointer transition-all duration-300" id="toggle" name="toggle" type="checkbox" />
<label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#94A3B8] cursor-pointer" htmlFor="toggle"></label>
</input></div>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4">
<div className="w-12 text-sm font-medium text-[#64748B]">Mon</div>
<div className="flex-1 bg-white rounded-lg h-10 border border-[#E2E8F0] flex items-center px-3 gap-2 relative overflow-hidden group hover:border-[#4A90E2]/50 transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4A90E2]"></div>
<span className="text-xs text-[#0F172A] font-medium">09:00 AM</span>
<span className="text-[#E2E8F0]">-</span>
<span className="text-xs text-[#0F172A] font-medium">05:00 PM</span>
<span className="ml-auto opacity-0 group-hover:opacity-100 text-[#4A90E2]"><span className="iconify" data-icon="lucide:pencil" data-width="12"></span></span>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 text-sm font-medium text-[#64748B]">Tue</div>
<div className="flex-1 bg-white rounded-lg h-10 border border-[#E2E8F0] flex items-center px-3 gap-2 relative overflow-hidden group hover:border-[#4A90E2]/50 transition-colors cursor-pointer">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4A90E2]"></div>
<span className="text-xs text-[#0F172A] font-medium">09:00 AM</span>
<span className="text-[#E2E8F0]">-</span>
<span className="text-xs text-[#0F172A] font-medium">02:00 PM</span>
</div>
</div>

<div className="flex items-center gap-4 opacity-50">
<div className="w-12 text-sm font-medium text-[#64748B]">Wed</div>
<div className="flex-1 border border-[#E2E8F0] border-dashed rounded-lg h-10 flex items-center justify-center">
<span className="text-xs text-[#94A3B8]">No Availability</span>
</div>
</div>
</div>

<div className="absolute -right-6 -bottom-6 bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 animate-float-delayed">
<div className="bg-[#4A90E2] rounded-full p-1">
<span className="iconify text-white" data-icon="lucide:check" data-width="12"></span>
</div>
<div className="text-xs">
<p className="font-medium">Synced with Google Cal</p>
<p className="text-[#94A3B8]">Just now</p>
</div>
</div>
</div>
</div>
<div className="w-full md:w-1/2 order-1 md:order-2">
<span className="text-[#4A90E2] font-semibold tracking-wide text-xs uppercase mb-2 block">Workflow</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0F172A] mb-6">Boundaries built in.</h2>
<p className="text-[#64748B] font-light leading-relaxed mb-8">
                    Therapy is emotional labor. Your tools shouldn't add to the load. Lifejacket allows you to set strict availability boundaries, buffer times, and automate intake forms so you only work when you're at your best.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="iconify text-[#4A90E2] mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-[#64748B] text-sm">Automatic buffer zones between sessions.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#4A90E2] mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-[#64748B] text-sm">One-click referrals and intake processing.</span>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-[#4A90E2] mt-1" data-icon="lucide:check-circle-2" data-width="18"></span>
<span className="text-[#64748B] text-sm">Integrated payment processing with no hidden fees.</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="mb-8 flex justify-center">
<span className="iconify text-[#4A90E2]" data-icon="lucide:quote" data-width="40"></span>
</div>
<blockquote className="text-2xl md:text-4xl font-medium leading-normal tracking-tight mb-10">
                "Finally, software that feels like it respects the sanctity of the therapy room. It’s quiet, it’s fast, and it just gets out of the way."
            </blockquote>
<div className="flex items-center justify-center gap-4">
<div className="h-12 w-12 bg-[#1E293B] rounded-full overflow-hidden border-2 border-[#4A90E2]">
<img alt="Dr. Sarah Chen" className="h-full w-full object-cover" src="https://api.dicebear.com/9.x/avataaars/svg?seed=Felix&amp;backgroundColor=93C5FD"/>
</div>
<div className="text-left">
<div className="font-medium text-white">Dr. Sarah Chen, PsyD</div>
<div className="text-sm text-[#94A3B8]">Clinical Psychologist</div>
</div>
</div>
</div>
</section>

<footer className="pt-24 pb-12 px-6 border-t border-[#E2E8F0] bg-white" id="join">
<div className="max-w-6xl mx-auto">
<div className="bg-[#F7F9FC] rounded-[2.5rem] p-12 md:p-20 text-center border border-[#E2E8F0] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#4A90E2]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#0F172A] mb-6 relative z-10">Ready to anchor your practice?</h2>
<p className="text-[#64748B] mb-10 max-w-lg mx-auto relative z-10 font-light">Join 2,000+ therapists on the waitlist for early access. We launch in Fall 2024.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<input className="px-6 py-3 rounded-full bg-white border border-[#E2E8F0] focus:outline-none focus:border-[#4A90E2] focus:ring-2 focus:ring-[#4A90E2]/20 transition-all w-full sm:w-80 text-sm placeholder-[#94A3B8]" placeholder="email@practice.com" type="email"/>
<button className="px-8 py-3 rounded-full bg-[#4A90E2] text-white font-medium hover:bg-[#3B7ECC] transition-all shadow-lg shadow-[#4A90E2]/20 hover:shadow-xl hover:-translate-y-1">
                        Get Early Access
                    </button>
</div>
<p className="mt-4 text-xs text-[#94A3B8]">No credit card required. Unsubscribe anytime.</p>
</div>
<div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-[#64748B]">
<div className="flex items-center gap-2">
<span className="iconify text-[#4A90E2]" data-icon="lucide:life-buoy" data-width="20"></span>
<span className="font-semibold text-[#0F172A] tracking-tight">lifejacket</span>
<span className="mx-2 text-[#E2E8F0]">|</span>
<span>© 2024 Lifejacket Inc.</span>
</div>
<div className="flex gap-8">
<a className="hover:text-[#4A90E2] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#4A90E2] transition-colors" href="#">Terms</a>
<a className="hover:text-[#4A90E2] transition-colors" href="#">Twitter</a>
<a className="hover:text-[#4A90E2] transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
