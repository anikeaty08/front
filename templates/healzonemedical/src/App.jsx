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
      

<header className="py-6 border-b border-white/5 relative z-50">
<div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-[#8B6FE1]" height="24" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="text-xl font-normal tracking-tight">TEM</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-light text-white hover:text-white/80 transition-colors" href="#">Home</a>
<a className="text-base font-light text-slate-400 hover:text-white transition-colors" href="#">Service</a>
<a className="text-base font-light text-slate-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-base font-light text-slate-400 hover:text-white transition-colors" href="#">Find doctor</a>
<a className="text-base font-light text-slate-400 hover:text-white transition-colors" href="#">Blog</a>
</nav>
<div>
<a className="text-base text-white font-light border border-white/20 rounded-full px-6 py-2 hover:bg-white/5 transition-colors" href="#">
            Contact
          </a>
</div>
</div>
</header>
<main>

<section className="relative pt-20 pb-16 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#6A4BC4] opacity-20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10 flex flex-col items-center">
<div className="text-center max-w-4xl mb-12">
<h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-normal leading-[1.05] tracking-tight text-white mb-6">
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9D7AE8] to-[#E3A8F9]">Virtual Healing</span> <br/>
              Real Results Embrace <br/>
<div className="flex items-center justify-between mt-2">
<p className="text-base font-light text-slate-400 max-w-xs text-left leading-relaxed hidden md:block">
                  A telemedicine website should provide comprehensive information about the telehealth services.
                </p>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5B75F0] to-[#A05DE8]">Telemedicine</span>
</div>
</h1>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-5 w-full max-w-6xl">

<div className="md:col-span-5 relative rounded-[2rem] overflow-hidden border border-white/10 group h-[340px]">
<img alt="DNA Strand" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-purple-900/40 mix-blend-overlay"></div>
</div>

<div className="md:col-span-4 flex flex-col gap-5 h-[340px]">
<div className="flex gap-5 h-1/2">

<a className="bg-gradient-to-tr from-[#3B54D4] to-[#5C75F2] rounded-[2rem] flex-1 flex items-center justify-center hover:opacity-90 transition-opacity border border-white/5" href="#">
<iconify-icon className="text-white" height="32" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</a>

<div className="bg-[#15161A] rounded-[2rem] flex-[2] p-5 border border-white/5 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-3">
<img alt="Avatar" className="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="text-white text-base font-normal tracking-tight">Mike Adenson</h4>
<p className="text-slate-500 text-xs font-light">Happy Customer</p>
</div>
</div>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                    The inclusion of a guide on getting started with telemedicine simplifies the process for users. It's a valuable resource.
                  </p>
</div>
</div>

<div className="bg-gradient-to-r from-[#4A25A9] to-[#3B1E8A] rounded-[2rem] h-1/2 p-6 border border-white/5 flex items-center justify-between overflow-hidden relative">
<div className="relative z-10">
<h4 className="text-white text-lg font-normal tracking-tight max-w-[140px] leading-tight mb-4">Make schedule for your cardiologist today</h4>
<button className="bg-white text-slate-900 text-sm font-normal px-5 py-2 rounded-full hover:bg-slate-100 transition-colors">
                    Get Started
                  </button>
</div>
<iconify-icon className="text-white/10 absolute -right-4 -bottom-4" height="96" icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="96"></iconify-icon>
</div>
</div>

<div className="md:col-span-3 bg-[#1A1C23] rounded-[2rem] p-5 border border-white/5 flex flex-col h-[340px]">
<div className="mb-4">
<h3 className="text-white text-xl font-normal tracking-tight">Dr. Thomas</h3>
<p className="text-slate-400 text-sm font-light">Cardiologist</p>
</div>
<div className="flex-grow rounded-2xl overflow-hidden bg-gradient-to-b from-[#B4C2FF] to-[#DDE4FF] relative">
<img alt="Doctor" className="w-full h-full object-cover object-top mix-blend-multiply opacity-90" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5">
<div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between items-center gap-8 opacity-40 grayscale">
<div className="text-2xl font-normal tracking-tight text-white flex items-center gap-2">
<iconify-icon height="24" icon="solar:buildings-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon> Gerlach
          </div>
<div className="text-2xl font-normal tracking-tight text-white flex items-center gap-2">
<iconify-icon height="24" icon="solar:box-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon> Virtual Kubelet
          </div>
<div className="text-2xl font-normal tracking-tight text-white flex items-center gap-2 italic">
<iconify-icon height="24" icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon> Medicine Shoppe
          </div>
<div className="text-2xl font-normal tracking-tight text-white flex items-center gap-2 uppercase">
<iconify-icon height="24" icon="solar:layers-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon> United Artists
          </div>
<div className="text-2xl font-normal tracking-widest text-white italic">
            RAYS
          </div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-normal tracking-widest uppercase text-slate-400">Process</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white max-w-2xl leading-tight">
              Three Simple Steps to Health
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#15161A] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-[#8B6FE1]" height="40" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Create Profile</h3>
<p className="text-base font-light text-slate-500 leading-relaxed">
                Sign up and provide basic medical history to help our doctors assist you better.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#15161A] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-[#5C75F2]" height="40" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Find Specialist</h3>
<p className="text-base font-light text-slate-500 leading-relaxed">
                Browse through our vetted list of specialists and pick the best match for your needs.
              </p>
</div>

<div className="relative flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-full bg-[#15161A] border border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-blue-500/50 transition-colors">
<iconify-icon className="text-[#D57BCA]" height="40" icon="solar:videocamera-linear" style={{strokeWidth: '1.5'}} width="40"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-3">Start Consultation</h3>
<p className="text-base font-light text-slate-500 leading-relaxed">
                Join the secure video call from anywhere and get the care you deserve.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-12">
<div className="inline-flex items-center gap-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-normal tracking-widest uppercase text-slate-400">Our Service</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white max-w-2xl leading-tight">
              Expert Telemedicine Services for Professionals
            </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-[2rem] p-8 relative flex flex-col group">
<div className="absolute top-6 right-6 w-10 h-10 bg-[#5C75F2] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#4A62DF] transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="max-w-[80%] mb-8">
<h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-3">Remote Patient Monitoring</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">
                  Information about the medical specialties available for telemedicine consultations.
                </p>
</div>
<div className="mt-auto">
<img alt="Remote Monitoring" className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative flex flex-col group">
<div className="absolute top-6 right-6 w-10 h-10 bg-[#5C75F2] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#4A62DF] transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="max-w-[80%] mb-8">
<h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-3">Virtual Consultations</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">
                  Explanation of how patients can schedule and conduct virtual appointments.
                </p>
</div>
<div className="mt-auto relative rounded-2xl overflow-hidden h-48">
<img alt="Virtual Consultation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-blue-900/20"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative flex flex-col group">
<div className="absolute top-6 right-6 w-10 h-10 bg-[#5C75F2] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-[#4A62DF] transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="max-w-[80%] mb-8">
<h3 className="text-2xl font-normal tracking-tight text-slate-900 mb-3">Covid-19 Consultation</h3>
<p className="text-base font-light text-slate-600 leading-relaxed">
                  Highlighting psychiatric and psychological support through telehealth.
                </p>
</div>
<div className="mt-auto">
<img alt="Covid Consultation" className="w-full h-48 object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-br from-[#6A82FB] via-[#9264E5] to-[#D57BCA]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex justify-center mb-8">
<div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-1.5 bg-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-white"></div>
<span className="text-xs font-normal tracking-widest uppercase text-white/90">About Us</span>
</div>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white text-center mb-24 max-w-5xl mx-auto leading-tight">
            Join us on our mission to make healthcare more convenient, inclusive, and accessible.
          </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-16">
<div>
<div className="text-7xl md:text-[7rem] tracking-tight font-normal text-white leading-none mb-4">40K<span className="text-white/80">+</span></div>
<div className="text-2xl text-white/90 font-light">Virtual Consultations</div>
</div>
<div className="flex flex-wrap gap-16">
<div>
<div className="text-5xl md:text-6xl tracking-tight font-normal text-white leading-none mb-3">99.9%</div>
<div className="text-lg text-white/90 font-light">Connections<br/>Success Rate</div>
</div>
<div>
<div className="text-5xl md:text-6xl tracking-tight font-normal text-white leading-none mb-3">5.5K<span className="text-white/80">+</span></div>
<div className="text-lg text-white/90 font-light">Virtual Care Solutions</div>
</div>
</div>
</div>

<div className="pl-0 lg:pl-12">
<p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed">
                Convenience is a cornerstone of our mission. We strive to simplify healthcare, ensuring that individuals can access the services they need with ease and efficiency. Through innovative solutions and cutting-edge technology, we're streamlining the healthcare journey, reducing wait times, and eliminating unnecessary complexities.
              </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col items-center mb-16">
<div className="inline-flex items-center gap-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-normal tracking-widest uppercase text-slate-400">Our Doctors</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white">
              Specialized Doctors
            </h2>
</div>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#F0A94A] mb-4">
<img alt="Dr. Mita Alice" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Mita Alice</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#78A8D1] mb-4">
<img alt="Dr. Urmila Roy" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Urmila Roy</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#909BB0] mb-4">
<img alt="Dr. Jimmy Chowhan" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Jimmy Chowhan</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#807DCA] mb-4">
<img alt="Dr. Nurujjaman Khan" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Nurujjaman Khan</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#D35A62] mb-4">
<img alt="Dr. Jack" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Jack</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>

<div className="break-inside-avoid mb-6 cursor-pointer group">
<div className="rounded-3xl overflow-hidden bg-[#E8B84B] mb-4">
<img alt="Dr. Saiful Islam" className="w-full h-auto object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="text-xl font-normal tracking-tight text-white mb-1">Dr. Saiful Islam</h3>
<p className="text-sm font-light text-slate-500">Cardiologist</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#121318]">
<div className="max-w-[1400px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<div className="inline-flex items-center gap-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-[#E8B84B]"></div>
<span className="text-xs font-normal tracking-widest uppercase text-slate-400">Reviews</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white max-w-xl">
                What our patients say about us
              </h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon height="24" icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon height="24" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#1A1C23] border border-white/5 p-8 rounded-[2rem] flex flex-col h-full">
<div className="flex gap-1 mb-6 text-[#E8B84B]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-300 leading-relaxed mb-8 flex-grow">
                "The telehealth experience was absolutely flawless. I connected with a specialist in under 10 minutes and received the prescription I needed. Highly recommend for any busy professionals!"
              </p>
<div className="flex items-center gap-4">
<img alt="Sarah J." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="text-white text-base font-normal tracking-tight">Sarah Jenkins</h4>
<p className="text-slate-500 text-sm font-light">Product Manager</p>
</div>
</div>
</div>

<div className="bg-[#1A1C23] border border-white/5 p-8 rounded-[2rem] flex flex-col h-full">
<div className="flex gap-1 mb-6 text-[#E8B84B]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-300 leading-relaxed mb-8 flex-grow">
                "I was skeptical about remote consultations at first, but the quality of care and attention I received completely changed my mind. The platform is incredibly intuitive."
              </p>
<div className="flex items-center gap-4">
<img alt="David M." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="text-white text-base font-normal tracking-tight">David Martinez</h4>
<p className="text-slate-500 text-sm font-light">Software Engineer</p>
</div>
</div>
</div>

<div className="bg-[#1A1C23] border border-white/5 p-8 rounded-[2rem] flex flex-col h-full">
<div className="flex gap-1 mb-6 text-[#E8B84B]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<p className="text-lg font-light text-slate-300 leading-relaxed mb-8 flex-grow">
                "Finding a specialized doctor used to take weeks. With TEM, I scheduled a follow-up with a cardiologist for the next morning. Lifesaver."
              </p>
<div className="flex items-center gap-4">
<img alt="Emily R." className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<h4 className="text-white text-base font-normal tracking-tight">Emily Richards</h4>
<p className="text-slate-500 text-sm font-light">Freelance Writer</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5">
<div className="max-w-[800px] mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16">
<div className="inline-flex items-center gap-2 border border-slate-700/50 rounded-full px-4 py-1.5 mb-6">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
<span className="text-xs font-normal tracking-widest uppercase text-slate-400">FAQ</span>
</div>
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-4">
              Frequently Asked Questions
            </h2>
<p className="text-base font-light text-slate-500">
              Find answers to the most common questions about our telehealth services.
            </p>
</div>
<div className="space-y-4">

<details className="group bg-[#15161A] border border-white/5 rounded-2xl overflow-hidden" open="">
<summary className="flex justify-between items-center cursor-pointer p-6 outline-none">
<h3 className="text-lg font-normal tracking-tight text-white">How does a virtual consultation work?</h3>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-base font-light text-slate-400 leading-relaxed">
                  A virtual consultation connects you with a licensed healthcare provider via a secure video call. You can discuss your symptoms, receive a diagnosis, and even get prescriptions sent directly to your local pharmacy.
                </p>
</div>
</details>

<details className="group bg-[#15161A] border border-white/5 rounded-2xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 outline-none">
<h3 className="text-lg font-normal tracking-tight text-white">Is my medical information secure?</h3>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-base font-light text-slate-400 leading-relaxed">
                  Yes. We use end-to-end encryption and comply with all HIPAA regulations to ensure your personal and medical information remains completely confidential.
                </p>
</div>
</details>

<details className="group bg-[#15161A] border border-white/5 rounded-2xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 outline-none">
<h3 className="text-lg font-normal tracking-tight text-white">Can I get a prescription online?</h3>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-base font-light text-slate-400 leading-relaxed">
                  Yes, our doctors can write and refill prescriptions for many common conditions. Prescriptions are sent electronically to your pharmacy of choice.
                </p>
</div>
</details>

<details className="group bg-[#15161A] border border-white/5 rounded-2xl overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 outline-none">
<h3 className="text-lg font-normal tracking-tight text-white">What if I need physical examination?</h3>
<span className="transition group-open:rotate-180 text-slate-400">
<iconify-icon height="24" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 pt-0">
<p className="text-base font-light text-slate-400 leading-relaxed">
                  While telemedicine handles many issues, if your provider determines that an in-person physical exam or lab work is necessary, they will refer you to a local specialist or clinic.
                </p>
</div>
</details>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-[1400px] mx-auto px-6">
<div className="bg-gradient-to-r from-[#211152] via-[#4A25A9] to-[#3B1E8A] rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between border border-white/10">

<div className="absolute -right-20 -top-20 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-xl relative z-10 mb-10 md:mb-0 text-center md:text-left">
<h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6 leading-tight">
                Get healthcare in your pocket today.
              </h2>
<p className="text-lg font-light text-white/80 mb-10 leading-relaxed">
                Download the TEM app to instantly connect with specialists, manage appointments, and track your health records on the go.
              </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

<a className="bg-white text-slate-900 rounded-full px-6 py-3 flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors" href="#">
<iconify-icon height="24" icon="logos:apple" width="24"></iconify-icon>
<div className="text-left">
<div className="text-xs font-light leading-none mb-1">Download on the</div>
<div className="text-sm font-normal leading-none tracking-tight">App Store</div>
</div>
</a>

<a className="bg-white/10 text-white border border-white/20 rounded-full px-6 py-3 flex items-center justify-center gap-3 hover:bg-white/20 transition-colors backdrop-blur-md" href="#">
<iconify-icon height="24" icon="logos:google-play-icon" width="24"></iconify-icon>
<div className="text-left">
<div className="text-xs font-light leading-none mb-1">GET IT ON</div>
<div className="text-sm font-normal leading-none tracking-tight">Google Play</div>
</div>
</a>
</div>
</div>

<div className="relative z-10 w-full md:w-1/3 flex justify-center md:justify-end">
<div className="w-64 h-80 rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 border-2 border-white/20 backdrop-blur-sm shadow-2xl flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-x-0 top-0 h-6 bg-black/40 rounded-t-3xl flex justify-center pt-2">
<div className="w-16 h-1.5 bg-white/20 rounded-full"></div>
</div>
<iconify-icon className="text-white/50" height="64" icon="solar:heart-pulse-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#121318] pt-24 pb-8 border-t border-white/5">
<div className="max-w-[1400px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

<div className="lg:col-span-5">
<h3 className="text-3xl font-normal tracking-tight text-white mb-4">Subscribe to the updates!</h3>
<p className="text-slate-500 text-base font-light mb-10 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
<form className="relative flex items-center border-b border-slate-700 pb-2 max-w-sm">
<input className="bg-transparent border-none outline-none w-full text-white placeholder-slate-600 text-base font-light pr-12" placeholder="Email address" type="email"/>
<button className="absolute right-0 w-8 h-8 rounded-full bg-[#8B6FE1] flex items-center justify-center text-white hover:bg-[#7859D6] transition-colors" type="submit">
<iconify-icon height="16" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</button>
</form>
</div>

<div className="lg:col-span-3">
<ul className="space-y-4">
<li><a className="text-base text-white font-light hover:text-[#8B6FE1] transition-colors" href="#">Home</a></li>
<li><a className="text-base text-white font-light hover:text-[#8B6FE1] transition-colors" href="#">Service</a></li>
<li><a className="text-base text-white font-light hover:text-[#8B6FE1] transition-colors" href="#">About</a></li>
<li><a className="text-base text-white font-light hover:text-[#8B6FE1] transition-colors" href="#">Find Doctor</a></li>
<li><a className="text-base text-white font-light hover:text-[#8B6FE1] transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div className="lg:col-span-4">
<ul className="space-y-6">
<li>
<a className="text-base text-[#8B6FE1] font-light hover:text-white transition-colors" href="#">info@telemedicine.com</a>
</li>
<li>
<p className="text-base text-white font-light">+8801234567890</p>
</li>
<li>
<p className="text-base text-white font-light max-w-[200px] leading-relaxed">
                  312 Clinton Circle Atlantic City, M2 080522
                </p>
</li>
</ul>
</div>
</div>
<div className="text-center pt-8 border-t border-slate-800/50">
<p className="text-sm text-slate-500 font-light">
            Copyright ©2023 TEM. All Rights Reserved
          </p>
</div>
</div>
</footer>

    </>
  );
}
