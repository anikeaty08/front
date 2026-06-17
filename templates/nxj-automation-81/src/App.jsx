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
gtag('config', 'G-4FNV3RCCB3');



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1582974095691939');
fbq('track', 'PageView');



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
    });



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      <img height="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{display: 'none'}} width="1"/>


<div className="aura-background-component fixed top-0 w-full h-screen -z-10 opacity-20" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="1149" style={{width: '100%', height: '100%'}} width="1963"></canvas></div></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-red-600/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
<main className="flex flex-col z-10 w-full pt-24 pb-20 relative items-center">

<section className="flex flex-col text-center w-full max-w-4xl mb-24 pt-20 pr-6 pb-20 pl-6 items-center">
<div className="text-red-500 w-24 h-24 mb-6 drop-shadow-[0_0_15px_rgba(239,68,68,0.3)]">
<img alt="Custom Logo" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5560bc93-dfc1-4e2b-bde8-f37876ae13ab_1600w.png"/>
</div>
<h1 className="md:text-6xl text-4xl font-semibold text-white tracking-tight mb-3">NXJ Automation</h1>
<h2 className="md:text-sm uppercase text-xs font-medium text-red-500 tracking-[0.2em] mb-8">SCALE A NEW OR EXISTING AMAZON STORE</h2>
<p className="md:text-xl leading-relaxed text-sm text-slate-400 max-w-2xl mb-10">We get you approved to sell name brand items, order at wholesale, repackage inventory, and ship everything for you within 24 hours.</p>
</section>


<section className="w-full max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6">
<div className="flex items-center gap-2 mb-8">
<i className="w-5 h-5 text-red-500" data-lucide="chevron-right" strokeWidth="1.5"></i>
<h3 className="md:text-2xl text-xl font-semibold text-white tracking-tight">How It Works</h3>
</div>
<div className="overflow-hidden bg-[#0a0a0d] border-slate-800 border rounded-xl shadow-2xl relative aspect-video w-full">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full border-0" src="https://player.vimeo.com/video/1166881972?title=0&amp;byline=0&amp;portrait=0" title="Embedded Video"></iframe>
</div>
</section><section className="w-full max-w-5xl mb-24 px-6">
<div className="flex items-center gap-2 mb-8">
<i className="w-5 h-5 text-red-500" data-lucide="chevron-right" strokeWidth="1.5"></i>
<h3 className="md:text-2xl text-xl font-semibold text-white tracking-tight">What We Do</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors">
<div className="w-8 h-8 mb-4 text-red-500">
<i className="w-full h-full" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Amazon Seller Account</h4>
<p className="leading-relaxed text-sm text-slate-400">We will create a new Amazon Seller account or manage an existing seller account for you.</p>
</div>

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors">
<div className="w-8 h-8 mb-4 text-red-500">
<i className="w-full h-full" data-lucide="database" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Brand Approvals</h4>
<p className="leading-relaxed text-sm text-slate-400">We get you approved and ungated to sell over 700 nationally recognized brands.</p>
</div>

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors">
<div className="w-8 h-8 mb-4 text-red-500">
<i className="w-full h-full" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Product Research</h4>
<p className="leading-relaxed text-sm text-slate-400">We find products that are in high demand, low competition, big profit margins and low return rates.</p>
</div>

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors">
<div className="w-8 h-8 mb-4 text-red-500">
<i className="w-full h-full" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Wholesale Inventory</h4>
<p className="leading-relaxed text-sm text-slate-400">Orders are placed through our suppliers directly from the manufacturers to our US based warehouse.</p>
</div>

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors relative overflow-hidden">
<div className="absolute right-0 top-1/2 -translate-y-1/2 text-red-500/20 translate-x-4">
</div>
<div className="z-10 text-red-500 w-8 h-8 mb-4 relative">
<i className="w-full h-full" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight z-10 mb-2 relative">Pack, Print &amp; Ship</h4>
<p className="leading-relaxed text-sm text-slate-400 z-10 relative">Every order through your seller account is packed, shipping label printed, and shipped by us  within 24 hours.</p>
</div>

