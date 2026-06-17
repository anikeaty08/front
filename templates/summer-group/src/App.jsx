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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
950: '#082f49',
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();
    
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
      

<div bis_size='{"x":0,"y":0,"w":1905,"h":874,"abs_x":0,"abs_y":43}' className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="NMlvqnkICwYYJ6lYb064"></div>

</div></div>

<div bis_size='{"x":0,"y":0,"w":1905,"h":874,"abs_x":0,"abs_y":43}' className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div bis_size='{"x":-190,"y":-87,"w":640,"h":640,"abs_x":-190,"abs_y":-44}' className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full blur-[120px] mix-blend-screen opacity-40 animate-pulse bg-brand-600/20"></div>
<div bis_size='{"x":1440,"y":174,"w":560,"h":560,"abs_x":1440,"abs_y":217}' className="absolute top-[20%] right-[-5%] w-[35rem] h-[35rem] rounded-full blur-[100px] mix-blend-screen opacity-30 bg-indigo-600/20"></div>
<div bis_size='{"x":381,"y":161,"w":800,"h":800,"abs_x":381,"abs_y":204}' className="absolute bottom-[-10%] left-[20%] w-[50rem] h-[50rem] rounded-full blur-[130px] opacity-40 bg-blue-900/10"></div>
</div>

<header bis_size='{"x":0,"y":24,"w":1905,"h":52,"abs_x":0,"abs_y":67}' className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav bis_size='{"x":616,"y":24,"w":672,"h":52,"abs_x":616,"abs_y":67}' className="flex items-center justify-between px-2 py-2 bg-[#0a0a0f]/80 backdrop-blur-md border rounded-full shadow-2xl w-full max-w-2xl border-white/10 shadow-black/50">

<div bis_size='{"x":625,"y":34,"w":176,"h":32,"abs_x":625,"abs_y":77}' className="flex items-center gap-2 pl-4 pr-6">
<div bis_size='{"x":641,"y":34,"w":32,"h":32,"abs_x":641,"abs_y":77}' className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br shadow-lg shadow-brand-500/20 from-brand-400 to-indigo-600">
<svg bis_size='{"x":649,"y":42,"w":16,"h":16,"abs_x":649,"abs_y":85}' className="lucide lucide-zap w-4 h-4 text-white fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":651,"y":43,"w":12,"h":13,"abs_x":651,"abs_y":86}' className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<span bis_size='{"x":681,"y":40,"w":96,"h":20,"abs_x":681,"abs_y":83}' className="text-sm font-medium tracking-tight text-white">Summer Group</span>
</div>

<div bis_size='{"x":882,"y":42,"w":207,"h":16,"abs_x":882,"abs_y":85}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":882,"y":42,"w":53,"h":16,"abs_x":882,"abs_y":85}' className="text-xs font-medium transition-colors text-slate-400 hover:text-white" href="#">Solutions</a>
<a bis_size='{"x":968,"y":42,"w":49,"h":16,"abs_x":968,"abs_y":85}' className="text-xs font-medium transition-colors text-slate-400 hover:text-white" href="#">Features</a>
<a bis_size='{"x":1049,"y":42,"w":40,"h":16,"abs_x":1049,"abs_y":85}' className="text-xs font-medium transition-colors text-slate-400 hover:text-white" href="#">Pricing</a>
</div>

<div bis_size='{"x":1170,"y":33,"w":108,"h":34,"abs_x":1170,"abs_y":76}' className="pl-6 pr-2">
<a bis_size='{"x":1194,"y":33,"w":76,"h":34,"abs_x":1194,"abs_y":76}' className="flex items-center justify-center px-5 py-2 text-xs font-medium transition-all bg-gradient-to-r rounded-full hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.5)] hover:scale-105 border text-white from-brand-600 to-indigo-600 border-white/10" href="#">
                    Log in
                </a>
</div>
</nav>
</header>
<main bis_size='{"x":0,"y":0,"w":1905,"h":1373,"abs_x":0,"abs_y":43}' className="flex flex-col pt-32 pr-4 pb-20 pl-4 relative items-center">

<div bis_size='{"x":551,"y":128,"w":802,"h":348,"abs_x":551,"abs_y":171}' className="max-w-4xl mx-auto text-center mb-16 relative z-10">
<h1 bis_size='{"x":551,"y":128,"w":802,"h":144,"abs_x":551,"abs_y":171}' className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter font-work-sans mb-8 drop-shadow-2xl">
    LEADS GENERATED,<br bis_size='{"x":1275,"y":122,"w":0,"h":84,"abs_x":1275,"abs_y":165}' className=""/>
<span bis_size='{"x":551,"y":194,"w":802,"h":84,"abs_x":551,"abs_y":237}' className="text-transparent bg-clip-text bg-gradient-to-b via-brand-500 from-brand-300 to-indigo-600">
                    OUTREACH AUTOMATED.
                </span>
