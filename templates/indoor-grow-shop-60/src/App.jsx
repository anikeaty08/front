import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // ── Mobile Menu ──
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const hamIcon = document.getElementById('ham-icon');
let open = false;

menuBtn.addEventListener('click', () => {
  open = !open;
  mobileMenu.classList.toggle('open', open);
  document.body.classList.toggle('menu-open', open);
  hamIcon.setAttribute('icon', open ? 'solar:close-circle-linear' : 'solar:hamburger-menu-linear');
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (open && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    open = false;
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
  }
});

// ── Mobile accordion ──
function toggleMobCat(btn) {
  const sub = btn.nextElementSibling;
  const isOpen = btn.classList.contains('open');
  document.querySelectorAll('.mob-cat-toggle.open').forEach(b => {
    b.classList.remove('open');
    if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    if (sub) sub.classList.add('open');
  }
}

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.rev').forEach(el => observer.observe(el));

// ── Keyboard nav close ──
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && open) {
    open = false; mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    hamIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
  }
});
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="sale-banner">
<span className="sale-badge">🔥 GrowPRO SALE</span>
<span>Growboxen, LED Sets &amp; Zubehör – Bis zu 80% sparen!</span>
<span className="sale-badge">27.02. – 09.03.</span>
<a href="https://www.growmart.de/growpro_sale" style={{color: '#fff', textDecoration: 'underline', fontWeight: '800', fontSize: '11px'}}>Zum Sale →</a>
</div>

<div className="topbar">
<div className="topbar-left">
<span className="topbar-item"><iconify-icon icon="solar:delivery-bold" width="14"></iconify-icon> Schnelle Lieferung mit DHL</span>
<span className="topbar-item"><iconify-icon icon="solar:shield-check-bold" width="14"></iconify-icon> Diskreter Versand</span>
<span className="topbar-item"><iconify-icon icon="solar:euro-bold" width="14"></iconify-icon> Ab 100€ versandkostenfrei</span>
<span className="topbar-item"><iconify-icon icon="solar:clock-bold" width="14"></iconify-icon> Growshop 09:00 – 18:00 Uhr</span>
</div>
<div className="topbar-right">
<a href="https://www.growmart.de/blog">Blog</a>
<a href="https://www.growmart.de/Mein-Konto">Mein Konto</a>
<a href="https://www.growmart.de/Kontakt">Kontakt</a>
<a href="https://www.growmart.eu" style={{display: 'flex', alignItems: 'center', gap: '4px'}}>🇬🇧 EN</a>
</div>
</div>

<nav className="main-nav">
<div className="nav-inner">

<a className="logo" href="https://www.growmart.de">
<div className="logo-mark"><iconify-icon icon="solar:leaf-bold" style={{color: '#fff'}} width="22"></iconify-icon></div>
        Growmart
      </a>

<div className="nav-cats">
<div className="dropdown-wrapper">
<button className="nav-cat-btn">Komplettsets <iconify-icon icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></button>
<div className="mega-menu">
<div className="mega-menu-title">Komplettsets</div>
<a href="https://www.growmart.de/Growbox-komplettsets">Growbox Sets</a>
<a href="https://www.growmart.de/LED-Grow-Sets">LED Grow Sets</a>
<a href="https://www.growmart.de/Komplettset-Konfigurator">🔧 Set Konfigurator</a>
<a href="https://www.growmart.de/Trockenbox-Sets">Trockenbox Sets</a>
</div>
</div>
<div className="dropdown-wrapper">
<button className="nav-cat-btn">Growboxen <iconify-icon icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></button>
<div className="mega-menu" style={{minWidth: '340px'}}>
<div className="mega-menu-title">Growboxen</div>
<div className="mega-menu-cols">
<a href="https://www.growmart.de/ac-infinity-growboxen">AC Infinity</a>
<a href="https://www.growmart.de/DiamondBox">DiamondBox</a>
<a href="https://www.growmart.de/GrowPRO">GrowPRO</a>
<a href="https://www.growmart.de/HOMEbox">HOMEbox</a>
<a href="https://www.growmart.de/Pure-Tent">Pure Tent</a>
<a href="https://www.growmart.de/Secret-Jardin">Secret Jardin</a>
</div>
</div>
</div>
<div className="dropdown-wrapper">
<button className="nav-cat-btn">Beleuchtung <iconify-icon icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></button>
<div className="mega-menu" style={{minWidth: '320px'}}>
<div className="mega-menu-title">LED &amp; Beleuchtung</div>
<a href="https://www.growmart.de/LED-Grow-Lampen">Alle LED Grow Lampen</a>
<a href="https://www.growmart.de/SANlight-LED">SANlight LED</a>
<a href="https://www.growmart.de/Lumatek-LED">Lumatek LED</a>
<a href="https://www.growmart.de/Greenception-LED-Grow-Lampen">Greenception</a>
<a href="https://www.growmart.de/hortiONE-LED">hortiONE LED</a>
<a href="https://www.growmart.de/Beleuchtungssets">Beleuchtungssets</a>
</div>
</div>
<div className="dropdown-wrapper">
<button className="nav-cat-btn">Belüftung <iconify-icon icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></button>
<div className="mega-menu">
<div className="mega-menu-title">Belüftung &amp; Klima</div>
<a href="https://www.growmart.de/Abluft-Sets">Abluft-Sets</a>
<a href="https://www.growmart.de/Aktivkohlefilter">Aktivkohlefilter</a>
<a href="https://www.growmart.de/EC-Ventilatoren">EC Ventilatoren</a>
<a href="https://www.growmart.de/Klimakontrolle">Klimakontrolle</a>
<a href="https://www.growmart.de/Rohrventilatoren">Rohrventilatoren</a>
</div>
</div>
<div className="dropdown-wrapper">
<button className="nav-cat-btn">Dünger <iconify-icon icon="solar:alt-arrow-down-bold" width="12"></iconify-icon></button>
<div className="mega-menu" style={{minWidth: '360px'}}>
<div className="mega-menu-title">Dünger &amp; Nährstoffe</div>
<div className="mega-menu-cols">
<a href="https://www.growmart.de/Canna">Canna</a>
<a href="https://www.growmart.de/BioBizz">BioBizz</a>
<a href="https://www.growmart.de/Hesi">Hesi</a>
<a href="https://www.growmart.de/Plagron">Plagron</a>
<a href="https://www.growmart.de/Advanced-Nutrients">Advanced Nutrients</a>
<a href="https://www.growmart.de/Atami">Atami</a>
<a href="https://www.growmart.de/Athena-Nutrients">Athena Nutrients</a>
<a href="https://www.growmart.de/BioTabs">BioTabs</a>
</div>
</div>
</div>
<button className="nav-cat-btn" onclick="window.location='https://www.growmart.de/Sonderangebote'" style={{color: '#dc2626', background: '#fff1f2'}}>🔥 Sale</button>
</div>

