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
gtag('config', 'G-FX9W23RLSW');



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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 md:pt-6 md:px-6 pointer-events-none">
<nav className="glass flex md:gap-10 transition-all duration-300 w-full max-w-5xl pointer-events-auto border-gray-200/60 border rounded-full pt-2 pr-2 pb-2 pl-5 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] gap-x-4 gap-y-4 items-center justify-between">

<a className="group flex items-center gap-2 shrink-0" href="#">
<span className="md:text-2xl group-hover:text-rose-600 transition-colors text-xl font-medium italic text-gray-900 tracking-tight font-serif">
            Stacked Marketing
          </span>
</a>

<div className="flex items-center gap-4 md:gap-6 shrink-0">
<a className="hidden sm:flex items-center gap-1.5 hover:text-gray-900 transition-colors text-xs font-medium text-gray-500 font-montserrat" href="https://calendly.com/stackedmarketing-info/30min">
            info@stackedmarketing.com
          </a>
<a className="md:px-5 md:py-2.5 transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-[#c9a646]/20 hover:bg-[#c9a646] shrink-0 text-xs font-medium text-white font-montserrat bg-gray-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-md" href="https://calendly.com/stackedmarketing-info/30min">
            Let's Talk
          </a>
</div>
</nav>
</header>
<main className="md:pt-32 md:px-6 max-w-7xl mr-auto ml-auto pt-28 pr-4 pb-24 pl-4">

<section className="md:rounded-[2.5rem] md:p-12 lg:p-20 overflow-hidden md:mb-16 text-center bg-white border-gray-200/60 border rounded-[2rem] mb-12 pt-12 pr-6 pb-12 pl-6 relative shadow-[0_1px_2px_rgba(0,0,0,0.02)]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="flex flex-col z-10 max-w-5xl mr-auto ml-auto relative items-center">

<div className="animate-fade-up delay-100 text-[10px] uppercase md:mb-8 font-semibold text-[#c9a646] tracking-widest font-montserrat bg-slate-50 w-fit border-slate-50 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3">
            For B2B Companies
          </div>

<h1 className="animate-fade-up delay-200 sm:text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] md:leading-[0.95] md:mb-8 text-4xl font-medium text-gray-900 tracking-tighter font-serif mb-6">
            We'll Book You 20 Qualified Sales Calls In 60 Days, Or you Don't Pay
          </h1>

<p className="animate-fade-up delay-300 leading-relaxed md:text-xl md:mb-12 text-base font-light text-stone-950 max-w-2xl mb-8 pr-2 pl-2">
            We build and run your full cold email system. 100,000 to 200,000
            personalized emails over 60 days, sent to the industry, company
            size, and job titles you've defined. You only pay per call.
          </p>

<div className="animate-fade-up delay-500 relative w-full max-w-4xl rounded-xl md:rounded-[2rem] border-2 md:border-4 shadow-xl md:shadow-2xl overflow-hidden mb-8 md:mb-12 ring-1 bg-gray-900 border-white/50 shadow-gray-200 ring-gray-900/5">
<div className="" style={{position: 'relative', paddingBottom: '56.25%', height: '0'}}>
<iframe allowfullscreen="" className="" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/9784f841274a4bfea2f5c1caa1fbc4cd" style={{position: 'absolute', top: '0', left: '0', width: '100%', height: '100%'}} webkitallowfullscreen=""></iframe>
</div>
</div>

<div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center w-full mb-6">
<a className="sm:w-auto md:py-4 hover:shadow-xl hover:shadow-[#c9a646]/20 transition-all duration-300 flex items-center justify-center gap-2 group hover:bg-[#c9a646] text-sm font-medium text-white font-montserrat bg-gray-900 w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="https://calendly.com/stackedmarketing-info/30min">
              Book a Free Strategy Call
            </a>
</div>

</div>
</section>

<div className="md:py-12 md:mb-12 text-center w-full border-gray-100 border-b mb-8 pt-8 pb-8">
<h3 className="md:text-2xl text-xl text-gray-900 font-serif mb-2">
          Our Experience
        </h3>
<div className="marquee-mask relative overflow-hidden">
<div className="flex w-max animate-infinite-scroll">

