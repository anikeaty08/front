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



// Data Simulation
const productData = {
'prod_1': {
name: "降噪耳机 700",
breadcrumbs: ["电子产品", "音频设备", "头戴式耳机"],
status: "已发布",
id: "prod_8823x",
sku: "NC-700-BLK-US",
ean: "6925281928371", // New Field
slug: "noise-cancelling-700",
countries: ["CN", "US", "JP", "DE"], // New Field
publishTime: "2023-10-24T14:30", // New Field
desc: "使用 NC 700 体验世界级的降噪效果。配备无与伦比的麦克风系统，确保清晰的通话和语音控制。",
image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=200&auto=format&fit=crop",
active: true,
specs: [
{ name: "电池续航", type: "Text", value: "最长 20 小时" },
{ name: "蓝牙版本", type: "Number", value: "5.0" },
{ name: "包装清单", type: "RichText", value: "<ul><li>耳机</li><li>充电线</li><li>说明书</li></ul>" } // Modified example
],
faqs: [
{ id: 1, q: "是否包含便携包？", a: "是的，耳机随附高级硬质便携包、音频线和 USB-C 充电线。" },
{ id: 2, q: "它支持多点连接吗？", a: "支持，您可以同时连接两个设备并在它们之间无缝切换。" }
]
},
'prod_2': {
name: "无线蓝牙耳机 Pro",
breadcrumbs: ["电子产品", "音频设备", "入耳式耳机"],
status: "草稿",
id: "prod_9941y",
sku: "WE-PRO-WHT",
ean: "6925281921122",
slug: "wireless-earbuds-pro",
countries: ["CN"],
publishTime: "",
desc: "真正无线的自由，具备主动降噪和通透模式。全天候电池续航。",
image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=200&auto=format&fit=crop",
active: false,
specs: [{ name: "防水等级", type: "Text", value: "IPX4" }],
faqs: []
},
'prod_3': {
name: "智能运动手表 5",
breadcrumbs: ["电子产品", "智能穿戴", "智能手表"],
status: "已发布",
id: "prod_2255z",
sku: "FW-5-SLV",
ean: "6925281925566",
slug: "fitness-watch-5",
countries: ["CN", "UK"],
publishTime: "2023-09-15T09:00",
desc: "精准追踪您的健身目标。具备心率监测、GPS 和睡眠追踪功能。",
image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=200&auto=format&fit=crop",
active: false,
specs: [{ name: "屏幕尺寸", type: "Number", value: "44mm" }],
faqs: []
}
};
let currentProdId = 'prod_1';
let editingFaqId = null;
let activeNodeElement = null;
function init() {
selectProduct('prod_1');
}
function switchTab(tabId) {
const contents = document.querySelectorAll('.tab-content');
contents.forEach(content => content.classList.add('hidden'));
document.getElementById('content-' + tabId).classList.remove('hidden');
const buttons = document.querySelectorAll('.tab-btn');
buttons.forEach(btn => {
btn.classList.remove('border-indigo-600', 'text-indigo-600');
btn.classList.add('border-transparent', 'text-gray-500');
const badge = btn.querySelector('.badge');
if(badge) {
badge.classList.remove('bg-indigo-100', 'text-indigo-700');
badge.classList.add('bg-gray-100', 'text-gray-600');
}
});
const activeBtn = document.getElementById('btn-' + tabId);
activeBtn.classList.remove('border-transparent', 'text-gray-500');
activeBtn.classList.add('border-indigo-600', 'text-indigo-600');
const activeBadge = activeBtn.querySelector('.badge');
if(activeBadge) {
activeBadge.classList.remove('bg-gray-100', 'text-gray-600');
activeBadge.classList.add('bg-indigo-100', 'text-indigo-700');
}
}
function toggleFolder(folderId, iconId) {
const folder = document.getElementById(folderId);
const icon = document.getElementById(iconId);
if (folder.classList.contains('hidden')) {
folder.classList.remove('hidden');
icon.classList.add('rotate-90');
icon.nextElementSibling.setAttribute('data-icon', 'lucide:folder-open');
} else {
folder.classList.add('hidden');
icon.classList.remove('rotate-90');
icon.nextElementSibling.setAttribute('data-icon', 'lucide:folder');
}
}
function selectProduct(prodId) {
currentProdId = prodId;
const data = productData[prodId];
if (!data) return;
// Sidebar UI
document.querySelectorAll('.product-item').forEach(el => {
el.classList.remove('bg-indigo-50', 'text-indigo-700');
el.classList.add('text-gray-600', 'hover:bg-gray-50');
el.querySelector('.prod-icon').classList.remove('text-indigo-500');
el.querySelector('.prod-icon').classList.add('text-gray-400');
});
const activeItem = document.getElementById(`item-${prodId}`);
if(activeItem) {
activeItem.classList.remove('text-gray-600', 'hover:bg-gray-50');
activeItem.classList.add('bg-indigo-50', 'text-indigo-700');
activeItem.querySelector('.prod-icon').classList.remove('text-gray-400');
activeItem.querySelector('.prod-icon').classList.add('text-indigo-500');
}
// Header & Info
const breadcrumbHtml = data.breadcrumbs.map((item, index) => {
const isLast = index === data.breadcrumbs.length - 1;
return `<span>${item}</span>` +
(isLast ? '' : '<span class="iconify" data-icon="lucide:chevron-right" data-width="10"></span>');
}).join('');
document.getElementById('display-breadcrumbs').innerHTML = breadcrumbHtml;
document.getElementById('display-title').innerText = data.name;
document.getElementById('display-id').innerText = `ID: ${data.id}`;
const statusEl = document.getElementById('display-status');
statusEl.innerText = data.status;
statusEl.className = `text-[10px] font-medium px-1.5 py-0.5 rounded-full border uppercase tracking-wide ${
data.status === '已发布'
? 'bg-emerald-100 text-emerald-700 border-emerald-200'
: 'bg-orange-100 text-orange-700 border-orange-200'
}`;
// Overview Inputs
document.getElementById('input-name').value = data.name;
document.getElementById('input-sku').value = data.sku;
document.getElementById('input-ean').value = data.ean || '';
document.getElementById('input-slug').value = data.slug;
document.getElementById('input-desc').value = data.desc;
document.getElementById('input-publish-time').value = data.publishTime || '';
document.getElementById('display-image').src = data.image;
// Render Countries Badges
renderCountries(data.countries || []);
renderSpecs();
renderFaqs();
updateJsonView();
}
function renderCountries(codes) {
const container = document.getElementById('countries-container');
if(!container) return;
container.innerHTML = '';
codes.forEach(code => {
const badge = document.createElement('div');
badge.className = "flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs border border-gray-200";
badge.innerHTML = `<span>${code}</span><button class="text-gray-400 hover:text-red-500"><span class="iconify" data-icon="lucide:x" data-width="12"></span></button>`;
container.appendChild(badge);
});
// Add button
const addBtn = document.createElement('button');
addBtn.className = "text-xs text-indigo-600 font-medium px-2 py-1 hover:bg-indigo-50 rounded transition-colors flex items-center gap-1";
addBtn.innerHTML = `<span class="iconify" data-icon="lucide:plus" data-width="12"></span> 添加`;
container.appendChild(addBtn);
}
function updateJsonView() {
const data = productData[currentProdId];
const jsonCode = {
id: data.id,
object: "product",
active: data.active,
name: data.name,
description: data.desc.substring(0, 40) + "...",
sku: data.sku,
ean: data.ean,
countries: data.countries,
publish_at: data.publishTime,
specs: data.specs,
};
document.getElementById('code-display').innerHTML = JSON.stringify(jsonCode, null, 2);
}
// --- Specs Logic with Rich Text Support ---
function renderSpecs() {
const specs = productData[currentProdId].specs || [];
const tbody = document.getElementById('specs-body');
tbody.innerHTML = '';
specs.forEach((spec, index) => {
const tr = document.createElement('tr');
tr.className = "group hover:bg-gray-50/50 transition-colors align-top";
// Value Input based on Type
let valueInput = '';
if(spec.type === 'RichText') {
valueInput = `<div class="relative w-full"><div class="absolute right-0 -top-6"><button class="text-[10px] text-indigo-600 flex items-center gap-0.5 hover:bg-indigo-50 px-1 py-0.5 rounded"><span class="iconify" data-icon="lucide:languages" data-width="10"></span> 翻译</button></div><textarea onchange="updateSpec(${index}, 'value', this.value)" class="bg-white border border-gray-200 p-2 text-sm text-gray-600 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 w-full rounded font-mono text-xs h-20 resize-none placeholder:text-gray-300" placeholder="<p>HTML content...</p>">${spec.value}</textarea></div>`;
} else {
valueInput = `<div class="flex items-center gap-2 group/input"><input type="text" value="${spec.value}" onchange="updateSpec(${index}, 'value', this.value)" class="bg-transparent border-none p-0 text-sm text-gray-600 focus:ring-0 w-full hover:bg-gray-100/50 rounded px-1 transition-colors"><button class="opacity-0 group-hover/input:opacity-100 text-indigo-600 p-1 rounded hover:bg-indigo-50 transition-all" title="翻译"><span class="iconify" data-icon="lucide:languages" data-width="12"></span></button></div>`;
}
tr.innerHTML = `
<td class="px-5 py-3">
<div class="flex items-center justify-between group/name">
<input type="text" value="${spec.name}" onchange="updateSpec(${index}, 'name', this.value)" class="bg-transparent border-none p-0 text-sm text-gray-900 font-medium focus:ring-0 w-full hover:bg-gray-100/50 rounded px-1 transition-colors">
<button class="opacity-0 group-hover/name:opacity-100 text-indigo-600 p-1 rounded hover:bg-indigo-50 transition-all" title="翻译名称">
<span class="iconify" data-icon="lucide:languages" data-width="12"></span>
</button>
</div>
</td>
<td class="px-5 py-3">
<select onchange="updateSpec(${index}, 'type', this.value)" class="bg-transparent border-none text-[10px] font-medium p-0 focus:ring-0 cursor-pointer text-gray-500 hover:text-indigo-600">
<option value="Text" ${spec.type === 'Text' ? 'selected' : ''}>文本 (Text)</option>
<option value="Number" ${spec.type === 'Number' ? 'selected' : ''}>数字 (Number)</option>
<option value="RichText" ${spec.type === 'RichText' ? 'selected' : ''}>富文本 (Rich Text)</option>
</select>
</td>
<td class="px-5 py-3 text-gray-600">${valueInput}</td>
<td class="px-5 py-3 text-right opacity-0 group-hover:opacity-100 transition-opacity">
<button onclick="deleteSpec(${index})" class="text-gray-400 hover:text-red-500 p-1"><span class="iconify" data-icon="lucide:trash-2" data-width="14"></span></button>
</td>
`;
tbody.appendChild(tr);
});
const specCount = document.getElementById('badge-specs');
if(specCount) specCount.innerText = specs.length;
}
function addSpec() { productData[currentProdId].specs.push({ name: "新参数", type: "Text", value: "-" }); renderSpecs(); updateJsonView(); }
function deleteSpec(index) { productData[currentProdId].specs.splice(index, 1); renderSpecs(); updateJsonView(); }
function updateSpec(index, field, val) { productData[currentProdId].specs[index][field] = val; renderSpecs(); updateJsonView(); }
// --- FAQ Logic ---
function renderFaqs() {
const faqs = productData[currentProdId].faqs || [];
const container = document.getElementById('faq-container');
container.innerHTML = '';
faqs.forEach((faq) => {
const isEditing = editingFaqId === faq.id;
const div = document.createElement('div');
div.className = `border border-gray-200 rounded-md transition-all bg-white ${isEditing ? 'ring-2 ring-indigo-500/10 border-indigo-500' : 'hover:border-indigo-200 hover:shadow-sm p-3 group'}`;
if (isEditing) {
div.innerHTML = `<div class="bg-gray-50/50 border-b border-gray-100 px-3 py-2 flex gap-1 items-center rounded-t-md"><span class="text-xs font-semibold text-gray-500 mr-2">编辑回答:</span><button class="p-1 text-gray-500 hover:bg-gray-200 rounded"><span class="iconify" data-icon="lucide:bold" data-width="14"></span></button><div class="w-px h-3 bg-gray-300 mx-1"></div><button class="flex items-center gap-1 text-indigo-600 bg-indigo-50 hover:bg-indigo-100 px-2 py-0.5 rounded text-[10px]"><span class="iconify" data-icon="lucide:languages" data-width="10"></span> 翻译内容</button><button onclick="deleteFaq(${faq.id})" class="text-red-500 hover:bg-red-50 p-1 rounded text-xs ml-auto flex items-center gap-1"><span class="iconify" data-icon="lucide:trash-2" data-width="12"></span> 删除</button></div><div class="p-3 space-y-3"><div><label class="block text-[10px] uppercase font-bold text-gray-400 mb-1">问题</label><input type="text" id="edit-q-${faq.id}" value="${faq.q}" class="w-full text-sm font-medium text-gray-900 border-b border-gray-200 pb-1 focus:outline-none focus:border-indigo-500"></div><div><label class="block text-[10px] uppercase font-bold text-gray-400 mb-1">回答</label><textarea id="edit-a-${faq.id}" class="w-full text-sm text-gray-600 focus:outline-none resize-none leading-relaxed min-h-[80px]">${faq.a}</textarea></div><div class="flex justify-end gap-2 pt-1"><button onclick="cancelEditFaq()" class="px-3 py-1.5 text-xs font-medium text-gray-500 hover:bg-gray-100 rounded-md">取消</button><button onclick="saveFaq(${faq.id})" class="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">保存</button></div></div>`;
} else {
div.innerHTML = `<div class="flex justify-between items-start gap-2 mb-2"><div class="flex items-center gap-2 text-xs font-medium text-gray-900"><span class="text-indigo-500 bg-indigo-50 px-1.5 py-0.5 rounded text-[10px]">问</span>${faq.q}</div><div class="opacity-0 group-hover:opacity-100"><button onclick="editFaq(${faq.id})" class="p-1 text-gray-400 hover:text-indigo-600 rounded hover:bg-indigo-50"><span class="iconify" data-icon="lucide:pencil" data-width="14"></span></button></div></div><div class="text-xs text-gray-500 pl-8 leading-relaxed relative"><span class="absolute left-1 top-0 text-[10px] font-bold text-gray-300 select-none">答</span>${faq.a}</div>`;
}
container.appendChild(div);
});
const faqCount = document.getElementById('badge-qa');
if(faqCount) faqCount.innerText = faqs.length;
}
function addFaq() { const newId = Date.now(); productData[currentProdId].faqs.push({ id: newId, q: "新问题", a: "" }); editingFaqId = newId; renderFaqs(); }
function editFaq(id) { editingFaqId = id; renderFaqs(); }
function cancelEditFaq() { editingFaqId = null; renderFaqs(); }
function saveFaq(id) { const q = document.getElementById(`edit-q-${id}`).value; const a = document.getElementById(`edit-a-${id}`).value; const faq = productData[currentProdId].faqs.find(f => f.id === id); if (faq) { faq.q = q; faq.a = a; } editingFaqId = null; renderFaqs(); }
function deleteFaq(id) { const idx = productData[currentProdId].faqs.findIndex(f => f.id === id); if (idx > -1) productData[currentProdId].faqs.splice(idx, 1); editingFaqId = null; renderFaqs(); }
// --- NEW: Node Editing Modal Logic ---
function openNodeModal(elementId, name, type) {
activeNodeElement = elementId;
document.getElementById('node-modal').classList.remove('hidden');
setTimeout(() => {
document.getElementById('modal-panel').classList.remove('modal-enter');
document.getElementById('modal-panel').classList.add('modal-enter-active');
}, 10);
document.getElementById('node-input-name').value = name;
document.getElementById('node-type-label').innerText = type === 'folder' ? '目录节点' : '商品节点';
document.getElementById('modal-title').innerText = `编辑${type === 'folder' ? '目录' : '商品'}`;
}
function closeNodeModal() {
document.getElementById('modal-panel').classList.remove('modal-enter-active');
document.getElementById('modal-panel').classList.add('modal-enter');
setTimeout(() => {
document.getElementById('node-modal').classList.add('hidden');
activeNodeElement = null;
}, 200);
}
function saveNodeChanges() {
const newName = document.getElementById('node-input-name').value;
if (activeNodeElement && newName) {
const container = document.getElementById(activeNodeElement);
if(container) {
const textSpan = container.querySelector('.node-text');
if(textSpan) textSpan.innerText = newName;
}
showToast("节点信息已更新");
}
closeNodeModal();
}
function deleteNode() {
if(activeNodeElement) {
const element = document.getElementById(activeNodeElement);
element.style.opacity = '0';
setTimeout(() => {
element.remove();
showToast("节点已删除");
}, 200);
}
closeNodeModal();
}
// --- NEW: Save Toast Logic ---
function triggerSave(isPublish) {
const btn = event.currentTarget;
const originalText = btn.innerHTML;
btn.innerHTML = `<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="14"></span> ${isPublish ? '发布中...' : '保存中...'}`;
setTimeout(() => {
btn.innerHTML = originalText;
const message = isPublish ? "商品已保存并发布上线" : "更改已保存到草稿";
showToast(message);
if(isPublish) {
const statusEl = document.getElementById('display-status');
statusEl.innerText = "已发布";
statusEl.className = 'text-[10px] font-medium px-1.5 py-0.5 rounded-full border uppercase tracking-wide bg-emerald-100 text-emerald-700 border-emerald-200';
productData[currentProdId].status = "已发布";
}
}, 800);
}
function showToast(message) {
const toast = document.getElementById('toast-notification');
const msgEl = document.getElementById('toast-message');
msgEl.innerText = message;
toast.classList.remove('hidden');
void toast.offsetWidth;
toast.classList.remove('translate-y-4', 'opacity-0');
setTimeout(() => {
toast.classList.add('translate-y-4', 'opacity-0');
setTimeout(() => {
toast.classList.add('hidden');
}, 300);
}, 3000);
}
// Mock translation toggle (Visual only)
function toggleLanguage() {
const btn = document.getElementById('lang-switch-btn');
btn.classList.add('bg-indigo-50', 'text-indigo-600');
setTimeout(() => {
showToast("UI 语言已切换 (模拟)");
btn.classList.remove('bg-indigo-50', 'text-indigo-600');
}, 500);
}
function triggerTranslate(fieldName) {
showToast(`已开启 "${fieldName}" 的翻译编辑器`);
}
window.onload = init;

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
      

