import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#032F24', // Deepest Jungle Green
base: '#064E3B', // Rich Emerald
light: '#10B981', // Highlight Green
gold: '#FBBF24', // Bright Gold/Amber
goldHover: '#D97706',
cream: '#FFFBEB',
}
},
backgroundImage: {
'islamic-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
boxShadow: {
'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
'gold-glow': '0 0 20px rgba(251, 191, 36, 0.3)',
}
}
}
}



        // Liquid Button Effect
        (function(){
            const buttons = document.querySelectorAll('.liquid-glass-button');
            buttons.forEach(button => {
                button.addEventListener('click', function(e){
                    const rect = this.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const ripple = document.createElement('span');
                    ripple.className = 'absolute rounded-full bg-gradient-to-r from-white/40 to-transparent pointer-events-none animate-ping';
                    ripple.style.left = x - 25 + 'px';
                    ripple.style.top = y - 25 + 'px';
                    ripple.style.width = '50px';
                    ripple.style.height = '50px';
                    ripple.style.animation = 'ripple 0.6s linear';
                    this.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
                });
            });
        })();

        // Data State
        const totalJuz = 30;
        let juzData = [];
        let selectedJuzId = null;

        // Initialize Data (Simulate database)
        function initData() {
            for (let i = 1; i <= totalJuz; i++) {
                let status = 'open';
                let name = '';
                
                // Randomize initial state for demo purposes
                const rand = Math.random();
                if (rand > 0.65) {
                    status = 'claimed';
                    name = ['Omar', 'Fatima', 'Yusuf', 'Aisha', 'Zaid'][Math.floor(Math.random()*5)];
                }
                if (rand > 0.85) {
                    status = 'completed';
                    name = ['Hassan', 'Zainab', 'Bilal'][Math.floor(Math.random()*3)];
                }

                juzData.push({ id: i, status, name });
            }
            renderGrid();
            
            // Animate progress bar on load
            setTimeout(updateProgress, 500);
        }

        // Render the Grid
        function renderGrid() {
            const grid = document.getElementById('juzGrid');
            grid.innerHTML = '';

            juzData.forEach((juz, index) => {
                const el = document.createElement('div');
                
                // Base Classes
                let classes = "aspect-square relative flex flex-col items-center justify-center p-2 rounded-xl border transition-all duration-300 cursor-pointer select-none active:scale-95 group overflow-hidden";
                
                // Animation Delay
                el.style.animationDelay = `${index * 30}ms`;
                el.classList.add('fade-in-up'); // Add entrance animation

                // State Styling
                let contentHtml = '';
                let statusClasses = '';
                
                if (juz.status === 'open') {
                    statusClasses = "bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/20 text-gray-500 hover:text-white";
                    contentHtml = `
                        <span class="font-serif text-lg opacity-40 group-hover:opacity-100 transition-opacity">${juz.id}</span>
                        <span class="text-[9px] uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-60 transition-opacity absolute bottom-2">Open</span>
                    `;
                } else if (juz.status === 'claimed') {
                    statusClasses = "bg-brand-gold/10 border-brand-gold/30 text-brand-gold shadow-[0_0_15px_rgba(251,191,36,0.1)] hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:border-brand-gold/50";
                    contentHtml = `
                        <div class="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_5px_#fbbf24]"></div>
                        <span class="text-[10px] font-semibold uppercase tracking-widest opacity-60 mb-1">Juz ${juz.id}</span>
                        <span class="text-xs font-medium truncate w-full text-center px-1 text-white">${juz.name}</span>
                        <iconify-icon icon="solar:clock-circle-linear" class="mt-2 opacity-50" width="12" height="12" stroke-width="1.5"></iconify-icon>
                    `;
                } else if (juz.status === 'completed') {
                    statusClasses = "bg-emerald-500/20 border-emerald-500/30 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]";
                    contentHtml = `
                        <div class="absolute inset-0 bg-emerald-500/10 flex items-center justify-center">
                            <iconify-icon icon="solar:check-circle-bold" width="32" height="32" class="text-emerald-400 opacity-80"></iconify-icon>
                        </div>
                        <span class="absolute bottom-2 text-[10px] font-medium text-emerald-200 opacity-80 truncate w-full text-center px-1">${juz.name}</span>
                    `;
                }

                el.className = `${classes} ${statusClasses}`;
                el.innerHTML = contentHtml;

                // Click Event
                el.onclick = () => handleJuzClick(juz.id);

                grid.appendChild(el);
            });
        }

        // Handle Logic
        function handleJuzClick(id) {
            const juz = juzData.find(j => j.id === id);
            
            if (juz.status === 'open') {
                openModal(id);
            } else if (juz.status === 'claimed') {
                // Toggle to complete
                juz.status = 'completed';
                renderGrid();
                updateProgress();
                checkCompletion();
            } else if (juz.status === 'completed') {
                // Toggle back to claimed (undo)
                juz.status = 'claimed';
                renderGrid();
                updateProgress();
            }
        }

        // Modal Logic
        const modal = document.getElementById('claimModal');
        const modalBackdrop = document.getElementById('modalBackdrop');
        const modalContent = document.getElementById('modalContent');
        const nameInput = document.getElementById('nameInput');

        function openModal(id) {
            selectedJuzId = id;
            document.getElementById('modalJuzNum').innerText = id;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            // Animation handling
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('opacity-0', 'scale-95');
                modalContent.classList.add('scale-100');
                nameInput.focus();
            }, 10);
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('opacity-0', 'scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                nameInput.value = '';
                selectedJuzId = null;
            }, 300);
        }

        function confirmClaim(e) {
            e.preventDefault();
            const name = nameInput.value.trim();
            if (!name) return;

            const juz = juzData.find(j => j.id === selectedJuzId);
            if (juz) {
                juz.status = 'claimed';
                juz.name = name;
                renderGrid();
                updateProgress();
            }
            closeModal();
        }

        // Progress Logic
        function updateProgress() {
            const completed = juzData.filter(j => j.status === 'completed').length;
            const percentage = Math.round((completed / totalJuz) * 100);
            document.getElementById('progressBar').style.width = `${percentage}%`;
        }

        // Confetti Logic
        function checkCompletion() {
            const completed = juzData.filter(j => j.status === 'completed').length;
            if (completed === totalJuz) {
                const end = Date.now() + 3 * 1000;
                const colors = ['#FBBF24', '#10B981', '#FFFFFF'];

                (function frame() {
                    confetti({
                        particleCount: 5,
                        angle: 60,
                        spread: 55,
                        origin: { x: 0 },
                        colors: colors
                    });
                    confetti({
                        particleCount: 5,
                        angle: 120,
                        spread: 55,
                        origin: { x: 1 },
                        colors: colors
                    });

                    if (Date.now() < end) {
                        requestAnimationFrame(frame);
                    }
                }());
            }
        }

        // Init
        document.addEventListener('DOMContentLoaded', initData);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-islamic-pattern opacity-100 z-0 pointer-events-none"></div>
