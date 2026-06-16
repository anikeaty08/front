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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
<div className="web-background"></div>
<div className="neon-blob blob-1"></div>
<div className="neon-blob blob-2"></div>
<div className="neon-blob blob-3"></div>
<div className="noise-overlay"></div>
</div>
<main className="md:space-y-6 w-full max-w-3xl mr-auto ml-auto perspective-1000 space-y-4 pb-20">

<header className="flex animate-enter border-white/5 border-b mb-8 pt-4 pb-4 items-center justify-between backdrop-blur-sm sticky top-0 z-50">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-2 h-2 rounded-full bg-purple-500 animate-pulse">
<div className="animate-ping bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-emerald-400 via-emerald-600 to-emerald-400 opacity-75 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
<nav className="flex gap-6 text-xs font-medium">

</nav>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)] gap-x-4 gap-y-4">

<div className="md:col-span-3 glass-panel rounded-2xl p-6 md:p-8 flex flex-col justify-between group relative overflow-hidden animate-enter delay-100 card-shine">
<div className="absolute right-0 top-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-colors duration-700"></div>
<div className="relative z-10">
<h1 className="md:text-4xl leading-[1.15] text-3xl font-medium text-zinc-100 tracking-tight drop-shadow-lg">
                        Visionary &amp; <br className="hidden md:block"/>
<span className="bg-clip-text animate-gradient-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 font-semibold">Dark aesthetic version</span>
</h1>
</div>
<div className="mt-8 flex items-center gap-2 text-sm text-zinc-400 relative z-10">
</div>
</div>

<div className="md:col-span-1 flex flex-col glass-panel rounded-2xl pt-6 pr-6 pb-6 pl-6 group card-shine animate-enter delay-200 text-center items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-purple-500/0 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative w-16 h-16 rounded-full mb-3 p-[2px] animate-pulse-glow">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 opacity-60 group-hover:opacity-100 animate-spin-slow" style={{animationDuration: '4s'}}></div>
<div className="flex overflow-hidden bg-[#0a0a0a] w-full h-full rounded-full relative items-center justify-center z-10">
<div className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/15460ee8-8b4b-45af-b5e7-9bc7316f6a65_320w.png?w=800&amp;q=80)] bg-cover bg-center hover-pan"></div>
</div>
</div>
<h3 className="font-medium text-zinc-100 tracking-tight relative z-10">Levi</h3>
<p className="group-hover:text-purple-300 transition-colors duration-300 text-xs text-zinc-400 mt-1 relative z-10">Error</p>
<div className="mt-3 px-2 py-1 rounded-md bg-purple-500/10 text-[10px] text-purple-200 border border-purple-500/20 group-hover:border-purple-400/40 transition-colors duration-300 relative z-10">Gen Z Creative</div>
</div>

<a className="md:col-span-2 glass-panel rounded-2xl p-6 flex items-center justify-between transition-all duration-500 group cursor-pointer animate-enter delay-300 relative overflow-hidden card-shine" href="https://instagram.com/_____kennedy.86" target="_blank">
<div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center gap-4 z-10">
<div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
<div className="w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e7bdb70-0260-47fd-987a-d6bf39253f99_320w.webp)] bg-cover bg-center hover-pan"></div>
</div>
<div className="flex flex-col">
<span className="text-zinc-100 text-sm font-medium tracking-tight group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                            Instagram
                            <iconify-icon className="text-purple-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300" icon="solar:verified-check-bold"></iconify-icon>
</span>
<span className="shimmer-text text-xs text-zinc-400">@_____kennedy.86</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center bg-white/5 group-hover:bg-purple-500 group-hover:border-purple-400 transition-all duration-300 z-10 group-hover:scale-110 shadow-lg">
<iconify-icon className="text-zinc-400 group-hover:text-white transition-colors text-lg group-hover:rotate-45 transform duration-500" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<div className="md:col-span-2 flex flex-col glass-panel rounded-2xl pt-6 pr-6 pb-6 pl-6 group animate-enter delay-400 card-shine justify-between relative overflow-hidden">
<div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-colors duration-500"></div>
<div className="flex z-10 items-start justify-between">
<div>
<h3 className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                            Music
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
</h3>

<div className="flex items-center gap-1.5 mt-1.5">
<iconify-icon className="text-purple-400 text-xs" icon="solar:music-library-2-bold"></iconify-icon>
<p className="text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors duration-300">Something about you</p>
</div>
</div>
<iconify-icon className="text-purple-400 group-hover:text-white transition-colors duration-300 text-lg group-hover:scale-125" icon="solar:soundwave-linear"></iconify-icon>
</div>

<div className="flex gap-2 group-hover:opacity-100 transition-opacity duration-500 opacity-70 h-16 mt-4 gap-x-2 gap-y-2 items-end justify-center z-10">
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '0.8s'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '1.1s', animationDelay: '0.1s', height: '60%'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '0.9s', animationDelay: '0.2s', height: '80%'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '1.2s', animationDelay: '0.15s', height: '40%'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '1.0s', animationDelay: '0.25s', height: '90%'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '1.3s', animationDelay: '0.05s', height: '50%'}}></div>
<div className="w-1.5 bg-gradient-to-t from-purple-900/80 to-purple-400 rounded-full animate-wave-bar" style={{animationDuration: '0.9s', animationDelay: '0.3s', height: '30%'}}></div>
</div>
</div>