<div className="flex md:gap-16 md:px-8 md:scale-100 pr-4 pl-4 scale-90 gap-x-10 gap-y-10 items-center">
<div className="flex items-center gap-2">
<img alt="Redis" className="md:h-[43px] w-auto h-[32px] object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo-redis_%28old%29.svg/3840px-Logo-redis_%28old%29.svg.png"/>
</div>
<div className="flex items-center gap-2">
<img alt="Mole Street" className="md:h-8 w-auto h-6 object-contain" src="https://4949049.fs1.hubspotusercontent-na1.net/hubfs/4949049/Logo%20-%20Horizontal.svg"/>
</div>
<div className="flex items-center gap-2">
<img alt="MindsDB" className="md:h-[85px] w-auto h-[57px] object-contain" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b7f48a55cb259f2dce1b083a3cd2786d/mindsdb.png"/>
</div>
<div className="flex items-center gap-2">
<span className="md:text-lg text-base font-semibold">
<img alt="Userlane" className="md:h-[43px] w-auto h-[32px] object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOFwws3nxFhoGH0szc1XFhvGIbk5RoZ04sg&amp;s"/>
</span>
</div>
<div className="flex items-center gap-2">
<span className="md:text-lg text-base font-semibold">
<img alt="Aura Build Placeholder" className="transition-all cursor-pointer md:h-[120px] w-auto h-[140px] object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBUrkD8KpP_ND3lhW1VnatI1jcHmbF5_EyLg&amp;s"/>
</span>
</div>
</div>

<div className="flex md:gap-16 md:px-8 md:scale-100 pr-4 pl-4 scale-90 gap-x-10 gap-y-10 items-center">
<div className="flex items-center gap-2">
<img alt="Redis" className="md:h-[43px] w-auto h-[32px] object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Logo-redis_%28old%29.svg/3840px-Logo-redis_%28old%29.svg.png"/>
</div>
<div className="flex items-center gap-2">
<img alt="Mole Street" className="md:h-8 w-auto h-6 object-contain" src="https://4949049.fs1.hubspotusercontent-na1.net/hubfs/4949049/Logo%20-%20Horizontal.svg"/>
</div>
<div className="flex items-center gap-2">
<img alt="MindsDB" className="md:h-[85px] w-auto h-[57px] object-contain" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_b7f48a55cb259f2dce1b083a3cd2786d/mindsdb.png"/>
</div>
<div className="flex items-center gap-2">
<span className="md:text-lg text-base font-semibold">
<img alt="Userlane" className="md:h-[43px] w-auto h-[32px] object-contain" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOFwws3nxFhoGH0szc1XFhvGIbk5RoZ04sg&amp;s"/>
</span>
</div>
<div className="flex items-center gap-2">
<span className="md:text-lg text-base font-semibold">
<img alt="Ultralytics" className="md:h-[172px] w-auto h-[128px] object-contain" src="https://www.hpcwire.com/wp-content/uploads/2025/09/ultralytics.png"/>
</span>
</div>
</div>
</div>
</div>
</div>
<section className="md:py-24 md:px-6 max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
<div className="text-center mb-12 md:mb-16">
<span className="uppercase block text-xs font-semibold text-[#c9a646] tracking-widest font-montserrat mb-3">
            Featured Case Study
          </span>
<h2 className="md:text-5xl text-3xl font-medium text-gray-900 tracking-tight font-serif">
            How We Closed $65K From a $400 Cold Email Campaign
          </h2>
</div>
<div className="md:rounded-[2.5rem] md:p-10 lg:p-12 flex flex-col lg:flex-row gap-10 md:gap-16 bg-white border-gray-200/60 border rounded-[2rem] pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-10 gap-y-10 items-center">

<div className="w-full lg:w-1/2 relative aspect-square rounded-[1.5rem] overflow-hidden bg-gray-100 border border-gray-200 group">
<img alt="Case Study Results" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-white/20 shadow-xl rounded-2xl p-4 flex items-center gap-4">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div className="">
<div className="md:text-2xl text-xl font-semibold text-gray-900 font-montserrat">
                  $65,000
                </div>
<div className="uppercase text-xs font-medium text-gray-500 tracking-wider">
                  Revenue Closed
                </div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center">
<div className="flex text-4xl font-semibold text-black font-montserrat mb-8 gap-x-2 gap-y-2 items-center"></div>
<div className="space-y-6 md:space-y-8">
<div className="">
<h3 className="text-lg md:text-xl font-medium text-gray-900 font-montserrat mb-2 flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:danger-circle-linear" width="20"></iconify-icon>
                  The Challenge
                </h3>
<p className="md:text-base leading-relaxed text-sm font-light text-gray-500">
                  Our client had no working outbound channel. Their pipeline was
                  100% inbound and referral, and growth had flattened.
                </p>