<div className="nav-actions">
<form className="search-form" onsubmit="return false">
<iconify-icon icon="solar:magnifer-linear" style={{color: '#9ca3af'}} width="16"></iconify-icon>
<input aria-label="Suche" placeholder="Produkte suchen…" type="search"/>
</form>
<a aria-label="Konto" className="icon-btn" href="https://www.growmart.de/Mein-Konto">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
</a>
<a aria-label="Wunschzettel" className="icon-btn" href="https://www.growmart.de/Wunschliste">
<iconify-icon icon="solar:heart-linear" width="22"></iconify-icon>
</a>
<a aria-label="Warenkorb" className="cart-btn" href="https://www.growmart.de/Warenkorb">
<iconify-icon icon="solar:cart-large-linear" width="20"></iconify-icon>
<span className="cart-badge">0</span>
</a>
<button aria-label="Menü" className="hamburger-btn" id="menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear" id="ham-icon" width="22"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-label="Navigation" id="mobile-menu" role="dialog">
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Komplettsets <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/Growbox-komplettsets">Growbox Sets</a>
<a href="https://www.growmart.de/LED-Grow-Sets">LED Grow Sets</a>
<a href="https://www.growmart.de/Komplettset-Konfigurator">Set Konfigurator</a>
<a href="https://www.growmart.de/Trockenbox-Sets">Trockenbox Sets</a>
</div>
</div>
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Growboxen <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/GrowPRO">GrowPRO</a>
<a href="https://www.growmart.de/HOMEbox">HOMEbox</a>
<a href="https://www.growmart.de/ac-infinity-growboxen">AC Infinity</a>
<a href="https://www.growmart.de/DiamondBox">DiamondBox</a>
<a href="https://www.growmart.de/Secret-Jardin">Secret Jardin</a>
<a href="https://www.growmart.de/Pure-Tent">Pure Tent</a>
</div>
</div>
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Beleuchtung <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/LED-Grow-Lampen">Alle LED Lampen</a>
<a href="https://www.growmart.de/SANlight-LED">SANlight</a>
<a href="https://www.growmart.de/Lumatek-LED">Lumatek</a>
<a href="https://www.growmart.de/Greenception-LED-Grow-Lampen">Greenception</a>
<a href="https://www.growmart.de/hortiONE-LED">hortiONE</a>
</div>
</div>
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Belüftung <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/Abluft-Sets">Abluft-Sets</a>
<a href="https://www.growmart.de/Aktivkohlefilter">Aktivkohlefilter</a>
<a href="https://www.growmart.de/EC-Ventilatoren">EC Ventilatoren</a>
<a href="https://www.growmart.de/Klimakontrolle">Klimakontrolle</a>
</div>
</div>
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Dünger <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/Canna">Canna</a>
<a href="https://www.growmart.de/BioBizz">BioBizz</a>
<a href="https://www.growmart.de/Hesi">Hesi</a>
<a href="https://www.growmart.de/Plagron">Plagron</a>
<a href="https://www.growmart.de/Advanced-Nutrients">Advanced Nutrients</a>
<a href="https://www.growmart.de/Atami">Atami</a>
</div>
</div>
<div className="mob-section">
<button className="mob-cat-toggle" onclick="toggleMobCat(this)">Erden &amp; Substrate <iconify-icon icon="solar:alt-arrow-down-bold" width="16"></iconify-icon></button>
<div className="mob-sub">
<a href="https://www.growmart.de/Grow-Erde">Erde</a>
<a href="https://www.growmart.de/Kokoserde">Kokoserde</a>
<a href="https://www.growmart.de/Grodan">Grodan (Steinwolle)</a>
<a href="https://www.growmart.de/Perlite">Perlite</a>
<a href="https://www.growmart.de/Blaehton">Blähton</a>
</div>
</div>
<div className="mob-section">
<a className="mob-cat-toggle" href="https://www.growmart.de/Bewaesserung" style={{color: 'var(--ink)'}}>Bewässerung</a>
</div>
<div className="mob-section">
<a className="mob-cat-toggle" href="https://www.growmart.de/Zubehoer" style={{color: 'var(--ink)'}}>Zubehör</a>
</div>
<div className="mob-section">
<a className="mob-cat-toggle" href="https://www.growmart.de/Sonderangebote" style={{color: '#dc2626', fontWeight: '800'}}>🔥
        Sale</a>
</div>
<div className="mob-footer">
<p style={{fontSize: '13px', color: 'var(--muted)', fontWeight: '500'}}>Telefon-Support</p>
<a href="tel:+494073676191" style={{fontFamily: '\'Syne\',sans-serif', fontSize: '20px', fontWeight: '800', display: 'block', marginTop: '6px', color: 'var(--ink)'}}>040
        – 736 761 91</a>
