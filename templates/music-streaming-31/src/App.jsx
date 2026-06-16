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
      

<aside className="hidden w-64 flex-col border-r border-white/5 bg-zinc-950 p-6 md:flex">

<div className="mb-10 flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded bg-white text-zinc-950">
<iconify-icon icon="solar:music-note-slider-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-lg font-semibold tracking-tight text-white">Musify</span>
</div>

<nav className="space-y-1">
<a className="group flex items-center gap-3 rounded-lg bg-zinc-900 px-3 py-2 text-white transition-colors" href="#">
<iconify-icon icon="solar:home-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Home</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white" href="#">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Search</span>
</a>
<a className="group flex items-center gap-3 rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white" href="#">
<iconify-icon icon="solar:library-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-medium">Your Library</span>
</a>
</nav>

<div className="mt-8 flex-1 overflow-y-auto">
<div className="mb-3 flex items-center justify-between px-3">
<h3 className="text-xs font-medium uppercase tracking-wider text-zinc-500">Playlists</h3>
<button className="text-zinc-500 hover:text-white">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<ul className="space-y-1">
<li><a className="block rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#">Focus Flow</a></li>
<li><a className="block rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#">Late Night Drive</a></li>
<li><a className="block rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#">Gym Hype</a></li>
<li><a className="block rounded-lg px-3 py-2 text-zinc-400 hover:bg-zinc-900 hover:text-white" href="#">Favorites</a></li>
</ul>
</div>

<div className="mt-auto border-t border-white/5 pt-4">
<div className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-zinc-900">
<div className="h-8 w-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Alex User</span>
<span className="text-[10px] text-zinc-500">Free Plan</span>
</div>
</div>
</div>
</aside>

<main className="flex flex-1 flex-col bg-black">

<header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/5 bg-black/80 p-4 backdrop-blur-md md:px-8 md:py-5">
<div className="flex items-center gap-2 md:hidden">
<div className="flex h-7 w-7 items-center justify-center rounded bg-white text-black">
<iconify-icon icon="solar:music-note-slider-linear" width="16"></iconify-icon>
</div>
<span className="font-semibold tracking-tight text-white">Musify</span>
</div>

<div className="relative w-full max-w-md hidden md:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="h-10 w-full rounded-full border border-white/10 bg-zinc-900 pl-10 pr-4 text-xs text-white placeholder-zinc-500 focus:border-white/20 focus:outline-none focus:ring-0" placeholder="Search for songs, artists..." type="text"/>
</div>
<div className="flex items-center gap-4">
<button className="md:hidden text-white">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
<button className="hidden rounded-full border border-white/10 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-white hover:text-black md:block">
                    Upgrade
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 pb-32 md:p-8">

<section className="mb-10 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 md:p-12">
<div className="max-w-lg">
<h1 className="mb-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">Stream music instantly.</h1>
<p className="mb-6 text-zinc-400 text-sm leading-relaxed">Musify is the simple way to search, play, and save your favorite tracks online. No downloads, just music.</p>
<div className="flex gap-3">
<button className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-semibold text-black transition hover:bg-zinc-200">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
                            Start Listening
                        </button>
<button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-xs font-medium text-white backdrop-blur transition hover:bg-white/10">
                            Create Playlist
                        </button>
</div>
</div>
</section>

<section className="mb-10">
<div className="mb-5 flex items-end justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Recently Played</h2>
<a className="text-xs text-zinc-500 hover:text-white" href="#">View all</a>
</div>
<div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">

<div className="group relative cursor-pointer space-y-3 rounded-lg bg-zinc-900/50 p-4 transition hover:bg-zinc-900">
<div className="relative aspect-square overflow-hidden rounded-md bg-zinc-800 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:music-library-linear" width="32"></iconify-icon>
</div>

<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl scale-90 transition transform group-hover:scale-100">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h3 className="truncate text-xs font-medium text-white">Midnight Vibes</h3>
<p className="truncate text-[10px] text-zinc-500">Mix by Musify</p>
</div>
</div>

<div className="group relative cursor-pointer space-y-3 rounded-lg bg-zinc-900/50 p-4 transition hover:bg-zinc-900">
<div className="relative aspect-square overflow-hidden rounded-md bg-zinc-800 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:headphones-round-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl scale-90 transition transform group-hover:scale-100">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h3 className="truncate text-xs font-medium text-white">Deep Focus</h3>
<p className="truncate text-[10px] text-zinc-500">Instrumental</p>
</div>
</div>

