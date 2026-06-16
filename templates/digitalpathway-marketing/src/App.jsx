import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


          function closeAllCards(exceptCard) {
              const allCards = document.querySelectorAll('.expandable-card');
              allCards.forEach(card => {
                  if (card === exceptCard) return;
                  const gallery = card.querySelector('.gallery-content');
                  const chevron = card.querySelector('.chevron-icon');
                  const icon = chevron.querySelector('iconify-icon');
                  gallery.style.maxHeight = null;
                  gallery.style.opacity = '0';
                  chevron.style.transform = 'rotate(0deg)';
                  if(icon) icon.setAttribute('icon', 'lucide:chevron-down');
                  card.classList.remove('bg-neutral-900', 'border-white/30');
                  card.classList.add('bg-neutral-900/40', 'border-neutral-800');
              });
          }
          function toggleCard(card) {
              if (window.event && (window.event.target.closest('button') || window.event.target.closest('img') || window.event.target.closest('iframe'))) return;
              const gallery = card.querySelector('.gallery-content');
              const chevron = card.querySelector('.chevron-icon');
              const icon = chevron.querySelector('iconify-icon');
              const isOpen = gallery.style.maxHeight;
              closeAllCards(card);
              if (isOpen) {
                  gallery.style.maxHeight = null;
                  gallery.style.opacity = '0';
                  chevron.style.transform = 'rotate(0deg)';
                  if(icon) icon.setAttribute('icon', 'lucide:chevron-down');
                  card.classList.remove('bg-neutral-900', 'border-white/30');
                  card.classList.add('bg-neutral-900/40', 'border-neutral-800');
              } else {
                  gallery.style.maxHeight = gallery.scrollHeight + 2000 + "px";
                  gallery.style.opacity = '1';
                  chevron.style.transform = 'rotate(0deg)';
                  if(icon) icon.setAttribute('icon', 'lucide:x');
                  card.classList.remove('bg-neutral-900/40', 'border-neutral-800');
                  card.classList.add('bg-neutral-900', 'border-white/30');
                  setTimeout(() => {
                      const yOffset = -100;
                      const y = card.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({top: y, behavior: 'smooth'});
                  }, 300);
              }
          }
        


      // Init Lucide
      lucide.createIcons();

      // --- AI Text Reveal Engine (VelvetSound Enhanced) ---
      document.addEventListener('DOMContentLoaded', () => {
          const processTextElement = (el) => {
              if (el.classList.contains('ai-processed') || !el.textContent.trim()) return;
              const isHeading = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName);
              const text = el.innerText;
              if (el.children.length > 0 && !['SPAN', 'STRONG', 'B', 'I'].includes(el.children[0].tagName)) return;
              el.classList.add('ai-content', 'ai-processed');
              el.innerHTML = '';
              if (isHeading) {
                  const chars = text.split('');
                  chars.forEach((char, index) => {
                      const span = document.createElement('span');
                      span.textContent = char;
                      span.className = 'ai-char';
                      if (char === ' ') span.innerHTML = '&nbsp;';
                      span.style.setProperty('--ai-index', index);
                      el.appendChild(span);
                  });
              } else {
                  const words = text.split(/(\s+)/);
                  let wordIndex = 0;
                  words.forEach((word) => {
                      if (word.trim().length === 0) {
                          el.appendChild(document.createTextNode(word));
                      } else {
                          const span = document.createElement('span');
                          span.textContent = word;
                          span.className = 'ai-word';
                          span.style.setProperty('--ai-index', wordIndex);
                          el.appendChild(span);
                          wordIndex++;
                      }
                  });
              }
          };

          const selectors = ['h1', 'h2', 'h3', 'p', 'li', 'span.ai-observe', 'label', 'a.ai-observe', 'button .ai-observe'];
          document.querySelectorAll(selectors.join(',')).forEach(el => {
              if(el.offsetParent === null) return;
              processTextElement(el);
          });

          const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('ai-active');
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

          document.querySelectorAll('.ai-content, .ai-observe').forEach(el => { observer.observe(el); });

          // --- Number Counter ---
          const counterObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const el = entry.target;
                      const target = parseFloat(el.getAttribute('data-target'));
                      if(el.classList.contains('animated')) return;
                      el.classList.add('animated');
                      if (target === 0) { el.innerText = '0'; return; }
                      const duration = 1500;
                      const start = 0;
                      const startTime = performance.now();
                      const animate = (currentTime) => {
                          const elapsed = currentTime - startTime;
                          const progress = Math.min(elapsed / duration, 1);
                          const ease = 1 - Math.pow(1 - progress, 4);
                          const current = Math.floor(start + (target - start) * ease);
                          el.innerText = current;
                          if (progress < 1) { requestAnimationFrame(animate); }
                          else { el.innerText = target; }
                      };
                      requestAnimationFrame(animate);
                      observer.unobserve(el);
                  }
              });
          }, { threshold: 0.5 });
          document.querySelectorAll('.counter-item').forEach(el => { counterObserver.observe(el); });
      });

      // --- Navbar Scroll Logic ---
      let lastScrollY = window.scrollY;
      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > 50) {
              if (currentScrollY > lastScrollY) {
                  navbar.style.transform = 'translateY(-10px)';
                  navbar.style.opacity = '0.8';
                  navbar.classList.add('backdrop-blur-none');
              } else {
                  navbar.style.transform = 'translateY(0)';
                  navbar.style.opacity = '1';
                  navbar.classList.add('backdrop-blur-md');
              }
          } else {
              navbar.style.transform = 'translateY(0)';
              navbar.style.opacity = '1';
          }
          lastScrollY = currentScrollY;
      });

      // --- Parallax Effect ---
      let ticking = false;
      window.addEventListener('scroll', function() {
          if (!ticking) {
              window.requestAnimationFrame(function() {
                  const scrolled = window.scrollY;
                  document.querySelectorAll('.parallax-effect').forEach(el => {
                      const speed = el.getAttribute('data-parallax-speed') || 0.05;
                      const rect = el.getBoundingClientRect();
                      if (rect.top < window.innerHeight && rect.bottom > 0) {
                           el.style.transform = `translateY(${scrolled * speed}px)`;
                      }
                  });
                  ticking = false;
              });
              ticking = true;
          }
      });

      // --- Gallery Logic ---
      (function() {
          const galleries = {
              premium: [
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_03_kblari.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615726/Photo-FullSize-182_dbrjgo.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-24_wwqssz.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-38_qdi38z.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615724/Photo-FullSize-35_e8f6tg.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615724/Photo-FullSize-18_zcojea.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/Photo-FullSize-16_qnqukv.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/photo-08_nsqm0e.webp",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/Photo-FullSize-10_nu44rr.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/photo-35_kywfjz.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/Photo-87_1_jsfgzq.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/photo-26_hv5uig.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/photo-01_k43sja.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615720/photo_10_1_detund.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615726/Photo-FullSize-173_1_whhmgi.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-101_vsnmfl.jpg"
              ],
              drone: [
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_04_2_mpufiq.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/drone-02_eeb8rz.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/Drone-4_bprheo.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/Drone-03_1_pkmssy.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617242/Drone-4_1_f73vsd.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617243/Drone-5_2_n37lbk.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617244/drone-06_fvh7uk.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617244/drone-07_pibncp.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617245/drone-10_tf30mr.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617246/Drone-FullSize-1_1_be21cb.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617247/Drone-FullSize-3_b51in3.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617248/Drone-FullSize-6_om4ohs.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766617248/Drone-FullSize-4_2_av6pl1.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621516/photo_08_a0ycri.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_02_1_ivjmwg.jpg"
              ],
              twilight: [
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621604/twilightphoto-11_gmmtbp.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621604/twilightphoto-07_wkbdia.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621602/twilightphoto-03_yzdnpz.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621601/twilightphoto-01_srmgwb.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621600/twilight-fullsize-10_nfjs1t.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621599/twilight-fullsize-7_u1r1be.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/twilight-fullsize-2_2_fpms25.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/Twilight-FullSize-1_mog5nn.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/Twilight-FullSize-2_mobfz5.jpg"
              ],
              tours: [
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766622421/Screenshot_2025-12-24_at_4.24.06_PM_zbhpqh.png",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766622422/Screenshot_2025-12-24_at_4.26.00_PM_vnkhrr.png",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766622422/Screenshot_2025-12-24_at_4.26.17_PM_hnazdb.png"
              ],
              staging: [
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766787694/untitled-4_jr2rht.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766787694/untitled-5_iyyj6s.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766787692/untitled-3_bung1t.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766787689/untitled-2_ooaoxd.jpg",
                  "https://res.cloudinary.com/ded3jvles/image/upload/v1766787688/untitled-1_locefw.jpg"
              ]
          };
          const videoIds = [
              "04498323a7154338a3efc1acc73d9bda",
              "69796202f26a422cadbed5a65ea596ec",
              "e2c24e2fca554d2cba217e016c85dd88",
              "fe140337cbb94843bdfb9a88bfafaaf2",
              "75a0d5b6589d40cd8c7e9aa349b2d265"
          ];
          function renderGrid(id, items, category) {
              const container = document.getElementById(id);
              if(!container) return;
              container.innerHTML = '';
              items.forEach((url, index) => {
                  const div = document.createElement('div');
                  div.className = "w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4";
                  div.onclick = function(e) { e.stopPropagation(); openUniversalLightbox(category, index); };
                  div.innerHTML = `<img loading="lazy" src="${url}" class="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block"><div class="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div>`;
                  container.appendChild(div);
              });
          }
          function renderVideos() {
              const container = document.getElementById('video-grid');
              if(!container) return;
              container.innerHTML = '';
              videoIds.forEach(id => {
                  const div = document.createElement('div');
                  div.className = "w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video";
                  div.onclick = function(e) { e.stopPropagation(); };
                  div.innerHTML = `<iframe src="https://www.loom.com/embed/${id}?hide_owner=true&hide_share=true&hide_title=true&hideEmbedTopBar=true&autoplay=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen class="w-full h-full"></iframe>`;
                  container.appendChild(div);
              });
          }
          renderGrid('premium-grid', galleries.premium, 'premium');
          renderGrid('twilight-grid', galleries.twilight, 'twilight');
          renderGrid('drone-grid', galleries.drone, 'drone');
          renderGrid('tours-grid', galleries.tours, 'tours');
          renderGrid('staging-grid', galleries.staging, 'staging');
          renderVideos();

          let currentCategory = null;
          let currentIndex = 0;
          window.openUniversalLightbox = function(category, index) {
              if (window.event) window.event.stopPropagation();
              currentCategory = category;
              currentIndex = index;
              const lightbox = document.getElementById('universal-lightbox');
              lightbox.classList.remove('hidden');
              void lightbox.offsetWidth;
              lightbox.classList.remove('opacity-0');
              document.body.style.overflow = 'hidden';
              updateLightboxContent();
          };
          window.closeUniversalLightbox = function() {
              if (window.event) window.event.stopPropagation();
              const lightbox = document.getElementById('universal-lightbox');
              lightbox.classList.add('opacity-0');
              setTimeout(() => { lightbox.classList.add('hidden'); }, 300);
              document.body.style.overflow = '';
          };
          window.navLightbox = function(direction) {
              if (window.event) window.event.stopPropagation();
              const items = galleries[currentCategory];
              currentIndex = (currentIndex + direction + items.length) % items.length;
              updateLightboxContent();
          };
          function updateLightboxContent() {
              const items = galleries[currentCategory];
              const img = document.getElementById('lightbox-img');
              const counter = document.getElementById('lightbox-counter');
              const total = document.getElementById('lightbox-total');
              img.style.opacity = '0.5';
              img.style.transform = 'scale(0.98)';
              setTimeout(() => {
                  img.src = items[currentIndex];
                  counter.innerText = currentIndex + 1;
                  total.innerText = items.length;
                  img.onload = () => { img.style.opacity = '1'; img.style.transform = 'scale(1)'; };
              }, 150);
          }
          document.addEventListener('keydown', function(e) {
              const lightbox = document.getElementById('universal-lightbox');
              if (!lightbox.classList.contains('hidden')) {
                  if (e.key === 'ArrowLeft') window.navLightbox(-1);
                  if (e.key === 'ArrowRight') window.navLightbox(1);
                  if (e.key === 'Escape') window.closeUniversalLightbox();
              }
          });
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="krvLrHX3sj3cg8BHywDj"></div>

</div>
</div>

<div className="grid-lines">
<div className="grid-line"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line hidden md:block"></div>
<div className="grid-line"></div>
<div className="grid-line"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 transition-all duration-500 backdrop-blur-none" id="navbar" style={{transform: 'translateY(-10px)', opacity: '0.8'}}>
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group">
<span className="ai-observe text-sm font-semibold tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>DIGITAL</span> <span className="ai-word" style={{-AiIndex: '1'}}>PATHWAY</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="ai-observe hover:text-white transition-colors ai-hover-target ai-content ai-processed ai-active" href="#services"><span className="ai-word" style={{-AiIndex: '0'}}>Services</span></a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target ai-content ai-processed ai-active" href="#results"><span className="ai-word" style={{-AiIndex: '0'}}>Track</span> <span className="ai-word" style={{-AiIndex: '1'}}>Record</span></a>
<a className="ai-observe hover:text-white transition-colors ai-hover-target ai-content ai-processed ai-active" href="#process"><span className="ai-word" style={{-AiIndex: '0'}}>Process</span></a>
</div>
<div className="flex items-center gap-4">
<a className="ai-observe bg-white text-black hover:bg-neutral-200 text-xs font-semibold px-5 py-2.5 rounded-full transition-all ai-hover-target ai-content ai-processed ai-active" href="#quote"><span className="ai-word" style={{-AiIndex: '0'}}>BOOK</span> <span className="ai-word" style={{-AiIndex: '1'}}>NOW</span></a>
</div>
</div>
</nav>

<header className="relative pt-36 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[850px] flex items-center">

<div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
<iframe allow="autoplay; fullscreen; encrypted-media" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[170%] min-h-[170%] w-auto h-auto opacity-40 mix-blend-overlay grayscale-[30%]" frameborder="0" src="https://www.loom.com/embed/04498323a7154338a3efc1acc73d9bda?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;controls=0&amp;hide_controls=true"></iframe>
<div className="absolute inset-0 bg-neutral-950/30"></div>
<div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t to-transparent from-black via-black/80"></div>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
</div>

<div className="section-number top-32 right-6 md:right-12">01</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="flex flex-col items-center justify-center text-center">
<div className="parallax-effect" data-parallax-speed="0.05" style={{transform: 'translateY(32.7px)'}}>
<div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 ai-observe ai-active">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-white"></span>
<span className="inline-flex bg-red-600 w-2 h-2 rounded-full relative"></span>
</span>
<span className="text-xs font-medium text-white/80 tracking-wide">
                Serving Marin, Napa &amp; Silicon Valley
              </span>
</div>
<h1 className="lg:text-8xl leading-[1.1] ai-observe ai-hover-target ai-active ai-content ai-processed text-5xl font-semibold text-white tracking-tight max-w-6xl mb-8"><span className="ai-char" style={{-AiIndex: '0'}}>T</span><span className="ai-char" style={{-AiIndex: '1'}}>h</span><span className="ai-char" style={{-AiIndex: '2'}}>e</span><span className="ai-char" style={{-AiIndex: '3'}}> </span><span className="ai-char" style={{-AiIndex: '4'}}>S</span><span className="ai-char" style={{-AiIndex: '5'}}>t</span><span className="ai-char" style={{-AiIndex: '6'}}>a</span><span className="ai-char" style={{-AiIndex: '7'}}>n</span><span className="ai-char" style={{-AiIndex: '8'}}>d</span><span className="ai-char" style={{-AiIndex: '9'}}>a</span><span className="ai-char" style={{-AiIndex: '10'}}>r</span><span className="ai-char" style={{-AiIndex: '11'}}>d</span><span className="ai-char" style={{-AiIndex: '12'}}> </span><span className="ai-char" style={{-AiIndex: '13'}}>f</span><span className="ai-char" style={{-AiIndex: '14'}}>o</span><span className="ai-char" style={{-AiIndex: '15'}}>r</span><span className="ai-char" style={{-AiIndex: '16'}}> </span><span className="ai-char" style={{-AiIndex: '17'}}>L</span><span className="ai-char" style={{-AiIndex: '18'}}>u</span><span className="ai-char" style={{-AiIndex: '19'}}>x</span><span className="ai-char" style={{-AiIndex: '20'}}>u</span><span className="ai-char" style={{-AiIndex: '21'}}>r</span><span className="ai-char" style={{-AiIndex: '22'}}>y</span><span className="ai-char" style={{-AiIndex: '23'}}> </span><span className="ai-char" style={{-AiIndex: '24'}}>R</span><span className="ai-char" style={{-AiIndex: '25'}}>e</span><span className="ai-char" style={{-AiIndex: '26'}}>a</span><span className="ai-char" style={{-AiIndex: '27'}}>l</span><span className="ai-char" style={{-AiIndex: '28'}}> </span><span className="ai-char" style={{-AiIndex: '29'}}>E</span><span className="ai-char" style={{-AiIndex: '30'}}>s</span><span className="ai-char" style={{-AiIndex: '31'}}>t</span><span className="ai-char" style={{-AiIndex: '32'}}>a</span><span className="ai-char" style={{-AiIndex: '33'}}>t</span><span className="ai-char" style={{-AiIndex: '34'}}>e</span><span className="ai-char" style={{-AiIndex: '35'}}>.</span></h1>
<p className="text-lg lg:text-xl text-neutral-400 mb-10 max-w-2xl mx-auto leading-relaxed ai-observe font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Accelerate</span> <span className="ai-word" style={{-AiIndex: '1'}}>sales</span> <span className="ai-word" style={{-AiIndex: '2'}}>for</span> <span className="ai-word" style={{-AiIndex: '3'}}>your</span> <span className="ai-word" style={{-AiIndex: '4'}}>listings</span> <span className="ai-word" style={{-AiIndex: '5'}}>with</span> <span className="ai-word" style={{-AiIndex: '6'}}>our</span> <span className="ai-word" style={{-AiIndex: '7'}}>premium</span> <span className="ai-word" style={{-AiIndex: '8'}}>done-for-you</span> <span className="ai-word" style={{-AiIndex: '9'}}>content</span> <span className="ai-word" style={{-AiIndex: '10'}}>packages.</span> <span className="ai-word" style={{-AiIndex: '11'}}>We</span> <span className="ai-word" style={{-AiIndex: '12'}}>help</span> <span className="ai-word" style={{-AiIndex: '13'}}>experienced</span> <span className="ai-word" style={{-AiIndex: '14'}}>Bay</span> <span className="ai-word" style={{-AiIndex: '15'}}>Area</span> <span className="ai-word" style={{-AiIndex: '16'}}>agents</span> <span className="ai-word" style={{-AiIndex: '17'}}>command</span> <span className="ai-word" style={{-AiIndex: '18'}}>higher</span> <span className="ai-word" style={{-AiIndex: '19'}}>prices.</span></p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 opacity-0 animate-[animationIn_0.8s_1s_forwards] blur-sm filter" style={{animationFillMode: 'forwards'}}>
<a className="bg-white hover:bg-neutral-200 text-black px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ai-hover-target" href="#quote">
<span className="ai-observe ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Request</span> <span className="ai-word" style={{-AiIndex: '1'}}>Quote</span></span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
<a className="border border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white px-8 py-3.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ai-hover-target" href="#services">
<span className="ai-observe ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Explore</span> <span className="ai-word" style={{-AiIndex: '1'}}>Deliverables</span></span>
</a>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-900 bg-neutral-900/30 backdrop-blur-sm relative z-20">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 fade-up-block ai-observe ai-active">
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl tracking-tight mb-1 font-semibold text-white tabular-nums">
<span className="counter-item animated" data-target="4">$4</span>
              B+
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              Property Value Marketed
            </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl tracking-tight mb-1 font-semibold text-white tabular-nums">
<span className="counter-item animated" data-target="1000">1000</span>
              +
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              Clients Served
            </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl tracking-tight mb-1 font-semibold text-white tabular-nums">
              $
              <span className="counter-item animated" data-target="3">3</span>
              M+
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              Avg Listing Value
            </div>
</div>
<div className="text-center md:text-left">
<div className="text-3xl md:text-4xl tracking-tight mb-1 font-semibold text-white tabular-nums">
<span className="counter-item animated" data-target="5">5</span>
              + Yrs
            </div>
<div className="text-xs text-neutral-500 uppercase tracking-widest font-medium">
              Agent Experience Avg
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950/30 relative border-t border-neutral-900/50 overflow-hidden" id="services">

<div className="section-number top-12 left-6 md:left-12">02</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-16 parallax-effect" data-parallax-speed="0.03" style={{transform: 'translateY(36.93px)'}}>
<div>
<span className="ai-observe font-medium text-sm tracking-widest uppercase mb-4 block text-white ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>DELIVERABLES</span></span>
<h2 className="ai-observe ai-hover-target text-4xl lg:text-5xl font-semibold tracking-tight mb-6 leading-tight text-white ai-active">
              Done-For-You
              <br/>
              Content Suite.
            </h2>
<p className="ai-observe text-lg text-neutral-400 leading-relaxed max-w-lg font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>A</span> <span className="ai-word" style={{-AiIndex: '1'}}>comprehensive</span> <span className="ai-word" style={{-AiIndex: '2'}}>production</span> <span className="ai-word" style={{-AiIndex: '3'}}>ecosystem</span> <span className="ai-word" style={{-AiIndex: '4'}}>catering</span> <span className="ai-word" style={{-AiIndex: '5'}}>to</span> <span className="ai-word" style={{-AiIndex: '6'}}>every</span> <span className="ai-word" style={{-AiIndex: '7'}}>property</span> <span className="ai-word" style={{-AiIndex: '8'}}>type.</span> <span className="ai-word" style={{-AiIndex: '9'}}>Click</span> <span className="ai-word" style={{-AiIndex: '10'}}>on</span> <span className="ai-word" style={{-AiIndex: '11'}}>a</span> <span className="ai-word" style={{-AiIndex: '12'}}>service</span> <span className="ai-word" style={{-AiIndex: '13'}}>below</span> <span className="ai-word" style={{-AiIndex: '14'}}>to</span> <span className="ai-word" style={{-AiIndex: '15'}}>view</span> <span className="ai-word" style={{-AiIndex: '16'}}>our</span> <span className="ai-word" style={{-AiIndex: '17'}}>portfolio.</span></p>
</div>
</div>



<div className="fixed inset-0 z-[9999] backdrop-blur-xl hidden flex items-center justify-center opacity-0 transition-opacity duration-300 bg-black/95" id="universal-lightbox" onclick="closeUniversalLightbox()">
<div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
<div className="text-sm font-medium tracking-wide text-white/80">
<span className="text-white" id="lightbox-counter">1</span>
<span className="mx-1 text-neutral-600">/</span>
<span id="lightbox-total">1</span>
</div>
<button className="w-10 h-10 rounded-full flex items-center justify-center transition-colors border cursor-pointer bg-white/5 hover:bg-white/10 text-white border-white/10" onclick="closeUniversalLightbox()">
<iconify-icon icon="lucide:x" width="20"></iconify-icon>
</button>
</div>
<button className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-all z-50 backdrop-blur-sm group/arrow cursor-pointer bg-neutral-900/50 hover:bg-white/10 border-white/10 text-white" onclick="navLightbox(-1)">
<iconify-icon className="group-hover/arrow:-translate-x-0.5 transition-transform" icon="lucide:chevron-left" width="24"></iconify-icon>
</button>
<button className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border flex items-center justify-center transition-all z-50 backdrop-blur-sm group/arrow cursor-pointer bg-neutral-900/50 hover:bg-white/10 border-white/10 text-white" onclick="navLightbox(1)">
<iconify-icon className="group-hover/arrow:translate-x-0.5 transition-transform" icon="lucide:chevron-right" width="24"></iconify-icon>
</button>
<div className="relative w-full h-full p-4 md:p-12 flex items-center justify-center">
<img className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300 select-none" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)">
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-38_qdi38z.jpg"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:camera" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>P</span><span className="ai-char" style={{-AiIndex: '1'}}>r</span><span className="ai-char" style={{-AiIndex: '2'}}>e</span><span className="ai-char" style={{-AiIndex: '3'}}>m</span><span className="ai-char" style={{-AiIndex: '4'}}>i</span><span className="ai-char" style={{-AiIndex: '5'}}>u</span><span className="ai-char" style={{-AiIndex: '6'}}>m</span><span className="ai-char" style={{-AiIndex: '7'}}> </span><span className="ai-char" style={{-AiIndex: '8'}}>P</span><span className="ai-char" style={{-AiIndex: '9'}}>h</span><span className="ai-char" style={{-AiIndex: '10'}}>o</span><span className="ai-char" style={{-AiIndex: '11'}}>t</span><span className="ai-char" style={{-AiIndex: '12'}}>o</span><span className="ai-char" style={{-AiIndex: '13'}}>g</span><span className="ai-char" style={{-AiIndex: '14'}}>r</span><span className="ai-char" style={{-AiIndex: '15'}}>a</span><span className="ai-char" style={{-AiIndex: '16'}}>p</span><span className="ai-char" style={{-AiIndex: '17'}}>h</span><span className="ai-char" style={{-AiIndex: '18'}}>y</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>HDR</span> <span className="ai-word" style={{-AiIndex: '1'}}>composition</span> <span className="ai-word" style={{-AiIndex: '2'}}>focusing</span> <span className="ai-word" style={{-AiIndex: '3'}}>on</span> <span className="ai-word" style={{-AiIndex: '4'}}>architectural</span> <span className="ai-word" style={{-AiIndex: '5'}}>details</span> <span className="ai-word" style={{-AiIndex: '6'}}>and</span> <span className="ai-word" style={{-AiIndex: '7'}}>natural</span> <span className="ai-word" style={{-AiIndex: '8'}}>light.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-2 gap-4 space-y-4 px-2" id="premium-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_03_kblari.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615726/Photo-FullSize-182_dbrjgo.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-24_wwqssz.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-38_qdi38z.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615724/Photo-FullSize-35_e8f6tg.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615724/Photo-FullSize-18_zcojea.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/Photo-FullSize-16_qnqukv.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/photo-08_nsqm0e.webp"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/Photo-FullSize-10_nu44rr.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615722/photo-35_kywfjz.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/Photo-87_1_jsfgzq.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/photo-26_hv5uig.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/photo-01_k43sja.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615720/photo_10_1_detund.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615726/Photo-FullSize-173_1_whhmgi.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615725/Photo-FullSize-101_vsnmfl.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div></div>
</div>
</div>
</div>
</div>

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)" style={{animationDelay: '0.1s'}}>
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766615721/Photo-87_1_jsfgzq.jpg"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:film" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>C</span><span className="ai-char" style={{-AiIndex: '1'}}>i</span><span className="ai-char" style={{-AiIndex: '2'}}>n</span><span className="ai-char" style={{-AiIndex: '3'}}>e</span><span className="ai-char" style={{-AiIndex: '4'}}>m</span><span className="ai-char" style={{-AiIndex: '5'}}>a</span><span className="ai-char" style={{-AiIndex: '6'}}>t</span><span className="ai-char" style={{-AiIndex: '7'}}>i</span><span className="ai-char" style={{-AiIndex: '8'}}>c</span><span className="ai-char" style={{-AiIndex: '9'}}> </span><span className="ai-char" style={{-AiIndex: '10'}}>4</span><span className="ai-char" style={{-AiIndex: '11'}}>K</span><span className="ai-char" style={{-AiIndex: '12'}}> </span><span className="ai-char" style={{-AiIndex: '13'}}>V</span><span className="ai-char" style={{-AiIndex: '14'}}>i</span><span className="ai-char" style={{-AiIndex: '15'}}>d</span><span className="ai-char" style={{-AiIndex: '16'}}>e</span><span className="ai-char" style={{-AiIndex: '17'}}>o</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Lifestyle-focused</span> <span className="ai-word" style={{-AiIndex: '1'}}>storytelling.</span> <span className="ai-word" style={{-AiIndex: '2'}}>Licensed</span> <span className="ai-word" style={{-AiIndex: '3'}}>scoring</span> <span className="ai-word" style={{-AiIndex: '4'}}>and</span> <span className="ai-word" style={{-AiIndex: '5'}}>professional</span> <span className="ai-word" style={{-AiIndex: '6'}}>color</span> <span className="ai-word" style={{-AiIndex: '7'}}>grading.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-1 gap-4 space-y-4 px-2" id="video-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video"><iframe allowfullscreen="" className="w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/04498323a7154338a3efc1acc73d9bda?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=0" webkitallowfullscreen=""></iframe></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video"><iframe allowfullscreen="" className="w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/69796202f26a422cadbed5a65ea596ec?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=0" webkitallowfullscreen=""></iframe></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video"><iframe allowfullscreen="" className="w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/e2c24e2fca554d2cba217e016c85dd88?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=0" webkitallowfullscreen=""></iframe></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video"><iframe allowfullscreen="" className="w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/fe140337cbb94843bdfb9a88bfafaaf2?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=0" webkitallowfullscreen=""></iframe></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative bg-black break-inside-avoid mb-4 aspect-video"><iframe allowfullscreen="" className="w-full h-full" frameborder="0" mozallowfullscreen="" src="https://www.loom.com/embed/75a0d5b6589d40cd8c7e9aa349b2d265?hide_owner=true&amp;hide_share=true&amp;hide_title=true&amp;hideEmbedTopBar=true&amp;autoplay=0" webkitallowfullscreen=""></iframe></div></div>
</div>
</div>
</div>
</div>

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)" style={{animationDelay: '0.2s'}}>
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621516/photo_08_a0ycri.jpg"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:plane" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>D</span><span className="ai-char" style={{-AiIndex: '1'}}>r</span><span className="ai-char" style={{-AiIndex: '2'}}>o</span><span className="ai-char" style={{-AiIndex: '3'}}>n</span><span className="ai-char" style={{-AiIndex: '4'}}>e</span><span className="ai-char" style={{-AiIndex: '5'}}> </span><span className="ai-char" style={{-AiIndex: '6'}}>A</span><span className="ai-char" style={{-AiIndex: '7'}}>e</span><span className="ai-char" style={{-AiIndex: '8'}}>r</span><span className="ai-char" style={{-AiIndex: '9'}}>i</span><span className="ai-char" style={{-AiIndex: '10'}}>a</span><span className="ai-char" style={{-AiIndex: '11'}}>l</span><span className="ai-char" style={{-AiIndex: '12'}}>s</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>FAA</span> <span className="ai-word" style={{-AiIndex: '1'}}>Part</span> <span className="ai-word" style={{-AiIndex: '2'}}>107</span> <span className="ai-word" style={{-AiIndex: '3'}}>certified</span> <span className="ai-word" style={{-AiIndex: '4'}}>pilots</span> <span className="ai-word" style={{-AiIndex: '5'}}>capturing</span> <span className="ai-word" style={{-AiIndex: '6'}}>high-altitude</span> <span className="ai-word" style={{-AiIndex: '7'}}>perspectives</span> <span className="ai-word" style={{-AiIndex: '8'}}>and</span> <span className="ai-word" style={{-AiIndex: '9'}}>context.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-2 gap-4 space-y-4 px-2" id="drone-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_04_2_mpufiq.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/drone-02_eeb8rz.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/Drone-4_bprheo.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617241/Drone-03_1_pkmssy.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617242/Drone-4_1_f73vsd.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617243/Drone-5_2_n37lbk.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617244/drone-06_fvh7uk.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617244/drone-07_pibncp.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617245/drone-10_tf30mr.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617246/Drone-FullSize-1_1_be21cb.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617247/Drone-FullSize-3_b51in3.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617248/Drone-FullSize-6_om4ohs.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766617248/Drone-FullSize-4_2_av6pl1.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621516/photo_08_a0ycri.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621515/photo_02_1_ivjmwg.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div></div>
</div>
</div>
</div>
</div>

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)" style={{animationDelay: '0.3s'}}>
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/Twilight-FullSize-1_mog5nn.jpg"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:sunset" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>T</span><span className="ai-char" style={{-AiIndex: '1'}}>w</span><span className="ai-char" style={{-AiIndex: '2'}}>i</span><span className="ai-char" style={{-AiIndex: '3'}}>l</span><span className="ai-char" style={{-AiIndex: '4'}}>i</span><span className="ai-char" style={{-AiIndex: '5'}}>g</span><span className="ai-char" style={{-AiIndex: '6'}}>h</span><span className="ai-char" style={{-AiIndex: '7'}}>t</span><span className="ai-char" style={{-AiIndex: '8'}}> </span><span className="ai-char" style={{-AiIndex: '9'}}>P</span><span className="ai-char" style={{-AiIndex: '10'}}>h</span><span className="ai-char" style={{-AiIndex: '11'}}>o</span><span className="ai-char" style={{-AiIndex: '12'}}>t</span><span className="ai-char" style={{-AiIndex: '13'}}>o</span><span className="ai-char" style={{-AiIndex: '14'}}>g</span><span className="ai-char" style={{-AiIndex: '15'}}>r</span><span className="ai-char" style={{-AiIndex: '16'}}>a</span><span className="ai-char" style={{-AiIndex: '17'}}>p</span><span className="ai-char" style={{-AiIndex: '18'}}>h</span><span className="ai-char" style={{-AiIndex: '19'}}>y</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Capturing</span> <span className="ai-word" style={{-AiIndex: '1'}}>the</span> <span className="ai-word" style={{-AiIndex: '2'}}>magic</span> <span className="ai-word" style={{-AiIndex: '3'}}>hour</span> <span className="ai-word" style={{-AiIndex: '4'}}>glow</span> <span className="ai-word" style={{-AiIndex: '5'}}>to</span> <span className="ai-word" style={{-AiIndex: '6'}}>highlight</span> <span className="ai-word" style={{-AiIndex: '7'}}>exterior</span> <span className="ai-word" style={{-AiIndex: '8'}}>features</span> <span className="ai-word" style={{-AiIndex: '9'}}>and</span> <span className="ai-word" style={{-AiIndex: '10'}}>lighting.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-2 gap-4 space-y-4 px-2" id="twilight-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621604/twilightphoto-11_gmmtbp.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621604/twilightphoto-07_wkbdia.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621602/twilightphoto-03_yzdnpz.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621601/twilightphoto-01_srmgwb.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621600/twilight-fullsize-10_nfjs1t.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621599/twilight-fullsize-7_u1r1be.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/twilight-fullsize-2_2_fpms25.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/Twilight-FullSize-1_mog5nn.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766621598/Twilight-FullSize-2_mobfz5.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div></div>
</div>
</div>
</div>
</div>

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)" style={{animationDelay: '0.4s'}}>
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766622421/Screenshot_2025-12-24_at_4.24.06_PM_zbhpqh.png"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:box" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>I</span><span className="ai-char" style={{-AiIndex: '1'}}>m</span><span className="ai-char" style={{-AiIndex: '2'}}>m</span><span className="ai-char" style={{-AiIndex: '3'}}>e</span><span className="ai-char" style={{-AiIndex: '4'}}>r</span><span className="ai-char" style={{-AiIndex: '5'}}>s</span><span className="ai-char" style={{-AiIndex: '6'}}>i</span><span className="ai-char" style={{-AiIndex: '7'}}>v</span><span className="ai-char" style={{-AiIndex: '8'}}>e</span><span className="ai-char" style={{-AiIndex: '9'}}> </span><span className="ai-char" style={{-AiIndex: '10'}}>3</span><span className="ai-char" style={{-AiIndex: '11'}}>D</span><span className="ai-char" style={{-AiIndex: '12'}}> </span><span className="ai-char" style={{-AiIndex: '13'}}>T</span><span className="ai-char" style={{-AiIndex: '14'}}>o</span><span className="ai-char" style={{-AiIndex: '15'}}>u</span><span className="ai-char" style={{-AiIndex: '16'}}>r</span><span className="ai-char" style={{-AiIndex: '17'}}>s</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Matterport</span> <span className="ai-word" style={{-AiIndex: '1'}}>or</span> <span className="ai-word" style={{-AiIndex: '2'}}>custom</span> <span className="ai-word" style={{-AiIndex: '3'}}>3D</span> <span className="ai-word" style={{-AiIndex: '4'}}>walkthroughs</span> <span className="ai-word" style={{-AiIndex: '5'}}>allowing</span> <span className="ai-word" style={{-AiIndex: '6'}}>international</span> <span className="ai-word" style={{-AiIndex: '7'}}>buyers</span> <span className="ai-word" style={{-AiIndex: '8'}}>to</span> <span className="ai-word" style={{-AiIndex: '9'}}>tour</span> <span className="ai-word" style={{-AiIndex: '10'}}>remotely.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-1 gap-4 space-y-4 px-2" id="tours-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766622421/Screenshot_2025-12-24_at_4.24.06_PM_zbhpqh.png"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766622422/Screenshot_2025-12-24_at_4.26.00_PM_vnkhrr.png"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766622422/Screenshot_2025-12-24_at_4.26.17_PM_hnazdb.png"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div></div>
</div>
</div>
</div>
</div>

