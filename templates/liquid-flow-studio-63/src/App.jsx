import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            
            /* --- 1. Mobile Menu & Navbar Scroll --- */
            const navbar = document.getElementById('navbar');
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileLinks = document.querySelectorAll('.mobile-link');
            let isMenuOpen = false;

            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('bg-[var(--surface-color)]/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                    navbar.classList.remove('py-6');
                } else {
                    navbar.classList.remove('bg-[var(--surface-color)]/90', 'backdrop-blur-md', 'shadow-sm', 'py-4');
                    navbar.classList.add('py-6');
                }
            });

            const toggleMenu = () => {
                isMenuOpen = !isMenuOpen;
                if(isMenuOpen) {
                    mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = 'hidden';
                    mobileBtn.innerHTML = '<iconify-icon icon="solar:close-square-linear" stroke-width="1.5"></iconify-icon>';
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                    mobileBtn.innerHTML = '<iconify-icon icon="solar:hamburger-menu-linear" stroke-width="1.5"></iconify-icon>';
                }
            };

            mobileBtn.addEventListener('click', toggleMenu);
            mobileLinks.forEach(link => link.addEventListener('click', () => { if(isMenuOpen) toggleMenu(); }));


            /* --- 2. Scroll Reveals --- */
            const revealElements = document.querySelectorAll('.scroll-reveal');
            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target);
                    }
                });
            }, { root: null, threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

            revealElements.forEach(el => revealObserver.observe(el));


            /* --- 3. Contact Form Submission --- */
            const form = document.getElementById('contact-form');
            const formSuccess = document.getElementById('form-success');
            const submitBtn = form.querySelector('button[type="submit"]');

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitBtn.innerHTML = '<iconify-icon icon="solar:refresh-circle-linear" class="animate-spin text-xl"></iconify-icon>';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    form.reset();
                    submitBtn.innerHTML = 'Sent Successfully <iconify-icon icon="solar:check-circle-linear" stroke-width="1.5"></iconify-icon>';
                    submitBtn.classList.replace('bg-[var(--accent-color)]', 'bg-[var(--secondary-color)]');
                    formSuccess.classList.remove('hidden');
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = 'Send Message <iconify-icon icon="solar:plain-linear" stroke-width="1.5"></iconify-icon>';
                        submitBtn.classList.replace('bg-[var(--secondary-color)]', 'bg-[var(--accent-color)]');
                        submitBtn.disabled = false;
                        formSuccess.classList.add('hidden');
                    }, 4000);
                }, 1500);
            });


            /* --- 4. Theme Editor Logic --- */
            const body = document.getElementById('app-body');
            const editorToggle = document.getElementById('editor-toggle');
            const closeEditor = document.getElementById('close-editor');
            const editorPanel = document.getElementById('editor-panel');
            
            let isEditorOpen = false;

            const toggleEditor = () => {
                isEditorOpen = !isEditorOpen;
                if (isEditorOpen) {
                    editorPanel.classList.remove('hidden');
                    // slight delay to allow display:block to apply before animation
                    setTimeout(() => {
                        editorPanel.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
                    }, 10);
                } else {
                    editorPanel.classList.add('opacity-0', 'translate-y-8', 'scale-95');
                    setTimeout(() => {
                        editorPanel.classList.add('hidden');
                    }, 500); // match duration
                }
            };

            editorToggle.addEventListener('click', toggleEditor);
            closeEditor.addEventListener('click', toggleEditor);

            // Themes Data
            const themes = [
                { id: 'earth', name: 'Earth', bg: '#F9F8F6', surface: '#F0EFEA', text: '#2C2825', accent: '#B3593A', secondary: '#8B9D83' },
                { id: 'ocean', name: 'Ocean', bg: '#F0F4F8', surface: '#E1E8F0', text: '#0F172A', accent: '#0284C7', secondary: '#0D9488' },
                { id: 'sunset', name: 'Sunset', bg: '#FFF5F5', surface: '#FFE4E6', text: '#4C1D95', accent: '#E11D48', secondary: '#D97706' },
                { id: 'forest', name: 'Forest', bg: '#F0FDF4', surface: '#DCFCE7', text: '#064E3B', accent: '#16A34A', secondary: '#65A30D' },
                { id: 'dark', name: 'Charcoal', bg: '#18181B', surface: '#27272A', text: '#FAFAFA', accent: '#A1A1AA', secondary: '#71717A' }
            ];

            const fontPairings = [
                { id: 'sora-outfit', name: 'Sora & Outfit', heading: "'Sora', sans-serif", body: "'Outfit', sans-serif" },
                { id: 'space-inter', name: 'Space & Inter', heading: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
                { id: 'playfair-lora', name: 'Playfair & Lora', heading: "'Playfair Display', serif", body: "'Lora', serif" }
            ];

            const headingsMap = [
                { id: 'hero-title', label: 'Hero Section' },
                { id: 'about-title', label: 'About Section' },
                { id: 'services-title', label: 'Services Section' },
                { id: 'portfolio-title', label: 'Portfolio Section' },
                { id: 'testimonials-title', label: 'Testimonials' },
                { id: 'contact-title', label: 'Contact Section' }
            ];

            // Render Colors
            const colorContainer = document.getElementById('color-selectors');
            themes.forEach((theme, idx) => {
                const btn = document.createElement('button');
                btn.className = `w-10 h-10 rounded-[40%_60%_70%_30%] hover:rounded-[60%_40%_30%_70%] border-2 focus:outline-none transition-all duration-500 hover:scale-110 active:scale-95 flex items-center justify-center group relative overflow-hidden`;
                btn.style.borderColor = idx === 0 ? theme.text : 'transparent';
                btn.style.backgroundColor = theme.bg;
                
                // create dual-tone look inside button
                btn.innerHTML = `
                    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-[${theme.surface}] opacity-50 pointer-events-none"></div>
                    <div class="w-3 h-3 rounded-full bg-[${theme.accent}] z-10 shadow-sm"></div>
                `;

                btn.onclick = () => {
                    // Update CSS Variables
                    body.style.setProperty('--bg-color', theme.bg);
                    body.style.setProperty('--surface-color', theme.surface);
                    body.style.setProperty('--text-color', theme.text);
                    body.style.setProperty('--accent-color', theme.accent);
                    body.style.setProperty('--secondary-color', theme.secondary);

                    // Update Active State
                    Array.from(colorContainer.children).forEach(c => c.style.borderColor = 'transparent');
                    btn.style.borderColor = theme.text;
                };
                colorContainer.appendChild(btn);
            });

            // Render Fonts
            const fontContainer = document.getElementById('font-selectors');
            fontPairings.forEach((fp, idx) => {
                const label = document.createElement('label');
                label.className = `flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition-colors group ${idx === 0 ? 'bg-stone-50 border-stone-200' : 'bg-white border-stone-100 hover:border-stone-200'}`;
                
                label.innerHTML = `
                    <div class="flex flex-col">
                        <span class="text-xs font-semibold text-stone-800" style="font-family: ${fp.heading}">${fp.name.split('&')[0]}</span>
                        <span class="text-[10px] text-stone-500" style="font-family: ${fp.body}">${fp.name.split('&')[1]}</span>
                    </div>
                    <div class="w-4 h-4 rounded-full border border-stone-300 flex items-center justify-center group-focus-within:ring-2 ring-stone-900 transition-colors ${idx === 0 ? 'border-stone-900' : ''}">
                        <div class="w-2 h-2 rounded-full bg-stone-900 ${idx === 0 ? 'scale-100' : 'scale-0'} transition-transform indicator"></div>
                    </div>
                    <input type="radio" name="font-pairing" value="${fp.id}" class="sr-only" ${idx === 0 ? 'checked' : ''}>
                `;

                const input = label.querySelector('input');
                input.addEventListener('change', () => {
                    if (input.checked) {
                        // Apply fonts
                        body.style.setProperty('--font-heading', fp.heading);
                        body.style.setProperty('--font-body', fp.body);
                        body.style.fontFamily = fp.body;

                        // Update visual states
                        Array.from(fontContainer.children).forEach(child => {
                            child.classList.remove('bg-stone-50', 'border-stone-200');
                            child.classList.add('bg-white', 'border-stone-100');
                            child.querySelector('.indicator').classList.remove('scale-100');
                            child.querySelector('.indicator').classList.add('scale-0');
                            child.querySelector('.w-4').classList.remove('border-stone-900');
                        });

                        label.classList.remove('bg-white', 'border-stone-100');
                        label.classList.add('bg-stone-50', 'border-stone-200');
                        label.querySelector('.indicator').classList.add('scale-100');
                        label.querySelector('.w-4').classList.add('border-stone-900');
                    }
                });

                fontContainer.appendChild(label);
            });

            // Render Headings Editors
            const headingsContainer = document.getElementById('heading-editors');
            headingsMap.forEach(hm => {
                const targetElement = document.querySelector(`[data-heading-id="${hm.id}"]`);
                if (!targetElement) return;

                const wrapper = document.createElement('div');
                wrapper.className = 'relative';

                const input = document.createElement('input');
                input.type = 'text';
                input.value = targetElement.innerText.trim().replace(/\n/g, ' ');
                input.className = 'w-full text-xs py-2.5 px-3 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent transition-all text-stone-700';
                input.placeholder = hm.label;

                const label = document.createElement('span');
                label.className = 'absolute -top-2 left-2 bg-white px-1 text-[9px] font-semibold text-stone-400 uppercase tracking-wider';
                label.innerText = hm.label;

                input.addEventListener('input', (e) => {
                    targetElement.innerText = e.target.value || ' ';
                });

                wrapper.appendChild(label);
                wrapper.appendChild(input);
                headingsContainer.appendChild(wrapper);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 transition-all duration-500 py-6 px-6 md:px-12" id="navbar">
<div className="max-w-7xl mx-auto flex items-center justify-between">
<a aria-label="Home" className="text-2xl font-semibold tracking-tighter text-[var(--text-color)] relative z-50 flex items-center gap-2 group" href="#" style={{fontFamily: 'var(--font-heading)'}}>
<div className="w-8 h-8 rounded-[40%_60%_70%_30%] bg-[var(--accent-color)] flex items-center justify-center text-white text-xs transition-all duration-500 group-hover:rounded-[60%_40%_30%_70%]">L</div>
                LFS
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors" href="#about">About</a>
<a className="opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors" href="#services">Services</a>
<a className="opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors" href="#portfolio">Portfolio</a>
<a className="opacity-80 hover:opacity-100 hover:text-[var(--accent-color)] transition-colors" href="#testimonials">Testimonials</a>
<a className="px-5 py-2.5 rounded-[40%_60%_70%_30%] hover:rounded-[60%_40%_30%_70%] bg-[var(--text-color)] text-[var(--bg-color)] hover:opacity-90 transition-all duration-500" href="#contact" style={{boxShadow: '0 4px 16px -4px rgba(0,0,0,0.1)'}}>Let's Talk</a>
</div>

<button aria-label="Toggle Menu" className="md:hidden relative z-50 text-2xl text-[var(--text-color)] focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[var(--surface-color)] z-40 flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-500" id="mobile-menu">
<a className="text-3xl font-semibold mobile-link tracking-tight" href="#about" style={{fontFamily: 'var(--font-heading)'}}>About</a>
<a className="text-3xl font-semibold mobile-link tracking-tight" href="#services" style={{fontFamily: 'var(--font-heading)'}}>Services</a>
<a className="text-3xl font-semibold mobile-link tracking-tight" href="#portfolio" style={{fontFamily: 'var(--font-heading)'}}>Portfolio</a>
<a className="text-3xl font-semibold mobile-link tracking-tight" href="#testimonials" style={{fontFamily: 'var(--font-heading)'}}>Testimonials</a>
<a className="px-8 py-4 mt-4 rounded-[40%_60%_70%_30%] bg-[var(--accent-color)] text-white text-lg font-medium mobile-link" href="#contact">Let's Talk</a>
</div>
</nav>
<main>

<section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 flex items-center justify-center overflow-hidden min-[480px]:px-12" id="hero">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[150%] max-h-[150%] opacity-10 bg-[var(--accent-color)] blur-[80px] md:blur-[120px] mix-blend-multiply animate-blob pointer-events-none z-0"></div>
<div className="absolute top-1/3 left-1/3 -translate-x-1/4 -translate-y-1/4 w-[600px] h-[600px] max-w-[120%] max-h-[120%] opacity-15 bg-[var(--secondary-color)] blur-[60px] md:blur-[100px] mix-blend-multiply animate-blob pointer-events-none z-0" style={{animationDelay: '3s'}}></div>
<div className="relative z-10 max-w-4xl mx-auto text-center scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
<div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[40%_60%_70%_30%] border border-[var(--text-color)]/10 bg-[var(--surface-color)]/50 backdrop-blur-sm mb-8 text-xs font-medium uppercase tracking-widest text-[var(--accent-color)] animate-blob">
<iconify-icon className="text-base" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    Digital Excellence
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-[var(--text-color)] mb-6 leading-[1.1]" data-heading-id="hero-title" style={{fontFamily: 'var(--font-heading)'}}>
                    Crafting Digital Ecosystems
                </h1>
<p className="text-lg md:text-xl opacity-80 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    We blend purposeful design and fluid technology to create liquid-smooth digital experiences that flow perfectly across all devices and platforms.
                </p>
<div className="flex flex-col min-[480px]:flex-row items-center justify-center gap-4 group/btns">
<a className="w-full min-[480px]:w-auto px-8 py-4 rounded-[40%_60%_70%_30%] hover:rounded-[60%_40%_30%_70%] bg-[var(--accent-color)] text-white font-medium hover:-translate-y-1 transition-all duration-500 flex items-center justify-center gap-2" href="#portfolio" style={{boxShadow: '0 8px 32px -8px var(--accent-color)'}}>
                        View Our Work
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full min-[480px]:w-auto px-8 py-4 rounded-[60%_40%_30%_70%] hover:rounded-[40%_60%_70%_30%] border border-[var(--text-color)]/20 text-[var(--text-color)] font-medium hover:bg-[var(--text-color)] hover:text-[var(--bg-color)] hover:-translate-y-1 transition-all duration-500 text-center" href="#about">
                        Discover the Studio
                    </a>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[var(--surface-color)] relative mt-16 md:mt-24" id="about">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] text-[var(--surface-color)] rotate-180 pointer-events-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out order-2 md:order-1 relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8" data-heading-id="about-title" style={{fontFamily: 'var(--font-heading)'}}>
                        About The Studio
                    </h2>
<p className="text-base md:text-lg opacity-80 mb-6 font-light leading-relaxed">
                        Born from a desire to break rigid grid systems, Liquid Flow Studio is a collective of designers, developers, and strategists who view the web as a fluid canvas. We believe that digital platforms should adapt seamlessly to the user, much like water taking the shape of its container.
                    </p>
<p className="text-base md:text-lg opacity-80 mb-10 font-light leading-relaxed">
                        With over a decade of combined experience, our approach marries organic aesthetics with rigorous engineering. Our core mission is to build products that not only look stunning but perform flawlessly under the hood, ensuring your brand stands out in a crowded digital landscape.
                    </p>
<div className="grid grid-cols-2 gap-8 border-t border-[var(--text-color)]/10 pt-8">
<div>
<div className="text-4xl font-semibold text-[var(--accent-color)] mb-2" style={{fontFamily: 'var(--font-heading)'}}>150+</div>
<div className="text-sm opacity-70">Projects Launched</div>
</div>
<div>
<div className="text-4xl font-semibold text-[var(--secondary-color)] mb-2" style={{fontFamily: 'var(--font-heading)'}}>99%</div>
<div className="text-sm opacity-70">Client Satisfaction</div>
</div>
</div>
</div>
<div className="relative scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out order-1 md:order-2">

<div className="absolute -top-12 -left-8 md:-left-12 w-24 h-24 bg-[var(--secondary-color)] opacity-60 mix-blend-multiply animate-float animate-blob z-0 filter blur-sm"></div>
<div className="absolute -bottom-8 -right-4 md:-right-8 w-20 h-20 bg-[var(--accent-color)] opacity-60 mix-blend-multiply animate-float-delayed animate-blob z-20 filter blur-sm" style={{animationDuration: '9s'}}></div>

<div className="relative z-10 aspect-[4/5] rounded-[2rem_4rem_2rem_4rem] overflow-hidden bg-[var(--bg-color)] p-4 md:p-8 hover:rounded-[4rem_2rem_4rem_2rem] transition-all duration-1000" style={{boxShadow: '0 24px 64px -16px rgba(0,0,0,0.08)'}}>
<div className="w-full h-full rounded-[1.5rem_3rem_1.5rem_3rem] hover:rounded-[3rem_1.5rem_3rem_1.5rem] transition-all duration-1000 bg-gradient-to-br from-[var(--surface-color)] to-[var(--bg-color)] border border-[var(--text-color)]/5 flex flex-col justify-between p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-[var(--accent-color)] opacity-5 transition-transform duration-700 group-hover:scale-110"></div>
<div className="flex justify-between items-start relative z-10">
<iconify-icon className="text-4xl text-[var(--secondary-color)]" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-12 h-12 rounded-[40%_60%_70%_30%] border border-[var(--text-color)]/10 flex items-center justify-center backdrop-blur-sm group-hover:rounded-[60%_40%_30%_70%] transition-all duration-700">
<iconify-icon className="text-xl" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-auto">
<div className="text-xs font-semibold uppercase tracking-widest opacity-60 mb-2">Our Philosophy</div>
<div className="text-xl md:text-2xl font-medium leading-tight tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Form strictly follows fluid function.</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[99%] text-[var(--surface-color)] pointer-events-none z-10">
<svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>
</section>

<section className="py-32 md:py-48 px-6 relative overflow-hidden" id="services">

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] opacity-10 bg-[var(--accent-color)] blur-[120px] mix-blend-multiply animate-blob pointer-events-none z-0" style={{animationDuration: '15s'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-heading-id="services-title" style={{fontFamily: 'var(--font-heading)'}}>
                        Our Services
                    </h2>
<p className="text-base opacity-80 font-light">We offer end-to-end digital solutions designed to adapt, scale, and captivate across every touchpoint.</p>
</div>
<div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[3rem_1rem_3rem_1rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '100ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--accent-color)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>UI/UX Design</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Crafting intuitive, accessible, and emotionally engaging interfaces tailored to user psychology and behavior patterns.</p>
<div className="flex items-center text-sm font-medium text-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[1rem_3rem_1rem_3rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '200ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[60%_40%_30%_70%] group-hover:rounded-[40%_60%_70%_30%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--secondary-color)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Web Development</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Building lightning-fast, scalable architectures using the latest modern web technologies and headless CMS setups.</p>
<div className="flex items-center text-sm font-medium text-[var(--secondary-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[3rem_1rem_3rem_1rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '300ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--text-color)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Digital Strategy</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Data-driven roadmaps, technical consulting, and content architectures to position your brand effectively.</p>
<div className="flex items-center text-sm font-medium text-[var(--text-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[1rem_3rem_1rem_3rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '400ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[60%_40%_30%_70%] group-hover:rounded-[40%_60%_70%_30%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--text-color)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:smartphone-update-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>App Design</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Designing native iOS and Android experiences that retain users through seamless micro-interactions.</p>
<div className="flex items-center text-sm font-medium text-[var(--text-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[3rem_1rem_3rem_1rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '500ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--accent-color)] group-hover:scale-110 group-hover:rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:ruler-pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Brand Identity</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Developing cohesive visual systems, logos, and brand guidelines that resonate across all digital mediums.</p>
<div className="flex items-center text-sm font-medium text-[var(--accent-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>

<div className="group p-8 md:p-10 rounded-[2rem] hover:rounded-[1rem_3rem_1rem_3rem] bg-[var(--surface-color)] hover:-translate-y-2 transition-all duration-700 scroll-reveal opacity-0 translate-y-8 ease-out cursor-pointer border border-transparent hover:border-[var(--text-color)]/5" style={{transitionDelay: '600ms', boxShadow: '0 4px 24px -8px rgba(0,0,0,0.03)'}}>
<div className="w-16 h-16 rounded-[60%_40%_30%_70%] group-hover:rounded-[40%_60%_70%_30%] bg-[var(--bg-color)] flex items-center justify-center mb-8 text-[var(--secondary-color)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-700 shadow-sm">
<iconify-icon className="text-3xl" icon="solar:video-frame-play-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Motion Design</h3>
<p className="text-sm md:text-base opacity-70 leading-relaxed font-light mb-6">Bringing interfaces to life with purposeful animations, 3D elements, and engaging storytelling.</p>
<div className="flex items-center text-sm font-medium text-[var(--secondary-color)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <iconify-icon className="ml-2" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[var(--surface-color)] relative overflow-hidden" id="portfolio">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] text-[var(--surface-color)] rotate-180 pointer-events-none">
<svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>

<div className="absolute top-1/4 right-0 translate-x-1/4 w-[700px] h-[700px] opacity-10 bg-[var(--text-color)] blur-[120px] mix-blend-multiply animate-blob pointer-events-none z-0" style={{animationDuration: '18s'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-heading-id="portfolio-title" style={{fontFamily: 'var(--font-heading)'}}>
                            Selected Works
                        </h2>
<p className="text-base opacity-80 font-light">A curated showcase of our recent digital transformations, from e-commerce to deep web applications.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium pb-2 border-b border-[var(--text-color)]/30 hover:border-[var(--text-color)] transition-colors w-fit group">
                        View Full Archive
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-6 md:gap-8">

<a className="group block relative rounded-3xl hover:rounded-[3rem_1rem_3rem_1rem] overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out aspect-square md:aspect-[4/3] bg-[var(--bg-color)]" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-color)] to-[var(--bg-color)] opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0"></div>
<div className="absolute inset-4 md:inset-8 bg-[var(--surface-color)] rounded-2xl group-hover:rounded-[2rem_1rem_2rem_1rem] shadow-sm border border-[var(--text-color)]/5 flex items-center justify-center z-10 transition-all duration-700 group-hover:scale-[1.02]">
<iconify-icon className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-700" icon="solar:gallery-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8 text-white">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Lumina FinTech</h3>
<p className="text-sm opacity-80 font-light">Brand Identity &amp; App Design</p>
</div>
</div>
</a>

<a className="group block relative rounded-3xl hover:rounded-[1rem_3rem_1rem_3rem] overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out aspect-square md:aspect-[4/3] bg-[var(--bg-color)] md:translate-y-12" href="#">
<div className="absolute inset-0 bg-gradient-to-bl from-[var(--accent-color)] to-[var(--bg-color)] opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0"></div>
<div className="absolute inset-4 md:inset-8 bg-[var(--surface-color)] rounded-2xl group-hover:rounded-[1rem_2rem_1rem_2rem] shadow-sm border border-[var(--text-color)]/5 flex items-center justify-center z-10 transition-all duration-700 group-hover:scale-[1.02]">
<iconify-icon className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-700" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8 text-white">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Aura Commerce</h3>
<p className="text-sm opacity-80 font-light">E-Commerce Architecture</p>
</div>
</div>
</a>

<a className="group block relative rounded-3xl hover:rounded-[1rem_3rem_1rem_3rem] overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out aspect-square md:aspect-[4/3] bg-[var(--bg-color)] mt-0 md:mt-12" href="#">
<div className="absolute inset-0 bg-gradient-to-tr from-[var(--text-color)] to-[var(--bg-color)] opacity-10 group-hover:opacity-20 transition-opacity duration-700 z-0"></div>
<div className="absolute inset-4 md:inset-8 bg-[var(--surface-color)] rounded-2xl group-hover:rounded-[1rem_2rem_1rem_2rem] shadow-sm border border-[var(--text-color)]/5 flex items-center justify-center z-10 transition-all duration-700 group-hover:scale-[1.02]">
<iconify-icon className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-700" icon="solar:widget-5-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8 text-white">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Nexus Dashboard</h3>
<p className="text-sm opacity-80 font-light">SaaS Web Application</p>
</div>
</div>
</a>

<a className="group block relative rounded-3xl hover:rounded-[3rem_1rem_3rem_1rem] overflow-hidden scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out aspect-square md:aspect-[4/3] bg-[var(--bg-color)] mt-0 md:translate-y-12 md:mt-12" href="#">
<div className="absolute inset-0 bg-gradient-to-tl from-[var(--secondary-color)] to-[var(--bg-color)] opacity-20 group-hover:opacity-40 transition-opacity duration-700 z-0"></div>
<div className="absolute inset-4 md:inset-8 bg-[var(--surface-color)] rounded-2xl group-hover:rounded-[2rem_1rem_2rem_1rem] shadow-sm border border-[var(--text-color)]/5 flex items-center justify-center z-10 transition-all duration-700 group-hover:scale-[1.02]">
<iconify-icon className="text-5xl opacity-20 group-hover:scale-110 transition-transform duration-700" icon="solar:play-stream-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8 text-white">
<div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<h3 className="text-2xl font-semibold mb-2 tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Vibe Streaming</h3>
<p className="text-sm opacity-80 font-light">Immersive Web Experience</p>
</div>
</div>
</a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[99%] text-[var(--surface-color)] pointer-events-none z-10">
<svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>
</section>

<section className="py-32 md:py-48 px-6 relative mt-16 md:mt-32 overflow-hidden" id="testimonials">

<div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] opacity-10 bg-[var(--secondary-color)] blur-[100px] mix-blend-multiply animate-blob pointer-events-none z-0" style={{animationDuration: '12s'}}></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20 scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6" data-heading-id="testimonials-title" style={{fontFamily: 'var(--font-heading)'}}>
                        Client Perspectives
                    </h2>
<p className="text-base opacity-80 font-light">Don't just take our word for it. Hear from the partners we've helped elevate.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out bg-[var(--surface-color)] hover:bg-[var(--bg-color)] p-8 md:p-10 rounded-[2rem] hover:rounded-[3rem_1rem_3rem_1rem] border border-[var(--text-color)]/5 group">
<iconify-icon className="text-4xl text-[var(--accent-color)] opacity-50 mb-6 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-light leading-relaxed mb-10" style={{fontFamily: 'var(--font-heading)'}}>
                            "Liquid Flow Studio completely reimagined our digital presence. Their attention to detail and fluid design principles resulted in an experience that increased our engagement by over 200%."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] transition-all duration-700 bg-[var(--surface-color)] border border-[var(--text-color)]/10 flex items-center justify-center">
