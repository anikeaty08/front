import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
bgPrimary: '#0A0A0A',
bgSecondary: '#111111',
surface: '#161616',
accent: '#C8A96E',
textPrimary: '#F5F5F5',
textSecondary: '#888888',
borderSubtle: '#222222',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
spacing: {
'section-desktop': '120px',
'section-mobile': '72px',
},
animation: {
'scroll-up': 'scrollUp 30s linear infinite',
'scroll-down': 'scrollDown 40s linear infinite',
},
keyframes: {
scrollUp: {
'0%': { transform: 'translateY(0)' },
'100%': { transform: 'translateY(-50%)' },
},
scrollDown: {
'0%': { transform: 'translateY(-50%)' },
'100%': { transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Data & Translations
        const faqs = [
            { pt: { q: "Quanto custa uma tatuagem?", a: "O valor mínimo do estúdio é 80€. O preço final depende do tamanho, detalhe e tempo de execução. Para um orçamento preciso, preenche o formulário com a tua ideia." }, en: { q: "How much does a tattoo cost?", a: "Our studio minimum is €80. The final price depends on size, detail, and execution time. For an accurate quote, please fill out the form with your idea." } },
            { pt: { q: "Como funciona o processo de marcação?", a: "Após submeteres o pedido, analisamos a tua ideia e o artista ideal entrará em contacto para discutir detalhes, dar orçamento e agendar a sessão mediante pagamento de depósito." }, en: { q: "How does the booking process work?", a: "After submitting your request, we review your idea and the ideal artist will contact you to discuss details, provide a quote, and schedule the session upon payment of a deposit." } },
            { pt: { q: "Qual é o depósito necessário?", a: "Pedimos um depósito não reembolsável de 50€ (ou mais para peças grandes) para garantir a data. O valor é deduzido no total da tatuagem." }, en: { q: "What deposit is required?", a: "We require a non-refundable deposit of €50 (or more for large pieces) to secure your date. This amount is deducted from the total cost of the tattoo." } },
            { pt: { q: "A tatuagem dói muito?", a: "A dor é subjectiva e varia de pessoa para pessoa e dependendo da zona do corpo. No entanto, é totalmente suportável e a nossa equipa fará tudo para que estejas confortável." }, en: { q: "Does getting a tattoo hurt?", a: "Pain is subjective and varies from person to person and depending on the body placement. However, it is completely bearable and our team will do everything to keep you comfortable." } },
            { pt: { q: "Como me devo preparar para a sessão?", a: "Descansa bem, come uma boa refeição antes de vires, bebe água e não consumas álcool ou drogas nas 24h anteriores. Traz roupa confortável e que facilite o acesso à zona a tatuar." }, en: { q: "How should I prepare for my session?", a: "Rest well, eat a good meal before coming, drink water, and do not consume alcohol or drugs in the 24 hours prior. Wear comfortable clothing that allows easy access to the area being tattooed." } },
            { pt: { q: "Quanto tempo demora a cicatrização?", a: "A cicatrização superficial demora cerca de 2 a 3 semanas. A cicatrização total por baixo da pele pode demorar até 2 meses." }, en: { q: "How long does healing take?", a: "Superficial healing takes about 2 to 3 weeks. Full healing beneath the skin can take up to 2 months." } },
            { pt: { q: "Como cuidar da tatuagem depois?", a: "No final da sessão damos-te todas as instruções por escrito. Resumidamente: manter limpo, hidratar com moderação, não coçar e evitar sol, mar e piscinas no primeiro mês." }, en: { q: "How do I care for my tattoo afterwards?", a: "At the end of the session, we will give you full written instructions. Briefly: keep it clean, moisturise moderately, do not scratch, and avoid sun, sea, and pools for the first month." } },
            { pt: { q: "Fazem coverups de tatuagens antigas?", a: "Sim, somos especialistas em coverups. Teremos de avaliar a tatuagem existente pessoalmente para perceber o que é possível fazer." }, en: { q: "Do you do cover-ups of old tattoos?", a: "Yes, we specialize in cover-ups. We will need to evaluate the existing tattoo in person to understand what is possible." } },
            { pt: { q: "Aceitam menores de 18 anos?", a: "Não. Por razões legais e éticas, tatuamos apenas pessoas maiores de 18 anos, mesmo com autorização parental." }, en: { q: "Do you accept clients under 18?", a: "No. For legal and ethical reasons, we only tattoo individuals over 18 years of age, even with parental consent." } },
            { pt: { q: "Posso trazer imagens de inspiração?", a: "Sim, as imagens de referência são óptimas para percebermos o teu gosto. No entanto, não copiamos o trabalho de outros artistas; criaremos um design único baseado nas tuas referências." }, en: { q: "Can I bring reference images?", a: "Yes, reference images are great for us to understand your taste. However, we do not copy other artists' work; we will create a unique design based on your references." } }
        ];

        const translations = {
            pt: {
                nav_about: "Sobre", nav_services: "Serviços", nav_artists: "Artistas", nav_gallery: "Galeria", nav_faq: "FAQ", nav_book: "Marcar",
                hero_eyebrow: "ESTÚDIO DE TATUAGEM", hero_heading: "ARTE PERMANENTE EM LISBOA", hero_subheading: "Arte permanente criada para contar a tua história.",
                hero_cta_primary: "Marcar Consulta", hero_cta_secondary: "Ver Galeria", hero_info_hours: "Aberto todos os dias · 10:00 – 20:00", hero_info_location: "Rua da Misericórdia 14, Lisboa",
                about_eyebrow: "SOBRE NÓS", about_heading: "O melhor estúdio de tatuagem em Lisboa",
                about_p1: "Na NOIR, acreditamos que uma tatuagem é mais do que tinta na pele — é uma expressão da tua identidade. O nosso estúdio foi desenhado para ser um espaço de criatividade, conforto e segurança.",
                about_p2: "Com uma equipa de artistas premiados, dedicamo-nos a criar peças únicas. Não trabalhamos com catálogos; cada design é concebido à medida, respeitando a anatomia e a visão de cada cliente.",
                about_p3: "A nossa prioridade é garantir uma experiência premium desde o primeiro contacto até à cicatrização final, operando sob os mais rigorosos padrões de higiene hospitalar.",
                about_value1: "Higiene & Segurança", about_value2: "Arte Personalizada", about_value3: "Experiência Premium",
                about_time1: "2018 Fundação", about_time2: "2021 Expansão", about_time3: "2023 Prémios",
                artists_eyebrow: "OS NOSSOS ARTISTAS", artists_heading: "EQUIPA DE TALENTO", artists_cta: "Marcar com um Artista",
                artist_spec_realism: "Realismo", artist_spec_watercolor: "Aquarela", artist_spec_geometric: "Geométrico",
                services_eyebrow: "SERVIÇOS", services_heading: "O QUE OFERECEMOS",
                service1_title: "Tatuagem Personalizada", service1_desc: "Do conceito ao traço final, cada peça é única.",
                service2_title: "Coverup & Correção", service2_desc: "Transformamos tatuagens antigas em obras de arte.",
                service3_title: "Retoque", service3_desc: "Mantemos as tuas tatuagens perfeitas ao longo do tempo.",
                service4_title: "Consultoria Gratuita", service4_desc: "Primeira conversa sem compromisso. Vem conhecer-nos.",
                gallery_eyebrow: "GALERIA", gallery_heading: "EXPLORE O NOSSO TRABALHO",
                filter_all: "Todos", filter_realism: "Realismo", filter_watercolour: "Aquarela", filter_colour: "Colorido",
                reviews_eyebrow: "AVALIAÇÕES", reviews_heading: "Os nossos clientes adoram-nos", reviews_badge: "4.9 · +200 avaliações Google",
                rev1_text: `"A experiência foi incrível do início ao fim. O artista percebeu exactamente o que eu queria e o resultado superou todas as expectativas."`,
                rev2_text: `"Ambiente profissional, higiene impecável e um trabalho de qualidade impressionante. Recomendo a qualquer pessoa."`,
                rev3_text: `"O estúdio é lindo e a equipa super atenciosa. Fizeram-me sentir super confortável na minha primeira tatuagem."`,
                rev4_text: `"Fiz um coverup que parecia impossível e o resultado ficou perfeito. Verdadeiros mestres naquilo que fazem."`,
                rev5_text: `"Traço finíssimo e muita atenção aos detalhes. Não podia estar mais satisfeita com a minha nova peça."`,
                rev6_text: `"Serviço premium desde a marcação até aos cuidados pós-tatuagem. Voltarei certamente para mais projectos."`,
                faq_eyebrow: "FAQ", faq_heading: "Perguntas Frequentes", faq_aftercare_heading: "Cuidados Pós-Tatuagem",
                aftercare_1: "Limpar", aftercare_2: "Hidratar", aftercare_3: "Não coçar", aftercare_4: "Evitar sol", aftercare_5: "Revisão ao 1º mês",
                contact_eyebrow: "CONTACTO", contact_heading: "Pronto para a tua próxima tatuagem?",
                form_name: "Nome Completo *", form_phone: "Telefone *", form_service: "Serviço *", form_select: "Selecione...",
                form_opt_tattoo: "Tatuagem", form_opt_coverup: "Coverup", form_opt_touchup: "Retoque", form_opt_consult: "Consultoria",
                form_artist: "Artista *", form_opt_no_pref: "Sem preferência", form_placement: "Zona do Corpo *",
                form_body_arm: "Braço", form_body_leg: "Perna", form_body_chest: "Peito", form_body_back: "Costas", form_body_neck: "Pescoço", form_body_other: "Outro",
                form_inspiration: "Inspiração", form_upload: "Clique para anexar imagens", form_idea_label: "Ideia",
                form_idea_ph: "Descreve a tua ideia...", form_age: "Confirmo que tenho 18 anos ou mais *", form_submit: "Submeter Pedido", form_success: "Pedido enviado! Entraremos em contacto em 24h.",
                info_hours_label: "Horário", info_hours: "Segunda a Domingo · 10:00 – 20:00", info_address: "Rua da Misericórdia 14, Lisboa",
                footer_tagline: "Arte permanente. Memórias para a vida.", footer_policy: "Política de Depósitos", footer_copyright: "© 2025 NOIR TATTOO · Lisboa, Portugal · Todos os direitos reservados",
                modal_title: "Política de Depósitos",
                modal_p1: "Para garantir a sua marcação, é necessário o pagamento de um depósito não reembolsável no valor de 50€.",
                modal_p2: "Este valor será deduzido no preço final da tatuagem no dia da sessão.",
                modal_p3: "Remarcações devem ser feitas com pelo menos 48h de antecedência. Cancelamentos ou não comparência resultam na perda do depósito."
            },
            en: {
                nav_about: "About", nav_services: "Services", nav_artists: "Artists", nav_gallery: "Gallery", nav_faq: "FAQ", nav_book: "Book",
                hero_eyebrow: "TATTOO STUDIO", hero_heading: "PERMANENT ART IN LISBON", hero_subheading: "Permanent art crafted to tell your story.",
                hero_cta_primary: "Book Consultation", hero_cta_secondary: "View Gallery", hero_info_hours: "Open every day · 10:00 AM – 8:00 PM", hero_info_location: "Rua da Misericórdia 14, Lisbon",
                about_eyebrow: "ABOUT US", about_heading: "Lisbon's premier tattoo studio",
                about_p1: "At NOIR, we believe a tattoo is more than ink on skin — it's an expression of your identity. Our studio was designed to be a space of creativity, comfort, and safety.",
                about_p2: "With a team of award-winning artists, we are dedicated to creating unique pieces. We don't work from catalogs; every design is custom-made, respecting anatomy and the client's vision.",
                about_p3: "Our priority is to ensure a premium experience from the first contact to the final healing, operating under the strictest hospital-grade hygiene standards.",
                about_value1: "Hygiene & Safety", about_value2: "Custom Artwork", about_value3: "Premium Experience",
                about_time1: "2018 Founded", about_time2: "2021 Expansion", about_time3: "2023 Awards",
                artists_eyebrow: "OUR ARTISTS", artists_heading: "TALENTED TEAM", artists_cta: "Book with an Artist",
                artist_spec_realism: "Realism", artist_spec_watercolor: "Watercolour", artist_spec_geometric: "Geometric",
                services_eyebrow: "SERVICES", services_heading: "WHAT WE OFFER",
                service1_title: "Custom Tattoo", service1_desc: "From concept to final line, every piece is one of a kind.",
                service2_title: "Cover-up & Correction", service2_desc: "We transform old tattoos into works of art.",
                service3_title: "Touch-up", service3_desc: "We keep your tattoos looking perfect over time.",
                service4_title: "Free Consultation", service4_desc: "A no-commitment first conversation. Come meet us.",
                gallery_eyebrow: "GALLERY", gallery_heading: "EXPLORE OUR WORK",
                filter_all: "All", filter_realism: "Realism", filter_watercolour: "Watercolour", filter_colour: "Colour",
                reviews_eyebrow: "REVIEWS", reviews_heading: "Our clients love us", reviews_badge: "4.9 · 200+ Google reviews",
                rev1_text: `"The experience was incredible from start to finish. The artist understood exactly what I wanted and the result exceeded all expectations."`,
                rev2_text: `"Professional environment, impeccable hygiene and impressive quality work. I recommend it to everyone."`,
                rev3_text: `"The studio is beautiful and the team is super attentive. They made me feel very comfortable for my first tattoo."`,
                rev4_text: `"I got a cover-up that seemed impossible and the result is perfect. True masters of their craft."`,
                rev5_text: `"Extremely fine lines and great attention to detail. Couldn't be happier with my new piece."`,
                rev6_text: `"Premium service from booking to aftercare. I will certainly return for more projects."`,
                faq_eyebrow: "FAQ", faq_heading: "Frequently Asked Questions", faq_aftercare_heading: "Tattoo Aftercare",
                aftercare_1: "Clean", aftercare_2: "Moisturise", aftercare_3: "Don't scratch", aftercare_4: "Avoid sun", aftercare_5: "1-month check-in",
                contact_eyebrow: "CONTACT", contact_heading: "Ready for your next tattoo?",
                form_name: "Full Name *", form_phone: "Phone *", form_service: "Service *", form_select: "Select...",
                form_opt_tattoo: "Tattoo", form_opt_coverup: "Cover-up", form_opt_touchup: "Touch-up", form_opt_consult: "Consultation",
                form_artist: "Artist *", form_opt_no_pref: "No preference", form_placement: "Body Placement *",
                form_body_arm: "Arm", form_body_leg: "Leg", form_body_chest: "Chest", form_body_back: "Back", form_body_neck: "Neck", form_body_other: "Other",
                form_inspiration: "Reference images", form_upload: "Click to attach images", form_idea_label: "Idea",
                form_idea_ph: "Describe your idea...", form_age: "I confirm I am 18 years of age or older *", form_submit: "Submit Request", form_success: "Request sent! We'll be in touch within 24 hours.",
                info_hours_label: "Hours", info_hours: "Monday to Sunday · 10:00 AM – 8:00 PM", info_address: "Rua da Misericórdia 14, Lisbon",
                footer_tagline: "Permanent art. Memories for life.", footer_policy: "Deposit Policy", footer_copyright: "© 2025 NOIR TATTOO · Lisbon, Portugal · All rights reserved",
                modal_title: "Deposit Policy",
                modal_p1: "To secure your booking, a non-refundable deposit of €50 is required.",
                modal_p2: "This amount will be deducted from the final price of the tattoo on the day of the session.",
                modal_p3: "Rescheduling must be done at least 48 hours in advance. Cancellations or no-shows result in the loss of the deposit."
            }
        };

        // Render FAQs
        const faqContainer = document.getElementById('faq-container');
        const renderFaqs = (lang) => {
            faqContainer.innerHTML = faqs.map((faq, index) => `
                <div class="border-b border-borderSubtle bg-surface px-6">
                    <button class="w-full py-6 flex justify-between items-center focus:outline-none text-left" onclick="toggleFaq(this)">
                        <span class="font-serif text-lg md:text-xl tracking-tight pr-8">${faq[lang].q}</span>
                        <iconify-icon icon="solar:alt-arrow-down-linear" class="text-xl text-accent transition-transform duration-300 transform"></iconify-icon>
                    </button>
                    <div class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out">
                        <p class="pb-6 text-sm text-textSecondary leading-relaxed">${faq[lang].a}</p>
                    </div>
                </div>
            `).join('');
        };

        const toggleFaq = (btn) => {
            const content = btn.nextElementSibling;
            const icon = btn.querySelector('iconify-icon');
            const isOpen = content.style.maxHeight;

            // Close all
            document.querySelectorAll('#faq-container .max-h-0').forEach(el => {
                el.style.maxHeight = null;
                el.previousElementSibling.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + "px";
                icon.style.transform = 'rotate(180deg)';
            }
        };

        // Internationalization
        const setLanguage = (lang) => {
            document.documentElement.lang = lang === 'pt' ? 'pt-PT' : 'en-GB';
            
            // Update simple text nodes
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (translations[lang][key]) {
                    el.textContent = translations[lang][key];
                }
            });

            // Update placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (translations[lang][key]) {
                    el.placeholder = translations[lang][key];
                }
            });

            // Update URLs for smooth scroll depending on lang (optional UX detail, anchors work regardless if matched, but visual URL changes)
            // Re-render JS dynamic content
            renderFaqs(lang);

            // Update toggles UI
            document.getElementById('lang-pt').classList.toggle('text-textSecondary', lang !== 'pt');
            document.getElementById('lang-pt').classList.toggle('text-textPrimary', lang === 'pt');
            document.getElementById('lang-en').classList.toggle('text-textSecondary', lang !== 'en');
            document.getElementById('lang-en').classList.toggle('text-textPrimary', lang === 'en');
            
            document.querySelector('.mobile-lang-pt').classList.toggle('text-textSecondary', lang !== 'pt');
            document.querySelector('.mobile-lang-pt').classList.toggle('text-textPrimary', lang === 'pt');
            document.querySelector('.mobile-lang-en').classList.toggle('text-textSecondary', lang !== 'en');
            document.querySelector('.mobile-lang-en').classList.toggle('text-textPrimary', lang === 'en');

            localStorage.setItem('lang', lang);
        };

        // Init language
        const savedLang = localStorage.getItem('lang') || 'pt';
        setLanguage(savedLang);

        // Mobile Menu
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('translate-x-full');
            const icon = mobileMenu.classList.contains('translate-x-full') 
                ? 'solar:hamburger-menu-linear' 
                : 'solar:close-circle-linear';
            mobileMenuBtn.innerHTML = `<iconify-icon icon="${icon}" stroke-width="1.5"></iconify-icon>`;
        });

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                mobileMenuBtn.innerHTML = `<iconify-icon icon="solar:hamburger-menu-linear" stroke-width="1.5"></iconify-icon>`;
            });
        });

        // Sticky Nav Blur
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('glass-nav');
                nav.classList.remove('bg-transparent', 'border-transparent');
            } else {
                nav.classList.remove('glass-nav');
                nav.classList.add('bg-transparent', 'border-transparent');
            }
        });

        // Intersection Observer for Animations
        const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

        // Custom Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (window.innerWidth > 1024) {
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                cursorOutline.animate({ left: `${posX}px`, top: `${posY}px` }, { duration: 500, fill: "forwards" });
            });

            document.querySelectorAll('a, button, input, select, textarea, .gallery-item, label').forEach(el => {
                el.addEventListener('mouseenter', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)');
                el.addEventListener('mouseleave', () => cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)');
            });
        }

        // Gallery Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                filterBtns.forEach(b => {
                    b.classList.remove('active', 'border-borderSubtle', 'bg-surface', 'text-textPrimary');
                    b.classList.add('border-transparent', 'text-textSecondary');
                });
                btn.classList.add('active', 'border-borderSubtle', 'bg-surface', 'text-textPrimary');
                btn.classList.remove('border-transparent', 'text-textSecondary');

                const filterValue = btn.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => item.style.opacity = '1', 50);
                    } else {
                        item.style.opacity = '0';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });

        // Lightbox
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        let currentImageIndex = 0;
        let visibleGalleryItems = [];

        window.openLightbox = (element) => {
            visibleGalleryItems = Array.from(document.querySelectorAll('.gallery-item')).filter(el => el.style.display !== 'none');
            currentImageIndex = visibleGalleryItems.indexOf(element);
            const imgSrc = element.querySelector('img').src;
            // Remove sizing params for full res
            lightboxImg.src = imgSrc.split('?')[0]; 
            lightbox.classList.add('active');
        };

        window.closeLightbox = () => lightbox.classList.remove('active');

        document.getElementById('lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex + 1) % visibleGalleryItems.length;
            lightboxImg.src = visibleGalleryItems[currentImageIndex].querySelector('img').src.split('?')[0];
        });

        document.getElementById('lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            currentImageIndex = (currentImageIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
            lightboxImg.src = visibleGalleryItems[currentImageIndex].querySelector('img').src.split('?')[0];
        });

        // Form Submit Simulation
        document.getElementById('booking-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = document.getElementById('submit-btn');
            const originalText = btn.innerText;
            btn.innerText = '...';
            btn.classList.add('opacity-50');
            
            setTimeout(() => {
                document.getElementById('form-success').classList.remove('hidden');
                btn.innerText = originalText;
                btn.classList.remove('opacity-50');
                e.target.reset();
                setTimeout(() => document.getElementById('form-success').classList.add('hidden'), 5000);
            }, 1500);
        });

        // Carousel auto-scroll (subtle)
        const carousel = document.getElementById('reviews-carousel');
        let isHovered = false;
        carousel.addEventListener('mouseenter', () => isHovered = true);
        carousel.addEventListener('mouseleave', () => isHovered = false);
        
        setInterval(() => {
            if (!isHovered && window.innerWidth > 768) {
                if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    carousel.scrollBy({ left: 424, behavior: 'smooth' }); // card width + gap
                }
            }
        }, 5000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="cursor-dot hidden lg:block"></div>
