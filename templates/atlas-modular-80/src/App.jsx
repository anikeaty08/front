import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
background: 'hsl(40, 30%, 97%)',
surface: 'hsl(0, 0%, 100%)',
foreground: 'hsl(0, 0%, 8%)',
muted: 'hsl(40, 15%, 94%)',
'muted-foreground': 'hsl(0, 0%, 40%)',
border: 'hsl(0, 0%, 88%)',
primary: 'hsl(0, 0%, 10%)',
'primary-foreground': 'hsl(0, 0%, 98%)',
accent: 'hsl(140, 20%, 28%)',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'fade-in': 'fadeIn 1s ease-out forwards',
'slide-up': 'slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // --- 1. CINEMATIC WEBGL-LIKE LIGHTING ENGINE ---
      const canvas = document.getElementById('ambient-canvas');
      const ctx = canvas.getContext('2d');

      let width, height;
      let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      let targetMouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      let time = 0;

      function resize() {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
      }

      // Layer Classes for Depth
      class Haze {
          constructor(x, y, size, speed) {
              this.x = x;
              this.y = y;
              this.size = size;
              this.speed = speed;
              this.angle = Math.random() * Math.PI * 2;
          }
          update() {
              this.angle += this.speed * 0.002;
              this.x += Math.cos(this.angle) * 0.2;
              this.y += Math.sin(this.angle) * 0.2;
          }
          draw() {
              const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
              gradient.addColorStop(0, 'hsla(40, 30%, 95%, 0.4)');
              gradient.addColorStop(1, 'hsla(40, 30%, 95%, 0)');
              ctx.fillStyle = gradient;
              ctx.fillRect(0, 0, width, height);
          }
      }

      class VolumetricBeam {
          constructor(index) {
              this.index = index;
              this.init();
          }
          init() {
              this.x = Math.random() * width;
              this.width = Math.random() * 150 + 50;
              this.angle = -Math.PI / 3.5 + (Math.random() * 0.2 - 0.1);
              this.speed = Math.random() * 0.05 + 0.02;
              this.opacity = 0;
              this.maxOpacity = Math.random() * 0.06 + 0.02;
              this.phase = Math.random() * Math.PI * 2;
          }
          update() {
              this.phase += this.speed;
              // Subtle parallax based on mouse
              const parallaxX = (mouse.x - width/2) * (this.index + 1) * 0.02;

              // Oscillate opacity
              this.currentOpacity = this.opacity + Math.sin(this.phase) * 0.01;
              if (this.opacity < this.maxOpacity) this.opacity += 0.0005;

              this.drawX = this.x + parallaxX;
          }
          draw() {
              ctx.save();
              ctx.translate(this.drawX, height + 100);
              ctx.rotate(this.angle);

              const length = height * 1.5;
              const grad = ctx.createLinearGradient(0, 0, 0, -length);
              grad.addColorStop(0, `hsla(40, 30%, 80%, 0)`);
              grad.addColorStop(0.3, `hsla(40, 30%, 70%, ${this.currentOpacity})`);
              grad.addColorStop(1, `hsla(40, 30%, 80%, 0)`);

              ctx.fillStyle = grad;
              ctx.fillRect(-this.width/2, -length, this.width, length);
              ctx.restore();
          }
      }

      class BloomLight {
          constructor() {
              this.x = width / 2;
              this.y = height / 2;
          }
          update() {
              // Slow lag follow
              this.x += (targetMouse.x - this.x) * 0.05;
              this.y += (targetMouse.y - this.y) * 0.05;
          }
          draw() {
              const grad = ctx.createRadialGradient(this.x, this.y, 10, this.x, this.y, 400);
              grad.addColorStop(0, 'hsla(40, 50%, 100%, 0.5)');
              grad.addColorStop(1, 'hsla(40, 50%, 100%, 0)');

              // Bloom blend mode
              ctx.globalCompositeOperation = 'screen';
              ctx.fillStyle = grad;
              ctx.fillRect(0, 0, width, height);
              ctx.globalCompositeOperation = 'source-over';
          }
      }

      const beams = Array.from({ length: 12 }, (_, i) => new VolumetricBeam(i));
      const hazes = [
          new Haze(200, 200, 800, 1),
          new Haze(width-200, height-200, 600, 1.5)
      ];
      const bloom = new BloomLight();

      function animate() {
          ctx.clearRect(0, 0, width, height);

          // Soft Blur Filter for the whole background layer
          ctx.filter = 'blur(40px)';
          hazes.forEach(h => { h.update(); h.draw(); });

          ctx.filter = 'blur(20px)'; // Sharper beams
          beams.forEach(b => { b.update(); b.draw(); });

          ctx.filter = 'blur(60px)'; // Very soft bloom
          bloom.update();
          bloom.draw();

          ctx.filter = 'none';
          requestAnimationFrame(animate);
      }

      window.addEventListener('resize', () => {
          resize();
          hazes[1].x = width - 200;
          hazes[1].y = height - 200;
      });

      window.addEventListener('mousemove', (e) => {
          targetMouse.x = e.clientX;
          targetMouse.y = e.clientY;
      });

      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          resize();
          animate();
      }

      // --- 2. HERO INTERACTIONS & ENTRANCE ---
      const heroMock = document.getElementById('hero-mock');
      const heroSection = document.getElementById('hub');
      const revealElements = document.querySelectorAll('.reveal-slide-up, .hero-rule');

      // Entrance Trigger
      window.addEventListener('load', () => {
          setTimeout(() => {
              revealElements.forEach(el => el.classList.add('active'));
          }, 100);
      });

      if(heroMock && heroSection) {
          heroSection.addEventListener('mousemove', (e) => {
              if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

              const rect = heroSection.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;

              const centerX = rect.width / 2;
              const centerY = rect.height / 2;

              // Cinematic tilt (very subtle)
              const rotateX = ((y - centerY) / centerY) * -1.5;
              const rotateY = ((x - centerX) / centerX) * 1.5;

              heroMock.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          });

          heroSection.addEventListener('mouseleave', () => {
               heroMock.style.transform = `perspective(2000px) rotateX(0deg) rotateY(0deg)`;
          });
      }

      // --- 3. STICKY PARALLAX & MOCKS ---
      const steps = document.querySelectorAll('.step-section');
      const mockBody = document.getElementById('mock-body');
      const mockTitle = document.getElementById('mock-title');
      const stickyContainer = document.getElementById('sticky-mock-container');

      const mockTemplates = {
          1: `<div class="animate-fade-in p-2">
                  <div class="h-32 bg-muted/20 rounded-xl mb-4 flex items-end p-4 gap-2 border border-dashed border-border/50">
                      <div class="flex-1 bg-accent/20 h-[40%] rounded-sm"></div>
                      <div class="flex-1 bg-accent/40 h-[70%] rounded-sm"></div>
                      <div class="flex-1 bg-accent/30 h-[50%] rounded-sm"></div>
                      <div class="flex-1 bg-accent h-[90%] rounded-sm shadow-lg shadow-accent/20"></div>
                      <div class="flex-1 bg-accent/40 h-[60%] rounded-sm"></div>
                  </div>
                  <div class="space-y-3">
                      <div class="flex justify-between items-center p-3 bg-white border border-border/40 rounded-lg shadow-sm">
                           <div class="w-24 h-2 bg-foreground/10 rounded"></div>
                           <div class="w-12 h-2 bg-foreground/10 rounded"></div>
                      </div>
                      <div class="flex justify-between items-center p-3 bg-white border border-border/40 rounded-lg shadow-sm">
                           <div class="w-16 h-2 bg-foreground/10 rounded"></div>
                           <div class="w-8 h-2 bg-accent/20 rounded"></div>
                      </div>
                  </div>
              </div>`,
          2: `<div class="animate-fade-in p-2">
                  <div class="grid grid-cols-2 gap-3 mb-4">
                      <div class="bg-white border border-border/50 p-4 rounded-xl shadow-sm text-center">
                          <div class="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Total</div>
                          <div class="text-2xl font-medium text-foreground">142</div>
                      </div>
                      <div class="bg-white border border-red-100 p-4 rounded-xl shadow-sm text-center relative overflow-hidden">
                          <div class="absolute inset-0 bg-red-50/50"></div>
                           <div class="text-[10px] text-red-500 uppercase tracking-widest mb-1 relative">Alert</div>
                          <div class="text-2xl font-medium text-red-500 relative">3</div>
                      </div>
                  </div>
                  <div class="space-y-2">
                       <div class="p-2.5 bg-white border border-border/40 rounded-lg flex justify-between items-center">
                          <span class="text-xs font-medium text-foreground">Coffee Beans</span>
                          <div class="w-16 h-1.5 bg-muted rounded-full overflow-hidden"><div class="w-[20%] h-full bg-red-400"></div></div>
                      </div>
                  </div>
              </div>`,
          3: `<div class="animate-fade-in grid grid-cols-2 gap-3 p-2">
                  <div class="aspect-square bg-muted/20 rounded-xl border border-border/40"></div>
                  <div class="aspect-square bg-muted/20 rounded-xl border border-border/40"></div>
                  <div class="aspect-square bg-muted/20 rounded-xl border border-border/40"></div>
                  <div class="aspect-square bg-muted/20 rounded-xl border border-border/40"></div>
              </div>`,
          4: `<div class="animate-fade-in space-y-4 p-2">
                  <div class="p-4 bg-white border border-border/40 rounded-xl shadow-sm">
                      <div class="flex items-center gap-3 mb-3">
                           <div class="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent"><iconify-icon icon="solar:running-linear"></iconify-icon></div>
                           <span class="text-sm font-medium">Morning Run</span>
                      </div>
                      <div class="w-full bg-muted h-1.5 rounded-full overflow-hidden">
                          <div class="w-[70%] bg-accent h-1.5 rounded-full"></div>
                      </div>
                  </div>
              </div>`,
          5: `<div class="animate-fade-in space-y-3 p-2">
                   <div class="p-3 bg-white border border-border/40 rounded-xl flex gap-3 items-center">
                      <div class="w-10 h-10 bg-muted/30 rounded-lg"></div>
                      <div class="flex-1 space-y-1.5">
                          <div class="w-24 h-2 bg-foreground/10 rounded"></div>
                          <div class="w-12 h-1.5 bg-muted-foreground/10 rounded"></div>
                      </div>
                   </div>
                   <div class="text-[10px] text-center text-muted-foreground pt-2 font-medium uppercase tracking-widest">Impacto no Fluxo: <span class="text-red-500">-5%</span></div>
              </div>`
      };

      if(mockBody) mockBody.innerHTML = mockTemplates[1];

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  const step = entry.target.dataset.step;

                  // Enhanced Transition
                  if(stickyContainer) {
                      stickyContainer.style.transform = 'scale(0.98)';
                      stickyContainer.style.opacity = '0.9';
                      setTimeout(() => {
                           if(mockBody) mockBody.innerHTML = mockTemplates[step];
                           const titles = ["Atlas Finance", "Atlas Pantry", "Atlas Recipes", "Atlas Fitness", "Atlas Wishlist"];
                           if(mockTitle) mockTitle.innerText = titles[step-1];
                           stickyContainer.style.transform = 'scale(1)';
                           stickyContainer.style.opacity = '1';
                      }, 150);
                  }

                  steps.forEach(s => s.classList.remove('opacity-100'));
                  entry.target.classList.add('opacity-100');
              }
          });
      }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

      steps.forEach(step => observer.observe(step));

      // --- 4. GENERAL SCROLL REVEALS ---
      const scrollObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  entry.target.classList.remove('opacity-0', 'translate-y-8');
                  entry.target.classList.add('active');
              }
          });
      }, { threshold: 0.1 });

      document.querySelectorAll('.fade-in-section, .reveal-text').forEach(el => scrollObserver.observe(el));

      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 50) {
              navbar.classList.add('bg-background/80', 'backdrop-blur-md', 'border-border');
              navbar.classList.remove('border-transparent');
          } else {
              navbar.classList.remove('bg-background/80', 'backdrop-blur-md', 'border-border');
              navbar.classList.add('border-transparent');
          }
      });

      // --- 5. COUNTERS ---
      const counters = document.querySelectorAll('.counter-anim');
      const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if(entry.isIntersecting) {
                  const target = +entry.target.getAttribute('data-target');
                  const duration = 2000;
                  const increment = target / (duration / 16);
                  let current = 0;
                  const updateCounter = () => {
                      current += increment;
                      if(current < target) {
                          entry.target.innerText = Math.ceil(current).toLocaleString('pt-BR');
                          requestAnimationFrame(updateCounter);
                      } else {
                          entry.target.innerText = target.toLocaleString('pt-BR');
                      }
                  };
                  updateCounter();
                  counterObserver.unobserve(entry.target);
              }
          });
      }, { threshold: 0.5 });
      counters.forEach(c => counterObserver.observe(c));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas id="ambient-canvas"></canvas>

