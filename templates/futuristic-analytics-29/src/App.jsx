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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<aside className="w-64 border-r border-slate-800/60 hidden:flex flex-col p-5 bg-slate-950/50 backdrop-blur-xl sticky top-0 h-screen">
<div="mb-10 px-1"="">
     span className="text-xl tracking-tighter font-semibold text-slate100"&gt;S C O U T E R

<nav="flex flex-"="" flex-col="" gap1.5="">
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium textlate-100 bg-slate-800/ rounded-lg border border-slate-700/ shadow-sm" href="">
<iconify-icon className="-lg text-orange-400" icon="solar:widget" stroke="1.5"></iconify-icon>metry
      </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium-slate-400 hover:text-slate-100 hover-slate-800/30 rounded transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear" strokeWidth="1.5">
<a 30="" ="flex="" font-medium="" gap-3="" hover-slate-800="" hover:text-s-100="" href="#" items-center="" px-="" py-2="" rounded-lg="" text-slate-="" text-sm="" transition-colors"="">
<iconify-icon className="text-lg" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon> Energy Output
 </a>
<a className="flex items-center gap-3 px-3 py- text font-medium textlate-400 hover:text-slate-100 hover:bg-slate-800/30 rounded-lg transition-colors" href="#">
<iconify-icon className="text-lg" icon="solarmap-point-linear" strokeWidth="1.5"></iconify-icon> Sector Map
      </a>
<a className="flex items-center gap-3 px-3 py- text-sm font textlate-400 hover:textlate-100 hover:bg-slate-80030 rounded-lg transition-colors mt6" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"> Preferences
      </iconify-icon></a>

<div className="mt-auto-t border-slate-800/60 pt-4- flex items-center gap-3">
      &lt; classw-8 h- rounded-full bg-slate-800 border borderlate-700 flex items-center justify text-xs font-medium text-slate-300"&gt;
        <iconify-icon -width15"="" icon="solar:user-linear">
<div className="flex flex-col">
<span className="text-sm font-medium textlate-200B. Brief&lt;/span&gt; &lt;span class=" text-slate-500"="" text-xs="">Lead Engineer
 
    </span></div>
</iconify-icon></div></iconify-icon></a></nav="flex></div="mb-10></aside>
<main className="flex-1 flex flex-col min-w-0">
<header 80="" backdrop-blur-md-"="" bglate950="" border-b="" border-slate-="" classh-16="" flex="" items-center="" justify-between="" px-6="" sticky="" top-0="">
<div className="flex-center-4 flex-1">
<div className="relative w max-md sm:block">
<ify-icon className="absolute-3 top-1/2 -translate-y-1/2 text-slate-500-lg" iconsolar:magnifer-linear="" strokeWidth="1.5">
<input className="w-full bg-slate-900/50 border border-slate-800 text-slate-200 text-sm rounded-full pl10 pr-4 py-1.5 focus:outline focus-orange500/50 focus:ring-1:ring-orange-500/50 transition-all placeholder-s-600 shadow-sm" placeholder="Search entities, signatures..." type="text"/>
</ify-icon></div>
</div>
<div classflex="" gap-6"="" items-center="">
<label className="flex items-center cursor-pointer gap- group">
<span className="text-xs font-medium text-slate-500 uppercase tracking-widest group-hover:text-slate-300 transition-col">Tactical Lens</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-9 h-5 bg-slate-800 rounded-full peer peer-checked:bg-green-500/20 peer-checked:border-green-500/ border border-slate-700 transition-all">
<div className="absolute left-1 top-1-slate-400 w-3 h-3 rounded-full transition peer-checked:translate-x-4 peer-checked:bg-green-400 shadow-sm shadow-black/50">
</div>
</div></div></label>
<button className="w-8 h-8 flex items-center justify-center text-s-400 hover:text-slate-200 transition-colors relative">
<div className="absolute top-1 right1 w-1.5 h-1.5 bg-orange500-full"></div>
<iconify-icon icon="solar:-linear className=" strokeWidth="1.5" text-xl"=""></iconify-icon>
</button>
</div></header>
<div className="-4 md:p-8 max-w-7xl mx-auto-full flex flex-col gap-8 &lt;div class=" flex="" gap-1"="">
<h1 classtext-3xl="" font-semibold="" text-slate-100"="" tracking="">Global Telemetry</h1>
 &lt; className="text-sm textlate-500"&gt;Real-time planetary and entity power level analysisp&gt;
      </div>