</div>
<div className="h-px w-full bg-gray-100"></div>
<div className="">
<h3 className="md:text-xl flex items-center gap-2 text-lg font-medium text-gray-900 font-montserrat mb-2">
<iconify-icon className="text-yellow-500" icon="solar:lightbulb-bolt-linear" width="20"></iconify-icon>
                  The Solution
                </h3>
<p className="md:text-base leading-relaxed text-sm font-light text-gray-500">
                  We built and ran a complete cold email system end to end.
                  Campaign assets included:
                  <span className="block mt-3 space-y-1.5 pl-1">
<span className="flex gap-2 items-start">
<span className="text-gray-400">•</span>
<span className="">
                        1,300 verified prospects matching their ICP
                      </span>
</span>
<span className="flex gap-2 items-start">
<span className="text-gray-400">•</span>
<span className="">
                        3 personalized messaging scripts targeting their core
                        pain points
                      </span>
</span>
<span className="flex gap-2 items-start">
<span className="text-gray-400">•</span>
<span className="">25 sending domains + 50 inboxes</span>
</span>
<span className="flex gap-2 items-start">
<span className="text-gray-400">•</span>
<span className="">1 deal closed at $65k</span>
</span>
</span>
</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-100">
<div className="">
<div className="md:text-4xl text-3xl text-gray-900 font-serif mb-1">
                    $65,000
                  </div>
<div className="uppercase text-xs font-medium text-gray-400 tracking-wider font-montserrat">
                    Revenue Closed
                  </div>
</div>
<div className="">
<div className="md:text-4xl text-3xl text-gray-900 font-serif mb-1">
                    16,250%
                  </div>
<div className="uppercase text-xs font-medium text-gray-400 tracking-wider font-montserrat">
                    ROI
                  </div>
</div>
<div className="">
<div className="md:text-4xl text-3xl text-gray-900 font-serif mb-1">
                    $400
                  </div>
<div className="uppercase text-xs font-medium text-gray-400 tracking-wider font-montserrat">
                    Campaign Cost
                  </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-24 max-w-7xl mr-auto ml-auto pt-16 pb-16">
<h2 className="text-4xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight text-center mb-12 md:mb-16">
          What Our Clients Say
        </h2>
<div className="flex overflow-x-auto gap-6 pb-8 px-4 md:px-0 snap-x snap-mandatory w-full scroll-smooth lg:grid lg:overflow-visible lg:pb-0 lg:snap-none [scrollbar-width:none] [-ms-overflow-style:none] [&amp;::-webkit-scrollbar]:hidden lg:grid-cols-3 max-w-7xl mx-auto lg:gap-8">

<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center">
<p className="leading-relaxed text-lg font-light italic text-gray-500 mb-10">
              Harry is a highly skilled digital marketer who knows how to design
              effective marketing funnels and create the content assets that
              nurture leads through them. At Mole Street, his work with cold
              email and conversion copy helped increase monthly pipeline
              contribution by more than 200% and convert leads through a wide
              range of deliverables, including sales emails, landing pages,
              website copy, and more.
            </p>
<div className="flex items-center gap-4">
<img alt="Neil Anderson" className="shrink-0 w-12 h-12 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2691d35-e224-4940-9d4c-c76b5af4dce4_320w.jpg"/>
<div className="">
<h4 className="text-lg font-medium text-gray-900">Neil Anderson</h4>
<p className="text-base font-light text-gray-400">
                  Fractional CMO, Mole Street
                </p>
</div>
</div>
</div>


<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center">
<p className="leading-relaxed text-lg font-light italic text-gray-500 mb-10">"Harry did a great job building outbound
  campaigns and funnel copy that actually got responses from developers. His writing was always high quality, and he was
  able to adapt to fit our voice and style. Most importantly, he created outreach that could resonate with developers,
  which is a tricky audience to reach. Harry is a skilled writer and I was happy to work with him on my team!"</p>
<div className="flex items-center gap-4">
<img alt="Gavin Cahill" className="shrink-0 w-12 h-12 object-cover border-gray-100 border rounded-full" src="https://res.cloudinary.com/dcl96injm/image/upload/v1778182517/Gavin_Cahill_vzipix.jpg"/>
<div className="">
<h4 className="text-lg font-medium text-gray-900">Gavin Cahill</h4>
<p className="text-base font-light text-gray-400">Marketing Manager, Redis</p>
</div>
</div>
</div>
<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-gray-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] flex flex-col justify-between shrink-0 w-[85vw] sm:w-[400px] lg:w-auto snap-center">
<p className="leading-relaxed text-lg font-light italic text-gray-500 mb-10">
              Harry built cold email campaigns for us that drove a 103% lift in
              pipeline. What sets him apart is the funnel strategy underneath.
              The emails, landing pages, and follow-up all work together, so the
              leads we generated actually turned into revenue.
            </p>
