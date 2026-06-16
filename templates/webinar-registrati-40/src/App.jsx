import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1086273148785376');
fbq('track', 'PageView');



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
orange: {
500: '#f97316',
600: '#ea580c',
}
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-900/20 via-neutral-950/0 to-transparent blur-3xl"></div>
</div>

<nav className="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex justify-between items-center animate-fade-in">
<div className="flex items-center gap-2">
<span className="iconify text-orange-500" data-icon="lucide:layers" data-width="24"></span>
<span className="text-sm font-medium tracking-tight text-white">NEXTLEVEL</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<span className="hover:text-white transition-colors cursor-pointer">Agenda</span>
<span className="hover:text-white transition-colors cursor-pointer">Speakers</span>
<span className="hover:text-white transition-colors cursor-pointer">FAQ</span>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-12 pb-20 sm:pt-20">

<div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-3 py-1 text-xs text-orange-500 backdrop-blur-md mb-8 animate-slide-up" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="font-medium tracking-wide uppercase">Live Masterclass</span>
</div>

<h1 className="max-w-4xl mx-auto text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1] animate-slide-up" style={{animationDelay: '0.2s'}}>
            Skaluj swój biznes <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-neutral-200 to-neutral-600">dzięki automatyzacji.</span>
</h1>

<p className="max-w-xl mx-auto text-lg text-neutral-400 font-light leading-relaxed mb-10 animate-slide-up" style={{animationDelay: '0.3s'}}>
            Dołącz do ekskluzywnego webinaru, gdzie odkryjesz sprawdzone strategie.
            Zwiększ sprzedaż i odzyskaj swój czas bez skomplikowanych narzędzi.
        </p>

<div className="relative group animate-slide-up isolate" style={{animationDelay: '0.4s'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<button className="wj-embed-button relative flex items-center justify-center gap-3 bg-white text-black hover:bg-neutral-100 font-medium py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black w-full sm:w-auto min-w-[240px]" data-webinarhash="m9zkxf7g" type="button">
<span className="text-base tracking-tight">Zarezerwuj miejsce</span>
<span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
</div>

<div className="mt-12 flex flex-col items-center gap-4 animate-slide-up" style={{animationDelay: '0.5s'}}>
<p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Dołącz do liderów z firm</p>
<div className="flex flex-wrap justify-center gap-8 opacity-40 grayscale">
<span className="text-xl font-bold tracking-tighter text-white font-serif">ACME</span>
<span className="text-xl font-bold tracking-tighter text-white italic">Stark</span>
<span className="text-xl font-bold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-bold tracking-tighter text-white font-mono">Globex</span>
</div>
</div>
</main>

<footer className="border-t border-neutral-900 bg-neutral-950/50 backdrop-blur-sm z-10">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-neutral-600">
                © 2024 NextLevel Inc. Wszystkie prawa zastrzeżone.
            </div>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-orange-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="text-neutral-600 hover:text-orange-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
<a className="text-neutral-600 hover:text-orange-500 transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
</div>
</div>
</footer>



    </>
  );
}
