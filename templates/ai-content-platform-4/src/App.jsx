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
      

<div className="fixed inset-0 z-[-1] flex justify-center overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] opacity-20" style={{background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0) 70%)', borderRadius: '50%', filter: 'blur(60px)'}}></div>
<div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 80%)'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<span className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-xs tracking-tighter">PV</span>
                    PALMVISION
                </a>
<div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-neutral-100 transition-colors" href="#features">Features</a>
<a className="hover:text-neutral-100 transition-colors" href="#models">Models</a>
<a className="hover:text-neutral-100 transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-4 text-sm">
<a className="hidden md:block text-neutral-400 hover:text-neutral-100 transition-colors" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-neutral-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#pricing">
                    Get Started
                </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 mb-8 backdrop-blur-sm">
<iconify-icon icon="solar:sparkles-linear" strokeWidth="1.5"></iconify-icon>
<span>Access 50+ AI models in one dashboard</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 mb-6 max-w-4xl leading-tight">
                    Create professional media without limits.
                </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 leading-relaxed font-normal">
                    The all-in-one AI content platform. Generate cinematic videos, stunning images, natural voiceovers, and custom influencers—no editing skills required.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#pricing">
                        Start Creating Now
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-transparent border border-white/10 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-white/5 transition-colors flex items-center justify-center" href="#features">
                        Explore Platform
                    </a>
</div>

<div className="mt-20 w-full relative">
<div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
<div className="rounded-xl border border-white/10 bg-[#111] p-2 shadow-2xl overflow-hidden relative">

<div className="flex gap-1.5 mb-4 px-2 pt-2">
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-neutral-700"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-8 px-2">
<div className="col-span-1 hidden md:flex flex-col gap-2 border-r border-white/5 pr-4">
<div className="h-8 rounded bg-white/10 w-full"></div>
<div className="h-8 rounded bg-white/5 w-3/4"></div>
<div className="h-8 rounded bg-white/5 w-5/6"></div>
</div>
<div className="col-span-3 grid grid-cols-2 gap-4">
<div className="aspect-video rounded-lg border border-white/10 bg-neutral-900 relative overflow-hidden flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-50"></div>
<iconify-icon className="text-4xl text-white/50 group-hover:text-white transition-colors" icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="aspect-video rounded-lg border border-white/10 bg-neutral-900 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-50"></div>
<iconify-icon className="text-4xl text-white/50" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-neutral-950/50">
<div className="max-w-5xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-6">Stop paying for multiple subscriptions.</h2>
<p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto mb-12">
                    PalmVision replaces the need for expensive, fragmented tools by combining the world's best AI models into one unified workspace starting at just $19/month.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
<div className="flex flex-col gap-4 text-neutral-500 text-lg tracking-tight line-through opacity-50">
<span>Midjourney ($30/mo)</span>
<span>Runway ($35/mo)</span>
<span>ElevenLabs ($22/mo)</span>
</div>
<div className="hidden md:flex h-24 w-px bg-white/10"></div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-xl bg-white text-black flex items-center justify-center font-semibold tracking-tighter mb-4 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            PV
                        </div>
<span className="text-xl font-medium tracking-tight text-white">PalmVision</span>
<span className="text-sm text-neutral-400 mt-1">Everything from $19/mo</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Everything you need to create.</h2>
<p className="text-neutral-400 text-base max-w-2xl">Access industry-leading models for every type of media generation, all accessible through our intuitive interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">AI Video Generation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Create cinematic, high-resolution videos from text or image prompts. Perfect for marketing, shorts, and b-roll.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Kling 3.0</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Google Veo 3.1</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Sora 2 Pro</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl opacity-80" icon="solar:gallery-bold-duotone" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">AI Image Creation</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Generate photorealistic images, illustrations, and art with precise control over style and composition.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">FLUX.2 Pro</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">GPT Image 1.5</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Grok Imagine</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Voice &amp; Audio</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Convert text to natural speech, generate background music, and create custom sound effects in seconds.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">70+ Languages</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Lip Sync</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Music Gen</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform">
<iconify-icon className="text-xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">AI Influencers</h3>
<p className="text-sm text-neutral-400 leading-relaxed mb-4">Train custom LoRA models on specific faces and styles to generate character-consistent content across campaigns.</p>
<div className="flex flex-wrap gap-2 mt-auto">
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Custom LoRA</span>
<span className="text-xs px-2 py-1 rounded bg-white/5 text-neutral-300 border border-white/5">Talking Heads</span>
</div>
</div>

