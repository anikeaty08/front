import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
wood: {
50: '#F9F7F4',
100: '#F0EBE3',
200: '#E2D6C6',
300: '#CDBCA6',
400: '#B09678',
500: '#947452',
600: '#7A5C40',
700: '#614732',
800: '#4A3628',
900: '#382920',
950: '#241A14',
}
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.07%22/%3E%3C/svg%3E')",
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
}
}
}
}



        // --- DATA & STATE ---
        // Initial Data (Simulating Database)
        let reviewsData = [
            { id: 1, name: "Petr Novotný", city: "Jindřichův Hradec", rating: 5, text: "Nechali jsme si od pana Vlka vyrobit schodiště i vchodové dveře. Precizní práce, vše sedí na milimetr. Oceňuji hlavně dodržení termínu a čistotu po montáži.", date: "2023-11-15", email: "petr@example.com" },
            { id: 2, name: "Jana Dvořáková", city: "Třeboň", rating: 5, text: "Skvělá domluva a férové jednání. Potřebovali jsme atypický stůl z masivu a výsledek předčil očekávání. Krásné dřevo, perfektní povrchová úprava.", date: "2023-10-20", email: "jana@example.com" },
            { id: 3, name: "Martin Svoboda", city: "Dačice", rating: 5, text: "Dlouho jsme hledali truhláře, který umí staré poctivé řemeslo. Pan Vlk je odborník na svém místě. Doporučuji všem, kdo chtějí kvalitu.", date: "2023-09-05", email: "martin@example.com" },
            { id: 4, name: "Eva Křížová", city: "Pelhřimov", rating: 4, text: "Krásná práce, termín se sice o týden posunul, ale výsledek stál za to. Určitě doporučuji.", date: "2023-08-12", email: "eva@example.com" }
        ];

        let galleryImages = [
            { id: 'img1', src: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=800&auto=format&fit=crop", title: "Masivní schodiště" },
            { id: 'img2', src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop", title: "Obývací stěna" },
            { id: 'img3', src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop", title: "Kuchyně na míru" },
            { id: 'img4', src: "https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=800&auto=format&fit=crop", title: "Dubové dveře" },
            { id: 'img5', src: "https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&w=1200&auto=format&fit=crop", title: "Kompletní interiér", span: true },
            { id: 'img6', src: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?q=80&w=800", title: "Detail" },
            { id: 'img7', src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800", title: "Detail" }
        ];

        let visibleReviewsCount = 3;
        let pendingReview = null;

        // --- UTILS ---
        const generateStars = (rating, className = "text-yellow-500", size = 16) => {
            let html = '';
            for (let i = 1; i <= 5; i++) {
                const fill = i <= rating ? 'currentColor' : 'none';
                const stroke = 'currentColor';
                html += `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${className}"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"/></svg>`;
            }
            return html;
        };

        const formatDate = (dateStr) => {
            const d = new Date(dateStr);
            return d.toLocaleDateString('cs-CZ');
        }

        // --- GALLERY LOGIC ---
        function renderGallery() {
            const container = document.getElementById('dynamic-gallery-grid');
            container.innerHTML = '';
            
            // Limit to first 5 or 6 for initial view, simplified logic for demo
            const initialLimit = 5; 
            const showAll = document.getElementById('extra-gallery')?.classList.contains('expanded') || false; // Check toggle state if needed, though for this demo we rebuild grid
            
            // Note: The original design had a toggle button expanding a separate div. 
            // With CMS, let's simplify: Display X images. If button clicked, show all.
            // But to keep exact design structure: 
            // We will render items. Items > 5 go into a hidden state or separate container?
            // Let's render ALL, but hide those > 5 with CSS class 'hidden' unless toggled.
            
            let html = '';
            galleryImages.forEach((img, index) => {
                const isSpan = img.span ? 'md:col-span-2 lg:col-span-2' : '';
                const isHidden = index >= 5 ? 'hidden extra-gallery-item' : ''; // Keep first 5 visible
                
                // If index is high, append to extra grid? 
                // To keep existing animation style, let's put first 5 in main grid, rest in extra gallery div.
                if(index < 5) {
                    container.innerHTML += `
                        <div class="group relative aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in reveal-on-scroll ${isSpan}">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                            <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                            <div class="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                <p class="font-serif text-lg">${img.title || ''}</p>
                            </div>
                        </div>
                    `;
                }
            });

            // Extra gallery logic (populate separate div for expansion)
            const extraContainer = document.getElementById('extra-gallery'); // We need to re-add this to HTML or reuse
            // Re-creating extra gallery container in JS to handle updates
            if(!document.getElementById('extra-gallery-wrapper')) {
                const wrapper = document.createElement('div');
                wrapper.id = 'extra-gallery-wrapper';
                wrapper.className = 'gallery-content grid grid-cols-2 md:grid-cols-4 gap-4 mt-4';
                container.parentNode.insertBefore(wrapper, document.getElementById('gallery-toggle-btn'));
            }
            const wrapper = document.getElementById('extra-gallery-wrapper');
            wrapper.innerHTML = '';

            galleryImages.forEach((img, index) => {
                if(index >= 5) {
                    wrapper.innerHTML += `
                         <div class="group relative aspect-square overflow-hidden rounded-sm cursor-zoom-in">
                            <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" loading="lazy" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0">
                        </div>
                    `;
                }
            });

            // Show/Hide Toggle Button
            const btn = document.getElementById('gallery-toggle-btn');
            if(galleryImages.length > 5) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }

            // Re-observe for animations
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        }

        function toggleGallery() {
            const wrapper = document.getElementById('extra-gallery-wrapper');
            const btnText = document.getElementById('gallery-btn-text');
            const btnIcon = document.getElementById('gallery-btn-icon');
            
            if (!wrapper.classList.contains('expanded')) {
                wrapper.classList.add('expanded');
                btnText.innerText = 'Skrýt galerii';
                btnIcon.classList.add('rotate-180');
            } else {
                wrapper.classList.remove('expanded');
                btnText.innerText = 'Zobrazit více realizací';
                btnIcon.classList.remove('rotate-180');
                document.getElementById('galerie').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        // --- REVIEWS LOGIC ---
        function renderReviews() {
            const container = document.getElementById('dynamic-reviews-grid');
            container.innerHTML = '';

            // Calculate Avg
            const total = reviewsData.reduce((acc, curr) => acc + curr.rating, 0);
            const avg = (total / reviewsData.length).toFixed(1);
            
            document.getElementById('reviews-summary').innerHTML = `
                <span class="text-yellow-500 flex">${generateStars(1, 'fill-current', 20)}</span>
                <span class="font-bold text-wood-900 text-lg">${avg}</span>
                <span class="text-wood-400 text-sm">(${reviewsData.length} hodnocení)</span>
            `;

            // Sort by date (newest first)
            const sortedReviews = [...reviewsData].sort((a,b) => new Date(b.date) - new Date(a.date));

            // Slice for visibility
            const visible = sortedReviews.slice(0, visibleReviewsCount);

            visible.forEach((rev, index) => {
                const html = `
                <div class="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow reveal-on-scroll h-full flex flex-col">
                    <div class="flex text-yellow-500 mb-4 gap-0.5">
                        ${generateStars(rev.rating)}
                    </div>
                    <p class="text-wood-700/90 italic mb-6 leading-relaxed flex-1">"${rev.text}"</p>
                    <div class="flex items-center gap-3 mt-auto border-t border-wood-100 pt-4">
                        <div class="w-10 h-10 bg-wood-100 rounded-full flex items-center justify-center font-serif font-bold text-wood-700 uppercase">
                            ${rev.name.charAt(0)}
                        </div>
                        <div>
                            <p class="font-semibold text-wood-900 text-sm">${rev.name}</p>
                            <p class="text-xs text-wood-400">${rev.city || 'Zákazník'} • ${formatDate(rev.date)}</p>
                        </div>
                    </div>
                </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });

            // Load More Button
            const btn = document.getElementById('reviews-load-more');
            if(visibleReviewsCount < reviewsData.length) {
                btn.classList.remove('hidden');
            } else {
                btn.classList.add('hidden');
            }
            
            // Re-observe
            document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        }

        function loadMoreReviews() {
            visibleReviewsCount += 3;
            renderReviews();
        }

        // --- MODAL & FORM LOGIC ---
        function openReviewModal() {
            document.getElementById('review-modal').classList.remove('hidden');
            // Init star rating input logic
            renderStarInput(0);
        }

        function closeReviewModal() {
            document.getElementById('review-modal').classList.add('hidden');
            document.getElementById('confirm-modal').classList.add('hidden');
        }

        function renderStarInput(currentRating) {
            const container = document.getElementById('star-input-container');
            container.innerHTML = '';
            for(let i=1; i<=5; i++) {
                const fill = i <= currentRating ? 'fill-current' : 'fill-none';
                container.innerHTML += `
                    <svg onclick="setRating(${i})" onmouseenter="renderStarInput(${i})" onmouseleave="resetStarInput()" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hover:text-yellow-500 transition-colors ${fill}"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                `;
            }
        }

        function setRating(r) {
            document.getElementById('rev-rating').value = r;
        }

        function resetStarInput() {
            const val = document.getElementById('rev-rating').value;
            renderStarInput(val);
        }

        function submitReviewForm(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('rev-name').value;
            const email = document.getElementById('rev-email').value;
            const text = document.getElementById('rev-text').value;
            const rating = parseInt(document.getElementById('rev-rating').value);

            if(!email.includes('@')) { alert('Zadejte platný email.'); return; }
            if(rating === 0) { alert('Prosím zvolte hodnocení (hvězdičky).'); return; }

            // Check duplicate email
            const exists = reviewsData.some(r => r.email === email);
            if(exists) { alert('S tímto emailem již byla recenze vložena.'); return; }

            // Store pending
            pendingReview = {
                id: Date.now(),
                name, email, text, rating, 
                date: new Date().toISOString(),
                city: "Ověřený zákazník"
            };

            // Show confirmation
            document.getElementById('review-modal').classList.add('hidden');
            
            document.getElementById('conf-name').innerText = name;
            document.getElementById('conf-text').innerText = text;
            document.getElementById('conf-stars').innerHTML = generateStars(rating);
            
            document.getElementById('confirm-modal').classList.remove('hidden');
        }

        function editReview() {
            document.getElementById('confirm-modal').classList.add('hidden');
            document.getElementById('review-modal').classList.remove('hidden');
        }

        function publishReview() {
            reviewsData.push(pendingReview);
            renderReviews();
            renderAdminReviews(); // Update admin list if open
            closeReviewModal();
            alert('Recenze byla úspěšně zveřejněna. Děkujeme!');
        }

        // --- ADMIN PANEL LOGIC ---
        function toggleAdminPanel() {
            const panel = document.getElementById('admin-panel');
            if(panel.classList.contains('hidden')) {
                panel.classList.remove('hidden');
                renderAdminReviews();
                renderAdminGallery();
            } else {
                panel.classList.add('hidden');
            }
        }

        function switchTab(tabId) {
            document.getElementById('admin-reviews-content').classList.add('hidden');
            document.getElementById('admin-gallery-content').classList.add('hidden');
            document.getElementById(tabId + '-content').classList.remove('hidden');
            
            // Update button styles
            const btnReview = document.getElementById('tab-btn-reviews');
            const btnGallery = document.getElementById('tab-btn-gallery');
            
            if(tabId === 'admin-reviews') {
                btnReview.classList.replace('text-wood-500','text-wood-900');
                btnReview.classList.add('border-b-2', 'border-wood-800', 'bg-wood-50');
                btnGallery.classList.remove('border-b-2', 'border-wood-800', 'bg-wood-50');
                btnGallery.classList.replace('text-wood-900','text-wood-500');
            } else {
                btnGallery.classList.replace('text-wood-500','text-wood-900');
                btnGallery.classList.add('border-b-2', 'border-wood-800', 'bg-wood-50');
                btnReview.classList.remove('border-b-2', 'border-wood-800', 'bg-wood-50');
                btnReview.classList.replace('text-wood-900','text-wood-500');
            }
        }

        function renderAdminReviews() {
            const list = document.getElementById('admin-reviews-list');
            list.innerHTML = '';
            reviewsData.forEach((rev, idx) => {
                list.innerHTML += `
                    <div class="bg-white p-4 rounded-sm border border-wood-200 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
                        <div>
                            <div class="flex items-center gap-2 mb-1">
                                <span class="font-bold text-wood-900">${rev.name}</span>
                                <span class="text-yellow-500 flex scale-75 origin-left">${generateStars(rev.rating)}</span>
                            </div>
                            <p class="text-xs text-wood-400 mb-2">${rev.email} • ${formatDate(rev.date)}</p>
                            <p class="text-sm text-wood-700 italic truncate max-w-lg">"${rev.text}"</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <button onclick="moveReview(${idx}, -1)" class="p-1 hover:bg-wood-100 rounded text-wood-500" title="Nahoru">↑</button>
                            <button onclick="moveReview(${idx}, 1)" class="p-1 hover:bg-wood-100 rounded text-wood-500" title="Dolů">↓</button>
                            <button onclick="deleteReview(${rev.id})" class="p-2 hover:bg-red-50 text-red-500 rounded text-xs font-medium border border-red-100">Smazat</button>
                        </div>
                    </div>
                `;
            });
        }

        function deleteReview(id) {
            if(confirm('Opravdu smazat tuto recenzi?')) {
                reviewsData = reviewsData.filter(r => r.id !== id);
                renderReviews();
                renderAdminReviews();
            }
        }

        function moveReview(index, direction) {
            if (direction === -1 && index > 0) {
                [reviewsData[index], reviewsData[index - 1]] = [reviewsData[index - 1], reviewsData[index]];
            } else if (direction === 1 && index < reviewsData.length - 1) {
                [reviewsData[index], reviewsData[index + 1]] = [reviewsData[index + 1], reviewsData[index]];
            }
            renderReviews();
            renderAdminReviews();
        }

        function renderAdminGallery() {
            const grid = document.getElementById('admin-gallery-grid');
            document.getElementById('gallery-count').innerText = galleryImages.length;
            grid.innerHTML = '';
            
            galleryImages.forEach((img, idx) => {
                grid.innerHTML += `
                    <div class="relative group aspect-square bg-gray-100 rounded-sm overflow-hidden">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" class="w-full h-full object-cover">
                        <button onclick="deleteImage('${img.id}')" class="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity">✕</button>
                    </div>
                `;
            });
        }

        function uploadImage(event) {
            if (galleryImages.length >= 20) {
                alert('Dosažen maximální počet 20 obrázků.');
                return;
            }
            const file = event.target.files[0];
            if(file) {
                // Mock upload by creating object URL
                const url = URL.createObjectURL(file);
                galleryImages.push({
                    id: 'new_' + Date.now(),
                    src: url,
                    title: "Nová realizace"
                });
                renderGallery();
                renderAdminGallery();
            }
        }

        function deleteImage(id) {
            if(confirm('Smazat obrázek?')) {
                galleryImages = galleryImages.filter(img => img.id !== id);
                renderGallery();
                renderAdminGallery();
            }
        }

        // --- INIT ---
        window.addEventListener('DOMContentLoaded', () => {
            renderGallery();
            renderReviews();
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-noise mix-blend-multiply opacity-60"></div>

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="lg:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 group z-50 relative" href="#">
<div className="w-10 h-10 bg-wood-800 text-wood-50 flex items-center justify-center rounded-sm shadow-lg shadow-wood-200/50 group-hover:bg-wood-700 transition-colors">
<span className="font-serif font-bold text-xl">V</span>
</div>
<div className="flex flex-col">
<span className="text-wood-900 leading-none text-xl font-semibold tracking-tight font-serif">Truhlářství Viktor Vlk</span>
<span className="text-[10px] tracking-[0.2em] uppercase text-wood-500 mt-1 font-medium">Horní Skrýchov</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 lg:gap-12">
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#o-nas">Příběh</a>
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#sluzby">Služby</a>
<a className="text-sm font-medium text-wood-700/80 hover:text-wood-900 transition-colors tracking-wide" href="#galerie">Realizace</a>
<a className="group relative px-6 py-2.5 bg-wood-800 text-wood-50 text-sm font-medium rounded-sm overflow-hidden shadow-lg shadow-wood-300/50 transition-all hover:shadow-xl hover:shadow-wood-400/40" href="#kontakt">
<span className="relative z-10 flex items-center gap-2">
                        Poptat výrobu
                        <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<div className="absolute inset-0 bg-wood-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
</a>
</div>

<button className="md:hidden text-wood-900 p-2 z-50 relative" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div className="hidden absolute top-0 left-0 w-full h-screen bg-wood-50 flex flex-col items-center justify-center gap-8 z-40 md:hidden" id="mobile-menu">
<a className="font-serif text-3xl text-wood-900" href="#o-nas" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Příběh</a>
<a className="font-serif text-3xl text-wood-900" href="#sluzby" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Služby</a>
<a className="font-serif text-3xl text-wood-900" href="#galerie" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Realizace</a>
<a className="text-lg bg-wood-800 text-white px-8 py-3 rounded-sm" href="#kontakt" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Kontakt</a>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden z-10">

<div className="absolute inset-0 z-0">
<img alt="Detail opracování dřeva v dílně" className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_ease-in-out_infinite_alternate]" src="https://images.unsplash.com/photo-1675063715178-7b7795b6e025?w=3840&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-wood-50/90 via-transparent to-wood-950/80"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
<div className="animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="inline-block py-1 px-3 border border-wood-200/30 bg-white/10 backdrop-blur-sm rounded-full text-wood-100 text-xs font-semibold tracking-widest uppercase mb-6 shadow-sm">
                    Zakázkové truhlářství Vlk
                </span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-wood-50 tracking-tight leading-[1.05] mb-8 animate-fade-in-up drop-shadow-lg" style={{animationDelay: '0.2s'}}>
                Kde dřevo získává<br/>
<span className="italic text-wood-200 font-light">duši a tvar</span>
</h1>
<p className="text-wood-100/90 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                Rodinná dílna Viktora Vlka. Tvoříme poctivá schodiště, dveře a masivní nábytek, který s vámi zestárne do krásy.
            </p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<a className="min-w-[200px] bg-wood-100 text-wood-900 px-8 py-4 rounded-sm font-semibold hover:bg-white transition-all duration-300 shadow-xl shadow-black/20 hover:scale-[1.02]" href="#kontakt">
                    Nezávazná poptávka
                </a>
<a className="min-w-[200px] flex items-center justify-center gap-2 text-wood-100 border border-wood-200/30 px-8 py-4 rounded-sm font-medium hover:bg-wood-900/40 transition-colors backdrop-blur-sm" href="#galerie">
                    Prohlédnout práci
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 relative z-10 bg-wood-50" id="o-nas">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="reveal-on-scroll">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-4 block flex items-center gap-2">
<span className="w-8 h-[1px] bg-wood-400"></span>
                        O nás
                    </span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight mb-8">
                        Nejsme továrna.<br/>Jsme truhlářská dílna.
                    </h2>
<div className="space-y-6 text-wood-700/80 text-lg leading-relaxed font-light">
<p>
                            Jmenuji se <strong>Viktor Vlk</strong> a dřevo mě provází celým životem. V naší dílně v Horním Skrýchově nevyrábíme anonymní kusy nábytku. Každý projekt je osobní dialog mezi materiálem a vaším prostorem.
                        </p>
<p>
                            Věříme v poctivost řemesla, které se nikam nežene. Vůně čerstvě ohoblovaného dubu, přesnost spoje, který drží bez hřebíků, a povrchová úprava, které se chcete dotýkat. To je naše definice kvality.
                        </p>
</div>
<div className="mt-10 pt-10 border-t border-wood-200 flex items-center gap-6">

<div className="flex -space-x-4">
<div className="w-12 h-12 rounded-full bg-wood-200 border-2 border-wood-50 flex items-center justify-center text-wood-700">
<svg aria-hidden="true" data-icon="lucide:hammer" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<div className="w-12 h-12 rounded-full bg-wood-300 border-2 border-wood-50 flex items-center justify-center text-wood-800">
<svg aria-hidden="true" data-icon="lucide:ruler" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 rounded-full bg-wood-400 border-2 border-wood-50 flex items-center justify-center text-wood-900">
<svg aria-hidden="true" data-icon="lucide:thumbs-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 10v12m8-16.12L14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div>
<p className="text-wood-900 font-serif italic text-lg">"Kvalita je, když se vrací zákazník, ne zboží."</p>
<p className="text-xs uppercase tracking-wider text-wood-500 mt-1">— Viktor Vlk, Majitel</p>
</div>
</div>
</div>

<div className="relative reveal-on-scroll delay-200">
<div className="absolute -top-4 -right-4 w-32 h-32 bg-wood-200/50 rounded-sm -z-10"></div>
<div className="absolute -bottom-6 -left-6 w-48 h-48 border border-wood-300 rounded-sm -z-10"></div>
<img alt="Viktor Vlk v dílně" className="w-full h-auto object-cover rounded-sm shadow-2xl shadow-wood-900/10 grayscale-[10%] sepia-[15%] hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1968d33c-2959-4831-9ac0-1d168c8a1d28_3840w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-wood-100/50 relative z-10" id="sluzby">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 reveal-on-scroll">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-3 block">Naše specializace</span>
<h2 className="font-serif text-4xl md:text-5xl text-wood-900 tracking-tight mb-6">Co pro vás vyrobíme</h2>
<p className="text-wood-700/80 text-lg font-light">
                    Od hrubého prkna až po finální montáž u vás doma. Zaměřujeme se na zakázkovou výrobu, kde standardní řešení nestačí.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:footprints" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0m16 4v-2.38c0-2.12 1.03-3.12 1-5.62c-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0m-4-3h4M4 13h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Dřevěná schodiště</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Samonosná schodiště, která se stanou dominantou interiéru, nebo precizní obklady betonových schodů.
                    </p>
</div>
<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-100">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:door-open" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M11 20H2m9-15.438v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561zM11 4H8a2 2 0 0 0-2 2v14m8-8h.01M22 20h-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Dveře a zárubně</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Interiérové i vchodové dveře z masivu. Včetně výroby a montáže obložkových zárubní pro dokonalý detail.
                    </p>
</div>
<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-200">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:armchair" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0zm2 2v2m14-2v2"></path></g></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Nábytek z masivu</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Stoly, které přežijí věky, postele, skříně a solitéry. Nábytek navržený pro váš konkrétní prostor.
                    </p>
</div>
<div className="group bg-wood-50 p-8 rounded-sm shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 border border-wood-200/60 reveal-on-scroll delay-300">
<div className="w-14 h-14 bg-wood-100 rounded-full flex items-center justify-center mb-6 text-wood-800 group-hover:bg-wood-800 group-hover:text-wood-50 transition-colors">
<svg aria-hidden="true" data-icon="lucide:pencil-ruler" data-strokeWidth="1.5" data-width="28" height="28" role="img" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-3 group-hover:text-wood-600 transition-colors">Atypická výroba</h3>
<p className="text-wood-600 text-sm leading-relaxed mb-4">
                        Máte specifické přání? Vyrobíme cokoliv, co technologie dřeva dovolí. Kompletní realizace interiérů.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative z-10" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 reveal-on-scroll">
<div className="w-full md:w-auto">
<span className="text-wood-600 text-xs font-bold tracking-widest uppercase mb-3 block">Fotogalerie</span>
<h2 className="font-serif text-4xl text-wood-900 tracking-tight">Vybrané realizace</h2>
</div>
<p className="text-wood-500 text-sm max-w-sm text-left w-full md:w-auto">
                    Inspirujte se naší prací. Každý kus je originál.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4" id="dynamic-gallery-grid">

</div>

<div className="mt-12 text-center reveal-on-scroll hidden" id="gallery-toggle-btn">
<button className="group inline-flex items-center gap-2 text-wood-900 border-b border-wood-900 pb-1 hover:text-wood-600 hover:border-wood-600 transition-all text-sm font-semibold tracking-wide uppercase" onclick="toggleGallery()">
<span id="gallery-btn-text">Zobrazit více realizací</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" height="1em" id="gallery-btn-icon" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-24 bg-wood-100/30 border-t border-wood-200">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="font-serif text-3xl md:text-4xl text-wood-900 text-center md:text-left">Co o nás říkají zákazníci</h2>
<div className="flex items-center gap-2 mt-3 justify-center md:justify-start" id="reviews-summary">

</div>
</div>
<button className="bg-wood-800 text-wood-50 px-6 py-3 rounded-sm font-medium hover:bg-wood-700 transition-colors shadow-lg shadow-wood-800/20 text-sm flex items-center gap-2" onclick="openReviewModal()">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
                    Napsat recenzi
                </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="dynamic-reviews-grid">

</div>
<div className="mt-12 text-center hidden" id="reviews-load-more">
<button className="text-wood-600 font-medium hover:text-wood-900 transition-colors border-b border-wood-300 hover:border-wood-900 pb-0.5 text-sm uppercase tracking-wide" onclick="loadMoreReviews()">
                    Načíst další recenze
                </button>
</div>
</div>
</section>

<section className="bg-wood-900 text-wood-50 py-24 relative overflow-hidden" id="kontakt">

<div className="absolute top-0 right-0 w-1/3 h-full bg-wood-800/30 skew-x-12 transform translate-x-20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="reveal-on-scroll">
<span className="text-wood-400 text-xs font-bold tracking-widest uppercase mb-4 block">Kontakt</span>
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-8">Zastavte se za námi<br/>v dílně</h2>
<div className="space-y-8">
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:map-pin" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="">
<h4 className="text-lg font-serif mb-1">Adresa dílny</h4>
<p className="text-wood-300 font-light">Horní Skrýchov 20377 01 Jindřichův Hradec</p>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:phone" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1">Telefon</h4>
<a className="text-wood-300 font-light hover:text-white transition-colors block text-lg" href="tel:+420777904730">+420 777 904 730</a>
</div>
</div>
<div className="flex items-start gap-4 group">
<div className="p-3 rounded-sm bg-wood-800 group-hover:bg-wood-700 transition-colors">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<h4 className="text-lg font-serif mb-1">Email</h4>
<a className="text-wood-300 font-light hover:text-white transition-colors" href="mailto:viktor.vlk@seznam.cz">viktor.vlk@seznam.cz</a>
</div>
</div>
</div>
</div>

<div className="reveal-on-scroll delay-100">
<form className="bg-wood-50 p-8 md:p-10 rounded-sm shadow-2xl shadow-black/30">
<h3 className="text-wood-900 font-serif text-2xl mb-6">Napište nám</h3>
<div className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="name">Jméno</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="name" placeholder="Váš jméno" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="phone">Telefon</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="phone" placeholder="+420" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="email">Email</label>
<input className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm" id="email" placeholder="vas@email.cz" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2" htmlFor="message">O co máte zájem?</label>
<textarea className="w-full bg-wood-100 border-b-2 border-wood-200 px-4 py-3 text-wood-900 focus:outline-none focus:border-wood-600 focus:bg-white transition-all placeholder-wood-300 rounded-t-sm resize-none" id="message" placeholder="Popište stručně svou poptávku..." rows="4"></textarea>
</div>
<button className="w-full mt-4 bg-wood-800 text-white font-medium py-4 px-6 rounded-sm hover:bg-wood-700 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg" type="submit">
                                Odeslat zprávu
                                <svg aria-hidden="true" data-icon="lucide:send" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<div className="w-full h-80 grayscale invert-[0.1] contrast-[0.9]">
<iframe allowfullscreen="" className="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.583489810842!2d15.02263437691882!3d49.16781997138334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d14ea1740685b%3A0x6b69324706598379!2sHorn%C3%AD%20Skr%C3%BDchov%2020%2C%20377%2001%20Jind%C5%99ich%C5%AFv%20Hradec!5e0!3m2!1scs!2scz!4v1709845612345!5m2!1scs!2scz" style={{border: '0'}} width="100%"></iframe>
</div>

<footer className="bg-wood-950 py-12 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="font-serif text-2xl text-wood-50 tracking-tight">Truhlářství Vlk</span>
<p className="text-wood-600 text-xs font-mono mt-2">© 2026 Všechna práva vyhrazena. BLEY.cz</p>
</div>
<div className="flex flex-col md:flex-row gap-6 md:gap-10 text-center md:text-right">
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#o-nas">O nás</a>
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#sluzby">Služby</a>
<a className="text-wood-400 hover:text-white text-sm transition-colors" href="#kontakt">Kontakt</a>

<button className="text-wood-800 hover:text-wood-600 transition-colors" onclick="toggleAdminPanel()" title="Admin">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
</div>
</footer>


<div className="fixed inset-0 z-[60] hidden" id="review-modal">
<div className="absolute inset-0 bg-wood-950/60 backdrop-blur-sm" onclick="closeReviewModal()"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg p-4">
<div className="bg-white rounded-sm shadow-2xl p-8 relative">
<button className="absolute top-4 right-4 text-wood-400 hover:text-wood-900" onclick="closeReviewModal()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<h3 className="font-serif text-2xl text-wood-900 mb-6">Napsat recenzi</h3>
<form id="review-form" onsubmit="submitReviewForm(event)">
<div className="space-y-4">
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Vaše jméno <span className="text-red-500">*</span></label>
<input className="w-full bg-wood-50 border border-wood-200 px-4 py-2 text-wood-900 focus:outline-none focus:border-wood-600 rounded-sm" id="rev-name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Email (nebude zveřejněn) <span className="text-red-500">*</span></label>
<input className="w-full bg-wood-50 border border-wood-200 px-4 py-2 text-wood-900 focus:outline-none focus:border-wood-600 rounded-sm" id="rev-email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Hodnocení <span className="text-red-500">*</span></label>
<div className="flex gap-1 text-wood-300 cursor-pointer" id="star-input-container">

</div>
<input id="rev-rating" required="" type="hidden" value="0"/>
</div>
<div>
<label className="block text-xs font-bold text-wood-500 uppercase tracking-wider mb-2">Recenze <span className="text-red-500">*</span></label>
<textarea className="w-full bg-wood-50 border border-wood-200 px-4 py-2 text-wood-900 focus:outline-none focus:border-wood-600 rounded-sm resize-none" id="rev-text" required="" rows="4"></textarea>
</div>
<div className="flex items-start gap-2">
<input className="mt-1 custom-checkbox w-4 h-4 border border-wood-300 rounded-sm appearance-none bg-white checked:bg-wood-600 checked:border-wood-600 cursor-pointer relative shrink-0" id="rev-gdpr" required="" type="checkbox"/>
<label className="text-xs text-wood-500" htmlFor="rev-gdpr">Souhlasím se zpracováním emailu pro ověření recenze.</label>
</div>

<div className="bg-wood-50 border border-wood-200 p-3 rounded-sm flex items-center gap-3 w-fit">
<input className="w-5 h-5 cursor-pointer accent-wood-600" id="rev-captcha" required="" type="checkbox"/>
<span className="text-xs text-wood-600 font-medium">Nejsem robot</span>
<img className="w-6 h-6 opacity-50" src="https://www.gstatic.com/recaptcha/api2/logo_48.png"/>
</div>
<button className="w-full bg-wood-800 text-white py-3 rounded-sm font-medium hover:bg-wood-700 transition-colors" type="submit">Odeslat recenzi</button>
</div>
</form>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden" id="confirm-modal">
<div className="absolute inset-0 bg-wood-950/60 backdrop-blur-sm"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4">
<div className="bg-white rounded-sm shadow-2xl p-8 text-center">
<div className="w-12 h-12 bg-wood-100 rounded-full flex items-center justify-center mx-auto mb-4 text-wood-700">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
</div>
<h3 className="font-serif text-xl text-wood-900 mb-2">Potvrzení recenze</h3>
<p className="text-sm text-wood-500 mb-6">Zkontrolujte prosím údaje před zveřejněním.</p>
<div className="bg-wood-50 p-4 rounded-sm text-left mb-6 border border-wood-100">
<div className="flex items-center justify-between mb-2">
<span className="font-bold text-wood-900" id="conf-name">Jméno</span>
<div className="flex text-yellow-500 text-xs" id="conf-stars"></div>
</div>
<p className="text-sm text-wood-600 italic" id="conf-text">Text...</p>
</div>
<div className="flex gap-3">
<button className="flex-1 border border-wood-200 text-wood-600 py-2 rounded-sm hover:bg-wood-50 text-sm font-medium" onclick="editReview()">Upravit</button>
<button className="flex-1 bg-wood-800 text-white py-2 rounded-sm hover:bg-wood-700 text-sm font-medium" onclick="publishReview()">Potvrdit a zveřejnit</button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[100] hidden" id="admin-panel">
<div className="absolute inset-0 bg-wood-950/90 backdrop-blur-md"></div>
<div className="absolute inset-4 md:inset-10 bg-white rounded-sm shadow-2xl flex flex-col overflow-hidden">

<div className="bg-wood-100 px-6 py-4 flex justify-between items-center border-b border-wood-200">
<h2 className="font-serif text-xl text-wood-900">Administrace webu</h2>
<button className="text-wood-500 hover:text-wood-900" onclick="toggleAdminPanel()">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex border-b border-wood-200">
<button className="px-6 py-3 text-sm font-medium text-wood-900 border-b-2 border-wood-800 bg-wood-50" id="tab-btn-reviews" onclick="switchTab('admin-reviews')">Recenze</button>
<button className="px-6 py-3 text-sm font-medium text-wood-500 hover:text-wood-900" id="tab-btn-gallery" onclick="switchTab('admin-gallery')">Galerie</button>
</div>

<div className="flex-1 overflow-auto p-6 bg-wood-50/50">

<div className="max-w-4xl mx-auto" id="admin-reviews-content">
<div className="flex justify-between items-center mb-6">
<h3 className="font-bold text-wood-800">Správa recenzí</h3>
<button className="text-xs bg-wood-800 text-white px-3 py-1.5 rounded-sm" onclick="openReviewModal()">Přidat ručně</button>
</div>
<div className="space-y-3" id="admin-reviews-list">

</div>
</div>

<div className="max-w-6xl mx-auto hidden" id="admin-gallery-content">
<div className="flex justify-between items-center mb-6">
<div>
<h3 className="font-bold text-wood-800">Správa galerie</h3>
<p className="text-xs text-wood-500 mt-1">Max 20 obrázků. Limit: <span id="gallery-count">0</span>/20</p>
</div>
<label className="cursor-pointer bg-wood-800 text-white px-4 py-2 rounded-sm text-sm hover:bg-wood-700 flex items-center gap-2">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line></svg>
                            Nahrát obrázek
                            <input accept="image/*" className="hidden" onchange="uploadImage(event)" type="file"/>
</label>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4" id="admin-gallery-grid">

</div>
</div>
</div>
</div>
</div>



    </>
  );
}
