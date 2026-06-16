import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- State Management ---
        let currentSlideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;
        let isAnimating = false;
        let hasEntered = false;

        // --- Initialize UI ---
        function init() {
            createDots();
            updateSliderUI();
            initCountdown();
            initParticles();
            initGalleryScroll();
        }

        // --- Entry Action ---
        function enterCelebration() {
            hasEntered = true;
            document.getElementById('hero-content').classList.add('scale-110', 'opacity-0');
            document.getElementById('nav-overlay').classList.remove('opacity-0');
            document.getElementById('nav-overlay').classList.add('opacity-100');
            
            // Try to play music
            toggleMusic(true);
            
            setTimeout(() => {
                goToSlide(1);
            }, 500);
        }

        // --- Slider Logic ---
        function createDots() {
            const container = document.getElementById('dot-container');
            // Skip dot for slide 0 (hero)
            for (let i = 1; i < totalSlides; i++) {
                const dot = document.createElement('div');
                dot.className = `w-2 h-2 rounded-full cursor-pointer transition-all duration-300 ${i === 1 ? 'bg-[#d4af37] scale-150 shadow-[0_0_8px_#d4af37]' : 'bg-[#fdfbf7]/30 hover:bg-[#d4af37]/70'}`;
                dot.onclick = () => { if(hasEntered) goToSlide(i); };
                dot.id = `dot-${i}`;
                container.appendChild(dot);
            }
        }

        function updateSliderUI() {
            slides.forEach((slide, index) => {
                // Reset classes
                slide.className = 'slide absolute inset-0 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)]';
                
                if (index === currentSlideIndex) {
                    // Active slide
                    slide.classList.add('z-20', 'translate-y-0', 'opacity-100', 'scale-100');
                    if(index === 0) slide.classList.add('bg-[#1a050a]'); // Keep bg for hero
                } else if (index < currentSlideIndex) {
                    // Previous slides (move up)
                    slide.classList.add('z-10', '-translate-y-full', 'opacity-0', 'scale-95');
                } else {
                    // Next slides (move down)
                    slide.classList.add('z-10', 'translate-y-full', 'opacity-0', 'scale-95');
                }
            });

            // Update Dots
            if (hasEntered) {
                for (let i = 1; i < totalSlides; i++) {
                    const dot = document.getElementById(`dot-${i}`);
                    if (dot) {
                        if (i === currentSlideIndex) {
                            dot.className = 'w-2 h-2 rounded-full cursor-pointer transition-all duration-300 bg-[#d4af37] scale-150 shadow-[0_0_8px_#d4af37]';
                        } else {
                            dot.className = 'w-2 h-2 rounded-full cursor-pointer transition-all duration-300 bg-[#fdfbf7]/30 hover:bg-[#d4af37]/70';
                        }
                    }
                }
            }
        }

        function goToSlide(index) {
            if (isAnimating || index < 0 || index >= totalSlides || (!hasEntered && index > 0)) return;
            
            isAnimating = true;
            currentSlideIndex = index;
            updateSliderUI();

            setTimeout(() => {
                isAnimating = false;
            }, 1000); // Matches CSS transition duration
        }

        // --- Event Listeners for Scrolling ---
        window.addEventListener('wheel', (e) => {
            if(!hasEntered || isAnimating) return;
            if (e.deltaY > 50) goToSlide(currentSlideIndex + 1);
            else if (e.deltaY < -50) goToSlide(currentSlideIndex - 1);
        }, { passive: true });

        let touchStartY = 0;
        window.addEventListener('touchstart', e => touchStartY = e.touches[0].clientY, {passive: true});
        window.addEventListener('touchend', e => {
            if(!hasEntered || isAnimating) return;
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            if (diff > 50) goToSlide(currentSlideIndex + 1);
            else if (diff < -50) goToSlide(currentSlideIndex - 1);
        }, {passive: true});

        window.addEventListener('keydown', (e) => {
            if(!hasEntered || isAnimating) return;
            if (e.key === 'ArrowDown' || e.key === 'PageDown') goToSlide(currentSlideIndex + 1);
            if (e.key === 'ArrowUp' || e.key === 'PageUp') goToSlide(currentSlideIndex - 1);
        });

        // --- Music Logic ---
        let isMusicPlaying = false;
        function toggleMusic(forcePlay = false) {
            const audio = document.getElementById('bgMusic');
            const icon = document.getElementById('music-icon');
            
            if (forcePlay || !isMusicPlaying) {
                audio.play().then(() => {
                    isMusicPlaying = true;
                    icon.setAttribute('icon', 'solar:music-note-linear');
                }).catch(e => console.log("Audio play prevented by browser"));
            } else {
                audio.pause();
                isMusicPlaying = false;
                icon.setAttribute('icon', 'solar:volume-cross-linear');
            }
        }

        // --- Countdown Logic ---
        function initCountdown() {
            const targetDate = new Date("April 19, 2026 00:00:00").getTime();
            
            const update = () => {
                const now = new Date().getTime();
                const distance = targetDate - now;

                if (distance < 0) return;

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("cd-days").innerText = days.toString().padStart(2, '0');
                document.getElementById("cd-hours").innerText = hours.toString().padStart(2, '0');
                document.getElementById("cd-mins").innerText = minutes.toString().padStart(2, '0');
                document.getElementById("cd-secs").innerText = seconds.toString().padStart(2, '0');
            };
            
            update();
            setInterval(update, 1000);
        }

        // --- Gallery Scroll Logic ---
        function initGalleryScroll() {
            const slider = document.getElementById('gallery-container');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => { isDown = false; });
            slider.addEventListener('mouseup', () => { isDown = false; });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2;
                slider.scrollLeft = scrollLeft - walk;
            });
            
            // Auto scroll slowly
            let autoScrollInterval = setInterval(() => {
                if(!isDown && currentSlideIndex === 5) {
                    slider.scrollLeft += 1;
                    if(slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth)) {
                        slider.scrollLeft = 0;
                    }
                }
            }, 30);
        }

        // --- Particle System ---
        function initParticles() {
            const canvas = document.getElementById('particle-canvas');
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            function resize() {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            }

            window.addEventListener('resize', resize);
            resize();

            class Particle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.size = Math.random() * 2;
                    this.speedY = Math.random() * 0.5 + 0.1;
                    this.alpha = Math.random() * 0.5;
                }
                update() {
                    this.y -= this.speedY;
                    if (this.y < 0) {
                        this.y = height;
                        this.x = Math.random() * width;
                    }
                }
                draw() {
                    ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            for (let i = 0; i < 50; i++) particles.push(new Particle());

            function animate() {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => {
                    p.update();
                    p.draw();
                });
                requestAnimationFrame(animate);
            }
            animate();
        }

        // Boot
        window.onload = init;
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_center,_#3a0b17_0%,_#1a050a_100%)] opacity-80"></div>
<canvas className="fixed inset-0 z-0 pointer-events-none opacity-50" id="particle-canvas"></canvas>