<p style={{fontSize: '12px', color: 'var(--muted)', marginTop: '4px'}}>Mo – Fr: 10:00–12:00 / 13:00–16:00 Uhr</p>
</div>
</div>

<section className="hero">
<div className="hero-wrap">
<div className="hero-grid">
<div>
<div className="hero-eyebrow rev"><span className="ping"></span> GrowPRO 4.0 – Jetzt auf Lager</div>
<h1 className="rev rev-d1">Indoor Growing<br/><strong>Neu Definiert.</strong></h1>
<p className="hero-sub rev rev-d2">Dein Growshop aus Hamburg mit über <strong>3.300 Produkten</strong> – von
            Growboxen über LED Lampen bis hin zu Dünger und Zubehör. Schneller Versand, Top-Beratung.</p>
<div className="hero-btns rev rev-d3">
<a className="btn-dark" href="https://www.growmart.de/Komplettsets">Komplettsets ansehen <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon></a>
<a className="btn-outline" href="https://www.growmart.de/Komplettset-Konfigurator">Set konfigurieren</a>
</div>
<div className="hero-trust rev rev-d4">
<span className="trust-item"><iconify-icon icon="solar:delivery-bold" width="16"></iconify-icon> Ab 100€ versandkostenfrei</span>
<span className="trust-item"><iconify-icon icon="solar:shield-check-bold" width="16"></iconify-icon> Diskreter Versand</span>
<span className="trust-item"><iconify-icon icon="solar:star-bold" width="16"></iconify-icon> Zahlung auf Rechnung</span>
<span className="trust-item"><iconify-icon icon="solar:map-point-bold" width="16"></iconify-icon> Growshop Hamburg</span>
</div>
</div>
<div className="hero-visual rev rev-d2">
<div className="hero-card-main">
<div className="hero-float hero-float-tl">
<div className="float-num">3.300<span className="float-green">+</span></div>
<div className="float-label">Produkte verfügbar</div>
</div>
<div className="hero-float hero-float-tr">
<div className="float-num">4.9<span className="float-green">★</span></div>
<div className="float-label">Kundenbewertung</div>
</div>
<iconify-icon icon="solar:box-minimalistic-bold-duotone" width="260"></iconify-icon>
<div className="hero-product-tag">
<div>
<div className="tag-label">🔥 Top Seller</div>
<div className="tag-name">GrowPRO 4.0 M</div>
</div>
<div className="tag-price">ab €149</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="cats-strip">
<div className="cats-inner">
<div className="cats-grid">
<a className="cat-icon-item rev" href="https://www.growmart.de/Komplettsets">
<iconify-icon icon="solar:box-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Komplett-sets</span>
</a>
<a className="cat-icon-item rev rev-d1" href="https://www.growmart.de/Growboxen">
<iconify-icon icon="solar:home-2-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Growboxen</span>
</a>
<a className="cat-icon-item rev rev-d1" href="https://www.growmart.de/Beleuchtung">
<iconify-icon icon="solar:sun-2-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Beleuchtung</span>
</a>
<a className="cat-icon-item rev rev-d2" href="https://www.growmart.de/Belueftung">
<iconify-icon icon="solar:wind-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Belüftung</span>
</a>
<a className="cat-icon-item rev rev-d2" href="https://www.growmart.de/Duenger">
<iconify-icon icon="solar:leaf-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Dünger</span>
</a>
<a className="cat-icon-item rev rev-d3" href="https://www.growmart.de/Erden-Substrate">
<iconify-icon icon="solar:planet-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Erden &amp; Substrate</span>
</a>
<a className="cat-icon-item rev rev-d3" href="https://www.growmart.de/Bewaesserung">
<iconify-icon icon="solar:waterdrops-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Bewässerung</span>
</a>
<a className="cat-icon-item rev rev-d4" href="https://www.growmart.de/Zubehoer">
<iconify-icon icon="solar:settings-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Zubehör</span>
</a>
<a className="cat-icon-item rev rev-d4" href="https://www.headmart.de">
<iconify-icon icon="solar:shop-bold-duotone" width="32"></iconify-icon>
<span className="cat-name">Headshop</span>
</a>
</div>
</div>
</div>

<section className="promo-section">
<div className="promo-inner">
<div className="promo-card rev">
<div className="promo-text">
<div className="promo-eyebrow">🔥 Zeitlich begrenzt</div>
<h2>GrowPRO SALE</h2>
<p>Growboxen, LED Sets &amp; Zubehör – stark reduziert!</p>
<p className="date">Gültig: 27.02. – 09.03.2025</p>
</div>
<div className="promo-savings">
<div className="pct">80<span style={{fontSize: '36px'}}>%</span></div>
<div className="pct-label">BIS ZU SPAREN</div>
</div>
<div className="promo-actions">
<a className="btn-white-solid" href="https://www.growmart.de/growpro_sale">Zum GrowPRO Sale <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon></a>
<a className="btn-ghost-white" href="https://www.growmart.de/Sonderangebote">Alle Angebote ansehen</a>
</div>
</div>
</div>
</section>

<section className="products-section" style={{paddingTop: '0'}}>
<div className="section-inner">
<div className="section-head rev">
<div>
<h2>Aktuelle Angebote</h2>
<p>Stark reduzierte Artikel – solange der Vorrat reicht.</p>
</div>
<a className="view-all-link" href="https://www.growmart.de/Sonderangebote">Alle Angebote <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></a>
</div>
<div className="products-grid">
<div className="prod-card rev">
<div className="prod-img">
<span className="prod-badge badge-sale">–11%</span>
<iconify-icon icon="solar:home-2-bold-duotone" width="120"></iconify-icon>
<button className="prod-quick" onclick="window.location='https://www.growmart.de/HOMEbox-Q150-LED-Grow-Set-2x-EVO-5-150-15'">
<iconify-icon icon="solar:cart-plus-bold" width="15"></iconify-icon> In den Warenkorb
          </button>
