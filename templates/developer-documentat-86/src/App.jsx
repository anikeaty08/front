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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="yWZ2Tbe094Fsjgy9NRnD"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-gradient-to-br from-lime-300 to-lime-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<svg className="lucide lucide-message-circle text-zinc-950 w-5 h-5 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<span className="text-xl font-medium tracking-tight text-white">Chat<span className="text-lime-400">App</span></span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="hover:text-lime-400 transition-colors" href="#">Product</a>
<a className="hover:text-lime-400 transition-colors" href="#">Services</a>
<a className="hover:text-lime-400 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-6">
<a className="hover:text-lime-400 transition-colors" href="#">Log in</a>
<a className="bg-lime-400 hover:bg-lime-300 text-zinc-950 text-sm font-semibold py-2.5 px-5 rounded-full transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]" href="#">
                    Try it free
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl">
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Have your <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-emerald-400">best chat.</span>
</h1>
<p className="text-xl lg:text-2xl text-zinc-400 font-light leading-relaxed mb-10 max-w-lg">
                    Fast, easy &amp; unlimited team communication. Connect with your team like never before.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-lime-400 hover:bg-lime-300 text-zinc-950 text-lg font-semibold py-4 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(163,230,53,0.25)] flex items-center justify-center gap-2 group">
                        Try it Free
                        <svg className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="glass-card hover:bg-white/5 text-white text-lg font-medium py-4 px-8 rounded-full transition-all border border-white/10 flex items-center justify-center gap-2">
<svg className="lucide lucide-play-circle w-5 h-5" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                        Get a Demo
                    </button>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block perspective-1000">

<div className="absolute top-0 left-10 w-32 h-32 pattern-dots opacity-50"></div>
<div className="absolute bottom-10 right-10 w-32 h-32 pattern-dots opacity-50"></div>

<div className="absolute top-10 left-10 w-[320px] h-[420px] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700 ease-out z-10 group">
<img alt="Woman smiling" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="bg-lime-400 text-zinc-950 text-xs font-semibold px-3 py-1 rounded-full w-fit mb-2">I'm online!</div>
<div className="flex items-center gap-2">
<img alt="User" className="w-8 h-8 rounded-full border-2 border-lime-400" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<span className="text-white text-sm font-medium">Sarah J.</span>
</div>
</div>
</div>

<div className="absolute bottom-20 right-10 w-[280px] h-[360px] glass-card rounded-[2rem] p-4 flex flex-col gap-4 shadow-2xl rotate-[3deg] hover:rotate-0 transition-transform duration-700 ease-out z-20">

<div className="flex items-start gap-3">
<img alt="User" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="bg-zinc-800 p-3 rounded-2xl rounded-tl-none text-sm text-zinc-300 border border-white/5">
                            Hi darling, how's the report?
                        </div>
</div>

<div className="flex items-start gap-3 flex-row-reverse self-end w-full">
<img alt="User" className="w-8 h-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="bg-lime-400 p-3 rounded-2xl rounded-tr-none text-sm text-zinc-950 font-medium shadow-lg shadow-lime-400/20">
                            Almost done! Sending it now.
                        </div>
</div>

<div className="mt-auto rounded-xl overflow-hidden h-32 relative">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6">Instant Team Chats</h2>
<p className="text-lg text-zinc-400 leading-relaxed font-light">
                    Seamless communication that feels natural. Collaborate in real-time with an interface designed for modern teams, ensuring nothing gets lost in translation.
                </p>
</div>

<div className="relative w-full max-w-5xl mx-auto">
<div className="absolute -inset-1 bg-gradient-to-b from-lime-400/20 to-transparent rounded-[2.5rem] blur-lg opacity-50"></div>
<div className="relative bg-zinc-900 border border-zinc-800 rounded-[2rem] shadow-2xl overflow-hidden flex h-[600px] md:h-[700px]">

<div className="w-20 lg:w-72 border-r border-zinc-800 bg-zinc-900/50 flex flex-col">
<div className="p-6 flex items-center gap-3 border-b border-zinc-800/50">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="p-4 space-y-2">
<div className="p-3 rounded-xl bg-lime-400/10 text-lime-400 flex items-center gap-3 border border-lime-400/10">
<svg className="lucide lucide-inbox w-5 h-5" data-lucide="inbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
<span className="hidden lg:inline font-medium text-sm">Inbox</span>
</div>
<div className="p-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-3 transition-colors">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="hidden lg:inline font-medium text-sm">Team</span>
</div>
<div className="p-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 flex items-center gap-3 transition-colors">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="hidden lg:inline font-medium text-sm">Meetings</span>
</div>
</div>

<div className="mt-6 px-6 hidden lg:block">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Direct Messages</h3>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-lime-500"></div>
<span className="text-sm text-zinc-300">Alice Freeman</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-zinc-600"></div>
<span className="text-sm text-zinc-500">Bob Smith</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-lime-500"></div>
<span className="text-sm text-zinc-300">Charlie Day</span>
</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col bg-zinc-950/30">

<div className="h-20 border-b border-zinc-800 flex items-center justify-between px-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-sm">DP</div>
<div>
<div className="text-white font-medium text-sm">Design Project</div>
<div className="text-zinc-500 text-xs">8 members active</div>
</div>
</div>
<div className="flex items-center gap-4 text-zinc-400">
<svg className="lucide lucide-phone w-5 h-5 hover:text-white cursor-pointer" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<svg className="lucide lucide-video w-5 h-5 hover:text-white cursor-pointer" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
<svg className="lucide lucide-more-vertical w-5 h-5 hover:text-white cursor-pointer" data-lucide="more-vertical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
</div>
</div>

