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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-zinc-950">
<iconify-icon icon="solar:earth-linear" width="20"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tight group-hover:opacity-80 transition-opacity">Atlas.</span>
</a>
<div className="hidden md:flex items-center gap-1 bg-zinc-900/50 p-1 rounded-lg border border-white/5">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-zinc-800 rounded shadow-sm">Discover</button>
<button className="px-3 py-1.5 text-xs font-medium hover:text-white transition-colors">Following</button>
<button className="px-3 py-1.5 text-xs font-medium hover:text-white transition-colors">Map View</button>
</div>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="bg-zinc-900/50 border border-white/5 rounded-full pl-9 pr-4 py-1.5 text-xs w-64 text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-white/20 focus:bg-zinc-900 transition-all" placeholder="Search locations..." type="text"/>
</div>
<button className="w-8 h-8 rounded-full hover:bg-zinc-800 flex items-center justify-center transition-colors relative">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
<span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-zinc-950"></span>
</button>
<button className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[1px]">
<div className="w-full h-full rounded-full bg-zinc-900 flex items-center justify-center overflow-hidden">
<img alt="User" className="opacity-90 hover:opacity-100 transition-opacity" src="https://i.pravatar.cc/150?img=33"/>
</div>
</button>
</div>
</div>
</nav>

<main className="flex-1 sm:px-6 grid grid-cols-1 md:grid-cols-12 w-full max-w-7xl mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 gap-x-8 gap-y-8">

<aside className="hidden md:block md:col-span-3 lg:col-span-2 sticky top-24 h-[calc(100vh-8rem)]">
<div className="space-y-8">
<div className="">
<h3 className="uppercase text-xs font-semibold text-zinc-500 tracking-wider mb-4 pr-2 pl-2">Explore Regions</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-white bg-zinc-800/50 rounded-lg border border-white/5" href="#">
<iconify-icon className="text-indigo-400" icon="solar:map-point-wave-linear"></iconify-icon>
                            Global Feed
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:mountains-linear"></iconify-icon>
                            Highlands
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:water-sun-linear"></iconify-icon>
                            Coastal &amp; Islands
                        </a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:city-linear"></iconify-icon>
                            Urban Decay
                        </a>
</div>
</div>
<div className="">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4 px-2">Your Journal</h3>
<div className="space-y-1">
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:bookmark-linear"></iconify-icon>
                            Saved Spots
                            <span className="ml-auto text-[10px] text-zinc-600">12</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-lg transition-all" href="#">
<iconify-icon icon="solar:gallery-linear"></iconify-icon>
                            My Drafts
                        </a>
</div>
</div>
</div>
<div className="absolute bottom-0 w-full p-4 rounded-xl bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/5">
<p className="text-xs text-indigo-200 mb-3 font-medium">Found a hidden gem?</p>
<button className="w-full py-2 bg-white text-zinc-950 text-xs font-medium rounded-lg hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:camera-add-linear" width="16"></iconify-icon>
                    Share Journey
                </button>
</div>
</aside>

<section className="md:col-span-9 lg:col-span-7 space-y-6">

<div className="glass-panel p-4 rounded-xl flex gap-4 items-start mb-8">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0 overflow-hidden">
<img alt="Me" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div className="flex-1">
<input className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none py-2.5" placeholder="Share your latest discovery..." type="text"/>
<div className="flex items-center justify-between pt-3 mt-2 border-t border-white/5">
<div className="flex gap-2">
<button className="p-2 text-zinc-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all">
<iconify-icon icon="solar:gallery-add-linear" width="18"></iconify-icon>
</button>
<button className="p-2 text-zinc-500 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-lg transition-all">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</button>
</div>
<button className="px-4 py-1.5 bg-zinc-800 text-zinc-400 text-xs font-medium rounded-full hover:bg-zinc-700 hover:text-white transition-colors">Post</button>
</div>
</div>
</div>

