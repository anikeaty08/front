import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const views = {
            tasks: document.getElementById('view-tasks'),
            loading: document.getElementById('view-loading'),
            menu: document.getElementById('view-menu'),
            game: document.getElementById('view-game')
        };
        const loadingText = document.getElementById('loading-text');

        // Simulation State
        const simState = {
            auto: false,
            interval: null,
            busy: false,
            goku: {
                hp: 100, ki: 100, formIndex: 0,
                forms: [
                    { name: 'Base', bg: 'from-orange-600 to-orange-400', shadow: 'rgba(249,115,22,0.4)', aura: 'bg-orange-500/20', beamColor: 'bg-cyan-400' },
                    { name: 'SSJ', bg: 'from-yellow-500 to-yellow-300', shadow: 'rgba(234,179,8,0.6)', aura: 'bg-yellow-400/40', beamColor: 'bg-yellow-400' },
                    { name: 'SSGSS', bg: 'from-cyan-600 to-cyan-400', shadow: 'rgba(34,211,238,0.6)', aura: 'bg-cyan-400/40', beamColor: 'bg-cyan-300' },
                    { name: 'Ultra Instinct', bg: 'from-zinc-300 to-white', shadow: 'rgba(255,255,255,0.8)', aura: 'bg-white/30', beamColor: 'bg-white' }
                ]
            },
            vegeta: {
                hp: 100, ki: 100, formIndex: 0,
                forms: [
                    { name: 'Base', bg: 'from-blue-700 to-blue-500', shadow: 'rgba(59,130,246,0.4)', aura: 'bg-blue-600/20', beamColor: 'bg-purple-500' },
                    { name: 'SSJ', bg: 'from-yellow-500 to-yellow-300', shadow: 'rgba(234,179,8,0.6)', aura: 'bg-yellow-400/40', beamColor: 'bg-yellow-400' },
                    { name: 'SSGSS', bg: 'from-cyan-600 to-cyan-400', shadow: 'rgba(34,211,238,0.6)', aura: 'bg-cyan-400/40', beamColor: 'bg-cyan-300' },
                    { name: 'SSBE', bg: 'from-indigo-700 to-indigo-400', shadow: 'rgba(99,102,241,0.8)', aura: 'bg-indigo-500/40', beamColor: 'bg-indigo-400' }
                ]
            }
        };

        function hideAllViews() { Object.values(views).forEach(v => v.classList.add('hidden')); }

        function startPlaytestFlow() {
            hideAllViews();
            views.loading.classList.remove('hidden');
            loadingText.innerText = "Initializing Engine...";
            setTimeout(() => { hideAllViews(); views.menu.classList.remove('hidden'); }, 1200);
        }

        function launchGame(modeName) {
            hideAllViews();
            views.loading.classList.remove('hidden');
            loadingText.innerText = `Loading ${modeName}...`;
            setTimeout(() => {
                hideAllViews();
                views.game.classList.remove('hidden');
                resetSimulation();
            }, 1500);
        }

        function exitGame() {
            if(simState.auto) toggleAutoFight();
            hideAllViews();
            views.menu.classList.remove('hidden');
        }

        function exitToTasks() { hideAllViews(); views.tasks.classList.remove('hidden'); }

        // Core Simulation Functions
        function updateUI() {
            ['goku', 'vegeta'].forEach(char => {
                const data = simState[char];
                // HP
                document.getElementById(`${char}-hp-bar`).style.width = `${data.hp}%`;
                document.getElementById(`${char}-hp-text`).innerText = `${data.hp}%`;
                if(data.hp < 30) document.getElementById(`${char}-hp-bar`).className = 'h-full bg-gradient-to-r from-red-600 to-red-400 w-full rounded-[2px] transition-all duration-300';
                else document.getElementById(`${char}-hp-bar`).className = `h-full bg-gradient-to-${char==='goku'?'r':'l'} from-emerald-600 to-emerald-400 w-full rounded-[2px] transition-all duration-300`;
                
                // KI
                document.getElementById(`${char}-ki-bar`).style.width = `${data.ki}%`;
                
                // Form Visuals
                const form = data.forms[data.formIndex];
                document.getElementById(`${char}-form-text`).innerText = form.name;
                const body = document.getElementById(`${char}-body`);
                body.className = `w-16 h-32 rounded-t-full bg-gradient-to-t ${form.bg} relative z-10 transition-all duration-500 flex items-center justify-center`;
                body.style.boxShadow = `0 0 20px ${form.shadow}`;
                document.getElementById(`${char}-aura`).className = `absolute inset-0 -inset-x-8 -inset-y-12 blur-2xl rounded-full opacity-50 animate-pulse transition-colors duration-500 ${form.aura}`;
            });
        }

        function showLog(text) {
            const log = document.getElementById('action-log');
            log.innerText = text;
            log.style.opacity = '1';
            setTimeout(() => { log.style.opacity = '0'; }, 2000);
        }

        function flashScreen() {
            const screen = document.getElementById('screen-flash');
            screen.style.opacity = '0.3';
            setTimeout(() => screen.style.opacity = '0', 150);
        }

        // Actions
        function chargeKi(char) {
            if(simState.busy) return;
            simState[char].ki = Math.min(100, simState[char].ki + 40);
            showLog(`${char.toUpperCase()} is charging Ki!`);
            const charEl = document.getElementById(`${char}-char`);
            charEl.classList.add('animate-bounce');
            updateUI();
            setTimeout(() => charEl.classList.remove('animate-bounce'), 1000);
        }

        function transform(char) {
            if(simState.busy) return;
            const data = simState[char];
            if(data.ki < 50 && data.formIndex < data.forms.length - 1) {
                showLog(`Not enough Ki to transform!`); return;
            }
            if(data.formIndex < data.forms.length - 1) {
                data.ki -= 50;
                data.formIndex++;
                flashScreen();
                showLog(`${char.toUpperCase()} transformed to ${data.forms[data.formIndex].name}!`);
                updateUI();
            } else {
                showLog(`${char.toUpperCase()} is at max power!`);
            }
        }

        function performMove(attacker, moveType) {
            if(simState.busy) return;
            const defender = attacker === 'goku' ? 'vegeta' : 'goku';
            const attData = simState[attacker];
            
            if(moveType === 'attack') {
                showLog(`${attacker.toUpperCase()} uses Twin Dragon Rush!`);
                executePunchClash(attacker, defender);
            } else if (moveType === 'beam') {
                if(attData.ki < 30) { showLog("Not enough Ki!"); return; }
                attData.ki -= 30;
                showLog(`${attacker.toUpperCase()} fires a Beam!`);
                executeBeam(attacker, defender, false);
            } else if (moveType === 'ultimate') {
                if(attData.ki < 80) { showLog("Need 80 Ki for Ultimate!"); return; }
                attData.ki -= 80;
                showLog(`${attacker.toUpperCase()} uses Ultimate Attack!`);
                flashScreen();
                executeBeam(attacker, defender, true);
            }
            updateUI();
        }

        // Cinematic Animations
        function executePunchClash(attacker, defender) {
            simState.busy = true;
            const attEl = document.getElementById(`${attacker}-char`);
            const defEl = document.getElementById(`${defender}-char`);
            const sparks = document.getElementById('punch-sparks');

            // Move to center
            attEl.style.transform = attacker === 'goku' ? 'translateX(100px)' : 'translateX(-100px)';
            defEl.style.transform = defender === 'vegeta' ? 'translateX(-100px)' : 'translateX(100px)';
            
            setTimeout(() => {
                sparks.style.opacity = '1';
                attEl.style.transform += ' scale(1.1)';
                defEl.style.transform += ' scale(1.1)';
                simState[defender].hp = Math.max(0, simState[defender].hp - (10 + simState[attacker].formIndex * 5));
                updateUI();
                checkWin(defender);
            }, 300);

            setTimeout(() => {
                sparks.style.opacity = '0';
                attEl.style.transform = 'translateX(0) scale(1)';
                defEl.style.transform = 'translateX(0) scale(1)';
                simState.busy = false;
            }, 800);
        }

        function executeBeam(attacker, defender, isUltimate) {
            simState.busy = true;
            const attData = simState[attacker];
            const defData = simState[defender];
            
            // Random chance for beam clash if defender has ki
            if(defData.ki >= 30 && Math.random() > 0.5 && !isUltimate) {
                defData.ki -= 30;
                executeBeamClash(attacker, defender);
                return;
            }

            const beam = document.getElementById(`beam-${attacker === 'goku' ? 'left' : 'right'}`);
            beam.className = `absolute ${attacker === 'goku' ? 'left-32 right-1/4' : 'right-32 left-1/4'} h-${isUltimate? '16':'8'} ${attData.forms[attData.formIndex].beamColor} rounded-${attacker === 'goku'?'r':'l'}-full opacity-100 shadow-[0_0_40px_rgba(255,255,255,0.8)] origin-${attacker === 'goku'?'left':'right'} transition-all duration-300 transform scale-x-100 blur-[1px] z-20`;
            
            setTimeout(() => {
                flashScreen();
                const damage = isUltimate ? 40 : 20 + (attData.formIndex * 5);
                simState[defender].hp = Math.max(0, defData.hp - damage);
                updateUI();
                checkWin(defender);
                
                // Shake defender
                const defEl = document.getElementById(`${defender}-char`);
                defEl.style.transform = attacker === 'goku' ? 'translateX(20px)' : 'translateX(-20px)';
                setTimeout(() => defEl.style.transform = 'translateX(0)', 200);
            }, 300);

            setTimeout(() => {
                beam.style.opacity = '0';
                beam.style.transform = 'scaleX(0)';
                simState.busy = false;
            }, 800);
        }

        function executeBeamClash() {
            showLog("BEAM CLASH!");
            const gokuBeam = document.getElementById('beam-left');
            const vegetaBeam = document.getElementById('beam-right');
            const impact = document.getElementById('clash-impact');
            const bg = document.getElementById('arena-bg');
            
            const gColor = simState.goku.forms[simState.goku.formIndex].beamColor;
            const vColor = simState.vegeta.forms[simState.vegeta.formIndex].beamColor;

            gokuBeam.className = `absolute left-32 right-1/2 h-10 ${gColor} rounded-r-full opacity-100 shadow-[0_0_30px_rgba(255,255,255,0.8)] origin-left transition-all duration-300 transform scale-x-100 blur-[1px] z-20`;
            vegetaBeam.className = `absolute right-32 left-1/2 h-10 ${vColor} rounded-l-full opacity-100 shadow-[0_0_30px_rgba(255,255,255,0.8)] origin-right transition-all duration-300 transform scale-x-100 blur-[1px] z-20`;
            
            setTimeout(() => {
                impact.style.opacity = '1';
                impact.style.transform = 'scale(1.5)';
                bg.classList.add('bg-zinc-800');
            }, 300);

            // Determine winner randomly based on forms
            setTimeout(() => {
                const gokuPower = Math.random() + (simState.goku.formIndex * 0.2);
                const vegetaPower = Math.random() + (simState.vegeta.formIndex * 0.2);
                
                if(gokuPower > vegetaPower) {
                    gokuBeam.classList.replace('right-1/2', 'right-32');
                    vegetaBeam.style.opacity = '0';
                    simState.vegeta.hp = Math.max(0, simState.vegeta.hp - 25);
                    showLog("GOKU WINS CLASH!");
                } else {
                    vegetaBeam.classList.replace('left-1/2', 'left-32');
                    gokuBeam.style.opacity = '0';
                    simState.goku.hp = Math.max(0, simState.goku.hp - 25);
                    showLog("VEGETA WINS CLASH!");
                }
                updateUI();
                checkWin(gokuPower > vegetaPower ? 'vegeta' : 'goku');
            }, 1500);

            setTimeout(() => {
                gokuBeam.style.opacity = '0'; gokuBeam.style.transform = 'scaleX(0)';
                vegetaBeam.style.opacity = '0'; vegetaBeam.style.transform = 'scaleX(0)';
                impact.style.opacity = '0'; impact.style.transform = 'scale(0.5)';
                bg.classList.remove('bg-zinc-800');
                simState.busy = false;
            }, 2000);
        }

        function checkWin(defender) {
            if(simState[defender].hp <= 0) {
                simState.busy = true;
                if(simState.auto) toggleAutoFight();
                showLog(`${defender === 'goku' ? 'VEGETA' : 'GOKU'} WINS!`);
                const defEl = document.getElementById(`${defender}-char`);
                defEl.style.transform = 'rotate(90deg) translateY(50px)';
                defEl.style.opacity = '0.5';
                
                setTimeout(resetSimulation, 3000);
            }
        }

        function resetSimulation() {
            simState.goku = { ...simState.goku, hp: 100, ki: 100, formIndex: 0 };
            simState.vegeta = { ...simState.vegeta, hp: 100, ki: 100, formIndex: 0 };
            simState.busy = false;
            document.getElementById('goku-char').style = "";
            document.getElementById('vegeta-char').style = "";
            updateUI();
            showLog("FIGHT!");
        }

        // Auto Fight Logic
        function toggleAutoFight() {
            simState.auto = !simState.auto;
            const icon = document.getElementById('auto-icon');
            const label = document.getElementById('mode-label');
            const ind = document.getElementById('auto-indicator');
            
            if(simState.auto) {
                icon.icon = "solar:pause-linear";
                label.innerText = "AUTO MODE ACTIVE (Y)";
                label.classList.add('text-white');
                ind.classList.add('border-white/50');
                simState.interval = setInterval(autoFightTick, 1500);
            } else {
                icon.icon = "solar:play-linear";
                label.innerText = "PRESS Y TO AUTO";
                label.classList.remove('text-white');
                ind.classList.remove('border-white/50');
                clearInterval(simState.interval);
            }
        }

        function autoFightTick() {
            if(simState.busy) return;
            const chars = ['goku', 'vegeta'];
            const actor = chars[Math.floor(Math.random() * 2)];
            const actions = ['attack', 'beam', 'charge', 'transform'];
            let action = actions[Math.floor(Math.random() * actions.length)];
            
            // Basic AI weighting
            const data = simState[actor];
            if(data.ki < 30) action = 'charge';
            if(data.ki > 50 && data.formIndex < data.forms.length - 1 && Math.random() > 0.5) action = 'transform';
            if(data.ki > 80 && Math.random() > 0.7) action = 'ultimate';

            if(action === 'charge') chargeKi(actor);
            else if(action === 'transform') transform(actor);
            else performMove(actor, action);
        }

        // Keyboard Listener
        document.addEventListener('keydown', (e) => {
            if(e.key.toLowerCase() === 'y' && !views.game.classList.contains('hidden')) {
                toggleAutoFight();
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<aside className="hidden md:flex flex-col w-64 border-r border-white/5 bg-zinc-950/50 p-4 z-20">
<div className="flex items-center gap-3 mb-8 px-2">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center">
<span className="text-xs font-semibold tracking-tighter text-zinc-950">DBZ</span>
</div>
<span className="text-sm font-medium text-white tracking-tight">Project Arena</span>
</div>
<nav className="flex flex-col gap-1">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-white bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-base text-zinc-400" icon="solar:checklist-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Implementation Plan
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Levels &amp; Maps
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Blueprints
            </a>
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Camera Setup
            </a>
</nav>
<div className="mt-auto">
<a className="flex items-center gap-3 px-2 py-1.5 text-sm font-medium text-zinc-500 hover:text-white hover:bg-white/5 rounded-md transition-colors" href="#">
<iconify-icon className="text-base text-zinc-500" icon="solar:settings-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Project Settings
            </a>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<div className="flex-1 flex flex-col h-full w-full" id="view-tasks">
<header className="h-14 border-b border-white/5 flex items-center justify-between px-6 shrink-0 bg-zinc-950/80 backdrop-blur-md z-10">
<div className="flex items-center gap-2 text-sm text-zinc-500">
<span className="hover:text-zinc-300 cursor-pointer transition-colors">Playtest</span>
<span className="text-zinc-700">/</span>
<span className="text-zinc-300 font-medium">Environment Setup</span>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors px-3 py-1.5 rounded-md border border-transparent hover:border-white/10 hover:bg-white/5">
<iconify-icon className="text-sm" icon="solar:export-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Export Prompts
                    </button>
<button className="flex items-center gap-2 text-xs font-medium bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-3 py-1.5 rounded-md shadow-sm" onclick="startPlaytestFlow()">
<iconify-icon className="text-sm" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Launch Playtest
                    </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-6 lg:p-10">
<div className="max-w-3xl mx-auto">
<div className="mb-8">
<h1 className="text-2xl font-semibold tracking-tight text-white mb-2">Engine Setup Prompts</h1>
<p className="text-sm text-zinc-500 leading-relaxed">Execute these generation prompts sequentially in your AI coding assistant or implement them directly in Unreal Engine to configure the base playtest environment.</p>
</div>
<div className="flex flex-col gap-4">
<div className="group relative flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
<label className="relative flex items-start mt-0.5 cursor-pointer shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-colors">
<iconify-icon className="text-zinc-950 text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</label>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-100">1. 3D fighting test level setup</h3>
<button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 text-zinc-400 hover:text-white" title="Copy Prompt">
<iconify-icon className="text-sm" icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="text-sm text-zinc-400 space-y-3 leading-relaxed">
<p>Create a new 3D fighting test level called <code className="text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-white/5 px-1 py-0.5 rounded">DBZ_BattleArena_Test</code>.</p>
<p>Add a flat arena platform (about 80x80 meters) with a clear sky and bright lighting.</p>
<p>Place PlayerStart for Player 1 on the left side and PlayerStart for Player 2 on the right side, facing each other.</p>
<p>Add simple collision walls or invisible blocking volumes around the edges so players can't fall off.</p>
<p>Set this level as the default map when I press Play in the editor.</p>
</div>
</div>
</div>
<div className="group relative flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
<label className="relative flex items-start mt-0.5 cursor-pointer shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-colors">
<iconify-icon className="text-zinc-950 text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</label>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-100">2. Spawn fighters and hook up controls</h3>
<button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 text-zinc-400 hover:text-white" title="Copy Prompt">
<iconify-icon className="text-sm" icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="text-sm text-zinc-400 space-y-3 leading-relaxed">
<p>In <code className="text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-white/5 px-1 py-0.5 rounded">DBZ_BattleArena_Test</code>, set up a two‑player fighting scenario:</p>
<p>Use my main character Blueprint <code className="text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-white/5 px-1 py-0.5 rounded">BP_GokuStyle</code> as Player 1 and <code className="text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-white/5 px-1 py-0.5 rounded">BP_VegetaStyle</code> as Player 2.</p>
<p>Make sure Player 1 is possessed by the local player controller when I press Play.</p>
<p>Give Player 2 a simple AI that walks toward Player 1 and randomly uses light, heavy, and ki blast attacks.</p>
<p>Ensure WASD (or left stick), jump, light attack, heavy attack, ki blast, block, and dash inputs are mapped and working for Player 1.</p>
</div>
</div>
</div>
<div className="group relative flex items-start gap-4 p-5 rounded-xl border border-white/5 bg-zinc-900/30 hover:bg-zinc-900/60 hover:border-white/10 transition-all">
<label className="relative flex items-start mt-0.5 cursor-pointer shrink-0">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-zinc-700 bg-zinc-950 peer-checked:bg-white peer-checked:border-white flex items-center justify-center transition-colors">
<iconify-icon className="text-zinc-950 text-xs opacity-0 peer-checked:opacity-100 transition-opacity" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</label>
<div className="flex-1">
<div className="flex items-center justify-between mb-2">
<h3 className="text-sm font-medium text-zinc-100">3. Dragon Ball–style camera and UI for playtesting</h3>
<button className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center w-6 h-6 rounded hover:bg-white/10 text-zinc-400 hover:text-white" title="Copy Prompt">
<iconify-icon className="text-sm" icon="solar:copy-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="text-sm text-zinc-400 space-y-3 leading-relaxed">
<p>Configure a third‑person fighting camera for <code className="text-xs font-medium text-zinc-300 bg-zinc-800/50 border border-white/5 px-1 py-0.5 rounded">DBZ_BattleArena_Test</code>:</p>
<p>Always frame both fighters in view, zooming out slightly as they move apart and in as they get close.</p>
<p>Lock the camera to a side‑view style (slight angle is okay) so the fight is readable, like a 3D arena fighter.</p>
<p>Add a simple HUD: health bars for both fighters at the top, and a ki/energy bar at the bottom for each fighter.</p>
<p>Show round win text when one fighter's health hits zero, then automatically reset both fighters to their spawn positions after 3 seconds.</p>
</div>
</div>
</div>
</div>
</div>
<div className="h-16"></div>
</div>
</div>

<div className="hidden absolute inset-0 bg-zinc-950 z-50 flex flex-col items-center justify-center backdrop-blur-md" id="view-loading">
<div className="w-8 h-8 border-2 border-zinc-800 border-t-white rounded-full animate-spin mb-6"></div>
<p className="text-sm font-medium text-zinc-400 tracking-wide animate-pulse" id="loading-text">Initializing Engine...</p>
</div>

<div className="hidden absolute inset-0 bg-zinc-950 z-40 flex flex-col items-center justify-center p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/50 via-zinc-950 to-zinc-950" id="view-menu">
<div className="max-w-4xl w-full">
<div className="flex flex-col items-center text-center mb-12">
<span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">Project Arena Build v0.1</span>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6">Select Game Mode</h2>
<button className="text-xs font-medium text-zinc-400 hover:text-white transition-colors border border-white/10 hover:border-white/20 hover:bg-white/5 px-4 py-2 rounded-full" onclick="exitToTasks()">
                        Return to Workspace
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
<button className="group text-left p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col h-full ring-1 ring-inset ring-transparent hover:ring-white/5" onclick="launchGame('Story Mode')">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors mb-5 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:book-bookmark-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2">Story Mode</h3>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">Experience the narrative campaign, progress through sagas, and unlock new characters.</p>
</button>
<button className="group text-left p-6 rounded-2xl border border-blue-500/20 bg-blue-900/10 hover:bg-blue-900/20 hover:border-blue-500/40 transition-all flex flex-col h-full ring-1 ring-inset ring-transparent hover:ring-blue-500/20 relative overflow-hidden" onclick="launchGame('Free Roam Simulation')">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-blue-950/50 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-blue-300 group-hover:bg-blue-900/50 transition-colors mb-5 shadow-sm relative z-10">
<iconify-icon className="text-2xl" icon="solar:map-arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2 relative z-10">Free Roam &amp; Sim</h3>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto relative z-10">Launch interactive combat simulator. Test powers, forms, and cinematic clashes.</p>
</button>
<button className="group text-left p-6 rounded-2xl border border-white/5 bg-zinc-900/30 hover:bg-white/5 hover:border-white/10 transition-all flex flex-col h-full ring-1 ring-inset ring-transparent hover:ring-white/5" onclick="launchGame('Battle Mode')">
<div className="w-12 h-12 rounded-xl bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/10 transition-colors mb-5 shadow-sm">
<iconify-icon className="text-2xl" icon="solar:gamepad-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-zinc-100 mb-2">Battle Mode</h3>
<p className="text-sm text-zinc-500 leading-relaxed mt-auto">1v1 arena fighting test environment. Customize rules and select fighters.</p>
</button>
</div>
</div>
</div>

<div className="hidden absolute inset-0 bg-zinc-950 z-50 overflow-hidden flex flex-col" id="view-game">

<div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 via-zinc-950 to-zinc-950 transition-colors duration-1000" id="arena-bg">
<div className="absolute bottom-0 w-full h-1/2 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
<div className="absolute bottom-1/2 w-full h-px bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>

<div className="absolute inset-0 bg-white opacity-0 pointer-events-none transition-opacity duration-150 z-20" id="screen-flash"></div>

<div className="absolute bottom-[30%] left-0 right-0 h-48 flex items-end justify-between px-32 z-10 perspective-[1000px]">

<div className="relative flex flex-col items-center transition-all duration-300 ease-in-out" id="goku-char">
<div className="absolute inset-0 -inset-x-8 -inset-y-12 bg-orange-500/20 blur-2xl rounded-full opacity-50 animate-pulse transition-colors duration-500" id="goku-aura"></div>
<div className="text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase relative z-10" id="goku-form-text">Base</div>
<div className="w-16 h-32 rounded-t-full bg-gradient-to-t from-orange-600 to-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.4)] relative z-10 transition-all duration-500 flex items-center justify-center" id="goku-body">
<span className="text-xs font-semibold tracking-tighter text-white/80">GOKU</span>
</div>
<div className="w-24 h-4 bg-black/60 blur-md rounded-full mt-2 absolute -bottom-4"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">

<div className="absolute left-32 right-1/2 h-8 bg-cyan-400 rounded-r-full opacity-0 shadow-[0_0_30px_rgba(34,211,238,0.8)] origin-left transition-all duration-300 transform scale-x-0 blur-[1px]" id="beam-left">
<div className="absolute inset-y-1 inset-x-0 bg-white rounded-r-full blur-[2px]"></div>
</div>

<div className="absolute right-32 left-1/2 h-8 bg-purple-500 rounded-l-full opacity-0 shadow-[0_0_30px_rgba(168,85,247,0.8)] origin-right transition-all duration-300 transform scale-x-0 blur-[1px]" id="beam-right">
<div className="absolute inset-y-1 inset-x-0 bg-white rounded-l-full blur-[2px]"></div>
</div>

<div className="w-48 h-48 bg-white rounded-full opacity-0 blur-2xl shadow-[0_0_100px_rgba(255,255,255,1)] transition-opacity duration-150 transform scale-50" id="clash-impact"></div>

<div className="absolute text-yellow-300 opacity-0 transition-opacity duration-100" id="punch-sparks">
<iconify-icon className="text-6xl animate-spin" icon="solar:star-fall-minimalistic-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="relative flex flex-col items-center transition-all duration-300 ease-in-out" id="vegeta-char">
<div className="absolute inset-0 -inset-x-8 -inset-y-12 bg-blue-600/20 blur-2xl rounded-full opacity-50 animate-pulse transition-colors duration-500" id="vegeta-aura"></div>
<div className="text-xs font-semibold text-white/50 mb-2 tracking-widest uppercase relative z-10" id="vegeta-form-text">Base</div>
<div className="w-16 h-32 rounded-t-full bg-gradient-to-t from-blue-700 to-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)] relative z-10 transition-all duration-500 flex items-center justify-center" id="vegeta-body">
<span className="text-xs font-semibold tracking-tighter text-white/80">VEGETA</span>
</div>
<div className="w-24 h-4 bg-black/60 blur-md rounded-full mt-2 absolute -bottom-4"></div>
</div>
</div>
</div>

<div className="relative z-20 flex-1 flex flex-col p-6 lg:p-8 pointer-events-none">

<div className="absolute top-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
<span className="text-sm font-semibold text-white bg-black/50 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md opacity-0 transition-opacity duration-300 shadow-lg tracking-tight" id="action-log">FIGHT!</span>
</div>

<div className="flex items-start justify-between gap-8 lg:gap-12">
<div className="flex-1 max-w-sm pointer-events-auto">
<div className="flex justify-between text-xs font-semibold text-white mb-2 tracking-wide uppercase">
<span className="drop-shadow-md">Goku</span>
<span className="text-emerald-400" id="goku-hp-text">100%</span>
</div>
<div className="h-3.5 w-full bg-black/50 backdrop-blur-sm rounded border border-white/20 p-px shadow-xl">
<div className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 w-full rounded-[2px] transition-all duration-300" id="goku-hp-bar"></div>
</div>
</div>
<div className="flex flex-col items-center shrink-0 pointer-events-auto cursor-pointer group" onclick="toggleAutoFight()">
<span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-widest mb-1 group-hover:text-white transition-colors" id="mode-label">PRESS Y TO AUTO</span>
<div className="w-14 h-14 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-xl group-hover:border-white/30 transition-all" id="auto-indicator">
<iconify-icon className="text-2xl text-zinc-400 group-hover:text-white transition-colors" icon="solar:play-linear" id="auto-icon" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex-1 max-w-sm pointer-events-auto">
<div className="flex justify-between text-xs font-semibold text-white mb-2 tracking-wide uppercase">
<span className="text-emerald-400" id="vegeta-hp-text">100%</span>
<span className="drop-shadow-md">Vegeta</span>
</div>
<div className="h-3.5 w-full bg-black/50 backdrop-blur-sm rounded border border-white/20 p-px shadow-xl flex justify-end">
<div className="h-full bg-gradient-to-l from-emerald-600 to-emerald-400 w-full rounded-[2px] transition-all duration-300" id="vegeta-hp-bar"></div>
</div>
</div>
</div>

<div className="mt-auto flex flex-col gap-6 pointer-events-auto">

<div className="flex justify-between w-full">
<div className="w-64">
<span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-widest mb-1.5 block drop-shadow-md">KI Energy</span>
<div className="h-2 w-full bg-black/50 rounded-sm border border-white/10 p-px">
<div className="h-full bg-cyan-500 w-full rounded-[1px] shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" id="goku-ki-bar"></div>
</div>
</div>
<div className="w-64 flex flex-col items-end">
<span className="text-[10px] font-semibold text-cyan-400 uppercase tracking-widest mb-1.5 block drop-shadow-md">KI Energy</span>
<div className="h-2 w-full bg-black/50 rounded-sm border border-white/10 p-px flex justify-end">
<div className="h-full bg-cyan-500 w-full rounded-[1px] shadow-[0_0_10px_rgba(6,182,212,0.5)] transition-all duration-300" id="vegeta-ki-bar"></div>
</div>
</div>
</div>

<div className="flex items-end justify-between w-full bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-2xl relative">
<button className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-xs font-medium text-white/70 hover:text-white transition-colors px-4 py-1.5 rounded-full bg-zinc-900 border border-white/10" onclick="exitGame()">
<iconify-icon className="text-sm" icon="solar:close-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Exit Simulator
                        </button>

<div className="flex gap-2">
<button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-white transition-colors flex flex-col items-center gap-1" onclick="performMove('goku', 'attack')">
<iconify-icon className="text-lg text-zinc-400" icon="solar:hand-fist-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Barrage
                            </button>
<button className="px-3 py-2 rounded-lg bg-cyan-900/30 hover:bg-cyan-900/50 border border-cyan-500/20 text-xs font-medium text-cyan-100 transition-colors flex flex-col items-center gap-1" onclick="performMove('goku', 'beam')">
<iconify-icon className="text-lg text-cyan-400" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Kamehameha
                            </button>
<button className="px-3 py-2 rounded-lg bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 text-xs font-medium text-blue-100 transition-colors flex flex-col items-center gap-1" onclick="performMove('goku', 'ultimate')">
<iconify-icon className="text-lg text-blue-400" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Spirit Bomb
                            </button>
<div className="w-px h-10 bg-white/10 self-center mx-1"></div>
<button className="px-3 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 border border-white/5 text-xs font-medium text-zinc-300 transition-colors flex flex-col items-center gap-1" onclick="chargeKi('goku')">
<iconify-icon className="text-lg text-zinc-400" icon="solar:battery-charge-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Charge
                            </button>
<button className="px-3 py-2 rounded-lg bg-yellow-900/20 hover:bg-yellow-900/40 border border-yellow-500/20 text-xs font-medium text-yellow-100 transition-colors flex flex-col items-center gap-1" onclick="transform('goku')">
<iconify-icon className="text-lg text-yellow-400" icon="solar:upload-track-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Form
                            </button>
</div>

<div className="flex gap-2">
<button className="px-3 py-2 rounded-lg bg-yellow-900/20 hover:bg-yellow-900/40 border border-yellow-500/20 text-xs font-medium text-yellow-100 transition-colors flex flex-col items-center gap-1" onclick="transform('vegeta')">
<iconify-icon className="text-lg text-yellow-400" icon="solar:upload-track-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Form
                            </button>
<button className="px-3 py-2 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 border border-white/5 text-xs font-medium text-zinc-300 transition-colors flex flex-col items-center gap-1" onclick="chargeKi('vegeta')">
<iconify-icon className="text-lg text-zinc-400" icon="solar:battery-charge-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Charge
                            </button>
<div className="w-px h-10 bg-white/10 self-center mx-1"></div>
<button className="px-3 py-2 rounded-lg bg-yellow-900/30 hover:bg-yellow-900/50 border border-yellow-500/20 text-xs font-medium text-yellow-100 transition-colors flex flex-col items-center gap-1" onclick="performMove('vegeta', 'ultimate')">
<iconify-icon className="text-lg text-yellow-400" icon="solar:moon-stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Final Flash
                            </button>
<button className="px-3 py-2 rounded-lg bg-purple-900/30 hover:bg-purple-900/50 border border-purple-500/20 text-xs font-medium text-purple-100 transition-colors flex flex-col items-center gap-1" onclick="performMove('vegeta', 'beam')">
<iconify-icon className="text-lg text-purple-400" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Galick Gun
                            </button>
<button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-medium text-white transition-colors flex flex-col items-center gap-1" onclick="performMove('vegeta', 'attack')">
<iconify-icon className="text-lg text-zinc-400" icon="solar:hand-fist-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                Rush
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