<div className="flex-1 p-8 space-y-8 overflow-y-auto">

<div className="flex justify-center">
<span className="text-xs font-medium text-zinc-600 bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Today</span>
</div>

<div className="flex gap-4 max-w-lg">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-medium text-white">James Doe</span>
<span className="text-xs text-zinc-500">10:23 AM</span>
</div>
<div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-zinc-300 text-sm leading-relaxed border border-zinc-700">
                                        Hey team, just uploaded the new assets. Let me know what you think about the color palette!
                                    </div>
</div>
</div>

<div className="flex flex-row-reverse gap-4 max-w-lg ml-auto">
<img alt="Me" className="w-10 h-10 rounded-full object-cover border-2 border-lime-400" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex flex-col items-end">
<div className="flex items-baseline gap-2 mb-1 flex-row-reverse">
<span className="text-sm font-medium text-white">Sarah J.</span>
<span className="text-xs text-zinc-500">10:25 AM</span>
</div>
<div className="bg-lime-400 p-4 rounded-2xl rounded-tr-none text-zinc-900 text-sm font-medium leading-relaxed shadow-[0_4px_20px_rgba(163,230,53,0.15)]">
                                        Looks fantastic James! The contrast is much better now. 🚀
                                    </div>
</div>
</div>

<div className="flex gap-4 max-w-lg">
<img alt="User" className="w-10 h-10 rounded-full object-cover border border-zinc-800" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-medium text-white">Emily R.</span>
<span className="text-xs text-zinc-500">10:28 AM</span>
</div>
<div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-zinc-300 text-sm leading-relaxed border border-zinc-700">
                                        Agreed. Are we good to push this to production?
                                    </div>
</div>
</div>
</div>

<div className="p-6 border-t border-zinc-800 bg-zinc-900/50">
<div className="bg-zinc-950 border border-zinc-800 rounded-xl p-2 flex items-center gap-2 shadow-inner">
<button className="p-2 text-zinc-500 hover:text-white transition-colors"><svg className="lucide lucide-paperclip w-5 h-5" data-lucide="paperclip" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg></button>
<input className="flex-1 bg-transparent text-white placeholder-zinc-600 text-sm focus:outline-none px-2 h-10" placeholder="Type something..." type="text"/>
<button className="p-2 bg-lime-400 hover:bg-lime-300 text-zinc-900 rounded-lg transition-colors"><svg className="lucide lucide-send w-4 h-4 fill-current" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="glass-card rounded-[3rem] p-8 lg:p-12 border border-white/5 relative">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-lime-400 to-emerald-500 rounded-[2.5rem] opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500"></div>
<div className="relative rounded-[2rem] overflow-hidden aspect-[4/3]">
<img alt="Office Collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>

<div className="absolute bottom-6 left-6 bg-zinc-900/90 backdrop-blur border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-3">
<div className="flex -space-x-3">
<img alt="" className="w-8 h-8 rounded-full border-2 border-zinc-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-8 h-8 rounded-full border-2 border-zinc-900" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div className="w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-700 flex items-center justify-center text-[10px] font-bold text-white">+2k</div>
</div>
<div className="text-xs text-white font-medium">Trusted by teams</div>
</div>
</div>
</div>

<div className="">
<h2 className="text-3xl lg:text-5xl font-medium text-white tracking-tight leading-tight mb-6">
                            Perfect Solution for 
                            <span className="text-lime-400">Small Businesses</span>
</h2>
<p className="text-lg text-zinc-400 font-light mb-10 leading-relaxed">
                            Pricing plans that fit like a glove. Whether you are a startup or an established agency, we have the tools to help you scale your communication effortlessly.
                        </p>
<div className="flex flex-wrap gap-4 mb-10">
<button className="bg-lime-400 hover:bg-lime-300 text-zinc-950 text-base font-semibold py-3.5 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]">
                                Try it Free
                            </button>
<button className="text-white border border-zinc-700 hover:bg-zinc-800 text-base font-medium py-3.5 px-8 rounded-full transition-all">
                                Get a Demo
                            </button>
</div>

<div className="flex items-center gap-4 pt-8 border-t border-zinc-800/50">
<div className="flex gap-1 text-lime-400">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<div className="text-sm text-zinc-500">
                                 use Chat<span className="text-lime-400">App</span>
                                and they rate it as .
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">

<div className="col-span-2 lg:col-span-2 pr-10">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-lime-400 rounded-md flex items-center justify-center">
<svg className="lucide lucide-message-circle text-zinc-950 w-4 h-4 fill-current" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<span className="text-lg font-semibold text-white">Chat<span className="text-lime-400">App</span></span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed mb-6 max-w-xs">
                        The best team chat you will ever need. Secure, fast, and delightful to use for teams of all sizes.
                    </p>
</div>

<div className="">
<h4 className="text-white font-medium mb-6">Help</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Support</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Knowledgebase</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Tutorials</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Features</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">Screen Sharing</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">iOS &amp; Android Apps</a></li>
<li className=""><a className="hover:text-lime-400 transition-colors" href="#">File Sharing</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white font-medium mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li className="">info@chatapp.com</li>
<li className="">1-800-200-300</li>
<li className="leading-relaxed">3500 Deer Creek RdPalo Alto, CA</li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© Copyright ChatApp Inc.</p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
