import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 brightness-75 opacity-60" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-xl border-white/10 bg-black/60">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<span className="text-lg font-medium tracking-tighter">SHAHSHI.AI</span>
<a className="px-5 py-2 text-xs font-medium bg-[#DF0D85] rounded-full hover:bg-[#c20b74] transition-colors shadow-[0_0_15px_rgba(223,13,133,0.3)] text-white" href="mailto:dgupta@shashigroup.com">
          Request Demo
        </a>
</div>
</nav>

<section className="flex flex-col overflow-hidden text-center pt-32 pr-6 pb-20 pl-6 relative shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] blur-none items-center lg:pt-48 lg:pb-24">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#DF0D85]/15 rounded-full blur-[120px] -z-10 pointer-events-none">
</div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm bg-white/5 border-white/10">
<div className="w-2 h-2 rounded-full bg-[#DF0D85] animate-pulse"></div>
<span className="text-xs font-medium text-zinc-300">
          Platform v2.0 Live
        </span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-semibold text-zinc-100 tracking-tight max-w-4xl mr-auto ml-auto">
    Hospitality Reimagined:
    <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-500 from-white">
          The Agentic AI Era
        </span>
</h1>
<p className="md:text-lg leading-relaxed text-base text-zinc-400 max-w-2xl mt-6 mr-auto ml-auto">
    Orchestrate, personalize, and elevate every guest interaction with an
    AI-native intelligent layer that sits above your operational stack.
  </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="px-7 py-3.5 text-sm font-medium bg-[#DF0D85] rounded-full hover:shadow-[0_0_25px_rgba(223,13,133,0.5)] transition-all w-full sm:w-auto text-white" href="mailto:dgupta@shashigroup.com">
      Request a Demo
    </a>
<a className="px-7 py-3.5 text-sm font-medium border rounded-full transition-all w-full sm:w-auto bg-white/5 border-white/10 text-white hover:bg-white/10" href="#architecture">
      View Architecture
    </a>
</div>

<div className="mt-20 w-full max-w-5xl mx-auto relative group perspective-1000">
<div className="absolute inset-0 bg-gradient-to-b from-[#DF0D85]/20 to-transparent blur-3xl rounded-[2.5rem] -z-10">
</div>
</div>
</section>

<section className="z-10 border-t py-12 relative bg-zinc-950 border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-8">
<p className="uppercase text-xs font-semibold text-zinc-500 tracking-widest">
            Trusted by teams at
          </p>
</div>

<div className="overflow-hidden relative" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>

<div className="ticker-track flex w-max items-center">

<div className="flex gap-16 shrink-0 items-center pr-16">
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  TechFlow
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  Nexus Labs
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  DataSync
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  VisionCorp
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  CloudBase
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  InnovateTech
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  FlowState
                </span>
</div>
</div>

<div className="flex gap-16 shrink-0 items-center pr-16">
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  TechFlow
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  Nexus Labs
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  DataSync
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  VisionCorp
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  CloudBase
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-semibold tracking-tighter">
                  InnovateTech
                </span>
</div>
<div className="flex items-center gap-3 transition-colors duration-300 text-zinc-400 hover:text-white">
<span className="text-lg font-medium tracking-tighter">
                  FlowState
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-center mb-16 text-zinc-100 bg-zinc-900">Transforming the Tenets of Hospitality</h2>
<div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 gap-x-8 gap-y-8 items-center">

<div className="lg:p-10 overflow-hidden group bg-black border-white/20 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="text-xs font-semibold text-zinc-500 mb-8 uppercase tracking-widest">
              Traditional State
            </div>
<ul className="space-y-8">
<li className="flex gap-5 group-hover:opacity-60 transition-opacity opacity-40 gap-x-5 gap-y-5 items-start">
<iconify-icon className="text-2xl mt-1 text-zinc-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<div className="">
<div className="font-medium text-base mb-1 text-white">
                    Service
                  </div>
<div className="text-sm text-zinc-500">
                    High Touch, Manual Effort
                  </div>
</div>
</li>
<li className="flex items-start gap-5 opacity-40 group-hover:opacity-60 transition-opacity">
<iconify-icon className="text-2xl mt-1 text-zinc-400" icon="solar:star-linear"></iconify-icon>
<div className="">
<div className="font-medium text-base mb-1 text-white">
                    Loyalty
                  </div>
