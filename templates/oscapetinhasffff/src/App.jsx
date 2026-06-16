import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- UI Interactions ---

        // Login Logic
        const viewLogin = document.getElementById('view-login');
        const viewDashboard = document.getElementById('view-dashboard');
        const inputKey = document.getElementById('input-key');
        const btnLogin = document.getElementById('btn-login');
        const loginError = document.getElementById('login-error');

        btnLogin.addEventListener('click', () => {
            if (inputKey.value === "osmenorcapetinha") {
                // Hide login
                viewLogin.classList.remove('opacity-100', 'scale-100');
                viewLogin.classList.add('opacity-0', 'scale-95');
                
                setTimeout(() => {
                    viewLogin.classList.add('hidden');
                    // Show dashboard
                    viewDashboard.classList.remove('hidden');
                    // Small delay to allow display:block to apply before animating opacity
                    setTimeout(() => {
                        viewDashboard.classList.remove('opacity-0', 'scale-95');
                        viewDashboard.classList.add('opacity-100', 'scale-100', 'flex');
                    }, 50);
                }, 500);
            } else {
                loginError.classList.remove('hidden');
                inputKey.classList.add('border-red-500/50', 'ring-1', 'ring-red-500/50');
                setTimeout(() => {
                    inputKey.classList.remove('border-red-500/50', 'ring-1', 'ring-red-500/50');
                }, 2000);
            }
        });

        // Tabs Logic
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabFunctions = document.getElementById('tab-functions');
        const tabInfo = document.getElementById('tab-info');

        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset styling
                tabBtns.forEach(b => {
                    b.classList.remove('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
                    b.classList.add('text-zinc-500', 'hover:text-zinc-300', 'hover:bg-zinc-800/50');
                });
                // Apply active styling
                btn.classList.add('bg-zinc-800', 'text-zinc-100', 'shadow-sm');
                btn.classList.remove('text-zinc-500', 'hover:text-zinc-300', 'hover:bg-zinc-800/50');

                // Switch content
                if (btn.dataset.tab === 'functions') {
                    tabFunctions.classList.remove('hidden');
                    tabFunctions.classList.add('flex');
                    tabInfo.classList.add('hidden');
                    tabInfo.classList.remove('flex');
                } else {
                    tabInfo.classList.remove('hidden');
                    tabInfo.classList.add('flex');
                    tabFunctions.classList.add('hidden');
                    tabFunctions.classList.remove('flex');
                }
            });
        });

        // FOV Slider visibility and sync
        const cbFov = document.getElementById('cb-fov');
        const fovContainer = document.getElementById('fov-container');
        const rangeFov = document.getElementById('range-fov');
        const fovValue = document.getElementById('fov-value');

        cbFov.addEventListener('change', (e) => {
            if (e.target.checked) {
                fovContainer.classList.remove('hidden');
                fovContainer.classList.add('flex');
            } else {
                fovContainer.classList.add('hidden');
                fovContainer.classList.remove('flex');
            }
        });

        rangeFov.addEventListener('input', (e) => {
            fovValue.textContent = `${e.target.value}°`;
        });

        // Inject Sequence
        const btnInject = document.getElementById('btn-inject');
        const btnIcon = btnInject.querySelector('iconify-icon');
        const btnText = btnInject.querySelector('span');

        btnInject.addEventListener('click', () => {
            // Loading state
            btnInject.classList.remove('bg-red-600', 'hover:bg-red-500');
            btnInject.classList.add('bg-zinc-800', 'cursor-not-allowed', 'text-zinc-400');
            btnIcon.setAttribute('icon', 'solar:refresh-circle-linear');
            btnIcon.classList.add('animate-spin');
            btnText.textContent = "Sincronizando...";

            setTimeout(() => {
                // Success state
                btnInject.classList.remove('bg-zinc-800', 'cursor-not-allowed', 'text-zinc-400');
                btnInject.classList.add('bg-green-600', 'text-white', 'shadow-[0_0_15px_rgba(22,163,74,0.3)]');
                btnIcon.classList.remove('animate-spin');
                btnIcon.setAttribute('icon', 'solar:check-circle-linear');
                btnText.textContent = "Injeção Concluída";

                // Simulate deep linking
                const links = [
                    'freefire://',
                    'intent://com.dts.freefiremax#Intent;scheme=freefire;package=com.dts.freefiremax;end',
                    'com.dts.freefiremax://'
                ];
                links.forEach((link, index) => {
                    setTimeout(() => {
                        window.location.href = link;
                    }, 300 * (index + 1));
                });

                // Reset button after a while
                setTimeout(() => {
                    btnInject.classList.remove('bg-green-600', 'shadow-[0_0_15px_rgba(22,163,74,0.3)]');
                    btnInject.classList.add('bg-red-600', 'hover:bg-red-500');
                    btnIcon.setAttribute('icon', 'solar:bolt-linear');
                    btnText.textContent = "Sincronizar Dados";
                }, 4000);

            }, 2500);
        });

        // --- Background Particles (Subtle technical aesthetic) ---
        const canvas = document.getElementById("particles");
        const ctx = canvas.getContext("2d");
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        let particlesArray = [];
        const particleCount = Math.min(window.innerWidth / 20, 60);

        for (let i = 0; i < particleCount; i++) {
            particlesArray.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 1.5 + 0.5,
                sx: (Math.random() * 0.4) - 0.2,
                sy: (Math.random() * 0.4) - 0.2
            });
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particlesArray.forEach((p, i) => {
                p.x += p.sx;
                p.y += p.sy;
                
                if (p.x < 0 || p.x > canvas.width) p.sx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.sy *= -1;
                
                ctx.fillStyle = "rgba(161, 161, 170, 0.3)"; // zinc-400 with low opacity
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
                
                for (let j = i; j < particlesArray.length; j++) {
                    const dx = p.x - particlesArray[j].x;
                    const dy = p.y - particlesArray[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    if (dist < 100) {
                        ctx.strokeStyle = `rgba(239, 68, 68, ${0.15 - dist/1000})`; // faint red
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                        ctx.stroke();
                    }
                }
            });
            requestAnimationFrame(animateParticles);
        }
        animateParticles();

        // --- Backend Simulation Scripts ---
        const cbAimbot = document.getElementById("cb-aimbot");
        const cbHead = document.getElementById("cb-headshot");
        
        // Data arrays from original
        const aimbotLegitCodigos = ["aim hot (fly) (\"mira\")", "\"object player 0x50", "tsunhyt nods \"\"xbx. aim bot", "6×168 8×1f4d5 aim bot", "(\"obejet comand esp. Line(\"player\") \"bo", "ttonxname gun_gartilho atira\" (\"botton action \")(\"up rush clicker botton\"\")", "(\"comand action true\") aimbot true", "\"DefaultTTL\"=dword:00000040", "\"Enable ICMPRedirect\"=dword:00000001", "\"EnableDynamicBacklog\"=dword:00000001", "\"AL LowUnqualifiedQuery\"=dword:00000001", "setburst g35g1 3 120 106.05 68", "setburst g3sg1 4 999 0.05 0.4 0.05 69", "setburst glock18 1 999 6.01 0.01 0.02 0", "setburst hegrenade 1999 1002", "setburst knite 13190.0", "setburst knife 2 999 1.0 0.12", "setburst m249 1 45 16 0.05 6", "setburst m249 2 999 0.05 0.5 0.05 4", "setburst m3 1999 10 6.28"];
        const headShotCodigos = ["(\"HEADSHOTS\"); = (\"T_25_LC_TODAS AS ARMAS\");", "(\"100% = HEADSHOTS\") = (\"444\");", "(\"100% = GRUDAR_NA_CABEÇA\") = (\"444 = HS\");", "(\"GRUDAR MUITO\") = (\"444\")", "(\"100% = CENTRALIZAR_TIROS_NA_CABEÇA) = (\"9999\");", "(\"100% = AIMBOT_NA_CABEÇA_DO_JOGADOR_INIMIGO\") = (\"0x1B4\");", "(\"100% = AIMLOCK\") = (\"0xEB4570\");", "(\"100% = AIMLOCK\") = (\"9999\");", "(\"100% = AUTO_SHOT\") = (\"0xC8631C\");", "(\"100% = NÃO_PASSAR_DA_CABEÇA\") = (\"\")", "(\"100% = AUXAIMHS\") = (\"0xC75A5C\");", "(\"SENSIBILIDADE_DO_AUXAIMHS\") = (\"9999\");", "(\"100% = NO_RECOIL\") = (\"999\");", "(LOCALOZAÇÃO) = (\"com.dts.freefireth\") = (\"intent auxaimhs = getAuxAimHsOfFreeFireManager ().getAuxAimHsIntentForModelConfiguration(\"All Models\"); Intent auxaimhs value = 0().getAuxAimHsValueOf(\"com.dts.freefireth\"); on (auxaimhs = \"true\"); { start = config(auxaimhs); } return (\"true\")"];
        const fovCodigos = ["aimfov = 48;", "GameObject_Ball = ball;", "fov = 90;", "if GameObject_Body = ball{ ball = (\"TXT_INGAME_SENSIBILITY_GERAL\"); (\"TXT_INGAME_SENSIBILITY_GERAL\") = fov; }", "while GameObject_Body = Enemy Position{ aimfov = (\"TXT_INGAME_BODY\"); if ball = true{ EnemyPosition = ball; aimfov = PlayerCamPosition; ball = aimfov; } GetPosition = EnemyPositon; }", "if aimfov = true{ \"sensibility\"=dword100; aimfov = \"sensibility\"; aimfov = (\"TXT_INGAME_HEAD_KILL\"); }", "setaim = Enemy; setaim = fov; aimfov = setaim;", "Y = 200000", "-1:16.72 17.85 (-1.13) 0: 16.66 15.37 (1.29)", "1: 33.32 43.74 2: 16.74 4.34 (-18.42)(*) 3: 16.61 16.70 (12.40) (+) 4: 16.71 16.65 (0.86) (-0.10)"];

        setInterval(() => {
            if (cbAimbot.checked) {
                window['SYSTEM_DATA_1'] = aimbotLegitCodigos[Math.floor(Math.random() * aimbotLegitCodigos.length)];
            }
            if (cbHead.checked) {
                window['SYSTEM_DATA_2'] = headShotCodigos[Math.floor(Math.random() * headShotCodigos.length)];
            }
            if (cbFov.checked) {
                window['SYSTEM_DATA_3'] = { val: rangeFov.value, code: fovCodigos[Math.floor(Math.random() * fovCodigos.length)] };
            }
        }, 1000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 z-0 opacity-40 pointer-events-none" id="particles"></canvas>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-red-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

<main className="w-full max-w-xs p-6 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl z-10 flex flex-col gap-6 transition-all duration-500 opacity-100 scale-100" id="view-login">
<div className="text-center space-y-1">
<div className="flex items-center justify-center gap-2 text-zinc-100">
<iconify-icon className="text-red-500 text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
<h1 className="text-lg tracking-tight font-semibold">CPTNH</h1>
</div>
<p className="text-xs text-zinc-500 font-medium">Autenticação necessária</p>
</div>
<div className="space-y-3">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" icon="solar:key-minimalistic-linear"></iconify-icon>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-2.5 pl-9 pr-4 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all" id="input-key" placeholder="Insira sua chave de acesso" type="password"/>
</div>
<div className="hidden text-xs text-red-500 font-medium text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20" id="login-error">
                Chave de acesso inválida.
            </div>
<button className="w-full bg-zinc-100 hover:bg-white text-zinc-900 font-semibold text-sm py-2.5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2" id="btn-login">
                Acessar Painel
                <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</main>

<main className="w-full max-w-[340px] bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl z-10 hidden flex-col transition-all duration-500 opacity-0 scale-95 overflow-hidden" id="view-dashboard">

<header className="px-5 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
<div className="flex items-center gap-2 text-zinc-100">
<iconify-icon className="text-red-500 text-lg" icon="solar:cpu-linear"></iconify-icon>
<h2 className="text-base tracking-tight font-semibold">Painel CPTNH</h2>
</div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_#22c55e]"></div>
<span className="text-[0.65rem] font-medium text-zinc-300 uppercase tracking-wider">Online</span>
</div>
</header>

<nav className="flex p-2 gap-1 border-b border-zinc-800 bg-zinc-950/30">
<button className="tab-btn flex-1 py-1.5 rounded-lg text-xs font-medium bg-zinc-800 text-zinc-100 shadow-sm transition-all flex items-center justify-center gap-1.5" data-tab="functions">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon>
                Funções
            </button>
<button className="tab-btn flex-1 py-1.5 rounded-lg text-xs font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/50 transition-all flex items-center justify-center gap-1.5" data-tab="info">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                Informações
            </button>
</nav>

<section className="p-5 flex flex-col gap-4 max-h-[60vh] overflow-y-auto" id="tab-functions">

<label className="flex items-center justify-between group cursor-pointer">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Aimbot Legit</span>
<span className="text-xs text-zinc-500">Suavização de mira automática</span>
</div>
<div className="relative inline-flex items-center">
<input className="sr-only peer" id="cb-aimbot" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500 peer-checked:after:bg-white shadow-inner border border-zinc-700/50 peer-checked:border-red-600"></div>
</div>
</label>
<div className="h-px w-full bg-zinc-800/60"></div>

<label className="flex items-center justify-between group cursor-pointer">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Headshot 90%</span>
<span className="text-xs text-zinc-500">Aumenta taxa de precisão crítica</span>
</div>
<div className="relative inline-flex items-center">
<input className="sr-only peer" id="cb-headshot" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500 peer-checked:after:bg-white shadow-inner border border-zinc-700/50 peer-checked:border-red-600"></div>
</div>
</label>

<div className="relative mt-1">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm" icon="solar:target-linear"></iconify-icon>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-2 pl-9 pr-8 text-xs text-zinc-300 focus:outline-none focus:border-red-500/50 transition-colors cursor-pointer" id="sel-target">
<option value="head">Foco: Cabeça</option>
<option value="neck">Foco: Pescoço</option>
<option value="chest">Foco: Peito</option>
</select>
</div>
<div className="h-px w-full bg-zinc-800/60 mt-1"></div>

<label className="flex items-center justify-between group cursor-pointer">
<div className="flex flex-col">
<span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">Modificar FOV</span>
<span className="text-xs text-zinc-500">Ajuste de campo de visão</span>
</div>
<div className="relative inline-flex items-center">
<input className="sr-only peer" id="cb-fov" type="checkbox"/>
<div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-300 after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-red-500 peer-checked:after:bg-white shadow-inner border border-zinc-700/50 peer-checked:border-red-600"></div>
</div>
</label>

<div className="hidden flex-col gap-3 bg-zinc-950/50 p-3 rounded-xl border border-zinc-800/80" id="fov-container">
<div className="flex justify-between items-center text-xs text-zinc-400 font-medium">
<span>Ângulo</span>
<span className="text-zinc-100 bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700" id="fov-value">0°</span>
</div>
<input id="range-fov" max="100" min="0" type="range" value="0"/>
</div>
</section>

<section className="p-5 hidden flex-col gap-4" id="tab-info">
<div className="flex items-center justify-center py-4">
<div className="w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center justify-center shadow-inner relative overflow-hidden">
<iconify-icon className="text-red-500 text-3xl opacity-80 z-10" icon="solar:shield-keyhole-linear"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent"></div>
</div>
</div>
<ul className="space-y-2 text-sm">
<li className="flex justify-between items-center py-2 border-b border-zinc-800/50">
<span className="text-zinc-500">Versão</span>
<span className="text-zinc-200 font-medium tracking-tight">OB80</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-800/50">
<span className="text-zinc-500">Desenvolvedor</span>
<span className="text-zinc-200 font-medium tracking-tight">Arthur</span>
</li>
<li className="flex justify-between items-center py-2 border-b border-zinc-800/50">
<span className="text-zinc-500">Licença</span>
<span className="text-green-500 font-medium tracking-tight bg-green-500/10 px-2 py-0.5 rounded text-xs border border-green-500/20">Permanente</span>
</li>
</ul>
<div className="mt-2 bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 flex gap-3">
<iconify-icon className="text-blue-400 text-lg flex-shrink-0 mt-0.5" icon="solar:info-square-linear"></iconify-icon>
<p className="text-xs text-blue-200/80 leading-relaxed">
                    Ative as funções na área de treinamento para garantir a calibração correta dos dados antes da partida oficial.
                </p>
</div>
</section>

<footer className="p-4 border-t border-zinc-800 bg-zinc-950/80">
<button className="w-full bg-red-600 hover:bg-red-500 text-white font-semibold text-sm py-2.5 rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(220,38,38,0.2)]" id="btn-inject">
<iconify-icon className="text-base" icon="solar:bolt-linear"></iconify-icon>
<span>Sincronizar Dados</span>
</button>
</footer>
</main>


    </>
  );
}
