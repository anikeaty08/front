import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Configuration ---
        const STORAGE_KEY = 'overlaybox_db_v2';
        
        // Initial Default Data (If storage is empty)
        const defaultData = [
            {
                id: 1,
                title: "Plastic Texture Pack 01",
                price: 599,
                src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
                type: "image"
            },
            {
                id: 2,
                title: "Grunge Film Grain",
                price: 350,
                src: "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=1000&auto=format&fit=crop",
                type: "image"
            },
            {
                id: 3,
                title: "Abstract Light Leaks",
                price: 800,
                src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
                type: "image"
            }
        ];

        // --- State Management ---
        let isAdmin = false;
        let products = [];

        // --- Initialization ---
        function initApp() {
            const stored = localStorage.getItem(STORAGE_KEY);
            if (!stored) {
                products = [...defaultData];
                saveToStorage();
            } else {
                try {
                    products = JSON.parse(stored);
                } catch(e) {
                    products = [...defaultData];
                    console.error("Storage corrupted, resetting.");
                }
            }

            const grid = document.getElementById('gallery-grid');
            grid.innerHTML = ''; 
            if(products.length === 0) {
                document.getElementById('empty-state').classList.remove('hidden');
            } else {
                products.forEach(p => {
                    renderGridItem(p);
                });
            }
            
            lucide.createIcons();
        }

        function saveToStorage() {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
            } catch (e) {
                alert("Storage full. Image might be too large for local browser storage.");
            }
        }

        // --- UI Rendering ---
        function renderGridItem(product, prepend = false) {
            const grid = document.getElementById('gallery-grid');
            const div = document.createElement('div');
            const deleteBtnClass = isAdmin ? "flex" : "hidden";
            
            div.className = "group relative animate-[fadeIn_0.5s_ease-out]";
            div.id = `item-${product.id}`;
            
            // Interaction: Click opens details
            div.onclick = function() { openProduct(product.title, product.price, product.src, product.type); };
            
            let mediaHtml = '';
            if (product.type === 'video') {
                mediaHtml = `<video src="${product.src}" autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"></video>`;
            } else {
                mediaHtml = `<img src="${product.src}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100">`;
            }

            div.innerHTML = `
                <div class="aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 bg-neutral-900 relative">
                     <!-- Delete Button -->
                     <button onclick="deleteItem(event, ${product.id})" class="delete-btn ${deleteBtnClass} absolute top-3 left-3 z-30 bg-red-500 text-white w-8 h-8 rounded-full items-center justify-center hover:bg-red-600 hover:scale-105 transition-all shadow-lg border border-red-400/30">
                        <i data-lucide="trash-2" class="w-4 h-4"></i>
                    </button>

                    <div class="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                    ${mediaHtml}
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                    
                    <!-- Expand/Fullscreen Button (Stops propagation to not open details modal) -->
                    <button onclick="openFullScreen(event, '${product.src}', '${product.type}')" class="absolute bottom-3 right-3 p-2 bg-black/50 hover:bg-white text-white hover:text-black rounded-full backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 z-20 transform hover:scale-110 border border-white/10">
                        <i data-lucide="expand" class="w-4 h-4"></i>
                    </button>

                     <div class="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <div class="bg-black/50 backdrop-blur border border-white/10 rounded-full p-2 flex items-center justify-center">
                            <i data-lucide="info" class="text-white w-4 h-4"></i>
                        </div>
                    </div>
                </div>
                <div class="mt-3 flex justify-between items-start">
                    <div>
                        <h3 class="text-white text-sm font-medium tracking-tight">${product.title}</h3>
                        <p class="text-neutral-500 text-xs mt-0.5 capitalize">${product.type} Asset</p>
                    </div>
                    <span class="text-white text-sm font-medium">₹${product.price}</span>
                </div>
            `;
            
            if (prepend) {
                grid.insertBefore(div, grid.firstChild);
            } else {
                grid.appendChild(div);
            }
            lucide.createIcons();
        }

        // --- Full Screen Logic ---
        function openFullScreen(e, src, type) {
            e.stopPropagation(); // Don't open the detail modal
            const fsContainer = document.getElementById('fullscreen-viewer');
            const fsContent = document.getElementById('fs-content');
            
            fsContent.innerHTML = ''; // Clear previous

            if (type === 'video') {
                const vid = document.createElement('video');
                vid.src = src;
                vid.autoplay = true;
                vid.controls = true; // Allow user control in FS
                vid.className = "max-w-full max-h-full rounded-lg shadow-2xl border border-neutral-800";
                fsContent.appendChild(vid);
            } else {
                const img = document.createElement('img');
                img.src = src;
                img.className = "max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-neutral-800";
                fsContent.appendChild(img);
            }

            fsContainer.classList.remove('hidden');
            // Slight delay for fade in
            setTimeout(() => {
                fsContainer.classList.remove('opacity-0');
            }, 10);
            document.body.style.overflow = 'hidden'; // Stop background scrolling
        }

        function closeFullScreen() {
            const fsContainer = document.getElementById('fullscreen-viewer');
            const fsContent = document.getElementById('fs-content');
            
            fsContainer.classList.add('opacity-0');
            setTimeout(() => {
                fsContainer.classList.add('hidden');
                fsContent.innerHTML = ''; // Stop video playback
                document.body.style.overflow = ''; // Restore scrolling
            }, 300);
        }


        // --- Admin Logic ---
        function toggleAdminMode() {
            isAdmin = !isAdmin;
            const btn = document.getElementById('admin-toggle-btn');
            const panel = document.getElementById('admin-panel');
            const icon = btn.querySelector('i');
            const text = btn.querySelector('span');
            const deleteBtns = document.querySelectorAll('.delete-btn');

            if (isAdmin) {
                panel.classList.remove('hidden');
                text.innerText = "Admin View (Active)";
                icon.setAttribute('data-lucide', 'shield-check');
                btn.classList.add('text-emerald-500');
                
                deleteBtns.forEach(b => {
                    b.classList.remove('hidden');
                    b.classList.add('flex');
                });
            } else {
                panel.classList.add('hidden');
                text.innerText = "Visitor View";
                icon.setAttribute('data-lucide', 'shield');
                btn.classList.remove('text-emerald-500');
                
                deleteBtns.forEach(b => {
                    b.classList.add('hidden');
                    b.classList.remove('flex');
                });
            }
            lucide.createIcons();
        }

        function deleteItem(e, id) {
            e.stopPropagation();
            if (!isAdmin) return; 

            if(confirm('Permanently delete this asset?')) {
                products = products.filter(p => p.id !== id);
                saveToStorage();
                const item = document.getElementById(`item-${id}`);
                if(item) {
                    item.style.transition = "all 0.3s ease";
                    item.style.opacity = "0";
                    item.style.transform = "scale(0.9)";
                    setTimeout(() => {
                        item.remove();
                        if(products.length === 0) document.getElementById('empty-state').classList.remove('hidden');
                    }, 300);
                }
            }
        }

        // --- Upload Logic ---
        function previewFile(input) {
            const container = document.getElementById('preview-container');
            const imgPreview = document.getElementById('image-preview');
            const vidPreview = document.getElementById('video-preview');
            const drop = document.getElementById('drop-zone');

            if (input.files && input.files[0]) {
                const file = input.files[0];
                const fileType = file.type;
                var reader = new FileReader();

                reader.onload = function(e) {
                    container.classList.remove('hidden');
                    drop.classList.add('hidden');

                    if (fileType.startsWith('image/')) {
                        imgPreview.src = e.target.result;
                        imgPreview.classList.remove('hidden');
                        vidPreview.classList.add('hidden');
                    } else if (fileType.startsWith('video/')) {
                        vidPreview.src = e.target.result;
                        vidPreview.classList.remove('hidden');
                        imgPreview.classList.add('hidden');
                    }
                }
                reader.readAsDataURL(file);
            }
        }

        function handlePost(e) {
            e.preventDefault();
            const title = document.getElementById('post-title').value;
            const price = document.getElementById('post-price').value;
            const fileInput = document.getElementById('file-upload');
            
            if(!fileInput.files[0]) return alert("Please select a file");

            const file = fileInput.files[0];
            const type = file.type.startsWith('video/') ? 'video' : 'image';
            const id = Date.now();

            if(file.size > 3000000) {
               if(!confirm("File is large (>3MB). It might fill up your browser storage. Continue?")) return;
            }

            const reader = new FileReader();
            reader.onload = function(e) {
                const src = e.target.result;
                const newProduct = { id, title, price, src, type };
                
                products.unshift(newProduct);
                saveToStorage();
                renderGridItem(newProduct, true);
                document.getElementById('empty-state').classList.add('hidden');

                document.getElementById('upload-form').reset();
                document.getElementById('preview-container').classList.add('hidden');
                document.getElementById('image-preview').classList.add('hidden');
                document.getElementById('video-preview').classList.add('hidden');
                document.getElementById('drop-zone').classList.remove('hidden');
                
                if(isAdmin) {
                    const newItemBtn = document.querySelector(`#item-${id} .delete-btn`);
                    if(newItemBtn) {
                        newItemBtn.classList.remove('hidden');
                        newItemBtn.classList.add('flex');
                    }
                }
            }
            reader.readAsDataURL(file);
        }

        // --- Detail Modal Logic ---
        const modal = document.getElementById('modal');
        const mTitle = document.getElementById('modal-title');
        const mPrice = document.getElementById('modal-price');
        const mImg = document.getElementById('modal-img');
        const mVid = document.getElementById('modal-video');

        function openProduct(title, price, src, type) {
            mTitle.innerText = title;
            mPrice.innerText = "₹" + price;
            
            if (type === 'video') {
                mImg.classList.add('hidden');
                mVid.classList.remove('hidden');
                mVid.src = src;
                mVid.play();
            } else {
                mVid.classList.add('hidden');
                mVid.pause();
                mImg.classList.remove('hidden');
                mImg.src = src;
            }
            
            modal.classList.remove('hidden');
            const content = modal.querySelector('div.absolute.inset-x-0');
            setTimeout(() => {
                content.classList.remove('translate-y-full');
            }, 10);
        }

        function closeModal() {
            const content = modal.querySelector('div.absolute.inset-x-0');
            if(window.innerWidth < 768) {
                content.classList.add('translate-y-full');
            } 
            setTimeout(() => {
                modal.classList.add('hidden');
                mVid.pause(); 
                if(window.innerWidth < 768) content.classList.add('translate-y-full');
            }, 200); 
        }

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center opacity-40" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp'}}></div>
<div className="fixed inset-0 bg-black/80 -z-10"></div>

