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



// --- MOCKED BACKEND DATA ---
// Added videoUrl properties for previewing
const products = [
{
id: 1,
name: "Liquid Morph",
type: "fx",
software: "Stable Diffusion",
model: "SD 1.5",
platform: "TikTok",
tags: ["Transitions", "Abstract"],
price: 3.00,
originalPrice: 5.00,
color: "from-lime-900/40 to-black",
desc: "Complete JSON settings and prompt guide for liquid metal transitions.",
files: ["Workflow_v2.pdf", "Settings.json"],
difficulty: "Intermediate",
videoUrl: "https://videos.pexels.com/video-files/3163534/3163534-uhd_2560_1440_30fps.mp4"
},
{
id: 2,
name: "Cyberpunk City",
type: "fx",
software: "Runway",
model: "Gen-2",
platform: "YouTube Shorts",
tags: ["Scifi", "Neon"],
price: 3.00,
originalPrice: 5.00,
color: "from-purple-900/40 to-black",
desc: "Step-by-step PDF blueprint for neon environment consistency.",
files: ["Guide.pdf", "Palette.png"],
difficulty: "Beginner",
videoUrl: "https://videos.pexels.com/video-files/3121459/3121459-hd_1920_1080_25fps.mp4"
},
{
id: 3,
name: "Anime Transfer",
type: "fx",
software: "Kaiber",
model: "Kaiber AI",
platform: "TikTok",
tags: ["Anime", "Dance"],
price: 3.00,
originalPrice: 5.00,
color: "from-pink-900/40 to-black",
desc: "The exact settings used for viral dance videos. Includes flicker fix.",
files: ["Anime_Workflow.pdf", "Presets.json"],
difficulty: "Advanced",
videoUrl: "https://videos.pexels.com/video-files/5649175/5649175-hd_1920_1080_30fps.mp4"
},
{
id: 4,
name: "VHS Glitch Pack",
type: "fx",
software: "CapCut",
model: "N/A",
platform: "Instagram",
tags: ["Retro", "Overlay"],
price: 3.00,
originalPrice: 5.00,
color: "from-indigo-900/40 to-black",
desc: "Layering guide + raw assets. Works in Premiere/CapCut.",
files: ["Glitch_Map.pdf", "Assets.zip"],
difficulty: "Beginner",
videoUrl: "https://videos.pexels.com/video-files/6938928/6938928-hd_1920_1080_25fps.mp4"
},
{
id: 5,
name: "Abstract Fluids",
type: "fx",
software: "Stable Diffusion",
model: "SDXL",
platform: "YouTube Shorts",
tags: ["Backgrounds", "Loop"],
price: 3.00,
originalPrice: 5.00,
color: "from-amber-900/40 to-black",
desc: "Looping background parameters and seed database.",
files: ["Loops.pdf", "Seeds.csv"],
difficulty: "Intermediate",
videoUrl: "https://videos.pexels.com/video-files/5046206/5046206-hd_1920_1080_24fps.mp4"
},
{
id: 6,
name: "Claymation",
type: "fx",
software: "Runway",
model: "Gen-1",
platform: "Instagram",
tags: ["Stop Motion", "Texture"],
price: 3.00,
originalPrice: 5.00,
color: "from-emerald-900/40 to-black",
desc: "Stop-motion imitation settings. No manual editing required.",
files: ["Clay_Guide.pdf", "Texture_Prompts.txt"],
difficulty: "Advanced",
videoUrl: "https://videos.pexels.com/video-files/5976263/5976263-uhd_2560_1440_24fps.mp4"
},
{
id: 7,
name: "Viral Hook Script",
type: "system",
software: "ChatGPT",
model: "GPT-4",
platform: "Business",
tags: ["Scripts", "Marketing"],
price: 3.00,
originalPrice: 5.00,
color: "from-blue-900/40 to-black",
desc: "A system to generate high-retention video hooks instantly.",
files: ["Hook_Formula.pdf", "Prompt_Chain.txt"],
difficulty: "Beginner",
videoUrl: "https://videos.pexels.com/video-files/3129957/3129957-hd_1920_1080_25fps.mp4"
},
{
id: 8,
name: "Midjourney Photorealism",
type: "system",
software: "Midjourney",
model: "v6",
platform: "Instagram",
tags: ["Photography", "Ads"],
price: 3.00,
originalPrice: 5.00,
color: "from-orange-900/40 to-black",
desc: "The definitive prompt structure for impossible-to-distinguish AI photos.",
files: ["MJ_Guide.pdf", "Parameters.txt"],
difficulty: "Intermediate",
videoUrl: "https://videos.pexels.com/video-files/852302/852302-hd_1280_720_30fps.mp4"
},
{
id: 9,
name: "Flux Realism V2",
type: "system",
software: "Flux",
model: "Dev",
platform: "Business",
tags: ["Photography", "Portrait"],
price: 3.00,
originalPrice: 5.00,
color: "from-teal-900/40 to-black",
desc: "Specific LoRA weights and guidance scales for Flux.",
files: ["Flux_Params.json", "Guide.pdf"],
difficulty: "Advanced",
videoUrl: "https://videos.pexels.com/video-files/4492795/4492795-hd_1920_1080_25fps.mp4"
}
];
// --- STATE MANAGEMENT ---
let state = {
user: null,
cart: [],
currentView: 'home',
currentEffectId: null,
effectTab: 'overview',
pricingToggle: 'monthly',
checkoutContext: 'cart',
annualPrice: 85.00,
filters: {
search: '',
type: 'all',
tools: [],
platforms: []
}
};
// --- CORE FUNCTIONS ---
function init() {
const savedUser = localStorage.getItem('viralfx_user');
if (savedUser) {
state.user = JSON.parse(savedUser);
}
renderHeader();
renderPricingState();
navigate('home');
}
function navigate(viewId, param = null) {
document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));
const target = document.getElementById(`view-${viewId}`);
if (target) target.classList.remove('hidden');
window.scrollTo(0, 0);
state.currentView = viewId;
if (viewId === 'library') renderLibrary();
if (viewId === 'account') renderAccount();
if (viewId === 'home') renderHomeFeatured();
if (viewId === 'checkout') renderCheckout();
if (viewId === 'effect' && param) {
state.currentEffectId = param;
renderEffectPage(param);
}
}
// --- AUTH & HEADER ---
function handleLogin(e) {
e.preventDefault();
const email = document.getElementById('login-email').value;
const existing = localStorage.getItem('viralfx_user');
if (existing) {
const u = JSON.parse(existing);
if (u.email === email) state.user = u;
else state.user = { email: email, isPro: false, subType: null, purchasedIds: [] };
} else {
state.user = { email: email, isPro: false, subType: null, purchasedIds: [] };
}
saveUser();
showToast(`Welcome back, ${email.split('@')[0]}`);
renderHeader();
if (state.cart.length > 0) navigate('checkout');
else navigate('account');
}
function handleLogout() {
state.user = null;
localStorage.removeItem('viralfx_user');
state.cart = [];
renderHeader();
navigate('home');
showToast("Logged out successfully.");
}
function saveUser() {
localStorage.setItem('viralfx_user', JSON.stringify(state.user));
}
function renderHeader() {
const authBtn = document.getElementById('nav-auth-area');
if (state.user) {
authBtn.innerHTML = `
<button onclick="navigate('account')" class="flex items-center gap-2 text-xs font-mono text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/5">
<span class="w-2 h-2 rounded-full ${state.user.isPro ? 'bg-lime-400 shadow-[0_0_10px_#a3e635]' : 'bg-neutral-500'}"></span>
ACCOUNT
</button>`;
} else {
authBtn.innerHTML = `
<button onclick="navigate('login')" class="text-xs font-bold text-black bg-white hover:bg-neutral-200 px-5 py-2.5 rounded-full transition-all">
Log In
</button>`;
}
}
// --- CART LOGIC ---
function getCartTotals() {
const count = state.cart.length;
const bundles = Math.floor(count / 3);
const remainder = count % 3;
const total = (bundles * 6.00) + (remainder * 3.00);
const subtotal = count * 3.00;
return { count, total, discount: subtotal - total };
}
function addToCart(id) {
if (state.user && state.user.isPro) { showToast("You are Pro! Download enabled."); return; }
if (state.user && state.user.purchasedIds.includes(id)) { showToast("You already own this."); return; }
if (!state.cart.includes(id)) {
state.cart.push(id);
updateCartUI();
showToast("Added to Cart");
} else {
showToast("Already in Cart");
}
toggleCart(true);
}
function buyNow(e, id) {
if(e) e.stopPropagation();
if (state.user && state.user.isPro) { showToast("You are Pro! Download enabled."); return; }
if (state.user && state.user.purchasedIds.includes(id)) { showToast("You already own this."); return; }
if (!state.cart.includes(id)) {
state.cart.push(id);
updateCartUI();
}
initiateCheckout('cart');
}
function removeFromCart(id) {
state.cart = state.cart.filter(itemId => itemId !== id);
updateCartUI();
}
function updateCartUI() {
const { count, total, discount } = getCartTotals();
document.getElementById('cart-badge').innerText = count;
document.getElementById('cart-badge').classList.toggle('hidden', count === 0);
const container = document.getElementById('cart-items');
if (count === 0) {
container.innerHTML = `<div class="h-64 flex flex-col items-center justify-center text-neutral-600 text-xs font-mono"><iconify-icon icon="lucide:shopping-cart" width="24" class="mb-2"></iconify-icon>CART EMPTY</div>`;
} else {
container.innerHTML = state.cart.map(id => {
const p = products.find(prod => prod.id === id);
return `
<div class="flex justify-between items-center py-3 border-b border-white/5 animate-fadeIn">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded bg-neutral-800 flex items-center justify-center text-lime-400">
<iconify-icon icon="${p.type === 'fx' ? 'lucide:sparkles' : 'lucide:scroll-text'}" width="14"></iconify-icon>
</div>
<div>
<div class="text-white text-xs font-bold">${p.name}</div>
<div class="text-[10px] text-neutral-500">$${p.price.toFixed(2)}</div>
</div>
</div>
<button onclick="removeFromCart(${p.id})" class="text-neutral-600 hover:text-red-400"><iconify-icon icon="lucide:trash-2" width="14"></iconify-icon></button>
</div>`;
}).join('');
}
document.getElementById('cart-subtotal').innerText = `$${(count * 3).toFixed(2)}`;
document.getElementById('cart-discount').innerText = `-$${discount.toFixed(2)}`;
document.getElementById('cart-total').innerText = `$${total.toFixed(2)}`;
const remainder = count % 3;
const msgEl = document.getElementById('cart-message');
if (remainder === 0 && count > 0) msgEl.innerHTML = `<span class="text-lime-400">BUNDLE ACTIVATED: 3 FOR $6 APPLIED</span>`;
else if (count > 0) msgEl.innerHTML = `Add <span class="text-white">${3 - remainder}</span> more for bundle deal ($6)`;
else msgEl.innerHTML = "";
}
function toggleCart(show) {
const el = document.getElementById('cart-drawer');
const overlay = document.getElementById('cart-overlay');
if (show) { el.classList.remove('translate-x-full'); overlay.classList.remove('hidden'); }
else { el.classList.add('translate-x-full'); overlay.classList.add('hidden'); }
}
function initiateCheckout(type) {
if (!state.user) {
navigate('login');
showToast("Please login to continue.");
return;
}
if (type === 'cart' && state.cart.length === 0) {
showToast("Cart is empty.");
return;
}
state.checkoutContext = type === 'monthly' ? 'sub_monthly' : type === 'annual' ? 'sub_annual' : 'cart';
navigate('checkout');
toggleCart(false);
}
// --- LIBRARY LOGIC & FILTERING ---
function renderHomeFeatured() {
const container = document.getElementById('home-drops');
container.innerHTML = products.slice(0, 3).map(p => createProductCard(p)).join('');
}
function toggleFilter(category, value) {
const arr = state.filters[category];
if (arr.includes(value)) {
state.filters[category] = arr.filter(item => item !== value);
} else {
state.filters[category].push(value);
}
renderLibrary();
}
function setFilterType(val) {
state.filters.type = val;
renderLibrary();
}
function renderLibrary() {
const term = state.filters.search.toLowerCase();
const allTools = [...new Set(products.map(p => p.software))].sort();
const allPlatforms = [...new Set(products.map(p => p.platform))].sort();
renderSidebar(allTools, allPlatforms);
const filtered = products.filter(p => {
const matchesSearch = p.name.toLowerCase().includes(term) || p.tags.some(t => t.toLowerCase().includes(term));
const matchesType = state.filters.type === 'all' || p.type === state.filters.type;
const matchesTool = state.filters.tools.length === 0 || state.filters.tools.includes(p.software);
const matchesPlatform = state.filters.platforms.length === 0 || state.filters.platforms.includes(p.platform);
return matchesSearch && matchesType && matchesTool && matchesPlatform;
});
document.getElementById('library-grid').innerHTML = filtered.length > 0
? filtered.map(p => createProductCard(p)).join('')
: `<div class="col-span-full py-12 text-center text-neutral-500 text-sm">No results found matching your filters.</div>`;
}
function renderSidebar(tools, platforms) {
const sidebar = document.getElementById('library-sidebar');
const toolsHtml = tools.map(t => `
<label class="flex items-center gap-2 cursor-pointer group">
<div class="relative flex items-center">
<input type="checkbox" onchange="toggleFilter('tools', '${t}')" ${state.filters.tools.includes(t) ? 'checked' : ''} class="peer appearance-none w-4 h-4 border border-white/20 rounded bg-black checked:bg-lime-400 checked:border-lime-400 transition-colors">
<iconify-icon icon="lucide:check" class="absolute inset-0 m-auto text-black opacity-0 peer-checked:opacity-100 pointer-events-none" width="10"></iconify-icon>
</div>
<span class="text-xs text-neutral-400 group-hover:text-white transition-colors">${t}</span>
</label>
`).join('');
const platformsHtml = platforms.map(p => `
<label class="flex items-center gap-2 cursor-pointer group">
<div class="relative flex items-center">
<input type="checkbox" onchange="toggleFilter('platforms', '${p}')" ${state.filters.platforms.includes(p) ? 'checked' : ''} class="peer appearance-none w-4 h-4 border border-white/20 rounded bg-black checked:bg-lime-400 checked:border-lime-400 transition-colors">
<iconify-icon icon="lucide:check" class="absolute inset-0 m-auto text-black opacity-0 peer-checked:opacity-100 pointer-events-none" width="10"></iconify-icon>
</div>
<span class="text-xs text-neutral-400 group-hover:text-white transition-colors">${p}</span>
</label>
`).join('');
sidebar.innerHTML = `
<div class="mb-8"><div class="text-xs font-bold text-white uppercase tracking-widest mb-3">Search</div><div class="relative"><iconify-icon icon="lucide:search" class="absolute left-3 top-2.5 text-neutral-500" width="14"></iconify-icon><input type="text" value="${state.filters.search}" onkeyup="state.filters.search=this.value; renderLibrary()" placeholder="Keywords..." class="w-full bg-[#111] border border-white/10 rounded-lg py-2 pl-9 pr-3 text-white text-xs focus:border-lime-400 focus:outline-none transition-colors"></div></div>
<div class="mb-8"><div class="text-xs font-bold text-white uppercase tracking-widest mb-3">Type</div><div class="space-y-2">
<label class="flex items-center gap-2 cursor-pointer group"><input type="radio" name="ftype" onclick="setFilterType('all')" ${state.filters.type === 'all' ? 'checked' : ''} class="appearance-none w-2 h-2 rounded-full bg-neutral-800 checked:bg-lime-400 outline-none ring-1 ring-white/10 checked:ring-lime-400 ring-offset-2 ring-offset-black"><span class="text-xs text-neutral-400 group-hover:text-white ${state.filters.type === 'all' ? 'text-white font-bold' : ''}">All Workflows</span></label>
<label class="flex items-center gap-2 cursor-pointer group"><input type="radio" name="ftype" onclick="setFilterType('fx')" ${state.filters.type === 'fx' ? 'checked' : ''} class="appearance-none w-2 h-2 rounded-full bg-neutral-800 checked:bg-lime-400 outline-none ring-1 ring-white/10 checked:ring-lime-400 ring-offset-2 ring-offset-black"><span class="text-xs text-neutral-400 group-hover:text-white ${state.filters.type === 'fx' ? 'text-white font-bold' : ''}">FX Workflows</span></label>
<label class="flex items-center gap-2 cursor-pointer group"><input type="radio" name="ftype" onclick="setFilterType('system')" ${state.filters.type === 'system' ? 'checked' : ''} class="appearance-none w-2 h-2 rounded-full bg-neutral-800 checked:bg-lime-400 outline-none ring-1 ring-white/10 checked:ring-lime-400 ring-offset-2 ring-offset-black"><span class="text-xs text-neutral-400 group-hover:text-white ${state.filters.type === 'system' ? 'text-white font-bold' : ''}">Prompt Systems</span></label>
</div></div>
<div class="mb-8"><div class="text-xs font-bold text-white uppercase tracking-widest mb-3">Software</div><div class="space-y-2 max-h-40 overflow-y-auto pr-2 custom-scrollbar">${toolsHtml}</div></div>
<div><div class="text-xs font-bold text-white uppercase tracking-widest mb-3">Platform</div><div class="space-y-2">${platformsHtml}</div></div>
`;
}
function createProductCard(p) {
const isPro = state.user && state.user.isPro;
const isPurchased = state.user && state.user.purchasedIds.includes(p.id);
const isUnlocked = isPro || isPurchased;
const isSystem = p.type === 'system';
// Unified Buttons Logic: Library also gets Add to Cart / Buy Now
let buttonsHtml = '';
if (isUnlocked) {
buttonsHtml = `
<div class="mt-4 border-t border-white/5 pt-3">
<button onclick="event.stopPropagation(); navigate('effect', ${p.id})" class="w-full py-2 bg-lime-400/10 text-lime-400 text-xs font-bold rounded hover:bg-lime-400/20 transition-colors flex items-center justify-center gap-2 mb-2 border border-lime-500/30">
<iconify-icon icon="lucide:download"></iconify-icon> ACCESS NOW
</button>
</div>`;
} else {
buttonsHtml = `
<div class="mt-4 border-t border-white/5 pt-3 space-y-2">
<button onclick="event.stopPropagation(); navigate('effect', ${p.id})" class="w-full py-1.5 text-neutral-400 hover:text-white text-xs font-medium transition-colors text-center group-hover:underline">Preview Effect</button>
<div class="grid grid-cols-2 gap-2">
<button onclick="event.stopPropagation(); addToCart(${p.id})" class="py-2 bg-neutral-800 text-white text-xs font-bold rounded hover:bg-neutral-700 transition-colors border border-white/5">Add to Cart</button>
<button onclick="event.stopPropagation(); buyNow(event, ${p.id})" class="py-2 bg-white text-black text-xs font-bold rounded hover:bg-neutral-200 transition-colors">Buy Now</button>
</div>
</div>`;
}
return `
<div onclick="navigate('effect', ${p.id})" class="cursor-pointer group relative bg-[#0a0a0a] border border-white/5 rounded-xl overflow-hidden hover:border-lime-500/30 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
<div class="aspect-video bg-gradient-to-br ${p.color} relative flex items-center justify-center overflow-hidden">
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
<iconify-icon icon="${isSystem ? 'lucide:scroll-text' : 'lucide:play-circle'}" width="48" class="text-white/50 group-hover:text-white group-hover:scale-110 transition-transform duration-300"></iconify-icon>
<div class="absolute bottom-2 left-2 flex gap-1">
<span class="bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold text-white border border-white/10 uppercase">${p.type}</span>
<span class="bg-black/60 backdrop-blur px-1.5 py-0.5 rounded text-[9px] font-bold text-neutral-300 border border-white/10 uppercase">${p.software}</span>
</div>
${isUnlocked ? `<div class="absolute top-2 right-2 bg-black/60 backdrop-blur border border-lime-500/30 text-lime-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1"><iconify-icon icon="lucide:unlock"></iconify-icon> UNLOCKED</div>` : ''}
</div>
<div class="p-4 flex flex-col flex-1 justify-between">
<div>
<div class="text-[10px] text-neutral-500 uppercase tracking-wider font-mono mb-1">${p.platform}</div>
<h3 class="text-white font-bold text-sm leading-tight mb-2">${p.name}</h3>
<div class="flex items-center gap-2 mb-2">
<span class="text-xs text-neutral-600 line-through">$${p.originalPrice.toFixed(2)}</span>
<span class="text-sm font-bold text-white">$${p.price.toFixed(2)}</span>
</div>
</div>
${buttonsHtml}
</div>
</div>`;
}
// --- EFFECT PAGE ---
function renderEffectPage(id) {
const p = products.find(prod => prod.id === id);
if(!p) return;
const isPro = state.user && state.user.isPro;
const isPurchased = state.user && state.user.purchasedIds.includes(p.id);
const isOwned = isPro || isPurchased;
document.getElementById('effect-title').innerText = p.name;
document.getElementById('effect-desc').innerText = p.desc;
document.getElementById('effect-price').innerText = isOwned ? "UNLOCKED" : `$${p.price.toFixed(2)}`;
document.getElementById('effect-price').className = isOwned ? "text-3xl font-bold text-lime-400 mb-6 tracking-tight" : "text-3xl font-bold text-white mb-6 tracking-tight";
document.getElementById('effect-software').innerText = p.software;
document.getElementById('effect-difficulty').innerText = p.difficulty;
document.getElementById('effect-category').innerText = p.platform;
// Actions
const actionArea = document.getElementById('effect-actions');
if (isOwned) {
actionArea.innerHTML = `
<button onclick="downloadFiles()" class="w-full py-4 bg-lime-400 text-black font-bold rounded-lg hover:bg-lime-300 transition-colors flex items-center justify-center gap-2 mb-3 shadow-[0_0_15px_rgba(163,230,53,0.3)]">
<iconify-icon icon="lucide:download"></iconify-icon> DOWNLOAD WORKFLOW
</button>
<div class="text-center text-xs text-neutral-500">${isPro ? "Included with your Pro Subscription" : "You own this workflow"}</div>
`;
} else {
// Detail page: Add to Cart + Buy Now
actionArea.innerHTML = `
<button onclick="buyNow(event, ${id})" class="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mb-3">
Buy Now &mdash; $${p.price.toFixed(2)}
</button>
<button onclick="addToCart(${id})" class="w-full py-4 bg-[#111] border border-white/10 text-white font-bold rounded-lg hover:bg-[#222] transition-colors flex items-center justify-center gap-2 mb-3">
Add to Cart
</button>
<button onclick="initiateCheckout('monthly')" class="w-full py-4 bg-transparent border border-lime-500/20 text-lime-400 font-bold rounded-lg hover:bg-lime-900/10 transition-colors flex items-center justify-center gap-2">
<iconify-icon icon="lucide:zap"></iconify-icon> Get with Pro ($9/mo)
</button>
`;
}
const visualContainer = document.getElementById('effect-visual');
if (p.videoUrl) {
visualContainer.innerHTML = `
<video src="${p.videoUrl}" autoplay loop muted playsinline class="absolute inset-0 w-full h-full object-cover"></video>
<div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
<div class="absolute top-4 left-4 bg-black/50 backdrop-blur px-2 py-1 rounded text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
<iconify-icon icon="lucide:eye"></iconify-icon> PREVIEW
</div>
`;
} else {
visualContainer.innerHTML = `
<div class="absolute inset-0 bg-gradient-to-br ${p.color}"></div>
<div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<iconify-icon icon="${p.type === 'system' ? 'lucide:scroll-text' : 'lucide:play-circle'}" width="64" class="text-white relative z-10 animate-pulse"></iconify-icon>
`;
}
document.getElementById('effect-files').innerHTML = p.files.map(f => `
<div class="flex items-center gap-3 p-3 bg-white/5 rounded border border-white/5">
<iconify-icon icon="lucide:file-code" class="text-neutral-400"></iconify-icon>
<span class="text-xs text-neutral-300 font-mono">${f}</span>
</div>
`).join('');
}
function downloadFiles() {
showToast("Starting secure download...");
setTimeout(() => showToast("Download Complete."), 1500);
}
// --- PRICING & CHECKOUT ---
function togglePricing(mode) {
state.pricingToggle = mode;
renderPricingState();
}
function renderPricingState() {
const isAnnual = state.pricingToggle === 'annual';
const toggleBg = document.getElementById('pricing-toggle-bg');
if (toggleBg) {
toggleBg.className = `absolute top-1 bottom-1 w-[50%] bg-[#1a1a1a] rounded-full transition-transform duration-300 ${isAnnual ? 'translate-x-full' : 'translate-x-0'}`;
}
// Update display prices
document.getElementById('price-display').innerHTML = isAnnual
? `<span class="text-5xl font-medium text-white tracking-tight">$${state.annualPrice}</span><span class="text-lg text-neutral-500 ml-1">/year</span>`
: `<span class="text-5xl font-medium text-white tracking-tight">$9</span><span class="text-lg text-neutral-500 ml-1">/month</span>`;
document.getElementById('price-subtext').innerText = isAnnual ? "Billed annually. Clean & Premium." : "Billed monthly. Cancel anytime.";
const btn = document.getElementById('pricing-cta');
if (btn) btn.onclick = () => initiateCheckout(isAnnual ? 'annual' : 'monthly');
}
function renderCheckout() {
const totalEl = document.getElementById('checkout-total-display');
const modeEl = document.getElementById('checkout-mode');
const itemsEl = document.getElementById('checkout-items-list');
let total = 0;
let label = '';
let itemsHtml = '';
if (state.checkoutContext === 'cart') {
const cartData = getCartTotals();
total = cartData.total;
label = "Order Summary";
itemsHtml = state.cart.map(id => {
const p = products.find(prod => prod.id === id);
return `<div class="flex justify-between text-xs py-1"><span class="text-neutral-400">${p.name}</span><span class="text-white">$${p.price.toFixed(2)}</span></div>`;
}).join('') + (cartData.discount > 0 ? `<div class="flex justify-between text-xs py-1 border-t border-white/10 mt-2 pt-2"><span class="text-lime-400">Bundle Savings</span><span class="text-lime-400">-$${cartData.discount.toFixed(2)}</span></div>` : '');
} else if (state.checkoutContext === 'sub_monthly') {
total = 9.00;
label = "ViralFX Pro (Monthly)";
itemsHtml = `<div class="flex justify-between text-xs py-1"><span class="text-neutral-400">Monthly Plan</span><span class="text-white">$9.00</span></div>`;
} else if (state.checkoutContext === 'sub_annual') {
total = state.annualPrice;
label = "ViralFX Pro (Annual)";
itemsHtml = `
<div class="flex justify-between text-xs py-1"><span class="text-neutral-400">Annual Plan</span><span class="text-white">$${state.annualPrice}</span></div>
<div class="flex justify-between text-xs py-1"><span class="text-lime-400">Discount Applied</span><span class="text-lime-400">20% Saved</span></div>
`;
}
totalEl.innerText = `$${total.toFixed(2)}`;
modeEl.innerText = label;
itemsEl.innerHTML = itemsHtml;
}
function processPayment(e) {
e.preventDefault();
const btn = document.getElementById('pay-button');
const originalText = btn.innerHTML;
btn.innerHTML = `<iconify-icon icon="lucide:loader-2" class="animate-spin"></iconify-icon> Processing Securely...`;
setTimeout(() => {
if (state.checkoutContext.includes('sub')) {
state.user.isPro = true;
state.user.subType = state.checkoutContext === 'sub_annual' ? 'annual' : 'monthly';
showToast("Pro Subscription Activated Successfully!");
} else {
state.user.purchasedIds = [...new Set([...state.user.purchasedIds, ...state.cart])];
state.cart = [];
showToast("Payment Successful. Workflows Unlocked.");
}
saveUser();
renderHeader();
navigate('account');
btn.innerHTML = originalText;
}, 2000);
}
// --- ACCOUNT ---
function renderAccount() {
if (!state.user) { navigate('login'); return; }
document.getElementById('acc-email').innerText = state.user.email;
const statusEl = document.getElementById('acc-status');
const upsellEl = document.getElementById('acc-pro-upsell');
const downloadsTitle = document.getElementById('acc-downloads-title');
if (state.user.isPro) {
statusEl.innerHTML = `
<div class="flex items-center gap-3">
<span class="text-lime-400 flex items-center gap-1 font-bold"><iconify-icon icon="lucide:shield-check"></iconify-icon> PRO ACTIVE</span>
<span class="text-xs text-neutral-500 bg-white/5 px-2 py-0.5 rounded border border-white/5 uppercase">${state.user.subType}</span>
</div>
<div class="mt-2 text-[10px] text-neutral-500">Next billing: ${new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString()}</div>
`;
upsellEl.classList.add('hidden');
downloadsTitle.innerHTML = `Access Library <span class="text-xs font-normal text-neutral-500 ml-2">(Pro Unlocked)</span>`;
} else {
statusEl.innerHTML = `<span class="text-neutral-500">Free Tier</span>`;
upsellEl.classList.remove('hidden');
downloadsTitle.innerText = "Purchased Workflows";
}
const listEl = document.getElementById('acc-downloads');
let accessibleProducts = [];
if (state.user.isPro) {
accessibleProducts = products;
} else {
accessibleProducts = products.filter(p => state.user.purchasedIds.includes(p.id));
}
if (accessibleProducts.length === 0) {
listEl.innerHTML = `<div class="p-8 text-center text-neutral-600 text-sm border border-dashed border-white/10 rounded-lg">No workflows available yet.</div>`;
} else {
listEl.innerHTML = accessibleProducts.map(p => `
<div class="flex items-center justify-between p-4 bg-[#111] border border-white/5 rounded-lg mb-2 hover:border-white/10 transition-colors">
<div class="flex items-center gap-3">
<div class="w-10 h-10 bg-neutral-800 rounded flex items-center justify-center text-white"><iconify-icon icon="${p.type === 'fx' ? 'lucide:file-video' : 'lucide:file-text'}"></iconify-icon></div>
<div>
<div class="text-white text-sm font-bold">${p.name}</div>
<div class="text-[10px] text-neutral-500 font-mono">${p.platform} / ${p.software}</div>
</div>
</div>
<button onclick="downloadFiles()" class="text-xs bg-white/5 hover:bg-white hover:text-black text-white px-3 py-2 rounded transition-colors flex items-center gap-2 font-bold">
<iconify-icon icon="lucide:download-cloud" width="14"></iconify-icon> Download
</button>
</div>
`).join('');
}
}
function showToast(msg) {
const toast = document.createElement('div');
toast.className = 'fixed bottom-5 right-5 bg-white text-black px-6 py-4 rounded-lg shadow-2xl z-[100] text-xs font-bold uppercase tracking-wider animate-fadeIn flex items-center gap-3 border-l-4 border-lime-500';
toast.innerHTML = `<iconify-icon icon="lucide:info" width="16"></iconify-icon> ${msg}`;
document.body.appendChild(toast);
setTimeout(() => {
toast.style.opacity = '0';
setTimeout(() => toast.remove(), 300);
}, 3000);
}
window.addEventListener('DOMContentLoaded', init);

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
      

