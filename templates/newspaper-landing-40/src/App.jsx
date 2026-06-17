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
      
<div className="" style={{width: '100%', maxWidth: '80rem', margin: '0 auto', backgroundColor: '#ffffff', border: '1px solid #e4e4e7', boxShadow: '0 1px 2px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column'}}>

<header className="" style={{padding: '2rem 1.5rem 1rem', borderBottom: '1px solid #18181b'}}>
<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#71717a', fontWeight: '500'}}>
<div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
<time className="font-geist" datetime="2024-10-24">Jueves, 24 de Octubre</time>
<span style={{borderLeft: '1px solid #d4d4d8', height: '0.75rem'}}></span>
<span className="font-geist">Edición Global</span>
</div>
<div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
<span className="font-geist">Nº 001</span>
<span style={{borderLeft: '1px solid #d4d4d8', height: '0.75rem'}}></span>
<span className="font-geist">3.50 EUR</span>
</div>
</div>

<div className="" style={{textAlign: 'center', padding: '1rem 0'}}>
<h1 className="tracking-widest font-light font-cormorant" style={{fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: '600', letterSpacing: '-0.15rem', lineHeight: '1', color: '#18181b', textTransform: 'uppercase', margin: '0'}}>
                    EL DIARIO GLOBAL
                </h1>
<p className="font-geist" style={{marginTop: '1rem', fontSize: '0.75rem', letterSpacing: '0.15rem', textTransform: 'uppercase', color: '#71717a', fontWeight: '500'}}>
                    Información Independiente y Veraz
                </p>
</div>

