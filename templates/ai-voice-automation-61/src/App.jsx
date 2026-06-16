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
<header className="relative border-b border-neutral-100/50 backdrop-blur-md bg-white/70 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="font-medium tracking-tight text-lg text-neutral-900">pixel minds</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600 font-medium">
<a className="hover:text-neutral-900 transition-colors" href="#dlaczego-my">Dla Zespołu</a>
<a className="hover:text-neutral-900 transition-colors" href="#use-cases">Use Cases</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Kontakt</a>
<a className="inline-flex items-center gap-2 hover:bg-neutral-800 transition-all text-white bg-neutral-900 rounded-full py-2 px-4 shadow-lg shadow-neutral-500/10 hover:shadow-neutral-500/20" href="#ai-demo">
<span className="font-medium">Przetestuj AI</span>
<i className="w-3.5 h-3.5" data-lucide="phone-outgoing"></i>
</a>
</nav>

<button className="md:hidden p-2 text-neutral-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur border border-neutral-200 text-xs font-medium text-neutral-600 mb-8 animate-fade-in-up shadow-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        System aktywny: Obsługujemy 12,000+ połączeń dziennie
                    </div>
<h1 className="text-5xl lg:text-[68px] leading-[1.05] font-medium tracking-tighter text-neutral-900 mb-6">
                        Twój głos <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-900">w świecie biznesu.</span>
</h1>
<p className="text-lg text-neutral-600 mb-8 leading-relaxed max-w-lg">
                        Przestań tracić klientów tylko dlatego, że masz zajętą linię lub śpisz. Nasi agenci głosowi AI sprzedają, umawiają spotkania i obsługują support 24/7. Bez chorobowego. Bez narzekania. Za ułamek ceny.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">

<a className="shiny-cta" href="#ai-demo">
<span>Zatrudnij AI</span>
<i className="w-4 h-4 ml-1" data-lucide="arrow-right"></i>
</a>
<div className="flex items-center gap-3 px-2 py-2">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 flex items-center justify-center overflow-hidden">
<img alt="User" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mark"/>
</div>
</div>
<div className="text-sm">
<span className="block font-semibold text-neutral-900">Zaufało nam</span>
<span className="text-neutral-500">50+ firm w Polsce</span>
</div>
</div>
</div>
</div>

<div className="relative lg:h-[700px] h-[600px] w-full flex items-center justify-center lg:justify-end">

<div className="relative w-[340px] h-[680px] bg-neutral-900 rounded-[45px] shadow-[0_0_0_12px_rgba(0,0,0,0.1),0_30px_60px_-10px_rgba(0,0,0,0.5)] overflow-hidden border-[6px] border-neutral-800/80">

<div className="absolute inset-0 z-0">

<img alt="AI Agent" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30"></div>
</div>

<div className="absolute top-0 w-full px-6 pt-3 z-20 flex justify-between items-center text-white text-[10px] font-medium">
<span>14:32</span>
<div className="flex gap-1.5">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<i className="w-3 h-3" data-lucide="battery"></i>
</div>
</div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full px-3 py-1.5 z-30 flex items-center gap-3 animate-fade-in-up delay-100 shadow-2xl w-[92%] backdrop-blur-md bg-black/80 border border-white/10">
<div className="h-9 w-9 bg-neutral-800 rounded-full flex items-center justify-center shrink-0">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div className="flex-1 min-w-0">
<p className="text-[10px] text-neutral-400 leading-none mb-0.5">Status</p>
<p className="text-xs font-semibold text-white leading-none">Online</p>
</div>
</div>

<div className="relative z-10 h-full flex flex-col pt-24 pb-6 px-4">

<div className="flex-1 flex flex-col justify-end space-y-4 overflow-hidden mb-4 pb-2">

<div className="flex items-end gap-2 animate-fade-in-up delay-200 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="bg-neutral-800/80 backdrop-blur-md border border-white/10 text-neutral-200 p-3 rounded-2xl rounded-bl-none max-w-[80%] text-xs leading-relaxed shadow-sm">
                                        Cześć! 👋 Tu Asystentka Pixel.
                                    </div>
</div>

<div className="text-center text-[9px] text-neutral-500 font-medium py-1 animate-fade-in-up delay-500 opacity-0" style={{animationFillMode: 'forwards'}}>Dzisiaj 14:32</div>

