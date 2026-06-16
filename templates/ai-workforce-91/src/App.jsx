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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
colors: {
bg: { 50: '#F8FAFC', 100: '#F5F7FB', 200: '#FFFFFF' },
dark: { main: '#062A2A', alt: '#003B36', slate: '#0F172A' },
accent: { primary: '#0077B6', secondary: '#00B4D8', tertiary: '#38BDF8' },
ai: { soft: '#8B5CF6', mid: '#A78BFA', light: '#E0E7FF' },
success: { main: '#8EEA6A', soft: '#A3E635' },
warm: { soft: '#FFD6C9', light: '#FFE4D6' },
text: { main: '#111827', muted: '#334155', soft: '#64748B' }
},
animation: {
'float-slow': 'float 6s ease-in-out infinite',
'float-delayed': 'float 6s ease-in-out 3s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Estimator Logic
        const inqSlider = document.getElementById('inquiries-slider');
        const timeSlider = document.getElementById('time-slider');
        const inqVal = document.getElementById('inquiries-val');
        const timeVal = document.getElementById('time-val');
        const outConvos = document.getElementById('out-convos');
        const outMins = document.getElementById('out-mins');
        const outPlan = document.getElementById('out-plan');

        function updateEstimator() {
            const inq = parseInt(inqSlider.value);
            const time = parseInt(timeSlider.value);
            
            inqVal.textContent = inq + (inq === 2000 ? '+' : '');
            timeVal.textContent = time + ' mins';
            
            outConvos.textContent = inq;
            const mins = inq * time;
            outMins.innerHTML = `${mins} <span class="text-sm font-normal text-text-soft">mins</span>`;

            if (mins <= 500) outPlan.textContent = "Olivia Starter";
            else if (mins <= 1500) outPlan.textContent = "Olivia Growth";
            else outPlan.textContent = "Olivia Pro";
        }

        inqSlider.addEventListener('input', updateEstimator);
        timeSlider.addEventListener('input', updateEstimator);

        // Scroll Storytelling Logic
        const scrollCards = document.querySelectorAll('.scroll-card');
        const counter = document.getElementById('scroll-counter');

        const observerOptions = { root: null, rootMargin: '-20% 0px -50% 0px', threshold: 0.5 };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Update visual state of cards
                    scrollCards.forEach(c => {
                        c.classList.remove('opacity-100', 'translate-y-0');
                        c.classList.add('opacity-50', 'translate-y-8');
                    });
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-50', 'translate-y-8');

                    // Find index for counter
                    const index = Array.from(scrollCards).indexOf(entry.target) + 1;
                    counter.textContent = index.toString().padStart(2, '0');
                }
            });
        }, observerOptions);

        scrollCards.forEach(card => observer.observe(card));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<span className="text-lg font-semibold tracking-tighter text-dark-main uppercase">
                        KWS Technology AI Workforce
                    </span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-normal text-text-muted hover:text-accent-primary transition-colors" href="#olivia">Olivia</a>
<a className="text-sm font-normal text-text-muted hover:text-accent-primary transition-colors" href="#features">Features</a>
<a className="text-sm font-normal text-text-muted hover:text-accent-primary transition-colors" href="#industries">Industries</a>
<a className="text-sm font-normal text-text-muted hover:text-accent-primary transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-normal text-text-muted hover:text-accent-primary transition-colors" href="#demo">Demo</a>
</nav>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-medium text-text-main hover:text-accent-primary transition-colors px-3 py-2" href="#">Book Demo</a>
<a className="text-sm font-medium bg-dark-main text-white px-5 py-2.5 rounded-full hover:bg-dark-alt transition-all shadow-lg shadow-dark-main/20 hover:shadow-xl hover:-translate-y-0.5" href="#">
                        Get Olivia
                    </a>
</div>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-4xl bg-ai-light/40 rounded-full blur-3xl -z-10"></div>
<div className="absolute top-1/3 left-1/4 w-[40vw] h-[40vw] max-w-2xl bg-accent-secondary/10 rounded-full blur-3xl -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-dark-slate mb-6">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-primary to-ai-soft inline-block">Olivia</span> — Your 24/7 AI Receptionist
            </h1>
<p className="mt-4 text-lg md:text-xl font-normal text-text-muted max-w-3xl mx-auto leading-relaxed">
                Never miss a lead, booking, or customer question again. Olivia works like a senior front desk employee from day one — handling calls, chat, email, WhatsApp, bookings, lead qualification, and customer support with instant replies.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto text-base font-medium bg-accent-primary text-white px-8 py-3.5 rounded-full hover:bg-accent-primary/90 transition-all shadow-xl shadow-accent-primary/20 hover:-translate-y-0.5">
                    Get Started
                </button>
