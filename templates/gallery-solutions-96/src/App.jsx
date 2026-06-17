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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Package Selection Helper
        function selectPackage(pkg) {
            document.getElementById('radio-' + pkg).checked = true;
            document.getElementById('order-form').scrollIntoView({behavior: 'smooth'});
        }

        // Modal Logic
        function openModal() {
            const input = document.getElementById('domainInput');
            const errorMsg = document.getElementById('errorMsg');
            const modal = document.getElementById('contactModal');
            const display = document.getElementById('modalDomainDisplay');
            
            if(input.value.trim() === "") {
                input.focus();
                errorMsg.style.opacity = '1';
                setTimeout(() => errorMsg.style.opacity = '0', 3000);
                return;
            }

            display.textContent = input.value;
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
        }

        function closeModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            document.getElementById('submissionError').classList.add('hidden');
        }

        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Airtable Submission Logic (Main Form)
        async function submitFullOrder() {
            const btn = document.getElementById('orderBtn');
            const errorText = document.getElementById('orderError');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin"></iconify-icon> Processing...';
            btn.disabled = true;
            errorText.classList.add('hidden');

            const name = document.getElementById('orderName').value;
            const email = document.getElementById('orderEmail').value;
            const phone = document.getElementById('orderPhone').value;
            const url = document.getElementById('orderUrl').value;
            const notes = document.getElementById('orderNotes').value;
            const pkg = document.querySelector('input[name="package"]:checked')?.value || "None Selected";

            const airtableData = {
                fields: {
                    "Prenom": name.split(" ")[0], // Simple split for existing structure
                    "Nom": name.split(" ").slice(1).join(" ") || "",
                    "Email": email,
                    "Telephone": phone,
                    "domainInput": url,
                    "Notes": `Package: ${pkg}. Notes: ${notes}` // Combining for existing field compatibility
                }
            };

            const apiKey = "patRzwc4kQyMwqThs.5d865d13182db20efbd98125bef8759a30ccba698cc93a53e38ed48fc27e8a55";
            const baseId = "appYNuXINBkKOs188";
            const tableId = "tbltdjM56rR2U0xQn";
            const api_url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

            try {
                const response = await fetch(api_url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ records: [airtableData] })
                });

                if (response.ok) {
                    btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Information Received';
                    btn.classList.remove('bg-white', 'text-black', 'hover:bg-slate-200');
                    btn.classList.add('bg-green-600', 'text-white', 'hover:bg-green-500');
                    
                    setTimeout(() => {
                        // Reset form
                        document.querySelector('form').reset();
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.add('bg-white', 'text-black', 'hover:bg-slate-200');
                        btn.classList.remove('bg-green-600', 'text-white', 'hover:bg-green-500');
                        alert("Thank you! We have received your details. A consultant will contact you shortly to finalize payment and onboarding.");
                    }, 2000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error:', error);
                btn.innerHTML = originalText;
                btn.disabled = false;
                errorText.classList.remove('hidden');
            }
        }

        // Keep existing Modal Submit function for the header button
        async function submitToAirtable() {
            // ... (Logic kept same as before, simplified for brevity in this view, assumes code block 1 logic)
             const btn = document.getElementById('submitBtn');
            const errorText = document.getElementById('submissionError');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="solar:refresh-linear" class="animate-spin"></iconify-icon> Transmitting...';
            btn.disabled = true;
            errorText.classList.add('hidden');

            const domain = document.getElementById('domainInput').value; // Grabs from main input
            const prenom = document.getElementById('prenomInput').value;
            const nom = document.getElementById('nomInput').value;
            const email = document.getElementById('emailInput').value;
            const telephone = document.getElementById('phoneInput').value;

            const airtableData = {
                fields: {
                    "domainInput": domain,
                    "Prenom": prenom,
                    "Nom": nom,
                    "Email": email,
                    "Telephone": telephone
                }
            };

            const apiKey = "patRzwc4kQyMwqThs.5d865d13182db20efbd98125bef8759a30ccba698cc93a53e38ed48fc27e8a55";
            const baseId = "appYNuXINBkKOs188";
            const tableId = "tbltdjM56rR2U0xQn";
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ records: [airtableData] })
                });

                if (response.ok) {
                    btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Request Sent';
                    btn.classList.remove('bg-sky-600', 'hover:bg-sky-500');
                    btn.classList.add('bg-green-600', 'hover:bg-green-500');
                    
                    setTimeout(() => {
                        closeModal();
                        document.getElementById('prenomInput').value = '';
                        document.getElementById('nomInput').value = '';
                        document.getElementById('emailInput').value = '';
                        document.getElementById('phoneInput').value = '';
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.remove('bg-green-600', 'hover:bg-green-500');
                        btn.classList.add('bg-sky-600', 'hover:bg-sky-500');
                    }, 2000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                btn.innerHTML = originalText;
                btn.disabled = false;
                errorText.classList.remove('hidden');
            }
        }

        // Scroll Reveal
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');
            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;
                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };
            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll();
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex flex-col items-center group -space-y-1" href="#">
<div className="relative flex items-center justify-center mb-1">
<iconify-icon className="text-white group-hover:text-sky-500 transition-colors duration-500" height="24" icon="solar:code-square-linear" width="24"></iconify-icon>
<div className="absolute inset-0 bg-sky-500/50 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-[10px] font-bold tracking-widest text-white uppercase font-geist">GALLERY SOLUTIONS</span>
</a>
<div className="hidden md:flex gap-8 text-xs font-medium text-slate-400 gap-x-8 gap-y-8 items-center">
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#packages">Packages</a>
<a className="hover:text-white transition-colors duration-300" href="#order-form">Get Started</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-4 py-2 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300 shadow-[0_0_10px_rgba(14,165,233,0.1)]" onclick="document.getElementById('domainInput').focus()">
                    Get an Audit
                </button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-36 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-xs font-medium text-sky-200 mb-8 cursor-default active">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500"></span>
