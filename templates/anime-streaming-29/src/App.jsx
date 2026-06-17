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
      

<header className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-xl">
<div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 md:px-8">
<div className="flex items-center gap-10">
<a className="text-xl font-semibold tracking-tighter text-white" href="#">ANM</a>
<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-zinc-400">
<a className="text-white transition-colors hover:text-white" href="#">Discover</a>
<a className="transition-colors hover:text-white flex items-center gap-1" href="#">
                        Hindi Dubbed
                        <span className="rounded bg-indigo-500/20 px-1.5 py-0.5 text-[0.65rem] uppercase tracking-widest text-indigo-400">New</span>
</a>
<a className="transition-colors hover:text-white" href="#">Series</a>
<a className="transition-colors hover:text-white" href="#">Movies</a>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="relative hidden sm:block">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<input className="h-9 w-64 rounded-md bg-zinc-900 pl-9 pr-4 text-sm text-zinc-200 placeholder-zinc-500 outline-none border border-transparent focus:border-zinc-700 transition-all focus:bg-zinc-800" placeholder="Search for anime..." type="text"/>
</div>
<button className="sm:hidden text-zinc-400 hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors">
<iconify-icon className="text-lg" icon="solar:bell-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<button className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/10 text-white shadow-sm overflow-hidden">
<img alt="Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</button>
</div>
</div>
</header>

<main className="pb-24">
<section className="relative w-full h-[75vh] min-h-[600px] flex items-end pb-16 pt-32 px-4 md:px-8 max-w-[1600px] mx-auto">
<div className="absolute inset-0 z-0 overflow-hidden mx-4 md:mx-8 mt-4 rounded-2xl border border-white/5">
<img alt="Hero Background" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-3xl flex flex-col gap-5 md:ml-8">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900/80 px-2.5 py-1 text-xs font-medium text-zinc-200 backdrop-blur-md border border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Ep 12 Available
                    </span>
<span className="inline-flex items-center rounded-md bg-indigo-500/10 px-2.5 py-1 text-xs font-medium text-indigo-400 border border-indigo-500/20">
                        Hindi Dubbed
                    </span>
<span className="inline-flex items-center rounded-md bg-zinc-800/80 px-2 py-1 text-xs font-medium text-zinc-400 border border-white/5">
                        TV-MA
                    </span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white leading-tight">
                    Cybernetic Genesis:<br/>The Awakening
                </h1>
<p className="text-sm md:text-base text-zinc-400 max-w-xl line-clamp-3 leading-relaxed">
                    In a neon-drenched metropolis where humanity and machinery intertwine, a rogue AI begins to experience fragmented memories of a life it never lived. As a covert task force hunts it down, the lines between creator and creation blur in an explosive battle for existence.
                </p>
<div className="flex items-center gap-4 mt-2">
<button className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-all hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98]">
<iconify-icon className="text-lg" icon="solar:play-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Watch Now
                    </button>
<button className="flex items-center gap-2 rounded-lg bg-zinc-900/50 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-zinc-800 backdrop-blur-md border border-white/10 hover:border-white/20 active:scale-[0.98]">
<iconify-icon className="text-lg" icon="solar:bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Add to Watchlist
                    </button>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-4 md:px-8 mt-12">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                        Latest Hindi Dubbed
                        <iconify-icon className="text-indigo-400" icon="solar:bolt-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</h2>
<p className="text-sm text-zinc-500 mt-1">Fresh episodes dubbed in your language.</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">
                    View all
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8">

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 24
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Demon Slayer: Swordsmith Village</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Action, Fantasy • 24m</p>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 12
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Solo Leveling</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Action, Adventure • 23m</p>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 1084
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">One Piece</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Adventure, Comedy • 24m</p>
</div>
</a>

<a className="group flex flex-col gap-3" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 08
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Ninja Kamui</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Action, Thriller • 24m</p>
</div>
</a>

<a className="group flex flex-col gap-3 hidden lg:flex" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover grayscale opacity-80 mix-blend-luminosity transition duration-500 group-hover:scale-105 group-hover:opacity-40 group-hover:grayscale-0" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 11
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Jujutsu Kaisen Season 2</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Action, Supernatural • 23m</p>
</div>
</a>

