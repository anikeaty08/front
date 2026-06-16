import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        (function() {
          const menuBtn = document.getElementById('mobileMenuBtn');
          const menu = document.getElementById('mobileMenu');
          const menuPanel = document.getElementById('mobileMenuPanel');
          const closeBtn = document.getElementById('mobileMenuClose');
          const overlay = document.getElementById('mobileMenuOverlay');
          const menuLinks = menu.querySelectorAll('nav a');

          function openMenu() {
            menu.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            setTimeout(() => {
              menuPanel.classList.remove('translate-x-full');
              overlay.classList.remove('opacity-0');
            }, 10);
          }

          function closeMenu() {
            menuPanel.classList.add('translate-x-full');
            overlay.classList.add('opacity-0');
            setTimeout(() => {
              menu.classList.add('hidden');
              document.body.style.overflow = '';
            }, 300);
          }

          menuBtn.addEventListener('click', openMenu);
          closeBtn.addEventListener('click', closeMenu);
          overlay.addEventListener('click', closeMenu);

          menuLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
          });
        })();
      


          (function() {
            const bullets = document.querySelectorAll('#bulletList button[data-index]');
            const cards = [
              document.getElementById('card-0'),
              document.getElementById('card-1'),
              document.getElementById('card-2')
            ];
            let currentIndex = 0;

            const slides = [
              { bullet: 'Real‑time collaboration', accent: 'emerald' },
              { bullet: 'Threaded conversations', accent: 'amber' },
              { bullet: 'Quick actions', accent: 'violet' }
            ];

            const accentColors = {
              'emerald': 'bg-emerald-400',
              'amber': 'bg-amber-400',
              'violet': 'bg-violet-400'
            };

            function renderBullets() {
              const bulletList = document.getElementById('bulletList');
              bulletList.innerHTML = '';

              slides.forEach((slide, index) => {
                const isActive = index === currentIndex;
                const button = document.createElement('button');
                button.type = 'button';
                button.setAttribute('data-index', index);
                button.className = 'group w-full flex items-center gap-3 sm:gap-4';

                const bar = document.createElement('span');
                bar.className = `h-6 w-1 rounded-full transition-colors ${isActive ? accentColors[slide.accent] : 'bg-slate-700'}`;

                const text = document.createElement('span');
                text.className = `text-sm sm:text-base font-medium ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`;
                text.textContent = slide.bullet;

                button.appendChild(bar);
                button.appendChild(text);
                button.addEventListener('click', () => showCard(index));
                bulletList.appendChild(button);
              });
            }

            function showCard(index) {
              currentIndex = index;

              cards.forEach((card, i) => {
                if (i === index) {
                  card.style.opacity = '1';
                  card.style.pointerEvents = 'auto';
                } else {
                  card.style.opacity = '0';
                  card.style.pointerEvents = 'none';
                }
              });

              renderBullets();
            }

            renderBullets();
            showCard(0);
          })();
        


        (function() {
            const container = document.getElementById("subtle-bg-grid");
            if (!container) return;

            const grid = 12, spacing = 80, size = 3;
            const offset = -((spacing * (grid - 1)) / 2);
            let cells = [];

            for(let y = 0; y < grid; y++) {
              for(let x = 0; x < grid; x++) {
                const cell = document.createElement('div');
                cell.className = 'absolute rounded-sm transition-all duration-[2000ms] ease-in-out will-change-[opacity,background-color]';
                cell.style.width = size + 'px';
                cell.style.height = size + 'px';
                cell.style.backgroundColor = 'rgba(132, 204, 22, 0.15)';
                cell.style.opacity = '0.2';
                cell.style.border = '1px solid rgba(132, 204, 22, 0.08)';

                const px = offset + x * spacing, py = offset + y * spacing;
                cell.style.left = `calc(50% + ${px}px)`;
                cell.style.top = `calc(50% + ${py}px)`;
                container.appendChild(cell);
                cells.push(cell);
              }
            }

            function animateSquares() {
              cells.forEach(cell => {
                cell.style.backgroundColor = 'rgba(132, 204, 22, 0.15)';
                cell.style.opacity = '0.2';
              });

              const activeCount = Math.floor(cells.length * 0.15);
              const indices = Array.from(cells.keys());
              for(let i = 0; i < activeCount; i++) {
                const idx = indices.splice(Math.floor(Math.random() * indices.length), 1)[0];
                const cell = cells[idx];
                cell.style.backgroundColor = 'rgba(132, 204, 22, 0.3)';
                cell.style.opacity = '0.4';
              }
            }

            animateSquares();
            setInterval(animateSquares, 3000);
          })();
      


      window.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          lucide.createIcons();
        }
      });
    


      (function () {
        const section = document.querySelector('.quoteRevealSection');
        const target = section ? section.querySelector('.quoteReveal') : null;
        const words = section ? section.querySelectorAll('.quote-word') : [];

        if (!section || !target || words.length === 0) return;

        words.forEach(word => {
          word.style.color = 'rgb(115 115 115)';
        });

        function updateWordReveal() {
          const rect = target.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;
          const viewportCenter = vh / 2;

          const elementCenter = rect.top + rect.height / 2;
          const distanceFromCenter = Math.abs(elementCenter - viewportCenter);
          const maxDistance = vh / 2;

          const centerRatio = Math.max(0, Math.min(1, 1 - (distanceFromCenter / maxDistance)));

          const totalWords = words.length;
          const wordsToReveal = Math.floor(centerRatio * totalWords);

          words.forEach((word, index) => {
            if (index < wordsToReveal) {
              word.style.color = 'rgb(255 255 255)';
            } else {
              word.style.color = 'rgb(115 115 115)';
            }
          });
        }

        if (typeof IntersectionObserver !== 'undefined') {
          const io = new IntersectionObserver(updateWordReveal, {
            threshold: Array.from({ length: 101 }, (_, i) => i / 100)
          });
          io.observe(target);
        }

        window.addEventListener('scroll', updateWordReveal, { passive: true });
        window.addEventListener('resize', updateWordReveal);
        updateWordReveal();
      })();
    


      (function () {
        const style = document.createElement("style");
        style.textContent = `
          .animate-on-scroll { animation-play-state: paused !important; }
          .animate-on-scroll.animate { animation-play-state: running !important; }
        `;
        document.head.appendChild(style);

        const once = true;

        if (!window.__inViewIO) {
          window.__inViewIO = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                if (once) window.__inViewIO.unobserve(entry.target);
              }
            });
          }, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
        }

        window.initInViewAnimations = function (selector = ".animate-on-scroll") {
          document.querySelectorAll(selector).forEach((el) => {
            window.__inViewIO.observe(el);
          });
        };

        document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container top-0 w-full h-[1000px] mix-blend-screen absolute" data-alpha-mask="50" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 50%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://cdn.midjourney.com/video/79a9fcec-3aa3-4cb2-8b18-61a367c2f586/3.mp4"></video></div>

