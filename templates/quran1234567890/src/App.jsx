import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // DOM Elements
        const grid = document.getElementById('surahs-grid');
        const sidebarList = document.getElementById('sidebar-surahs');
        const search = document.getElementById('search-input');
        const countText = document.getElementById('surah-count');
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('overlay');
        
        // Audio Elements
        const audio = new Audio();
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const currentSurahName = document.getElementById('current-surah-name');
        const currentSurahDesc = document.getElementById('current-surah-desc');
        const progressBar = document.getElementById('progress-bar');
        const progressContainer = document.getElementById('progress-container');
        const timeCurrent = document.getElementById('time-current');
        const timeTotal = document.getElementById('time-total');

        let surahsData = [];
        let currentPlayingNumber = null;

        // 1. Fetch Surah Data from AlQuran Cloud API
        async function fetchSurahs() {
            try {
                const res = await fetch('https://api.alquran.cloud/v1/surah');
                const data = await res.json();
                surahsData = data.data;
                renderSurahs(surahsData);
            } catch (err) {
                grid.innerHTML = '<div class="col-span-full text-center py-10 text-red-500 text-sm">Failed to load data. Check network connection.</div>';
                sidebarList.innerHTML = '';
            }
        }

        // 2. Render Cards and Sidebar List
        function renderSurahs(surahs) {
            countText.textContent = `${surahs.length} Surahs`;

            // Main Grid
            grid.innerHTML = surahs.map(surah => {
                const isPlaying = currentPlayingNumber === surah.number;
                return `
                <button onclick="playSurah(${surah.number}, '${surah.englishName}', '${surah.englishNameTranslation}')" class="w-full text-left group relative flex items-center justify-between p-4 rounded-2xl border ${isPlaying ? 'border-emerald-500/50 shadow-[0_2px_15px_-3px_rgba(16,185,129,0.1)]' : 'border-zinc-200/60 hover:border-emerald-500/30 hover:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]'} bg-white transition-all">
                    <div class="flex items-center gap-4">
                        <div class="w-11 h-11 rounded-xl ${isPlaying ? 'bg-emerald-50 text-emerald-600 border-emerald-200/50' : 'bg-zinc-50 text-zinc-600 border-zinc-200/60 group-hover:bg-emerald-50 group-hover:text-emerald-600 group-hover:border-emerald-200/50'} border flex items-center justify-center text-sm font-medium transition-colors">
                            ${isPlaying && !audio.paused ? '<iconify-icon icon="solar:chart-square-linear" class="animate-pulse"></iconify-icon>' : surah.number}
                        </div>
                        <div class="flex flex-col">
                            <span class="text-base font-semibold tracking-tight transition-colors ${isPlaying ? 'text-emerald-700' : 'text-zinc-900 group-hover:text-emerald-700'}">${surah.englishName}</span>
                            <span class="text-xs text-zinc-500 mt-0.5">${surah.englishNameTranslation}</span>
                        </div>
                    </div>
                    <div class="flex flex-col items-end gap-1.5">
                        <span class="text-2xl opacity-90 transition-colors ${isPlaying ? 'text-emerald-700' : 'text-zinc-900 group-hover:text-emerald-700'}" style="font-family: 'Amiri', serif;">${surah.name.replace('سُورَةُ ', '')}</span>
                        <span class="text-xs text-zinc-400 font-medium">${surah.revelationType === 'Meccan' ? 'Makkah' : 'Madinah'} • ${surah.numberOfAyahs} Ayahs</span>
                    </div>
                </button>
            `}).join('');

            // Sidebar List
            sidebarList.innerHTML = surahs.map(surah => {
                const isPlaying = currentPlayingNumber === surah.number;
                return `
                <button onclick="playSurah(${surah.number}, '${surah.englishName}', '${surah.englishNameTranslation}')" class="w-full text-left px-3 py-2.5 rounded-lg ${isPlaying ? 'bg-zinc-100/80 text-zinc-900' : 'hover:bg-zinc-50 text-zinc-600 hover:text-zinc-900'} transition-colors flex items-center justify-between group">
                    <div class="flex items-center gap-3 truncate pr-2">
                        <span class="min-w-[24px] h-6 rounded flex items-center justify-center ${isPlaying ? 'bg-white border-zinc-200 shadow-sm text-zinc-500' : 'bg-zinc-50 border-transparent text-zinc-400 group-hover:bg-white group-hover:border-zinc-200 group-hover:text-zinc-600'} border text-xs font-medium transition-all">
                            ${isPlaying && !audio.paused ? '<iconify-icon icon="solar:play-linear"></iconify-icon>' : surah.number}
                        </span>
                        <div class="truncate">
                            <div class="text-sm font-medium ${isPlaying ? 'text-zinc-900' : 'group-hover:text-zinc-900'} transition-colors truncate">${surah.englishName}</div>
                            <div class="text-xs ${isPlaying ? 'text-zinc-500' : 'text-zinc-400 group-hover:text-zinc-500'} transition-colors truncate">${surah.englishNameTranslation}</div>
                        </div>
                    </div>
                    <div class="text-lg ${isPlaying ? 'text-emerald-700 opacity-80' : 'text-zinc-400 group-hover:text-zinc-600'} transition-colors" style="font-family: 'Amiri', serif;">${surah.name.replace('سُورَةُ ', '')}</div>
                </button>
            `}).join('');
        }

        // 3. Search / Filtering functionality
        search.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const filtered = surahsData.filter(s =>
                s.englishName.toLowerCase().includes(term) ||
                s.englishNameTranslation.toLowerCase().includes(term) ||
                s.name.includes(term)
            );
            renderSurahs(filtered);
        });

        // 4. Audio Playback Logic (Streaming from mp3quran.net)
        function playSurah(number, englishName, translation) {
            if (currentPlayingNumber === number) {
                // Toggle if clicking the already playing Surah
                if (audio.paused) {
                    audio.play();
                    playIcon.setAttribute('icon', 'solar:pause-linear');
                } else {
                    audio.pause();
                    playIcon.setAttribute('icon', 'solar:play-linear');
                }
            } else {
                // Play new Surah
                currentPlayingNumber = number;
                const formattedNumber = String(number).padStart(3, '0');
                audio.src = `https://server8.mp3quran.net/afs/${formattedNumber}.mp3`;
                audio.play();

                currentSurahName.textContent = englishName;
                currentSurahDesc.textContent = translation;
                playIcon.setAttribute('icon', 'solar:pause-linear');
            }
            renderSurahs(surahsData); // Re-render to show active state
        }

        playBtn.addEventListener('click', () => {
            if (!currentPlayingNumber && surahsData.length > 0) {
                playSurah(surahsData[0].number, surahsData[0].englishName, surahsData[0].englishNameTranslation);
                return;
            }
            if (audio.paused) {
                audio.play();
                playIcon.setAttribute('icon', 'solar:pause-linear');
            } else {
                audio.pause();
                playIcon.setAttribute('icon', 'solar:play-linear');
            }
            renderSurahs(surahsData); // Re-render for icon pulse states
        });

        // Skip Next / Prev
        function skip(direction) {
            if(!currentPlayingNumber) return;
            let nextNum = currentPlayingNumber + direction;
            if(nextNum < 1) nextNum = 114;
            if(nextNum > 114) nextNum = 1;
            const targetSurah = surahsData.find(s => s.number === nextNum);
            if(targetSurah) {
                playSurah(targetSurah.number, targetSurah.englishName, targetSurah.englishNameTranslation);
            }
        }
        prevBtn.addEventListener('click', () => skip(-1));
        nextBtn.addEventListener('click', () => skip(1));

        // Audio Progress Update
        audio.addEventListener('timeupdate', () => {
            if(audio.duration) {
                const percent = (audio.currentTime / audio.duration) * 100;
                progressBar.style.width = `${percent}%`;
                timeCurrent.textContent = formatTime(audio.currentTime);
                timeTotal.textContent = formatTime(audio.duration);
            }
        });

        // Audio Finished event
        audio.addEventListener('ended', () => {
            skip(1); // Auto play next surah
        });

        // Scrubbing capability
        progressContainer.addEventListener('click', (e) => {
            if(!audio.duration) return;
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pos * audio.duration;
        });

        function formatTime(seconds) {
            if (isNaN(seconds)) return "0:00";
            const m = Math.floor(seconds / 60);
            const s = Math.floor(seconds % 60);
            return `${m}:${s.toString().padStart(2, '0')}`;
        }

        // 5. Mobile Menu Toggle
        function toggleMenu() {
            sidebar.classList.toggle('-translate-x-full');
            overlay.classList.toggle('hidden');
        }
        mobileBtn.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);

        // Initialize App
        fetchSurahs();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 hidden lg:hidden" id="overlay"></div>