<span className="text-sm font-semibold" style={{fontFamily: 'var(--font-heading)'}}>EH</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Elena Hayes</div>
<div className="text-xs opacity-70 font-light">CMO, Lumina FinTech</div>
</div>
</div>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out bg-[var(--surface-color)] hover:bg-[var(--bg-color)] p-8 md:p-10 rounded-[2rem] hover:rounded-[1rem_3rem_1rem_3rem] border border-[var(--text-color)]/5 group">
<iconify-icon className="text-4xl text-[var(--secondary-color)] opacity-50 mb-6 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-light leading-relaxed mb-10" style={{fontFamily: 'var(--font-heading)'}}>
                            "The team delivered a complex e-commerce architecture that felt effortless on the front-end. They truly understand how to merge robust engineering with striking visual aesthetics."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-[60%_40%_30%_70%] group-hover:rounded-[40%_60%_70%_30%] transition-all duration-700 bg-[var(--surface-color)] border border-[var(--text-color)]/10 flex items-center justify-center">
<span className="text-sm font-semibold" style={{fontFamily: 'var(--font-heading)'}}>MC</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Marcus Chen</div>
<div className="text-xs opacity-70 font-light">Founder, Aura Commerce</div>
</div>
</div>
</div>

<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-200 ease-out bg-[var(--surface-color)] hover:bg-[var(--bg-color)] p-8 md:p-10 rounded-[2rem] hover:rounded-[3rem_1rem_3rem_1rem] border border-[var(--text-color)]/5 group">
<iconify-icon className="text-4xl text-[var(--text-color)] opacity-30 mb-6 group-hover:scale-110 transition-transform duration-500" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-lg md:text-xl font-light leading-relaxed mb-10" style={{fontFamily: 'var(--font-heading)'}}>
                            "Working with LFS was a breath of fresh air. They challenged our initial assumptions and guided us toward a product solution that perfectly fits our user base. Highly recommended."
                        </p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] transition-all duration-700 bg-[var(--surface-color)] border border-[var(--text-color)]/10 flex items-center justify-center">
