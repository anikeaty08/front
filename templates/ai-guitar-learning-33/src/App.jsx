import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
primary: '#3A86FF',
accent: '#FF006E',
secondary: '#FFBE0B',
bg: '#F9FBFF',
surface: '#FFFFFF',
dark: '#1F2933',
muted: '#6B7280',
},
animation: {
'shine': 'shine 3s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'pop-in': 'popIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-left': 'slideLeft 0.4s cubic-bezier(0.5, 0, 0.1, 1) forwards',
},
keyframes: {
shine: {
'0%': { left: '-100%' },
'20%': { left: '100%' },
'100%': { left: '100%' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
popIn: {
'0%': { opacity: '0', transform: 'scale(0.8) translateY(10px)' },
'100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(40px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideLeft: {
'0%': { opacity: '0', transform: 'translateX(20px)' },
'100%': { opacity: '1', transform: 'translateX(0)' },
}
}
}
}
}



        // --- Data ---
        // Simulated Song Chords Timeline
        const songData = [
            { time: 0.0, name: 'Em', suffix: 'Minor' },
            { time: 2.5, name: 'G', suffix: 'Major' },
            { time: 5.0, name: 'D', suffix: 'Major' },
            { time: 7.5, name: 'A7', suffix: 'Dominant' },
            { time: 10.0, name: 'C', suffix: 'Major' },
            { time: 12.5, name: 'D', suffix: 'Major' },
            { time: 15.0, name: 'Em', suffix: 'Minor' },
            { time: 17.5, name: 'G', suffix: 'Major' },
            { time: 20.0, name: 'A', suffix: 'Major' },
            { time: 22.5, name: 'C', suffix: 'Major' },
            { time: 25.0, name: 'D', suffix: 'Major' },
            { time: 27.5, name: 'G', suffix: 'Major' }
        ];

        // --- Core Audio Engine Variables ---
        let audioPlayer = null;
        let isPlaying = false;
        let animationFrameId = null;
        const PIXELS_PER_SECOND = 100; 
        let currentChordIndex = -1;

        // --- View References ---
        const views = {
            landing: document.getElementById('view-landing'),
            upload: document.getElementById('view-upload'),
            playground: document.getElementById('view-playground'),
            performance: document.getElementById('view-performance')
        };

        const uploadUI = {
            initial: document.getElementById('upload-initial'),
            progress: document.getElementById('upload-progress'),
            bar: document.getElementById('progress-bar'),
            text: document.getElementById('progress-text'),
            step: document.getElementById('progress-step'),
            percent: document.getElementById('progress-percent')
        };

        const playgroundUI = {
            title: document.getElementById('pg-song-title'),
            track: document.getElementById('waveform-track'),
            playBtn: document.getElementById('main-play-btn'),
            statusBadge: document.getElementById('play-status-badge'),
            chords: {
                prev: document.getElementById('chord-prev'),
                curr: document.getElementById('chord-current'),
                next: document.getElementById('chord-next')
            }
        };

        // --- Navigation Functions ---
        function openUpload() {
            views.landing.classList.add('opacity-50', 'pointer-events-none');
            views.upload.classList.remove('hidden');
            setTimeout(() => views.upload.classList.remove('opacity-0'), 10);
            
            // Reset
            uploadUI.initial.classList.remove('hidden');
            uploadUI.progress.classList.add('hidden');
            
            // Reset Audio if exists
            if(audioPlayer) {
                audioPlayer.pause();
                audioPlayer = null;
            }
        }

        function closeUpload() {
            views.upload.classList.add('opacity-0');
            setTimeout(() => {
                views.upload.classList.add('hidden');
                views.landing.classList.remove('opacity-50', 'pointer-events-none');
            }, 300);
        }

        // --- Backend: File Handling & Processing ---
        function handleFileSelect(input) {
            if (input.files && input.files[0]) {
                const file = input.files[0];
                
                // Initialize "Backend" (Audio Object)
                const fileURL = URL.createObjectURL(file);
                audioPlayer = new Audio(fileURL);
                audioPlayer.addEventListener('ended', onAudioEnded);
                
                // Update UI Title
                playgroundUI.title.textContent = file.name.replace(/\.[^/.]+$/, ""); // remove extension

                // Start Fake Processing UI
                startUploadProcess();
            }
        }

        function startUploadProcess() {
            uploadUI.initial.classList.add('hidden');
            uploadUI.progress.classList.remove('hidden');

            let width = 0;
            const steps = [
                { limit: 30, text: "Uploading file...", step: "Analyzing Format" },
                { limit: 60, text: "Extracting chords...", step: "AI Processing" },
                { limit: 90, text: "Syncing timeline...", step: "Finalizing" },
                { limit: 100, text: "Ready to play!", step: "Done" }
            ];
            
            let currentStepIdx = 0;
            const interval = setInterval(() => {
                width += Math.random() * 3; 
                
                if (currentStepIdx < steps.length && width >= steps[currentStepIdx].limit) {
                    uploadUI.text.innerText = steps[currentStepIdx].text;
                    uploadUI.step.innerText = steps[currentStepIdx].step;
                    currentStepIdx++;
                }

                if (width >= 100) {
                    width = 100;
                    clearInterval(interval);
                    uploadUI.bar.style.width = '100%';
                    uploadUI.percent.innerText = '100%';
                    setTimeout(enterPlayground, 800);
                } else {
                    uploadUI.bar.style.width = width + '%';
                    uploadUI.percent.innerText = Math.floor(width) + '%';
                }
            }, 50);
        }

        function enterPlayground() {
            currentChordIndex = -1;
            updateChordDisplay(0); // Initialize chords
            generateWaveform(); 
            
            views.upload.classList.add('opacity-0');
            views.landing.classList.add('hidden');
            
            setTimeout(() => {
                views.upload.classList.add('hidden');
                views.playground.classList.remove('hidden');
                setTimeout(() => views.playground.classList.remove('opacity-0'), 50);
            }, 300);
        }

        function exitPlayground() {
            if(audioPlayer) audioPlayer.pause();
            isPlaying = false;
            cancelAnimationFrame(animationFrameId);
            
            views.playground.classList.add('opacity-0');
            setTimeout(() => {
                views.playground.classList.add('hidden');
                views.landing.classList.remove('hidden', 'opacity-50', 'pointer-events-none');
                views.landing.classList.remove('opacity-0');
            }, 500);
        }

        function showPerformance() {
            views.playground.classList.add('opacity-0');
            setTimeout(() => {
                views.playground.classList.add('hidden');
                views.performance.classList.remove('hidden');
                setTimeout(() => views.performance.classList.remove('opacity-0'), 50);
            }, 500);
        }

        function retrySession() {
            views.performance.classList.add('opacity-0');
            setTimeout(() => {
                views.performance.classList.add('hidden');
                // Reset Playground
                playgroundUI.track.style.transform = `translateX(0px)`;
                playgroundUI.playBtn.innerHTML = '<span class="iconify ml-1" data-icon="lucide:play" data-width="28" data-stroke-width="1.5"></span>';
                playgroundUI.statusBadge.textContent = "READY";
                playgroundUI.statusBadge.className = "absolute -top-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg transition-colors";
                currentChordIndex = -1;
                updateChordDisplay(0);
                if(audioPlayer) audioPlayer.currentTime = 0;
                
                views.playground.classList.remove('hidden');
                setTimeout(() => views.playground.classList.remove('opacity-0'), 50);
            }, 500);
        }

        // --- Backend: Playback & Animation Logic ---
        
        function togglePlayback() {
            if(!audioPlayer) return;

            if (audioPlayer.paused) {
                audioPlayer.play();
                isPlaying = true;
                
                // Update UI
                playgroundUI.playBtn.innerHTML = '<span class="iconify" data-icon="lucide:pause" data-width="28" data-stroke-width="1.5"></span>';
                playgroundUI.statusBadge.textContent = "PLAYING";
                playgroundUI.statusBadge.className = "absolute -top-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-accent/30 animate-pulse";
                
                // Start Animation Loop
                animateWaveform();
            } else {
                audioPlayer.pause();
                isPlaying = false;
                
                // Update UI
                playgroundUI.playBtn.innerHTML = '<span class="iconify ml-1" data-icon="lucide:play" data-width="28" data-stroke-width="1.5"></span>';
                playgroundUI.statusBadge.textContent = "PAUSED";
                playgroundUI.statusBadge.className = "absolute -top-4 bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg";
                
                cancelAnimationFrame(animationFrameId);
            }
        }

        function onAudioEnded() {
            isPlaying = false;
            cancelAnimationFrame(animationFrameId);
            playgroundUI.playBtn.innerHTML = '<span class="iconify ml-1" data-icon="lucide:play" data-width="28" data-stroke-width="1.5"></span>';
            playgroundUI.statusBadge.textContent = "FINISHED";
            
            // Go to Performance Page
            setTimeout(showPerformance, 500);
        }

        function animateWaveform() {
            if (!isPlaying) return;

            const currentTime = audioPlayer.currentTime;
            
            // Check for chord change logic
            // Find the chord active for this time
            let activeIdx = -1;
            for(let i=0; i<songData.length; i++) {
                if(currentTime >= songData[i].time) {
                    activeIdx = i;
                }
            }

            // Only update DOM if the chord index actually changed
            if (activeIdx !== currentChordIndex) {
                currentChordIndex = activeIdx;
                updateChordDisplay(activeIdx);
            }

            // Calculate pixel offset: Move LEFT based on time
            const offset = -(currentTime * PIXELS_PER_SECOND);
            playgroundUI.track.style.transform = `translateX(${offset}px)`;
            
            animationFrameId = requestAnimationFrame(animateWaveform);
        }

        function updateChordDisplay(index) {
            const prevData = index > 0 ? songData[index - 1] : { name: '--', suffix: '' };
            const currData = songData[index] || { name: '--', suffix: '' };
            const nextData = index + 1 < songData.length ? songData[index + 1] : { name: '--', suffix: '' };

            // Update Text Content
            playgroundUI.chords.prev.querySelector('.chord-name').textContent = prevData.name;
            
            const currNameEl = playgroundUI.chords.curr.querySelector('.chord-name');
            const currSuffixEl = playgroundUI.chords.curr.querySelector('.chord-suffix');
            
            currNameEl.textContent = currData.name;
            currSuffixEl.textContent = currData.suffix;
            
            playgroundUI.chords.next.querySelector('.chord-name').textContent = nextData.name;

            // Trigger Pop Animation on Current Card
            playgroundUI.chords.curr.classList.remove('animate-pop-in');
            void playgroundUI.chords.curr.offsetWidth; // force reflow
            playgroundUI.chords.curr.classList.add('animate-pop-in');

            // Slide Animation for previous (simulated by updating text then fading in)
            playgroundUI.chords.prev.classList.remove('animate-slide-left');
            void playgroundUI.chords.prev.offsetWidth;
            playgroundUI.chords.prev.classList.add('animate-slide-left');
        }

        // --- Visual: Generate Waveform Bars ---
        function generateWaveform() {
            playgroundUI.track.innerHTML = ''; 
            
            let html = '';
            // Create a timeline based on songData
            const totalDurationSecs = 30; // approx demo length
            const totalPixels = totalDurationSecs * PIXELS_PER_SECOND;
            const barWidth = 6; // 1.5 tailwind w + gap
            const totalBars = Math.floor(totalPixels / barWidth);

            for(let i=0; i<totalBars; i++) {
                // Calculate time for this bar
                const barTime = (i * barWidth) / PIXELS_PER_SECOND;
                
                // Check if this bar corresponds to a chord start time (approx)
                let isChordStart = false;
                let chordName = '';
                
                for(let c of songData) {
                    if(Math.abs(barTime - c.time) < 0.05) {
                        isChordStart = true;
                        chordName = c.name;
                        break;
                    }
                }

                let h = Math.floor(Math.random() * 20) + 4; // tailwind height number
                let colorClass = 'bg-gray-300';
                
                if (isChordStart) {
                    colorClass = 'bg-accent'; // Chord change marker
                    html += `<div class="relative w-1.5 h-16 ${colorClass} rounded-full transition-all shrink-0">
                                <div class="absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-bold text-dark bg-white px-1.5 py-0.5 rounded border border-gray-200 shadow-sm whitespace-nowrap z-10">${chordName}</div>
                             </div>`;
                } else if (i % 8 === 0) { // Beat marker
                    colorClass = 'bg-primary/60'; 
                    html += `<div class="w-1.5 h-${h + 8} ${colorClass} rounded-full transition-all shrink-0"></div>`;
                } else {
                    html += `<div class="w-1.5 h-${h} ${colorClass} rounded-full transition-all shrink-0"></div>`;
                }
            }
            playgroundUI.track.innerHTML = html;
        }

        // --- Common UI Listeners ---
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const menu = document.getElementById('mobile-menu');
        const links = document.querySelectorAll('.mobile-link');

        function toggleMenu() {
            if(menu) {
                const isClosed = menu.classList.contains('opacity-0');
                if (isClosed) {
                    menu.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-[-100%]');
                    menu.classList.add('translate-y-0');
                } else {
                    menu.classList.add('opacity-0', 'pointer-events-none', 'translate-y-[-100%]');
                    menu.classList.remove('translate-y-0');
                }
            }
        }

        if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
        links.forEach(link => link.addEventListener('click', toggleMenu));

        // Observers
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="transition-opacity duration-500" id="view-landing">

