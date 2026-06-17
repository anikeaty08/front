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



tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Outfit', 'sans-serif'] },
animation: { 'fade-in': 'fadeIn 0.5s ease-out' },
keyframes: { fadeIn: { '0%': { opacity: 0, transform: 'translateY(10px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } } }
}
}
}



        // --- DATA & STATE ---
        const colors = {
            indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500', border: 'border-indigo-500', glow: 'shadow-indigo-500' },
            purple: { text: 'text-purple-400', bg: 'bg-purple-500', border: 'border-purple-500', glow: 'shadow-purple-500' },
            emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500', border: 'border-emerald-500', glow: 'shadow-emerald-500' },
            amber: { text: 'text-amber-400', bg: 'bg-amber-500', border: 'border-amber-500', glow: 'shadow-amber-500' },
            rose: { text: 'text-rose-400', bg: 'bg-rose-500', border: 'border-rose-500', glow: 'shadow-rose-500' },
            blue: { text: 'text-blue-400', bg: 'bg-blue-500', border: 'border-blue-500', glow: 'shadow-blue-500' }
        };

        const defaultServers = [
            { id: 1, title: 'World of Warcraft', subtitle: 'Wrath of the Lich King • 3.3.5a', value: 'wow.nexus.gg', statusText: 'Online', statusColor: 'emerald', pulse: true, theme: 'indigo', icon: 'solar:snowflake-linear', type: 'copy', bgImage: '' },
            { id: 2, title: 'Minecraft Moddé', subtitle: 'Cobblemon Academy • 1.20.1', value: 'poke.nexus.gg', statusText: 'Online', statusColor: 'emerald', pulse: true, theme: 'emerald', icon: 'solar:box-linear', type: 'copy', bgImage: '' },
            { id: 3, title: 'Communauté', subtitle: 'Rejoindre le Discord', value: 'https://discord.gg/nexus', statusText: '1.2k', statusColor: 'blue', pulse: false, theme: 'blue', icon: 'solar:chat-round-line-linear', type: 'link', bgImage: '' }
        ];

        let servers = JSON.parse(localStorage.getItem('nexus_servers')) || defaultServers;
        let requests = JSON.parse(localStorage.getItem('nexus_requests')) || [];
        let currentEditId = null;

        // --- INIT ---
        document.addEventListener('DOMContentLoaded', () => {
            renderPublicGrid();
            renderThemeSelector();
        });

        // --- MODAL UTILS ---
        function openModal(id) {
            const modal = document.getElementById(id);
            modal.classList.remove('opacity-0', 'pointer-events-none');
            const card = modal.querySelector('div[id$="-card"]');
            if(card) card.classList.remove('scale-95');
            
            // Focus input if available
            const firstInput = modal.querySelector('input');
            if(firstInput) firstInput.focus();
        }

        function closeModal(id) {
            const modal = document.getElementById(id);
            modal.classList.add('opacity-0', 'pointer-events-none');
            const card = modal.querySelector('div[id$="-card"]');
            if(card) card.classList.add('scale-95');
        }

        // --- PUBLIC VIEW LOGIC ---
        function renderPublicGrid() {
            const grid = document.getElementById('server-grid');
            grid.innerHTML = '';
            
            servers.forEach(s => {
                const theme = colors[s.theme] || colors.indigo;
                const card = document.createElement(s.type === 'link' ? 'a' : 'button');
                
                // Base classes
                let cardClasses = `group relative border border-white/5 rounded-2xl p-6 text-left hover:-translate-y-1 transition-all duration-300 w-full overflow-hidden`;
                let bgStyle = '';

                if (s.bgImage && s.bgImage.trim() !== '') {
                    // Image background styling
                    cardClasses += ` hover:shadow-2xl hover:shadow-${s.theme}-500/20`;
                    bgStyle = `background-image: url('${s.bgImage}'); background-size: cover; background-position: center;`;
                    // Overlay for image
                    card.innerHTML = `<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/40 z-0 transition-opacity duration-300 group-hover:via-slate-900/70"></div>`;
                } else {
                    // Glass styling
                    cardClasses += ` glass-card hover:border-${s.theme}-500/50 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-${s.theme}-500/10`;
                }

                card.className = cardClasses;
                card.style.cssText = bgStyle;
                
                if (s.type === 'link') {
                    card.href = s.value;
                    card.target = '_blank';
                } else {
                    card.onclick = () => copyToClipboard(s.value);
                }

                // Append Content (Relative z-10 to sit above overlay)
                const contentWrapper = document.createElement('div');
                contentWrapper.className = 'relative z-10 h-full flex flex-col';
                contentWrapper.innerHTML = `
                    <div class="absolute top-0 right-0 flex items-center gap-1.5 px-2 py-1 rounded-full bg-slate-950/50 border border-white/10 backdrop-blur-md">
                        ${s.pulse ? `<span class="w-1.5 h-1.5 rounded-full bg-${s.statusColor}-500 animate-pulse"></span>` : ''}
                        <span class="text-[10px] font-semibold text-${s.statusColor}-400 uppercase tracking-wide">${s.statusText}</span>
                    </div>
                    
                    <div class="w-12 h-12 rounded-xl bg-slate-800/50 border border-white/10 ${theme.text} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:${theme.bg}/20 group-hover:${theme.border}/30 transition-all duration-300 backdrop-blur-sm">
                        <iconify-icon icon="${s.icon}" width="24"></iconify-icon>
                    </div>
                    
                    <h2 class="text-lg font-medium text-white mb-1 drop-shadow-md">${s.title}</h2>
                    <p class="text-sm text-slate-400 mb-6 drop-shadow-sm flex-grow">${s.subtitle}</p>
                    
                    <div class="flex items-center justify-between pt-4 border-t border-white/10 group-hover:border-${s.theme}-500/30 transition-colors mt-auto">
                        <code class="text-xs font-mono text-slate-300 bg-black/30 px-2 py-1 rounded truncate max-w-[150px] border border-white/5">${s.value.replace('https://', '')}</code>
                        <div class="flex items-center gap-1 text-xs text-slate-400 group-hover:${theme.text} transition-colors">
                            <span>${s.type === 'copy' ? 'Copier' : 'Ouvrir'}</span>
                            <iconify-icon icon="${s.type === 'copy' ? 'solar:copy-linear' : 'solar:arrow-right-up-linear'}"></iconify-icon>
                        </div>
                    </div>
                `;
                
                card.appendChild(contentWrapper);
                grid.appendChild(card);
            });
        }

        // --- REQUEST SYSTEM ---
        function handleRequestSubmit(e) {
            e.preventDefault();
            const title = document.getElementById('req-title').value;
            const desc = document.getElementById('req-desc').value;
            const value = document.getElementById('req-value').value;
            
            if(title && desc && value) {
                const newReq = {
                    id: Date.now(),
                    title, 
                    subtitle: desc,
                    value,
                    theme: 'indigo',
                    icon: 'solar:server-square-linear',
                    type: 'copy',
                    statusText: 'New',
                    statusColor: 'blue',
                    pulse: false,
                    bgImage: ''
                };
                requests.push(newReq);
                localStorage.setItem('nexus_requests', JSON.stringify(requests));
                
                document.querySelector('#request-modal form').reset();
                closeModal('request-modal');
                showToast('Demande envoyée avec succès');
            }
        }

        // --- ADMIN LOGIN LOGIC ---
        function handleLogin(e) {
            e.preventDefault();
            const pass = document.getElementById('password-input').value;
            if (pass === 'pPpBUngo0') {
                closeModal('login-modal');
                document.getElementById('admin-panel').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                renderAdminView();
            } else {
                const input = document.getElementById('password-input');
                input.classList.add('border-rose-500', 'bg-rose-500/10');
                setTimeout(() => input.classList.remove('border-rose-500', 'bg-rose-500/10'), 500);
            }
        }

        function logout() {
            document.getElementById('admin-panel').classList.add('hidden');
            document.body.style.overflow = 'auto';
            renderPublicGrid();
        }

        // --- ADMIN DASHBOARD LOGIC ---
        function renderAdminView() {
            renderAdminList();
            renderRequestsList();
        }

        function renderRequestsList() {
            const container = document.getElementById('requests-container');
            const list = document.getElementById('requests-list');
            list.innerHTML = '';
            
            if (requests.length === 0) {
                container.classList.add('hidden');
                return;
            }
            
            container.classList.remove('hidden');
            requests.forEach(r => {
                const item = document.createElement('div');
                item.className = `p-3 rounded-lg border border-amber-500/20 bg-amber-500/5 flex items-center justify-between`;
                item.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-amber-400">
                            <iconify-icon icon="solar:question-circle-linear"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">${r.title}</div>
                            <div class="text-[10px] text-slate-500">${r.subtitle}</div>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <button onclick="approveRequest(${r.id})" class="text-emerald-400 hover:bg-emerald-500/20 p-1.5 rounded-md transition-colors"><iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon></button>
                        <button onclick="rejectRequest(${r.id})" class="text-rose-400 hover:bg-rose-500/20 p-1.5 rounded-md transition-colors"><iconify-icon icon="solar:close-circle-linear" width="16"></iconify-icon></button>
                    </div>
                `;
                list.appendChild(item);
            });
        }

        function approveRequest(id) {
            const reqIndex = requests.findIndex(r => r.id === id);
            if (reqIndex !== -1) {
                const req = requests[reqIndex];
                requests.splice(reqIndex, 1);
                localStorage.setItem('nexus_requests', JSON.stringify(requests));
                
                // Add to servers
                servers.push(req);
                saveData();
                
                renderAdminView();
                loadServerIntoEditor(req.id);
                showToast('Demande approuvée');
            }
        }

        function rejectRequest(id) {
            requests = requests.filter(r => r.id !== id);
            localStorage.setItem('nexus_requests', JSON.stringify(requests));
            renderAdminView();
            showToast('Demande refusée');
        }

        function renderAdminList() {
            const list = document.getElementById('admin-list');
            list.innerHTML = '';
            servers.forEach(s => {
                const item = document.createElement('div');
                item.className = `p-3 rounded-lg border ${currentEditId === s.id ? 'bg-indigo-500/10 border-indigo-500/50' : 'bg-slate-900/50 border-white/5 hover:border-white/10'} flex items-center justify-between cursor-pointer transition-all group`;
                item.onclick = () => loadServerIntoEditor(s.id);
                item.innerHTML = `
                    <div class="flex items-center gap-3">
                        <div class="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-slate-400 overflow-hidden relative">
                            ${s.bgImage ? `<img src="${s.bgImage}" class="absolute inset-0 w-full h-full object-cover opacity-50">` : ''}
                            <iconify-icon icon="${s.icon}" class="relative z-10"></iconify-icon>
                        </div>
                        <div>
                            <div class="text-sm font-medium text-white">${s.title}</div>
                            <div class="text-[10px] text-slate-500">${s.statusText}</div>
                        </div>
                    </div>
                    <iconify-icon icon="solar:pen-linear" class="text-slate-500 group-hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity"></iconify-icon>
                `;
                list.appendChild(item);
            });
        }

        function renderThemeSelector() {
            const container = document.getElementById('theme-selector');
            Object.keys(colors).forEach(c => {
                const btn = document.createElement('div');
                btn.className = `w-8 h-8 rounded-full bg-${c}-500 cursor-pointer border-2 border-transparent hover:scale-110 transition-transform`;
                btn.onclick = () => selectTheme(c, btn);
                btn.dataset.color = c;
                container.appendChild(btn);
            });
        }

        function selectTheme(color, btnElement) {
            document.getElementById('edit-theme').value = color;
            document.querySelectorAll('#theme-selector div').forEach(b => b.classList.remove('border-white', 'ring-2', 'ring-white/20'));
            if(btnElement) {
                btnElement.classList.add('border-white', 'ring-2', 'ring-white/20');
            } else {
                const target = document.querySelector(`#theme-selector div[data-color="${color}"]`);
                if(target) target.classList.add('border-white', 'ring-2', 'ring-white/20');
            }
        }

        function createNewServer() {
            const newId = Date.now();
            const newServer = {
                id: newId,
                title: 'Nouveau Serveur',
                subtitle: 'Description...',
                value: 'ip.domaine.com',
                statusText: 'Online',
                statusColor: 'emerald',
                pulse: true,
                theme: 'indigo',
                icon: 'solar:server-square-linear',
                type: 'copy',
                bgImage: ''
            };
            servers.push(newServer);
            saveData();
            renderAdminView();
            loadServerIntoEditor(newId);
        }

        function loadServerIntoEditor(id) {
            currentEditId = id;
            const s = servers.find(x => x.id === id);
            if (!s) return;

            document.getElementById('editor-panel').classList.remove('opacity-50', 'pointer-events-none');
            renderAdminList(); 

            document.getElementById('edit-id').value = s.id;
            document.getElementById('edit-title').value = s.title;
            document.getElementById('edit-subtitle').value = s.subtitle;
            document.getElementById('edit-value').value = s.value;
            document.getElementById('edit-icon').value = s.icon;
            document.getElementById('edit-status-text').value = s.statusText;
            document.getElementById('edit-status-color').value = s.statusColor;
            document.getElementById('edit-pulse').checked = s.pulse;
            document.getElementById('edit-bg-image').value = s.bgImage || '';
            
            const radios = document.getElementsByName('actionType');
            radios.forEach(r => { if(r.value === s.type) r.checked = true; });

            selectTheme(s.theme);
            updateIconPreview();
        }

        function updateIconPreview() {
            const icon = document.getElementById('edit-icon').value;
            document.getElementById('icon-preview').innerHTML = `<iconify-icon icon="${icon}" width="20"></iconify-icon>`;
        }

        function saveChanges(e) {
            e.preventDefault();
            const id = parseInt(document.getElementById('edit-id').value);
            const index = servers.findIndex(x => x.id === id);
            
            if (index !== -1) {
                servers[index] = {
                    id: id,
                    title: document.getElementById('edit-title').value,
                    subtitle: document.getElementById('edit-subtitle').value,
                    value: document.getElementById('edit-value').value,
                    icon: document.getElementById('edit-icon').value,
                    statusText: document.getElementById('edit-status-text').value,
                    statusColor: document.getElementById('edit-status-color').value,
                    pulse: document.getElementById('edit-pulse').checked,
                    theme: document.getElementById('edit-theme').value || 'indigo',
                    type: document.querySelector('input[name="actionType"]:checked').value,
                    bgImage: document.getElementById('edit-bg-image').value
                };
                
                saveData();
                renderAdminList();
                showToast('Modifications enregistrées');
            }
        }

        function deleteCurrentServer() {
            if(confirm("Supprimer ce serveur ?")) {
                servers = servers.filter(s => s.id !== currentEditId);
                saveData();
                renderAdminView();
                document.getElementById('edit-form').reset();
                document.getElementById('editor-panel').classList.add('opacity-50', 'pointer-events-none');
                currentEditId = null;
                showToast('Serveur supprimé');
            }
        }

        function copyToClipboard(text) {
            navigator.clipboard.writeText(text).then(() => showToast('IP copiée dans le presse-papier'));
        }

        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = msg;
            toast.classList.remove('opacity-0', 'translate-y-4');
            setTimeout(() => toast.classList.add('opacity-0', 'translate-y-4'), 2500);
        }

        function saveData() {
            localStorage.setItem('nexus_servers', JSON.stringify(servers));
            renderPublicGrid();
        }
    
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
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-20%] right-[20%] w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>

