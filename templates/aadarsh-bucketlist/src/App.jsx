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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('checklist-container');
            const progressBar = document.getElementById('progress-bar');
            const progressText = document.getElementById('progress-text');
            const quickAddInput = document.getElementById('quick-add-input');
            const quickAddBtn = document.getElementById('quick-add-btn');

            let idCounter = 100; // Generate unique IDs for new items

            function updateProgress() {
                const checkboxes = container.querySelectorAll('.checklist-checkbox');
                const total = checkboxes.length;
                const checked = container.querySelectorAll('.checklist-checkbox:checked').length;
                const percentage = total === 0 ? 0 : Math.round((checked / total) * 100);
                
                progressBar.style.width = percentage + '%';
                progressText.textContent = percentage + '%';
            }

            function createItemHTML(text) {
                const id = 'item-' + (idCounter++);
                return `
                    <div class="checklist-item group relative flex items-center gap-3 p-2 md:p-3 rounded-2xl hover:bg-stone-50 transition-all duration-300 origin-top" style="opacity: 0; transform: translateY(-10px) scale(0.98);">
                        <input type="checkbox" class="checklist-checkbox peer sr-only" id="${id}">
                        <label for="${id}" class="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer">
                            <iconify-icon icon="solar:check-read-linear" class="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" style="stroke-width: 1.5;"></iconify-icon>
                        </label>
                        <input type="text" value="${text}" class="item-text w-full bg-transparent border border-transparent hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none rounded-lg px-2 py-1.5 -ml-2 text-sm md:text-base text-stone-800 font-medium transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text">
                        <button class="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0" aria-label="Delete">
                            <iconify-icon icon="solar:trash-bin-trash-linear" style="stroke-width: 1.5; font-size: 1.125rem;"></iconify-icon>
                        </button>
                    </div>
                `;
            }

            function attachListeners(item) {
                const checkbox = item.querySelector('.checklist-checkbox');
                const textInput = item.querySelector('.item-text');
                const deleteBtn = item.querySelector('.delete-btn');

                // Toggle update
                checkbox.addEventListener('change', updateProgress);

                // Edit behavior
                textInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        textInput.blur();
                    }
                });

                // Auto-delete if user clears text completely
                textInput.addEventListener('blur', () => {
                    if (textInput.value.trim() === '') {
                        deleteBtn.click();
                    }
                });

                // Fluid Delete Animation
                deleteBtn.addEventListener('click', () => {
                    item.style.height = item.offsetHeight + 'px';
                    item.style.overflow = 'hidden';
                    item.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                    
                    // Trigger reflow
                    item.offsetHeight; 

                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    item.style.height = '0px';
                    item.style.paddingTop = '0px';
                    item.style.paddingBottom = '0px';
                    item.style.marginTop = '0px';
                    item.style.marginBottom = '0px';
                    
                    setTimeout(() => {
                        item.remove();
                        updateProgress();
                    }, 300);
                });
            }

            function addNewItem() {
                const text = quickAddInput.value.trim();
                if (!text) return;

                const temp = document.createElement('div');
                temp.innerHTML = createItemHTML(text);
                const newItem = temp.firstElementChild;

                container.appendChild(newItem);
                attachListeners(newItem);

                // Entry animation
                requestAnimationFrame(() => {
                    newItem.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
                    newItem.style.opacity = '1';
                    newItem.style.transform = 'translateY(0) scale(1)';
                });

                quickAddInput.value = '';
                updateProgress();
            }

            // Setup listeners for initially loaded items
            const existingItems = container.querySelectorAll('.checklist-item');
            existingItems.forEach(item => {
                attachListeners(item);
            });

            // Quick add event bindings
            quickAddBtn.addEventListener('click', addNewItem);
            quickAddInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.
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
      