<div className="fixed inset-0 bg-noise z-40 mix-blend-overlay pointer-events-none"></div>

<nav className="fixed top-0 w-full z-40 border-b backdrop-blur-md border-white/5 bg-black/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-3 select-none cursor-pointer" onclick="window.location.reload()">
<svg className="text-orange-500" fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2.5C12 2.5 14.5 7 16 8.5C17.5 10 21.5 12 21.5 12C21.5 12 17.5 14 16 15.5C14.5 17 12 21.5 12 21.5C12 21.5 9.5 17 8 15.5C6.5 14 2.5 12 2.5 12C2.5 12 6.5 10 8 8.5C9.5 7 12 2.5 12 2.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 7C12 7 13.5 10 14.5 11C15.5 12 17 12 17 12M12 17C12 17 13.5 14 14.5 13C15.5 12 17 12 17 12M12 7C12 7 10.5 10 9.5 11C8.5 12 7 12 7 12M12 17C12 17 10.5 14 9.5 13C8.5 12 7 12 7 12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle className="text-orange-500" cx="12" cy="2" fill="currentColor" r="1.5"></circle>
<circle className="text-orange-500" cx="12" cy="22" fill="currentColor" r="1.5"></circle>
<circle className="text-orange-500" cx="2" cy="12" fill="currentColor" r="1.5"></circle>
<circle className="text-orange-500" cx="22" cy="12" fill="currentColor" r="1.5"></circle>
</svg>
<div className="flex flex-col justify-center -space-y-1">
<span className="font-extrabold tracking-wider text-sm text-white">OVERLAY</span>
<span className="text-neutral-500 font-light text-[10px] tracking-[0.35em] text-center ml-0.5">BOX</span>
</div>
</div>
<div className="flex items-center gap-6">

