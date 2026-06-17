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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple interactive demo logic
        document.querySelectorAll('input[type="checkbox"]').forEach(box => {
            box.parentElement.addEventListener('click', () => {
                box.checked = !box.checked;
                if(box.checked) {
                    box.parentElement.classList.add('border-[#D4A843]', 'text-[#1B3A4B]', 'bg-[#D4A843]/5');
                    box.parentElement.classList.remove('border-slate-200', 'text-slate-600');
                } else {
                    box.parentElement.classList.remove('border-[#D4A843]', 'text-[#1B3A4B]', 'bg-[#D4A843]/5');
                    box.parentElement.classList.add('border-slate-200', 'text-slate-600');
                }
            });
        });

        // Quiz Selection Logic
        document.querySelectorAll('input[name="q1"]').forEach(radio => {
            radio.parentElement.addEventListener('click', () => {
                // reset all in group
                document.querySelectorAll('input[name="q1"]').forEach(r => {
                    r.parentElement.classList.remove('border-[#D4A843]', 'bg-[#D4A843]/5');
                    r.parentElement.querySelector('div div').classList.remove('opacity-100');
                    r.parentElement.querySelector('div div').classList.add('opacity-0');
                    r.parentElement.querySelector('div').classList.remove('border-[#D4A843]');
                });
                
                // set active
                radio.checked = true;
                radio.parentElement.classList.add('border-[#D4A843]', 'bg-[#D4A843]/5');
                radio.parentElement.querySelector('div div').classList.remove('opacity-0');
                radio.parentElement.querySelector('div div').classList.add('opacity-100');
                radio.parentElement.querySelector('div').classList.add('border-[#D4A843]');
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
      

<div className="fixed top-24 right-6 z-[60] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
<div className="w-full max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B3A4B] to-[#2C5F7C] flex items-center justify-center text-[#D4A843] shadow-lg shadow-[#1B3A4B]/20 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:test-tube-linear" width="24"></iconify-icon>
</div>
<div>
<div className="serif font-bold text-lg text-[#1B3A4B] leading-none">STEMM Catalyst</div>
<div className="text-[0.65rem] uppercase tracking-widest font-medium text-slate-500 mt-1">Coach Barbara Harrington</div>
</div>
</a>

<div className="hidden lg:flex items-center gap-1 bg-slate-50/80 p-1.5 rounded-full border border-slate-200/60">
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#about">About</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#services">Services</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#roadmap">Your Path</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#portal">Portal</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#quiz">Quiz</a>
<a className="px-5 py-2 text-sm font-medium text-slate-600 hover:text-[#1B3A4B] hover:bg-white rounded-full transition-all" href="#testimonials">Results</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4A843] hover:bg-[#c49a30] text-white text-sm font-semibold shadow-lg shadow-[#D4A843]/20 transition-all transform hover:-translate-y-0.5" href="#book">
                    Book a Call
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="lg:hidden text-[#1B3A4B]" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl lg:hidden" id="mobile-menu">
<div className="flex flex-col p-4">
<a className="py-3 px-4 text-slate-600 font-medium border-b border-slate-100 hover:bg-slate-50" href="#about">About</a>
<a className="py-3 px-4 text-slate-600 font-medium border-b border-slate-100 hover:bg-slate-50" href="#services">Services</a>
<a className="py-3 px-4 text-slate-600 font-medium border-b border-slate-100 hover:bg-slate-50" href="#roadmap">Your Path</a>
<a className="py-3 px-4 text-slate-600 font-medium border-b border-slate-100 hover:bg-slate-50" href="#portal">Client Portal</a>
<a className="py-3 px-4 text-slate-600 font-medium border-b border-slate-100 hover:bg-slate-50" href="#quiz">Readiness Quiz</a>
<a className="mt-4 w-full py-3 rounded-lg bg-[#D4A843] text-white text-center font-semibold" href="#book">Book a Call</a>
</div>
</div>
</nav>

<section className="relative pt-36 pb-20 w-full overflow-hidden bg-gradient-to-br from-[#F7F9FB] via-[#E3EEF3] to-[#F0E6CE]" id="home">

<div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#D4A843]/10 to-transparent blur-3xl pointer-events-none"></div>
<div className="w-full max-w-[1400px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-xl">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D4A843]/10 text-[#9A7B2E] text-xs font-bold uppercase tracking-wider mb-8 border border-[#D4A843]/20">
<iconify-icon icon="solar:medal-ribbon-linear" width="16"></iconify-icon>
                    VEX STEM Hall of Fame Recipient
                </div>
<h1 className="text-5xl lg:text-6xl font-bold text-[#1B3A4B] leading-[1.1] mb-6">
                    From Chemist to <span className="text-[#D4A843] italic">Sought‑After Consultant</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Neuroscience‑backed coaching for women in STEMM 45+ who are done feeling trapped in corporate. Build a consulting career full of meaning, impact, and legacy.
                </p>
<div className="flex flex-wrap gap-4 mb-16">
<a className="px-8 py-3.5 rounded-full bg-[#1B3A4B] text-white font-semibold hover:bg-[#2C5F7C] transition-all shadow-lg shadow-[#1B3A4B]/20 flex items-center gap-2" href="#quiz">
                        Take Readiness Quiz
                        <iconify-icon icon="solar:clipboard-check-linear" width="20"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-full bg-transparent border-2 border-[#1B3A4B] text-[#1B3A4B] font-semibold hover:bg-[#1B3A4B] hover:text-white transition-all" href="#book">
                        Book Strategy Call
                    </a>
</div>
<div className="flex gap-12 pt-8 border-t border-[#1B3A4B]/10">
<div>
<div className="serif text-3xl font-bold text-[#1B3A4B]">15</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Years in STEMM</div>
</div>
<div>
<div className="serif text-3xl font-bold text-[#1B3A4B]">500+</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Women Coached</div>
</div>
<div>
<div className="serif text-3xl font-bold text-[#1B3A4B]">92%</div>
<div className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wide">Goal Success</div>
</div>
</div>
</div>

<div className="hidden lg:flex justify-center items-center relative h-[600px]">

<div className="absolute top-10 left-10 w-[380px] bg-white rounded-2xl shadow-2xl p-8 border-l-4 border-[#D4A843] z-20">
<h3 className="serif text-xl font-bold text-[#1B3A4B] mb-6 flex items-center gap-2">
<iconify-icon className="text-[#D4A843]" icon="solar:map-point-linear"></iconify-icon>
                        Your LEGO Roadmap
                    </h3>
<div className="space-y-0">
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="w-7 h-7 rounded-full bg-[#27AE60] text-white flex items-center justify-center text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-500 line-through">Identity Legacy Mapping</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="w-7 h-7 rounded-full bg-[#27AE60] text-white flex items-center justify-center text-xs">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-500 line-through">Niche Offer Design</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="w-7 h-7 rounded-full bg-[#D4A843] text-white flex items-center justify-center text-xs font-bold">3</div>
<span className="text-sm font-semibold text-[#1B3A4B]">Messaging Positioning</span>
</div>
<div className="flex items-center gap-3 py-3 border-b border-slate-100">
<div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold">4</div>
<span className="text-sm text-slate-500">Client Acquisition Sprints</span>
</div>
<div className="flex items-center gap-3 py-3">
<div className="w-7 h-7 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center text-xs font-bold">5</div>
<span className="text-sm text-slate-500">Corporate Exit Strategy</span>
</div>
</div>
</div>

<div className="absolute bottom-10 right-0 w-[280px] bg-[#1B3A4B] text-white rounded-2xl shadow-xl p-6 z-30">
<h4 className="text-sm font-semibold mb-6 flex items-center gap-2 text-[#F0D78C]">
<iconify-icon icon="solar:atom-linear"></iconify-icon>
                        Neuro Success Profile
                    </h4>
<div className="space-y-4">
<div>
<div className="text-xs text-slate-300 mb-1.5 flex justify-between">
<span>Confidence Index</span>
<span>78%</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#D4A843] w-[78%]"></div>
</div>
</div>
<div>
<div className="text-xs text-slate-300 mb-1.5 flex justify-between">
<span>Decision Clarity</span>
<span>65%</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#27AE60] w-[65%]"></div>
</div>
</div>
<div>
<div className="text-xs text-slate-300 mb-1.5 flex justify-between">
<span>Visibility Readiness</span>
<span>52%</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#5DADE2] w-[52%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white w-full" id="about">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center md:text-left mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Meet Your Coach</span>
<h2 className="serif text-4xl lg:text-5xl font-bold text-[#1B3A4B]">The Right Catalyst Changes Everything</h2>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-start">
<div className="space-y-6 text-lg text-slate-600 leading-relaxed">
<p>
                        As a chemist, I’ve always seen people the way I see chemical reactions—predictable patterns that can be shifted with the right catalyst.
                    </p>
<p>
                        In my career, I wasn’t just solving problems in the lab or the chemical plant; I was breaking down barriers with diverse teams, simplifying complex challenges, and creating solutions that drove productivity.
                    </p>
<div className="pl-6 border-l-4 border-[#D4A843] bg-[#D4A843]/5 py-6 pr-6 rounded-r-lg italic text-[#1B3A4B]">
                        One day, the head of a division called me his <strong>“indispensable and trusted advisor”</strong> because my insights didn’t just fix problems—they empowered people to change their lives. That’s when I knew I’d found my true calling.
                    </div>
<p>
                        As your coach, I’ll help you cut through the noise, tackle what’s holding you back, and build a step‑by‑step plan as simple as LEGOs to crush your goals using neuroscience.
                    </p>
</div>
<div className="grid gap-4">

<div className="flex gap-5 p-5 bg-[#F7F9FB] rounded-xl border border-slate-200 hover:border-[#D4A843]/50 transition-colors">
<div className="w-12 h-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#D4A843] border border-slate-100">
<iconify-icon icon="solar:cup-star-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-bold text-[#1B3A4B]">VEX STEM Hall of Fame</div>
<div className="text-sm text-slate-500 mt-1">Inspirational All‑Star Award, 2020 — leadership in robotics education.</div>
</div>
</div>
<div className="flex gap-5 p-5 bg-[#F7F9FB] rounded-xl border border-slate-200 hover:border-[#D4A843]/50 transition-colors">
<div className="w-12 h-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#D4A843] border border-slate-100">
<iconify-icon icon="solar:book-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-bold text-[#1B3A4B]">Published Author</div>
<div className="text-sm text-slate-500 mt-1">Thought leader on neuroscience‑based coaching and women in STEMM.</div>
</div>
</div>
<div className="flex gap-5 p-5 bg-[#F7F9FB] rounded-xl border border-slate-200 hover:border-[#D4A843]/50 transition-colors">
<div className="w-12 h-12 shrink-0 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#D4A843] border border-slate-100">
<iconify-icon icon="solar:microphone-2-linear" width="24"></iconify-icon>
</div>
<div>
<div className="font-bold text-[#1B3A4B]">International Speaker</div>
<div className="text-sm text-slate-500 mt-1">Inspiring women across STEM, STEAM, and STREAM fields globally.</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FB] w-full" id="services">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Services</span>
<h2 className="serif text-4xl lg:text-5xl font-bold text-[#1B3A4B] mb-6">Your Bridge from Corporate to Consulting</h2>
<p className="text-slate-500 text-lg">Every program is layered with the Neuroscience of how the brain allows success—so you don’t just plan, you execute.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#D4A843]/10 text-[#D4A843] flex items-center justify-center text-3xl mb-6 mx-auto">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="serif text-2xl font-bold text-[#1B3A4B] text-center mb-4">Private 1:1 Coaching</h3>
<p className="text-slate-500 text-center text-sm mb-8">Deep, personalized sessions focused on your unique transition path from lab to leadership.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Neuroscience Success Profile
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Custom consulting niche design
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Weekly action plans (LEGO steps)
                        </li>
</ul>
<a className="flex w-full justify-center items-center py-3 rounded-full bg-[#1B3A4B] text-white text-sm font-semibold hover:bg-[#2C5F7C] transition-colors" href="#book">Apply Now</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#1B3A4B]/10 text-[#1B3A4B] flex items-center justify-center text-3xl mb-6 mx-auto">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="serif text-2xl font-bold text-[#1B3A4B] text-center mb-4">Small Group Coaching</h3>
<p className="text-slate-500 text-center text-sm mb-8">Collaborative cohort of STEMM women building consulting careers together.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            6–8 women per cohort
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Peer‑to‑peer mastermind
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Structured 12‑week curriculum
                        </li>
</ul>
<a className="flex w-full justify-center items-center py-3 rounded-full bg-[#D4A843] text-white text-sm font-semibold hover:bg-[#c49a30] transition-colors" href="#book">Join Waitlist</a>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-16 h-16 rounded-2xl bg-[#27AE60]/10 text-[#27AE60] flex items-center justify-center text-3xl mb-6 mx-auto">
<iconify-icon icon="solar:presentation-graph-linear"></iconify-icon>
</div>
<h3 className="serif text-2xl font-bold text-[#1B3A4B] text-center mb-4">Workshops &amp; Intensives</h3>
<p className="text-slate-500 text-center text-sm mb-8">Focused sessions on skills like sales, positioning, visibility, and exit planning.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Half‑day or full‑day formats
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Marketing for consultants
                        </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#27AE60] mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                            Business development toolkit
                        </li>
</ul>
<a className="flex w-full justify-center items-center py-3 rounded-full bg-white border-2 border-[#D4A843] text-[#D4A843] text-sm font-semibold hover:bg-[#D4A843] hover:text-white transition-colors" href="#book">Learn More</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white w-full" id="roadmap">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">The Journey</span>
<h2 className="serif text-4xl lg:text-5xl font-bold text-[#1B3A4B] mb-6">Your LEGO‑Step Roadmap</h2>
<p className="text-slate-500 text-lg">Each stage is designed like LEGO blocks—simple, stackable, and powerful.</p>
</div>
<div className="max-w-4xl mx-auto relative roadmap-line pt-4">

<div className="relative pl-24 pb-12 group">
<div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-white border-[3px] border-[#D4A843] flex items-center justify-center text-2xl font-bold text-[#1B3A4B] z-10 shadow-[0_0_0_8px_rgba(212,168,67,0.1)] group-hover:bg-[#D4A843] group-hover:text-white transition-colors">1</div>
<div className="bg-[#F7F9FB] border border-slate-200 p-8 rounded-2xl group-hover:shadow-lg transition-shadow">
<h3 className="serif text-2xl font-bold text-[#1B3A4B] mb-3">Identity &amp; Legacy</h3>
<p className="text-slate-600 mb-4">Shift from corporate employee to consulting authority. Define your legacy statement and align your values with your new direction.</p>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3A4B]/5 text-[#2C5F7C] text-xs font-semibold">
<iconify-icon icon="solar:atom-linear"></iconify-icon>
                            Neural Pathway: Identity‑Based Habits
                        </div>
</div>
</div>

<div className="relative pl-24 pb-12 group">
<div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-white border-[3px] border-[#D4A843] flex items-center justify-center text-2xl font-bold text-[#1B3A4B] z-10 shadow-[0_0_0_8px_rgba(212,168,67,0.1)] group-hover:bg-[#D4A843] group-hover:text-white transition-colors">2</div>
<div className="bg-[#F7F9FB] border border-slate-200 p-8 rounded-2xl group-hover:shadow-lg transition-shadow">
<h3 className="serif text-2xl font-bold text-[#1B3A4B] mb-3">Niche &amp; Offer Design</h3>
<p className="text-slate-600 mb-4">Pinpoint the intersection of your expertise, market demand, and passion. Build an irresistible consulting offer.</p>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3A4B]/5 text-[#2C5F7C] text-xs font-semibold">
<iconify-icon icon="solar:atom-linear"></iconify-icon>
                            Neural Pathway: Decision Confidence
                        </div>
</div>
</div>

<div className="relative pl-24 pb-12 group">
<div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-white border-[3px] border-[#D4A843] flex items-center justify-center text-2xl font-bold text-[#1B3A4B] z-10 shadow-[0_0_0_8px_rgba(212,168,67,0.1)] group-hover:bg-[#D4A843] group-hover:text-white transition-colors">3</div>
<div className="bg-[#F7F9FB] border border-slate-200 p-8 rounded-2xl group-hover:shadow-lg transition-shadow">
<h3 className="serif text-2xl font-bold text-[#1B3A4B] mb-3">Messaging &amp; Positioning</h3>
<p className="text-slate-600 mb-4">Craft a magnetic message that attracts ideal clients. LinkedIn, speaking, and thought‑leadership positioning.</p>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1B3A4B]/5 text-[#2C5F7C] text-xs font-semibold">
<iconify-icon icon="solar:atom-linear"></iconify-icon>
                            Neural Pathway: Cognitive Load Reduction
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FB] w-full" id="portal">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Client Experience</span>
<h2 className="serif text-4xl lg:text-5xl font-bold text-[#1B3A4B] mb-6">Your Personal Coaching Dashboard</h2>
<p className="text-slate-500 text-lg">Track your progress, complete assignments, book sessions, and see your neuroscience‑based growth—all in one place.</p>
</div>
<div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">

<div className="bg-[#1B3A4B] p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
<h3 className="text-white font-medium flex items-center gap-2">
<iconify-icon className="text-[#D4A843]" icon="solar:widget-linear"></iconify-icon>
                        Welcome back, Dr. Sarah Mitchell
                    </h3>
<div className="flex gap-1 bg-[#152e3d] p-1 rounded-lg">
<button className="px-4 py-1.5 rounded text-xs font-medium bg-[#D4A843] text-[#1B3A4B]">Dashboard</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white">Sessions</button>
<button className="px-4 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white">Action Plan</button>
</div>
</div>

<div className="p-8">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-5 rounded-xl bg-[#F7F9FB] text-center">
<div className="serif text-3xl font-bold text-[#1B3A4B]">8</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Sessions Done</div>
</div>
<div className="p-5 rounded-xl bg-[#F7F9FB] text-center">
<div className="serif text-3xl font-bold text-[#27AE60]">72%</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Roadmap Progress</div>
</div>
<div className="p-5 rounded-xl bg-[#F7F9FB] text-center">
<div className="serif text-3xl font-bold text-[#D4A843]">4</div>
<div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">Actions This Week</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-slate-200 hover:border-[#D4A843] cursor-pointer transition-colors flex items-center gap-4 bg-white group">
<div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 text-[#D4A843] flex items-center justify-center text-xl">
<iconify-icon icon="solar:calendar-add-linear"></iconify-icon>
</div>
<div>
<h5 className="text-[#1B3A4B] font-semibold group-hover:text-[#D4A843] transition-colors">Book Next Session</h5>
<p className="text-xs text-slate-500">Schedule your 1:1 with Barbara.</p>
</div>
</div>
<div className="p-4 rounded-xl border border-slate-200 hover:border-[#27AE60] cursor-pointer transition-colors flex items-center gap-4 bg-white group">
<div className="w-10 h-10 rounded-lg bg-[#27AE60]/10 text-[#27AE60] flex items-center justify-center text-xl">
<iconify-icon icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<div>
<h5 className="text-[#1B3A4B] font-semibold group-hover:text-[#27AE60] transition-colors">This Week's Actions</h5>
<p className="text-xs text-slate-500">4 tasks due, 2 completed.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white w-full" id="quiz">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Self‑Assessment</span>
<h2 className="serif text-4xl font-bold text-[#1B3A4B] mb-4">Consulting Readiness Quiz</h2>
<p className="text-slate-500">Discover where you stand on your path from corporate to consulting. Takes about 3 minutes.</p>
</div>
<div className="max-w-2xl mx-auto p-10 rounded-2xl shadow-xl border border-slate-100 bg-white">
<div className="h-1.5 w-full bg-slate-100 rounded-full mb-8 overflow-hidden">
<div className="h-full bg-[#D4A843] w-1/5 rounded-full"></div>
</div>
<div className="text-xs font-bold text-[#D4A843] uppercase tracking-wide mb-2">Question 1 of 5</div>
<h3 className="serif text-2xl font-bold text-[#1B3A4B] mb-8">How clear are you on the consulting niche you want to serve?</h3>
<div className="space-y-3">
<label className="flex items-center gap-4 p-4 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-[#D4A843] hover:bg-[#D4A843]/5 transition-all group">
<div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-[#D4A843] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-slate-700 font-medium">I have no idea yet.</span>
<input className="hidden" name="q1" type="radio"/>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-[#D4A843] hover:bg-[#D4A843]/5 transition-all group">
<div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-[#D4A843] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-slate-700 font-medium">I have a few ideas but feel scattered.</span>
<input className="hidden" name="q1" type="radio"/>
</label>
<label className="flex items-center gap-4 p-4 rounded-lg border-2 border-slate-200 cursor-pointer hover:border-[#D4A843] hover:bg-[#D4A843]/5 transition-all group">
<div className="w-5 h-5 rounded-full border-2 border-slate-300 group-hover:border-[#D4A843] flex items-center justify-center">
<div className="w-2.5 h-2.5 rounded-full bg-[#D4A843] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<span className="text-slate-700 font-medium">I’m crystal clear and already speaking to it.</span>
<input className="hidden" name="q1" type="radio"/>
</label>
</div>
<div className="flex justify-between mt-8">
<button className="px-6 py-2 text-sm font-medium text-slate-500 hover:text-[#1B3A4B]">Back</button>
<button className="px-8 py-2.5 rounded-full bg-[#1B3A4B] text-white text-sm font-semibold hover:bg-[#2C5F7C] transition-colors">Next Question</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F7F9FB] w-full">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="max-w-2xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-slate-200">
<div className="flex items-center gap-3 mb-8">
<iconify-icon className="text-[#D4A843] text-2xl" icon="solar:clipboard-check-linear"></iconify-icon>
<h3 className="serif text-2xl font-bold text-[#1B3A4B]">Weekly Check‑In Demo</h3>
</div>
<div className="space-y-6">
<div>
<label className="block text-sm font-semibold text-[#1B3A4B] mb-2">What did you accomplish this week?</label>
<textarea className="w-full p-3 rounded-lg border border-slate-300 focus:border-[#D4A843] focus:ring-1 focus:ring-[#D4A843] outline-none transition-all text-sm" placeholder="Share your wins, big or small..." rows="3"></textarea>
</div>
<div>
<label className="block text-sm font-semibold text-[#1B3A4B] mb-4">Energy Level (1–10)</label>
<div className="flex items-center gap-4">
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#D4A843]" max="10" min="1" oninput="this.nextElementSibling.innerText = this.value" type="range" value="7"/>
<span className="serif text-2xl font-bold text-[#1B3A4B] w-8 text-center">7</span>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-[#1B3A4B] mb-3">Neuroscience Patterns Detected:</label>
<div className="flex flex-wrap gap-2">
<label className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 cursor-pointer hover:border-[#D4A843] hover:text-[#1B3A4B] hover:bg-[#D4A843]/5 select-none transition-all flex items-center gap-2">
<input className="hidden" type="checkbox"/>
                                Perfectionism
                            </label>
<label className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 cursor-pointer hover:border-[#D4A843] hover:text-[#1B3A4B] hover:bg-[#D4A843]/5 select-none transition-all flex items-center gap-2">
<input className="hidden" type="checkbox"/>
                                Imposter Syndrome
                            </label>
<label className="px-4 py-2 rounded-full border border-slate-200 text-sm text-slate-600 cursor-pointer hover:border-[#D4A843] hover:text-[#1B3A4B] hover:bg-[#D4A843]/5 select-none transition-all flex items-center gap-2">
<input className="hidden" type="checkbox"/>
                                Decision Fatigue
                            </label>
</div>
</div>
<button className="w-full py-3 rounded-lg bg-[#1B3A4B] text-white font-semibold hover:bg-[#2C5F7C] transition-colors flex items-center justify-center gap-2">
                        Submit Check‑In
                        <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white w-full" id="testimonials">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center mb-16">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Results</span>
<h2 className="serif text-4xl font-bold text-[#1B3A4B]">From Frustrated to Fulfilled</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 bg-[#F7F9FB] rounded-2xl border border-slate-100">
<div className="flex text-[#D4A843] gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                        "Barbara helped me see patterns I was blind to. The neuroscience approach made everything click—I launched my consulting practice in 90 days and landed my first $15K contract."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1B3A4B] text-white flex items-center justify-center text-xs font-bold">SM</div>
<div>
<div className="font-bold text-[#1B3A4B] text-sm">Dr. Sarah M.</div>
<div className="text-[0.7rem] text-slate-500">Pharma Chemist → Consultant</div>
</div>
</div>
</div>

<div className="p-8 bg-[#F7F9FB] rounded-2xl border border-slate-100">
<div className="flex text-[#D4A843] gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                        "At 52, I thought it was too late. Barbara’s LEGO‑step approach broke it down so simply that I stopped overthinking and started doing. Best investment I’ve ever made."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1B3A4B] text-white flex items-center justify-center text-xs font-bold">KW</div>
<div>
<div className="font-bold text-[#1B3A4B] text-sm">Karen W.</div>
<div className="text-[0.7rem] text-slate-500">Lab Director → STEM Ed.</div>
</div>
</div>
</div>

<div className="p-8 bg-[#F7F9FB] rounded-2xl border border-slate-100">
<div className="flex text-[#D4A843] gap-1 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 italic text-sm leading-relaxed mb-6">
                        "The group coaching cohort was transformative. Being surrounded by other women in STEMM who understood my frustrations was priceless."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1B3A4B] text-white flex items-center justify-center text-xs font-bold">LP</div>
<div>
<div className="font-bold text-[#1B3A4B] text-sm">Dr. Lisa P.</div>
<div className="text-[0.7rem] text-slate-500">R&amp;D Manager → Biotech Ops</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-[#1B3A4B] to-[#152e3d] text-white w-full" id="book">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-12">
<span className="text-xs font-bold tracking-[0.2em] text-[#D4A843] uppercase mb-3 block">Ready to Transform?</span>
<h2 className="serif text-4xl font-bold mb-4">Book Your Breakthrough Session</h2>
<p className="text-slate-300">This free 30‑minute strategy call will give you clarity on your next steps—whether or not we work together.</p>
</div>
<form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4" onsubmit="event.preventDefault(); alert('Application simulated!');">
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="First Name" type="text"/>
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="Last Name" type="text"/>
<input className="md:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="Email Address" type="email"/>
<select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843] transition-colors">
<option className="text-slate-900">Life Sciences / Pharma</option>
<option className="text-slate-900">Chemical Engineering</option>
<option className="text-slate-900">Biotech</option>
<option className="text-slate-900">Other STEMM</option>
</select>
<select className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#D4A843] transition-colors">
<option className="text-slate-900">5–10 years Corporate</option>
<option className="text-slate-900">10–20 years Corporate</option>
<option className="text-slate-900">20+ years Corporate</option>
</select>
<textarea className="md:col-span-2 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#D4A843] transition-colors" placeholder="What’s the main outcome you want?" rows="3"></textarea>
<button className="md:col-span-2 py-4 rounded-full bg-[#D4A843] text-[#1B3A4B] font-bold hover:bg-[#c49a30] hover:text-white transition-colors mt-4">
                    Submit Application
                </button>
</form>
</div>
</section>

<footer className="bg-[#1B3A4B] border-t border-white/10 py-16 w-full">
<div className="w-full max-w-[1400px] mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-[#D4A843]" icon="solar:test-tube-linear" width="24"></iconify-icon>
<span className="serif font-bold text-xl text-white">STEMM Catalyst</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                        Coaching, strategy, and neuroscience‑informed tools for women in STEMM who are ready to design their next chapter on their own terms.
                    </p>
</div>
<div>
<h4 className="text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-6">Explore</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors" href="#about">About</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#roadmap">Your Path</a></li>
<li><a className="hover:text-white transition-colors" href="#portal">Client Portal</a></li>
</ul>
</div>
<div>
<h4 className="text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-6">Connect</h4>
<ul className="space-y-3 text-sm text-slate-300">
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:plain-linear"></iconify-icon> LinkedIn</a></li>
<li><a className="hover:text-white transition-colors flex items-center gap-2" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon> Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div>© 2026 STEMM Catalyst · All Rights Reserved</div>
<div className="flex gap-4">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