<div className="flex items-end justify-end gap-2 animate-fade-in-up delay-1000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="bg-blue-600 text-white p-3 rounded-2xl rounded-br-none max-w-[80%] text-xs leading-relaxed shadow-lg shadow-blue-900/20">
                                        Hej, chciałbym przetestować jak to działa na żywo.
                                    </div>
</div>

<div className="flex items-end gap-2 animate-fade-in-up delay-2000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 rounded-full bg-neutral-200 overflow-hidden shrink-0 border border-white/20">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="bg-neutral-800/80 backdrop-blur-md border border-white/10 text-neutral-200 p-3 rounded-2xl rounded-bl-none max-w-[85%] text-xs leading-relaxed shadow-sm">
                                        Świetnie! W takim razie przesyłam link do zamówienia natychmiastowego połączenia z naszym Agentem AI. 👇
                                    </div>
</div>

<div className="flex items-end gap-2 animate-fade-in-up delay-3000 opacity-0" style={{animationFillMode: 'forwards'}}>
<div className="w-6 h-6 opacity-0 shrink-0"></div> 
<a className="group block w-[85%] bg-white/10 backdrop-blur-xl border border-white/20 p-3 rounded-xl hover:bg-white/15 transition-all cursor-pointer shadow-lg" href="#ai-demo">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
<i className="w-4 h-4" data-lucide="phone-call"></i>
</div>
<div>
<p className="text-white font-semibold text-xs">Zamów rozmowę</p>
<p className="text-[10px] text-neutral-400">pixelminds.pl</p>
</div>
</div>
<div className="text-[10px] text-blue-300 font-medium group-hover:text-blue-200 flex items-center gap-1">
                                            Kliknij, aby otworzyć formularz
                                            <i className="w-3 h-3" data-lucide="chevron-right"></i>
</div>
</a>
</div>
</div>

<div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-full p-1 pl-4 flex items-center gap-2">
<div className="flex-1 text-neutral-400 text-xs">iMessage</div>
<div className="h-7 w-7 bg-blue-600 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-white" data-lucide="arrow-up"></i>
</div>
</div>

<div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/20 rounded-full"></div>
</div>
</div>

<div className="absolute -right-4 top-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px] -z-10"></div>
<div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px] -z-10"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0a0a0a] border-y border-white/10 relative overflow-hidden" id="dlaczego-my">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl mx-auto text-center mb-16 reveal-on-scroll">
<span className="text-indigo-400 font-semibold tracking-wide uppercase text-xs mb-3 block">Wsparcie Zespołu</span>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    Wsparcie, na które<br/>
<span className="text-neutral-500">zasługuje Twój zespół.</span>
</h2>
<p className="text-lg text-neutral-400 leading-relaxed">
                    Nie zastępujemy ludzi – dajemy im supermoce. AI przejmuje nużące, powtarzalne telefony i wstępną kwalifikację, aby Twoi specjaliści mogli skupić się na tym, co najważniejsze: budowaniu relacji i zamykaniu sprzedaży.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group">
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="filter"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Filtracja Leadów</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Koniec z dzwonieniem po "zimnych" lub nieaktualnych numerach. AI oddziela ziarno od plew, dostarczając handlowcom tylko zainteresowanych klientów.
                    </p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Skalowanie bez Wypalenia</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Sezonowy szczyt? Kampania reklamowa? AI obsłuży tysiące połączeń jednocześnie, nie obciążając Twojego zespołu stresem i nadgodzinami.
                    </p>
</div>

<div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 reveal-on-scroll group" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-indigo-500/10 border border-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="heart-handshake"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Więcej Czasu na Relacje</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                        Uwolnij swój zespół od roli "telefonistów". Niech zajmą się tym, w czym AI nigdy ich nie prześcignie – empatią i strategicznym doradztwem.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-neutral-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center reveal-on-scroll">
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-xs">Wszechstronność</span>
<h3 className="text-2xl lg:text-3xl font-medium tracking-tight text-neutral-900 mt-2">Działa wszędzie tam, gdzie dzwoni telefon</h3>
</div>
<div className="relative flex overflow-x-hidden group reveal-on-scroll">

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>

