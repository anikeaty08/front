import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="sticky top-0 z-50 bg-[#fdfaf5] border-b-2 border-black py-4 px-6 md:px-12 flex justify-between items-center">
<a className="text-xl font-semibold tracking-tight uppercase hover:text-[#ff5757] transition-colors" href="#">
            DSGN.
        </a>
<div className="hidden md:flex items-center gap-8 font-medium text-sm uppercase tracking-wider">
<a className="hover:underline decoration-2 underline-offset-4" href="#work">Work</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#approach">Approach</a>
<a className="hover:underline decoration-2 underline-offset-4" href="#contact">Connect</a>
</div>
<button aria-label="Menu" className="md:hidden border-2 border-black p-2 bg-[#d4a5ff] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>
<main className="max-w-7xl mx-auto">

<section className="py-20 md:py-32 px-6 md:px-12 border-b-2 border-black relative overflow-hidden">

<div className="absolute top-10 right-10 w-24 h-24 bg-[#ff5757] border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 animate-pulse"></div>
<div className="absolute bottom-10 left-20 w-32 h-16 bg-[#4ae290] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -z-10 rotate-12"></div>
<div className="max-w-4xl">
<span className="inline-block border-2 border-black px-3 py-1 bg-[#fff200] text-sm font-semibold uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6">
                    Communication Designer
                </span>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight uppercase leading-[0.95] mb-8">
                    I shape ideas into compelling <span className="text-[#ff5757]">narratives.</span>
