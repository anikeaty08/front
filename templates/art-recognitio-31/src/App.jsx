import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="w-full max-w-md h-[850px] relative flex flex-col bg-neutral-950 rounded-[2.5rem] overflow-hidden shadow-2xl ring-1 ring-white/10">

<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-neutral-900 to-transparent opacity-50 pointer-events-none"></div>

<header className="relative z-10 px-6 pt-10 pb-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:aperture" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
</div>
<h1 className="uppercase text-lg font-semibold text-white tracking-tight font-display" style={{}}>Artwork</h1>
</div>
<button className="w-10 h-10 rounded-full border border-white/5 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:user" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</button>
</header>

<div className="flex-1 overflow-y-auto no-scrollbar px-5 pb-24 relative z-10 space-y-5">

<div className="mt-2">
<p className="text-neutral-400 text-xs font-medium tracking-wide uppercase">Welcome back</p>
<h2 className="text-2xl font-medium tracking-tight text-white mt-1">Discover the unseen <br/>stories behind art.</h2>
</div>

<div className="group relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.02]">

<img alt="Scan Background" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale" src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-neutral-950/20"></div>
<div className="scan-glow pointer-events-none"></div>

<div className="flex flex-col pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-between cursor-pointer" onclick="window.location.href='/artwork-recognition'" role="button">

<div className="flex justify-between items-start opacity-70">
<span className="text-[10px] font-mono border border-white/20 rounded-full px-2 py-0.5 bg-black/20 backdrop-blur-md">AI RECOGNITION READY</span>
<svg aria-hidden="true" className="iconify animate-pulse text-white iconify--lucide" data-icon="lucide:wifi" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-2xl flex items-center justify-center">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-white rounded-tl-lg"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-white rounded-tr-lg"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-white rounded-bl-lg"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-white rounded-br-lg"></div>
<svg aria-hidden="true" className="iconify text-white/80 group-hover:text-white transition-colors duration-300 iconify--lucide" data-icon="lucide:scan-line" data-strokeWidth="1" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path className="" d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="text-center w-full relative">
<div className="absolute -top-12 left-1/2 -translate-x-1/2">
<p className="text-white/60 text-xs tracking-widest font-mono uppercase">Tap to identify</p>
</div>
<button className="w-full bg-white text-black h-12 rounded-xl font-semibold text-sm tracking-tight hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:camera" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path><circle cx="12" cy="13" r="3"></circle></g></svg>
                            Scan Artwork
                        </button>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">

<div className="glass-panel flex flex-col cursor-pointer hover:bg-white/5 transition-colors group overflow-hidden h-40 rounded-3xl pt-5 pr-5 pb-5 pl-5 relative justify-between" onclick="window.location.href='/artwork-timeline'" role="button">
<div className="absolute right-0 top-0 p-5 opacity-20 group-hover:opacity-40 transition-opacity">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:history" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
</div>
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-white z-10">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:git-commit-vertical" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 3v6"></path><circle cx="12" cy="12" r="3"></circle><path d="M12 15v6"></path></g></svg>
</div>
<div className="">
<h3 className="text-white font-medium text-sm leading-tight">ArtworkTimeline</h3>
<p className="text-neutral-500 text-[10px] mt-1 font-medium">View History</p>
</div>
</div>

<div className="glass-panel rounded-3xl p-5 flex flex-col justify-between h-40 relative overflow-hidden">
<img alt="Texture" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-overlay" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="flex justify-between items-start z-10">
<div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-white/5 text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<span className="text-[10px] bg-white/10 px-2 py-1 rounded-full text-white backdrop-blur-md">Live</span>
</div>
<div className="z-10">
<h3 className="text-white font-medium text-sm leading-tight truncate">MoMAExhibition</h3>
<p className="text-emerald-400 text-[10px] mt-1 font-medium">Checked in</p>
</div>
</div>
</div>

<div className="pt-2">
<div className="flex items-center justify-between mb-4 px-1">
<h3 className="text-sm font-semibold text-white tracking-tight">Recently Viewed</h3>
<button className="text-[11px] text-neutral-500 hover:text-white transition-colors">View All</button>
</div>

<div className="flex flex-col gap-3">

<div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800 relative">
<img alt="Art 1" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-white truncate">Composition VIII</h4>
<p className="text-xs text-neutral-500 truncate mt-0.5">Wassily Kandinsky</p>
<div className="flex items-center gap-1 mt-1.5">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:clock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-[10px] text-neutral-600">2h ago</span>
</div>
</div>
<button className="flex hover:bg-white/5 text-neutral-400 w-8 h-8 rounded-full items-center justify-center cursor-pointer" onclick="window.location.href='/artwork-details'" role="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="flex items-center gap-4 p-3 rounded-2xl bg-neutral-900/50 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-neutral-800 relative">
<img alt="Art 2" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium text-white truncate">Starry Night</h4>
<p className="text-xs text-neutral-500 truncate mt-0.5">Vincent van Gogh</p>
<div className="flex items-center gap-1 mt-1.5">
<svg aria-hidden="true" className="iconify text-neutral-600 iconify--lucide" data-icon="lucide:clock" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-[10px] text-neutral-600">Yesterday</span>
</div>
</div>
<button className="flex hover:bg-white/5 text-neutral-400 w-8 h-8 rounded-full items-center justify-center cursor-pointer" onclick="window.location.href='/artwork-details'" role="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>

<div className="h-8"></div>
</div>

<div className="absolute bottom-6 left-6 right-6 z-20">
<nav className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl px-2 py-2 flex items-center justify-between shadow-2xl">
<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl bg-white/10 text-white" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-strokeWidth="2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</a>
<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:search" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</a>

<div className="relative -top-6">
<button className="flex hover:scale-105 transition-transform cursor-pointer text-black bg-white w-14 h-14 border-neutral-950 border-4 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.3)] items-center justify-center" onclick="window.location.href='/camera-artwork-scan'" role="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:scan-line" data-width="22" height="22" role="img" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bookmark" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m19 21l-7-4l-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="flex flex-col items-center justify-center w-14 h-12 rounded-xl text-neutral-500 hover:text-white hover:bg-white/5 transition-all" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:settings-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
</a>
</nav>
</div>
</main>

    </>
  );
}
