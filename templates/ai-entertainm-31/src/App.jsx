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
sans: ['Inter', 'sans-serif'],
mono: ['Roboto Mono', 'monospace'],
},
colors: {
yt: {
red: '#E11D48', // Updated to a more modern pink/red
dark: '#0A0A0A',
card: '#171717',
border: '#262626',
text: '#EDEDED',
subtext: '#A1A1A1',
hover: '#2C2C2C'
},
semantic: {
success: '#22C55E',
info: '#3B82F6',
warning: '#F59E0B',
purple: '#8B5CF6'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.5s ease-out forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Data & State
        const RECOMMENDATIONS = [
            {
                id: '1',
                title: 'The Last of Us',
                year: 2023,
                platform: 'HBO Max',
                poster: 'https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=600&h=900&fit=crop',
                rating: 8.9,
                confidence: '98% Match',
                genres: ['Action', 'Drama'],
                reasoning: 'Strategic match: Fits your "Intense" energy setting and "Group" viewing context. Highly rated by your "Work Friends" group.',
                reviews: [ { source: 'IMDb', score: '8.9' }, { source: 'RT', score: '96%' } ],
                tags: ['🔥 Trending', '👥 Group Pick'],
                social: 'Sarah & Mike watched'
            },
            {
                id: '2',
                title: 'Succession',
                year: 2023,
                platform: 'HBO Max',
                poster: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=900&fit=crop',
                rating: 8.9,
                confidence: '95% Match',
                genres: ['Drama'],
                reasoning: 'Aligns with your preference for complex narratives. The final season is currently the #1 topic in your social circles.',
                reviews: [ { source: 'IMDb', score: '8.9' }, { source: 'Metacritic', score: '93' } ],
                tags: ['⭐ Critics Choice'],
                social: 'Trending in NYC'
            },
            {
                id: '3',
                title: 'The Bear',
                year: 2023,
                platform: 'Disney+',
                poster: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&h=900&fit=crop',
                rating: 8.6,
                confidence: '91% Match',
                genres: ['Drama', 'Comedy'],
                reasoning: 'Short duration episodes fit your "< 30m" constraint perfectly while maintaining high intensity.',
                reviews: [ { source: 'IMDb', score: '8.6' }, { source: 'Metacritic', score: '92' } ],
                tags: ['⏱️ Short Eps'],
                social: 'Alex recommmends'
            },
            {
                id: '4',
                title: 'Severance',
                year: 2022,
                platform: 'Apple TV+',
                poster: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=900&fit=crop',
                rating: 8.7,
                confidence: '89% Match',
                genres: ['Sci-Fi', 'Mystery'],
                reasoning: 'Selected based on your strategic question "Brainy". Offers a puzzle-box narrative similar to your past favorites.',
                reviews: [ { source: 'IMDb', score: '8.7' }, { source: 'RT', score: '97%' } ],
                tags: ['🧠 Brainy'],
                social: 'Top Rated 2022'
            }
        ];

        const AGENTS = [
            { id: 1, name: 'StrategicContextAgent', desc: 'Analyzing user constraints (Time, Group, Energy)', icon: 'sliders-horizontal', priority: 10, start: 0, dur: 400 },
            { id: 2, name: 'SocialGraphAgent', desc: 'Querying "Pizza Group" & "Work Friends"', icon: 'users', priority: 9, start: 300, dur: 600 },
            { id: 3, name: 'GlobalTrendAgent', desc: 'Fetching cross-platform popularity', icon: 'globe', priority: 8, start: 500, dur: 500 },
            { id: 4, name: 'ReviewSynthesisAgent', desc: 'Aggregating critic scores', icon: 'star', priority: 7, start: 1000, dur: 600 },
            { id: 5, name: 'PersonaMatchAgent', desc: 'Filtering against user history', icon: 'fingerprint', priority: 9, start: 1500, dur: 500 },
            { id: 6, name: 'FinalRankingAgent', desc: 'Sorting by relevance score', icon: 'list-ordered', priority: 10, start: 2200, dur: 600 },
        ];

        let isDiscovering = false;
        
        // UI Helpers
        function selectStrategy(btn) {
            // Visual toggle for buttons
            const parent = btn.parentElement;
            Array.from(parent.children).forEach(c => {
                c.classList.remove('bg-yt-red', 'text-white');
                c.classList.add('bg-yt-border/50');
            });
            btn.classList.remove('bg-yt-border/50');
            btn.classList.add('bg-yt-red', 'text-white');
        }

        function toggleReasoning(id) {
            const el = document.getElementById(`reasoning-${id}`);
            const btn = document.getElementById(`btn-reasoning-${id}`);
            const isActive = el.classList.contains('active');
            
            document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
            document.querySelectorAll('.reasoning-chevron').forEach(c => c.style.transform = 'rotate(0deg)');

            if (!isActive) {
                el.classList.add('active');
                btn.style.transform = 'rotate(180deg)';
            }
        }

        function createAgentCard(agent) {
            return `
                <div id="agent-${agent.id}" class="flex items-center gap-4 p-3 rounded-lg bg-yt-card border border-transparent transition-all opacity-40 transform scale-95">
                    <div class="w-10 h-10 rounded-full bg-yt-border flex items-center justify-center text-yt-subtext transition-colors icon-box shadow-inner">
                        <i data-lucide="${agent.icon}" class="w-5 h-5"></i>
                    </div>
                    <div class="flex-grow">
                        <div class="flex justify-between mb-1">
                            <span class="font-medium text-sm text-white">${agent.name}</span>
                            <span class="text-[10px] uppercase font-bold text-yt-subtext status-text tracking-wider">Waiting</span>
                        </div>
                        <div class="text-xs text-yt-subtext mb-2">${agent.desc}</div>
                        <div class="h-1 w-full bg-yt-dark rounded-full overflow-hidden">
                            <div class="h-full bg-yt-red w-0 progress-bar rounded-full shadow-[0_0_10px_rgba(225,29,72,0.5)]"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        function createCard(movie) {
            return `
                <div class="group bg-yt-card rounded-xl overflow-hidden border border-yt-border hover:border-yt-subtext hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
                    <!-- Image -->
                    <div class="relative aspect-[2/3] overflow-hidden">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0">
                        <div class="absolute inset-0 bg-gradient-to-t from-yt-card via-transparent to-transparent"></div>
                        
                        <div class="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-[10px] font-bold border border-white/10 uppercase tracking-wide">
                            ${movie.platform}
                        </div>
                        <div class="absolute top-3 right-3 px-2 py-1 bg-semantic-success text-white rounded-full text-[10px] font-bold shadow-lg flex items-center gap-1">
                            <i data-lucide="sparkles" class="w-3 h-3"></i> ${movie.confidence}
                        </div>

                        <div class="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 opacity-100 transition-opacity duration-300">
                            ${movie.tags.map(tag => `<span class="px-2 py-1 bg-yt-red/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded shadow-lg">${tag}</span>`).join('')}
                        </div>
                    </div>

                    <!-- Body -->
                    <div class="p-4 flex flex-col flex-grow">
                        <div class="flex justify-between items-start mb-1">
                            <h3 class="text-base font-bold leading-tight group-hover:text-yt-red transition-colors">${movie.title}</h3>
                            <span class="text-xs text-yt-subtext bg-yt-border/50 px-1.5 py-0.5 rounded">${movie.year}</span>
                        </div>
                        
                        <div class="text-xs text-yt-subtext mb-4">${movie.genres.join(', ')}</div>

                        <!-- Social Proof -->
                        <div class="flex items-center gap-2 mb-4 p-2 rounded bg-yt-border/30 border border-yt-border/50">
                            <div class="avatar-stack scale-75 origin-left ml-2">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" class="w-6 h-6 rounded-full bg-gray-800">
                                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" class="w-6 h-6 rounded-full bg-gray-800">
                            </div>
                            <span class="text-[10px] text-yt-text font-medium">${movie.social}</span>
                        </div>

                        <!-- Reasoning -->
                        <div class="mt-auto space-y-2">
                            <button onclick="toggleReasoning('${movie.id}')" class="w-full py-2 bg-transparent hover:bg-yt-border/50 border border-yt-border rounded text-xs font-medium text-yt-subtext hover:text-white transition-all flex items-center justify-between px-3">
                                Why this pick?
                                <i id="btn-reasoning-${movie.id}" data-lucide="chevron-down" class="w-3 h-3 reasoning-chevron transition-transform duration-300"></i>
                            </button>
                            
                            <div id="reasoning-${movie.id}" class="accordion-content bg-yt-dark rounded text-xs text-yt-subtext border-l-2 border-yt-red">
                                <div class="p-3 leading-relaxed">
                                    <span class="text-white font-semibold block mb-1">AI Analysis:</span>
                                    ${movie.reasoning}
                                </div>
                            </div>

                            <button class="w-full py-2.5 bg-white hover:bg-gray-200 text-black rounded font-bold text-xs uppercase tracking-wide shadow-lg transition-colors flex items-center justify-center gap-2">
                                <i data-lucide="play" class="w-3 h-3 fill-current"></i> Play Now
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }

        async function startDiscovery() {
            if (isDiscovering) return;
            isDiscovering = true;
            
            const heroEl = document.getElementById('hero-section');
            const agentViewEl = document.getElementById('agent-view');
            const resultsViewEl = document.getElementById('results-view');
            const agentListEl = document.getElementById('agent-list');
            const gridEl = document.getElementById('recommendation-grid');
            const timerEl = document.getElementById('timer');

            // Animate Hero Out
            heroEl.classList.add('opacity-0', '-translate-y-10', 'pointer-events-none', 'absolute');
            setTimeout(() => heroEl.classList.add('hidden'), 500);
            
            // Show Agents
            agentViewEl.classList.remove('hidden');
            agentListEl.innerHTML = AGENTS.map(agent => createAgentCard(agent)).join('');
            lucide.createIcons();

            const startTime = Date.now();
            const timerInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                if (elapsed <= 3000) {
                    timerEl.innerText = (elapsed / 1000).toFixed(1) + 's';
                }
            }, 50);

            // Run Simulation
            for (const agent of AGENTS) {
                setTimeout(() => {
                    const card = document.getElementById(`agent-${agent.id}`);
                    const bar = card.querySelector('.progress-bar');
                    const status = card.querySelector('.status-text');
                    const iconBox = card.querySelector('.icon-box');

                    card.classList.remove('opacity-40', 'scale-95');
                    card.classList.add('opacity-100', 'scale-100', 'border-yt-border/50');
                    
                    status.innerText = 'PROCESSING';
                    status.classList.add('text-yt-red', 'animate-pulse');
                    iconBox.classList.add('text-white', 'bg-yt-red');
                    
                    bar.style.transition = `width ${agent.dur}ms ease-out`;
                    bar.style.width = '100%';

                    setTimeout(() => {
                        status.innerText = 'COMPLETE';
                        status.classList.remove('text-yt-red', 'animate-pulse');
                        status.classList.add('text-semantic-success');
                        
                        iconBox.classList.remove('bg-yt-red');
                        iconBox.classList.add('bg-semantic-success');
                        bar.classList.remove('bg-yt-red');
                        bar.classList.add('bg-semantic-success');
                    }, agent.dur);

                }, agent.start);
            }

            // Finish
            setTimeout(() => {
                clearInterval(timerInterval);
                timerEl.innerText = "2.8s";
                
                agentViewEl.classList.add('opacity-0', 'transition-opacity', 'duration-500');
                
                setTimeout(() => {
                    agentViewEl.classList.add('hidden');
                    resultsViewEl.classList.remove('hidden');
                    gridEl.innerHTML = RECOMMENDATIONS.map(movie => createCard(movie)).join('');
                    lucide.createIcons();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 500);
                
                isDiscovering = false;
            }, 3200);
        }

        // Init
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-yt-dark/80 backdrop-blur-xl border-b border-yt-border h-14 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer group" onclick="window.location.reload()">
<div className="w-7 h-7 rounded-lg bg-gradient-to-br from-yt-red to-rose-600 flex items-center justify-center text-white shadow-lg shadow-rose-900/20">
<i className="w-4 h-4 fill-current" data-lucide="zap"></i>
</div>
<span className="text-base font-bold tracking-tight group-hover:text-white transition-colors">
                    Entertain<span className="text-yt-red">AI</span>
</span>
</div>

<nav className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium text-white bg-yt-card px-3 py-1.5 rounded-full border border-yt-border hover:border-yt-subtext transition-all" href="#">Discover</a>
<a className="text-xs font-medium text-yt-subtext hover:text-white transition-colors" href="#">Groups</a>
<a className="text-xs font-medium text-yt-subtext hover:text-white transition-colors" href="#">Library</a>
</nav>

<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-yt-card border border-yt-border text-xs font-medium text-yt-subtext cursor-pointer hover:text-white transition-colors">
<i className="w-3 h-3" data-lucide="users"></i>
<span>Pizza Group</span>
<i className="w-3 h-3 ml-1" data-lucide="chevron-down"></i>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gray-700 to-gray-900 ring-2 ring-yt-border flex items-center justify-center overflow-hidden cursor-pointer hover:ring-yt-subtext transition-all">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix"/>
</div>
</div>
</div>
</header>

<main className="flex-grow pt-24 pb-20 px-4 max-w-7xl mx-auto w-full">

<section className="flex flex-col items-center justify-center min-h-[50vh] transition-all duration-500 ease-in-out relative" id="hero-section">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yt-red/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="text-center mb-10 relative z-10">
<h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                    What's the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yt-red to-orange-500">plan</span> tonight?
                </h1>
<p className="text-yt-subtext text-sm md:text-base max-w-xl mx-auto">
                    Answer 3 strategic questions to help our agents narrow down 50,000+ titles instantly.
                </p>
</div>

<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 z-10">

<div className="glass-panel p-4 rounded-xl flex flex-col gap-3 hover:border-yt-subtext/50 transition-colors group">
<div className="flex items-center gap-2 text-xs font-semibold text-yt-subtext uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="users"></i> Who's Watching?
                    </div>
<div className="flex flex-wrap gap-2">
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">Solo</button>
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">Date</button>
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">Group</button>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col gap-3 hover:border-yt-subtext/50 transition-colors group">
<div className="flex items-center gap-2 text-xs font-semibold text-yt-subtext uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="zap"></i> Energy Level
                    </div>
<div className="flex flex-col gap-2">
<input className="w-full h-1 bg-yt-border rounded-lg appearance-none cursor-pointer accent-yt-red" max="100" min="1" type="range" value="50"/>
<div className="flex justify-between text-[10px] text-yt-subtext font-medium">
<span>Chill</span>
<span>Brainy</span>
<span>Intense</span>
</div>
</div>
</div>

<div className="glass-panel p-4 rounded-xl flex flex-col gap-3 hover:border-yt-subtext/50 transition-colors group">
<div className="flex items-center gap-2 text-xs font-semibold text-yt-subtext uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="clock"></i> Duration
                    </div>
<div className="flex flex-wrap gap-2">
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">&lt; 30m</button>
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">Movie</button>
<button className="flex-1 px-3 py-2 rounded-lg bg-yt-border/50 hover:bg-yt-red hover:text-white text-xs font-medium transition-all text-center border border-transparent" onclick="selectStrategy(this)">Binge</button>
</div>
</div>
</div>

<div className="w-full max-w-2xl relative mb-16 group z-10">
<input className="w-full h-12 pl-5 pr-12 bg-yt-card border border-yt-border rounded-full text-white placeholder-yt-subtext focus:outline-none focus:border-yt-red focus:ring-1 focus:ring-yt-red transition-all shadow-xl text-sm font-medium" id="search-input" placeholder="Or describe exactly what you want..." type="text"/>
<button className="absolute right-1.5 top-1.5 h-9 w-9 bg-yt-border hover:bg-white hover:text-black rounded-full flex items-center justify-center text-white transition-all duration-300" onclick="startDiscovery()">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="w-full max-w-7xl animate-slide-up" id="dashboard-content">

<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold flex items-center gap-2">
<i className="w-4 h-4 text-rose-500 fill-current" data-lucide="heart"></i>
                        Recommended by Your Groups
                    </h2>
<a className="text-xs text-yt-subtext hover:text-white transition-colors" href="#">View all activity</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">

<div className="group relative bg-yt-card rounded-xl border border-yt-border overflow-hidden hover:border-yt-subtext transition-all cursor-pointer">
<div className="aspect-video relative overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

<div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded-md text-[10px] font-bold uppercase tracking-wide border border-white/10 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-purple"></span> Work Friends
                            </div>
</div>
<div className="p-3">
<h3 className="font-semibold text-sm mb-1 text-white">Everything Everywhere All At Once</h3>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center text-xs text-yt-subtext">
<span className="text-semantic-success font-medium">96% Match</span>
</div>

<div className="avatar-stack">
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" title="Sarah"/>
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" title="Mike"/>
<div className="w-6 h-6 rounded-full bg-yt-border border-2 border-yt-card flex items-center justify-center text-[8px] font-bold text-white ml-[-10px] relative z-20">+3</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-yt-card rounded-xl border border-yt-border overflow-hidden hover:border-yt-subtext transition-all cursor-pointer">
<div className="aspect-video relative overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded-md text-[10px] font-bold uppercase tracking-wide border border-white/10 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-info"></span> The Squad
                            </div>
</div>
<div className="p-3">
<h3 className="font-semibold text-sm mb-1 text-white">Dune: Part Two</h3>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center text-xs text-yt-subtext">
<span className="text-semantic-success font-medium">98% Match</span>
</div>
<div className="avatar-stack">
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" title="Alex"/>
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sam" title="Sam"/>
</div>
</div>
</div>
</div>

<div className="group relative bg-yt-card rounded-xl border border-yt-border overflow-hidden hover:border-yt-subtext transition-all cursor-pointer">
<div className="aspect-video relative overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded-md text-[10px] font-bold uppercase tracking-wide border border-white/10 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-warning"></span> Family
                            </div>
</div>
<div className="p-3">
<h3 className="font-semibold text-sm mb-1 text-white">Ted Lasso</h3>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center text-xs text-yt-subtext">
<span className="text-semantic-info font-medium">85% Match</span>
</div>
<div className="avatar-stack">
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mom" title="Mom"/>
<div className="w-6 h-6 rounded-full bg-yt-border border-2 border-yt-card flex items-center justify-center text-[8px] font-bold text-white ml-[-10px] relative z-20">+1</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-yt-card rounded-xl border border-yt-border overflow-hidden hover:border-yt-subtext transition-all cursor-pointer">
<div className="aspect-video relative overflow-hidden">
<img className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620510625142-b45cbb784397?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
<div className="absolute top-2 left-2 px-2 py-1 bg-black/60 backdrop-blur rounded-md text-[10px] font-bold uppercase tracking-wide border border-white/10 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-semantic-purple"></span> Work Friends
                            </div>
</div>
<div className="p-3">
<h3 className="font-semibold text-sm mb-1 text-white">Black Mirror</h3>
<div className="flex items-center justify-between mt-3">
<div className="flex items-center text-xs text-yt-subtext">
<span className="text-semantic-success font-medium">92% Match</span>
</div>
<div className="avatar-stack">
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" title="John"/>
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kate" title="Kate"/>
<img className="w-6 h-6 rounded-full bg-gray-800" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ben" title="Ben"/>
</div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between mb-4">
<h2 className="text-lg font-semibold flex items-center gap-2">
<i className="w-4 h-4 text-yt-red" data-lucide="trending-up"></i>
                        Most Popular Global
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex items-center gap-4 bg-yt-card p-4 rounded-xl border border-yt-border hover:border-yt-subtext transition-all cursor-pointer group">
<span className="text-4xl font-black text-yt-border group-hover:text-white transition-colors">1</span>
<div className="w-16 h-20 rounded bg-gray-800 flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<h3 className="font-bold text-sm text-white">The Last of Us</h3>
<div className="text-xs text-yt-subtext mt-1 mb-2">HBO Max • Drama</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-semantic-success bg-semantic-success/10 px-2 py-0.5 rounded w-fit">
<i className="w-3 h-3" data-lucide="arrow-up"></i> Trending
                            </div>
</div>
</div>

<div className="flex items-center gap-4 bg-yt-card p-4 rounded-xl border border-yt-border hover:border-yt-subtext transition-all cursor-pointer group">
<span className="text-4xl font-black text-yt-border group-hover:text-white transition-colors">2</span>
<div className="w-16 h-20 rounded bg-gray-800 flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h3 className="font-bold text-sm text-white">Severance</h3>
<div className="text-xs text-yt-subtext mt-1 mb-2">Apple TV+ • Sci-Fi</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-semantic-info bg-semantic-info/10 px-2 py-0.5 rounded w-fit">
                                New Season
                            </div>
</div>
</div>

<div className="flex items-center gap-4 bg-yt-card p-4 rounded-xl border border-yt-border hover:border-yt-subtext transition-all cursor-pointer group">
<span className="text-4xl font-black text-yt-border group-hover:text-white transition-colors">3</span>
<div className="w-16 h-20 rounded bg-gray-800 flex-shrink-0 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=400"/>
</div>
<div>
<h3 className="font-bold text-sm text-white">Dune: Part Two</h3>
<div className="text-xs text-yt-subtext mt-1 mb-2">Cinema • Action</div>
<div className="flex items-center gap-1 text-[10px] font-bold text-semantic-warning bg-semantic-warning/10 px-2 py-0.5 rounded w-fit">
                                Blockbuster
                            </div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden max-w-2xl mx-auto py-12" id="agent-view">
<div className="flex items-center justify-between mb-8 border-b border-yt-border pb-4">
<h2 className="text-lg font-semibold flex items-center gap-3">
<div className="relative">
<span className="absolute inset-0 rounded-full bg-yt-red animate-ping opacity-20"></span>
<i className="w-5 h-5 text-yt-red relative z-10" data-lucide="cpu"></i>
</div>
                    Running Strategic Analysis
                </h2>
<span className="text-xl font-mono font-bold text-yt-red" id="timer">0.0s</span>
</div>
<div className="grid gap-4" id="agent-list">

</div>
</section>

<section className="hidden animate-fade-in" id="results-view">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-yt-border pb-6">
<div>
<h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                        Top Strategic Picks
                        <span className="px-2 py-0.5 rounded-full bg-yt-red text-xs font-bold text-white">AI</span>
</h2>
<p className="text-yt-subtext text-sm">Filtered from 54,000 titles based on your group preferences and mood.</p>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 rounded-md bg-yt-card border border-yt-border text-xs font-medium hover:text-white transition-colors">Export to Group</button>
<button className="p-2 rounded-md bg-yt-card border border-yt-border hover:bg-yt-hover text-white transition-colors" title="Grid View">
<i className="w-4 h-4" data-lucide="layout-grid"></i>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" id="recommendation-grid">

</div>
</section>
</main>



    </>
  );
}
