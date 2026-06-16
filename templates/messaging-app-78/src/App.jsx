import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
aura: {
50: '#f2f8fc',
100: '#e1f0f8',
500: '#3b82f6', // Adjusted blue for Apple-like vibrancy
900: '#0f172a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'breathe': 'breathe 4s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
breathe: {
'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
'50%': { opacity: '0.6', transform: 'scale(1.1)' },
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
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
<div className="glass mx-auto max-w-5xl mt-4 rounded-full px-6 py-3 flex items-center justify-between shadow-sm shadow-black/5">
<a className="text-lg font-medium tracking-tighter text-slate-900 flex items-center gap-1 group" href="#">
<span className="w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></span>
                Aura
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#features">Features</a>
<a className="hover:text-slate-900 transition-colors" href="#privacy">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#manifesto">Manifesto</a>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0">
                Get Aura
            </button>
</div>
</nav>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[40rem] h-[40rem] bg-blue-200/30 rounded-full blur-[120px] mix-blend-multiply animate-breathe"></div>
<div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-200/30 rounded-full blur-[120px] mix-blend-multiply animate-breathe" style={{animationDelay: '2s'}}></div>
</div>

<header className="relative z-10 pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-500 mb-8 animate-[fadeIn_1s_ease-out]">
<iconify-icon className="text-blue-500" icon="lucide:sparkles" width="14"></iconify-icon>
<span>Version 2.0 is here</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-[0.95]">
            Communication,<br/>
<span className="text-slate-400">clarified.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Remove the noise. Aura strips away the clutter of modern chat apps, leaving only what matters: your connection.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2">
                Download for iOS
                <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="h-12 px-8 rounded-full bg-white text-slate-600 font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                Read the Manifesto
            </button>
</div>
</header>

<section className="relative z-10 px-4 md:px-0 max-w-6xl mx-auto mb-32">
<div className="relative mx-auto border-gray-800 bg-gray-900 border-[10px] rounded-[3rem] h-[600px] w-[320px] md:h-[700px] md:w-[800px] md:rounded-[2.5rem] shadow-2xl flex flex-col md:flex-row overflow-hidden ring-1 ring-slate-900/5">

<div className="hidden md:flex w-64 bg-slate-50 border-r border-slate-200 flex-col pt-8 pb-4 px-4">
<div className="flex items-center justify-between mb-8 px-2">
<div className="font-semibold tracking-tight text-lg">Messages</div>
<div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-500 transition-colors cursor-pointer">
<iconify-icon icon="lucide:plus" width="16"></iconify-icon>
</div>
</div>

<div className="space-y-2">
<div className="p-3 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex items-center justify-center text-blue-600 font-medium text-xs">EL</div>
<div>
<div className="text-sm font-medium text-slate-900">Elara Vance</div>
<div className="text-xs text-slate-400">Coffee at 10?</div>
</div>
<div className="w-2 h-2 rounded-full bg-blue-500 ml-auto"></div>
</div>
<div className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center gap-3 cursor-pointer opacity-60">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs">J</div>
<div>
<div className="text-sm font-medium text-slate-900">James Hall</div>
<div className="text-xs text-slate-400">Sent an image</div>
</div>
</div>
<div className="p-3 rounded-2xl hover:bg-slate-100 transition-colors flex items-center gap-3 cursor-pointer opacity-60">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-medium text-xs">M</div>
<div>
<div className="text-sm font-medium text-slate-900">Mom</div>
<div className="text-xs text-slate-400">Call me later</div>
</div>
</div>
</div>
</div>

<div className="flex-1 bg-white flex flex-col relative">

<div className="h-16 border-b border-slate-50 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md sticky top-0 z-20">
<div className="flex items-center gap-3">
<div className="md:hidden text-slate-400">
<iconify-icon icon="lucide:chevron-left" width="24"></iconify-icon>
</div>
<div className="font-medium text-slate-900">Elara Vance</div>
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</div>
<div className="text-slate-400 hover:text-slate-600 cursor-pointer">
<iconify-icon icon="lucide:info" width="20"></iconify-icon>
</div>
</div>

<div className="flex-1 p-6 space-y-6 overflow-y-auto bg-white" x-data="{ showed: false }" x-init="setTimeout(() =&gt; showed = true, 500)">
<div className="text-center text-xs text-slate-300 font-medium tracking-wide py-4">TODAY 9:41 AM</div>

<div :className="{ 'translate-y-0 opacity-100': showed }" className="flex items-end gap-3 transition-all duration-700 transform translate-y-4 opacity-0">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex-shrink-0"></div>
<div className="bg-slate-50 text-slate-800 px-5 py-3 rounded-2xl rounded-bl-none max-w-[80%] text-[15px] leading-relaxed">
                            Hey! Did you see the new design update?
                        </div>
</div>

<div :className="{ 'translate-y-0 opacity-100': showed }" className="flex items-end gap-3 flex-row-reverse transition-all duration-700 delay-300 transform translate-y-4 opacity-0">
<div className="bg-blue-600 text-white px-5 py-3 rounded-2xl rounded-br-none max-w-[80%] text-[15px] leading-relaxed shadow-lg shadow-blue-500/20">
                            It looks incredible. So clean.
                        </div>
</div>

<div :className="{ 'translate-y-0 opacity-100': showed }" className="flex items-end gap-3 transition-all duration-700 delay-700 transform translate-y-4 opacity-0">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-100 to-blue-50 flex-shrink-0"></div>
<div className="bg-slate-50 text-slate-800 px-5 py-3 rounded-2xl rounded-bl-none max-w-[80%] text-[15px] leading-relaxed flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-slate-900 shadow-sm">
<iconify-icon className="ml-0.5" icon="lucide:play" width="12"></iconify-icon>
</div>
<div className="h-1 bg-slate-200 w-24 rounded-full overflow-hidden">
<div className="h-full bg-slate-900 w-1/3"></div>
</div>
<span className="text-xs text-slate-400">0:14</span>
</div>
</div>
</div>

<div className="p-4 bg-white">
<div className="h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center px-4 gap-3 focus-within:border-blue-500/50 focus-within:ring-4 focus-within:ring-blue-500/10 transition-all">
<div className="text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">
<iconify-icon icon="lucide:plus" width="20"></iconify-icon>
</div>
<input className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder:text-slate-400 h-full" placeholder="Type a message..." type="text"/>
<div className="text-slate-400 cursor-pointer hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:mic" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-32" id="features">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Designed for<br/>peace of mind.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[600px]">

<div className="md:col-span-2 md:row-span-2 rounded-[2.5rem] bg-white p-8 md:p-12 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-all duration-500">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-b from-slate-50 to-white rounded-bl-[100%] -z-0"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 mb-6">
<iconify-icon icon="lucide:moon" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Zen Mode</h3>
<p className="text-slate-500 max-w-sm leading-relaxed">
                            Silence notifications intelligently. Aura learns your schedule and filters interruptions, letting through only what's urgent.
                        </p>
</div>

<div className="mt-12 bg-slate-50 rounded-3xl p-6 w-full max-w-sm border border-slate-100 mx-auto md:mx-0 select-none" x-data="{ active: true }">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-slate-700">Deep Focus</span>

<div @click="active = !active" className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
<div :className="active ? 'bg-blue-500' : 'bg-slate-200'" className="block overflow-hidden h-7 rounded-full bg-gray-300 cursor-pointer transition-colors duration-300 bg-blue-500"></div>
<div :style={{active ? 'transform: 'translateX(100%)', ': '\'transform: translateX(0)'}} className="absolute block w-5 h-5 rounded-full bg-white shadow inset-y-0 left-1 top-1 cursor-pointer transition-transform duration-300" style={{transform: 'translateX(100%)'}}></div>
</div>
</div>
<div :className="active ? 'opacity-40 pointer-events-none grayscale' : 'opacity-100'" className="space-y-3 transition-opacity duration-300 opacity-40 pointer-events-none grayscale">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-[10px] font-bold">IG</div>
<div className="h-2 w-24 bg-slate-200 rounded-full"></div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 text-[10px] font-bold">TW</div>
<div className="h-2 w-32 bg-slate-200 rounded-full"></div>
</div>
</div>
<div :className="active ? 'opacity-100' : 'opacity-0'" className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none transition-opacity duration-300 opacity-100">
<span className="bg-white/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full text-slate-500 shadow-sm">Silenced</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-slate-900 p-8 shadow-lg text-white relative overflow-hidden group">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-500/20 rounded-full blur-[50px] group-hover:bg-blue-500/30 transition-all duration-700"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<iconify-icon className="text-blue-400" icon="lucide:shield-check" width="24"></iconify-icon>
<div>
<h3 className="text-xl font-medium tracking-tight mb-2">Zero Knowledge</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                            End-to-end encryption. Even we can't read your messages.
                        </p>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-100 flex flex-col justify-between group hover:border-blue-100 transition-colors">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-2">Pixel Perfect</h3>
<p className="text-slate-500 text-sm leading-relaxed">
                        Every interaction is fluid. 120Hz animations on supported displays.
                    </p>
</div>
</div>
</div>
</section>

<div className="max-w-6xl mx-auto px-6 mb-32">
<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
</div>

<section className="max-w-4xl mx-auto px-6 text-center mb-32">
<h2 className="text-6xl md:text-8xl font-medium tracking-tighter text-slate-900 mb-6">
<span className="text-transparent bg-clip-text bg-gradient-to-b from-slate-800 to-slate-400">Less isexponentially more.</span>
</h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 mt-16">
<div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">0</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Ads</div>
</div>
<div>
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">20ms</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Latency</div>
</div>
<div className="col-span-2 md:col-span-1">
<div className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">100%</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Private</div>
</div>
</div>
</section>

<section className="mx-4 mb-4 rounded-[3rem] bg-slate-900 text-white py-24 px-6 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
</div>
<div className="relative z-10 max-w-2xl mx-auto">
<iconify-icon className="text-blue-500 mb-8 mx-auto" icon="lucide:message-circle" width="48"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Ready to clear the air?</h2>
<p className="text-slate-400 mb-10 text-lg font-light">Join thousands of users who have switched to a calmer way of connecting.</p>
<form className="max-w-md mx-auto flex gap-2">
<input className="flex-1 bg-white/10 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:bg-white/20 transition-all" placeholder="Enter your email" type="email"/>
<button className="bg-white text-slate-900 px-8 py-4 rounded-full font-medium hover:bg-blue-50 transition-colors" type="button">
                    Join
                </button>
</form>
<p className="mt-6 text-xs text-slate-500">Available on iOS and macOS. Android coming late 2024.</p>
</div>
</section>

<footer className="flex flex-col md:flex-row text-xs font-medium text-slate-400 max-w-6xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-2 h-2 rounded-full bg-slate-900"></div>
<span className="tracking-tight font-semibold">Aura Inc.</span>
</div>
<div className="flex gap-8">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
</div>
<div>
            © 2024 Aura. Crafted with care.
        </div>
</footer>

    </>
  );
}
