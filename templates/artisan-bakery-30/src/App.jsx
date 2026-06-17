import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const yearEl = document.getElementById('year');
    yearEl.textContent = new Date().getFullYear();

    // Mobile menu
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // Parallax
    const parallax = document.getElementById('parallax');
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (parallax) parallax.style.transform = `translate3d(0, ${Math.min(y * 0.08, 40)}px, 0) scale(1.1)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // i18n
    const dict = {
      es: {
        cart: "Carrito",
        ctaHeader: "Ordena ahora",
        badge: "Entregas en Santa Cruz y Patagonia",
        heroTitle: "Las mejores tortas artesanales de Santa Cruz",
        heroSubtitle: "Entregas en El Calafate, Río Gallegos y toda la Patagonia. Sabores inspirados en glaciares, estepa y frutos del sur.",
        ctaPrimary: "Ordena ahora",
        ctaSecondary: "Conocé la historia",
        stat1Label: "Hechas a mano",
        stat2Label: "Entrega local",
        stat3Label: "Opciones",
        stat3Value: "Sin gluten / Veganas",
        stat4Label: "Reseñas",
        heroCardTitle: "Torta “Glaciar”",
        heroCardDesc: "Chocolate intenso, crema suave y berries patagónicos.",
        addToCart: "Añadir al carrito",
        pickup: "Retiro: Río Gallegos / El Calafate",
        prepTime: "Preparación 24h",
        perk1: "Envíos",
        perk1Desc: "Coordinación por WhatsApp según zona.",
        perk2: "Personalizadas",
        perk2Desc: "Inspiración patagónica: glaciares, estepa y más.",
        featuredTitle: "Tortas destacadas",
        featuredSubtitle: "Elegí un clásico o probá un sabor del sur.",
        productsTitle: "Catálogo",
        productsSubtitle: "Precios en ARS. Ingredientes claros. Opciones dietéticas.",
        filterCategory: "Categoría: Todas",
        catAll: "Todas",
        catDdl: "Dulce de leche",
        catChoco: "Chocolate",
        catFruit: "Frutales",
        catCustom: "Pedidos personalizados",
        filterGluten: "Sin gluten",
        filterVegan: "Vegano",
        clear: "Limpiar",
        aboutTitle: "Sabores auténticos de Santa Cruz",
        aboutBody: "Tortas artesanales inspiradas en los glaciares y la estepa patagónica, creadas por un emprendedor local apasionado por la repostería. Trabajamos con ingredientes de calidad y cuidamos cada detalle: sabor, textura y presentación.",
        aboutP1: "Ingredientes reales",
        aboutP1d: "Manteca, chocolate, frutas, vainilla.",
        aboutP2: "Hecho en Santa Cruz",
        aboutP2d: "Producción local y fresca.",
        aboutP3: "Diseños únicos",
        aboutP3d: "Temáticas del sur para eventos.",
        aboutCta: "Pedí una torta personalizada",
        aboutCta2: "Ver recetas y tips",
        aboutImg1: "Proceso artesanal",
        aboutImg1d: "Batidos, rellenos y terminaciones a mano.",
        aboutImg2: "Inspiración patagónica",
        aboutImg2d: "Colores, texturas y sabores del sur.",
        aboutImg3: "Emprendimiento local",
        aboutImg3d: "Atención cercana y pedidos por encargo.",
        aboutTrust: "Hecho con cuidado",
        testiTitle: "Lo que dicen nuestros clientes",
        testiSubtitle: "Reseñas demo para mostrar prueba social.",
        testi1: "“Pedí una torta frutal para un cumpleaños y llegó impecable. Súper fresca y con un sabor increíble.”",
        testi2: "“La de dulce de leche es una bomba. Se nota que es artesanal y con buenos ingredientes.”",
        testi3: "“Me armaron una personalizada con temática patagónica. Hermosa y riquísima.”",
        mapTitle: "Zonas de entrega (Santa Cruz)",
        mapSubtitle: "Coordinación por WhatsApp • Retiro en Río Gallegos o El Calafate",
        openMap: "Abrir mapa",
        mapPickup: "Retiro",
        mapShipping: "Envíos",
        mapRG: "Puntos de encuentro coordinados.",
        mapEC: "Coordinación según temporada.",
        mapPat: "Resto de Patagonia",
        mapPA: "Consulta disponibilidad y tiempos por WhatsApp.",
        blogTitle: "Blog",
        blogSubtitle: "Ideas, recetas y tips para fanáticos de lo dulce.",
        post1Title: "Recetas de tortas con berries patagónicos",
        post1Desc: "Cómo lograr acidez equilibrada, crema estable y un brillo natural.",
        post2Title: "Dulce de leche: textura perfecta para rellenos",
        post2Desc: "Trucos para que no se escurra, y para que corte prolijo en cada porción.",
        post3Title: "Decoraciones inspiradas en glaciares y estepa",
        post3Desc: "Paletas frías, texturas nevadas y detalles minimalistas que venden.",
        readMore: "Leer",
        contactTitle: "Pedidos y consultas",
        contactSubtitle: "Contanos fecha, porciones, sabor y si querés una temática patagónica.",
        whatsTitle: "WhatsApp",
        whatsDesc: "Respuestas rápidas para coordinar entrega y personalización.",
        openWhats: "Abrir WhatsApp",
        virtualAddr: "Dirección: virtual por ahora • Retiro en Río Gallegos o El Calafate",
        payTitle: "Pagos",
        payDesc: "Checkout demo con Stripe o Mercado Pago (simulado).",
        formTitle: "Formulario de pedido",
        formSubtitle: "Te respondemos con disponibilidad y presupuesto.",
        privacyMini: "Datos protegidos (demo)",
        name: "Nombre",
        phone: "Teléfono",
        city: "Ciudad",
        date: "Fecha",
        portions: "Porciones",
        delivery: "Entrega",
        deliveryDefault: "Seleccionar opción",
        notes: "Detalles",
        sendOrder: "Enviar pedido",
        footerTag: "Tortas artesanales • Santa Cruz, Argentina",
        footerDesc: "Pedidos por encargo, entregas coordinadas y opciones dietéticas. Sitio demo con carrito y checkout simulados.",
        footerLinks: "Enlaces",
        navProducts: "Productos",
        navAbout: "Sobre nosotros",
        navBlog: "Blog",
        footerLegal: "Legal",
        privacy: "Política de privacidad",
        terms: "Términos",
        footerSocial: "Redes",
        footerNote: "Hecho para demo • Santa Cruz, Argentina",
        language: "Idioma",
        cartTitle: "Tu carrito",
        cartSubtitle: "Precios en ARS • Checkout demo",
        subtotal: "Subtotal",
        shippingNote: "Entrega se coordina por zona",
        taxNote: "Impuestos no incluidos (demo)",
        checkout: "Ir a pagar",
        continue: "Seguir comprando",
        payStripe: "Pagar con Stripe",
        payMP: "Mercado Pago",
      },
      en: {
        cart: "Cart",
        ctaHeader: "Order now",
        badge: "Delivery across Santa Cruz & Patagonia",
        heroTitle: "Santa Cruz’ best artisan cakes",
        heroSubtitle: "Delivery in El Calafate, Río Gallegos and across Patagonia. Flavors inspired by glaciers, steppe and southern berries.",
        ctaPrimary: "Order now",
        ctaSecondary: "Our story",
        stat1Label: "Handmade",
        stat2Label: "Local delivery",
        stat3Label: "Options",
        stat3Value: "Gluten-free / Vegan",
        stat4Label: "Reviews",
        heroCardTitle: "“Glacier” Cake",
        heroCardDesc: "Deep chocolate, silky cream and Patagonian berries.",
        addToCart: "Add to cart",
        pickup: "Pickup: Río Gallegos / El Calafate",
        prepTime: "24h prep",
        perk1: "Delivery",
        perk1Desc: "Coordinated via WhatsApp by area.",
        perk2: "Custom",
        perk2Desc: "Patagonian inspiration: glaciers, steppe and more.",
        featuredTitle: "Featured cakes",
        featuredSubtitle: "Pick a classic or try a southern flavor.",
        productsTitle: "Catalog",
        productsSubtitle: "Prices in ARS. Clear ingredients. Dietary options.",
        filterCategory: "Category: All",
        catAll: "All",
        catDdl: "Dulce de leche",
        catChoco: "Chocolate",
        catFruit: "Fruity",
        catCustom: "Custom orders",
        filterGluten: "Gluten-free",
        filterVegan: "Vegan",
        clear: "Clear",
        aboutTitle: "Authentic Santa Cruz flavors",
        aboutBody: "Artisan cakes inspired by Patagonian glaciers and steppe, made by a local entrepreneur passionate about baking. We focus on quality ingredients and details: taste, texture and finish.",
        aboutP1: "Real ingredients",
        aboutP1d: "Butter, chocolate, fruit, vanilla.",
        aboutP2: "Made in Santa Cruz",
        aboutP2d: "Local, fresh production.",
        aboutP3: "Unique designs",
        aboutP3d: "Southern themes for events.",
        aboutCta: "Request a custom cake",
        aboutCta2: "See recipes & tips",
        aboutImg1: "Artisan process",
        aboutImg1d: "Mixing, fillings and hand finishing.",
        aboutImg2: "Patagonian inspiration",
        aboutImg2d: "Colors, textures and southern flavors.",
        aboutImg3: "Local venture",
        aboutImg3d: "Close attention and made-to-order.",
        aboutTrust: "Made with care",
        testiTitle: "What customers say",
        testiSubtitle: "Demo reviews for social proof.",
        testi1: "“Ordered a fruity cake for a birthday—arrived perfect. Super fresh and delicious.”",
        testi2: "“The dulce de leche one is incredible. You can tell it’s handmade and high quality.”",
        testi3: "“They made a Patagonian-themed custom cake. Beautiful and tasty.”",
        mapTitle: "Delivery areas (Santa Cruz)",
        mapSubtitle: "Coordinated via WhatsApp • Pickup in Río Gallegos or El Calafate",
        openMap: "Open map",
        mapPickup: "Pickup",
        mapShipping: "Shipping",
        mapRG: "Meeting points coordinated.",
        mapEC: "Coordination varies by season.",
        mapPat: "Rest of Patagonia",
        mapPA: "Ask availability and timing via WhatsApp.",
        blogTitle: "Blog",
        blogSubtitle: "Ideas, recipes and tips for sweet lovers.",
        post1Title: "Cake recipes with Patagonian berries",
        post1Desc: "How to balance acidity, stabilize cream and get natural shine.",
        post2Title: "Dulce de leche: perfect filling texture",
        post2Desc: "Tips to prevent leaking and get clean slices every time.",
        post3Title: "Decor inspired by glaciers and steppe",
        post3Desc: "Cold palettes, snowy textures and minimal details that sell.",
        readMore: "Read",
        contactTitle: "Orders & questions",
        contactSubtitle: "Tell us date, servings, flavor and if you want a Patagonian theme.",
        whatsTitle: "WhatsApp",
        whatsDesc: "Fast replies to coordinate delivery and customization.",
        openWhats: "Open WhatsApp",
        virtualAddr: "Address: online for now • Pickup in Río Gallegos or El Calafate",
        payTitle: "Payments",
        payDesc: "Demo checkout with Stripe or Mercado Pago (simulated).",
        formTitle: "Order form",
        formSubtitle: "We’ll reply with availability and a quote.",
        privacyMini: "Data protected (demo)",
        name: "Name",
        phone: "Phone",
        city: "City",
        date: "Date",
        portions: "Servings",
        delivery: "Delivery",
        deliveryDefault: "Select an option",
        notes: "Details",
        sendOrder: "Send order",
        footerTag: "Artisan cakes • Santa Cruz, Argentina",
        footerDesc: "Made-to-order cakes, coordinated delivery, dietary options. Demo site with cart and simulated checkout.",
        footerLinks: "Links",
        navProducts: "Products",
        navAbout: "About",
        navBlog: "Blog",
        footerLegal: "Legal",
        privacy: "Privacy policy",
        terms: "Terms",
        footerSocial: "Social",
        footerNote: "Demo build • Santa Cruz, Argentina",
        language: "Language",
        cartTitle: "Your cart",
        cartSubtitle: "Prices in ARS • Demo checkout",
        subtotal: "Subtotal",
        shippingNote: "Delivery coordinated by area",
        taxNote: "Taxes not included (demo)",
        checkout: "Checkout",
        continue: "Continue shopping",
        payStripe: "Pay with Stripe",
        payMP: "Mercado Pago",
      }
    };

    let lang = 'es';
    const setLang = (l) => {
      lang = l;
      document.documentElement.setAttribute('lang', l === 'es' ? 'es' : 'en');
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (dict[lang][k]) el.textContent = dict[lang][k];
      });
      // Buttons state
      const btns = [
        [document.getElementById('langEs'), document.getElementById('langEn')],
        [document.getElementById('langEsM'), document.getElementById('langEnM')]
      ];
      btns.forEach(([esB, enB]) => {
        if (!esB || !enB) return;
        const esOn = lang === 'es';
        esB.className = `rounded-xl px-3 py-2 text-xs font-semibold ${esOn ? 'text-white bg-white/10' : 'text-slate-200 hover:bg-white/10'}`;
        enB.className = `rounded-xl px-3 py-2 text-xs font-semibold ${!esOn ? 'text-white bg-white/10' : 'text-slate-200 hover:bg-white/10'}`;
        esB.setAttribute('aria-pressed', esOn ? 'true' : 'false');
        enB.setAttribute('aria-pressed', !esOn ? 'true' : 'false');
      });

      updateCategoryLabel();
      updateCartUI();
    };

    document.getElementById('langEs')?.addEventListener('click', () => setLang('es'));
    document.getElementById('langEn')?.addEventListener('click', () => setLang('en'));
    document.getElementById('langEsM')?.addEventListener('click', () => setLang('es'));
    document.getElementById('langEnM')?.addEventListener('click', () => setLang('en'));

    // Data
    const products = [
      {
        id: 'glaciar',
        name: { es: 'Torta “Glaciar”', en: '“Glacier” Cake' },
        category: 'choco',
        price: 32000,
        img: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Chocolate intenso, crema suave y berries patagónicos.',
          en: 'Deep chocolate, silky cream and Patagonian berries.'
        },
        ingredients: { es: 'Cacao, crema, huevos, harina, berries.', en: 'Cocoa, cream, eggs, flour, berries.' },
        glutenFree: false,
        vegan: false
      },
      {
        id: 'ddl',
        name: { es: 'Dulce de Leche Clásica', en: 'Classic Dulce de Leche' },
        category: 'dulce',
        price: 28000,
        img: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Bizcochuelo esponjoso y relleno generoso.',
          en: 'Fluffy sponge with a generous filling.'
        },
        ingredients: { es: 'Dulce de leche, vainilla, manteca, harina.', en: 'Dulce de leche, vanilla, butter, flour.' },
        glutenFree: false,
        vegan: false
      },
      {
        id: 'frutal',
        name: { es: 'Frutal del Sur', en: 'Southern Fruit Cake' },
        category: 'frutal',
        price: 30000,
        img: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Crema ligera, frutas y brillo natural.',
          en: 'Light cream, fruit and natural glaze.'
        },
        ingredients: { es: 'Frutas, crema, vainilla, masa suave.', en: 'Fruit, cream, vanilla, soft sponge.' },
        glutenFree: false,
        vegan: false
      },
      {
        id: 'gf-cacao',
        name: { es: 'Cacao Sin Gluten', en: 'Gluten-Free Cocoa' },
        category: 'choco',
        price: 34000,
        img: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Textura húmeda sin TACC, sabor profundo.',
          en: 'Moist texture, gluten-free, deep flavor.'
        },
        ingredients: { es: 'Cacao, harina sin gluten, huevos, azúcar.', en: 'Cocoa, gluten-free flour, eggs, sugar.' },
        glutenFree: true,
        vegan: false
      },
      {
        id: 'vegan-berries',
        name: { es: 'Vegana de Berries', en: 'Vegan Berries Cake' },
        category: 'frutal',
        price: 36000,
        img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Sin lácteos, fresca y equilibrada.',
          en: 'Dairy-free, fresh and balanced.'
        },
        ingredients: { es: 'Leche vegetal, frutas, harina, cacao.', en: 'Plant milk, fruit, flour, cocoa.' },
        glutenFree: false,
        vegan: true
      },
      {
        id: 'custom',
        name: { es: 'Pedido Personalizado', en: 'Custom Order' },
        category: 'custom',
        price: 0,
        img: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1600&q=80',
        desc: {
          es: 'Diseño a medida: glaciares, montañas, estepa.',
          en: 'Made-to-order: glaciers, mountains, steppe.'
        },
        ingredients: { es: 'A definir según tu pedido.', en: 'Defined based on your request.' },
        glutenFree: false,
        vegan: false
      }
    ];

    // Featured carousel
    const featured = ['glaciar', 'ddl', 'frutal', 'gf-cacao', 'vegan-berries'];
    const featuredTrack = document.getElementById('featuredTrack');
    let featuredIndex = 0;

    const money = (n) => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    const renderFeatured = () => {
      featuredTrack.innerHTML = '';
      featured.forEach((id) => {
        const p = products.find(x => x.id === id);
        const card = document.createElement('div');
        card.className = 'min-w-[18rem] sm:min-w-[20rem] lg:min-w-[22rem] rounded-3xl border border-white/10 bg-white/5 overflow-hidden hover:bg-white/7 transition';
        card.innerHTML = `
          <div class="h-40 overflow
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"></div>
<div className="absolute -top-24 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
<div className="absolute top-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-3xl"></div>
<div className="absolute -bottom-24 right-0 h-[30rem] w-[30rem] rounded-full bg-sky-500/10 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.06),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.05),transparent_40%),linear-gradient(to_bottom,rgba(2,6,23,0.3),rgba(2,6,23,0.95))]"></div>
</div>