<div className="grain-overlay"></div>

<header className="fixed w-full top-0 z-50 transition-all duration-500 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tight text-foreground flex items-center gap-2 group" href="#">
<span className="w-2.5 h-2.5 bg-foreground rounded-full group-hover:bg-accent transition-colors duration-300"></span>
          Atlas
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
<a className="hover:text-foreground transition-colors" href="#hub">Hub</a>
<a className="hover:text-foreground transition-colors" href="#modules">
            Módulos
          </a>
<a className="hover:text-foreground transition-colors" href="#integrations">
            Integrações
          </a>
<a className="hover:text-foreground transition-colors" href="#manifesto">
            Manifesto
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-primary rounded-full hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md" href="#">
            Abrir Atlas Finance
          </a>

<button className="md:hidden text-foreground">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>

<section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden perspective-container" id="hub">
<div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-20 items-center">

<div className="space-y-10 relative z-10">

<div className="mask-container">
<div className="reveal-slide-up text-accent font-medium text-xs tracking-widest uppercase">
              Atlas Platform
            </div>
</div>

<div className="space-y-1">
<div className="mask-container">
<h1 className="reveal-slide-up text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-[0.9] delay-100">
                Atlas
              </h1>
</div>

<div className="h-px bg-foreground/10 hero-rule delay-300"></div>
<div className="mask-container">
<h1 className="reveal-slide-up text-6xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-foreground leading-[0.9] delay-200">
                Estruture sua
                <br/>
                vida com clareza.
              </h1>
