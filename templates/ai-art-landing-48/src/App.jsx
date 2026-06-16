import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#faf5ff',
100: '#f3e8ff',
500: '#a855f7',
600: '#9333ea',
900: '#581c87',
950: '#3b0764',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script for hero fanned cards animation
        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('#art-stack .stack-card');
            if(cards.length === 0) return;

            let currentIndex = 0;
            const classes = ['active', 'next', 'prev', 'hidden-card']; // Adjust based on number of cards

            setInterval(() => {
                // Remove existing state classes
                cards.forEach(card => {
                    card.classList.remove('active', 'next', 'prev', 'hidden-card');
                });

                // Assign new classes based on rotation
                cards.forEach((card, i) => {
                    let offset = (i - currentIndex + cards.length) % cards.length;
                    
                    if(offset === 0) card.classList.add('active');
                    else if(offset === 1) card.classList.add('next');
                    else if(offset === cards.length - 1) card.classList.add('prev');
                    else card.classList.add('hidden-card');
                });

                currentIndex = (currentIndex + 1) % cards.length;
            }, 3000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="max-w-[1440px] mx-auto bg-white min-h-screen relative shadow-2xl overflow-hidden border-x border-neutral-200/50">

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100 flex items-center justify-between px-6 lg:px-12 py-4">
<div className="flex items-center gap-8">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
<iconify-icon height="20" icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight text-neutral-900">LoveArt.ai</span>
</a>

<div className="hidden lg:flex items-center gap-6 text-sm font-normal text-neutral-500">

<div className="relative group py-2">
<button className="flex items-center gap-1 hover:text-neutral-900 transition-colors">
                            Features <iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>
<div className="dropdown-menu absolute top-full left-0 mt-1 w-56 bg-white border border-neutral-100 rounded-xl shadow-lg p-2 z-50">
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon className="text-brand-500" height="18" icon="solar:gallery-bold-duotone" width="18"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">AI Art Generators</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon className="text-blue-500" height="18" icon="solar:pen-new-square-bold-duotone" width="18"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">AI Image Editors</span>
</div>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-neutral-50 transition-colors" href="#">
<iconify-icon className="text-pink-500" height="18" icon="solar:magic-stick-bold-duotone" width="18"></iconify-icon>
<div className="flex flex-col">
<span className="text-sm font-medium text-neutral-900">AI Photo Filters</span>
</div>
</a>
</div>
</div>
<a className="hover:text-neutral-900 transition-colors" href="#">Prompts</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Pricing</a>
</div>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#">Log In</a>
<a className="text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-colors px-4 py-2 rounded-lg shadow-sm" href="#">Sign Up</a>
</div>
</nav>

<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden px-6 lg:px-12">
<div className="hero-glow absolute inset-0 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start max-w-xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 bg-white/50 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-brand-500"></span>
<span className="text-xs font-medium text-neutral-600">The All-in-One Creative Studio</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-neutral-900 leading-[1.05] mb-6">
                        Where Art <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-pink-500">Begins.</span>
</h1>
<p className="text-lg text-neutral-500 font-normal leading-relaxed mb-10">
                        The complete AI studio for creators, marketers, and designers. Generate, edit, and transform your ideas into stunning visuals—instantly.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-all px-6 py-3.5 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] flex items-center justify-center gap-2 group" href="#">
                            Start Creating for Free
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto text-base font-medium text-neutral-600 bg-white border border-neutral-200 hover:bg-neutral-50 transition-all px-6 py-3.5 rounded-xl flex items-center justify-center" href="#features">
                            Explore the Tools
                        </a>
</div>
</div>

<div className="relative h-[400px] sm:h-[500px] w-full perspective-1000 flex items-center justify-center">
<div className="relative w-[280px] sm:w-[320px] h-[360px] sm:h-[420px]" id="art-stack">

<div className="stack-card active border-gradient-mask border-gradient-dark rounded-2xl bg-white p-2 shadow-2xl">
<div className="w-full h-full rounded-xl overflow-hidden relative group">
<img alt="AI Generated Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5">
<iconify-icon className="text-brand-300" height="14" icon="solar:stars-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-white">Ethereal Landscape</span>
</div>
</div>
</div>

<div className="stack-card next border-gradient-mask border-gradient-dark rounded-2xl bg-white p-2 shadow-2xl">
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="AI Generated Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5">
<iconify-icon className="text-blue-300" height="14" icon="solar:pen-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-white">Cyberpunk Character</span>
</div>
</div>
</div>

