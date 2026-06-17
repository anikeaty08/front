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
      

<aside className="w-20 lg:w-24 h-screen sticky top-0 flex flex-col items-center py-8 border-r border-white/20 glass-card">
<div className="mb-12">
<span className="text-3xl font-semibold text-[#1877F2] tracking-tighter">f</span>
</div>
<nav className="flex flex-col gap-10 items-center">
<div className="relative group cursor-pointer text-[#1877F2]">
<iconify-icon icon="solar:home-2-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1877F2] rounded-full"></div>
</div>
<div className="relative group cursor-pointer text-slate-400 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="relative group cursor-pointer text-slate-400 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-[#1877F2] text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white">3</div>
</div>
<div className="relative group cursor-pointer text-slate-400 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
<div className="relative group cursor-pointer text-slate-400 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</div>
</nav>
<div className="mt-auto">
<img alt="Profile" className="w-10 h-10 rounded-2xl object-cover ring-2 ring-white/50 shadow-sm" src="https://i.pravatar.cc/150?u=me"/>
</div>
</aside>

<main className="flex-1 max-w-4xl mx-auto px-6 py-8 h-screen overflow-y-auto">

<section className="flex gap-4 mb-8 overflow-x-auto pb-2">

<div className="min-w-[110px] h-44 rounded-3xl relative overflow-hidden glass-card group cursor-pointer">
<div className="h-2/3 overflow-hidden">
<img alt="Me" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://i.pravatar.cc/150?u=me"/>
</div>
<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-white flex flex-col items-center justify-center">
<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1877F2] rounded-full flex items-center justify-center border-4 border-white text-white">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</div>
<span className="text-[10px] font-medium mt-3 uppercase tracking-wider">Create</span>
</div>
</div>

<div className="min-w-[110px] h-44 rounded-3xl relative overflow-hidden group cursor-pointer shadow-lg">
<img alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&amp;q=80"/>
<div className="absolute inset-0 story-gradient"></div>
<div className="absolute top-3 left-3 w-8 h-8 rounded-xl border-2 border-[#1877F2] overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a"/>
</div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium">Sarah J.</span>
</div>
<div className="min-w-[110px] h-44 rounded-3xl relative overflow-hidden group cursor-pointer shadow-lg">
<img alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&amp;q=80"/>
<div className="absolute inset-0 story-gradient"></div>
<div className="absolute top-3 left-3 w-8 h-8 rounded-xl border-2 border-[#1877F2] overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=b"/>
</div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium">Marcus V.</span>
</div>
<div className="min-w-[110px] h-44 rounded-3xl relative overflow-hidden group cursor-pointer shadow-lg">
<img alt="Story" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&amp;q=80"/>
<div className="absolute inset-0 story-gradient"></div>
<div className="absolute top-3 left-3 w-8 h-8 rounded-xl border-2 border-[#1877F2] overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=c"/>
</div>
<span className="absolute bottom-3 left-3 text-white text-xs font-medium">Elena R.</span>
</div>
</section>

<div className="glass-card rounded-[24px] p-6 mb-8">
<div className="flex gap-4 items-center mb-6">
<img alt="User" className="w-11 h-11 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=me"/>
<input className="flex-1 bg-white/50 border border-white/40 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 ring-[#1877F2]/20 transition-all placeholder:text-slate-400" placeholder="Share something new today..." type="text"/>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/30">
<div className="flex gap-6">
<button className="flex items-center gap-2 text-slate-500 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Photo</span>
</button>
<button className="flex items-center gap-2 text-slate-500 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Video</span>
</button>
<button className="flex items-center gap-2 text-slate-500 hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="20"></iconify-icon>
<span className="text-xs font-medium">Feelings</span>
</button>
</div>
<button className="bg-[#1877F2] text-white text-[11px] font-semibold px-8 py-2.5 rounded-xl tracking-widest hover:bg-[#1565C0] shadow-lg shadow-blue-200 transition-all">PUBLISH</button>
</div>
</div>

<div className="glass-card rounded-[24px] overflow-hidden mb-8">
<div className="p-6">
<div className="flex items-center justify-between mb-4">
<div className="flex gap-3 items-center">
<img alt="User" className="w-10 h-10 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=alex"/>
<div>
<h4 className="text-sm font-semibold tracking-tight">Alex Thompson</h4>
<p className="text-[10px] text-slate-400">2 hours ago • New York</p>
</div>
</div>
<button className="text-slate-400 hover:text-slate-600">
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-sm leading-relaxed mb-4 text-slate-600">Captured the golden hour today in Central Park. The architecture against the sunset is just breathtaking. 🌆✨</p>
<div className="rounded-2xl overflow-hidden mb-5">
<img alt="Post Photo" className="w-full aspect-video object-cover" src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&amp;q=80"/>
</div>
<div className="flex items-center justify-between text-slate-400">
<div className="flex gap-6">
<div className="flex items-center gap-2 cursor-pointer hover:text-[#1877F2] transition-colors">
<iconify-icon icon="solar:heart-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">1,356</span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:chat-line-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">108</span>
</div>
<div className="flex items-center gap-2 cursor-pointer hover:text-slate-600 transition-colors">
<iconify-icon icon="solar:share-linear" width="22"></iconify-icon>
<span className="text-xs font-medium">42</span>
</div>
</div>
<div className="flex -space-x-2">
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=1"/>
<img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?u=2"/>
<div className="w-6 h-6 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[8px] font-bold">+12</div>
</div>
</div>
</div>
</div>
</main>