<span className="text-sm font-semibold" style={{fontFamily: 'var(--font-heading)'}}>SJ</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'var(--font-heading)'}}>Sarah Jenkins</div>
<div className="text-xs opacity-70 font-light">Product VP, Nexus</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 px-6 bg-[var(--text-color)] text-[var(--bg-color)] relative selection:bg-[var(--accent-color)] selection:text-white mt-16 md:mt-32 overflow-hidden" id="contact">

<div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%] text-[var(--text-color)] rotate-180 pointer-events-none z-10">
<svg className="relative block w-[calc(100%+1.3px)] h-[40px] md:h-[80px]" preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
</svg>
</div>

<div className="absolute bottom-0 left-1/4 -translate-x-1/2 w-[800px] h-[800px] opacity-20 bg-[var(--accent-color)] blur-[150px] mix-blend-screen animate-blob pointer-events-none z-0" style={{animationDuration: '20s'}}></div>
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 relative z-10">
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6" data-heading-id="contact-title" style={{fontFamily: 'var(--font-heading)'}}>
                        Start a Conversation
                    </h2>
<p className="text-base md:text-lg opacity-70 mb-12 font-light max-w-md leading-relaxed">
                        Ready to make waves? Let's discuss your next project. Fill out the form or reach us directly at our design studio.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group w-fit" href="mailto:hello@liquidflow.studio">
