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
ivory: '#FDFBF7',
lilac: {
50: '#F5F3FF',
100: '#E6E6FA',
200: '#DCD0FF',
300: '#C4B5FD',
900: '#4C1D95',
},
charcoal: '#1E293B',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif'],
},
animation: {
'blob': 'blob 10s infinite',
'float': 'float 6s ease-in-out infinite',
'breath': 'breath 8s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
breath: {
'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
'50%': { opacity: '0.6', transform: 'scale(1.05)' },
}
}
}
}
}



      // Quiz Logic
      function nextStep(step) {
          document.querySelectorAll('.quiz-step').forEach(el => {
              el.classList.add('hidden');
              el.classList.remove('fade-enter');
          });

          const target = document.querySelector(`.quiz-step[data-step="${step}"]`);
          if(target) {
              target.classList.remove('hidden');
              // Trigger reflow to restart animation
              void target.offsetWidth;
              target.classList.add('fade-enter');
          }
      }

      // ROI Calculator Logic
      function calculateROI() {
          const leads = parseInt(document.getElementById('calc-leads').value) || 0;
          const value = parseInt(document.getElementById('calc-value').value) || 0;
          const closeRate = parseInt(document.getElementById('calc-close').value) || 0;

          document.getElementById('display-leads').textContent = leads;
          document.getElementById('display-value').textContent = '$' + value.toLocaleString();
          document.getElementById('display-close').textContent = closeRate + '%';

          // Conservative Metrics
          const missedCallRecovery = 0.20; // 20%
          const reputationLift = 0.15; // 15%

          const revenueMissed = leads * missedCallRecovery * (closeRate / 100) * value;
          const revenueReputation = leads * reputationLift * (closeRate / 100) * value;
          const totalMonthly = revenueMissed + revenueReputation;
          const totalYearly = totalMonthly * 12;

          document.getElementById('result-missed').textContent = '+$' + Math.round(revenueMissed).toLocaleString();
          document.getElementById('result-reputation').textContent = '+$' + Math.round(revenueReputation).toLocaleString();
          document.getElementById('result-total-mo').textContent = '+$' + Math.round(totalMonthly).toLocaleString() + '/mo';
          document.getElementById('result-total-yr').textContent = '+$' + Math.round(totalYearly).toLocaleString() + '/yr';
      }

      // Initialize Calculator
      calculateROI();
    
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
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-lilac-200/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
<div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/30 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-[20%] w-[60vw] h-[60vw] bg-pink-50/40 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-display font-semibold text-xl tracking-tight text-charcoal flex items-center gap-2 z-50" href="#">
          STANCEXAI
        </a>
<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-slate-500 hover:text-charcoal transition-colors" href="#industries">
            Who We Help
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-charcoal transition-colors" href="#features">
            Features
          </a>
<a className="text-sm font-medium text-slate-500 hover:text-charcoal transition-colors" href="#faq">
            FAQ
          </a>
<a className="group relative px-6 py-2.5 rounded-full bg-charcoal text-white text-sm font-medium overflow-hidden shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all" href="#contact">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-slate-800 to-slate-900 group-hover:scale-105 transition-transform"></div>
<span className="relative flex items-center gap-2">
              Get Started
              <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</span>
</a>
</div>

<button className="md:hidden text-charcoal">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center space-y-8">

<div className="fade-enter inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/60 border border-white/50 backdrop-blur-md shadow-sm mb-4">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lilac-300 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lilac-900"></span>
</span>
<span className="text-xs font-medium text-slate-600 tracking-wide uppercase">
            Accepting New Partners
          </span>
</div>

<h1 className="fade-enter md:text-7xl text-5xl font-display font-medium text-charcoal tracking-tight leading-[1.05] capitalize" style={{animationDelay: '100ms'}}>
          High-Converting Websites
          <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-500 to-slate-400 italic">
            &amp; Automation
          </span>
</h1>

<p className="fade-enter md:text-xl text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light" style={{animationDelay: '200ms'}}>
          We build the ethereal systems Local Consultants and Home Service pros
          need to capture leads and book appointments on autopilot.
        </p>

<div className="fade-enter flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" style={{animationDelay: '300ms'}}>
<a className="px-8 py-4 rounded-full bg-lilac-100/50 border border-lilac-200 text-charcoal hover:bg-lilac-200/50 transition-all font-medium text-sm shadow-sm hover:shadow-md hover:-translate-y-0.5 backdrop-blur-sm flex items-center gap-2" href="#contact">
<iconify-icon className="text-lilac-900" icon="lucide:sparkles"></iconify-icon>
            See Our Work
          </a>