<header className="fixed top-0 left-0 right-0 z-40 bg-[#F9FBFF]/80 backdrop-blur-md border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Aaroh AI Logo" className="w-10 h-10 object-contain group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<span className="font-semibold text-xl tracking-tight text-dark">Aaroh AI</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
<a className="hover:text-primary transition-colors" href="#how-it-works">How it works</a>
<a className="hover:text-primary transition-colors" href="#features">Features</a>
<a className="hover:text-primary transition-colors" href="#pricing">Pricing</a>
</nav>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-muted hover:text-dark transition-colors" href="#">Log in</a>
<button className="btn-shine group relative px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-xl shadow-md hover:shadow-lg hover:shadow-primary/30 hover:scale-[1.02] transition-all duration-300" onclick="openUpload()">
                        Try Play-Along Demo
                    </button>
</div>
</div>
</header>
<main className="pt-24">

<section className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="space-y-8 text-center lg:text-left">
<div className="reveal delay-[100ms] inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-medium text-primary uppercase tracking-wide mx-auto lg:mx-0">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        AI-Powered Guitar Learning
                    </div>
<div className="space-y-6">
<h1 className="reveal delay-[200ms] text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-dark leading-[1.1]">
                            Master your favourite songs, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">one session at a time.</span>
</h1>
<p className="reveal delay-[300ms] text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Aaroh AI turns your practice into a guided, interactive jam: upload any song, see exactly what to play, and get instant feedback.
                        </p>
