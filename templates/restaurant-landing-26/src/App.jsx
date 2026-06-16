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



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="spline-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="71" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 71%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 71%, transparent)'}}><iframe frameborder="0" height="100%" src="https://www.youtube.com/watch?v=e3SSNYKIBZM" width="100%"></iframe></div>
<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://www.youtube.com/watch?v=e3SSNYKIBZM"></video></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="p-1.5 rounded-lg group-hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30 bg-red-600 text-white" style={{}}>
<svg className="lucide lucide-chef-hat w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Il Porcellino</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="transition-colors hover:text-neutral-900 text-base font-medium text-neutral-500" href="#menu-highlights">Highlights</a>
<a className="transition-colors text-base font-medium text-neutral-500 hover:text-neutral-900" href="#full-menu" style={{}}>Menu</a>
<a className="transition-colors text-base font-medium text-neutral-500 hover:text-neutral-900" href="#locations" style={{}}>Ubicación</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-base font-medium text-neutral-500 hover:text-neutral-900" href="#" style={{}}>Log in</a>
<button className="text-base font-medium px-5 py-2.5 rounded-full btn-shine shadow-glow-black flex items-center gap-2 border bg-neutral-900 text-white border-neutral-800" style={{}}>
                    Reserve Table
                    <svg className="lucide lucide-arrow-right w-4 h-4 text-neutral-400" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</nav>

<section className="overflow-hidden pt-32 pb-20 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] hero-glow pointer-events-none z-0"></div>
<div className="flex flex-col text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-center">

<div className="inline-flex gap-2 animate-fade-in-up border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center text-red-700 bg-red-50 border-red-100" style={{}}>
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="uppercase text-sm font-medium tracking-tight">
Diego de portola #664, Tijuana, Mexico</span>
</div>

<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-6xl font-semibold tracking-tight max-w-4xl mb-8 text-neutral-900" style={{}}>Pizzeria Artesanal</h1>

<p className="md:text-2xl leading-relaxed text-xl font-normal text-neutral-500 max-w-2xl mb-10" style={{}}>Las auténticas técnicas napolitanas se combinan con los ingredientes de Baja California. Fundada en 2023.</p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
<a className="sm:w-auto flex items-center justify-center gap-2 text-lg font-medium w-full rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-glow-red btn-shine transition-all text-white bg-red-600" href="#full-menu" style={{}}>Explora Menu</a>
<button className="sm:w-auto flex gap-2 text-lg font-medium w-full border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 gap-x-2 gap-y-2 items-center justify-center shadow-glow-white btn-shine text-neutral-900 bg-white border-neutral-200" style={{}}>
<svg className="lucide lucide-calendar-check w-5 h-5 text-neutral-500" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                    Book a Table
                </button>
</div>

<div className="relative w-full max-w-5xl mx-auto group perspective-1000">
<div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-[16/9] md:aspect-[21/9] shadow-neutral-300 border-neutral-200 bg-neutral-100" style={{}}>
<img alt="Wood fired pizza being served" className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&amp;w=2400&amp;auto=format&amp;fit=crop" style={{}}/>

<div className="flex bg-gradient-to-t to-transparent pt-8 pr-8 pb-8 pl-8 absolute right-0 bottom-0 left-0 items-end justify-between from-black/60">
<div className="text-left">
<p className="text-lg font-medium text-white">Especialidad de la casa</p>
<p className="text-base text-neutral-200" style={{}}>La Toscana</p>
</div>
<div className="backdrop-blur-md border px-4 py-2 rounded-full text-base font-medium shadow-[0_0_15px_rgba(255,255,255,0.3)] bg-white/20 border-white/30 text-white">
                            $250 MXN
                        </div>
</div>
</div>

