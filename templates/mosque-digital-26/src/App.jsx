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



        // --- SETTINGS (Editable) ---
        const settings = {
            bannerImages: [
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad68f658-cf54-4582-86eb-160aef9d2312_1600w.png",
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1213efe6-5a60-4cc9-a71c-a94f4790304c_800w.jpg",
                "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0eb0c78-48db-4723-854f-96e37d7ad33d_800w.jpg"
            ],
            ramadanDate: "2026-02-18",
            
            // Slide 2: Ramadan Box Content
            ramadanVerseText: "O voi che credete! Vi è stato prescritto il digiuno come fu prescritto a coloro che vi hanno preceduto.",
            ramadanVerseSource: "Surah Al-Baqarah 2:183",

            // Slide 3: General Hadith Content
            hadithText: "La purificazione è metà della fede, e la lode spetta ad Allah riempie la bilancia.",
            hadithSource: "Sahih Muslim",
            
            // Audio Playlist
            audioTracks: [
                { title: "Surah Al-Fatiha", url: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3faasy/001.mp3" },
                { title: "Surah Al-Mulk", url: "https://download.quranicaudio.com/quran/mishaari_raashid_al_3faasy/067.mp3" }
            ],

            infoSlideInterval: 5000,
            bannerImageInterval: 10000
        };

        const prayerConfig = {
            fajr: { api: 'Fajr', id: 'api-fajr', offset: 15, name: 'Fajr' },
            dhuhr: { api: 'Dhuhr', id: 'api-dhuhr', offset: 15, name: 'Dhuhr' },
            asr: { api: 'Asr', id: 'api-asr', offset: 0, name: 'Asr' },
            maghrib: { api: 'Maghrib', id: 'api-maghrib', offset: 5, name: 'Maghrib' },
            isha: { api: 'Isha', id: 'api-isha', offset: 15, name: 'Isha' }
        };

        let currentPrayerTimes = null;

        // --- 1. CLOCK ---
        function updateClock() {
            const now = new Date();
            const timeStr = now.toLocaleTimeString('it-IT', { 
                timeZone: 'Europe/Rome', 
                hour: '2-digit', 
                minute: '2-digit' 
            });
            document.getElementById('footer-clock').innerText = timeStr;
            updatePrayerStatus();
        }

        // --- 2. AUDIO PLAYER LOGIC ---
        let currentTrackIndex = 0;
        let isPlaying = false;
        const audioPlayer = document.getElementById('quran-player');
        const playIcon = document.getElementById('play-icon');
        const trackNameEl = document.getElementById('audio-track-name');
        const visualizerContainer = document.getElementById('audio-visualizer');

        function loadTrack(index) {
            if(index >= settings.audioTracks.length) index = 0;
            currentTrackIndex = index;
            audioPlayer.src = settings.audioTracks[currentTrackIndex].url;
            trackNameEl.textContent = settings.audioTracks[currentTrackIndex].title;
        }

        function toggleAudio() {
            if (audioPlayer.paused) {
                audioPlayer.play().then(() => {
                    isPlaying = true;
                    updateAudioUI();
                }).catch(e => console.log("Audio autoplay prevented", e));
            } else {
                audioPlayer.pause();
                isPlaying = false;
                updateAudioUI();
            }
        }

        function nextTrack() {
            let nextIndex = (currentTrackIndex + 1) % settings.audioTracks.length;
            loadTrack(nextIndex);
            if(isPlaying) {
                audioPlayer.play();
            } else {
                audioPlayer.play();
                isPlaying = true;
            }
            updateAudioUI();
        }

        function updateAudioUI() {
            if (isPlaying) {
                playIcon.setAttribute('icon', 'solar:pause-bold');
                visualizerContainer.classList.add('playing');
            } else {
                playIcon.setAttribute('icon', 'solar:play-bold');
                visualizerContainer.classList.remove('playing');
            }
        }

        // Initialize Audio
        loadTrack(0);

        // --- 3. BANNER IMAGE SLIDER ---
        let bannerIndex = 0;
        const bannerContainer = document.getElementById('banner-container');

        function initBanner() {
            bannerContainer.innerHTML = settings.bannerImages.map((src, i) => 
                `<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="banner-slide ${i === 0 ? 'active' : ''}" data-index="${i}">`
            ).join('');
        }

        function rotateBanner() {
            const slides = document.querySelectorAll('.banner-slide');
            slides.forEach(s => s.classList.remove('active'));
            bannerIndex = (bannerIndex + 1) % settings.bannerImages.length;
            slides[bannerIndex].classList.add('active');
        }

        // --- 4. INFO CAROUSEL ---
        let infoSlideIndex = 0;
        const infoSlides = document.querySelectorAll('.fade-slide');
        const indicators = document.querySelectorAll('.indicator');

        function updateInfoContent() {
            // Countdown
            const now = new Date();
            const target = new Date(settings.ramadanDate);
            const diffTime = Math.abs(target - now);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            document.getElementById('ramadan-days').innerText = diffDays;
            
            // Ramadan Verse
            document.getElementById('ramadan-verse-text').innerText = `"${settings.ramadanVerseText}"`;
            document.getElementById('ramadan-verse-source').innerText = settings.ramadanVerseSource;

            // General Hadith
            document.getElementById('hadith-text').innerText = `"${settings.hadithText}"`;
            document.getElementById('hadith-source').innerText = settings.hadithSource;
        }

        function rotateInfoSlider() {
            infoSlides.forEach(s => s.classList.remove('active'));
            indicators.forEach(i => {
                i.classList.remove('bg-white/80');
                i.classList.add('bg-white/20');
            });

            infoSlideIndex = (infoSlideIndex + 1) % infoSlides.length;
            
            infoSlides[infoSlideIndex].classList.add('active');
            indicators[infoSlideIndex].classList.remove('bg-white/20');
            indicators[infoSlideIndex].classList.add('bg-white/80');
        }

        // --- 5. PRAYER API ---
        async function fetchPrayerTimes() {
            try {
                const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Venice&country=Italy&method=2');
                const data = await response.json();
                
                if (data && data.data) {
                    const t = data.data.timings;
                    currentPrayerTimes = t;
                    const h = data.data.date.hijri;

                    Object.keys(prayerConfig).forEach(key => {
                        const time = t[prayerConfig[key].api].split(' ')[0];
                        document.getElementById(prayerConfig[key].id).textContent = time;
                        const [hrs, mins] = time.split(':').map(Number);
                        const dateObj = new Date();
                        dateObj.setHours(hrs, mins + prayerConfig[key].offset);
                        document.getElementById(`iqamah-${key}`).textContent = 
                            dateObj.toLocaleTimeString('it-IT', {hour:'2-digit', minute:'2-digit'});
                    });

                    document.getElementById('api-suhur').textContent = t.Imsak.split(' ')[0];
                    document.getElementById('api-iftar').textContent = t.Maghrib.split(' ')[0];

                    const now = new Date();
                    const itDate = now.toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
                    document.getElementById('current-date').textContent = `${itDate} • ${h.day} ${h.month.en} ${h.year} AH`;

                    updatePrayerStatus();
                }
            } catch (e) {
                console.error("Prayer API Error", e);
            }
        }

        function updatePrayerStatus() {
            if (!currentPrayerTimes) return;
            
            const now = new Date();
            const currMins = now.getHours() * 60 + now.getMinutes();
            
            const getMins = (t) => {
                const [h, m] = t.split(' ')[0].split(':').map(Number);
                return h * 60 + m;
            };

            const times = {
                fajr: getMins(currentPrayerTimes.Fajr),
                dhuhr: getMins(currentPrayerTimes.Dhuhr),
                asr: getMins(currentPrayerTimes.Asr),
                maghrib: getMins(currentPrayerTimes.Maghrib),
                isha: getMins(currentPrayerTimes.Isha)
            };

            // Highlight Active Prayer
            let active = null;
            if (currMins >= times.fajr && currMins < times.dhuhr) active = 'fajr';
            else if (currMins >= times.dhuhr && currMins < times.asr) active = 'dhuhr';
            else if (currMins >= times.asr && currMins < times.maghrib) active = 'asr';
            else if (currMins >= times.maghrib && currMins < times.isha) active = 'maghrib';
            else active = 'isha'; // Default to Isha if after Isha or before Fajr (night loop)

            ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'].forEach(p => {
                const el = document.getElementById(`row-${p}`);
                if (p === active) {
                    el.classList.add('active-prayer');
                    el.classList.remove('opacity-90');
                } else {
                    el.classList.remove('active-prayer');
                    el.classList.add('opacity-90');
                }
            });

            // Countdown Logic
            const prayerOrder = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
            let nextPrayerKey = null;

            for (let key of prayerOrder) {
                if (times[key] > currMins) {
                    nextPrayerKey = key;
                    break;
                }
            }
            if (!nextPrayerKey) nextPrayerKey = 'fajr';

            document.getElementById('next-prayer-name').textContent = prayerConfig[nextPrayerKey].name.toUpperCase();

            let targetMins = times[nextPrayerKey];
            if (targetMins < currMins) targetMins += 24 * 60;

            const diffMinutes = targetMins - currMins;
            const hoursLeft = Math.floor(diffMinutes / 60);
            const minsLeft = diffMinutes % 60;
            const secsLeft = 59 - now.getSeconds();

            const pad = (n) => n.toString().padStart(2, '0');
            document.getElementById('next-prayer-timer').textContent = 
                `-${pad(hoursLeft)}:${pad(minsLeft)}:${pad(secsLeft)}`;
        }

        // --- INITIALIZATION ---
        fetchPrayerTimes();
        updateClock();
        initBanner();
        updateInfoContent();

        // Intervals
        setInterval(updateClock, 1000);
        setInterval(fetchPrayerTimes, 3600000); // 1 hour
        setInterval(rotateBanner, settings.bannerImageInterval);
        setInterval(rotateInfoSlider, settings.infoSlideInterval);

    
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
      

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover opacity-20 blur-2xl scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f459710-7892-47b8-96d0-561bb0c57c61_3840w.png" style={{}}/>
</div>
<div className="bg-center z-10 bg-gradient-to-b from-slate-50/80 via-slate-50/70 to-slate-100/90 mix-blend-overlay bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1213efe6-5a60-4cc9-a71c-a94f4790304c_3840w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute inset-0 z-0 liquid-bg"></div>

