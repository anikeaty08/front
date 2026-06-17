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



        // --- 1. Intro Logic ---
        const introScreen = document.getElementById('intro-screen');
        const surpriseBtn = document.getElementById('surprise-btn');
        const mainContent = document.getElementById('main-content');
        let particleSystemStarted = false;

        surpriseBtn.addEventListener('click', () => {
            introScreen.classList.add('intro-exit');
            mainContent.classList.add('content-visible');
            
            setTimeout(() => {
                introScreen.style.display = 'none';
                if (!particleSystemStarted) {
                    initParticleSystem();
                    particleSystemStarted = true;
                }
            }, 1000);
        });


        // --- 2. Particle Text Effect ---
        function initParticleSystem() {
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');
            let particles = [];
            let animationId;
            let frameCount = 0;
            let wordIndex = 0;
            
            const words = ["HAPPY", "BIRTHDAY", "TO YOU", "MY FRIEND"];
            const pixelSteps = 6;
            
            const resize = () => {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
            window.addEventListener('resize', resize);
            resize();

            class Particle {
                constructor() {
                    this.pos = { x: 0, y: 0 };
                    this.vel = { x: 0, y: 0 };
                    this.acc = { x: 0, y: 0 };
                    this.target = { x: 0, y: 0 };
                    this.closeEnoughTarget = 100;
                    this.maxSpeed = 4.0; 
                    this.maxForce = 0.1;
                    this.isKilled = false;
                    this.startColor = { r: 0, g: 0, b: 0 };
                    this.targetColor = { r: 0, g: 0, b: 0 };
                    this.colorWeight = 0;
                    this.colorBlendRate = 0.02;
                }

                move() {
                    let proximityMult = 1;
                    const dx = this.pos.x - this.target.x;
                    const dy = this.pos.y - this.target.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < this.closeEnoughTarget) {
                        proximityMult = distance / this.closeEnoughTarget;
                    }
                    const towardsTarget = { x: this.target.x - this.pos.x, y: this.target.y - this.pos.y };
                    const mag = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y);
                    if (mag > 0) {
                        towardsTarget.x = (towardsTarget.x / mag) * this.maxSpeed * proximityMult;
                        towardsTarget.y = (towardsTarget.y / mag) * this.maxSpeed * proximityMult;
                    }
                    const steer = { x: towardsTarget.x - this.vel.x, y: towardsTarget.y - this.vel.y };
                    const steerMag = Math.sqrt(steer.x * steer.x + steer.y * steer.y);
                    if (steerMag > 0) {
                        steer.x = (steer.x / steerMag) * this.maxForce;
                        steer.y = (steer.y / steerMag) * this.maxForce;
                    }
                    this.acc.x += steer.x;
                    this.acc.y += steer.y;
                    this.vel.x += this.acc.x;
                    this.vel.y += this.acc.y;
                    this.pos.x += this.vel.x;
                    this.pos.y += this.vel.y;
                    this.acc.x = 0;
                    this.acc.y = 0;
                }

                draw(ctx) {
                    if (this.colorWeight < 1.0) this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0);
                    const r = Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight);
                    const g = Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight);
                    const b = Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight);
                    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
                    ctx.fillRect(this.pos.x, this.pos.y, 2, 2);
                }

                kill(w, h) {
                    if (!this.isKilled) {
                        const randomAngle = Math.random() * Math.PI * 2;
                        const dist = (w + h) / 2;
                        this.target.x = w/2 + Math.cos(randomAngle) * dist;
                        this.target.y = h/2 + Math.sin(randomAngle) * dist;
                        this.startColor = {
                            r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
                            g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
                            b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight
                        };
                        this.targetColor = { r: 0, g: 0, b: 0 };
                        this.colorWeight = 0;
                        this.isKilled = true;
                    }
                }
            }

            function nextWord(word) {
                const offscreen = document.createElement('canvas');
                offscreen.width = canvas.width;
                offscreen.height = canvas.height;
                const oCtx = offscreen.getContext('2d');
                oCtx.fillStyle = 'white';
                const fontSize = Math.min(canvas.width / 5, 150);
                oCtx.font = `bold ${fontSize}px Inter`;
                oCtx.textAlign = 'center';
                oCtx.textBaseline = 'middle';
                oCtx.fillText(word, canvas.width / 2, canvas.height / 2);
                const imageData = oCtx.getImageData(0, 0, canvas.width, canvas.height).data;
                const newColor = {
                    r: 236 + Math.random() * 20,
                    g: 72 + Math.random() * 20,
                    b: 153 + Math.random() * 20
                };
                let particleIndex = 0;
                for (let y = 0; y < canvas.height; y += pixelSteps) {
                    for (let x = 0; x < canvas.width; x += pixelSteps) {
                        const index = (y * canvas.width + x) * 4;
                        if (imageData[index + 3] > 0) {
                            let p;
                            if (particleIndex < particles.length) {
                                p = particles[particleIndex];
                                p.isKilled = false;
                                particleIndex++;
                            } else {
                                p = new Particle();
                                p.pos.x = canvas.width / 2;
                                p.pos.y = canvas.height / 2;
                                particles.push(p);
                            }
                            p.startColor = {
                                r: p.startColor.r + (p.targetColor.r - p.startColor.r) * p.colorWeight,
                                g: p.startColor.g + (p.targetColor.g - p.startColor.g) * p.colorWeight,
                                b: p.startColor.b + (p.targetColor.b - p.startColor.b) * p.colorWeight
                            };
                            p.targetColor = newColor;
                            p.colorWeight = 0;
                            p.target.x = x;
                            p.target.y = y;
                        }
                    }
                }
                for (let i = particleIndex; i < particles.length; i++) {
                    particles[i].kill(canvas.width, canvas.height);
                }
            }

            function animate() {
                // Clear with slightly pink tinted dark background
                ctx.fillStyle = 'rgba(20, 5, 10, 0.2)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                for (let i = particles.length - 1; i >= 0; i--) {
                    const p = particles[i];
                    p.move();
                    p.draw(ctx);
                    if (p.isKilled) {
                        if (p.pos.x < 0 || p.pos.x > canvas.width || p.pos.y < 0 || p.pos.y > canvas.height) {
                            particles.splice(i, 1);
                        }
                    }
                }
                frameCount++;
                if (frameCount % 180 === 0) {
                    wordIndex = (wordIndex + 1) % words.length;
                    nextWord(words[wordIndex]);
                }
                animationId = requestAnimationFrame(animate);
            }
            nextWord(words[0]);
            animate();
        }

        // --- 3. Flip Gallery Integration (Mobile Fixed) ---
        const galleryImages = [
            { title: 'Best Friends Forever', url: 'https://images.unsplash.com/photo-1529139574466-a302c2d56dc6?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Summer Vibes', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Adventures', url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1000&auto=format&fit=crop' },
            { title: 'Memories', url: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1000&auto=format&fit=crop' }
        ];

        let currentGalleryIndex = 0;
        const FLIP_SPEED = 750;
        const galleryEl = document.getElementById('flip-gallery');
        const uniteEls = document.querySelectorAll('.unite');
        const titleEl = document.getElementById('flip-gallery-title');

        const flipTop = [{ transform: 'rotateX(0)' }, { transform: 'rotateX(-90deg)' }, { transform: 'rotateX(-90deg)' }];
        const flipBottom = [{ transform: 'rotateX(90deg)' }, { transform: 'rotateX(90deg)' }, { transform: 'rotateX(0)' }];
        const flipTopRev = [{ transform: 'rotateX(-90deg)' }, { transform: 'rotateX(-90deg)' }, { transform: 'rotateX(0)' }];
        const flipBottomRev = [{ transform: 'rotateX(0)' }, { transform: 'rotateX(90deg)' }, { transform: 'rotateX(90deg)' }];
        const timing = { duration: FLIP_SPEED, iterations: 1 };

        function updateImageDisplay(el, index) {
            el.style.backgroundImage = `url('${galleryImages[index].url}')`;
        }

        function updateTitle() {
            titleEl.textContent = galleryImages[currentGalleryIndex].title;
            titleEl.style.opacity = '1';
            titleEl.style.transform = 'translateY(0)';
        }

        function hideTitle() {
            titleEl.style.opacity = '0';
            titleEl.style.transform = 'translateY(1rem)';
        }

        function animateGallery(nextIndex, reverse = false) {
            const topAnim = reverse ? flipTopRev : flipTop;
            const bottomAnim = reverse ? flipBottomRev : flipBottom;
            galleryEl.querySelector('.overlay-top').animate(topAnim, timing);
            galleryEl.querySelector('.overlay-bottom').animate(bottomAnim, timing);
            hideTitle();
            uniteEls.forEach((el, idx) => {
                const isOverlay = el.classList.contains('overlay-top') || el.classList.contains('overlay-bottom');
                if (!isOverlay) {
                    setTimeout(() => updateImageDisplay(el, nextIndex), reverse ? FLIP_SPEED - 200 : 0);
                } else {
                    updateImageDisplay(el, currentGalleryIndex);
                    setTimeout(() => updateImageDisplay(el, nextIndex), FLIP_SPEED/2);
                }
            });
            
            const els = Array.from(uniteEls);
            if (!reverse) {
                updateImageDisplay(els[0], nextIndex);
                updateImageDisplay(els[1], nextIndex);
                updateImageDisplay(els[2], currentGalleryIndex);
                updateImageDisplay(els[3], nextIndex);
            } else {
                 updateImageDisplay(els[0], nextIndex);
                 updateImageDisplay(els[1], nextIndex);
                 updateImageDisplay(els[2], nextIndex);
                 updateImageDisplay(els[3], currentGalleryIndex);
            }
            currentGalleryIndex = nextIndex;
            setTimeout(updateTitle, FLIP_SPEED * 0.6);
        }

        uniteEls.forEach(el => updateImageDisplay(el, 0));
        updateTitle();

        document.getElementById('next-btn').addEventListener('click', () => {
            const next = (currentGalleryIndex + 1) % galleryImages.length;
            animateGallery(next, false);
        });

        document.getElementById('prev-btn').addEventListener('click', () => {
            const prev = (currentGalleryIndex - 1 + galleryImages.length) % galleryImages.length;
            animateGallery(prev, true);
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
      
<div className="ambient-bg"></div>

<div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000" id="intro-screen">
<button className="group relative px-8 py-4 bg-white text-neutral-950 rounded-full font-medium tracking-tight overflow-hidden transition-all hover:scale-105 active:scale-95" id="surprise-btn">
<span className="relative z-10 flex items-center gap-2">
<iconify-icon icon="solar:gift-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Click for a Surprise
            </span>
<div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-red-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</button>
</div>

<main className="content-enter relative min-h-screen flex flex-col items-center w-full" id="main-content">

<section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
<canvas className="absolute inset-0 z-0 opacity-80" id="particle-canvas"></canvas>
<div className="absolute bottom-10 animate-bounce">
<iconify-icon className="text-white/30" icon="solar:mouse-minimalistic-linear" width="24"></iconify-icon>
</div>
</section>

<section className="relative w-full h-[85vh] overflow-hidden border-t border-pink-900/20" id="garden-section">
<div id="garden-wrapper">
<div className="night"></div>
<div className="flowers">

<div className="flower flower--1">
<div className="flower__leafs flower__leafs--1">
<div className="flower__leaf flower__leaf--1"></div>
<div className="flower__leaf flower__leaf--2"></div>
<div className="flower__leaf flower__leaf--3"></div>
<div className="flower__leaf flower__leaf--4"></div>
<div className="flower__white-circle"></div>
<div className="flower__light flower__light--1"></div>
<div className="flower__light flower__light--2"></div>
<div className="flower__light flower__light--3"></div>
</div>
<div className="flower__line">
<div className="flower__line__leaf flower__line__leaf--1"></div>
<div className="flower__line__leaf flower__line__leaf--2"></div>
<div className="flower__line__leaf flower__line__leaf--3"></div>
</div>
</div>

<div className="birthday-cake-container">
<div className="cake-candle">
<div className="flame"></div>
</div>
<div className="cake-layer top">
<div className="frosting"></div>
</div>
<div className="cake-layer middle"></div>
<div className="cake-layer bottom"></div>
</div>

<div className="flower flower--3">
<div className="flower__leafs flower__leafs--3">
<div className="flower__leaf flower__leaf--1"></div>
<div className="flower__leaf flower__leaf--2"></div>
<div className="flower__leaf flower__leaf--3"></div>
<div className="flower__leaf flower__leaf--4"></div>
<div className="flower__white-circle"></div>
<div className="flower__light flower__light--1"></div>
<div className="flower__light flower__light--2"></div>
<div className="flower__light flower__light--3"></div>
</div>
<div className="flower__line">
<div className="flower__line__leaf flower__line__leaf--1"></div>
<div className="flower__line__leaf flower__line__leaf--2"></div>
</div>
</div>
<div className="grow-ans" style={{'--d': '1.2s'}}>
<div className="flower__g-long">
<div className="flower__g-long__top"></div>
<div className="flower__g-long__bottom"></div>
</div>
</div>
<div className="growing-grass">
<div className="flower__grass flower__grass--1">
<div className="flower__grass--top"></div>
<div className="flower__grass--bottom"></div>
<div className="flower__grass__leaf flower__grass__leaf--1"></div>
<div className="flower__grass__leaf flower__grass__leaf--2"></div>
<div className="flower__grass__leaf flower__grass__leaf--3"></div>
<div className="flower__grass__leaf flower__grass__leaf--4"></div>
</div>
</div>
<div className="grow-ans" style={{'--d': '2.4s'}}>
<div className="flower__g-right flower__g-right--1">
<div className="leaf"></div>
</div>
</div>
<div className="grow-ans" style={{'--d': '3.2s'}}>
<div className="flower__g-fr">
<div className="leaf"></div>
</div>
</div>
</div>
<div className="bubbles">
<div className="bubble"><svg className="heart" viewbox="0 0 32 32"><path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path></svg></div>
<div className="bubble"><svg className="heart" viewbox="0 0 32 32"><path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path></svg></div>
<div className="bubble"><svg className="heart" viewbox="0 0 32 32"><path d="M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"></path></svg></div>
</div>
</div>
</section>

<section className="w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center gap-16 relative z-10">
<div className="text-center space-y-4">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full glass-card-pink mb-4 text-pink-400">
<iconify-icon icon="solar:heart-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-pink-200/60">
                    Words from the Heart
                </h2>
<p className="text-pink-200/50 font-light tracking-wide text-sm md:text-base">
                    ESPECIALLY FOR YOU
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full font-arabic" dir="rtl">

<div className="glass-card-pink p-8 rounded-2xl hover:bg-pink-900/20 transition-colors duration-500 group">
<iconify-icon className="text-pink-300 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-bold mb-3 text-white">كل عام وأنتِ بخير</h3>
<p className="text-pink-100/70 leading-relaxed font-light">أتمنى لكِ سنة مليئة بالفرح والنجاح، وأن تحققي فيها كل ما تتمنيه.</p>
</div>

<div className="glass-card-pink p-8 rounded-2xl hover:bg-pink-900/20 transition-colors duration-500 group">
<iconify-icon className="text-pink-300 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:confetti-minimalistic-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-bold mb-3 text-white">عيد ميلاد سعيد</h3>
<p className="text-pink-100/70 leading-relaxed font-light">وجودك في حياتنا نعمة كبيرة. دمتِ لنا صديقة رائعة وأختاً غالية.</p>
</div>

<div className="glass-card-pink p-8 rounded-2xl hover:bg-pink-900/20 transition-colors duration-500 group">
<iconify-icon className="text-pink-300 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:rose-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-bold mb-3 text-white">إلى أغلى صديقة</h3>
<p className="text-pink-100/70 leading-relaxed font-light">أنتِ جميلة القلب والروح، أتمنى أن يكون عامك الجديد يشبه جمال قلبك.</p>
</div>

<div className="glass-card-pink p-8 rounded-2xl hover:bg-pink-900/20 transition-colors duration-500 group">
<iconify-icon className="text-pink-300 mb-4 opacity-70 group-hover:opacity-100 transition-opacity" icon="solar:sun-2-linear" width="28"></iconify-icon>
<h3 className="text-2xl font-bold mb-3 text-white">سنة سعيدة</h3>
<p className="text-pink-100/70 leading-relaxed font-light">أتمنى لكِ مستقبلاً مشرقاً وأياماً مليئة بالضحك والحب.</p>
</div>
</div>
</section>

<section className="w-full py-32 flex flex-col items-center justify-center border-t border-pink-900/20 relative">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-900/20 pointer-events-none"></div>
<div className="mb-12 text-center relative z-10">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tighter text-white mb-2">
                    Our Memories
                </h2>
<p className="text-pink-300/50 text-xs tracking-widest uppercase">Captured Moments</p>
</div>
<div className="relative p-4 rounded-xl glass-card-pink flex flex-col md:flex-row items-center gap-6">

<div className="relative w-[280px] h-[400px] md:w-[350px] md:h-[520px] shadow-2xl" id="flip-gallery">
<div className="gallery-part part-top unite"></div>
<div className="gallery-part part-bottom unite"></div>
<div className="gallery-part overlay-top unite"></div>
<div className="gallery-part overlay-bottom unite"></div>
</div>

<div className="flex flex-row md:flex-col gap-4 z-20">
<button className="p-4 md:p-3 rounded-full glass-card hover:bg-pink-500 hover:border-pink-500 text-white transition-all duration-300 active:scale-95" id="prev-btn">
<iconify-icon className="hidden md:block" icon="solar:arrow-up-linear" width="24"></iconify-icon>
<iconify-icon className="block md:hidden" icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="p-4 md:p-3 rounded-full glass-card hover:bg-pink-500 hover:border-pink-500 text-white transition-all duration-300 active:scale-95" id="next-btn">
<iconify-icon className="hidden md:block" icon="solar:arrow-down-linear" width="24"></iconify-icon>
<iconify-icon className="block md:hidden" icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>

<div className="absolute bottom-6 left-0 right-0 md:bottom-auto md:top-8 text-center text-sm text-white font-medium drop-shadow-md opacity-0 translate-y-4 pointer-events-none z-30" id="flip-gallery-title">
                    Loading...
                </div>
</div>
</section>
<footer className="w-full py-12 text-center text-pink-100/40 text-xs tracking-wide border-t border-pink-900/20">
<p>MADE WITH <iconify-icon className="inline align-middle text-pink-600 mx-1" icon="solar:heart-bold"></iconify-icon> FOR YOU</p>
</footer>
</main>



    </>
  );
}
