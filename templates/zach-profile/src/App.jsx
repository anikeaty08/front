import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Pricing Selection Logic
        function selectPrice(id) {
            // Reset all
            document.querySelectorAll('[id^="price-card-"]').forEach(el => {
                el.classList.remove('pricing-selected');
                el.querySelector('.radio-indicator div').classList.add('opacity-0');
                el.querySelector('.radio-indicator').classList.remove('border-slate-900');
            });

            // Select clicked
            const selected = document.getElementById(`price-card-${id}`);
            selected.classList.add('pricing-selected');
            selected.querySelector('.radio-indicator div').classList.remove('opacity-0');
            selected.querySelector('.radio-indicator').classList.add('border-slate-900');
        }

        // Project Modal Logic
        const projectData = {
            'project1': {
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                title: 'CRM Autopilot',
                desc: 'A complete overhaul of sales data entry. I connected HubSpot to Notion using n8n and OpenAI. The system listens for sales calls, transcribes them, extracts action items, and populates the Notion database automatically.',
                stack: ['n8n', 'OpenAI', 'HubSpot']
            },
            'project2': {
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                title: 'Support AI Agent',
                desc: 'Built a sentiment analysis agent for a SaaS client. It reads Intercom tickets in real-time, categorizes urgency, and drafts responses for the support team to review. Reduced response time by 40%.',
                stack: ['Python', 'LangChain', 'Intercom API']
            }
        };

        function openModal(projectId) {
            const modal = document.getElementById('modal-overlay');
            const card = document.getElementById('modal-card');
            const contentArea = document.getElementById('modal-content-area');
            const data = projectData[projectId];

            // Build Content
            contentArea.innerHTML = `
                <img src="${data.img}" class="w-full h-64 object-cover">
                <div class="p-8">
                    <h3 class="text-xl font-semibold text-slate-900 mb-2 tracking-tight">${data.title}</h3>
                    <div class="flex gap-2 mb-4">
                        ${data.stack.map(tech => `<span class="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] uppercase font-semibold tracking-wider rounded-md">${tech}</span>`).join('')}
                    </div>
                    <p class="text-slate-500 text-sm leading-relaxed font-light">${data.desc}</p>
                </div>
            `;

            modal.classList.remove('hidden');
            setTimeout(() => {
                card.classList.remove('scale-95', 'opacity-0');
                card.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('modal-overlay');
            const card = document.getElementById('modal-card');

            card.classList.remove('scale-100', 'opacity-100');
            card.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Contact Modal Logic
        function openContactModal() {
            const modal = document.getElementById('contact-overlay');
            const card = document.getElementById('contact-card');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                card.classList.remove('scale-95', 'opacity-0');
                card.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeContactModal() {
            const modal = document.getElementById('contact-overlay');
            const card = document.getElementById('contact-card');

            card.classList.remove('scale-100', 'opacity-100');
            card.classList.add('scale-95', 'opacity-0');

            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Init default pricing
        selectPrice(2);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px] opacity-60 animate-float"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-slate-200 rounded-full blur-[120px] opacity-60 animate-float" style={{animationDelay: '-3s'}}></div>
</div>

<main className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.08),0_10px_20px_-10px_rgba(0,0,0,0.04)] rounded-[32px] overflow-hidden animate-card">

<div className="flex items-center justify-between px-8 pt-8 animate-content delay-100">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Zach Walsh" className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-sm" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=150&amp;h=150"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h2 className="text-sm font-semibold text-slate-900 tracking-tight leading-none">Zach Walsh</h2>
<span className="text-xs text-slate-400 font-medium">Automation Engineer</span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/50 px-2.5 py-1 text-xs font-medium text-slate-600 backdrop-blur-sm shadow-sm">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</span>
                    Available for projects
                </span>
</div>
</div>

<div className="px-8 pt-10 pb-8 sm:px-12 sm:pt-14 sm:pb-10">
<div className="space-y-6">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 leading-[1.1] animate-content delay-200">
                    Architecting the <br/>
<span className="text-slate-400">autonomous workforce.</span>
</h1>
<p className="text-base sm:text-lg text-slate-500 max-w-md leading-relaxed animate-content delay-300">
                    I replace manual busywork with intelligent systems. Building bespoke AI agents and workflows that scale with your vision, not your headcount.
                </p>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent animate-content delay-300"></div>

<div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-slate-50/30 animate-content delay-400">

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out">
<iconify-icon className="text-slate-600" icon="solar:graph-new-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Nodes</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed font-light">
                    Custom logic endpoints and data structuring.
                </p>
</div>

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out">
<iconify-icon className="text-slate-600" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">AI Agents</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed font-light">
                    LLM integration for decision-making tasks.
                </p>
</div>

<div className="p-6 sm:p-8 hover:bg-white/60 transition-colors duration-300 group cursor-default">
<div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm group-hover:scale-105 transition-transform duration-300 ease-out">
<iconify-icon className="text-slate-600" icon="solar:round-transfer-horizontal-linear" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900">Workflows</h3>
<p className="mt-1 text-xs text-slate-500 leading-relaxed font-light">
                    End-to-end pipelines that run 24/7.
                </p>
</div>
</div>

<div className="w-full h-px bg-slate-100 animate-content delay-500"></div>

<div className="px-8 py-10 sm:px-12 bg-white animate-content delay-500">
<div className="max-w-md mx-auto">
<div className="mb-4">
<iconify-icon className="text-slate-300" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">About Me</h3>
<div className="prose prose-sm prose-slate text-slate-500 font-light leading-7 tracking-wide">
<p className="mb-4">
                        Hey, I'm Zach.
                    </p>
<p className="mb-4">
                        I've always loved computers. Not just the screens, but the invisible lines of logic that connect them. I realized early on that 90% of "work" is just moving data from one place to another.
                    </p>
<p>
                        I specialize in integrations that feel like magic. I don't just write code; I design systems that allow founders to step away from the dashboard and back into the driver's seat. If it has an API, I can automate it.
                    </p>
</div>
</div>
</div>

<div className="bg-slate-50/50 border-t border-slate-100 px-8 py-10 sm:px-12 animate-content delay-600">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Selected Work</h3>
<span className="text-xs text-slate-400 font-medium">2023 - Present</span>
</div>
<div className="grid grid-cols-2 gap-4">

<button className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]" onclick="openModal('project1')">
<img alt="CRM Automation" className="h-full w-full object-cover transition-all duration-500 group-hover:opacity-90" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3 border-t border-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs font-semibold text-slate-900">CRM Autopilot</p>
<p className="text-[10px] text-slate-500">HubSpot to Notion Sync</p>
</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white/90 backdrop-blur rounded-full p-1.5 shadow-sm">
<iconify-icon className="text-slate-700 text-xs block" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>
</button>

<button className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200 border border-slate-200 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]" onclick="openModal('project2')">
<img alt="Support Bot" className="h-full w-full object-cover transition-all duration-500 group-hover:opacity-90" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 bg-white/90 backdrop-blur-md p-3 border-t border-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
<p className="text-xs font-semibold text-slate-900">Support AI</p>
<p className="text-[10px] text-slate-500">Intercom Sentiment Analysis</p>
</div>
<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="bg-white/90 backdrop-blur rounded-full p-1.5 shadow-sm">
<iconify-icon className="text-slate-700 text-xs block" icon="solar:maximize-square-linear"></iconify-icon>
</div>
</div>
</button>
</div>
</div>