<main className="w-full max-w-5xl mx-auto flex flex-col items-center flex-grow p-6 transition-all duration-500" id="public-view">

<header className="text-center mb-12 animate-fade-in relative z-10">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 mb-6">
<iconify-icon icon="solar:gamepad-charge-linear" width="28"></iconify-icon>
</div>
<h1 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Nexus Collective</h1>
<p className="text-slate-500">Choisissez votre univers et rejoignez-nous.</p>
</header>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full relative z-10" id="server-grid">

</div>
<footer className="mt-16 mb-6 text-xs text-slate-600 font-medium flex gap-6 items-center relative z-10">
<span>© 2024 NEXUS</span>
<button className="hover:text-emerald-400 transition-colors cursor-pointer outline-none flex items-center gap-1.5" onclick="openModal('request-modal')">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon> Proposer
            </button>
<button className="hover:text-indigo-400 transition-colors cursor-pointer outline-none flex items-center gap-1.5" onclick="openModal('login-modal')">
<iconify-icon icon="solar:shield-user-linear" width="14"></iconify-icon> Admin
            </button>
</footer>
</main>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="request-modal">
<div className="bg-slate-900 border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl scale-95 transition-transform duration-300 transform" id="request-card">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Proposer un serveur</h3>
<p className="text-xs text-slate-500 mt-1">Votre demande sera examinée par un admin.</p>
</div>
<button className="text-slate-500 hover:text-white" onclick="closeModal('request-modal')"><iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon></button>
</div>
<form className="space-y-4" onsubmit="handleRequestSubmit(event)">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Nom du serveur</label>
<input className="w-full custom-input px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600" id="req-title" placeholder="ex: Valheim Survival" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">Description courte</label>
<input className="w-full custom-input px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600" id="req-desc" placeholder="ex: PVE • Mods" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">IP ou Lien</label>
<input className="w-full custom-input px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600" id="req-value" placeholder="ex: 192.168.1.1" required="" type="text"/>
</div>
<button className="w-full mt-2 px-4 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-medium transition-colors shadow-lg shadow-emerald-500/20" type="submit">Envoyer la demande</button>
</form>
</div>
</div>

