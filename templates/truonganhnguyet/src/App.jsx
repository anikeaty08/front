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
      

<div className="grain-overlay"></div>
<div className="ambient-glow bg-[#e6ccb2] w-[40vw] h-[40vw] top-[-10vw] left-[-10vw]"></div>
<div className="ambient-glow bg-[#ddb892] w-[30vw] h-[30vw] top-[40vh] right-[-10vw] opacity-10"></div>
<div className="ambient-glow bg-[#f5ebe0] w-[50vw] h-[50vw] bottom-[-20vw] left-[20vw] opacity-[0.08]"></div>

<nav className="fixed top-0 w-full z-40 bg-zinc-950/50 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between animate-on-load">
<a className="font-['Space_Grotesk'] text-xl font-semibold tracking-tighter text-white uppercase flex items-center gap-2" href="#">
                TÁN<span className="text-[#e6ccb2]">.</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#testimonials">Testimonials</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-sm font-medium px-5 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#e6ccb2]/50 transition-all text-white" href="mailto:nguyetrg123@gmai.com">
                Contact Me
            </a>
</div>
</nav>

<section className="relative pt-48 pb-32 px-6 max-w-7xl mx-auto flex flex-col items-center text-center min-h-[90vh] justify-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#e6ccb2]/20 text-xs font-light mb-8 animate-on-load text-[#e6ccb2] backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e6ccb2] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#e6ccb2]"></span>
</span>
            Accepting new commissions
        </div>
<h1 className="font-['Space_Grotesk'] text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-8 animate-on-load delay-100 leading-[1.1]">
            Motion that <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f5ebe0] via-[#e6ccb2] to-[#ddb892]">captivates</span>.
        </h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-light mb-12 animate-on-load delay-200 leading-relaxed">
            I'm Trương Ánh Nguyệt. I craft premium 2D animations, explainer videos, and motion graphics that help brands and creators tell unforgettable stories.
        </p>
<div className="flex flex-col sm:flex-row gap-4 animate-on-load delay-300 w-full sm:w-auto">
<a className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e6ccb2] to-[#ddb892] text-zinc-950 font-medium hover:opacity-90 transition-opacity text-base flex items-center justify-center gap-2 group" href="mailto:nguyetrg123@gmai.com">
                Start a Project
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-base flex items-center justify-center" href="#services">
                Explore Services
            </a>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.02] py-12 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-light text-zinc-500 uppercase tracking-widest mb-8">Trusted by visionaries across industries</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale font-['Space_Grotesk'] text-xl md:text-2xl font-semibold tracking-tighter text-white">
<span className="hover:opacity-100 transition-opacity">CONTENT CREATORS</span>
<span className="hover:opacity-100 transition-opacity">INDIE STUDIOS</span>
<span className="hover:opacity-100 transition-opacity">STARTUPS</span>
<span className="hover:opacity-100 transition-opacity">SMALL BUSINESSES</span>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-8 animate-on-load">
<h2 className="font-['Space_Grotesk'] text-3xl md:text-5xl font-semibold tracking-tight text-white">Bringing ideas to life, frame by frame.</h2>
<div className="space-y-4 text-zinc-400 font-light text-base md:text-lg leading-relaxed">
<p>
                        With a deep passion for 2D animation, I specialize in creating visuals that not only look stunning but serve a purpose. Whether it's retaining viewer attention on YouTube or explaining a complex startup product.
                    </p>
<p>
                        I believe in a clean, minimal, yet expressive approach. Every keyframe is designed to enhance your narrative without unnecessary clutter.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/10">
<div>
<p className="font-['Space_Grotesk'] text-4xl font-semibold text-[#e6ccb2] tracking-tight mb-2">100%</p>
<p className="text-sm text-zinc-500 font-light">Custom Animations</p>
</div>
<div>
<p className="font-['Space_Grotesk'] text-4xl font-semibold text-[#e6ccb2] tracking-tight mb-2">Top</p>
<p className="text-sm text-zinc-500 font-light">Quality Delivery</p>
</div>
</div>
</div>
<div className="relative h-[500px] w-full rounded-2xl overflow-hidden bg-white/5 border border-white/10 glass-card flex items-center justify-center group animate-on-load delay-200">
<div className="absolute inset-0 bg-gradient-to-tr from-[#e6ccb2]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-9xl text-white/10 group-hover:text-[#e6ccb2]/40 transition-colors duration-500" icon="solar:video-frame-linear" strokeWidth="1"></iconify-icon>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative" id="services">
<div className="mb-16 md:mb-24 animate-on-load">
<span className="text-[#e6ccb2] text-sm font-medium tracking-wider uppercase mb-4 block">Expertise</span>
<h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold tracking-tight text-white max-w-2xl">Tailored animation solutions for your brand.</h2>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="glass-card p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/5 animate-on-load">
<div className="w-12 h-12 rounded-full bg-[#e6ccb2]/10 flex items-center justify-center mb-6 text-[#e6ccb2]">
<iconify-icon className="text-2xl" icon="solar:presentation-graph-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white mb-3">Explainer Videos</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">
                    Clear, engaging, and professional videos perfect for businesses, startups, or school projects. Transform complex ideas into easy-to-understand visuals.
                </p>
