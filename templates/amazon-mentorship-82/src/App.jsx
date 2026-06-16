import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', function() {
            var videosToLoad = [
                { id: 'vsl-video', url: 'https://embed-cloudfront.wistia.com/deliveries/82496f994ee71699c7585a3274fcadd70647a583.m3u8' },
                { id: 'test-vid-1', url: 'https://embed-cloudfront.wistia.com/deliveries/a49605391ebdaedb83b10799f2538ebbe247e2f2.m3u8' },
                { id: 'test-vid-2', url: 'https://embed-cloudfront.wistia.com/deliveries/53c8220a86312cc271c8d2841ebd238a141b95f5.m3u8' },
                { id: 'test-vid-3', url: 'https://embed-cloudfront.wistia.com/deliveries/b68df51a80c923017f53fc9aa3670cc784dac3f1.m3u8' },
                { id: 'test-vid-4', url: 'https://embed-cloudfront.wistia.com/deliveries/3287ed987151a9779ffaa5e8474a5bb407b25b0b.m3u8' },
                { id: 'test-vid-5', url: 'https://embed-cloudfront.wistia.com/deliveries/658b655935344bd8cdc2aae8e16eb7f8bee8c54a.m3u8' },
                { id: 'test-vid-6', url: 'https://embed-cloudfront.wistia.com/deliveries/0d5eb2655b9133904e2fe2e2d273f958cc82a9de.m3u8' }
            ];

            videosToLoad.forEach(function(videoConfig) {
                var videoElement = document.getElementById(videoConfig.id);
                if (!videoElement) return;

                if (Hls.isSupported()) {
                    var hls = new Hls();
                    hls.loadSource(videoConfig.url);
                    hls.attachMedia(videoElement);
                } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
                    // For Safari, which supports HLS natively
                    videoElement.src = videoConfig.url;
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full mx-auto">

<section className="bg-[#0A0A0A] px-4 py-12 md:py-20 flex flex-col items-center text-center border-b border-[#2A2A2A]">
<div className="max-w-[1200px] mx-auto flex flex-col items-center">

<img alt="Logo" className="max-w-[180px] mb-12 md:mb-16" src="https://images.clickfunnels.com/cdn-cgi/image/width=4480,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1470144/file/bbb016ebcdfe8699184995366eff8553.webp"/>

<p className="text-sm text-[#EE5414] tracking-[0.15em] uppercase mb-6 font-medium">
                    For people who want to build a real income stream with Amazon
                </p>

<h1 className="font-['Oswald',sans-serif] font-semibold text-3xl md:text-5xl uppercase leading-[1.15] tracking-tight max-w-5xl mb-6">
                    Give me 90 days and I'll help you build a profitable Amazon store from scratch using my <span className="underline decoration-[#EE5414] underline-offset-8 decoration-4">"Amazon Dropshipping System"</span> that's generated over $10M in student sales, and I'll personally work with you until you hit your first $10K month (Guaranteed)
                </h1>

<p className="text-base md:text-lg text-[#A1A1A1] max-w-[700px] mx-auto mb-12 leading-relaxed">
                    Without placing bulk orders, spending money on ads, or needing any prior experience. Backed by 458+ students and a full 90-day money-back guarantee.
                </p>

<p className="text-sm text-[#EE5414] tracking-[0.1em] uppercase mb-4 font-medium">
                    Step 1 of 2: Watch the video below
                </p>

<div className="w-full max-w-[800px] aspect-video bg-[#141414] border border-[#2A2A2A] rounded-lg mb-8 overflow-hidden shadow-2xl">
<video className="w-full h-full object-cover bg-black" controls="" id="vsl-video" playsinline=""></video>
</div>

<p className="text-sm text-[#EE5414] tracking-[0.1em] uppercase mb-6 font-medium">
                    Step 2 of 2: Submit your application below to see if you qualify
                </p>

<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                    Book a Call
                </a>
</div>
</section>

<section className="bg-[#141414] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[1200px] w-full mx-auto">
<div className="text-center mb-12 md:mb-16">
<p className="text-sm text-[#EE5414] tracking-[0.15em] uppercase mb-4 font-medium">
                        Real People. Real Amazon Stores. Real Revenue.
                    </p>
<h2 className="font-['Oswald',sans-serif] font-semibold text-2xl md:text-4xl uppercase tracking-tight text-white max-w-3xl mx-auto">
                        See what everyday people are generating with their Amazon businesses
                    </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mb-12 md:mb-16">

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-1" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Julia</h3>
<p className="text-sm text-[#EE5414] mb-4">Single Mom to $13K in Her First 30 Days</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"I just wanted to supplement my income so I could spend more time with my kids. I hit $13,000 in my first month following Shane's system."</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-2" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Adam</h3>
<p className="text-sm text-[#EE5414] mb-4">$18K+ in Sales and Growing</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"I was skeptical because I had zero experience selling online. Shane walked me through everything one-on-one, and now I'm doing over $18K."</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-3" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Jess</h3>
<p className="text-sm text-[#EE5414] mb-4">$10K in a Single Day With Zero Experience</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"My first day listing products using Shane's research methods, I did over $10,000 in sales. One day. I still can't believe it."</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-4" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Christina</h3>
<p className="text-sm text-[#EE5414] mb-4">School Teacher Who Replaced Her Yearly Salary in 4 Months</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"I started in May, did $17K my first month, and within four months I had made more than my entire teaching salary for the year."</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-5" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Christian</h3>
<p className="text-sm text-[#EE5414] mb-4">Dad of 4 Who Quit His Job After $2.8M in 11 Months</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"Three kids and a newborn. I thought I had no time for this. Eleven months later I'd done $2.8 million and walked away from my 9-to-5 for good."</p>
</div>

<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8 flex flex-col">
<div className="w-full aspect-video bg-[#141414] border border-[#2A2A2A] rounded overflow-hidden mb-6">
<video className="w-full h-full object-cover bg-black" controls="" id="test-vid-6" playsinline=""></video>
</div>
<h3 className="font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white mb-1 tracking-tight">Brandon</h3>
<p className="text-sm text-[#EE5414] mb-4">$10K+ in Just 14 Days</p>
<p className="text-base text-[#A1A1A1] leading-relaxed">"Two weeks in and I'd already crossed $10,000. The product research methods Shane teaches are the real deal."</p>
</div>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[1200px] w-full mx-auto">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<p className="text-sm text-[#EE5414] tracking-[0.15em] uppercase mb-4 font-medium flex items-center gap-2 justify-center">
<iconify-icon className="text-xl" icon="lucide:alert-triangle"></iconify-icon>
                        Here's why it hasn't worked yet
                    </p>
<h2 className="font-['Oswald',sans-serif] font-semibold text-2xl md:text-4xl uppercase tracking-tight text-white max-w-3xl mb-6">
                        Why most people never make real money selling online even when they try...
                    </h2>
<p className="text-base md:text-lg text-[#A1A1A1] max-w-[700px] leading-relaxed">
                        You've probably looked into making money online before. Maybe you've even tried it. But something always gets in the way, and it's not because you're lazy or you don't want it bad enough. Here's what's actually stopping you:
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mb-12 md:mb-16">
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:dollar-sign"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">Amazon FBA Requires Too Much Money Upfront</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">You're expected to place bulk orders for hundreds or thousands of dollars before you even know if a product will sell. One bad order and you're out thousands with nothing to show for it.</p>
</div>
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:trending-down"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">Shopify Dropshipping Burns Cash On Ads</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">You spend money on Facebook and Instagram ads just hoping something sticks. No guarantee of a return. Most people burn through their budget before they ever make a sale.</p>
</div>
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:help-circle"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">You Don't Know Which Products Actually Sell</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Everyone talks about "finding a winning product," but nobody shows you exactly how. You're left guessing, scrolling through suppliers, and hoping you pick the right one.</p>
</div>
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:shuffle"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">There's Too Much Conflicting Information Online</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">One YouTube video says do this. Another course says do the opposite. You end up jumping between strategies, never committing to one long enough to see results.</p>
</div>
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:x-circle"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">You've Tried Courses Before And They Didn't Work</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">You paid for a course, watched the videos, and then got stuck. No one to ask questions. No one to check your work. Just you, alone, trying to figure it out.</p>
</div>
<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:clock"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">You Don't Think You Have Enough Time</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Between your job, your family, and everything else, carving out hours every day feels impossible. So the idea of starting a business keeps getting pushed to "someday."</p>
</div>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#141414] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[1200px] w-full mx-auto">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<p className="text-sm text-[#EE5414] tracking-[0.15em] uppercase mb-4 font-medium flex items-center gap-2 justify-center">
<iconify-icon className="text-xl" icon="lucide:check-circle"></iconify-icon>
                        Here's how we fix this
                    </p>
<h2 className="font-['Oswald',sans-serif] font-semibold text-2xl md:text-4xl uppercase tracking-tight text-white max-w-3xl mb-6">
                        How Amazon Selling Secrets Unlocked solves these problems
                    </h2>
<p className="text-base md:text-lg text-[#A1A1A1] max-w-[700px] leading-relaxed">
                        You don't need to risk your savings, quit your job, or become a marketing expert. You just need the right system and someone in your corner showing you exactly what to do.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-4 mb-12 md:mb-16">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:shield-check"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">No Bulk Orders, No Financial Risk</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">With Amazon dropshipping, you only purchase a product after a customer has already paid you. You never hold inventory. You never place bulk orders. Your money stays in your pocket until you've already made a sale.</p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:megaphone-off"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">No Ads, No Marketing Budget Required</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">You're selling on Amazon, where millions of buyers are already searching for products every single day. You don't need to run a single ad. The customers are already there.</p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:search"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">Proven Product Research Methods That Remove The Guesswork</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">You get four proprietary research techniques Shane personally uses to find products that sell 50 to 100+ times per day on Amazon. No guessing. No hoping. Just data-backed product picks.</p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:map"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">One Clear System To Follow From Day One</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">No strategy hopping. No conflicting advice. You get a step-by-step system that's been refined over four years and proven across 458+ students. One path. One method. Real results.</p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:users"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">Hands-On Mentorship, Not Just Video Lessons</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">This isn't a course you watch and forget. Shane works with you one-on-one, finds products for you, lists them on your store, and stays with you through lifetime calls, weekly strategy sessions, and a private messaging channel.</p>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 md:p-8">
<iconify-icon className="text-2xl text-[#EE5414] mb-4 block" icon="lucide:timer"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white mb-3 tracking-tight">Built For People With Limited Time</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">The entire system is designed to run on one hour per day. And with the full automation package included, you can eventually put your store on autopilot and free up even more of your time.</p>
</div>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[1200px] w-full mx-auto">
<div className="text-center mb-12 md:mb-16 flex flex-col items-center">
<p className="text-sm text-[#EE5414] tracking-[0.15em] uppercase mb-4 font-medium flex items-center gap-2 justify-center">
<iconify-icon className="text-xl" icon="lucide:package"></iconify-icon>
                        What's included
                    </p>
<h2 className="font-['Oswald',sans-serif] font-semibold text-2xl md:text-4xl uppercase tracking-tight text-white max-w-3xl mb-6">
                        Here's everything you get inside Amazon Selling Secrets Unlocked
                    </h2>
<p className="text-base md:text-lg text-[#A1A1A1] max-w-[700px] leading-relaxed">
                        This isn't just a course. It's a complete mentorship program designed to take you from zero to your first $10K month, and then scale you to $100K+ per month, all with Shane working alongside you.
                    </p>
</div>
<div className="flex flex-col gap-4 mb-12 md:mb-16">

<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 aspect-[4/3] bg-[#1A1A1A] border-r border-b md:border-b-0 border-[#2A2A2A] border-dashed flex items-center justify-center p-8 text-center order-1 md:order-1">
<span className="font-['Satoshi',sans-serif] text-sm text-[#2A2A2A] uppercase tracking-widest">[10-PART VIDEO TRAINING MOCKUP]</span>
</div>
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 md:order-2">
<iconify-icon className="text-2xl text-[#EE5414] mb-4" icon="lucide:play-circle"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-2xl uppercase text-white mb-3 tracking-tight">10-Part Video Training System</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Master the fundamentals of Amazon dropshipping step by step. From setting up your store to listing your first products and making your first sales, every stage is mapped out for you in clear, actionable video modules.</p>
</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
<iconify-icon className="text-2xl text-[#EE5414] mb-4" icon="lucide:phone-call"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-2xl uppercase text-white mb-3 tracking-tight">Lifetime One-On-One Calls With Shane</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Not a chatbot. Not a junior coach. You get direct access to Shane himself for as long as you need. Ask questions, get your store reviewed, troubleshoot issues, and get personalized guidance whenever you need it.</p>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] bg-[#1A1A1A] border-l border-b md:border-b-0 border-[#2A2A2A] border-dashed flex items-center justify-center p-8 text-center order-1 md:order-2">
<span className="font-['Satoshi',sans-serif] text-sm text-[#2A2A2A] uppercase tracking-widest">[1-ON-1 CALLS MOCKUP]</span>
</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 aspect-[4/3] bg-[#1A1A1A] border-r border-b md:border-b-0 border-[#2A2A2A] border-dashed flex items-center justify-center p-8 text-center order-1 md:order-1">
<span className="font-['Satoshi',sans-serif] text-sm text-[#2A2A2A] uppercase tracking-widest">[PRODUCT RESEARCH MOCKUP]</span>
</div>
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 md:order-2">
<iconify-icon className="text-2xl text-[#EE5414] mb-4" icon="lucide:bar-chart-3"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-2xl uppercase text-white mb-3 tracking-tight">4 Proprietary Product Research Methods</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">These are the exact techniques Shane uses to find products that are selling like crazy on Amazon right now. You'll know exactly what to sell, where to find it, and how to list it for maximum profit.</p>
</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 md:order-1">
<iconify-icon className="text-2xl text-[#EE5414] mb-4" icon="lucide:rocket"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-2xl uppercase text-white mb-3 tracking-tight">30-Day Amazon Accelerator</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Shane will personally set your goals, build your business blueprint, find products for you, and list them on your store. This is the fast track to getting your first sales within 30 days of starting.</p>
</div>
<div className="w-full md:w-1/2 aspect-[4/3] bg-[#1A1A1A] border-l border-b md:border-b-0 border-[#2A2A2A] border-dashed flex items-center justify-center p-8 text-center order-1 md:order-2">
<span className="font-['Satoshi',sans-serif] text-sm text-[#2A2A2A] uppercase tracking-widest">[30-DAY ACCELERATOR MOCKUP]</span>
</div>
</div>

<div className="bg-[#141414] border border-[#2A2A2A] rounded-lg flex flex-col md:flex-row overflow-hidden">
<div className="w-full md:w-1/2 aspect-[4/3] bg-[#1A1A1A] border-r border-b md:border-b-0 border-[#2A2A2A] border-dashed flex items-center justify-center p-8 text-center order-1 md:order-1">
<span className="font-['Satoshi',sans-serif] text-sm text-[#2A2A2A] uppercase tracking-widest">[AUTOMATION + COMMUNITY MOCKUP]</span>
</div>
<div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center order-2 md:order-2">
<iconify-icon className="text-2xl text-[#EE5414] mb-4" icon="lucide:zap"></iconify-icon>
<h3 className="font-['Oswald',sans-serif] font-semibold text-2xl uppercase text-white mb-3 tracking-tight">Full Automation Package + Community Access</h3>
<p className="text-base text-[#A1A1A1] leading-relaxed">Put your Amazon store on autopilot so you can earn passive income without being glued to your laptop. Plus, get plugged into a community of other six and seven-figure Amazon sellers who are doing this every single day.</p>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#141414] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[1000px] w-full mx-auto">
<div className="flex flex-col md:flex-row border border-[#2A2A2A] rounded-lg overflow-hidden mb-12 md:mb-16">

<div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-[#2A2A2A]">
<div className="bg-[#1A1A1A] p-6 text-center border-b border-[#2A2A2A]">
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white tracking-tight">Without Amazon Selling Secrets</h3>
</div>
<div className="flex-1 bg-[#141414]">

<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Risk thousands on bulk inventory that might not sell</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Burn money on ads with no guaranteed return</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Guess which products might work and hope for the best</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Watch generic courses alone with no support</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Spend months or years trying to figure it out yourself</p>
</div>
<div className="p-4 md:p-5 flex items-start gap-3">
<iconify-icon className="text-xl text-[#EF4444] shrink-0 mt-0.5" icon="lucide:x"></iconify-icon>
<p className="text-base text-[#A1A1A1]">Feel stuck, overwhelmed, and unsure if this even works</p>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex flex-col">
<div className="bg-[#1A1A1A] p-6 text-center border-b border-[#2A2A2A]">
<h3 className="font-['Oswald',sans-serif] font-semibold text-xl uppercase text-white tracking-tight">With Amazon Selling Secrets</h3>
</div>
<div className="flex-1 bg-[#141414]">

<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white">Only buy a product after a customer has already paid you</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white">Sell on Amazon where millions of buyers are already shopping</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white">Use proven research methods to find products selling 50-100x per day</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white">Get lifetime one-on-one mentorship directly with Shane</p>
</div>
<div className="p-4 md:p-5 border-b border-[#2A2A2A] flex items-start gap-3">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white">Follow a step-by-step system proven across 458+ students</p>
</div>
<div className="p-4 md:p-5 flex items-start gap-3 bg-[#1A1A1A]/30">
<iconify-icon className="text-xl text-[#22C55E] shrink-0 mt-0.5" icon="lucide:check"></iconify-icon>
<p className="text-base text-white font-medium">90-day money-back guarantee. You either profit or you pay nothing</p>
</div>
</div>
</div>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#0A0A0A] px-4 py-12 md:py-20 flex flex-col items-center border-b border-[#2A2A2A]">
<div className="max-w-[800px] w-full mx-auto">
<h2 className="font-['Oswald',sans-serif] font-semibold text-2xl md:text-4xl uppercase tracking-tight text-white text-center mb-12">
                    Frequently Asked Questions
                </h2>
<div className="flex flex-col w-full mb-12">
<details className="group bg-[#141414] border border-[#2A2A2A] rounded-lg mb-3" open="">
<summary className="flex justify-between items-center font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white p-5 outline-none select-none">
<span>What exactly is Amazon Selling Secrets Unlocked?</span>
<iconify-icon className="text-xl text-[#EE5414] shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-base text-[#A1A1A1] leading-relaxed">
                            It's a complete mentorship program that teaches you how to build a profitable Amazon dropshipping store. You get a 10-part video training system, lifetime one-on-one calls with Shane, proprietary product research methods, a 30-day accelerator where Shane personally finds and lists products on your store, a full automation package, and access to a community of successful Amazon sellers. It's not just a course. It's Shane working with you hand-in-hand to build your business.
                        </div>
</details>
<details className="group bg-[#141414] border border-[#2A2A2A] rounded-lg mb-3">
<summary className="flex justify-between items-center font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white p-5 outline-none select-none">
<span>Who is this for?</span>
<iconify-icon className="text-xl text-[#EE5414] shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-base text-[#A1A1A1] leading-relaxed">
                            This is for anyone who wants to earn real income selling on Amazon but doesn't want to risk money on bulk inventory or ad spend. Whether you work a 9-to-5, you're a parent with limited time, or you're an entrepreneur looking for your next venture, this program is built for people starting from scratch with as little as one hour per day.
                        </div>
</details>
<details className="group bg-[#141414] border border-[#2A2A2A] rounded-lg mb-3">
<summary className="flex justify-between items-center font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white p-5 outline-none select-none">
<span>How is this different from other Amazon courses or programs?</span>
<iconify-icon className="text-xl text-[#EE5414] shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-base text-[#A1A1A1] leading-relaxed">
                            Most programs sell you some videos and leave you on your own. This program is built around one-on-one mentorship. Shane personally works with you, finds products for you, lists them on your store, and stays available through lifetime calls and a private messaging channel. That's why 458+ students have been able to get real results. The hands-on support is what makes the difference.
                        </div>
</details>
<details className="group bg-[#141414] border border-[#2A2A2A] rounded-lg mb-3">
<summary className="flex justify-between items-center font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white p-5 outline-none select-none">
<span>What if I have no experience selling online?</span>
<iconify-icon className="text-xl text-[#EE5414] shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-base text-[#A1A1A1] leading-relaxed">
                            That's exactly who this is designed for. You don't need to know anything about Amazon, ecommerce, or online selling. The video training covers everything from the ground up, and Shane walks you through every step on your one-on-one calls. Some of the most successful students, like Jess who did $10K in a single day, started with zero experience.
                        </div>
</details>
<details className="group bg-[#141414] border border-[#2A2A2A] rounded-lg mb-3">
<summary className="flex justify-between items-center font-['Oswald',sans-serif] font-semibold text-lg uppercase text-white p-5 outline-none select-none">
<span>Is there a guarantee?</span>
<iconify-icon className="text-xl text-[#EE5414] shrink-0 ml-4" icon="lucide:chevron-down"></iconify-icon>
</summary>
<div className="px-5 pb-5 pt-0 text-base text-[#A1A1A1] leading-relaxed">
                            Yes. There's a full 90-day money-back guarantee. If you go through the program, follow the system, and don't see results within 90 days, you get your money back. You either build a profitable Amazon business or you pay nothing. Shane offers this because he's that confident in what this program delivers after four years and 458+ students.
                        </div>
</details>
</div>
<div className="flex justify-center">
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                        Book a Call
                    </a>
</div>
</div>
</section>

<section className="bg-[#141414] px-4 py-12 flex flex-col items-center">
<div className="max-w-[800px] w-full mx-auto text-center">
<h2 className="font-['Oswald',sans-serif] font-semibold text-xl md:text-3xl uppercase tracking-tight text-white mb-3">
                    You either build a profitable Amazon business or you pay nothing
                </h2>
<p className="text-base text-[#A1A1A1] mb-8">
                    458+ students. $10M+ in collective sales. 90-day money-back guarantee.
                </p>
<a className="w-full md:w-auto inline-block bg-[#EE5414] text-white font-['Oswald',sans-serif] font-semibold text-base uppercase px-8 py-4 rounded tracking-wide text-center" href="#">
                    Book a Call
                </a>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#2A2A2A] px-4 py-8 flex flex-col items-center">
<div className="max-w-[1200px] w-full mx-auto flex flex-col items-center text-center">
<img alt="Logo" className="max-w-[120px] mb-6 opacity-80" src="https://images.clickfunnels.com/cdn-cgi/image/width=4480,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/image/1470144/file/bbb016ebcdfe8699184995366eff8553.webp"/>
<div className="text-xs text-[#A1A1A1] max-w-[600px] mx-auto leading-relaxed space-y-2">
<p className="uppercase tracking-widest"><a className="hover:text-white transition-colors" href="#">Privacy</a> <span className="mx-2 text-[#2A2A2A]">|</span> <a className="hover:text-white transition-colors" href="#">Terms of Service</a></p>
<p>This page is owned and managed by LeadingDigitalEcom. The content shared here is for informational purposes only. For inquiries or concerns, please contact us at leadingdigitalecom@gmail.com.</p>
</div>
</div>
</footer>
</div>



    </>
  );
}
