import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
cine: {
950: '#09090b', // Deep background
900: '#18181b', // Cards
800: '#27272a',
700: '#3f3f46',
100: '#f4f4f5',
50: '#fafafa',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // --- DATA ---
        const movies = [
            {
                id: 1, title: "The Godfather", year: 1972, genre: "Crime",
                poster: "https://images.unsplash.com/photo-1596727147705-54a9d099308d?q=80&w=200&auto=format&fit=crop",
                quotes: [
                    { text: "I'm gonna make him an offer he can't refuse.", char: "Vito Corleone" },
                    { text: "Revenge is a dish best served cold.", char: "Don Barzini" }
                ]
            },
            {
                id: 2, title: "The Dark Knight", year: 2008, genre: "Action",
                poster: "https://images.unsplash.com/photo-1509347528160-9a9e33742cd4?q=80&w=200&auto=format&fit=crop",
                quotes: [
                    { text: "Why so serious?", char: "The Joker" },
                    { text: "You either die a hero, or you live long enough to see yourself become the villain.", char: "Harvey Dent" }
                ]
            },
            {
                id: 3, title: "Forrest Gump", year: 1994, genre: "Drama",
                poster: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=200&auto=format&fit=crop",
                quotes: [
                    { text: "Life is like a box of chocolates. You never know what you're gonna get.", char: "Forrest" },
                    { text: "Run, Forrest! Run!", char: "Jenny Curran" }
                ]
            },
            {
                id: 4, title: "Pulp Fiction", year: 1994, genre: "Crime",
                poster: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=200&auto=format&fit=crop",
                quotes: [
                    { text: "Say 'what' again. I dare you, I double dare you!", char: "Jules Winnfield" },
                    { text: "I do believe Marsellus Wallace, my husband, your boss, told you to take me out and do whatever I wanted.", char: "Mia Wallace" }
                ]
            },
            {
                id: 5, title: "Interstellar", year: 2014, genre: "Sci-Fi",
                poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=200&auto=format&fit=crop",
                quotes: [
                    { text: "We used to look up at the sky and wonder at our place in the stars.", char: "Cooper" },
                    { text: "Love is the one thing we're capable of perceiving that transcends dimensions of time and space.", char: "Brand" }
                ]
            }
        ];

        // Flatten quotes for home feed
        const allQuotes = movies.flatMap(movie => 
            movie.quotes.map(q => ({ ...q, movieTitle: movie.title, movieId: movie.id, moviePoster: movie.poster }))
        ).sort(() => 0.5 - Math.random());

        // --- COMPONENTS ---

        function QuoteCard(quote) {
            // Encode data for download function
            const safeText = encodeURIComponent(quote.text);
            const safeChar = encodeURIComponent(quote.char);
            const safeTitle = encodeURIComponent(quote.movieTitle);

            return `
            <div class="glass-card rounded-xl p-6 md:p-8 flex flex-col justify-between h-full group relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div class="mb-6 relative z-10">
                    <iconify-icon icon="solar:quote-up-square-linear" class="text-zinc-400 dark:text-zinc-600 mb-4" width="28"></iconify-icon>
                    <p class="font-serif text-xl md:text-2xl text-zinc-800 dark:text-zinc-100 leading-relaxed italic mb-4">
                        "${quote.text}"
                    </p>
                </div>
                
                <div class="flex items-end justify-between relative z-10">
                    <div>
                        <p class="text-sm font-medium text-zinc-900 dark:text-white tracking-wide">${quote.char}</p>
                        <p class="text-xs text-zinc-500 mt-0.5">${quote.movieTitle}</p>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="saveQuote(this)" class="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-pink-500 dark:hover:text-white hover:bg-pink-50 dark:hover:bg-zinc-700 transition">
                            <iconify-icon icon="solar:heart-linear" width="16"></iconify-icon>
                        </button>
                        <button onclick="downloadCard('${safeText}', '${safeChar}', '${safeTitle}', this)" class="w-8 h-8 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black flex items-center justify-center hover:bg-zinc-700 dark:hover:bg-zinc-200 transition shadow-sm">
                            <iconify-icon icon="solar:download-minimalistic-linear" width="16"></iconify-icon>
                        </button>
                    </div>
                </div>
            </div>
            `;
        }

        function MovieResultCard(movie) {
            return `
            <div onclick="openDetail('${movie.title}')" class="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/5 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 hover:border-zinc-300 dark:hover:border-white/10 transition cursor-pointer group shadow-sm dark:shadow-none">
                <img src="${movie.poster}" class="w-12 h-16 object-cover rounded-md bg-zinc-200 dark:bg-zinc-800" alt="${movie.title}">
                <div class="flex-grow">
                    <h4 class="text-sm font-medium text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">${movie.title}</h4>
                    <p class="text-xs text-zinc-500">${movie.year}</p>
                </div>
                <iconify-icon icon="solar:alt-arrow-right-linear" class="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors mr-2"></iconify-icon>
            </div>
            `;
        }

        // --- LOGIC ---

        const views = ['home', 'search', 'saved'];
        const homeGrid = document.getElementById('home-grid');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        const modal = document.getElementById('movie-modal');
        
        function init() {
            homeGrid.innerHTML = allQuotes.slice(0, 9).map(q => QuoteCard(q)).join('');
            searchResults.innerHTML = movies.slice(0, 3).map(m => MovieResultCard(m)).join('');
            
            // Check Theme
            if (localStorage.theme === 'light') {
                document.documentElement.classList.remove('dark');
            } else {
                document.documentElement.classList.add('dark');
            }
        }

        // Theme Toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                html.classList.add('dark');
                localStorage.theme = 'dark';
            }
        });

        // Tabs
        window.switchTab = (tabName) => {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const isActive = btn.dataset.target === tabName;
                btn.classList.toggle('active', isActive);
                if(isActive) {
                    btn.classList.add('text-zinc-900', 'dark:text-white');
                    btn.classList.remove('text-zinc-400', 'dark:text-zinc-500');
                } else {
                    btn.classList.remove('text-zinc-900', 'dark:text-white');
                    btn.classList.add('text-zinc-400', 'dark:text-zinc-500');
                }
            });
            views.forEach(view => {
                const el = document.getElementById(`view-${view}`);
                if (view === tabName) {
                    el.classList.remove('hidden');
                    setTimeout(() => el.classList.remove('opacity-0'), 10);
                } else {
                    el.classList.add('opacity-0');
                    setTimeout(() => el.classList.add('hidden'), 300);
                }
            });
            if (tabName === 'search') setTimeout(() => document.getElementById('search-input').focus(), 100);
        };

        // Modal
        window.openDetail = (title) => {
            const movie = movies.find(m => m.title === title);
            if (!movie) return;
            document.getElementById('modal-poster').src = movie.poster;
            document.getElementById('modal-title').textContent = movie.title;
            document.getElementById('modal-year').textContent = `${movie.year} • ${movie.genre}`;
            
            const quotesHtml = movie.quotes.map(q => {
                const safeText = encodeURIComponent(q.text);
                const safeChar = encodeURIComponent(q.char);
                const safeTitle = encodeURIComponent(movie.title);
                return `
                <div class="p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition">
                    <p class="font-serif text-lg text-zinc-800 dark:text-zinc-200 italic mb-3">"${q.text}"</p>
                    <div class="flex justify-between items-center">
                        <p class="text-xs text-zinc-500 uppercase tracking-wider">${q.char}</p>
                        <button onclick="downloadCard('${safeText}', '${safeChar}', '${safeTitle}', this)" class="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1">
                            <iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon> Download
                        </button>
                    </div>
                </div>`;
            }).join('');
            
            document.getElementById('modal-quotes-list').innerHTML = quotesHtml;
            modal.classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('modal-backdrop').classList.remove('opacity-0');
                document.getElementById('modal-panel').classList.remove('translate-y-full');
            }, 10);
        };

        window.closeModal = () => {
            document.getElementById('modal-backdrop').classList.add('opacity-0');
            document.getElementById('modal-panel').classList.add('translate-y-full');
            setTimeout(() => modal.classList.add('hidden'), 300);
        };

        // Search
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = movies.filter(m => m.title.toLowerCase().includes(term) || m.quotes.some(q => q.char.toLowerCase().includes(term)));
            searchResults.innerHTML = filtered.length > 0 
                ? filtered.map(m => MovieResultCard(m)).join('') 
                : `<div class="text-center py-8 text-zinc-400 text-sm">No matches found</div>`;
        });

        // --- ACTUAL DOWNLOAD LOGIC ---
        window.downloadCard = async (text, char, title, btn) => {
            const decodedText = decodeURIComponent(text);
            const decodedChar = decodeURIComponent(char);
            const decodedTitle = decodeURIComponent(title);
            const icon = btn.querySelector('iconify-icon');
            
            // Loading State
            if(icon) icon.setAttribute('icon', 'solar:spinner-linear');
            if(icon) icon.classList.add('animate-spin');

            // 1. Create a clean, export-ready HTML structure off-screen
            const exportContainer = document.getElementById('export-container');
            
            // Determine colors based on current theme for the export
            const isDark = document.documentElement.classList.contains('dark');
            const bgClass = isDark ? 'bg-[#09090b]' : 'bg-[#fafafa]';
            const textClass = isDark ? 'text-white' : 'text-[#18181b]';
            const subTextClass = isDark ? 'text-zinc-400' : 'text-zinc-500';
            const borderClass = isDark ? 'border-zinc-800' : 'border-zinc-200';

            exportContainer.innerHTML = `
                <div id="capture-target" class="${bgClass} w-[800px] h-[450px] p-16 flex flex-col justify-between border ${borderClass} relative overflow-hidden">
                    <!-- Branding watermark -->
                    <div class="absolute top-8 right-8 flex items-center gap-2 opacity-50">
                        <div class="w-6 h-6 rounded bg-indigo-500"></div>
                        <span class="${textClass} text-sm font-semibold tracking-widest">CINEQUOTE</span>
                    </div>

                    <div class="z-10 mt-8">
                        <div class="${textClass} text-5xl font-serif italic leading-tight" style="font-family: 'Playfair Display', serif;">
                            "${decodedText}"
                        </div>
                    </div>

                    <div class="z-10">
                        <div class="${textClass} text-xl font-medium tracking-wide mb-1">${decodedChar}</div>
                        <div class="${subTextClass} text-lg">${decodedTitle}</div>
                    </div>

                    <!-- Decor -->
                    <div class="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
                </div>
            `;

            // 2. Wait for font rendering slightly
            await new Promise(r => setTimeout(r, 100));

            // 3. Generate Canvas
            try {
                const canvas = await html2canvas(document.getElementById('capture-target'), {
                    scale: 2, // Retina quality
                    backgroundColor: isDark ? '#09090b' : '#fafafa',
                    logging: false
                });

                // 4. Trigger Download
                const link = document.createElement('a');
                link.download = `CineQuote-${decodedTitle.replace(/\s+/g, '-')}.png`;
                link.href = canvas.toDataURL('image/png');
                link.click();
                
                showToast("Quote downloaded successfully");
            } catch (err) {
                console.error(err);
                showToast("Failed to generate image");
            } finally {
                // Reset Icon
                if(icon) icon.classList.remove('animate-spin');
                if(icon) icon.setAttribute('icon', 'solar:download-minimalistic-linear');
                exportContainer.innerHTML = ''; // Clean up
            }
        };

        window.saveQuote = (btn) => {
            const icon = btn.querySelector('iconify-icon');
            if (icon.getAttribute('icon').includes('heart-linear')) {
                icon.setAttribute('icon', 'solar:heart-bold');
                icon.classList.remove('text-zinc-400');
                icon.classList.add('text-pink-500');
                showToast("Added to favorites");
            } else {
                icon.setAttribute('icon', 'solar:heart-linear');
                icon.classList.add('text-zinc-400');
                icon.classList.remove('text-pink-500');
            }
        };

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').textContent = msg;
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => toast.classList.add('translate-y-20', 'opacity-0'), 3000);
        }

        // Filter Logic
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', function() {
                document.querySelectorAll('.filter-chip').forEach(c => {
                    c.classList.remove('active');
                    c.classList.add('bg-white', 'dark:bg-white/5', 'text-zinc-500', 'dark:text-zinc-400', 'border-zinc-200', 'dark:border-white/5');
                });
                this.classList.remove('bg-white', 'dark:bg-white/5', 'text-zinc-500', 'dark:text-zinc-400', 'border-zinc-200', 'dark:border-white/5');
                this.classList.add('active');
                
                homeGrid.style.opacity = '0';
                setTimeout(() => {
                    homeGrid.innerHTML = [...allQuotes].sort(() => 0.5 - Math.random()).slice(0, 6).map(q => QuoteCard(q)).join('');
                    homeGrid.style.opacity = '1';
                }, 200);
            });
        });

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 cine-gradient pointer-events-none z-0"></div>