</h1>
<p className="text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-10">
                    Combining visual design with strategic storytelling to build digital experiences that communicate clearly, engage deeply, and leave a lasting impression.
                </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,87,87,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200" href="#work">
                        View Work
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200" href="#contact">
                        Let's Talk
                        <iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 border-b-2 border-black bg-[#f0f0f0]" id="approach">
<div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight uppercase">
                    The Narrative <br/> Approach
                </h2>
<p className="max-w-md text-base font-medium">
                    Design is more than aesthetics; it's a language. Here is how I structure narratives to solve complex communication problems.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

<div className="group border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
<div className="w-12 h-12 bg-[#ff5757] border-2 border-black flex items-center justify-center text-white font-semibold text-xl mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        1
                    </div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-3">Deconstruct</h3>
<p className="text-sm font-medium opacity-80">Breaking down the core message, audience needs, and brand goals to find the truth of the story.</p>
</div>

<div className="group border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
<div className="w-12 h-12 bg-[#fff200] border-2 border-black flex items-center justify-center text-black font-semibold text-xl mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        2
                    </div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-3">Translate</h3>
<p className="text-sm font-medium opacity-80">Converting abstract strategies into visual metaphors, wireframes, and narrative flows.</p>
</div>

<div className="group border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
<div className="w-12 h-12 bg-[#4ae290] border-2 border-black flex items-center justify-center text-black font-semibold text-xl mb-6 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        3
                    </div>
<h3 className="text-2xl font-semibold tracking-tight uppercase mb-3">Articulate</h3>
<p className="text-sm font-medium opacity-80">Crafting the final UI, interactions, and copy to deliver a cohesive and engaging user experience.</p>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-12 border-b-2 border-black" id="work">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight uppercase mb-12">Featured Cases</h2>
<div className="flex flex-col gap-12 md:gap-20">

<article className="flex flex-col lg:flex-row gap-8 items-center group">
<div className="w-full lg:w-3/5 aspect-video bg-[#e0e0e0] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-[#4ae290] mix-blend-color"></div>
</div>
<div className="w-full lg:w-2/5 flex flex-col items-start">
<div className="flex gap-2 mb-4">
<span className="border-2 border-black px-2 py-1 bg-white text-xs font-semibold uppercase">Fintech</span>
<span className="border-2 border-black px-2 py-1 bg-white text-xs font-semibold uppercase">UX Design</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-4">Demystifying Crypto for Beginners</h3>
<p className="text-base font-medium opacity-80 mb-6">
                            How we used visual storytelling and progressive disclosure to turn a complex trading platform into an accessible educational tool.
                        </p>
<a className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-semibold uppercase tracking-wider hover:text-[#ff5757] hover:border-[#ff5757] transition-colors" href="#">
                            Read Case Study
                            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</article>

<article className="flex flex-col lg:flex-row-reverse gap-8 items-center group">
<div className="w-full lg:w-3/5 aspect-video bg-[#e0e0e0] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative transition-transform duration-300 group-hover:-translate-y-2">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744094-24638ea0b3b5?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-80 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-[#d4a5ff] mix-blend-color"></div>
</div>
<div className="w-full lg:w-2/5 flex flex-col items-start">
<div className="flex gap-2 mb-4">
<span className="border-2 border-black px-2 py-1 bg-white text-xs font-semibold uppercase">Editorial</span>
<span className="border-2 border-black px-2 py-1 bg-white text-xs font-semibold uppercase">Branding</span>
</div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-none mb-4">The Climate Narrative</h3>
<p className="text-base font-medium opacity-80 mb-6">
                            Redesigning a digital publication to focus on impact and urgency through stark typography and data-driven visualization.
                        </p>
<a className="inline-flex items-center gap-2 border-b-2 border-black pb-1 font-semibold uppercase tracking-wider hover:text-[#ff5757] hover:border-[#ff5757] transition-colors" href="#">
                            Read Case Study
                            <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</article>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-black">

<div className="py-16 px-6 md:px-12 border-b-2 lg:border-b-0 lg:border-r-2 border-black">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mb-8">Selected Projects</h2>
<div className="space-y-6">

<a className="block group border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight">Urban Mobility App</h3>
<iconify-icon className="text-[#ff5757] opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium opacity-70 mb-3">Interactive prototype streamlining public transit navigation.</p>
<div className="flex gap-2">
<span className="text-xs font-semibold bg-[#f0f0f0] border border-black px-2 py-0.5">Figma</span>
<span className="text-xs font-semibold bg-[#f0f0f0] border border-black px-2 py-0.5">Research</span>
</div>
</a>

<a className="block group border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all" href="#">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-semibold tracking-tight">Cultural Archive</h3>
<iconify-icon className="text-[#4ae290] opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<p className="text-sm font-medium opacity-70 mb-3">Web experience documenting local historical artifacts.</p>
<div className="flex gap-2">
<span className="text-xs font-semibold bg-[#f0f0f0] border border-black px-2 py-0.5">Webflow</span>
<span className="text-xs font-semibold bg-[#f0f0f0] border border-black px-2 py-0.5">Visual Design</span>
</div>
</a>
</div>
</div>

<div className="py-16 px-6 md:px-12 bg-[#f0f0f0]">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight uppercase mb-8">The Arsenal</h2>
<p className="text-sm font-medium mb-8 max-w-sm">Tools are just mediums for the message. Here is what I currently use to bring narratives to life.</p>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Figma</span>
</div>
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Webflow</span>
</div>
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Adobe CC</span>
</div>
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Miro</span>
</div>
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:text-square-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Notion</span>
</div>
<div className="flex items-center gap-2 border-2 border-black px-3 py-2 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
<iconify-icon icon="solar:video-frame-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="text-sm font-semibold uppercase">Protopie</span>
</div>
</div>
</div>
</section>

<footer className="py-20 px-6 md:px-12 bg-[#fff200] text-center relative overflow-hidden" id="contact">

<div className="absolute -top-20 -left-10 text-[15rem] font-semibold opacity-10 text-black leading-none pointer-events-none">
                HELLO
            </div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight uppercase leading-none mb-6">
                    Got a story <br/> to tell?
                </h2>
<p className="text-lg font-medium mb-10">
                    Open for new opportunities, collaborations, or just a chat about design and communication.
                </p>
<a className="inline-block border-4 border-black px-8 py-4 bg-white text-xl font-semibold uppercase tracking-widest shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all duration-200 mb-16" href="mailto:hello@example.com">
                    hello@dsgn.com
                </a>
<div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t-2 border-black gap-6">
<span className="text-sm font-semibold uppercase tracking-wider">© 2024 Comm. Designer</span>
<div className="flex gap-6">
<a className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:underline decoration-2 underline-offset-4" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            LinkedIn
                        </a>
<a className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:underline decoration-2 underline-offset-4" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Twitter/X
                        </a>
<a className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider hover:underline decoration-2 underline-offset-4" href="#">
<iconify-icon icon="solar:link-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Dribbble
                        </a>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