</div>
</div>

<div className="mask-container max-w-lg">
<p className="reveal-slide-up text-lg md:text-xl text-muted-foreground font-normal leading-relaxed text-balance delay-300">
              Um ecossistema modular — finanças, consumo, saúde e planejamento —
              conectado por contexto.
            </p>
</div>

<div className="mask-container pt-2">
<div className="reveal-slide-up flex flex-col sm:flex-row gap-5 delay-500">
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-black/5" href="#">
                Abrir Atlas Finance
              </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-foreground bg-white border border-border/80 rounded-full hover:bg-gray-50 transition-colors shadow-sm" href="#how-it-works">
                Como funciona
              </a>
</div>
</div>

<div className="mask-container">
<p className="reveal-slide-up text-xs text-muted-foreground/60 font-medium tracking-wide delay-700 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent/60"></span>
              Minimalista. Seguro. Assistido por inteligência.
            </p>
</div>
</div>

<div className="relative lg:h-[700px] w-full flex items-center justify-center">
<div className="hero-mock-wrapper w-full max-w-[540px] aspect-[16/11] bg-surface rounded-2xl shadow-2xl shadow-black/10 border border-white/60 relative overflow-hidden group" id="hero-mock">

<div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent z-30 pointer-events-none opacity-50"></div>

