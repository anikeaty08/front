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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Hind Siliguri"', 'sans-serif'],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('.tournament-card');
            const searchInput = document.getElementById('searchInput');

            // Category Filter Logic
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Update active styles
                    filterBtns.forEach(b => {
                        b.classList.remove('bg-white', 'text-black', 'active');
                        b.classList.add('bg-zinc-900', 'text-zinc-400');
                    });
                    btn.classList.add('bg-white', 'text-black', 'active');
                    btn.classList.remove('bg-zinc-900', 'text-zinc-400');

                    const filterValue = btn.getAttribute('data-filter');

                    cards.forEach(card => {
                        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                            card.style.display = 'flex';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });

            // Simple Search Logic
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                
                cards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        // Only show if it matches current active filter
                        const currentFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                        if (currentFilter === 'all' || card.getAttribute('data-category') === currentFilter) {
                            card.style.display = 'flex';
                        }
                    } else {
                        card.style.display = 'none';
                    }
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
      

<nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tighter text-white uppercase">পিক্সেল</span>
</div>
<div className="hidden md:block">
<div className="ml-10 flex items-baseline space-x-8">
<a className="text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">হোম</a>
<a className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">টুর্নামেন্ট</a>
<a className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">লিডারবোর্ড</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-white transition-colors relative">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-zinc-950"></span>
</button>
<div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden cursor-pointer">
<img alt="Profile" className="h-full w-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&amp;backgroundColor=transparent"/>
</div>
</div>
</div>
</div>
</nav>

<main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

<div className="relative py-16 sm:py-24 text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 relative z-10">
                আপনার গেমিং দক্ষতা <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">প্রমাণ করার সময়</span>
</h1>
<p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto font-light relative z-10">
                দেশের সেরা ই-স্পোর্টস টুর্নামেন্টে অংশ নিন। প্রাইজমানি জিতুন এবং নিজের নাম লিডারবোর্ডের শীর্ষে নিয়ে যান।
            </p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 relative z-10">
<button className="bg-white text-black hover:bg-zinc-200 px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
                    টুর্নামেন্ট খুঁজুন
                </button>
<button className="bg-zinc-800/50 backdrop-blur-sm text-white border border-white/10 hover:bg-zinc-800 px-6 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
                    ডিপোজিট করুন
                </button>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

<div className="relative w-full md:w-96 group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500 group-focus-within:text-white transition-colors" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-white/10 rounded-xl leading-5 bg-zinc-900/50 text-zinc-300 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 sm:text-sm transition-all" id="searchInput" placeholder="গেম বা টুর্নামেন্ট খুঁজুন..." type="text"/>
</div>

<div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide" id="categoryFilters">
<button className="filter-btn active whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-white text-black transition-colors" data-filter="all">সব</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" data-filter="freefire">ফ্রি ফায়ার</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" data-filter="pubg">পাবজি</button>
<button className="filter-btn whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors" data-filter="valorant">ভ্যালোরেন্ট</button>
</div>
</div>

<div className="mb-6 flex justify-between items-end">
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-white">জনপ্রিয় টুর্নামেন্ট</h2>
<a className="text-sm text-indigo-400 hover:text-indigo-300 font-medium transition-colors" href="#">সব দেখুন →</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="tournamentGrid">

<div className="tournament-card group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 flex flex-col" data-category="freefire">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<iconify-icon className="text-xl" icon="solar:fire-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-indigo-400 transition-colors">ফ্রি ফায়ার সোলো ব্যাটেল</h3>
<p className="text-xs text-zinc-500">সিজন ৪ - স্কোয়াড</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        আপকামিং
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-5">
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">পুরস্কার পুল</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                            ৳৫,০০০
                        </div>
</div>
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">এন্ট্রি ফি</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-white">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
                            ৳৫০
                        </div>
</div>
</div>
<div className="mb-5 flex-grow">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> স্লট</span>
<span className="text-white font-medium">৪৫ / ১০০</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span>১২ অক্টো, রাত ৮টা</span>
</div>
<button className="bg-white text-black hover:bg-zinc-200 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                        যোগ দিন
                    </button>
</div>
</div>

<div className="tournament-card group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 flex flex-col" data-category="pubg">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500">
<iconify-icon className="text-xl" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-indigo-400 transition-colors">পাবজি প্রো লিগ</h3>
<p className="text-xs text-zinc-500">ইরাঙ্গেল - ডুয়ো</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        চলমান
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-5">
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">পুরস্কার পুল</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                            ৳১০,০০০
                        </div>