<div className="stack-card prev border-gradient-mask border-gradient-dark rounded-2xl bg-white p-2 shadow-2xl">
<div className="w-full h-full rounded-xl overflow-hidden relative">
<img alt="AI Generated Art" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md rounded-lg px-2.5 py-1 flex items-center gap-1.5">
<iconify-icon className="text-pink-300" height="14" icon="solar:gallery-edit-linear" width="14"></iconify-icon>
<span className="text-xs font-medium text-white">Abstract 3D</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-100 bg-neutral-50/50 py-8 px-6 lg:px-12">
<p className="text-xs font-medium text-neutral-400 text-center uppercase tracking-widest mb-6">
                Loved by creators at innovative companies worldwide
            </p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
<iconify-icon height="24" icon="simple-icons:google" width="24"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:meta" width="24"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:adobe" width="24"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:shopify" width="24"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:figma" width="24"></iconify-icon>
</div>
</section>

<section className="py-24 px-6 lg:px-12 relative" id="features">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 mb-4">
                    Your Entire Creative Workflow, Reimagined.
                </h2>
<p className="text-base text-neutral-500 leading-relaxed">
                    Don't just generate. Edit, enhance, and transform with a complete suite of 19 specialized AI tools designed for professional results.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Breathe Life into Your Ideas</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-grow">
                        Go beyond basic prompts. Create consistent characters for your stories, design unique anime and comic book art, or generate scalable vector graphics from a single line of text. Your imagination is the only limit.
                    </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-brand-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Character Generator
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-brand-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Anime &amp; Comic Generator
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-brand-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Vector Image Generator
                        </div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:eraser-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Effortless Editing, Flawless Results</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-grow">
                        Say goodbye to tedious manual editing. Remove backgrounds with pixel-perfect precision, erase unwanted objects seamlessly, expand your canvas beyond its original borders, and upscale images to stunning high resolution with a single click.
                    </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-blue-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Remove Background
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-blue-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Object Remover
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-blue-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> AI Photo Enhancer &amp; Expand
                        </div>
</div>
</div>

<div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon height="24" icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-3">Transform Photos into Art</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-grow">
                        Discover a new dimension of creativity. Instantly apply breathtaking artistic styles to your photos, turn a simple sketch into a polished masterpiece, or convert 2D images into incredible 3D scenes.
                    </p>
<div className="space-y-3 pt-6 border-t border-neutral-100">
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-pink-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> AI Style Transfer
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-pink-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> Turn Sketch to Art
                        </div>
<div className="flex items-center gap-2 text-sm text-neutral-700 font-medium">
<iconify-icon className="text-pink-500" height="16" icon="solar:check-circle-linear" width="16"></iconify-icon> 2D to 3D &amp; Image-to-Prompt
                        </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-neutral-950 text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] opacity-10 mix-blend-overlay bg-cover bg-center"></div>
<div className="relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-4">Create in 3 Simple Steps</h2>
<p className="text-base text-neutral-400">Go from concept to final artwork faster than ever.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-xl relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-medium">1</div>
<iconify-icon className="text-neutral-300" height="32" icon="solar:widget-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Choose Your Tool</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Select from 19 powerful AI tools for generation, editing, or creative filtering.</p>
</div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-xl relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-medium">2</div>
<iconify-icon className="text-neutral-300" height="32" icon="solar:text-field-focus-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Provide Your Input</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Write a text prompt, or upload your own image or sketch to guide the AI.</p>
</div>

<div className="flex flex-col items-center text-center relative z-10">
<div className="w-24 h-24 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 shadow-xl relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-500 flex items-center justify-center text-xs font-medium">3</div>
<iconify-icon className="text-neutral-300" height="32" icon="solar:magic-stick-3-linear" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Make it Magic</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-xs">Click to generate, edit, or transform. Download your high-resolution artwork.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-neutral-50 border-b border-neutral-200">
<div className="flex flex-col lg:flex-row justify-between items-start mb-16 gap-8">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 max-w-lg leading-[1.1]">
                    Powerful for Professionals. <br/><span className="text-neutral-400">Simple for Everyone.</span>
</h2>
<p className="text-base text-neutral-500 max-w-md">
                    LoveArt.ai is built for the diverse needs of the modern creative world. See how different creators leverage the platform.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col h-[320px] shadow-sm group hover:border-brand-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-auto group-hover:bg-brand-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-brand-600 transition-colors" height="20" icon="solar:palette-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Digital Artists</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Overcome creative block, generate base concepts rapidly, and stylize existing works.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col h-[320px] shadow-sm group hover:border-blue-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-auto group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-blue-600 transition-colors" height="20" icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Marketers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Produce stunning social media assets, ad creatives, and blog graphics without a dedicated designer.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col h-[320px] shadow-sm group hover:border-emerald-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-auto group-hover:bg-emerald-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-emerald-600 transition-colors" height="20" icon="solar:shop-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Small Businesses</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Edit product photos flawlessly, remove backgrounds, and create professional brand imagery.</p>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-neutral-200 flex flex-col h-[320px] shadow-sm group hover:border-pink-200 transition-colors">
