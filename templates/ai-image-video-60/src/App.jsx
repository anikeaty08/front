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



tailwind.config = {
theme: {
extend: {
colors: {
bpblue: '#0000ff', // Blueprint blue
bppaper: '#fcfcfa', // Off-white paper
},
fontFamily: {
pixel: ['VT323', 'monospace'],
mono: ['Space Mono', 'monospace'],
serif: ['Lora', 'serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with custom stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
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
      

<div className="fixed inset-0 pointer-events-none z-0 mix-blend-multiply opacity-20 bg-[linear-gradient(theme(colors.bpblue)_1px,transparent_1px),linear-gradient(90deg,theme(colors.bpblue)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
<main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 pt-16 md:pt-24">

<header className="mb-8 relative">
<div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-6">
<div>
<h1 className="font-pixel text-6xl md:text-7xl lg:text-8xl text-bpblue tracking-tight uppercase leading-none break-words max-w-3xl shadow-sm">
                        AI TOOLS
                    </h1>
<div className="font-pixel text-3xl md:text-4xl text-bpblue tracking-tight uppercase leading-none mt-2">
                        FOR CREATION
                    </div>
<div className="font-mono text-lg md:text-xl text-bpblue/80 uppercase tracking-widest mt-5 flex items-center gap-3">
<span className="w-8 h-px bg-bpblue/50 block"></span>
                        by Agerbeek &amp; Assoc.
                    </div>
</div>
<div className="text-right border-l-2 border-bpblue pl-4 lg:border-l-0 lg:pl-0">
<p className="text-lg text-slate-700 max-w-xs ml-auto">
                        A Practical Field Guide for Image &amp; Video Generation.
                    </p>
<p className="text-sm font-mono text-bpblue mt-2 uppercase tracking-wide">
                        Updated February 2026
                    </p>
</div>
</div>

<div className="overflow-hidden whitespace-nowrap text-bpblue/40 font-mono text-xs tracking-[0.4em] select-none mt-12 mb-16 relative">
<div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-bppaper to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-bppaper to-transparent z-10"></div>
                ※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※※
            </div>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">

<aside className="hidden lg:block lg:col-span-1 relative">
<div className="sticky top-24 h-[calc(100vh-8rem)] border-r border-bpblue/20 flex flex-col items-center py-4">
<span className="text-xs font-mono text-bpblue/60 tracking-widest uppercase mb-12" style={{writingMode: 'vertical-rl'}}>
                        [ DOC_REF_402 ]
                    </span>
<i className="w-4 h-4 text-bpblue/40 mb-auto" data-lucide="crosshair"></i>
<i className="w-4 h-4 text-bpblue/40" data-lucide="scan-line"></i>
<span className="text-xs font-mono text-bpblue/60 tracking-widest uppercase mt-12" style={{writingMode: 'vertical-rl'}}>
                        FIELD_MANUAL
                    </span>
</div>
</aside>

<article className="lg:col-span-11 space-y-16">

<section className="relative">
<div className="border border-bpblue bg-blue-50/30 p-8 md:p-10 relative shadow-[4px_4px_0_0_theme(colors.bpblue)]">
<div className="absolute -top-3 left-6 bg-bppaper px-2 flex items-center gap-2 border border-bpblue">
<i className="w-3 h-3 text-bpblue" data-lucide="alert-circle"></i>
<span className="font-mono text-xs text-bpblue font-semibold uppercase tracking-wider">Field Note</span>
</div>
<p className="text-lg text-slate-800 leading-relaxed italic">
                            The landscape shifts almost weekly. Treat this guide as a snapshot, not a scripture. Expect it to be at least partially outdated within two months — that's not a flaw, it's just the reality of where we are.
                        </p>
</div>
</section>

<section className="relative">
<h2 className="font-mono text-2xl md:text-3xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-4 mb-8 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="video"></i>
                        The Honest State of AI Video <span className="text-lg text-bpblue/60 ml-auto hidden md:inline">(Jan 2026)</span>
</h2>
<div className="space-y-6">
<p className="text-lg leading-relaxed">
<span className="float-left text-6xl font-serif leading-none pr-3 pt-2 text-bpblue">B</span>efore diving into tools, here's what you actually need to know about where AI video stands today.
                        </p>
<p className="text-lg leading-relaxed">
<strong className="font-semibold text-slate-900">The broadcast fidelity problem is real.</strong> AI video generators still can't reliably produce native 4K or even 1080p LOG ProRes — the nuts-and-bolts technical specs that broadcast and premium production demand. You can debate whether a synthetic actor blinked unnaturally or whether the vanishing-point perspective is broken, but the underlying codec, bitrate, resolution, and colour space limitations are the harder wall to clear. This hasn't stopped people from putting gen AI on TV — and some of it is genuinely brutal — but for most client work, a whole-cloth AI video production isn't something you can recommend in good faith yet.
                        </p>
<div className="mt-8 mb-6">
<h3 className="font-mono text-lg text-bpblue uppercase font-semibold mb-4 border-l-2 border-bpblue pl-3">
                                Where AI video absolutely earns its place right now:
                            </h3>
<ul className="list-none space-y-3 pl-6 font-serif text-lg">
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Animatics and pre-vis</li>
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Pitch videos and internal presentations</li>
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Case studies</li>
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Stock footage replacement</li>
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Social content</li>
<li className="relative before:content-['+'] before:absolute before:-left-6 before:text-bpblue before:font-mono">Some VFX elements</li>
</ul>
</div>
<p className="text-lg leading-relaxed">
                            Once native 4K ProRes generation becomes reliable, the calculus changes. Until then, work with what it's good at.
                        </p>
</div>
</section>

<section>
<h2 className="font-mono text-2xl md:text-3xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-4 mb-10 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="image"></i>
                        Image Generation: Where Things Stand
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="border border-bpblue/30 p-6 hover:bg-white transition-colors duration-300 relative group">
<div className="absolute inset-0 border-2 border-bpblue opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="flex items-start justify-between mb-4">
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase">Nano Banana Pro</h3>
<span className="font-mono text-xs bg-bpblue text-white px-2 py-1">GOOGLE</span>
</div>
<p className="text-lg leading-relaxed mb-6">
                                If you work with images in any professional capacity, this is the tool to prioritize. It's the best-in-class option right now for consistency and prompt adherence — a genuine game-changer for workflows requiring repeatable, reliable output.
                            </p>
<div className="bg-blue-50/50 border border-dashed border-bpblue p-4 text-lg">
<strong className="font-mono text-sm text-bpblue uppercase block mb-1">Pro tip:</strong>
                                Set up an API key and run it through Google AI Studio rather than the standard interface. You get more granular control over output, resolution up to 4K, and no watermark. The only notable gap compared to ChatGPT's image tools is the lack of alpha channel output.
                            </div>
</div>

<div className="border border-bpblue/30 p-6 hover:bg-white transition-colors duration-300 relative group">
<div className="absolute inset-0 border-2 border-bpblue opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<div className="flex items-start justify-between mb-4">
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase">Midjourney</h3>
<span className="font-mono text-xs border border-bpblue text-bpblue px-2 py-1">STYLE KING</span>
</div>
<p className="text-lg leading-relaxed mb-6">
                                For artistic quality, cinematic stills, concept design, and stylized visual exploration, Midjourney remains the benchmark. Its compositional refinement and aesthetic consistency are unmatched for creative work. In 2026 it moved fully to a web-based interface alongside its Discord community.
                            </p>
<div className="border-t border-bpblue/20 pt-4 text-lg">
<strong className="font-semibold text-slate-900">The practical split:</strong> Use Midjourney when style and artistic impact are the priority. Use Nano Banana Pro when consistency, precision, and prompt adherence are what matter.
                            </div>
</div>
</div>
<div className="mt-10 space-y-8">
<div>
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-bpblue" data-lucide="layers"></i>
                                Seedream 4.5 <span className="text-sm font-normal text-slate-500">(ByteDance)</span>
</h3>
<p className="text-lg leading-relaxed pl-7 border-l-2 border-bpblue/20">
                                Gaining serious traction and worth testing, particularly as the image input layer for ByteDance's video model Seedance. Strong results and a rapidly improving model.
                            </p>
</div>
<div>
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase flex items-center gap-2 mb-3">
<i className="w-5 h-5 text-bpblue" data-lucide="network"></i>
                                Node-Based Platforms: The Flexible Middle Ground
                            </h3>
<p className="text-lg leading-relaxed pl-7 border-l-2 border-bpblue/20">
                                A growing approach is using node-based tools that let you route prompts through multiple AI models from a single interface — consolidating billing and letting you compare outputs. <strong className="font-semibold text-slate-900">Flora</strong> (flora.ai) and <strong className="font-semibold text-slate-900">Weavy</strong> (weavy.ai, recently acquired by Figma) are leading this space. ComfyUI (comfy.org/cloud) offers a more technical but highly customizable version of this workflow.
                            </p>
</div>
</div>
</section>

<div className="w-full flex justify-center py-8">
<div className="w-full max-w-md border-t border-b border-dashed border-bpblue/40 py-2 flex justify-between items-center px-4 font-mono text-xs text-bpblue/40">
<span>[ SEC_END ]</span>
<div className="flex gap-1">
<span className="w-1 h-1 bg-bpblue/40"></span>
<span className="w-1 h-1 bg-bpblue/40"></span>
<span className="w-1 h-1 bg-bpblue/40"></span>
</div>
<span>[ SEC_START ]</span>
</div>
</div>

<section>
<h2 className="font-mono text-2xl md:text-3xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-4 mb-10 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="film"></i>
                        Video Generation: Honest Rankings
                    </h2>
<div className="mb-12">
<div className="bg-bpblue text-white font-mono text-sm inline-block px-3 py-1 mb-6 tracking-widest uppercase">
                            Tier 1: The Cinematic Tools
                        </div>
<div className="space-y-8 pl-4 md:pl-8 border-l border-dashed border-bpblue/40">
<div className="relative">
<div className="absolute -left-[17px] md:-left-[33px] top-1 w-2 h-2 bg-bpblue rounded-full"></div>
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase mb-2">Google Veo 3.1</h3>
<p className="text-lg leading-relaxed">
                                    Currently the strongest all-around video generation model. Excellent prompt adherence, strong camera movement control, integrated audio with solid lip-sync, and reliable results across a wide range of content types. The "ingredients-to-video" feature (up to three reference images) makes it notably more steerable than competitors. For teams already using Nano Banana Pro for stills, the Veo pipeline is a natural fit.
                                </p>
</div>
<div className="relative">
<div className="absolute -left-[17px] md:-left-[33px] top-1 w-2 h-2 bg-bpblue rounded-full"></div>
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase mb-2">Sora 2 <span className="text-base font-normal text-slate-500">(OpenAI)</span></h3>
<p className="text-lg leading-relaxed">
                                    Think of Sora 2 as an AI director with strong narrative instinct — it has a shot sense and continuity feel that other models lack. Best for storytelling-led and cinematic outputs. The catch: it's only available in the US and Canada via ChatGPT subscription, and there's no free trial. Worth it for the right project.
                                </p>
</div>
<div className="relative">
<div className="absolute -left-[17px] md:-left-[33px] top-1 w-2 h-2 bg-bpblue rounded-full"></div>
<h3 className="font-mono text-xl tracking-tight text-slate-900 font-semibold uppercase mb-2">Kling 2.x <span className="text-base font-normal text-slate-500">(Kuaishou)</span></h3>
<p className="text-lg leading-relaxed">
                                    The strongest workhorse for repeatable professional output. Better physical realism and stability than Runway, with filmmaker-friendly features like Kling Lab for team collaboration. If you need consistent, film-quality results at scale, Kling is the most practical choice. Their new unified multimodal model (Kling 01) also handles editing of existing footage.
                                </p>
</div>
</div>
</div>
<div className="mb-12">
<div className="border border-bpblue text-bpblue font-mono text-sm inline-block px-3 py-1 mb-6 tracking-widest uppercase bg-white">
                            Tier 2: The Creative Toolkit
                        </div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white border border-bpblue/20 p-5 shadow-sm">
<h3 className="font-mono text-lg tracking-tight text-slate-900 font-semibold uppercase mb-3 border-b border-bpblue/10 pb-2">Runway Gen-4.5</h3>
<p className="text-lg leading-relaxed text-slate-700">
                                    A director's favourite for camera choreography — tracking shots, pans, and cinematic motion feel intentional. Its suite of AI Magic Tools makes it invaluable for post and VFX workflows. Think of it as the toolbox.
                                </p>
</div>
<div className="bg-white border border-bpblue/20 p-5 shadow-sm">
<h3 className="font-mono text-lg tracking-tight text-slate-900 font-semibold uppercase mb-3 border-b border-bpblue/10 pb-2">Luma Ray 3</h3>
<p className="text-lg leading-relaxed text-slate-700">
                                    Fast generation, strong visual consistency, useful keyframes feature (upload start and end images, let AI fill the middle). Cherry blossom petals, apparently, are its strong suit.
                                </p>
</div>
<div className="bg-white border border-bpblue/20 p-5 shadow-sm">
<h3 className="font-mono text-lg tracking-tight text-slate-900 font-semibold uppercase mb-3 border-b border-bpblue/10 pb-2">Pika 2.5</h3>
<p className="text-lg leading-relaxed text-slate-700">
                                    Legitimate creative platform. Specialized tools like Pikaswaps, Pikaffects, and Pikaframes add real control. Pikaformance is strong for bringing still images to life with synchronized expressions.
                                </p>
</div>
</div>
</div>
<div className="bg-blue-50/40 p-6 border-l-4 border-bpblue">
<h3 className="font-mono text-sm text-bpblue uppercase tracking-widest mb-4 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="eye"></i> Worth Watching
                        </h3>
<div className="space-y-4">
<p className="text-lg">
<strong className="font-mono font-medium text-slate-900 uppercase">Seedance V1 Pro (ByteDance)</strong> — Pairs directly with Seedream 4.5 image generation; ambitious world-building and longer clip support.
                            </p>
<p className="text-lg">
<strong className="font-mono font-medium text-slate-900 uppercase">Hailuo / Minimax</strong> — Cost-effective, fast, and stylistically distinct. Worth testing for social content or regional visual aesthetics.
                            </p>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-10">
<div>
<h2 className="font-mono text-xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-2 mb-6">
                            Storyboarding &amp; Consistency
                        </h2>
<p className="text-lg leading-relaxed mb-4">
                            Character and shot consistency across an AI film project remains one of the hardest problems.
                        </p>
<ul className="list-none space-y-4 font-serif text-lg">
<li className="pl-4 border-l-2 border-bpblue/40">
<strong className="font-semibold text-slate-900">Higgsfield Popcorn</strong> (higgsfield.ai/popcorn) is purpose-built for this: consistent characters, lighting, and scenes across storyboards, with direct export to Sora 2. A significant time-saver for pre-vis.
                            </li>
<li className="pl-4 border-l-2 border-bpblue/40">
<strong className="font-semibold text-slate-900">Midjourney</strong> and <strong className="font-semibold text-slate-900">Nano Banana Pro</strong> remain strong for high-quality concept stills before committing to motion.
                            </li>
</ul>
</div>
<div className="space-y-10">
<div>
<h2 className="font-mono text-xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-2 mb-6">
                                Platform Ecosystem
                            </h2>
<p className="text-lg leading-relaxed">
<strong className="font-semibold text-slate-900">Freepik</strong> offers a sandbox-style interface that lets you evaluate outputs from multiple AI engines side-by-side. Practical for teams that need to benchmark tools without committing to separate paid accounts.
                            </p>
</div>
<div>
<h2 className="font-mono text-xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-2 mb-6">
                                Audio &amp; Music
                            </h2>
<div className="flex flex-col gap-3 font-mono text-sm">
<div className="flex items-center gap-4 border border-bpblue/20 p-3 bg-white">
<i className="w-5 h-5 text-bpblue" data-lucide="music"></i>
<span className="text-lg font-serif"><strong className="font-semibold text-slate-900">Suno</strong> — Still the best music generator.</span>
</div>
<div className="flex items-center gap-4 border border-bpblue/20 p-3 bg-white">
<i className="w-5 h-5 text-bpblue" data-lucide="mic"></i>
<span className="text-lg font-serif"><strong className="font-semibold text-slate-900">ElevenLabs</strong> — Still the best voice-over generator. Not a close race.</span>
</div>
</div>
</div>
</div>
</section>

<section>
<h2 className="font-mono text-2xl md:text-3xl tracking-tight text-bpblue uppercase mb-6 flex items-center gap-3">
<i className="w-6 h-6" data-lucide="workflow"></i>
                        Workflow: Suggested Stack
                    </h2>
<div className="relative bg-white p-1">

<div className="absolute inset-0 border-2 border-bpblue pointer-events-none"></div>
<div className="absolute -top-1 -left-1 w-2 h-2 bg-bpblue"></div>
<div className="absolute -top-1 -right-1 w-2 h-2 bg-bpblue"></div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 bg-bpblue"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-bpblue"></div>
<pre className="font-mono text-sm md:text-base text-bpblue p-6 md:p-8 overflow-x-auto leading-loose bg-blue-50/10">
<span className="text-slate-400"># CONCEPT &amp; STORYBOARD</span>
Nano Banana Pro <span className="text-slate-400">(stills)</span> → Higgsfield Popcorn <span className="text-slate-400">(consistent pre-vis)</span>

<span className="text-slate-400"># CHARACTER &amp; SCENE DEVELOPMENT</span>
Midjourney <span className="text-slate-400">(style exploration)</span> → Nano Banana Pro <span className="text-slate-400">(consistency refinement)</span>

<span className="text-slate-400"># VIDEO GENERATION</span>
Veo 3.1 <span className="font-sans">or</span> Sora 2 <span className="text-slate-400">(cinematic)</span> / Kling <span className="text-slate-400">(scale &amp; realism)</span> / Runway <span className="text-slate-400">(VFX &amp; editing)</span>

<span className="text-slate-400"># AUDIO</span>
Suno <span className="text-slate-400">(music)</span> + ElevenLabs <span className="text-slate-400">(VO)</span>

<span className="text-slate-400"># TEAM WORKFLOW &amp; ITERATION</span>
Figma + Weavy <span className="text-slate-400">(design-integrated collaboration)</span>

<span className="text-slate-400"># BENCHMARKING &amp; MODEL COMPARISON</span>
Freepik <span className="text-slate-400">(multi-model sandbox)</span>

<span className="text-slate-400"># STAYING CURRENT</span>
Curious Refuge — <a className="underline decoration-dashed underline-offset-4 hover:text-slate-900 transition-colors" href="#">curiousrefuge.com</a>
<span className="text-slate-400">(Best ongoing resource for benchmarks, news, and tool comparisons)</span></pre>
</div>
</section>

<section>
<h2 className="font-mono text-xl md:text-2xl tracking-tight text-bpblue uppercase border-b border-bpblue pb-3 mb-6 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="bot"></i>
                        On Agentic Tools &amp; What's Coming
                    </h2>
<p className="text-lg leading-relaxed">
                        Agentic AI — tools that can take autonomous multi-step actions on your behalf — is mostly still rough and carries real security considerations. But the direction is clearly useful. <strong className="font-semibold text-slate-900">Claude Cowork</strong> is a good early example: give it access to folders (or your entire machine) and it will analyze, modify, or reorganize files on your direction. Overkill for most workflows today, but worth understanding as a preview of where operating systems are headed.
                    </p>
</section>

<section>
<h2 className="font-mono text-xl md:text-2xl tracking-tight text-bpblue uppercase mb-6 flex items-center gap-3">
<i className="w-5 h-5" data-lucide="link"></i>
                        Key Reference Links
                    </h2>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse border border-bpblue bg-white font-mono text-sm md:text-base">
<thead>
<tr>
<th className="border border-bpblue p-4 uppercase tracking-widest text-bpblue font-semibold bg-blue-50/50 w-1/3">Tool</th>
<th className="border border-bpblue p-4 uppercase tracking-widest text-bpblue font-semibold bg-blue-50/50">URL</th>
</tr>
</thead>
<tbody className="text-slate-700">
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Flora</td>
<td className="border border-bpblue p-4 text-bpblue">flora.ai</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Weavy</td>
<td className="border border-bpblue p-4 text-bpblue">weavy.ai</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Higgsfield Popcorn</td>
<td className="border border-bpblue p-4 text-bpblue">higgsfield.ai/popcorn</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">ComfyUI Cloud</td>
<td className="border border-bpblue p-4 text-bpblue">comfy.org/cloud</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Freepik AI Sandbox</td>
<td className="border border-bpblue p-4 text-bpblue">freepik.com</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Google AI Studio (Nano Banana)</td>
<td className="border border-bpblue p-4 text-bpblue">aistudio.google.com</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Curious Refuge</td>
<td className="border border-bpblue p-4 text-bpblue">curiousrefuge.com</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Suno</td>
<td className="border border-bpblue p-4 text-bpblue">suno.ai</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">ElevenLabs</td>
<td className="border border-bpblue p-4 text-bpblue">elevenlabs.io</td>
</tr>
<tr className="hover:bg-blue-50/30 transition-colors">
<td className="border border-bpblue p-4 font-medium">Masters of AI Webinar (Jan 2026)</td>
<td className="border border-bpblue p-4 text-bpblue">youtube.com/watch?v=TZ5AgQY51ZI</td>
</tr>
</tbody>
</table>
</div>
</section>

<footer className="mt-16 pt-8 border-t-2 border-dashed border-bpblue/30 text-center">
<p className="font-mono text-sm text-slate-500 max-w-2xl mx-auto">
                        * Last updated: February 2026. Check Curious Refuge for anything that's changed since then — which will be a lot.
                    </p>
</footer>
</article>
</div>
</main>


    </>
  );
}