</div>
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">এন্ট্রি ফি</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-white">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
                            ফ্রি
                        </div>
</div>
</div>
<div className="mb-5 flex-grow">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> স্লট</span>
<span className="text-white font-medium">১০০ / ১০০</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-500 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
<span>লাইভ চলছে</span>
</div>
<button className="bg-zinc-800 text-zinc-400 cursor-not-allowed px-4 py-1.5 rounded-lg text-sm font-medium" disabled="">
                        পূর্ণ
                    </button>
</div>
</div>

<div className="tournament-card group relative bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-5 hover:border-white/10 transition-all duration-300 flex flex-col" data-category="valorant">
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
<iconify-icon className="text-xl" icon="solar:crosshair-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-white group-hover:text-indigo-400 transition-colors">ভ্যালোরেন্ট উইকেন্ডার</h3>
<p className="text-xs text-zinc-500">৫ বনাম ৫ - পিসি</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        আপকামিং
                    </span>
</div>
<div className="grid grid-cols-2 gap-4 mb-5">
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">পুরস্কার পুল</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-emerald-400">
<iconify-icon icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
                            ৳২০,০০০
                        </div>
</div>
<div className="bg-zinc-950/50 rounded-lg p-3 border border-white/5">
<span className="block text-xs text-zinc-500 mb-1">এন্ট্রি ফি</span>
<div className="flex items-center gap-1.5 text-sm font-medium text-white">
<iconify-icon icon="solar:ticket-linear" strokeWidth="1.5"></iconify-icon>
                            ৳২০০ / টিম
                        </div>
</div>
</div>
<div className="mb-5 flex-grow">
<div className="flex justify-between text-xs mb-2">
<span className="text-zinc-400 flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> স্লট</span>
<span className="text-white font-medium">৮ / ১৬</span>
</div>
<div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 rounded-full" style={{width: '50%'}}></div>
</div>
</div>
<div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
<span>১৫ অক্টো, বিকাল ৪টা</span>
</div>
<button className="bg-white text-black hover:bg-zinc-200 px-4 py-1.5 rounded-lg text-sm font-medium transition-colors">
                        যোগ দিন
                    </button>
</div>
</div>
</div>

<div className="mt-16 bg-zinc-900/30 border border-white/5 rounded-2xl p-6">
<div className="flex items-center justify-between mb-6">
<div>
<h2 className="text-xl font-medium tracking-tight text-white">টপ প্লেয়ার্স</h2>
<p className="text-xs text-zinc-500 mt-1">এই সপ্তাহের সেরা পারফর্মার</p>
</div>
<button className="text-xs font-medium text-zinc-400 border border-white/10 rounded-lg px-3 py-1.5 hover:bg-zinc-800 hover:text-white transition-colors">
                    সম্পূর্ণ লিডারবোর্ড
                </button>
</div>
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-6 text-center text-sm font-medium text-yellow-500">১</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 overflow-hidden">
<img alt="Player" className="h-full w-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&amp;backgroundColor=transparent"/>
</div>
<div>
<p className="text-sm font-medium text-white">GhostRider</p>
<p className="text-xs text-zinc-500">ফ্রি ফায়ার</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-emerald-400">৳১২,৫০০</p>
<p className="text-xs text-zinc-500">উইনিংস</p>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-6 text-center text-sm font-medium text-zinc-300">২</div>
<div className="h-8 w-8 rounded-full bg-zinc-800 overflow-hidden">
<img alt="Player" className="h-full w-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&amp;backgroundColor=transparent"/>
</div>
<div>
<p className="text-sm font-medium text-white">NinjaPro</p>
<p className="text-xs text-zinc-500">পাবজি</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-medium text-emerald-400">৳৮,০০০</p>
<p className="text-xs text-zinc-500">উইনিংস</p>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-auto border-t border-white/5 py-8 text-center bg-zinc-950">
<div className="flex justify-center items-center gap-2 mb-4">
<iconify-icon className="text-zinc-500" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tighter text-zinc-500 uppercase">পিক্সেল</span>
</div>
<div className="flex justify-center gap-6 mb-4">
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">শর্তাবলী</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">গোপনীয়তা নীতি</a>
<a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">যোগাযোগ</a>
</div>
<p className="text-xs text-zinc-600">© ২০২৪ পিক্সেল ই-স্পোর্টস। সর্বস্বত্ব সংরক্ষিত।</p>
</footer>



    </>
  );
}
