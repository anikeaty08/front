import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let editMode = false;
        let currentSlideIndex = 0;
        let slideElements = Array.from(document.querySelectorAll('.slide-element'));

        // Color Inputs Event Listeners
        document.getElementById('color-accent').addEventListener('input', (e) => {
            document.documentElement.style.setProperty('--accent', e.target.value);
        });
        document.getElementById('color-bg').addEventListener('input', (e) => {
            document.documentElement.style.setProperty('--bg-dark', e.target.value);
        });
        document.getElementById('color-text').addEventListener('input', (e) => {
            document.documentElement.style.setProperty('--text-main', e.target.value);
        });

        // Image Upload
        document.getElementById('upload-layer').addEventListener('change', function(e) {
            if(!editMode) return;
            const file = e.target.files[0];
            if(!file) return;
            
            const reader = new FileReader();
            reader.onload = function(event) {
                const imgWrapper = document.createElement('div');
                imgWrapper.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] z-50 group draggable-element';
                imgWrapper.setAttribute('data-layer', `Image (${file.name.substring(0, 8)}...)`);
                imgWrapper.setAttribute('data-custom', 'true');
                
                imgWrapper.innerHTML = `
                    <img src="${event.target.result}" class="w-full h-auto object-contain rounded-lg border border-[var(--border-subtle)] pointer-events-none" />
                `;
                
                makeDraggable(imgWrapper);
                slideElements[currentSlideIndex].appendChild(imgWrapper);
                updateLayerPanel();
            };
            reader.readAsDataURL(file);
            e.target.value = ''; // Reset
        });

        // Add Text Layer
        function addTextLayer() {
            if(!editMode) return;
            const textEl = document.createElement('div');
            textEl.className = 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 group draggable-element w-3/4 text-center';
            textEl.setAttribute('data-layer', 'Custom Text');
            textEl.setAttribute('data-custom', 'true');
            
            textEl.innerHTML = `
                <p class="editable-text text-base font-medium text-[var(--text-main)] w-full" contenteditable="true">Edit new text</p>
            `;
            
            makeDraggable(textEl);
            slideElements[currentSlideIndex].appendChild(textEl);
            updateLayerPanel();
        }

        // Toggle Editor (Mobile Optimized Overlay Drawer)
        function toggleEditor() {
            editMode = !editMode;
            const sidebar = document.getElementById('editor-sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            
            if (editMode) {
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => overlay.classList.remove('opacity-0'), 10);
                document.body.classList.add('edit-mode');
                enableEditing(true);
                updateLayerPanel();
            } else {
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => overlay.classList.add('hidden'), 300);
                document.body.classList.remove('edit-mode');
                enableEditing(false);
            }
        }

        function enableEditing(enable) {
            const texts = document.querySelectorAll('.editable-text');
            texts.forEach(t => {
                t.setAttribute('contenteditable', enable ? 'true' : 'false');
            });
        }

        // Update Layer Panel UI
        function updateLayerPanel() {
            if(!editMode) return;
            const layerList = document.getElementById('layer-list');
            const currentSlide = slideElements[currentSlideIndex];
            const badge = document.getElementById('active-slide-badge');
            
            badge.innerText = `Slide ${currentSlideIndex + 1}`;
            layerList.innerHTML = '';
            
            // Find elements with data-layer attribute
            const layers = Array.from(currentSlide.querySelectorAll('[data-layer]'));
            
            if (layers.length === 0) {
                layerList.innerHTML = '<span class="text-xs text-[#9CA3AF]">No layers found.</span>';
                return;
            }

            // Reverse to show top layers first
            layers.reverse().forEach((layer, index) => {
                const layerName = layer.getAttribute('data-layer');
                const isCustom = layer.hasAttribute('data-custom');
                const isVisible = layer.style.display !== 'none';
                
                const item = document.createElement('div');
                item.className = 'flex items-center justify-between bg-[var(--bg-dark)] border border-[var(--border-subtle)] p-2.5 rounded-lg group';
                
                item.innerHTML = `
                    <span class="text-xs font-medium text-[var(--text-main)] truncate max-w-[140px]">${layerName}</span>
                    <div class="flex gap-2">
                        ${isCustom ? `
                        <button class="text-red-500 hover:text-red-400 transition-colors delete-btn p-1" title="Delete">
                            <iconify-icon icon="solar:trash-bin-trash-linear" class="text-[1rem]"></iconify-icon>
                        </button>
                        ` : ''}
                        <button class="text-[#9CA3AF] hover:text-[var(--accent)] transition-colors toggle-vis-btn p-1" title="Toggle Visibility">
                            <iconify-icon icon="${isVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'}" class="text-[1rem]"></iconify-icon>
                        </button>
                    </div>
                `;

                // Visibility Toggle Event
                item.querySelector('.toggle-vis-btn').addEventListener('click', () => {
                    if (layer.style.display === 'none') {
                        layer.style.display = '';
                    } else {
                        layer.style.display = 'none';
                    }
                    updateLayerPanel();
                });

                // Delete Event for Custom Elements
                if (isCustom) {
                    item.querySelector('.delete-btn').addEventListener('click', () => {
                        layer.remove();
                        updateLayerPanel();
                    });
                }

                layerList.appendChild(item);
            });
        }

        // Track Active Slide using Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSlideIndex = slideElements.indexOf(entry.target);
                    if (editMode) updateLayerPanel();
                }
            });
        }, { threshold: 0.6 });

        slideElements.forEach(slide => observer.observe(slide));

        // Mobile Optimized Draggable Functionality
        function makeDraggable(elmnt) {
            let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            
            // Mouse Events
            elmnt.onmousedown = dragMouseDown;
            // Touch Events
            elmnt.ontouchstart = dragTouchStart;

            function dragMouseDown(e) {
                if(!editMode) return;
                if(e.target.hasAttribute('contenteditable')) return;
                e.preventDefault();
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                document.onmousemove = elementDrag;
            }

            function dragTouchStart(e) {
                if(!editMode) return;
                if(e.target.hasAttribute('contenteditable')) return;
                // Prevent default scrolling only if interacting with draggable object
                if (e.cancelable) e.preventDefault(); 
                pos3 = e.touches[0].clientX;
                pos4 = e.touches[0].clientY;
                document.ontouchend = closeDragElement;
                document.ontouchmove = elementTouchDrag;
            }

            function elementDrag(e) {
                e.preventDefault();
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                applyTransform();
            }

            function elementTouchDrag(e) {
                if (e.cancelable) e.preventDefault();
                pos1 = pos3 - e.touches[0].clientX;
                pos2 = pos4 - e.touches[0].clientY;
                pos3 = e.touches[0].clientX;
                pos4 = e.touches[0].clientY;
                applyTransform();
            }
            
            function applyTransform() {
                elmnt.style.transform = 'none';
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
            }

            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
                document.ontouchend = null;
                document.ontouchmove = null;
            }
        }

        // Apply draggable to existing custom elements (if any)
        document.querySelectorAll('[data-custom="true"]').forEach(makeDraggable);

        // Download functionality
        async function downloadSlides() {
            // Temporarily turn off edit mode for clean download
            const wasEditing = editMode;
            if (wasEditing) toggleEditor();
            
            const btn = document.getElementById('download-btn');
            const btnText = document.getElementById('download-text');
            const originalIcon = btn.querySelector('iconify-icon').getAttribute('icon');
            
            btn.disabled = true;
            btnText.innerText = 'Processing...';
            btn.querySelector('iconify-icon').setAttribute('icon', 'solar:spinner-linear');
            btn.querySelector('iconify-icon').classList.add('animate-spin');

            try {
                for (let i = 0; i < slideElements.length; i++) {
                    const slide = slideElements[i];
                    
                    // Briefly scroll slide into full view for clear canvas capture
                    slide.scrollIntoView({ behavior: 'instant', block: 'center', inline: 'center' });
                    
                    const canvas = await html2canvas(slide, {
                        scale: 2, // High resolution for IG format
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--bg-dark').trim(),
                        useCORS: true,
                        allowTaint: true,
                        logging: false
                    });
                    
                    const link = document.createElement('a');
                    link.download = `nuro-slide-${i + 1}.png`;
                    link.href = canvas.toDataURL('image/png');
                    
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    await new Promise(resolve => setTimeout(resolve, 600)); // Delay for browser download handling
                }
            } catch (error) {
                console.error('Error generating slides:', error);
                alert('An error occurred. Please ensure your browser allows multiple downloads.');
            } finally {
                btn.disabled = false;
                btnText.innerText = 'Download Slides';
                btn.querySelector('iconify-icon').setAttribute('icon', originalIcon);
                btn.querySelector('iconify-icon').classList.remove('animate-spin');
                
                // Restore edit mode if it was active
                if (wasEditing) toggleEditor();
                
                // Scroll back to first slide
                slideElements[0].scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[var(--bg-dark)]/60 backdrop-blur-sm z-40 hidden opacity-0 transition-opacity duration-300" id="sidebar-overlay" onclick="toggleEditor()"></div>

<div className="fixed left-0 top-0 h-[100dvh] w-[85vw] max-w-xs bg-[var(--bg-panel)] border-r border-[var(--border-subtle)] z-50 transform -translate-x-full transition-transform duration-300 flex flex-col shadow-2xl" id="editor-sidebar">
<div className="p-5 border-b border-[var(--border-subtle)] flex justify-between items-center bg-[var(--bg-panel)] z-10">
<span className="text-sm font-semibold tracking-wide text-white flex items-center gap-2">
<iconify-icon className="text-[var(--accent)] text-lg" icon="solar:pen-new-square-linear"></iconify-icon> Edit Mode
            </span>
<button className="text-[#9CA3AF] hover:text-white transition-colors p-2 -mr-2" onclick="toggleEditor()">
<iconify-icon className="text-xl" icon="solar:close-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto custom-scroll p-5 space-y-8 pb-10">

<div className="space-y-4">
<span className="text-xs text-[#9CA3AF] font-medium tracking-widest uppercase block mb-2">Global Theme</span>
<div className="flex items-center justify-between bg-[var(--bg-dark)] border border-[var(--border-subtle)] p-3 rounded-xl">
<span className="text-xs font-medium">Accent Color</span>
<input className="shadow-sm" id="color-accent" type="color" value="#76B900"/>
</div>
<div className="flex items-center justify-between bg-[var(--bg-dark)] border border-[var(--border-subtle)] p-3 rounded-xl">
<span className="text-xs font-medium">Background</span>
<input className="shadow-sm" id="color-bg" type="color" value="#0A0A0A"/>
</div>
<div className="flex items-center justify-between bg-[var(--bg-dark)] border border-[var(--border-subtle)] p-3 rounded-xl">
<span className="text-xs font-medium">Text Color</span>
<input className="shadow-sm" id="color-text" type="color" value="#FFFFFF"/>
</div>
</div>

<div className="space-y-4">
<span className="text-xs text-[#9CA3AF] font-medium tracking-widest uppercase block mb-2">Add Elements</span>
<div className="grid grid-cols-2 gap-2">
<button className="flex flex-col items-center justify-center gap-2 bg-[var(--bg-dark)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-xl py-4 transition-colors" onclick="addTextLayer()">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:text-square-linear"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Text Box</span>
</button>
<label className="flex flex-col items-center justify-center gap-2 bg-[var(--bg-dark)] hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] rounded-xl py-4 transition-colors cursor-pointer">
<iconify-icon className="text-xl text-[var(--accent)]" icon="solar:gallery-add-linear"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Image</span>
<input accept="image/*" className="hidden" id="upload-layer" type="file"/>
</label>
</div>
</div>

<div className="space-y-4">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-[#9CA3AF] font-medium tracking-widest uppercase block">Current Slide Layers</span>
<span className="text-[0.65rem] bg-[var(--accent)]/10 text-[var(--accent)] px-2 py-0.5 rounded border border-[var(--accent)]/20 font-medium" id="active-slide-badge">Slide 1</span>
</div>
<div className="space-y-2" id="layer-list">

</div>
</div>
</div>
</div>

<button className="absolute top-4 sm:top-6 left-4 sm:left-6 z-30 flex items-center gap-2.5 bg-[var(--bg-panel)]/90 backdrop-blur-md hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-main)] transition-all duration-300 rounded-xl py-2.5 sm:py-3 px-4 sm:px-5 font-medium text-xs tracking-wide shadow-xl" id="edit-toggle-btn" onclick="toggleEditor()">
<iconify-icon className="text-lg text-[var(--accent)]" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Edit Design</span>
<span className="sm:hidden">Edit</span>
</button>

<button className="absolute bottom-6 sm:bottom-6 right-4 sm:right-6 z-30 flex items-center gap-2.5 bg-[var(--bg-panel)]/90 backdrop-blur-md hover:bg-[var(--border-subtle)] border border-[var(--border-subtle)] text-[var(--text-main)] transition-all duration-300 rounded-xl py-2.5 sm:py-3 px-4 sm:px-5 font-medium text-xs tracking-wide shadow-xl disabled:opacity-50 disabled:cursor-not-allowed" id="download-btn" onclick="downloadSlides()">
<iconify-icon className="text-lg text-[var(--accent)] transition-transform" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline" id="download-text">Download Slides</span>
<span className="sm:hidden">Save</span>
</button>

<div className="flex gap-4 overflow-x-auto snap-x snap-mandatory w-full px-[7.5vw] sm:px-8 py-10 no-scrollbar items-center transition-all duration-300 h-full" id="carousel">

<div className="slide-element relative w-[85vw] max-w-[360px] aspect-[4/5] bg-[var(--bg-dark)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col justify-center items-center shrink-0 snap-center group shadow-lg">
<div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" data-layer="Grid Background"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square bg-[var(--accent)] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" data-layer="Glow Effect"></div>
<div className="absolute top-6 sm:top-8 left-0 w-full flex justify-center" data-layer="Top Label">
<span className="editable-text text-[0.65rem] sm:text-xs font-medium tracking-[0.3em] text-[#9CA3AF]">N U R O</span>
</div>
<div className="relative z-10 flex flex-col items-center text-center px-6">
<div className="w-10 h-px bg-[var(--accent)] mb-6 opacity-50" data-layer="Divider Line"></div>
<h1 className="editable-text font-arabic text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-4" data-layer="Main Title">رؤيتك. <span className="text-[var(--accent)] glow-text">واضحة.</span></h1>
<p className="editable-text text-base sm:text-lg font-medium tracking-tight text-[var(--text-main)] mb-2" data-layer="Subtitle">NURO. Brand Your Vision.</p>
<p className="editable-text text-xs sm:text-sm text-[#9CA3AF] max-w-[90%] leading-relaxed" data-layer="Description">Strategic architecture for future-forward entities.</p>
</div>
<div className="absolute bottom-6 sm:bottom-8 left-0 w-full flex justify-center" data-layer="Bottom Badge">
<span className="editable-text text-[0.6rem] sm:text-[0.65rem] text-[#9CA3AF] tracking-widest uppercase border border-[var(--border-subtle)] rounded-full px-4 py-1.5 backdrop-blur-sm bg-[var(--bg-panel)]/50">Branding &amp; Web Solutions</span>
</div>
</div>

<div className="slide-element relative w-[85vw] max-w-[360px] aspect-[4/5] bg-gradient-to-b from-[var(--bg-panel)] to-[var(--bg-dark)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col shrink-0 snap-center p-6 sm:p-8 shadow-lg">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--border-subtle)] to-transparent"></div>
<div className="flex flex-col mb-auto mt-2">
<span className="editable-text text-[0.65rem] sm:text-xs text-[var(--accent)] font-medium tracking-widest uppercase mb-3 flex items-center gap-2" data-layer="Section Tag">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5"></iconify-icon> The Problem
                </span>
<h2 className="editable-text font-arabic text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)] mb-3" data-layer="Title">خيوط كثيرة. تشتت واحد.</h2>
<p className="editable-text text-xs sm:text-sm text-[#9CA3AF] leading-relaxed" data-layer="Description">Do not let overwhelm kill your vision. We create systems that demand focus.</p>
</div>
<div className="relative w-full aspect-square max-h-[160px] bg-[var(--bg-panel)]/30 border border-[var(--border-subtle)] rounded-xl flex flex-col justify-center gap-3 p-4 sm:p-6 mb-6 backdrop-blur-md" data-layer="UI Graphic">
<div className="w-full h-10 bg-[var(--border-subtle)]/20 border border-[var(--border-subtle)]/50 rounded-lg flex items-center px-3 opacity-40 blur-[1px]">
<div className="w-3.5 h-3.5 rounded border border-[#9CA3AF]/30 mr-3"></div>
<div className="h-1.5 w-1/3 bg-[#9CA3AF]/20 rounded"></div>
</div>
<div className="relative w-full h-12 bg-[var(--bg-panel)] border border-[var(--accent)] rounded-lg flex items-center px-3 glow-accent z-10 transform scale-105 transition-transform">
<div className="absolute -left-px top-1/2 -translate-y-1/2 w-0.5 h-1/2 bg-[var(--accent)] rounded-r"></div>
<div className="w-3.5 h-3.5 rounded border border-[var(--accent)] mr-3 flex items-center justify-center">
<iconify-icon className="text-[var(--accent)] text-[0.65rem]" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col gap-1 w-full">
<div className="h-1.5 w-1/2 bg-[var(--text-main)] opacity-80 rounded"></div>
<div className="h-1 w-1/4 bg-[#9CA3AF]/40 rounded"></div>
</div>
</div>
<div className="w-full h-10 bg-[var(--border-subtle)]/20 border border-[var(--border-subtle)]/50 rounded-lg flex items-center px-3 opacity-40 blur-[1px]">
<div className="w-3.5 h-3.5 rounded border border-[#9CA3AF]/30 mr-3"></div>
<div className="h-1.5 w-2/5 bg-[#9CA3AF]/20 rounded"></div>
</div>
</div>
<div className="flex items-center gap-3 mt-auto" data-layer="Footer Tag">
<div className="h-px w-full bg-[var(--border-subtle)]"></div>
<span className="editable-text text-[0.65rem] sm:text-xs text-[var(--text-main)] whitespace-nowrap tracking-wide font-medium">Introducing SINGULAR</span>
</div>
</div>

<div className="slide-element relative w-[85vw] max-w-[360px] aspect-[4/5] bg-[var(--bg-dark)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col shrink-0 snap-center p-6 sm:p-8 bg-grid shadow-lg">
<div className="flex flex-col mb-8 mt-2 relative z-10">
<h2 className="editable-text font-arabic text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)] mb-3" data-layer="Title">هوية تصنع المستقبل.</h2>
<p className="editable-text text-xs sm:text-sm text-[#9CA3AF] leading-relaxed" data-layer="Description">Logos that define. Visual systems that differentiate. Identities built to scale.</p>
</div>
<div className="relative flex-1 flex items-center justify-center w-full mb-6" data-layer="Diagram Graphic">
<div className="absolute w-[75%] aspect-[4/3] border border-[var(--border-subtle)] rounded-xl flex items-end p-3 -translate-y-10 opacity-30 bg-[var(--bg-dark)] pointer-events-none">
<span className="editable-text text-[0.65rem] text-[#9CA3AF] font-medium tracking-wide">Philosophy</span>
</div>
<div className="absolute w-[85%] aspect-[4/3] border border-[var(--border-subtle)] rounded-xl flex items-end p-3 -translate-y-2 opacity-60 bg-[var(--bg-panel)] backdrop-blur-sm pointer-events-none">
<span className="editable-text text-[0.65rem] text-[#9CA3AF] font-medium tracking-wide">Aesthetics</span>
</div>
<div className="absolute w-[95%] aspect-[4/3] border border-[var(--accent)]/50 rounded-xl flex flex-col justify-between p-4 translate-y-6 bg-[var(--bg-panel)] backdrop-blur-md glow-accent">
<div className="w-7 h-7 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center border border-[var(--accent)]/30">
<iconify-icon className="text-[var(--accent)] text-base" icon="solar:layers-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex justify-between items-end">
<span className="editable-text text-xs sm:text-sm text-[var(--text-main)] font-medium tracking-wide">Architecture</span>
<div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--accent)]"></div>
</div>
</div>
</div>
<div className="mt-auto relative z-10 flex justify-between items-center bg-[var(--bg-panel)] border border-[var(--border-subtle)] rounded-lg p-2.5 sm:p-3" data-layer="Footer Tag">
<span className="editable-text text-[0.65rem] sm:text-xs text-[#9CA3AF]">Focus Area</span>
<span className="text-[0.65rem] sm:text-xs text-[var(--text-main)] font-medium flex items-center gap-1">
<span className="editable-text">Brand Arch</span> <iconify-icon className="text-[var(--accent)]" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
</div>
</div>

