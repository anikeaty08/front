import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
},
accent: {
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
}
},
screens: {
'xs': '475px',
},
spacing: {
'safe-top': 'env(safe-area-inset-top)',
'safe-bottom': 'env(safe-area-inset-bottom)',
}
}
}
}



        // --- Animation Engine ---
        class NumberAnimator {
            constructor(element, isFloat = false) {
                this.element = element;
                this.value = 0;
                this.target = 0;
                this.isFloat = isFloat;
                this.raf = null;
            }

            to(newValue, symbol = '', suffix = '') {
                if (Math.abs(this.target - newValue) < 0.1) return;

                const startValue = this.value;
                this.target = newValue;
                const startTime = performance.now();
                const duration = 600;

                const ease = (t) => 1 - Math.pow(1 - t, 4);

                const animate = (currentTime) => {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const easedProgress = ease(progress);

                    this.value = startValue + (this.target - startValue) * easedProgress;

                    const displayValue = this.value.toLocaleString(undefined, {
                        minimumFractionDigits: this.isFloat ? 2 : 0,
                        maximumFractionDigits: this.isFloat ? 2 : 0
                    });
                    
                    if(this.element) {
                        this.element.textContent = `${symbol}${displayValue}${suffix}`;
                    }

                    if (progress < 1) {
                        this.raf = requestAnimationFrame(animate);
                    } else {
                        this.value = this.target;
                    }
                };

                if (this.raf) cancelAnimationFrame(this.raf);
                this.raf = requestAnimationFrame(animate);
            }
        }

        // --- Translations ---
        const i18n = {
            en: {
                fineTune: "Fine tune",
                restart: "Restart",
                settings: "Settings",
                download: "Download quote",
                deadline: "Deadline",
                deadlineDesc: "Urgency pricing",
                experience: "Experience level",
                expDesc: "Seniority multiplier",
                complexity: "Complexity",
                compDesc: "Project scope",
                dailyRate: "Fixed daily rate",
                rateDesc: "Constant rate to multiply with duration",
                set: "Set",
                totalCost: "Total Estimated Cost",
                duration: "Est. Duration",
                avgRate: "Avg. Daily Rate",
                activeServices: "Active Services",
                emptyProject: "Project is empty",
                emptyDesc: "Select services from the library to build your quote."
            },
            de: {
                fineTune: "Feinabstimmung",
                restart: "Neustart",
                settings: "Einstellungen",
                download: "Angebot laden",
                deadline: "Frist",
                deadlineDesc: "Dringlichkeit",
                experience: "Erfahrung",
                expDesc: "Seniorität",
                complexity: "Komplexität",
                compDesc: "Projektumfang",
                dailyRate: "Tagessatz",
                rateDesc: "Konstante",
                set: "Setzen",
                totalCost: "Geschätzte Gesamtkosten",
                duration: "Geschätzte Dauer",
                avgRate: "Ø Tagessatz",
                activeServices: "Aktive Leistungen",
                emptyProject: "Projekt ist leer",
                emptyDesc: "Wählen Sie Leistungen aus der Bibliothek."
            }
        };

        // --- State Management ---
        const state = {
            currency: 'EUR',
            currencySymbol: '€',
            language: 'en',
            taxRate: 19,
            modifiers: {
                deadline: 'soonish',
                complexity: 'medium',
                experience: 'experienced',
                client: 'small'
            },
            fixedRate: 450,
            cart: {},
            filter: 'all',
            search: '',
            isMobileSheetOpen: false,
            isMenuOpen: false
        };

        const multipliers = {
            deadline: { whenever: 1.0, soonish: 1.15, asap: 1.4 },
            complexity: { low: 1.0, medium: 1.3, high: 1.7 },
            experience: { beginner: 0.8, experienced: 1.0, worldclass: 1.5 },
            client: { small: 1.0, medium: 1.25, large: 1.5 }
        };

        // --- Data (Services) ---
        let services = [
            { id: 'web-dev', category: 'dev', title: 'Web Application', desc: 'Full-stack React/Next.js architecture with API integration.', 
              price: 1500, days: 5, icon: 'solar:code-circle-linear', type: 'configurable', min: 1, max: 10, unit: 'Pages',
              addons: [
                {id: 'seo', name: 'Technical SEO', price: 450},
                {id: 'analytics', name: 'Advanced Analytics', price: 250},
                {id: 'cms', name: 'Headless CMS', price: 850}
            ]},
            { id: 'ui-design', category: 'design', title: 'Interface Design', desc: 'High-fidelity visual design system and component library.', 
              price: 900, days: 3, icon: 'solar:palette-linear', type: 'configurable', min: 1, max: 20, unit: 'Screens',
              addons: [
                {id: 'proto', name: 'Interactive Prototype', price: 350},
                {id: 'motion', name: 'Micro-interactions', price: 500}
            ]},
            { id: 'branding', category: 'design', title: 'Brand Identity', desc: 'Logo, typography, color palette, and visual guidelines.', 
              price: 2800, days: 8, icon: 'solar:magic-stick-3-linear', type: 'fixed', unit: 'Unit',
              addons: [
                {id: 'social', name: 'Social Media Kit', price: 600},
                {id: 'print', name: 'Print Collateral', price: 400}
            ]},
            { id: 'backend', category: 'dev', title: 'Backend Architecture', desc: 'Database design, authentication, and server deployment.', 
              price: 1800, days: 6, icon: 'solar:server-square-linear', type: 'fixed', unit: 'System',
              addons: [
                {id: 'auth', name: 'Custom Auth', price: 500},
                {id: 'payment', name: 'Stripe Integration', price: 700}
            ]},
            { id: 'consulting', category: 'strategy', title: 'Strategy Workshop', desc: 'Discovery session to define product roadmap and MVP.', 
              price: 1200, days: 1, icon: 'solar:presentation-graph-linear', type: 'configurable', min: 1, max: 5, unit: 'Days',
              addons: []},
            { id: 'mobile', category: 'dev', title: 'Mobile App', desc: 'Cross-platform mobile application development.', 
              price: 2200, days: 10, icon: 'solar:smartphone-linear', type: 'fixed', unit: 'App',
              addons: [
                {id: 'store', name: 'App Store Deploy', price: 600}
            ]}
        ];

        // --- DOM Elements ---
        const els = {
            fineTuneBtn: document.getElementById('fineTuneBtn'),
            fineTunePanel: document.getElementById('fineTunePanel'),
            chevron: document.getElementById('fineTuneChevron'),
            servicesContainer: document.getElementById('servicesContainer'),
            cartList: document.getElementById('cartList'),
            emptyState: document.getElementById('emptyState'),
            totalDisplay: document.getElementById('totalDisplay'),
            daysDisplay: document.getElementById('daysDisplay'),
            dailyRateDisplay: document.getElementById('dailyRateDisplay'),
            mobileTotal: document.getElementById('mobileTotal'),
            itemCount: document.getElementById('itemCount'),
            searchInput: document.getElementById('searchInput'),
            pricingPanel: document.getElementById('pricingPanel'),
            mobileMenu: document.getElementById('mobileMenu')
        };

        // Initialize Animators
        const totalAnimator = new NumberAnimator(els.totalDisplay);
        const rateAnimator = new NumberAnimator(els.dailyRateDisplay);
        const mobileTotalAnimator = new NumberAnimator(els.mobileTotal);

        // --- Initialization ---
        function init() {
            renderServices();
            updatePricing();
            
            // Search Listener
            els.searchInput.addEventListener('input', (e) => {
                state.search = e.target.value.toLowerCase();
                renderServices();
            });

            document.addEventListener('keydown', (e) => {
                if(e.key === '/' && document.activeElement !== els.searchInput) {
                    e.preventDefault();
                    els.searchInput.focus();
                }
            });
        }

        // --- Core Functions ---
        function toggleFineTune() {
            const isHidden = els.fineTunePanel.classList.contains('hidden');
            if (isHidden) {
                els.fineTunePanel.classList.remove('hidden');
                els.fineTuneBtn.classList.add('bg-zinc-900', 'text-white');
                els.chevron.style.transform = 'rotate(180deg)';
            } else {
                els.fineTunePanel.classList.add('hidden');
                els.fineTuneBtn.classList.remove('bg-zinc-800', 'text-white');
                els.chevron.style.transform = 'rotate(0deg)';
            }
        }

        function toggleMobileSheet() {
            state.isMobileSheetOpen = !state.isMobileSheetOpen;
            if(state.isMobileSheetOpen) {
                els.pricingPanel.classList.remove('mobile-sheet-hidden');
                els.pricingPanel.classList.add('mobile-sheet-visible');
            } else {
                els.pricingPanel.classList.add('mobile-sheet-hidden');
                els.pricingPanel.classList.remove('mobile-sheet-visible');
            }
        }

        function toggleMenu() {
            state.isMenuOpen = !state.isMenuOpen;
            if(state.isMenuOpen) {
                els.mobileMenu.classList.add('open');
            } else {
                els.mobileMenu.classList.remove('open');
            }
        }

        function focusSearch() {
            els.searchInput.focus();
        }

        function setModifier(group, value) {
            state.modifiers[group] = value;
            document.querySelectorAll(`button[data-group="${group}"]`).forEach(btn => {
                if(btn.dataset.val === value) btn.classList.add('active');
                else btn.classList.remove('active');
            });
            updatePricing();
        }

        function updateRate() {
            const val = parseInt(document.getElementById('dailyRateInput').value);
            if(val && val > 0) {
                state.fixedRate = val;
                updatePricing();
                showToast(state.language === 'en' ? "Daily rate updated" : "Tagessatz aktualisiert", 'success');
            }
        }

        // --- Category Filter ---
        function filterCategory(cat) {
            state.filter = cat;
            document.querySelectorAll('.cat-btn').forEach(btn => {
                if(btn.dataset.cat === cat) {
                    btn.classList.add('active', 'bg-zinc-900', 'text-zinc-400', 'border-zinc-800');
                    btn.classList.remove('bg-transparent', 'text-zinc-500');
                } else {
                    btn.classList.remove('active', 'bg-zinc-900', 'text-zinc-400');
                    btn.classList.add('bg-transparent', 'text-zinc-500');
                }
            });
            renderServices();
        }

        // --- Service Rendering ---
        function renderServices() {
            const filtered = services.filter(s => {
                const matchesCat = state.filter === 'all' || s.category === state.filter;
                const matchesSearch = s.title.toLowerCase().includes(state.search);
                return matchesCat && matchesSearch;
            });

            els.servicesContainer.innerHTML = filtered.map(s => {
                const inCart = !!state.cart[s.id];
                const rate = state.currency === 'USD' ? 1.1 : (state.currency === 'GBP' ? 0.85 : 1.0);
                const displayPrice = Math.round(s.price * rate);
                
                return `
                <div class="service-card relative border ${inCart ? 'active-card' : 'border-zinc-800/50'} bg-[#09090b] rounded-lg overflow-hidden group hover:border-zinc-700 transition-all">
                    <div class="p-4 flex gap-4 cursor-pointer" onclick="toggleService('${s.id}')">
                        <div class="shrink-0 w-10 h-10 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                            <iconify-icon icon="${s.icon}" width="18" stroke-width="1.5"></iconify-icon>
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex justify-between items-start mb-0.5">
                                <h3 class="text-xs font-semibold text-zinc-200 truncate pr-2">${s.title}</h3>
                                <div class="text-[10px] font-mono text-zinc-500">${state.currencySymbol}${displayPrice.toLocaleString()}</div>
                            </div>
                            <p class="text-[10px] text-zinc-500 leading-relaxed truncate">${s.desc}</p>
                        </div>
                        <div class="shrink-0 self-center">
                            <div class="w-4 h-4 rounded border border-zinc-700 flex items-center justify-center ${inCart ? 'bg-accent-500 border-accent-500' : 'bg-transparent'} transition-colors">
                                <iconify-icon icon="solar:check-read-linear" class="text-white text-[10px] ${inCart ? 'block' : 'hidden'}"></iconify-icon>
                            </div>
                        </div>
                    </div>
                    ${inCart ? renderConfig(s) : ''}
                </div>
                `;
            }).join('');
        }

        function renderConfig(s) {
            const item = state.cart[s.id];
            const rate = state.currency === 'USD' ? 1.1 : (state.currency === 'GBP' ? 0.85 : 1.0);

            return `
            <div class="border-t border-zinc-800 bg-[#0c0c0e] p-4 space-y-3 animate-[slideDown_0.2s_ease-out]">
                ${s.type === 'configurable' ? `
                <div class="flex items-center gap-4 select-none">
                    <span class="text-[10px] font-mono text-zinc-500 uppercase w-12">Qty</span>
                    <input type="range" min="${s.min}" max="${s.max}" value="${item.qty}" 
                        class="flex-1" oninput="updateQty('${s.id}', this.value)" onclick="event.stopPropagation()">
                    <span class="text-[10px] font-mono text-white min-w-[30px] text-right" id="qty-disp-${s.id}">${item.qty} ${s.unit}</span>
                </div>` : ''}

                ${s.addons.length ? `
                <div class="space-y-2 pt-1">
                    ${s.addons.map(add => {
                        const addonPrice = Math.round(add.price * rate);
                        return `
                        <label class="flex items-center gap-3 cursor-pointer group/addon" onclick="event.stopPropagation()">
                            <input type="checkbox" class="custom-checkbox" 
                                ${item.addons.includes(add.id) ? 'checked' : ''} 
                                onchange="toggleAddon('${s.id}', '${add.id}')">
                            <span class="text-[10px] text-zinc-400 group-hover/addon:text-zinc-200 transition-colors">${add.name} (+${state.currencySymbol}${addonPrice})</span>
                        </label>
                        `;
                    }).join('')}
                </div>` : ''}
            </div>
            `;
        }

        // --- Logic: Cart & Calculation ---
        function toggleService(id) {
            if (state.cart[id]) {
                delete state.cart[id];
            } else {
                const s = services.find(x => x.id === id);
                state.cart[id] = { qty: s.type === 'configurable' ? s.min : 1, addons: [] };
                if(navigator.vibrate) navigator.vibrate(5);
            }
            renderServices();
            updatePricing();
        }

        function updateQty(id, val) {
            if(state.cart[id]) {
                const newVal = parseInt(val);
                state.cart[id].qty = newVal;
                const disp = document.getElementById(`qty-disp-${id}`);
                const unit = services.find(s=>s.id===id).unit;
                if(disp) disp.innerText = `${newVal} ${unit}`;
                updatePricing(false); 
            }
        }

        function toggleAddon(sId, aId) {
            const list = state.cart[sId].addons;
            const idx = list.indexOf(aId);
            if(idx > -1) list.splice(idx, 1);
            else list.push(aId);
            updatePricing();
        }

        function updatePricing(renderList = true) {
            let totalBase = 0;
            let totalDays = 0;
            let count = 0;
            let html = '';
            
            const rate = state.currency === 'USD' ? 1.1 : (state.currency === 'GBP' ? 0.85 : 1.0);

            Object.keys(state.cart).forEach(id => {
                const s = services.find(x => x.id === id);
                if(!s) return; 
                const item = state.cart[id];
                count++;

                let itemPrice = (s.price * rate) * item.qty;
                let itemDays = s.days + (item.qty > 1 ? (item.qty - 1) * (s.days * 0.2) : 0);

                item.addons.forEach(aid => {
                    const add = s.addons.find(x => x.id === aid);
                    if(add) {
                        itemPrice += (add.price * rate);
                        itemDays += (add.price / 1000); 
                    }
                });

                totalBase += itemPrice;
                totalDays += itemDays;

                if (renderList) {
                    html += `
                        <div class="flex justify-between items-start text-xs group">
                            <div class="text-zinc-400 font-medium group-hover:text-zinc-200 transition-colors">${s.title} ${item.qty > 1 ? `<span class="text-zinc-600">x${item.qty}</span>` : ''}</div>
                            <div class="text-zinc-500 font-mono">${state.currencySymbol}${Math.round(itemPrice).toLocaleString()}</div>
                        </div>
                    `;
                }
            });

            const m = state.modifiers;
            const multiplier = multipliers.deadline[m.deadline] 
                             * multipliers.complexity[m.complexity] 
                             * multipliers.experience[m.experience];
                             
            const finalTotal = totalBase * multiplier;
            
            let durationMultiplier = multipliers.complexity[m.complexity];
            if(m.deadline === 'asap') durationMultiplier *= 0.7; 
            
            const finalDays = Math.max(1, Math.ceil(totalDays * durationMultiplier));
            const dailyRate = finalDays > 0 && finalTotal > 0 ? finalTotal / finalDays : 0;

            totalAnimator.to(finalTotal, state.currencySymbol);
            rateAnimator.to(dailyRate, state.currencySymbol, `/${state.language === 'en' ? 'day' : 'Tag'}`);
            mobileTotalAnimator.to(finalTotal, state.currencySymbol);
            
            els.daysDisplay.innerText = `${finalDays} ${state.language === 'en' ? 'days' : 'Tage'}`;
            
            if (renderList) {
                els.cartList.innerHTML = html;
                els.itemCount.innerText = `${count} item${count!==1?'s':''}`;
                
                if(count === 0) {
                    els.emptyState.classList.remove('opacity-0', 'hidden');
                    els.cartList.classList.add('hidden');
                } else {
                    els.emptyState.classList.add('opacity-0', 'hidden');
                    els.cartList.classList.remove('hidden');
                }
            }
        }

        // --- Settings / Modals Logic ---
        function switchTab(tab) {
            ['app', 'account', 'plan'].forEach(t => {
                const btn = document.getElementById(`tab-${t}`);
                const content = document.getElementById(`content-${t}`);
                if (t === tab) {
                    btn.classList.add('border-accent-500', 'text-white');
                    btn.classList.remove('border-transparent', 'text-zinc-500');
                    content.classList.remove('hidden');
                } else {
                    btn.classList.remove('border-accent-500', 'text-white');
                    btn.classList.add('border-transparent', 'text-zinc-500');
                    content.classList.add('hidden');
                }
            });
        }

        function saveSettings() {
            state.currency = document.getElementById('currencySelect').value;
            state.currencySymbol = state.currency === 'USD' ? '$' : (state.currency === 'GBP' ? '£' : '€');
            document.querySelectorAll('.currency-symbol').forEach(el => el.innerText = state.currencySymbol);
            state.taxRate = document.getElementById('taxInput').value;
            updatePricing();
            renderServices();
            closeSettings();
            showToast(state.language === 'en' ? "Settings saved" : "Einstellungen gespeichert", 'success');
        }

        function upgradePlan() {
            if(confirm("Upgrade to Agency plan?")) {
                showToast(state.language === 'en' ? "Plan updated to Agency" : "Plan auf Agency aktualisiert", 'success');
            }
        }

        function changeLanguage(lang) {
            state.language = lang;
            const t = i18n[lang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if(t[key]) el.innerText = t[key];
            });
            updatePricing(); 
        }

        // --- Add Service Logic ---
        function openAddService() {
            document.getElementById('addServiceModal').classList.remove('hidden');
            document.getElementById('newServiceName').focus();
        }
        function closeAddService() {
            document.getElementById('addServiceModal').classList.add('hidden');
            document.getElementById('newServiceName').value = '';
            document.getElementById('newServicePrice').value = '';
        }
        function confirmAddService() {
            const name = document.getElementById('newServiceName').value;
            const price = parseInt(document.getElementById('newServicePrice').value);
            const days = parseInt(document.getElementById('newServiceDays').value) || 2;
            const cat = document.getElementById('newServiceCat').value;

            if(!name || !price) {
                showToast("Please fill name and price", "error");
                return;
            }

            const newId = 'custom-' + Date.now();
            services.unshift({
                id: newId,
                category: cat,
                title: name,
                desc: 'Custom user service',
                price: price,
                days: days,
                icon: 'solar:box-linear',
                type: 'fixed',
                unit: 'Unit',
                addons: []
            });

            closeAddService();
            renderServices();
            showToast("Service created", "success");
            toggleService(newId);
        }

        // --- Help Modal ---
        function openHelp() { document.getElementById('helpModal').classList.remove('hidden'); }
        function closeHelp() { document.getElementById('helpModal').classList.add('hidden'); }

        // --- Global Actions ---
        function resetAll() {
            if(Object.keys(state.cart).length === 0) return;
            state.cart = {};
            state.modifiers = {
                deadline: 'soonish',
                complexity: 'medium',
                experience: 'experienced',
                client: 'small'
            };
            setModifier('deadline', 'soonish');
            setModifier('complexity', 'medium');
            setModifier('experience', 'experienced');
            
            renderServices();
            updatePricing();
            showToast(state.language === 'en' ? "Project reset" : "Projekt zurückgesetzt", 'info');
        }

        function downloadQuote() {
            if(Object.keys(state.cart).length === 0) {
                showToast(state.language === 'en' ? "Add items first" : "Bitte Leistungen hinzufügen", 'error');
                return;
            }
            showToast(state.language === 'en' ? "Generating PDF..." : "PDF wird erstellt...", 'info');
            setTimeout(() => {
                showToast(state.language === 'en' ? "Quote downloaded" : "Angebot heruntergeladen", 'success');
            }, 1500);
        }

        const modal = document.getElementById('settingsModal');
        const content = document.getElementById('settingsContent');
        function openSettings() {
            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('scale-95', 'opacity-0');
                content.classList.add('scale-100', 'opacity-100');
            }, 10);
        }
        function closeSettings() {
            content.classList.remove('scale-100', 'opacity-100');
            content.classList.add('scale-95', 'opacity-0');
            setTimeout(() => modal.classList.add('hidden'), 200);
        }

        function showToast(msg, type='success') {
            const t = document.getElementById('toast');
            const bg = document.getElementById('toastIconBg');
            const icon = document.getElementById('toastIcon');
            
            document.getElementById('toastMessage').innerText = msg;
            
            if(type === 'error') {
                bg.className = "w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-red-500";
                icon.setAttribute('icon', 'solar:danger-circle-linear');
            } else if(type === 'info') {
                bg.className = "w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-accent-500";
                icon.setAttribute('icon', 'solar:info-circle-linear');
            } else {
                bg.className = "w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-emerald-500";
                icon.setAttribute('icon', 'solar:check-circle-linear');
            }

            t.classList.remove('-translate-y-[200%]');
            t.classList.add('translate-y-4');
            if(t.timeoutId) clearTimeout(t.timeoutId);
            t.timeoutId = setTimeout(() => {
                t.classList.remove('translate-y-4');
                t.classList.add('-translate-y-[200%]');
            }, 3000);
        }

        init();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="flex-1 flex flex-col h-full relative z-10 bg-[#050505] w-full">

