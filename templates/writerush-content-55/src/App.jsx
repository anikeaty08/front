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



import { createIcons, icons } from "https://unpkg.com/lucide@latest/dist/esm/lucide.js";
window.addEventListener("DOMContentLoaded", () => {
createIcons({ icons, attrs: { "stroke-width": 1.5 } });
const banner = document.getElementById("socialBanner");
const collapsed = document.getElementById("collapsedPrompt");
const dismissBtn = document.getElementById("dismissBanner");
const createBtn = document.getElementById("createSocialPosts");
const repurposeHeaderBtn = document.getElementById("repurposeHeaderBtn");
dismissBtn?.addEventListener("click", () => {
banner.classList.remove("translate-y-0", "opacity-100");
banner.classList.add("translate-y-6", "opacity-0", "pointer-events-none");
setTimeout(() => {
banner.classList.add("hidden");
collapsed.classList.remove("hidden");
collapsed.classList.add("flex");
}, 250);
});
collapsed?.addEventListener("click", () => {
collapsed.classList.add("hidden");
banner.classList.remove("hidden", "translate-y-6", "opacity-0", "pointer-events-none");
banner.classList.add("translate-y-0", "opacity-100");
});
const handleRepurpose = () => {
window.location.href = "create-post.html?repurpose=blog-post&selected=7-content-marketing-strategies";
};
createBtn?.addEventListener("click", handleRepurpose);
repurposeHeaderBtn?.addEventListener("click", handleRepurpose);
});



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
      
<div className="flex min-h-screen">

<aside className="hidden xl:flex w-44 bg-[#1f1f1f] text-white flex-col">
<div className="h-10 flex items-center px-3 text-sm border-b border-white/10 gap-3">
<div className="w-6 h-6 rounded-full border border-white/60 flex items-center justify-center text-xs font-semibold">
            W
          </div>
<span className="text-base font-medium">Site Title</span>
</div>
<nav className="flex-1 py-3 text-sm">
<div className="px-3 py-2 text-white/90">Dashboard</div>
<div className="px-3 py-2 bg-[#2c2c2c]">Posts</div>
<div className="px-3 py-2 bg-[#4f46e5] flex items-center justify-between">
<span>WriteRush</span>
<span>‹</span>
</div>
<div className="px-3 py-2 text-white/90 font-medium">All Content</div>
<div className="px-3 py-1.5 text-white/70">Blog</div>
<div className="px-3 py-1.5 text-white/70">Brand Voice</div>
<div className="px-3 py-1.5 text-white/70">License</div>
<div className="px-3 py-1.5 text-white/70">Dashboard</div>
<div className="px-3 py-1.5 text-white/70">Keyword Research</div>
<div className="px-3 py-1.5 text-white/70">Product</div>
<div className="mt-4 px-3 py-1.5 text-white/90">Media</div>
<div className="px-3 py-1.5 text-white/90">Pages</div>
<div className="px-3 py-1.5 text-white/90">Comments</div>
<div className="mt-4 px-3 py-1.5 text-white/90">Appearance</div>
<div className="px-3 py-1.5 text-white/90">Plugins</div>
<div className="px-3 py-1.5 text-white/90">Users</div>
<div className="px-3 py-1.5 text-white/90">Tools</div>
<div className="px-3 py-1.5 text-white/90">Settings</div>
</nav>
</aside>
<div className="flex-1 flex flex-col min-w-0">

<header className="h-10 bg-[#1f1f1f] text-white flex items-center justify-between px-4 text-sm">
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-4 text-white/90">
<span>⟳ 3</span>
<span>⌕ Ctrl+K</span>
<span>💬 0</span>
<span>+ New</span>
</div>
</div>
<div className="text-sm">
            Howdy, admin
            <span className="inline-block align-middle ml-1">👤</span>
</div>
</header>
<main className="flex-1 overflow-x-hidden">
<div className="max-w-[120rem] mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-5">
<div className="grid grid-cols-1 xl:grid-cols-[18rem_minmax(0,1fr)_26rem] gap-3 sm:gap-4">

<aside className="hidden lg:block">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 min-h-[calc(100vh-7rem)] p-6 flex flex-col">
<div className="text-[2.25rem] tracking-tight font-semibold text-violet-600">
                    WriteRush
                  </div>