<div className="w-12 h-12 rounded-[40%_60%_70%_30%] group-hover:rounded-[60%_40%_30%_70%] transition-all duration-500 border border-[var(--bg-color)]/20 flex items-center justify-center group-hover:bg-[var(--accent-color)] group-hover:border-[var(--accent-color)]">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm md:text-base font-light group-hover:opacity-80 transition-opacity">hello@liquidflow.studio</span>
</a>
<a className="flex items-center gap-4 group w-fit" href="#">
<div className="w-12 h-12 rounded-[60%_40%_30%_70%] group-hover:rounded-[40%_60%_70%_30%] transition-all duration-500 border border-[var(--bg-color)]/20 flex items-center justify-center group-hover:bg-[var(--secondary-color)] group-hover:border-[var(--secondary-color)]">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-sm md:text-base font-light group-hover:opacity-80 transition-opacity">Portland, Oregon Studio</span>
</a>
</div>
</div>
<div className="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 delay-100 ease-out">
<form className="space-y-8" id="contact-form">
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-[var(--bg-color)]/30 py-3 text-base focus:outline-none focus:border-[var(--accent-color)] transition-colors font-light placeholder-transparent" id="name" placeholder="Name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs opacity-50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--accent-color)] cursor-text" htmlFor="name">Full Name</label>
</div>
<div className="relative group">
<input className="peer w-full bg-transparent border-b border-[var(--bg-color)]/30 py-3 text-base focus:outline-none focus:border-[var(--accent-color)] transition-colors font-light placeholder-transparent" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs opacity-50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--accent-color)] cursor-text" htmlFor="email">Email Address</label>
</div>
<div className="relative group">
<textarea className="peer w-full bg-transparent border-b border-[var(--bg-color)]/30 py-3 text-base focus:outline-none focus:border-[var(--accent-color)] transition-colors font-light placeholder-transparent resize-none" id="message" placeholder="Message" required="" rows="4"></textarea>
<label className="absolute left-0 -top-3.5 text-xs opacity-50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-[var(--accent-color)] cursor-text" htmlFor="message">Project Details</label>
</div>

