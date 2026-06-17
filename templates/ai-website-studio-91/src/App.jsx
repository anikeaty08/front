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
fontFamily: {
sans: ["Inter", "sans-serif"],
},
colors: {
background: "#030712", // slate-950
surface: "#0f172a", // slate-900
primary: "#6366f1", // indigo-500
secondary: "#a855f7", // purple-500
},
animation: {
"fade-in-up": "fadeInUp 0.8s ease-out forwards",
float: "float 6s ease-in-out infinite",
pulse: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
},
keyframes: {
fadeInUp: {
"0%": { opacity: "0", transform: "translateY(20px)" },
"100%": { opacity: "1", transform: "translateY(0)" },
},
float: {
"0%, 100%": { transform: "translateY(0)" },
"50%": { transform: "translateY(-10px)" },
},
},
},
},
};
// Initialize EmailJS
(function () {
emailjs.init("c5wUsi6kNbeElCjGK");
})();



      // Year Logic
      document.getElementById("year").textContent = new Date().getFullYear();

      // Scroll Observer
      const revealElements = document.querySelectorAll(".reveal");
      const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        revealElements.forEach((reveal) => {
          const elementTop = reveal.getBoundingClientRect().top;
          if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
          }
        });
      };
      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll();

      // Prefill Package Function
      function prefillPackage(packageName) {
        const select = document.getElementById('package');
        select.value = packageName;
      }

      // EmailJS Logic
      function sendEmail(e) {
        e.preventDefault();

        // UI Elements
        const submitBtn = document.getElementById("submitBtn");
        const btnText = submitBtn.querySelector("span");
        const btnIcon = submitBtn.querySelector("iconify-icon:not(#btnLoader)");
        const loader = document.getElementById("btnLoader");
        const successMsg = document.getElementById("successMessage");
        const errorMsg = document.getElementById("errorMessage");

        // Form Values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const packageType = document.getElementById("package").value;
        const details = document.getElementById("details").value;

        // Validation (basic HTML validation exists, but extra check)
        if(!name || !email || !packageType || !details) return;

        // Loading State
        btnText.textContent = "Processing...";
        btnIcon.classList.add("hidden");
        loader.classList.remove("hidden");
        submitBtn.disabled = true;
        submitBtn.classList.add("opacity-70", "cursor-not-allowed");
        errorMsg.classList.add("hidden");

        const serviceID = "service_ih7a37o";
        const adminTemplateID = "template_3lthys5";
        const autoReplyTemplateID = "template_7rguicn";

        // Admin Notification
        const sendAdmin = emailjs.send(serviceID, adminTemplateID, {
          name: name,
          email: email,
          package: packageType,
          details: details,
        });

        // User Auto-Reply
        // Note: Passing email as parameter so template can use it if configured as To Email
        const sendAutoReply = emailjs.send(serviceID, autoReplyTemplateID, {
          email: email, // Dynamic recipient
          name: name,
          package: packageType
        });

        Promise.all([sendAdmin, sendAutoReply])
          .then(() => {
            // Success Animation
            successMsg.classList.remove("opacity-0", "pointer-events-none");
            document.getElementById("contactForm").reset();
          })
          .catch((err) => {
            console.error("EmailJS Error:", err);
            errorMsg.classList.remove("hidden");
            btnText.textContent = "Send Inquiry";
            btnIcon.classList.remove("hidden");
            loader.classList.add("hidden");
            submitBtn.disabled = false;
            submitBtn.classList.remove("opacity-70", "cursor-not-allowed");
          });
      }

      function resetForm() {
        const successMsg = document.getElementById("successMessage");
        const submitBtn = document.getElementById("submitBtn");
        const btnText = submitBtn.querySelector("span");
        const btnIcon = submitBtn.querySelector("iconify-icon:not(#btnLoader)");
        const loader = document.getElementById("btnLoader");

        // Hide overlay
        successMsg.classList.add("opacity-0", "pointer-events-none");

        // Reset Button State
        btnText.textContent = "Send Inquiry";
        btnIcon.classList.remove("hidden");
        loader.classList.add("hidden");
        submitBtn.disabled = false;
        submitBtn.classList.remove("opacity-70", "cursor-not-allowed");
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
      
<div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] -z-10 pointer-events-none animate-pulse mix-blend-screen"></div>
<div className="fixed inset-0 bg-grid-white opacity-20 pointer-events-none -z-10 mask-radial-faded"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-10 h-10 flex items-center justify-center">

