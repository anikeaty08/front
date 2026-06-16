import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const vibes = {
            motivated: {
                song: "Can't Stop - Red Hot Chili Peppers",
                artist: "Energy Playlist",
                artColor: "bg-orange-600",
                quote: "The only way to do great work is to love what you do.",
                author: "Steve Jobs",
                tip: "Identify your top 3 priorities for today. Ignore everything else.",
                outfit: "Athleisure / Navy",
                outfitDesc: "Clean, functional, ready.",
                mainColor: "#1e3a8a",
                colors: ["#1e3a8a", "#ffffff", "#94a3b8"],
                caption: "Building my empire, one brick at a time. 🧱⚡️ #hustle"
            },
            chill: {
                song: "Affection - Jinsang",
                artist: "Lofi Beats",
                artColor: "bg-teal-700",
                quote: "Quiet the mind, and the soul will speak.",
                author: "Ma Jaya Sati",
                tip: "Make a warm drink. Sit by a window. Do absolutely nothing.",
                outfit: "Oversized Hoodie",
                outfitDesc: "Cozy, soft, neutral tones.",
                mainColor: "#d6d3d1",
                colors: ["#d6d3d1", "#78716c", "#57534e"],
                caption: "Sunday kind of love on a Tuesday. ☁️☕️ #vibes"
            },
            sad: {
                song: "Liability - Lorde",
                artist: "Healing Mix",
                artColor: "bg-blue-900",
                quote: "You are growing through what you go through.",
                author: "Unknown",
                tip: "Journaling heals. Write down exactly what hurts.",
                outfit: "Grey Sweatpants",
                outfitDesc: "Comfort first. Wrap up.",
                mainColor: "#64748b",
                colors: ["#64748b", "#94a3b8", "#cbd5e1"],
                caption: "Recharge mode: ON. 🌧️🤍 #healing"
            },
            overthinking: {
                song: "Weightless - Marconi Union",
                artist: "Ambient Focus",
                artColor: "bg-purple-900",
                quote: "Worrying takes away today's peace.",
                author: "Randy Armstrong",
                tip: "Brain dump: Write every worry on paper to lose its power.",
                outfit: "Structured Coat",
                outfitDesc: "Protective layers. Dark.",
                mainColor: "#3b0764",
                colors: ["#3b0764", "#000000", "#581c87"],
                caption: "Head in the clouds, feet on the ground. 🌫️🧠 #thoughts"
            },
            stressed: {
                song: "Watermelon Sugar",
                artist: "Good Vibes Only",
                artColor: "bg-rose-600",
                quote: "Breathe. It’s just a bad day, not a bad life.",
                author: "Johnny Depp",
                tip: "Box Breathing: Inhale 4s, Hold 4s, Exhale 4s.",
                outfit: "Soft Pastel Green",
                outfitDesc: "Calming colors.",
                mainColor: "#86efac",
                colors: ["#86efac", "#22c55e", "#14532d"],
                caption: "Inhale peace, exhale stress. 🌿✨ #breathe"
            }
        };

        const elements = {
            dashboard: document.getElementById('dashboard'),
            songTitle: document.getElementById('song-title'),
            songArtist: document.getElementById('song-artist'),
            albumArt: document.getElementById('album-art'),
            quoteText: document.getElementById('quote-text'),
            quoteAuthor: document.getElementById('quote-author'),
            mindsetTip: document.getElementById('mindset-tip'),
            outfitName: document.getElementById('outfit-name'),
            outfitDesc: document.getElementById('outfit-desc'),
            colorCircle: document.getElementById('color-circle'),
            socialCaption: document.getElementById('social-caption'),
            colorBars: [
                document.getElementById('color-bar-1'),
                document.getElementById('color-bar-2'),
                document.getElementById('color-bar-3')
            ]
        };

        function setMood(moodKey, btnElement) {
            const data = vibes[moodKey];
            if (!data) return;

            // Update Active State
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
            if(btnElement) btnElement.classList.add('active');

            // Animation Reset
            elements.dashboard.style.opacity = '0';
            elements.dashboard.style.transform = 'translateY(8px)';

            setTimeout(() => {
                elements.songTitle.textContent = data.song;
                elements.songArtist.textContent = data.artist;
                elements.albumArt.className = `w-14 h-14 rounded bg-cover bg-center shadow-lg border border-white/5 flex-shrink-0 relative overflow-hidden group cursor-pointer ${data.artColor}`;
                elements.quoteText.textContent = `"${data.quote}"`;
                elements.quoteAuthor.textContent = data.author;
                elements.mindsetTip.textContent = data.tip;
                elements.outfitName.textContent = data.outfit;
                elements.outfitDesc.textContent = data.outfitDesc;
                elements.colorCircle.style.backgroundColor = data.mainColor;
                elements.colorBars.forEach((bar, i) => bar.style.backgroundColor = data.colors[i]);
                elements.socialCaption.textContent = data.caption;

                // Fade In
                elements.dashboard.style.opacity = '1';
                elements.dashboard.style.transform = 'translateY(0)';
            }, 250);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="12"></span>
</div>
<span className="text-sm font-medium tracking-tight text-white">VibeAI</span>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium text-neutral-500 hover:text-white transition-colors">History</button>
<div className="w-8 h-8 rounded-full bg-neutral-800/50 border border-white/10 flex items-center justify-center cursor-pointer hover:bg-neutral-700 transition-colors">
<span className="iconify text-neutral-400" data-icon="lucide:user" data-width="14"></span>
</div>
</div>
</div>
</nav>

<main className="flex-grow w-full max-w-3xl mx-auto px-6 py-12 flex flex-col gap-10">

<header className="text-center space-y-4 animate-[fadeIn_0.6s_ease-out]">
<h1 className="text-4xl sm:text-5xl font-medium tracking-tight text-white">
                How are you <span className="text-neutral-600">feeling?</span>
</h1>
<p className="text-neutral-500 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                Select your current mood to generate your personalized digital environment.
            </p>
</header>

<div className="flex flex-wrap justify-center gap-2.5" id="mood-selector">
<button className="mood-btn active group relative px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onclick="setMood('motivated', this)">
<div className="flex items-center gap-2">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="14"></span>
<span className="text-xs font-medium text-neutral-200">Motivated</span>
</div>
</button>
<button className="mood-btn group relative px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onclick="setMood('chill', this)">
<div className="flex items-center gap-2">
<span className="iconify text-teal-400" data-icon="lucide:coffee" data-width="14"></span>
<span className="text-xs font-medium text-neutral-200">Chill</span>
</div>
</button>
<button className="mood-btn group relative px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onclick="setMood('sad', this)">
<div className="flex items-center gap-2">
<span className="iconify text-blue-400" data-icon="lucide:cloud-rain" data-width="14"></span>
<span className="text-xs font-medium text-neutral-200">Sad</span>
</div>
</button>
<button className="mood-btn group relative px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onclick="setMood('overthinking', this)">
<div className="flex items-center gap-2">
<span className="iconify text-purple-400" data-icon="lucide:brain-circuit" data-width="14"></span>
<span className="text-xs font-medium text-neutral-200">Overthinking</span>
</div>
</button>
<button className="mood-btn group relative px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300" onclick="setMood('stressed', this)">
<div className="flex items-center gap-2">
<span className="iconify text-rose-400" data-icon="lucide:flame" data-width="14"></span>
<span className="text-xs font-medium text-neutral-200">Stressed</span>
</div>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 opacity-100 transition-all duration-500 ease-out" id="dashboard">

<div className="glass-panel rounded-xl col-span-1 md:col-span-2 p-5 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none opacity-50"></div>
<div className="flex justify-between items-start mb-4">
<div className="flex items-center gap-2 text-neutral-500">
<span className="iconify" data-icon="lucide:headphones" data-width="14"></span>
<span className="text-[10px] font-semibold uppercase tracking-wider">Audio</span>
</div>
<div className="flex gap-1 items-end h-3">
<span className="w-0.5 h-full bg-green-500 rounded-full animate-[bounce_1s_infinite]"></span>
<span className="w-0.5 h-2/3 bg-green-500 rounded-full animate-[bounce_1.2s_infinite]"></span>
<span className="w-0.5 h-full bg-green-500 rounded-full animate-[bounce_0.8s_infinite]"></span>
</div>
</div>
<div className="flex items-center gap-4 z-10">
<div className="w-14 h-14 rounded bg-neutral-800 bg-cover bg-center shadow-lg border border-white/5 flex-shrink-0 relative overflow-hidden group cursor-pointer" id="album-art">
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
<span className="iconify opacity-0 group-hover:opacity-100 text-white transition-opacity transform scale-90 group-hover:scale-100" data-icon="lucide:play" data-width="20"></span>
</div>
</div>
<div className="flex-1 min-w-0">
<h3 className="text-sm font-medium text-white truncate tracking-tight" id="song-title">Can't Stop - Red Hot Chili Peppers</h3>
<p className="text-xs text-neutral-500 truncate mt-0.5" id="song-artist">Energy Playlist</p>
</div>
</div>
<div className="mt-5 flex items-center gap-3">
<span className="text-[10px] text-neutral-600 font-mono">0:42</span>
<div className="h-1 flex-1 bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-neutral-400 w-1/3 rounded-full relative"></div>
</div>
<span className="text-[10px] text-neutral-600 font-mono">3:18</span>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between relative overflow-hidden">
<span className="iconify text-white/5 absolute -top-4 -right-4 rotate-12" data-icon="lucide:quote" data-width="100"></span>
<div className="flex-grow flex items-center">
<p className="text-base leading-snug font-medium text-neutral-200 tracking-tight z-10" id="quote-text">
                        "The only way to do great work is to love what you do."
                    </p>
</div>
<div className="mt-4 flex items-center gap-2">
<div className="h-px w-4 bg-white/20"></div>
<span className="text-[10px] text-neutral-500 font-medium uppercase tracking-wider" id="quote-author">Steve Jobs</span>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between">
<div className="flex items-center gap-2 text-neutral-500 mb-2">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="14"></span>
<span className="text-[10px] font-semibold uppercase tracking-wider">Action</span>
</div>
<p className="text-xs text-neutral-300 leading-relaxed mb-4" id="mindset-tip">
                    Identify your top 3 priorities for today. Ignore everything else until they are done.
                </p>
<button className="w-full text-[10px] font-medium bg-white/10 hover:bg-white/15 text-white py-2 rounded border border-white/5 transition-colors flex items-center justify-center gap-1.5">
                    Start Timer
                </button>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col">
<div className="flex items-center gap-2 text-neutral-500 mb-4">
<span className="iconify" data-icon="lucide:palette" data-width="14"></span>
<span className="text-[10px] font-semibold uppercase tracking-wider">Style</span>
</div>
<div className="flex items-center justify-between mb-3">
<div className="space-y-0.5">
<h4 className="text-xs font-medium text-white" id="outfit-name">Athleisure</h4>
<p className="text-[10px] text-neutral-500" id="outfit-desc">Clean, functional.</p>
</div>
<div className="w-8 h-8 rounded-full bg-blue-900 border border-white/10 shadow-inner" id="color-circle"></div>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden flex">
<div className="h-full w-1/3 bg-blue-900" id="color-bar-1"></div>
<div className="h-full w-1/3 bg-white" id="color-bar-2"></div>
<div className="h-full w-1/3 bg-neutral-400" id="color-bar-3"></div>
</div>
</div>

<div className="glass-panel rounded-xl p-5 flex flex-col justify-between col-span-1 md:col-span-2 lg:col-span-1">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2 text-neutral-500">
<span className="iconify" data-icon="lucide:hash" data-width="14"></span>
<span className="text-[10px] font-semibold uppercase tracking-wider">Caption</span>
</div>
<button className="text-neutral-600 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:copy" data-width="12"></span>
</button>
</div>
<div className="bg-black/30 rounded p-3 border border-white/5 mb-3">
<p className="text-[11px] font-mono text-neutral-400 leading-relaxed" id="social-caption">
                        Building my empire, one brick at a time. 🧱⚡️ #hustle #focus
                    </p>
</div>
<div className="flex gap-2">
<span className="text-[9px] text-neutral-600 border border-white/5 px-2 py-0.5 rounded-full">Story</span>
<span className="text-[9px] text-neutral-600 border border-white/5 px-2 py-0.5 rounded-full">Post</span>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-6 mt-auto">
<div className="max-w-3xl mx-auto px-6 flex justify-between items-center text-neutral-600 text-[10px] uppercase tracking-wider">
<p>VibeAI v2.0</p>
<div className="flex gap-4">
<a className="hover:text-neutral-400 transition-colors" href="#">Legal</a>
<a className="hover:text-neutral-400 transition-colors" href="#">Support</a>
</div>
</div>
</footer>


    </>
  );
}
