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

            // 1. Masked Word Reveal Animation (Hero)
            // Animate .reveal-text inside .line-mask
            const textElements = document.querySelectorAll(".reveal-text");
            
            gsap.fromTo(textElements, 
                { y: "100%", skewY: 7 },
                { 
                    y: "0%", 
                    skewY: 0,
                    duration: 1.5, 
                    stagger: 0.15, 
                    ease: "power4.out",
                    delay: 0.2
                }
            );

            // 2. Fade in paragraph and button
            gsap.to(".reveal-para", {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                delay: 1,
                ease: "power2.out"
            });

            // 3. Parallax Effect on Hero Image
            gsap.to(".parallax-img", {
                yPercent: 20, // Move image down slightly
                ease: "none",
                scrollTrigger: {
                    trigger: ".parallax-img",
                    start: "top bottom", 
                    end: "bottom top",
                    scrub: true
                }
            });

            // 4. Stagger reveal for Project Images
            const projects = document.querySelectorAll(".group");
            projects.forEach((project) => {
                gsap.fromTo(project, 
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1, 
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: project,
                            start: "top 85%"
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

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 backdrop-blur-md bg-zinc-50/80 border-b border-zinc-200/50">
<div className="flex items-center gap-3 relative z-10 max-w-7xl mx-auto w-full">
<div className="flex items-center gap-2">

<iconify-icon className="text-zinc-900" icon="solar:infinity-linear" width="28"></iconify-icon>
<span className="text-xl tracking-tighter font-semibold font-display uppercase font-dm-sans">Lumina</span>
</div>
<div className="ml-auto hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-tight" href="#work">Work</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-tight" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors uppercase tracking-tight" href="#about">About</a>
</div>
<button className="hidden md:flex ml-8 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all items-center gap-2 group">
                Start Project
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>

<button className="md:hidden ml-auto">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="relative z-10">

<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-12 pl-6">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
<div className="reveal-stagger">
<div className="flex items-center gap-2 border border-zinc-200 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur mb-4 md:mb-0 shadow-sm">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-xs font-semibold tracking-wide uppercase text-zinc-500">Available for 2025</span>
</div>
</div>
</div>

<div className="mb-16">
<h1 className="text-6xl md:text-[7.5rem] leading-[0.9] tracking-tighter font-display font-light text-zinc-900">
<div className="line-mask"><span className="reveal-text font-dm-sans">Designing</span></div><br/>
<div className="line-mask"><span className="reveal-text font-dm-sans">The</span></div>
<div className="line-mask"><span className="reveal-text italic font-serif text-zinc-400 font-bricolage">Future</span></div>
<div className="line-mask"><span className="reveal-text font-dm-sans">Interface.</span></div>
</h1>
<div className="mt-8 flex flex-col md:flex-row justify-between items-start gap-8">
<p className="text-lg md:text-xl text-zinc-500 max-w-lg leading-relaxed font-light reveal-para opacity-0 font-bricolage">
                        We blend aesthetic purity with robust engineering to create digital products that define categories.
                    </p>
<div className="flex gap-4 reveal-para opacity-0">
<button className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 transition-colors group">
<iconify-icon className="text-zinc-400 group-hover:text-zinc-900 transition-colors" icon="solar:arrow-right-down-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="relative w-full aspect-[16/10] md:aspect-[2.4/1] rounded-3xl overflow-hidden mb-24 group shadow-xl shadow-zinc-200/50">
<div className="absolute inset-0 z-10 bg-zinc-900/20 transition-colors duration-700 group-hover:bg-zinc-900/0"></div>

<img alt="Studio Architecture" className="parallax-img absolute inset-0 w-full h-[140%] -top-[20%] object-cover grayscale opacity-95 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c325f70-85f3-4523-86a3-48f4ccb4d83b_3840w.jpg" style={{willChange: 'transform'}}/>
<div className="absolute bottom-8 left-8 z-20">
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
<svg className="lucide lucide-map-pin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium tracking-tight uppercase">Headquarters — San Francisco, CA</span>
</div>
</div>
</div>

<div className="overflow-hidden border-y bg-white/50 w-full border-zinc-200 mb-32 pt-10 pb-10 backdrop-blur">
<div className="flex animate-marquee w-max gap-20 items-center">

<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:sony" width="64"></iconify-icon>

<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:grab" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:nikon" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:craftsman" width="64"></iconify-icon>
<iconify-icon className="text-zinc-300 hover:text-zinc-900 transition-colors cursor-pointer duration-500" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 items-start" id="services">
<div className="md:col-span-4 sticky top-32">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-indigo-600" icon="solar:stars-minimalistic-bold-duotone" width="24"></iconify-icon>
<span className="text-sm font-semibold tracking-wide uppercase text-zinc-500">Expertise</span>
</div>
<h2 className="text-4xl md:text-5xl tracking-tighter leading-tight font-display font-light text-zinc-900 mb-6 font-dm-sans">
                        Refining the <br/><span className="text-zinc-400">Complex</span>
</h2>
<p className="text-zinc-500 leading-relaxed max-w-xs">
                        We break down barriers between users and technology through systematic design.
                    </p>
</div>
<div className="md:col-span-8 space-y-16">

<div className="group border-t border-zinc-200 pt-8">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-mono text-zinc-400">01</span>
<div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-indigo-50 transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-indigo-600 transition-colors" icon="solar:screencast-2-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-display font-medium mb-3 font-dm-sans">Product Interface</h3>
<p className="text-zinc-500 leading-relaxed max-w-lg">
                            Crafting pixel-perfect designs that scale. We focus on interaction details, accessibility, and visual harmony to build trust.
                        </p>
</div>

<div className="group border-t border-zinc-200 pt-8">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-mono text-zinc-400">02</span>
<div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-rose-50 transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-rose-600 transition-colors" icon="solar:widget-add-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-display font-medium mb-3 font-dm-sans">Design Systems</h3>
<p className="text-zinc-500 leading-relaxed max-w-lg">
                            Creating living libraries of components. We ensure consistency across all touchpoints, reducing technical debt and speeding up development.
                        </p>
</div>

<div className="group border-t border-zinc-200 pt-8">
<div className="flex justify-between items-start mb-6">
<span className="text-sm font-mono text-zinc-400">03</span>
<div className="p-3 bg-zinc-100 rounded-2xl group-hover:bg-amber-50 transition-colors">
<iconify-icon className="text-zinc-600 group-hover:text-amber-600 transition-colors" icon="solar:rocket-2-bold-duotone" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-display font-medium mb-3 font-dm-sans">Growth Strategy</h3>
<p className="text-zinc-500 leading-relaxed max-w-lg">
                            Aligning design with business metrics. We analyze user behavior to optimize conversion paths and retention loops.
                        </p>
</div>
</div>
</div>

<div className="mb-32" id="work">
<div className="flex items-end justify-between mb-12">
<h2 className="text-4xl md:text-5xl tracking-tighter font-display font-light font-dm-sans">Selected Works</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-zinc-500 transition-colors" href="#">
                        View All
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-100">

<img alt="Project 1" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4b25312-946f-4bf6-a76c-cf31d034f277_1600w.jpg"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Fintech</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">2024</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl tracking-tight mb-1 font-display font-medium font-dm-sans">Nova Banking</h4>
<p className="text-zinc-500 text-sm">Mobile App Redesign</p>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer md:pt-24">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-100">
<img alt="Project 2" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aec92321-d532-4dba-962e-2d8e26bc84ba_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Automotive</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">2023</span>
</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h4 className="text-2xl tracking-tight mb-1 font-display font-medium font-dm-sans">Echo Electric</h4>
<p className="text-zinc-500 text-sm">Dashboard Interface</p>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-100">
<img alt="Project 3" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02796a13-3689-4ba4-b212-8e08b866188a_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Real Estate</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">2024</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl tracking-tight mb-1 font-display font-medium font-dm-sans">Urban Living</h4>
<p className="text-zinc-500 text-sm">Web Platform</p>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="group cursor-pointer md:pt-24">
<div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-zinc-100">
<img alt="Project 4" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddd4f1ba-97f4-4c8b-ae36-b03c136a4d97_1600w.jpg"/>
<div className="absolute bottom-6 left-6 flex gap-2">
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">Lifestyle</span>
<span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide">2023</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl tracking-tight mb-1 font-display font-medium font-dm-sans">Kinto Stream</h4>
<p className="text-zinc-500 text-sm">Media Player UI</p>
</div>
<button className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="bg-zinc-900 rounded-[2.5rem] p-8 md:p-16 mb-24 relative overflow-hidden">

<iconify-icon className="text-zinc-800 absolute top-8 right-8" icon="solar:quote-up-square-bold-duotone" width="120"></iconify-icon>
<div className="relative z-10 max-w-3xl">
<div className="flex gap-1 mb-8">
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-amber-400" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<h3 className="text-3xl md:text-5xl text-white font-display font-light leading-tight mb-10 tracking-tight font-dm-sans">
                        "They didn't just redesign our site; they reimagined our entire digital narrative. The attention to detail is unmatched."
                    </h3>
<div className="flex items-center gap-4">
<img alt="Client Portrait" className="w-14 h-14 rounded-full object-cover border-2 border-zinc-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-white font-medium text-lg">Marcus Chen</div>
<div className="text-zinc-500 text-sm">CTO at Nexus Systems</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center text-center mb-32 pt-16">
<iconify-icon className="text-zinc-900 mb-6" icon="solar:chat-round-dots-bold-duotone" width="64"></iconify-icon>
<h2 className="text-5xl md:text-7xl tracking-tighter font-display font-light mb-8 text-zinc-900 font-dm-sans">
                    Have an idea?
                </h2>
<a className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-zinc-900 rounded-full overflow-hidden transition-all hover:bg-zinc-800 hover:scale-105" href="mailto:hello@lumina.design">
<span className="relative flex items-center gap-3">
                        Let's Talk Business
                        <iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</span>
</a>
</div>
</main>

<footer className="border-t border-zinc-200 bg-zinc-50 relative">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:infinity-linear" width="24"></iconify-icon>
<span className="text-lg tracking-tighter font-semibold font-display uppercase text-zinc-400">Lumina</span>
</div>
<div className="flex gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-900 transition-colors" href="#">LinkedIn</a>
</div>
<div className="text-sm text-zinc-400">
                        © 2025 Lumina Inc.
                    </div>
</div>
</div>
</footer>
</div>



    </>
  );
}
