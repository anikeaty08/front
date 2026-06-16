import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll reveal
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal').forEach(function(el) { observer.observe(el); });

    // FAQ
    function toggleFaq(btn) {
      var item = btn.parentElement;
      var content = item.querySelector('.faq-content');
      var isOpen = content.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-content.open').forEach(function(c) { c.classList.remove('open'); });
      document.querySelectorAll('.faq-btn.open').forEach(function(b) { b.classList.remove('open'); });
      if (!isOpen) {
        content.classList.add('open');
        btn.classList.add('open');
      }
    }

    // Modal
    var formCreated = false;
    var scriptLoaded = false;

    function openModal() {
      var overlay = document.getElementById('bpModalOverlay');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      loadHubSpotForm();
    }

    function closeModal() {
      var overlay = document.getElementById('bpModalOverlay');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    // Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') closeModal();
    });

    function loadHubSpotForm() {
      if (formCreated) return;
      if (window.hbspt && window.hbspt.forms && window.hbspt.forms.create) {
        createForm();
        return;
      }
      document.getElementById('bpLoading').style.display = 'block';
      var script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.charset = 'utf-8';
      script.async = true;
      script.onload = function() {
        var interval = setInterval(function() {
          if (window.hbspt && window.hbspt.forms && window.hbspt.forms.create) {
            clearInterval(interval);
            createForm();
          }
        }, 200);
        setTimeout(function() { clearInterval(interval); }, 10000);
      };
      document.head.appendChild(script);
    }

    function createForm() {
      var target = document.getElementById('bpHubspotTarget');
      if (target && window.hbspt && window.hbspt.forms) {
        target.innerHTML = '';
        document.getElementById('bpLoading').style.display = 'none';
        window.hbspt.forms.create({
          portalId: '47448125',
          formId: '554756c0-4277-451e-82b7-58a78ecf80b6',
          region: 'na1',
          target: '#bpHubspotTarget',
          css: '',
          cssClass: 'bp-hubspot-scope'
        });
        formCreated = true;
      }
    }

    // Responsive: cards-grid-3
    (function() {
      var style = document.createElement('style');
      style.textContent = '@media(min-width:768px){.cards-grid-3{grid-template-columns:repeat(3,1fr)!important}}@media(min-width:1024px){.antonio-grid{grid-template-columns:1fr 1fr!important}.antonio-img{order:1!important}.antonio-text{order:2!important}}';
      document.head.appendChild(style);
    })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="" style={{position: 'fixed', inset: '0', zIndex: '-1', pointerEvents: 'none', overflow: 'hidden'}}>
<div className="" style={{position: 'absolute', inset: '0'}}></div>
<div className="blob" style={{width: '400px', height: '400px', top: '-10%', left: '-10%', background: 'hsl(221 83% 53%)'}}></div>
<div className="blob" style={{width: '300px', height: '300px', top: '40%', right: '-5%', opacity: '0.1', background: 'hsl(160 84% 39%)'}}>
</div>
<div className="blob" style={{width: '500px', height: '500px', bottom: '-10%', left: '20%', opacity: '0.2', background: 'hsl(221 83% 53%)'}}>
</div>
</div>

<div className="animate-on-load top-banner" style={{backgroundColor: '#5A8BFF'}}>
<div className="container max-w-xl">
<div className=".inner top-banner" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', padding: '0.215rem 0'}}>
<div className="pulse-dot hide-mobile" style={{backgroundColor: '#ffffff'}}></div>
<p className="" style={{fontSize: '12px', lineHeight: '24px', color: '#fffff', marginBottom: '18px', textAlign: 'center', margin: '0'}}>
        EXCLUSIVO PARA PMO LEADERS, HEADS, MANAGER E DIRECTORS
      </p>
</div>
</div>
</div>

<header className="animate-on-load anim-delay-100">
<div className="container max-w-7xl">
<div className="header .inner" style={{display: 'flex', alignItems: 'center', position: 'relative', padding: '1.75rem 0'}}>
<a className="" href="https://blueprintt.co/" style={{position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'block', flexShrink: '0'}}>
<img alt="Blueprintt" className="" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg" style={{height: '1.5rem', width: 'auto', opacity: '0.9'}}/>
</a>
<button className="btn-outline hide-mobile" onclick="openModal()" style={{marginLeft: 'auto', fontSize: '0.75rem'}}>
          FALAR COM UM ESPECIALISTA
        </button>