<div className="bg-white border-t border-slate-100 px-8 py-10 sm:px-12 animate-content delay-600">
<div className="text-center mb-8">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Real workflow templates from my library</h3>
<p className="text-xs text-slate-500 mt-1 font-light">Browse by category and deploy in one click.</p>
<div className="flex items-center justify-center gap-2 mt-4">
<button className="px-3 py-1 rounded-full bg-slate-900 text-white text-[10px] font-medium tracking-wide">E-commerce</button>
<button className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-[10px] font-medium tracking-wide transition-colors">Messaging</button>
<button className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 text-[10px] font-medium tracking-wide transition-colors">Data Ops</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="group rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-all hover:border-slate-300 cursor-pointer">
<div className="flex gap-1.5 mb-3 text-slate-400">
<iconify-icon className="text-slate-400" icon="solar:graph-up-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:chat-round-dots-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-200" icon="solar:bolt-bold" width="14"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-slate-900 mb-1">Stock Analysis Agent</h4>
<p className="text-[10px] text-slate-500 font-light leading-relaxed mb-3">Monitor Bookmarklet with AI to analyze stocks. Generates a report with Agent Researchers.</p>
<div className="flex items-center text-[10px] font-medium text-indigo-600 group-hover:text-indigo-700">
                        View workflow
                        <iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group rounded-xl border border-slate-200 p-5 hover:shadow-sm transition-all hover:border-slate-300 cursor-pointer">
<div className="flex gap-1.5 mb-3 text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:cart-large-bold" width="14"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:user-hand-up-bold" width="14"></iconify-icon>
</div>
<h4 className="text-xs font-semibold text-slate-900 mb-1">WooCommerce Support</h4>
<p className="text-[10px] text-slate-500 font-light leading-relaxed mb-3">Fully automated AI powered Support Agent for your WooCommerce webshop.</p>
<div className="flex items-center text-[10px] font-medium text-indigo-600 group-hover:text-indigo-700">
                        View workflow
                        <iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
