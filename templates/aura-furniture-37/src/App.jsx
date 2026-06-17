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



        document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.card-flashlight');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });
        });
    
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
      

<div bis_size='{"x":0,"y":0,"w":965,"h":615,"abs_x":440,"abs_y":43}' className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full">
<div bis_size='{"x":0,"y":0,"w":965,"h":615,"abs_x":440,"abs_y":43}' className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div bis_size='{"x":23,"y":0,"w":0,"h":615,"abs_x":463,"abs_y":43}' className="w-px h-full bg-indigo-200/60"></div>
<div bis_size='{"x":482,"y":0,"w":0,"h":615,"abs_x":922,"abs_y":43}' className="w-px h-full bg-indigo-200/60 hidden md:block"></div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="w-px h-full bg-indigo-200/60 hidden lg:block"></div>
<div bis_size='{"x":940,"y":0,"w":0,"h":615,"abs_x":1380,"abs_y":43}' className="w-px h-full bg-indigo-200/60"></div>
</div>
</div>

<nav bis_size='{"x":0,"y":0,"w":965,"h":65,"abs_x":440,"abs_y":43}' className="fixed top-0 w-full z-40 bg-white/70 backdrop-blur-xl border-b border-indigo-200/60 transition-all duration-300">
<div bis_size='{"x":0,"y":0,"w":965,"h":63,"abs_x":440,"abs_y":43}' className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
<a bis_size='{"x":23,"y":17,"w":97,"h":28,"abs_x":463,"abs_y":60}' className="flex items-center gap-2 group" href="#">
<iconify-icon bis_size='{"x":23,"y":21,"w":20,"h":20,"abs_x":463,"abs_y":64}' className="text-xl transition-transform group-hover:scale-105" icon="solar:armchair-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":51,"y":17,"w":69,"h":28,"abs_x":491,"abs_y":60}' className="text-xl tracking-tight uppercase font-light">Zenith</span>
</a>
<div bis_size='{"x":310,"y":21,"w":380,"h":20,"abs_x":750,"abs_y":64}' className="hidden md:flex items-center gap-8 text-sm font-light tracking-tight text-indigo-500">
<a bis_size='{"x":310,"y":21,"w":78,"h":20,"abs_x":750,"abs_y":64}' className="hover:text-indigo-900 transition-colors" href="#">Assortments</a>
<a bis_size='{"x":421,"y":21,"w":102,"h":20,"abs_x":861,"abs_y":64}' className="hover:text-indigo-900 transition-colors" href="#">Creation Method</a>
<a bis_size='{"x":555,"y":21,"w":46,"h":20,"abs_x":995,"abs_y":64}' className="hover:text-indigo-900 transition-colors" href="#">Fabrics</a>
<a bis_size='{"x":634,"y":21,"w":57,"h":20,"abs_x":1074,"abs_y":64}' className="hover:text-indigo-900 transition-colors" href="#">Chronicle</a>
</div>
<div bis_size='{"x":881,"y":18,"w":60,"h":26,"abs_x":1321,"abs_y":61}' className="flex items-center gap-5 text-indigo-500">
<button bis_size='{"x":881,"y":18,"w":20,"h":26,"abs_x":1321,"abs_y":61}' className="hover:text-indigo-900 transition-colors">
<iconify-icon bis_size='{"x":881,"y":18,"w":20,"h":20,"abs_x":1321,"abs_y":61}' className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button bis_size='{"x":921,"y":18,"w":20,"h":26,"abs_x":1361,"abs_y":61}' className="hover:text-indigo-900 transition-colors relative">
<iconify-icon bis_size='{"x":921,"y":18,"w":20,"h":20,"abs_x":1361,"abs_y":61}' className="text-xl" icon="solar:cart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span bis_size='{"x":937,"y":16,"w":5,"h":5,"abs_x":1377,"abs_y":59}' className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 bg-indigo-900 rounded-full"></span>
</button>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":965,"h":704,"abs_x":440,"abs_y":43}' className="min-h-screen flex flex-col overflow-hidden pt-32 pb-24 relative justify-between">
<div bis_size='{"x":0,"y":175,"w":965,"h":299,"abs_x":440,"abs_y":218}' className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center mt-12">
<h1 bis_size='{"x":103,"y":175,"w":757,"h":96,"abs_x":543,"abs_y":218}' className="md:text-8xl lg:text-9xl leading-none flex justify-center flex-wrap gap-x-4 md:gap-x-6 text-6xl font-light text-indigo-900 tracking-tighter mb-12">
<span bis_size='{"x":103,"y":175,"w":295,"h":96,"abs_x":543,"abs_y":218}' className="">Crafted</span>
<span bis_size='{"x":423,"y":175,"w":107,"h":96,"abs_x":863,"abs_y":218}' className="text-indigo-300">for</span>
<span bis_size='{"x":555,"y":175,"w":306,"h":96,"abs_x":995,"abs_y":218}' className="">Repose</span>
</h1>
<div bis_size='{"x":0,"y":271,"w":965,"h":203,"abs_x":440,"abs_y":314}' className="absolute inset-0 z-[-1] flex items-center justify-center opacity-80 mt-24 hidden md:flex pointer-events-none">
<img alt="Sculptural Contemporary Seating" bis_size='{"x":34,"y":173,"w":895,"h":400,"abs_x":474,"abs_y":216}' className="w-full max-w-4xl object-contain h-[65vh] mix-blend-multiply grayscale drop-shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/687d701a-8748-4856-8c62-5627d113ee3e_1600w.webp" style={{maskImage: 'linear-gradient(black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(black 70%, transparent 100%)'}}/>
</div>
<div bis_size='{"x":23,"y":319,"w":917,"h":155,"abs_x":463,"abs_y":362}' className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
<div bis_size='{"x":23,"y":387,"w":320,"h":87,"abs_x":463,"abs_y":430}' className="max-w-xs flex items-start gap-3">
<div bis_size='{"x":23,"y":391,"w":0,"h":24,"abs_x":463,"abs_y":434}' className="relative mt-1 text-indigo-400">
<iconify-icon bis_size='{"x":23,"y":409,"w":0,"h":0,"abs_x":463,"abs_y":452}' className="text-xl" icon="solar:asterisk-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div bis_size='{"x":23,"y":391,"w":2,"h":24,"abs_x":463,"abs_y":434}' className="sonar-ring text-indigo-300"></div>
</div>
<p bis_size='{"x":35,"y":387,"w":308,"h":87,"abs_x":475,"abs_y":430}' className="text-lg text-indigo-500 font-light leading-relaxed">
                        Meticulously-designed for those who require structural excellence alongside complete bodily comfort.
                    </p>
