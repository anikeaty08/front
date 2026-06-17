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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md">
<div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-height="20" data-icon="lucide:aperture" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<span className="text-sm font-medium tracking-tight text-black">ASMR EMPIRE</span>
</div>
<a className="text-xs font-medium bg-black text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors" href="#pricing">
                Get Access
            </a>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl glow-bg pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white text-xs text-zinc-800 mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                New: 250+ Viral Concepts
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                The Complete AI Prompt Vault for <span className="text-zinc-700">Viral ASMR.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-800 font-light leading-relaxed max-w-2xl mx-auto mb-10">
                Create videos that make viewers go crazy for more. Get the exact prompts behind melting soap, crushing gummies, and ink drops that rack up millions of views while you sleep.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/5" href="#pricing">
                    Get Instant Access
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="max-w-4xl mx-auto mt-20 relative">
<div className="aspect-video rounded-xl overflow-hidden bg-white shadow-2xl shadow-zinc-200 border border-zinc-200 relative">
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="absolute top-0 left-0 w-full h-full" frameborder="0" src="https://player.vimeo.com/video/1154239183?title=0&amp;byline=0&amp;portrait=0"></iframe>
</div>
<p className="uppercase text-xs text-zinc-600 tracking-widest text-center mt-4">Viral Concepts • Cinematic Lighting • Physics Enforced</p>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100 bg-zinc-50 relative overflow-hidden">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-5xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-3/5 relative">

<img alt="Case Study Placeholder" className="w-full rounded-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 object-cover aspect-[4/3]" src="https://alessandrozamboni.com/img1.png"/>
</div>

<div className="w-full lg:w-2/5 space-y-8">
<div>
<div className="inline-flex items-center gap-2 text-emerald-700 mb-5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 w-fit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<span className="text-xs font-semibold tracking-wide uppercase">Case Study</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-black mb-6 tracking-tight leading-[1.1]">
                            Faceless Videos.
                            <span className="text-zinc-600">Empire Revenue.</span>
</h2>
<p className="text-zinc-800 text-base font-light leading-relaxed mb-6">
                            This isn't a complex documentary channel. It's <span className="text-black font-medium">FPS</span> — a channel that simply posts videos of paint being mixed with a comb. 
                        </p>
<p className="text-zinc-800 text-base font-light leading-relaxed">
                            No talking. No face reveal. Just raw, satisfying visuals that trigger the ASMR response.
                        </p>
</div>
<div className="glass-panel p-5 rounded-lg border-l-2 border-l-emerald-500 bg-white">
<div className="flex gap-3">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:quote" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm font-light italic leading-relaxed">
                                This YouTube channel is making estimated earnings of <span className="text-emerald-700 font-medium">$87K to $1.4M per year</span>.
                            </p>
</div>
</div>
<div className="flex flex-col gap-3">
<div className="flex items-center gap-3 text-zinc-800 text-sm">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Replicable with AI in minutes
                        </div>
<div className="flex items-center gap-3 text-zinc-800 text-sm">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Zero filming equipment needed
                        </div>
<div className="flex items-center gap-3 text-zinc-800 text-sm">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check-circle-2" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
                            Global audience (no language barrier)
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-medium text-black mb-8 tracking-tight">Let's be honest about what's really happening...</h2>
<div className="space-y-6 text-zinc-800 font-light text-base md:text-lg leading-relaxed">
<p>
                    You've seen them everywhere. Those hypnotic videos of soap being sliced, paint swirling, honey dripping in slow motion. Millions of views. Thousands of comments. Channels exploding out of nowhere.
                </p>
<p>
                    And you've thought: <span className="text-black font-medium">"I could do that."</span>
</p>
<p>
                    So you tried. Maybe you downloaded an AI video tool. Opened a blank prompt box. Stared at it for 20 minutes. Typed something generic like "satisfying video of slime" and got back... garbage. Pixelated. Weird. Nothing like those buttery-smooth clips flooding your feed.
                </p>
<p>
                    You tried again. Tweaked the wording. Added "4K" and "realistic" hoping that would fix it. Still trash.
                </p>
<div className="bg-red-50 p-6 rounded-lg my-8 border-l-2 border-l-red-500">
<h3 className="text-red-900 font-medium mb-2 text-sm uppercase tracking-wide">The Brutal Truth</h3>
<p className="text-red-900 text-sm">The gap between "I have access to AI video tools" and "I can actually create scroll-stopping content" is massive. And it's where most people quietly give up.</p>
</div>
<p>
                    Meanwhile, the creators who do crack the code? They're not smarter than you. They're not more creative. They just have something you don't:
                </p>