<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between gap-3">
<div className="flex items-center gap-3">
<button aria-label="Abrir menú" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-100 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 lg:hidden" id="menuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<a className="group inline-flex items-center gap-3" href="#inicio">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>DSC</span>
</div>
<div className="hidden sm:block">
<div className="text-sm font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Dulces de Santa Cruz</div>
<div className="text-xs text-slate-300">Tortas artesanales • Patagonia</div>
</div>
</a>
</div>
<nav className="hidden items-center gap-1 lg:flex">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#inicio">Inicio</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#productos">Productos</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#nosotros">Sobre nosotros</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#blog">Blog</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#contacto">Contacto</a>
</nav>
<div className="flex items-center gap-2">

<div className="hidden sm:flex items-center rounded-2xl border border-white/10 bg-white/5 p-1">
<button aria-pressed="true" className="rounded-xl px-3 py-2 text-xs font-semibold text-white bg-white/10" id="langEs">ES</button>
<button aria-pressed="false" className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10" id="langEn">EN</button>
</div>

<button className="relative inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" id="cartBtn">
<iconify-icon icon="solar:bag-3-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span className="hidden sm:inline" data-i18n="cart">Carrito</span>
<span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-cyan-400 text-xs font-semibold text-slate-950" id="cartCount">0</span>
</button>
<a className="hidden sm:inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-95" href="#contacto">
<span data-i18n="ctaHeader">Ordena ahora</span>
</a>
</div>
</div>
</div>

