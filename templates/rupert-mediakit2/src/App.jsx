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
      

<nav className="w-full border-b border-stone-200 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

<a className="flex items-center gap-4 font-editorial font-bold text-xl tracking-wide uppercase" href="#">
<img alt="Ethics Insight Icon" className="w-auto h-6 object-cover bg-center" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05e7634f-eac6-404e-ba4d-6e025d6a0736_800w.png"/>
<span className="">Rupert Evill</span>
</a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-stone-900 transition" href="#about">About</a>
<a className="hover:text-stone-900 transition" href="#book">Book</a>
<a className="hover:text-stone-900 transition" href="#themes">Themes</a>
<a className="hover:text-stone-900 transition" href="#insights">Insights</a>
<a className="hover:text-stone-900 transition" href="#contact">Contact</a>
</div>
<div className="flex space-x-4">
<a className="text-stone-500 hover:text-stone-900 transition" href="https://www.linkedin.com/in/rupert-evill/">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon-replaced="true" fill="currentColor" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(28, 25, 23)'}} viewbox="0 0 24 24"><path className="" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
</a>
<a className="text-stone-500 hover:text-stone-900 transition" href="https://www.instagram.com/ethicsinsight/">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path className="" clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>
</nav>

<header className="max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center gap-16">

<div className="flex-1 lg:pr-10">
<h2 className="text-[10px] md:text-xs font-bold text-stone-500 tracking-[0.25em] uppercase mb-8 leading-relaxed">
                Investor | Investigator &amp; Intelligence Operative | Investment Advisor | Regenerative Homesteader
            </h2>
<h1 className="font-editorial text-5xl md:text-6xl lg:text-7xl font-medium text-stone-900 leading-[1.1] tracking-tight">
                Helping impact investors protect value and reduce risk.
            </h1>
</div>

<div className="flex-1 w-full relative">
<img alt="Rupert Evill" className="w-full h-auto object-cover border border-stone-200 shadow-sm aspect-[4/5] lg:aspect-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af3b5f29-58b6-4f39-bd6f-ed89ad1e3057_1600w.png"/>
</div>
</header>

<section className="border-y border-stone-200">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
<div className="">
<span className="block text-4xl md:text-5xl font-editorial text-stone-900 mb-2">80+</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Countries worked in</span>
</div>
<div className="">
<span className="block text-4xl md:text-5xl font-editorial text-stone-900 mb-2">500+</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Deal and integrity assessments</span>
</div>
<div className="">
<span className="block text-4xl md:text-5xl font-editorial text-stone-900 mb-2">35,000+</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Professionals trained</span>
</div>
<div className="">
<span className="block text-4xl md:text-5xl font-editorial text-stone-900 mb-2">200+</span>
<span className="text-xs text-stone-500 font-medium uppercase tracking-wider">Incidents &amp; sensitive matters handled</span>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-12 gap-16 lg:gap-24" id="about">

<div className="lg:col-span-5">
<h2 className="font-editorial text-4xl md:text-5xl text-stone-900 leading-[1.2] sticky top-32">
                The bridge between capital, better environmental outcomes, and ground truth.
            </h2>
</div>

<div className="lg:col-span-7 space-y-6 text-stone-700 text-lg leading-relaxed">
<p className="text-xl font-medium text-stone-900">Rupert Evill works with investors, boards, and deal teams when the data room and documents are not enough.</p>
<p className="">Most deals fail in the human layer: incentives, pressure, weak governance, founder dynamics, cultural blind spots, or people saying what they think investors want to hear. Rupert helps clients get closer to the truth without turning diligence into a hostile interrogation.</p>
<p className="">He has spent 25 years across investigations, intelligence, crisis response, sustainability, and integrity risk, working in more than 80 countries. He is the founder of Ethics Insight, creator of Ranulph™️ Software, Risko™️ (AI risk ontology), author of <em>Bootstrapping Ethics</em>, a Certified Fraud Examiner, and a top 1% trained behavioural analysis and investigative interviewing specialist.</p>
<p className="">Rupert sits on the Association of Corporate Investigators Advisory Council, the ACCA’s Fraud Advisory Panel, and the Association of Certified Fraud Examiners examination review council.</p>
<p className="">His work is practical, focused on asking better questions, reducing busy work, understanding the people, protecting value, and making sure Impact Finance has a better chance of doing what it promised.</p>
<p className="">Advising investors like Swedfund, Impact Fund Denmark, and British International Investment, Rupert is known for surfacing uncomfortable truths while building trust. His approach has become the Nordic benchmark for investment integrity—practical, behavioural, and effective.</p>
<p className="">When he’s not challenging risk orthodoxy, you’ll find him regenerative farming (healing the soil is one of our generation’s most essential challenges), rolling on the jiu-jitsu mat, or chasing his dogs (and kids) through the mud.</p>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24 lg:pb-32" id="book">
<div className="bg-white border border-stone-200 shadow-sm p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 md:gap-20">