<span className="delivery-badge">✓ Auf Lager</span>
</div>
<div className="prod-brand">HOMEbox × SANlight</div>
<div className="prod-name">Q150+ LED Grow Set + 2× EVO 5-150 1.5</div>
<div className="prod-desc">Komplettes 150cm-Growbox-Set mit 2× SANlight EVO</div>
<div className="prod-foot">
<span><span className="prod-price">1.699,00 €</span><span className="prod-price-old">1.899,00 €</span></span>
<span className="prod-rating"><iconify-icon icon="solar:star-bold" style={{color: '#facc15'}} width="12"></iconify-icon> 4.9</span>
</div>
</div>
<div className="prod-card rev rev-d1">
<div className="prod-img">
<span className="prod-badge badge-sale">–20%</span>
<iconify-icon icon="solar:star-fall-bold-duotone" width="120"></iconify-icon>
<button className="prod-quick" onclick="window.location='https://www.growmart.de/SANlight-STIXX-2-Treiber-Set-530W'">
<iconify-icon icon="solar:cart-plus-bold" width="15"></iconify-icon> In den Warenkorb
          </button>
<span className="delivery-badge">✓ Auf Lager</span>
</div>
<div className="prod-brand">SANlight</div>
<div className="prod-name">STIXX 2 Treiber Set, 530W</div>
<div className="prod-desc">Professionelles LED-Treiber-Set für maximalen Ertrag</div>
<div className="prod-foot">
<span><span className="prod-price">151,92 €</span><span className="prod-price-old">189,90 €</span></span>
<span className="prod-rating"><iconify-icon icon="solar:star-bold" style={{color: '#facc15'}} width="12"></iconify-icon> 4.8</span>
</div>
</div>
<div className="prod-card rev rev-d2">
<div className="prod-img">
<span className="prod-badge badge-bware">B-Ware</span>
<span className="prod-badge badge-sale" style={{top: '44px'}}>–20%</span>
<iconify-icon icon="solar:home-2-bold-duotone" width="120"></iconify-icon>
<button className="prod-quick" onclick="window.location='https://www.growmart.de/Mammoth-Classic-120-Growbox-120x120x200cm-B-Ware'">
<iconify-icon icon="solar:cart-plus-bold" width="15"></iconify-icon> Details ansehen
          </button>
</div>
<div className="prod-brand">Mammoth</div>
<div className="prod-name">Classic+ 120 Growbox 120×120×200cm (B-Ware)</div>
<div className="prod-desc">Große Growbox in B-Ware-Qualität zum Sparpreis</div>
<div className="prod-foot">
<span><span className="prod-price">143,20 €</span><span className="prod-price-old">179,00 €</span></span>
<span className="prod-rating"><iconify-icon icon="solar:star-bold" style={{color: '#facc15'}} width="12"></iconify-icon> 4.5</span>
</div>
</div>
<div className="prod-card rev rev-d3">
<div className="prod-img">
<span className="prod-badge badge-new">Neu</span>
<iconify-icon icon="solar:settings-bold-duotone" width="120"></iconify-icon>
<button className="prod-quick" onclick="window.location='https://www.growmart.de/Carson-Digitalmikroskop-eFlex-MM-840'">
<iconify-icon icon="solar:cart-plus-bold" width="15"></iconify-icon> In den Warenkorb
          </button>
<span className="delivery-badge">✓ Auf Lager</span>
</div>
<div className="prod-brand">Carson</div>
<div className="prod-name">Digitalmikroskop eFlex MM-840</div>
<div className="prod-desc">Professionelles Digitalmikroskop für Ernte &amp; Analyse</div>
<div className="prod-foot">
<span className="prod-price">66,90 €</span>
<span className="prod-rating"><iconify-icon icon="solar:star-bold" style={{color: '#facc15'}} width="12"></iconify-icon> 4.7</span>
</div>
</div>
</div>
</div>
</section>

<section className="bento-section">
<div className="section-inner">
<div className="section-head rev">
<div>
<h2>Das komplette Sortiment</h2>
<p>Alles für Deinen perfekten Grow – in einer Quelle.</p>
</div>
</div>
<div className="bento-grid">

<a className="bc bc-hero rev" href="https://www.growmart.de/Growbox-komplettsets">
<iconify-icon className="bg-icon" icon="solar:box-bold-duotone" width="350"></iconify-icon>
<div className="bc-hero-count">Über 50 Sets verfügbar</div>
<h3>Growbox<br/>Komplettsets</h3>
<p>Growzelt, LED Beleuchtung &amp; Abluftsystem – perfekt aufeinander abgestimmt. Einfach aufbauen und sofort
            loslegen.</p>
<button className="btn-pill">Sets ansehen <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></button>
</a>

