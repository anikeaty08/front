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



        document.addEventListener('DOMContentLoaded', () => {
            // Initial Mock Data to match original design precisely
            let images = [
                { id: 'img_1', name: 'invoice_jan_2024.jpg', size: 1200000, width: 2400, height: 3200, url: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=400&h=533', type: 'image/jpeg' },
                { id: 'img_2', name: 'receipt_uber.png', size: 850000, width: 1080, height: 1920, url: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80&w=400&h=533', type: 'image/png' },
                { id: 'img_3', name: 'id_front.jpg', size: 2100000, width: 3000, height: 2000, url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600&h=400', type: 'image/jpeg' },
                { id: 'img_4', name: 'id_back.jpg', size: 1900000, width: 3000, height: 2000, url: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=600&h=400', type: 'image/jpeg' }
            ];

            // DOM Elements
            const grid = document.getElementById('image-grid');
            const emptyState = document.getElementById('empty-state');
            const fileInput = document.getElementById('file-input');
            const dropzone = document.getElementById('dropzone');
            const clearAllBtn = document.getElementById('clear-all-btn');
            const countDisplay = document.getElementById('image-count');
            const generateBtn = document.getElementById('generate-btn');
            const generateIcon = document.getElementById('generate-icon');
            const generateText = document.getElementById('generate-text');

            // Settings State
            let orientation = 'p';
            document.getElementById('btn-portrait').addEventListener('click', (e) => setOrientation('p', e.currentTarget));
            document.getElementById('btn-landscape').addEventListener('click', (e) => setOrientation('l', e.currentTarget));

            function setOrientation(val, btnElement) {
                orientation = val;
                document.querySelectorAll('.orientation-btn').forEach(btn => {
                    btn.classList.remove('bg-white', 'shadow-sm', 'text-gray-900', 'border-gray-200/50');
                    btn.classList.add('text-gray-500');
                    btn.classList.remove('border');
                });
                btnElement.classList.remove('text-gray-500');
                btnElement.classList.add('bg-white', 'shadow-sm', 'text-gray-900', 'border', 'border-gray-200/50');
            }

            // Utilities
            const formatBytes = (bytes) => {
                if (bytes === 0) return '0 Bytes';
                const k = 1024;
                const sizes = ['Bytes', 'KB', 'MB', 'GB'];
                const i = Math.floor(Math.log(bytes) / Math.log(k));
                return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
            };

            const generateId = () => Math.random().toString(36).substr(2, 9);

            // Render Function
            function render() {
                grid.innerHTML = '';
                
                if (images.length === 0) {
                    grid.classList.add('hidden');
                    emptyState.classList.remove('hidden');
                    generateBtn.disabled = true;
                } else {
                    grid.classList.remove('hidden');
                    emptyState.classList.add('hidden');
                    generateBtn.disabled = false;
                    
                    images.forEach((img, index) => {
                        const item = document.createElement('div');
                        item.className = 'group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-move';
                        item.draggable = true;
                        item.dataset.index = index;
                        
                        const isLandscape = img.width > img.height;
                        const objectFitClass = isLandscape ? 'object-contain drop-shadow-sm max-h-full w-auto' : 'object-cover w-full h-full';
                        const containerBg = isLandscape ? 'bg-gray-50 p-2' : 'bg-gray-100';

                        item.innerHTML = `
                            <div class="aspect-[3/4] ${containerBg} flex items-center justify-center relative overflow-hidden pointer-events-none">
                                <img src="${img.url}" alt="${img.name}" class="${objectFitClass} group-hover:scale-105 transition-transform duration-500 pointer-events-none" crossorigin="anonymous" />
                                <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2 pointer-events-auto">
                                    <div class="flex justify-between items-start w-full">
                                        <div class="bg-white/90 backdrop-blur-md w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium text-gray-900 shadow-sm">${index + 1}</div>
                                        <button onclick="removeImage(${index})" class="bg-white/90 backdrop-blur-md hover:bg-red-50 text-gray-600 hover:text-red-600 w-7 h-7 rounded-md flex items-center justify-center shadow-sm transition-colors" title="Remove image">
                                            <iconify-icon icon="solar:trash-bin-trash-linear" width="14" height="14"></iconify-icon>
                                        </button>
                                    </div>
                                    <div class="self-center bg-white/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-medium text-gray-700 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-sm flex items-center gap-1">
                                        <iconify-icon icon="solar:reorder-linear" width="12" height="12"></iconify-icon> Drag to reorder
                                    </div>
                                </div>
                            </div>
                            <div class="p-2.5 border-t border-gray-100 bg-white pointer-events-none">
                                <p class="text-xs font-medium text-gray-800 truncate" title="${img.name}">${img.name}</p>
                                <p class="text-[10px] text-gray-400 mt-0.5">${formatBytes(img.size)} • ${img.width}x${img.height}</p>
                            </div>
                        `;

                        // Drag Events
                        item.addEventListener('dragstart', handleDragStart);
                        item.addEventListener('dragover', handleDragOver);
                        item.addEventListener('dragleave', handleDragLeave);
                        item.addEventListener('drop', handleDrop);
                        item.addEventListener('dragend', handleDragEnd);

                        grid.appendChild(item);
                    });
                }
                
                countDisplay.textContent = `${images.length} Image${images.length !== 1 ? 's' : ''} added`;
            }

            // Global Actions
            window.removeImage = (index) => {
                images.splice(index, 1);
                render();
            };

            clearAllBtn.addEventListener('click', () => {
                if(confirm('Are you sure you want to remove all images?')) {
                    images = [];
                    render();
                }
            });

            // Drag and Drop Reordering
            let draggedIndex = null;

            function handleDragStart(e) {
                draggedIndex = parseInt(this.dataset.index);
                e.dataTransfer.effectAllowed = 'move';
                setTimeout(() => this.classList.add('dragging'), 0);
            }

            function handleDragOver(e) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
                if(parseInt(this.dataset.index) !== draggedIndex) {
                    this.classList.add('ring-2', 'ring-gray-900', 'ring-offset-2');
                }
                return false;
            }

            function handleDragLeave(e) {
                this.classList.remove('ring-2', 'ring-gray-900', 'ring-offset-2');
            }

            function handleDrop(e) {
                e.stopPropagation();
                this.classList.remove('ring-2', 'ring-gray-900', 'ring-offset-2');
                const dropIndex = parseInt(this.dataset.index);
                
                if (draggedIndex !== null && draggedIndex !== dropIndex) {
                    const item = images.splice(draggedIndex, 1)[0];
                    images.splice(dropIndex, 0, item);
                    render();
                }
                return false;
            }

            function handleDragEnd() {
                this.classList.remove('dragging');
                draggedIndex = null;
            }

            // File Upload Handling
            const handleFiles = (files) => {
                const validFiles = Array.from(files).filter(file => file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024);
                
                if(validFiles.length < files.length) {
                    alert('Some files were ignored. Ensure they are images under 10MB.');
                }

                validFiles.forEach(file => {
                    const url = URL.createObjectURL(file);
                    const imgObj = new Image();
                    imgObj.onload = () => {
                        images.push({
                            id: generateId(),
                            name: file.name,
                            size: file.size,
                            width: imgObj.naturalWidth,
                            height: imgObj.naturalHeight,
                            url: url,
                            type: file.type
                        });
                        render();
                    };
                    imgObj.src = url;
                });
            };

            fileInput.addEventListener('change', (e) => {
                handleFiles(e.target.files);
                e.target.value = ''; 
            });

            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropzone.classList.add('drag-over');
            });

            dropzone.addEventListener('dragleave', (e) => {
                e.preventDefault();
                dropzone.classList.remove('drag-over');
            });

            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.classList.remove('drag-over');
                if (e.dataTransfer.files.length > 0) {
                    handleFiles(e.dataTransfer.files);
                }
            });

            // PDF Generation
            generateBtn.addEventListener('click', async () => {
                if (images.length === 0) return;
                
                // UI Loading State
                generateBtn.disabled = true;
                generateText.textContent = 'Generating...';
                generateIcon.setAttribute('icon', 'solar:spinner-linear');
                generateIcon.classList.add('animate-spin');

                try {
                    const { jsPDF } = window.jspdf;
                    const pageSize = document.getElementById('setting-size').value;
                    const margin = parseInt(document.getElementById('setting-margin').value) || 0;
                    const addNumbers = document.getElementById('setting-numbers').checked;
                    const compress = document.getElementById('setting-compress').checked;

                    let pdf = new jsPDF({
                        orientation: orientation,
                        unit: 'mm',
                        format: pageSize === 'fit' ? 'a4' : pageSize, 
                        compress: compress
                    });

                    for (let i = 0; i < images.length; i++) {
                        const img = images[i];
                        
                        // Load image to canvas to get base64 (helps with CORS for remote images too)
                        const base64Img = await new Promise((resolve, reject) => {
                            const image = new Image();
                            image.crossOrigin = 'Anonymous';
                            image.onload = () => {
                                const canvas = document.createElement('canvas');
                                canvas.width = image.width;
                                canvas.height = image.height;
                                const ctx = canvas.getContext('2d');
                                ctx.drawImage(image, 0, 0);
                                resolve(canvas.toDataURL(img.type || 'image/jpeg', compress ? 0.8 : 1.0));
                            };
                            image.onerror = () => {
                                // Fallback for blocked external images
                                resolve(img.url);
                            };
                            image.src = img.url;
                        });

                        if (i > 0) {
                            if(pageSize === 'fit') {
                                // Dynamic size based on image ratio mapping to mm (very basic approximation)
                                pdf.addPage([img.width * 0.264583, img.height * 0.264583], img.width > img.height ? 'l' : 'p');
                            } else {
                                pdf.addPage(pageSize, orientation);
                            }
                        } else if (pageSize === 'fit') {
                            // Update first page
                            pdf.deletePage(1);
                            pdf.addPage([img.width * 0.264583, img.height * 0.264583], img.width > img.height ? 'l' : 'p');
                            pdf.setPage(1);
                        }

                        const pdfWidth = pdf.internal.pageSize.getWidth();
                        const pdfHeight = pdf.internal.pageSize.getHeight();
                        
                        const contentWidth = pdfWidth - (margin * 2);
                        const contentHeight = pdfHeight - (margin * 2);

                        // Scale to fit
                        const ratio = Math.min(contentWidth / img.width, contentHeight / img.height);
                        const finalWidth = img.width * ratio;
                        const finalHeight = img.height * ratio;
                        
                        // Center image
                        const x = margin + (contentWidth - finalWidth) / 2;
                        const y = margin + (contentHeight - finalHeight) / 2;

                        pdf.addImage(base64Img, img.type === 'image/png' ? 'PNG' : 'JPEG', x, y, finalWidth, finalHeight);

                        if (addNumbers) {
                            pdf.setFontSize(10);
                            pdf.setTextColor(150);
                            pdf.text(`${i + 1}`, pdfWidth / 2, pdfHeight - (margin > 10 ? margin / 2 : 5), { align: 'center' });
                        }
                    }

                    pdf.save('converted_document.pdf');

                } catch (error) {
                    console.error("PDF Generation Error:", error);
                    alert("An error occurred while generating the PDF. If you are using default placeholder images, some browsers block them due to cross-origin policies. Try uploading your own local files.");
                } finally {
                    // Reset UI
                    generateBtn.disabled = false;
                    generateText.textContent = 'Generate PDF';
                    generateIcon.setAttribute('icon', 'solar:file-download-linear');
                    generateIcon.classList.remove('animate-spin');
                }
            });

            // Initial Render
            render();
        });
    
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
      