</div>
</div>
</header>

<section className="hero">
<div className="container max-w-7xl">
<div className="hero-grid lg:items-center">
<div className="hero-text animate-on-load anim-delay-100 !order-2 lg:!order-1" style={{maxWidth: '42rem'}}>
<img alt="PMO Summit Logo" className="" src="https://blueprintt.co/wp-content/uploads/2025/11/LOGO-PMO-HORIZONTAL-NEGATIVO.png" style={{height: '4rem', width: 'auto', objectFit: 'contain', marginBottom: '1.5rem', opacity: '0.9'}}/>
<h1 className="">
    Antonio Nieto-Rodriguez: A Maior Autoridade Global em PMO Revela o
    <span className="gradient">Que Vem Depois do Ágil</span>
</h1>
<p className="subtitle" style={{fontSize: '18px'}}>
    Pela primeira vez na América Latina em 2026, Antonio Nieto-Rodriguez - ex- era pós-Ágil.<br className=""/><br className=""/>
            Fale com nossa equipe e garanta sua participação na conferência que reunirá +300 líderes de PMO das maiores empresas globais.
  </p>

<div className="date-card-outer">
<div className="date-card-spinner blur"></div>
<div className="date-card-spinner"></div>
<div className="date-card-inner !flex-col md:!flex-row md:!justify-between md:!items-center" style={{gap: '1.25rem'}}>
<div className="date-card-info">
<div className="date-icon-box">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="map-pin-check-inside" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><path d="m9 10 2 2 4-4"></path></svg>
</div>
<div className="" style={{textAlign: 'left'}}>
<div className="date-label" style={{fontSize: '15px', lineHeight: '20px', color: '#5A8BFF', marginBottom: '1px', fontWeight: 'bold'}}>28
        E 29 DE NOVEMBRO, 2024</div>
<div className="date-value" style={{fontSize: '16px', lineHeight: '24px', color: '#fffff', marginBottom: '0px'}}>Grand Estanplaza
        Berrini - São Paulo, SP</div>
</div>
</div>
<button className="btn-mobile-download md:!w-auto md:!px-8 whitespace-nowrap font-semibold" onclick="openModal()" style={{display: 'flex'}}>FALAR COM UM ESPECIALISTA →</button>
</div>
</div>
<div className="security-line">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="">Seus dados estão seguros. Sem compromisso de compra.</span>
</div>
</div>

<div className="hero-image animate-on-load anim-delay-200 !order-1 lg:!order-2">
<div className="hero-img-wrap">
<div className="hero-img-aspect hidden md:block">
<div className="hero-img-frame hidden md:flex">
<div className="hero-img-gradient"></div>
<img className="" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/antonio-nieto-pic.png?w=800&amp;q=8block"/>
</div>
</div>
</div>
</div>

</div>
</div>
<img alt="Antonio Nieto-Rodriguez" className="md:hidden mt-8 object-cover w-full h-auto" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/antonio-nieto-pic.png?w=800&amp;q=80" style={{width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'center center'}}/></section>


<section className="section-border pt-section pb-section" style={{backdropFilter: 'blur(4px)', background: 'hsl(220 26% 10% / 0.3)'}}>
<div className="container max-w-7xl">
<div className="reveal text-center mb-16">
<h2 className="" style={{fontSize: '1.5rem', fontWeight: '500', letterSpacing: '-0.025em', marginTop: '30px'}}>O Maior Evento de PMO da América
                    Latina</h2>
</div>
<div className="numbers-grid">
<div className="reveal number-item">
<div className="number-val">15ª</div>
<div className="number-label">EDIÇÃO</div>
<div className="number-desc">A maior tradição em PMO LATAM</div>
</div>
<div className="reveal number-item">
<div className="number-val">+300</div>
<div className="number-label">LÍDERES DE PMO</div>
<div className="number-desc">Natura, Google, Heineken, Alibaba, Bosch</div>
</div>
<div className="reveal number-item">
<div className="number-val">3 DIAS</div>
<div className="number-label">DE IMERSÃO</div>
<div className="number-desc">Masterclass + Conferência + PMO Fest</div>
</div>
<div className="reveal number-item">
<div className="number-val">2</div>
<div className="number-label">KEYNOTES INTERNACIONAIS</div>
<div className="number-desc">Antonio Nieto-Rodriguez + Faisal Jafri (Alibaba)</div>
</div>
</div>
</div>
</section>