<div className="group relative cursor-pointer space-y-3 rounded-lg bg-zinc-900/50 p-4 transition hover:bg-zinc-900">
<div className="relative aspect-square overflow-hidden rounded-md bg-zinc-800 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:vinyl-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl scale-90 transition transform group-hover:scale-100">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h3 className="truncate text-xs font-medium text-white">Weekly Top 50</h3>
<p className="truncate text-[10px] text-zinc-500">Global</p>
</div>
</div>

<div className="hidden group relative cursor-pointer space-y-3 rounded-lg bg-zinc-900/50 p-4 transition hover:bg-zinc-900 md:block">
<div className="relative aspect-square overflow-hidden rounded-md bg-zinc-800 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:radio-minimalistic-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl scale-90 transition transform group-hover:scale-100">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h3 className="truncate text-xs font-medium text-white">On Repeat</h3>
<p className="truncate text-[10px] text-zinc-500">Your top songs</p>
</div>
</div>

<div className="hidden group relative cursor-pointer space-y-3 rounded-lg bg-zinc-900/50 p-4 transition hover:bg-zinc-900 md:block">
<div className="relative aspect-square overflow-hidden rounded-md bg-zinc-800 shadow-lg">
<div className="absolute inset-0 flex items-center justify-center text-zinc-700">
<iconify-icon icon="solar:microphone-2-linear" width="32"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-xl scale-90 transition transform group-hover:scale-100">
<iconify-icon className="ml-0.5" icon="solar:play-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div>
<h3 className="truncate text-xs font-medium text-white">Acoustic Hits</h3>
<p className="truncate text-[10px] text-zinc-500">Chill Vibes</p>
</div>
</div>
</div>
</section>

<section>
<div className="mb-5 flex items-end justify-between">
<h2 className="text-xl font-semibold tracking-tight text-white">Trending Now</h2>
</div>
<div className="w-full text-left">

<div className="grid grid-cols-12 gap-4 border-b border-white/5 px-4 pb-2 text-[10px] font-medium uppercase tracking-wider text-zinc-500">
<div className="col-span-1">#</div>
<div className="col-span-7 md:col-span-5">Title</div>
<div className="hidden md:col-span-3 md:block">Album</div>
<div className="col-span-4 md:col-span-3 text-right">Duration</div>
</div>

<div className="group grid cursor-pointer grid-cols-12 items-center gap-4 rounded-md px-4 py-2 hover:bg-white/5">
<div className="col-span-1 text-zinc-500 group-hover:hidden">1</div>
<div className="col-span-1 hidden text-white group-hover:block">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</div>
<div className="col-span-7 flex items-center gap-3 md:col-span-5">
<div className="h-8 w-8 rounded bg-zinc-800"></div>
<div>
<div className="text-xs font-medium text-white">Neon Lights</div>
<div className="text-[10px] text-zinc-500">The Synthwave</div>
</div>
</div>
<div className="hidden text-xs text-zinc-400 md:col-span-3 md:block">Retro City</div>
<div className="col-span-4 flex items-center justify-end gap-4 md:col-span-3">
<button className="hidden text-zinc-500 opacity-0 hover:text-white group-hover:opacity-100 md:block">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
<span className="text-xs text-zinc-500">3:45</span>
</div>
</div>

<div className="group grid cursor-pointer grid-cols-12 items-center gap-4 rounded-md px-4 py-2 hover:bg-white/5">
<div className="col-span-1 text-green-500 group-hover:hidden">
<iconify-icon icon="solar:soundwave-linear" width="14"></iconify-icon>
</div>
<div className="col-span-1 hidden text-white group-hover:block">
<iconify-icon icon="solar:pause-linear" width="14"></iconify-icon>
</div>
<div className="col-span-7 flex items-center gap-3 md:col-span-5">
<div className="h-8 w-8 rounded bg-zinc-800"></div>
<div>
<div className="text-xs font-medium text-green-500">Solar Echoes</div>
<div className="text-[10px] text-zinc-400">Cosmic Band</div>
</div>
</div>
<div className="hidden text-xs text-zinc-400 md:col-span-3 md:block">Galaxy One</div>
<div className="col-span-4 flex items-center justify-end gap-4 md:col-span-3">
<button className="hidden text-green-500 opacity-100 md:block">
<iconify-icon icon="solar:heart-bold" width="16"></iconify-icon>
</button>
<span className="text-xs text-zinc-500">4:12</span>
</div>
</div>

