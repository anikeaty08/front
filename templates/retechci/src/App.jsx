import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Navigation Logic
function navigate(pageId) {
document.querySelectorAll('.page-section').forEach(el => {
el.classList.add('hidden');
el.classList.remove('page-enter');
});
const target = document.getElementById(pageId);
if(target) {
target.classList.remove('hidden');
target.classList.add('page-enter');
}
document.querySelectorAll('.nav-link').forEach(el => {
if(el.dataset.target === pageId) {
el.classList.add('text-white');
el.classList.remove('text-neutral-400');
} else {
el.classList.remove('text-white');
el.classList.add('text-neutral-400');
}
});
window.scrollTo(0, 0);
}
// Directory Tabs Logic
function switchDirectory(tabId) {
document.querySelectorAll('.dir-content').forEach(el => el.classList.add('hidden'));
const target = document.getElementById('dir-' + tabId);
if(target) {
target.classList.remove('hidden');
target.classList.add('page-enter');
}
document.querySelectorAll('.dir-tab').forEach(el => {
if(el.dataset.tab === tabId) {
el.classList.remove('text-neutral-400', 'bg-transparent', 'border-transparent');
el.classList.add('text-white', 'bg-neutral-800', 'border-neutral-700');
} else {
el.classList.add('text-neutral-400', 'bg-transparent', 'border-transparent');
el.classList.remove('text-white', 'bg-neutral-800', 'border-neutral-700');
}
});
}
// Map Region Logic
function selectRegion(regionId, name, description, spots) {
// Update SVG active state
const path = document.getElementById('path-' + regionId);
if(path) {
document.querySelectorAll('.region-path').forEach(el => el.classList.remove('active'));
path.classList.add('active');
}
// Update Text Content
const titleEl = document.getElementById('map-region-title');
const descEl = document.getElementById('map-region-desc');
const listEl = document.getElementById('map-region-spots');
if(titleEl && descEl && listEl) {
titleEl.style.opacity = '0';
descEl.style.opacity = '0';
listEl.style.opacity = '0';
setTimeout(() => {
titleEl.innerText = name;
descEl.innerText = description;
// Generate spots html
let spotsHtml = '';
spots.forEach(spot => {
spotsHtml += `
<div class="flex items-center gap-3 p-3 rounded bg-neutral-800/50 border border-white/5 hover:border-red-500/30 transition-colors">
<div class="w-10 h-10 rounded bg-neutral-700 bg-cover bg-center" style="background-image: url('${spot.img}')"></div>
<div>
<h4 class="text-white text-xs font-medium">${spot.name}</h4>
<p class="text-neutral-500 text-[10px]">${spot.type}</p>
</div>
</div>`;
});
listEl.innerHTML = spotsHtml;
titleEl.style.opacity = '1';
descEl.style.opacity = '1';
listEl.style.opacity = '1';
}, 200);
}
}
// SITECH Program Tabs
function switchProgram(dayId) {
document.querySelectorAll('.prog-content').forEach(el => el.classList.add('hidden'));
const target = document.getElementById('prog-' + dayId);
if(target) {
target.classList.remove('hidden');
target.classList.add('page-enter');
}
document.querySelectorAll('.prog-tab').forEach(el => {
if(el.dataset.day === dayId) {
el.classList.add('text-amber-500', 'border-amber-500', 'bg-amber-500/10');
el.classList.remove('text-neutral-400', 'border-transparent');
} else {
el.classList.remove('text-amber-500', 'border-amber-500', 'bg-amber-500/10');
el.classList.add('text-neutral-400', 'border-transparent');
}
});
}
function scrollToForm(type) {
const form = document.getElementById('sitech-form');
if(form) form.scrollIntoView({ behavior: 'smooth' });
const select = document.getElementById('form-type');
if(select) select.value = type;
}
// Login Simulation
function simulateLogin() {
const btn = document.getElementById('login-btn');
if(btn) {
const originalText = btn.innerText;
btn.innerText = 'Connexion...';
setTimeout(() => {
btn.innerText = originalText;
navigate('member');
}, 800);
}
}
// Member Space Tabs
function switchMemberTab(tabId) {
document.querySelectorAll('.member-tab-content').forEach(el => el.classList.add('hidden'));
document.querySelectorAll('.member-tab-btn').forEach(el => {
el.classList.remove('bg-neutral-800', 'text-white');
el.classList.add('text-neutral-400', 'hover:bg-neutral-800/50');
});
const target = document.getElementById('member-' + tabId);
const btn = document.getElementById('btn-member-' + tabId);
if(target) {
target.classList.remove('hidden');
target.classList.add('page-enter');
}
if(btn) {
btn.classList.add('bg-neutral-800', 'text-white');
btn.classList.remove('text-neutral-400', 'hover:bg-neutral-800/50');
}
}
document.addEventListener('DOMContentLoaded', () => {
if(window.lucide) lucide.createIcons();
navigate('home');
switchDirectory('tech');
switchProgram('day1');
selectRegion('sud', 'Région Sud (Lagunes)', 'Cœur économique et urbain. Gratte-ciels, quartiers populaires et lagune.', [
{name: 'Plateau Business District', type: 'Urbain / Moderne', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=200'},
{name: 'Blockhauss', type: 'Village Lagunaire', img: 'https://images.unsplash.com/photo-1577083639236-0f44488b5c9c?q=80&w=200'},
{name: 'Grand-Bassam Colonial', type: 'Historique / Plage', img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=200'}
]);
});



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



const profiles = {
marc: {
name: "Marc Zadi", job: "Chef Opérateur", status: "Disponible", statusColor: "green", location: "Abidjan, Cocody", equip: "RED, ARRI, Sony FX",
img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b03791e6-6d2b-4d0f-b737-1fb320975385_3840w.jpg",
rates: { day: "150.000", week: "850.000" },
films: [
{ title: "Les Coups de la Vie (S3)", role: "Chef Opérateur", year: "2023", stats: "2.5M Vues (TV/Web)" },
{ title: "Invisibles", role: "Caméraman", year: "2020", stats: "1.2M Vues" },
{ title: "Wara", role: "Chef Op Secondaire", year: "2021", stats: "900k Vues" }
],
gallery: [
"https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400",
"https://images.unsplash.com/photo-1579294246193-4a001da6135b?q=80&w=400",
"https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=400"
]
},
aicha: {
name: "Aïcha Touré", job: "Ingénieure Son", status: "En Tournage", statusColor: "neutral", location: "Abidjan, Yopougon", equip: "Sound Devices, Sennheiser",
img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000",
rates: { day: "100.000", week: "500.000" },
films: [
{ title: "L'Héritage", role: "Perchman", year: "2022", stats: "50k Entrées Salle" },
{ title: "Cacao", role: "Ingé Son", year: "2021", stats: "3M Vues" }
],
gallery: [
"https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=400",
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400"
]
},
eric: {
name: "Eric Kouassi", job: "Chef Électro", status: "Disponible", statusColor: "green", location: "Bassam", equip: "HMI, LED SkyPanel",
img: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93b379c5-b1cf-47b6-83b7-92395639d511_320w.jpg",
rates: { day: "120.000", week: "600.000" },
films: [
{ title: "MTV Shuga", role: "Chef Électro", year: "2021", stats: "5M Vues" },
{ title: "Le Ticket", role: "Électro", year: "2023", stats: "12k Entrées" }
],
gallery: [
"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400",
"https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&w=400"
]
}
};
function openPublicProfile(id) {
const p = profiles[id];
if(!p) return;
document.getElementById('pp-img').src = p.img;
document.getElementById('pp-name').innerText = p.name;
document.getElementById('pp-job').innerText = p.job;
document.getElementById('pp-location').innerText = p.location;
document.getElementById('pp-equip').innerText = p.equip;
const statusEl = document.getElementById('pp-status');
statusEl.innerText = p.status;
statusEl.className = `px-3 py-1 rounded-full text-xs font-bold uppercase border ${p.statusColor === 'green' ? 'bg-green-500/20 text-green-500 border-green-500/30' : 'bg-neutral-800 text-neutral-500 border-white/5'}`;
document.getElementById('pp-rate-day').innerText = p.rates.day + ' FCFA';
document.getElementById('pp-rate-week').innerText = p.rates.week + ' FCFA';
const filmsHtml = p.films.map(f => `
<div class="p-4 rounded-xl border border-white/5 bg-neutral-900/30 flex justify-between items-center hover:border-white/10 transition-colors">
<div>
<h3 class="font-bold text-white text-sm md:text-base">${f.title}</h3>
<p class="text-xs text-neutral-500">${f.role} • ${f.year}</p>
</div>
<div class="text-right">
<div class="text-base md:text-lg font-bold text-white">${f.stats}</div>
</div>
</div>
`).join('');
document.getElementById('pp-films').innerHTML = filmsHtml;
const galleryHtml = p.gallery.map(img => `
<div class="aspect-square rounded-lg overflow-hidden border border-white/10 bg-neutral-900 group relative">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>
`).join('');
document.getElementById('pp-gallery').innerHTML = galleryHtml;
navigate('public-profile');
}



window.switchAdminTab = function(tabId) { document.querySelectorAll('.admin-view').forEach(el => el.classList.add('hidden')); const target = document.getElementById('admin-view-' + tabId); if(target) target.classList.remove('hidden'); document.querySelectorAll('.admin-nav-btn').forEach(btn => { if(btn.dataset.target === tabId) { btn.classList.add('bg-red-600/10', 'text-red-500', 'border-red-600/20'); btn.classList.remove('text-neutral-400', 'hover:bg-white/5', 'hover:text-white', 'border-transparent'); } else { btn.classList.remove('bg-red-600/10', 'text-red-500', 'border-red-600/20'); btn.classList.add('text-neutral-400', 'hover:bg-white/5', 'hover:text-white', 'border-transparent'); } }); }



// MOCK BACKEND & DEPLOYMENT SYSTEM
window.backend = {
data: {
users: [
{ id: 1, name: 'Jamel Basiru', email: 'jamel@retechci.org', role: 'admin', status: 'active', job: 'Monteur Image' },
{ id: 2, name: 'Orlane N\'guessan', email: 'orlane@retechci.org', role: 'treasury', status: 'active', job: 'Trésorière' },
{ id: 3, name: 'Marc Zadi', email: 'marc@retechci.org', role: 'member', status: 'active', job: 'Chef Opérateur' },
{ id: 4, name: 'Kouamé Jean', email: 'kouame@gmail.com', role: 'member', status: 'pending', job: 'Assistant Caméra' },
{ id: 5, name: 'Aminata Soro', email: 'aminata@gmail.com', role: 'member', status: 'pending', job: 'Maquilleuse' }
],
transactions: [
{ id: 'TRX-998', date: '2024-03-15', label: 'Cotisation An. - Marc Zadi', type: 'in', amount: 25000, status: 'validated' },
{ id: 'TRX-999', date: '2024-03-14', label: 'Location Salle Sofitel (Acompte)', type: 'out', amount: 500000, status: 'pending' }
]
},
init() {
if(localStorage.getItem('retechci_data')) {
this.data = JSON.parse(localStorage.getItem('retechci_data'));
}
this.render();
},
save() {
localStorage.setItem('retechci_data', JSON.stringify(this.data));
this.render();
},
login(form) {
const email = form.querySelector('input[type="text"]').value;
const user = this.data.users.find(u => (u.email === email || u.name === email));
const btn = form.querySelector('button[type="submit"]');
const originalText = btn.innerText;
btn.innerText = 'Authentification...';
setTimeout(() => {
if(user) {
if(user.status === 'pending') { alert('Compte en attente de validation.'); btn.innerText = originalText; return; }
document.body.className = `antialiased selection:bg-red-900 selection:text-white overflow-x-hidden flex flex-col min-h-screen text-neutral-300 bg-neutral-950 role-${user.role}`;
if(user.role === 'admin') navigate('admin-dashboard');
else if(user.role === 'treasury') navigate('treasury-dashboard');
else navigate('member');
} else {
// Demo fallback
if(email.includes('admin')) { navigate('admin-dashboard'); document.body.classList.add('role-admin'); }
else if(email.includes('tresor')) { navigate('treasury-dashboard'); document.body.classList.add('role-treasury'); }
else { alert('Utilisateur non trouvé. Utilisez \'admin\' ou \'tresor\' pour la démo.'); }
}
btn.innerText = originalText;
}, 800);
},
register() {
alert('Demande d\'inscription envoyée au bureau pour validation.');
navigate('auth');
},
validateUser(id) {
const u = this.data.users.find(u => u.id === id);
if(u) { u.status = 'active'; this.save(); }
},
deleteUser(id) {
this.data.users = this.data.users.filter(u => u.id !== id);
this.save();
},
addTransaction() {
const label = document.getElementById('trx-label').value;
const amount = document.getElementById('trx-amount').value;
const type = document.getElementById('trx-type').value;
this.data.transactions.unshift({
id: 'TRX-' + Math.floor(Math.random()*10000),
date: new Date().toISOString().split('T')[0],
label,
amount,
type,
status: 'validated'
});
this.save();
document.getElementById('modal-transaction').classList.add('hidden');
},
deploySystem() {
const btn = document.getElementById('deploy-btn');
const console = document.getElementById('deploy-console');
btn.disabled = true;
btn.classList.add('opacity-50');
console.classList.remove('hidden');
console.innerHTML = '<div class="text-amber-500">> Initializing deployment sequence...</div>';
const steps = [
{ t: 1000, msg: '> Pulling latest commit from main...' },
{ t: 2500, msg: '> Building frontend assets (Vite)...' },
{ t: 4000, msg: '> Optimizing images and fonts...' },
{ t: 5500, msg: '> Running database migrations...' },
{ t: 7000, msg: '> Verifying integrity...' },
{ t: 8500, msg: '<span class="text-green-500">> DEPLOYMENT SUCCESSFUL v2.4.0</span>' }
];
steps.forEach(step => {
setTimeout(() => {
console.innerHTML += `<div>${step.msg}</div>`;
console.scrollTop = console.scrollHeight;
}, step.t);
});
setTimeout(() => {
btn.disabled = false;
btn.classList.remove('opacity-50');
alert('Système déployé avec succès en production.');
}, 9000);
},
render() {
// Render Admin Validation
const pendingList = document.getElementById('admin-pending-list');
if(pendingList) {
const pending = this.data.users.filter(u => u.status === 'pending');
if(pending.length === 0) pendingList.innerHTML = '<div class="p-4 text-center text-neutral-500 text-sm">Aucune demande en attente</div>';
else {
pendingList.innerHTML = pending.map(u => `
<div class="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
<div class="flex items-center gap-4">
<div class="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">${u.name.substring(0,2).toUpperCase()}</div>
<div><div class="text-white font-medium">${u.name}</div><div class="text-xs text-neutral-500">${u.job}</div></div>
</div>
<div class="flex gap-2">
<button onclick="window.backend.deleteUser(${u.id})" class="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-500/30 rounded hover:bg-red-500/10">Refuser</button>
<button onclick="window.backend.validateUser(${u.id})" class="px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500">Valider</button>
</div>
</div>`).join('');
}
}
// Render Admin Roles
const rolesList = document.getElementById('admin-roles-list');
if(rolesList) {
rolesList.innerHTML = this.data.users.filter(u => u.status === 'active').map(u => `
<tr>
<td class="px-6 py-4 text-white font-medium">${u.name}</td>
<td class="px-6 py-4"><span class="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-bold border border-white/10">${u.role}</span></td>
<td class="px-6 py-4 text-right"><button class="text-white hover:text-red-500 transition-colors">Modifier</button></td>
</tr>`).join('');
}
// Render Treasury
const treasuryList = document.getElementById('treasury-list');
if(treasuryList) {
treasuryList.innerHTML = this.data.transactions.map(t => `
<tr class="hover:bg-white/5">
<td class="px-6 py-4">${t.date}</td>
<td class="px-6 py-4">${t.label}</td>
<td class="px-6 py-4"><span class="px-2 py-1 rounded text-xs ${t.type === 'in' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}">${t.type === 'in' ? 'Entrée' : 'Sortie'}</span></td>
<td class="px-6 py-4 text-white font-medium">${t.amount} FCFA</td>
<td class="px-6 py-4 text-green-500">${t.status === 'validated' ? 'Confirmé' : 'En attente'}</td>
</tr>`).join('');
}
}
};
document.addEventListener('DOMContentLoaded', () => window.backend.init());



      (function() {
          setTimeout(() => {
              const home = document.getElementById('home');
              const toast = document.getElementById('birthday-toast');
              const progress = document.getElementById('birthday-progress');
              if(home && !home.classList.contains('hidden') && toast) {
                  toast.classList.remove('translate-y-48', 'opacity-0');
                  if(progress) {
                      setTimeout(() => {
                          progress.classList.remove('w-0');
                          progress.classList.add('w-full');
                      }, 100);
                  }
                  setTimeout(() => {
                      toast.classList.add('translate-y-48', 'opacity-0');
                  }, 10000);
              }
          }, 2000);
      })();
    


      function nextRegStep(step) {
        for(let i=1; i<=3; i++) document.getElementById('reg-step-'+i).classList.add('hidden');
        document.getElementById('reg-step-' + step).classList.remove('hidden');
        for(let i=1; i<=3; i++) {
           const el = document.getElementById('step-indicator-'+i);
           if(i === step) {
              el.className = "w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors";
           } else if (i < step) {
              el.className = "w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors";
              el.innerHTML = "✓";
           } else {
              el.className = "w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors";
              el.innerHTML = i;
           }
        }
      }
      function setRole(role) {
        document.body.classList.remove('role-admin', 'role-treasury', 'role-member');
        document.body.classList.add('role-' + role);
      }
      const oldLogin = window.simulateLogin;
      window.simulateLogin = function(role) {
        const btn = document.getElementById('login-btn');
        if(btn) {
          btn.innerText = 'Connexion...';
          setTimeout(() => {
             btn.innerText = 'Se connecter';
             setRole(role || 'member');
             if(role === 'admin') navigate('admin-dashboard');
             else if(role === 'treasury') navigate('treasury-dashboard');
             else navigate('member');
          }, 800);
        }
      }
    


      document.addEventListener('DOMContentLoaded', () => { const oldDeploy = window.backend.deploySystem; window.backend.deploySystem = function() { const ph = document.getElementById('deploy-console-placeholder'); if(ph) ph.style.display = 'none'; oldDeploy.call(this); }; });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 w-full h-screen -z-10 opacity-30 brightness-[0.25] bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abdc2d1a-b7ca-4482-a10c-2ccdeae84271_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-md border-white/5 bg-neutral-950/80" style={{}}>
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="navigate('home')">
<div className="flex shadow-red-900/40 text-white bg-red-600 w-8 h-8 rounded shadow-lg items-center justify-center" style={{}}>
<img alt="Logo" className="w-full h-full object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8aa7e65b-0c19-4a13-828a-6c92cfed9f01_320w.jpg"/>
</div>
<span className="font-semibold tracking-tight text-lg text-white">
            RETECHCI
          </span>
</button>
<div className="hidden lg:flex items-center gap-6 text-sm font-medium">
<button className="nav-link transition-colors hover:text-white text-neutral-400" data-target="home" onclick="navigate('home')">
            Accueil
          </button>
<button className="nav-link transition-colors hover:text-white text-neutral-400" data-target="about" onclick="navigate('about')">
            A propos
          </button>
<button className="nav-link transition-colors hover:text-white text-neutral-400" data-target="annuaire" onclick="navigate('annuaire')" style={{}}>
            Annuaire
          </button>
<button className="nav-link transition-colors hover:text-white text-neutral-400" data-target="news" onclick="navigate('news')">
            Actualités
          </button>
<button className="nav-link transition-colors hover:text-white text-neutral-400" data-target="legal" onclick="navigate('legal')" style={{}}>
            Conventions &amp; Légal
          </button>
<button className="nav-link hover:text-red-500 transition-colors flex items-center gap-2 text-neutral-400" data-target="direct" onclick="navigate('direct')" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" style={{}}></span>
</span>
            Direct
          </button>
<button className="nav-link transition-colors hover:text-amber-400 font-bold text-amber-500 tracking-wide text-white" data-target="sitech" onclick="navigate('sitech')">
            SITECH 2027
          </button>
</div>
<div className="flex items-center gap-4">
<div className="relative group z-50">
<div className="relative group">
<button className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-neutral-800 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] relative z-20">
<svg className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</button>

<div className="absolute right-0 top-full pt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 origin-top-right z-50">
<div className="bg-neutral-900/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden ring-1 ring-white/5">

<div className="p-4 border-b border-white/5 bg-white/5 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 overflow-hidden shrink-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d631acd-164f-476f-bb53-e90b294d3818_320w.jpg"/>
</div>
<div className="min-w-0">
<h4 className="text-sm font-semibold text-white truncate">
                        Jamel Basiru
                      </h4>
<p className="text-xs text-neutral-400 truncate">
                        jamel.basiru@retechci.org
                      </p>
</div>
</div>

<div className="p-2 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors group/item" onclick="navigate('member')">
<svg className="lucide lucide-user text-neutral-500 group-hover/item:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                      Mon Espace
                    </button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors group/item">
<div className="flex items-center gap-3">
<svg className="lucide lucide-bell text-neutral-500 group-hover/item:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
                        Notifications
                      </div>
<span className="px-1.5 py-0.5 rounded-full bg-red-600 text-[10px] font-bold text-white shadow-lg shadow-red-900/50 ring-1 ring-red-500/50">
                        3
                      </span>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors group/item">
<div className="flex items-center gap-3">
<svg className="lucide lucide-settings text-neutral-500 group-hover/item:text-white transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                        Paramètres
                      </div>
</button>
<button className="only-admin w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors group/item" onclick="navigate('admin-dashboard')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
</svg>
                      Administration
                    </button>
<button className="only-treasury w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/10 transition-colors group/item" onclick="navigate('treasury-dashboard')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
<path d="M7 6h1v4"></path>
<path d="m16.71 13.88.7.71-2.82 2.82"></path>
</svg>
                      Trésorerie
                    </button>
</div>

<div className="p-2 mt-1 border-t border-white/5">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors" onclick="navigate('home')">
<svg className="lucide lucide-log-out" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
                      Déconnexion
                    </button>
</div>
</div>
</div>
</div>

<div className="absolute right-0 top-full pt-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 origin-top-right">
<div className="bg-neutral-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] p-2 overflow-hidden">

<div className="px-3 py-2.5 mb-2 border-b border-white/5">
<p className="text-white text-sm font-semibold tracking-tight">
                    Jamel Basiru
                  </p>
<p className="text-neutral-500 text-[11px] truncate font-medium">
                    jamel.basiru@retechci.org
                  </p>
</div>

<button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all group/item">
<div className="flex items-center gap-3">
<svg className="lucide lucide-message-square transition-colors group-hover/item:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                    Messages
                  </div>
<span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-lg shadow-red-900/40 border border-red-500/20">
                    3
                  </span>
</button>

<div className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all group/item cursor-pointer">
<div className="flex items-center gap-3">
<svg className="lucide lucide-moon transition-colors group-hover/item:text-white" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
</svg>
                    Mode Sombre
                  </div>

<div className="w-9 h-5 bg-neutral-800 rounded-full relative border border-white/10 group-hover/item:border-white/30 transition-colors">
<div className="absolute right-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-sm transition-all"></div>
</div>
</div>
<div className="h-px bg-white/5 my-2 mx-1"></div>

<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all" onclick="navigate('home')">
<svg className="lucide lucide-log-out" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
<polyline points="16 17 21 12 16 7"></polyline>
<line x1="21" x2="9" y1="12" y2="12"></line>
</svg>
                  Déconnexion
                </button>
</div>
</div>
</div>
</div>
</div>
</nav>

<div className="pt-16 flex-grow">



<main className="page-section hidden" id="home">

<section className="lg:pt-32 overflow-hidden pt-20 pb-12 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b to-transparent blur-3xl pointer-events-none from-red-900/20" style={{}}></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest mb-8 backdrop-blur-md animate-[fadeIn_0.5s_ease-out] border-white/10 bg-white/5 text-neutral-300" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-red-500" style={{}}></span>
              La référence technique en Côte d'Ivoire
            </div>
<h1 className="lg:text-7xl leading-[1.1] text-5xl font-semibold tracking-tight font-geist mb-6 text-white">
              L'Excellence Technique du
              <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-neutral-500 from-white via-neutral-200" style={{}}>
                Cinéma Ivoirien
              </span>
</h1>
<div className="flex flex-col mb-10 space-y-4 items-center justify-center">

<div className="h-px md:w-96 overflow-hidden bg-gradient-to-r from-transparent to-transparent via-neutral-700 w-64 relative">
<div className="blur-[2px] animate-shimmer-slide bg-gradient-to-r from-transparent via-red-500/80 to-transparent w-1/2 h-full absolute top-0 right-0 bottom-0 left-0" style={{animation: 'shimmer-slide 8s cubic-bezier(0.4, 0, 0.2, 1) infinite !important'}}></div>
</div>

<div className="flex items-center gap-2 px-4 py-1.5 rounded-full border backdrop-blur-sm bg-white/5 border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" style={{}}></span>
</span>
<span className="text-xs font-semibold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r bg-[length:200%_auto] animate-text-shine from-neutral-400 via-white to-neutral-400" style={{}}>
                  Innovation • Créativité • Technique
                </span>
</div>
</div>
<style>
              @keyframes shimmer-slide {
                  0% { transform: translateX(-200%); }
                  100% { transform: translateX(400%); }
              }
              .animate-shimmer-slide {
                  animation: shimmer-slide 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
              }

              @keyframes text-shine {
                  to { background-position: 200% center; }
              }
              .animate-text-shine {
                  animation: text-shine 4s linear infinite;
              }
            </style>
<p className="leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto scale-100" style={{}}>
              La plateforme centrale pour les techniciens de cinéma de Côte
              d'Ivoire. Une vitrine pour nos talents, un hub pour les
              productions et un organe de défense de nos métiers.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
<button className="px-8 py-3 text-sm font-medium rounded transition-colors shadow-lg bg-red-600 text-white hover:bg-red-700 shadow-red-900/20" onclick="navigate('annuaire')" style={{}}>
                Explorer les Talents
              </button>
<button className="px-8 py-3 border text-amber-500 text-sm font-medium rounded transition-colors bg-amber-600/10 border-amber-600/30 hover:bg-amber-600/20" onclick="navigate('sitech')" style={{}}>
                SITECH 2027
              </button>
</div>
</div>
</section>

<section className="overflow-hidden border-t pt-16 pb-16 bg-neutral-900/10 border-white/5" style={{}}>
<div className="max-w-7xl mx-auto px-6 mb-8 flex justify-between items-end">
<div className="">
<h2 className="text-2xl font-semibold font-geist mb-2 text-white">
                Talents à la Une
              </h2>
<p className="text-sm text-neutral-400" style={{}}>
                Techniciens certifiés et leurs disponibilités en temps réel.
              </p>
</div>
<button className="flex hover:text-red-400 text-xs font-medium text-red-500 gap-x-1 gap-y-1 items-center" onclick="navigate('annuaire')" style={{}}>
              Voir tout l'annuaire
              <svg className="lucide lucide-arrow-right w-3 h-3" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="flex overflow-x-auto gap-6 px-6 pb-8 snap-x mandatory no-scrollbar cursor-grab active:cursor-grabbing">

<div className="min-w-[320px] snap-center rounded-xl border p-5 hover:border-red-500/20 transition-all group relative overflow-hidden bg-neutral-900 border-white/5" style={{}}>
<div className="absolute top-0 right-0 p-3">
<span className="px-2 py-1 rounded text-[10px] text-green-500 border border-green-500/20 font-medium flex items-center gap-1.5 bg-green-900/20" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{}}></span>
                  Disponible
                </span>
