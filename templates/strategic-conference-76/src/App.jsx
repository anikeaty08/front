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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



              hbspt.forms.create({
                portalId: "47448125",
                formId: "8c407a0f-a8ac-44be-9e45-cf65d3da6415",
                region: "na1",
                target: "#hubspotFormContainer"
              });
            


    document.addEventListener('DOMContentLoaded', () => {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Scroll Reveal
      const revealElements = document.querySelectorAll('.reveal');
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            const children = entry.target.querySelectorAll('.delay-stagger');
            children.forEach((child, idx) => {
              setTimeout(() => { child.classList.add('active'); }, (idx + 1) * 100);
            });
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
      revealElements.forEach(el => revealObserver.observe(el));

      // Smooth Anchor Scroll
      document.querySelectorAll('[data-scroll]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = btn.getAttribute('data-scroll');
          if(targetId === '#top') {
            window.scrollTo({top: 0, behavior: 'smooth'});
            return;
          }
          const target = document.querySelector(targetId);
          if (target) {
            const headerOffset = 0; 
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        });
      });

      // Parallax Blobs
      if (!prefersReducedMotion && window.innerWidth > 768) {
        const blobs = document.querySelectorAll('.parallax-blob');
        document.addEventListener('mousemove', (e) => {
          const x = (window.innerWidth / 2 - e.pageX) / 50;
          const y = (window.innerHeight / 2 - e.pageY) / 50;
          blobs.forEach(blob => {
            const speed = blob.getAttribute('data-speed') || 0.05;
            blob.style.transform = `translate(${x * speed * 100}px, ${y * speed * 100}px)`;
          });
        });
      }

      // Count Up Animation
      const countElements = document.querySelectorAll('.count-up');
      const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            const duration = 2000;
            const stepTime = Math.abs(Math.floor(duration / target));
            let current = 0;
            const timer = setInterval(() => {
              current += 1;
              entry.target.textContent = current;
              if (current >= target) {
                entry.target.textContent = target;
                clearInterval(timer);
              }
            }, stepTime);
            countObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      if(!prefersReducedMotion) {
        countElements.forEach(el => countObserver.observe(el));
      } else {
        countElements.forEach(el => el.textContent = el.getAttribute('data-target'));
      }

      // Magnetic Button Effect
      if (!prefersReducedMotion && window.innerWidth > 768) {
        const magnetics = document.querySelectorAll('.magnetic');
        magnetics.forEach(btn => {
          btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
          });
          btn.addEventListener('mouseleave', () => {
            btn.style.transform = `translate(0px, 0px)`;
          });
        });
      }

      // Carousel Controls
      const track = document.getElementById('carouselTrack');
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');
      const dots = document.querySelectorAll('#carouselDots div');
      
      if (track) {
        const updateDots = () => {
          if(window.innerWidth >= 768) return;
          const scrollLeft = track.scrollLeft;
          const cardWidth = track.clientWidth;
          const activeIndex = Math.min(
            dots.length - 1, 
            Math.max(0, Math.round(scrollLeft / cardWidth))
          );
          dots.forEach((dot, idx) => {
            if(idx === activeIndex) {
              dot.classList.replace('bg-[var(--border)]', 'bg-[var(--accent)]');
            } else {
              dot.classList.replace('bg-[var(--accent)]', 'bg-[var(--border)]');
            }
          });
        };

        if (prevBtn && nextBtn) {
          const getScrollAmount = () => {
            const card = track.querySelector('.snap-center');
            return card ? card.offsetWidth + 24 : 400; 
          };
          nextBtn.addEventListener('click', () => track.scrollBy({ left: getScrollAmount(), behavior: 'smooth' }));
          prevBtn.addEventListener('click', () => track.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' }));
        }
        
        track.addEventListener('scroll', () => {
          window.requestAnimationFrame(updateDots);
        });
      }
    });
  
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
      

<div className="bg-noise"></div>
<div className="bg-grid"></div>

<div className="absolute top-0 left-0 w-full z-[60] flex flex-col bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)] transition-all">

