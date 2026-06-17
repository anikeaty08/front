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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
orange: '#fc5e1f',
dark: '#181715',
peach: '#faaa87',
blue: '#53a0be',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



      // Initialize Icons
      lucide.createIcons();

      // Simple Intersection Observer for scroll animations
      document.addEventListener('DOMContentLoaded', () => {
          const observerOptions = {
              threshold: 0.1,
              rootMargin: "0px 0px -50px 0px"
          };

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                  }
              });
          }, observerOptions);

          document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

          // Multi-step form handling
          const formStep1 = document.getElementById('form-step-1');
          const formStep2 = document.getElementById('form-step-2');
          const progressBar = document.getElementById('progress-bar');
          const step2Circle = document.getElementById('step-2-circle');
          const step2Text = document.getElementById('step-2-text');
          const backBtn = document.getElementById('back-btn');
          const leadOptions = document.querySelectorAll('.lead-option');
          const radioInputs = document.querySelectorAll('input[name="lead_volume"]');

          // Handle lead volume selection
          radioInputs.forEach(radio => {
              radio.addEventListener('change', function() {
                  // Update visual selection
                  leadOptions.forEach(opt => {
                      opt.classList.remove('selected');
                      opt.querySelector('.option-circle').classList.remove('border-[#fc5e1f]');
                      opt.querySelector('.option-dot').classList.remove('scale-100');
                      opt.querySelector('.option-dot').classList.add('scale-0');
                  });
                  
                  const selectedOption = this.closest('.lead-option');
                  selectedOption.classList.add('selected');
                  selectedOption.querySelector('.option-circle').classList.add('border-[#fc5e1f]');
                  selectedOption.querySelector('.option-dot').classList.remove('scale-0');
                  selectedOption.querySelector('.option-dot').classList.add('scale-100');

                  // Transition to step 2 after a brief delay
                  setTimeout(() => {
                      formStep1.classList.remove('active');
                      formStep1.classList.add('hidden');
                      formStep2.classList.remove('hidden');
                      formStep2.classList.add('active');
                      
                      // Update progress indicator
                      progressBar.style.width = '100%';
                      step2Circle.classList.remove('bg-gray-200', 'text-gray-500');
                      step2Circle.classList.add('bg-[#fc5e1f]', 'text-white');
                      step2Text.classList.remove('text-gray-400');
                      step2Text.classList.add('text-[#181715]');

                      // Re-initialize icons for back button
                      lucide.createIcons();

                      // Focus on name field
                      document.getElementById('name').focus();
                  }, 300);
              });
          });

          // Handle back button
          backBtn.addEventListener('click', function() {
              formStep2.classList.remove('active');
              formStep2.classList.add('hidden');
              formStep1.classList.remove('hidden');
              formStep1.classList.add('active');
              
              // Update progress indicator
              progressBar.style.width = '0%';
              step2Circle.classList.add('bg-gray-200', 'text-gray-500');
              step2Circle.classList.remove('bg-[#fc5e1f]', 'text-white');
              step2Text.classList.add('text-gray-400');
              step2Text.classList.remove('text-[#181715]');
          });

          // Form submission handling with AJAX for Netlify
          const form = document.getElementById('contact-form');
          const submitBtn = document.getElementById('submit-btn');
          const btnText = document.getElementById('btn-text');
          const btnIcon = document.getElementById('btn-icon');
          const btnSpinner = document.getElementById('btn-spinner');
          const successMessage = document.getElementById('success-message');

          form.addEventListener('submit', async (e) => {
              e.preventDefault();

              // Show loading state
              btnText.textContent = 'Sending...';
              btnIcon.classList.add('hidden');
              btnSpinner.classList.remove('hidden');
              submitBtn.disabled = true;

              // Get form data
              const formData = new FormData(form);

              try {
                  const response = await fetch('/', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                      body: new URLSearchParams(formData).toString()
                  });

                  if (response.ok) {
                      // Hide form and show success message
                      form.classList.add('hidden');
                      document.querySelector('.flex.items-center.gap-2.mb-6').classList.add('hidden'); // Hide progress indicator
                      successMessage.classList.remove('hidden');
                      
                      // Re-initialize icons for success message
                      lucide.createIcons();
                  } else {
                      throw new Error('Form submission failed');
                  }
              } catch (error) {
                  // Reset button on error
                  btnText.textContent = 'Build My Lead Winning System';
                  btnIcon.classList.remove('hidden');
                  btnSpinner.classList.add('hidden');
                  submitBtn.disabled = false;
                  
                  alert('Something went wrong. Please try again or email us directly.');
              }
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 border-b bg-[#fff]/80 backdrop-blur-md border-gray-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 bg-[#181715] text-[#fff]">
<i className="w-4 h-4" data-lucide="zap"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-[#181715]">
            DriftLead AI
          </span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="transition-colors hover:text-[#fc5e1f]" href="#problem">
            The Problem
          </a>
<a className="transition-colors hover:text-[#fc5e1f]" href="#features">
            How it Works
          </a>
<a className="transition-colors hover:text-[#fc5e1f]" href="#benefits">
            Benefits
          </a>
<a className="transition-colors hover:text-[#fc5e1f]" href="#reviews">
            Reviews
          </a>
</div>
<div className="flex items-center gap-4">
<a className="px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-[#181715] text-white hover:bg-[#fc5e1f]" href="#build-system">
            Build My System
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<section className="pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(250,170,135,0.15),transparent_50%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
<div className="flex-1 max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm mb-6 animate-[fadeIn_1s_ease-out] bg-white border-gray-200">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#fc5e1f]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#fc5e1f]"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-gray-600">
                Active: Monitoring Inbound Leads
              </span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6 md:mb-8 reveal delay-100 text-[#181715]">
              Your sale is not lost to a better business.
              <br/>
<span className="italic font-serif text-[#fc5e1f]">
                It is lost to a faster one.
              </span>
</h1>
<p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-lg reveal delay-200 text-gray-600">
              Most leads go to the first business that replies. DriftLead AI
              makes sure that business is always yours.
            </p>
<div className="flex flex-col sm:flex-row gap-4 reveal delay-300">
<a className="px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group bg-[#181715] text-[#fff] hover:bg-[#fc5e1f]" href="#build-system">
                Build My Lead Winning System
                <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<p className="mt-4 text-xs text-gray-500 reveal delay-300">
              You will see your system before you buy
            </p>
</div>

<div className="flex-1 relative w-full select-none reveal delay-200 perspective-[2000px] h-auto min-h-[500px] md:h-[550px]">
<div className="absolute top-4 left-4 right-4 md:top-10 md:left-10 md:right-0 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border overflow-hidden z-20 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700 ease-out bg-white border-gray-100">

<div className="p-5 border-b flex justify-between items-center border-gray-50 bg-gray-50/80 backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 border rounded-full flex items-center justify-center shadow-sm bg-green-100 border-green-200">
<i className="w-5 h-5 text-green-600" data-lucide="phone-call"></i>
</div>
<div>
<div className="text-sm font-bold text-[#181715]">
                      New Lead: John S.
                    </div>
<div className="text-[10px] text-gray-500 flex items-center gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                      Active Now • 5s ago
                    </div>
</div>
</div>
<div className="border px-3 py-1 rounded-full text-[10px] font-semibold flex items-center gap-1.5 bg-[#181715] text-white border-[#181715]">
                  AI Agent Active
                </div>
</div>

<div className="p-6 bg-gray-50 h-full flex flex-col gap-4">

<div className="self-start max-w-[85%]">
<div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm p-4 shadow-sm">
<p className="text-sm text-gray-700">
                      Hi, I'm interested in a quote for your service. Are you
                      available?
                    </p>
</div>
<span className="text-[10px] text-gray-400 ml-2 mt-1">
                    10:00 AM
                  </span>
</div>

<div className="self-end max-w-[85%]">
<div className="bg-[#181715] text-white rounded-2xl rounded-tr-sm p-4 shadow-md">
<p className="text-sm">
                      Hi John! Thanks for reaching out. We can definitely help
                      you. I can have someone contact you as early as today at 1
                      PM. Does that work?
                    </p>
</div>
<div className="flex items-center justify-end gap-1 mt-1 mr-2">
<i className="w-3 h-3 text-[#fc5e1f]" data-lucide="zap"></i>
<span className="text-[10px] text-gray-400">
                      Replied in 3 seconds
                    </span>
</div>
</div>

<div className="flex justify-center my-2">
<span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">
                    Call Scheduled
                  </span>
</div>

<div className="bg-white border border-green-100 p-3 rounded-xl shadow-sm flex items-center gap-3 animate-[pulse_3s_infinite]">
<div className="bg-green-100 p-1.5 rounded-full">
<i className="w-4 h-4 text-green-600" data-lucide="check"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-800">
                      Lead Qualified
                    </p>
<p className="text-[10px] text-gray-500">
                      Transferred to Sales Team
                    </p>
</div>
</div>
</div>
</div>

<div className="absolute top-8 left-8 right-2 md:top-20 md:left-16 md:right-[-24px] h-full rounded-3xl shadow-xl border z-10 opacity-60 scale-95 transform rotate-[2deg] bg-white border-gray-100"></div>
<div className="absolute -top-10 right-4 md:top-0 md:right-10 glass-card p-4 rounded-xl shadow-lg border z-30 animate-[bounce_4s_infinite] border-white/40">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-[#faaa87]/30">
<i className="w-4 h-4 text-[#fc5e1f]" data-lucide="zap"></i>
</div>
<div>
<p className="text-xs font-bold text-[#181715]">
                    Speed Advantage
                  </p>
<p className="text-[10px] text-gray-500">
                    Beating competitors by 4 hrs
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="value-prop">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-[#53a0be]/10 text-[#53a0be]">
            Why Speed Matters
          </div>
<h2 className="text-4xl font-medium tracking-tight mb-4 text-[#181715]">
            Speed is the real driver of revenue.
          </h2>
<p className="text-gray-500 text-lg">
            DriftLead AI responds to every lead the instant they appear and
            moves them into real conversations before other businesses even
            notice the inquiry.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-white border transition-colors reveal delay-100 group border-gray-100 hover:border-[#fc5e1f]/30">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-[#fc5e1f]/10 border-[#fc5e1f]/20">
<i className="w-6 h-6 text-[#fc5e1f]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-[#181715]">
              Instant Response
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Reach every lead the moment they inquire. No delays, no waiting
              periods.
            </p>
</div>
<div className="p-8 rounded-2xl bg-white border transition-colors reveal delay-200 group border-gray-100 hover:border-[#53a0be]/30">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-[#53a0be]/10 border-[#53a0be]/20">
<i className="w-6 h-6 text-[#53a0be]" data-lucide="coins"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-[#181715]">
              More Revenue
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Turn more of your existing leads into customers by engaging them
              while interest is highest.
            </p>
</div>
<div className="p-8 rounded-2xl bg-white border transition-colors reveal delay-300 group border-gray-100 hover:border-[#faaa87]/30">
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-[#faaa87]/20 border-[#faaa87]/30">
<i className="w-6 h-6 text-[#181715]" data-lucide="trophy"></i>
</div>
<h3 className="text-xl font-medium mb-3 text-[#181715]">
              Competitive Advantage
            </h3>
<p className="text-sm text-gray-500 leading-relaxed">
              Beat competitors to the lead every time. Win the deal before they
              even reply.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#181715] relative overflow-hidden text-white" id="problem">
<div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none bg-[#fc5e1f]/20"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none bg-[#53a0be]/20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="reveal">
<div className="inline-block border px-3 py-1 rounded-full text-xs mb-6 backdrop-blur-sm border-white/20 text-white/70">
              // The Revenue Leak
            </div>
<h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6 font-serif">
              Slow follow up is the
              <br/>
              biggest revenue leak.
            </h2>
<p className="text-lg mb-6 leading-relaxed text-white/60">
              Most service businesses think they respond fast. But the truth is
              that leads go cold in minutes. When your team is busy, on another
              call, out in the field, or simply not watching the inbox,
              competitors win the revenue before you even know the lead arrived.
            </p>
<p className="text-lg mb-8 leading-relaxed font-medium text-white">
              Every minute of delay sends money somewhere else. Leads do not
              wait. They choose the first business that replies. And right now,
              that business is not always you.
            </p>
<div className="p-4 rounded-xl bg-white/5 border border-white/10">
<p className="font-serif text-xl italic text-[#fc5e1f]">
                You are losing revenue you already earned simply because you are
                not the first to respond.
              </p>
</div>
</div>
<div className="relative reveal delay-200">
<div className="bg-gradient-to-br to-transparent border rounded-2xl p-8 backdrop-blur-xl from-white/10 border-white/10">
<div className="flex items-center justify-between mb-8">
<h3 className="font-serif text-xl">The Reality of Speed</h3>
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-[#53a0be]"></div>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center gap-4 opacity-40 blur-[1px]">
<div className="w-8 h-8 rounded border border-white/30 flex items-center justify-center shrink-0 bg-white/10">
<span className="text-xs">A</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Competitor A</p>
<p className="text-xs text-white/30">Replied in 2 hours</p>
</div>
<span className="text-xs border border-white/30 px-2 py-0.5 rounded text-white/50">
                    Too Late
                  </span>
</div>

<div className="flex items-center gap-4 opacity-40 blur-[1px]">
<div className="w-8 h-8 rounded border border-white/30 flex items-center justify-center shrink-0 bg-white/10">
<span className="text-xs">B</span>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium truncate">Competitor B</p>
<p className="text-xs text-white/30">Replied in 30 mins</p>
</div>
<span className="text-xs border border-white/30 px-2 py-0.5 rounded text-white/50">
                    Missed Deal
                  </span>
</div>
<div className="h-px w-full my-2 bg-white/10"></div>

<div className="flex items-center gap-4 p-4 rounded-xl border shadow-lg transform scale-105 transition-transform bg-[#fc5e1f]/20 border-[#fc5e1f]">
<div className="w-8 h-8 rounded border border-[#fc5e1f] flex items-center justify-center shrink-0 bg-[#fc5e1f]">
<i className="w-4 h-4 text-white" data-lucide="zap"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-bold text-white">
                      Your Business (DriftLead AI)
                    </p>
<p className="text-xs text-[#faaa87]">Replied in 10 seconds</p>
</div>
<button className="text-xs px-3 py-1.5 rounded font-bold bg-white text-[#181715]">
                    WON DEAL
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t overflow-hidden bg-gray-50 border-gray-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
<div className="flex-1 lg:pr-12 reveal">
<div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 bg-[#181715]/10 text-[#181715]">
              The Solution
            </div>
<h2 className="text-4xl font-serif font-medium mb-6 text-[#181715]">
              Your new AI team reaches every lead the moment they appear.
            </h2>
<p className="text-lg mb-8 text-gray-600">
              DriftLead AI uses natural voice and text conversations to contact
              leads instantly. It answers questions, gathers details, qualifies
              interest, and sends your team the people who are ready to move
              forward.
            </p>
<p className="text-sm font-semibold text-[#fc5e1f]">
              This is how you win more revenue without increasing your ad spend.
            </p>
</div>
<div className="flex-1 w-full reveal delay-200">
<div className="grid gap-6">
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
<div className="p-3 bg-blue-50 rounded-lg text-blue-600 shrink-0">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div>
<h4 className="font-bold text-[#181715] mb-2">Voice AI</h4>
<p className="text-sm text-gray-500">
                    Calls every lead right away and starts a real conversation.
                    It sounds natural, friendly, and professional.
                  </p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
<div className="p-3 bg-green-50 rounded-lg text-green-600 shrink-0">
<i className="w-6 h-6" data-lucide="message-square"></i>
</div>
<div>
<h4 className="font-bold text-[#181715] mb-2">Text AI</h4>
<p className="text-sm text-gray-500">
                    Replies instantly through SMS and keeps prospects engaged
                    until appointments are booked.
                  </p>
</div>
</div>
<div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex items-start gap-4">
<div className="p-3 bg-orange-50 rounded-lg text-[#fc5e1f] shrink-0">
<i className="w-6 h-6" data-lucide="target"></i>
</div>
<div>
<h4 className="font-bold text-[#181715] mb-2">
                    Smart Qualification
                  </h4>
<p className="text-sm text-gray-500">
                    Filters out bad leads and sends your team real opportunities
                    that are ready to buy.
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="benefits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-serif font-medium mb-4 text-[#181715]">
            What happens when your business becomes the fastest to respond
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="trending-up"></i>
<h3 className="font-bold text-lg mb-2">More Revenue</h3>
<p className="text-sm text-gray-500">
              Generate more income from the leads you already have without
              spending more on ads.
            </p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="clock"></i>
<h3 className="font-bold text-lg mb-2">Less Wasted Time</h3>
<p className="text-sm text-gray-500">
              Stop chasing unqualified prospects. Only talk to people ready to
              move forward.
            </p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="smile"></i>
<h3 className="font-bold text-lg mb-2">Better Experience</h3>
<p className="text-sm text-gray-500">
              Give every new lead a professional, instant response that builds
              trust immediately.
            </p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="shield"></i>
<h3 className="font-bold text-lg mb-2">Stronger Advantage</h3>
<p className="text-sm text-gray-500">
              Dominate your local market by simply being faster than everyone
              else.
            </p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="moon"></i>
<h3 className="font-bold text-lg mb-2">Consistent Follow Up</h3>
<p className="text-sm text-gray-500">
              Your system works day and night, weekends and holidays. Never miss
              an opportunity.
            </p>
</div>

<div className="bg-gray-50 p-8 rounded-2xl border reveal delay-100 border-gray-100">
<i className="w-8 h-8 text-[#181715] mb-4" data-lucide="bar-chart-3"></i>
<h3 className="font-bold text-lg mb-2">Predictable Pipeline</h3>
<p className="text-sm text-gray-500">
              Fill your calendar with qualified appointments automatically.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t bg-gray-50 border-gray-100">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-3xl md:text-4xl font-serif font-medium mb-6 text-[#181715]">
          Built by a performance marketing team that knows why leads fail.
        </h2>
<p className="text-lg text-gray-600 mb-10">
          DriftLead AI was created after seeing the same pattern across dozens
          of businesses. Great marketing. Strong leads. Poor follow up. Most
          service businesses lose money because they respond too slow, not
          because their marketing underperforms. We built DriftLead to fix the
          real problem.
        </p>
<div className="flex flex-wrap justify-center gap-4 md:gap-12 pt-8 border-t border-gray-200">
<div className="flex items-center gap-2 font-medium">
<i className="w-5 h-5 text-[#fc5e1f]" data-lucide="check-circle-2"></i>
            Experience that matters
          </div>
<div className="flex items-center gap-2 font-medium">
<i className="w-5 h-5 text-[#fc5e1f]" data-lucide="check-circle-2"></i>
            A system built for revenue
          </div>
<div className="flex items-center gap-2 font-medium">
<i className="w-5 h-5 text-[#fc5e1f]" data-lucide="check-circle-2"></i>
            Hands on support
          </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-serif font-medium mb-4 text-[#181715]">
            Businesses grow faster when they respond faster.
          </h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl border reveal delay-100 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-[#fc5e1f]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">
              "Booked more conversations in the first week than the whole month
              before."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
<div className="w-full h-full bg-gradient-to-tr from-gray-400 to-gray-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-[#181715]">
                  Local Contractor
                </p>
<p className="text-xs text-gray-500">Home Services</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border reveal delay-200 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-[#fc5e1f]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">
              "Our team stopped wasting time chasing cold leads. The system just
              hands us booked appointments."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
<div className="w-full h-full bg-gradient-to-tr from-[#53a0be] to-blue-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-[#181715]">Dr. Sarah M.</p>
<p className="text-xs text-gray-500">Wellness Clinic</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border reveal delay-300 border-gray-100">
<div className="flex items-center gap-1 mb-4 text-[#fc5e1f]">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-sm leading-relaxed mb-6 text-gray-800">
              "We did not know how slow we were until DriftLead fixed our follow
              up. The difference is night and day."
            </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200">
<div className="w-full h-full bg-gradient-to-tr from-[#faaa87] to-purple-200"></div>
</div>
<div>
<p className="text-sm font-semibold text-[#181715]">James R.</p>
<p className="text-xs text-gray-500">Real Estate Broker</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#181715] relative text-white" id="build-system">
<div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[80px] rounded-full pointer-events-none bg-[#fc5e1f]/10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="reveal">
<div className="inline-block border px-3 py-1 rounded-full text-xs mb-6 border-[#fc5e1f] text-[#fc5e1f] bg-[#fc5e1f]/10">
              Zero Risk
            </div>
<h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">
              Backed by a 30 day satisfaction guarantee.
            </h2>
<p className="text-gray-400 mb-8 leading-relaxed">
              Try DriftLead with total confidence. We build your entire lead
              winning system, activate it, and support you through your first
              month. If you are not satisfied, you get a full refund. No risk.
              No pressure. Just results.
            </p>
<div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-8">
<h3 className="font-medium text-lg mb-4">Who we serve</h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Legal services
                </span>
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Local contractors
                </span>
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Health &amp; Wellness
                </span>
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Real Estate
                </span>
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Rehab Centers
                </span>
<span className="px-3 py-1 rounded-full text-xs bg-white/10 text-gray-300">
                  Automotive
                </span>
</div>
</div>

<div className="space-y-4">
<h3 className="font-medium text-lg mb-4">How it works</h3>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-white font-bold text-sm">
                  1
                </div>
<div>
<h4 className="font-medium text-white">Tell us about your business</h4>
<p className="text-sm text-gray-400 mt-1">
                    We learn your offer, your ideal client, and your process.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/10 text-white font-bold text-sm">
                  2
                </div>
<div>
<h4 className="font-medium text-white">We create your system</h4>
<p className="text-sm text-gray-400 mt-1">
                    We configure the AI voice, text scripts, and integration.
                  </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-[#fc5e1f] text-white font-bold text-sm">
                  3
                </div>
<div>
<h4 className="font-medium text-white">See it live before you buy</h4>
<p className="text-sm text-gray-400 mt-1">
                    Watch your system respond to a test lead in real time.
                  </p>
</div>
</div>
</div>
</div>

<div className="rounded-3xl p-8 border shadow-2xl relative reveal delay-200 bg-white text-[#181715] border-white/10">

<div className="flex items-center gap-2 mb-6">
<div className="flex items-center gap-2" id="step-indicator-1">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-[#fc5e1f] text-white">1</div>
<span className="text-sm font-medium text-[#181715]">Lead Volume</span>
</div>
<div className="flex-1 h-0.5 bg-gray-200 mx-2">
<div className="h-full bg-[#fc5e1f] transition-all duration-300" id="progress-bar" style={{width: '0%'}}></div>
</div>
<div className="flex items-center gap-2" id="step-indicator-2">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-gray-200 text-gray-500" id="step-2-circle">2</div>
<span className="text-sm font-medium text-gray-400" id="step-2-text">Contact Info</span>
</div>
</div>

<form className="relative" data-netlify="true" data-netlify-honeypot="bot-field" id="contact-form" method="POST" name="driftlead-contact">

<input name="form-name" type="hidden" value="driftlead-contact"/>

<p className="hidden">
<label>Don't fill this out if you're human: <input name="bot-field"/></label>
</p>

<div className="form-step active" id="form-step-1">
<h3 className="text-2xl font-serif font-medium mb-2">
                  How many leads do you get per month?
                </h3>
<p className="text-sm text-gray-500 mb-8">Select your current monthly lead volume to get started.</p>
<div className="space-y-3">
<label className="lead-option block p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#fc5e1f] transition-all">
<input className="hidden" name="lead_volume" required="" type="radio" value="1-50"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center option-circle">
<div className="w-2.5 h-2.5 rounded-full bg-[#fc5e1f] scale-0 transition-transform option-dot"></div>
</div>
<span className="font-medium">1-50 leads</span>
</div>
<span className="text-xs text-gray-400">Small volume</span>
</div>
</label>
<label className="lead-option block p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#fc5e1f] transition-all">
<input className="hidden" name="lead_volume" type="radio" value="50-100"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center option-circle">
<div className="w-2.5 h-2.5 rounded-full bg-[#fc5e1f] scale-0 transition-transform option-dot"></div>
</div>
<span className="font-medium">50-100 leads</span>
</div>
<span className="text-xs text-gray-400">Growing</span>
</div>
</label>
<label className="lead-option block p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#fc5e1f] transition-all">
<input className="hidden" name="lead_volume" type="radio" value="100-250"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center option-circle">
<div className="w-2.5 h-2.5 rounded-full bg-[#fc5e1f] scale-0 transition-transform option-dot"></div>
</div>
<span className="font-medium">100-250 leads</span>
</div>
<span className="text-xs text-gray-400">Established</span>
</div>
</label>
<label className="lead-option block p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#fc5e1f] transition-all">
<input className="hidden" name="lead_volume" type="radio" value="250-500"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center option-circle">
<div className="w-2.5 h-2.5 rounded-full bg-[#fc5e1f] scale-0 transition-transform option-dot"></div>
</div>
<span className="font-medium">250-500 leads</span>
</div>
<span className="text-xs text-gray-400">High volume</span>
</div>
</label>
<label className="lead-option block p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-[#fc5e1f] transition-all">
<input className="hidden" name="lead_volume" type="radio" value="500+"/>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center option-circle">
<div className="w-2.5 h-2.5 rounded-full bg-[#fc5e1f] scale-0 transition-transform option-dot"></div>
</div>
<span className="font-medium">500+ leads</span>
</div>
<span className="text-xs text-gray-400">Enterprise</span>
</div>
</label>
</div>
</div>

<div className="form-step hidden" id="form-step-2">
<div className="flex items-center gap-2 mb-2">
<button className="p-1 rounded-lg hover:bg-gray-100 transition-colors" id="back-btn" type="button">
<i className="w-5 h-5 text-gray-500" data-lucide="arrow-left"></i>
</button>
<h3 className="text-2xl font-serif font-medium">
                    Almost there! Enter your details.
                  </h3>
</div>
<p className="text-sm text-gray-500 mb-8 ml-8">We'll reach out within 24 hours to build your system.</p>
<div className="space-y-5">

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">Full Name</label>
<input className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all duration-200 placeholder:text-gray-400" id="name" name="name" placeholder="John Smith" required="" type="text"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">Email Address</label>
<input className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all duration-200 placeholder:text-gray-400" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">Phone Number</label>
<input className="form-input w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm transition-all duration-200 placeholder:text-gray-400" id="phone" name="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>

<button className="w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 bg-[#181715] text-white hover:bg-[#fc5e1f] flex items-center justify-center gap-2" id="submit-btn" type="submit">
<span id="btn-text">Build My Lead Winning System</span>
<i className="w-4 h-4" data-lucide="arrow-right" id="btn-icon"></i>
<svg className="hidden animate-spin h-5 w-5 text-white" fill="none" id="btn-spinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
</svg>
</button>
<p className="text-center text-xs text-gray-400">
                    You will see your system before you buy
                  </p>
</div>
</div>
</form>

<div className="hidden text-center py-12" id="success-message">
<div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
<i className="w-8 h-8 text-green-600" data-lucide="check"></i>
</div>
<h4 className="text-xl font-bold text-[#181715] mb-2">Request Received!</h4>
<p className="text-sm text-gray-500">We'll be in touch within 24 hours to build your lead winning system.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50 border-b border-gray-200">
<div className="max-w-3xl mx-auto px-6 text-center reveal">
<h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-[#181715]">
          Be the first to respond.
          <br/>
          Win the revenue.
        </h2>
<p className="text-lg text-gray-600 mb-8">
          DriftLead AI makes your business faster than every competitor you
          face.
        </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all shadow-xl hover:shadow-2xl bg-[#181715] text-[#fff] hover:bg-[#fc5e1f]" href="#build-system">
          Build My Lead Winning System
          <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</section>

<footer className="pt-20 pb-10 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded flex items-center justify-center bg-[#181715] text-white">
<i className="w-3 h-3" data-lucide="zap"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-[#181715]">
                DriftLead AI
              </span>
</div>
<p className="text-sm text-gray-500 max-w-xs">
              Your new AI team reaches every lead the moment they appear.
            </p>
</div>
<div className="flex gap-4">
<a className="px-6 py-2.5 rounded-full text-sm font-medium transition-colors bg-[#181715] text-white hover:bg-[#fc5e1f]" href="#build-system">
              Get Started
            </a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-10 border-gray-100">
<div>
<h4 className="font-semibold mb-4 text-xs uppercase tracking-wider text-[#181715]">
              Contact us
            </h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="hover:text-[#fc5e1f]" href="mailto:support@driftlead.com">
                  support@driftlead.com
                </a>
</li>
</ul>
</div>
<div className="flex items-end justify-end col-span-2 md:col-span-1">
<p className="text-xs text-gray-400">© 2025 DriftLead AI.</p>
</div>
</div>
</div>
</footer>


    </>
  );
}
