import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



          (function() {
              var container = document.getElementById('marquee-container');
              var track = document.getElementById('services-track');
              if (!container || !track) return;

              // Ensure initial scroll position is reset to 0 on load
              container.scrollLeft = 0;

              var scrollSpeed = 0.5;
              var currentSpeed = scrollSpeed;
              var isHovered = false;
              var isDragging = false;
              var startX = 0;
              var scrollLeftStart = 0;
              var rafId = null;
              var isVisible = false;

              function autoScroll() {
                  if (!isVisible) {
                      rafId = null;
                      return;
                  }
                  if (!isDragging) {
                      container.scrollLeft += currentSpeed;
                      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                          container.scrollLeft = 0;
                      }
                  }
                  rafId = requestAnimationFrame(autoScroll);
              }

              container.addEventListener('mouseenter', function() {
                  isHovered = true;
                  currentSpeed = 0;
              });

              container.addEventListener('mouseleave', function() {
                  isHovered = false;
                  isDragging = false;
                  currentSpeed = scrollSpeed;
              });

              container.addEventListener('mousedown', function(e) {
                  isDragging = true;
                  startX = e.pageX - container.offsetLeft;
                  scrollLeftStart = container.scrollLeft;
                  container.style.cursor = 'grabbing';
              });

              container.addEventListener('mouseup', function() {
                  isDragging = false;
                  container.style.cursor = '';
              });

              container.addEventListener('mousemove', function(e) {
                  if (!isDragging) return;
                  e.preventDefault();
                  var x = e.pageX - container.offsetLeft;
                  var walk = (x - startX) * 1.5;
                  container.scrollLeft = scrollLeftStart - walk;
              });

              container.addEventListener('touchstart', function() {
                  currentSpeed = 0;
              }, {passive: true});

              container.addEventListener('touchend', function() {
                  setTimeout(function() { currentSpeed = scrollSpeed; }, 2000);
              }, {passive: true});

              var observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                      if (entry.isIntersecting) {
                          isVisible = true;
                          if (!rafId) {
                              rafId = requestAnimationFrame(autoScroll);
                          }
                      } else {
                          isVisible = false;
                      }
                  });
              }, { threshold: 0.4 });

              observer.observe(container);
          })();
        


          (function() {
            const mediaContainer = document.getElementById('client-media');
            const clients = document.querySelectorAll('.client-item');
            if (!mediaContainer || clients.length === 0) return;

            let activeIndex = -1;

            const updateMedia = (index) => {
              if (index === activeIndex) return;
              activeIndex = index;

              const client = clients[index];
              const type = client.getAttribute('data-type');
              const src = client.getAttribute('data-src');

              // Update styling: set active client to brand red
              clients.forEach((c, i) => {
                if (i === index) {
                  c.classList.add('active');
                  c.style.color = '#E1062C';
                  c.style.opacity = '1';
                } else {
                  c.classList.remove('active');
                  c.style.color = '';
                  c.style.opacity = '';
                }
              });

              // Create new media element
              let newMedia;
              if (type === 'video') {
                newMedia = document.createElement('video');
                newMedia.src = src;
                newMedia.autoplay = true;
                newMedia.muted = true;
                newMedia.loop = true;
                newMedia.playsInline = true;
              } else {
                newMedia = document.createElement('img');
                newMedia.src = src;
              }

              newMedia.className = 'absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out opacity-0 scale-[1.02]';
              mediaContainer.appendChild(newMedia);

              // Force reflow for animation
              void newMedia.offsetWidth;

              // Animate in the new media element
              newMedia.classList.remove('opacity-0', 'scale-[1.02]');
              newMedia.classList.add('opacity-100', 'scale-100');

              // Animate out and remove old media elements (handling rapid scrolls)
              const oldChildren = Array.from(mediaContainer.children).filter(child => child !== newMedia);
              oldChildren.forEach(old => {
                old.classList.remove('opacity-100', 'scale-100');
                old.classList.add('opacity-0');
                setTimeout(() => {
                  if (old.parentNode === mediaContainer) {
                    mediaContainer.removeChild(old);
                  }
                }, 350); // Slightly longer than 300ms transition duration
              });
            };

            const observerOptions = {
              root: null,
              rootMargin: "-45% 0px -45% 0px",
              threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  const index = Array.from(clients).indexOf(entry.target);
                  if (index !== -1) updateMedia(index);
                }
              });
            }, observerOptions);

            clients.forEach((client, i) => {
              observer.observe(client);
              // Fallback for click events
              client.addEventListener('click', () => updateMedia(i));
            });

            // Initialize first client
            updateMedia(0);
          })();
        


        (function() {
            const section = document.querySelector('[data-element-id="aura-emmduyr2whbgolew"]');
            if (!section) return;

            const mediaContainer = section.querySelector('.media-container');
            const clients = section.querySelectorAll('.client-item');

            let activeIndex = -1;
            const mediaLayers = [];

            // 1. Initialize media elements off-screen / opacity-0
            clients.forEach((client, index) => {
                const type = client.getAttribute('data-type');
                const src = client.getAttribute('data-src');
                const poster = client.getAttribute('data-poster');

                let el;
                if (type === 'video') {
                    el = document.createElement('video');
                    el.src = src;
                    el.muted = true;
                    el.loop = true;
                    el.playsInline = true;
                    el.setAttribute('playsinline', '');
                    el.setAttribute('muted', '');
                    if (poster) el.poster = poster;
                    el.preload = "metadata";
                } else {
                    el = document.createElement('img');
                    el.src = src;
                }

                // Base classes for crossfade scaling transition
                el.className = 'absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out opacity-0 scale-[1.03] z-0';
                mediaContainer.appendChild(el);
                mediaLayers.push(el);

                // 2. Add fallback event listeners
                client.addEventListener('mouseenter', () => setActive(index));
                client.addEventListener('focus', () => setActive(index));
                client.addEventListener('click', () => setActive(index));
            });

            // 3. Define activation logic
            function setActive(index) {
                if (index === activeIndex || index < 0 || index >= clients.length) return;

                // Deactivate current
                if (activeIndex >= 0) {
                    clients[activeIndex].classList.remove('opacity-100');
                    clients[activeIndex].classList.add('text-zinc-600', 'opacity-40');
                    clients[activeIndex].style.color = '';

                    mediaLayers[activeIndex].classList.remove('opacity-100', 'scale-100', 'z-10');
                    mediaLayers[activeIndex].classList.add('opacity-0', 'scale-[1.03]', 'z-0');

                    if (mediaLayers[activeIndex].tagName === 'VIDEO') {
                        mediaLayers[activeIndex].pause();
                    }
                }

                activeIndex = index;

                // Activate new
                clients[activeIndex].classList.remove('text-zinc-600', 'opacity-40');
                clients[activeIndex].classList.add('opacity-100');
                clients[activeIndex].style.color = '#E1062C'; // Brand Red Fallback

                mediaLayers[activeIndex].classList.remove('opacity-0', 'scale-[1.03]', 'z-0');
                mediaLayers[activeIndex].classList.add('opacity-100', 'scale-100', 'z-10');

                if (mediaLayers[activeIndex].tagName === 'VIDEO') {
                    const playPromise = mediaLayers[activeIndex].play();
                    if (playPromise !== undefined) {
                        playPromise.catch(error => {
                            // Autoplay was prevented; common on strict browsers without prior interaction
                            console.log("Autoplay prevented:", error);
                        });
                    }
                }
            }

            // 4. Scroll tracking logic
            function updateActiveClient() {
                const isMobile = window.innerWidth < 768;
                // Offset trigger line based on mobile sticky positioning
                const triggerLine = isMobile ? window.innerHeight * 0.70 : window.innerHeight * 0.5;

                let closestIndex = 0;
                let closestDist = Infinity;

                clients.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.top + rect.height / 2;
                    const dist = Math.abs(itemCenter - triggerLine);

                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIndex = index;
                    }
                });

                setActive(closestIndex);
            }

            // 5. Attach throttled scroll listener
            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        updateActiveClient();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            window.addEventListener('resize', updateActiveClient, { passive: true });

            // Initial call to set state
            setTimeout(updateActiveClient, 100);
        })();
      


              (function() {
                      const numberEl = document.getElementById('process-number');
                      const images = [
                          document.getElementById('step-img-1'),
                          document.getElementById('step-img-2'),
                          document.getElementById('step-img-3')
                      ];

                      // Observer to detect which text step is in view
                      const observer = new IntersectionObserver((entries) => {
                          entries.forEach(entry => {
                              if (entry.isIntersecting) {
                                  const stepStr = entry.target.getAttribute('data-step');
                                  const stepIndex = parseInt(stepStr) - 1;

                                  if (!isNaN(stepIndex) && stepIndex >= 0 && stepIndex < images.length) {
                                      // Update Number with a subtle animation reset
                                      if (numberEl.innerText !== `0${stepIndex + 1}`) {
                                          numberEl.style.opacity = '0';
                                          numberEl.style.transform = 'translateY(10px)';
                                          setTimeout(() => {
                                              numberEl.innerText = `0${stepIndex + 1}`;
                                              numberEl.style.opacity = '1';
                                              numberEl.style.transform = 'translateY(0)';
                                          }, 300);
                                      }

                                      // Update Images
                                      images.forEach((img, index) => {
                                          if (index === stepIndex) {
                                              img.classList.remove('opacity-0', 'scale-105', 'z-0');
                                              img.classList.add('opacity-100', 'scale-100', 'z-10');
                                          } else {
                                              img.classList.remove('opacity-100', 'scale-100', 'z-10');
                                              img.classList.add('opacity-0', 'scale-105', 'z-0');
                                          }
                                      });
                                  }
                              }
                          });
                      }, {
                          rootMargin: '-40% 0px -40% 0px',
                          threshold: 0.1
                      });

                      // Find and observe the process steps (located in the sibling column)
                      // Using a slight delay to ensure DOM is ready if injected dynamically
                      setTimeout(() => {
                          const steps = document.querySelectorAll('.process-step');
                          steps.forEach(step => observer.observe(step));
                      }, 100);
                  })();
            


        (function() {
            const section = document.querySelector('[data-element-id="aura-emmdsj7wvkbie8uo"]');
            if (!section) return;

            const items = section.querySelectorAll('.client-item');
            const deskImgs = section.querySelectorAll('.client-img-desk');
            const mobImgs = section.querySelectorAll('.client-img-mob');
            let activeIndex = -1;

            function updateActiveClient() {
                const isMobile = window.innerWidth < 768;
                // Offset the trigger line to account for sticky elements
                const triggerLine = isMobile ? window.innerHeight * 0.75 : window.innerHeight * 0.5;

                let closestIndex = 0;
                let closestDist = Infinity;

                items.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.top + rect.height / 2;
                    const dist = Math.abs(itemCenter - triggerLine);

                    if (dist < closestDist) {
                        closestDist = dist;
                        closestIndex = index;
                    }
                });

                if (closestIndex !== activeIndex) {
                    activeIndex = closestIndex;

                    // Update Text
                    items.forEach((item, index) => {
                        if (index === activeIndex) {
                            item.classList.remove('text-zinc-600', 'opacity-40');
                            item.classList.add('text-red-500', 'opacity-100');
                        } else {
                            item.classList.remove('text-red-500', 'opacity-100');
                            item.classList.add('text-zinc-600', 'opacity-40');
                        }
                    });

                    // Update Media
                    const updateImages = (imgs) => {
                        imgs.forEach((img, index) => {
                            if (index === activeIndex) {
                                img.style.opacity = '1';
                                img.style.transform = 'scale(1)';
                                img.style.zIndex = '10';
                            } else {
                                img.style.opacity = '0';
                                img.style.transform = 'scale(1.02)';
                                img.style.zIndex = '0';
                            }
                        });
                    };

                    updateImages(deskImgs);
                    updateImages(mobImgs);
                }
            }

            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        updateActiveClient();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });

            window.addEventListener('resize', updateActiveClient, { passive: true });

            // Initial call
            setTimeout(updateActiveClient, 50);
        })();
      


      lucide.createIcons();
    


      (function(){var isTouch=window.matchMedia('(hover:none),(pointer:coarse)').matches||'ontouchstart'in window||navigator.maxTouchPoints>0;var dot=document.getElementById('red-cursor');if(isTouch||!dot){if(dot)dot.style.display='none';return;}var mouseX=window.innerWidth/2,mouseY=window.innerHeight/2,curX=mouseX,curY=mouseY,scale=1,targetScale=1,started=false;window.addEventListener('mousemove',function(e){mouseX=e.clientX;mouseY=e.clientY;if(!started){started=true;curX=mouseX;curY=mouseY;dot.style.opacity='1';}},{passive:true});var interactiveSel='a,button,[role="button"],input,textarea,select,label,.client-item,.redx-card,[onclick]';document.addEventListener('mouseover',function(e){if(e.target.closest&&e.target.closest(interactiveSel)){targetScale=2.15;}},{passive:true});document.addEventListener('mouseout',function(e){if(e.target.closest&&e.target.closest(interactiveSel)){var rel=e.relatedTarget;if(!rel||!(rel.closest&&rel.closest(interactiveSel))){targetScale=1;}}},{passive:true});window.addEventListener('mouseleave',function(){dot.style.opacity='0';},{passive:true});window.addEventListener('mouseenter',function(){if(started)dot.style.opacity='1';},{passive:true});function lerp(a,b,n){return a+(b-a)*n;}function loop(){curX=lerp(curX,mouseX,0.16);curY=lerp(curY,mouseY,0.16);scale=lerp(scale,targetScale,0.12);dot.style.transform='translate('+curX+'px,'+curY+'px) translate(-50%,-50%) scale('+scale+')';requestAnimationFrame(loop);}requestAnimationFrame(loop);})();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(transparent, black 0%, black 80%, transparent)'}}>
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://pub-6a8300e6071e480c930025f0cc9d4a6d.r2.dev/really_exciting_digital_hero_video_v1%20(2160p).mp4"></video>
</div>

<nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-10 md:py-8 flex justify-between items-center pointer-events-none mix-blend-exclusion text-white">
<a className="pointer-events-auto group flex items-baseline gap-1" href="#">
<span className="flex items-center">
<img alt="Company Logo" className="w-auto h-12 max-w-none max-h-none object-contain scale-150" decoding="async" fetchpriority="high" height="48" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/964dfbee-b21d-4d39-b008-45fba5518f3b_800w.png" width="160"/>
</span>
<span className="uppercase group-hover:opacity-100 transition-opacity text-sm font-medium tracking-widest opacity-70"></span>
</a>
<div className="pointer-events-auto hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="uppercase hover:text-white transition-colors text-xs font-medium text-white/70 tracking-widest" href="/about">
          About
        </a>
<a className="px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-normal uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="mailto:anthony@redagencylondon.com">
          Start Project
        </a>
</div>
</nav>

<header className="relative w-full h-[100dvh] md:h-screen min-h-[600px] overflow-hidden bg-zinc-950 flex items-end pb-6 md:pb-8 px-6 md:px-10">

<div className="absolute inset-0 z-0">
<video autoplay="" className="hero-video w-full h-full object-cover opacity-40 scale-105" disablepictureinpicture="" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=20&amp;q=10&amp;blur=50" preload="metadata" webkit-playsinline="">
<source src="https://spark-labs.org/video/reel.webm" type="video/webm"/>
<source src="https://spark-labs.org/video/reel.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
<div className="overflow-hidden bg-zinc-950 absolute top-0 right-0 bottom-0 left-0">
<div className="" style={{position: 'relative', width: '100%', height: '100%', overflow: 'hidden'}}>
<video autoplay="" className="" loop="" muted="" playsinline="" preload="auto" style={{position: 'absolute', top: '50%', left: '50%', minWidth: '100%', minHeight: '100%', width: 'auto', height: 'auto', transform: 'translate(-50%, -50%)', objectFit: 'cover'}}>
<source src="https://pub-6a8300e6071e480c930025f0cc9d4a6d.r2.dev/RED_website_video_final.MP4" type="video/mp4"/>
</video>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none"></div>
<div className="absolute inset-0 z-10 flex flex-col justify-center px-6 md:px-10 pointer-events-none">
<div className="w-full max-w-7xl mx-auto pointer-events-auto">
<h1 className="flex flex-col gap-3 md:gap-4 max-w-5xl animate-fade-in-up"></h1>
</div>
</div>
</div>
</div>
<div className="relative z-10 w-full flex flex-col lg:flex-row lg:justify-between lg:items-end gap-12">
<div className="animate-fade-in-up" onclick="window.location.href='/services-ai-creative'" role="button">
<h1 className="leading-[0.9] md:text-8xl lg:text-4xl text-6xl text-stone-400 tracking-tighter font-bricolage mb-8 lg:mb-0">
            R E D
          </h1>