<button className="flex items-center gap-2 text-xs text-neutral-500 transition-colors duration-200 hover:text-white" id="admin-toggle-btn" onclick="toggleAdminMode()">
<i className="w-4 h-4" data-lucide="shield"></i>
<span>Visitor View</span>
</button>
</div>
</div>
</nav>

<main className="pt-28 pb-20 max-w-6xl mx-auto px-6">

<header className="mb-16 text-center max-w-2xl mx-auto">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-6 border-white/10 bg-white/5 text-neutral-400">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                Available for Commission
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500 text-white">
                Digital artifacts for<br/>modern creators.
            </h1>
<p className="text-neutral-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
                High-fidelity textures, overlays, and graphical assets. <br/>
<span className="text-xs text-neutral-600">(Note: To share uploads across devices, a database connection is required. This demo uses local storage.)</span>
</p>
</header>

<div className="hidden mb-12 animate-[fadeIn_0.3s_ease-out]" id="admin-panel">
<div className="glass-panel p-6 rounded-xl border border-dashed border-neutral-700 bg-neutral-900/30">
<div className="flex items-center gap-2 mb-6 border-b pb-4 border-white/5">
<i className="w-5 h-5 text-white" data-lucide="upload-cloud"></i>
<h2 className="font-medium tracking-tight text-sm text-white">Upload New Asset</h2>
</div>
<form className="grid grid-cols-1 md:grid-cols-2 gap-6" id="upload-form" onsubmit="handlePost(event)">

<div className="relative group cursor-pointer h-56">

<input accept="image/*,video/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="file-upload" onchange="previewFile(this)" required="" type="file"/>
<div className="absolute inset-0 bg-neutral-950 border border-neutral-800 rounded-lg flex flex-col items-center justify-center gap-2 group-hover:border-neutral-600 transition-colors" id="drop-zone">
<i className="text-neutral-500 w-8 h-8" data-lucide="image-plus"></i>
<span className="text-xs text-neutral-500 font-medium">Select Image or Video</span>
</div>

