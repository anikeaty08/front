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



// Models data with multiple photos
const models = [
{ id: 1, name: "Елена В.", height: 178, hair: "blonde", bust: 84, waist: 60, hips: 90, images: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop"] },
{ id: 2, name: "Анастасия К.", height: 176, hair: "brunette", bust: 82, waist: 59, hips: 88, images: ["https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop"] },
{ id: 3, name: "Мила Р.", height: 180, hair: "red", bust: 85, waist: 61, hips: 91, images: ["https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"] },
{ id: 4, name: "Диана С.", height: 177, hair: "brunette", bust: 83, waist: 60, hips: 89, images: ["https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop"] },
{ id: 5, name: "София М.", height: 175, hair: "blonde", bust: 86, waist: 62, hips: 92, images: ["https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop"] },
{ id: 6, name: "Виктория Л.", height: 179, hair: "brunette", bust: 84, waist: 58, hips: 88, images: ["https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop"] },
{ id: 7, name: "Алина Б.", height: 182, hair: "blonde", bust: 85, waist: 60, hips: 90, images: ["https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"] },
{ id: 8, name: "Кристина Н.", height: 174, hair: "red", bust: 82, waist: 59, hips: 87, images: ["https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800&auto=format&fit=crop", "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=800&auto=format&fit=crop"] }
];
// Selected models for booking
let selectedModels = [];
// Load models from localStorage if available
function getModels() {
const stored = localStorage.getItem('bsm_models');
return stored ? JSON.parse(stored) : models;
}
function saveModels(data) {
localStorage.setItem('bsm_models', JSON.stringify(data));
}
function toggleModelSelection(id) {
const index = selectedModels.indexOf(id);
if (index === -1) {
selectedModels.push(id);
} else {
selectedModels.splice(index, 1);
}
updateSelectionUI();
updateSelectedModelsDisplay();
updateHiddenModelsField();
}
function updateSelectionUI() {
const counter = document.getElementById('selection-counter');
if (selectedModels.length > 0) {
counter.classList.remove('translate-y-full', 'opacity-0');
document.getElementById('selected-count').textContent = selectedModels.length;
} else {
counter.classList.add('translate-y-full', 'opacity-0');
}
}
function updateSelectedModelsDisplay() {
const container = document.getElementById('selected-models-list');
const wrapper = document.getElementById('selected-models-wrapper');
const allModels = getModels();
if (selectedModels.length === 0) {
wrapper.classList.add('hidden');
return;
}
wrapper.classList.remove('hidden');
const selectedModelsList = selectedModels.map(id => allModels.find(m => m.id === id)).filter(Boolean);
container.innerHTML = selectedModelsList.map(m => `
<div class="flex items-center gap-3 bg-[#0a0202] border border-[#2a1215] rounded-lg p-2 pr-3">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-10 h-12 object-cover rounded-md" alt="${m.name}" />
<span class="text-white text-sm flex-1">${m.name}</span>
<button onclick="toggleModelSelection(${m.id})" class="text-[#8a7a7d] hover:text-rose-400 transition-colors">
<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
</button>
</div>
`).join('');
}
function updateHiddenModelsField() {
const allModels = getModels();
const selectedModelNames = selectedModels.map(id => {
const m = allModels.find(x => x.id === id);
return m ? m.name : null;
}).filter(Boolean);
const hiddenField = document.getElementById('selected-models-hidden');
if (hiddenField) {
hiddenField.value = selectedModelNames.join(', ');
}
}
function clearSelection() {
selectedModels = [];
updateSelectionUI();
updateSelectedModelsDisplay();
updateHiddenModelsField();
}
function scrollToContact() {
document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}
function openLightbox(src) {
const lb = document.getElementById('lightbox');
document.getElementById('lightbox-img').src = src;
lb.classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeLightbox() {
document.getElementById('lightbox').classList.add('hidden');
document.body.style.overflow = 'auto';
}
function showToast(msg) {
const toast = document.getElementById('toast');
document.getElementById('toast-message').textContent = msg;
toast.classList.remove('translate-x-full');
setTimeout(() => toast.classList.add('translate-x-full'), 3000);
}
// Cookie consent
function acceptCookies() {
localStorage.setItem('bsm_cookies', 'accepted');
document.getElementById('cookie-banner').classList.add('hidden');
}
function checkCookies() {
if (!localStorage.getItem('bsm_cookies')) {
document.getElementById('cookie-banner').classList.remove('hidden');
}
}
// Privacy modal
function openPrivacy() {
document.getElementById('privacy-modal').classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closePrivacy() {
document.getElementById('privacy-modal').classList.add('hidden');
document.body.style.overflow = 'auto';
}
// Admin panel
const ADMIN_PASSWORD = '04572000';
let isAdminLoggedIn = false;
function openAdminLogin() {
document.getElementById('admin-login-modal').classList.remove('hidden');
}
function closeAdminLogin() {
document.getElementById('admin-login-modal').classList.add('hidden');
document.getElementById('admin-password').value = '';
}
function loginAdmin() {
const pwd = document.getElementById('admin-password').value;
if (pwd === ADMIN_PASSWORD) {
isAdminLoggedIn = true;
closeAdminLogin();
openAdminPanel();
} else {
showToast('Неверный пароль');
}
}
function openAdminPanel() {
if (!isAdminLoggedIn) { openAdminLogin(); return; }
renderAdminModels();
document.getElementById('admin-panel').classList.remove('hidden');
document.body.style.overflow = 'hidden';
}
function closeAdminPanel() {
document.getElementById('admin-panel').classList.add('hidden');
document.body.style.overflow = 'auto';
}
function renderAdminModels() {
const allModels = getModels();
const list = document.getElementById('admin-models-list');
list.innerHTML = allModels.map(m => `
<div class="flex items-center gap-4 p-4 bg-[#0a0202] rounded-lg border border-[#2a1215]">
<img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-20 object-cover rounded-lg" />
<div class="flex-1">
<p class="text-white font-medium">${m.name}</p>
<p class="text-[#8a7a7d] text-sm">${m.height} см • ${m.hair === 'blonde' ? 'Блонд' : m.hair === 'brunette' ? 'Брюнет' : 'Рыжий'}</p>
</div>
<button onclick="editModel(${m.id})" class="p-2 text-[#8a7a7d] hover:text-white"><i data-lucide="edit" class="w-5 h-5"></i></button>
<button onclick="deleteModel(${m.id})" class="p-2 text-[#8a7a7d] hover:text-rose-400"><i data-lucide="trash-2" class="w-5 h-5"></i></button>
</div>
`).join('');
lucide.createIcons();
}
function deleteModel(id) {
if (!confirm('Удалить модель?')) return;
let allModels = getModels();
allModels = allModels.filter(m => m.id !== id);
saveModels(allModels);
const selIndex = selectedModels.indexOf(id);
if (selIndex !== -1) selectedModels.splice(selIndex, 1);
renderAdminModels();
updateSelectedModelsDisplay();
showToast('Модель удалена');
}
let editingModelId = null;
function editModel(id) {
const allModels = getModels();
const m = allModels.find(x => x.id === id);
if (!m) return;
editingModelId = id;
document.getElementById('model-form-title').textContent = 'Редактировать модель';
document.getElementById('model-name').value = m.name;
document.getElementById('model-height').value = m.height;
document.getElementById('model-hair').value = m.hair;
document.getElementById('model-bust').value = m.bust;
document.getElementById('model-waist').value = m.waist;
document.getElementById('model-hips').value = m.hips;
document.getElementById('model-img1').value = m.images[0] || '';
document.getElementById('model-img2').value = m.images[1] || '';
document.getElementById('model-img3').value = m.images[2] || '';
document.getElementById('model-form-modal').classList.remove('hidden');
}
function openAddModel() {
editingModelId = null;
document.getElementById('model-form-title').textContent = 'Добавить модель';
document.getElementById('model-name').value = '';
document.getElementById('model-height').value = '';
document.getElementById('model-hair').value = 'blonde';
document.getElementById('model-bust').value = '';
document.getElementById('model-waist').value = '';
document.getElementById('model-hips').value = '';
document.getElementById('model-img1').value = '';
document.getElementById('model-img2').value = '';
document.getElementById('model-img3').value = '';
document.getElementById('model-form-modal').classList.remove('hidden');
}
function closeModelForm() {
document.getElementById('model-form-modal').classList.add('hidden');
}
function saveModel() {
const allModels = getModels();
const data = {
name: document.getElementById('model-name').value,
height: parseInt(document.getElementById('model-height').value),
hair: document.getElementById('model-hair').value,
bust: parseInt(document.getElementById('model-bust').value),
waist: parseInt(document.getElementById('model-waist').value),
hips: parseInt(document.getElementById('model-hips').value),
images: [
document.getElementById('model-img1').value,
document.getElementById('model-img2').value,
document.getElementById('model-img3').value
].filter(x => x)
};
if (!data.name || !data.height || data.images.length === 0) {
showToast('Заполните все обязательные поля');
return;
}
if (editingModelId) {
const idx = allModels.findIndex(m => m.id === editingModelId);
if (idx !== -1) { data.id = editingModelId; allModels[idx] = data; }
} else {
data.id = Date.now();
allModels.push(data);
}
saveModels(allModels);
closeModelForm();
renderAdminModels();
showToast(editingModelId ? 'Модель обновлена' : 'Модель добавлена');
}
// Form handling
document.addEventListener('DOMContentLoaded', function() {
document.getElementById('lightbox').addEventListener('click', function(e) {
if (e.target === this) closeLightbox();
});
lucide.createIcons();
checkCookies();
});



// Site images management
const defaultSiteImages = {
hero: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1600&auto=format&fit=crop',
marquee: [
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'
],
portfolio: [
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp'
],
about: [
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg',
'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg'
]
};
function getSiteImages() {
const stored = localStorage.getItem('bsm_site_images');
return stored ? JSON.parse(stored) : defaultSiteImages;
}
function saveSiteImagesData(data) {
localStorage.setItem('bsm_site_images', JSON.stringify(data));
}
function switchAdminTab(tab) {
document.querySelectorAll('.admin-tab').forEach(t => {
t.classList.remove('border-rose-600', 'text-white');
t.classList.add('border-transparent', 'text-[#8a7a7d]');
});
document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.add('hidden'));
document.getElementById('tab-' + tab).classList.add('border-rose-600', 'text-white');
document.getElementById('tab-' + tab).classList.remove('border-transparent', 'text-[#8a7a7d]');
document.getElementById('admin-tab-' + tab).classList.remove('hidden');
if (tab === 'site-images') {
renderSiteImagesEditor();
}
}
function renderSiteImagesEditor() {
const images = getSiteImages();
// Hero
document.getElementById('url-hero').value = images.hero;
document.getElementById('preview-hero').src = images.hero;
// Marquee
const marqueeList = document.getElementById('marquee-images-list');
marqueeList.innerHTML = images.marquee.map((url, i) => `
<div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
<div class="flex items-center gap-4">
<img id="preview-marquee-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-20 object-cover rounded-lg" />
<div class="flex-1">
<p class="text-white text-sm mb-2">Фото ${i + 1}</p>
<input type="url" id="url-marquee-${i}" value="${url}" class="w-full bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updateMarqueeImage(${i}, this.value)" />
</div>
</div>
</div>
`).join('');
// Portfolio
const portfolioList = document.getElementById('portfolio-images-list');
portfolioList.innerHTML = images.portfolio.map((url, i) => `
<div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
<div class="flex items-center gap-4">
<img id="preview-portfolio-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-16 object-cover rounded-lg" />
<div class="flex-1">
<p class="text-white text-sm mb-2">Фото ${i + 1}</p>
<input type="url" id="url-portfolio-${i}" value="${url}" class="w-full bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updatePortfolioImage(${i}, this.value)" />
</div>
</div>
</div>
`).join('');
// About
const aboutList = document.getElementById('about-images-list');
aboutList.innerHTML = images.about.map((url, i) => `
<div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
<div class="flex items-center gap-4">
<img id="preview-about-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-20 object-cover rounded-lg" />
<div class="flex-1">
<p class="text-white text-sm mb-2">Фото ${i + 1}</p>
<input type="url" id="url-about-${i}" value="${url}" class="w-full bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updateAboutImage(${i}, this.value)" />
</div>
</div>
</div>
`).join('');
}
function updateSiteImage(type, url) {
const images = getSiteImages();
images[type] = url;
saveSiteImagesData(images);
document.getElementById('preview-' + type).src = url;
}
function updateMarqueeImage(index, url) {
const images = getSiteImages();
images.marquee[index] = url;
saveSiteImagesData(images);
document.getElementById('preview-marquee-' + index).src = url;
}
function updatePortfolioImage(index, url) {
const images = getSiteImages();
images.portfolio[index] = url;
saveSiteImagesData(images);
document.getElementById('preview-portfolio-' + index).src = url;
}
function updateAboutImage(index, url) {
const images = getSiteImages();
images.about[index] = url;
saveSiteImagesData(images);
document.getElementById('preview-about-' + index).src = url;
}
function saveSiteImages() {
applySiteImages();
showToast('Изображения сохранены!');
}
function applySiteImages() {
const images = getSiteImages();
// Apply hero
const heroSection = document.querySelector('section.relative.z-10.mx-6.mt-24');
if (heroSection) {
heroSection.style.background = `url('${images.hero}') center/cover no-repeat`;
}
// Apply portfolio
const portfolioImages = document.querySelectorAll('#portfolio .grid img');
portfolioImages.forEach((img, i) => {
if (images.portfolio[i]) img.src = images.portfolio[i];
});
// Apply about
const aboutImages = document.querySelectorAll('#about .grid img');
aboutImages.forEach((img, i) => {
if (images.about[i]) img.src = images.about[i];
});
}
// Apply saved images on load
document.addEventListener('DOMContentLoaded', function() {
applySiteImages();
});



        !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
      


        function handleFormSubmit(event) {
          event.preventDefault();
          const form = document.getElementById('contact-form');
          const formData = new FormData(form);
          const submitBtn = document.getElementById('submit-btn');

          submitBtn.disabled = true;
          submitBtn.textContent = 'Отправка...';

          // Send to first email
          const sendToFirst = fetch('https://formsubmit.co/ajax/mihail@masenko.pro', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          // Send to second email
          const sendToSecond = fetch('https://formsubmit.co/ajax/topelise@yandex.ru', {
            method: 'POST',
            body: formData,
            headers: {
              'Accept': 'application/json'
            }
          });

          Promise.all([sendToFirst, sendToSecond])
          .then(() => {
            form.classList.add('hidden');
            document.getElementById('form-success-message').classList.remove('hidden');
            document.getElementById('selected-models-wrapper').classList.add('hidden');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить заявку';
          })
          .catch(error => {
            form.classList.add('hidden');
            document.getElementById('form-success-message').classList.remove('hidden');
            document.getElementById('selected-models-wrapper').classList.add('hidden');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Отправить заявку';
          });
        }

        function resetContactForm() {
          document.getElementById('contact-form').classList.remove('hidden');
          document.getElementById('form-success-message').classList.add('hidden');
        }
      


            // Image upload handling
            const IMGBB_API_KEY = '4b9d7d8c9f8e7a6b5c4d3e2f1a0b9c8d'; // Demo key - replace with your own

            async function handleImageUpload(input, type, index = null) {
              const file = input.files[0];
              if (!file) return;

              // Validate file type
              if (!file.type.startsWith('image/')) {
                showToast('Пожалуйста, выберите изображение');
                return;
              }

              // Validate file size (max 10MB)
              if (file.size > 10 * 1024 * 1024) {
                showToast('Файл слишком большой. Максимум 10MB');
                return;
              }

              // Show loading state
              const originalLabel = input.parentElement;
              const loadingHtml = '<div class="animate-pulse">Загрузка...</div>';

              try {
                // Convert to base64 for local preview immediately
                const reader = new FileReader();
                reader.onload = async function(e) {
                  const base64Data = e.target.result;

                  // Update preview immediately with local data
                  if (type === 'hero') {
                    document.getElementById('preview-hero').src = base64Data;
                    document.getElementById('url-hero').value = base64Data;
                    updateSiteImage('hero', base64Data);
                  } else if (type === 'marquee' && index !== null) {
                    const preview = document.getElementById('preview-marquee-' + index);
                    const urlInput = document.getElementById('url-marquee-' + index);
                    if (preview) preview.src = base64Data;
                    if (urlInput) urlInput.value = base64Data;
                    updateMarqueeImage(index, base64Data);
                  } else if (type === 'portfolio' && index !== null) {
                    const preview = document.getElementById('preview-portfolio-' + index);
                    const urlInput = document.getElementById('url-portfolio-' + index);
                    if (preview) preview.src = base64Data;
                    if (urlInput) urlInput.value = base64Data;
                    updatePortfolioImage(index, base64Data);
                  } else if (type === 'about' && index !== null) {
                    const preview = document.getElementById('preview-about-' + index);
                    const urlInput = document.getElementById('url-about-' + index);
                    if (preview) preview.src = base64Data;
                    if (urlInput) urlInput.value = base64Data;
                    updateAboutImage(index, base64Data);
                  } else if (type === 'model' && index !== null) {
                    const imgInput = document.getElementById('model-img' + index);
                    if (imgInput) imgInput.value = base64Data;
                  }

                  showToast('Изображение загружено!');
                };
                reader.readAsDataURL(file);

              } catch (error) {
                console.error('Upload error:', error);
                showToast('Ошибка загрузки: ' + error.message);
              }

              // Reset input
              input.value = '';
            }

            // Enhanced renderSiteImagesEditor with upload buttons
            const originalRenderSiteImagesEditor = renderSiteImagesEditor;
            renderSiteImagesEditor = function() {
              const images = getSiteImages();

              // Hero
              document.getElementById('url-hero').value = images.hero;
              document.getElementById('preview-hero').src = images.hero;

              // Marquee
              const marqueeList = document.getElementById('marquee-images-list');
              marqueeList.innerHTML = images.marquee.map((url, i) => `
                <div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
                  <div class="flex items-start gap-4">
                    <div class="relative group">
                      <img id="preview-marquee-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-20 object-cover rounded-lg" />
                      <label class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center cursor-pointer">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'marquee', ${i})" />
                      </label>
                    </div>
                    <div class="flex-1">
                      <p class="text-white text-sm mb-2">Фото ${i + 1}</p>
                      <div class="flex gap-2">
                        <input type="url" id="url-marquee-${i}" value="${url}" class="flex-1 bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updateMarqueeImage(${i}, this.value)" />
                        <label class="bg-rose-900/30 text-rose-300 p-2 rounded-lg hover:bg-rose-900/50 transition-colors cursor-pointer flex items-center">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'marquee', ${i})" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('');

              // Portfolio
              const portfolioList = document.getElementById('portfolio-images-list');
              portfolioList.innerHTML = images.portfolio.map((url, i) => `
                <div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
                  <div class="flex items-start gap-4">
                    <div class="relative group">
                      <img id="preview-portfolio-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-16 object-cover rounded-lg" />
                      <label class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center cursor-pointer">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'portfolio', ${i})" />
                      </label>
                    </div>
                    <div class="flex-1">
                      <p class="text-white text-sm mb-2">Фото ${i + 1}</p>
                      <div class="flex gap-2">
                        <input type="url" id="url-portfolio-${i}" value="${url}" class="flex-1 bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updatePortfolioImage(${i}, this.value)" />
                        <label class="bg-rose-900/30 text-rose-300 p-2 rounded-lg hover:bg-rose-900/50 transition-colors cursor-pointer flex items-center">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'portfolio', ${i})" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('');

              // About
              const aboutList = document.getElementById('about-images-list');
              aboutList.innerHTML = images.about.map((url, i) => `
                <div class="site-image-item bg-[#0a0202] border rounded-lg p-4" style="border-color: #2a1215;">
                  <div class="flex items-start gap-4">
                    <div class="relative group">
                      <img id="preview-about-${i}" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-16 h-20 object-cover rounded-lg" />
                      <label class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center cursor-pointer">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'about', ${i})" />
                      </label>
                    </div>
                    <div class="flex-1">
                      <p class="text-white text-sm mb-2">Фото ${i + 1}</p>
                      <div class="flex gap-2">
                        <input type="url" id="url-about-${i}" value="${url}" class="flex-1 bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" style="border-color: #2a1215;" onchange="updateAboutImage(${i}, this.value)" />
                        <label class="bg-rose-900/30 text-rose-300 p-2 rounded-lg hover:bg-rose-900/50 transition-colors cursor-pointer flex items-center">
                          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <input type="file" accept="image/*" class="hidden" onchange="handleImageUpload(this, 'about', ${i})" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('');
            };
          


      let currentSlides = {};

      function slideToImage(modelId, index) {
        currentSlides[modelId] = index;
        const slides = document.querySelectorAll(`.model-slide-${modelId}`);
        const dots = document.querySelectorAll(`.model-dot-${modelId}`);
        slides.forEach((slide, i) => {
          slide.style.opacity = i === index ? '1' : '0';
        });
        dots.forEach((dot, i) => {
          dot.className = `model-dot-${modelId} w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white' : 'bg-white/40'}`;
        });
      }

      function nextSlide(modelId, total) {
        const current = currentSlides[modelId] || 0;
        slideToImage(modelId, (current + 1) % total);
      }

      function prevSlide(modelId, total) {
        const current = currentSlides[modelId] || 0;
        slideToImage(modelId, (current - 1 + total) % total);
      }

      function updateGallerySelection() {
        const allModels = getModels();
        allModels.forEach(m => {
          const btn = document.querySelector(`.select-btn-${m.id}`);
          if (btn) {
            const isSelected = selectedModels.includes(m.id);
            btn.className = `select-btn-${m.id} absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all ${isSelected ? 'bg-rose-600 text-white' : 'bg-black/50 text-white/70 hover:bg-black/70'}`;
            btn.innerHTML = isSelected
              ? '<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>'
              : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>';
          }
        });
      }
    


      // Yandex Disk link converter
      async function convertYandexLink() {
        const input = document.getElementById('yandex-disk-url').value.trim();
        const resultDiv = document.getElementById('converted-link-result');
        const outputField = document.getElementById('converted-link-output');
        const errorDiv = document.getElementById('convert-error');

        resultDiv.classList.add('hidden');
        errorDiv.classList.add('hidden');

        if (!input) {
          errorDiv.textContent = 'Введите ссылку на файл';
          errorDiv.classList.remove('hidden');
          return;
        }

        // Check if it's a Yandex Disk link
        if (!input.includes('disk.yandex') && !input.includes('yadi.sk')) {
          errorDiv.textContent = 'Это не похоже на ссылку Яндекс.Диска. Используйте ссылки вида disk.yandex.ru или yadi.sk';
          errorDiv.classList.remove('hidden');
          return;
        }

        try {
          // Extract the public key from the URL
          let publicKey = input;

          // Use Yandex Disk API to get direct download link
          const apiUrl = `https://cloud-api.yandex.net/v1/disk/public/resources/download?public_key=${encodeURIComponent(publicKey)}`;

          const response = await fetch(apiUrl);

          if (!response.ok) {
            throw new Error('Не удалось получить прямую ссылку. Убедитесь, что файл доступен по публичной ссылке.');
          }

          const data = await response.json();

          if (data.href) {
            outputField.value = data.href;
            resultDiv.classList.remove('hidden');
          } else {
            throw new Error('API не вернул ссылку на скачивание');
          }
        } catch (error) {
          // Fallback: try to construct direct link manually
          try {
            // For shared files, try alternative method
            const encodedUrl = encodeURIComponent(input);
            const proxyUrl = `https://getfile.dokpub.com/yandex/get/${encodedUrl}`;

            outputField.value = proxyUrl;
            resultDiv.classList.remove('hidden');

            // Show warning about alternative method
            errorDiv.textContent = 'Использован альтернативный метод. Если изображение не отображается, убедитесь что файл доступен публично.';
            errorDiv.classList.remove('hidden');
            errorDiv.style.color = '#fbbf24'; // amber color for warning
          } catch (e) {
            errorDiv.textContent = error.message || 'Ошибка при конвертации ссылки';
            errorDiv.classList.remove('hidden');
            errorDiv.style.color = ''; // reset to default rose
          }
        }
      }

      function copyConvertedLink() {
        const outputField = document.getElementById('converted-link-output');
        outputField.select();
        document.execCommand('copy');
        showToast('Ссылка скопирована!');
      }

      // Enhanced showToast function if not exists
      if (typeof showToast === 'undefined') {
        window.showToast = function(msg) {
          const existingToast = document.getElementById('dynamic-toast');
          if (existingToast) existingToast.remove();

          const toast = document.createElement('div');
          toast.id = 'dynamic-toast';
          toast.className = 'fixed bottom-6 right-6 bg-[#0f0304] border border-[#2a1215] text-white px-6 py-3 rounded-lg shadow-2xl z-50 flex items-center gap-3 animate-fade-in';
          toast.innerHTML = `
            <svg class="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>${msg}</span>
          `;
          document.body.appendChild(toast);

          setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s';
            setTimeout(() => toast.remove(), 300);
          }, 3000);
        };
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
      

<div className="aura-background-component top-0 w-full -z-10 fixed h-full" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>

<nav className="fixed bg-[#050101]/80 w-full z-50 border-b top-0 backdrop-blur-xl" style={{borderColor: 'rgba(42, 18, 21, 0.3)'}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="sm:text-2xl md:text-3xl md:text-slate-400 text-xl font-bold tracking-wide bg-slate-200/0" href="#">
          BLACK SEA MODELS
        </a>
<div className="hidden md:flex items-center gap-8 text-sm" style={{color: '#8a7a7d'}}>
<a className="hover:text-white transition-colors" href="#models">
            Модели
          </a>
<a className="hover:text-white transition-colors" href="#services">
            Услуги
          </a>
<a className="hover:text-white transition-colors" href="#about">О нас</a>
<a className="hover:text-white transition-colors" href="#contact">
            Контакты
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:flex text-sm text-white/80 hover:text-white font-mono" href="tel:+79384929976">
            +7 (938) 492-99-76
          </a>
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-rose-900 text-white px-5 py-2.5 rounded-lg hover:bg-rose-800 transition-all" href="#contact">
<span className="">Заявка</span>
<svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border hover:bg-white/10 transition-all" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
<svg className="w-5 h-5 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
<div className="hidden md:hidden absolute top-16 left-0 right-0 bg-[#050101]/95 backdrop-blur-xl border-b p-6 flex flex-col gap-4" id="mobile-menu" style={{borderColor: 'rgba(42, 18, 21, 0.3)'}}>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#models" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Модели
          </a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#services" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Услуги
          </a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#about" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            О нас
          </a>
<a className="text-white/80 hover:text-white transition-colors py-2" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
            Контакты
          </a>
<a className="text-white/80 hover:text-white transition-colors py-2 font-mono" href="tel:+79384929976">
            +7 (938) 492-99-76
          </a>
<a className="flex items-center justify-center gap-2 text-sm font-medium bg-rose-900 text-white px-5 py-3 rounded-lg hover:bg-rose-800 transition-all mt-2" href="#contact" onclick="document.getElementById('mobile-menu').classList.add('hidden')">
<span>Заявка</span>
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</nav>

<section className="relative z-10 mb-20 lg:mb-32 rounded-3xl overflow-hidden border mx-3 sm:mx-6 mt-20 sm:mt-24" style={{borderColor: 'rgba(42, 18, 21, 0.5)', height: '600px', background: 'url(\'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp'}}>
<div className="absolute inset-0 bg-gradient-to-r from-[#050101] via-[#050101]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#050101] via-transparent to-transparent"></div>
<div aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-6" style={{letterSpacing: '-0.02em'}}>
<span className="block leading-none" style={{fontWeight: '600', fontSize: 'min(15vw, 200px)', lineHeight: '0.8', color: 'rgba(159, 18, 57, 0.15)'}}>
          BSM
        </span>
</div>
<div className="flex flex-col sm:p-10 lg:p-16 h-full pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f0304]/80 border text-xs text-rose-200 uppercase tracking-wider mb-6" style={{borderColor: '#2a1215'}}>
<span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Сочи • Сириус • Красная Поляна
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tighter leading-[1.05]">
              Профессиональные
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-rose-500">
                модели
              </span>
              для вашего мероприятия
            </h1>
</div>
<div className="lg:col-span-5">
<p className="sm:text-base leading-relaxed text-sm max-w-[42ch]" style={{color: '#c9c0c1'}}>
              Организуем работу промо-персонала, хостес и моделей на
              мероприятиях любого масштаба в Сочи и на всём Черноморском
              побережье.
            </p>
<div className="flex flex-wrap gap-4 mt-6 items-center">
<a className="inline-flex items-center gap-2 hover:from-rose-600 hover:to-rose-800 transition-all shadow-rose-900/25 text-sm font-medium text-white bg-gradient-to-r from-rose-700 to-rose-900 rounded-lg pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg" href="#models" style={{}}>Смотреть моделей<svg aria-hidden="true" className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></a>
<a className="inline-flex items-center gap-2 text-sm font-medium bg-white/5 border text-white px-6 py-3.5 rounded-lg hover:bg-white/10 transition-all" href="tel:+79384929976" style={{borderColor: 'rgba(255,255,255,0.1)'}}>
<svg aria-hidden="true" className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                Позвонить
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 border-y py-12" style={{borderColor: 'rgba(42, 18, 21, 0.3)', background: 'rgba(10, 2, 2, 0.5)', backdropFilter: 'blur(8px)'}}>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<p className="text-3xl font-semibold text-white mb-1">50+</p>
<p className="text-sm" style={{color: '#8a7a7d'}}>Моделей в базе</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white mb-1">200+</p>
<p className="text-sm" style={{color: '#8a7a7d'}}>Мероприятий</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white mb-1">5 лет</p>
<p className="text-sm" style={{color: '#8a7a7d'}}>На рынке</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white mb-1">24/7</p>
<p className="text-sm" style={{color: '#8a7a7d'}}>Поддержка</p>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 sm:pb-20 max-w-7xl mr-auto ml-auto pt-12 sm:pt-16 pr-4 pb-12 sm:pb-16 pl-4 relative" id="models">
<div className="mx-auto max-w-4xl text-center px-2 sm:px-0">
<span className="inline-flex items-center gap-1.5 sm:gap-2 sm:px-4 sm:py-2 text-xs font-medium text-rose-300 bg-rose-500/15 border-rose-400/30 border rounded-full pt-1 pr-2.5 pb-1 pl-2.5" style={{}}>Профессиональные сотрудники</span>
<h2 className="mt-3 sm:mt-6 tracking-tight font-medium text-white text-xl sm:text-2xl md:text-4xl">
          Наши модели
        </h2>
<p className="mt-2 sm:mt-4 text-xs sm:text-base font-medium px-2 sm:px-0" style={{color: 'rgba(138, 122, 125, 0.9)'}}>
          Выберите идеальных моделей для вашего мероприятия. Более 50
          профессиональных моделей в нашей базе.
        </p>
<div className="mt-3 sm:mt-6">
<a className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-rose-900 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-rose-900/25 hover:bg-rose-800 transition-colors" href="#contact">
            Запросить каталог
            <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
<div className="relative mt-6 sm:mt-12">
<div className="mx-auto max-w-5xl overflow-hidden" style={{maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 50s linear infinite', willChange: 'transform'}}>

<div className="flex gap-1.5 sm:gap-3 flex-shrink-0 pr-1.5 sm:pr-3">
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48fd2030-abc5-49d1-b1f1-14d68378ce3a_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b5e4b7-b41e-437b-b6b7-156ab02a198b_800w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/465b04a6-29b4-4219-a40f-063a00bedda4_320w.png"/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a9d0c4b-06a6-4285-b00b-188e411ab410_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0e0128-b8b5-441c-a6b3-3bff7282b7ec_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a7b9b86-cfa4-4df1-9121-0ca8ec66c00a_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36ea5eb2-d1eb-4f0d-89d9-7308b47b7519_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5914e4f0-8e68-42b9-958a-68d54c3d507d_320w.webp" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01ad96fe-27f7-44f5-abe5-023fd8dbc4c8_320w.jpg" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5cbfb7d-12ce-49a9-afd2-aa77b66e1a7b_320w.webp" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80e4af96-6367-48f3-9f5f-30153856523e_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7302d4d3-75c4-4e4e-816a-cf73151f85c8_320w.png" style={{}}/>
</div>
</div>

<div className="flex gap-1.5 sm:gap-3 flex-shrink-0 pr-1.5 sm:pr-3">
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ee363d0-185e-47be-a5f4-fdefecab4ead_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0e0128-b8b5-441c-a6b3-3bff7282b7ec_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b5e4b7-b41e-437b-b6b7-156ab02a198b_800w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/208a43b8-6f90-42c9-8c75-4dbcb3535e18_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/465b04a6-29b4-4219-a40f-063a00bedda4_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1ca2bfbc-1a34-4415-afd6-b5d390568705_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/22eac1ee-2bf0-4a02-bfb1-35423ea81f69_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48fd2030-abc5-49d1-b1f1-14d68378ce3a_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3a9d0c4b-06a6-4285-b00b-188e411ab410_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0ee363d0-185e-47be-a5f4-fdefecab4ead_320w.png" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
<div className="rounded-lg sm:rounded-xl overflow-hidden ring-1 ring-rose-900/30 bg-rose-900/5 w-16 sm:w-24 md:w-28 aspect-[3/4]">
<img alt="Model" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bffdac5-3d8b-4fc6-93d5-5a64115aa9e5_320w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>
<div className="sm:mt-16 max-w-7xl mt-10 mr-auto ml-auto">
<h3 className="sm:mb-8 sm:text-xl md:text-2xl text-lg font-medium text-white tracking-tight text-center mb-6">
          Выберите моделей для заявки
        </h3>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-4 md:gap-6 gap-x-2 gap-y-2" id="models-gallery">
<div className="group overflow-hidden transition-all hover:border-rose-900/50 bg-[#0f0304]/80 border rounded-lg sm:rounded-xl relative backdrop-blur-sm" data-model-card="1" style={{borderColor: '#2a1215'}}>
<div className="aspect-[3/4] overflow-hidden relative">
<div className="model-slider-1 w-full h-full relative">
<img alt="Елена В." className="model-slide-1 transition-opacity duration-300 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/><img alt="Елена В." className="model-slide-1 transition-opacity duration-300 opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bcd86b8-f288-4a3c-a0a8-2247bd53f936_800w.jpg"/>
<img alt="Елена В." className="model-slide-1 transition-opacity duration-300 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bcd86b8-f288-4a3c-a0a8-2247bd53f936_800w.jpg"/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(1, 0)"></button>
<button className="model-dot-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(1, 1)"></button>
<button className="model-dot-1 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(1, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(1, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(1, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-1 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(1); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path className="" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="text-white font-medium mb-0.5 sm:mb-1 text-sm sm:text-base">Елена В.</h4>
<p className="text-xs sm:text-sm" style={{color: '#8a7a7d'}}>178 см • 84-60-90</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="2" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-2 w-full h-full relative">
<img alt="Анастасия К." className="model-slide-2 transition-opacity duration-300 opacity-100 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd0e0128-b8b5-441c-a6b3-3bff7282b7ec_800w.png"/>
<img alt="Анастасия К." className="model-slide-2 transition-opacity duration-300 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4210c00a-e1d8-4db0-b74c-0db000de617c_800w.png"/>
<img alt="Анастасия К." className="model-slide-2 transition-opacity duration-300 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/36827d45-38a1-4731-b8fa-f1c94ce9b4e3_800w.jpg"/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(2, 0)"></button>
<button className="model-dot-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(2, 1)"></button>
<button className="model-dot-2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(2, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(2, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(2, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-2 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(2); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Диана Р.</h4>
<p className="sm:text-sm text-xs" style={{color: '#8a7a7d'}}>172 см • размер XS,S</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="3" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-3 relative w-full h-full">
<img alt="Мила Р." className="model-slide-3 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="Мила Р." className="model-slide-3 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/208a43b8-6f90-42c9-8c75-4dbcb3535e18_800w.png" style={{}}/>
<img alt="Мила Р." className="model-slide-3 transition-opacity duration-300 opacity-0 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(3, 0)"></button>
<button className="model-dot-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(3, 1)"></button>
<button className="model-dot-3 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(3, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(3, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(3, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-3 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(3); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Ирина Т.</h4>
<p className="sm:text-sm text-xs" style={{color: '#8a7a7d'}}>175 см • 86-57-87</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="4" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-4 relative w-full h-full">
<img alt="Диана С." className="model-slide-4 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
<img alt="Диана С." className="model-slide-4 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<img alt="Диана С." className="model-slide-4 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b5e4b7-b41e-437b-b6b7-156ab02a198b_800w.png" style={{}}/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(4, 0)"></button>
<button className="model-dot-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(4, 1)"></button>
<button className="model-dot-4 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(4, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(4, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(4, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-4 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(4); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Каролина М.</h4>
<p className="sm:text-sm text-xs" style={{color: '#8a7a7d'}}>179 см • размер М</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="5" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-5 relative w-full h-full">
<img alt="София М." className="model-slide-5 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="София М." className="model-slide-5 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="София М." className="model-slide-5 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(5, 0)"></button>
<button className="model-dot-5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(5, 1)"></button>
<button className="model-dot-5 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(5, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(5, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(5, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-5 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(5); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Ксения М.</h4>
<p className="sm:text-sm text-xs" style={{color: 'rgb(138, 122, 125)'}}>181 см • 82-62-95</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="6" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-6 relative w-full h-full">
<img alt="Виктория Л." className="model-slide-6 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
<img alt="Виктория Л." className="model-slide-6 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<img absolute="" alt="Виктория Л." className="object-cover w-full h-auto" class6="" data-index="2" duration-300="" h-full="" inset-0="" object-cover="" opacity-0"="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" transition-opacity="" w-full=""/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(6, 0)"></button>
<button className="model-dot-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(6, 1)"></button>
<button className="model-dot-6 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(6, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(6, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(6, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-6 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(6); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>София Г.</h4>
<p className="sm:text-sm text-xs" style={{color: '#8a7a7d'}}>172 см • 85-62-92</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="7" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-7 relative w-full h-full">
<img alt="Алина Б." className="model-slide-7 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="Алина Б." className="model-slide-7 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<img alt="Алина Б." className="model-slide-7 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-7 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(7, 0)"></button>
<button className="model-dot-7 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(7, 1)"></button>
<button className="model-dot-7 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(7, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(7, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(7, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-7 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(7); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Виолетта З.</h4>
<p className="sm:text-sm text-xs" style={{color: 'rgb(138, 122, 125)'}}>179 см • 90-65-95</p>
</div>
</div>
<div className="group relative bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg sm:rounded-xl overflow-hidden transition-all hover:border-rose-900/50" data-model-card="8" style={{borderColor: '#2a1215'}}>
<div className="relative aspect-[3/4] overflow-hidden">
<div className="model-slider-8 relative w-full h-full">
<img alt="Кристина Н." className="model-slide-8 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-100" data-index="0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<img alt="Кристина Н." className="model-slide-8 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
<img alt="Кристина Н." className="model-slide-8 absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0" data-index="2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 z-10">
<button className="model-dot-8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white" data-dot="0" onclick="slideToImage(8, 0)"></button>
<button className="model-dot-8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="1" onclick="slideToImage(8, 1)"></button>
<button className="model-dot-8 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all bg-white/40" data-dot="2" onclick="slideToImage(8, 2)"></button>
</div>
<button className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="prevSlide(8, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-black/50 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70" onclick="nextSlide(8, 3)">
<svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="select-btn-8 absolute top-2 right-2 sm:top-3 sm:right-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all bg-black/50 text-white/70 hover:bg-black/70" onclick="toggleModelSelection(8); updateGallerySelection();" title="Выбрать модель">
<svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="p-2 sm:p-4">
<h4 className="sm:mb-1 sm:text-base text-sm font-medium text-white mb-0.5" style={{}}>Владлена К.</h4>
<p className="sm:text-sm text-xs" style={{color: 'rgb(138, 122, 125)'}}>170 см • 88-60-90</p>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-12 text-center">
<p className="mb-3 sm:mb-4 text-xs sm:text-sm" style={{color: '#8a7a7d'}}>
          Полная база моделей доступна по запросу
        </p>
<a className="inline-flex items-center gap-1.5 sm:gap-2 text-rose-400 hover:text-white transition-colors text-sm sm:text-base" href="#contact">
          Связаться с нами
          <svg aria-hidden="true" className="lucide lucide-arrow-right w-3 h-3 sm:w-4 sm:h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-rose-900 text-white px-6 py-3 rounded-full shadow-2xl z-40 flex items-center gap-4 transform translate-y-full opacity-0 transition-all duration-300" id="selection-counter">
<span>
        Выбрано моделей:
        <strong id="selected-count">0</strong>
</span>
<button className="text-white/70 hover:text-white transition-colors" onclick="clearSelection()">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="bg-white text-rose-900 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-rose-100 transition-colors" onclick="scrollToContact()">
        Оформить заявку
      </button>
</div>

<section className="border-y z-10 pt-24 pr-6 pb-24 pl-6 relative" id="services" style={{background: 'rgba(10, 2, 2, 0.5)', backdropFilter: 'blur(8px)', borderColor: 'rgba(42, 18, 21, 0.3)'}}>
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-medium text-white tracking-tight mb-4 sm:text-3xl text-xl sm:text-2xl">
            Наши услуги
          </h2>
<p className="max-w-2xl mx-auto" style={{color: '#8a7a7d'}}>
            Предоставляем профессиональный персонал для мероприятий любого
            формата.
            <br/>
<span className="text-rose-400 text-sm mt-2 block">
              Стоимость рассчитывается индивидуально, исходя из времени работы и
              локации
            </span>
</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 gap-3 sm:gap-6">
<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl hover:border-rose-900/50 transition-all group p-4 sm:p-8" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-center bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="font-medium text-white mb-3 text-lg sm:text-xl">Промо-акции</h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Профессиональные промоутеры для презентаций, дегустаций и
              рекламных кампаний
            </p>
</div>
<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-8 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover bg-center rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="text-xl font-medium text-white mb-3">Хостес</h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Встреча и регистрация гостей на форумах, конференциях и
              корпоративных мероприятиях
            </p>
</div>
<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-8 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-center bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Работа на стендах
            </h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Представление бренда на выставках и форумах с профессиональной
              подачей
            </p>
</div>
<div className="hover:border-rose-900/50 transition-all group bg-[#0f0304]/80 border rounded-2xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-center bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="text-xl font-medium text-white mb-3">Показы мод</h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Профессиональные модели для показов, презентаций коллекций и
              фэшн-мероприятий
            </p>
</div>
<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-8 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover bg-center rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="text-xl font-medium text-white mb-3">Фотосъёмки</h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Модели для коммерческих и рекламных фотосессий любой сложности
            </p>
</div>
<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-8 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-rose-900/30 transition-colors bg-rose-950/20 w-14 h-14 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52f0b4ff-b21a-4bfd-aa3b-51b62e03ed9c_320w.png)] bg-cover bg-center rounded-xl mb-6 items-center justify-center">
</div>
<h3 className="text-xl font-medium text-white mb-3">
              Индивидуальный проект
            </h3>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
              Реализация уникальных проектов под ваши требования с персональным
              подходом
            </p>
</div>
</div>

<div className="mt-12">
<h3 className="text-2xl font-medium text-white tracking-tight text-center mb-8">
            Дополнительные услуги
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl hover:border-rose-900/50 transition-all group p-4 sm:p-6" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-amber-900/30 transition-colors bg-center bg-[#000000] w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e363c30-f7b6-4721-b883-f4850c0c15dd_320w.png)] bg-cover rounded-xl mb-4 items-center justify-center">
</div>
<h4 className="text-lg font-medium text-white mb-2">Фотографы</h4>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
                Профессиональные фотографы для съёмки мероприятий, репортажей и
                коммерческих проектов
              </p>
</div>

<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-6 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-blue-900/30 transition-colors bg-center bg-blue-950/20 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e363c30-f7b6-4721-b883-f4850c0c15dd_320w.png)] bg-cover rounded-xl mb-4 items-center justify-center">
</div>
<h4 className="text-lg font-medium text-white mb-2">Видеографы</h4>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
                Видеосъёмка и монтаж роликов любой сложности — от репортажей до
                рекламных видео
              </p>
