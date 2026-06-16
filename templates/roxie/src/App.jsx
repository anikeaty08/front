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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 w-full border-b border-zinc-200/50 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
<a className="flex items-center gap-2" href="#">
<i className="h-6 w-6" data-lucide="scale" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight">Roxie Hensley</span>
</a>
<nav className="hidden md:flex gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#priorities">Priorities</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#values">Wyoming Values</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-zinc-200 bg-white px-4 text-sm font-medium transition-colors hover:bg-zinc-50 hover:text-zinc-900" href="#donate">Get Involved</a>
</div>
</div>
</header>

<section className="relative overflow-hidden pt-24 pb-32 lg:pt-32 lg:pb-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex text-sm font-bold text-[#d91717] bg-zinc-50 border-zinc-200 border rounded-full mb-8 px-3 py-1 items-center">
                        Albany County Attorney Candidate
                    </div>
<h1 className="leading-[1.1] lg:text-7xl text-5xl font-medium text-rose-700 tracking-tight mb-8">
                        Justice with Integrity.<br/>
<span className="text-zinc-400">Leadership with Heart.</span>
</h1>
<p className="text-xl text-zinc-600 mb-10 leading-relaxed font-normal">
                        Roxie Hensley stands at the intersection of justice, compassion, and Wyoming grit. As a former youth guidance counselor, practicing attorney, and woman‑owned business leader, she brings unmatched experience to ensure our community remains safe and strong.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-md bg-zinc-900 px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800" href="#about">
                            Learn More
                        </a>
<a className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-200 bg-white px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50" href="#contact">
                            Volunteer
                        </a>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-100">
<img alt="Roxie Hensley in downtown Laramie" className="object-cover w-full h-full object-center" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/07da23a1-d6f9-4e62-83f8-1c669313944e_1600w.png"/></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200/50" id="about">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-200">
<img alt="Roxie Hensley close up portrait" className="object-cover w-full h-full object-top" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e914df1d-6764-4a6f-9d39-00c963eef309_1600w.png"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900 mb-6">A Life of Service</h2>
<div className="space-y-6">
<p className="text-lg text-zinc-600 leading-relaxed">
                            Roxie has spent her life helping people — guiding youth through difficult crossroads, advocating for justice in the courtroom, and building a thriving woman‑run business, Roxie’s on Grand, in the heart of downtown Laramie.
                        </p>
<p className="text-lg text-zinc-600 leading-relaxed">
                            Her leadership as Albany County GOP Chair reflects her dedication to transparency, responsibility, and community engagement. Roxie believes in a justice system that protects the innocent, holds offenders accountable, and strengthens the fabric of Albany County.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<i className="mx-auto h-12 w-12 text-zinc-300 mb-8" data-lucide="compass" strokeWidth="1.5"></i>
<h2 className="text-4xl font-medium tracking-tight text-zinc-900 mb-8">Why Roxie is Running</h2>
<p className="text-xl text-zinc-600 leading-relaxed max-w-3xl mx-auto">
                Roxie is running for County Attorney because Albany County deserves a leader who shows up, listens, and acts with integrity. She believes in a justice system that reflects Wyoming’s core values: personal responsibility, limited government, respect for the law, and strong communities. Roxie is committed to ensuring that victims are heard, offenders are held accountable, and the law is applied consistently and fairly.
            </p>
</div>
</section>

<section className="py-32 bg-zinc-900 text-white" id="priorities">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Core Priorities</h2>
<p className="text-lg text-zinc-400">A clear vision for a safer, stronger Albany County.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div className="">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-6">
<i className="h-6 w-6 text-zinc-300" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Public Safety First</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Roxie will work tirelessly to ensure Albany County remains a safe place to live, work, and raise a family.
                    </p>
</div>

<div className="">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-6">
<i className="h-6 w-6 text-zinc-300" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Protecting Our Youth</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        With her background as a guidance counselor, Roxie understands the importance of early intervention, accountability, and second chances.
                    </p>
</div>