<article className="glass-panel rounded-xl overflow-hidden group">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-white/10 p-0.5">
<img alt="Author" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?img=47"/>
</div>
<div className="">
<h4 className="text-sm font-medium text-white">Elena R.</h4>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<span>2h ago</span>
<span className="w-0.5 h-0.5 bg-zinc-600 rounded-full"></span>
<span className="flex items-center gap-1 text-indigo-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                    Faroe Islands
                                </span>
</div>
</div>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<div className="px-4 pb-3">
<p className="text-sm leading-relaxed text-zinc-300">
                        Found this incredible spot just off the main trail near Gásadalur. The fog cleared up for exactly 10 minutes. Completely silent except for the waterfall. <span className="text-indigo-400 hover:underline cursor-pointer">#nordic</span> <span className="text-indigo-400 hover:underline cursor-pointer">#hidden</span>
</p>
</div>
<div className="relative h-96 w-full bg-zinc-800">
<img alt="Landscape" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?q=80&amp;w=2159&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
<iconify-icon className="text-white" icon="solar:camera-linear" width="14"></iconify-icon>
<span className="text-xs text-white font-medium">Sony A7III</span>
</div>
</div>
<div className="p-4 border-t border-white/5 flex items-center justify-between">
<div className="flex gap-6">
<button className="flex items-center gap-2 text-zinc-500 hover:text-pink-500 transition-colors group/btn">
<iconify-icon className="group-hover/btn:hidden" icon="solar:heart-linear" width="20"></iconify-icon>
<iconify-icon className="hidden group-hover/btn:block" icon="solar:heart-bold" width="20"></iconify-icon>
<span className="text-xs font-medium">2.4k</span>
</button>
<button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">48</span>
</button>
<button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</div>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="20"></iconify-icon>
</button>
</div>
</article>

<article className="glass-panel rounded-xl overflow-hidden">
<div className="p-4 flex items-center gap-3">
<div className="w-10 h-10 rounded-full border border-white/10 p-0.5">
<img alt="Author" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?img=12"/>
</div>
<div>
<h4 className="text-sm font-medium text-white">Marcus Chen</h4>
<div className="flex items-center gap-1.5 text-xs text-zinc-500">
<span>5h ago</span>
<span className="w-0.5 h-0.5 bg-zinc-600 rounded-full"></span>
<span className="flex items-center gap-1 text-indigo-400">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                                Kyoto, Japan
                            </span>
</div>
</div>
</div>
<div className="px-4 pb-3">
<p className="text-sm leading-relaxed text-zinc-300">
                        The backstreets of Gion at 4 AM are a completely different world. No tourists, just the lanterns.
                    </p>
</div>
<div className="grid grid-cols-2 gap-0.5 h-64 w-full">
<img className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img className="w-full h-full object-cover hover:opacity-80 transition-opacity cursor-pointer" src="https://images.unsplash.com/photo-1528360983277-13d9b15143b3?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-4 border-t border-white/5 flex items-center justify-between">
<div className="flex gap-6">
<button className="flex items-center gap-2 text-zinc-500 hover:text-pink-500 transition-colors">
<iconify-icon icon="solar:heart-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">892</span>
</button>
<button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">12</span>
</button>
</div>
</div>
</article>

<article className="glass-panel rounded-xl overflow-hidden p-6 relative">
<div className="absolute top-0 right-0 p-6 opacity-10">
<iconify-icon icon="solar:quote-up-square-linear" width="100"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-4 relative z-10">
<div className="w-8 h-8 rounded-full border border-white/10 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=68"/>
</div>
<span className="text-sm font-medium text-white">Sarah Jenkins</span>
<span className="text-xs text-zinc-600">•</span>
<span className="text-xs text-zinc-500">Travel Guide</span>
</div>
<h3 className="text-xl font-medium text-white mb-2 relative z-10 tracking-tight">Why you should skip the Blue Lagoon</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-4 relative z-10">
                    It's controversial, but hear me out. The crowds make it impossible to actually relax. Instead, rent a car and drive 2 hours north to...
                </p>
