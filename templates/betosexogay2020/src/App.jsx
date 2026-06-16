import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
colors: {
gray: {
800: '#1f2937',
900: '#111827',
950: '#030712', // Deep dark
},
violet: {
500: '#8b5cf6',
600: '#7c3aed',
}
},
animation: {
'spin-slow': 'spin 8s linear infinite',
'marquee': 'marquee 25s linear infinite',
'marquee-vertical': 'marqueeVertical 20s linear infinite',
'beam': 'beam 2s linear infinite',
'sonar': 'sonar 2s cubic-bezier(0, 0, 0.2, 1) infinite',
'reveal': 'reveal 0.8s cubic-bezier(0.5, 0, 0, 1) both',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-100%)' },
},
marqueeVertical: {
'0%': { transform: 'translateY(0%)' },
'100%': { transform: 'translateY(-50%)' },
},
beam: {
'0%': { left: '-100%' },
'100%': { left: '100%' },
},
sonar: {
'0%': { transform: 'scale(0.9)', opacity: '0.8' },
'100%': { transform: 'scale(2)', opacity: '0' },
},
reveal: {
'0%': { opacity: '0', transform: 'translateY(20px) blur(10px)' },
'100%': { opacity: '1', transform: 'translateY(0) blur(0)' },
}
}
}
}
}



        // Reveal Text Animation Trigger
        document.addEventListener('DOMContentLoaded', () => {
            const splitText = () => {
                const elements = document.querySelectorAll('.clip-text-anim h1 span, .clip-text-anim p span');
                elements.forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.05}s`;
                });
            };
            splitText();

            // Flashlight Effect Logic
            const cards = document.querySelectorAll(".flashlight-card");
            
            document.addEventListener("mousemove", (e) => {
                cards.forEach((card) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                });
            });

            // Intersection Observer for Scroll Animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                    }
                });
            }, {
                threshold: 0.1
            });

            document.querySelectorAll('.animate-reveal').forEach(el => {
                el.style.animationPlayState = 'paused';
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-violet-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
</div>

<div className="perspective-container relative z-10 w-full max-w-[1400px] mx-auto">
<div className="flex flex-col xl:flex-row gap-10 items-center justify-center scale-[0.85] lg:scale-100 transform transition-transform duration-700">

<div className="iphone-frame relative w-[393px] h-[852px] bg-gray-950 rounded-[55px] border-[10px] border-[#1f1f1f] ring-1 ring-white/10 custom-shadow flex-shrink-0 animate-reveal" style={{animationDelay: '0.1s'}}>

<div className="absolute inset-0 rounded-[45px] border-[4px] border-black pointer-events-none z-50"></div>

<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 flex items-center justify-center gap-3">
<div className="w-2 h-2 rounded-full bg-green-500/50 animate-pulse"></div>
</div>

<div className="w-full h-full bg-gray-900 rounded-[45px] overflow-hidden flex flex-col relative pt-16">

<div className="absolute top-0 w-full h-14 px-8 flex justify-between items-end pb-2 text-xs font-medium text-white z-40">
<span>9:41</span>
<div className="flex gap-1.5">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="px-6 mb-6">
<h2 className="font-display text-4xl text-white/90 leading-tight tracking-tight mb-2">Connect<br/><span className="text-gray-500">Instantly.</span></h2>
</div>

<div className="flex-1 relative overflow-hidden mask-image-vertical">
<div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900 z-10 pointer-events-none"></div>
<div className="animate-[marqueeVertical_20s_linear_infinite] flex flex-col gap-4 px-5">

<div className="flashlight-card p-6 rounded-3xl border border-gray-800 bg-gray-800/20 backdrop-blur-sm group">
<div className="flashlight-border"></div>
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4 text-violet-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl mb-1 tracking-tight">E2E Encrypted</h3>
<p className="text-gray-400 text-sm leading-relaxed">Your conversations are yours. No one else can read them.</p>
</div>
<div className="flashlight-card p-6 rounded-3xl border border-gray-800 bg-gray-800/20 backdrop-blur-sm group">
<div className="flashlight-border"></div>
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl mb-1 tracking-tight">Lightning Fast</h3>
<p className="text-gray-400 text-sm leading-relaxed">Optimized for speed. Messages deliver in milliseconds.</p>
</div>
<div className="flashlight-card p-6 rounded-3xl border border-gray-800 bg-gray-800/20 backdrop-blur-sm group">
<div className="flashlight-border"></div>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl mb-1 tracking-tight">Offline Mode</h3>
<p className="text-gray-400 text-sm leading-relaxed">Draft messages anywhere. Auto-sync when you reconnect.</p>
</div>

<div className="flashlight-card p-6 rounded-3xl border border-gray-800 bg-gray-800/20 backdrop-blur-sm group">
<div className="flashlight-border"></div>
<div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4 text-violet-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl mb-1 tracking-tight">E2E Encrypted</h3>
<p className="text-gray-400 text-sm leading-relaxed">Your conversations are yours. No one else can read them.</p>
</div>
<div className="flashlight-card p-6 rounded-3xl border border-gray-800 bg-gray-800/20 backdrop-blur-sm group">
<div className="flashlight-border"></div>
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-display text-xl mb-1 tracking-tight">Lightning Fast</h3>
<p className="text-gray-400 text-sm leading-relaxed">Optimized for speed. Messages deliver in milliseconds.</p>
</div>
</div>
</div>

<div className="h-20 bg-gray-900/80 backdrop-blur-md border-t border-white/5 flex justify-around items-center px-4 pb-4">
<button className="text-violet-400 flex flex-col items-center gap-1">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</button>
<button className="text-gray-500 flex flex-col items-center gap-1">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
<button className="text-gray-500 flex flex-col items-center gap-1">
<iconify-icon icon="solar:user-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="iphone-frame relative w-[393px] h-[852px] bg-gray-950 rounded-[55px] border-[10px] border-[#1f1f1f] ring-1 ring-white/10 custom-shadow flex-shrink-0 z-20 scale-[1.02] animate-reveal" style={{animationDelay: '0.3s'}}>
<div className="absolute inset-0 rounded-[45px] border-[4px] border-black pointer-events-none z-50"></div>
<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50 overflow-hidden">
<div className="w-full h-full flex items-center justify-between px-3">
<div className="w-8 h-8 flex items-center justify-center"><iconify-icon className="text-gray-500 text-[10px]" icon="solar:face-scan-square-linear"></iconify-icon></div>
<div className="w-1 h-1 bg-green-500 rounded-full"></div>
</div>
</div>
<div className="w-full h-full bg-gray-900 rounded-[45px] overflow-hidden flex flex-col relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-violet-500/20 rounded-full animate-sonar pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-violet-500/30 rounded-full animate-sonar pointer-events-none" style={{animationDelay: '0.5s'}}></div>

<div className="flex-1 flex flex-col items-center justify-center px-6 relative z-10 pt-20">
<div className="mb-6 relative">
<div className="w-20 h-20 bg-gradient-to-tr from-violet-600 to-indigo-400 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/20 rotate-3">
<span className="font-display font-medium text-4xl text-white">A</span>
</div>
<div className="absolute -bottom-2 -right-2 bg-gray-800 px-2 py-1 rounded-full text-[10px] border border-gray-700 text-gray-300">v2.0</div>
</div>
<div className="text-center mb-10 clip-text-anim">
<h1 className="font-display font-light text-5xl text-white tracking-tight mb-4">
<span>Aura.</span>
</h1>
<p className="font-sans text-xl text-gray-400 leading-relaxed max-w-[280px] mx-auto">
<span>Clutter-free connection for the modern mind.</span>
</p>
</div>

<div className="w-full bg-gray-800/30 border border-white/5 rounded-3xl p-4 backdrop-blur-md mb-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 pointer-events-none"></div>

<div className="space-y-3">
<div className="flex gap-3 items-end">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
<img alt="User" className="w-full h-full object-cover opacity-80" src="https://i.pravatar.cc/100?img=33"/>
</div>
<div className="bg-gray-800 px-4 py-2.5 rounded-2xl rounded-bl-none border border-gray-700/50">
<p className="text-sm text-gray-200">Where are we meeting?</p>
</div>
</div>
<div className="flex gap-3 items-end flex-row-reverse">
<div className="bg-violet-600 px-4 py-2.5 rounded-2xl rounded-br-none shadow-lg shadow-violet-900/20">
<p className="text-sm text-white font-medium">At the minimalist cafe. ☕️</p>
</div>
</div>
<div className="flex gap-3 items-end">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
<div className="w-full h-full flex items-center justify-center text-xs text-gray-400">...</div>
</div>
<div className="bg-gray-800/50 px-3 py-2 rounded-2xl rounded-bl-none border border-gray-700/30 w-16 h-8 flex items-center gap-1">
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
</div>
</div>
</div>
</div>

<button className="border-beam-box relative w-full py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium text-lg tracking-tight hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group">
<span>Get Early Access</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="iphone-frame relative w-[393px] h-[852px] bg-gray-950 rounded-[55px] border-[10px] border-[#1f1f1f] ring-1 ring-white/10 custom-shadow flex-shrink-0 animate-reveal" style={{animationDelay: '0.5s'}}>
<div className="absolute inset-0 rounded-[45px] border-[4px] border-black pointer-events-none z-50"></div>
<div className="absolute top-7 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50"></div>
<div className="w-full h-full bg-gray-900 rounded-[45px] overflow-hidden flex flex-col relative pt-16">

<div className="absolute top-0 w-full h-14 px-8 flex justify-between items-end pb-2 text-xs font-medium text-white z-40">
<span>9:41</span>
<div className="flex gap-1.5">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>
<div className="px-6 flex flex-col h-full pb-8">
<div className="flex items-center justify-between mb-8">
<h2 className="font-display text-4xl text-white font-light tracking-tight">Upgrade<br/>Workspace</h2>
<div className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
</div>

<div className="flashlight-card relative bg-gradient-to-br from-violet-900/20 to-gray-900 rounded-[32px] p-6 border border-violet-500/20 mb-6 flex-1 max-h-[420px] flex flex-col justify-between group">
<div className="flashlight-border"></div>
<div>
<div className="flex justify-between items-start mb-4">
<span className="bg-violet-500/20 text-violet-300 text-xs px-3 py-1 rounded-full border border-violet-500/20 font-medium">MOST POPULAR</span>
<iconify-icon className="text-violet-500" icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-display font-medium mb-1">$12<span className="text-lg text-gray-500 font-normal">/mo</span></h3>
<p className="text-gray-400 text-sm mb-6">For power users who need clarity.</p>
<ul className="space-y-4">
<li className="flex gap-3 text-gray-300 text-sm items-center">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                                        Unlimited History
                                    </li>
<li className="flex gap-3 text-gray-300 text-sm items-center">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                                        AI Summarization
                                    </li>
<li className="flex gap-3 text-gray-300 text-sm items-center">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                                        Priority Support
                                    </li>
<li className="flex gap-3 text-gray-300 text-sm items-center">
<iconify-icon className="text-violet-400" icon="solar:check-circle-linear"></iconify-icon>
                                        Custom Themes
                                    </li>
</ul>
</div>
<button className="w-full py-3 bg-violet-600 rounded-2xl text-white font-medium text-sm mt-6 shadow-lg shadow-violet-900/30 hover:bg-violet-500 transition-colors">
                                Subscribe Now
                            </button>
</div>

<div className="mt-auto">
<p className="text-xs text-center text-gray-500 mb-4 uppercase tracking-widest">Trusted by teams at</p>
<div className="relative w-full overflow-hidden mask-image-horizontal h-10">
<div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
<div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
<div className="flex gap-8 items-center animate-marquee whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="logos:google" width="70"></iconify-icon>
<iconify-icon icon="logos:stripe" width="50"></iconify-icon>
<iconify-icon icon="logos:vercel" width="70"></iconify-icon>
<iconify-icon icon="logos:microsoft" width="70"></iconify-icon>
<iconify-icon icon="logos:openai" width="70"></iconify-icon>

<iconify-icon icon="logos:google" width="70"></iconify-icon>
<iconify-icon icon="logos:stripe" width="50"></iconify-icon>
<iconify-icon icon="logos:vercel" width="70"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
