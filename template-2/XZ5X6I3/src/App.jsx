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
      
      // Año dinámico
      document.getElementById('year').textContent = new Date().getFullYear();

      // Fade-in on scroll
      (function() {
        let elements = Array.from(document.querySelectorAll('.fade-in'));
        let reveal = function() {
          let trigger = window.innerHeight * 0.93;
          elements.forEach(function(el, i) {
            if (!el.classList.contains('show')) {
              let rect = el.getBoundingClientRect();
              if (rect.top < trigger) {
                setTimeout(() => el.classList.add('show'), i * 50);
              }
            }
          });
        };
        window.addEventListener('scroll', reveal, {passive:true});
        window.addEventListener('load', reveal);
      })();
    
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
      

<nav aria-label="Main Navigation" className="navbar">
<div className="navbar-inner">
<a aria-label="Inicio" className="navbar-logo tracking-tight" href="#">
<svg aria-hidden="true" fill="none" height="28" width="28"><circle cx="14" cy="14" r="13" stroke="#EB5033" strokeWidth="2.2"></circle><rect height="11" rx="5.5" stroke="#F5F3F2" strokeWidth="2" width="11" x="8.5" y="8.5"></rect></svg>
          [Nombre Agencia]
        </a>
<div aria-label="Main" className="navbar-links" role="navigation">
<a className="navbar-link tracking-tight" href="#about">About</a>
<a className="navbar-link tracking-tight" href="#principles">Principles</a>
<a className="navbar-link tracking-tight" href="#team">Team</a>
<a className="navbar-link tracking-tight" href="#portfolio">Portfolio</a>
<a className="navbar-link tracking-tight" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="hero fade-in" id="about">
<h1 className="hero-title tracking-tight">[Nombre Agencia]</h1>
<div className="hero-desc tracking-tight">
        Impulsamos el crecimiento de tu empresa conectando creatividad, automatización y tecnología. Nos obsesiona la eficiencia, resultados medibles y experiencias únicas para tus clientes.
      </div>
<div className="hero-actions">
<a aria-label="Hablemos" className="btn btn-accent tracking-tight" href="mailto:hola@agencia.com">Hablemos</a>
<a aria-label="Ver Portafolio" className="btn btn-outline tracking-tight" href="#portfolio">Portafolio</a>
</div>
</section>

<section className="section fade-in">
<div className="container">
<div className="two-col-grid">
<div>
<div className="two-col-num">01. What we do</div>
<div className="two-col-h2 tracking-tight">Marketing & Automatización</div>
<div className="two-col-text">
              Desarrollamos estrategias de marketing digital y sistemas automatizados para que tu negocio crezca sin límites. Integramos creatividad y tecnología en cada proyecto.
            </div>
</div>
<div>
<div className="two-col-num">02. How we do it</div>
<div className="two-col-h2 tracking-tight">Metodología Ágil & Datos</div>
<div className="two-col-text">
              Combinamos la agilidad de equipos interdisciplinarios con análisis de datos en tiempo real, optimizando acciones en cada etapa para lograr resultados excepcionales.
            </div>
</div>
</div>
</div>
</section>

<section className="section fade-in" id="principles">
<div className="container">
<div className="principles-section">
<div className="principles-title tracking-tight">Principles</div>
<div className="principles-list">
<div className="principle-block">
<h3 className="tracking-tight">Transparencia Radical</h3>
<p>Comunicamos cada avance y reto de forma clara y honesta. Creemos en relaciones abiertas y colaborativas.</p>
<cite>"La confianza se construye con verdad."</cite>
</div>
<div className="principle-block">
<h3 className="tracking-tight">Iteración Constante</h3>
<p>Probamos, aprendemos y mejoramos sin parar. El cambio es parte de nuestro ADN para crecer juntos.</p>
<cite>"El progreso es una suma de pequeños avances."</cite>
</div>
<div className="principle-block">
<h3 className="tracking-tight">Obsesión por el Cliente</h3>
<p>Todo lo que hacemos pone a tu cliente en el centro. Tu éxito es nuestro propósito.</p>
<cite>"Tu crecimiento, nuestra misión."</cite>
</div>
</div>
</div>
</div>
</section>

