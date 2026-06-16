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



        // Page Navigation
        function goToDashboard() {
            document.getElementById('landingPage').classList.replace('page-visible', 'page-hidden');
            document.getElementById('dashboardPage').classList.replace('page-hidden', 'page-visible');
        }

        function goToLanding() {
            document.getElementById('dashboardPage').classList.replace('page-visible', 'page-hidden');
            document.getElementById('landingPage').classList.replace('page-hidden', 'page-visible');
        }

        // Region Popup Toggle
        function toggleRegionPopup() {
            const popup = document.getElementById('regionPopup');
            const chevron = document.getElementById('regionChevron');
            
            if (popup.classList.contains('hidden')) {
                popup.classList.remove('hidden');
                popup.classList.add('region-popup-enter');
                popup.classList.remove('region-popup-exit');
                chevron.classList.add('rotate-180');
                document.getElementById('regionSearch').focus();
            } else {
                popup.classList.add('region-popup-exit');
                popup.classList.remove('region-popup-enter');
                chevron.classList.remove('rotate-180');
                setTimeout(() => popup.classList.add('hidden'), 200);
            }
        }

        // Select Region
        function selectRegion(elem) {
            // Remove active state from all items
            document.querySelectorAll('.region-item').forEach(el => {
                el.classList.remove('region-item-active');
                el.querySelector('.region-check').classList.add('hidden');
                
                // Reset styles to inactive
                const iconContainer = el.querySelector('div:first-child');
                const icon = el.querySelector('.region-item-icon');
                const name = el.querySelector('.region-item-name');
                const statusBadge = el.querySelector('.bg-[#108A5E]\\/10, .bg-emerald-50');
                
                iconContainer.className = 'w-8 h-8 bg-gray-100/80 border border-gray-200/60 rounded-lg flex items-center justify-center flex-shrink-0';
                icon.className = 'region-item-icon text-gray-500';
                name.className = 'region-item-name text-sm font-normal text-gray-800';
                
                if (statusBadge) {
                    statusBadge.className = 'flex items-center gap-1 px-2 py-0.5 bg-emerald-50 rounded-full';
                    statusBadge.innerHTML = '<div class="w-1.5 h-1.5 rounded-full bg-emerald-400"></div><span class="text-[10px] font-medium text-emerald-600">Healthy</span>';
                }
            });
            
            // Add active state to clicked item
            elem.classList.add('region-item-active');
            elem.querySelector('.region-check').classList.remove('hidden');
            
            const iconContainer = elem.querySelector('div:first-child');
            const icon = elem.querySelector('.region-item-icon');
            const name = elem.querySelector('.region-item-name');
            const statusBadge = elem.querySelector('.bg-emerald-50');
            
            iconContainer.className = 'w-8 h-8 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-lg flex items-center justify-center flex-shrink-0';
            icon.className = 'region-item-icon text-[#108A5E]';
            name.className = 'region-item-name text-sm font-medium text-[#108A5E]';
            
            if (statusBadge) {
                statusBadge.className = 'flex items-center gap-1 px-2 py-0.5 bg-[#108A5E]/10 rounded-full';
                statusBadge.innerHTML = '<div class="w-1.5 h-1.5 rounded-full bg-[#108A5E]"></div><span class="text-[10px] font-medium text-[#108A5E]">Active</span>';
            }
            
            // Update button text
            document.getElementById('regionBtnText').innerText = 'Region: ' + elem.getAttribute('data-label');
            
            // Close popup
            toggleRegionPopup();
        }

        // Filter Regions
        function filterRegions(val) {
            const query = val.toLowerCase();
            document.querySelectorAll('.region-item').forEach(item => {
                const text = item.innerText.toLowerCase();
                item.style.display = text.includes(query) ? 'flex' : 'none';
            });
        }

        // Sidebar Panels Toggles
        function closeAllPanels() {
            const panels = ['codePanel', 'profilePanel', 'chatbotPanel'];
            const btns = ['codeBtn', 'profileBtn', 'chatbotToggle'];
            
            panels.forEach(id => {
                const el = document.getElementById(id);
                if (!el.classList.contains('hidden')) {
                    el.style.animation = 'panelSlideOut 0.3s ease forwards';
                    setTimeout(() => { el.classList.add('hidden'); el.style.animation = ''; }, 300);
                }
            });
            
            btns.forEach(id => {
                const btn = document.getElementById(id);
                if(btn) btn.classList.remove('active-panel');
            });
        }

        function togglePanel(panelId, btnId) {
            const panel = document.getElementById(panelId);
            const btn = document.getElementById(btnId);
            const isHidden = panel.classList.contains('hidden');
            
            closeAllPanels();
            
            if (isHidden) {
                panel.classList.remove('hidden');
                panel.style.animation = 'panelSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards';
                if(btn) btn.classList.add('active-panel');
                
                // If it's chatbot, auto focus input
                if (panelId === 'chatbotPanel') {
                    setTimeout(() => document.getElementById('chatInput').focus(), 400);
                }
            }
        }

        function toggleCodePanel() { togglePanel('codePanel', 'codeBtn'); }
        function toggleProfilePanel() { togglePanel('profilePanel', 'profileBtn'); }
        function toggleChatbot() { togglePanel('chatbotPanel', 'chatbotToggle'); }

        // Grid Items Mouse Tracking (for subtle radial glow)
        function trackMouse(e, elem) {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            elem.style.setProperty('--mouse-x', `${x}px`);
            elem.style.setProperty('--mouse-y', `${y}px`);
        }

        function trackNodeMouse(e, elem) {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            elem.style.setProperty('--node-mx', `${x}px`);
            elem.style.setProperty('--node-my', `${y}px`);
            
            const glow = elem.querySelector('.node-hover-glow');
            if (glow) glow.style.opacity = '1';
        }

        document.querySelectorAll('.active-node-card').forEach(card => {
            card.addEventListener('mouseleave', function() {
                const glow = this.querySelector('.node-hover-glow');
                if (glow) glow.style.opacity = '0';
            });
        });

        // Grid Ripple Effect
        function createRipple(event, elem) {
            const circle = document.createElement('div');
            const diameter = Math.max(elem.clientWidth, elem.clientHeight);
            const radius = diameter / 2;

            const rect = elem.getBoundingClientRect();
            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${event.clientX - rect.left - radius}px`;
            circle.style.top = `${event.clientY - rect.top - radius}px`;
            circle.classList.add('ripple-effect');

            const existingRipple = elem.querySelector('.ripple-effect');
            if (existingRipple) {
                existingRipple.remove();
            }

            elem.appendChild(circle);
            circle.style.animation = 'ripple 0.6s linear';
            setTimeout(() => {
                circle.remove();
                
                // Demo interaction: fill prompt box
                const title = elem.querySelector('.grid-title').innerText;
                const promptBox = document.querySelector('.prompt-card p');
                promptBox.innerHTML = `I want to ${title.toLowerCase()}<span class="input-cursor text-[#108A5E] font-light">|</span>`;
            }, 600);
        }

        // Chatbot Messaging
        function sendMessage() {
            const input = document.getElementById('chatInput');
            const val = input.value.trim();
            if(!val) return;
            
            appendMessage(val, 'user');
            input.value = '';
            
            setTimeout(() => {
                appendMessage("I'm generating the infrastructure configuration for that now. I'll have the YAML ready in a moment.", 'bot');
                setTimeout(toggleCodePanel, 1500);
            }, 800);
        }

        function sendQuickMessage(text) {
            appendMessage(text, 'user');
            setTimeout(() => {
                appendMessage(`Fetching the latest logs and metrics for "${text}"...`, 'bot');
            }, 600);
        }

        function appendMessage(text, sender) {
            const container = document.getElementById('chatMessages');
            const div = document.createElement('div');
            
            if (sender === 'user') {
                div.className = 'flex items-start gap-2.5 flex-row-reverse';
                div.innerHTML = `
                    <div class="w-7 h-7 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><span class="text-[10px] text-white font-medium">JD</span></div>
                    <div class="bg-[#108A5E] rounded-2xl rounded-tr-md px-4 py-3 shadow-sm max-w-[85%]"><p class="text-sm text-white">${text}</p></div>
                `;
            } else {
                div.className = 'flex items-start gap-2.5';
                div.innerHTML = `
                    <div class="w-7 h-7 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><iconify-icon icon="solar:bot-linear" class="text-[#108A5E]" width="14" height="14" stroke-width="1.5"></iconify-icon></div>
                    <div class="bg-white/70 border border-white/60 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%]"><p class="text-sm text-gray-800">${text}</p></div>
                `;
            }
            
            container.appendChild(div);
            container.scrollTop = container.scrollHeight;
        }

        // Close popups when clicking outside
        document.addEventListener('click', function(event) {
            const regionBtn = document.getElementById('regionBtn');
            const regionPopup = document.getElementById('regionPopup');
            if (regionBtn && regionPopup && !regionBtn.contains(event.target) && !regionPopup.contains(event.target) && !regionPopup.classList.contains('hidden')) {
                toggleRegionPopup();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 -z-10 bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/5de56d6c-54c4-4008-8af0-cb067f0e0a1f/3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="page-transition page-visible fixed inset-0 z-[100] flex flex-col overflow-y-auto" id="landingPage" style={{scrollbarWidth: 'none'}}>
<div className="fixed inset-0 -z-10 bg-cover bg-center" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/5de56d6c-54c4-4008-8af0-cb067f0e0a1f/3840w.jpg\')', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>
<div className="fixed backdrop-blur-[60px] -z-[5] bg-[#dbdce0]/60 top-0 right-0 bottom-0 left-0"></div>

<header className="fixed transform -translate-x-1/2 w-[calc(100%-3rem)] glass-nav flex z-50 bg-white/40 max-w-6xl border-white/60 border rounded-full pt-3 pr-6 pb-3 pl-6 top-6 right-0 left-24 shadow-[0_8px_32px_rgba(0,0,0,0.06)] items-center justify-between" style={{animation: 'fadeInUpSmooth 0.8s ease both'}}>
<div className="flex max-w-3xl z-50">
<svg className="fill-gray-900" height="32" viewbox="0 0 100 100" width="32">
<path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 75 C36.2 75 25 63.8 25 50 C25 36.2 36.2 25 50 25 C63.8 25 75 36.2 75 50 C75 63.8 63.8 75 50 75 Z">
</path>
<rect height="25" rx="5" width="25" x="65" y="65"></rect>
</svg>
<span className="text-base font-medium text-gray-900 tracking-tight">Nexus CloudCore</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-sm font-normal text-gray-600" href="#">Features</a>
<a className="nav-link text-sm font-normal text-gray-600" href="#">Integrations</a>
<a className="nav-link text-sm font-normal text-gray-600" href="#">Pricing</a>
<a className="nav-link text-sm font-normal text-gray-600" href="#">Changelog</a>
</div>
<div className="flex z-50 items-center">
<button className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Sign in</button>
<button className="group relative px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full shadow-lg overflow-hidden transition-transform hover:scale-105 active:scale-95" onclick="goToDashboard()">
<div className="absolute inset-0 bg-gradient-to-r from-[#108A5E] to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-1.5">
                        Get Started
                        <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</span>
</button>
</div>
</header>

<main className="flex-1 flex flex-col z-10 w-full mt-40 mr-0 ml-0 pt-10 relative items-center">

<div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#108A5E]/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>
<div className="text-center max-w-4xl mx-auto w-full" style={{animation: 'fadeInUpSmooth 1s ease both 0.1s'}}>

<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/40 border border-white/60 shadow-sm backdrop-blur-md mb-8 cursor-pointer hover:bg-white/60 transition-all hover:scale-105">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#108A5E] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#108A5E]"></span>
</span>
<span className="text-xs font-medium text-gray-800 tracking-wide">Nexus Engine v2.0 is now live</span>
<iconify-icon className="text-gray-500" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>

<h1 className="text-6xl md:text-[5.5rem] font-medium tracking-tighter text-gray-900 leading-[1.05] mb-6">
                    Infrastructure that <br/>
<span className="hero-highlight-gradient">scales with you</span>
</h1>

<p className="text-lg md:text-xl font-normal text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
                    Enterprise-grade container orchestration with AI-powered DevOps. Deploy, monitor, and manage your cloud infrastructure from a single pane of glass.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-24">
<button className="group relative px-8 py-4 bg-gray-900 text-white text-[15px] font-medium rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.15)] overflow-hidden transition-all hover:scale-105 active:scale-95 flex items-center justify-center w-full sm:w-auto" onclick="goToDashboard()">
<div className="absolute inset-0 bg-gradient-to-r from-[#108A5E] to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<span className="relative flex items-center gap-2">
                            Open Dashboard
                            <iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-4 bg-white/40 backdrop-blur-md border border-white/60 text-gray-900 text-[15px] font-medium rounded-full shadow-sm hover:bg-white/60 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto">
<iconify-icon className="text-gray-600" icon="solar:play-circle-linear" width="20"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>

<div className="relative w-full max-w-5xl mx-auto perspective-1000 z-20" style={{animation: 'fadeInUpSmooth 1s ease both 0.3s'}}>
<div className="relative w-full h-[400px] bg-white/40 backdrop-blur-2xl border border-white/60 rounded-t-3xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden border-b-0" style={{maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'}}>

<div className="h-14 border-b border-white/40 bg-white/20 flex items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
<div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
</div>
<div className="w-48 h-6 bg-white/40 rounded-full flex items-center justify-center border border-white/50">
<span className="text-[10px] text-gray-500 font-medium tracking-widest uppercase">nexus-core-prd</span>
</div>
<div className="w-20 h-6"></div> 
</div>

<div className="p-8 grid grid-cols-3 gap-6 opacity-60">
<div className="h-32 rounded-2xl bg-white/50 border border-white/60 shadow-sm flex items-center justify-center">
<iconify-icon className="text-gray-400" icon="solar:chart-square-linear" width="32"></iconify-icon>
</div>
<div className="h-32 rounded-2xl bg-white/50 border border-white/60 shadow-sm col-span-2 p-6 flex flex-col justify-center gap-3">
<div className="w-1/3 h-3 bg-gray-300/50 rounded-full"></div>
<div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-[#108A5E]/40 rounded-full"></div></div>
<div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#108A5E]/40 rounded-full"></div></div>
</div>
<div className="h-48 rounded-2xl bg-white/50 border border-white/60 shadow-sm col-span-3 p-6 flex flex-col gap-4">
<div className="w-1/4 h-4 bg-gray-300/50 rounded-full mb-2"></div>
<div className="w-full h-12 bg-white/40 rounded-xl border border-white/50"></div>
<div className="w-full h-12 bg-white/40 rounded-xl border border-white/50"></div>
</div>
</div>
</div>
</div>

<div className="mt-[-80px] mb-24 relative z-30 flex flex-col items-center" style={{animation: 'fadeInUpSmooth 1s ease both 0.5s'}}>
<p className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-6 text-center">Powering infrastructure for</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-gray-700 font-medium text-xl"><iconify-icon icon="solar:box-minimalistic-linear" width="28"></iconify-icon>Acme Corp</div>
<div className="flex items-center gap-2 text-gray-700 font-medium text-xl"><iconify-icon icon="solar:planet-linear" width="28"></iconify-icon>GlobalNet</div>
<div className="flex items-center gap-2 text-gray-700 font-medium text-xl"><iconify-icon icon="solar:leaf-linear" width="28"></iconify-icon>Evergreen</div>
<div className="flex items-center gap-2 text-gray-700 font-medium text-xl hidden sm:flex"><iconify-icon icon="solar:pulse-linear" width="28"></iconify-icon>PulseTech</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-3 gap-6 z-30">

<div className="feature-card-new relative bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 cursor-pointer overflow-hidden group" onclick="goToDashboard()" style={{animation: 'fadeInUpSmooth 1s ease both 0.6s'}}>
<div className="hover-glow absolute inset-0 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#108A5E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-white/80 flex items-center justify-center mb-6 text-[#108A5E] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<iconify-icon icon="solar:cloud-upload-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3 tracking-tight">One-Click Deploy</h3>
<p className="text-sm text-gray-600 leading-relaxed font-normal">Push to production in seconds with automated CI/CD pipelines and true zero-downtime rollouts.</p>
</div>
</div>

<div className="feature-card-new relative bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 cursor-pointer overflow-hidden group" onclick="goToDashboard()" style={{animation: 'fadeInUpSmooth 1s ease both 0.7s'}}>
<div className="hover-glow absolute inset-0 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#108A5E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-white/80 flex items-center justify-center mb-6 text-[#108A5E] group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<iconify-icon icon="solar:bot-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3 tracking-tight">AI Copilot</h3>
<p className="text-sm text-gray-600 leading-relaxed font-normal">Intelligent assistant that helps you manage infrastructure, scale nodes, and debug with natural language.</p>
</div>
</div>

<div className="feature-card-new relative bg-white/50 backdrop-blur-xl border border-white/60 rounded-3xl p-8 cursor-pointer overflow-hidden group" onclick="goToDashboard()" style={{animation: 'fadeInUpSmooth 1s ease both 0.8s'}}>
<div className="hover-glow absolute inset-0 bg-gradient-to-b from-white/80 to-transparent pointer-events-none"></div>
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#108A5E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-white/80 flex items-center justify-center mb-6 text-[#108A5E] group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-3 tracking-tight">Enterprise Security</h3>
<p className="text-sm text-gray-600 leading-relaxed font-normal">SOC2 compliant out of the box with automatic vulnerability scanning and real-time active threat detection.</p>
</div>
</div>
</div>
</main>
</div>

<div className="page-transition page-hidden absolute inset-0 p-6 flex flex-col" id="dashboardPage">
<header className="flex justify-between items-center z-20 relative w-full px-4">
<div className="flex items-center">
<a className="logo-link" onclick="goToLanding()">
<svg className="fill-black" height="40" viewbox="0 0 100 100" width="40">
<path d="M50 0 C22.4 0 0 22.4 0 50 C0 77.6 22.4 100 50 100 C77.6 100 100 77.6 100 50 C100 22.4 77.6 0 50 0 Z M50 75 C36.2 75 25 63.8 25 50 C25 36.2 36.2 25 50 25 C63.8 25 75 36.2 75 50 C75 63.8 63.8 75 50 75 Z"></path>
<rect height="25" rx="5" width="25" x="65" y="65"></rect>
</svg>
</a>
</div>
<div className="hidden md:flex items-center bg-white/30 backdrop-blur-md border border-white/40 p-1.5 rounded-full shadow-lg">
<button className="px-8 py-2.5 bg-white shadow-md border border-white/60 rounded-full text-base font-medium text-gray-900">Deploy</button>
<button className="px-8 py-2.5 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-full transition">Monitor</button>
<button className="px-8 py-2.5 text-base font-normal text-gray-700 hover:text-gray-900 hover:bg-white/40 rounded-full transition">Configure</button>
</div>
<div className="flex items-center gap-4">
<div className="relative">
<button className="region-btn hidden md:flex items-center gap-2 px-6 py-3.5 bg-white/40 backdrop-blur-md border border-white/50 rounded-full shadow-md cursor-pointer" id="regionBtn" onclick="toggleRegionPopup()">
<iconify-icon className="text-gray-800" height="16" icon="solar:server-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-sm font-medium" id="regionBtnText">Region: US-East (N. Virginia)</span>
<iconify-icon className="text-gray-500 ml-1 transition-transform duration-200" height="14" icon="solar:alt-arrow-down-linear" id="regionChevron" strokeWidth="1.5" width="14"></iconify-icon>
</button>
<div className="hidden absolute top-full right-0 mt-3 w-[420px] bg-white/70 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden z-[200]" id="regionPopup">
<div className="px-6 pt-6 pb-4">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-medium text-gray-900 tracking-tight">Select Region</h3>
<button className="w-7 h-7 rounded-full bg-white/60 border border-white/70 flex items-center justify-center hover:bg-white/90 transition-colors" onclick="toggleRegionPopup()">
<iconify-icon className="text-gray-500" height="14" icon="solar:close-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
<p className="text-xs text-gray-500">Choose the closest region for optimal performance</p>
</div>
<div className="px-6 pb-3">
<div className="flex items-center gap-2.5 bg-white/60 border border-white/70 rounded-xl px-4 py-2.5 shadow-inner focus-within:border-[#108A5E]/30 transition-colors">
<iconify-icon className="text-gray-400" height="16" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none" id="regionSearch" oninput="filterRegions(this.value)" placeholder="Search regions..." type="text"/>
</div>
</div>
<div className="px-3 pb-3 max-h-[320px] overflow-y-auto" id="regionList" style={{scrollbarWidth: 'thin', scrollbarColor: 'rgba(0,0,0,0.1) transparent'}}>
<div className="region-group px-3 pt-3 pb-1"><span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Americas</span></div>
<div className="region-item region-item-active flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-pointer mx-1" data-label="US-East (N. Virginia)" data-region="us-east-1" onclick="selectRegion(this)">
<div className="w-8 h-8 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-lg flex items-center justify-center flex-shrink-0"><iconify-icon className="region-item-icon text-[#108A5E]" height="16" icon="solar:server-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon></div>
<div className="flex-1 min-w-0"><div className="region-item-name text-sm font-medium text-[#108A5E]">US-East (N. Virginia)</div><div className="text-[11px] text-gray-400 mt-0.5">us-east-1 · 14ms latency</div></div>
<div className="flex items-center gap-2"><div className="flex items-center gap-1 px-2 py-0.5 bg-[#108A5E]/10 rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-[#108A5E]"></div><span className="text-[10px] font-medium text-[#108A5E]">Active</span></div><iconify-icon className="text-[#108A5E] region-check" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
</div>
<div className="region-item flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-pointer mx-1" data-label="US-West (Oregon)" data-region="us-west-2" onclick="selectRegion(this)">
<div className="w-8 h-8 bg-gray-100/80 border border-gray-200/60 rounded-lg flex items-center justify-center flex-shrink-0"><iconify-icon className="region-item-icon text-gray-500" height="16" icon="solar:server-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon></div>
<div className="flex-1 min-w-0"><div className="region-item-name text-sm font-normal text-gray-800">US-West (Oregon)</div><div className="text-[11px] text-gray-400 mt-0.5">us-west-2 · 48ms latency</div></div>
<div className="flex items-center gap-2"><div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div><span className="text-[10px] font-medium text-emerald-600">Healthy</span></div><iconify-icon className="text-[#108A5E] region-check hidden" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
</div>
<div className="region-group px-3 pt-4 pb-1"><span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Europe</span></div>
<div className="region-item flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-pointer mx-1" data-label="EU-West (Ireland)" data-region="eu-west-1" onclick="selectRegion(this)">
<div className="w-8 h-8 bg-gray-100/80 border border-gray-200/60 rounded-lg flex items-center justify-center flex-shrink-0"><iconify-icon className="region-item-icon text-gray-500" height="16" icon="solar:server-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon></div>
<div className="flex-1 min-w-0"><div className="region-item-name text-sm font-normal text-gray-800">EU-West (Ireland)</div><div className="text-[11px] text-gray-400 mt-0.5">eu-west-1 · 86ms latency</div></div>
<div className="flex items-center gap-2"><div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div><span className="text-[10px] font-medium text-emerald-600">Healthy</span></div><iconify-icon className="text-[#108A5E] region-check hidden" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
</div>
<div className="region-group px-3 pt-4 pb-1"><span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest">Asia Pacific</span></div>
<div className="region-item flex items-center gap-3.5 px-4 py-3 rounded-xl cursor-pointer mx-1" data-label="Asia Pacific (Singapore)" data-region="ap-southeast-1" onclick="selectRegion(this)">
<div className="w-8 h-8 bg-gray-100/80 border border-gray-200/60 rounded-lg flex items-center justify-center flex-shrink-0"><iconify-icon className="region-item-icon text-gray-500" height="16" icon="solar:server-minimalistic-linear" strokeWidth="1.5" width="16"></iconify-icon></div>
<div className="flex-1 min-w-0"><div className="region-item-name text-sm font-normal text-gray-800">Asia Pacific (Singapore)</div><div className="text-[11px] text-gray-400 mt-0.5">ap-southeast-1 · 180ms latency</div></div>
<div className="flex items-center gap-2"><div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-50 rounded-full"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div><span className="text-[10px] font-medium text-emerald-600">Healthy</span></div><iconify-icon className="text-[#108A5E] region-check hidden" height="18" icon="solar:check-circle-bold" width="18"></iconify-icon></div>
</div>
</div>
<div className="px-6 py-4 border-t border-white/40 bg-white/30 flex items-center justify-between">
<div className="flex items-center gap-2"><iconify-icon className="text-gray-400" height="14" icon="solar:info-circle-linear" strokeWidth="1.5" width="14"></iconify-icon><span className="text-[11px] text-gray-400">5 regions available · <span className="text-[#108A5E] font-medium">5 healthy</span></span></div>
<button className="text-xs font-medium text-[#108A5E] hover:underline flex items-center gap-1">Manage Regions<iconify-icon height="12" icon="solar:arrow-right-linear" strokeWidth="2" width="12"></iconify-icon></button>
</div>
</div>
</div>
<button className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md">
<iconify-icon className="text-gray-800" height="20" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</header>
<aside className="hidden md:flex flex-col gap-6 z-20 absolute top-32 left-10">
<button className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md hover:bg-white/60 transition-colors" onclick="goToLanding()" title="Back to Home">
<iconify-icon className="text-gray-800" height="20" icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<div className="flex flex-col gap-4 mt-20">
<button className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md sidebar-btn">
<iconify-icon className="text-gray-800" height="20" icon="solar:widget-5-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md sidebar-btn">
<iconify-icon className="text-gray-800" height="20" icon="solar:tuning-square-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md sidebar-btn">
<iconify-icon className="text-gray-800" height="20" icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</aside>
<aside className="hidden md:flex flex-col gap-4 absolute right-10 top-[35%] z-20">
<button className="sidebar-btn w-12 h-12 bg-black/5 backdrop-blur-md border border-black/10 rounded-2xl flex items-center justify-center shadow-inner" id="codeBtn" onclick="toggleCodePanel()">
<iconify-icon className="text-gray-800" height="20" icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="sidebar-btn w-12 h-12 bg-white/40 backdrop-blur-md border border-white/50 rounded-2xl flex items-center justify-center shadow-md" id="profileBtn" onclick="toggleProfilePanel()">
<iconify-icon className="text-gray-800" height="20" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 bg-[#108A5E] backdrop-blur-md border border-[#108A5E]/60 rounded-2xl flex items-center justify-center shadow-md hover:bg-[#0e7851] transition-colors relative" id="chatbotToggle" onclick="toggleChatbot()">
<iconify-icon className="text-white" height="20" icon="solar:chat-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#108A5E] rounded-full border-2 border-white animate-pulse"></div>
</button>
</aside>

<div className="hidden fixed right-28 top-[28%] z-50 w-[340px]" id="profilePanel" style={{transformOrigin: 'right center'}}>
<div className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden">
<div className="p-6 border-b border-white/40">
<div className="flex items-center justify-between mb-5">
<h3 className="text-base font-medium text-gray-900 tracking-tight">Profile</h3>
<button className="w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm close-btn" onclick="toggleProfilePanel()">
<iconify-icon className="text-gray-600" height="16" icon="solar:close-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#108A5E] to-[#0e7851] flex items-center justify-center shadow-lg">
<span className="text-xl font-medium text-white">JD</span>
</div>
<div>
<h4 className="text-base font-medium text-gray-900">Jane Doe</h4>
<p className="text-sm text-gray-500">jane@nexuscloud.io</p>
<div className="flex items-center gap-1.5 mt-1">
<div className="w-1.5 h-1.5 rounded-full bg-[#108A5E]"></div>
<span className="text-xs text-[#108A5E] font-medium">Admin</span>
</div>
</div>
</div>
</div>
<div className="p-4">
<div className="grid grid-cols-3 gap-3 mb-4">
<div className="profile-stat bg-white/40 border border-white/50 rounded-2xl p-3 text-center cursor-pointer">
<span className="stat-value block text-xl font-medium text-gray-900 tracking-tight">12</span>
<span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Clusters</span>
</div>
<div className="profile-stat bg-white/40 border border-white/50 rounded-2xl p-3 text-center cursor-pointer">
<span className="stat-value block text-xl font-medium text-gray-900 tracking-tight">847</span>
<span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Deploys</span>
</div>
<div className="profile-stat bg-white/40 border border-white/50 rounded-2xl p-3 text-center cursor-pointer">
<span className="stat-value block text-xl font-medium text-gray-900 tracking-tight">99.9</span>
<span className="text-[10px] text-gray-500 uppercase tracking-wider font-medium">Uptime%</span>
</div>
</div>
<div className="flex flex-col gap-1.5">
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-left w-full">
<iconify-icon className="text-gray-500" height="18" icon="solar:settings-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-gray-700">Account Settings</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-left w-full">
<iconify-icon className="text-gray-500" height="18" icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-gray-700">Notifications</span>
<span className="ml-auto px-2 py-0.5 bg-[#108A5E]/10 rounded-full text-[10px] font-medium text-[#108A5E]">3</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-left w-full">
<iconify-icon className="text-gray-500" height="18" icon="solar:key-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-gray-700">API Keys</span>
</button>
<button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/50 transition-colors text-left w-full">
<iconify-icon className="text-gray-500" height="18" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-gray-700">Team Members</span>
</button>
</div>
</div>
<div className="px-4 py-4 border-t border-white/40 bg-white/20">
<button className="flex items-center gap-3 px-4 py-2.5 rounded-xl hover:bg-red-50/50 transition-colors text-left w-full group">
<iconify-icon className="text-gray-400 group-hover:text-red-500 transition-colors" height="18" icon="solar:logout-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-sm text-gray-500 group-hover:text-red-500 transition-colors">Sign Out</span>
</button>
</div>
</div>
</div>

<div className="hidden fixed right-28 top-[20%] z-50 w-[480px]" id="codePanel" style={{transformOrigin: 'right center'}}>
<div className="bg-[#1a1a2e]/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
<div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#108A5E]/20 rounded-xl flex items-center justify-center">
<iconify-icon className="text-[#108A5E]" height="16" icon="solar:code-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-white">Code Editor</h3>
<span className="text-[11px] text-gray-400">deployment.yaml</span>
</div>
</div>
<div className="flex items-center gap-2">
<div className="flex items-center gap-1 mr-4">
<button className="code-tab active px-3 py-1.5 rounded-lg border border-transparent text-xs font-medium text-white/80">YAML</button>
<button className="code-tab px-3 py-1.5 rounded-lg border border-transparent text-xs font-normal text-gray-400">JSON</button>
<button className="code-tab px-3 py-1.5 rounded-lg border border-transparent text-xs font-normal text-gray-400">Shell</button>
</div>
<button className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors close-btn" onclick="toggleCodePanel()">
<iconify-icon className="text-gray-400" height="16" icon="solar:close-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="p-5 font-mono text-sm leading-relaxed overflow-y-auto" style={{fontFamily: '\'JetBrains Mono\', monospace', maxHeight: '380px'}}>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">1</span>
<span><span className="text-purple-400">apiVersion</span><span className="text-gray-400">:</span> <span className="text-emerald-400">apps/v1</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">2</span>
<span><span className="text-purple-400">kind</span><span className="text-gray-400">:</span> <span className="text-emerald-400">Deployment</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">3</span>
<span><span className="text-purple-400">metadata</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">4</span>
<span className="text-gray-300"> <span className="text-purple-400">name</span><span className="text-gray-400">:</span> <span className="text-amber-400">nexus-api</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">5</span>
<span className="text-gray-300"> <span className="text-purple-400">namespace</span><span className="text-gray-400">:</span> <span className="text-amber-400">production</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">6</span>
<span><span className="text-purple-400">spec</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">7</span>
<span className="text-gray-300"> <span className="text-purple-400">replicas</span><span className="text-gray-400">:</span> <span className="text-cyan-400">4</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">8</span>
<span className="text-gray-300"> <span className="text-purple-400">selector</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">9</span>
<span className="text-gray-300"> <span className="text-purple-400">matchLabels</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">10</span>
<span className="text-gray-300"> <span className="text-purple-400">app</span><span className="text-gray-400">:</span> <span className="text-amber-400">nexus-api</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">11</span>
<span className="text-gray-300"> <span className="text-purple-400">template</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">12</span>
<span className="text-gray-300"> <span className="text-purple-400">spec</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">13</span>
<span className="text-gray-300"> <span className="text-purple-400">containers</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">14</span>
<span className="text-gray-300"> <span className="text-gray-400">-</span> <span className="text-purple-400">name</span><span className="text-gray-400">:</span> <span className="text-amber-400">api</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">15</span>
<span className="text-gray-300"> <span className="text-purple-400">image</span><span className="text-gray-400">:</span> <span className="text-amber-400">nexus/api:v2.4.1</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">16</span>
<span className="text-gray-300"> <span className="text-purple-400">resources</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">17</span>
<span className="text-gray-300"> <span className="text-purple-400">limits</span><span className="text-gray-400">:</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">18</span>
<span className="text-gray-300"> <span className="text-purple-400">cpu</span><span className="text-gray-400">:</span> <span className="text-amber-400">"500m"</span></span>
</div>
<div className="code-line flex gap-4 py-1 px-3 rounded-lg">
<span className="text-gray-500 text-xs w-5 flex-shrink-0 text-right select-none">19</span>
<span className="text-gray-300"> <span className="text-purple-400">memory</span><span className="text-gray-400">:</span> <span className="text-amber-400">"256Mi"</span></span>
</div>
</div>
<div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5">
<div className="w-2 h-2 rounded-full bg-[#108A5E]"></div>
<span className="text-xs text-gray-400">Valid</span>
</div>
<span className="text-xs text-gray-500">·</span>
<span className="text-xs text-gray-400">19 lines</span>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-2 bg-white/10 border border-white/10 rounded-xl text-xs font-medium text-gray-300 hover:bg-white/15 transition-colors flex items-center gap-1.5">
<iconify-icon height="14" icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Copy
                        </button>
<button className="px-4 py-2 bg-[#108A5E] rounded-xl text-xs font-medium text-white hover:bg-[#0e7851] transition-colors flex items-center gap-1.5 shadow-lg">
<iconify-icon height="14" icon="solar:play-linear" strokeWidth="1.5" width="14"></iconify-icon>
                            Deploy
                        </button>
</div>
</div>
</div>
</div>

<div className="hidden fixed right-28 top-[30%] z-50 w-[380px]" id="chatbotPanel" style={{transformOrigin: 'right center'}}>
<div className="bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{maxHeight: '480px'}}>
<div className="p-5 border-b border-white/40 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-9 h-9 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-full flex items-center justify-center">
<iconify-icon className="text-[#108A5E]" height="18" icon="solar:bot-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-gray-900">DevOps Copilot</h3>
<div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#108A5E]"></div><span className="text-xs text-gray-500">Online</span></div>
</div>
</div>
<button className="w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm close-btn" onclick="toggleChatbot()">
<iconify-icon className="text-gray-600" height="16" icon="solar:close-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4" id="chatMessages" style={{maxHeight: '300px'}}>
<div className="flex items-start gap-2.5">
<div className="w-7 h-7 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"><iconify-icon className="text-[#108A5E]" height="14" icon="solar:bot-linear" strokeWidth="1.5" width="14"></iconify-icon></div>
<div className="bg-white/70 border border-white/60 rounded-2xl rounded-tl-md px-4 py-3 shadow-sm max-w-[85%]"><p className="text-sm text-gray-800">Hello! I'm your DevOps Copilot. How can I help you today?</p></div>
</div>
<div className="flex items-start gap-2.5 ml-9">
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-[#108A5E]/5 border border-[#108A5E]/15 rounded-full text-xs font-medium text-[#108A5E] hover:bg-[#108A5E]/10 transition-colors" onclick="sendQuickMessage('Check cluster status')">Check cluster status</button>
<button className="px-3 py-1.5 bg-[#108A5E]/5 border border-[#108A5E]/15 rounded-full text-xs font-medium text-[#108A5E] hover:bg-[#108A5E]/10 transition-colors" onclick="sendQuickMessage('Scale deployment')">Scale deployment</button>
<button className="px-3 py-1.5 bg-[#108A5E]/5 border border-[#108A5E]/15 rounded-full text-xs font-medium text-[#108A5E] hover:bg-[#108A5E]/10 transition-colors" onclick="sendQuickMessage('View recent logs')">View recent logs</button>
</div>
</div>
</div>
<div className="p-4 border-t border-white/40">
<div className="flex items-center gap-2">
<div className="flex-1 flex items-center bg-white/50 border border-white/60 rounded-full px-4 py-2.5 shadow-inner focus-within:border-[#108A5E]/30 focus-within:bg-white/70 transition-all">
<input className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 outline-none" id="chatInput" onkeydown="if(event.key==='Enter')sendMessage()" placeholder="Ask anything..." type="text"/>
<button className="w-8 h-8 bg-[#108A5E] rounded-full flex items-center justify-center shadow-sm hover:bg-[#0e7851] transition-colors ml-2 flex-shrink-0" onclick="sendMessage()">
<iconify-icon className="text-white" height="16" icon="solar:arrow-up-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-center gap-4 mt-3">
<button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"><iconify-icon height="14" icon="solar:microphone-2-linear" strokeWidth="1.5" width="14"></iconify-icon>Voice</button>
<button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"><iconify-icon height="14" icon="solar:paperclip-linear" strokeWidth="1.5" width="14"></iconify-icon>Attach</button>
<button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-gray-600 transition-colors"><iconify-icon height="14" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="14"></iconify-icon>Templates</button>
</div>
</div>
</div>
</div>

<main className="flex-1 w-full max-w-[1600px] z-10 mr-auto ml-auto pt-16 pl-28 relative">
<div>
<h1 className="text-6xl font-normal text-gray-900 tracking-tight mb-2">Nexus CloudCore</h1>
<p className="text-lg font-normal text-gray-800">Enterprise-grade container orchestration</p>
<div className="flex items-center gap-1 mt-8 bg-white/30 backdrop-blur-md border border-white/40 w-fit p-1 rounded-full shadow-inner">
<span className="px-4 h-8 rounded-full bg-[#108A5E] text-white flex items-center justify-center text-sm font-medium shadow-sm">DEV</span>
<span className="px-4 h-8 rounded-full flex items-center justify-center text-sm font-medium text-gray-800">STG</span>
<span className="px-4 h-8 rounded-full flex items-center justify-center text-sm font-medium text-gray-800">UAT</span>
<span className="px-4 h-8 rounded-full flex items-center justify-center text-sm font-medium text-gray-800">PRD</span>
</div>
</div>

<div className="absolute right-36 top-16 flex flex-col gap-6 z-30 w-[380px]" id="aiPanels">
<div className="copilot-card bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
<div className="card-glow absolute inset-0 rounded-3xl pointer-events-none" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(16,138,94,0.06) 0%, transparent 70%)'}}></div>
<div className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(16,138,94,0.3), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 4s linear infinite'}}></div>
<div className="flex justify-between items-start mb-6 relative z-10">
<div>
<div className="flex items-center gap-3">
<div className="copilot-header-icon w-8 h-8 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-xl flex items-center justify-center">
<iconify-icon className="text-[#108A5E]" height="16" icon="solar:bot-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<h2 className="text-lg font-normal text-gray-900">DevOps Copilot</h2>
<div className="flex items-center gap-1.5 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-[#108A5E]" style={{animation: 'subtlePulse 2s ease-in-out infinite'}}></div><span className="text-xs text-gray-500">Ready to assist</span></div>
</div>
</div>
</div>
<button className="close-btn w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-800" height="16" icon="solar:close-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="grid-item stagger-1 bg-white/50 border border-white/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm cursor-pointer" onclick="createRipple(event, this)" onmousemove="trackMouse(event, this)">
<iconify-icon className="grid-icon text-gray-900 mt-0.5 transition-colors duration-300" height="20" icon="solar:cloud-upload-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div><div className="grid-title text-sm font-medium text-gray-900 leading-tight transition-colors duration-300">Provision Node</div><div className="grid-sub text-xs text-gray-600 mt-1 transition-colors duration-300">2 min</div></div>
</div>
<div className="grid-item stagger-2 bg-white/50 border border-white/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm cursor-pointer" onclick="createRipple(event, this)" onmousemove="trackMouse(event, this)">
<iconify-icon className="grid-icon text-gray-900 mt-0.5 transition-colors duration-300" height="20" icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div><div className="grid-title text-sm font-medium text-gray-900 leading-tight transition-colors duration-300">Performance</div><div className="grid-sub text-xs text-gray-600 mt-1 transition-colors duration-300">Metrics</div></div>
</div>
<div className="grid-item stagger-3 bg-white/50 border border-white/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm cursor-pointer" onclick="createRipple(event, this)" onmousemove="trackMouse(event, this)">
<iconify-icon className="grid-icon text-gray-900 mt-0.5 transition-colors duration-300" height="20" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div><div className="grid-title text-sm font-medium text-gray-900 leading-tight transition-colors duration-300">Security Scan</div><div className="grid-sub text-xs text-gray-600 mt-1 transition-colors duration-300">View Logs</div></div>
</div>
<div className="grid-item stagger-4 bg-white/50 border border-white/60 rounded-2xl p-4 flex items-start gap-3 shadow-sm cursor-pointer" onclick="createRipple(event, this)" onmousemove="trackMouse(event, this)">
<iconify-icon className="grid-icon text-gray-900 mt-0.5 transition-colors duration-300" height="20" icon="solar:document-text-linear" strokeWidth="1.5" width="20"></iconify-icon>
<div><div className="grid-title text-sm font-medium text-gray-900 leading-tight transition-colors duration-300">Access Logs</div><div className="grid-sub text-xs text-gray-600 mt-1 transition-colors duration-300">Audit Trail</div></div>
</div>
</div>
</div>
<div className="prompt-card bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl relative overflow-hidden">
<div className="absolute bottom-0 left-0 right-0 h-[1px] pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(16,138,94,0.2), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 5s linear infinite', animationDelay: '1s'}}></div>
<div className="mb-6 relative">
<p className="text-base text-gray-900 font-normal">Provision a new Kubernetes cluster in US-East<span className="input-cursor text-[#108A5E] font-light">|</span></p>
</div>
<div className="flex items-center justify-between">
<div className="flex gap-3">
<button className="action-btn w-10 h-10 bg-white/50 border border-white/60 rounded-full flex items-center justify-center shadow-sm"><iconify-icon className="text-gray-800" height="16" icon="solar:microphone-2-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
<button className="action-btn w-10 h-10 bg-white/50 border border-white/60 rounded-full flex items-center justify-center shadow-sm"><iconify-icon className="text-gray-800" height="16" icon="solar:paperclip-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
<button className="action-btn w-10 h-10 bg-white/50 border border-white/60 rounded-full flex items-center justify-center shadow-sm"><iconify-icon className="text-gray-800" height="16" icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="16"></iconify-icon></button>
</div>
<button className="send-btn h-11 px-6 bg-[#108A5E] rounded-full flex items-center gap-2 text-white shadow-md">
<span className="text-sm font-medium">Send</span>
<iconify-icon className="send-icon text-white" height="16" icon="solar:plain-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-10 right-10 grid grid-cols-1 md:grid-cols-3 gap-6 z-20 px-4 md:px-0">

<div className="active-node-card bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl h-[190px] relative overflow-hidden flex flex-col cursor-pointer" onmousemove="trackNodeMouse(event, this)">
<div className="node-card-shimmer absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(16,138,94,0.4), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></div>
<div className="node-hover-glow absolute inset-0 pointer-events-none rounded-3xl opacity-0 transition-opacity duration-300" style={{background: 'radial-gradient(circle at var(--node-mx, 50%) var(--node-my, 50%), rgba(16,138,94,0.06) 0%, transparent 60%)'}}></div>
<div className="flex justify-between items-start z-20">
<div>
<div className="flex items-center gap-2">
<h3 className="node-title text-base font-medium text-gray-900 transition-all duration-300">Active Node</h3>
<div className="node-status-badge flex items-center gap-1.5 px-2 py-0.5 bg-[#108A5E]/10 border border-[#108A5E]/20 rounded-full relative">
<div className="node-status-dot w-1.5 h-1.5 rounded-full bg-[#108A5E] transition-all duration-300"></div>
<div className="node-health-ring absolute left-[9px] top-[7px] w-1.5 h-1.5 rounded-full border border-[#108A5E]/40 pointer-events-none"></div>
<span className="text-[10px] uppercase tracking-wider font-semibold text-[#108A5E]">Healthy</span>
</div>
</div>
<p className="text-sm text-gray-700 mt-1 flex items-center gap-1.5">
<iconify-icon className="node-location-icon text-gray-500 transition-all duration-300" height="14" icon="solar:map-point-linear" width="14"></iconify-icon>
<span className="node-location-text transition-colors duration-300">us-east-1a (N. Virginia)</span>
</p>
</div>
<button className="node-arrow-btn w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm">
<iconify-icon className="text-gray-800 transition-colors duration-300" height="16" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="absolute left-0 right-0 bottom-0 h-28 z-10 pointer-events-none">
<div className="node-grid-bg absolute inset-0 opacity-70 transition-opacity" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)', backgroundSize: '16px 16px', maskImage: 'linear-gradient(to bottom, transparent, black)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)'}}></div>
<svg className="absolute inset-0 w-full h-full" fill="none" preserveaspectratio="xMidYMid meet" viewbox="0 0 400 120">
<line className="map-connection-line" stroke="rgba(16,138,94,0.4)" stroke-dasharray="4 3" strokeWidth="1" x1="100" x2="200" y1="55" y2="50"></line>
<line className="map-connection-line" stroke="rgba(16,138,94,0.4)" stroke-dasharray="4 3" strokeWidth="1" x1="200" x2="310" y1="50" y2="40"></line>
<circle className="data-stream-particle" fill="#108A5E" opacity="0.6" r="2"><animatemotion dur="2s" path="M100,55 L200,50" repeatcount="indefinite"></animatemotion><animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0;0.8;0"></animate></circle>
<circle className="data-stream-particle" fill="#108A5E" opacity="0.4" r="1.5"><animatemotion begin="0.5s" dur="2.5s" path="M200,50 L310,40" repeatcount="indefinite"></animatemotion><animate attributename="opacity" begin="0.5s" dur="2.5s" repeatcount="indefinite" values="0;0.6;0"></animate></circle>
</svg>
<div className="relative w-full h-full max-w-[240px] mx-auto mt-2">
<div className="map-secondary-node-1 absolute top-[40%] left-[25%] transform -translate-x-1/2 -translate-y-1/2"><div className="w-2 h-2 bg-white rounded-full shadow-sm border border-white/60"></div></div>
<div className="map-secondary-node-2 absolute top-[33%] left-[78%] transform -translate-x-1/2 -translate-y-1/2"><div className="w-1.5 h-1.5 bg-white rounded-full shadow-sm border border-white/60 opacity-80"></div></div>
<div className="map-primary-node absolute top-[48%] left-[55%] transform -translate-x-1/2 -translate-y-1/2">
<div className="relative flex items-center justify-center">
<div className="primary-ping absolute w-10 h-10 bg-[#108A5E]/20 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
<div className="absolute w-6 h-6 bg-[#108A5E]/30 rounded-full animate-pulse"></div>
<div className="relative w-3.5 h-3.5 bg-[#108A5E] rounded-full border-2 border-white shadow-[0_0_8px_rgba(16,138,94,0.6)] z-10"></div>
</div>
<div className="cpu-tooltip absolute top-5 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-white/60 shadow-sm min-w-max z-20">
<div className="flex items-center gap-1.5 mb-1"><iconify-icon className="text-gray-500" height="12" icon="solar:cpu-linear" width="12"></iconify-icon><span className="text-[10px] font-medium text-gray-800">CPU 42%</span></div>
<div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden"><div className="cpu-load-bar h-full bg-[#108A5E] rounded-full" style={{width: '42%'}}></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="status-card bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl h-[190px] flex flex-col relative overflow-hidden">
<div className="status-shimmer absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(16,138,94,0.4), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></div>
<div className="flex justify-between items-start mb-4">
<div>
<div className="flex items-center gap-2">
<h3 className="status-title text-base font-medium text-gray-900 transition-colors duration-300">System Status</h3>
<div className="relative">
<div className="status-dot-ping absolute inset-0 w-2 h-2 rounded-full bg-[#108A5E]/40"></div>
<div className="w-2 h-2 rounded-full bg-[#108A5E]"></div>
</div>
</div>
<p className="text-sm text-gray-700 mt-1 flex items-center gap-1.5">
<iconify-icon className="status-check text-[#108A5E]" height="14" icon="solar:check-circle-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                All services operational
                            </p>
</div>
<button className="status-arrow-btn w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm transition-all duration-300">
<iconify-icon className="text-gray-800 transition-colors duration-300" height="16" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="flex gap-6 mt-auto">
<div className="sla-inner flex-1 bg-white/30 border border-white/40 rounded-2xl p-4 flex items-center justify-between shadow-inner transition-all duration-300">
<iconify-icon className="sla-nav text-gray-500" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
<div className="flex flex-col text-right">
<span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium block mb-0.5">SLA</span>
<span className="sla-value text-xl font-medium text-gray-900 leading-none">99.99%</span>
</div>
</div>
<div className="flex-1 flex flex-col justify-end items-end">
<span className="latency-label text-[10px] text-gray-500 uppercase tracking-widest font-medium mb-1.5">Latency Avg</span>
<div className="flex items-end gap-1.5 h-8">
<div className="mini-bar w-1.5 h-[40%] bg-[#108A5E]/30 rounded-full"></div>
<div className="mini-bar w-1.5 h-[60%] bg-[#108A5E]/40 rounded-full"></div>
<div className="mini-bar w-1.5 h-[50%] bg-[#108A5E]/50 rounded-full"></div>
<div className="mini-bar w-1.5 h-[80%] bg-[#108A5E]/70 rounded-full"></div>
<div className="mini-bar w-1.5 h-[100%] bg-[#108A5E] rounded-full relative">
<div className="absolute -top-5 left-1/2 transform -translate-x-1/2 text-[11px] font-bold text-[#108A5E] latency-value">14ms</div>
</div>
</div>
</div>
</div>
</div>

<div className="db-card bg-white/40 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-xl h-[190px] flex flex-col relative overflow-hidden">
<div className="db-shimmer absolute top-0 left-0 right-0 h-[1px] pointer-events-none" style={{background: 'linear-gradient(90deg, transparent, rgba(16,138,94,0.4), transparent)', backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite'}}></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/60 border border-white/70 rounded-2xl flex items-center justify-center shadow-sm">
<iconify-icon className="db-icon text-gray-700" height="20" icon="solar:database-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="db-title text-base font-medium text-gray-900 transition-colors duration-300">PostgreSQL</h3>
<div className="flex items-center gap-2 mt-0.5">
<span className="db-version-badge text-[10px] font-medium text-gray-600 px-2 py-0.5 bg-white/50 border border-white/60 rounded-full">v15.4</span>
</div>
</div>
</div>
<button className="db-arrow-btn w-8 h-8 rounded-full bg-white/50 border border-white/60 flex items-center justify-center shadow-sm transition-all duration-300">
<iconify-icon className="text-gray-800 transition-colors duration-300" height="16" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="mt-auto">
<div className="db-storage-inner bg-white/30 border border-white/40 rounded-2xl p-4 shadow-inner relative overflow-hidden">
<div className="flex justify-between items-end mb-2">
<span className="db-storage-label text-[10px] text-gray-500 uppercase tracking-widest font-medium">Storage Used</span>
<div className="flex items-center gap-1.5">
<span className="db-storage-value text-sm font-semibold text-gray-900">34.5 GB</span>
<span className="text-[10px] text-gray-400">/ 100 GB</span>
</div>
</div>
<div className="w-full h-2 bg-gray-200/50 rounded-full overflow-hidden relative">
<div className="db-progress-bar absolute top-0 left-0 h-full bg-gradient-to-r from-[#108A5E] to-emerald-400 rounded-full" style={{width: '34.5%'}}></div>
</div>
<div className="flex items-center gap-1.5 mt-3">
<div className="db-check-ring w-3 h-3 rounded-full border border-gray-300 flex items-center justify-center">
<div className="db-check-dot w-1.5 h-1.5 rounded-full bg-gray-300"></div>
</div>
<span className="text-[10px] font-medium text-gray-500">Automated backups active</span>
</div>
</div>
</div>
</div>
</div>
</main>
</div>



    </>
  );
}