<div className="flex items-center gap-4">
<img alt="Glenn Jocher" className="shrink-0 w-12 h-12 object-cover border-gray-100 border rounded-full" src="https://content.api.news/v3/images/bin/db2f3093224863101773a6da90d4015b"/>
<div className="">
<h4 className="text-lg font-medium text-gray-900">Zac Radbone</h4>
<p className="text-base font-light text-gray-400">
                  Founder, Rad Digital
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mr-auto ml-auto px-4 md:px-0 mb-16 md:mb-24"></section>

<section className="md:py-20 max-w-6xl mr-auto ml-auto pt-12 pb-12">
<h2 className="md:text-5xl md:mb-16 text-3xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10 pr-4 pl-4">
          Why Cold Email Hasn't Worked For You
        </h2>
<div className="grid md:grid-cols-3 gap-6 md:gap-8 gap-x-6 gap-y-6">

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#fdf6e3] to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#fdf6e3] text-[#c9a646]">
<iconify-icon height="24" icon="solar:graph-down-linear" width="24"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">
              You Ran It Yourself
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500">
              You bought the tools, set up inboxes, sent the emails. Most landed
              in spam. The replies you got were from people angry to be on the
              list.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#fdf6e3] to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#fdf6e3] text-[#c9a646]">
<iconify-icon className="" height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">
              You Hired An Agency
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500">
              They promised qualified calls and charged $5K a month. The
              meetings had no budget, no timeline, no real reason to take the
              call. You closed nothing and cancelled.
            </p>
</div>

<div className="md:p-8 md:rounded-3xl hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-[#fdf6e3] to-white rounded-[1.5rem] pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center mb-5 md:mb-6 bg-[#fdf6e3] text-[#c9a646]">
<iconify-icon height="24" icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="md:text-xl md:mb-3 text-lg font-semibold text-gray-900 font-montserrat mb-2">
              You Wrote It Off
            </h3>
<p className="leading-relaxed text-sm font-light text-gray-500">
              You decided your niche is too sophisticated, your prospects only
              buy through referrals, or that cold email doesn't work for your
              industry. So you stopped trying.
            </p>
</div>
</div>
</section>




<section className="relative bg-white py-[60px] px-[24px] md:py-[80px] lg:py-[120px] lg:px-[80px] overflow-hidden w-[100vw] ml-[calc(50%-50vw)] mt-16 mb-16 md:mt-24 md:mb-24 font-montserrat">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,166,70,0.15)_0%,transparent_60%)]"></div>
<div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-center">

<h2 className="text-[36px] md:text-[44px] lg:text-[56px] leading-tight font-bold text-gray-900 font-serif text-center mb-[16px]">
            The 60-Day System That Books You Calls
          </h2>
<p className="text-gray-600 text-[16px] md:text-[18px] text-center max-w-[640px] mx-auto mb-[48px] font-light">
            We build and run your entire cold email system for 60 days. You keep
            everything we build, forever.
          </p>
<div className="text-[16px] animate-[pulse_2s_ease-in-out_infinite] cursor-pointer font-bold text-white bg-[#c9a646] rounded-full mb-[64px] pt-[12px] pr-[28px] pb-[12px] pl-[28px]" onclick="window.location.href='https://calendly.com/stackedmarketing-info/30min'" role="button">
            Book Your Free Strategy Call
          </div>

<div className="bg-[#111827] border rounded-[24px] p-[32px] md:p-[64px] w-full animate-fade-up border-[#c9a646]/20">
<div className="flex flex-col md:flex-row gap-[48px] md:gap-[40px] lg:gap-[80px]">

<div className="flex-1">
<h3 className="text-[#c9a646] font-bold text-[28px] mb-[32px]">
                  What You Get
                </h3>
<div className="flex flex-col gap-[28px]">

<div className="flex items-start gap-[24px] animate-fade-up delay-100">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        Full Infrastructure Setup
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        25 sending domains and 50 inboxes, fully warmed and
                        configured.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-200">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-[18px] font-bold text-white mb-1">
                        Tailored ICP Prospect List
                      </h4>