<header className="bg-white border-b border-gray-200 sticky top-0 z-20">
<div className="max-w-[88rem] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-7 h-7 bg-black rounded flex items-center justify-center text-white font-medium text-xs tracking-tighter">
                    IMG
                </div>
<div className="flex items-center gap-2">
<span className="text-gray-300">/</span>
<span className="font-medium text-sm tracking-tight text-gray-900">PDF Converter</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-gray-500 hover:text-red-600 transition-colors flex items-center gap-1.5 hidden sm:flex" id="clear-all-btn">
<iconify-icon height="16" icon="solar:trash-bin-trash-linear" width="16"></iconify-icon>
                    Clear All
                </button>
</div>
</div>
</header>
<main className="flex-grow max-w-[88rem] w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col xl:flex-row gap-6 lg:gap-8">
<div className="flex-1 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div>
<h1 className="text-xl font-medium tracking-tight text-gray-900">Workspace</h1>
<p className="text-sm text-gray-500 mt-1">Arrange your images before generating the document.</p>
</div>
<div className="text-xs font-medium px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full border border-gray-200 transition-all" id="image-count">
                    4 Images added
                </div>
</div>
<label className="relative group cursor-pointer" id="dropzone">
<input accept="image/png, image/jpeg, image/jpg, image/gif, image/svg+xml" className="file-input-hidden" id="file-input" multiple="" type="file"/>
<div className="border-2 border-dashed border-gray-200 rounded-2xl bg-white/50 p-8 flex flex-col items-center justify-center text-center hover:border-gray-300 hover:bg-white transition-all duration-200">
<div className="w-10 h-10 bg-white shadow-sm border border-gray-100 rounded-full flex items-center justify-center text-gray-700 mb-3 group-hover:-translate-y-1 transition-transform duration-300">
<iconify-icon height="20" icon="solar:gallery-add-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-gray-900 mb-0.5">Click to upload or drag and drop</span>
<span className="text-xs text-gray-500">SVG, PNG, JPG or GIF (max. 10MB)</span>
</div>
</label>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" id="image-grid">

