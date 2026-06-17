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
      

<header className="sticky top-0 z-50 bg-[#0d0d0d] border-b border-[#2a2a2a] h-16 flex items-center justify-center px-4 md:px-8">
<div className="w-full max-w-[68.75rem] flex items-center justify-between">
<div className="font-oswald font-semibold text-xl tracking-tighter text-white uppercase">
                Podcastguest.io
            </div>
<a className="hidden md:inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-3 rounded-md transition-none" href="#schedule">
                Schedule Your Call Now
            </a>

<a className="md:hidden inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-sm px-4 py-2 rounded-md transition-none" href="#schedule">
                Book Call
            </a>
</div>
</header>

<section className="py-16 md:py-24 bg-[#0d0d0d] px-4">
<div className="max-w-[68.75rem] mx-auto text-center flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                For online service business owners doing $100k+/year
            </span>
<h1 className="text-5xl md:text-6xl font-oswald font-semibold text-white uppercase text-center tracking-tighter mb-6 leading-tight max-w-5xl mx-auto">
                We will get you booked on the top podcasts in your industry in the next 90 days or less
            </h1>
<p className="text-lg md:text-xl text-[#c4c4c4] mb-10 max-w-4xl mx-auto text-center">
                Without cold pitching or chasing hosts - using the 
                <span className="text-[#ff7f02] underline decoration-[#ff7f02] decoration-2 underline-offset-4 font-medium">Podcast Placement System</span> 
                and a rolodex of 9,600+ relationships built over years of placements
            </p>

<div className="w-full md:w-[75%] mx-auto aspect-video bg-black rounded-lg border border-[#2a2a2a] mb-8 relative overflow-hidden shadow-2xl">
<video className="absolute inset-0 w-full h-full object-cover" controls="" src="https://embed-cloudfront.wistia.com/deliveries/6dc1e7c2787a3d9efaacd60f09c6564e175c8c26.m3u8">
</video>
</div>
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none mb-4" href="#schedule" id="schedule">
                Schedule Your Call Now
            </a>
