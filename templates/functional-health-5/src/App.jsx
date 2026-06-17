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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        });

        revealElements.forEach(el => revealObserver.observe(el));

        // FAQ Accordion Logic
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all
                faqItems.forEach(faq => {
                    faq.classList.remove('active');
                    const icon = faq.querySelector('.faq-icon');
                    if(icon) icon.setAttribute('icon', 'solar:add-linear');
                });
                
                // Open clicked if it wasn't active
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('.faq-icon');
                    if(icon) icon.setAttribute('icon', 'solar:close-linear');
                }
            });
        });

        // HLS Video Setup
        document.addEventListener('DOMContentLoaded', () => {
            const video = document.getElementById('vsl-video');
            const videoSrc = 'https://vod-adaptive-ak.vimeocdn.com/exp=1774147184~acl=%2Fbc5b072a-09b7-489e-ab70-c0c389356838%2Fpsid%3Dc3dcda0975c925f80e0d2b79ab1374698f0ed90be877a9874e2b29cfc6795e32%2F%2A~hmac=539a6023066a36ae7663feb1afe3c772757187541dc2538f1b8cd47f598cb2db/bc5b072a-09b7-489e-ab70-c0c389356838/psid=c3dcda0975c925f80e0d2b79ab1374698f0ed90be877a9874e2b29cfc6795e32/v2/playlist/av/69cd6fe3/avf/436bb08e/media.m3u8?pathsig=8c953e4f~3ODa2acQO6f7PrTA32ILwziGQQPX-taNwAc5b_g6LRY&qsr=1&r=dXMtZWFzdDE%3D&st=video';
            
            if (Hls.isSupported()) {
                const hls = new Hls({
                    startLevel: -1, 
                    capLevelToPlayerSize: true
                });
                hls.loadSource(videoSrc);
                hls.attachMedia(video);
            }
            else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                video.src = videoSrc;
            }
        });

        // Custom Play Button Logic
        function playVideo() {
            const video = document.getElementById('vsl-video');
            const overlay = document.getElementById('video-overlay');
            
            video.play().then(() => {
                overlay.style.opacity = '0';
                setTimeout(() => { overlay.style.display = 'none'; }, 300);
            }).catch(e => console.log("Playback failed:", e));
        }
        
        // Show overlay if paused
        const videoEl = document.getElementById('vsl-video');
        videoEl.addEventListener('pause', () => {
            const overlay = document.getElementById('video-overlay');
            overlay.style.display = 'flex';
            setTimeout(() => { overlay.style.opacity = '1'; }, 10);
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
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0A1628]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl text-[#30a05b]" icon="solar:planet-3-linear"></iconify-icon>
<span className="font-semibold text-lg tracking-tighter uppercase">Planet Mike</span>
</div>
<a className="bg-[#30a05b] hover:bg-[#26854b] text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-colors tracking-wide" href="#booking">
                Book Free Call
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-[#0A1628] to-[#0F1F3D]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 text-center reveal active">
<div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] rounded-full px-4 py-1.5 text-xs font-medium tracking-wide mb-8">
<iconify-icon icon="solar:star-fall-linear"></iconify-icon>
                For Entrepreneurs, Executives &amp; High-Performing Couples
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Fix Your Gut, Hormones &amp; Energy at the Root Level <span className="text-gray-400 font-medium">—</span> So Your Body Finally Performs at the Level Your Goals Demand
            </h1>
<p className="text-lg md:text-xl text-gray-400 font-normal mb-10 max-w-3xl mx-auto leading-relaxed">
                Without another generic meal plan, another supplement that goes nowhere, or spending another year wondering why discipline alone isn't enough.
            </p>
<div className="bg-[#111827]/80 backdrop-blur-sm border border-white/5 rounded-xl p-6 mb-10 inline-block text-left max-w-lg mx-auto w-full">
<div className="flex items-center gap-4 mb-3">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center text-sm font-semibold border border-[#30a05b]/20">1</div>
<p className="text-gray-300 text-sm font-medium">Watch the short video below</p>
</div>
<div className="flex items-center gap-4">
<div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center text-sm font-semibold border border-[#30a05b]/20">2</div>
<p className="text-gray-300 text-sm font-medium">Fill out the quick form to book your free call</p>
</div>
</div>

<div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-[#30a05b]/30 bg-black shadow-2xl mb-10 group cursor-pointer" id="video-container">
<div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-md px-3 py-1.5 text-xs font-medium text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                    Watch This First
                </div>

<video className="w-full h-full object-cover" controls="" id="vsl-video" playsinline="" preload="metadata">
<source src="https://vod-adaptive-ak.vimeocdn.com/exp=1774147184~acl=%2Fbc5b072a-09b7-489e-ab70-c0c389356838%2Fpsid%3Dc3dcda0975c925f80e0d2b79ab1374698f0ed90be877a9874e2b29cfc6795e32%2F%2A~hmac=539a6023066a36ae7663feb1afe3c772757187541dc2538f1b8cd47f598cb2db/bc5b072a-09b7-489e-ab70-c0c389356838/psid=c3dcda0975c925f80e0d2b79ab1374698f0ed90be877a9874e2b29cfc6795e32/v2/playlist/av/69cd6fe3/avf/436bb08e/media.m3u8?pathsig=8c953e4f~3ODa2acQO6f7PrTA32ILwziGQQPX-taNwAc5b_g6LRY&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video" type="application/x-mpegURL"/>
                    Your browser does not support HTML5 video.
                </video>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-[#0A1628]/60 to-transparent flex items-center justify-center z-10 transition-opacity duration-300 pointer-events-none" id="video-overlay">
<div className="w-20 h-20 bg-[#30a05b] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(48,160,91,0.5)] group-hover:scale-110 transition-transform duration-300 pointer-events-auto" onclick="playVideo()">
<iconify-icon className="text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-lg font-semibold py-5 px-10 rounded-xl text-center" href="#booking">
                Book Your Free Informational Call
            </a>
<div className="w-full mt-16 pt-16 scroll-mt-24" id="booking">

<div className="calendly-inline-widget" data-processed="true" data-url="https://calendly.com/henry-funnelarchitects/discovery-call-clone" style={{position: 'relative', minWidth: '320px', height: '700px'}}><div className="calendly-spinner"><div className="calendly-bounce1"></div><div className="calendly-bounce2"></div><div className="calendly-bounce3"></div></div><iframe className="" frameborder="0" height="100%" src="https://calendly.com/henry-funnelarchitects/discovery-call-clone?embed_domain=&amp;embed_type=Inline" title="Select a Date &amp; Time - Calendly" width="100%"></iframe></div>


</div>
</div>
</section>

<section className="py-24 bg-[#0F1F3D]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Real People. Real Labs. Real Results.</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Angie" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/29/d9d5cb38de4305a02a5e5a5e8bc96b/IMG_6237.png"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Angie, 41</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Director of Operations</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Overcame severe hormonal issues.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">40 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 6 Months</div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal delay-100 flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Randy" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/1b/07aff648af44a0b3d591622ac922e0/A0F82619-4A10-416C-B01F-E75006E951A6.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Randy, 61</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Business Man</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Post Heart Attack Transformation.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">35 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 4 Months</div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal delay-200 flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Andrea" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/5d/24317e094047c382fb874fb067a185/976D4EF3-1A78-4713-96D1-584A70713556.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Andrea, 35</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Registered Nurse</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Body Transformation for professional body competition.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">25 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 16 Weeks <span className="text-[#30a05b] ml-1">+5 lbs muscle</span></div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Amanda" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/e3/945a84292544ba912e2ea1003892cf/IMG_6238.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Amanda, 38</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Sales Professional</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Body Transformation for professional body competition.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">40 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 6 Months <span className="text-[#30a05b] ml-1">+8 lbs muscle</span></div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal delay-100 flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Nick" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/48/866ad165104e1bbd342adee93fbc76/IMG_0120.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Nick, 35</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Construction Worker / Family Man</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Overcame low energy &amp; high blood pressure. BP now optimized.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">45 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 5 Months</div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal delay-200 flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Matt" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/4d/a5147645df4c958a63d003657ad528/IMG_0117.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Matt, 38</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Construction Co. Owner</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Resolved low energy, high cholesterol, and high blood pressure.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">45 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 6 Months</div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Chris" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/89/8f80db8d024dd4a3554447bfef1977/IMG_0116.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Chris, 41</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Retired LEO</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Reversed pre-diabetes, high BP, high cholesterol, and hormonal issues.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">55 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 6 Months</div>
</div>
</div>
</div>

<div className="bg-[#111827] border border-[#30a05b]/20 rounded-2xl overflow-hidden reveal delay-100 flex flex-col h-full hover:border-[#30a05b]/50 transition-colors">
<div className="h-64 w-full relative bg-[#0A1628] shrink-0">
<img alt="Vincent" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" src="https://www.planetmikecoaching.com/hosted/images/80/2382d6d3fd42389683980cdaa16833/IMG_0110.jpg"/>
</div>
<div className="p-6 flex flex-col flex-grow">
<div className="mb-4">
<h3 className="text-lg font-semibold text-white">Vincent, 37</h3>
<p className="text-sm text-[#30a05b] font-medium mb-1">Serial Entrepreneur &amp; IT Expert</p>
</div>
<div className="mb-6 flex-grow">
<p className="text-sm text-gray-300">Sought a complete body transformation because he was starting his new business.</p>
</div>
<div className="pt-4 border-t border-white/5 mt-auto">
<div className="text-2xl font-semibold tracking-tight text-white uppercase">35 LBS LOST</div>
<div className="text-sm text-gray-400 font-medium mt-1">in 4 Months</div>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-lg font-semibold py-4 px-10 rounded-xl text-center" href="#booking">
                    Book Your Free Informational Call
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
<div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] rounded-full px-3 py-1 text-xs font-medium tracking-wide mb-6">
<iconify-icon icon="solar:question-circle-linear"></iconify-icon> Sound Familiar?
            </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-10 leading-tight">
                You're Doing Everything Right. So Why Does Your Body Still Feel Like It's Working Against You?
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-gray-300 text-base leading-relaxed mb-12">
<div>
<p className="mb-6">
                        You're disciplined. You show up. You perform at a high level. But behind the scenes you <span className="text-white font-medium">wake up tired no matter how much you sleep</span>, rely on caffeine to function before noon, and your body isn't responding no matter what you try.
                    </p>
<p>
                        For men: <span className="text-white font-medium">low testosterone, poor recovery</span>, stubborn weight that won't move no matter how hard you train.
                    </p>
</div>
<div>
<p className="mb-6">
                        For women: <span className="text-white font-medium">bloating, mood swings, fatigue</span>, and that constant feeling of being off even when you're eating clean and doing everything right.
                    </p>
<p>
                        You've tried the diets. The programs. The supplements. Maybe your doctor ran blood work and told you everything looks "normal." <span className="text-white font-medium">But nothing changes.</span>
</p>
</div>
</div>
<div className="border-l-4 border-[#30a05b] bg-[#111827] p-6 md:p-8 rounded-r-xl mb-12 shadow-lg">
<p className="text-xl text-white font-medium leading-relaxed">
                    "This isn't a discipline problem. It's a biology problem. And it will not fix itself with more willpower."
                </p>
<p className="text-gray-400 mt-4 text-sm">
                    Over 80% of high-performing men and women are dealing with gut dysfunction, hormonal imbalances, and nutrient deficiencies that silently drain performance and drive - and that <span className="text-gray-300 font-medium italic">never show up on a standard blood panel.</span>
</p>
</div>
<div className="text-left">
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-base font-semibold py-4 px-8 rounded-xl text-center" href="#booking">
                    Book Your Free Informational Call
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1F3D]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] rounded-full px-3 py-1 text-xs font-medium tracking-wide mb-6">
<iconify-icon icon="solar:target-linear"></iconify-icon> What Changes When Your Biology Works With You
                </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Stop Managing Symptoms.<br/>Start Fixing the Source.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:moon-sleep-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Wake up actually rested</h3>
<p className="text-sm text-gray-400">No alarm dread, no dragging yourself out of bed. True restorative sleep.</p>
</div>
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Energy that holds all day</h3>
<p className="text-sm text-gray-400">Steady energy through every high-stakes decision and meeting. No crashes.</p>
</div>
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:test-tube-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Hormones optimized</h3>
<p className="text-sm text-gray-400">Testosterone, cortisol, estrogen, thyroid - balanced based on your real lab data.</p>
</div>
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Gut inflammation resolved</h3>
<p className="text-sm text-gray-400">No more bloating, post-meal fatigue, or unpredictable digestion issues.</p>
</div>
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal delay-100">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:accessibility-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Body shifting naturally</h3>
<p className="text-sm text-gray-400">Fat loss and muscle retention occur naturally as root causes get corrected, not forced.</p>
</div>
<div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-[#30a05b]/30 transition-colors group reveal delay-200">
<div className="w-12 h-12 rounded-lg bg-[#30a05b]/10 text-[#30a05b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:brain-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Mental clarity doesn't quit</h3>
<p className="text-sm text-gray-400">Brain fog lifts. You remain sharp, focused, and fully in control of your day.</p>
</div>
</div>
<div className="text-center reveal">
<p className="text-xl text-white font-medium italic mb-8">"This is what happens when you stop guessing and start testing."</p>
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-base font-semibold py-4 px-10 rounded-xl text-center" href="#booking">
                    Book Your Free Informational Call
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<div className="inline-flex items-center gap-2 bg-[#F59E0B]/10 border border-[#F59E0B]/20 text-[#F59E0B] rounded-full px-3 py-1 text-xs font-medium tracking-wide mb-6">
<iconify-icon icon="solar:box-linear"></iconify-icon> The 6-Month Precision Health System
                </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Here's Exactly What's Included</h2>
</div>
<div className="space-y-4 mb-12">
<div className="bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start reveal">
<div className="text-4xl font-semibold text-[#30a05b] opacity-80 leading-none mt-1 shrink-0">01</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Advanced Lab Testing</h3>
<p className="text-sm text-gray-400 leading-relaxed">GI-MAP gut panel, full hormone analysis, comprehensive bloodwork, and optional DNA testing. This is the foundation. We don't guess. We test.</p>
</div>
</div>
<div className="bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start reveal">
<div className="text-4xl font-semibold text-[#30a05b] opacity-80 leading-none mt-1 shrink-0">02</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Root Cause Protocol Built for Your Biology</h3>
<p className="text-sm text-gray-400 leading-relaxed">Every protocol is built from your actual lab results. Gut repair, hormone optimization, detox support, targeted nutrient correction. Personalized to what your body specifically needs.</p>
</div>
</div>
<div className="bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start reveal">
<div className="text-4xl font-semibold text-[#30a05b] opacity-80 leading-none mt-1 shrink-0">03</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">6 Months of Direct Coaching with Mike</h3>
<p className="text-sm text-gray-400 leading-relaxed">You're not handed a PDF and left alone. Mike works with you directly throughout the entire process - tracking progress, adjusting the protocol as your labs improve.</p>
</div>
</div>
<div className="bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start reveal">
<div className="text-4xl font-semibold text-[#30a05b] opacity-80 leading-none mt-1 shrink-0">04</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Lab Retesting and Protocol Adjustments</h3>
<p className="text-sm text-gray-400 leading-relaxed">As your body responds, your protocol evolves. We retest and refine throughout the 6 months so results keep progressing.</p>
</div>
</div>
<div className="bg-[#111827] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start reveal">
<div className="text-4xl font-semibold text-[#30a05b] opacity-80 leading-none mt-1 shrink-0">05</div>
<div>
<h3 className="text-xl font-semibold text-white mb-2">Ongoing Support</h3>
<p className="text-sm text-gray-400 leading-relaxed">You're not waiting a week to get an answer. Support is continuous so you stay consistent and confident throughout.</p>
</div>
</div>
</div>
<div className="text-center reveal">
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-base font-semibold py-4 px-10 rounded-xl text-center" href="#booking">
                    Book Your Free Informational Call
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#0F1F3D]">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-12">This Program vs. Everything Else You've Tried</h2>
<div className="border border-white/10 rounded-2xl overflow-hidden bg-[#111827] shadow-xl">

<div className="grid grid-cols-1 md:grid-cols-2 bg-[#0A1628] border-b border-white/10">
<div className="p-6 text-center md:text-left border-b md:border-b-0 md:border-r border-white/10">
<span className="text-red-400 text-sm font-medium uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon> What You've Tried Before
                        </span>
</div>
<div className="p-6 text-center md:text-left">
<span className="text-[#30a05b] text-sm font-medium uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> The Planet Mike System
                        </span>
</div>
</div>

<div className="divide-y divide-white/5">
<div className="grid grid-cols-1 md:grid-cols-2 bg-transparent hover:bg-white/[0.02] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Generic plans not built for your body
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> Protocol built entirely from your personal lab results
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Symptoms treated, root causes ignored
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> Root causes found and corrected through advanced testing
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 bg-transparent hover:bg-white/[0.02] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Guesswork and trial and error
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> GI-MAP, hormone panels, bloodwork, DNA - real diagnostics
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Cookie-cutter supplements
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> Targeted nutrition based on your actual deficiencies
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 bg-transparent hover:bg-white/[0.02] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Results that plateau or reverse
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> 6 months of direct coaching with ongoing adjustment
                        </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
<div className="p-5 md:p-6 text-gray-400 text-sm border-b md:border-b-0 md:border-r border-white/5 flex items-center gap-3">
<iconify-icon className="text-red-500/50 shrink-0" icon="solar:close-square-linear"></iconify-icon> Told "everything looks normal"
                        </div>
<div className="p-5 md:p-6 text-white font-medium text-sm flex items-center gap-3">
<iconify-icon className="text-[#30a05b] shrink-0" icon="solar:check-square-linear"></iconify-icon> A coach trained to find what standard panels miss
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
<div className="w-16 h-16 mx-auto bg-[#F59E0B]/10 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-3xl text-[#F59E0B]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-8">Our Commitment to You</h2>
<div className="bg-[#111827] border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden mb-8">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#30a05b] to-transparent opacity-50"></div>
<p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed italic mb-6">
                    "This isn't a group program where you're one of hundreds. Mike works with a limited number of clients each month directly - which means your results are taken personally. If you follow the protocol and aren't seeing the results your labs predicted, we adjust. We dig deeper. We don't move on."
                </p>
<p className="text-[#30a05b] font-semibold text-base uppercase tracking-wide">
                    Spots each month are limited for exactly this reason.
                </p>
</div>
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-base font-semibold py-4 px-10 rounded-xl text-center" href="#booking">
                Book Your Free Informational Call
            </a>
</div>
</section>

<section className="py-24 bg-[#0F1F3D]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 reveal">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">

<div className="faq-item bg-[#111827] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
<div className="p-6 flex justify-between items-center gap-4">
<h3 className="font-medium text-white text-base">I've already tried a lot of things and nothing has worked. Why would this be different?</h3>
<div className="w-8 h-8 rounded-full bg-[#30a05b]/10 flex items-center justify-center shrink-0">
<iconify-icon className="faq-icon text-[#30a05b] text-xl" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer">
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            Because most approaches treat symptoms without ever identifying the root cause. A generic program doesn't know your gut is inflamed, your cortisol is dysregulated, or that you have specific deficiencies affecting your hormone production. The lab testing changes everything. We build the protocol around what your body specifically needs.
                        </div>
</div>
</div>

<div className="faq-item bg-[#111827] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
<div className="p-6 flex justify-between items-center gap-4">
<h3 className="font-medium text-white text-base">My doctor already ran blood tests and said everything looks fine.</h3>
<div className="w-8 h-8 rounded-full bg-[#30a05b]/10 flex items-center justify-center shrink-0">
<iconify-icon className="faq-icon text-[#30a05b] text-xl" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer">
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            Standard blood panels are designed to detect disease, not optimize function. The testing I run goes far deeper - GI-MAP gut panels, full hormone panels including free testosterone, cortisol patterns, thyroid markers, and micronutrient analysis. What shows as "normal" on a basic panel often tells a completely different story on a functional lab.
                        </div>
</div>
</div>

<div className="faq-item bg-[#111827] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
<div className="p-6 flex justify-between items-center gap-4">
<h3 className="font-medium text-white text-base">How fast will I see results?</h3>
<div className="w-8 h-8 rounded-full bg-[#30a05b]/10 flex items-center justify-center shrink-0">
<iconify-icon className="faq-icon text-[#30a05b] text-xl" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer">
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            Most clients notice energy and clarity improvements within the first 4-6 weeks as the protocol addresses gut inflammation and acute deficiencies. Body composition and hormone optimization build progressively across the full 6 months. The timeline depends on your starting point - which is exactly why we test first.
                        </div>
</div>
</div>

<div className="faq-item bg-[#111827] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
<div className="p-6 flex justify-between items-center gap-4">
<h3 className="font-medium text-white text-base">I'm a busy executive and business owner. How much time does this actually take?</h3>
<div className="w-8 h-8 rounded-full bg-[#30a05b]/10 flex items-center justify-center shrink-0">
<iconify-icon className="faq-icon text-[#30a05b] text-xl" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer">
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            The protocol is designed for high performers with demanding schedules. Once the initial testing is done and your protocol is built, daily implementation is straightforward. The goal is to make your body work better - not add more friction to your day.
                        </div>
</div>
</div>

<div className="faq-item bg-[#111827] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-white/10 transition-colors">
<div className="p-6 flex justify-between items-center gap-4">
<h3 className="font-medium text-white text-base">Is this right for women dealing with hormonal issues specifically?</h3>
<div className="w-8 h-8 rounded-full bg-[#30a05b]/10 flex items-center justify-center shrink-0">
<iconify-icon className="faq-icon text-[#30a05b] text-xl" icon="solar:add-linear"></iconify-icon>
</div>
</div>
<div className="faq-answer">
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                            Yes. Hormonal imbalances in women - estrogen dominance, adrenal dysfunction, thyroid dysregulation, post-birth-control hormonal disruption - are a significant part of what I address. The lab testing includes a full female hormone panel and the protocol is built from your specific results.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A1628] border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center reveal">
<div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden border border-[#30a05b]/30 bg-[#111827]">
<img alt="Mike Skrypchyk - Planet Mike" className="absolute inset-0 w-full h-full object-cover object-center" src="https://www.planetmikecoaching.com/hosted/images/7f/dad704b84840baac053a272aeabe7c/Screenshot-2025-11-02-at-1.56.08-PM.png"/>
<div className="absolute inset-0 border-2 border-[#30a05b]/10 rounded-2xl mix-blend-overlay pointer-events-none"></div>
</div>
<div>
<div className="inline-flex items-center gap-2 bg-[#30a05b]/10 border border-[#30a05b]/20 text-[#30a05b] rounded-full px-3 py-1 text-xs font-medium tracking-wide mb-6">
<iconify-icon icon="solar:user-id-linear"></iconify-icon> Meet the Founder / Functional Health Expert
                    </div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white mb-2">Planet Mike</h2>
<h3 className="text-xl text-gray-300 font-medium mb-8">Welcome! I’m Mike Skrypchyk and I’ve spent my life helping people heal.</h3>
<div className="space-y-6 text-gray-400 text-base leading-relaxed">
<p>After serving as a Combat Medic, I realized most people don’t need more motivation, they need their biology to work with them, not against them.</p>
<p>I work with high performers who’ve tried everything and still don’t feel right, low energy, brain fog, gut issues, burnout. Together, we find the real root causes and rebuild your system so you can finally feel strong, focused, and alive again.</p>
<div className="border-l-2 border-[#30a05b] pl-4 mt-8 py-1">
<p className="text-white font-medium italic">"Your body isn’t broken, it just needs someone who knows how to listen to it."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-[#0F1F3D]">

<div className="absolute inset-0 bg-[#30a05b]/5"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#30a05b]/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center reveal">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">Find Out What's Holding Your Biology Back</h2>
<p className="text-lg md:text-xl text-gray-300 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                Book a free informational call. Get clarity on what's actually happening inside your body and a clear roadmap to fix it.
            </p>
<a className="btn-glow block md:inline-block w-full md:w-auto bg-[#30a05b] hover:bg-[#26854b] text-white text-lg font-semibold py-5 px-12 rounded-xl text-center" href="#booking">
                Book Your Free Informational Call
            </a>
</div>
</section>

<footer className="bg-[#0A1628] border-t border-white/5 py-12 text-sm text-gray-500">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
<div className="flex items-center gap-2 text-white opacity-80">
<iconify-icon className="text-lg" icon="solar:planet-3-linear"></iconify-icon>
<span className="font-semibold tracking-tighter uppercase">Planet Mike Coaching</span>
</div>
<div className="text-center">
                    © FitnessTaskForce LLC 2025. All Rights Reserved.
                </div>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Use</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
</div>
</div>
<div className="text-center text-xs opacity-60 max-w-3xl mx-auto space-y-2">
<p>Support contact: Support@fitnesstaskforce.com</p>
<p>This site is not a part of Facebook or Facebook Inc. This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.</p>
</div>
</div>
</footer>



    </>
  );
}