<div className="fixed -z-20 top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
<div className="absolute -top-24 right-[-10%] h-96 w-96 rounded-full bg-gradient-to-tr from-lime-500/20 to-emerald-500/20 blur-3xl"></div>
<div className="bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 w-96 h-96 rounded-full absolute bottom-0 left-[-10%] blur-3xl"></div>
</div>

<header className="fixed z-30 w-full top-0 left-0">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex pt-5 pb-5 items-center justify-between [animation:fadeSlideIn_0.5s_ease-out_0.1s_both]">
<a className="bg-center text-2xl font-semibold tracking-tighter w-[140px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cc3fd60-0bf0-41ad-a08b-be684f266e22_1600w.png)] bg-cover" href="#"></a>
<nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
<a className="hover:text-white transition" href="#features">Features</a>
<a className="hover:text-white transition" href="#how-it-works">
              How it works
            </a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 transition">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m10 17 5-5-5-5"></path>
<path d="M15 12H3"></path>
<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
</svg>
              Sign in
            </button>
<button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition backdrop-blur-sm" id="mobileMenuBtn">
<svg className="w-5 h-5 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="3" x2="21" y1="12" y2="12"></line>
<line x1="3" x2="21" y1="6" y2="6"></line>
<line x1="3" x2="21" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="mobileMenu">
<div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300" id="mobileMenuOverlay"></div>
<div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform duration-300 translate-x-full" id="mobileMenuPanel">
<div className="flex items-center justify-between p-4 border-b border-white/10">
<span className="text-sm font-medium text-slate-300">Menu</span>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition" id="mobileMenuClose">
<svg className="w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="18" x2="6" y1="6" y2="18"></line>
<line x1="6" x2="18" y1="6" y2="18"></line>
</svg>
</button>
</div>
<nav className="p-6 space-y-1">
<a className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition" href="#features">
              Features
            </a>
<a className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition" href="#how-it-works">
              How it works
            </a>
<a className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition" href="#pricing">
              Pricing
            </a>
<div className="pt-4 border-t border-white/10 mt-4">
<a className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-white bg-lime-600 hover:bg-lime-500 rounded-lg transition" href="#">
<svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m10 17 5-5-5-5"></path>
<path d="M15 12H3"></path>
<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
</svg>
                Sign in
              </a>
</div>
</nav>
</div>
</div>


<div className="gradient-blur">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
<style className="">
        .gradient-blur {
          position: fixed;
          z-index: -10;
          inset: 0 0 auto 0;
          height: 15%;
          pointer-events: none;
        }
        .gradient-blur>div,
        .gradient-blur::before,
        .gradient-blur::after {
          position: absolute;
          inset: 0;
        }
        .gradient-blur::before {
          content: "";
          z-index: 1;
          backdrop-filter: blur(0.5px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%);
        }
        .gradient-blur>div:nth-of-type(1) {
          z-index: 2;
          backdrop-filter: blur(1px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%);
        }
        .gradient-blur>div:nth-of-type(2) {
          z-index: 3;
          backdrop-filter: blur(2px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%);
        }
        .gradient-blur>div:nth-of-type(3) {
          z-index: 4;
          backdrop-filter: blur(4px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%);
        }
        .gradient-blur>div:nth-of-type(4) {
          z-index: 5;
          backdrop-filter: blur(8px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%);
        }
        .gradient-blur>div:nth-of-type(5) {
          z-index: 6;
          backdrop-filter: blur(16px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%);
        }
        .gradient-blur>div:nth-of-type(6) {
          z-index: 7;
          backdrop-filter: blur(32px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%);
        }
        .gradient-blur::after {
          content: "";
          z-index: 8;
          backdrop-filter: blur(64px);
          mask: linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%);
        }
      </style>
</header>

<section className="overflow-hidden sm:px-6 sm:pt-16 lg:px-8 lg:pt-20 lg:mt-40 lg:pb-20 max-w-7xl mt-20 mr-auto ml-auto pt-16 pr-4 pb-20 pl-4 relative">
<div className="grid gap-8 lg:gap-12 lg:grid-cols-12 gap-x-8 gap-y-8 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.2s_both] flex items-center gap-3">
<div className="border-gradient">
<div className="gradient-border-inner px-4 py-2">
<span className="text-xs font-medium tracking-wider text-lime-300 uppercase flex items-center gap-2">
                  AI-Powered Email
                  <svg className="w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</span>
</div>
</div>
<div className="h-px bg-gradient-to-r from-lime-300/50 to-transparent flex-1"></div>
</div>
<h1 className="[animation:fadeSlideIn_0.5s_ease-out_0.3s_both] sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] text-4xl font-semibold tracking-tight">
            Email that understands you through
            <span className="bg-gradient-to-r from-lime-300 to-emerald-300 bg-clip-text text-transparent">
              AI intelligence
            </span>
</h1>
</div>
<div className="lg:col-span-5 space-y-6 lg:space-y-8">
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.4s_both] hover:bg-white/10 transition-all duration-300 bg-white/5 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
              Transform your inbox into a productivity powerhouse. Sendo uses
              advanced AI to prioritize, summarize, and draft responses—giving
              you hours back every week.
            </p>
<details className="text-slate-400 text-sm leading-relaxed">
<summary className="cursor-pointer font-medium mb-2 select-none hover:text-lime-300 transition-colors">
                Read more details
              </summary>