</div>
<div className="reveal delay-[400ms] flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<button className="btn-shine w-full sm:w-auto px-8 py-3.5 bg-primary text-white text-base font-medium rounded-xl shadow-lg shadow-primary/25 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2" onclick="openUpload()">
                            Try Play-Along Demo
                            <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-dark text-base font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300 flex items-center justify-center gap-2 group">
<span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-dark group-hover:bg-white group-hover:text-primary transition-colors">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="12"></span>
</span>
                            Watch preview
                        </button>
</div>
</div>

<div className="reveal delay-[600ms] relative lg:h-auto flex items-center justify-center">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
<div className="relative w-full bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-float">
<div className="h-10 bg-gray-50 border-b border-gray-100 flex items-center px-4 gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="flex-1 text-center">
<div className="inline-flex items-center gap-1 px-3 py-0.5 rounded-md bg-white border border-gray-200 text-[10px] text-gray-400 font-mono">
<span className="iconify" data-icon="lucide:lock" data-strokeWidth="1.5" data-width="8"></span>
                                    aaroh.ai/play
                                </div>
</div>
</div>
<div className="p-6 space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
<span className="iconify" data-icon="lucide:music" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1.5"></div>
<div className="h-3 w-20 bg-gray-100 rounded"></div>
</div>
</div>
<div className="text-right">
<div className="text-xs font-semibold text-accent">98% Accuracy</div>
</div>
</div>
<div className="h-24 bg-gray-50 rounded-xl border border-dashed border-gray-200 relative flex items-center justify-center overflow-hidden">
<div className="flex items-end gap-1 h-12 w-full px-4 justify-center opacity-50">
<div className="w-1 h-4 bg-primary rounded-full"></div>
<div className="w-1 h-8 bg-primary rounded-full"></div>
<div className="w-1 h-12 bg-primary rounded-full"></div>
<div className="w-1 h-6 bg-primary/50 rounded-full"></div>
<div className="w-1 h-10 bg-primary/30 rounded-full"></div>
<div className="w-1 h-5 bg-primary rounded-full"></div>
<div className="w-1 h-8 bg-primary rounded-full"></div>
<div className="w-1 h-3 bg-primary rounded-full"></div>
<div className="w-1 h-12 bg-accent rounded-full shadow-[0_0_10px_rgba(255,0,110,0.5)]"></div>
<div className="w-1 h-6 bg-gray-300 rounded-full"></div>
<div className="w-1 h-4 bg-gray-300 rounded-full"></div>
</div>
<div className="absolute inset-y-0 left-1/2 w-0.5 bg-accent z-10"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-gray-100 bg-white" id="how-it-works">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="reveal text-sm font-semibold text-primary tracking-wide uppercase mb-3">Workflow</h2>
<h3 className="reveal text-3xl md:text-4xl font-semibold text-dark tracking-tight">From audio file to <span className="text-accent">mastery</span></h3>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-gray-200 via-primary/20 to-gray-200"></div>

