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



        // 1. Scramble Text Effect
        const phrases = ["OPEN THE FUTURE.", "RECONCILE DATA.", "MANAGE CAPITAL."];
        const el = document.getElementById('scramble-text');
        const chars = '!@#$%^&*()_+{}:"<>?';
        let queue = [];
        let frame = 0;
        let phraseIndex = 0;

        function setText(newText) {
            const oldText = el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => resolve);
            
            queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                queue.push({ from, to, start, end });
            }
            
            cancelAnimationFrame(frame);
            update();
            return promise;
        }

        function update() {
            let output = '';
            let complete = 0;
            
            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = chars[Math.floor(Math.random() * chars.length)];
                        queue[i].char = char;
                    }
                    output += `<span class="text-[#0055FF]/50">${char}</span>`;
                } else {
                    output += from;
                }
            }
            
            el.innerHTML = output;
            if (complete === queue.length) {
                // Next phrase logic if needed
            } else {
                frame++;
                requestAnimationFrame(update);
            }
        }
        
        // Initial trigger
        setTimeout(() => {
            setText("OPEN THE FUTURE.");
        }, 1000);


        // 2. 3D Tilt Effect on Hero
        const heroSection = document.getElementById('hero-section');
        const appInterface = document.getElementById('app-interface');
        
        heroSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            
            // Calculate rotation between -10 and 10 degrees
            const x = (clientX / innerWidth - 0.5) * 20; 
            const y = (clientY / innerHeight - 0.5) * 20;
            
            appInterface.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
        });

        // 3. Populate Fake Ledger Rows
        const ledgerRows = document.getElementById('ledger-rows');
        const merchants = ['AWS Service', 'Stripe Payout', 'Uber HQ', 'WeWork Rent', 'Slack Tech'];
        const categories = ['Infrastructure', 'Income', 'Travel', 'Facilities', 'Software'];
        
        for(let i=0; i<6; i++) {
            const row = document.createElement('div');
            row.className = 'grid grid-cols-4 p-2 text-[10px] border-b border-[#D1D5DB]/30 hover:bg-[#F4F5F7] transition-colors font-mono';
            row.innerHTML = `
                <div class="text-[#0055FF]">#TR-${93840 + i}</div>
                <div>${merchants[i % merchants.length]}</div>
                <div class="text-[#1A1D21]/50">${categories[i % categories.length]}</div>
                <div class="text-right text-[#1A1D21]">$${(Math.random() * 5000).toFixed(2)}</div>
            `;
            ledgerRows.appendChild(row);
        }

        // 4. Feature Toggle (Pain vs Solution)
        function updateFeature(type) {
            const display = document.getElementById('feature-display');
            const tag = document.getElementById('feature-tag');
            
            display.style.opacity = '0';
            setTimeout(() => {
                display.style.opacity = '1';
                if(type === 'manual') {
                    tag.innerText = "LEGACY MODE";
                    tag.classList.replace('bg-[#0055FF]', 'bg-red-500');
                    display.innerHTML = `
                        <span class="iconify text-red-500 mb-4" data-icon="lucide:x-circle" data-width="48"></span>
                        <h4 class="text-xl font-medium mb-2">Manual Entry Required</h4>
                        <p class="font-mono text-sm text-[#1A1D21]/60">Waiting for user input...</p>
                        <div class="mt-4 grid grid-cols-3 gap-2 w-2/3 opacity-50">
                            <div class="h-2 bg-red-200"></div><div class="h-2 bg-red-200"></div><div class="h-2 bg-red-200"></div>
                        </div>
                    `;
                } else if (type === 'sync') {
                    tag.innerText = "SYNC ERROR";
                    tag.classList.replace('bg-[#0055FF]', 'bg-orange-500');
                    tag.classList.replace('bg-red-500', 'bg-orange-500');
                    display.innerHTML = `
                        <span class="iconify text-orange-500 mb-4" data-icon="lucide:alert-triangle" data-width="48"></span>
                        <h4 class="text-xl font-medium mb-2">CSV Formatting Error</h4>
                        <p class="font-mono text-sm text-[#1A1D21]/60">Line 42: Invalid character</p>
                    `;
                } else {
                    tag.innerText = "AI RECONCILIATION";
                    tag.className = 'bg-[#0055FF] text-white text-xs font-mono px-3 py-1 uppercase';
                    display.innerHTML = `
                        <span class="iconify text-[#0055FF] mb-4" data-icon="lucide:check-circle-2" data-width="48"></span>
                        <h4 class="text-xl font-medium mb-2">Automated Ledger</h4>
                        <p class="font-mono text-sm text-[#1A1D21]/60">Scanning 4,203 rows...</p>
                        <div class="mt-6 w-full max-w-xs h-1 bg-[#D1D5DB] rounded-full overflow-hidden">
                            <div class="h-full bg-[#0055FF] w-2/3"></div>
                        </div>
                    `;
                }
            }, 200);
        }

        // 5. Pricing Slider Logic
        function updatePricing() {
            const slider = document.getElementById('pricing-slider');
            const revDisplay = document.getElementById('revenue-display');
            const priceDisplay = document.getElementById('price-display');
            const planName = document.getElementById('plan-name');
            const seats = document.getElementById('seat-count');
            
            const val = parseInt(slider.value);
            revDisplay.innerText = val.toLocaleString();
            
            let price = 499;
            let plan = "GROWTH PLAN";
            let s = 5;

            if (val > 1000000 && val <= 3000000) {
                price = 1299;
                plan = "SCALE PLAN";
                s = 15;
            } else if (val > 3000000) {
                price = 2499;
                plan = "ENTERPRISE PLAN";
                s = "Unlimited";
            }

            priceDisplay.innerText = price;
            planName.innerText = plan;
            seats.innerText = s;
        }

        // 6. Typewriter FAQ
        function typeAnswer(id, text) {
            // Reset others
            document.querySelectorAll('[id^="ans"]').forEach(el => {
                el.innerText = '';
                el.classList.remove('typing-cursor');
            });

            const el = document.getElementById(id);
            el.classList.add('typing-cursor');
            let i = 0;
            const speed = 20; 

            function typing() {
                if (i < text.length) {
                    el.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typing, speed);
                } else {
                    el.classList.remove('typing-cursor');
                }
            }
            typing();
        }

        // 7. Ripple Effect
        function ripple(e) {
            const el = e.currentTarget;
            const circle = document.createElement("span");
            const diameter = Math.max(el.clientWidth, el.clientHeight);
            const radius = diameter / 2;

            circle.style.width = circle.style.height = `${diameter}px`;
            circle.style.left = `${e.clientX - el.getBoundingClientRect().left - radius}px`;
            circle.style.top = `${e.clientY - el.getBoundingClientRect().top - radius}px`;
            circle.classList.add("absolute", "rounded-full", "scale-0", "opacity-50", "bg-white", "animate-ping");

            const ripple = el.getElementsByClassName("animate-ping")[0];

            if (ripple) {
                ripple.remove();
            }

            el.appendChild(circle);
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 bg-grid pointer-events-none"></div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="grid-beam" style={{left: '15%', animationDelay: '0s'}}></div>
<div className="grid-beam" style={{left: '55%', animationDelay: '2s'}}></div>
<div className="grid-beam" style={{left: '85%', animationDelay: '1.5s'}}></div>
</div>

<nav className="sticky top-0 z-50 w-full bg-[#F4F5F7]/80 backdrop-blur-md border-b border-[#D1D5DB]">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-[#0055FF]"></div>
<span className="font-bold tracking-tighter text-lg uppercase">The Ledger</span>
</div>
<div className="hidden md:flex items-center space-x-1 font-mono text-xs font-medium text-[#1A1D21]/70">
<a className="px-4 py-1.5 hover:bg-[#D1D5DB]/30 hover:text-[#0055FF] transition-colors border border-transparent hover:border-[#D1D5DB]" href="#">Platform</a>
<a className="px-4 py-1.5 hover:bg-[#D1D5DB]/30 hover:text-[#0055FF] transition-colors border border-transparent hover:border-[#D1D5DB]" href="#">Integrations</a>
<a className="px-4 py-1.5 hover:bg-[#D1D5DB]/30 hover:text-[#0055FF] transition-colors border border-transparent hover:border-[#D1D5DB]" href="#">Customers</a>
<a className="px-4 py-1.5 hover:bg-[#D1D5DB]/30 hover:text-[#0055FF] transition-colors border border-transparent hover:border-[#D1D5DB]" href="#">Pricing</a>
</div>
<button className="font-mono text-xs bg-[#1A1D21] text-white px-4 py-2 hover:bg-[#0055FF] transition-colors flex items-center gap-2">
<span className="iconify" data-icon="lucide:terminal-square" data-width="14"></span>
                RUN DEMO
            </button>
</div>
</nav>

<section className="relative z-10 pt-24 pb-20 overflow-hidden" id="hero-section">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 relative">
<div className="inline-flex items-center gap-2 border border-[#D1D5DB] bg-white/50 px-3 py-1 rounded-none mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="font-mono text-xs text-[#1A1D21] uppercase tracking-wide">System Operational</span>
</div>
<h1 className="text-6xl md:text-7xl font-medium tracking-tighter leading-[0.95] mb-6 text-[#1A1D21]">
                    CLOSE THE BOOKS.<br/>
<span className="text-[#0055FF] cursor-blink" id="scramble-text">OPEN THE FUTURE.</span>
</h1>
<p className="text-lg text-[#1A1D21]/70 mb-10 leading-relaxed max-w-md">
                    The first CFO Operating System that reconciles in real-time. Stop managing spreadsheets. Start managing capital.
                </p>
<div className="flex items-center gap-4">
<button className="bg-[#0055FF] text-white px-8 py-4 font-mono text-sm font-medium hover:bg-[#0055FF]/90 transition-all flex items-center gap-2 group">
                        START FISCAL YEAR
                        <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="px-8 py-4 font-mono text-sm font-medium border border-[#D1D5DB] hover:bg-white transition-all text-[#1A1D21]">
                        VIEW DOCS
                    </button>
</div>
</div>

<div className="lg:col-span-7 perspective-container h-[500px] relative flex items-center justify-center lg:justify-end">
<div className="relative w-full max-w-2xl bg-white border border-[#D1D5DB] shadow-2xl transition-transform duration-100 ease-out origin-center" id="app-interface" style={{transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'}}>

<div className="h-10 border-b border-[#D1D5DB] bg-[#F9FAFB] flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#D1D5DB]"></div>
</div>
<div className="ml-4 w-64 h-5 bg-[#D1D5DB]/20 rounded-sm"></div>
</div>

<div className="p-6 font-mono text-xs">
<div className="flex justify-between items-end mb-6">
<div>
<div className="text-[#1A1D21]/50 mb-1">CASH ON HAND</div>
<div className="text-3xl text-[#1A1D21] font-medium tracking-tight">$4,293,842.00</div>
</div>
<div className="text-green-600 bg-green-50 px-2 py-1 flex items-center gap-1 border border-green-200">
<span className="iconify" data-icon="lucide:trending-up" data-width="12"></span>
                                +12.4% MoM
                            </div>
</div>

<div className="w-full border border-[#D1D5DB]">
<div className="grid grid-cols-4 bg-[#F4F5F7] border-b border-[#D1D5DB] p-2 text-[#1A1D21]/60">
<div>TRANSACTION ID</div>
<div>MERCHANT</div>
<div>CATEGORY</div>
<div className="text-right">AMOUNT</div>
</div>

<div className="bg-white" id="ledger-rows">

</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-[#D1D5DB] bg-white py-4 overflow-hidden relative z-10">
<div className="max-w-7xl mx-auto px-6 mb-2">
<span className="font-mono text-[10px] uppercase tracking-widest text-[#1A1D21]/50">Audited By</span>
</div>
<div className="flex whitespace-nowrap overflow-hidden">
<div className="flex animate-scroll items-center">

<div className="flex items-center gap-12 px-6">
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">LINEAR <span className="text-[10px] font-mono text-green-600">+2.4%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">VERCEL <span className="text-[10px] font-mono text-green-600">+8.1%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">RAMP <span className="text-[10px] font-mono text-green-600">+1.2%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">STRIPE <span className="text-[10px] font-mono text-green-600">+5.5%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">MERCURY <span className="text-[10px] font-mono text-green-600">+3.0%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">BREX <span className="text-[10px] font-mono text-green-600">+4.1%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
</div>

<div className="flex items-center gap-12 px-6">
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">LINEAR <span className="text-[10px] font-mono text-green-600">+2.4%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">VERCEL <span className="text-[10px] font-mono text-green-600">+8.1%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">RAMP <span className="text-[10px] font-mono text-green-600">+1.2%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">STRIPE <span className="text-[10px] font-mono text-green-600">+5.5%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">MERCURY <span className="text-[10px] font-mono text-green-600">+3.0%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
<span className="text-xl font-bold tracking-tighter text-[#1A1D21] flex items-center gap-2">BREX <span className="text-[10px] font-mono text-green-600">+4.1%</span></span>
<span className="h-4 w-px bg-[#D1D5DB]"></span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<div>
<h2 className="text-4xl font-medium tracking-tight mb-4">Financial chaos,<br/>structured.</h2>
<p className="text-[#1A1D21]/70 mb-8">Turn thousands of transaction rows into a single source of truth.</p>
</div>
<div className="space-y-0 border-t border-[#D1D5DB]">
<div className="group cursor-pointer py-6 border-b border-[#D1D5DB] flex justify-between items-center transition-all hover:pl-4 hover:border-[#0055FF]" id="toggle-manual" onmouseenter="updateFeature('manual')">
<div className="flex items-center gap-4">
<span className="iconify text-[#D1D5DB] group-hover:text-[#0055FF]" data-icon="lucide:file-spreadsheet" data-width="24"></span>
<div>
<h3 className="font-medium text-lg">Manual Entry</h3>
<p className="text-sm text-[#1A1D21]/50 mt-1 font-mono">The Old Way</p>
</div>
</div>
<span className="iconify opacity-0 group-hover:opacity-100 text-[#0055FF]" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
<div className="group cursor-pointer py-6 border-b border-[#D1D5DB] flex justify-between items-center transition-all hover:pl-4 hover:border-[#0055FF]" id="toggle-sync" onmouseenter="updateFeature('sync')">
<div className="flex items-center gap-4">
<span className="iconify text-[#D1D5DB] group-hover:text-[#0055FF]" data-icon="lucide:refresh-ccw" data-width="24"></span>
<div>
<h3 className="font-medium text-lg">CSV Errors</h3>
<p className="text-sm text-[#1A1D21]/50 mt-1 font-mono">Broken Formulas</p>
</div>
</div>
<span className="iconify opacity-0 group-hover:opacity-100 text-[#0055FF]" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
<div className="group cursor-pointer py-6 border-b border-[#D1D5DB] flex justify-between items-center transition-all hover:pl-4 hover:border-[#0055FF]" id="toggle-audit" onmouseenter="updateFeature('audit')">
<div className="flex items-center gap-4">
<span className="iconify text-[#D1D5DB] group-hover:text-[#0055FF]" data-icon="lucide:shield-alert" data-width="24"></span>
<div>
<h3 className="font-medium text-lg">Audit Risks</h3>
<p className="text-sm text-[#1A1D21]/50 mt-1 font-mono">Compliance Gaps</p>
</div>
</div>
<span className="iconify opacity-0 group-hover:opacity-100 text-[#0055FF]" data-icon="lucide:arrow-right" data-width="20"></span>
</div>
</div>
</div>

<div className="bg-white border border-[#D1D5DB] p-2 relative h-[500px] flex flex-col shadow-lg">
<div className="absolute top-4 right-4 z-20">
<div className="bg-[#0055FF] text-white text-xs font-mono px-3 py-1 uppercase" id="feature-tag">
                        AI RECONCILIATION
                    </div>
</div>

<div className="bg-[#F4F5F7] h-full w-full border border-[#D1D5DB]/50 relative overflow-hidden flex items-center justify-center">

<div className="w-full h-full p-8 flex flex-col justify-center items-center text-center" id="feature-display">

<span className="iconify text-[#0055FF] mb-4" data-icon="lucide:check-circle-2" data-width="48"></span>
<h4 className="text-xl font-medium mb-2">Automated Ledger</h4>
<p className="font-mono text-sm text-[#1A1D21]/60">Scanning 4,203 rows...</p>
<div className="mt-6 w-full max-w-xs h-1 bg-[#D1D5DB] rounded-full overflow-hidden">
<div className="h-full bg-[#0055FF] w-2/3"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#1A1D21] text-white relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-medium tracking-tight">Works with your money.</h2>
<a className="font-mono text-sm text-[#D1D5DB] hover:text-white flex items-center gap-2" href="#">
                    View all 140+ Integrations <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-px bg-[#1A1D21] border border-white/10">

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:credit-card" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Stripe</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Payment</span>
</div>

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:landmark" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Mercury</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Banking</span>
</div>

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:file-text" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Quickbooks</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Accounting</span>
</div>

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:database" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Snowflake</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Data</span>
</div>

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:slack" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Slack</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Comms</span>
</div>

<div className="bg-[#1A1D21] border border-white/10 aspect-square flex flex-col items-center justify-center p-6 hover:bg-white/5 transition-colors cursor-pointer group relative overflow-hidden" onclick="ripple(event)">
<div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="iconify text-white mb-3" data-icon="lucide:key" data-width="28"></span>
<span className="font-mono text-xs text-[#D1D5DB]">Okta</span>
<span className="font-mono text-[10px] text-white/40 mt-1">Security</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-medium tracking-tight mb-4">Pricing that scales with your burn rate.</h2>
</div>
<div className="bg-white border border-[#D1D5DB] p-12 shadow-xl relative overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex justify-between items-end mb-8 font-mono">
<div className="text-sm text-[#1A1D21]/50">MONTHLY REVENUE</div>
<div className="text-3xl font-medium text-[#1A1D21]">$<span id="revenue-display">500,000</span></div>
</div>

<div className="mb-12 relative">
<input id="pricing-slider" max="5000000" min="100000" oninput="updatePricing()" step="100000" type="range" value="500000"/>
<div className="flex justify-between text-[10px] font-mono mt-4 text-[#1A1D21]/40 uppercase tracking-widest">
<span>Seed ($100k)</span>
<span>Series A ($1M)</span>
<span>Series B ($5M+)</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-t border-[#D1D5DB] pt-8">
<div>
<div className="text-sm font-mono text-[#0055FF] mb-2 uppercase tracking-wide" id="plan-name">GROWTH PLAN</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-[#1A1D21]/80">
<span className="iconify text-[#0055FF]" data-icon="lucide:check" data-width="16"></span>
                                Real-time Reconciliation
                            </li>
<li className="flex items-center gap-3 text-sm text-[#1A1D21]/80">
<span className="iconify text-[#0055FF]" data-icon="lucide:check" data-width="16"></span>
<span id="seat-count">5</span> Admin Seats
                            </li>
<li className="flex items-center gap-3 text-sm text-[#1A1D21]/80">
<span className="iconify text-[#0055FF]" data-icon="lucide:check" data-width="16"></span>
<span id="history-count">1 Year</span> Data Retention
                            </li>
</ul>
</div>
<div className="text-right">
<div className="text-sm text-[#1A1D21]/50 font-mono mb-1">ESTIMATED COST</div>
<div className="text-5xl font-mono font-medium text-[#1A1D21] mb-6">$<span id="price-display">499</span><span className="text-lg text-[#1A1D21]/40">/mo</span></div>
<button className="bg-[#1A1D21] text-white font-mono text-sm px-8 py-3 w-full md:w-auto hover:bg-[#0055FF] transition-colors" onmouseenter="this.innerText='START PLAN'" onmouseleave="this.innerText='CALCULATE COST'">
                            CALCULATE COST
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-[#D1D5DB] bg-[#F4F5F7] relative z-10">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
<div>
<h2 className="text-2xl font-medium tracking-tight mb-2">Due Diligence</h2>
<p className="text-[#1A1D21]/60 text-sm">Common questions from finance teams.</p>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

<div className="cursor-pointer group" onclick="typeAnswer('ans1', 'Yes. We are SOC-2 Type II certified and encrypted end-to-end. Your data is safer than it is in Excel.')">
<h3 className="font-medium text-[#1A1D21] mb-2 group-hover:text-[#0055FF] transition-colors flex items-center gap-2">
<span className="text-[#D1D5DB] group-hover:text-[#0055FF] font-mono text-xs">01</span> Is SOC-2 included?
                    </h3>
<div className="font-mono text-xs text-[#1A1D21]/70 h-12" id="ans1"></div>
</div>

<div className="cursor-pointer group" onclick="typeAnswer('ans2', 'We connect directly via API to 14,000+ financial institutions globally using Plaid and Teller.')">
<h3 className="font-medium text-[#1A1D21] mb-2 group-hover:text-[#0055FF] transition-colors flex items-center gap-2">
<span className="text-[#D1D5DB] group-hover:text-[#0055FF] font-mono text-xs">02</span> How do you sync bank feeds?
                    </h3>
<div className="font-mono text-xs text-[#1A1D21]/70 h-12" id="ans2"></div>
</div>

<div className="cursor-pointer group" onclick="typeAnswer('ans3', 'Implementation typically takes 2-4 days. We map your historical data automatically.')">
<h3 className="font-medium text-[#1A1D21] mb-2 group-hover:text-[#0055FF] transition-colors flex items-center gap-2">
<span className="text-[#D1D5DB] group-hover:text-[#0055FF] font-mono text-xs">03</span> Implementation timeline?
                    </h3>
<div className="font-mono text-xs text-[#1A1D21]/70 h-12" id="ans3"></div>
</div>

<div className="cursor-pointer group" onclick="typeAnswer('ans4', 'We support multi-entity consolidation and multi-currency reporting out of the box.')">
<h3 className="font-medium text-[#1A1D21] mb-2 group-hover:text-[#0055FF] transition-colors flex items-center gap-2">
<span className="text-[#D1D5DB] group-hover:text-[#0055FF] font-mono text-xs">04</span> Multi-entity support?
                    </h3>
<div className="font-mono text-xs text-[#1A1D21]/70 h-12" id="ans4"></div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-[#D1D5DB] pt-16 pb-8 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-[#D1D5DB] pb-16">

<div className="col-span-2 md:col-span-1 border-r border-[#D1D5DB] md:border-none pr-8">
<div className="font-bold tracking-tighter uppercase mb-6 text-sm">Product</div>
<ul className="space-y-3 font-mono text-xs text-[#1A1D21]/60">
<li><a className="hover:text-[#0055FF]" href="#">General Ledger</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Reconciliation</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Reporting</a></li>
<li><a className="hover:text-[#0055FF]" href="#">API Docs</a></li>
</ul>
</div>

<div className="border-r border-[#D1D5DB] md:border-none pr-8 hidden md:block">
<div className="font-bold tracking-tighter uppercase mb-6 text-sm">Company</div>
<ul className="space-y-3 font-mono text-xs text-[#1A1D21]/60">
<li><a className="hover:text-[#0055FF]" href="#">About</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Careers</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Press</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Security</a></li>
</ul>
</div>

<div className="border-r border-[#D1D5DB] md:border-none pr-8 hidden md:block">
<div className="font-bold tracking-tighter uppercase mb-6 text-sm">Resources</div>
<ul className="space-y-3 font-mono text-xs text-[#1A1D21]/60">
<li><a className="hover:text-[#0055FF]" href="#">Blog</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Community</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Help Center</a></li>
<li><a className="hover:text-[#0055FF]" href="#">Status</a></li>
</ul>
</div>

<div className="col-span-2 pl-0 md:pl-8 border-l-0 md:border-l border-[#D1D5DB]">
<div className="font-bold tracking-tighter uppercase mb-4 text-sm">Investor Update</div>
<p className="text-xs text-[#1A1D21]/60 mb-4">Quarterly performance metrics sent to your inbox.</p>
<div className="flex gap-2">
<input className="bg-[#F4F5F7] border border-[#D1D5DB] px-3 py-2 text-xs font-mono w-full focus:outline-none focus:border-green-500 transition-colors" placeholder="cfo@company.com" type="email"/>
<button className="bg-[#1A1D21] text-white px-4 py-2 text-xs font-mono hover:bg-[#0055FF] transition-colors">SUBSCRIBE</button>
</div>
</div>
</div>
<div className="flex justify-between items-center pt-8">
<div className="font-mono text-[10px] text-[#1A1D21]/40 uppercase tracking-widest">The Ledger © 2024. All assets liquid.</div>
<div className="flex gap-4">
<span className="iconify text-[#1A1D21]/40 hover:text-[#0055FF] cursor-pointer" data-icon="lucide:twitter" data-width="16"></span>
<span className="iconify text-[#1A1D21]/40 hover:text-[#0055FF] cursor-pointer" data-icon="lucide:linkedin" data-width="16"></span>
<span className="iconify text-[#1A1D21]/40 hover:text-[#0055FF] cursor-pointer" data-icon="lucide:github" data-width="16"></span>
</div>
</div>
</div>
</footer>



    </>
  );
}