<p className="text-xs text-slate-400 mt-4 sm:mt-0 sm:absolute sm:-bottom-12">
            No contracts. Results driven.
          </p>
</div>
</div>

<div className="fade-enter w-full max-w-6xl mx-auto mt-24" style={{animationDelay: '500ms'}}>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-yellow-400" icon="lucide:star" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">
              Reputation Engine
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
              88% of customers check reviews. We automate requests to build a
              5-star wall of trust around your business.
            </p>
</div>

<div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 group relative overflow-hidden">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-lilac-100/30 rounded-full blur-2xl group-hover:bg-lilac-200/40 transition-colors"></div>
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lilac-50 to-white border border-lilac-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-lilac-900" icon="lucide:message-circle" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">
              Missed Call AI
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
              Never lose a lead to voicemail. Our AI instantly texts back:
              "Sorry I missed you, how can I help?"
            </p>
</div>

<div className="glass-card p-8 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 group">
<div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-500" icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl text-charcoal mb-3">
              24/7 Sales Agent
            </h3>
<p className="text-sm text-slate-500 leading-relaxed font-light">
              Wake up to booked appointments. Your site captures and converts
              traffic while you sleep.
            </p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg font-display font-medium text-slate-700 tracking-tight">
            "One extra client a month covers the cost. The rest is profit."
          </p>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="industries">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-display font-medium text-4xl text-charcoal tracking-tight mb-4">
            Industries We Transform
          </h2>
<p className="text-slate-500 font-light">
            Specialized automation for local market domination.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-[2.5rem] bg-white/30 border border-white/60 hover:bg-white/60 transition-all duration-500">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="lucide:briefcase" width="18"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium text-charcoal mb-2">
              Professional Services
            </h3>
<p className="text-xs text-slate-500 mb-6">
              Accountants, Lawyers, Insurance Agents.
            </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-400" icon="lucide:check" width="14"></iconify-icon>
<span>Build Instant Authority</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-400" icon="lucide:check" width="14"></iconify-icon>
<span>Automated Scheduling</span>
</div>
</div>
</div>

<div className="group relative p-8 rounded-[2.5rem] bg-white/30 border border-white/60 hover:bg-white/60 transition-all duration-500">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6">
<iconify-icon icon="lucide:hammer" width="18"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium text-charcoal mb-2">
              Home Services
            </h3>
<p className="text-xs text-slate-500 mb-6">
              Contractors, HVAC, Landscapers.
            </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-400" icon="lucide:check" width="14"></iconify-icon>
<span>Capture On-Site Leads</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-orange-400" icon="lucide:check" width="14"></iconify-icon>
<span>Review Automation</span>
</div>
</div>
</div>

<div className="group relative p-8 rounded-[2.5rem] bg-white/30 border border-white/60 hover:bg-white/60 transition-all duration-500">
<div className="w-10 h-10 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6">
<iconify-icon icon="lucide:heart-pulse" width="18"></iconify-icon>
</div>
<h3 className="font-display text-lg font-medium text-charcoal mb-2">
              Health &amp; Lifestyle
            </h3>
<p className="text-xs text-slate-500 mb-6">
              Med Spas, Gyms, Therapists.
            </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon>
<span>Fill Your Calendar</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-teal-400" icon="lucide:check" width="14"></iconify-icon>
<span>Client Retargeting</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="features">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-lilac-200 to-blue-100 rounded-[3rem] transform -rotate-6 scale-95 blur-xl opacity-60"></div>
<div className="relative glass-card rounded-[3rem] p-8 md:p-12 overflow-hidden animate-float">

<div className="space-y-4 relative z-10">

<div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 transform translate-x-4">
<div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:calendar-check" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-800">
                    New Appointment Booked
                  </p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Via Automation • Just Now
                  </p>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 transform -translate-x-2">
<div className="w-10 h-10 rounded-full bg-lilac-100 text-lilac-600 flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:message-square" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-800">
                    Missed Call Text Sent
                  </p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Recovered Lead
                  </p>
</div>
</div>

<div className="bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white flex items-center gap-4 transform translate-x-2">
<div className="w-10 h-10 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center shrink-0">
<iconify-icon className="fill-current" icon="lucide:star" width="20"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-800">
                    New 5-Star Review
                  </p>
<p className="text-[10px] text-slate-500 uppercase tracking-wide">
                    Google Business Profile
                  </p>
</div>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="font-display font-medium text-4xl text-charcoal tracking-tight mb-8">
            More Than A Website.
            <br/>