<label className="flex items-center gap-4 cursor-pointer group w-fit">
<div className="relative">
<input className="sr-only peer" id="newsletter-toggle" type="checkbox"/>
<div className="w-10 h-6 bg-[var(--bg-color)]/10 rounded-full peer-focus-visible:ring-2 ring-[var(--accent-color)] peer-checked:bg-[var(--accent-color)] transition-colors duration-300 border border-[var(--bg-color)]/20 peer-checked:border-transparent"></div>
<div className="absolute left-1 top-1 w-4 h-4 bg-[var(--bg-color)] rounded-[40%_60%_70%_30%] peer-checked:rounded-[60%_40%_30%_70%] transition-all duration-300 peer-checked:translate-x-4 shadow-sm flex items-center justify-center"></div>
</div>
<span className="text-sm opacity-70 select-none font-light">Subscribe to studio insights &amp; updates</span>
</label>
<button className="w-full md:w-auto px-10 py-4 rounded-[40%_60%_70%_30%] hover:rounded-[60%_40%_30%_70%] bg-[var(--accent-color)] text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-500 flex items-center justify-center gap-3" style={{boxShadow: '0 8px 32px -8px var(--accent-color)'}} type="submit">
                            Send Message
                            <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="hidden text-sm text-[var(--secondary-color)] font-medium mt-4" id="form-success">
                            Message received. We'll be in touch shortly.
                        </div>