<section className="section fade-in" id="services">
<div className="container">
<div className="section-title tracking-tight">Servicios</div>
<div className="services-grid">
<div className="service-card" tabindex="0">
<div className="service-icon">

<svg aria-hidden="true" fill="none" height="32" stroke="#EB5033" strokeWidth="2" width="32"><circle cx="16" cy="16" r="12"></circle><path d="M16 6v6m0 8v6m10-10h-6M6 16h6" strokeLinecap="round"></path></svg>
</div>
<div className="service-content">
<div className="service-title tracking-tight">Automatizaciones</div>
<ul className="service-bullets">
<li>Workflows inteligentes</li>
<li>Integraciones API</li>
<li>Funnels automatizados</li>
</ul>
</div>
</div>
<div className="service-card" tabindex="0">
<div className="service-icon">

<svg aria-hidden="true" fill="none" height="32" stroke="#EB5033" strokeWidth="2" width="32"><rect height="16" rx="5" width="20" x="6" y="8"></rect><circle cx="16" cy="16" r="3.5"></circle></svg>
</div>
<div className="service-content">
<div className="service-title tracking-tight">CRM</div>
<ul className="service-bullets">
<li>Implementación & customización</li>
<li>Segmentación avanzada</li>
<li>Automatización de ventas</li>
</ul>
</div>
</div>
<div className="service-card" tabindex="0">
<div className="service-icon">

<svg aria-hidden="true" fill="none" height="32" stroke="#EB5033" strokeWidth="2" width="32"><path d="M8 24V14l6 6 8-12v16"></path><circle cx="8" cy="24" r="2"></circle></svg>
</div>
<div className="service-content">
<div className="service-title tracking-tight">Growth</div>
<ul className="service-bullets">
<li>Experimentación ágil</li>
<li>Optimización de conversión</li>
<li>Medición de resultados</li>
</ul>
</div>
</div>
<div className="service-card" tabindex="0">
<div className="service-icon">

<svg aria-hidden="true" fill="none" height="32" stroke="#EB5033" strokeWidth="2" width="32"><circle cx="16" cy="16" r="12"></circle><path d="M12 16a4 4 0 0 1 8 0m-8 0a4 4 0 0 0 8 0"></path><ellipse cx="16" cy="16" rx="2.5" ry="4"></ellipse></svg>
</div>
<div className="service-content">
<div className="service-title tracking-tight">IA</div>
<ul className="service-bullets">
<li>Chatbots & asistentes</li>
<li>Automatización con IA</li>
<li>Personalización avanzada</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section fade-in" id="contact">
<div className="cta-title tracking-tight">¿Listo para escalar tu negocio?</div>
<a aria-label="Agenda una reunión" className="btn btn-accent tracking-tight" href="mailto:hola@agencia.com?subject=Quiero%20agendar%20una%20reunión">Agenda una reunión</a>
</section>

<footer className="footer" id="footer">
<div className="footer-inner">
<div className="footer-logo tracking-tight">
<svg aria-hidden="true" fill="none" height="20" width="20"><circle cx="10" cy="10" r="9" stroke="#EB5033" strokeWidth="1.5"></circle><rect height="8" rx="4" stroke="#F5F3F2" strokeWidth="1.2" width="8" x="6" y="6"></rect></svg>
          [Nombre Agencia]
        </div>
<nav aria-label="Pie de página" className="footer-links">
<a className="footer-link tracking-tight" href="#about">About</a>
<a className="footer-link tracking-tight" href="#principles">Principles</a>
<a className="footer-link tracking-tight" href="#team">Team</a>
<a className="footer-link tracking-tight" href="#portfolio">Portfolio</a>
<a className="footer-link tracking-tight" href="#contact">Contact</a>
</nav>
<div className="footer-copy">© <span id="year"></span> [Nombre Agencia]</div>
</div>
</footer>



    </>
  );
}
