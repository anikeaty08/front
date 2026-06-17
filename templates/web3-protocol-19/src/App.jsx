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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// Data
const ingredientData = {
  base: [
    {name:'Ethereum L1', icon:'solar:server-minimalistic-linear', cal:45000, pro:100, grams:150},
    {name:'Solana', icon:'solar:flash-linear', cal:5000, pro:80, grams:130},
    {name:'Polygon POS', icon:'solar:layers-minimalistic-linear', cal:12000, pro:90, grams:160},
    {name:'Arbitrum', icon:'solar:rocket-linear', cal:15000, pro:95, grams:180}
  ],
  protein: [
    {name:'ERC20 Token', icon:'solar:wallet-linear', cal:30000, pro:150, grams:120},
    {name:'ERC721 NFT', icon:'solar:gallery-minimalistic-linear', cal:40000, pro:200, grams:130},
    {name:'AMM Dex', icon:'solar:refresh-circle-linear', cal:80000, pro:400, grams:150},
    {name:'Staking Vault', icon:'solar:safe-square-linear', cal:60000, pro:250, grams:50}
  ],
  vegetables: [
    {name:'IPFS', icon:'solar:cloud-linear', cal:5000, pro:20, grams:50},
    {name:'Arweave', icon:'solar:database-linear', cal:8000, pro:30, grams:80},
    {name:'Filecoin', icon:'solar:folder-with-files-linear', cal:7000, pro:25, grams:40},
    {name:'Ceramic', icon:'solar:global-linear', cal:6000, pro:35, grams:70}
  ],
  toppings: [
    {name:'Chainlink Price', icon:'solar:link-minimalistic-linear', cal:15000, pro:40, grams:8},
    {name:'Pyth Network', icon:'solar:chart-square-linear', cal:12000, pro:30, grams:20},
    {name:'Tellor Oracle', icon:'solar:document-text-linear', cal:10000, pro:25, grams:5}
  ],
  sauces: [
    {name:'ENS Domains', icon:'solar:text-square-linear', cal:20000, pro:50, grams:15},
    {name:'Lens Protocol', icon:'solar:users-group-rounded-linear', cal:25000, pro:60, grams:20},
    {name:'Worldcoin ID', icon:'solar:eye-linear', cal:30000, pro:80, grams:15}
  ],
  cooking: [
    {name:'Multisig Safe', icon:'solar:shield-check-linear', cal:50000, pro:120, grams:0},
    {name:'Timelock', icon:'solar:history-linear', cal:20000, pro:60, grams:0},
    {name:'ZK Rollup', icon:'solar:ghost-linear', cal:100000, pro:500, grams:0}
  ]
};

const categoryMeta = {
  base: { icon:'solar:server-minimalistic-linear', label:'Network', desc:'Foundation of your dApp' },
  protein: { icon:'solar:code-square-linear', label:'Core Logic', desc:'Your main smart contracts' },
  vegetables: { icon:'solar:database-linear', label:'Storage', desc:'Decentralized data' },
  toppings: { icon:'solar:link-minimalistic-linear', label:'Oracles', desc:'Off-chain data feeds' },
  sauces: { icon:'solar:users-group-rounded-linear', label:'Identity', desc:'Auth & user profiles' },
  cooking: { icon:'solar:shield-check-linear', label:'Security', desc:'Access & validation' }
};

// State
let activeCategory = 'base';
let selected = { base:[], protein:[], vegetables:[], toppings:[], sauces:[], cooking:[] };
let viewMode = 'grid';

// Navigation & Scrolling
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (window.scrollY > 50) {
    nav.classList.add('bg-[#0e0e0e]/80', 'backdrop-blur-md', 'border-white/5');
    nav.classList.remove('border-transparent');
  } else {
    nav.classList.remove('bg-[#0e0e0e]/80', 'backdrop-blur-md', 'border-white/5');
    nav.classList.add('border-transparent');
  }
});

function scrollToBuilder() {
  document.getElementById('builder').scrollIntoView({ behavior: 'smooth' });
}

function enterKitchenTransition() {
  scrollToBuilder();
}

function handleRoom(el, room) {
  const cards = document.getElementById('roomCards').children;
  for(let i=0; i<cards.length; i++) {
    cards[i].classList.remove('border-[#d4a373]', 'bg-[#d4a373]/10');
    cards[i].classList.add('border-white/5', 'bg-[#111111]/80');
    const icon = cards[i].querySelector('iconify-icon');
    const text1 = cards[i].querySelector('.text-xs');
    if(icon) { icon.classList.remove('text-[#d4a373]'); icon.classList.add('text-[#a8a29e]'); }
    if(text1) { text1.classList.remove('text-[#f0ece4]'); text1.classList.add('text-[#a8a29e]'); }
  }
  
  el.classList.remove('border-white/5', 'bg-[#111111]/80');
  el.classList.add('border-[#d4a373]', 'bg-[#d4a373]/10');
  const activeIcon = el.querySelector('iconify-icon');
  const activeText = el.querySelector('.text-xs');
  if(activeIcon) { activeIcon.classList.remove('text-[#a8a29e]'); activeIcon.classList.add('text-[#d4a373]'); }
  if(activeText) { activeText.classList.remove('text-[#a8a29e]'); activeText.classList.add('text-[#f0ece4]'); }

  const map = { mempool: 'vegetables', consensus: 'cooking', oracles: 'sauces' };
  if(map[room]) {
    activeCategory = map[room];
    initBuilder();
    scrollToBuilder();
  } else if (room === 'lobby') {
    showToast('Connection established! Explore layers to begin.');
  }
}

