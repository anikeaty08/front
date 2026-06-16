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
colors: {
granola: {
orange: '#d97736',
dark: '#141311',
card: '#1e1c19',
cardHover: '#26231f',
border: '#2e2b26',
text: '#c9c5be',
muted: '#8f8c85',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
backgroundImage: {
'hero-glow': 'radial-gradient(circle at 60% 40%, rgba(217, 119, 54, 0.2) 0%, rgba(20, 19, 17, 1) 60%)',
'card-glow': 'radial-gradient(circle at top, rgba(255,255,255,0.05) 0%, transparent 70%)',
'orange-glow': 'radial-gradient(circle at center, rgba(217, 119, 54, 0.4) 0%, transparent 70%)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          strokeWidth: 1.5
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 bg-granola-dark/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-32">
<div className="flex items-center gap-2">
<img alt="SynAppLink" className="w-auto h-28" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ce7d99b-be16-44d3-b493-8c77f5977977_320w.png"/>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-granola-text">
<a className="hover:text-white transition-colors font-sans" href="#">
            Features
          </a>
<a className="hover:text-white transition-colors font-sans" href="#">
            Pricing
          </a>
<a className="hover:text-white transition-colors font-sans" href="#">
            Blog
          </a>
<a className="hover:text-white transition-colors font-sans" href="#">
            Careers
          </a>
</div>
<a className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-black text-base font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
          Download
        </a>
</div>
</nav>

<section className="overflow-hidden min-h-[90vh] flex pt-40 pb-20 relative items-center">

<div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bdb6d3e2-b548-407d-b856-0cf5242a67c6_1600w.png\')', backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to left, black 30%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to left, black 30%, transparent 100%)'}}></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10">
<div className="max-w-2xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] tracking-tight mb-8 font-sans font-semibold">
            The AI Notepad
            <br/>
            That Helps You Get
            <br/>
            The Doing Done.
          </h1>
<p className="text-xl text-granola-text mb-10 leading-relaxed max-w-xl font-sans font-semibold">
            Granola takes your raw meeting notes and makes them awesome. Granola
            is an AI-powered notepad designed to help you focus on what matters
            most—getting things discussion to execution faster done.
          </p>
<div className="flex flex-wrap items-center gap-4">
<a className="px-6 py-3 rounded-full bg-granola-orange text-white text-base font-normal hover:bg-opacity-90 transition-colors shadow-[0_0_20px_rgba(217,119,54,0.4)] font-sans" href="#">
              Get Early Access
            </a>
<a className="px-6 py-3 rounded-full bg-white/5 text-white text-base font-normal hover:bg-white/10 transition-colors backdrop-blur-sm flex items-center gap-2 border border-white/10 font-sans" href="#">
<i className="w-5 h-5" data-lucide="apple"></i>
              Download For Mac
            </a>
</div>
</div>


<div className="absolute bottom-10 right-10 hidden lg:flex gap-4">
<div className="bg-granola-card/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-48">
<div className="text-sm text-granola-muted mb-2 font-sans">
              Trusted by 1M+
              <br/>
              Users Worldwide
            </div>
<div className="text-4xl text-white tracking-tight font-sans font-semibold">
              2026
            </div>
</div>
<div className="bg-granola-card/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-64 flex flex-col justify-between">
<div className="text-xl text-white leading-tight mb-4 font-sans font-semibold">
              The AI Notepad That Helps You Get The Doing Done.
            </div>
<div className="flex items-center gap-2 text-sm text-granola-muted font-sans">
<i className="w-4 h-4" data-lucide="play-circle"></i>
              Try Granola Free
            </div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-granola-dark relative z-20">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium tracking-[0.2em] text-granola-muted uppercase mb-8 font-sans">
          Trusted by teams at
        </p>
<div className="flex flex-wrap justify-center gap-10 md:gap-20 items-center opacity-50 grayscale">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded-full border-[3px] border-current"></div>
<span className="text-xl tracking-tight font-sans font-semibold">
              Linear
            </span>
</div>
<div className="flex items-center gap-2">
<span className="text-xl tracking-tight font-sans font-semibold">
              ramp
            </span>
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<span className="text-xl tracking-tight font-sans font-semibold">
            Index Ventures
          </span>
<span className="text-xl tracking-tight flex items-center gap-1 font-sans font-semibold">
<div className="w-5 h-5 bg-current rounded-sm mask-image-posthog"></div>
            PostHog
          </span>
<span className="text-xl tracking-tight uppercase tracking-wider font-sans font-semibold">
            Intercom
          </span>
</div>
</div>
</section>

<section className="py-32 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-muted uppercase tracking-[0.1em] mb-6 font-sans">
            How it works
          </span>
<h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight leading-tight font-sans font-semibold">
            Granola is like Apple Notes, but it also transcribes your meeting
          </h2>
<p className="text-granola-text text-xl font-sans font-semibold">
            When the meeting ends, Granola automatically enhances the notes
            you've written during the conversation. It organizes your thoughts,
            improves clarity, and turns rough notes into structured summaries
            and actionable insights you can use right away.
          </p>
</div>

<div className="grid md:grid-cols-2 gap-6 mb-6">

<div className="bg-granola-card rounded-3xl p-8 border border-white/5 hover:bg-granola-cardHover transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>
<div className="h-64 rounded-xl bg-[#181614] mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-card-glow opacity-50"></div>

<div className="w-[80%] bg-[#1c1a18] border border-white/10 rounded-xl p-4 shadow-lg relative z-10">
<div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
<div className="w-6 h-6 rounded-full bg-red-500/20 text-red-500 flex items-center justify-center">
<i className="w-3 h-3" data-lucide="bot"></i>
</div>
<div className="text-base text-white font-sans">
                    What's An AI Note-Taker?
                  </div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded bg-orange-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-orange-500" data-lucide="mic"></i>
</div>
<div className="text-sm text-white font-sans">
                        AI Notetaker Wants To Record This Meeting
                      </div>
</div>
<span className="text-xs text-granola-orange font-sans">
                      New
                    </span>
</div>
<div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/5">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
<i className="w-3 h-3 text-green-500" data-lucide="user"></i>
</div>
<div className="text-sm text-white font-sans">
                        Jonathan's AI Notetaker
                      </div>
</div>
<span className="text-xs text-granola-orange font-sans">
                      New
                    </span>
</div>
</div>
</div>
</div>
<h3 className="text-3xl text-white mb-4 tracking-tight font-sans font-semibold">
              No Invasive Bots
            </h3>
<p className="text-granola-muted text-lg font-light mb-8 leading-relaxed font-sans">
              Granola doesn't join your meetings as a visible participant.
              Instead, it quietly listens to your computer's audio and
              transcribes your calls in real time. This allows you to capture
              every important detail of the conversation.
            </p>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black text-base font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
              Read More
            </a>
</div>

<div className="bg-granola-card rounded-3xl p-8 border border-white/5 hover:bg-granola-cardHover transition-colors group relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none"></div>
<div className="h-64 rounded-xl bg-[#181614] mb-8 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-orange-glow opacity-20"></div>

<div className="flex items-center justify-center w-full relative z-10">
<i className="w-20 h-20 text-white/90" data-lucide="apple"></i>
<div className="absolute right-4 top-4 bg-[#1c1a18] border border-white/10 rounded-xl p-3 w-48 shadow-lg">
<div className="text-sm text-white mb-2 font-sans">
                    How can we help you?
                  </div>
<div className="h-8 bg-white/5 rounded flex items-center px-2 mb-3 border border-white/5">
<i className="w-3 h-3 text-granola-muted mr-2" data-lucide="search"></i>
<div className="h-1.5 w-16 bg-white/10 rounded"></div>
</div>
<div className="grid grid-cols-2 gap-2">
<div className="h-10 bg-white/5 rounded border border-white/5"></div>
<div className="h-10 bg-white/5 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
<h3 className="text-3xl text-white mb-4 tracking-tight font-sans font-semibold">
              Automatically Enhances Notes
            </h3>
<p className="text-granola-muted text-lg font-light mb-8 leading-relaxed font-sans">
              After every meeting, Granola automatically refines your notes and
              turns them into organized summaries and next steps. Within
              seconds, your meeting insights are ready to review, share, and
              turn into action.
            </p>
<a className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black text-base font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
              Read More
            </a>
</div>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-granola-card rounded-3xl p-6 border border-white/5 hover:bg-granola-cardHover transition-colors relative overflow-hidden">
<div className="h-48 rounded-xl bg-[#181614] mb-6 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="w-[85%] bg-[#1c1a18] border border-white/10 rounded-xl p-3 shadow-lg">
<div className="text-xs text-granola-muted mb-3 flex items-center justify-between">
<span className="font-sans">
                    What are our top feature requests?
                  </span>
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 bg-white/5 rounded border border-white/5">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
<div>
<div className="text-sm text-white font-sans">
                          Sales Calls
                        </div>
<div className="text-[10px] text-granola-muted font-sans">
                          Calls With Potential Customers
                        </div>
</div>
</div>
<span className="text-[10px] text-granola-orange font-sans">
                      New
                    </span>
</div>
</div>
</div>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">
              Spot Opportunities
            </h3>
<p className="text-granola-muted text-base font-light mb-6 leading-relaxed font-sans">
              Search across all calls to find trends, objections, or
              decision-maker insights. Granola organizes meeting data.
            </p>
<a className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
              Read More
            </a>
</div>

<div className="bg-granola-card rounded-3xl p-6 border border-white/5 hover:bg-granola-cardHover transition-colors relative overflow-hidden">
<div className="h-48 rounded-xl bg-[#181614] mb-6 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="w-[85%] bg-[#1c1a18] border border-white/10 rounded-xl p-3 shadow-lg">
<div className="flex items-center gap-2 text-xs text-white mb-2 pb-2 border-b border-white/5 font-sans">
<i className="w-3 h-3 text-granola-orange" data-lucide="sparkles"></i>
                  Can You Make This More Concise?
                </div>
<div className="text-sm text-white mb-2 font-medium font-sans">
                  Contract Discussion
                </div>
<ul className="text-[10px] text-granola-muted space-y-1 pl-3 list-disc">
<li className="font-sans">Scope Implementation + Monthly</li>
<li className="font-sans">Flexibility: Minor Adjustments</li>
<li className="font-sans">Pricing: $5K/mo (5% annual)</li>
</ul>
</div>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">
              Edit Instantly
            </h3>
<p className="text-granola-muted text-base font-light mb-6 leading-relaxed font-sans">
              Make direct edits or ask Granola for changes like "make this more
              concise". Update notes manually let Granola refine.
            </p>
<a className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
              Read More
            </a>
</div>

<div className="bg-granola-card rounded-3xl p-6 border border-white/5 hover:bg-granola-cardHover transition-colors relative overflow-hidden">
<div className="h-48 rounded-xl bg-[#181614] mb-6 border border-white/5 relative overflow-hidden flex flex-col items-center justify-center p-4">
<div className="flex -space-x-2 mb-4">
<div className="w-8 h-8 rounded-full border border-[#181614] bg-blue-500/20"></div>
<div className="w-8 h-8 rounded-full border border-[#181614] bg-green-500/20"></div>
<div className="w-8 h-8 rounded-full border border-[#181614] bg-purple-500/20"></div>
</div>
<div className="bg-white/10 px-3 py-1 rounded-full text-xs text-white flex items-center gap-1 font-sans">
<i className="w-3 h-3" data-lucide="share"></i>
                Share
              </div>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">
              Collaborate With Your Team
            </h3>
<p className="text-granola-muted text-base font-light mb-6 leading-relaxed font-sans">
              Easily share your meeting calls, notes, important action items in
              seconds. Granola helps teams stay connected.
            </p>
<a className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
              Read More
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-2xl">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-muted uppercase tracking-[0.1em] mb-6 font-sans">
              Features
            </span>
<h2 className="text-4xl md:text-5xl text-white mb-4 tracking-tight leading-tight font-sans font-semibold">
              Granola has become indispensable
              <br/>
              feels like I'm living in the future.
            </h2>
<p className="text-granola-text text-xl font-sans font-semibold">
              Granola has completely transformed the way I handle meetings. It
              captures conversations, organizes my notes, and highlights the
              most important insights automatically.
            </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-granola-orange flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 -mx-6 px-6">

<div className="min-w-[600px] flex-shrink-0 bg-granola-card rounded-3xl p-8 border border-white/5 flex items-center gap-8 group hover:bg-granola-cardHover transition-colors">
<div className="w-1/2 h-48 rounded-xl bg-[#181614] border border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSI+PC9jaXJjbGU+Cjwvc3ZnPg==')] opacity-50"></div>
<div className="absolute inset-4 bg-[#1c1a18] border border-white/10 rounded-lg p-4">
<div className="w-24 h-3 bg-white/10 rounded mb-3"></div>
<div className="space-y-2">
<div className="w-full h-2 bg-white/5 rounded"></div>
<div className="w-4/5 h-2 bg-white/5 rounded"></div>
<div className="w-full h-2 bg-white/5 rounded"></div>
</div>
</div>
</div>
<div className="w-1/2">
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">
                Get notes in the format your team needs.
              </h3>
<p className="text-granola-muted text-base font-light mb-6 font-sans">
                Make use of customizable templates for your most common meeting
                types like customer discovery calls, user interviews or 1 on 1s.
              </p>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-normal hover:bg-gray-200 transition-colors font-sans" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
                Download For Mac
              </a>
</div>
</div>

<div className="min-w-[600px] flex-shrink-0 bg-granola-card rounded-3xl p-8 border border-white/5 flex items-center gap-8 group hover:bg-granola-cardHover transition-colors">
<div className="w-1/2 h-48 rounded-xl bg-[#181614] border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-orange-glow opacity-30"></div>
<div className="flex gap-4 relative z-10">
<div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30"></div>
<div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center border border-green-500/30"></div>
<div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30"></div>
</div>
</div>
<div className="w-1/2">
<h3 className="text-2xl text-white mb-3 tracking-tight font-sans font-semibold">
                Works on all platforms, no meeting bots.
              </h3>
<p className="text-granola-muted text-base font-light mb-6 font-sans">
                Granola transcribes your computer's audio directly, with no
                meeting bots joining your call.
              </p>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-normal hover:bg-white/20 transition-colors border border-white/10 font-sans" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
                Download For Mac
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-20 overflow-hidden bg-granola-dark" id="about-section">
<div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-granola-orange/5 blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center mb-6">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-orange uppercase tracking-[0.1em] mb-6 font-sans">
<i className="w-3 h-3" data-lucide="zap"></i>
            Discover Our Story
          </span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-sans font-semibold text-center mb-4">
            About Us
          </h2>
<div className="w-24 h-1 bg-granola-orange rounded-full"></div>
</div>
<p className="text-center max-w-2xl mx-auto mb-16 text-granola-text text-xl font-sans font-semibold leading-relaxed">
          We are a passionate team of designers and architects dedicated to
          creating beautiful, functional spaces that inspire and elevate
          everyday living. With attention to detail and commitment to
          excellence, we transform visions into reality.
        </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-24">
<div className="space-y-12">
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="pen"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Interior
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Transform your living spaces with our expert interior design
                services. We blend functionality and aesthetics to create spaces
                that reflect your unique style and personality.
              </p>
</div>
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="home"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="check-circle"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Exterior
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Make a lasting impression with stunning exterior designs that
                enhance curb appeal and create harmonious connections between
                architecture and landscape.
              </p>
</div>
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="pen-tool"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="star"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Design
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Our innovative design process combines creativity with
                practicality, resulting in spaces that are both beautiful and
                functional for everyday living.
              </p>
</div>
</div>
<div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0 relative">
<div className="relative w-full max-w-xs group">
<div className="rounded-2xl overflow-hidden shadow-xl border border-white/10 relative z-10">
<img alt="Modern House" className="w-full h-[450px] object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1747582411588-f9b4acabe995?q=80&amp;w=3027&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6">
<button className="bg-white text-black px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium hover:bg-gray-200 transition-colors font-sans">
                    Our Portfolio
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div className="absolute inset-0 border-4 border-granola-orange/30 rounded-2xl -m-4 z-0 opacity-50"></div>
</div>
</div>
<div className="space-y-12">
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="paint-bucket"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Decoration
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Elevate your space with our curated decoration services. From
                color schemes to textiles and accessories, we perfect every
                detail to bring your vision to life.
              </p>
</div>
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="ruler"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="check-circle"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Planning
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Our meticulous planning process ensures every project runs
                smoothly from concept to completion, with careful attention to
                timelines, budgets, and requirements.
              </p>
</div>
<div className="flex flex-col group cursor-pointer">
<div className="flex items-center gap-3 mb-3">
<div className="text-granola-orange bg-granola-orange/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-granola-orange/20 relative">
<i className="w-6 h-6" data-lucide="building-2"></i>
<i className="w-4 h-4 absolute -top-1 -right-1 text-white/50" data-lucide="star"></i>
</div>
<h3 className="text-xl font-medium text-white group-hover:text-granola-orange transition-colors duration-300 font-sans">
                  Execution
                </h3>
</div>
<p className="text-sm text-granola-muted leading-relaxed pl-12 font-sans">
                Watch your dream space come to life through our flawless
                execution. Our skilled team handles every aspect of
                implementation with precision and care.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
<div className="bg-granola-card border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-granola-cardHover transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-granola-orange group-hover:bg-granola-orange/10 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="award"></i>
</div>
<div className="text-3xl font-bold text-white flex items-center font-sans tracking-tight">
<span>150</span>
<span>+</span>
</div>
<p className="text-granola-muted text-sm mt-2 font-sans">
              Projects Completed
            </p>
<div className="w-10 h-0.5 bg-granola-orange mt-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
</div>
<div className="bg-granola-card border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-granola-cardHover transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-granola-orange group-hover:bg-granola-orange/10 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="users"></i>
</div>
<div className="text-3xl font-bold text-white flex items-center font-sans tracking-tight">
<span>1200</span>
<span>+</span>
</div>
<p className="text-granola-muted text-sm mt-2 font-sans">
              Happy Clients
            </p>
<div className="w-10 h-0.5 bg-granola-orange mt-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
</div>
<div className="bg-granola-card border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-granola-cardHover transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-granola-orange group-hover:bg-granola-orange/10 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="calendar"></i>
</div>
<div className="text-3xl font-bold text-white flex items-center font-sans tracking-tight">
<span>12</span>
</div>
<p className="text-granola-muted text-sm mt-2 font-sans">
              Years Experience
            </p>
<div className="w-10 h-0.5 bg-granola-orange mt-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
</div>
<div className="bg-granola-card border border-white/5 p-6 rounded-2xl flex flex-col items-center text-center group hover:bg-granola-cardHover transition-colors duration-300">
<div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-granola-orange group-hover:bg-granola-orange/10 transition-colors duration-300">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<div className="text-3xl font-bold text-white flex items-center font-sans tracking-tight">
<span>98</span>
<span>%</span>
</div>
<p className="text-granola-muted text-sm mt-2 font-sans">
              Satisfaction Rate
            </p>
<div className="w-10 h-0.5 bg-granola-orange mt-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
</div>
</div>
<div className="bg-granola-card border border-white/10 text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-granola-orange/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
<div className="flex-1 relative z-10 text-center md:text-left">
<h3 className="text-2xl font-semibold mb-2 font-sans tracking-tight">
              Ready to transform your space?
            </h3>
<p className="text-granola-muted font-sans">
              Let's create something beautiful together.
            </p>
</div>
<button className="bg-granola-orange hover:bg-opacity-90 text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 font-medium transition-colors shadow-[0_0_20px_rgba(217,119,54,0.3)] font-sans relative z-10 shrink-0">
            Get Started
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>
<section className="py-20 border-t border-white/5 bg-granola-dark relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-muted uppercase tracking-[0.1em] mb-6 font-sans">
            Integrations
          </span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-sans font-semibold mb-4">
            Connects with your stack
          </h2>
<p className="text-granola-text text-xl font-sans font-semibold max-w-2xl mx-auto">
            Push notes, action items, and summaries directly to the tools your
            team already uses.
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-granola-card rounded-2xl p-6 border border-white/5 flex items-center gap-4 hover:bg-granola-cardHover transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="slack"></i>
</div>
<span className="text-white font-sans font-medium text-lg">Slack</span>
</div>
<div className="bg-granola-card rounded-2xl p-6 border border-white/5 flex items-center gap-4 hover:bg-granola-cardHover transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="trello"></i>
</div>
<span className="text-white font-sans font-medium text-lg">Trello</span>
</div>
<div className="bg-granola-card rounded-2xl p-6 border border-white/5 flex items-center gap-4 hover:bg-granola-cardHover transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="github"></i>
</div>
<span className="text-white font-sans font-medium text-lg">GitHub</span>
</div>
<div className="bg-granola-card rounded-2xl p-6 border border-white/5 flex items-center gap-4 hover:bg-granola-cardHover transition-colors">
<div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
<i className="w-6 h-6 text-white" data-lucide="figma"></i>
</div>
<span className="text-white font-sans font-medium text-lg">Figma</span>
</div>
</div>
</div>
</section>
<section className="py-32 relative z-20">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-muted uppercase tracking-[0.1em] mb-6 font-sans">
            FAQ
          </span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight font-sans font-semibold">
            Questions And Answers
          </h2>
</div>
<div className="space-y-3">

<div className="bg-granola-card border border-white/10 rounded-2xl overflow-hidden">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-medium text-white tracking-tight font-sans">
                Is Granola an AI note taker for product managers?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-up"></i>
</button>
<div className="px-6 pb-6 text-granola-muted text-base font-light leading-relaxed font-sans">
              It can be, but we built Granola to be even more than that. It
              transcribes, enhances your notes, extracts insights, and lets you
              search across all conversations to find patterns.
            </div>
</div>

<div className="bg-transparent border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-normal text-granola-text tracking-tight font-sans">
                Does Granola integrate with my product tools?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-transparent border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-normal text-granola-text tracking-tight font-sans">
                Can I use Granola for internal product meetings?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-transparent border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-normal text-granola-text tracking-tight font-sans">
                Will it work for calls outside of Zoom or Google Meet?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-transparent border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-normal text-granola-text tracking-tight font-sans">
                How does Granola help with user research?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-down"></i>
</button>
</div>
<div className="bg-transparent border border-white/5 rounded-2xl hover:bg-white/5 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between p-6 text-left">
<h3 className="text-lg font-normal text-granola-text tracking-tight font-sans">
                Is Granola SOC 2 / HIPAA compliant?
              </h3>
<i className="w-5 h-5 text-granola-muted" data-lucide="chevron-down"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-granola-dark relative z-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 mb-16">
<div>
<span className="inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-normal text-granola-muted uppercase tracking-[0.1em] mb-6 font-sans">
              Testimonial
            </span>
<h2 className="text-4xl md:text-5xl text-white tracking-tight leading-tight font-sans font-semibold">
              What people are saying
              <br/>
              about Granola
            </h2>
</div>
<div className="flex items-end">
<p className="text-granola-text text-lg font-light leading-relaxed font-sans">
              Granola has transformed the way teams handle meetings. From
              capturing conversations to organizing notes and highlighting
              action items, users across industries are experiencing faster,
              more productive meetings. Here's what they have to say about their
              experience.
            </p>
</div>
</div>
<div className="relative flex justify-center items-center h-[400px]">

<div className="absolute w-[600px] z-10">
<div className="absolute -inset-4 bg-granola-orange/20 blur-[40px] rounded-full pointer-events-none"></div>
<div className="bg-granola-card border border-white/10 rounded-3xl p-8 flex gap-8 relative shadow-2xl">
<div className="w-1/3 flex-shrink-0 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-granola-orange to-red-500 rounded-2xl opacity-50 mix-blend-overlay"></div>
<img alt="User" className="w-full aspect-square object-cover rounded-2xl grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="flex flex-col justify-between">
<div>
<i className="w-8 h-8 text-granola-orange/50 mb-4 rotate-180" data-lucide="quote"></i>
<p className="text-xl text-white leading-snug font-sans font-semibold">
                    Been using granola.so a bit lately; it generates the best
                    meeting notes of anything I've tried so far. Not sure how
                    they did that.
                  </p>
</div>
<div className="flex items-center justify-between mt-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
</div>
<div>
<div className="text-sm text-white font-medium font-sans">
                        Guillermo Rauch
                      </div>
<div className="text-[10px] text-granola-muted font-sans">
                        @rauchg
                      </div>
</div>
</div>
<div className="flex text-granola-orange gap-0.5">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</div>
</div>

<div className="absolute left-0 -translate-x-1/2 w-[500px] h-[250px] bg-granola-card/50 rounded-3xl blur-[8px] opacity-40"></div>
<div className="absolute right-0 translate-x-1/2 w-[500px] h-[250px] bg-granola-card/50 rounded-3xl blur-[8px] opacity-40"></div>
</div>
<div className="flex justify-between items-center mt-12">
<div className="flex gap-2">
<div className="w-2 h-2 rounded-full bg-granola-orange"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full bg-granola-orange flex items-center justify-center text-white hover:bg-opacity-90 transition-colors">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative z-20 overflow-hidden">
<div className="absolute inset-0 bg-orange-glow opacity-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-5xl md:text-6xl text-white tracking-tight leading-tight font-sans font-semibold mb-6">
          Start taking better notes today
        </h2>
<p className="text-granola-text text-xl font-sans font-semibold mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who have upgraded their meeting
          workflow with SynAppLink.
        </p>
<a className="inline-flex px-8 py-4 rounded-full bg-granola-orange text-white text-lg font-normal hover:bg-opacity-90 transition-colors shadow-[0_0_20px_rgba(217,119,54,0.4)] font-sans" href="#">
          Get SynAppLink for Free
        </a>
</div>
</section>
<footer className="pt-32 pb-12 border-t border-white/5 relative overflow-hidden bg-[#100f0d] z-20">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-granola-orange/10 blur-[120px] rounded-[100%] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid md:grid-cols-2 gap-20 mb-24 items-start">
<div>
<h2 className="text-4xl md:text-5xl text-white mb-6 tracking-tight leading-tight font-sans font-semibold">
              Ready for calmer, more
              <br/>
              productive meetings?
            </h2>
<p className="text-granola-muted text-lg font-light mb-8 font-sans">
              Try Granola for a few meetings today. It's free to get started.
            </p>
<div className="flex flex-wrap gap-4">
<a className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-normal transition-colors border border-white/10 flex items-center gap-2 font-sans" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
                Download For iPhone
              </a>
<a className="px-5 py-3 rounded-full bg-white text-black hover:bg-gray-200 text-sm font-normal transition-colors flex items-center gap-2 font-sans" href="#">
<i className="w-4 h-4" data-lucide="apple"></i>
                Download For Mac
              </a>
</div>
</div>
<div className="flex flex-col items-end text-right">
<div className="flex items-center gap-2 mb-10">
<img alt="SynAppLink" className="w-auto h-32" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ce7d99b-be16-44d3-b493-8c77f5977977_320w.png"/>
</div>
<div className="space-y-8 max-w-xs">
<div>
<h4 className="text-white text-base font-medium mb-2 font-sans">
                  Security
                </h4>
<p className="text-granola-muted text-sm font-light font-sans">
                  Learn how Granola secures your data and protects your privacy.
                </p>
</div>
<div>
<h4 className="text-white text-base font-medium mb-2 font-sans">
                  Updates
                </h4>
<p className="text-granola-muted text-sm font-light font-sans">
                  Stay up to date with the latest features and improvements to
                  Granola.
                </p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20 text-sm">
<div>
<h4 className="text-white font-medium mb-4 font-sans">Features</h4>
<ul className="space-y-3 text-granola-muted font-light">
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Notepad
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Chat
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Mobile
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Blog
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Status
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-sans">Product</h4>
<ul className="space-y-3 text-granola-muted font-light">
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Pricing
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Enterprise
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  AI-notepad vs note-taker
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  For sales
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  For product management
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-sans">Company</h4>
<ul className="space-y-3 text-granola-muted font-light">
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Careers
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Press
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Events
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Startup program
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Student program
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 font-sans">Resources</h4>
<ul className="space-y-3 text-granola-muted font-light">
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Security
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Help Center
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Affiliates
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  Contact us
                </a>
</li>
<li>
<a className="hover:text-white transition-colors font-sans" href="#">
                  License
                </a>
</li>
</ul>
</div>
<div className="col-span-2 flex justify-end">
<div className="flex items-start gap-4">
<span className="text-white font-medium pt-1 font-sans">
                Follow us
              </span>
<div className="flex gap-2">
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-granola-muted hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-granola-muted hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-granola-muted hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-granola-muted hover:text-white" href="#">
<i className="w-4 h-4" data-lucide="link"></i>
</a>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between text-xs text-granola-muted font-light z-10 relative">
<p className="font-sans">©2025 Signify Holding.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors font-sans" href="#">
              Terms
            </a>
<a className="hover:text-white transition-colors font-sans" href="#">
              Privacy
            </a>
</div>
</div>
</div>

<div className="absolute -bottom-[5%] left-0 w-full text-center overflow-hidden pointer-events-none select-none z-0 text-[15vw] font-bold text-white/5 tracking-tighter leading-none">
        synapplink
      </div>
</footer>


    </>
  );
}