</div>
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden border bg-neutral-800 border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39eadd5d-c66a-494a-aafe-ab7c48b12606_320w.jpg" style={{}}/>
</div>
<div className="">
<h3 className="font-medium text-lg leading-tight text-white">
                    Marc Zadi
                  </h3>
<p className="text-xs mt-1 text-neutral-400" style={{}}>
                    Chef Opérateur
                  </p>
<div className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500 px-1.5 py-0.5 rounded w-fit bg-neutral-800" style={{}}>
<svg className="lucide lucide-star w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
                    Senior
                  </div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="rounded p-2 border bg-neutral-800/50 border-white/5" style={{}}>
<p className="text-[10px] uppercase tracking-wider mb-1 text-neutral-400" style={{}}>
                    Dernière Production
                  </p>
<p className="text-xs truncate text-white">
                    "Les Coups de la Vie" - Saison 3
                  </p>
<div className="w-full h-1 mt-2 rounded-full overflow-hidden bg-neutral-700" style={{}}>
<div className="bg-gradient-to-r h-full w-[85%] from-red-600 to-red-400" style={{}}></div>
</div>
<p className="text-[10px] text-right text-neutral-500 mt-1" style={{}}>
                    Audience: 85%
                  </p>
</div>
<div className="flex items-center justify-between text-xs border-t pt-3 border-white/5">
<span className="text-neutral-400" style={{}}>
                    Cachet est. / sem
                  </span>
<span className="font-medium text-white">
                    850k - 1.2M
                    <span className="text-[10px] text-neutral-600" style={{}}>
                      FCFA
                    </span>
</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded text-xs font-semibold transition-colors bg-white text-black hover:bg-neutral-200" onclick="openPublicProfile('marc')" style={{}}>
                  Voir Profil
                </button>
<button className="transition-colors border rounded pt-2 pr-3 pb-2 pl-3 hover:bg-neutral-800 text-white border-white/10" onclick="openPublicProfile('marc')" style={{}} title="Voir CV">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</button>
</div>
</div>

<div className="min-w-[320px] snap-center rounded-xl border p-5 hover:border-red-500/20 transition-all group relative overflow-hidden bg-neutral-900 border-white/5" style={{}}>
<div className="absolute top-0 right-0 p-3">
<span className="px-2 py-1 rounded text-[10px] text-neutral-500 border font-medium flex items-center gap-1.5 bg-neutral-800 border-white/5" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-neutral-500" style={{}}></span>
                  En Tournage
                </span>
</div>
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden border bg-neutral-800 border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/171bd9ad-ece9-4c7f-a0d1-75ab4691177b_320w.jpg" style={{}}/>
</div>
<div className="">
<h3 className="font-medium text-lg leading-tight text-white">
                    Aïcha Touré
                  </h3>
<p className="text-xs mt-1 text-neutral-400" style={{}}>
                    Ingénieure Son
                  </p>
<div className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500 px-1.5 py-0.5 rounded w-fit bg-neutral-800" style={{}}>
<svg className="lucide lucide-star w-3 h-3 text-neutral-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
                    Intermédiaire
                  </div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="rounded p-2 border bg-neutral-800/50 border-white/5" style={{}}>
<p className="text-[10px] uppercase tracking-wider mb-1 text-neutral-400" style={{}}>
                    Dernière Production
                  </p>
<p className="text-xs truncate text-white">
                    Long Métrage "L'Héritage"
                  </p>
<div className="w-full h-1 mt-2 rounded-full overflow-hidden bg-neutral-700" style={{}}>
<div className="bg-gradient-to-r h-full w-[60%] from-red-600 to-red-400" style={{}}></div>
</div>
<p className="text-[10px] text-right text-neutral-500 mt-1" style={{}}>
                    Audience: 60%
                  </p>
</div>
<div className="flex items-center justify-between text-xs border-t pt-3 border-white/5">
<span className="text-neutral-400" style={{}}>
                    Cachet est. / sem
                  </span>
<span className="font-medium text-white">
                    450k - 600k
                    <span className="text-[10px] text-neutral-600" style={{}}>
                      FCFA
                    </span>
</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded text-xs font-semibold transition-colors bg-neutral-800 text-white hover:bg-neutral-700" onclick="openPublicProfile('aicha')" style={{}}>
                  Voir Profil
                </button>
<button className="px-3 py-2 rounded border transition-colors border-white/10 text-white hover:bg-neutral-800" onclick="openPublicProfile('aicha')" style={{}} title="Voir CV">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</button>
</div>
</div>

<div className="min-w-[320px] snap-center rounded-xl border p-5 hover:border-red-500/20 transition-all group relative overflow-hidden bg-neutral-900 border-white/5" style={{}}>
<div className="absolute top-0 right-0 p-3">
<span className="px-2 py-1 rounded text-[10px] text-green-500 border border-green-500/20 font-medium flex items-center gap-1.5 bg-green-900/20" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" style={{}}></span>
                  Disponible
                </span>
</div>
<div className="flex items-center gap-4 mb-5">
<div className="w-14 h-14 rounded-full overflow-hidden border bg-neutral-800 border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/93b379c5-b1cf-47b6-83b7-92395639d511_320w.jpg" style={{}}/>
</div>
<div>
<h3 className="font-medium text-lg leading-tight text-white">
                    Eric Kouassi
                  </h3>
<p className="text-xs mt-1 text-neutral-400" style={{}}>
                    Chef Électro
                  </p>
<div className="mt-1 flex items-center gap-1 text-[10px] text-neutral-500 px-1.5 py-0.5 rounded w-fit bg-neutral-800" style={{}}>
<svg className="lucide lucide-star w-3 h-3 text-yellow-500 fill-yellow-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
                    Senior
                  </div>
</div>
</div>
<div className="space-y-3 mb-5">
<div className="rounded p-2 border bg-neutral-800/50 border-white/5" style={{}}>
<p className="text-[10px] uppercase tracking-wider mb-1 text-neutral-400" style={{}}>
                    Dernière Production
                  </p>
<p className="text-xs truncate text-white">
                    Série TV "Invisibles"
                  </p>
<div className="w-full h-1 mt-2 rounded-full overflow-hidden bg-neutral-700" style={{}}>
<div className="bg-gradient-to-r h-full w-[92%] from-red-600 to-red-400" style={{}}></div>
</div>
<p className="text-[10px] text-right text-neutral-500 mt-1" style={{}}>
                    Audience: 92%
                  </p>
</div>
<div className="flex items-center justify-between text-xs border-t pt-3 border-white/5">
<span className="text-neutral-400" style={{}}>
                    Cachet est. / sem
                  </span>
<span className="font-medium text-white">
                    600k - 900k
                    <span className="text-[10px] text-neutral-600" style={{}}>
                      FCFA
                    </span>
</span>
</div>
</div>
<div className="flex gap-2">
<button className="flex-1 py-2 rounded text-xs font-semibold transition-colors bg-white text-black hover:bg-neutral-200" onclick="openPublicProfile('eric')" style={{}}>
                  Voir Profil
                </button>
<button className="px-3 py-2 rounded border transition-colors border-white/10 text-white hover:bg-neutral-800" onclick="openPublicProfile('eric')" style={{}} title="Voir CV">
<svg className="lucide lucide-file-text" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</button>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pb-24 relative">
<div className="absolute inset-0 bg-gradient-to-b -z-10 from-black to-neutral-900" style={{}}></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest mb-6 border-white/10 bg-white/5 text-neutral-300" style={{}}>
                Innovation RETECHCI
              </div>
<h2 className="text-4xl font-bold text-white font-geist mb-6" style={{}}>
                CARTE PROFESSIONNELLE
                <span className="text-red-600">DIGITALE</span>
</h2>
<p className="leading-relaxed mb-8 text-neutral-400" style={{}}>
                Chaque membre du réseau dispose d'une carte virtuelle unique.
                Scannable instantanément sur les plateaux, elle certifie vos
                compétences, votre statut et votre adhésion à la grille
                salariale.
              </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300" style={{}}>
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500" style={{}}>
<svg className="lucide lucide-qr-code w-4 h-4" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="5" x="3" y="3"></rect>
<rect height="5" rx="1" width="5" x="16" y="3"></rect>
<rect height="5" rx="1" width="5" x="3" y="16"></rect>
<path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
<path d="M21 21v.01"></path>
<path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
<path d="M3 12h.01"></path>
<path d="M12 3h.01"></path>
<path d="M12 16v.01"></path>
<path d="M16 12h1"></path>
<path d="M21 12v.01"></path>
<path d="M12 21v-1"></path>
</svg>
</div>
                  QR Code unique pour vérification instantanée
                </li>
<li className="flex items-center gap-3 text-sm text-neutral-300" style={{}}>
<div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500" style={{}}>
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
                  Certification des compétences par le Bureau
                </li>
</ul>
<button className="transition-colors hover:bg-neutral-200 text-sm font-medium text-black bg-white rounded pt-3 pr-6 pb-3 pl-6 backdrop-blur-sm">
                Obtenir ma carte
              </button>
</div>

<div className="flex card-3d-wrapper pt-10 pb-10 perspective-container justify-center">
<div className="card-3d-inner w-[340px] h-[540px] relative rounded-[2rem] shadow-[0_20px_50px_rgba(220,38,38,0.3)] border overflow-hidden border-white/10 bg-neutral-900" style={{}}>

<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
<div className="absolute top-0 right-0 w-64 h-64 blur-[80px] rounded-full pointer-events-none bg-red-600/20" style={{}}></div>

<div className="z-10 flex flex-col text-center h-full pt-8 pr-8 pb-8 pl-8 relative items-center">
<style>
                    @keyframes card3DEntrance {
                      0% {
                        opacity: 0;
                        transform: perspective(1000px) translateY(50px) rotateX(15deg) scale(0.9);
                      }
                      100% {
                        opacity: 1;
                        transform: perspective(1000px) translateY(0) rotateX(0) scale(1);
                      }
                    }
                    /* Target the parent card container from within */
                    .card-3d-inner {
                      animation: card3DEntrance 1.4s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                    }
                  </style>
<div className="flex w-full mb-6 items-start justify-between">
<svg className="lucide lucide-clapperboard w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="clapperboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(239, 68, 68)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
<path d="m6.2 5.3 3.1 3.9"></path>
<path d="m12.4 3.4 3.1 4"></path>
<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
</svg>
<div className="text-[10px] uppercase font-semibold text-neutral-500 tracking-widest border-white/10 border rounded-full pt-1 pr-2 pb-1 pl-2" style={{}}>
                      CATEGORIE A
                    </div>
</div>
<div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-red-500 mb-6 to-neutral-800" style={{}}>
<div className="w-full h-full rounded-full overflow-hidden bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d631acd-164f-476f-bb53-e90b294d3818_320w.jpg"/>
</div>
</div>
<h3 className="text-2xl font-bold mb-1 font-geist text-white">
                    Jamel Basiru
                  </h3>
<p className="text-sm font-medium mb-4 text-red-400" style={{}}>
                    Monteur Image
                  </p>
<div className="flex flex-wrap gap-2 justify-center mb-8">
<span className="text-[10px] -multi text-neutral-400 bg-neutral-800 border-white/5 border rounded pt-1 pr-2 pb-1 pl-2" style={{}}>
                      Directeur Exécutif
                    </span>
</div>
<div className="flex bg-white w-full rounded-xl mt-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between">
<div className="text-left">
<p className="text-[10px] font-bold uppercase text-black">
                        ID Membre
                      </p>
<p className="text-xs font-mono text-neutral-600" style={{}}>
                        CI-2024-8842
                      </p>
</div>
<div className="flex bg-black w-12 h-12 rounded items-center justify-center cursor-pointer hover:scale-105 hover:bg-neutral-900 active:scale-95 transition-all duration-200 shadow-lg shadow-black/20 group relative" style={{}} title="Profil Technicien : Jamel Basiru
Né le 12/04/1988
À Abidjan, Cocody">
<a aria-label="Voir le profil de Jamel Basiru" className="flex items-center justify-center w-full h-full text-white" href="#profile-jamel">
<svg className="lucide lucide-qr-code w-8 h-8 transition-opacity group-hover:opacity-80" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="5" rx="1" width="5" x="3" y="3"></rect>
<rect height="5" rx="1" width="5" x="16" y="3"></rect>
<rect height="5" rx="1" width="5" x="3" y="16"></rect>
<path d="M21 16h-3a2 2 0 0 0-2 2v3"></path>
<path d="M21 21v.01"></path>
<path d="M12 7v3a2 2 0 0 1-2 2H7"></path>
<path d="M3 12h.01"></path>
<path d="M12 3h.01"></path>
<path d="M12 16v.01"></path>
<path d="M16 12h1"></path>
<path d="M21 12v.01"></path>
<path d="M12 21v-1"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="absolute inset-0 glass-shine pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-amber-500/10 relative overflow-hidden bg-amber-950/20" style={{}}>
<div className="bg-center opacity-10 mix-blend-luminosity bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-2 block" style={{}}>
                L'événement de l'année
              </span>
<h2 className="text-4xl md:text-5xl font-bold font-geist mb-6 text-white">
                SITECH
                <span className="text-amber-500" style={{}}>2027</span>
</h2>
<p className="text-lg mb-8 max-w-lg text-neutral-300" style={{}}>
                Salon International des Technologies de l'Image et du Son.
                Retrouvez les dernières innovations, des masterclasses
                exclusives et tout l'écosystème audiovisuel ouest-africain.
              </p>
<div className="flex items-center gap-6">
<div className="flex flex-col">
<span className="text-3xl font-bold font-geist text-white">
                    15-17
                  </span>
<span className="text-xs text-amber-500 uppercase font-bold" style={{}}>
                    Novembre
                  </span>
</div>
<div className="w-px h-12 bg-white/10"></div>
<div className="flex flex-col">
<span className="font-medium text-white">
                    Sofitel Hôtel Ivoire
                  </span>
<span className="text-xs text-neutral-500" style={{}}>
                    Abidjan, Cocody
                  </span>