<p className="mt-2">
                Our AI learns your communication style, identifies urgent
                messages, filters noise, and helps you maintain inbox zero
                effortlessly.
              </p>
</details>
</div>
<div className="[animation:fadeSlideIn_0.5s_ease-out_0.5s_both] flex flex-col sm:flex-row gap-4">
<button className="button" type="button">
<div className="points_wrapper">
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
<i className="point"></i>
</div>
<span className="inner">
                Get Started Free
                <svg className="icon" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</span>
<style>
                .button {
                  cursor: pointer;
                  position: relative;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  overflow: hidden;
                  transition: all 0.25s ease;
                  background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(132, 204, 22, 0.8) 0%, rgba(132, 204, 22, 0) 100%), linear-gradient(0deg, #65a30d, #65a30d);
                  border-radius: 0.75rem;
                  border: none;
                  outline: none;
                  padding: 12px 18px;
                  min-height: 48px;
                  min-width: 102px;
                }
                .button::before, .button::after {
                  content: "";
                  position: absolute;
                  transition: all 0.5s ease-in-out;
                  z-index: 0;
                }
                .button::before {
                  inset: 1px;
                  background: linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%);
                  border-radius: calc(0.75rem - 1px);
                }
                .button::after {
                  inset: 2px;
                  background: radial-gradient(65.28% 65.28% at 50% 100%, rgba(132, 204, 22, 0.8) 0%, rgba(132, 204, 22, 0) 100%), linear-gradient(0deg, #65a30d, #65a30d);
                  border-radius: calc(0.75rem - 2px);
                }
                .button:active { transform: scale(0.95); }
                .points_wrapper {
                  overflow: hidden;
                  width: 100%;
                  height: 100%;
                  pointer-events: none;
                  position: absolute;
                  z-index: 1;
                }
                .points_wrapper .point {
                  bottom: -10px;
                  position: absolute;
                  animation: floating-points infinite ease-in-out;
                  pointer-events: none;
                  width: 2px;
                  height: 2px;
                  background-color: #fff;
                  border-radius: 9999px;
                }
                @keyframes floating-points {
                  0% { transform: translateY(0); }
                  85% { opacity: 0; }
                  100% { transform: translateY(-55px); opacity: 0; }
                }
                .points_wrapper .point:nth-child(1) { left: 10%; opacity: 1; animation-duration: 2.35s; animation-delay: 0.2s; }
                .points_wrapper .point:nth-child(2) { left: 30%; opacity: 0.7; animation-duration: 2.5s; animation-delay: 0.5s; }
                .points_wrapper .point:nth-child(3) { left: 25%; opacity: 0.8; animation-duration: 2.2s; animation-delay: 0.1s; }
                .points_wrapper .point:nth-child(4) { left: 44%; opacity: 0.6; animation-duration: 2.05s; }
                .points_wrapper .point:nth-child(5) { left: 50%; opacity: 1; animation-duration: 1.9s; }
                .points_wrapper .point:nth-child(6) { left: 75%; opacity: 0.5; animation-duration: 1.5s; animation-delay: 1.5s; }
                .points_wrapper .point:nth-child(7) { left: 88%; opacity: 0.9; animation-duration: 2.2s; animation-delay: 0.2s; }
                .points_wrapper .point:nth-child(8) { left: 58%; opacity: 0.8; animation-duration: 2.25s; animation-delay: 0.2s; }
                .points_wrapper .point:nth-child(9) { left: 98%; opacity: 0.6; animation-duration: 2.6s; animation-delay: 0.1s; }
                .points_wrapper .point:nth-child(10) { left: 65%; opacity: 1; animation-duration: 2.5s; animation-delay: 0.2s; }
                .inner {
                  z-index: 2;
                  gap: 6px;
                  position: relative;
                  width: 100%;
                  color: white;
                  display: inline-flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 16px;
                  font-weight: 500;
                  line-height: 1.5;
                  transition: color 0.2s ease-in-out;
                }
                .inner svg.icon {
                  width: 18px;
                  height: 18px;
                  transition: transform 0.3s ease;
                  stroke: white;
                  fill: none;
                }
                .button:hover svg.icon { transform: translateX(2px); }
                .button:hover svg.icon path { animation: dash 0.8s linear forwards; }
                @keyframes dash {
                  0% { stroke-dasharray: 0, 20; stroke-dashoffset: 0; }
                  50% { stroke-dasharray: 10, 10; stroke-dashoffset: -5; }
                  100% { stroke-dasharray: 20, 0; stroke-dashoffset: -10; }
                }
              </style>
</button>
<button className="group inline-flex hover:border-lime-400 hover:text-lime-400 transition-all duration-300 text-sm font-medium text-slate-300 border-slate-600 border rounded-xl pt-3 pr-6 pb-3 pl-6 gap-x-3 gap-y-3 items-center justify-center">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m10 8 6 4-6 4Z"></path>
</svg>
<span className="">Watch Demo</span>
</button>
</div>
</div>
<a className="items-center justify-center bg-center xl:absolute xl:top-[20px] xl:right-[-60px] [animation:fadeSlideIn_0.5s_ease-out_0.5s_both] hidden lg:inline-flex mix-blend-screen w-[200px] h-[200px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2becc1b6-5043-4ad7-995e-07b6df7e18d2_1600w.png)] bg-cover rounded-lg" href="#"></a></div>
</section>

<section className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate lg:px-8 lg:mt-40 sm:px-6 sm:mt-20 max-w-7xl mt-40 mr-auto ml-auto pt-16 pr-4 pb-6 pl-4 relative">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
      Trusted by teams at leading companies
    </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div className="" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to right, transparent, black 15%, black 85%, transparent);"><div className="flex gap-6 will-change-transform animate-[marquee-left_30s_linear_infinite] gap-x-6 gap-y-6">
<div className="flex gap-6 shrink-0 gap-x-0 sm:gap-x-6 lg:gap-x-20 gap-y-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
<div className="flex shrink-0 gap-x-0 sm:gap-x-6 lg:gap-x-20 gap-y-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
</div></div>
</div>
</section>