<div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm opacity-0 pointer-events-none transition-all duration-300" id="login-modal">
<div className="bg-slate-900 border border-white/10 rounded-2xl p-8 w-full max-w-sm shadow-2xl scale-95 transition-transform duration-300" id="login-card">
<div className="flex flex-col items-center mb-6">
<div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center mb-4">
<iconify-icon icon="solar:lock-keyhole-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white">Accès Administration</h3>
</div>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div>
<input className="w-full custom-input px-4 py-2.5 rounded-lg text-sm text-white placeholder-slate-600" id="password-input" placeholder="Mot de passe..." type="password"/>
</div>
<div className="flex gap-2">
<button className="flex-1 px-4 py-2 rounded-lg bg-slate-800 text-slate-400 text-xs font-medium hover:bg-slate-700 transition-colors" onclick="closeModal('login-modal')" type="button">Annuler</button>
<button className="flex-1 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-500/20" type="submit">Connexion</button>
</div>
</form>
</div>
</div>

<div className="fixed inset-0 z-40 bg-slate-950 text-slate-300 overflow-y-auto hidden" id="admin-panel">
<div className="max-w-7xl mx-auto p-6 min-h-screen flex flex-col">

<div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</div>
<div>
<h2 className="text-xl font-semibold text-white tracking-tight">Configuration Nexus</h2>
<p className="text-xs text-slate-500">Gérez vos serveurs et demandes</p>
</div>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-500/20" onclick="createNewServer()">
<iconify-icon icon="solar:add-circle-linear" width="16"></iconify-icon>
                        Ajouter
                    </button>