<div className="flex flex-col bg-center z-30 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b6e7f083-e223-44ac-b637-d6e6ec1ffed5_3840w.jpg)] bg-cover pt-10 pr-16 pb-10 pl-16 relative gap-x-8 gap-y-8">

<header className="glass-panel shrink-0 flex flex-col overflow-hidden -translate-y-4 w-full rounded-[2.5rem] pt-1 pb-1 relative items-center justify-center">
<div className="gloss-overlay opacity-30"></div>
<div className="flex items-center gap-6 mb-3 relative z-10">
<div className="relative group">
<div className="group-hover:opacity-40 transition-opacity bg-emerald-400 opacity-20 rounded-full absolute top-0 right-0 bottom-0 left-0 blur translate-y-4"></div>
<div className="flex bg-center text-emerald-600 w-20 h-20 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a15efecf-15fd-42ed-a950-069f4f1104d3_320w.png)] bg-cover z-10 border-white/60 border rounded-full relative shadow-lg translate-y-6 items-center justify-center">
<iconify-icon icon="solar:mosque-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
</div>
<h1 className="uppercase text-5xl font-semibold text-slate-700 tracking-tight drop-shadow-sm translate-y-2">
                    associazione culturale ritrovo di meolo
                </h1>
</div>
<div className="flex z-10 -translate-y-4 opacity-80 w-full mt-2 relative gap-x-6 gap-y-6 items-center justify-center">
<div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
<div className="flex text-2xl font-light text-slate-500 tracking-wide scale-110 gap-x-3 gap-y-3 items-center">
<iconify-icon className="mb-1" height="24" icon="solar:calendar-linear" style={{color: 'rgb(100, 116, 139)'}} width="24"></iconify-icon>
<span className="capitalize text-teal-800" id="current-date">lunedì 9 febbraio 2026 • 21 Shaʿbān 1447 AH</span>
</div>
<div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
</div>
</header>

