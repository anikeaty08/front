import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // State
        const state = {
            skill: '',
            niche: '',
            language: '',
        };

        // Data Store
        const data = {
            skills: {
                content: {
                    name: "AI Content Creation",
                    action: "create 30 days of high-performing AI content",
                    deliverables: ["15 Short-form Reels", "15 Static Posts/Carousels", "Captions & Hashtags", "Content Strategy Doc", "Monthly Analytics Report"],
                    workflow: ["Audit current social presence", "Develop content pillars & strategy", "Generate scripts & visuals using AI", "Client Review & Approval", "Schedule & Publish"],
                    basePrice: 15000 // INR
                },
                video: {
                    name: "AI Video Editing",
                    action: "produce viral short-form videos",
                    deliverables: ["20 Reels/Shorts per month", "Dynamic Captions", "B-roll & AI Transitions", "Thumbnail Design", "Trend Research"],
                    workflow: ["Receive raw footage or topics", "AI Scripting & Storyboard", "Edit, Color Grade & caption", "Feedback Loop", "Final High-Res Delivery"],
                    basePrice: 20000 // INR
                },
                automation: {
                    name: "AI Automation",
                    action: "build fully automated client acquisition systems",
                    deliverables: ["Lead Capture Form Setup", "WhatsApp/Email Auto-responders", "CRM Integration (Airtable/HubSpot)", "Zapier/Make.com Workflow", "Admin Dashboard"],
                    workflow: ["Process Mapping Session", "Tool Selection & Setup", "Build Automation Logic", "Testing & Debugging", "Handover & Training"],
                    basePrice: 25000 // INR
                },
                social: {
                    name: "Social Media Management",
                    action: "manage and grow your digital presence using AI",
                    deliverables: ["Content Calendar", "Community Engagement (15 mins/day)", "Weekly Content Creation", "Competitor Analysis", "Bio Optimization"],
                    workflow: ["Onboarding Questionnaire", "Brand Voice Calibration", "Content Batches (Weekly)", "Daily Engagement", "Monthly Growth Call"],
                    basePrice: 18000 // INR
                }
            },
            niches: {
                "Coaches": { multiplier: 1.2, pain: "getting consistent leads without burning out" },
                "Real Estate": { multiplier: 1.5, pain: "showcasing properties and following up with leads" },
                "Ecommerce": { multiplier: 1.8, pain: "driving traffic and reducing cart abandonment" },
                "Agencies": { multiplier: 1.4, pain: "scaling fulfillment without hiring more staff" },
                "Local Business": { multiplier: 0.8, pain: "getting more footfall and local visibility" },
                "YouTubers": { multiplier: 1.0, pain: "editing faster to maintain upload consistency" }
            },
            scripts: {
                English: {
                    short: "Hi {name}, I noticed your recent work in {niche}. I help {niche} professionals {offer} to solve {problem}. Would you be open to a 5-min chat?",
                    long: "Hey {name},\n\nI've been following your journey in the {niche} space and love what you're doing. \n\nHowever, I see many {niche} businesses struggle with {problem}.\n\nI specialize in {skill} where I {offer}. This typically saves my clients 10+ hours a week.\n\nNo pressure, but if you're looking to scale efficiently, let's connect.\n\nBest,\n[Your Name]",
                    whatsapp: "Hi {name} 👋 saw your business online. I help {niche} owners {offer}. Just wanted to see if you're looking for help with {problem}? Cheers!",
                    voicenote: "[Voice Script]: Hey {name}, just wanted to reach out personally. I'm building systems for {niche} to help with {problem}. I noticed you could leverage AI to {offer}. Let me know if you want to see a demo."
                },
                Hindi: {
                    short: "Namaste {name}, maine aapka {niche} business dekha. Main AI use karke aapki help kar sakta hoon to {offer}. Kya hum baat kar sakte hain?",
                    long: "Hello {name},\n\nAapka kaam {niche} industry mein kaafi acha hai. \n\nMaine dekha hai ki {niche} businesses ko {problem} mein dikkat aati hai.\n\nMain {skill} expert hoon aur main aapke liye {offer} kar sakta hoon. Isse aapka time aur paisa dono bachega.\n\nAgar aap interested hain, to batayein.\n\nRegards,\n[Your Name]",
                    whatsapp: "Hi {name} 👋 Main {niche} businesses ki help karta hoon {problem} solve karne mein. Main aapke liye {offer} kar sakta hoon. Interested?",
                    voicenote: "[Voice Script]: Namaste {name}, bas personally reach out karna chahta tha. Main {niche} ke liye AI systems banata hoon taaki {problem} solve ho sake. Agar aap dekhna chahte hain ki yeh kaise kaam karta hai, to batayein."
                },
                Hinglish: {
                    short: "Hi {name}, aapka {niche} business dekha. I help owners {offer} to fix {problem}. Quick call possible hai?",
                    long: "Hey {name},\n\nBig fan of your work in {niche}. \n\nBut aksar dekha hai ki {niche} businesses ko {problem} ke saath struggle hoti hai.\n\nMain AI use karke {offer} karta hoon, which makes things super smooth. \n\nLet me know agar aapko details chahiye.\n\nCheers,\n[Your Name]",
                    whatsapp: "Hi {name} 👋 Kya aap {problem} face kar rahe hain? I help {niche} businesses {offer} using AI. Let's chat?",
                    voicenote: "[Voice Script]: Hey {name}, aapka profile dekha. I think AI automation se aapka {problem} solve ho sakta hai. Main basically {offer} karta hoon. Reply karna agar interest ho."
                }
            }
        };

        // DOM Elements
        const views = {
            onboarding: document.getElementById('onboarding-view'),
            results: document.getElementById('results-view'),
            step1: document.getElementById('step-1'),
            step2: document.getElementById('step-2'),
            step3: document.getElementById('step-3'),
            action: document.getElementById('generate-action')
        };

        // Functions
        function selectSkill(skill) {
            state.skill = skill;
            document.querySelectorAll('.skill-btn').forEach(btn => {
                btn.classList.remove('border-orange-500', 'bg-white/5');
                btn.classList.add('border-white/10');
            });
            event.currentTarget.classList.remove('border-white/10');
            event.currentTarget.classList.add('border-orange-500', 'bg-white/5');
            
            views.step2.classList.remove('hidden');
            // Smooth scroll
            setTimeout(() => views.step2.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }

        function selectNiche(niche) {
            state.niche = niche;
            document.querySelectorAll('.niche-btn').forEach(btn => {
                btn.classList.remove('border-orange-500', 'text-white', 'bg-white/5');
                btn.classList.add('text-stone-300', 'border-white/10');
            });
            event.currentTarget.classList.remove('border-white/10', 'text-stone-300');
            event.currentTarget.classList.add('border-orange-500', 'text-white', 'bg-white/5');

            views.step3.classList.remove('hidden');
             setTimeout(() => views.step3.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }

        function selectLang(lang) {
            state.language = lang;
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('border-orange-500', 'text-white', 'bg-white/5');
                btn.classList.add('text-stone-300', 'border-white/10');
            });
            event.currentTarget.classList.remove('border-white/10', 'text-stone-300');
            event.currentTarget.classList.add('border-orange-500', 'text-white', 'bg-white/5');

            views.action.classList.remove('hidden');
             setTimeout(() => views.action.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
        }

        function formatCurrency(amount) {
            return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
        }

        function generateOffer() {
            if(!state.skill || !state.niche || !state.language) return;

            const skillData = data.skills[state.skill];
            const nicheData = data.niches[state.niche];
            const base = skillData.basePrice * nicheData.multiplier;

            // 1. Offer Headline
            document.getElementById('offer-headline').innerText = `I will ${skillData.action} for ${state.niche}.`;
            document.getElementById('offer-sub').innerText = `A complete ${skillData.name} package designed to help ${state.niche} solve "${nicheData.pain}".`;

            // 2. Pricing Packages
            const pricingGrid = document.getElementById('pricing-grid');
            pricingGrid.innerHTML = `
                <!-- Starter -->
                <div class="p-6 rounded-xl border border-white/5 bg-stone-900/40 hover:border-orange-500/30 transition-all">
                    <div class="text-xs text-stone-500 uppercase tracking-widest mb-2">Starter</div>
                    <div class="text-2xl font-serif text-white mb-4">${formatCurrency(Math.round(base * 0.5))}</div>
                    <ul class="space-y-2 mb-6">
                        ${skillData.deliverables.slice(0, 2).map(d => `<li class="flex items-start gap-2 text-xs text-stone-400"><iconify-icon icon="lucide:check" class="text-stone-600 mt-0.5"></iconify-icon> ${d}</li>`).join('')}
                        <li class="flex items-start gap-2 text-xs text-stone-400"><iconify-icon icon="lucide:check" class="text-stone-600 mt-0.5"></iconify-icon> Standard Support</li>
                    </ul>
                </div>
                <!-- Standard -->
                <div class="p-6 rounded-xl border border-orange-500/50 bg-stone-900/60 relative transform md:-translate-y-2 shadow-2xl shadow-orange-900/10">
                    <div class="absolute top-0 right-0 bg-orange-500 text-white text-[10px] px-2 py-1 rounded-bl-lg font-bold">POPULAR</div>
                    <div class="text-xs text-orange-400 uppercase tracking-widest mb-2">Standard</div>
                    <div class="text-3xl font-serif text-white mb-4">${formatCurrency(Math.round(base))}</div>
                    <ul class="space-y-2 mb-6">
                        ${skillData.deliverables.slice(0, 4).map(d => `<li class="flex items-start gap-2 text-sm text-stone-300"><iconify-icon icon="lucide:check" class="text-orange-500 mt-0.5"></iconify-icon> ${d}</li>`).join('')}
                    </ul>
                </div>
                <!-- Premium -->
                <div class="p-6 rounded-xl border border-white/5 bg-stone-900/40 hover:border-orange-500/30 transition-all">
                    <div class="text-xs text-stone-500 uppercase tracking-widest mb-2">Premium</div>
                    <div class="text-2xl font-serif text-white mb-4">${formatCurrency(Math.round(base * 1.8))}</div>
                    <ul class="space-y-2 mb-6">
                        ${skillData.deliverables.map(d => `<li class="flex items-start gap-2 text-xs text-stone-400"><iconify-icon icon="lucide:check" class="text-stone-600 mt-0.5"></iconify-icon> ${d}</li>`).join('')}
                        <li class="flex items-start gap-2 text-xs text-stone-400"><iconify-icon icon="lucide:check" class="text-stone-600 mt-0.5"></iconify-icon> Priority 24/7 Support</li>
                    </ul>
                </div>
            `;

            // 3. Deliverables
            const delList = document.getElementById('deliverables-list');
            delList.innerHTML = skillData.deliverables.map(d => `<li class="flex items-center gap-3"><span class="w-1.5 h-1.5 rounded-full bg-orange-500"></span>${d}</li>`).join('');

            // 4. USPs
            const uspList = document.getElementById('usp-list');
            uspList.innerHTML = `
                <div class="flex gap-4">
                    <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-orange-500"><iconify-icon icon="lucide:zap" width="20"></iconify-icon></div>
                    <div><h4 class="text-white text-sm font-medium">Speed</h4><p class="text-stone-500 text-xs">I use AI to deliver 2x faster than traditional freelancers.</p></div>
                </div>
                <div class="flex gap-4">
                    <div class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-orange-500"><iconify-icon icon="lucide:trending-up" width="20"></iconify-icon></div>
                    <div><h4 class="text-white text-sm font-medium">Result Driven</h4><p class="text-stone-500 text-xs">Focused on solving "${nicheData.pain}" for ${state.niche}.</p></div>
                </div>
            `;

            // 5. Workflow
            const workList = document.getElementById('workflow-list');
            workList.innerHTML = skillData.workflow.map((step, index) => `
                <div class="relative pl-8">
                    <div class="absolute left-0 top-1 w-8 h-8 -ml-4 flex items-center justify-center">
                        <div class="w-2 h-2 rounded-full bg-stone-950 border border-orange-500"></div>
                    </div>
                    <h4 class="text-stone-200 text-sm font-medium">Step ${index+1}: ${step}</h4>
                </div>
            `).join('');

            // 6. Default Script (Short)
            updateScript('short');

            // Switch Views
            views.onboarding.style.opacity = '0';
            setTimeout(() => {
                views.onboarding.classList.add('hidden');
                views.results.classList.remove('hidden');
                window.scrollTo(0,0);
            }, 500);
        }

        function updateScript(type) {
            const tmpl = data.scripts[state.language][type];
            let content = tmpl
                .replace(/{name}/g, "[Client Name]")
                .replace(/{niche}/g, state.niche)
                .replace(/{offer}/g, data.skills[state.skill].action)
                .replace(/{problem}/g, data.niches[state.niche].pain)
                .replace(/{skill}/g, data.skills[state.skill].name);
            
            document.getElementById('script-content').innerText = content;
            
            // UI Toggle
            const btns = document.querySelectorAll('#results-view section:last-child button');
            // Reset styles manually for simplicity in this logic block
        }

        function showScript(type) {
            updateScript(type);
        }

        function copyScript() {
            const text = document.getElementById('script-content').innerText;
            navigator.clipboard.writeText(text).then(() => {
                alert("Script copied to clipboard!");
            });
        }

        function copyAll() {
            const offer = document.getElementById('offer-headline').innerText;
            const price = document.getElementById('pricing-grid').innerText;
            const script = document.getElementById('script-content').innerText;
            const fullText = `OFFER:\n${offer}\n\nPACKAGES:\n${price}\n\nSCRIPT:\n${script}`;
            navigator.clipboard.writeText(fullText).then(() => {
                alert("Full offer details copied!");
            });
        }

        function resetApp() {
            location.reload();
        }

        function printView() {
            window.print();
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-stone-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white hover:text-orange-100 transition-colors cursor-pointer" onclick="location.reload()">
<iconify-icon className="text-orange-500" icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-xl font-serif tracking-tight">AI OfferGen</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-wide text-stone-400">
<span>By Creators, For Creators</span>
</div>
<button className="text-xs font-medium text-stone-400 hover:text-white transition-colors flex items-center gap-2" onclick="resetApp()">
<iconify-icon icon="lucide:refresh-ccw" strokeWidth="1.5" width="14"></iconify-icon>
                Reset
            </button>
</div>
</nav>

<main className="flex-grow pt-24 pb-12 px-6 max-w-5xl mx-auto w-full relative" id="app-container">

<div className="space-y-12 max-w-3xl mx-auto transition-all duration-500" id="onboarding-view">
<header className="text-center space-y-4 animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-stone-300 tracking-wide uppercase">AI Freelance Accelerator</span>
</div>
<h1 className="text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.1]">
                    Craft Your <span className="italic text-stone-500">Perfect</span><br/> AI Service Offer
                </h1>
<p className="text-stone-400 text-lg font-light max-w-lg mx-auto leading-relaxed">
                    Stop guessing. Generate a ready-to-sell service package, pricing, and sales script in under 60 seconds.
                </p>
</header>

<div className="bg-stone-900/40 border border-white/5 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">

<div className="space-y-6" id="step-1">
<div className="space-y-2">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Step 01</span>
<h2 className="text-2xl font-serif text-white">What is your primary AI skill?</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<button className="skill-btn group relative p-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-orange-500/50 transition-all text-left" onclick="selectSkill('content')">
<iconify-icon className="text-stone-500 group-hover:text-orange-500 mb-3" icon="lucide:pen-tool" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium">AI Content Creation</h3>
<p className="text-xs text-stone-500 mt-1">Reels, posts, blogs using ChatGPT/Claude</p>
</button>
<button className="skill-btn group relative p-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-orange-500/50 transition-all text-left" onclick="selectSkill('video')">
<iconify-icon className="text-stone-500 group-hover:text-orange-500 mb-3" icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium">AI Video Editing</h3>
<p className="text-xs text-stone-500 mt-1">Shorts, faceless videos, OpusClip</p>
</button>
<button className="skill-btn group relative p-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-orange-500/50 transition-all text-left" onclick="selectSkill('automation')">
<iconify-icon className="text-stone-500 group-hover:text-orange-500 mb-3" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium">AI Automation</h3>
<p className="text-xs text-stone-500 mt-1">Zapier, Make.com, n8n workflows</p>
</button>
<button className="skill-btn group relative p-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-orange-500/50 transition-all text-left" onclick="selectSkill('social')">
<iconify-icon className="text-stone-500 group-hover:text-orange-500 mb-3" icon="lucide:share-2" strokeWidth="1.5" width="24"></iconify-icon>
<h3 className="text-white font-medium">Social Media Mgmt</h3>
<p className="text-xs text-stone-500 mt-1">Full account growth &amp; scheduling</p>
</button>
</div>
</div>

<div className="hidden space-y-6 animate-fade-in-up" id="step-2">
<div className="space-y-2">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Step 02</span>
<h2 className="text-2xl font-serif text-white">Who do you want to serve?</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('Coaches')">Coaches</button>
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('Real Estate')">Real Estate</button>
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('Ecommerce')">Ecommerce</button>
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('Agencies')">Agencies</button>
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('Local Business')">Local Biz</button>
<button className="niche-btn p-3 rounded-lg border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectNiche('YouTubers')">YouTubers</button>
</div>
</div>

<div className="hidden space-y-6 animate-fade-in-up" id="step-3">
<div className="space-y-2">
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Step 03</span>
<h2 className="text-2xl font-serif text-white">Preferred Communication?</h2>
</div>
<div className="flex flex-wrap gap-4">
<button className="lang-btn px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectLang('English')">English</button>
<button className="lang-btn px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectLang('Hindi')">Hindi</button>
<button className="lang-btn px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-orange-500/50 text-stone-300 hover:text-white text-sm transition-all" onclick="selectLang('Hinglish')">Hinglish</button>
</div>
</div>

<div className="hidden pt-8 border-t border-white/5 mt-8 animate-fade-in-up" id="generate-action">
<button className="w-full bg-orange-600 hover:bg-orange-500 text-white font-serif italic text-lg py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] flex items-center justify-center gap-2 group" onclick="generateOffer()">
                        Generate Offer Pack
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden space-y-8 animate-fade-in-up" id="results-view">

<div className="flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-6 gap-4">
<div>
<span className="text-orange-500 text-xs font-semibold tracking-widest uppercase">Your Personalized Blueprint</span>
<h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight mt-2">Ready to <span className="italic text-stone-500">Sell</span></h2>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-medium text-white flex items-center gap-2 transition-all" onclick="copyAll()">
<iconify-icon icon="lucide:copy" width="14"></iconify-icon>
                        Copy All
                    </button>
<button className="px-4 py-2 bg-white text-stone-950 rounded-lg text-xs font-semibold flex items-center gap-2 hover:bg-orange-50 transition-all" onclick="printView()">
<iconify-icon icon="lucide:download" width="14"></iconify-icon>
                        Save PDF
                    </button>
</div>
</div>

<section className="bg-gradient-to-br from-stone-900 to-stone-950 border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-white" icon="lucide:quote" width="100"></iconify-icon>
</div>
<div className="space-y-4 relative z-10">
<div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-wider font-medium">
<iconify-icon className="text-orange-500" icon="lucide:target"></iconify-icon>
                        Core Offer
                    </div>
<h3 className="text-2xl md:text-3xl font-serif text-white leading-tight" id="offer-headline">

</h3>
<p className="text-stone-400 font-light text-sm max-w-2xl leading-relaxed" id="offer-sub">

</p>
</div>
</section>

<section>
<h3 className="text-xl font-serif text-white mb-6">Pricing Strategy</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="pricing-grid">

</div>
</section>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<section className="bg-stone-900/30 border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-orange-500" icon="lucide:box" width="18"></iconify-icon>
<h3 className="text-lg font-serif text-white">Deliverables</h3>
</div>
<ul className="space-y-3 text-sm text-stone-300 font-light" id="deliverables-list">

</ul>
</section>

<section className="bg-stone-900/30 border border-white/5 rounded-2xl p-6">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-orange-500" icon="lucide:star" width="18"></iconify-icon>
<h3 className="text-lg font-serif text-white">Why You? (USPs)</h3>
</div>
<div className="space-y-4" id="usp-list">

</div>
</section>
</div>

<section className="border-t border-white/5 pt-8">
<h3 className="text-xl font-serif text-white mb-6">Execution Workflow</h3>
<div className="relative">
<div className="absolute left-4 top-0 bottom-0 w-px bg-white/10"></div>
<div className="space-y-6" id="workflow-list">

</div>
</div>
</section>

<section className="bg-stone-900 border border-white/5 rounded-2xl overflow-hidden">
<div className="bg-white/5 px-6 py-4 border-b border-white/5 flex gap-4 overflow-x-auto hide-scrollbar">
<button className="text-xs font-medium text-white border-b-2 border-orange-500 pb-1" onclick="showScript('short')">Short DM</button>
<button className="text-xs font-medium text-stone-500 hover:text-white pb-1 transition-colors" onclick="showScript('long')">Long Outreach</button>
<button className="text-xs font-medium text-stone-500 hover:text-white pb-1 transition-colors" onclick="showScript('whatsapp')">WhatsApp</button>
<button className="text-xs font-medium text-stone-500 hover:text-white pb-1 transition-colors" onclick="showScript('voicenote')">Voice Note</button>
</div>
<div className="p-6">
<div className="text-sm text-stone-300 font-mono bg-black/30 p-4 rounded-lg border border-white/5 leading-relaxed whitespace-pre-wrap" id="script-content">

</div>
<div className="mt-4 text-right">
<button className="text-xs text-orange-500 hover:text-orange-400 font-medium flex items-center justify-end gap-1" onclick="copyScript()">
<iconify-icon icon="lucide:copy" width="12"></iconify-icon> Copy Script
                        </button>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-white/5 bg-stone-950 py-8 mt-auto">
<div className="max-w-5xl mx-auto px-6 text-center">
<p className="text-stone-600 text-xs">
                © 2024 AI OfferGen. Empowering the next generation of builders.
            </p>
</div>
</footer>



    </>
  );
}