<div className="fixed inset-0 bg-gradient-radial from-emerald-900/40 via-brand-dark/90 to-brand-dark z-0 pointer-events-none"></div>

<div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

<header className="sticky top-6 z-50 text-white w-full flex justify-center px-4">
<div className="w-full max-w-5xl">
<div className="h-14 flex ring-1 ring-white/10 bg-brand-dark/60 backdrop-blur-xl rounded-full pr-2.5 pl-4 items-center justify-between shadow-lg shadow-black/20">
<div className="flex gap-2 items-center cursor-pointer group">
<iconify-icon className="text-brand-gold transition-transform group-hover:scale-110" height="24" icon="solar:book-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
<span className="text-base font-semibold tracking-tight font-serif text-white group-hover:text-brand-gold transition-colors">Khatmah Grid</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
<a className="hover:text-white transition-colors" href="#demo" title="View Demo">Demo</a>
<a className="hover:text-white transition-colors" href="#features" title="View Features">Features</a>
<a className="hover:text-white transition-colors" href="#" title="About Us">About</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<button className="px-3 py-1.5 text-xs font-medium rounded-md text-gray-300 hover:text-white transition-colors">Log in</button>
<button className="liquid-glass-button relative inline-flex h-9 cursor-pointer outline-none overflow-hidden transition-all duration-300 ease-out text-xs font-semibold uppercase tracking-wide text-brand-gold bg-gradient-to-r from-white/10 to-white/5 border-white/10 border rounded-full pr-5 pl-5 shadow-lg backdrop-blur-xl items-center justify-center hover:bg-gradient-to-r hover:from-white/15 hover:to-white/10 hover:border-brand-gold/30 hover:shadow-brand-gold/20" style={{boxShadow: '0 0 6px rgba(0,0,0,0.03), 0 2px 6px rgba(0,0,0,0.08), inset 3px 3px 0.5px -3px rgba(255,255,255,0.2), inset -3px -3px 0.5px -3px rgba(255,255,255,0.1), inset 1px 1px 1px -0.5px rgba(255,255,255,0.3), inset -1px -1px 1px -0.5px rgba(255,255,255,0.15), inset 0 0 6px 6px rgba(255,255,255,0.05), inset 0 0 2px 2px rgba(255,255,255,0.02), 0 0 12px rgba(0,0,0,0.1)'}}>
<div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-brand-gold/5"></div>
</div>
<span className="relative z-10 flex items-center gap-2">
                            Start Khatmah
                            <iconify-icon height="14" icon="solar:arrow-right-linear" strokeWidth="2" width="14"></iconify-icon>