<div className="reveal delay-100 relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 z-10">
<div className="w-16 h-16 rounded-xl bg-blue-50 text-primary flex items-center justify-center">
<span className="iconify" data-icon="lucide:upload-cloud" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">1. Upload Song</h4>
<p className="text-muted text-sm px-4">Drag &amp; drop any MP3. Our AI instantly isolates instruments and detects chords.</p>
</div>

<div className="reveal delay-200 relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 z-10">
<div className="w-16 h-16 rounded-xl bg-pink-50 text-accent flex items-center justify-center">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">2. Play Along</h4>
<p className="text-muted text-sm px-4">Follow the moving timeline. The app listens to your playing via microphone.</p>
</div>

<div className="reveal delay-300 relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-100 shadow-xl flex items-center justify-center mb-6 z-10">
<div className="w-16 h-16 rounded-xl bg-yellow-50 text-secondary flex items-center justify-center">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">3. Get Feedback</h4>
<p className="text-muted text-sm px-4">See your accuracy score and detailed breakdown for every chord you played.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-bg border-t border-gray-200" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="reveal text-sm font-semibold text-primary tracking-wide uppercase mb-3">Features</h2>
<h3 className="reveal text-3xl md:text-4xl font-semibold text-dark tracking-tight mb-4">Everything you need to practice efficiently</h3>
<p className="reveal text-muted text-lg">Replaces your tab app, metronome, and teacher with one intelligent interface.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-100 text-primary flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:mic-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Real-Time Analysis</h4>
<p className="text-sm text-muted">The audio engine analyzes your input latency-free to check if you're hitting the right notes on time.</p>
</div>