<nav className="shrink-0 glass-header px-4 md:px-6 pt-safe pb-0 z-40 relative">
<div className="h-16 flex items-center justify-between">
<div className="flex items-center gap-4">

<button className="md:hidden flex items-center justify-center w-8 h-8 rounded-full hover:bg-zinc-900 active:bg-zinc-800 text-zinc-400 transition-colors" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="22"></iconify-icon>
</button>

<div className="flex items-center gap-2.5">
<div className="w-5 h-5 bg-gradient-to-tr from-white to-zinc-400 rounded-sm shadow-lg shadow-white/10 flex items-center justify-center">
<div className="w-2 h-2 bg-[#050505] rounded-full"></div>
</div>
<span className="text-sm font-bold tracking-tight text-white font-sans uppercase">Aura<span className="text-zinc-600 font-medium">Engine</span></span>
</div>

<div className="hidden md:flex items-center gap-6 pl-8">
<button className="text-xs font-medium text-white">Dashboard</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Clients</button>
<button className="text-xs font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Invoices</button>
</div>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all">
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</button>
<div className="w-7 h-7 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-900 border border-zinc-700 shadow-inner"></div>
</div>
</div>
</nav>

<header className="shrink-0 px-4 md:px-6 py-3 border-b border-zinc-800/50 flex items-center justify-between z-30 gap-2 bg-[#050505]">
<div className="flex items-center gap-2 md:gap-3 overflow-x-auto no-scrollbar w-full md:w-auto">