<div className="md:col-span-1 flex flex-col gap-4 glass-panel rounded-2xl pt-6 pr-6 pb-6 pl-6 animate-enter delay-500 card-shine justify-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center gap-3 group/item cursor-pointer p-1 -ml-1 rounded-lg hover:bg-white/5 transition-all duration-300" onclick="window.location.href='https://youtube.com/@nexafyrez1011?si=jeL30YAnXpl4JuXK'">
<iconify-icon className="text-zinc-500 group-hover/item:text-red-400 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
<span className="group-hover/item:text-zinc-100 transition-colors text-xs font-medium text-zinc-400">YouTube</span>
<iconify-icon className="text-zinc-600 ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 group/item cursor-pointer p-1 -ml-1 rounded-lg hover:bg-white/5 transition-all duration-300" onclick="window.location.href='https://www.reddit.com/u/_kennedy86/s/iYBtr8XKjm'">
<iconify-icon className="text-zinc-500 group-hover/item:text-orange-400 transition-colors" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="group-hover/item:text-zinc-100 transition-colors text-xs font-medium text-zinc-400">Reddit</span>
<iconify-icon className="text-zinc-600 ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 group/item cursor-pointer p-1 -ml-1 rounded-lg hover:bg-white/5 transition-all duration-300" onclick="window.location.href='https://open.spotify.com/user/31s7isrqhftsbf6wzg42qpdspbya?si=26c6d1debb9d4ad6'">
<iconify-icon className="text-zinc-500 group-hover/item:text-green-400 transition-colors" icon="solar:music-note-linear"></iconify-icon>
<span className="group-hover/item:text-zinc-100 transition-colors text-xs font-medium text-zinc-400">Spotify</span>
<iconify-icon className="text-zinc-600 ml-auto opacity-0 group-hover/item:opacity-100 -translate-x-2 group-hover/item:translate-x-0 transition-all duration-300 text-[10px]" icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="md:col-span-1 flex flex-col glass-panel rounded-2xl pt-6 pr-6 pb-6 pl-6 animate-enter delay-600 card-shine group justify-between hover:bg-zinc-900/60 transition-colors duration-500">
<div className="flex justify-between items-start">
<h3 className="text-sm font-medium text-zinc-200">Gaming</h3>
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
</div>
<div className="flex items-center justify-between mt-4">
<div className="flex gap-1.5 group-hover:border-purple-500/30 group-hover:bg-purple-500/10 transition-all duration-300 bg-zinc-800/40 border-white/5 border rounded px-2 py-1 items-center backdrop-blur-sm cursor-pointer hover:scale-105" onclick="window.location.href='https://steamcommunity.com/profiles/76561199576311919/'">
<iconify-icon className="text-[10px] text-zinc-400 group-hover:text-purple-400 transition-colors" icon="solar:gamepad-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-300">Steam</span>
</div>
<div className="animate-float">
<iconify-icon className="text-zinc-500 text-2xl rotate-12 group-hover:text-purple-400 group-hover:rotate-45 transition-all duration-700" icon="solar:planet-linear"></iconify-icon>
</div>
</div>
<div className="flex group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300 cursor-pointer hover:scale-105 bg-zinc-800/40 border-white/5 border rounded mt-2 pt-1 pr-2 pb-1 pl-2 backdrop-blur-sm gap-x-1.5 gap-y-1.5 items-center" onclick="window.location.href='https://socialclub.rockstargames.com/member/NexafyreZ1011/games'" role="button">
<iconify-icon className="text-[10px] text-zinc-400 group-hover:text-orange-400 transition-colors" icon="solar:star-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-300" onclick="window.location.href='https://socialclub.rockstargames.com/member/NexafyreZ1011/games'" role="button">Rockstar</span>
</div>
</div>

<div className="flex flex-col glass-panel rounded-2xl pt-6 pr-6 pb-6 pl-6 transition-all duration-500 group animate-enter delay-700 card-shine md:col-span-2 justify-between relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-start z-10">
<h3 className="text-sm font-medium text-zinc-200 flex gap-2 items-center">
<iconify-icon className="text-purple-400 animate-bounce" icon="solar:info-circle-linear" style={{animationDuration: '2s'}}></iconify-icon>
                        My info
                    </h3>
</div>
<div className="space-y-2 mt-4 z-10">
<div className="group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-purple-500"></div>
<span className="text-xs text-zinc-400 group-hover:text-purple-200 transition-colors">i like MMA</span>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 delay-75 flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-purple-500"></div>
<span className="text-xs text-zinc-400 group-hover:text-purple-200 transition-colors">wish me on 14th of feb</span>
</div>
</div>
</div>
</div>

<footer className="flex flex-col md:flex-row justify-between items-center py-8 text-[10px] text-zinc-600 gap-2 border-t border-white/5 mt-8 animate-enter delay-700">
<p className="hover:text-zinc-400 transition-colors duration-300">© 2026 OJAS. All rights reserved.</p>
</footer>
</main>

    </>
  );
}