<div className="animate-scroll whitespace-nowrap flex gap-6 py-4">

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Medycyna &amp; Stomatologia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Potwierdzanie wizyt, rejestracja pacjentów, przypomnienia SMS.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Nieruchomości</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Kwalifikacja kupujących, umawianie prezentacji mieszkań.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">OZE &amp; Fotowoltaika</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Szybki kontakt z leadami, wstępna weryfikacja warunków.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Kancelarie Prawne</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Wstępny wywiad, selekcja spraw, umawianie konsultacji.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Pośrednictwo Finansowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Badanie zdolności, umawianie spotkań z doradcami.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Serwisy Samochodowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Informacje o statusie naprawy, umawianie przeglądów.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Ubezpieczenia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Odnowienia polis, zgłaszanie szkód, prosta sprzedaż.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="bed"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Hotelarstwo &amp; HoReCa</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Rezerwacje stolików, obsługa recepcji nocnej.</p>
</div>
</div>


<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="stethoscope"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Medycyna &amp; Stomatologia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Potwierdzanie wizyt, rejestracja pacjentów, przypomnienia SMS.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="building-2"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Nieruchomości</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Kwalifikacja kupujących, umawianie prezentacji mieszkań.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="sun"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">OZE &amp; Fotowoltaika</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Szybki kontakt z leadami, wstępna weryfikacja warunków.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="scale"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Kancelarie Prawne</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Wstępny wywiad, selekcja spraw, umawianie konsultacji.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Pośrednictwo Finansowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Badanie zdolności, umawianie spotkań z doradcami.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="car"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Serwisy Samochodowe</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Informacje o statusie naprawy, umawianie przeglądów.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Ubezpieczenia</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Odnowienia polis, zgłaszanie szkód, prosta sprzedaż.</p>
</div>
</div>

<div className="w-[280px] p-6 rounded-2xl bg-neutral-50 hover:bg-white border border-neutral-200 hover:border-indigo-100 transition-colors shrink-0 flex flex-col gap-4 shadow-sm hover:shadow-md">
<div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-indigo-600 shadow-sm">
<i className="w-5 h-5" data-lucide="bed"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900">Hotelarstwo &amp; HoReCa</h4>
<p className="text-sm text-neutral-500 mt-1 whitespace-normal leading-snug">Rezerwacje stolików, obsługa recepcji nocnej.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 lg:px-8" id="use-cases">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="reveal-on-scroll">
<span className="text-indigo-600 font-semibold tracking-wide uppercase text-xs">Zastosowania</span>
<h2 className="text-4xl lg:text-5xl font-medium tracking-tight text-neutral-900 mt-2 mb-6">
                    Automatyzacja dla Twojej branży
                </h2>
<p className="text-neutral-600 mb-8 text-lg">
                    Nie sprzedajemy "technologii". Sprzedajemy rozwiązane problemy. Kliknij i zobacz, jak AI radzi sobie w różnych scenariuszach.
                </p>
<div className="space-y-4">

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 transition-all duration-300 shadow-sm ring-1 ring-neutral-200/50" id="btn-med" onclick="openTab('med')">
<div className="mt-1 text-indigo-600"><i className="w-6 h-6" data-lucide="stethoscope"></i></div>
<div>
<h4 className="font-semibold text-neutral-900">Medycyna i Beauty</h4>
<p className="text-sm text-neutral-600 mt-1">Potwierdzanie wizyt, przypomnienia, wstępny wywiad medyczny. Redukcja "no-shows" o 40%.</p>
</div>
</button>

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300" id="btn-estate" onclick="openTab('estate')">
<div className="mt-1 text-indigo-600"><i className="w-6 h-6" data-lucide="home"></i></div>
<div>
<h4 className="font-semibold text-neutral-900">Nieruchomości</h4>
<p className="text-sm text-neutral-600 mt-1">Kwalifikacja leadów z portali ogłoszeniowych. Umawianie prezentacji mieszkań 24/7.</p>
</div>
</button>

<button className="tab-btn w-full text-left flex gap-4 p-4 rounded-2xl hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-all duration-300" id="btn-ecom" onclick="openTab('ecom')">
<div className="mt-1 text-indigo-600"><i className="w-6 h-6" data-lucide="shopping-bag"></i></div>
<div>
<h4 className="font-semibold text-neutral-900">E-commerce</h4>
<p className="text-sm text-neutral-600 mt-1">Obsługa zwrotów, statusy zamówień, odzyskiwanie porzuconych koszyków.</p>
</div>
</button>
</div>
</div>

<div className="relative reveal-on-scroll">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-100 to-blue-50 rounded-[40px] -z-10 blur-xl opacity-70"></div>

<div className="bg-neutral-900 rounded-[32px] p-8 text-white shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-center">
<div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
<i className="w-24 h-24" data-lucide="quote"></i>
</div>

