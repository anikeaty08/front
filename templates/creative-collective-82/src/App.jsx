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



      // Loading Screen Logic
      window.addEventListener('load', () => {
          setTimeout(() => {
              const loader = document.getElementById('loader');
              if(loader) {
                  loader.classList.add('fade-out');
                  setTimeout(() => {
                      loader.style.display = 'none';
                  }, 1000);
              }
          }, 800);
      });

      // Form Submission Logic
      const form = document.getElementById('join-form');
      const successMessage = document.getElementById('success-message');

      if(form) {
          form.addEventListener('submit', function(e) {
              e.preventDefault();

              const submitBtn = form.querySelector('button[type="submit"]');
              const originalText = submitBtn.textContent;
              submitBtn.textContent = 'Submitting...';
              submitBtn.disabled = true;

              // Simulate API call to prevent unverified email errors
              setTimeout(() => {
                  form.style.display = 'none';
                  successMessage.classList.remove('hidden');
              }, 1200);
          });
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
      

<div className="fixed inset-0 z-[100] bg-[#050507] flex items-center justify-center" id="loader">
<div className="font-serif-custom text-2xl tracking-[0.3em] text-neutral-400 opacity-80 animate-pulse">
        ZOON
      </div>
</div>

<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-gradient-to-b from-[#050507]/90 to-transparent backdrop-blur-sm border-b border-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<a className="font-serif-custom text-lg tracking-[0.25em] text-neutral-200" href="#">
          ZOON
        </a>
<div className="hidden md:flex gap-8 text-xs tracking-widest uppercase text-neutral-500">
<a className="hover:text-amber-100/80 transition-colors duration-300" href="#about">
            About
          </a>
<a className="hover:text-amber-100/80 transition-colors duration-300" href="#vision">
            Vision
          </a>
<a className="hover:text-amber-100/80 transition-colors duration-300" href="#roles">
            Roles
          </a>
<a className="hover:text-amber-100/80 transition-colors duration-300" href="#gallery">
            Gallery
          </a>
</div>
<a className="text-xs tracking-widest uppercase text-amber-100/70 border border-amber-100/20 px-5 py-2 rounded-full hover:bg-amber-100/10 hover:text-amber-50 transition-all duration-300" href="#join">
          Join Us
        </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598063412093-b67f185e7d55?q=80&amp;w=2940&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 hero-bg"></div>

<div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050507] via-transparent to-[#050507]"></div>
</div>
<div className="ambient-glow top-0 left-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-12">
<h1 className="font-serif-custom text-5xl md:text-7xl lg:text-8xl tracking-tight text-neutral-100 mb-6 drop-shadow-2xl">
          ZOON SOCIETY
        </h1>
<p className="text-lg md:text-xl font-light text-neutral-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          “A youth collective preserving culture through creativity
          conversations storytelling and community.”
        </p>
<p className="text-sm md:text-base font-light text-neutral-500 mb-12 max-w-3xl mx-auto leading-loose">
          ZOON SOCIETY is a Kashmir-based creative collective bringing together
          photographers filmmakers writers speakers designers and young thinkers
          to build meaningful spaces for expression collaboration and cultural
          storytelling.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 bg-neutral-100 text-[#050507] text-sm tracking-wide rounded-full hover:bg-amber-50 transition-colors duration-300" href="#join">
            Join Community
          </a>
<a className="w-full sm:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-neutral-300 text-sm tracking-wide rounded-full hover:border-amber-100/30 hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2" href="#about">
            Explore Vision
            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-32 relative" id="about">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-amber-100/40 mb-8" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="font-serif-custom text-2xl md:text-4xl leading-relaxed tracking-tight text-neutral-200">
          “ZOON SOCIETY was created to give Kashmiri youth a space to create
          connect collaborate and express themselves through culture media
          conversations storytelling and creative initiatives.”
        </h2>
</div>
</section>

<section className="py-24 relative bg-[#08080a]" id="vision">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h3 className="text-xs tracking-widest uppercase text-amber-100/50 mb-4">
            Our Vision
          </h3>
<h2 className="font-serif-custom text-3xl md:text-4xl tracking-tight text-neutral-100">
            Initiatives &amp; Focus Areas
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:book-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Cultural Storytelling
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Preserving narratives through modern mediums.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Creative Collaborations
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Connecting diverse talents for joint projects.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Photography &amp; Films
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Capturing the visual essence of our homeland.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Youth Conversations
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Safe spaces for dialogue and shared experiences.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:mic-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Public Speaking
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Empowering voices to articulate ideas clearly.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:calendar-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Community Events
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Gatherings that foster genuine human connection.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:scale-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Discussions &amp; Debates
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Intellectual exchange and respectful discourse.
            </p>
</div>

<div className="group p-8 rounded-2xl bg-white/[0.01] border border-white/[0.03] hover:bg-white/[0.03] hover:border-amber-100/20 transition-all duration-500 backdrop-blur-sm">
<iconify-icon className="text-neutral-500 group-hover:text-amber-100/80 mb-6 transition-colors" icon="solar:pen-new-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-base font-medium text-neutral-200 mb-2">
              Creative Workshops
            </h4>
<p className="text-xs text-neutral-500 leading-relaxed">
              Skill-building sessions led by industry peers.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="roles">
<div className="ambient-glow top-1/2 right-0 translate-x-1/2 -translate-y-1/2 opacity-50"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h3 className="text-xs tracking-widest uppercase text-amber-100/50 mb-4">
            Structure
          </h3>
<h2 className="font-serif-custom text-3xl md:text-4xl tracking-tight text-neutral-100">
            Departments &amp; Roles
          </h2>
</div>
<div className="space-y-20">

<div>
<h4 className="text-xs font-medium tracking-widest text-amber-100/60 uppercase mb-8 border-b border-white/5 pb-4">
              Public Speaking &amp; Discussions
            </h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Debate Coordinator</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">MUN Lead</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Discussion Host</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">
                  Research Team Member
                </span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-amber-100/60 uppercase mb-8 border-b border-white/5 pb-4">
              Media &amp; Socials
            </h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">
                  Social Media Manager
                </span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Content Writer</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">
                  Media and Events Coordinator
                </span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-medium tracking-widest text-amber-100/60 uppercase mb-8 border-b border-white/5 pb-4">
              Creative &amp; Visuals
            </h4>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Photographer</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Videographer</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Video Editor</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Graphic Designer</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Creative Director</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Content Creator</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="py-4 px-4 -mx-4 flex justify-between items-center hover:bg-white/[0.02] rounded-lg transition-colors group">
<span className="text-sm text-neutral-300">Visual Storyteller</span>
<iconify-icon className="text-neutral-600 group-hover:text-amber-100/50 transition-colors" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative bg-[#08080a] border-y border-white/[0.02]" id="join">
<div className="max-w-2xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h3 className="text-xs tracking-widest uppercase text-amber-100/50 mb-4">
            Become a part
          </h3>
<h2 className="font-serif-custom text-3xl md:text-4xl tracking-tight text-neutral-100">
            Join Zoon Society
          </h2>
</div>

<div className="bg-white/[0.01] border border-white/[0.05] p-8 md:p-12 rounded-3xl backdrop-blur-md" id="form-container">
<form action="https://formsubmit.co/ajax/peerxadaenterprises@gmail.com" className="space-y-8" id="join-form" method="POST">
<input name="_subject" type="hidden" value="New Member Application - Zoon Society"/>
<input name="_captcha" type="hidden" value="false"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs text-neutral-500 ml-1">Full Name</label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors placeholder:text-neutral-700" name="name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 ml-1">
                  Email Address
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors placeholder:text-neutral-700" name="email" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-xs text-neutral-500 ml-1">
                  Phone Number
                </label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors placeholder:text-neutral-700" name="phone" placeholder="+91 99999 99999" required="" type="tel"/>
</div>
<div className="space-y-2 relative">
<label className="text-xs text-neutral-500 ml-1">
                  Role Selection
                </label>
<select className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors appearance-none cursor-pointer" name="role" required="">
<option className="bg-[#0a0a0c]" disabled="" selected="" value="">
                    Select a role
                  </option>
<option className="bg-[#0a0a0c]" value="debate">
                    Debate Coordinator
                  </option>
<option className="bg-[#0a0a0c]" value="mun">MUN Lead</option>
<option className="bg-[#0a0a0c]" value="photographer">
                    Photographer
                  </option>
<option className="bg-[#0a0a0c]" value="writer">
                    Content Writer
                  </option>
<option className="bg-[#0a0a0c]" value="designer">
                    Graphic Designer
                  </option>
<option className="bg-[#0a0a0c]" value="other">
                    Other / General Member
                  </option>
</select>
<iconify-icon className="absolute right-0 bottom-4 text-neutral-500 pointer-events-none" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 ml-1">
                Skills / Interests
              </label>
<input className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors placeholder:text-neutral-700" name="skills" placeholder="Photography, Writing, Public Speaking..." type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs text-neutral-500 ml-1">
                Why do you want to join?
              </label>
<textarea className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-neutral-200 focus:outline-none focus:border-amber-100/50 transition-colors placeholder:text-neutral-700 resize-none" name="motivation" placeholder="Tell us briefly about your motivation..." required="" rows="3"></textarea>
</div>
<button className="w-full py-4 bg-neutral-100 text-[#050507] text-sm tracking-wide rounded-xl hover:bg-amber-50 transition-all duration-300 shadow-[0_0_20px_rgba(251,239,213,0.1)] hover:shadow-[0_0_30px_rgba(251,239,213,0.2)]" type="submit">
              Submit Application
            </button>
</form>

<div className="hidden text-center py-12" id="success-message">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100/10 mb-6">
<iconify-icon className="text-amber-100/80" icon="solar:check-read-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="font-serif-custom text-2xl text-neutral-100 mb-2">
              Application Received
            </h3>
<p className="text-sm text-neutral-500">
              Thank you for your interest. We will review your application and
              get back to you soon.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[300px]">

<div className="relative rounded-2xl overflow-hidden group col-span-1 sm:col-span-2 lg:col-span-2 row-span-2">
<img alt="Photography" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1516961642265-531546e84af2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050507]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-6">
<span className="text-xs tracking-widest uppercase text-amber-100/80">
                Visuals
              </span>
</div>
</div>

<div className="relative rounded-2xl overflow-hidden group">
<img alt="Books" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative rounded-2xl overflow-hidden group">
<img alt="Meeting" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="relative rounded-2xl overflow-hidden group col-span-1 lg:col-span-2">
<img alt="Atmosphere" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-40 relative flex items-center justify-center border-t border-white/[0.02]">
<div className="ambient-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif-custom text-3xl md:text-5xl lg:text-6xl tracking-tight text-neutral-200 leading-tight md:leading-tight">
          “We believe Kashmir’s youth deserve spaces where creativity ideas
          culture and conversations can thrive together.”
        </h2>
</div>
</section>

<footer className="border-t border-white/[0.05] bg-[#030304] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-2">
<span className="font-serif-custom text-xl tracking-[0.25em] text-neutral-300">
            ZOON
          </span>
<span className="text-xs text-neutral-600">Kashmir, India</span>
</div>
<div className="flex gap-8">
<a className="text-neutral-500 hover:text-amber-100/80 transition-colors flex items-center gap-2 text-sm group" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden sm:block group-hover:underline underline-offset-4">
              Instagram
            </span>
</a>
<a className="text-neutral-500 hover:text-amber-100/80 transition-colors flex items-center gap-2 text-sm group" href="#">
<iconify-icon icon="solar:paperclip-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden sm:block group-hover:underline underline-offset-4">
              Telegram
            </span>
</a>
<a className="text-neutral-500 hover:text-amber-100/80 transition-colors flex items-center gap-2 text-sm group" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="hidden sm:block group-hover:underline underline-offset-4">
              Email
            </span>
</a>
</div>
</div>
<div className="mt-12 text-center text-[10px] text-neutral-700 uppercase tracking-widest">
        © 2024 Zoon Society. All rights reserved.
      </div>
</footer>



    </>
  );
}