<div className="expandable-card fade-up-block ai-observe group border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-neutral-900/40 border-neutral-800 hover:border-white/30 ai-active" onclick="toggleCard(this)" style={{animationDelay: '0.5s'}}>
<div className="overflow-hidden w-full h-48 relative bg-neutral-800">
<img className="group-hover:scale-105 transition-all duration-700 w-full h-full object-cover opacity-80 group-hover:opacity-100" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787694/untitled-5_iyyj6s.jpg"/>
</div>
<div className="-mt-8 pt-6 pr-6 pb-8 pl-6 relative">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-4 shadow-lg relative z-10 bg-neutral-800 border-neutral-700 group-hover:scale-110 transition-transform text-white">
<iconify-icon icon="lucide:armchair" width="20"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 chevron-icon relative z-10 backdrop-blur-sm border bg-white/5 text-neutral-400 border-white/5">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-medium mb-2 tracking-tight text-white ai-hover-target ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>V</span><span className="ai-char" style={{-AiIndex: '1'}}>i</span><span className="ai-char" style={{-AiIndex: '2'}}>r</span><span className="ai-char" style={{-AiIndex: '3'}}>t</span><span className="ai-char" style={{-AiIndex: '4'}}>u</span><span className="ai-char" style={{-AiIndex: '5'}}>a</span><span className="ai-char" style={{-AiIndex: '6'}}>l</span><span className="ai-char" style={{-AiIndex: '7'}}> </span><span className="ai-char" style={{-AiIndex: '8'}}>S</span><span className="ai-char" style={{-AiIndex: '9'}}>t</span><span className="ai-char" style={{-AiIndex: '10'}}>a</span><span className="ai-char" style={{-AiIndex: '11'}}>g</span><span className="ai-char" style={{-AiIndex: '12'}}>i</span><span className="ai-char" style={{-AiIndex: '13'}}>n</span><span className="ai-char" style={{-AiIndex: '14'}}>g</span></h3>
<p className="leading-relaxed text-sm text-neutral-500 mb-2 font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Digitally</span> <span className="ai-word" style={{-AiIndex: '1'}}>furnishing</span> <span className="ai-word" style={{-AiIndex: '2'}}>empty</span> <span className="ai-word" style={{-AiIndex: '3'}}>spaces</span> <span className="ai-word" style={{-AiIndex: '4'}}>with</span> <span className="ai-word" style={{-AiIndex: '5'}}>modern</span> <span className="ai-word" style={{-AiIndex: '6'}}>aesthetic</span> <span className="ai-word" style={{-AiIndex: '7'}}>to</span> <span className="ai-word" style={{-AiIndex: '8'}}>help</span> <span className="ai-word" style={{-AiIndex: '9'}}>buyers</span> <span className="ai-word" style={{-AiIndex: '10'}}>visualize</span> <span className="ai-word" style={{-AiIndex: '11'}}>potential.</span></p>
<div className="gallery-content max-h-0 opacity-0 overflow-hidden transition-all duration-500">
<div className="pt-8 border-t mt-6 -mx-2 border-white/10">
<div className="columns-2 gap-4 space-y-4 px-2" id="staging-grid"><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787694/untitled-4_jr2rht.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787694/untitled-5_iyyj6s.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787692/untitled-3_bung1t.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787689/untitled-2_ooaoxd.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div><div className="w-full rounded-lg overflow-hidden border border-white/10 relative group/img cursor-zoom-in bg-neutral-800 break-inside-avoid mb-4"><img className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105 opacity-80 group-hover/img:opacity-100 block" loading="lazy" src="https://res.cloudinary.com/ded3jvles/image/upload/v1766787688/untitled-1_locefw.jpg"/><div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity"></div></div></div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16">
<h3 className="ai-observe text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-8 pl-1 ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>S</span><span className="ai-char" style={{-AiIndex: '1'}}>U</span><span className="ai-char" style={{-AiIndex: '2'}}>P</span><span className="ai-char" style={{-AiIndex: '3'}}>P</span><span className="ai-char" style={{-AiIndex: '4'}}>O</span><span className="ai-char" style={{-AiIndex: '5'}}>R</span><span className="ai-char" style={{-AiIndex: '6'}}>T</span><span className="ai-char" style={{-AiIndex: '7'}}>I</span><span className="ai-char" style={{-AiIndex: '8'}}>N</span><span className="ai-char" style={{-AiIndex: '9'}}>G</span><span className="ai-char" style={{-AiIndex: '10'}}> </span><span className="ai-char" style={{-AiIndex: '11'}}>S</span><span className="ai-char" style={{-AiIndex: '12'}}>E</span><span className="ai-char" style={{-AiIndex: '13'}}>R</span><span className="ai-char" style={{-AiIndex: '14'}}>V</span><span className="ai-char" style={{-AiIndex: '15'}}>I</span><span className="ai-char" style={{-AiIndex: '16'}}>C</span><span className="ai-char" style={{-AiIndex: '17'}}>E</span><span className="ai-char" style={{-AiIndex: '18'}}>S</span></h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl ai-active">
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-white" icon="lucide:layout-template" width="20"></iconify-icon>
<h3 className="text-base font-medium text-white ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>W</span><span className="ai-char" style={{-AiIndex: '1'}}>e</span><span className="ai-char" style={{-AiIndex: '2'}}>b</span><span className="ai-char" style={{-AiIndex: '3'}}>s</span><span className="ai-char" style={{-AiIndex: '4'}}>i</span><span className="ai-char" style={{-AiIndex: '5'}}>t</span><span className="ai-char" style={{-AiIndex: '6'}}>e</span><span className="ai-char" style={{-AiIndex: '7'}}> </span><span className="ai-char" style={{-AiIndex: '8'}}>D</span><span className="ai-char" style={{-AiIndex: '9'}}>e</span><span className="ai-char" style={{-AiIndex: '10'}}>v</span><span className="ai-char" style={{-AiIndex: '11'}}>e</span><span className="ai-char" style={{-AiIndex: '12'}}>l</span><span className="ai-char" style={{-AiIndex: '13'}}>o</span><span className="ai-char" style={{-AiIndex: '14'}}>p</span><span className="ai-char" style={{-AiIndex: '15'}}>m</span><span className="ai-char" style={{-AiIndex: '16'}}>e</span><span className="ai-char" style={{-AiIndex: '17'}}>n</span><span className="ai-char" style={{-AiIndex: '18'}}>t</span></h3>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Dedicated,</span> <span className="ai-word" style={{-AiIndex: '1'}}>SEO-optimized</span> <span className="ai-word" style={{-AiIndex: '2'}}>single-property</span> <span className="ai-word" style={{-AiIndex: '3'}}>sites</span> <span className="ai-word" style={{-AiIndex: '4'}}>to</span> <span className="ai-word" style={{-AiIndex: '5'}}>capture</span> <span className="ai-word" style={{-AiIndex: '6'}}>leads.</span></p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl ai-active" style={{animationDelay: '0.1s'}}>
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-white" icon="lucide:pen-tool" width="20"></iconify-icon>
<h3 className="text-base font-medium text-white ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>F</span><span className="ai-char" style={{-AiIndex: '1'}}>l</span><span className="ai-char" style={{-AiIndex: '2'}}>o</span><span className="ai-char" style={{-AiIndex: '3'}}>o</span><span className="ai-char" style={{-AiIndex: '4'}}>r</span><span className="ai-char" style={{-AiIndex: '5'}}> </span><span className="ai-char" style={{-AiIndex: '6'}}>P</span><span className="ai-char" style={{-AiIndex: '7'}}>l</span><span className="ai-char" style={{-AiIndex: '8'}}>a</span><span className="ai-char" style={{-AiIndex: '9'}}>n</span><span className="ai-char" style={{-AiIndex: '10'}}>s</span></h3>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Precision</span> <span className="ai-word" style={{-AiIndex: '1'}}>2D</span> <span className="ai-word" style={{-AiIndex: '2'}}>schematics</span> <span className="ai-word" style={{-AiIndex: '3'}}>with</span> <span className="ai-word" style={{-AiIndex: '4'}}>dimensions</span> <span className="ai-word" style={{-AiIndex: '5'}}>to</span> <span className="ai-word" style={{-AiIndex: '6'}}>verify</span> <span className="ai-word" style={{-AiIndex: '7'}}>square</span> <span className="ai-word" style={{-AiIndex: '8'}}>footage.</span></p>
</div>
<div className="fade-up-block ai-observe bg-[#0A0A0A] border border-neutral-800 p-6 rounded-xl hover:bg-neutral-900 transition-all group hover:-translate-y-1 hover:shadow-xl ai-active" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4 mb-3">
<iconify-icon className="text-white" icon="lucide:file-text" width="20"></iconify-icon>
<h3 className="text-base font-medium text-white ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>C</span><span className="ai-char" style={{-AiIndex: '1'}}>o</span><span className="ai-char" style={{-AiIndex: '2'}}>p</span><span className="ai-char" style={{-AiIndex: '3'}}>y</span><span className="ai-char" style={{-AiIndex: '4'}}>w</span><span className="ai-char" style={{-AiIndex: '5'}}>r</span><span className="ai-char" style={{-AiIndex: '6'}}>i</span><span className="ai-char" style={{-AiIndex: '7'}}>t</span><span className="ai-char" style={{-AiIndex: '8'}}>i</span><span className="ai-char" style={{-AiIndex: '9'}}>n</span><span className="ai-char" style={{-AiIndex: '10'}}>g</span></h3>
</div>
<p className="text-sm text-neutral-500 leading-relaxed font-light ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>Persuasive</span> <span className="ai-word" style={{-AiIndex: '1'}}>listing</span> <span className="ai-word" style={{-AiIndex: '2'}}>copy</span> <span className="ai-word" style={{-AiIndex: '3'}}>written</span> <span className="ai-word" style={{-AiIndex: '4'}}>by</span> <span className="ai-word" style={{-AiIndex: '5'}}>luxury</span> <span className="ai-word" style={{-AiIndex: '6'}}>specialists.</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 relative overflow-hidden" id="results">