<div className="absolute -right-6 -top-6 p-4 rounded-xl shadow-xl border max-w-xs hidden md:block animate-bounce-slow bg-white border-neutral-100" style={{}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-1.5 rounded-full bg-green-100 text-green-600">
<svg className="lucide lucide-check w-4 h-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm font-semibold text-neutral-900" style={{}}>Reservation Confirmed</span>
</div>
<p className="text-neutral-500 text-sm" style={{}}>Table for 2 • Tonight, 8:00 PM</p>
</div>
</div>

<div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-900" style={{}}>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9 Rating
                </div>
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-900" style={{}}>
<svg className="lucide lucide-award w-5 h-5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg> Best of Baja
                </div>
<div className="flex items-center gap-2 text-xl font-semibold text-neutral-900" style={{}}>
<svg className="lucide lucide-thumbs-up w-5 h-5" data-lucide="thumbs-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path><path d="M7 10v12"></path></svg> Tijuana Eats
                </div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 bg-neutral-50/50 border-neutral-100" id="menu-highlights" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="">
<h2 className="text-4xl font-semibold tracking-tight mb-4 text-neutral-900" style={{}}>Curated for Tijuana</h2>
<p className="text-xl text-neutral-500 max-w-md" style={{}}>Nuestro menú combina la tradición italiana con el espíritu audaz de la frontera.</p>
</div>
<a className="hidden md:flex items-center gap-2 font-medium text-lg hover:gap-3 transition-all mt-6 md:mt-0 text-red-600" href="#full-menu" style={{}}>
                    View Full Menu <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 relative rounded-3xl p-8 border overflow-hidden group hover:shadow-xl transition-all duration-500 bg-white border-neutral-200 hover:shadow-neutral-200/50" style={{}}>
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l to-transparent opacity-0 group-hover:opacity-100 transition-opacity from-red-50" style={{}}></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg bg-red-100 text-red-600 shadow-red-100/50" style={{}}>
<svg className="lucide lucide-flame w-6 h-6" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-2 text-neutral-900" style={{}}>Wood-Fired Excellence</h3>
<p className="text-lg text-neutral-500 max-w-sm" style={{}}>Our ovens burn local oak to create that perfect crust for our signature 'Le Nostre Pizza' collection.</p>
</div>
<img className="-right-16 -bottom-16 group-hover:scale-110 transition-transform duration-500 w-80 h-80 object-cover border-4 rounded-full absolute shadow-2xl border-white" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a489401f-8374-4e03-ac93-0ebb8cb4a68b_800w.jpg" style={{}}/>
</div>
</div>

<div className="rounded-3xl p-8 border flex flex-col justify-between relative overflow-hidden shadow-xl bg-neutral-900 border-neutral-800 text-white shadow-neutral-900/30" style={{}}>

<div className="absolute top-0 right-0 p-32 blur-[100px] opacity-20 bg-red-600" style={{}}></div>
<div className="">
<div className="flex items-center gap-2 mb-6">
<span className="px-2 py-1 rounded text-xs font-semibold tracking-wide uppercase shadow-[0_0_10px_rgba(220,38,38,0.5)] bg-red-600 text-white" style={{}}>VIP Club</span>
</div>
<h3 className="text-2xl font-semibold mb-3">Priority Access</h3>
<p className="text-lg mb-6 text-neutral-400" style={{}}>Get automated SMS alerts for table openings and secret menu items.</p>
</div>
<form className="space-y-3 relative z-10">
<input className="w-full border placeholder-neutral-500 text-base px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 transition-all shadow-inner bg-neutral-800 border-neutral-700 text-white" placeholder="Enter your email" style={{}} type="email"/>
<button className="w-full font-semibold text-base px-4 py-3 rounded-lg btn-shine shadow-glow-white bg-white text-neutral-900" style={{}}>
                            Join the Waitlist
                        </button>
</form>
</div>

<div className="rounded-3xl p-8 border transition-colors group hover:shadow-xl hover:shadow-red-500/10 duration-300 bg-white border-neutral-200 hover:border-red-200" style={{}}>
<div className="flex justify-between items-start mb-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg bg-orange-50 text-orange-600 shadow-orange-100/50">
<svg className="lucide lucide-wheat w-6 h-6" data-lucide="wheat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22 16 8"></path><path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"></path><path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"></path><path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path><path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"></path></svg>
</div>
<span className="text-lg font-medium text-neutral-900" style={{}}>$165</span>
</div>
<h3 className="text-xl font-semibold mb-2 text-neutral-900" style={{}}>Margherita</h3>
<p className="text-lg text-neutral-500 mb-8" style={{}}>Salsa de Tomate, Mozzarella Fresca &amp; Albahaca.</p>
<div className="w-full h-1 rounded-full overflow-hidden bg-neutral-100" style={{}}>
<div className="w-3/4 h-full bg-red-500 shadow-[0_0_10px_rgba(220,38,38,0.5)]" style={{}}></div>
</div>
<p className="text-sm mt-2 text-neutral-400" style={{}}>Popularity: Very High</p>
</div>

<div className="md:col-span-2 rounded-3xl p-8 border flex flex-col md:flex-row gap-8 items-center hover:shadow-xl transition-all duration-300 bg-white border-neutral-200 hover:shadow-neutral-200/50" id="locations" style={{}}>
<div className="flex-1">
<h3 className="text-2xl font-semibold mb-3 text-neutral-900" style={{}}>Visit Us in Tijuana</h3>
<div className="space-y-4">
<div className="flex items-start gap-3">
<svg className="lucide lucide-map-pin w-6 h-6 mt-1 drop-shadow-md text-red-600" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<div className="">
<p className="text-lg font-medium text-neutral-900" style={{}}>Diego de portola #664, Tijuana, Mexico</p>
<p className="text-base text-neutral-500" style={{}}>Col. Soler, Tijuana, B.C.</p>
</div>
</div>
<div className="flex items-start gap-3">
<svg className="lucide lucide-clock w-6 h-6 mt-1 drop-shadow-md text-red-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<div className="">
<p className="text-lg font-medium text-neutral-900" style={{}}>Open Daily</p>
<p className="text-base text-neutral-500" style={{}}>1:00 PM - 11:00 PM</p>
</div>
</div>
</div>
<button className="mt-8 font-medium text-lg flex items-center gap-2 hover:gap-3 transition-all hover:drop-shadow-sm text-red-600 hover:text-red-700" style={{}}>
                            Get Directions <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="w-full md:w-1/2 h-48 md:h-full rounded-2xl overflow-hidden relative border shadow-inner bg-neutral-100 border-neutral-200" style={{}}>

<div className="absolute inset-0 bg-cover bg-center opacity-40 grayscale bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1335a8a9-d081-44ec-89db-00f14f975ff5_3840w.png)]" style={{}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.6)] animate-bounce bg-red-600 text-white" style={{}}>
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="full-menu">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="font-semibold tracking-wider uppercase text-sm mb-2 block drop-shadow-sm text-red-600" style={{}}>Our Menu</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 text-neutral-900" style={{}}>Pizzeria Artesanal</h2>
<p className="text-xl text-neutral-500 max-w-2xl mx-auto" style={{}}>
                    Handcrafted pizzas, gourmet burgers, and fresh pastas made daily.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">