<div className="cursor-outline hidden lg:block"></div>

<nav className="fixed w-full z-50 glass-nav transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-xl tracking-tighter uppercase font-semibold text-textPrimary hover:text-accent transition-colors" href="#">
                NOIR
            </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors" data-i18n="nav_about" href="#sobre">Sobre</a>
<a className="text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors" data-i18n="nav_services" href="#servicos">Serviços</a>
<a className="text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors" data-i18n="nav_artists" href="#artistas">Artistas</a>
<a className="text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors" data-i18n="nav_gallery" href="#galeria">Galeria</a>
<a className="text-xs uppercase tracking-widest text-textSecondary hover:text-textPrimary transition-colors" data-i18n="nav_faq" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center space-x-6">
<a className="text-xs text-textSecondary hover:text-textPrimary transition-colors" href="tel:+351912345678">+351 912 345 678</a>

<div className="flex items-center text-xs tracking-widest">
<button className="text-textPrimary font-medium transition-colors" id="lang-pt" onclick="setLanguage('pt')">PT</button>
<span className="mx-2 text-borderSubtle">|</span>
<button className="text-textSecondary hover:text-textPrimary transition-colors" id="lang-en" onclick="setLanguage('en')">EN</button>
</div>
<a className="border border-accent text-accent hover:bg-accent hover:text-bgPrimary text-xs uppercase tracking-widest px-5 py-2.5 transition-all duration-300 font-medium" data-i18n="nav_book" href="#contacto">
                    Marcar
                </a>
