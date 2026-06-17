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



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': 'lucide'
            }
        });

        // Intersection Observer for Reveal on Scroll
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });

        // Parallax Effect for Background Blobs
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const blobs = document.querySelectorAll('.blob');

            blobs.forEach(blob => {
                const speed = blob.getAttribute('data-speed');
                const yPos = -(scrolled * speed);
                blob.style.transform = `translateY(${yPos}px) translateZ(0)`;
            });
        });

        // Show More Testimonials
        function showMoreTestimonials() {
            const moreSection = document.getElementById('more-testimonials');
            const btn = document.getElementById('load-more-btn');

            moreSection.classList.remove('hidden');

            // Add fade animation to the children
            Array.from(moreSection.children).forEach((child, index) => {
                child.style.opacity = '0';
                child.style.animation = `fadeInUp 0.6s ease forwards ${index * 100}ms`;
            });

            btn.style.display = 'none';
        }
    
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
      

<div className="blob bg-indigo-900/20 w-96 h-96 top-0 left-0 -translate-x-1/2 -translate-y-1/2" data-speed="0.05"></div>
<div className="blob bg-stone-800/30 w-[30rem] h-[30rem] top-1/2 right-0 translate-x-1/3 -translate-y-1/2" data-speed="0.08"></div>
<div className="blob bg-neutral-800/40 w-80 h-80 bottom-0 left-1/4 translate-y-1/3" data-speed="0.03"></div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-800 bg-stone-900/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter text-stone-100 flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<img alt="Aiman Cloudworks Logo" className="w-5 h-5 object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
                AiMan Cloudworks
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-400">
<a className="hover:text-stone-100 transition-colors" href="#features">Fungsi</a>
<a className="hover:text-stone-100 transition-colors text-stone-100" href="#staff">AI Staff</a>
<a className="hover:text-stone-100 transition-colors" href="#past-projects">Projek</a>
<a className="hover:text-stone-100 transition-colors" href="#pricing">Pakej</a>
</div>
<div className="flex items-center gap-4">
<a className="bg-stone-100 text-stone-900 hover:bg-white text-xs font-medium px-4 py-2 rounded-full transition-all hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#">Berminat</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden" id="hero">
<div className="max-w-4xl mx-auto text-center z-10">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-stone-900/50 backdrop-blur-sm mb-8 active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-stone-500"></span>
</span>
<span className="text-xs font-medium text-stone-400 tracking-wide uppercase">Scale dengan Automasi</span>
</div>
<h1 className="reveal delay-100 md:text-7xl lg:text-8xl leading-[1.1] active text-5xl font-medium text-white tracking-tight mb-6">
                Scale Bisnes <br/>
<span className="text-gradient">Tanpa Kos.</span>
</h1>
<p className="reveal delay-200 md:text-xl leading-relaxed active text-lg font-light text-stone-400 max-w-2xl mr-auto mb-10 ml-auto">
                Sediakan pengalaman pelanggan yang responsif, profesional, dan konsisten tanpa menambah beban kos jangka
                panjang.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 w-full active">
<a className="group relative w-full sm:w-auto flex items-center justify-center gap-2 bg-stone-100 text-stone-950 px-8 py-3.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95" href="#">
                    Audit Percuma
                    <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>

<a className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-stone-300 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all bg-transparent backdrop-blur-sm" href="#">
<svg className="lucide lucide-play-circle w-4 h-4" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z">
</path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
                    AI Demo
                </a>
</div>
</div>

<div className="reveal delay-300 mt-24 w-full max-w-sm md:max-w-md border border-neutral-800 rounded-[2rem] bg-stone-950/80 backdrop-blur-xl shadow-2xl overflow-hidden relative group active">

<div className="flex items-center gap-4 px-5 py-4 border-b border-neutral-800 bg-stone-900/90 z-20 relative">
<i className="w-5 h-5 text-stone-400" data-lucide="arrow-left"></i>
<div className="flex items-center gap-3 flex-1">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 font-bold text-sm">
                            A</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-stone-900 rounded-full">