<main className="flex-1 grid grid-cols-12 gap-10 min-h-0">

<section className="glass-panel col-span-7 flex flex-col -translate-y-4 h-full rounded-[2.5rem] pt-4 pr-8 pb-8 pl-8 relative">
<div className="gloss-overlay opacity-20"></div>
<div className="flex z-10 mb-8 pr-4 pl-4 relative items-center justify-between">
<h2 className="flex items-center gap-4 text-3xl font-medium text-slate-700 tracking-tight translate-x-4 -translate-y-1 scale-110">
<div className="p-2 bg-slate-200/50 rounded-full text-slate-500">
<iconify-icon className="" icon="solar:clock-circle-linear" width="28"></iconify-icon>
</div>
                        Orari di Preghiera
                    </h2>
<div className="flex gap-16 uppercase -translate-x-6 -translate-x-16 text-lg font-medium text-slate-400 tracking-widest pr-8 scale-150 gap-x-16 gap-y-16">
<span className="translate-x-3">Adhān</span>
<span className="-translate-x-1">Iqāmah</span>
</div>
</div>

<div className="flex flex-col flex-1 z-10 relative -translate-y-3 gap-x-5 gap-y-5 justify-between" id="prayer-container">

<div className="prayer-row flex shadow-emerald-900/5 text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-green-400 to-green-600 opacity-90 rounded-[1.5rem] pt-4 pr-8 pb-4 pl-8 shadow-lg items-center justify-between" id="row-fajr">
<div className="gloss-overlay"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
<iconify-icon className="" icon="solar:sun-fog-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-3xl font-semibold tracking-tight translate-x-6 scale-150">FAJR</span>
</div>
<div className="flex gap-16 z-10 max-w-none relative -translate-x-16 scale-150 gap-x-16 gap-y-16">
<span className="text-4xl font-light text-center opacity-90 w-32" id="api-fajr">05:58</span>
<span className="text-4xl font-semibold w-32 text-center" id="iqamah-fajr">06:13</span>
</div>
</div>