<div className="text-center mt-4">
<a className="text-[10px] text-slate-400 hover:text-slate-600 font-medium inline-flex items-center gap-1 transition-colors" href="#">
                    Browse all 194 workflows
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="bg-slate-50/50 border-t border-slate-100 px-8 py-10 sm:px-12 animate-content delay-700">
<div className="text-center mb-8">
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Integrations are baked in</h3>
<p className="text-xs text-slate-500 mt-1 font-light">Connect to 370+ services. No migration, no lock-in.</p>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3">

<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:webflow" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Webflow</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:airtable-icon" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Airtable</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:hubspot" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">HubSpot</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:google-icon" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Google</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:snowflake-icon" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Snowflake</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:supabase-icon" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Supabase</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:figma" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Figma</span>
</div>
<div className="bg-white rounded-lg border border-slate-200 p-3 flex flex-col items-center justify-center gap-2 hover:border-slate-300 transition-colors">
<iconify-icon icon="logos:notion-icon" width="20"></iconify-icon>
<span className="text-[9px] font-medium text-slate-400">Notion</span>
</div>
</div>
</div>

<div className="px-2 pb-2 bg-slate-50/50 animate-content delay-700">
<div className="relative w-full h-64 bg-slate-900 rounded-2xl overflow-hidden flex flex-col items-center justify-center text-center p-6 bg-dark-grid group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 blur-[80px] rounded-full group-hover:bg-blue-500/30 transition-colors duration-500"></div>
<div className="relative z-10 max-w-sm">
<div className="inline-flex items-center justify-center p-1.5 mb-4 bg-slate-800/50 backdrop-blur rounded-lg border border-slate-700/50">
<iconify-icon className="text-indigo-400" icon="solar:bolt-linear" width="16"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Automate everything.</h3>
<p className="text-xs text-slate-400 font-light mb-6">
                        We are the easiest way to build automations &amp; AI agents for the AI era. Drag nodes to the canvas and click to run.
                    </p>
<button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium rounded-lg transition-colors shadow-lg shadow-indigo-900/20" onclick="openContactModal()">
                        Get Started
                    </button>
</div>

<div className="absolute top-10 right-10 px-3 py-1.5 bg-slate-800/80 backdrop-blur rounded-lg border border-slate-700 text-[10px] text-slate-300 rotate-6 opacity-60">Add Nodes</div>
<div className="absolute bottom-10 left-10 px-3 py-1.5 bg-slate-800/80 backdrop-blur rounded-lg border border-slate-700 text-[10px] text-slate-300 -rotate-3 opacity-60">Visual Engine</div>
</div>
</div>

<div className="bg-white border-t border-slate-100 px-8 py-10 sm:px-12 animate-content delay-800">
<div className="text-center mb-8">
<span className="inline-block px-2 py-0.5 rounded border border-slate-200 text-[9px] font-medium text-slate-400 uppercase tracking-wider mb-3">What's included</span>
<h3 className="text-sm font-semibold text-slate-900 tracking-tight">Here's a quick scroll through what I automate</h3>
<p className="text-xs text-slate-500 mt-1 font-light">Real-time data syncing between your tools.</p>
</div>
<div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50">
<div className="flex gap-1 border-b border-slate-200 p-2 bg-white">
<button className="px-2 py-1 rounded bg-slate-900 text-white text-[9px] font-medium">Spreadsheet View</button>
<button className="px-2 py-1 rounded text-slate-500 hover:bg-slate-50 text-[9px] font-medium">Gallery View</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-[10px]">
<thead className="bg-slate-50/50 text-slate-400 font-medium">
<tr className="border-b border-slate-200">
<th className="px-4 py-2 font-normal w-10">#</th>
<th className="px-4 py-2 font-normal">Name</th>
<th className="px-4 py-2 font-normal">Email</th>
<th className="px-4 py-2 font-normal">Status</th>
<th className="px-4 py-2 font-normal">Revenue</th>
</tr>
</thead>
<tbody className="bg-white divide-y divide-slate-100 text-slate-600">
<tr>
<td className="px-4 py-2.5 text-slate-400">1</td>
<td className="px-4 py-2.5 font-medium text-slate-900">Acme Corp</td>
<td className="px-4 py-2.5">team@acme.io</td>
<td className="px-4 py-2.5"><span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium text-[9px]">Active</span></td>
<td className="px-4 py-2.5">$124,000</td>
</tr>
<tr>
<td className="px-4 py-2.5 text-slate-400">2</td>
<td className="px-4 py-2.5 font-medium text-slate-900">Globex Inc</td>
<td className="px-4 py-2.5">ops@globex.net</td>
<td className="px-4 py-2.5"><span className="px-1.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-medium text-[9px]">Active</span></td>
<td className="px-4 py-2.5">$88,500</td>
</tr>
<tr>
<td className="px-4 py-2.5 text-slate-400">3</td>
<td className="px-4 py-2.5 font-medium text-slate-900">Stark Ind</td>
<td className="px-4 py-2.5">tony@stark.com</td>
<td className="px-4 py-2.5"><span className="px-1.5 py-0.5 rounded-full bg-amber-50 text-amber-600 font-medium text-[9px]">Pending</span></td>
<td className="px-4 py-2.5">$312,000</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="flex justify-center gap-2 mt-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<iconify-icon icon="logos:salesforce" width="16"></iconify-icon>
<iconify-icon icon="logos:slack-icon" width="16"></iconify-icon>
<iconify-icon icon="logos:zapier-icon" width="16"></iconify-icon>
<iconify-icon icon="logos:stripe" width="16"></iconify-icon>
</div>
</div>