</div>

<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-6 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-pink-900/30 transition-colors bg-center bg-pink-950/20 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e363c30-f7b6-4721-b883-f4850c0c15dd_320w.png)] bg-cover rounded-xl mb-4 items-center justify-center">
</div>
<h4 className="text-lg font-medium text-white mb-2">
                Визажисты и стилисты
              </h4>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
                Профессиональный макияж, укладка и стилизация для съёмок и
                мероприятий
              </p>
</div>

<div className="bg-[#0f0304]/80 backdrop-blur-sm border rounded-2xl p-6 hover:border-rose-900/50 transition-all group" style={{borderColor: '#2a1215'}}>
<div className="flex group-hover:bg-emerald-900/30 transition-colors bg-center bg-emerald-900/20 w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e363c30-f7b6-4721-b883-f4850c0c15dd_320w.png)] bg-cover rounded-xl mb-4 items-center justify-center">
</div>
<h4 className="text-lg font-medium text-white mb-2">Трансфер</h4>
<p className="text-sm leading-relaxed" style={{color: '#8a7a7d'}}>
                Услуги трансфера любой категории — от эконом до премиум класса
                по всему побережью
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-medium text-white tracking-tight mb-4 text-2xl sm:text-3xl">
            Примеры работ
          </h2>
<p className="" style={{color: '#8a7a7d'}}>
            Наши модели на мероприятиях различного формата
          </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