<span className="text-slate-400">A Growth Engine.</span>
</h2>
<div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
<div>
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-slate-700" icon="lucide:mouse-pointer-click" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-charcoal mb-2">Get More Clients</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                Turn traffic into paying customers with conversion-focused
                design.
              </p>
</div>
<div>
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-slate-700" icon="lucide:smartphone-charging" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-charcoal mb-2">Instant Response</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                AI systems that instantly text back missed calls 24/7.
              </p>
</div>
<div>
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-slate-700" icon="lucide:award" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-charcoal mb-2">Stand Out</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                Premium branding that positions you as the market leader.
              </p>
</div>
<div>
<div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center mb-4 shadow-sm">
<iconify-icon className="text-slate-700" icon="lucide:trending-up" width="20"></iconify-icon>
</div>
<h4 className="font-medium text-charcoal mb-2">Scalable Tech</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                Built on robust frameworks, not flimsy templates.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-display font-medium text-4xl text-charcoal tracking-tight mb-4">
            Recent Work
          </h2>
<p className="text-slate-500 font-light">
            Digital experiences that convert.
          </p>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-lilac-200/50 hover:scale-[1.02] transition-transform duration-500">
<img alt="Insurance Agency Website" className="w-full h-auto object-cover" src="https://plus.unsplash.com/premium_photo-1683288662057-3a1b4274c106?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-lilac-900/5 mix-blend-multiply"></div>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-3xl font-display font-medium text-charcoal tracking-tight">
                Local Insurance Agency
              </h3>
<p className="text-slate-500 font-light leading-relaxed">
                A high-trust design focused on lead generation and policy
                renewal automation.
              </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Lead Gen
                </span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Automation
                </span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row-reverse items-center gap-12">
<div className="w-full md:w-1/2">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-100/50 hover:scale-[1.02] transition-transform duration-500">
<img alt="Home Services Website" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1544256335-af39d5e30538?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-3xl font-display font-medium text-charcoal tracking-tight">
                Premier Home Services
              </h3>
<p className="text-slate-500 font-light leading-relaxed">
                A mobile-first design for a construction firm, featuring instant
                quote forms and gallery integration.
              </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Instant Quotes
                </span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Mobile First
                </span>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12">
<div className="w-full md:w-1/2">
<div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 hover:scale-[1.02] transition-transform duration-500">
<img alt="Consultancy Website" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="w-full md:w-1/2 space-y-6">
<h3 className="text-3xl font-display font-medium text-charcoal tracking-tight">
                Boutique Consultancy
              </h3>
<p className="text-slate-500 font-light leading-relaxed">
                Elegant, minimalist design for a high-ticket consultant.
              </p>
<div className="flex gap-2">
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Branding
                </span>
<span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs text-slate-500">
                  Booking
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="testimonials">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-medium text-3xl text-center mb-16 tracking-tight">
          What Our Partners Say
        </h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-3xl relative">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              I was on a roof when I missed a call. The AI text-back system
              engaged them immediately. That turned into a $10k roofing job I
              would have lost.
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">
                KM
              </div>
<div>
<p className="text-sm font-medium text-charcoal">Kevin Miller</p>
<p className="text-xs text-slate-400">General Contractor</p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-3xl relative">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              My old site did nothing. StanceX set up the automated review
              requests and now I'm ranking #1 in my town for 'Auto Detailing'.
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-lilac-100 flex items-center justify-center text-lilac-600 font-bold text-xs">
                HS
              </div>
<div>
<p className="text-sm font-medium text-charcoal">Harpreet Singh</p>
<p className="text-xs text-slate-400">Auto Detailing</p>
</div>
</div>
</div>

<div className="glass-card p-8 rounded-3xl relative">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
              Professional, clean, and high-end. The team was incredibly easy to
              work with and the site actually brings me qualified leads.
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                AM
              </div>
<div>
<p className="text-sm font-medium text-charcoal">Alisha McDonald</p>
<p className="text-xs text-slate-400">Business Coach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="pricing">
<div className="max-w-3xl mx-auto">
<div className="glass-card p-10 md:p-14 rounded-[2.5rem] border border-lilac-200 ring-4 ring-lilac-50/50 relative overflow-hidden text-center">

<div className="absolute -top-32 -left-32 w-64 h-64 bg-lilac-300/20 rounded-full blur-[80px]"></div>
<h2 className="font-display font-medium text-3xl md:text-4xl text-charcoal tracking-tight mb-4 relative z-10">
            The Complete Growth Engine
          </h2>
