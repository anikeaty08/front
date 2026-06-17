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



document.addEventListener("DOMContentLoaded", () => {

  /* Nav desktop */
  if(window.innerWidth >= 1024){
    document.getElementById('nav-center').style.display = 'flex';
    document.getElementById('agenda-badge').style.display = 'flex';
  }
  window.addEventListener('resize', () => {
    const show = window.innerWidth >= 1024;
    document.getElementById('nav-center').style.display  = show ? 'flex' : 'none';
    document.getElementById('agenda-badge').style.display = show ? 'flex' : 'none';
  });

  /* Workshop cards — hover no container */
  const wc = document.getElementById('workshop-cards');
  if(wc){
    const cards = wc.querySelectorAll('.wcard');
    const center = wc.querySelector('.wcard-center');
    wc.addEventListener('mouseenter', () => {
      cards[0].style.marginLeft = '-10rem';
      cards[0].style.transform  = 'rotate(-20deg)';
      cards[1].style.marginLeft = '10rem';
      cards[1].style.transform  = 'rotate(20deg)';
      if(center) center.style.transform = 'translateY(-2rem)';
    });
    wc.addEventListener('mouseleave', () => {
      cards[0].style.marginLeft = '-4rem';
      cards[0].style.transform  = 'rotate(-10deg)';
      cards[1].style.marginLeft = '4rem';
      cards[1].style.transform  = 'rotate(10deg)';
      if(center) center.style.transform = 'translateY(0)';
    });
  }

  /* Scroll reveal */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.style.willChange = 'opacity, transform';
        e.target.classList.add('is-visible');
        e.target.addEventListener('transitionend', () => {
          e.target.style.willChange = 'auto';
        }, { once: true });
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
  document.querySelectorAll('.fade-in-up, .stagger-grid').forEach(el => revealObs.observe(el));

  /* Carousel */
  const viewport = document.querySelector('.carousel-viewport');
  const track    = document.querySelector('.carousel-track');
  if(!viewport || !track) return;

  Array.from(track.children).forEach(item => {
    const clone = item.cloneNode(true);
    clone.setAttribute('aria-hidden','true');
    track.appendChild(clone);
  });

  const halfWidth = track.scrollWidth / 2;
  const duration  = halfWidth / 60;

  const styleEl = document.createElement('style');
  styleEl.textContent = `
    @keyframes carousel-scroll {
      0%  { transform: translateX(0px); }
      100%{ transform: translateX(-${halfWidth}px); }
    }
    .carousel-track { animation: carousel-scroll ${duration}s linear infinite; }
  `;
  document.head.appendChild(styleEl);

  let isDragging=false, currentOffset=0, dragDistance=0, lastX=0;
  const getMatrix  = () => new DOMMatrix(getComputedStyle(track).transform).m41;
  const getClientX = e => e.touches ? e.touches[0].clientX : e.pageX;

  function dragStart(e){
    isDragging=true; dragDistance=0;
    currentOffset=getMatrix();
    track.style.animation='none';
    track.style.transform=`translateX(${currentOffset}px)`;
    lastX=getClientX(e);
    viewport.classList.add('is-dragging');
  }
  function drag(e){
    if(!isDragging) return;
    const x=getClientX(e), diff=x-lastX;
    dragDistance+=Math.abs(diff); lastX=x; currentOffset+=diff;
    if(currentOffset>0)          currentOffset-=halfWidth;
    if(currentOffset<-halfWidth) currentOffset+=halfWidth;
    track.style.transform=`translateX(${currentOffset}px)`;
  }
  function dragEnd(){
    if(!isDragging) return;
    isDragging=false;
    viewport.classList.remove('is-dragging');
    const delay=-(Math.abs(currentOffset)/halfWidth)*duration;
    track.style.animation='';
    track.style.transform='';
    track.style.animationDelay=`${delay}s`;
  }

  viewport.addEventListener('mousedown', dragStart);
  window.addEventListener  ('mouseup',   dragEnd);
  window.addEventListener  ('mousemove', drag);
  viewport.addEventListener('touchstart',dragStart,{passive:true});
  viewport.addEventListener('touchend',  dragEnd);
  viewport.addEventListener('touchmove', drag,{passive:true});

  track.addEventListener('click', e => {
    if(dragDistance>10) return;
    const item=e.target.closest('.carousel-item');
    if(!item) return;
    const paused=item.classList.contains('is-paused');
    track.querySelectorAll('.carousel-item.is-paused').forEach(el=>el.classList.remove('is-paused'));
    if(!paused){ item.classList.add('is-paused'); track.style.animationPlayState='paused'; }
    else { track.style.animationPlayState='running'; }
  });
});