<div className="group grid cursor-pointer grid-cols-12 items-center gap-4 rounded-md px-4 py-2 hover:bg-white/5">
<div className="col-span-1 text-zinc-500 group-hover:hidden">3</div>
<div className="col-span-1 hidden text-white group-hover:block">
<iconify-icon icon="solar:play-linear" width="14"></iconify-icon>
</div>
<div className="col-span-7 flex items-center gap-3 md:col-span-5">
<div className="h-8 w-8 rounded bg-zinc-800"></div>
<div>
<div className="text-xs font-medium text-white">Urban Rain</div>
<div className="text-[10px] text-zinc-500">LoFi Beats</div>
</div>
</div>
<div className="hidden text-xs text-zinc-400 md:col-span-3 md:block">Study Session</div>
<div className="col-span-4 flex items-center justify-end gap-4 md:col-span-3">
<button className="hidden text-zinc-500 opacity-0 hover:text-white group-hover:opacity-100 md:block">
<iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
</button>
<span className="text-xs text-zinc-500">2:30</span>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="fixed bottom-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-t border-white/10 bg-zinc-950 px-4">

<div className="flex w-1/3 items-center gap-3">
<div className="h-12 w-12 rounded bg-zinc-800 shadow-sm"></div>
<div className="flex flex-col justify-center overflow-hidden">
<span className="truncate text-xs font-medium text-white hover:underline cursor-pointer">Solar Echoes</span>
<span className="truncate text-[10px] text-zinc-500 hover:text-white cursor-pointer">Cosmic Band</span>
</div>
<button className="ml-2 hidden text-zinc-400 hover:text-white md:block">
<iconify-icon className="text-green-500" icon="solar:heart-bold" width="18"></iconify-icon>
</button>
</div>

<div className="flex w-1/3 flex-col items-center gap-1">
<div className="flex items-center gap-6">
<button className="text-zinc-400 hover:text-white">
<iconify-icon icon="solar:shuffle-linear" width="18"></iconify-icon>
</button>
<button className="text-zinc-200 hover:text-white">
<iconify-icon icon="solar:skip-previous-linear" width="22"></iconify-icon>
</button>
<button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
<iconify-icon icon="solar:pause-linear" width="18"></iconify-icon>
</button>
<button className="text-zinc-200 hover:text-white">
<iconify-icon icon="solar:skip-next-linear" width="22"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-white">
<iconify-icon icon="solar:repeat-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex w-full max-w-md items-center gap-2">
<span className="text-[10px] text-zinc-500">1:12</span>
<input className="range-progress h-1 w-full flex-1 appearance-none rounded-full bg-zinc-800" type="range" value="30"/>
<span className="text-[10px] text-zinc-500">4:12</span>
</div>
</div>

<div className="flex w-1/3 items-center justify-end gap-3">
<button className="hidden text-zinc-400 hover:text-white md:block">
<iconify-icon icon="solar:playlist-minimalistic-linear" width="18"></iconify-icon>
</button>
<div className="hidden items-center gap-2 md:flex">
<iconify-icon className="text-zinc-400" icon="solar:volume-small-linear" width="18"></iconify-icon>
<input className="range-progress h-1 w-20 appearance-none rounded-full bg-zinc-800" type="range" value="80"/>
</div>
<button className="text-zinc-400 hover:text-white">
<iconify-icon icon="solar:maximize-square-minimalistic-linear" width="18"></iconify-icon>
</button>
</div>
</footer>

<nav className="fixed bottom-20 left-0 right-0 z-40 flex justify-around border-t border-white/5 bg-zinc-950/95 py-3 backdrop-blur md:hidden">
<a className="flex flex-col items-center gap-1 text-white" href="#">
<iconify-icon icon="solar:home-2-bold" width="22"></iconify-icon>
<span className="text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="#">
<iconify-icon icon="solar:magnifer-linear" width="22"></iconify-icon>
<span className="text-[10px]">Search</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500" href="#">
<iconify-icon icon="solar:library-linear" width="22"></iconify-icon>
<span className="text-[10px]">Library</span>
</a>
</nav>

    </>
  );
}