</h1>
<p bis_size='{"x":616,"y":304,"w":672,"h":84,"abs_x":616,"abs_y":347}' className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-normal leading-relaxed text-slate-400">
                Coordinate and automate your agency's pipeline from a single dashboard. 
                Keep your team focused on closing while Summer Group handles the outreach.
            </p>
<div bis_size='{"x":551,"y":428,"w":802,"h":48,"abs_x":551,"abs_y":471}' className="flex flex-col sm:flex-row gap-6 items-center justify-center">

<button className="cta-button group" type="button">
<div className="points_wrapper">
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
<i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i><i className="point"></i>
</div>
<span className="inner">
                        Start 7 Days Trial
                        <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>

<div className="inline-block group relative">
<button className="group inline-flex min-w-[140px] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:scale-105 border border-white/10 text-sm font-medium text-white/80 hover:text-white tracking-tight bg-white/5 backdrop-blur-xl rounded-full py-3 px-5 relative items-center justify-center gap-2">
<svg className="lucide lucide-play-circle h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
<span className="relative">View Demo</span>
<span aria-hidden="true" className="transition-all duration-300 group-hover:opacity-80 opacity-20 w-[70%] h-[1px] rounded-full absolute bottom-0 left-1/2 -translate-x-1/2" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
</button>
<span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 z-0 h-6 w-44 -translate-x-1/2 rounded-full opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100" style={{background: 'radial-gradient(60% 100% at 50% 50%, rgba(139, 92, 246, .55), rgba(139, 92, 246, .28) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)'}}></span>
</div>
</div>
</div>

<div bis_size='{"x":376,"y":540,"w":1152,"h":753,"abs_x":376,"abs_y":583}' className="relative w-full max-w-6xl mx-auto perspective-1000 group">

<div bis_size='{"x":372,"y":536,"w":1160,"h":761,"abs_x":372,"abs_y":579}' className="absolute -inset-1 bg-gradient-to-r from-brand-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-1000 to-indigo-600"></div>
<div bis_size='{"x":376,"y":540,"w":1152,"h":753,"abs_x":376,"abs_y":583}' className="relative bg-[#0d0e14] border rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl border-white/10">

<div bis_size='{"x":377,"y":541,"w":1150,"h":51,"abs_x":377,"abs_y":584}' className="flex items-center px-4 py-3 border-b bg-white/[0.02] border-white/5">
<div bis_size='{"x":393,"y":560,"w":52,"h":12,"abs_x":393,"abs_y":603}' className="flex space-x-2 mr-4">
<div bis_size='{"x":393,"y":560,"w":12,"h":12,"abs_x":393,"abs_y":603}' className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div bis_size='{"x":413,"y":560,"w":12,"h":12,"abs_x":413,"abs_y":603}' className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div bis_size='{"x":433,"y":560,"w":12,"h":12,"abs_x":433,"abs_y":603}' className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div bis_size='{"x":461,"y":553,"w":986,"h":26,"abs_x":461,"abs_y":596}' className="flex-1 text-center">
<div bis_size='{"x":872,"y":553,"w":163,"h":26,"abs_x":872,"abs_y":596}' className="inline-flex items-center px-3 py-1 rounded-md border text-xs bg-white/5 border-white/5 text-slate-400">
<svg bis_size='{"x":885,"y":560,"w":12,"h":12,"abs_x":885,"abs_y":603}' className="lucide lucide-lock w-3 h-3 mr-2 opacity-50" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":887,"y":565,"w":9,"h":5,"abs_x":887,"abs_y":608}' height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path bis_size='{"x":889,"y":561,"w":5,"h":4,"abs_x":889,"abs_y":604}' d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            app.summergroup.io
                        </div>
</div>
<div bis_size='{"x":1447,"y":566,"w":64,"h":0,"abs_x":1447,"abs_y":609}' className="w-16"></div> 
</div>

<div bis_size='{"x":377,"y":592,"w":1150,"h":700,"abs_x":377,"abs_y":635}' className="flex h-[600px] md:h-[700px] text-sm">

<aside bis_size='{"x":377,"y":592,"w":256,"h":700,"abs_x":377,"abs_y":635}' className="w-64 border-r p-4 flex flex-col bg-[#0b0c11] border-white/5">