</div>
<div className="w-full lg:w-[400px] xl:w-[450px] animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<h2 className="text-4xl md:text-5xl font-serif text-white tracking-tight mb-4">
            AI creative agency.
          </h2>
<a className="group inline-flex items-center gap-3 text-white border-b border-white/20 pb-1 hover:border-white transition-all" href="#process">
<span className="text-sm font-medium tracking-wide">
              Explore our process
            </span>
<svg aria-hidden="true" className="lucide lucide-arrow-down-right w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m7 7 10 10"></path>
<path d="M17 7v10H7"></path>
</svg>
</a>
</div>
</div>
</header>

<section className="overflow-hidden bg-zinc-950 border-white/5 border-b pt-2 pb-After2 relative">
<div className="px-6 md:px-10 mb-20 max-w-7xl mx-auto">
<div className="flex flex-col gap-32 w-full">

<div className="flex flex-col pt-32 pb-32 relative items-center justify-center md:pt-5 md:pb-5" style={{minHeight: '70vh'}}>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl rounded-full pointer-events-none" id="headline-glow" style={{height: '300px', background: 'radial-gradient(rgba(220, 38, 38, 0.04), transparent 70%)'}}></div>
<style>
              .red-statement {
                display: inline-flex;
                align-items: baseline;
                justify-content: center;
                flex-wrap: wrap;
                gap: 0.25em;
                font-size: clamp(1.5rem, 3.5vw, 2.75rem);
                font-weight: 500;
                letter-spacing: -0.02em;
                line-height: 1.15;
                color: rgb(244, 244, 245);
                text-align: center;
              }
              .red-with { font-style: italic; }
              .red-cycle {
                position: relative;
                display: inline-block;
                min-width: 7em;
                height: 1.2em;
                text-align: left;
                color: #dc2626;
              }
              .red-cycle span {
                position: absolute;
                left: 0;
                top: 0;
                white-space: nowrap;
                opacity: 0;
                transform: translateY(10px);
                animation: redCycle 10s infinite;
              }
              .red-cycle span:nth-child(1) { animation-delay: 0s; }
              .red-cycle span:nth-child(2) { animation-delay: 2s; }
              .red-cycle span:nth-child(3) { animation-delay: 4s; }
              .red-cycle span:nth-child(4) { animation-delay: 6s; }
              .red-cycle span:nth-child(5) { animation-delay: 8s; }
              @keyframes redCycle {
                0% { opacity: 0; transform: translateY(10px); }
                2% { opacity: 1; transform: translateY(0); }
                18% { opacity: 1; transform: translateY(0); }
                20% { opacity: 0; transform: translateY(-10px); }
                100% { opacity: 0; transform: translateY(-10px); }
              }
              @media (max-width: 768px) {
                .red-statement { font-size: 1.5rem; }
                .red-cycle { min-width: 6em; }
              }
            </style>

