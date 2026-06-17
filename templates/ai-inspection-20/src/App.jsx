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
            
            // 1. Scroll Animations
            const observerOptions = {
                threshold: 0.15,
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        
                        // Trigger counters if this is the stats section
                        if(entry.target.querySelector('.counter')) {
                            startCounters();
                        }
                        
                        // Trigger typewriter if this is the ARIA section
                        if(entry.target.querySelector('#typewriter')) {
                            startTypewriter();
                        }

                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

            // 2. Animated Counters
            let countersStarted = false;
            function startCounters() {
                if(countersStarted) return;
                countersStarted = true;
                
                const counters = document.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = +counter.getAttribute('data-target');
                    const duration = 2000; // ms
                    const increment = target / (duration / 16); // 60fps
                    
                    let current = 0;
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

            // 3. Typewriter Effect
            let typewriterStarted = false;
            function startTypewriter() {
                if(typewriterStarted) return;
                typewriterStarted = true;

                const text = "Visual inspection of shell exterior revealed minor localized pitting, approx 3mm depth, at 6 o'clock position. No active corrosion observed. Recommend UT monitoring at next interval per API 510 6.4.";
                const element = document.getElementById('typewriter');
                element.classList.add('typing-cursor');
                
                let i = 0;
                const speed = 30; // ms per char

                function type() {
                    if (i < text.length) {
                        element.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(type, speed);
                    } else {
                        // Show flags after typing is done
                        document.querySelectorAll('.reveal-flag').forEach(flag => {
                            flag.classList.remove('opacity-0');
                        });
                        element.classList.remove('typing-cursor');
                    }
                }
                type();
            }

            // 4. Smooth Scroll for Nav
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
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
      

<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-all duration-300" id="header">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-2 group cursor-pointer">
<div className="flex group-hover:bg-[#D97706] transition-colors duration-300 bg-[#D97706]/10 w-10 h-10 rounded-lg items-center justify-center">
<iconify-icon className="text-[#D97706] group-hover:text-white transition-colors text-2xl" icon="solar:microscope-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-[#111827]">Inspect<span className="text-[#D97706]">Systems</span></span>
</div>

<nav className="hidden lg:flex gap-8">
<a className="text-sm font-medium text-[#6B7280] hover:text-[#D97706] transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#D97706] transition-colors" href="#modules">Modules</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#D97706] transition-colors" href="#aria">ARIA AI</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#D97706] transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-[#6B7280] hover:text-[#D97706] transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="flex items-center gap-4">
<button className="hidden sm:block text-sm font-medium text-[#6B7280] hover:text-[#111827] border border-gray-200 px-4 py-2 rounded-lg hover:border-gray-300 transition-all">Log In</button>
<button className="bg-[#D97706] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:bg-[#B45309] hover:-translate-y-0.5 transition-all duration-200 shadow-[#D97706]/20">Book a Demo</button>
</div>
</div>
</div>
</header>

<section className="relative bg-gradient-to-br from-[#1F2937] to-[#374151] pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 grid-pattern"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<h1 className="text-4xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        Stop Retyping <br/> Inspection Reports. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#F59E0B]">Start Delivering Them.</span>
</h1>
<p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                        AI-powered workflows that cut reporting time by 70% for PSV, Visual External, and UT inspections. API 510/570 compliant. Built for Alberta NDE companies.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<button className="bg-[#D97706] text-white text-base font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:bg-[#B45309] hover:shadow-[#D97706]/30 transition-all duration-200">Book a Demo</button>
<button className="border border-white/20 text-white text-base font-medium px-8 py-3.5 rounded-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                            See How It Works
                        </button>
</div>

<div className="flex flex-wrap gap-6 items-center text-sm font-medium text-gray-400 border-t border-gray-700 pt-8">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#059669] text-lg" icon="solar:verified-check-linear"></iconify-icon>
                            API 510/570 Compliant
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#059669] text-lg" icon="solar:cloud-download-linear"></iconify-icon>
                            Offline-First
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#059669] text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                            Used by 78+ Inspectors
                        </div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center reveal-on-scroll delay-200">

<div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 animate-float z-10">

<div className="bg-[#1F2937] p-4 flex items-center justify-between border-b border-gray-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#D97706]" icon="solar:file-text-linear"></iconify-icon>
<span className="text-white text-xs font-medium">Vessel Inspection #4092</span>
</div>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
</div>
</div>

<div className="p-6 bg-gray-50 space-y-4">

<div className="w-full h-32 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{backgroundImage: 'url(\'data:image/svg+xml'}}></div> 
<iconify-icon className="text-gray-400 text-3xl mb-2" icon="solar:camera-linear"></iconify-icon>
<span className="text-xs text-gray-500">Scanning Nameplate...</span>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D97706]/20 to-transparent translate-y-[-100%] animate-[scan_3s_ease-in-out_infinite]"></div>
</div>

<div className="space-y-3">
<div className="space-y-1">
<div className="h-3 w-20 bg-gray-200 rounded animate-pulse"></div>
<div className="h-8 w-full bg-white border border-[#D97706]/50 rounded px-3 flex items-center text-sm text-gray-800 shadow-sm">
<span className="typing-text-1">V-102 Separator</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
<div className="h-8 w-full bg-white border border-green-500/30 rounded px-3 flex items-center text-sm text-gray-800">
<span>150 PSI</span>
<iconify-icon className="text-[#059669] ml-auto" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
<div className="h-8 w-full bg-white border border-gray-200 rounded px-3 flex items-center text-sm text-gray-800">
<span>2015</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-10 -right-4 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-float-delayed z-20">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
<iconify-icon className="text-blue-600 text-xl" icon="solar:scanner-linear"></iconify-icon>
</div>
<div className="">
<div className="text-xs font-semibold text-gray-900">OCR Complete</div>
<div className="text-[10px] text-gray-500">98% Confidence</div>
</div>
</div>

<div className="absolute bottom-20 -left-8 bg-white p-3 rounded-lg shadow-xl border border-gray-100 flex items-center gap-3 animate-float z-20">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
<iconify-icon className="text-[#D97706] text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-gray-900">QC Alert</div>
<div className="text-[10px] text-gray-500">MAWP Mismatch</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F9FAFB] py-20 border-b border-gray-200">
<div className="absolute inset-0 industrial-texture"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="text-center reveal-on-scroll">
<div className="text-4xl lg:text-5xl font-semibold text-[#D97706] mb-2 tracking-tight flex justify-center items-baseline">
<span className="counter" data-target="70">0</span>%
                    </div>