<a className="bc bc-led rev rev-d1" href="https://www.growmart.de/LED-Grow-Lampen">
<div>
<div style={{fontSize: '11px', fontWeight: '800', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--g)', marginBottom: '8px'}}>
              Grow Beleuchtung</div>
<h3>LED Grow Lampen</h3>
<p style={{fontSize: '13px', color: '#166534', marginTop: '8px', lineHeight: '1.6'}}>Bis zu 40% Energieersparnis gegenüber
              HPS – perfekte Spektren für jede Wachstumsphase.</p>
</div>
<div>
<div className="brand-pills">
<span className="brand-pill">SANlight</span>
<span className="brand-pill">Lumatek</span>
<span className="brand-pill">Greenception</span>
<span className="brand-pill">hortiONE</span>
</div>
</div>
</a>

<a className="bc bc-sm rev" href="https://www.growmart.de/Duenger">
<div className="icon-circle"><iconify-icon icon="solar:leaf-bold-duotone" width="26"></iconify-icon></div>
<div>
<h3>Dünger &amp; Nährstoffe</h3>
<p>Canna, BioBizz, Hesi, Plagron, Advanced Nutrients &amp; mehr – für jede Wachstumsphase.</p>
</div>
</a>

<a className="bc bc-sm rev rev-d1" href="https://www.growmart.de/Belueftung">
<div className="icon-circle"><iconify-icon icon="solar:wind-bold-duotone" width="26"></iconify-icon></div>
<div>
<h3>Belüftung &amp; Klima</h3>
<p>EC Ventilatoren, Aktivkohlefilter, Abluft-Sets &amp; Klimakontrolle für konstante VPD-Werte.</p>
</div>
</a>

<a className="bc bc-dark rev rev-d2" href="https://www.growmart.de/Kontakt">
<div>
<h3>Experten-Beratung</h3>
<p>Unser Hamburg-Team hilft Dir bei Fragen zu Produkten &amp; Bestellungen – telefonisch oder per E-Mail.</p>
</div>
<div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px'}}>
<iconify-icon icon="solar:phone-bold" style={{color: 'var(--g2)'}} width="18"></iconify-icon>
<span style={{color: '#fff', fontWeight: '700', fontSize: '14px'}}>040 – 736 761 91</span>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
<iconify-icon icon="solar:clock-bold" style={{color: 'var(--g2)'}} width="18"></iconify-icon>
<span style={{color: '#6b7280', fontSize: '13px'}}>Mo–Fr 10:00–12:00 / 13:00–16:00 Uhr</span>
</div>
</div>
</a>

<a className="bc bc-wide rev rev-d1" href="https://www.growmart.de/Bewaesserung">
<div>
<h3>Bewässerung</h3>
<p>Automatische &amp; manuelle Systeme für stressfreies Gießen.</p>
</div>
<div className="sub-cats">
<span className="sub-cat-link">AutoPot</span>
<span className="sub-cat-link">Blumat</span>
<span className="sub-cat-link">Hydroponic</span>
<span className="sub-cat-link">Umkehrosmose</span>
<span className="sub-cat-link">Mikrobewässerung</span>
</div>
</a>

<a className="bc bc-sm rev" href="https://www.growmart.de/Erden-Substrate">
<div className="icon-circle"><iconify-icon icon="solar:planet-bold-duotone" width="26"></iconify-icon></div>
<div>
<h3>Erden &amp; Substrate</h3>
<p>Kokoserde, Steinwolle, Perlite, Blähton, Grodan &amp; mehr für optimale Wurzelentwicklung.</p>
</div>
</a>

<a className="bc bc-sm rev rev-d1" href="https://www.growmart.de/Zubehoer">
<div className="icon-circle"><iconify-icon icon="solar:settings-bold-duotone" width="26"></iconify-icon></div>
<div>
<h3>Zubehör</h3>
<p>Töpfe, Messgeräte, pH/EC, Heizmatten, Saatgut, Ernte &amp; Curing – alles von A–Z.</p>
</div>
</a>
</div>
</div>
</section>

<section className="brands-section">
<div className="section-inner">
<div className="brands-label rev">Unsere Marken – über 50 namhafte Hersteller</div>
<div className="brands-scroll rev">
<a className="brand-chip" href="https://www.growmart.de/SANlight-LED">SANlight</a>
<a className="brand-chip" href="https://www.growmart.de/Lumatek-LED">Lumatek</a>
<a className="brand-chip" href="https://www.growmart.de/GrowPRO">GrowPRO</a>
<a className="brand-chip" href="https://www.growmart.de/HOMEbox">HOMEbox</a>
<a className="brand-chip" href="https://www.growmart.de/ac-infinity-growboxen">AC Infinity</a>
<a className="brand-chip" href="https://www.growmart.de/Secret-Jardin">Secret Jardin</a>
<a className="brand-chip" href="https://www.growmart.de/Canna">Canna</a>
<a className="brand-chip" href="https://www.growmart.de/BioBizz">BioBizz</a>
<a className="brand-chip" href="https://www.growmart.de/Hesi">Hesi</a>
<a className="brand-chip" href="https://www.growmart.de/Plagron">Plagron</a>
<a className="brand-chip" href="https://www.growmart.de/Advanced-Nutrients">Advanced Nutrients</a>
<a className="brand-chip" href="https://www.growmart.de/Atami">Atami</a>
<a className="brand-chip" href="https://www.growmart.de/Athena-Nutrients">Athena Nutrients</a>
<a className="brand-chip" href="https://www.growmart.de/BioTabs">BioTabs</a>
<a className="brand-chip" href="https://www.growmart.de/DiamondBox">DiamondBox</a>
<a className="brand-chip" href="https://www.growmart.de/Grodan">Grodan</a>
<a className="brand-chip" href="https://www.growmart.de/AutoPot">AutoPot</a>
<a className="brand-chip" href="https://www.growmart.de/Greenception-LED-Grow-Lampen">Greenception</a>
</div>
</div>
</section>

<section className="usps-section">
<div className="section-inner">
<div className="section-head rev" style={{marginBottom: '40px'}}>
<div>
<h2>Deine Vorteile bei Growmart</h2>
<p>Seit über 10 Jahren Dein zuverlässiger Grow-Partner.</p>
</div>
</div>
<div className="usps-grid">
<div className="usp-item rev">
<div className="usp-icon"><iconify-icon icon="solar:box-bold-duotone" width="28"></iconify-icon></div>
<div className="usp-title">Über 3.300 Produkte</div>
<p className="usp-desc">Vom Einsteiger-Set bis zur Profi-Anlage – wir führen alles für Deinen Grow in einer
            sorgfältig kuratierten Auswahl.</p>
</div>
<div className="usp-item rev rev-d1">
<div className="usp-icon"><iconify-icon icon="solar:delivery-bold-duotone" width="28"></iconify-icon></div>
<div className="usp-title">Schneller Versand</div>
<p className="usp-desc">Bestellungen gehen noch am selben oder nächsten Werktag raus – diskret und zuverlässig mit
            DHL. Ab 100€ versandkostenfrei.</p>
</div>
<div className="usp-item rev rev-d2">
<div className="usp-icon"><iconify-icon icon="solar:shop-bold-duotone" width="28"></iconify-icon></div>
<div className="usp-title">Lagerverkauf Hamburg</div>
<p className="usp-desc">Besuche uns vor Ort in Hamburg-Billbrook. Mo–Fr 9–18 Uhr, Sa 11–16 Uhr. Direktkauf &amp;
            Beratung vor Ort.</p>
</div>
<div className="usp-item rev rev-d3">
<div className="usp-icon"><iconify-icon icon="solar:headphones-round-bold-duotone" width="28"></iconify-icon>
</div>
<div className="usp-title">Top Kundenservice</div>
<p className="usp-desc">Unser Team beantwortet Deine Fragen schnell und kompetent. Per Telefon, E-Mail oder
            persönlich vor Ort.</p>
</div>
</div>
</div>
</section>

<section className="store-section">
<div className="section-inner">
<div className="store-grid">
<div className="store-info">
<h2 className="rev">Growshop in Hamburg besuchen</h2>
<p className="rev">Unser Ladengeschäft in Hamburg-Billbrook bietet Dir die Möglichkeit, Produkte direkt zu kaufen
            und persönliche Beratung zu erhalten. Bezahlung vor Ort mit Bargeld oder EC-Karte.</p>
<div className="store-hours rev rev-d1">
<h4><iconify-icon icon="solar:clock-bold-duotone" width="20"></iconify-icon> Öffnungszeiten</h4>
<div className="hours-row">
<span className="hours-day">Montag – Freitag</span><span className="hours-time">09:00 – 18:00 Uhr</span></div>
<div className="hours-row">
<span className="hours-day">Samstag</span><span className="hours-time">11:00 – 16:00 Uhr</span></div>
<div className="hours-row"><span className="hours-day">Sonntag</span><span className="hours-time">Geschlossen</span>
</div>
<div className="hours-row" style={{border: 'none', paddingTop: '12px', fontSize: '12px', color: 'var(--muted)'}}>
<span>Telefon-Support: Mo–Fr 10:00–12:00 / 13:00–16:00 Uhr</span>
</div>
</div>
<div className="store-contact rev rev-d2">
<h4>So erreichst Du uns</h4>
<a className="contact-row" href="tel:+494073676191"><iconify-icon icon="solar:phone-bold-duotone" width="18"></iconify-icon> 040 – 736 761 91</a>
<a className="contact-row" href="https://www.growmart.de/Kontakt"><iconify-icon icon="solar:letter-bold-duotone" width="18"></iconify-icon> Kontaktformular</a>
<div className="contact-row"><iconify-icon icon="solar:map-point-bold-duotone" width="18"></iconify-icon>
              Billbrookdeich 80, 22113 Hamburg-Billbrook</div>
</div>
</div>
<div className="store-map rev rev-d1">
<div className="map-placeholder">
<iconify-icon icon="solar:map-point-bold-duotone" width="64"></iconify-icon>
<div className="map-address">Billbrookdeich 80</div>
<div className="map-sub">22113 Hamburg-Billbrook, Deutschland</div>
<a className="map-cta" href="https://goo.gl/maps/pd6trfcyyu52" target="_blank">
<iconify-icon icon="solar:map-point-bold" width="18"></iconify-icon>
              In Google Maps öffnen
            </a>
</div>
</div>
</div>
</div>
</section>

<section className="tools-section">
<div className="section-inner">
<div className="section-head rev">
<div>
<h2>Nützliche Grow-Tools</h2>
<p>Gratis Online-Rechner &amp; Guides für optimale Ergebnisse.</p>
</div>
</div>
<div className="tools-grid">
<a className="tool-card rev" href="https://www.growmart.de/Komplettset-Konfigurator">
<div className="tool-icon"><iconify-icon icon="solar:settings-bold-duotone" width="28"></iconify-icon></div>
<h3>Set Konfigurator</h3>
<p>Stelle Dein individuelles Growbox-Komplettset zusammen – perfekt auf Deine Bedürfnisse abgestimmt.</p>
<span className="tool-link">Konfigurator starten <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
</a>
<a className="tool-card rev rev-d1" href="https://www.growmart.de/Belueftungsrechner">
<div className="tool-icon"><iconify-icon icon="solar:wind-bold-duotone" width="28"></iconify-icon></div>
<h3>Belüftungsrechner</h3>
<p>Berechne den optimalen Luftdurchsatz für Dein Growzelt – einfach Abmessungen eingeben.</p>
<span className="tool-link">Jetzt berechnen <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
</a>
<a className="tool-card rev rev-d2" href="https://www.growmart.de/Stromkostenrechner">
<div className="tool-icon"><iconify-icon icon="solar:bolt-bold-duotone" width="28"></iconify-icon></div>
<h3>Stromkostenrechner</h3>
<p>Erfahre, wie viel Deine Beleuchtung wirklich kostet – und wie viel Du mit LEDs sparst.</p>
<span className="tool-link">Kosten berechnen <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="blog-section">
<div className="section-inner">
<div className="section-head rev">
<div>
<h2>Aus unserem Blog</h2>
<p>Grow-Guides, Tipps &amp; Anleitungen für Einsteiger und Profis.</p>
</div>
<a className="view-all-link" href="https://www.growmart.de/blog">Alle Artikel <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon></a>
</div>
<div className="blog-grid">
<a className="blog-card rev" href="https://www.growmart.de/blog/welche-grow-lampe-fuer-welche-growbox-flaeche">
<div className="blog-img"><iconify-icon icon="solar:sun-2-bold-duotone" width="72"></iconify-icon></div>
<div className="blog-date">15. Juni 2022</div>
<div className="blog-title">Welche Grow Lampe für welche Growbox-Fläche?</div>
<p className="blog-excerpt">Welche Lampe brauche ich für die Wuchs- oder Blühphase? Und welche Leistung für meine
            Growbox?</p>
<span className="blog-read">Weiterlesen <iconify-icon icon="solar:arrow-right-linear" width="13"></iconify-icon></span>
</a>
<a className="blog-card rev rev-d1" href="https://www.growmart.de/blog/weniger-ist-mehr-uberdungung-beim-indoor-grow">
<div className="blog-img"><iconify-icon icon="solar:leaf-bold-duotone" width="72"></iconify-icon></div>
<div className="blog-date">12. Dezember 2019</div>
<div className="blog-title">Weniger ist mehr – Überdüngung beim Indoor Grow</div>
<p className="blog-excerpt">Ähnlich wie beim Gießen solltest Du Dich auch beim Düngen schnell vom „viel hilft
            viel"-Denken verabschieden.</p>
<span className="blog-read">Weiterlesen <iconify-icon icon="solar:arrow-right-linear" width="13"></iconify-icon></span>
</a>
<a className="blog-card rev rev-d2" href="https://www.growmart.de/blog/so-giesst-du-deinen-indoor-grow-richtig">
<div className="blog-img"><iconify-icon icon="solar:waterdrops-bold-duotone" width="72"></iconify-icon></div>
<div className="blog-date">1. November 2019</div>
<div className="blog-title">So gießt Du Deinen Indoor Grow richtig</div>
<p className="blog-excerpt">Wasser ist Leben – aber wie viel und wie oft? Wann ist der beste Zeitpunkt? Alle
            Antworten hier.</p>
<span className="blog-read">Weiterlesen <iconify-icon icon="solar:arrow-right-linear" width="13"></iconify-icon></span>
</a>
<a className="blog-card rev rev-d3" href="https://www.growmart.de/blog/aufbauanleitung-fur-lueftungssets">
<div className="blog-img"><iconify-icon icon="solar:wind-bold-duotone" width="72"></iconify-icon></div>
<div className="blog-date">3. Juli 2019</div>
<div className="blog-title">Aufbauanleitung für Lüftungssets</div>
<p className="blog-excerpt">Schritt-für-Schritt-Anleitung für den Aufbau von Lüftungssets am Beispiel eines
            Lüftungsset 160 ECO.</p>
<span className="blog-read">Weiterlesen <iconify-icon icon="solar:arrow-right-linear" width="13"></iconify-icon></span>
</a>
</div>
</div>
</section>

<section className="reviews-section">
<div className="section-inner">
<div className="reviews-header rev">
<div className="rating-big">4.9</div>
<div className="stars-big">★★★★★</div>
<p>Tausende zufriedene Kunden – #BecauseWeEnjoyIt</p>
</div>
<div className="reviews-grid">
<div className="review-card rev">
<div className="review-stars">★★★★★</div>
<p className="review-text">„Das GrowPRO-Set war ein Game-Changer. Einfacher Aufbau und bereits im ersten Durchlauf
            top Ergebnisse. Das Support-Team ist wirklich kompetent – schnelle Antworten, hilfreiche Tipps."</p>
<div className="reviewer">
<div className="reviewer-av">MK</div>
<div>
<div className="reviewer-name">Markus K.</div>
<div className="reviewer-meta">Verifizierter Käufer · Hamburg</div>
<div className="verified"><iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon>
                Verifiziert</div>
</div>
</div>
</div>
<div className="review-card rev rev-d1">
<div className="review-stars">★★★★★</div>
<p className="review-text">„Beste LED die ich je hatte. Die SANlight EVO läuft kühl, das Spektrum ist perfekt und
            meine Stromrechnung sank um 35%. Hab direkt eine zweite für mein zweites Zelt bestellt."</p>
<div className="reviewer">
<div className="reviewer-av">TR</div>
<div>
<div className="reviewer-name">Thomas R.</div>
<div className="reviewer-meta">Verifizierter Käufer · Berlin</div>
<div className="verified"><iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon>
                Verifiziert</div>
</div>
</div>
</div>
<div className="review-card rev rev-d2">
<div className="review-stars">★★★★★</div>
<p className="review-text">„Diskretes Paket, schnelle Lieferung, alles tadellos angekommen. Das Belüftungsset ist
            super verarbeitet. Growmart ist der einzige Shop den ich in Zukunft nutzen werde."</p>
<div className="reviewer">
<div className="reviewer-av">AL</div>
<div>
<div className="reviewer-name">Anna L.</div>
<div className="reviewer-meta">Verifizierte Käuferin · München</div>
<div className="verified"><iconify-icon icon="solar:verified-check-bold" width="12"></iconify-icon>
                Verifiziert</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="nl-section">
<div className="nl-inner">
<div className="nl-text">
<h2 className="rev">Newsletter – 5€ Gutschein sichern</h2>
<p className="rev">Erhalte Infos zu neuen Produkten, Angeboten und Grow-Tipps direkt in Dein Postfach. Jederzeit
          abmeldbar.</p>
<div className="nl-benefit rev rev-d1"><iconify-icon icon="solar:gift-bold-duotone" width="18"></iconify-icon> 5€
          Gutschein zur Begrüßung</div>
<div className="nl-benefit rev rev-d1"><iconify-icon icon="solar:sale-bold-duotone" width="18"></iconify-icon>
          Exklusive Sale-Vorankündigungen</div>
<div className="nl-benefit rev rev-d2"><iconify-icon icon="solar:leaf-bold-duotone" width="18"></iconify-icon>
          Grow-Tipps &amp; neue Produkt-Infos</div>
</div>
<div className="nl-form rev rev-d1">
<h3>Jetzt anmelden &amp; sparen</h3>
<div className="nl-input-wrap">
<input className="nl-input" placeholder="Deine E-Mail-Adresse" type="email"/>
<button className="btn-green" onclick="window.location='https://www.growmart.de/growmart-newsletter-anmeldung'">Anmelden</button>
</div>
<p className="nl-disclaimer">Mit der Anmeldung stimmst Du dem Erhalt von Newsletters gemäß unserer <a href="https://www.growmart.de/Datenschutz" style={{color: '#4b5563', textDecoration: 'underline'}}>Datenschutzerklärung</a> zu. Abmeldung jederzeit möglich.
        </p>
</div>
</div>
</section>

<footer>
<div className="footer-top">
<div>
<a className="footer-logo logo" href="https://www.growmart.de">
<div className="logo-mark"><iconify-icon icon="solar:leaf-bold" style={{color: '#fff'}} width="22"></iconify-icon>
</div>
          Growmart
        </a>
<p className="footer-desc">Dein Growshop aus Hamburg mit über 3.300 Produkten, fairen Preisen und schnellem
          diskretem Versand. Seit 2012. #BecauseWeEnjoyIt</p>
<div className="footer-social">
<button aria-label="Instagram" className="soc-btn"><iconify-icon icon="mdi:instagram" width="18"></iconify-icon></button>
<button aria-label="YouTube" className="soc-btn"><iconify-icon icon="mdi:youtube" width="18"></iconify-icon></button>
<button aria-label="Facebook" className="soc-btn"><iconify-icon icon="mdi:facebook" width="18"></iconify-icon></button>
<a aria-label="E-Mail" className="soc-btn" href="https://www.growmart.de/Kontakt"><iconify-icon icon="mdi:email-outline" width="18"></iconify-icon></a>
</div>
</div>
<div className="footer-col">
<h5>Shop</h5>
<ul>
<li><a href="https://www.growmart.de/Komplettsets">Komplettsets</a></li>
<li><a href="https://www.growmart.de/Growboxen">Growboxen</a></li>
<li><a href="https://www.growmart.de/Beleuchtung">Beleuchtung</a></li>
<li><a href="https://www.growmart.de/Belueftung">Belüftung</a></li>
<li><a href="https://www.growmart.de/Duenger">Dünger</a></li>
<li><a href="https://www.growmart.de/Erden-Substrate">Erden &amp; Substrate</a></li>
<li><a href="https://www.growmart.de/Bewaesserung">Bewässerung</a></li>
<li><a href="https://www.growmart.de/Sonderangebote">🔥 Sale</a></li>
</ul>
</div>
<div className="footer-col">
<h5>Marken</h5>
<ul>
<li><a href="https://www.growmart.de/SANlight-LED">SANlight</a></li>
<li><a href="https://www.growmart.de/Lumatek-LED">Lumatek</a></li>
<li><a href="https://www.growmart.de/GrowPRO">GrowPRO</a></li>
<li><a href="https://www.growmart.de/Canna">Canna</a></li>
<li><a href="https://www.growmart.de/BioBizz">BioBizz</a></li>
<li><a href="https://www.growmart.de/Hersteller">Alle Hersteller</a></li>
</ul>
</div>
<div className="footer-col">
<h5>Service</h5>
<ul>
<li><a href="https://www.growmart.de/Kontakt">Kontakt</a></li>
<li><a href="https://www.growmart.de/Anfahrt">Anfahrt &amp; Öffnungszeiten</a></li>
<li><a href="https://www.growmart.de/Versandkosten">Versandkosten</a></li>
<li><a href="https://www.growmart.de/Zahlungsarten">Zahlungsarten</a></li>
<li><a href="https://www.growmart.de/Widerrufsrecht">Rücksendung</a></li>
<li><a href="https://www.growmart.de/blog">Blog &amp; Guides</a></li>
</ul>
</div>
<div className="footer-col">
<h5>Growmart</h5>
<ul>
<li><a href="https://www.growmart.de/Duengeschema">Düngeschema</a></li>
<li><a href="https://www.growmart.de/Belueftungsrechner">Belüftungsrechner</a></li>
<li><a href="https://www.growmart.de/Stromkostenrechner">Stromkostenrechner</a></li>
<li><a href="https://www.growmart.de/Sets-fuer-3-Pflanzen">Sets für 3 Pflanzen</a></li>
<li><a href="https://www.growmart.de/grow-bedarf-grosshandel">Großhandel</a></li>
<li><a href="https://www.growmart.de/Jobs">Jobs</a></li>
<li><a href="https://www.growmart.de/affiliate">Affiliate</a></li>
<li><a href="https://www.growmart.de/Impressum">Impressum</a></li>
<li><a href="https://www.growmart.de/AGB">AGB</a></li>
<li><a href="https://www.growmart.de/Datenschutz">Datenschutz</a></li>
</ul>
</div>
</div>
<div className="footer-bottom">
<div className="footer-bottom-inner">
<p className="footer-copy">© 2026 CRP Import – Export GmbH · Alle Preise inkl. MwSt. zzgl. Versand</p>
<div className="payment-row">
<iconify-icon icon="logos:paypal" width="42"></iconify-icon>
<iconify-icon icon="logos:visa" width="42"></iconify-icon>
<iconify-icon icon="logos:mastercard" width="42"></iconify-icon>
<iconify-icon icon="logos:klarna" width="42"></iconify-icon>
<iconify-icon icon="logos:dhl" width="42"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
