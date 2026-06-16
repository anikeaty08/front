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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed sm:px-6 z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<div className="max-w-7xl mx-auto backdrop-blur-xl bg-white/50 border border-white/40 rounded-full px-6 py-3 flex items-center justify-between shadow-sm transition-all hover:bg-white/60">
<div className="flex items-center gap-2.5">
<div className="w-9 h-9 bg-zinc-900 rounded-full flex items-center justify-center text-white shadow-sm border border-zinc-800">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-zinc-900">
            THE COMMUNITY SKETCH CLUB
          </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-full transition-all" href="#">
            Sessions
          </a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-full transition-all" href="#">
            Exhibitions
          </a>
<a className="text-sm font-normal text-zinc-600 hover:text-zinc-900 px-3 py-1.5 rounded-full transition-all" href="#">
            About Us
          </a>
</div>
<div className="flex items-center gap-3">
<button className="hidden md:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-normal hover:bg-zinc-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            Join Community
          </button>
<button className="md:hidden p-2 text-zinc-900 bg-white/50 rounded-full backdrop-blur-md">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-zinc-900">
<img alt="Sketching overhead" className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-zinc-950/60 to-zinc-950/90"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-zinc-300 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300"></span>
</span>
<span className="uppercase text-xs font-medium tracking-wide">Join Local Artists</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-medium text-white tracking-tight leading-tight mb-8">Master the art <br/> <span className="text-zinc-500"></span></h1>
<p className="text-lg sm:text-xl text-zinc-300 font-light max-w-xl mx-auto leading-relaxed mb-10">
          A community built on good vibes and shared creativity. Join local
          sketch walks, drink &amp; draws, and meet fellow artists.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full">
<button className="w-full sm:w-auto bg-white text-zinc-900 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group">
            Join the Club
            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-full text-base font-normal hover:bg-white/10 border border-white/10 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-lg text-zinc-400" icon="solar:calendar-date-linear"></iconify-icon>
            See Upcoming Sessions
          </button>
</div>
</div>
</header>

<section className="sm:px-6 lg:px-8 -mt-20 bg-transparent z-20 pt-24 pr-4 pb-24 pl-4 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer bg-zinc-900">
<img alt="Social Meetup" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon className="text-xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                Meet Local Creatives
              </h3>
<p className="text-zinc-400 font-normal leading-snug">
                Connect with artists of all levels. Post-session coffee or pints
                are part of the process.
              </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer bg-zinc-900">
<img alt="Plein Air" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1544273677-c433136021d4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                Sessions &amp; Events
              </h3>
<p className="text-zinc-400 font-normal leading-snug">
                From plein air in Beckenham Place Park to cozy winter pub meets.
              </p>
</div>
</div>

<div className="group relative h-[28rem] rounded-[2rem] overflow-hidden shadow-xl cursor-pointer bg-zinc-900">
<img alt="Sketching" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:translate-y-[-8px]">
<div className="w-10 h-10 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon className="text-xl" icon="solar:heart-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">
                Love the Process
              </h3>
<p className="text-zinc-400 font-normal leading-snug">
                Whether you're an illustrator or just bought your first
                sketchbook, we share the passion.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
<div>
<span className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-2 block">
              Calendar
            </span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">
              Upcoming Sessions
            </h2>
<p className="text-zinc-500 mt-2">
              Join one of our scheduled gatherings.
            </p>
</div>
<button className="text-zinc-600 font-normal hover:text-zinc-900 flex items-center gap-2 group transition-colors">
            View Full Calendar
            <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Session" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-zinc-900 uppercase tracking-wide border border-zinc-200">
                Open
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-1 rounded-md">
                  Outdoor Meetup
                </span>
<span className="text-xs font-normal text-zinc-500">Nov 12</span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                Plein Air at the Park
              </h3>
<p className="text-zinc-500 text-sm mb-4">
                Capture the autumn colors. Coffee included.
              </p>
<button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-900 font-normal text-sm hover:bg-zinc-50 transition-colors">
                Register Now
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Session" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-zinc-900 uppercase tracking-wide border border-zinc-200">
                Few Spots Left
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-1 rounded-md">
                  Social Mixer
                </span>
<span className="text-xs font-normal text-zinc-500">Nov 18</span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                Sunday Drink &amp; Draw
              </h3>
<p className="text-zinc-500 text-sm mb-4">
                Life drawing and casual portraits. Bring supplies.
              </p>
<button className="w-full py-3 rounded-xl border border-zinc-200 text-zinc-900 font-normal text-sm hover:bg-zinc-50 transition-colors">
                Details
              </button>
</div>
</div>

<div className="group bg-white rounded-3xl p-2 shadow-sm border border-zinc-200 hover:border-zinc-300 hover:shadow-md transition-all opacity-90">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4 bg-zinc-100">
<img alt="Session" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 grayscale" src="https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-zinc-100/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-semibold text-zinc-500 uppercase tracking-wide border border-zinc-200">
                Upcoming
              </div>
</div>
<div className="px-4 pb-4">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-zinc-700 bg-zinc-100 px-2 py-1 rounded-md">
                  Community
                </span>
<span className="text-xs font-normal text-zinc-500">Dec 01</span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2 tracking-tight">
                End of Year Exhibition
              </h3>
<p className="text-zinc-500 text-sm mb-4">
                Showcasing works from our local members.
              </p>