<section className="z-10 quoteRevealSection [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-6 lg:px-8 lg:mt-40 lg:mb-40 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-24 pr-4 pb-20 pl-4 relative" style={{-Reveal: '100%'}}>
<div className="relative overflow-hidden sm:p-10 ring-white/10 ring-1 bg-slate-900 rounded-3xl pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-center">
<span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] text-slate-200">
<svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
</svg>
            TRUSTED BY PROFESSIONALS
          </span>
</div>
<div className="relative mt-8 sm:mt-10 quoteReveal">
<p className="mx-auto max-w-5xl text-center text-2xl sm:text-4xl md:text-5xl leading-[1.1] tracking-tight">
<span className="quote-word transition-colors duration-300" data-word-index="0" style={{color: 'rgb(115, 115, 115)'}}>
              "Sendo
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="1" style={{color: 'rgb(115, 115, 115)'}}>
              has
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="2" style={{color: 'rgb(115, 115, 115)'}}>
              completely
            </span>
<span className="quote-word transition-colors duration-300 font-serif italic" data-word-index="3" style={{color: 'rgb(115, 115, 115)'}}>
              transformed
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="4" style={{color: 'rgb(115, 115, 115)'}}>
              how
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="5" style={{color: 'rgb(115, 115, 115)'}}>
              I
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="6" style={{color: 'rgb(115, 115, 115)'}}>
              manage
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="7" style={{color: 'rgb(115, 115, 115)'}}>
              email.
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="8" style={{color: 'rgb(115, 115, 115)'}}>
              The
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="9" style={{color: 'rgb(115, 115, 115)'}}>
              AI
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="10" style={{color: 'rgb(115, 115, 115)'}}>
              prioritization
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="11" style={{color: 'rgb(115, 115, 115)'}}>
              and
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="12" style={{color: 'rgb(115, 115, 115)'}}>
              smart
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="13" style={{color: 'rgb(115, 115, 115)'}}>
              replies
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="14" style={{color: 'rgb(115, 115, 115)'}}>
              save
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="15" style={{color: 'rgb(115, 115, 115)'}}>
              me
            </span>
<span className="quote-word transition-colors duration-300 font-serif italic" data-word-index="16" style={{color: 'rgb(115, 115, 115)'}}>
              hours
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="17" style={{color: 'rgb(115, 115, 115)'}}>
              every
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="18" style={{color: 'rgb(115, 115, 115)'}}>
              single
            </span>
<span className="quote-word transition-colors duration-300" data-word-index="19" style={{color: 'rgb(115, 115, 115)'}}>
              day."
            </span>
</p>
</div>
<div className="sm:mt-10 flex gap-3 mt-8 items-center justify-center">
<img alt="Author avatar" className="h-10 w-10 ring-1 ring-white/10 object-cover rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&amp;q=80"/>
<span className="text-sm sm:text-base text-slate-300 font-medium">
            Product Manager at TechCorp
          </span>
</div>
</div>
</section>

<section className="z-10 sm:px-6 lg:px-8 md:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll max-w-7xl mr-auto ml-auto pt-16 pr-4 pb-16 pl-4 relative" data-component="feature-rotator">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
<div className="">
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Plan, write, and ship email workflows that matter
          </h2>