<div className="section-number top-24 right-6 md:right-12">03</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="mb-16" data-parallax-speed="0.04">
<span className="ai-observe text-white font-semibold text-xs tracking-widest uppercase mb-3 block ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>RESULTS</span></span>
<h2 className="ai-observe ai-hover-target text-3xl md:text-4xl tracking-tight mb-4 font-semibold text-white ai-content ai-processed ai-active"><span className="ai-char" style={{-AiIndex: '0'}}>R</span><span className="ai-char" style={{-AiIndex: '1'}}>e</span><span className="ai-char" style={{-AiIndex: '2'}}>s</span><span className="ai-char" style={{-AiIndex: '3'}}>u</span><span className="ai-char" style={{-AiIndex: '4'}}>l</span><span className="ai-char" style={{-AiIndex: '5'}}>t</span><span className="ai-char" style={{-AiIndex: '6'}}>s</span><span className="ai-char" style={{-AiIndex: '7'}}> </span><span className="ai-char" style={{-AiIndex: '8'}}>T</span><span className="ai-char" style={{-AiIndex: '9'}}>h</span><span className="ai-char" style={{-AiIndex: '10'}}>a</span><span className="ai-char" style={{-AiIndex: '11'}}>t</span><span className="ai-char" style={{-AiIndex: '12'}}> </span><span className="ai-char" style={{-AiIndex: '13'}}>B</span><span className="ai-char" style={{-AiIndex: '14'}}>u</span><span className="ai-char" style={{-AiIndex: '15'}}>i</span><span className="ai-char" style={{-AiIndex: '16'}}>l</span><span className="ai-char" style={{-AiIndex: '17'}}>d</span><span className="ai-char" style={{-AiIndex: '18'}}> </span><span className="ai-char" style={{-AiIndex: '19'}}>R</span><span className="ai-char" style={{-AiIndex: '20'}}>e</span><span className="ai-char" style={{-AiIndex: '21'}}>p</span><span className="ai-char" style={{-AiIndex: '22'}}>u</span><span className="ai-char" style={{-AiIndex: '23'}}>t</span><span className="ai-char" style={{-AiIndex: '24'}}>a</span><span className="ai-char" style={{-AiIndex: '25'}}>t</span><span className="ai-char" style={{-AiIndex: '26'}}>i</span><span className="ai-char" style={{-AiIndex: '27'}}>o</span><span className="ai-char" style={{-AiIndex: '28'}}>n</span><span className="ai-char" style={{-AiIndex: '29'}}>s</span></h2>
<p className="ai-observe ai-content ai-processed ai-active font-light text-neutral-400 max-w-2xl mx-auto px-2"><span className="ai-word" style={{-AiIndex: '0'}}>We</span> <span className="ai-word" style={{-AiIndex: '1'}}>understand</span> <span className="ai-word" style={{-AiIndex: '2'}}>that</span> <span className="ai-word" style={{-AiIndex: '3'}}>for</span> <span className="ai-word" style={{-AiIndex: '4'}}>agents</span> <span className="ai-word" style={{-AiIndex: '5'}}>with</span> <span className="ai-word" style={{-AiIndex: '6'}}>5+</span> <span className="ai-word" style={{-AiIndex: '7'}}>years</span> <span className="ai-word" style={{-AiIndex: '8'}}>of</span> <span className="ai-word" style={{-AiIndex: '9'}}>experience,</span> <span className="ai-word" style={{-AiIndex: '10'}}>marketing</span> <span className="ai-word" style={{-AiIndex: '11'}}>isn't</span> <span className="ai-word" style={{-AiIndex: '12'}}>just</span> <span className="ai-word" style={{-AiIndex: '13'}}>about</span> <span className="ai-word" style={{-AiIndex: '14'}}>the</span> <span className="ai-word" style={{-AiIndex: '15'}}>current</span> <span className="ai-word" style={{-AiIndex: '16'}}>listing—it's</span> <span className="ai-word" style={{-AiIndex: '17'}}>about</span> <span className="ai-word" style={{-AiIndex: '18'}}>securing</span> <span className="ai-word" style={{-AiIndex: '19'}}>the</span> <span className="ai-word" style={{-AiIndex: '20'}}>next</span> <span className="ai-word" style={{-AiIndex: '21'}}>three.</span></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-neutral-800"></div>
<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 ai-active">
<div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-white/5"></div>
<div className="relative z-10">
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-white" icon="lucide:quote" width="32"></iconify-icon>
<span className="px-3 py-1 text-xs font-semibold rounded uppercase tracking-wider bg-white/10 text-white">
                  $200k Over Asking
                </span>