<div className="mt-10 space-y-8">
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">
                        ✓
                      </div>
<span className="text-2xl font-medium">Topic</span>
</div>
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">
                        ✓
                      </div>
<span className="text-2xl font-medium">Title</span>
</div>
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">
                        ✓
                      </div>
<span className="text-2xl font-medium">Outline</span>
</div>
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full bg-violet-600 text-white flex items-center justify-center text-sm">
                        ✓
                      </div>
<span className="text-2xl font-medium">Draft</span>
</div>
<div className="flex items-center gap-4">
<div className="w-7 h-7 rounded-full border border-slate-300 bg-white"></div>
<span className="text-2xl font-medium">Preview</span>
</div>
</div>
<div className="mt-auto">
<div className="border border-violet-500 rounded-xl px-4 py-3 flex items-center justify-between text-lg">
<div className="flex items-center gap-3">
<span className="text-green-600">📝</span>
<span className="font-medium">0/5</span>
</div>
<div className="flex items-center gap-3">
<span className="text-violet-600">✦</span>
<span className="font-medium">0/25</span>
</div>
</div>
</div>
</div>
</aside>

<section className="min-w-0">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-slate-200">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-slate-700">
<button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="chevron-left"></i>
</button>
<button className="w-8 h-8 rounded-lg hover:bg-slate-100 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="chevron-right"></i>
</button>
</div>
<h1 className="text-[2.25rem] tracking-tight font-semibold text-violet-600">
                        Final Draft
                      </h1>
</div>
<div className="flex items-center gap-3">
<button className="rounded-xl border border-violet-500 text-violet-600 px-5 py-3 text-xl font-medium bg-white hover:bg-slate-50 transition-colors">
                        SEO Score
                      </button>
<button className="inline-flex items-center gap-2 rounded-xl border border-violet-500 text-violet-600 px-5 py-3 text-xl font-medium bg-white hover:bg-violet-50 transition-colors" id="repurposeHeaderBtn">
<i className="w-5 h-5" data-lucide="share-2"></i>
<span>Repurpose to Social →</span>
</button>
</div>
</div>
<div className="px-4 sm:px-8 lg:px-10 py-8 space-y-10 pb-40">
<div>
<label className="block text-2xl font-medium mb-3">
                        Title
                      </label>
<div className="w-full rounded-xl bg-slate-100 text-slate-700 px-4 py-4 text-2xl">
                        7 Content Marketing Strategies That Build Trust and
                        Drive Conversions
                      </div>
</div>
<div>
<label className="block text-2xl font-medium mb-3">
                        Featured Image
                      </label>
<div className="rounded-2xl border border-dashed border-violet-400 p-6 sm:p-8">
<div className="flex justify-center mb-4">
<div className="w-12 h-12 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center">
<i className="w-6 h-6" data-lucide="image-plus"></i>
</div>
</div>
<p className="text-center text-[1.75rem] font-medium">
                          Choose any image source to set your featured image
                        </p>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="rounded-xl border border-slate-200 p-5 text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-orange-100 text-orange-500 flex items-center justify-center mb-3">
<i className="w-4 h-4" data-lucide="image"></i>
</div>
<div className="text-lg font-medium">Stock Images</div>
<div className="text-sm text-slate-400">
                              Auto find from Unsplash
                            </div>
</div>
<div className="rounded-xl border border-slate-200 p-5 text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-violet-100 text-violet-600 flex items-center justify-center mb-3">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="text-lg font-medium">Generate AI</div>
<div className="text-sm text-slate-400">
                              Uses Image credits
                            </div>
</div>
<div className="rounded-xl border border-slate-200 p-5 text-center">
<div className="w-8 h-8 mx-auto rounded-full bg-slate-100 text-slate-500 flex items-center justify-center mb-3">
<i className="w-4 h-4" data-lucide="folder"></i>
</div>
<div className="text-lg font-medium">Media Library</div>
<div className="text-sm text-slate-400">
                              WordPress Media
                            </div>
</div>
</div>
</div>
</div>
<article className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white">
<div className="flex items-start justify-between gap-4">
<h2 className="text-[2rem] tracking-tight font-semibold max-w-4xl">
                          7 Content Marketing Strategies That Build Trust and
                          Drive Conversions
                        </h2>