<button className="shrink-0 flex items-center gap-2 px-3 py-2 md:py-1.5 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-medium text-zinc-300 hover:text-white hover:border-zinc-700 transition-all active:scale-95" id="fineTuneBtn" onclick="toggleFineTune()">
<iconify-icon icon="solar:tuning-2-linear" width="14"></iconify-icon>
<span>Fine tune</span>
<iconify-icon className="text-zinc-500 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="fineTuneChevron"></iconify-icon>
</button>

<button className="shrink-0 flex items-center gap-2 px-3 py-2 md:py-1.5 border border-zinc-800 rounded-md text-xs font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 transition-all group active:scale-95" onclick="resetAll()">
<iconify-icon className="group-hover:-rotate-180 transition-transform duration-500" icon="solar:restart-linear" width="14"></iconify-icon>
<span className="hidden sm:inline" data-i18n="restart">Restart</span>
</button>
<div className="h-4 w-px bg-zinc-800 mx-1 hidden md:block"></div>

<button className="hidden md:flex items-center gap-2 px-3 py-2 md:py-1.5 border border-zinc-800 rounded-md text-xs font-medium text-zinc-300 hover:text-white hover:bg-zinc-900 transition-all active:scale-95" onclick="openSettings()">
<iconify-icon icon="solar:settings-linear" width="14"></iconify-icon>
<span data-i18n="settings">Settings</span>
</button>
</div>
<div className="flex items-center gap-2 md:gap-3 shrink-0">