</div>
</div>
<div>
<div className="text-sm font-medium text-stone-100">AiMan Cloudworks</div>
<div className="text-[10px] text-stone-500 uppercase tracking-wide">Supplier AI Staff</div>
</div>
</div>
<i className="w-5 h-5 text-stone-400" data-lucide="video"></i>
<i className="w-5 h-5 text-stone-400" data-lucide="phone"></i>
</div>

<div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}>
</div>

<div className="p-5 h-[350px] flex flex-col justify-end space-y-4 relative z-10">

<div className="flex justify-center mb-2">
<span className="text-[10px] bg-stone-900/50 text-stone-500 px-2 py-1 rounded-full border border-stone-800/50">Today</span>
</div>

<div className="chat-bubble-reply flex justify-end" style={{animationDelay: '200ms'}}>
<div className="bg-emerald-900/30 text-emerald-100 px-4 py-2.5 rounded-tl-xl rounded-bl-xl rounded-br-xl max-w-[85%] border border-emerald-800/40 shadow-sm">
<p className="text-sm leading-relaxed">Salam. Saya berminat nak tahu pasal AI Staff ni. Macam mana dia berfungsi?</p>
<div className="flex justify-end items-center gap-1 mt-1 opacity-60">
<span className="text-[10px]">10:42 AM</span>
<i className="w-3 h-3 text-emerald-400" data-lucide="check-check"></i>
</div>
</div>
</div>

<div className="chat-bubble-enter flex justify-start delay-1500 opacity-0" style={{animationDelay: '1.5s'}}>
<div className="bg-stone-800 text-stone-200 px-4 py-2.5 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[85%] border border-neutral-700/50 shadow-sm relative group">
<p className="text-sm leading-relaxed">Waalaikumussalam! Terima kasih kerana berminat. 👋<br/><br/>AI Staff kami boleh bantu reply WhatsApp, follow up customer dan close sales 24 jam tanpa henti.</p>
<div className="flex justify-end items-center gap-1 mt-1 opacity-60">
<span className="text-[10px]">10:42 AM</span>
</div>
</div>
</div>

<div className="chat-bubble-enter flex justify-start delay-500 absolute bottom-[70px] left-5 opacity-0 animate-[fadeOut_0.2s_ease-out_1.4s_forwards]" style={{animationDelay: '0.5s'}}>
<div className="bg-stone-800/40 border border-stone-700/30 px-3 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl">
<div className="flex gap-1">
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full typing-dot"></div>
<div className="w-1.5 h-1.5 bg-stone-400 rounded-full typing-dot"></div>
</div>
</div>
</div>
</div>

<div className="p-3 bg-stone-900 border-t border-neutral-800 flex items-center gap-3 z-20 relative">
<i className="w-5 h-5 text-stone-500" data-lucide="plus"></i>
<div className="flex-1 bg-stone-950 border border-neutral-800 rounded-full h-9 flex items-center px-4">
<span className="text-sm text-stone-600">Type a message...</span>
</div>
<i className="w-5 h-5 text-stone-500" data-lucide="mic"></i>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<h2 className="reveal text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Memudahkan Operasi
                    Bisnes Anda.</h2>
<p className="reveal delay-100 text-stone-400 text-lg max-w-xl font-light">Solusi automasi yang direka untuk
                    memudahkan operasi harian,
                    mengurangkan kerja manual, dan memastikan semuanya berjalan lebih lancar.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 group hover:bg-neutral-900/80 transition-all duration-500 hover:border-neutral-700 bg-stone-900/50 border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center text-stone-200 mb-6 group-hover:text-white group-hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z">
</path>
</svg>
</div>
<h3 className="text-lg font-medium text-stone-200 tracking-tight mb-3">Follow Up Pantas</h3>
<p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                        Pastikan setiap lead dibalas, diingatkan, dan diproses dengan lebih konsisten untuk naikkan
                        conversion.
                    </p>