<div className="prayer-row flex shadow-blue-900/5 text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#3380e6] to-[#0d5ca5] opacity-90 rounded-[1.5rem] px-8 py-4 shadow-lg items-center justify-between" id="row-dhuhr">
<div className="gloss-overlay"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
<iconify-icon className="" icon="solar:sun-2-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-3xl font-semibold tracking-tight translate-x-8 scale-150">DHUHR</span>
</div>
<div className="flex gap-16 z-10 relative -translate-x-16 scale-150 gap-x-16 gap-y-16">
<span className="text-4xl font-light text-center opacity-90 w-32" id="api-dhuhr">12:24</span>
<span className="text-4xl font-semibold w-32 text-center" id="iqamah-dhuhr">12:39</span>
</div>
</div>

<div className="prayer-row flex shadow-orange-900/5 text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-orange-400 to-orange-600 opacity-90 rounded-[1.5rem] pt-4 pr-8 pb-4 pl-8 shadow-lg items-center justify-between" id="row-asr">
<div className="gloss-overlay"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
<iconify-icon className="" icon="solar:cloud-sun-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-3xl font-semibold tracking-tight translate-x-6 scale-150">ASR</span>
</div>
<div className="flex gap-16 z-10 relative -translate-x-16 scale-150 gap-x-16 gap-y-16">
<span className="text-4xl font-light w-32 text-center opacity-90" id="api-asr">15:01</span>
<span className="text-4xl font-semibold w-32 text-center" id="iqamah-asr">15:01</span>
</div>
</div>