<h2 className="z-10 font-pt-serif tracking-tight text-center max-w-3xl mr-auto ml-auto pr-6 pl-6 relative">
<span className="red-statement">
<span className="red-fixed">Really Exciting Digital</span>
<span className="red-with"></span>
<span className="red-cycle">
<span>built to resonate</span>
<span>with intention</span>
<span className="">telling bold Stories</span>
<span className="">built on strategy</span>
<span className="">Responsibility</span>
</span>
</span>
</h2>

<div className="z-10 md:mt-16 mt-12 pr-6 pl-6 relative" style={{maxWidth: '660px'}}>
<p className="leading-relaxed md:text-3xl text-base font-light text-zinc-500 font-sans text-center">
                We work with founders, marketing teams, and growing brands who
                want more than work that looks good, they want work that
                connects, resonates, and performs. AI gives us the speed. Taste,
                strategy, and a proper creative eye make sure it actually lands.
              </p>
</div>
</div>

</div>
</div>
<div className="overflow-x-auto no-scrollbar md:pl-10 active:cursor-grabbing w-full pb-10 pl-6" id="marquee-container">
<div className="flex gap-5 w-max" id="services-track" style={{willChange: 'transform'}}>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/ai-powered-creative" style={{aspectRatio: '3/4'}}>
<img alt="AI Powered Creative" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="group-hover:opacity-95 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30b7d8e7-cf02-41e0-92de-d9f66ad638e4_1600w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/services-ai-creative'" role="button"></div>
<div className="flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/02cd7b84-c652-4690-9b53-b65ddcde64d2_1600w.png)] bg-cover z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl text-white/80">01</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="md:text-4xl leading-none text-3xl text-white tracking-tight font-serif mb-4">
                  AI‑Powered Creative
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    AI concepts
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Prompt engineering
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Voice AI models
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Rapid branding
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Copy &amp; concepts
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Fashion ecom flat lays
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Editorial imagery
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Digital avatars
                  </span>
</div>
</div>
</div>
</a>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/social-media" style={{aspectRatio: '3/4'}}>
<img alt="Social Media" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="group-hover:opacity-95 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/services-social-media'" role="button"></div>
<div className="flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f7a4ef95-62f8-49a5-8ced-b5c1f8525e91_1600w.png)] bg-cover z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='/services-social-media'" role="button">
<div className="flex items-start justify-between">
<span className="font-serif text-4xl text-white/80">02</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl text-white font-serif mb-4 tracking-tight leading-none">
                  Social Media
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Organic content
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Video content
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Content design
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Social management
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Influencer marketing
                  </span>
</div>
</div>
</div>
</a>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/website-design" style={{aspectRatio: '3/4'}}>
<img alt="Website Design" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="group-hover:opacity-95 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0" onclick="window.location.href='/services-web-design'" role="button"></div>
<div className="flex flex-col bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5ad046bb-1595-433a-952c-d468f970c8fb_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between" onclick="window.location.href='/services-web-design'" role="button">
<div className="flex justify-between items-start">
<span className="font-serif text-4xl text-white/80">03</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl text-white font-serif mb-4 tracking-tight leading-none">
                  Website Design
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Landing page design
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    UX &amp; UI audits
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Design systems
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Website graphics
                  </span>