<div className="flex h-full w-full bg-surface/50 backdrop-blur-sm">

<aside className="w-16 border-r border-border/40 flex flex-col items-center py-6 gap-6 bg-background/50">
<div className="w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center mb-4">
<iconify-icon icon="solar:layers-minimalistic-bold" width="18"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-muted-foreground flex items-center justify-center hover:bg-muted/50 transition-colors">
<iconify-icon icon="solar:fridge-linear" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-lg text-muted-foreground flex items-center justify-center hover:bg-muted/50 transition-colors">
<iconify-icon icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
</div>
</aside>

<div className="flex-1 flex flex-col">

<header className="h-14 border-b border-border/40 flex items-center justify-between px-6 bg-white/40">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-foreground">
                      Visão Geral
                    </span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-accent/10 text-accent">
                      LIVE
                    </span>
</div>
<div className="w-6 h-6 rounded-full bg-muted border border-border"></div>
</header>

<div className="p-6 space-y-6 overflow-hidden">

<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white border border-border/50 shadow-sm">
<p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-1">
                        Saldo Total
                      </p>
<div className="text-2xl font-medium tracking-tight text-foreground counter-anim" data-target="24500">
                        0
                      </div>
</div>
<div className="p-4 rounded-xl bg-white border border-border/50 shadow-sm flex flex-col justify-between">
<p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        Fluxo Mensal
                      </p>