// Toast
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.remove('opacity-0', 'translate-y-4');
  t.classList.add('opacity-100', 'translate-y-0');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    t.classList.remove('opacity-100', 'translate-y-0');
    t.classList.add('opacity-0', 'translate-y-4');
  }, 3000);
}

// Builder Logic
function initBuilder() {
  renderCategories();
  renderIngredients();
  updateProgress();
}

function renderCategories() {
  const container = document.getElementById('categories');
  let html = '';
  
  Object.keys(categoryMeta).forEach(key => {
    const meta = categoryMeta[key];
    const items = selected[key] || [];
    const isActive = key === activeCategory;
    
    const baseCls = "flex items-center gap-3 p-2.5 rounded-xl text-xs font-medium text-left transition-all relative overflow-hidden group shrink-0 lg:shrink whitespace-nowrap lg:whitespace-normal ";
    const actCls = isActive ? "bg-[#d4a373]/10 text-[#d4a373] border border-[#d4a373]/20" : "text-[#78716c] hover:bg-white/5 hover:text-[#a8a29e] border border-transparent";
    const accentLine = isActive ? '<div class="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-1/2 bg-[#d4a373] rounded-r"></div>' : '';
    const badgeCls = isActive ? "bg-[#d4a373]/20 text-[#d4a373]" : "bg-[#0e0e0e] text-[#78716c]";
    
    html += `
      <button class="${baseCls} ${actCls}" onclick="activeCategory='${key}'; initBuilder();">
        ${accentLine}
        <iconify-icon icon="${meta.icon}" class="text-lg group-hover:scale-110 transition-transform"></iconify-icon>
        <span class="flex-1">${meta.label}</span>
        <span class="text-[9px] py-0.5 px-2 rounded-full ${badgeCls}">${items.length > 0 ? items.length : ''}</span>
      </button>
    `;
  });
  
  container.innerHTML = html;
  
  document.getElementById('panelTitle').textContent = categoryMeta[activeCategory].label;
  document.getElementById('panelDesc').textContent = categoryMeta[activeCategory].desc;
}

function setViewMode(mode) {
  viewMode = mode;
  document.getElementById('viewGridBtn').className = `w-7 h-6 flex items-center justify-center rounded-md transition-colors ${mode === 'grid' ? 'bg-[#d4a373]/10 text-[#d4a373] border border-[#d4a373]/20' : 'text-[#78716c] hover:text-[#a8a29e] bg-transparent border border-transparent'}`;
  document.getElementById('viewListBtn').className = `w-7 h-6 flex items-center justify-center rounded-md transition-colors ${mode === 'list' ? 'bg-[#d4a373]/10 text-[#d4a373] border border-[#d4a373]/20' : 'text-[#78716c] hover:text-[#a8a29e] bg-transparent border border-transparent'}`;
  
  const grid = document.getElementById('ingredientsGrid');
  if(mode === 'list') {
    grid.className = 'grid grid-cols-1 gap-1.5 overflow-y-auto pr-1 pb-4 flex-1 content-start';
  } else {
    grid.className = 'grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2.5 overflow-y-auto pr-1 pb-4 flex-1 content-start';
  }
  renderIngredients();
}

