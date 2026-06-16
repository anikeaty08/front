import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Icons
        lucide.createIcons();

        // Splash Screen Logic
        document.addEventListener('DOMContentLoaded', () => {
            const splashScreen = document.getElementById('splash-screen');
            const mainContent = document.getElementById('main-content');

            // Simulate loading time then transition
            setTimeout(() => {
                splashScreen.classList.add('opacity-0');
                
                setTimeout(() => {
                    splashScreen.style.display = 'none';
                    mainContent.classList.remove('opacity-0');
                    mainContent.classList.add('opacity-100');
                }, 1000); // Wait for fade out
                
            }, 1800); // Time splash screen is visible
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-md bg-[#181A2F] min-h-screen overflow-x-hidden shadow-2xl overflow-y-auto pb-24" id="app-container">

<div className="absolute inset-0 z-50 bg-[#181A2F] flex flex-col items-center justify-center transition-opacity duration-1000 ease-in-out" id="splash-screen">
<div className="relative mb-8">
<div className="absolute inset-0 bg-purple-500 blur-3xl opacity-40 rounded-full"></div>
<div className="w-24 h-24 relative z-10 rounded-[2rem] bg-gradient-to-br from-[#8B5CF6] via-[#6366F1] to-[#F59E0B] flex items-center justify-center shadow-lg">
<i className="w-10 h-10 text-white stroke-[1.5] fill-white/20" data-lucide="moon"></i>
</div>
</div>
<h1 className="text-3xl font-medium tracking-tight text-white mb-3">Lumina</h1>
<p className="text-lg text-indigo-200/80 font-medium">Sleep &amp; Relax</p>
</div>

<div className="opacity-0 transition-opacity duration-1000 ease-in-out" id="main-content">

<div className="relative h-[40vh] w-full">

<div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1506744626753-eda8151a74a0?q=80&amp'}}></div>

<div className="absolute top-10 right-6 flex gap-3 z-20">
<button className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform active:scale-95">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center transition-transform active:scale-95">
<i className="w-5 h-5 text-white stroke-[1.5]" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="relative flex h-16 w-full -mt-4">

<div className="w-[42%] h-full bg-[#181A2F] relative z-20 rounded-tr-[2.5rem] flex items-center px-8 shadow-[10px_0_20px_-10px_rgba(0,0,0,0.4)]">
<span className="text-white text-lg font-medium tracking-tight">stories</span>
</div>

<div className="flex-1 h-full bg-[#24263D] relative z-10 flex items-center justify-around pl-6 -ml-8 rounded-tl-[2rem]">
<span className="text-indigo-200/60 text-base font-medium transition-colors hover:text-white cursor-pointer">Narrators</span>
<span className="text-indigo-200/60 text-base font-medium transition-colors hover:text-white cursor-pointer">Favorites</span>
</div>
</div>

<div className="px-5 pt-8 grid grid-cols-2 gap-x-4 gap-y-8">

<div className="flex flex-col gap-3 group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#24263D]">
<img alt="Ethereal nature" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181A2F]/80 via-transparent to-transparent"></div>

<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="px-1">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Mystic Forest</h3>
<p className="text-sm text-indigo-200/60 font-medium">4 Hours • Deep Sleep</p>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#24263D]">
<img alt="Ocean whale" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1518467166778-b88f373ffec7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181A2F]/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="px-1">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Ocean Song</h3>
<p className="text-sm text-indigo-200/60 font-medium">4 Hours • Relaxation</p>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#24263D]">
<img alt="Campfire" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181A2F]/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="px-1">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Night Embers</h3>
<p className="text-sm text-indigo-200/60 font-medium">4 Hours • Calm</p>
</div>
</div>

<div className="flex flex-col gap-3 group cursor-pointer">
<div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-[#24263D]">
<img alt="Tent under stars" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1534880606858-29b0e8a24e8d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#181A2F]/80 via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-white fill-white ml-0.5" data-lucide="play"></i>
</div>
</div>
<div className="px-1">
<h3 className="text-lg font-medium text-white tracking-tight mb-1">Starry Night</h3>
<p className="text-sm text-indigo-200/60 font-medium">4 Hours • Sleep Aid</p>
</div>
</div>
</div>
</div>

<nav className="absolute bottom-0 w-full max-w-md bg-[#0F111A]/95 backdrop-blur-xl border-t border-white/5 pt-4 pb-6 px-6 flex justify-between items-end z-40 rounded-t-[2rem]">

<button className="flex flex-col items-center gap-1.5 w-16">
<div className="relative">
<i className="w-6 h-6 text-[#FBBF24] fill-[#FBBF24] stroke-[1.5] relative z-10" data-lucide="flame"></i>
<div className="absolute inset-0 bg-[#FBBF24] blur-lg opacity-40 rounded-full z-0 translate-y-1"></div>
</div>
<span className="text-[13px] font-medium text-white tracking-tight">Stories</span>
</button>

<button className="flex flex-col items-center gap-1.5 w-16 group">
<i className="w-6 h-6 text-indigo-200/50 stroke-[1.5] transition-colors group-hover:text-white" data-lucide="sliders-horizontal"></i>
<span className="text-[13px] font-medium text-indigo-200/50 transition-colors group-hover:text-white tracking-tight">Create</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16 group">
<i className="w-6 h-6 text-indigo-200/50 stroke-[1.5] transition-colors group-hover:text-white" data-lucide="cloud"></i>
<span className="text-[13px] font-medium text-indigo-200/50 transition-colors group-hover:text-white tracking-tight">Sounds</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16 group">
<i className="w-6 h-6 text-indigo-200/50 stroke-[1.5] transition-colors group-hover:text-white" data-lucide="sparkles"></i>
<span className="text-[13px] font-medium text-indigo-200/50 transition-colors group-hover:text-white tracking-tight">Meditate</span>
</button>
<button className="flex flex-col items-center gap-1.5 w-16 group">
<i className="w-6 h-6 text-indigo-200/50 stroke-[1.5] transition-colors group-hover:text-white" data-lucide="user"></i>
<span className="text-[13px] font-medium text-indigo-200/50 transition-colors group-hover:text-white tracking-tight">Profile</span>
</button>
</nav>
</div>


    </>
  );
}