<div className="flex items-center gap-1 text-accent text-sm font-medium">
<iconify-icon icon="solar:trending-up-linear"></iconify-icon>
                        +18.2%
                      </div>
</div>
</div>

<div className="h-40 w-full bg-white border border-border/50 rounded-xl p-4 flex items-end justify-between gap-1 relative overflow-hidden">

<div className="w-full h-full absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"></div>
<div className="w-1/12 bg-muted rounded-t-sm h-[30%]"></div>
<div className="w-1/12 bg-muted rounded-t-sm h-[45%]"></div>
<div className="w-1/12 bg-muted rounded-t-sm h-[35%]"></div>
<div className="w-1/12 bg-accent/20 rounded-t-sm h-[60%]"></div>
<div className="w-1/12 bg-accent/30 rounded-t-sm h-[50%]"></div>
<div className="w-1/12 bg-accent/40 rounded-t-sm h-[75%]"></div>
<div className="w-1/12 bg-accent/60 rounded-t-sm h-[65%]"></div>
<div className="w-1/12 bg-accent rounded-t-sm h-[85%] shadow-lg shadow-accent/20 relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        R$ 4.2k
                      </div>
</div>
</div>

<div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 px-4 py-2.5 bg-foreground text-white rounded-full shadow-xl shadow-black/10 animate-fade-in delay-1000">
<iconify-icon className="text-accent" icon="solar:bell-bing-linear"></iconify-icon>
<span className="text-xs font-medium">
                      Fatura do cartão fechada
                    </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-border/40 bg-white/30 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 text-center space-y-8">
<p className="text-lg text-muted-foreground font-normal">
          Feito para quem quer estrutura — sem ruído.
        </p>
<div className="flex justify-center gap-12 opacity-40 grayscale mix-blend-multiply flex-wrap">

<div className="h-8 w-24 bg-current rounded opacity-20"></div>
<div className="h-8 w-24 bg-current rounded opacity-20"></div>
<div className="h-8 w-24 bg-current rounded opacity-20"></div>
<div className="h-8 w-24 bg-current rounded opacity-20"></div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-border/60 shadow-sm mt-8">
<div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
<span className="text-sm font-medium text-foreground counter-anim" data-target="12403">
            0
          </span>
<span className="text-sm text-muted-foreground">
            pessoas aguardando acesso
          </span>
</div>
</div>
</section>

<section className="py-32" id="manifesto">
<div className="max-w-7xl mx-auto px-6 space-y-24">
<div className="max-w-3xl space-y-6 fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
            Estabilidade não é sorte.
            <br/>
<span className="text-muted-foreground">É estrutura.</span>
</h2>
<p className="text-xl text-muted-foreground leading-relaxed">
            Atlas é uma base comum para módulos independentes. Cada ferramenta
            faz uma coisa muito bem — e se conecta ao resto do ecossistema
            quando você quiser.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-surface border border-border/60 hover-lift fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-100">