<div className="prayer-row flex shadow-indigo-900/5 text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#6a4cc2] to-violet-600 opacity-90 rounded-[1.5rem] px-8 py-4 shadow-lg items-center justify-between" id="row-maghrib">
<div className="gloss-overlay"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm shadow-inner">
<iconify-icon className="" icon="solar:sunset-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-3xl font-semibold tracking-tight translate-x-12 scale-150">MAGHRIB</span>
</div>
<div className="flex gap-16 z-10 relative -translate-x-16 scale-150 gap-x-16 gap-y-16">
<span className="text-4xl font-light w-32 text-center opacity-90" id="api-maghrib">17:28</span>
<span className="text-4xl font-semibold w-32 text-center" id="iqamah-maghrib">17:33</span>
</div>
</div>

<div className="prayer-row flex shadow-slate-900/5 text-white bg-[radial-gradient(circle_at_bottom,var(--tw-gradient-stops))] from-[#fd637a] to-rose-600 rounded-[1.5rem] px-8 py-4 shadow-5g items-center justify-between" id="row-isha">
<div className="gloss-overlay"></div>
<div className="flex items-center gap-6 relative z-10">
<div className="p-3 bg-white/10 rounded-2xl backdrop-blur-sm shadow-inner">
<iconify-icon icon="solar:moon-stars-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<span className="text-3xl font-semibold tracking-tight translate-x-8 scale-150">ISHA</span>
</div>
<div className="flex z-10 relative -translate-x-16 scale-150 gap-x-16 gap-y-16">
<span className="text-4xl font-light w-32 text-center opacity-90" id="api-isha">18:51</span>
<span className="text-4xl font-semibold w-32 text-center" id="iqamah-isha">19:06</span>
</div>
</div>
</div>
</section>

<section className="col-span-5 flex flex-col h-full gap-8">

<div className="glass-panel shrink-0 overflow-hidden -translate-y-4 rounded-[2.5rem] pt-5 pr-5 pb-5 pl-5 relative">
<div className="gloss-overlay opacity-30"></div>
<div className="grid grid-cols-2 z-10 relative scale-100 gap-x-5 gap-y-5">

<div className="flex flex-col overflow-hidden text-center bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[1.5rem] pt-6 pb-6 relative shadow-inner items-center justify-center">
<div className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1213efe6-5a60-4cc9-a71c-a94f4790304c_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="uppercase text-xs font-bold text-red-700 tracking-widest z-10 mb-1 shadow-black -translate-x-16 scale-150">Suḥūr</span>
<span className="z-10 -translate-x-16 text-4xl font-semibold text-amber-800 tracking-tight drop-shadow-lg scale-150" id="api-suhur">05:48</span>
</div>

<div className="flex flex-col text-center bg-gradient-to-br from-rose-600 to-pink-800 rounded-[1.5rem] py-6 items-center justify-center relative overflow-hidden shadow-inner">
<div className="bg-center mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0eb0c78-48db-4723-854f-96e37d7ad33d_800w.jpg)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<span className="uppercase text-xs font-bold text-rose-100 tracking-widest z-10 mb-1 shadow-black translate-x-6 scale-150">Iftar</span>
<span className="z-10 text-4xl font-semibold text-white tracking-tight drop-shadow-lg translate-x-6 scale-150" id="api-iftar">17:28</span>
</div>
</div>
</div>

<div className="glass-panel-dark shrink-0 overflow-hidden -translate-y-3 text-white h-[180px] rounded-[2.5rem] pt-6 pr-6 pb-6 pl-6 relative -translate-y-6">

<div className="text-white/50 opacity-5 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0">
<iconify-icon className="" height="99" icon="solar:info-circle-linear" style={{color: 'rgb(255, 255, 255)'}} width="100"></iconify-icon>
</div>

<div className="fade-wrapper relative z-10 h-full" id="info-carousel">

<div className="fade-slide active" data-slide="0">
<div className="flex gap-3 text-slate-300/80 mb-2 translate-x-8 scale-110 gap-x-3 gap-y-3 items-center">
<iconify-icon icon="solar:hourglass-line-linear" width="20"></iconify-icon>
<span className="uppercase text-xs font-bold tracking-widest translate-x-8 scale-150">Prossima Preghiera</span>
</div>
<div className="flex flex-col">
<span className="text-4xl font-semibold text-emerald-400 tracking-tight drop-shadow-[0_0_15px_rgba(52,211,153,0.4)] translate-x-8 scale-110" id="next-prayer-name">FAJR</span>
<span className="tabular-nums text-5xl tracking-tight font-extralight opacity-90 translate-y-1" id="next-prayer-timer">-07:36:35</span>
</div>
</div>