<p className="text-slate-500 mb-10 relative z-10">
            Everything you need to dominate your local market.
            <br/>
            No hidden fees. One clear price.
          </p>
<div className="mb-10 relative z-10">
<span className="text-5xl md:text-6xl font-display font-semibold text-charcoal tracking-tight">
              $497
            </span>
<span className="text-slate-400 text-lg">/mo</span>
</div>
<a className="inline-flex w-full md:w-auto items-center justify-center px-8 py-4 mb-12 rounded-full bg-gradient-to-r from-lilac-900 to-indigo-900 text-white font-medium shadow-lg shadow-lilac-500/20 hover:scale-105 transition-transform relative z-10" href="#contact">
            Get Started Now
          </a>
<div className="text-left space-y-4 max-w-lg mx-auto relative z-10">
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<div>
<strong className="text-charcoal block text-sm">
                  Online Presence
                </strong>
<span className="text-slate-500 text-xs">
                  5-Page Custom Website, Logo, Domain &amp; Hosting.
                </span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<div>
<strong className="text-charcoal block text-sm">
                  Reputation AI
                </strong>
<span className="text-slate-500 text-xs">
                  Automated Review Requests, "Done-For-You" Replies.
                </span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<div>
<strong className="text-charcoal block text-sm">
                  Communication
                </strong>
<span className="text-slate-500 text-xs">
                  Missed-Call Text Back, Unified Inbox, Webchat.
                </span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<div>
<strong className="text-charcoal block text-sm">Automation</strong>
<span className="text-slate-500 text-xs">
                  Lead Forms, Booking Confirmations, Reactivation.
                </span>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-green-500 shrink-0 mt-0.5" icon="lucide:check-circle-2" width="20"></iconify-icon>
<div>
<strong className="text-charcoal block text-sm">VIP Support</strong>
<span className="text-slate-500 text-xs">
                  Priority Support &amp; Ongoing Maintenance.
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="roi">

<div className="max-w-7xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-20 relative overflow-hidden text-white shadow-2xl shadow-indigo-500/10">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16">

<div className="space-y-10">
<div>
<h2 className="font-display font-medium text-3xl tracking-tight mb-4">
                Calculate Your Growth
              </h2>
<p className="text-slate-400 font-light">
                See how automation impacts your bottom line.
              </p>
</div>
<div className="space-y-8 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">

<div>
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-slate-300">
                    Monthly Leads
                  </label>
<span className="font-mono text-lilac-300" id="display-leads">
                    50
                  </span>
</div>
<input className="w-full" id="calc-leads" max="500" min="10" oninput="calculateROI()" step="10" type="range" value="50"/>
</div>

<div>
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-slate-300">
                    Client Value ($)
                  </label>
<span className="font-mono text-lilac-300" id="display-value">
                    $500
                  </span>
</div>
<input className="w-full" id="calc-value" max="5000" min="100" oninput="calculateROI()" step="100" type="range" value="500"/>
</div>

<div>
<div className="flex justify-between mb-4">
<label className="text-sm font-medium text-slate-300">
                    Close Rate (%)
                  </label>
<span className="font-mono text-lilac-300" id="display-close">
                    20%
                  </span>
</div>
<input className="w-full" id="calc-close" max="80" min="5" oninput="calculateROI()" step="5" type="range" value="20"/>
</div>
</div>
</div>

<div className="flex flex-col justify-center">
<div className="bg-white text-slate-900 rounded-3xl p-10 shadow-2xl">
<h3 className="font-display font-medium text-lg mb-8 flex items-center gap-2">
<iconify-icon className="text-lilac-500" icon="lucide:pie-chart"></iconify-icon>
                Projected Revenue Increase
              </h3>
<div className="grid grid-cols-2 gap-6 mb-8">
<div className="p-4 bg-slate-50 rounded-2xl">
<p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                    Missed Call Recovery
                  </p>
<p className="text-lg font-semibold text-charcoal" id="result-missed">
                    +$0
                  </p>
</div>
<div className="p-4 bg-slate-50 rounded-2xl">
<p className="text-[10px] uppercase tracking-wider text-slate-500 mb-1">
                    Reputation Lift
                  </p>
<p className="text-lg font-semibold text-charcoal" id="result-reputation">
                    +$0
                  </p>
</div>
</div>
<div className="pt-8 border-t border-slate-100 text-center">
<p className="text-sm text-slate-500 mb-2">
                  Total Estimated Extra Revenue
                </p>
<p className="text-5xl font-display font-medium text-charcoal tracking-tighter mb-2" id="result-total-mo">
                  +$0/mo
                </p>