<aside className="w-72 bg-white border-r border-gray-200 flex flex-col flex-shrink-0 z-20">
<div className="h-14 border-b border-gray-200 flex items-center justify-between px-4 sticky top-0 bg-white/95 backdrop-blur-sm">
<div className="flex items-center gap-2 text-gray-800">
<span className="iconify text-indigo-600" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="20"></span>
<span className="font-semibold tracking-tight text-sm">产品目录</span>
</div>
<div className="flex items-center gap-1">
<button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-100 transition-colors" id="lang-switch-btn" onclick="toggleLanguage()" title="Switch UI Language">
<span className="iconify" data-icon="lucide:globe" data-strokeWidth="1.5" data-width="16"></span>
</button>
<button className="text-gray-400 hover:text-gray-600 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
<span className="iconify" data-icon="lucide:plus" data-strokeWidth="1.5" data-width="16"></span>
</button>
</div>
</div>
<div className="p-3 border-b border-gray-100">
<div className="relative">
<span className="absolute left-2.5 top-2 text-gray-400">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5" data-width="14"></span>
</span>
<input className="w-full bg-gray-50 border border-gray-200 text-xs rounded-md pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:border-indigo-500/50 transition-all placeholder:text-gray-400" placeholder="筛选节点..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-2">
<nav className="space-y-0.5 text-sm select-none">
<div className="group/root">
<div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 transition-colors group relative" id="node-electronics">
<div className="flex items-center gap-1.5 flex-1 cursor-pointer" onclick="toggleFolder('folder-electronics', 'icon-electronics')">
<span className="iconify text-gray-400 icon-transition rotate-90" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" id="icon-electronics"></span>
<span className="iconify text-indigo-500" data-icon="lucide:folder-open" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate font-medium node-text">电子产品</span>
</div>
</div>
<div className="pl-4 space-y-0.5 mt-0.5 border-l border-gray-100 ml-2.5" id="folder-electronics">
<div id="node-smartphones-container">
<div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 group relative" id="node-smartphones">
<div className="flex items-center gap-1.5 flex-1 cursor-pointer" onclick="toggleFolder('folder-smartphones', 'icon-smartphones')">
<span className="iconify text-gray-400 icon-transition" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" id="icon-smartphones"></span>
<span className="iconify text-gray-400" data-icon="lucide:folder" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 node-text">智能手机</span>
</div>
</div>
<div className="hidden pl-4 space-y-0.5 mt-0.5 border-l border-gray-100 ml-2.5" id="folder-smartphones">
<div className="px-2 py-1 text-xs text-gray-400 italic">暂无商品</div>
</div>
</div>
<div>
<div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 group relative" id="node-audio">
<div className="flex items-center gap-1.5 flex-1 cursor-pointer" onclick="toggleFolder('folder-audio', 'icon-audio')">
<span className="iconify text-gray-400 icon-transition rotate-90" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" id="icon-audio"></span>
<span className="iconify text-gray-400" data-icon="lucide:folder-open" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 node-text">音频设备</span>
</div>
</div>
<div className="pl-4 space-y-0.5 mt-0.5 border-l border-gray-100 ml-2.5" id="folder-audio">
<div className="product-item flex items-center gap-1.5 px-2 py-1.5 rounded-md bg-indigo-50 text-indigo-700 cursor-pointer transition-colors group relative" id="item-prod_1">
<div className="flex items-center gap-1.5 flex-1" onclick="selectProduct('prod_1')">
<span className="w-3.5"></span>
<span className="prod-icon iconify text-indigo-500" data-icon="lucide:box" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 font-medium node-text">降噪耳机 700</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600 p-1 rounded hover:bg-indigo-50 transition-all absolute right-2" onclick="event.stopPropagation(); openNodeModal('item-prod_1', '降噪耳机 700', 'product')">
<span className="iconify" data-icon="lucide:pencil" data-width="12"></span>
</button>
</div>
<div className="product-item flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 cursor-pointer transition-colors group relative" id="item-prod_2">
<div className="flex items-center gap-1.5 flex-1" onclick="selectProduct('prod_2')">
<span className="w-3.5"></span>
<span className="prod-icon iconify text-gray-400" data-icon="lucide:box" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 font-medium node-text">无线蓝牙耳机 Pro</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600 p-1 rounded hover:bg-indigo-50 transition-all absolute right-2" onclick="event.stopPropagation(); openNodeModal('item-prod_2', '无线蓝牙耳机 Pro', 'product')">
<span className="iconify" data-icon="lucide:pencil" data-width="12"></span>
</button>
</div>
</div>
</div>
<div id="node-wearables-container">
<div className="flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 group relative" id="node-wearables">
<div className="flex items-center gap-1.5 flex-1 cursor-pointer" onclick="toggleFolder('folder-wearables', 'icon-wearables')">
<span className="iconify text-gray-400 icon-transition" data-icon="lucide:chevron-right" data-strokeWidth="1.5" data-width="14" id="icon-wearables"></span>
<span className="iconify text-gray-400" data-icon="lucide:folder" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 node-text">智能穿戴</span>
</div>
</div>
<div className="hidden pl-4 space-y-0.5 mt-0.5 border-l border-gray-100 ml-2.5" id="folder-wearables">
<div className="product-item flex items-center gap-1.5 px-2 py-1.5 rounded-md hover:bg-gray-50 text-gray-600 cursor-pointer transition-colors group relative" id="item-prod_3">
<div className="flex items-center gap-1.5 flex-1" onclick="selectProduct('prod_3')">
<span className="w-3.5"></span>
<span className="prod-icon iconify text-gray-400" data-icon="lucide:box" data-strokeWidth="1.5" data-width="16"></span>
<span className="truncate flex-1 font-medium node-text">智能运动手表 5</span>
</div>
<button className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-indigo-600 p-1 rounded hover:bg-indigo-50 transition-all absolute right-2" onclick="event.stopPropagation(); openNodeModal('item-prod_3', '智能运动手表 5', 'product')">
<span className="iconify" data-icon="lucide:pencil" data-width="12"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</nav>
</div>

