import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", "30min", {origin:"https://app.cal.com"});
Cal.ns["30min"]("ui", {"theme":"dark","hideEventTypeDetails":false,"layout":"month_view"});



        lucide.createIcons();

        // Navigation Logic
        function showBooking() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.getElementById('home-view').classList.add('hidden');
            document.getElementById('booking-view').classList.remove('hidden');
            // Re-init calendar inline when showing
            Cal("inline", {
                elementOrSelector: "#cal-inline-container",
                calLink: "heidar-babazade-20kwom/30min",
                layout: "month_view"
            });
        }

        function showHome() {
            document.getElementById('booking-view').classList.add('hidden');
            document.getElementById('home-view').classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function navigateTo(id) {
            showHome();
            setTimeout(() => {
                const el = document.querySelector(id);
                if(el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }

        // Photo Upload Logic
        function handleLogoUpload(input) {
            if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const container = document.getElementById('logo-container');
                    container.innerHTML = `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-contain" alt="Logo">`;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        function handleAboutUpload(input) {
             if (input.files && input.files[0]) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('about-image').src = e.target.result;
                }
                reader.readAsDataURL(input.files[0]);
            }
        }

        // Case Study Modal Data & Logic
        const caseStudies = [
            {
                title: "Recovered $120K per month",
                problem: "High-value borrower calls came in after hours or during peak times, leading to lost deals and manual triage burnout.",
                built: ["AI Receptionist (Retell AI)", "Real-time routing rules", "CRM Auto-entry"],
                result: "Revenue recovered: ~$30k–$150k per month. First response in seconds.",
                stack: "Retell AI · Make.com · Salesforce"
            },
            {
                title: "35% more qualified leads",
                problem: "Low-intent leads flooded the 'Contact Us' form, wasting sales team efforts on non-viable prospects.",
                built: ["Guarded multi-step intake", "Enrichment & Scoring", "Instant Scheduling"],
                result: "+35% qualified leads in 30 days, fewer no-shows.",
                stack: "Typeform · Make.com · HubSpot"
            },
            {
                title: "Days → minutes to meeting",
                problem: "Scheduling friction after discovery calls caused deal momentum to drop significantly.",
                built: ["Voice-to-calendar automation", "Auto-recap emails", "SMS Nudges"],
                result: "Time-to-meeting dropped from days to minutes.",
                stack: "Retell AI · Calendly · Slack"
            }
        ];

        function openModal(index) {
            const data = caseStudies[index];
            const modalBody = document.getElementById('modal-body');
            const buildList = data.built.map(item => `<li class="flex items-center gap-3 text-neutral-400"><div class="w-1 h-1 bg-[#C09C6E] rounded-full"></div><span>${item}</span></li>`).join('');

            modalBody.innerHTML = `
                <div>
                    <span class="text-[10px] text-[#C09C6E] uppercase tracking-widest font-semibold mb-2 block">Case Study</span>
                    <h3 class="text-2xl text-white font-semibold tracking-tight mb-6">${data.title}</h3>
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-xs text-white font-medium uppercase tracking-wider mb-2">Problem</h4>
                            <p class="text-neutral-400 text-sm leading-relaxed border-l border-white/10 pl-4">${data.problem}</p>
                        </div>
                        <div>
                            <h4 class="text-xs text-white font-medium uppercase tracking-wider mb-2">Built</h4>
                            <ul class="space-y-2 text-sm">${buildList}</ul>
                        </div>
                         <div class="bg-white/[0.03] p-4 rounded border border-white/5">
                            <h4 class="text-xs text-white font-medium uppercase tracking-wider mb-1">Outcome</h4>
                            <p class="text-white text-sm leading-relaxed">${data.result}</p>
                        </div>
                    </div>
                </div>
            `;
            
            const overlay = document.getElementById('modal-overlay');
            const container = document.getElementById('modal-container');
            overlay.classList.remove('hidden');
            container.classList.remove('hidden');
            void overlay.offsetWidth; 
            overlay.classList.remove('opacity-0');
            container.classList.remove('opacity-0', 'scale-95');
            document.body.classList.add('modal-open');
        }

        function closeModal() {
            const overlay = document.getElementById('modal-overlay');
            const container = document.getElementById('modal-container');
            overlay.classList.add('opacity-0');
            container.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                overlay.classList.add('hidden');
                container.classList.add('hidden');
                document.body.classList.remove('modal-open');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#050505]/80 backdrop-blur-xl transition-all duration-500">
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-4">

<div className="relative group cursor-pointer" title="Click to upload logo">
<input accept="image/*" className="hidden" id="logo-upload" onchange="handleLogoUpload(this)" type="file"/>
<label className="cursor-pointer block" htmlFor="logo-upload">

<div className="flex overflow-hidden transition-all hover:bg-white/5 text-white w-12 h-12 rounded-md pt-1 pr-1 pb-1 pl-1 relative items-center justify-center" id="logo-container">
<svg className="w-[40px] h-[40px]" data-icon-replaced="true" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{width: '40px', height: '40px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24">
<path className="" d="M3 21 L12 3 L21 21"></path>
<path className="" d="M6 13 L18 13"></path>
</svg>
</div>
</label>
</div>
<div className="text-xl font-semibold tracking-tight text-white cursor-pointer hover:opacity-80 transition-opacity" onclick="showHome()">Infinivo</div>
</div>

<div className="hidden md:flex items-center gap-8">
<button className="text-[11px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" onclick="navigateTo('#cases')">Case Studies</button>
<button className="text-[11px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" onclick="navigateTo('#systems')">Systems</button>
<button className="text-[11px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" onclick="navigateTo('#method')">Method</button>
<button className="text-[11px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors" onclick="navigateTo('#about')">About</button>
</div>
<button className="group flex items-center gap-2 text-[11px] tracking-widest uppercase bg-white text-black px-5 py-2.5 hover:bg-[#C09C6E] hover:text-white transition-all duration-300 font-medium" onclick="showBooking()">
                Let's Talk
                <svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<main className="transition-opacity duration-500" id="home-view">

<section className="min-h-screen flex flex-col overflow-hidden pt-32 pr-6 pl-6 relative items-center justify-center">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] glow-spot pointer-events-none opacity-60"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C09C6E]/5 via-transparent to-transparent opacity-40"></div>
<div className="max-w-5xl mx-auto text-center z-10 space-y-8 animate-fade-in-up">
<div className="inline-flex items-center gap-3 border border-white/10 bg-white/[0.02] rounded-full px-4 py-1.5 backdrop-blur-md mb-2">
<span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[#C09C6E]">Busywork is a cost center</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white leading-[1.05]">
                    From Human Variability<br/>
<span className="text-neutral-500 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40 block mt-1">to System Reliability.</span>
</h1>
<p className="text-base md:text-lg font-normal text-neutral-400 max-w-2xl mx-auto leading-relaxed tracking-wide pt-2">
                    We design operational systems powered by AI that reduce handling load, maintain data integrity, and raise reliability across every workflow.
                </p>
<div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-white text-black overflow-hidden min-w-[160px]" onclick="showBooking()">
<div className="relative flex items-center justify-center gap-3">
<span className="text-[11px] tracking-[0.1em] uppercase font-semibold">Let's Talk</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
<button className="group relative px-8 py-4 bg-transparent border border-white/20 hover:border-white transition-colors duration-300 min-w-[160px]" onclick="navigateTo('#cases')">
<div className="relative flex items-center justify-center gap-3">
<span className="text-[11px] tracking-[0.1em] uppercase text-white font-medium">View Outcomes</span>
</div>
</button>
</div>
<div className="pt-6">
<p className="text-[10px] text-neutral-500 tracking-wider uppercase font-medium">
                        Implementation in days <span className="mx-2 text-white/20">•</span> Clear scopes <span className="mx-2 text-white/20">•</span> Verifiable metrics
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10 bg-white/[0.02] backdrop-blur-md mt-16 rounded-lg max-w-4xl mx-auto w-full">
<div className="p-6 text-center group cursor-default">
<p className="text-3xl font-light text-white tracking-tight mb-1">$194K</p>
<p className="text-[10px] text-neutral-500 tracking-widest uppercase group-hover:text-[#C09C6E] transition-colors">Generated in Revenue</p>
</div>
<div className="p-6 text-center group cursor-default">
<p className="text-3xl font-light text-white tracking-tight mb-1">63%</p>
<p className="text-[10px] text-neutral-500 tracking-widest uppercase group-hover:text-[#C09C6E] transition-colors">Response-time Reduction</p>
</div>
<div className="p-6 text-center group cursor-default">
<p className="text-3xl font-light text-white tracking-tight mb-1">45+</p>
<p className="text-[10px] text-neutral-500 tracking-widest uppercase group-hover:text-[#C09C6E] transition-colors">Systems Deployed</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] border-t border-white/[0.03]" id="cases">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<span className="text-[10px] font-semibold tracking-[0.2em] text-[#C09C6E] uppercase mb-4 block">Proven Outcomes</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight-custom text-white">Case Studies.</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full rounded-lg">
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-full bg-white/5 text-[#C09C6E]"><svg className="lucide lucide-phone-call w-5 h-5" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg></div>
<span className="text-[10px] text-neutral-500 tracking-widest uppercase">Finance</span>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Recovered $120K per month</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">High-value borrower calls came in after hours or during peak times, leading to lost deals.</p>
<button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#C09C6E] transition-colors font-medium mt-auto group-hover:translate-x-1 duration-300" onclick="openModal(0)">Read Case Study <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>

<div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full rounded-lg">
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-full bg-white/5 text-[#C09C6E]"><svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg></div>
<span className="text-[10px] text-neutral-500 tracking-widest uppercase">Lead Gen</span>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">35% more qualified leads</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">A single "Contact us" form let in low-intent leads, wasting the sales team's week.</p>
<button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#C09C6E] transition-colors font-medium mt-auto group-hover:translate-x-1 duration-300" onclick="openModal(1)">Read Case Study <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>

<div className="group border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-all duration-300 flex flex-col h-full rounded-lg">
<div className="mb-6 flex items-start justify-between">
<div className="p-3 rounded-full bg-white/5 text-[#C09C6E]"><svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg></div>
<span className="text-[10px] text-neutral-500 tracking-widest uppercase">Sales Ops</span>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Days → minutes to meeting</h3>
<p className="text-neutral-500 text-sm leading-relaxed mb-8 flex-grow">Discovery calls took days to schedule due to email ping-pong, dropping win rates.</p>
<button className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white hover:text-[#C09C6E] transition-colors font-medium mt-auto group-hover:translate-x-1 duration-300" onclick="openModal(2)">Read Case Study <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></button>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/[0.03]" id="method">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1 relative">
<div className="aspect-[4/5] glass-panel rounded-sm relative overflow-hidden flex items-center justify-center p-8 group">
<div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.01)_0px,rgba(255,255,255,0.01)_1px,transparent_1px,transparent_10px)] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="relative z-10 w-full max-w-[280px] space-y-4">
<div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 p-4 rounded-sm flex items-center justify-between translate-x-4 opacity-60">
<div className="h-1.5 w-16 bg-white/10 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
</div>
<div className="bg-[#1a1a1a]/90 backdrop-blur-md border border-white/10 p-5 rounded-sm flex items-center gap-4 shadow-2xl relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-1 bg-[#C09C6E]"></div>
<svg className="lucide lucide-git-merge w-5 h-5 text-[#C09C6E]" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
<div className="space-y-1.5">
<p className="text-[10px] uppercase tracking-widest text-neutral-500">Manual Entry</p>
<p className="text-xs text-white font-light">Data Fragmented. Integrity Lost.</p>
</div>
</div>
<div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/5 p-4 rounded-sm flex items-center justify-between -translate-x-4 opacity-60">
<div className="h-1.5 w-24 bg-white/10 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<span className="text-[10px] font-semibold tracking-[0.2em] text-[#C09C6E] uppercase mb-6 block flex items-center gap-3">
<span className="w-8 h-px bg-[#C09C6E]/40"></span>
                        The Inefficiency
                    </span>
<h2 className="md:text-5xl leading-[1.1] text-3xl font-semibold text-white tracking-tight-custom mb-8">Scale breaks <br/> <span className="text-neutral-500">human workflows.</span></h2>
<div className="space-y-6 text-neutral-400 font-normal text-base md:text-lg leading-relaxed max-w-md">
<p>You can't build a billion-dollar company on spreadsheets and manual data entry. As volume increases, human variability becomes your biggest risk factor.</p>
<p>The cost isn't just time—it's the <span className="text-white">integrity of your data</span>. We replace ad-hoc processes with deterministic, AI-driven pipelines.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-32 pr-6 pb-32 pl-6 relative" id="systems">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#C09C6E] opacity-[0.03] blur-[150px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight-custom text-white mb-6">
                        Autonomous <span className="text-[#C09C6E]">Operations.</span>
</h2>
<p className="text-neutral-500 max-w-xl mx-auto font-normal text-sm md:text-base">Infinivo acts as the intelligent layer between your raw data and your business outcomes.</p>
</div>

<div className="relative w-full max-w-[1100px] mx-auto group">
<div className="absolute -inset-1 bg-gradient-to-r from-[#C09C6E]/10 via-white/5 to-[#C09C6E]/10 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-1000"></div>
<div className="relative bg-[#0C0C0C] border border-white/10 rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm flex flex-col md:flex-row h-auto min-h-[550px] select-none">
<div className="hidden md:flex flex-col w-16 border-r border-white/5 bg-[#0a0a0a] items-center py-6 gap-6 z-10">
<div className="w-6 h-6 border border-[#C09C6E] rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-[#C09C6E] rounded-full"></div></div>
<div className="flex flex-col gap-6 w-full items-center mt-4">
<div className="w-8 h-8 rounded-md bg-white/5 text-white flex items-center justify-center cursor-pointer border border-white/5"><svg className="lucide lucide-layers w-4 h-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div>
<div className="w-8 h-8 rounded-md text-neutral-600 flex items-center justify-center cursor-pointer hover:text-white transition-colors"><svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg></div>
<div className="w-8 h-8 rounded-md text-neutral-600 flex items-center justify-center cursor-pointer hover:text-white transition-colors"><svg className="lucide lucide-git-pull-request w-4 h-4" data-lucide="git-pull-request" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" x2="6" y1="9" y2="21"></line></svg></div>
</div>
</div>
<div className="flex-1 p-8 relative bg-[#0C0C0C]">
<div className="flex justify-between items-center mb-10">
<div>
<h3 className="text-lg text-white font-medium">Pipeline Status</h3>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Live Execution Mode</p>
</div>
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-[#C09C6E]/10 rounded-full border border-[#C09C6E]/20">
<div className="w-1.5 h-1.5 rounded-full bg-[#C09C6E] animate-pulse"></div>
<span className="text-[10px] text-[#C09C6E] uppercase tracking-wider">All Systems Operational</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full pb-4">
<div className="md:col-span-2 space-y-4">
<div className="p-5 border border-white/10 rounded-lg bg-white/[0.02] flex items-center justify-between hover:border-white/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400"><svg className="lucide lucide-webhook w-5 h-5" data-lucide="webhook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path><path d="m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path><path d="m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path></svg></div>
<div><h4 className="text-white text-sm font-medium">Inbound Lead Webhook</h4><p className="text-[11px] text-neutral-500">Processed 240ms ago</p></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-green-500">Success</span>
</div>
<div className="p-5 border border-white/10 rounded-lg bg-white/[0.02] flex items-center justify-between hover:border-white/20 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400"><svg className="lucide lucide-brain-circuit w-5 h-5" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg></div>
<div><h4 className="text-white text-sm font-medium">AI Qualification Agent</h4><p className="text-[11px] text-neutral-500">Enriching data points...</p></div>
</div>
<div className="flex items-center gap-2">
<div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden"><div className="w-2/3 h-full bg-[#C09C6E]"></div></div>
<span className="text-[10px] uppercase tracking-widest text-[#C09C6E]">Active</span>
</div>
</div>
</div>
<div className="md:col-span-1 flex flex-col gap-4">
<div className="flex-1 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 rounded-lg p-5">
<p className="text-[10px] text-neutral-500 uppercase tracking-wider mb-2">Efficiency Gain</p>
<p className="text-3xl text-white font-light mb-1">+412%</p>
<p className="text-[10px] text-neutral-500">vs. Manual Handling</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] border-t border-white/[0.03]" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-10">
<div>
<span className="text-[10px] font-semibold tracking-[0.2em] text-[#C09C6E] uppercase mb-4 block">About Us</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight-custom text-white mb-6">
                                Engineered for <br/><span className="text-neutral-500">absolute reliability.</span>
</h2>
<p className="text-neutral-400 text-base leading-relaxed max-w-md">
                                Infinivo was founded on a simple premise: human potential is wasted on repetitive logic. We don't just automate tasks; we architect intelligent systems that allow businesses to scale without the linear cost of headcount.
                            </p>
</div>

<div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<p className="text-3xl font-light text-white tracking-tight">12x</p>
<p className="text-[11px] text-neutral-500 tracking-widest uppercase mt-1">Average ROI</p>
</div>
<div>
<p className="text-3xl font-light text-white tracking-tight">95%</p>
<p className="text-[11px] text-neutral-500 tracking-widest uppercase mt-1">Client Retention</p>
</div>
</div>
<button className="group flex items-center gap-3 text-sm text-white border-b border-white/30 pb-1 hover:border-white transition-colors w-max" onclick="showBooking()">
                            Start your transformation
                            <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative group">
<input accept="image/*" className="hidden" id="about-upload" onchange="handleAboutUpload(this)" type="file"/>
<label className="cursor-pointer block relative" htmlFor="about-upload">
<div className="aspect-[4/5] md:aspect-square overflow-hidden rounded-xl border border-white/10 relative">

<img alt="Infinivo Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" id="about-image" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
<div className="flex flex-col items-center gap-2 text-white">
<svg className="lucide lucide-camera w-8 h-8" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></svg>
<span className="text-xs tracking-widest uppercase font-medium">Change Photo</span>
</div>
</div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 border-l border-b border-[#C09C6E]/30 rounded-bl-3xl pointer-events-none"></div>
<div className="absolute -top-6 -right-6 w-24 h-24 border-r border-t border-[#C09C6E]/30 rounded-tr-3xl pointer-events-none"></div>
</label>
</div>
</div>
</div>
</section>

<footer className="py-32 px-6 bg-[#050505] border-t border-white/[0.03]">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight-custom text-white mb-8">
                    Ready to stabilize your <span className="text-[#C09C6E]">operations?</span>
</h2>
<div className="flex justify-center gap-6">
<button className="inline-flex items-center justify-center px-8 py-4 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-[#C09C6E] hover:text-white transition-all duration-300" onclick="showBooking()">
                        Let's Talk
                    </button>
</div>
<p className="mt-12 text-[10px] text-neutral-600 uppercase tracking-widest">
                    © 2024 Infinivo Systems Inc.
                </p>
</div>
</footer>
</main>

<section className="hidden min-h-screen pt-32 pb-12 px-6 bg-[#050505] animate-fade-in-up" id="booking-view">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">Let's See If We're A Fit</h1>
<p className="text-neutral-400 text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                    Not every firm is right for automation (yet). This call helps us both figure out if this makes sense.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

<div className="pt-8">
<h3 className="text-white font-medium text-xl mb-8 flex items-center gap-3">
                        What to Expect 
                        <span className="text-neutral-500" title="Transparent process"><svg className="lucide lucide-info w-4 h-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></span>
</h3>
<ul className="space-y-8">
<li className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C09C6E] transition-colors">
<div className="w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#C09C6E] transition-colors"></div>
</div>
<span className="text-neutral-300 text-sm md:text-base font-normal">30 minutes, no sales pitch</span>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C09C6E] transition-colors">
<div className="w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#C09C6E] transition-colors"></div>
</div>
<span className="text-neutral-300 text-sm md:text-base font-normal">We'll audit your current deal flow process</span>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C09C6E] transition-colors">
<div className="w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#C09C6E] transition-colors"></div>
</div>
<span className="text-neutral-300 text-sm md:text-base font-normal">Identify 2-3 automation opportunities</span>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C09C6E] transition-colors">
<div className="w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#C09C6E] transition-colors"></div>
</div>
<span className="text-neutral-300 text-sm md:text-base font-normal">Show you exactly what's possible</span>
</li>
<li className="flex items-start gap-4 group">
<div className="mt-1 w-5 h-5 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#C09C6E] transition-colors">
<div className="w-2.5 h-2.5 bg-white rounded-full group-hover:bg-[#C09C6E] transition-colors"></div>
</div>
<span className="text-neutral-300 text-sm md:text-base font-normal">Give you a clear next step (even if it's not working with us)</span>
</li>
</ul>
<div className="mt-16 pt-8 border-t border-white/10">
<button className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest" onclick="showHome()">
<svg className="lucide lucide-arrow-left w-4 h-4" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg> Back to Home
                        </button>
</div>
</div>

<div className="w-full bg-[#0C0C0C] border border-white/10 rounded-xl overflow-hidden shadow-2xl relative min-h-[600px] flex items-center justify-center">
<div className="w-full h-full absolute inset-0" id="cal-inline-container"></div>
<div className="text-neutral-500 text-sm animate-pulse absolute pointer-events-none">Loading Availability...</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] hidden opacity-0 transition-opacity duration-300" id="modal-overlay" onclick="closeModal()"></div>
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[700px] max-h-[90vh] bg-[#0F0F0F] border border-white/10 shadow-2xl z-[101] hidden opacity-0 scale-95 transition-all duration-300 overflow-y-auto rounded-xl" id="modal-container">
<div className="relative p-8 md:p-12">
<button className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors" onclick="closeModal()"><svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg></button>
<div className="space-y-8" id="modal-body"></div>
</div>
</div>


    </>
  );
}