<div className="reveal delay-200 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-100 text-accent flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:music-4" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Chord Extraction</h4>
<p className="text-sm text-muted">Don't have tabs? No problem. AI detects chords from the audio file automatically.</p>
</div>

<div className="reveal delay-300 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-yellow-100 text-secondary flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Tempo Control</h4>
<p className="text-sm text-muted">Slow down complex solos without changing pitch to build muscle memory gradually.</p>
</div>

<div className="reveal delay-100 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Stem Separation</h4>
<p className="text-sm text-muted">Mute the original guitar track to play with the backing band, or solo it to hear details.</p>
</div>

<div className="reveal delay-200 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:repeat" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Smart Looping</h4>
<p className="text-sm text-muted">Mark a section to loop continuously until you nail the transition perfectly.</p>
</div>

<div className="reveal delay-300 p-8 rounded-2xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center mb-5">
<span className="iconify" data-icon="lucide:award" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h4 className="text-lg font-semibold text-dark mb-2">Performance Tracking</h4>
<p className="text-sm text-muted">Track your accuracy improvements over time with detailed session reports.</p>
</div>
</div>
</div>
</section>
<section className="py-24 bg-gradient-to-b from-white to-blue-50/50">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal text-4xl font-semibold tracking-tight text-dark mb-4">Ready to hear your own progress?</h2>
<p className="reveal text-xl text-muted mb-10 max-w-xl mx-auto">
                        Start a play-along session with Aaroh AI and feel the difference in your practice within one song.
                    </p>