</div>

<button className="md:hidden text-2xl text-textPrimary focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-bgPrimary z-40 flex flex-col pt-24 px-6 pb-10 transform translate-x-full transition-transform duration-300 md:hidden" id="mobile-menu">
<div className="flex flex-col space-y-6 text-2xl font-serif tracking-tight uppercase">
<a className="mobile-link text-textSecondary hover:text-textPrimary" data-i18n="nav_about" href="#sobre">Sobre</a>
<a className="mobile-link text-textSecondary hover:text-textPrimary" data-i18n="nav_services" href="#servicos">Serviços</a>
<a className="mobile-link text-textSecondary hover:text-textPrimary" data-i18n="nav_artists" href="#artistas">Artistas</a>
<a className="mobile-link text-textSecondary hover:text-textPrimary" data-i18n="nav_gallery" href="#galeria">Galeria</a>
<a className="mobile-link text-textSecondary hover:text-textPrimary" data-i18n="nav_faq" href="#faq">FAQ</a>
</div>
<div className="mt-auto flex flex-col space-y-6">
<div className="flex items-center text-sm tracking-widest">
<button className="mobile-lang-pt text-textPrimary font-medium" onclick="setLanguage('pt')">PT</button>
<span className="mx-3 text-borderSubtle">|</span>
<button className="mobile-lang-en text-textSecondary" onclick="setLanguage('en')">EN</button>
</div>
<a className="mobile-link w-full text-center bg-accent text-bgPrimary py-4 text-xs uppercase tracking-widest font-medium" data-i18n="nav_book" href="#contacto">Marcar Consulta</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bgPrimary pt-20" id="hero">