<button className="w-full sm:w-auto text-base font-medium bg-white text-text-main border border-slate-200 px-8 py-3.5 rounded-full hover:bg-slate-50 transition-all shadow-sm">
                    Book Demo
                </button>
</div>
<div className="mt-6">
<a className="inline-flex items-center gap-2 text-sm font-medium text-text-soft hover:text-accent-primary transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Watch Olivia Video
                </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">

<div className="relative rounded-3xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-2xl p-4 lg:p-8 overflow-hidden z-10 aspect-video flex items-center justify-center bg-gradient-to-br from-white/50 to-bg-100/50">
<div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">

<div className="bg-dark-slate p-4 flex items-center justify-between text-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-ai-soft to-accent-primary flex items-center justify-center border-2 border-white/20">
<span className="text-sm font-semibold">O</span>
</div>
<div className="text-left">
<p className="text-sm font-medium">Olivia</p>
<p className="text-xs font-light text-white/70">AI Front Desk</p>
</div>
</div>
<div className="flex gap-2">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
<iconify-icon className="text-base" icon="solar:microphone-linear"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 bg-bg-50 flex-1 flex flex-col gap-4 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center opacity-10">
<div className="w-32 h-32 rounded-full bg-accent-primary blur-2xl animate-pulse"></div>
</div>

<div className="flex gap-3 text-left">
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-text-main max-w-[80%] border border-slate-100 relative z-10">
                                    Hi there! I'm Olivia. How can I help you today?
                                </div>
</div>
<div className="flex justify-end gap-3 text-right">
<div className="bg-accent-primary text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[80%] relative z-10">
                                    I'd like to book an appointment for tomorrow.
                                </div>
</div>
<div className="flex gap-3 text-left">
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-text-main max-w-[80%] border border-slate-100 relative z-10">
                                    Checking availability... I have slots at 10 AM and 2 PM. Which works best for you?
                                </div>
</div>
</div>
</div>
</div>

<div className="absolute -left-8 lg:-left-16 top-1/4 bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-slow z-20">
<div className="w-10 h-10 rounded-full bg-success-soft/20 flex items-center justify-center text-success-main">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-text-main">Appointment Booked</p>
</div>
</div>
<div className="absolute -right-4 lg:-right-12 top-1/3 bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-delayed z-20">
<div className="w-10 h-10 rounded-full bg-ai-light flex items-center justify-center text-ai-soft">
<iconify-icon className="text-xl" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-text-main">95+ Languages</p>
</div>
</div>
<div className="absolute left-10 -bottom-6 lg:-bottom-10 bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-delayed z-20">
<div className="w-10 h-10 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-text-main">100+ Active Convos</p>
</div>
</div>
<div className="absolute right-10 -bottom-4 lg:-bottom-8 bg-white/80 backdrop-blur-lg border border-white/50 shadow-xl rounded-2xl p-3 flex items-center gap-3 animate-float-slow z-20">
<div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366]">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-left">
<p className="text-xs font-medium text-text-main">WhatsApp Reply Sent</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="olivia">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate">Meet Olivia</h2>
<p className="mt-4 text-base font-normal text-text-muted">
                    The AI receptionist built to answer, qualify, book, and support customers 24/7.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-ai-soft/20 to-accent-secondary/20 rounded-3xl blur-2xl transform group-hover:scale-105 transition-transform duration-500"></div>
<div className="relative bg-bg-50 border border-slate-200 p-2 rounded-3xl shadow-lg">
<div className="aspect-[4/5] rounded-2xl bg-gradient-to-b from-slate-100 to-slate-200 overflow-hidden relative flex flex-col items-center justify-end pb-8">

<div className="w-48 h-48 rounded-full bg-gradient-to-br from-white to-slate-100 shadow-inner flex items-center justify-center border-4 border-white mb-8 relative">
<div className="w-32 h-32 rounded-full bg-gradient-to-tr from-ai-soft to-accent-secondary blur-[2px] opacity-80 animate-pulse"></div>
<div className="absolute inset-0 flex items-center justify-center text-dark-slate/20">
<iconify-icon className="text-6xl" icon="solar:user-speak-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-white w-[80%] text-center">
<p className="text-lg font-semibold text-dark-slate">Olivia</p>
<p className="text-xs font-normal text-text-soft mt-1">AI Receptionist by KWS Technology AI Workforce</p>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-bg-50 border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex flex-shrink-0 items-center justify-center text-accent-primary">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark-slate tracking-tight">24/7 Customer Handling</h3>
<p className="mt-2 text-sm font-normal text-text-muted leading-relaxed">
                                    Works day and night without breaks, replying instantly even outside business hours, weekends, and holidays.
                                </p>
