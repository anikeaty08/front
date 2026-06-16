import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Language Switcher
        function toggleLanguage(lang) {
            document.documentElement.lang = lang;
            
            // Toggle text visibility
            document.querySelectorAll('.lang-en').forEach(el => {
                if (lang === 'en') el.classList.remove('hidden');
                else el.classList.add('hidden');
            });
            
            document.querySelectorAll('.lang-sk').forEach(el => {
                if (lang === 'sk') el.classList.remove('hidden');
                else el.classList.add('hidden');
            });

            // Desktop Buttons
            const btnEn = document.getElementById('lang-en-btn');
            const btnSk = document.getElementById('lang-sk-btn');
            
            // Mobile Buttons
            const mBtnEn = document.getElementById('mobile-lang-en-btn');
            const mBtnSk = document.getElementById('mobile-lang-sk-btn');
            
            if (lang === 'en') {
                btnEn.classList.add('text-blue-50', 'font-semibold');
                btnEn.classList.remove('text-slate-500', 'font-medium');
                btnSk.classList.add('text-slate-500', 'font-medium');
                btnSk.classList.remove('text-blue-50', 'font-semibold');
                
                mBtnEn.classList.add('bg-slate-700', 'text-blue-50');
                mBtnEn.classList.remove('text-slate-400', 'hover:text-slate-200');
                mBtnSk.classList.remove('bg-slate-700', 'text-blue-50');
                mBtnSk.classList.add('text-slate-400', 'hover:text-slate-200');
            } else {
                btnSk.classList.add('text-blue-50', 'font-semibold');
                btnSk.classList.remove('text-slate-500', 'font-medium');
                btnEn.classList.add('text-slate-500', 'font-medium');
                btnEn.classList.remove('text-blue-50', 'font-semibold');
                
                mBtnSk.classList.add('bg-slate-700', 'text-blue-50');
                mBtnSk.classList.remove('text-slate-400', 'hover:text-slate-200');
                mBtnEn.classList.remove('bg-slate-700', 'text-blue-50');
                mBtnEn.classList.add('text-slate-400', 'hover:text-slate-200');
            }
        }

        // Service Accordion Function
        function toggleService(id) {
            const content = document.getElementById(`service-content-${id}`);
            const icon = document.getElementById(`service-icon-${id}`);
            const moreTexts = document.querySelectorAll(`.show-more-${id}`);
            const lessTexts = document.querySelectorAll(`.show-less-${id}`);

            if (content.classList.contains('max-h-0')) {
                // Expand
                content.classList.remove('max-h-0', 'opacity-0');
                content.classList.add('max-h-[1500px]', 'opacity-100');
                icon.classList.add('rotate-180');
                moreTexts.forEach(el => el.classList.add('hidden'));
                lessTexts.forEach(el => el.classList.remove('hidden'));
            } else {
                // Collapse
                content.classList.add('max-h-0', 'opacity-0');
                content.classList.remove('max-h-[1500px]', 'opacity-100');
                icon.classList.remove('rotate-180');
                moreTexts.forEach(el => el.classList.remove('hidden'));
                lessTexts.forEach(el => el.classList.add('hidden'));
            }
        }

        // Mobile Menu Dropdown Toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuIcon = mobileMenuBtn.querySelector('iconify-icon');
        const mobileLinks = document.querySelectorAll('.mobile-link');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                // Open slide-down
                mobileMenu.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
                mobileMenu.classList.add('max-h-[600px]', 'opacity-100', 'pointer-events-auto');
                mobileMenuIcon.setAttribute('icon', 'solar:close-linear');
            } else {
                // Close slide-down
                mobileMenu.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
                mobileMenu.classList.remove('max-h-[600px]', 'opacity-100', 'pointer-events-auto');
                mobileMenuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
            }
        }

        mobileMenuBtn.addEventListener('click', toggleMenu);

        // Close menu when clicking standard links
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) toggleMenu();
            });
        });

        // Form Handling
        const contactForm = document.getElementById('contact-form');
        const submitBtn = document.getElementById('submit-btn');
        const btnTextDefault = document.getElementById('btn-text-default');
        const btnTextLoading = document.getElementById('btn-text-loading');
        const formSuccess = document.getElementById('form-success');
        const formError = document.getElementById('form-error');
        const honeypotField = document.getElementById('bot-honeypot');

        if(contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // SPAM PROTECTION: If honeypot is filled, act like it succeeded but do nothing.
                if(honeypotField && honeypotField.value !== "") {
                    formSuccess.classList.remove('hidden');
                    contactForm.reset();
                    setTimeout(() => { formSuccess.classList.add('hidden'); }, 6000);
                    return;
                }

                // Show loading state
                submitBtn.disabled = true;
                btnTextDefault.classList.add('hidden');
                btnTextLoading.classList.remove('hidden');
                formSuccess.classList.add('hidden');
                formError.classList.add('hidden');
                
                // Collect data
                const formData = {
                    name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
                    email: document.getElementById('email').value,
                    company: document.getElementById('company').value,
                    message: document.getElementById('message').value,
                    _subject: "New Website Contact Form Submission"
                };

                // Send request
                fetch("https://formsubmit.co/ajax/office@runtime.sk", {
                    method: "POST",
                    headers: { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(formData)
                })
                .then(response => response.json())
                .then(data => {
                    // Reset form fields
                    contactForm.reset();
                    
                    // Reset button state
                    btnTextLoading.classList.add('hidden');
                    btnTextDefault.classList.remove('hidden');
                    submitBtn.disabled = false;
                    
                    if(data.success === "true" || data.success === true) {
                        // Show success message
                        formSuccess.classList.remove('hidden');
                        setTimeout(() => {
                            formSuccess.classList.add('hidden');
                        }, 6000);
                    } else {
                        throw new Error('Submission failed');
                    }
                })
                .catch(error => {
                    // Reset button state
                    btnTextLoading.classList.add('hidden');
                    btnTextDefault.classList.remove('hidden');
                    submitBtn.disabled = false;
                    
                    // Show error message
                    formError.classList.remove('hidden');
                });
            });
        }

        // Initialize default language
        document.addEventListener('DOMContentLoaded', () => {
            toggleLanguage('sk'); // Updated default to Slovak based on user interaction language
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center opacity-70" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=3840&amp', maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent)'}}></div>

<header className="sticky top-0 z-50 border-b backdrop-blur-md border-slate-700/60 bg-slate-900/90 relative">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl font-semibold tracking-tight text-blue-50 relative z-50" href="#home">
                    RUNTIME
                </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors hover:text-blue-300 text-slate-300" href="#problems">
<span className="lang-en">The Challenge</span><span className="lang-sk hidden">Výzva</span>
</a>
<a className="text-sm transition-colors hover:text-blue-300 text-slate-300" href="#services">
<span className="lang-en">Services</span><span className="lang-sk hidden">Služby</span>
</a>
<a className="text-sm transition-colors hover:text-blue-300 text-slate-300" href="#audit">
<span className="lang-en">HR Audit</span><span className="lang-sk hidden">HR Audit</span>
</a>
<a className="text-sm transition-colors hover:text-blue-300 text-slate-300" href="#jobs">
<span className="lang-en">Open Roles</span><span className="lang-sk hidden">Voľné pozície</span>
</a>
<a className="transition-colors hover:text-blue-300 text-sm text-slate-300" href="#about">
<span className="lang-en">About</span><span className="lang-sk hidden">O nás</span>
</a>
</nav>
</div>

<div className="hidden md:flex items-center gap-6">
<div className="flex items-center gap-4 text-sm">
<button className="text-blue-50 font-semibold transition-colors hover:text-blue-200 focus:outline-none" id="lang-en-btn" onclick="toggleLanguage('en')">EN</button>
<span className="text-slate-600">/</span>
<button className="text-slate-500 font-medium transition-colors hover:text-blue-200 focus:outline-none" id="lang-sk-btn" onclick="toggleLanguage('sk')">SK</button>
</div>
<a className="shadow-sm text-sm font-medium px-5 py-2.5 rounded transition-all bg-blue-500 text-slate-950 hover:bg-blue-400 shadow-blue-500/20" href="#contact">
<span className="lang-en">Book Consultation</span><span className="lang-sk hidden">Dohodnúť stretnutie</span>
</a>
</div>

<button aria-label="Menu" className="md:hidden relative z-50 text-slate-300 hover:text-blue-50 focus:outline-none p-2 -mr-2 flex items-center justify-center transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>

<div className="absolute top-full left-0 w-full bg-slate-900 border-b border-slate-700/60 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden max-h-0 opacity-0 pointer-events-none md:hidden" id="mobile-menu">
<div className="px-6 py-6 flex flex-col gap-6">

<nav className="flex flex-col">
<a className="mobile-link text-slate-300 hover:text-blue-50 font-medium py-3 border-b border-slate-800 flex items-center justify-between transition-colors" href="#problems">
<span><span className="lang-en">The Challenge</span><span className="lang-sk hidden">Výzva</span></span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link text-slate-300 hover:text-blue-50 font-medium py-3 border-b border-slate-800 flex items-center justify-between transition-colors" href="#services">
<span><span className="lang-en">Services</span><span className="lang-sk hidden">Služby</span></span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link text-slate-300 hover:text-blue-50 font-medium py-3 border-b border-slate-800 flex items-center justify-between transition-colors" href="#audit">
<span><span className="lang-en">HR Audit</span><span className="lang-sk hidden">HR Audit</span></span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link text-slate-300 hover:text-blue-50 font-medium py-3 border-b border-slate-800 flex items-center justify-between transition-colors" href="#jobs">
<span><span className="lang-en">Open Roles</span><span className="lang-sk hidden">Voľné pozície</span></span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="mobile-link text-slate-300 hover:text-blue-50 font-medium py-3 flex items-center justify-between transition-colors" href="#about">
<span><span className="lang-en">About</span><span className="lang-sk hidden">O nás</span></span>
<iconify-icon className="text-slate-600" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</nav>

<div className="flex flex-col gap-5 pt-2">
<div className="flex items-center justify-between bg-slate-800/50 p-1.5 rounded-lg border border-slate-700/50">
<button className="flex-1 py-2 text-sm font-medium rounded-md focus:outline-none transition-all text-blue-50 bg-slate-700 shadow-sm" id="mobile-lang-en-btn" onclick="toggleLanguage('en')">English</button>
<button className="flex-1 py-2 text-sm font-medium rounded-md focus:outline-none transition-all text-slate-400 hover:text-slate-200" id="mobile-lang-sk-btn" onclick="toggleLanguage('sk')">Slovensky</button>
</div>
<a className="mobile-link w-full text-center shadow-sm text-base font-medium px-6 py-3.5 rounded transition-all bg-blue-500 text-slate-950 hover:bg-blue-400 shadow-blue-500/20" href="#contact">
<span className="lang-en">Book a Consultation</span><span className="lang-sk hidden">Dohodnúť stretnutie</span>
</a>
</div>
</div>
</div>
</header>

<section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 px-6 max-w-7xl mx-auto flex flex-col items-center text-center isolate" id="home">
<div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900 -z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs mb-8 font-medium tracking-wide uppercase shadow-sm bg-blue-900/30 border-blue-700/50 text-blue-200 shadow-blue-500/5">
<iconify-icon className="text-blue-400" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">HR Consulting &amp; Recruitment</span><span className="lang-sk hidden">HR Poradenstvo a Nábor</span>
</div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight max-w-4xl leading-[1.15] text-blue-50">
<span className="lang-en">Hire the right people and <br className="hidden md:block"/> <span className="text-blue-400">build teams that stay.</span></span>
<span className="lang-sk hidden">Nájdite správnych ľudí a <br className="hidden md:block"/> <span className="text-blue-400">vybudujte stabilný tím.</span></span>
</h1>
<p className="mt-6 text-lg max-w-2xl leading-relaxed text-slate-300">
<span className="lang-en">Practical HR support for growing businesses. We help you fix hiring processes, keep your best employees, and build structures that actually work.</span>
<span className="lang-sk hidden">Praktická HR podpora pre rastúce firmy. Pomôžeme vám nastaviť náborový proces, udržať kľúčových zamestnancov a vytvoriť fungujúce pravidlá.</span>
</p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto shadow-sm text-sm font-medium px-6 py-3 rounded transition-all flex items-center justify-center gap-2 bg-blue-500 text-slate-950 hover:bg-blue-400 shadow-blue-500/20" href="#contact">
<span className="lang-en">Book a 20-Minute Chat</span>
<span className="lang-sk hidden">Dohodnite si 20-minútový rozhovor</span>
<iconify-icon className="text-slate-900" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-24 border-y bg-slate-800/30 border-slate-700/60" id="problems">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-blue-50">
<span className="lang-en">Common HR challenges we solve</span>
<span className="lang-sk hidden">Najčastejšie HR výzvy, ktoré riešime</span>
</h2>
<p className="text-base leading-relaxed text-slate-300">
<span className="lang-en">As your company grows, managing people gets more complex. These are the operational issues we see most often in growing teams.</span>
<span className="lang-sk hidden">Ako vaša firma rastie, práca s ľuďmi je čoraz zložitejšia. Toto sú prevádzkové problémy, s ktorými sa stretávame najčastejšie.</span>
</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 border shadow-sm rounded bg-slate-800/60 border-slate-700/80 shadow-black/10">
<iconify-icon className="text-2xl text-blue-400 mb-5" icon="solar:user-cross-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">Hiring the Wrong People</span>
<span className="lang-sk hidden">Zlý výber zamestnancov</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">A bad hire wastes time, costs money, and damages team morale. We help you identify the right fit early in the process.</span>
<span className="lang-sk hidden">Nesprávny kandidát stojí čas, peniaze a kazí morálku v tíme. Pomôžeme vám vybrať tých správnych ľudí hneď na začiatku.</span>
</p>
</div>
<div className="p-8 border shadow-sm rounded bg-slate-800/60 border-slate-700/80 shadow-black/10">
<iconify-icon className="text-2xl text-blue-400 mb-5" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">Losing Key Employees</span>
<span className="lang-sk hidden">Odchody kľúčových ľudí</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">When good people leave unexpectedly, it disrupts your business. We figure out why they leave and fix the root cause.</span>
<span className="lang-sk hidden">Keď náhle odídu dobrí ľudia, naruší to chod celej firmy. Zistíme, prečo odchádzajú, a pomôžeme tomu zabrániť.</span>
</p>
</div>
<div className="p-8 border shadow-sm rounded bg-slate-800/60 border-slate-700/80 shadow-black/10">
<iconify-icon className="text-2xl text-blue-400 mb-5" icon="solar:structure-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">Missing HR Structure</span>
<span className="lang-sk hidden">Chýbajúca HR štruktúra</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">Growing without clear roles and onboarding rules is chaotic. We set up simple, practical HR foundations.</span>
<span className="lang-sk hidden">Rásť bez jasných rolí a pravidiel onboardingu je chaotické. Nastavíme vám jednoduché a praktické HR základy.</span>
</p>
</div>
<div className="p-8 border shadow-sm rounded bg-slate-800/60 border-slate-700/80 shadow-black/10">
<iconify-icon className="text-2xl text-blue-400 mb-5" icon="solar:hourglass-line-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">Slow Recruitment</span>
<span className="lang-sk hidden">Pomalý nábor</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">Taking too long to hire means you miss out on good candidates. We speed up and organize your interviewing process.</span>
<span className="lang-sk hidden">Ak hľadáte ľudí príliš dlho, tí najlepší vám utečú ku konkurencii. Zrýchlime a upraceme váš výberový proces.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<p className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">What we do</span>
<span className="lang-sk hidden">Čo robíme</span>
</p>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-blue-50">
<span className="lang-en">How we can work together</span>
<span className="lang-sk hidden">Ako vám môžeme pomôcť</span>
</h2>
<p className="text-base leading-relaxed text-slate-300">
<span className="lang-en">Whether you need a quick process check, help filling a difficult role, or an external HR partner, we offer practical solutions that fit your current needs.</span>
<span className="lang-sk hidden">Či už potrebujete rýchly audit procesov, obsadiť náročnú pozíciu alebo hľadáte externého HR partnera, ponúkame riešenia šité na mieru vašej situácii.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded border hover:shadow-lg transition-all group flex flex-col h-full border-slate-700/80 bg-slate-800/40 hover:border-blue-600/50 hover:bg-slate-800/70 hover:shadow-blue-500/5 cursor-pointer" onclick="toggleService(1)">
<div className="mb-5">
<iconify-icon className="text-3xl text-blue-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-blue-50">
<span className="lang-en">Recruitment &amp; Selection</span>
<span className="lang-sk hidden">Nábor a výber</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We help companies fill roles more effectively – from defining the role profile to selecting the right candidate.</span>
<span className="lang-sk hidden">Pomáhame firmám obsadzovať pozície efektívnejšie – od nastavenia profilu až po výber vhodného kandidáta.</span>
</p>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="service-content-1">
<div className="pt-6 mt-6 border-t border-slate-700/60">

<h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-blue-400">
<span className="lang-en">What the service includes</span>
<span className="lang-sk hidden">Čo služba zahŕňa</span>
</h4>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">defining the candidate profile and job requirements</span><span className="lang-sk hidden">definovanie profilu kandidáta a požiadaviek pozície</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">creating or improving job advertisements</span><span className="lang-sk hidden">tvorbu alebo úpravu pracovných inzerátov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">active candidate sourcing</span><span className="lang-sk hidden">aktívne vyhľadávanie kandidátov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">CV screening and pre-selection</span><span className="lang-sk hidden">screening životopisov a predvýber</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">interview coordination</span><span className="lang-sk hidden">koordináciu pohovorov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">support in final hiring decisions</span><span className="lang-sk hidden">podporu pri finálnom rozhodovaní</span>
</li>
</ul>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">When it is useful</span>
<span className="lang-sk hidden">Kedy je vhodná</span>
</h4>
<p className="text-sm leading-relaxed mb-8 text-slate-300">
<span className="lang-en">Ideal for companies that need to speed up hiring, improve candidate quality, or fill specialized or hard-to-reach roles.</span>
<span className="lang-sk hidden">Vhodné pre firmy, ktoré potrebujú zrýchliť nábor, zvýšiť kvalitu kandidátov alebo obsadiť špecializované či ťažšie dostupné pozície.</span>
</p>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">Result for the client</span>
<span className="lang-sk hidden">Výsledok pre klienta</span>
</h4>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">A faster and more structured hiring process with a strong focus on candidate quality and long-term team stability.</span>
<span className="lang-sk hidden">Rýchlejší a prehľadnejší náborový proces s dôrazom na kvalitu výberu a stabilitu tímu.</span>
</p>
</div>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300">
<span className="lang-en">
<span className="show-more-1 block">Learn more</span>
<span className="show-less-1 hidden block">Show less</span>
</span>
<span className="lang-sk hidden">
<span className="show-more-1 block">Viac informácií</span>
<span className="show-less-1 hidden block">Zobraziť menej</span>
</span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="service-icon-1" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="p-8 rounded border hover:shadow-lg transition-all group flex flex-col h-full border-slate-700/80 bg-slate-800/40 hover:border-blue-600/50 hover:bg-slate-800/70 hover:shadow-blue-500/5 cursor-pointer" onclick="toggleService(2)">
<div className="mb-5">
<iconify-icon className="text-3xl text-blue-400" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-blue-50">
<span className="lang-en">Personnel Leasing</span>
<span className="lang-sk hidden">Personálny leasing</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We provide flexible workforce solutions for companies that need to respond quickly to capacity or operational demands.</span>
<span className="lang-sk hidden">Poskytujeme flexibilné personálne riešenia pre firmy, ktoré potrebujú rýchlo reagovať na kapacitné alebo prevádzkové potreby.</span>
</p>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="service-content-2">
<div className="pt-6 mt-6 border-t border-slate-700/60">

<h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-blue-400">
<span className="lang-en">What the service includes</span>
<span className="lang-sk hidden">Čo služba zahŕňa</span>
</h4>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">workforce supply according to client needs</span><span className="lang-sk hidden">zabezpečenie pracovníkov podľa potreby klienta</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">flexible staffing during seasonal or project peaks</span><span className="lang-sk hidden">flexibilné dopĺňanie kapacít pri sezónnych alebo projektových výkyvoch</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">employment-related administration</span><span className="lang-sk hidden">pracovnoprávnu administratívu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">contract documentation</span><span className="lang-sk hidden">zmluvnú dokumentáciu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">payroll support and related processes</span><span className="lang-sk hidden">mzdovú agendu a súvisiacu podporu</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">reduced administrative burden for the client</span><span className="lang-sk hidden">zníženie administratívnej záťaže klienta</span>
</li>
</ul>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">When it is useful</span>
<span className="lang-sk hidden">Kedy je vhodná</span>
</h4>
<p className="text-sm leading-relaxed mb-8 text-slate-300">
<span className="lang-en">Ideal for companies that need to quickly strengthen their workforce without increasing internal administrative burden or that require greater operational flexibility.</span>
<span className="lang-sk hidden">Vhodné pre firmy, ktoré potrebujú rýchlo posilniť tím bez zvyšovania internej administratívy alebo pri potrebe väčšej prevádzkovej flexibility.</span>
</p>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">Result for the client</span>
<span className="lang-sk hidden">Výsledok pre klienta</span>
</h4>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">Available workforce capacity, greater flexibility, and reduced administrative workload.</span>
<span className="lang-sk hidden">Dostupná pracovná kapacita, vyššia flexibilita a menšia administratívna záťaž.</span>
</p>
</div>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300">
<span className="lang-en">
<span className="show-more-2 block">Learn more</span>
<span className="show-less-2 hidden block">Show less</span>
</span>
<span className="lang-sk hidden">
<span className="show-more-2 block">Viac informácií</span>
<span className="show-less-2 hidden block">Zobraziť menej</span>
</span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="service-icon-2" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="p-8 rounded border hover:shadow-lg transition-all group flex flex-col h-full border-slate-700/80 bg-slate-800/40 hover:border-blue-600/50 hover:bg-slate-800/70 hover:shadow-blue-500/5 cursor-pointer" onclick="toggleService(3)">
<div className="mb-5">
<iconify-icon className="text-3xl text-blue-400" icon="solar:hand-shake-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-blue-50">
<span className="lang-en">External HR Support</span>
<span className="lang-sk hidden">Externá HR podpora</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We support or manage HR processes so they run smoothly and contribute to both team performance and stability.</span>
<span className="lang-sk hidden">Dopĺňame alebo zastrešujeme HR agendu tak, aby procesy fungovali plynulo a podporovali výkon aj stabilitu tímu.</span>
</p>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="service-content-3">
<div className="pt-6 mt-6 border-t border-slate-700/60">

<h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-blue-400">
<span className="lang-en">What the service includes</span>
<span className="lang-sk hidden">Čo služba zahŕňa</span>
</h4>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">support with day-to-day HR operations</span><span className="lang-sk hidden">podporu pri každodennej HR agende</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">setup of new employee adaptation processes</span><span className="lang-sk hidden">nastavenie procesov adaptácie nových zamestnancov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">handling employee relations and internal situations</span><span className="lang-sk hidden">riešenie pracovných vzťahov a interných situácií</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">support in structuring HR processes</span><span className="lang-sk hidden">podporu pri nastavovaní HR procesov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">recommendations for employee retention</span><span className="lang-sk hidden">návrhy krokov na udržanie zamestnancov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">HR-related guidance for management</span><span className="lang-sk hidden">konzultácie pre manažment v HR oblasti</span>
</li>
</ul>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">When it is useful</span>
<span className="lang-sk hidden">Kedy je vhodná</span>
</h4>
<p className="text-sm leading-relaxed mb-8 text-slate-300">
<span className="lang-en">Ideal for companies without an internal HR department, or for those that need to strengthen existing HR capacity and processes.</span>
<span className="lang-sk hidden">Vhodné pre firmy, ktoré nemajú interné HR oddelenie, alebo potrebujú posilniť existujúce kapacity a procesy.</span>
</p>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">Result for the client</span>
<span className="lang-sk hidden">Výsledok pre klienta</span>
</h4>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">More stable HR operations, lower day-to-day workload, and better-structured internal processes.</span>
<span className="lang-sk hidden">Stabilnejšie HR fungovanie, nižšia operatívna záťaž a lepšie nastavené interné procesy.</span>
</p>
</div>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300">
<span className="lang-en">
<span className="show-more-3 block">Learn more</span>
<span className="show-less-3 hidden block">Show less</span>
</span>
<span className="lang-sk hidden">
<span className="show-more-3 block">Viac informácií</span>
<span className="show-less-3 hidden block">Zobraziť menej</span>
</span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="service-icon-3" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="p-8 rounded border hover:shadow-lg transition-all group flex flex-col h-full border-slate-700/80 bg-slate-800/40 hover:border-blue-600/50 hover:bg-slate-800/70 hover:shadow-blue-500/5 cursor-pointer" onclick="toggleService(4)">
<div className="mb-5">
<iconify-icon className="text-3xl text-blue-400" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3 text-blue-50">
<span className="lang-en">HR Audit &amp; Consulting</span>
<span className="lang-sk hidden">HR audit a poradenstvo</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We analyze HR processes and identify opportunities for improvement, greater efficiency, and better system setup.</span>
<span className="lang-sk hidden">Analyzujeme HR procesy a identifikujeme príležitosti na zlepšenie, vyššiu efektivitu a lepšie nastavenie systému.</span>
</p>
<div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out" id="service-content-4">
<div className="pt-6 mt-6 border-t border-slate-700/60">

<h4 className="text-xs font-medium tracking-widest uppercase mb-4 text-blue-400">
<span className="lang-en">What the service includes</span>
<span className="lang-sk hidden">Čo služba zahŕňa</span>
</h4>
<ul className="space-y-3 mb-8 text-sm text-slate-300">
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">mapping existing HR processes</span><span className="lang-sk hidden">mapovanie existujúcich HR procesov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">analyzing recruitment, adaptation, and internal procedures</span><span className="lang-sk hidden">analýzu náboru, adaptácie a interných postupov</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">identifying weak points and improvement opportunities</span><span className="lang-sk hidden">identifikáciu slabých miest a rezerv</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">reviewing selected areas from a compliance and practice perspective</span><span className="lang-sk hidden">kontrolu vybraných oblastí z pohľadu súladu a praxe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">proposing concrete recommendations</span><span className="lang-sk hidden">návrh konkrétnych odporúčaní</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-base mt-0.5 shrink-0 text-blue-500" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">delivering an output with priorities and next steps</span><span className="lang-sk hidden">výstup s prioritami a ďalšími krokmi</span>
</li>
</ul>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">When it is useful</span>
<span className="lang-sk hidden">Kedy je vhodná</span>
</h4>
<p className="text-sm leading-relaxed mb-8 text-slate-300">
<span className="lang-en">Ideal for companies that want an objective view of their HR setup and need to identify clear areas for improvement.</span>
<span className="lang-sk hidden">Vhodné pre firmy, ktoré chcú získať objektívny pohľad na svoje HR fungovanie a pomenovať konkrétne oblasti na zlepšenie.</span>
</p>

<h4 className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">Result for the client</span>
<span className="lang-sk hidden">Výsledok pre klienta</span>
</h4>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">A clearer understanding of HR operations, concrete recommendations, and a solid basis for next decisions.</span>
<span className="lang-sk hidden">Jasnejší prehľad o HR fungovaní, konkrétne odporúčania a podklad pre ďalšie rozhodovanie.</span>
</p>
</div>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300">
<span className="lang-en">
<span className="show-more-4 block">Learn more</span>
<span className="show-less-4 hidden block">Show less</span>
</span>
<span className="lang-sk hidden">
<span className="show-more-4 block">Viac informácií</span>
<span className="show-less-4 hidden block">Zobraziť menej</span>
</span>
<iconify-icon className="transition-transform duration-300" icon="solar:alt-arrow-down-linear" id="service-icon-4" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50 text-slate-900" id="audit">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6 text-slate-900">
<span className="lang-en">HR Audit for Growing Companies</span>
<span className="lang-sk hidden">HR Audit pre rastúce firmy</span>
</h2>
<p className="text-base leading-relaxed mb-10 text-slate-700">
<span className="lang-en">Before fixing anything, we need to know where you stand. Our audit gives you a clear picture of your HR health and a practical to-do list for improvement.</span>
<span className="lang-sk hidden">Predtým, než začneme niečo meniť, musíme vedieť, na čom ste. Náš audit vám poskytne jasný obraz o stave vášho HR a konkrétny zoznam krokov, čo zlepšiť.</span>
</p>
<h3 className="text-sm font-medium uppercase tracking-widest mb-6 text-blue-700">
<span className="lang-en">What you'll get</span>
<span className="lang-sk hidden">Čo tým získate</span>
</h3>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3 text-sm text-slate-800">
<iconify-icon className="text-base mt-0.5 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">Find out exactly why good people are leaving</span>
<span className="lang-sk hidden">Zistíte, prečo od vás kľúčoví ľudia odchádzajú</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-800">
<iconify-icon className="text-base mt-0.5 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">See where your hiring process gets stuck</span>
<span className="lang-sk hidden">Uvidíte, kde najviac viazne váš náborový proces</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-800">
<iconify-icon className="text-base mt-0.5 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">Check if your contracts and rules meet legal standards</span>
<span className="lang-sk hidden">Skontrolujeme, či sú zmluvy a interné pravidlá v poriadku</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-800">
<iconify-icon className="text-base mt-0.5 text-blue-600" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">Get actionable ways to improve team motivation</span>
<span className="lang-sk hidden">Získate reálne spôsoby, ako zlepšiť motiváciu vášho tímu</span>
</li>
</ul>
<a className="inline-flex shadow-sm text-sm font-medium px-6 py-3 rounded transition-colors bg-slate-900 text-blue-50 hover:bg-slate-800 shadow-slate-900/10" href="#contact">
<span className="lang-en">Book a Free Consultation</span>
<span className="lang-sk hidden">Dohodnúť nezáväzný hovor</span>
</a>
</div>
<div className="border shadow-sm rounded-lg p-8 md:p-10 bg-white border-blue-200/60">
<h3 className="text-lg font-medium tracking-tight mb-8 text-slate-900">
<span className="lang-en">How it works</span>
<span className="lang-sk hidden">Ako to prebieha</span>
</h3>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-3 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border text-xs font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-blue-200 bg-blue-50 text-blue-700">1</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] pb-4">
<h4 className="text-base font-medium tracking-tight mb-1 text-slate-900">
<span className="lang-en">Initial Chat</span>
<span className="lang-sk hidden">Úvodný rozhovor</span>
</h4>
<p className="text-xs leading-relaxed text-slate-600">
<span className="lang-en">We sit down to talk about your business, your team, and what's bothering you right now.</span>
<span className="lang-sk hidden">Sadneme si a porozprávame sa o vašom biznise, tíme a o tom, čo vás momentálne najviac trápi.</span>
</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border text-xs font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-blue-200 bg-blue-50 text-blue-700">2</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] pb-4">
<h4 className="text-base font-medium tracking-tight mb-1 text-slate-900">
<span className="lang-en">Reviewing the Basics</span>
<span className="lang-sk hidden">Kontrola základov</span>
</h4>
<p className="text-xs leading-relaxed text-slate-600">
<span className="lang-en">We look at your current contracts, employee handbooks, and standard HR policies.</span>
<span className="lang-sk hidden">Pozrieme sa na vaše aktuálne zmluvy, interné smernice a pravidlá.</span>
</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border text-xs font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-blue-200 bg-blue-50 text-blue-700">3</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] pb-4">
<h4 className="text-base font-medium tracking-tight mb-1 text-slate-900">
<span className="lang-en">Looking at Workflows</span>
<span className="lang-sk hidden">Analýza procesov</span>
</h4>
<p className="text-xs leading-relaxed text-slate-600">
<span className="lang-en">We see how you hire, how you welcome new people, and how you manage performance daily.</span>
<span className="lang-sk hidden">Zistíme, ako u vás prebieha nábor, zaúčanie nováčikov a každodenné riadenie ľudí.</span>
</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border text-xs font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-blue-200 bg-blue-50 text-blue-700">4</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] pb-4">
<h4 className="text-base font-medium tracking-tight mb-1 text-slate-900">
<span className="lang-en">The Findings</span>
<span className="lang-sk hidden">Výsledky auditu</span>
</h4>
<p className="text-xs leading-relaxed text-slate-600">
<span className="lang-en">We give you a straightforward report. No fluff, just what's wrong and how to fix it.</span>
<span className="lang-sk hidden">Odovzdáme vám zrozumiteľnú správu. Žiadna zbytočná vata, len to, čo nefunguje a ako to opraviť.</span>
</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-6 h-6 rounded-full border text-xs font-medium shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10 border-blue-200 bg-blue-50 text-blue-700">5</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)]">
<h4 className="text-base font-medium tracking-tight mb-1 text-slate-900">
<span className="lang-en">Making it Happen</span>
<span className="lang-sk hidden">Zavedenie zmien</span>
</h4>
<p className="text-xs leading-relaxed text-slate-600">
<span className="lang-en">If you want, we'll help you actually implement these changes into your daily operations.</span>
<span className="lang-sk hidden">Ak budete chcieť, pomôžeme vám tieto zmeny reálne zaviesť do bežného chodu vašej firmy.</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 border-t border-slate-700/60" id="jobs">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 max-w-2xl text-center mx-auto">
<p className="text-xs font-medium tracking-widest uppercase mb-3 text-blue-400">
<span className="lang-en">Careers</span>
<span className="lang-sk hidden">Kariéra</span>
</p>
<h2 className="text-3xl font-medium tracking-tight mb-4 text-blue-50">
<span className="lang-en">Open Roles</span>
<span className="lang-sk hidden">Otvorené pozície</span>
</h2>
<p className="text-base leading-relaxed text-slate-300">
<span className="lang-en">We are currently looking for talented professionals for our clients and our internal team. Don't see a fit? Feel free to send us your CV anyway.</span>
<span className="lang-sk hidden">Aktuálne hľadáme šikovných ľudí pre našich klientov aj do nášho vlastného tímu. Nenašli ste vhodnú pozíciu? Pošlite nám životopis aj tak.</span>
</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<a className="block p-8 rounded border transition-all group border-slate-700/80 bg-slate-800/40 hover:bg-slate-800/70 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5" href="#contact">
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-medium px-2.5 py-1 rounded-full border shadow-sm bg-blue-900/30 text-blue-200 border-blue-700/50">
<span className="lang-en">Full-time</span><span className="lang-sk hidden">Plný úväzok</span>
</span>
<span className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Bratislava
                        </span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-blue-50 group-hover:text-blue-300 transition-colors">
<span className="lang-en">HR Generalist</span><span className="lang-sk hidden">HR Generalista</span>
</h3>
<p className="text-sm text-slate-400 mb-6">
<span className="lang-en">For our client: Tech &amp; E-commerce</span>
<span className="lang-sk hidden">Pre nášho klienta: Tech &amp; E-commerce</span>
</p>
<div className="flex items-center text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300 gap-1.5">
<span className="lang-en">Apply now</span><span className="lang-sk hidden">Mám záujem</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="block p-8 rounded border transition-all group border-slate-700/80 bg-slate-800/40 hover:bg-slate-800/70 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5" href="#contact">
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-medium px-2.5 py-1 rounded-full border shadow-sm bg-blue-900/30 text-blue-200 border-blue-700/50">
<span className="lang-en">Full-time</span><span className="lang-sk hidden">Plný úväzok</span>
</span>
<span className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">Hybrid</span><span className="lang-sk hidden">Hybrid</span>
</span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-blue-50 group-hover:text-blue-300 transition-colors">
<span className="lang-en">IT Recruiter</span><span className="lang-sk hidden">IT Recruiter</span>
</h3>
<p className="text-sm text-slate-400 mb-6">
<span className="lang-en">Internal position at Runtime HR</span>
<span className="lang-sk hidden">Interná pozícia v Runtime HR</span>
</p>
<div className="flex items-center text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300 gap-1.5">
<span className="lang-en">Apply now</span><span className="lang-sk hidden">Mám záujem</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>

<a className="block p-8 rounded border transition-all group border-slate-700/80 bg-slate-800/40 hover:bg-slate-800/70 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5" href="#contact">
<div className="flex items-center justify-between mb-5">
<span className="text-xs font-medium px-2.5 py-1 rounded-full border shadow-sm bg-blue-900/30 text-blue-200 border-blue-700/50">
<span className="lang-en">Part-time</span><span className="lang-sk hidden">Skrátený úväzok</span>
</span>
<span className="text-xs text-slate-400 flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            Trnava
                        </span>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2 text-blue-50 group-hover:text-blue-300 transition-colors">
<span className="lang-en">Payroll Specialist</span><span className="lang-sk hidden">Mzdový špecialista</span>
</h3>
<p className="text-sm text-slate-400 mb-6">
<span className="lang-en">For our client: Logistics</span>
<span className="lang-sk hidden">Pre nášho klienta: Logistika</span>
</p>
<div className="flex items-center text-sm font-medium transition-colors text-blue-400 group-hover:text-blue-300 gap-1.5">
<span className="lang-en">Apply now</span><span className="lang-sk hidden">Mám záujem</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</a>
</div>
<div className="text-center">
<p className="text-sm text-slate-400">
<span className="lang-en">Don't see a perfect fit? Email us your CV at</span>
<span className="lang-sk hidden">Nenašli ste vhodnú pozíciu? Pošlite nám CV na</span>
<a className="text-blue-400 hover:text-blue-300 transition-colors font-medium" href="mailto:cv@runtime.sk">cv@runtime.sk</a>
</p>
</div>
</div>
</section>

<section className="py-24 border-y bg-sky-900/10 border-slate-700/60" id="about">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium tracking-widest uppercase mb-6 text-blue-400">
<span className="lang-en">Why work with us</span>
<span className="lang-sk hidden">Prečo s nami</span>
</p>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl mx-auto leading-[1.2] mb-12 text-blue-50">
<span className="lang-en">We combine HR expertise with <br className="hidden md:block"/> <span className="text-blue-400">real business sense.</span></span>
<span className="lang-sk hidden">Spájame HR znalosti so <br className="hidden md:block"/> <span className="text-blue-400">skutočným pochopením biznisu.</span></span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
<div>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">Business First</span>
<span className="lang-sk hidden">Biznis na prvom mieste</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We know that HR is here to support the business, not the other way around. Every process we suggest has to make financial and operational sense.</span>
<span className="lang-sk hidden">Vieme, že HR je tu na to, aby podporovalo biznis, nie naopak. Každý process, ktorý navrhneme, musí dávať zmysel finančne aj prevádzkovo.</span>
</p>
</div>
<div>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">We Know Smaller Companies</span>
<span className="lang-sk hidden">Rozumieme menším firmám</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">Corporate HR rules don't work for a 50-person company. We focus on practical setups that fit your specific size, culture, and speed.</span>
<span className="lang-sk hidden">Korporátne HR pravidlá v 50-člennej firme nefungujú. Sústredíme sa na praktické riešenia, ktoré zodpovedajú vašej veľkosti a firemnej kultúre.</span>
</p>
</div>
<div>
<h3 className="text-base font-medium tracking-tight mb-2 text-blue-50">
<span className="lang-en">No Cookie-Cutter Advice</span>
<span className="lang-sk hidden">Žiadne šablóny</span>
</h3>
<p className="text-sm leading-relaxed text-slate-300">
<span className="lang-en">We don't sell pre-packaged templates. We listen to your specific situation and advise you based on what you actually need right now.</span>
<span className="lang-sk hidden">Nepredávame univerzálne šablóny. Vypočujeme si vašu konkrétnu situáciu a poradíme vám podľa toho, čo práve teraz reálne potrebujete.</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b bg-slate-900 border-slate-700/60" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-4 text-blue-50">
<span className="lang-en">Let's talk about your team.</span>
<span className="lang-sk hidden">Poďme sa porozprávať o vašom tíme.</span>
</h2>
<p className="text-base mb-10 leading-relaxed text-slate-300">
<span className="lang-en">Book a short, free call. We'll discuss what's currently slowing you down and see if our approach makes sense for your business.</span>
<span className="lang-sk hidden">Dohodnite si krátky, nezáväzný hovor. Preberieme, čo vás momentálne brzdí a zistíme, či by náš prístup dával zmysel pre vašu firmu.</span>
</p>
<div className="space-y-6">
<div className="flex gap-4 text-slate-300 gap-x-4 gap-y-4 items-center">
<div className="w-10 h-10 rounded border flex items-center justify-center shrink-0 bg-slate-800 border-slate-700/80">
<iconify-icon className="text-lg text-blue-400" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-medium mb-0.5 text-slate-500">
<span className="lang-en">Email us</span>
<span className="lang-sk hidden">Napíšte nám</span>
</p>
<a className="transition-colors hover:text-blue-300 text-sm font-medium text-blue-50" href="mailto:office@runtime.sk">office@runtime.sk</a>
</div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded border flex items-center justify-center shrink-0 bg-slate-800 border-slate-700/80">
<iconify-icon className="text-lg text-blue-400" icon="solar:phone-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-medium mb-0.5 text-slate-500">
<span className="lang-en">Call us</span>
<span className="lang-sk hidden">Zavolajte nám</span>
</p>
<a className="transition-colors hover:text-blue-300 text-sm font-medium text-blue-50" href="tel:+421907949911">+421 907949911</a>
</div>
</div>
<div className="flex items-center gap-4 text-slate-300">
<div className="w-10 h-10 rounded border flex items-center justify-center shrink-0 bg-slate-800 border-slate-700/80">
<iconify-icon className="text-lg text-blue-400" icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="">
<p className="text-xs font-medium mb-0.5 text-slate-500">
<span className="lang-en">Location</span>
<span className="lang-sk hidden">Sídlo</span>
</p>
<span className="text-sm font-medium text-blue-50">Bratislava, Slovakia</span>
</div>
</div>
</div>
</div>
<div className="border shadow-lg rounded p-8 bg-slate-800/40 border-slate-700/80 shadow-black/10">
<form className="space-y-4" id="contact-form">

<input autocomplete="off" id="bot-honeypot" name="_honey" style={{display: 'none'}} tabindex="-1" type="text"/>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400" htmlFor="first-name">
<span className="lang-en">First name</span>
<span className="lang-sk hidden">Meno</span>
</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-slate-900/50 border-slate-700 text-blue-50" id="first-name" name="first_name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400" htmlFor="last-name">
<span className="lang-en">Last name</span>
<span className="lang-sk hidden">Priezvisko</span>
</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-slate-900/50 border-slate-700 text-blue-50" id="last-name" name="last_name" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400" htmlFor="email">
<span className="lang-en">Work email</span>
<span className="lang-sk hidden">Pracovný e-mail</span>
</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-slate-900/50 border-slate-700 text-blue-50" id="email" name="email" required="" type="email"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400" htmlFor="company">
<span className="lang-en">Company name</span>
<span className="lang-sk hidden">Názov firmy</span>
</label>
<input className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow bg-slate-900/50 border-slate-700 text-blue-50" id="company" name="company" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-slate-400" htmlFor="message">
<span className="lang-en">What's on your mind?</span>
<span className="lang-sk hidden">S čím vám vieme pomôcť?</span>
</label>
<textarea className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow resize-none bg-slate-900/50 border-slate-700 text-blue-50" id="message" name="message" required="" rows="4"></textarea>
</div>
<button className="w-full flex justify-center items-center shadow-sm text-sm font-medium px-6 py-3 rounded transition-colors mt-2 bg-blue-500 text-slate-950 hover:bg-blue-400 shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed" id="submit-btn" type="submit">
<span id="btn-text-default">
<span className="lang-en">Send Message</span>
<span className="lang-sk hidden">Odoslať správu</span>
</span>
<span className="hidden flex items-center gap-2" id="btn-text-loading">
<iconify-icon className="animate-spin text-lg" icon="solar:spinner-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="lang-en">Sending...</span>
<span className="lang-sk hidden">Odosielam...</span>
</span>
</button>

<div className="hidden mt-4 p-4 rounded bg-emerald-900/30 border border-emerald-500/50 text-emerald-200 text-sm" id="form-success">
<span className="lang-en">Thank you! Your message has been sent. We'll get back to you soon.</span>
<span className="lang-sk hidden">Ďakujeme! Vaša správa bola úspešne odoslaná. Čoskoro sa vám ozveme.</span>
</div>
<div className="hidden mt-4 p-4 rounded bg-red-900/30 border border-red-500/50 text-red-200 text-sm" id="form-error">
<span className="lang-en">Oops! There was an issue sending your message. Please try again or email us directly.</span>
<span className="lang-sk hidden">Oops! Vyskytol sa problém pri odosielaní správy. Skúste to znova alebo nám napíšte priamo.</span>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-16 pb-8 bg-slate-800/30">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-tight flex items-center gap-2 mb-4 text-blue-50" href="#home">
                        RUNTIME
                    </a>
<p className="text-sm max-w-sm leading-relaxed text-slate-400">
<span className="lang-en">Practical HR consulting and recruitment support for growing companies in Slovakia and Europe.</span>
<span className="lang-sk hidden">Praktické HR poradenstvo a náborová podpora pre rastúce firmy na Slovensku a v Európe.</span>
</p>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-blue-50">
<span className="lang-en">Navigation</span>
<span className="lang-sk hidden">Navigácia</span>
</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#services">
<span className="lang-en">Services</span><span className="lang-sk hidden">Služby</span>
</a></li>
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#audit">
<span className="lang-en">HR Audit</span><span className="lang-sk hidden">HR Audit</span>
</a></li>
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#jobs">
<span className="lang-en">Open Roles</span><span className="lang-sk hidden">Voľné pozície</span>
</a></li>
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#about">
<span className="lang-en">About Us</span><span className="lang-sk hidden">O nás</span>
</a></li>
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#contact">
<span className="lang-en">Contact</span><span className="lang-sk hidden">Kontakt</span>
</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium mb-4 tracking-tight text-blue-50">
<span className="lang-en">Connect</span>
<span className="lang-sk hidden">Spojenia</span>
</h4>
<ul className="space-y-3">
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="#">LinkedIn</a></li>
<li><a className="text-sm transition-colors hover:text-blue-300 text-slate-400" href="mailto:office@runtime.sk">office@runtime.sk</a></li>
<li className="text-sm text-slate-400">Bratislava, Slovakia</li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 border-slate-700/60">
<p className="text-xs text-slate-500">
<span className="lang-en">© 2024 Runtime HR Consulting. All rights reserved.</span>
<span className="lang-sk hidden">© 2024 Runtime HR Consulting. Všetky práva vyhradené.</span>
</p>
<div className="flex items-center gap-6">
<a className="text-xs transition-colors text-slate-500 hover:text-blue-300" href="#">
<span className="lang-en">Privacy Policy</span>
<span className="lang-sk hidden">Zásady ochrany osobných údajov</span>
</a>
<a className="text-xs transition-colors text-slate-500 hover:text-blue-300" href="#">
<span className="lang-en">Terms of Service</span>
<span className="lang-sk hidden">Podmienky služby</span>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