<div className="mt-10 space-y-5" id="bulletList"><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="0" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-emerald-400"></span><span className="text-sm sm:text-base font-medium text-white">Real‑time collaboration</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="1" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-slate-700"></span><span className="text-sm sm:text-base font-medium text-slate-500 group-hover:text-slate-300">Threaded conversations</span></button><button className="group w-full flex items-center gap-3 sm:gap-4" data-index="2" type="button"><span className="h-6 w-1 rounded-full transition-colors bg-slate-700"></span><span className="text-sm sm:text-base font-medium text-slate-500 group-hover:text-slate-300">Quick actions</span></button></div>
</div>
<div className="relative">
<div className="card-view relative rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-0" style={{opacity: '1', pointerEvents: 'auto'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate">Sendo AI</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300">Team Campaign</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-emerald-500/10 text-emerald-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
<circle cx="9" cy="7" r="4"></circle>
<path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-emerald-500/60 bg-emerald-500/10 text-emerald-200">
                    Co‑create
                  </span>
<span className="">email campaigns</span>
</h3>
</div>
<p className="mt-5 text-slate-400 leading-relaxed max-w-prose text-[17px] sm:text-lg">
                Draft clear campaigns together with multiplayer editing.
                Structure work with templates, labels, and smart filters.
              </p>
<div className="mt-6 flex gap-2">
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-500/60 bg-emerald-500/10 text-emerald-200">
                  campaigns
                </span>
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-violet-500/60 bg-violet-500/10 text-violet-200">
                  labels
                </span>
</div>
<div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
</div>
</div>
<div className="card-view absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-1" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate">Sendo AI</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300">Thread Discussion</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-amber-500/10 text-amber-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-amber-500/60 bg-amber-500/10 text-amber-200">
                    Reply in
                  </span>
<span>context</span>
</h3>
</div>
<p className="mt-5 text-slate-400 leading-relaxed max-w-prose text-[17px] sm:text-lg">
                Keep decisions attached to emails with inline threads. Mention
                teammates, resolve quickly, and move forward.
              </p>
<div className="mt-6 flex gap-2">
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-amber-500/60 bg-amber-500/10 text-amber-200">
                  threads
                </span>
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-sky-500/60 bg-sky-500/10 text-sky-200">
                  Mention
                </span>
</div>
<div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
</div>
</div>
<div className="card-view absolute inset-0 rounded-2xl border border-slate-800/80 bg-slate-900/50 shadow-[0_10px_60px_-15px_rgba(0,0,0,0.6)] ring-1 ring-white/5 backdrop-blur-md overflow-hidden transition-opacity duration-500" id="card-2" style={{opacity: '0', pointerEvents: 'none'}}>
<div className="h-12 flex items-center gap-2 px-4 border-b border-slate-800/70 text-slate-400 text-sm">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
<span className="truncate">Sendo AI</span>
<span className="opacity-50">›</span>
<span className="truncate text-slate-300">Task Manager</span>
<span className="ml-auto flex items-center gap-1 opacity-60">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="12" cy="5" r="1"></circle>
<circle cx="12" cy="19" r="1"></circle>
</svg>
</span>
</div>
<div className="relative px-6 md:px-8 py-8 md:py-10">
<div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1 text-slate-700">
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span className="w-1 h-1 rounded-full bg-current"></span>
</div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-violet-500/10 text-violet-400">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
</svg>
</div>
<div className="relative">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-100 flex flex-wrap items-center gap-3">
<span className="inline-flex items-center rounded-md px-2.5 py-1.5 ring-1 text-base sm:text-lg ring-violet-500/60 bg-violet-500/10 text-violet-200">
                    Turn emails into
                  </span>
<span>
                    tasks
                    <p className="mt-5 text-slate-400 leading-relaxed max-w-prose text-[17px] sm:text-lg">
                      Use quick commands to convert messages into actionable
                      tasks with owners, priorities, and deadlines.
                    </p>
<div className="mt-6 flex gap-2">
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-violet-500/60 bg-violet-500/10 text-violet-200">
                        tasks
                      </span>
<span className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium ring-1 ring-emerald-500/60 bg-emerald-500/10 text-emerald-200">
                        owners
                      </span>
</div>
<div className="mt-8 space-y-2">
<div className="h-3 rounded-lg bg-slate-800/70 w-2/3"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-5/6"></div>
<div className="h-3 rounded-lg bg-slate-800/70 w-1/2"></div>
</div>
<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
</span>
</h3>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:p-8 sm:ml-auto sm:mr-auto sm:mt-40 sm:mb-40 overflow-hidden bg-slate-900/60 max-w-7xl border-white/10 border rounded-3xl mt-20 mr-auto mb-20 ml-auto pt-6 pr-6 pb-6 pl-6 relative backdrop-blur">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-start relative z-10">
<div className="grid grid-cols-2 order-1 lg:order-2 relative gap-x-4 gap-y-4">
<article className="group overflow-hidden aspect-[4/3] bg-center transition-transform duration-300 hover:scale-[1.02] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a660c55c-71bb-40cc-8038-2ec913c07704_1600w.jpg)] bg-cover border-white/10 rounded-2xl relative" style={{}}>
<div className="transition-opacity duration-300 group-hover:opacity-90 bg-gradient-to-b from-black/0 via-black/15 to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                Priority
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
<p className="text-white text-lg font-medium tracking-tight leading-tight">
                Smart filtering
              </p>
</div>
</article>
<article className="group relative overflow-hidden aspect-[4/3] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg)] transition-transform duration-300 hover:scale-[1.02]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
<div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                AI
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
<p className="text-white text-lg font-medium tracking-tight leading-tight">
                Auto responses
              </p>
</div>
</article>
<article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/39d6bd74-d7eb-4a3c-afb3-43091ef38e3e_1600w.webp)] transition-transform duration-300 hover:scale-[1.02]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
<div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="w-3.5 h-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
</span>
</div>
<div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                Threads
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
<p className="text-white text-lg font-medium tracking-tight leading-tight">
                Context aware
              </p>
</div>
</article>
<article className="group relative overflow-hidden aspect-[4/5] bg-center bg-cover border-white/10 rounded-2xl bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0255963c-52aa-4da8-b87e-9a8069544a92_1600w.webp)] transition-transform duration-300 hover:scale-[1.02]">
<div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-black/60 transition-opacity duration-300 group-hover:opacity-90"></div>
<div className="absolute top-3 left-3 transition-transform duration-300 group-hover:scale-110">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-1.5 backdrop-blur">
<svg className="h-3.5 w-3.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
<circle cx="12" cy="12" r="3"></circle>
</svg>
</span>
</div>
<div className="absolute top-3 right-3 transition-transform duration-300 group-hover:translate-x-1">
<span className="inline-flex items-center gap-2 text-xs text-white/90 bg-white/10 border-white/15 border rounded-full py-1.5 px-3 backdrop-blur">
                Workflow
              </span>
</div>
<div className="absolute bottom-3 left-3 right-3 transition-transform duration-300 group-hover:translate-y-[-4px]">
<p className="text-white text-lg font-medium tracking-tight leading-tight">
                Advanced automation
              </p>
</div>
</article>
</div>
<div className="flex flex-col min-h-full justify-between order-2 lg:order-1">
<div className="">
<span className="text-sm font-normal text-slate-400">Interface</span>
<h2 className="text-[44px] sm:text-6xl lg:text-7xl leading-[0.9] text-white tracking-tighter mt-2">
              An inbox built for speed and focus.
            </h2>
<div className="mt-8 relative">
<div className="hidden sm:flex flex-col gap-4 relative text-slate-300 bg-transparent pr-4 pl-4">
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-lime-400 via-emerald-400 to-cyan-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 z-10 relative bg-slate-900 border-lime-400 border-2 rounded-full mt-0.5 flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-lime-300">
                        Smart prioritization
                      </span>
<p className="text-xs text-slate-400 mt-1">
                        AI learns what matters most to you
                      </p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute left-2 top-8 bottom-0 w-px bg-gradient-to-b from-lime-400 via-emerald-400 to-cyan-400"></div>
<div className="flex gap-4 items-start">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-emerald-400 bg-slate-900 z-10 relative mt-0.5 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
</div>
<div className="flex-1 pb-6">
<span className="text-sm font-medium text-emerald-300">
                        Instant summaries
                      </span>
<p className="text-xs text-slate-400 mt-1">
                        Get the gist without reading everything
                      </p>
</div>
</div>
</div>
<div className="relative">
<div className="flex items-start gap-4">
<div className="flex-shrink-0 w-4 h-4 rounded-full border-2 border-cyan-400 bg-slate-900 z-10 relative mt-0.5 flex items-center justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
</div>
<div className="flex-1">
<span className="text-sm font-medium text-cyan-300">
                        Auto-draft replies
                      </span>
<p className="text-xs text-slate-400 mt-1">
                        Respond faster with AI suggestions
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="w-full mt-10">
<div className="">
<p className="text-sm font-medium text-white tracking-tight">
                Transform every interaction
              </p>