<div>
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-6">
<i className="h-6 w-6 text-zinc-300" data-lucide="scale" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Responsible Prosecution</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Justice must be consistent, transparent, and rooted in the law. Roxie will ensure cases are handled efficiently and ethically.
                    </p>
</div>

<div className="">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-6">
<i className="h-6 w-6 text-zinc-300" data-lucide="badge" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Supporting Law Enforcement</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        Roxie values strong partnerships with local law enforcement, ensuring they have the support and clarity needed.
                    </p>
</div>

<div className="">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-800 border border-zinc-700 mb-6">
<i className="h-6 w-6 text-zinc-300" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Community‑Centered Justice</h3>
<p className="text-lg text-zinc-400 leading-relaxed">
                        A justice system works best when it reflects the people it serves. Roxie is committed to listening and being present.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32" id="values">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-24">
<div className="">
<div className="flex items-center gap-3 mb-6">
<i className="h-6 w-6 text-zinc-400" data-lucide="mountain" strokeWidth="1.5"></i>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Wyoming Values</h2>
</div>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
                        Wyoming is built on strong shoulders: hard work, honesty, and neighbors helping neighbors. Roxie embodies these values in every role she’s held. She believes in limited government, personal responsibility, and protecting the freedoms that define our state.
                    </p>
<p className="text-lg text-zinc-600 leading-relaxed">
                        As County Attorney, she will uphold the law with fairness and defend the rights of Albany County citizens.
                    </p>
</div>
<div>
<div className="flex items-center gap-3 mb-6">
<i className="h-6 w-6 text-zinc-400" data-lucide="map-pin" strokeWidth="1.5"></i>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Community Roots</h2>
</div>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">
                        From the heart of downtown at Roxie’s on Grand to her years of service helping local youth, Roxie’s life is woven into the fabric of Albany County. She understands the challenges families face, the importance of safe neighborhoods, and the value of strong local leadership.
                    </p>
<p className="text-lg text-zinc-600 leading-relaxed">
                        Roxie isn’t running to build a résumé — she’s running to serve the community she loves.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<p className="text-lg text-zinc-700 leading-relaxed italic mb-6">“Roxie shows up for Albany County — every time, every season.”</p>
<div className="flex text-zinc-300">
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<p className="text-lg text-zinc-700 leading-relaxed italic mb-6">“A leader with heart, grit, and the courage to do what’s right.”</p>
<div className="flex text-zinc-300">
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<p className="text-lg text-zinc-700 leading-relaxed italic mb-6">“She understands our youth, our families, and our future.”</p>
<div className="flex text-zinc-300">
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between">
<p className="text-lg text-zinc-700 leading-relaxed italic mb-6">“Roxie brings fairness, strength, and Wyoming values to every decision.”</p>
<div className="flex text-zinc-300">
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="h-4 w-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-zinc-200 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-900 z-0"></div>
<div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6">Join the Campaign</h2>
<p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Albany County deserves leadership rooted in integrity, experience, and genuine care for our community. Join Roxie in building a safer, stronger future for every family in our county.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100">
                    Learn More
                </button>
<button className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                    Get Involved
                </button>
<button className="inline-flex h-12 items-center justify-center rounded-md border border-zinc-700 bg-transparent px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
                    Contact Campaign
                </button>
</div>
</div>
</section>

<footer className="bg-white py-16 border-t border-zinc-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<i className="h-5 w-5 text-zinc-900" data-lucide="scale" strokeWidth="1.5"></i>
<span className="text-lg font-medium tracking-tight text-zinc-900">Roxie Hensley</span>
</a>
<p className="text-lg text-zinc-500 max-w-xs">
                        Justice with Integrity. Leadership with Heart. Wyoming Values in Action.
                    </p>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Campaign</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About Roxie</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#priorities">Priorities</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#values">Wyoming Values</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-medium text-zinc-900 mb-4 tracking-tight">Connect</h3>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
<li><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Volunteer</a></li>
<li className=""><a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Donate</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-100">
<p className="text-xs text-zinc-400">© 2024 Roxie Hensley for Albany County Attorney. Paid for by the committee.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<i className="h-5 w-5" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