<div className="reveal flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="btn-shine px-8 py-3.5 bg-primary text-white text-base font-medium rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform duration-300" onclick="openUpload()">
                            Try Play-Along Demo
                        </button>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2023 Aaroh AI Inc. All rights reserved.</p>
<div className="flex gap-4 text-gray-400">
<a className="hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-strokeWidth="1.5" data-width="18"></span></a>
<a className="hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-strokeWidth="1.5" data-width="18"></span></a>
<a className="hover:text-primary transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-strokeWidth="1.5" data-width="18"></span></a>
</div>
</div>
</div>
</footer>
</div>

<div className="hidden fixed inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 opacity-0 transition-opacity duration-300" id="view-upload">
<button className="absolute top-6 right-6 p-2 text-muted hover:text-dark hover:bg-gray-100 rounded-lg transition-all" onclick="closeUpload()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5" data-width="24"></span>
</button>
<div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-secondary"></div>
<div id="upload-initial">
<div className="w-16 h-16 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mx-auto mb-6">
<span className="iconify" data-icon="lucide:upload-cloud" data-strokeWidth="1.5" data-width="32"></span>
</div>
<h2 className="text-2xl font-semibold text-dark mb-2">Upload your song</h2>
<p className="text-muted mb-8">Drag and drop your audio file here, or click to browse. Supports MP3, WAV, M4A.</p>