<div className="hidden border-t border-white/10 bg-slate-950/80 backdrop-blur lg:hidden" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
<div className="flex flex-col gap-1">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#inicio">Inicio</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#productos">Productos</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#nosotros">Sobre nosotros</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#blog">Blog</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 hover:text-white" href="#contacto">Contacto</a>
<div className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-2">
<div className="text-xs text-slate-300" data-i18n="language">Idioma</div>
<div className="flex items-center rounded-2xl border border-white/10 bg-white/5 p-1">
<button aria-pressed="true" className="rounded-xl px-3 py-2 text-xs font-semibold text-white bg-white/10" id="langEsM">ES</button>
<button aria-pressed="false" className="rounded-xl px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10" id="langEnM">EN</button>
</div>
</div>
<a className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-95" href="#contacto">
<span data-i18n="ctaHeader">Ordena ahora</span>
</a>
</div>
</div>
</div>
</header>

<main className="relative">
<section className="relative overflow-hidden" id="inicio">

<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 scale-110" id="parallax">
<img alt="Torta artesanal" className="h-full w-full object-cover opacity-35" loading="eager" src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?auto=format&amp;fit=crop&amp;w=2200&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-12 lg:py-20">
<div className="lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-200">
<span className="inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
<span data-i18n="badge">Entregas en Santa Cruz y Patagonia</span>
</div>
<h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>
<span data-i18n="heroTitle">Las mejores tortas artesanales de Santa Cruz</span>
</h1>
<p className="mt-4 max-w-2xl text-sm sm:text-base text-slate-200">
<span data-i18n="heroSubtitle">Entregas en El Calafate, Río Gallegos y toda la Patagonia. Sabores inspirados en glaciares, estepa y frutos del sur.</span>
</p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-95" href="#productos">
<iconify-icon icon="solar:shopping-cart-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="ctaPrimary">Ordena ahora</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10" href="#nosotros">
<iconify-icon icon="solar:info-circle-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="ctaSecondary">Conocé la historia</span>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-300" data-i18n="stat1Label">Hechas a mano</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">100%</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-300" data-i18n="stat2Label">Entrega local</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">24–48h</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-300" data-i18n="stat3Label">Opciones</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white" data-i18n="stat3Value">Sin gluten / Veganas</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-xs text-slate-300" data-i18n="stat4Label">Reseñas</div>
<div className="mt-1 text-lg font-semibold tracking-tight text-white">4.9/5</div>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl shadow-black/40">
<div className="rounded-2xl overflow-hidden">
<img alt="Torta de chocolate con frutas" className="h-64 w-full object-cover sm:h-72" loading="lazy" src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="heroCardTitle">Torta “Glaciar”</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="heroCardDesc">Chocolate intenso, crema suave y berries patagónicos.</div>
</div>
<div className="text-sm font-semibold text-cyan-300">ARS <span id="heroPrice">32000</span></div>
</div>
<button className="mt-4 w-full rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/10" data-add-to-cart="glaciar">
<span data-i18n="addToCart">Añadir al carrito</span>
</button>
<div className="mt-3 flex items-center justify-between text-xs text-slate-300">
<span data-i18n="pickup">Retiro: Río Gallegos / El Calafate</span>
<span className="inline-flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" style={{fontSize: '1rem'}}></iconify-icon>
<span data-i18n="prepTime">Preparación 24h</span>
</span>
</div>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:delivery-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="perk1">Envíos</span>
</div>
<div className="mt-2 text-xs text-slate-300" data-i18n="perk1Desc">Coordinación por WhatsApp según zona.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:palette-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="perk2">Personalizadas</span>
</div>
<div className="mt-2 text-xs text-slate-300" data-i18n="perk2Desc">Inspiración patagónica: glaciares, estepa y más.</div>
</div>
</div>
</div>
</div>