<div className="flex items-center justify-center h-[32px] px-4 border-b border-[var(--border)] bg-gradient-to-r from-[var(--surface)] via-[var(--bg)] to-[var(--surface)]">
<div className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse mr-2.5 hidden md:block"></div>
<p className="text-xs font-light text-[var(--text2)] tracking-wide">
        Exclusivo para líderes de Planejamento Estratégico em grandes organizações.
      </p>
</div>

<header className="w-full max-w-[1200px] mx-auto px-4 md:px-6 h-[72px] flex items-center justify-between">
<a className="flex-shrink-0 transition-opacity hover:opacity-80" href="https://blueprintt.co/" rel="noopener noreferrer" target="_blank">
<img alt="Blueprintt Logo" className="h-6" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
</a>
<div className="hidden md:flex flex-col items-center justify-center opacity-80">
</div>
<button className="magnetic hidden sm:inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--primaryHover)] text-white text-xs font-medium px-5 py-2.5 rounded-xl transition-all duration-300 shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_4px_24px_rgba(37,99,235,0.5)]" data-scroll="#lista">
        QUERO ENTRAR NA LISTA
      </button>
<button className="sm:hidden text-[var(--accent)] p-2 rounded-lg bg-[var(--primary)]/10 border border-[var(--primary)]/20" data-scroll="#lista">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</header>
</div>
<main className="relative z-10 pt-[104px]">

<section className="relative min-h-[100svh] flex flex-col justify-center w-full overflow-hidden border-b border-[var(--border)] pb-20 pt-10">
<div className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-50" style={{maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)'}}>
<video autoplay="" className="absolute w-full h-full left-0 top-0 object-cover" loop="" muted="" playsinline="">
<source src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/background-blue.mov" type="video/mp4"/>
</video>
</div>
<div className="parallax-blob absolute top-10 -left-20 w-[400px] h-[400px] bg-[var(--primary)]/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen transition-transform duration-75 ease-linear">
</div>
<div className="parallax-blob absolute top-40 left-1/3 w-[300px] h-[300px] bg-[var(--accent)]/10 rounded-full blur-[90px] pointer-events-none mix-blend-screen transition-transform duration-75 ease-linear" data-speed="0.05"></div>
<div className="parallax-blob absolute -bottom-20 right-10 w-[500px] h-[500px] bg-[var(--success)]/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen transition-transform duration-75 ease-linear" data-speed="-0.03"></div>
<div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 md:gap-16 items-center relative z-10">
<div className="flex flex-col gap-6 reveal delay-stagger active">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm w-max delay-stagger active">
<span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></span>
<span className="text-[var(--text2)] uppercase text-xs font-medium tracking-wide">Strategic Planning Summit 2026</span>
</div>
<div className="relative delay-stagger active">
<h1 className="md:text-5xl lg:text-6xl leading-[1.15] text-[var(--text)] text-4xl font-medium tracking-tight">
              Seu plano estratégico <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--text)] to-[var(--accent)]">
                sobrevive ao primeiro trimestre?
              </span>
</h1>
<div className="signal-line mt-6"></div>
</div>
<p className="text-base md:text-lg font-light leading-[1.75] text-[var(--text2)] max-w-xl delay-stagger active">
            Em setembro de 2026, líderes de Planejamento Estratégico de grandes corporações brasileiras e multinacionais
            vão se reunir para resolver um problema real e trocar práticas com pares que enfrentam os mesmos desafios:
            <strong className="">transformar estratégia em decisão contínua, execução previsível e resultado</strong>, mesmo
            quando o cenário muda antes do plano completar 90 dias.
          </p>
<div className="flex flex-wrap gap-3 my-2 delay-stagger active">
<div className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-xs font-light text-[var(--text2)] flex items-center gap-2">
<iconify-icon className="text-[var(--accent)]" height="14" icon="solar:map-point-linear" strokeWidth="1.5" width="14"></iconify-icon> São Paulo
            </div>
<div className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-xs font-light text-[var(--text2)] flex items-center gap-2">
<iconify-icon className="text-[var(--accent)]" height="14" icon="solar:calendar-date-linear" strokeWidth="1.5" width="14"></iconify-icon> 03 e 04 de setembro de 2026
            </div>