<div className="fade-slide" data-slide="1">
<div className="grid grid-cols-2 gap-8 items-center h-full">

<div className="flex flex-col border-r border-white/10 pr-2 h-full justify-center">
<div className="flex items-center gap-3 mb-2 text-slate-300/80">
<iconify-icon icon="solar:moon-stars-linear" width="20"></iconify-icon>
<span className="uppercase tracking-widest text-xs font-bold">Ramadan 1447</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-medium tracking-tight text-amber-300 mb-0">Mancano solo</span>
<div className="flex items-baseline gap-2">
<span className="text-5xl font-semibold text-white tracking-tight" id="ramadan-days">9</span>
<span className="text-xl font-light text-slate-400">giorni</span>
</div>
</div>
</div>

<div className="flex flex-col justify-center pl-2">
<span className="uppercase tracking-widest text-[10px] font-bold text-emerald-400 mb-1">Versetto del Mese</span>
<p className="text-lg font-light leading-snug italic text-white/90 line-clamp-3" id="ramadan-verse-text">"O voi che credete! Vi è stato prescritto il digiuno come fu prescritto a coloro che vi hanno preceduto."</p>
<span className="text-xs font-medium text-slate-400 mt-2 block" id="ramadan-verse-source">Surah Al-Baqarah 2:183</span>
</div>
</div>
</div>

<div className="fade-slide" data-slide="2">
<div className="flex items-center gap-3 mb-2 text-slate-300/80">
<iconify-icon icon="solar:book-bookmark-linear" width="20"></iconify-icon>
<span className="uppercase tracking-widest text-xs font-bold">Hadith del Giorno</span>
</div>
<div className="flex flex-col justify-center h-full pb-4">
<p className="text-xl font-light leading-snug italic opacity-90 line-clamp-3" id="hadith-text">"La purificazione è metà della fede, e la lode spetta ad Allah riempie la bilancia."</p>
<span className="text-sm font-semibold text-emerald-400 mt-2 block" id="hadith-source">Sahih Muslim</span>
</div>
</div>
</div>

<div className="absolute bottom-4 right-6 flex gap-1.5 z-20">
<div className="w-1.5 h-1.5 rounded-full bg-white/80 indicator" data-idx="0"></div>
<div className="w-1.5 h-1.5 indicator bg-white/20 rounded-full" data-idx="1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 indicator" data-idx="2"></div>
</div>
</div>

<div className="glass-panel flex-1 flex flex-col min-h-0 -translate-y-6 rounded-[2.5rem] pt-1 pr-1 pb-1 pl-1 relative">
<div className="gloss-overlay opacity-20"></div>
<div className="flex-1 relative rounded-[2rem] overflow-hidden bg-slate-100/50 shadow-inner border border-white/50" id="banner-container"><img className="banner-slide active object-cover w-full h-auto" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a6f9756-c6b7-4f15-8b0f-ece7c7acb009_1600w.png"/><img className="banner-slide object-cover w-full h-auto" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/afcce9f6-c3c9-4d67-b9f5-5df5e5844e19_1600w.png"/><img className="banner-slide object-cover w-full h-auto" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cd50fe2-ed38-48e1-a6aa-fe6186b93be0_1600w.jpg"/><img className="banner-slide object-cover w-full h-auto" data-index="3" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d12e5d7c-6ea7-47d0-ab01-acf3470570a2_1600w.png"/></div>
</div>
</section>
</main>

<footer className="shrink-0 flex h-24 gap-8 relative z-10">

<div className="glass-panel w-1/4 h-full rounded-[2rem] relative overflow-hidden flex flex-col items-center justify-center border border-white/40 group" id="audio-container">
<div className="gloss-overlay opacity-30"></div>

<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/10"></div>

<div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 transition-transform duration-700 ease-in-out group-hover:rotate-45">
<iconify-icon icon="solar:vinyl-record-linear" width="120"></iconify-icon>
</div>