<div className="slide-element relative w-[85vw] max-w-[360px] aspect-[4/5] bg-[var(--bg-dark)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col shrink-0 snap-center p-6 sm:p-8 shadow-lg">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--border-subtle)]/50 pointer-events-none" data-layer="Crosshair Lines"></div>
<div className="absolute left-1/2 top-0 h-full w-[1px] bg-[var(--border-subtle)]/50 pointer-events-none" data-layer="Crosshair Lines"></div>
<div className="flex flex-col mb-6 mt-2 relative z-10 bg-[var(--bg-dark)]/80 backdrop-blur-sm p-2 -mx-2 rounded-lg">
<h2 className="editable-text font-arabic text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-main)] mb-2" data-layer="Title">أنظمة ويب فائقة الأداء.</h2>
<p className="editable-text text-xs sm:text-sm text-[#9CA3AF] leading-relaxed" data-layer="Description">Scalable. Production-ready. High-end aesthetics meet cutting-edge development.</p>
</div>
<div className="w-full bg-[#111111] border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl relative z-10 mb-auto mt-2" data-layer="Code UI Graphic">
<div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border-subtle)] bg-[var(--bg-panel)]/50">
<div className="w-2 h-2 rounded-full bg-[var(--border-subtle)]"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border-subtle)]"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border-subtle)]"></div>
<span className="editable-text ml-2 text-[0.6rem] text-[#9CA3AF] font-medium tracking-widest">NXT.JS / TW</span>
</div>
<div className="p-3 sm:p-4 font-mono text-[0.65rem] sm:text-xs leading-loose overflow-hidden">
<div className="text-[#9CA3AF] opacity-50">import { Vision } from '@nuro/core'</div>
<div className="text-[var(--accent)] mt-1">export default function</div> <div className="text-[var(--text-main)]">System() {</div>
<div className="ml-3 text-[#9CA3AF]">return (</div>
<div className="ml-6 text-[var(--text-main)]">&lt;<span className="text-[var(--accent)]">div</span> <span className="text-[#9CA3AF]">className</span>="<span className="text-[var(--text-main)]">flex w-full...</span>"&gt;</div>
<div className="ml-9 text-[var(--text-main)]">&lt;<span className="text-[var(--accent)]">Vision</span> <span className="text-[#9CA3AF]">state</span>="<span className="text-[var(--text-main)]">optimized</span>" /&gt;</div>
<div className="ml-6 text-[var(--text-main)]">&lt;/<span className="text-[var(--accent)]">div</span>&gt;</div>
<div className="ml-3 text-[#9CA3AF]">)</div>
<div className="text-[var(--text-main)]">}</div>
</div>
<div className="absolute top-[4rem] left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--accent)]/50 to-transparent glow-accent"></div>
</div>
<div className="mt-auto relative z-10 flex justify-between items-center bg-[var(--bg-dark)] p-1 rounded-lg" data-layer="Footer Tag">
<span className="editable-text text-[0.6rem] sm:text-[0.65rem] text-[#9CA3AF] font-medium tracking-widest uppercase">Development Pipeline</span>
<div className="flex gap-1.5">
<iconify-icon className="text-[#9CA3AF] text-base" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-[#9CA3AF] text-base" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div className="slide-element relative w-[85vw] max-w-[360px] aspect-[4/5] bg-gradient-to-t from-[var(--bg-panel)] to-[var(--bg-dark)] border border-[var(--border-subtle)] rounded-2xl overflow-hidden flex flex-col items-center justify-center shrink-0 snap-center p-6 sm:p-8 text-center bg-grid shadow-lg">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[180px] h-[180px] bg-[var(--accent)] opacity-[0.05] blur-[80px] rounded-full pointer-events-none" data-layer="Glow Effect"></div>
<div className="mb-8 relative" data-layer="Logo Graphic">
<div className="text-6xl sm:text-7xl font-semibold tracking-tighter text-[var(--accent)] glow-text leading-none">N</div>
<div className="absolute inset-0 bg-[var(--accent)] opacity-20 blur-xl rounded-full"></div>
</div>
<div className="flex flex-col items-center w-full relative z-10">
<h2 className="editable-text font-arabic text-3xl sm:text-4xl font-semibold tracking-tight text-[var(--text-main)] mb-3" data-layer="Title">ابدأ رحلتك اليوم.</h2>
<p className="editable-text text-xs sm:text-sm text-[#9CA3AF] leading-relaxed max-w-[95%] mb-8" data-layer="Description">Define your tomorrow with NURO. DM <span className="text-[var(--text-main)] font-medium">'VISION'</span> to start your project.</p>
<button className="w-full bg-[var(--text-main)] hover:bg-[var(--accent)] text-[var(--bg-dark)] transition-colors duration-300 rounded-xl py-3 px-5 font-medium text-xs sm:text-sm flex items-center justify-center gap-2 group" data-layer="Button">
<span className="editable-text">Accept Your Future</span>
<iconify-icon className="text-base group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="absolute bottom-6 w-full text-center pointer-events-none" data-layer="Footer Label">
<span className="editable-text text-[0.6rem] sm:text-[0.65rem] text-[#9CA3AF] tracking-widest font-medium opacity-50">NURO.SOLUTIONS</span>
</div>
</div>
</div>


    </>
  );
}
