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



        document.addEventListener('DOMContentLoaded', () => {
            const splash = document.getElementById('splash');
            
            // Wait for 2.5 seconds then fade out
            setTimeout(() => {
                splash.classList.add('splash-fade-out');
                
                // Remove from DOM after transition completes
                setTimeout(() => {
                    splash.remove();
                    document.body.classList.remove('overflow-hidden');
                }, 1000);
            }, 2500);
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
      

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-900 text-orange-50 transition-opacity duration-1000" id="splash">
<div className="relative animate-pulse">

<svg className="drop-shadow-2xl" fill="none" height="300" viewbox="0 0 200 300" width="200" xmlns="http://www.w3.org/2000/svg">
<path d="M100 40C115 40 125 50 125 65C125 80 115 90 100 90C85 90 75 80 75 65C75 50 85 40 100 40Z" fill="#fb923c"></path>
<path d="M100 90C100 90 140 100 160 80L180 30" stroke="#fb923c" strokeLinecap="round" strokeWidth="8"></path>
<path d="M100 90C100 90 60 100 40 80L20 30" stroke="#fb923c" strokeLinecap="round" strokeWidth="8"></path>
<path d="M60 110C60 110 50 250 40 300H160C150 250 140 110 140 110C140 110 120 130 100 130C80 130 60 110 60 110Z" fill="#fb923c"></path>

<circle className="opacity-50" cx="100" cy="65" r="55" stroke="#fb923c" stroke-dasharray="4 4" strokeWidth="2"></circle>
</svg>
</div>
<h1 className="mt-8 text-3xl font-light tracking-widest text-orange-200 uppercase">Gauranga</h1>
<p className="mt-2 text-xs text-stone-500 tracking-tight font-sans">Loading Divine Experience...</p>
</div>

<nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-orange-600" data-icon="lucide:flower-2" data-width="20"></span>
<span className="font-serif font-bold text-xl text-stone-900 tracking-tight">Sri Chaitanya</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-orange-700 transition-colors" href="#biography">Life</a>
<a className="hover:text-orange-700 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-orange-700 transition-colors" href="#miracles">Divine Acts</a>
<a className="hover:text-orange-700 transition-colors" href="#nabadwip">Nabadwip</a>
</div>
<button className="md:hidden text-stone-600">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative pt-20 pb-32 overflow-hidden bg-mandala">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-800 text-xs font-medium uppercase tracking-wider mb-6">
                1486 – 1534 CE
            </div>
<h1 className="text-5xl md:text-7xl font-light text-stone-900 mb-6 leading-[1.1]">
                The Golden Avatar of <br/>
<span className="italic text-orange-600 font-normal">Divine Love</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                Born under the neem tree in Nabadwip, Sri Chaitanya Mahaprabhu revolutionized spiritual consciousness through the congregational chanting of the holy names.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="px-6 py-2.5 bg-stone-900 text-white rounded-md font-medium text-sm hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl">
                    Explore His Life
                </button>
<button className="px-6 py-2.5 bg-white border border-stone-200 text-stone-700 rounded-md font-medium text-sm hover:bg-stone-50 transition-colors">
                    Read Teachings
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafaf9] to-transparent"></div>
</header>

<main className="max-w-5xl mx-auto px-6 py-12 space-y-24">

<section className="scroll-mt-24" id="biography">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-stone-200 pb-4">
<div>
<h2 className="text-3xl font-normal text-stone-900 mb-2">Divine Biography</h2>
<p className="text-stone-500 text-sm font-light max-w-md">From the scholar Nimai Pandit to the ecstatic Sannyasi.</p>
</div>
<div className="hidden md:block">
<span className="iconify text-stone-300" data-icon="lucide:scroll-text" data-width="32"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
<span className="iconify text-orange-600" data-icon="lucide:baby" data-width="20"></span>
</div>
<h3 className="text-xl text-stone-900 mb-2">Appearance</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        Born during a lunar eclipse in Mayapur, Nabadwip. Known as 'Nimai' due to being born under a Neem tree, and 'Gauranga' for his golden complexion.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
<span className="iconify text-orange-600" data-icon="lucide:book-open" data-width="20"></span>
</div>
<h3 className="text-xl text-stone-900 mb-2">Scholarship</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        By age 16, he was the greatest scholar of logic (Nyaya) in India, defeating renowned pundits. He later renounced dry logic for devotion.
                    </p>
</div>

<div className="bg-white p-6 rounded-lg border border-stone-100 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-orange-100 transition-colors">
<span className="iconify text-orange-600" data-icon="lucide:footprints" data-width="20"></span>
</div>
<h3 className="text-xl text-stone-900 mb-2">Sannyasa</h3>
<p className="text-sm text-stone-600 leading-relaxed">
                        At 24, he took Sannyasa (renunciation) to spread the Sankirtan movement, traveling throughout India to share the message of love.
                    </p>
</div>
</div>
</section>

<section className="scroll-mt-24" id="philosophy">
<div className="bg-stone-900 rounded-2xl overflow-hidden relative">
<div className="absolute top-0 right-0 p-12 opacity-10">
<span className="iconify text-white" data-icon="lucide:sun" data-width="200"></span>
</div>
<div className="relative z-10 p-8 md:p-12 text-stone-50">
<div className="flex items-center gap-3 mb-6">
<div className="h-px w-8 bg-orange-400"></div>
<span className="text-orange-400 uppercase tracking-widest text-xs font-semibold">Tattva &amp; Knowledge</span>
</div>
<h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">Achintya Bheda Abheda</h2>
<p className="text-stone-300 text-lg font-light max-w-2xl mb-10 leading-relaxed">
                        His distinct philosophy: "Inconceivable oneness and difference." The soul is qualitatively one with God, yet quantitatively different, allowing for an eternal relationship of loving service.
                    </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<h4 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:music-2" data-width="18"></span>
                                Sankirtan Yajna
                            </h4>
<p className="text-sm text-stone-400 leading-relaxed">
                                He established that in the age of Kali, the only means of deliverance is the congregational chanting of the Holy Names: Hare Krishna, Hare Rama.
                            </p>
</div>
<div>
<h4 className="text-xl font-serif text-white mb-2 flex items-center gap-2">
<span className="iconify text-orange-400" data-icon="lucide:heart-handshake" data-width="18"></span>
                                Universal Brotherhood
                            </h4>
<p className="text-sm text-stone-400 leading-relaxed">
                                He defied the rigid caste system, embracing everyone—Hindus, Muslims, untouchables—into the fold of divine love without discrimination.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="miracles">
<div className="text-center mb-12">
<h2 className="text-3xl font-normal text-stone-900 mb-3">Divine Manifestations</h2>
<div className="w-16 h-0.5 bg-orange-300 mx-auto"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex gap-4 p-4 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-stone-100">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-orange-600" data-icon="lucide:eye" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Six-Armed Form (Sadbhuja)</h4>
<p className="text-sm text-stone-500 mt-1">
                            Revealed a divine form combining Lord Rama (bow), Lord Krishna (flute), and Himself (staff/waterpot) to his intimate devotees.
                        </p>
</div>
</div>

<div className="flex gap-4 p-4 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-stone-100">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-orange-600" data-icon="lucide:sparkles" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Seven-Hour Miracle</h4>
<p className="text-sm text-stone-500 mt-1">
                            Once sat on the altar for seven hours (Maha-prakasha-lila), revealing the specific past incarnations and desires of hundreds of devotees.
                        </p>
</div>
</div>

<div className="flex gap-4 p-4 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-stone-100">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-orange-600" data-icon="lucide:tree-deciduous" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Transformation of Jungle</h4>
<p className="text-sm text-stone-500 mt-1">
                            While walking through the Jharikhanda forest, his ecstasy made tigers, elephants, and deer dance together in chant.
                        </p>
</div>
</div>

<div className="flex gap-4 p-4 hover:bg-white rounded-lg transition-colors border border-transparent hover:border-stone-100">
<div className="flex-shrink-0 mt-1">
<span className="iconify text-orange-600" data-icon="lucide:droplets" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Leprosy Cured</h4>
<p className="text-sm text-stone-500 mt-1">
                            Miraculously cured the leper Vasudeva, embracing him despite his oozing sores, restoring his body to beauty instantly.
                        </p>
</div>
</div>
</div>
</section>

<section className="bg-orange-50/50 rounded-xl border border-orange-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8" id="nabadwip">
<div className="flex-1 space-y-4">
<div className="inline-flex items-center gap-2 text-orange-800 text-xs font-bold uppercase tracking-widest">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
                    Holy Dhama
                </div>
<h2 className="text-3xl font-serif text-stone-900">Nabadwip: The Hidden Vrindavan</h2>
<p className="text-stone-600 font-light leading-relaxed">
                    Located in West Bengal, Nabadwip (Nine Islands) is considered the spiritual center of the Gaudiya Vaishnava tradition. It represents the nine processes of devotional service. To this day, millions flock to the Yogapith, his birthplace.
                </p>
<div className="pt-2">
<button className="text-orange-700 text-sm font-medium hover:text-orange-900 flex items-center gap-1 transition-colors">
                        View Pilgrim Map <span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</button>
</div>
</div>
<div className="flex-shrink-0 w-full md:w-64 h-64 bg-white rounded-full shadow-lg border-4 border-white flex items-center justify-center overflow-hidden relative">

<div className="absolute inset-0 bg-stone-100 flex items-center justify-center">
<span className="iconify text-orange-200" data-icon="lucide:church" data-width="100"></span>
</div>
<div className="absolute bottom-6 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-xs font-semibold text-stone-600 shadow-sm border border-stone-100">
                    West Bengal, India
                </div>
</div>
</section>
</main>

<footer className="bg-white border-t border-stone-200 py-12">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-orange-600" data-icon="lucide:flower-2" data-width="18"></span>
<span className="font-serif font-bold text-lg text-stone-900">Sri Chaitanya</span>
</div>
<p className="text-xs text-stone-400 font-light text-center md:text-right">
                Dedicated to the Golden Avatar.<br/>
                Based on teachings from Sri Chaitanya Charitamrita.
            </p>
</div>
</footer>



    </>
  );
}