<div className="p-3 border-t border-gray-200 bg-gray-50/50">
<button className="w-full flex items-center justify-center gap-2 text-xs font-medium text-gray-600 bg-white border border-gray-200 py-1.5 rounded-md shadow-sm hover:bg-gray-50 transition-all" onclick="openNodeModal(null, 'Main Catalog', 'folder')">
<span className="iconify" data-icon="lucide:settings-2" data-strokeWidth="1.5" data-width="14"></span>
                目录设置
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white sticky top-0 z-10">
<div className="flex items-center gap-4">
<div className="flex flex-col">
<nav className="flex items-center gap-1 text-xs text-gray-400 mb-0.5" id="display-breadcrumbs">

</nav>
<div className="flex items-center gap-2">
<h1 className="text-lg font-semibold tracking-tight text-gray-900 leading-none" id="display-title">商品名称</h1>
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-medium px-1.5 py-0.5 rounded-full border border-emerald-200 uppercase tracking-wide" id="display-status">已发布</span>
<span className="flex items-center gap-1 text-[10px] text-gray-400 ml-2">
<span className="iconify" data-icon="lucide:cloud" data-width="12"></span>
                            已同步
                        </span>
</div>
</div>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-gray-400 font-mono hidden sm:inline-block" id="display-id">ID: prod_xxx</span>
<div className="h-4 w-px bg-gray-200 mx-1 hidden sm:block"></div>
<button className="text-gray-400 hover:text-red-600 p-1.5 rounded-md hover:bg-red-50 transition-colors" title="Delete Product">
<span className="iconify" data-icon="lucide:trash-2" data-strokeWidth="1.5" data-width="18"></span>
</button>
<div className="h-4 w-px bg-gray-200 mx-1"></div>
<button className="text-gray-500 hover:text-gray-700 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">预览</button>
<button className="text-gray-500 hover:text-gray-700 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">取消</button>
<button className="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-sm font-medium px-4 py-1.5 rounded-md shadow-sm flex items-center gap-2 transition-colors" onclick="triggerSave(false)">
                    仅保存
                </button>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-1.5 rounded-md shadow-sm flex items-center gap-2 transition-colors" onclick="triggerSave(true)">