<div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-auto group-hover:bg-pink-50 transition-colors">
<iconify-icon className="text-neutral-600 group-hover:text-pink-600 transition-colors" height="20" icon="solar:gamepad-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium tracking-tight text-neutral-900 mb-2">Game Designers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Generate consistent concept art, character sprites, and environmental textures instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 bg-white">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-neutral-900 mb-4">Smarter Pricing for Modern Creators</h2>
<p className="text-base text-neutral-500">No subscriptions. No hidden fees. Just simple, pay-as-you-go credits that never expire. Perfect for projects of any size.</p>
</div>
<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">

<div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col">
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Starter Pack</div>
<div className="text-3xl font-medium text-neutral-900 mb-6">250 <span className="text-base text-neutral-400 font-normal">Credits</span></div>
<ul className="space-y-4 mb-8 text-sm text-neutral-600 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Access all 19 AI tools</li>
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Standard generation speed</li>
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Personal use license</li>
</ul>
<a className="block text-center text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors py-3 rounded-xl" href="#">Get 250 Credits</a>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 shadow-2xl flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-500 to-pink-500 text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-widest">
                        Most Popular
                    </div>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Creator Pack</div>
<div className="text-3xl font-medium text-white mb-6">750 <span className="text-base text-neutral-400 font-normal">Credits</span></div>
<ul className="space-y-4 mb-8 text-sm text-neutral-300 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Access all 19 AI tools</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Fast generation speed</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Commercial use license</li>
<li className="flex items-start gap-2"><iconify-icon className="text-brand-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> High-res downloads</li>
</ul>
<a className="block text-center text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-100 transition-colors py-3 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.3)]" href="#">Get 750 Credits</a>
</div>

<div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm flex flex-col">
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">Pro Pack</div>
<div className="text-3xl font-medium text-neutral-900 mb-6">2000 <span className="text-base text-neutral-400 font-normal">Credits</span></div>
<ul className="space-y-4 mb-8 text-sm text-neutral-600 flex-grow">
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Access all 19 AI tools</li>
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Priority generation speed</li>
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> Commercial use license</li>
<li className="flex items-start gap-2"><iconify-icon className="text-neutral-400 mt-0.5" icon="solar:check-circle-linear"></iconify-icon> API Access (Beta)</li>
</ul>
<a className="block text-center text-sm font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors py-3 rounded-xl" href="#">Get 2000 Credits</a>
</div>
</div>
<div className="mt-12 text-center">
<a className="text-sm font-medium text-brand-600 hover:text-brand-700 inline-flex items-center gap-1 transition-colors" href="#">
                    Find Your Perfect Plan <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 lg:px-12 relative overflow-hidden bg-neutral-50">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-brand-200/40 to-pink-200/40 rounded-full blur-3xl pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto text-center border border-neutral-200 bg-white/60 backdrop-blur-xl p-10 md:p-16 rounded-[2.5rem] shadow-sm">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-pink-500 mx-auto flex items-center justify-center text-white shadow-lg mb-8">
<iconify-icon height="32" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight text-neutral-900 mb-4 leading-[1.1]">
                    Ready to Create Your Masterpiece?
                </h2>
<p className="text-base text-neutral-500 mb-10">
                    Join thousands of creators and start bringing your ideas to life today. Get started with free credits on us.
                </p>
<a className="inline-flex text-base font-medium text-white bg-neutral-900 hover:bg-neutral-800 transition-all px-8 py-4 rounded-xl shadow-[0_8px_20px_-6px_rgba(0,0,0,0.3)] items-center justify-center gap-2 group" href="#">
                    Sign Up and Get Free Credits
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 pt-16 pb-8 px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-brand-500 to-pink-500 flex items-center justify-center text-white">
<iconify-icon height="14" icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-neutral-900">LoveArt.ai</span>
</a>
<p className="text-sm text-neutral-500 max-w-xs mb-6">
                        The powerful, all-in-one, web-based AI creative suite for generation, editing, and filtering.
                    </p>
<div className="flex items-center gap-4 text-neutral-400">
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon height="18" icon="simple-icons:twitter" width="18"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon height="18" icon="simple-icons:instagram" width="18"></iconify-icon></a>
<a className="hover:text-neutral-900 transition-colors" href="#"><iconify-icon height="18" icon="simple-icons:discord" width="18"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-4">Tools</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">AI Art Generators</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">AI Image Editors</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">AI Photo Filters</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Prompt Library</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-medium uppercase tracking-widest text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2026 LoveArt.ai. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span>Status:</span>
<span className="flex items-center gap-1 text-emerald-500 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> All systems operational
                    </span>
</div>
</div>
</footer>
</main>


    </>
  );
}
