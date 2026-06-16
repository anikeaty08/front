import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Elements
        const mainContainer = document.getElementById('main-container');
        const ambientGlow = document.getElementById('ambient-glow');
        
        const viewWelcome = document.getElementById('view-welcome');
        const viewTheme = document.getElementById('view-theme');
        const viewCloak = document.getElementById('view-cloak');
        const viewSignup = document.getElementById('view-signup');
        const viewTos = document.getElementById('view-tos');
        const viewFinal = document.getElementById('view-final');

        const btnStart = document.getElementById('btn-start');
        const btnThemeContinue = document.getElementById('btn-theme-continue');
        const btnCloakContinue = document.getElementById('btn-cloak-continue');
        const btnSignupSubmit = document.getElementById('btn-signup-submit');
        const btnSignupSkip = document.getElementById('btn-signup-skip');
        const btnTosAgree = document.getElementById('btn-tos-agree');

        const themeBtns = document.querySelectorAll('.theme-btn');
        const themeTitle = document.getElementById('theme-title');
        const cloakBtns = document.querySelectorAll('.cloak-btn');
        
        const signupUser = document.getElementById('signup-user');
        const signupError = document.getElementById('signup-error');

        // State
        let currentThemeColor = '#9b111e';
        let currentThemeGlow = 'rgba(155, 17, 30, 0.3)';
        let selectedCloak = 'None';
        const takenUsernames = ['admin', 'clifford', 'user', 'guest', 'test'];

        // Helper: Switch views with smooth transition
        function switchView(currentEl, targetEl) {
            currentEl.classList.remove('opacity-100', 'scale-100');
            currentEl.classList.add('opacity-0', 'scale-95');
            currentEl.style.pointerEvents = 'none';

            setTimeout(() => {
                currentEl.classList.add('hidden');
                currentEl.classList.remove('flex');
                
                targetEl.classList.remove('hidden');
                targetEl.classList.add('flex');
                
                // Trigger reflow
                void targetEl.offsetWidth;
                
                targetEl.classList.remove('opacity-0', 'scale-95');
                targetEl.classList.add('opacity-100', 'scale-100');
                targetEl.style.pointerEvents = 'auto';
            }, 300);
        }

        // Navigation Listeners
        btnStart.addEventListener('click', () => switchView(viewWelcome, viewTheme));
        btnThemeContinue.addEventListener('click', () => switchView(viewTheme, viewCloak));
        btnCloakContinue.addEventListener('click', () => {
            applyCloakSettings(selectedCloak);
            switchView(viewCloak, viewSignup);
        });

        // Theme Selection
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                currentThemeColor = btn.getAttribute('data-color');
                currentThemeGlow = btn.getAttribute('data-glow');
                const name = btn.getAttribute('data-name');

                // Update CSS Variable for dynamic coloring across the app
                document.documentElement.style.setProperty('--theme-color', currentThemeColor);

                // Reset theme buttons
                themeBtns.forEach(b => {
                    b.className = 'theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]';
                    b.style.backgroundColor = '';
                    b.style.borderColor = '';
                });

                // Activate selected theme button
                btn.className = 'theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent text-white shadow-lg scale-105';
                btn.style.backgroundColor = currentThemeColor;
                setTimeout(() => btn.classList.remove('scale-105'), 150);

                // Update Ambient Glow & Title
                ambientGlow.style.background = `radial-gradient(circle at 50% 50%, ${currentThemeGlow} 0%, transparent 60%)`;
                themeTitle.innerHTML = `<span style="color: ${currentThemeColor}">${name}</span> Theme`;
            });
        });

        // Cloak Selection
        cloakBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset cloak buttons
                cloakBtns.forEach(b => {
                    b.classList.remove('active-cloak', 'text-white', 'border-transparent', 'shadow-lg');
                    b.classList.add('bg-transparent', 'text-zinc-300', 'border-white/[0.08]', 'hover:bg-white/[0.04]');
                    b.style.backgroundColor = '';
                });

                // Activate selected cloak button
                btn.classList.add('active-cloak', 'text-white', 'border-transparent', 'shadow-lg');
                btn.classList.remove('bg-transparent', 'text-zinc-300', 'border-white/[0.08]', 'hover:bg-white/[0.04]');
                btn.style.backgroundColor = 'var(--theme-color)';
                
                selectedCloak = btn.dataset.cloak;
            });
        });

        // Apply Cloak Metadata
        function applyCloakSettings(cloakName) {
            const cloaks = {
                'None': { title: 'Welcome to Clifford', icon: '' },
                'Google': { title: 'Google', icon: 'https://www.google.com/favicon.ico' },
                'Google Docs': { title: 'Google Docs', icon: 'https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico' },
                'Google Slides': { title: 'Google Slides', icon: 'https://ssl.gstatic.com/docs/presentations/images/favicon5.ico' },
                'Canva': { title: 'Home - Canva', icon: 'https://www.canva.com/favicon.ico' },
                'Blooket': { title: 'Blooket', icon: 'https://www.blooket.com/favicon.ico' },
                'Kahoot': { title: 'Kahoot!', icon: 'https://kahoot.it/favicon.ico' },
                'Edpuzzle': { title: 'Edpuzzle', icon: 'https://edpuzzle.com/favicon.ico' }
            };

            const data = cloaks[cloakName];
            if(data) {
                document.title = data.title;
                if(data.icon) {
                    let link = document.querySelector("link[rel~='icon']");
                    if (!link) {
                        link = document.createElement('link');
                        link.rel = 'icon';
                        document.head.appendChild(link);
                    }
                    link.href = data.icon;
                }
            }
        }

        // Signup Logic
        signupUser.addEventListener('input', () => {
            signupError.classList.add('hidden');
            signupUser.classList.remove('border-red-500/50', 'focus:border-red-500');
        });

        btnSignupSubmit.addEventListener('click', () => {
            const user = signupUser.value.trim().toLowerCase();
            
            if (!user) {
                signupError.textContent = "Username is required";
                signupError.classList.remove('hidden');
                signupUser.classList.add('border-red-500/50', 'focus:border-red-500');
                return;
            }

            if (takenUsernames.includes(user)) {
                signupError.textContent = "Username is taken";
                signupError.classList.remove('hidden');
                signupUser.classList.add('border-red-500/50', 'focus:border-red-500');
                return;
            }

            // Save progress (Mock)
            localStorage.setItem('clifford_user', user);
            switchView(viewSignup, viewTos);
        });

        btnSignupSkip.addEventListener('click', () => {
            // Do not save progress
            switchView(viewSignup, viewTos);
        });

        // TOS & Final View
        btnTosAgree.addEventListener('click', () => {
            // Fade out main container and show full screen blank final view
            mainContainer.classList.add('opacity-0', 'scale-95');
            mainContainer.style.pointerEvents = 'none';

            // Make ambient glow subtle for the blank page
            ambientGlow.style.background = `radial-gradient(circle at 50% 50%, ${currentThemeGlow.replace('0.3', '0.1')} 0%, transparent 80%)`;

            setTimeout(() => {
                mainContainer.classList.add('hidden');
                
                viewFinal.classList.remove('hidden');
                viewFinal.classList.add('flex');
                
                // Trigger reflow
                void viewFinal.offsetWidth;
                
                viewFinal.classList.remove('opacity-0');
                viewFinal.classList.add('opacity-100');
            }, 500);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="absolute inset-0 z-0 pointer-events-none transition-all duration-700 opacity-60" id="ambient-glow" style={{background: 'radial-gradient(circle at 50% 50%, rgba(155, 17, 30, 0.3) 0%, transparent 60%)'}}></div>

<div className="absolute inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-0 right-0 h-[200%] w-full animate-[pan-stars_60s_linear_infinite]">
<div className="absolute inset-0 star-layer opacity-40"></div>
</div>
<div className="absolute top-0 left-0 right-0 h-[200%] w-full animate-[pan-stars_90s_linear_infinite]">
<div className="absolute inset-0 star-layer-2 opacity-30"></div>
</div>
</div>

<div className="relative z-10 w-full max-w-[380px] mx-4 transition-all duration-500" id="main-container">

<div className="bg-[#0A0A0A] border border-white/[0.08] rounded-[24px] p-10 flex flex-col items-center text-center shadow-2xl transition-all duration-300 transform opacity-100 scale-100" id="view-welcome">
<div className="mb-6 flex justify-center items-center w-24 h-24">
<img alt="Clifford Logo" className="w-full h-full object-contain drop-shadow-md" src="https://static.wikia.nocookie.net/creatures-tycoon/images/7/7e/Clifford_The_Big_Red_Dog.png/revision/latest?cb=20220103161414"/>
</div>
<div className="space-y-3 mb-8">
<h1 className="text-2xl font-semibold text-white tracking-tight">Welcome to Clifford</h1>
<p className="text-base text-zinc-400">
                    Heavily inspired by <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Cherri</span>
</p>
</div>
<button className="bg-[#1C1C1C] hover:bg-[#2A2A2A] text-white text-sm font-medium py-3 px-8 rounded-full border border-white/[0.06] transition-all duration-200 shadow-sm active:scale-95" id="btn-start">
                Get Started
            </button>
</div>

<div className="hidden bg-[#0A0A0A] border border-white/[0.08] rounded-[24px] p-8 flex-col shadow-2xl transition-all duration-300 transform opacity-0 scale-95" id="view-theme">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8 text-center transition-colors duration-300" id="theme-title">Choose a Theme</h2>
<div className="grid grid-cols-2 gap-3 mb-8">
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-[#9b111e] text-white border border-transparent" data-color="#9b111e" data-glow="rgba(155, 17, 30, 0.3)" data-name="Default">Default</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#166534" data-glow="rgba(22, 101, 52, 0.3)" data-name="Forest">Forest</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#be123c" data-glow="rgba(190, 18, 60, 0.3)" data-name="Crimson">Crimson</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#6366f1" data-glow="rgba(99, 102, 241, 0.3)" data-name="Lavendar">Lavendar</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#52525b" data-glow="rgba(82, 82, 91, 0.3)" data-name="Monochrome">Monochrome</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#1e3a8a" data-glow="rgba(30, 58, 138, 0.3)" data-name="Midnight">Midnight</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#c2410c" data-glow="rgba(194, 65, 12, 0.3)" data-name="Sunset">Sunset</button>
<button className="theme-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-color="#0369a1" data-glow="rgba(3, 105, 161, 0.3)" data-name="Ocean">Ocean</button>
</div>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04] active:scale-95 mt-auto" id="btn-theme-continue">
                Continue
            </button>
</div>

<div className="hidden bg-[#0A0A0A] border border-white/[0.08] rounded-[24px] p-8 flex-col shadow-2xl transition-all duration-300 transform opacity-0 scale-95 items-center" id="view-cloak">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8 text-center">Choose a Cloak</h2>
<div className="grid grid-cols-2 gap-3 w-full mb-8">
<button className="cloak-btn active-cloak w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 border border-transparent text-white shadow-lg" data-cloak="None" style={{backgroundColor: 'var(--theme-color)'}}>None</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Google">Google</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Google Docs">Google Docs</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Google Slides">Google Slides</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Canva">Canva</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Blooket">Blooket</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Kahoot">Kahoot</button>
<button className="cloak-btn w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04]" data-cloak="Edpuzzle">Edpuzzle</button>
</div>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-300 border border-white/[0.08] hover:bg-white/[0.04] active:scale-95 mt-auto" id="btn-cloak-continue">
                Continue
            </button>
</div>

<div className="hidden bg-[#0A0A0A] border border-white/[0.08] rounded-[24px] p-8 flex-col shadow-2xl transition-all duration-300 transform opacity-0 scale-95 items-center" id="view-signup">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-8 text-center">Create Your Account</h2>
<div className="w-full flex flex-col gap-3 mb-8 relative">
<input autocomplete="off" className="w-full bg-[#111] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/[0.2] transition-colors" id="signup-user" placeholder="Username" type="text"/>
<input className="w-full bg-[#111] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/[0.2] transition-colors" id="signup-pass" placeholder="Password" type="password"/>
<p className="text-red-400 text-xs text-center absolute -bottom-6 left-0 right-0 hidden font-medium" id="signup-error">Username is taken</p>
</div>
<div className="w-full flex flex-col gap-2 mt-auto">
<button className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 text-white shadow-lg hover:brightness-110 active:scale-95" id="btn-signup-submit" style={{backgroundColor: 'var(--theme-color)'}}>
                    Create Account
                </button>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04] active:scale-95" id="btn-signup-skip">
                    Skip
                </button>
</div>
</div>

<div className="hidden bg-[#0A0A0A] border border-white/[0.08] rounded-[24px] p-8 flex-col shadow-2xl transition-all duration-300 transform opacity-0 scale-95 items-center justify-center text-center" id="view-tos">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Terms of Service</h2>
<p className="text-base text-zinc-400 mb-8 leading-relaxed">
                do you agree to our following terms of service
            </p>
<button className="w-full py-3 rounded-xl text-sm font-medium transition-all duration-200 text-white shadow-lg hover:brightness-110 active:scale-95 w-full" id="btn-tos-agree" style={{backgroundColor: 'var(--theme-color)'}}>
                Agree
            </button>
</div>
</div>

<div className="hidden fixed inset-0 z-50 flex-col items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-1000 opacity-0" id="view-final">
<div className="flex items-center gap-5 z-10 animate-fade-in-up">
<img alt="Clifford Logo" className="w-20 h-20 object-contain drop-shadow-2xl" src="https://static.wikia.nocookie.net/creatures-tycoon/images/7/7e/Clifford_The_Big_Red_Dog.png/revision/latest?cb=20220103161414"/>
<h1 className="text-5xl font-semibold tracking-tight" style={{background: 'linear-gradient(135deg, #ffffff 0%, var(--theme-color) 100%)', WebkitBackgroundClip: 'text', color: 'transparent'}}>Clifford</h1>
</div>
<div className="absolute bottom-12 w-full px-6 text-center z-10 animate-fade-in">
<p className="text-base text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                all them unblocked sites like gn-math, truffled, vaper, infamous are NOTHING compared to <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 tracking-tight">Clifford</span>.
            </p>
</div>
</div>


    </>
  );
}
