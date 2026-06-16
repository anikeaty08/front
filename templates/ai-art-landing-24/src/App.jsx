import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Reveal Animation for Hero Text
            const textElements = document.querySelectorAll(".reveal-text");
            gsap.fromTo(textElements, 
                { y: "100%", skewY: 2 },
                { 
                    y: "0%", 
                    skewY: 0,
                    duration: 1.2, 
                    stagger: 0.1, 
                    ease: "power4.out",
                    delay: 0.1
                }
            );

            // Fade in paragraphs and buttons
            gsap.to(".reveal-para", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
                delay: 0.6,
                ease: "power2.out"
            });

            // Parallax Effect on Hero Image
            gsap.to(".parallax-img", {
                yPercent: 15,
                ease: "none",
                scrollTrigger: {
                    trigger: ".parallax-img",
                    start: "top bottom", 
                    end: "bottom top",
                    scrub: true
                }
            });

            // Card Reveal Animations
            const cards = document.querySelectorAll(".group");
            cards.forEach((card) => {
                gsap.fromTo(card, 
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1, 
                        y: 0,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%"
                        }
                    }
                );
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/50">
<div className="flex items-center gap-3 relative z-10 max-w-7xl mx-auto w-full">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-zinc-900 text-white flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<span className="text-xl tracking-tight font-semibold">LoveArt.ai</span>
</a>

<div className="ml-12 hidden md:flex items-center gap-6">

<div className="relative group py-2">
<button className="flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
                        Tools <iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</button>

<div className="absolute top-full left-0 mt-1 w-56 bg-white border border-zinc-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
<a className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#features">AI Art Generators</a>
<a className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#features">AI Image Editors</a>
<a className="block px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" href="#features">AI Photo Filters</a>
</div>
</div>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Prompts</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</div>

<div className="ml-auto hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Log In</a>
<button className="bg-zinc-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm">
                    Sign Up
                </button>
</div>

<button className="md:hidden ml-auto text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="relative z-10">

<main className="max-w-7xl mx-auto pt-32 px-6 pb-20">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">

<div className="reveal-stagger mb-6">
<div className="inline-flex items-center gap-2 border border-zinc-200 px-3 py-1 rounded-full bg-white/50 backdrop-blur shadow-sm">
<iconify-icon className="text-zinc-900" icon="solar:stars-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-tight text-zinc-600">The Ultimate Creative Suite</span>
</div>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tighter font-semibold text-zinc-900 mb-6">
<div className="line-mask"><span className="reveal-text block">Where Art Begins.</span></div>
</h1>

<p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed reveal-para opacity-0">
                    The complete AI studio for creators, marketers, and designers. Generate, edit, and transform your ideas into stunning visuals—instantly.
                </p>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4 reveal-para opacity-0">
<button className="w-full sm:w-auto bg-zinc-900 text-white px-6 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-all shadow-sm flex items-center justify-center gap-2">
                        Start Creating for Free
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<a className="w-full sm:w-auto px-6 py-3 rounded-md text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-all flex items-center justify-center gap-2" href="#features">
                        Explore the Tools
                    </a>
</div>
</div>

<div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] rounded-2xl overflow-hidden mb-20 group shadow-lg shadow-zinc-200/50 border border-zinc-200 bg-zinc-100">
<img alt="AI Generated Art" className="parallax-img absolute inset-0 w-full h-[120%] -top-[10%] object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop" style={{willChange: 'transform'}}/>

<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 z-20 flex gap-2">
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white">
<iconify-icon icon="solar:wand-linear" width="14"></iconify-icon>
<span className="text-xs font-medium tracking-tight">Generated in 2.4s</span>
</div>
</div>
</div>
</main>

<div className="overflow-hidden border-y bg-white border-zinc-200 mb-32 py-8 flex flex-col items-center">
<p className="text-sm text-zinc-500 font-medium mb-6 text-center tracking-tight">Loved by creators at innovative companies worldwide</p>
<div className="flex animate-marquee w-max gap-16 md:gap-24 items-center">