<span className="iconify" data-icon="lucide:save" data-width="14"></span>
                    保存并发布
                </button>
</div>
</header>

<div className="border-b border-gray-200 px-6 bg-white sticky top-14 z-10">
<div className="flex gap-8 -mb-px">
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-indigo-600 text-indigo-600 transition-all focus:outline-none" id="btn-overview" onclick="switchTab('overview')">
<span className="iconify" data-icon="lucide:layout-dashboard" data-width="16"></span>
<span className="text-sm font-medium">概览</span>
</button>
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-all focus:outline-none" id="btn-specs" onclick="switchTab('specs')">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="16"></span>
<span className="text-sm font-medium">规格参数</span>
<span className="badge bg-gray-100 text-gray-600 group-hover:bg-gray-200 text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center transition-colors" id="badge-specs">3</span>
</button>
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-all focus:outline-none" id="btn-qa" onclick="switchTab('qa')">
<span className="iconify" data-icon="lucide:message-circle-question" data-width="16"></span>
<span className="text-sm font-medium">常见问题</span>
<span className="badge bg-gray-100 text-gray-600 group-hover:bg-gray-200 text-[10px] font-semibold px-1.5 py-0.5 rounded-full min-w-[1.25rem] text-center transition-colors" id="badge-qa">2</span>
</button>
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-all focus:outline-none" id="btn-guide" onclick="switchTab('guide')">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
<span className="text-sm font-medium">视频指南</span>
</button>
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-all focus:outline-none" id="btn-code" onclick="switchTab('code')">
<span className="iconify" data-icon="lucide:code-2" data-width="16"></span>
<span className="text-sm font-medium">JSON代码</span>
</button>
<button className="tab-btn group flex items-center gap-2 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-800 transition-all focus:outline-none" id="btn-history" onclick="switchTab('history')">
<span className="iconify" data-icon="lucide:history" data-width="16"></span>
<span className="text-sm font-medium">变更历史</span>
</button>
</div>
</div>