<div className="flex items-center justify-center gap-2 mt-2 flex-wrap">
<div className="flex gap-1 text-[#ffd000]">
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-base" icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm text-[#888888]">Trusted by 9,600+ podcast placements across every industry</span>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#141414] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[68.75rem] mx-auto">
<div className="text-center mb-12 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    Real Clients. Real Results.
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter max-w-3xl mx-auto">
                    Here's what happens when our clients start getting on the right podcasts
                </h2>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671318~acl=%2F5a3dabf9-0479-421c-acdd-0f2ce6b35d1d%2Fpsid%3De5aabc09979c43c5bde28ab72e489a9b4d535169f58da1c18d21df592b8b56fe%2F%2A~hmac=e03ce372057e27e7a3d4bb00b86bc39564967a26fc00e4c3f1559114420f68ab/5a3dabf9-0479-421c-acdd-0f2ce6b35d1d/psid=e5aabc09979c43c5bde28ab72e489a9b4d535169f58da1c18d21df592b8b56fe/v2/playlist/av/5a3dabf9/avf/bff04f91/media.m3u8?pathsig=8c953e4f~GV-GIHTuRmRSBzl8DH2rbSK0YIsGOyCk1hNHbr50H7c&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671318~acl=%2Fd3849012-3df5-4e30-a1ec-057fe492b4ba%2Fpsid%3Db14f6c7cb0b5f9a8a21e7a433e85763ef835029b85d9081af389eb08a18c42d9%2F%2A~hmac=f07e17443a0770fa21e85218e481fe4d0da61f346776f9c8cfb748d45853f0c0/d3849012-3df5-4e30-a1ec-057fe492b4ba/psid=b14f6c7cb0b5f9a8a21e7a433e85763ef835029b85d9081af389eb08a18c42d9/v2/playlist/av/d3849012/avf/3c647173/media.m3u8?pathsig=8c953e4f~KXAPVB4JGkGFOgghFTvLPTYlMbq9zdWMvB14OIqKMy0&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671318~acl=%2Fac60c59e-ac4a-4df1-b4f5-60d21a3e9cae%2Fpsid%3D1653436c03319602752490af6892f1650e1d45bb70b285bb855ebf4208b91c1a%2F%2A~hmac=049d11e7b34d007c0d6cc4866e2fd94ac90b7904b61e60d5b3bf42b44c453a21/ac60c59e-ac4a-4df1-b4f5-60d21a3e9cae/psid=1653436c03319602752490af6892f1650e1d45bb70b285bb855ebf4208b91c1a/v2/playlist/av/ac60c59e/avf/b17c93aa/media.m3u8?pathsig=8c953e4f~BMH1ZH36BTenFTKFr7HES6nGCFevNWbCj-DHCjFNeYQ&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F0327b421-85f3-4794-9f21-de9bd21c40e7%2Fpsid%3D6fd89eef5774b80a766d6d93133baec2ede712034b3ded20504ec6b29df3959d%2F%2A~hmac=5708472bc7411498a0f9bf903df8461b75e122b53fa780a193a3b892001cc3ce/0327b421-85f3-4794-9f21-de9bd21c40e7/psid=6fd89eef5774b80a766d6d93133baec2ede712034b3ded20504ec6b29df3959d/v2/playlist/av/0327b421/avf/4af3a8d1/media.m3u8?pathsig=8c953e4f~652rmAd-Ld_BhMzBywaf2oGRagF1GxRTnrMiPHHWoEM&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F69e5ad9e-f9da-4e3e-973d-256d2e65261a%2Fpsid%3Da4598f56c9b8f3f984818fadf7e5a7c27914272a99ab9531c53d319ce0c75ff5%2F%2A~hmac=e996d144fe1172a028dc52d83fd724a0bb71d1fa62c144963bab5cb5317e8956/69e5ad9e-f9da-4e3e-973d-256d2e65261a/psid=a4598f56c9b8f3f984818fadf7e5a7c27914272a99ab9531c53d319ce0c75ff5/v2/playlist/av/69e5ad9e/avf/605664fc/media.m3u8?pathsig=8c953e4f~0kUyAMusuRPbIRYSI2JCqgKS2iuQz43nizT1tn0FajU&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F93f828e3-b72e-4a54-b7e8-cc21c7b1eebc%2Fpsid%3Da1b5e1a2c4290322667b2e24dc9e237525a89e61c59b2c13bf34ab039c6bdf54%2F%2A~hmac=ab5c8286ff6dec329b91790195b7036debba22af4701e413ea7f5c1609380e3f/93f828e3-b72e-4a54-b7e8-cc21c7b1eebc/psid=a1b5e1a2c4290322667b2e24dc9e237525a89e61c59b2c13bf34ab039c6bdf54/v2/playlist/av/93f828e3/avf/319832f1/media.m3u8?pathsig=8c953e4f~jf5CzmmZCRtMTkchf55TqAPiFpE9PaNVxLmRco6L7DQ&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F67c4f952-6cdd-4c5a-9b02-3f78a5e2c946%2Fpsid%3D77a394466ea0e0a9838e0da6c612b53e111c7b49f2547a6e4335fa0a3e929d0c%2F%2A~hmac=3aa242a1467893370b22589729d63cd24da5877127968ed75407fa67ba654879/67c4f952-6cdd-4c5a-9b02-3f78a5e2c946/psid=77a394466ea0e0a9838e0da6c612b53e111c7b49f2547a6e4335fa0a3e929d0c/v2/playlist/av/67c4f952/avf/e577e84f/media.m3u8?pathsig=8c953e4f~9C6uOkpLYVO0gy8hOoR_MjYZnpH7mtw24ntk85KOH3s&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F4e139f48-2f30-4f8c-8ad8-cc9d3ac93f9d%2Fpsid%3Daf125ce57aeda36ece2ae36e9e6c85c37e87ebdcb84c96378a087d4f91973b5e%2F%2A~hmac=1b69ed65e9f2f31a174d23a6cd71a6e630cb0c35fc85870b9adf9895b17c7919/4e139f48-2f30-4f8c-8ad8-cc9d3ac93f9d/psid=af125ce57aeda36ece2ae36e9e6c85c37e87ebdcb84c96378a087d4f91973b5e/v2/playlist/av/4e139f48/avf/6749cf4f/media.m3u8?pathsig=8c953e4f~086r3T9yHt3jmuDvspT4JJWnmDGP8hHqKhnA1qZ-gK8&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F9a0f7d91-85a4-4899-a31a-d0b65d2d4477%2Fpsid%3Df74358f3d790c633930cdfa83b004b682bed22e5f7df4698731642c95a79c600%2F%2A~hmac=309dfb880d062bbbedd521c968f71b822088a14d430077b64a64e12627f2a599/9a0f7d91-85a4-4899-a31a-d0b65d2d4477/psid=f74358f3d790c633930cdfa83b004b682bed22e5f7df4698731642c95a79c600/v2/playlist/av/9a0f7d91/avf/27ef6d48/media.m3u8?pathsig=8c953e4f~mpdBxxgiG--wsghjyufUbRuLxOlSbKedLa3kb5CAKog&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2F1ecdd803-52ac-435f-92b1-e7e7adbb7c4c%2Fpsid%3Db366bc303ebea8ed441cdfb3cba88f3fbcfcebe2f156263a243a96e65bb669c0%2F%2A~hmac=4c5623fee64f580f7c849c46f11656823444e58366fb3196d40198d64a40974a/1ecdd803-52ac-435f-92b1-e7e7adbb7c4c/psid=b366bc303ebea8ed441cdfb3cba88f3fbcfcebe2f156263a243a96e65bb669c0/v2/playlist/av/1ecdd803/avf/47638704/media.m3u8?pathsig=8c953e4f~iC1N39jjnCnDrNoUyUQ0G2vkcrqJmqAFSWb1LPGJQtA&amp;qsr=1&amp;r=dXMtZWFzdDE%3D&amp;st=video"></video>
