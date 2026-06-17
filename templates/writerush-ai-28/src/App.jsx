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



    lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

    const cards = document.querySelectorAll('.context-card');
    const panels = {
      voice: document.querySelector('[data-panel="voice"]'),
      blog: document.querySelector('[data-panel="blog"]'),
      link: document.querySelector('[data-panel="link"]')
    };

    const blogSummary = document.getElementById('blogSummary');
    const linkSummary = document.getElementById('linkSummary');
    const blogSelect = document.getElementById('blogSelect');
    const fetchBtn = document.getElementById('fetchContextBtn');
    const urlInput = document.getElementById('urlInput');
    const urlSpinnerInline = document.getElementById('urlSpinnerInline');
    const urlLoadingText = document.getElementById('urlLoadingText');

    function setCardState(target) {
      cards.forEach(card => {
        const selected = card.dataset.card === target;
        const radioOuter = card.querySelector('span.flex.h-5.w-5');
        const radioInner = radioOuter.querySelector('span');

        if (selected) {
          card.classList.remove('border-[#d9ddea]', 'bg-white');
          card.classList.add('border-[#7c4dff]', 'bg-[#f6f0ff]');
          radioOuter.classList.remove('border-[#c8ccda]');
          radioOuter.classList.add('border-[#6f7387]');
          radioInner.classList.remove('bg-transparent');
          radioInner.classList.add('bg-[#1e1b4b]', 'h-3', 'w-3');
          radioInner.classList.remove('h-2.5', 'w-2.5');
        } else {
          card.classList.remove('border-[#7c4dff]', 'bg-[#f6f0ff]');
          card.classList.add('border-[#d9ddea]', 'bg-white');
          radioOuter.classList.remove('border-[#6f7387]');
          radioOuter.classList.add('border-[#c8ccda]');
          radioInner.classList.remove('bg-[#1e1b4b]', 'h-3', 'w-3');
          radioInner.classList.add('bg-transparent', 'h-2.5', 'w-2.5');
        }
      });

      Object.entries(panels).forEach(([key, panel]) => {
        panel.classList.toggle('hidden', key !== target);
      });

      if (target !== 'blog') blogSummary.classList.add('hidden');
      if (target !== 'link') {
        linkSummary.classList.add('hidden');
        urlLoadingText.classList.add('hidden');
        urlLoadingText.classList.remove('flex');
        urlSpinnerInline.classList.add('hidden');
        urlSpinnerInline.classList.remove('flex');
      }
    }

    cards.forEach(card => {
      card.addEventListener('click', () => setCardState(card.dataset.card));
    });

    blogSelect.addEventListener('change', () => {
      if (blogSelect.value) {
        blogSummary.classList.remove('hidden');
      } else {
        blogSummary.classList.add('hidden');
      }
    });

    fetchBtn.addEventListener('click', () => {
      if (!urlInput.value.trim()) return;
      linkSummary.classList.add('hidden');
      urlSpinnerInline.classList.remove('hidden');
      urlSpinnerInline.classList.add('flex');
      urlLoadingText.classList.remove('hidden');
      urlLoadingText.classList.add('flex');

      setTimeout(() => {
        urlSpinnerInline.classList.add('hidden');
        urlSpinnerInline.classList.remove('flex');
        urlLoadingText.classList.add('hidden');
        urlLoadingText.classList.remove('flex');
        linkSummary.classList.remove('hidden');
      }, 1400);
    });
  
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
      
<div className="min-h-screen flex">