</div>
</div>
</div>
<div className="md:w-1/2 flex justify-end">
<button className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-none border border-amber-500 text-amber-500 font-bold transition-all hover:bg-amber-500 hover:text-black" onclick="navigate('sitech')" style={{}}>
<span className="relative z-10 flex items-center gap-2">
                  DÉCOUVRIR LE PROGRAMME
                  <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="actualites" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-10">
<h2 className="text-3xl font-semibold font-geist text-white">
                Actualité Cinéma
                <span className="text-red-600" style={{}}>CI</span>
</h2>
<button className="text-sm text-neutral-500 transition-colors hover:text-white" onclick="navigate('news')">
                Toutes les news
              </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase rounded bg-red-600 text-white" style={{}}>
                    Box Office
                  </div>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-red-500 transition-colors text-white" style={{}}>
                  Record d'entrées pour "La Canne du Roi"
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2" style={{}}>
                  Le dernier long métrage ivoirien dépasse les 50.000 entrées en
                  salle, confirmant la bonne santé du secteur...
                </p>
<span className="text-xs mt-3 block text-neutral-600" style={{}}>
                  Il y a 2 jours
                </span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase rounded border bg-neutral-800 text-white border-white/10" style={{}}>
                    Production
                  </div>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-red-500 transition-colors text-white" style={{}}>
                  Canal+ annonce 4 nouvelles séries originales
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2" style={{}}>
                  Investissement majeur dans la production locale avec le
                  lancement de quatre nouveaux chantiers dès septembre...
                </p>
<span className="text-xs mt-3 block text-neutral-600" style={{}}>
                  Il y a 5 jours
                </span>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-xl overflow-hidden mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase rounded bg-amber-600 text-white" style={{}}>
                    Festival
                  </div>
</div>
<h3 className="font-medium text-lg mb-2 group-hover:text-red-500 transition-colors text-white" style={{}}>
                  FESPACO 2025 : La délégation ivoirienne se prépare
                </h3>
<p className="text-neutral-500 text-sm line-clamp-2" style={{}}>
                  Le Ministère de la Culture et l'ONAC-CI organisent la
                  sélection des œuvres pour la prochaine biennale...
                </p>
<span className="text-xs mt-3 block text-neutral-600" style={{}}>
                  Il y a 1 semaine
                </span>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-neutral-900/30" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="p-6">
<div className="text-4xl md:text-5xl font-bold font-geist mb-2 text-white">
                  42
                </div>
<p className="text-neutral-500 text-xs uppercase tracking-widest" style={{}}>
                  Tournages en cours
                </p>
</div>
<div className="p-6 border-l border-white/5">
<div className="text-4xl md:text-5xl font-bold font-geist mb-2 text-white">
                  580+
                </div>
<p className="text-neutral-500 text-xs uppercase tracking-widest" style={{}}>
                  Techniciens Certifiés
                </p>
</div>
<div className="p-6 border-l border-white/5">
<div className="text-4xl md:text-5xl font-bold font-geist mb-2 text-white">
                  12
                </div>
<p className="text-neutral-500 text-xs uppercase tracking-widest" style={{}}>
                  Productions Internationales
                </p>
</div>
<div className="p-6 border-l border-white/5">
<div className="text-4xl md:text-5xl font-bold font-geist mb-2 text-white">
                  1.5M
                </div>
<p className="text-neutral-500 text-xs uppercase tracking-widest" style={{}}>
                  Heures travaillées (2023)
                </p>
</div>
</div>
</div>
</section>

<section className="h-[400px] w-full relative grayscale hover:grayscale-0 transition-all duration-700 bg-neutral-800" style={{}}>

<div className="w-full h-full bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-4.0083,5.3600,13,0/1200x400?access_token=pk.eyJ1IjoiZGVtbyIsImEiOiJja2VwbGc1aXQwM2hzMnBzMnJ5b3J5YnJ2In0.jFkIqA-6sB-W4Wc6c6v82g')] bg-cover bg-center flex items-center justify-center">
<div className="absolute inset-0 bg-neutral-950 z-20 flex flex-col overflow-y-auto">

<div className="border-b border-white/5 bg-neutral-900/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest text-center mb-8">
                    Nos Partenaires Officiels
                  </h3>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold text-white tracking-widest group-hover:text-white transition-colors">
                        SONY
                      </span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold text-white tracking-widest group-hover:text-red-600 transition-colors">
                        Canon
                      </span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold text-white tracking-widest group-hover:text-white transition-colors">
                        Dolby
                      </span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold text-white tracking-widest group-hover:text-blue-500 transition-colors">
                        Blackmagic
                      </span>
</div>

<div className="flex items-center gap-2 group cursor-pointer">
<span className="text-xl font-bold text-white tracking-widest italic group-hover:text-white transition-colors">
                        CANAL+
                      </span>
</div>
</div>
</div>
</div>

<footer className="bg-neutral-950 py-16 flex-grow">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded bg-red-600 flex items-center justify-center text-white shadow-lg shadow-red-900/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v20M2 12h20"></path>
</svg>
</div>
<span className="font-bold text-lg text-white tracking-tight">
                        RETECHCI
                      </span>
</div>
<p className="leading-relaxed text-sm text-neutral-400 mb-6" style={{}}>
                      Réseau des Techniciens du cinéma en Côte d'Ivoire.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-facebook" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5.3 4.1 2c2.6-2.1 4.3.7 4.3.7 2.3-1.8 6.9-2.2 7.5.6 1 2.2-2.9 4-1 6.3 5.4 1 6.9-3.9 6.9-3.9z"></path>
</svg>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-geist">
                      Navigation
                    </h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                          Accueil
                        </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                          Annuaire des Talents
                        </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-geist">
                      Ressources
                    </h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                          Grille Salariale
                        </a>
</li>
<li>
<a className="hover:text-amber-500 transition-colors" href="#">
                          Contrats Types
                        </a>
</li>
</ul>
</div>

<div>
<h4 className="font-bold text-white mb-6 font-geist">
                      Nous Contacter
                    </h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin text-red-500 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span>
                          Cocody Riviera 2, Rue des JardinsAbidjan, Côte
                          d'Ivoire
                        </span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-mail text-red-500 shrink-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
</svg>
<span>contact@retechci.org</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600">
<p>© 2024 RETECHCI. Association à but non lucratif.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors" href="#">
                        Mentions Légales
                      </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
                        Confidentialité
                      </a>
<a className="hover:text-neutral-400 transition-colors" href="#">
                        CGU
                      </a>
</div>
</div>
</div>
</footer>
</div>

<div className="relative p-6 rounded-xl shadow-2xl max-w-xs text-center transform translate-y-4 bg-white">
<div className="w-12 h-12 rounded-full flex items-center justify-center absolute -top-6 left-1/2 -translate-x-1/2 border-4 shadow-md bg-red-600 text-white border-white" style={{}}>
<svg className="lucide lucide-map-pin w-6 h-6" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
</div>
<h3 className="mt-4 font-bold text-lg text-neutral-900" style={{}}>
                Siège RETECHCI
              </h3>
<p className="text-neutral-500 text-sm mt-1" style={{}}>
                Cocody Riviera 2,Abidjan, Côte d'Ivoire
              </p>
<a className="inline-block mt-4 text-xs font-bold uppercase tracking-wide border-b pb-0.5 text-red-600 border-red-200 hover:text-red-700" href="https://maps.google.com" style={{}} target="_blank">
                Ouvrir dans Maps
              </a>
</div>
</div>
</section>
</main>
<main className="page-section hidden" id="news">
<section className="pt-32 pb-12 px-6 max-w-7xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-wide mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            En direct de la rédaction
          </div>
<h1 className="text-4xl md:text-6xl font-bold font-geist text-white mb-6">
            Actualités &amp;
            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
              Tendances
            </span>
</h1>

<div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-12">
<button className="px-4 py-2 rounded-full bg-white text-black text-xs font-bold transition-transform hover:scale-105">
              Tout voir
            </button>
<button className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-105 text-xs">
              Cinéma
            </button>
<button className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-105 text-xs">
              Séries TV
            </button>
<button className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-105 text-xs">
              Tech &amp; Matos
            </button>
<button className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-105 text-xs">
              Festivals
            </button>
<button className="px-4 py-2 rounded-full border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all hover:scale-105 text-xs">
              Appels à Projets
            </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">

<div className="lg:col-span-7 group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] lg:aspect-auto min-h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8">
<span className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold uppercase rounded mb-3 inline-block">
                  A la une
                </span>
<h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-geist group-hover:text-red-500 transition-colors">
                  La Côte d'Ivoire à l'honneur au Festival de Cannes 2025
                </h2>
<p className="text-neutral-300 line-clamp-2 mb-4 text-sm md:text-base">
                  Une délégation record de techniciens et producteurs ivoiriens
                  sera présente sur la Croisette pour défendre les couleurs...
                </p>
<div className="flex items-center gap-3 text-xs text-neutral-400">
<span>Par Rédaction</span>
<span>•</span>
<span>Il y a 2 heures</span>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-6">

<div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer min-h-[200px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="px-2 py-1 bg-amber-500 text-black text-[10px] font-bold uppercase rounded mb-2 inline-block">
                    Tech
                  </span>
<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-500 transition-colors">
                    Arrivée des caméras ARRI Alexa 35 à Abidjan
                  </h3>
</div>
</div>

<div className="flex-1 relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer min-h-[200px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="px-2 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase rounded mb-2 inline-block">
                    Formation
                  </span>
<h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-500 transition-colors">
                    Lancement du programme "Women in Cinema"
                  </h3>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-2 space-y-8">
<h3 className="text-xl font-bold text-white font-geist border-b border-white/10 pb-4">
                Dernières publications
              </h3>

<article className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-2">
<span className="text-amber-500 text-[10px] font-bold uppercase">
                      Box Office
                    </span>
<span className="text-neutral-500 text-[10px]">
                      • 15 Nov 2024
                    </span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-500 transition-colors">
                    Record historique pour "La Canne du Roi"
                  </h4>
<p className="text-sm text-neutral-400 line-clamp-2">
                    Le long métrage dépasse les 100.000 entrées en salle, un
                    chiffre jamais atteint pour une production locale...
                  </p>
</div>
</article>

<article className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=400"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-2">
<span className="text-purple-500 text-[10px] font-bold uppercase">
                      Interview
                    </span>
<span className="text-neutral-500 text-[10px]">
                      • 14 Nov 2024
                    </span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">
                    Rencontre avec Philippe Lacôte
                  </h4>
<p className="text-sm text-neutral-400 line-clamp-2">
                    Le réalisateur revient sur son parcours et sa vision du
                    cinéma ivoirien à l'international...
                  </p>
</div>
</article>

<article className="flex flex-col sm:flex-row gap-6 group cursor-pointer">
<div className="w-full sm:w-48 h-48 sm:h-32 shrink-0 rounded-xl overflow-hidden border border-white/10 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&amp;w=400"/>
</div>
<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 mb-2">
<span className="text-green-500 text-[10px] font-bold uppercase">
                      Subvention
                    </span>
<span className="text-neutral-500 text-[10px]">
                      • 12 Nov 2024
                    </span>
</div>
<h4 className="text-lg font-bold text-white mb-2 group-hover:text-green-500 transition-colors">
                    Fonds de Soutien 2025 : Ouverture des guichets
                  </h4>
<p className="text-sm text-neutral-400 line-clamp-2">
                    L'ONAC-CI annonce les nouvelles modalités pour le dépôt des
                    dossiers de financement...
                  </p>
</div>
</article>

<div className="pt-8 flex gap-2">
<button className="w-10 h-10 rounded-lg bg-white text-black font-bold flex items-center justify-center hover:bg-neutral-200 transition-colors">
                  1
                </button>
<button className="w-10 h-10 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors">
                  2
                </button>
<button className="w-10 h-10 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors">
                  3
                </button>
<button className="w-10 h-10 rounded-lg border border-white/10 text-neutral-400 hover:text-white hover:bg-neutral-800 flex items-center justify-center transition-colors">
                  ...
                </button>
</div>
</div>

<div className="space-y-8">

<div className="p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10">
<h4 className="font-bold text-white mb-2">Newsletter Pro</h4>
<p className="text-xs text-neutral-400 mb-4">
                  Recevez chaque lundi le récapitulatif des opportunités de
                  tournage et l'actualité du réseau.
                </p>
<input className="w-full bg-neutral-800 border border-white/10 rounded px-3 py-2 text-sm text-white mb-3 focus:border-red-500 outline-none transition-colors" placeholder="votre@email.com" type="email"/>
<button className="w-full py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-900/20">
                  S'inscrire gratuitement
                </button>
</div>

<div>
<h4 className="font-bold text-white mb-4 border-b border-white/10 pb-2">
                  Tendances
                </h4>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-xs text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-colors">
                    #FESPACO2025
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-xs text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-colors">
                    #Formation
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-xs text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-colors">
                    #SonyFX6
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-xs text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-colors">
                    #Subventions
                  </span>
<span className="px-3 py-1 rounded-full bg-neutral-900 border border-white/5 text-xs text-neutral-400 hover:text-white cursor-pointer hover:border-white/20 transition-colors">
                    #Casting
                  </span>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-section hidden" id="about">
<section className="relative py-24 border-b overflow-hidden border-white/5">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-20 text-center max-w-3xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest mb-6 border-white/10 bg-white/5 text-neutral-400" style={{}}>
                À propos du réseau
              </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8 font-geist text-white">
                Qui sommes-nous ?
              </h1>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
<div className="space-y-8">
<div className="prose prose-invert">
<p className="text-xl font-medium leading-relaxed text-white">
                    Formellement créé le 16 Juillet 2022, le
                    <strong>RETECHCI</strong>
                    est la toute première association regroupant uniquement les
                    techniciens du cinéma de Côte d'Ivoire.
                  </p>
<p className="leading-relaxed mt-4 text-neutral-400" style={{}}>
                    Face à la négligence dont fait l'objet la grande famille des
                    techniciens dans toute la chaîne de production
                    cinématographique, nous avons décidé de nous réunir pour
                    défendre nos intérêts et professionnaliser notre secteur.
                  </p>
</div>
<div className="border rounded-2xl p-6 bg-neutral-900/50 border-white/5" style={{}}>
<h3 className="font-medium mb-4 flex items-center gap-2 text-white">
<svg className="lucide lucide-target w-4 h-4 text-red-500" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<circle cx="12" cy="12" r="6"></circle>
<circle cx="12" cy="12" r="2"></circle>
</svg>
                    Nos Objectifs
                  </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-neutral-400" style={{}}>
<span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-neutral-600" style={{}}></span>
                      Promouvoir les métiers techniques professionnels.
                    </li>
<li className="flex items-start gap-3 text-sm text-neutral-400" style={{}}>
<span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-neutral-600" style={{}}></span>
                      Défendre les droits des membres (contrats, salaires).
                    </li>
</ul>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent blur-2xl rounded-3xl -z-10 from-red-900/20" style={{}}></div>
<div className="glass-card p-8 rounded-3xl border border-white/10">
<p className="italic mb-6 text-neutral-300" style={{}}>
                    "Loin d'être un outil de combat contre les autres corps de
                    métier, le RETECHCI vient plutôt apporter sa pierre à
                    l'édifice en militant activement pour la réglementation et
                    le développement du secteur."
                  </p>
<div className="flex items-center justify-between border-t pt-6 border-white/5">
<div className="flex flex-col">
<span className="font-medium text-white">
                        Statuts de l'Association
                      </span>
<span className="text-xs text-neutral-500" style={{}}>
                        Document officiel
                      </span>
</div>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-white text-black hover:bg-neutral-200" href="#" style={{}}>
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 gap-4 mt-4">
<div className="p-4 rounded-2xl border text-center bg-neutral-900/50 border-white/5" style={{}}>
<div className="text-2xl font-bold font-geist text-white">
                      2022
                    </div>
<div className="text-xs text-neutral-500 uppercase mt-1" style={{}}>
                      Année de création
                    </div>
</div>
<div className="p-4 rounded-2xl border text-center bg-neutral-900/50 border-white/5" style={{}}>
<div className="text-2xl font-bold font-geist text-white">
                      500+
                    </div>
<div className="text-xs text-neutral-500 uppercase mt-1" style={{}}>
                      Membres actifs
                    </div>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t pt-20 border-white/5">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold font-geist mb-2 text-white">
                    Bureau Exécutif
                  </h2>
<p className="text-neutral-400" style={{}}>
                    L'équipe dirigeante élue pour le mandat en cours.
                  </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9cb87b82-efd0-43d5-b83f-1112a24b4141_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 from-black/60"></div>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Jamel Basiru
                    </h4>
<p className="text-red-500 text-xs font-medium uppercase tracking-wider mt-1" style={{}}>
                      Directeur Exécutif
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39eadd5d-c66a-494a-aafe-ab7c48b12606_3840w.jpg"/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Siata Traore
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      Secrétaire Générale
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://ui-avatars.com/api/?name=Beckel+Diarra&amp;background=random&amp;size=512" style={{}}/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Beckel Diarra
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      SG Adjoint
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abdc2d1a-b7ca-4482-a10c-2ccdeae84271_800w.jpg"/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Raymonde Lozo
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      Secrétaire Comm.
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://ui-avatars.com/api/?name=Vincent+Gouitaa&amp;background=random&amp;size=512" style={{}}/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Vincent Gouitaa
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      Secrétaire Comm. Adj.
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/171bd9ad-ece9-4c7f-a0d1-75ab4691177b_800w.jpg"/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Orlane N'guessan
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      Trésorière
                    </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/5] overflow-hidden rounded-[2rem] border mb-4 transition-transform duration-500 group-hover:scale-[1.02] border-white/10 bg-neutral-900" style={{}}>
<img className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://ui-avatars.com/api/?name=Addih+Ibrahim&amp;background=random&amp;size=512" style={{}}/>
</div>
<div className="pl-2">
<h4 className="font-semibold text-lg tracking-tight text-white">
                      Addih Ibrahim
                    </h4>
<p className="text-neutral-500 text-xs font-medium uppercase tracking-wider mt-1 group-hover:text-white transition-colors" style={{}}>
                      Trésorier Adjoint
                    </p>
</div>
</div>
</div>
</div>

<div className="mt-32 pt-20 border-t border-white/5">
<div className="mb-12">
<h2 className="text-2xl font-semibold font-geist mb-2 text-white">
                  Conseil d'Administration
                </h2>
<p className="text-neutral-400" style={{}}>
                  Organe de surveillance et d'orientation stratégique.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-red-900/20 bg-red-900/5 hover:bg-red-900/10" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border border-red-500/20 bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7376ee4-1bbe-4f14-8baa-9d16b0100f82_320w.jpg" style={{}}/>
</div>
<div>
<h4 className="font-medium text-white">Jean Aristide Dico</h4>
<p className="text-red-500 text-xs font-medium" style={{}}>
                      Président du CA
                    </p>
</div>
</div>

<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Gerges+Dabire&amp;background=random"/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Gerges Dabiré
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Abalotu+Komou&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Abalotu Komou P.
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Guy+Tallaud&amp;background=random"/>
</div>
<div>
<h4 className="font-medium text-sm text-white">Guy Tallaud</h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Mathieu+Nanguy&amp;background=random"/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Mathieu Nanguy
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Jean+Marc+Coulibaly&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Jean Marc Coulibaly
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Tukura+Bi+Tizouo&amp;background=random"/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Tukura Bi Tizouo
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Consty+Peursy&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Consty Peursy
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Madjeneba+Diomande&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Madjeneba Diomande
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Clement+Kouassi&amp;background=random"/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Clément Kouassi
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Gbaka+Brice+Offi&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Gbaka Brice Offi
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Toussaint+Kouame&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">
                      Toussaint Kouame
                    </h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl border transition-colors border-white/5 bg-neutral-900/30 hover:bg-neutral-800" style={{}}>
<div className="w-12 h-12 rounded-full overflow-hidden border grayscale bg-neutral-800 border-white/5" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Willy+Kanga&amp;background=random" style={{}}/>
</div>
<div>
<h4 className="font-medium text-sm text-white">Willy Kanga</h4>
<p className="text-neutral-500 text-xs" style={{}}>
                      Administrateur
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-section hidden" id="annuaire">
<div className="max-w-7xl mx-auto px-6 py-12">
<header className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6 border-b pb-8 border-white/5">
<div>
<h1 className="text-3xl font-semibold font-geist mb-2 text-white">
                Annuaire &amp; Ressources
              </h1>
<p className="text-sm text-neutral-400" style={{}}>
                Trouvez le talent ou le matériel idéal pour votre prochaine
                production.
              </p>
</div>

<div className="relative w-full md:w-72">
<svg className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m21 21-4.34-4.34"></path>
<circle cx="11" cy="11" r="8"></circle>
</svg>
<input className="w-full border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-red-500 transition-colors bg-neutral-900 border-white/10 text-white" placeholder="Rechercher un technicien..." style={{}} type="text"/>
</div>
</header>