<div className="hidden absolute inset-0 w-full h-full bg-black border border-neutral-800 rounded-lg overflow-hidden pointer-events-none" id="preview-container">
<img className="w-full h-full object-cover hidden" id="image-preview"/>
<video autoplay="" className="w-full h-full object-cover hidden" id="video-preview" loop="" muted="" playsinline=""></video>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Asset Title</label>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg px-3 py-2.5 text-sm focus:border-neutral-600 focus:ring-0 outline-none placeholder:text-neutral-700 transition-colors" id="post-title" placeholder="e.g. Gritty Plastic Overlay" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5 ml-1">Price (INR)</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-neutral-500 text-sm">₹</span>
<input className="w-full bg-neutral-900 border border-neutral-800 text-white rounded-lg pl-7 pr-3 py-2.5 text-sm focus:border-neutral-600 focus:ring-0 outline-none placeholder:text-neutral-700 transition-colors" id="post-price" placeholder="499" required="" type="number"/>
</div>
</div>
<button className="w-full mt-2 bg-white text-black hover:bg-neutral-200 text-sm font-medium py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2" type="submit">
<i className="w-4 h-4" data-lucide="plus-circle"></i>
                            Post Asset
                        </button>
</div>
</form>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6" id="gallery-grid">

</div>

<div className="hidden py-24 text-center" id="empty-state">
<i className="w-12 h-12 mx-auto mb-3 text-neutral-700" data-lucide="folder-open"></i>
<p className="text-neutral-500 text-sm">No assets available yet.</p>
</div>
</main>
<footer className="border-t py-12 border-white/5 bg-black">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600">© 2024 OverlayBox. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="camera"></i>
</a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] bg-black hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="fullscreen-viewer">

<button className="absolute top-6 right-6 text-white/50 hover:text-white z-50 transition-colors" onclick="closeFullScreen()">
<i className="w-10 h-10" data-lucide="x"></i>
</button>

<div className="w-full h-full p-4 md:p-10 flex items-center justify-center" id="fs-content">

</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute inset-x-0 bottom-0 md:top-1/2 md:left-1/2 md:bottom-auto md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[480px] bg-neutral-900 border-t md:border border-neutral-800 md:rounded-xl shadow-2xl transform transition-transform duration-300 translate-y-full md:translate-y-0 p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Asset Details</span>
<button className="text-neutral-500 hover:text-white transition-colors" onclick="closeModal()">
<i className="w-6 h-6" data-lucide="x-circle"></i>
</button>
</div>
<div className="flex gap-4 mb-6">
<div className="w-24 h-24 bg-neutral-800 border border-neutral-700 rounded-lg overflow-hidden flex-shrink-0 relative">
<img className="w-full h-full object-cover hidden" id="modal-img" src=""/>
<video autoplay="" className="w-full h-full object-cover hidden" id="modal-video" loop="" muted="" playsinline="" src=""></video>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-white text-xl font-medium tracking-tight mb-1" id="modal-title"></h2>
<p className="text-emerald-400 text-lg font-medium" id="modal-price"></p>
</div>
</div>
<div className="space-y-4">
<div className="bg-neutral-950 border border-neutral-800 p-4 rounded-lg">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-white">
<i className="w-4 h-4" data-lucide="user"></i>
</div>
<div>
<p className="text-neutral-400 text-xs">Seller Contact</p>
<p className="text-white text-sm font-medium">OverlayBox Admin</p>
</div>
</div>
<div className="border-t border-white/5 pt-2 space-y-2">
<a className="flex items-center justify-between group cursor-pointer p-2 hover:bg-white/5 rounded transition-colors" href="tel:+918886600866">
<div className="flex items-center gap-3">
<i className="text-neutral-500 group-hover:text-emerald-400 w-4 h-4 transition-colors" data-lucide="phone"></i>
<span className="text-neutral-300 text-sm group-hover:text-white">+91 8886600866</span>
</div>
<i className="text-neutral-600 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="copy"></i>
</a>
<a className="flex items-center justify-between group cursor-pointer p-2 hover:bg-white/5 rounded transition-colors" href="mailto:overlayboxin.gmail.com">
<div className="flex items-center gap-3">
<i className="text-neutral-500 group-hover:text-emerald-400 w-4 h-4 transition-colors" data-lucide="mail"></i>
<span className="text-neutral-300 text-sm group-hover:text-white">overlayboxin.gmail.com</span>
</div>
<i className="text-neutral-600 w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" data-lucide="copy"></i>
</a>
</div>
</div>
<div className="text-center">
<p className="text-neutral-600 text-[10px] uppercase tracking-wider">No direct cart available. Contact to purchase.</p>
</div>
</div>
</div>
</div>


    </>
  );
}
