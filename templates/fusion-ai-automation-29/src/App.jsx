import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Sticky Navbar
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('bg-[#050505]/80', 'backdrop-blur-md', 'border-white/5');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('bg-[#050505]/80', 'backdrop-blur-md', 'border-white/5');
                navbar.classList.add('border-transparent');
            }
        });

        // Modal Logic
        const modal = document.getElementById('waitlist-modal');
        const modalContent = document.getElementById('modal-content');
        const formView = document.getElementById('modal-form-view');
        const successView = document.getElementById('modal-success-view');
        const form = document.getElementById('waitlist-form');

        function openModal() {
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before animating opacity
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
            
            // Reset view
            formView.classList.remove('hidden');
            successView.classList.add('hidden');
            form.reset();
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function submitForm(e) {
            e.preventDefault();
            // Simulate API call
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-lg"></iconify-icon>';
            
            setTimeout(() => {
                formView.classList.add('hidden');
                successView.classList.remove('hidden');
                btn.innerHTML = originalText;
            }, 800);
        }

        // Close modal on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute top-[-20%] w-[1000px] h-[500px] rounded-full bg-[#1E1B4B]/40 blur-[120px]"></div>
<div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-violet-900/10 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-900/10 blur-[120px]"></div>
</div>

<header className="fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 z-10" href="#">
<span className="text-lg font-semibold tracking-tighter text-white">FUSION</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-50 transition-colors" href="#about">About us</a>
<a className="hover:text-zinc-50 transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-zinc-50 transition-colors" href="#integrations">Integration</a>
<a className="hover:text-zinc-50 transition-colors" href="#blog">Blog</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors" onclick="openModal()">
                    Waitlist
                </button>
<button className="h-9 px-4 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="document.getElementById('pricing').scrollIntoView()">
                    Get Started
                </button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="md:pt-48 md:pb-32 flex flex-col min-h-[90vh] text-center max-w-[1200px] mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 items-center justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 text-xs font-medium mb-8 animate-fade-up opacity-0" style={{backdropFilter: 'blur(8px)'}}>
<iconify-icon icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Supercharge Your AI Workflows
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter max-w-4xl text-white mb-6 animate-fade-up delay-100 opacity-0 leading-[1.1]">
                Automate Your AI Workflows with <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">AI Agent</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mb-10 animate-fade-up delay-200 opacity-0">
                Connect your favorite apps, set triggers and watch AI handle the rest — no coding required. Get up and running in minutes.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up delay-300 opacity-0">
<button className="w-full sm:w-auto h-11 px-6 rounded-full bg-gradient-to-r from-violet-600 to-violet-500 text-white text-sm font-semibold hover:from-violet-500 hover:to-violet-400 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2" onclick="openModal()">
                    Join Waitlist
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="w-full sm:w-auto h-11 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-all backdrop-blur-sm" onclick="document.getElementById('pricing').scrollIntoView()">
                    View Pricing
                </button>
</div>

<div className="mt-20 md:mt-28 w-full max-w-4xl relative animate-fade-up delay-300 opacity-0" style={{animationDelay: '400ms'}}>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-10 h-full w-full"></div>
<div className="relative h-[300px] border border-white/5 rounded-2xl bg-zinc-950/50 backdrop-blur-sm overflow-hidden flex items-center justify-center p-8">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="relative w-full h-full flex items-center justify-between" style={{animation: 'float 6s ease-in-out infinite'}}>

<div className="relative z-10 w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:mailbox-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="absolute left-12 right-1/2 top-1/2 h-[1px] -translate-y-1/2 overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
<div className="absolute top-0 left-0 w-1/3 h-full bg-violet-400 shadow-[0_0_10px_#8B5CF6] animate-[pulse_2s_ease-in-out_infinite]"></div>
</div>

<div className="relative z-10 w-16 h-16 rounded-2xl border border-violet-500/30 bg-violet-500/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)]">
<iconify-icon className="text-violet-400 text-2xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="absolute inset-0 border border-violet-400/50 rounded-2xl animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
</div>

<div className="absolute left-1/2 right-12 top-1/2 h-[1px] -translate-y-1/2 overflow-hidden">
<div className="w-full h-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
<div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-400 shadow-[0_0_10px_#06B6D4] animate-[pulse_2.5s_ease-in-out_infinite]"></div>
</div>

<div className="relative z-10 w-12 h-12 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)]">
<iconify-icon className="text-zinc-400 text-xl" icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]" id="integrations">
<div className="max-w-[1200px] mx-auto px-6 text-center">
<p className="text-sm font-medium text-zinc-500 mb-8">Connects seamlessly with your favorite tools</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:slack-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Slack</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Zapier</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:tuning-square-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Make</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Salesforce</div>
<div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white"><iconify-icon className="text-2xl" icon="solar:figma-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Figma</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6" id="features">
<div className="max-w-[1200px] mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white mb-4">Powerful features, zero complexity</h2>
<p className="text-base text-zinc-400 max-w-xl mx-auto">Everything you need to build complex AI workflows without writing a single line of code.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 group-hover:text-violet-400 transition-colors text-zinc-300">
<iconify-icon className="text-xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Instant Access</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Start building immediately. No lengthy onboarding or technical setup required.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors text-zinc-300">
<iconify-icon className="text-xl" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">No-code Setup</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Visual drag-and-drop builder makes creating complex logic feel effortless.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-violet-500/10 group-hover:border-violet-500/20 group-hover:text-violet-400 transition-colors text-zinc-300">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Multi-app Connectivity</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Connect thousands of apps. If it has an API, Fusion AI can talk to it.</p>
</div>

<div className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 hover:bg-zinc-900 transition-all backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-colors text-zinc-300">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-white mb-2">Trigger-based Actions</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Set it and forget it. Workflows execute automatically based on your rules.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-violet-900/5 mt-24 blur-[100px] z-0"></div>
<div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-6">Ready to transform your workflow?</h2>
<p className="text-base text-zinc-400 mb-8">Join thousands of forward-thinking teams automating their daily tasks with Fusion AI.</p>
<button className="h-12 px-8 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2" onclick="openModal()">
                    Get Started for Free
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6 relative z-10">
<div className="max-w-[1200px] mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<span className="text-lg font-semibold tracking-tighter text-white">FUSION</span>
</a>
<p className="text-sm text-zinc-500 max-w-xs">Supercharging AI workflows for teams that want to move faster.</p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3">
<span className="text-sm font-semibold tracking-tight text-white mb-1">Product</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#integrations">Integrations</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-sm font-semibold tracking-tight text-white mb-1">Company</span>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#blog">Blog</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
<p className="text-xs text-zinc-600">© 2026 Fusion AI. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-600 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                    Made with <iconify-icon className="text-violet-400" icon="solar:heart-linear" style={{strokeWidth: '1.5'}}></iconify-icon> by Design
                </div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="waitlist-modal">

<div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm" onclick="closeModal()"></div>

<div className="relative w-full max-w-md p-8 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl transform scale-95 transition-transform duration-300 mx-4" id="modal-content">
<button className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div id="modal-form-view">
<div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-6 text-violet-400">
<iconify-icon className="text-2xl" icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">Join the Waitlist</h3>
<p className="text-sm text-zinc-400 mb-6">Be the first to know when we launch and get early access to Fusion AI.</p>
<form className="flex flex-col gap-4" id="waitlist-form" onsubmit="submitForm(event)">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<input className="w-full h-11 px-4 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/10 transition-colors" id="email" placeholder="name@company.com" required="" type="email"/>
</div>
<button className="w-full h-11 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="submit">
                        Join Waitlist
                    </button>
</form>
</div>
<div className="hidden text-center py-8" id="modal-success-view">
<div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6 text-green-400">
<iconify-icon className="text-3xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-2">You're on the list!</h3>
<p className="text-sm text-zinc-400">Keep an eye on your inbox. We'll be in touch soon.</p>
<button className="mt-8 w-full h-11 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors" onclick="closeModal()">
                    Close
                </button>
</div>
</div>
</div>


    </>
  );
}