<p className="text-sm text-slate-300 mt-1 max-w-sm">
                Smart filtering, context-aware responses, and workflow
                automation that keeps you productive and focused.
              </p>
<a className="inline-flex items-center justify-center gap-2 h-10 hover:bg-lime-600/90 transition text-sm font-normal text-white bg-lime-600 rounded-full mt-4 px-4 max-w-sm" href="#features">
                Explore features
                <span className="inline-flex h-2 w-2 rounded-full bg-white"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:mt-40 lg:mb-40 max-w-7xl mt-40 mr-auto mb-40 ml-auto pt-8 pr-4 pb-8 pl-4 relative">
<div className="flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs sm:text-sm text-slate-400">What people say</p>
<h2 className="text-2xl sm:text-3xl md:text-4xl tracking-tight font-semibold text-slate-100">
            Testimonials
          </h2>
</div>
<div className="hidden sm:flex items-center gap-2 text-slate-400">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
<path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<span className="text-sm">Real feedback from teams</span>
</div>
</div>
<div className="sm:mt-8 overflow-hidden sm:rounded-3xl bg-slate-950 border-slate-800 border rounded-2xl mt-8 relative" style={{position: 'relative'}}>
<div className="absolute -inset-1 rounded-2xl sm:rounded-3xl pointer-events-none" style={{background: 'linear-gradient(45deg, rgba(132, 204, 22, 0.1), rgba(52, 211, 153, 0.08), rgba(34, 211, 238, 0.06), rgba(163, 230, 53, 0.08))', backgroundSize: '300%', animation: 'glow-rotate 15s linear infinite', filter: 'blur(25px)', opacity: '0.6', zIndex: '-1'}}></div>
<div className="absolute inset-0 rounded-2xl sm:rounded-3xl pointer-events-none" style={{zIndex: '1'}}>
<div style={{position: 'absolute', inset: '0', borderRadius: 'inherit', padding: '1px', background: 'linear-gradient(90deg, rgba(132, 204, 22, 0.3), rgba(52, 211, 153, 0.25), rgba(34, 211, 238, 0.2), rgba(163, 230, 53, 0.25))', backgroundSize: '400% 100%', animation: 'border-flow 8s linear infinite', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude'}}></div>
</div>
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-slate-950 to-transparent z-10"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-slate-950 to-transparent z-10"></div>
<div className="sm:py-8 pt-6 pb-6 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-ltr_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_800w.webp"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Ava Thompson
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Sendo took minutes to integrate and saved days of email
                management. The AI is incredible.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/68ef576f-b219-43a8-8f00-72b9eea83a0d_320w.webp"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Noah Patel
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                We achieved inbox zero 3× faster. The smart features work
                perfectly out of the box.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Maya Kim
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                The platform feels invisible—just fast, reliable email
                management and clean organization.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16d38370-5873-45cf-bab1-60a7b923dc6e_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Ethan Garcia
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Smart insights baked in. We finally trust our email workflow for
                decision-making.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b08603d1-aaf4-4216-bd31-010eaa92f5cd_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Ava Thompson
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@ava_builds</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Sendo took minutes to integrate and saved days of email
                management. The AI is incredible.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Noah Patel
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@noah_ops</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                We achieved inbox zero 3× faster. The smart features work
                perfectly out of the box.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Maya Kim
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@mayak</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                The platform feels invisible—just fast, reliable email
                management and clean organization.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5180d964-2425-4134-8220-c1528af09124_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Ethan Garcia
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@egarcia</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Smart insights baked in. We finally trust our email workflow for
                decision-making.
              </p>
</article>
</div>
</div>
<div className="border-t border-slate-800/80"></div>
<div className="sm:py-8 pt-6 pb-6 relative">
<div className="flex gap-4 sm:gap-5 will-change-transform animate-[marquee-rtl_45s_linear_infinite]">
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-slate-900/40 border-slate-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_800w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Priya Singh
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                The automation suite transformed our workflow. The interface
                stays out of the way and just works.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-slate-900/40 border-slate-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_800w.jpg"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Leo Martin
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@leom</p>
</div>
</div>
<p className="sm:text-base text-sm text-slate-300 mt-4">
                Smart filters, priority routing, and analytics—without extra
                setup work. Huge productivity win.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] bg-slate-900/40 border-slate-800 border rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/ecd0a237-cc16-45f4-aef8-82b1ad266250_320w.webp"/>
<div className="">
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Sofia Alvarez
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                From chaos to clarity with one setup. Best email experience
                we've had in years.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/16d38370-5873-45cf-bab1-60a7b923dc6e_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Jackson Lee
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Clean interface, helpful AI, and thoughtful automation. It's the
                small things that matter.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Priya Singh
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@priya_dev</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                The automation suite transformed our workflow. The interface
                stays out of the way and just works.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9224ba63-793b-4edd-80e4-b2512cde1f9c_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Leo Martin
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@leom</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Smart filters, priority routing, and analytics—without extra
                setup work. Huge productivity win.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b08603d1-aaf4-4216-bd31-010eaa92f5cd_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Sofia Alvarez
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@sofialabs</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                From chaos to clarity with one setup. Best email experience
                we've had in years.
              </p>
</article>
<article className="shrink-0 w-[280px] sm:w-[360px] md:w-[420px] rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
<div className="flex items-center gap-3">
<img alt="Avatar" className="size-9 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5180d964-2425-4134-8220-c1528af09124_800w.jpg"/>
<div>
<div className="flex items-center gap-1">
<span className="text-sm font-medium text-slate-100">
                      Jackson Lee
                    </span>
<svg className="w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<p className="text-xs text-slate-400">@jacksonlee</p>
</div>
</div>
<p className="mt-4 text-sm sm:text-base text-slate-300">
                Clean interface, helpful AI, and thoughtful automation. It's the
                small things that matter.
              </p>
</article>
</div>
</div>
<style>
          @keyframes border-flow {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 400% 50%;
            }
          }
        </style>