</div>

<div className="bg-black border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<video className="absolute inset-0 w-full h-full object-contain" controls="" preload="metadata" src="https://vod-adaptive-ak.vimeocdn.com/exp=1774671294~acl=%2Ffe65ff08-b21a-4685-9b5c-446c74a70179%2Fpsid%3D55823a8e119a6e04c31d98d5d68127ddfb4ca488b4251604bf72a4a403d47bb8%2F%2A~hmac=6d60d671231eb1fc32a2a7e2458bd46f8ff1a1bf883b8ae596775f79507790b3/fe65ff08-b21a-4685-9b5c-446c74a70179/psid=55823a8e119a6e04c31d98d5d68127ddfb4ca488b4251604bf72a4a403d47bb8/v2/playlist/av/fe65ff08/avf/f124ae18/media.m3u8?pathsig=8c953e4f~ns0-oVHB1apF3TtBkPyaBPU081_WWwGsy6TB5K_O9To&amp;qsr=1&amp;r=dXMtY2VudHJhbDE%3D&amp;st=video"></video>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/89b8c19d-c69e-4436-ba79-aa6882108957.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/38e4d8d3-7924-45f9-bb3b-3f028d670552.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/0aa05e5a-5fd5-417e-82b5-25eaed980a37.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/8133c671-3c27-47f5-ab45-fb42981c6d95.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/bba381ed-183f-4169-a9dc-9054bb96d377.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/f0768f46-8e17-43fd-b911-86fcc4075328.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/66abc813-b7fc-4c9a-9219-a38763750efb.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/65617fc7-4619-498a-9370-b76fe9db6073.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/b1b35ddc-666d-4bec-82c1-1e9652cbe569.png"/>
</div>

<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden relative aspect-[4/5]">
<img alt="Client Testimonial" className="absolute inset-0 w-full h-full object-cover object-top opacity-90 hover:opacity-100 transition-opacity" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/hP5Vxjx3ROzgf3VfTSG5/media/d7d3ab36-befe-47ce-a902-0129cdf16c39.png"/>
</div>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0d0d0d] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[68.75rem] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    Sound Familiar?
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter mb-6 max-w-3xl mx-auto">
                    Why most business owners stay stuck trying to grow with ads and content
                </h2>