<a className="inline-flex items-center gap-1 text-sm text-indigo-400 hover:text-indigo-300 transition-colors relative z-10" href="#">
                    Read full story 
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</article>

<div className="flex justify-center py-8">
<iconify-icon className="animate-spin text-zinc-600" icon="solar:spinner-linear" width="24"></iconify-icon>
</div>
</section>

<aside className="hidden lg:block lg:col-span-3 sticky top-24 h-[calc(100vh-8rem)]">
<div className="space-y-6">

<div className="glass-panel rounded-xl p-5">
<div className="flex items-center justify-between mb-4">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Trending Now</h3>
<iconify-icon className="text-zinc-600" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-zinc-600">01</span>
<div className="">
<div className="text-sm text-white font-medium group-hover:text-indigo-400 transition-colors">Sintra, Portugal</div>
<div className="text-[10px] text-zinc-500">1.2k new posts</div>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-zinc-600">02</span>
<div>
<div className="text-sm text-white font-medium group-hover:text-indigo-400 transition-colors">Bali, Indonesia</div>
<div className="text-[10px] text-zinc-500">850 new posts</div>
</div>
</div>
</div>
<div className="flex items-center justify-between group cursor-pointer">
<div className="flex items-center gap-3">
<span className="text-xs font-mono text-zinc-600">03</span>
<div>
<div className="text-sm text-white font-medium group-hover:text-indigo-400 transition-colors">Dolomites, Italy</div>
<div className="text-[10px] text-zinc-500">640 new posts</div>
</div>
</div>
</div>
</div>
</div>

<div className="glass-panel rounded-xl p-5">
<h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Top Explorers</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full bg-zinc-800" src="https://i.pravatar.cc/150?img=11"/>
<div>
<div className="text-sm text-white font-medium">Alex M.</div>
<div className="text-[10px] text-zinc-500">Photographer</div>
</div>
</div>
<button className="text-xs border border-white/10 hover:bg-white hover:text-zinc-950 px-2.5 py-1 rounded text-white transition-colors">Follow</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img className="w-8 h-8 rounded-full bg-zinc-800" src="https://i.pravatar.cc/150?img=5"/>
<div>
<div className="text-sm text-white font-medium">Sophie L.</div>
<div className="text-[10px] text-zinc-500">Backpacker</div>
</div>
</div>
<button className="text-xs border border-white/10 hover:bg-white hover:text-zinc-950 px-2.5 py-1 rounded text-white transition-colors">Follow</button>
</div>
</div>
</div>

<div className="flex flex-wrap gap-2 text-[10px] text-zinc-600 px-2">
<a className="hover:text-zinc-400" href="#">About</a>•
                    <a className="hover:text-zinc-400" href="#">Guidelines</a>•
                    <a className="hover:text-zinc-400" href="#">Privacy</a>•
                    <a className="hover:text-zinc-400" href="#">Terms</a>
<span className="block w-full mt-2">© 2024 Atlas Inc.</span>
</div>
</div>
</aside>
</main>

<div className="md:hidden fixed bottom-0 w-full bg-zinc-950 border-t border-white/5 z-50 pb-safe">
<div className="flex justify-around items-center h-16">
<a className="flex flex-col items-center gap-1 text-white" href="#">
<iconify-icon icon="solar:home-2-bold" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:compass-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Explore</span>
</a>
<button className="flex flex-col items-center justify-center -mt-8">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg shadow-white/10 text-zinc-950">
<iconify-icon icon="solar:add-circle-linear" width="28"></iconify-icon>
</div>
</button>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:chat-round-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Chat</span>
</a>
<a className="flex flex-col items-center gap-1 text-zinc-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:user-linear" width="24"></iconify-icon>
<span className="text-[10px] font-medium">Profile</span>
</a>
</div>
</div>

    </>
  );
}