<button className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-white/5 transition-colors" onclick="logout()">
                        Quitter
                    </button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-4 space-y-6">

<div className="hidden" id="requests-container">
<h3 className="text-xs font-semibold text-amber-500 uppercase tracking-wider mb-3 flex items-center gap-2">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon> Demandes en attente
                        </h3>
<div className="space-y-2 mb-6" id="requests-list"></div>
<div className="h-px bg-white/5 w-full mb-6"></div>
</div>

<div>
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Serveurs Actifs</h3>
<div className="space-y-2" id="admin-list">

</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="glass-panel border border-white/5 rounded-2xl p-6 lg:p-8 opacity-50 pointer-events-none transition-all" id="editor-panel">
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-medium text-white flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:pen-new-square-linear"></iconify-icon>
                                Éditer la carte
                            </h3>
<button className="text-rose-500 hover:text-rose-400 text-xs flex items-center gap-1 px-2 py-1 rounded bg-rose-500/10 border border-rose-500/10 transition-colors" onclick="deleteCurrentServer()">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon> Supprimer
                            </button>
</div>
<form className="space-y-6" id="edit-form" onsubmit="saveChanges(event)">
<input id="edit-id" type="hidden"/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Titre</label>
<input className="w-full custom-input px-3 py-2 rounded-lg text-sm text-white" id="edit-title" placeholder="ex: Minecraft Survival" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Sous-titre / Description</label>
<input className="w-full custom-input px-3 py-2 rounded-lg text-sm text-white" id="edit-subtitle" placeholder="ex: 1.20.1 • Moddé" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">IP / Lien</label>
<input className="w-full custom-input px-3 py-2 rounded-lg text-sm text-white" id="edit-value" placeholder="ex: play.nexus.gg" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-400">Icône (Iconify string)</label>
<div className="flex gap-2">
<input className="w-full custom-input px-3 py-2 rounded-lg text-sm text-white" id="edit-icon" oninput="updateIconPreview()" placeholder="ex: solar:gamepad-linear" type="text"/>
<div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-white border border-white/10 shrink-0" id="icon-preview"></div>
</div>
</div>