</div>

<div className="reveal delay-200 group hover:bg-neutral-900/80 transition-all duration-500 hover:border-neutral-700 bg-stone-900/50 border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center text-stone-200 mb-6 group-hover:text-white group-hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z">
</path>
<path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
<path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-3 tracking-tight">Kurangkan Kerja berulang</h3>
<p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                        Automasi tugas rutin seperti follow up, reminder, dan pengumpulan maklumat supaya team tak buang
                        masa buat benda sama setiap hari.
                    </p>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl border border-neutral-800 bg-stone-900/50 hover:bg-neutral-900/80 transition-all duration-500 hover:border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center text-stone-200 mb-6 group-hover:text-white group-hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
</path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-stone-200 tracking-tight mb-3">Mengukuhkan Jualan</h3>
<p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                        Bantu tingkatkan conversion dengan respons lebih cepat, follow up konsisten, dan pengalaman
                        pelanggan yang lebih teratur
                    </p>
</div>

<div className="reveal delay-100 md:col-span-2 group relative p-8 rounded-2xl border border-neutral-800 bg-stone-900/50 hover:bg-neutral-900/80 transition-all duration-500 hover:border-neutral-700 overflow-hidden">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center text-stone-200 mb-6">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 21v-6"></path>
<path d="M12 21V3"></path>
<path d="M19 21V9"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-3 tracking-tight">Jualan Meningkat</h3>
<p className="text-sm text-stone-500 leading-relaxed max-w-md group-hover:text-stone-400 transition-colors">
                            Dengan proses yang lebih tersusun, tindak balas yang laju, dan follow up yang konsisten
                            peluang close sale jadi lebih tinggi dan hasil jualan naik dengan lebih mudah.
                        </p>
</div>
<div className="absolute right-0 bottom-0 w-64 h-32 opacity-20 group-hover:opacity-40 transition-opacity translate-x-10 translate-y-10">
<svg className="w-full h-full stroke-stone-200" fill="none" strokeWidth="2" viewbox="0 0 200 100">
<path d="M0,80 C50,80 50,20 100,20 C150,20 150,60 200,60"></path>
</svg>
</div>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl border border-neutral-800 bg-stone-900/50 hover:bg-neutral-900/80 transition-all duration-500 hover:border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-stone-800/50 flex items-center justify-center text-stone-200 mb-6 group-hover:text-white group-hover:bg-stone-800 transition-colors">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<h3 className="text-lg font-medium text-stone-200 mb-3 tracking-tight">Jualan Seluruh Dunia</h3>
<p className="text-sm text-stone-500 leading-relaxed group-hover:text-stone-400 transition-colors">
                        Urus pelanggan dari mana-mana negara dengan respons automatik, sistem kemas, dan support 24/7
                        jadikan bisnes anda mampu menerima dan memproses jualan tanpa sempadan.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="staff">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16 max-w-3xl">
<h2 className="reveal text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    9 AI Staf yang akan meningkatkan produktiviti bisnes anda.
                </h2>
<p className="reveal delay-100 text-stone-400 text-lg font-light leading-relaxed">
                    Staff Ai kami akan membantu anda melakukan tugas yang berlainan dan
                    membantu bisnes anda berkembang di setiap peringkat.
                </p>
</div>

<div className="flex justify-end gap-3 mb-6 reveal delay-200">
<button className="w-10 h-10 rounded-full border border-neutral-800 bg-stone-900/50 text-stone-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-all" onclick="document.getElementById('staff-scroll').scrollBy({left: -350, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-800 bg-stone-900/50 text-stone-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-all" onclick="document.getElementById('staff-scroll').scrollBy({left: 350, behavior: 'smooth'})">
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="reveal delay-200 w-full flex gap-6 overflow-x-auto pb-12 pt-4 px-6 snap-x snap-mandatory no-scrollbar relative z-10" id="staff-scroll">