</span>
                Based in South Africa
            </div>

<h1 className="reveal delay-200 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 leading-[1.1] active">
                Modernize Your Digital Presence
            </h1>

<p className="reveal delay-300 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                We upgrade legacy websites and build custom digital solutions. Professional engineering for businesses that demand performance.
            </p>

<div className="reveal delay-300 max-w-md mx-auto relative group">
<div className="flex items-center p-1 bg-white/[0.03] border border-white/10 rounded-lg focus-within:border-sky-500/50 focus-within:ring-1 focus-within:ring-sky-500/20 transition-all shadow-inner">
<div className="pl-4 pr-2 text-slate-500 flex items-center">
<iconify-icon height="16" icon="solar:globe-linear" width="16"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none text-white placeholder-slate-600 text-sm focus:outline-none h-10 w-full min-w-0" id="domainInput" placeholder="yourcompany.co.za" type="text"/>
<button className="whitespace-nowrap px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2" onclick="openModal()">
                        Analyze Site
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</button>
</div>
<p className="absolute -bottom-6 left-0 w-full text-center text-[10px] text-sky-400 opacity-0 transition-opacity" id="errorMsg">Please enter a valid domain to proceed.</p>
</div>
</div>
</header>

<section className="py-24 border-y border-white/[0.06] bg-white/[0.01]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="reveal delay-100 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-sky-500/30 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-sky-200 mb-6 bg-sky-500/[0.1] rounded-lg border border-sky-500/[0.1]">
<iconify-icon height="22" icon="solar:refresh-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Website Upgrades</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Transform outdated legacy sites into modern, high-performance assets. We optimize for speed, SEO, and user experience.
                        </p>