<div bis_size='{"x":393,"y":608,"w":223,"h":58,"abs_x":393,"abs_y":651}' className="flex items-center justify-between p-2 mb-6 rounded-lg cursor-pointer border border-transparent transition-colors hover:bg-white/5 hover:border-white/5">
<div bis_size='{"x":402,"y":617,"w":127,"h":40,"abs_x":402,"abs_y":660}' className="flex items-center gap-3">
<img alt="User" bis_size='{"x":402,"y":621,"w":32,"h":32,"abs_x":402,"abs_y":664}' className="w-8 h-8 rounded-full border border-white/10" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div bis_size='{"x":446,"y":617,"w":83,"h":40,"abs_x":446,"abs_y":660}' className="flex flex-col">
<span bis_size='{"x":446,"y":617,"w":83,"h":20,"abs_x":446,"abs_y":660}' className="text-sm font-medium text-white">Mason Mark</span>
<span bis_size='{"x":446,"y":637,"w":83,"h":20,"abs_x":446,"abs_y":680}' className="text-[10px] text-slate-500">Pro Plan</span>
</div>
</div>
<svg bis_size='{"x":591,"y":629,"w":16,"h":16,"abs_x":591,"abs_y":672}' className="lucide lucide-chevron-down w-4 h-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":595,"y":635,"w":8,"h":4,"abs_x":595,"abs_y":678}' d="m6 9 6 6 6-6"></path></svg>
</div>

<div bis_size='{"x":393,"y":690,"w":223,"h":198,"abs_x":393,"abs_y":733}' className="space-y-1 mb-8">
<a bis_size='{"x":393,"y":690,"w":223,"h":36,"abs_x":393,"abs_y":733}' className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors group text-slate-400 hover:text-white hover:bg-white/5" href="#">
<svg bis_size='{"x":405,"y":700,"w":16,"h":16,"abs_x":405,"abs_y":743}' className="lucide lucide-layout-dashboard w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect bis_size='{"x":407,"y":702,"w":4,"h":6,"abs_x":407,"abs_y":745}' height="9" rx="1" width="7" x="3" y="3"></rect><rect bis_size='{"x":414,"y":702,"w":4,"h":3,"abs_x":414,"abs_y":745}' height="5" rx="1" width="7" x="14" y="3"></rect><rect bis_size='{"x":414,"y":708,"w":4,"h":6,"abs_x":414,"abs_y":751}' height="9" rx="1" width="7" x="14" y="12"></rect><rect bis_size='{"x":407,"y":710,"w":4,"h":3,"abs_x":407,"abs_y":753}' height="5" rx="1" width="7" x="3" y="16"></rect></svg>
                                Overview
                            </a>
<a bis_size='{"x":393,"y":730,"w":223,"h":38,"abs_x":393,"abs_y":773}' className="flex items-center gap-3 px-3 py-2 border rounded-md transition-colors shadow-sm text-white bg-white/5 border-white/5" href="#">
<svg bis_size='{"x":406,"y":741,"w":16,"h":16,"abs_x":406,"abs_y":784}' className="lucide lucide-users w-4 h-4 text-brand-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":407,"y":751,"w":9,"h":4,"abs_x":407,"abs_y":794}' d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path bis_size='{"x":417,"y":743,"w":1,"h":5,"abs_x":417,"abs_y":786}' d="M16 3.128a4 4 0 0 1 0 7.744"></path><path bis_size='{"x":419,"y":751,"w":2,"h":3,"abs_x":419,"abs_y":794}' d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle bis_size='{"x":409,"y":743,"w":5,"h":5,"abs_x":409,"abs_y":786}' cx="9" cy="7" r="4"></circle></svg>
                                Leads
                            </a>
<a bis_size='{"x":393,"y":772,"w":223,"h":36,"abs_x":393,"abs_y":815}' className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors group text-slate-400 hover:text-white hover:bg-white/5" href="#">
<svg bis_size='{"x":405,"y":782,"w":16,"h":16,"abs_x":405,"abs_y":825}' className="lucide lucide-send w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":406,"y":783,"w":13,"h":13,"abs_x":406,"abs_y":826}' d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path bis_size='{"x":412,"y":783,"w":7,"h":7,"abs_x":412,"abs_y":826}' d="m21.854 2.147-10.94 10.939"></path></svg>
                                Outreach
                            </a>
<a bis_size='{"x":393,"y":812,"w":223,"h":36,"abs_x":393,"abs_y":855}' className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors group text-slate-400 hover:text-white hover:bg-white/5" href="#">
<svg bis_size='{"x":405,"y":822,"w":16,"h":16,"abs_x":405,"abs_y":865}' className="lucide lucide-bar-chart-3 w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":407,"y":824,"w":12,"h":12,"abs_x":407,"abs_y":867}' d="M3 3v16a2 2 0 0 0 2 2h16"></path><path bis_size='{"x":417,"y":828,"w":0,"h":5,"abs_x":417,"abs_y":871}' d="M18 17V9"></path><path bis_size='{"x":414,"y":825,"w":0,"h":8,"abs_x":414,"abs_y":868}' d="M13 17V5"></path><path bis_size='{"x":410,"y":831,"w":0,"h":2,"abs_x":410,"abs_y":874}' d="M8 17v-3"></path></svg>
                                Analytics
                            </a>