<div className="pb-12">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" data-i18n="featuredTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Tortas destacadas</h2>
<p className="mt-2 text-sm text-slate-300" data-i18n="featuredSubtitle">Elegí un clásico o probá un sabor del sur.</p>
</div>
<div className="hidden sm:flex items-center gap-2">
<button aria-label="Anterior" className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="prevFeatured">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<button aria-label="Siguiente" className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="nextFeatured">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
</div>
</div>
<div className="mt-5 overflow-hidden">
<div className="flex gap-4 transition-transform duration-500 will-change-transform" id="featuredTrack">

</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="productos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" data-i18n="productsTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Catálogo</h2>
<p className="mt-2 text-sm text-slate-300" data-i18n="productsSubtitle">Precios en ARS. Ingredientes claros. Opciones dietéticas.</p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">

<div className="relative">
<button className="w-full inline-flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" id="categoryBtn">
<span data-i18n="filterCategory" id="categoryLabel">Categoría: Todas</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="hidden absolute right-0 mt-2 w-64 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur p-2 shadow-2xl shadow-black/40" id="categoryMenu">
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-category="all" data-i18n="catAll">Todas</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-category="dulce" data-i18n="catDdl">Dulce de leche</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-category="choco" data-i18n="catChoco">Chocolate</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-category="frutal" data-i18n="catFruit">Frutales</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-category="custom" data-i18n="catCustom">Pedidos personalizados</button>
</div>
</div>