<div className="tab-content active space-y-8 relative z-10" id="content-med">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold">Scenariusz: Salon Beauty</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Dzień dobry, dzwonię z salonu Pixel Beauty. Widzę, że była Pani zainteresowana zabiegiem. Czy mogę odpowiedzieć na jakieś pytania?</span>
</div>
<div className="flex gap-3">
<span className="text-green-400 font-bold shrink-0">Klient:</span>
<span className="text-neutral-300">Tak, czy macie wolne terminy w ten piątek po 16:00?</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Już sprawdzam. Tak, mamy wolny termin o 16:30 u Pani Anny. Czy zapisać?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-white">45 sek</p>
<p className="text-xs text-neutral-400">Średni czas umawiania wizyty</p>
</div>
<div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-black shadow-lg shadow-green-500/20">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
</div>
</div>
</div>

<div className="tab-content space-y-8 relative z-10" id="content-estate">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold">Scenariusz: Deweloper</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Dzień dobry, tu asystent biura Pixel Estate. Dziękujemy za zgłoszenie z Otodom. Czy szuka Pan mieszkania dla siebie czy pod inwestycję?</span>
</div>
<div className="flex gap-3">
<span className="text-green-400 font-bold shrink-0">Klient:</span>
<span className="text-neutral-300">Dla siebie, interesuje mnie 3 pokojowe, parter.</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Rozumiem. Mamy dwa takie lokale w inwestycji "Zielona Dolina". Czy chciałby Pan zobaczyć rzuty na maila?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-white">24/7</p>
<p className="text-xs text-neutral-400">Dostępność agenta dla kupujących</p>
</div>
<div className="h-10 w-10 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
<i className="w-6 h-6" data-lucide="home"></i>
</div>
</div>
</div>
</div>

<div className="tab-content space-y-8 relative z-10" id="content-ecom">
<div>
<p className="text-xs text-indigo-400 uppercase tracking-wider mb-4 font-bold">Scenariusz: Sklep Online</p>
<div className="space-y-4 font-mono text-sm">
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Cześć, tu Pixel Shop. Zauważyliśmy, że nie dokończyłeś zamówienia. Czy napotkałeś jakiś problem przy płatności?</span>
</div>
<div className="flex gap-3">
<span className="text-green-400 font-bold shrink-0">Klient:</span>
<span className="text-neutral-300">Nie, po prostu nie miałem karty przy sobie.</span>
</div>
<div className="flex gap-3">
<span className="text-indigo-400 font-bold shrink-0">AI:</span>
<span className="text-neutral-300">Rozumiem. Prześlę Ci SMS-em link do szybkiej płatności BLIKiem, będzie ważny 30 minut. Czy to pasuje?</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-white/10">
<div className="flex items-center justify-between">
<div>
<p className="text-2xl font-bold text-white">+18%</p>
<p className="text-xs text-neutral-400">Odzyskanych koszyków</p>
</div>
<div className="h-10 w-10 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-t border-neutral-800 relative overflow-hidden" id="ai-demo">

<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-indigo-600/30 blur-[150px] rounded-full"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 reveal-on-scroll">
<div className="text-center mb-10">
<span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-semibold mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                    Live Demo
                </span>
<h2 className="text-4xl lg:text-5xl font-medium text-white tracking-tight mb-4">Przetestuj AI na własnym telefonie</h2>
<p className="text-neutral-400 text-lg">Wpisz swój numer, a system zadzwoni do Ciebie w ciągu 30 sekund.</p>
</div>
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-2 lg:p-3 shadow-2xl">
<form className="flex flex-col lg:flex-row gap-2" id="demo-form">

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-4 w-4 text-neutral-500 group-focus-within:text-white transition-colors" data-lucide="user"></i>
</div>
<input className="w-full h-12 lg:h-14 bg-neutral-900/50 hover:bg-neutral-900/70 focus:bg-neutral-900 text-white pl-11 pr-4 rounded-xl border border-transparent focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm" name="name" placeholder="Imię" required="" type="text"/>
</div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-4 w-4 text-neutral-500 group-focus-within:text-white transition-colors" data-lucide="mail"></i>
</div>
<input className="w-full h-12 lg:h-14 bg-neutral-900/50 hover:bg-neutral-900/70 focus:bg-neutral-900 text-white pl-11 pr-4 rounded-xl border border-transparent focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm" name="email" placeholder="Adres Email" required="" type="email"/>
</div>

