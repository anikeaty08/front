import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    animation: {
                        'fade-in-down': 'fadeInDown 0.8s ease-out',
                        'shimmer': 'shimmer 2s linear infinite',
                    },
                    keyframes: {
                        fadeInDown: {
                            '0%': { opacity: '0', transform: 'translateY(-10px)' },
                            '100%': { opacity: '1', transform: 'translateY(0)' },
                        },
                        shimmer: {
                            '0%': { transform: 'translateX(-100%)' },
                            '100%': { transform: 'translateX(100%)' }
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
      

<div className="fixed top-0 left-0 w-full h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-800/20 via-black/0 to-transparent pointer-events-none z-0"></div>

<main className="relative z-10 w-full max-w-md px-6 py-24 flex flex-col items-center">

<div className="flex flex-col items-center mb-10 text-center animate-fade-in-down">
<div className="relative group cursor-pointer mb-6">
<div className="absolute -inset-0.5 bg-gradient-to-br from-orange-600 to-orange-800 rounded-full opacity-30 group-hover:opacity-70 blur transition duration-500"></div>
<img alt="Profile" className="relative w-24 h-24 rounded-full object-cover border border-orange-800 bg-orange-900 shadow-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d6f3aad-afc5-4ad7-9fea-352a7aa9f84b_320w.webp"/>
<div className="absolute bottom-1 right-1 w-4 h-4 bg-amber-500 border-2 border-[#050505] rounded-full"></div>
</div>
<h1 className="text-xl font-semibold text-orange-100 tracking-tight mb-2">Bulent Ocal</h1>
<p className="text-sm text-orange-500 max-w-xs leading-relaxed">
                Digital Craftsman building interfaces &amp; experiences. Design Engineer at Voidal.
            </p>

<div className="flex items-center gap-4 mt-6">
<a className="text-orange-500 hover:text-orange-200 transition-colors duration-300" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-orange-500 hover:text-orange-200 transition-colors duration-300" href="#">
<iconify-icon icon="lucide:github" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-orange-500 hover:text-orange-200 transition-colors duration-300" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-orange-500 hover:text-orange-200 transition-colors duration-300" href="#">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="w-full flex flex-col gap-3">

<a className="group relative w-full p-4 rounded-xl bg-orange-900/40 border border-orange-800/60 hover:border-orange-600/50 hover:bg-orange-800/40 backdrop-blur-sm transition-all duration-300 flex items-center justify-between overflow-hidden" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-orange-900 border border-orange-800 flex items-center justify-center text-orange-200 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-orange-100 tracking-tight">Latest Project</span>
<span className="text-xs text-orange-500">AI-powered design system generator</span>
</div>
</div>
<div className="text-orange-600 group-hover:text-orange-300 group-hover:translate-x-0.5 transition-all duration-300">
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</a>

<a className="group w-full p-3.5 rounded-xl bg-transparent border border-orange-800/60 hover:border-orange-700 hover:bg-orange-900/30 transition-all duration-300 flex items-center justify-between" href="#">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-orange-900/50 border border-orange-800 flex items-center justify-center text-orange-400 group-hover:text-orange-200 transition-colors">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-300 group-hover:text-orange-100 transition-colors">Personal Website</span>
</div>
<iconify-icon className="text-orange-700 group-hover:text-orange-400 transition-colors" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<a className="group w-full p-3.5 rounded-xl bg-transparent border border-orange-800/60 hover:border-orange-700 hover:bg-orange-900/30 transition-all duration-300 flex items-center justify-between" href="#">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-orange-900/50 border border-orange-800 flex items-center justify-center text-orange-400 group-hover:text-orange-200 transition-colors">
<iconify-icon icon="lucide:camera" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-300 group-hover:text-orange-100 transition-colors">Photography Portfolio</span>
</div>
<iconify-icon className="text-orange-700 group-hover:text-orange-400 transition-colors" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<a className="group w-full p-3.5 rounded-xl bg-transparent border border-orange-800/60 hover:border-orange-700 hover:bg-orange-900/30 transition-all duration-300 flex items-center justify-between" href="#">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-orange-900/50 border border-orange-800 flex items-center justify-center text-orange-400 group-hover:text-orange-200 transition-colors">
<iconify-icon icon="lucide:coffee" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-300 group-hover:text-orange-100 transition-colors">Buy me a coffee</span>
</div>
<iconify-icon className="text-orange-700 group-hover:text-orange-400 transition-colors" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<a className="group w-full p-3.5 rounded-xl bg-transparent border border-orange-800/60 hover:border-orange-700 hover:bg-orange-900/30 transition-all duration-300 flex items-center justify-between" href="#">
<div className="flex items-center gap-4">
<div className="w-9 h-9 rounded-lg bg-orange-900/50 border border-orange-800 flex items-center justify-center text-orange-400 group-hover:text-orange-200 transition-colors">
<iconify-icon icon="lucide:calendar" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-sm font-medium text-orange-300 group-hover:text-orange-100 transition-colors">Book a consultation</span>
</div>
<iconify-icon className="text-orange-700 group-hover:text-orange-400 transition-colors" icon="lucide:chevron-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="w-full mt-8 pt-8 border-t border-orange-900">
<h3 className="text-xs font-medium text-orange-500 uppercase tracking-widest mb-4 pl-1">Newsletter</h3>
<form className="flex flex-col gap-3" onsubmit="event.preventDefault();">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-orange-700 to-orange-800 rounded-lg opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
<div className="relative flex bg-[#0a0a0a] rounded-lg border border-orange-800 overflow-hidden focus-within:ring-1 focus-within:ring-orange-600 focus-within:border-orange-600 transition-all">
<div className="pl-3 py-3 text-orange-500 flex items-center justify-center">
<iconify-icon icon="lucide:mail" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-transparent border-none text-xs text-orange-200 placeholder-orange-600 focus:ring-0 p-3 outline-none" placeholder="email@domain.com" type="email"/>
<button className="px-4 py-1.5 my-1 mr-1 bg-orange-100 hover:bg-orange-300 text-black text-xs font-semibold rounded shadow transition-colors" type="submit">
                            Join
                        </button>
</div>
</div>
<p className="text-xs text-orange-600 pl-1">Join 5,000+ others exploring creative engineering.</p>
</form>
</div>

<footer className="mt-16 flex flex-col items-center gap-2">
<div className="flex items-center gap-1.5 text-orange-600 hover:text-orange-400 transition-colors cursor-default">
<span className="text-xs tracking-tight font-medium uppercase">VOIDAL</span>
</div>
</footer>
</main>


    </>
  );
}