<p className="text-lg text-[#c4c4c4] max-w-[42.5rem] mx-auto">
                    The problem isn't your offer. It isn't your team. It's that the channels everyone told you to use <span className="text-[#ffd000] font-medium">just don't work the way they used to</span> - and the ones that do take forever to figure out on your own.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:graph-down-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">Your paid ads cost more every month and bring in less</h3>
<p className="text-base text-[#c4c4c4]">You're watching your cost per lead go up and your close rate go down. The <span className="text-[#ffd000]">return on ad spend</span> that used to make sense just doesn't anymore. No matter how many times you tweak the creative, the numbers keep getting worse.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You're creating content but nobody's watching</h3>
<p className="text-base text-[#c4c4c4]">You post, you stay consistent, you cross your fingers the algorithm picks it up. But you're at the <span className="text-[#ff7f02]">mercy of the platform</span> every single time. One shadowban and months of work disappears overnight.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:refresh-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">Your referrals are great but completely unpredictable</h3>
<p className="text-base text-[#c4c4c4]">Referrals close fast and they trust you instantly. But you can't plan around them. <span className="text-[#ffd000]">You can't scale them.</span> And waiting for word of mouth to fill your pipeline is not a growth strategy.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You've been on a podcast before but got zero clients from it</h3>
<p className="text-base text-[#c4c4c4]">You went on a show, told your story, and heard nothing back. No leads. No calls booked. Because most people <span className="text-[#ff7f02]">don't know how to actually convert</span> podcast listeners into paying clients.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You don't know which podcasts are actually worth your time</h3>
<p className="text-base text-[#c4c4c4]">There are hundreds of thousands of podcasts. Most of them have tiny audiences. Getting on the <span className="text-[#ffd000]">wrong ones is worse</span> than not going on at all. Without a system to identify the right ones, it's a shot in the dark.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:book-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You have no system to turn appearances into ongoing business</h3>
<p className="text-base text-[#c4c4c4]">Even if you get booked, one episode isn't enough. Without a <span className="text-[#ff7f02]">backend that repurposes</span> your appearances and builds trust over time, the whole thing sits on someone's feed and does nothing for you.</p>
</div>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#141414] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[68.75rem] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    Here's What Changes
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter mb-6 max-w-4xl mx-auto">
                    You're not just getting booked. You're getting in front of the exact people who already want what you sell.
                </h2>
<p className="text-lg text-[#c4c4c4] max-w-[42.5rem] mx-auto">
                    When you stop chasing cold traffic and start leveraging audiences that <span className="text-[#ffd000] font-medium">already trust the host</span> who invited you, everything about client acquisition gets easier. Faster closes. Warmer leads. A brand that keeps building while you sleep.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You get in front of your exact ideal client every single time</h3>
<p className="text-base text-[#c4c4c4]">No more spray and pray. We only pitch you to podcasts where your <span className="text-[#ff7f02]">ideal clients are already listening</span>. Every episode puts you directly in front of the people most likely to need what you offer.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You inherit the trust the host spent years building</h3>
<p className="text-base text-[#c4c4c4]">When a podcast host introduces you as their guest, their audience <span className="text-[#ffd000]">trusts you by association</span>. That's not something you can buy with a Facebook ad. It's credibility you'd otherwise spend years earning on your own.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You create content that keeps generating leads for months</h3>
<p className="text-base text-[#c4c4c4]">A podcast episode doesn't disappear the next day like an Instagram story. It <span className="text-[#ff7f02]">lives in search results</span>, on Spotify, on Apple Podcasts - bringing in new listeners months and years after you recorded it.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You have a real monetization strategy that actually converts</h3>
<p className="text-base text-[#c4c4c4]">Most people go on podcasts with no plan for what happens next. We work with you to build a <span className="text-[#ffd000]">custom strategy</span> that tells you exactly what to say and where to send people - so your appearances turn into calls.</p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">Your close rate goes up and your ad cost goes down</h3>
<p className="text-base text-[#c4c4c4]">We show you how to take your podcast content and integrate it across your paid ads, organic content, and sales process. When prospects see you on a podcast before a call, they already know you. <span className="text-[#ff7f02]">Closing becomes a conversation.</span></p>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-8">
<iconify-icon className="text-3xl text-[#ff7f02] mb-6 block" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 leading-tight tracking-tight">You stop depending on algorithms, ad budgets, and luck</h3>
<p className="text-base text-[#c4c4c4]">Podcasts give you a channel you actually control. No shadowbans. No bidding wars. No praying to the algorithm. Just <span className="text-[#ffd000]">consistent access to warm, engaged audiences</span> in your industry.</p>
</div>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0d0d0d] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[68.75rem] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    What We Do For You
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter mb-6 max-w-3xl mx-auto">
                    We don't just book you on podcasts. We build the whole system around it.
                </h2>
