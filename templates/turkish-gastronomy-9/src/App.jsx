import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // LOADER - simulate for hero image
    document.addEventListener('DOMContentLoaded', () => {
        const loader = document.getElementById('loader');
        const progressBar = document.getElementById('loaderProgress');
        const countText = document.getElementById('loaderCount');
        const heroImg = document.getElementById('heroImage');

        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15 + 5;
            if (progress > 100) progress = 100;
            progressBar.style.width = `${progress}%`;
            countText.textContent = `${Math.round(progress)}%`;
            if (progress >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    loader.classList.add('hidden');
                    heroImg.classList.add('loaded');
                    initAnimations();
                }, 400);
            }
        }, 120);
    });

    function initAnimations() {
        gsap.registerPlugin(ScrollTrigger);
        ScrollTrigger.defaults({ anticipatePin: 1 });

        initNavigation();
        initHeroAnimation();
        initExperienceHover();
        initBackgroundTextAnimation();

        setTimeout(() => {
            initRevealAnimations();
            initMenuHorizontalScroll();
            setTimeout(() => ScrollTrigger.refresh(), 200);
        }, 100);
    }

    function initNavigation() {
        const nav = document.getElementById('nav');
        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > window.innerHeight) {
                if (currentScroll > lastScroll) {
                    nav.classList.add('hidden');
                } else {
                    nav.classList.remove('hidden');
                }
            } else {
                nav.classList.remove('hidden');
            }
            lastScroll = currentScroll;
        });
    }

    function initHeroAnimation() {
        const tl = gsap.timeline({ delay: 0.3 });
        tl.to('#heroBadge', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
          .to('#heroTitle', { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.7')
          .to('#heroSubtitle', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.8')
          .to('#heroTagline', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
          .to('#heroActions', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, '-=0.5')
          .to('#heroScroll', { opacity: 1, duration: 1, ease: 'power3.out' }, '-=0.4');
    }

    function initExperienceHover() {
        const items = document.querySelectorAll('.experience__item');
        items.forEach(item => {
            item.addEventListener('mousemove', (e) => {
                const rect = item.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                item.style.setProperty('--mouse-x', `${x}%`);
                item.style.setProperty('--mouse-y', `${y}%`);
            });
        });
    }

    function initBackgroundTextAnimation() {
        const el = document.querySelector('.background-text');
        const text = document.querySelector('.background-text__content');
        const main = document.querySelector('.main-content');
        if (!el || !text || !main) return;

        el.style.height = 'auto';
        const textHeight = text.offsetHeight;
        el.style.height = '0px';

        const update = () => {
            const rect = main.getBoundingClientRect();
            const vh = window.innerHeight;
            const start = rect.top - vh;
            const end = rect.bottom;
            const progress = Math.min(Math.max(-start / (end - start), 0), 1);
            el.style.height = (progress * textHeight) + 'px';
        };
        window.addEventListener('scroll', update, { passive: true });
        window.addEventListener('resize', update);
        update();
    }

    function initRevealAnimations() {
        ScrollTrigger.refresh();

        gsap.utils.toArray('.reveal').forEach(elem => {
            gsap.fromTo(elem, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: elem, start: 'top 90%', toggleActions: 'play none none none' }
            });
        });

        gsap.utils.toArray('.reveal-left').forEach(elem => {
            gsap.fromTo(elem, { opacity: 0, x: -40 }, {
                opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: elem, start: 'top 90%', toggleActions: 'play none none none' }
            });
        });

        gsap.utils.toArray('.reveal-right').forEach(elem => {
            gsap.fromTo(elem, { opacity: 0, x: 40 }, {
                opacity: 1, x: 0, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: elem, start: 'top 90%', toggleActions: 'play none none none' }
            });
        });

        gsap.utils.toArray('.reveal-scale').forEach((elem, i) => {
            gsap.fromTo(elem, { opacity: 0, scale: 0.95 }, {
                opacity: 1, scale: 1, duration: 0.8, delay: i * 0.1, ease: 'power3.out',
                scrollTrigger: { trigger: elem, start: 'top 95%', toggleActions: 'play none none none' }
            });
        });
    }

    function initMenuHorizontalScroll() {
        const menuSection = document.querySelector('.menu');
        const menuScroll = document.querySelector('.menu__scroll');
        const menuItems = document.querySelectorAll('.menu__item');
        if (!menuSection || !menuScroll || menuItems.length === 0) return;
        if (window.innerWidth <= 768) return;

        const itemWidth = menuItems[0].offsetWidth;
        const gap = parseFloat(getComputedStyle(menuScroll).gap) || 32;
        const totalWidth = (itemWidth * menuItems.length) + (gap * (menuItems.length - 1));
        const viewportWidth = window.innerWidth;
        const paddingLeft = parseFloat(getComputedStyle(menuScroll).paddingLeft) || 32;
        const scrollDistance = totalWidth - viewportWidth + paddingLeft + gap;

        gsap.to(menuScroll, {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
                trigger: menuSection,
                start: 'top top',
                end: () => `+=${scrollDistance}`,
                pin: true,
                scrub: 0.5,
                anticipatePin: 1,
                invalidateOnRefresh: true
            }
        });
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="loader" id="loader">
<div className="loader__logo">DIVAN<span style={{color: 'var(--color-gold)'}}>.</span></div>
<div className="loader__text">Chargement de l'Expérience</div>
<div className="loader__progress">
<div className="loader__progress-bar" id="loaderProgress"></div>
</div>
<div className="loader__count" id="loaderCount">0%</div>
</div>

<div className="grain"></div>

<nav className="nav" id="nav">
<a className="nav__logo" href="#">
        DIVAN<span className="nav__logo-dot">.</span>
</a>
<ul className="nav__links">
<li><a className="nav__link" href="#concept">Le Concept</a></li>
<li><a className="nav__link" href="#menu">Menu</a></li>
<li><a className="nav__link" href="#experience">Expérience</a></li>
<li><a className="nav__link" href="#contact">Contact</a></li>
</ul>
<div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>
<a className="nav__phone" href="tel:0761897648">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
            07 61 89 76 48
        </a>
<a className="nav__cta" href="#reservation">Réserver</a>
</div>
<button aria-label="Menu" className="nav__menu-btn">
<span></span>
<span></span>
<span></span>
</button>
</nav>

<section className="hero" id="hero">
<div className="hero__image-container">
<img alt="DIVAN Restaurant" className="hero__image" id="heroImage" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e127d53-4898-482e-abe9-455db06fc087_3840w.jpg"/>
<div className="hero__overlay"></div>
<div className="hero__fade"></div>
<div className="hero__content">
<div className="hero__badge" id="heroBadge">
<iconify-icon icon="solar:star-fall-linear" style={{color: 'var(--color-gold)', strokeWidth: '1.5'}} width="14"></iconify-icon>
<span className="hero__badge-text">Gastronomie Turque à Créteil</span>
</div>
<h1 className="hero__title" id="heroTitle">L'Excellence de la<br/><em>Gastronomie Turque</em></h1>
<p className="hero__subtitle" id="heroSubtitle">Buffet à Volonté Gastronomique</p>
<p className="hero__tagline" id="heroTagline">Brunch le week-end · Une expérience culinaire d'exception</p>
<div className="hero__actions" id="heroActions">
<a className="hero__btn-primary" href="#reservation">
                    Réserver une table
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="hero__btn-secondary" href="#menu">Notre Carte</a>
</div>
</div>
<div className="hero__scroll" id="heroScroll">
<span className="hero__scroll-text">Défiler pour Explorer</span>
<span className="hero__scroll-line"></span>
</div>
</div>
</section>

<div className="main-content">

<div aria-hidden="true" className="background-text">
<div className="background-text__content">Excellence · Authenticité · Passion · Tradition · Saveurs · Créteil · Gastronomie · Anatolie</div>
</div>

<section className="image-strip">
<div className="image-strip__container">
<div className="image-strip__item reveal-scale">
<img alt="Plat turc" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5875ec2b-4875-4f5c-8050-1de856dcef65_800w.jpg"/>
</div>
<div className="image-strip__item reveal-scale">
<img alt="Intérieur Divan" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca672ed-497f-4678-9242-5625987b01f5_800w.jpg"/>
</div>
<div className="image-strip__item reveal-scale">
<img alt="Thé turc" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c9ca7f6-672e-4603-b5c2-3bf1b8fcca4b_800w.jpg"/>
</div>
<div className="image-strip__item reveal-scale">
<img alt="Baklava" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad061452-f291-4342-b38f-75dadb7e2a02_800w.jpg"/>
</div>
</div>
</section>

<section className="philosophy" id="concept">
<div className="philosophy__container">
<div className="philosophy__left reveal-left">
<span className="philosophy__kanji">D</span>
<div className="philosophy__image-frame">
<img alt="Ambiance Restaurant DIVAN" className="philosophy__image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35f5172d-ec09-43a7-961e-a2b3c18a5353_800w.jpg"/>
</div>
</div>
<div className="philosophy__right">
<span className="philosophy__label reveal">Le Concept Unique</span>
<h2 className="philosophy__heading reveal">
                    DIVAN brise les codes<br/>du <em>Buffet à Volonté</em>
</h2>
<p className="philosophy__text reveal">
                    Bienvenue chez DIVAN, où nous redéfinissons l'expérience du buffet. Oubliez le standard, place à l'excellence. Nous proposons un buffet gastronomique, préparé chaque jour avec des produits frais et une passion inébranlable pour la cuisine anatolienne.
                </p>
<p className="philosophy__text reveal">
                    Dans une ambiance chaleureuse et raffinée, profitez d'un service soigné à table pour vos boissons et grillades, tout en explorant la richesse de nos buffets d'entrées et desserts.
                </p>
<div className="philosophy__features reveal">
<div className="philosophy__feature">
<iconify-icon className="philosophy__feature-icon" icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="philosophy__feature-text">Fait Maison</span>
</div>
<div className="philosophy__feature">
<iconify-icon className="philosophy__feature-icon" icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
<span className="philosophy__feature-text">Service Premium</span>
</div>
</div>
</div>
</div>
</section>

<section className="menu" id="menu">
<div className="menu__header">
<div className="menu__title-group">
<span className="menu__label reveal">Spécialités Maison</span>
<h2 className="menu__title reveal">Nos Signatures</h2>
</div>
<div className="menu__nav reveal">
<button className="menu__nav-btn" onclick="document.querySelector('.menu__scroll').scrollBy({left: -370, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="menu__nav-btn" onclick="document.querySelector('.menu__scroll').scrollBy({left: 370, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="menu__scroll no-scrollbar">
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Grillades" src="https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="menu__item-overlay"></div>
</div>
<div className="menu__item-content">
<div className="menu__item-icon">
<iconify-icon icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="menu__item-name">Grillades</h3>
<p className="menu__item-desc">Saveur fumée authentique, cuites minute sur braise</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Iskender" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca672ed-497f-4678-9242-5625987b01f5_1600w.jpg"/>
<div className="menu__item-overlay"></div>
</div>
<div className="menu__item-content">
<div className="menu__item-icon">
<iconify-icon icon="solar:chef-hat-heart-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="menu__item-name">Iskender</h3>
<p className="menu__item-desc">L'incontournable spécialité de Bursa, beurre fondu et sauce tomate</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Pidé" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ad061452-f291-4342-b38f-75dadb7e2a02_800w.jpg"/>
<div className="menu__item-overlay"></div>
</div>
<div className="menu__item-content">
<div className="menu__item-icon">
<iconify-icon icon="solar:leaf-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="menu__item-name">Pidé</h3>
<p className="menu__item-desc">Pâte fine croustillante faite maison, garniture généreuse</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Cadre Chic" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35f5172d-ec09-43a7-961e-a2b3c18a5353_800w.jpg"/>
<div className="menu__item-overlay"></div>
</div>
<div className="menu__item-content">
<div className="menu__item-icon">
<iconify-icon icon="solar:star-fall-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="menu__item-name">Cadre Chic</h3>
<p className="menu__item-desc">Une atmosphère moderne et chaleureuse pour vos soirées</p>
</div>
</article>
<article className="menu__item reveal-scale">
<div className="menu__item-image">
<img alt="Lahmacun" src="https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/5f6ef02e81f087b8c3d093d5d511cd3f/Derivates/3d9ae701d159ef565e935d66bb7114bb0b62421e.jpg?w=800&amp;q=80"/>
<div className="menu__item-overlay"></div>
</div>
<div className="menu__item-content">
<div className="menu__item-icon">
<iconify-icon icon="solar:flame-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
<h3 className="menu__item-name">Lahmacun</h3>
<p className="menu__item-desc">Galette fine à la viande hachée épicée</p>
</div>
</article>
</div>
</section>

<section className="experience" id="experience">
<div className="experience__container">
<div className="experience__header">
<span className="experience__label reveal">L'Expérience DIVAN</span>
<h2 className="experience__title reveal">Un Moment d'Exception</h2>
</div>
<div className="experience__grid">
<div className="experience__item reveal">
<span className="experience__icon">
<iconify-icon icon="solar:chef-hat-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</span>
<h3 className="experience__item-title">Fait Maison Quotidien</h3>
<p className="experience__item-text">Chaque plat est préparé le jour même avec des ingrédients frais sélectionnés, garantissant authenticité et saveurs incomparables.</p>
</div>
<div className="experience__item reveal">
<span className="experience__icon">
<iconify-icon icon="solar:fire-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</span>
<h3 className="experience__item-title">Grillades sur Braise</h3>
<p className="experience__item-text">Nos viandes sont cuites minute sur braise, servies directement à votre table pour un service d'exception et une fraîcheur garantie.</p>
</div>
<div className="experience__item reveal">
<span className="experience__icon">
<iconify-icon icon="solar:heart-angle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</span>
<h3 className="experience__item-title">Hospitalité Turque</h3>
<p className="experience__item-text">Découvrez la chaleur de l'hospitalité anatolienne dans un cadre moderne et raffiné, pensé pour vos moments de partage.</p>
</div>
</div>
</div>
</section>

<section className="chef" id="chef">
<div className="chef__background"></div>
<img alt="Cuisine DIVAN" className="chef__image" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5875ec2b-4875-4f5c-8050-1de856dcef65_800w.jpg"/>
<div className="chef__overlay"></div>
<div className="chef__content">
<div className="chef__card reveal-right">
<span className="chef__label">Notre Philosophie</span>
<blockquote className="chef__quote">
                    La cuisine turque n'est pas qu'un repas, c'est un voyage à travers les traditions millénaires d'Anatolie, un art de vivre que nous perpétuons avec passion chaque jour.
                </blockquote>
<p className="chef__name">Mathis Kılıç</p>
<p className="chef__role">Fondateur &amp; Directeur, DIVAN</p>
</div>
</div>
</section>

<section className="reservation" id="reservation">
<div className="reservation__container">
<div className="reservation__icon reveal">
<iconify-icon icon="solar:calendar-mark-linear" style={{strokeWidth: '1.5'}} width="64"></iconify-icon>
</div>
<span className="reservation__label reveal">Réservez Votre Table</span>
<h2 className="reservation__title reveal">Commencez l'Expérience</h2>
<p className="reservation__subtitle reveal">
                Nos tables se remplissent rapidement. Réservez votre expérience gastronomique turque et découvrez pourquoi DIVAN est devenu la référence à Créteil.
            </p>
<form className="reservation__form reveal" onsubmit="return false;">
<div className="reservation__row">
<input className="reservation__input" placeholder="Votre Nom" required="" type="text"/>
<input className="reservation__input" placeholder="Adresse Email" required="" type="email"/>
</div>
<div className="reservation__row">
<input className="reservation__input" required="" type="date"/>
<select className="reservation__input" required="">
<option disabled="" selected="" value="">Nombre de Convives</option>
<option value="1">1 Convive</option>
<option value="2">2 Convives</option>
<option value="3">3 Convives</option>
<option value="4">4 Convives</option>
<option value="5">5+ Convives</option>
</select>
</div>
<input className="reservation__input" placeholder="Numéro de Téléphone" type="tel"/>
<button className="reservation__button" type="submit">Demander une Réservation</button>
</form>
</div>
</section>

<section className="contact" id="contact">
<div className="contact__container">
<div className="contact__info">
<div>
<span className="contact__header-label reveal">Nous Trouver</span>
<h2 className="contact__heading reveal">Informations Pratiques</h2>
</div>
<div className="contact__item reveal">
<div className="contact__item-icon">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="contact__item-title">Horaires d'ouverture</h4>
<p className="contact__item-text">Lun — Ven : 12h00 — 23h00<br/>Sam — Dim : 10h00 — 23h00</p>
<span className="contact__brunch-tag">Brunch le matin le weekend</span>
</div>
</div>
<div className="contact__item reveal">
<div className="contact__item-icon">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="contact__item-title">Adresse</h4>
<p className="contact__item-text">8 Avenue du Maréchal Foch<br/>94000 Créteil, France</p>
</div>
</div>
<div className="contact__item reveal">
<div className="contact__item-icon">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<div>
<h4 className="contact__item-title">Nous contacter</h4>
<p className="contact__item-text">07 61 89 76 48<br/>contact@divanrestaurant94.fr</p>
</div>
</div>
</div>
<div className="contact__map reveal-right">
<iframe allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2629.4326573886566!2d2.4630501!3d48.773356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60b10695191c9%3A0x6333c1f2e860950a!2s8%20Av.%20du%20Mar%C3%A9chal%20Foch%2C%2094000%20Cr%C3%A9teil!5e0!3m2!1sfr!2sfr!4v1709220000000!5m2!1sfr!2sfr"></iframe>
</div>
</div>
</section>
</div>

<footer className="footer">
<div className="footer__container">
<div className="footer__brand">
<div className="footer__logo">DIVAN<span className="footer__logo-dot">.</span></div>
<p className="footer__tagline">L'excellence de la gastronomie turque à Créteil. Buffet à volonté gastronomique et brunch le week-end dans un cadre d'exception.</p>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Navigation</h4>
<ul className="footer__links">
<li><a className="footer__link" href="#concept">Le Concept</a></li>
<li><a className="footer__link" href="#menu">Menu</a></li>
<li><a className="footer__link" href="#experience">Expérience</a></li>
<li><a className="footer__link" href="#reservation">Réservation</a></li>
</ul>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Contact</h4>
<p className="footer__contact-item">8 Avenue du Maréchal Foch<br/>94000 Créteil, France</p>
<p className="footer__contact-item">07 61 89 76 48</p>
<p className="footer__contact-item">contact@divanrestaurant94.fr</p>
</div>
<div className="footer__col">
<h4 className="footer__col-title">Horaires</h4>
<p className="footer__contact-item">Lundi — Vendredi<br/>12h00 — 23h00</p>
<p className="footer__contact-item">Samedi — Dimanche<br/>10h00 — 23h00</p>
<div className="footer__social">
<a aria-label="Instagram" className="footer__social-link" href="https://www.instagram.com/divanrestaurant_94" target="_blank">
<iconify-icon icon="ph:instagram-logo" width="20"></iconify-icon>
</a>
<a aria-label="Email" className="footer__social-link" href="mailto:contact@divanrestaurant94.fr">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
<a aria-label="Téléphone" className="footer__social-link" href="tel:0761897648">
<iconify-icon icon="solar:phone-calling-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="footer__bottom">
<p className="footer__copyright">© 2024 DIVAN Restaurant. Tous droits réservés.</p>
<div className="footer__legal">
<a className="footer__legal-link" href="#">Politique de Confidentialité</a>
<a className="footer__legal-link" href="#">Mentions Légales</a>
</div>
</div>
<div className="footer__legal-text">
        SAS GALATA — Direction : Mathis KILIC · SIRET : 944 346 360 00018 — RCS CRETEIL · TVA Intracommunautaire : FR56944346360 · 8 Avenue du Maréchal Foch, 94000 Créteil
    </div>
</footer>





    </>
  );
}