<div className="lg:col-span-2 p-6 rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent hover:bg-white/[0.04] transition-colors flex flex-col md:flex-row gap-6 items-start">
<div className="flex-1">
<div className="w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center mb-6 text-white">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Pro Image Tools</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">A full suite of editing tools built right in. No need to switch to Photoshop to perfect your generations.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full md:w-auto">
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" strokeWidth="1.5"></iconify-icon> Upscaling
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:eraser-linear" strokeWidth="1.5"></iconify-icon> BG Remove
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon> Face Swap
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon> Inpainting
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:t-shirt-linear" strokeWidth="1.5"></iconify-icon> Virtual Try-on
                            </div>
<div className="flex items-center gap-2 text-xs text-neutral-300 p-2 rounded border border-white/5 bg-neutral-900/50">
<iconify-icon icon="solar:history-linear" strokeWidth="1.5"></iconify-icon> Restoration
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Simple, credit-based pricing.</h2>
<p className="text-neutral-400 text-base">Full access to every tool and model on all plans. Scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col">
<div className="mb-6">
<h3 className="text-base font-medium text-neutral-300 mb-2">Starter</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$19</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
</div>
<ul className="flex flex-col gap-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>1,500 Credits/mo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Access to all 50+ models</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Standard generation speed</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Commercial license</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/20 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors">
                            Get Starter
                        </button>
</div>

<div className="p-8 rounded-2xl border border-white/20 bg-neutral-900/50 flex flex-col relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-medium px-3 py-1 rounded-full">
                            Most Popular
                        </div>
<div className="mb-6">
<h3 className="text-base font-medium text-white mb-2">Creator</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$49</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
</div>
<ul className="flex flex-col gap-3 text-sm text-neutral-300 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>5,000 Credits/mo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Fast generation speed</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>1 Custom LoRA Model</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Priority support</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-md bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">
                            Get Creator
                        </button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col">
<div className="mb-6">
<h3 className="text-base font-medium text-neutral-300 mb-2">Pro</h3>
<div className="flex items-baseline gap-1">
<span className="text-4xl font-semibold tracking-tight text-white">$99</span>
<span className="text-sm text-neutral-500">/mo</span>
</div>
</div>
<ul className="flex flex-col gap-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>12,000 Credits/mo</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Highest generation speed</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>5 Custom LoRA Models</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>API Access</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/20 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors">
                            Get Pro
                        </button>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-black flex flex-col">
<div className="mb-6">
<h3 className="text-base font-medium text-neutral-300 mb-2">Enterprise</h3>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-white">Custom</span>
</div>
</div>
<ul className="flex flex-col gap-3 text-sm text-neutral-400 mb-8 flex-1">
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unlimited Credits</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Private infrastructure</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Unlimited Custom Models</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-white mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Dedicated account manager</span>
</li>
</ul>
<button className="w-full py-2.5 rounded-md border border-white/20 bg-transparent text-white text-sm font-medium hover:bg-white/5 transition-colors">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-[#0a0a0a] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div>
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 mb-4 text-white" href="#">
<span className="w-6 h-6 rounded bg-white text-black flex items-center justify-center text-xs tracking-tighter">PV</span>
                    PALMVISION
                </a>
<p className="text-sm text-neutral-500 max-w-xs">The ultimate AI content creation platform for creators, marketers, and businesses.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium text-white mb-1">Product</span>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">AI Video</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">AI Image</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Voice &amp; Audio</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium text-white mb-1">Company</span>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">About Us</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium text-white mb-1">Legal</span>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-neutral-600">
<p>© 2024 PalmVision AI. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:twitter-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:discord-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:github-linear" strokeWidth="1.5"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