<div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground mb-6">
<iconify-icon icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Clareza</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Visualize o todo sem perder os detalhes. Dados transformados em
              informação útil, não em tabelas infinitas.
            </p>
</div>

<div className="p-8 rounded-2xl bg-surface border border-border/60 hover-lift fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-200">
<div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground mb-6">
<iconify-icon icon="solar:tuning-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Controle</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Defina suas próprias regras. O sistema se adapta ao seu fluxo,
              oferecendo previsibilidade financeira e operacional.
            </p>
</div>

<div className="p-8 rounded-2xl bg-surface border border-border/60 hover-lift fade-in-section opacity-0 translate-y-8 transition-all duration-1000 delay-300">
<div className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-foreground mb-6">
<iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3">Consistência</h3>
<p className="text-muted-foreground text-sm leading-relaxed">
              Hábitos se formam na repetição. Atlas remove o atrito para que
              você mantenha o ritmo dia após dia.
            </p>
</div>
</div>
</div>
</section>

<section className="relative" id="modules">
<div className="max-w-7xl mx-auto px-6 relative flex flex-col lg:flex-row">

<div className="hidden lg:flex lg:w-1/2 h-screen sticky top-0 items-center justify-center p-8 sticky-wrapper">
<div className="relative w-full max-w-lg aspect-[4/5] bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-500" id="sticky-mock-container">

<div className="h-14 border-b border-border flex items-center px-6 justify-between bg-background/50 backdrop-blur">
<span className="font-medium text-sm text-foreground" id="mock-title">
                Atlas Finance
              </span>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-red-400"></span>
<span className="w-2 h-2 rounded-full bg-amber-400"></span>
<span className="w-2 h-2 rounded-full bg-green-400"></span>
</div>
</div>

<div className="p-6 h-full relative" id="mock-body">

</div>

<div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent pointer-events-none opacity-50"></div>
</div>
</div>

<div className="w-full lg:w-1/2 py-24 lg:py-0">

<div className="step-section min-h-[90vh] flex flex-col justify-center px-6 lg:pl-20 border-l border-border/40" data-step="1">
<div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider text-accent uppercase mb-2">
              Ativo
            </span>
<h3 className="text-4xl font-medium text-foreground mb-4">
              Atlas Finance
            </h3>
<p className="text-xl text-muted-foreground mb-8 text-balance">
              Controle estrutural do seu dinheiro com visão de futuro.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-muted-foreground">
                  Projeção de caixa de 7, 15 e 30 dias
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-muted-foreground">
                  Ciclo real de cartão de crédito + fatura prevista
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-accent" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-muted-foreground">
                  Metas e alertas inteligentes
                </span>
</li>
</ul>
<div className="pt-6 border-t border-border">
<p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Integra com
              </p>
<div className="flex gap-3">
<span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium">
                  Pantry
                </span>
<span className="px-3 py-1 bg-white border border-border rounded-full text-xs font-medium">
                  Wishlist
                </span>
</div>
</div>

<div className="lg:hidden mt-8 w-full aspect-video bg-surface border border-border rounded-xl shadow-lg"></div>
</div>

<div className="step-section min-h-[90vh] flex flex-col justify-center px-6 lg:pl-20 border-l border-border/40" data-step="2">
<div className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
<iconify-icon icon="solar:fridge-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Em Breve
            </span>
<h3 className="text-4xl font-medium text-foreground mb-4">
              Atlas Pantry
            </h3>
<p className="text-xl text-muted-foreground mb-8 text-balance">
              Despensa e consumo sob controle. Nunca compre o que já tem.
            </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-muted-foreground" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-muted-foreground">Estoque em tempo real</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 text-muted-foreground" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-muted-foreground">
                  Lista de compras automática baseada no consumo
                </span>
</li>
</ul>
</div>

<div className="step-section min-h-[90vh] flex flex-col justify-center px-6 lg:pl-20 border-l border-border/40" data-step="3">
<div className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
<iconify-icon icon="solar:chef-hat-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Conceito
            </span>