<div className="px-3 py-1.5 bg-[var(--surface)] border border-[var(--border)] rounded-lg text-xs font-light text-[var(--text2)] flex items-center gap-2">
<iconify-icon className="text-[var(--accent)]" height="14" icon="solar:stopwatch-linear" strokeWidth="1.5" width="14"></iconify-icon> Dois dias de imersão
            </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2 delay-stagger active">
<button className="magnetic group relative inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--primaryHover)] text-white text-sm font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_24px_rgba(37,99,235,0.4)]" data-scroll="#lista">
              QUERO ENTRAR NA LISTA DE PRIORIDADE
              <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-1 delay-stagger pt-4 border-t border-[var(--border)] active">
<p className="text-xs font-light text-[var(--muted)]">Cadastre-se para ser avisado primeiro quando as inscrições
              abrirem. Vagas limitadas.</p>
<div className="flex items-center gap-1.5 text-xs font-medium text-[var(--success)]">
<iconify-icon height="16" icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Seus dados estão seguros. Sem compromisso.
            </div>
</div>
</div>
<div className="relative w-full aspect-square md:aspect-[4/5] rounded-3xl reveal delay-100 flex items-center justify-center order-first md:order-last mt-0 active">
<div className="absolute inset-0 rounded-3xl conic-glow opacity-50 blur-2xl z-0"></div>
<div className="relative z-10 w-full h-full bg-[var(--surface)] p-2 rounded-3xl border border-[var(--border)] shadow-2xl">
<div className="relative w-full h-full rounded-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/40 to-transparent opacity-90 z-10 pointer-events-none">
</div>
<img alt="Líderes em conferência" className="transform transition-transform duration-1000 ease-out grayscale-[20%] w-full h-full object-cover scale-105" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 right-6 z-20 p-4 rounded-xl bg-[var(--surfaceGlass)] backdrop-blur-md border border-[var(--border)]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--primary)]/20 flex items-center justify-center text-[var(--accent)] border border-[var(--primary)]/30">
<iconify-icon height="20" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-white">Ecossistema Blueprintt</span>
<span className="text-xs text-[var(--text2)] uppercase tracking-wider mt-0.5">Acesso Exclusivo</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-6 border-[var(--border)] overflow-hidden border-b pt-5 pb-5 relative">
<div className="text-center mb-4 px-4 relative z-10">
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-[var(--text)]">
          Grandes organizações já participaram
        </h2>
<p className="text-sm font-light text-[var(--text2)] mt-1">
          Líderes das maiores empresas do Brasil reúnem-se no nosso ecossistema.
        </p>
</div>
<div className="relative flex overflow-hidden w-full mx-auto mask-fade">
<div className="absolute inset-0 z-20 pointer-events-none" style={{background: 'linear-gradient(to right, var(--bg) 0%, transparent 15%, transparent 85%, var(--bg) 100%)'}}>
</div>
<div className="flex whitespace-nowrap">
<div className="animate-marquee flex gap-10 md:gap-16 items-center pr-10 md:pr-16">
<img alt="Logo Cliente 1" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0000_Dow_Chemical_Company_logo.svg_.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 2" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0001_Sodexo_logo.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 3" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0004_channels4_profile.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 4" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0003_CNH_Industrial.svg_.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 5" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0002_Coca-Cola-Logo.png?w=800&amp;q=80"/>
</div>
<div aria-hidden="true" className="animate-marquee flex gap-10 md:gap-16 items-center pr-10 md:pr-16">
<img alt="Logo Cliente 1" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0000_Dow_Chemical_Company_logo.svg_.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 2" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0001_Sodexo_logo.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 3" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0004_channels4_profile.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 4" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0003_CNH_Industrial.svg_.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 5" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0002_Coca-Cola-Logo.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 6" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0000_Dow_Chemical_Company_logo.svg_.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 7" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://paginas.blueprintt.co/wp-content/uploads/2026/04/A3AAB8_0001_Sodexo_logo.png?w=800&amp;q=80"/>
<img alt="Logo Cliente 8" className="h-8 md:h-12 w-auto opacity-60 rounded" src="https://placehold.co/200x80/111827/A3AAB8?text=LOGO+8"/>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 max-w-[1200px] mx-auto relative reveal active">
<div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
<div className="md:col-span-5 relative">
<div className="absolute -left-4 md:-left-8 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[var(--accent)] to-transparent rounded-full opacity-50">
</div>
<h2 className="text-3xl md:text-4xl font-medium leading-[1.2] text-[var(--text)] tracking-tight">
            O problema não é falta de estratégia. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">É falta de sistema.</span>