</div>
<p className="leading-relaxed text-lg font-light text-neutral-300 mb-8 ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>"We</span> <span className="ai-word" style={{-AiIndex: '1'}}>sold</span> <span className="ai-word" style={{-AiIndex: '2'}}>one</span> <span className="ai-word" style={{-AiIndex: '3'}}>of</span> <span className="ai-word" style={{-AiIndex: '4'}}>our</span> <span className="ai-word" style={{-AiIndex: '5'}}>real</span> <span className="ai-word" style={{-AiIndex: '6'}}>estate</span> <span className="ai-word" style={{-AiIndex: '7'}}>property</span> <span className="ai-word" style={{-AiIndex: '8'}}>listings</span> <span className="ai-word" style={{-AiIndex: '9'}}>at</span> <span className="ai-word" style={{-AiIndex: '10'}}>$200k</span> <span className="ai-word" style={{-AiIndex: '11'}}>over</span> <span className="ai-word" style={{-AiIndex: '12'}}>asking</span> <span className="ai-word" style={{-AiIndex: '13'}}>in</span> <span className="ai-word" style={{-AiIndex: '14'}}>less</span> <span className="ai-word" style={{-AiIndex: '15'}}>than</span> <span className="ai-word" style={{-AiIndex: '16'}}>a</span> <span className="ai-word" style={{-AiIndex: '17'}}>week</span> <span className="ai-word" style={{-AiIndex: '18'}}>.</span> <span className="ai-word" style={{-AiIndex: '19'}}>Francis's</span> <span className="ai-word" style={{-AiIndex: '20'}}>services</span> <span className="ai-word" style={{-AiIndex: '21'}}>completely</span> <span className="ai-word" style={{-AiIndex: '22'}}>transformed</span> <span className="ai-word" style={{-AiIndex: '23'}}>my</span> <span className="ai-word" style={{-AiIndex: '24'}}>business</span> <span className="ai-word" style={{-AiIndex: '25'}}>model."</span></p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium border bg-neutral-900 text-white border-neutral-700">
                  ML
                </div>
