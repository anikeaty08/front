import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
orange: {
500: '#F97316', // Tailwind Orange 500
50: '#FFF7ED',
}
},
fontFamily: {
'display': ['Pacifico', 'cursive'],
'body': ['Varela Round', 'sans-serif'],
},
animation: {
'fan-in': 'fanIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) both',
'float': 'float 6s ease-in-out infinite both',
},
keyframes: {
fanIn: {
'0%': { transform: 'translateY(50px) rotate(0deg) scale(0.9)', opacity: '0.01' },
'100%': { opacity: '1' }
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 w-full h-full pointer-events-none z-0 flex justify-center">
<div className="w-full h-full max-w-7xl grid grid-cols-4 border-x border-gray-200/40">
<div className="border-r border-gray-200/40 h-full relative">
<span className="absolute top-32 left-4 text-xs font-semibold text-gray-300 font-body font-poppins" style={{}}>01</span>
</div>
<div className="border-r border-gray-200/40 h-full relative hidden md:block">
<span className="absolute top-96 left-4 text-xs font-semibold text-gray-300 font-body font-poppins" style={{}}>02</span>
</div>
<div className="border-r border-gray-200/40 h-full relative hidden lg:block">
<span className="absolute bottom-32 left-4 text-xs font-semibold text-gray-300 font-body font-poppins" style={{}}>03</span>
</div>
<div className="h-full"></div>
</div>
</div>

<nav className="relative z-50 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="text-orange-500 transition-transform group-hover:rotate-12 duration-500">
<iconify-icon height="32" icon="solar:palette-linear" width="32"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-gray-900 font-body font-poppins" style={{}}>NORA Studio</span>
</a>

<div className="hidden md:flex items-center gap-8 text-base text-gray-600 font-medium">
<a className="hover:text-orange-500 transition-colors font-poppins" href="#" style={{}}>Start Creating</a>
<a className="flex items-center gap-1 hover:text-orange-500 transition-colors font-poppins" href="#" style={{}}>
<iconify-icon className="text-orange-500" icon="solar:bolt-bold-duotone"></iconify-icon>
                Strategy
            </a>
<a className="hover:text-orange-500 transition-colors font-poppins" href="#" style={{}}>Pricing</a>
<a className="hover:text-orange-500 transition-colors font-poppins" href="#" style={{}}>Solution</a>
</div>

<div className="flex items-center gap-3">
<button className="p-2 text-gray-500 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100">
<iconify-icon height="24" icon="solar:user-circle-bold-duotone" width="24"></iconify-icon>
</button>
<button className="p-2 text-gray-500 hover:text-orange-500 transition-colors rounded-full hover:bg-gray-100">
<iconify-icon height="24" icon="solar:sun-2-bold-duotone" width="24"></iconify-icon>
</button>

<button className="md:hidden p-2 text-gray-500 hover:text-orange-500">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<main className="z-10 flex-grow flex flex-col w-full max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-24 pl-4 relative items-center justify-center">

<div className="text-center max-w-4xl mx-auto mb-16 relative">
<h1 className="md:text-7xl lg:text-[5rem] leading-tight md:leading-[1.1] text-balance animate-[fan-in_0.8s_ease-out_both] text-6xl text-gray-900 font-medium font-google-sans-flex" style={{}}>A creative space to display your <span className="text-orange-500 font-medium font-google-sans-flex" style={{}}>masterpieces.</span></h1>
</div>

<div className="relative w-full max-w-5xl h-[300px] md:h-[380px] flex justify-center items-center mb-16 select-none perspective-1000">

<div className="absolute left-[5%] md:left-[15%] top-0 md:-top-8 z-30 animate-float" style={{animationDelay: '0s'}}>
<div className="bg-[#3B82F6] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform -rotate-6 hover:scale-105 transition-transform cursor-default">
<iconify-icon className="" height="16" icon="solar:verified-check-bold" style={{color: 'rgb(255, 255, 255)'}} width="16"></iconify-icon>
<span className="text-sm font-semibold font-poppins" style={{}}>@coplin</span>

<div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-[#3B82F6] transform rotate-45"></div>
</div>
</div>

<div className="absolute right-[5%] md:right-[15%] top-10 md:-top-4 z-30 animate-float" style={{animationDelay: '1.5s'}}>
<div className="bg-[#10B981] text-white px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 transform rotate-3 hover:scale-105 transition-transform cursor-default">
<iconify-icon icon="solar:star-circle-bold" width="16"></iconify-icon>
<span className="text-sm font-semibold font-poppins" style={{}}>@andrea</span>
<div className="absolute -bottom-1.5 right-4 w-3 h-3 bg-[#10B981] transform rotate-45"></div>
</div>
</div>

<div className="flex md:scale-90 lg:scale-100 transition-transform duration-500 w-full h-full relative scale-[0.65] items-center justify-center">

<div className="absolute w-56 h-72 bg-gray-900 rounded-2xl shadow-xl border-4 border-white transform -rotate-[15deg] -translate-x-[220px] translate-y-8 hover:-translate-y-4 hover:rotate-[-18deg] transition-all duration-300 ease-out z-0 overflow-hidden group">
<img alt="Art" className="group-hover:opacity-100 transition-opacity opacity-90 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f977af0d-56e2-48e9-a72d-0382f04e5cdf_1600w.webp?w=800&amp;q=80"/>
<div className="absolute bottom-2 left-2 text-white/80 text-xs font-mono rotate-90 origin-bottom-left font-poppins" style={{}}>TESLA</div>
</div>

<div className="absolute w-56 h-72 bg-white rounded-2xl shadow-2xl border-4 border-white transform -rotate-[8deg] -translate-x-[110px] translate-y-4 hover:-translate-y-6 hover:rotate-[-10deg] transition-all duration-300 ease-out z-10 overflow-hidden group">
<img alt="Art" className="w-full h-full object-cover shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1a547482-750d-4395-80aa-aaa0985d73ef_1600w.webp?w=800&amp;q=80"/>
<div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
<div className="text-white text-xs font-semibold font-poppins" style={{}}>Abstract Blue</div>
</div>
</div>

<div className="absolute w-60 h-80 bg-orange-400 rounded-2xl shadow-2xl border-4 border-white transform rotate-0 z-20 hover:-translate-y-8 transition-all duration-300 ease-out overflow-hidden group">
<img alt="Art" className="text-zinc-950 object-cover border-sky-400/20 w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/582afef4-b810-47b8-a047-8b3597c323e1_1600w.webp?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white">
<iconify-icon icon="solar:heart-bold" width="16"></iconify-icon>
</div>
</div>

<div className="absolute w-56 h-72 bg-red-500 rounded-2xl shadow-2xl border-4 border-white transform rotate-[8deg] translate-x-[110px] translate-y-4 hover:-translate-y-6 hover:rotate-[10deg] transition-all duration-300 ease-out z-10 overflow-hidden group">
<img alt="Art" className="w-full h-full object-cover saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a8c42df7-3d2a-452c-8609-33696606ae50_800w.webp?w=800&amp;q=80"/>
<div className="absolute top-0 right-0 bg-yellow-400 px-3 py-1 font-bold text-xs transform translate-x-4 translate-y-4 rotate-45 shadow-sm font-poppins" style={{}}>NEW</div>
<div className="absolute bottom-4 left-4">
<span className="bg-white text-black text-xs font-bold px-2 py-1 rounded font-poppins" style={{}}>66</span>
</div>
</div>

<div className="absolute w-56 h-72 bg-emerald-800 rounded-2xl shadow-xl border-4 border-white transform rotate-[15deg] translate-x-[220px] translate-y-8 hover:-translate-y-4 hover:rotate-[18deg] transition-all duration-300 ease-out z-0 overflow-hidden group">
<img alt="Art" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a2cfcaf9-6b2e-419b-8821-364b9379ddf0_800w.webp?w=800&amp;q=80"/>
<div className="group-hover:bg-transparent transition-colors bg-gray-950/20 bg-cover bg-center absolute top-0 right-0 bottom-0 left-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fc257d3b-7bba-4257-9a9c-d6a27743b7e7_1600w.webp?w=800&amp;q=80)]"></div>
<div className="absolute bottom-4 right-4 text-white">
<iconify-icon icon="solar:music-note-bold-duotone" width="24"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="max-w-xl mx-auto text-center space-y-8 mt-4 relative z-20">
<p className="text-xl text-gray-500 font-medium leading-relaxed font-poppins" style={{}}>
                Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-3.5 bg-gray-900 text-white rounded-full font-semibold text-lg hover:bg-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center gap-2">
<span className="font-poppins" style={{}}>Join for $9.99/m</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-3.5 bg-gray-100 text-gray-700 rounded-full font-semibold text-lg hover:bg-gray-200 transition-colors border border-gray-200 font-poppins" style={{}}>
                    Read more
                </button>
</div>
</div>
</main>

<div className="fixed bottom-8 left-8 hidden xl:block animate-bounce opacity-50" style={{animationDuration: '3s'}}>
<iconify-icon className="text-gray-400" icon="solar:mouse-circle-linear" width="32"></iconify-icon>
</div>

    </>
  );
}