<aside className="w-72 bg-[#FCFCFC] border-r border-zinc-200 flex flex-col flex-shrink-0 h-full fixed lg:static z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300 ease-in-out" id="sidebar">

<div className="h-16 flex items-center px-6 border-b border-zinc-100">
<span className="text-xl font-semibold tracking-tighter text-zinc-900">QRN.</span>
</div>

<div className="p-4 border-b border-zinc-100">
<div className="relative flex items-center group">
<iconify-icon className="absolute left-3 text-zinc-400 group-focus-within:text-emerald-600 transition-colors text-lg" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full bg-zinc-100/50 hover:bg-zinc-100 focus:bg-white border border-transparent focus:border-emerald-500/30 focus:ring-4 focus:ring-emerald-500/10 text-sm rounded-lg pl-9 pr-3 py-2 outline-none transition-all placeholder:text-zinc-500 text-zinc-900" id="search-input" placeholder="Search Surah..." type="text"/>
</div>
</div>

<div className="px-4 pt-4 pb-2 flex gap-4 border-b border-zinc-100 text-sm font-medium">
<button className="text-zinc-900 border-b-2 border-zinc-900 pb-2">Surahs</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors pb-2">Juz</button>
<button className="text-zinc-500 hover:text-zinc-900 transition-colors pb-2">Bookmarks</button>
</div>