<aside className="hidden lg:flex lg:w-64 xl:w-72 bg-[#1f1f1f] text-white flex-col">
<div className="h-10 bg-[#111] flex items-center justify-between px-3 text-sm">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-white text-[#111] flex items-center justify-center text-xs font-medium">W</div>
<span className="text-white/95">Site Title</span>
</div>
<div className="text-white/90">Howdy, admin</div>
</div>
<nav className="flex-1 py-3 text-lg">
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="layout-dashboard"></i><span>Dashboard</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="file-text"></i><span>Posts</span></a>
<div className="bg-[#4453ff] relative">
<a className="flex items-center gap-3 px-4 py-3 text-white" href="#">
<div className="w-5 h-5 rounded-full bg-[#c45af1] flex items-center justify-center text-xs font-medium">W</div>
<span>WriteRush</span>
</a>
<div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-y-[0.75rem] border-y-transparent border-l-[0.75rem] border-l-[#4453ff]"></div>
</div>
<div className="py-2 text-white/75">
<a className="block px-5 py-2 hover:text-white" href="#">All Content</a>
<a className="block px-5 py-2 hover:text-white" href="#">Blog</a>
<a className="block px-5 py-2 hover:text-white" href="#">Brand Voice</a>
<a className="block px-5 py-2 hover:text-white" href="#">License</a>
<a className="block px-5 py-2 text-white font-medium" href="#">Dashboard</a>
<a className="block px-5 py-2 hover:text-white" href="#">Keyword Research</a>
<a className="block px-5 py-2 hover:text-white" href="#">Product</a>
</div>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="image"></i><span>Media</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="copy"></i><span>Pages</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="message-square"></i><span>Comments</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="paintbrush"></i><span>Appearance</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="plug"></i><span>Plugins</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="users"></i><span>Users</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="wrench"></i><span>Tools</span></a>
<a className="flex items-center gap-3 px-4 py-3 text-white/90 hover:bg-white/5" href="#"><i className="w-5 h-5" data-lucide="settings"></i><span>Settings</span></a>
</nav>
<div className="px-4 py-4 text-white/90 border-t border-white/10">Collapse Menu</div>
</aside>

<main className="flex-1 min-w-0">

<div className="h-10 bg-[#111] lg:hidden"></div>
<div className="p-4 sm:p-6">

<div className="rounded-2xl border border-[#e7e9f4] bg-white px-6 py-4 shadow-sm">
<div className="flex items-center gap-4">
<button className="text-[#1f2430]">
<i className="w-6 h-6" data-lucide="chevron-left"></i>
</button>
<h1 className="text-4xl tracking-tight font-semibold text-[#7a3ef0]">Create Post</h1>
</div>
</div>

<div className="mt-6">
<div className="inline-flex w-full max-w-3xl overflow-hidden rounded-2xl border border-[#e3e5ef] bg-white shadow-sm">
<button className="flex-1 bg-gradient-to-r from-[#6e2be7] to-[#d05ae8] px-6 py-4 text-xl font-medium text-white">Create Post</button>
<button className="flex-1 px-6 py-4 text-xl font-normal text-[#5d6480]">Social Accounts</button>
<button className="flex-1 px-6 py-4 text-xl font-normal text-[#5d6480]">Calendar</button>
</div>
</div>

<section className="mt-6 rounded-3xl bg-white px-5 sm:px-7 py-6 shadow-sm border border-[#eceef7]">
<label className="block text-xl font-normal text-[#1f2430] mb-5">Select Platform*</label>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-3 rounded-xl border border-[#7c4dff] bg-white px-5 py-4 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-[#1877f2] flex items-center justify-center text-white text-3xl font-medium">f</div>
<span className="text-lg font-normal text-[#1f2430]">Facebook</span>
</button>
<button className="flex items-center gap-3 rounded-xl border border-[#d9ddea] bg-white px-5 py-4 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-[#76798b] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="instagram"></i>
</div>
<span className="text-lg font-normal text-[#1f2430]">Instagram</span>
</button>
<button className="flex items-center gap-3 rounded-xl border border-[#d9ddea] bg-white px-5 py-4 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-[#76798b] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="x"></i>
</div>
<span className="text-lg font-normal text-[#1f2430]">X</span>
</button>
<button className="flex items-center gap-3 rounded-xl border border-[#d9ddea] bg-white px-5 py-4 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-[#76798b] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</div>
<span className="text-lg font-normal text-[#1f2430]">LinkedIn</span>
</button>
<button className="flex items-center gap-3 rounded-xl border border-[#d9ddea] bg-white px-5 py-4 shadow-sm">
<div className="w-10 h-10 rounded-lg bg-[#76798b] flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="pin"></i>
</div>
<span className="text-lg font-normal text-[#1f2430]">Pinterest</span>
</button>
</div>
</section>

<section className="mt-6 rounded-3xl bg-white px-5 sm:px-7 py-6 shadow-sm border border-[#eceef7]">
<label className="block text-xl font-normal text-[#1f2430]">Brand Context</label>
<p className="mt-2 text-lg text-[#8b90a7]">Choose how you want to provide context for this post.</p>
<div className="mt-5 space-y-3">

<div>
<button className="context-card group w-full rounded-xl border border-[#7c4dff] bg-[#f6f0ff] px-4 py-4 text-left transition" data-card="voice" type="button">
<div className="flex items-start gap-4">
<span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#6f7387] bg-white">
<span className="h-3 w-3 rounded-full bg-[#1e1b4b]"></span>
</span>
<span className="mt-0.5 text-[#6f7387]">
<i className="w-5 h-5" data-lucide="mic"></i>
</span>
<span className="min-w-0">
<span className="block text-lg font-medium text-[#1f2430]">Brand Voice</span>
<span className="mt-1 block text-base text-[#8b90a7]">Use your saved brand voice profile to match your writing style.</span>
</span>
</div>
</button>
<div className="mt-4 ml-4" data-panel="voice">
<label className="block text-sm font-normal text-[#1f2430] mb-2">Select Brand Voice</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 pr-12 text-lg text-[#8b90a7] shadow-sm outline-none">
<option>No profiles found</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center gap-2">
<a className="pointer-events-auto text-sm font-medium text-[#7a3ef0]" href="#">Create one</a>
<i className="w-5 h-5 text-[#8b90a7]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
</div>

<div>
<button className="context-card w-full rounded-xl border border-[#d9ddea] bg-white px-4 py-4 text-left transition hover:border-[#cfd5e6]" data-card="blog" type="button">
<div className="flex items-start gap-4">
<span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#c8ccda] bg-white">
<span className="h-2.5 w-2.5 rounded-full bg-transparent"></span>
</span>
<span className="mt-0.5 text-[#6f7387]">
<i className="w-5 h-5" data-lucide="file-text"></i>
</span>
<span className="min-w-0">
<span className="block text-lg font-medium text-[#1f2430]">Blog Post Repurpose</span>
<span className="mt-1 block text-base text-[#8b90a7]">Turn an existing blog post into a social media caption.</span>
</span>
</div>
</button>
<div className="mt-4 ml-4 hidden" data-panel="blog">
<label className="block text-sm font-normal text-[#1f2430] mb-2">Select Blog Post</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 pr-12 text-lg text-[#1f2430] shadow-sm outline-none" id="blogSelect">
<option value="">Choose a published post</option>
<option value="1">How to Build a Consistent Brand Voice — Published Jan 12, 2025</option>
<option value="2">10 Social Content Ideas for Small Businesses — Published Feb 03, 2025</option>
<option value="3">Why Storytelling Improves Conversion — Published Mar 18, 2025</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
<i className="w-5 h-5 text-[#8b90a7]" data-lucide="chevron-down"></i>
</div>
</div>
<div className="mt-4 hidden rounded-2xl border border-[#d8c5ff] bg-[#f7f2ff] p-4" id="blogSummary">
<div className="text-xs font-medium tracking-wide text-[#7a3ef0] uppercase">AI CONTEXT SUMMARY</div>
<textarea className="mt-3 w-full rounded-xl border border-[#d7dbeb] bg-white px-4 py-4 text-lg text-[#1f2430] outline-none" rows="5">This article explains how to define a clear brand voice, document tone guidelines, and apply them consistently across channels. It emphasizes audience awareness, repeatable messaging patterns, and using examples to keep content aligned with the brand’s personality.</textarea>
<p className="mt-3 text-base text-[#8b90a7]">Edit this summary to refine what the AI uses as context.</p>
</div>
</div>
</div>

<div>
<button className="context-card w-full rounded-xl border border-[#d9ddea] bg-white px-4 py-4 text-left transition hover:border-[#cfd5e6]" data-card="link" type="button">
<div className="flex items-start gap-4">
<span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#c8ccda] bg-white">
<span className="h-2.5 w-2.5 rounded-full bg-transparent"></span>
</span>
<span className="mt-0.5 text-[#6f7387]">
<i className="w-5 h-5" data-lucide="link"></i>
</span>
<span className="min-w-0">
<span className="block text-lg font-medium text-[#1f2430]">Add a Link</span>
<span className="mt-1 block text-base text-[#8b90a7]">Paste any URL and AI will extract the context automatically.</span>
</span>
</div>
</button>
<div className="mt-4 ml-4 hidden" data-panel="link">
<label className="block text-sm font-normal text-[#1f2430] mb-2">Paste URL</label>
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-1">
<input className="w-full rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 text-lg text-[#1f2430] placeholder:text-[#a4a9bb] shadow-sm outline-none" id="urlInput" placeholder="https://" type="text"/>
<div className="absolute inset-y-0 right-4 hidden items-center" id="urlSpinnerInline">
<span className="h-5 w-5 rounded-full border-2 border-[#d8c5ff] border-t-[#7a3ef0] animate-spin"></span>
</div>
</div>
<button className="rounded-xl border border-[#7a3ef0] bg-white px-5 py-3.5 text-base font-medium text-[#7a3ef0]" id="fetchContextBtn" type="button">Fetch Context</button>
</div>
<div className="mt-3 hidden items-center gap-2 text-base text-[#8b90a7]" id="urlLoadingText">
<span className="h-4 w-4 rounded-full border-2 border-[#d8c5ff] border-t-[#7a3ef0] animate-spin"></span>
<span>Fetching context...</span>
</div>
<div className="mt-4 hidden rounded-2xl border border-[#d8c5ff] bg-[#f7f2ff] p-4" id="linkSummary">
<div className="text-xs font-medium tracking-wide text-[#7a3ef0] uppercase">AI CONTEXT SUMMARY</div>
<textarea className="mt-3 w-full rounded-xl border border-[#d7dbeb] bg-white px-4 py-4 text-lg text-[#1f2430] outline-none" rows="5">This page highlights a product launch focused on helping teams streamline content creation. Key themes include faster workflows, better collaboration, clear messaging, and reducing the time required to turn ideas into publish-ready posts.</textarea>
<p className="mt-3 text-base text-[#8b90a7]">Edit this summary to refine what the AI uses as context.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mt-6 rounded-3xl bg-white px-5 sm:px-7 py-6 shadow-sm border border-[#eceef7]">
<div className="flex flex-wrap gap-3">
<button className="rounded-xl bg-gradient-to-r from-[#6e2be7] to-[#d05ae8] px-6 py-3 text-xl font-medium text-white">Single Post</button>
<button className="rounded-xl bg-[#9f9f9f] px-6 py-3 text-xl font-medium text-white">Multi Post Campaign</button>
</div>
<div className="mt-6">
<label className="block text-xl font-normal text-[#1f2430] mb-2">What is this post about?</label>
<textarea className="w-full rounded-xl border border-[#d7dbeb] bg-white px-4 py-4 text-lg text-[#1f2430] placeholder:text-[#b4bacb] outline-none" placeholder="Describe what you want to post about..." rows="4"></textarea>
<div className="mt-2 text-right text-base text-[#9aa0b7]">0/300 characters</div>
</div>
<div className="mt-4">
<label className="block text-xl font-normal text-[#1f2430] mb-2">Post Purpose</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 pr-12 text-lg text-[#1f2430] outline-none">
<option>Generic</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
<i className="w-5 h-5 text-[#8b90a7]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-6">
<label className="block text-xl font-normal text-[#1f2430] mb-3">Post Length</label>
<div className="flex flex-wrap gap-3">
<button className="min-w-40 rounded-xl border border-[#d9ddea] bg-white px-4 py-3 text-left shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-lg font-normal text-[#1f2430]">Short</div>
<div className="text-base text-[#8b90a7]">1-2 Sentence</div>
</div>
<span className="mt-1 h-5 w-5 rounded-full border border-[#c8ccda]"></span>
</div>
</button>
<button className="min-w-40 rounded-xl border border-[#7c4dff] bg-[#faf7ff] px-4 py-3 text-left shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-lg font-medium text-[#1f2430]">Medium</div>
<div className="text-base text-[#8b90a7]">3-5 Sentence</div>
</div>
<span className="mt-1 h-5 w-5 rounded-full bg-[#1e1b4b]"></span>
</div>
</button>
<button className="min-w-40 rounded-xl border border-[#d9ddea] bg-white px-4 py-3 text-left shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-lg font-normal text-[#1f2430]">Long</div>
<div className="text-base text-[#8b90a7]">6+ Sentence</div>
</div>
<span className="mt-1 h-5 w-5 rounded-full border border-[#c8ccda]"></span>
</div>
</button>
<button className="min-w-40 rounded-xl border border-[#d9ddea] bg-white px-4 py-3 text-left shadow-sm">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-lg font-normal text-[#1f2430]">Very Long</div>
<div className="text-base text-[#8b90a7]">10+ Sentence</div>
</div>
<span className="mt-1 h-5 w-5 rounded-full border border-[#c8ccda]"></span>
</div>
</button>
</div>
</div>
<div className="mt-6">
<label className="block text-xl font-normal text-[#1f2430] mb-2">Tone</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 pr-12 text-lg text-[#1f2430] outline-none">
<option>Casual</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
<i className="w-5 h-5 text-[#8b90a7]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-6">
<label className="block text-xl font-normal text-[#1f2430] mb-2">Language</label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#cfd5e6] bg-white px-4 py-3.5 pr-12 text-lg text-[#1f2430] outline-none">
<option>English</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
<i className="w-5 h-5 text-[#8b90a7]" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between gap-4">
<label className="text-xl font-normal text-[#1f2430]">Include Emoji Suggestions</label>
<button className="relative h-7 w-14 rounded-full bg-[#6f2be7]">
<span className="absolute right-1 top-1 h-5 w-5 rounded-full bg-white"></span>
</button>
</div>
<div className="mt-10">
<button className="w-full rounded-2xl bg-gradient-to-r from-[#5f26dd] via-[#7f33ef] to-[#d05ae8] px-6 py-4 text-2xl font-medium text-white">Generate Post</button>
</div>
</section>
<div className="mt-10 flex items-center justify-between text-base text-[#6f7387]">
<p><span className="italic">Thank you for creating with</span> <a className="text-[#5f68d8] underline italic" href="#">WordPress.</a></p>
<p>Version 7.0</p>
</div>
</div>
</main>
</div>


    </>
  );
}