</div>
<div className="hidden flex flex-col items-center justify-center py-12 px-4 border-2 border-dashed border-gray-100 rounded-2xl bg-gray-50/50" id="empty-state">
<iconify-icon className="text-gray-300 mb-3" height="32" icon="solar:gallery-remove-linear" width="32"></iconify-icon>
<p className="text-sm font-medium text-gray-500">No images added yet</p>
<p className="text-xs text-gray-400 mt-1">Upload images to get started</p>
</div>
</div>
<aside className="w-full xl:w-80 flex-shrink-0">
<div className="bg-white rounded-2xl border border-gray-200 shadow-sm sticky top-20 flex flex-col">
<div className="p-5 border-b border-gray-100">
<h2 className="text-base font-medium tracking-tight text-gray-900 flex items-center gap-2">
<iconify-icon className="text-gray-500" height="18" icon="solar:settings-linear" width="18"></iconify-icon>
                        Document Settings
                    </h2>
</div>
<div className="p-5 flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-gray-700">Page Size</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2.5 pr-8 transition-shadow outline-none cursor-pointer shadow-sm" id="setting-size">
<option value="a4">A4 (210 x 297 mm)</option>
<option value="letter">US Letter (8.5 x 11 in)</option>
<option value="legal">Legal (8.5 x 14 in)</option>
<option value="fit">Fit to Image</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-gray-700">Orientation</label>
<span className="text-[10px] text-gray-400">Default fallback</span>
</div>
<div className="flex bg-gray-50 p-1 rounded-lg border border-gray-200 relative">
<button className="orientation-btn flex-1 flex items-center justify-center gap-2 bg-white shadow-sm rounded-md py-1.5 text-xs font-medium text-gray-900 border border-gray-200/50 transition-all" id="btn-portrait">
<iconify-icon height="16" icon="solar:document-linear" width="16"></iconify-icon> Portrait
                            </button>