<button className="md:hidden w-8 h-8 flex items-center justify-center border border-zinc-800 rounded-md text-zinc-500 active:bg-zinc-900" onclick="focusSearch()">
<iconify-icon icon="solar:magnifer-linear" width="16"></iconify-icon>
</button>

<button className="hidden xs:flex items-center gap-2 px-4 py-2 md:py-1.5 bg-accent-500 hover:bg-accent-600 text-white rounded-md text-xs font-semibold shadow-lg shadow-accent-900/40 transition-all active:translate-y-px active:shadow-none" onclick="downloadQuote()">
<iconify-icon icon="solar:file-download-linear" width="16"></iconify-icon>
<span className="hidden sm:inline" data-i18n="download">Download quote</span>
<span className="sm:hidden">PDF</span>
</button>
</div>
</header>

<div className="hidden border-b border-zinc-800 bg-[#09090b] px-4 md:px-6 py-4 md:py-6 animate-slideDown z-20 shadow-2xl max-h-[60vh] overflow-y-auto" id="fineTunePanel">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 md:gap-y-6 max-w-5xl">

<div className="space-y-4 md:space-y-6">
<div className="space-y-2">
<div className="flex justify-between items-baseline">
<label className="text-xs font-semibold text-zinc-200" data-i18n="deadline">Deadline</label>
<span className="text-[10px] text-zinc-500" data-i18n="deadlineDesc">Urgency pricing</span>
</div>
<div className="flex bg-zinc-900/50 p-1 rounded-md border border-zinc-800">
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="deadline" data-val="whenever" onclick="setModifier('deadline', 'whenever')">Low</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active active:scale-[0.98]" data-group="deadline" data-val="soonish" onclick="setModifier('deadline', 'soonish')">Avg</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="deadline" data-val="asap" onclick="setModifier('deadline', 'asap')">ASAP</button>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-baseline">
<label className="text-xs font-semibold text-zinc-200" data-i18n="experience">Experience level</label>
<span className="text-[10px] text-zinc-500" data-i18n="expDesc">Seniority multiplier</span>
</div>
<div className="flex bg-zinc-900/50 p-1 rounded-md border border-zinc-800">
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="experience" data-val="beginner" onclick="setModifier('experience', 'beginner')">Jr</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active active:scale-[0.98]" data-group="experience" data-val="experienced" onclick="setModifier('experience', 'experienced')">Mid</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="experience" data-val="worldclass" onclick="setModifier('experience', 'worldclass')">Sr</button>
</div>
</div>
</div>