/* Formulário */
function mostrarSubOpcoes(){
  const main=document.getElementById('parte_corpo').value;
  ['container_sub_braco','container_sub_perna','container_sub_peito','container_sub_costas','container_outro_local']
    .forEach(id=>{ document.getElementById(id).style.display='none'; });
  const map={'Braço':'container_sub_braco','Perna':'container_sub_perna',
             'Peito':'container_sub_peito','Costas':'container_sub_costas','Outro…':'container_outro_local'};
  if(map[main]){ document.getElementById(map[main]).style.display='flex'; }
}
function verificarOutroSub(sel){
  const show=sel.value==='Outro..'||sel.value==='Outra…';
  document.getElementById('container_outro_local').style.display = show ? 'flex' : 'none';
}
function dispararWhatsApp(e){
  e.preventDefault();
  const form=document.getElementById('form_wpp');
  if(!form.checkValidity()){ form.reportValidity(); return; }
  const g=id=>document.getElementById(id).value;
  const parteCorpo=g('parte_corpo');
  let localFinal=parteCorpo;
  if     (parteCorpo==='Braço') { const s=g('sub_braco'); localFinal+=' - '+(s==='Outro..'?g('outro_local'):s); }
  else if(parteCorpo==='Perna') { const s=g('sub_perna'); localFinal+=' - '+(s==='Outra…'?g('outro_local'):s); }
  else if(parteCorpo==='Peito') { localFinal+=' - '+g('sub_peito'); }
  else if(parteCorpo==='Costas'){ localFinal+=' - '+g('sub_costas'); }
  else if(parteCorpo==='Outro…'){ localFinal=g('outro_local'); }
  if(!localFinal||localFinal.includes('undefined')) localFinal='Não especificado';
  const msg=`Olá Marllon, tudo bem? Vim pela sua página e gostaria de fazer um orçamento. Seguem as minhas informações abaixo:\n\n`
    +`- *Nome:* ${g('nome_contato')}\n- *Cidade:* ${g('cidade_contato')}\n- *Altura:* ${g('altura_contato')}\n`
    +`- *Primeira Tattoo:* ${g('primeira_tattoo')}\n- *O que quer fazer:* ${g('tipo_trabalho')}\n`
    +`- *Local do corpo:* ${localFinal}\n- *Estilo desejado:* ${g('estilo_tattoo')}\n- *Descrição da Ideia:* ${g('ideia_contato')}`;
  const a=Object.assign(document.createElement('a'),{href:'https://wa.me/5541998467862?text='+encodeURIComponent(msg),target:'_blank',rel:'noopener noreferrer'});
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

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
      

<div style="position:fixed;inset:0;z-index:0;opacity:0.035;pointer-events:none;
     background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E');
     background-size:200px 200px;"></div>

<div className="gradient-blur">
<div></div><div></div><div></div><div></div><div></div><div></div>
</div>

<nav style={{position: 'fixed', zIndex: '50', top: '0', left: '0', right: '0', padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', pointerEvents: 'none'}}>
<div onclick="window.location.href='https://www.instagram.com/marllon.dars/'" onmouseout="this.style.transform='scale(1)';this.style.borderColor='rgba(255,255,255,0.1)'" onmouseover="this.style.transform='scale(1.02)';this.style.borderColor='rgba(255,255,255,0.2)'" style="pointer-events:auto;display:flex;gap:0.75rem;align-items:center;cursor:pointer;
              background:rgba(0,0,0,0.8);border:1px solid rgba(255,255,255,0.1);border-radius:9999px;
              padding:0.375rem 1.25rem 0.375rem 0.375rem;
              box-shadow:0 4px 24px -1px rgba(0,0,0,0.5);backdrop-filter:blur(24px);
              transition:transform 0.3s ease,border-color 0.3s ease;">
<div style={{width: '2.25rem', height: '2.25rem', borderRadius: '9999px', overflow: 'hidden', background: '#171717', border: '1px solid rgba(255,255,255,0.1)'}}>
<img alt="Logo" className="bw-to-color" fetchpriority="high" height="36" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a0abbf37-d344-4533-9147-6dcce2f7c317_320w.png" style={{opacity: '0.8', width: '100%', height: '100%', objectFit: 'cover'}} width="36"/>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.125rem'}}>
<span className="font-manrope" style={{fontSize: '0.75rem', fontWeight: '600', color: '#fff', letterSpacing: '0.05em', textTransform: 'uppercase', lineHeight: '1'}}>Marllon Dars</span>
<span className="font-mono" style={{fontSize: '10px', color: '#737373', lineHeight: '1', letterSpacing: '-0.025em'}}>Tattoo Artist</span>
</div>
</div>

<div id="nav-center" style="display:none;position:absolute;top:1.5rem;left:50%;transform:translateX(-50%);
              background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.1);border-radius:9999px;
              box-shadow:0 25px 50px -12px rgba(0,0,0,0.6);backdrop-filter:blur(40px);
              padding:0.25rem;pointer-events:auto;">
<a href="#home" style={{fontSize: '0.75rem', fontWeight: '500', color: '#fff', background: 'rgba(255, 255, 255, 0.1)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '9999px', padding: '0.5rem 1.5rem', transition: 'color 0.15s'}}>Home</a>
<a href="#historia" onmouseout="this.style.color='#a3a3a3'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.75rem', fontWeight: '500', color: '#a3a3a3', borderRadius: '9999px', padding: '0.5rem 1.5rem', transition: 'color 0.15s'}}>História</a>
<a href="#trabalho" onmouseout="this.style.color='#a3a3a3'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.75rem', fontWeight: '500', color: '#a3a3a3', borderRadius: '9999px', padding: '0.5rem 1.5rem', transition: 'color 0.15s'}}>Portfólio</a>
<a href="#contato" onmouseout="this.style.color='#a3a3a3'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.75rem', fontWeight: '500', color: '#a3a3a3', borderRadius: '9999px', padding: '0.5rem 1.5rem', transition: 'color 0.15s'}}>Contato</a>
</div>
<div style={{display: 'flex', alignItems: 'center', gap: '0.75rem', pointerEvents: 'auto'}}>
<div id="agenda-badge" style={{display: 'none', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '9999px', background: 'rgba(0, 0, 0, 0.4)', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)'}}>
<div style={{position: 'relative', display: 'flex', width: '0.5rem', height: '0.5rem'}}>
<span className="animate-ping" style={{position: 'absolute', inset: '0', borderRadius: '9999px', background: '#a3a3a3', opacity: '0.75'}}></span>
<span style={{position: 'relative', width: '0.5rem', height: '0.5rem', borderRadius: '9999px', background: '#a3e635'}}></span>
</div>
<span className="font-mono" style={{fontSize: '10px', color: '#d4d4d4', fontWeight: '500', letterSpacing: '0.1em', textTransform: 'uppercase'}}>Agenda Aberta</span>
</div>
<button onclick="document.getElementById('contato').scrollIntoView({behavior:'smooth'})" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'" style={{textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '700', color: '#000', letterSpacing: '0.05em', background: '#fff', borderRadius: '9999px', padding: '0.5rem 1.5rem', border: 'none', cursor: 'pointer', boxShadow: '0 0 20px -5px rgba(255,255,255,0.2)', transition: 'transform 0.3s ease'}}>
      Agendar
    </button>
</div>
</nav>

<section id="home" style={{minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', width: '100%', padding: '8rem 1.5rem 6rem', position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
<div style={{position: 'absolute', inset: '0', zIndex: '0'}}>
<div style="position:absolute;inset:0;z-index:10;background:linear-gradient(to bottom,rgba(0,0,0,0.8),rgba(0,0,0,0.1),#000);
         mask-image:linear-gradient(180deg,transparent,black 75%,black 100%,transparent);
         -webkit-mask-image:linear-gradient(180deg,transparent,black 75%,black 100%,transparent);"></div>
<img alt="Tattoo Art Background" decoding="async" fetchpriority="high" height="1080" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b48c76f0-3717-42ed-83c4-3db723ee4a7c_3840w.png" style={{opacity: '0.8', width: '100%', height: '100%', objectFit: 'cover'}} width="1920"/>
</div>
<div style={{position: 'relative', zIndex: '10', width: '100%', maxWidth: '1400px', margin: '0 auto', textAlign: 'center', top: '8rem'}}>
<div className="is-visible" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
<h1 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', mixBlendMode: 'overlay'}}>
<span className="fade-in-up font-manrope" style={{lineHeight: '0.9', fontSize: 'clamp(3rem,8vw,7rem)', fontWeight: '600', color: '#fff', letterSpacing: '-0.05em'}}>MARLLON DARS</span>
<span className="fade-in-up delay-200" style={{textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: '400', letterSpacing: '0.1em', background: 'linear-gradient(to bottom,#fff,rgba(255,255,255,0.4))', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', marginTop: '0.25rem', marginBottom: '2rem'}}>Arte que marca a pele.</span>
</h1>
<p className="fade-in-up delay-300" style={{fontSize: 'clamp(1rem,2vw,1.25rem)', lineHeight: '1.625', fontWeight: '300', color: '#d4d4d4', maxWidth: '42rem', margin: '0.5rem 0', padding: '0 1rem'}}>Especialista em tatuagens preto e cinza.</p>
<div className="fade-in-up delay-500" style={{display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem'}}>
<a href="#contato" onmouseout="this.style.backgroundColor='#fff'" onmouseover="this.style.backgroundColor='#e5e5e5'" style={{textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: '700', color: '#000', letterSpacing: '0.1em', background: '#fff', borderRadius: '9999px', padding: '1rem 2rem', boxShadow: '0 0 30px rgba(255,255,255,0.1)', transition: 'background-color 0.15s'}}>Agendar minha sessão</a>
<a className="glass-panel" href="#trabalho" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" style={{padding: '1rem 2rem', borderRadius: '9999px', color: '#fff', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background-color 0.15s', backdropFilter: 'blur(12px)'}}>Conhecer o trabalho</a>
</div>
</div>
</div>
</section>

<section id="historia" style={{background: '#0a0a0a', width: '100%', borderTop: '1px solid rgba(255, 255, 255, 0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '3rem 1.5rem'}}>
<div style={{maxWidth: '1000px', margin: '0 auto'}}>
<div className="glass-panel fade-in-up" style={{background: 'linear-gradient(to bottom,rgba(255,255,255,0.02),transparent)', borderRadius: '1.5rem', padding: '1.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '1.25rem'}}>
<div style={{width: '5rem', height: '5rem', borderRadius: '9999px', overflow: 'hidden', border: '2px solid rgba(255,255,255,0.1)'}}>
<img alt="Marllon Dars" className="bw-to-color" decoding="async" height="80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b97309b-3568-4344-bee9-56cb20618101_800w.jpg" style={{width: '100%', height: '100%', objectFit: 'cover'}} width="80"/>
</div>
<h2 className="fade-in-up delay-100 font-manrope" style={{fontSize: 'clamp(1.875rem,4vw,3rem)', fontWeight: '500', color: '#fff', letterSpacing: '-0.025em'}}>A Essência</h2>
<p className="fade-in-up delay-200 font-montserrat" style={{fontSize: '0.875rem', letterSpacing: '0.025em', color: '#a3a3a3', lineHeight: '2', maxWidth: '680px'}}>Marllon Dars transforma ideias em arte na pele há mais de 8 anos. Mais do que executar um desenho, prioriza a autenticidade em cada criação. Desde o primeiro contato, você vai sentir que está em boas mãos. Cuidado, respeito e dedicação fazem parte do processo tanto quanto a agulha e a tinta. Sua qualidade técnica é indiscutível e reconhecida dentro e fora do estúdio, com premiações conquistadas em diversas convenções de tatuagem. Além disso, compartilha seu conhecimento ministrando workshops e mentorias individuais, contribuindo para a evolução de outros profissionais da área.</p>
<div className="fade-in-up delay-300" style={{marginTop: '1rem'}}>
<a href="#contato" onmouseout="this.style.borderColor='rgba(255,255,255,0.3)'" onmouseover="this.style.borderColor='#fff'" style={{display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textTransform: 'uppercase', fontSize: '0.75rem', color: '#fff', letterSpacing: '0.1em', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.25rem', transition: 'border-color 0.15s'}}>
            Quero eternizar minha história
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section style={{background: '#050505', width: '100%', padding: '3rem'}}>
<div style={{maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: '10'}}>
<div className="fade-in-up" style={{textAlign: 'center', marginBottom: '4rem'}}>
<h2 className="font-manrope" style={{fontSize: 'clamp(2.25rem,4vw,3rem)', fontWeight: '500', color: '#fff', letterSpacing: '-0.025em'}}>Reconhecimento <span style={{color: '#737373'}}>Premiado</span></h2>
</div>
<div className="stagger-grid premio-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem'}}>
<div className="group" onmouseout="this.querySelector('img').style.filter='grayscale(100%)';this.querySelector('img').style.opacity='0.6';this.querySelector('img').style.transform='scale(1)'" onmouseover="this.querySelector('img').style.filter='grayscale(0%)';this.querySelector('img').style.opacity='1';this.querySelector('img').style.transform='scale(1.1)'" style={{position: 'relative', aspectRatio: '1', borderRadius: '0.75rem', overflow: 'hidden', cursor: 'default'}}>
<img alt="1º Preto e Cinza Artink Colombo" decoding="async" height="400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/139b54b0-b195-4334-b69e-df2eb270a1f1_800w.jpg" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: '0.6', transition: 'all 0.5s ease'}} width="400"/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1rem', background: 'linear-gradient(to top,#000,transparent)'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#fff'}}>1º Preto &amp; Cinza @artinkcolombo</span>
</div>
</div>
<div className="group" onmouseout="this.querySelector('img').style.filter='grayscale(100%)';this.querySelector('img').style.opacity='0.6';this.querySelector('img').style.transform='scale(1)'" onmouseover="this.querySelector('img').style.filter='grayscale(0%)';this.querySelector('img').style.opacity='1';this.querySelector('img').style.transform='scale(1.1)'" style={{position: 'relative', aspectRatio: '1', borderRadius: '0.75rem', overflow: 'hidden', cursor: 'default'}}>
<img alt="1º Preto e Cinza Tattoo Stars" decoding="async" height="400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/833f7e25-4bbd-4d0c-8ba8-8bb8d7ee0878_800w.jpg" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: '0.6', transition: 'all 0.5s ease'}} width="400"/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1rem', background: 'linear-gradient(to top,#000,transparent)'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#fff'}}>1º Preto e Cinza @tattoostarsoficial</span>
</div>
</div>
<div className="group" onmouseout="this.querySelector('img').style.filter='grayscale(100%)';this.querySelector('img').style.opacity='0.6';this.querySelector('img').style.transform='scale(1)'" onmouseover="this.querySelector('img').style.filter='grayscale(0%)';this.querySelector('img').style.opacity='1';this.querySelector('img').style.transform='scale(1.1)'" style={{position: 'relative', aspectRatio: '1', borderRadius: '0.75rem', overflow: 'hidden', cursor: 'default'}}>
<img alt="1º Preto e Cinza PG Tattoo Fest" decoding="async" height="400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0148bac-bcc3-4047-9132-d0e506956d4b_800w.jpg" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: '0.6', transition: 'all 0.5s ease'}} width="400"/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1rem', background: 'linear-gradient(to top,#000,transparent)'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#fff'}}>1º Preto e Cinza @pgtattoofest</span>
</div>
</div>
<div className="group" onmouseout="this.querySelector('img').style.filter='grayscale(100%)';this.querySelector('img').style.opacity='0.6';this.querySelector('img').style.transform='scale(1)'" onmouseover="this.querySelector('img').style.filter='grayscale(0%)';this.querySelector('img').style.opacity='1';this.querySelector('img').style.transform='scale(1.1)'" style={{position: 'relative', aspectRatio: '1', borderRadius: '0.75rem', overflow: 'hidden', cursor: 'default'}}>
<img alt="1º Preto e Cinza Tattoo Ink Pinhais" decoding="async" height="400" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b51c12e-3d76-4398-b797-2fc6d28baf02_800w.png" style={{position: 'absolute', inset: '0', width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', opacity: '0.6', transition: 'all 0.5s ease'}} width="400"/>
<div style={{position: 'absolute', bottom: '0', left: '0', right: '0', padding: '1rem', background: 'linear-gradient(to top,#000,transparent)'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#fff'}}>1º Preto e Cinza @tattooinkpinhais</span>
</div>
</div>
</div>
<div className="fade-in-up delay-300" style={{marginTop: '3rem', textAlign: 'center'}}>
<a href="#contato" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'" style={{display: 'inline-block', padding: '1rem 2rem', borderRadius: '9999px', background: '#fff', color: '#000', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'transform 0.15s'}}>Agendar minha sessão</a>
</div>
</div>
</section>

<section id="trabalho" style={{overflow: 'hidden', background: '#000', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 0'}}>
<div style={{padding: '0 1.5rem', marginBottom: '3rem', textAlign: 'center'}}>
<h2 className="fade-in-up font-manrope" style={{fontSize: 'clamp(1.875rem,4vw,3rem)', fontWeight: '600', color: '#fff', letterSpacing: '-0.025em'}}>Algumas histórias <span style={{color: '#404040'}}>já eternizadas</span></h2>
<p className="fade-in-up delay-100 font-mono" style={{fontSize: '0.75rem', color: '#737373', marginTop: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Arraste para o lado ou clique na foto</p>
</div>
<div style={{position: 'relative', width: '100%'}}>
<div style={{position: 'absolute', top: '0', bottom: '0', left: '0', width: '4rem', background: 'linear-gradient(to right,#000,transparent)', zIndex: '20', pointerEvents: 'none'}}></div>
<div style={{position: 'absolute', top: '0', bottom: '0', right: '0', width: '4rem', background: 'linear-gradient(to left,#000,transparent)', zIndex: '20', pointerEvents: 'none'}}></div>
<div className="carousel-viewport">
<div className="carousel-track">
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo 1" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4645b726-b7f4-4fc2-86be-506acd4f4dd5_800w.png" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo 2" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ffb4ec-e169-40a4-b27a-f9551f39e5bd_800w.jpg" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo 3" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0057c6c3-5164-43d3-90c5-7c2cf71cef47_800w.jpg" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo 4" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1f1fb53-476d-4c50-ae66-7c0a0636608e_800w.jpg" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo 5" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bb0bc5b0-e0c6-4709-a21c-5b5a8580a9e4_800w.jpg" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo Guerreira Samurai" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/330ad0c1-8f6e-45df-aab2-59e0a7657171_800w.png" width="320"/></div>
<div className="carousel-item glass-panel shadow-xl"><img alt="Tattoo Thor Viking" decoding="async" height="420" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0782e-8b88-4002-befd-f9bfa3217837_800w.png" width="320"/></div>
</div>
</div>
</div>
<div style={{marginTop: '3rem', textAlign: 'center'}}>
<a href="#contato" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" style={{display: 'inline-block', padding: '1rem 2rem', borderRadius: '9999px', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background-color 0.15s'}}>Quero a minha próxima</a>
</div>
</section>

<section style={{overflow: 'hidden', background: '#030303', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8rem 1.5rem'}}>
<div id="workshops-inner" style={{maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center'}}>
<div className="fade-in-up" style={{order: '1'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'block', marginBottom: '1rem'}}>Educação</span>
<h2 className="font-manrope" style={{fontSize: 'clamp(2.25rem,4vw,3rem)', fontWeight: '600', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1'}}>Workshops &amp;<br/><span style={{color: '#737373'}}>Mentorias</span></h2>
<p style={{color: '#a3a3a3', fontWeight: '300', lineHeight: '1.625', marginBottom: '2rem', maxWidth: '28rem'}}>Compartilhando conhecimento técnico e artístico para tatuadores que buscam elevar seu nível profissional no estilo preto e cinza.</p>
<a className="glass-panel" href="https://api.whatsapp.com/send/?phone=5541998467862&amp;text=Fala%2C+Marllon%21+Tudo+bem%3F+Vim+pela+sua+pagina+e+quero+dar+o+proximo+passo+e+participar+de+uma+mentoria+ou+workshop+contigo.+Consegue+me+passar+as+informacoes+de+como+funcionam+as+proximas+turmas+ou+o+atendimento+individual%3F+Valeu%21&amp;type=phone_number&amp;app_absent=0" onmouseout="this.style.backgroundColor=''" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.1)'" rel="noopener noreferrer" style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '1rem 2rem', borderRadius: '9999px', color: '#fff', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background-color 0.15s'}} target="_blank">Quero aprender com Marllon</a>
</div>
<div id="workshop-cards" style={{order: '2', position: 'relative', height: '480px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<div className="glass-panel wcard" onmouseout="this.style.zIndex='10';this.style.transform='rotate(-10deg) scale(1)'" onmouseover="this.style.zIndex='30';this.style.transform='rotate(-10deg) scale(1.1)'" style={{position: 'absolute', width: '260px', aspectRatio: '3/4', zIndex: '10', padding: '0.25rem', borderRadius: '1rem', marginLeft: '-6rem', transform: 'rotate(-10deg)', transition: 'all 0.7s ease-out', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.4)'}}>
<img alt="Workshop 1" decoding="async" height="320" loading="lazy" onmouseout="this.style.filter='grayscale(100%)'" onmouseover="this.style.filter='grayscale(0%)'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/16ef330d-30ca-49a6-a733-c32f2992dd76_1600w.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem', filter: 'grayscale(100%)', transition: 'filter 0.5s ease'}} width="240"/>
</div>
<div className="glass-panel wcard" onmouseout="this.style.zIndex='10';this.style.transform='rotate(10deg) scale(1)'" onmouseover="this.style.zIndex='30';this.style.transform='rotate(10deg) scale(1.1)'" style={{position: 'absolute', width: '260px', aspectRatio: '3/4', zIndex: '10', padding: '0.25rem', borderRadius: '1rem', marginLeft: '6rem', transform: 'rotate(10deg)', transition: 'all 0.7s ease-out', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.4)'}}>
<img alt="Workshop 2" decoding="async" height="320" loading="lazy" onmouseout="this.style.filter='grayscale(100%)'" onmouseover="this.style.filter='grayscale(0%)'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/71d65731-3e00-4f35-8eb5-70cb94f652f1_1600w.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem', filter: 'grayscale(100%)', transition: 'filter 0.5s ease'}} width="240"/>
</div>
<div className="glass-panel wcard-center" onmouseout="this.style.zIndex='20';this.style.transform='scale(1)'" onmouseover="this.style.zIndex='30';this.style.transform='scale(1.1)'" style={{position: 'absolute', width: '300px', aspectRatio: '3/4', zIndex: '20', padding: '0.25rem', borderRadius: '1rem', transition: 'all 0.7s ease-out', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)'}}>
<img alt="Workshop 3" decoding="async" height="373" loading="lazy" onmouseout="this.style.filter='grayscale(100%)'" onmouseover="this.style.filter='grayscale(0%)'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c3ceaa37-354b-4fc8-8316-a7f5a1377bf9_1600w.jpg" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.75rem', filter: 'grayscale(100%)', transition: 'filter 0.5s ease'}} width="280"/>
</div>
</div>
</div>
</section>

<section style={{background: '#050505', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '6rem 1.5rem'}}>
<div className="fade-in-up" style={{maxWidth: '42rem', margin: '0 auto', textAlign: 'center'}}>
<div className="glass-panel" style={{background: 'rgba(0, 0, 0, 0.4)', borderColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '1.5rem', padding: '2rem', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.6)'}}>
<iconify-icon icon="solar:quote-up-square-linear" style={{fontSize: '2.5rem', color: 'rgba(255,255,255,0.2)', display: 'block', marginBottom: '1.5rem'}}></iconify-icon>
<div className="font-manrope" style={{lineHeight: '1.625', fontSize: 'clamp(1rem,2vw,1.25rem)', fontWeight: '300', fontStyle: 'italic', color: '#d4d4d4'}}>
<p style={{marginBottom: '1rem'}}>"A arte sempre foi parte de mim. Foi ela que transformou a minha vida.</p>
<p style={{marginBottom: '1rem'}}>Hoje, cada tatuagem que faço carrega mais do que tinta. Carrega história. Carrega intenção. Carrega verdade.</p>
<p style={{marginBottom: '1rem'}}>Quando você escolhe marcar sua pele comigo, não leva apenas um desenho. Leva significado.</p>
<p>E assim como a arte transformou a minha vida, que ela também eternize na sua pele o sentimento de um sonho realizado."</p>
</div>
<div style={{marginTop: '2.5rem'}}>
<a href="#contato" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.05)'" style={{display: 'inline-block', padding: '1rem 2rem', borderRadius: '9999px', background: '#fff', color: '#000', fontSize: '0.875rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'transform 0.15s', boxShadow: '0 0 20px rgba(255,255,255,0.15)'}}>Marcar minha sessão</a>
</div>
</div>
</div>
</section>

<section id="contato" style={{background: 'linear-gradient(to bottom, #000, #171717)', width: '100%', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8rem 1.5rem'}}>
<div className="fade-in-up" style={{maxWidth: '800px', margin: '0 auto'}}>
<div style={{textAlign: 'center', marginBottom: '3rem'}}>
<h2 className="font-manrope" style={{fontSize: 'clamp(2.25rem,4vw,3rem)', fontWeight: '600', color: '#fff', marginBottom: '1rem'}}>Inicie seu <span style={{color: '#737373'}}>Projeto</span></h2>
<p style={{color: '#a3a3a3', fontWeight: '300'}}>Preencha o formulário abaixo para iniciarmos o atendimento.</p>
</div>
<form className="glass-panel" id="form_wpp" style={{padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
<div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Qual seu nome?</label>
<input className="form-input" id="nome_contato" placeholder="Seu nome" required="" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff'}} type="text"/>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Sua Cidade/Estado?</label>
<input className="form-input" id="cidade_contato" placeholder="Ex: Curitiba - PR" required="" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff'}} type="text"/>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Qual sua altura?</label>
<select className="form-input" id="altura_contato" required="" style={{width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Menos de 1,50">Tenho menos de 1,50</option>
<option style={{background: '#171717'}} value="Entre 1,50 e 1,60">Entre 1,50 e 1,60</option>
<option style={{background: '#171717'}} value="Entre 1,60 e 1,70">Entre 1,60 e 1,70</option>
<option style={{background: '#171717'}} value="Entre 1,70 e 1,80">Entre 1,70 e 1,80</option>
<option style={{background: '#171717'}} value="Entre 1,80 e 1,90">Entre 1,80 e 1,90</option>
<option style={{background: '#171717'}} value="Mais de 1,90">Mais de 1,90</option>
</select>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Sua primeira Tattoo?</label>
<select className="form-input" id="primeira_tattoo" required="" style={{width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Sim">Sim</option>
<option style={{background: '#171717'}} value="Não">Não</option>
<option style={{background: '#171717'}} value="Tenho só pequenas">Tenho só pequenas</option>
</select>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>O que você quer fazer?</label>
<select className="form-input" id="tipo_trabalho" required="" style={{width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Reforma">Reforma</option>
<option style={{background: '#171717'}} value="Cobertura">Cobertura</option>
<option style={{background: '#171717'}} value="Uma nova tattoo">Uma nova tattoo</option>
</select>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Qual parte do corpo?</label>
<select className="form-input" id="parte_corpo" onchange="mostrarSubOpcoes()" required="" style={{width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Braço">Braço</option>
<option style={{background: '#171717'}} value="Perna">Perna</option>
<option style={{background: '#171717'}} value="Peito">Peito</option>
<option style={{background: '#171717'}} value="Costas">Costas</option>
<option style={{background: '#171717'}} value="Outro…">Outro…</option>
</select>
</div>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Como você quer essa tattoo?</label>
<select className="form-input" id="estilo_tattoo" required="" style={{width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Preto e cinza">Preto e cinza</option>
<option style={{background: '#171717'}} value="Preto e cinza + detalhe coloridos">Preto e cinza + detalhe coloridos</option>
</select>
</div>
</div>
<div id="container_sub_braco" style={{display: 'none', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#a3a3a3', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Especifique no Braço:</label>
<select className="form-input" id="sub_braco" onchange="verificarOutroSub(this)" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Antebraço">Antebraço</option>
<option style={{background: '#171717'}} value="Ombro a cotovelo">Ombro a cotovelo</option>
<option style={{background: '#171717'}} value="Bíceps">Bíceps</option>
<option style={{background: '#171717'}} value="Fechamento">Fechamento</option>
<option style={{background: '#171717'}} value="Outro..">Outro..</option>
</select>
</div>
<div id="container_sub_perna" style={{display: 'none', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#a3a3a3', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Especifique na Perna:</label>
<select className="form-input" id="sub_perna" onchange="verificarOutroSub(this)" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Canela">Canela</option>
<option style={{background: '#171717'}} value="Panturrilha">Panturrilha</option>
<option style={{background: '#171717'}} value="Coxa">Coxa</option>
<option style={{background: '#171717'}} value="Fechamento">Fechamento</option>
<option style={{background: '#171717'}} value="Outra…">Outra…</option>
</select>
</div>
<div id="container_sub_peito" style={{display: 'none', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#a3a3a3', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Especifique no Peito:</label>
<select className="form-input" id="sub_peito" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Um dos lados">Um dos lados</option>
<option style={{background: '#171717'}} value="Os dois lados">Os dois lados</option>
</select>
</div>
<div id="container_sub_costas" style={{display: 'none', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#a3a3a3', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Especifique nas Costas:</label>
<select className="form-input" id="sub_costas" style={{width: '100%', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff', appearance: 'none', backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22none%22 viewBox=%220 0 24 24%22 stroke=%22rgba(255,255,255,0.4)%22%3E%3Cpath strokeLinecap=%22round%22 strokeLinejoin=%22round%22 strokeWidth=%222%22 d=%22M19 9l-7 7-7-7%22/%3E%3C/svg%3E\')', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1.5rem center', backgroundSize: '1.5rem'}}>
<option disabled="" selected="" style={{background: '#171717'}} value="">Selecione...</option>
<option style={{background: '#171717'}} value="Apenas uma parte">Apenas uma parte</option>
<option style={{background: '#171717'}} value="Fechamento">Fechamento</option>
</select>
</div>
<div id="container_outro_local" style={{display: 'none', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#a3e635', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Qual seria o outro local?</label>
<input className="form-input" id="outro_local" placeholder="Digite o local exato..." style={{width: '100%', background: 'rgba(255, 255, 255, 0.08)', border: '1px solid rgba(163,230,53,0.5)', borderRadius: '9999px', padding: '1rem 1.5rem', color: '#fff'}} type="text"/>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
<label className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', marginLeft: '0.5rem'}}>Breve descrição da sua ideia:</label>
<textarea className="form-input" id="ideia_contato" placeholder="Descreva o que você imagina para essa tatuagem..." required="" rows="4" style={{width: '100%', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '1rem 1.5rem', color: '#fff', resize: 'none'}}></textarea>
</div>
<button onclick="dispararWhatsApp(event)" onmouseout="this.style.backgroundColor='#fff'" onmouseover="this.style.backgroundColor='#e5e5e5'" style={{textTransform: 'uppercase', fontSize: '0.875rem', fontWeight: '700', color: '#000', letterSpacing: '0.1em', background: '#fff', width: '100%', borderRadius: '9999px', border: 'none', marginTop: '1rem', padding: '1.25rem', cursor: 'pointer', boxShadow: '0 0 25px -5px rgba(255,255,255,0.3)', transition: 'background-color 0.15s'}} type="button">
        Enviar e iniciar meu projeto
      </button>
</form>
</div>
</section>

<footer style={{width: '100%', borderTop: '1px solid rgba(255,255,255,0.1)', padding: '5rem 1.5rem 3rem', background: '#000', position: 'relative', overflow: 'hidden'}}>
<div style={{position: 'absolute', bottom: '0', left: '0', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', pointerEvents: 'none', opacity: '0.05'}}>
<span className="font-manrope" style={{fontSize: '18vw', fontWeight: '700', color: '#fff', letterSpacing: '-0.05em', lineHeight: '1'}}>MARLLON</span>
</div>
<div style={{position: 'relative', zIndex: '10', maxWidth: '1400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
<h3 className="font-manrope" style={{fontSize: '1.5rem', color: '#fff', fontWeight: '600'}}>Marllon Dars</h3>
<p style={{color: '#737373', fontSize: '0.875rem', maxWidth: '20rem'}}>Transformando pele em arte e histórias em memórias eternas.</p>
</div>
<div style={{display: 'flex', gap: '4rem'}}>
<div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Social</span>
<a href="https://www.instagram.com/marllon.dars/" onmouseout="this.style.color='#d4d4d4'" onmouseover="this.style.color='#fff'" rel="noopener" style={{fontSize: '0.875rem', color: '#d4d4d4', transition: 'color 0.15s'}} target="_blank">Instagram</a>
<a href="https://wa.me/5541998467862" onmouseout="this.style.color='#d4d4d4'" onmouseover="this.style.color='#fff'" rel="noopener" style={{fontSize: '0.875rem', color: '#d4d4d4', transition: 'color 0.15s'}} target="_blank">WhatsApp</a>
</div>
<div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
<span className="font-mono" style={{fontSize: '0.75rem', color: '#737373', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Menu</span>
<a href="#home" onmouseout="this.style.color='#d4d4d4'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.875rem', color: '#d4d4d4', transition: 'color 0.15s'}}>Home</a>
<a href="#trabalho" onmouseout="this.style.color='#d4d4d4'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.875rem', color: '#d4d4d4', transition: 'color 0.15s'}}>Portfólio</a>
<a href="#contato" onmouseout="this.style.color='#d4d4d4'" onmouseover="this.style.color='#fff'" style={{fontSize: '0.875rem', color: '#d4d4d4', transition: 'color 0.15s'}}>Contato</a>
</div>
</div>
</div>
<div style={{position: 'relative', zIndex: '10', marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
<span className="font-mono" style={{fontSize: '10px', color: '#525252', textTransform: 'uppercase', letterSpacing: '0.1em'}}>© 2026 Marllon Dars Tattoo.</span>
<span className="font-mono" style={{fontSize: '10px', color: '#525252', textTransform: 'uppercase', letterSpacing: '0.1em'}}>Todos os direitos reservados.</span>
</div>
</footer>




<style>
@media(min-width:768px){
  #historia .glass-panel{padding:3rem 6rem;}
  form#form_wpp>div[style*="grid-template-columns:1fr"]{grid-template-columns:1fr 1fr;}
  .premio-grid{grid-template-columns:repeat(4,1fr) !important;}
  #workshop-cards{height:580px;}
  #workshop-cards .wcard{width:280px;}
  #workshop-cards .wcard-center{width:320px;}
}
@media(min-width:1024px){
  #workshops-inner{grid-template-columns:1fr 1fr !important;}
  #nav-center{display:flex !important;}
}
</style>

    </>
  );
}
