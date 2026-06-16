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



                                        for(let i=0; i<40; i++) {
                                            let h = Math.floor(Math.random() * 80) + 10;
                                            let color = i > 10 && i < 15 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-teal-500/40';
                                            document.write(`<div class="w-full rounded-t-sm eq-bar ${color}" style="height: ${h}%;"></div>`);
                                        }
                                    


        // Simple View Router
        function switchView(viewName) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 400); // match animation
            });

            // Show target
            const target = document.getElementById('view-' + viewName);
            if(target) {
                target.style.display = 'block';
                // Small timeout to allow display:block to render before adding opacity class for animation
                setTimeout(() => {
                    target.classList.add('active');
                }, 10);
            }
            
            window.scrollTo(0,0);
        }

        // Draggable Logic (Preserved from previous iteration)
        const dashboard = document.getElementById('dashboard-preview');
        const handle = document.getElementById('drag-handle');
        
        if(dashboard && handle) {
            let isDragging = false;
            let currentX;
            let currentY;
            let initialX;
            let initialY;
            let xOffset = 0;
            let yOffset = 0;

            handle.addEventListener("mousedown", dragStart);
            document.addEventListener("mouseup", dragEnd);
            document.addEventListener("mousemove", drag);

            function dragStart(e) {
                initialX = e.clientX - xOffset;
                initialY = e.clientY - yOffset;
                if (e.target.closest('#drag-handle')) {
                    isDragging = true;
                    dashboard.classList.add('dragging');
                }
            }
            function dragEnd(e) {
                initialX = currentX;
                initialY = currentY;
                isDragging = false;
                dashboard.classList.remove('dragging');
            }
            function drag(e) {
                if (isDragging) {
                    e.preventDefault();
                    currentX = e.clientX - initialX;
                    currentY = e.clientY - initialY;
                    xOffset = currentX;
                    yOffset = currentY;
                    dashboard.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
                    dashboard.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="app-root">

<div className="view-section active" id="view-landing">

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">

<div className="w-8 h-8 bg-white text-black rounded flex items-center justify-center font-bold font-mono tracking-tighter">
                            SI
                        </div>
<span className="font-bold tracking-tight text-white text-lg">SIGNAL</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#features">Workspace</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#readiness">A&amp;R Readiness™</a>
<a className="text-xs font-medium uppercase tracking-widest text-neutral-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-neutral-300 hover:text-white transition-colors" onclick="switchView('dashboard')">Log in</button>
<button className="bg-white text-black text-sm font-semibold px-5 py-2 rounded hover:bg-neutral-200 transition-colors" onclick="switchView('dashboard')">
                            Start Free Trial
                        </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex flex-col items-center">
<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-grid [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-teal-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-teal-500/20 bg-teal-900/10 mb-8">
<span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
<span className="text-xs font-mono text-teal-200">AI-DRIVEN A&amp;R FEEDBACK</span>
</div>
<h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 text-white max-w-4xl mx-auto leading-[0.95]">
                        Finish better tracks. <br/><span className="text-neutral-500">Faster.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        The intelligent workspace for music producers. We provide clarity and actionable feedback built from release patterns, not opinions.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" onclick="switchView('dashboard')">
                            Start Free Trial
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 text-neutral-300 font-medium rounded hover:bg-white/5 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                            Watch Demo
                        </button>
</div>
</div>

<div className="relative w-full max-w-5xl px-6 perspective-1000">
<div className="glass-panel rounded-lg overflow-hidden border border-white/10 shadow-2xl relative" id="dashboard-preview">

<div className="h-12 border-b border-white/10 bg-[#0a0a0a] flex items-center px-4 justify-between" id="drag-handle" style={{cursor: 'grab'}}>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-[1px] bg-white/10"></div>
<div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
<iconify-icon icon="solar:music-note-linear"></iconify-icon> project_neon_v3.wav
                                </div>
</div>
<div className="text-xs text-neutral-600 font-mono uppercase">Read-Only Preview</div>
</div>

<div className="grid grid-cols-12 h-[500px] bg-[#050505]">

<div className="col-span-12 md:col-span-8 p-6 border-r border-white/5 relative">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Frequency Analysis</h3>
<p className="text-xs text-neutral-500 font-mono">Comparing against: Modern House Top 100</p>
</div>
<span className="px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-bold border border-red-500/20 uppercase">Action Required</span>
</div>

<div className="h-48 flex items-end justify-between gap-1 mb-8 opacity-80">

</div>
<div className="space-y-3">
<div className="flex items-start gap-4 p-3 bg-red-500/5 border border-red-500/10 rounded">
<iconify-icon className="text-red-500 mt-1" icon="solar:danger-triangle-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-red-200">Low-end Mud Detected</div>
<div className="text-xs text-neutral-400 font-mono mt-1">Cut 200Hz by -3dB on Bass Stem. Clash detected with Kick transient.</div>
</div>
<button className="ml-auto text-xs bg-red-500/10 hover:bg-red-500/20 text-red-400 px-3 py-1.5 rounded uppercase font-bold transition-colors">Details</button>
</div>
<div className="flex items-start gap-4 p-3 bg-white/5 border border-white/5 rounded opacity-60">
<iconify-icon className="text-green-500 mt-1" icon="solar:check-circle-linear"></iconify-icon>
<div>
<div className="text-sm font-medium text-white">Stereo Width</div>
<div className="text-xs text-neutral-400 font-mono mt-1">Side channel energy is within optimal range for streaming.</div>
</div>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-4 bg-[#080808] p-6 flex flex-col">
<h3 className="text-sm font-bold text-white uppercase tracking-widest mb-6">A&amp;R Verdict</h3>
<div className="flex-1 flex flex-col items-center justify-center text-center mb-6">
<div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center mb-4 relative">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="transparent" r="46" stroke="#262626" strokeWidth="8"></circle>
<circle cx="50" cy="50" fill="transparent" r="46" stroke="#f59e0b" stroke-dasharray="289" stroke-dashoffset="100" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="flex flex-col">
<span className="text-3xl font-bold font-mono text-white">68<span className="text-sm">%</span></span>
</div>
</div>
<div className="text-xl font-bold text-amber-500 uppercase tracking-tight">Not Yet Ready</div>
<p className="text-xs text-neutral-500 mt-2">Dynamic range needs compression before label submission.</p>
</div>
<div className="border-t border-white/10 pt-6">
<div className="text-xs font-mono text-neutral-500 mb-2 uppercase">Label Fit Analysis</div>
<div className="flex items-center justify-between text-sm mb-2">
<span className="text-white">Selected Works</span>
<span className="text-green-400 font-mono">82% Match</span>
</div>
<div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[82%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="readiness">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-bold tracking-tight text-white mb-6">A&amp;R Readiness™</h2>
<p className="text-neutral-400 text-lg mb-8 leading-relaxed">
                                Stop guessing if your track is finished. Our proprietary model analyzes your mix against thousands of charted tracks to give you a definitive blunt answer.
                            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="p-2 bg-white/5 rounded border border-white/10 text-teal-400">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">Roster Benchmarking</h4>
<p className="text-sm text-neutral-500">Compare your sonic signature directly against specific label rosters.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-white/5 rounded border border-white/10 text-teal-400">
<iconify-icon className="text-xl" icon="solar:tag-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">Label Fit Analysis</h4>
<p className="text-sm text-neutral-500">Identify which labels are statistically most likely to sign your sound.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="p-2 bg-white/5 rounded border border-white/10 text-teal-400">
<iconify-icon className="text-xl" icon="solar:gavel-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-bold mb-1">The A&amp;R Verdict</h4>
<p className="text-sm text-neutral-500">A simple "Ready", "Close", or "Not Yet" status based on technical standards.</p>
</div>
</li>
</ul>
</div>
<div className="relative">

<div className="absolute inset-0 bg-teal-500/20 blur-[100px] rounded-full"></div>
<div className="relative bg-black border border-white/10 rounded-xl p-6 shadow-2xl">
<div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
<span className="font-mono text-sm text-neutral-400">ANALYSIS_REPORT_001</span>
<span className="px-2 py-0.5 rounded bg-green-900/30 text-green-400 border border-green-500/20 text-xs font-mono">VERIFIED</span>
</div>
<div className="space-y-4">
<div className="flex justify-between items-center">
<span className="text-sm font-medium">Loudness (LUFS)</span>
<span className="text-sm font-mono text-white">-8.2 <span className="text-neutral-500">/ -7.5 Target</span></span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full">
<div className="bg-yellow-500 h-full w-[85%] rounded-full"></div>
</div>
<div className="flex justify-between items-center mt-6">
<span className="text-sm font-medium">Stereo Image</span>
<span className="text-sm font-mono text-white">Optimal</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full">
<div className="bg-teal-500 h-full w-[95%] rounded-full"></div>
</div>
<div className="flex justify-between items-center mt-6">
<span className="text-sm font-medium">Arrangement Energy</span>
<span className="text-sm font-mono text-white">Drop lacks contrast</span>
</div>
<div className="w-full bg-white/10 h-1.5 rounded-full">
<div className="bg-red-500 h-full w-[60%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-white">Workflow</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="text-4xl font-mono font-bold text-white/10 mb-4">01</div>
<h3 className="text-lg font-bold text-white mb-2">Upload Track</h3>
<p className="text-neutral-500 text-sm">Securely upload your pre-master or mixdown. We support WAV and AIFF up to 96kHz.</p>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="text-4xl font-mono font-bold text-white/10 mb-4">02</div>
<h3 className="text-lg font-bold text-white mb-2">Get Analysis</h3>
<p className="text-neutral-500 text-sm">Our AI deconstructs your track's stems and compares technical data against genre baselines.</p>
</div>
<div className="p-6 border border-white/5 rounded-xl bg-white/[0.02]">
<div className="text-4xl font-mono font-bold text-white/10 mb-4">03</div>
<h3 className="text-lg font-bold text-white mb-2">Refine &amp; Sign</h3>
<p className="text-neutral-500 text-sm">Apply the specific technical feedback. Resubmit for the "Ready" verdict. Pitch with confidence.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-white/10">
<p className="text-lg text-white mb-6">"Signal cut my revision time in half. It found masking frequencies in the vocal that I missed after listening for 8 hours straight."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">M</div>
<div>
<div className="text-white font-bold">Mindchatter</div>
<div className="text-neutral-500 text-xs uppercase">Touring Artist • Foreign Family</div>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-neutral-900 to-black p-8 rounded-2xl border border-white/10">
<p className="text-lg text-white mb-6">"The label fit analysis is scary accurate. It predicted my latest signing before I even sent the email."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center font-bold">H</div>
<div>
<div className="text-white font-bold">Haddon</div>
<div className="text-neutral-500 text-xs uppercase">Producer • Mau5trap</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-md mx-auto bg-neutral-900/80 backdrop-blur-xl border border-teal-500/30 rounded-2xl overflow-hidden relative shadow-2xl shadow-teal-900/20">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-teal-500 to-emerald-400"></div>
<div className="p-8 text-center">
<h3 className="text-xl font-bold text-white mb-2">Pro Producer</h3>
<div className="flex items-baseline justify-center gap-1 my-6">
<span className="text-4xl font-bold text-white">$6.99</span>
<span className="text-neutral-500">/mo</span>
</div>
<p className="text-sm text-neutral-400 mb-8">Full access to intelligent analysis tools.</p>
<ul className="text-left space-y-4 mb-8 text-sm text-neutral-300">
<li className="flex gap-3"><iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Unlimited Analysis Uploads</li>
<li className="flex gap-3"><iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> A&amp;R Readiness™ Verdict</li>
<li className="flex gap-3"><iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Label Match Reports</li>
<li className="flex gap-3"><iconify-icon className="text-teal-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Export Technical Sheets</li>
</ul>
<button className="w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors" onclick="switchView('dashboard')">
                                Start 3-Day Free Trial
                            </button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xs text-neutral-600">
                            © 2024 Signal Audio Inc. <br/>
                            Built from release patterns, not opinions.
                        </div>
<div className="flex gap-6 text-xs text-neutral-500">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
<a className="hover:text-white" href="#">Contact</a>
</div>
</div>
</div>
</footer>
</div>

<div className="view-section min-h-screen bg-[#050505]" id="view-dashboard">

<div className="fixed top-0 left-0 w-64 h-full border-r border-white/5 bg-[#080808] hidden md:flex flex-col z-20">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="font-bold tracking-tight text-white text-lg flex items-center gap-2">
<div className="w-6 h-6 bg-white text-black rounded flex items-center justify-center font-bold font-mono text-xs">SI</div>
                        SIGNAL
                    </div>
</div>
<div className="p-4 space-y-1">
<div className="px-4 py-2 text-xs font-bold text-neutral-600 uppercase tracking-widest mt-4 mb-2">Workspace</div>
<button className="w-full text-left px-4 py-2 text-sm text-white bg-white/5 rounded flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:music-library-2-linear"></iconify-icon> Projects
                    </button>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded flex items-center gap-3 transition-colors">
<iconify-icon className="text-lg" icon="solar:graph-up-linear"></iconify-icon> Analytics
                    </button>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-400 hover:text-white hover:bg-white/5 rounded flex items-center gap-3 transition-colors">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> Roster Benchmarks
                    </button>
</div>
<div className="mt-auto p-4 border-t border-white/5">
<div className="flex items-center gap-3 px-4 py-3 mb-4 rounded bg-gradient-to-r from-teal-900/20 to-transparent border border-teal-500/20">
<div className="w-8 h-8 rounded bg-teal-500 flex items-center justify-center font-bold text-black text-xs">P</div>
<div>
<div className="text-xs font-bold text-white">Pro Producer</div>
<button className="text-[10px] text-teal-400 hover:text-teal-300">Manage on Stripe</button>
</div>
</div>
<button className="w-full text-left px-4 py-2 text-sm text-neutral-500 hover:text-white flex items-center gap-3 transition-colors" onclick="switchView('landing')">
<iconify-icon className="text-lg" icon="solar:logout-2-linear"></iconify-icon> Log Out
                    </button>
</div>
</div>

<div className="md:ml-64 p-8">

<div className="flex md:hidden items-center justify-between mb-8">
<span className="font-bold text-white">SIGNAL</span>
<button className="text-sm text-neutral-400" onclick="switchView('landing')">Exit</button>
</div>
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-2xl font-bold text-white">Project Overview</h1>
<p className="text-neutral-500 text-sm mt-1">Manage your tracks and analysis reports.</p>
</div>
<button className="bg-white text-black text-sm font-bold px-4 py-2 rounded hover:bg-neutral-200 flex items-center gap-2">
<iconify-icon icon="solar:upload-square-linear"></iconify-icon> New Analysis
                    </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center text-neutral-400 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:music-note-slider-linear"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-white">Midnight_Drive_v4.wav</h3>
<div className="text-xs text-neutral-500 mt-1 flex items-center gap-2">
<span>Updated 2h ago</span> • <span className="text-neutral-400">Deep House</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-1 rounded bg-amber-500/10 text-amber-500 border border-amber-500/20 text-xs font-bold uppercase mb-1">Verdict: Close</span>
<span className="text-[10px] text-neutral-500">Score: 78/100</span>
</div>
</div>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-sm text-neutral-300 bg-black/40 p-2 rounded border border-white/5">
<iconify-icon className="text-amber-500" icon="solar:danger-circle-linear"></iconify-icon>
<span>High-mids (2-4kHz) exceed genre avg by +3dB</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300 bg-black/40 p-2 rounded border border-white/5">
<iconify-icon className="text-amber-500" icon="solar:danger-circle-linear"></iconify-icon>
<span>Kick transient lacks punch (Attack &gt; 15ms)</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 bg-white/5 border border-white/10 text-white text-sm rounded hover:bg-white/10 transition-colors">View Report</button>
<button className="px-3 py-2 bg-white/5 border border-white/10 text-neutral-400 rounded hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#0f0f0f] border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors group opacity-60">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<div className="w-12 h-12 bg-neutral-800 rounded flex items-center justify-center text-neutral-400">
<iconify-icon className="text-2xl" icon="solar:music-note-slider-linear"></iconify-icon>
</div>
<div>
<h3 className="font-bold text-white">Neon_Lights_Demo.mp3</h3>
<div className="text-xs text-neutral-500 mt-1 flex items-center gap-2">
<span>Updated 1d ago</span> • <span className="text-neutral-400">Pop</span>
</div>
</div>
</div>
<div className="flex flex-col items-end">
<span className="px-2 py-1 rounded bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-bold uppercase mb-1">Verdict: Not Yet</span>
<span className="text-[10px] text-neutral-500">Score: 42/100</span>
</div>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-sm text-neutral-300 bg-black/40 p-2 rounded border border-white/5">
<iconify-icon className="text-red-500" icon="solar:danger-triangle-linear"></iconify-icon>
<span>Phase correlation issues in low end</span>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 py-2 bg-white/5 border border-white/10 text-white text-sm rounded hover:bg-white/10 transition-colors">View Report</button>
<button className="px-3 py-2 bg-white/5 border border-white/10 text-neutral-400 rounded hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="mt-12 p-6 border border-dashed border-neutral-800 rounded-xl text-center">
<p className="text-neutral-500 text-sm mb-4">Auth Provider Integration</p>
<button className="px-4 py-2 bg-[#1C2333] text-white border border-[#2e3648] rounded font-mono text-xs flex items-center justify-center mx-auto gap-2 hover:bg-[#252c3d]">
<iconify-icon icon="solar:code-square-linear"></iconify-icon> 
                        Secured via Replit Auth
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