<div className="min-w-[300px] md:min-w-[340px] snap-center bg-stone-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 group">
<div className="text-center mb-6">
<h3 className="font-font-cursive text-3xl text-purple-400 mb-1 font-semibold tracking-tight" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Shah</h3>
<p className="text-sm font-medium text-stone-300">Salesperson</p>
</div>

<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-purple-900/10 to-transparent rounded-full opacity-50 blur-xl">
</div>
<div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-purple-500/20 to-purple-900/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-purple-300 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" data-lucide="instagram"></i>
</div>
</div>
<div className="space-y-3">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">What I can do:
                    </p>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-purple-900/30 text-purple-300"><i className="w-3.5 h-3.5" data-lucide="image"></i></span>
<span className="text-sm text-stone-300">Reply WhatsApp</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-purple-900/30 text-purple-300"><i className="w-3.5 h-3.5" data-lucide="calendar"></i></span>
<span className="text-sm text-stone-300">Follow up WhatsApp</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-purple-900/30 text-purple-300"><i className="w-3.5 h-3.5" data-lucide="bar-chart-2"></i></span>
<span className="text-sm text-stone-300">Faham bisnes anda</span>
</div>
</div>
<div className="mt-4 text-center">
<span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">Dan
                        banyak lagi...</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center bg-stone-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 group">
<div className="text-center mb-6">
<h3 className="font-font-cursive text-3xl text-teal-400 mb-1 font-semibold tracking-tight" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Maya</h3>
<p className="text-sm font-medium text-stone-300">Sosial media</p>
</div>
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-teal-900/10 to-transparent rounded-full opacity-50 blur-xl">
</div>
<div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-teal-500/20 to-teal-900/20 border border-teal-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-teal-300 drop-shadow-[0_0_15px_rgba(45,212,191,0.5)]" data-lucide="pen-tool"></i>
</div>
</div>
<div className="space-y-3">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">What I can do:
                    </p>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-teal-900/30 text-teal-300"><i className="w-3.5 h-3.5" data-lucide="edit-3"></i></span>
<span className="text-sm text-stone-300">Reply komen facebook atau IG</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-teal-900/30 text-teal-300"><i className="w-3.5 h-3.5" data-lucide="sliders"></i></span>
<span className="text-sm text-stone-300">Terus DM di FB atau IG</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-teal-900/30 text-teal-300"><i className="w-3.5 h-3.5" data-lucide="trending-up"></i></span>
<span className="text-sm text-stone-300">Combine lead</span>
</div>
</div>
<div className="mt-4 text-center">
<span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">Dan
                        banyak lagi...</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center bg-stone-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 group">
<div className="text-center mb-6">
<h3 className="font-font-cursive text-3xl text-blue-400 mb-1 font-semibold tracking-tight" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Aina</h3>
<p className="text-sm font-medium text-stone-300">Meeting Setter</p>
</div>
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-blue-900/10 to-transparent rounded-full opacity-50 blur-xl">
</div>
<div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-900/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-blue-300 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]" data-lucide="briefcase"></i>
</div>
</div>
<div className="space-y-3">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">What I can do:
                    </p>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-blue-900/30 text-blue-300"><i className="w-3.5 h-3.5" data-lucide="chess-knight"></i></span>
<span className="text-sm text-stone-300">Book Appointment</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-blue-900/30 text-blue-300"><i className="w-3.5 h-3.5" data-lucide="search"></i></span>
<span className="text-sm text-stone-300">Remind Appointment</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-blue-900/30 text-blue-300"><i className="w-3.5 h-3.5" data-lucide="users"></i></span>
<span className="text-sm text-stone-300">Sync dengan google calender</span>
</div>
</div>
<div className="mt-4 text-center">
<span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">Dan
                        banyak lagi...</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center bg-stone-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 group">
