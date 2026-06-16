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



    document.addEventListener('DOMContentLoaded', () => {
      // Router function
      function navigate(path) {
        const cleanPath = path.replace('#', '').split('?')[0];

        // Hide all views
        document.querySelectorAll('.page-view').forEach(v => v.classList.add('hidden'));

        // Route matching
        if (!cleanPath || cleanPath === '/' || cleanPath === '/index.html') {
          document.getElementById('home-view').classList.remove('hidden');
        } else if (cleanPath === '/donate') {
          document.getElementById('donate-view').classList.remove('hidden');
        } else if (cleanPath === '/volunteer') {
          document.getElementById('volunteer-view').classList.remove('hidden');
        } else if (cleanPath === '/events') {
          document.getElementById('events-view').classList.remove('hidden');
        } else if (cleanPath.startsWith('/about')) {
          document.getElementById('about-view').classList.remove('hidden');
          updateDynamicContent('about-view', cleanPath);
        } else if (cleanPath.startsWith('/programs')) {
          document.getElementById('programs-view').classList.remove('hidden');
          updateDynamicContent('programs-view', cleanPath);
        } else if (cleanPath.startsWith('/get-involved')) {
          document.getElementById('get-involved-view').classList.remove('hidden');
          updateDynamicContent('get-involved-view', cleanPath);
        } else if (cleanPath.startsWith('/news')) {
          document.getElementById('news-view').classList.remove('hidden');
          updateDynamicContent('news-view', cleanPath);
        } else {
          document.getElementById('home-view').classList.remove('hidden');
        }

        window.scrollTo(0, 0);
      }

      // Update dynamic titles/breadcrumbs
      function updateDynamicContent(viewId, path) {
        const view = document.getElementById(viewId);
        if (!view) return;

        const titleEl = view.querySelector('.dynamic-title');
        const breadcrumbEl = view.querySelector('.dynamic-breadcrumb');

        const parts = path.split('/').filter(p => p);
        if (parts.length > 0) {
          const titlePart = parts[parts.length - 1];
          // Format text: capitalize and remove dashes
          const title = titlePart.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
          const breadcrumb = parts.map(p => p.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')).join(' / ');

          if (titleEl) titleEl.textContent = title;
          if (breadcrumbEl) breadcrumbEl.textContent = breadcrumb;
        }
      }

      // Intercept clicks on local links
      document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.getAttribute('href') && link.getAttribute('href').startsWith('/')) {
          e.preventDefault();
          const path = link.getAttribute('href');
          // Add # to URL so refresh doesn't break in static environments
          history.pushState(null, '', '#' + path);
          navigate(path);
        }
      });

      // Handle browser back/forward buttons
      window.addEventListener('popstate', () => {
        navigate(window.location.hash || '/');
      });

      // Initial load based on URL hash
      navigate(window.location.hash || '/');
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky z-50 bg-[#FAFAFA]/80 w-full border-zinc-200/60 border-b top-0 backdrop-blur-md">
<div className="container md:px-6 flex h-16 mr-auto ml-auto pr-4 pl-4 items-center justify-between">
<a className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[130px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fe540417-af00-459a-a4fb-55e65dd6c513_3840w.png)] bg-cover rounded" href="/"></a>
<nav className="hidden md:flex gap-x-8 gap-y-8">
<div className="group relative">
<a className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 pt-2 pb-2" href="/about">About<iconify-icon className="transition-transform duration-200 group-hover:rotate-180 w-[14px] h-[14px] flex items-center justify-center" icon="solar:alt-arrow-down-linear"></iconify-icon></a>
<div className="absolute left-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="rounded-xl bg-white shadow-lg border border-zinc-100 p-1.5 flex flex-col">
<a className="block hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/about/our-story">Our Mission &amp; Story</a>
<a className="block hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/about/our-team">Our Team</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/about/partners">Partners</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/about/the-evolved-network-way">The Evolved Network Way</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/about/impact">Impact</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/about/financials">Financials</a>
</div>
</div>
</div>
<div className="group relative">
<a className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 pt-2 pb-2" href="/programs">
            Programs
            <iconify-icon className="transition-transform duration-200 group-hover:rotate-180 w-[14px] h-[14px] flex items-center justify-center" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute left-0 top-full w-56 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="rounded-xl bg-white shadow-lg border border-zinc-100 p-1.5 flex flex-col">
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs">All Programs</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs/the-table-project">The Table Project: Culinary</a>
<a className="block hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/programs/reclaim-the-land">Reclaim the Land: Garden</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs/project-ten">Project TEN: Family Cooking</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs/ten-way-fellowship">The TEN Way Fellowship</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs/farmers-market">School Farmers Markets</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/programs/young-chefs-journal">A Young Chef's Journal</a>
</div>
</div>
</div>
<div className="group relative">
<a className="flex items-center gap-1.5 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 pt-2 pb-2" href="/get-involved">
            Get Involved
            <iconify-icon className="transition-transform duration-200 group-hover:rotate-180 w-[14px] h-[14px] flex items-center justify-center" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute left-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="rounded-xl bg-white shadow-lg border border-zinc-100 p-1.5 flex flex-col">