<button className="w-full inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" id="toggleGluten">
<span data-i18n="filterGluten">Sin gluten</span>
<span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 bg-white/10 transition" data-toggle-bg="">
<span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-white/80 transition" data-toggle-knob=""></span>
</span>
</button>
<button className="w-full inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" id="toggleVegan">
<span data-i18n="filterVegan">Vegano</span>
<span className="relative inline-flex h-6 w-11 items-center rounded-full border border-white/10 bg-white/10 transition" data-toggle-bg="">
<span className="inline-block h-5 w-5 translate-x-1 rounded-full bg-white/80 transition" data-toggle-knob=""></span>
</span>
</button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" id="clearFilters">
<iconify-icon icon="solar:refresh-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="clear">Limpiar</span>
</button>
</div>
</div>
<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" id="productGrid">

</div>
</div>
</section>

<section className="border-t border-white/10" id="nosotros">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-8 lg:grid-cols-12 lg:items-center">
<div className="lg:col-span-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" data-i18n="aboutTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Sabores auténticos de Santa Cruz</h2>
<p className="mt-3 text-sm text-slate-200" data-i18n="aboutBody">
              Tortas artesanales inspiradas en los glaciares y la estepa patagónica, creadas por un emprendedor local apasionado por la repostería. Trabajamos con ingredientes de calidad y cuidamos cada detalle: sabor, textura y presentación.
            </p>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-sm font-semibold text-white" data-i18n="aboutP1">Ingredientes reales</div>
