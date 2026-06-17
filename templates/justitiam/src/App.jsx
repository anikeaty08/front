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



      const lenis = new Lenis({ duration: 1.2, smooth: true }); function raf(time) { lenis.raf(time); requestAnimationFrame(raf); } requestAnimationFrame(raf); gsap.registerPlugin(ScrollTrigger); gsap.utils.toArray('.hero-glow, .feedback-glow, .support-glow').forEach(bg => { gsap.to(bg, { yPercent: 40, ease: 'none', scrollTrigger: { trigger: bg.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }); }); gsap.utils.toArray('section').forEach(section => { const elements = section.querySelectorAll('h2, h3, p, .feature-card, .btn-primary, .btn-secondary'); if(elements.length) { gsap.from(elements, { y: 40, opacity: 0, duration: 1, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } }); } }); gsap.from('h1', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out' }); gsap.from('.mockup-card', { y: 60, opacity: 0, duration: 1.5, ease: 'power3.out', delay: 0.2 }); gsap.set('.mockup-card', { transformPerspective: 1000 }); gsap.to('.mockup-card', { y: -15, rotationX: 3, rotationY: -3, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.5 }); VanillaTilt.init(document.querySelectorAll('.feature-card'), { max: 3, speed: 400, glare: true, 'max-glare': 0.05 });
    


      const authForms={login:'<form class="space-y-4" onsubmit="handleAuth(event, \'login\')"><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email Address</label><input type="email" placeholder="admin@justitiam.com" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all"></div><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Password</label><input type="password" placeholder="••••••••" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-500/40 transition-all"></div><div class="flex justify-between items-center text-xs mt-2"><label class="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-300 transition-colors"><input type="checkbox" class="w-4 h-4 rounded bg-transparent border-white/20 text-indigo-500 focus:ring-indigo-500/40 focus:ring-offset-0"> Remember me</label><a href="#" onclick="openModal(\'forgot\')" class="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">Forgot password?</a></div><button type="submit" class="btn-primary w-full text-sm font-medium px-5 py-3.5 rounded-xl mt-6 shadow-[0_0_20px_rgba(248,249,252,0.1)]">Sign In to Portal</button></form>',signup:'<form class="space-y-4" onsubmit="handleAuth(event, \'signup\')"><div class="grid grid-cols-2 gap-3"><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">First Name</label><input type="text" placeholder="John" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"></div><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Last Name</label><input type="text" placeholder="Doe" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"></div></div><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email Address</label><input type="email" placeholder="john@company.com" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"></div><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Create Password</label><input type="password" placeholder="••••••••" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"></div><button type="submit" class="btn-primary w-full text-sm font-medium px-5 py-3.5 rounded-xl mt-6">Create Secure Account</button></form>',forgot:'<form class="space-y-4" onsubmit="handleAuth(event, \'reset\')"><p class="text-sm text-slate-400 mb-6 leading-relaxed">Enter the email address associated with your account and we\'ll send you a secure link to reset your password.</p><div><label class="block text-xs font-medium text-slate-400 mb-1.5 ml-1">Email Address</label><input type="email" placeholder="Enter your email" required class="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/40"></div><button type="submit" class="btn-primary w-full text-sm font-medium px-5 py-3.5 rounded-xl mt-6">Send Reset Link</button></form>',success:'<div class="text-center py-8"><div class="w-20 h-20 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.2)]"><iconify-icon icon="solar:check-circle-linear" width="40"></iconify-icon></div><h4 class="text-2xl font-medium text-white mb-2 tracking-tight">Authentication Successful</h4><p class="text-sm text-slate-400">Establishing secure connection to database...</p><div class="mt-8 w-48 h-1 bg-white/10 rounded-full mx-auto overflow-hidden"><div class="h-full bg-green-400 w-full origin-left animate-[scale-x_1.5s_ease-in-out]"></div></div></div>'};const toggles={login:'Don\'t have an account? <a href="#" onclick="openModal(\'signup\')" class="text-indigo-400 hover:text-indigo-300 font-medium">Sign up</a>',signup:'Already have an account? <a href="#" onclick="openModal(\'login\')" class="text-indigo-400 hover:text-indigo-300 font-medium">Sign in</a>',forgot:'Remembered your password? <a href="#" onclick="openModal(\'login\')" class="text-indigo-400 hover:text-indigo-300 font-medium">Sign in</a>',success:''};const titles={login:'Sign In to Portal',signup:'Create Account',forgot:'Reset Password',success:''};function openModal(type){const modal=document.getElementById('authModal');const content=document.getElementById('authContent');const titleEl=document.getElementById('authTitle');const formArea=document.getElementById('authFormArea');const toggleArea=document.getElementById('authToggle');const googleBtn=document.getElementById('authGoogle');if(type==='success'){titleEl.classList.add('hidden');googleBtn.classList.add('hidden');}else{titleEl.classList.remove('hidden');titleEl.innerText=titles[type]||'';googleBtn.classList.remove('hidden');}formArea.innerHTML=authForms[type]||'';toggleArea.innerHTML=toggles[type]||'';modal.classList.remove('hidden');modal.classList.add('flex');setTimeout(()=>{content.classList.remove('scale-95','opacity-0');content.classList.add('scale-100','opacity-100');},10);}function closeModal(){const modal=document.getElementById('authModal');const content=document.getElementById('authContent');content.classList.remove('scale-100','opacity-100');content.classList.add('scale-95','opacity-0');setTimeout(()=>{modal.classList.add('hidden');modal.classList.remove('flex');},200);}function handleAuth(e,type){e.preventDefault();if(type==='login'||type==='signup'){openModal('success');setTimeout(()=>{closeModal();setTimeout(()=>{document.getElementById('dashboardApp').classList.remove('hidden');document.getElementById('dashboardApp').classList.add('flex');},200);},1500);}else if(type==='reset'){alert('Reset link sent to your email.');openModal('login');}}function closeDashboard(){document.getElementById('dashboardApp').classList.add('hidden');document.getElementById('dashboardApp').classList.remove('flex');}if(!document.getElementById('custom-animations')){const style=document.createElement('style');style.id='custom-animations';style.innerHTML='@keyframes scale-x { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }';document.head.appendChild(style);}window.addEventListener('scroll',()=>{const btn=document.getElementById('backToTop');if(window.scrollY>500){btn.classList.remove('opacity-0','pointer-events-none');}else{btn.classList.add('opacity-0','pointer-events-none');}});
    
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
      

<nav className="glass-nav sticky top-0 z-50">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-10">
<a className="text-base font-semibold tracking-tight" href="#">
            Justitiam
          </a>
<div className="hidden lg:flex items-center gap-7 text-sm">
<a className="nav-link" href="#about">About</a>
<a className="nav-link flex items-center gap-1" href="#practice">
              Practice Areas
              <iconify-icon icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</a>
<a className="nav-link" href="#attorneys">Attorneys</a>
<a className="nav-link" href="#insights">Insights</a>
<a className="nav-link" href="#consultation" onclick="document.getElementById('dashboardApp').classList.remove('hidden'); document.getElementById('dashboardApp').classList.add('flex'); return false;">
              Consultation
            </a>
<div className="relative group">
<button aria-haspopup="true" className="nav-link flex items-center gap-1 py-4" type="button">
                Client Portal
                <iconify-icon className="transition-transform duration-300 group-hover:-rotate-180" icon="solar:alt-arrow-down-linear" width="14"></iconify-icon>
</button>
<div className="absolute top-[100%] right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:translate-y-1 group-hover:visible transition-all duration-300 z-[60]">
<div className="absolute -top-4 right-0 w-full h-6"></div>
<div className="w-[280px] bg-[#0a0c14]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2">
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item" href="#dashboard" onclick="document.getElementById('dashboardApp').classList.remove('hidden'); document.getElementById('dashboardApp').classList.add('flex'); return false;">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400 transition-transform duration-300 group-hover/item:scale-110">
<iconify-icon icon="solar:pie-chart-2-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">
                        Dashboard
                      </div>
<div className="text-xs text-slate-400">
                        View active matters
                      </div>
</div>
</a>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item" href="#messages" onclick="document.getElementById('dashboardApp').classList.remove('hidden'); document.getElementById('dashboardApp').classList.add('flex'); return false;">
<div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 transition-transform duration-300 group-hover/item:scale-110">
<iconify-icon icon="solar:inbox-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Messages</div>
<div className="text-xs text-slate-400">
                        Client communications
                      </div>
</div>
</a>
<div className="h-px bg-white/5 my-2"></div>
<a className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group/item" href="#signin" onclick="openModal('login'); return false;">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-slate-400 transition-transform duration-300 group-hover/item:scale-110">
<iconify-icon icon="solar:login-2-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Sign In</div>
<div className="text-xs text-slate-400">
                        Access your account
                      </div>
</div>
</a>
</div>
</div>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="relative group cursor-pointer flex items-center gap-1 text-sm text-slate-300 hover:text-white mr-4 transition-colors">
<iconify-icon icon="solar:global-linear" width="16"></iconify-icon>
<span>EN / ID</span>
</div>
<button className="hidden sm:inline-block nav-link text-sm transition-colors" onclick="openModal('login')">
            Sign in
          </button>
<button className="btn-primary text-sm font-medium rounded-xl pt-2 pr-4 pb-2 pl-4" onclick="openModal('signup')">
            Sign up
          </button>
</div>
</div>
</nav>

<section className="relative overflow-hidden">
<div className="absolute inset-0 hero-glow"></div>
<div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-400/20 blur-3xl mix-blend-screen floating"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gradient-to-bl from-sky-400/20 to-indigo-600/20 blur-3xl mix-blend-screen floating" style={{animationDelay: '-3s'}}></div>
<div className="absolute inset-0 star-bg opacity-30"></div>
<div className="text-center max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-32 pl-6 relative">
<div className="inline-flex items-center gap-2 badge-pill rounded-full px-3 py-1 text-xs mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
          Now accepting new clients for 2025
          <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="gradient-text md:text-7xl leading-[1.05] text-5xl font-medium tracking-tight max-w-4xl mr-auto ml-auto">
          Distinguished counsel
          <br/>
          for matters that matter
        </h1>
<p className="mt-6 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Trusted legal advisors handling corporate, litigation, compliance, and
          intellectual property matters — all under one elegant practice.
        </p>
<div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
<a className="btn-primary text-sm font-medium px-5 py-3 rounded-xl" href="#">
            Book consultation
          </a>
<a className="btn-secondary flex items-center justify-center gap-2 text-sm font-medium rounded-xl pt-3 pr-5 pb-3 pl-5" href="#">
<svg height="16" style={{color: 'rgb(248, 249, 252)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="10"></circle>
<path d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059z"></path>
</g>
</svg>
            Explore practice areas
          </a>
</div>

<div className="mt-20 mockup-card rounded-2xl p-2 max-w-5xl mx-auto">
<div className="rounded-xl overflow-hidden bg-[#0a0c14] border border-white/5">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
<span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
<span className="w-2.5 h-2.5 rounded-full bg-white/10"></span>
</div>
<div className="grid grid-cols-12 gap-0">
<div className="col-span-3 hidden md:block border-r border-white/5 p-4 space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-300 px-2 py-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
<iconify-icon icon="solar:case-linear" width="14"></iconify-icon>
                  Cases
                </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5">
<iconify-icon icon="solar:users-group-rounded-linear" width="14"></iconify-icon>
                  Clients
                </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5">
<iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon>
                  Documents
                </div>
<div className="flex items-center gap-2 text-xs text-slate-400 px-2 py-1.5">
<iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
                  Schedule
                </div>
</div>
<div className="col-span-12 md:col-span-9 p-6 text-left">
<div className="text-xs text-slate-500 mb-3">Active cases</div>
<div className="space-y-2">
<div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-xs">
<iconify-icon icon="solar:scale-linear" style={{color: '#818cf8'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium">
                        Corporate merger — TechCorp acquisition
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        In review · Due in 5 days
                      </div>
</div>
</div>
<div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-xs">
<iconify-icon icon="solar:copyright-linear" style={{color: '#c084fc'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium">
                        Trademark filing — Brand Co.
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        Filed · Awaiting USPTO response
                      </div>
</div>
</div>
<div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-xs">
<iconify-icon icon="solar:gavel-linear" style={{color: '#0ea5e9'}} width="16"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium">
                        Litigation — contract dispute
                      </div>
<div className="text-xs text-slate-500 mt-1">
                        Hearing scheduled · Mar 14
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-16">
<p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8">
        Trusted by 1,800+ companies, founders, and individuals
      </p>
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
<span className="text-lg font-semibold tracking-tight">TechCorp</span>
<span className="text-lg font-semibold tracking-tight">NovaBank</span>
<span className="text-lg font-semibold tracking-tight">Helix Bio</span>
<span className="text-lg font-semibold tracking-tight">Northwind</span>
<span className="text-lg font-semibold tracking-tight">Atlas Group</span>
<span className="text-lg font-semibold tracking-tight">Meridian</span>
<span className="text-lg font-semibold tracking-tight">Brightline</span>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="absolute inset-0 feedback-glow"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 badge-pill rounded-full px-3 py-1 text-xs mb-6" style={{background: 'rgba(192, 132, 252, 0.1)', borderColor: 'rgba(192,132,252,0.25)', color: '#d8b4fe'}}>
<iconify-icon icon="solar:scale-linear" width="12"></iconify-icon>
              Practice Areas
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight gradient-text leading-tight">
              Comprehensive legal expertise
            </h2>
<p className="mt-5 text-base text-slate-400 leading-relaxed max-w-lg">
              From corporate transactions to high-stakes litigation, our
              attorneys deliver focused, strategic counsel across every major
              practice area.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="feature-icon-wrap purple w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:buildings-2-linear" style={{color: '#c084fc'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">Corporate &amp; M&amp;A</h4>
<p className="text-sm text-slate-400 mt-0.5">
                    Mergers, acquisitions, financing, and corporate governance.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="feature-icon-wrap purple w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:gavel-linear" style={{color: '#c084fc'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">Litigation &amp; disputes</h4>
<p className="text-sm text-slate-400 mt-0.5">
                    Trial-tested advocates resolving complex commercial
                    disputes.
                  </p>
</div>
</div>
</div>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="flex items-center justify-between mb-5">
<div className="text-xs text-slate-400">Practice areas</div>
<div className="flex items-center gap-1.5 text-xs text-slate-500">
<iconify-icon icon="solar:filter-linear" width="14"></iconify-icon>
                All
              </div>
</div>
<div className="space-y-3">
<div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<div className="text-center px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
<iconify-icon icon="solar:case-linear" style={{color: '#c084fc'}} width="14"></iconify-icon>
<div className="text-xs font-medium mt-0.5">M&amp;A</div>
</div>
<div className="flex-1">
<div className="text-sm font-medium">
                    Corporate &amp; Commercial Law
                  </div>
<div className="text-xs text-slate-500 mt-1">
                    248 active matters · 32 attorneys
                  </div>
</div>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<div className="text-center px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
<iconify-icon icon="solar:copyright-linear" style={{color: '#c084fc'}} width="14"></iconify-icon>
<div className="text-xs font-medium mt-0.5">IP</div>
</div>
<div className="flex-1">
<div className="text-sm font-medium">Intellectual Property</div>
<div className="text-xs text-slate-500 mt-1">
                    186 filings · 18 attorneys
                  </div>
</div>
</div>
<div className="bg-white/[0.03] border border-white/5 rounded-xl p-4 flex items-center gap-4">
<div className="text-center px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#c084fc'}} width="14"></iconify-icon>
<div className="text-xs font-medium mt-0.5">REG</div>
</div>
<div className="flex-1">
<div className="text-sm font-medium">
                    Compliance &amp; Regulatory
                  </div>
<div className="text-xs text-slate-500 mt-1">
                    142 advisories · 9 partners
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 overflow-hidden">
<div className="absolute inset-0 support-glow"></div>
<div className="relative max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="lg:order-2">
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs mb-6" style={{background: 'rgba(14, 165, 233, 0.1)', border: '1px solid rgba(14,165,233,0.25)', color: '#7dd3fc'}}>
<iconify-icon icon="solar:chat-round-linear" width="12"></iconify-icon>
              Client Portal
            </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight gradient-text leading-tight">
              Secure client portal &amp; case updates
            </h2>
<p className="mt-5 text-base text-slate-400 leading-relaxed max-w-lg">
              Communicate with your legal team, review documents, track
              milestones, and access invoices — all from a secure, encrypted
              client portal.
            </p>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-3">
<div className="feature-icon-wrap sky w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:lock-keyhole-linear" style={{color: '#0ea5e9'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">End-to-end encryption</h4>
<p className="text-sm text-slate-400 mt-0.5">
                    Attorney-client privilege protected with bank-grade
                    security.
                  </p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="feature-icon-wrap sky w-8 h-8 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon icon="solar:bell-linear" style={{color: '#0ea5e9'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">Real-time case updates</h4>
<p className="text-sm text-slate-400 mt-0.5">
                    Get instant notifications when filings, hearings, or
                    documents are updated.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:order-1 feature-card rounded-2xl p-6">
<div className="flex items-center gap-2 mb-5 pb-4 border-b border-white/5">
<iconify-icon icon="solar:inbox-linear" style={{color: '#0ea5e9'}} width="16"></iconify-icon>
<span className="text-sm font-medium">Client messages</span>
<span className="ml-auto text-xs text-slate-500">12 unread</span>
</div>
<div className="space-y-2">
<div className="p-3 rounded-xl bg-sky-500/5 border border-sky-500/20 flex items-start gap-3">
<img alt="Michelle" className="w-8 h-8 rounded-full" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fmichelle.png&amp;w=64&amp;q=75"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Michelle Ratcliffe</span>
<span className="text-xs text-slate-500">2m</span>
</div>
<div className="text-xs text-slate-400 mt-0.5 truncate">
                    Re: Acquisition draft — please review section 4.2…
                  </div>
</div>
</div>
<div className="p-3 rounded-xl hover:bg-white/[0.02] flex items-start gap-3">
<img alt="Thibault" className="w-8 h-8 rounded-full" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fthibault.png&amp;w=64&amp;q=75"/>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Thibault Paulet</span>
<span className="text-xs text-slate-500">15m</span>
</div>
<div className="text-xs text-slate-400 mt-0.5 truncate">
                    Question on the partnership agreement clauses…
                  </div>
</div>
</div>
<div className="p-3 rounded-xl hover:bg-white/[0.02] flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-xs font-medium">
                  JD
                </div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between">
<span className="text-sm font-medium">Jordan Davis</span>
<span className="text-xs text-slate-500">1h</span>
</div>
<div className="text-xs text-slate-400 mt-0.5 truncate">
                    Thank you for the swift response on the filing.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight gradient-text leading-tight">
          Built on principles of trust &amp; precision
        </h2>
<p className="mt-5 text-base text-slate-400">
          A modern law firm experience, designed around the needs of clients who
          expect clarity, speed, and uncompromising quality.
        </p>
</div>
<div className="grid md:grid-cols-3 gap-5">
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:bill-list-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Transparent billing</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Clear fee structures, real-time billing dashboards, and detailed
            invoices — no surprises.
          </p>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:book-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Knowledge library</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Curated legal guides, contract templates, and insights authored by
            our partners.
          </p>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:shield-check-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Confidentiality first</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            ISO 27001 infrastructure, SSO, audit trails, and strict access
            controls protect every matter.
          </p>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:global-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Cross-border expertise</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Coordinated counsel across jurisdictions through our trusted network
            of 100+ partner firms.
          </p>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:chart-square-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Matter analytics</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Track case progress, budgets, and outcomes through structured
            reporting dashboards.
          </p>
</div>
<div className="feature-card rounded-2xl p-6">
<div className="feature-icon-wrap w-10 h-10 rounded-xl flex items-center justify-center mb-5">
<iconify-icon icon="solar:translation-linear" style={{color: '#818cf8'}} width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium">Multilingual counsel</h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Attorneys fluent in 12+ languages, supporting global clients with
            native-language service.
          </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="feature-card rounded-3xl p-10 md:p-16 text-center max-w-4xl mx-auto">
<iconify-icon className="mx-auto mb-6" icon="solar:quote-up-linear" style={{color: '#7064f2'}} width="32"></iconify-icon>
<p className="text-2xl md:text-3xl font-medium tracking-tight leading-relaxed gradient-text">
          "Justitiam transformed how we approach legal strategy. They help us
          navigate complex matters faster, and our team finally has counsel we
          can rely on."
        </p>
<div className="mt-8 flex items-center justify-center gap-3">
<img alt="Michelle Ratcliffe" className="w-12 h-12 rounded-full" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fmichelle.png&amp;w=128&amp;q=75"/>
<div className="text-left">
<div className="text-sm font-medium">Michelle Ratcliffe</div>
<div className="text-xs text-slate-400">General Counsel, Acme Co.</div>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-24" id="attorneys">
<div className="text-center mb-16 max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 badge-pill rounded-full px-3 py-1 text-xs mb-6">
<iconify-icon icon="solar:user-id-linear" width="12"></iconify-icon>
          Our Attorneys
        </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight gradient-text leading-tight">
          Meet our distinguished counsel
        </h2>
<p className="mt-5 text-base text-slate-400">
          A team of seasoned attorneys committed to integrity, justice, and
          confidentiality.
        </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="feature-card rounded-2xl p-6 text-center">
<img alt="Michelle Ratcliffe" className="w-20 h-20 rounded-full mx-auto mb-4" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fmichelle.png&amp;w=128&amp;q=75"/>
<h3 className="text-base font-medium">Michelle Ratcliffe</h3>
<p className="text-xs text-slate-400 mt-1">
            Senior Partner · Corporate &amp; M&amp;A
          </p>
<div className="mt-3 flex justify-center gap-3 text-xs text-slate-500">
<span>18 yrs</span>
<span>·</span>
<span>JD, Harvard</span>
</div>
</div>
<div className="feature-card rounded-2xl p-6 text-center">
<img alt="Thibault Paulet" className="w-20 h-20 rounded-full mx-auto mb-4" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fthibault.png&amp;w=128&amp;q=75"/>
<h3 className="text-base font-medium">Thibault Paulet</h3>
<p className="text-xs text-slate-400 mt-1">Partner · Litigation</p>
<div className="mt-3 flex justify-center gap-3 text-xs text-slate-500">
<span>14 yrs</span>
<span>·</span>
<span>JD, Yale</span>
</div>
</div>
<div className="feature-card rounded-2xl p-6 text-center">
<div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-lg font-medium">
            AS
          </div>
<h3 className="text-base font-medium">Anika Sharma</h3>
<p className="text-xs text-slate-400 mt-1">
            Counsel · Intellectual Property
          </p>
<div className="mt-3 flex justify-center gap-3 text-xs text-slate-500">
<span>11 yrs</span>
<span>·</span>
<span>JD, Stanford</span>
</div>
</div>
<div className="feature-card rounded-2xl p-6 text-center">
<div className="w-20 h-20 rounded-full mx-auto mb-4 bg-gradient-to-br from-sky-500 to-indigo-500 flex items-center justify-center text-lg font-medium">
            DM
          </div>
<h3 className="text-base font-medium">Daniel Mwangi</h3>
<p className="text-xs text-slate-400 mt-1">
            Partner · Compliance &amp; Regulatory
          </p>
<div className="mt-3 flex justify-center gap-3 text-xs text-slate-500">
<span>16 yrs</span>
<span>·</span>
<span>LLM, Oxford</span>
</div>
</div>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-24" id="insights">
<div className="flex items-end justify-between mb-12 flex-wrap gap-4">
<div>
<div className="inline-flex items-center gap-2 badge-pill rounded-full px-3 py-1 text-xs mb-4">
<iconify-icon icon="solar:document-text-linear" width="12"></iconify-icon>
            Legal Insights
          </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight gradient-text leading-tight">
            Latest articles &amp; guides
          </h2>
</div>
<a className="btn-secondary text-sm font-medium px-4 py-2 rounded-xl inline-flex items-center gap-2" href="#">
          View all
          <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-5">
<article className="feature-card rounded-2xl p-6">
<div className="text-xs text-purple-300 mb-3">Corporate Law</div>
<h3 className="text-lg font-medium leading-snug">
            Navigating cross-border M&amp;A in 2025
          </h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            A practical framework for due diligence and regulatory approvals
            across jurisdictions.
          </p>
<div className="mt-5 text-xs text-slate-500">
            8 min read · Mar 4, 2025
          </div>
</article>
<article className="feature-card rounded-2xl p-6">
<div className="text-xs text-sky-300 mb-3">Compliance</div>
<h3 className="text-lg font-medium leading-snug">
            Data protection: what GCs need to know
          </h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Updated guidance on GDPR, CCPA, and emerging AI governance
            frameworks.
          </p>
<div className="mt-5 text-xs text-slate-500">
            6 min read · Feb 28, 2025
          </div>
</article>
<article className="feature-card rounded-2xl p-6">
<div className="text-xs text-indigo-300 mb-3">Intellectual Property</div>
<h3 className="text-lg font-medium leading-snug">
            Trademark strategy for early-stage startups
          </h3>
<p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Protecting your brand assets without slowing down product velocity.
          </p>
<div className="mt-5 text-xs text-slate-500">
            5 min read · Feb 22, 2025
          </div>
</article>
</div>
</section>
<section className="max-w-7xl mx-auto px-6 py-24" id="consultation">
<div className="feature-card rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 badge-pill rounded-full px-3 py-1 text-xs mb-6">
<iconify-icon icon="solar:calendar-linear" width="12"></iconify-icon>
            Online Consultation
          </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight gradient-text leading-tight">
            Request a confidential consultation
          </h2>
<p className="mt-4 text-sm text-slate-400 leading-relaxed">
            Tell us about your matter. A senior attorney will reach out within
            one business day.
          </p>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#818cf8'}} width="16"></iconify-icon>
              Free 30-minute initial review
            </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#818cf8'}} width="16"></iconify-icon>
              Encrypted, attorney-client privileged
            </li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#818cf8'}} width="16"></iconify-icon>
              Multilingual counsel available
            </li>
</ul>
</div>
<form className="space-y-3">
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500" placeholder="Full name" type="text"/>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500" placeholder="Phone" type="tel"/>
</div>
<input className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500" placeholder="Email address" type="email"/>
<select className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300">
<option>Corporate &amp; M&amp;A</option>
<option>Litigation</option>
<option>Intellectual Property</option>
<option>Family Law</option>
<option>Property &amp; Land Law</option>
<option>Arbitration &amp; Mediation</option>
</select>
<textarea className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-slate-500" placeholder="Briefly describe your matter" rows="4"></textarea>
<button className="btn-primary w-full text-sm font-medium px-5 py-3 rounded-xl" type="button">
            Submit consultation request
          </button>
<p className="text-xs text-slate-500 text-center">
            By submitting, you agree to our privacy policy. Your information is
            encrypted.
          </p>
</form>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-6 py-24">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-96 hero-glow opacity-70"></div>
<div className="relative text-center max-w-2xl mx-auto">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight gradient-text leading-tight">
          Speak with a partner today
        </h2>
<p className="mt-5 text-base text-slate-400">
          Schedule a confidential consultation with one of our senior attorneys.
        </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
<a className="btn-primary text-sm font-medium px-5 py-3 rounded-xl" href="#">
            Book consultation
          </a>
<a className="btn-secondary text-sm font-medium px-5 py-3 rounded-xl flex items-center justify-center gap-2" href="#">
            Contact our team
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<p className="mt-4 text-xs text-slate-500">
          Confidential · Free 30-minute initial consultation
        </p>
</div>
</section>

<footer className="border-t border-white/5 mt-12">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10">
<div className="col-span-2">
<div className="text-base font-semibold tracking-tight">Justitiam</div>
<p className="mt-3 text-sm text-slate-400 max-w-xs leading-relaxed">
              Modern legal counsel powered by experience and precision.
            </p>
<div className="mt-5 flex items-center gap-3">
<a className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition" href="#">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/5 transition" href="#">
<iconify-icon icon="solar:link-linear" width="14"></iconify-icon>
</a>
</div>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">
              Practice
            </h5>
<ul className="space-y-2.5">
<li>
<a className="footer-link" href="#">Corporate &amp; M&amp;A</a>
</li>
<li><a className="footer-link" href="#">Litigation</a></li>
<li><a className="footer-link" href="#">Intellectual Property</a></li>
<li><a className="footer-link" href="#">Family Law</a></li>
<li>
<a className="footer-link" href="#">Property &amp; Land Law</a>
</li>
<li>
<a className="footer-link" href="#">Arbitration &amp; Mediation</a>
</li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">
              Company
            </h5>
<ul className="space-y-2.5">
<li><a className="footer-link" href="#">About</a></li>
<li><a className="footer-link" href="#attorneys">Attorneys</a></li>
<li><a className="footer-link" href="#">Cases</a></li>
<li><a className="footer-link" href="#">Careers</a></li>
<li>
<a className="footer-link" href="#consultation">Consultation</a>
</li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4">
              Resources
            </h5>
<ul className="space-y-2.5">
<li><a className="footer-link" href="#insights">Insights</a></li>
<li><a className="footer-link" href="#">Guides &amp; FAQs</a></li>
<li>
<a className="footer-link" href="#" onclick="document.getElementById('dashboardApp').classList.remove('hidden'); document.getElementById('dashboardApp').classList.add('flex'); return false;">
                  Client Portal
                </a>
</li>
<li>
<a className="footer-link" href="#signin" onclick="openModal('login'); return false;">
                  Sign in
                </a>
</li>
<li>
<a className="footer-link" href="#signup" onclick="openModal('signup'); return false;">
                  Sign up
                </a>
</li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4">
<p className="text-xs text-slate-500">
            © 2025 Justitiam Law Firm. All rights reserved.
          </p>
<div className="flex items-center gap-6">
<a className="footer-link text-xs" href="#">Privacy</a>
<a className="footer-link text-xs" href="#">Terms</a>
<a className="footer-link text-xs" href="#">Cookies</a>
</div>
</div>
</div>
</footer>

<button className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.3)] opacity-0 pointer-events-none transition-all duration-300 z-40 backdrop-blur-sm" id="backToTop" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<iconify-icon icon="solar:alt-arrow-up-linear" width="24"></iconify-icon>
</button>
<div className="fixed inset-0 z-[100] hidden items-center justify-center p-4" id="authModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity" onclick="closeModal()"></div>
<div className="relative w-full max-w-md feature-card rounded-3xl p-8 shadow-2xl transform transition-all scale-95 opacity-0 border border-white/10" id="authContent">
<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl font-medium tracking-tight gradient-text" id="authTitle">
            Sign In
          </h3>
<button className="text-slate-400 hover:text-white transition" onclick="closeModal()" type="button">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div id="authFormArea"></div>
<div className="mt-6 pt-6 border-t border-white/10 text-center" id="authGoogle">
<button className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 hover:bg-white/5 transition text-sm text-slate-300 font-medium" type="button">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
            Continue with Google
          </button>
</div>
<p className="mt-6 text-center text-sm text-slate-400" id="authToggle"></p>
</div>
</div>
<div className="fixed inset-0 z-[200] bg-[#050608] hidden flex-col md:flex-row overflow-hidden font-sans" id="dashboardApp">
<div className="w-full md:w-64 border-r border-white/5 bg-[#0a0c14] flex flex-col h-full shrink-0">
<div className="h-16 flex items-center px-6 border-b border-white/5 justify-between">
<span className="text-base font-semibold tracking-tight gradient-text">
            Justitiam Portal
          </span>
<button className="md:hidden text-slate-400" onclick="closeDashboard()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-1.5">
<div className="text-xs font-medium tracking-widest text-slate-500 mb-3 px-2 mt-2">
            DASHBOARD
          </div>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium transition-colors">
<iconify-icon icon="solar:pie-chart-2-linear" width="18"></iconify-icon>
            Overview
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-colors">
<iconify-icon icon="solar:case-linear" width="18"></iconify-icon>
            Active Matters
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
            Clients
            <span className="ml-auto text-[10px] bg-sky-500/10 border border-sky-500/20 text-sky-400 px-1.5 py-0.5 rounded font-medium">
              Admin
            </span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-colors">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
            Documents
          </button>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-colors">
<iconify-icon icon="solar:bill-list-linear" width="18"></iconify-icon>
            Financials
          </button>
<div className="text-xs font-medium tracking-widest text-slate-500 mb-3 px-2 mt-6">
            SETTINGS
          </div>
<button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 text-slate-400 hover:text-white text-sm transition-colors">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
            Preferences
          </button>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3 mb-4 px-2">
<img alt="User" className="w-9 h-9 rounded-full border border-white/10" src="https://www.featurebase.app/_next/image?url=%2Fimages%2Fredesign3%2Fpeople%2Fmichelle.png&amp;w=64&amp;q=75"/>
<div className="flex-1 min-w-0">
<div className="text-sm font-medium text-white truncate">
                M. Ratcliffe
              </div>
<div className="text-xs text-indigo-400 font-medium">
                System Admin
              </div>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 hover:text-white transition-colors text-sm text-slate-400" onclick="closeDashboard()">
<iconify-icon icon="solar:logout-2-linear" width="16"></iconify-icon>
            Sign Out
          </button>
</div>
</div>
<div className="flex-1 flex flex-col h-full overflow-hidden relative">
<div className="absolute inset-0 hero-glow opacity-20 pointer-events-none"></div>
<div className="h-16 flex items-center justify-between px-8 border-b border-white/5 bg-[#050608]/80 backdrop-blur-md relative z-10">
<div className="flex items-center gap-4">
<button className="md:hidden text-slate-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<h2 className="text-lg font-medium tracking-tight">
              Database Administration
            </h2>
</div>
<div className="flex items-center gap-4">
<button className="text-slate-400 hover:text-white relative">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>
<button className="btn-primary text-sm font-medium px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg shadow-white/5">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
              Add New Record
            </button>
</div>
</div>
<div className="flex-1 overflow-y-auto p-8 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
<div className="feature-card rounded-2xl p-5 border border-white/5">
<div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
<iconify-icon className="text-indigo-400" icon="solar:case-linear"></iconify-icon>
                  Active Matters
                </div>
<div className="text-3xl font-medium tracking-tight">1,248</div>
</div>
<div className="feature-card rounded-2xl p-5 border border-white/5">
<div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
<iconify-icon className="text-sky-400" icon="solar:users-group-rounded-linear"></iconify-icon>
                  Total Clients
                </div>
<div className="text-3xl font-medium tracking-tight">856</div>
</div>
<div className="feature-card rounded-2xl p-5 border border-white/5">
<div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
<iconify-icon className="text-purple-400" icon="solar:document-text-linear"></iconify-icon>
                  Pending Reviews
                </div>
<div className="text-3xl font-medium tracking-tight">42</div>
</div>
<div className="feature-card rounded-2xl p-5 border border-white/5">
<div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
<iconify-icon className="text-green-400" icon="solar:shield-check-linear"></iconify-icon>
                  Admin Access
                </div>
<div className="text-3xl font-medium tracking-tight">Granted</div>
</div>
</div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-lg font-medium tracking-tight">
                Active Database Records
              </h3>
<div className="flex items-center gap-2 bg-[#0a0c14] border border-white/5 rounded-lg px-3 py-1.5">
<iconify-icon className="text-slate-500" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none text-sm text-white placeholder:text-slate-500 focus:outline-none w-48" placeholder="Search records..." type="text"/>
</div>
</div>
<div className="bg-[#0a0c14] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
<table className="w-full text-left text-sm text-slate-300">
<thead className="text-xs font-medium text-slate-500 bg-white/[0.02] border-b border-white/5 uppercase tracking-wider">
<tr>
<th className="px-6 py-4">Matter Name</th>
<th className="px-6 py-4">Client Entity</th>
<th className="px-6 py-4">Type</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4 text-right">Admin Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">
                      Project Apollo - Acquisition
                    </td>
<td className="px-6 py-4 text-slate-400">TechCorp Inc.</td>
<td className="px-6 py-4 text-slate-400">M&amp;A</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-md text-xs font-medium">
                        In Progress
                      </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">
                      Global IP Portfolio Transfer
                    </td>
<td className="px-6 py-4 text-slate-400">Brand Co. Global</td>
<td className="px-6 py-4 text-slate-400">
                      Intellectual Property
                    </td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-400 rounded-md text-xs font-medium">
                        Under Review
                      </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</td>
</tr>
<tr className="hover:bg-white/[0.02] transition-colors">
<td className="px-6 py-4 font-medium text-white">
                      Regulatory Compliance Audit 2025
                    </td>
<td className="px-6 py-4 text-slate-400">NovaBank</td>
<td className="px-6 py-4 text-slate-400">Regulatory</td>
<td className="px-6 py-4">
<span className="px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-md text-xs font-medium">
                        Pending Docs
                      </span>
</td>
<td className="px-6 py-4 text-right space-x-2">
<button className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:pen-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 transition-colors inline-flex items-center justify-center">
<iconify-icon icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
</button>
</td>
</tr>
</tbody>
</table>
<div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 bg-white/[0.01]">
<span>Showing 1 to 3 of 1,248 entries</span>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5 disabled:opacity-50">
                    Previous
                  </button>
<button className="px-3 py-1.5 rounded-md border border-white/10 bg-white/10 text-white">
                    1
                  </button>
<button className="px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5">
                    2
                  </button>
<button className="px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5">
                    3
                  </button>
<button className="px-3 py-1.5 rounded-md border border-white/10 hover:bg-white/5">
                    Next
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
