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



        const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1';
        const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
        const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

        const main = document.getElementById('main');
        const form = document.getElementById('form');
        const search = document.getElementById('search');

        // Initial Load
        getMovies(API_URL);

        async function getMovies(url) {
            try {
                const res = await fetch(url);
                const data = await res.json();
                showMovies(data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
                main.innerHTML = `<div class="col-span-full text-center text-zinc-500 text-sm">Error loading movies. Please try again.</div>`;
            }
        }

        function showMovies(movies) {
            main.innerHTML = '';

            if (movies.length === 0) {
                main.innerHTML = `<div class="col-span-full text-center text-zinc-500 text-sm py-12">No movies found. Try a different search.</div>`;
                return;
            }

            movies.forEach((movie) => {
                const { title, poster_path, vote_average, overview, release_date } = movie;

                // Skip movies without images to keep design clean
                if (!poster_path) return;

                const movieEl = document.createElement('div');
                movieEl.classList.add('group', 'cursor-pointer', 'animate-fade-in');

                const ratingColor = getClassByRate(vote_average);
                const year = release_date ? release_date.split('-')[0] : 'N/A';

                movieEl.innerHTML = `
                    <div class="relative aspect-[2/3] rounded-xl overflow-hidden card-hover mb-3 bg-zinc-900 border border-white/5">
                        <img src="${IMG_PATH + poster_path}" class="w-full h-full object-cover" alt="${title}">
                        <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p class="text-white text-xs text-center line-clamp-4 font-light leading-relaxed">${overview}</p>
                        </div>
                        <div class="absolute top-2 right-2 backdrop-blur-md px-1.5 py-0.5 rounded text-[10px] font-bold ${ratingColor} border border-white/10 shadow-lg">
                            ${vote_average.toFixed(1)}
                        </div>
                    </div>
                    <h3 class="text-zinc-200 text-sm font-medium truncate pr-2 group-hover:text-white transition-colors">${title}</h3>
                    <p class="text-zinc-500 text-xs mt-0.5 flex items-center gap-2">
                        <span>${year}</span>
                    </p>
                `;

                main.appendChild(movieEl);
            });
        }

        function getClassByRate(vote) {
            if (vote >= 8) {
                return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/20';
            } else if (vote >= 5) {
                return 'bg-amber-500/20 text-amber-400 border-amber-500/20';
            } else {
                return 'bg-rose-500/20 text-rose-400 border-rose-500/20';
            }
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = search.value;

            if (searchTerm && searchTerm !== '') {
                getMovies(SEARCH_API + searchTerm);
                search.value = '';
                
                // Smooth scroll to results
                document.getElementById('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
                window.location.reload();
            }
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
      

<nav className="fixed top-0 w-full z-50 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
<div className="flex items-center gap-8 shrink-0">
<a className="text-white text-xl font-medium tracking-tighter flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
<span className="iconify" data-icon="lucide:arrow-left" data-strokeWidth="1.5" data-width="20"></span>
</a>
<div className="hidden md:flex items-center gap-2 text-sm text-zinc-500">
<span className="text-zinc-300 font-medium">Discover</span>
</div>
</div>

<form className="flex-1 max-w-md relative group" id="form">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-white transition-colors">
<span className="iconify" data-icon="lucide:search" data-width="16"></span>
</span>
<input autocomplete="off" className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:bg-white/10 focus:border-white/20 transition-all placeholder:text-zinc-600" id="search" placeholder="Search movies..." type="text"/>
</form>
<div className="flex items-center gap-4 shrink-0">
<button className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
<span className="iconify" data-icon="lucide:share" data-strokeWidth="1.5" data-width="20"></span>
</button>
<button className="text-zinc-400 hover:text-white transition-colors hidden sm:block">
<span className="iconify" data-icon="lucide:heart" data-strokeWidth="1.5" data-width="20"></span>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-700 to-zinc-600 border border-white/10"></div>
</div>
</div>
</nav>

<section className="relative h-[85vh] w-full overflow-hidden">
<div className="absolute inset-0">
<img alt="Backdrop" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&amp;w=2894&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-12">
<div className="flex items-center gap-3 mb-6">
<div className="px-2 py-0.5 rounded border border-zinc-700 bg-black/50 text-[10px] font-bold text-zinc-300 uppercase tracking-widest backdrop-blur-sm">FEATURED</div>
<div className="flex items-center gap-1 text-emerald-400 text-xs font-medium bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">
<span className="iconify" data-icon="lucide:thumbs-up" data-width="12"></span>
                    98% Match
                </div>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter mb-2 max-w-4xl leading-[1.1]">
                Interstellar Horizons
            </h1>
<div className="flex items-center gap-4 text-zinc-300 text-sm font-medium mb-8">
<span>2024</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>2h 45m</span>
<span className="w-1 h-1 rounded-full bg-zinc-600"></span>
<span>Sci-Fi, Adventure</span>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<button className="flex items-center justify-center gap-3 bg-white text-black pl-8 pr-10 py-4 rounded-full text-base font-semibold hover:bg-zinc-200 transition-all active:scale-95 group">
<span className="iconify fill-black group-hover:scale-110 transition-transform" data-icon="lucide:play" data-width="20"></span>
                    Play Movie
                </button>
<button className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 text-white pl-8 pr-10 py-4 rounded-full text-base font-medium hover:bg-white/20 transition-all active:scale-95">
<span className="iconify" data-icon="lucide:film" data-width="20"></span>
                    Trailer
                </button>
</div>
</div>
</section>

<section className="py-16 bg-black border-t border-white/5 min-h-screen">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h2 className="text-xl font-semibold text-white tracking-tight flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:flame" data-width="20"></span>
                    Trending Movies
                </h2>

</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6" id="main">

<div className="col-span-full flex justify-center py-20">
<div className="loader"></div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-black border-t border-white/5 text-sm">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-zinc-400">
<span className="iconify" data-icon="lucide:aperture" data-width="18"></span>
<span className="font-medium text-white tracking-tight">Aura</span>
<span className="mx-2 text-zinc-700">|</span>
<span className="text-xs">Cinematic Clarity</span>
</div>
<div className="flex gap-6 text-zinc-500 text-xs">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Help</a>
</div>
</div>
</footer>



    </>
  );
}