</h2>
</div>
<div className="md:col-span-7 flex flex-col gap-6 text-[var(--text2)] font-light leading-[1.8] text-base">
<p className="">
            Planejamentos estratégicos brilhantes são desenhados a cada ano. Porém, o cenário muda, o orçamento se
            desconecta da visão de longo prazo, o excesso de iniciativas drena a organização, a disputa por recursos
            trava as decisões e o alinhamento dá lugar à busca forçada por consenso.
          </p>
<p>
            O resultado? A estratégia vira um documento empoeirado e o líder de planejamento se transforma em um
            <em className="text-[var(--text)] font-medium not-italic">bombeiro corporativo</em>, apagando incêndios do dia a
            dia.
          </p>
<div className="flex items-start gap-4 p-4 mt-2 bg-[var(--surface)] border border-[var(--border)] rounded-xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/10 to-transparent opacity-50 pointer-events-none">
</div>
<iconify-icon className="text-[var(--accent)] shrink-0" height="24" icon="solar:info-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
<p className="text-sm text-[var(--text)] font-light relative z-10">
              Esse é um problema de modelo, não de capacidade. E no SPS 2026, líderes vão mostrar exatamente como
              resolver isso na prática.
            </p>
</div>
</div>
</div>
</section>

<section className="pt-16 pb-12 px-4 max-w-[1200px] mx-auto relative reveal active">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl md:text-3xl font-medium leading-[1.25] text-[var(--text)] mb-4 tracking-tight">
          O mercado está se movendo. <br/>A pergunta é: o seu planejamento acompanha?
        </h2>
</div>
<div className="grid sm:grid-cols-3 gap-6 md:gap-8">
<div className="premium-card p-8 flex flex-col items-center text-center justify-center reveal delay-stagger active">
<div className="text-5xl md:text-6xl font-medium tracking-tighter mb-3 flex items-baseline justify-center">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
<span className="count-up" data-target="69">0</span>%
            </span>
</div>
<p className="text-sm font-light leading-[1.6] text-[var(--text2)]">dos executivos admitem que suas empresas não
            são rápidas o suficiente para reavaliar a estratégia.</p>
<span className="text-xs text-[var(--muted)] mt-5 font-medium uppercase tracking-wider">KPMG, 2025</span>
</div>
<div className="premium-card p-8 flex flex-col items-center text-center justify-center reveal delay-stagger active">
<div className="text-5xl md:text-6xl font-medium tracking-tighter mb-3 flex items-baseline justify-center">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
<span className="count-up" data-target="15">0</span>%
            </span>
</div>
<p className="text-sm font-light leading-[1.6] text-[var(--text2)]">
            Apenas 15% das empresas revisam o planejamento continuamente.
            <span className="font-medium text-[var(--text)]">Mais de 2/3</span> seguem ciclos anuais rígidos.
          </p>
<span className="text-xs text-[var(--muted)] mt-5 font-medium uppercase tracking-wider">Deloitte, 2025</span>
</div>
<div className="premium-card p-8 flex flex-col items-center text-center justify-center reveal delay-stagger active">
<div className="text-5xl md:text-6xl font-medium tracking-tighter mb-3 flex items-baseline justify-center">
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]">
<span className="count-up" data-target="87">0</span>%
            </span>
</div>
<p className="text-sm font-light leading-[1.6] text-[var(--text2)]">afirmam que falhas na execução e
            desalinhamento de recursos são os maiores sabotadores dos planos.</p>