<div className="text-center mb-6">
<h3 className="font-font-cursive text-3xl text-yellow-400 mb-1 font-semibold tracking-tight" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Wawa</h3>
<p className="text-sm font-medium text-stone-300">Webinar Expert</p>
</div>
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-yellow-900/10 to-transparent rounded-full opacity-50 blur-xl">
</div>
<div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-yellow-500/20 to-yellow-900/20 border border-yellow-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" data-lucide="clock"></i>
</div>
</div>
<div className="space-y-3">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">What I can do:
                    </p>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-yellow-900/30 text-yellow-300"><i className="w-3.5 h-3.5" data-lucide="calendar-check"></i></span>
<span className="text-sm text-stone-300">Blast Link</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-yellow-900/30 text-yellow-300"><i className="w-3.5 h-3.5" data-lucide="file-text"></i></span>
<span className="text-sm text-stone-300">Follow Up peserta</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-yellow-900/30 text-yellow-300"><i className="w-3.5 h-3.5" data-lucide="list-checks"></i></span>
<span className="text-sm text-stone-300">Run webinar Automatik</span>
</div>
</div>
<div className="mt-4 text-center">
<span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">Dan
                        banyak lagi...</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[340px] snap-center bg-stone-900 border border-neutral-800 rounded-2xl p-6 hover:border-neutral-600 transition-all duration-300 group">
<div className="text-center mb-6">
<h3 className="font-font-cursive text-3xl text-orange-400 mb-1 font-semibold tracking-tight" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Hans</h3>
<p className="text-sm font-medium text-stone-300">Customer Support</p>
</div>
<div className="h-48 mb-8 relative flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-orange-900/10 to-transparent rounded-full opacity-50 blur-xl">
</div>
<div className="relative w-32 h-32 rounded-full bg-gradient-to-b from-orange-500/20 to-orange-900/20 border border-orange-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
<i className="w-16 h-16 text-orange-300 drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]" data-lucide="layout"></i>
</div>
</div>
<div className="space-y-3">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-3">What I can do:
                    </p>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-orange-900/30 text-orange-300"><i className="w-3.5 h-3.5" data-lucide="monitor"></i></span>
<span className="text-sm text-stone-300">Reply Enquiry 24 jam</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-orange-900/30 text-orange-300"><i className="w-3.5 h-3.5" data-lucide="megaphone"></i></span>
<span className="text-sm text-stone-300">Google review 5 star</span>
</div>
<div className="p-3 rounded-lg border border-neutral-800 bg-stone-950/30 flex items-center gap-3 hover:bg-stone-800/50 transition-colors">
<span className="p-1 rounded bg-orange-900/30 text-orange-300"><i className="w-3.5 h-3.5" data-lucide="mouse-pointer"></i></span>
<span className="text-sm text-stone-300">Jawab FAQ</span>
</div>
</div>
<div className="mt-4 text-center">
<span className="text-xs text-stone-500 hover:text-stone-300 cursor-pointer transition-colors">Dan
                        banya lagi...</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-stone-950/30 border-y border-neutral-900" id="past-projects">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-stone-900/50 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Live Result</span>
</div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                        Automasi Jualan <br/>
<span className="text-gradient">Broadband &amp; Internet.</span>
</h2>
<p className="text-stone-400 text-lg font-light leading-relaxed mb-8 max-w-lg">
                        Lihat bagaimana <span className="text-white font-medium">Fiber Kencang</span> menggunakan AI Staff untuk filter pelanggan, semak coverage, dan close sales secara automatik 24 jam sehari.
                    </p>
</div>
<div className="grid grid-cols-2 gap-6 mb-10 reveal delay-100">
<div className="p-4 rounded-xl border border-neutral-800 bg-stone-900/50">
<p className="text-3xl font-semibold text-white mb-1">+60%</p>
<p className="text-xs text-stone-500 uppercase tracking-wider">Lead Response Rate</p>
</div>
<div className="p-4 rounded-xl border border-neutral-800 bg-stone-900/50">
<p className="text-3xl font-semibold text-white mb-1">500+</p>
<p className="text-xs text-stone-500 uppercase tracking-wider">Pelanggan Sebulan</p>
</div>
</div>
<div className="reveal delay-200">
<a className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors border-b border-stone-700 hover:border-white pb-1" href="#">
                        Lihat Case Study Penuh
                        <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center reveal delay-200">