<div className="aspect-square overflow-hidden cursor-pointer hover:border-rose-900/50 transition-all border rounded-xl" onclick="openLightbox('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1560439514-4e9645039924?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1531058020387-3be344556be6?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div className="aspect-square rounded-xl overflow-hidden border cursor-pointer hover:border-rose-900/50 transition-all" onclick="openLightbox('https://images.unsplash.com/photo-1559223607-a43c990c692c?q=80&amp;w=800&amp;auto=format&amp;fit=crop')" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}>
<img alt="Пример работы" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" style={{}}/>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 px-6" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-16">
<div className="">
<h2 className="font-medium text-white tracking-tight mb-6 text-2xl sm:text-3xl">
              О нашем агентстве
            </h2>
<div className="space-y-4 leading-relaxed" style={{color: '#8a7a7d'}}>
<p className="">
                Black Sea Models — ведущее модельное агентство на Черноморском
                побережье. Мы работаем с 2019 года и за это время провели более
                200 успешных мероприятий.
              </p>
<p className="">
                Наша база включает более 50 профессиональных моделей с опытом
                работы на мероприятиях различного уровня — от локальных
                промо-акций до международных форумов.
              </p>
<p className="">
                Мы гарантируем качество работы, пунктуальность и профессионализм
                каждой модели. Персональный менеджер сопровождает каждый проект
                от заявки до завершения.
              </p>
