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



        // Initialize Icons
        lucide.createIcons();

        // Scroll Reveal Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Follower Selection Logic
        function selectFollowers(btn, value) {
            // Update Hidden Input
            document.getElementById('followers-input').value = value;
            
            // Reset styles for all buttons
            document.querySelectorAll('.follower-btn').forEach(b => {
                b.classList.remove('border-green-500/30', 'bg-green-500/10');
                b.classList.add('border-white/10', 'bg-white/5');
                const indicator = b.querySelector('.indicator');
                if(indicator) indicator.remove();
            });

            // Set active style for clicked button
            btn.classList.remove('border-white/10', 'bg-white/5');
            btn.classList.add('border-green-500/30', 'bg-green-500/10');
            
            // Add indicator dot
            const dot = document.createElement('div');
            dot.className = 'indicator absolute top-1.5 right-1.5 w-2 h-2 bg-green-400 rounded-full';
            btn.appendChild(dot);
        }

        // Form Handler with Email (Formspree)
        async function submitForm(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = document.getElementById('submit-btn');
            const originalBtnText = submitBtn.innerText;
            
            // Loading State
            submitBtn.innerText = "Sending Application...";
            submitBtn.disabled = true;

            const data = new FormData(form);

            // ------------------------------------------------------------------
            // IMPORTANT: Replace 'YOUR_FORM_ID' below with your code from Formspree.io
            // Example: https://formspree.io/f/xvnggwrb
            // ------------------------------------------------------------------
            const formEndpoint = "https://formspree.io/f/mbdrovjr"; 

            try {
                const response = await fetch(formEndpoint, {
                    method: "POST",
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success: Trigger Animation
                    const formContainer = document.getElementById('application-form');
                    const successContainer = document.getElementById('success-message');

                    formContainer.classList.add('fade-out');
                    
                    setTimeout(() => {
                        formContainer.classList.add('hidden');
                        successContainer.classList.remove('hidden');
                        
                        requestAnimationFrame(() => {
                            successContainer.classList.remove('opacity-0', 'scale-95');
                            successContainer.classList.add('opacity-100', 'scale-100');
                        });
                    }, 400);
                } else {
                    // Error Handling
                    alert("Oops! There was a problem submitting your form. Please try again.");
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            } catch (error) {
                // Network Error
                alert("Oops! There was a problem submitting your form. Please check your internet connection.");
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
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
      

<div className="noise-bg"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
<svg className="lucide lucide-clover w-7 h-7 text-green-400" data-lucide="clover" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.17 7.83 2 22"></path><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"></path><path d="m7.83 7.83 8.34 8.34"></path></svg>
</div>
<span className="font-normal tracking-tight text-white text-base">Lucky LightAI</span>
</a>
<nav className="hidden md:flex gap-8 text-sm font-normal text-green-300">
<a className="hover:text-green-300 transition-colors" href="#home">Home</a>
<a className="hover:text-green-300 transition-colors" href="#how-it-works">Methodology</a>
</nav>
<a className="hidden md:flex items-center justify-center px-5 py-2.5 bg-white text-black text-xs font-normal rounded-full hover:bg-green-300 transition-all duration-300" href="#get-started">
                Start for Free
            </a>
</div>
</header>

<section className="flex flex-col text-center z-10 pt-44 pr-6 pb-36 pl-6 relative items-center" id="home">
<div className="reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 text-green-300 text-xs font-normal tracking-widest uppercase mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Zero Upfront Cost
            </div>
<h1 className="text-6xl md:text-7xl font-normal text-white tracking-tighter mb-8 max-w-4xl mx-auto leading-[1.1]">
                Monetize your influence.
                <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-200 via-green-500 to-green-700">
                    We take the risk.
                </span>
</h1>
<p className="text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light text-green-200">
                Lucky LightAI builds, markets, and launches high-value digital products for influencers completely for free. We only get paid when you do.
            </p>
<div className="flex flex-col sm:flex-row w-full gap-x-5 gap-y-4 items-center justify-center">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-normal transition-all duration-300 hover:bg-green-300 hover:w-full sm:hover:w-auto w-full sm:w-auto text-green-950" href="#get-started">
<span className="mr-2 text-xs uppercase tracking-wider font-medium">Start Building</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden max-w-4xl w-full reveal delay-100 active">
<div className="bg-black p-8 flex flex-col items-center justify-center group">
<span className="text-3xl font-medium text-white tracking-tight mb-2 group-hover:text-green-300 transition-colors">$0</span>
<span className="text-xs uppercase tracking-widest text-green-300">Investment</span>
</div>
<div className="bg-black p-8 flex flex-col items-center justify-center group">
<span className="text-3xl font-medium text-white tracking-tight mb-2 group-hover:text-green-300 transition-colors">100%</span>
<span className="text-xs uppercase tracking-widest text-green-300">Done For You</span>
</div>
<div className="bg-black p-8 flex flex-col items-center justify-center group">
<span className="text-3xl font-medium text-white tracking-tight mb-2 group-hover:text-green-300 transition-colors">24/7</span>
<span className="text-xs uppercase tracking-widest text-green-300">Support</span>
</div>
<div className="bg-black p-8 flex flex-col items-center justify-center group">
<span className="group-hover:text-green-300 transition-colors text-3xl font-medium text-white tracking-tight mb-2">50/50</span>
<span className="text-xs uppercase tracking-widest text-green-300">Profit Split</span>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-green-900/10" id="how-it-works">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-4xl font-normal text-white tracking-tight mb-5">The "Lucky Light" Model</h2>
<p className="text-base text-green-300">We operate on a pure performance basis. If you don't sell, we don't eat.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

<div className="hidden md:block absolute top-14 left-0 w-full h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent -z-10"></div>

<div className="flex flex-col items-center text-center reveal">
<div className="w-28 h-28 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_-10px_rgba(0,0,0,1)] z-10">
<svg className="lucide lucide-hammer w-10 h-10 text-green-200" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-white font-normal text-lg mb-3">We Build</h3>
<p className="text-sm leading-relaxed max-w-[220px] text-green-300">
                        We create the product, the landing page, and the email sequences.
                        <span className="block mt-2 text-green-300">Cost to you: $0</span>
</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-100">
<div className="w-28 h-28 rounded-full bg-black border border-green-500/30 flex items-center justify-center mb-8 shadow-[0_0_30px_-10px_rgba(134,239,172,0.3)] z-10 relative">
<div className="absolute inset-0 bg-green-500/5 rounded-full animate-pulse"></div>
<svg className="lucide lucide-rocket w-10 h-10 text-green-200" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-white font-normal text-lg mb-3">We Launch</h3>
<p className="text-sm leading-relaxed max-w-[220px] text-green-300">
                        We manage the launch strategy while you promote to your audience.
                        <span className="block mt-2 text-green-300">Risk to you: 0%</span>
</p>
</div>

<div className="flex flex-col items-center text-center reveal delay-200">
<div className="w-28 h-28 rounded-full bg-black border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_-10px_rgba(0,0,0,1)] z-10">
<svg className="lucide lucide-split w-10 h-10 text-green-200" data-lucide="split" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m15 9 6-6"></path></svg>
</div>
<h3 className="text-white font-normal text-lg mb-3">We Split</h3>
<p className="text-sm leading-relaxed max-w-[220px] text-green-300">
                        Revenue is split automatically. We only earn a commission on sales.
                        <span className="block mt-2 text-green-300">Upside: Unlimited</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="get-started">
<div className="glow-point bottom-0 right-0 translate-y-1/2 translate-x-1/2 opacity-30"></div>
<div className="max-w-2xl mx-auto glass-panel rounded-3xl p-10 md:p-14 border border-green-500/20 reveal relative min-h-[600px] flex items-center justify-center">

<div className="w-full transition-all duration-500 ease-in-out" id="application-form">
<div className="text-center mb-12">
<svg className="lucide lucide-zap w-10 h-10 text-green-300 mx-auto mb-8" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h2 className="text-4xl font-normal text-white tracking-tight mb-5">Ready to build your empire?</h2>
<p className="text-base font-light text-green-200">
                        We accept a limited number of creators per month to ensure quality. Apply now to secure your spot.
                    </p>
</div>
<form className="space-y-8" id="lead-form" onsubmit="submitForm(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3">
<label className="text-xs uppercase tracking-wider font-medium text-green-300">Name</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-green-500/50 transition-colors" name="name" placeholder="Your name" required="" type="text"/>
</div>
<div className="space-y-3">
<label className="text-xs uppercase tracking-wider font-medium text-green-300">Handle</label>
<input className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3.5 text-base text-white focus:outline-none focus:border-green-500/50 transition-colors" name="handle" placeholder="@instagram" required="" type="text"/>
</div>
</div>
<div className="space-y-3">
<label className="text-xs uppercase tracking-wider font-medium text-green-300">Follower Count</label>
<input id="followers-input" name="followers" type="hidden" value="10k - 50k"/>
<div className="grid grid-cols-3 gap-4">
<button className="follower-btn group relative flex items-center justify-center p-3.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none" onclick="selectFollowers(this, '10k - 50k')" type="button">
<span className="text-sm group-hover:text-white text-green-300">10k - 50k</span>
</button>
<button className="follower-btn group relative flex items-center justify-center p-3.5 rounded-lg border border-green-500/30 bg-green-500/10 transition-all focus:outline-none active-btn" onclick="selectFollowers(this, '50k - 200k')" type="button">
<span className="text-sm text-green-300 font-medium">50k - 200k</span>
<div className="indicator absolute top-1.5 right-1.5 w-2 h-2 bg-green-400 rounded-full"></div>
</button>
<button className="follower-btn group relative flex items-center justify-center p-3.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all focus:outline-none" onclick="selectFollowers(this, '200k+')" type="button">
<span className="text-sm group-hover:text-white text-green-300">200k+</span>
</button>
</div>
</div>
<div className="space-y-5 pt-6">
<div className="flex items-center justify-between p-5 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-4">
<div className="p-2.5 rounded bg-green-900/20 text-green-200">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="text-left">
<div className="text-base text-white font-medium">Commission Only Agreement</div>
<div className="text-xs text-green-300 mt-0.5">I understand there are no upfront fees.</div>
</div>
</div>
<div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-[0_0_10px_rgba(34,197,94,0.5)]">
<svg className="lucide lucide-check w-3.5 h-3.5 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<button className="w-full py-4 bg-white text-black font-medium text-base rounded-full hover:bg-green-300 transition-colors shadow-lg shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed" id="submit-btn" type="submit">
                            Submit Application
                        </button>
</div>
</form>
</div>

<div className="hidden opacity-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] transform scale-95 text-center" id="success-message">
<div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_-5px_rgba(34,197,94,0.6)]">
<svg className="lucide lucide-check w-10 h-10 text-black" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h2 className="text-4xl font-normal text-white tracking-tight mb-4">Application Received</h2>
<p className="text-lg font-light text-green-200 max-w-md mx-auto mb-10 leading-relaxed">
                    You've taken the first step towards monetizing your influence. We are reviewing your profile and will be in touch within 24 hours.
                </p>
<div className="flex flex-col gap-4 max-w-xs mx-auto">
<button className="w-full py-3.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-colors" onclick="window.location.reload()">
                        Return to Home
                    </button>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-xs text-green-500/60 uppercase tracking-widest font-medium">Status: In Review</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black py-16 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3 opacity-80">
<svg className="lucide lucide-clover w-5 h-5 text-green-400" data-lucide="clover" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.17 7.83 2 22"></path><path d="M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"></path><path d="m7.83 7.83 8.34 8.34"></path></svg>
<span className="text-base font-normal text-white tracking-tight">Lucky LightAI</span>
</div>
<div className="flex gap-10 text-xs uppercase tracking-widest font-medium text-green-600">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
<p className="text-xs text-green-700">© 2024 Lucky Light Agency. All rights reserved.</p>
</div>
</footer>


    </>
  );
}