<div className="mt-2 text-xs text-slate-300" data-i18n="aboutP1d">Manteca, chocolate, frutas, vainilla.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-sm font-semibold text-white" data-i18n="aboutP2">Hecho en Santa Cruz</div>
<div className="mt-2 text-xs text-slate-300" data-i18n="aboutP2d">Producción local y fresca.</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="text-sm font-semibold text-white" data-i18n="aboutP3">Diseños únicos</div>
<div className="mt-2 text-xs text-slate-300" data-i18n="aboutP3d">Temáticas del sur para eventos.</div>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/15 border border-white/10" href="#contacto">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="aboutCta">Pedí una torta personalizada</span>
</a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10" href="#blog">
<iconify-icon icon="solar:document-text-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="aboutCta2">Ver recetas y tips</span>
</a>
</div>
</div>
<div className="lg:col-span-6">
<div className="grid gap-3 sm:grid-cols-2">
<div className="rounded-3xl border border-white/10 bg-white/5 p-3">
<img alt="Proceso de repostería" className="h-56 w-full rounded-2xl object-cover opacity-95" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="mt-3 px-1 pb-1">
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="aboutImg1">Proceso artesanal</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="aboutImg1d">Batidos, rellenos y terminaciones a mano.</div>
</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-3">
<img alt="Paisaje de Santa Cruz" className="h-56 w-full rounded-2xl object-cover opacity-95" loading="lazy" src="https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="mt-3 px-1 pb-1">
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="aboutImg2">Inspiración patagónica</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="aboutImg2d">Colores, texturas y sabores del sur.</div>
</div>
</div>
<div className="sm:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-3">
<img alt="Panadero trabajando" className="h-56 w-full rounded-2xl object-cover opacity-95" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="mt-3 px-1 pb-1 flex items-start justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="aboutImg3">Emprendimiento local</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="aboutImg3d">Atención cercana y pedidos por encargo.</div>
</div>
<div className="text-xs text-slate-300 inline-flex items-center gap-2">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<span data-i18n="aboutTrust">Hecho con cuidado</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12">
<div className="flex items-end justify-between gap-4">
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-white" data-i18n="testiTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Lo que dicen nuestros clientes</h3>
<p className="mt-2 text-sm text-slate-300" data-i18n="testiSubtitle">Reseñas demo para mostrar prueba social.</p>
</div>
</div>
<div className="mt-5 grid gap-4 md:grid-cols-3">
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white">Camila • El Calafate</div>
<div className="text-xs text-cyan-300">5.0</div>
</div>
<p className="mt-3 text-sm text-slate-200" data-i18n="testi1">“Pedí una torta frutal para un cumpleaños y llegó impecable. Súper fresca y con un sabor increíble.”</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white">Nicolás • Río Gallegos</div>
<div className="text-xs text-cyan-300">4.9</div>
</div>
<p className="mt-3 text-sm text-slate-200" data-i18n="testi2">“La de dulce de leche es una bomba. Se nota que es artesanal y con buenos ingredientes.”</p>
</div>
<div className="group rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/7 transition">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white">María • Santa Cruz</div>
<div className="text-xs text-cyan-300">5.0</div>
</div>
<p className="mt-3 text-sm text-slate-200" data-i18n="testi3">“Me armaron una personalizada con temática patagónica. Hermosa y riquísima.”</p>
</div>
</div>
</div>

