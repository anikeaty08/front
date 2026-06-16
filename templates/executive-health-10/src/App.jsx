import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // HLS Video initialization
            const video = document.getElementById('hero-video');
            const videoSrc = 'https://fast.vidalytics.com/video/Su_7pPNx/qdFQ1LrP9EtWZmyZ/213957/200570__FFMPEG/video_TS_h264_aac_96000_1920x1080_3500000_variant.m3u8';
            
            if (Hls.isSupported()) {
                const hls = new Hls();
                hls.loadSource(videoSrc);
                hls.attachMedia(video);
            } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
                // Native Safari support
                video.src = videoSrc;
            }

            // Modal Logic
            const modal = document.getElementById('apply-modal');
            const closeBtn = document.getElementById('close-modal');
            const triggers = document.querySelectorAll('.cta-trigger');

            const openModal = () => modal.classList.add('active');
            const closeModal = () => modal.classList.remove('active');

            triggers.forEach(btn => btn.addEventListener('click', openModal));
            closeBtn.addEventListener('click', closeModal);
            
            // Close modal on click outside
            modal.addEventListener('click', (e) => {
                if (e.target === modal) closeModal();
            });

            // FAQ Logic (Instant Toggle)
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const header = item.querySelector('div:first-child');
                header.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    // Close all
                    faqItems.forEach(f => {
                        f.classList.remove('active');
                        f.querySelector('.faq-icon').setAttribute('icon', 'solar:add-circle-linear');
                    });
                    // Open clicked if it wasn't already open
                    if (!isActive) {
                        item.classList.add('active');
                        item.querySelector('.faq-icon').setAttribute('icon', 'solar:close-circle-linear');
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-[#0A0A0A]/90 backdrop-blur-sm p-6" id="apply-modal">
<div className="bg-[#161616] border border-[#222222] w-full max-w-2xl rounded shadow-2xl relative flex flex-col h-[500px]">
<button className="absolute top-4 right-4 text-[#9A9A9A] hover:text-[#FFFFFF] transition-colors" id="close-modal">
<iconify-icon height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
<p className="font-[Oswald] font-semibold text-[#C9A84C] uppercase tracking-tight text-xl mb-4">Application Form Loading</p>
<p className="text-[#9A9A9A] text-sm">[Typeform Embed Goes Here - Fixed 500px Height]</p>
</div>
</div>
</div>

<nav className="w-full border-b border-[#222222] bg-[#0A0A0A]">
<div className="max-w-[1100px] mx-auto px-6 py-4 flex items-center justify-between">
<div className="font-[Oswald] font-semibold text-xl tracking-tighter uppercase text-[#FFFFFF]">
                T3 BODY
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-[Satoshi] font-light text-[#9A9A9A]">
<a className="hover:text-[#FFFFFF] transition-colors" href="#about">About</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#protocol">Protocol</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#coach">Coach JC</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#results">Results</a>
</div>
<button className="cta-trigger bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-xs md:text-sm uppercase tracking-tight px-6 py-2.5 rounded hover:bg-[#E8C96B] transition-colors">
                Apply Now
            </button>
</div>
</nav>

<section className="py-16 md:py-24 px-6 relative">
<div className="max-w-[1100px] mx-auto text-center flex flex-col items-center">
<span className="font-[Oswald] font-semibold text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-6 opacity-80">
                For High-Performing Executives And Business Leaders
            </span>
<h1 className="font-[Oswald] font-semibold text-2xl md:text-4xl lg:text-[44px] leading-[1.2] tracking-tight text-[#FFFFFF] uppercase max-w-4xl mb-6">
                In 90 days or less, our <span className="text-[#C9A84C]">"T3 Protocol"</span> will take you from drained and plateaued to the best shape of your life - using your own blood work and DNA as the blueprint
            </h1>
<p className="font-[Satoshi] font-light text-lg md:text-xl text-[#9A9A9A] max-w-2xl mb-12 leading-relaxed">
                Without guessing, without generic programs, and without starting over - even if you've already tried everything and nothing has stuck.
            </p>

<div className="w-full max-w-4xl aspect-video bg-[#111111] border border-[#222222] rounded overflow-hidden relative mb-8 shadow-2xl">
<video className="w-full h-full object-cover" controls="" id="hero-video" playsinline="">

<source src="https://fast.vidalytics.com/video/Su_7pPNx/qdFQ1LrP9EtWZmyZ/213957/200570__FFMPEG/video_TS_h264_aac_96000_1920x1080_3500000_variant.m3u8" type="application/x-mpegURL"/>
                    Your browser does not support the video tag.
                </video>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 font-[Oswald] font-semibold text-xs text-[#C9A84C] uppercase tracking-widest mb-8">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:video-frame-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Step 1 of 2: Watch the video above
                </div>
<div className="hidden md:block w-8 h-[1px] bg-[#222222]"></div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:pen-new-round-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Step 2 of 2: Apply below to get started
                </div>
</div>
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors mb-4">
                Apply Now - Limited Spots Available
            </button>
<p className="font-[Satoshi] font-light text-xs text-[#9A9A9A] flex items-center gap-2 justify-center">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                30-Day Money-Back Guarantee <span className="text-[#222222]">|</span> Limited Spots Available <span className="text-[#222222]">|</span> Application Required
            </p>
</div>
</section>

<section className="bg-[#111111] border-y border-[#222222] py-8 px-6">
<div className="max-w-[1100px] mx-auto">
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center items-center mb-8">
<div className="flex flex-col">
<span className="font-[Oswald] font-semibold text-2xl md:text-3xl text-[#C9A84C] tracking-tight">1,000+</span>
<span className="font-[Satoshi] font-light text-xs text-[#FFFFFF] uppercase tracking-wider mt-1">Transformations</span>
</div>
<div className="flex flex-col">
<span className="font-[Oswald] font-semibold text-2xl md:text-3xl text-[#C9A84C] tracking-tight">140+</span>
<span className="font-[Satoshi] font-light text-xs text-[#FFFFFF] uppercase tracking-wider mt-1">CEOs</span>
</div>
<div className="flex flex-col">
<span className="font-[Oswald] font-semibold text-2xl md:text-3xl text-[#C9A84C] tracking-tight">4.9/5</span>
<span className="font-[Satoshi] font-light text-xs text-[#FFFFFF] uppercase tracking-wider mt-1">Rating</span>
</div>
<div className="flex flex-col">
<span className="font-[Oswald] font-semibold text-2xl md:text-3xl text-[#C9A84C] tracking-tight">10+</span>
<span className="font-[Satoshi] font-light text-xs text-[#FFFFFF] uppercase tracking-wider mt-1">Years</span>
</div>
<div className="flex flex-col col-span-2 md:col-span-1">
<span className="font-[Oswald] font-semibold text-2xl md:text-3xl text-[#C9A84C] tracking-tight">2nd</span>
<span className="font-[Satoshi] font-light text-xs text-[#FFFFFF] uppercase tracking-wider mt-1">Youngest WBFF Pro</span>
</div>
</div>
<div className="flex flex-col items-center border-t border-[#222222] pt-8">
<span className="font-[Oswald] font-semibold text-xs text-[#9A9A9A] uppercase tracking-widest mb-4">As Featured In</span>
<div className="flex items-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="font-[Oswald] font-semibold text-xl tracking-tighter uppercase">Men's Fitness</span>
<span className="font-[Oswald] font-semibold text-xl tracking-tighter uppercase">T-Nation</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#0A0A0A]" id="results">
<div className="max-w-[1100px] mx-auto">
<div className="mb-12">
<span className="font-[Oswald] font-semibold text-[#9A9A9A] text-xs tracking-[0.2em] uppercase block mb-2">Real Results From Real Executives</span>
<h2 className="font-[Oswald] font-semibold text-3xl md:text-5xl tracking-tight text-[#FFFFFF] uppercase">1,000+ High-Performers Have Already Made The Switch</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<img alt="Brody King" className="w-12 h-12 rounded-full border border-[#C9A84C] object-cover mb-6" onerror="this.onerror=null; this.outerHTML='&lt;div class=\'w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6\'&gt;BK&lt;/div&gt;';" src="https://i.ibb.co/nMP4XW42/image.jpg"/>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">Brody King</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">CEO &amp; Entrepreneur</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From drained and plateaued to down 20-25 lbs with his biggest income month ever</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"I've lost 20-25 pounds. I've had my biggest income month. Ever. Objectively in the best shape of my life."</p>
</div>

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<img alt="Joshua Palmintier" className="w-12 h-12 rounded-full border border-[#C9A84C] object-cover mb-6" onerror="this.onerror=null; this.outerHTML='&lt;div class=\'w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6\'&gt;JP&lt;/div&gt;';" src="https://i.ibb.co/3y180Jxs/image.jpg"/>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">Joshua Palmintier</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">Law Firm CEO</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From sliding backward in his 40s to in better shape at 43 than at 35</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"I am in better shape at 43 than I was at 35. The T3 Protocol delivered exactly what was promised."</p>
</div>

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<img alt="William Skip Shelton" className="w-12 h-12 rounded-full border border-[#C9A84C] object-cover mb-6" onerror="this.onerror=null; this.outerHTML='&lt;div class=\'w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6\'&gt;WS&lt;/div&gt;';" src="https://i.ibb.co/PzjgKx1w/image.jpg"/>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">William "Skip" Shelton</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">CEO</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From carrying extra weight to down 14-15 lbs and three full pant sizes</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"Seeing the changes in my strength and the way I look has been incredible. I'm down 14-15 pounds and three pant sizes."</p>
</div>

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<img alt="Chris Bowers" className="w-12 h-12 rounded-full border border-[#C9A84C] object-cover mb-6" onerror="this.onerror=null; this.outerHTML='&lt;div class=\'w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6\'&gt;CB&lt;/div&gt;';" src="https://i.ibb.co/5Wy1WLz2/image.jpg"/>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">Chris Bowers</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">Fortune 100 Executive</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From overwhelmed by conflicting advice to a clear system that tells him exactly how to live</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"I needed something turn-key. Tell me what to do, and I'll do it. The value was you coming and saying here's exactly how you're going to live your life now."</p>
</div>

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<div className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6">GF</div>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">Gary Fleder</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">Hollywood Director</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From working hard without the scientific edge to enhanced performance across all areas</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"What you brought to the table was the science. This has enhanced my entire life and given me more confidence. That's a really big deal."</p>
</div>

<div className="bg-[#161616] border border-[#222222] border-t-[3px] border-t-[#C9A84C] p-8 flex flex-col">
<div className="w-12 h-12 rounded-full border border-[#C9A84C] flex items-center justify-center font-[Oswald] font-semibold text-[#C9A84C] text-lg mb-6">ET</div>
<div className="mb-4">
<h3 className="font-[Oswald] font-semibold text-[#FFFFFF] text-lg uppercase tracking-tight">Evan Thurman</h3>
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm">President &amp; CEO</p>
</div>
<p className="font-[Satoshi] font-light text-[#C9A84C] text-sm italic mb-4">From doing the right things in isolation to a fully integrated system</p>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm leading-relaxed mt-auto">"This ties together the best of everything out there. Even if you had access to everything you guys do, I don't think an individual would be able to put it all together themself."</p>
</div>
</div>
<div className="text-center">
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors">
                    Apply Now - Limited Spots Available
                </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
<div className="max-w-[1100px] mx-auto flex flex-col items-center">
<div className="text-center mb-12">
<span className="font-[Oswald] font-semibold text-[#9A9A9A] text-xs tracking-[0.2em] uppercase block mb-2">The Real Reason You're Stuck</span>
<h2 className="font-[Oswald] font-semibold text-3xl md:text-5xl tracking-tight text-[#FFFFFF] uppercase mb-6">You're Not Failing Because You're Not Trying Hard Enough</h2>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base md:text-lg leading-relaxed max-w-[750px] mx-auto">
                    Most guys who come to us are already doing a lot of things right. They're hitting the gym. They're watching what they eat. They're taking supplements. The problem isn't effort. The problem is that nobody has ever looked at what's actually happening inside their body. Their doctor runs a standard panel and says everything looks "normal" - but normal is just average. And when nearly 75% of adults are overweight or metabolically compromised, average is a low bar.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-4xl mb-16">
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Your energy crashes in the afternoon no matter how well you slept</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Your body stopped responding to training the way it used to</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Your doctor says your bloodwork is "fine" but you still feel off</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">You've tried multiple programs and none of them gave you lasting results</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Your testosterone feels low but nobody can explain exactly why</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#111111] rounded border border-[#222222]">
<iconify-icon className="text-amber-500 mt-0.5 shrink-0" height="24" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">You're putting in the work but your body composition won't shift</p>
</div>
</div>
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors">
                Apply Now - Limited Spots Available
            </button>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#111111] border-t border-[#222222]">
<div className="max-w-[1100px] mx-auto flex flex-col items-center">
<div className="text-center mb-12">
<span className="font-[Oswald] font-semibold text-[#C9A84C] text-xs tracking-[0.2em] uppercase block mb-2">What Changes When Your Body Is Actually Optimized</span>
<h2 className="font-[Oswald] font-semibold text-3xl md:text-5xl tracking-tight text-[#FFFFFF] uppercase mb-6">When Your Biology Is Working With You, Everything Changes</h2>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base md:text-lg leading-relaxed max-w-[750px] mx-auto">
                    The T3 Protocol doesn't guess. We run a 79-point biomarker panel and a full genetic test so we know exactly what's off, what's optimal, and what your body specifically needs to change. Your training, nutrition, supplementation, and recovery are all built from your actual data - not a generic template.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-4xl mb-16">
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Sustained energy from morning through your last meeting</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Body composition shifts that actually hold and keep improving</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Training performance that finally matches the effort you're putting in</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Hormonal balance that sharpens your focus, drive, and confidence</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Custom supplements built for your deficiencies, not a shelf formula</p>
</div>
<div className="flex items-start gap-4 p-6 bg-[#161616] rounded border border-[#222222]">
<iconify-icon className="text-[#C9A84C] mt-0.5 shrink-0" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">A specialist team monitoring and adjusting your protocol as you evolve</p>
</div>
</div>
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors">
                Apply Now - Limited Spots Available
            </button>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]" id="protocol">
<div className="max-w-[900px] mx-auto">
<div className="mb-12">
<span className="font-[Oswald] font-semibold text-[#9A9A9A] text-xs tracking-[0.2em] uppercase block mb-2">What You Get With The T3 Protocol</span>
<h2 className="font-[Oswald] font-semibold text-3xl md:text-5xl tracking-tight text-[#FFFFFF] uppercase">A Complete System Built Around Your Biology - Not Someone Else's</h2>
</div>
<div className="flex flex-col gap-6 mb-16">

<div className="bg-[#161616] border border-[#222222] border-l-[3px] border-l-[#C9A84C] flex flex-col md:flex-row overflow-hidden">
<div className="p-8 flex flex-col md:flex-row gap-6 flex-1">
<div className="font-[Oswald] font-semibold text-4xl text-[#C9A84C] opacity-50 leading-none shrink-0">01</div>
<div>
<h3 className="font-[Oswald] font-semibold text-[#C9A84C] text-xl uppercase tracking-tight mb-3">79-Point Biomarker Panel + Genetic Testing</h3>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base leading-relaxed">We analyze 79 biomarkers - hormones, thyroid, cardiovascular markers, inflammation levels, insulin sensitivity, and more - plus your full DNA profile. All results are measured against optimal ranges, not just "normal," and used to build your custom plan from the ground up. No guesswork. Just precision.</p>
</div>
</div>
<div className="md:w-[280px] h-[200px] md:h-auto shrink-0 border-t md:border-t-0 md:border-l border-[#222222]">
<img alt="79-Point Biomarker Panel" className="w-full h-full object-cover" onerror="this.style.display='none'" src="https://i.ibb.co/sJwkSRyM/image.jpg"/>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] border-l-[3px] border-l-[#C9A84C] flex flex-col md:flex-row overflow-hidden">
<div className="p-8 flex flex-col md:flex-row gap-6 flex-1">
<div className="font-[Oswald] font-semibold text-4xl text-[#C9A84C] opacity-50 leading-none shrink-0">02</div>
<div>
<h3 className="font-[Oswald] font-semibold text-[#C9A84C] text-xl uppercase tracking-tight mb-3">Functional Movement Screening + Custom Training</h3>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base leading-relaxed">Your training plan is built around how your body actually moves. We identify the exact movements that will give you maximum results and the ones that put you at injury risk. Every workout is designed to match your biomechanics and drive real adaptation.</p>
</div>
</div>
<div className="md:w-[280px] h-[200px] md:h-auto shrink-0 border-t md:border-t-0 md:border-l border-[#222222]">
<img alt="Functional Movement Screening" className="w-full h-full object-cover" onerror="this.style.display='none'" src="https://i.ibb.co/JSKmPXd/image.jpg"/>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] border-l-[3px] border-l-[#C9A84C] flex flex-col md:flex-row overflow-hidden">
<div className="p-8 flex flex-col md:flex-row gap-6 flex-1">
<div className="font-[Oswald] font-semibold text-4xl text-[#C9A84C] opacity-50 leading-none shrink-0">03</div>
<div>
<h3 className="font-[Oswald] font-semibold text-[#C9A84C] text-xl uppercase tracking-tight mb-3">Doctor-Reviewed Custom Supplementation</h3>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base leading-relaxed">No more off-the-shelf guessing. Every supplement is formulated specifically for your blood and genetic markers - correcting your deficiencies, supporting your hormones, and optimizing your energy, sleep, and recovery. Doctor-reviewed and adjusted every quarter.</p>
</div>
</div>
<div className="md:w-[280px] h-[200px] md:h-auto shrink-0 border-t md:border-t-0 md:border-l border-[#222222]">
<img alt="Custom Supplementation" className="w-full h-full object-cover" onerror="this.style.display='none'" src="https://i.ibb.co/zTjjd8hK/image.jpg"/>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] border-l-[3px] border-l-[#C9A84C] flex flex-col md:flex-row overflow-hidden">
<div className="p-8 flex flex-col md:flex-row gap-6 flex-1">
<div className="font-[Oswald] font-semibold text-4xl text-[#C9A84C] opacity-50 leading-none shrink-0">04</div>
<div>
<h3 className="font-[Oswald] font-semibold text-[#C9A84C] text-xl uppercase tracking-tight mb-3">Full Specialist Team In Your Corner</h3>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base leading-relaxed">You work with licensed doctors, functional nutritionists, registered dietitians, strength and conditioning coaches, and mindset experts. Your protocol is continuously refined in real time as your biomarkers change. Nothing is static.</p>
</div>
</div>
<div className="md:w-[280px] h-[200px] md:h-auto shrink-0 border-t md:border-t-0 md:border-l border-[#222222]">
<img alt="Specialist Team" className="w-full h-full object-cover" onerror="this.style.display='none'" src="https://i.ibb.co/qYL6zJFy/image.jpg"/>
</div>
</div>

<div className="bg-[#161616] border border-[#222222] border-l-[3px] border-l-[#C9A84C] p-8 flex flex-col md:flex-row gap-6">
<div className="font-[Oswald] font-semibold text-4xl text-[#C9A84C] opacity-50 leading-none shrink-0">05</div>
<div>
<h3 className="font-[Oswald] font-semibold text-[#C9A84C] text-xl uppercase tracking-tight mb-3">Biofeedback Performance Monitoring</h3>
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-base leading-relaxed">We track sleep quality, energy, motivation, mood, and sex drive throughout the program. This is the feedback loop that keeps the protocol precise and ensures you're always moving forward.</p>
</div>
</div>
</div>
<div className="text-center">
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors">
                    Apply Now - Limited Spots Available
                </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#111111] border-t border-[#222222]">
<div className="max-w-[1100px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#222222] rounded overflow-hidden mb-16">

<div className="bg-[#161616] p-6 border-b md:border-b-0 md:border-r border-[#222222] flex items-center justify-center gap-3">
<iconify-icon className="text-red-500" height="24" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="font-[Oswald] font-semibold text-lg text-[#FFFFFF] tracking-tight uppercase">Without T3 Protocol</span>
</div>
<div className="bg-[#C9A84C]/10 p-6 border-b border-[#222222] flex items-center justify-center gap-3">
<iconify-icon className="text-[#C9A84C]" height="24" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
<span className="font-[Oswald] font-semibold text-lg text-[#C9A84C] tracking-tight uppercase">With T3 Protocol</span>
</div>


<div className="p-6 md:border-r border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">Generic programs that ignore your actual biology</p>
</div>
<div className="p-6 border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">A protocol built specifically from your blood work and DNA</p>
</div>

<div className="p-6 md:border-r border-b border-[#222222] bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">Guessing on supplements from a store shelf</p>
</div>
<div className="p-6 border-b border-[#222222] bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Custom-formulated supplements that fix your specific deficiencies</p>
</div>

<div className="p-6 md:border-r border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">"Normal" results when you feel anything but</p>
</div>
<div className="p-6 border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Biomarker targets set at optimal, not average</p>
</div>

<div className="p-6 md:border-r border-b border-[#222222] bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">Coaches who don't know what's inside your body</p>
</div>
<div className="p-6 border-b border-[#222222] bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">A specialist team of doctors and coaches monitoring your data</p>
</div>

<div className="p-6 md:border-r border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">Plateaus you can't explain or break through</p>
</div>
<div className="p-6 border-b border-[#222222] bg-transparent flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Clear answers for why you plateau and a precise plan to break through</p>
</div>

<div className="p-6 md:border-r border-[#222222] bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-sm md:text-base">Average results from maximum effort</p>
</div>
<div className="p-6 bg-[#161616] flex items-center">
<p className="font-[Satoshi] font-light text-[#FFFFFF] text-sm md:text-base">Operating at your all-time best in the boardroom and the gym</p>
</div>
</div>
<div className="text-center">
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors">
                    Apply Now - Limited Spots Available
                </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#0A0A0A] border-t border-[#222222]">
<div className="max-w-[800px] mx-auto">
<div className="mb-12 text-center">
<span className="font-[Oswald] font-semibold text-[#9A9A9A] text-xs tracking-[0.2em] uppercase block mb-2">Common Questions</span>
<h2 className="font-[Oswald] font-semibold text-3xl md:text-5xl tracking-tight text-[#FFFFFF] uppercase">Everything You Need To Know</h2>
</div>
<div className="flex flex-col gap-4 mb-16">

<div className="faq-item bg-[#161616] border border-[#222222] rounded cursor-pointer select-none">
<div className="p-6 flex justify-between items-center text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
<h4 className="font-[Oswald] font-semibold text-lg uppercase tracking-tight pr-8">What is the T3 Protocol exactly?</h4>
<iconify-icon className="faq-icon text-[#C9A84C] shrink-0" height="24" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="faq-answer px-6 pb-6 pt-0">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-base leading-relaxed border-t border-[#222222] pt-4">The T3 Protocol is a precision health and performance program built specifically for high-achieving men. We start with a 79-point biomarker panel and genetic test to understand exactly how your body is wired - then build a fully customized plan covering your training, nutrition, supplementation, and recovery. You're supported by a team of licensed specialists who monitor your progress and adjust your protocol as your results evolve. Nothing is generic. Everything is built around your specific biology.</p>
</div>
</div>

<div className="faq-item bg-[#161616] border border-[#222222] rounded cursor-pointer select-none">
<div className="p-6 flex justify-between items-center text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
<h4 className="font-[Oswald] font-semibold text-lg uppercase tracking-tight pr-8">Who is this for?</h4>
<iconify-icon className="faq-icon text-[#C9A84C] shrink-0" height="24" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="faq-answer px-6 pb-6 pt-0">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-base leading-relaxed border-t border-[#222222] pt-4">The T3 Protocol is built for high-performing men - typically executives, CEOs, and business leaders over 35 - who are serious about their health and performance, have tried doing things on their own, and are ready for a data-driven approach. If you show up and follow the protocol, it works.</p>
</div>
</div>

<div className="faq-item bg-[#161616] border border-[#222222] rounded cursor-pointer select-none">
<div className="p-6 flex justify-between items-center text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
<h4 className="font-[Oswald] font-semibold text-lg uppercase tracking-tight pr-8">How is this different from a personal trainer or nutritionist?</h4>
<iconify-icon className="faq-icon text-[#C9A84C] shrink-0" height="24" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="faq-answer px-6 pb-6 pt-0">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-base leading-relaxed border-t border-[#222222] pt-4">A personal trainer works with your body from the outside. A nutritionist works from general guidelines. The T3 Protocol starts with your actual blood markers and DNA then builds everything from there. Every decision is backed by your specific data. And because we track biofeedback and retest your markers, the protocol evolves as your body does.</p>
</div>
</div>

<div className="faq-item bg-[#161616] border border-[#222222] rounded cursor-pointer select-none">
<div className="p-6 flex justify-between items-center text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
<h4 className="font-[Oswald] font-semibold text-lg uppercase tracking-tight pr-8">What exactly do I get?</h4>
<iconify-icon className="faq-icon text-[#C9A84C] shrink-0" height="24" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="faq-answer px-6 pb-6 pt-0">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-base leading-relaxed border-t border-[#222222] pt-4">A full 79-point biomarker panel and genetic test, a functional movement screen, a custom training and nutrition plan, doctor-reviewed personalized supplementation, ongoing support from a specialist team, and biofeedback performance monitoring. Everything reviewed and adjusted quarterly.</p>
</div>
</div>

<div className="faq-item bg-[#161616] border border-[#222222] rounded cursor-pointer select-none">
<div className="p-6 flex justify-between items-center text-[#FFFFFF] hover:text-[#C9A84C] transition-colors">
<h4 className="font-[Oswald] font-semibold text-lg uppercase tracking-tight pr-8">How do I get started?</h4>
<iconify-icon className="faq-icon text-[#C9A84C] shrink-0" height="24" icon="solar:add-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div className="faq-answer px-6 pb-6 pt-0">
<p className="font-[Satoshi] font-light text-[#9A9A9A] text-base leading-relaxed border-t border-[#222222] pt-4">Click the button below and fill out a short application. Our team will review it and reach out to schedule a call to confirm if the T3 Protocol is the right fit. We keep the program small because of how hands-on it is.</p>
</div>
</div>
</div>
<div className="text-center flex flex-col items-center">
<button className="cta-trigger w-full md:w-auto bg-[#C9A84C] text-[#0A0A0A] font-[Oswald] font-semibold text-lg uppercase tracking-tight px-12 py-4 rounded hover:bg-[#E8C96B] transition-colors mb-4">
                    Apply Now - Limited Spots Available
                </button>
<p className="font-[Satoshi] font-light text-xs text-[#9A9A9A] flex items-center gap-2 justify-center">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
                    30-Day Money-Back Guarantee <span className="text-[#222222]">|</span> Application Required <span className="text-[#222222]">|</span> Limited Spots
                </p>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#C9A84C] py-12 px-6">
<div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-[Oswald] font-semibold text-xl tracking-tighter uppercase text-[#FFFFFF]">
                T3 BODY
            </div>
<div className="flex items-center gap-6 text-sm font-[Satoshi] font-light text-[#9A9A9A]">
<a className="hover:text-[#FFFFFF] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#FFFFFF] transition-colors" href="#">Terms of Service</a>
</div>
<div className="font-[Satoshi] font-light text-xs text-[#9A9A9A]">
                © 2025 T3 Body. All rights reserved.
            </div>
</div>
</footer>



    </>
  );
}