<div className="flex flex-wrap gap-2 mb-8">
<button className="dir-tab px-4 py-2 rounded-full text-xs font-medium border transition-colors border-neutral-700 bg-neutral-800 text-white" data-tab="tech" onclick="switchDirectory('tech')" style={{}}>
              Techniciens
            </button>
<button className="dir-tab px-4 py-2 rounded-full text-xs font-medium border border-transparent bg-transparent transition-colors text-neutral-400 hover:text-white" data-tab="company" onclick="switchDirectory('company')" style={{}}>
              Sociétés &amp; Location
            </button>

<button className="dir-tab px-4 py-2 rounded-full text-xs font-medium border border-transparent bg-transparent transition-colors text-neutral-400 hover:text-white" data-tab="costumes" onclick="switchDirectory('costumes')" style={{}}>
              Costumes &amp; Stylisme
            </button>
<button className="dir-tab px-4 py-2 rounded-full text-xs font-medium border border-transparent bg-transparent transition-colors flex items-center gap-2 text-neutral-400 hover:text-white" data-tab="map" onclick="switchDirectory('map')" style={{}}>
<svg className="lucide lucide-map w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon>
<line x1="9" x2="9" y1="3" y2="18"></line>
<line x1="15" x2="15" y1="6" y2="21"></line>
</svg>
              Carte des Décors
            </button>
</div>

<div className="dir-content page-enter" id="dir-tech">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border hover:border-red-500/30 transition-all group border-white/5 bg-neutral-900/40" style={{}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b03791e6-6d2b-4d0f-b737-1fb320975385_3840w.jpg" style={{}}/>
</div>
<div>
<h3 className="font-medium text-white">Marc Zadi</h3>
<p className="text-xs text-neutral-400" style={{}}>
                        Chef Opérateur
                      </p>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-500 border border-green-500/20" style={{}}>
                    Disponible
                  </span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Abidjan, Cocody
                  </div>
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-camera w-3 h-3" data-lucide="camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
                    RED, ARRI, Sony FX
                  </div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black" onclick="openPublicProfile('marc')">
                  Voir le profil
                </button>
</div>

<div className="p-6 rounded-xl border hover:border-red-500/30 transition-all group border-white/5 bg-neutral-900/40" style={{}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div>
<h3 className="font-medium text-white">Aïcha Touré</h3>
<p className="text-xs text-neutral-400" style={{}}>
                        Ingénieure Son
                      </p>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] text-neutral-500 border bg-neutral-800 border-white/5" style={{}}>
                    En tournage
                  </span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Abidjan, Yopougon
                  </div>
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-mic w-3 h-3" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19v3"></path>
<path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
<rect height="13" rx="3" width="6" x="9" y="2"></rect>
</svg>
                    Sound Devices, Sennheiser
                  </div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black" onclick="openPublicProfile('aicha')">
                  Voir le profil
                </button>
</div>

<div className="p-6 rounded-xl border hover:border-red-500/30 transition-all group border-white/5 bg-neutral-900/40" style={{}}>
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div>
<h3 className="font-medium text-white">Eric Kouassi</h3>
<p className="text-xs text-neutral-400" style={{}}>
                        Chef Électro
                      </p>
</div>
</div>
<span className="px-2 py-0.5 rounded text-[10px] bg-green-500/10 text-green-500 border border-green-500/20" style={{}}>
                    Disponible
                  </span>
</div>
<div className="space-y-2 mb-6">
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Bassam
                  </div>
<div className="flex items-center gap-2 text-xs text-neutral-400" style={{}}>
<svg className="lucide lucide-zap w-3 h-3" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
                    HMI, LED SkyPanel
                  </div>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black" onclick="openPublicProfile('eric')">
                  Voir le profil
                </button>
</div>
</div>
</div>

<div className="dir-content hidden" id="dir-company">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40" style={{}}>
<div className="h-10 w-10 rounded flex items-center justify-center font-bold text-lg mb-4 bg-white text-black">
                  S
                </div>
<h3 className="font-medium text-white">Studios Abidjan</h3>
<p className="text-neutral-500 text-xs mb-4" style={{}}>
                  Location de Plateaux &amp; Caméras
                </p>
<button className="px-4 py-2 text-xs rounded bg-neutral-800 text-white hover:bg-neutral-700" style={{}}>
                  Contacter
                </button>
</div>

<div className="p-6 rounded-xl border border-white/5 bg-neutral-900/40" style={{}}>
<div className="h-10 w-10 rounded flex items-center justify-center font-bold text-lg mb-4 bg-blue-600 text-white" style={{}}>
                  L
                </div>
<h3 className="font-medium text-white">Light House CI</h3>
<p className="text-neutral-500 text-xs mb-4" style={{}}>
                  Lumière &amp; Machinerie
                </p>
<button className="px-4 py-2 text-xs rounded bg-neutral-800 text-white hover:bg-neutral-700" style={{}}>
                  Contacter
                </button>
</div>
</div>
</div>

<div className="dir-content hidden" id="dir-costumes">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-xl border hover:border-amber-500/30 transition-all group border-white/5 bg-neutral-900/40" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-amber-600 text-white" style={{}}>
<svg className="lucide lucide-shirt w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path>
</svg>
</div>
<h3 className="font-medium text-white">Kady's Costumes</h3>
<p className="text-neutral-500 text-xs mb-4" style={{}}>
                  Création &amp; Location (Époque, Moderne)
                </p>
<div className="flex gap-2 text-[10px] mb-4 text-neutral-400" style={{}}>
<span className="px-2 py-1 rounded bg-neutral-800" style={{}}>
                    Sur mesure
                  </span>
<span className="px-2 py-1 rounded bg-neutral-800" style={{}}>
                    Stock 500+
                  </span>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black">
                  Voir catalogue
                </button>
</div>

<div className="p-6 rounded-xl border hover:border-amber-500/30 transition-all group border-white/5 bg-neutral-900/40" style={{}}>
<div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 border bg-neutral-800 text-white border-white/10" style={{}}>
<svg className="lucide lucide-scissors w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="6" cy="6" r="3"></circle>
<path d="M8.12 8.12 12 12"></path>
<path d="M20 4 8.12 15.88"></path>
<circle cx="6" cy="18" r="3"></circle>
<path d="M14.8 14.8 20 20"></path>
</svg>
</div>
<h3 className="font-medium text-white">Atelier du Cinéma</h3>
<p className="text-neutral-500 text-xs mb-4" style={{}}>
                  Retouches &amp; Habillage Plateau
                </p>
<div className="flex gap-2 text-[10px] mb-4 text-neutral-400" style={{}}>
<span className="px-2 py-1 rounded bg-neutral-800" style={{}}>
                    2 équipes dispo
                  </span>
</div>
<button className="w-full py-2 rounded border text-xs transition-colors font-medium border-white/10 text-white hover:bg-white hover:text-black">
                  Contacter
                </button>
</div>
</div>
</div>
<div className="dir-content hidden" id="dir-map">
<div className="flex flex-col xl:flex-row gap-8 min-h-[600px] animate-[fadeIn_0.5s_ease-out]">

<div className="relative flex-grow bg-neutral-900 rounded-3xl border border-white/5 overflow-hidden group shadow-2xl">

<div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-transparent to-neutral-900/80 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center p-4 md:p-10">
<svg className="w-full h-full max-w-lg drop-shadow-[0_0_50px_rgba(220,38,38,0.1)]" viewbox="0 0 400 400">
<defs>
<lineargradient id="grad-nord" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(60,60,60)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(30,30,30)', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>

<path className="region-path transition-all duration-500 ease-out hover:brightness-125 hover:-translate-y-1" d="M 80,50 Q 200,10 320,50 L 300,130 Q 200,150 100,130 Z" id="path-nord" onclick="selectRegion('nord', 'Grand Nord (Savanes)', 'Terres de traditions, paysages de savane et culture Sénoufo. Idéal pour les documentaires et films historiques.', [{name: 'Mosquées de style Soudanais', type: 'Patrimoine', img: 'https://images.unsplash.com/photo-1593467027879-1c881c002302?q=80&amp;w=200'}, {name: 'Mont Korhogo', type: 'Nature', img: 'https://images.unsplash.com/photo-1547990193-417c1817342b?q=80&amp;w=200'}])"></path>

<path className="region-path transition-all duration-500 ease-out hover:brightness-125 hover:-translate-x-1" d="M 40,110 L 100,130 L 120,230 L 30,210 Q 10,160 40,110 Z" id="path-ouest" onclick="selectRegion('ouest', 'Ouest (Montagnes)', 'Reliefs accidentés, cascades et forêts denses. Une atmosphère mystique pour des décors naturels époustouflants.', [{name: 'Dents de Man', type: 'Montagne', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=200'}, {name: 'Pont de Lianes', type: 'Tradition', img: 'https://images.unsplash.com/photo-1596396901962-e63d6b059637?q=80&amp;w=200'}])"></path>

<path className="region-path transition-all duration-500 ease-out hover:brightness-125 hover:scale-105 origin-center" d="M 100,130 Q 200,150 300,130 L 280,230 Q 180,250 120,230 Z" id="path-centre" onclick="selectRegion('centre', 'Centre (Lacs)', 'Yamoussoukro, capitale politique. Architecture monumentale et grands espaces lacustres.', [{name: 'Basilique', type: 'Architecture', img: 'https://images.unsplash.com/photo-1575402095655-460395679549?q=80&amp;w=200'}, {name: 'Lac aux Crocodiles', type: 'Nature', img: 'https://images.unsplash.com/photo-1520635362272-364234e40348?q=80&amp;w=200'}])"></path>

<path className="region-path transition-all duration-500 ease-out hover:brightness-125 hover:translate-x-1" d="M 300,130 L 320,50 Q 360,110 350,210 L 280,230 Z" id="path-est" onclick="selectRegion('est', 'Est (Indénié)', 'Royaumes Akan, plantations de cacao et frontières verdoyantes.', [{name: 'Palais Royal', type: 'Historique', img: 'https://images.unsplash.com/photo-1597395066847-758c067e1635?q=80&amp;w=200'}])"></path>

<path className="region-path transition-all duration-500 ease-out hover:brightness-125 hover:translate-y-1 active" d="M 30,210 L 120,230 Q 180,250 280,230 L 350,210 Q 340,310 280,360 Q 150,390 40,330 Z" id="path-sud" onclick="selectRegion('sud', 'Région Sud (Lagunes)', 'Cœur économique. Gratte-ciels du Plateau, plages de Bassam et effervescence urbaine.', [{name: 'Plateau', type: 'Urbain', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=200'}, {name: 'Grand-Bassam', type: 'Colonial', img: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&amp;w=200'}])"></path>

<text className="fill-white/30 text-[10px] font-black tracking-[0.2em] font-geist" x="50" y="30">
                      CÔTE D'IVOIRE
                    </text>
</svg>
</div>

<div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
</div>
<span className="text-xs font-medium text-neutral-300">
                    Carte Interactive
                  </span>
</div>
</div>

<div className="w-full xl:w-[400px] shrink-0 flex flex-col">
<div className="h-full p-8 rounded-3xl border border-white/5 bg-neutral-900/80 backdrop-blur-md flex flex-col relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] rounded-full pointer-events-none"></div>
<div className="relative z-10 mb-8">
<span className="inline-block px-2 py-1 mb-3 text-[10px] font-bold text-red-500 uppercase tracking-widest border border-red-500/20 bg-red-500/10 rounded">
                      Exploration
                    </span>
<h3 className="text-3xl font-bold text-white mb-3 font-geist transition-all duration-300" id="map-region-title" style={{opacity: '1'}}>
                      Région Sud (Lagunes)
                    </h3>
<p className="text-sm text-neutral-400 leading-relaxed transition-all duration-300" id="map-region-desc" style={{opacity: '1'}}>
                      Cœur économique et urbain. Gratte-ciels, quartiers
                      populaires et lagune.
                    </p>
</div>
<div className="flex-grow relative z-10">
<h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-white/5 pb-2 flex items-center justify-between">
                      Décors Clés
                      <span className="text-[10px] text-neutral-500 font-normal">
                        Sélection
                      </span>
</h4>
<div className="space-y-3 transition-all duration-300" id="map-region-spots" style={{opacity: '1'}}>
<div className="flex items-center gap-3 p-3 rounded bg-neutral-800/50 border border-white/5 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-neutral-700 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp'}}></div>
<div>
<h4 className="text-white text-xs font-medium">
                            Plateau Business District
                          </h4>
<p className="text-neutral-500 text-[10px]">
                            Urbain / Moderne
                          </p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded bg-neutral-800/50 border border-white/5 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-neutral-700 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1577083639236-0f44488b5c9c?q=80&amp'}}></div>
<div>
<h4 className="text-white text-xs font-medium">
                            Blockhauss
                          </h4>
<p className="text-neutral-500 text-[10px]">
                            Village Lagunaire
                          </p>
</div>
</div>
<div className="flex items-center gap-3 p-3 rounded bg-neutral-800/50 border border-white/5 hover:border-red-500/30 transition-colors">
<div className="w-10 h-10 rounded bg-neutral-700 bg-cover bg-center" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&amp'}}></div>
<div>
<h4 className="text-white text-xs font-medium">
                            Grand-Bassam Colonial
                          </h4>
<p className="text-neutral-500 text-[10px]">
                            Historique / Plage
                          </p>
</div>
</div>
</div>
</div>
<button className="mt-8 w-full py-3.5 rounded-xl bg-white text-black font-bold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                    Trouver un fixeur local
                  </button>
</div>
</div>
</div>
</div>

</div>
</main>
<main className="page-section hidden" id="public-profile">
<div className="max-w-5xl mx-auto px-6 py-12">
<button className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white mb-8 transition-colors group" onclick="navigate('annuaire')" style={{}}>
<svg className="lucide lucide-arrow-left group-hover:-translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
            Retour à l'annuaire
          </button>

<div className="flex flex-col md:flex-row gap-8 items-start mb-12 animate-[fadeIn_0.3s_ease-out]">
<div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/10 shrink-0 bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" id="pp-img" src=""/>
</div>
<div className="flex-grow w-full">
<div className="flex justify-between items-start">
<div>
<h1 className="text-3xl font-bold font-geist text-white leading-tight" id="pp-name"></h1>
<p className="text-amber-500 font-medium text-lg mt-1" id="pp-job" style={{}}></p>
</div>
<div id="pp-status"></div>
</div>
<div className="flex flex-wrap gap-4 mt-4 text-sm text-neutral-400" style={{}}>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-map-pin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
<span id="pp-location"></span>
</span>
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-camera" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
<span id="pp-equip"></span>
</span>
</div>
<div className="mt-6 flex gap-3">
<button className="px-6 py-2 bg-white text-black font-bold rounded text-sm hover:bg-neutral-200 transition-colors flex items-center gap-2" onclick="document.getElementById('negotiation-modal').classList.remove('hidden')">
<svg className="lucide lucide-message-square" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
                  Contacter &amp; Négocier
                </button>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-[fadeIn_0.5s_ease-out]">

<div className="lg:col-span-2 space-y-10">

<section>
<h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-clapperboard text-amber-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
<path d="m6.2 5.3 3.1 3.9"></path>
<path d="m12.4 3.4 3.1 4"></path>
<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
</svg>
                  Filmographie &amp; Stats
                </h2>
<div className="space-y-3" id="pp-films"></div>
</section>

<section>
<h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-image text-amber-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
                  Photos de Tournage
                </h2>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4" id="pp-gallery"></div>
</section>
</div>

<div className="space-y-6">

<div className="p-6 rounded-xl border border-amber-500/20 bg-amber-900/5 backdrop-blur-sm" style={{}}>
<h3 className="font-bold text-white mb-6 flex items-center gap-2">
<svg className="lucide lucide-coins text-amber-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="8" cy="8" r="6"></circle>
<path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path>
<path d="M7 6h1v4"></path>
<path d="m16.71 13.88.7.71-2.82 2.82"></path>
</svg>
                  Prétentions Salariales
                </h3>
<div className="space-y-5">
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-400" style={{}}>
                      Tarif Jour (8h)
                    </span>
<span className="font-mono font-bold text-white text-base" id="pp-rate-day"></span>
</div>
<div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-400" style={{}}>
                      Tarif Semaine (6j)
                    </span>
<span className="font-mono font-bold text-white text-base" id="pp-rate-week"></span>
</div>
<div className="text-[11px] text-neutral-500 italic leading-relaxed" style={{}}>
                    * Tarifs indicatifs hors heures supplémentaires (majorées à
                    15% dès la 9ème heure) et indemnités de transport/repas.
                  </div>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-section hidden" id="legal">
<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-[10px] uppercase tracking-widest mb-6 border-white/10 bg-white/5 text-neutral-400" style={{}}>
                Documentation Officielle
              </div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4 font-geist text-white">
                Conventions &amp; Légal
              </h1>
<p className="text-lg text-neutral-400 max-w-2xl" style={{}}>
                Consultez les grilles salariales de référence, les conventions
                collectives et les modèles de contrats validés par le RETECHCI
                pour garantir des conditions de travail équitables.
              </p>
</div>

<div className="mb-20">
<h2 className="text-2xl font-semibold font-geist mb-8 text-white flex items-center gap-3">
<span className="w-8 h-8 rounded bg-red-600/20 text-red-500 flex items-center justify-center text-sm font-bold" style={{}}>
                  $
                </span>
                Grille Salariale Minima (2024)
              </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="border rounded-2xl p-6 bg-neutral-900/40 border-white/5 hover:border-red-500/20 transition-colors" style={{}}>
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-xl text-white">Catégorie A</h3>
<span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-white text-black">
                      Chefs de Poste
                    </span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>
                        Directeur Photo
                      </span>
<span className="font-mono text-red-400" style={{}}>
                        450.000 FCFA/sem
                      </span>
</li>
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>
                        Ingénieur Son
                      </span>
<span className="font-mono text-red-400" style={{}}>
                        400.000 FCFA/sem
                      </span>
</li>
</ul>
</div>

<div className="border rounded-2xl p-6 bg-neutral-900/40 border-white/5 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-xl text-white">Catégorie B</h3>
<span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-neutral-700 text-white" style={{}}>
                      Techniciens Spécialisés
                    </span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>
                        Cadreur / Opérateur
                      </span>
<span className="font-mono text-amber-500" style={{}}>
                        250.000 FCFA/sem
                      </span>
</li>
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>Perchman</span>
<span className="font-mono text-amber-500" style={{}}>
                        200.000 FCFA/sem
                      </span>
</li>
</ul>
</div>

<div className="border rounded-2xl p-6 bg-neutral-900/40 border-white/5 hover:border-neutral-500/30 transition-colors" style={{}}>
<div className="flex items-center justify-between mb-6">
<h3 className="font-bold text-xl text-white">Catégorie C</h3>
<span className="px-2 py-1 rounded text-[10px] uppercase font-bold bg-neutral-800 text-neutral-400" style={{}}>
                      Assistants &amp; Auxiliaires
                    </span>
</div>
<ul className="space-y-4">
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>
                        Assistant Caméra (2nd)
                      </span>
<span className="font-mono text-neutral-400" style={{}}>
                        150.000 FCFA/sem
                      </span>
</li>
<li className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
<span className="text-neutral-300" style={{}}>
                        Renfort Élec/Mach
                      </span>
<span className="font-mono text-neutral-400" style={{}}>
                        125.000 FCFA/sem
                      </span>
</li>
</ul>
</div>
</div>
<p className="text-xs text-neutral-500 mt-6 italic" style={{}}>
                * Ces tarifs sont des minima recommandés pour une semaine de
                travail standard (6 jours). Les heures supplémentaires et
                majorations de nuit s'appliquent conformément au Code du Travail
                ivoirien.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>
<h2 className="text-2xl font-semibold font-geist mb-6 text-white">
                  Documents Légaux
                </h2>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:border-red-500/30 group border-white/5 bg-neutral-900/40" href="#" style={{}}>
<div className="w-10 h-10 rounded flex items-center justify-center bg-red-900/20 text-red-500" style={{}}>
<svg className="lucide lucide-file-text w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<line x1="16" x2="8" y1="13" y2="13"></line>
<line x1="16" x2="8" y1="17" y2="17"></line>
<line x1="10" x2="8" y1="9" y2="9"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-white group-hover:text-red-500 transition-colors" style={{}}>
                        Convention Collective Techniciens
                      </h4>
<p className="text-xs text-neutral-500" style={{}}>
                        Mise à jour 2023 • PDF (2.4 MB)
                      </p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:border-red-500/30 group border-white/5 bg-neutral-900/40" href="#" style={{}}>
<div className="w-10 h-10 rounded flex items-center justify-center bg-red-900/20 text-red-500" style={{}}>
<svg className="lucide lucide-scale w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path>
<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"></path>
<path d="M7 21h10"></path>
<path d="M12 3v18"></path>
<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-white group-hover:text-red-500 transition-colors" style={{}}>
                        Code de Déontologie
                      </h4>