<div="grid grid-cols-1="" md:grid-cols-3-4"="">
<div 40="" 80="" border="" border-slate-800="" classbglate900="" flex="" flex-col="" gap-4="" group="" overflow-hidden="" p-5="" relative="" rounded-2xl="" shadow-sm"="">
<div className="absolute -right-6 -top-6 w-32 h- bg-green-500/ rounded-full blur2xl group-hover:bg-green-500/10 transition-colors"></div>
<div className="flex items-center justify-between relative z-10">
<span classtext="" font="" text-slate500="" tracking-widest"="" uppercase="">Peak Power Level</span>
<iconify-icon className="text-green-400/70 text-lg" icon="solar:radar-linear" stroke="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-1 relative-">
<span className="text-4xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to from-slate-100 to-slate-400 font-mono">
              &gt; 9,000
            </span>
<div className="flex-center gap-2">
<span classtext-xs="" flex="" font-medium="" items-center-1"="" text-green-400="">
<iconify-icon icon="solar:alt-arrow-up-linear" stroke-width2iconify-icon=""> %
 </iconify-icon></span>
              &lt; className="text text-slate-500"&gt;surging rapidly
</div>
<div className="mt-2 text-xs text-slate400 flex items-center gap-1.5 relative z-10">
<div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse shadow-[0_0_8px_rg(249,115,22,0.6)]"></div>
            Source: Sector 4 (Wastelands)
          </div>
</div>

       div className="bg-slate-900/40 border-slate-800/ rounded-2xl p-5 flex flex-col gap-4 shadow-sm"&gt;
          <div className="flex items-center justify-between">
<span className="text-xs font text-slate-500 uppercase trackingidest">Active Entities</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:users-group-rounded-linear" strokeWidth="15"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<span className="text-3xl font-semibold tracking-tight text-slate-100">14</span>
<span 40="" 80="" bg-slate-900="" border-slate800="" className="text-xs text-slate-500Currently in combat&lt;/span&gt; &lt;/div&gt; &lt;/div&gt; &lt; class=" flex="" flex-col-4="" p-5="" rounded-2xl="" shadow-sm"="">
<div className="flex items-center justify-between &lt;span class=" font-medium="" text-s-="" text-xs="" tracking-widest"="" uppercase=""> Ki Activity</div></span>
<iconify-icon className="text-slate-400 text-lg" iconsolar:chart-square-linear"="" strokeWidth="1.5">
</iconify-icon></div>
<div className="flex items-end gap-.5 h-12 mt-2">
<div className="flex-1 bg-slate-800 rounded-sm h-[20%]"></div>
<div className="flex-1 bg-slate- rounded-t-sm h-[35%]">
            &lt; className="flex-1 bg-slate- rounded-t-sm h-[%]"&gt;</div>
<div className="flex-1 bg-slate-800 rounded-sm h-[60%]">
<div className="flex1 bg-slate-800 rounded-t-sm-[90%] relative group">
<div className="absolute inset-0 bg-orange-500/20 rounded-t-sm border-t border-orange-500">
</div>
<div className="flex-1 bg-slate-800 rounded-t-sm h-[75%]"></div>
<div className="flex-1 bg-s-800 rounded-t-sm h-[40%]">
</div>
<div 40="" 80="" border="" border-slate-800="" className="grid grid-cols1 lg:grid-cols-3 gap-6 &lt;div class=" flex="" flex-col="" lg:col-span-2-slate-900="" overflow="" rounded2xl="" shadow-sm"="">
<div className="-4 px-6 border-b border-s-800/60 flex items-center justify-between-slate-900/20">
<div className="flex-center gap-2">
<div className="w-2 h-2 rounded-full bg-orange- animate-pulse"></div>
<h2 classtext-sm="" font="" text-slate-200"="">Livemetry: Training</h2>
</div>
<button className="text-xs text-slate-400 hover-slate-200 flex items-center-1 transition-colors Full Diagnostics &lt;icon-icon icon=" solar:arrow-right"="" strokeWidth="1.5">
</button>
</div>
<div className="-6 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
<div className="relative w-48 h-40 flex-shrink0 perspective-1000 bg-slate-950/80 rounded-xl border border-s-800/80 overflow flex items-center justify-center shadow-inner">
<div className="absolute inset-0 bg-[radial(circle_at_center,rgba(255,255,255,0.04)_0%,transparent_100%)]"></div>
<div className="animate-[shockwave-burst_.8s_ease-out_infinite] w-16 h-16 z- border-slate100/80 border rounded-full absolute top-/ left-1/2 shadow-[0_0_20px_rgba(255,255,255,05"></div>

                &lt; className="absolute top-1/2 left-1/2 preserve-3d animate-[clash-goku_0.8s_cubic-bezier(0.,0,0.2,1)_infinite] z-20"&gt;
                  <div="absolute --12="" -ml-8="" 0="" 2="" 30="" 40="" animate-pulse"="" bg-gradient-to-t="" blur-xl="" from-500="" h-24="" left-1="" rounded-full="" shadow-[0_0_20_rg(249,115,22,.4)]="" style={{transform: 'rotateY90deg) translateZ(-10)'}} to-300="" top-1="" via-orange-500="" w16=""></div="absolute></div>