<div className="space-y-4 md:space-y-6">
<div className="space-y-2">
<div className="flex justify-between items-baseline">
<label className="text-xs font-semibold text-zinc-200" data-i18n="complexity">Complexity</label>
<span className="text-[10px] text-zinc-500" data-i18n="compDesc">Project scope</span>
</div>
<div className="flex bg-zinc-900/50 p-1 rounded-md border border-zinc-800">
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="complexity" data-val="low" onclick="setModifier('complexity', 'low')">Low</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active active:scale-[0.98]" data-group="complexity" data-val="medium" onclick="setModifier('complexity', 'medium')">Med</button>
<button className="toggle-btn flex-1 py-2 md:py-1.5 text-[11px] text-zinc-500 rounded transition-all hover:text-zinc-300 active:scale-[0.98]" data-group="complexity" data-val="high" onclick="setModifier('complexity', 'high')">High</button>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between items-baseline">
<label className="text-xs font-semibold text-zinc-200" data-i18n="dailyRate">Fixed daily rate</label>
</div>
<div className="flex gap-2">
<div className="relative flex-1">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-xs font-mono currency-symbol">€</span>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-md py-2 md:py-1.5 pl-7 pr-3 text-xs text-zinc-300 focus:outline-none focus:border-zinc-600 font-mono transition-colors" id="dailyRateInput" type="number" value="450"/>
</div>
<button className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-md border border-zinc-700 transition-colors active:scale-95" data-i18n="set" onclick="updateRate()">Set</button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 px-4 md:px-6 pb-2 shrink-0 flex gap-2">
<div className="relative group flex-1">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-600 w-4 h-4" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-9 pr-3 py-2.5 md:py-2 border border-zinc-800 rounded-md bg-zinc-900/30 text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/50 text-xs font-sans transition-all" id="searchInput" placeholder="Search services..." type="text"/>
</div>
<button className="px-4 md:px-3 py-2 border border-zinc-800 hover:border-accent-500 hover:text-accent-400 rounded-md bg-zinc-900/30 text-zinc-400 transition-colors flex items-center justify-center active:bg-zinc-800" onclick="openAddService()">
<iconify-icon icon="solar:add-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="px-4 md:px-6 py-2 flex gap-2 overflow-x-auto no-scrollbar pb-3">
<button className="cat-btn active text-[11px] md:text-[10px] whitespace-nowrap font-medium px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white transition-colors" data-cat="all" onclick="filterCategory('all')">All</button>
<button className="cat-btn text-[11px] md:text-[10px] whitespace-nowrap font-medium px-3 py-1.5 rounded-full border border-zinc-800 bg-transparent text-zinc-500 hover:text-zinc-300 transition-colors" data-cat="dev" onclick="filterCategory('dev')">Development</button>
<button className="cat-btn text-[11px] md:text-[10px] whitespace-nowrap font-medium px-3 py-1.5 rounded-full border border-zinc-800 bg-transparent text-zinc-500 hover:text-zinc-300 transition-colors" data-cat="design" onclick="filterCategory('design')">Design</button>
<button className="cat-btn text-[11px] md:text-[10px] whitespace-nowrap font-medium px-3 py-1.5 rounded-full border border-zinc-800 bg-transparent text-zinc-500 hover:text-zinc-300 transition-colors" data-cat="strategy" onclick="filterCategory('strategy')">Strategy</button>
</div>