<nav className="flex w-full max-w-6xl mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 items-center justify-between">
<a className="uppercase hover:opacity-70 transition-opacity text-lg font-medium text-stone-900 tracking-tighter" href="#">Aadarsh</a>
<div className="flex items-center gap-4 text-stone-400">
<a aria-label="About" className="hover:text-stone-800 transition-colors" href="#">
<iconify-icon className="" icon="solar:info-circle-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Settings" className="hover:text-stone-800 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</nav>

<header className="text-center w-full max-w-3xl mr-auto ml-auto pt-20 pr-6 pb-16 pl-6">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900 mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>
            Life in Progress
        </h1>
<p className="md:text-lg leading-relaxed text-base font-light text-stone-500 max-w-xl mr-auto ml-auto">Hi, I’m Aadarsh — this is my life in progress.
A personal space where I document the things I’ve done, the experiences I’m still chasing, and the small moments in between that shape who I’m becoming. It’s part checklist, part journal — a quiet reflection of my journey, one step at a time.</p>
</header>

<main className="flex-grow w-full max-w-6xl mr-auto ml-auto pr-6 pb-32 pl-6">

<section className="md:p-8 bg-white w-full max-w-2xl border-stone-100/80 border rounded-3xl mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]">
<div className="mb-8">
<div className="flex mb-4 items-center justify-between">
<h2 className="text-xl font-medium text-stone-900 tracking-tight" style={{fontFamily: '"Playfair Display", serif'}}>Journey Progress</h2>
<span className="text-xs font-medium text-stone-500 tracking-wider" id="progress-text">50%</span>
</div>

<div className="h-1.5 w-full bg-stone-100 rounded-full overflow-hidden">
<div className="h-full bg-stone-800 rounded-full transition-all duration-700 ease-out" id="progress-bar" style={{width: '50%'}}></div>
</div>
</div>

<div className="space-y-1" id="checklist-container">

<div className="checklist-item group flex gap-3 md:p-3 hover:bg-stone-50 transition-all duration-300 rounded-2xl pt-2 pr-2 pb-2 pl-2 relative gap-x-3 gap-y-3 items-center">
<input checked="" className="checklist-checkbox peer sr-only" id="item-1" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-1">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input =""="" className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2" type="text" value="Sunrise Treks of BLR"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon className="" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>

<div className="checklist-item group relative flex items-center gap-3 p-2 md:p-3 rounded-2xl hover:bg-stone-50 transition-all duration-300 -multi">
<input checked="" className="checklist-checkbox peer sr-only" id="item-2" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-2">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2" type="text" value="Sleep in terrace a whole night"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>

<div className="checklist-item group relative flex items-center gap-3 p-2 md:p-3 rounded-2xl hover:bg-stone-50 transition-all duration-300">
<input checked="" className="checklist-checkbox peer sr-only" id="item-3" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-3">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2 -multi" type="text" value="Exploring Dosas of BLR"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>

<div className="checklist-item group flex gap-3 md:p-3 hover:bg-stone-50 transition-all duration-300 rounded-2xl pt-2 pr-2 pb-2 pl-2 relative gap-x-3 gap-y-3 items-center -multi">
<input className="checklist-checkbox peer sr-only" id="item-4" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-4">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2" type="text" value="Eating ice cream in terrace"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon className="" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>

<div className="checklist-item group relative flex items-center gap-3 p-2 md:p-3 rounded-2xl hover:bg-stone-50 transition-all duration-300">
<input className="checklist-checkbox peer sr-only" id="item-5" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-5">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2 -multi" type="text" value="Star-gazing"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon className="" icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>