<div className="absolute inset-0 opacity-40 marquee-container flex space-x-4 p-4 z-0">

<div className="w-1/4 flex flex-col space-y-4 animate-scroll-up">
<img alt="Tattoo detail" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1590246814883-58137357d363?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Tattoo artist" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Ink" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1560968962-d95a0695026c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<img alt="" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1590246814883-58137357d363?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="w-1/4 flex flex-col space-y-4 animate-scroll-down">
<img alt="Studio" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Tattoo machine" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1582298538104-fe2e2eb8d249?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Art" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<img alt="" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1582298538104-fe2e2eb8d249?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="w-1/4 hidden md:flex flex-col space-y-4 animate-scroll-up">
<img alt="Stencils" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1621255551322-26154d896434?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Tattooing" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1550604112-78d1de1ecbc6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Needle" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1589201946059-e9354db22f25?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<img alt="" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1621255551322-26154d896434?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1550604112-78d1de1ecbc6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>

<div className="w-1/4 hidden lg:flex flex-col space-y-4 animate-scroll-down">
<img alt="Art" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Detail" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1590246814883-58137357d363?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Artist" className="w-full h-96 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>

<img alt="" className="w-full h-80 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="" className="w-full h-64 object-cover rounded-sm grayscale" src="https://images.unsplash.com/photo-1590246814883-58137357d363?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-bgPrimary/80 via-bgPrimary/60 to-bgPrimary z-10"></div>
<div className="grain-overlay"></div>