</form>
</div>
</div>

<div className="max-w-7xl mx-auto mt-32 md:mt-48 pt-16 border-t border-[var(--bg-color)]/10 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 relative z-10">
<div className="col-span-2 md:col-span-1">
<a aria-label="Home" className="text-xl font-semibold tracking-tighter text-[var(--bg-color)] mb-6 flex items-center gap-2 group w-fit" href="#" style={{fontFamily: 'var(--font-heading)'}}>
<div className="w-6 h-6 rounded-[40%_60%_70%_30%] bg-[var(--accent-color)] flex items-center justify-center text-white text-[10px] transition-all duration-500 group-hover:rounded-[60%_40%_30%_70%]">L</div>
                        LFS
                    </a>
<p className="text-sm font-light opacity-60 max-w-xs">Crafting liquid-smooth digital experiences for forward-thinking brands.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-6" style={{fontFamily: 'var(--font-heading)'}}>Studio</h4>
<div className="flex flex-col gap-4 text-sm font-light opacity-60">
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#about">About Us</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#portfolio">Our Work</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#testimonials">Client Stories</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#">Careers</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-6" style={{fontFamily: 'var(--font-heading)'}}>Services</h4>
<div className="flex flex-col gap-4 text-sm font-light opacity-60">
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#services">UI/UX Design</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#services">Web Development</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#services">Digital Strategy</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#services">Brand Identity</a>
</div>
</div>
<div>
<h4 className="text-sm font-semibold tracking-tight mb-6" style={{fontFamily: 'var(--font-heading)'}}>Connect</h4>
<div className="flex flex-col gap-4 text-sm font-light opacity-60">
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#">Twitter / X</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#">LinkedIn</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#">Instagram</a>
<a className="hover:opacity-100 hover:text-[var(--accent-color)] transition-colors w-fit" href="#">Dribbble</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[var(--bg-color)]/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light opacity-40 relative z-10">
<div>© 2024 Liquid Flow Studio. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:opacity-100 transition-opacity" href="#">Privacy Policy</a>
<a className="hover:opacity-100 transition-opacity" href="#">Terms of Service</a>
</div>
</div>
</section>
</main>