<div className="flex-1 overflow-y-auto bg-gray-50/50 p-6">
<div className="max-w-5xl mx-auto pb-20">

<div className="tab-content space-y-8 animate-in fade-in duration-300" id="content-overview">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">基本信息</h2>
</div>
<button className="text-gray-400 hover:text-gray-600">
<span className="iconify" data-icon="lucide:more-vertical" data-width="16"></span>
</button>
</div>
<div className="p-5 grid grid-cols-12 gap-6">

<div className="col-span-12 md:col-span-4 lg:col-span-3">
<label className="block text-xs font-medium text-gray-700 mb-2">商品图片</label>
<div className="group relative aspect-square bg-gray-50 rounded-lg border border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50/10 transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden">
<div className="text-center p-4">
<div className="bg-white p-2 rounded-full shadow-sm inline-flex mb-2">
<span className="iconify text-gray-400 group-hover:text-indigo-500 transition-colors" data-icon="lucide:image-plus" data-strokeWidth="1.5" data-width="20"></span>
</div>
<p className="text-xs text-gray-500">点击上传或拖拽图片</p>
</div>
</div>
<div className="mt-3 grid grid-cols-4 gap-2">
<div className="aspect-square rounded-md border border-indigo-500 bg-gray-100 overflow-hidden relative cursor-pointer ring-2 ring-offset-1 ring-indigo-500/20">
<img alt="Thumb" className="w-full h-full object-cover" id="display-image" src=""/>
</div>
<div className="aspect-square rounded-md border border-gray-200 bg-gray-50 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-gray-400">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</div>
</div>
</div>