<header className="fixed top-0 w-full z-50 glass transition-colors duration-300">
<div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-zinc-900 dark:bg-white/10 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-lg" icon="solar:clapperboard-edit-linear"></iconify-icon>
</div>
<h1 className="text-lg font-medium tracking-tight text-zinc-900 dark:text-white">CINEQUOTE</h1>
</div>
<div className="flex items-center gap-4">
<button className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-zinc-500 dark:text-cine-400" id="theme-toggle">
<iconify-icon className="block dark:hidden" icon="solar:moon-linear" width="20"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="solar:sun-linear" width="20"></iconify-icon>
</button>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 border border-white/20 shadow-inner"></div>
</div>
</div>
</header>

<main className="flex-grow pt-24 pb-24 z-10 max-w-6xl mx-auto w-full px-4 md:px-6">

<nav className="fixed bottom-0 left-0 w-full md:hidden z-50 glass border-t border-black/5 dark:border-white/5 pb-safe">
<div className="flex justify-around items-center p-3">
<button className="nav-btn active flex flex-col items-center gap-1 text-xs text-zinc-900 dark:text-white" data-target="home" onclick="switchTab('home')">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="opacity-80">Home</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500" data-target="search" onclick="switchTab('search')">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="opacity-80">Search</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-xs text-zinc-400 dark:text-zinc-500" data-target="saved" onclick="switchTab('saved')">
<iconify-icon icon="solar:bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="opacity-80">Saved</span>
</button>
</div>
</nav>

