import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
const cartNavBtn = document.getElementById('cart-nav-btn');
const cartBadge = document.getElementById('cart-badge');
const buyOverlay = document.getElementById('buy-overlay');
const buyBackdrop = document.getElementById('buy-backdrop');
const buyPanel = document.getElementById('buy-panel');
const buyPanelClose = document.getElementById('buy-panel-close');
const buyPanelName = document.getElementById('buy-panel-name');
const buyPanelPrice = document.getElementById('buy-panel-price');
const buyPanelImg = document.getElementById('buy-panel-img');
const buyPanelSizes = document.getElementById('buy-panel-sizes');
const buyPanelVariants = document.getElementById('buy-panel-variants');
const buyPanelCart = document.getElementById('buy-panel-cart');
const pack10ImagePlaceholder = "https://placehold.co/800x500/f8f9fa/017eff?text=10+Vial+Pack";
const productsData = [
{ name: "MOTS-c", cat: "Metabolic", price: 49, sizes: ["10mg", "20mg"], slug: "mots-c", pricing: { "single-10mg": 49, "single-20mg": 79, "pack-10mg": 399, "pack-20mg": 699 } },
{ name: "Tesamorelin", cat: "Growth", price: 79, sizes: ["10mg"], slug: "tesamorelin" },
{ name: "CJC-1295 + Ipamorelin", cat: "Blend", price: 89, sizes: ["10mg"], slug: "cjc-1295-ipamorelin" },
{ name: "BPC-157 + TB-500", cat: "Blend", price: 99, sizes: ["10mg", "20mg"], slug: "bpc-157-tb-500" },
{ name: "GHK-Cu", cat: "Recovery", price: 49, sizes: ["50mg", "100mg"], slug: "ghk-cu" },
{ name: "BPC-157", cat: "Recovery", price: 39, sizes: ["5mg", "10mg"], slug: "bpc-157" },
{ name: "NAD+", cat: "Longevity", price: 79, sizes: ["500mg", "1000mg"], slug: "nad" },
{ name: "KLOW", cat: "Recovery", price: 199, sizes: ["80mg"], slug: "klow" },
{ name: "GLOW", cat: "Recovery", price: 179, sizes: ["70mg"], slug: "glow" },
{ name: "Sermorelin", cat: "Growth", price: 49, sizes: ["5mg"], slug: "sermorelin" },
{ name: "TB-500", cat: "Recovery", price: 69, sizes: ["10mg"], slug: "tb-500" },
{ name: "AOD-9604", cat: "Growth", price: 49, sizes: ["5mg"], slug: "aod-9604" },
{ name: "Semax", cat: "Nootropic", price: 39, sizes: ["10mg"], slug: "semax" },
{ name: "Selank", cat: "Nootropic", price: 39, sizes: ["10mg"], slug: "selank" },
{ name: "Ipamorelin", cat: "Growth", price: 69, sizes: ["10mg"], slug: "ipamorelin" },
{ name: "PT-141", cat: "Melanocortin", price: 49, sizes: ["10mg"], slug: "pt-141" },
{ name: "Reta", cat: "Weight", price: 139, sizes: ["10mg", "15mg", "30mg"], slug: "reta" },
{ name: "Tirz", cat: "Weight", price: 99, sizes: ["10mg", "15mg", "30mg"], slug: "tirz" },
{ name: "Cagrilintide", cat: "Weight", price: 99, sizes: ["10mg"], slug: "cagrilintide" },
{ name: "Sema", cat: "Weight", price: 69, sizes: ["5mg", "10mg"], slug: "sema" },
{ name: "Melanotan II", cat: "Melanocortin", price: 39, sizes: ["10mg"], slug: "melanotan-ii" },
{ name: "Hexarelin", cat: "Growth", price: 59, sizes: ["10mg"], slug: "hexarelin" },
{ name: "Kisspeptin", cat: "Growth", price: 59, sizes: ["10mg"], slug: "kisspeptin" },
{ name: "Thymosin Alpha 1", cat: "Immunity", price: 79, sizes: ["10mg"], slug: "thymosin-alpha-1" },
{ name: "L-Glutathione", cat: "Antioxidant", price: 59, sizes: ["500mg"], slug: "l-glutathione" },
{ name: "Oxytocin", cat: "Nootropic", price: 49, sizes: ["5mg"], slug: "oxytocin" },
{ name: "DSIP", cat: "Nootropic", price: 49, sizes: ["10mg"], slug: "dsip" },
{ name: "BAC Water", cat: "Supplies", price: 10, sizes: [], slug: "bac-water" },
{ name: "Acetic Acid 0.6%", cat: "Supplies", price: 10, sizes: [], slug: "acetic-acid" }
];
const images = [
"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f47e4505-e9b0-4b0d-a364-55bd5fa09420_800w.png",
"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/734bab1a-760b-4a00-8b49-33ce914a8b22_800w.png",
"https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/265f8568-f882-4024-a4b9-76c57ea663ba_800w.png"
];
const grid = document.getElementById('catalog-grid');
const searchInput = document.getElementById('catalog-search');
function updatePrice() {
const pricingStr = buyPanel.dataset.pricing;
if (pricingStr) {
const pricing = JSON.parse(pricingStr);
const v = buyPanel.dataset.currentVariant || 'single';
const s = buyPanel.dataset.currentSize || '';
const key = v + '-' + s;
if (pricing[key]) {
buyPanelPrice.textContent = '$' + pricing[key];
}
}
}
let html = '';
productsData.forEach((p, index) => {
const img = images[index % images.length];
const sizesStr = p.sizes ? JSON.stringify(p.sizes) : '[]';
const pricingAttr = p.pricing ? `data-pricing='${JSON.stringify(p.pricing)}'` : '';
html += `
<div class="product-card bg-white rounded-[20px] shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-[3px] transition-all duration-300 overflow-hidden h-[340px] flex flex-col"
data-name="${p.name}"
data-category="${p.cat}"
data-price="${p.price}"
data-sizes='${sizesStr}'
data-slug="${p.slug}"
data-img="${img}"
${pricingAttr}>
<div class="flex-[0_0_50%] flex flex-col items-center justify-center px-4 pt-5 pb-3 bg-white">
<span class="text-[9px] text-[#9394a1] uppercase tracking-[0.18em] font-medium mb-2">${p.cat}</span>
<h3 class="text-[17px] font-bold text-[#292e4c] text-center leading-snug tracking-tight">${p.name}</h3>
<p class="text-[13px] text-[#9394a1] font-normal mt-1.5">from $${p.price}</p>
<div class="flex gap-2 mt-3.5 justify-center items-center">
<button class="buy-btn bg-[#017eff] text-white rounded-full text-[11px] font-semibold hover:bg-[#0066cc] active:scale-95 transition-all whitespace-nowrap shadow-[0_2px_6px_rgba(1,126,255,0.25)] px-[18px] py-[6px]">Buy</button>
<a href="./products/${p.slug}" class="bg-[#f5f5f7] border border-gray-200/60 text-[#292e4c] rounded-full text-[11px] font-medium hover:bg-[#ededf0] hover:border-gray-300 transition-all text-center whitespace-nowrap px-[14px] py-[6px]" style="text-decoration: none;">Learn More</a>
</div>
</div>
<div class="flex-[0_0_50%] bg-[#f5f5f7] flex items-end justify-center px-4 pt-3 pb-0 relative overflow-hidden rounded-b-[20px]">
<div class="absolute inset-0 pointer-events-none" style="opacity: 0.08; background-image: linear-gradient(to right, #292e4c 1px, transparent 1px), linear-gradient(to bottom, #292e4c 1px, transparent 1px); background-size: 20px 20px;"></div>
<img src="${img}" class="h-[115%] w-auto object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] translate-y-[6px]" alt="${p.name}">
</div>
</div>
`;
});
grid.innerHTML = html;
function filterProducts() {
const query = searchInput.value.toLowerCase();
document.querySelectorAll('.product-card').forEach(card => {
const name = card.dataset.name.toLowerCase();
const cat = card.dataset.category.toLowerCase();
const matchesSearch = !query || name.includes(query) || cat.includes(query);
card.style.display = matchesSearch ? '' : 'none';
});
}
// Search dropdown (desktop only)
const searchDropdown = document.getElementById('search-dropdown');
const searchDropdownGrid = document.getElementById('search-dropdown-grid');
function buildDropdownList() {
const query = searchInput.value.toLowerCase();
const filtered = productsData.filter(p => {
if (!query) return true;
return p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query);
});
searchDropdownGrid.innerHTML = filtered.map(p =>
'<button class="dropdown-product-btn text-left text-[13px] text-[#292e4c] hover:text-[#017eff] hover:bg-[#f5f5f7] rounded-lg px-2 py-1.5 transition-colors truncate font-medium" data-slug="' + p.slug + '" data-name="' + p.name + '">'
+ p.name
+ '</button>'
).join('');
const heading = searchDropdown.querySelector('p');
if (heading) {
heading.textContent = query ? filtered.length + ' result' + (filtered.length !== 1 ? 's' : '') : 'All Products';
}
}
searchInput.addEventListener('focus', function() {
if (window.innerWidth < 768) return;
buildDropdownList();
searchDropdown.classList.remove('hidden', 'md:hidden');
});
searchInput.addEventListener('input', function() {
if (window.innerWidth >= 768 && !searchDropdown.classList.contains('hidden')) {
buildDropdownList();
}
filterProducts();
});
document.addEventListener('click', function(e) {
if (!e.target.closest('#search-dropdown') && !e.target.closest('#catalog-search')) {
searchDropdown.classList.add('hidden');
}
});
searchDropdownGrid.addEventListener('click', function(e) {
const btn = e.target.closest('.dropdown-product-btn');
if (!btn) return;
const productName = btn.dataset.name;
searchInput.value = '';
filterProducts();
searchDropdown.classList.add('hidden');
const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
if (card.dataset.name === productName) {
card.scrollIntoView({ behavior: 'smooth', block: 'center' });
card.style.boxShadow = '0 0 0 3px rgba(1,126,255,0.4)';
setTimeout(() => { card.style.boxShadow = ''; }, 1500);
}
});
});
searchInput.addEventListener('keydown', function(e) {
if (e.key === 'Escape') {
searchDropdown.classList.add('hidden');
searchInput.blur();
}
});
function openBuyPanel(cardEl) {
const name = cardEl.dataset.name;
const price = cardEl.dataset.price;
const sizes = JSON.parse(cardEl.dataset.sizes || '[]');
const img = cardEl.dataset.img;
const isSupply = cardEl.dataset.category === 'Supplies';
buyPanelName.textContent = name;
buyPanelPrice.textContent = '$' + price;
buyPanel.dataset.singleImg = img || '';
buyPanelImg.src = img || '';
buyPanelImg.style.opacity = '1';
buyPanelVariants.style.display = isSupply ? 'none' : 'flex';
buyPanel.dataset.pricing = cardEl.dataset.pricing || '';
buyPanel.dataset.currentVariant = 'single';
buyPanel.dataset.currentSize = sizes.length ? sizes[0] : '';
buyPanelVariants.querySelectorAll('.variant-btn').forEach(b => {
if(b.dataset.variant === 'single') {
b.className = 'variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-semibold bg-[#017eff] text-white shadow-sm transition-all duration-200';
} else {
b.className = 'variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-medium text-[#9394a1] hover:text-[#292e4c] transition-all duration-200';
}
});
if (sizes.length > 1) {
buyPanelSizes.innerHTML = sizes.map((s, i) =>
'<button class="size-btn px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 '
+ (i === 0 ? 'bg-[#017eff] text-white border border-[#017eff] shadow-sm' : 'bg-white border border-gray-200 text-[#292e4c] hover:border-gray-300')
+ '" data-size="' + s + '">' + s + '</button>'
).join('');
buyPanelSizes.style.display = 'flex';
} else if (sizes.length === 1) {
buyPanelSizes.innerHTML = '<span class="size-btn bg-[#017eff] text-white border border-[#017eff] px-4 py-1.5 rounded-full text-[11px] font-semibold shadow-sm" data-size="' + sizes[0] + '">' + sizes[0] + '</span>';
buyPanelSizes.style.display = 'flex';
} else {
buyPanelSizes.style.display = 'none';
}
buyOverlay.classList.remove('opacity-0', 'pointer-events-none');
buyOverlay.classList.add('opacity-100', 'pointer-events-auto');
buyBackdrop.classList.add('pointer-events-auto');
requestAnimationFrame(() => {
buyPanel.classList.remove('translate-y-full');
buyPanel.classList.add('translate-y-0');
});
document.body.style.overflow = 'hidden';
updatePrice();
}
function closeBuyPanel() {
buyPanel.classList.remove('translate-y-0');
buyPanel.classList.add('translate-y-full');
buyOverlay.classList.remove('opacity-100', 'pointer-events-auto');
buyOverlay.classList.add('opacity-0', 'pointer-events-none');
buyBackdrop.classList.remove('pointer-events-auto');
document.body.style.overflow = '';
setTimeout(() => {
const btnText = buyPanelCart.querySelector('.btn-text');
if (btnText) btnText.textContent = 'Add To Cart';
buyPanelImg.style.opacity = '1';
}, 300);
}
document.addEventListener('click', function(e) {
const buyBtn = e.target.closest('.buy-btn');
if (buyBtn) {
e.preventDefault();
e.stopPropagation();
const card = buyBtn.closest('.product-card');
if (card) openBuyPanel(card);
}
});
buyPanelClose.addEventListener('click', closeBuyPanel);
buyBackdrop.addEventListener('click', closeBuyPanel);
buyPanelSizes.addEventListener('click', function(e) {
const sizeBtn = e.target.closest('.size-btn');
if (!sizeBtn) return;
buyPanelSizes.querySelectorAll('.size-btn').forEach(function(b) {
b.className = 'size-btn px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 bg-white border border-gray-200 text-[#292e4c] hover:border-gray-300';
});
sizeBtn.className = 'size-btn px-4 py-1.5 rounded-full text-[11px] font-semibold transition-all duration-200 bg-[#017eff] text-white border border-[#017eff] shadow-sm';
buyPanel.dataset.currentSize = sizeBtn.dataset.size;
updatePrice();
});
buyPanelVariants.addEventListener('click', function(e) {
const varBtn = e.target.closest('.variant-btn');
if (!varBtn) return;
buyPanelVariants.querySelectorAll('.variant-btn').forEach(function(b) {
b.className = 'variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-medium text-[#9394a1] hover:text-[#292e4c] transition-all duration-200';
});
varBtn.className = 'variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-semibold bg-[#017eff] text-white shadow-sm transition-all duration-200';
buyPanel.dataset.currentVariant = varBtn.dataset.variant;
buyPanelImg.style.opacity = '0';
setTimeout(() => {
if (varBtn.dataset.variant === 'pack') {
buyPanelImg.src = pack10ImagePlaceholder;
} else {
buyPanelImg.src = buyPanel.dataset.singleImg;
}
buyPanelImg.style.opacity = '1';
}, 150);
updatePrice();
});
buyPanelCart.addEventListener('click', function() {
const btnText = buyPanelCart.querySelector('.btn-text');
if(btnText) btnText.textContent = 'Added ✓';
let count = parseInt(cartBadge.innerText) || 0;
count++;
cartBadge.innerText = count;
cartNavBtn.classList.remove('hidden');
cartNavBtn.classList.add('flex');
cartBadge.classList.add('scale-125');
setTimeout(() => cartBadge.classList.remove('scale-125'), 200);
setTimeout(closeBuyPanel, 1200);
});
});



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      document.addEventListener("DOMContentLoaded", () => {
        const toggleBtn = document.getElementById('toggle-search-btn');
        const searchFilterContainer = document.getElementById('search-filter-container');
        const searchInputNode = document.getElementById('catalog-search');
        const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>';
        const closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        if(toggleBtn && searchFilterContainer) {
          toggleBtn.addEventListener('click', () => {
            const isHidden = searchFilterContainer.classList.contains('grid-rows-[0fr]');
            if (isHidden) {
              searchFilterContainer.classList.remove('grid-rows-[0fr]', 'opacity-0');
              searchFilterContainer.classList.add('grid-rows-[1fr]', 'opacity-100');
              toggleBtn.classList.add('bg-[#292e4c]', 'text-white', 'shadow-sm');
              toggleBtn.classList.remove('bg-white', 'text-[#9394a1]');
              toggleBtn.innerHTML = closeIcon;
              setTimeout(() => searchInputNode.focus(), 300);
            } else {
              searchFilterContainer.classList.add('grid-rows-[0fr]', 'opacity-0');
              searchFilterContainer.classList.remove('grid-rows-[1fr]', 'opacity-100');
              toggleBtn.classList.remove('bg-[#292e4c]', 'text-white', 'shadow-sm');
              toggleBtn.classList.add('bg-white', 'text-[#9394a1]');
              toggleBtn.innerHTML = searchIcon;
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="w-full sticky top-0 z-50" id="nav-container">
<div className="w-full py-2 px-4 flex justify-center items-center text-center bg-[#f8f8fa] border-b border-gray-100">
<p className="text-xs md:text-sm font-normal text-[#292e4c]">
<span className="md:hidden">
            Need help? Text us:
            <a className="underline font-medium underline-offset-2 ml-1 text-[#017eff]" href="#">
              +1 (972) 919-0219
            </a>
</span>
<span className="hidden md:inline">
            Need help? Text us, and a team member will reply in mins.
            <a className="underline font-medium ml-1 underline-offset-2 hover:text-[#017eff] transition-colors text-[#017eff]" href="#">
              +1 (972) 919-0219
            </a>
</span>
</p>
</div>
<nav className="flex transition-all duration-300 border-black/[0.04] md:px-6 bg-white/70 w-full h-[40px] border-b pr-4 pl-6 backdrop-blur-xl items-center justify-between" id="nav-bar">
<a className="flex-shrink-0 hover:opacity-70 transition-opacity" href="#">
<img alt="Direct Peptides" className="w-auto h-[14px] scale-125" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</a>
<div className="hidden md:flex items-center gap-6 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
<a className="text-xs font-medium text-gray-900 transition-colors" href="#">
            Home
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Privacy Policy
          </a>
<a className="text-xs font-medium text-gray-500 hover:text-gray-900 transition-colors" href="#">
            Terms of Service
          </a>
</div>
<div className="flex items-center gap-3">
<button className="md:hidden p-1 -ml-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none flex items-center justify-center">
<svg className="text-xl" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
<button className="relative p-1 -mr-1 text-gray-600 hover:text-gray-900 transition-colors focus:outline-none hidden items-center justify-center" id="cart-nav-btn">
<svg className="text-xl" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
<path d="M3 6h18"></path>
<path d="M16 10a4 4 0 0 1-8 0"></path>
</svg>
<div className="absolute -top-1 -right-1 bg-[#017eff] text-white text-xs leading-none h-[16px] w-[16px] rounded-full flex items-center justify-center font-bold border-2 border-white transition-transform duration-200" id="cart-badge">
              0
            </div>
</button>
</div>
</nav>
</div>

<div className="w-full bg-[#292e4c] overflow-hidden py-2">
<div className="max-w-[1024px] md:max-w-[1200px] mx-auto relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
<div className="animate-marquee">
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6"></path>
<path d="M10 2v7.31L8.5 12h7L14 9.31V2"></path>
<path d="M8.5 12 4 19.5A2 2 0 0 0 5.5 22h13a2 2 0 0 0 1.5-2.5L15.5 12"></path>
</svg>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
              24/7 dedicated support
            </div>
</div>
<div className="flex items-center gap-8 px-4 text-xs md:text-sm text-white/90 font-medium whitespace-nowrap">
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
              Manufactured in USA
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9 2h6"></path>
<path d="M10 2v7.31L8.5 12h7L14 9.31V2"></path>
<path d="M8.5 12 4 19.5A2 2 0 0 0 5.5 22h13a2 2 0 0 0 1.5-2.5L15.5 12"></path>
</svg>
              Third-party batch tested
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.29 7 12 12 20.71 7"></polyline>
<line x1="12" x2="12" y1="22" y2="12"></line>
</svg>
              Fast discreet shipping
            </div>
<div className="flex items-center gap-2">
<svg className="text-base text-white/80" fill="none" height="1em" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
</svg>
              24/7 dedicated support
            </div>
</div>
</div>
</div>
</div>

<main className="w-full">

<div className="max-w-[1024px] md:max-w-[1200px] mx-auto px-4 pt-5 pb-3 md:pt-8 md:pb-4 flex justify-between items-start">
<div className="">
<h1 className="text-xl md:text-[28px] font-bold text-[#292e4c] tracking-tight font-heading">
            Explore our products
          </h1>
<p className="text-xs md:text-[14px] text-[#9394a1] mt-1.5 font-normal">
            All orders ship same day from our US facility.
          </p>
</div>
<button className="h-9 w-9 md:hidden bg-white border border-gray-200/80 text-[#9394a1] rounded-full hover:bg-gray-50 hover:text-[#017eff] hover:border-gray-300 transition-all focus:outline-none flex-shrink-0 mt-0.5 cursor-pointer shadow-sm flex items-center justify-center" id="toggle-search-btn">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
</button>
</div>

<div className="md:sticky md:top-[40px] md:z-20 md:bg-[#fafafc]/95 md:backdrop-blur-sm md:border-b md:border-gray-200/60 md:pb-3 md:pt-1">
<div className="max-w-[1024px] md:max-w-[1200px] mx-auto px-4 grid transition-all duration-500 ease-in-out grid-rows-[0fr] opacity-0 md:grid-rows-[1fr] md:opacity-100" id="search-filter-container">
<div className="overflow-hidden md:overflow-visible">
<div className="pb-2 pt-2 md:pt-4 md:pb-0">
<div className="relative w-full mb-4">
<svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9394a1] opacity-70" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
</svg>
<input className="w-full bg-white text-[#292e4c] text-sm font-normal rounded-2xl pl-11 pr-4 py-3 border border-gray-200/80 focus:border-[#017eff]/30 focus:outline-none focus:ring-4 focus:ring-[#017eff]/5 transition-all placeholder:text-[#9394a1]/60 shadow-sm" id="catalog-search" placeholder="Search by name, category, or benefit..." type="text"/>

<div className="hidden md:hidden absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl border border-gray-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.08)] z-50 overflow-hidden" id="search-dropdown" style={{maxHeight: '320px', overflowY: 'auto'}}>
<div className="p-4">
<p className="text-[10px] text-[#9394a1] uppercase tracking-[0.18em] font-medium mb-3">
                      All Products
                    </p>
<div className="grid grid-cols-3 gap-x-4 gap-y-1" id="search-dropdown-grid"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 px-4 max-w-[1024px] md:max-w-[1200px] mx-auto pb-14 pt-2 md:grid-cols-4 md:gap-6 md:px-8 md:pt-6" id="catalog-grid"></div>
</main>

<div className="bg-[#1a1d2e] w-full rounded-t-3xl md:rounded-t-[40px]">
<div className="md:px-8 md:py-14 max-w-[1024px] mr-auto ml-auto pt-10 pr-6 pb-10 pl-6 bg-[#1a1d2e] rounded-t-3xl md:rounded-t-[40px] overflow-hidden">
<div className="mb-6">
<img alt="Logo" className="h-[18px] w-auto brightness-0 invert opacity-90" src="https://framerusercontent.com/images/Quu7jNUwfMYHDVnHrj0m4QMVlo4.svg"/>
</div>
<h3 className="font-heading text-lg md:text-xl font-medium text-white tracking-tight leading-tight mb-6">
          Verified compounds.
          <br/>
          Ready to ship.
        </h3>
<div className="mb-8">
<p className="text-sm text-white/40 mb-1 font-normal">
            Need help? Text us anytime.
          </p>
<a className="text-base text-[#017eff] font-medium hover:text-white transition-colors" href="sms:+19729190219">
            +1 (972) 919-0219
          </a>
</div>
<div className="border-t border-white/5 pt-6 mt-2">
<div className="flex flex-wrap gap-4 mb-4">
<a className="text-xs font-normal text-white/30 hover:text-white/60 transition-colors" href="#">
              Privacy Policy
            </a>
<span className="text-white/10">·</span>
<a className="text-xs font-normal text-white/30 hover:text-white/60 transition-colors" href="#">
              Terms of Service
            </a>
</div>
<p className="text-xs font-normal text-white/20 mb-6">
            © 2025 Direct Peptides. All rights reserved.
          </p>
<div className="space-y-4">
<p className="text-xs font-normal text-white/20 leading-relaxed text-left">
              All products from Direct Peptides are intended solely for
              laboratory research purposes and are not for human or animal
              consumption. These materials are for in vitro research only and
              must be handled by qualified professionals in controlled lab
              environments. By purchasing, the buyer agrees to use these
              products in compliance with all applicable laws and regulations.
            </p>
<p className="text-xs font-normal text-white/20 leading-relaxed text-left">
              The statements made on this website have not been evaluated by the
              U.S. Food and Drug Administration, the products offered are not
              intended to diagnose, treat, cure, or prevent any disease. Direct
              Peptides is not a compounding pharmacy or chemical compounding
              facility as defined under Section 503A of the Federal Food, Drug,
              and Cosmetic Act, and all products are sold strictly for research
              purposes only and are not for human or animal consumption.
            </p>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[9999] pointer-events-none opacity-0 transition-opacity duration-300" id="buy-overlay">

<div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none transition-opacity duration-300" id="buy-backdrop"></div>

<div className="absolute bottom-0 left-0 right-0 pointer-events-auto p-6 pb-8 transform translate-y-full transition-transform duration-300 ease-out max-w-[500px] mx-auto flex flex-col" id="buy-panel" style={{maxHeight: '90vh', overflowY: 'auto', borderRadius: '28px 28px 0 0'}}>

<div className="absolute inset-0 bg-white/70 backdrop-blur-2xl" style={{borderRadius: '28px 28px 0 0'}}></div>

<div className="absolute inset-0 pointer-events-none" style={{borderRadius: '28px 28px 0 0', opacity: '0.08', backgroundImage: 'linear-gradient(to right, #292e4c 1px, transparent 1px), linear-gradient(to bottom, #292e4c 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>

<div className="absolute top-0 left-0 right-0 h-px bg-white/80" style={{borderRadius: '28px 28px 0 0'}}></div>

<div className="relative z-10 flex justify-center mb-3">
<div className="w-10 h-1 rounded-full bg-gray-400/40"></div>
</div>

<button className="absolute top-5 right-5 z-30 text-[#9394a1] hover:text-[#292e4c] p-2 hover:bg-black/5 rounded-full transition-all flex items-center justify-center" id="buy-panel-close">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>

<div className="relative z-20 grid grid-cols-[1.3fr_1fr] gap-4 mb-2 mt-1 min-h-[160px]">

<div className="flex flex-col justify-center items-start">
<h3 className="text-xl font-bold text-[#292e4c] leading-tight mb-1 tracking-tight" id="buy-panel-name"></h3>
<p className="text-[11px] text-[#9394a1] font-medium mb-3 tracking-wide">
              Order Now, Ships Today
            </p>
<p className="text-2xl font-bold text-[#292e4c] mb-4 tracking-tight" id="buy-panel-price"></p>

<div className="flex flex-row items-center p-0.5 bg-gray-100/80 rounded-full mb-4 w-fit border border-gray-200/40" id="buy-panel-variants">
<button className="variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-semibold bg-[#017eff] text-white shadow-sm transition-all duration-200" data-variant="single">
                Single Vial
              </button>
<button className="variant-btn whitespace-nowrap px-4 py-1.5 rounded-full text-[11px] font-medium text-[#9394a1] hover:text-[#292e4c] transition-all duration-200" data-variant="pack">
                Pack of 10
              </button>
</div>

<div className="flex gap-2 flex-wrap" id="buy-panel-sizes"></div>
</div>

<div className="flex items-center justify-end relative h-full">
<img alt="Product Image" className="max-w-full max-h-[160px] object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-opacity duration-300 ease-in-out" id="buy-panel-img" src=""/>
</div>
</div>

<button className="relative z-20 w-full bg-[#292e4c] text-white py-3.5 rounded-full text-[13px] font-semibold hover:bg-[#1a1d2e] active:scale-[0.98] transition-all shadow-[0_4px_16px_rgba(41,46,76,0.25)] flex justify-center items-center mt-5" id="buy-panel-cart">
<span className="btn-text">Add to Cart</span>
</button>
</div>
</div>


    </>
  );
}