<span className="text-xs text-[var(--muted)] mt-5 font-medium uppercase tracking-wider">Deloitte, 2025</span>
</div>
</div>
<div className="mt-16 mb-8 flex flex-col md:flex-row items-center justify-between bg-[var(--surfaceGlass)] border border-[var(--border)] p-6 md:px-10 md:py-8 rounded-2xl backdrop-blur-md reveal delay-stagger active">
<p className="text-sm font-light text-[var(--text)] mb-6 md:mb-0 max-w-md text-center md:text-left">
          Entre na lista de prioridade para ser avisado antes de qualquer divulgação pública.
        </p>
<button className="magnetic w-full md:w-auto flex-shrink-0 bg-[var(--primary)] hover:bg-[var(--primaryHover)] shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white text-xs font-medium px-8 py-3.5 rounded-xl transition-all duration-300" data-scroll="#lista">
          ENTRAR NA LISTA
        </button>
</div>
</section>

<section className="py-12 md:py-16 px-4 max-w-[1200px] mx-auto relative reveal active">
<div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)]/40 to-transparent mb-16"></div>
<div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
<div className="order-last md:order-first relative">
<div className="relative z-10 bg-[var(--surfaceGlass)] border border-[var(--border)] p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
<div className="absolute -top-10 -right-10 w-32 h-32 bg-[var(--primary)]/20 blur-3xl rounded-full"></div>
<h3 className="text-sm font-medium mb-6 uppercase tracking-wider text-[var(--muted)]">O que você leva para sua
              cadeira:</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 text-[var(--accent)]">
<iconify-icon height="22" icon="solar:refresh-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[var(--text)]">Decisão contínua</h4>
<p className="text-sm font-light text-[var(--muted)] mt-1">Sistemas ágeis que adaptam a rota com base em
                    dados de mercado, sem burocracia.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 text-[var(--accent)]">
<iconify-icon height="22" icon="solar:target-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[var(--text)]">Execução previsível</h4>
<p className="text-sm font-light text-[var(--muted)] mt-1">Governança clara, alocação dinâmica de capital
                    e métricas que conectam a operação à visão.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-10 h-10 rounded-xl bg-[var(--primary)]/10 border border-[var(--primary)]/20 flex items-center justify-center shrink-0 text-[var(--accent)]">
<iconify-icon height="22" icon="solar:cpu-bolt-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-[var(--text)]">IA aplicada com resultado</h4>
<p className="text-sm font-light text-[var(--muted)] mt-1">Como a tecnologia aumenta a inteligência
                    estratégica e preditiva da sua organização.</p>
</div>
</li>
</ul>
</div>
</div>
<div className="flex flex-col gap-6">
<h2 className="text-3xl md:text-4xl font-medium leading-[1.2] text-[var(--text)] tracking-tight">
            O Strategic Planning Summit existe para resolver isso.
          </h2>
<div className="text-base font-light text-[var(--text2)] leading-[1.8] space-y-4">
<p>
              Não é um congresso teórico. Não é uma palestra motivacional. Não é um workshop de planilhas.
            </p>
<p>
              São <strong>dois dias intensos e imersivos</strong> ao lado de líderes que estão na mesma cadeira que
              você, decodificando frameworks, processos e arquiteturas que transformam o planejamento em um sistema
              operacional de alto desempenho.
            </p>
<div className="pt-6 flex flex-col gap-5">
<p className="text-sm font-light text-[var(--text)] flex items-center gap-2">
<iconify-icon className="text-[var(--accent)]" height="18" icon="solar:map-point-linear" strokeWidth="1.5" width="18"></iconify-icon>
                São Paulo | 03 e 04 de setembro de 2026
              </p>
<button className="magnetic w-max inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--primaryHover)] shadow-[0_0_20px_rgba(37,99,235,0.3)] text-white text-xs font-medium px-6 py-3 rounded-xl transition-all duration-300" data-scroll="#lista">
                GARANTIR MINHA PRIORIDADE
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 max-w-[1200px] mx-auto relative mt-8">

<div className="relative z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch reveal active">

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-medium leading-[1.2] text-[var(--text)] mb-8 tracking-tight delay-stagger active">
            Essa conferência é para você se:
          </h2>