function renderIngredients() {
  const grid = document.getElementById('ingredientsGrid');
  const items = ingredientData[activeCategory] || [];
  const selArr = selected[activeCategory] || [];
  
  let html = '';
  
  // None Card
  const isNoneSel = selArr.length === 0;
  if(viewMode === 'grid') {
    html += `
      <div class="relative flex flex-col items-center justify-center p-4 rounded-xl border border-dashed transition-all cursor-pointer select-none min-h-[110px] ${isNoneSel ? 'border-[#d4a373] bg-[#d4a373]/5' : 'border-white/10 hover:border-white/20 hover:bg-white/5'}" onclick="selectNone()">
        <iconify-icon icon="solar:close-circle-linear" class="text-2xl mb-2 opacity-50 ${isNoneSel ? 'text-[#d4a373]' : 'text-[#78716c]'}"></iconify-icon>
        <div class="text-xs font-medium text-[#78716c]">None</div>
      </div>
    `;
  }
  
  items.forEach(it => {
    const isSel = selArr.some(s => s.name === it.name);
    
    if (viewMode === 'grid') {
      const baseCls = "relative flex flex-col items-center justify-center text-center p-4 rounded-xl border cursor-pointer transition-all hover:-translate-y-0.5 select-none min-h-[110px] group ";
      const selCls = isSel ? "border-[#d4a373] bg-gradient-to-b from-[#d4a373]/10 to-transparent shadow-[0_4px_20px_rgba(212,163,115,0.1)]" : "border-white/5 bg-[#111111] hover:border-white/10 hover:shadow-lg";
      
      html += `
        <div class="${baseCls} ${selCls}" onclick="toggleIngredient('${it.name}')">
          <iconify-icon icon="${it.icon}" stroke-width="1.2" class="text-3xl mb-2.5 transition-transform group-hover:scale-110 ${isSel ? 'text-[#d4a373]' : 'text-[#a8a29e]'}"></iconify-icon>
          <div class="text-xs font-medium text-[#f0ece4] leading-tight">${it.name}</div>
          ${isSel ? `<div class="absolute top-2.5 right-2.5 w-4 h-4 bg-[#d4a373] rounded-full flex items-center justify-center text-[#0e0e0e]"><iconify-icon icon="solar:check-read-linear" class="text-[10px]"></iconify-icon></div>` : ''}
        </div>
      `;
    } else {
      const baseCls = "relative flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all select-none group ";
      const selCls = isSel ? "border-[#d4a373] bg-[#d4a373]/5" : "border-white/5 bg-[#111111] hover:border-white/10";
      
      html += `
        <div class="${baseCls} ${selCls}" onclick="toggleIngredient('${it.name}')">
          <iconify-icon icon="${it.icon}" stroke-width="1.5" class="text-xl ${isSel ? 'text-[#d4a373]' : 'text-[#78716c]'}"></iconify-icon>
          <div class="text-xs font-medium text-[#f0ece4] flex-1">${it.name}</div>
          ${isSel ? `<div class="w-4 h-4 bg-[#d4a373] rounded-full flex items-center justify-center text-[#0e0e0e]"><iconify-icon icon="solar:check-read-linear" class="text-[10px]"></iconify-icon></div>` : ''}
        </div>
      `;
    }
  });
  
  grid.innerHTML = html;
}

function selectNone() {
  selected[activeCategory] = [];
  initBuilder();
  renderPreview();
}

function toggleIngredient(name) {
  const catItems = ingredientData[activeCategory];
  const item = catItems.find(i => i.name === name);
  if(!item) return;
  
  const existsIdx = selected[activeCategory].findIndex(i => i.name === name);
  
  if (existsIdx > -1) {
    selected[activeCategory].splice(existsIdx, 1);
  } else {
    selected[activeCategory].push({...item, category: activeCategory});
  }
  
  initBuilder();
  renderPreview();
}

function getAllSelected() {
  let all = [];
  Object.keys(selected).forEach(key => {
    all = all.concat(selected[key]);
  });
  return all;
}