<div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center fade-in-up">
<span className="text-xs uppercase tracking-[0.2em] text-accent mb-6 font-medium" data-i18n="hero_eyebrow">ESTÚDIO DE TATUAGEM</span>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase font-semibold leading-[0.9] mb-6" data-i18n="hero_heading">
                ARTE PERMANENTE EM LISBOA
            </h1>
<p className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" data-i18n="hero_subheading">
                Arte permanente criada para contar a tua história.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
<a className="bg-accent text-bgPrimary hover:bg-white px-8 py-4 text-xs uppercase tracking-widest font-medium transition-colors w-full sm:w-auto text-center" data-i18n="hero_cta_primary" href="#contacto">
                    Marcar Consulta
                </a>
<a className="border border-borderSubtle text-textPrimary hover:border-accent hover:text-accent px-8 py-4 text-xs uppercase tracking-widest font-medium transition-colors w-full sm:w-auto text-center bg-bgPrimary/50 backdrop-blur-sm" data-i18n="hero_cta_secondary" href="#galeria">
                    Ver Galeria
                </a>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full border-t border-borderSubtle bg-bgPrimary/80 backdrop-blur-md z-20 hidden md:block">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-xs text-textSecondary tracking-wide">
<span data-i18n="hero_info_hours">Aberto todos os dias · 10:00 – 20:00</span>
<span data-i18n="hero_info_location">Rua da Misericórdia 14, Lisboa</span>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgPrimary relative" id="sobre">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="relative fade-in-up">
<div className="aspect-[4/5] relative overflow-hidden rounded-sm">
<img alt="Interior do estúdio" className="w-full h-full object-cover grayscale opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-accent opacity-50 hidden md:block"></div>
</div>

<div className="flex flex-col fade-in-up" style={{transitionDelay: '100ms'}}>
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4" data-i18n="about_eyebrow">SOBRE NÓS</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold mb-8 text-textPrimary leading-none" data-i18n="about_heading">
                        O melhor estúdio de tatuagem em Lisboa
                    </h2>
<div className="space-y-6 text-textSecondary text-base leading-relaxed mb-12">
<p data-i18n="about_p1">Na NOIR, acreditamos que uma tatuagem é mais do que tinta na pele — é uma expressão da tua identidade. O nosso estúdio foi desenhado para ser um espaço de criatividade, conforto e segurança.</p>
<p data-i18n="about_p2">Com uma equipa de artistas premiados, dedicamo-nos a criar peças únicas. Não trabalhamos com catálogos; cada design é concebido à medida, respeitando a anatomia e a visão de cada cliente.</p>
<p data-i18n="about_p3">A nossa prioridade é garantir uma experiência premium desde o primeiro contacto até à cicatrização final, operando sob os mais rigorosos padrões de higiene hospitalar.</p>
</div>

<div className="grid grid-cols-3 gap-4 border-t border-borderSubtle pt-8 mb-8">
<div>
<span className="block text-accent mb-2"><iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon></span>
<span className="text-xs font-medium uppercase tracking-wider" data-i18n="about_value1">Higiene &amp; Segurança</span>
</div>
<div>
<span className="block text-accent mb-2"><iconify-icon className="text-2xl" icon="solar:pen-linear"></iconify-icon></span>
<span className="text-xs font-medium uppercase tracking-wider" data-i18n="about_value2">Arte Personalizada</span>
</div>
<div>
<span className="block text-accent mb-2"><iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon></span>
<span className="text-xs font-medium uppercase tracking-wider" data-i18n="about_value3">Experiência Premium</span>
</div>
</div>

<div className="flex space-x-8 text-xs text-textSecondary">
<div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-accent mr-2"></span><span data-i18n="about_time1">2018 Fundação</span></div>
<div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-borderSubtle mr-2"></span><span data-i18n="about_time2">2021 Expansão</span></div>
<div className="flex items-center"><span className="w-1.5 h-1.5 rounded-full bg-borderSubtle mr-2"></span><span data-i18n="about_time3">2023 Prémios</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgSecondary" id="artistas">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="artists_eyebrow">OS NOSSOS ARTISTAS</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary" data-i18n="artists_heading">EQUIPA DE TALENTO</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '0ms'}}>
<img alt="Lara Silva" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<h3 className="font-serif text-xl tracking-tight uppercase mb-1">Lara Silva</h3>
<p className="text-accent text-xs tracking-wider uppercase mb-3">Blackwork &amp; Fineline</p>
<a className="text-textSecondary text-xs hover:text-white flex items-center transition-colors" href="#">
<iconify-icon className="mr-1" icon="solar:user-linear"></iconify-icon> @lara.noir
                        </a>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '100ms'}}>
<img alt="Tomas Costa" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<h3 className="font-serif text-xl tracking-tight uppercase mb-1">Tomas Costa</h3>
<p className="text-accent text-xs tracking-wider uppercase mb-3" data-i18n="artist_spec_realism">Realismo</p>
<a className="text-textSecondary text-xs hover:text-white flex items-center transition-colors" href="#">
<iconify-icon className="mr-1" icon="solar:user-linear"></iconify-icon> @tomas.ink
                        </a>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '200ms'}}>
<img alt="Sofia Martins" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<h3 className="font-serif text-xl tracking-tight uppercase mb-1">Sofia Martins</h3>
<p className="text-accent text-xs tracking-wider uppercase mb-3" data-i18n="artist_spec_watercolor">Aquarela</p>
<a className="text-textSecondary text-xs hover:text-white flex items-center transition-colors" href="#">
<iconify-icon className="mr-1" icon="solar:user-linear"></iconify-icon> @sofia.arts
                        </a>
</div>
</div>

<div className="group relative aspect-[3/4] overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '300ms'}}>
<img alt="Hugo Alves" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-bgPrimary via-bgPrimary/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full">
<h3 className="font-serif text-xl tracking-tight uppercase mb-1">Hugo Alves</h3>
<p className="text-accent text-xs tracking-wider uppercase mb-3" data-i18n="artist_spec_geometric">Geométrico</p>
<a className="text-textSecondary text-xs hover:text-white flex items-center transition-colors" href="#">
<iconify-icon className="mr-1" icon="solar:user-linear"></iconify-icon> @hugo.geo
                        </a>