<h3 className="text-4xl font-medium text-foreground mb-4">
              Atlas Recipes
            </h3>
<p className="text-xl text-muted-foreground mb-8 text-balance">
              Receitas conectadas ao que você já tem na despensa.
            </p>
</div>

<div className="step-section min-h-[90vh] flex flex-col justify-center px-6 lg:pl-20 border-l border-border/40" data-step="4">
<div className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
<iconify-icon icon="solar:dumbbell-large-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Conceito
            </span>
<h3 className="text-4xl font-medium text-foreground mb-4">
              Atlas Fitness
            </h3>
<p className="text-xl text-muted-foreground mb-8 text-balance">
              Consistência aplicada ao corpo. Hábitos, treinos e metas.
            </p>
</div>

<div className="step-section min-h-[90vh] flex flex-col justify-center px-6 lg:pl-20 border-l border-border/40" data-step="5">
<div className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center mb-6">
<iconify-icon icon="solar:star-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase mb-2">
              Conceito
            </span>
<h3 className="text-4xl font-medium text-foreground mb-4">
              Atlas Wishlist
            </h3>
<p className="text-xl text-muted-foreground mb-8 text-balance">
              Desejos com estrutura. Planeje compras sem comprometer o fluxo.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="integrations">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative h-[400px] w-full flex items-center justify-center" id="diagram-container">

<svg className="w-full h-full max-w-md mx-auto" fill="none" height="100%" viewbox="0 0 400 400" width="100%" xmlns="http://www.w3.org/2000/svg">

<circle className="fill-surface" cx="200" cy="200" r="40" stroke="#E5E5E5" strokeWidth="1"></circle>
<iconify-icon className="text-foreground" icon="solar:wallet-linear" width="24" x="188" y="188"></iconify-icon>


<g className="satellite group" style={{transformOrigin: '200px 200px', transform: 'translateY(-10px)'}}>
<path className="line-path" d="M200 160 L200 100" stroke="#E5E5E5" strokeWidth="1"></path>
<circle className="fill-surface" cx="200" cy="80" r="25" stroke="#E5E5E5"></circle>
<iconify-icon className="text-muted-foreground" icon="solar:fridge-linear" width="20" x="190" y="70"></iconify-icon>
</g>

<g className="satellite group" style={{transformOrigin: '200px 200px', transform: 'translateX(10px)'}}>
<path className="line-path" d="M240 200 L300 200" stroke="#E5E5E5" strokeWidth="1"></path>
<circle className="fill-surface" cx="320" cy="200" r="25" stroke="#E5E5E5"></circle>
<iconify-icon className="text-muted-foreground" icon="solar:star-linear" width="20" x="310" y="190"></iconify-icon>
</g>

<g className="satellite group" style={{transformOrigin: '200px 200px', transform: 'translateX(-10px)'}}>
<path className="line-path" d="M160 200 L100 200" stroke="#E5E5E5" strokeWidth="1"></path>
<circle className="fill-surface" cx="80" cy="200" r="25" stroke="#E5E5E5"></circle>
<iconify-icon className="text-muted-foreground" icon="solar:dumbbell-large-linear" width="20" x="70" y="190"></iconify-icon>
</g>

<g className="satellite group" style={{transformOrigin: '200px 200px', transform: 'translateY(10px)'}}>
<path className="line-path" d="M200 240 L200 300" stroke="#E5E5E5" strokeWidth="1"></path>
<circle className="fill-surface" cx="200" cy="320" r="25" stroke="#E5E5E5"></circle>
<iconify-icon className="text-muted-foreground" icon="solar:chef-hat-linear" width="20" x="190" y="310"></iconify-icon>
</g>
</svg>
</div>

<div className="space-y-8 fade-in-section opacity-0 translate-y-8 transition-all duration-1000">
<h2 className="text-3xl font-medium tracking-tight">
            Conectado.
            <br/>
<span className="text-muted-foreground">
              Mas só quando faz sentido.
            </span>