<div className="text-sm text-zinc-500">
                    Point-Based, Delayed Value
                  </div>
</div>
</li>
<li className="flex items-start gap-5 opacity-40 group-hover:opacity-60 transition-opacity">
<iconify-icon className="text-2xl mt-1 text-zinc-400" icon="solar:buildings-linear"></iconify-icon>
<div className="">
<div className="font-medium text-base mb-1 text-white">
                    Product
                  </div>
<div className="text-sm text-zinc-500">
                    Physical Real Estate Only
                  </div>
</div>
</li>
</ul>
</div>

<div className="hidden lg:flex flex-col items-center justify-center text-white/20">
<iconify-icon className="text-3xl text-[#DF0D85]/50" height="30" icon="solar:arrow-right-linear" style={{color: 'rgb(223, 13, 133)'}} width="30"></iconify-icon>
<div className="mt-6 flex flex-col items-center">
<div className="text-xs font-semibold tracking-widest uppercase text-zinc-500 mb-2">
                Powered By
              </div>
<div className="relative px-4 py-2 rounded-full border border-[#DF0D85]/30 bg-[#DF0D85]/10 text-xs font-medium shadow-[0_0_20px_rgba(223,13,133,0.15)] backdrop-blur-sm whitespace-nowrap flex items-center gap-2 transition-transform hover:scale-105 text-white">
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] animate-pulse shadow-[0_0_5px_rgba(223,13,133,0.8)]"></span>
                AI Hyper-Personalization
              </div>
</div>
</div>

