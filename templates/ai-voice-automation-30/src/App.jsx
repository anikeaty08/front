import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
    


    // Initialize Icons
    lucide.createIcons();

    // ============================================
    // WEBHOOK CONFIGURATION - DEMO FORM
    // ============================================
    const WEBHOOK_CONFIG = {
        production: 'https://n8n.srv909918.hstgr.cloud/webhook/f309ac8b-b805-45c3-9839-c104fb77ba02',
        test: 'https://n8n.srv909918.hstgr.cloud/webhook-test/f309ac8b-b805-45c3-9839-c104fb77ba02',
        get active() {
            return this.test;
        }
    };

    // ============================================
    // WEBHOOK CONFIGURATION - CONTACT FORM
    // ============================================
    const CONTACT_WEBHOOK_CONFIG = {
        production: 'https://n8n.srv909918.hstgr.cloud/webhook/e9603410-568d-42a1-846f-8ec92774fbbe',
        test: 'https://n8n.srv909918.hstgr.cloud/webhook-test/e9603410-568d-42a1-846f-8ec92774fbbe',
        get active() {
            return this.test;
        }
    };
    // ============================================

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Tab Switching Logic
    function openTab(tabName) {
        const allContent = document.querySelectorAll('.tab-content');
        allContent.forEach(content => {
            content.classList.remove('active');
        });

        const selectedContent = document.getElementById('content-' + tabName);
        if(selectedContent) {
            selectedContent.classList.add('active');
        }

        const allButtons = document.querySelectorAll('.tab-btn');
        allButtons.forEach(btn => {
            btn.classList.remove('bg-neutral-50', 'border-neutral-200', 'shadow-sm', 'ring-1', 'ring-neutral-200/50');
            btn.classList.add('border-transparent', 'hover:bg-neutral-50', 'hover:border-neutral-100');
        });

        const activeButton = document.getElementById('btn-' + tabName);
        if(activeButton) {
            activeButton.classList.remove('border-transparent', 'hover:bg-neutral-50', 'hover:border-neutral-100');
            activeButton.classList.add('bg-neutral-50', 'border-neutral-200', 'shadow-sm', 'ring-1', 'ring-neutral-200/50');
        }
    }

    // Scroll Reveal Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
        observer.observe(element);
    });

    // --- DEMO FORM HANDLER (POST REQUEST) ---
    const demoForm = document.getElementById('demo-form');
    if(demoForm) {
        demoForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-neutral-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Łączenie...</span>
            `;

            // Pobierz dane z formularza
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone')
            };

            // Wyślij jako POST z JSON body
            fetch(WEBHOOK_CONFIG.active, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>System dzwoni!</span>
                `;
                lucide.createIcons();
                this.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 5000);
            })
            .catch(() => {
                submitBtn.innerHTML = '<span>Błąd. Spróbuj ponownie.</span>';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 3000);
            });
        });
    }

    // --- CONTACT FORM HANDLER (POST REQUEST) ---
    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnContent = submitBtn.innerHTML;
            
            // Loading State
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Wysyłanie...</span>
            `;

            // Pobierz dane z formularza
            const formData = new FormData(this);
            const data = {
                firstName: formData.get('firstName'),
                lastName: formData.get('lastName'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                message: formData.get('message') || ''
            };

            // Wyślij jako POST z JSON body
            fetch(CONTACT_WEBHOOK_CONFIG.active, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                submitBtn.innerHTML = `
                    <i data-lucide="check" class="w-4 h-4"></i>
                    <span>Wysłano!</span>
                `;
                lucide.createIcons();
                this.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 5000);
            })
            .catch(() => {
                submitBtn.innerHTML = '<span>Błąd. Spróbuj ponownie.</span>';
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.innerHTML = originalBtnContent;
                    lucide.createIcons();
                }, 3000);
            });
        });
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full -z-10 h-screen overflow-hidden pointer-events-none">
<div className="absolute top-0 left-0 w-full h-full opacity-60" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
<header className="relative border-b border-neutral-100/50 backdrop-blur-md bg-white/70 sticky top-0 z-50" style={{}}>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="flex text-white bg-neutral-900 w-8 h-8 rounded-lg items-center justify-center" style={{}}>
<svg className="lucide lucide-type-outline" data-icon-replaced="true" data-icon-set="lucide" data-lucide="type-outline" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"></path></svg>
</div>
<span className="text-lg font-medium text-neutral-900 tracking-tight" style={{}}>NHATTU</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 font-medium" style={{}}>
<a className="hover:text-neutral-900 transition-colors" href="#dlaczego-my">ĐIỂM CHẠM TƯ DUY</a>
<a className="hover:text-neutral-900 transition-colors" href="#use-cases">Mô hình kinh doanh</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">GỬI THÔNG TIN</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-all shadow-neutral-500/10 hover:shadow-neutral-500/20 text-white bg-neutral-900 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg" href="#ai-demo" style={{}}>
<span className="font-medium">LIÊN HỆ</span>
<svg className="lucide lucide-phone-outgoing w-3.5 h-3.5" data-lucide="phone-outgoing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 8 6-6"></path><path d="M22 8V2h-6"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</a>
</nav>

<button className="md:hidden p-2 text-neutral-600" style={{}}>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main className="">

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex animate-fade-in-up text-xs font-medium text-neutral-600 bg-white/80 border-neutral-200 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur gap-x-2 gap-y-2 items-center" style={{}}>Mục tiêu: Khẳng định tầm vóc và tư duy ngay từ giây đầu tiên</div>
<h1 className="lg:text-[68px] leading-[1.05] text-5xl font-medium text-neutral-900 tracking-tighter mb-6" style={{}}>KIẾN TẠO GIÁ TRỊ  <br/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900" style={{}}>TỪ TƯ DUY QUẢN TRỊ ĐỘT PHÁ.</span></h1>
<p className="leading-relaxed text-lg text-neutral-600 max-w-lg mb-8" style={{}}>Chuyên ngành Quản trị Kinh doanh Tổng hợp tại Đại học Duy Tân. Tôi không chỉ học cách vận hành doanh nghiệp, tôi học cách tối ưu hóa mọi nguồn lực để tạo ra sự tăng trưởng bền vững trong kỷ nguyên số.</p>
<div className="flex flex-col sm:flex-row sm:items-center gap-6 gap-x-6 gap-y-6 items-start">

<a className="shiny-cta" href="#ai-demo">
<span className="">LIÊN HỆ</span>
<svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-3 px-2 py-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden" style={{}}>
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden" style={{}}>
<img alt="User" className="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden" style={{}}>
<img alt="User" className="" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"/>
</div>
</div>
<div className="text-sm">
<span className="block font-semibold text-neutral-900" style={{}}>Kết nối chiến lược</span>
<span className="text-neutral-500" style={{}}>50+ Kết nối</span>
</div>
</div>
</div>
</div>

<div className="lg:h-[700px] flex lg:justify-end w-full h-[600px] relative items-center justify-center">

<div className="overflow-hidden border-[6px] bg-neutral-900 w-[340px] h-[680px] border-neutral-800/80 rounded-[45px] relative shadow-[0_0_0_12px_rgba(0,0,0,0.1),0_30px_60px_-10px_rgba(0,0,0,0.5)]" style={{}}>

<div className="absolute inset-0 z-0">

<img alt="AI Agent" className="w-full h-full object-cover opacity-90" src="https://unsplash.com/fr/photos/personne-utilisant-une-tablette-blanche-sur-une-table-qW_k6x5OfRc"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>

<div className="absolute top-0 w-full px-6 pt-3 z-20 flex justify-between items-center text-white text-[10px] font-medium" style={{}}>
<span>14:32</span>
<div className="flex gap-1.5">
<svg className="lucide lucide-signal w-3 h-3" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-3 h-3" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<svg className="lucide lucide-battery w-3 h-3" data-lucide="battery" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M 22 14 L 22 10"></path><rect height="12" rx="2" width="16" x="2" y="6"></rect></svg>
</div>
</div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full px-3 py-1.5 z-30 flex items-center gap-3 animate-fade-in-up delay-100 shadow-2xl w-[92%] backdrop-blur-md bg-black/80 border border-white/10">
<div className="h-9 w-9 bg-neutral-800 rounded-full flex items-center justify-center shrink-0" style={{}}>
<div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{}}></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-[10px] text-neutral-400 leading-none mb-0.5" style={{}}>Status</p>
<p className="text-xs font-semibold text-white leading-none" style={{}}>Online</p>
</div>
</div>

<div className="flex flex-col z-10 h-full pt-24 pr-4 pb-6 pl-4 relative">

<div className="flex-1 flex flex-col overflow-hidden mb-4 pb-2 space-y-4 justify-end">

<div className="flex items-end gap-2 animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-white/20" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="leading-relaxed text-xs text-neutral-200 bg-neutral-800/80 max-w-[80%] border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-md" style={{}}>
                    Chào Nhật Tú, mình rất ấn tượng với tư duy phân tích thị trường của bạn trong dự án vừa rồi.</div>
</div>

<div className="text-center text-[9px] text-neutral-500 font-medium py-1 animate-fade-in-up delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>Dzisiaj 14:32</div>

<div className="flex items-end justify-end gap-2 animate-fade-in-up delay-1000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="leading-relaxed shadow-cyan-900/20 text-xs text-white bg-cyan-600 max-w-[80%] rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-lg" style={{}}>
                    Cảm ơn anh! Em tin rằng sự kết hợp giữa dữ liệu và quản trị hệ thống sẽ tạo ra đột phá.</div>
</div>

<div className="flex items-end gap-2 animate-fade-in-up delay-2000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-white/20" style={{}}>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="leading-relaxed text-xs text-neutral-200 bg-neutral-800/80 max-w-[85%] border-white/10 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-sm backdrop-blur-md" style={{}}>
                    Rất chuyên nghiệp! Chúng ta thảo luận sâu hơn về chiến lược sắp tới nhé?</div>
</div>

<div className="flex items-end gap-2 animate-fade-in-up delay-3000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 opacity-0 shrink-0"></div> 
<a className="group block w-[85%] bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-xl hover:bg-white/15 transition-all cursor-pointer shadow-lg" href="#ai-demo">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400" style={{}}>
<svg className="lucide lucide-phone-call w-4 h-4" data-lucide="phone-call" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 2a9 9 0 0 1 9 9"></path><path d="M13 6a5 5 0 0 1 5 5"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div className="">
<p className="text-white font-semibold text-xs" style={{}}>Zamów rozmowę</p>
<p className="text-[10px] text-neutral-400" style={{}}>pixelminds.pl</p>
</div>
</div>
<div className="text-[10px] text-cyan-300 font-medium group-hover:text-cyan-200 flex items-center gap-1" style={{}}>
                        Kliknij, aby otworzyć formularz
                        <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</div>
</a>
</div>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1 pl-4 flex items-center gap-2">
<div className="flex-1 text-neutral-400 text-xs" style={{}}>iMessage</div>
<div className="h-7 w-7 bg-cyan-600 rounded-full flex items-center justify-center" style={{}}>
<svg className="lucide lucide-arrow-up w-4 h-4 text-white" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</div>
</div>

<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10" style={{}}></div>
<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-cyan-500/20 rounded-full blur-[60px] -z-10" style={{}}></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden" id="dlaczego-my">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" style={{}}></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[100px]" style={{}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>
<div className="lg:px-8 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
<span className="uppercase block text-xs font-semibold text-indigo-400 tracking-wide mb-3">ĐIỂM CHẠM TƯ DUY</span>
<h2 className="md:text-5xl text-3xl font-medium text-white tracking-tight mb-6" style={{}}>Quản trị không phải là công việc<br/> <span className="text-neutral-500" style={{}}>đó là một nghệ thuật điều phối sự hiệu quả.</span></h2>
<p className="leading-relaxed text-lg text-neutral-400" style={{}}>Đứng giữa dòng chảy biến động của thị trường, tôi lựa chọn lấy Tư duy hệ thống làm kim chỉ nam và Sự nhạy bén công nghệ làm đòn bẩy. Mục tiêu của tôi là chuyển hóa những thách thức phức tạp thành những cơ hội kinh doanh có lợi nhuận và giá trị xã hội.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group bg-white/5 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-filter w-6 h-6" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{}}>Tư duy Chiến lược &amp; Phân tích</h3>
<p className="leading-relaxed text-sm text-neutral-400" style={{}}>Khả năng nhận diện mô hình, phân tích SWOT và dự báo xu hướng thị trường để đưa ra các quyết định dựa trên dữ liệu (Data-driven decisions).</p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group" style={{}}>
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{}}>Tối ưu hóa Vận hành</h3>
<p className="leading-relaxed text-sm text-neutral-400" style={{}}>Thấu hiểu quy trình quản trị chuỗi cung ứng, nhân sự và tài chính nhằm cắt giảm lãng phí, gia tăng hiệu suất tổng thể cho tổ chức.</p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group" style={{}}>
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform" style={{}}>
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
</div>
<h3 className="text-xl font-semibold text-white mb-3" style={{}}>Thích ứng &amp; Đổi mới</h3>
<p className="leading-relaxed text-sm text-neutral-400" style={{}}>Gen Z với tư duy mở, sẵn sàng tích hợp AI và các công cụ quản trị hiện đại vào thực tiễn kinh doanh để dẫn đầu sự thay đổi.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white border-neutral-100 border-b pt-20 pb-20" style={{}}>
<div className="lg:px-8 reveal-on-scroll text-center max-w-7xl mr-auto mb-10 ml-auto pr-6 pl-6">
<span className="uppercase text-xs font-semibold text-indigo-600 tracking-wide" style={{}}>PHẦN LĨNH VỰC CHUYÊN SÂU</span>
<h3 className="lg:text-3xl text-2xl font-medium text-neutral-900 tracking-tight mt-2" style={{}}>Hệ sinh thái chuyên môn</h3>
</div>
<div className="relative flex overflow-x-hidden group reveal-on-scroll">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>

<div className="z-10 bg-gradient-to-l from-white to-transparent w-24 absolute top-0 right-0 bottom-0"></div><div className="animate-scroll whitespace-nowrap flex gap-6 pt-4 pb-4 gap-x-6 gap-y-6">

<div className="hover:bg-white hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 hover:shadow-md bg-neutral-50 w-[280px] border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-stethoscope w-5 h-5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Chiến lược &amp; Thương hiệu</h4>
<p className="whitespace-normal leading-snug text-sm text-neutral-500 mt-1" style={{}}>Định vị giá trị cốt lõi, xây dựng câu
        chuyện thương hiệu và thiết kế trải nghiệm khách hàng đa kênh.</p>
</div>
</div>

<div className="hover:bg-white hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 hover:shadow-md bg-neutral-50 w-[280px] border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Quản trị Vận hành tối ưu</h4>
<p className="whitespace-normal leading-snug text-sm text-neutral-500 mt-1" style={{}}>Tái cấu trúc quy trình, quản lý chuỗi cung
        ứng và nâng cao hiệu suất làm việc dựa trên tư duy Lean.</p>
</div>
</div>

<div className="hover:bg-white hover:border-indigo-100 transition-colors shrink-0 flex flex-col hover:shadow-md bg-neutral-50 w-[280px] border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Phân tích Tài chính &amp; Dữ liệu</h4>
<p className="whitespace-normal leading-snug text-sm text-neutral-500 mt-1" style={{}}>Đọc hiểu các chỉ số tài chính, dự báo ngân
        sách và đưa ra quyết định dựa trên phân tích số liệu thực tế.</p>
</div>
</div>

<div className="hover:bg-white hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 hover:shadow-md bg-neutral-50 w-[280px] border-neutral-200 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm gap-x-4 gap-y-4" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-scale w-5 h-5" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Chuyển đổi số &amp; AI</h4>
<p className="whitespace-normal leading-snug text-sm text-neutral-500 mt-1" style={{}}>Tích hợp công nghệ mới và Trí tuệ nhân tạo
        (AI) vào mô hình kinh doanh để dẫn dắt sự đổi mới.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-banknote w-5 h-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Quản trị Nhân sự &amp; Lãnh đạo</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Khai phá tiềm năng đội ngũ thông qua chiến lược quản trị con người hiện đại, thúc đẩy văn hóa đổi mới và lãnh đạo dựa trên sự thấu cảm</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-car w-5 h-5" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Serwisy Samochodowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Informacje o statusie naprawy, umawianie
        przeglądów.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Ubezpieczenia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Odnowienia polis, zgłaszanie szkód, prosta
        sprzedaż.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-bed w-5 h-5" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Hotelarstwo &amp; HoReCa</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Rezerwacje stolików, obsługa recepcji
        nocnej.</p>
</div>
</div>


<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-stethoscope w-5 h-5" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Medycyna &amp; Stomatologia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Potwierdzanie wizyt, rejestracja
        pacjentów, przypomnienia SMS.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-building-2 w-5 h-5" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Nieruchomości</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Kwalifikacja kupujących, umawianie
        prezentacji mieszkań.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>OZE &amp; Fotowoltaika</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Szybki kontakt z leadami, wstępna
        weryfikacja warunków.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-scale w-5 h-5" data-lucide="scale" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v18"></path><path d="m19 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1"></path><path d="m5 8 3 8a5 5 0 0 1-6 0zV7"></path><path d="M7 21h10"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Kancelarie Prawne</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Wstępny wywiad, selekcja spraw, umawianie
        konsultacji.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-banknote w-5 h-5" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Pośrednictwo Finansowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Badanie zdolności, umawianie spotkań z
        doradcami.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-car w-5 h-5" data-lucide="car" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path><circle cx="7" cy="17" r="2"></circle><path d="M9 17h6"></path><circle cx="17" cy="17" r="2"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Serwisy Samochodowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Informacje o statusie naprawy, umawianie
        przeglądów.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Ubezpieczenia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Odnowienia polis, zgłaszanie szkód, prosta
        sprzedaż.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md" style={{}}>
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm" style={{}}>
<svg className="lucide lucide-bed w-5 h-5" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg>
</div>
<div>
<h4 className="font-semibold text-neutral-900" style={{}}>Hotelarstwo &amp; HoReCa</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug" style={{}}>Rezerwacje stolików, obsługa recepcji
        nocnej.</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:px-8 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="use-cases">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<span className="uppercase text-xs font-semibold text-indigo-600 tracking-wide">Tối ưu hóa mô hình kinh doanh.</span>
<h2 className="lg:text-5xl text-4xl font-medium text-neutral-900 tracking-tight mt-2 mb-6" style={{}}>Giải pháp Quản trị linh hoạt cho mọi mô hình doanh nghiệp</h2>
<p className="text-lg text-neutral-600 mb-8" style={{}}>Tôi không chỉ cung cấp lý thuyết. Tôi mang đến những giải pháp thực tiễn được tinh lọc từ chương trình đào tạo chuẩn quốc tế tại Đại học Duy Tân, giúp doanh nghiệp vận hành tinh gọn và hiệu quả hơn.</p>
<div className="space-y-4">

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all duration-300 shadow-sm ring-1 ring-neutral-200/50" id="btn-med" onclick="openTab('med')" style={{}}>
<div className="mt-1 text-indigo-600" style={{}}><svg className="lucide lucide-stethoscope w-6 h-6" data-lucide="stethoscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 2v2"></path><path d="M5 2v2"></path><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"></path><path d="M8 15a6 6 0 0 0 12 0v-3"></path><circle cx="20" cy="10" r="2"></circle></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Tối ưu hóa quy trình</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Áp dụng tư duy Lean và Six Sigma để loại bỏ lãng phí, chuẩn hóa quy trình vận hành nhằm gia tăng 20-30% hiệu suất tổng thể.</p>
</div>
</button>

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300" id="btn-estate" onclick="openTab('estate')" style={{}}>
<div className="mt-1 text-indigo-600" style={{}}><svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Chiến lược số hóa</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Xây dựng lộ trình chuyển đổi số phù hợp, tích hợp các công cụ quản lý hiện đại (ERP, CRM) vào dòng chảy kinh doanh truyền thống.</p>
</div>
</button>

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300" id="btn-ecom" onclick="openTab('ecom')" style={{}}>
<div className="mt-1 text-indigo-600" style={{}}><svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg></div>
<div className="">
<h4 className="font-semibold text-neutral-900" style={{}}>Quản trị sự thay đổi</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Hỗ trợ doanh nghiệp thích ứng nhanh với biến động thị trường thông qua các mô hình quản trị rủi ro và dự báo chiến lược.</p>
</div>
</button>
</div>
</div>

<div className="relative reveal-on-scroll">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-cyan-50 rounded-[40px] -z-10 blur-xl opacity-70" style={{}}></div>

<div className="bg-neutral-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-center" style={{}}>
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
<svg className="lucide lucide-quote w-24 h-24" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>

<div className="tab-content active space-y-8 relative z-10" id="content-med">
<div className="">
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold" style={{}}>Scenariusz: Salon Beauty</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Dzień dobry, dzwonię z salonu Pixel Beauty. Widzę, że była Pani zainteresowana zabiegiem. Czy mogę odpowiedzieć na jakieś pytania?</span>
</div>
<div className="flex gap-3">
<span className="text-blue-400 font-bold shrink-0" style={{}}>Klient:</span>
<span className="text-neutral-300" style={{}}>Tak, czy macie wolne terminy w ten piątek po 16:00?</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Już sprawdzam. Tak, mamy wolny termin o 16:30 u Pani Anny. Czy zapisać?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div className="">
<p className="text-2xl font-bold text-white" style={{}}>45 sek</p>
<p className="text-xs text-neutral-400" style={{}}>Średni czas umawiania wizyty</p>
</div>
<div className="h-10 w-10 bg-blue-500 rounded-full flex items-center justify-center text-black shadow-lg shadow-blue-500/20" style={{}}>
<svg className="lucide lucide-check w-6 h-6" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>

<div className="tab-content space-y-8 relative z-10" id="content-estate">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold" style={{}}>Scenariusz: Deweloper</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Dzień dobry, tu asystent biura Pixel Estate. Dziękujemy za zgłoszenie z Otodom. Czy szuka Pan mieszkania dla siebie czy pod inwestycję?</span>
</div>
<div className="flex gap-3">
<span className="text-blue-400 font-bold shrink-0" style={{}}>Klient:</span>
<span className="text-neutral-300" style={{}}>Dla siebie, interesuje mnie 3 pokojowe, parter.</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Rozumiem. Mamy dwa takie lokale w inwestycji "Zielona Dolina". Czy chciałby Pan zobaczyć rzuty na maila?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-white" style={{}}>24/7</p>
<p className="text-xs text-neutral-400" style={{}}>Dostępność agenta dla kupujących</p>
</div>
<div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/20" style={{}}>
<svg className="lucide lucide-home w-6 h-6" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
</div>
</div>
</div>
</div>

<div className="tab-content space-y-8 relative z-10" id="content-ecom">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold" style={{}}>Scenariusz: Sklep Online</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Cześć, tu Pixel Shop. Zauważyliśmy, że nie dokończyłeś zamówienia. Czy napotkałeś jakiś problem przy płatności?</span>
</div>
<div className="flex gap-3">
<span className="text-blue-400 font-bold shrink-0" style={{}}>Klient:</span>
<span className="text-neutral-300" style={{}}>Nie, po prostu nie miałem karty przy sobie.</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0" style={{}}>AI:</span>
<span className="text-neutral-300" style={{}}>Rozumiem. Prześlę Ci SMS-em link do szybkiej płatności BLIKiem, będzie ważny 30 minut. Czy to pasuje?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-white" style={{}}>+18%</p>
<p className="text-xs text-neutral-400" style={{}}>Odzyskanych koszyków</p>
</div>
<div className="h-10 w-10 bg-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-cyan-500/20" style={{}}>
<svg className="lucide lucide-shopping-bag w-6 h-6" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-900 border-neutral-800 border-t pt-24 pb-24 relative" id="ai-demo" style={{}}>

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-indigo-600/30 blur-[150px] rounded-full" style={{}}></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="lg:px-8 z-10 reveal-on-scroll max-w-6xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center mb-10">
<span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 bg-blue-500/10 border-blue-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3" style={{}}><span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" style={{}}></span>
</span> Live </span>
<h2 className="lg:text-5xl text-4xl font-medium text-white tracking-tight mb-4" style={{}}>Khởi đầu cho một sự hợp tác chiến lược Lời dẫn.</h2>
<p className="text-lg text-neutral-400" style={{}}>Bạn đang có một dự án đầy tham vọng hay đơn giản là cần một góc nhìn quản trị mới mẻ từ thế hệ Gen Z? Tôi luôn sẵn sàng lắng nghe và đồng hành.</p>
</div>
<div className="lg:p-3 bg-white/5 border-white/10 border rounded-2xl pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-md">
<form className="flex flex-col lg:flex-row gap-2" id="demo-form">

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="lucide lucide-user h-4 w-4 text-neutral-500 group-focus-within:text-white transition-colors" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<input className="lg:h-14 hover:bg-neutral-900/70 focus:bg-neutral-900 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm text-white bg-neutral-900/50 w-full h-12 border-transparent border rounded-xl pr-4 pl-11" name="name" placeholder="HỌ VÀ TÊN" required="" style={{}} type="text"/>
</div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-500 group-focus-within:text-white transition-colors" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="lg:h-14 hover:bg-neutral-900/70 focus:bg-neutral-900 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm text-white bg-neutral-900/50 w-full h-12 border-transparent border rounded-xl pr-4 pl-11" name="email" placeholder="Adres Email" required="" style={{}} type="email"/>
</div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-neutral-500 text-sm group-focus-within:text-white font-medium transition-colors" style={{}}>+84</span>
</div>
<input className="lg:h-14 hover:bg-neutral-900/70 focus:bg-neutral-900 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm text-white bg-neutral-900/50 w-full h-12 border-transparent border rounded-xl pr-4 pl-12" name="phone" placeholder="000 000 000" required="" style={{}} type="tel"/>
</div>

<button className="h-12 lg:h-14 px-8 bg-white text-neutral-950 rounded-xl font-semibold hover:bg-neutral-200 focus:ring-2 focus:ring-white/20 transition-all flex items-center justify-center gap-2 lg:w-auto w-full shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-70 disabled:cursor-not-allowed" style={{}} type="submit">
<svg className="lucide lucide-phone-outgoing w-4 h-4" data-lucide="phone-outgoing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 8 6-6"></path><path d="M22 8V2h-6"></path><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="">LIÊN HỆ NGAY</span>
</button>
</form>
</div>
<p className="text-[11px] text-neutral-500 text-center mt-4" style={{}}>*Phản hồi nhanh chóng: Luôn ưu tiên các kết nối mang tính chiến lược.</p>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="contact" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 items-start">
<div className="reveal-on-scroll">
<h2 className="text-3xl font-medium text-neutral-900 tracking-tight mb-6" style={{}}>Bạn ưu tiên sự tương tác trực tiếp?</h2>
<p className="leading-relaxed text-neutral-600 mb-8" style={{}}>Dù công nghệ có phát triển đến đâu, giá trị thực sự của quản trị vẫn nằm ở sự thấu hiểu giữa người với người. Tôi luôn sẵn lòng lắng nghe và cùng bạn tìm ra lời giải tối ưu cho những bài toán kinh doanh thực tế.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900" style={{}}>Phân tích vấn đề chuyên sâu</h4>
<p className="text-sm text-neutral-500 mt-1" style={{}}>Tôi không chỉ lắng nghe, tôi cùng bạn mổ xẻ vấn đề để tìm ra giải pháp cốt lõi nhất.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0" style={{}}>
<svg className="lucide lucide-check w-5 h-5 text-neutral-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-sm font-semibold text-neutral-900" style={{}}>Phản hồi trong vòng 24h</h4>
<p className="text-sm text-neutral-500 mt-1" style={{}}>Thời gian là tài nguyên quý giá nhất trong kinh doanh, tôi cam kết không để bạn phải chờ đợi lâu.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 lg:p-10 reveal-on-scroll" style={{}}>
<form className="space-y-4" id="contact-form">
<div className="grid grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1" style={{}}>Họ và tên</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="firstName" required="" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1" style={{}}>Tên tổ chức/Công ty</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="lastName" required="" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1" style={{}}>Adres Email</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="email" required="" style={{}} type="email"/>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1" style={{}}>Số điện thoại</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-neutral-500 text-sm font-medium" style={{}}>+84</span>
</div>
<input className="placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all text-neutral-900 bg-white w-full border-neutral-200 border rounded-xl pt-3 pr-4 pb-3 pl-12" name="phone" placeholder="000 000 000" required="" style={{}} type="tel"/>
</div>
</div>
<div className="">
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1" style={{}}>Lời nhắn/Yêu cầu cụ thể</label>
<textarea className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="message" rows="3" style={{}}></textarea>
</div>
<button className="w-full mt-2 bg-neutral-900 text-white font-medium h-12 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" style={{}} type="submit">
<span className="">GỬI YÊU CẦU KẾT NỐI</span>
<svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-12 lg:py-16" style={{}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white" style={{}}>
<svg className="lucide lucide-cpu w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-lg font-medium text-neutral-900 tracking-tight" style={{}}>NHATTU</span>
</a>
<p className="leading-relaxed text-sm text-neutral-500 mb-6" style={{}}>Giới thiệu ngắn: Sinh viên chuyên ngành Quản trị Kinh doanh Tổng hợp tại Đại học Duy Tân. Định hướng trở thành nhà quản trị tiên phong, kết nối tư duy chiến lược với công nghệ hiện đại để tạo ra giá trị đột phá cho doanh nghiệp.</p>
<div className="flex gap-2 text-sm font-medium text-neutral-900 gap-x-2 gap-y-2 items-center" style={{}}>Đà Nẵng, Việt Nam.</div>
</div>
<div className="flex gap-16 flex-wrap gap-x-16 gap-y-16">
<div className="">
<h4 className="font-semibold text-neutral-900 mb-4" style={{}}>Về tôi</h4>
<ul className="text-sm text-neutral-500 space-y-3" style={{}}>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Hành trình sự nghiệp.</a></li>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Dự án tiêu biểu.</a></li>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Bảng kỹ năng.</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 mb-4" style={{}}>Dịch vụ/Lĩnh vực</h4>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Tư vấn vận hành</a></li>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Chiến lược thương hiệu.</a></li>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Chuyển đổi số doanh nghiệp.</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold text-neutral-900 mb-4" style={{}}>Kết nối mạng xã hội</h4>
<ul className="space-y-3 text-sm text-neutral-500" style={{}}>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>LinkedIn</a></li>
<li className=""><a className="hover:text-neutral-900" href="#" style={{}}>Facebook/Behance</a></li>
</ul>
</div>
</div>
</div>
<div className="lg:px-8 md:text-left text-sm text-neutral-400 text-center max-w-7xl border-neutral-100 border-t mt-12 mr-auto ml-auto pt-8 pr-6 pl-6" style={{}}>© 2026 Trần Viết Nhật Tú - Duy Tan University. Mọi quyền được bảo lưu.</div>
</footer>
</main>


    </>
  );
}