<div className="col-span-12 md:col-span-8 lg:col-span-9 space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="col-span-2">
<div className="flex justify-between mb-1.5">
<label className="block text-xs font-medium text-gray-700">商品名称</label>
<button className="text-xs text-indigo-600 flex items-center gap-1 hover:bg-indigo-50 px-1.5 py-0.5 rounded transition-colors" onclick="triggerTranslate('Name')">
<span className="iconify" data-icon="lucide:languages" data-width="12"></span> 添加翻译
                                            </button>
</div>
<input className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 placeholder:text-gray-400 transition-all shadow-sm" id="input-name" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">SKU (库存单位)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-gray-400 iconify" data-icon="lucide:barcode" data-width="14"></span>
<input className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 font-mono transition-all shadow-sm" id="input-sku" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">EAN (国际商品编码)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-gray-400 iconify" data-icon="lucide:scan-barcode" data-width="14"></span>
<input className="w-full rounded-md border border-gray-200 pl-9 pr-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 font-mono transition-all shadow-sm" id="input-ean" placeholder="692..." type="text"/>
</div>
</div>
<div className="col-span-2">
<label className="block text-xs font-medium text-gray-700 mb-1.5">Slug (链接别名)</label>
<div className="flex rounded-md shadow-sm">
<span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500 text-xs">store.com/</span>
<input className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" id="input-slug" type="text"/>
</div>
</div>
</div>
<div>
<div className="flex justify-between mb-1.5">
<label className="block text-xs font-medium text-gray-700">商品描述 (富文本)</label>
<button className="text-xs text-indigo-600 flex items-center gap-1 hover:bg-indigo-50 px-1.5 py-0.5 rounded transition-colors" onclick="triggerTranslate('Description')">
<span className="iconify" data-icon="lucide:languages" data-width="12"></span> 添加翻译
                                        </button>