<audio id="bgMusic" loop="">

<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg"/>
</audio>

<div className="fixed inset-0 z-50 pointer-events-none opacity-0 transition-opacity duration-1000" id="nav-overlay">

<button className="absolute top-6 right-6 pointer-events-auto p-3 rounded-full bg-[#1a050a]/50 border border-[#d4af37]/30 text-[#d4af37] backdrop-blur-md hover:bg-[#d4af37]/20 transition-all duration-300 flex items-center justify-center group" onclick="toggleMusic()">
<iconify-icon className="text-xl group-hover:scale-110 transition-transform" icon="solar:volume-cross-linear" id="music-icon" strokeWidth="1.5"></iconify-icon>
</button>

<div className="absolute top-8 left-8 tracking-tighter text-[#d4af37] text-lg font-medium uppercase pointer-events-auto" style={{fontFamily: '\'Playfair Display\', serif'}}>
            V &amp; R
        </div>

<div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-auto">

<div className="flex flex-col gap-4" id="dot-container"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-auto opacity-70">
<span className="text-xs font-light tracking-widest text-[#d4af37] uppercase">Scroll</span>
<iconify-icon className="text-lg text-[#d4af37] animate-bounce" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>

<main className="relative w-screen h-screen" id="slider-container">

<section className="slide absolute inset-0 z-20 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-0 opacity-100 scale-100 bg-[#1a050a]">

