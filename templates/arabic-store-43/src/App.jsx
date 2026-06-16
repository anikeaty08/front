import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            // --- Toast Utility ---
            window.showToast = function(title, message, type = 'success') {
                const toastContainer = document.getElementById('toast-container');
                const toast = document.createElement('div');
                toast.className = 'toast-enter pointer-events-auto bg-white border border-neutral-200 shadow-sm rounded-lg p-3 w-72 flex items-start gap-3';
                const color = type === 'success' ? 'text-neutral-900' : 'text-red-500';
                const icon = type === 'success' ? 'check-circle-linear' : 'info-circle-linear';

                toast.innerHTML = `
                    <div class="mt-0.5 ${color}"><iconify-icon icon="solar:${icon}" width="18"></iconify-icon></div>
                    <div class="flex-1">
                        <h4 class="text-sm font-medium text-neutral-900">${title}</h4>
                        <p class="text-xs text-neutral-500 mt-0.5 leading-relaxed">${message}</p>
                    </div>
                `;
                toastContainer.appendChild(toast);
                setTimeout(() => {
                    toast.style.opacity = '0';
                    toast.style.transform = 'translateY(10px)';
                    toast.style.transition = 'all 0.3s ease';
                    setTimeout(() => toast.remove(), 300);
                }, 3000);
            };

            // --- Setup Wizard Variables ---
            let currentStep = 1;
            const maxSteps = 4;
            const btnNext = document.getElementById('btn-next');
            const btnPrev = document.getElementById('btn-prev');
            const btnConnect = document.getElementById('btn-connect-zid');
            let isStoreConnected = false;
            let selectedTheme = 'basic';
            let appColors = { primary: '#171717', bg: '#FAFAFA' };

            function updateStepperUI() {
                document.querySelectorAll('.step-content').forEach((el, index) => {
                    if(index + 1 === currentStep) {
                        el.classList.remove('step-hidden');
                        el.classList.add('step-active');
                    } else {
                        el.classList.remove('step-active');
                        el.classList.add('step-hidden');
                    }
                });

                for(let i = 1; i <= maxSteps; i++) {
                    const badge = document.getElementById(`stepper-badge-${i}`);
                    const title = document.getElementById(`stepper-title-${i}`);
                    const group = document.getElementById(`stepper-group-${i}`);
                    
                    if(group) {
                        if(i <= currentStep) group.classList.remove('opacity-50');
                        else group.classList.add('opacity-50');
                    }

                    if(i < currentStep) {
                        badge.innerHTML = '<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>';
                        badge.className = 'w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-medium';
                        if(title) title.className = 'text-sm font-medium text-neutral-900 hidden sm:inline';
                    } else if (i === currentStep) {
                        badge.innerHTML = i;
                        badge.className = 'w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-medium';
                        if(title) title.className = 'text-sm font-medium text-neutral-900';
                    } else {
                        badge.innerHTML = i;
                        badge.className = 'w-6 h-6 rounded-full border border-neutral-300 bg-white text-neutral-500 flex items-center justify-center text-xs font-medium';
                        if(title) title.className = 'text-sm font-medium text-neutral-500 hidden sm:inline';
                    }
                }

                if(currentStep === 1) {
                    btnPrev.classList.add('opacity-0', 'pointer-events-none');
                    btnNext.disabled = !isStoreConnected;
                    btnNext.textContent = 'التالي';
                } else if(currentStep === maxSteps) {
                    btnPrev.classList.remove('opacity-0', 'pointer-events-none');
                    btnNext.disabled = false;
                    btnNext.textContent = 'إنشاء التطبيق';
                } else {
                    btnPrev.classList.remove('opacity-0', 'pointer-events-none');
                    btnNext.disabled = false;
                    btnNext.textContent = 'التالي';
                }
            }

            btnConnect.addEventListener('click', function() {
                if(isStoreConnected) return;
                this.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="18"></iconify-icon><span>جاري الربط...</span>';
                this.classList.add('opacity-75', 'cursor-not-allowed');
                
                setTimeout(() => {
                    this.innerHTML = '<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon><span>تم ربط المتجر بنجاح</span>';
                    this.classList.remove('bg-neutral-900', 'text-white', 'hover:bg-neutral-800', 'opacity-75', 'cursor-not-allowed');
                    this.classList.add('bg-green-50', 'text-green-700', 'border', 'border-green-200');
                    isStoreConnected = true;
                    btnNext.disabled = false;
                    showToast('تم الربط', 'تم استيراد المنتجات والإعدادات من متجرك.');
                    setTimeout(() => { btnNext.click(); }, 800);
                }, 1500);
            });

            // Wizard Theme Selection
            document.querySelectorAll('#setup-wizard .theme-option').forEach(el => {
                el.addEventListener('click', () => {
                    document.querySelectorAll('#setup-wizard .theme-option').forEach(opt => {
                        opt.querySelector('.border-2').classList.remove('border-[#171717]');
                        opt.querySelector('.border-2').classList.add('border-transparent');
                        opt.querySelector('.theme-check').classList.add('opacity-0');
                    });
                    el.querySelector('.border-2').classList.add('border-[#171717]');
                    el.querySelector('.border-2').classList.remove('border-transparent');
                    el.querySelector('.theme-check').classList.remove('opacity-0');
                    
                    selectedTheme = el.getAttribute('data-theme');
                    
                    const componentsList = document.getElementById('theme-components-list');
                    if(selectedTheme === 'basic') {
                        componentsList.innerHTML = `
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>بانر رئيسي</span>
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:tag-horizontal-linear"></iconify-icon>تصنيفات</span>
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:widget-3-linear"></iconify-icon>شبكة منتجات</span>
                        `;
                    } else {
                        componentsList.innerHTML = `
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:tag-horizontal-linear"></iconify-icon>تصنيفات</span>
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>بانر رئيسي</span>
                            <span class="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:widget-3-linear"></iconify-icon>شبكة منتجات</span>
                        `;
                    }
                });
            });

            // Wizard Color Capture
            document.querySelectorAll('.wizard-color').forEach(input => {
                input.addEventListener('input', (e) => {
                    const color = e.target.value;
                    e.target.parentElement.style.backgroundColor = color;
                    e.target.parentElement.nextElementSibling.nextElementSibling.textContent = color.toUpperCase();
                    if(e.target.getAttribute('data-target') === 'primary') appColors.primary = color;
                    else appColors.bg = color;
                });
            });

            btnNext.addEventListener('click', () => {
                if(currentStep < maxSteps) {
                    currentStep++;
                    updateStepperUI();
                } else {
                    finishSetup();
                }
            });

            btnPrev.addEventListener('click', () => {
                if(currentStep > 1) {
                    currentStep--;
                    updateStepperUI();
                }
            });

            // --- Apply & Sync Data ---
            function updateBuilderTheme() {
                const appName = document.getElementById('app-setting-name').value || 'تطبيق المتجر';
                document.getElementById('app-header-title').textContent = appName;
                
                const primColor = document.getElementById('app-setting-color-primary').value;
                const bgColor = document.getElementById('app-setting-color-bg').value;

                document.getElementById('phone-mockup').style.backgroundColor = bgColor;
                document.getElementById('app-header').style.backgroundColor = bgColor;
                document.getElementById('mockup-dropzone').style.backgroundColor = bgColor;
                
                let styleTag = document.getElementById('dynamic-theme-styles');
                if (!styleTag) {
                    styleTag = document.createElement('style');
                    styleTag.id = 'dynamic-theme-styles';
                    document.head.appendChild(styleTag);
                }
                styleTag.innerHTML = `
                    .btn-theme { background-color: ${primColor} !important; color: #ffffff !important; }
                    .text-theme { color: #171717; }
                    .icon-theme { color: #171717; }
                `;
            }

            function updateThemeSelectionUI() {
                document.querySelectorAll('.theme-setting-option').forEach(el => {
                    const theme = el.getAttribute('data-theme');
                    const div = el.querySelector('div');
                    if (theme === selectedTheme) {
                        div.className = 'border border-neutral-900 rounded-lg p-1.5 bg-neutral-100 text-center text-[10px] font-medium text-neutral-900 shadow-sm transition-colors';
                    } else {
                        div.className = 'border border-neutral-200 hover:border-neutral-400 rounded-lg p-1.5 bg-white text-center text-[10px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors';
                    }
                });
            }

            function applyThemeLayout() {
                const dropzone = document.getElementById('mockup-dropzone');
                // Clear current items
                Array.from(dropzone.children).forEach(child => {
                    if(child.id !== 'drop-indicator' && child.id !== 'empty-state') {
                        child.remove();
                    }
                });
                
                document.getElementById('empty-state').classList.add('hidden');
                
                if(selectedTheme === 'basic') {
                    addTemplateItem('hero');
                    addTemplateItem('categories');
                    addTemplateItem('grid');
                } else {
                    addTemplateItem('categories');
                    addTemplateItem('hero');
                    addTemplateItem('grid');
                }
                checkEmptyState();
            }

            function finishSetup() {
                const wizardName = document.getElementById('wizard-app-name').value || 'متجري المتميز';
                
                // Sync data to builder settings tab
                document.getElementById('app-setting-name').value = wizardName;
                
                document.getElementById('app-setting-color-primary').value = appColors.primary;
                document.getElementById('setting-color-primary-wrapper').style.backgroundColor = appColors.primary;
                document.getElementById('setting-color-primary-hex').textContent = appColors.primary.toUpperCase();

                document.getElementById('app-setting-color-bg').value = appColors.bg;
                document.getElementById('setting-color-bg-wrapper').style.backgroundColor = appColors.bg;
                document.getElementById('setting-color-bg-hex').textContent = appColors.bg.toUpperCase();

                updateThemeSelectionUI();
                updateBuilderTheme();
                applyThemeLayout();

                // Hide wizard
                const wizard = document.getElementById('setup-wizard');
                const builder = document.getElementById('main-builder');
                
                wizard.style.opacity = '0';
                setTimeout(() => {
                    wizard.remove();
                    builder.classList.remove('opacity-0', 'pointer-events-none');
                    builder.classList.add('opacity-100', 'pointer-events-auto');
                    showToast('تم التجهيز!', 'مساحة العمل جاهزة. يمكنك تعديل الإعدادات من تبويب التصميم.');
                }, 500);
            }

            // --- Builder Interactivity: Tab Switching ---
            const tabComponents = document.getElementById('tab-components');
            const tabSettings = document.getElementById('tab-settings');
            const contentComponents = document.getElementById('tab-content-components');
            const contentSettings = document.getElementById('tab-content-settings');

            tabComponents.addEventListener('click', () => {
                tabComponents.className = 'flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm text-neutral-900 transition-all';
                tabSettings.className = 'flex-1 py-1.5 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-900 transition-all';
                contentComponents.classList.remove('hidden');
                contentComponents.classList.add('flex');
                contentSettings.classList.add('hidden');
            });

            tabSettings.addEventListener('click', () => {
                tabSettings.className = 'flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm text-neutral-900 transition-all';
                tabComponents.className = 'flex-1 py-1.5 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-900 transition-all';
                contentSettings.classList.remove('hidden');
                contentComponents.classList.add('hidden');
                contentComponents.classList.remove('flex');
            });

            // --- App Settings Live Bindings ---
            document.getElementById('app-setting-name').addEventListener('input', updateBuilderTheme);
            
            document.getElementById('app-setting-color-primary').addEventListener('input', (e) => {
                const color = e.target.value;
                document.getElementById('setting-color-primary-wrapper').style.backgroundColor = color;
                document.getElementById('setting-color-primary-hex').textContent = color.toUpperCase();
                updateBuilderTheme();
            });
            
            document.getElementById('app-setting-color-bg').addEventListener('input', (e) => {
                const color = e.target.value;
                document.getElementById('setting-color-bg-wrapper').style.backgroundColor = color;
                document.getElementById('setting-color-bg-hex').textContent = color.toUpperCase();
                updateBuilderTheme();
            });

            document.querySelectorAll('.theme-setting-option').forEach(el => {
                el.addEventListener('click', () => {
                    selectedTheme = el.getAttribute('data-theme');
                    updateThemeSelectionUI();
                    applyThemeLayout();
                    showToast('تم تحديث القالب', 'تم إعادة ترتيب مكونات التطبيق بناءً على القالب الجديد.');
                });
            });

            // --- Component Library & Canvas Logic ---
            const sidebarContainer = document.getElementById('sidebar-container');
            const btnBack = document.getElementById('btn-back-components');
            const settingsTitle = document.getElementById('settings-title');
            const settingsContent = document.getElementById('settings-content');
            const mockupDropzone = document.getElementById('mockup-dropzone');
            const btnDelete = document.getElementById('btn-delete-component');
            const emptyState = document.getElementById('empty-state');
            
            let currentSelectedId = null;

            function openSettings(type, title, elementId) {
                currentSelectedId = elementId;
                settingsTitle.textContent = title;
                
                document.querySelectorAll('.canvas-item').forEach(el => el.classList.remove('selected'));
                const targetEl = document.querySelector(`.canvas-item[data-id="${elementId}"]`);
                if(targetEl) targetEl.classList.add('selected');

                const tpl = document.getElementById(`tpl-settings-${type}`);
                settingsContent.innerHTML = '';
                if(tpl) {
                    settingsContent.appendChild(tpl.content.cloneNode(true));
                } else {
                    settingsContent.innerHTML = '<div class="p-4 text-center text-xs text-neutral-500">لا توجد إعدادات إضافية لهذا المكون.</div>';
                }

                sidebarContainer.classList.add('show-settings');
            }

            function closeSettings() {
                currentSelectedId = null;
                document.querySelectorAll('.canvas-item').forEach(el => el.classList.remove('selected'));
                sidebarContainer.classList.remove('show-settings');
            }

            btnBack.addEventListener('click', closeSettings);

            btnDelete.addEventListener('click', () => {
                if(currentSelectedId) {
                    const el = document.querySelector(`.canvas-item[data-id="${currentSelectedId}"]`);
                    if(el) {
                        el.remove();
                        checkEmptyState();
                        showToast('تم الحذف', 'تم إزالة المكون من واجهة المتجر.');
                        closeSettings();
                    }
                }
            });

            function checkEmptyState() {
                const items = mockupDropzone.querySelectorAll('.canvas-item');
                if(items.length === 0) {
                    emptyState.classList.remove('hidden');
                    emptyState.classList.add('flex');
                } else {
                    emptyState.classList.add('hidden');
                    emptyState.classList.remove('flex');
                }
            }

            function addTemplateItem(type) {
                const tpl = document.getElementById(`canvas-${type}`);
                if(!tpl) return;
                const clone = tpl.content.cloneNode(true);
                const el = clone.querySelector('.canvas-item');
                el.setAttribute('data-id', 'item-' + Date.now() + Math.random().toString(36).substr(2, 5));
                
                const dropIndicator = document.getElementById('drop-indicator');
                mockupDropzone.insertBefore(el, dropIndicator);
                
                setupCanvasDraggable(el);
                attachCanvasItemListeners(el);
            }

            function attachCanvasItemListeners(item) {
                item.addEventListener('click', (e) => {
                    if(e.target.closest('.drag-handle')) return;
                    const type = item.getAttribute('data-type');
                    const id = item.getAttribute('data-id');
                    let title = "إعدادات المكون";
                    if(type === 'hero') title = "البانر الرئيسي";
                    if(type === 'categories') title = "التصنيفات";
                    if(type === 'grid') title = "شبكة المنتجات";
                    openSettings(type, title, id);
                });
            }

            // Drag and Drop
            let draggedSource = null;
            let draggedElement = null;

            document.querySelectorAll('#component-list .draggable-item').forEach(item => {
                item.addEventListener('dragstart', (e) => {
                    draggedSource = 'library';
                    e.dataTransfer.setData('type', item.getAttribute('data-type'));
                    e.dataTransfer.effectAllowed = 'copy';
                });
            });

            function setupCanvasDraggable(item) {
                item.addEventListener('dragstart', (e) => {
                    draggedSource = 'canvas';
                    draggedElement = item;
                    setTimeout(() => item.classList.add('dragging'), 0);
                    e.dataTransfer.effectAllowed = 'move';
                    if(item.classList.contains('selected')) closeSettings();
                });

                item.addEventListener('dragend', () => {
                    item.classList.remove('dragging');
                    draggedElement = null;
                    document.querySelectorAll('.canvas-item').forEach(el => {
                        el.classList.remove('drop-target-above', 'drop-target-below');
                    });
                    document.getElementById('drop-indicator').classList.add('hidden');
                });
            }

            function getDragAfterElement(container, y) {
                const draggableElements = [...container.querySelectorAll('.canvas-item:not(.dragging)')];
                return draggableElements.reduce((closest, child) => {
                    const box = child.getBoundingClientRect();
                    const offset = y - box.top - box.height / 2;
                    if (offset < 0 && offset > closest.offset) {
                        return { offset: offset, element: child };
                    } else {
                        return closest;
                    }
                }, { offset: Number.NEGATIVE_INFINITY }).element;
            }

            mockupDropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                const afterElement = getDragAfterElement(mockupDropzone, e.clientY);
                document.querySelectorAll('.canvas-item').forEach(el => {
                    el.classList.remove('drop-target-above', 'drop-target-below');
                });
                if (afterElement) {
                    afterElement.classList.add('drop-target-above');
                } else {
                    const lastChild = mockupDropzone.lastElementChild;
                    if(lastChild && lastChild.id !== 'drop-indicator' && lastChild.id !== 'empty-state') {
                        lastChild.classList.add('drop-target-below');
                    }
                }
            });

            mockupDropzone.addEventListener('dragleave', (e) => {
                if(!mockupDropzone.contains(e.relatedTarget)) {
                    document.querySelectorAll('.canvas-item').forEach(el => {
                        el.classList.remove('drop-target-above', 'drop-target-below');
                    });
                }
            });

            mockupDropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                document.querySelectorAll('.canvas-item').forEach(el => {
                    el.classList.remove('drop-target-above', 'drop-target-below');
                });

                const afterElement = getDragAfterElement(mockupDropzone, e.clientY);

                if (draggedSource === 'canvas' && draggedElement) {
                    if (afterElement == null) {
                        mockupDropzone.insertBefore(draggedElement, document.getElementById('drop-indicator'));
                    } else {
                        mockupDropzone.insertBefore(draggedElement, afterElement);
                    }
                } 
                else if (draggedSource === 'library') {
                    const type = e.dataTransfer.getData('type');
                    if(!type) return;

                    const newId = 'item-' + Date.now();
                    const newItem = document.createElement('div');
                    
                    const tpl = document.getElementById(`canvas-${type}`);
                    if(tpl) {
                        const clone = tpl.content.cloneNode(true);
                        const el = clone.querySelector('.canvas-item');
                        el.setAttribute('data-id', newId);
                        
                        if (afterElement == null) {
                            mockupDropzone.insertBefore(el, document.getElementById('drop-indicator'));
                        } else {
                            mockupDropzone.insertBefore(el, afterElement);
                        }
                        
                        setupCanvasDraggable(el);
                        attachCanvasItemListeners(el);
                        checkEmptyState();
                        setTimeout(() => el.click(), 50);
                    }
                }
                draggedSource = null;
            });

        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-[#FAFAFA] z-50 flex flex-col transition-opacity duration-500 overflow-y-auto" id="setup-wizard">
<header className="h-16 border-b border-neutral-200 flex items-center justify-center bg-white flex-shrink-0">
<span className="font-medium text-xl tracking-tight">ز د</span>
</header>
<div className="flex-1 flex flex-col items-center py-10 px-4">
<div className="max-w-2xl w-full flex flex-col">
<div className="mb-8 text-center">
<h1 className="text-2xl font-medium tracking-tight mb-2">إعداد تطبيق متجرك</h1>
<p className="text-sm text-neutral-500">أكمل الخطوات التالية لبناء تطبيقك الخاص بخطوات بسيطة</p>
</div>
<div className="bg-white border border-neutral-200 rounded-2xl shadow-sm flex flex-col overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-neutral-50/50">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-medium" id="stepper-badge-1">1</div>
<span className="text-sm font-medium text-neutral-900" id="stepper-title-1">الربط مع زد</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-4"></div>
<div className="flex items-center gap-2 opacity-50" id="stepper-group-2">
<div className="w-6 h-6 rounded-full border border-neutral-300 bg-white text-neutral-500 flex items-center justify-center text-xs font-medium" id="stepper-badge-2">2</div>
<span className="text-sm font-medium text-neutral-500 hidden sm:inline" id="stepper-title-2">المعلومات</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-4"></div>
<div className="flex items-center gap-2 opacity-50" id="stepper-group-3">
<div className="w-6 h-6 rounded-full border border-neutral-300 bg-white text-neutral-500 flex items-center justify-center text-xs font-medium" id="stepper-badge-3">3</div>
<span className="text-sm font-medium text-neutral-500 hidden sm:inline" id="stepper-title-3">الألوان</span>
</div>
<div className="flex-1 h-px bg-neutral-200 mx-4"></div>
<div className="flex items-center gap-2 opacity-50" id="stepper-group-4">
<div className="w-6 h-6 rounded-full border border-neutral-300 bg-white text-neutral-500 flex items-center justify-center text-xs font-medium" id="stepper-badge-4">4</div>
<span className="text-sm font-medium text-neutral-500 hidden sm:inline" id="stepper-title-4">القالب</span>
</div>
</div>

<div className="p-6 relative min-h-[380px] flex flex-col">

<div className="step-content step-active flex-1 flex flex-col items-center justify-center text-center" id="step-1">
<div className="w-16 h-16 bg-neutral-50 border border-neutral-200 rounded-2xl flex items-center justify-center mb-5">
<iconify-icon className="text-neutral-900" icon="solar:link-circle-linear" width="32"></iconify-icon>
</div>
<h2 className="text-lg font-medium tracking-tight mb-2">ربط متجرك في منصة زد</h2>
<p className="text-sm text-neutral-500 mb-8 max-w-sm">سيتم جلب جميع منتجاتك، التصنيفات، وإعدادات المتجر تلقائياً لتأسيس تطبيقك.</p>
<button className="bg-neutral-900 text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-all flex items-center gap-2 shadow-sm" id="btn-connect-zid">
<iconify-icon icon="solar:plug-circle-linear" width="18"></iconify-icon>
<span>ربط المتجر الآن</span>
</button>
</div>

<div className="step-content step-hidden flex-1 flex flex-col w-full" id="step-2">
<h2 className="text-base font-medium tracking-tight mb-5">المعلومات الأساسية</h2>
<div className="space-y-5">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">اسم التطبيق</label>
<input className="w-full bg-white border border-neutral-200 focus:border-neutral-900 rounded-md py-2 px-3 text-sm outline-none transition-colors" id="wizard-app-name" placeholder="أدخل اسم التطبيق" type="text" value="متجري المتميز"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">أيقونة التطبيق</label>
<div className="border border-dashed border-neutral-300 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer text-center h-28 relative group">
<iconify-icon className="text-neutral-400 mb-2 group-hover:text-neutral-600 transition-colors" icon="solar:gallery-add-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">رفع صورة (1024x1024)</span>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 mb-1.5">شاشة البداية (Splash)</label>
<div className="border border-dashed border-neutral-300 rounded-xl p-4 flex flex-col items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer text-center h-28 relative group">
<iconify-icon className="text-neutral-400 mb-2 group-hover:text-neutral-600 transition-colors" icon="solar:smartphone-2-linear" width="24"></iconify-icon>
<span className="text-xs font-medium text-neutral-600">رفع صورة عمودية</span>
</div>
</div>
</div>
</div>
</div>

<div className="step-content step-hidden flex-1 flex flex-col w-full" id="step-3">
<h2 className="text-base font-medium tracking-tight mb-5">ألوان الهوية</h2>
<p className="text-sm text-neutral-500 mb-6">اختر الألوان التي تعكس هوية علامتك التجارية لتطبيقها على الأزرار والنصوص.</p>
<div className="space-y-4">
<div className="flex items-center justify-between p-4 border border-neutral-200 rounded-xl bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#171717] border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] relative color-picker-wrapper">
<input className="wizard-color" data-target="primary" type="color" value="#171717"/>
</div>
<div>
<span className="block text-sm font-medium text-neutral-900">اللون الأساسي</span>
<span className="block text-xs text-neutral-500">يستخدم للأزرار والعناصر البارزة</span>
</div>
</div>
<span className="text-xs font-medium text-neutral-400 font-mono uppercase">#171717</span>
</div>
<div className="flex items-center justify-between p-4 border border-neutral-200 rounded-xl bg-white">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#FAFAFA] border-2 border-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)] relative color-picker-wrapper">
<input className="wizard-color" data-target="bg" type="color" value="#FAFAFA"/>
</div>
<div>
<span className="block text-sm font-medium text-neutral-900">لون الخلفية</span>
<span className="block text-xs text-neutral-500">اللون العام لخلفية التطبيق</span>
</div>
</div>
<span className="text-xs font-medium text-neutral-400 font-mono uppercase">#FAFAFA</span>
</div>
</div>
</div>

<div className="step-content step-hidden flex-1 flex flex-col w-full" id="step-4">
<h2 className="text-base font-medium tracking-tight mb-2">القالب الهيكلي</h2>
<p className="text-sm text-neutral-500 mb-5">اختر البنية الأولية للتطبيق، يمكنك تخصيص المكونات لاحقاً بكل حرية.</p>
<div className="grid grid-cols-2 gap-4 mb-6">
<div className="theme-option cursor-pointer group" data-theme="basic">
<div className="h-32 bg-neutral-100 rounded-xl border-2 border-[#171717] relative overflow-hidden transition-all flex items-center justify-center p-2">

<div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col p-1 gap-1">
<div className="h-10 bg-neutral-200 rounded-md"></div>
<div className="flex gap-1 h-8"><div className="flex-1 bg-neutral-100 rounded"></div><div className="flex-1 bg-neutral-100 rounded"></div><div className="flex-1 bg-neutral-100 rounded"></div></div>
<div className="grid grid-cols-2 gap-1 flex-1"><div className="bg-neutral-100 rounded"></div><div className="bg-neutral-100 rounded"></div></div>
</div>
<div className="absolute top-2 left-2 w-5 h-5 bg-[#171717] rounded-full flex items-center justify-center text-white theme-check transition-opacity">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium text-neutral-900">القالب الأساسي</span>
</div>
</div>
<div className="theme-option cursor-pointer group" data-theme="advanced">
<div className="h-32 bg-neutral-100 rounded-xl border-2 border-transparent hover:border-neutral-300 relative overflow-hidden transition-all flex items-center justify-center p-2">

<div className="w-full h-full bg-white rounded-lg shadow-sm flex flex-col p-1 gap-1">
<div className="h-6 bg-neutral-200 rounded-md"></div>
<div className="h-10 bg-neutral-100 rounded-md"></div>
<div className="h-8 bg-neutral-200 rounded-md"></div>
<div className="h-4 w-1/2 bg-neutral-100 rounded mx-auto mt-1"></div>
</div>
<div className="absolute top-2 left-2 w-5 h-5 bg-[#171717] rounded-full flex items-center justify-center text-white theme-check opacity-0 transition-opacity">
<iconify-icon icon="solar:check-read-linear" width="12"></iconify-icon>
</div>
</div>
<div className="mt-2 flex items-center justify-between">
<span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">قالب التخفيضات</span>
</div>
</div>
</div>

<div className="bg-neutral-50 rounded-lg p-3 border border-neutral-100">
<span className="text-xs font-medium text-neutral-500 mb-2 block">مكونات القالب المحدد:</span>
<div className="flex flex-wrap gap-2" id="theme-components-list">
<span className="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:gallery-wide-linear"></iconify-icon>بانر رئيسي</span>
<span className="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:tag-horizontal-linear"></iconify-icon>تصنيفات</span>
<span className="px-2.5 py-1 bg-white border border-neutral-200 rounded-md text-xs text-neutral-700 flex items-center gap-1.5 shadow-sm"><iconify-icon icon="solar:widget-3-linear"></iconify-icon>شبكة منتجات</span>
</div>
</div>
</div>
</div>

<div className="px-6 py-4 border-t border-neutral-100 bg-neutral-50/50 flex items-center justify-between">
<button className="px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors opacity-0 pointer-events-none" id="btn-prev">
                            رجوع
                        </button>
<button className="bg-neutral-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" disabled="" id="btn-next">
                            التالي
                        </button>
</div>
</div>
</div>
</div>
</div>
<div className="fixed bottom-6 left-6 z-[60] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>

<div className="flex-1 flex min-w-0 overflow-hidden bg-[#FAFAFA] w-full h-full opacity-0 pointer-events-none transition-opacity duration-500" id="main-builder">

<aside className="w-64 bg-white border-l border-neutral-200 flex flex-col flex-shrink-0 z-20 hidden md:flex">
<div className="h-14 flex items-center px-6 border-b border-neutral-200">
<span className="font-semibold text-lg tracking-tight">ز د</span>
</div>
<div className="flex-1 overflow-y-auto py-4 flex flex-col gap-0.5 px-3">
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:widget-5-linear" width="18"></iconify-icon>
                    نظرة عامة
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md bg-neutral-100 text-neutral-900 font-medium" href="#">
<iconify-icon icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
                    صانع المتجر
                </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-md text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors" href="#">
<iconify-icon icon="solar:smartphone-update-linear" width="18"></iconify-icon>
                    الإصدارات
                </a>
</div>
<div className="p-4 border-t border-neutral-200 flex items-center gap-3">
<div className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs">م</div>
<span className="font-medium text-sm">المدير</span>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">
<header className="h-14 bg-white border-b border-neutral-200 flex items-center justify-between px-6 z-10 sticky top-0 flex-shrink-0">
<div className="flex items-center gap-4">
<h1 className="text-base font-medium tracking-tight text-neutral-900">صانع المتجر</h1>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500 text-xs font-medium border border-neutral-200">تطبيق iOS &amp; Android</span>
</div>
<div className="flex items-center gap-3">
<span className="text-xs text-neutral-500 mr-4">تم الحفظ تلقائياً</span>
<button className="py-1.5 px-4 rounded-md bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-colors text-xs shadow-sm">
                        نشر التحديثات
                    </button>
</div>
</header>
<div className="flex-1 overflow-y-auto p-4 lg:p-6">
<div className="max-w-7xl mx-auto h-full min-h-[700px]">
<div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-full relative">

<div className="w-full md:w-80 border-b md:border-b-0 md:border-l border-neutral-200 flex flex-col flex-shrink-0 relative bg-neutral-50 overflow-hidden z-10" id="sidebar-container">

<div className="absolute inset-0 flex flex-col sidebar-view bg-white z-10" id="view-main">

<div className="px-4 pt-4 pb-2 border-b border-neutral-200 bg-white">
<div className="flex bg-neutral-100 p-1 rounded-lg">
<button className="flex-1 py-1.5 text-xs font-medium rounded-md bg-white shadow-sm text-neutral-900 transition-all" id="tab-components">المكونات</button>
<button className="flex-1 py-1.5 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-900 transition-all" id="tab-settings">إعدادات التطبيق</button>
</div>
</div>

<div className="flex-1 flex flex-col overflow-hidden" id="tab-content-components">
<div className="p-4 border-b border-neutral-200">
<div className="relative">
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-400" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-400 focus:bg-white rounded-md py-1.5 pr-8 pl-3 text-xs outline-none transition-all placeholder:text-neutral-400" id="component-search" placeholder="بحث عن مكون..." type="text"/>
</div>
</div>
<div className="flex-1 overflow-y-auto p-3 space-y-2" id="component-list">
<div className="draggable-item flex flex-col gap-2 p-3 bg-white border border-neutral-200 rounded-lg cursor-grab hover:border-neutral-300 transition-colors" data-type="hero" draggable="true">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:gallery-wide-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-900 item-title">بانر رئيسي</span>
</div>
<div className="h-12 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center">
<div className="w-3/4 h-2 bg-neutral-200 rounded-full"></div>
</div>
</div>
<div className="draggable-item flex flex-col gap-2 p-3 bg-white border border-neutral-200 rounded-lg cursor-grab hover:border-neutral-300 transition-colors" data-type="categories" draggable="true">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:tag-horizontal-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-900 item-title">تصنيفات أفقية</span>
</div>
<div className="flex gap-2 h-12">
<div className="flex-1 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-neutral-200"></div></div>
<div className="flex-1 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-neutral-200"></div></div>
<div className="flex-1 bg-neutral-50 rounded border border-neutral-100 flex items-center justify-center"><div className="w-4 h-4 rounded-full bg-neutral-200"></div></div>
</div>
</div>
<div className="draggable-item flex flex-col gap-2 p-3 bg-white border border-neutral-200 rounded-lg cursor-grab hover:border-neutral-300 transition-colors" data-type="grid" draggable="true">
<div className="flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:widget-3-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-neutral-900 item-title">شبكة منتجات</span>
</div>
<div className="grid grid-cols-2 gap-2 h-16">
<div className="bg-neutral-50 rounded border border-neutral-100"></div>
<div className="bg-neutral-50 rounded border border-neutral-100"></div>
</div>
</div>
</div>
<div className="p-4 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500 flex items-center justify-center gap-2">
<iconify-icon icon="solar:info-circle-linear" width="14"></iconify-icon>
                                        اسحب المكونات إلى الهاتف لإضافتها
                                    </div>
</div>

<div className="flex-1 overflow-y-auto p-4 hidden space-y-6 bg-neutral-50" id="tab-content-settings">

<div>
<label className="block text-xs font-medium text-neutral-700 mb-1.5">اسم التطبيق</label>
<input className="w-full bg-white border border-neutral-200 focus:border-neutral-900 rounded-md py-1.5 px-3 text-sm outline-none transition-colors" id="app-setting-name" type="text"/>
</div>

<div>
<label className="block text-xs font-medium text-neutral-700 mb-2">ألوان الهوية</label>
<div className="space-y-2">
<div className="flex items-center justify-between p-2.5 border border-neutral-200 rounded-lg bg-white shadow-sm">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded border border-neutral-200 relative color-picker-wrapper overflow-hidden" id="setting-color-primary-wrapper">
<input id="app-setting-color-primary" type="color"/>
</div>
<span className="text-xs font-medium text-neutral-900">اللون الأساسي</span>
</div>
<span className="text-[10px] font-medium text-neutral-400 font-mono uppercase" id="setting-color-primary-hex"></span>
</div>
<div className="flex items-center justify-between p-2.5 border border-neutral-200 rounded-lg bg-white shadow-sm">
<div className="flex items-center gap-2.5">
<div className="w-6 h-6 rounded border border-neutral-200 relative color-picker-wrapper overflow-hidden" id="setting-color-bg-wrapper">
<input id="app-setting-color-bg" type="color"/>
</div>
<span className="text-xs font-medium text-neutral-900">لون الخلفية</span>
</div>
<span className="text-[10px] font-medium text-neutral-400 font-mono uppercase" id="setting-color-bg-hex"></span>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-700 mb-2">الصور والأيقونات</label>
<div className="grid grid-cols-2 gap-2">
<div className="border border-dashed border-neutral-300 rounded-lg p-3 flex flex-col items-center justify-center hover:bg-neutral-100 bg-white transition-colors cursor-pointer text-center group h-20 relative">
<iconify-icon className="text-neutral-400 mb-1 group-hover:text-neutral-600 transition-colors" icon="solar:gallery-add-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-neutral-600">تغيير الأيقونة</span>
</div>
<div className="border border-dashed border-neutral-300 rounded-lg p-3 flex flex-col items-center justify-center hover:bg-neutral-100 bg-white transition-colors cursor-pointer text-center group h-20 relative">
<iconify-icon className="text-neutral-400 mb-1 group-hover:text-neutral-600 transition-colors" icon="solar:smartphone-2-linear" width="20"></iconify-icon>
<span className="text-[10px] font-medium text-neutral-600">شاشة البداية</span>
</div>
</div>
</div>

<div>
<label className="block text-xs font-medium text-neutral-700 mb-2">القالب الهيكلي</label>
<div className="grid grid-cols-2 gap-2">
<div className="theme-setting-option cursor-pointer group" data-theme="basic">
<div className="border border-neutral-900 rounded-lg p-1.5 bg-neutral-100 text-center text-[10px] font-medium text-neutral-900 transition-colors shadow-sm">القالب الأساسي</div>
</div>
<div className="theme-setting-option cursor-pointer group" data-theme="advanced">
<div className="border border-neutral-200 hover:border-neutral-400 rounded-lg p-1.5 bg-white text-center text-[10px] font-medium text-neutral-500 hover:text-neutral-900 transition-colors">قالب التخفيضات</div>
</div>
</div>
<p className="text-[10px] text-neutral-500 mt-2 flex items-center gap-1.5">
<iconify-icon icon="solar:info-circle-linear" width="12"></iconify-icon>
                                            تغيير القالب سيعيد ترتيب مكونات التطبيق.
                                        </p>
</div>
</div>
</div>

<div className="absolute inset-0 flex flex-col sidebar-view bg-white z-20" id="view-settings">
<div className="h-14 px-4 border-b border-neutral-200 flex items-center justify-between bg-white">
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-neutral-100 text-neutral-500 transition-colors -ml-2" id="btn-back-components">
<iconify-icon icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</button>
<h3 className="text-sm font-medium text-neutral-900" id="settings-title">الإعدادات</h3>
</div>
<button className="text-red-500 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-md transition-colors" id="btn-delete-component" title="حذف المكون">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 bg-neutral-50" id="settings-content"></div>
</div>
</div>

<div className="flex-1 builder-bg flex items-center justify-center p-6 relative overflow-hidden">
<div className="w-[320px] h-[640px] bg-white rounded-[2.5rem] border-[10px] border-neutral-900 shadow-2xl relative flex flex-col flex-shrink-0 overflow-hidden transition-colors" id="phone-mockup">

<div className="h-6 w-full flex items-center justify-between px-5 text-xs font-medium text-neutral-900 absolute top-0 z-20 pointer-events-none mix-blend-difference text-white">
<span>9:41</span>
<div className="flex gap-1.5 items-center">
<iconify-icon icon="solar:cellular-network-linear" width="12"></iconify-icon>
<iconify-icon icon="solar:wi-fi-linear" width="12"></iconify-icon>
<iconify-icon icon="solar:battery-charge-linear" width="12"></iconify-icon>
</div>
</div>

<div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20 pointer-events-none">
<div className="w-32 h-5 bg-neutral-900 rounded-b-2xl"></div>
</div>

<div className="pt-10 pb-3 px-4 flex items-center justify-between border-b border-neutral-100 bg-white z-10 transition-colors" id="app-header">
<iconify-icon className="text-neutral-800 transition-colors icon-theme" icon="solar:hamburger-menu-linear" width="22"></iconify-icon>
<span className="font-medium text-sm tracking-tight transition-colors text-theme" id="app-header-title">متجري المتميز</span>
<iconify-icon className="text-neutral-800 transition-colors icon-theme" icon="solar:cart-large-2-linear" width="22"></iconify-icon>
</div>

<div className="flex-1 overflow-y-auto bg-white p-3 space-y-3 pb-8 relative transition-colors" id="mockup-dropzone">
<div className="hidden h-32 border-2 border-dashed border-neutral-200 rounded-xl flex-col items-center justify-center text-neutral-400 bg-neutral-50 pointer-events-none mt-4" id="empty-state">
<iconify-icon className="mb-2" icon="solar:download-square-linear" width="24"></iconify-icon>
<span className="text-xs font-medium">اسحب المكونات هنا</span>
</div>

<div className="h-1 bg-neutral-900 rounded-full w-full hidden pointer-events-none" id="drop-indicator"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<template id="tpl-settings-hero">
<div className="space-y-5 animate-pop">
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-4">
<div className="flex items-center justify-between">
<div>
<span className="block text-sm font-medium">عرض بكامل الشاشة</span>
<span className="block text-xs text-neutral-500 mt-0.5">إزالة الهوامش الجانبية</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only custom-toggle peer" type="checkbox"/>
<div className="w-8 h-4.5 bg-neutral-200 rounded-full transition-colors relative">
<div className="absolute right-0.5 top-0.5 bg-white border border-neutral-200 rounded-full h-3.5 w-3.5 transition-transform duration-200"></div>
</div>
</label>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-3 px-1">الشرائح</h4>
<div className="space-y-3">
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden">
<div className="p-3 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
<div className="flex items-center gap-2"><iconify-icon className="text-neutral-400 cursor-grab" icon="solar:reorder-linear" width="14"></iconify-icon><span className="text-xs font-medium">شريحة ١</span></div>
<button className="text-neutral-400 hover:text-red-500 transition-colors"><iconify-icon icon="solar:trash-bin-trash-linear" width="14"></iconify-icon></button>
</div>
<div className="p-4 space-y-4">
<div>
<label className="block text-xs text-neutral-500 mb-1.5">صورة الشريحة</label>
<div className="border border-dashed border-neutral-300 rounded-lg p-3 flex flex-col items-center justify-center hover:bg-neutral-50 transition-colors cursor-pointer relative overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=100&amp;h=50&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="text-neutral-700 relative z-10 mb-1" icon="solar:upload-minimalistic-linear" width="18"></iconify-icon>
<span className="text-xs font-medium text-neutral-700 relative z-10">تغيير الصورة</span>
</div>
</div>
<div>
<label className="block text-xs text-neutral-500 mb-1.5">العنوان الرئيسي</label>
<input className="w-full bg-white border border-neutral-200 focus:border-neutral-900 rounded-md py-1.5 px-3 text-sm outline-none transition-colors" type="text" value="تشكيلة الصيف"/>
</div>
</div>
</div>
</div>
</div>
</div>
</template>
<template id="tpl-settings-categories">
<div className="space-y-5 animate-pop">
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-4">
<div>
<label className="block text-xs text-neutral-500 mb-1.5">شكل الأيقونات</label>
<select className="w-full bg-white border border-neutral-200 focus:border-neutral-900 rounded-md py-1.5 px-3 text-sm outline-none transition-colors appearance-none">
<option>دائري</option>
<option>مربع بحواف ناعمة</option>
<option>مربع</option>
</select>
</div>
</div>
</div>
</template>
<template id="tpl-settings-grid">
<div className="space-y-5 animate-pop">
<div className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm space-y-4">
<div>
<label className="block text-xs text-neutral-500 mb-1.5">عدد الأعمدة</label>
<div className="flex bg-neutral-100 p-1 rounded-lg">
<button className="flex-1 py-1 text-xs font-medium rounded-md bg-white shadow-sm text-neutral-900">٢ أعمدة</button>
<button className="flex-1 py-1 text-xs font-medium rounded-md text-neutral-500 hover:text-neutral-900">٣ أعمدة</button>
</div>
</div>
</div>
<button className="w-full py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium hover:bg-neutral-800 transition-colors btn-theme">
                اختيار المنتجات
            </button>
</div>
</template>

<template id="canvas-hero">
<div className="canvas-item cursor-pointer border-2 border-transparent rounded-xl p-1 relative group" data-id="ITEM_ID" data-type="hero" draggable="true">
<div className="absolute top-2 left-2 z-10 w-6 h-6 bg-white shadow rounded flex items-center justify-center text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon></div>
<div className="h-44 bg-neutral-100 rounded-lg overflow-hidden relative group-hover:opacity-90 transition-opacity flex items-center justify-center">
<img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&amp;w=400&amp;h=200&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 text-center">
<h2 className="text-lg font-semibold text-neutral-900 mb-2">تسوق الآن</h2>
<span className="btn-theme bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-full font-medium transition-colors shadow-sm">عرض الكل</span>
</div>
</div>
</div>
</template>
<template id="canvas-categories">
<div className="canvas-item cursor-pointer border-2 border-transparent rounded-xl p-1 relative group" data-id="ITEM_ID" data-type="categories" draggable="true">
<div className="absolute top-2 left-2 z-10 w-6 h-6 bg-white shadow rounded flex items-center justify-center text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon></div>
<div className="flex gap-3 overflow-hidden px-1 py-2">
<div className="flex flex-col items-center gap-1.5"><div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500"><iconify-icon icon="solar:t-shirt-linear" width="20"></iconify-icon></div><span className="text-xs font-medium text-theme transition-colors">ملابس</span></div>
<div className="flex flex-col items-center gap-1.5"><div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500"><iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon></div><span className="text-xs font-medium text-theme transition-colors">حقائب</span></div>
<div className="flex flex-col items-center gap-1.5"><div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-500"><iconify-icon icon="solar:watch-square-linear" width="20"></iconify-icon></div><span className="text-xs font-medium text-theme transition-colors">ساعات</span></div>
</div>
</div>
</template>
<template id="canvas-grid">
<div className="canvas-item cursor-pointer border-2 border-transparent rounded-xl p-1 relative group" data-id="ITEM_ID" data-type="grid" draggable="true">
<div className="absolute top-2 left-2 z-10 w-6 h-6 bg-white shadow rounded flex items-center justify-center text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-grab drag-handle"><iconify-icon icon="solar:menu-dots-linear" width="14"></iconify-icon></div>
<div className="grid grid-cols-2 gap-3 p-1">
<div className="border border-neutral-200 rounded-lg p-2 bg-white"><div className="h-24 bg-neutral-100 rounded-md mb-2"></div><div className="h-3 bg-neutral-200 rounded w-2/3 mb-1"></div><div className="h-3 bg-neutral-100 rounded w-1/3"></div></div>
<div className="border border-neutral-200 rounded-lg p-2 bg-white"><div className="h-24 bg-neutral-100 rounded-md mb-2"></div><div className="h-3 bg-neutral-200 rounded w-2/3 mb-1"></div><div className="h-3 bg-neutral-100 rounded w-1/3"></div></div>
</div>
</div>
</template>


    </>
  );
}