</div>
<div className="flex flex-wrap mt-8 gap-x-4 gap-y-4 gap-2 sm:gap-4">
<div className="flex items-center bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg gap-2 sm:gap-3 px-3 py-2 sm:px-4 sm:py-3" style={{borderColor: '#2a1215'}}>
<svg className="w-5 h-5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-white">Договор и акты</span>
</div>
<div className="flex items-center gap-3 bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg px-4 py-3" style={{borderColor: '#2a1215'}}>
<svg className="w-5 h-5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-white">Замена модели</span>
</div>
<div className="flex items-center gap-3 bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg px-4 py-3" style={{borderColor: '#2a1215'}}>
<svg className="w-5 h-5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-white">Обучение персонала</span>
</div>
<div className="flex items-center gap-3 bg-[#0f0304]/80 backdrop-blur-sm border rounded-lg px-4 py-3" style={{borderColor: '#2a1215'}}>
<svg className="w-5 h-5 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
<span className="text-sm text-white">Личный менеджер</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="" className="aspect-[3/4] object-cover border rounded-2xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}/>
<img alt="" className="aspect-[3/4] object-cover border rounded-2xl mt-8" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{borderColor: 'rgba(42, 18, 21, 0.5)'}}/>
</div>
</div>
</div>
</section>

<section className="z-10 border-t pt-24 pr-6 pb-24 pl-6 relative" id="contact" style={{background: 'rgba(10, 2, 2, 0.5)', backdropFilter: 'blur(8px)', borderColor: 'rgba(42, 18, 21, 0.3)'}}>
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<h2 className="font-medium text-white tracking-tight mb-4 text-2xl sm:text-3xl">
            Оставить заявку
          </h2>
