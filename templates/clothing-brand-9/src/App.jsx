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
      
<div className="bg-glow"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
<div className="tracking-tighter text-xl font-semibold text-white">TBA.</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 border border-white/10" href="https://thebrandacademy.info/application1">
<span>Apply Now</span>
<iconify-icon className="text-base" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>

<section className="relative mx-auto max-w-5xl px-6 pt-40 pb-24 text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-medium text-red-400 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
            For Anyone Looking To Start A $10k/Month Clothing Brand in 2025
        </div>
<h1 className="mx-auto max-w-4xl text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Here's How I Went from Working Minimum-Wage Jobs to <span className="text-red-500">Building $100k/Month Clothing Brands</span> While Still in College
        </h1>
<p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-400 font-normal">
            ...And how you can start yours too <span className="text-white">WITHOUT</span> needing any prior business experience or thousands to your name.
        </p>

<div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-[0_0_40px_-10px_rgba(220,38,38,0.15)] relative aspect-video">
<video className="h-full w-full object-cover" controls="" poster="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/transcoded_videos/88a624d94c84f877.jpg">
<source src="https://storage.googleapis.com/msgsndr/HSV2bTfivsTtV5LYJLxe/media/6834ca4c80f7198b669ac3cd.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
</div>

<div className="mt-12 flex flex-col items-center justify-center space-y-4">
<a className="group relative inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-red-500 hover:scale-[1.02] shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)] hover:shadow-[0_0_40px_-5px_rgba(220,38,38,0.6)]" href="https://thebrandacademy.info/application1">
<iconify-icon className="text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
                Yes! I Want To Start &amp; Scale My Brand Now!
            </a>
<p className="text-sm text-neutral-500 font-normal">…Before All The Spots Are Taken!</p>
</div>
</section>

<div className="border-y border-white/5 bg-white/[0.02] py-4 overflow-hidden flex whitespace-nowrap">
<div className="animate-marquee items-center text-sm font-medium text-neutral-400">

<div className="flex items-center gap-12 px-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                    ONLY LIMITED SPOTS AVAILABLE
                </div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Join Over <span className="text-white">70+ Brand Owners</span> Worldwide
                </div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-lg" icon="solar:ticket-sale-linear"></iconify-icon>
                    Spots Closing Soon
                </div>
</div>

<div className="flex items-center gap-12 px-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-red-500 text-lg" icon="solar:danger-circle-linear"></iconify-icon>
                    ONLY LIMITED SPOTS AVAILABLE
                </div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
                    Join Over <span className="text-white">70+ Brand Owners</span> Worldwide
                </div>
<div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white text-lg" icon="solar:ticket-sale-linear"></iconify-icon>
                    Spots Closing Soon
                </div>
</div>
</div>
</div>

<section className="mx-auto max-w-7xl px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                What I've Been Able To Achieve <span className="text-neutral-500">With My Brands</span>
</h2>
<p className="mt-4 text-base text-neutral-400">Real revenue pulled from recent launches and consistent scaling.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-2 overflow-hidden shadow-xl transition-transform hover:-translate-y-1">
<img alt="Revenue Proof" className="w-full h-auto rounded-xl border border-white/5 opacity-90 hover:opacity-100 transition-opacity object-cover aspect-[4/5]" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/67ebdeda3d944524c7dc6050.png"/>
</div>
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-2 overflow-hidden shadow-xl transition-transform hover:-translate-y-1">
<img alt="Revenue Proof" className="w-full h-auto rounded-xl border border-white/5 opacity-90 hover:opacity-100 transition-opacity object-cover aspect-[4/5]" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/67c0c24ce4beaedfa26ecc33.png"/>
</div>
<div className="rounded-2xl border border-white/5 bg-white/[0.02] p-2 overflow-hidden shadow-xl transition-transform hover:-translate-y-1">
<img alt="Revenue Proof" className="w-full h-auto rounded-xl border border-white/5 opacity-90 hover:opacity-100 transition-opacity object-cover aspect-[4/5]" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/68c56d63eca95aa99c0f31a5.jpeg"/>
</div>
</div>
</section>