</div>
</div>
</div>
<div className="mt-16 text-center fade-in-up">
<a className="inline-block border border-borderSubtle hover:border-accent text-textPrimary hover:text-accent px-8 py-4 text-xs uppercase tracking-widest font-medium transition-colors" data-i18n="artists_cta" href="#contacto">
                    Marcar com um Artista
                </a>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgPrimary" id="servicos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 fade-in-up">
<div>
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="services_eyebrow">SERVIÇOS</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary" data-i18n="services_heading">O QUE OFERECEMOS</h2>
</div>
<div className="hidden md:block w-32 border-b border-borderSubtle mb-3"></div>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="group relative h-80 overflow-hidden rounded-sm bg-surface fade-in-up">
<img alt="Tatuagem Personalizada" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-bgPrimary/60 group-hover:bg-bgPrimary/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<iconify-icon className="text-3xl text-accent mb-4" icon="solar:pen-new-round-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight uppercase mb-2" data-i18n="service1_title">Tatuagem Personalizada</h3>
<p className="text-textSecondary text-sm transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300" data-i18n="service1_desc">Do conceito ao traço final, cada peça é única.</p>
</div>
</div>

<div className="group relative h-80 overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '100ms'}}>
<img alt="Coverup" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1560968962-d95a0695026c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-bgPrimary/60 group-hover:bg-bgPrimary/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<iconify-icon className="text-3xl text-accent mb-4" icon="solar:layers-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight uppercase mb-2" data-i18n="service2_title">Coverup &amp; Correção</h3>
<p className="text-textSecondary text-sm transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300" data-i18n="service2_desc">Transformamos tatuagens antigas em obras de arte.</p>
</div>
</div>

<div className="group relative h-80 overflow-hidden rounded-sm bg-surface fade-in-up">
<img alt="Retoque" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1550604112-78d1de1ecbc6?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-bgPrimary/60 group-hover:bg-bgPrimary/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<iconify-icon className="text-3xl text-accent mb-4" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight uppercase mb-2" data-i18n="service3_title">Retoque</h3>
<p className="text-textSecondary text-sm transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300" data-i18n="service3_desc">Mantemos as tuas tatuagens perfeitas ao longo do tempo.</p>
</div>
</div>

<div className="group relative h-80 overflow-hidden rounded-sm bg-surface fade-in-up" style={{transitionDelay: '100ms'}}>
<img alt="Consultoria" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-bgPrimary/60 group-hover:bg-bgPrimary/40 transition-colors duration-300"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end">
<iconify-icon className="text-3xl text-accent mb-4" icon="solar:chat-round-line-linear"></iconify-icon>
<h3 className="font-serif text-2xl tracking-tight uppercase mb-2" data-i18n="service4_title">Consultoria Gratuita</h3>
<p className="text-textSecondary text-sm transform translate-y-2 group-hover:translate-y-0 opacity-80 group-hover:opacity-100 transition-all duration-300" data-i18n="service4_desc">Primeira conversa sem compromisso. Vem conhecer-nos.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgSecondary" id="galeria">
<div className="max-w-[1440px] mx-auto px-6">
<div className="text-center mb-10 fade-in-up">
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="gallery_eyebrow">GALERIA</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary" data-i18n="gallery_heading">EXPLORE O NOSSO TRABALHO</h2>
</div>

<div className="flex flex-wrap justify-center gap-4 mb-12 fade-in-up">
<button className="filter-btn active text-xs uppercase tracking-widest px-4 py-2 border border-borderSubtle rounded-full text-textPrimary bg-surface transition-colors" data-filter="all" data-i18n="filter_all">Todos</button>
<button className="filter-btn text-xs uppercase tracking-widest px-4 py-2 border border-transparent text-textSecondary hover:text-textPrimary transition-colors" data-filter="blackwork">Blackwork</button>
<button className="filter-btn text-xs uppercase tracking-widest px-4 py-2 border border-transparent text-textSecondary hover:text-textPrimary transition-colors" data-filter="fineline">Fineline</button>
<button className="filter-btn text-xs uppercase tracking-widest px-4 py-2 border border-transparent text-textSecondary hover:text-textPrimary transition-colors" data-filter="realism" data-i18n="filter_realism">Realismo</button>
<button className="filter-btn text-xs uppercase tracking-widest px-4 py-2 border border-transparent text-textSecondary hover:text-textPrimary transition-colors" data-filter="watercolour" data-i18n="filter_watercolour">Aquarela</button>
<button className="filter-btn text-xs uppercase tracking-widest px-4 py-2 border border-transparent text-textSecondary hover:text-textPrimary transition-colors" data-filter="colour" data-i18n="filter_colour">Colorido</button>
</div>

<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4" id="gallery-grid">

<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="blackwork" onclick="openLightbox(this)">
<img alt="Blackwork Tattoo" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1590246814883-58137357d363?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Lara Silva</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="realism" onclick="openLightbox(this)">
<img alt="Realism Tattoo" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Tomas Costa</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="fineline" onclick="openLightbox(this)">
<img alt="Fineline" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Lara Silva</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="watercolour" onclick="openLightbox(this)">
<img alt="Watercolour" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1560968962-d95a0695026c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Sofia Martins</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="blackwork" onclick="openLightbox(this)">
<img alt="Blackwork" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Lara Silva</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="colour" onclick="openLightbox(this)">
<img alt="Colour" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1582298538104-fe2e2eb8d249?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Sofia Martins</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="realism" onclick="openLightbox(this)">
<img alt="Realism" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550604112-78d1de1ecbc6?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Tomas Costa</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="fineline" onclick="openLightbox(this)">
<img alt="Fineline" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1621255551322-26154d896434?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Hugo Alves</div>
</div>
<div className="gallery-item relative group overflow-hidden rounded-sm cursor-pointer mb-4 break-inside-avoid fade-in-up" data-category="blackwork" onclick="openLightbox(this)">
<img alt="Blackwork" className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1589201946059-e9354db22f25?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-bgPrimary/80 backdrop-blur-sm px-3 py-1.5 text-[10px] uppercase tracking-wider rounded-sm">Lara Silva</div>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-[100] bg-bgPrimary/95 backdrop-blur-md flex items-center justify-center" id="lightbox">
<button className="absolute top-6 right-6 text-white text-3xl hover:text-accent transition-colors" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors" id="lightbox-prev">
<iconify-icon icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<img alt="Gallery Image" className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl" id="lightbox-img" src=""/>
<button className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl hover:text-accent transition-colors" id="lightbox-next">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>