<nav className="fixed top-0 w-full z-50 glass-nav h-16">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="cursor-pointer flex items-center gap-2 group" onclick="navigate('home')">
<div className="relative w-8 h-8 flex items-center justify-center bg-white/5 rounded-lg border border-white/10 group-hover:border-lime-500/50 transition-colors">
<iconify-icon className="text-lime-400" icon="lucide:layers" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tight logo-text">ViralFX</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-wide">
<button className="hover:text-white transition-colors" onclick="navigate('home')">Home</button>
<button className="hover:text-white transition-colors" onclick="navigate('library')">Library</button>
<button className="hover:text-white transition-colors" onclick="navigate('home'); setTimeout(() =&gt; document.getElementById('pricing').scrollIntoView({behavior:'smooth'}), 100)">Pricing</button>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 hover:text-white transition-colors" onclick="toggleCart(true)">
<iconify-icon icon="lucide:shopping-bag" width="20"></iconify-icon>
<span className="absolute top-0 right-0 hidden w-4 h-4 bg-lime-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center" id="cart-badge">0</span>
</button>
<div id="nav-auth-area"></div>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-black/80 z-[60] hidden backdrop-blur-sm" id="cart-overlay" onclick="toggleCart(false)"></div>
<div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#0a0a0a] border-l border-white/10 z-[70] transform translate-x-full transition-transform duration-300 flex flex-col" id="cart-drawer">
<div className="p-6 border-b border-white/5 flex items-center justify-between">
<h2 className="text-white font-display font-bold">Your Cart</h2>
<button onclick="toggleCart(false)"><iconify-icon icon="lucide:x" width="20"></iconify-icon></button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar" id="cart-items"></div>
<div className="p-6 bg-[#0f0f0f] border-t border-white/5">
<div className="mb-4 text-center"><p className="text-xs font-mono uppercase tracking-wide text-neutral-500" id="cart-message"></p></div>
<div className="space-y-2 text-xs font-mono mb-6">
<div className="flex justify-between"><span>Subtotal</span><span className="text-white" id="cart-subtotal">$0.00</span></div>
<div className="flex justify-between text-lime-400"><span>Bundle Discount</span><span id="cart-discount">-$0.00</span></div>
<div className="flex justify-between text-sm font-bold border-t border-white/10 pt-2 text-white"><span>Total</span><span id="cart-total">$0.00</span></div>
</div>
<button className="w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors" onclick="initiateCheckout('cart')">Checkout</button>
</div>
</div>