<section className="border-t border-white/5 bg-white/[0.01] py-24">
<div className="mx-auto max-w-7xl px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                    The Only System You'll Ever Need
                </h2>
<p className="mt-4 text-base text-neutral-400">And my students are the living proof for it.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-4">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video relative group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/-ogotLNi6e0?controls=1" title="YouTube video player"></iframe>
</div>
<h3 className="text-lg font-medium text-white px-2">How Ryan Made <span className="text-red-400">$30,000+ in less than 6 months</span></h3>
</div>

<div className="flex flex-col gap-4">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video relative group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/1so11wHUOMc?controls=1" title="YouTube video player"></iframe>
</div>
<h3 className="text-lg font-medium text-white px-2">How Alex Made <span className="text-red-400">$10,000+ in 3 Months</span> in High School</h3>
</div>

<div className="flex flex-col gap-4">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video relative group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/8wG5IkdGPVo?controls=1" title="YouTube video player"></iframe>
</div>
<h3 className="text-lg font-medium text-white px-2">How Lincoln Sold Half His Drop in 24h After <span className="text-neutral-500">4 Months of Failing</span></h3>
</div>

<div className="flex flex-col gap-4">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-black aspect-video relative group">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/9n8fjN2-s44?controls=1" title="YouTube video player"></iframe>
</div>
<h3 className="text-lg font-medium text-white px-2">How Jam Sold Out His First Drop And <span className="text-red-400">Made $4,000+ (No Ads)</span></h3>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 py-24">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                More Wins From Inside <span className="text-red-500">The Community</span>
</h2>
</div>
<div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/6803e8cba241055729d1a6c0.png"/>
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/68c553fe657c0d32215dc65f.png"/>
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/68c5545c657c0de37a5dcb97.png"/>
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/6886423ddcebe2430a69aed5.png"/>
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/68c55393e11d90204be49522.png"/>
<img alt="Student Result" className="w-full rounded-2xl border border-white/5 opacity-80 hover:opacity-100 transition-opacity bg-neutral-900" loading="lazy" src="https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/HSV2bTfivsTtV5LYJLxe/media/6803e91b768a5818e87160cc.png"/>
</div>
</section>

<section className="relative border-t border-white/5 bg-neutral-950 py-24 overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxwYXRoIGQ9Ik0wIDE5aDIwTTE5IDB2MjAiIHN0cm9rZT0iIzIyMiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-30"></div>
<div className="relative mx-auto max-w-3xl px-6 text-center">
<h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white">
                Ready to Start &amp; Scale?
            </h2>
<p className="mt-4 text-lg text-neutral-400 mb-10">
                Join over 70+ successful brand owners inside The Brand Academy.
            </p>
<a className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-red-600 px-10 py-5 text-lg font-medium text-white transition-all hover:bg-red-500 shadow-[0_0_30px_-5px_rgba(220,38,38,0.4)]" href="https://thebrandacademy.info/application1">
                Secure Your Spot Now
                <iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] py-12">
<div className="mx-auto max-w-5xl px-6 text-center">
<div className="tracking-tighter text-2xl font-semibold text-white mb-6 opacity-80">TBA.</div>
<p className="text-xs text-neutral-600 font-normal leading-relaxed max-w-4xl mx-auto">
<strong>Income Disclaimer &amp; Important Note About Earnings and Results:</strong><br/><br/>
                The content shared on this site—including testimonials, case studies, and income examples related to The Brand Academy—reflects the unique experiences and abilities of specific individuals. These outcomes are not typical, and there's no promise that you’ll achieve similar results. Any figures or projections mentioned are simply estimates of what we believe may be possible. Your results will depend on a range of factors such as your background, experience, commitment, market conditions, and effort.<br/><br/>
                Your success—financial or otherwise—ultimately comes down to many personal factors. Because these vary from person to person, we cannot and do not make any guarantees about your results or income. By using this website or purchasing any of our programs, you acknowledge that you’ve read, understood, and accepted this disclaimer.
            </p>
<div className="mt-8 text-xs text-neutral-700">
                © 2025 The Brand Academy. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
