import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentMode = 'online';

        function setMode(mode) {
            currentMode = mode;
            const bg = document.getElementById('toggle-bg');
            const btnOnline = document.getElementById('btn-online');
            const btnSolo = document.getElementById('btn-solo');
            const textPlay = document.getElementById('text-play');
            const iconPlay = document.getElementById('icon-play');
            const onlineActions = document.getElementById('online-actions');

            if (mode === 'solo') {
                bg.style.transform = 'translateX(100%)';
                btnOnline.classList.replace('text-white', 'text-slate-400');
                btnSolo.classList.replace('text-slate-400', 'text-white');
                
                textPlay.textContent = 'Lancer solo';
                iconPlay.setAttribute('icon', 'solar:gamepad-linear');
                
                onlineActions.style.opacity = '0.3';
                onlineActions.style.pointerEvents = 'none';
            } else {
                bg.style.transform = 'translateX(0)';
                btnSolo.classList.replace('text-white', 'text-slate-400');
                btnOnline.classList.replace('text-slate-400', 'text-white');
                
                textPlay.textContent = 'Partie rapide';
                iconPlay.setAttribute('icon', 'solar:bolt-linear');
                
                onlineActions.style.opacity = '1';
                onlineActions.style.pointerEvents = 'auto';
            }
        }

        function openModal(modalId, title, desc) {
            const backdrop = document.getElementById('modal-backdrop');
            
            document.getElementById('modal-loading').classList.add('hidden');
            document.getElementById('modal-loading').classList.remove('flex');
            document.getElementById('modal-invite').classList.add('hidden');
            document.getElementById('modal-invite').classList.remove('flex');
            
            if (modalId === 'modal-loading') {
                document.getElementById('loading-title').textContent = title || 'Chargement...';
                document.getElementById('loading-desc').textContent = desc || 'Veuillez patienter.';
            }

            const modal = document.getElementById(modalId);
            modal.classList.remove('hidden');
            modal.classList.add('flex');

            backdrop.classList.remove('opacity-0', 'pointer-events-none');
            backdrop.classList.add('opacity-100', 'pointer-events-auto');
            
            setTimeout(() => {
                modal.classList.remove('scale-95');
                modal.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            const backdrop = document.getElementById('modal-backdrop');
            
            document.querySelectorAll('#modal-backdrop > div').forEach(el => {
                el.classList.remove('scale-100');
                el.classList.add('scale-95');
            });

            backdrop.classList.remove('opacity-100', 'pointer-events-auto');
            backdrop.classList.add('opacity-0', 'pointer-events-none');
            
            setTimeout(() => {
                document.getElementById('modal-loading').classList.add('hidden');
                document.getElementById('modal-loading').classList.remove('flex');
                document.getElementById('modal-invite').classList.add('hidden');
                document.getElementById('modal-invite').classList.remove('flex');
            }, 300);
        }

        function handlePlay() {
            if (currentMode === 'online') {
                openModal('modal-loading', 'Recherche de partie...', 'Recherche d\'un adversaire de votre niveau...');
            } else {
                openModal('modal-loading', 'Lancement de la partie...', 'Préparation du niveau solo en cours...');
                setTimeout(closeModal, 2000); 
            }
        }

        function showInviteModal() {
            openModal('modal-invite');
        }

        function handleJoin() {
            const code = document.getElementById('input-code').value.trim();
            if (!code) {
                const input = document.getElementById('input-code');
                input.classList.replace('border-slate-800', 'border-red-500/50');
                setTimeout(() => {
                    input.classList.replace('border-red-500/50', 'border-slate-800');
                }, 400);
                return;
            }
            openModal('modal-loading', 'Connexion en cours...', `Rejoindre le salon ${code.toUpperCase()}...`);
        }

        function copyCode(btn) {
            const span = btn.querySelector('span');
            const originalText = span.textContent;
            span.textContent = 'Copié !';
            btn.classList.add('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
            setTimeout(() => {
                span.textContent = originalText;
                btn.classList.remove('bg-emerald-500/20', 'text-emerald-400', 'border-emerald-500/50');
            }, 2000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 relative z-10">

<aside className="lg:col-span-4 flex flex-col gap-6">

<div className="text-center lg:text-left flex flex-col gap-1 items-center lg:items-start pt-4 lg:pt-0">
<h1 className="text-3xl tracking-tight font-semibold text-amber-400 drop-shadow-sm">ABALONE</h1>
<p className="text-sm font-medium text-slate-400 tracking-wide uppercase">Multijoueur &amp; Solo</p>
</div>

<div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
<div className="p-6 flex flex-col gap-6">

<div className="flex flex-col gap-2">
<label className="text-sm font-medium text-slate-300 ml-1">Votre profil</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
<iconify-icon className="text-xl" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-base text-white placeholder-slate-500 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Entrez un pseudo" type="text" value="huhuh"/>
</div>
</div>

<div className="flex flex-col gap-2">
<div className="flex p-1 bg-slate-950 rounded-xl border border-slate-800 relative">

<div className="absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] bg-slate-800 rounded-lg shadow-sm border border-slate-700 transition-transform duration-300 ease-out" id="toggle-bg"></div>
<button className="flex-1 py-2 text-sm font-medium text-white relative z-10 flex items-center justify-center gap-2 transition-colors" id="btn-online" onclick="setMode('online')">
<iconify-icon className="text-lg" icon="solar:earth-linear" strokeWidth="1.5"></iconify-icon>
                                En ligne
                            </button>
<button className="flex-1 py-2 text-sm font-medium text-slate-400 hover:text-slate-200 relative z-10 flex items-center justify-center gap-2 transition-colors" id="btn-solo" onclick="setMode('solo')">
<iconify-icon className="text-lg" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
                                Solo
                            </button>
</div>
</div>

<div className="flex flex-col gap-3">
<button className="w-full bg-amber-400 hover:bg-amber-500 text-amber-950 font-semibold text-base py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_25px_rgba(251,191,36,0.25)]" onclick="handlePlay()">
<iconify-icon className="text-xl" icon="solar:bolt-linear" id="icon-play" strokeWidth="1.5"></iconify-icon>
<span id="text-play">Partie rapide</span>
</button>
<div className="flex flex-col gap-3 transition-opacity duration-300" id="online-actions">
<button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-base py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all border border-slate-700" onclick="showInviteModal()">
<iconify-icon className="text-xl" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
                                Inviter un ami
                            </button>

<div className="relative flex items-center py-2">
<div className="flex-grow border-t border-slate-800"></div>
<span className="flex-shrink-0 mx-4 text-xs font-medium text-slate-500">ou rejoindre</span>
<div className="flex-grow border-t border-slate-800"></div>
</div>
<div className="flex gap-2">
<input className="block w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-base text-center tracking-[0.2em] text-white placeholder-slate-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all uppercase" id="input-code" placeholder="CODE" type="text"/>
<button className="bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 rounded-xl transition-all border border-slate-700 shrink-0 text-sm" onclick="handleJoin()">
                                    Go
                                </button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-800 p-5 shadow-xl">
<div className="flex items-center justify-between mb-4">
<h3 className="text-base font-medium text-slate-200 flex items-center gap-2">
<iconify-icon className="text-slate-400 text-lg" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
                        Apparence
                    </h3>
<span className="text-xs text-amber-400 font-medium bg-amber-500/10 px-2 py-1 rounded-md border border-amber-500/20">Nouveau</span>
</div>
<div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar snap-x">

<div className="snap-start shrink-0 p-3 bg-slate-950 rounded-xl border border-amber-500/50 cursor-pointer flex flex-col items-center gap-3 relative shadow-[0_0_15px_rgba(251,191,36,0.05)] w-24">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full border-2 border-slate-900"></div>
<div className="flex items-center justify-center w-full h-8 relative">
<div className="w-7 h-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-md absolute left-2 z-10 ring-1 ring-black/5 text-slate-800 flex items-center justify-center"><iconify-icon className="opacity-50 text-xs" icon="solar:stars-linear"></iconify-icon></div>
<div className="w-7 h-7 rounded-full bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-md absolute right-2 ring-1 ring-white/10"></div>
</div>
<span className="text-xs font-medium text-slate-200">Classique</span>
</div>

<div className="snap-start shrink-0 p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 cursor-pointer flex flex-col items-center gap-3 transition-colors w-24 opacity-70 hover:opacity-100">
<div className="flex items-center justify-center w-full h-8 relative">
<div className="w-7 h-7 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] absolute left-2 z-10 border border-cyan-200/50"></div>
<div className="w-7 h-7 rounded-full bg-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,0.6)] absolute right-2 border border-fuchsia-300/50"></div>
</div>
<span className="text-xs font-medium text-slate-400">Néon</span>
</div>

<div className="snap-start shrink-0 p-3 bg-slate-950 rounded-xl border border-slate-800 hover:border-slate-700 cursor-pointer flex flex-col items-center gap-3 transition-colors w-24 opacity-70 hover:opacity-100 relative overflow-hidden">
<div className="flex items-center justify-center w-full h-8 relative">
<div className="w-7 h-7 rounded-full bg-emerald-100 shadow-md absolute left-2 z-10 border border-emerald-200" style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(16, 185, 129, 0.1) 2px, rgba(16, 185, 129, 0.1) 4px)'}}></div>
<div className="w-7 h-7 rounded-full bg-rose-900 shadow-md absolute right-2 border border-rose-800" style={{backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0, 0, 0, 0.2) 2px, rgba(0, 0, 0, 0.2) 4px)'}}></div>
</div>
<span className="text-xs font-medium text-slate-400">Marbre</span>
<div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[1px] flex items-center justify-center">
<iconify-icon className="text-slate-500 text-lg" icon="solar:lock-password-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</aside>

<main className="lg:col-span-8 flex flex-col h-[700px] lg:h-auto min-h-[600px]">
<div className="flex-1 bg-[#0b1120] rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-64 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

<div className="p-4 sm:p-6 pb-2 relative z-10">
<div className="flex items-center justify-between max-w-md mx-auto bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-2 sm:p-3 shadow-lg">
<div className="flex items-center gap-3 flex-1">
<div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-inner ring-2 ring-slate-800"></div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-200 leading-none">hh</span>
<span className="text-[10px] text-slate-500 mt-1">Éliminées: <span className="text-amber-400 font-medium">0</span>/6</span>
</div>
</div>
<div className="px-4 text-xs font-medium text-slate-600 tracking-widest shrink-0">VS</div>
<div className="flex items-center gap-3 flex-1 justify-end text-right">
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-200 leading-none">huhuh <span className="text-slate-500 font-normal">(Vous)</span></span>
<span className="text-[10px] text-slate-500 mt-1">Éliminées: <span className="text-white font-medium">0</span>/6</span>
</div>
<div className="w-8 h-8 rounded-full bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-inner ring-2 ring-slate-800"></div>
</div>
</div>
</div>

<div className="flex justify-center relative z-10 mt-2 mb-6">
<div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-4 py-1.5 shadow-[0_0_10px_rgba(251,191,36,0.1)]">
<div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
<span className="text-xs font-medium">Tour de hh...</span>
</div>
</div>

<div className="flex-1 flex items-center justify-center p-4 relative z-10">
<div className="flex flex-col items-center justify-center gap-1 sm:gap-1.5 bg-[#0f172a]/50 p-6 sm:p-10 rounded-[40px] border border-slate-800/80 shadow-[inset_0_0_60px_rgba(0,0,0,0.5)] backdrop-blur-sm">

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer">
<div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div>
</div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer">
<div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div>
</div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer">
<div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div>
</div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer">
<div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div>
</div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer">
<div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div>
</div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#475569,#020617)] shadow-[0_3px_5px_rgba(0,0,0,0.7)] ring-1 ring-white/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative cursor-pointer hover:bg-slate-900 transition-colors"></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
</div>

<div className="flex gap-1 sm:gap-1.5">
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
<div className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-slate-950/80 shadow-[inset_0_4px_8px_rgba(0,0,0,0.8)] border border-slate-800/30 flex items-center justify-center relative group cursor-pointer"><div className="w-[85%] h-[85%] rounded-full absolute bg-[radial-gradient(circle_at_30%_30%,#ffffff,#cbd5e1)] shadow-[0_3px_5px_rgba(0,0,0,0.6)] ring-1 ring-black/5 transition-transform group-hover:scale-105"></div></div>
</div>
</div>
</div>

<div className="p-4 pb-6 mt-auto relative z-10 text-center">
<div className="inline-flex items-center gap-2 text-slate-500 text-sm">
<iconify-icon className="text-lg" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Cliquez sur une bille pour la sélectionner (jusqu'à 3 en ligne).</span>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm z-50 flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-300" id="modal-backdrop">

<div className="hidden flex-col items-center justify-center p-8 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full mx-4 shadow-2xl scale-95 transition-transform duration-300" id="modal-loading">
<div className="relative flex items-center justify-center mb-6">
<div className="w-16 h-16 rounded-full border-4 border-slate-800 border-t-amber-400 animate-spin"></div>
<iconify-icon className="absolute text-amber-400 text-2xl" icon="solar:gamepad-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-200 tracking-tight text-center mb-2" id="loading-title">Recherche de partie...</h3>
<p className="text-sm text-slate-400 text-center mb-6" id="loading-desc">Veuillez patienter pendant que nous trouvons un adversaire.</p>
<button className="text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors py-2 px-4 rounded-xl hover:bg-slate-800" onclick="closeModal()">Annuler</button>
</div>

<div className="hidden flex-col p-6 bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full mx-4 shadow-2xl scale-95 transition-transform duration-300" id="modal-invite">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold text-slate-200 tracking-tight">Inviter un ami</h3>
<button className="text-slate-500 hover:text-slate-300 transition-colors p-1" onclick="closeModal()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<p className="text-sm text-slate-400 mb-6">Partagez ce code avec votre ami pour qu'il puisse vous rejoindre dans une partie privée.</p>
<div className="bg-slate-950 border border-slate-800 rounded-xl p-5 flex items-center justify-center mb-6 relative">
<span className="text-3xl font-bold tracking-[0.3em] text-amber-400 uppercase select-all">X7K9P</span>
</div>
<button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium text-base py-3.5 rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2" onclick="copyCode(this)">
<iconify-icon className="text-xl" icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
<span>Copier le code</span>
</button>
</div>
</div>


    </>
  );
}