</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="w-px h-auto bg-gradient-to-b from-accent to-transparent"></div>
<div>
<h4 className="font-medium text-foreground">Finance + Pantry</h4>
<p className="text-sm text-muted-foreground mt-1">
                  O consumo da despensa gera previsão de gastos no Finance.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-px h-auto bg-border"></div>
<div>
<h4 className="font-medium text-foreground">Pantry + Recipes</h4>
<p className="text-sm text-muted-foreground mt-1">
                  Sugestões baseadas apenas no que você já tem em casa.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-px h-auto bg-border"></div>
<div>
<h4 className="font-medium text-foreground">Wishlist + Finance</h4>
<p className="text-sm text-muted-foreground mt-1">
                  Veja o impacto de um desejo no seu fluxo de caixa futuro antes
                  de comprar.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-border/40" id="how-it-works">
<div className="max-w-4xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Como funciona</h2>
<p className="text-muted-foreground">Simples, direto e produtivo.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-center">
<div className="p-6">
<div className="text-6xl font-medium text-muted/50 mb-4 tracking-tighter">
            01
          </div>
<h3 className="text-lg font-medium text-foreground mb-2">
            Escolha módulos
          </h3>
<p className="text-sm text-muted-foreground">
            Comece apenas com o que precisa hoje.
          </p>
</div>
<div className="p-6">
<div className="text-6xl font-medium text-muted/50 mb-4 tracking-tighter">
            02
          </div>
<h3 className="text-lg font-medium text-foreground mb-2">
            Conecte dados
          </h3>
<p className="text-sm text-muted-foreground">
            Importe cartões ou inventário em minutos.
          </p>
</div>
<div className="p-6">
<div className="text-6xl font-medium text-muted/50 mb-4 tracking-tighter">
            03
          </div>
<h3 className="text-lg font-medium text-foreground mb-2">
            Visão unificada
          </h3>
<p className="text-sm text-muted-foreground">
            O dashboard central organiza sua vida.
          </p>
</div>
</div>
</section>

<section className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[800px] h-[800px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
</div>
<div className="relative z-10 max-w-2xl space-y-10">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-foreground leading-tight">
          Comece com um módulo.
          <br/>
<span className="text-muted-foreground">
            Expanda quando fizer sentido.
          </span>
</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-4 bg-primary text-white text-lg font-medium rounded-full hover:scale-105 transition-transform duration-300 shadow-xl shadow-black/10" href="#">
            Abrir Atlas Finance
          </a>
<a className="px-8 py-4 bg-white text-foreground border border-border text-lg font-medium rounded-full hover:bg-gray-50 transition-colors" href="#modules">
            Ver todos os módulos
          </a>
</div>
</div>
</section>

<footer className="border-t border-border bg-white pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div>
<h5 className="font-medium text-foreground mb-4">Atlas</h5>
<ul className="space-y-3 text-sm text-muted-foreground">
<li><a className="hover:text-foreground" href="#">Sobre</a></li>
<li><a className="hover:text-foreground" href="#">Manifesto</a></li>
<li><a className="hover:text-foreground" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-foreground mb-4">Produtos</h5>
<ul className="space-y-3 text-sm text-muted-foreground">
<li><a className="hover:text-foreground" href="#">Finance</a></li>
<li><a className="hover:text-foreground" href="#">Pantry</a></li>
<li><a className="hover:text-foreground" href="#">Roadmap</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-foreground mb-4">Legal</h5>
<ul className="space-y-3 text-sm text-muted-foreground">
<li><a className="hover:text-foreground" href="#">Privacidade</a></li>
<li><a className="hover:text-foreground" href="#">Termos</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-foreground mb-4">Contato</h5>
<ul className="space-y-3 text-sm text-muted-foreground">
<li><a className="hover:text-foreground" href="#">Twitter / X</a></li>
<li><a className="hover:text-foreground" href="#">Instagram</a></li>
<li><a className="hover:text-foreground" href="#">Suporte</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-xs text-muted-foreground">
<p>© 2024 Atlas Ecosystem Inc.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span>All systems normal</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