<div className="mt-12 rounded-3xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="mapTitle">Zonas de entrega (Santa Cruz)</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="mapSubtitle">Coordinación por WhatsApp • Retiro en Río Gallegos o El Calafate</div>
</div>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10" href="https://www.google.com/maps/search/?api=1&amp;query=Santa+Cruz+Argentina" id="mapLink" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:map-point-wave-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="openMap">Abrir mapa</span>
</a>
</div>
<div className="bg-slate-950/40 p-6">
<div className="grid gap-4 lg:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white">Río Gallegos</div>
<span className="rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/20 px-2 py-1 text-xs font-semibold" data-i18n="mapPickup">Retiro</span>
</div>
<p className="mt-2 text-xs text-slate-300" data-i18n="mapRG">Puntos de encuentro coordinados.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white">El Calafate</div>
<span className="rounded-full bg-emerald-400/15 text-emerald-200 border border-emerald-400/20 px-2 py-1 text-xs font-semibold" data-i18n="mapPickup">Retiro</span>
</div>
<p className="mt-2 text-xs text-slate-300" data-i18n="mapEC">Coordinación según temporada.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center justify-between">
<div className="text-sm font-semibold text-white" data-i18n="mapPat">Resto de Patagonia</div>
<span className="rounded-full bg-cyan-400/15 text-cyan-200 border border-cyan-400/20 px-2 py-1 text-xs font-semibold" data-i18n="mapShipping">Envíos</span>
</div>
<p className="mt-2 text-xs text-slate-300" data-i18n="mapPA">Consulta disponibilidad y tiempos por WhatsApp.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="blog">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" data-i18n="blogTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Blog</h2>
<p className="mt-2 text-sm text-slate-300" data-i18n="blogSubtitle">Ideas, recetas y tips para fanáticos de lo dulce.</p>
</div>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="overflow-hidden rounded-2xl">
<img alt="Berries patagónicos" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white" data-i18n="post1Title">Recetas de tortas con berries patagónicos</h3>
<p className="mt-2 text-sm text-slate-300" data-i18n="post1Desc">Cómo lograr acidez equilibrada, crema estable y un brillo natural.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200" data-open-post="1">
<span data-i18n="readMore">Leer</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="overflow-hidden rounded-2xl">
<img alt="Dulce de leche" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white" data-i18n="post2Title">Dulce de leche: textura perfecta para rellenos</h3>
<p className="mt-2 text-sm text-slate-300" data-i18n="post2Desc">Trucos para que no se escurra, y para que corte prolijo en cada porción.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200" data-open-post="2">
<span data-i18n="readMore">Leer</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</article>
<article className="group rounded-3xl border border-white/10 bg-white/5 p-5 hover:bg-white/7 transition">
<div className="overflow-hidden rounded-2xl">
<img alt="Decoración de tortas" className="h-44 w-full object-cover opacity-90 group-hover:opacity-100 transition" loading="lazy" src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<h3 className="mt-4 text-lg font-semibold tracking-tight text-white" data-i18n="post3Title">Decoraciones inspiradas en glaciares y estepa</h3>
<p className="mt-2 text-sm text-slate-300" data-i18n="post3Desc">Paletas frías, texturas nevadas y detalles minimalistas que venden.</p>
<button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-cyan-200" data-open-post="3">
<span data-i18n="readMore">Leer</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
</button>
</article>
</div>
</div>
</section>

<section className="border-t border-white/10" id="contacto">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
<div className="grid gap-8 lg:grid-cols-12 lg:items-start">
<div className="lg:col-span-5">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white" data-i18n="contactTitle" style={{fontFamily: 'Fraunces, ui-serif, Georgia, serif'}}>Pedidos y consultas</h2>
<p className="mt-2 text-sm text-slate-300" data-i18n="contactSubtitle">Contanos fecha, porciones, sabor y si querés una temática patagónica.</p>
<div className="mt-6 grid gap-3">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="whatsTitle">WhatsApp</span>
</div>
<p className="mt-2 text-xs text-slate-300" data-i18n="whatsDesc">Respuestas rápidas para coordinar entrega y personalización.</p>
<a className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:opacity-95" href="https://wa.me/5490000000000?text=Hola%20Dulces%20de%20Santa%20Cruz%2C%20quiero%20hacer%20un%20pedido." id="whatsLink" rel="noreferrer" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="openWhats">Abrir WhatsApp</span>
</a>
<div className="mt-3 text-xs text-slate-400" data-i18n="virtualAddr">Dirección: virtual por ahora • Retiro en Río Gallegos o El Calafate</div>
</div>
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-sm font-semibold text-white">
<iconify-icon icon="solar:card-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="payTitle">Pagos</span>
</div>
<p className="mt-2 text-xs text-slate-300" data-i18n="payDesc">Checkout demo con Stripe o Mercado Pago (simulado).</p>
<div className="mt-4 grid grid-cols-2 gap-3">
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" data-i18n="payStripe" id="payStripe">Pagar con Stripe</button>
<button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" data-i18n="payMP" id="payMP">Mercado Pago</button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-3xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="formTitle">Formulario de pedido</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="formSubtitle">Te respondemos con disponibilidad y presupuesto.</div>
</div>
<div className="text-xs text-slate-300 inline-flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{fontSize: '1.1rem'}}></iconify-icon>
<span data-i18n="privacyMini">Datos protegidos (demo)</span>
</div>
</div>
<form className="mt-6 grid gap-4 sm:grid-cols-2" id="orderForm">
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="name">Nombre</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" name="name" placeholder="Tu nombre" required=""/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="phone">Teléfono</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" name="phone" placeholder="+54 9..." required=""/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="city">Ciudad</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" name="city" placeholder="Río Gallegos / El Calafate..."/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="date">Fecha</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/30" name="date" type="date"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="portions">Porciones</label>
<input className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" max="80" min="6" name="servings" type="number" value="12"/>
</div>
<div className="sm:col-span-1">
<label className="text-xs font-semibold text-slate-200" data-i18n="delivery">Entrega</label>
<div className="relative mt-2">
<button className="w-full inline-flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-950/55 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" id="deliveryBtn" type="button">
<span data-i18n="deliveryDefault" id="deliveryLabel">Seleccionar opción</span>
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</button>
<div className="hidden absolute left-0 right-0 mt-2 rounded-2xl border border-white/10 bg-slate-950/95 backdrop-blur p-2 shadow-2xl shadow-black/40" id="deliveryMenu">
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-delivery="rg" type="button">Retiro en Río Gallegos</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-delivery="ec" type="button">Retiro en El Calafate</button>
<button className="w-full rounded-xl px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/5" data-delivery="envio" type="button">Envío (coordinar)</button>
</div>
</div>
<input id="deliveryValue" name="delivery" type="hidden"/>
</div>
<div className="sm:col-span-2">
<label className="text-xs font-semibold text-slate-200" data-i18n="notes">Detalles</label>
<textarea className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/30" name="notes" placeholder="Sabor, relleno, cobertura, alergias, mensaje en la torta, etc." rows="4"></textarea>
</div>
<div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-95" type="submit">
<iconify-icon icon="solar:paper-plane-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
<span data-i18n="sendOrder">Enviar pedido</span>
</button>
<div className="text-xs text-slate-300" id="formStatus"></div>
</div>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
<div className="max-w-md">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
<span className="font-semibold tracking-tight" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>DSC</span>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-white" style={{fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif'}}>Dulces de Santa Cruz</div>
<div className="text-xs text-slate-300" data-i18n="footerTag">Tortas artesanales • Santa Cruz, Argentina</div>
</div>
</div>
<p className="mt-4 text-sm text-slate-300" data-i18n="footerDesc">Pedidos por encargo, entregas coordinadas y opciones dietéticas. Sitio demo con carrito y checkout simulados.</p>
</div>
<div className="grid gap-8 sm:grid-cols-3">
<div>
<div className="text-xs font-semibold text-slate-200" data-i18n="footerLinks">Enlaces</div>
<div className="mt-3 flex flex-col gap-2 text-sm">
<a className="text-slate-300 hover:text-white" data-i18n="navProducts" href="#productos">Productos</a>
<a className="text-slate-300 hover:text-white" data-i18n="navAbout" href="#nosotros">Sobre nosotros</a>
<a className="text-slate-300 hover:text-white" data-i18n="navBlog" href="#blog">Blog</a>
</div>
</div>
<div>
<div className="text-xs font-semibold text-slate-200" data-i18n="footerLegal">Legal</div>
<div className="mt-3 flex flex-col gap-2 text-sm">
<button className="text-left text-slate-300 hover:text-white" data-i18n="privacy" id="privacyBtn">Política de privacidad</button>
<button className="text-left text-slate-300 hover:text-white" data-i18n="terms" id="termsBtn">Términos</button>
</div>
</div>
<div>
<div className="text-xs font-semibold text-slate-200" data-i18n="footerSocial">Redes</div>
<div className="mt-3 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10" href="#">
<iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="Facebook" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10" href="#">
<iconify-icon icon="solar:facebook-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a aria-label="WhatsApp" className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-200 hover:bg-white/10" href="#contacto">
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-slate-400">
<div>© <span id="year"></span> Dulces de Santa Cruz</div>
<div data-i18n="footerNote">Hecho para demo • Santa Cruz, Argentina</div>
</div>
</div>
</footer>
</main>