<p className="text-[15px] leading-relaxed font-normal text-[#9CA3AF]">
                        A verified list built from scratch around your exact
                        buyer profile.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-300">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-[18px] font-bold text-white mb-1">
                        Deep Personalization at Scale
                      </h4>
<p className="text-[15px] leading-relaxed font-normal text-[#9CA3AF]">
                        Every email researched and tailored using AI, the
                        prospect's website, role, and recent activity.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-500">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        Reply Management and Call Booking
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        We qualify every response and put booked meetings on
                        your calendar.
                      </p>
</div>
</div>
</div>
</div>

<div className="flex-1">
<h3 className="text-[#c9a646] font-bold text-[28px] mb-[32px]">
                  After 60 Days
                </h3>
<div className="flex flex-col gap-[28px]">

<div className="flex items-start gap-[24px] animate-fade-up delay-100">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        You Keep Everything
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        Domains, inboxes, lead list, copy, and SOPs are all
                        yours.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-200">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        Run It Yourself
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        Hand it to your SDR or take it in-house with the
                        playbook we leave behind.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-300">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        Or We Keep Going
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        Optional ongoing management if you want it fully off
                        your plate.
                      </p>
</div>
</div>

<div className="flex items-start gap-[24px] animate-fade-up delay-500">
<iconify-icon aria-hidden="true" className="text-[#c9a646] shrink-0 mt-0.5" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div className="">
<h4 className="text-white font-bold text-[18px] mb-1">
                        No Retainer, Ever
                      </h4>
<p className="text-[#9CA3AF] text-[15px] font-normal leading-relaxed">
                        You only pay per booked call. Zero monthly fees, zero
                        subscription.
                      </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-[48px] pt-[48px] pb-[32px] md:pb-[64px] px-[32px] md:px-[64px] -mx-[32px] md:-mx-[64px] -mb-[32px] md:-mb-[64px] border-t border-white/10 rounded-b-[24px] flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-up delay-500 bg-[linear-gradient(to_bottom,rgba(201,166,70,0.08),transparent)]">
<div className="w-full md:w-[60%]">
<h3 className="text-white font-bold text-[28px] mb-[12px]">
                  The Guarantee
                </h3>
<p className="text-[#9CA3AF] text-[16px] leading-[1.6] font-normal">
                  20 qualified calls in 60 days, or you don't pay. You only pay
                  per booked call we deliver. No retainer, no monthly fee, no
                  commitment beyond the call you booked.
                </p>
</div>
<div className="w-full md:w-[40%] flex md:justify-end">
<a className="w-full text-center md:w-auto text-white font-bold text-[17px] py-[18px] px-[32px] rounded-full transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#111827] bg-[#c9a646] hover:bg-[#b89539]" href="#book-call">
                  See If You Qualify →
                </a>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-[120px] overflow-hidden font-montserrat bg-white w-[100vw] ml-[calc(50%-50vw)] pt-[80px] pr-[24px] pb-[80px] pl-[24px] relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,166,70,0.15)_0%,transparent_60%)]"></div>
<div className="max-w-[900px] mx-auto relative z-10 flex flex-col items-center">
<h2 className="text-[36px] md:text-[56px] font-semibold text-gray-900 text-center mb-[16px] font-serif tracking-tight">
            How It Works
          </h2>
<p className="text-[16px] md:text-[18px] text-gray-600 text-center max-w-[540px] mx-auto mb-[80px] font-light">
            From strategy to booked meetings in 6 clear steps.
          </p>
<div className="flex flex-col gap-[24px] w-full">

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  01
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:target"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Learn Your Business
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  We map your offer, your best clients, and your target ICP. The
                  goal is to understand your business well enough to represent
                  you in the inbox.
                </p>
</div>
</div>

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  02
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:mail"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Build Your Infrastructure
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  25 sending domains and 50 inboxes, fully authenticated and
                  warmed. The technical work that keeps every email out of spam.
                </p>
</div>
</div>

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  03
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:users"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Build Your Prospect List
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  A verified list of decision-makers who match your exact
                  criteria, sourced from Apollo, Clutch, and custom-built data
                  sets.
                </p>
</div>
</div>

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  04
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:pen-tool"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Write Your Campaigns
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  Short, personalized emails that start real conversations.
                  Every message is researched and tailored to the prospect, not
                  blasted from a template.
                </p>
</div>
</div>

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  05
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:bar-chart-3"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Launch and Manage Everything
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  We send, monitor, qualify replies, handle objections, and book
                  meetings on your calendar. You don't lift a finger.
                </p>
</div>
</div>