<input accept="audio/*" className="hidden" id="song-input" onchange="handleFileSelect(this)" type="file"/>
<div className="border-2 border-dashed border-gray-200 rounded-xl p-10 cursor-pointer hover:border-primary hover:bg-blue-50/50 transition-all group" onclick="document.getElementById('song-input').click()">
<span className="iconify text-gray-300 group-hover:text-primary transition-colors mb-2 mx-auto" data-icon="lucide:file-audio" data-strokeWidth="1.0" data-width="40"></span>
<p className="text-sm font-medium text-gray-500 group-hover:text-primary">Click to select a file</p>
</div>
<div className="mt-8 flex items-center justify-center gap-4 text-xs text-gray-400">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> AI Analysis</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Chord Extraction</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:check" data-width="12"></span> Tempo Sync</span>
</div>
</div>
<div className="hidden py-8" id="upload-progress">
<h3 className="text-xl font-medium text-dark mb-6" id="progress-text">Uploading...</h3>
<div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4 relative">
<div className="h-full bg-primary rounded-full w-0 transition-all duration-300 ease-out" id="progress-bar"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
</div>
<div className="flex justify-between text-xs text-gray-400 font-medium font-mono">
<span id="progress-step">Processing audio</span>
<span id="progress-percent">0%</span>
</div>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-[#F9FBFF] flex flex-col opacity-0 transition-opacity duration-500" id="view-playground">

<div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-20 shadow-sm">
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-gray-100 rounded-lg text-muted hover:text-dark transition-colors" onclick="exitPlayground()" title="Exit">
<span className="iconify" data-icon="lucide:chevron-left" data-strokeWidth="1.5" data-width="24"></span>
</button>
<div>
<h1 className="font-semibold text-dark text-lg leading-tight" id="pg-song-title">Wonderwall - Oasis</h1>
<div className="flex items-center gap-3 text-xs text-muted font-medium">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:music" data-width="12"></span> Auto-detected</span>
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:key" data-width="12"></span> Em Key</span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-semibold border border-green-100">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Mic Active
                </div>
<button className="p-2 text-muted hover:text-primary hover:bg-blue-50 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>

<div className="flex-1 relative flex flex-col items-center justify-center overflow-hidden bg-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center gap-12">

<div className="flex flex-col items-center animate-pulse-slow">
<span className="text-sm font-semibold text-muted uppercase tracking-wider mb-1">Current Accuracy</span>
<span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">94%</span>
</div>

<div className="w-full relative">

<div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-accent z-30 shadow-[0_0_15px_rgba(255,0,110,0.6)]"></div>

<div className="h-40 bg-gray-50/50 rounded-2xl border border-gray-200 relative overflow-hidden waveform-container">

<div className="absolute top-0 left-1/2 h-full flex items-center gap-[3px] transition-none will-change-transform" id="waveform-track">

</div>
</div>
</div>

<div className="flex items-center gap-8 md:gap-16">

<div className="hidden md:flex flex-col items-center opacity-40 scale-75 blur-[1px] transition-all duration-300" id="chord-prev">
<div className="w-32 h-40 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
<span className="text-3xl font-semibold text-gray-400 chord-name">--</span>
</div>
<span className="mt-2 text-sm font-medium text-gray-400">Previous</span>
</div>

<div className="flex flex-col items-center relative z-20 transition-all duration-300" id="chord-current">
<div className="absolute -top-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-lg transition-colors" id="play-status-badge">READY</div>
<div className="w-40 h-52 bg-white rounded-2xl border-2 border-accent shadow-2xl flex flex-col items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>
<span className="text-6xl font-bold text-dark mb-2 chord-name">Em</span>
<span className="text-sm font-medium text-muted chord-suffix">Minor</span>

<div className="mt-4 flex gap-1 h-12 items-end opacity-50">
<div className="w-0.5 h-12 bg-gray-800"></div>
<div className="w-0.5 h-12 bg-gray-800"></div>
<div className="w-0.5 h-12 bg-gray-800"></div>
<div className="w-0.5 h-12 bg-gray-800"></div>
<div className="w-0.5 h-12 bg-gray-800"></div>
<div className="w-0.5 h-12 bg-gray-800"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center opacity-60 scale-90 transition-all duration-300" id="chord-next">
<div className="w-32 h-40 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
<span className="text-4xl font-semibold text-dark chord-name">G</span>
</div>
<span className="mt-2 text-sm font-medium text-gray-500">Next</span>
</div>
</div>
</div>
</div>

<div className="h-24 bg-white border-t border-gray-200 px-6 flex items-center justify-between z-20">

<div className="w-1/3 flex items-center gap-4">
<button className="p-2 text-dark hover:bg-gray-100 rounded-lg transition-colors">
<span className="iconify" data-icon="lucide:volume-2" data-strokeWidth="1.5" data-width="24"></span>
</button>
<div className="hidden md:block w-32 h-1.5 bg-gray-200 rounded-full relative overflow-hidden group cursor-pointer">
<div className="absolute left-0 top-0 h-full w-2/3 bg-dark rounded-full"></div>
</div>
</div>

<div className="w-1/3 flex items-center justify-center gap-6">
<button className="text-muted hover:text-dark transition-colors"><span className="iconify" data-icon="lucide:skip-back" data-strokeWidth="1.5" data-width="24"></span></button>

<button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/40 hover:scale-105 transition-transform" id="main-play-btn" onclick="togglePlayback()">
<span className="iconify ml-1" data-icon="lucide:play" data-strokeWidth="1.5" data-width="28"></span>
</button>
<button className="text-muted hover:text-dark transition-colors"><span className="iconify" data-icon="lucide:skip-forward" data-strokeWidth="1.5" data-width="24"></span></button>
</div>

<div className="w-1/3 flex items-center justify-end gap-3">
<button className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-medium text-dark hover:border-primary hover:text-primary transition-colors flex items-center gap-2">
<span>1.0x</span>
<span className="iconify" data-icon="lucide:gauge" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="p-2 text-muted hover:text-primary hover:bg-blue-50 rounded-lg transition-colors" title="Loop Section">
<span className="iconify" data-icon="lucide:repeat" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50 bg-[#F9FBFF] flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 overflow-y-auto" id="view-performance">
<div className="w-full max-w-4xl px-6 py-12 flex flex-col items-center">

<div className="text-center mb-10 opacity-0 animate-slide-up stagger-1">
<h2 className="text-lg font-semibold text-primary uppercase tracking-wide mb-2">Session Complete</h2>
<h1 className="text-4xl md:text-5xl font-semibold text-dark tracking-tight">Great job! You nailed it.</h1>
</div>

<div className="relative w-64 h-64 mb-12 opacity-0 animate-slide-up stagger-2">
<div className="absolute inset-0 rounded-full border-[12px] border-gray-200"></div>
<svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-lg">
<circle className="text-primary" cx="128" cy="128" fill="none" r="110" stroke="currentColor" stroke-dasharray="691" stroke-dashoffset="40" strokeLinecap="round" strokeWidth="12"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<span className="text-6xl font-bold text-dark tracking-tight">94%</span>
<span className="text-sm font-medium text-muted uppercase mt-1">Accuracy</span>
</div>
</div>

<div className="w-full mb-12">
<div className="flex items-center justify-between mb-6 opacity-0 animate-slide-up stagger-3">
<h3 className="text-xl font-semibold text-dark">Chord Breakdown</h3>
<div className="flex gap-2 text-xs font-medium">
<span className="flex items-center gap-1.5 px-2 py-1 bg-green-50 text-green-700 rounded-md border border-green-100"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Excellent</span>
<span className="flex items-center gap-1.5 px-2 py-1 bg-yellow-50 text-yellow-700 rounded-md border border-yellow-100"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> Average</span>
</div>
</div>

<div className="flex gap-4 overflow-x-auto pb-6 opacity-0 animate-slide-up stagger-4 snap-x">

<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">Em</span>
<span className="text-xs text-muted mb-3">Minor</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-green-500 w-[98%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-green-600">98%</span>
</div>
<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">G</span>
<span className="text-xs text-muted mb-3">Major</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-green-500 w-[92%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-green-600">92%</span>
</div>
<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">D</span>
<span className="text-xs text-muted mb-3">Major</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-yellow-500 w-[85%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-yellow-600">85%</span>
</div>
<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">A7</span>
<span className="text-xs text-muted mb-3">Dominant</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-green-500 w-[95%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-green-600">95%</span>
</div>
<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">C</span>
<span className="text-xs text-muted mb-3">Major</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-yellow-500 w-[78%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-yellow-600">78%</span>
</div>
<div className="min-w-[160px] p-4 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col items-center snap-center hover:shadow-md hover:border-primary/30 transition-all duration-300">
<span className="text-2xl font-bold text-dark mb-1">A</span>
<span className="text-xs text-muted mb-3">Major</span>
<div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
<div className="h-full bg-green-500 w-[100%] rounded-full"></div>
</div>
<span className="text-xs font-bold text-green-600">100%</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto opacity-0 animate-slide-up stagger-5">
<button className="btn-shine px-8 py-3.5 bg-primary text-white text-base font-medium rounded-xl shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-2" onclick="retrySession()">
<span className="iconify" data-icon="lucide:rotate-ccw" data-strokeWidth="1.5" data-width="18"></span>
                    Try Again
                </button>
<button className="px-8 py-3.5 bg-white border border-gray-200 text-dark text-base font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors duration-300 flex items-center justify-center gap-2" onclick="alert('Redirecting to Dashboard...')">
<span className="iconify" data-icon="lucide:layout-dashboard" data-strokeWidth="1.5" data-width="18"></span>
                    Dashboard
                </button>
</div>
</div>
</div>



    </>
  );
}