<div className="hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" id="drawerBackdrop"></div>
<aside className="fixed right-0 top-0 z-50 h-full w-full max-w-md translate-x-full border-l border-white/10 bg-slate-950/90 backdrop-blur transition-transform duration-300" id="cartDrawer">
<div className="flex h-full flex-col">
<div className="flex items-center justify-between border-b border-white/10 p-5">
<div>
<div className="text-sm font-semibold tracking-tight text-white" data-i18n="cartTitle">Tu carrito</div>
<div className="mt-1 text-xs text-slate-300" data-i18n="cartSubtitle">Precios en ARS • Checkout demo</div>
</div>
<button aria-label="Cerrar" className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="closeCart">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-auto p-5 space-y-3" id="cartItems"></div>
<div className="border-t border-white/10 p-5">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-300" data-i18n="subtotal">Subtotal</span>
<span className="font-semibold text-white">ARS <span id="cartSubtotal">0</span></span>
</div>
<div className="mt-2 flex items-center justify-between text-xs text-slate-400">
<span data-i18n="shippingNote">Entrega se coordina por zona</span>
<span data-i18n="taxNote">Impuestos no incluidos (demo)</span>
</div>
<button className="mt-4 w-full rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-3 text-sm font-semibold text-slate-950 hover:opacity-95" data-i18n="checkout" id="checkoutBtn">
          Ir a pagar
        </button>
<button className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10" data-i18n="continue" id="continueBtn">
          Seguir comprando
        </button>
</div>
</div>
</aside>

<div className="hidden fixed inset-0 z-50" id="modalWrap">
<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" id="modalBackdrop"></div>
<div className="absolute inset-0 grid place-items-center p-4">
<div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-950/95 backdrop-blur shadow-2xl shadow-black/40">
<div className="flex items-start justify-between gap-4 border-b border-white/10 p-5">
<div>
<div className="text-sm font-semibold tracking-tight text-white" id="modalTitle"></div>
<div className="mt-1 text-xs text-slate-300" id="modalSubtitle"></div>
</div>
<button aria-label="Cerrar" className="rounded-2xl border border-white/10 bg-white/5 p-2 hover:bg-white/10" id="modalClose">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" style={{fontSize: '1.35rem'}}></iconify-icon>
</button>
</div>
<div className="p-5 text-sm text-slate-200 leading-relaxed" id="modalBody"></div>
<div className="hidden border-t border-white/10 p-5" id="modalFooter"></div>
</div>
</div>
</div>

    </>
  );
}