<div className="bg-white border border-[#c9a646]/20 rounded-[16px] p-[24px] md:p-[32px] flex flex-row items-center w-full gap-6 shadow-sm">
<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 shrink-0 w-[48px] md:w-[130px]">
<span className="text-[40px] md:text-[56px] font-semibold text-[#c9a646]/40 leading-none">
                  06
                </span>
<div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-xl bg-[#c9a646]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#c9a646] text-xl md:text-2xl" icon="lucide:calendar"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-[8px]">
<h3 className="text-[18px] md:text-[22px] font-semibold text-gray-900 m-0 font-montserrat tracking-tight">
                  We Optimize and Hand Over
                </h3>
<p className="text-[15px] md:text-[16px] text-gray-600 leading-[1.6] m-0 font-light">
                  Weekly performance reports, continuous A/B testing, and full
                  system handover when ready.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-5xl mx-auto px-4 md:px-6">
<h2 className="md:text-4xl lg:text-[40px] text-3xl font-medium text-gray-900 tracking-tight font-serif text-center mb-10">
          The Complete Cold Email System
        </h2>
<div className="md:p-14 lg:p-16 overflow-hidden bg-white border-gray-200/80 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-64 bg-[radial-gradient(ellipse_at_top,#fef3c7_0%,transparent_60%)] opacity-70 pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-[10px] uppercase font-semibold text-[#d4b04c] tracking-[0.25em] font-montserrat mb-3">
              The Ecosystem
            </span>
<h3 className="md:text-4xl text-3xl text-gray-900 tracking-tight font-serif text-center mb-5">
              Everything We Build for You
            </h3>
<p className="text-[15px] leading-[1.6] font-light text-gray-500 text-center max-w-[46rem] mb-14">
              We build, deploy, and run the full cold email system on your
              behalf. Infrastructure, list, copy, replies, and optimization are
              all handled by us. You only show up for the booked calls.
            </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-24 gap-y-4 w-full max-w-3xl mx-auto px-4 md:px-0">

<div className="space-y-4">
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    ICP Strategy &amp; Definition
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Sub-Niche Segmentation
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Domain Research &amp; Purchase
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    DNS Configuration (SPF, DKIM, DMARC)
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Inbox Provisioning
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Inbox Warmup (2 Weeks)
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Lead Sourcing &amp; Mining
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Triple Email Verification
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Homepage H1 Scraping
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Website Research per Prospect
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="shrink-0 w-[18px] h-[18px]" data-icon-replaced="true" fill="none" strokeWidth="2" style={{color: 'rgb(75, 85, 99)', width: '18px', height: '18px'}} viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    LinkedIn Trigger Research
                  </span>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Subject Line Writing &amp; A/B Testing
                  </span>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Email Body Copywriting
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Multi-Step Sequence Design
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Smartlead/Instantly Setup
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Daily Send Monitoring
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Deliverability Audits
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Reply Inbox Management
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Reply Qualification
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Calendar Booking
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    Weekly Performance Reports
                  </span>
</div>
<div className="flex items-center gap-4">
<svg className="w-[18px] h-[18px] shrink-0" fill="none" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" fill="#fef9c3" r="10" stroke="#fcd34d" strokeWidth="1.5"></circle>
<path d="M8 12L11 15L16 9" stroke="#d97706" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[13px] font-medium text-gray-500">
                    SOP Documentation &amp; Handoff
                  </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24">
<div className="grid md:grid-cols-2 gap-12 md:gap-16 lg:gap-24 items-center">

<div className="flex flex-col">
<h2 className="md:text-5xl lg:text-[56px] leading-[1.1] text-4xl font-medium text-slate-900 tracking-tight font-serif mb-8">
              About Stacked Marketing
            </h2>
<div className="space-y-6 text-base md:text-lg text-gray-500 font-light leading-relaxed">
<div className="w-full">
<p className="md:text-lg leading-relaxed text-base font-light text-gray-500 mt-0 mr-0 mb-0 ml-0">
                  Harry Maule is a B2B copywriter with 10+ years of experience
                  writing for tech, SaaS, and global enterprise. He brings the
                  same conversion principles that produce results in ads,
                  landing pages, and email sequences to every cold email
                  campaign Stacked Marketing runs.
                </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[16px] md:gap-[20px] mt-[48px] mb-[48px]">

<div className="bg-[#FAF8F3] border border-[#c9a646]/20 rounded-[16px] p-[28px] md:p-[24px] lg:p-[28px] flex flex-col items-center text-center hover:border-[#c9a646]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-[56px] h-[56px] rounded-[16px] bg-[#c9a646]/10 flex items-center justify-center mb-[16px] shrink-0">
<iconify-icon className="text-[#c9a646]" height="40" icon="lucide:graduation-cap" width="40"></iconify-icon>
</div>
<h4 className="text-[18px] lg:text-[22px] font-semibold text-[#1A1A2E] leading-[1.3] mb-[8px] font-montserrat tracking-tight">
                      Enterprise Masterclasses
                    </h4>
<p className="text-[14px] font-normal text-[#5C5C70] leading-[1.5] font-montserrat m-0">
                      Delivered for Warburtons (£1B+) and Cushman &amp;
                      Wakefield ($3B+)
                    </p>
</div>

<div className="bg-[#FAF8F3] border border-[#c9a646]/20 rounded-[16px] p-[28px] md:p-[24px] lg:p-[28px] flex flex-col items-center text-center hover:border-[#c9a646]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-[56px] h-[56px] rounded-[16px] bg-[#c9a646]/10 flex items-center justify-center mb-[16px] shrink-0">
<iconify-icon className="text-[#c9a646]" height="40" icon="lucide:trending-up" width="40"></iconify-icon>
</div>
<h4 className="text-[18px] lg:text-[22px] font-semibold text-[#1A1A2E] leading-[1.3] mb-[8px] font-montserrat tracking-tight">
                      $20M+ Generated
                    </h4>
<p className="text-[14px] font-normal text-[#5C5C70] leading-[1.5] font-montserrat m-0">
                      In conversion copy across ads, landing pages, and email
                      sequences
                    </p>
</div>

<div className="bg-[#FAF8F3] border border-[#c9a646]/20 rounded-[16px] p-[28px] md:p-[24px] lg:p-[28px] flex flex-col items-center text-center hover:border-[#c9a646]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-[56px] h-[56px] rounded-[16px] bg-[#c9a646]/10 flex items-center justify-center mb-[16px] shrink-0">
<iconify-icon className="text-[#c9a646]" height="40" icon="lucide:zap" width="40"></iconify-icon>
</div>
<h4 className="text-[18px] lg:text-[22px] font-semibold text-[#1A1A2E] leading-[1.3] mb-[8px] font-montserrat tracking-tight">
                      $2B+ Unicorn Client
                    </h4>
<p className="text-[14px] font-normal text-[#5C5C70] leading-[1.5] font-montserrat m-0">
                      Marketing consultant for Redis
                    </p>
</div>

<div className="bg-[#FAF8F3] border border-[#c9a646]/20 rounded-[16px] p-[28px] md:p-[24px] lg:p-[28px] flex flex-col items-center text-center hover:border-[#c9a646]/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
<div className="w-[56px] h-[56px] rounded-[16px] bg-[#c9a646]/10 flex items-center justify-center mb-[16px] shrink-0">
<iconify-icon className="text-[#c9a646]" height="40" icon="lucide:clock" width="40"></iconify-icon>
</div>
<h4 className="text-[18px] lg:text-[22px] font-semibold text-[#1A1A2E] leading-[1.3] mb-[8px] font-montserrat tracking-tight">
                      10+ Years in B2B
                    </h4>
<p className="text-[14px] font-normal text-[#5C5C70] leading-[1.5] font-montserrat m-0">
                      SaaS, tech, and global enterprise accounts
                    </p>
</div>
</div>
</div>
<p className="flex flex-col gap-6"></p>
</div>
<div className="mt-10">
<a className="inline-block text-[#c9a646] font-medium text-base md:text-lg border-b border-[#c9a646] pb-0.5 hover:text-[#b89539] hover:border-[#b89539] transition-colors" href="#book-call">
                Let's Talk!
              </a>
</div>
</div>

<div className="w-full relative">
<div className="aspect-[4/5] md:aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-sm border border-gray-100/50">
<img alt="Harry - Founder of Aura Build" className="w-full h-full object-cover" src="https://i.postimg.cc/4yJYQVVb/Work-Photo-Without-Spot.png"/>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 max-w-4xl mx-auto px-4 md:px-6" id="faq">
<div className="text-center mb-10 md:mb-16">
<span className="text-[10px] md:text-xs uppercase block font-semibold text-[#c9a646] tracking-widest font-montserrat mb-3">
            FAQs
          </span>
<h2 className="text-3xl md:text-5xl font-serif font-medium text-gray-900 tracking-tight">
            Frequently Asked Questions
          </h2>
</div>
<div className="space-y-4">
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">What counts as a "qualified" call?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              A qualified call meets three criteria. The company matches the
              industry and size you've defined. The person holds the job title
              you've named and has confirmed they're interested. Anyone outside
              those criteria doesn't count toward the 20.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">How does the pay-per-call pricing work?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              You pay a fixed fee per qualified call we book. No retainer, no
              monthly minimum, no setup fee beyond infrastructure cost. If we
              book zero calls, you pay zero dollars. The price per call is set
              during onboarding based on your deal size.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">
                What if you don't book 20 calls in 60 days?
              </span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              You don't pay for the calls we didn't book. The pay-per-call
              structure means every call you pay for has already happened. If we
              miss the 20-call target, your only loss is the infrastructure cost
              (around $400), which is yours regardless.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">Do you work with my industry?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              We've built campaigns for B2B service firms, software companies,
              agencies, and consultancies across multiple verticals. The system
              works wherever your buyers can be reached by email and your
              average deal size is $25K or higher. We confirm fit on the
              qualifying call.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">What's the time commitment from my team?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              Plan for one 30-minute kickoff call, one weekly 30-minute
              check-in, and 1-2 hours total reviewing messaging in week 1. After
              that, your only job is taking the booked calls. Everything else is
              handled by us.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">What happens after the 60 days?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              You keep the domains, inboxes, list, copy, and SOPs. You can run
              the system in-house, hand it to your team, or have us continue
              managing. There is no contract that auto-renews and no minimum
              commitment beyond the calls already booked.
            </div>
</details>
<details className="group bg-white border border-gray-200/80 rounded-2xl overflow-hidden shadow-sm transition-all hover:border-gray-300">
<summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer font-montserrat font-medium text-base md:text-lg text-gray-900 select-none">
<span className="pr-4">How do you keep emails out of spam?</span>
<iconify-icon className="text-[#c9a646] group-open:rotate-180 transition-transform duration-300 shrink-0" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</summary>
<div className="px-6 md:px-8 pb-6 md:pb-8 pt-0 text-sm md:text-base font-light text-gray-500 leading-relaxed">
              We send from 25 separate domains with full DNS authentication
              (SPF, DKIM, DMARC). Daily volume per inbox stays low. We monitor
              inbox placement and rotate inboxes when one starts to degrade.
              Your main domain is never used.
            </div>
</details>
</div>
</section>
<section className="bg-[#111827] w-[100vw] ml-[calc(50%-50vw)] py-20 md:py-28 px-6 flex flex-col items-center justify-center text-center mt-16 md:mt-24 -mb-24">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<h2 className="md:text-5xl lg:text-[52px] leading-tight text-3xl font-bold text-white tracking-tight font-montserrat mb-6">
            Ready to Book 20+ Calls in 60 Days?
          </h2>
<p className="md:text-lg leading-relaxed text-base font-normal text-gray-400 font-montserrat max-w-3xl mb-10">
            We'll come up with a custom plan for you. Regardless of if we work
            together, you'll have a roadmap of exactly what to do to fill your
            calendar with 20+ calls in 60 days.
          </p>
<a className="group hover:bg-[#b89539] md:text-lg transition-all duration-300 flex items-center gap-2 shadow-[#c9a646]/20 text-base font-bold text-white font-montserrat bg-[#c9a646] rounded-lg pt-4 pr-8 pb-4 pl-8 shadow-lg" href="https://calendly.com/stackedmarketing-info/30min">
            Book Your Strategy Call
            <svg className="transition-transform group-hover:translate-x-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</section>
</main>
<div className="fixed bottom-6 right-6 z-[100] bg-white border border-gray-200 text-gray-900 p-5 rounded-2xl shadow-xl shadow-black/5 max-w-sm flex flex-col gap-2 font-montserrat animate-fade-up">
<div className="flex justify-between items-center">
<strong className="text-sm font-semibold flex items-center gap-2">
<iconify-icon className="text-[#c9a646]" icon="solar:copy-linear" width="20"></iconify-icon>
          How to duplicate
        </strong>
<button className="text-gray-400 hover:text-gray-900 transition-colors" onclick="this.closest('.fixed').remove()"></button>
</div>
<p className="text-xs text-gray-500 font-light leading-relaxed mt-1">
        To duplicate this template, simply view the page source (Right Click →
        View Page Source) and copy the HTML, or press Cmd/Ctrl + S to save the
        file locally. If you are using a site builder, you can paste the HTML
        code into a Custom HTML block.
      </p>
</div>

    </>
  );
}