<div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none">

<div className="pointer-events-auto bg-white/95 backdrop-blur-md rounded-[2rem] p-6 w-80 shadow-2xl border border-stone-200 opacity-0 translate-y-8 scale-95 transition-all duration-500 hidden text-stone-800" id="editor-panel" style={{boxShadow: '0 16px 64px -12px rgba(0,0,0,0.15)'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="font-semibold text-sm tracking-tight font-sans">Theme Editor</h3>
<button className="text-stone-400 hover:text-stone-800 transition-colors focus:outline-none" id="close-editor">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="max-h-[60vh] overflow-y-auto pr-2 pb-2 space-y-6 font-sans">

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-3">Color Palette</label>
<div className="flex gap-2" id="color-selectors">

</div>
</div>

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-3">Typography</label>
<div className="grid grid-cols-1 gap-2" id="font-selectors">

</div>
</div>

<div>
<label className="block text-xs font-medium text-stone-500 uppercase tracking-widest mb-3">Headings</label>
<div className="space-y-3" id="heading-editors">

</div>
</div>
</div>
</div>

<button aria-label="Open Theme Editor" className="pointer-events-auto w-14 h-14 rounded-[40%_60%_70%_30%] hover:rounded-[60%_40%_30%_70%] bg-stone-900 text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ring-stone-900 z-50 group animate-blob" id="editor-toggle">
<iconify-icon className="text-2xl group-hover:rotate-12 transition-transform duration-300" icon="solar:pallete-2-linear"></iconify-icon>
</button>
</div>



    </>
  );
}