</span>
</button>
</div>
<button className="md:hidden inline-flex items-center justify-center rounded-full w-9 h-9 hover:bg-white/10 text-gray-300 transition-colors">
<iconify-icon height="20" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</header>

<main className="flex-grow pt-20 pb-24 px-4 sm:px-6 relative z-10">

<div className="max-w-4xl mx-auto text-center mb-24 space-y-8 fade-in-up">
<h1 className="font-serif text-5xl sm:text-7xl font-medium tracking-tight text-brand-cream leading-[1.1] text-glow">
                Organize your Quran <br/>
<span className="text-brand-gold italic">Khatmah</span> together.
            </h1>
<p className="text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed">
                Connect with family and friends to complete the Quran. A seamless, real-time coordination board for your spiritual journey.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="w-full sm:w-auto h-14 px-8 bg-brand-gold text-brand-dark rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-yellow-400 transition-all flex items-center justify-center gap-3 shadow-gold-glow">
<iconify-icon height="22" icon="solar:add-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
                    Create New Board
                </button>
<button className="w-full sm:w-auto h-14 px-8 bg-white/5 border border-white/10 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm">
<iconify-icon className="text-gray-400" height="22" icon="solar:play-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
                    Watch Video
                </button>
</div>
</div>

<section className="max-w-6xl mx-auto relative fade-in-up delay-100" id="demo">

<div className="absolute -top-12 -right-12 text-brand-gold/20 animate-pulse hidden lg:block">
<iconify-icon height="96" icon="solar:moon-linear" strokeWidth="1" width="96"></iconify-icon>
</div>

<div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-brand-light animate-pulse"></span>
<span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Live Session</span>
</div>
<h2 className="font-serif text-3xl text-white">Ramadan Family Khatmah</h2>
<p className="text-sm text-gray-400 mt-2 font-light">
                            Coordinate effortlessly. Click a tile to claim your Juz.
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="text-right">
<p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Progress</p>
<div className="flex items-baseline gap-1 justify-end">
<span className="text-2xl font-serif text-brand-gold">60%</span>
<span className="text-xs text-gray-500">Completed</span>
</div>
</div>
<button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
<iconify-icon height="18" icon="solar:share-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="w-full h-1.5 bg-gray-800/50 rounded-full mb-10 overflow-hidden relative">
<div className="absolute inset-0 bg-white/5"></div>
<div className="h-full bg-gradient-to-r from-brand-gold to-yellow-300 rounded-full shadow-[0_0_10px_rgba(251,191,36,0.5)] transition-all duration-1000 ease-out" id="progressBar" style={{width: '0%'}}></div>
</div>

<div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-3 sm:gap-4" id="juzGrid">

</div>