<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900" style={{}}>Le Nostre Pizza</h3>
<div className="h-px flex-1 bg-neutral-200" style={{}}></div>
<svg className="lucide lucide-pizza w-5 h-5 text-red-500 drop-shadow-md" data-lucide="pizza" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 14-1 1"></path><path d="m13.75 18.25-1.25 1.42"></path><path d="M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"></path><path d="M18.8 9.3a1 1 0 0 0 2.1 7.7"></path><path d="M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"></path></svg>
</div>
<div className="space-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Pepperoni</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<div className="text-right flex flex-col items-end">
<span className="font-bold text-neutral-900" style={{}}>$130</span>
<span className="text-xs font-semibold px-1.5 py-0.5 rounded shadow-sm text-white bg-red-600" style={{}}>2 x $199</span>
</div>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella &amp; Pepperoni.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Hawaiiana</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$165</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Jamón &amp; Piña.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>4 Quesos</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$170</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella &amp; Variedad de 4 Quesos.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Margherita</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$165</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella Fresca &amp; Albahaca.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Vegetariana</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$175</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Cebolla Morada, Aceituna Negra, Champiñón, Pimiento Morrón Verde, Tomate Cherry &amp; Albahaca.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Mexicana</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$190</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Frijol, Mozzarella, Cebolla Morada, Pimiento Morrón Verde, Chorizo &amp; Jalapeño.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>3 Carnes</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$200</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Pepperoni, Jamón &amp; Salchicha Italiana.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Italiana</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$210</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Cebolla Morada, Aceituna Negra, Champiñón, Pimiento Morrón Verde, Tomate Cherry, Albahaca &amp; Salchicha Italiana.</p>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900" style={{}}>Specialità</h3>
<div className="h-px flex-1 bg-neutral-200" style={{}}></div>
<svg className="lucide lucide-star w-5 h-5 text-yellow-500 drop-shadow-sm" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="space-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>Il Padrino</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$230</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Pepperoni, Jamón, Chorizo, Salchicha Italiana &amp; Aceituna Negra.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>La Suprema</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$240</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de tomate, Mozzarella, Cebolla Morada, Aceituna Negra, Champiñón, Pimiento Morrón Verde, Tomate Cherry, Albahaca, Salchicha Italiana &amp; Pepperoni.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg group-hover:text-red-600 transition-colors text-neutral-900" style={{}}>La Toscana</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$250</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Salsa de Tomate, Mozzarella, Arúgula, Prosciutto, Laminas de Parmesano &amp; Glaze Balsamic.</p>
</div>
</div>
</div>
</div>