<div className="flex-1 relative group">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-neutral-500 text-sm group-focus-within:text-white font-medium transition-colors">+48</span>
</div>
<input className="w-full h-12 lg:h-14 bg-neutral-900/50 hover:bg-neutral-900/70 focus:bg-neutral-900 text-white pl-12 pr-4 rounded-xl border border-transparent focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all placeholder-neutral-600 text-sm" name="phone" placeholder="000 000 000" required="" type="tel"/>
</div>

<button className="h-12 lg:h-14 px-8 bg-white text-neutral-950 rounded-xl font-semibold hover:bg-neutral-200 focus:ring-2 focus:ring-white/20 transition-all flex items-center justify-center gap-2 lg:w-auto w-full shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<i className="w-4 h-4" data-lucide="phone-outgoing"></i>
<span>Zadzwoń teraz</span>
</button>
</form>
</div>
<p className="text-center text-neutral-500 text-[11px] mt-4">*Demo jest bezpłatne. Twój numer nie zostanie zapisany w celach marketingowych.</p>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal-on-scroll">
<h2 className="text-3xl font-medium tracking-tight text-neutral-900 mb-6">Wolisz porozmawiać z człowiekiem?</h2>
<p className="text-neutral-600 mb-8 leading-relaxed">
                        Nasze AI jest świetne, ale rozumiemy, że wdrożenie to poważna decyzja. Umów się na 15-minutową rozmowę strategiczną, gdzie przeanalizujemy Twój proces obsługi klienta.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-neutral-900" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900 text-sm">Audyt obecnych procesów</h4>
<p className="text-sm text-neutral-500 mt-1">Sprawdzimy gdzie tracisz najwięcej leadów.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center shrink-0">
<i className="w-5 h-5 text-neutral-900" data-lucide="check"></i>
</div>
<div>
<h4 className="font-semibold text-neutral-900 text-sm">Wycena wdrożenia</h4>
<p className="text-sm text-neutral-500 mt-1">Otrzymasz konkretny kosztorys dostosowany do skali.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-50 border border-neutral-200 rounded-[32px] p-8 lg:p-10 reveal-on-scroll">
<form className="space-y-4" id="contact-form">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1">Imię</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="firstName" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1">Nazwisko</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="lastName" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1">Adres Email</label>
<input className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1">Numer telefonu</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<span className="text-neutral-500 text-sm font-medium">+48</span>
</div>
<input className="w-full bg-white border border-neutral-200 rounded-xl pl-12 pr-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="phone" placeholder="000 000 000" required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-600 mb-1.5 ml-1">Wiadomość (opcjonalnie)</label>
<textarea className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:border-transparent transition-all" name="message" rows="3"></textarea>
</div>
<button className="w-full mt-2 bg-neutral-900 text-white font-medium h-12 rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed" type="submit">
<span>Zarezerwuj termin</span>
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-200 py-12 lg:py-16">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<a className="flex items-center gap-2 mb-6" href="/">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white">
<i className="w-5 h-5" data-lucide="cpu"></i>
</div>
<span className="font-medium tracking-tight text-lg text-neutral-900">pixel minds</span>
</a>
<p className="text-sm text-neutral-500 leading-relaxed mb-6">
                    Agencja automatyzacji AI specjalizująca się w agentach głosowych dla MŚP. Zwiększamy sprzedaż, gdy Ty śpisz.
                </p>
<div className="flex items-center gap-2 text-sm text-neutral-900 font-medium">
<i className="w-4 h-4 text-neutral-500" data-lucide="map-pin"></i>
                    Katowice, Polska
                </div>
</div>
<div className="flex gap-16 flex-wrap">
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Firma</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">O nas</a></li>
<li><a className="hover:text-neutral-900" href="#">Kariera</a></li>
<li><a className="hover:text-neutral-900" href="#">Partnerzy</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Usługi</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Voice AI</a></li>
<li><a className="hover:text-neutral-900" href="#">Chatboty</a></li>
<li><a className="hover:text-neutral-900" href="#">Automatyzacja CRM</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Polityka Prywatności</a></li>
<li><a className="hover:text-neutral-900" href="#">Regulamin</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 pt-8 border-t border-neutral-100 text-center md:text-left text-sm text-neutral-400">
            © 2025 Pixel Minds. Wszelkie prawa zastrzeżone.
        </div>
</footer>
</main>


    </>
  );
}