</div>
<div bis_size='{"x":557,"y":319,"w":383,"h":155,"abs_x":997,"abs_y":362}' className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
<p bis_size='{"x":557,"y":319,"w":383,"h":87,"abs_x":997,"abs_y":362}' className="leading-relaxed text-lg font-light text-stone-950">
  Carefully sculpted utilizing eco-friendly hardwoods and cutting-edge adaptive memory foam materials.
</p>
<a bis_size='{"x":759,"y":431,"w":181,"h":43,"abs_x":1199,"abs_y":474}' className="inline-flex items-center justify-center gap-2 bg-indigo-900 text-white px-6 py-3 rounded-full text-sm font-normal tracking-tight transition-all hover:bg-indigo-800 hover:scale-[1.02] shadow-sm" href="#">
<span bis_size='{"x":783,"y":443,"w":107,"h":20,"abs_x":1223,"abs_y":486}'>Customize Yours</span>
<iconify-icon bis_size='{"x":899,"y":444,"w":17,"h":17,"abs_x":1339,"abs_y":487}' className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
<div bis_size='{"x":0,"y":555,"w":965,"h":53,"abs_x":440,"abs_y":598}' className="w-full border-t border-indigo-200 mt-20 pt-8 relative z-10 bg-[#FAFAFA]/50 backdrop-blur-sm">
<div bis_size='{"x":0,"y":588,"w":965,"h":20,"abs_x":440,"abs_y":631}' className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm tracking-tight font-light text-indigo-500">
<div bis_size='{"x":23,"y":588,"w":284,"h":20,"abs_x":463,"abs_y":631}' className="flex items-center gap-3"><span bis_size='{"x":23,"y":588,"w":13,"h":20,"abs_x":463,"abs_y":631}' className="text-indigo-300">01</span> DYNAMIC ASSISTANCE</div>
<div bis_size='{"x":340,"y":588,"w":284,"h":20,"abs_x":780,"abs_y":631}' className="flex items-center gap-3 md:justify-center"><span bis_size='{"x":408,"y":588,"w":17,"h":20,"abs_x":848,"abs_y":631}' className="text-indigo-300">02</span> TAILORED FABRICS</div>
<div bis_size='{"x":657,"y":588,"w":284,"h":20,"abs_x":1097,"abs_y":631}' className="flex items-center gap-3 md:justify-end"><span bis_size='{"x":776,"y":588,"w":17,"h":20,"abs_x":1216,"abs_y":631}' className="text-indigo-300">03</span> STRUCTURAL SHAPE</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":704,"w":965,"h":153,"abs_x":440,"abs_y":747}' className="py-12 border-b border-indigo-200 relative z-10 bg-white">
<div bis_size='{"x":0,"y":752,"w":965,"h":55,"abs_x":440,"abs_y":795}' className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-indigo-300 transition-all duration-500">
<iconify-icon bis_size='{"x":94,"y":752,"w":55,"h":55,"abs_x":534,"abs_y":795}' className="hover:text-indigo-800 transition-colors" height="56" icon="simple-icons:nasa" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":214,"y":752,"w":55,"h":55,"abs_x":654,"abs_y":795}' className="hover:text-indigo-800 transition-colors hidden sm:block" height="56" icon="simple-icons:spacex" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":334,"y":752,"w":55,"h":55,"abs_x":774,"abs_y":795}' className="hover:text-indigo-800 transition-colors" height="56" icon="simple-icons:uber" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":454,"y":752,"w":55,"h":55,"abs_x":894,"abs_y":795}' className="hover:text-indigo-800 transition-colors" height="56" icon="simple-icons:visa" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":574,"y":752,"w":55,"h":55,"abs_x":1014,"abs_y":795}' className="hover:text-indigo-800 transition-colors hidden md:block" height="56" icon="simple-icons:bose" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="hover:text-indigo-800 transition-colors hidden lg:block" height="56" icon="simple-icons:discover" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":694,"y":752,"w":55,"h":55,"abs_x":1134,"abs_y":795}' className="hover:text-indigo-800 transition-colors" height="56" icon="simple-icons:dji" width="56"></iconify-icon>
<iconify-icon bis_size='{"x":814,"y":752,"w":55,"h":55,"abs_x":1254,"abs_y":795}' className="hover:text-indigo-800 transition-colors hidden sm:block" height="56" icon="simple-icons:sony" width="56"></iconify-icon>
</div>
</section>



    </>
  );
}