<div className="checklist-item group relative flex items-center gap-3 p-2 md:p-3 rounded-2xl hover:bg-stone-50 transition-all duration-300">
<input className="checklist-checkbox peer sr-only" id="item-6" type="checkbox"/>
<label className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full border border-stone-300 bg-white peer-checked:bg-stone-800 peer-checked:border-stone-800 transition-all duration-300 active:scale-90 shadow-sm cursor-pointer" htmlFor="item-6">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300 ease-out text-sm" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</label>
<input className="item-text hover:border-stone-200/50 focus:border-stone-200 focus:bg-white focus:shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] outline-none -ml-2 md:text-base transition-all duration-300 peer-checked:text-stone-400 peer-checked:line-through peer-checked:font-light cursor-text text-sm font-medium text-stone-800 bg-transparent w-full border-transparent border rounded-lg pt-1.5 pr-2 pb-1.5 pl-2" type="text" value="Learn PATIENCE"/>
<button aria-label="Delete" className="delete-btn opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-stone-300 hover:text-red-500 focus:outline-none p-1.5 rounded-lg hover:bg-red-50 flex-shrink-0">
<iconify-icon icon="solar:trash-bin-trash-linear" style={{strokeWidth: '1.5', fontSize: '1.125rem'}}></iconify-icon>
</button>
</div>
</div>

<div className="relative flex items-center gap-3 p-2 mt-4 rounded-xl bg-stone-50/80 border border-stone-100 focus-within:bg-white focus-within:border-stone-200 focus-within:shadow-[0_2px_10px_-4px_rgba(0,0,0,0.06)] transition-all duration-300 group">
<div className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full text-stone-400 group-focus-within:text-stone-800 transition-colors ml-1">
<iconify-icon className="" height="20" icon="solar:add-circle-linear" style={{strokeWidth: '1.5', fontSize: '1.25rem', color: 'rgb(127, 121, 118)'}} width="20"></iconify-icon>
</div>
<input className="border-none outline-none md:text-base placeholder:text-stone-400 placeholder:font-light text-sm font-medium text-stone-800 bg-transparent w-full pt-1 pb-1" id="quick-add-input" placeholder="Add a new memory or dream..." type="text"/>
<button className="opacity-0 translate-x-2 pointer-events-none group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-300 text-xs font-medium bg-stone-900 text-white px-3.5 py-1.5 rounded-lg hover:bg-stone-800 active:scale-95 whitespace-nowrap mr-1" id="quick-add-btn">
                    Add
                </button>
</div>
</section>

<input checked="" className="peer/completed hidden" id="view-completed" name="view-state" type="radio"/>
<input className="peer/pending hidden" id="view-pending" name="view-state" type="radio"/>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-stone-100/80 p-1 rounded-full border border-stone-200/50 backdrop-blur-sm shadow-sm">
<label className="cursor-pointer transition-all duration-300 ease-out select-none peer-checked/completed:bg-white peer-checked/completed:text-stone-800 peer-checked/completed:shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:text-stone-700 text-sm font-medium text-stone-500 rounded-full pt-2 pr-6 pb-2 pl-6" htmlFor="view-completed">
                    Memories
                </label>
<label className="cursor-pointer transition-all duration-300 ease-out select-none peer-checked/pending:bg-white peer-checked/pending:text-stone-800 peer-checked/pending:shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:text-stone-700 text-sm font-medium text-stone-500 rounded-full pt-2 pr-6 pb-2 pl-6" htmlFor="view-pending">
                    Yet to Unfold
                </label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 peer-checked/completed:[&amp;_.item-pending]:hidden peer-checked/pending:[&amp;_.item-completed]:hidden">

<article className="item-completed group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<img alt="Northern Lights" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4bca2628-a64d-40fd-a66b-e5f67ccf8c58_800w.jpg"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-50 text-stone-600 text-xs font-medium tracking-wide border border-stone-100">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            Felt
                        </span>
<span className="text-xs font-light text-stone-400">Bangalore, 2025 - present</span>
</div>
<h2 className="md:text-2xl text-xl font-medium text-stone-800 tracking-tight mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Exploring the best Dosas</h2>
<p className="leading-relaxed text-sm font-light text-stone-500">Crisp edges, soft centers, and that perfect hit of chutney.
Went from one darshini to another, chasing the kind of dosa that stays in your memory longer than the meal itself.</p>
</div>
</article>