<svg className="group-hover:scale-105 transition-transform duration-300" fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<rect fill="rgba(15, 23, 42, 0.5)" height="36" rx="4" stroke="url(#paint0_linear)" strokeWidth="1.5" width="36" x="2" y="2"></rect>
<path d="M8 8L32 32M8 32L32 8" stroke="url(#paint1_linear)" stroke-opacity="0.3" strokeWidth="1"></path>
<path d="M20 4V36M4 20H36" stroke="url(#paint1_linear)" stroke-opacity="0.3" strokeWidth="1"></path>
<path d="M13 28L20 8L27 28M15.5 22H24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="0" x2="40" y1="0" y2="40">
<stop stop-color="#3b82f6"></stop>
<stop offset="1" stop-color="#a855f7"></stop>
</lineargradient>
<lineargradient gradientunits="userSpaceOnUse" id="paint1_linear" x1="0" x2="40" y1="0" y2="40">
<stop stop-color="#3b82f6"></stop>
<stop offset="1" stop-color="#a855f7"></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-white leading-none">
              AI
              <span className="font-light text-slate-300">WEBSITE</span>
</span>
<span className="text-base font-semibold tracking-tight text-white leading-none mt-0.5">
              STUDIO
            </span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-200" href="#about">
            Method
          </a>
<a className="hover:text-white transition-colors duration-200" href="#services">
            Services
          </a>
<a className="hover:text-white transition-colors duration-200" href="#work">
            Work
          </a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">
            Pricing
          </a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.08] border border-white/10 text-xs font-semibold text-white hover:bg-white/[0.12] transition-all hover:border-white/20 group" href="#contact">
          Start Project
          <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</a>

<button className="md:hidden text-slate-300 hover:text-white" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden z-40" id="mobile-menu">
<div className="flex flex-col gap-6 text-sm text-slate-400">
<a className="hover:text-white" href="#about">Method</a>
<a className="hover:text-white" href="#services">Services</a>
<a className="hover:text-white" href="#work">Work</a>
<a className="hover:text-white" href="#pricing">Pricing</a>
<a className="text-indigo-400 font-semibold" href="#contact">
            Start Project
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden perspective-container">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-600/15 rounded-full blur-[130px] -z-10 opacity-50 pointer-events-none mix-blend-screen animate-pulse"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[130px] -z-10 pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-[11px] tracking-wide uppercase text-indigo-300 font-medium shadow-[0_0_20px_rgba(99,102,241,0.2)] ring-1 ring-indigo-500/30">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Accepting New Projects
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient drop-shadow-2xl">
            Intelligent design for modern business.
          </h1>
<p className="text-lg text-slate-400 max-w-md leading-relaxed">
            Premium, high-performance websites built with AI-assisted workflows
            and clean code. No bloat, just measurable results.
          </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-3.5 rounded-lg bg-white text-background text-sm font-semibold hover:bg-slate-200 transition-colors text-center shadow-lg shadow-white/5" href="#contact">
              Get a Website
            </a>
<a className="px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors text-center backdrop-blur-sm" href="#work">
              View Portfolio
            </a>
</div>
</div>

<div className="relative hidden lg:block h-[500px] w-full animate-float">
<div className="absolute inset-0 flex items-center justify-center">

<div className="w-[520px] h-[360px] bg-slate-900 border border-white/10 rounded-xl hero-tilt relative z-10 overflow-hidden shadow-2xl">

<div className="h-9 border-b border-white/10 flex items-center px-4 gap-2 bg-slate-800/50 backdrop-blur-md">
<div className="w-2.5 h-2.5 rounded-full bg-rose-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
</div>