<a className="block hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/donate">Donate</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/volunteer">Volunteer</a>
<a className="block hover:bg-zinc-50 hover:text-zinc-900 transition-colors text-sm font-normal text-zinc-500 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/get-involved/partnerships">Partnerships</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/get-involved/corporate-sponsorship">Corporate Sponsorship</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/events">Events</a>
</div>
</div>
</div>
<div className="group relative">
<a className="flex items-center gap-1.5 text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors py-2" href="/news">
            News
            <iconify-icon className="transition-transform duration-200 group-hover:rotate-180 w-[14px] h-[14px] flex items-center justify-center" icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<div className="absolute right-0 top-full w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
<div className="rounded-xl bg-white shadow-lg border border-zinc-100 p-1.5 flex flex-col">
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/news/newsletters">Newsletters</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/news/podcast">Podcast</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/news/in-the-news">In the News</a>
<a className="block px-3 py-2 text-sm font-normal text-zinc-500 hover:bg-zinc-50 hover:text-zinc-900 rounded-lg transition-colors" href="/news/reports">Reports</a>
</div>
</div>
</div>
</nav>
<div className="flex gap-x-4 gap-y-4 items-center">
<a className="inline-flex items-center justify-center transition-colors hover:bg-zinc-800 text-sm font-medium text-white bg-zinc-900 h-9 rounded-md pt-2 pr-4 pb-2 pl-4 shadow-sm" href="/donate">
          Donate
        </a>
</div>
</div>
</header>
<main className="flex-1 w-full relative">

<section className="page-view overflow-hidden sm:pt-32 sm:pb-40 lg:pb-48 pt-24 pb-32 relative" id="home-view" style={{maskImage: 'linear-gradient(0deg, transparent, black 20%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 20%, black 100%, transparent)'}}>
<div className="-z-10 overflow-hidden bg-[#FAFAFA] absolute top-0 right-0 bottom-0 left-0 pointer-events-none">
<iframe allow="autoplay; fullscreen; picture-in-picture" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none" frameborder="0" src="https://player.vimeo.com/video/1191670992?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0"></iframe>
<div className="bg-gradient-to-br from-[#FAFAFA]/70 via-[#ffffff]/75 to-[#FAFAFA] absolute top-0 right-0 bottom-0 left-0 justify-between"></div>
</div>
<div className="container md:px-6 z-10 text-center mr-auto ml-auto pr-4 pl-4 relative">
<a className="inline-flex items-center hover:bg-white/80 transition-colors text-xs font-medium text-zinc-600 bg-white/50 border-zinc-200/80 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-sm backdrop-blur-sm" href="/news">
<iconify-icon className="mr-2 text-zinc-400" icon="solar:star-fall-linear"></iconify-icon>
          Announcing our new community kitchen initiative
        </a>
<h1 className="sm:text-6xl md:text-7xl leading-[1.1] text-5xl font-medium text-zinc-900 tracking-tighter max-w-5xl mr-auto ml-auto">
          Cultivating growth through
          <span className="text-zinc-400">connection.</span>
</h1>
<p className="sm:text-lg leading-relaxed text-base text-zinc-800 max-w-2xl mt-6 mr-auto ml-auto">
          The Evolved Network empowers youth and communities by fostering relationships, teaching culinary skills, and building sustainable agricultural practices for a brighter tomorrow.
        </p>
<div className="flex flex-col sm:flex-row gap-4 mt-10 gap-x-4 gap-y-4 items-center justify-center">
<a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-zinc-900 text-white hover:bg-zinc-800 h-11 px-8 shadow-sm w-full sm:w-auto" href="/get-involved">
            Get Involved
          </a>
<a className="inline-flex items-center justify-center transition-colors hover:bg-zinc-50 sm:w-auto text-sm font-medium text-zinc-900 bg-white w-full h-11 border-zinc-200 border rounded-md pr-8 pl-8 shadow-sm" href="/programs">
            View Our Programs
            <iconify-icon className="ml-2 text-zinc-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="page-view hidden py-20 px-4 sm:px-6" id="donate-view">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