<a bis_size='{"x":393,"y":852,"w":223,"h":36,"abs_x":393,"abs_y":895}' className="flex items-center gap-3 px-3 py-2 rounded-md transition-colors group relative text-slate-400 hover:text-white hover:bg-white/5" href="#">
<svg bis_size='{"x":405,"y":862,"w":16,"h":16,"abs_x":405,"abs_y":905}' className="lucide lucide-settings w-4 h-4 text-slate-500 group-hover:text-brand-400 transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":407,"y":863,"w":11,"h":13,"abs_x":407,"abs_y":906}' d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle bis_size='{"x":411,"y":868,"w":4,"h":4,"abs_x":411,"abs_y":911}' cx="12" cy="12" r="3"></circle></svg>
                                Settings
                                
<div bis_size='{"x":608,"y":876,"w":16,"h":16,"abs_x":608,"abs_y":919}' className="absolute right-0 top-4 translate-x-1/2 translate-y-2 z-20 hidden md:block animate-pulse">
<svg bis_size='{"x":606,"y":874,"w":19,"h":19,"abs_x":606,"abs_y":917}' className="lucide lucide-mouse-pointer-2 w-4 h-4 text-purple-500 fill-purple-500/20 rotate-[-15deg]" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":609,"y":877,"w":13,"h":13,"abs_x":609,"abs_y":920}' d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<span bis_size='{"x":624,"y":884,"w":41,"h":20,"abs_x":624,"abs_y":927}' className="absolute left-4 top-2 bg-purple-500 text-[10px] px-1.5 rounded-sm font-medium text-white">Rafael</span>
</div>
</a>
</div>
<div bis_size='{"x":393,"y":1144,"w":223,"h":132,"abs_x":393,"abs_y":1187}' className="mt-auto">
<p bis_size='{"x":393,"y":1144,"w":223,"h":20,"abs_x":393,"abs_y":1187}' className="text-[10px] uppercase font-semibold mb-2 pl-3 text-slate-600">Active Campaigns</p>
<div bis_size='{"x":393,"y":1172,"w":223,"h":104,"abs_x":393,"abs_y":1215}' className="space-y-1">
<a bis_size='{"x":393,"y":1172,"w":223,"h":32,"abs_x":393,"abs_y":1215}' className="flex items-center gap-2 px-3 py-2 text-xs rounded-md text-slate-400 hover:text-white hover:bg-white/5" href="#">
<div bis_size='{"x":405,"y":1184,"w":8,"h":8,"abs_x":405,"abs_y":1227}' className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                                    Q3 Tech Startups
                                </a>
<a bis_size='{"x":393,"y":1208,"w":223,"h":32,"abs_x":393,"abs_y":1251}' className="flex items-center gap-2 px-3 py-2 text-xs rounded-md text-slate-400 hover:text-white hover:bg-white/5" href="#">
<div bis_size='{"x":405,"y":1220,"w":8,"h":8,"abs_x":405,"abs_y":1263}' className="w-2 h-2 rounded-full bg-brand-500 shadow-[0_0_8px_rgba(14,165,233,0.6)]"></div>
                                    SaaS Founders
                                </a>
<a bis_size='{"x":393,"y":1244,"w":223,"h":32,"abs_x":393,"abs_y":1287}' className="flex items-center gap-2 px-3 py-2 text-xs rounded-md text-slate-400 hover:text-white hover:bg-white/5" href="#">
<div bis_size='{"x":405,"y":1256,"w":8,"h":8,"abs_x":405,"abs_y":1299}' className="w-2 h-2 rounded-full bg-slate-600"></div>
                                    Agency Partners
                                </a>
</div>
</div>
</aside>

<main bis_size='{"x":633,"y":592,"w":894,"h":700,"abs_x":633,"abs_y":635}' className="flex-1 bg-[#0f1117] p-6 dashboard-scroll overflow-y-auto relative">

<div bis_size='{"x":657,"y":616,"w":846,"h":48,"abs_x":657,"abs_y":659}' className="flex items-center justify-between mb-8">
<div bis_size='{"x":657,"y":616,"w":285,"h":48,"abs_x":657,"abs_y":659}'>
<h2 bis_size='{"x":657,"y":616,"w":285,"h":28,"abs_x":657,"abs_y":659}' className="text-xl font-medium mb-1 text-white">Campaign Overview</h2>
<p bis_size='{"x":657,"y":648,"w":285,"h":16,"abs_x":657,"abs_y":691}' className="text-xs text-slate-500">Manage your active outreach and lead generation.</p>
</div>
<div bis_size='{"x":1370,"y":625,"w":133,"h":30,"abs_x":1370,"abs_y":668}' className="flex items-center gap-3">
<button bis_size='{"x":1370,"y":625,"w":133,"h":30,"abs_x":1370,"abs_y":668}' className="flex items-center gap-2 px-3 py-1.5 hover:bg-brand-500 text-xs font-medium rounded-md transition-all shadow-[0_0_15px_-3px_rgba(14,165,233,0.4)] border bg-brand-600 text-white border-brand-400/20">
<svg bis_size='{"x":1383,"y":634,"w":12,"h":12,"abs_x":1383,"abs_y":677}' className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1385,"y":640,"w":7,"h":0,"abs_x":1385,"abs_y":683}' d="M5 12h14"></path><path bis_size='{"x":1389,"y":636,"w":0,"h":7,"abs_x":1389,"abs_y":679}' d="M12 5v14"></path></svg>
                                    New Campaign
                                </button>