<div className="relative w-[320px] h-[650px] border-[12px] border-stone-800 rounded-[3rem] bg-stone-950 phone-shadow transform hover:scale-[1.02] transition-transform duration-500">

<div className="absolute top-28 -left-[14px] w-[3px] h-8 bg-stone-700 rounded-l-md"></div>
<div className="absolute top-44 -left-[14px] w-[3px] h-14 bg-stone-700 rounded-l-md"></div>
<div className="absolute top-64 -left-[14px] w-[3px] h-14 bg-stone-700 rounded-l-md"></div>
<div className="absolute top-36 -right-[14px] w-[3px] h-20 bg-stone-700 rounded-r-md"></div>

<div className="w-full h-full rounded-[2.2rem] bg-stone-900 overflow-hidden relative">

<div className="absolute top-0 w-full flex justify-center z-30 pt-3 pointer-events-none">
<div className="w-28 h-7 bg-black rounded-full flex items-center justify-center gap-2 px-3">
<div className="w-1.5 h-1.5 rounded-full bg-stone-800"></div>
</div>
</div>

<div className="absolute top-3 left-8 z-30 pointer-events-none">
<span className="text-[10px] font-semibold text-white">9:41</span>
</div>
<div className="absolute top-3 right-8 z-30 pointer-events-none flex gap-1">
<div className="w-4 h-2.5 border border-stone-500 rounded-[2px]">
<div className="w-3 h-full bg-white"></div>
</div>
</div>

<div className="absolute top-10 left-0 w-full z-20 px-4 pb-2 bg-stone-900 border-b border-stone-800/50">
<div className="bg-stone-800 rounded-lg py-1.5 flex items-center justify-center gap-1.5 px-3">
<i className="w-2.5 h-2.5 text-stone-400" data-lucide="lock"></i>
<span className="text-[10px] text-stone-300 font-medium">fiberkencang.my</span>
</div>
</div>

<div className="w-full h-full overflow-y-auto no-scrollbar pt-[88px] bg-stone-50">

<div className="relative bg-gradient-to-br from-red-600 to-orange-500 p-6 pt-6 pb-8 text-white">
<div className="flex justify-between items-center mb-6">
<div className="font-bold text-lg italic tracking-tighter">FiberKencang<span className="text-yellow-300">.my</span></div>
<i className="w-5 h-5" data-lucide="menu"></i>
</div>
<h2 className="text-2xl font-bold leading-none mb-2 tracking-tight">Internet Laju. <br/>Tanpa Had.</h2>
<p className="text-xs text-white/90 mb-4 font-light max-w-[80%]">Pakej broadband terbaik untuk rumah &amp; pejabat anda bermula hari ini.</p>
<div className="inline-block bg-white text-red-600 px-4 py-2 rounded-full text-xs font-bold shadow-lg">Semak Coverage</div>

<div className="absolute bottom-0 right-0 w-24 h-24 bg-white/10 rounded-tl-full"></div>
</div>

<div className="p-4 space-y-3 -mt-4 relative z-10">

<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold border border-blue-100 text-xs">
                                            100
                                        </div>
<div>
<div className="font-bold text-stone-900 text-sm">100 Mbps</div>
<div className="text-[10px] text-stone-500">Best Seller</div>
</div>
</div>
<div className="text-right">
<div className="font-bold text-stone-900 text-sm">RM89</div>
<div className="text-[9px] text-stone-400">/bulan</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold border border-purple-100 text-xs">
                                            300
                                        </div>