<div className="text-sm font-medium text-[#111827] uppercase tracking-wide">Faster Reports</div>
</div>

<div className="text-center reveal-on-scroll delay-100">
<div className="text-4xl lg:text-5xl font-semibold text-[#D97706] mb-2 tracking-tight">Same Day</div>
<div className="text-sm font-medium text-[#111827] uppercase tracking-wide">From 5 Days</div>
</div>

<div className="text-center reveal-on-scroll delay-200">
<div className="text-4xl lg:text-5xl font-semibold text-[#D97706] mb-2 tracking-tight flex justify-center items-baseline">
<span className="counter" data-target="3">0</span>
</div>
<div className="text-sm font-medium text-[#111827] uppercase tracking-wide">Inspection Types</div>
</div>

<div className="text-center reveal-on-scroll delay-300">
<div className="text-4xl lg:text-5xl font-semibold text-[#D97706] mb-2 tracking-tight">Zero</div>
<div className="text-sm font-medium text-[#111827] uppercase tracking-wide">Manual Retyping</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#1F2937] tracking-tight mb-4">Why Inspection Teams Switch to InspectSystems</h2>
<p className="text-lg text-[#6B7280]">Replace fragmented tools and spreadsheets with a unified platform built for speed and compliance.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#D97706]/5 hover:-translate-y-2 transition-all duration-300 reveal-on-scroll">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-2xl" icon="solar:smartphone-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">AI-Powered Data Entry</h3>
<p className="text-[#6B7280] leading-relaxed">Point your phone at a service tag. Our OCR reads it, our AI classifies the photo, and the form fills itself.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#D97706]/5 hover:-translate-y-2 transition-all duration-300 reveal-on-scroll delay-100">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-2xl" icon="solar:document-add-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Professional Reports in Clicks</h3>
<p className="text-[#6B7280] leading-relaxed">Generate client-ready PDFs with all photos, findings, and compliance documentation. One click from field to inbox.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-[#D97706]/5 hover:-translate-y-2 transition-all duration-300 reveal-on-scroll delay-200">
<div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D97706] to-[#B45309] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-white text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-[#111827] mb-3">Built-In Quality Control</h3>
<p className="text-[#6B7280] leading-relaxed">ARIA catches spelling errors, vague comments, and code violations before your report goes out.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1F2937] border-y-4 border-[#D97706]" id="modules">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
<h2 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-4">Modular. Scalable. Buy Only What You Need.</h2>
<p className="text-lg text-gray-400">Select the inspection modules that fit your NDE workflow.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="bg-[#F9FAFB] rounded-xl p-8 hover:transform hover:scale-[1.02] transition-all reveal-on-scroll">
<div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 text-[#1F2937]">
<iconify-icon className="text-2xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#111827] mb-2">Visual External</h3>
<p className="text-[#6B7280] mb-6 text-sm">Shell/head/nozzle documentation and corrosion mapping.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Photo classification
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Code-compliant comments
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Deficiency tracking
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-300 text-[#111827] font-semibold hover:border-[#D97706] hover:text-[#D97706] transition-colors">Book a Demo</button>
</div>

<div className="bg-white rounded-xl p-8 transform scale-105 shadow-2xl border-2 border-[#D97706] relative reveal-on-scroll z-10">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#D97706] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</div>
<div className="h-12 w-12 bg-[#D97706] rounded-lg flex items-center justify-center mb-6 text-white shadow-lg shadow-[#D97706]/30">
<iconify-icon className="text-2xl" icon="solar:valve-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#111827] mb-2">PSV Inspection</h3>
<p className="text-[#6B7280] mb-6 text-sm">Complete PSV workflow with automated validation.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Tag Photo OCR
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Set pressure validation
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Pop test recording
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-[#D97706] text-white font-semibold hover:bg-[#B45309] transition-colors shadow-md">Book a Demo</button>
</div>

<div className="bg-[#F9FAFB] rounded-xl p-8 hover:transform hover:scale-[1.02] transition-all reveal-on-scroll">
<div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center mb-6 text-[#1F2937]">
<iconify-icon className="text-2xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-[#111827] mb-2">Ultrasonic Testing</h3>
<p className="text-[#6B7280] mb-6 text-sm">Thickness recording, trending, and life estimates.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            TML grid management
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Corrosion rate calculation
                        </li>
<li className="flex items-start gap-3 text-sm text-[#111827]">
<iconify-icon className="text-[#D97706] mt-0.5" icon="solar:check-circle-bold"></iconify-icon>
                            Remaining life estimates
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-300 text-[#111827] font-semibold hover:border-[#D97706] hover:text-[#D97706] transition-colors">Book a Demo</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0f172a] relative overflow-hidden" id="aria">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#D97706]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2"></div>
<div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#059669]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<h2 className="text-4xl font-semibold text-white mb-2 tracking-tight">Meet <span className="text-[#D97706]">ARIA</span></h2>
<p className="text-lg italic text-[#6B7280] mb-6">Autonomous Reporting Intelligence Agent</p>
<p className="text-gray-300 mb-10 leading-relaxed text-lg">
                        Your AI co-pilot. ARIA analyzes your photos and data in real-time to prevent errors, suggest compliant language, and ensure every report meets standard.
                    </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D97706] to-[#B45309] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:chat-square-code-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Smart Comments</h4>
<p className="text-sm text-gray-500">Auto-generates text based on findings.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D97706] to-[#B45309] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:book-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Built-in Codebook</h4>
<p className="text-sm text-gray-500">API 510/570 references on demand.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D97706] to-[#B45309] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">NCR Detection</h4>
<p className="text-sm text-gray-500">Flags code violations instantly.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#D97706] to-[#B45309] flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:magic-stick-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">One-Click Fixes</h4>
<p className="text-sm text-gray-500">Corrects spelling and vagueness.</p>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-200">
<div className="bg-[#1e293b] border border-gray-700 rounded-xl overflow-hidden shadow-2xl">

<div className="px-6 py-4 border-b border-gray-700 bg-[#111827] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] flex items-center justify-center text-white text-xs font-bold">AI</div>
<span className="text-gray-200 font-medium text-sm">ARIA Assistant</span>
</div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse"></span>
<span className="text-[#059669] text-xs font-medium">Active</span>
</div>
</div>

<div className="p-6 space-y-6 h-[400px] flex flex-col">

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gray-600 flex-shrink-0 flex items-center justify-center text-white text-xs">Me</div>
<div className="bg-gray-700 rounded-lg rounded-tl-none p-3 text-sm text-gray-200 max-w-[80%]">
                                    Found pitting on the bottom head. About 3mm deep.
                                </div>
</div>

<div className="flex gap-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#D97706] to-[#F59E0B] flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">AI</div>
<div className="bg-[#111827] border border-gray-700 rounded-lg rounded-tl-none p-4 w-full">
<div className="text-gray-400 text-xs mb-2">SUGGESTED COMMENT (API 510)</div>
<div className="text-sm text-gray-100 font-mono leading-relaxed" id="typewriter"></div>

<div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-gray-700">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-red-500/10 text-red-400 text-xs font-medium border border-red-500/20 reveal-flag opacity-0 transition-opacity duration-500">
<iconify-icon icon="solar:danger-linear"></iconify-icon> 1 Potential NCR
                                        </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-yellow-500/10 text-yellow-400 text-xs font-medium border border-yellow-500/20 reveal-flag opacity-0 transition-opacity duration-500 delay-100">
<iconify-icon icon="solar:pen-linear"></iconify-icon> 2 Spelling
                                        </span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-blue-500/10 text-blue-400 text-xs font-medium border border-blue-500/20 reveal-flag opacity-0 transition-opacity duration-500 delay-200">
<iconify-icon icon="solar:question-circle-linear"></iconify-icon> 1 Vague
                                        </span>
</div>

<div className="flex gap-3 mt-4">
<button className="bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-semibold px-3 py-1.5 rounded transition-colors">Accept &amp; Insert</button>
<button className="border border-gray-600 text-gray-400 hover:text-white hover:border-gray-500 text-xs font-medium px-3 py-1.5 rounded transition-colors">Fix All Issues</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9FAFB] relative" id="process">
<div className="absolute inset-0 industrial-texture"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl lg:text-4xl font-semibold text-[#1F2937] tracking-tight mb-4">How InspectSystems Works</h2>
<p className="text-lg text-[#6B7280]">From field to client inbox in three steps.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-200 -z-10"></div>

<div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal-on-scroll">
<div className="w-10 h-10 bg-[#D97706] text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm relative z-10">1</div>
<h3 className="text-xl font-semibold text-[#111827] text-center mb-4">Capture in the Field</h3>
<p className="text-[#6B7280] text-center text-sm leading-relaxed">Mobile-friendly offline workflows for photos, readings, and observations. Syncs instantly when connected.</p>
</div>

<div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal-on-scroll delay-100">
<div className="w-10 h-10 bg-[#D97706] text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm relative z-10">2</div>
<h3 className="text-xl font-semibold text-[#111827] text-center mb-4">AI Structures Report</h3>
<p className="text-[#6B7280] text-center text-sm leading-relaxed">OCR reads tags, AI classifies photos, and data is organized into compliant formats automatically.</p>
</div>

<div className="relative bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal-on-scroll delay-200">
<div className="w-10 h-10 bg-[#D97706] text-white font-bold text-lg rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-sm relative z-10">3</div>
<h3 className="text-xl font-semibold text-[#111827] text-center mb-4">Send to Client</h3>
<p className="text-[#6B7280] text-center text-sm leading-relaxed">One-click PDF generation and email delivery. Reports arrive professionally formatted and error-free.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<span className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">Trusted by Industry Leaders</span>
</div>
<div className="relative bg-white p-10 border-l-4 border-[#D97706] shadow-lg rounded-r-xl reveal-on-scroll">
<iconify-icon className="text-gray-200 text-6xl absolute top-6 right-6" icon="solar:quote-up-square-linear"></iconify-icon>
<blockquote className="text-xl md:text-2xl font-medium text-[#111827] leading-relaxed mb-8 relative z-10">
                    "We went from 5-day report turnaround to <span className="text-[#D97706]">same-day delivery</span>. Our clients are blown away, and we've won three major contracts because we're the fastest in the region. The ROI paid for itself in the first month."
                </blockquote>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">MR</div>
<div>
<div className="text-[#111827] font-semibold">Mike Richardson</div>
<div className="text-[#6B7280] text-sm">Operations Director, Regional NDE Services (78 Inspectors)</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-br from-[#059669] to-[#047857] text-white text-center">
<div className="max-w-3xl mx-auto px-4">
<iconify-icon className="text-white/20 text-6xl mb-6" icon="solar:shield-check-bold"></iconify-icon>
<h2 className="text-3xl font-bold mb-4">30-Day Results Guarantee</h2>
<p className="text-lg text-green-50 mb-8 opacity-90">If InspectSystems doesn't cut your report turnaround time in half within 30 days, we'll refund your first month. No questions asked.</p>
<button className="bg-white text-[#059669] px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors shadow-lg">Get Started Risk-Free</button>
</div>
</section>

<section className="py-24 bg-[#1F2937] border-t-4 border-[#D97706]" id="pricing">
<div className="max-w-4xl mx-auto px-4 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Ready to See It In Action?</h2>
<p className="text-xl text-gray-300 mb-10">Book a 15-minute demo. We'll show you exactly how InspectSystems handles PSV, VE, and UT workflows for teams like yours.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-[#D97706] text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-[#B45309] transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                    Email Sales
                </button>
<button className="bg-transparent border border-gray-500 text-white text-lg font-semibold px-8 py-4 rounded-lg hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                    Call Now
                </button>
</div>
</div>
</section>

<footer className="bg-[#111827] py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#6B7280]" icon="solar:microscope-linear" width="24"></iconify-icon>
<span className="text-gray-400 font-semibold">InspectSystems</span>
</div>
<p className="text-gray-500 text-sm">© 2025 InspectSystems. All rights reserved.</p>
<p className="text-gray-600 text-sm">Pressure Equipment Inspection Software for Oil &amp; Gas</p>
</div>
</footer>



    </>
  );
}