<article className="item-completed group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<img alt="Coastal Road" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3d0a59e7-43f6-4885-8ce4-1b643e4ffdcc_800w.jpg"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-stone-50 text-stone-600 text-xs font-medium tracking-wide border border-stone-100">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            Felt
                        </span>
<span className="text-xs font-light text-stone-400">Karnataka, 2025 - present</span>
</div>
<h2 className="md:text-2xl text-xl font-medium text-stone-800 tracking-tight mb-3" style={{fontFamily: '"Playfair Display", serif'}}>Exploring the Sunrises</h2>
<p className="leading-relaxed text-sm font-light text-stone-500">Watched the sky slowly wake up while everything else stayed quiet.
For a few minutes, it felt like the world paused—just light, air, and no urgency to be anywhere.</p>
</div>
</article>

<article className="item-completed group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<img alt="Kyoto Street" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79625999-c287-4bb5-a901-35a2283e1b9b_800w.jpg"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex gap-2 mb-4 gap-x-2 gap-y-2 items-center">
<span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 tracking-wide bg-stone-50 border-stone-100 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5">
<iconify-icon icon="solar:check-circle-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            Felt
                        </span>
<span className="text-xs font-light text-stone-400">India , 2023 - present</span>
</div>
<h2 className="md:text-2xl text-xl font-medium text-stone-800 tracking-tight mb-3" style={{fontFamily: '"Playfair Display", serif'}}>Un-Planned rides</h2>
<p className="leading-relaxed text-sm font-light text-stone-500">Nights that didn’t need a plan. Just talking, sitting, and letting time pass.
The kind of moments that don’t feel big—but stay with you anyway.</p>
</div>
</article>

<article className="item-pending group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
<img alt="Pottery Hands" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/37c86d09-8642-42c8-b705-262b08ca78f6_800w.webp"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-transparent text-stone-500 border border-stone-200 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:hourglass-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            Someday
                        </span>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Sky-diving</h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">Free fall before the fear can catch up.
A moment of complete surrender—just wind, speed, and nothing to hold onto but trust.</p>
</div>
</article>

<article className="item-pending group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
<img alt="Solar Eclipse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29c866fe-88dc-4c86-820f-5c7b61d95654_800w.jpg"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-transparent text-stone-500 border border-stone-200 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:hourglass-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            Someday
                        </span>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Rappelling in Maharashtra</h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">Stepping off the edge on purpose, with nothing but a rope and focus.
                    Somewhere between control and fear, learning to trust every move downward.</p>
</div>
</article>

<article className="item-pending group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-100/80 shadow-[0_2px_8px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_-8px_rgba(0,0,0,0.08)] transition-all duration-500 ease-out hover:-translate-y-1">
<div className="relative h-64 overflow-hidden bg-stone-100">
<div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0"></div>
<img alt="Old Books" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/625ce60f-c7b1-4dd4-9c9f-f3b29e2c1e74_800w.png"/>
</div>
<div className="p-6 md:p-8 flex flex-col flex-grow">
<div className="flex items-center gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-transparent text-stone-500 border border-stone-200 text-xs font-medium tracking-wide">
<iconify-icon icon="solar:hourglass-linear" style={{strokeWidth: '1.5', fontSize: '0.875rem'}}></iconify-icon>
                            In Progress
                        </span>
</div>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-stone-800 mb-3" style={{fontFamily: '\'Playfair Display\', serif'}}>Mastering the Art of Patience</h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">Learning to slow down without feeling left behind.
Sitting with uncertainty, letting things unfold in their own time instead of forcing outcomes.</p>
</div>
</article>
</div>
</main>

<footer className="w-full border-t border-stone-200/50 mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400 font-light">
<p>© 2025 Life in Progress. A personal archive.</p>
<div className="flex items-center gap-6">
<a className="hover:text-stone-800 transition-colors" href="#">Journal</a>
<a className="hover:text-stone-800 transition-colors" href="#">Curated by Me</a>
</div>
</div>
</footer>


    </>
  );
}