</div>
<div className="border border-gray-200 rounded-md shadow-sm overflow-hidden group focus-within:ring-2 focus-within:ring-indigo-500/10 focus-within:border-indigo-500 transition-all">
<div className="bg-gray-50/50 border-b border-gray-100 px-2 py-1.5 flex gap-1 items-center">
<button className="p-1 text-gray-500 hover:bg-gray-200 rounded"><span className="iconify" data-icon="lucide:bold" data-width="14"></span></button>
<button className="p-1 text-gray-500 hover:bg-gray-200 rounded"><span className="iconify" data-icon="lucide:italic" data-width="14"></span></button>
<div className="w-px h-3 bg-gray-300 mx-1"></div>
<button className="p-1 text-gray-500 hover:bg-gray-200 rounded"><span className="iconify" data-icon="lucide:list" data-width="14"></span></button>
<button className="p-1 text-gray-500 hover:bg-gray-200 rounded"><span className="iconify" data-icon="lucide:link" data-width="14"></span></button>
</div>
<textarea className="w-full p-3 text-sm text-gray-600 focus:outline-none min-h-[100px] resize-none leading-relaxed" id="input-desc" placeholder="输入商品描述..."></textarea>
</div>
</div>
<div className="grid grid-cols-2 gap-5 pt-2 border-t border-gray-50">

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">销售地区 (Available Countries)</label>
<div className="w-full rounded-md border border-gray-200 px-2 py-1.5 min-h-[38px] flex flex-wrap gap-2 items-center bg-white shadow-sm focus-within:ring-2 focus-within:ring-indigo-500/10 focus-within:border-indigo-500" id="countries-container">

</div>
<p className="text-[10px] text-gray-400 mt-1">留空则全球销售。</p>
</div>

<div>
<label className="block text-xs font-medium text-gray-700 mb-1.5">发布时间 (Publish Time)</label>
<div className="relative">
<input className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 shadow-sm font-sans" id="input-publish-time" type="datetime-local"/>
</div>
<p className="text-[10px] text-gray-400 mt-1">设置自动上架时间。</p>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="tab-content hidden animate-in fade-in duration-300" id="content-specs">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:sliders-horizontal" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">技术参数</h2>
</div>
<button className="text-indigo-600 hover:text-indigo-700 text-xs font-medium flex items-center gap-1 px-2 py-1 hover:bg-indigo-50 rounded-md transition-colors" onclick="addSpec()">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
                                添加参数
                            </button>
</div>
<div className="p-0 overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-gray-50/50 border-b border-gray-100 text-xs uppercase tracking-wide text-gray-500">
<th className="px-5 py-3 font-medium w-1/4">参数名称</th>
<th className="px-5 py-3 font-medium w-1/4">值类型</th>
<th className="px-5 py-3 font-medium w-1/3">参数值</th>
<th className="px-5 py-3 font-medium w-16 text-right">操作</th>
</tr>
</thead>
<tbody className="text-sm divide-y divide-gray-50" id="specs-body"></tbody>
</table>
</div>
</section>
</div>

<div className="tab-content hidden animate-in fade-in duration-300" id="content-qa">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:message-circle-question" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">常见问题管理</h2>
</div>
<button className="text-gray-400 hover:text-gray-600" onclick="addFaq()"><span className="iconify" data-icon="lucide:plus" data-width="16"></span></button>
</div>
<div className="p-5 space-y-4">
<div className="space-y-4" id="faq-container"></div>
<button className="w-full border border-dashed border-gray-300 rounded-md p-2 text-xs text-gray-500 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/10 transition-all flex items-center justify-center gap-2" onclick="addFaq()">
<span className="iconify" data-icon="lucide:plus-circle" data-width="14"></span>
                                起草新问题
                            </button>
</div>
</section>
</div>

