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



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                class: 'stroke-[1.5]' // Thinner stroke as requested
            }
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // GitHub API Fetcher
        async function fetchDevData(username, prefix) {
            try {
                // Fetch Profile
                const profileRes = await fetch(`https://api.github.com/users/${username}`);
                const profile = await profileRes.json();

                // Fetch Repos (Sort by stars)
                const repoRes = await fetch(`https://api.github.com/users/${username}/repos?sort=stars&per_page=1`);
                const repos = await repoRes.json();
                const topRepo = repos[0];

                // Update DOM - Profile
                const avatarImg = document.getElementById(`${prefix}-avatar`);
                avatarImg.src = profile.avatar_url;
                avatarImg.onload = () => avatarImg.classList.remove('opacity-0');
                
                document.getElementById(`${prefix}-name`).innerText = profile.name || username;
                document.getElementById(`${prefix}-bio`).innerText = profile.bio || "Building the future of streaming.";

                // Update DOM - Repo
                if (topRepo) {
                    document.getElementById(`${prefix}-repo-name`).innerText = topRepo.name;
                    document.getElementById(`${prefix}-repo-desc`).innerText = topRepo.description || "No description provided.";
                    document.getElementById(`${prefix}-repo-stars`).innerText = topRepo.stargazers_count;
                    document.getElementById(`${prefix}-repo-link`).href = topRepo.html_url;
                }

            } catch (error) {
                console.error("Error fetching GitHub data:", error);
                document.getElementById(`${prefix}-bio`).innerText = "Core Maintainer of Uriel.";
            }
        }

        // Initialize Data Fetch
        fetchDevData('RyanYuuki', 'ryan');
        fetchDevData('ReyYuuki', 'rey');
    
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
      

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-neutral-900 rounded-full blur-[120px] opacity-40 blob"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-neutral-800 rounded-full blur-[120px] opacity-30 blob" style={{animationDelay: '-5s'}}></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-neutral-900/80 backdrop-blur-xl border border-white/5 pl-6 pr-2 py-2 rounded-full flex items-center gap-8 shadow-2xl reveal active">
<span className="text-lg font-medium tracking-tight text-white">Uriel</span>
<div className="hidden md:flex items-center gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#community">Community</a>
</div>
<a className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors m3-ease flex items-center gap-2" href="#download">
                Download
                <i className="w-4 h-4" data-lucide="arrow-down"></i>
</a>
</div>
</nav>

<section className="relative z-10 pt-40 pb-20 px-6 md:px-12 flex flex-col items-center text-center">
<div className="max-w-4xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-neutral-900 border border-white/10 text-xs text-neutral-300 reveal delay-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                v2.0 Update Coming Soon
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 reveal delay-200">
                Anime &amp; movies.<br/>
<span className="text-white">Zero headache.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed reveal delay-300">
                A cutting-edge streaming client for Android &amp; iOS. Backup your library, enjoy offline playback, and watch without boundaries. Pure Material Design.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal delay-500">
<button className="group relative w-full sm:w-auto px-8 py-4 bg-white text-black rounded-full font-medium flex items-center justify-center gap-3 overflow-hidden m3-ease hover:scale-105">
<i className="w-5 h-5" data-lucide="smartphone"></i>
<span>Download for Android</span>
</button>
<button className="group w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white rounded-full font-medium flex items-center justify-center gap-3 hover:bg-neutral-800 m3-ease hover:border-neutral-700">
<i className="w-5 h-5" data-lucide="apple"></i>
<span>Download for iOS</span>
</button>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-white/5 mt-16 reveal delay-700">
<div>
<div className="text-3xl font-medium tracking-tight text-white">120K+</div>
<div className="text-sm text-neutral-500 mt-1">Total Downloads</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white">99.9%</div>
<div className="text-sm text-neutral-500 mt-1">Uptime</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white">4.9</div>
<div className="text-sm text-neutral-500 mt-1">User Rating</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tight text-white">2</div>
<div className="text-sm text-neutral-500 mt-1">Passionate Devs</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-4 pb-32">
<div className="max-w-5xl mx-auto">

<div className="relative mx-auto w-[300px] md:w-[350px] aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-neutral-800 shadow-2xl reveal overflow-hidden ring-1 ring-white/10">

<div className="absolute top-0 w-full h-8 z-20 flex justify-between items-center px-6 pt-2">
<div className="text-[10px] font-medium text-white">10:12</div>
<div className="flex gap-1">
<div className="w-3 h-3 rounded-full border border-white/40"></div>
<div className="w-3 h-3 bg-white/40 rounded-full"></div>
</div>
</div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

<img alt="Uriel App Interface" className="w-full h-full object-cover opacity-90" src="https://i.imgur.com/r7Z6K4y.jpeg"/>

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none rounded-[2.5rem] z-30"></div>
</div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-indigo-500/20 blur-[100px] -z-10 rounded-full"></div>
</div>
</section>

<section className="relative z-10 px-6 py-24 bg-neutral-950/50" id="features">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4">Crafted for obsession.</h2>
<p className="text-xl text-neutral-400 font-light">Features that make streaming feel like magic.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/80 m3-ease reveal">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 m3-ease">
<i className="w-6 h-6" data-lucide="wifi-off"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Offline Library</h3>
<p className="text-neutral-400 font-light leading-relaxed">Download your favorite episodes locally. Watch smoothly even when you're disconnected from the world.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/80 m3-ease reveal delay-100">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 m3-ease">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Backup &amp; Restore</h3>
<p className="text-neutral-400 font-light leading-relaxed">Switching phones? No problem. Export your watch history and preferences securely to the cloud.</p>
</div>