</div>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-sky-500/30 transition-colors relative overflow-hidden" id="custom-dev">
<div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-sky-200 mb-6 bg-sky-500/[0.1] rounded-lg border border-sky-500/[0.1]">
<iconify-icon height="22" icon="solar:code-square-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Custom Web Development</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Tailored coding solutions. From React to Tailwind, we build scalable infrastructure that fits your specific business logic.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-sky-500/30 transition-colors relative overflow-hidden" id="solutions">
<div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-sky-200 mb-6 bg-sky-500/[0.1] rounded-lg border border-sky-500/[0.1]">
<iconify-icon height="22" icon="solar:layers-minimalistic-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Digital Solutions</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Full-stack integration, CRM connections, and automated workflows. We solve complex problems with clean code.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-sky-500/30 transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-sky-200 mb-6 bg-sky-500/[0.1] rounded-lg border border-sky-500/[0.1]">
<iconify-icon height="22" icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Based in South Africa</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Local expertise, global standards. We understand the South African market and deliver world-class web engineering.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Our Process.</h2>
<div className="max-w-3xl">
<p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                        We don't just build websites; we engineer digital ecosystems. Our approach is rooted in technical excellence, modern frameworks, and measurable results for our clients.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors" href="#packages">
                        View Packages <iconify-icon height="14" icon="solar:arrow-down-linear" width="14"></iconify-icon>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-sky-500/20 transition-all">