<ul className="space-y-6 mb-10">
<li className="flex items-start gap-4 reveal delay-stagger active">
<iconify-icon className="text-[var(--success)] shrink-0 mt-0.5" height="22" icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-light text-[var(--text2)] leading-[1.6]">Você lidera ou atua diretamente na área de Planejamento Estratégico, Estratégia Corporativa ou PMO Estratégico de uma grande organização.</span>
</li>
<li className="flex items-start gap-4 reveal delay-stagger active">
<iconify-icon className="text-[var(--success)] shrink-0 mt-0.5" height="22" icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-light text-[var(--text2)] leading-[1.6]">Sente a necessidade de conectar melhor as decisões de longo prazo com a execução de curto prazo das unidades de negócios.</span>
</li>
<li className="flex items-start gap-4 reveal delay-stagger active">
<iconify-icon className="text-[var(--success)] shrink-0 mt-0.5" height="22" icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
<span className="text-sm font-light text-[var(--text2)] leading-[1.6]">Busca referências de como modernizar ciclos anuais engessados para um modelo de revisão ágil e contínua.</span>
</li>
</ul>
<div className="inline-flex items-start sm:items-center gap-3 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-xl mb-8 reveal delay-stagger active">
<iconify-icon className="text-[var(--accent)] shrink-0 mt-0.5 sm:mt-0" height="18" icon="solar:bell-linear" strokeWidth="1.5" width="18"></iconify-icon>
<p className="text-[13px] text-[var(--text2)] font-light leading-relaxed">
<span className="font-medium text-[var(--accent)]">Nota:</span> Se você se identifica com 2 ou mais pontos,
              vale estar na lista.
            </p>
</div>
<div className="reveal delay-stagger active">
<button className="magnetic inline-flex items-center justify-center bg-[var(--primary)] hover:bg-[var(--primaryHover)] text-white text-sm font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg w-full sm:w-auto" data-scroll="#lista">
              QUERO ENTRAR NA LISTA DE PRIORIDADE
            </button>
</div>
</div>

<div className="relative w-full min-h-[500px] md:min-h-[650px] rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl group reveal delay-stagger active">
<div className="absolute inset-0 bg-gradient-to-tr from-[var(--bg)] via-transparent to-transparent opacity-80 z-10 pointer-events-none">
</div>
<img alt="Liderança Estratégica" className="absolute inset-0 w-full h-full object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-4 max-w-[1200px] mx-auto relative reveal border-b border-[var(--border)] active">
<div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm w-max mb-6">
<iconify-icon className="text-[var(--accent)]" icon="solar:chat-round-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium text-[var(--text2)] tracking-wide uppercase">Feedback dos Líderes</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium leading-[1.25] text-[var(--text)] max-w-lg tracking-tight">
            O que disseram os executivos que participaram da última edição.
          </h2>
</div>
<div className="hidden md:flex items-center gap-3">
<button aria-label="Anterior" className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] hover:bg-[var(--surfaceGlass)] transition-colors text-[var(--text2)] hover:text-white group" id="prevBtn">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button aria-label="Próximo" className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center bg-[var(--surface)] hover:bg-[var(--surfaceGlass)] transition-colors text-[var(--text2)] hover:text-white group" id="nextBtn">
<iconify-icon className="group-hover:translate-x-1 transition-transform" height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="relative w-full overflow-hidden">
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar scroll-smooth cursor-grab active:cursor-grabbing pb-12 pt-4 w-full px-2" id="carouselTrack">

<div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] relative bg-[var(--surface)] border border-[var(--accent)]/50 rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.2)] overflow-hidden flex flex-col min-h-[300px]">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-4 right-4 text-[var(--primary)]/10 scale-125 pointer-events-none origin-bottom-right">
<iconify-icon height="100" icon="solar:quote-right-linear" strokeWidth="1" width="100"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--surfaceGlass)] border border-[var(--accent)] flex items-center justify-center text-[var(--text)]">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[var(--text)]">Diretor de Estratégia</span>
<span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-0.5">Grande Varejo</span>
</div>
</div>
<div className="flex gap-0.5">
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex-grow">
<p className="text-sm font-light leading-[1.8] text-[var(--text)]">
                "O evento superou muito minhas expectativas, em termos da qualidade e organização, nível dos
                palestrantes e conteúdo. Sem dúvidas recomendo a participação."
              </p>