<main className="pt-16 flex-grow">

<div className="app-view animate-fadeIn" id="view-home">
<section className="py-24 relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lime-500/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-block px-3 py-1 rounded-full border border-lime-500/30 bg-lime-500/10 text-lime-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                  System v2.5 // Real-Time Activation
              </div>
<h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9] tracking-tight mb-8">
                  Viral Engineering.<br/>
<span className="text-neutral-600">FX &amp; Prompt Blueprints.</span>
</h1>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto mb-10">
                  Stop guessing parameters. Download exact effect workflows, prompt systems, and execution guides. Fully automated delivery.
              </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10" onclick="navigate('library')">Browse Library</button>
<button className="px-8 py-4 bg-neutral-900 border border-neutral-700 text-white font-bold rounded-lg hover:bg-neutral-800 transition-colors" onclick="document.getElementById('pricing').scrollIntoView({behavior:'smooth'})">Get Pro Access</button>
</div>
</div>
</section>

<section className="py-20 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-display font-bold text-white mb-12 text-center">How it works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="text-center">
<div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center text-lime-400 font-bold mb-4 border border-white/10">1</div>
<h3 className="text-white font-bold mb-2">Choose an Effect or Prompt</h3>
<p className="text-sm text-neutral-400">Browse ViralFX and pick the exact FX workflow or prompt system you want.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center text-lime-400 font-bold mb-4 border border-white/10">2</div>
<h3 className="text-white font-bold mb-2">Get the Prompt + PDF Workflow</h3>
<p className="text-sm text-neutral-400">Instantly access the exact prompt and the step-by-step PDF explaining how to use it.</p>
</div>