</div>
</div>

<div bis_size='{"x":657,"y":696,"w":846,"h":130,"abs_x":657,"abs_y":739}' className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">

<div bis_size='{"x":657,"y":696,"w":271,"h":130,"abs_x":657,"abs_y":739}' className="group relative p-4 rounded-xl bg-[#161821] border hover:border-brand-500/30 transition-all hover:bg-[#1a1d26] border-white/5">
<div bis_size='{"x":674,"y":713,"w":237,"h":40,"abs_x":674,"abs_y":756}' className="flex items-start justify-between mb-4">
<div bis_size='{"x":674,"y":713,"w":40,"h":40,"abs_x":674,"abs_y":756}' className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 flex items-center justify-center shadow-lg shadow-brand-500/20 to-indigo-600">
<svg bis_size='{"x":684,"y":723,"w":20,"h":20,"abs_x":684,"abs_y":766}' className="lucide lucide-users w-5 h-5 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":686,"y":735,"w":11,"h":5,"abs_x":686,"abs_y":778}' d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path bis_size='{"x":697,"y":725,"w":2,"h":6,"abs_x":697,"abs_y":768}' d="M16 3.128a4 4 0 0 1 0 7.744"></path><path bis_size='{"x":700,"y":735,"w":2,"h":4,"abs_x":700,"abs_y":778}' d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle bis_size='{"x":688,"y":725,"w":6,"h":6,"abs_x":688,"abs_y":768}' cx="9" cy="7" r="4"></circle></svg>
</div>
<div bis_size='{"x":867,"y":713,"w":44,"h":26,"abs_x":867,"abs_y":756}' className="px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] text-green-400">
                                        +12%
                                    </div>
</div>
<h3 bis_size='{"x":674,"y":769,"w":237,"h":20,"abs_x":674,"abs_y":812}' className="text-sm font-medium mb-1 text-white">Total Leads</h3>
<p bis_size='{"x":674,"y":793,"w":237,"h":16,"abs_x":674,"abs_y":836}' className="text-xs text-slate-400">2,024 Verified</p>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute bottom-4 right-4 z-20 hidden group-hover:block animate-bounce">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-mouse-pointer-2 w-4 h-4 text-green-500 fill-green-500/20 rotate-[-15deg]" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute left-4 top-2 bg-green-500 text-[10px] text-[#0f1117] px-1.5 rounded-sm font-bold">Simon</span>
</div>
</div>

<div bis_size='{"x":944,"y":696,"w":271,"h":130,"abs_x":944,"abs_y":739}' className="group p-4 rounded-xl bg-[#161821] border hover:border-brand-500/30 transition-all hover:bg-[#1a1d26] border-white/5">
<div bis_size='{"x":961,"y":713,"w":237,"h":40,"abs_x":961,"abs_y":756}' className="flex items-start justify-between mb-4">
<div bis_size='{"x":961,"y":713,"w":40,"h":40,"abs_x":961,"abs_y":756}' className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 to-purple-600">
<svg bis_size='{"x":971,"y":723,"w":20,"h":20,"abs_x":971,"abs_y":766}' className="lucide lucide-mail w-5 h-5 text-white" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":973,"y":728,"w":16,"h":4,"abs_x":973,"abs_y":771}' d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect bis_size='{"x":973,"y":726,"w":16,"h":13,"abs_x":973,"abs_y":769}' height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div bis_size='{"x":1151,"y":713,"w":47,"h":26,"abs_x":1151,"abs_y":756}' className="px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-[10px] text-brand-400">
                                        Active
                                    </div>
</div>
<h3 bis_size='{"x":961,"y":769,"w":237,"h":20,"abs_x":961,"abs_y":812}' className="text-sm font-medium mb-1 text-white">Emails Sent</h3>
<p bis_size='{"x":961,"y":793,"w":237,"h":16,"abs_x":961,"abs_y":836}' className="text-xs text-slate-400">8,402 Delivered</p>
</div>

<div bis_size='{"x":1232,"y":696,"w":271,"h":130,"abs_x":1232,"abs_y":739}' className="group p-4 rounded-xl bg-[#161821] border hover:border-brand-500/30 transition-all hover:bg-[#1a1d26] border-white/5">
<div bis_size='{"x":1249,"y":713,"w":237,"h":40,"abs_x":1249,"abs_y":756}' className="flex items-start justify-between mb-4">
<div bis_size='{"x":1249,"y":713,"w":40,"h":40,"abs_x":1249,"abs_y":756}' className="w-10 h-10 rounded-lg bg-gradient-to-br to-red-500 flex items-center justify-center shadow-lg shadow-orange-500/20 from-orange-400">
<svg bis_size='{"x":1259,"y":723,"w":20,"h":20,"abs_x":1259,"abs_y":766}' className="lucide lucide-message-square w-5 h-5 text-white" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1260,"y":725,"w":16,"h":15,"abs_x":1260,"abs_y":768}' d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<h3 bis_size='{"x":1249,"y":769,"w":237,"h":20,"abs_x":1249,"abs_y":812}' className="text-sm font-medium mb-1 text-white">Replies</h3>
<p bis_size='{"x":1249,"y":793,"w":237,"h":16,"abs_x":1249,"abs_y":836}' className="text-xs text-slate-400">504 Responses</p>
</div>
</div>

