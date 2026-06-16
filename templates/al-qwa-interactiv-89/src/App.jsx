import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();

        // --- Translations ---
        const translations = {
            en: {
                selection: "Selection",
                swipe: "Swipe to choose",
                drag: "Drag down to enter",
                cards: [
                    { title: "Libya", desc: "Land of opportunities.", action: "Select" },
                    { title: "Candidate", desc: "Boost your career.", action: "Select" },
                    { title: "Company", desc: "Recruit & Manage.", action: "Select" }
                ],
                content: {
                    activity: "Activity", activitySub: "Updated today",
                    docs: "Documents", docsSub: "3 pending review",
                    latest: "Latest Updates",
                    up1: "Platform Update v2.4", up1Time: "2 hours ago",
                    up2: "New Opportunities", up2Time: "Yesterday"
                }
            },
            ar: {
                selection: "الاختيار",
                swipe: "اسحب للاختيار",
                drag: "اسحب للأسفل للدخول",
                cards: [
                    { title: "ليبيا", desc: "أرض الفرص والاستثمار.", action: "تحديد" },
                    { title: "مرشح", desc: "عزز مسيرتك المهنية.", action: "تحديد" },
                    { title: "شركة", desc: "توظيف وإدارة الأعمال.", action: "تحديد" }
                ],
                content: {
                    activity: "النشاط", activitySub: "تم التحديث اليوم",
                    docs: "المستندات", docsSub: "3 قيد المراجعة",
                    latest: "آخر التحديثات",
                    up1: "تحديث المنصة v2.4", up1Time: "منذ ساعتين",
                    up2: "فرص جديدة", up2Time: "الأمس"
                }
            }
        };

        let currentLang = 'en';

        // State
        let activeIndex = 1; 
        const totalCards = 3;
        const cards = document.querySelectorAll('.card');
        const touchArea = document.getElementById('carousel-touch-area');
        const contentLayer = document.getElementById('content-layer');
        const contentHeader = document.getElementById('content-header');
        const selectionLayer = document.getElementById('selection-layer');
        const slotHighlight = document.getElementById('slot-highlight');
        const topUi = document.getElementById('top-ui');
        const bottomUi = document.getElementById('bottom-ui');
        const mainNav = document.getElementById('main-nav');
        const mainLogo = document.getElementById('main-logo');
        const langSwitch = document.getElementById('lang-switch');

        let startX = 0, startY = 0;
        let isDragging = false;
        let dragAxis = null;

        // Extended Data for Content View
        const contentData = [
            { 
                title: { en: "Libya Opportunities", ar: "فرص ليبيا" }, 
                desc: { en: "Explore the Libyan market. Investment, partnerships, and economic growth.", ar: "استكشف السوق الليبي. استثمار، شراكات، ونمو اقتصادي." },
                icon: "globe",
                color: "text-emerald-400 bg-emerald-900/20 border-emerald-500/20"
            },
            { 
                title: { en: "Candidate Space", ar: "فضاء المرشح" }, 
                desc: { en: "Your professional profile. Track applications and discover tailored offers.", ar: "ملفك المهني. تتبع الطلبات واكتشف عروضاً مخصصة لك." },
                icon: "user",
                color: "text-white bg-white/10 border-white/10"
            },
            { 
                title: { en: "Company Hub", ar: "مركز الشركات" }, 
                desc: { en: "Manage recruitment and access financial services dedicated to professionals.", ar: "أدر عمليات التوظيف والوصول إلى خدمات مالية مخصصة للمحترفين." },
                icon: "building-2",
                color: "text-white bg-white/10 border-white/10"
            }
        ];

        function setLanguage(lang) {
            currentLang = lang;
            const t = translations[lang];
            const isAr = lang === 'ar';

            // HTML Dir & Font
            document.documentElement.lang = lang;
            document.documentElement.dir = isAr ? 'rtl' : 'ltr';
            document.body.className = isAr ? 'text-slate-50 h-screen w-screen relative overflow-hidden bg-[#C90F28] selection:bg-white/30 font-arabic' : 'text-slate-50 h-screen w-screen relative overflow-hidden bg-[#C90F28] selection:bg-white/30';

            // Update UI Text
            document.getElementById('title-selection').innerText = t.selection;
            document.getElementById('subtitle-selection').innerText = t.swipe;
            document.getElementById('drag-hint').innerText = t.drag;

            // Update Cards Text
            document.querySelectorAll('.card').forEach((card, index) => {
                card.querySelector('.card-title').innerText = t.cards[index].title;
                card.querySelector('.card-desc').innerText = t.cards[index].desc;
                card.querySelector('.card-action').innerText = t.cards[index].action;
            });

            // Update Internal Content Text
            document.querySelector('.content-txt-activity').innerText = t.content.activity;
            document.querySelector('.content-txt-activity-sub').innerText = t.content.activitySub;
            document.querySelector('.content-txt-docs').innerText = t.content.docs;
            document.querySelector('.content-txt-docs-sub').innerText = t.content.docsSub;
            document.querySelector('.content-txt-latest').innerText = t.content.latest;
            document.querySelector('.content-txt-up1').innerText = t.content.up1;
            document.querySelector('.content-txt-up1-time').innerText = t.content.up1Time;
            document.querySelector('.content-txt-up2').innerText = t.content.up2;
            document.querySelector('.content-txt-up2-time').innerText = t.content.up2Time;

            // Toggle Button Styles
            const btnEn = document.getElementById('btn-en');
            const btnAr = document.getElementById('btn-ar');
            
            const activeClass = "bg-white/20 text-white shadow-sm border border-white/10 hover:bg-white/30";
            const inactiveClass = "text-white/60 hover:text-white border-transparent";

            if (lang === 'en') {
                btnEn.className = `px-3 py-1 rounded-full text-xs font-semibold transition-all ${activeClass}`;
                btnAr.className = `px-3 py-1 rounded-full text-xs font-medium transition-colors ${inactiveClass}`;
            } else {
                btnAr.className = `px-3 py-1 rounded-full text-xs font-semibold transition-all ${activeClass}`;
                btnEn.className = `px-3 py-1 rounded-full text-xs font-medium transition-colors ${inactiveClass}`;
            }
        }

        function updateCards(offsetY = 0) {
            cards.forEach((card, index) => {
                const diff = index - activeIndex;
                let xTrans = 0;
                let scale = 1;
                let zIndex = 0;
                let opacity = 1;
                let rotateY = 0;

                if (diff === 0) {
                    xTrans = 0;
                    scale = 1;
                    zIndex = 20;
                    opacity = 1;
                    rotateY = 0;
                } else if (diff === -1 || (activeIndex === 0 && index === 2)) {
                     xTrans = -75; // Reduced from -105 to bring closer
                     scale = 0.85;
                     zIndex = 10;
                     opacity = 0.6;
                     rotateY = 15;
                } else if (diff === 1 || (activeIndex === 2 && index === 0)) {
                    xTrans = 75; // Reduced from 105 to bring closer
                    scale = 0.85;
                    zIndex = 10;
                    opacity = 0.6;
                    rotateY = -15;
                } else {
                    xTrans = diff * 75;
                    opacity = 0;
                }

                const yTrans = (diff === 0) ? offsetY : 0;
                card.style.zIndex = zIndex;
                card.style.opacity = opacity;
                card.style.transform = `translate3d(${xTrans}%, ${yTrans}px, 0) scale(${scale}) rotateY(${rotateY}deg)`;
                
                if (diff !== 0) {
                    card.style.filter = 'blur(1px) brightness(0.6)';
                } else if (offsetY > 0) {
                    card.style.filter = `brightness(${1 + (offsetY/1000)})`;
                } else {
                    card.style.filter = 'none';
                }
            });
        }

        updateCards();

        touchArea.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            dragAxis = null;
            cards.forEach(c => c.classList.add('no-transition'));
        }, { passive: false });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].clientX;
            const y = e.touches[0].clientY;
            const deltaX = x - startX;
            const deltaY = y - startY;

            if (!dragAxis) {
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) dragAxis = 'x';
                else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 5) dragAxis = 'y';
            }

            if (dragAxis === 'y') {
                e.preventDefault();
                if (deltaY > 0) {
                    const resistance = deltaY * 0.5;
                    updateCards(resistance);
                    const progress = Math.min(resistance / 200, 1);
                    topUi.style.opacity = 1 - progress;
                    bottomUi.style.opacity = 1 - progress;
                    mainNav.style.opacity = 1 - progress;
                    mainLogo.style.opacity = 1 - progress;
                    langSwitch.style.opacity = 1 - progress;
                    slotHighlight.style.opacity = progress;
                }
            }
        }, { passive: false });

        window.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            cards.forEach(c => c.classList.remove('no-transition'));
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const deltaX = endX - startX;
            const deltaY = endY - startY;

            if (dragAxis === 'x') {
                if (Math.abs(deltaX) > 50) {
                    if (deltaX > 0 && activeIndex > 0) activeIndex--;
                    if (deltaX < 0 && activeIndex < totalCards - 1) activeIndex++;
                }
                updateCards(0);
            } 
            else if (dragAxis === 'y') {
                if (deltaY > 120) activateSelection();
                else {
                    updateCards(0);
                    topUi.style.opacity = 1;
                    bottomUi.style.opacity = 1;
                    mainNav.style.opacity = 1;
                    mainLogo.style.opacity = 1;
                    langSwitch.style.opacity = 1;
                    slotHighlight.style.opacity = 0;
                }
            } else {
                updateCards(0);
            }
            dragAxis = null;
        });

        // Mouse Emulation
        touchArea.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            startY = e.clientY;
            dragAxis = null;
            cards.forEach(c => c.classList.add('no-transition'));
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
             if (!dragAxis) {
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 5) dragAxis = 'x';
                else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 5) dragAxis = 'y';
            }
            if (dragAxis === 'y' && deltaY > 0) updateCards(deltaY * 0.5);
        });

        window.addEventListener('mouseup', (e) => {
            if(!isDragging) return;
            isDragging = false;
            cards.forEach(c => c.classList.remove('no-transition'));
            const deltaY = e.clientY - startY;
            const deltaX = e.clientX - startX;
            if (dragAxis === 'y' && deltaY > 150) activateSelection();
            else if (dragAxis === 'x' && Math.abs(deltaX) > 50) {
                if (deltaX > 0 && activeIndex > 0) activeIndex--;
                if (deltaX < 0 && activeIndex < totalCards - 1) activeIndex++;
                updateCards(0);
            }
            else updateCards(0);
            dragAxis = null;
        });

        function activateSelection() {
            const activeCard = document.querySelector(`.card[data-index="${activeIndex}"]`);
            activeCard.style.transform = `translateX(0) translateY(120vh) scale(0.7)`;
            activeCard.style.opacity = 0;
            
            selectionLayer.style.opacity = 0;
            selectionLayer.style.pointerEvents = 'none';
            mainNav.style.opacity = 0;
            mainLogo.style.opacity = 0;
            langSwitch.style.opacity = 0;

            const data = contentData[activeIndex];
            const title = data.title[currentLang];
            const desc = data.desc[currentLang];

            contentHeader.innerHTML = `
                <div class="mb-4 inline-flex items-center justify-center p-3 rounded-2xl border ${data.color}">
                    <i data-lucide="${data.icon}" class="w-8 h-8"></i>
                </div>
                <h2 class="text-3xl font-bold text-white tracking-tight mb-3">${title}</h2>
                <p class="text-lg text-neutral-400 leading-relaxed">${desc}</p>
            `;
            lucide.createIcons();

            setTimeout(() => {
                contentLayer.style.transform = 'translateY(0%)';
            }, 200);
        }

        function resetSelection() {
            contentLayer.style.transform = 'translateY(100%)';
            setTimeout(() => {
                selectionLayer.style.opacity = 1;
                selectionLayer.style.pointerEvents = 'auto';
                topUi.style.opacity = 1;
                bottomUi.style.opacity = 1;
                mainNav.style.opacity = 1;
                mainLogo.style.opacity = 1;
                langSwitch.style.opacity = 1;
                slotHighlight.style.opacity = 0;
                updateCards(0);
            }, 600);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#C90F28]">

<div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10 mix-blend-overlay"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>


<div className="fixed top-6 left-6 z-50 flex items-center gap-3 transition-opacity duration-300" id="main-logo">
<div className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center border border-white/20 backdrop-blur-md">
<svg className="w-4 h-4 text-white fill-current" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C13.84 22 15.55 21.5 17.04 20.64L20.55 22.39C20.84 22.54 21.18 22.45 21.37 22.19C21.56 21.93 21.54 21.57 21.32 21.32L18.66 18.28C20.73 16.64 22 14.28 22 12C22 6.48 17.52 2 12 2Z" fill-rule="evenodd"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-white">AL-QWA</span>
</div>

<div className="fixed top-6 right-6 z-50 flex items-center gap-1 glass-pill rounded-full p-1 transition-opacity duration-300" id="lang-switch">
<button className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white shadow-sm border border-white/10 transition-all hover:bg-white/30" id="btn-en" onclick="setLanguage('en')">EN</button>
<button className="px-3 py-1 rounded-full text-xs font-medium text-white/60 hover:text-white transition-colors" id="btn-ar" onclick="setLanguage('ar')">عربي</button>
</div>

<div className="absolute inset-0 z-30 flex flex-col items-center justify-between py-12 pb-24 transition-all duration-700" id="selection-layer">

<div className="mt-24 text-center z-10 opacity-100 transition-opacity duration-300 space-y-2" id="top-ui">
<h1 className="text-3xl font-semibold tracking-tighter text-white glow-text mb-1" id="title-selection">Selection</h1>
<p className="text-xs text-white/60 font-medium uppercase tracking-widest" id="subtitle-selection">Swipe to choose</p>
</div>

<div className="relative w-full h-[450px] perspective-1000 flex items-center justify-center overflow-visible" id="carousel-touch-area">

<div className="relative w-64 h-80 preserve-3d cursor-grab active:cursor-grabbing" id="cards-wrapper">

<div className="card absolute inset-0 glass-card rounded-3xl overflow-hidden card-transition flex flex-col items-center justify-between p-6 select-none" data-index="0">

<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent z-0"></div>
<div className="relative z-10 w-full flex justify-between items-start">
<div className="p-2 bg-white/5 rounded-lg border border-white/5"><i className="text-white w-5 h-5" data-lucide="globe"></i></div>
</div>
<div className="relative z-10 text-center space-y-2">
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center mb-2 border border-white/10">
<i className="text-white w-9 h-9" data-lucide="map"></i>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight card-title">Libya</h2>
<p className="text-xs text-white/50 font-medium leading-relaxed card-desc">Land of opportunities.</p>
</div>
<div className="relative z-10 w-full pt-4 border-t border-white/10 flex justify-center">
<span className="text-xs font-semibold text-white/90 uppercase tracking-wider card-action">Select</span>
</div>
</div>

<div className="card absolute inset-0 glass-card rounded-3xl overflow-hidden card-transition flex flex-col items-center justify-between p-6 select-none" data-index="1">
<div className="absolute inset-0 bg-white/5 z-0"></div>
<div className="relative z-10 w-full flex justify-between items-start">
<div className="p-2 bg-white/10 rounded-lg border border-white/10"><i className="text-white w-5 h-5" data-lucide="user"></i></div>
</div>
<div className="relative z-10 text-center space-y-2">
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center mb-2 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
<i className="text-white w-9 h-9" data-lucide="search"></i>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight card-title">Candidate</h2>
<p className="text-xs text-white/50 font-medium leading-relaxed card-desc">Boost your career.</p>
</div>
<div className="relative z-10 w-full pt-4 border-t border-white/10 flex justify-center">
<span className="text-xs font-semibold text-white uppercase tracking-wider card-action">Select</span>
</div>
</div>

<div className="card absolute inset-0 glass-card rounded-3xl overflow-hidden card-transition flex flex-col items-center justify-between p-6 select-none" data-index="2">
<div className="w-full flex justify-between items-start">
<div className="p-2 bg-white/5 rounded-lg border border-white/5"><i className="text-white w-5 h-5" data-lucide="building-2"></i></div>
</div>
<div className="text-center space-y-2">
<div className="w-20 h-20 mx-auto bg-gradient-to-br from-white/10 to-transparent rounded-full flex items-center justify-center mb-2 border border-white/10 shadow-inner">
<i className="text-white w-9 h-9" data-lucide="briefcase"></i>
</div>
<h2 className="text-xl font-semibold text-white tracking-tight card-title">Company</h2>
<p className="text-xs text-white/50 font-medium leading-relaxed card-desc">Recruit &amp; Manage.</p>
</div>
<div className="w-full pt-4 border-t border-white/10 flex justify-center">
<span className="text-xs font-semibold text-white/90 uppercase tracking-wider group-hover:text-white transition-colors card-action">Select</span>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex flex-col items-center space-y-4 opacity-100 transition-opacity duration-300 mb-6" id="bottom-ui">

<div className="w-16 h-24 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-sm bg-black/20">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 opacity-0 transition-opacity duration-300" id="slot-highlight"></div>
<i className="text-white/60 w-6 h-6 animate-float" data-lucide="arrow-down"></i>
</div>
<p className="text-xs text-white/70 font-semibold tracking-wide" id="drag-hint">Drag down to enter</p>
</div>
</div>

<nav className="fixed bottom-0 left-0 right-0 z-50 px-6 py-6 flex items-center justify-center pointer-events-none" id="main-nav">
<div className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-2 py-1.5 shadow-lg pointer-events-auto">
<button className="nav-icon p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all group relative">
<i className="w-4 h-4" data-lucide="mail"></i>
</button>
<button className="nav-icon p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all group relative">
<i className="w-4 h-4" data-lucide="link"></i>
</button>
<div className="w-px h-3 bg-white/20 mx-1"></div>
<button className="nav-icon p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-all group relative">
<i className="w-4 h-4" data-lucide="instagram"></i>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-neutral-950 translate-y-full transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col text-white" id="content-layer">

<nav className="flex-none px-6 py-4 border-b border-white/10 glass-panel flex items-center justify-between bg-neutral-900/80 backdrop-blur-xl">
<div className="flex items-center gap-3">
<button className="p-2 -ml-2 hover:bg-white/5 rounded-lg text-neutral-400 hover:text-white transition-colors rtl-flip" onclick="resetSelection()">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
</button>
<span className="font-semibold text-lg tracking-tighter text-white">AL-QWA</span>
</div>
<div className="flex items-center gap-3 text-neutral-400">
<i className="w-4 h-4 hover:text-white cursor-pointer" data-lucide="bell"></i>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-red-600 to-orange-500 border border-white/10"></div>
</div>
</nav>

<div className="flex-1 overflow-y-auto p-6 md:p-12 relative bg-gradient-to-b from-neutral-950 to-neutral-900 pb-28">
<div className="max-w-3xl mx-auto">

<div className="mb-10 animate-fade-in" id="content-header"></div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="glass-card bg-white/5 p-6 rounded-2xl h-48 flex flex-col justify-between group hover:border-red-500/30 transition-colors cursor-pointer border border-white/5">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="activity"></i>
</div>
<span className="text-xs font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-1 rounded-full" dir="ltr">+12%</span>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight content-txt-activity">Activity</div>
<div className="text-xs text-neutral-500 font-medium content-txt-activity-sub">Updated today</div>
</div>
</div>
<div className="glass-card bg-white/5 p-6 rounded-2xl h-48 flex flex-col justify-between group hover:border-red-500/30 transition-colors cursor-pointer border border-white/5">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
</div>
<div>
<div className="text-2xl font-semibold text-white tracking-tight content-txt-docs">Documents</div>
<div className="text-xs text-neutral-500 font-medium content-txt-docs-sub">3 pending review</div>
</div>
</div>
</div>
<div className="mt-4 glass-card bg-white/5 p-6 rounded-2xl border border-white/5">
<h3 className="text-sm font-semibold text-white mb-4 content-txt-latest">Latest Updates</h3>
<div className="space-y-4">
<div className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white/5 shrink-0 border border-white/5 flex items-center justify-center">
<i className="w-4 h-4 text-white/50" data-lucide="zap"></i>
</div>
<div>
<div className="text-sm font-medium text-white content-txt-up1">Platform Update v2.4</div>
<div className="text-xs text-neutral-500 content-txt-up1-time">2 hours ago</div>
</div>
</div>
<div className="flex items-center gap-4 py-2 border-b border-white/5 last:border-0 hover:bg-white/5 p-2 -mx-2 rounded-lg transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white/5 shrink-0 border border-white/5 flex items-center justify-center">
<i className="w-4 h-4 text-white/50" data-lucide="star"></i>
</div>
<div>
<div className="text-sm font-medium text-white content-txt-up2">New Opportunities</div>
<div className="text-xs text-neutral-500 content-txt-up2-time">Yesterday</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