</div>
</div>
</div>
</a>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/ad-creative" style={{aspectRatio: '3/4'}}>
<img alt="Ad Creative" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="group-hover:opacity-95 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d02165a-ebb6-494f-adf4-240e6b6d2cc4_1600w.png)] bg-cover z-10 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl text-white/80 font-serif">04</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl text-white font-serif mb-4 tracking-tight leading-none">
                  Ad Creative
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Ad design
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Social media ads
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Display ads
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Native ads
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Out of home ads
                  </span>
</div>
</div>
</div>
</a>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/marketing-strategy" style={{aspectRatio: '3/4'}}>
<img alt="Marketing Strategy" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
<div className="flex flex-col z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70b06d14-f7d5-449a-a1a1-75410fbe767d_1600w.png)] bg-contain pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl text-white/80 font-serif">05</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl text-white font-serif mb-4 tracking-tight leading-none">
                  Marketing Strategy
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Digital channel strategy
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Content strategy development
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Campaign planning
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Quick win strategy
                  </span>
</div>
</div>
</div>
</a>

<a className="hidden" style={{display: 'none'}}></a>

<a className="relative w-[80vw] md:w-[460px] rounded-3xl overflow-hidden group border border-white/10 bg-zinc-900 block flex-shrink-0" href="/services/video-production" style={{aspectRatio: '3/4'}}>
<img alt="Video Production" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700" decoding="async" height="613" loading="lazy" sizes="(max-width: 768px) 80vw, 460px" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&amp;q=70&amp;fm=webp" srcset="
                https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&amp;q=70&amp;fm=webp 400w,
                https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&amp;q=70&amp;fm=webp 800w
              " width="460"/>
<div className="group-hover:opacity-95 transition-opacity duration-500 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col bg-center z-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b4307cfc-c465-465d-b2e9-07deb8f65e1f_1600w.png)] bg-cover pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 justify-between">
<div className="flex justify-between items-start">
<span className="text-4xl text-white/80 font-serif">06</span>
<div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<svg className="w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-4xl text-white font-serif mb-4 tracking-tight leading-none">
                  Video Production
                </h3>
<div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Brand marketing video
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Product video
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Ad video
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    UGC style
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Testimonials
                  </span>
<span className="text-xs font-light text-zinc-300 bg-white/10 backdrop-blur-md rounded-full px-3 py-1 border border-white/10">
                    Social video
                  </span>
</div>
</div>
</div>
</a>
</div>

</div>
</section>

<section className="md:pb-32 bg-black border-white/5 border-t pb-16 relative">
<div className="md:px-10 max-w-7xl mr-auto ml-auto pt-20 pr-6 pl-6">

<div className="flex items-end justify-between border-b border-white/10 pb-6 mb-10">
<h2 className="md:text-2xl text-xl font-light text-white tracking-tight font-sans">
            Selected Clients
          </h2>
<a className="uppercase hover:text-white transition-colors text-xs font-medium text-zinc-400 tracking-widest" href="/portfolio">
            + More work
          </a>
</div>

<div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-16 relative">

<div className="flex flex-col order-2 md:col-span-5 lg:col-span-5 md:gap-8 md:order-1 pt-4 pb-[0vh] gap-x-5 gap-y-5">
<button className="client-item md:text-5xl lg:text-7xl hover:opacity-80 transition-all duration-300 focus:outline-none text-4xl font-light text-zinc-600 tracking-tighter font-sans text-left opacity-40 w-full" data-client="Uber" data-src="https://pub-6a8300e6071e480c930025f0cc9d4a6d.r2.dev/borough_market_promo_16x9_final_v2%20(720p).mp4" data-type="video">
              Borough Market
            </button>
<button className="client-item md:text-5xl lg:text-7xl hover:opacity-80 transition-all duration-300 focus:outline-none text-4xl font-light text-zinc-600 tracking-tighter font-sans text-left opacity-40 w-full" data-client="Uber" data-src="https://pub-6a8300e6071e480c930025f0cc9d4a6d.r2.dev/RED_uber_casestudy.MP4" data-type="video">
              Uber
            </button>
<button className="client-item md:text-5xl lg:text-7xl hover:opacity-80 transition-all duration-300 focus:outline-none text-4xl font-light text-zinc-600 tracking-tighter font-sans text-left opacity-40 w-full" data-client="Pure Earth Collection" data-src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&amp;q=80" data-type="image">
              Pure Earth Collection
            </button>
<button className="client-item md:text-5xl lg:text-7xl hover:opacity-80 transition-all duration-300 focus:outline-none text-4xl font-light text-zinc-600 tracking-tighter font-sans text-left opacity-40 w-full" data-client="Hyundai" data-src="https://spark-labs.org/video/reel.mp4" data-type="video">
              Hyundai
            </button>
<button className="client-item text-4xl md:text-5xl lg:text-7xl font-sans tracking-tighter font-light text-zinc-600 opacity-40 hover:opacity-80 transition-all duration-300 text-left w-full focus:outline-none" data-client="Bloomberg" data-src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=1200&amp;q=80" data-type="image">
              Bloomberg
            </button>
<button className="client-item text-4xl md:text-5xl lg:text-7xl font-sans tracking-tighter font-light text-zinc-600 opacity-40 hover:opacity-80 transition-all duration-300 text-left w-full focus:outline-none" data-client="Planet Organic" data-src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=1200&amp;q=80" data-type="image">
              Planet Organic
            </button>
<button className="client-item text-4xl md:text-5xl lg:text-7xl font-sans tracking-tighter font-light text-zinc-600 opacity-40 hover:opacity-80 transition-all duration-300 text-left w-full focus:outline-none" data-client="Bermondsey SE1" data-src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&amp;q=80" data-type="image" style={{color: 'rgb(225, 6, 44)'}}>
              Bermondsey SE1
            </button>