<div className="cuboid" style--w:16px;--h:16px;--d:px;--x:0px;--y:-32px;--:0px;--rx:0deg;--ry:0deg;--rz:0deg;--:#fdba74;"=""><div classface"=""></div><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div></div>
<div className="cuboid" style={{'--w': '22px', '--h': '14px', '--d': '20px', '--x': '0px', '--y': '-47px', '--rx': '0deg', c: '#fde047'}}><div classface"=""></div><div className="face"></div><div classface"=""></div>&lt; className="face"&gt;</div><div className="face"></div></div>
 &lt; className="cub"="--w:10px;h:14px;--d:10px;x0;--y:-55px;--z:5px;rx:-20deg;--ry:0deg;--rz:0deg;c:#fde047;"&gt;<div className="facediv&gt;&lt;div class=" face"=""></div>&lt; className="face"&gt;</div><div className="face"></div><div className="face"></div><div className="face"></div></div>
<div classcub"="--w:20;--h:24px;--d:12;--x:0px;--y:-12px;z:0px;--rx:0deg;--ry:0deg;--rz:0deg;--c:#ea580c;"><div className="face"><div className="face"></div><div className="face"></div><div className=""></div><div className="face"></div></div>
<div className="cuboid" style={{w: '22px', '--d': '14px', '--x': '0px', '--y': '2px', z: '0px', '--rx': '0deg', '--ry': '0', '--rz': '0deg', '--c': '#1e3a8a'}}><div classface"=""></div><div className="face"></div><div classface"=""></div><div className="face"></div><div className="facediv&gt;&lt;div class=" face"="">
<div className="cuboid animate-[goku-punch-arm_0.8s_cubic-bezier(0.,0,0.2,1)_infinite style--w:8px;--:px;--d:8px;--c:#ba74;"><div className="face"></div><div="face"></div="face"></div><div classface"=""></div><div className="face"></div></div>
<div ="--w:8px;--h:24px;--d:8;c:#fd74;"="" className="cub animate-[goku--arm_0.8s_ease-in-out_in]"><div className="face"></div><div className="facediv&gt;&lt;div class=" face"=""></div><div className="face"><div classface"=""></div></div>
<div className="cuboid animate-[goku-left_0.8s_ease-in-out_infinite]" style={{'--w': '9px', '--h': '24px', '--d': '9px'}}><div className=""></div><div className="face"></div><div className="face"></div>&lt; className="face"&gt;</div><div className="face"><div className="face"></div>
<div --:9px;--h:24px;--d:9px;--c:#580c;"="" className="cuboid animate-[goku-leg-right_.8s_ease-in-out_infinite style={{}}face"></div><div className="face"><div className="face" classfacedivdiv=""><div className="face"></div><div="face"></div="face"></div></div>
</div>
<div className="absolute-1/2 left-1/2 preserve-3d animate-[clashgeta_0.8s_cubic-bezier(0.4,0,0.2,1)_infinite] z20">
<div="absolute -ml-8="" -mt-12="" 0-cyan-500="" 2="" 2-1="" 30="" 40="" animate-pulse"="" bg-gradient-to-t="" blur-xl="" from-cyan-500="" h-="" rounded-full="" shadow-[0_0_20px_rg(,211,238,0.)]="" style={{: 'rotateY(-90deg) translateZ(-10px)'}} to-400="" top1="" w-16=""></div="absolute></div>
<div="preserve-3d" style={{transform: 'rotateY(-90deg) scale(0.5) translateY(10px)'}}>
                   div className="cuboid" style={{'--w': '16px', '--h': '16px', '--d': '16px', '--x': 'px', '---': '-32px', '--z': '0px', '--rx': '0deg', '--ry': '0deg', '--rz': '0deg', '--c': '#fdba74'}}&gt;<div className="face"></div><div className="face"></div>&lt; className="face"&gt;</div="preserve-3d"></div><div className="face"></div><div className="facediv&gt;&lt;div class=" face"=""></div>