<p className="" style={{color: '#8a7a7d'}}>
            Заполните форму и мы свяжемся свами в ближайшее время
          </p>
</div>

<div className="hidden mb-8" id="selected-models-wrapper">
<h4 className="text-white font-medium mb-4">Выбранные модели:</h4>
<div className="flex flex-wrap gap-3" id="selected-models-list"></div>
</div>

<div className="hidden text-center py-12" id="form-success-message">
<div className="w-20 h-20 bg-emerald-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
<svg className="text-emerald-400" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">
            Ваша заявка принята!
          </h3>
<p className="max-w-md mx-auto leading-relaxed" style={{color: '#8a7a7d'}}>
            Мы свяжемся с Вами в самое ближайшее время, работа по Вашему проекту
            уже началась.
          </p>
<button className="mt-8 inline-flex items-center gap-2 text-rose-400 hover:text-white transition-colors" onclick="resetContactForm()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
            Отправить ещё одну заявку
          </button>
</div>
<form className="space-y-4 sm:space-y-6" id="contact-form" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm text-white mb-2">Ваше имя *</label>
<input name="_subject" type="hidden" value="Новая заявка с сайта Black Sea Models"/>
<input name="_captcha" type="hidden" value="false"/>
<input name="_template" type="hidden" value="table"/>
<input id="selected-models-hidden" name="selected_models" type="hidden" value=""/>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors" name="name" placeholder="Иван Иванов" required="" style={{borderColor: '#2a1215'}} type="text"/>
</div>
<div>
<label className="block text-sm text-white mb-2">Телефон *</label>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors" name="phone" placeholder="+7 (999) 123-45-67" required="" style={{borderColor: '#2a1215'}} type="tel"/>
</div>
</div>
<div className="">
<label className="block text-sm text-white mb-2">Email</label>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors" name="email" placeholder="email@example.com" style={{borderColor: '#2a1215'}} type="email"/>
</div>
<div className="">
<label className="block text-sm text-white mb-2">Тип мероприятия</label>
<select className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-900 transition-colors" name="event_type" style={{borderColor: '#2a1215'}}>
<option value="">Выберите тип</option>
<option value="promo">Промо-акция</option>
<option value="hostess">Хостес</option>
<option value="exhibition">Выставка / Форум</option>
<option value="fashion">Показ мод</option>
<option value="photo">Фотосъёмка</option>
<option value="other">Другое</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-sm text-white mb-2">
                Дата мероприятия
              </label>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-900 transition-colors" name="date" style={{borderColor: '#2a1215'}} type="date"/>