</div>

<div className="glass-card p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/5 animate-on-load delay-100">
<div className="w-12 h-12 rounded-full bg-[#e6ccb2]/10 flex items-center justify-center mb-6 text-[#e6ccb2]">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white mb-3">Cartoon Animations</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">
                    Expressive, smooth character animations that bring personality to your projects. Ideal for indie game studios looking to breathe life into their worlds.
                </p>
</div>

<div className="glass-card p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/5 animate-on-load delay-200">
<div className="w-12 h-12 rounded-full bg-[#e6ccb2]/10 flex items-center justify-center mb-6 text-[#e6ccb2]">
<iconify-icon className="text-2xl" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white mb-3">Motion Graphics</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">
                    Sleek moving text, icons, and simple visuals designed to elevate your brand's aesthetic and maintain high production value.
                </p>
</div>

<div className="glass-card p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/5 animate-on-load delay-300">
<div className="w-12 h-12 rounded-full bg-[#e6ccb2]/10 flex items-center justify-center mb-6 text-[#e6ccb2]">
<iconify-icon className="text-2xl" icon="solar:smartphone-rotate-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-tight text-white mb-3">Social Media Clips</h3>
<p className="text-zinc-400 font-light text-base leading-relaxed">
                    Short, highly engaging, eye-catching animations optimized for YouTubers, TikTokers, and Instagram to boost audience retention.
                </p>
</div>
</div>
</section>