<a className="group flex flex-col gap-3 hidden xl:flex" href="#">
<div className="relative aspect-[2/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/5">
<img alt="Cover" className="h-full w-full object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-60" src="https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
<div className="rounded-full bg-white/20 p-4 backdrop-blur-md shadow-lg border border-white/10 transform transition group-hover:scale-110">
<iconify-icon className="text-white text-2xl" icon="solar:play-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="absolute top-2 left-2 rounded bg-indigo-500 px-2 py-0.5 text-xs font-medium text-white shadow-sm">
                            Ep 04
                        </div>
<div className="absolute top-2 right-2 rounded bg-zinc-900/90 px-2 py-0.5 text-xs font-medium text-zinc-300 backdrop-blur-sm border border-white/5">
                            Dub
                        </div>
</div>
<div>
<h3 className="text-sm font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Kaiju No. 8</h3>
<p className="text-xs text-zinc-500 truncate mt-0.5">Sci-Fi, Action • 24m</p>
</div>
</a>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-4 md:px-8 mt-20">
<div className="flex items-end justify-between mb-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-white flex items-center gap-2">
                        Trending Now
                        <iconify-icon className="text-orange-500" icon="solar:fire-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/50 p-3 transition-colors hover:bg-zinc-800/80" href="#">
<div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
<img alt="Thumb" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-indigo-400">#1 Top Rated</span>
<span className="flex items-center gap-1 text-xs text-zinc-500">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                                9.8
                            </span>
</div>
<h3 className="text-base font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Solo Leveling</h3>
<p className="text-sm text-zinc-500 truncate mt-0.5">12 Episodes • Action, Fantasy</p>
</div>
</a>

<a className="group flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/50 p-3 transition-colors hover:bg-zinc-800/80" href="#">
<div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
<img alt="Thumb" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex flex-col justify-center flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-zinc-400">#2 Trending</span>
<span className="flex items-center gap-1 text-xs text-zinc-500">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                                9.5
                            </span>
</div>
<h3 className="text-base font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Demon Slayer</h3>
<p className="text-sm text-zinc-500 truncate mt-0.5">55 Episodes • Action, Historical</p>
</div>
</a>

<a className="group flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/50 p-3 transition-colors hover:bg-zinc-800/80" href="#">
<div className="relative h-24 w-16 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
<img alt="Thumb" className="h-full w-full object-cover grayscale mix-blend-luminosity" src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="flex flex-col justify-center flex-1 min-w-0">
<div className="flex items-center gap-2 mb-1">
<span className="text-xs font-medium text-zinc-400">#3 Popular</span>
<span className="flex items-center gap-1 text-xs text-zinc-500">
<iconify-icon className="text-yellow-500" icon="solar:star-bold" style={{strokeWidth: '1.5'}}></iconify-icon>
                                9.2
                            </span>
</div>
<h3 className="text-base font-medium text-zinc-100 truncate group-hover:text-indigo-400 transition-colors">Jujutsu Kaisen</h3>
<p className="text-sm text-zinc-500 truncate mt-0.5">47 Episodes • Action, Supernatural</p>
</div>
</a>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-[1600px] mx-auto px-4 md:px-8">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div className="max-w-xs">
<a className="text-2xl font-semibold tracking-tighter text-white block mb-4" href="#">ANM</a>
<p className="text-sm text-zinc-500 leading-relaxed">Your premium destination for high-quality, free anime streaming. Specializing in Hindi dubbed content for the ultimate viewing experience.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white mb-1">Navigation</h4>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Hindi Dubbed</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Trending</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Genres</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-sm font-medium text-white mb-1">Legal</h4>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">DMCA</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 gap-4">
<p className="text-xs text-zinc-600">© 2024 ANM Streaming. All rights reserved.</p>
<div className="flex items-center gap-4 text-zinc-600">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:mask-happly-linear" style={{strokeWidth: '1.5'}}></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