<div className="space-y-12">

<div className="">
<div className="flex items-center gap-4 mb-8">
<h3 className="text-2xl font-bold tracking-tight text-neutral-900" style={{}}>Le Nostre Burger</h3>
<div className="h-px flex-1 bg-neutral-200" style={{}}></div>
<span className="text-xs font-semibold uppercase tracking-widest text-neutral-400" style={{}}>All Combos</span>
</div>
<div className="space-y-8">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg text-neutral-900" style={{}}>Classic Burger</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$180</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Carne de Res, Queso, Ketchup, Tomate, Cebolla &amp; Lechuga Romana.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg text-neutral-900" style={{}}>Pizza Burger</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$180</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Carne de Res, Salsa Marinara, Mozzarella &amp; Pepperoni.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg text-neutral-900" style={{}}>Caprese Burger</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$200</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Carne de res, Pesto, Arúgula, Mozzarella Fresca &amp; Tomate.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-lg text-neutral-900" style={{}}>Western Burger</h4>
<div className="border-b border-dotted flex-grow mx-4 border-neutral-300" style={{}}></div>
<span className="font-bold text-neutral-900" style={{}}>$200</span>
</div>
<p className="text-neutral-500 text-sm leading-relaxed" style={{}}>Carne de Res, Queso, BBQ, Aros de Cebolla &amp; Tocino.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>Insalate</h3>
<div className="h-px flex-1 bg-neutral-200" style={{}}></div>
</div>
<div className="space-y-6">
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-base text-neutral-900" style={{}}>Caesar</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$110</span>
</div>
<p className="text-neutral-500 text-xs" style={{}}>Lechuga Romana, Aderezo de la Casa &amp; Croutones.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-base text-neutral-900" style={{}}>Caprese</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$130</span>
</div>
<p className="text-neutral-500 text-xs" style={{}}>Mozzarella Fresca, Tomate, Albahaca.</p>
</div>
<div className="group">
<div className="flex justify-between items-baseline mb-1">
<h4 className="font-semibold text-base text-neutral-900" style={{}}>Toscana</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$160</span>
</div>
<p className="text-neutral-500 text-xs" style={{}}>Lechuga, Arúgula, Champiñón, Aceitunas, Parmesano.</p>
</div>
</div>
</div>

<div className="">
<div className="flex items-center gap-4 mb-6">
<h3 className="text-xl font-bold tracking-tight text-neutral-900" style={{}}>La Pasta</h3>
<div className="h-px flex-1 bg-neutral-200" style={{}}></div>
</div>
<div className="space-y-4">
<div className="flex justify-between items-baseline">
<h4 className="font-medium text-neutral-900" style={{}}>Pomodoro Basilico</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$100</span>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-medium text-neutral-900" style={{}}>Alfredo</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$120</span>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-medium text-neutral-900" style={{}}>Pesto</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$130</span>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-medium text-neutral-900" style={{}}>Bolognesa</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$140</span>
</div>
<div className="flex justify-between items-baseline">
<h4 className="font-medium text-neutral-900" style={{}}>Carbonara</h4>
<span className="border-b border-dotted flex-grow mx-2 border-neutral-300" style={{}}></span>
<span className="font-bold text-neutral-900" style={{}}>$160</span>
</div>
</div>
</div>
</div>

<div className="rounded-2xl p-8 border shadow-xl bg-neutral-50 border-neutral-100 shadow-neutral-100/50" style={{}}>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2 text-neutral-900" style={{}}>
<svg className="lucide lucide-glass-water w-4 h-4 text-blue-500" data-lucide="glass-water" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"></path><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"></path></svg> Bevande
                                </h3>