<div className="cub" style={{w: '18', h: '24px', '--d': '18px', '--x': '0px', '--y': '-52px', z: '0px', '--rx': '0', '--ry': '0deg', '--rz': '0deg', c: '#fde047'}}><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"><div className="facediv&gt;&lt;div=" face"=""></div></div>
<div className="cuboid" style={{'--w': '22px', '--h': '16px', '--d': '14px', x: '0px', '--y': '-16px', '--z': '0px', '--rx': '0deg', '--rz': '0deg', '--c': '#ffafc'}}>&lt; className="face"&gt;</div><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div></div>
                    &lt; className="cuboid" style={{'--w': '18px', '--h': '10px', '--d': '10', '--x': '0px', '--y': '-3px', '--z': '0px', '--rx': '0deg', ry: '0deg', rz: '0deg', '--c': '#1e3a8a'}}&gt;<div className="face"></div><div className="face"><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div></div>
<div className="cuboid" style--:10px;--h:6px--d:16px;--x:-14px;--y:-px;--:0px;--rx:0deg;--ry:0deg;--rz:15deg;--c:#eab308;"=""><div className="face"></div><div="face"></div="face"></div>&lt; className="face"&gt;</div><div className="face"></div><div className="face"></div><div className="face"></div></div>
<div className="cuboid" style={{'--w': '10px', '--h': '6px', '--d': '16px', '--x': '14px', '--y': '-22px--z:0px--rx:0deg', '--ry': '0deg', '--rz': '-15deg--c:#eab308'}}><div className="face"></div><div="face"></div="face"></div><div className="face"></div><div className="face"></div><div className="face"></div></div>
<div className="cuboid animate-[vegeta-p-arm0.8s_cubic-bezier(0.4,0,.2,1)_infinite]" style={{'--w': '8px', '--h': '24px', '--d': '8px', '---': '#f8fafc'}}><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div>&lt; class="facediv&gt;</div>
<div --w:8px;--h:24px;--d:px;--c:#1e3a8a;"="" className="cuboid animate-[vegeta-guard-arm_0.8s_ease-in-out_infinite style={{}}face"><div className="face"></div><div className="face"></div><div classface"=""></div><div className="face"></div><div className="face"></div></div>
                   div className="cuboid animate-[geta-left_0.8s_ease-in-out_infinite]" style={{'--w': '9', '--h': '24px', '--d': '9px', '--c': '#1e38a'}}&gt;<div className="facedivdiv class=" face"=""><div classface"=""></div><div className="face"></div><div className="face"></div>
<div className="cuboid animate-[vegeta-leg-right_0.8sase-in-out_infinite]" style={{'--w': '9px', '--h': '24px', '---': 'px', '--c': '#f8fafc'}}><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div><div className="face"></div></div>
</div>
</div>
</div>

             div="absolute top-1.5 left-2 text-xs font-mono text-slate-500 tracking-widest style="font-size:0.5rem3 HOLO-FEED</div>
<div className="bottom15 right-2 text-xs fontono text-orange-500 tracking-w animate-pulse" style={{fontSize: '0.rem'}}>CLASH DETECTED</div>
</div>
<div="flex flex-col="" gap-6-full"="">
<div>
<div className="flex flex-wrap items gap-3 mb-1">
                  &lt;3="text-2xl font-semibold tracking-tight-slate-100"&gt;Goku Vegeta
<span className="bg-orange-900/20 text-orange-400 text-xs px-2 py0.5 rounded-md border border-orange-800/40">High-Intensity Sparring</span>
<p className="text text-slate-500">Species Saiyan • Current State: Transformed • Location: Gravity Chamber (400G)</p>
</div>
<div className="flex flex-col gap-4">
<div classflex-col="" gap-1.5"="">
<div classflex="" items-center-between="" text-xs"="">
<span className="text-s-400">Combined Kinetic Output</span>
<span className="text-orange-400 font-mono">140% (Overload)
                  </span></div>