<div className="text-xs font-mono text-sky-500 mb-4">01</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">AUDIT &amp; STRATEGY</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Comprehensive analysis of your current stack</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>We begin by auditing your existing infrastructure. We identify bottlenecks, security vulnerabilities, and opportunities for modernization.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Performance Benchmarking (Core Web Vitals)</li>
<li>Codebase &amp; Security Review</li>
<li>UX/UI Modernization Strategy</li>
<li>SEO Structure Analysis</li>
</ul>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-sky-500/20 transition-all">
<div className="text-xs font-mono text-sky-500 mb-4">02</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">CUSTOM DEVELOPMENT</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Precision coding with modern frameworks</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>We move away from bloated templates. We write clean, semantic code using the latest technologies to ensure your site is fast and scalable.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>HTML5, Tailwind CSS, Modern JavaScript</li>
<li>Responsive Mobile-First Design</li>
<li>Custom Component Architecture</li>
<li>Backend API Integration</li>
</ul>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-sky-500/20 transition-all">
<div className="text-xs font-mono text-sky-500 mb-4">03</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DIGITAL INTEGRATION</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Connecting your web presence to your business</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>A website shouldn't exist in isolation. We implement digital solutions that connect your frontend to your operational tools.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>CRM &amp; Database Connections</li>
<li>Analytics &amp; Tracking Setup</li>
<li>Automated Lead Flow</li>
<li>E-commerce Functionality</li>
</ul>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-sky-500/20 transition-all">
<div className="text-xs font-mono text-sky-500 mb-4">04</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DEPLOY &amp; SCALE</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Reliable hosting and continuous support</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>We handle the technical deployment to ensure 99.9% uptime and fast content delivery globally and within South Africa.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Cloud Hosting Setup</li>
<li>CDN Integration</li>
<li>Regular Maintenance &amp; Updates</li>
<li>Scalability Planning</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/[0.06] bg-[#050505] relative" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">Subscription Packages</h2>
<p className="text-slate-400 font-light">Choose the tier that fits your growth stage. Transparent pricing, no hidden fees.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 flex flex-col p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-sky-500/20 transition-all relative">
<div className="mb-6">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white mb-4 border border-white/10">
<iconify-icon height="20" icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Basic</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">R1,500</span>
<span className="text-xs text-slate-500">/month</span>
</div>
<p className="mt-4 text-xs text-slate-400 leading-relaxed">Perfect for startups needing a professional digital footprint.</p>
</div>
<div className="space-y-4 flex-1 mb-8">
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>1-Page Website Upgrade</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Modern Responsive Design</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Mobile Optimized</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Standard Hosting</span>
</div>
</div>
<button className="w-full py-3 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" onclick="selectPackage('basic')">Select Basic</button>
</div>

<div className="reveal delay-200 flex flex-col p-8 rounded-2xl bg-[#0E0F14] border border-sky-500/30 shadow-[0_0_30px_rgba(14,165,233,0.05)] relative transform md:-translate-y-4">
<div className="absolute top-0 right-0 -mt-3 mr-4 px-3 py-1 bg-sky-500 text-[10px] font-bold text-white uppercase tracking-wider rounded-full">Popular</div>
<div className="mb-6">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-sky-500/10 text-sky-400 mb-4 border border-sky-500/20">
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Pro</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">R3,000</span>
<span className="text-xs text-slate-500">/month</span>
</div>
<p className="mt-4 text-xs text-slate-400 leading-relaxed">For growing businesses requiring more content and engagement.</p>
</div>
<div className="space-y-4 flex-1 mb-8">
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 5 Pages</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>SEO Optimization</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Contact Form Integration</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Priority Support</span>
</div>
</div>
<button className="w-full py-3 text-xs font-semibold text-black bg-white border border-white rounded-lg hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="selectPackage('pro')">Select Pro</button>
</div>

<div className="reveal delay-300 flex flex-col p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 hover:border-sky-500/20 transition-all relative">
<div className="mb-6">
<div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 text-white mb-4 border border-white/10">
<iconify-icon height="20" icon="solar:medal-ribbon-star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Ultra Max</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-3xl font-semibold text-white tracking-tight">R5,000</span>
<span className="text-xs text-slate-500">/month</span>
</div>
<p className="mt-4 text-xs text-slate-400 leading-relaxed">Comprehensive solution for established enterprises.</p>
</div>
<div className="space-y-4 flex-1 mb-8">
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Up to 10 Pages</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Advanced SEO &amp; Analytics</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Custom Graphics &amp; Client Dashboard</span>
</div>
<div className="flex items-start gap-3 text-xs text-slate-300">
<iconify-icon className="text-sky-500 shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>24/7 Monitoring</span>
</div>
</div>
<button className="w-full py-3 text-xs font-semibold text-white bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors" onclick="selectPackage('ultra')">Select Ultra Max</button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="order-form">
<div className="absolute inset-0 bg-sky-900/5 mix-blend-overlay"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

<div className="lg:col-span-2 reveal">
<div className="sticky top-24">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Get Started.</h2>
<p className="text-slate-400 text-sm leading-relaxed mb-8">
                            Fill in your details to initiate your digital upgrade. Secure payment processing provided upon submission.
                        </p>
<div className="p-6 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
<h4 className="text-sm font-medium text-white mb-4">What happens next?</h4>
<div className="space-y-4">
<div className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] text-sky-400 font-mono">1</div>
<p className="text-xs text-slate-400 leading-tight pt-1">We analyze your requirements.</p>
</div>
<div className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] text-sky-400 font-mono">2</div>
<p className="text-xs text-slate-400 leading-tight pt-1">Package confirmation &amp; onboarding.</p>
</div>
<div className="flex gap-3">
<div className="h-6 w-6 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-[10px] text-sky-400 font-mono">3</div>
<p className="text-xs text-slate-400 leading-tight pt-1">Development begins immediately.</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 reveal delay-100">
<form className="space-y-6 bg-[#0A0A0A] border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl" onsubmit="event.preventDefault(); submitFullOrder();">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Full Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="orderName" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Email Address</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="orderEmail" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Phone Number</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="orderPhone" required="" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Website URL</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="orderUrl" placeholder="https://" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Select Package</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="package-radio hidden" id="radio-basic" name="package" required="" type="radio" value="Basic"/>
<div className="border border-white/10 rounded-lg p-3 hover:border-sky-500/30 transition-all bg-[#050505] flex flex-col items-center text-center h-full">
<div className="w-4 h-4 rounded-full border border-white/20 mb-2 flex items-center justify-center radio-circle">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-xs font-medium text-white">Basic</span>
<span className="text-[10px] text-slate-500">R1,500</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="package-radio hidden" id="radio-pro" name="package" type="radio" value="Pro"/>
<div className="border border-white/10 rounded-lg p-3 hover:border-sky-500/30 transition-all bg-[#050505] flex flex-col items-center text-center h-full">
<div className="w-4 h-4 rounded-full border border-white/20 mb-2 flex items-center justify-center radio-circle">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-xs font-medium text-white">Pro</span>
<span className="text-[10px] text-slate-500">R3,000</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="package-radio hidden" id="radio-ultra" name="package" type="radio" value="Ultra"/>
<div className="border border-white/10 rounded-lg p-3 hover:border-sky-500/30 transition-all bg-[#050505] flex flex-col items-center text-center h-full">
<div className="w-4 h-4 rounded-full border border-white/20 mb-2 flex items-center justify-center radio-circle">
<svg className="w-2.5 h-2.5 text-white opacity-0 transition-opacity" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7"></path></svg>
</div>
<span className="text-xs font-medium text-white">Ultra Max</span>
<span className="text-[10px] text-slate-500">R5,000</span>
</div>
</label>
</div>
</div>