<nav style={{marginTop: '2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem 1rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', borderTop: '1px solid #e4e4e7', paddingTop: '1rem'}}>
<a className="font-geist" href="#" style={{color: 'rgb(24, 24, 27)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Tecnología
                </a>
<a className="font-geist" href="#" style={{color: 'rgb(24, 24, 27)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
<iconify-icon icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Mundo
                </a>
<a className="font-geist" href="#" style={{color: 'rgb(24, 24, 27)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
<iconify-icon icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Economía
                </a>
<a className="font-geist" href="#" style={{color: 'rgb(24, 24, 27)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
<iconify-icon icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Cultura
                </a>
<a className="font-geist" href="#" style={{color: 'rgb(24, 24, 27)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem'}}>
<iconify-icon icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Opinión
                </a>
</nav>
</header>

<main className="" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))', flexGrow: '1'}}>

<aside style={{borderRight: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '2rem', backgroundColor: 'rgba(250, 250, 250, 0.5)'}}>
<section>
<h3 className="font-geist" style={{fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#a1a1aa', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #e4e4e7', paddingBottom: '0.5rem'}}>
<iconify-icon icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Última Hora
                    </h3>
<ul style={{listStyle: 'none', padding: '0', margin: '0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
<li style={{cursor: 'pointer'}}>
<time className="font-geist" style={{fontSize: '0.75rem', color: 'rgb(161, 161, 170)', display: 'block', marginBottom: '0.25rem'}}>Hace 2 horas</time>
<h4 className="font-geist" style={{fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.2', color: 'rgb(39, 39, 42)', margin: '0px'}}>Acuerdo histórico en la cumbre internacional sobre el desarrollo sostenible.</h4>
</li>
<li style={{cursor: 'pointer'}}>
<time className="font-geist" style={{fontSize: '0.75rem', color: 'rgb(161, 161, 170)', display: 'block', marginBottom: '0.25rem'}}>Hace 4 horas</time>
<h4 className="font-geist" style={{fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.2', color: 'rgb(39, 39, 42)', margin: '0px'}}>Nuevas medidas económicas impulsan el crecimiento en los mercados emergentes.</h4>
</li>
<li style={{cursor: 'pointer'}}>
<time className="font-geist" style={{fontSize: '0.75rem', color: 'rgb(161, 161, 170)', display: 'block', marginBottom: '0.25rem'}}>Hace 7 horas</time>
<h4 className="font-geist" style={{fontSize: '0.875rem', fontWeight: '600', lineHeight: '1.2', color: 'rgb(39, 39, 42)', margin: '0px'}}>Un descubrimiento científico sin precedentes abre nuevas vías en la investigación.</h4>
</li>
</ul>
</section>
<section>
<h3 className="font-geist" style={{fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#a1a1aa', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid #e4e4e7', paddingBottom: '0.5rem'}}>
<iconify-icon icon="solar:chat-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Columnas
                    </h3>
<div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
<article>
<span className="font-geist" style={{fontSize: '0.75rem', color: '#71717a', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05rem', display: 'block', marginBottom: '0.25rem'}}>A. Romero</span>
<h4 className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '1.125rem', fontWeight: '600', letterSpacing: '-0.02rem', lineHeight: '1.3', margin: '0px 0px 0.5rem', color: 'rgb(24, 24, 27)'}}>El futuro de las grandes ciudades</h4>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '0.875rem', color: 'rgb(82, 82, 91)', margin: '0px', lineHeight: '1.5', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical'}}>La sociedad comienza a virar hacia soluciones habitacionales más eficientes, dejando atrás décadas de planificación expansiva...</p>
</article>
<hr style={{border: '0', borderTop: '1px solid #e4e4e7', margin: '0'}}/>
<article>
<span className="font-geist" style={{fontSize: '0.75rem', color: '#71717a', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05rem', display: 'block', marginBottom: '0.25rem'}}>M. Silva</span>
<h4 className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '1.125rem', fontWeight: '600', letterSpacing: '-0.02rem', lineHeight: '1.3', margin: '0px 0px 0.5rem', color: 'rgb(24, 24, 27)'}}>Educación en la era digital</h4>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '0.875rem', color: 'rgb(82, 82, 91)', margin: '0px', lineHeight: '1.5', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical'}}>Cuando integramos las nuevas herramientas, el aprendizaje recupera su valor. Un análisis sobre la enseñanza centrada en el alumno.</p>
</article>
</div>
</section>
</aside>

<article className="" style={{gridColumn: 'span 2', borderRight: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7', padding: '2rem', display: 'flex', flexDirection: 'column'}}>
<div style={{marginBottom: '1rem', display: 'flex', gap: '0.5rem', fontSize: '0.75rem', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#71717a'}}>
<span className="font-geist" style={{color: 'rgb(24, 24, 27)'}}>En Portada</span>
<span className="font-geist">/</span>
<span className="font-geist">Actualidad Global</span>
</div>
<h2 className="font-light font-cormorant" style={{fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '600', letterSpacing: '-0.05rem', lineHeight: '1', color: 'rgb(24, 24, 27)', margin: '0px 0px 1.5rem'}}>
                    Transformación Social: Retos y Perspectivas para la Próxima Década.
                </h2>
<figure style={{margin: '0 0 1.5rem 0', aspectRatio: '16/9', backgroundColor: '#f4f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e4e4e7', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', inset: '0', background: 'linear-gradient(to top right, rgba(228,228,231,0.5), transparent)'}}></div>
<iconify-icon icon="solar:buildings-2-linear" style={{fontSize: '4rem', color: 'rgb(212, 212, 216)'}}></iconify-icon>
<figcaption className="font-geist" style={{position: 'absolute', bottom: '0.75rem', right: '0.75rem', background: 'rgba(255, 255, 255, 0.9)', padding: '0.25rem 0.5rem', fontSize: '0.75rem', color: 'rgb(113, 113, 122)', border: '1px solid rgb(228, 228, 231)'}}>Figura 1.1</figcaption>
</figure>
<div className="" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))', gap: '2rem', flexGrow: '1'}}>
<div>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '1.125rem', lineHeight: '1.6', color: 'rgb(39, 39, 42)', margin: '0px 0px 1rem'}}>
<span className="font-light font-cormorant" style={{fontSize: '3.5rem', fontWeight: '600', float: 'left', marginRight: '0.75rem', lineHeight: '0.8', color: 'rgb(24, 24, 27)'}}>L</span>a complejidad en las relaciones internacionales ha alcanzado un punto de inflexión. Durante la última década, la globalización ha transformado las dinámicas fundamentales de nuestras instituciones. Sin embargo, una nueva corriente aboga por retornar a los valores locales y sostenibles.
                        </p>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '1rem', lineHeight: '1.6', color: 'rgb(82, 82, 91)', margin: '0px'}}>
                            Al adoptar políticas claras y a largo plazo, los gobiernos no solo mejoran la estabilidad social de sus regiones, sino que también construyen economías inherentemente más resistentes a las crisis venideras y a la volatilidad de los mercados globales.
                        </p>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '1rem', lineHeight: '1.6', color: 'rgb(82, 82, 91)', margin: '0px'}}>
                            La cooperación ciudadana vuelve a ser clave. Retomar la inversión en infraestructura pública permite mantener el bienestar en el centro del escenario. Este enfoque reduce la desigualdad y acelera el desarrollo colectivo.
                        </p>
<div style={{marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #e4e4e7'}}>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
<div style={{width: '2.5rem', height: '2.5rem', borderRadius: '50%', backgroundColor: '#e4e4e7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #d4d4d8'}}>
<iconify-icon icon="solar:user-linear" style={{color: '#71717a', fontSize: '1.25rem'}}></iconify-icon>
</div>
<div>
<span className="font-geist" style={{display: 'block', fontSize: '0.875rem', fontWeight: '600', color: 'rgb(24, 24, 27)'}}>C. Méndez</span>
<span className="font-geist" style={{display: 'block', fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.05rem'}}>Redacción Central</span>
</div>
</div>
</div>
</div>
</div>
</article>

<aside className="" style={{padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
<article className="" style={{display: 'flex', flexDirection: 'column'}}>
<figure className="" style={{aspectRatio: '1/1', backgroundColor: '#f4f4f5', margin: '0 0 1rem 0', border: '1px solid #e4e4e7', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<iconify-icon icon="solar:leaf-linear" style={{fontSize: '2.5rem', color: '#d4d4d8'}}></iconify-icon>
</figure>
<span className="font-geist" style={{fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block'}}>Medio Ambiente</span>
<h3 className="font-light font-cormorant" style={{fontSize: '1.25rem', fontWeight: '600', letterSpacing: '-0.02rem', lineHeight: '1.2', margin: '0px 0px 0.5rem', color: 'rgb(24, 24, 27)'}}>Construyendo alternativas energéticas limpias.</h3>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '0.875rem', color: 'rgb(82, 82, 91)', margin: '0px'}}>El verdadero cambio nace del compromiso sistemático y de un acuerdo común entre industrias y gobiernos.</p>
</article>
<hr style={{border: '0', borderTop: '1px solid #e4e4e7', margin: '0'}}/>
<article style={{display: 'flex', flexDirection: 'column'}}>
<span className="font-geist" style={{fontSize: '0.75rem', color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.1rem', fontWeight: '500', marginBottom: '0.5rem', display: 'block'}}>Salud Pública</span>
<h3 className="font-light font-cormorant" style={{fontSize: '1.25rem', fontWeight: '600', letterSpacing: '-0.02rem', lineHeight: '1.2', margin: '0px 0px 0.5rem', color: 'rgb(24, 24, 27)'}}>Avances médicos en investigación.</h3>
<p className="font-geist" style={{fontFamily: 'Newsreader, serif', fontSize: '0.875rem', color: 'rgb(82, 82, 91)', margin: '0px 0px 1rem'}}>Nuevas estrategias prometen optimizar los recursos hospitalarios sin comprometer la atención al paciente.</p>
<a className="font-geist" href="#" style={{fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#18181b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.25rem', marginTop: 'auto'}}>
                        Leer artículo
                        <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</article>
<section style={{marginTop: 'auto', padding: '1.5rem', backgroundColor: '#18181b', color: '#ffffff', textAlign: 'center'}}>
<iconify-icon icon="solar:mailbox-linear" style={{fontSize: '1.5rem', color: '#a1a1aa', marginBottom: '0.5rem'}}></iconify-icon>
<h4 className="font-geist" style={{fontSize: '0.875rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', margin: '0 0 0.25rem 0'}}>Boletín</h4>
<p className="font-geist" style={{fontSize: '0.75rem', color: 'rgb(161, 161, 170)', margin: '0px 0px 1rem'}}>Resumen semanal de noticias.</p>
<form style={{display: 'flex', width: '100%'}}>
<input placeholder="Su correo..." style={{flexGrow: '1', backgroundColor: 'rgb(39, 39, 42)', color: 'rgb(255, 255, 255)', fontSize: '0.75rem', padding: '0.5rem 0.75rem', border: '1px solid rgb(63, 63, 70)', margin: '0px'}} type="email"/>
<button className="font-geist" style={{backgroundColor: '#ffffff', color: '#18181b', padding: '0.5rem 0.75rem', fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1rem', border: 'none', cursor: 'pointer', margin: '0'}} type="submit">
                            Unirse
                        </button>
</form>
</section>
</aside>
</main>

<footer style={{borderTop: '1px solid #18181b', padding: '1.5rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1rem', color: '#71717a', fontWeight: '500'}}>
<div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
<span className="font-geist">© 2024 El Diario Global</span>
<span style={{borderLeft: '1px solid #d4d4d8', height: '0.75rem'}}></span>
<a className="font-geist" href="#" style={{color: 'inherit', textDecoration: 'none'}}>Nosotros</a>
</div>
<div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
<a className="font-geist" href="#" style={{color: 'inherit', textDecoration: 'none'}}>Términos</a>
<span style={{borderLeft: '1px solid #d4d4d8', height: '0.75rem'}}></span>
<a className="font-geist" href="#" style={{color: 'inherit', textDecoration: 'none'}}>Privacidad</a>
</div>
</footer>
</div>

    </>
  );
}