<div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden flex">
                   div className="-gradient-to-r from-orange-600 to-orange-400 h-full w-full rounded-full shadow-[0_0_10pxba249,115,220.5)]"&gt;</div>
<div className="flex flex-col gap-1.">
                  &lt; className="flex items-center-between text-xs"&gt;
                    <span className="text-slate-400">Chamber Stress Level</span>
                   span="text-slate-300 font-mono"&gt;89%
                 div                  <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden">
<div className="bg-red-50080 h-full-full-[89%] transition-all duration1000"></div>
</div>
</div>
<div className="flex flex-col gap-1.5">
                  &lt; className="flex items-center justify-between text-xs"&gt;
                    <span className="text-slate-">Aura Fluctuation</span>
<span className="text-slate- font-mono">Extreme</span>
</div>
<div className="w-full-slate-800/50 rounded-full h-1.5 overflow-hidden">
<div 40="" 80="" bg-slate-900="" border="" border-slate-800="" className="bg-blue-400 h-full rounded-full-full opacity-70 animate-pulsediv&gt; div&gt; &lt;/div&gt; &lt;/div&gt; div&gt; div&gt; &lt;/div&gt; &lt;div class=" flex="" flex-col="" overflow-hidden-sm"="" rounded-2xl="">
<div className="p-4 px-5 border-b-slate-800/60 flex items-center-2 bg-slate-900/20">
<div className="w-2 h-2-full-red-500 animate-pulse">
            &lt;2 className="text-sm font-medium text-s-200"&gt;System Alerts
</div>
<div className="flex flex-col-y divide-s-/40 p-1.5 overflow-y-auto max-[px">
            &lt; className="p-3 flex gap-3 hover:bg-slate-80030-xl transition-colors cursor-pointer group"&gt;
              <div className="w- h-8-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center flex-shrink-0 mt05 group-hover:bg-red-500/20 transition-colors">
<iconify-icon className="text-red-400" iconsolar:danger-triangle-linear"="" strokeWidth="1.5"></iconify-icon>
</div>
              &lt; className="flex flex-col gap-0."&gt;
                <span className="text-sm font-medium text-slate-200">Massive Energy</span>
<span className="text text-slate-500-snug">Atmospheric disturbance detected Power scaling exponentially.</span>
<span className="text-xs textlate-600 mt-1 uppercase tracking-widest font-mono" style={{fontSize: '0.625rem'}}>Just Now</span>
</div>
</div>
<div className="p3 flex gap-3 hover:bg-slate800/30 rounded-xl transition-colors cursor-pointer group">
<div className="w-8 h-8 rounded-lg bg-slate-800/50 border-slate-700/ flex items-center justify-center flex-sh-0 mt-0.5-hover:bg-slate-800 transition-colors">
               icon-icon icon="solar:shield-check-linear" className="text-slate-400" stroke="1.5"&gt;
</div>
<div classflex="" flex-col="" gap-0.5"="">
<span classtext="" font-medium="" text-slate-200"="">Gravity Chamber Secure</span>West City facility smoothly at 400G despite impactsspan&gt;
                <span className="-xs text-slate-600 mt-1 uppercase tracking-widest font-mono" style={{fontSize: '0.625rem'}}>- 45m</span>
</div>
           div&gt;
            <div className="p-3 flex gap-3 hover:bg-s-800/30 rounded-xl transition-colors cursor-pointer group">
<div className="w8-8 rounded-lg bg-green-500/ border border-green-500/20 flex items justify-center flex-shrink-0 mt-.5 group:bg-green-/ transition-colors">
<iconify-icon 1.5"="" className="text-green-400 stroke=" icon="solar:radar2-linear">
</iconify-icon></div>
<div className="flex flex-col gap-0.5">
<span className="text-sm font-medium text-slate-200">Artifacts Located</span>
<span className="text-xs text-slate-500 leading-snug">Global sweep identified  signatures matching target.
 <span className="text-xs text-slate-600 mt-1 uppercase tracking-widest font-mono" style={{fontSize: '.rem'}}>-3</span>
