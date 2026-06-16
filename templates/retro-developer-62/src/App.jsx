import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gb: {
lightest: '#9bbc0f',
light: '#8bac0f',
dark: '#306230',
darkest: '#0f380f',
}
},
fontFamily: {
retro: ['"Press Start 2P"', 'cursive'],
},
animation: {
'blink': 'blink 1s steps(2, start) infinite',
'scroll-down': 'scrollDown 2.5s ease-out forwards',
},
keyframes: {
blink: {
'0%, 100%': { opacity: '1' },
'50%': { opacity: '0' },
},
scrollDown: {
'0%': { transform: 'translateY(-100px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Icons
        lucide.createIcons();

        // State Management
        const state = {
            currentScreen: 'boot', // boot, menu, about, skills, projects, contact
            menuIndex: 0,
            menuItems: ['START GAME', 'SKILLS', 'PROJECTS', 'CONTACT']
        };

        // DOM Elements
        const screens = {
            boot: document.getElementById('screen-boot'),
            menu: document.getElementById('screen-menu'),
            about: document.getElementById('screen-about'),
            skills: document.getElementById('screen-skills'),
            projects: document.getElementById('screen-projects'),
            contact: document.getElementById('screen-contact')
        };

        const indicators = document.querySelectorAll('.indicator');

        // Navigation Logic
        function updateMenu() {
            indicators.forEach((el, idx) => {
                el.style.opacity = idx === state.menuIndex ? '1' : '0';
            });
        }

        function switchScreen(newScreen) {
            // Hide all
            Object.values(screens).forEach(el => el.classList.add('hidden-screen'));
            
            // Show new
            screens[newScreen].classList.remove('hidden-screen');
            state.currentScreen = newScreen;
        }

        function handleInput(action) {
            if (state.currentScreen === 'boot') {
                if (action === 'start' || action === 'a') {
                    switchScreen('menu');
                }
                return;
            }

            if (state.currentScreen === 'menu') {
                if (action === 'down') {
                    state.menuIndex = (state.menuIndex + 1) % state.menuItems.length;
                    updateMenu();
                } else if (action === 'up') {
                    state.menuIndex = (state.menuIndex - 1 + state.menuItems.length) % state.menuItems.length;
                    updateMenu();
                } else if (action === 'a' || action === 'start') {
                    // Navigate to selection
                    switch (state.menuIndex) {
                        case 0: switchScreen('about'); break;
                        case 1: switchScreen('skills'); break;
                        case 2: switchScreen('projects'); break;
                        case 3: switchScreen('contact'); break;
                    }
                }
                return;
            }

            // Inside Subpages
            if (['about', 'skills', 'projects', 'contact'].includes(state.currentScreen)) {
                if (action === 'b') {
                    switchScreen('menu');
                }
            }
        }

        // Boot Sequence
        window.addEventListener('load', () => {
            setTimeout(() => {
                if (state.currentScreen === 'boot') {
                    switchScreen('menu');
                }
            }, 3000);
        });

        // Event Listeners
        document.getElementById('btn-up').addEventListener('click', () => handleInput('up'));
        document.getElementById('btn-down').addEventListener('click', () => handleInput('down'));
        document.getElementById('btn-a').addEventListener('click', () => handleInput('a'));
        document.getElementById('btn-start').addEventListener('click', () => handleInput('start'));
        document.getElementById('btn-b').addEventListener('click', () => handleInput('b'));

        // Keyboard Support
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp': handleInput('up'); break;
                case 'ArrowDown': handleInput('down'); break;
                case 'Enter': handleInput('a'); break; // Enter acts as A
                case 'z': handleInput('a'); break; 
                case 'x': handleInput('b'); break;
                case 'Escape': handleInput('b'); break;
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative w-full max-w-[420px] bg-stone-200 rounded-t-lg rounded-bl-lg rounded-br-[60px] shadow-2xl border-b-8 border-stone-300 p-6 sm:p-8 flex flex-col gap-8 transform transition-transform duration-300">

<div className="bg-stone-500 rounded-t-lg rounded-b-[40px] p-6 sm:p-8 pt-4 pb-2 relative shadow-inner border-4 border-stone-400">

<div className="flex justify-between text-[10px] text-stone-300/80 mb-1 tracking-wider font-sans font-bold italic">
<span>DOT MATRIX WITH STEREO SOUND</span>
</div>

<div className="absolute left-4 top-[40%] transform -translate-y-1/2 flex flex-col items-center gap-1">
<div className="w-3 h-3 rounded-full bg-red-600 shadow-[0_0_5px_rgba(220,38,38,0.8)] animate-pulse"></div>
<span className="text-[8px] text-stone-300 font-sans font-bold">BATTERY</span>
</div>

<div className="aspect-[10/9] bg-gb-lightest w-full border-4 border-[#4a4a4a] screen-shadow relative overflow-hidden">

<div className="scanlines absolute inset-0 z-50 opacity-30 w-full h-full"></div>

<div className="w-full h-full p-4 relative text-gb-darkest overflow-hidden" id="viewport">

<div className="flex flex-col items-center justify-center h-full w-full absolute inset-0 bg-gb-lightest z-40" id="screen-boot">
<h1 className="text-2xl tracking-tighter animate-scroll-down mb-4 font-black">MARTIN®</h1>
</div>

<div className="hidden-screen h-full flex flex-col justify-between" id="screen-menu">
<div className="text-center border-b-2 border-gb-darkest pb-2 mb-2">
<h2 className="text-xs tracking-tight">MAIN MENU</h2>
</div>
<ul className="flex-1 flex flex-col justify-center space-y-4 px-2">
<li className="flex items-center gap-2 cursor-pointer group" data-menu="0">
<span className="indicator w-4 text-xs opacity-100">&gt;</span>
<span className="text-sm tracking-tight">START GAME</span>
</li>
<li className="flex items-center gap-2 cursor-pointer group" data-menu="1">
<span className="indicator w-4 text-xs opacity-0">&gt;</span>
<span className="text-sm tracking-tight">SKILLS</span>
</li>
<li className="flex items-center gap-2 cursor-pointer group" data-menu="2">
<span className="indicator w-4 text-xs opacity-0">&gt;</span>
<span className="text-sm tracking-tight">PROJECTS</span>
</li>
<li className="flex items-center gap-2 cursor-pointer group" data-menu="3">
<span className="indicator w-4 text-xs opacity-0">&gt;</span>
<span className="text-sm tracking-tight">CONTACT</span>
</li>
</ul>
<div className="text-[8px] text-center mt-2 animate-blink text-gb-dark">
                            PRESS A TO SELECT
                        </div>
</div>

<div className="hidden-screen h-full overflow-y-auto" id="screen-about">
<div className="flex gap-4 mb-4 border-b-2 border-gb-darkest pb-2">
<div className="w-16 h-16 bg-gb-darkest flex items-center justify-center shrink-0">
<i className="w-10 h-10 text-gb-lightest" data-lucide="user"></i>
</div>
<div className="flex flex-col justify-between w-full">
<h3 className="text-xs font-bold">MARTIN</h3>
<div className="text-[10px]">LVL: <span className="text-gb-dark">24</span></div>
<div className="w-full h-2 border border-gb-darkest p-[1px]">
<div className="h-full bg-gb-dark w-[80%]"></div>
</div>
<span className="text-[8px]">CLASS: DEVELOPER</span>
</div>
</div>
<div className="border-2 border-gb-darkest p-2 text-[10px] leading-relaxed bg-gb-light/20">
<p className="mb-2">"Hello world! I craft digital experiences."</p>
<p>Specialized in frontend architecture and pixel-perfect UIs.</p>
</div>
<div className="mt-4 text-[8px] text-center animate-blink">PRESS B TO BACK</div>
</div>

<div className="hidden-screen h-full overflow-y-auto no-scrollbar" id="screen-skills">
<h2 className="text-xs text-center border-b-2 border-gb-darkest pb-2 mb-3">ABILITIES</h2>
<div className="space-y-3">

<div className="space-y-1">
<div className="flex justify-between text-[8px]">
<span>JAVASCRIPT</span>
<span>90/100</span>
</div>
<div className="w-full h-3 border-2 border-gb-darkest p-[1px]">
<div className="h-full bg-gb-darkest w-[90%]"></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[8px]">
<span>REACT/VUE</span>
<span>85/100</span>
</div>
<div className="w-full h-3 border-2 border-gb-darkest p-[1px]">
<div className="h-full bg-gb-darkest w-[85%]"></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[8px]">
<span>NODE.JS</span>
<span>70/100</span>
</div>
<div className="w-full h-3 border-2 border-gb-darkest p-[1px]">
<div className="h-full bg-gb-darkest w-[70%]"></div>
</div>
</div>

<div className="space-y-1">
<div className="flex justify-between text-[8px]">
<span>DESIGN</span>
<span>80/100</span>
</div>
<div className="w-full h-3 border-2 border-gb-darkest p-[1px]">
<div className="h-full bg-gb-darkest w-[80%]"></div>
</div>
</div>
</div>
<div className="mt-4 text-[8px] text-center animate-blink">PRESS B TO BACK</div>
</div>

<div className="hidden-screen h-full flex flex-col" id="screen-projects">
<h2 className="text-xs text-center border-b-2 border-gb-darkest pb-2 mb-2">CARTRIDGES</h2>
<div className="grid grid-cols-2 gap-2 flex-1 content-start">

<div className="aspect-square border-2 border-gb-darkest flex flex-col items-center justify-center p-1 hover:bg-gb-light cursor-pointer group transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="gamepad-2"></i>
<span className="text-[8px] text-center leading-tight">E-COMM ENGINE</span>
</div>

<div className="aspect-square border-2 border-gb-darkest flex flex-col items-center justify-center p-1 hover:bg-gb-light cursor-pointer group transition-colors">
<i className="w-6 h-6 mb-1" data-lucide="zap"></i>
<span className="text-[8px] text-center leading-tight">SAAS DASH</span>
</div>

<div className="aspect-square border-2 border-gb-darkest border-dashed flex flex-col items-center justify-center p-1 opacity-60">
<span className="text-[8px] text-center">EMPTY SLOT</span>
</div>
<div className="aspect-square border-2 border-gb-darkest border-dashed flex flex-col items-center justify-center p-1 opacity-60">
<span className="text-[8px] text-center">EMPTY SLOT</span>
</div>
</div>
<div className="mt-2 text-[8px] text-center animate-blink">PRESS B TO BACK</div>
</div>

<div className="hidden-screen h-full flex flex-col" id="screen-contact">
<h2 className="text-xs text-center border-b-2 border-gb-darkest pb-2 mb-2">MESSAGE</h2>
<div className="flex-1 space-y-2">
<div className="flex flex-col gap-1">
<label className="text-[8px]">TO: MARTIN</label>
<input className="bg-transparent border-b-2 border-gb-darkest text-[10px] p-1 focus:outline-none placeholder-gb-dark/50 font-retro w-full" placeholder="YOUR NAME" type="text"/>
</div>
<div className="flex flex-col gap-1">
<input className="bg-transparent border-b-2 border-gb-darkest text-[10px] p-1 focus:outline-none placeholder-gb-dark/50 font-retro w-full" placeholder="EMAIL" type="email"/>
</div>
<div className="flex flex-col gap-1">
<textarea className="bg-transparent border-2 border-gb-darkest text-[10px] p-1 focus:outline-none placeholder-gb-dark/50 font-retro w-full resize-none" placeholder="MESSAGE..." rows="2"></textarea>
</div>
</div>
<button className="mt-2 w-full bg-gb-darkest text-gb-lightest py-2 text-[10px] hover:opacity-90 active:translate-y-1">SEND PACKET</button>
<div className="mt-1 text-[8px] text-center">PRESS B TO BACK</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-40 left-8 text-blue-900 font-serif italic text-xl font-bold tracking-wide opacity-80" style={{fontFamily: '\'Times New Roman\', serif'}}>
            Nintendo <span className="text-sm font-normal uppercase tracking-widest ml-1">GAME BOY</span>TM
        </div>

<div className="h-64 relative">

<div className="absolute left-4 top-8 w-28 h-28">
<div className="relative w-full h-full">
<div className="absolute left-1/3 top-0 w-1/3 h-full bg-stone-900 rounded shadow-md border-b-2 border-r-2 border-stone-950"></div>
<div className="absolute left-0 top-1/3 w-full h-1/3 bg-stone-900 rounded shadow-md border-b-2 border-r-2 border-stone-950"></div>

<div className="absolute left-1/3 top-1/3 w-1/3 h-1/3">
<div className="w-full h-full bg-stone-800 rounded-full opacity-50 scale-75"></div>
</div>

<button aria-label="Up" className="absolute top-0 left-1/3 w-1/3 h-1/3 z-20 active:bg-white/10" id="btn-up"></button>
<button aria-label="Down" className="absolute bottom-0 left-1/3 w-1/3 h-1/3 z-20 active:bg-white/10" id="btn-down"></button>
<button aria-label="Left" className="absolute left-0 top-1/3 w-1/3 h-1/3 z-20 active:bg-white/10" id="btn-left"></button>
<button aria-label="Right" className="absolute right-0 top-1/3 w-1/3 h-1/3 z-20 active:bg-white/10" id="btn-right"></button>
</div>
</div>

<div className="absolute right-4 top-12 w-32 h-16 flex justify-end gap-6 transform -rotate-12">
<div className="flex flex-col items-center gap-1 group">
<button className="w-10 h-10 rounded-full bg-red-700 shadow-[2px_2px_0px_#500] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all border-b-2 border-r-2 border-red-900" id="btn-b"></button>
<span className="text-stone-400 font-bold text-xs tracking-widest group-active:text-red-700">B</span>
</div>
<div className="flex flex-col items-center gap-1 group mt-[-10px]">
<button className="w-10 h-10 rounded-full bg-red-700 shadow-[2px_2px_0px_#500] active:shadow-none active:translate-y-[2px] active:translate-x-[2px] transition-all border-b-2 border-r-2 border-red-900" id="btn-a"></button>
<span className="text-stone-400 font-bold text-xs tracking-widest group-active:text-red-700">A</span>
</div>
</div>

<div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4">
<div className="flex flex-col items-center gap-1">
<button className="w-12 h-3 bg-stone-400 rounded-full transform rotate-12 shadow shadow-stone-500 active:shadow-none active:translate-y-[1px] border border-stone-500" id="btn-select"></button>
<span className="text-[8px] tracking-widest text-stone-400 font-bold uppercase mt-1">Select</span>
</div>
<div className="flex flex-col items-center gap-1">
<button className="w-12 h-3 bg-stone-400 rounded-full transform rotate-12 shadow shadow-stone-500 active:shadow-none active:translate-y-[1px] border border-stone-500" id="btn-start"></button>
<span className="text-[8px] tracking-widest text-stone-400 font-bold uppercase mt-1">Start</span>
</div>
</div>

<div className="absolute bottom-4 right-6 flex gap-2 transform -rotate-12 opacity-30">
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
<div className="w-1.5 h-16 bg-stone-900 rounded-full"></div>
</div>
</div>
</div>

<audio id="sfx-blip" src="data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU..."></audio>


    </>
  );
}