<div className="mt-4 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
<div className="h-full bg-accent-primary w-full rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="bg-bg-50 border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-ai-soft/10 flex flex-shrink-0 items-center justify-center text-ai-soft">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark-slate tracking-tight">100+ Simultaneous Conversations</h3>
<p className="mt-2 text-sm font-normal text-text-muted leading-relaxed">
                                    Handles many customers at the same time with no waiting line, even during busy hours or campaigns.
                                </p>
<div className="mt-4 h-1.5 w-full bg-slate-200 rounded-full overflow-hidden flex gap-1">
<div className="h-full bg-ai-soft w-1/4 rounded-full animate-pulse"></div>
<div className="h-full bg-ai-soft w-1/4 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="h-full bg-ai-soft w-1/4 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
<div className="h-full bg-ai-soft w-1/4 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
</div>
</div>
</div>
</div>

<div className="bg-bg-50 border border-slate-200 p-6 rounded-2xl hover:shadow-md transition-shadow">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-success-main/10 flex flex-shrink-0 items-center justify-center text-success-main">
<iconify-icon className="text-2xl" icon="solar:earth-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-dark-slate tracking-tight">95+ Languages</h3>
<p className="mt-2 text-sm font-normal text-text-muted leading-relaxed">
                                    Communicates with international and multicultural customers in their preferred language.
                                </p>
<div className="mt-4 flex gap-2 overflow-hidden">
<span className="text-xs font-medium text-text-soft bg-slate-100 px-2 py-1 rounded-md">EN</span>
<span className="text-xs font-medium text-text-soft bg-slate-100 px-2 py-1 rounded-md">ES</span>
<span className="text-xs font-medium text-text-soft bg-slate-100 px-2 py-1 rounded-md">FR</span>
<span className="text-xs font-medium text-text-soft bg-slate-100 px-2 py-1 rounded-md">DE</span>
<span className="text-xs font-medium text-text-soft bg-slate-100 px-2 py-1 rounded-md">...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-100 overflow-hidden relative" id="industries">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate">Olivia in Action</h2>
<p className="mt-4 text-base font-normal text-text-muted mb-8">
                    See how Olivia adapts across different industries and handles real front desk workflows.
                </p>
<button className="text-sm font-medium bg-white text-text-main border border-slate-200 px-6 py-2.5 rounded-full hover:bg-slate-50 transition-all shadow-sm">
                    Create Your Olivia
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary">
<iconify-icon className="text-lg" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Clinics</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Books visits, answers FAQs, captures patient details.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:translate-y-6">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-ai-soft/10 flex items-center justify-center text-ai-soft">
<iconify-icon className="text-lg" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Med Spas</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Explains treatments, handles aftercare questions, books consultations.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-warm-soft/30 flex items-center justify-center text-orange-500">
<iconify-icon className="text-lg" icon="solar:scissors-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Salons</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Schedules services, confirms availability, sends reminders.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:-translate-y-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-success-main/10 flex items-center justify-center text-success-main">
<iconify-icon className="text-lg" icon="solar:dumbbell-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Gyms</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Handles trial leads, membership questions, and class bookings.</p>
</div>

<div className="bg-white p-5 rounded-2xl border-2 border-accent-tertiary shadow-xl shadow-accent-tertiary/10 scale-105 relative z-10 lg:translate-y-2">
<div className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-tertiary opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-accent-tertiary"></span>
</div>
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:hospital-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Hospitals</span>
</div>
<iconify-icon className="text-lg text-accent-primary" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-main">Supports patient inquiries and first-line appointment flow.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:-translate-y-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-dark-main/10 flex items-center justify-center text-dark-main">
<iconify-icon className="text-lg" icon="solar:buildings-2-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Property Management</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Logs resident requests, captures issues, and routes inquiries.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:translate-y-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-secondary/10 flex items-center justify-center text-accent-secondary">
<iconify-icon className="text-lg" icon="solar:briefcase-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Agencies</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Qualifies leads, captures project details, and routes prospects.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:translate-y-10">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-ai-light flex items-center justify-center text-ai-mid">
<iconify-icon className="text-lg" icon="solar:leaf-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Wellness Centers</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Answers package questions and manages appointment requests.</p>
</div>

