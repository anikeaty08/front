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
},
colors: {
brand: {
red: '#F43F5E', // Rose-500 similar
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">

<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen grayscale contrast-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c455494-eee9-40e3-9575-8d2fea84d21a_1600w.webp"/>

<div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
</div>

<div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
<img alt="Sculpture" className="h-[80vh] w-auto object-cover opacity-80 mix-blend-luminosity brightness-75 mask-image-gradient animate-drift" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e434c2e5-ff56-4eac-a242-96c968edc3a5_1600w.webp" style={{WebkitMaskImage: 'radial-gradient(circle, black 30%, transparent 70%)', maskImage: 'radial-gradient(circle, black 30%, transparent 70%)'}}/>
</div>

<nav className="lg:px-12 flex w-full z-50 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-3xl text-white" icon="solar:infinity-linear"></iconify-icon>
<span className="text-xl font-semibold tracking-tight text-white">Aether<span className="font-light text-neutral-400">Labs</span></span>
</div>
<div className="hidden sm:block w-px h-8 bg-white/20 mx-2"></div>
<span className="hidden sm:block uppercase leading-tight text-xs font-medium text-neutral-400 tracking-wide max-w-[100px]" style={{}}>Global DigitalInnovation Hub</span>
</div>

<div className="hidden md:flex items-center bg-neutral-900/60 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 absolute left-1/2 -translate-x-1/2">
<a className="px-5 py-2 text-sm font-medium text-white hover:text-rose-400 transition-colors" href="#">Philosophy</a>
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors text-sm font-medium text-neutral-400 pt-2 pr-5 pb-2 pl-5" href="#" style={{}}>Pricing</a>
<a className="px-5 py-2 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#">Insights</a>
</div>
<div className="">
<a className="glass-button group inline-flex items-center gap-2 no-underline transition-all duration-300 hover:scale-[0.98] active:scale-95 rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative" href="#" style={{-Angle-1: '-75deg', -Angle-2: '-45deg'}}>
<span className="button-text relative z-20 text-sm font-medium text-white tracking-wide transition-all duration-300">Start Project</span>
<iconify-icon className="relative z-20 text-lg text-white transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" icon="solar:arrow-right-up-linear"></iconify-icon>
<div className="button-shine pointer-events-none absolute inset-0 rounded-full z-10"></div>
<style>
        @property --angle-1 { syntax: "<angle>"; inherits: false; initial-value: -75deg; }
        @property --angle-2 { syntax: "<angle>"; inherits: false; initial-value: -45deg; }
        
        .glass-button {
            background: linear-gradient(-75deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
            box-shadow: 
                inset 0 1px 1px rgba(255, 255, 255, 0.15), 
                inset 0 -1px 1px rgba(255, 255, 255, 0.05), 
                0 4px 12px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(12px);
            isolation: isolate;
        }
        
        .glass-button::after {
            content: '';
            position: absolute;
            inset: -1px;
            border-radius: 9999px;
            padding: 1px;
            background: conic-gradient(from var(--angle-1) at 50% 50%, 
                rgba(255, 255, 255, 0.1), 
                rgba(255, 255, 255, 0.4) 10%, 
                rgba(255, 255, 255, 0) 20%, 
                rgba(255, 255, 255, 0) 80%, 
                rgba(255, 255, 255, 0.4) 90%, 
                rgba(255, 255, 255, 0.1)
            );
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            transition: --angle-1 0.5s ease;
        }
        
        .glass-button:hover::after {
            --angle-1: -125deg;
        }
        
        .button-shine {
            background: linear-gradient(var(--angle-2), 
                rgba(255, 255, 255, 0) 0%, 
                rgba(255, 255, 255, 0.2) 40%, 
                rgba(255, 255, 255, 0.3) 50%, 
                rgba(255, 255, 255, 0) 60%
            );
            mix-blend-mode: overlay;
            background-size: 200% 200%;
            background-position: 0% 50%;
            transition: background-position 0.5s ease, --angle-2 0.5s ease;
        }
        
        .glass-button:hover .button-shine {
            background-position: 100% 50%;
        }
        
        .button-text {
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
    </style>
</a>
</div>
</nav>

<main className="flex-grow flex flex-col lg:flex-row lg:px-12 lg:pt-0 z-10 w-full h-full max-w-[1800px] mr-auto ml-auto pt-10 pr-6 pl-6 relative">

<div className="w-full lg:w-5/12 flex flex-col justify-center h-full pb-20 lg:pb-0">
<span className="text-neutral-500 font-medium tracking-wide uppercase text-sm mb-6 flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:layers-minimalistic-linear"></iconify-icon> Strategy &amp; Design
            </span>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8" style={{}}><br/> Building Digital Products For <br/> <span className="text-neutral-400">Next-Gen Brands.</span></h1>
<div className="mt-8">
<a className="inline-flex items-center justify-center hover:bg-neutral-200 transition-colors min-w-[200px] text-base font-medium text-black bg-white rounded-md pt-4 pr-8 pb-4 pl-8" href="#" style={{}}>Talk to Strategist</a>
</div>
</div>

<div className="hidden lg:block lg:w-4/12"></div>

<div className="w-full lg:w-3/12 flex flex-col justify-center gap-6 pb-20 lg:pb-0 pl-0 lg:pl-10">

<div className="bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-xl p-0 overflow-hidden">
<div className="px-5 py-4 border-b border-white/10 bg-white/5">
<span className="text-xs font-medium tracking-widest uppercase text-neutral-400">Core Services</span>
</div>
<div className="flex flex-col">

<div className="group flex items-start gap-4 p-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-neutral-400 group-hover:border-rose-500 group-hover:text-rose-500 transition-colors">
                            A
                        </div>
<div className="flex flex-col">
<h3 className="group-hover:text-rose-400 transition-colors text-base font-medium text-white" style={{}}>Web &amp; Mobile</h3>
<span className="text-sm text-neutral-500" style={{}}>Complete user journey end-to-end.</span>
</div>
</div>

<div className="group flex items-start gap-4 p-5 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-neutral-400 group-hover:border-rose-500 group-hover:text-rose-500 transition-colors">
                            S
                        </div>
<div className="flex flex-col">
<h3 className="text-base font-medium text-white group-hover:text-rose-400 transition-colors">System Audit</h3>
<span className="text-sm text-neutral-500">Infrastructure Analysis</span>
</div>
</div>

<div className="group flex items-start gap-4 p-5 hover:bg-white/5 transition-colors cursor-pointer">
<div className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs text-neutral-400 group-hover:border-rose-500 group-hover:text-rose-500 transition-colors">
                            P
                        </div>
<div className="flex flex-col">
<h3 className="text-base font-medium text-white group-hover:text-rose-400 transition-colors">Pivot Strategy</h3>
<span className="text-sm text-neutral-500">Market Realignment</span>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/30 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden group cursor-pointer">
<div className="px-5 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
<span className="uppercase text-xs font-medium text-neutral-400 tracking-widest" style={{}}>Selected WorK</span>
</div>
<div className="p-4 relative">
<div className="relative rounded-lg overflow-hidden aspect-video bg-neutral-800 border border-white/5">
<img alt="Work" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1f8ef7db-1222-488f-99c0-0d165b05065b_800w.webp" style={{}}/>

<div className="absolute inset-0 flex items-center justify-center bg-black/40">
<span className="text-xs font-semibold tracking-wider text-white uppercase border border-white/30 px-3 py-1 rounded backdrop-blur-sm">
                                Coming Soon
                            </span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="z-20 lg:px-12 w-full mt-auto pt-6 pr-6 pb-12 pl-6 relative">
<div className="flex flex-wrap items-center justify-between gap-8 md:gap-20 border-t border-white/5 pt-8">

<div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" height="24" icon="simple-icons:vercel" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Vercel</span>
</div>

<div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" height="24" icon="simple-icons:notion" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Notion</span>
</div>

<div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" height="24" icon="simple-icons:openai" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">OpenAI</span>
</div>

<div className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300">
<iconify-icon className="text-white" height="24" icon="simple-icons:linear" width="24"></iconify-icon>
<span className="text-lg font-medium text-white tracking-tight">Linear</span>
</div>
</div>
</footer>

    </>
  );
}