<div className="view-section opacity-100 transition-opacity duration-300" id="view-home">

<section className="mb-10 relative overflow-hidden rounded-2xl border border-black/5 dark:border-white/10 group shadow-lg dark:shadow-none">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-50 dark:from-cine-950 via-zinc-50/80 dark:via-cine-950/80 to-transparent"></div>
<div className="relative z-10 p-6 md:p-10 flex flex-col items-start justify-end min-h-[40vh] md:min-h-[50vh]">
<div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-md border border-white/20 dark:border-white/10 text-xs font-medium text-zinc-900 dark:text-white mb-4 shadow-sm">
<iconify-icon icon="solar:flame-linear" width="14"></iconify-icon>
                        Trending Now
                    </div>
<blockquote className="font-serif text-3xl md:text-5xl text-zinc-900 dark:text-white leading-tight mb-4 italic tracking-tight">
                        "I'm gonna make him an offer he can't refuse."
                    </blockquote>
<div className="flex items-center gap-3">
<p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 font-medium">The Godfather</p>
<span className="w-1 h-1 rounded-full bg-zinc-400 dark:bg-zinc-500"></span>
<p className="text-sm md:text-base text-zinc-500 dark:text-zinc-400">Vito Corleone</p>
</div>
<div className="mt-8 flex gap-3">
<button className="px-5 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:bg-zinc-800 dark:hover:bg-zinc-200 transition flex items-center gap-2 shadow-lg dark:shadow-none" onclick="openDetail('The Godfather')">
                            View Collection
                        </button>