<div className="text-center">
<div className="w-12 h-12 mx-auto bg-neutral-900 rounded-full flex items-center justify-center text-lime-400 font-bold mb-4 border border-white/10">3</div>
<h3 className="text-white font-bold mb-2">Apply &amp; Post</h3>
<p className="text-sm text-neutral-400">Paste the prompt into the AI tool, follow the workflow, create content, post it.</p>
</div>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5" id="view-home-latest">
<div className="flex justify-between items-end mb-10">
<div>
<h2 className="text-2xl font-display font-bold text-white">Latest Drops</h2>
<p className="text-sm text-neutral-500">Fresh workflows &amp; systems added this week.</p>
</div>
<button className="text-xs text-white underline hover:text-lime-400" onclick="navigate('library')">View All</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="home-drops"></div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative" id="pricing">
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-4xl font-display font-bold text-white mb-6 tracking-tight">Access Plans</h2>

<div className="flex items-center justify-center gap-6">
<div className="relative bg-[#0a0a0a] border border-white/10 rounded-full p-1 flex w-64 h-12">
<div className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-[#1a1a1a] rounded-full transition-transform duration-300" id="pricing-toggle-bg"></div>
<button className="flex-1 relative z-10 text-xs font-bold uppercase tracking-wider text-white" onclick="togglePricing('monthly')">Monthly</button>
<button className="flex-1 relative z-10 text-xs font-bold uppercase tracking-wider text-white" onclick="togglePricing('annual')">Annual</button>
</div>
<span className="text-[10px] font-bold text-lime-400 border border-lime-500/30 bg-lime-500/10 px-2 py-1 rounded-full uppercase tracking-wider">Save 20%</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-4xl mx-auto">

<div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 flex flex-col h-full hover:border-white/20 transition-colors">
<h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">PAY PER ITEM</h3>
<div className="mb-4 h-20">
<span className="text-5xl font-medium text-white tracking-tight">$3</span>
<span className="text-lg text-neutral-500 ml-1">/each</span>
</div>

<div className="mb-8 bg-lime-400/10 border border-lime-400/20 rounded-lg p-3 flex items-center gap-3">
<iconify-icon className="text-lime-400" icon="lucide:sparkles" width="20"></iconify-icon>
<div className="text-xs">
<span className="text-lime-400 font-bold block">BUNDLE ACTIVE</span>
<span className="text-neutral-400">Get any 3 items for just $6</span>
</div>
</div>
<button className="w-full py-3 bg-transparent border border-white/20 text-white font-semibold rounded-lg hover:bg-white/5 transition-colors mb-8 text-sm" onclick="navigate('library')">
                            Browse Store
                        </button>
<ul className="space-y-4 text-sm text-neutral-400 flex-1">
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5" icon="lucide:check"></iconify-icon> Lifetime Access to File</li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5" icon="lucide:check"></iconify-icon> PDF Blueprint Included</li>
<li className="flex gap-3"><iconify-icon className="text-white mt-0.5" icon="lucide:check"></iconify-icon> No Subscription Needed</li>
</ul>
</div>

<div className="rounded-3xl border border-lime-500/30 bg-[#0a0a0a] p-8 flex flex-col h-full relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]">
<div className="absolute top-0 inset-x-0 h-40 bg-lime-500/10 blur-[50px] rounded-t-full"></div>
<div className="flex justify-between items-start mb-4 relative z-10">
<h3 className="text-xs font-medium text-lime-400 uppercase tracking-widest">VIRALFX PRO</h3>
<div className="bg-lime-400 text-black text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="lucide:star" width="10"></iconify-icon> RECOMMENDED
                            </div>
</div>
<div className="mb-8 relative z-10 h-20" id="price-display">

</div>
<button className="relative z-10 w-full py-3 bg-lime-400 text-black font-semibold rounded-lg hover:bg-lime-300 transition-colors mb-8 text-sm shadow-[0_0_20px_rgba(163,230,53,0.3)]" id="pricing-cta">
                            Join Pro Now
                        </button>
<div className="text-[10px] text-center text-neutral-500 mb-6 relative z-10" id="price-subtext"></div>
<ul className="space-y-4 text-sm text-neutral-300 flex-1 relative z-10 border-t border-white/10 pt-6">
<li className="flex gap-3"><iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check-circle"></iconify-icon> Instant Unlock: Full Library</li>
<li className="flex gap-3"><iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check-circle"></iconify-icon> Unlimited Downloads</li>
<li className="flex gap-3"><iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check-circle"></iconify-icon> Access Future Drops</li>
<li className="flex gap-3"><iconify-icon className="text-lime-400 mt-0.5" icon="lucide:check-circle"></iconify-icon> Priority Discord Access</li>
</ul>
</div>
</div>
</div>
</section>
</div>

<div className="app-view hidden animate-fadeIn min-h-screen pb-20" id="view-library">
<div className="border-b border-white/5 bg-[#050505]">
<div className="max-w-7xl mx-auto px-6 py-8">
<h1 className="text-2xl font-display font-bold text-white">Resource Library</h1>
<p className="text-xs text-neutral-500 mt-1">Filter by software, platform, or type.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-12">

<aside className="w-full lg:w-64 flex-shrink-0">
<div className="lg:sticky lg:top-24" id="library-sidebar">

</div>
</aside>

<div className="flex-1">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="library-grid">

</div>
</div>
</div>
</div>

<div className="app-view hidden animate-fadeIn min-h-screen" id="view-effect">
<div className="max-w-7xl mx-auto px-6 py-12">
<button className="text-neutral-500 hover:text-white mb-6 flex items-center gap-2 text-xs font-mono uppercase tracking-wide" onclick="navigate('library')">
<iconify-icon icon="lucide:arrow-left"></iconify-icon> Back to Library
              </button>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

<div className="lg:col-span-2">
<div className="w-full aspect-video rounded-xl bg-neutral-900 relative overflow-hidden flex items-center justify-center border border-white/10 mb-8 shadow-2xl" id="effect-visual"></div>
<div className="prose prose-invert max-w-none">
<h2 className="text-xl font-bold text-white mb-4">Technical Blueprint</h2>
<p className="text-neutral-400 leading-relaxed mb-8" id="effect-desc">...</p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
<div className="p-4 bg-[#111] rounded border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Software</div>
<div className="text-white font-bold text-sm" id="effect-software">...</div>
</div>
<div className="p-4 bg-[#111] rounded border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Difficulty</div>
<div className="text-white font-bold text-sm" id="effect-difficulty">...</div>
</div>
<div className="p-4 bg-[#111] rounded border border-white/5">
<div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Platform</div>
<div className="text-white font-bold text-sm" id="effect-category">...</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="sticky top-24 bg-[#111] border border-white/10 rounded-xl p-6">
<h1 className="text-2xl font-display font-bold text-white mb-2 leading-tight" id="effect-title">...</h1>
<div className="text-3xl font-bold text-white mb-6" id="effect-price">...</div>
<div className="mb-8" id="effect-actions"></div>
<div className="space-y-4">
<h3 className="text-xs font-bold text-white uppercase tracking-widest">Included Workflows</h3>
<div className="space-y-2" id="effect-files"></div>
</div>
<div className="mt-8 pt-6 border-t border-white/5 text-[10px] text-neutral-500 leading-relaxed flex gap-2">
<iconify-icon className="text-lime-400" icon="lucide:shield-check"></iconify-icon>
<span>Secure 256-bit encrypted checkout. Instant digital delivery via email + dashboard.</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="app-view hidden animate-fadeIn min-h-screen" id="view-account">
<div className="max-w-5xl mx-auto px-6 py-12">
<div className="flex items-center justify-between mb-8">
<h1 className="text-3xl font-display font-bold text-white">Dashboard</h1>
<button className="text-xs text-neutral-500 hover:text-white border border-white/10 px-3 py-1 rounded" onclick="handleLogout()">Sign Out</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="space-y-6">
<div className="bg-[#111] border border-white/5 rounded-xl p-6">
<div className="w-16 h-16 bg-gradient-to-br from-neutral-800 to-black rounded-full mb-4 border border-white/10 flex items-center justify-center text-xl font-bold text-white">
<iconify-icon icon="lucide:user"></iconify-icon>
</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Authenticated As</div>
<div className="text-white font-bold mb-6 break-all" id="acc-email">...</div>
<div className="border-t border-white/5 pt-4">
<div className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Subscription Status</div>
<div className="mb-6" id="acc-status">Loading...</div>
<div className="bg-neutral-900/50 p-4 rounded border border-lime-500/20 hidden" id="acc-pro-upsell">
<p className="text-xs text-neutral-300 mb-3">Unlock entire library for $9/mo.</p>
<button className="w-full py-2 bg-lime-400 text-black text-xs font-bold rounded hover:bg-lime-300" onclick="initiateCheckout('monthly')">Upgrade Account</button>
</div>
</div>
</div>
</div>
<div className="md:col-span-2">
<h2 className="text-xl text-white font-bold mb-6" id="acc-downloads-title">Your Library</h2>
<div id="acc-downloads"></div>
</div>
</div>
</div>
</div>

<div className="app-view hidden animate-fadeIn min-h-screen flex items-center justify-center p-6" id="view-login">
<div className="w-full max-w-md bg-[#111] border border-white/10 rounded-xl p-8 relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-lime-400 to-transparent opacity-50"></div>
<h2 className="text-2xl font-display font-bold text-white mb-2">Welcome Back</h2>
<p className="text-sm text-neutral-500 mb-8">Enter your email to access your purchases.</p>
<form className="space-y-4" onsubmit="handleLogin(event)">
<div><label className="block text-xs text-neutral-400 mb-1">Email Address</label><input className="w-full bg-black border border-white/10 rounded p-3 text-white focus:border-lime-400 outline-none text-sm transition-colors" id="login-email" required="" type="email"/></div>
<button className="w-full py-3 bg-white text-black font-bold rounded hover:bg-neutral-200 transition-colors" type="submit">Continue</button>
</form>
</div>
</div>

<div className="app-view hidden animate-fadeIn min-h-screen flex items-center justify-center p-6" id="view-checkout">
<div className="w-full max-w-lg bg-[#111] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="bg-[#151515] p-4 border-b border-white/5 flex justify-between items-center">
<span className="text-white font-bold text-sm flex items-center gap-2"><iconify-icon className="text-lime-400" icon="lucide:lock"></iconify-icon> Secure Checkout</span>
<button className="text-neutral-500 hover:text-white" onclick="navigate('home')"><iconify-icon icon="lucide:x"></iconify-icon></button>
</div>
<div className="p-8">

<div className="mb-8 bg-black border border-white/5 rounded-lg p-4">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-4">
<div>
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Order Type</p>
<p className="text-lime-400 text-sm font-bold" id="checkout-mode">...</p>
</div>
<div className="text-right">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1">Total Due</p>
<h3 className="text-2xl font-display font-bold text-white" id="checkout-total-display">$0.00</h3>
</div>
</div>
<div className="space-y-1" id="checkout-items-list"></div>
</div>

<form className="space-y-4" onsubmit="processPayment(event)">
<div>
<label className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 block">Card Information</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-3.5 text-neutral-500" icon="lucide:credit-card"></iconify-icon>
<input className="w-full bg-black border border-white/10 rounded p-3 pl-10 text-white outline-none focus:border-lime-400 transition-colors font-mono text-sm" placeholder="0000 0000 0000 0000" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<input className="w-full bg-black border border-white/10 rounded p-3 text-white outline-none focus:border-lime-400 transition-colors font-mono text-sm" placeholder="MM/YY" required="" type="text"/>
<input className="w-full bg-black border border-white/10 rounded p-3 text-white outline-none focus:border-lime-400 transition-colors font-mono text-sm" placeholder="CVC" required="" type="text"/>
</div>
<button className="w-full py-4 bg-lime-400 text-black font-bold rounded hover:bg-lime-300 transition-colors flex justify-center items-center gap-2 mt-4" id="pay-button" type="submit">
                        Confirm Payment
                    </button>
<p className="text-center text-[10px] text-neutral-600 mt-4">
                        By clicking confirm, you agree to our Terms of Service. Pro plans renew automatically until cancelled.
                    </p>
</form>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-[#050505] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-lime-400" icon="lucide:layers"></iconify-icon>
<span className="text-white font-bold tracking-tight">ViralFX</span>
</div>
<div className="text-xs text-neutral-500">© 2024 ViralFX. Fully Automated System.</div>
<div className="flex gap-4">
<iconify-icon className="text-neutral-500 hover:text-white cursor-pointer" icon="lucide:twitter"></iconify-icon>
<iconify-icon className="text-neutral-500 hover:text-white cursor-pointer" icon="lucide:instagram"></iconify-icon>
</div>
</div>
</footer>

    </>
  );
}
