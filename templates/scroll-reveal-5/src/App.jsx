import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // 1. Animate the Mask on the Hero Section
            // As we scroll, the mask moves UP (negative Y), "lifting" the image like a curtain
            // because the mask shape is defined as visible at top, transparent at bottom (outside SVG).
            gsap.to("#hero", {
                // Determine how much to move the mask. 
                // Using webkitMaskPosition for Safari/Chrome support
                // "center -150%" moves the mask up sufficiently to clear the screen
                maskPosition: "center -130vh", 
                webkitMaskPosition: "center -130vh", 
                ease: "none", // Linear movement linked to scroll
                scrollTrigger: {
                    trigger: "body", // Use body/distributor as the scroll track
                    start: "top top",
                    end: "bottom bottom", // Matches the height of scroll-distributor
                    scrub: 0, // Smooth scrubbing (0 for instant response, or 0.5 for lag)
                }
            });

            // 2. Parallax/Fade in the Content Section for extra polish
            // The content is revealed by the mask, but let's make it scale/fade in slightly
            // as the hero lifts away.
            gsap.fromTo("#content-inner", 
                { 
                    y: 100, 
                    opacity: 0, 
                    scale: 0.95 
                },
                {
                    y: 0, 
                    opacity: 1, 
                    scale: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: "body",
                        start: "top top",
                        end: "50% top", // Animate in during the first half of scroll
                        scrub: 0.5
                    }
                }
            );
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute top-0 left-0 w-full h-[250vh] pointer-events-none z-50" id="scroll-distributor"></div>

<section className="fixed inset-0 w-full h-screen z-0 bg-white flex flex-col items-center justify-center pt-20 px-6" id="content">
<div className="max-w-4xl w-full space-y-24 opacity-0" id="content-inner">

<div className="text-center space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs text-gray-500 font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    Version 2.0 Available
                </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-[1.1]">
                    The seamless integration<br/>
                    for modern engineering teams.
                </h2>
<p className="text-lg text-gray-500 max-w-xl mx-auto font-light leading-relaxed">
                    Orchestrate your entire workflow with a single, intuitive platform designed to scale with your ambition.
                </p>
<div className="flex items-center justify-center gap-4 pt-4">
<button className="group flex items-center gap-2 bg-gray-900 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 transition-all">
                        Start building
                        <iconify-icon className="text-gray-400 group-hover:text-white transition-colors" icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all border border-transparent hover:border-gray-200">
                        Documentation
                    </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-gray-700" icon="lucide:zap" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Instant Deploy</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Push to git and your website is live. Zero configuration required for most frameworks.
                    </p>
</div>

<div className="p-6 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-gray-700" icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Global Edge</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Your content is automatically replicated to 70+ regions globally for minimal latency.
                    </p>
</div>

<div className="p-6 rounded-xl border border-gray-100 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow duration-300">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4 border border-gray-100">
<iconify-icon className="text-gray-700" icon="lucide:bar-chart-3" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-gray-900 mb-2">Real-time Analytics</h3>
<p className="text-xs text-gray-500 leading-relaxed">
                        Get insights into your traffic with privacy-friendly analytics built directly in.
                    </p>
</div>
</div>

<div className="flex justify-between items-center border-t border-gray-100 pt-8">
<div className="flex items-center gap-2 text-gray-400">
<iconify-icon icon="lucide:command" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-tight">ACME INC</span>
</div>
<div className="flex gap-4">
<iconify-icon className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" icon="lucide:github" width="16"></iconify-icon>
<iconify-icon className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors" icon="lucide:twitter" width="16"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="hero-mask fixed inset-0 w-full h-screen z-10 bg-[#0a0a0a] text-white flex flex-col justify-between overflow-hidden" id="hero">

<div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
<img alt="Abstract Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-12">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-sm">Linear</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-gray-300">
<a className="hover:text-white transition-colors" href="#">Features</a>
<a className="hover:text-white transition-colors" href="#">Method</a>
<a className="hover:text-white transition-colors" href="#">Customers</a>
<a className="hover:text-white transition-colors" href="#">Changelog</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-gray-300 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded-full text-xs font-medium transition-all backdrop-blur-sm border border-white/10" href="#">
                    Sign up
                </a>
</div>
</nav>

<div className="relative z-20 flex flex-col items-center justify-center flex-grow text-center px-4">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] uppercase tracking-wider font-medium text-gray-300">
<span>New Integration</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-6">
                Unmatched<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">Velocity.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                The issue tracking tool you'll actually enjoy using. Built for speed, designed for focus.
            </p>
</div>

<div className="relative z-20 pb-10 flex flex-col items-center gap-2 opacity-80">
<span className="text-[10px] uppercase tracking-widest text-gray-400">Scroll to explore</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
</div>
</section>


    </>
  );
}