</div>
<style>
        @keyframes glow-rotate {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      </style>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-6 sm:pb-20 lg:px-8 lg:mt-40 lg:mb-40 overflow-hidden max-w-7xl mt-40 mr-auto mb-40 ml-auto pt-16 pr-4 pb-20 pl-4 relative">

<div className="mx-auto max-w-4xl text-center relative z-10">
<span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/15 px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-medium text-lime-300">
          Global Network
        </span>
<h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tighter font-semibold">
          Join 50,000+ professionals from 180+ countries
        </h2>
<p className="mt-3 sm:mt-4 text-sm sm:text-base font-medium text-slate-300/90">
          Connect with productivity experts, AI enthusiasts, and
          forward-thinking teams transforming email management.
        </p>
<div className="mt-4 sm:mt-6">
<a className="inline-flex items-center gap-2 rounded-full bg-lime-600 px-4 sm:px-6 py-2 sm:py-3 text-sm font-semibold text-white shadow-lg shadow-lime-900/25 hover:bg-lime-500 transition-colors" href="#">
            Join Community
            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
<div className="sm:mt-12 z-10 mt-8 relative">
<div className="overflow-hidden max-w-6xl mr-auto ml-auto py-[1px]" style={{maskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 12%, black 88%, transparent), linear-gradient(to top, transparent, black 15%)', maskComposite: 'intersect', WebkitMaskComposite: 'destination-in'}}>
<div className="flex w-max" style={{animation: 'marquee-left 80s linear infinite', willChange: 'transform'}}>
<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 sm:gap-4 flex-shrink-0 sm:pr-4 pr-2 gap-x-2 gap-y-2">
<div className="sm:rounded-2xl overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-xl">
<img alt="Neon-lit Astronaut Portrait on Black Background" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Portrait with Red Laser Beam" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait of woman with neon pink bob hair" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Close-up eyes behind vibrant blue petals" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Monochrome Portrait of Woman in White Suit" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Abstract close-up portrait with color gradient haze" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b08603d1-aaf4-4216-bd31-010eaa92f5cd_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Neon Floral Portrait in Profile" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic Portrait with Orange AR Visor" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic portrait with neon visor" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic red-lit VR headset portrait" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Black-and-white portrait of smiling man" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Neon Portrait Close-Up" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3397d397-3f7d-4eba-9dff-93ea38cfc6a3_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Neon-lit Astronaut Portrait on Black Background" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/de4fd726-f962-4ff4-a691-4c9d529d2db7_320w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Portrait with Red Laser Beam" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c4dfd7da-34eb-42c1-af50-71cb6422978f_320w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait of woman with neon pink bob hair" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9c808756-0a0b-4b45-aa00-e1cb7a111d14_320w.webp"/>
</div>
<div className="sm:rounded-2xl overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-xl">
<img alt="Close-up eyes behind vibrant blue petals" className="sm:h-28 lg:h-36 w-full h-20 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/53e7b319-9ae2-45ab-9bd8-7cbd82bc275d_320w.webp"/>
</div>
</div>
<div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-8 gap-2 sm:gap-4 flex-shrink-0 pr-2 sm:pr-4">
<div className="sm:rounded-2xl overflow-hidden bg-white/5 ring-white/10 ring-1 rounded-xl">
<img alt="Neon-lit Astronaut Portrait on Black Background" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Portrait with Red Laser Beam" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait of woman with neon pink bob hair" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Close-up eyes behind vibrant blue petals" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Monochrome Portrait of Woman in White Suit" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Abstract close-up portrait with color gradient haze" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b08603d1-aaf4-4216-bd31-010eaa92f5cd_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Neon Floral Portrait in Profile" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f4e5e7c0-8aa2-4842-adfb-8c79e58459e4_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic Portrait with Orange AR Visor" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/009b1373-14ec-472b-af1a-2cd1e8f97116_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic portrait with neon visor" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4f30f4f2-b81c-4bf1-88c7-86b1dc41acd1_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Futuristic red-lit VR headset portrait" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e135f35b-eaeb-4b52-b2df-a9690249ff63_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Black-and-white portrait of smiling man" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2f563338-39fa-47ea-9761-658d4f3f84db_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Neon Portrait Close-Up" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3397d397-3f7d-4eba-9dff-93ea38cfc6a3_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Neon-lit Astronaut Portrait on Black Background" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/46ceb0ec-b3fa-4f16-8a70-bbd217ee77a9_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Cyberpunk Portrait with Red Laser Beam" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/81a14d03-8b28-415a-b8d8-bf76b3206731_800w.webp"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Portrait of woman with neon pink bob hair" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f40f03d0-8722-42a1-bf75-89d9deb07d7f_800w.jpg"/>
</div>
<div className="rounded-xl sm:rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<img alt="Close-up eyes behind vibrant blue petals" className="w-full h-20 sm:h-28 lg:h-36 object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/92cff667-f259-4342-a0aa-f51b804f4d5c_800w.webp"/>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll sm:px-6 lg:px-8 lg:mt-40 lg:mb-40 max-w-7xl mt-20 mr-auto mb-20 ml-auto pt-16 pr-4 pb-20 pl-4 relative">
<div className="relative overflow-hidden rounded-3xl bg-slate-900/60 ring-1 ring-white/10 p-6 sm:p-10 backdrop-blur">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
<div className="">
<span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-500/15 px-3 py-1.5 text-xs font-medium text-lime-300 mb-3">
              Pricing
            </span>
<h2 className="text-3xl sm:text-4xl md:text-5xl text-white mt-2 tracking-tight font-semibold">
              Simple plans for every team
            </h2>
</div>
<p className="sm:text-base text-sm text-slate-300 max-w-[42ch]">
            Start free. Scale when ready. Cancel anytime.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-6">

<div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-semibold">
              Free
            </h3>
<p className="text-sm text-slate-400 mt-1">For individuals</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight font-semibold">
                $0
              </span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Basic AI features
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Up to 100 emails/day
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
                Smart prioritization
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
                Advanced automation
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm font-medium transition-colors" href="#">
              Get started
            </a>
</div>

<div className="bg-black/80 rounded-2xl pt-6 pr-6 pb-6 pl-6 relative" style={{position: 'relative', border: 'none'}}>
<div className="absolute left-0 top-0 w-full h-full rounded-2xl pointer-events-none" style={{left: '-2px', top: '-2px', borderRadius: '1rem', background: 'linear-gradient(45deg, rgba(163, 230, 53, 0.35), rgba(163, 230, 53, 0.3), rgba(163, 230, 53, 0.05), rgba(163, 230, 53, 0.3), rgba(163, 230, 53, 0.35))', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', animation: 'steam 20s linear infinite'}}></div>
<div className="absolute left-0 top-0 w-full h-full rounded-2xl pointer-events-none" style={{left: '-2px', top: '-2px', borderRadius: '1rem', background: 'linear-gradient(45deg, rgba(163, 230, 53, 0.35), rgba(163, 230, 53, 0.3), rgba(163, 230, 53, 0.05), rgba(163, 230, 53, 0.3), rgba(163, 230, 53, 0.35))', backgroundSize: '400%', width: 'calc(100% + 4px)', height: 'calc(100% + 4px)', zIndex: '-1', animation: 'steam 20s linear infinite', filter: 'blur(30px)', opacity: '0.3'}}></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
<span className="inline-flex items-center gap-1 text-xs font-medium text-lime-300 bg-lime-500/15 border-lime-400/30 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">
<span className="h-1.5 w-1.5 rounded-full bg-lime-400"></span>
                Most popular
              </span>
</div>
<div className="relative z-10">
<div className="flex items-center justify-between">
<h3 className="text-xl text-white tracking-tight font-semibold">
                  Pro
                </h3>
</div>
<p className="text-sm text-slate-400 mt-1">For professionals</p>
<div className="flex gap-1 mt-4 gap-x-1 gap-y-1 items-baseline">
<span className="text-4xl text-white tracking-tight font-semibold">
                  $19
                </span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex gap-x-2 gap-y-2 items-center">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Unlimited AI processing
                </li>
<li className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Smart prioritization
                </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Advanced automation
                </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                  Priority support
                </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lime-600 hover:bg-lime-500 text-white h-11 ring-1 ring-lime-400/30 text-sm font-semibold transition-colors shadow-lg shadow-lime-900/25" href="#">
                Start Pro trial
              </a>
</div>
<style>
              @keyframes steam {
                0% {
                  background-position: 0 0;
                }

                50% {
                  background-position: 400% 0;
                }

                100% {
                  background-position: 0 0;
                }
              }
            </style>
</div>

<div className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 hover:bg-slate-900/60 transition-colors">
<h3 className="text-xl text-white tracking-tight font-semibold">
              Team
            </h3>
<p className="text-sm text-slate-400 mt-1">For organizations</p>
<div className="mt-4 flex items-baseline gap-1">
<span className="text-4xl text-white tracking-tight font-semibold">
                $49
              </span>
<span className="text-sm text-slate-400">/month</span>
</div>
<ul className="mt-6 space-y-3 text-sm text-slate-300">
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Everything in Pro
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Team collaboration
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Shared workflows
              </li>
<li className="flex items-center gap-2">
<svg className="w-4 h-4 text-lime-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Admin controls
              </li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white/10 hover:bg-white/15 text-white h-11 ring-1 ring-white/10 text-sm font-medium transition-colors" href="#">
              Contact sales
            </a>
</div>
</div>
</div>
</section>

<footer className="z-10 border-slate-800 border-t mt-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-12 pl-4">
<div className="relative overflow-hidden ring-1 ring-white/10 bg-slate-900/60 rounded-3xl backdrop-blur">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10"></div>
<div className="relative sm:px-10 lg:px-14 lg:py-16 pt-12 pr-6 pb-12 pl-6">

<div className="flex flex-col lg:flex-row items-start justify-between gap-10">
<div className="max-w-md">
<a className="inline-flex items-center" href="#">
<span className="bg-center text-2xl font-semibold tracking-tighter w-[140px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8cc3fd60-0bf0-41ad-a08b-be684f266e22_1600w.png)] bg-cover"></span>
</a>
<p className="mt-4 text-sm text-slate-300 leading-relaxed">
                  Transform your inbox into a productivity powerhouse with
                  AI-powered email management that saves you hours every week.
                </p>
<form className="mt-6 flex items-center gap-2">
<div className="flex-1">
<label className="sr-only" htmlFor="footer-email">Email</label>
<input className="w-full rounded-full bg-white/5 text-white placeholder-slate-400 px-4 py-3 text-sm ring-1 ring-white/10 focus:ring-2 focus:ring-lime-400/30 outline-none" id="footer-email" placeholder="Your email" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-full bg-lime-600 text-white px-4 py-3 text-sm ring-1 ring-lime-400/30 hover:bg-lime-500 transition font-medium" type="submit">
                    Subscribe
                    <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
<path d="m21.854 2.147-10.94 10.939"></path>
</svg>
</button>
</form>
<p className="mt-2 text-xs text-slate-400">
                  Monthly updates. No spam.
                </p>
</div>

<div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full lg:w-auto">
<div>
<p className="text-sm font-medium text-slate-200 tracking-tight">
                    Product
                  </p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition" href="#features">
                        Features
                      </a>
</li>
<li>
<a className="hover:text-white transition" href="#how-it-works">
                        How it works
                      </a>
</li>
<li>
<a className="hover:text-white transition" href="#pricing">
                        Pricing
                      </a>
</li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-200 tracking-tight">
                    Company
                  </p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition" href="#">About</a>
</li>
<li>
<a className="hover:text-white transition" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                        Careers
                      </a>
</li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-slate-200 tracking-tight">
                    Legal
                  </p>
<ul className="mt-3 space-y-2 text-sm text-slate-400">
<li>
<a className="hover:text-white transition" href="#">
                        Privacy
                      </a>
</li>
<li>
<a className="hover:text-white transition" href="#">Terms</a>
</li>
<li>
<a className="hover:text-white transition" href="#">
                        Contact
                      </a>
</li>
</ul>
</div>
</div>
</div>

<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-500">
                © 2024 Sendo. All rights reserved.
              </p>
<div className="flex items-center gap-2">
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition" href="#">
<svg className="h-4 w-4 text-slate-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
</div>
</div>
</div>
</div>
</div>
</footer>





    </>
  );
}