<button className="w-full py-3 rounded-xl border border-zinc-100 bg-zinc-50 text-zinc-400 font-normal text-sm cursor-not-allowed">
                Coming Soon
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-50">
<div className="max-w-7xl mx-auto">
<div className="relative bg-zinc-950 rounded-[3rem] overflow-hidden p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-zinc-800 shadow-2xl">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative flex-1 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-zinc-800 text-zinc-300 text-xs font-semibold uppercase tracking-widest mb-6 border border-zinc-700">
              Coming Soon
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-4">
              The Annual Zine is Coming
            </h2>
<p className="text-xl text-zinc-400 max-w-lg mb-8 leading-relaxed tracking-tight">
              A curated, seasonal publication where your sketches take center
              stage. Submit your work and get published.
            </p>
<button className="bg-white text-zinc-950 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2">
              Get Early Access
              <iconify-icon className="text-lg" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
<div className="relative flex-1 w-full max-w-md">

<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 relative overflow-hidden">
<div className="flex items-center justify-between mb-8">
<span className="text-zinc-300 font-normal">Issue 1</span>
<iconify-icon className="text-xl text-zinc-600" icon="solar:lock-password-linear"></iconify-icon>
</div>
<div className="space-y-6 mb-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:gallery-linear"></iconify-icon>
</div>
<span className="text-zinc-200 font-normal">Curated Gallery</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:notebook-linear"></iconify-icon>
</div>
<span className="text-zinc-200 font-normal">Printed Edition</span>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300">
<iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-zinc-200 font-normal">Community Voted</span>
</div>
</div>

<div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
<div className="bg-zinc-300 h-full w-2/3 rounded-full animate-pulse"></div>
</div>
<p className="text-right text-xs text-zinc-500 mt-2 font-mono">
                Loading...
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
            How it works
          </h2>
<p className="text-lg text-zinc-500">Simple steps to fill those pages.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-zinc-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm transition-transform hover:scale-105 duration-300">
<iconify-icon className="text-3xl" icon="solar:user-plus-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
              1. Join Community
            </h3>
<p className="text-sm text-zinc-500 max-w-[200px]">
              Create your profile. It's free and takes 30 seconds.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm transition-transform hover:scale-105 duration-300">
<iconify-icon className="text-3xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
              2. Find Sessions
            </h3>
<p className="text-sm text-zinc-500 max-w-[200px]">
              Browse our local meetups and sketch walks in your area.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-white rounded-full border border-zinc-200 flex items-center justify-center text-zinc-900 mb-6 shadow-sm transition-transform hover:scale-105 duration-300">
<iconify-icon className="text-3xl" icon="solar:pen-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
              3. Start Sketching
            </h3>
<p className="text-sm text-zinc-500 max-w-[200px]">
              Show up, draw, and experiment. No pressure, just practice.
            </p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-24 h-24 bg-zinc-900 rounded-full border border-zinc-900 flex items-center justify-center text-white mb-6 shadow-sm transition-transform hover:scale-105 duration-300">
<iconify-icon className="text-3xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">
              4. Connect
            </h3>
<p className="text-sm text-zinc-500 max-w-[200px]">
              Share your work, grab a drink, and grow your creative network.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 border border-zinc-100 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="flex-1 relative order-2 lg:order-1">
<div className="absolute -inset-4 bg-zinc-200 rounded-full opacity-50 blur-3xl"></div>
<img alt="Community Group" className="relative rounded-3xl shadow-xl w-full object-cover aspect-[4/3] rotate-2 border-4 border-white grayscale" src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 order-1 lg:order-2">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center text-zinc-900 mb-8 border border-zinc-200">
<iconify-icon className="text-2xl" icon="solar:chat-line-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-normal tracking-tight text-zinc-900 mb-8 leading-tight">
              "I joined to practice my drawing, but stayed for the people. The
              best way to meet fellow creatives."
            </h2>
<div className="flex items-center gap-4">
<div className="flex flex-col">
<span className="text-lg font-medium tracking-tight text-zinc-900">
                  Sarah &amp; Tom
                </span>
<span className="text-sm text-zinc-500">Community Members</span>
</div>
</div>
<div className="mt-8 flex gap-3">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                Sketching
              </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                Community
              </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                Local Communities
              </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 sm:px-6 lg:px-8 bg-white text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-5xl md:text-6xl font-medium text-zinc-900 tracking-tight mb-6">
          Grab your sketchbook.
        </h2>
<p className="text-xl text-zinc-500 mb-10 leading-relaxed tracking-tight">
          Be part of a growing community of artists.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-zinc-900 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-zinc-800 hover:scale-105 transition-all shadow-md">
            Join Community
          </button>
<div className="flex gap-2 justify-center">
<button className="bg-zinc-50 border border-zinc-200 text-zinc-900 p-4 rounded-full hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</button>
<button className="bg-zinc-50 border border-zinc-200 text-zinc-900 p-4 rounded-full hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-50 border-t border-zinc-200 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-900 rounded-md flex items-center justify-center text-white border border-zinc-800">
<iconify-icon className="text-xs" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-zinc-900">
            THE COMMUNITY SKETCH CLUB
          </span>
</div>
<div className="text-zinc-500 text-sm font-normal">
          © 2024 The Community Sketch Club. See you at the session.
        </div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-normal" href="#">
            Terms
          </a>
<a className="text-zinc-500 hover:text-zinc-900 transition-colors text-sm font-normal" href="#">
            Privacy
          </a>
</div>
</div>
</footer>

    </>
  );
}
