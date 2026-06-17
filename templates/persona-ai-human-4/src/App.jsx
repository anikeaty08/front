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
      

<nav className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-50">
<div className="hidden md:block"></div>
<div className="flex items-center gap-6 text-sm font-medium text-slate-500">
<div className="hidden sm:block text-right">
<span className="mr-4">10:54 AM GMT+7</span>
<a className="hover:text-slate-900 transition-colors inline-flex items-center gap-1" href="#">
                    Explore Models 
                    <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg>
</a>
</div>
<button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-4 py-2 rounded-lg transition-colors">
                Sign In
            </button>
</div>
</nav>

<header className="flex-grow-0 flex items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-0 mb-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

<div className="flex flex-col max-w-xl z-10 items-start">
<div className="flex items-center gap-2 mb-8 text-slate-900">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor" opacity=".5"></path><path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" fill="currentColor" opacity=".2"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" fill="currentColor" opacity=".7"></path><path d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" fill="currentColor"></path></svg>
<span className="text-xl font-semibold tracking-tight">Persona</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                    Real people, <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400">
                        perfectly captured.
                    </span>
</h1>
<p className="text-lg lg:text-xl text-slate-500 leading-relaxed mb-10 max-w-md font-normal">
                    Generate hyper-realistic portraits that feel alive. Create stunning human aesthetics for your social presence.
                </p>
<button className="group relative bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-4 rounded-xl font-medium transition-all shadow-lg hover:shadow-xl flex items-center gap-3">
                    Create Persona
                    <svg aria-hidden="true" className="iconify transition-transform group-hover:translate-x-1 iconify--solar" data-icon="solar:arrow-right-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M3.25 12a.75.75 0 0 1 .75-.75h9.25v1.5H4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z" fill="currentColor"></path></svg>
</button>
</div>

<div className="relative flex items-center justify-center lg:justify-end w-full h-[500px] lg:h-[700px]">

<div className="w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden relative bg-gradient-to-b from-[#CBEFFF] to-[#F4EFFF] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
<div className="bg-gradient-to-b from-sky-200/50 to-transparent w-full h-1/2 absolute top-0 left-0"></div>
<div className="absolute bottom-0 w-full h-1/2 bg-[#B8E8FF] opacity-40 transform skew-y-6 scale-110 origin-bottom-left"></div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[240px] h-[460px] sm:w-[280px] sm:h-[520px] bg-white rounded-[3rem] border-[8px] border-white shadow-2xl overflow-hidden z-20">
<div className="w-full h-full bg-slate-50 flex flex-col relative">

<div className="h-8 w-full flex justify-between items-center px-6 mt-2">
<span className="text-[10px] font-semibold text-slate-800">9:41</span>
<div className="flex gap-1">
<div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
<div className="w-3 h-3 bg-slate-800 rounded-full opacity-20"></div>
</div>
</div>

<div className="px-4 py-2 flex items-center gap-2 mb-2">
<div className="bg-gradient-to-br from-purple-500 to-pink-500 w-8 h-8 rounded-full p-[2px]">
<img alt="Avatar" className="w-full h-full object-cover rounded-full border border-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-1"></div>
<div className="h-1.5 w-16 bg-slate-100 rounded"></div>
</div>
<svg aria-hidden="true" className="iconify text-slate-400 iconify--solar" data-icon="solar:menu-dots-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m14 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor"></path><path d="M14 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0" fill="currentColor" opacity=".5"></path></svg>
</div>

<div className="mx-4 rounded-2xl overflow-hidden h-72 bg-slate-200 relative group shadow-sm">
<img alt="Human Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="flex flex-col bg-gradient-to-b from-black/10 to-black/50 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="self-end bg-white/20 backdrop-blur-md px-2 py-1 rounded-full border border-white/20 text-[10px] text-white font-medium">
                                        100% Generated
                                    </div>
<div className="text-white">
<h3 className="font-bold text-lg leading-none drop-shadow-md">@sophia_vibes</h3>
<p className="text-[10px] opacity-90 mt-1 font-medium">Paris, France</p>
</div>
</div>
</div>