<div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4">Support Our Mission</h1>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">Your contribution directly supports our culinary education programs and sustainable agricultural initiatives for youth and communities.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-900"><iconify-icon icon="solar:heart-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Direct Impact</h3>
<p className="text-sm text-zinc-500 mt-1">100% of public donations go directly to funding our community programs and resources.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center shrink-0 text-zinc-900"><iconify-icon icon="solar:leaf-linear" width="20"></iconify-icon></div>
<div>
<h3 className="text-sm font-medium text-zinc-900">Sustainable Growth</h3>
<p className="text-sm text-zinc-500 mt-1">Help us build community gardens that provide fresh food and learning environments.</p>
</div>
</div>
</div>
</div>
<div className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm">
<h2 className="text-xl font-medium tracking-tight text-zinc-900 mb-6">Make a Donation</h2>
<div className="grid grid-cols-3 gap-3 mb-6">
<button className="py-3 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:border-zinc-900 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-white">$25</button>
<button className="py-3 border border-zinc-900 rounded-lg text-sm font-medium text-white bg-zinc-900 transition-all">$50</button>
<button className="py-3 border border-zinc-200 rounded-lg text-sm font-medium text-zinc-900 hover:border-zinc-900 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-white">$100</button>
</div>
<div className="mb-6">
<label className="text-xs font-medium text-zinc-500 mb-2 block">Custom Amount</label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">$</span>
<input className="w-full border border-zinc-200 rounded-lg py-2.5 pl-7 pr-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all" placeholder="0.00" type="number"/>
</div>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors">Donate Now</button>
</div>
</div>
</section>

<section className="page-view hidden py-20 px-4 sm:px-6" id="volunteer-view">
<div className="max-w-2xl mx-auto">
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-4 text-center">Volunteer With Us</h1>
<p className="text-base text-zinc-500 mb-10 text-center">Join our community of mentors, gardeners, and culinary enthusiasts.</p>
<form className="bg-white border border-zinc-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6" onsubmit="event.preventDefault()">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">First Name</label>
<input className="w-full border border-zinc-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-white" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Last Name</label>
<input className="w-full border border-zinc-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-white" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-2">Email Address</label>
<input className="w-full border border-zinc-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 transition-all bg-white" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-3">Areas of Interest</label>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group w-fit">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[4px] bg-white transition-colors peer-checked:bg-zinc-900 peer-checked:border-zinc-900 group-hover:border-zinc-400"></div>
<iconify-icon className="absolute text-white opacity-0 transition-opacity peer-checked:opacity-100 text-xs" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Culinary Education</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group w-fit">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[4px] bg-white transition-colors peer-checked:bg-zinc-900 peer-checked:border-zinc-900 group-hover:border-zinc-400"></div>
<iconify-icon className="absolute text-white opacity-0 transition-opacity peer-checked:opacity-100 text-xs" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Urban Gardening</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group w-fit">
<div className="relative flex items-center justify-center w-4 h-4">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded-[4px] bg-white transition-colors peer-checked:bg-zinc-900 peer-checked:border-zinc-900 group-hover:border-zinc-400"></div>
<iconify-icon className="absolute text-white opacity-0 transition-opacity peer-checked:opacity-100 text-xs" icon="solar:check-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-600 group-hover:text-zinc-900 transition-colors">Event Support &amp; Logistics</span>
</label>
</div>
</div>
<button className="w-full bg-zinc-900 text-white text-sm font-medium py-3 rounded-lg hover:bg-zinc-800 transition-colors mt-4 shadow-sm" type="submit">Submit Application</button>
</form>
</div>
</section>

<section className="page-view hidden py-20 px-4 sm:px-6" id="events-view">
<div className="max-w-4xl mx-auto">
<div className="flex items-end justify-between mb-10">
<div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-2">Upcoming Events</h1>
<p className="text-base text-zinc-500">Join us in the community.</p>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 py-2 px-4 rounded-lg hover:bg-zinc-50 transition-colors shadow-sm">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> View Calendar
           </button>