<p className="text-black font-medium text-xl">Prompts that actually work.</p>
<p>
                    Not vague ideas. Not "inspiration." Actual, tested, engineered prompts that make AI spit out the exact visuals that hijack human attention. The kind of prompts that take years of trial and error to develop on your own.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-2xl mx-auto">
<div className="flex items-center gap-3 mb-6 text-zinc-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-sm font-medium uppercase tracking-widest">The Discovery</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-black mb-8 tracking-tight">The problem was never you. It was the prompts.</h2>
<div className="space-y-6 text-zinc-800 font-light text-lg leading-relaxed">
<p>
                    I spent weeks trying to crack the ASMR video formula. The prompt frustration is exhausting. You know what you want to see in your head. But translating that into words the AI understands? Brutal.
                </p>
<p>
                    But once I had the right prompts — specific, engineered, tested prompts built for the exact type of content that goes viral — everything changed.
                </p>
<p>
                    The AI stopped fighting me. The videos started looking right. Ideas stopped being a problem because I had a vault of them ready to go. Creating content felt like a system instead of a struggle.
                </p>
<p>
                    That's when I realized: if the right prompts changed everything for me, they could do the same for anyone willing to use them.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-black tracking-tight mb-4">Who Is This For?</h2>
<p className="text-zinc-600">This isn't for everyone. But it offers an unfair advantage if you fit these profiles.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">The Complete Beginner</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Overwhelmed by Sora, Kling, Runway? Don't know what to type? This gives you 250 ready-made answers. Just copy, paste, generate.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:ghost" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01M15 10h.01M12 2a8 8 0 0 0-8 8v12l3-3l2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">Faceless Channel Creator</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Need volume? Coming up with ideas daily is exhausting. This vault hands you months of content ideas across five proven viral categories.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:repeat" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">Content Repurposer</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Already have an audience? Need fresh short-form content without filming? Plug these prompts directly into your workflow.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">Digital Product Creator</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Create PLR bundles or sell generated clips. 250 premium prompts you can leverage for enormous value.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">Agency Owners</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Clients want fast, cheap, high-performing content. Hand them scroll-stopping ASMR videos in minutes and look like a genius.
                    </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:bg-zinc-50 transition-colors bg-white">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center mb-6 text-black">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-black font-medium text-lg mb-3">Busy Side Hustler</h3>
<p className="text-zinc-800 text-sm font-light leading-relaxed">
                        Limited time? You need a shortcut that doesn't sacrifice quality. Fifteen minutes and you've got a video ready to post.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100 bg-zinc-50">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-medium text-black mb-12 text-center tracking-tight">Life Without vs. Life With</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="space-y-4">
<h3 className="text-zinc-600 font-medium text-sm uppercase tracking-wide mb-6">Without The Vault</h3>
<div className="flex gap-4 items-start p-4 rounded-lg border border-red-200 bg-red-50">
<svg aria-hidden="true" className="iconify text-red-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm">Staring at a blank prompt box, unsure what to type</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-red-200 bg-red-50">
<svg aria-hidden="true" className="iconify text-red-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm">Generating garbage clips that look "off" and unusable</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-red-200 bg-red-50">
<svg aria-hidden="true" className="iconify text-red-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm">Spending hours hunting for content ideas</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-red-200 bg-red-50">
<svg aria-hidden="true" className="iconify text-red-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm">Watching competitors post daily while you post weekly</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-red-200 bg-red-50">
<svg aria-hidden="true" className="iconify text-red-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:x" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-zinc-900 text-sm">Feeling like AI video "isn't for you"</p>
</div>
</div>

<div className="space-y-4">
<h3 className="text-emerald-700 font-medium text-sm uppercase tracking-wide mb-6">With ASMR Empire</h3>
<div className="flex gap-4 items-start p-4 rounded-lg border border-emerald-200 bg-emerald-50">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-black text-sm">250 proven prompts ready to copy and paste</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-emerald-200 bg-emerald-50">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-black text-sm">Cinematic, scroll-stopping videos from the first try</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-emerald-200 bg-emerald-50">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-black text-sm">Months of ideas organized across 5 viral categories</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-emerald-200 bg-emerald-50">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-black text-sm">Matching (or beating) their output without the burnout</p>
</div>
<div className="flex gap-4 items-start p-4 rounded-lg border border-emerald-200 bg-emerald-50">
<svg aria-hidden="true" className="iconify text-emerald-600 mt-1 shrink-0 iconify--lucide" data-icon="lucide:check" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-black text-sm">Finally seeing results that make you want to keep going</p>
</div>
</div>
</div>
<p className="text-center text-zinc-700 mt-12 text-sm md:text-base">
                The creators winning right now aren't more talented. They just removed the guesswork.
                <span className="text-black font-medium">They have a vault. Now you can too.</span>