<div>
<div className="font-bold text-stone-900 text-sm">300 Mbps</div>
<div className="text-[10px] text-stone-500">Streaming 4K</div>
</div>
</div>
<div className="text-right">
<div className="font-bold text-stone-900 text-sm">RM129</div>
<div className="text-[9px] text-stone-400">/bulan</div>
</div>
</div>

<div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center justify-between opacity-80">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold border border-orange-100 text-xs">
                                            500
                                        </div>
<div>
<div className="font-bold text-stone-900 text-sm">500 Mbps</div>
<div className="text-[10px] text-stone-500">Gaming</div>
</div>
</div>
<div className="text-right">
<div className="font-bold text-stone-900 text-sm">RM159</div>
<div className="text-[9px] text-stone-400">/bulan</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-4 right-4 z-30 flex flex-col items-end pointer-events-none">

<div className="bg-white p-3 rounded-2xl rounded-tr-sm shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-stone-100 mb-2 w-48 animate-[fadeInUp_0.5s_ease-out_1s_forwards] opacity-0 transform origin-bottom-right">
<div className="flex items-center gap-2 mb-1.5 border-b border-stone-50 pb-1.5">
<div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-[8px] text-white font-bold">A</div>
<span className="text-[9px] font-semibold text-stone-800">Support Agent</span>
</div>
<p className="text-[10px] text-stone-600 leading-tight">Hi! 👋 Nak check coverage area rumah anda? Saya boleh bantu sekarang.</p>
<div className="mt-2 flex gap-1.5">
<span className="text-[8px] bg-red-50 text-red-600 font-medium px-2 py-1 rounded-md border border-red-100">Ya, Check</span>
<span className="text-[8px] bg-stone-50 text-stone-500 font-medium px-2 py-1 rounded-md border border-stone-100">Info Pakej</span>
</div>
</div>

<div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg text-white relative">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center">
<span className="text-[8px] font-bold text-white">1</span>
</div>
</div>
</div>

<div className="absolute bottom-2 w-full flex justify-center z-30 pointer-events-none">
<div className="w-32 h-1 bg-stone-900/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-neutral-800/50 bg-stone-900/30" id="testimonials">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="reveal text-3xl md:text-4xl font-medium tracking-tight text-white">Dipercayai para founder.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-200 to-stone-500"></div>
<div>
<div className="text-sm font-medium text-stone-200">En Faizal</div>
<div className="text-xs text-stone-500">Pemilik bengkel kereta @ Infiniy Service Center</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"The attention to detail in Kronos is unmatched.
                        It feels like an extension of my own thought process. Absolutely essential."</p>
</div>

<div className="reveal delay-200 p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-stone-600 to-stone-800"></div>
<div>
<div className="text-sm font-medium text-stone-200">Puan Nadiah</div>
<div className="text-xs text-stone-500">Agen produk @ Cuckoo</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"We switched our entire project management flow to
                        this platform. The speed improvements alone were worth it."</p>
</div>

<div className="reveal delay-300 p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-400"></div>
<div>
<div className="text-sm font-medium text-stone-200">Chef Nua</div>
<div className="text-xs text-stone-500">Produk founder @ Mandian pati Semambu</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"Minimalist yet incredibly powerful. It doesn't
                        get in your way, it just helps you ship faster."</p>
</div>
</div>

<div className="hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6" id="more-testimonials">

<div className="p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600"></div>
<div>
<div className="text-sm font-medium text-stone-200">En Iqbal</div>
<div className="text-xs text-stone-500">Founder @ Stad Travel</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"The AI staff agents completely automated our
                        social calendar. I have so much more time for strategy."</p>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600"></div>
<div>
<div className="text-sm font-medium text-stone-200">Encik Aboy</div>
<div className="text-xs text-stone-500">Pemilik bisnes service Aircond</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"I was skeptical at first, but the ROI has been
                        undeniable. The business strategy insights are top tier."</p>
</div>