<div className="tab-content hidden animate-in fade-in duration-300" id="content-guide">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden flex flex-col h-full">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:monitor-play" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">教程视频</h2>
</div>
<button className="text-gray-400 hover:text-gray-600"><span className="iconify" data-icon="lucide:plus" data-width="16"></span></button>
</div>
<div className="p-5 grid grid-cols-3 gap-4">
<div className="group cursor-pointer">
<div className="aspect-video bg-gray-100 rounded-md border border-gray-200 relative overflow-hidden mb-2 group-hover:border-indigo-300 transition-all">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:play" data-width="14" style={{marginLeft: '2px'}}></span>
</div>
</div>
<img alt="Video thumb" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] px-1 rounded">02:14</div>
</div>
<div className="flex justify-between items-start">
<h3 className="text-xs font-medium text-gray-800 leading-tight group-hover:text-indigo-600">快速入门指南</h3>
<button className="text-gray-300 hover:text-indigo-500" onclick="triggerTranslate('Video Title')"><span className="iconify" data-icon="lucide:languages" data-width="10"></span></button>
</div>
<p className="text-[10px] text-gray-400 mt-0.5">2天前更新</p>
</div>
<div className="aspect-video border border-dashed border-gray-300 rounded-md flex flex-col items-center justify-center text-gray-400 hover:text-indigo-600 hover:border-indigo-400 hover:bg-indigo-50/10 cursor-pointer transition-all gap-1">
<span className="iconify" data-icon="lucide:upload-cloud" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-[10px] font-medium">添加视频</span>
</div>
</div>
</section>
</div>

<div className="tab-content hidden animate-in fade-in duration-300" id="content-code">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden h-[calc(100vh-280px)] flex flex-col">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">JSON 数据展示</h2>
</div>
<div className="flex items-center gap-2">
<button className="text-gray-500 hover:text-indigo-600 text-xs font-medium px-2 py-1 rounded hover:bg-gray-100 transition-colors flex items-center gap-1">
<span className="iconify" data-icon="lucide:copy" data-width="12"></span> 复制
                                </button>
</div>
</div>
<div className="flex-1 overflow-auto bg-[#0d1117] p-4 text-xs font-mono">
<pre className="text-gray-300 leading-relaxed"><code id="code-display"></code></pre>
</div>
</section>
</div>

<div className="tab-content hidden animate-in fade-in duration-300" id="content-history">
<section className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
<div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
<div className="flex items-center gap-2">
<span className="iconify text-gray-400" data-icon="lucide:history" data-strokeWidth="1.5" data-width="18"></span>
<h2 className="text-sm font-semibold text-gray-900">变更日志</h2>
</div>
<div className="flex items-center gap-2">
<button className="text-xs text-gray-500 hover:text-gray-800 font-medium">导出 CSV</button>
</div>
</div>
<div className="p-6">
<div className="relative pl-6 border-l border-gray-200 space-y-8">
<div className="relative">
<div className="absolute -left-[31px] bg-white border border-gray-200 p-1 rounded-full">
<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
<div className="text-sm font-medium text-gray-900">参数更新</div>
<div className="text-[10px] text-gray-400 font-mono">10月24日, 14:32</div>
</div>
<p className="text-xs text-gray-500">添加了新参数: <span className="font-medium text-gray-800">包装清单 (富文本)</span>。</p>
</div>
</div>
</div>
</section>
</div>
</div>
</div>
</main>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-50 hidden" id="node-modal" role="dialog">
<div className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity" onclick="closeNodeModal()"></div>
<div className="absolute top-1/2 left-1/2 w-full max-w-sm bg-white rounded-lg shadow-xl border border-gray-100 p-6 modal-enter transform transition-all duration-200 ease-out origin-center" id="modal-panel">
<div className="flex items-start justify-between mb-4">
<h3 className="text-sm font-semibold text-gray-900" id="modal-title">编辑节点</h3>
<button className="text-gray-400 hover:text-gray-500" onclick="closeNodeModal()">
<span className="iconify" data-icon="lucide:x" data-width="16"></span>
</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">名称</label>
<input className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500/10 focus:border-indigo-500 transition-all" id="node-input-name" placeholder="输入名称" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-700 mb-1">节点类型</label>
<div className="inline-flex items-center px-2 py-1 rounded-md bg-gray-100 text-xs text-gray-600 font-medium" id="node-type-label">目录节点</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
<button className="text-red-500 hover:text-red-700 text-xs font-medium flex items-center gap-1 px-2 py-1.5 hover:bg-red-50 rounded-md transition-colors" onclick="deleteNode()">
<span className="iconify" data-icon="lucide:trash-2" data-width="14"></span>
                    删除节点
                </button>
<div className="flex gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100 rounded-md transition-colors" onclick="closeNodeModal()">取消</button>
<button className="px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm transition-colors" onclick="saveNodeChanges()">保存</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-50 transform transition-all duration-300 translate-y-4 opacity-0 hidden" id="toast-notification">
<div className="bg-gray-900 text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-3 min-w-[300px]">
<div className="text-emerald-400">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="20"></span>
</div>
<div className="flex-1">
<h4 className="text-sm font-medium">操作成功</h4>
<p className="text-xs text-gray-400 mt-0.5" id="toast-message">更改已保存</p>
</div>
<button className="text-gray-500 hover:text-white transition-colors" onclick="this.parentElement.parentElement.classList.add('hidden')">
<span className="iconify" data-icon="lucide:x" data-width="14"></span>
</button>
</div>
</div>

    </>
  );
}