<section className="py-section-mobile md:py-section-desktop bg-bgPrimary overflow-hidden" id="avaliacoes">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 fade-in-up">
<div>
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="reviews_eyebrow">AVALIAÇÕES</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary" data-i18n="reviews_heading">Os nossos clientes adoram-nos</h2>
</div>
<div className="mt-4 md:mt-0 flex items-center space-x-2 bg-surface border border-borderSubtle px-4 py-2 rounded-full">
<span className="text-accent text-sm">★</span>
<span className="text-xs font-medium tracking-wide" data-i18n="reviews_badge">4.9 · +200 avaliações Google</span>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8" id="reviews-carousel">

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up">
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev1_text">"A experiência foi incrível do início ao fim. O artista percebeu exactamente o que eu queria e o resultado superou todas as expectativas."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">MC</div>
<span className="ml-3 text-sm font-medium">Mariana Costa</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up" style={{transitionDelay: '100ms'}}>
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev2_text">"Ambiente profissional, higiene impecável e um trabalho de qualidade impressionante. Recomendo a qualquer pessoa."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">TF</div>
<span className="ml-3 text-sm font-medium">Tiago Ferreira</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev3_text">"O estúdio é lindo e a equipa super atenciosa. Fizeram-me sentir super confortável na minha primeira tatuagem."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">AS</div>
<span className="ml-3 text-sm font-medium">Ana Silva</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up" style={{transitionDelay: '300ms'}}>
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev4_text">"Fiz um coverup que parecia impossível e o resultado ficou perfeito. Verdadeiros mestres naquilo que fazem."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">JP</div>
<span className="ml-3 text-sm font-medium">João Pedro</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up" style={{transitionDelay: '400ms'}}>
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev5_text">"Traço finíssimo e muita atenção aos detalhes. Não podia estar mais satisfeita com a minha nova peça."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">CG</div>
<span className="ml-3 text-sm font-medium">Catarina Gomes</span>
</div>
</div>

<div className="snap-start shrink-0 w-[85vw] md:w-[400px] bg-surface border border-borderSubtle p-8 rounded-sm fade-in-up" style={{transitionDelay: '500ms'}}>
<div className="flex text-accent text-sm mb-4">★★★★★</div>
<p className="text-textSecondary text-sm leading-relaxed mb-6" data-i18n="rev6_text">"Serviço premium desde a marcação até aos cuidados pós-tatuagem. Voltarei certamente para mais projectos."</p>
<div className="flex items-center">
<div className="w-10 h-10 rounded-full bg-borderSubtle flex items-center justify-center text-xs font-serif uppercase">RP</div>
<span className="ml-3 text-sm font-medium">Rui Pinto</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgSecondary" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="faq_eyebrow">FAQ</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary" data-i18n="faq_heading">Perguntas Frequentes</h2>
</div>

<div className="space-y-4 mb-20 fade-in-up" id="faq-container">

</div>

<div className="border-t border-borderSubtle pt-16 fade-in-up">
<h3 className="font-serif text-xl tracking-tight uppercase text-center mb-10" data-i18n="faq_aftercare_heading">Cuidados Pós-Tatuagem</h3>
<div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-accent mb-3"><iconify-icon className="text-xl" icon="solar:droplets-linear"></iconify-icon></div>
<span className="text-xs text-textSecondary uppercase tracking-wider" data-i18n="aftercare_1">Limpar</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-accent mb-3"><iconify-icon className="text-xl" icon="solar:hand-stars-linear"></iconify-icon></div>
<span className="text-xs text-textSecondary uppercase tracking-wider" data-i18n="aftercare_2">Hidratar</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-accent mb-3"><iconify-icon className="text-xl" icon="solar:forbidden-circle-linear"></iconify-icon></div>
<span className="text-xs text-textSecondary uppercase tracking-wider" data-i18n="aftercare_3">Não coçar</span>
</div>
<div className="flex flex-col items-center">
<div className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-accent mb-3"><iconify-icon className="text-xl" icon="solar:sun-linear"></iconify-icon></div>
<span className="text-xs text-textSecondary uppercase tracking-wider" data-i18n="aftercare_4">Evitar sol</span>
</div>
<div className="flex flex-col items-center col-span-2 md:col-span-1">
<div className="w-12 h-12 rounded-full bg-surface border border-borderSubtle flex items-center justify-center text-accent mb-3"><iconify-icon className="text-xl" icon="solar:calendar-check-linear"></iconify-icon></div>
<span className="text-xs text-textSecondary uppercase tracking-wider" data-i18n="aftercare_5">Revisão ao 1º mês</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-section-mobile md:py-section-desktop bg-bgPrimary relative" id="contacto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div className="fade-in-up">
<span className="text-xs uppercase tracking-[0.2em] text-textSecondary mb-4 block" data-i18n="contact_eyebrow">CONTACTO</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight uppercase font-semibold text-textPrimary mb-10" data-i18n="contact_heading">Pronto para a tua próxima tatuagem?</h2>
<form className="space-y-6" id="booking-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_name">Nome Completo *</label>
<input className="w-full px-4 py-3 text-sm focus:ring-0" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2">Email *</label>
<input className="w-full px-4 py-3 text-sm focus:ring-0" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_phone">Telefone *</label>
<input className="w-full px-4 py-3 text-sm focus:ring-0" required="" type="tel"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_service">Serviço *</label>
<select className="w-full px-4 py-3 text-sm focus:ring-0 appearance-none bg-no-repeat" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundSize: '.65em auto', backgroundPosition: 'right 1rem top 50%'}}>
<option data-i18n="form_select" disabled="" selected="" value="">Selecione...</option>
<option data-i18n="form_opt_tattoo" value="tattoo">Tatuagem</option>
<option data-i18n="form_opt_coverup" value="coverup">Coverup</option>
<option data-i18n="form_opt_touchup" value="touchup">Retoque</option>
<option data-i18n="form_opt_consult" value="consultation">Consultoria</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_artist">Artista *</label>
<select className="w-full px-4 py-3 text-sm focus:ring-0 appearance-none bg-no-repeat" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundSize: '.65em auto', backgroundPosition: 'right 1rem top 50%'}}>
<option data-i18n="form_opt_no_pref" value="none">Sem preferência</option>
<option value="lara">Lara Silva</option>
<option value="tomas">Tomas Costa</option>
<option value="sofia">Sofia Martins</option>
<option value="hugo">Hugo Alves</option>
</select>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_placement">Zona do Corpo *</label>
<select className="w-full px-4 py-3 text-sm focus:ring-0 appearance-none bg-no-repeat" required="" style={{backgroundImage: 'url(\'data:image/svg+xml', backgroundSize: '.65em auto', backgroundPosition: 'right 1rem top 50%'}}>
<option data-i18n="form_select" disabled="" selected="" value="">Selecione...</option>
<option data-i18n="form_body_arm" value="arm">Braço</option>
<option data-i18n="form_body_leg" value="leg">Perna</option>
<option data-i18n="form_body_chest" value="chest">Peito</option>
<option data-i18n="form_body_back" value="back">Costas</option>
<option data-i18n="form_body_neck" value="neck">Pescoço</option>
<option data-i18n="form_body_other" value="other">Outro</option>
</select>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_inspiration">Inspiração</label>
<div className="relative w-full border border-dashed border-borderSubtle bg-surface p-4 text-center cursor-pointer hover:border-accent transition-colors">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" type="file"/>
<span className="text-sm text-textSecondary" data-i18n="form_upload">Clique para anexar imagens</span>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-textSecondary mb-2" data-i18n="form_idea_label">Ideia</label>
<textarea className="w-full px-4 py-3 text-sm focus:ring-0" data-i18n-placeholder="form_idea_ph" placeholder="Descreve a tua ideia..." rows="4"></textarea>
</div>
<div className="flex items-center">
<input id="age_check" required="" type="checkbox"/>
<label className="ml-3 text-sm text-textSecondary" data-i18n="form_age" htmlFor="age_check">Confirmo que tenho 18 anos ou mais *</label>
</div>
<button className="w-full bg-accent text-bgPrimary hover:bg-white py-4 text-xs uppercase tracking-widest font-medium transition-colors" data-i18n="form_submit" id="submit-btn" type="submit">
                            Submeter Pedido
                        </button>