<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Upgrade Notes / Requirements</label>
<textarea className="w-full bg-[#050505] border border-white/10 rounded px-3 py-3 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="orderNotes" placeholder="Tell us what you want to improve..." rows="3"></textarea>
</div>

<div className="rounded-lg border border-dashed border-white/10 bg-white/[0.02] p-4 flex flex-col items-center justify-center text-center gap-3">
<p className="text-xs font-medium text-slate-400">Secure Subscription Payment Integration</p>
<div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="logos:stripe" width="30"></iconify-icon>
<iconify-icon icon="logos:paypal" width="16"></iconify-icon>
<iconify-icon icon="logos:visa" width="30"></iconify-icon>
</div>
<p className="text-[10px] text-slate-600">Encrypted transaction. Your subscription will start upon approval.</p>
</div>
<button className="w-full py-4 bg-white text-black text-sm font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2" id="orderBtn" type="submit">
                            Submit Your Website Info &amp; Get Started Today
                            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-center text-red-500 text-xs mt-2 hidden" id="orderError">Transmission Failed. Please check your connection.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050505]" id="quote">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<iconify-icon className="mx-auto text-sky-500 mb-8" height="32" icon="solar:terminal-linear" width="32"></iconify-icon>
<p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                    "In a digital-first world, your website is your headquarters. <span className="text-sky-500 font-normal">We build it to last.</span>"
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Gallery Solutions</p>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" id="contactModal">
<div className="w-full max-w-md bg-[#0E0F14] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">
<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8 relative z-10">
<div className="mb-6">
<div className="text-xs font-mono text-sky-500 mb-2">PROJECT INQUIRY</div>
<h3 className="text-xl font-semibold text-white">Let's Discuss Your Site</h3>
<p className="text-xs text-slate-400 mt-1">Target Domain: <span className="text-white font-mono" id="modalDomainDisplay"></span></p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); submitToAirtable();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">First Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="prenomInput" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Last Name</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="nomInput" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="emailInput" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Phone</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-sky-500/50 transition-colors" id="phoneInput" required="" type="tel"/>
</div>
<button className="w-full mt-4 bg-sky-600 hover:bg-sky-500 text-white font-medium py-3 rounded text-sm transition-all shadow-[0_0_20px_rgba(2,132,199,0.3)] flex items-center justify-center gap-2" id="submitBtn" type="submit">
                        Request Consultation
                    </button>
<p className="text-center text-red-500 text-xs mt-2 hidden" id="submissionError">Transmission Failed. Try again.</p>
</form>
</div>
</div>
</div>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex flex-col items-start gap-1 mb-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:code-square-linear" width="20"></iconify-icon>
<span className="text-base font-bold tracking-widest text-white uppercase font-geist">GALLERY SOLUTIONS | SOUTH AFRICA</span>
</div>
<span className="text-[10px] text-sky-500 uppercase tracking-wider ml-7">Based in South Africa</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
                        Premium web development and digital solutions for forward-thinking companies.
                    </p>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#packages">Pricing</a>
<a className="hover:text-white transition-colors" href="#order-form">Get Started</a>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-wider">© 2024 Gallery Solutions. All Rights Reserved.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="solar:plain-linear" width="16"></iconify-icon>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="#">
<iconify-icon height="16" icon="solar:letter-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