<div className="bg-gradient-to-br from-[#DF0D85]/10 border border-[#DF0D85]/30 rounded-2xl p-8 lg:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(223,13,133,0.05)] via-black to-black">
<div className="absolute top-0 right-0 w-48 h-48 bg-[#DF0D85]/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="text-xs font-semibold text-[#DF0D85] mb-8 uppercase tracking-widest">
              Future State (shashi.ai)
            </div>
<ul className="space-y-8 relative z-10">
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="">
<div className="font-medium text-base mb-1 text-white">
                    Digital Services
                  </div>
<div className="text-sm text-zinc-300">
                    Autonomous, AI-Driven Operations
                  </div>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="">
<div className="font-medium text-base mb-1 text-white">
                    Digital Currency
                  </div>
<div className="text-sm text-zinc-300">
                    Instant Real-Time Cash-Back
                  </div>
</div>
</li>
<li className="flex items-start gap-5">
<div className="w-8 h-8 rounded-lg bg-[#DF0D85]/10 border border-[#DF0D85]/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#DF0D85]" icon="solar:devices-linear"></iconify-icon>
</div>
<div>
<div className="font-medium text-base mb-1 text-white">
                    Digital Product
                  </div>
<div className="text-sm text-zinc-300">
                    Hyper-Personalized Ecosystem
                  </div>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="text-zinc-800 bg-zinc-900 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16 lg:mb-24">
<h2 className="md:text-4xl text-3xl font-semibold tracking-tight text-zinc-100">The Autonomous Ecosystem</h2>
<p className="mt-4 text-sm md:text-base max-w-2xl mx-auto text-zinc-400">
            A seamless orchestration of digital touchpoints powered by our
            intelligent agentic layer.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-zinc-950/50 border-white/5 hover:bg-zinc-900/50">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-black border-white/10">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-zinc-300" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium text-white tracking-tight mb-3">Frictionless Booking</h3>
<p className="text-sm leading-relaxed text-zinc-400">
              3-click reservations natively integrated with Apple and Google
              Pay. Enhanced with AR/VR room previews and AI-driven availability
              recommendations.
            </p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-zinc-950/50 border-white/5 hover:bg-zinc-900/50">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-black border-white/10">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-zinc-300" icon="solar:key-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-white">
              Autonomous Check-in
            </h3>
<p className="leading-relaxed text-sm text-zinc-400">Bypass the front desk entirely. Secure mobile keys, dynamic passcode access, and intelligent self-service kiosks.</p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-zinc-950/50 border-white/5 hover:bg-zinc-900/50">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-black border-white/10">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-zinc-300" icon="solar:bed-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-white">
              In-Room Digital Product
            </h3>
<p className="text-sm leading-relaxed text-zinc-400">
              Deep IoT orchestration for HVAC and circadian lighting. shashi TV
              with a bespoke Netflix-style UX, complemented by an AI "Sleep
              Concierge".
            </p>
</div>

<div className="group rounded-2xl overflow-hidden relative border min-h-[300px] lg:min-h-full border-white/5">
<img alt="Smart Device Integration" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t to-transparent absolute top-0 right-0 bottom-0 left-0 from-black via-black/40"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="w-10 h-10 rounded-xl backdrop-blur-md border flex items-center justify-center mb-4 bg-black/60 border-white/10">
<iconify-icon className="text-xl text-white" icon="solar:augmented-reality-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-2 tracking-tight text-white">
                Immersive Environments
              </h3>
<p className="text-xs text-zinc-300">
                Bridging the physical and digital gap natively within the space.
              </p>
</div>
</div>

<div className="group md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 border rounded-2xl pt-6 pr-6 pb-6 pl-6 hover:bg-zinc-900/50 bg-zinc-950/50 border-white/5">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-black border-white/10">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-zinc-300" icon="solar:smart-speaker-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-white">
              One-Click Service
            </h3>
<p className="text-sm leading-relaxed text-zinc-400">
              Unified request routing for dynamic housekeeping and maintenance.
              Seamless DoorDash and Uber integration with autonomous delivery.
            </p>
</div>

<div className="group border rounded-2xl p-6 md:p-8 hover:border-[#DF0D85]/30 transition-all duration-500 bg-zinc-950/50 border-white/5 hover:bg-zinc-900/50">
<div className="w-10 h-10 rounded-xl border flex items-center justify-center mb-6 group-hover:border-[#DF0D85]/50 group-hover:bg-[#DF0D85]/5 transition-all bg-black border-white/10">
<iconify-icon className="text-xl group-hover:text-[#DF0D85] transition-colors text-zinc-300" icon="solar:graph-up-linear"></iconify-icon>
</div>
<h3 className="text-base font-medium mb-3 tracking-tight text-white">
              Hyper-Personalized
            </h3>
<p className="text-sm leading-relaxed text-zinc-400">
              Deliver hyper-personalized itineraries, dynamically tailored
              amenity offers, and issue real-time cash-back loyalty rewards
              governed by data.
            </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden border-t pt-24 pr-6 pb-24 pl-6 relative bg-black border-white/5" id="architecture">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="lg:w-[45%]">
<div className="inline-block px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-white/5 border-white/10 text-zinc-400">
            Enterprise Architecture
          </div>
<h2 className="md:text-5xl leading-tight text-3xl font-semibold tracking-tight mb-6">Intelligent <br/> <span className="text-zinc-600">Orchestration</span></h2>
<p className="md:text-base leading-relaxed text-sm mb-8 text-zinc-400">Deploying deep intelligence shouldn't mean ripping and replacing your core operational systems. SHASHI.AI acts as a non-destructive "Level 1" connective layer, seamlessly unifying fragmented data streams from your existing PMS, CRS, and CRM to power next-generation interfaces.</p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl border bg-white/5 border-white/5">
<iconify-icon className="text-xl text-[#DF0D85] mt-0.5 shrink-0" icon="solar:database-linear"></iconify-icon>
<div className="">
<div className="text-sm font-medium mb-1 text-white">
                  Unified Data Schemas
                </div>
<div className="text-xs text-zinc-500">
                  Normalize legacy protocols into modern, queryable JSON
                  objects.
                </div>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border bg-white/5 border-white/5">
<iconify-icon className="text-xl text-[#DF0D85] mt-0.5 shrink-0" icon="solar:bolt-linear"></iconify-icon>
<div className="">
<div className="text-sm font-medium mb-1 text-white">
                  Real-Time Synchronization
                </div>
<div className="text-xs text-zinc-500">
                  Bi-directional event streaming ensures state consistency
                  across all touchpoints.
                </div>
</div>
</div>
</div>
</div>

<div className="lg:w-[55%] w-full relative">

<div className="absolute inset-0 bg-gradient-to-tr from-[#DF0D85]/10 to-transparent blur-3xl -z-10 rounded-full"></div>
<div className="p-8 md:p-12 border rounded-[2rem] shadow-2xl backdrop-blur-xl bg-zinc-950 border-white/10">

<div className="flex justify-between gap-3 mb-6">
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-black border-white/10">
<iconify-icon className="text-lg text-zinc-600" icon="solar:server-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  PMS
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-black border-white/10">
<iconify-icon className="text-lg text-zinc-600" icon="solar:cloud-check-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  CRS
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 text-center flex flex-col items-center justify-center gap-2 relative group bg-black border-white/10">
<iconify-icon className="text-lg text-zinc-600" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider text-zinc-400">
                  CRM
                </span>
</div>
</div>

<div className="flex justify-around items-center h-10 mb-6 relative">

<div className="absolute inset-0 flex justify-around">
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-white/10"></div>
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-white/10"></div>
<div className="w-px bg-gradient-to-b to-[#DF0D85]/50 h-full from-white/10"></div>
</div>
</div>

<div className="w-full bg-gradient-to-r from-[#DF0D85]/10 via-[#DF0D85]/5 to-[#DF0D85]/10 border border-[#DF0D85]/40 rounded-2xl p-8 text-center relative shadow-[0_0_40px_rgba(223,13,133,0.15)] overflow-hidden">

<div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent opacity-40 animate-[shimmer_3s_infinite] to-white/5"></div>
<div className="relative z-10 flex flex-col items-center">
<span className="text-lg font-semibold tracking-tighter mb-1 text-white">
                  shashi.ai
                </span>
<div className="text-xs text-[#DF0D85] font-medium tracking-wide uppercase">
                  Intelligent Agentic Layer
                </div>
<div className="mt-4 flex gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] animate-ping"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] opacity-50"></span>
<span className="w-1.5 h-1.5 rounded-full bg-[#DF0D85] opacity-20"></span>
</div>
</div>
</div>