</div>
</div>
</section>

<div className="flex gap-3 overflow-x-auto no-scrollbar mb-8 pb-2">
<button className="filter-chip active whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium border border-transparent transition-all shadow-sm">All</button>
<button className="filter-chip whitespace-nowrap px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-zinc-500 dark:text-zinc-400 text-sm border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all">Trending</button>
<button className="filter-chip whitespace-nowrap px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-zinc-500 dark:text-zinc-400 text-sm border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all">Classics</button>
<button className="filter-chip whitespace-nowrap px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-zinc-500 dark:text-zinc-400 text-sm border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all">Romance</button>
<button className="filter-chip whitespace-nowrap px-4 py-1.5 rounded-full bg-white dark:bg-white/5 text-zinc-500 dark:text-zinc-400 text-sm border border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/20 transition-all">Sci-Fi</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="home-grid">

</div>
</div>

<div className="view-section hidden opacity-0 transition-opacity duration-300" id="view-search">
<div className="sticky top-20 z-40 bg-gray-50/90 dark:bg-cine-950/80 backdrop-blur-xl pb-4 pt-2 -mt-2 transition-colors">
<div className="relative group">
<iconify-icon className="absolute left-4 top-3.5 text-zinc-400 group-focus-within:text-zinc-800 dark:group-focus-within:text-white transition-colors" icon="solar:magnifer-linear" width="20"></iconify-icon>
<input className="w-full bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 rounded-xl py-3 pl-12 pr-4 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-zinc-300 dark:focus:ring-white/20 focus:border-zinc-300 dark:focus:border-white/20 transition-all placeholder:text-zinc-400 shadow-sm dark:shadow-none" id="search-input" placeholder="Search movies, characters, or quotes..." type="text"/>
</div>
</div>
<div className="mt-4">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-4">Suggested</h3>
<div className="flex flex-wrap gap-2 mb-8">
<button className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition shadow-sm dark:shadow-none">Interstellar</button>
<button className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition shadow-sm dark:shadow-none">Pulp Fiction</button>
<button className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition shadow-sm dark:shadow-none">Joker</button>
<button className="px-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 text-xs text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition shadow-sm dark:shadow-none">Casablanca</button>
</div>
<div className="grid grid-cols-1 gap-4" id="search-results">