<div className="flex-1 overflow-y-auto px-3 py-2 scrollbar-hide space-y-1" id="sidebar-surahs">
<div className="text-center py-4 text-xs text-zinc-400">Loading...</div>
</div>

<div className="p-4 border-t border-zinc-100 flex items-center justify-between">
<button className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
<div className="w-8 h-8 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
                Sign In
            </button>
<button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-lg hover:bg-zinc-100">
<iconify-icon className="text-xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-zinc-50/50 relative">

<header className="h-16 border-b border-zinc-100 flex items-center justify-between px-4 sm:px-8 bg-white/80 backdrop-blur-md sticky top-0 z-30">
<div className="flex items-center gap-4">
<button className="lg:hidden p-2 -ml-2 text-zinc-600 hover:text-zinc-900 rounded-lg hover:bg-zinc-50" id="mobile-menu-btn">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div>
<h1 className="text-xl font-semibold tracking-tight text-zinc-900">All Surahs</h1>
<p className="text-xs text-zinc-500" id="surah-count">114 Surahs</p>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-zinc-200/60 bg-white text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors text-sm font-medium shadow-sm">
<iconify-icon className="text-lg hidden sm:block" icon="solar:sort-from-top-to-bottom-linear" strokeWidth="1.5"></iconify-icon>
<span>Sort: Number</span>
<iconify-icon className="text-lg opacity-50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto w-full px-4 sm:px-8 py-6 lg:py-8 scroll-smooth">
<div className="max-w-7xl mx-auto">

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 pb-24" id="surahs-grid">
<div className="col-span-full flex flex-col items-center justify-center py-20 text-zinc-500 gap-3">
<iconify-icon className="text-2xl animate-spin" icon="solar:spinner-linear"></iconify-icon>
<span className="text-sm">Loading Surahs from API...</span>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-zinc-200/80 px-4 sm:px-8 py-4 flex items-center justify-between z-40 transform translate-y-0 transition-transform">
<div className="flex items-center gap-4 w-1/3">
<div className="w-10 h-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-500 overflow-hidden shadow-sm">
<img alt="Reciter" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div className="hidden sm:block truncate pr-4">
<div className="text-sm font-medium text-zinc-900 truncate" id="current-surah-name">Select a Surah</div>
<div className="text-xs text-zinc-500 truncate" id="current-surah-desc">Mishary Rashid Alafasy</div>
</div>
</div>
<div className="flex flex-col items-center w-1/3 gap-2">
<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors hidden sm:block" id="prev-btn">
<iconify-icon className="text-xl" icon="solar:skip-previous-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center hover:bg-zinc-800 transition-colors shadow-sm" id="play-btn">
<iconify-icon className="text-xl" icon="solar:play-linear" id="play-icon" strokeWidth="1.5"></iconify-icon>
</button>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors hidden sm:block" id="next-btn">
<iconify-icon className="text-xl" icon="solar:skip-next-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center justify-end w-1/3 gap-3">
<span className="text-xs text-zinc-500 hidden sm:inline w-8 text-right" id="time-current">0:00</span>
<div className="w-24 h-1.5 bg-zinc-100 rounded-full overflow-hidden hidden sm:block relative cursor-pointer group" id="progress-container">
<div className="absolute top-0 left-0 h-full bg-zinc-900 w-0 rounded-full group-hover:bg-emerald-600 transition-colors" id="progress-bar"></div>
</div>
<span className="text-xs text-zinc-500 hidden sm:inline w-8" id="time-total">0:00</span>
<button className="p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-lg ml-2">
<iconify-icon className="text-xl" icon="solar:volume-loud-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</main>



    </>
  );
}