<div className="mt-10 flex flex-wrap justify-center gap-8 text-xs font-medium tracking-wide uppercase text-gray-400 border-t border-white/5 pt-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-gray-700 ring-2 ring-gray-600/30"></div>
<span>Available</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-brand-gold ring-2 ring-brand-gold/30"></div>
<span>Reserved</span>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30"></div>
<span>Completed</span>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto mt-32" id="features">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl sm:text-4xl text-brand-cream mb-4">How it works</h2>
<div className="w-16 h-1 bg-brand-gold mx-auto rounded-full"></div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden fade-in-up delay-100">
<div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold to-yellow-600 flex items-center justify-center text-brand-dark mb-6 shadow-lg shadow-yellow-500/20">
<iconify-icon height="24" icon="solar:link-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white mb-3">1. Share Link</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Create a board instantly. Copy the unique link and share it in your group chat. No login needed.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden fade-in-up delay-200">
<div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-brand-dark mb-6 shadow-lg shadow-emerald-500/20">
<iconify-icon height="24" icon="solar:hand-stars-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white mb-3">2. Claim Part</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Participants select a Juz. The tile lights up gold instantly for everyone, avoiding conflicts.
                    </p>
</div>

<div className="glass-card rounded-2xl p-8 relative group overflow-hidden fade-in-up delay-300">
<div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 flex items-center justify-center text-brand-dark mb-6 shadow-lg shadow-white/10">
<iconify-icon height="24" icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-white mb-3">3. Mark Done</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Once read, tap to complete. Watch the progress bar fill and celebrate the completion together.
                    </p>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mt-32 text-center fade-in-up delay-300">
<div className="w-10 h-10 mx-auto mb-6 text-brand-gold opacity-50">
<iconify-icon height="40" icon="solar:quote-up-square-linear" strokeWidth="1" width="40"></iconify-icon>
</div>
<h3 className="font-serif text-2xl sm:text-3xl text-white italic leading-relaxed mb-6">
                "This made our Ramadan so much easier. We finished 5 Khatmahs because organizing was effortless."
            </h3>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden border border-white/20">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/micah/svg?seed=Ahmed"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-white">Ahmed Al-Farsi</p>
<p className="text-xs text-emerald-400">Community Leader</p>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black/20 backdrop-blur-lg mt-auto">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-gold" height="20" icon="solar:book-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="font-serif text-lg text-white">Khatmah Grid</span>
</div>
<div className="text-xs text-gray-500 font-light">
                © 2024 Khatmah Grid. Crafted with care.
            </div>
<div className="flex gap-6">
<a className="text-xs text-gray-400 hover:text-brand-gold transition-colors" href="#">Privacy</a>
<a className="text-xs text-gray-400 hover:text-brand-gold transition-colors" href="#">Terms</a>
<a className="text-xs text-gray-400 hover:text-brand-gold transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden items-center justify-center" id="claimModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity opacity-0" id="modalBackdrop" onclick="closeModal()"></div>

<div className="relative bg-[#042f24] border border-white/10 rounded-2xl shadow-2xl w-full max-w-sm p-8 transform scale-95 opacity-0 transition-all duration-300" id="modalContent">
<button className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="mb-6 text-center">
<div className="w-12 h-12 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-4 border border-brand-gold/20">
<iconify-icon height="24" icon="solar:bookmark-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-white">Claim Juz <span className="text-brand-gold" id="modalJuzNum"></span></h3>
<p className="text-xs text-gray-400 mt-2 font-light">Enter your name to reserve this portion for yourself.</p>
</div>
<form className="space-y-4" onsubmit="confirmClaim(event)">
<div>
<label className="sr-only" htmlFor="nameInput">Your Name</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-gray-500" height="16" icon="solar:user-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input autocomplete="off" className="w-full h-12 pl-10 pr-4 rounded-lg border border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold/50 text-sm transition-all" id="nameInput" placeholder="e.g. Ali" required="" type="text"/>
</div>
</div>
<button className="w-full h-12 bg-brand-gold hover:bg-yellow-400 text-brand-dark rounded-lg text-sm font-semibold uppercase tracking-wide transition-colors shadow-lg shadow-yellow-500/10" type="submit">
                    Confirm Reservation
                </button>
</form>
</div>
</div>


    </>
  );
}