<section className="py-section overflow-hidden relative">
<div className="container max-w-5xl">
<h2 className="reveal text-center mb-16" style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em'}}>Para
                Quem é o PMO Summit 2026</h2>
<div className="two-col mb-16">
<div className="reveal flex flex-col gap-5">
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você é PMO Leader, Head, Manager ou Director</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você lidera Escritório de Projetos, Programas ou Portfólio</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você atua em Governança, Compliance ou Transformação Digital</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você é Project Portfolio Manager ou Transformation Office</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você busca elevar o PMO de operacional a estratégico</p>
</div>
</div>
<div className="reveal flex flex-col gap-5">
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p>Você enfrenta resistência à mudança cultural na organização</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você precisa provar o valor do PMO para o C-level</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você quer implementar IA nos processos do PMO</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você busca conectar estratégia corporativa com execução</p>
</div>
<div className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
<p className="">Você quer networking com +300 líderes de PMO de grandes empresas</p>
</div>
</div>
</div>
<div className="reveal flex justify-center">
<button className="btn-primary" onclick="openModal()">
          FALAR COM ESPECIALISTA
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="section-border pt-section pb-section relative">
<div className="container max-w-6xl">
<div className="antonio-grid" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'start'}}>
<div className="reveal antonio-img" style={{order: '2'}}>
<div className="premium-card" style={{borderRadius: '1rem', overflow: 'hidden'}}>
<img alt="Antonio Nieto-Rodriguez" className="w-full h-auto object-cover" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/antonio-nieto.jpg?w=800&amp;q=80" style={{width: '100%', aspectRatio: '3 / 4', objectFit: 'cover', objectPosition: 'center center'}}/>
</div>
</div>
<div className="reveal" style={{order: '1'}}>
<span style={{fontSize: '0.75rem', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'hsl(var(--primary))', marginBottom: '1rem', display: 'block'}}>KEYNOTE SPEAKER</span>
<h2 className="" style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em', marginBottom: '1.5rem'}}>Antonio
                        Nieto-Rodriguez</h2>
