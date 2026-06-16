import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-xl font-semibold tracking-tighter text-white" href="#">
                    HR
                </a>

<div className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Produkty</a>
<a className="hover:text-white transition-colors" href="#">Rozwiązania</a>
<a className="hover:text-white transition-colors" href="#">Cennik</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Zaloguj się</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">
                    Rozpocznij
                </a>
</div>
</div>
</nav>

<main className="relative w-full min-h-screen flex items-center justify-center pt-16">

<div className="absolute inset-0 z-0 overflow-hidden bg-black pointer-events-none">

<iframe allow="autoplay; fullscreen" allowtransparency="true" className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 opacity-40" frameborder="0" scrolling="no" src="https://fast.wistia.net/embed/iframe/70u6gkoogv?seo=false&amp;autoPlay=true&amp;muted=true&amp;loop=true&amp;controlsVisibleOnLoad=false&amp;playbar=false&amp;playButton=false&amp;settingsControl=false&amp;volumeControl=false&amp;fullscreenButton=false&amp;smallPlayButton=false&amp;endVideoBehavior=loop">
</iframe>
</div>

<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/40 to-black pointer-events-none"></div>
<div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-80 pointer-events-none"></div>

<div className="relative z-20 flex flex-col items-center text-center max-w-5xl mx-auto px-6 py-20">
<a className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-zinc-300 hover:bg-white/10 transition-colors mb-8" href="#">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
<span>Poznaj nową wizję przestrzeni</span>
</a>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white drop-shadow-sm leading-tight mb-6">
                Zanurz się w <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-600">cyfrowej jakości.</span>
</h1>
<p className="text-base md:text-lg lg:text-xl font-normal text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                Wykorzystaj potęgę wideo w tle, aby przyciągnąć uwagę użytkowników od pierwszej sekundy. Wystarczy podmienić jeden atrybut w kodzie, aby ożywić swoją stronę główną.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">
                    Odkryj możliwości
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/5 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white/10 backdrop-blur-md transition-colors">
<iconify-icon icon="solar:document-text-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Zobacz dokumentację
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
</main>

    </>
  );
}