<ul className="space-y-2 text-sm">
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Agua Fresca</span> <span className="font-medium">$40</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Soda de Lata</span> <span className="font-medium">$40</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Soda Italiana</span> <span className="font-medium">$60</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Copa de Vino</span> <span className="font-medium">$90</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Copa de Sangría</span> <span className="font-medium">$110</span></li>
</ul>
</div>
<div className="">
<h3 className="text-lg font-bold tracking-tight mb-4 flex items-center gap-2 text-neutral-900" style={{}}>
<svg className="lucide lucide-cake-slice w-4 h-4 text-pink-500" data-lucide="cake-slice" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 13H3"></path><path d="M16 17H3"></path><path d="m7.2 7.9-3.388 2.5A2 2 0 0 0 3 12.01V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-8.654c0-2-2.44-6.026-6.44-8.026a1 1 0 0 0-1.082.057L10.4 5.6"></path><circle cx="9" cy="7" r="2"></circle></svg> Dessert &amp; Extras
                                </h3>
<ul className="space-y-2 text-sm">
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Flan</span> <span className="font-medium">$60</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Brownie</span> <span className="font-medium">$80</span></li>
<li className="border-t my-2 pt-2 flex justify-between border-neutral-200" style={{}}><span className="text-neutral-600" style={{}}>Aros de Cebolla</span> <span className="font-medium">$80</span></li>
<li className="flex justify-between"><span className="text-neutral-600" style={{}}>Extra Ingrediente</span> <span className="font-medium">$40</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-neutral-900 text-white" style={{}}>
<div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a489401f-8374-4e03-ac93-0ebb8cb4a68b_3840w.jpg)] bg-cover bg-center" style={{}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="md:text-5xl text-4xl font-semibold tracking-tight mb-6 drop-shadow-lg">Never miss a slice.</h2>
<p className="text-xl mb-10 max-w-2xl mx-auto text-neutral-400" style={{}}>
                Our outreach system notifies you instantly about limited-time chef specials, wine pairings, and open tables on Friday nights.
            </p>
<div className="border p-2 rounded-full max-w-lg mx-auto flex items-center shadow-2xl backdrop-blur-sm focus-within:ring-2 focus-within:ring-red-500 transition-all bg-white/10 border-white/10" style={{}}>
<input className="bg-transparent flex-1 px-6 py-3 text-lg outline-none placeholder:text-neutral-500 text-white" placeholder="your@email.com" style={{}} type="email"/>
<button className="rounded-full px-8 py-3.5 font-medium text-lg transition-colors shadow-glow-red btn-shine bg-red-600 hover:bg-red-700 text-white" style={{}}>
                    Subscribe
                </button>
</div>
<p className="mt-4 text-sm text-neutral-500" style={{}}>Join 1,200+ local foodies. Unsubscribe anytime.</p>
</div>
</section>

<footer className="border-t py-16 bg-white border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="p-1.5 rounded-lg shadow-[0_0_15px_rgba(220,38,38,0.4)] bg-red-600 text-white" style={{}}>
<svg className="lucide lucide-chef-hat w-5 h-5" data-lucide="chef-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"></path><path d="M6 17h12"></path></svg>
</div>
<span className="text-lg font-semibold tracking-tight text-neutral-900" style={{}}>Il Porcellino</span>
</div>
<p className="text-base text-neutral-500 mb-6" style={{}}>
                        The finest Neapolitan pizza experience in Tijuana, combining tradition with modern service.
                    </p>
<div className="flex gap-4 text-neutral-400" style={{}}>
<a className="transition-colors hover:drop-shadow-md hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="transition-colors hover:drop-shadow-md hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="transition-colors hover:drop-shadow-md hover:text-red-600" href="#" style={{}}><svg className="lucide lucide-twitter w-6 h-6" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
<div className="">
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Discover</h4>
<ul className="space-y-3 text-base text-neutral-500" style={{}}>
<li className=""><a className="transition-colors hover:text-neutral-900" href="#full-menu" style={{}}>Menu</a></li>
<li className=""><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Wine List</a></li>
<li className=""><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Private Events</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Company</h4>
<ul className="space-y-3 text-base text-neutral-500" style={{}}>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>About Us</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Careers</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Press</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-semibold mb-4 text-neutral-900" style={{}}>Legal</h4>
<ul className="space-y-3 text-base text-neutral-500" style={{}}>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Privacy</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#" style={{}}>Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-sm border-neutral-100 text-neutral-400" style={{}}>
<p>© 2024 Il Porcellino Tijuana. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></span>
<span>System Operational</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