<div className="md:col-span-2 space-y-1.5">
<label className="text-xs font-medium text-slate-400">Image de fond (URL)</label>
<input className="w-full custom-input px-3 py-2 rounded-lg text-sm text-white placeholder-slate-700" id="edit-bg-image" placeholder="https://..." type="text"/>
<p className="text-[10px] text-slate-500">Laissez vide pour le style par défaut.</p>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">

<div className="space-y-3">
<label className="text-xs font-medium text-slate-400">Statut (Badge)</label>
<div className="flex gap-2 mb-2">
<input className="w-1/2 custom-input px-3 py-2 rounded-lg text-sm text-white" id="edit-status-text" placeholder="Texte (ex: Online)" type="text"/>
<select className="w-1/2 custom-input px-3 py-2 rounded-lg text-sm text-slate-300 bg-slate-900" id="edit-status-color">
<option value="emerald">Vert (Online)</option>
<option value="amber">Orange (Maint.)</option>
<option value="rose">Rouge (Offline)</option>
<option value="blue">Bleu (Info)</option>
<option value="purple">Violet (Event)</option>
</select>
</div>
<div className="flex items-center gap-2">
<input className="accent-indigo-500 w-4 h-4 rounded border-slate-700 bg-slate-800" id="edit-pulse" type="checkbox"/>
<label className="text-xs text-slate-400 select-none" htmlFor="edit-pulse">Animation "Pulse"</label>
</div>
</div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-400">Couleur du Thème</label>
<div className="flex gap-3 flex-wrap" id="theme-selector">