<div className="border-t border-slate-100 bg-white px-8 py-10 sm:px-12 animate-content delay-800">
<h3 className="text-sm font-semibold text-slate-900 mb-6 tracking-tight">Engagement Builder</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

<div className="cursor-pointer rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-slate-300 bg-white hover:bg-slate-50/50" id="price-card-1" onclick="selectPrice(1)">
<div className="flex items-start justify-between mb-3">
<div className="p-2 rounded-lg bg-slate-100 text-slate-600">
<iconify-icon icon="solar:stopwatch-linear" width="18"></iconify-icon>
</div>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center radio-indicator">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 transition-opacity"></div>
</div>
</div>
<h4 className="text-sm font-semibold text-slate-900">24-Hour Sprint</h4>
<p className="text-xs text-slate-500 mt-1 mb-3 font-light">Rapid prototyping or single automation fix.</p>
<p className="text-sm font-medium text-slate-900">$850 <span className="text-slate-400 font-normal">/ one-time</span></p>
</div>

<div className="cursor-pointer rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-slate-300 bg-white hover:bg-slate-50/50" id="price-card-2" onclick="selectPrice(2)">
<div className="flex items-start justify-between mb-3">
<div className="p-2 rounded-lg bg-slate-100 text-slate-600 relative z-10">
<iconify-icon icon="solar:infinite-linear" width="18"></iconify-icon>
</div>
<div className="w-4 h-4 rounded-full border border-slate-300 flex items-center justify-center radio-indicator">
<div className="w-2 h-2 rounded-full bg-slate-900 opacity-0 transition-opacity"></div>
</div>
</div>
<h4 className="text-sm font-semibold text-slate-900">Growth Partner</h4>
<p className="text-xs text-slate-500 mt-1 mb-3 font-light">Ongoing development and agent maintenance.</p>
<p className="text-sm font-medium text-slate-900">$2,000 <span className="text-slate-400 font-normal">/ month</span></p>
</div>
</div>
<button className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:scale-[1.01] active:scale-[0.99]" onclick="openContactModal()">
<span>Contact to Book</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="border-t border-slate-100 bg-slate-50/50 px-8 py-6 flex items-center justify-between animate-content delay-800">
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-800 transition-colors" href="#">
<iconify-icon icon="solar:plain-3-bold-duotone" width="18"></iconify-icon> 
</a>
<a className="text-slate-400 hover:text-slate-800 transition-colors" href="#">
<iconify-icon icon="solar:link-circle-bold-duotone" width="18"></iconify-icon> 
</a>
<a className="text-slate-400 hover:text-slate-800 transition-colors" href="#">
<iconify-icon icon="solar:code-circle-bold-duotone" width="18"></iconify-icon> 
</a>
</div>
<p className="text-[10px] font-medium text-slate-400 tracking-tight uppercase">
                © 2024 Zach Walsh
            </p>
</div>
</main>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4" id="modal-overlay">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm modal-backdrop" onclick="closeModal()"></div>
<div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 opacity-0 modal-content" id="modal-card">

<div id="modal-content-area"></div>
<button className="absolute top-4 right-4 p-2 bg-white/50 hover:bg-white rounded-full transition-colors text-slate-800 z-10" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center p-4" id="contact-overlay">
<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm modal-backdrop" onclick="closeContactModal()"></div>
<div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden transform scale-95 opacity-0 modal-content p-8" id="contact-card">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">Book Engagement</h3>
<p className="text-xs text-slate-500 font-light mt-1">Fill out the details below to start the conversation.</p>
</div>
<button className="text-slate-400 hover:text-slate-800 transition-colors" onclick="closeContactModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); closeContactModal();">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Name</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-900 focus:ring-0 outline-none transition-colors" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email</label>
<input className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-900 focus:ring-0 outline-none transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Project Details</label>
<textarea className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:border-slate-900 focus:ring-0 outline-none transition-colors" placeholder="I need to automate..." rows="3"></textarea>
</div>
<button className="w-full rounded-lg bg-slate-900 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-colors" type="submit">
                    Send Request
                </button>
</form>
</div>
</div>


    </>
  );
}