<div bis_size='{"x":657,"y":858,"w":846,"h":334,"abs_x":657,"abs_y":901}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":657,"y":858,"w":556,"h":334,"abs_x":657,"abs_y":901}' className="md:col-span-2 space-y-4">
<div bis_size='{"x":657,"y":858,"w":556,"h":20,"abs_x":657,"abs_y":901}' className="flex items-center justify-between mb-2">
<h3 bis_size='{"x":657,"y":858,"w":112,"h":20,"abs_x":657,"abs_y":901}' className="text-sm font-medium text-white">Recent Activities</h3>
<button bis_size='{"x":1175,"y":858,"w":37,"h":20,"abs_x":1175,"abs_y":901}' className="text-[10px] text-brand-400 hover:text-brand-300">View All</button>
</div>

<div bis_size='{"x":657,"y":894,"w":556,"h":52,"abs_x":657,"abs_y":937}' className="flex items-center gap-3 p-3 bg-[#13151b] border rounded-lg mb-4 border-white/5">
<svg bis_size='{"x":670,"y":912,"w":13,"h":16,"abs_x":670,"abs_y":955}' className="lucide lucide-search w-4 h-4 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":680,"y":922,"w":2,"h":2,"abs_x":680,"abs_y":965}' d="m21 21-4.34-4.34"></path><circle bis_size='{"x":672,"y":914,"w":9,"h":9,"abs_x":672,"abs_y":957}' cx="11" cy="11" r="8"></circle></svg>
<input bis_size='{"x":696,"y":912,"w":460,"h":16,"abs_x":696,"abs_y":955}' className="bg-transparent border-none outline-none text-xs w-full placeholder-slate-600 text-slate-300" placeholder="Search leads by name or email..." type="text"/>
<span bis_size='{"x":1168,"y":907,"w":31,"h":26,"abs_x":1168,"abs_y":950}' className="text-[10px] px-1.5 py-0.5 border rounded text-slate-500 border-white/10 bg-white/5">⌘K</span>
</div>

<div bis_size='{"x":657,"y":962,"w":556,"h":66,"abs_x":657,"abs_y":1005}' className="flex items-center justify-between p-3 rounded-lg bg-[#13151b] border transition-colors group border-white/5 hover:border-white/10">
<div bis_size='{"x":670,"y":975,"w":138,"h":40,"abs_x":670,"abs_y":1018}' className="flex items-center gap-3">
<img alt="Lead" bis_size='{"x":670,"y":979,"w":32,"h":32,"abs_x":670,"abs_y":1022}' className="w-8 h-8 rounded-full opacity-80" src="https://i.pravatar.cc/150?u=1"/>
<div bis_size='{"x":714,"y":975,"w":94,"h":40,"abs_x":714,"abs_y":1018}'>
<p bis_size='{"x":714,"y":975,"w":94,"h":20,"abs_x":714,"abs_y":1018}' className="text-sm text-slate-200">Simon Carter</p>
<p bis_size='{"x":714,"y":995,"w":94,"h":20,"abs_x":714,"abs_y":1038}' className="text-[10px] text-slate-500">simon@mymail.com</p>
</div>
</div>
<div bis_size='{"x":1072,"y":980,"w":127,"h":30,"abs_x":1072,"abs_y":1023}' className="flex items-center gap-4">
<span bis_size='{"x":1072,"y":985,"w":42,"h":20,"abs_x":1072,"abs_y":1028}' className="text-[10px] text-slate-500">Just now</span>
<div bis_size='{"x":1131,"y":980,"w":69,"h":30,"abs_x":1131,"abs_y":1023}' className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 text-[10px] border border-green-500/20 text-green-400">
<svg bis_size='{"x":1140,"y":989,"w":12,"h":12,"abs_x":1140,"abs_y":1032}' className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1142,"y":992,"w":8,"h":5,"abs_x":1142,"abs_y":1035}' d="M20 6 9 17l-5-5"></path></svg>
                                            Replied
                                        </div>