<div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:-translate-y-1 transition-transform group lg:translate-y-4">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-text-main">
<iconify-icon className="text-lg" icon="solar:diploma-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-dark-slate">Education / Consultation</span>
</div>
<iconify-icon className="text-lg text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</div>
<p className="text-xs font-normal text-text-muted">Books calls, answers program questions, supports customer intake.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-center text-dark-slate mb-16">
                Built for your workflow
            </h2>
<div className="space-y-8">

<div className="bg-dark-main rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-accent-primary/20 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
<div className="p-8 lg:p-16 lg:w-1/2 flex flex-col justify-center z-10">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Built for modern service teams</h3>
<p className="text-base text-white/70 font-normal leading-relaxed mb-8">
                            Olivia handles customer conversations across voice, website chat, WhatsApp, email, and social inbox from one unified front desk system. She responds instantly, captures customer intent, and routes the next step.
                        </p>
<div className="flex flex-wrap gap-2 mb-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Voice calls</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">WhatsApp replies</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Website chat</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Email support</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Social inbox</span>
</div>
<div>
<button className="text-sm font-medium bg-white text-dark-main px-6 py-3 rounded-full hover:bg-slate-100 transition-colors shadow-lg shadow-white/10">
                                Explore Communication Flow
                            </button>
</div>
</div>

<div className="lg:w-1/2 p-8 lg:p-12 relative flex items-center justify-center bg-dark-alt/50 border-l border-white/5">
<div className="w-full max-w-sm relative">

<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 shadow-2xl relative z-10 mb-4 transform -rotate-2 hover:rotate-0 transition-transform">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white">
<iconify-icon className="text-base" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">WhatsApp</span>
<span className="ml-auto text-xs text-white/50">Just now</span>
</div>
<p className="text-sm text-white/80 font-light bg-white/5 p-3 rounded-xl">Do you have availability today at 4 PM?</p>
<div className="mt-2 flex justify-end">
<p className="text-sm text-dark-main font-medium bg-success-main p-3 rounded-xl rounded-tr-none">Yes, I can slot you in at 4:00 PM. Shall I confirm?</p>
</div>
</div>
<div className="absolute -right-8 top-1/4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl z-20 flex items-center gap-2">
<iconify-icon className="text-success-soft text-lg" icon="solar:user-check-rounded-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Customer details captured</span>
</div>
<div className="absolute -left-6 bottom-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl z-20 flex items-center gap-2">
<iconify-icon className="text-accent-secondary text-lg animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Incoming Call...</span>
</div>
</div>
</div>
</div>

<div className="bg-[#003B36] rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row-reverse relative">

<div className="absolute bottom-0 left-0 w-96 h-96 bg-success-soft/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
<div className="p-8 lg:p-16 lg:w-1/2 flex flex-col justify-center z-10">
<h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Automatic booking, follow-up, and CRM updates</h3>
<p className="text-base text-white/70 font-normal leading-relaxed mb-8">
                            Olivia books appointments, confirms slots, reschedules visits, sends reminders, follows up with missed leads, and updates CRM or internal systems automatically.
                        </p>
<div className="flex flex-wrap gap-2 mb-10">
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Appointment booking</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Lead qualification</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">CRM updates</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Reminders</span>
<span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-medium text-white/90">Follow-ups</span>
</div>
<div>
<button className="text-sm font-medium bg-success-soft text-dark-main px-6 py-3 rounded-full hover:bg-success-main transition-colors shadow-lg shadow-success-soft/20">
                                Explore Automation
                            </button>
</div>
</div>

<div className="lg:w-1/2 p-8 lg:p-12 relative flex items-center justify-center bg-dark-main/40 border-r border-white/5">
<div className="w-full max-w-sm relative">

<div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 shadow-2xl relative z-10">
<div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium">Calendar</span>
</div>
<span className="text-xs bg-success-soft/20 text-success-soft px-2 py-1 rounded-md border border-success-soft/30">Synced</span>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Consultation</p>
<p className="text-xs font-light text-white/50">Sarah Jenkins</p>
</div>
<span className="text-xs font-medium text-white/90 bg-white/10 px-2 py-1 rounded">10:00 AM</span>
</div>
<div className="bg-success-soft/10 p-3 rounded-xl border border-success-soft/30 flex items-center justify-between">
<div>
<p className="text-sm font-medium text-white">Treatment</p>
<p className="text-xs font-light text-success-soft">New Booking (Olivia)</p>
</div>
<span className="text-xs font-medium text-success-soft bg-success-soft/20 px-2 py-1 rounded">04:00 PM</span>
</div>
</div>
</div>
<div className="absolute -left-10 top-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl z-20 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
<iconify-icon className="text-base" icon="solar:database-linear"></iconify-icon>
</div>
<div>
<p className="text-xs font-medium text-white">CRM Updated</p>
<p className="text-[10px] text-white/50">Lead qualified</p>
</div>
</div>
<div className="absolute -right-4 bottom-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 shadow-xl z-20 flex items-center gap-2">
<iconify-icon className="text-warm-soft text-lg" icon="solar:bell-linear"></iconify-icon>
<span className="text-xs font-medium text-white">Reminder sent</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-50 relative" id="features">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 relative items-start">

