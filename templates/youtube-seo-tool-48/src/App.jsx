import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // DOM Elements
        const keywordInput = document.getElementById('keywordInput');
        const clearBtn = document.getElementById('clearBtn');
        const generateBtn = document.getElementById('generateBtn');
        const resultsPanel = document.getElementById('resultsPanel');
        const tagContainer = document.getElementById('tagContainer');
        const hashtagOutput = document.getElementById('hashtagOutput');
        const tagCounter = document.getElementById('tagCounter');
        const featuresGrid = document.getElementById('featuresGrid');
        
        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        // Toggles & Selects
        const emojiToggle = document.getElementById('emojiToggle');
        const shortsToggle = document.getElementById('shortsToggle');
        const langSelect = document.getElementById('langSelect');

        // Buttons
        const copyTagsBtn = document.getElementById('copyTagsBtn');
        const copyAllBtn = document.getElementById('copyAllBtn');

        // Data Source
        const suffixes = [
            "tutorial", "review", "guide", "tips", "tricks", "gameplay", 
            "2024", "explained", "best settings", "secrets", "vs", "comparison",
            "for beginners", "hack", "update", "news", "walkthrough", "analysis"
        ];
        
        const shortsKeywords = ["#Shorts", "#Youtubeshorts", "#Viral", "#Trending", "#Fyp", "vertical video"];
        const emojis = ["🔥", "🚀", "⚡", "😱", "✅", "👀", "💎", "💯", "🎮", "🤯"];
        
        let generatedTags = [];
        let generatedHashtags = [];

        // Mobile Menu Logic
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-[-10px]');
            document.body.classList.add('menu-open');
        });

        window.closeMenu = function() {
            mobileMenu.classList.add('pointer-events-none', 'opacity-0', 'translate-y-[-10px]');
            document.body.classList.remove('menu-open');
        }

        // Search Input Logic
        keywordInput.addEventListener('input', (e) => {
            if(e.target.value.length > 0) {
                clearBtn.classList.remove('hidden');
            } else {
                clearBtn.classList.add('hidden');
            }
        });

        clearBtn.addEventListener('click', () => {
            keywordInput.value = '';
            clearBtn.classList.add('hidden');
            keywordInput.focus();
            
            // Optional: Reset view if cleared
            if(!resultsPanel.classList.contains('hidden')) {
                resultsPanel.classList.add('hidden');
                featuresGrid.style.display = 'grid';
            }
        });

        // Main Generator Function
        function generate() {
            const query = keywordInput.value.trim();
            if (!query) {
                keywordInput.focus();
                const container = keywordInput.parentElement;
                container.style.borderColor = "rgba(239, 68, 68, 0.5)";
                container.style.boxShadow = "0 0 20px rgba(239,68,68,0.2)";
                setTimeout(() => {
                    container.style.borderColor = "";
                    container.style.boxShadow = "";
                }, 500);
                return;
            }

            // Hide features, show results
            featuresGrid.style.display = 'none';
            resultsPanel.classList.remove('hidden');
            setTimeout(() => {
                resultsPanel.classList.remove('opacity-0', 'translate-y-4');
            }, 10);

            // Clear previous
            tagContainer.innerHTML = '';
            generatedTags = [];
            generatedHashtags = [];

            // 1. Add Exact Match
            addTag(query, true);

            // 2. Generate Variations
            const count = 12 + Math.floor(Math.random() * 5); // 12-17 tags
            
            // Randomize suffixes
            const mixedSuffixes = [...suffixes].sort(() => 0.5 - Math.random());
            
            for(let i=0; i<count; i++) {
                if (i >= mixedSuffixes.length) break;
                
                let tagText = `${query} ${mixedSuffixes[i]}`;
                
                if(langSelect.value !== 'en') {
                    if(Math.random() > 0.5) tagText = `${langSelect.value.toUpperCase()} ${tagText}`; 
                }

                if(emojiToggle.checked && Math.random() > 0.65) {
                    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
                    tagText += ` ${randomEmoji}`;
                }

                addTag(tagText);
            }

            if(shortsToggle.checked) {
                shortsKeywords.forEach(st => addTag(st));
            }

            updateStats();
            generateHashtags(query);
            
            if(window.innerWidth < 768) {
                resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function addTag(text, isPrimary = false) {
            generatedTags.push(text);
            
            const tagEl = document.createElement('div');
            const baseClass = "group flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium border transition-all duration-200 cursor-default select-none animate-slide-up";
            const primaryClass = isPrimary ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.4)]" : "bg-[#111] text-zinc-300 border-zinc-800 hover:border-zinc-600 hover:text-white hover:bg-[#1a1a1a]";
            
            tagEl.className = `${baseClass} ${primaryClass}`;
            
            tagEl.innerHTML = `
                <span>${text}</span>
                <button onclick="removeTag(this)" class="opacity-0 group-hover:opacity-100 text-zinc-500 hover:text-red-400 transition-all focus:opacity-100">
                    <iconify-icon icon="solar:close-circle-linear" width="14" stroke-width="1.5"></iconify-icon>
                </button>
            `;
            
            tagContainer.appendChild(tagEl);
        }

        window.removeTag = function(btn) {
            const el = btn.parentElement;
            const text = el.querySelector('span').innerText;
            generatedTags = generatedTags.filter(t => t !== text);
            el.style.opacity = '0';
            el.style.transform = 'scale(0.9)';
            setTimeout(() => {
                el.remove();
                updateStats();
                generateHashtags(keywordInput.value || "video");
            }, 200);
        }

        function generateHashtags(query) {
            const cleanQuery = query.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
            let hashtags = [`#${cleanQuery}`];
            
            const safetyTags = generatedTags.filter(t => !t.startsWith('#')).slice(0, 10);
            safetyTags.forEach(t => {
                const clean = t.replace(/[^\w\s]/gi, '').replace(/\s+/g, '');
                if(clean.length > 3) hashtags.push(`#${clean}`);
            });
            
            if(shortsToggle.checked) {
               hashtags.push("#Shorts", "#Viral");
            }

            generatedHashtags = [...new Set(hashtags)];
            hashtagOutput.innerText = generatedHashtags.join(' ');
        }

        function updateStats() {
            tagCounter.innerText = generatedTags.length;
        }

        function showToast() {
            const t = document.getElementById('toast');
            t.classList.remove('-translate-y-32', 'opacity-0');
            t.classList.add('translate-y-0', 'opacity-100');
            setTimeout(() => {
                t.classList.remove('translate-y-0', 'opacity-100');
                t.classList.add('-translate-y-32', 'opacity-0');
            }, 2500);
        }

        function copyText(str) {
            if(!str) return;
            navigator.clipboard.writeText(str).then(showToast).catch(err => {
                const textArea = document.createElement("textarea");
                textArea.value = str;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand("copy");
                document.body.removeChild(textArea);
                showToast();
            });
        }

        window.copyElement = function(id) {
            copyText(document.getElementById(id).innerText);
        }

        generateBtn.addEventListener('click', generate);
        keywordInput.addEventListener('keydown', (e) => {
            if(e.key === 'Enter') generate();
        });

        copyTagsBtn.addEventListener('click', () => {
            copyText(generatedTags.join(', '));
        });

        copyAllBtn.addEventListener('click', () => {
            const allContent = `TAGS:\n${generatedTags.join(', ')}\n\nHASHTAGS:\n${generatedHashtags.join(' ')}`;
            copyText(allContent);
        });

        document.addEventListener('keydown', (e) => {
            if((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                keywordInput.focus();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-fade-overlay"></div>
<div className="ambient-glow"></div>

<nav className="w-full border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group select-none" href="#">
<div className="relative flex items-center justify-center w-8 h-8 bg-white text-black rounded-lg shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform group-hover:scale-105">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-white">TagGen<span className="text-zinc-500 font-normal">Pro</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Contact</a>
</div>

<button className="md:hidden text-zinc-400 hover:text-white p-2" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 pt-24 px-6 pointer-events-none opacity-0 translate-y-[-10px] md:hidden flex flex-col items-center gap-8" id="mobileMenu">
<a className="text-lg font-medium text-zinc-300 hover:text-white w-full text-center py-4 border-b border-white/5" href="#">Home</a>
<a className="text-lg font-medium text-zinc-300 hover:text-white w-full text-center py-4 border-b border-white/5" href="#">About</a>
<a className="text-lg font-medium text-zinc-300 hover:text-white w-full text-center py-4 border-b border-white/5" href="#">Contact</a>
<a className="text-lg font-medium text-zinc-300 hover:text-white w-full text-center py-4 border-b border-white/5" href="#">Privacy Policy</a>
<button className="absolute top-5 right-6 text-zinc-400 hover:text-white p-2" onclick="closeMenu()">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</div>

<main className="flex-1 flex flex-col items-center pt-24 px-4 pb-24 relative w-full max-w-5xl mx-auto z-10">

<div className="text-center space-y-6 mb-12 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-medium text-zinc-300 backdrop-blur-sm shadow-sm hover:bg-white/[0.05] transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                V2.0 NOW LIVE
            </div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-white leading-[1.1]">
                SEO Tags that <br/>
<span className="text-chrome">actually rank.</span>
</h1>
<p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto font-normal leading-relaxed text-balance">
                Generate high-volume keywords, optimize for Shorts, and dominate the algorithm with AI-driven metadata. No account required.
            </p>
</div>

<div className="w-full max-w-3xl relative animate-slide-up" style={{animationDelay: '0.1s'}}>

<div className="glass-input rounded-2xl p-2 flex items-center transition-all duration-300 group relative z-20">
<div className="pl-4 text-zinc-500 group-focus-within:text-white transition-colors flex items-center">
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<input autocomplete="off" className="flex-1 bg-transparent border-none text-white text-base px-4 py-4 focus:outline-none placeholder-zinc-600 w-full font-light tracking-wide" id="keywordInput" placeholder="Enter video title (e.g., 'iPhone 15 Review')" type="text"/>

<button className="hidden text-zinc-500 hover:text-white px-2 transition-colors mr-2" id="clearBtn">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<div className="hidden sm:flex items-center gap-2 pr-3 border-r border-white/10 mr-3">
<div className="bg-white/10 border border-white/5 rounded px-2 py-1 text-[10px] text-zinc-400 font-mono">⌘K</div>
</div>
<button className="bg-white hover:bg-zinc-200 active:scale-95 text-black text-sm font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]" id="generateBtn">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Generate
                </button>
</div>

<div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8 bg-black/40 p-4 rounded-xl border border-white/5 backdrop-blur-sm">

<div className="relative group">
<select className="appearance-none bg-black border border-white/15 hover:border-white/30 rounded-lg pl-9 pr-8 py-2 text-xs font-medium text-zinc-300 focus:outline-none transition-all cursor-pointer ring-0 focus:ring-1 focus:ring-white/20 h-9" id="langSelect">
<option value="en">English (Global)</option>
<option value="es">Spanish</option>
<option value="pt">Portuguese</option>
<option value="hi">Hindi</option>
<option value="fr">French</option>
<option value="de">German</option>
</select>
<span className="absolute left-3 top-2.5 text-zinc-500 pointer-events-none flex items-center">
<iconify-icon icon="solar:globe-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
<span className="absolute right-2.5 top-2.5 text-zinc-500 pointer-events-none flex items-center">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="14"></iconify-icon>
</span>
</div>
<div className="h-4 w-px bg-white/10 hidden sm:block"></div>

<label className="flex items-center gap-3 cursor-pointer group select-none">
<div className="relative w-9 h-5 rounded-full bg-zinc-900 border border-zinc-700 transition-colors group-hover:border-zinc-500 peer-checked-wrapper">
<input className="sr-only peer" id="emojiToggle" type="checkbox"/>
<div className="absolute left-0.5 top-0.5 bg-zinc-400 w-4 h-4 rounded-full transition-all peer-checked:translate-x-4 peer-checked:bg-white peer-checked:shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                        Emojis
                    </span>
</label>

<label className="flex items-center gap-3 cursor-pointer group select-none">
<div className="relative w-9 h-5 rounded-full bg-zinc-900 border border-zinc-700 transition-colors group-hover:border-zinc-500 peer-checked-wrapper">
<input className="sr-only peer" id="shortsToggle" type="checkbox"/>
<div className="absolute left-0.5 top-0.5 bg-zinc-400 w-4 h-4 rounded-full transition-all peer-checked:translate-x-4 peer-checked:bg-white peer-checked:shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
</div>
<span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors flex items-center gap-1.5">
                        Shorts Mode
                    </span>
</label>
</div>

<div className="mt-10 hidden opacity-0 transition-all duration-500 transform translate-y-4" id="resultsPanel">
<div className="rounded-2xl border border-white/10 bg-[#050505] overflow-hidden shadow-2xl relative group/panel">
<div className="absolute inset-0 bg-white/5 blur-3xl -z-10 opacity-0 group-hover/panel:opacity-100 transition-opacity duration-700"></div>

<div className="px-5 py-3 border-b border-white/10 bg-white/[0.02] flex items-center justify-between flex-wrap gap-3">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 text-xs font-semibold text-white tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                                Generated Tags
                            </div>
<span className="text-[10px] bg-zinc-800 text-zinc-300 font-mono px-2 py-0.5 rounded border border-white/10" id="tagCounter">0</span>
</div>
<div className="flex items-center gap-3 ml-auto">
<button className="text-[11px] font-medium text-zinc-400 hover:text-white px-3 py-1.5 rounded-lg hover:bg-white/10 transition-colors" id="copyTagsBtn">
                                Copy Tags Only
                            </button>
<button className="text-[11px] font-semibold bg-white text-black hover:bg-zinc-200 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-white/10" id="copyAllBtn">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                Copy All
                            </button>
</div>
</div>

<div className="p-6 bg-black">
<div className="flex flex-wrap gap-2.5 min-h-[80px]" id="tagContainer">

</div>
</div>

<div className="border-t border-white/10 bg-zinc-900/30 p-5 backdrop-blur-sm">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:hashtag-linear" strokeWidth="1.5" width="14"></iconify-icon>
                                Optimized Hashtags
                            </h3>
<button className="text-[10px] font-medium text-zinc-500 hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1" onclick="copyElement('hashtagOutput')">
                                Copy Text
                            </button>
</div>
<div className="text-xs text-zinc-400 font-mono bg-[#0A0A0A] p-4 rounded-xl border border-white/5 break-words select-all shadow-inner transition-colors hover:text-zinc-300" id="hashtagOutput">
                            Generate tags to see hashtags...
                        </div>
</div>
</div>
</div>

<div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-5" id="featuresGrid">
<div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group select-none">
<div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">High Volume</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">Prioritizes keywords with high search volume and low competition scoring.</p>
</div>
<div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group select-none">
<div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:global-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Multi-Language</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">Automatically detects language context for maximum global reach.</p>
</div>
<div className="p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 group select-none">
<div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Shorts Ready</h3>
<p className="text-xs text-zinc-500 leading-relaxed font-light">Includes viral Shorts metadata like #Shorts and #FYP automatically.</p>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/[0.08] bg-black/40 backdrop-blur-sm mt-auto">
<div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

<div className="col-span-2 md:col-span-1 space-y-4">
<div className="flex items-center gap-2">
<div className="flex items-center justify-center w-6 h-6 bg-white text-black rounded shadow">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-semibold text-sm text-white">TagGen<span className="text-zinc-500 font-normal">Pro</span></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">
                        The ultimate AI-powered SEO tool for content creators. Optimize your reach in seconds.
                    </p>
<div className="flex gap-4 pt-2">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-twitter" width="16"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-github" width="16"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brands-youtube" width="16"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-white mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Generator</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">API Access</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Partners</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-white mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs text-zinc-500 hover:text-white transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-zinc-600">© 2024 TagGen Pro Inc. All rights reserved.</p>
<div className="flex items-center gap-1.5 text-[10px] text-zinc-600">
<span className="w-2 h-2 rounded-full bg-emerald-500/20 border border-emerald-500/50"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>

<div className="fixed top-20 left-1/2 -translate-x-1/2 -translate-y-32 opacity-0 transition-all duration-500 z-[100] pointer-events-none" id="toast">
<div className="bg-white/90 backdrop-blur text-black pl-4 pr-6 py-2.5 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-3 border border-zinc-200">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" strokeWidth="2" width="18"></iconify-icon>
<span className="text-xs font-semibold tracking-wide">Copied to clipboard</span>
</div>
</div>


    </>
  );
}