</div>
</div>

<div bis_size='{"x":657,"y":1044,"w":556,"h":66,"abs_x":657,"abs_y":1087}' className="flex items-center justify-between p-3 rounded-lg bg-[#13151b] border transition-colors group border-white/5 hover:border-white/10">
<div bis_size='{"x":670,"y":1057,"w":138,"h":40,"abs_x":670,"abs_y":1100}' className="flex items-center gap-3">
<img alt="Lead" bis_size='{"x":670,"y":1061,"w":32,"h":32,"abs_x":670,"abs_y":1104}' className="w-8 h-8 rounded-full opacity-80" src="https://i.pravatar.cc/150?u=2"/>
<div bis_size='{"x":714,"y":1057,"w":94,"h":40,"abs_x":714,"abs_y":1100}'>
<p bis_size='{"x":714,"y":1057,"w":94,"h":20,"abs_x":714,"abs_y":1100}' className="text-sm text-slate-200">Mark Johnson</p>
<p bis_size='{"x":714,"y":1077,"w":94,"h":20,"abs_x":714,"abs_y":1120}' className="text-[10px] text-slate-500">mark@tech.co</p>
</div>
</div>
<div bis_size='{"x":1076,"y":1062,"w":124,"h":30,"abs_x":1076,"abs_y":1105}' className="flex items-center gap-4">
<span bis_size='{"x":1076,"y":1067,"w":35,"h":20,"abs_x":1076,"abs_y":1110}' className="text-[10px] text-slate-500">2m ago</span>
<div bis_size='{"x":1127,"y":1062,"w":72,"h":30,"abs_x":1127,"abs_y":1105}' className="flex items-center gap-1 px-2 py-1 rounded bg-brand-500/10 text-[10px] border border-brand-500/20 text-brand-400">
<svg bis_size='{"x":1136,"y":1071,"w":12,"h":12,"abs_x":1136,"abs_y":1114}' className="lucide lucide-loader-2 w-3 h-3 animate-spin" data-lucide="loader-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1138,"y":1072,"w":9,"h":9,"abs_x":1138,"abs_y":1115}' d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
                                            Sending
                                        </div>
</div>
</div>

<div bis_size='{"x":657,"y":1126,"w":556,"h":66,"abs_x":657,"abs_y":1169}' className="flex items-center justify-between p-3 rounded-lg bg-[#13151b] border transition-colors group border-white/5 hover:border-white/10">
<div bis_size='{"x":670,"y":1139,"w":129,"h":40,"abs_x":670,"abs_y":1182}' className="flex items-center gap-3">
<div bis_size='{"x":670,"y":1143,"w":32,"h":32,"abs_x":670,"abs_y":1186}' className="w-8 h-8 rounded-full flex items-center justify-center text-xs border bg-slate-800 text-slate-400 border-white/5">
                                            RJ
                                        </div>
<div bis_size='{"x":714,"y":1139,"w":85,"h":40,"abs_x":714,"abs_y":1182}'>
<p bis_size='{"x":714,"y":1139,"w":85,"h":20,"abs_x":714,"abs_y":1182}' className="text-sm text-slate-200">Rafael Jones</p>
<p bis_size='{"x":714,"y":1159,"w":85,"h":20,"abs_x":714,"abs_y":1202}' className="text-[10px] text-slate-500">rafael@design.io</p>
</div>
</div>
<div bis_size='{"x":1116,"y":1149,"w":84,"h":20,"abs_x":1116,"abs_y":1192}' className="flex items-center gap-4">
<span bis_size='{"x":1116,"y":1149,"w":30,"h":20,"abs_x":1116,"abs_y":1192}' className="text-[10px] text-slate-500">1h ago</span>
<span bis_size='{"x":1163,"y":1149,"w":37,"h":20,"abs_x":1163,"abs_y":1192}' className="text-[10px] text-slate-600">Opened</span>
</div>
</div>
</div>

<div bis_size='{"x":1237,"y":858,"w":266,"h":334,"abs_x":1237,"abs_y":901}' className="md:col-span-1 space-y-4">

