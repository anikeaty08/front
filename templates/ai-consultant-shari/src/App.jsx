import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
zinc: {
850: '#1f1f22',
950: '#09090b',
}
},
animation: {
marquee: 'marquee 25s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Helper to split text into spans for reveal
            const splitTextElements = document.querySelectorAll(".reveal-text");
            
            splitTextElements.forEach((element) => {
                // If element has child nodes (like nested spans), process text nodes only or just wrap content if it's simple
                // For simplicity in this structure, we'll assume text content mainly
                if (element.children.length === 0) {
                    const text = element.innerText;
                    const words = text.split(" ");
                    element.innerHTML = words.map(word => 
                        `<span class="word-wrapper"><span class="word-inner">${word}&nbsp;</span></span>`
                    ).join("");
                } else {
                    // Handle nested spans like the philosophy section manually if needed, 
                    // or just animate the block itself if splitting is too complex for mixed content
                    // Here we wrap the whole element content if it's complex
                    const wrapper = document.createElement("span");
                    wrapper.className = "word-wrapper";
                    const inner = document.createElement("span");
                    inner.className = "word-inner";
                    inner.innerHTML = element.innerHTML;
                    element.innerHTML = "";
                    wrapper.appendChild(inner);
                    element.appendChild(wrapper);
                }
            });

            // Animate Words
            const reveals = document.querySelectorAll(".reveal-text");
            reveals.forEach((section) => {
                const words = section.querySelectorAll(".word-inner");
                gsap.to(words, {
                    y: 0,
                    duration: 1,
                    stagger: 0.05,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: section,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>

<nav className="fixed top-0 w-full z-50 bg-white/50 border-b border-zinc-100/50 backdrop-blur-[2px]">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-zinc-900" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tighter">Shari</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-black transition-colors" href="#">Services</a>
<a className="hover:text-black transition-colors" href="#">Agents</a>
<a className="hover:text-black transition-colors" href="#">Case Studies</a>
<a className="hover:text-black transition-colors" href="#">Philosophy</a>
</div>
<div className="flex items-center gap-4 text-xs font-medium">
<span className="text-zinc-400 hidden sm:block">EN</span>
<button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors">
                    Start Audit
                </button>
</div>
</div>
</nav>

<header className="relative pt-24 pb-6 px-4 md:px-6 max-w-7xl mx-auto">
<div className="relative w-full h-[85vh] rounded-[2rem] overflow-hidden group">

<img alt="AI Interface" className="absolute inset-0 w-full h-full object-cover brightness-[0.6] scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1d35ae4-0a86-443d-962c-2467763eb5be_3840w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

<div className="relative h-full flex flex-col justify-between p-8 md:p-12 text-white">

<div className="flex justify-between items-start">
<p className="text-xs font-medium tracking-wide opacity-80 flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                        SYSTEMS OPERATIONAL
                    </p>
<div className="flex gap-2">
<span className="border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium">Neural Networks</span>
</div>
</div>

<div className="mt-auto mb-12">
<h1 className="reveal-text text-6xl md:text-8xl font-light tracking-tight leading-[0.9]">
                        Intelligent Scale
                    </h1>
<h1 className="font-serif italic font-normal text-zinc-200 text-6xl md:text-8xl mt-2 tracking-tight">
<span className="reveal-text">—Deployed</span>
</h1>
</div>

<div className="border-gradient rounded-full">
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-0 bg-black/40 backdrop-blur-xl rounded-full p-2 md:pl-8 items-center relative z-10">
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Client</p>
<p className="text-sm font-medium">SpaceX</p>
</div>
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Type</p>
<p className="text-sm font-medium">RAG Pipeline</p>
</div>
<div className="border-r border-white/10 px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Stack</p>
<p className="text-sm font-medium">OpenAI / Pinecone</p>
</div>
<div className="px-4 py-2 hidden md:block">
<p className="text-zinc-400 text-xs mb-1">Efficiency Gain</p>
<p className="text-sm font-medium text-green-400">+450% Speed</p>
</div>
<button className="bg-white text-black h-12 rounded-full flex items-center justify-between px-6 hover:bg-zinc-200 transition-colors w-full md:w-auto">
<span className="text-sm font-medium">View Case</span>
<iconify-icon className="ml-2 text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-3">
<h3 className="reveal-text font-serif italic text-3xl text-zinc-400">The Philosophy</h3>
</div>
<div className="md:col-span-9">
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight mb-8">
<span className="reveal-text block">Architecting the digital brain</span>
<span className="reveal-text block">for your enterprise, whether</span>
<span className="reveal-text block">it's a <span className="font-serif italic text-zinc-500">precision tool</span> or a</span>
<span className="reveal-text block">autonomous <span className="font-serif italic">agent swarm</span>.</span>
</h2>
<div className="flex flex-col md:flex-row gap-8 items-start justify-between">
<p className="text-zinc-500 text-lg max-w-xl leading-relaxed font-light">
                    With a commitment to code quality, a wealth of ML experience, and a security-first approach, we assist you in deploying and securing the AI infrastructure that best fits your business goals.
                </p>
<button className="group flex items-center gap-3 border border-zinc-200 rounded-full pl-6 pr-2 py-2 hover:bg-zinc-50 transition-colors">
<span className="text-sm font-medium">Our Process</span>
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center text-white group-hover:rotate-45 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-32">
<div className="flex justify-center mb-12">
<h3 className="reveal-text font-serif italic text-4xl text-zinc-900">Case Study</h3>
</div>
<div className="flex justify-center mb-8">
<div className="flex gap-8 text-sm font-medium">
<button className="bg-zinc-900 text-white px-5 py-2 rounded-full">Overview</button>
<button className="text-zinc-400 hover:text-black transition-colors">Architecture</button>
<button className="text-zinc-400 hover:text-black transition-colors">Stack</button>
</div>
</div>
<div className="bg-zinc-50 rounded-[2rem] p-4 md:p-6 relative overflow-hidden">

<div className="relative h-[600px] rounded-3xl overflow-hidden mb-6">
<img alt="Server Room" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e60d0e2e-ac92-4e83-9d7d-1d6c445544b0_1600w.webp"/>
<div className="absolute top-6 right-6">
<span className="bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-medium border border-white/10">Project: Zenith</span>
</div>

<div className="absolute bottom-6 right-6 flex gap-2">
<button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors border border-white/10">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:bg-zinc-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 pb-4">
<div className="md:col-span-3">
<div className="border border-zinc-200 bg-white p-4 rounded-xl h-40 flex items-center justify-center">
<iconify-icon className="text-6xl text-zinc-300" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
<div className="md:col-span-4 flex flex-col justify-center">
<h4 className="reveal-text font-medium text-lg mb-2">Explore every layer</h4>
<p className="text-zinc-500 text-sm leading-relaxed">
                        This system is constructed using premium open-source models like Llama 3 and vector databases, offering a combination of privacy and intelligence.
                    </p>
</div>
<div className="md:col-span-5 flex items-center justify-between border-l border-zinc-200 pl-8">
<div>
<h5 className="reveal-text font-serif text-3xl text-zinc-900">GPT-4o</h5>
<p className="text-xs text-zinc-400 mt-1">Core Model</p>
</div>
<div>
<h5 className="reveal-text font-serif text-3xl text-zinc-900">Python</h5>
<p className="text-xs text-zinc-400 mt-1">Backend</p>
</div>
<div>
<h5 className="reveal-text font-serif text-3xl text-zinc-900">99.9<span className="text-base">%</span></h5>
<p className="text-xs text-zinc-400 mt-1">Accuracy</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
<div className="md:col-span-4">
<div className="flex items-baseline gap-4 mb-4">
<span className="font-serif italic text-2xl text-zinc-300">1.</span>
<h3 className="text-4xl font-serif text-zinc-900 leading-tight">
                        Fine-Tuned <br/><span className="italic text-zinc-500">LLMs</span>
</h3>
</div>
</div>
<div className="md:col-span-4">
<div className="h-64 rounded-2xl overflow-hidden relative border-gradient">
<img alt="AI Model" className="w-full h-full object-cover relative z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2db187b3-b1e0-4536-8294-d5331a4bc005_800w.webp"/>
<div className="absolute inset-0 bg-black/20 z-10 pointer-events-none"></div>
</div>
</div>
<div className="md:col-span-4 pl-4">
<p className="text-zinc-500 text-lg font-light leading-relaxed mb-8">
                    We train models on your proprietary data, giving the AI a unique understanding of your business logic while keeping your intellectual property secure.
                </p>
</div>
</div>

<div className="border-t border-zinc-100">
<div className="group py-8 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors border-b border-zinc-100 px-4">
<div className="flex items-center gap-8">
<span className="text-sm font-medium text-zinc-300 w-8">2</span>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:database-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-zinc-900 italic group-hover:not-italic transition-all">Vector <span className="not-italic group-hover:italic font-normal">Embeddings</span></h3>
</div>
<div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center group-hover:border-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group py-8 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors border-b border-zinc-100 px-4">
<div className="flex items-center gap-8">
<span className="text-sm font-medium text-zinc-300 w-8">3</span>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-zinc-900 italic group-hover:not-italic transition-all">Self-Healing <span className="not-italic group-hover:italic font-normal">Workflows</span></h3>
</div>
<div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center group-hover:border-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
<div className="group py-8 flex items-center justify-between cursor-pointer hover:bg-zinc-50 transition-colors border-b border-zinc-100 px-4">
<div className="flex items-center gap-8">
<span className="text-sm font-medium text-zinc-300 w-8">4</span>
<div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:graph-up-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-zinc-900 italic group-hover:not-italic transition-all">Predictive <span className="not-italic group-hover:italic font-normal">Analytics</span></h3>
</div>
<div className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center group-hover:border-zinc-900 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50 py-12 overflow-hidden">
<div className="flex w-full overflow-hidden">
<div className="flex animate-marquee whitespace-nowrap gap-16 md:gap-32 items-center min-w-full">

<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:nasa" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:spacex" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:uber" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:visa" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:openai" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:notion" width="40"></iconify-icon>

<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:nasa" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:spacex" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:uber" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:visa" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:stripe" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:openai" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:vercel" width="40"></iconify-icon>
<iconify-icon className="text-zinc-400 opacity-60 hover:opacity-100 transition-opacity" icon="simple-icons:notion" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-32">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h3 className="reveal-text font-serif italic text-4xl text-zinc-900 mb-6">Deployments</h3>
<p className="text-zinc-500 font-light text-lg">
                From simple customer support bots to complex, autonomous agent swarms, explore systems that are not just scripts, but cognitive architectures that learn and adapt.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group h-[400px] rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Cybersecurity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8e75ffd-3780-45d5-a852-838b5e33ede8_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs uppercase tracking-widest text-zinc-300 mb-2">Automated Defense</p>
<h4 className="font-serif text-2xl italic">Sentinel Security</h4>
</div>
</div>

<div className="relative group h-[400px] rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Chipset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f870fa0-1fa4-4845-bf04-6732d79259fa_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="text-xs uppercase tracking-widest text-zinc-300 mb-2">Hardware Optimization</p>
<h4 className="font-serif text-2xl italic">Silicon Logic</h4>
</div>
</div>

<div className="md:col-span-2 relative group h-[500px] rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Enterprise Office" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/63b1df76-02ad-47fd-b343-956b1e4d3578_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>

<div className="absolute bottom-0 left-0 p-12 w-full md:w-1/2">
<h4 className="font-serif text-4xl text-white italic mb-4">Enterprise Orchestration</h4>
<p className="text-zinc-300 font-light mb-8">A centralized brain for decentralized teams. Connecting Slack, Jira, and GitHub into a single stream of consciousness.</p>
<div className="border-gradient rounded-full inline-block">
<div className="flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full p-1 pr-2 w-max gap-4 relative z-10">
<span className="text-white text-xs pl-4">View Case Study</span>
<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-white rounded-t-[3rem] overflow-hidden relative">
<div className="max-w-7xl mx-auto px-6 py-24 relative z-10">

<div className="flex justify-between items-center border-b border-white/10 pb-8 mb-16">
<div className="flex items-center gap-2">
<iconify-icon className="text-2xl text-white" icon="solar:code-circle-linear"></iconify-icon>
<span className="text-lg font-medium tracking-tighter italic font-serif">Shari</span>
</div>
<div className="flex gap-8 text-xs text-zinc-500 uppercase tracking-widest">
<span>Quality</span>
<span className="text-zinc-700">//</span>
<span>Security</span>
<span className="text-zinc-700">//</span>
<span>Scalability</span>
</div>
<button className="text-sm font-medium hover:text-zinc-300">Menu</button>
</div>

<div className="text-center mb-24">
<p className="font-serif italic text-3xl mb-4 text-zinc-300">/ Get in Touch</p>
<a className="reveal-text text-5xl md:text-8xl font-light tracking-tighter hover:text-zinc-300 transition-colors inline-block" href="mailto:hello@shari.ai">
                    hello@shari.ai
                </a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-zinc-500">
<div>
<p className="mb-1 text-white">All rights reserved.</p>
<p>©2024 Shari Consultancy</p>
</div>
<div className="text-center">
<p>4140 Parker Rd. Allentown, New York 31134</p>
<p>+62 (899) 575 3954</p>
</div>
<div className="flex justify-end gap-6">
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