<p className="text-sm text-emerald-600 font-medium" id="result-total-yr">
                  +$0 per year
                </p>
</div>
<button className="w-full mt-8 py-4 bg-charcoal text-white rounded-xl hover:bg-slate-800 transition-colors font-medium">
                Capture This Revenue
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6 max-w-3xl mx-auto" id="faq">
<h2 className="font-display font-medium text-3xl text-center mb-16 tracking-tight">
        Frequently Asked Questions
      </h2>
<div className="space-y-4">

<details className="group bg-white/60 border border-white/60 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:shadow-slate-200/50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-charcoal font-medium select-none">
            How long does the process take?
            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 font-light leading-relaxed">
            We move fast. Typically, we have a first draft ready in 7 days. Most
            sites are fully live and taking bookings within 14 days.
          </div>
</details>

<details className="group bg-white/60 border border-white/60 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:shadow-slate-200/50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-charcoal font-medium select-none">
            I am not tech-savvy. Is this for me?
            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 font-light leading-relaxed">
            Absolutely. The system runs on autopilot. We handle hosting, design,
            and setup. Your only job is to answer the phone.
          </div>
</details>

<details className="group bg-white/60 border border-white/60 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:shadow-slate-200/50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-charcoal font-medium select-none">
            Do I need to write the content?
            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 font-light leading-relaxed">
            No. We provide professional industry copywriting and licensed
            images. If you have your own, we'll use them, but we can handle
            everything.
          </div>
</details>

<details className="group bg-white/60 border border-white/60 rounded-2xl backdrop-blur-sm overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:shadow-slate-200/50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-charcoal font-medium select-none">
            How does Missed Call Text Back work?
            <iconify-icon className="text-slate-400 transition-transform duration-300 group-open:rotate-180" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-6 pb-6 pt-0 text-sm text-slate-500 font-light leading-relaxed">
            When you miss a call, our AI instantly sends an SMS: "Sorry I missed
            you! How can I help?" This engages the lead immediately, preventing
            them from calling a competitor.
          </div>
</details>
</div>
</section>

<section className="relative z-10 py-32 px-6" id="contact">
<div className="max-w-4xl mx-auto text-center mb-16">
<h2 className="font-display font-medium text-4xl md:text-5xl text-charcoal tracking-tight mb-6">
          Ready to Scale Your Service Business?
        </h2>
<p className="text-slate-500 text-lg font-light max-w-2xl mx-auto">
          Fill out the form below. We'll audit your current online presence and
          show you exactly how we can help.
        </p>
</div>
<div className="max-w-xl mx-auto">
<div className="glass-card p-8 md:p-10 rounded-3xl shadow-xl">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">
                  Name
                </label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-lilac-100 focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 outline-none transition-all text-charcoal placeholder-slate-300" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">
                  Business Name
                </label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-lilac-100 focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 outline-none transition-all text-charcoal placeholder-slate-300" placeholder="Acme Corp" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">
                Email Address
              </label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-lilac-100 focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 outline-none transition-all text-charcoal placeholder-slate-300" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">
                Phone Number
              </label>
<input className="w-full px-4 py-3 rounded-xl bg-white border border-lilac-100 focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 outline-none transition-all text-charcoal placeholder-slate-300" placeholder="(555) 123-4567" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider ml-1">
                How can we help?
              </label>
<textarea className="w-full px-4 py-3 rounded-xl bg-white border border-lilac-100 focus:border-lilac-300 focus:ring-2 focus:ring-lilac-100 outline-none transition-all text-charcoal placeholder-slate-300 h-32 resize-none" placeholder="Tell us about your goals..."></textarea>
</div>
<button className="w-full py-4 rounded-xl bg-gradient-to-r from-lilac-900 to-indigo-900 text-white font-medium shadow-lg hover:shadow-xl hover:scale-[1.01] transition-all duration-300 mt-4" type="submit">
              Get Your Free Audit
            </button>
</form>
</div>
</div>
</section>
<footer className="relative z-10 bg-slate-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
<div>
<span className="font-display font-semibold text-xl tracking-tight text-charcoal">
              STANCEXAI
            </span>
<p className="text-slate-500 text-sm mt-2 font-light">
              Ethereal automation for modern businesses.
            </p>
</div>
<div className="flex gap-6">
<a className="text-slate-400 hover:text-charcoal transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-charcoal transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-charcoal transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2024 StanceXAi. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-charcoal transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-charcoal transition-colors" href="#">
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>



    </>
  );
}