<div className="lg:w-1/3 lg:sticky lg:top-32 self-start z-10 bg-bg-50/90 backdrop-blur pb-6 lg:pb-0">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate mb-4">
                        Everything Olivia Can Do
                    </h2>
<p className="text-base font-normal text-text-muted mb-8 leading-relaxed">
                        Olivia combines communication, automation, business knowledge, and workflow intelligence into one AI employee. From answering calls to supporting customers 24/7.
                    </p>
<div className="flex items-center gap-4">
<span className="text-xl font-semibold text-dark-main tabular-nums transition-all" id="scroll-counter">01</span>
<div className="h-px bg-slate-300 w-12"></div>
<span className="text-sm font-medium text-text-soft">05</span>
</div>
</div>

<div className="lg:w-2/3 space-y-24" id="scroll-cards-container">

<div className="scroll-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 opacity-100 translate-y-0">
<div className="bg-ai-light/30 w-12 h-12 rounded-2xl flex items-center justify-center text-ai-soft mb-6">
<iconify-icon className="text-2xl" icon="solar:24-hours-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-dark-slate mb-4">Always-On Customer Communication</h3>
<p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Olivia works 24/7 across calls, website chat, WhatsApp, email, and social inbox — answering instantly even after business hours, during weekends, holidays, campaigns, and peak seasons.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> 24/7 customer handling
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Handles 100+ customers simultaneously
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Voice, chat, email, WA &amp; social inbox
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Calm, polite, and consistent under pressure
                            </li>
</ul>