<div className="md:w-2/5 aspect-[3/4] flex bg-stone-100 w-full bg-[url(https://www.ethicsinsight.co/wp-content/uploads/2023/09/Ethics-Insight-Book-1.png?w=800&amp;q=80)] bg-cover bg-center border-stone-200 border items-center justify-center">
</div>

<div className="w-full md:w-3/5">
<span className="text-[10px] font-bold tracking-[0.2em] text-stone-400 uppercase block mb-4">Featured Publication</span>
<h3 className="font-editorial text-3xl md:text-4xl text-stone-900 mb-6 leading-snug">Bootstrapping Ethics: Integrity Risk Management for Real-World Application</h3>
<p className="text-stone-600 text-lg leading-relaxed mb-8">The essential handbook for managing cross-border integrity risk without the theoretical bloat. A ground-level framework relied upon by impact investors, deal teams, and corporate investigators globally to protect capital deployment.</p>
<a className="inline-block border-b border-stone-900 text-stone-900 font-medium pb-1 hover:text-stone-600 hover:border-stone-600 transition" href="https://uk.bookshop.org/p/books/bootstrapping-ethics-integrity-risk-management-for-real-world-application-r-evill/6535430?ean=9781119874904">View Publication →</a>
</div>
</div>
</section>

<section className="bg-stone-100 py-24 lg:py-32" id="themes">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:w-2/3">
<h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">Speaking &amp; Media Themes</h3>
<h2 className="font-editorial text-4xl md:text-5xl text-stone-900 mb-6">What Rupert speaks and writes about.</h2>
<p className="text-stone-600 text-xl leading-relaxed">Beyond the BS talks for investors, boards, founders, and risk teams who need to understand what is really happening beneath the pitch deck and paperwork.</p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4 cursor-pointer" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/fraud-lives-in-the-gaps?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">Why good deals go bad</h4>
<p className="text-stone-600 leading-relaxed">The people, incentives, and blind spots that destroy value after the money moves.</p>
</div>

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/the-due-diligence-dont-sic-work?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">Impact investment and people-risk</h4>
<p className="text-stone-600 leading-relaxed">Why impact depends as much on operators, culture, and governance as it does on strategy.</p>
</div>

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/time-to-think-like-a-criminal-profiler?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">Finding the truth without creating a fight</h4>
<p className="text-stone-600 leading-relaxed">How to ask difficult questions in a way that lowers defensiveness and gets better answers.</p>
</div>

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/governance-holes-roles-and-asking?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">Making risk useful</h4>
<p className="text-stone-600 leading-relaxed">Why most risk work becomes too heavy, abstract, or tedious, and how to make it practical.</p>
</div>

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/pulling-threads?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">AI, diligence, and the human layer</h4>
<p className="text-stone-600 leading-relaxed">What AI can speed up, what it can distort, and why judgment still matters.</p>
</div>

<div className="bg-white p-10 shadow-sm border border-stone-200">
<h4 className="font-editorial text-2xl tracking-tight text-stone-900 mb-4" onclick="window.location.href='https://open.substack.com/pub/ethicsinsight/p/does-profiling-help-us-uncover-risks?r=7z8ufr&amp;utm_campaign=post-expanded-share&amp;utm_medium=web'" role="button">Crisis, pressure, and ethical failure</h4>
<p className="text-stone-600 leading-relaxed">What people do under pressure, how we rationalise poor decisions, why good systems fail, and how leaders can prepare.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 lg:py-32" id="insights">
<div className="mb-16 lg:w-2/3">
<h3 className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase mb-4">Writing, Podcasts, and Appearances</h3>
<p className="text-stone-800 text-2xl font-editorial leading-relaxed">Rupert has written, given keynotes, and been interviewed on integrity risk, investigations, crisis response, sustainability, behavioural risk, and sustainable investing.</p>
</div>