<div className="absolute bottom-8 left-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white/50 transform transition-transform hover:scale-105 cursor-default">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:heart-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 9.137c0 4.405 3.298 6.946 6.106 9.11q.44.337.856.664C10 19.729 11 20.5 12 20.5v-15C7.5.826 2 4.275 2 9.138" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="m14 7.5l-2-2v15c1 0 2-.77 3.038-1.59q.417-.326.856-.663C18.702 16.083 22 13.542 22 9.137c0-4.462-4.631-7.734-8.871-4.63l1.931 1.931A.75.75 0 0 1 14 7.5" fill="currentColor"></path></svg>
</div>
<div className="flex-1">
<div className="text-xs font-semibold text-slate-800">New Follower</div>
<div className="text-[10px] text-slate-500">Just now · Generated Profile</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-24 left-10 sm:left-16 glass-card p-3 rounded-2xl shadow-lg border border-white/40 transform -rotate-12 animate-[bounce_4s_infinite]">
<svg aria-hidden="true" className="iconify text-3xl text-purple-500 iconify--solar" data-icon="solar:camera-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.778 21h4.444c3.121 0 4.682 0 5.803-.735a4.4 4.4 0 0 0 1.226-1.204c.749-1.1.749-2.633.749-5.697s0-4.597-.749-5.697a4.4 4.4 0 0 0-1.226-1.204c-.72-.473-1.622-.642-3.003-.702c-.659 0-1.226-.49-1.355-1.125A2.064 2.064 0 0 0 13.634 3h-3.268c-.988 0-1.839.685-2.033 1.636c-.129.635-.696 1.125-1.355 1.125c-1.38.06-2.282.23-3.003.702A4.4 4.4 0 0 0 2.75 7.667C2 8.767 2 10.299 2 13.364s0 4.596.749 5.697c.324.476.74.885 1.226 1.204C5.096 21 6.657 21 9.778 21" fill="currentColor" opacity=".5"></path><path d="M17.556 9.272a.826.826 0 0 0-.833.819c0 .452.373.818.833.818h1.111c.46 0 .834-.367.834-.818a.826.826 0 0 0-.834-.819z" fill="currentColor"></path><path clip-rule="evenodd" d="M12 9.272c-2.3 0-4.166 1.832-4.166 4.091s1.865 4.091 4.167 4.091c2.3 0 4.166-1.831 4.166-4.09s-1.865-4.092-4.166-4.092m0 1.637c-1.38 0-2.5 1.099-2.5 2.454s1.12 2.455 2.5 2.455c1.381 0 2.5-1.099 2.5-2.455c0-1.355-1.119-2.454-2.5-2.454" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<div className="absolute top-1/2 right-8 sm:right-12 glass-card p-3 rounded-2xl shadow-lg border border-white/40 transform rotate-12 translate-y-12">
<svg aria-hidden="true" className="iconify text-3xl text-orange-400 iconify--solar" data-icon="solar:stars-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.252 10.689c-.987-1.18-1.48-1.77-2.048-1.68c-.567.091-.832.803-1.362 2.227l-.138.368c-.15.405-.226.607-.373.756c-.146.149-.348.228-.75.386l-.367.143c-1.417.555-2.126.833-2.207 1.4s.52 1.049 1.721 2.011l.31.25c.342.273.513.41.611.597c.1.187.115.404.146.837l.029.394c.11 1.523.166 2.285.683 2.545s1.154-.155 2.427-.983l.329-.215c.362-.235.543-.353.75-.387c.208-.033.42.022.841.132l.385.1c1.485.386 2.228.58 2.629.173s.193-1.144-.221-2.62l-.108-.38c-.117-.42-.176-.63-.147-.837c.03-.208.145-.39.374-.756l.21-.332c.807-1.285 1.21-1.927.94-2.438c-.269-.511-1.033-.553-2.562-.635l-.396-.022c-.434-.023-.652-.035-.841-.13c-.19-.095-.33-.263-.61-.599z" fill="currentColor"></path><path d="M10.331 4.252c1.316-1.574 1.974-2.361 2.73-2.24s1.11 1.07 1.817 2.969l.183.491c.201.54.302.81.497 1.008c.196.199.464.304 1.001.514l.489.192c1.89.74 2.835 1.11 2.942 1.866c.108.757-.693 1.398-2.294 2.682l-.414.332c-.455.365-.683.547-.815.797s-.152.538-.194 1.115l-.038.526c-.148 2.031-.222 3.047-.911 3.393c-.69.347-1.538-.206-3.236-1.311l-.439-.286c-.482-.314-.723-.47-1-.515s-.558.028-1.121.175l-.513.133c-1.98.516-2.971.773-3.505.231s-.258-1.526.295-3.492l.142-.509c.157-.559.236-.838.197-1.115c-.04-.277-.193-.52-.499-1.008l-.278-.443C4.29 8.044 3.752 7.187 4.11 6.507c.36-.682 1.379-.737 3.418-.848l.527-.028c.58-.031.869-.047 1.122-.174c.252-.127.439-.35.813-.798z" fill="currentColor" opacity=".5"></path></svg>
</div>
<div className="absolute top-32 right-20 sm:right-32 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md transform -rotate-6 z-10 border border-slate-100">
                        #Portraits
                    </div>