<div className="hidden xl:flex flex-col w-80 h-screen sticky top-0 py-8 pr-6 gap-6">

<div className="glass-card rounded-[24px] p-6 flex-1 flex flex-col overflow-hidden">
<h3 className="text-base font-semibold tracking-tight mb-6">Your Friends</h3>
<div className="flex flex-col gap-5 overflow-y-auto pr-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Jane" className="w-10 h-10 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=jane"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h5 className="text-xs font-semibold">Jane Cooper</h5>
<p className="text-[10px] text-green-500 font-medium">Online</p>
</div>
</div>
<iconify-icon className="text-slate-300 cursor-pointer hover:text-[#1877F2]" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between opacity-70">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Robert" className="w-10 h-10 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=robert"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-slate-300 border-2 border-white rounded-full"></div>
</div>
<div>
<h5 className="text-xs font-semibold">Robert Fox</h5>
<p className="text-[10px] text-slate-400">Offline</p>
</div>
</div>
<iconify-icon className="text-slate-300 cursor-pointer hover:text-[#1877F2]" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Wade" className="w-10 h-10 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=wade"/>
<div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<div>
<h5 className="text-xs font-semibold">Wade Warren</h5>
<p className="text-[10px] text-green-500 font-medium">Online</p>
</div>
</div>
<iconify-icon className="text-slate-300 cursor-pointer hover:text-[#1877F2]" icon="solar:chat-round-line-linear" width="18"></iconify-icon>
</div>
</div>
<div className="mt-8 pt-6 border-t border-white/30">
<h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-4">Suggested</h3>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="Anna" className="w-9 h-9 rounded-xl object-cover" src="https://i.pravatar.cc/150?u=anna"/>
<div>
<h5 className="text-xs font-medium">Anna Koval</h5>
<p className="text-[9px] text-slate-400">Mutual friend with Jane</p>
</div>
</div>
<iconify-icon className="text-[#1877F2] cursor-pointer" icon="solar:user-plus-linear" width="18"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="hidden 2xl:flex flex-col w-80 h-screen sticky top-0 py-8 pr-8">
<div className="glass-card rounded-[24px] p-6 h-full flex flex-col overflow-hidden">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-semibold tracking-tight">Last Chats</h3>
<iconify-icon className="text-slate-400 hover:text-slate-600 cursor-pointer" icon="solar:pen-2-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-2 overflow-y-auto">

<div className="p-3 rounded-2xl hover:bg-white/40 cursor-pointer transition-colors group">
<div className="flex gap-3">
<div className="shrink-0">
<img alt="Sam" className="w-11 h-11 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=sam"/>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex justify-between items-center mb-0.5">
<h5 className="text-xs font-semibold truncate">Sam Altmann</h5>
<span className="text-[10px] text-slate-400">12:45 PM</span>
</div>
<p className="text-[11px] text-slate-500 line-clamp-2 leading-snug group-hover:text-slate-700">Hey, are we still meeting up for the project review today?</p>
</div>
</div>
</div>

<div className="p-3 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/10 cursor-pointer transition-colors group">
<div className="flex gap-3">
<div className="shrink-0 relative">
<img alt="Lara" className="w-11 h-11 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=lara"/>
<div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#1877F2] rounded-full ring-2 ring-white"></div>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex justify-between items-center mb-0.5">
<h5 className="text-xs font-semibold truncate">Lara Croft</h5>
<span className="text-[10px] text-[#1877F2] font-semibold">Just now</span>
</div>
<p className="text-[11px] text-slate-600 font-medium line-clamp-2 leading-snug">Sent a photo 📷</p>
</div>
</div>
</div>
<div className="p-3 rounded-2xl hover:bg-white/40 cursor-pointer transition-colors group">
<div className="flex gap-3">
<div className="shrink-0">
<img alt="Dev" className="w-11 h-11 rounded-2xl object-cover" src="https://i.pravatar.cc/150?u=dev"/>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex justify-between items-center mb-0.5">
<h5 className="text-xs font-semibold truncate">Dev Patel</h5>
<span className="text-[10px] text-slate-400">Yesterday</span>
</div>
<p className="text-[11px] text-slate-500 line-clamp-2 leading-snug">The deployment was successful! Let's talk about the next phase.</p>
</div>
</div>
</div>
</div>
<button className="mt-auto w-full py-3 bg-white/40 border border-white/60 rounded-xl text-xs font-semibold text-slate-500 hover:bg-white transition-all">
                View All Messages
            </button>
</div>
</div>

    </>
  );
}