<div className="p-6 rounded-xl border border-neutral-800 bg-stone-950/40 backdrop-blur-sm">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
<div>
<div className="text-sm font-medium text-stone-200">Mr Wing</div>
<div className="text-xs text-stone-500">Koolah @ Filter Mall</div>
</div>
</div>
<p className="text-sm text-stone-400 leading-relaxed">"Having Penn write my copy and Soshie handle the
                        distribution is like having a full marketing team for free."</p>
</div>
</div>
<div className="flex justify-center mt-12">
<button className="reveal delay-300 text-stone-300 text-sm font-medium border border-neutral-800 bg-stone-900/50 hover:bg-stone-800 hover:text-white px-6 py-2.5 rounded-full transition-all flex items-center gap-2" id="load-more-btn" onclick="showMoreTestimonials()">
                    Read more reviews
                    <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="pricing">
<div className="max-w-7xl mr-auto ml-auto">
<div className="flex flex-col items-center mb-16">
<h2 className="reveal text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Pakej istimewa kami.</h2>

<div className="reveal delay-100 flex items-center justify-center gap-3">
<span className="text-sm text-stone-400">Bulanan</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only peer toggle-checkbox" id="toggle" type="checkbox"/>
<div className="w-11 h-6 bg-stone-800 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-stone-600 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all">
</div>
</label>
<span className="text-sm text-stone-200 font-medium">Yearly <span className="text-xs text-stone-500 ml-1">(Save 20%)</span></span>
</div>
</div>
<div className="grid items-center grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 justify-center mx-auto max-w-6xl">

<div className=""></div>

<div className="reveal delay-200 p-8 rounded-2xl border border-stone-600 bg-stone-800/20 flex flex-col relative shadow-[0_0_40px_-10px_rgba(255,255,255,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-stone-200 text-stone-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                        Pendaftaran Awal</div>
<div className="mb-4 justify-center">
<h3 className="text-base font-medium text-stone-100">Promo</h3>
<p className="text-sm text-stone-400 mt-1">Tawaran terhad.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white tracking-tight">RM600</span>
<span className="text-stone-500">/mo</span>
</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-center gap-2 text-sm text-stone-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Percuma Video AI untuk marketing
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> Percuma Jobtepi akaun untuk cari Freelancer
                        </li>
<li className="flex items-center gap-2 text-sm text-stone-300">
<i className="w-4 h-4 text-white" data-lucide="check"></i> penyelenggaraan bulanan percuma
                        </li>
</ul>
<a className="w-full py-3 rounded-lg bg-stone-100 text-stone-900 text-sm font-medium hover:bg-white transition-colors text-center shadow-lg shadow-stone-900/20" href="#">Subscribe</a>
</div>

<div className=""></div>
</div>
</div>
</section>

<footer className="border-t border-neutral-800 pt-16 pb-8 bg-stone-950 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-semibold tracking-tighter text-stone-100 flex items-center gap-2 mb-4" href="#">
<span className="w-5 h-5 bg-stone-100 text-stone-900 flex items-center justify-center rounded-sm text-xs font-bold">K</span>
                    AiMan Cloudworks
                </a>
<p className="text-xs text-stone-500 leading-relaxed">
                    Supplier Ai Staff No 1 Di Asia.<br/>
                    Kajang, Selangor.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-200 mb-4 uppercase tracking-wider">Servis</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Fungsi</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Intergrasi</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-200 mb-4 uppercase tracking-wider">Syarikat</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Tentang kami </a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Sertai komuniti</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-200 mb-4 uppercase tracking-wider">Sosial</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-stone-300 transition-colors" href="#">Tiktok</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">Facebook</a></li>
<li><a className="hover:text-stone-300 transition-colors" href="#">instagram</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-900">
<div className="text-xs text-stone-600 mb-4 md:mb-0">
                © 2025 AiMan Cloudworks All rights reserved.
            </div>
<div className="flex gap-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs text-stone-500">All systems operational</span>
</div>
</div>
</footer>


    </>
  );
}