<div className="flex-1 overflow-y-auto px-4 md:px-6 pb-32 md:pb-6 pt-1 space-y-3" id="servicesContainer">

</div>

<div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#09090b]/95 backdrop-blur border-t border-zinc-800 z-40 pb-safe-bottom">
<button className="w-full bg-accent-500 text-white font-semibold py-3 rounded-md flex items-center justify-between px-5 shadow-lg active:scale-[0.98] transition-transform" onclick="toggleMobileSheet()">
<span className="text-xs uppercase tracking-wider flex items-center gap-2">
                    Review Quote
                    <iconify-icon className="text-white/70" icon="solar:alt-arrow-up-linear"></iconify-icon>
</span>
<span className="font-mono font-bold" id="mobileTotal">€0</span>
</button>
</div>
</main>

<aside className="fixed inset-0 z-50 md:z-20 md:relative md:inset-auto md:w-[380px] flex flex-col bg-[#09090b] md:border-l border-zinc-800 transition-transform duration-300 mobile-sheet-hidden md:transform-none" id="pricingPanel">

<div className="md:hidden flex justify-between items-center p-4 pt-safe border-b border-zinc-800 bg-[#0c0c0e]">
<span className="text-xs font-bold text-white uppercase tracking-wider">Quote Summary</span>
<button className="w-8 h-8 flex items-center justify-center bg-zinc-800 rounded-full text-zinc-400" onclick="toggleMobileSheet()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="p-6 border-b border-zinc-800 bg-[#0c0c0e]">
<h2 className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-4 hidden md:block">Pricing Engine</h2>
<div className="space-y-5">
<div>
<div className="text-[10px] text-zinc-500 mb-1" data-i18n="totalCost">Total Estimated Cost</div>
<div className="text-3xl text-white tracking-tight tabular-nums font-semibold h-[36px] flex items-center" id="totalDisplay">€0</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<div className="text-[10px] text-zinc-500 mb-1" data-i18n="duration">Est. Duration</div>
<div className="text-sm font-mono text-zinc-300 tabular-nums" id="daysDisplay">1 days</div>
</div>
<div>
<div className="text-[10px] text-zinc-500 mb-1" data-i18n="avgRate">Avg. Daily Rate</div>
<div className="text-sm font-mono text-zinc-300 tabular-nums" id="dailyRateDisplay">€0/day</div>
</div>
</div>
</div>
</div>

<div className="flex-1 overflow-y-auto relative bg-[#09090b]">
<div className="px-6 py-3 border-b border-zinc-800/50 bg-[#09090b] sticky top-0 z-10 flex justify-between items-center">
<span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest" data-i18n="activeServices">Active Services</span>
<span className="text-[10px] font-mono text-zinc-600" id="itemCount">0 items</span>
</div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 opacity-40 transition-opacity duration-300" id="emptyState">
<iconify-icon className="text-zinc-700 text-4xl mb-3" icon="solar:box-linear"></iconify-icon>
<p className="text-xs font-medium text-zinc-500" data-i18n="emptyProject">Project is empty</p>
<p className="text-[10px] text-zinc-700 mt-1 max-w-[150px]" data-i18n="emptyDesc">Select services from the library to build your quote.</p>
</div>
<div className="p-4 space-y-2 hidden" id="cartList"></div>
</div>

<div className="p-4 bg-[#0c0c0e] border-t border-zinc-800 pb-8 md:pb-4 safe-pb">
<button className="md:hidden w-full mb-4 py-3 bg-accent-500 text-white font-semibold rounded-md text-xs shadow-lg flex items-center justify-center gap-2" onclick="downloadQuote()">
<iconify-icon icon="solar:file-download-linear" width="18"></iconify-icon> Download Quote PDF
            </button>
<div className="flex items-center gap-2 text-[10px] text-zinc-600 font-mono justify-center">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]"></span>
                SYSTEM ONLINE
            </div>