<button className="client-item md:text-5xl lg:text-7xl hover:opacity-80 transition-all duration-300 focus:outline-none text-4xl font-light text-zinc-600 tracking-tighter font-sans text-left opacity-40 w-full" data-client="Uber" data-src="https://pub-6a8300e6071e480c930025f0cc9d4a6d.r2.dev/red_website_asics_video.MP4" data-type="video">
              Asics
            </button>
</div>

<div className="md:col-span-7 lg:col-span-7 order-1 md:order-2">
<div className="sticky top-[80px] md:top-[120px] z-30 bg-black pt-4 pb-8 md:py-0 w-full" id="__FPSC_ID_2_1781049436512">
<div className="w-full aspect-[4/5] md:aspect-[16/10] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 relative shadow-2xl" id="client-media">

<img className="absolute inset-0 w-full h-full object-cover transition-all duration-300 ease-out" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&amp;q=80"/>
</div>
</div>
</div>
</div>

</div>

</section>
<section className="relative bg-zinc-950 border-b border-white/5" id="process">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:block relative h-full min-h-screen border-r border-white/5">
<div className="sticky flex w-full h-screen pt-16 pr-16 pb-16 pl-16 top-0 items-center justify-center" id="__FPSC_ID_1_1781049436512">
<div className="relative w-full aspect-square max-w-lg">
<div className="absolute top-0 -right-8 z-20">
<span className="transition-all duration-700 text-9xl text-rose-700/95 font-serif transform translate-y-0 opacity-100" id="process-number">
                  03
                </span>
</div>
<div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">

<img alt="Process Step 1" className="process-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out" decoding="async" id="step-img-1" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>
<img alt="Process Step 2" className="process-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out" decoding="async" id="step-img-2" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>
<img alt="Process Step 3" className="process-img transition-all duration-700 ease-out w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" decoding="async" id="step-img-3" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1445aeb2-ddb4-4e4d-a151-c96381893f07_1600w.jpg"/>
</div>
</div>


</div>
</div>

<div className="md:px-20 md:py-32 flex flex-col gap-32 lg:gap-64 pt-24 pr-6 pb-24 pl-6 gap-x-32 gap-y-32">
<div className="lg:hidden mb-8">
<h2 className="font-serif text-5xl text-white tracking-tight">
              Our Process
            </h2>
</div>

<div className="process-step group" data-step="1">
<span className="block lg:hidden font-serif text-6xl text-zinc-800 mb-6">
              01
            </span>
<h3 className="md:text-5xl group-hover:text-red-500 transition-colors duration-300 text-4xl text-white tracking-tight font-serif mb-6">
              Strategy &amp; System Design
            </h3>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 font-sans max-w-md">
              Every project starts with clarity. We dig into your brand
              positioning, your audience, your goals, and your competitive
              landscape before we touch a single creative asset. We map out what
              needs to be built, why it matters, and how it all connects. The
              strategy is the foundation. Everything else is built on top of it.
            </p>
</div>

<div className="process-step group" data-step="2">
<span className="block lg:hidden font-serif text-6xl text-zinc-800 mb-6">
              02
            </span>
<h3 className="md:text-5xl group-hover:text-red-500 transition-colors duration-300 text-4xl text-white font-serif mb-6">
              Build &amp; Activate
            </h3>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 font-sans max-w-md">
              This is where the work comes to life. We design and produce your
              assets using AI-first workflows. Websites, campaign visuals, ad
              creative, content systems. Everything is built on-brand,
              on-strategy, and ready to deploy across every channel you need.
              Fast turnarounds, high quality, no corners cut.
            </p>
</div>

<div className="process-step group" data-step="3">
<span className="block lg:hidden font-serif text-6xl text-zinc-800 mb-6">
              03
            </span>
<h3 className="md:text-5xl group-hover:text-red-500 transition-colors duration-300 text-4xl text-white font-serif mb-6">
              Deploy &amp; Optimise
            </h3>
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 font-sans max-w-md">
              Launching is just the start. We put the work live, then we watch
              what happens. We test, measure, and refine based on real
              performance data. Not vanity metrics. Not gut feelings. Actual
              results. The goal is always to make the next round sharper than
              the last.
            </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-950 border-white/5 border-t relative">

</section>
<section className="md:px-10 bg-black pt-32 pr-6 pb-32 pl-6">
<div className="max-w-7xl mx-auto">
<h2 className="md:text-7xl text-5xl text-white tracking-tighter font-serif mb-20">
          What AI-first delivery,
          <br/>
<span className="text-zinc-600">actually looks like.</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

<div className="md:col-span-1 md:row-span-2 rounded-3xl bg-zinc-900/30 border border-white/10 p-10 flex flex-col justify-between group overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<img className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f36259a7-cc94-4846-8290-2df52026731d_original.gif"/>
<div className="relative z-20">
<div className="w-10 h-10 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center mb-6">
<svg aria-hidden="true" className="lucide lucide-zap w-5 h-5 text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
</svg>
</div>
</div>
<div className="relative z-20">
<h3 className="text-2xl font-serif text-white mb-2">Instant Scale</h3>
<p className="text-sm font-light text-zinc-300">
                From 1 to 1000 assets in day not weeks
              </p>
</div>
</div>

<div className="md:col-span-2 rounded-3xl bg-zinc-900/30 border border-white/10 p-10 flex flex-col md:flex-row items-center gap-10 group overflow-hidden relative">
<div className="flex-1 relative z-10">
<h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Brand Consistency
              </h3>
<p className="leading-relaxed font-light text-zinc-400 font-sans">
                Our models are trained on your specific guidelines. Colors,
                fonts, and tone of voice are mathematically locked in.
              </p>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-2xl bg-zinc-800/50 border border-white/5 overflow-hidden relative">