<p className="hidden text-accent text-sm text-center mt-4" data-i18n="form_success" id="form-success">Pedido enviado! Entraremos em contacto em 24h.</p>
</form>
</div>

<div className="lg:pl-16 fade-in-up" style={{transitionDelay: '200ms'}}>
<div className="bg-surface p-8 md:p-12 h-full flex flex-col">
<h3 className="font-serif text-2xl tracking-tight uppercase mb-8">NOIR TATTOO</h3>
<div className="space-y-6 mb-12 flex-grow">
<div>
<span className="block text-xs uppercase tracking-wider text-textSecondary mb-1" data-i18n="info_hours_label">Horário</span>
<p className="text-sm" data-i18n="info_hours">Segunda a Domingo · 10:00 – 20:00</p>
</div>
<div>
<span className="block text-xs uppercase tracking-wider text-textSecondary mb-1">Contacto</span>
<p className="text-sm"><a className="hover:text-accent transition-colors" href="tel:+351912345678">+351 912 345 678</a></p>
<p className="text-sm"><a className="hover:text-accent transition-colors" href="mailto:info@noirtattoo.pt">info@noirtattoo.pt</a></p>
</div>
<div>
<span className="block text-xs uppercase tracking-wider text-textSecondary mb-1">Social</span>
<div className="flex space-x-4 text-sm">
<a className="hover:text-accent transition-colors" href="#">Instagram</a>
<a className="hover:text-accent transition-colors" href="#">TikTok</a>
<a className="hover:text-accent transition-colors" href="#">Facebook</a>
</div>
</div>
</div>

<div className="w-full h-48 bg-bgSecondary border border-borderSubtle relative grayscale opacity-80 hover:opacity-100 transition-opacity">
<iframe frameborder="0" height="100%" marginheight="0" marginwidth="0" scrolling="no" src="https://www.openstreetmap.org/export/embed.html?bbox=-9.1478%2C38.7100%2C-9.1418%2C38.7140&amp;layer=mapnik" style={{filter: 'grayscale(100%) invert(90%) contrast(1.2)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border border-borderSubtle"></div>
</div>
<p className="text-xs text-textSecondary mt-4 text-center" data-i18n="info_address">Rua da Misericórdia 14, Lisboa</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-bgPrimary border-t border-borderSubtle pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<a className="font-serif text-2xl tracking-tighter uppercase font-semibold text-textPrimary hover:text-accent transition-colors block mb-4" href="#">
                        NOIR
                    </a>
<p className="text-textSecondary text-sm max-w-sm" data-i18n="footer_tagline">Arte permanente. Memórias para a vida.</p>
</div>
<div>
<h4 className="text-xs uppercase tracking-wider text-textPrimary mb-6 font-medium">Links</h4>
<ul className="space-y-3 text-sm text-textSecondary">
<li><a className="hover:text-accent transition-colors" data-i18n="nav_about" href="#sobre">Sobre</a></li>
<li><a className="hover:text-accent transition-colors" data-i18n="nav_services" href="#servicos">Serviços</a></li>
<li><a className="hover:text-accent transition-colors" data-i18n="nav_artists" href="#artistas">Artistas</a></li>
<li><a className="hover:text-accent transition-colors" data-i18n="nav_gallery" href="#galeria">Galeria</a></li>
<li><a className="hover:text-accent transition-colors" data-i18n="nav_faq" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-wider text-textPrimary mb-6 font-medium">Legal</h4>
<ul className="space-y-3 text-sm text-textSecondary">
<li><button className="hover:text-accent transition-colors" data-i18n="footer_policy" onclick="document.getElementById('modal').classList.remove('hidden'); document.getElementById('modal').classList.add('flex');">Política de Depósitos</button></li>
<li><a className="hover:text-accent transition-colors" href="#">Termos &amp; Condições</a></li>
<li><a className="hover:text-accent transition-colors" href="#">Privacidade</a></li>
</ul>
</div>
</div>
<div className="border-t border-borderSubtle pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-textSecondary tracking-wide">
<p data-i18n="footer_copyright">© 2025 NOIR TATTOO · Lisboa, Portugal · Todos os direitos reservados</p>
<div className="flex space-x-4 mt-4 md:mt-0 text-lg">
<a className="hover:text-accent transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="hover:text-accent transition-colors" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon></a>
</div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-[110] bg-bgPrimary/95 backdrop-blur-sm items-center justify-center p-6" id="modal">
<div className="bg-surface border border-borderSubtle max-w-lg w-full p-8 rounded-sm relative">
<button className="absolute top-4 right-4 text-textSecondary hover:text-white text-2xl" onclick="this.closest('#modal').classList.add('hidden'); this.closest('#modal').classList.remove('flex');">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<h3 className="font-serif text-2xl tracking-tight uppercase mb-6" data-i18n="modal_title">Política de Depósitos</h3>
<div className="space-y-4 text-sm text-textSecondary leading-relaxed">
<p data-i18n="modal_p1">Para garantir a sua marcação, é necessário o pagamento de um depósito não reembolsável no valor de 50€.</p>
<p data-i18n="modal_p2">Este valor será deduzido no preço final da tatuagem no dia da sessão.</p>
<p data-i18n="modal_p3">Remarcações devem ser feitas com pelo menos 48h de antecedência. Cancelamentos ou não comparência resultam na perda do depósito.</p>
</div>
</div>
</div>



    </>
  );
}