<p className="text-xs text-neutral-500" style={{}}>
                        Charte éthique du RETECHCI • PDF (0.8 MB)
                      </p>
</div>
</a>
</div>
</div>
<div>
<h2 className="text-2xl font-semibold font-geist mb-6 text-white">
                  Modèles de Contrats
                </h2>
<div className="space-y-4">
<a className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:border-amber-500/30 group border-white/5 bg-neutral-900/40" href="#" style={{}}>
<div className="w-10 h-10 rounded flex items-center justify-center bg-amber-900/20 text-amber-500" style={{}}>
<svg className="lucide lucide-download w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="7 10 12 15 17 10"></polyline>
<line x1="12" x2="12" y1="15" y2="3"></line>
</svg>
</div>
<div>
<h4 className="font-medium text-white group-hover:text-amber-500 transition-colors" style={{}}>
                        Contrat CDD d'Usage (Type)
                      </h4>
<p className="text-xs text-neutral-500" style={{}}>
                        Format Word (.docx) • Éditable
                      </p>
</div>
</a>
<a className="flex items-center gap-4 p-4 rounded-xl border transition-colors hover:border-amber-500/30 group border-white/5 bg-neutral-900/40" href="#" style={{}}>
<div className="w-10 h-10 rounded flex items-center justify-center bg-amber-900/20 text-amber-500" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h4 className="font-medium text-white group-hover:text-amber-500 transition-colors" style={{}}>
                        Clause de Cession de Droits
                      </h4>
<p className="text-xs text-neutral-500" style={{}}>
                        Format Word (.docx) • Pour Techniciens Créateurs
                      </p>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
</main>
<main className="page-section hidden" id="direct">