</div>
</div>
</div>
</header>

<main className="w-full max-w-7xl mx-auto px-6 pb-24">
<div className="mb-10 flex flex-col items-center text-center">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Trending Humans</h2>
<p className="text-slate-500 max-w-2xl">Discover AI-generated personas that blur the line between reality and digital art. Every smile, glance, and style is crafted to perfection.</p>
</div>
<div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Liam Carter</p>
<p className="text-white/70 text-xs">@liam_c</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Emma J.</p>
<p className="text-white/70 text-xs">@emmastyle</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Business Casual</p>
<p className="text-white/70 text-xs">@ceo_vibes</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Mystique</p>
<p className="text-white/70 text-xs">@eyes_never_lie</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Golden Hour</p>
<p className="text-white/70 text-xs">@sunkissed</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1495366454025-2474435b567f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">City Life</p>
<p className="text-white/70 text-xs">@urban_walker</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Vintage Soul</p>
<p className="text-white/70 text-xs">@film_dump</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Mark D.</p>
<p className="text-white/70 text-xs">@mark_portraits</p>
</div>
</div>

<div className="relative group break-inside-avoid rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:-translate-y-1">
<img alt="Portrait" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<p className="text-white font-medium text-sm">Joyful</p>
<p className="text-white/70 text-xs">@smile_daily</p>
</div>
</div>
</div>
</main>

<footer className="w-full max-w-7xl mx-auto px-6 py-8 lg:py-12 border-t border-slate-100 mt-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
<div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
<svg aria-hidden="true" className="iconify text-xl iconify--solar" data-icon="solar:magic-stick-3-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.845 3.845a2.883 2.883 0 0 0 0 4.077L5.432 9.51c.012-.014.555.503.568.49l4-4c.013-.013-.504-.556-.49-.568L7.922 3.845a2.883 2.883 0 0 0-4.077 0m1.288 11.462a.483.483 0 0 1 .9 0l.157.4a.48.48 0 0 0 .272.273l.398.157a.486.486 0 0 1 0 .903l-.398.158a.48.48 0 0 0-.272.273l-.157.4a.483.483 0 0 1-.9 0l-.157-.4a.48.48 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.903l.398-.157a.48.48 0 0 0 .272-.274z" fill="currentColor" opacity=".5"></path><path d="M19.967 9.13a.483.483 0 0 1 .9 0l.156.399c.05.125.148.224.273.273l.398.158a.486.486 0 0 1 0 .902l-.398.158a.5.5 0 0 0-.273.273l-.156.4a.483.483 0 0 1-.9 0l-.157-.4a.5.5 0 0 0-.272-.273l-.398-.158a.486.486 0 0 1 0-.902l.398-.158a.5.5 0 0 0 .272-.273z" fill="currentColor" opacity=".2"></path><path d="M16.1 2.307a.483.483 0 0 1 .9 0l.43 1.095a.48.48 0 0 0 .272.274l1.091.432a.486.486 0 0 1 0 .903l-1.09.432a.5.5 0 0 0-.273.273L17 6.81a.483.483 0 0 1-.9 0l-.43-1.095a.5.5 0 0 0-.273-.273l-1.09-.432a.486.486 0 0 1 0-.903l1.09-.432a.5.5 0 0 0 .273-.274z" fill="currentColor" opacity=".7"></path><path d="M10.568 6.49c-.012.014-.555-.503-.568-.49l-4 4c-.013.013.504.556.49.568l9.588 9.587a2.883 2.883 0 1 0 4.078-4.077z" fill="currentColor"></path></svg>
<span className="font-semibold text-sm">Persona</span>
</div>
<nav className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">What's New</a>
<a className="hover:text-slate-900 transition-colors" href="#">Discover</a>
<a className="hover:text-slate-900 transition-colors" href="#">Pricing</a>
<a className="hover:text-slate-900 transition-colors" href="#">Help</a>
</nav>
</div>

<div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto">
<div className="flex gap-5 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-lg iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-lg iconify--simple-icons" data-icon="simple-icons:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.9 4.9 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.9 9.9 0 0 0 3.128-1.196a4.94 4.94 0 0 1-2.165 2.724A9.8 9.8 0 0 0 24 4.555a10 10 0 0 1-2.457 2.549" fill="currentColor"></path></svg>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify text-lg iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
</a>
</div>
</div>
</div>

<div className="flex justify-center md:justify-start gap-6 text-xs font-normal text-slate-400 mt-6">
<a className="hover:text-slate-600 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-600 transition-colors" href="#">Security</a>
</div>
</footer>

    </>
  );
}