<iconify-icon className="text-zinc-400" icon="simple-icons:google" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:meta" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:adobe" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:figma" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:spotify" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:netflix" width="32"></iconify-icon>

<iconify-icon className="text-zinc-400" icon="simple-icons:google" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:meta" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:adobe" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:figma" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:spotify" width="32"></iconify-icon>
<iconify-icon className="text-zinc-400" icon="simple-icons:netflix" width="32"></iconify-icon>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 mb-32" id="features">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter leading-tight font-semibold text-zinc-900 mb-4">
                    Your Entire Creative Workflow, Reimagined.
                </h2>
<p className="text-base text-zinc-500 leading-relaxed">
                    Don't just generate. Edit, enhance, and transform with a complete suite of 19 specialized AI tools designed for professional results.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:gallery-wide-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">AI Art Generators</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Go beyond basic prompts. Create consistent characters, design unique anime, or generate scalable vectors from a single line of text.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Character Gen</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Anime Gen</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Comic Gen</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Vector Image</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:eraser-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">AI Image Editors</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Say goodbye to tedious manual editing. Remove backgrounds, erase objects, expand canvas borders, and upscale to high resolution.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Remove BG</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Object Remover</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">AI Enhancer</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">AI Expand</span>
</div>
</div>

<div className="group bg-white border border-zinc-200 rounded-2xl p-8 hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:magic-stick-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-semibold mb-3">AI Photo Filters</h3>
<p className="text-sm text-zinc-500 leading-relaxed mb-6">
                        Discover a new dimension. Apply breathtaking styles, turn sketches into polish, or convert 2D images into incredible 3D scenes.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Style Transfer</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Sketch to Art</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">2D to 3D</span>
<span className="text-xs font-medium px-2 py-1 bg-zinc-50 border border-zinc-200 rounded-md text-zinc-600">Image-to-Prompt</span>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white py-24 mb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 mb-4">
                        Create in 3 Simple Steps
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-px bg-zinc-200"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
<iconify-icon className="text-zinc-900" icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">1. Choose Your Tool</h4>
<p className="text-sm text-zinc-500 max-w-xs">Select from 19 powerful AI tools for generation, editing, or creative filtering.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-zinc-50 border border-zinc-200 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-sm">
<iconify-icon className="text-zinc-900" icon="solar:keyboard-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">2. Provide Input</h4>
<p className="text-sm text-zinc-500 max-w-xs">Write a text prompt, or upload your own image or sketch to guide the AI.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-md">
<iconify-icon className="text-white" icon="solar:star-fall-linear" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2">3. Make it Magic</h4>
<p className="text-sm text-zinc-500 max-w-xs">Click to generate. Download your high-resolution, watermark-free artwork instantly.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 mb-4">
                        Powerful for Professionals.<br/>Simple for Everyone.
                    </h2>
<p className="text-base text-zinc-500">LoveArt.ai is built for the diverse needs of the modern creative world.</p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-zinc-100/50 border border-zinc-200 p-6 rounded-xl hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900 mb-4" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight mb-2">Digital Artists</h4>
<p className="text-sm text-zinc-500">Accelerate ideation, create consistent characters, and turn sketches into final renders.</p>
</div>

<div className="bg-zinc-100/50 border border-zinc-200 p-6 rounded-xl hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900 mb-4" icon="solar:graph-up-linear" width="24"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight mb-2">Marketers</h4>
<p className="text-sm text-zinc-500">Generate limitless ad creatives, remove backgrounds, and scale campaigns faster.</p>
</div>

<div className="bg-zinc-100/50 border border-zinc-200 p-6 rounded-xl hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900 mb-4" icon="solar:shop-linear" width="24"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight mb-2">Entrepreneurs</h4>
<p className="text-sm text-zinc-500">Create professional branding, product mockups, and website assets without an agency.</p>
</div>