<div className="p-6 grid grid-cols-3 gap-5 h-full bg-slate-950/50">
<div className="col-span-2 space-y-5">
<div className="h-28 rounded-lg bg-white/5 w-full"></div>
<div className="h-8 rounded-lg bg-white/5 w-3/4"></div>
<div className="space-y-2.5">
<div className="h-2 rounded-full bg-white/5 w-full"></div>
<div className="h-2 rounded-full bg-white/5 w-5/6"></div>
</div>
<div className="flex gap-3 mt-4">
<div className="h-10 w-24 rounded-md bg-indigo-500/20"></div>
<div className="h-10 w-24 rounded-md bg-white/5"></div>
</div>
</div>
<div className="col-span-1 space-y-5">
<div className="h-32 rounded-lg bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 w-full"></div>
<div className="h-12 rounded-lg bg-white/5 w-full"></div>
<div className="h-12 rounded-lg bg-white/5 w-full"></div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="absolute -right-12 top-10 p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl animate-float-delayed" style={{transform: 'translateZ(50px)'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/20">
<iconify-icon className="text-emerald-400" icon="lucide:zap" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      Performance
                    </div>
<div className="text-base font-bold text-white">100/100</div>
</div>
</div>
</div>
<div className="absolute -left-8 bottom-16 p-4 rounded-xl bg-slate-900/90 border border-white/10 backdrop-blur-md shadow-2xl animate-float" style={{transform: 'translateZ(30px)'}}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="lucide:code-2" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      Clean Code
                    </div>
<div className="text-sm font-bold text-white">
                      Tailwind + HTML
                    </div>
</div>
</div>
</div>
</div>

<div className="absolute w-[480px] h-[320px] bg-slate-800/20 border border-white/5 rounded-xl hero-tilt -z-10 translate-x-10 translate-y-10 blur-[2px]"></div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-background relative" id="about">
<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/2 -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-16 items-start reveal">
<div className="lg:col-span-4 sticky top-24">
<h2 className="text-3xl font-semibold tracking-tight mb-5 text-white">
              The new standard.
            </h2>
<p className="text-slate-400 leading-relaxed text-sm">
              AI Website Studio bridges the gap between expensive agencies and
              generic page builders. By leveraging AI for rapid prototyping and
              asset generation, combined with expert hand-coding, I deliver
              agency-quality work at a fraction of the time and cost.
            </p>
</div>
<div className="lg:col-span-8 grid md:grid-cols-2 gap-6">

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon className="text-indigo-400" icon="lucide:user" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">
                Direct Partnership
              </h3>
<p className="text-sm text-slate-400">
                You work directly with the developer. No middlemen, no
                miscommunication.
              </p>
</div>

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon className="text-purple-400" icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">
                AI-Enhanced Workflow
              </h3>
<p className="text-sm text-slate-400">
                Utilizing advanced generative models for copywriting, imagery,
                and layout ideation.
              </p>
</div>

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-400" icon="lucide:code-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">Clean Code</h3>
<p className="text-sm text-slate-400">
                Semantic HTML and Tailwind CSS optimized for SEO and
                accessibility.
              </p>
</div>

<div className="p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
<iconify-icon className="text-amber-400" icon="lucide:zap" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white mb-2">
                Performance First
              </h3>
<p className="text-sm text-slate-400">
                Instant load times and smooth 60fps animations on all modern
                devices.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
            Capabilities
          </h2>
<p className="text-slate-400">
            Comprehensive design and development solutions.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:layout" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Custom Web Design
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Tailored aesthetics that match your brand identity, avoiding
              generic templates.
            </p>
</div>

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              AI-Driven Assets
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Generation of unique copy, imagery, and icons using the latest AI
              models.
            </p>
</div>

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:monitor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Landing Pages</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              High-conversion single-page sites designed to capture leads
              effectively.
            </p>
</div>

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:building-2" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Corporate Sites</h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Complete multi-page presence for small to medium-sized
              enterprises.
            </p>
</div>

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:shopping-bag" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              E-commerce Integration
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Seamless setup of Stripe, Shopify, or LemonSqueezy for digital
              sales.
            </p>
</div>

<div className="group p-8 gradient-border card-3d">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-white" icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">
              Mobile Optimization
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              Ensuring perfect layout and interaction on phones and tablets.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950/50" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
            Transparent Pricing
          </h2>
<p className="text-slate-400">
            One-time payments. No hidden monthly fees.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto reveal">

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col hover:border-white/10 transition-all">
<div className="mb-6">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Basic
              </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$99</span>
</div>
<p className="mt-2 text-xs text-slate-500">
                Perfect for personal profiles.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                1-page custom website
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Responsive design
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Delivery in 3 days
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                2 Revisions
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-center transition-colors text-white" href="#contact" onclick="prefillPackage('Basic Package')">
              Select Basic
            </a>
</div>

<div className="p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] flex flex-col relative shadow-2xl shadow-indigo-500/10 scale-105 z-10">
<div className="absolute top-0 right-0 p-3">
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500/20 text-indigo-300">
                RECOMMENDED
              </span>
</div>
<div className="mb-6">
<h3 className="text-xs font-semibold text-indigo-300 uppercase tracking-wide">
                Standard
              </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$179</span>
</div>
<p className="mt-2 text-xs text-slate-500">For growing businesses.</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Up to 3 pages
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Content upload included
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Contact form setup
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Delivery in 5 days
              </li>
<li className="flex items-center gap-3 text-sm text-slate-200">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                4 Revisions
              </li>
</ul>
<a className="w-full py-3 rounded-lg bg-white text-background hover:bg-slate-200 text-sm font-semibold text-center transition-colors" href="#contact" onclick="prefillPackage('Standard Package')">
              Select Standard
            </a>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-white/[0.01] flex flex-col hover:border-white/10 transition-all">
<div className="mb-6">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Premium
              </h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white">$299</span>
</div>
<p className="mt-2 text-xs text-slate-500">
                Full featured &amp; E-commerce.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Up to 5 pages
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Advanced Speed Optimization
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Basic E-commerce setup
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                Delivery in 7 days
              </li>
<li className="flex items-center gap-3 text-sm text-slate-300">
<iconify-icon className="text-indigo-400 shrink-0" icon="lucide:check" strokeWidth="2" width="16"></iconify-icon>
                6 Revisions
              </li>
</ul>
<a className="w-full py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-sm font-medium text-center transition-colors text-white" href="#contact" onclick="prefillPackage('Premium Package')">
              Select Premium
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
              Selected Work
            </h2>
<p className="text-slate-400">
              Recent projects crafted with precision.
            </p>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 reveal active">

<a className="group relative flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-2" href="https://fitcoachpro.vly.site/" target="_blank">
<div className="relative h-56 w-full overflow-hidden bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-slate-900 to-slate-950 transition-transform duration-700 group-hover:scale-105 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400 text-2xl" icon="lucide:activity" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/5 text-[10px] font-semibold text-white uppercase tracking-wider shadow-sm">
                Live Demo
              </div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<div className="p-2 rounded-full bg-indigo-600 text-white shadow-lg">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                FitCoachPro
              </h3>
<p className="text-xs text-indigo-400 font-medium mb-3 uppercase tracking-wide">
                Fitness Website
              </p>
<p className="text-sm text-slate-400 leading-relaxed">
                Modern fitness coaching platform featuring class schedules and
                trainer profiles.
              </p>
</div>
</a>

<a className="group relative flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2" href="https://serviceprosolutions.vly.site/" target="_blank">
<div className="relative h-56 w-full overflow-hidden bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-slate-900 to-slate-950 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400 text-2xl" icon="lucide:briefcase" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/5 text-[10px] font-semibold text-white uppercase tracking-wider shadow-sm">
                Live Demo
              </div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<div className="p-2 rounded-full bg-blue-600 text-white shadow-lg">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                ServicePro Solutions
              </h3>
<p className="text-xs text-blue-400 font-medium mb-3 uppercase tracking-wide">
                Business Services
              </p>
<p className="text-sm text-slate-400 leading-relaxed">
                Clean, trustworthy corporate site design for service-based
                businesses.
              </p>
</div>
</a>

<a className="group relative flex flex-col bg-slate-900/40 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2" href="https://nexaai.vly.site/" target="_blank">
<div className="relative h-56 w-full overflow-hidden bg-slate-800">
<div className="absolute inset-0 bg-gradient-to-bl from-purple-900/40 via-slate-900 to-slate-950 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center shadow-lg group-hover:bg-purple-500/20 transition-colors">
<iconify-icon className="text-purple-400 text-2xl" icon="lucide:sparkles" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-purple-500/20 backdrop-blur-md border border-purple-500/20 text-[10px] font-semibold text-purple-200 uppercase tracking-wider shadow-sm">
                Live Demo
              </div>
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<div className="p-2 rounded-full bg-purple-600 text-white shadow-lg">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="p-6 flex-1 flex flex-col">
<h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-colors">
                NexaAI
              </h3>
<p className="text-xs text-purple-400 font-medium mb-3 uppercase tracking-wide">
                SaaS Landing Page
              </p>
<p className="text-sm text-slate-400 leading-relaxed">
                Futuristic, high-conversion landing page for AI startups.
              </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-white/[0.005]">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
            How it works
          </h2>
<p className="text-slate-400">Simple, streamlined, and efficient.</p>
</div>
<div className="relative max-w-4xl mx-auto reveal">

<div className="absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10 mb-4 shadow-xl ring-4 ring-background">
<span className="text-indigo-400 font-semibold">01</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Share Goals</h3>
<p className="text-xs text-slate-500 px-2">
                Fill out the brief requirements.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10 mb-4 shadow-xl ring-4 ring-background">
<span className="text-indigo-400 font-semibold">02</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">
                Design &amp; Build
              </h3>
<p className="text-xs text-slate-500 px-2">
                I create the initial version.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10 mb-4 shadow-xl ring-4 ring-background">
<span className="text-indigo-400 font-semibold">03</span>
</div>
<h3 className="text-sm font-medium text-white mb-2">Review</h3>
<p className="text-xs text-slate-500 px-2">
                Refine based on your feedback.
              </p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10 mb-4 shadow-xl ring-4 ring-background">
<iconify-icon className="text-green-400" icon="lucide:check" strokeWidth="3" width="16"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Launch</h3>
<p className="text-xs text-slate-500 px-2">
                Final delivery and setup.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-background relative">
<div className="max-w-4xl mx-auto px-6 reveal">
<h2 className="text-3xl font-semibold tracking-tight mb-12 text-center text-white">
          Frequently Asked Questions
        </h2>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
<div>
<h3 className="text-base font-medium text-white mb-2">
              Q: What type of websites do you create?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              A: We create AI-powered websites including business websites,
              influencer and personal brand sites, landing pages, and
              service-based websites, focused on performance and clean design.
            </p>
</div>
<div>
<h3 className="text-base font-medium text-white mb-2">
              Q: How long does it take to build a website?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              A: Most websites are completed within a few days, depending on the
              project scope and required features.
            </p>
</div>
<div>
<h3 className="text-base font-medium text-white mb-2">
              Q: Do I need to buy a domain or hosting?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              A: A domain is optional. We can work with or without a custom
              domain depending on your preference.
            </p>
</div>
<div>
<h3 className="text-base font-medium text-white mb-2">
              Q: Can the website be updated later?
            </h3>
<p className="text-sm text-slate-400 leading-relaxed">
              A: Yes. The website can be improved, expanded, or redesigned in
              the future as your needs grow.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-slate-950 relative overflow-hidden" id="contact">

<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-white">
            Start your project
          </h2>
<p className="text-slate-400">
            Fill out the form below to get a custom quote and timeline.
          </p>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden">

<div className="absolute inset-0 bg-slate-950/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center opacity-0 pointer-events-none transition-all duration-500" id="successMessage">
<div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
<iconify-icon className="text-green-400 text-3xl" icon="lucide:check" strokeWidth="2"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">
              Message Received!
            </h3>
<p className="text-slate-400 text-sm text-center max-w-xs px-4">
              I've sent a confirmation to your email. I'll review your project
              details and respond shortly.
            </p>
<button className="mt-8 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white hover:bg-white/10 transition-colors" onclick="resetForm()">
              Start another project
            </button>
</div>
<form className="space-y-6" id="contactForm" onsubmit="sendEmail(event)">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wide ml-1" htmlFor="name">
                Name
              </label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white input-premium placeholder-slate-600 focus:placeholder-slate-500" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wide ml-1" htmlFor="email">
                Email
              </label>
<input className="w-full px-4 py-3 rounded-lg text-sm text-white input-premium placeholder-slate-600 focus:placeholder-slate-500" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wide ml-1" htmlFor="package">
                Project Package
              </label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg text-sm text-white input-premium appearance-none bg-[#0a0f1d] cursor-pointer" id="package" name="package" required="">
<option className="bg-surface text-slate-400" disabled="" selected="" value="">
                    Select a package
                  </option>
<option className="bg-surface text-white" value="Basic Package">
                    Basic Package ($99)
                  </option>
<option className="bg-surface text-white" value="Standard Package">
                    Standard Package ($179)
                  </option>
<option className="bg-surface text-white" value="Premium Package">
                    Premium Package ($299)
                  </option>
<option className="bg-surface text-white" value="Custom Inquiry">
                    Custom Inquiry
                  </option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-slate-300 uppercase tracking-wide ml-1" htmlFor="details">
                Project Details
              </label>
<textarea className="w-full px-4 py-3 rounded-lg text-sm text-white input-premium placeholder-slate-600 focus:placeholder-slate-500 resize-none" id="details" name="details" placeholder="Tell me about your business and website goals..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-white/5" id="submitBtn" type="submit">
<span>Send Inquiry</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="2" width="16"></iconify-icon>

<iconify-icon className="animate-spin hidden" icon="lucide:loader-2" id="btnLoader" width="18"></iconify-icon>
</button>
<p className="text-xs text-red-400 text-center hidden mt-2" id="errorMessage">
              Failed to send message. Please try again later.
            </p>
</form>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-background">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">

<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center overflow-hidden">
<svg fill="none" height="24" viewbox="0 0 40 40" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="36" rx="4" stroke="white" stroke-opacity="0.2" strokeWidth="2" width="36" x="2" y="2"></rect>
<path d="M13 28L20 8L27 28M15.5 22H24.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
</svg>
</div>
<span className="text-sm font-medium text-slate-300">
            AI Website Studio
          </span>
</div>
<div className="text-xs text-slate-500">
          ©
          <span id="year"></span>
          AI Website Studio. All rights reserved.
        </div>
</div>
</footer>



    </>
  );
}