</div>
</div>
</div>

<div className="view-section hidden opacity-0 transition-opacity duration-300" id="view-saved">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white mb-6">Your Collection</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="saved-grid">

<div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
<div className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 flex items-center justify-center mb-4">
<iconify-icon className="text-zinc-400 dark:text-zinc-600" icon="solar:bookmark-linear" width="32"></iconify-icon>
</div>
<p className="text-zinc-500 dark:text-zinc-400 text-sm">No saved quotes yet.</p>
<button className="mt-4 text-xs font-medium text-zinc-900 dark:text-white border-b border-zinc-300 dark:border-white/20 pb-0.5 hover:border-zinc-900 dark:hover:border-white transition" onclick="switchTab('home')">Browse Quotes</button>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[60] hidden" id="movie-modal">
<div className="absolute inset-0 bg-zinc-900/40 dark:bg-black/80 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal()"></div>
<div className="absolute inset-x-0 bottom-0 md:inset-0 md:flex md:items-center md:justify-center pointer-events-none">
<div className="bg-white dark:bg-cine-900 md:border md:border-zinc-200 dark:md:border-white/10 w-full md:w-[600px] md:h-[80vh] h-[90vh] md:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col pointer-events-auto transform translate-y-full transition-transform duration-300 ease-out" id="modal-panel">
<div className="w-full flex justify-center pt-3 pb-1 md:hidden">
<div className="w-12 h-1.5 bg-zinc-300 dark:bg-zinc-800 rounded-full"></div>
</div>
<div className="p-4 md:p-6 flex justify-between items-start border-b border-zinc-100 dark:border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 dark:from-indigo-900/20 to-purple-50/50 dark:to-purple-900/20 pointer-events-none"></div>
<div className="relative z-10 flex gap-4">
<img alt="Poster" className="w-20 h-28 object-cover rounded-lg shadow-lg border border-zinc-200 dark:border-white/10" id="modal-poster" src=""/>
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 dark:text-white mb-1" id="modal-title">Movie Title</h2>
<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2" id="modal-year">1999 • Drama</p>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-white/5 text-[10px] text-zinc-600 dark:text-zinc-300">Top Rated</span>
</div>
</div>
</div>
<button className="relative z-10 p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 no-scrollbar">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Popular Quotes</h3>
<div className="space-y-4" id="modal-quotes-list"></div>
</div>
<div className="p-4 border-t border-zinc-100 dark:border-white/5 bg-gray-50/50 dark:bg-cine-950/50 backdrop-blur-md flex justify-between items-center">
<p className="text-xs text-zinc-500">Share these cards on social media.</p>
</div>
</div>
</div>
</div>

<div className="fixed top-0 left-0 pointer-events-none opacity-0 -z-50 w-[800px]" id="export-container"></div>

<div className="fixed bottom-24 md:bottom-10 left-1/2 transform -translate-x-1/2 bg-zinc-900 dark:bg-white text-white dark:text-cine-950 px-5 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 translate-y-20 opacity-0 z-[70]" id="toast">
<iconify-icon className="text-green-500 dark:text-green-600" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-sm font-medium" id="toast-message">Action successful</span>
</div>


    </>
  );
}