</p>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl md:text-5xl font-medium text-black mb-6 tracking-tight">What Does Freedom Actually Look Like?</h2>
<p className="text-zinc-800 text-lg mb-16">It's not about the prompts. It's about what they unlock.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
<div>
<h3 className="text-black font-medium text-xl mb-3">Waking up with a plan</h3>
<p className="text-zinc-800 font-light leading-relaxed">No more opening your laptop and thinking, "What should I create today?" The vault is there. Pick one, generate, done.</p>
</div>
<div>
<h3 className="text-black font-medium text-xl mb-3">Not being chained to a camera</h3>
<p className="text-zinc-800 font-light leading-relaxed">No filming setup. No ring light. Just pure, faceless content that performs — while you stay invisible. Introverts, rejoice.</p>
</div>
<div>
<h3 className="text-black font-medium text-xl mb-3">Building while living</h3>
<p className="text-zinc-800 font-light leading-relaxed">While your videos get views, you're at dinner. The content machine runs whether you're watching it or not.</p>
</div>
<div>
<h3 className="text-black font-medium text-xl mb-3">True Leverage</h3>
<p className="text-zinc-800 font-light leading-relaxed">One prompt becomes one video. One video becomes a thousand views. You're no longer trading time for nothing. You're stacking assets.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-50">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl font-medium text-black mb-16 text-center tracking-tight">10 Benefits You'll Experience</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">

<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">01</span>
<div>
<h4 className="text-black font-medium mb-2">Never Face a Blank Screen Again</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Paralysis is over. 250 tested ideas waiting. Open vault, pick prompt, generate.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">02</span>
<div>
<h4 className="text-black font-medium mb-2">Pro Production Quality</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Engineered lighting cues and camera angles. Videos look like a studio made them, not a free tool.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">03</span>
<div>
<h4 className="text-black font-medium mb-2">Build Library at Speed</h4>
<p className="text-zinc-800 text-sm leading-relaxed">What took a week now takes an afternoon. Consistency becomes automatic.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">04</span>
<div>
<h4 className="text-black font-medium mb-2">Understand "Addictive" Visuals</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Absorb patterns behind viral content. Pacing, textures, dopamine triggers.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">05</span>
<div>
<h4 className="text-black font-medium mb-2">Diversify Across Niches</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Oddly Satisfying, Luxury, Cute, Trippy, Relaxation. Pivot anytime.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">06</span>
<div>
<h4 className="text-black font-medium mb-2">Save Hundreds of Hours</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Skip the failures. I've already made the mistakes so you don't have to.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">07</span>
<div>
<h4 className="text-black font-medium mb-2">Compound Momentum</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Getting started is hard. This vault gets you past the starting line fast.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">08</span>
<div>
<h4 className="text-black font-medium mb-2">Multiple Monetization Ways</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Ads, compilations, licensing, niche flipping. One vault, endless angles.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">09</span>
<div>
<h4 className="text-black font-medium mb-2">Operate With Confidence</h4>
<p className="text-zinc-800 text-sm leading-relaxed">No more second-guessing. Generate content knowing it's based on proven structures.</p>
</div>
</div>
<div className="flex gap-4">
<span className="text-zinc-400 font-medium text-lg">10</span>
<div>
<h4 className="text-black font-medium mb-2">Become a Creator Who Ships</h4>
<p className="text-zinc-800 text-sm leading-relaxed">Transform from someone who "wants to" into someone who publishes relentlessly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-zinc-100">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-black text-center mb-16 tracking-tight">The Prompts Are Ready. The Categories Are Mapped.</h2>
<div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
<div className="glass-panel p-4 rounded-lg text-center flex flex-col items-center justify-center aspect-square bg-white hover:border-zinc-300 transition-colors">
<svg aria-hidden="true" className="iconify text-black mb-2 iconify--lucide" data-icon="lucide:droplet" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5S5 13 5 15a7 7 0 0 0 7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-black text-xs font-medium">Oddly Satisfying</span>
</div>
<div className="glass-panel p-4 rounded-lg text-center flex flex-col items-center justify-center aspect-square bg-white hover:border-zinc-300 transition-colors">
<svg aria-hidden="true" className="iconify text-black mb-2 iconify--lucide" data-icon="lucide:gem" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="text-black text-xs font-medium">Luxury Lifestyle</span>
</div>
<div className="glass-panel p-4 rounded-lg text-center flex flex-col items-center justify-center aspect-square bg-white hover:border-zinc-300 transition-colors">
<svg aria-hidden="true" className="iconify text-black mb-2 iconify--lucide" data-icon="lucide:cat" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5c.67 0 1.35.09 2 .26c1.78-2 5.03-2.84 6.42-2.26c1.4.58-.42 7-.42 7c.57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44c0 0-1.89-6.42-.5-7s4.72.23 6.5 2.23A9 9 0 0 1 12 5m-4 9v.5m8-.5v.5"></path><path d="M11.25 16.25h1.5L12 17z"></path></g></svg>
<span className="text-black text-xs font-medium">Cute Viral</span>
</div>
<div className="glass-panel p-4 rounded-lg text-center flex flex-col items-center justify-center aspect-square bg-white hover:border-zinc-300 transition-colors">
<svg aria-hidden="true" className="iconify text-black mb-2 iconify--lucide" data-icon="lucide:eye" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.062 12.348a1 1 0 0 1 0-.696a10.75 10.75 0 0 1 19.876 0a1 1 0 0 1 0 .696a10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
<span className="text-black text-xs font-medium">Visual Trippy</span>
</div>
<div className="glass-panel p-4 rounded-lg text-center flex flex-col items-center justify-center aspect-square bg-white hover:border-zinc-300 transition-colors">
<svg aria-hidden="true" className="iconify text-black mb-2 iconify--lucide" data-icon="lucide:waves" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-black text-xs font-medium">Relaxation ASMR</span>
</div>
</div>