<div className="flex justify-around items-center h-10 mt-6 relative">
<div className="absolute inset-0 flex justify-around">
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-white/10">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-white/20"></div>
</div>
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-white/10">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-white/20"></div>
</div>
<div className="w-px bg-gradient-to-b from-[#DF0D85]/50 h-full relative to-white/10">
<div className="absolute bottom-0 w-2 h-2 rounded-full -translate-x-[3px] bg-white/20"></div>
</div>
</div>
</div>

<div className="flex justify-between gap-3 mt-6">
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<iconify-icon className="text-xl text-white" icon="solar:smartphone-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">
                  Mobile App
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<iconify-icon className="text-xl text-white" icon="solar:tv-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">
                  In-Room TV
                </span>
</div>
<div className="flex-1 border rounded-xl py-5 flex flex-col items-center gap-3 transition-colors bg-white/5 border-white/10 hover:bg-white/10">
<iconify-icon className="text-xl text-white" icon="solar:monitor-linear"></iconify-icon>
<span className="text-xs font-medium text-zinc-300">
                  Web Portal
                </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t px-6 py-24 relative bg-zinc-900 border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex items-center gap-2 text-sm text-[#DF0D85] mb-4 uppercase tracking-widest font-semibold">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
<span className="">Customer Success</span>
</div>
<div className="mb-12">
<h2 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 leading-none text-white">
            Results.
          </h2>
<p className="sm:text-base text-sm text-zinc-400">
            Real impact from real workflows
          </p>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
<article className="sm:p-6 flex flex-col min-h-[420px] hover:border-[#DF0D85]/30 transition-colors border rounded-2xl pt-5 pr-5 pb-5 pl-5 backdrop-blur-lg justify-between bg-zinc-800/50 border-white/5">
<div className="space-y-5">
<div className="flex gap-2 gap-x-2 gap-y-2 items-end">
<span className="text-5xl sm:text-6xl font-semibold tracking-tight text-white">
                  99.8
                </span>
<span className="text-base text-zinc-400">%</span>
</div>
<p className="text-sm leading-relaxed text-zinc-300">
                We've automated
                <span className="font-medium text-white">250K+ workflows</span>
                with industry-leading uptime and reliability.
              </p>
<div className="flex items-center gap-3">
<span className="text-sm font-medium text-white">SHASHI.AI</span>
</div>
<div className="flex items-center gap-2">
<div className="h-7 w-7 border rounded-full flex items-center justify-center bg-zinc-800 border-white/10">
<iconify-icon className="text-xs text-zinc-300" icon="solar:bolt-linear"></iconify-icon>
</div>
<div className="h-7 w-7 border -ml-2 rounded-full flex items-center justify-center bg-zinc-800 border-white/10">
<iconify-icon className="text-xs text-zinc-300" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<div className="h-7 w-7 border -ml-2 rounded-full flex items-center justify-center bg-zinc-800 border-white/10">
<iconify-icon className="text-xs text-zinc-300" icon="solar:graph-up-linear"></iconify-icon>
</div>
<span className="inline-flex items-center justify-center -ml-1 h-7 px-2 rounded-full text-xs font-medium bg-white text-black">
                  250K+
                </span>
</div>
<div className="flex items-center gap-1 text-[#DF0D85]">
<iconify-icon className="text-base" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-xs text-zinc-400">
                  Active across enterprise
                </span>
</div>
</div>
<a className="mt-6 flex items-center justify-center h-11 w-full rounded-full text-sm font-medium transition bg-white text-black hover:bg-zinc-200" href="mailto:dgupta@shashigroup.com">
              Start your workflow
            </a>
</article>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-4 py-4 backdrop-blur-lg items-center justify-between bg-zinc-800 border-white/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 border rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 border-white/10 text-white">
                  SC
                </div>
<div className="">
<p className="text-sm font-medium tracking-tight text-white">
                    Sarah Chen
                  </p>
<p className="text-xs text-zinc-400">TechFlow Solutions</p>
</div>
</div>
<iconify-icon className="text-lg text-zinc-600" icon="solar:add-circle-linear"></iconify-icon>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-5 py-5 backdrop-blur-lg justify-between bg-zinc-800/50 border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-[#DF0D85]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug font-medium tracking-tight text-white">
                shashi.ai reduced our processing time by 85% and eliminated
                manual errors completely.
              </p>
</article>
</div>
<div className="grid grid-rows-[1fr_auto] gap-4">
<article className="flex flex-col min-h-[420px] hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-6 py-6 backdrop-blur-lg justify-between bg-zinc-800/50 border-white/5">
<p className="text-2xl sm:text-3xl text-center leading-snug font-medium tracking-tight text-white">
                The AI learns our patterns and suggests optimizations we never
                considered.
              </p>
<div className="mt-6 flex items-center justify-between">
<div className="flex items-center gap-1 text-[#DF0D85]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</article>
<article className="flex gap-3 hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-4 py-4 backdrop-blur-lg gap-x-3 gap-y-3 items-center bg-zinc-800/50 border-white/5">
<div className="h-10 w-10 border rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 border-white/10 text-white">
                MJ
              </div>
<div className="">
<p className="text-sm font-medium tracking-tight text-white">
                  Marcus Johnson
                </p>
<p className="text-xs text-zinc-400">Innovate Labs</p>
</div>
</article>
</div>
<div className="grid grid-rows-[auto_1fr] gap-4">
<article className="flex hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-4 py-4 backdrop-blur-lg items-center justify-between bg-zinc-800/50 border-white/5">
<div className="flex items-center gap-3">
<div className="h-10 w-10 border rounded-full flex items-center justify-center font-medium text-sm bg-zinc-800 border-white/10 text-white">
                  MP
                </div>
<div className="">
<p className="text-sm font-medium tracking-tight text-white">
                    Maya Patel
                  </p>
<p className="text-xs text-zinc-400">Operations Director</p>
</div>
</div>
<iconify-icon className="text-lg text-zinc-600" icon="solar:add-circle-linear"></iconify-icon>
</article>
<article className="sm:p-6 flex flex-col min-h-[420px] hover:border-[#DF0D85]/30 transition-colors border rounded-2xl px-5 py-5 backdrop-blur-lg justify-between bg-zinc-800/50 border-white/5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1 text-[#DF0D85]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
</div>
<p className="text-2xl sm:text-3xl text-right leading-snug font-medium tracking-tight text-white">
                Seamless integration with our existing tools. Setup took
                minutes, not weeks.
              </p>
</article>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 border-t relative overflow-hidden text-center z-10 border-white/5 bg-zinc-950">
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none -z-10 from-black"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#DF0D85]/15 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6 text-white">
          Ready to transform Guest Experience?
        </h2>
<p className="text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed text-zinc-400">
          Orchestrate fully autonomous journeys, enhance operational efficiency,
          and drive loyalty with a single intelligent layer.
        </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium bg-[#DF0D85] rounded-full hover:bg-[#c20b74] shadow-[0_0_25px_rgba(223,13,133,0.4)] transition-all text-white" href="mailto:dgupta@shashigroup.com">
          Book a Call
        </a>
</div>
</section>

<footer className="overflow-hidden border-t pt-32 pr-6 pb-12 pl-6 relative bg-black border-white/10">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#DF0D85]/10 rounded-t-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="sm:p-10 border rounded-3xl p-6 backdrop-blur-md relative z-10 shadow-[0_0_40px_rgba(223,13,133,0.05)] bg-zinc-950/50 border-white/5">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-left">

<div className="md:col-span-2">
<h4 className="sm:text-2xl text-xl font-semibold tracking-tight text-white">Stay Updated with SHASHI.AI</h4>
<div className="mt-6 relative max-w-md">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-full border px-5 pr-14 py-3.5 text-sm placeholder-zinc-500 outline-none focus:border-[#DF0D85]/50 focus:ring-1 focus:ring-[#DF0D85]/50 transition-all bg-black border-white/10 text-white" id="footer-email" placeholder="Enter your email" type="email"/>
<button aria-label="Subscribe" className="absolute right-1.5 top-1.5 bottom-1.5 inline-flex items-center justify-center rounded-full px-4 bg-[#DF0D85] hover:bg-[#c20b74] hover:shadow-[0_0_15px_rgba(223,13,133,0.3)] transition-all text-white">
<svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<p className="text-xs mt-4 leading-relaxed text-zinc-400">
                Get the latest insights on autonomous hospitality and platform updates. No spam, ever.
              </p>
</div>

<div className="">
<h5 className="uppercase text-sm font-semibold tracking-wide mb-5 text-white">Products</h5>
<ul className="space-y-3.5 text-sm text-zinc-400">
<li className=""><a className="transition-colors inline-block hover:text-white" href="#">Frictionless Booking</a></li>
<li className=""><a className="transition-colors inline-block hover:text-white" href="#">Autonomous Check-in</a></li>
<li className=""><a className="transition-colors inline-block hover:text-white" href="#">In-Room Experience</a></li>
</ul>
</div>

<div className="">
<h5 className="text-sm font-semibold tracking-wide uppercase mb-5 text-white">Company</h5>
<ul className="space-y-3.5 text-sm text-zinc-400">
<li className=""><a className="group inline-flex items-center gap-1.5 transition-colors hover:text-white" href="#architecture">About Us</a></li>
<li className=""><a className="group inline-flex items-center gap-1.5 transition-colors hover:text-white" href="mailto:dgupta@shashigroup.com">Customer Stories </a></li>
<li className=""><a className="group inline-flex items-center gap-1.5 transition-colors hover:text-white" href="https://shashi.ai" target="_blank">shashi.ai <svg className="lucide lucide-arrow-up-right opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7 7h10v10"></path><path className="" d="M7 17 17 7"></path></svg></a></li>
</ul>
</div>
</div>

<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-left">
<div className="flex flex-wrap items-center gap-3 text-sm">
<a aria-label="LinkedIn" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 hover:border-[#DF0D85]/30 transition-all duration-300 border-white/10 bg-black text-zinc-400 hover:text-white hover:bg-white/5" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
<span className="font-medium">LinkedIn</span>
</a>
<a aria-label="Twitter" className="inline-flex items-center gap-2 rounded-full border px-4 py-2.5 hover:border-[#DF0D85]/30 transition-all duration-300 border-white/10 bg-black text-zinc-400 hover:text-white hover:bg-white/5" href="#">
<svg className="lucide lucide-twitter" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
<span className="font-medium">Twitter</span>
</a>
</div>
<div className="flex items-center justify-start md:justify-end gap-6 text-xs text-zinc-500 font-medium">
<a className="transition-colors hover:text-zinc-300" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-zinc-300" href="#">Terms of Service</a>
<a className="transition-colors hover:text-zinc-300" href="#">Status</a>
</div>
</div>
<div className="h-px my-8 bg-white/10"></div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-zinc-700"></span>
<span className="font-semibold tracking-tighter text-zinc-400">SHASHI.AI</span>
<span className="ml-1 text-zinc-600">© 2026 Shashi Group. All rights reserved.</span>
</div>
<p className="text-zinc-600">Platform architecture subject to patent pending status.</p>
</div>
</div>
</div>
</footer>
<style>
      /* Custom animation for diagram shimmer */
      @keyframes shimmer {
          100% {
              transform: translateX(100%) skewX(-12deg);
          }
      }
      @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
      }
      .ticker-track {
          animation: ticker 40s linear infinite;
      }
      .ticker-track:hover {
          animation-play-state: paused;
      }
    </style>

    </>
  );
}