<div className="flex flex-col w-full z-10 pr-12 pl-6 relative gap-x-3 gap-y-2">

<div className="flex gap-4 translate-y-1 gap-x-4 gap-y-4 items-center">
<div className="w-12 h-12 rounded-full bg-emerald-100/50 flex items-center justify-center text-emerald-600 shadow-sm border border-white/50 shrink-0">
<iconify-icon className="" icon="solar:music-note-slider-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col overflow-hidden min-w-0">
<span className="text-lg font-semibold text-slate-700 truncate leading-tight" id="audio-track-name">Surah Al-Fatiha</span>
</div>
</div>

<div className="flex -translate-y-4 cursor-pointer bg-white/40 border-white/50 border rounded-xl mt-0.5 pt-1.5 pr-1.5 pb-1.5 pl-1.5 shadow-sm backdrop-blur-sm items-center justify-between" onclick="window.location.href='/1.html'" role="button">
<button className="w-10 h-10 flex shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition shadow-lg hover:scale-105 active:scale-95" onclick="toggleAudio()">
<iconify-icon className="" height="19" icon="solar:play-bold" id="play-icon" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
<div className="flex-1 flex pr-3 pl-3 justify-center" id="audio-visualizer-container">

<div className="flex opacity-40 h-6 scale-150 gap-x-1 gap-y-1 items-end justify-center" id="audio-visualizer">
<div className="w-1 bg-emerald-500 rounded-full h-2 bar"></div>
<div className="w-1 bg-emerald-500 rounded-full h-4 bar" style={{animationDelay: '0.1s'}}></div>
<div className="w-1 bg-emerald-500 rounded-full h-3 bar" style={{animationDelay: '0.2s'}}></div>
<div className="w-1 bg-emerald-500 rounded-full h-5 bar" style={{animationDelay: '0.3s'}}></div>
<div className="w-1 bg-emerald-500 rounded-full h-2 bar" style={{animationDelay: '0.1s'}}></div>
</div>
</div>
<button className="w-9 h-9 flex shrink-0 items-center justify-center rounded-lg bg-white text-slate-600 hover:bg-slate-50 transition border border-slate-200 shadow-sm hover:text-emerald-600" onclick="nextTrack()">
<iconify-icon icon="solar:skip-next-bold" width="18"></iconify-icon>
</button>
</div>
</div>

<audio id="quran-player" onended="nextTrack()" src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3faasy/001.mp3"></audio>
</div>

<div className="flex-1 rounded-[2rem] shadow-xl overflow-hidden flex items-center relative border border-white/20">
<div className="absolute inset-0 bg-gradient-to-r from-emerald-600/95 to-teal-700/95 backdrop-blur-xl"></div>
<div className="flex z-10 bg-emerald-800/40 h-full border-white/10 border-r pr-8 pl-8 backdrop-blur-sm items-center justify-center">
<span className="uppercase flex items-center gap-1 text-sm font-semibold text-white tracking-widest translate-y-1 scale-150">
<div className="relative">
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</span>
<iconify-icon className="" icon="solar:bell-bing-linear" width="24"></iconify-icon>
</div>
                        Avvisi
                    </span>
</div>
<div className="flex-1 overflow-hidden flex z-10 h-full relative items-center">
<div className="marquee-content text-5xl font-normal text-white tracking-wide pr-7 pl-7 drop-shadow-md scale-250">
                        La raccolta fondi per il rinnovo della moschea è iniziata. Si prega di spegnere i cellulari entrando in sala preghiera. Le lezioni di arabo per bambini si tengono Sabato e domenica alle 10:00.
                    </div>
</div>
<div className="flex z-10 shrink-0 h-full border-l border-white/10 px-10 items-center justify-center min-w-[180px] bg-teal-900/20 backdrop-blur-md">
<span className="text-6xl font-bold text-white tracking-widest tabular-nums leading-none mt-1 drop-shadow-lg" id="footer-clock">22:22</span>
</div>
</div>
</footer>
</div>



    </>
  );
}