<div>
<div className="text-sm font-medium text-white">Melissa L.</div>
<div className="text-neutral-500 text-xs uppercase tracking-wide">
                    Top Producing Realtor
                  </div>
</div>
</div>
</div>
</div>
<div className="fade-up-block ai-observe group relative bg-[#080808] border border-neutral-800 p-8 lg:p-10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/30 ai-active" style={{animationDelay: '0.1s'}}>
<div className="absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 from-white/10"></div>
<div className="relative z-10">
<div className="mb-6 flex justify-between items-start">
<iconify-icon className="text-white" icon="lucide:quote" width="32"></iconify-icon>
<span className="px-3 py-1 text-xs font-semibold rounded uppercase tracking-wider bg-white/10 text-white">
                  19% Over Ask
                </span>
</div>
<p className="leading-relaxed text-lg font-light text-neutral-300 mb-8 ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>"Just</span> <span className="ai-word" style={{-AiIndex: '1'}}>closed</span> <span className="ai-word" style={{-AiIndex: '2'}}>a</span> <span className="ai-word" style={{-AiIndex: '3'}}>deal</span> <span className="ai-word" style={{-AiIndex: '4'}}>for</span> <span className="ai-word" style={{-AiIndex: '5'}}>$6.3</span> <span className="ai-word" style={{-AiIndex: '6'}}>million,</span> <span className="ai-word" style={{-AiIndex: '7'}}>19%</span> <span className="ai-word" style={{-AiIndex: '8'}}>over</span> <span className="ai-word" style={{-AiIndex: '9'}}>asking</span> <span className="ai-word" style={{-AiIndex: '10'}}>thanks</span> <span className="ai-word" style={{-AiIndex: '11'}}>to</span> <span className="ai-word" style={{-AiIndex: '12'}}>Francis's</span> <span className="ai-word" style={{-AiIndex: '13'}}>marketing</span> <span className="ai-word" style={{-AiIndex: '14'}}>efforts.</span> <span className="ai-word" style={{-AiIndex: '15'}}>The</span> <span className="ai-word" style={{-AiIndex: '16'}}>cinematic</span> <span className="ai-word" style={{-AiIndex: '17'}}>video</span> <span className="ai-word" style={{-AiIndex: '18'}}>was</span> <span className="ai-word" style={{-AiIndex: '19'}}>the</span> <span className="ai-word" style={{-AiIndex: '20'}}>highlight!"</span></p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-medium border bg-neutral-900 text-white border-neutral-700">
                  BB
                </div>