<div className="bg-[#0c0c10] border border-slate-800/60 rounded-xl p-6 hover:bg-[#101014] transition-colors">
<div className="w-8 h-8 mb-4 text-red-500">
<i className="w-full h-full" data-lucide="blocks" strokeWidth="1.5"></i>
</div>
<h4 className="text-base font-semibold text-white tracking-tight mb-2">Customer Service</h4>
<p className="leading-relaxed text-sm text-slate-400">We handle any and all customer service inquiries, which include returns and time consuming disputes.</p>
</div>
</div>
</section><section className="w-full max-w-4xl mr-auto mb-24 ml-auto pr-6 pl-6">
<div className="flex flex-col relative items-center w-full">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="relative z-10 w-full flex flex-col items-center">
<div className="flex flex-col items-center text-center mb-10">
<div className="flex items-center justify-center gap-2 mb-3">
<svg className="lucide lucide-chevron-right w-5 h-5 text-red-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
<h3 className="md:text-2xl text-xl font-semibold text-white tracking-tight">Get Started</h3>
</div>
<p className="text-base text-slate-400 max-w-md">Fill out the form and talk to someone on our team.</p>
</div>

<div className="w-full max-w-3xl bg-[#0a0a0d] border border-slate-800/80 rounded-2xl p-6 md:p-10 shadow-2xl relative text-left" id="nxj-zoho-form">

<form accept-charset="UTF-8" action="https://forms.zohopublic.com/nxjmarketingllc/form/NXJAutomation/formperma/0UzweRQCw-_cducMqX30zMSCTlbPte6lL9s-zFuAmDw/htmlRecords/submit" className="" enctype="multipart/form-data" method="POST" name="form" onsubmit="javascript:document.charset='UTF-8'; return zf_ValidateAndSubmit();">
<input name="zf_referrer_name" type="hidden"/>
<input name="zf_redirect_url" type="hidden"/>
<input name="zc_gad" type="hidden"/>
<input name="utm_source" type="hidden"/>
<input name="utm_medium" type="hidden"/>
<input name="utm_campaign" type="hidden"/>
<input name="utm_term" type="hidden"/>
<input name="utm_content" type="hidden"/>

<div className="zf-tempFrmWrapper zf-name zf-namelarge mb-6">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-2">Name </label>
<div className="zf-tempContDiv zf-twoType grid grid-cols-1 md:grid-cols-2 gap-4">
<span><input className="w-full bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-4 placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="Name_First" placeholder="First Name" type="text"/></span>
<span><input className="w-full bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-4 placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="Name_Last" placeholder="Last Name" type="text"/></span>
</div>
</div>

<div className="zf-tempFrmWrapper mb-6">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-2">Email </label>
<div className="zf-tempContDiv">
<input className="w-full bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-4 placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="Email" placeholder="Email address" type="text"/>
</div>
</div>

<div className="zf-tempFrmWrapper zf-phone mb-8">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-2">Phone </label>
<div className="zf-tempContDiv zf-phonefld">
<div className="zfPhoneUSA flex gap-3">
<span><input className="w-[72px] bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-3 text-center placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="PhoneNumber_countrycode" placeholder="###" type="text"/></span>
<span className="flex items-center text-slate-600">-</span>
<span><input className="w-[72px] bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-3 text-center placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="PhoneNumber_first" placeholder="###" type="text"/></span>
<span className="flex items-center text-slate-600">-</span>
<span className="flex-1"><input className="w-full bg-[#101014] border border-slate-800/80 text-white rounded-xl h-12 px-4 placeholder:text-slate-500 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 outline-none transition-all text-sm" name="PhoneNumber_second" placeholder="####" type="text"/></span>
</div>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-sideBySide mb-8">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-3">Time Zone </label>
<div className="zf-tempContDiv grid grid-cols-2 md:grid-cols-3 gap-3">
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Hawaii"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Hawaii</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Pacific"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Pacific</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Arizona"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Arizona</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Mountain"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Mountain</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Central"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Central</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio" type="radio" value="Eastern"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="zf-radioChoice text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">Eastern</span>
</label>
</span>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-oneColumns mb-8">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-3">Liquid Funds </label>
<div className="zf-tempContDiv grid grid-cols-2 md:grid-cols-3 gap-3">
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$0 - $10K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$0 - $10K</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$10K - $20K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$10K - $20K</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$20K - $30K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$20K - $30K</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$30K - $40K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$30K - $40K</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$40K - $50K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$40K - $50K</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio3" type="radio" value="$50K+"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$50K+</span>
</label>
</span>
</div>
</div>