<div className="group p-8 rounded-[2rem] bg-neutral-900/40 border border-white/5 hover:bg-neutral-900/80 m3-ease reveal delay-200">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white group-hover:scale-110 m3-ease">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Instant Updates</h3>
<p className="text-neutral-400 font-light leading-relaxed">Get new episodes moments after they air in Japan. The fastest scraper engine in the game.</p>
</div>

<div className="md:col-span-2 lg:col-span-3 p-10 rounded-[2.5rem] bg-neutral-900 border border-white/5 relative overflow-hidden group reveal delay-300">
<div className="relative z-10 max-w-2xl">
<h3 className="text-2xl md:text-3xl font-medium text-white mb-4">Material 3 Expressive UI</h3>
<p className="text-lg text-neutral-400 font-light mb-8">
                            A speechless interface designed with the latest Material You guidelines. Monochrome palettes, pill-shaped interactions, and fluid animations that feel alive under your thumb.
                        </p>
<div className="flex gap-4">
<div className="h-2 w-24 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-white"></div>
</div>
<div className="h-2 w-16 bg-neutral-800 rounded-full"></div>
</div>
</div>
<div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/5 to-transparent"></div>
<i className="absolute -right-6 -bottom-6 w-64 h-64 text-white/5 group-hover:text-white/10 m3-ease transform group-hover:rotate-12" data-lucide="palette"></i>
</div>
</div>
</div>
</section>

<section className="relative z-10 px-6 py-24" id="developers">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-center reveal">The Architects</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="p-8 rounded-[2.5rem] bg-neutral-900 border border-white/5 flex flex-col gap-6 hover:border-white/20 m3-ease reveal" id="dev-ryan">
<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden ring-2 ring-white/10 shrink-0">
<img alt="RyanYuuki" className="w-full h-full object-cover opacity-0 transition-opacity duration-500" id="ryan-avatar" src=""/>
</div>
<div>
<h3 className="text-2xl font-medium text-white" id="ryan-name">RyanYuuki</h3>
<a className="text-sm text-neutral-500 hover:text-white flex items-center gap-1 transition-colors" href="https://github.com/RyanYuuki" target="_blank">
                                @RyanYuuki <i className="w-3 h-3" data-lucide="external-link"></i>
</a>
</div>
</div>
<p className="text-neutral-400 font-light italic" id="ryan-bio">Fetching bio...</p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-medium">Top Contribution</div>
<a className="group/repo block bg-black rounded-2xl p-4 border border-neutral-800 hover:border-neutral-600 transition-colors" href="#" id="ryan-repo-link" target="_blank">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-white group-hover/repo:underline" id="ryan-repo-name">Loading...</span>
<div className="flex items-center gap-1 text-xs text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span id="ryan-repo-stars">-</span>
</div>
</div>
<p className="text-sm text-neutral-500 line-clamp-1" id="ryan-repo-desc">...</p>
</a>
</div>
</div>

<div className="p-8 rounded-[2.5rem] bg-neutral-900 border border-white/5 flex flex-col gap-6 hover:border-white/20 m3-ease reveal delay-100" id="dev-rey">
<div className="flex items-center gap-5">
<div className="w-20 h-20 rounded-full bg-neutral-800 overflow-hidden ring-2 ring-white/10 shrink-0">
<img alt="ReyYuuki" className="w-full h-full object-cover opacity-0 transition-opacity duration-500" id="rey-avatar" src=""/>
</div>
<div>
<h3 className="text-2xl font-medium text-white" id="rey-name">ReyYuuki</h3>
<a className="text-sm text-neutral-500 hover:text-white flex items-center gap-1 transition-colors" href="https://github.com/ReyYuuki" target="_blank">
                                @ReyYuuki <i className="w-3 h-3" data-lucide="external-link"></i>
</a>
</div>
</div>
<p className="text-neutral-400 font-light italic" id="rey-bio">Fetching bio...</p>
<div className="mt-auto pt-6 border-t border-white/5">
<div className="text-xs uppercase tracking-wider text-neutral-500 mb-3 font-medium">Top Contribution</div>
<a className="group/repo block bg-black rounded-2xl p-4 border border-neutral-800 hover:border-neutral-600 transition-colors" href="#" id="rey-repo-link" target="_blank">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-white group-hover/repo:underline" id="rey-repo-name">Loading...</span>
<div className="flex items-center gap-1 text-xs text-yellow-500">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<span id="rey-repo-stars">-</span>
</div>
</div>
<p className="text-sm text-neutral-500 line-clamp-1" id="rey-repo-desc">...</p>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 pt-20 pb-10 px-6 bg-black border-t border-white/5" id="community">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-3xl font-medium text-white mb-8 reveal">Join the Community</h2>
<div className="flex flex-wrap justify-center gap-4 mb-16 reveal delay-100">
<a className="px-6 py-3 bg-[#5865F2] hover:bg-[#4752c4] text-white rounded-full font-medium flex items-center gap-2 m3-ease" href="#">
<i className="w-5 h-5" data-lucide="message-circle"></i>
                    Discord
                </a>
<a className="px-6 py-3 bg-[#229ED9] hover:bg-[#1d8dbf] text-white rounded-full font-medium flex items-center gap-2 m3-ease" href="#">
<i className="w-5 h-5" data-lucide="send"></i>
                    Telegram
                </a>
<a className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full font-medium flex items-center gap-2 m3-ease" href="#">
<i className="w-5 h-5" data-lucide="github"></i>
                    GitHub
                </a>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-neutral-500 reveal delay-200">
<p>© 2024 Uriel App. Not open source.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</section>



    </>
  );
}