<div>
<div className="text-sm font-medium text-white">Beth B.</div>
<div className="text-neutral-500 text-xs uppercase tracking-wide">
                    Luxury Estate Agent
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-900 relative" id="process">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<span className="ai-observe font-semibold text-xs tracking-widest uppercase mb-4 block text-white ai-content ai-processed ai-active"><span className="ai-word" style={{-AiIndex: '0'}}>WORKFLOW</span></span>
<h2 className="ai-observe ai-hover-target md:text-4xl text-3xl font-semibold tracking-tight mb-16 text-white ai-active">
          Seamless Production
          <br/>
          in 3 Steps.
        </h2>
<div className="grid lg:grid-cols-3 gap-8">
<div className="fade-up-block ai-observe group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 transition-all hover:border-white/30">
<div className="text-6xl font-bold text-neutral-800 mb-6 transition-colors select-none group-hover:text-white/20">
              01
            </div>
<h3 className="text-xl font-medium mb-3 text-white ai-content ai-processed"><span className="ai-char" style={{-AiIndex: '0'}}>Q</span><span className="ai-char" style={{-AiIndex: '1'}}>u</span><span className="ai-char" style={{-AiIndex: '2'}}>o</span><span className="ai-char" style={{-AiIndex: '3'}}>t</span><span className="ai-char" style={{-AiIndex: '4'}}>e</span><span className="ai-char" style={{-AiIndex: '5'}}> </span><span className="ai-char" style={{-AiIndex: '6'}}>&amp;</span><span className="ai-char" style={{-AiIndex: '7'}}> </span><span className="ai-char" style={{-AiIndex: '8'}}>C</span><span className="ai-char" style={{-AiIndex: '9'}}>o</span><span className="ai-char" style={{-AiIndex: '10'}}>n</span><span className="ai-char" style={{-AiIndex: '11'}}>s</span><span className="ai-char" style={{-AiIndex: '12'}}>u</span><span className="ai-char" style={{-AiIndex: '13'}}>l</span><span className="ai-char" style={{-AiIndex: '14'}}>t</span></h3>
<p className="text-neutral-400 font-light leading-relaxed ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Fill</span> <span className="ai-word" style={{-AiIndex: '1'}}>out</span> <span className="ai-word" style={{-AiIndex: '2'}}>our</span> <span className="ai-word" style={{-AiIndex: '3'}}>brief</span> <span className="ai-word" style={{-AiIndex: '4'}}>form.</span> <span className="ai-word" style={{-AiIndex: '5'}}>We</span> <span className="ai-word" style={{-AiIndex: '6'}}>analyze</span> <span className="ai-word" style={{-AiIndex: '7'}}>the</span> <span className="ai-word" style={{-AiIndex: '8'}}>property</span> <span className="ai-word" style={{-AiIndex: '9'}}>specs</span> <span className="ai-word" style={{-AiIndex: '10'}}>and</span> <span className="ai-word" style={{-AiIndex: '11'}}>provide</span> <span className="ai-word" style={{-AiIndex: '12'}}>a</span> <span className="ai-word" style={{-AiIndex: '13'}}>bespoke</span> <span className="ai-word" style={{-AiIndex: '14'}}>quote</span> <span className="ai-word" style={{-AiIndex: '15'}}>tailored</span> <span className="ai-word" style={{-AiIndex: '16'}}>to</span> <span className="ai-word" style={{-AiIndex: '17'}}>the</span> <span className="ai-word" style={{-AiIndex: '18'}}>listing's</span> <span className="ai-word" style={{-AiIndex: '19'}}>potential.</span></p>
</div>
<div className="fade-up-block ai-observe group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 transition-all hover:border-white/30" style={{animationDelay: '0.1s'}}>
<div className="text-6xl font-bold text-neutral-800 mb-6 transition-colors select-none group-hover:text-white/20">
              02
            </div>