<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ebfeb48e-4108-49c6-86a2-a1491f93b564_original.gif"/>
</div>
</div>

<div className="md:col-span-1 flex flex-col group hover:border-emerald-500/30 transition-colors bg-zinc-900/30 border-white/10 border rounded-3xl pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="flex items-center gap-3">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="uppercase text-xs text-zinc-400 tracking-widest">
                Cost Savings -AI workflows cut production time dramatically
                compared to traditional methods. Campaigns that used to take
                weeks are now delivered in days.
              </span>
</div>
<div className="">
<span className="text-6xl font-serif text-white tracking-tighter">
                -80%
              </span>
<p className="text-sm text-zinc-400 mt-2">
                Faster content production
              </p>
</div>
</div>

<div className="md:col-span-1 flex flex-col group hover:border-emerald-500/30 transition-colors bg-zinc-900/30 border-white/10 border rounded-3xl pt-10 pr-10 pb-10 pl-10 justify-between">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
<span className="uppercase text-xs text-zinc-500 tracking-widest">
                Speed - More concepts, more variations, more testing. AI
                production means you're never limited to three options and a
                mood board
              </span>
</div>
<div className="">
<span className="text-6xl font-serif text-white tracking-tighter">
                10x
              </span>
<p className="text-sm text-zinc-400 mt-2">Faster time-to-market.</p>
</div>
</div>
</div>
</div>
</section>
<section className="md:px-10 overflow-hidden bg-zinc-950 border-white/5 border-t pt-28 pr-6 pb-28 pl-6 md:pt-36 md:pb-36 relative">
<style>
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-mask {
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-track {
          animation: redx-scroll 40s linear infinite;
          width: max-content;
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-mask:hover .redx-track {
          animation-play-state: paused;
        }
        @keyframes redx-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-card {
          background: rgba(255,255,255,0.025);
          transition: background-color 0.5s ease, transform 0.5s ease;
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-card:hover {
          background: rgba(255,255,255,0.05);
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-reveal {
          opacity: 0;
          animation: redx-rise 1s ease forwards;
        }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-reveal.d1 { animation-delay: 0.1s; }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-reveal.d2 { animation-delay: 0.25s; }
        [data-element-id="aura-emqa60d5f82lpr75"] .redx-reveal.d3 { animation-delay: 0.4s; }
        @keyframes redx-rise {
          from { opacity: 0; transform: translateY(34px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          [data-element-id="aura-emqa60d5f82lpr75"] .redx-track { animation: none; }
          [data-element-id="aura-emqa60d5f82lpr75"] .redx-reveal { opacity: 1; animation: none; }
        }
      </style>

<div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-red-600/[0.05] rounded-full blur-[140px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-20 md:mb-24">
<span className="redx-reveal d1 inline-flex items-center gap-2.5 uppercase text-xs font-medium tracking-widest text-zinc-500 mb-7">
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            Client Voices
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
</span>
<h2 className="redx-reveal d2 text-3xl md:text-5xl text-white tracking-tight font-serif mb-6 leading-[1.05]">
            Trusted by forward-thinking
            <br/>
<span className="text-zinc-600 italic">brands.</span>
</h2>
<p className="redx-reveal d3 text-base md:text-lg font-light text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Hear what our clients say about working with Really Exciting
            Digital.
          </p>
</div>
</div>

<div className="relative z-10">
<div className="redx-mask relative overflow-hidden py-4">
<div className="redx-track flex items-stretch">

<div className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "RED took our campaign from brief to launch in under two
                  weeks. The pace was extraordinary, and the work never felt
                  rushed — every asset felt considered."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="James Whitfield" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">James Whitfield</p>
<p className="text-zinc-500 text-xs font-light">
                    Head of Marketing, Borough Market
                  </p>
</div>
</div>
</div>

<div className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "The team at RED brought clarity and precision to our social
                  media strategy. Their AI workflows cut our content production
                  time by 80% without sacrificing quality."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="Sara Jensen" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">Sara Jensen</p>
<p className="text-zinc-500 text-xs font-light">
                    Creative Director, Hyundai MENA
                  </p>
</div>
</div>
</div>

<div className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "RED didn't just redesign our web presence; they transformed
                  how we think about scale. The design system is robust, and the
                  turnaround time was unbelievable."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="David Chen" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">David Chen</p>
<p className="text-zinc-500 text-xs font-light">
                    Founder, Quantum Finance
                  </p>
</div>
</div>
</div>

<div aria-hidden="true" className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "RED took our campaign from brief to launch in under two
                  weeks. The pace was extraordinary, and the work never felt
                  rushed — every asset felt considered."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">James Whitfield</p>
<p className="text-zinc-500 text-xs font-light">
                    Head of Marketing, Borough Market
                  </p>
</div>
</div>
</div>

<div aria-hidden="true" className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "The team at RED brought clarity and precision to our social
                  media strategy. Their AI workflows cut our content production
                  time by 80% without sacrificing quality."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">Sara Jensen</p>
<p className="text-zinc-500 text-xs font-light">
                    Creative Director, Hyundai MENA
                  </p>
</div>
</div>
</div>

<div aria-hidden="true" className="redx-card relative w-[82vw] sm:w-[420px] md:w-[440px] shrink-0 mx-3 md:mx-5 flex flex-col justify-between rounded-3xl px-8 py-10 md:px-10 md:py-12">
<div>
<div className="flex items-center gap-1 mb-7">
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
<svg className="w-3.5 h-3.5 text-red-500" fill="currentColor" viewbox="0 0 20 20">
<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
</svg>
</div>
<blockquote className="text-lg md:text-xl leading-relaxed font-light text-zinc-200">
                  "RED didn't just redesign our web presence; they transformed
                  how we think about scale. The design system is robust, and the
                  turnaround time was unbelievable."
                </blockquote>
</div>
<div className="flex items-center gap-4 mt-10 pt-7 border-t border-white/5">
<img alt="" className="w-11 h-11 rounded-full object-cover" height="44" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=face&amp;q=80" width="44"/>
<div>
<p className="text-white text-sm font-medium">David Chen</p>
<p className="text-zinc-500 text-xs font-light">
                    Founder, Quantum Finance
                  </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-48 md:px-10 overflow-hidden bg-black border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="contact">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
<span className="uppercase text-xs font-medium tracking-widest text-zinc-500 mb-6">
          Start Your Project
        </span>
<h2 className="text-5xl md:text-8xl text-white font-serif tracking-tighter mb-8 leading-[0.9]">
          Ready to move faster
          <br className="hidden md:block"/>
<span className="text-zinc-600">than the market?</span>
</h2>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Drop us a line to discuss how our AI-first workflows can scale your
          brand, reduce costs, and accelerate your time-to-market.
        </p>
<a className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-transform hover:scale-105 duration-300" href="mailto:hello@sparklabs.com">
<span className="relative z-10 text-sm font-semibold tracking-wide uppercase">
            Get in touch
          </span>
<div className="absolute inset-0 bg-red-100 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out z-0"></div>
</a>
</div>
</section>

<footer className="relative overflow-hidden bg-zinc-950 border-t border-white/5 px-6 md:px-10 pt-24 md:pt-32 pb-8">
<style>
        @keyframes redfoot-rise{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}.redfoot-reveal{opacity:0;animation:redfoot-rise 1s cubic-bezier(0.16,1,0.3,1) forwards}.redfoot-reveal.r2{animation-delay:0.12s}.redfoot-reveal.r3{animation-delay:0.24s}.redfoot-reveal.r4{animation-delay:0.36s}.redfoot-link{position:relative;transition:color 0.3s ease}.redfoot-link::after{content:"";position:absolute;left:0;bottom:-2px;width:0;height:1px;background:#dc2626;transition:width 0.35s cubic-bezier(0.16,1,0.3,1)}.redfoot-link:hover{color:#fff}.redfoot-link:hover::after{width:100%}.redfoot-mark{font-family:'Bricolage Grotesque',sans-serif;font-weight:700;letter-spacing:-0.04em;line-height:0.8;font-size:clamp(5rem,26vw,22rem);color:transparent;-webkit-text-stroke:1px rgba(255,255,255,0.16);text-stroke:1px rgba(255,255,255,0.16);transition:-webkit-text-stroke 0.5s ease}.redfoot-mark:hover{-webkit-text-stroke:1px rgba(255,255,255,0.28)}@media (prefers-reduced-motion:reduce){.redfoot-reveal{opacity:1;animation:none}}
      </style>
<div className="max-w-7xl mx-auto">
<div className="redfoot-reveal">
<p className="max-w-xl text-2xl md:text-3xl font-light text-white tracking-tight leading-snug">
            Really Exciting Digital is a London creative studio building work
            that performs, and looks like nobody else's.
          </p>
</div>
<div className="redfoot-reveal r2 mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
<div className="md:col-span-3 flex flex-col gap-4">
<span className="uppercase text-xs font-semibold text-zinc-600 tracking-widest mb-1">
              Navigate
            </span>
<a className="redfoot-link w-fit text-base font-light text-zinc-400" href="/about">
              About
            </a>
<a className="redfoot-link w-fit text-base font-light text-zinc-400" href="mailto:anthony@redagencylondon.com">
              Start a project
            </a>
</div>
<div className="md:col-span-3 flex flex-col gap-4">
<span className="uppercase text-xs font-semibold text-zinc-600 tracking-widest mb-1">
              Social
            </span>
<a className="redfoot-link w-fit text-base font-light text-zinc-400" href="#">
              Instagram
            </a>
<a className="redfoot-link w-fit text-base font-light text-zinc-400" href="#">
              LinkedIn
            </a>
</div>
<div className="md:col-span-6 flex flex-col gap-4">
<span className="uppercase text-xs font-semibold text-zinc-600 tracking-widest mb-1">
              Get in touch
            </span>
<form action="mailto:anthony@redagencylondon.com" className="flex items-center gap-3 max-w-md border-b border-white/15 focus-within:border-white/40 transition-colors pb-2" enctype="text/plain" method="post">
<input className="flex-1 bg-transparent text-base font-light text-white placeholder-zinc-600 focus:outline-none" name="email" placeholder="your@email.com" required="" type="email"/>
<button className="shrink-0 px-5 py-2 rounded-full border border-white/20 text-xs font-medium uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all duration-300" type="submit">
                Submit
              </button>
</form>
</div>
</div>
</div>
<div className="redfoot-reveal r3 max-w-7xl mx-auto mt-20 md:mt-28">
<div className="redfoot-mark select-none">
          RED
          <span style={{color: '#dc2626', WebkitTextStroke: '0'}}>.</span>
</div>
</div>
<div className="redfoot-reveal r4 max-w-7xl mx-auto mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
<p className="text-xs font-light text-zinc-600">
          © Really Exciting Digital 2026
        </p>
<div className="flex items-center gap-6">
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="/privacy">
            Privacy
          </a>
<a className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors" href="/terms">
            Terms
          </a>
</div>
</div>
</footer>


<div id="red-cursor" style={{position: 'fixed', top: '0', left: '0', width: '26px', height: '26px', borderRadius: '9999px', background: 'radial-gradient(circle,rgba(225,6,44,0.55),rgba(225,6,44,0.18) 60%,transparent 75%)', pointerEvents: 'none', zIndex: '99999', transform: 'translate(-50%,-50%) scale(1)', opacity: '0', mixBlendMode: 'normal', willChange: 'transform,opacity', transition: 'opacity 0.3s ease'}}></div>


    </>
  );
}