</div>
<div>
<label className="block text-sm text-white mb-2">
                Количество моделей
              </label>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors" min="1" name="models_count" placeholder="1" style={{borderColor: '#2a1215'}} type="number"/>
</div>
</div>
<div className="">
<label className="block text-sm text-white mb-2">Комментарий</label>
<textarea className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors resize-none" name="comment" placeholder="Опишите ваше мероприятие..." rows="4" style={{borderColor: '#2a1215'}}></textarea>
</div>
<div className="flex items-start gap-3">
<input className="mt-1 accent-rose-900" id="privacy" name="privacy" required="" type="checkbox"/>
<label className="text-sm" htmlFor="privacy" style={{color: '#8a7a7d'}}>
              Я согласен с
              <button className="text-rose-400 hover:text-white transition-colors underline" onclick="openPrivacy()" type="button">
                политикой конфиденциальности
              </button>
</label>
</div>
<button className="w-full bg-gradient-to-r from-rose-700 to-rose-900 text-white font-medium py-4 rounded-lg hover:from-rose-600 hover:to-rose-800 transition-all shadow-lg shadow-rose-900/25" id="submit-btn" type="submit">
            Отправить заявку
          </button>
</form>
<div className="mt-12 grid grid-cols-1 md:grid-cols-3 text-center gap-3 sm:gap-6">
<a className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#0f0304]/80 border hover:border-rose-900/50 transition-all" href="tel:+79384929976" style={{borderColor: '#2a1215'}}>
<svg className="w-6 h-6 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<span className="text-white text-sm">+7 (938) 492-99-76</span>
</a>
<a className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#0f0304]/80 border hover:border-rose-900/50 transition-all" href="https://t.me/blackseamodels" style={{borderColor: '#2a1215'}} target="_blank">
<svg className="w-6 h-6 text-rose-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
<span className="text-white text-sm">Telegram</span>
</a>
<a className="flex flex-col items-center gap-2 hover:border-rose-900/50 transition-all bg-[#0f0304]/80 border rounded-lg pt-4 pr-4 pb-4 pl-4" href="https://wa.me/79384929976" style={{borderColor: '#2a1215'}} target="_blank">
<svg className="w-[24px] h-[24px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(251, 113, 133)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
</svg>
<span className="text-white text-sm">WhatsApp</span>
</a>
</div>
</div>