<div className="grid md:grid-cols-2 gap-16 border-t border-stone-200 pt-12">

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-8">Articles and Essays</h4>
<ul className="space-y-6">
<li className="text-lg text-stone-900"><span className="font-medium cursor-pointer" onclick="window.location.href='https://ethicsinsight.substack.com/'" role="button">The Integrity Gap</span> <span className="text-stone-400 mx-2">·</span> <span className="italic text-stone-600">GRIP / Global Relay</span></li>
<li className="text-lg text-stone-900 font-medium">GRC Outlook</li>
<li className="text-lg text-stone-900 font-medium">SCCE Compliance &amp; Ethics Blog</li>
<li className="text-lg text-stone-900 font-medium">Compliance Cosmos</li>
<li className="text-lg text-stone-900 font-medium">ACFE Insights</li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-8">Podcasts and Interviews</h4>
<ul className="space-y-6">
<li className="text-lg text-stone-900 font-medium">GRIP</li>
<li className="text-lg text-stone-900 font-medium">All Things Risk</li>
<li className="text-lg text-stone-900 font-medium">Human Risk</li>
<li className="text-lg text-stone-900 font-medium">Great Women in Compliance</li>
<li className="text-lg text-stone-900 font-medium">Ethico</li>
<li className="text-lg text-stone-900 font-medium">Ethicsverse</li>
</ul>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-100 py-24 lg:py-32">
<div className="max-w-4xl mx-auto px-6 space-y-24">

<div className="text-center">
<p className="font-editorial italic text-2xl md:text-3xl leading-relaxed mb-8 text-stone-300">
                    "I have worked with Rupert to conduct assessments and advise on integrity issues with our investment portfolio companies. He is particularly skilled at sensitively engaging with firm leadership on very tricky topics."
                </p>
<p className="text-xs tracking-widest uppercase font-bold text-stone-500">— Rita Roca, Impact Fund Denmark</p>
</div>
<hr className="border-stone-800 w-24 mx-auto"/>

<div className="text-center">
<p className="font-editorial italic text-2xl md:text-3xl leading-relaxed mb-8 text-stone-300">
                    "Working with Rupert was a great experience. Rupert’s engagement and innovative thinking were beyond what we anticipated. We wholeheartedly recommend Rupert for his creativity, inventiveness, and professionalism – a definite 10 out of 10."
                </p>
<p className="text-xs tracking-widest uppercase font-bold text-stone-500">— Rory Donaldson, Transparency International</p>
</div>
<hr className="border-stone-800 w-24 mx-auto"/>

<div className="text-center">
<p className="font-editorial italic text-2xl md:text-3xl leading-relaxed mb-8 text-stone-300">
                    "I enjoyed working with Rupert on a critical project in high-risk jurisdictions. His expertise and the quality of the analysis were outstanding, providing us with a clear improvement action plan for our investee. The contextual sector-specific risks were invaluable."
                </p>
<p className="text-xs tracking-widest uppercase font-bold text-stone-500">— Anjelika Karlsson, Swedfund</p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-32 text-center" id="contact">
<h2 className="font-editorial text-5xl text-stone-900 mb-8">Working together.</h2>
<p className="text-stone-600 text-xl leading-relaxed mb-12">
            I take on a small number of advisory, speaking, and investment projects where the work is intentional, impactful, and aligned.<br/><br/>
            If you have a specific project or collaboration in mind, please get in touch or connect with me.
        </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6">
<a className="w-full sm:w-auto bg-stone-900 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition" href="/mailto:rupert@ethicsinsight.co">
                Register Interest / Email
            </a>
<a className="w-full sm:w-auto bg-white border border-stone-900 text-stone-900 px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-50 transition" href="https://www.linkedin.com/in/rupert-evill/" target="_blank">
                Connect on LinkedIn
            </a>
</div>
</section>

<footer className="border-t border-stone-200 bg-stone-50 py-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-500 uppercase tracking-widest font-medium">© 2026 Rupert Evill. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-stone-500 uppercase tracking-widest font-bold hover:text-stone-900 transition" href="https://www.linkedin.com/in/rupert-evill/" target="_blank">LinkedIn</a>
<a className="text-xs text-stone-500 uppercase tracking-widest font-bold hover:text-stone-900 transition" href="#" target="_blank">Instagram</a>
</div>
</div>
</footer>

    </>
  );
}