<section className="py-32 border-y border-white/5 bg-zinc-950/50 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 md:mb-24 animate-on-load">
<h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A streamlined process.</h2>
<p className="text-zinc-400 font-light max-w-2xl mx-auto text-base">From initial concept to final render, collaboration is seamless.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-12 right-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative pt-6 md:pt-12 animate-on-load">
<div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#e6ccb2] font-['Space_Grotesk'] font-semibold mb-6 md:mb-0 z-10">01</div>
<h4 className="text-white font-medium text-lg mb-2">Discovery</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">We discuss your goals, target audience, and brand style to align on the vision.</p>
</div>
<div className="relative pt-6 md:pt-12 animate-on-load delay-100">
<div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#e6ccb2] font-['Space_Grotesk'] font-semibold mb-6 md:mb-0 z-10">02</div>
<h4 className="text-white font-medium text-lg mb-2">Storyboarding</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">I create sketches and a visual sequence so you know exactly what to expect.</p>
</div>
<div className="relative pt-6 md:pt-12 animate-on-load delay-200">
<div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-[#e6ccb2]/30 flex items-center justify-center text-[#e6ccb2] font-['Space_Grotesk'] font-semibold mb-6 md:mb-0 z-10 shadow-[0_0_15px_rgba(230,204,178,0.2)]">03</div>
<h4 className="text-white font-medium text-lg mb-2">Animation</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">The magic happens. Designing assets, adding motion, and refining timing.</p>
</div>
<div className="relative pt-6 md:pt-12 animate-on-load delay-300">
<div className="md:absolute top-0 left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-[#e6ccb2] font-['Space_Grotesk'] font-semibold mb-6 md:mb-0 z-10">04</div>
<h4 className="text-white font-medium text-lg mb-2">Delivery</h4>
<p className="text-zinc-500 text-sm font-light leading-relaxed">Final files delivered in your required formats, ready to be published.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="testimonials">
<div className="mb-16 animate-on-load text-center">
<h2 className="font-['Space_Grotesk'] text-4xl md:text-5xl font-semibold tracking-tight text-white mb-4">Client feedback.</h2>
<p className="text-zinc-400 font-light max-w-xl mx-auto text-base">Hear from the creators and businesses I've partnered with.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 glass-card flex flex-col justify-between animate-on-load">
<div className="mb-8 text-zinc-300 font-light text-base leading-relaxed italic">
                    "The character animations were smooth and expressive. It really brought our game to life without going over budget."
                </div>
<div>
<div className="flex items-center gap-1 text-[#e6ccb2] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm">Indie Game Developer</h4>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 glass-card flex flex-col justify-between animate-on-load delay-100">
<div className="mb-8 text-zinc-300 font-light text-base leading-relaxed italic">
                    "The animations added so much personality to my videos. My audience retention improved, and my channel looks way more professional now."
                </div>
<div>
<div className="flex items-center gap-1 text-[#e6ccb2] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm">Content Creator</h4>
<p className="text-xs text-zinc-500 mt-1">YouTube Animations</p>
</div>
</div>

<div className="p-8 rounded-2xl bg-[#e6ccb2]/5 border border-[#e6ccb2]/20 glass-card flex flex-col justify-between animate-on-load delay-200 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#e6ccb2]/10 blur-2xl rounded-full"></div>
<div className="mb-8 text-zinc-300 font-light text-base leading-relaxed italic relative z-10">
                    "Working with this animator completely transformed how we present our product. The 2D explainer video was clear, engaging, and helped us attract more customers within weeks."
                </div>
<div className="relative z-10">
<div className="flex items-center gap-1 text-[#e6ccb2] mb-3">
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="text-white font-medium text-sm">Small Business Owner</h4>
<p className="text-xs text-zinc-500 mt-1">Explainer Video</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="faq">
<div className="text-center mb-16 animate-on-load">
<h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Common questions.</h2>
</div>
<div className="space-y-4 animate-on-load delay-100">
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glass-card">
<summary className="flex justify-between items-center font-medium p-6 text-white text-base">
                    How long does a 1-minute explainer video take?
                    <span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 text-sm leading-relaxed">
                    Typically, a high-quality 1-minute explainer video takes about 2 to 3 weeks from initial concept to final delivery, depending on the complexity of the design and feedback rounds.
                </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glass-card">
<summary className="flex justify-between items-center font-medium p-6 text-white text-base">
                    Do you provide voiceovers and sound design?
                    <span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 text-sm leading-relaxed">
                    While my primary focus is animation, I can collaborate with professional voiceover artists and source royalty-free music and sound effects to provide a complete, ready-to-use video.
                </div>
</details>
<details className="group bg-white/[0.02] border border-white/5 rounded-xl overflow-hidden glass-card">
<summary className="flex justify-between items-center font-medium p-6 text-white text-base">
                    What software do you use?
                    <span className="transition group-open:rotate-180 text-zinc-500">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</span>
</summary>
<div className="text-zinc-400 font-light px-6 pb-6 text-sm leading-relaxed">
                    I utilize industry-standard tools, primarily focusing on Adobe After Effects for motion graphics and compositing, alongside Adobe Illustrator for vector designs and character rigging.
                </div>
</details>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden mt-12 rounded-3xl bg-white/[0.02] border border-white/5 text-center animate-on-load">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e6ccb2]/5 pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">Ready to start your project?</h2>
<p className="text-zinc-400 font-light text-base md:text-lg mb-10">
                Let's discuss how custom 2D animation can elevate your content, engage your audience, and drive results.
            </p>
<a className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e6ccb2] to-[#ddb892] text-zinc-950 font-medium hover:scale-105 transition-transform text-base shadow-[0_0_30px_rgba(230,204,178,0.3)]" href="mailto:nguyetrg123@gmai.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
                Contact Me
            </a>
<p className="text-xs text-zinc-500 mt-6 font-light">Replies within 24 hours.</p>
</div>
</section>

<footer className="mt-32 border-t border-white/5 bg-zinc-950 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="font-['Space_Grotesk'] text-xl font-semibold tracking-tighter text-white uppercase">
                TÁN<span className="text-[#e6ccb2]">.</span>
</div>
<div className="flex items-center gap-6 text-sm text-zinc-500 font-light">
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-[#e6ccb2] transition-colors" href="mailto:nguyetrg123@gmai.com">nguyetrg123@gmai.com</a>
</div>
<p className="text-xs text-zinc-600 font-light">
                © 2024 Trương Ánh Nguyệt. All rights reserved.
            </p>
</div>
</footer>

    </>
  );
}