<div className="absolute inset-4 border border-[#d4af37]/20 rounded-3xl pointer-events-none"></div>
<div className="absolute inset-6 border border-[#d4af37]/10 rounded-2xl pointer-events-none"></div>
<div className="z-10 flex flex-col items-center text-center max-w-3xl transform transition-transform duration-1000 scale-95" id="hero-content">
<p className="text-sm md:text-base text-[#d4af37] font-light tracking-widest uppercase mb-6">You are invited</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-[#d4af37] font-medium tracking-tight mb-4 flex items-center justify-center gap-4 flex-wrap" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    VARSHA
                    <iconify-icon className="text-3xl md:text-5xl text-[#8b0000] animate-pulse" icon="solar:heart-linear" strokeWidth="1.5"></iconify-icon>
                    RAVI
                </h1>
<p className="mt-8 text-base md:text-lg font-light text-[#fdfbf7]/80 leading-relaxed max-w-2xl px-4">
                    "अपने परिवारों के साथ, हम आपको सादर आमंत्रित करते हैं कि हमारे जीवन के सबसे खास दिन का हिस्सा बनें और हमें अपना आशीर्वाद दें।"
                </p>
<button className="mt-12 px-10 py-4 border border-[#d4af37] text-[#d4af37] bg-transparent backdrop-blur-sm hover:bg-[#d4af37] hover:text-[#1a050a] transition-all duration-500 rounded-full text-xs tracking-widest uppercase font-medium flex items-center gap-3 group relative overflow-hidden shadow-[0_0_20px_rgba(212,175,55,0.1)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]" onclick="enterCelebration()">
<span className="relative z-10">Enter Celebration</span>
<iconify-icon className="text-lg relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<div className="text-center max-w-4xl w-full">
<iconify-icon className="text-4xl text-[#d4af37] mb-6 opacity-80" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-6xl text-[#d4af37] font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>A New Beginning of Forever</h2>
<p className="text-xl md:text-2xl text-[#fdfbf7] font-light tracking-widest mb-12 uppercase">19 April 2026</p>
<div className="flex flex-wrap justify-center gap-4 md:gap-8">

<div className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 border border-[#d4af37]/30 bg-white/5 backdrop-blur-md rounded-2xl">
<span className="text-3xl md:text-5xl font-medium text-[#d4af37]" id="cd-days" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-xs tracking-widest text-[#fdfbf7]/60 uppercase mt-2">Days</span>
</div>
<div className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 border border-[#d4af37]/30 bg-white/5 backdrop-blur-md rounded-2xl">
<span className="text-3xl md:text-5xl font-medium text-[#d4af37]" id="cd-hours" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-xs tracking-widest text-[#fdfbf7]/60 uppercase mt-2">Hours</span>
</div>
<div className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 border border-[#d4af37]/30 bg-white/5 backdrop-blur-md rounded-2xl">
<span className="text-3xl md:text-5xl font-medium text-[#d4af37]" id="cd-mins" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-xs tracking-widest text-[#fdfbf7]/60 uppercase mt-2">Mins</span>
</div>
<div className="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 border border-[#d4af37]/30 bg-white/5 backdrop-blur-md rounded-2xl">
<span className="text-3xl md:text-5xl font-medium text-[#d4af37]" id="cd-secs" style={{fontFamily: '\'Playfair Display\', serif'}}>00</span>
<span className="text-xs tracking-widest text-[#fdfbf7]/60 uppercase mt-2">Secs</span>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<h2 className="text-3xl md:text-5xl text-[#d4af37] font-medium tracking-tight mb-10 text-center" style={{fontFamily: '\'Playfair Display\', serif'}}>Wedding Ceremonies</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl overflow-y-auto max-h-[70vh] p-4" style={{scrollbarWidth: 'none'}}>

<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:rings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>सगाई समारोह</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">10 April 2026</p>
</div>
<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>तिलक समारोह</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">12 April 2026</p>
</div>
<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>मगरमाटी मंडप</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">16 April 2026</p>
</div>
<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>मातृका पूजन एवं हल्दी</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">18 April 2026</p>
</div>
<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>बारात आगमन</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">19 April 2026</p>
</div>
<div className="p-8 border border-[#d4af37]/20 bg-[#2a0b13]/40 backdrop-blur-md rounded-2xl hover:bg-[#3a0b17]/60 hover:border-[#d4af37]/60 transition-all duration-500 group flex flex-col items-center text-center shadow-lg">
<iconify-icon className="text-4xl text-[#d4af37] mb-4 group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-[#d4af37] mb-2" style={{fontFamily: '\'Playfair Display\', serif'}}>विदाई</h3>
<div className="h-px w-12 bg-[#d4af37]/30 mb-3"></div>
<p className="text-sm text-[#fdfbf7]/80 font-light tracking-wide uppercase">20 April 2026</p>
</div>
</div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<div className="max-w-2xl w-full flex flex-col items-center text-center">
<iconify-icon className="text-5xl text-[#d4af37] mb-6" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-5xl text-[#d4af37] font-medium tracking-tight mb-6" style={{fontFamily: '\'Playfair Display\', serif'}}>The Grand Venue</h2>
<div className="bg-[#2a0b13]/60 backdrop-blur-md border border-[#d4af37]/30 p-8 md:p-12 rounded-3xl w-full relative overflow-hidden shadow-2xl">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#d4af37_0%,_transparent_40%)] opacity-5"></div>
<h3 className="text-2xl text-[#fdfbf7] font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Thakur Home</h3>
<p className="text-base text-[#fdfbf7]/80 font-light leading-relaxed mb-8">
                        Rampur Panchayat Malahdu Pali
                    </p>

<div className="w-full h-48 bg-[#1a050a] border border-[#d4af37]/20 rounded-xl flex flex-col items-center justify-center group cursor-pointer hover:border-[#d4af37]/50 transition-colors">
<iconify-icon className="text-3xl text-[#d4af37]/50 group-hover:text-[#d4af37] transition-colors mb-2" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs text-[#fdfbf7]/50 font-light tracking-widest uppercase group-hover:text-[#fdfbf7] transition-colors">View Map Location</span>
</div>
</div>
</div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<div className="max-w-3xl text-center px-4 relative">
<iconify-icon className="absolute -top-10 -left-6 md:-left-12 text-6xl text-[#d4af37]/20" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="absolute -bottom-10 -right-6 md:-right-12 text-6xl text-[#d4af37]/20" icon="solar:quote-right-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-3xl md:text-4xl text-[#d4af37] font-medium tracking-tight mb-10" style={{fontFamily: '\'Playfair Display\', serif'}}>A Beautiful Journey</h2>
<p className="text-xl md:text-3xl text-[#fdfbf7]/90 font-light leading-relaxed md:leading-loose mb-8 story-text opacity-100 transition-opacity duration-1000 delay-300" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    "दो दिल, दो परिवार और एक खूबसूरत सफर की शुरुआत।<br/>
                    वर्षा और रवि अपने जीवन के इस नए अध्याय में आपके आशीर्वाद और प्यार की अपेक्षा करते हैं।"
                </p>
<div className="w-24 h-px bg-[#d4af37]/50 mx-auto mt-10"></div>
</div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-0 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<div className="w-full text-center absolute top-12 md:top-20 z-10 pointer-events-none">
<h2 className="text-3xl md:text-5xl text-[#d4af37] font-medium tracking-tight" style={{fontFamily: '\'Playfair Display\', serif'}}>Moments</h2>
</div>

<div className="w-full flex items-center overflow-x-hidden py-20 px-10 gap-6 cursor-grab active:cursor-grabbing" id="gallery-container">

<div className="flex-none w-[70vw] md:w-[30vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden relative group">
<div className="absolute inset-0 bg-gradient-to-br from-[#3a0b17] to-[#1a050a] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center border border-[#d4af37]/10">
<iconify-icon className="text-4xl text-[#d4af37]/30" icon="solar:gallery-wide-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex-none w-[70vw] md:w-[30vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden relative group mt-10">
<div className="absolute inset-0 bg-gradient-to-tr from-[#2a0b13] to-[#4a1020] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center border border-[#d4af37]/10">
<iconify-icon className="text-4xl text-[#d4af37]/30" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex-none w-[70vw] md:w-[30vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden relative group -mt-10">
<div className="absolute inset-0 bg-gradient-to-bl from-[#3a0b17] to-[#1a050a] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center border border-[#d4af37]/10">
<iconify-icon className="text-4xl text-[#d4af37]/30" icon="solar:gallery-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="flex-none w-[70vw] md:w-[30vw] h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden relative group mt-5">
<div className="absolute inset-0 bg-gradient-to-br from-[#2a0b13] to-[#1a050a] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center border border-[#d4af37]/10">
<iconify-icon className="text-4xl text-[#d4af37]/30" icon="solar:videocamera-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="absolute bottom-12 text-[#fdfbf7]/50 text-xs font-light tracking-widest uppercase">
                Drag to explore
            </div>
</section>

<section className="slide absolute inset-0 z-10 flex flex-col items-center justify-center p-6 transition-all duration-1000 ease-[cubic-bezier(0.645,0.045,0.355,1)] translate-y-full opacity-0 scale-95">
<div className="text-center max-w-xl w-full">
<iconify-icon className="text-5xl text-[#d4af37] mb-6" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="text-4xl md:text-5xl text-[#d4af37] font-medium tracking-tight mb-4" style={{fontFamily: '\'Playfair Display\', serif'}}>Blessings &amp; Wishes</h2>
<p className="text-sm text-[#fdfbf7]/70 font-light tracking-wide mb-12">We look forward to sharing our joy with you.</p>
<div className="bg-white/5 backdrop-blur-md border border-[#d4af37]/20 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
<h3 className="text-sm tracking-widest text-[#d4af37] uppercase font-medium mb-2 border-b border-[#d4af37]/20 pb-4">Contact Family</h3>
<a className="flex items-center justify-between group p-3 hover:bg-white/5 rounded-xl transition-colors" href="tel:9098435002">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1a050a] transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-[#fdfbf7] font-light tracking-wider">9098435002</span>
</div>
</a>
<a className="flex items-center justify-between group p-3 hover:bg-white/5 rounded-xl transition-colors" href="tel:7489008748">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1a050a] transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-[#fdfbf7] font-light tracking-wider">7489008748</span>
</div>
</a>
<a className="flex items-center justify-between group p-3 hover:bg-white/5 rounded-xl transition-colors" href="tel:9131812878">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center text-[#d4af37] group-hover:bg-[#d4af37] group-hover:text-[#1a050a] transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-lg text-[#fdfbf7] font-light tracking-wider">9131812878</span>
</div>
</a>
</div>
<div className="mt-16 text-xs text-[#d4af37]/50 font-light tracking-widest uppercase" style={{fontFamily: '\'Playfair Display\', serif'}}>
                    Varsha &amp; Ravi • 2026
                </div>
</div>
</section>
</main>


    </>
  );
}