<section className="py-20 border-b border-white/5 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-900/10 to-transparent blur-3xl pointer-events-none" style={{}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-8 items-start">

<div className="w-full lg:w-3/4">
<div className="flex items-center justify-between mb-4">
<h1 className="text-2xl font-bold font-geist text-white flex items-center gap-3">
<span className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-red-500" style={{}}></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-red-600" style={{}}></span>
</span>
                    RETECHCI TV
                    <span className="text-neutral-500 font-normal" style={{}}>
                      | Direct
                    </span>
</h1>
<div className="flex items-center gap-2">
<span className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-wide" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-red-500" style={{}}></span>
                      En direct
                    </span>
<span className="text-xs text-neutral-400 flex items-center gap-1" style={{}}>
<svg className="lucide lucide-users" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
                      124 spectateurs
                    </span>
</div>
</div>
<div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-white/10 relative group shadow-2xl">
<img className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mb-4 cursor-pointer hover:bg-red-600 hover:scale-110 transition-all duration-300 group-hover:bg-red-600" style={{}}>
<svg className="text-white ml-1" fill="currentColor" height="32" stroke="none" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
<h2 className="text-xl font-bold text-white mb-2">
                      Masterclass : La lumière en extérieur jour
                    </h2>
<p className="text-neutral-300 text-sm max-w-lg" style={{}}>
                      Rejoignez-nous pour une session pratique sur la gestion du
                      contraste et le débouchage en lumière naturelle avec le
                      Chef Opérateur Marc Zadi.
                    </p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800" style={{}}>
<div className="h-full w-[35%] bg-red-600 relative" style={{}}>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full shadow border border-white transform scale-0 group-hover:scale-100 transition-transform" style={{}}></div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap gap-4 border-b border-white/5 pb-8">
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors" style={{}}>
<svg className="lucide lucide-thumbs-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M7 10v12"></path>
<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
</svg>
                    J'aime (45)
                  </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors" style={{}}>
<svg className="lucide lucide-share-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="18" cy="5" r="3"></circle>
<circle cx="6" cy="12" r="3"></circle>
<circle cx="18" cy="19" r="3"></circle>
<line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
<line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
</svg>
                    Partager
                  </button>
<button className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-medium transition-colors ml-auto" style={{}}>
<svg className="lucide lucide-message-circle" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path>
</svg>
                    Chat en direct
                  </button>
</div>
</div>

<div className="w-full lg:w-1/4 space-y-6">
<div>
<h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                    Prochainement
                  </h3>
<div className="space-y-3">
<div className="p-3 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded" style={{}}>
                          DEMAIN 14H
                        </span>
<svg className="lucide lucide-bell text-neutral-600 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
<path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
</svg>
</div>
<h4 className="text-sm font-medium text-white group-hover:text-amber-500 transition-colors" style={{}}>
                        Débat : Le statut de l'intermittent en CI
                      </h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
                        Invité: M. le Ministre de la Culture
                      </p>
</div>
<div className="p-3 rounded-lg bg-neutral-900 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] font-bold text-neutral-500 bg-neutral-800 px-1.5 py-0.5 rounded" style={{}}>
                          VEN. 20H
                        </span>
</div>
<h4 className="text-sm font-medium text-white group-hover:text-amber-500 transition-colors" style={{}}>
                        Projection : Courts Métrages 2024
                      </h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
                        Sélection officielle NISA
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/30" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
<div>
<h2 className="text-3xl font-bold font-geist text-white mb-2">
                  Formations &amp; Tutoriels
                </h2>
<p className="text-neutral-400" style={{}}>
                  Vidéothèque technique réservée aux membres.
                </p>
</div>
<div className="flex gap-2 bg-neutral-900 p-1 rounded-lg border border-white/5" style={{}}>
<button className="px-3 py-1.5 text-xs font-medium rounded bg-neutral-800 text-white shadow-sm" style={{}}>
                  Tout voir
                </button>
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-neutral-800/50 text-neutral-400 transition-colors" style={{}}>
                  Image
                </button>
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-neutral-800/50 text-neutral-400 transition-colors" style={{}}>
                  Son
                </button>
<button className="px-3 py-1.5 text-xs font-medium rounded hover:bg-neutral-800/50 text-neutral-400 transition-colors" style={{}}>
                  Post-prod
                </button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1533561797500-4fad4750814e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur rounded text-[10px] font-mono text-white">
                    15:42
                  </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg" style={{}}>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden border border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sony+Pro&amp;background=random"/>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-red-500 transition-colors line-clamp-2 leading-tight mb-1" style={{}}>
                      Menus caché de la Sony FX6 : Guide complet
                    </h3>
<p className="text-xs text-neutral-500" style={{}}>
                      Sony Pro Africa • Il y a 2 jours
                    </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur rounded text-[10px] font-mono text-white">
                    42:10
                  </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg" style={{}}>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden border border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Davinci+R&amp;background=random"/>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-red-500 transition-colors line-clamp-2 leading-tight mb-1" style={{}}>
                      Étalonnage HDR : Workflow DaVinci Resolve
                    </h3>
<p className="text-xs text-neutral-500" style={{}}>
                      Blackmagic Design • Il y a 1 semaine
                    </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur rounded text-[10px] font-mono text-white">
                    08:55
                  </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg" style={{}}>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden border border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Sound+Guy&amp;background=random"/>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-red-500 transition-colors line-clamp-2 leading-tight mb-1" style={{}}>
                      Bien placer son micro cravate
                    </h3>
<p className="text-xs text-neutral-500" style={{}}>
                      Audio CI • Il y a 3 semaines
                    </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full rounded-lg overflow-hidden relative mb-3 border border-white/5">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur rounded text-[10px] font-mono text-white">
                    24:00
                  </div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white shadow-lg" style={{}}>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="5 3 19 12 5 21 5 3"></polygon>
</svg>
</div>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden border border-white/10" style={{}}>
<img className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Light+H&amp;background=random"/>
</div>
<div>
<h3 className="text-sm font-medium text-white group-hover:text-red-500 transition-colors line-clamp-2 leading-tight mb-1" style={{}}>
                      Utiliser le SkyPanel en mode effets
                    </h3>
<p className="text-xs text-neutral-500" style={{}}>
                      Light House • Il y a 1 mois
                    </p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>
<main className="page-section page-enter" id="sitech">

<section className="relative py-24 border-b border-amber-500/10 overflow-hidden bg-amber-950/10" style={{}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2000')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
<div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<span className="text-amber-500 font-bold tracking-widest text-xs uppercase mb-4 block animate-pulse" style={{}}>
              Salon International des Techniciens
            </span>
<h1 className="text-5xl md:text-7xl font-bold font-geist mb-6 text-white">
              SITECH
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600" style={{}}>
                2027
              </span>
</h1>
<p className="text-xl text-neutral-300 max-w-2xl mx-auto mb-10" style={{}}>
              L'événement phare des technologies de l'image et du son en Afrique
              de l'Ouest.
              <br/>
<span className="text-amber-500" style={{}}>
                Sofitel Hôtel Ivoire • 15-17 Novembre 2027
              </span>
</p>
<div className="flex flex-wrap justify-center gap-4">
<button className="px-8 py-3 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 transition-colors shadow-[0_0_20px_rgba(245,158,11,0.3)]" onclick="document.getElementById('accreditation').scrollIntoView({behavior: 'smooth'})" style={{}}>
                Prendre son Pass
              </button>
<button className="px-8 py-3 border border-amber-500/30 text-amber-500 rounded hover:bg-amber-500/10 transition-colors" onclick="document.getElementById('programme').scrollIntoView({behavior: 'smooth'})" style={{}}>
                Voir le Programme
              </button>
</div>
</div>
</section>

<section className="sticky top-16 z-40 bg-neutral-950/80 backdrop-blur border-b border-white/5" style={{}}>
<div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
<div className="flex gap-8 min-w-max">
<a className="py-4 text-sm font-medium text-white border-b-2 border-amber-500" href="#programme" style={{}}>
                Programme
              </a>
<a className="py-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#intervenants" style={{}}>
                Intervenants
              </a>
<a className="py-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#stands" style={{}}>
                Stands &amp; Expo
              </a>
<a className="py-4 text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#accreditation" style={{}}>
                Accréditations
              </a>
</div>
</div>
</section>

<section className="py-20" id="programme">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold font-geist text-white mb-2">
                  Programme Officiel
                </h2>
<p className="text-neutral-400" style={{}}>
                  Trois jours d'immersion technique et créative.
                </p>
</div>
<div className="flex bg-neutral-900 p-1 rounded-lg mt-4 md:mt-0" style={{}}>
<button className="prog-tab px-4 py-2 text-xs font-medium rounded transition-colors text-amber-500 bg-amber-500/10 border border-amber-500" data-day="day1" onclick="switchProgram('day1')" style={{}}>
                  J1: Ouverture
                </button>
<button className="prog-tab px-4 py-2 text-xs font-medium rounded transition-colors text-neutral-400 border border-transparent" data-day="day2" onclick="switchProgram('day2')" style={{}}>
                  J2: Masterclass
                </button>
<button className="prog-tab px-4 py-2 text-xs font-medium rounded transition-colors text-neutral-400 border border-transparent" data-day="day3" onclick="switchProgram('day3')" style={{}}>
                  J3: Clôture
                </button>
</div>
</div>

<div className="prog-content space-y-4 page-enter" id="prog-day1">
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="w-full md:w-32 text-center md:text-left shrink-0 md:border-r border-white/5 pr-6">
<span className="block text-2xl font-bold text-white">09:00</span>
<span className="text-xs text-neutral-500" style={{}}>10:30</span>
</div>
<div className="">
<h3 className="text-lg font-bold text-white mb-1">
                    Cérémonie d'Ouverture
                  </h3>
<p className="text-sm text-neutral-400 mb-3 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-map-pin" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
<circle cx="12" cy="10" r="3"></circle>
</svg>
                    Salle des Congrès - Sofitel Ivoire
                  </p>
<p className="text-sm text-neutral-300" style={{}}>
                    Discours inaugural par le Ministre de la Culture et le
                    Président du RETECHCI. Présentation des innovations majeures
                    de l'édition 2027.
                  </p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="w-full md:w-32 text-center md:text-left shrink-0 md:border-r border-white/5 pr-6">
<span className="block text-2xl font-bold text-white">11:00</span>
<span className="text-xs text-neutral-500" style={{}}>13:00</span>
</div>
<div className="">
<span className="inline-block px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-500 mb-2 border border-amber-500/30" style={{}}>
                    Panel Discussion
                  </span>
<h3 className="text-lg font-bold text-white mb-1">
                    L'IA dans la Post-production : Menace ou Outil ?
                  </h3>
<p className="text-sm text-neutral-400 mb-3" style={{}}>
                    Auditorium A
                  </p>
<div className="flex -space-x-2">
<img className="w-8 h-8 rounded-full border border-neutral-900 grayscale" src="https://ui-avatars.com/api/?name=John+Doe&amp;background=random" style={{}} title="John Doe"/>
<img className="w-8 h-8 rounded-full border border-neutral-900 grayscale" src="https://ui-avatars.com/api/?name=Jane+Smith&amp;background=random" style={{}} title="Jane Smith"/>
</div>
</div>
</div>
</div>

<div className="prog-content hidden space-y-4" id="prog-day2">
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="w-full md:w-32 text-center md:text-left shrink-0 md:border-r border-white/5 pr-6">
<span className="block text-2xl font-bold text-white">10:00</span>
<span className="text-xs text-neutral-500" style={{}}>13:00</span>
</div>
<div>
<span className="inline-block px-2 py-0.5 rounded text-[10px] bg-red-500/20 text-red-500 mb-2 border border-red-500/30" style={{}}>
                    Masterclass
                  </span>
<h3 className="text-lg font-bold text-white mb-1">
                    Éclairage Cinéma : Les secrets du "Low Key"
                  </h3>
<p className="text-sm text-neutral-400 mb-3" style={{}}>
                    Studio 1 - Avec Marc Zadi (Chef Op)
                  </p>
<p className="text-sm text-neutral-300" style={{}}>
                    Démonstration pratique avec les nouvelles séries ARRI
                    SkyPanel X. Manipulation et setup lumière en direct.
                  </p>
</div>
</div>
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="w-full md:w-32 text-center md:text-left shrink-0 md:border-r border-white/5 pr-6">
<span className="block text-2xl font-bold text-white">14:30</span>
<span className="text-xs text-neutral-500" style={{}}>17:00</span>
</div>
<div>
<span className="inline-block px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-500 mb-2 border border-blue-500/30" style={{}}>
                    Atelier Son
                  </span>
<h3 className="text-lg font-bold text-white mb-1">
                    Mixage Immersif Dolby Atmos
                  </h3>
<p className="text-sm text-neutral-400 mb-3" style={{}}>
                    Salle Dolby
                  </p>
<p className="text-sm text-neutral-300" style={{}}>
                    Initiation aux workflows Atmos pour le cinéma et le
                    streaming. Intervenant certifié Dolby.
                  </p>
</div>
</div>
</div>

<div className="prog-content hidden space-y-4" id="prog-day3">
<div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border border-white/5 bg-neutral-900/40 hover:border-amber-500/20 transition-colors" style={{}}>
<div className="w-full md:w-32 text-center md:text-left shrink-0 md:border-r border-white/5 pr-6">
<span className="block text-2xl font-bold text-white">19:00</span>
<span className="text-xs text-neutral-500" style={{}}>23:00</span>
</div>
<div>
<span className="inline-block px-2 py-0.5 rounded text-[10px] bg-amber-500/20 text-amber-500 mb-2 border border-amber-500/30" style={{}}>
                    Gala
                  </span>
<h3 className="text-lg font-bold text-white mb-1">
                    Cérémonie de Clôture &amp; Awards
                  </h3>
<p className="text-sm text-neutral-400 mb-3" style={{}}>
                    Grande Salle
                  </p>
<p className="text-sm text-neutral-300" style={{}}>
                    Remise des prix "Technicien de l'Année", Cocktail dinatoire
                    et networking.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-neutral-900/20" id="intervenants" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-bold font-geist text-white mb-10">
              Intervenants &amp; Experts
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="group text-center">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 group-hover:border-amber-500 transition-colors" style={{}}>
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Sarah+K&amp;background=random"/>
</div>
<h4 className="font-bold text-white">Sarah Koné</h4>
<p className="text-xs text-amber-500 uppercase tracking-wider" style={{}}>
                  Etalonneuse Senior
                </p>
</div>
<div className="group text-center">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 group-hover:border-amber-500 transition-colors" style={{}}>
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=David+M&amp;background=random"/>
</div>
<h4 className="font-bold text-white">David Moreau</h4>
<p className="text-xs text-amber-500 uppercase tracking-wider" style={{}}>
                  Sound Designer
                </p>
</div>
<div className="group text-center">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 group-hover:border-amber-500 transition-colors" style={{}}>
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Fatou+D&amp;background=random"/>
</div>
<h4 className="font-bold text-white">Fatou Diop</h4>
<p className="text-xs text-amber-500 uppercase tracking-wider" style={{}}>
                  Réalisatrice VR
                </p>
</div>
<div className="group text-center">
<div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 group-hover:border-amber-500 transition-colors" style={{}}>
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Jean+Luc&amp;background=random"/>
</div>
<h4 className="font-bold text-white">Jean-Luc B.</h4>
<p className="text-xs text-amber-500 uppercase tracking-wider" style={{}}>
                  Ingénieur Optique
                </p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="stands">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-10">
<h2 className="text-3xl font-bold font-geist text-white">
                Village Expo
              </h2>
<button className="text-sm text-amber-500 hover:text-white transition-colors flex items-center gap-2" style={{}}>
                Réserver un stand
                <svg className="lucide lucide-arrow-right" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="rounded-xl overflow-hidden border border-white/5 bg-neutral-900 group hover:border-amber-500/20 transition-all" style={{}}>
<div className="h-40 bg-neutral-800 flex items-center justify-center" style={{}}>
<span className="text-2xl font-bold text-neutral-600" style={{}}>
                    SONY
                  </span>
</div>
<div className="p-6">
<h3 className="font-bold text-white mb-2">Stand A12</h3>
<p className="text-sm text-neutral-400" style={{}}>
                    Découvrez la nouvelle gamme Cinema Line et les caméras
                    Burano.
                  </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/5 bg-neutral-900 group hover:border-amber-500/20 transition-all" style={{}}>
<div className="h-40 bg-neutral-800 flex items-center justify-center" style={{}}>
<span className="text-2xl font-bold text-neutral-600" style={{}}>
                    CANON
                  </span>
</div>
<div className="p-6">
<h3 className="font-bold text-white mb-2">Stand B04</h3>
<p className="text-sm text-neutral-400" style={{}}>
                    Objectifs RF Cinema et solutions VR 180°.
                  </p>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-white/5 bg-neutral-900 group hover:border-amber-500/20 transition-all" style={{}}>
<div className="h-40 bg-neutral-800 flex items-center justify-center" style={{}}>
<span className="text-2xl font-bold text-neutral-600" style={{}}>
                    BLACKMAGIC
                  </span>
</div>
<div className="p-6">
<h3 className="font-bold text-white mb-2">Stand C01</h3>
<p className="text-sm text-neutral-400" style={{}}>
                    Workshop DaVinci Resolve en continu.
                  </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-neutral-900 to-black border-t border-white/5" id="accreditation" style={{}}>
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl font-bold font-geist text-white mb-4">
              Accréditations
            </h2>
<p className="text-neutral-400 mb-12" style={{}}>
              Réservez votre place pour SITECH 2027
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/50 hover:scale-105 transition-transform" style={{}}>
<h3 className="text-lg font-medium text-white mb-2">Étudiant</h3>
<div className="text-4xl font-bold text-white mb-6">
                  5.000
                  <span className="text-sm text-neutral-500 font-normal" style={{}}>
                    FCFA
                  </span>
</div>
<ul className="text-sm text-neutral-400 space-y-3 mb-8 text-left" style={{}}>
<li className="flex gap-2">
<span className="text-amber-500" style={{}}>✓</span>
                    Accès Zone Expo
                  </li>
<li className="flex gap-2">
<span className="text-amber-500" style={{}}>✓</span>
                    2 Masterclasses au choix
                  </li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">
                  Réserver
                </button>
</div>

<div className="p-8 rounded-2xl border border-amber-500 bg-neutral-800 relative transform md:scale-110 shadow-2xl shadow-amber-900/20 z-10" style={{}}>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-amber-500 text-black text-xs font-bold rounded-full uppercase" style={{}}>
                  Recommandé
                </div>
<h3 className="text-lg font-medium text-white mb-2">
                  Professionnel
                </h3>
<div className="text-4xl font-bold text-amber-500 mb-6" style={{}}>
                  25.000
                  <span className="text-sm text-neutral-400 font-normal" style={{}}>
                    FCFA
                  </span>
</div>
<ul className="text-sm text-neutral-300 space-y-3 mb-8 text-left" style={{}}>
<li className="flex gap-2 text-white">
<span className="text-amber-500" style={{}}>✓</span>
                    Accès Illimité 3 Jours
                  </li>
<li className="flex gap-2 text-white">
<span className="text-amber-500" style={{}}>✓</span>
                    Accès VIP Masterclasses
                  </li>
</ul>
<button className="w-full py-3 rounded bg-amber-500 text-black font-bold hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20" style={{}}>
                  Acheter le Pass
                </button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-neutral-900/50 hover:scale-105 transition-transform" style={{}}>
<h3 className="text-lg font-medium text-white mb-2">
                  Entreprise (x5)
                </h3>
<div className="text-4xl font-bold text-white mb-6">
                  100.000
                  <span className="text-sm text-neutral-500 font-normal" style={{}}>
                    FCFA
                  </span>
</div>
<ul className="text-sm text-neutral-400 space-y-3 mb-8 text-left" style={{}}>
<li className="flex gap-2">
<span className="text-amber-500" style={{}}>✓</span>
                    5 Badges Pro
                  </li>
<li className="flex gap-2">
<span className="text-amber-500" style={{}}>✓</span>
                    Logo sur le site
                  </li>
</ul>
<button className="w-full py-3 rounded border border-white/10 text-white hover:bg-white hover:text-black transition-colors font-medium">
                  Contacter
                </button>
</div>
</div>
</div>
</section>
</main>
<main className="page-section hidden" id="auth">
<section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-20 relative overflow-hidden">

<div className="absolute inset-0 bg-neutral-950" style={{}}></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-red-900/20 to-transparent blur-3xl pointer-events-none" style={{}}></div>
<div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="p-8 rounded-3xl border border-white/10 bg-neutral-900/50 backdrop-blur-sm" style={{}}>
<h2 className="text-2xl font-bold font-geist text-white mb-2">
                Connexion
              </h2>
<p className="text-neutral-400 mb-8 text-sm" style={{}}>
                Accédez à votre espace personnel sécurisé.
              </p>
<form className="space-y-5" onsubmit="event.preventDefault(); window.backend.login(this);">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                    Matricule ou Email
                  </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="ex: CI-2024-XXXX" style={{}} type="text"/>
<svg className="lucide lucide-user absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                    Mot de passe
                  </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="••••••••" style={{}} type="password"/>
<svg className="lucide lucide-lock absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<label className="flex items-center gap-2 cursor-pointer text-neutral-400 hover:text-white" style={{}}>
<input className="rounded border-white/20 bg-neutral-800 text-red-600 focus:ring-red-600/30" style={{}} type="checkbox"/>
                    Se souvenir de moi
                  </label>
<a className="text-neutral-500 hover:text-red-500 transition-colors" href="#" style={{}}>
                    Mot de passe oublié ?
                  </a>
</div>
<button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-lg shadow-red-900/20" id="login-btn" style={{}} type="submit">
                  Se connecter
                </button>
<div className="grid grid-cols-2 gap-2 mt-4">
<button className="py-2 text-xs font-bold border border-white/10 rounded hover:bg-white/5 text-neutral-500" onclick="simulateLogin('admin')" type="button">
                    Demo: Admin
                  </button>
<button className="py-2 text-xs font-bold border border-white/10 rounded hover:bg-white/5 text-neutral-500" onclick="simulateLogin('treasury')" type="button">
                    Demo: Trésor
                  </button>
</div>
<div className="flex items-center gap-4 my-6">
<div className="h-px bg-white/10 flex-1"></div>
<span className="text-xs text-neutral-500 uppercase" style={{}}>
                    Ou continuer avec
                  </span>
<div className="h-px bg-white/10 flex-1"></div>
</div>
<div className="grid grid-cols-2 gap-4">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium" onclick="simulateLogin()" type="button">
<svg className="w-5 h-5" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<g transform="matrix(1, 0, 0, 1, 0, 0)">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
</g>
</svg>
                    Google
                  </button>
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-white text-sm font-medium" onclick="simulateLogin()" type="button">
<svg className="w-5 h-5 text-white" fill="currentColor" viewbox="0 0 24 24">
<path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.64 3.4 1.63-3.12 1.88-2.6 5.75.35 7.1-.93 2.33-2.41 4.27-2.4 4.28zm-5.77-12.72c.3 2.18-2.69 4.14-4.58 3.84-.25-2.07 2.6-4.4 4.58-3.84z"></path>
</svg>
                    Apple
                  </button>
</div>
</form>
</div>

<div className="lg:pl-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[10px] font-bold uppercase tracking-wide mb-6" style={{}}>
                Rejoignez le réseau
              </div>
<h1 className="text-4xl md:text-5xl font-bold font-geist text-white mb-6">
                Devenir Membre

                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500" style={{}}>
                  Certifié RETECHCI
                </span>
</h1>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed" style={{}}>
                Professionnalisez votre carrière, accédez aux grilles salariales
                officielles et bénéficiez de la protection juridique du réseau.
              </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5 text-green-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h4 className="font-bold text-white text-sm">
                      Carte Professionnelle
                    </h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
                      Reconnue par le Ministère de la Culture et l'ONAC-CI.
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-users w-5 h-5 text-blue-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<circle cx="9" cy="7" r="4"></circle>
</svg>
</div>
<div>
<h4 className="font-bold text-white text-sm">
                      Réseau &amp; Opportunités
                    </h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
                      Accès prioritaire aux offres d'emploi et annuaire
                      certifié.
                    </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-scale w-5 h-5 text-amber-500" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3v18"></path>
<path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path>
<path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path>
<path d="M7 21h10"></path>
</svg>
</div>
<div>
<h4 className="font-bold text-white text-sm">
                      Protection Juridique
                    </h4>
<p className="text-xs text-neutral-500 mt-1" style={{}}>
                      Assistance en cas de litige et modèles de contrats
                      validés.
                    </p>
</div>
</div>
</div>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-3 rounded-lg bg-white text-black font-bold hover:bg-neutral-200 transition-colors" onclick="navigate('register')" style={{}}>
                  Créer un compte
                </button>
<button className="px-8 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                  En savoir plus
                </button>
</div>
</div>
</div>
</section>
</main>
<main className="page-section hidden" id="member">
<div className="max-w-7xl mx-auto px-6 py-12">
<header className="mb-10 border-b border-white/5 pb-8">
<h1 className="text-3xl font-semibold font-geist mb-2 text-white">
              Espace Membre
            </h1>
<p className="text-sm text-neutral-400" style={{}}>
              Bienvenue dans votre espace personnel sécurisé.
            </p>
</header>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<div className="lg:col-span-3 space-y-6">
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/50 flex flex-col items-center text-center" style={{}}>
<div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-amber-500/20 p-1" style={{}}>
<div className="w-full h-full rounded-full overflow-hidden bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d631acd-164f-476f-bb53-e90b294d3818_320w.jpg"/>
</div>
</div>
<h2 className="text-lg font-bold text-white">Jamel Basiru</h2>
<p className="text-xs text-amber-500 font-medium uppercase tracking-wider mb-4" style={{}}>
                  Monteur Image
                </p>
<div className="w-full h-px bg-white/5 mb-4"></div>
<nav className="w-full space-y-1">
<button className="member-tab-btn w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors bg-neutral-800 text-white flex items-center gap-3" id="btn-member-profile" onclick="switchMemberTab('profile')" style={{}}>
<svg className="lucide lucide-user w-4 h-4" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
<circle cx="12" cy="7" r="4"></circle>
</svg>
                    Mon Profil
                  </button>
<button className="member-tab-btn w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-3" id="btn-member-cotisations" onclick="switchMemberTab('cotisations')" style={{}}>
<svg className="lucide lucide-credit-card w-4 h-4" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20" x="2" y="5"></rect>
<line x1="2" x2="22" y1="10" y2="10"></line>
</svg>
                    Cotisations
                  </button>
<button className="member-tab-btn w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-3" id="btn-member-partners" onclick="switchMemberTab('partners')" style={{}}>
<svg className="lucide lucide-gift w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="18" x="3" y="8"></rect>
<path d="M12 8v13"></path>
<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
</svg>
                    Partenaires &amp; Avantages
                  </button>
<button className="member-tab-btn w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-3" id="btn-member-security" onclick="switchMemberTab('security')" style={{}}>
<svg className="lucide lucide-lock w-4 h-4" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
                    Sécurité
                  </button>
<button className="member-tab-btn w-full text-left px-4 py-2.5 rounded-lg text-sm transition-colors text-neutral-400 hover:bg-neutral-800/50 flex items-center gap-3" id="btn-member-contact" onclick="switchMemberTab('contact')" style={{}}>
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
                    Bureau Exécutif
                  </button>
</nav>
</div>
<div className="p-4 rounded-xl border border-red-900/20 bg-red-900/5" style={{}}>
<h4 className="text-red-500 font-medium text-xs uppercase mb-2" style={{}}>
                  État du compte
                </h4>
<div className="flex items-center gap-2 text-sm text-white">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" style={{}}></div>
                  Cotisation à jour
                </div>
</div>
</div>

<div className="lg:col-span-9">

<div className="member-tab-content space-y-6 animate-[fadeIn_0.3s_ease-out]" id="member-profile">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-bold text-white">
                        Informations Personnelles
                      </h3>
<button className="text-xs text-amber-500 hover:text-white transition-colors" style={{}}>
                        Modifier
                      </button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Nom Complet
                        </label>
<div className="text-white font-medium">Jamel Basiru</div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Email
                        </label>
<div className="text-white font-medium">
                          jamel.basiru@retechci.org
                        </div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Téléphone
                        </label>
<div className="text-white font-medium">
                          +225 07 07 00 00 00
                        </div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Adresse
                        </label>
<div className="text-white font-medium">
                          Cocody Riviera 2, Abidjan
                        </div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<div className="flex justify-between items-start mb-6">
<h3 className="text-lg font-bold text-white">
                        Informations Professionnelles
                      </h3>
<button className="text-xs text-amber-500 hover:text-white transition-colors" style={{}}>
                        Mettre à jour
                      </button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Catégorie
                        </label>
<div className="inline-flex px-2 py-1 rounded bg-neutral-800 text-xs font-mono text-white border border-white/10" style={{}}>
                          Catégorie A - Chef de Poste
                        </div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Matricule
                        </label>
<div className="text-neutral-300 font-mono text-sm" style={{}}>
                          CI-2024-8842
                        </div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Compétences Certifiées
                        </label>
<div className="flex flex-wrap gap-2 mt-1">
<span className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-xs text-neutral-300" style={{}}>
                            Montage Avid
                          </span>
<span className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-xs text-neutral-300" style={{}}>
                            Etalonnage DaVinci
                          </span>
<span className="px-2 py-1 rounded bg-neutral-800 border border-white/5 text-xs text-neutral-300" style={{}}>
                            Workflow 4K
                          </span>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 uppercase mb-1" style={{}}>
                          Prétentions Salariales (Indicatif)
                        </label>
<div className="flex flex-wrap gap-3 mt-1">
<div className="px-3 py-1.5 rounded bg-neutral-800 border border-white/5 text-xs" style={{}}>
<span className="text-neutral-400 mr-2" style={{}}>
                              Jour:
                            </span>
<span className="text-white font-mono">150.000 F</span>
</div>
<div className="px-3 py-1.5 rounded bg-neutral-800 border border-white/5 text-xs" style={{}}>
<span className="text-neutral-400 mr-2" style={{}}>
                              Semaine:
                            </span>
<span className="text-white font-mono">850.000 F</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 flex flex-col md:flex-row items-center gap-8" style={{}}>
<div className="flex-grow">
<h3 className="text-lg font-bold text-white mb-2">
                      Ma Carte Membre
                    </h3>
<p className="text-neutral-400 text-sm mb-4" style={{}}>
                      Présentez ce QR code sur les lieux de tournage pour
                      valider votre statut.
                    </p>
<button className="px-4 py-2 bg-white text-black text-sm font-bold rounded hover:bg-neutral-200 transition-colors flex items-center gap-2" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
                      Télécharger sur Wallet
                    </button>
</div>

<div className="w-80 h-48 rounded-xl bg-gradient-to-br from-neutral-900 to-black border border-white/20 relative overflow-hidden p-5 shadow-2xl flex flex-col justify-between group transition-transform hover:scale-105 duration-300" style={{}}>

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/20 blur-3xl rounded-full pointer-events-none" style={{}}></div>

<div className="flex justify-between items-start z-10">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-red-600 flex items-center justify-center text-white text-[10px] font-bold" style={{}}>
                          R
                        </div>
<div>
<div className="text-[10px] font-bold text-white tracking-widest leading-none">
                            RETECHCI
                          </div>
<div className="text-[8px] text-neutral-500 uppercase" style={{}}>
                            Carte Membre
                          </div>
</div>
</div>
<div className="text-[9px] font-mono text-neutral-400 bg-white/5 px-1.5 py-0.5 rounded border border-white/10" style={{}}>
                        CI-2024-8842
                      </div>
</div>

<div className="flex items-end justify-between z-10 mt-auto">
<div className="flex items-center gap-3">

<div className="w-14 h-14 rounded-lg border border-white/20 p-0.5 bg-black/50 backdrop-blur-sm">
<img className="w-full h-full object-cover rounded-[calc(0.5rem-2px)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d631acd-164f-476f-bb53-e90b294d3818_320w.jpg"/>
</div>

<div>
<h4 className="text-white font-bold text-sm leading-tight">
                            Jamel Basiru
                          </h4>
<p className="text-[10px] text-amber-500 font-medium uppercase tracking-wide mt-0.5" style={{}}>
                            Monteur Image
                          </p>
<p className="text-[9px] text-neutral-500 mt-1" style={{}}>
                            Catégorie A • Senior
                          </p>
</div>
</div>

<div className="flex flex-col items-center gap-1">
<div className="w-16 h-16 bg-white rounded-lg p-1 shadow-lg overflow-hidden">
<svg className="w-full h-full text-black" fill="currentColor" viewbox="0 0 100 100">
<path d="M0 0h30v30H0V0zm10 10v10h10V10H10zm60-10h30v30H70V0zm10 10v10h10V10H80zM0 70h30v30H0V70zm10 10v10h10V80H10zm40-30h10v10H50V50zm10 10h10v10H60V60zm-10 10h10v10H50V70zm20 0h10v10H70V70zm-20 10h10v10H50V80z"></path>
<rect height="10" width="10" x="35" y="0"></rect>
<rect height="10" width="10" x="55" y="0"></rect>
<rect height="10" width="10" x="35" y="20"></rect>
<rect height="10" width="10" x="0" y="35"></rect>
<rect height="10" width="10" x="20" y="35"></rect>
<rect height="10" width="10" x="55" y="20"></rect>
</svg>
</div>
<span className="text-[8px] font-medium text-white/50 uppercase tracking-widest">
                          Profil &amp; CV
                        </span>
</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30 animate-[fadeIn_0.3s_ease-out]" style={{}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-red-600/20 text-red-500" style={{}}>
<svg className="lucide lucide-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
<path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-bold text-white">
                        Édition du Profil Public
                      </h3>
<p className="text-xs text-neutral-400" style={{}}>
                        Ces informations seront synchronisées avec l'annuaire
                        des techniciens.
                      </p>
</div>
</div>
<form className="space-y-8" onsubmit="event.preventDefault(); alert('Profil mis à jour avec succès !');">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-8">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-white mb-1">
                          Photo de Profil
                        </label>
<p className="text-xs text-neutral-500" style={{}}>
                          Cette photo apparaîtra sur votre carte membre et votre
                          fiche annuaire.
                        </p>
</div>
<div className="md:col-span-2 flex items-center gap-6">
<div className="w-20 h-20 rounded-full overflow-hidden border border-white/10 bg-neutral-800" style={{}}>
<img className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d631acd-164f-476f-bb53-e90b294d3818_320w.jpg"/>
</div>
<div className="flex-1">
<label className="block w-fit cursor-pointer">
<input accept="image/*" className="hidden" type="file"/>
<span className="px-4 py-2 rounded-lg border border-white/10 bg-neutral-900 hover:bg-neutral-800 transition-colors text-xs text-white font-medium flex items-center gap-2" style={{}}>
<svg className="lucide lucide-upload" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
                              Changer la photo
                            </span>
</label>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-8">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-white mb-1">
                          Filmographie (CV)
                        </label>
<p className="text-xs text-neutral-500" style={{}}>
                          Mettez à jour vos productions pour justifier votre
                          expérience.
                        </p>
</div>
<div className="md:col-span-2 space-y-4">

<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950 border border-white/5" style={{}}>
<div className="flex items-start gap-3">
<div className="mt-1">
<svg className="lucide lucide-clapperboard text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
<path d="m6.2 5.3 3.1 3.9"></path>
<path d="m12.4 3.4 3.1 4"></path>
<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">
                                  Les Coups de la Vie (Saison 3)
                                </div>
<div className="text-xs text-neutral-500" style={{}}>
                                  2023 • Chef Monteur
                                </div>
</div>
</div>
<button className="text-neutral-500 hover:text-red-500 p-1" style={{}} type="button">
<svg className="lucide lucide-trash-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-neutral-950 border border-white/5" style={{}}>
<div className="flex items-start gap-3">
<div className="mt-1">
<svg className="lucide lucide-clapperboard text-neutral-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"></path>
<path d="m6.2 5.3 3.1 3.9"></path>
<path d="m12.4 3.4 3.1 4"></path>
<path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"></path>
</svg>
</div>
<div>
<div className="text-sm font-medium text-white">
                                  Le Patriote
                                </div>
<div className="text-xs text-neutral-500" style={{}}>
                                  2022 • Assistant Monteur
                                </div>
</div>
</div>
<button className="text-neutral-500 hover:text-red-500 p-1" style={{}} type="button">
<svg className="lucide lucide-trash-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>

<div className="p-4 rounded-lg border border-dashed border-white/10 bg-white/5">
<h5 className="text-xs font-bold text-white uppercase mb-3 flex items-center gap-2">
<svg className="lucide lucide-plus-circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 12h8"></path>
<path d="M12 8v8"></path>
</svg>
                            Ajouter une production
                          </h5>
<div className="grid grid-cols-2 gap-3 mb-3">
<input className="col-span-2 px-3 py-2 rounded bg-neutral-900 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-amber-500 outline-none transition-colors" placeholder="Titre du film / série" style={{}} type="text"/>
<input className="px-3 py-2 rounded bg-neutral-900 border border-white/10 text-xs text-white placeholder:text-neutral-600 focus:border-amber-500 outline-none transition-colors" placeholder="Année (ex: 2024)" style={{}} type="number"/>
<select className="px-3 py-2 rounded bg-neutral-900 border border-white/10 text-xs text-white focus:border-amber-500 outline-none transition-colors" style={{}}>
<option>Chef de Poste</option>
<option>Assistant</option>
<option>Renfort</option>
</select>
</div>
<button className="w-full py-2 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white font-medium transition-colors flex items-center justify-center gap-2" style={{}} type="button">
                            Ajouter au CV
                          </button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-white mb-1">
                          Galerie de Tournage
                        </label>
<p className="text-xs text-neutral-500" style={{}}>
                          Photos affichées sur votre profil public pour
                          illustrer votre travail.
                        </p>
</div>
<div className="md:col-span-2">
<div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-4">
<div className="aspect-square rounded-lg bg-neutral-800 border border-white/10 overflow-hidden relative group" style={{}}>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<button className="absolute top-1 right-1 p-1 bg-black/50 rounded-full text-white hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100" style={{}} type="button">
<svg className="lucide lucide-x" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="aspect-square rounded-lg bg-neutral-800 border border-white/10 overflow-hidden relative group" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=400"/>
<button className="absolute top-1 right-1 p-1 bg-black/50 rounded-full text-white hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100" style={{}} type="button">
<svg className="lucide lucide-x" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<label className="aspect-square rounded-lg border-2 border-dashed border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5 transition-all cursor-pointer flex flex-col items-center justify-center gap-2 text-neutral-500 hover:text-amber-500" style={{}}>
<input accept="image/*" className="hidden" multiple="" type="file"/>
<svg className="lucide lucide-image-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"></path>
<line x1="16" x2="22" y1="5" y2="5"></line>
<line x1="19" x2="19" y1="2" y2="8"></line>
<circle cx="9" cy="9" r="2"></circle>
<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
</svg>
<span className="text-[10px] font-medium uppercase">
                              Ajouter
                            </span>
</label>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/5 pb-8">
<div className="md:col-span-1">
<label className="block text-sm font-medium text-white mb-1">
                          Prétentions Salariales
                        </label>
<p className="text-xs text-neutral-500" style={{}}>
                          Ces tarifs indicatifs seront visibles sur votre fiche
                          annuaire pour informer les producteurs.
                        </p>
</div>
<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                            Tarif Jour (8h)
                          </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg pl-4 pr-12 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="0" style={{}} type="number"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-bold" style={{}}>
                              FCFA
                            </span>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                            Tarif Semaine (6j)
                          </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg pl-4 pr-12 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="0" style={{}} type="number"/>
<span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-neutral-500 font-bold" style={{}}>
                              FCFA
                            </span>
</div>
</div>
<div className="sm:col-span-2 space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                            Conditions / Notes
                          </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Ex: Heures supp majorées, défraiement transport..." style={{}} type="text"/>
</div>
</div>
</div>
<div className="flex justify-end pt-4 border-t border-white/5">
<button className="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2" style={{}} type="submit">
<svg className="lucide lucide-save" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
<path d="M17 21v-8H7v8"></path>
<path d="M7 3v5h8"></path>
</svg>
                        Enregistrer les modifications
                      </button>
</div>
</form>
</div>
</div>

<div className="member-tab-content hidden space-y-6 animate-[fadeIn_0.3s_ease-out]" id="member-cotisations">
<div className="p-6 rounded-2xl border border-amber-500/30 bg-gradient-to-r from-amber-950/30 to-transparent relative overflow-hidden" style={{}}>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<h3 className="text-xl font-bold text-white mb-1">
                        Cotisation Annuelle 2024
                      </h3>
<p className="text-sm text-neutral-400" style={{}}>
                        Votre adhésion soutient les actions du réseau.
                      </p>
</div>
<div className="text-center md:text-right">
<div className="text-3xl font-bold text-amber-500 font-geist" style={{}}>
                        25.000
                        <span className="text-sm font-normal text-neutral-400" style={{}}>
                          FCFA
                        </span>
</div>
<div className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 rounded bg-green-500/20 text-green-500 text-xs font-bold uppercase border border-green-500/30" style={{}}>
<svg className="lucide lucide-check-circle w-3 h-3" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
                        Payé le 15/01/2024
                      </div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/5 overflow-hidden">
<div className="bg-neutral-900/50 px-6 py-4 border-b border-white/5 flex justify-between items-center" style={{}}>
<h3 className="font-bold text-white">
                      Historique des paiements
                    </h3>
<button className="text-xs text-neutral-400 hover:text-white flex items-center gap-1" style={{}}>
<svg className="lucide lucide-filter w-3 h-3" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path>
</svg>
                      Filtrer
                    </button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm">
<thead className="bg-neutral-900/30 text-xs uppercase text-neutral-500" style={{}}>
<tr>
<th className="px-6 py-3 font-medium">Référence</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Libellé</th>
<th className="px-6 py-3 font-medium">Montant</th>
<th className="px-6 py-3 font-medium">Statut</th>
<th className="px-6 py-3 font-medium text-right">
                            Action
                          </th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-neutral-300" style={{}}>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-neutral-500" style={{}}>
                            PAY-24-00125
                          </td>
<td className="px-6 py-4">15 Jan 2024</td>
<td className="px-6 py-4">Cotisation Annuelle 2024</td>
<td className="px-6 py-4 font-medium text-white">
                            25.000 FCFA
                          </td>
<td className="px-6 py-4">
<span className="text-green-500 text-xs bg-green-900/20 px-2 py-1 rounded border border-green-900/30" style={{}}>
                              Validé
                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</td>
</tr>
<tr className="hover:bg-white/5 transition-colors">
<td className="px-6 py-4 font-mono text-xs text-neutral-500" style={{}}>
                            PAY-23-08942
                          </td>
<td className="px-6 py-4">10 Fév 2023</td>
<td className="px-6 py-4">Cotisation Annuelle 2023</td>
<td className="px-6 py-4 font-medium text-white">
                            25.000 FCFA
                          </td>
<td className="px-6 py-4">
<span className="text-green-500 text-xs bg-green-900/20 px-2 py-1 rounded border border-green-900/30" style={{}}>
                              Validé
                            </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-neutral-400 hover:text-white p-1 rounded hover:bg-neutral-800" style={{}}>
<svg className="lucide lucide-download w-4 h-4" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 15V3"></path>
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<path d="m7 10 5 5 5-5"></path>
</svg>
</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="mt-4 p-4 rounded-xl border border-dashed border-white/10 bg-neutral-900/20 text-center" style={{}}>
<p className="text-sm text-neutral-400 mb-3" style={{}}>
                    Vous souhaitez anticiper votre prochaine cotisation ?
                  </p>
<button className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm font-medium rounded transition-colors" style={{}}>
                    Payer pour 2025
                  </button>
</div>
</div>
<div className="member-tab-content hidden space-y-6 animate-[fadeIn_0.3s_ease-out]" id="member-partners">
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="text-lg font-bold text-white flex items-center gap-2">
<svg className="lucide lucide-handshake text-amber-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m9 11 3 3L22 4"></path>
<path d="m22 4-4 11a12 12 0 0 1-12 12 12.3 12.3 0 0 1-5.9-1.4"></path>
<path d="m6.5 12.5 5 5"></path>
<path d="m4.8 14.1 2.9-2.9c.4-.4.4-1 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-2.9 2.9a1 1 0 0 0 0 1.4l1.6 1.6c.4.4 1 .4 1.4 0Z"></path>
</svg>
                        Banques &amp; Assurances
                      </h3>
<p className="text-sm text-neutral-400 mt-1" style={{}}>
                        Liez votre carte membre pour accéder aux services
                        financiers dédiés.
                      </p>
</div>
<button className="text-xs bg-neutral-800 hover:bg-neutral-700 text-white px-3 py-1.5 rounded transition-colors border border-white/5" style={{}}>
                      Voir toutes les offres
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden group hover:border-amber-500/30 transition-all" style={{}}>
<div className="absolute top-0 right-0 p-4 opacity-50">
<svg className="text-white/5" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01"></path>
<path d="M18 12h.01"></path>
</svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center mb-4 shadow-lg">
<span className="text-neutral-900 font-bold text-xl" style={{}}>
                            N
                          </span>
</div>
<h4 className="text-lg font-bold text-white mb-1">
                          NSIA Banque
                        </h4>
<p className="text-sm text-neutral-400 mb-4" style={{}}>
                          Compte "Technicien Cinéma"
                        </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-amber-500 rounded-full" style={{}}></div>
                            Frais de tenue de compte offerts
                          </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-amber-500 rounded-full" style={{}}></div>
                            Avance sur cachet (sous conditions)
                          </li>
</ul>
<button className="w-full py-2.5 rounded bg-amber-500 text-black text-xs font-bold hover:bg-amber-400 transition-colors" style={{}}>
                          Lier mon compte
                        </button>
</div>
</div>

<div className="relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden group hover:border-amber-500/30 transition-all" style={{}}>
<div className="absolute top-0 right-0 p-4 opacity-50">
<svg className="text-white/5" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mb-4 shadow-lg" style={{}}>
<span className="text-white font-bold text-xl">A</span>
</div>
<h4 className="text-lg font-bold text-white mb-1">
                          Allianz Assurances
                        </h4>
<p className="text-sm text-neutral-400 mb-4" style={{}}>
                          Pack "Tournage Serein"
                        </p>
<ul className="text-xs text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-blue-400 rounded-full" style={{}}></div>
                            Responsabilité Civile Pro
                          </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 bg-blue-400 rounded-full" style={{}}></div>
                            Protection Matériel (-20%)
                          </li>
</ul>
<button className="w-full py-2.5 rounded bg-white text-black text-xs font-bold hover:bg-neutral-200 transition-colors" style={{}}>
                          Obtenir un devis
                        </button>
</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<div className="mb-6">
<h3 className="text-lg font-bold text-white flex items-center gap-2">
<svg className="lucide lucide-tags text-amber-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z"></path>
<path d="M6 9.01V9"></path>
</svg>
                      Réductions Partenaires
                    </h3>
<p className="text-sm text-neutral-400 mt-1" style={{}}>
                      Présentez votre QR Code chez nos partenaires pour
                      bénéficier de ces remises immédiates.
                    </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-4 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-500/30 hover:bg-neutral-900 transition-all cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                          L
                        </div>
<span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs px-2 py-1 rounded" style={{}}>
                          -15%
                        </span>
</div>
<h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors" style={{}}>
                        Light House CI
                      </h5>
<p className="text-xs text-neutral-500" style={{}}>
                        Location Lumière &amp; Machinerie
                      </p>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-500/30 hover:bg-neutral-900 transition-all cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                          S
                        </div>
<span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs px-2 py-1 rounded" style={{}}>
                          -10%
                        </span>
</div>
<h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors" style={{}}>
                        Studios Abidjan
                      </h5>
<p className="text-xs text-neutral-500" style={{}}>
                        Location Plateau &amp; Loges
                      </p>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-500/30 hover:bg-neutral-900 transition-all cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                          H
                        </div>
<span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs px-2 py-1 rounded" style={{}}>
                          -20%
                        </span>
</div>
<h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors" style={{}}>
                        Sofitel Ivoire
                      </h5>
<p className="text-xs text-neutral-500" style={{}}>
                        Hébergement (Sur présentation carte)
                      </p>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-500/30 hover:bg-neutral-900 transition-all cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                          C
                        </div>
<span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs px-2 py-1 rounded" style={{}}>
                          -5%
                        </span>
</div>
<h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors" style={{}}>
                        Canon CI
                      </h5>
<p className="text-xs text-neutral-500" style={{}}>
                        Achat matériel neuf
                      </p>
</div>

<div className="p-4 rounded-xl border border-white/5 bg-neutral-950 hover:border-amber-500/30 hover:bg-neutral-900 transition-all cursor-pointer group" style={{}}>
<div className="flex justify-between items-start mb-3">
<div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center font-bold text-white text-xs">
                          U
                        </div>
<span className="bg-amber-500/10 text-amber-500 border border-amber-500/20 font-bold text-xs px-2 py-1 rounded" style={{}}>
                          Gratuit
                        </span>
</div>
<h5 className="font-bold text-white text-sm mb-1 group-hover:text-amber-500 transition-colors" style={{}}>
                        Uber for Business
                      </h5>
<p className="text-xs text-neutral-500" style={{}}>
                        Upgrade statut VTC
                      </p>
</div>
</div>
</div>
</div>

<div className="member-tab-content hidden space-y-6 animate-[fadeIn_0.3s_ease-out]" id="member-security">
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-neutral-800 text-white" style={{}}>
<svg className="lucide lucide-shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-bold text-white">
                        Sécurité du Compte
                      </h3>
<p className="text-xs text-neutral-400" style={{}}>
                        Gérez votre mot de passe et la sécurité de votre accès.
                      </p>
</div>
</div>
<form className="max-w-md space-y-5" onsubmit="event.preventDefault(); alert('Mot de passe modifié avec succès !');">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                        Ancien Mot de Passe
                      </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="••••••••" style={{}} type="password"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                        Nouveau Mot de Passe
                      </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="••••••••" style={{}} type="password"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                        Confirmer le Nouveau Mot de Passe
                      </label>
<div className="relative">
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="••••••••" style={{}} type="password"/>
</div>
</div>
<div className="pt-4 border-t border-white/5">
<button className="px-6 py-2 bg-white text-black text-sm font-bold rounded hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2" style={{}} type="submit">
<svg className="lucide lucide-save" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path>
<path d="M17 21v-8H7v8"></path>
<path d="M7 3v5h8"></path>
</svg>
                        Mettre à jour
                      </button>
</div>
</form>
</div>
</div>
<div className="member-tab-content hidden space-y-6 animate-[fadeIn_0.3s_ease-out]" id="member-contact">
<div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/30" style={{}}>
<h3 className="text-lg font-bold text-white mb-2">
                    Contacter le Bureau Exécutif
                  </h3>
<p className="text-sm text-neutral-400 mb-6" style={{}}>
                    Utilisez ce formulaire pour toute demande officielle,
                    signalement ou suggestion. Une réponse vous sera apportée
                    sous 48h.
                  </p>
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Message envoyé au bureau !');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                          Type de demande
                        </label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white appearance-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" style={{}}>
<option>Signalement de Litige (Production)</option>
<option>Demande d'Assistance Sociale</option>
<option>Suggestion pour le Réseau</option>
<option>Question Administrative</option>
<option>Autre</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                          Priorité
                        </label>
<div className="relative">
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white appearance-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" style={{}}>
<option>Normale</option>
<option>Haute</option>
<option>Urgente</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                        Sujet
                      </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" placeholder="Bref résumé de votre demande" style={{}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase" style={{}}>
                        Message Détaillé
                      </label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-neutral-600 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all resize-none" placeholder="Expliquez votre situation en détails..." rows="6" style={{}}></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<div className="text-xs text-neutral-500 flex items-center gap-2" style={{}}>
<svg className="lucide lucide-info w-3 h-3" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
                        Vos échanges sont confidentiels.
                      </div>
<button className="px-8 py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/5" style={{}} type="submit">
                        Envoyer le message
                      </button>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-section hidden" id="register">
<section className="py-20 min-h-screen flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-neutral-950"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/20 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-2xl w-full mx-auto px-6">
<button className="mb-8 flex items-center text-neutral-400 hover:text-white transition-colors gap-2" onclick="navigate('auth')">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
              Retour connexion
            </button>
<div className="bg-neutral-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-xl">
<div className="flex items-center justify-between mb-8 relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-white/10 -z-10"></div>
<div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors" id="step-indicator-1">
                  1
                </div>
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors" id="step-indicator-2">
                  2
                </div>
<div className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-400 flex items-center justify-center text-sm font-bold border-4 border-neutral-900 transition-colors" id="step-indicator-3">
                  3
                </div>
</div>
<form id="registration-form" onsubmit="event.preventDefault(); window.backend.register();">
<div className="space-y-5 animate-[fadeIn_0.3s_ease-out]" id="reg-step-1">
<h2 className="text-2xl font-bold text-white mb-2">Identité</h2>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Prénom
                      </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Nom
                      </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Date de Naissance
                      </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" required="" type="date"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Sexe
                      </label>
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors">
<option>Homme</option>
<option>Femme</option>
</select>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                      Lieu de résidence
                    </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Ville, Commune" required="" type="text"/>
</div>
<button className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold mt-4" onclick="nextRegStep(2)" type="button">
                    Suivant
                  </button>
</div>
<div className="space-y-5 hidden animate-[fadeIn_0.3s_ease-out]" id="reg-step-2">
<h2 className="text-2xl font-bold text-white mb-2">
                    Spécialité &amp; Compétences
                  </h2>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                      Corps de métier principal
                    </label>
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors">
<option>Image</option>
<option>Son</option>
<option>Lumière / Machinerie</option>
<option>Post-production</option>
<option>HMC (Habillage, Maquillage, Coiffure)</option>
<option>Décor</option>
<option>Régie / Production</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                      Compétences (Multi-select)
                    </label>
<div className="grid grid-cols-2 gap-2">
<label className="flex items-center gap-2 p-3 border border-white/10 rounded bg-neutral-950 cursor-pointer hover:border-white/30">
<input className="accent-red-500" type="checkbox"/>
<span className="text-sm text-neutral-300">
                          Caméra ARRI
                        </span>
</label>
<label className="flex items-center gap-2 p-3 border border-white/10 rounded bg-neutral-950 cursor-pointer hover:border-white/30">
<input className="accent-red-500" type="checkbox"/>
<span className="text-sm text-neutral-300">Steadicam</span>
</label>
<label className="flex items-center gap-2 p-3 border border-white/10 rounded bg-neutral-950 cursor-pointer hover:border-white/30">
<input className="accent-red-500" type="checkbox"/>
<span className="text-sm text-neutral-300">Drone</span>
</label>
<label className="flex items-center gap-2 p-3 border border-white/10 rounded bg-neutral-950 cursor-pointer hover:border-white/30">
<input className="accent-red-500" type="checkbox"/>
<span className="text-sm text-neutral-300">Grue</span>
</label>
</div>
</div>
<div className="flex gap-4 mt-4">
<button className="w-1/3 py-3 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5" onclick="nextRegStep(1)" type="button">
                      Retour
                    </button>
<button className="w-2/3 py-3 rounded-lg bg-red-600 hover:bg-red-500 text-white font-bold" onclick="nextRegStep(3)" type="button">
                      Suivant
                    </button>
</div>
</div>
<div className="space-y-5 hidden animate-[fadeIn_0.3s_ease-out]" id="reg-step-3">
<h2 className="text-2xl font-bold text-white mb-2">
                    Dossier Professionnel
                  </h2>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                      CV &amp; Filmographie (PDF)
                    </label>
<div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center hover:border-red-500/50 hover:bg-red-500/5 transition-all cursor-pointer">
<svg className="text-neutral-500 mx-auto mb-2" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y1="3" y2="15"></line>
</svg>
<p className="text-sm text-neutral-300">
                        Glissez votre fichier ici ou cliquez pour parcourir
                      </p>
<p className="text-xs text-neutral-600 mt-1">
                        Max 5MB. PDF uniquement.
                      </p>
</div>
</div>
<div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-lg">
<p className="text-xs text-amber-500 mb-2 font-bold uppercase">
                      Aperçu
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded flex items-center justify-center text-red-600 font-bold text-xs">
                        PDF
                      </div>
<div>
<p className="text-sm text-white">cv_2024.pdf</p>
<p className="text-xs text-neutral-500">1.2 MB • Prêt</p>
</div>
</div>
</div>
<div className="flex gap-4 mt-4">
<button className="w-1/3 py-3 rounded-lg border border-white/10 text-white font-bold hover:bg-white/5" onclick="nextRegStep(2)" type="button">
                      Retour
                    </button>
<button className="w-2/3 py-3 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold" onclick="alert('Inscription envoyée ! En attente de validation.'); navigate('auth');" type="button">
                      Terminer
                    </button>
</div>
</div>
</form>
</div>
</div>
</section>
</main>
<main className="page-section hidden only-admin" id="admin-dashboard">
<div className="flex min-h-screen pt-20">
<div className="w-64 bg-neutral-900 border-r border-white/5 hidden lg:block p-6">
<div className="text-xs font-bold text-neutral-500 uppercase mb-4">
              Administration
            </div>
<nav className="space-y-1">
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded bg-red-600/10 text-red-500 text-sm font-medium border border-red-600/20 transition-colors mb-1" data-target="validation" onclick="switchAdminTab('validation')">
                Validation Membres
              </button>
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm border border-transparent transition-colors mb-1" data-target="roles" onclick="switchAdminTab('roles')">
                Gestion Rôles
              </button>
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm border border-transparent transition-colors mb-1" data-target="convocations" onclick="switchAdminTab('convocations')">
                Convocations
              </button>
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm border border-transparent transition-colors mb-1" data-target="content" onclick="switchAdminTab('content')">
                Contenu &amp; News
              </button>
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm border border-transparent transition-colors mb-1" data-target="stats" onclick="switchAdminTab('stats')">
                Statistiques
              </button>
<button className="admin-nav-btn w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm border border-transparent transition-colors mb-1" data-target="deploy" onclick="switchAdminTab('deploy')">
                🚀 Déploiement &amp; Hébergement
              </button>
</nav>
</div>
<div className="flex-1 p-8">
<header className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-bold text-white">Espace Direction</h1>
<p className="text-sm text-neutral-400">
                  Super Admin • Directeur Exécutif
                </p>
</div>
<div className="flex gap-3">
<button className="px-4 py-2 bg-neutral-800 border border-white/10 text-white text-sm font-bold rounded hover:bg-neutral-700 transition-colors flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.35a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
                  Configuration
                </button>
</div>
</header>
<div className="admin-view animate-[fadeIn_0.3s_ease-out]" id="admin-view-validation">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                    Membres Actifs
                  </div>
<div className="text-2xl font-bold text-white">584</div>
<div className="text-green-500 text-xs mt-1">+12 ce mois</div>
</div>
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                    En Attente
                  </div>
<div className="text-2xl font-bold text-amber-500">18</div>
<div className="text-neutral-400 text-xs mt-1">
                    Dossiers à valider
                  </div>
</div>
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                    Taux Cotisation
                  </div>
<div className="text-2xl font-bold text-blue-500">85%</div>
<div className="text-neutral-400 text-xs mt-1">Exercice 2024</div>
</div>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden">
<div className="px-6 py-4 border-b border-white/5 font-bold text-white flex justify-between items-center">
<span>Dernières Inscriptions</span>
<span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">
                    +3 nouveaux
                  </span>
</div>
<div className="divide-y divide-white/5" id="admin-pending-list">
<div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">
                        KO
                      </div>
<div>
<div className="text-white font-medium">Kouamé Jean</div>
<div className="text-xs text-neutral-500">
                          Assistant Caméra
                        </div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-500/30 rounded hover:bg-red-500/10" onclick="window.backend.deleteUser(4)">
                        Refuser
                      </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500" onclick="window.backend.validateUser(4)">
                        Valider
                      </button>
</div>
</div>
<div className="p-4 flex items-center justify-between hover:bg-white/5 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-xs font-bold text-white">
                        AM
                      </div>
<div>
<div className="text-white font-medium">Aminata Soro</div>
<div className="text-xs text-neutral-500">Maquilleuse</div>
</div>
</div>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-red-500 border border-red-500/30 rounded hover:bg-red-500/10" onclick="window.backend.deleteUser(5)">
                        Refuser
                      </button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-green-600 rounded hover:bg-green-500" onclick="window.backend.validateUser(5)">
                        Valider
                      </button>
</div>
</div>
</div>
</div>
</div>
<div className="admin-view hidden animate-[fadeIn_0.3s_ease-out]" id="admin-view-roles">
<h2 className="text-xl font-bold text-white mb-6">
                Gestion des Rôles
              </h2>
<div className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden">
<div className="p-4 border-b border-white/5 flex gap-4">
<input className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm text-white w-full focus:ring-1 focus:ring-red-600 outline-none" placeholder="Rechercher par nom ou matricule..." type="text"/>
<select className="bg-neutral-800 border-none rounded-lg px-4 py-2 text-sm text-white focus:ring-1 focus:ring-red-600 outline-none">
<option>Tous les rôles</option>
<option>Admin</option>
<option>Trésorier</option>
<option>Membre</option>
</select>
</div>
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-white/5 text-xs uppercase font-bold text-neutral-500">
<tr>
<th className="px-6 py-3">Utilisateur</th>
<th className="px-6 py-3">Rôle Actuel</th>
<th className="px-6 py-3 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5" id="admin-roles-list">
<tr>
<td className="px-6 py-4 text-white font-medium">
                        Jamel Basiru
                      </td>
<td className="px-6 py-4">
<span className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-bold border border-white/10">
                          admin
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-white hover:text-red-500 transition-colors">
                          Modifier
                        </button>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-white font-medium">
                        Orlane N'guessan
                      </td>
<td className="px-6 py-4">
<span className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-bold border border-white/10">
                          treasury
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-white hover:text-red-500 transition-colors">
                          Modifier
                        </button>
</td>
</tr>
<tr>
<td className="px-6 py-4 text-white font-medium">
                        Marc Zadi
                      </td>
<td className="px-6 py-4">
<span className="bg-neutral-800 text-white px-2 py-1 rounded text-xs font-bold border border-white/10">
                          member
                        </span>
</td>
<td className="px-6 py-4 text-right">
<button className="text-white hover:text-red-500 transition-colors">
                          Modifier
                        </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<div className="admin-view hidden animate-[fadeIn_0.3s_ease-out]" id="admin-view-convocations">
<h2 className="text-xl font-bold text-white mb-6">
                Envoyer une Convocation
              </h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2">
<form className="bg-neutral-900 border border-white/5 rounded-xl p-6 space-y-5" onsubmit="event.preventDefault(); alert('Convocation envoyée !');">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Destinataires
                      </label>
<select className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-600 transition-colors">
<option>Tous les membres (584)</option>
<option>Bureau Exécutif uniquement</option>
<option>Membres à jour de cotisation</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Objet
                      </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-600 transition-colors" placeholder="Ex: Convocation Assemblée Générale Ordinaire" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
                        Message
                      </label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-red-600 transition-colors resize-none" rows="6"></textarea>
</div>
<div className="flex items-center justify-between pt-2">
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-red-600" type="checkbox"/>
<span className="text-sm text-neutral-400">
                          Envoyer copie par SMS
                        </span>
</label>
<button className="bg-white text-black font-bold py-2.5 px-8 rounded-lg hover:bg-neutral-200 transition-colors">
                        Envoyer
                      </button>
</div>
</form>
</div>
<div>
<div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
<h3 className="font-bold text-white mb-4">Historique</h3>
<div className="space-y-4">
<div className="pb-4 border-b border-white/5">
<div className="text-xs text-neutral-500 mb-1">
                          10 Nov 2024
                        </div>
<div className="text-sm text-white font-medium">
                          Rappel Cotisations 2024
                        </div>
<div className="text-xs text-green-500 mt-1">
                          Envoyé à 580 membres
                        </div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1">
                          01 Nov 2024
                        </div>
<div className="text-sm text-white font-medium">
                          Invitation SITECH 2027
                        </div>
<div className="text-xs text-green-500 mt-1">
                          Envoyé à 580 membres
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="admin-view hidden animate-[fadeIn_0.3s_ease-out]" id="admin-view-content">
<div className="flex justify-between items-center mb-6">
<h2 className="text-xl font-bold text-white">Gestion du Contenu</h2>
<button className="px-4 py-2 bg-red-600 text-white text-sm font-bold rounded hover:bg-red-500 transition-colors">
                  + Nouvel Article
                </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden group">
<div className="h-32 bg-neutral-800 relative">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=400"/>
</div>
<div className="p-4">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] uppercase font-bold text-amber-500">
                        Box Office
                      </span>
<span className="text-[10px] text-green-500 bg-green-900/20 px-1.5 py-0.5 rounded border border-green-900/30">
                        Publié
                      </span>
</div>
<h3 className="text-white font-bold text-sm mb-4 line-clamp-2">
                      Record d'entrées pour "La Canne du Roi"
                    </h3>
<div className="flex gap-2">
<button className="flex-1 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs text-white transition-colors">
                        Editer
                      </button>
<button className="px-2 py-1.5 rounded bg-white/5 hover:bg-red-900/30 text-xs text-neutral-400 hover:text-red-500 transition-colors">
<svg className="lucide lucide-trash-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
<line x1="10" x2="10" y1="11" y2="17"></line>
<line x1="14" x2="14" y1="11" y2="17"></line>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="admin-view hidden animate-[fadeIn_0.3s_ease-out]" id="admin-view-stats">
<h2 className="text-xl font-bold text-white mb-6">
                Statistiques Association
              </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
<h3 className="text-sm font-bold text-white mb-4">
                    Répartition par Métier
                  </h3>
<div className="space-y-3">
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Image (Camera/Lumière)</span>
<span>45%</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-red-600 h-2 rounded-full" style={{width: '45%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Son</span>
<span>20%</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-amber-500 h-2 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Post-Production</span>
<span>15%</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-blue-500 h-2 rounded-full" style={{width: '15%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-xs text-neutral-400 mb-1">
<span>Autres (Régie, HMC)</span>
<span>20%</span>
</div>
<div className="w-full bg-neutral-800 rounded-full h-2">
<div className="bg-neutral-500 h-2 rounded-full" style={{width: '20%'}}></div>
</div>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
<h3 className="text-sm font-bold text-white mb-4">
                    Croissance Membres (2024)
                  </h3>
<div className="flex items-end justify-between h-32 gap-2">
<div className="w-full bg-neutral-800 rounded-t hover:bg-red-600/50 transition-colors" style={{height: '40%'}}></div>
<div className="w-full bg-neutral-800 rounded-t hover:bg-red-600/50 transition-colors" style={{height: '55%'}}></div>
<div className="w-full bg-neutral-800 rounded-t hover:bg-red-600/50 transition-colors" style={{height: '45%'}}></div>
<div className="w-full bg-neutral-800 rounded-t hover:bg-red-600/50 transition-colors" style={{height: '60%'}}></div>
<div className="w-full bg-neutral-800 rounded-t hover:bg-red-600/50 transition-colors" style={{height: '75%'}}></div>
<div className="w-full bg-red-600 rounded-t shadow-[0_0_15px_rgba(220,38,38,0.5)]" style={{height: '90%'}}></div>
</div>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2 uppercase">
<span>Juin</span>
<span>Nov</span>
</div>
</div>
</div>
</div>
<div className="admin-view hidden animate-[fadeIn_0.3s_ease-out]" id="admin-view-deploy">
<div className="flex items-center justify-between mb-6">
<h2 className="text-xl font-bold text-white">
                  Centre de Déploiement &amp; Hébergement
                </h2>
<span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-wide flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Système Prêt
                </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y="2"></line>
<line x1="8" x2="8" y="2"></line>
<line x1="3" x2="21" y="10"></line>
</svg>
</div>
<div className="text-neutral-500 text-xs uppercase mb-1 font-bold">
                    État Serveur
                  </div>
<div className="text-2xl font-bold text-green-500">En Ligne</div>
<div className="text-neutral-400 text-[10px] mt-1">
                    Uptime: 99.99% • Latence: 24ms
                  </div>
</div>
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
<path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
</svg>
</div>
<div className="text-neutral-500 text-xs uppercase mb-1 font-bold">
                    Base de Données
                  </div>
<div className="text-2xl font-bold text-blue-500">Connectée</div>
<div className="text-neutral-400 text-[10px] mt-1">
                    PostgreSQL v16 • 12/50 GB
                  </div>
</div>
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12h5"></path>
<path d="M17 12h5"></path>
<path d="M7 12v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5"></path>
<path d="M12 2v10"></path>
<path d="M12 2a5 5 0 0 1 5 5v5H7V7a5 5 0 0 1 5-5Z"></path>
</svg>
</div>
<div className="text-neutral-500 text-xs uppercase mb-1 font-bold">
                    Hébergement
                  </div>
<div className="text-2xl font-bold text-purple-500">
                    Vercel Pro
                  </div>
<div className="text-neutral-400 text-[10px] mt-1">
                    SSL Actif • CDN Global
                  </div>
</div>
<div className="p-5 rounded-xl bg-neutral-800/50 border border-white/5 relative overflow-hidden group">
<div className="absolute right-0 top-0 p-3 opacity-20 group-hover:opacity-40 transition-opacity">
<svg fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div className="text-neutral-500 text-xs uppercase mb-1 font-bold">
                    Dernier Deploy
                  </div>
<div className="text-xl font-bold text-white font-mono">
                    v2.4.0
                  </div>
<div className="text-neutral-400 text-[10px] mt-1">
                    Il y a 2h par @dev_team
                  </div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-2 bg-neutral-900 border border-white/5 rounded-xl p-6">
<h3 className="font-bold text-white mb-4 flex items-center gap-2">
<svg className="text-amber-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19 7-7 3 3-7 7-3-3z"></path>
<path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
<path d="m2 2 7.586 7.586"></path>
<circle cx="11" cy="11" r="2"></circle>
</svg>
                    Pipeline CI/CD
                  </h3>
<div className="flex flex-col gap-4">
<div className="flex items-center justify-between p-4 border border-white/5 rounded-lg bg-black/40">
<div className="flex items-start gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
<div>
<div className="font-bold text-white text-sm">
                            Mise à jour Production
                          </div>
<div className="text-xs text-neutral-500 mt-1">
                            Déploie la branche
                            <code className="bg-neutral-800 px-1 py-0.5 rounded text-neutral-300">
                              main
                            </code>
                            sur le serveur de production.
                          </div>
</div>
</div>
<button className="px-5 py-2 bg-white text-black text-xs font-bold rounded hover:bg-neutral-200 transition-colors shadow-lg flex items-center gap-2" id="deploy-btn" onclick="window.backend.deploySystem()">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
<polyline points="17 8 12 3 7 8"></polyline>
<line x1="12" x2="12" y="3"></line>
</svg>
                        Déployer
                      </button>
</div>
<div className="relative">
<div className="absolute top-2 right-2 flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="hidden h-56 bg-black border border-white/10 rounded-lg p-4 font-mono text-[10px] md:text-xs text-neutral-400 overflow-y-auto space-y-1 shadow-inner" id="deploy-console"></div>
<div className="h-56 bg-black border border-white/10 rounded-lg p-4 flex items-center justify-center text-neutral-600 text-xs font-mono border-dashed" id="deploy-console-placeholder">
                        En attente du lancement du déploiement...
                      </div>
</div>
</div>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-xl p-6">
<h3 className="font-bold text-white mb-4">
                    Checklist Production
                  </h3>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-[10px]">
                        ✓
                      </div>
<span>Minification Assets (JS/CSS)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-[10px]">
                        ✓
                      </div>
<span>Optimisation Images (WebP)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-[10px]">
                        ✓
                      </div>
<span>Variables d'Environnement</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-[10px]">
                        ✓
                      </div>
<span>Sécurité Headers (CSP, CORS)</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 text-[10px]">
                        ✓
                      </div>
<span>Sauvegarde Base de Données</span>
</div>
<div className="w-full h-px bg-white/5 my-2"></div>
<div className="p-3 bg-green-500/5 rounded border border-green-500/10 text-xs text-green-500 leading-relaxed">
<strong>Audit Réussi :</strong>
                      Le système est stable et prêt pour l'hébergement public.
                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
<main className="page-section hidden only-treasury" id="treasury-dashboard">
<div className="flex min-h-screen pt-20">
<div className="w-64 bg-neutral-900 border-r border-white/5 hidden lg:block p-6">
<div className="text-xs font-bold text-neutral-500 uppercase mb-4">
              Trésorerie
            </div>
<nav className="space-y-1">
<button className="w-full text-left px-3 py-2 rounded bg-amber-600/10 text-amber-500 text-sm font-medium border border-amber-600/20">
                Vue d'ensemble
              </button>
<button className="w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm transition-colors">
                Journal des Transactions
              </button>
<button className="w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm transition-colors">
                Relances Cotisations
              </button>
<button className="w-full text-left px-3 py-2 rounded text-neutral-400 hover:bg-white/5 hover:text-white text-sm transition-colors">
                Exports Comptables
              </button>
</nav>
</div>
<div className="flex-1 p-8">
<header className="flex justify-between items-center mb-8">
<div>
<h1 className="text-2xl font-bold text-white">Espace Finances</h1>
<p className="text-sm text-neutral-400">
                  Connecté en tant que Trésorière
                </p>
</div>
<button className="px-4 py-2 bg-amber-500 text-black text-sm font-bold rounded hover:bg-amber-400" onclick="document.getElementById('modal-transaction').classList.remove('hidden')">
                Nouvelle Transaction
              </button>
</header>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
<div className="p-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                  Solde Actuel
                </div>
<div className="text-2xl font-bold text-white">
                  12.4M
                  <span className="text-sm font-normal text-neutral-500">FCFA</span>
</div>
</div>
<div className="p-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                  Entrées (Mois)
                </div>
<div className="text-2xl font-bold text-green-500">+ 1.2M</div>
</div>
<div className="p-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                  Sorties (Mois)
                </div>
<div className="text-2xl font-bold text-red-500">- 450k</div>
</div>
<div className="p-5 rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 border border-white/5">
<div className="text-neutral-500 text-xs uppercase mb-1">
                  Cotisations à jour
                </div>
<div className="text-2xl font-bold text-amber-500">412/584</div>
</div>
</div>
<div className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden">
<table className="w-full text-left text-sm">
<thead className="bg-white/5 text-xs uppercase text-neutral-500">
<tr>
<th className="px-6 py-3">Date</th>
<th className="px-6 py-3">Libellé</th>
<th className="px-6 py-3">Catégorie</th>
<th className="px-6 py-3">Montant</th>
<th className="px-6 py-3">Statut</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 text-neutral-300" id="treasury-list">
<tr className="hover:bg-white/5">
<td className="px-6 py-4">2024-03-15</td>
<td className="px-6 py-4">Cotisation An. - Marc Zadi</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-xs bg-green-500/10 text-green-500">
                        Entrée
                      </span>
</td>
<td className="px-6 py-4 text-white font-medium">25000 FCFA</td>
<td className="px-6 py-4 text-green-500">Confirmé</td>
</tr>
<tr className="hover:bg-white/5">
<td className="px-6 py-4">2024-03-14</td>
<td className="px-6 py-4">Location Salle Sofitel (Acompte)</td>
<td className="px-6 py-4">
<span className="px-2 py-1 rounded text-xs bg-red-500/10 text-red-500">
                        Sortie
                      </span>
</td>
<td className="px-6 py-4 text-white font-medium">
                      500000 FCFA
                    </td>
<td className="px-6 py-4 text-green-500">En attente</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</main>
</div>
<div className="fixed inset-0 z-[100] hidden" id="negotiation-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="document.getElementById('negotiation-modal').classList.add('hidden')"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl transform transition-all">
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-bold font-geist text-white flex items-center gap-2">
<svg className="lucide lucide-handshake text-amber-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
<path d="m9 11 3 3L22 4"></path>
<path d="m22 4-4 11a12 12 0 0 1-12 12 12.3 12.3 0 0 1-5.9-1.4"></path>
<path d="m6.5 12.5 5 5"></path>
<path d="m4.8 14.1 2.9-2.9c.4-.4.4-1 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0l-2.9 2.9a1 1 0 0 0 0 1.4l1.6 1.6c.4.4 1 .4 1.4 0Z"></path>
</svg>
            Espace de Négociation
          </h3>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="document.getElementById('negotiation-modal').classList.add('hidden')">
<svg className="lucide lucide-x" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4 mb-6">
<div className="flex gap-3">
<svg className="lucide lucide-info text-amber-500 shrink-0 mt-0.5" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 16v-4"></path>
<path d="M12 8h.01"></path>
</svg>
<div className="text-sm text-neutral-300">
<p className="font-bold text-amber-500 mb-1">
                Commission Association
              </p>
<p>
                En concluant un accord via cette plateforme, le technicien
                s'engage à reverser une commission forfaitaire de
                <span className="text-white font-bold">10.000 FCFA</span>
                au RETECHCI.
              </p>
</div>
</div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Proposition envoyée au technicien !'); document.getElementById('negotiation-modal').classList.add('hidden');">
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
              Objet de la mission
            </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Ex: Chef Opérateur pour Court Métrage" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
              Budget proposé (FCFA)
            </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors" placeholder="Ex: 150000" required="" type="number"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-bold text-neutral-500 uppercase">
              Message
            </label>
<textarea className="w-full bg-neutral-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-red-500 outline-none transition-colors resize-none" placeholder="Détails de la mission, dates, matériel requis..." required="" rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
              Envoyer la proposition
              <svg className="lucide lucide-send" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
<div className="fixed bottom-6 right-6 z-[100] transition-all duration-700 ease-out pointer-events-none translate-y-48 opacity-0" id="birthday-toast">
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] w-[340px] md:w-[400px] aspect-[4/5] rounded-[2.5rem] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)] border border-white/20 overflow-hidden group pointer-events-auto bg-neutral-900 transition-all duration-500">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39eadd5d-c66a-494a-aafe-ab7c48b12606_320w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent"></div>
</div>