<h3 className="text-xl font-medium mb-3 text-white ai-content ai-processed"><span className="ai-char" style={{-AiIndex: '0'}}>P</span><span className="ai-char" style={{-AiIndex: '1'}}>r</span><span className="ai-char" style={{-AiIndex: '2'}}>o</span><span className="ai-char" style={{-AiIndex: '3'}}>d</span><span className="ai-char" style={{-AiIndex: '4'}}>u</span><span className="ai-char" style={{-AiIndex: '5'}}>c</span><span className="ai-char" style={{-AiIndex: '6'}}>t</span><span className="ai-char" style={{-AiIndex: '7'}}>i</span><span className="ai-char" style={{-AiIndex: '8'}}>o</span><span className="ai-char" style={{-AiIndex: '9'}}>n</span></h3>
<p className="text-neutral-400 font-light leading-relaxed ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Our</span> <span className="ai-word" style={{-AiIndex: '1'}}>specialized</span> <span className="ai-word" style={{-AiIndex: '2'}}>team</span> <span className="ai-word" style={{-AiIndex: '3'}}>deploys</span> <span className="ai-word" style={{-AiIndex: '4'}}>to</span> <span className="ai-word" style={{-AiIndex: '5'}}>the</span> <span className="ai-word" style={{-AiIndex: '6'}}>site.</span> <span className="ai-word" style={{-AiIndex: '7'}}>We</span> <span className="ai-word" style={{-AiIndex: '8'}}>execute</span> <span className="ai-word" style={{-AiIndex: '9'}}>the</span> <span className="ai-word" style={{-AiIndex: '10'}}>entire</span> <span className="ai-word" style={{-AiIndex: '11'}}>shoot</span> <span className="ai-word" style={{-AiIndex: '12'}}>in</span> <span className="ai-word" style={{-AiIndex: '13'}}>one</span> <span className="ai-word" style={{-AiIndex: '14'}}>seamless</span> <span className="ai-word" style={{-AiIndex: '15'}}>visit</span> <span className="ai-word" style={{-AiIndex: '16'}}>to</span> <span className="ai-word" style={{-AiIndex: '17'}}>minimize</span> <span className="ai-word" style={{-AiIndex: '18'}}>disruption.</span></p>
</div>
<div className="fade-up-block ai-observe group p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800 transition-all hover:border-white/30" style={{animationDelay: '0.2s'}}>
<div className="text-6xl font-bold text-neutral-800 mb-6 transition-colors select-none group-hover:text-white/20">
              03
            </div>
<h3 className="text-xl font-medium mb-3 text-white ai-content ai-processed"><span className="ai-char" style={{-AiIndex: '0'}}>D</span><span className="ai-char" style={{-AiIndex: '1'}}>e</span><span className="ai-char" style={{-AiIndex: '2'}}>l</span><span className="ai-char" style={{-AiIndex: '3'}}>i</span><span className="ai-char" style={{-AiIndex: '4'}}>v</span><span className="ai-char" style={{-AiIndex: '5'}}>e</span><span className="ai-char" style={{-AiIndex: '6'}}>r</span><span className="ai-char" style={{-AiIndex: '7'}}>y</span><span className="ai-char" style={{-AiIndex: '8'}}> </span><span className="ai-char" style={{-AiIndex: '9'}}>&amp;</span><span className="ai-char" style={{-AiIndex: '10'}}> </span><span className="ai-char" style={{-AiIndex: '11'}}>L</span><span className="ai-char" style={{-AiIndex: '12'}}>a</span><span className="ai-char" style={{-AiIndex: '13'}}>u</span><span className="ai-char" style={{-AiIndex: '14'}}>n</span><span className="ai-char" style={{-AiIndex: '15'}}>c</span><span className="ai-char" style={{-AiIndex: '16'}}>h</span></h3>
<p className="text-neutral-400 font-light leading-relaxed ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Receive</span> <span className="ai-word" style={{-AiIndex: '1'}}>your</span> <span className="ai-word" style={{-AiIndex: '2'}}>full</span> <span className="ai-word" style={{-AiIndex: '3'}}>suite</span> <span className="ai-word" style={{-AiIndex: '4'}}>of</span> <span className="ai-word" style={{-AiIndex: '5'}}>assets,</span> <span className="ai-word" style={{-AiIndex: '6'}}>ready</span> <span className="ai-word" style={{-AiIndex: '7'}}>for</span> <span className="ai-word" style={{-AiIndex: '8'}}>MLS</span> <span className="ai-word" style={{-AiIndex: '9'}}>upload</span> <span className="ai-word" style={{-AiIndex: '10'}}>and</span> <span className="ai-word" style={{-AiIndex: '11'}}>social</span> <span className="ai-word" style={{-AiIndex: '12'}}>campaigns,</span> <span className="ai-word" style={{-AiIndex: '13'}}>typically</span> <span className="ai-word" style={{-AiIndex: '14'}}>within</span> <span className="ai-word" style={{-AiIndex: '15'}}>24</span> <span className="ai-word" style={{-AiIndex: '16'}}>hours.</span></p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden py-24 relative border-t border-neutral-900" id="quote">

<div className="section-number top-24 left-6 md:left-12">04</div>
<div className="grid grid-cols-1 lg:grid-cols-5 max-w-7xl mx-auto px-6 gap-x-16 gap-y-16 relative z-10">
<div className="lg:col-span-2 flex flex-col justify-start pt-4 lg:pt-8">
<span className="ai-observe font-semibold text-xs tracking-widest uppercase mb-4 block text-white ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>GET</span> <span className="ai-word" style={{-AiIndex: '1'}}>STARTED</span></span>
<h2 className="ai-observe ai-hover-target md:text-4xl text-3xl tracking-tight mb-6 font-semibold text-white">
            Request Your
            <br/>
            Custom Quote
          </h2>
