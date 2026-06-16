import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons();

    document.getElementById('download').addEventListener('click', () => {
      fetch(location.href)
        .then(r => r.text())
        .then(html => {
          const blob = new Blob([html], { type: 'text/html' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'neural-studio.html';
          a.click();
          URL.revokeObjectURL(url);
        });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="w-full max-w-md space-y-10">

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-br ring-1 backdrop-blur-lg opacity-0 animate-fade-in transition-all duration-300 from-blue-700/40 via-cyan-700/30 to-indigo-700/20 ring-white/10 hover:ring-white/20" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1627637819794-fba32f82be16?w=2160&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
<div className="absolute top-4 left-4 flex items-center space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-neutral-500 to-teal-500 text-xs font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>
            AI
          </div>
<h2 className="text-xl font-semibold tracking-tight font-sans">Machine Learning Mastery</h2>
</div>
</div>
<div className="px-6 pt-6 pb-20">
<p className="text-sm leading-relaxed line-clamp-4 text-neutral-300 font-sans">Neural networks and deep learning algorithms visualization. Advanced computational intelligence framework. Explore the cutting-edge world of artificial intelligence with interactive 3D data representations and dynamic particle systems that showcase the power of modern machine learning architectures...</p>
<div className="mt-6 grid grid-cols-3 gap-y-4 text-sm">
<div className="">
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Resolution</p>
<p className="font-medium font-sans">1024×1792</p>
</div>
<div className="">
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Format</p>
<p className="font-medium font-sans">Enhanced</p>
</div>
<div className="">
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Generated</p>
<p className="font-medium font-sans">Now 3:42</p>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-4 py-3 backdrop-blur-md bg-black/20">
<div className="flex items-center space-x-4">
<button aria-label="Options" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<button aria-label="Analyze" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-brain-circuit w-[20px] h-[20px]" data-lucide="brain-circuit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button aria-label="Favorite" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<button aria-label="Export" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-upload w-5 h-5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</button>
</div>
</article>

<article className="relative overflow-hidden rounded-3xl bg-gradient-to-br ring-1 backdrop-blur-lg opacity-0 animate-fade-in-delay transition-all duration-300 from-blue-700/40 via-cyan-700/30 to-indigo-700/20 ring-white/10 hover:ring-white/20" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="relative">
<img alt="" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60"></div>
<div className="absolute top-4 left-4 flex items-center space-x-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>
            VR
          </div>
<h2 className="text-xl font-semibold tracking-tight font-sans">Virtual Reality Studio</h2>
</div>
</div>
<div className="px-6 pt-6 pb-20">
<p className="text-sm leading-relaxed line-clamp-4 text-neutral-300 font-sans">Immersive virtual environments and spatial computing experiences. Next-generation VR development platform with real-time rendering capabilities. Create stunning 3D worlds with advanced physics simulation and interactive elements that respond to user input...</p>
<div className="mt-6 grid grid-cols-3 gap-y-4 text-sm">
<div className="">
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Resolution</p>
<p className="font-medium font-sans">2048×2048</p>
</div>
<div className="">
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Format</p>
<p className="font-medium font-sans">Immersive</p>
</div>
<div>
<p className="uppercase tracking-widest text-xs text-neutral-400 font-sans">Generated</p>
<p className="font-medium font-sans">Now 3:38</p>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full flex items-center justify-between px-4 py-3 backdrop-blur-md bg-black/20">
<div className="flex items-center space-x-4">
<button aria-label="Options" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</button>
<button aria-label="Preview" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-eye w-5 h-5" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
<button aria-label="Favorite" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</button>
</div>
<button aria-label="Export" className="p-2 rounded-full transition-colors duration-200 hover:bg-white/10">
<svg className="lucide lucide-upload w-5 h-5" data-lucide="upload" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
</button>
</div>
</article>
</main>

<button className="fixed bottom-6 right-6 flex items-center space-x-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-200 opacity-0 animate-fade-in-delay-2 bg-white text-black hover:bg-neutral-100" id="download">
<svg className="lucide lucide-code w-5 h-5" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="font-sans">Export Code</span>
</button>



    </>
  );
}