<div className="z-10 flex flex-col h-full pt-8 pr-8 pb-8 pl-8 relative justify-between" style={{animation: 'zoomIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) backwards'}}>
<style>
            @keyframes zoomIn {
              from { opacity: 0; transform: scale(0.85) translateY(10px); filter: blur(4px); }
              to { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
            }
          </style>

<div className="flex justify-between items-start">
<div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg animate-[bounce_3s_infinite]">
<span className="text-2xl">🎂</span>
</div>
<button className="p-2.5 rounded-full bg-black/20 backdrop-blur-md text-white/70 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all border border-white/10 group/close" onclick="const toast = document.getElementById('birthday-toast'); toast.classList.add('opacity-0', 'scale-90', 'pointer-events-none', 'blur-sm');">
<svg className="group-hover/close:rotate-90 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
</svg>
              Joyeux Anniversaire
            </div>
<h2 className="text-4xl font-bold text-white mb-2 font-geist leading-tight">
              Marc Zadi
            </h2>
<p className="text-neutral-300 text-lg mb-8 leading-relaxed">
              Célèbre ses
              <span className="text-white font-bold border-b border-red-500">
                34 ans
              </span>
              aujourd'hui !
            </p>
<button className="w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)] hover:shadow-[0_0_50px_-5px_rgba(220,38,38,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2.5 uppercase tracking-wide text-sm">
<span>Envoyer un cadeau</span>
<svg className="lucide lucide-gift" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="4" rx="1" width="18" x="3" y="8"></rect>
<path d="M12 8v13"></path>
<path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
</svg>
</button>
</div>
</div>

<div className="absolute bottom-0 left-0 h-1 w-full bg-white/10 z-20">
<div className="h-full bg-red-600 w-full animate-[width_10s_linear]" id="birthday-progress"></div>
</div>
</div>
</div>


<div className="fixed inset-0 z-[100] hidden" id="modal-transaction">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="document.getElementById('modal-transaction').classList.add('hidden')"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-2xl">
<h3 className="text-xl font-bold text-white mb-6">Nouvelle Transaction</h3>
<div className="space-y-4">
<div>
<label className="text-xs font-bold text-neutral-500 uppercase">
              Libellé
            </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-amber-500" id="trx-label" type="text"/>
</div>
<div>
<label className="text-xs font-bold text-neutral-500 uppercase">
              Montant (FCFA)
            </label>
<input className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-amber-500" id="trx-amount" type="number"/>
</div>
<div>
<label className="text-xs font-bold text-neutral-500 uppercase">
              Type
            </label>
<select className="w-full bg-neutral-950 border border-white/10 rounded px-3 py-2 text-white outline-none focus:border-amber-500" id="trx-type">
<option value="in">Entrée (Crédit)</option>
<option value="out">Sortie (Débit)</option>
</select>
</div>
<button className="w-full py-3 bg-amber-500 text-black font-bold rounded hover:bg-amber-400 mt-2" onclick="window.backend.addTransaction()">
            Enregistrer
          </button>
</div>
</div>
</div>


    </>
  );
}
