import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
<div className="pointer-events-auto bg-white/90 backdrop-blur-sm border-2 border-black rounded-full px-2 py-2 flex items-center justify-between gap-4 brutal-shadow w-full max-w-lg bouncy hover:-translate-y-1">
<a className="flex items-center gap-2 pl-2" href="#">
<div className="w-8 h-8 rounded-full bg-[#ccff00] border-2 border-black flex items-center justify-center font-bold font-space text-lg">
                    z
                </div>
</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium lowercase hover:text-[#7000ff] transition-colors" href="#">features</a>
<a className="text-sm font-medium lowercase hover:text-[#7000ff] transition-colors" href="#">pricing</a>
<a className="text-sm font-medium lowercase hover:text-[#7000ff] transition-colors" href="#">manifesto</a>
</div>
<button className="bg-black text-white px-5 py-2 rounded-full font-space font-semibold text-sm hover:bg-[#ff0099] transition-colors bouncy hover:scale-105">
                Get App
            </button>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 bg-[#ccff00] overflow-hidden flex items-center">

<div className="absolute top-20 left-10 w-64 h-64 bg-[#7000ff] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
<div className="absolute bottom-20 right-10 w-80 h-80 bg-[#ff0099] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>
<div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

<div className="flex flex-col gap-6 relative">

<div className="absolute -top-16 -left-8 animate-float hidden lg:block">
<div className="bg-white border-2 border-black p-2 shadow-[4px_4px_0px_rgba(0,0,0,0.2)] rotate-6">
<iconify-icon icon="solar:bomb-emoji-linear" width="48"></iconify-icon>
</div>
</div>
<h1 className="text-7xl lg:text-9xl font-bold font-space tracking-tight leading-[0.9] lowercase">
                    make it <br/>
<span className="bg-gradient-to-r from-[#7000ff] to-[#ff0099] bg-clip-text text-transparent">pop harder.</span>
</h1>
<p className="text-xl lg:text-2xl font-dm text-black/80 max-w-md leading-relaxed">
                    the anti-boring toolkit for chaotic creators. ship faster, break things, and look good doing it.
                </p>
<div className="flex flex-wrap gap-4 mt-4">
<button className="bg-black text-white text-lg font-space font-bold px-8 py-4 border-2 border-black rounded-full brutal-shadow bouncy hover-wobble">
                        start creating
                    </button>
<button className="bg-white text-black text-lg font-space font-bold px-8 py-4 border-2 border-black rounded-full brutal-shadow bouncy hover:bg-gray-100">
                        watch demo
                    </button>
</div>
</div>

<div className="relative flex justify-center lg:justify-end perspective-1000">

<div className="absolute top-1/4 -left-4 z-20 animate-float-delayed">
<div className="bg-[#ff0099] text-white border-2 border-black px-4 py-1 rounded-full font-bold font-space shadow-[4px_4px_0px_rgba(0,0,0,0.2)] -rotate-6">
                        so fast!
                    </div>
</div>
<div className="absolute bottom-1/4 right-0 z-20 animate-float">
<div className="bg-[#7000ff] text-white border-2 border-black p-3 rounded-full shadow-[4px_4px_0px_rgba(0,0,0,0.2)] rotate-12">
<iconify-icon icon="solar:cursor-bold" width="32"></iconify-icon>
</div>
</div>

<div className="relative w-[320px] h-[640px] bg-white border-[8px] border-black rounded-[3rem] shadow-[12px_12px_0px_rgba(0,0,0,1)] rotate-3 overflow-hidden bouncy hover:rotate-0 hover:scale-[1.02]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-30"></div>

<div className="h-full w-full bg-[#f0f0f0] overflow-hidden flex flex-col pt-8">

<div className="px-4 py-2 flex justify-between items-center border-b-2 border-black bg-white">
<span className="font-space font-bold text-xl tracking-tight">feed.</span>
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</div>

<div className="flex-1 p-4 space-y-4 overflow-y-auto hide-scrollbar">

<div className="bg-white border-2 border-black p-3 brutal-shadow-sm -rotate-1 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-[#ccff00] border border-black"></div>
<div className="h-3 w-20 bg-black rounded-full"></div>
</div>
<div className="h-24 bg-[#7000ff] rounded-lg border border-black mb-2 flex items-center justify-center">
<iconify-icon className="text-white/50" icon="solar:gallery-wide-linear" width="32"></iconify-icon>
</div>
<div className="flex gap-2">
<div className="h-8 w-8 rounded-full border border-black flex items-center justify-center hover:bg-[#ff0099] transition-colors cursor-pointer">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</div>
<div className="h-8 w-8 rounded-full border border-black flex items-center justify-center hover:bg-[#ccff00] transition-colors cursor-pointer">
<iconify-icon icon="solar:chat-round-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="bg-white border-2 border-black p-3 brutal-shadow-sm rotate-1 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-[#ff0099] border border-black"></div>
<div className="h-3 w-16 bg-black rounded-full"></div>
</div>
<div className="p-2 bg-[#ccff00] border border-black rounded-lg mb-2">
<p className="font-space font-bold text-xs">JUST SHIPPED 🚀</p>
</div>
</div>

<div className="bg-white border-2 border-black p-3 brutal-shadow-sm -rotate-1 rounded-xl">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-[#7000ff] border border-black"></div>
<div className="h-3 w-24 bg-black rounded-full"></div>
</div>
<div className="h-16 bg-black rounded-lg border border-black mb-2 flex items-center justify-center">
<span className="text-white font-space text-xs">loading aesthetic...</span>
</div>
</div>
</div>

<div className="bg-white border-t-2 border-black p-4 flex justify-around items-center pb-6">
<iconify-icon icon="solar:home-smile-linear" width="28"></iconify-icon>
<iconify-icon icon="solar:magnifer-linear" width="28"></iconify-icon>
<button className="bg-[#ccff00] border-2 border-black rounded-full w-12 h-12 flex items-center justify-center brutal-shadow-sm -mt-6 bouncy hover:scale-110">
<iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
</button>
<iconify-icon icon="solar:bell-linear" width="28"></iconify-icon>
<iconify-icon icon="solar:user-linear" width="28"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white overflow-hidden -mt-10 mb-10 relative z-20">
<div className="bg-black py-6 border-y-4 border-white rotate-1 shadow-xl">

<div className="flex overflow-hidden relative w-full">

<div className="animate-marquee flex flex-shrink-0 gap-8 items-center justify-around text-white font-space font-black text-4xl uppercase tracking-tighter min-w-full px-4">
<span>ship it sideways</span>
<iconify-icon className="text-[#ccff00]" icon="solar:star-bold"></iconify-icon>
<span className="whitespace-nowrap tracking-tight">no boring gradients</span>
<iconify-icon className="text-[#ff0099]" icon="solar:bolt-bold"></iconify-icon>
<span>pure chaos energy</span>
<iconify-icon className="text-[#7000ff]" icon="solar:emoji-funny-circle-bold"></iconify-icon>
<span>ship it sideways</span>
<iconify-icon className="text-[#ccff00]" icon="solar:star-bold"></iconify-icon>
</div>

<div className="animate-marquee flex flex-shrink-0 gap-8 items-center justify-around text-white font-space font-black text-4xl uppercase tracking-tighter min-w-full px-4">
<span>ship it sideways</span>
<iconify-icon className="text-[#ccff00]" icon="solar:star-bold"></iconify-icon>
<span className="whitespace-nowrap tracking-tight">no boring gradients</span>
<iconify-icon className="text-[#ff0099]" icon="solar:bolt-bold"></iconify-icon>
<span>pure chaos energy</span>
<iconify-icon className="text-[#7000ff]" icon="solar:emoji-funny-circle-bold"></iconify-icon>
<span>ship it sideways</span>
<iconify-icon className="text-[#ccff00]" icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="container mx-auto px-4 max-w-6xl">
<h2 className="text-6xl font-bold mb-16 text-center tracking-tight lowercase">
                the <span className="bg-[#ccff00] px-2 border-2 border-black inline-block -rotate-2 brutal-shadow-sm">stack</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

<div className="md:col-span-7 bg-gray-100 border-4 border-black rounded-[2rem] brutal-shadow p-8 relative overflow-hidden group rotate-1 hover:rotate-0 bouncy cursor-pointer">
<div className="relative z-10">
<h3 className="text-3xl font-bold font-space mb-2 lowercase">super flexible</h3>
<p className="text-lg font-dm text-gray-600">bend the rules without breaking the code.</p>
</div>
<div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#ccff00] rounded-full border-2 border-black flex items-center justify-center group-hover:scale-110 bouncy group-hover:-rotate-12">
<iconify-icon className="text-black mb-8 mr-8" icon="solar:layers-minimalistic-bold" width="64"></iconify-icon>
</div>
</div>

<div className="md:col-span-5 bg-black border-4 border-black rounded-[2rem] brutal-shadow p-8 flex flex-col justify-between -rotate-1 hover:rotate-0 bouncy cursor-pointer group">
<div className="flex justify-between items-start">
<iconify-icon className="text-[#7000ff]" icon="solar:code-circle-bold" width="48"></iconify-icon>
<div className="w-4 h-4 rounded-full bg-[#ff0099] animate-pulse"></div>
</div>
<div className="">
<h3 className="text-3xl font-bold font-space text-[#ccff00] mb-2 lowercase tracking-tight group-hover:translate-x-2 bouncy">dark mode native</h3>
<p className="text-gray-400 font-dm">eye strain is so 2020.</p>
</div>
</div>

<div className="md:col-span-12 bg-[#ff0099] border-4 border-black rounded-[2rem] brutal-shadow p-8 md:p-12 rotate-1 hover:rotate-0 bouncy relative overflow-hidden">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="text-white">
<h3 className="text-4xl md:text-5xl font-bold font-space mb-4 lowercase">analytics that don't suck</h3>
<p className="text-xl font-dm mb-8 opacity-90">track everything. regret nothing. visualize your chaotic growth with zero effort.</p>
<button className="bg-white text-black font-bold font-space px-6 py-3 border-2 border-black rounded-full brutal-shadow-sm hover:translate-y-1 hover:shadow-none transition-all">
                                view dashboard
                            </button>
</div>

<div className="bg-white border-4 border-black rounded-xl p-4 shadow-[8px_8px_0px_0px_#000] rotate-2 hover:rotate-0 bouncy">
<div className="flex items-center justify-between mb-4 border-b-2 border-black pb-2">
<span className="font-bold text-sm">stats.json</span>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full bg-[#ff0099] border border-black"></div>
<div className="w-3 h-3 rounded-full bg-[#ccff00] border border-black"></div>
</div>
</div>
<div className="flex gap-2 items-end h-32 px-2">
<div className="w-1/5 bg-gray-200 border-2 border-black h-[40%] rounded-t-lg"></div>
<div className="w-1/5 bg-gray-200 border-2 border-black h-[60%] rounded-t-lg"></div>
<div className="w-1/5 bg-[#ccff00] border-2 border-black h-[80%] rounded-t-lg relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Peak!</div>
</div>
<div className="w-1/5 bg-gray-200 border-2 border-black h-[50%] rounded-t-lg"></div>
<div className="w-1/5 bg-[#7000ff] border-2 border-black h-[90%] rounded-t-lg"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-[#f4f4f5]">
<div className="container mx-auto px-4 max-w-3xl">
<h2 className="text-5xl font-bold font-space mb-12 text-center lowercase tracking-tight">
                wtf is <span className="text-[#7000ff]">this?</span>
</h2>
<div className="space-y-6">

<details className="group bg-white border-4 border-black rounded-2xl brutal-shadow open:bg-white transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none group-open:bg-gray-100 rounded-t-xl transition-colors">
<span className="text-xl font-bold font-space lowercase">is this for real?</span>
<div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45 bg-[#ccff00]">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</div>
</summary>
<div className="p-6 pt-0 border-t-2 border-black/10 mt-4">
<p className="text-lg font-dm leading-relaxed">
                            100% real. we got tired of soft shadows and rounded corners that look like candy. we want corners that could cut glass.
                        </p>
</div>
</details>

<details className="group bg-white border-4 border-black rounded-2xl brutal-shadow open:bg-white transition-all duration-300 -rotate-1">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none group-open:bg-gray-100 rounded-t-xl transition-colors">
<span className="text-xl font-bold font-space lowercase">why so much black?</span>
<div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45 bg-[#ff0099] text-white">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</div>
</summary>
<div className="p-6 pt-0 border-t-2 border-black/10 mt-4">
<p className="text-lg font-dm leading-relaxed">
                            contrast is king. if you can't read it from across the room, it's not brutal enough. also, it saves... well, nothing actually. it just looks cool.
                        </p>
</div>
</details>

<details className="group bg-white border-4 border-black rounded-2xl brutal-shadow open:bg-white transition-all duration-300 rotate-1">
<summary className="flex justify-between items-center p-6 cursor-pointer select-none group-open:bg-gray-100 rounded-t-xl transition-colors">
<span className="text-xl font-bold font-space lowercase">can i refund?</span>
<div className="w-10 h-10 border-2 border-black rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-45 bg-[#7000ff] text-white">
<iconify-icon icon="solar:add-linear" width="24"></iconify-icon>
</div>
</summary>
<div className="p-6 pt-0 border-t-2 border-black/10 mt-4">
<p className="text-lg font-dm leading-relaxed">
                            sure, but why would you? once you go brutal, you never go... subtle? look, just try it.
                        </p>
</div>
</details>
</div>
</div>
</section>

<section className="bg-[#ff0099] pt-32 pb-48 relative overflow-hidden">

<iconify-icon className="absolute top-20 left-10 text-black opacity-20 rotate-12" icon="solar:unicorn-linear" width="120"></iconify-icon>
<iconify-icon className="absolute bottom-40 right-20 text-black opacity-20 -rotate-12" icon="solar:ufo-linear" width="140"></iconify-icon>
<div className="container mx-auto px-4 text-center relative z-10">
<h2 className="text-8xl md:text-[10rem] font-bold font-space leading-[0.85] tracking-tighter mb-12 text-black lowercase">
                don't be<br/>boring.
            </h2>
<button className="group relative inline-block bg-black text-[#ccff00] text-2xl md:text-4xl font-space font-bold px-12 py-6 border-4 border-black rounded-full brutal-shadow hover-wobble bouncy">
<span className="relative z-10 flex items-center gap-4">
                    get early access
                    <iconify-icon icon="solar:arrow-right-up-linear" width="36"></iconify-icon>
</span>
</button>
</div>
</section>
<footer className="bg-white border-t-[8px] border-black pt-20 pb-8 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none select-none z-0">
<span className="text-[13vw] md:text-[12vw] font-black font-space text-black opacity-5 whitespace-nowrap tracking-tighter block translate-y-[40%]">
                 NEOBRUTAL
             </span>
</div>
<div className="container mx-auto px-4 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="md:col-span-2">
<div className="w-16 h-16 bg-[#ccff00] border-4 border-black rounded-full flex items-center justify-center font-bold font-space text-3xl mb-6 brutal-shadow-sm">
                        z
                    </div>
<p className="text-xl font-dm font-medium max-w-sm">
                        building the internet for the next generation of chaos goblins.
                    </p>
</div>
<div className="">
<h4 className="font-space font-bold text-xl mb-6 lowercase bg-black text-white inline-block px-2 rotate-2">product</h4>
<ul className="space-y-4">
<li><a className="font-dm text-lg hover:underline decoration-4 decoration-[#ff0099]" href="#">changelog</a></li>
<li className=""><a className="font-dm text-lg hover:underline decoration-4 decoration-[#ff0099]" href="#">roadmap</a></li>
<li><a className="font-dm text-lg hover:underline decoration-4 decoration-[#ff0099]" href="#">pricing</a></li>
</ul>
</div>
<div className="">
<h4 className="font-space font-bold text-xl mb-6 lowercase bg-black text-white inline-block px-2 -rotate-2">legal</h4>
<ul className="space-y-4">
<li className=""><a className="font-dm text-lg hover:underline decoration-4 decoration-[#7000ff]" href="#">terms</a></li>
<li className=""><a className="font-dm text-lg hover:underline decoration-4 decoration-[#7000ff]" href="#">privacy</a></li>
<li className=""><a className="font-dm text-lg hover:underline decoration-4 decoration-[#7000ff]" href="#">cookies</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t-4 border-black pt-8">
<p className="font-dm font-bold text-sm">© 2024 neobrutal inc.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="flex items-center justify-center hover:bg-[#ccff00] transition-colors brutal-shadow-sm w-12 h-12 border-black border-2 rounded-full" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#7000ff] hover:text-white transition-colors brutal-shadow-sm" href="#">
<iconify-icon icon="solar:brand-instagram-linear" width="24"></iconify-icon>
</a>
<a className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-[#ff0099] hover:text-white transition-colors brutal-shadow-sm" href="#">
<iconify-icon icon="solar:brand-tiktok-linear" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