function renderPreview() {
  const all = getAllSelected();
  const list = document.getElementById('selectedList');
  document.getElementById('selCount').textContent = `${all.length} module${all.length !== 1 ? 's' : ''}`;
  
  if(all.length === 0) {
    list.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full text-[#78716c] text-xs font-light py-8">
        <iconify-icon icon="solar:layers-minimalistic-linear" class="text-3xl mb-3 opacity-50"></iconify-icon>
        Select primitives to start
      </div>
    `;
    updateSummary(0, 0);
    document.getElementById('generateBtn').disabled = true;
    return;
  }
  
  let html = '';
  let totalCal = 0;
  let totalPro = 0;
  
  all.forEach(it => {
    totalCal += it.cal;
    totalPro += it.pro;
    
    html += `
      <div class="grid grid-cols-[auto_1fr_auto] items-center gap-x-3 p-2 bg-[#111111] border border-white/5 rounded-xl group relative overflow-hidden transition-all hover:border-white/10 hover:bg-[#1a1a1a]">
        <iconify-icon icon="${it.icon}" class="text-lg text-[#a8a29e]"></iconify-icon>
        <div class="flex flex-col min-w-0">
          <span class="text-xs font-medium text-[#f0ece4] truncate">${it.name}</span>
          <span class="text-[9px] uppercase tracking-widest text-[#78716c]">${it.category}</span>
        </div>
        <button class="w-6 h-6 rounded-md bg-red-500/10 text-red-400 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500/20" onclick="removeIngredient('${it.category}', '${it.name}')">
          <iconify-icon icon="solar:trash-bin-trash-linear" class="text-xs"></iconify-icon>
        </button>
      </div>
    `;
  });
  
  list.innerHTML = html;
  updateSummary(totalCal, totalPro);
  
  const hasCooking = selected.cooking && selected.cooking.length > 0;
  document.getElementById('generateBtn').disabled = all.length < 2 || !hasCooking;
}

function removeIngredient(cat, name) {
  selected[cat] = selected[cat].filter(i => i.name !== name);
  initBuilder();
  renderPreview();
}

function updateSummary(cal, pro) {
  document.getElementById('totalCal').textContent = cal.toLocaleString();
  document.getElementById('totalPro').textContent = pro;
}

function updateProgress() {
  const stepsEl = document.getElementById('progressSteps');
  const fillEl = document.getElementById('progressFill');
  const cats = Object.keys(categoryMeta);
  
  let completed = 0;
  let html = '';
  
  cats.forEach((cat, idx) => {
    const hasItems = selected[cat] && selected[cat].length > 0;
    if(hasItems) completed++;
    
    const isCurrent = cat === activeCategory;
    let cls = "text-[10px] font-medium uppercase tracking-widest transition-colors cursor-pointer ";
    
    if(hasItems) cls += "text-[#d4a373]";
    else if (isCurrent) cls += "text-[#f0ece4]";
    else cls += "text-[#78716c]";
    
    html += `<div class="${cls}" onclick="activeCategory='${cat}'; initBuilder();">${categoryMeta[cat].label.substring(0,3)}</div>`;
  });
  
  stepsEl.innerHTML = html;
  fillEl.style.width = `${(completed / cats.length) * 100}%`;
}

function surpriseMe() {
  selected = { base:[], protein:[], vegetables:[], toppings:[], sauces:[], cooking:[] };
  
  Object.keys(ingredientData).forEach(cat => {
    const pool = ingredientData[cat];
    if(pool.length > 0) {
      const randomIdx = Math.floor(Math.random() * pool.length);
      selected[cat].push({...pool[randomIdx], category: cat});
    }
  });
  
  initBuilder();
  renderPreview();
  showToast('🎲 Random stack generated!');
}

function generateRecipe() {
  const all = getAllSelected();
  if(all.length < 2) return;
  
  const name = `Custom ${selected.protein.length ? selected.protein[0].name : 'Web3'} Protocol`;
  const time = "12 secs";
  let totalCal = 0;
  all.forEach(i => totalCal += i.cal);
  
  let ingsHtml = '';
  all.forEach(i => {
    ingsHtml += `<span class="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium text-[#a8a29e]"><iconify-icon icon="${i.icon}"></iconify-icon> ${i.name}</span>`;
  });
  
  const modal = document.getElementById('recipeModal');
  modal.innerHTML = `
    <button class="absolute top-6 right-6 text-[#78716c] hover:text-[#f0ece4] transition-colors" onclick="closeRecipe()">
      <iconify-icon icon="solar:close-circle-linear" class="text-2xl"></iconify-icon>
    </button>
    <div class="text-xs font-medium tracking-widest uppercase text-[#d4a373] mb-2">Generated Smart Contract</div>
    <h2 class="font-['Playfair_Display',serif] text-3xl font-medium mb-6">${name}</h2>
    
    <div class="flex gap-4 mb-8">
      <div class="text-xs text-[#a8a29e]"><strong class="text-[#d4a373] font-medium">⏱ Block Time:</strong> ${time}</div>
      <div class="text-xs text-[#a8a29e]"><strong class="text-[#d4a373] font-medium">⛽ Gas Est:</strong> ${totalCal.toLocaleString()}</div>
    </div>
    
    <h3 class="text-sm font-medium mb-3">Modules</h3>
    <div class="flex flex-wrap gap-2 mb-8">
      ${ingsHtml}
    </div>
    
    <h3 class="text-sm font-medium mb-3">Deployment Steps</h3>
    <div class="flex flex-col gap-4 text-sm text-[#a8a29e] font-light leading-relaxed mb-8">
      <div class="flex gap-3"><span class="text-[#d4a373] font-medium">1.</span> Initialize base network connection and deploy core logic.</div>
      <div class="flex gap-3"><span class="text-[#d4a373] font-medium">2.</span> Integrate storage and oracle feeds securely.</div>
      <div class="flex gap-3"><span class="text-[#d4a373] font-medium">3.</span> Run test suite, compile, and deploy to mainnet.</div>
    </div>
    
    <div class="flex justify-end gap-3 pt-6 border-t border-white/5">
      <button class="text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full border border-white/10 text-[#a8a29e] hover:border-[#d4a373] hover:text-[#d4a373] transition-all" onclick="closeRecipe()">Close</button>
      <button class="text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full bg-[#d4a373] text-[#0e0e0e] hover:bg-[#e8c9a0] transition-all" onclick="saveRecipe('${name}'); closeRecipe();">Sign & Deploy</button>
    </div>
  `;
  
  const overlay = document.getElementById('recipeOverlay');
  overlay.classList.remove('hidden');
  // Trigger reflow
  void overlay.offsetWidth;
  overlay.classList.remove('opacity-0');
  overlay.classList.add('opacity-100');
  modal.classList.remove('scale-95');
  modal.classList.add('scale-100');
}

function closeRecipe() {
  const overlay = document.getElementById('recipeOverlay');
  const modal = document.getElementById('recipeModal');
  
  overlay.classList.remove('opacity-100');
  overlay.classList.add('opacity-0');
  modal.classList.remove('scale-100');
  modal.classList.add('scale-95');
  
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300);
}

function saveRecipe(name) {
  showToast(`📝 "${name}" signed and deployed!`);
}

function openMyRecipes() {
  showToast('Wallet connection feature coming soon.');
}

// Initial Render
initBuilder();

// Minimal Three.js Setup (Visual only)
function initHeroScene() {
  if (typeof THREE === 'undefined') return;
  const wrap = document.getElementById('heroCanvasWrap');
  if(!wrap) return;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(wrap.offsetWidth, wrap.offsetHeight);
  wrap.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, wrap.offsetWidth/wrap.offsetHeight, 1, 100);
  camera.position.set(0, 5, 15);
  
  const geo = new THREE.TorusGeometry(3, 1, 16, 100);
  const mat = new THREE.MeshBasicMaterial({ color: 0xd4a373, wireframe: true, transparent: true, opacity: 0.15 });
  const mesh = new THREE.Mesh(geo, mat);
  mesh.rotation.x = Math.PI/2;
  scene.add(mesh);
  
  function anim() {
    requestAnimationFrame(anim);
    mesh.rotation.z += 0.002;
    renderer.render(scene, camera);
  }
  anim();
}

// Load ThreeJS dynamically
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
script.onload = () => {
  initHeroScene();
};
document.head.appendChild(script);


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
      
<nav className="fixed top-0 left-0 w-full z-[1000] px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 border-b border-transparent" id="nav">
<div className="flex items-center gap-8">
<a className="font-['Playfair_Display',serif] text-xl tracking-tight font-medium text-[#f0ece4] flex items-center gap-2 hover:opacity-80 transition-opacity" href="#" onclick="event.preventDefault();window.scrollTo({top:0,behavior:'smooth'});">
<iconify-icon className="text-2xl text-[#d4a373]" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
      NEXUS
    </a>
<div className="hidden md:flex gap-7">
<a className="text-xs font-normal tracking-widest uppercase text-[#a8a29e] hover:text-[#d4a373] transition-colors" href="#discover" onclick="event.preventDefault();document.getElementById('discover').scrollIntoView({behavior:'smooth'})">Ecosystem</a>
<a className="text-xs font-normal tracking-widest uppercase text-[#a8a29e] hover:text-[#d4a373] transition-colors" href="#builder" onclick="event.preventDefault();document.getElementById('builder').scrollIntoView({behavior:'smooth'})">Composer</a>
<a className="text-xs font-normal tracking-widest uppercase text-[#a8a29e] hover:text-[#d4a373] transition-colors" href="#featured" onclick="event.preventDefault();document.getElementById('featured').scrollIntoView({behavior:'smooth'})">Contracts</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-full border border-white/10 text-[#a8a29e] hover:border-[#d4a373] hover:text-[#d4a373] transition-all hidden md:block" onclick="openMyRecipes()">My Wallet</button>
<button className="text-xs font-medium tracking-widest uppercase px-5 py-2 rounded-full bg-[#d4a373] text-[#0e0e0e] hover:bg-[#e8c9a0] hover:-translate-y-[1px] transition-all" onclick="scrollToBuilder()">Launch Sandbox</button>
</div>
</nav>
<section className="relative pt-40 pb-24 px-6 md:px-12 flex items-center justify-center min-h-[85vh] overflow-hidden" id="home">
<div className="absolute inset-0 z-0" id="heroCanvasWrap"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0e0e0e]/50 via-[#0e0e0e]/20 to-[#0e0e0e] pointer-events-none"></div>
<div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-[#d4a373] bg-[#d4a373]/5 border border-[#d4a373]/20 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 bg-[#d4a373] rounded-full animate-pulse"></span> Mainnet Live — Epoch 2026
    </div>
<h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-6 max-w-4xl">
      Explore. Compose.<br/><em className="not-italic text-[#d4a373]">Mint the Future.</em>
</h1>
<p className="text-sm md:text-base text-[#a8a29e] max-w-xl leading-relaxed mb-10 font-light">
      NEXUS transforms smart contract creation into an interactive spatial experience. Explore protocols, compose primitives intuitively, and generate deploy-ready code instantly.
    </p>
<div className="flex flex-wrap justify-center gap-4 mb-12">
<button className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-full bg-[#d4a373] text-[#0e0e0e] hover:bg-[#e8c9a0] hover:-translate-y-1 shadow-[0_0_30px_rgba(212,163,115,0.2)] transition-all" onclick="enterKitchenTransition()">
<iconify-icon className="text-lg" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
        Enter the Sandbox
      </button>
<a className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-8 py-3.5 rounded-full bg-transparent border border-white/10 text-[#f0ece4] hover:border-[#d4a373] hover:text-[#d4a373] transition-all" href="#how" onclick="event.preventDefault();document.getElementById('how').scrollIntoView({behavior:'smooth'})">
        See How It Works
      </a>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-white/5" id="heroStats">
<div className="text-left">
<div className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#d4a373]">2.4k+</div>
<div className="text-xs text-[#78716c] uppercase tracking-widest mt-1">Contracts Deployed</div>
</div>
<div className="text-left">
<div className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#d4a373]">87</div>
<div className="text-xs text-[#78716c] uppercase tracking-widest mt-1">Primitives</div>
</div>
<div className="text-left">
<div className="font-['Playfair_Display',serif] text-3xl tracking-tight font-medium text-[#d4a373]">12.0k+</div>
<div className="text-xs text-[#78716c] uppercase tracking-widest mt-1">Active Nodes</div>
</div>
</div>
</div>
</section>
<div className="w-full overflow-hidden border-y border-white/5 py-4 bg-[#111111]">
<div className="flex gap-16 whitespace-nowrap opacity-50" style={{animation: 'scrollMarquee 30s linear infinite'}}>
<span className="font-['Playfair_Display',serif] text-lg italic tracking-wide text-[#a8a29e] flex items-center gap-8">
      Explore Spatially <span className="text-[8px] text-[#d4a373]">◆</span> Compose Intuitively <span className="text-[8px] text-[#d4a373]">◆</span> Deploy Instantly <span className="text-[8px] text-[#d4a373]">◆</span> Not a Framework <span className="text-[8px] text-[#d4a373]">◆</span> An Ecosystem <span className="text-[8px] text-[#d4a373]">◆</span> Protocol Grade <span className="text-[8px] text-[#d4a373]">◆</span> Explore Spatially <span className="text-[8px] text-[#d4a373]">◆</span> Compose Intuitively <span className="text-[8px] text-[#d4a373]">◆</span> Deploy Instantly <span className="text-[8px] text-[#d4a373]">◆</span> Not a Framework
    </span>
</div>
</div>
<section className="relative py-24 px-6 md:px-12 min-h-[500px] flex items-end overflow-hidden" id="discover">
<div className="absolute inset-0 z-0" id="discoverCanvasWrap"></div>
<div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/80 to-[#0e0e0e]/20 pointer-events-none"></div>
<div className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row items-end justify-between gap-12">
<div className="max-w-md">
<div className="text-xs font-medium tracking-widest uppercase text-[#d4a373] mb-3">Explore the Architecture</div>
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl tracking-tight font-semibold leading-tight mb-4">Navigate the Network.<br/>Shape Your Protocol.</h2>
<p className="text-sm text-[#a8a29e] leading-relaxed font-light mb-8">Each layer serves a purpose. Explore the ecosystem, pick your primitives, and compile something extraordinary — all in one seamless flow.</p>
<button className="text-xs font-medium tracking-widest uppercase px-6 py-2.5 rounded-full bg-[#d4a373] text-[#0e0e0e] hover:bg-[#e8c9a0] transition-all" onclick="scrollToBuilder()">Enter the Sandbox →</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full lg:w-auto" id="roomCards">
<div className="p-5 rounded-xl border border-[#d4a373] bg-[#d4a373]/10 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1" onclick="handleRoom(this, 'lobby')">
<iconify-icon className="text-2xl text-[#d4a373] mb-2" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#f0ece4]">Lobby</div>
<div className="text-[10px] text-[#78716c] font-light">Welcome &amp; onboarding</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111111]/80 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20" onclick="handleRoom(this, 'mempool')">
<iconify-icon className="text-2xl text-[#a8a29e] mb-2" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#a8a29e]">Mempool</div>
<div className="text-[10px] text-[#78716c] font-light">Browse raw primitives</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111111]/80 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20" onclick="handleRoom(this, 'consensus')">
<iconify-icon className="text-2xl text-[#a8a29e] mb-2" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#a8a29e]">Consensus</div>
<div className="text-[10px] text-[#78716c] font-light">Verification methods</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111111]/80 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20" onclick="handleRoom(this, 'oracles')">
<iconify-icon className="text-2xl text-[#a8a29e] mb-2" icon="solar:link-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#a8a29e]">Oracles</div>
<div className="text-[10px] text-[#78716c] font-light">Custom data feeds</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111111]/80 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20" onclick="handleRoom(this, 'testnet')">
<iconify-icon className="text-2xl text-[#a8a29e] mb-2" icon="solar:test-tube-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#a8a29e]">Testnet</div>
<div className="text-[10px] text-[#78716c] font-light">Preview your creation</div>
</div>
<div className="p-5 rounded-xl border border-white/5 bg-[#111111]/80 backdrop-blur-md cursor-pointer transition-all hover:-translate-y-1 hover:border-white/20" onclick="handleRoom(this, 'archive')">
<iconify-icon className="text-2xl text-[#a8a29e] mb-2" icon="solar:archive-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-xs font-medium mb-1 text-[#a8a29e]">Mainnet</div>
<div className="text-[10px] text-[#78716c] font-light">Deployed contracts</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 bg-[#111111] border-y border-white/5" id="builder">
<div className="max-w-[1400px] mx-auto">
<div className="text-center max-w-2xl mx-auto mb-12">
<div className="text-xs font-medium tracking-widest uppercase text-[#d4a373] mb-3">The Sandbox</div>
<h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl tracking-tight font-semibold mb-4">Deploy Something Powerful</h2>
<p className="text-sm text-[#a8a29e] font-light leading-relaxed">Instead of static repos, explore protocols <em className="not-italic text-[#d4a373] font-normal">spatially</em>, compose dApps <em className="not-italic text-[#d4a373] font-normal">intuitively</em>, and generate production-ready smart contracts <em className="not-italic text-[#d4a373] font-normal">instantly.</em></p>
</div>

<div className="mb-6 px-2">
<div className="h-[3px] bg-[#1e1e1e] rounded-full mb-4 relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#d4a373] to-[#e8c9a0] rounded-full transition-all duration-500 w-0" id="progressFill"></div>
</div>
<div className="flex justify-between items-center" id="progressSteps">

</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[220px_1fr_320px] gap-4 items-start">

<div className="flex flex-row lg:flex-col gap-1.5 bg-[#161616] rounded-2xl border border-white/5 p-3 overflow-x-auto lg:overflow-visible" id="categories">

</div>

<div className="relative flex flex-col bg-[#161616] rounded-2xl border border-white/5 p-4 min-h-[500px]">
<div className="flex items-start justify-between mb-4 border-b border-white/5 pb-4 shrink-0">
<div>
<h3 className="text-sm font-medium text-[#f0ece4] mb-1" id="panelTitle">Network</h3>
<p className="text-[10px] text-[#78716c] font-light" id="panelDesc">Foundation of your dApp</p>
</div>
<div className="flex items-center gap-1 bg-[#0e0e0e] border border-white/5 rounded-lg p-1">
<button className="w-7 h-6 flex items-center justify-center rounded-md bg-[#d4a373]/10 text-[#d4a373] border border-[#d4a373]/20" id="viewGridBtn" onclick="setViewMode('grid')">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
</button>
<button className="w-7 h-6 flex items-center justify-center rounded-md text-[#78716c] hover:text-[#a8a29e] transition-colors" id="viewListBtn" onclick="setViewMode('list')">
<iconify-icon icon="solar:list-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))] gap-2.5 overflow-y-auto pr-1 pb-4 flex-1 content-start" id="ingredientsGrid" style={{scrollbarWidth: 'thin', scrollbarColor: '#d4a37320 transparent'}}>

</div>
</div>

<div className="bg-[#161616] rounded-2xl border border-white/5 p-5 flex flex-col sticky top-24 max-h-[calc(100vh-120px)]">
<div className="flex items-center justify-between pb-3 border-b border-white/5 mb-3 shrink-0">
<div className="font-['Playfair_Display',serif] text-base font-medium">Your Stack</div>
<div className="text-[10px] font-medium bg-[#1e1e1e] text-[#78716c] px-2.5 py-1 rounded-full" id="selCount">0 modules</div>
</div>
<div className="flex-1 overflow-y-auto flex flex-col gap-1.5 min-h-[150px] mb-4 pr-1" id="selectedList" style={{scrollbarWidth: 'thin', scrollbarColor: '#ffffff10 transparent'}}>
<div className="flex flex-col items-center justify-center h-full text-[#78716c] text-xs font-light py-8">
<iconify-icon className="text-3xl mb-3 opacity-50" icon="solar:layers-minimalistic-linear"></iconify-icon>
            Select primitives to start
          </div>
</div>
<div className="shrink-0 flex flex-col gap-2 border-t border-white/5 pt-4">
<div className="grid grid-cols-2 gap-2 mb-2">
<div className="bg-[#1e1e1e] rounded-xl p-3 text-center border border-white/5">
<div className="font-['Playfair_Display',serif] text-lg font-medium text-[#d4a373]" id="totalCal">0</div>
<div className="text-[9px] uppercase tracking-widest text-[#78716c] mt-1">Gas Est.</div>
</div>
<div className="bg-[#1e1e1e] rounded-xl p-3 text-center border border-white/5">
<div className="font-['Playfair_Display',serif] text-lg font-medium text-[#d4a373]" id="totalPro">0</div>
<div className="text-[9px] uppercase tracking-widest text-[#78716c] mt-1">Lines</div>
</div>
</div>
<button className="w-full py-3 rounded-xl bg-[#d4a373] text-[#0e0e0e] text-xs font-medium uppercase tracking-widest transition-all disabled:opacity-30 disabled:bg-[#1e1e1e] disabled:text-[#78716c] hover:bg-[#e8c9a0] hover:-translate-y-0.5" disabled="" id="generateBtn" onclick="generateRecipe()">
            Compile Contract
          </button>
<button className="w-full py-2.5 rounded-xl bg-transparent border border-white/10 text-[#a8a29e] text-xs font-medium uppercase tracking-widest transition-all hover:border-[#d4a373] hover:text-[#d4a373] flex items-center justify-center gap-2" id="surpriseBtn" onclick="surpriseMe()">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon> Randomize
          </button>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 md:px-12 bg-[#0e0e0e]" id="how">
<div className="max-w-[1100px] mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-medium tracking-widest uppercase text-[#d4a373] mb-3">How It Works</div>
<h2 className="font-['Playfair_Display',serif] text-3xl tracking-tight font-semibold">Three Phases. One Protocol.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 text-center relative overflow-hidden transition-all hover:-translate-y-1 hover:border-white/10 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#d4a373] rounded-b-md"></div>
<div className="font-['Playfair_Display',serif] text-5xl font-semibold text-white/5 mb-4 group-hover:text-white/10 transition-colors">01</div>
<iconify-icon className="text-4xl text-[#d4a373] mb-4" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium mb-3">Explore Spatially</h3>
<p className="text-xs text-[#a8a29e] font-light leading-relaxed">Browse primitives the way you'd browse a block explorer — visually, spatially, by layer. No static repos.</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 text-center relative overflow-hidden transition-all hover:-translate-y-1 hover:border-white/10 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#d4a373] rounded-b-md"></div>
<div className="font-['Playfair_Display',serif] text-5xl font-semibold text-white/5 mb-4 group-hover:text-white/10 transition-colors">02</div>
<iconify-icon className="text-4xl text-[#d4a373] mb-4" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium mb-3">Compose Intuitively</h3>
<p className="text-xs text-[#a8a29e] font-light leading-relaxed">Select modules to compose your protocol in real time. Watch it come together with live gas estimations.</p>
</div>
<div className="bg-[#111111] border border-white/5 rounded-2xl p-8 text-center relative overflow-hidden transition-all hover:-translate-y-1 hover:border-white/10 group">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#d4a373] rounded-b-md"></div>
<div className="font-['Playfair_Display',serif] text-5xl font-semibold text-white/5 mb-4 group-hover:text-white/10 transition-colors">03</div>
<iconify-icon className="text-4xl text-[#d4a373] mb-4" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-sm font-medium mb-3">Deploy Instantly</h3>
<p className="text-xs text-[#a8a29e] font-light leading-relaxed">One click produces a complete protocol-grade smart contract with step-by-step deployment instructions.</p>
</div>
</div>
</div>
</section>
<footer className="bg-[#0e0e0e] border-t border-white/5 pt-16 pb-8 px-6 md:px-12">
<div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="font-['Playfair_Display',serif] text-xl tracking-tight font-medium text-[#f0ece4] flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-2xl text-[#d4a373]" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon> NEXUS
      </a>
<p className="text-xs text-[#78716c] font-light leading-relaxed max-w-xs">Transforming dApp creation into an interactive spatial experience.</p>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-[#a8a29e] mb-5">Product</h4>
<div className="flex flex-col gap-3">
<a className="text-xs text-[#78716c] hover:text-[#d4a373] transition-colors" href="#builder">Composer</a>
<a className="text-xs text-[#78716c] hover:text-[#d4a373] transition-colors" href="#featured">Contracts</a>
<a className="text-xs text-[#78716c] hover:text-[#d4a373] transition-colors" href="#how">How it Works</a>
</div>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-[#a8a29e] mb-5">Legal</h4>
<div className="flex flex-col gap-3">
<a className="text-xs text-[#78716c] hover:text-[#d4a373] transition-colors" href="#">Privacy</a>
<a className="text-xs text-[#78716c] hover:text-[#d4a373] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="max-w-[1200px] mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-[#78716c] font-light">
<div>© 2024 NEXUS Labs.</div>
<div>Crafted for the Web3 builder.</div>
</div>
</footer>

<div className="fixed inset-0 z-[2000] bg-[#0e0e0e]/80 backdrop-blur-sm hidden items-center justify-center p-4 opacity-0 transition-opacity duration-300" id="recipeOverlay">
<div className="bg-[#111111] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 relative scale-95 transition-transform duration-300 shadow-2xl" id="recipeModal">

</div>
</div>
<div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#1e1e1e] border border-white/10 text-[#f0ece4] px-6 py-3 rounded-xl text-xs font-medium z-[3000] flex items-center gap-3 shadow-2xl opacity-0 pointer-events-none transition-all duration-300 translate-y-4" id="toast"></div>
<style>
  /* Minimal custom styles for Webkit scrollbars and essential animations not easily handled inline */
  ::-webkit-scrollbar { width: 4px; height: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: rgba(212,163,115,0.4); }

  @keyframes scrollMarquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
</style>


    </>
  );
}
