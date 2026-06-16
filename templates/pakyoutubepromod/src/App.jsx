import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#0f0f0f',
surface: '#121212',
surfaceHover: '#27272a',
border: '#27272a',
textPrimary: '#f1f1f1',
textSecondary: '#aaaaaa',
brand: '#ff0000',
},
fontSize: { xxs: '0.65rem' }
}
}
}
function playVideo(container, videoId) {
container.innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="w-full h-full rounded-xl"></iframe>`;
}
function toggleSearch() {
const searchBar = document.getElementById('mobile-search-bar');
searchBar.classList.toggle('hidden');
searchBar.classList.toggle('flex');
if(!searchBar.classList.contains('hidden')) {
document.getElementById('mobile-search-input').focus();
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="h-14 flex items-center justify-between px-4 sticky top-0 z-50 bg-background/95 backdrop-blur-sm w-full">

<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-surfaceHover transition-colors duration-200 group">
<iconify-icon className="text-textPrimary" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<a className="flex items-center gap-1 group" href="/" title="YouTube Home">
<div className="w-8 h-5 bg-brand rounded-lg flex items-center justify-center relative overflow-hidden">
<div className="w-0 h-0 border-t-[3.5px] border-t-transparent border-l-[7px] border-l-white border-b-[3.5px] border-b-transparent ml-0.5"></div>
</div>
<span className="text-lg font-semibold tracking-tight relative -top-px group-hover:text-white transition-colors">YouTube</span>
<span className="text-xxs text-textSecondary relative -top-2 ml-0.5">IN</span>
</a>
</div>

<form action="https://www.youtube.com/results" className="hidden md:flex items-center flex-1 max-w-2xl ml-10 gap-4" method="get">
<div className="flex flex-1 items-center relative">
<div className="flex flex-1 items-center bg-[#121212] border border-[#303030] rounded-l-full px-4 py-0.5 focus-within:border-[#1c62b9] ml-8 h-10 shadow-inner">
<div className="hidden group-focus-within:block mr-2">
<iconify-icon className="text-textPrimary" icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-transparent outline-none text-base placeholder:text-[#888] text-textPrimary font-normal h-full" name="search_query" placeholder="Search" type="text"/>

<iconify-icon className="text-textSecondary hover:text-textPrimary cursor-pointer ml-2" icon="solar:keyboard-linear" width="20"></iconify-icon>
</div>
<button className="bg-[#222222] border border-l-0 border-[#303030] rounded-r-full px-5 h-10 hover:bg-[#303030] transition-colors flex items-center justify-center tooltip" title="Search" type="submit">
<iconify-icon className="text-textPrimary" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<button className="w-10 h-10 bg-[#181818] rounded-full flex items-center justify-center hover:bg-[#303030] transition-colors" type="button">
<iconify-icon className="text-textPrimary" icon="solar:microphone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</form>

<div className="flex md:hidden items-center ml-auto mr-2">
<button className="p-2 rounded-full hover:bg-surfaceHover" onclick="toggleSearch()">
<iconify-icon className="text-textPrimary" icon="solar:magnifer-linear" width="22"></iconify-icon>
</button>
</div>

<div className="flex items-center gap-1 md:gap-2">
<button className="hidden sm:flex w-10 h-10 rounded-full items-center justify-center hover:bg-surfaceHover transition-colors">
<iconify-icon className="text-textPrimary" icon="solar:videocamera-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-surfaceHover transition-colors relative">
<iconify-icon className="text-textPrimary" icon="solar:bell-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="absolute top-2 right-2 w-2 h-2 bg-brand rounded-full border-2 border-background"></span>
</button>
<button className="w-8 h-8 ml-2 rounded-full overflow-hidden hover:opacity-90 transition-opacity">
<img alt="Avatar" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&amp;background=random"/>
</button>
</div>
</header>

<form action="https://www.youtube.com/results" className="hidden absolute top-0 left-0 w-full h-14 bg-background z-[60] items-center px-2 gap-2 border-b border-border" id="mobile-search-bar" method="get">
<button className="p-2 rounded-full hover:bg-surfaceHover" onclick="toggleSearch()" type="button">
<iconify-icon className="text-textPrimary" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<input className="flex-1 bg-surfaceHover rounded-full px-4 py-2 outline-none text-sm text-textPrimary border border-transparent focus:border-blue-500" id="mobile-search-input" name="search_query" placeholder="Search YouTube" type="text"/>
<button className="p-2 rounded-full bg-surfaceHover" type="submit">
<iconify-icon className="text-textPrimary" icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</form>
<div className="flex flex-1 overflow-hidden">

<aside className="hidden md:flex flex-col w-16 lg:w-60 h-full overflow-y-auto hover:overflow-y-auto pb-4 px-3 bg-background transition-all duration-300">

<div className="flex flex-col py-3 gap-1">
<a className="flex items-center lg:gap-5 px-3 lg:px-3 py-2.5 rounded-lg bg-surfaceHover text-textPrimary justify-center lg:justify-start" href="#">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:home-angle-bold" width="22"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Home</span>
</a>
<a className="flex items-center lg:gap-5 px-3 lg:px-3 py-2.5 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors justify-center lg:justify-start" href="https://www.youtube.com/shorts">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Shorts</span>
</a>
<a className="flex items-center lg:gap-5 px-3 lg:px-3 py-2.5 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors justify-center lg:justify-start" href="https://www.youtube.com/feed/subscriptions">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium hidden lg:block">Subscriptions</span>
</a>
</div>
<div className="w-full h-px bg-border my-1 hidden lg:block"></div>

<div className="hidden lg:flex flex-col py-3 gap-1">
<div className="px-3 py-1 flex items-center gap-2 group cursor-pointer hover:bg-surfaceHover rounded-lg mb-1">
<span className="text-base font-semibold flex-1">You</span>
<iconify-icon className="text-textSecondary group-hover:text-textPrimary" icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<a className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors" href="#">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:history-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium">History</span>
</a>
<a className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors" href="#">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:playlist-minimalistic-2-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium">Playlists</span>
</a>
<a className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors" href="#">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:clock-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium">Watch Later</span>
</a>
<a className="flex items-center gap-5 px-3 py-2 rounded-lg hover:bg-surfaceHover text-textPrimary transition-colors" href="#">
<iconify-icon className="text-textPrimary flex-shrink-0" icon="solar:like-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-medium">Liked Videos</span>
</a>
</div>
<div className="w-full h-px bg-border my-1 hidden lg:block"></div>

<div className="hidden lg:flex flex-col py-3 gap-1">
<h3 className="px-3 py-2 text-base font-semibold text-textPrimary">Subscriptions</h3>
<a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-surfaceHover transition-colors" href="#">
<img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://ui-avatars.com/api/?name=MK&amp;background=random"/>
<span className="text-sm font-normal text-textSecondary line-clamp-1">MKBHD</span>
</a>
<a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-surfaceHover transition-colors" href="#">
<img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://ui-avatars.com/api/?name=FC&amp;background=random"/>
<span className="text-sm font-normal text-textSecondary line-clamp-1">FreeCodeCamp</span>
</a>
<a className="flex items-center gap-4 px-3 py-2 rounded-lg hover:bg-surfaceHover transition-colors" href="#">
<img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://ui-avatars.com/api/?name=L&amp;background=random"/>
<span className="text-sm font-normal text-textSecondary line-clamp-1">Ludwig</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden bg-background">

<div className="w-full h-14 min-h-[56px] flex items-center px-4 gap-3 overflow-x-auto whitespace-nowrap sticky top-0 bg-background/95 backdrop-blur z-40 no-scrollbar">
<button className="px-3 py-1.5 rounded-lg bg-textPrimary text-background text-sm font-medium hover:bg-white transition-colors">All</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Gaming</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Music</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Live</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Mixes</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Podcasts</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Computer Science</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">AI</button>
<button className="px-3 py-1.5 rounded-lg bg-surfaceHover text-textPrimary text-sm font-medium hover:bg-[#3f3f3f] transition-colors border border-[rgba(255,255,255,0.1)]">Recently uploaded</button>
</div>

<div className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8 pb-20">

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), 'pYNW0Qe1g4Q')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/pYNW0Qe1g4Q/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">12:45</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=TC&amp;background=0D8ABC&amp;color=fff"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">Build a Modern UI with Tailwind CSS</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Fireship</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">1.2M views • 2 years ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), 'jfKfPfyJRdk')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-red-600 px-1.5 py-0.5 rounded text-xs font-bold text-white tracking-wide flex items-center gap-1">
<iconify-icon icon="solar:radio-minimalistic-linear" width="12"></iconify-icon> LIVE
                            </div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=LG&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">lofi hip hop radio 📚 - beats to relax/study to</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Lofi Girl</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">45K watching</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), '0e3GPea1Tyg')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/0e3GPea1Tyg/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">15:00</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=Mr&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">$1 vs $1,000,000,000 Yacht!</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">MrBeast</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">103M views • 4 days ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), '5qap5aO4i9A')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/5qap5aO4i9A/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">11:54:10</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=L&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">lofi hip hop radio - beats to sleep/chill to</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Lofi Girl</span>
</div>
<span className="text-sm text-textSecondary">24K watching</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), 'sVw--pAF1fI')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/sVw--pAF1fI/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">13:22</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=MK&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">The Apple Vision Pro Review</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Marques Brownlee</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">15M views • 2 months ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), 'WXsD0ZgxjRw')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/WXsD0ZgxjRw/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">9:30</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=JS&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">React 19 - Everything You Need to Know</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Jack Herrington</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">89K views • 1 week ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), '8jPQjjsBbIc')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/8jPQjjsBbIc/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">14:15</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=TE&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">How to speak so that people want to listen</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">TED</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">60M views • 9 years ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer" onclick="playVideo(this.querySelector('.video-container'), '0Puv0Pss33M')">
<div className="video-container relative aspect-video rounded-xl overflow-hidden bg-surfaceHover">
<img alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://i.ytimg.com/vi/0Puv0Pss33M/maxresdefault.jpg"/>
<div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium text-white tracking-wide">10:59</div>
</div>
<div className="flex gap-3 items-start">
<img alt="Channel" className="w-9 h-9 rounded-full object-cover mt-0.5" src="https://ui-avatars.com/api/?name=K&amp;background=random"/>
<div className="flex flex-col gap-1 pr-4">
<h3 className="text-base font-semibold text-textPrimary leading-tight line-clamp-2 group-hover:text-white">Time: The History &amp; Future of Everything</h3>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="text-sm text-textSecondary hover:text-textPrimary">Kurzgesagt – In a Nutshell</span>
<iconify-icon className="text-textSecondary" icon="solar:verified-check-bold" width="12"></iconify-icon>
</div>
<span className="text-sm text-textSecondary">22M views • 1 year ago</span>
</div>
</div>
<button className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-surfaceHover rounded-full text-textPrimary">
<iconify-icon icon="solar:menu-dots-bold" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</main>
</div>

<nav className="md:hidden fixed bottom-0 w-full bg-background/95 backdrop-blur border-t border-border flex justify-around items-center h-12 z-50">
<a className="flex flex-col items-center justify-center gap-0.5 w-full h-full text-textPrimary" href="/">
<iconify-icon icon="solar:home-angle-bold" width="24"></iconify-icon>
<span className="text-[10px]">Home</span>
</a>
<a className="flex flex-col items-center justify-center gap-0.5 w-full h-full text-textSecondary hover:text-textPrimary" href="https://www.youtube.com/shorts">
<iconify-icon icon="solar:clapperboard-play-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px]">Shorts</span>
</a>
<a className="flex flex-col items-center justify-center gap-0.5 w-full h-full text-textSecondary hover:text-textPrimary" href="#">
<iconify-icon className="mb-1" icon="solar:add-circle-linear" strokeWidth="1.0" width="34"></iconify-icon>
</a>
<a className="flex flex-col items-center justify-center gap-0.5 w-full h-full text-textSecondary hover:text-textPrimary" href="https://www.youtube.com/feed/subscriptions">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-[10px]">Subscriptions</span>
</a>
<a className="flex flex-col items-center justify-center gap-0.5 w-full h-full text-textSecondary hover:text-textPrimary" href="#">
<img alt="You" className="w-6 h-6 rounded-full object-cover mb-0.5" src="https://ui-avatars.com/api/?name=User&amp;background=random"/>
<span className="text-[10px]">You</span>
</a>
</nav>

    </>
  );
}