<div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center justify-center gap-4 relative overflow-hidden h-32">
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-dark-main absolute left-4 animate-float-slow">
<iconify-icon className="text-xl" icon="solar:phone-linear"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-ai-soft to-accent-primary text-white flex items-center justify-center shadow-md z-10">
<span className="font-semibold text-lg">O</span>
</div>
<div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-[#25D366] absolute right-4 animate-float-delayed">
<iconify-icon className="text-xl" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
</div>
</div>

<div className="scroll-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 opacity-50 translate-y-8">
<div className="bg-success-main/10 w-12 h-12 rounded-2xl flex items-center justify-center text-success-main mb-6">
<iconify-icon className="text-2xl" icon="solar:calendar-add-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-dark-slate mb-4">Booking, Lead Capture &amp; Follow-Up</h3>
<p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Olivia captures customer details, asks the right questions, qualifies leads in seconds, books appointments, confirms slots, reschedules visits, sends reminders, and follows up with missed or incomplete bookings.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Booking and appointment scheduling
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Lead capture and qualification
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Reduces no-shows and missed bookings
                            </li>
</ul>
</div>

<div className="scroll-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 opacity-50 translate-y-8">
<div className="bg-accent-primary/10 w-12 h-12 rounded-2xl flex items-center justify-center text-accent-primary mb-6">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-dark-slate mb-4">Business Knowledge &amp; SOP-Trained</h3>
<p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Olivia can be trained on your company services, FAQs, pricing, packages, policies, procedures, brand tone, SOPs, workflows, and internal rules — so she replies like a trained senior receptionist from day one.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Answers FAQs instantly
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> SOP-trained from day one
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Consistent brand voice
                            </li>
</ul>
</div>

<div className="scroll-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 opacity-50 translate-y-8">
<div className="bg-warm-soft/30 w-12 h-12 rounded-2xl flex items-center justify-center text-orange-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-dark-slate mb-4">CRM, Workflow &amp; Reporting Integration</h3>
<p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Olivia connects with your CRM, calendar, booking system, knowledge base, forms, and internal tools. She can save lead data, update records, trigger workflows, tag customers, create reports, and show what customers ask most.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> CRM and business system integration
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Triggers follow-ups, tagging, and reporting
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Data collection and reporting support
                            </li>
</ul>
</div>

<div className="scroll-card bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-500 opacity-50 translate-y-8">
<div className="bg-dark-main/10 w-12 h-12 rounded-2xl flex items-center justify-center text-dark-main mb-6">
<iconify-icon className="text-2xl" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-dark-slate mb-4">Multi-Industry, Multilingual &amp; Scalable</h3>
<p className="text-sm text-text-muted mb-6 leading-relaxed">
                            Olivia supports 95+ languages and can be adapted for clinics, med spas, salons, gyms, hospitals, property management teams, agencies, service businesses, e-commerce intake, and consultation businesses.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Multilingual communication
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Scalable for business growth
                            </li>
<li className="flex items-start gap-3 text-sm text-text-main">
<iconify-icon className="text-accent-primary text-lg mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Reduces staff workload
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate">Intelligence Layer</h2>
<p className="mt-2 text-lg font-medium text-accent-primary">Qualify. Capture. Route. Report.</p>
<p className="mt-4 text-sm font-normal text-text-muted">
                    Olivia understands customer intent, retrieves business knowledge, captures important details, and triggers the right workflow automatically.
                </p>
</div>
<div className="bg-white rounded-3xl p-6 lg:p-10 border border-slate-200 shadow-xl shadow-slate-200/50 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0iI2UydThmMCIvPjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gradient-to-tr from-ai-light/30 to-accent-secondary/10 rounded-full blur-3xl"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:book-bookmark-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">Knowledge Base</h4>
</div>
<p className="text-xs text-text-muted">FAQs, SOPs, services, policies, pricing, packages, and procedures.</p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:calendar-mark-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">Booking System</h4>
</div>
<p className="text-xs text-text-muted">Calendars, available slots, reminders, rescheduling, and cancellations.</p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">CRM / Lead System</h4>
</div>
<p className="text-xs text-text-muted">Lead capture, contact details, notes, tags, and follow-up status.</p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:phone-calling-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">Voice / WhatsApp</h4>
</div>
<p className="text-xs text-text-muted">Phone calls, WhatsApp conversations, and instant message replies.</p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:letter-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">Email / Web Chat</h4>
</div>
<p className="text-xs text-text-muted">Unified front desk support across website chat and email.</p>
</div>

<div className="bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-6 hover:border-accent-primary/50 transition-colors group">
<div className="flex items-center gap-3 mb-4">
<iconify-icon className="text-xl text-text-soft group-hover:text-accent-primary transition-colors" icon="solar:chart-pie-linear"></iconify-icon>
<h4 className="text-base font-semibold text-dark-slate">Reports / Insights</h4>
</div>
<p className="text-xs text-text-muted">Common questions, customer intent, booking interest, and service demand.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-center gap-16">

<div className="lg:w-1/2 relative min-h-[400px] w-full flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-bg-100 to-white rounded-full blur-3xl -z-10"></div>

<div className="w-48 h-48 rounded-full bg-gradient-to-br from-ai-soft/20 to-accent-primary/20 flex items-center justify-center border border-white shadow-xl relative z-10">
<iconify-icon className="text-5xl text-accent-primary" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>

<div className="absolute top-10 left-10 bg-white border border-slate-200 shadow-md rounded-xl p-2.5 flex items-center gap-2 animate-float-slow">
<iconify-icon className="text-sm text-dark-main" icon="solar:phone-linear"></iconify-icon> <span className="text-xs font-medium">Call Answering</span>
</div>
<div className="absolute top-20 right-10 bg-white border border-slate-200 shadow-md rounded-xl p-2.5 flex items-center gap-2 animate-float-delayed">
<iconify-icon className="text-sm text-[#25D366]" icon="solar:chat-round-line-linear"></iconify-icon> <span className="text-xs font-medium">WhatsApp</span>
</div>
<div className="absolute bottom-32 left-4 bg-white border border-slate-200 shadow-md rounded-xl p-2.5 flex items-center gap-2 animate-float-delayed">
<iconify-icon className="text-sm text-accent-secondary" icon="solar:calendar-linear"></iconify-icon> <span className="text-xs font-medium">Booking</span>
</div>
<div className="absolute bottom-10 right-20 bg-white border border-slate-200 shadow-md rounded-xl p-2.5 flex items-center gap-2 animate-float-slow">
<iconify-icon className="text-sm text-ai-soft" icon="solar:database-linear"></iconify-icon> <span className="text-xs font-medium">CRM</span>
</div>
<div className="absolute top-1/2 -left-4 bg-white border border-slate-200 shadow-md rounded-xl p-2.5 flex items-center gap-2 animate-float-slow">
<iconify-icon className="text-sm text-warm-soft text-orange-500" icon="solar:book-bookmark-linear"></iconify-icon> <span className="text-xs font-medium">Knowledge Base</span>
</div>
</div>

<div className="lg:w-1/2">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-medium text-text-soft mb-6">
<span>01 / 03</span> Steps
                    </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate mb-6">Launch Olivia for your business fast</h2>
<p className="text-base text-text-muted mb-8 leading-relaxed">
                        Connect your business details, upload your knowledge, choose your channels, and let Olivia start handling calls, chats, messages, bookings, and customer questions.
                    </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center font-semibold text-sm">1</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate">Add your business information</h4>
<p className="text-xs text-text-muted mt-1">Basic details, working hours, and industry focus.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center font-semibold text-sm">2</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate">Train Olivia on services &amp; SOPs</h4>
<p className="text-xs text-text-muted mt-1">Upload FAQs, brand tone, pricing, and procedures.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-primary/10 text-accent-primary flex items-center justify-center font-semibold text-sm">3</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate">Go live on your channels</h4>
<p className="text-xs text-text-muted mt-1">Connect calls, web chat, WhatsApp, email, and bookings.</p>
</div>
</div>
</div>
<button className="text-base font-medium bg-dark-main text-white px-8 py-3.5 rounded-full hover:bg-dark-alt transition-all shadow-lg shadow-dark-main/20">
                        Get Access
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-50" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate">Usage Estimator</h2>
<p className="mt-4 text-base font-normal text-text-muted">
                    Estimate the best Olivia plan based on your monthly inquiry volume.
                </p>
</div>
<div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-6 lg:p-10 flex flex-col lg:flex-row gap-10">

<div className="lg:w-1/2 space-y-8">
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-dark-slate">Monthly inquiries</label>
<span className="text-sm font-semibold text-accent-primary" id="inquiries-val">250</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-accent-primary" id="inquiries-slider" max="2000" min="50" step="50" type="range" value="250"/>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-sm font-medium text-dark-slate">Average conversation time</label>
<span className="text-sm font-semibold text-accent-primary" id="time-val">2 mins</span>
</div>
<input className="w-full h-2 bg-slate-200 rounded-full appearance-none cursor-pointer accent-accent-primary" id="time-slider" max="10" min="1" step="1" type="range" value="2"/>
</div>
<div>
<label className="text-sm font-medium text-dark-slate block mb-3">Channels used</label>
<div className="grid grid-cols-2 gap-3">
<label className="flex items-center gap-2 cursor-pointer border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 has-[:checked]:border-accent-primary has-[:checked]:bg-accent-primary/5 transition-all">
<input checked="" className="w-4 h-4 text-accent-primary bg-slate-100 border-slate-300 rounded focus:ring-accent-primary accent-accent-primary" type="checkbox"/>
<span className="text-xs font-medium text-text-main">Voice</span>
</label>
<label className="flex items-center gap-2 cursor-pointer border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 has-[:checked]:border-accent-primary has-[:checked]:bg-accent-primary/5 transition-all">
<input checked="" className="w-4 h-4 text-accent-primary bg-slate-100 border-slate-300 rounded focus:ring-accent-primary accent-accent-primary" type="checkbox"/>
<span className="text-xs font-medium text-text-main">WhatsApp</span>
</label>
<label className="flex items-center gap-2 cursor-pointer border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 has-[:checked]:border-accent-primary has-[:checked]:bg-accent-primary/5 transition-all">
<input className="w-4 h-4 text-accent-primary bg-slate-100 border-slate-300 rounded focus:ring-accent-primary accent-accent-primary" type="checkbox"/>
<span className="text-xs font-medium text-text-main">Web Chat</span>
</label>
<label className="flex items-center gap-2 cursor-pointer border border-slate-200 p-2.5 rounded-xl hover:bg-slate-50 has-[:checked]:border-accent-primary has-[:checked]:bg-accent-primary/5 transition-all">
<input className="w-4 h-4 text-accent-primary bg-slate-100 border-slate-300 rounded focus:ring-accent-primary accent-accent-primary" type="checkbox"/>
<span className="text-xs font-medium text-text-main">Email</span>
</label>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-bg-50 rounded-2xl p-6 lg:p-8 border border-slate-100 flex flex-col justify-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-ai-soft/10 rounded-full blur-2xl"></div>
<div className="mb-6">
<p className="text-xs text-text-muted mb-1">Estimated monthly conversations</p>
<p className="text-3xl font-semibold text-dark-slate tabular-nums" id="out-convos">250</p>
</div>
<div className="mb-6">
<p className="text-xs text-text-muted mb-1">Estimated handled minutes</p>
<p className="text-3xl font-semibold text-accent-primary tabular-nums" id="out-mins">500 <span className="text-sm font-normal text-text-soft">mins</span></p>
</div>
<div className="h-px bg-slate-200 w-full my-4"></div>
<div className="mb-2">
<p className="text-xs text-text-muted mb-1">Suggested plan</p>
<p className="text-lg font-semibold text-dark-slate" id="out-plan">Olivia Starter</p>
</div>
<div>
<p className="text-xs text-text-muted mb-1">Best for</p>
<p className="text-xs font-medium text-text-main">Clinics, salons, gyms, and service businesses</p>
</div>
<button className="mt-6 w-full text-sm font-medium bg-dark-main text-white px-4 py-3 rounded-xl hover:bg-dark-alt transition-all">
                        View Plan Details
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-dark-slate">Professional AI Voice Library</h2>
<p className="mt-4 text-base font-normal text-text-muted">
                    Choose the voice style that best matches your brand and audience.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Clara</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Warm and calm</p>
<p className="text-xs text-text-muted">Best for clinics and healthcare</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Julian</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Clear and confident</p>
<p className="text-xs text-text-muted">Best for agencies and professional services</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Noah</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Friendly and premium</p>
<p className="text-xs text-text-muted">Best for real estate and service businesses</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Isla</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Elegant and soft</p>
<p className="text-xs text-text-muted">Best for beauty, salons, and aesthetic clinics</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Maya</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Modern and helpful</p>
<p className="text-xs text-text-muted">Best for gyms, wellness, and coaching businesses</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>

<div className="bg-bg-50 rounded-2xl p-6 border border-slate-200 hover:-translate-y-1 hover:shadow-md transition-all group flex flex-col justify-between">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-semibold text-dark-slate">Felix</h3>
<iconify-icon className="text-xl text-accent-primary group-hover:animate-pulse" icon="solar:soundwave-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-text-main mb-1">Strong and direct</p>
<p className="text-xs text-text-muted">Best for property management and B2B teams</p>
</div>
<button className="mt-6 flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white text-sm font-medium text-text-main hover:bg-slate-50 hover:border-slate-400 transition-colors">
<iconify-icon className="text-base" icon="solar:play-linear"></iconify-icon> Play Sample
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-dark-slate">

<div className="absolute inset-0 bg-gradient-to-br from-dark-slate to-dark-main"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                Your front desk should never sleep.
            </h2>
<p className="text-lg text-white/80 font-normal mb-10 max-w-2xl mx-auto leading-relaxed">
                Let Olivia answer faster, qualify better, book automatically, and support customers 24/7. Replace missed opportunities with a real AI Employee built for growth.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto text-base font-medium bg-accent-primary text-white px-8 py-4 rounded-full hover:bg-accent-primary/90 transition-all shadow-xl shadow-accent-primary/20 hover:-translate-y-0.5">
                    Start with Olivia
                </button>
<button className="w-full sm:w-auto text-base font-medium bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all">
                    Book a Demo
                </button>
</div>

<div className="flex flex-wrap justify-center gap-4 md:gap-8">
<div className="flex items-center gap-2 text-white/70 text-sm font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 24/7 Availability
                </div>
<div className="flex items-center gap-2 text-white/70 text-sm font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 95+ Languages
                </div>
<div className="flex items-center gap-2 text-white/70 text-sm font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> 100+ Conversations
                </div>
<div className="flex items-center gap-2 text-white/70 text-sm font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> CRM Ready
                </div>
<div className="flex items-center gap-2 text-white/70 text-sm font-medium">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Booking Ready
                </div>
</div>
</div>
</section>

<footer className="bg-bg-50 py-12 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="md:col-span-1">
<span className="text-base font-semibold tracking-tighter text-dark-main uppercase block mb-4">
                        KWS Technology AI Workforce
                    </span>
<p className="text-xs text-text-muted leading-relaxed">
                        Olivia — AI Receptionist / Front Desk AI Employee built to improve response speed, customer satisfaction, and business conversion.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Home</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#olivia">Olivia</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#features">Features</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate mb-4">Use Cases</h4>
<ul className="space-y-2">
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#industries">Industries</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Clinics &amp; Healthcare</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Salons &amp; Spas</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Agencies</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-dark-slate mb-4">Contact</h4>
<ul className="space-y-2">
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Website</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Email Support</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">WhatsApp</a></li>
<li><a className="text-xs text-text-muted hover:text-accent-primary transition-colors" href="#">Demo Booking</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-text-soft">© 2024 KWS Technology AI Workforce. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-xs text-text-soft hover:text-text-main transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-text-soft hover:text-text-main transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