<p className="" style={{fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300', marginBottom: '2.5rem', lineHeight: '1.75'}}>
                        Reconhecido como a principal autoridade mundial em gestão de projetos e estratégia, Antonio não
                        é apenas um teórico - ele é o arquiteto do conceito "Project Economy" que está transformando
                        como as maiores organizações do mundo executam suas estratégias.
                    </p>
<ul className="" style={{display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem'}}>
<li className="" style={{display: 'flex', gap: '1rem'}}>
<div className="dot"></div>
<div className="">
<h4 style={{fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.25rem'}}>Ex-Presidente do
                                    PMI (Project Management Institute)</h4>
<p className="" style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300'}}>A
                                    organização global que define os padrões da profissão de gestão de projetos</p>
</div>
</li>
<li className="" style={{display: 'flex', gap: '1rem'}}>
<div className="dot"></div>
<div className="">
<h4 style={{fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.25rem'}}>Criador do conceito
                                    "Project Economy"</h4>
<p className="" style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300'}}>Seu artigo
                                    "The Project Economy Has Arrived" revolucionou a forma como organizações pensam
                                    execução estratégica</p>
</div>
</li>
<li className="" style={{display: 'flex', gap: '1rem'}}>
<div className="dot"></div>
<div className="">
<h4 className="" style={{fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.25rem'}}>Palestrante em +90
                                    países</h4>
<p className="" style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300'}}>Suas ideias
                                    moldaram PMOs de Fortune 500, governos e startups unicórnio</p>
</div>
</li>
<li className="" style={{display: 'flex', gap: '1rem'}}>
<div className="dot"></div>
<div className="">
<h4 className="" style={{fontSize: '1.125rem', fontWeight: '500', marginBottom: '0.25rem'}}>Consultor de CEOs e
                                    Conselhos</h4>
<p className="" style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300'}}>Trabalhou
                                    com C-levels de empresas como Coca-Cola, GlaxoSmithKline, PwC e BNP Paribas</p>
</div>
</li>
</ul>
<div className="callout glass-panel mb-10">
<h4 className="">O Diferencial de Aprender com Antonio:</h4>
<p className="">Ele mostra o que realmente funciona em organizações que estão vencendo na execução
                            estratégica - e expõe o que está condenando PMOs tradicionais a perderem relevância. Você
                            aprende com casos reais de empresas globais, não com teorias acadêmicas.</p>
</div>
<button className="btn-primary" onclick="openModal()">
            FALAR COM ESPECIALISTA AGORA
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="z-10 pt-section pb-section relative">
<div className="container max-w-6xl">
<div className="text-center mb-16 reveal">
<h2 className="" style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em', marginBottom: '1rem'}}>O Que Você Vai
                    Aprender com Antonio Nieto-Rodriguez</h2>
<p className="" style={{fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300'}}>Antonio apresenta 2
                    sessões exclusivas no PMO Summit 2026:</p>
</div>
<div className="cards-grid mb-16">

<div className="reveal premium-card" style={{borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
<div className="" style={{width: '100%', aspectRatio: '16/9', border: '1px solid hsl(var(--border))', borderRadius: '0.75rem', marginBottom: '1.5rem', overflow: 'hidden', background: 'hsl(225 33% 8% / 0.5)'}}>
<img alt="Masterclass" className="object-cover w-full h-auto" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/CAPEX.png?w=800&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center'}}/>
</div>
<div style={{marginBottom: '1.5rem'}}>
<span className="session-tag">MASTERCLASS EXCLUSIVA - 4 HORAS | DIA 31/03</span></div>
<h3 style={{fontSize: '1.5rem', fontWeight: '500', letterSpacing: '-0.025em', marginBottom: '1rem'}}>"Gestão
                        Moderna de Projetos na Era da IA: Ferramentas, Mindsets e Práticas para PMOs de Alto Impacto"
                    </h3>
<p style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300', marginBottom: '2rem'}}>
                        Nesta masterclass imersiva, você vivencia em tempo real a transformação radical da gestão de
                        projetos.</p>
<h4 style={{fontSize: '1rem', fontWeight: '500', marginBottom: '1rem'}}>Você vai dominar:</h4>
<ul className="" style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>O arsenal de IA que está revolucionando planejamento, gestão de riscos e relatórios</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span className="" style={{color: 'hsl(var(--muted-foreground))'}}>Abordagens híbridas que aumentam velocidade sem perder estrutura</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Métodos práticos para reduzir complexidade e eliminar sobrecarga</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Rituais de performance de nova geração: ownership, accountability e ritmo</span>
</li>
</ul>
<div className="result-box mb-4">
<span className="result-label">Resultado:</span>
<p style={{fontSize: '1rem', fontWeight: '300'}}>Você sai com um playbook imediatamente aplicável -
                            execution afiada, entregas rápidas, PMO preparado para o futuro.</p>
</div>
<p style={{fontSize: '0.875rem', fontWeight: '400', color: 'hsl(var(--pmo-red))'}}>* Importante: Masterclass
                        disponível apenas para participantes presenciais.</p>
</div>

<div className="reveal premium-card" style={{borderRadius: '1rem', padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'}}>
<div className="" style={{width: '100%', aspectRatio: '16/9', border: '1px solid hsl(var(--border))', borderRadius: '0.75rem', marginBottom: '1.5rem', overflow: 'hidden', background: 'hsl(225 33% 8% / 0.5)'}}>
<img alt="Keynote" className="object-cover w-full h-auto" src="https://paginas.blueprintt.co/wp-content/uploads/2026/03/pmo1.png?w=800&amp;q=80" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}/>
</div>
<div className="" style={{marginBottom: '1.5rem'}}><span className="session-tag">KEYNOTE INTERNACIONAL | DIA 1º/04</span>
</div>
<h3 style={{fontSize: '1.5rem', fontWeight: '500', letterSpacing: '-0.025em', marginBottom: '1rem'}}>Organizações
                        Orientadas a Projetos: Além do Ágil</h3>
<p style={{fontSize: '1rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300', marginBottom: '2rem'}}>A
                        palestra que vai fazer você repensar o futuro da performance organizacional.</p>
<h4 style={{fontSize: '1rem', fontWeight: '500', marginBottom: '1rem'}}>Antonio responde:</h4>
<ul className="" style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem'}}>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Por que o Ágil atingiu seu limite? E o que vem depois dele?</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>O que são Modelos Operacionais Orientados a Projetos? E por que são o próximo salto competitivo</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Como organizações líderes estão redesenhando estruturas em torno de portfólios de alto impacto</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(var(--primary))" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>O surgimento do Chief Project Officer (CPO) nos conselhos corporativos</span>
</li>
</ul>
<div className="result-box">
<span className="result-label">Resultado:</span>
<p className="" style={{fontSize: '1rem', fontWeight: '300'}}>Você enxerga o futuro da gestão sob uma nova
                            perspectiva - e sai preparado para liderar essa transformação.</p>
</div>
</div>
</div>
<div className="reveal flex justify-center">
<button className="btn-primary" onclick="openModal()">
          FALAR COM ESPECIALISTA
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-section section-border section-bg-dark">
<div className="container max-w-5xl">
<h2 className="reveal text-center mb-16" style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em'}}>
                Por Que o PMO Summit 2026 é a Maior Conferência de PMO da América Latina
            </h2>
<div className="cards-grid mb-16">
<div className="reveal premium-card compare-good" style={{borderRadius: '1rem', padding: '2rem'}}>
<h3 style={{color: 'hsl(var(--foreground))'}}>PMO SUMMIT LATIN AMERICA</h3>
<ul className="" style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span className="">Antonio Nieto-Rodriguez (ex-presidente PMI, autor HBR)</span></li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span className="">Faisal Jafri (Alibaba/Delivery Hero)</span></li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span className="">Masterclass de 4h + Keynote internacional</span></li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span>Cases reais de Natura, Google, Heineken, Diageo, Bosch</span></li>
</ul>
</div>
<div className="reveal compare-bad">
<h3 className="" style={{color: 'hsl(var(--muted-foreground))'}}>OUTROS EVENTOS DE PMO</h3>
<ul className="" style={{display: 'flex', flexDirection: 'column', gap: '1.25rem'}}>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(0 72% 51%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Keynotes genéricos ou consultores locais</span>
</li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(0 72% 51%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Sem palestrantes internacionais de peso</span>
</li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(0 72% 51%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Palestras curtas (30-45min), superficiais</span>
</li>
<li className="check-item"><svg fill="none" height="24" stroke="hsl(0 72% 51%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m15 9-6 6"></path>
<path d="m9 9 6 6"></path>
</svg><span className="" style={{color: 'hsl(var(--muted-foreground))'}}>Cases teóricos ou vendas disfarçadas</span>
</li>
</ul>
</div>
</div>
<div className="reveal flex justify-center">
<button className="btn-primary" onclick="openModal()">
          FALAR COM ESPECIALISTA
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-section section-border" style={{background: 'hsl(220 26% 10% / 0.3)'}}>
<div className="container max-w-6xl">
<div className="text-center mb-16 reveal">
<h2 style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em', marginBottom: '1rem'}}>Onde os
                    Melhores Líderes de PMO se Conectam e Definem o Futuro</h2>
<p className="" style={{fontSize: '1.125rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300', maxWidth: '42rem', margin: '0 auto'}}>
                    Não é sobre assistir palestras. É sobre estar no ambiente onde as transformações são desenhadas -
                    antes de virarem tendência.</p>
</div>
<div className="cards-grid cards-grid-3 mb-16" style={{display: 'grid', gridTemplateColumns: '1fr', gap: '2rem'}}>
<div className="reveal premium-card feature-card" style={{borderRadius: '1rem', padding: '2rem'}}>
<div className="feature-icon">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<h3>Networking Estratégico</h3>
<p className="">Conecte-se com +300 líderes de PMO de empresas como Natura, Google, Heineken e Bosch em um
                        ambiente exclusivo e curado.</p>
</div>
<div className="reveal premium-card feature-card" style={{borderRadius: '1rem', padding: '2rem'}}>
<div className="feature-icon">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
<path d="M9 18h6"></path>
<path d="M10 22h4"></path>
</svg>
</div>
<h3 className="">Insights Globais</h3>
<p className="">Acesse as tendências e práticas que estão transformando PMOs ao redor do mundo - direto da fonte,
                        sem filtros.</p>
</div>
<div className="reveal premium-card feature-card" style={{borderRadius: '1rem', padding: '2rem'}}>
<div className="feature-icon">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<h3>PMO Fest</h3>
<p className="">O único evento onde networking vira experiência. Jantar exclusivo, conversas estratégicas e
                        conexões que aceleram sua carreira.</p>
</div>
</div>
<div className="reveal flex justify-center">
<button className="btn-primary" onclick="openModal()">
          QUERO FAZER PARTE DO PMO SUMMIT 2026
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="py-section section-border section-bg-dark">
<div className="container max-w-3xl">
<div className="text-center mb-16 reveal">
<h2 className="" style={{fontSize: '1.875rem', fontWeight: '500', letterSpacing: '-0.025em'}}>Perguntas Frequentes</h2>
</div>
<div className="" id="faqList">
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>1. Preciso ser PMO para participar?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>Não necessariamente. O evento é voltado para líderes que atuam com gestão de
                                    projetos, programas, portfólio, governança ou transformação digital. Se você lidera
                                    ou influencia a execução estratégica na sua organização, o PMO Summit é para você.
                                </p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>2. Qual o idioma do evento?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>As palestras internacionais serão em inglês com tradução simultânea para português.
                                    Todas as demais sessões serão em português.</p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>3. O evento terá transmissão online?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>Sim, porém a Masterclass de 4h com Antonio Nieto-Rodriguez será exclusivamente
                                    presencial. Fale com nossa equipe para conhecer todas as modalidades.</p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>4. Consigo aprovar internamente na minha empresa?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>Sim! Nossa equipe fornece toda documentação necessária: programação completa,
                                    justificativa de investimento, lista de palestrantes e empresas participantes.
                                    Ajudamos você a construir o business case.</p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>5. Quantas vagas estão disponíveis?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>A conferência tem capacidade limitada. Nas últimas edições, esgotamos em dias após
                                    abertura das inscrições.</p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>6. Posso levar minha equipe?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<p>Sim! Temos condições especiais para grupos. Fale com nossa equipe para receber uma
                                    proposta personalizada.</p>
</div>
</div>
</div>
</div>
<div className="faq-item reveal">
<button className="faq-btn" onclick="toggleFaq(this)">
<span>7. O que está incluso no ingresso presencial?</span>
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
</button>
<div className="faq-content">
<div className="faq-inner">
<div className="faq-answer">
<ul style={{display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.75rem'}}>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Masterclass de 4h com Antonio Nieto-Rodriguez</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Acesso a todas as palestras e painéis (3 dias)</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>Coffee breaks e almoços</span>
</li>
<li className="check-item"><svg fill="none" height="20" stroke="hsl(160 84% 39%)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg><span style={{color: 'hsl(var(--muted-foreground))'}}>PMO Fest - networking exclusivo</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="">
<div className="container max-w-4xl">
<div style={{display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center', textAlign: 'center'}}>
<img alt="Blueprintt Logo" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg" style={{height: '2rem', width: 'auto', opacity: '0.9'}}/>
<p style={{fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))', fontWeight: '300', lineHeight: '1.75', maxWidth: '56rem'}}>
                    Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e com nossa Política de
                    Privacidade. Seus dados são tratados com segurança, confidencialidade e em conformidade com a LGPD
                    (Lei nº 13.709/2018), exclusivamente para gestão de acesso, personalização de conteúdo, comunicação
                    sobre sua assinatura e melhoria da experiência na plataforma. Não comercializamos dados pessoais.
                </p>
</div>
</div>
</footer>

<div className="bp-modal-overlay" id="bpModalOverlay">
<div className="bp-backdrop" onclick="closeModal()"></div>
<div aria-modal="true" className="bp-modal-wrap" role="dialog">
<div className="bp-card" onclick="event.stopPropagation()" role="document">
<button aria-label="Fechar" className="bp-close" onclick="closeModal()" type="button">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line></svg>
</button>
<div style={{textAlign: 'center', paddingBottom: '1.5rem'}}>
<h3 style={{fontSize: '1.75rem', fontWeight: '700', letterSpacing: '-0.025em', lineHeight: '1.3', marginBottom: '0.625rem', fontFamily: '\'Figtree\',sans-serif', color: '#0F172A'}}>
                        Acesse a programação completa e aumente sua relevância e impacto
                    </h3>
<p style={{fontSize: '1rem', fontWeight: '500', lineHeight: '1.75', fontFamily: '\'Figtree\',sans-serif', color: '#4B5563'}}>
                        Preencha o formulário abaixo para receber informações detalhadas sobre o programa no seu email.
                    </p>
</div>
<div className="bp-hubspot-scope" id="bpHubspotTarget"></div>
<div id="bpLoading" style={{textAlign: 'center', padding: '2rem 0px', color: 'rgb(156, 163, 175)', display: 'none'}}>
<p style={{fontSize: '0.875rem'}}>Carregando formulário...</p>
</div>
</div>
</div>
</div>


    </>
  );
}