<div className="bg-zinc-100/50 border border-zinc-200 p-6 rounded-xl hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900 mb-4" icon="solar:code-square-linear" width="24"></iconify-icon>
<h4 className="text-base font-semibold tracking-tight mb-2">Game Developers</h4>
<p className="text-sm text-zinc-500">Rapidly prototype assets, generate textures, and convert 2D concepts into 3D scenes.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="pricing">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 mb-4">
                    Smarter Pricing for Modern Creators.
                </h2>
<p className="text-base text-zinc-500">
                    No subscriptions. No hidden fees. Just simple, pay-as-you-go credits that never expire. Perfect for projects of any size.
                </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">

<div className="bg-white border border-zinc-200 rounded-2xl p-8">
<h3 className="text-lg font-medium text-zinc-600 mb-2">Starter Pack</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold tracking-tighter text-zinc-900">250</span>
<span className="text-sm text-zinc-500">credits</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Access to all 19 tools</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Standard resolution</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Credits never expire</li>
</ul>
<button className="w-full py-2.5 px-4 border border-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors">Select Pack</button>
</div>

<div className="bg-zinc-900 rounded-2xl p-8 relative shadow-xl lg:-mt-4 lg:mb-4 border border-zinc-800">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
<span className="bg-white text-zinc-900 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-tight">Most Popular</span>
</div>
<h3 className="text-lg font-medium text-zinc-400 mb-2">Creator Pack</h3>
<div className="flex items-baseline gap-2 mb-6 text-white">
<span className="text-5xl font-semibold tracking-tighter">750</span>
<span className="text-sm text-zinc-400">credits</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-300">
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Access to all 19 tools</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> High resolution upscale</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Commercial usage rights</li>
<li className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Priority generation speed</li>
</ul>
<button className="w-full py-2.5 px-4 bg-white text-zinc-900 rounded-md text-sm font-medium hover:bg-zinc-100 transition-colors">Find Your Perfect Plan</button>
</div>

<div className="bg-white border border-zinc-200 rounded-2xl p-8">
<h3 className="text-lg font-medium text-zinc-600 mb-2">Pro Pack</h3>
<div className="flex items-baseline gap-2 mb-6">
<span className="text-4xl font-semibold tracking-tighter text-zinc-900">2000</span>
<span className="text-sm text-zinc-500">credits</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-zinc-600">
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> All Creator features</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> API Access (Beta)</li>
<li className="flex items-center gap-2"><iconify-icon className="text-zinc-900" icon="solar:check-circle-linear"></iconify-icon> Team workspace</li>
</ul>
<button className="w-full py-2.5 px-4 border border-zinc-200 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors">Select Pack</button>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-32 text-center">
<div className="bg-zinc-100/50 border border-zinc-200 rounded-3xl p-12 md:p-20 relative overflow-hidden">
<div className="relative z-10">
<h2 className="text-4xl md:text-6xl tracking-tighter font-semibold mb-6 text-zinc-900">
                        Ready to Create Your Masterpiece?
                    </h2>
<p className="text-lg text-zinc-500 mb-8 max-w-xl mx-auto">
                        Join thousands of creators and start bringing your ideas to life today. Get started with free credits on us.
                    </p>
<button className="bg-zinc-900 text-white px-8 py-4 rounded-md text-base font-medium hover:bg-zinc-800 transition-all shadow-md inline-flex items-center gap-2">
                        Sign Up and Get Free Credits
                        <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</section>
</div>

<footer className="border-t border-zinc-200 bg-white relative z-10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-zinc-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:magic-stick-3-linear" width="14"></iconify-icon>
</div>
<span className="text-lg tracking-tight font-semibold">LoveArt.ai</span>
</a>
<p className="text-sm text-zinc-500 max-w-xs">The complete AI studio for modern creators. Generate, edit, and filter with precision.</p>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight">Tools</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">AI Art Generators</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">AI Image Editors</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">AI Photo Filters</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Prompt Library</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-sm mb-4 tracking-tight">Legal</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-zinc-200">
<div className="text-sm text-zinc-400">
                    © 2026 LoveArt.ai. All rights reserved.
                </div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="simple-icons:twitter" width="18"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="simple-icons:discord" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