</div>
</aside>

<div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm opacity-0 invisible" id="mobileMenu">
<div className="absolute inset-y-0 left-0 w-[80%] max-w-xs bg-[#09090b] border-r border-zinc-800 shadow-2xl flex flex-col" id="mobileMenuContent">
<div className="h-16 flex items-center px-6 border-b border-zinc-800">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-white to-zinc-400 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-[#050505] rounded-full"></div>
</div>
<span className="text-sm font-bold tracking-tight text-white uppercase">Aura<span className="text-zinc-600 font-medium">Engine</span></span>
</div>
</div>
<div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md bg-zinc-900 text-white text-xs font-medium">
<iconify-icon icon="solar:widget-2-linear" width="18"></iconify-icon>
                    Dashboard
                </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors text-xs font-medium">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
                    Clients
                </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors text-xs font-medium">
<iconify-icon icon="solar:document-text-linear" width="18"></iconify-icon>
                    Invoices
                </button>
<div className="my-4 border-t border-zinc-800"></div>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors text-xs font-medium" onclick="openSettings(); toggleMenu();">
<iconify-icon icon="solar:settings-linear" width="18"></iconify-icon>
                    Settings
                </button>
<button className="w-full flex items-center gap-3 px-3 py-3 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/50 transition-colors text-xs font-medium" onclick="openHelp(); toggleMenu();">
<iconify-icon icon="solar:question-circle-linear" width="18"></iconify-icon>
                    Help
                </button>
</div>
<div className="p-4 border-t border-zinc-800">
<button className="w-full py-2.5 rounded-md border border-zinc-800 text-zinc-400 text-xs font-medium hover:text-white" onclick="toggleMenu()">Close Menu</button>
</div>
</div>

<div className="absolute inset-0 -z-10" onclick="toggleMenu()"></div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="settingsModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeSettings()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#09090b] border border-zinc-800 rounded-lg shadow-2xl p-1 transform transition-all scale-95 opacity-0" id="settingsContent">
<div className="bg-[#0c0c0e] rounded p-6 h-[480px] flex flex-col">
<div className="flex justify-between items-center mb-6 shrink-0">
<h2 className="text-sm font-semibold text-white" data-i18n="settings">Settings</h2>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeSettings()">
<iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex border-b border-zinc-800 mb-6 shrink-0 overflow-x-auto">
<button className="tab-btn shrink-0 px-4 py-2 text-xs font-medium border-b-2 transition-colors border-accent-500 text-white" id="tab-app" onclick="switchTab('app')">App</button>
<button className="tab-btn shrink-0 px-4 py-2 text-xs font-medium hover:text-zinc-300 border-b-2 transition-colors border-transparent text-zinc-500" id="tab-account" onclick="switchTab('account')">Account</button>
<button className="tab-btn shrink-0 px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-300 border-b-2 border-transparent transition-colors" id="tab-plan" onclick="switchTab('plan')">Plan</button>
</div>

<div className="flex-1 overflow-y-auto pr-1">

<div className="space-y-5" id="content-app">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Currency</label>
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="currencySelect">
<option value="EUR">EUR (€)</option>
<option value="USD">USD ($)</option>
<option value="GBP">GBP (£)</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Tax Rate</label>
<div className="relative">
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="taxInput" type="number" value="19"/>
<span className="absolute right-3 top-2.5 md:top-2 text-xs text-zinc-600">%</span>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Language</label>
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="langSelect" onchange="changeLanguage(this.value)">
<option value="en">English (US)</option>
<option value="de">Deutsch (DE)</option>
</select>
<p className="text-[10px] text-zinc-600 mt-1">Interface language and number formatting.</p>
</div>
</div>

<div className="space-y-5 hidden" id="content-account">
<div className="space-y-3">
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Full Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="userNameInput" type="text" value="Alex Design"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Company</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="companyInput" type="text" value="Studio Alpha"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase text-zinc-500 font-bold">Email</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-zinc-600" id="emailInput" type="email" value="alex@studio.alpha"/>
</div>
</div>
</div>

<div className="space-y-5 hidden" id="content-plan">
<div className="p-3 border border-accent-900/30 bg-accent-900/10 rounded-md flex justify-between items-center">
<div>
<div className="text-xs font-bold text-accent-400">Professional Plan</div>
<div className="text-[10px] text-accent-400/70">Unlimited Quotes</div>
</div>
<div className="text-xs font-mono text-accent-400">ACTIVE</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 p-2 rounded-md border border-zinc-800 bg-zinc-900/30 opacity-50 cursor-not-allowed">
<div className="w-4 h-4 rounded-full border border-zinc-600"></div>
<div>
<div className="text-xs font-medium text-zinc-400">Starter</div>
<div className="text-[10px] text-zinc-600">3 Quotes / mo</div>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-md border border-accent-500 bg-zinc-900 relative">
<div className="w-4 h-4 rounded-full bg-accent-500 flex items-center justify-center">
<iconify-icon className="text-black text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-white">Professional</div>
<div className="text-[10px] text-zinc-500">Unlimited</div>
</div>
</div>
<div className="flex items-center gap-2 p-2 rounded-md border border-zinc-800 bg-zinc-900/30 hover:border-zinc-600 cursor-pointer" onclick="upgradePlan()">
<div className="w-4 h-4 rounded-full border border-zinc-600"></div>
<div>
<div className="text-xs font-medium text-zinc-400">Agency</div>
<div className="text-[10px] text-zinc-600">Multi-seat &amp; API</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-6 pt-4 border-t border-zinc-800 flex justify-end shrink-0">
<button className="bg-white text-black px-4 py-2 rounded-md text-xs font-semibold hover:bg-zinc-200 transition-colors" onclick="saveSettings()">Save Changes</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="addServiceModal">
<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onclick="closeAddService()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-sm bg-[#09090b] border border-zinc-800 rounded-lg shadow-2xl p-6 transform transition-all">
<h2 className="text-sm font-semibold text-white mb-4">Create New Service</h2>
<div className="space-y-4">
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Service Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-white p-2.5 md:p-2 focus:outline-none focus:border-accent-500" id="newServiceName" placeholder="e.g. SEO Audit" type="text"/>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Base Price</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-white p-2.5 md:p-2 focus:outline-none focus:border-accent-500" id="newServicePrice" placeholder="1000" type="number"/>
</div>
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Days</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-white p-2.5 md:p-2 focus:outline-none focus:border-accent-500" id="newServiceDays" placeholder="2" type="number"/>
</div>
</div>
<div>
<label className="text-[10px] uppercase text-zinc-500 font-bold block mb-1">Category</label>
<select className="w-full bg-zinc-900 border border-zinc-800 rounded-md text-xs text-zinc-300 p-2.5 md:p-2 focus:outline-none focus:border-accent-500" id="newServiceCat">
<option value="dev">Development</option>
<option value="design">Design</option>
<option value="strategy">Strategy</option>
</select>
</div>
<div className="pt-2 flex justify-end gap-2">
<button className="px-3 py-2 text-xs text-zinc-400 hover:text-white transition-colors" onclick="closeAddService()">Cancel</button>
<button className="px-4 py-2 bg-accent-500 hover:bg-accent-600 text-white text-xs font-semibold rounded-md transition-colors" onclick="confirmAddService()">Create Service</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="helpModal">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeHelp()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#09090b] border border-zinc-800 rounded-lg shadow-2xl p-6">
<div className="flex justify-between items-start mb-4">
<h2 className="text-sm font-semibold text-white">How Pricing Works</h2>
<button className="text-zinc-500 hover:text-white" onclick="closeHelp()"><iconify-icon icon="solar:close-circle-linear" width="18"></iconify-icon></button>
</div>
<div className="space-y-4 text-xs text-zinc-400 leading-relaxed">
<p>This engine uses a <span className="text-white">multiplier-based algorithm</span> to calculate project estimates.</p>
<ul className="list-disc pl-4 space-y-1">
<li><strong className="text-zinc-300">Base Cost:</strong> Sum of all selected services.</li>
<li><strong className="text-zinc-300">Multipliers:</strong> Factors like Deadline, Complexity, and Client Size multiply the total base cost.</li>
<li><strong className="text-zinc-300">Duration:</strong> Calculated based on service complexity. High complexity adds buffer time. ASAP deadlines compress time but increase cost.</li>
</ul>
<div className="bg-zinc-900 p-3 rounded-md border border-zinc-800 mt-2">
<p className="text-[10px] font-mono text-zinc-500">FORMULA</p>
<p className="font-mono text-accent-400 mt-1">Total = (Base + Addons) × (Complexity × Urgency × Client)</p>
</div>
</div>
</div>
</div>

<div className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#09090b] border border-zinc-800 text-white pl-3 pr-4 py-2 rounded-lg shadow-2xl transform -translate-y-[200%] transition-transform duration-500 flex items-center gap-3 z-[110] w-[90%] max-w-xs md:w-auto" id="toast">
<div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0" id="toastIconBg">
<iconify-icon className="text-white text-xs" icon="solar:check-circle-linear" id="toastIcon"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-200 truncate" id="toastMessage">Action successful</span>
</div>


    </>
  );
}