<div className="zf-radio zf-tempFrmWrapper zf-oneColumns mb-10">
<label className="zf-labelName block text-sm font-medium text-slate-300 mb-3">Available Credit </label>
<div className="zf-tempContDiv grid grid-cols-2 md:grid-cols-3 gap-3">
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$0 - $10K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$0 - $10K</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$10K - $20K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$10K - $20K</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$20K - $30K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$20K - $30K</span>
</label>
</span>
<span>
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$30K - $40K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$30K - $40K</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$40K - $50K"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$40K - $50K</span>
</label>
</span>
<span className="">
<label className="flex items-center gap-3 p-3 rounded-xl border border-slate-800/80 bg-[#101014] cursor-pointer hover:border-slate-700 transition-colors group relative">
<input className="peer sr-only" name="Radio1" type="radio" value="$50K+"/>
<div className="w-4 h-4 rounded-full border border-slate-600 peer-checked:border-red-500 flex items-center justify-center shrink-0">
<div className="w-2 h-2 rounded-full bg-red-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-sm text-slate-400 group-hover:text-slate-200 transition-colors peer-checked:text-white">$50K+</span>
</label>
</span>
</div>
</div>
<div className="pt-4 border-t border-slate-800/80">
<button aria-label="Submit Application" className="zf-submitColor w-full h-12 anim-btn outline-none font-semibold transition-all" title="Submit Application" type="submit">
<style>
    .anim-btn {
      --border-radius: 12px;
      --padding: 4px;
      --transition: 0.4s;
      --button-color: #101014;
      --highlight-color-hue: 0deg; /* Red to match theme */
      position: relative;
      user-select: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--button-color);
      box-shadow:
        inset 0px 1px 1px rgba(255, 255, 255, 0.2),
        inset 0px 2px 2px rgba(255, 255, 255, 0.15),
        inset 0px 4px 4px rgba(255, 255, 255, 0.1),
        inset 0px 8px 8px rgba(255, 255, 255, 0.05),
        inset 0px 16px 16px rgba(255, 255, 255, 0.05),
        0px -1px 1px rgba(0, 0, 0, 0.02),
        0px -2px 2px rgba(0, 0, 0, 0.03),
        0px -4px 4px rgba(0, 0, 0, 0.05),
        0px -8px 8px rgba(0, 0, 0, 0.06),
        0px -16px 16px rgba(0, 0, 0, 0.08);
      border: solid 1px #ffffff22;
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: box-shadow var(--transition), border var(--transition), background-color var(--transition);
      color: white;
      z-index: 1;
    }
    .anim-btn::before {
      content: "";
      position: absolute;
      top: calc(0px - var(--padding));
      left: calc(0px - var(--padding));
      width: calc(100% + var(--padding) * 2);
      height: calc(100% + var(--padding) * 2);
      border-radius: calc(var(--border-radius) + var(--padding));
      pointer-events: none;
      background-image: linear-gradient(0deg, #0004, #000a);
      z-index: -1;
      transition: box-shadow var(--transition), filter var(--transition);
      box-shadow: 0 -8px 8px -6px #0000 inset, 0 -16px 16px -8px #00000000 inset, 1px 1px 1px #fff2, 2px 2px 2px #fff1, -1px -1px 1px #0002, -2px -2px 2px #0001;
    }
    .anim-btn::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      background-image: linear-gradient(0deg, #fff, hsl(var(--highlight-color-hue), 100%, 70%), hsla(var(--highlight-color-hue), 100%, 70%, 50%), 8%, transparent);
      background-position: 0 0;
      opacity: 0;
      transition: opacity var(--transition), filter var(--transition);
      z-index: -1;
    }
    .anim-btn-letter {
      position: relative;
      display: inline-block;
      color: #ffffff55;
      animation: anim-btn-letter-anim 2s ease-in-out infinite;
      transition: color var(--transition), text-shadow var(--transition), opacity var(--transition);
    }
    @keyframes anim-btn-letter-anim {
      50% { text-shadow: 0 0 3px #ffffff88; color: #fff; }
    }
    .anim-btn-svg {
      flex-grow: 0;
      height: 20px;
      width: 20px;
      margin-right: 0.5rem;
      stroke: #e8e8e8;
      fill: none;
      animation: anim-btn-flicker 2s linear infinite;
      animation-delay: 0.5s;
      filter: drop-shadow(0 0 2px #ffffff99);
      transition: stroke var(--transition), filter var(--transition), opacity var(--transition);
    }
    @keyframes anim-btn-flicker {
      50% { opacity: 0.3; }
    }
    .anim-btn-txt-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      min-width: 6em;
      justify-content: center;
    }
    .anim-btn-txt-1, .anim-btn-txt-2 {
      position: absolute;
      display: flex;
    }
    .anim-btn-txt-1 { animation: anim-btn-appear-anim 1s ease-in-out forwards; }
    .anim-btn-txt-2 { opacity: 0; }
    @keyframes anim-btn-appear-anim { 0% { opacity: 0; } 100% { opacity: 1; } }
    .anim-btn:focus .anim-btn-txt-1, .anim-btn:focus-visible .anim-btn-txt-1 { animation: anim-btn-opacity-anim 0.3s ease-in-out forwards; animation-delay: 1s; }
    .anim-btn:focus .anim-btn-txt-2, .anim-btn:focus-visible .anim-btn-txt-2 { animation: anim-btn-opacity-anim 0.3s ease-in-out reverse forwards; animation-delay: 1s; }
    @keyframes anim-btn-opacity-anim { 0% { opacity: 1; } 100% { opacity: 0; } }
    .anim-btn:focus .anim-btn-letter, .anim-btn:focus-visible .anim-btn-letter { animation: anim-btn-focused-letter-anim 1s ease-in-out forwards, anim-btn-letter-anim 1.2s ease-in-out infinite; animation-delay: 0s, 1s; }
    @keyframes anim-btn-focused-letter-anim { 0%, 100% { filter: blur(0px); } 50% { transform: scale(2); filter: blur(10px) brightness(150%) drop-shadow(-36px 12px 12px hsl(var(--highlight-color-hue), 100%, 70%)); } }
    .anim-btn:focus .anim-btn-svg, .anim-btn:focus-visible .anim-btn-svg { animation-duration: 1.2s; animation-delay: 0.2s; }
    .anim-btn:focus::before, .anim-btn:focus-visible::before { box-shadow: 0 -8px 12px -6px #fff3 inset, 0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 20%) inset, 1px 1px 1px #fff3, 2px 2px 2px #fff1, -1px -1px 1px #0002, -2px -2px 2px #0001; }
    .anim-btn:focus::after, .anim-btn:focus-visible::after { opacity: 0.6; -webkit-mask-image: linear-gradient(0deg, #fff, transparent); mask-image: linear-gradient(0deg, #fff, transparent); filter: brightness(100%); }
    .anim-btn-letter:nth-child(1), .anim-btn:focus .anim-btn-letter:nth-child(1) { animation-delay: 0s; }
    .anim-btn-letter:nth-child(2), .anim-btn:focus .anim-btn-letter:nth-child(2) { animation-delay: 0.08s; }
    .anim-btn-letter:nth-child(3), .anim-btn:focus .anim-btn-letter:nth-child(3) { animation-delay: 0.16s; }
    .anim-btn-letter:nth-child(4), .anim-btn:focus .anim-btn-letter:nth-child(4) { animation-delay: 0.24s; }
    .anim-btn-letter:nth-child(5), .anim-btn:focus .anim-btn-letter:nth-child(5) { animation-delay: 0.32s; }
    .anim-btn-letter:nth-child(6), .anim-btn:focus .anim-btn-letter:nth-child(6) { animation-delay: 0.40s; }
    .anim-btn-letter:nth-child(7), .anim-btn:focus .anim-btn-letter:nth-child(7) { animation-delay: 0.48s; }
    .anim-btn-letter:nth-child(8), .anim-btn:focus .anim-btn-letter:nth-child(8) { animation-delay: 0.56s; }
    .anim-btn-letter:nth-child(9), .anim-btn:focus .anim-btn-letter:nth-child(9) { animation-delay: 0.64s; }
    .anim-btn-letter:nth-child(10), .anim-btn:focus .anim-btn-letter:nth-child(10) { animation-delay: 0.72s; }
    .anim-btn:active { border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.7); background-color: hsla(var(--highlight-color-hue), 50%, 20%, 0.5); }
    .anim-btn:active::before { box-shadow: 0 -8px 12px -6px #fffa inset, 0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.8) inset, 1px 1px 1px #fff4, 2px 2px 2px #fff2, -1px -1px 1px #0002, -2px -2px 2px #0001; }
    .anim-btn:active::after { opacity: 1; -webkit-mask-image: linear-gradient(0deg, #fff, transparent); mask-image: linear-gradient(0deg, #fff, transparent); filter: brightness(200%); }
    .anim-btn:active .anim-btn-letter { text-shadow: 0 0 1px hsla(var(--highlight-color-hue), 100%, 90%, 0.9); animation: none; }
    .anim-btn:hover { border: solid 1px hsla(var(--highlight-color-hue), 100%, 80%, 0.4); }
    .anim-btn:hover::before { box-shadow: 0 -8px 8px -6px #fffa inset, 0 -16px 16px -8px hsla(var(--highlight-color-hue), 100%, 70%, 0.3) inset, 1px 1px 1px #fff2, 2px 2px 2px #fff1, -1px -1px 1px #0002, -2px -2px 2px #0001; }
    .anim-btn:hover::after { opacity: 1; -webkit-mask-image: linear-gradient(0deg, #fff, transparent); mask-image: linear-gradient(0deg, #fff, transparent); }
    .anim-btn:hover .anim-btn-svg { stroke: #fff; filter: drop-shadow(0 0 3px hsl(var(--highlight-color-hue), 100%, 70%)) drop-shadow(0 -4px 6px #0009); animation: none; }
  </style>
<svg aria-hidden="true" className="anim-btn-svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
<path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path>
</svg>
<div className="anim-btn-txt-wrapper">
<div className="anim-btn-txt-1">
<span className="anim-btn-letter">S</span><span className="anim-btn-letter">u</span><span className="anim-btn-letter">b</span><span className="anim-btn-letter">m</span><span className="anim-btn-letter">i</span><span className="anim-btn-letter">t</span>
</div>
<div className="anim-btn-txt-2">
<span className="anim-btn-letter">S</span><span className="anim-btn-letter">u</span><span className="anim-btn-letter">b</span><span className="anim-btn-letter">m</span><span className="anim-btn-letter">i</span><span className="anim-btn-letter">t</span><span className="anim-btn-letter">t</span><span className="anim-btn-letter">i</span><span className="anim-btn-letter">n</span><span className="anim-btn-letter">g</span>
</div>
</div>
</button>
</div>
</form>
</div>
</div>
</div>
</section>






</main>

<footer className="w-full border-t border-slate-800/60 py-12 px-6 flex flex-col items-center text-center z-10 relative bg-[#030305]">
<p className="text-sm text-slate-500 mb-2">Built by <span className="font-medium text-red-500">NXJautomation</span> <i className="w-3 h-3 inline text-yellow-500" data-lucide="zap" strokeWidth="2"></i>, an automation platform with a <span className="text-red-400">mission</span>, by <a className="hover:text-white transition-colors text-slate-300" href="#">Nolan Johnson</a>.</p>
<p className="text-xs text-slate-600">Not affiliated with Meta, Instagram, Google or third-party logos shown.</p><p className="text-xs text-slate-600 mt-2 mb-2"><a className="hover:text-slate-400 transition-colors" href="https://nxjautomation.com/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a> • <a className="hover:text-slate-400 transition-colors" href="https://nxjautomation.com/earnings" rel="noopener noreferrer" target="_blank">Earnings Disclaimer</a> • <a className="hover:text-slate-400 transition-colors" href="https://nxjautomation.com/terms" rel="noopener noreferrer" target="_blank">Terms of Service</a></p>
</footer>

<form accept-charset="utf-8" action="https://www.facebook.com/tr/" method="post" style={{display: 'none'}} target="fb07479045156356882"><iframe id="fb07479045156356882" name="fb07479045156356882" src="about:blank"></iframe><input name="id"/><input name="ev"/><input name="dl"/><input name="rl"/><input name="if"/><input name="ts"/><input name="cd[buttonFeatures]"/><input name="cd[buttonText]"/><input name="cd[formFeatures]"/><input name="cd[pageFeatures]"/><input name="sw"/><input name="sh"/><input name="v"/><input name="r"/><input name="ec"/><input name="o"/><input name="ler"/><input name="cdl"/><input name="plt"/><input name="it"/><input name="coo"/><input name="es"/><input name="tm"/><input name="expv2[0]"/><input name="expv2[1]"/><input name="expv2[2]"/><input name="expv2[3]"/><input name="expv2[4]"/><input name="expv2[5]"/><input name="expv2[6]"/><input name="rqm"/></form>
    </>
  );
}
