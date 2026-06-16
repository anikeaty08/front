import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#7C3AED',
'primary-hover': '#6D28D9',
surface: '#ffffff',
subtle: '#F9FAFB',
border: '#E5E7EB',
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
}
}
}
}



        // State Management
        let currentPhase = 1;

        function handleRegistration(e) {
            e.preventDefault();
            // Transition Phase 1 -> Loading -> Phase 2
            document.getElementById('phase-1').classList.remove('active');
            document.getElementById('loading-state').classList.remove('hidden');
            document.getElementById('loading-state').style.display = 'flex';
            document.getElementById('step-indicator').innerText = 'Initializing...';

            setTimeout(() => {
                document.getElementById('loading-state').style.display = 'none';
                nextPhase(2);
            }, 1500);
        }

        function nextPhase(phase) {
            // Hide all phases
            document.querySelectorAll('.view-section').forEach(el => el.classList.remove('active'));
            
            // Show new phase
            if (phase === 5) {
                document.getElementById('phase-5').classList.remove('hidden');
                document.getElementById('app-container').style.display = 'none'; // Hide main container
                document.querySelector('nav').style.display = 'none'; // Hide top nav
            } else {
                const nextSection = document.getElementById(`phase-${phase}`);
                if(nextSection) nextSection.classList.add('active');
                document.getElementById('step-indicator').innerText = `Phase ${phase} of 5`;
            }
            currentPhase = phase;
        }

        // Phase 2 Logic
        function startScan() {
            const btn = document.querySelector('#phase-2 button');
            const input = document.getElementById('brand-url');
            if(!input.value) return;

            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="20"></iconify-icon>`;
            
            document.getElementById('scan-progress').classList.remove('hidden');
            
            let width = 0;
            const bar = document.getElementById('scan-bar');
            const text = document.getElementById('scan-status-text');
            const percent = document.getElementById('scan-percent');

            const interval = setInterval(() => {
                width += Math.floor(Math.random() * 5) + 2;
                if (width > 30 && width < 60) text.innerText = "Detecting Target Audience...";
                if (width > 60) text.innerText = "Categorizing Industry...";
                
                if (width >= 100) {
                    width = 100;
                    clearInterval(interval);
                    setTimeout(() => {
                        document.getElementById('scan-progress').classList.add('hidden');
                        document.getElementById('brand-result').classList.remove('hidden');
                        document.getElementById('brand-result').classList.add('slide-up');
                        document.getElementById('phase-2-next').classList.remove('hidden');
                        document.getElementById('phase-2-next').classList.add('flex');
                        btn.innerHTML = 'Scan Complete';
                        btn.classList.add('bg-green-600');
                    }, 500);
                }
                
                bar.style.width = width + '%';
                percent.innerText = width + '%';
            }, 50);
        }

        // Phase 3 Logic
        function toggleGoal(card) {
            // Logic to visually toggle selection
            const checkIcon = card.querySelector('.absolute.top-4');
            const isSelected = checkIcon.classList.contains('opacity-100');
            
            if(isSelected) {
                // Deselect
                card.classList.remove('ring-2', 'ring-primary', 'border-primary');
                checkIcon.classList.remove('opacity-100');
                checkIcon.classList.add('opacity-0');
            } else {
                // Select
                card.classList.add('ring-2', 'ring-primary', 'border-primary');
                checkIcon.classList.remove('opacity-0');
                checkIcon.classList.add('opacity-100');
            }
        }

        // Phase 4 Logic
        function runDemo() {
            const btn = document.getElementById('extract-btn');
            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="20"></iconify-icon> Processing PVM Model...`;
            
            const overlay = document.getElementById('scanner-overlay');
            overlay.classList.remove('hidden');
            
            const line = overlay.querySelector('.scanner-line');
            // Trigger animation
            line.style.left = '100%';

            setTimeout(() => {
                document.getElementById('results-placeholder').classList.add('hidden');
                document.getElementById('results-content').classList.remove('hidden');
                document.getElementById('results-content').classList.add('flex');
                
                overlay.classList.add('hidden');
                btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Analysis Complete`;
                btn.classList.remove('bg-gray-900', 'hover:bg-gray-800');
                btn.classList.add('bg-green-600', 'hover:bg-green-700');
            }, 3000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="h-16 border-b border-border bg-surface flex items-center justify-between px-6 z-10 shrink-0">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-gray-900">VideoForce.ai</span>
</div>
<div className="text-xs text-gray-500 font-medium hidden md:block" id="step-indicator">Phase 1 of 5</div>
</nav>

<main className="flex-1 relative flex items-center justify-center p-4 overflow-y-auto w-full" id="app-container">

<div className="view-section active w-full max-w-md flex-col space-y-6 fade-in" id="phase-1">
<div className="text-center space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Create your account</h1>
<p className="text-sm text-gray-500 font-normal">Start optimizing your video performance today.</p>
</div>
<div className="bg-surface border border-border rounded-xl shadow-sm p-6 space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-white border border-border hover:bg-gray-50 transition-colors h-10 rounded-lg text-sm font-medium text-gray-700">
<iconify-icon icon="devicon:google" width="16"></iconify-icon>
                    Continue with Google
                </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-border"></div>
<span className="flex-shrink-0 mx-4 text-xs text-gray-400">Or register with email</span>
<div className="flex-grow border-t border-border"></div>
</div>
<form className="space-y-4" id="reg-form" onsubmit="handleRegistration(event)">
<div className="space-y-1">
<label className="text-xs font-medium text-gray-600">Work Email</label>
<input className="w-full h-10 px-3 bg-gray-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="name@company.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-600">Brand Name</label>
<input className="w-full h-10 px-3 bg-gray-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="Acme Inc." required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-gray-600">Password</label>
<input className="w-full h-10 px-3 bg-gray-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all" placeholder="••••••••" required="" type="password"/>
</div>
<button className="w-full h-10 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2" type="submit">
                        Get Started
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</form>
</div>
<p className="text-center text-xs text-gray-400">By continuing, you agree to our Terms of Service.</p>
</div>

<div className="hidden flex-col items-center justify-center space-y-4 fade-in" id="loading-state">
<div className="relative w-16 h-16">
<div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
<div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
<div className="absolute inset-0 flex items-center justify-center text-primary">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
</div>
<p className="text-sm font-medium text-gray-700 animate-pulse">Initializing your Performance Agent...</p>
</div>

<div className="view-section w-full max-w-lg flex-col space-y-6" id="phase-2">
<div className="text-center space-y-2 slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-medium border border-primary/10 mb-2">
<iconify-icon icon="solar:stars-minimalistic-linear"></iconify-icon>
                    AI Agent Active
                </div>
<h2 className="text-2xl font-medium tracking-tight text-gray-900">Let's analyze your brand</h2>
<p className="text-sm text-gray-500">Enter your URL and our agent will build your profile automatically.</p>
</div>
<div className="bg-surface border border-border rounded-xl shadow-sm p-6 space-y-6 slide-up" style={{animationDelay: '0.1s'}}>
<div className="flex gap-2">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
<iconify-icon icon="solar:link-linear" width="18"></iconify-icon>
</div>
<input className="w-full h-10 pl-10 pr-3 bg-gray-50 border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary" id="brand-url" placeholder="https://yourbrand.com" type="url" value="https://video-force.ai"/>
</div>
<button className="h-10 px-4 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors" onclick="startScan()">
                        Scan
                    </button>
</div>

<div className="hidden space-y-3" id="scan-progress">
<div className="flex justify-between text-xs text-gray-500 font-medium">
<span id="scan-status-text">Analyzing Brand Voice...</span>
<span id="scan-percent">0%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full transition-all duration-300 w-0" id="scan-bar"></div>
</div>
</div>

<div className="hidden border border-border bg-gray-50/50 rounded-lg p-4 space-y-4" id="brand-result">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-white border border-border rounded-lg flex items-center justify-center shadow-sm">
<span className="text-xl font-semibold tracking-tighter text-gray-900">V</span>
</div>
<div className="flex-1 space-y-1">
<h3 className="text-sm font-medium text-gray-900">VideoForce AI</h3>
<p className="text-xs text-gray-500 leading-relaxed">Platform optimizing video performance through dual-patented models.</p>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Industry</label>
<div className="h-8 flex items-center px-3 bg-white border border-border rounded-md text-sm text-gray-700 shadow-sm">
<iconify-icon className="mr-2 text-gray-400" icon="solar:laptop-linear"></iconify-icon>
                                Technology
                            </div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Audience</label>
<div className="h-8 flex items-center px-3 bg-white border border-border rounded-md text-sm text-gray-700 shadow-sm">
<iconify-icon className="mr-2 text-gray-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                                B2B Enterprise
                            </div>
</div>
</div>
</div>
</div>
<button className="hidden w-full h-10 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-all shadow-sm items-center justify-center gap-2 slide-up" id="phase-2-next" onclick="nextPhase(3)">
                Confirm Profile
                <iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="view-section w-full max-w-3xl flex-col space-y-8 fade-in" id="phase-3">
<div className="text-center space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-gray-900">What are your primary goals?</h2>
<p className="text-sm text-gray-500">Select all that apply to tailor your dashboard.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group cursor-pointer bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all shadow-sm hover:shadow-md relative overflow-hidden" onclick="toggleGoal(this)">
<div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">Scale UGC</h3>
<p className="text-xs text-gray-500 leading-relaxed">Automate creator sourcing and briefs.</p>
</div>

<div className="group cursor-pointer bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all shadow-sm hover:shadow-md relative overflow-hidden ring-2 ring-primary border-primary" onclick="toggleGoal(this)">
<div className="absolute top-4 right-4 text-primary opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">Optimize Ads</h3>
<p className="text-xs text-gray-500 leading-relaxed">Extract highlights from long-form video.</p>
</div>

<div className="group cursor-pointer bg-surface border border-border rounded-xl p-5 hover:border-primary/50 transition-all shadow-sm hover:shadow-md relative overflow-hidden" onclick="toggleGoal(this)">
<div className="absolute top-4 right-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-call-linear" width="24"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-1">Automate Outreach</h3>
<p className="text-xs text-gray-500 leading-relaxed">Deploy AI agents to contact creators.</p>
</div>
</div>
<div className="bg-surface border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900">Connect your Store</h4>
<p className="text-xs text-gray-500">Sync products for automated matching.</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium text-gray-700">
<iconify-icon icon="logos:shopify" width="16"></iconify-icon> Shopify
                    </button>
<button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium text-gray-700">
<iconify-icon icon="logos:tiktok-icon" width="14"></iconify-icon> TikTok Shop
                    </button>
<button className="flex items-center gap-2 px-3 py-2 border border-border rounded-lg hover:bg-gray-50 transition-colors text-xs font-medium text-gray-700">
<iconify-icon icon="logos:amazon-icon" width="14"></iconify-icon> Amazon
                    </button>
</div>
</div>
<div className="flex items-center justify-end gap-4 pt-4">
<button className="text-sm text-gray-500 hover:text-gray-900 font-medium transition-colors">Skip for now</button>
<button className="h-10 px-6 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-all shadow-sm flex items-center gap-2" onclick="nextPhase(4)">
                    Continue
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="view-section w-full max-w-4xl flex-col space-y-6 fade-in" id="phase-4">
<div className="flex items-center justify-between">
<div>
<h2 className="text-xl font-medium tracking-tight text-gray-900">Demo Lab: Highlights Engine</h2>
<p className="text-sm text-gray-500">See how our PVM model identifies viral moments.</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 bg-purple-50 text-primary text-xs font-medium rounded border border-purple-100">Sample Mode</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 space-y-4">
<div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 group" id="demo-video-container">

<div className="absolute inset-0 flex items-center justify-center opacity-40">
<iconify-icon className="text-white" icon="solar:play-circle-linear" width="64"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 text-white text-xs font-medium bg-black/50 px-2 py-1 rounded backdrop-blur-sm">Original Raw Footage (03:42)</div>

<div className="absolute inset-0 bg-primary/20 hidden z-10" id="scanner-overlay">
<div className="absolute top-0 bottom-0 w-1 bg-primary shadow-[0_0_20px_rgba(124,58,237,0.8)] scanner-line transition-all duration-[3000ms] ease-linear" style={{left: '0'}}></div>
<div className="absolute top-4 right-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md">
<iconify-icon className="animate-pulse" icon="solar:scanner-linear"></iconify-icon>
                                Analyzing Audio &amp; Visuals...
                            </div>
</div>
</div>
<button className="w-full h-12 bg-gray-900 text-white hover:bg-gray-800 rounded-lg text-sm font-medium transition-all shadow-sm flex items-center justify-center gap-2" id="extract-btn" onclick="runDemo()">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
                        Extract Winning Hooks
                    </button>
</div>

<div className="lg:col-span-1 flex flex-col h-full">
<div className="flex-1 border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center text-gray-400 p-6 text-center" id="results-placeholder">
<iconify-icon className="mb-2 opacity-50" icon="solar:gallery-remove-linear" width="32"></iconify-icon>
<p className="text-xs">Results will appear here after analysis.</p>
</div>
<div className="hidden flex-col gap-4 h-full" id="results-content">
<div className="p-3 bg-purple-50 border border-purple-100 rounded-lg flex gap-3 items-start animate-[fadeIn_0.5s_ease-out]">
<div className="mt-0.5 text-primary">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="text-xs text-purple-900">
<span className="font-semibold">Value Unlocked:</span> Our PVM model just saved you ~4 hours of manual editing.
                            </div>
</div>
<div className="space-y-3">

<div className="bg-surface border border-border rounded-lg p-3 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group slide-up" style={{animationDelay: '0.1s'}}>
<div className="relative aspect-video bg-gray-100 rounded mb-2 overflow-hidden">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors"></div>
<div className="absolute top-2 right-2 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">98/100</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-900">Thumb-Stopper Hook</span>
<span className="text-[10px] text-gray-400">00:03</span>
</div>
</div>

<div className="bg-surface border border-border rounded-lg p-3 shadow-sm hover:border-primary/50 transition-colors cursor-pointer group slide-up" style={{animationDelay: '0.2s'}}>
<div className="relative aspect-video bg-gray-100 rounded mb-2 overflow-hidden">
<div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/0 transition-colors"></div>
<div className="absolute top-2 right-2 bg-blue-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow-sm">Social Proof</div>
</div>
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-gray-900">Testimonial Cut</span>
<span className="text-[10px] text-gray-400">00:12</span>
</div>
</div>
</div>
<div className="mt-auto pt-4">
<button className="w-full h-10 bg-primary hover:bg-primary-hover text-white rounded-lg text-sm font-medium transition-all shadow-sm" onclick="nextPhase(5)">
                                Go to Dashboard
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden fixed inset-0 bg-subtle z-50 flex fade-in" id="phase-5">

<aside className="w-64 bg-surface border-r border-border flex flex-col">
<div className="h-16 flex items-center px-6 border-b border-border">
<div className="flex items-center gap-2 text-primary">
<iconify-icon icon="solar:play-circle-bold-duotone" width="24"></iconify-icon>
<span className="font-semibold tracking-tight text-gray-900">VideoForce</span>
</div>
</div>
<div className="p-4 flex-1 overflow-y-auto space-y-6">
<div className="space-y-1">
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Platform</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:home-smile-linear" width="18"></iconify-icon> Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-primary bg-primary/5 font-medium rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:rocket-2-linear" width="18"></iconify-icon> Campaigns
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> CRM
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon> Shipment
                    </a>
</div>
<div className="space-y-1">
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Assets</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon> Content
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon> Highlights
                    </a>
</div>
<div className="space-y-1">
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Settings</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:card-linear" width="18"></iconify-icon> Payments
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-lg transition-colors" href="#">
<iconify-icon icon="solar:chart-square-linear" width="18"></iconify-icon> Performance
                    </a>
</div>
</div>
<div className="p-4 border-t border-border">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-700">JS</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-gray-900">John Smith</span>
<span className="text-[10px] text-gray-500">Acme Inc.</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden">
<header className="h-16 bg-surface border-b border-border flex items-center justify-between px-8">
<h1 className="text-lg font-medium text-gray-900">New Campaign</h1>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<button className="bg-primary text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-primary-hover transition-colors">
                        Save Draft
                    </button>
</div>
</header>
<div className="flex-1 overflow-y-auto bg-subtle p-8">

<div className="max-w-4xl mx-auto mb-8">
<div className="flex items-center justify-between relative">
<div className="absolute left-0 top-1/2 w-full h-0.5 bg-gray-200 -z-10"></div>
<div className="flex flex-col items-center gap-2 bg-subtle px-2 z-10">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold border-4 border-subtle">1</div>
<span className="text-xs font-medium text-primary">Strategy</span>
</div>
<div className="flex flex-col items-center gap-2 bg-subtle px-2 z-10">
<div className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">2</div>
<span className="text-xs font-medium text-gray-500">Creative</span>
</div>
<div className="flex flex-col items-center gap-2 bg-subtle px-2 z-10">
<div className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">3</div>
<span className="text-xs font-medium text-gray-500">Targeting</span>
</div>
<div className="flex flex-col items-center gap-2 bg-subtle px-2 z-10">
<div className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-500 flex items-center justify-center text-xs font-medium">4</div>
<span className="text-xs font-medium text-gray-500">Logistics</span>
</div>
</div>
</div>

<div className="max-w-3xl mx-auto bg-surface border border-border rounded-xl shadow-sm p-8 space-y-6 slide-up">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-primary" icon="solar:magic-stick-3-linear"></iconify-icon>
<span className="text-xs font-medium text-primary">Pre-filled by AI Agent</span>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Campaign Name</label>
<input className="w-full h-10 px-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" value="Acme Inc. - Q4 UGC Push"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Primary Objective</label>
<select className="w-full h-10 px-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary">
<option>Scale UGC Production</option>
<option>Conversions</option>
</select>
</div>
<div className="col-span-2 space-y-2">
<label className="text-sm font-medium text-gray-700">Target Audience Description</label>
<textarea className="w-full h-24 p-3 bg-white border border-border rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-primary" style={{resize: 'none'}}>Based on URL scan: Tech-savvy decision makers in B2B enterprise sectors looking for video optimization tools.</textarea>
</div>
</div>
<div className="pt-4 flex justify-end">
<button className="h-10 px-6 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover shadow-sm">
                            Next Step
                        </button>
</div>
</div>
</div>
</main>

<div className="absolute bottom-6 right-6 w-80 bg-surface border border-border rounded-xl shadow-lg flex flex-col overflow-hidden animate-[slideUp_0.8s_ease-out]">
<div className="bg-gray-50 border-b border-border px-4 py-3 flex items-center justify-between">
<span className="text-xs font-semibold text-gray-900 uppercase tracking-wide">Setup Progress</span>
<span className="text-xs font-bold text-primary">75%</span>
</div>
<div className="p-2">
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-500 line-through">Create Account</span>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-500 line-through">Brand Profile Scan</span>
</div>
<div className="flex items-center gap-3 p-2">
<div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-500 line-through">Goal Definition</span>
</div>
<div className="flex items-center gap-3 p-2 bg-purple-50 rounded-lg">
<div className="w-4 h-4 rounded-full border border-primary flex items-center justify-center"></div>
<span className="text-xs font-medium text-primary">Launch First Campaign</span>
</div>
</div>
</div>
</div>


    </>
  );
}