<button className="orientation-btn flex-1 flex items-center justify-center gap-2 py-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 transition-all" id="btn-landscape">
<iconify-icon className="rotate-90" height="16" icon="solar:document-linear" width="16"></iconify-icon> Landscape
                            </button>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-gray-700">Page Margin</label>
<div className="relative">
<select className="w-full appearance-none bg-white border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-1 focus:ring-gray-900 focus:border-gray-900 block px-3 py-2.5 pr-8 transition-shadow outline-none cursor-pointer shadow-sm" id="setting-margin">
<option value="0">No Margin</option>
<option value="10">Small (10mm)</option>
<option selected="" value="20">Normal (20mm)</option>
<option value="30">Large (30mm)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col gap-3 pt-2">
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input checked="" className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-black checked:border-black transition-colors cursor-pointer" id="setting-compress" type="checkbox"/>
<iconify-icon className="text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">Compress images</span>
</label>
<label className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center">
<input className="peer appearance-none w-4 h-4 border border-gray-300 rounded bg-white checked:bg-black checked:border-black transition-colors cursor-pointer" id="setting-numbers" type="checkbox"/>
<iconify-icon className="text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none" height="12" icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
<span className="text-sm text-gray-700 group-hover:text-gray-900 select-none">Add page numbers</span>
</label>
</div>
</div>
<div className="p-5 bg-gray-50/50 border-t border-gray-100 rounded-b-2xl">
<button className="w-full flex items-center justify-center gap-2 bg-gray-900 hover:bg-black disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium text-sm rounded-lg px-4 py-3 transition-all active:scale-[0.98] shadow-sm" id="generate-btn">
<iconify-icon height="18" icon="solar:file-download-linear" id="generate-icon" width="18"></iconify-icon>
<span id="generate-text">Generate PDF</span>
</button>
<div className="flex items-center justify-center gap-1.5 mt-3 text-[10px] text-gray-500 font-medium">
<iconify-icon height="12" icon="solar:shield-check-linear" width="12"></iconify-icon>
                        Processed locally in your browser
                    </div>
</div>
</div>
</aside>
</main>


    </>
  );
}