</div>
<input id="edit-theme" type="hidden"/>
</div>
</div>
<div className="h-px bg-white/5 w-full"></div>

<div className="space-y-3">
<label className="text-xs font-medium text-slate-400">Type d'action au clic</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input className="peer sr-only" name="actionType" type="radio" value="copy"/>
<div className="p-3 rounded-lg border border-white/5 bg-slate-800/50 hover:bg-slate-800 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 peer-checked:text-indigo-400 text-slate-500 text-center text-sm font-medium">
                                            Copier l'IP
                                        </div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only" name="actionType" type="radio" value="link"/>
<div className="p-3 rounded-lg border border-white/5 bg-slate-800/50 hover:bg-slate-800 transition-all peer-checked:border-indigo-500 peer-checked:bg-indigo-500/10 peer-checked:text-indigo-400 text-slate-500 text-center text-sm font-medium">
                                            Ouvrir le Lien
                                        </div>
</label>
</div>
</div>
<div className="flex justify-end pt-4">
<button className="px-6 py-2.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium shadow-lg shadow-indigo-500/20 transition-all transform active:scale-95" type="submit">
                                    Enregistrer
                                </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-3 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-full shadow-2xl pointer-events-none opacity-0 transition-all duration-300 z-50 translate-y-4" id="toast">
<div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-500/20 text-green-400">
<iconify-icon icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
<span className="text-sm text-white font-medium" id="toast-message">Action effectuée</span>
</div>


    </>
  );
}