</div>
<div className="space-y-4">
<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:shadow-sm transition-all group">
<div className="bg-[#FAFAFA] border border-zinc-100 rounded-lg p-3 text-center min-w-[4.5rem]">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Oct</div>
<div className="text-xl font-medium tracking-tight text-zinc-900">24</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Community Harvest Dinner</h3>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> 123 Evolved Way, Chicago</p>
</div>
<button className="bg-zinc-900 text-white text-sm font-medium py-2 px-5 rounded-md hover:bg-zinc-800 transition-colors whitespace-nowrap w-full sm:w-auto shadow-sm">RSVP</button>
</div>
<div className="bg-white border border-zinc-200 rounded-xl p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center hover:shadow-sm transition-all group">
<div className="bg-[#FAFAFA] border border-zinc-100 rounded-lg p-3 text-center min-w-[4.5rem]">
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-0.5">Nov</div>
<div className="text-xl font-medium tracking-tight text-zinc-900">12</div>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium tracking-tight text-zinc-900 group-hover:text-zinc-600 transition-colors">Culinary Workshop: Fundamentals</h3>
<p className="text-sm text-zinc-500 mt-1 flex items-center gap-1.5"><iconify-icon icon="solar:map-point-linear"></iconify-icon> The Table Kitchen, Chicago</p>
</div>
<button className="bg-zinc-900 text-white text-sm font-medium py-2 px-5 rounded-md hover:bg-zinc-800 transition-colors whitespace-nowrap w-full sm:w-auto shadow-sm">RSVP</button>
</div>
</div>
</div>
</section>

<section className="page-view hidden py-24 px-4 sm:px-6" id="about-view">
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> About Us
        </div>
<div className="text-sm font-medium text-zinc-400 mb-3 dynamic-breadcrumb">About / Page</div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6 dynamic-title">Page Title</h1>
<div className="text-zinc-600 max-w-none space-y-6">
<p className="text-lg leading-relaxed text-zinc-800">The Evolved Network is dedicated to fostering growth and learning through culinary education and sustainable practices. This section contains detailed information about our mission, team, and impact.</p>
<div className="h-px w-full bg-zinc-200 my-8"></div>
<p className="text-base leading-relaxed">Content for this specific section is currently being dynamically rendered. The structure is built to scale as our initiatives continue to grow. Please browse our other programs to see what we're actively building in the community right now.</p>
</div>
</div>
</section>

<section className="page-view hidden py-24 px-4 sm:px-6" id="programs-view">
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:book-bookmark-linear"></iconify-icon> Our Programs
        </div>
<div className="text-sm font-medium text-zinc-400 mb-3 dynamic-breadcrumb">Programs / Page</div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6 dynamic-title">Page Title</h1>
<div className="text-zinc-600 max-w-none space-y-6">
<p className="text-lg leading-relaxed text-zinc-800">Our programs are designed to provide hands-on experience, fostering confidence and essential life skills through the art of cooking and agriculture.</p>
<div className="h-px w-full bg-zinc-200 my-8"></div>
<p className="text-base leading-relaxed">This program module is dynamically generated based on your selection. Check back for specific enrollment dates, curriculum details, and participant success stories.</p>
</div>
</div>
</section>

<section className="page-view hidden py-24 px-4 sm:px-6" id="get-involved-view">
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> Get Involved
        </div>
<div className="text-sm font-medium text-zinc-400 mb-3 dynamic-breadcrumb">Get Involved / Page</div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6 dynamic-title">Page Title</h1>
<div className="text-zinc-600 max-w-none space-y-6">
<p className="text-lg leading-relaxed text-zinc-800">Whether through donations, partnerships, or offering your time, your involvement directly impacts the future of our youth.</p>
<div className="h-px w-full bg-zinc-200 my-8"></div>
<p className="text-base leading-relaxed">Details for this engagement pathway are currently structured here dynamically. We are continually building out new ways for the community and corporate sponsors to interact with the Network.</p>
</div>
</div>
</section>

<section className="page-view hidden py-24 px-4 sm:px-6" id="news-view">
<div className="max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
<iconify-icon icon="solar:document-text-linear"></iconify-icon> Latest News
        </div>
<div className="text-sm font-medium text-zinc-400 mb-3 dynamic-breadcrumb">News / Page</div>
<h1 className="text-4xl font-medium tracking-tight text-zinc-900 mb-6 dynamic-title">Page Title</h1>
<div className="text-zinc-600 max-w-none space-y-6">
<p className="text-lg leading-relaxed text-zinc-800">Stay up to date with our recent milestones, community spotlights, and media features surrounding our core mission.</p>
<div className="h-px w-full bg-zinc-200 my-8"></div>
<p className="text-base leading-relaxed">This feed dynamically loads the content category you selected. Subscribe to our newsletter to receive the latest stories straight to your inbox.</p>
</div>
</div>
</section>
</main>


    </>
  );
}