<p className="text-lg text-[#c4c4c4] max-w-[42.5rem] mx-auto">
                    This is not a course. This is not a list of podcast contacts. We do the work and we stay with you until you're on <span className="text-[#ff7f02] font-medium">10 of the top podcasts</span> in your industry.
                </p>
</div>
<div className="flex flex-col gap-6 mb-12">
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-full md:w-[15rem] md:min-w-[15rem] min-h-[12.5rem] bg-[#2a2a2a] rounded-md border border-[#333] flex items-center justify-center">
<span className="text-sm text-[#888888] font-satoshi uppercase tracking-wider text-center px-4">Mockup Image Placeholder</span>
</div>
<div className="flex-1">
<iconify-icon className="text-3xl text-[#ff7f02] mb-4 block" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 tracking-tight">Targeted Podcast Research</h3>
<p className="text-base text-[#c4c4c4]">We identify the podcasts in your specific industry that your ideal clients are actually listening to. We're not throwing you on random shows. <span className="text-[#ffd000]">Every pitch we send is strategic</span>, relevant, and designed to put you in front of people who are already primed to buy what you sell.</p>
</div>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-full md:w-[15rem] md:min-w-[15rem] min-h-[12.5rem] bg-[#2a2a2a] rounded-md border border-[#333] flex items-center justify-center">
<span className="text-sm text-[#888888] font-satoshi uppercase tracking-wider text-center px-4">Mockup Image Placeholder</span>
</div>
<div className="flex-1">
<iconify-icon className="text-3xl text-[#ff7f02] mb-4 block" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 tracking-tight">Done-For-You Outreach Using Our 9,600+ Podcast Rolodex</h3>
<p className="text-base text-[#c4c4c4]">We have direct relationships with the hosts and producers behind some of the top shows in dozens of industries. We tap that network on your behalf so you <span className="text-[#ff7f02]">skip the cold emails</span> and get to the yes faster.</p>
</div>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-full md:w-[15rem] md:min-w-[15rem] min-h-[12.5rem] bg-[#2a2a2a] rounded-md border border-[#333] flex items-center justify-center">
<span className="text-sm text-[#888888] font-satoshi uppercase tracking-wider text-center px-4">Mockup Image Placeholder</span>
</div>
<div className="flex-1">
<iconify-icon className="text-3xl text-[#ff7f02] mb-4 block" icon="solar:chat-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 tracking-tight">Custom Monetization Strategy Built Around Your Offer</h3>
<p className="text-base text-[#c4c4c4]">We work with you one-on-one to build a strategy that tells you exactly how to present your offer, where to direct the audience, and how to follow up - so your appearances <span className="text-[#ffd000]">actually generate revenue</span>.</p>
</div>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-full md:w-[15rem] md:min-w-[15rem] min-h-[12.5rem] bg-[#2a2a2a] rounded-md border border-[#333] flex items-center justify-center">
<span className="text-sm text-[#888888] font-satoshi uppercase tracking-wider text-center px-4">Mockup Image Placeholder</span>
</div>
<div className="flex-1">
<iconify-icon className="text-3xl text-[#ff7f02] mb-4 block" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 tracking-tight">Backend Selling System To Turn Appearances Into Clients</h3>
<p className="text-base text-[#c4c4c4]">We teach you how to take every episode you record and build it into your entire marketing and sales ecosystem - your ads, your organic posts, your sales calls. Your podcast content becomes a <span className="text-[#ff7f02]">trust machine</span> that works around the clock.</p>
</div>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
<div className="w-full md:w-[15rem] md:min-w-[15rem] min-h-[12.5rem] bg-[#2a2a2a] rounded-md border border-[#333] flex items-center justify-center">
<span className="text-sm text-[#888888] font-satoshi uppercase tracking-wider text-center px-4">Mockup Image Placeholder</span>
</div>
<div className="flex-1">
<iconify-icon className="text-3xl text-[#ff7f02] mb-4 block" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-oswald font-semibold text-xl text-white uppercase mb-3 tracking-tight">We Handle Everything. You Just Show Up And Talk.</h3>
<p className="text-base text-[#c4c4c4]">No pitching. No chasing hosts. No wondering if your bio is formatted correctly. We take care of every piece of the process from research to booking so you can <span className="text-[#ffd000]">focus on delivering value</span> when you're on the show.</p>
</div>
</div>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#141414] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[68.75rem] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    The Difference Is Clear
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter max-w-3xl mx-auto">
                    There's a big difference between doing this alone and doing this with us
                </h2>
</div>
<div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden mb-12">

<div className="grid grid-cols-2 border-b border-[#2a2a2a] bg-[#141414]">
<div className="p-6 md:p-8 font-oswald font-semibold text-base text-[#888888] uppercase tracking-wide border-r border-[#2a2a2a]">
                        Without Podcastguest.io
                    </div>
<div className="p-6 md:p-8 font-oswald font-semibold text-base text-[#ff7f02] uppercase tracking-wide">
                        With Podcastguest.io
                    </div>
</div>

<div className="grid grid-cols-2 border-b border-[#2a2a2a]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Spending hours researching podcasts with no idea if they're the right fit</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">We do the research for you and only target shows where your ideal clients are listening</p>
</div>
</div>
<div className="grid grid-cols-2 border-b border-[#2a2a2a] bg-[#1f1f1f]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Cold emailing hosts and getting ignored for months</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">We leverage 9,600+ existing relationships to get you booked faster</p>
</div>
</div>
<div className="grid grid-cols-2 border-b border-[#2a2a2a]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Going on podcasts with no strategy and getting zero clients from it</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">You show up with a custom monetization plan that turns listeners into booked calls</p>
</div>
</div>
<div className="grid grid-cols-2 border-b border-[#2a2a2a] bg-[#1f1f1f]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Recording episodes that nobody ever hears from again</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">Your appearances get repurposed across your ads, content, and sales process</p>
</div>
</div>
<div className="grid grid-cols-2 border-b border-[#2a2a2a]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Paying more every month for ads that convert less</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">You build warm authority that makes your ads cheaper and your close rate higher</p>
</div>
</div>
<div className="grid grid-cols-2 bg-[#1f1f1f]">
<div className="p-6 md:p-8 flex items-start gap-3 border-r border-[#2a2a2a]">
<iconify-icon className="text-xl text-[#888888] shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#888888]">Grinding social media and praying to the algorithm</p>
</div>
<div className="p-6 md:p-8 flex items-start gap-3">
<iconify-icon className="text-xl text-[#ff7f02] shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-base text-[#c4c4c4]">You own a channel that compounds over time and doesn't depend on anyone's feed</p>
</div>
</div>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<section className="py-16 md:py-24 bg-[#0d0d0d] px-4 border-t border-[#2a2a2a]">
<div className="max-w-[50rem] mx-auto">
<div className="text-center mb-16 flex flex-col items-center">
<span className="inline-block bg-[#1f1207] text-[#ff7f02] font-oswald font-semibold text-xs uppercase tracking-[0.09375rem] border border-[#ff7f02] rounded-full px-4 py-1.5 mb-6">
                    Got Questions? Good.
                </span>
<h2 className="text-3xl md:text-4xl font-oswald font-semibold text-white uppercase tracking-tighter">
                    Frequently Asked Questions
                </h2>
</div>
<div className="flex flex-col gap-2 mb-12">

<details className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden transition-none">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none">
<h3 className="font-oswald font-semibold text-lg text-white uppercase pr-4 tracking-tight">What is this exactly?</h3>
<div className="shrink-0 text-[#ff7f02]">
<iconify-icon className="text-2xl block group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</summary>
<div className="p-6 md:p-8 pt-0 text-base text-[#c4c4c4]">
                        We're a done-for-you podcast booking service. You tell us about your business, your offer, and your ideal client - and we handle everything from identifying the right podcasts to getting you booked and showing you how to convert those appearances into clients. <span className="text-[#ff7f02]">You show up for the recording. We take care of the rest.</span>
</div>
</details>

<details className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden transition-none">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none">
<h3 className="font-oswald font-semibold text-lg text-white uppercase pr-4 tracking-tight">Who is this actually for?</h3>
<div className="shrink-0 text-[#ff7f02]">
<iconify-icon className="text-2xl block group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</summary>
<div className="p-6 md:p-8 pt-0 text-base text-[#c4c4c4]">
                        This works best for online service-based business owners already doing at least six figures who want to build authority, warm up their market, and generate leads without depending entirely on paid ads. If you have a <span className="text-[#ffd000]">proven offer</span> and you want a long-term channel that compounds, this is for you.
                    </div>
</details>

<details className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden transition-none">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none">
<h3 className="font-oswald font-semibold text-lg text-white uppercase pr-4 tracking-tight">Why is this different from just finding podcasts on my own?</h3>
<div className="shrink-0 text-[#ff7f02]">
<iconify-icon className="text-2xl block group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</summary>
<div className="p-6 md:p-8 pt-0 text-base text-[#c4c4c4]">
                        You could spend months pitching hosts and hearing nothing back. We have relationships with the producers and hosts behind shows in your industry built over <span className="text-[#ff7f02]">9,600+ placements</span>. We also give you the monetization strategy and backend system most people never figure out - which is why most people go on podcasts and get nothing from it.
                    </div>
</details>

<details className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden transition-none">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none">
<h3 className="font-oswald font-semibold text-lg text-white uppercase pr-4 tracking-tight">What exactly do I get?</h3>
<div className="shrink-0 text-[#ff7f02]">
<iconify-icon className="text-2xl block group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</summary>
<div className="p-6 md:p-8 pt-0 text-base text-[#c4c4c4]">
                        You get targeted podcast research, done-for-you outreach using our existing relationships, a custom monetization strategy built around your specific offer, a backend selling system that repurposes your content, and our team working alongside you until you're <span className="text-[#ffd000]">booked on 10 top podcasts</span> in your industry in 90 days or less.
                    </div>
</details>

<details className="group bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg overflow-hidden transition-none">
<summary className="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none select-none">
<h3 className="font-oswald font-semibold text-lg text-white uppercase pr-4 tracking-tight">How long does it take to see results?</h3>
<div className="shrink-0 text-[#ff7f02]">
<iconify-icon className="text-2xl block group-open:hidden" icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-2xl hidden group-open:block" icon="solar:minus-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</summary>
<div className="p-6 md:p-8 pt-0 text-base text-[#c4c4c4]">
                        Podcasts are a long-term play. Most clients start seeing traction within the first few appearances, but the <span className="text-[#ff7f02]">real compounding effect happens over months</span>. This is not a get-rich-quick thing. It's a strategy that keeps paying off long after we do the initial work - and it gets more powerful over time.
                    </div>
</details>
</div>
<div className="text-center">
<a className="w-full md:w-auto inline-block bg-[#ff7f02] hover:bg-[#ff9325] text-white font-oswald font-semibold uppercase text-base px-10 py-4 rounded-md transition-none" href="#schedule">
                    Schedule Your Call Now
                </a>
</div>
</div>
</section>

<footer className="py-8 bg-[#0d0d0d] border-t border-[#2a2a2a] text-center px-4">
<p className="text-sm text-[#888888] font-satoshi">© 2024 Podcastguest.io. All rights reserved.</p>
</footer>

    </>
  );
}