</section>

<footer className="relative z-10 border-t py-8 sm:py-12 px-4 sm:px-6" style={{borderColor: 'rgba(42, 18, 21, 0.3)'}}>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6 flex-wrap justify-center">
<div className="text-center md:text-left">
<p className="font-semibold text-white mb-1 text-base sm:text-lg">
              BLACK SEA MODELS
            </p>
<p className="text-sm" style={{color: '#8a7a7d'}}>
              Модельное агентство • Сочи
            </p>
</div>
<div className="flex items-center gap-6 text-sm" style={{color: '#8a7a7d'}}>
<button className="hover:text-white transition-colors" onclick="openPrivacy()">
              Политика конфиденциальности
            </button>
<button className="hover:text-white transition-colors flex gap-x-2 gap-y-2 items-center" onclick="openAdminLogin()">
<svg className="lucide lucide-settings" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
              Админ
            </button>
</div>
<p className="text-sm" style={{color: '#8a7a7d'}}>
            © 2024 Black Sea Models. Все права защищены.
          </p>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" id="lightbox">
<button className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors" onclick="closeLightbox()">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<img alt="" className="max-w-full max-h-[90vh] rounded-lg" id="lightbox-img" src=""/>
</div>


<div className="hidden fixed bottom-0 left-0 right-0 bg-[#0f0304] border-t p-4 z-40" id="cookie-banner" style={{borderColor: '#2a1215'}}>
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm" style={{color: '#8a7a7d'}}>
          Мы используем cookies для улучшения работы сайта.
        </p>
<button className="bg-rose-900 text-white px-6 py-2 rounded-lg text-sm hover:bg-rose-800 transition-colors" onclick="acceptCookies()">
          Принять
        </button>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" id="privacy-modal">
<div className="bg-[#0f0304] border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8" style={{borderColor: '#2a1215'}}>
<div className="flex justify-between items-center mb-6">
<h3 className="text-xl font-medium text-white">
            Политика конфиденциальности
          </h3>
<button className="text-[#8a7a7d] hover:text-white transition-colors" onclick="closePrivacy()">
<svg className="w-6 h-6" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
<div className="text-sm leading-relaxed space-y-4" style={{color: '#8a7a7d'}}>
<p>
            Настоящая Политика конфиденциальности определяет порядок обработки и
            защиты персональных данных пользователей сайта Black Sea Models.
          </p>
<p>
            Мы собираем информацию, которую вы предоставляете при заполнении
            форм на сайте: имя, телефон, email.
          </p>
<p>
            Собранная информация используется для связи с вами по вопросам
            сотрудничества.
          </p>
<p>
            Мы принимаем все необходимые меры для защиты ваших персональных
            данных.
          </p>
<p>
            По вопросам обработки персональных данных обращайтесь по телефону +7
            (938) 492-99-76.
          </p>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" id="admin-login-modal">