<div bis_size='{"x":1237,"y":858,"w":266,"h":128,"abs_x":1237,"abs_y":901}' className="h-32 rounded-xl bg-[#13151b] border border-dashed flex flex-col items-center justify-center relative overflow-hidden group hover:border-brand-500/40 transition-colors cursor-pointer border-white/10">
<div bis_size='{"x":1238,"y":859,"w":264,"h":126,"abs_x":1238,"abs_y":902}' className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div bis_size='{"x":1350,"y":890,"w":40,"h":40,"abs_x":1350,"abs_y":933}' className="w-10 h-10 mb-2 rounded-lg bg-[#0f1117] flex items-center justify-center border relative z-10 group-hover:scale-110 transition-transform border-white/10">
<svg bis_size='{"x":1360,"y":900,"w":20,"h":20,"abs_x":1360,"abs_y":943}' className="lucide lucide-plus w-5 h-5 text-brand-400" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1364,"y":910,"w":11,"h":0,"abs_x":1364,"abs_y":953}' d="M5 12h14"></path><path bis_size='{"x":1370,"y":904,"w":0,"h":11,"abs_x":1370,"abs_y":947}' d="M12 5v14"></path></svg>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute -bottom-2 -right-2 z-20 hidden group-hover:block">
<svg bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="lucide lucide-mouse-pointer-2 w-3 h-3 text-blue-400 fill-blue-400/20" data-lucide="mouse-pointer-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"></path></svg>
<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":0,"abs_y":43}' className="absolute left-3 top-1 bg-blue-500 text-[8px] px-1 rounded-sm text-white">Samuel</span>
</div>
</div>
<p bis_size='{"x":1319,"y":938,"w":102,"h":16,"abs_x":1319,"abs_y":981}' className="text-xs relative z-10 text-slate-400">Import CSV Leads</p>
</div>

<div bis_size='{"x":1237,"y":1002,"w":266,"h":90,"abs_x":1237,"abs_y":1045}' className="p-3 rounded-xl bg-[#13151b] border border-white/5">
<div bis_size='{"x":1250,"y":1015,"w":240,"h":24,"abs_x":1250,"abs_y":1058}' className="flex items-center justify-between mb-3">
<div bis_size='{"x":1250,"y":1015,"w":81,"h":24,"abs_x":1250,"abs_y":1058}' className="flex items-center gap-2">
<div bis_size='{"x":1250,"y":1015,"w":24,"h":24,"abs_x":1250,"abs_y":1058}' className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
<svg bis_size='{"x":1255,"y":1020,"w":14,"h":14,"abs_x":1255,"abs_y":1063}' className="lucide lucide-bot w-3.5 h-3.5 text-purple-400" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":1260,"y":1022,"w":2,"h":2,"abs_x":1260,"abs_y":1065}' d="M12 8V4H8"></path><rect bis_size='{"x":1257,"y":1024,"w":9,"h":7,"abs_x":1257,"abs_y":1067}' height="12" rx="2" width="16" x="4" y="8"></rect><path bis_size='{"x":1256,"y":1028,"w":1,"h":0,"abs_x":1256,"abs_y":1071}' d="M2 14h2"></path><path bis_size='{"x":1267,"y":1028,"w":1,"h":0,"abs_x":1267,"abs_y":1071}' d="M20 14h2"></path><path bis_size='{"x":1264,"y":1027,"w":0,"h":1,"abs_x":1264,"abs_y":1070}' d="M15 13v2"></path><path bis_size='{"x":1260,"y":1027,"w":0,"h":1,"abs_x":1260,"abs_y":1070}' d="M9 13v2"></path></svg>
</div>
<span bis_size='{"x":1282,"y":1019,"w":49,"h":16,"abs_x":1282,"abs_y":1062}' className="text-xs font-medium text-slate-200">AI Agent</span>
</div>
<svg bis_size='{"x":1476,"y":1020,"w":14,"h":14,"abs_x":1476,"abs_y":1063}' className="lucide lucide-check-circle-2 w-3.5 h-3.5 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle bis_size='{"x":1477,"y":1021,"w":11,"h":11,"abs_x":1477,"abs_y":1064}' cx="12" cy="12" r="10"></circle><path bis_size='{"x":1481,"y":1025,"w":3,"h":2,"abs_x":1481,"abs_y":1068}' d="m9 12 2 2 4-4"></path></svg>
</div>
<div bis_size='{"x":1250,"y":1051,"w":240,"h":4,"abs_x":1250,"abs_y":1094}' className="w-full h-1 rounded-full overflow-hidden mb-1 bg-slate-800">
<div bis_size='{"x":1250,"y":1051,"w":180,"h":4,"abs_x":1250,"abs_y":1094}' className="bg-gradient-to-r from-purple-500 to-brand-500 h-full w-[75%]"></div>
</div>
<p bis_size='{"x":1250,"y":1059,"w":240,"h":20,"abs_x":1250,"abs_y":1102}' className="text-[10px] text-slate-500 text-right">1.99 MB processed</p>
</div>
</div>
</div>

<div bis_size='{"x":633,"y":1196,"w":894,"h":96,"abs_x":633,"abs_y":1239}' className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f1117] to-transparent pointer-events-none"></div>
</main>
</div>
</div>
</div>
</main>


    </>
  );
}