</div>
<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-light text-[var(--accent)]">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Participante SPS 2025
            </div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] relative bg-[var(--surface)] border border-[var(--accent)]/50 rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.2)] overflow-hidden flex flex-col min-h-[300px]">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-4 right-4 text-[var(--primary)]/10 scale-125 pointer-events-none origin-bottom-right">
<iconify-icon height="100" icon="solar:quote-right-linear" strokeWidth="1" width="100"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--surfaceGlass)] border border-[var(--accent)] flex items-center justify-center text-[var(--text)]">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[var(--text)]">Head de PMO Estratégico</span>
<span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-0.5">Setor Financeiro</span>
</div>
</div>
<div className="flex gap-0.5">
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex-grow">
<p className="text-sm font-light leading-[1.8] text-[var(--text)]">
                "Participar do SP 2025 foi uma experiência muito especial. Poder conhecer como os pares estão tratando
                seus PEs foi um grande painel de benchmarking de altíssimo valor."
              </p>
</div>
<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-light text-[var(--accent)]">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Participante SPS 2025
            </div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] relative bg-[var(--surface)] border border-[var(--accent)]/50 rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.2)] overflow-hidden flex flex-col min-h-[300px]">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-4 right-4 text-[var(--primary)]/10 scale-125 pointer-events-none origin-bottom-right">
<iconify-icon height="100" icon="solar:quote-right-linear" strokeWidth="1" width="100"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--surfaceGlass)] border border-[var(--accent)] flex items-center justify-center text-[var(--text)]">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[var(--text)]">Gerente Executivo</span>
<span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-0.5">Indústria</span>
</div>
</div>
<div className="flex gap-0.5">
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex-grow">
<p className="text-sm font-light leading-[1.8] text-[var(--text)]">
                "Saí com vários insights para aplicar na Cia. Mesmo sendo 2 dias intensos, foram 2 dias extremamente
                proveitosos."
              </p>
</div>
<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-light text-[var(--accent)]">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Participante SPS 2025
            </div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] relative bg-[var(--surface)] border border-[var(--accent)]/50 rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.2)] overflow-hidden flex flex-col min-h-[300px]">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-4 right-4 text-[var(--primary)]/10 scale-125 pointer-events-none origin-bottom-right">
<iconify-icon height="100" icon="solar:quote-right-linear" strokeWidth="1" width="100"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--surfaceGlass)] border border-[var(--accent)] flex items-center justify-center text-[var(--text)]">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[var(--text)]">VP de Estratégia</span>
<span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-0.5">Tecnologia</span>
</div>
</div>
<div className="flex gap-0.5">
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex-grow">
<p className="text-sm font-light leading-[1.8] text-[var(--text)]">
                "Um evento que amplia a visão sobre estratégia e fortalece o network com profissionais renomados."
              </p>
</div>
<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-light text-[var(--accent)]">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Participante SPS 2025
            </div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[320px] md:w-[400px] relative bg-[var(--surface)] border border-[var(--accent)]/50 rounded-3xl p-8 shadow-[0_12px_40px_-12px_rgba(96,165,250,0.2)] overflow-hidden flex flex-col min-h-[300px]">
<div className="absolute -top-20 -right-20 w-40 h-40 bg-[var(--accent)]/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-4 right-4 text-[var(--primary)]/10 scale-125 pointer-events-none origin-bottom-right">
<iconify-icon height="100" icon="solar:quote-right-linear" strokeWidth="1" width="100"></iconify-icon>
</div>
<div className="flex items-center justify-between mb-8 relative z-10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[var(--surfaceGlass)] border border-[var(--accent)] flex items-center justify-center text-[var(--text)]">
<iconify-icon height="20" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium text-[var(--text)]">Diretor de Planejamento</span>
<span className="text-xs text-[var(--muted)] uppercase tracking-wider mt-0.5">Bens de Consumo</span>
</div>
</div>
<div className="flex gap-0.5">
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="text-amber-400 scale-110" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="relative z-10 flex-grow">
<p className="text-sm font-light leading-[1.8] text-[var(--text)]">
                "Criar essa rede foi um ponto alto. Sempre encontramos dificuldade na conexão com pessoas da área de
                estratégia."
              </p>