</span></div>
</div>
</div>
</div>
<div className="bg-slate-900/40 border borderlate-800/80 rounded-xl flex flex-col overflow-hidden shadow-sm">
        &lt; className="p-4 px-6 border-b borderlate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/20"&gt;
          <h2 className="text-sm font-medium text-slate-200">Tracked Entities</h2>
<div="flex 50="" bg-slate-950="" border="" border-slate-800="" font-medium="" gap-2="" hover:border-slate700="" hover:text-slate-300="" items-center="" px-3="" py1.5-pointer="" rounded-lg="" shadow-sm"="" text-slate-400="" text-xs="" transition-all="">
            Filter: High Threat <icon-icon 1.5"="" icon=":alt-arrow-down-linear strokeWidth=">
</icon-icon></div="flex></div>
<div classoverflow-x-auto"="">
<table className="w-full text-left border-collapse-nowrap">
<thead>
<tr className="border-b border-slate-800/60 text-xs text-slate-500 uppercase tracking-widest bg-slate-95030">
<th className="px- py-4-medium">Subjectth&gt;
                <th className="px- py-4 font-medium">Affiliation</th>
                &lt; className="px-6-4 font-medium text-right"&gt;Base Reading</th>
<th="px-6 font-medium"="" py-4="">Current Status
              </th="px-6></tr>
</thead>
<tbody 40"="" classdivide-y="" divide-slate800="">
             tr className="hover:bg-slate-800/20 transition-colors group"&gt;
                <td <div="" className="w-8 h-8-full bg-s-800/80 flex items-center justify-center flex-sh-0 border border-slate-/50 group-hover:border-slate-600 transition-colors" flex="" gap-3="" items-center="">
<ify-icon className="text-slate400 text-sm" icon="solar-linear" strokeWidth="1.">
</ify-icon></td></tbody></table></div>
<div className="flex flex-col">
<span className="-sm font-medium text-slate-">Vegeta</span>Saiyan Royal
</div>
</div>

<td className="px-6-4 text-sm text-slate-400">Earth (Resident)</td>
<td className="px-6 py-4 text-sm text-slate-300 text-right font-mono tracking-tight2,450,000&lt;/td&gt; &lt;td class=" px-="" py-4"="">
<span className="inline-flex items-center gap-1. px-25 py-1 rounded-md text-xs font-medium bg-500/ text-orange-400 border border-orange-500/20">
<div className="w-1.5 h1.5 rounded-full bg-orange-500 animate-pulse"> Combat
                  </div></span>
</td>

<tr classhover:bg-s-800="" group"="" transition-colors="">
 &lt; className="px-6 py-4"&gt;
 &lt; className="flex items-center gap-3"&gt;
                    &lt; className="w8 h- rounded-full bg-slate-800/80 items-center justify-center flex-shrink0 borderlate-700/50 group-hover:border-slate-600 transition-colors                      <iconify-icon class="text-purple- text-sm" icon="solar:ghost-linear" stroke-width1.5"=""></iconify-icon>
<div className="flex flex-col">
                      &lt; className="text-sm font-medium text-slate-200"&gt;Majin Buu
<span classtext-xs="" span="" textlate-500unknown<="">
</span></div>
</tr></div>
<td className="px-6 py-4 text textlate-400">Neutral</td>
<td className="-6 py-4 text-sm text-slate-500 text font-mono italic tracking-tight">Unmeasurable</td>
<span className="inline-flex items-center gap-1.5 px-25 py-1 rounded-md text-xs font-medium bglate800 text-slate-400 border border-slate-700/50">
<div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Dorm
                  </span>


              &lt; className="hover:bg-slate-800/20 transition-colors group"&gt;
 <td className="px-6 py-4">
 &lt; className="flex items-center gap-3"&gt;
                    <div .5"="" :shield-warning-linear"="" className="text-red-400 text-sm strokeWidth=">
</div>
<div className="flex flex-col">
<span className="-sm font-medium-slate-200">Frieza</span>
<span className="text-xs text-slate-500">Galactic Emperor</span>
</div>
</td></div>

<td className="px-6 py-4 text-sm text-slate400">Hostile Forces</td>
                &lt; className="px-6 py-4 text-sm textlate300 text-right font-m tracking-tight"&gt;120,000,000+
                &lt; className="px-6 py-4"&gt;
 <span className="inline-flex items gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium-red500/10-red-400 border border-red-/">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div> Aggressive
                  </span>


</div>

</div="flex></div="grid></main>

    </>
  );
}