<div className="bg-[#0f0304] border rounded-2xl max-w-md w-full p-8" style={{borderColor: '#2a1215'}}>
<h3 className="text-xl font-medium text-white mb-6">
          Вход в панель администратора
        </h3>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900 transition-colors mb-4" id="admin-password" placeholder="Введите пароль" style={{borderColor: '#2a1215'}} type="password"/>
<div className="flex gap-4">
<button className="flex-1 bg-rose-900 text-white py-3 rounded-lg hover:bg-rose-800 transition-colors" onclick="loginAdmin()">
            Войти
          </button>
<button className="flex-1 bg-[#0a0202] border text-white py-3 rounded-lg hover:bg-[#2a1215] transition-colors" onclick="closeAdminLogin()" style={{borderColor: '#2a1215'}}>
            Отмена
          </button>
</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/95 z-50 overflow-y-auto" id="admin-panel">
<div className="max-w-5xl mx-auto p-6">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-medium text-white">Панель администратора</h2>
<button className="text-[#8a7a7d] hover:text-white transition-colors" onclick="closeAdminPanel()">
<svg className="w-8 h-8" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>

<div className="flex gap-2 mb-6 border-b" style={{borderColor: '#2a1215'}}>
<button className="admin-tab px-4 py-3 text-sm font-medium border-b-2 border-rose-600 text-white" id="tab-models" onclick="switchAdminTab('models')">
            Модели
          </button>
<button className="admin-tab px-4 py-3 text-sm font-medium border-b-2 border-transparent text-[#8a7a7d] hover:text-white" id="tab-site-images" onclick="switchAdminTab('site-images')">
            Изображения сайта
          </button>
</div>

<div className="admin-tab-content" id="admin-tab-models">
<button className="mb-6 bg-rose-900 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-colors flex items-center gap-2" onclick="openAddModel()">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Добавить модель
          </button>
<div className="space-y-4" id="admin-models-list"></div>
</div>

<div className="admin-tab-content hidden" id="admin-tab-site-images">
<p className="text-[#8a7a7d] mb-6">
            Загрузите изображения с компьютера или вставьте прямую ссылку.
            Поддерживаемые форматы: JPG, PNG, WebP.
          </p>

<div className="mb-8">
<h4 className="text-white font-medium mb-4">Главный баннер (Hero)</h4>
<div className="grid grid-cols-1 gap-4">
<div className="site-image-item bg-[#0a0202] border rounded-lg p-4" style={{borderColor: '#2a1215'}}>
<div className="flex items-start gap-4">
<div className="relative group">
<img className="w-24 h-16 object-cover rounded-lg" id="preview-hero" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center cursor-pointer">
<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input accept="image/*" className="hidden" onchange="handleImageUpload(this, 'hero')" type="file"/>
</label>
</div>
<div className="flex-1">
<p className="text-white text-sm mb-2">Фон секции Hero</p>
<div className="flex gap-2">
<input className="flex-1 bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" id="url-hero" onchange="updateSiteImage('hero', this.value)" style={{borderColor: '#2a1215'}} type="url" value="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<label className="bg-rose-900/50 text-rose-200 px-4 py-2 rounded-lg hover:bg-rose-900/70 transition-colors cursor-pointer flex items-center gap-2 text-sm">
<svg className="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
                        Загрузить
                        <input accept="image/*" className="hidden" onchange="handleImageUpload(this, 'hero')" type="file"/>
</label>
</div>
<p className="text-xs text-[#8a7a7d] mt-2">
                      Рекомендуемый размер: 1600x900 px
                    </p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6 p-4 bg-emerald-900/20 border border-emerald-900/30 rounded-xl">
<div className="flex items-start gap-3">
<svg className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div>
<p className="text-emerald-300 text-sm font-medium mb-1">
                  Загрузка с компьютера
                </p>
<p className="text-emerald-200/70 text-xs">
                  Нажмите на иконку загрузки рядом с полем URL или наведите на
                  превью изображения. Поддерживаются форматы JPG, PNG, WebP до
                  10MB.
                </p>
</div>
</div>
</div>
<div className="mb-8">
<h4 className="text-white font-medium mb-4">Главный баннер (Hero)</h4>
<div className="grid grid-cols-1 gap-4">
<div className="site-image-item bg-[#0a0202] border rounded-lg p-4" style={{borderColor: '#2a1215'}}>
<div className="flex items-center gap-4">
<img className="w-24 h-16 object-cover rounded-lg" id="preview-hero" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
<div className="flex-1">
<p className="text-white text-sm mb-2">Фон секции Hero</p>
<input className="w-full bg-[#050101] border rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-rose-900" id="url-hero" onchange="updateSiteImage('hero', this.value)" style={{borderColor: '#2a1215'}} type="url" value="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="mb-8">
<h4 className="text-white font-medium mb-4">Бегущая строка моделей</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="marquee-images-list"></div>
</div>

<div className="mb-8">
<h4 className="text-white font-medium mb-4">Портфолио</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="portfolio-images-list"></div>
</div>

<div className="mb-8">
<h4 className="text-white font-medium mb-4">О нас</h4>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="about-images-list"></div>
</div>
<button className="bg-rose-900 text-white px-6 py-3 rounded-lg hover:bg-rose-800 transition-colors flex items-center gap-2" onclick="saveSiteImages()">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
            Сохранить все изменения
          </button>

</div>
</div>
</div>

<div className="hidden fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" id="model-form-modal">
<div className="bg-[#0f0304] border rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8" style={{borderColor: '#2a1215'}}>
<h3 className="text-xl font-medium text-white mb-6" id="model-form-title">
          Добавить модель
        </h3>
<div className="space-y-4">
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-name" placeholder="Имя модели *" style={{borderColor: '#2a1215'}} type="text"/>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-height" placeholder="Рост (см) *" style={{borderColor: '#2a1215'}} type="number"/>
<select className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-rose-900" id="model-hair" style={{borderColor: '#2a1215'}}>
<option value="blonde">Блонд</option>
<option value="brunette">Брюнет</option>
<option value="red">Рыжий</option>
</select>
<div className="grid grid-cols-3 gap-4">
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-bust" placeholder="Грудь" style={{borderColor: '#2a1215'}} type="number"/>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-waist" placeholder="Талия" style={{borderColor: '#2a1215'}} type="number"/>
<input className="w-full bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-hips" placeholder="Бёдра" style={{borderColor: '#2a1215'}} type="number"/>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-img1" placeholder="URL фото 1 *" style={{borderColor: '#2a1215'}} type="url"/>
<label className="bg-rose-900/50 text-rose-200 px-4 py-3 rounded-lg hover:bg-rose-900/70 transition-colors cursor-pointer flex items-center gap-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input accept="image/*" className="hidden" onchange="handleImageUpload(this, 'model', 1)" type="file"/>
</label>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-img2" placeholder="URL фото 2" style={{borderColor: '#2a1215'}} type="url"/>
<label className="bg-rose-900/50 text-rose-200 px-4 py-3 rounded-lg hover:bg-rose-900/70 transition-colors cursor-pointer flex items-center gap-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input accept="image/*" className="hidden" onchange="handleImageUpload(this, 'model', 2)" type="file"/>
</label>
</div>
<div className="flex gap-2">
<input className="flex-1 bg-[#0a0202] border rounded-lg px-4 py-3 text-white placeholder-[#8a7a7d] focus:outline-none focus:border-rose-900" id="model-img3" placeholder="URL фото 3" style={{borderColor: '#2a1215'}} type="url"/>
<label className="bg-rose-900/50 text-rose-200 px-4 py-3 rounded-lg hover:bg-rose-900/70 transition-colors cursor-pointer flex items-center gap-2">
<svg className="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<input accept="image/*" className="hidden" onchange="handleImageUpload(this, 'model', 3)" type="file"/>
</label>
</div>
</div>
<div className="flex gap-4 mt-6">
<button className="flex-1 bg-rose-900 text-white py-3 rounded-lg hover:bg-rose-800 transition-colors" onclick="saveModel()">
            Сохранить
          </button>
<button className="flex-1 bg-[#0a0202] border text-white py-3 rounded-lg hover:bg-[#2a1215] transition-colors" onclick="closeModelForm()" style={{borderColor: '#2a1215'}}>
            Отмена
          </button>
</div>
</div>
</div>




    </>
  );
}