<p className="ai-observe leading-relaxed font-light mb-8 text-neutral-400 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Tell</span> <span className="ai-word" style={{-AiIndex: '1'}}>us</span> <span className="ai-word" style={{-AiIndex: '2'}}>about</span> <span className="ai-word" style={{-AiIndex: '3'}}>your</span> <span className="ai-word" style={{-AiIndex: '4'}}>listing,</span> <span className="ai-word" style={{-AiIndex: '5'}}>and</span> <span className="ai-word" style={{-AiIndex: '6'}}>we</span> <span className="ai-word" style={{-AiIndex: '7'}}>will</span> <span className="ai-word" style={{-AiIndex: '8'}}>provide</span> <span className="ai-word" style={{-AiIndex: '9'}}>a</span> <span className="ai-word" style={{-AiIndex: '10'}}>tailored</span> <span className="ai-word" style={{-AiIndex: '11'}}>proposal</span> <span className="ai-word" style={{-AiIndex: '12'}}>within</span> <span className="ai-word" style={{-AiIndex: '13'}}>24</span> <span className="ai-word" style={{-AiIndex: '14'}}>hours.</span></p>
<div className="flex flex-col gap-4 ai-observe">
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-white" icon="lucide:check" strokeWidth="2"></iconify-icon>
<span>Simple, transparent pricing based on Sq Ft</span>
</div>
<div className="flex gap-3 text-sm gap-x-3 gap-y-3 items-center text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" strokeWidth="2"></iconify-icon>
<span>Next-day delivery for easy MLS upload</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-emerald-500" icon="lucide:check" strokeWidth="2"></iconify-icon>
<span>Preferred scheduling for retained clients</span>
</div>
</div>
</div>
<div className="lg:col-span-3">
<form className="fade-up-block ai-observe border border-neutral-800 rounded-2xl p-8 bg-neutral-900/60 backdrop-blur-xl flex flex-col gap-6 shadow-2xl shadow-white/5">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>NAME</span>
<span className="ai-word" style={{-AiIndex: '1'}}>(required)</span></label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="First Name" type="text"/>
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="Last Name" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>EMAIL</span> <span className="ai-word" style={{-AiIndex: '1'}}>ADDRESS</span>
<span className="ai-word" style={{-AiIndex: '2'}}>(required)</span></label>
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="agent@agency.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>PHONE</span>
<span className="ai-word" style={{-AiIndex: '1'}}>(required)</span></label>
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="(555) 000-0000" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>PROPERTY</span> <span className="ai-word" style={{-AiIndex: '1'}}>ADDRESS</span>
<span className="ai-word" style={{-AiIndex: '2'}}>(required)</span></label>
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="123 Luxury Lane, Marin, CA" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>PROPERTY</span> <span className="ai-word" style={{-AiIndex: '1'}}>SQUARE</span> <span className="ai-word" style={{-AiIndex: '2'}}>FOOTAGE</span>
<span className="ai-word" style={{-AiIndex: '3'}}>(required)</span></label>
<input className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white" placeholder="e.g. 3,500 sq ft" type="text"/>
</div>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>SERVICES</span> <span className="ai-word" style={{-AiIndex: '1'}}>BOOKED</span> <span className="ai-word" style={{-AiIndex: '2'}}>-</span> <span className="ai-word" style={{-AiIndex: '3'}}>SELECT</span> <span className="ai-word" style={{-AiIndex: '4'}}>ALL</span> <span className="ai-word" style={{-AiIndex: '5'}}>THAT</span> <span className="ai-word" style={{-AiIndex: '6'}}>APPLY</span>
<span className="ai-word" style={{-AiIndex: '7'}}>(required)</span></label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Interior/Exterior Photos
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Cinematic Video
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Aerial Drone Photos
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Aerial Drone Video
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    3D Virtual Tour (Matterport)
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    2D Floor Plan
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Single Listing Website
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Home Intro/Outro
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Twilight Photos
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Virtual staging
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Premiere Package (photo/video, drone, 3D/2D, website)
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Not sure yet - set up consultation call
                  </span>
</label>
<label className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors border-neutral-800 bg-black hover:bg-neutral-900 group">
<input className="mt-1 w-4 h-4 rounded border-neutral-700 bg-neutral-900 text-white accent-white focus:ring-offset-black" type="checkbox"/>
<span className="text-sm text-neutral-400 group-hover:text-neutral-300">
                    Other
                  </span>
</label>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>HOW</span> <span className="ai-word" style={{-AiIndex: '1'}}>SOON</span> <span className="ai-word" style={{-AiIndex: '2'}}>DO</span> <span className="ai-word" style={{-AiIndex: '3'}}>YOU</span> <span className="ai-word" style={{-AiIndex: '4'}}>NEED</span> <span className="ai-word" style={{-AiIndex: '5'}}>THE</span> <span className="ai-word" style={{-AiIndex: '6'}}>PROJECT</span> <span className="ai-word" style={{-AiIndex: '7'}}>COMPLETED?</span>
<span className="ai-word" style={{-AiIndex: '8'}}>(required)</span></label>
<p className="text-[11px] text-neutral-500 leading-tight mb-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Please</span> <span className="ai-word" style={{-AiIndex: '1'}}>list</span> <span className="ai-word" style={{-AiIndex: '2'}}>your</span> <span className="ai-word" style={{-AiIndex: '3'}}>availability</span> <span className="ai-word" style={{-AiIndex: '4'}}>below</span> <span className="ai-word" style={{-AiIndex: '5'}}>and</span> <span className="ai-word" style={{-AiIndex: '6'}}>we'll</span> <span className="ai-word" style={{-AiIndex: '7'}}>do</span> <span className="ai-word" style={{-AiIndex: '8'}}>our</span> <span className="ai-word" style={{-AiIndex: '9'}}>best</span> <span className="ai-word" style={{-AiIndex: '10'}}>to</span> <span className="ai-word" style={{-AiIndex: '11'}}>accommodate.</span></p>
<textarea className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white min-h-[80px]"></textarea>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider flex items-center gap-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>ADDITIONAL</span> <span className="ai-word" style={{-AiIndex: '1'}}>NOTES</span></label>
<p className="text-[11px] text-neutral-500 leading-tight mb-1 ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>Please</span> <span className="ai-word" style={{-AiIndex: '1'}}>list</span> <span className="ai-word" style={{-AiIndex: '2'}}>any</span> <span className="ai-word" style={{-AiIndex: '3'}}>additional</span> <span className="ai-word" style={{-AiIndex: '4'}}>notes/details</span> <span className="ai-word" style={{-AiIndex: '5'}}>regarding</span> <span className="ai-word" style={{-AiIndex: '6'}}>the</span> <span className="ai-word" style={{-AiIndex: '7'}}>booking</span> <span className="ai-word" style={{-AiIndex: '8'}}>or</span> <span className="ai-word" style={{-AiIndex: '9'}}>project.</span> <span className="ai-word" style={{-AiIndex: '10'}}>This</span> <span className="ai-word" style={{-AiIndex: '11'}}>may</span> <span className="ai-word" style={{-AiIndex: '12'}}>include</span> <span className="ai-word" style={{-AiIndex: '13'}}>specific</span> <span className="ai-word" style={{-AiIndex: '14'}}>details</span> <span className="ai-word" style={{-AiIndex: '15'}}>to</span> <span className="ai-word" style={{-AiIndex: '16'}}>document</span> <span className="ai-word" style={{-AiIndex: '17'}}>or</span> <span className="ai-word" style={{-AiIndex: '18'}}>avoid,</span> <span className="ai-word" style={{-AiIndex: '19'}}>amenities,</span> <span className="ai-word" style={{-AiIndex: '20'}}>etc.</span></p>
<textarea className="bg-black border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all placeholder:text-neutral-700 text-white min-h-[100px]"></textarea>
</div>
<button className="w-full font-semibold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2 shadow-lg bg-black text-white border border-neutral-800 hover:bg-neutral-900 ai-hover-target" type="button">
              Submit Request
              <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-black text-white pt-20 pb-10 relative z-10 border-t border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 ai-observe">
<div className="flex items-center gap-2">
<span className="text-xl font-bold tracking-tight">
              DIGITAL
              <span className="">PATHWAY</span>
</span>
</div>
<div className="flex gap-8 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">
              Services
            </a>
<a className="hover:text-white transition-colors" href="#results">
              Results
            </a>
<a className="hover:text-white transition-colors" href="#process">
              Process
            </a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors border border-neutral-800" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center hover:bg-neutral-800 transition-colors border border-neutral-800" href="#">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-600 ai-observe">
<p className="ai-content ai-processed"><span className="ai-word" style={{-AiIndex: '0'}}>©</span> <span className="ai-word" style={{-AiIndex: '1'}}>2026</span> <span className="ai-word" style={{-AiIndex: '2'}}>Digital</span> <span className="ai-word" style={{-AiIndex: '3'}}>Pathway.</span> <span className="ai-word" style={{-AiIndex: '4'}}>All</span> <span className="ai-word" style={{-AiIndex: '5'}}>rights</span> <span className="ai-word" style={{-AiIndex: '6'}}>reserved.</span></p>
<div className="flex gap-6">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