</div>
<div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center gap-2 text-xs font-light text-[var(--accent)]">
<iconify-icon height="16" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
              Participante SPS 2025
            </div>
</div>
</div>
<div className="flex justify-center gap-2 mt-4 md:hidden" id="carouselDots">
<div className="w-2 h-2 rounded-full bg-[var(--accent)] transition-opacity"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border)] transition-opacity"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border)] transition-opacity"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border)] transition-opacity"></div>
<div className="w-2 h-2 rounded-full bg-[var(--border)] transition-opacity"></div>
</div>
</div>
</section>

<section className="py-20 px-4 max-w-[1200px] mx-auto relative reveal">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium tracking-tight text-[var(--text)]">Vivência e Imersão</h2>
<p className="text-sm text-[var(--text2)] font-light mt-2">Registros de edições anteriores</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group">
<img alt="Palestrante" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group">
<img alt="Networking" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group">
<img alt="Apresentação" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1558403194-611308249627?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden group">
<img alt="Auditório" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale-[20%]" src="https://images.unsplash.com/photo-1515169067868-5387ec356754?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 w-full bg-[#152036] border-y border-[var(--border)] relative reveal text-center mt-12 overflow-hidden shadow-[inset_0_10px_30px_rgba(0,0,0,0.2)]" id="lista">
<div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E')] opacity-10 pointer-events-none mix-blend-overlay z-0">
</div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-full bg-gradient-to-b from-[var(--primary)]/10 to-transparent pointer-events-none z-0">
</div>
<div className="relative z-10 max-w-[800px] mx-auto px-4">
<h2 className="md:text-4xl text-3xl font-medium text-[var(--text)] tracking-tight mb-6">
          Quer ser avisado primeiro quando as inscrições abrirem?
        </h2>
<p className="text-base font-light text-[var(--text2)] leading-[1.8] mb-12 max-w-2xl mx-auto">
          O Strategic Planning Summit 2026 terá vagas limitadas. Quem entrar na lista de prioridade será avisado antes
          de qualquer divulgação pública, terá acesso a condições exclusivas de inscrição e fará parte de um grupo
          seleto de líderes que estarão juntos nessa edição.
        </p>
<div className="bg-white border border-gray-200 rounded-[24px] p-6 md:p-10 shadow-2xl relative text-left mx-auto">
<div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/10 blur-3xl rounded-full pointer-events-none">
</div>
<div className="mb-8 pb-6 border-b border-gray-100 flex items-center gap-3 relative z-10">
<div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
<span className="text-sm font-medium text-gray-900 uppercase tracking-wider">Lista de Prioridade SPS 26</span>
</div>
<div className="w-full min-h-[300px] relative z-10" id="hubspotFormContainer">


</div>
<p className="text-xs font-light text-gray-500 text-center mt-6 pt-6 border-t border-gray-100 relative z-10">
            Se não encontrar nosso e-mail, confira a caixa de spam ou 'Promoções'.
          </p>
</div>
</div>
</section>
</main>

<footer className="border-t border-[var(--border)] bg-[var(--surface)] pt-16 pb-16 px-4 relative z-10">
<div className="max-w-[1200px] mx-auto flex flex-col items-center text-center gap-8">
<a className="transition-opacity hover:opacity-80" href="https://blueprintt.co/" rel="noopener noreferrer" target="_blank">
<img alt="Blueprintt Logo" className="h-6 opacity-70" src="https://blueprintt.co/wp-content/uploads/2025/01/logo-footer-light.svg"/>
</a>
<p className="text-xs font-light text-[var(--muted)] max-w-3xl leading-[1.7]">
        Ao utilizar nossos serviços, você concorda com nossos Termos de Uso e com nossa Política de Privacidade. Seus
        dados são tratados com segurança e em conformidade com a LGPD (Lei nº 13.709/2018), exclusivamente para
        comunicação e melhoria da experiência. Não comercializamos dados pessoais.
      </p>
</div>
</footer>



    </>
  );
}