<div className="flex items-center gap-3 text-violet-600 pt-1">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<span className="text-slate-300">•••</span>
</div>
</div>
<p className="mt-5 text-[1.75rem] leading-relaxed text-slate-900">
                        Most brands create content—but few create content that
                        actually converts. Here's the difference: a strategic
                        content marketing approach that prioritizes value over
                        volume. I'll walk you through seven proven strategies
                        that transform casual readers into loyal customers,
                        complete with actionable steps you can implement this
                        week.
                      </p>
</article>
<article className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-white">
<div className="flex items-start justify-between gap-4">
<h2 className="text-[2rem] tracking-tight font-semibold max-w-4xl">
                          Why Content Marketing Remains Your Most Valuable
                          Growth Channel
                        </h2>
<div className="flex items-center gap-3 text-violet-600 pt-1">
<i className="w-5 h-5" data-lucide="sparkles"></i>
<span className="text-slate-300">•••</span>
</div>
</div>
<p className="mt-5 text-[1.75rem] leading-relaxed text-slate-900">
                        Content marketing generates three times more leads than
                        traditional outbound methods while costing significantly
                        less. The reason is simple: helpful content meets buyers
                        where they are, builds trust over time, and compounds in
                        value long after it's published.
                      </p>
</article>
</div>
</div>
</section>

<aside className="hidden xl:block">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-3">
<div className="rounded-xl bg-slate-100 px-4 py-3 text-[2rem] tracking-tight font-semibold text-violet-600">
                    Outline
                  </div>
<div className="mt-4 space-y-5 px-1">
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg text-slate-700">
                        H2
                      </div>
<div className="text-lg leading-snug">
                        Why Content Marketing Remains Your Most Valuable Growth
                        Channel
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        1. Audience-First Content Creation
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        2. Strategic Format Selection for Maximum Impact
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        3. Value Proposition Clarity in Every Piece
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        4. SEO Integration Without Sacrificing Readability
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        5. Customer Journey Mapping for Timely Content Delivery
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        6. Measurement and ROI Tracking Systems
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        7. Continuous Optimization Based on Performance Data
                      </div>
</div>
<div className="flex gap-3 items-start">
<div className="shrink-0 rounded-md border border-slate-200 px-2 py-1 text-lg">
                        H2
                      </div>
<div className="text-lg">
                        Building Your Content Marketing Engine
                      </div>
</div>
</div>
</div>
</aside>
</div>
</div>
</main>
</div>
</div>

<div className="fixed bottom-20 left-3 right-3 sm:left-6 sm:right-6 xl:left-[calc(11rem+1.5rem)] xl:right-6 z-40 transition-all duration-200 ease-out translate-y-0 opacity-100" id="socialBanner">
<div className="mx-auto max-w-[96rem] rounded-2xl border border-violet-200 bg-violet-50 shadow-sm">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-4 sm:px-5 py-3 border-l-4 border-violet-400 rounded-2xl">
<div className="flex items-center gap-3 min-w-0">
<div className="w-9 h-9 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center shrink-0">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</div>
<div className="min-w-0 flex flex-wrap items-center gap-x-2 gap-y-1 text-base sm:text-lg">
<span className="font-semibold text-slate-900">
                Your blog is ready!
              </span>
<span className="text-slate-600">
                Want to turn this into social media posts?
              </span>
</div>
</div>
<div className="flex items-center gap-2 shrink-0">
<button className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm sm:text-base font-medium text-slate-700 hover:bg-slate-50" id="dismissBanner">
              Maybe Later
            </button>
<button className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-4 py-2 text-sm sm:text-base font-medium text-white hover:bg-violet-700" id="createSocialPosts">
              Create Social Posts →
            </button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30">
<div className="rounded-2xl border border-slate-200 bg-white/95 backdrop-blur shadow-lg px-3 py-2 flex items-center gap-1 sm:gap-2">
<button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="wand-sparkles"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="pen-square"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="type"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="list"></i>
</button>
<button className="w-10 h-10 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-600">
<i className="w-5 h-5" data-lucide="quote"></i>
</button>
</div>
</div>

<button className="hidden fixed bottom-20 right-3 sm:right-6 z-40 w-11 h-11 rounded-full bg-violet-600 text-white shadow-lg items-center justify-center hover:bg-violet-700" id="collapsedPrompt" title="Create social posts from this blog">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</button>

    </>
  );
}