<div className="glass-panel border border-dashed border-zinc-300 p-8 rounded-xl mb-12 relative overflow-hidden bg-white">
<div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 rounded-bl-lg">LIMITED</div>
<div className="flex flex-col md:flex-row gap-6 items-center">
<div className="w-16 h-16 rounded-lg bg-zinc-100 border border-zinc-200 flex items-center justify-center shrink-0">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:gift" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13m7-9v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5"></path></g></svg>
</div>
<div>
<h3 className="text-black font-medium text-lg mb-1">Exclusive Bonus</h3>
<p className="text-zinc-800 text-sm">Action Taker Bonus included for a limited time. Accelerate your results immediately.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="pricing">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50 pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-black mb-6 tracking-tight">The Window Won't Stay Open Forever</h2>
<p className="text-lg text-zinc-800 mb-10 font-light leading-relaxed">
                If you leave this page without acting, nothing changes. Tomorrow you'll wake up with the same blank screen.
                <br/><br/>
                Or choose a different tomorrow. Where your content calendar is full and creation is easy.
            </p>
<div className="glass-panel p-10 rounded-2xl inline-block w-full max-w-md border border-zinc-200 shadow-2xl shadow-zinc-200/50 bg-white">
<div className="text-zinc-600 text-sm font-medium tracking-widest uppercase mb-2">Complete Access</div>
<div className="text-5xl font-medium text-black mb-2 tracking-tight">$17</div>
<div className="text-emerald-700 text-xs font-medium mb-8">One-time payment • Lifetime updates</div>
<ul className="text-left space-y-3 mb-8 text-zinc-800 text-sm">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        250+ Engineered Viral Prompts
                    </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        5 Viral Categories
                    </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Commercial Rights Included
                    </li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Instant Digital Delivery
                    </li>
</ul>
<button className="w-full bg-black text-white h-12 rounded-lg font-medium hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/10">
                    Get The Vault Now
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="text-zinc-600 text-xs mt-4">Secure payment. 100% Satisfaction Guarantee.</p>
</div>

<div className="mt-12">
<p className="text-black font-semibold text-base md:text-lg tracking-tight leading-relaxed">
                    Thanks a lot, and see you on the inside!<br/>
                    Alessandro Zamboni &amp; Alex Bellian
                </p>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-200 bg-white">
<div className="max-w-4xl mx-auto text-center space-y-8">
<div className="flex flex-col gap-4 text-zinc-800 text-sm font-light">
<p>P.S. — You read this far because something clicked. Trust that instinct. The vault is ready, the price is the lowest it'll ever be.</p>
<p>P.P.S. — 30 days from now, you'll either have a growing library of scroll-stopping videos — or you'll still be stuck in the same place. The choice is yours.</p>
</div>
<div className="flex items-center justify-center gap-2 opacity-50">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:aperture" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<span className="text-xs text-black font-medium tracking-tight">PROMPT VAULT © 2024</span>
</div>
</div>
</footer>

    </>
  );
}
