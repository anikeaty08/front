import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Cormorant Garamond"', 'serif'],
sans: ['"DM Sans"', 'sans-serif'],
signature: ['"Alex Brush"', 'cursive'],
},
colors: {
cream: '#FCFAF8',
blush: '#FDF2F4',
champagne: '#F4EBE1',
rose: '#E6A8B3',
ink: '#3B322C',
gold: '#D4AF37'
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out infinite 2s',
'float-fast': 'float 4s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                    const reasons = [
                        { icon: "star-linear", text: "You make ordinary days feel special" },
                        { icon: "smile-circle-linear", text: "Your smile changes my mood instantly" },
                        { icon: "shield-check-linear", text: "You make me feel safe and understood" },
                        { icon: "sparkles-linear", text: "You’re beautiful in every version of yourself" },
                        { icon: "laugh-circle-linear", text: "You make me laugh without trying" },
                        { icon: "heart-pulse-linear", text: "You care so deeply about others" },
                        { icon: "leaf-linear", text: "You push me to grow every day" },
                        { icon: "cup-stars-linear", text: "Being with you feels like peace" }
                    ];

                    document.write(reasons.map((r, i) => `
                        <div class="group h-40 md:h-48 w-full reveal" style="transition-delay: ${i * 50}ms">
                            <div class="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180 cursor-pointer">
                                <!-- Front -->
                                <div class="absolute inset-0 backface-hidden glass rounded-2xl flex flex-col items-center justify-center p-4">
                                    <div class="w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center mb-2">
                                        <iconify-icon icon="solar:${r.icon}" class="text-rose text-xl"></iconify-icon>
                                    </div>
                                    <span class="text-xs font-medium text-ink/50 uppercase tracking-widest">Reason ${i+1}</span>
                                </div>
                                <!-- Back -->
                                <div class="absolute inset-0 backface-hidden glass bg-white/90 rounded-2xl rotate-y-180 flex items-center justify-center p-6 text-center shadow-lg border-rose/20">
                                    <p class="font-serif text-base md:text-lg font-medium text-ink">${r.text}</p>
                                </div>
                            </div>
                        </div>
                    `).join(''));
                


                    const photos = [
                        { label: "Us being cute", height: "h-48", rotate: "-rotate-2" },
                        { label: "Favorite memory", height: "h-64", rotate: "rotate-1" },
                        { label: "Date night", height: "h-56", rotate: "-rotate-1" },
                        { label: "That one funny pic", height: "h-40", rotate: "rotate-2" },
                        { label: "Dressed up", height: "h-72", rotate: "-rotate-3" },
                        { label: "Perfect day", height: "h-48", rotate: "rotate-1" },
                    ];

                    document.write(photos.map(p => `
                        <div class="gallery-item break-inside-avoid mb-4 reveal">
                            <div class="polaroid ${p.rotate} w-full cursor-pointer group">
                                <div class="w-full ${p.height} bg-black/5 rounded overflow-hidden relative border border-ink/5">
                                    <iconify-icon icon="solar:camera-linear" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-ink/20 text-3xl group-hover:scale-110 transition-transform"></iconify-icon>
                                </div>
                                <p class="font-signature text-xl text-center mt-3 text-ink/80">${p.label}</p>
                            </div>
                        </div>
                    `).join(''));
                


                            for(let i=0; i<30; i++) {
                                let h = Math.random() * 100;
                                document.write(`<div class="w-1 bg-ink/20 rounded-t-sm" style="height: ${h}%"></div>`);
                            }
                        


                    const facts = [
                        { q: "Our Song", a: "Playing in the background of my mind", icon: "music-notes-linear" },
                        { q: "Favorite Date", a: "That one night we just drove around", icon: "map-linear" },
                        { q: "Inside Joke", a: "You know exactly what I mean 😉", icon: "ghost-smile-linear" },
                        { q: "Who takes longer?", a: "Definitely you (but worth the wait)", icon: "clock-circle-linear" },
                        { q: "Steals fries?", a: "Also you. Always.", icon: "hamburger-menu-linear" },
                        { q: "Dream Trip", a: "Anywhere, as long as it's with you", icon: "plane-linear" }
                    ];

                    document.write(facts.map((f, i) => `
                        <div class="group relative perspective-1000 reveal cursor-pointer h-14 w-full sm:w-auto min-w-[200px]" style="transition-delay: ${i * 50}ms">
                            <div class="w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
                                <!-- Front -->
                                <div class="absolute inset-0 backface-hidden glass rounded-full flex items-center px-5 gap-3">
                                    <iconify-icon icon="solar:${f.icon}" class="text-rose text-lg"></iconify-icon>
                                    <span class="text-sm font-medium text-ink">${f.q}</span>
                                    <iconify-icon icon="solar:alt-arrow-down-linear" class="ml-auto text-ink/30 text-xs -rotate-90"></iconify-icon>
                                </div>
                                <!-- Back -->
                                <div class="absolute inset-0 backface-hidden bg-rose text-white rounded-full rotate-y-180 flex items-center justify-center px-5 text-center shadow-md">
                                    <span class="text-xs font-medium">${f.a}</span>
                                </div>
                            </div>
                        </div>
                    `).join(''));
                


        // 1. Scroll Progress
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("scroll-progress").style.width = scrolled + "%";
        });

        // 2. Scroll Reveal Animations
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                    
                    // Trigger counters if they exist in this reveal
                    const counters = reveals[i].querySelectorAll('.counter');
                    if(counters.length > 0 && !reveals[i].classList.contains('counted')) {
                        reveals[i].classList.add('counted');
                        counters.forEach(counter => {
                            const target = +counter.getAttribute('data-target');
                            const duration = 2000; 
                            const increment = target / (duration / 16); 
                            let current = 0;
                            const updateCounter = () => {
                                current += increment;
                                if(current < target) {
                                    counter.innerText = Math.ceil(current);
                                    requestAnimationFrame(updateCounter);
                                } else {
                                    counter.innerText = target;
                                }
                            };
                            updateCounter();
                        });
                    }
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // initial check

        // 3. Gallery Shuffle
        function shuffleGallery() {
            const grid = document.getElementById('gallery-grid');
            const items = Array.from(grid.children);
            
            // Add fade out
            items.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.95)';
                item.style.transition = 'all 0.3s ease';
            });

            setTimeout(() => {
                // Shuffle array
                for (let i = items.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [items[i], items[j]] = [items[j], items[i]];
                }
                
                // Re-append
                items.forEach(item => grid.appendChild(item));
                
                // Fade back in
                setTimeout(() => {
                    items.forEach(item => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                }, 50);
            }, 300);
        }

        // 4. Fake Audio Player
        let isPlaying = false;
        let audioInterval;
        let progress = 0;
        const totalTime = 30; // seconds

        function toggleAudio() {
            const playIcon = document.getElementById('playIcon');
            const progressBar = document.getElementById('audioProgress');
            const timeDisplay = document.getElementById('currentTime');
            const waveformDivs = document.querySelectorAll('#waveform div');

            isPlaying = !isPlaying;

            if (isPlaying) {
                playIcon.setAttribute('icon', 'solar:pause-linear');
                playIcon.classList.remove('translate-x-0.5'); // center pause icon
                
                // Animate waveform
                waveformDivs.forEach(div => div.style.animation = 'pulse-slow ' + (Math.random() * 2 + 1) + 's infinite');

                audioInterval = setInterval(() => {
                    progress += 0.1;
                    if(progress >= totalTime) {
                        toggleAudio(); // stop
                        progress = 0;
                        progressBar.style.width = '0%';
                        timeDisplay.innerText = "0:00";
                        return;
                    }
                    const percent = (progress / totalTime) * 100;
                    progressBar.style.width = percent + '%';
                    
                    const secs = Math.floor(progress);
                    timeDisplay.innerText = `0:${secs < 10 ? '0'+secs : secs}`;
                }, 100);
            } else {
                playIcon.setAttribute('icon', 'solar:play-linear');
                playIcon.classList.add('translate-x-0.5');
                clearInterval(audioInterval);
                waveformDivs.forEach(div => div.style.animation = 'none');
            }
        }

        // 5. Mini Game Logic (Love Match)
        const gameIcons = ['hearts', 'rose', 'letter', 'star', 'ring', 'wine'];
        let cards = [];
        let flippedCards = [];
        let matchedPairs = 0;

        function initGame() {
            const grid = document.getElementById('game-grid');
            const winMsg = document.getElementById('game-win');
            document.getElementById('score').innerText = '0';
            grid.innerHTML = '';
            winMsg.classList.add('hidden');
            flippedCards = [];
            matchedPairs = 0;

            // Create pairs
            cards = [...gameIcons, ...gameIcons];
            // Shuffle
            cards.sort(() => Math.random() - 0.5);

            cards.forEach((icon, index) => {
                const cardHTML = `
                    <div class="h-16 md:h-20 w-full cursor-pointer group card-container" data-icon="${icon}" data-index="${index}" onclick="flipCard(this)">
                        <div class="relative w-full h-full transition-transform duration-500 transform-style-3d card-inner">
                            <!-- Back of card (face down) -->
                            <div class="absolute inset-0 backface-hidden bg-white/10 rounded-xl border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors">
                                <iconify-icon icon="solar:heart-angle-linear" class="text-white/30 text-xl"></iconify-icon>
                            </div>
                            <!-- Front of card (face up) -->
                            <div class="absolute inset-0 backface-hidden bg-rose rounded-xl rotate-y-180 flex items-center justify-center shadow-lg">
                                <iconify-icon icon="solar:${icon === 'rose' ? 'rose-linear' : 
                                                          icon === 'letter' ? 'letter-linear' : 
                                                          icon === 'wine' ? 'glass-wine-linear' : 
                                                          icon === 'ring' ? 'rings-linear' : 
                                                          icon === 'star' ? 'star-linear' : 
                                                          'hearts-linear'}" class="text-white text-3xl"></iconify-icon>
                            </div>
                        </div>
                    </div>
                `;
                grid.insertAdjacentHTML('beforeend', cardHTML);
            });
        }

        function flipCard(cardEl) {
            if (flippedCards.length >= 2) return; // Prevent clicking more than 2
            if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

            cardEl.querySelector('.card-inner').style.transform = 'rotateY(180deg)';
            cardEl.classList.add('flipped');
            flippedCards.push(cardEl);

            if (flippedCards.length === 2) {
                checkMatch();
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;
            const icon1 = card1.getAttribute('data-icon');
            const icon2 = card2.getAttribute('data-icon');

            if (icon1 === icon2) {
                // Match
                card1.classList.add('matched');
                card2.classList.add('matched');
                matchedPairs++;
                document.getElementById('score').innerText = matchedPairs;
                flippedCards = [];

                // Add pop effect
                setTimeout(() => {
                    card1.style.transform = 'scale(1.05)';
                    card2.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        card1.style.transform = 'scale(1)';
                        card2.style.transform = 'scale(1)';
                    }, 200);
                }, 300);

                if (matchedPairs === 6) {
                    setTimeout(() => {
                        document.getElementById('game-win').classList.remove('hidden');
                        fireConfetti();
                    }, 500);
                }
            } else {
                // No match
                setTimeout(() => {
                    card1.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
                    card2.querySelector('.card-inner').style.transform = 'rotateY(0deg)';
                    card1.classList.remove('flipped');
                    card2.classList.remove('flipped');
                    flippedCards = [];
                }, 1000);
            }
        }

        // Initialize game on load
        document.addEventListener('DOMContentLoaded', initGame);

        // 6. Simple Confetti System
        function fireConfetti() {
            const canvas = document.getElementById('confetti-canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const particles = [];
            const colors = ['#E6A8B3', '#D4AF37', '#ffffff', '#FDF2F4'];

            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height - canvas.height,
                    size: Math.random() * 8 + 4,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    speedY: Math.random() * 3 + 2,
                    speedX: Math.random() * 2 - 1,
                    rotation: Math.random() * 360,
                    rotationSpeed: Math.random() * 10 - 5
                });
            }

            let animationId;

            function draw() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                let active = false;

                particles.forEach(p => {
                    p.y += p.speedY;
                    p.x += p.speedX;
                    p.rotation += p.rotationSpeed;

                    if (p.y < canvas.height) active = true;

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate((p.rotation * Math.PI) / 180);
                    ctx.fillStyle = p.color;
                    // Draw little hearts or squares
                    if(p.color === '#E6A8B3') {
                        // basic square for performance, color sells it
                        ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size);
                    } else {
                        ctx.beginPath();
                        ctx.arc(0, 0, p.size/2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.restore();
                });

                if (active) {
                    animationId = requestAnimationFrame(draw);
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                }
            }
            draw();
            
            // Clean up after 5 seconds
            setTimeout(() => {
                cancelAnimationFrame(animationId);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }, 5000);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div id="scroll-progress"></div>
<canvas id="confetti-canvas"></canvas>

<div className="bg-shapes">
<div className="blob bg-blush" style={{width: '400px', height: '400px', top: '-10%', left: '-10%'}}></div>
<div className="blob bg-champagne" style={{width: '300px', height: '300px', top: '40%', right: '-5%', animationDelay: '2s'}}></div>
<div className="blob bg-blush" style={{width: '500px', height: '500px', bottom: '-20%', left: '20%', animationDelay: '4s'}}></div>
</div>

<section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-6 overflow-hidden" id="hero">

<div className="absolute inset-0 pointer-events-none">
<iconify-icon className="absolute text-rose/40 animate-float top-1/4 left-1/4" icon="solar:heart-angle-linear" style={{fontSize: '2rem'}}></iconify-icon>
<iconify-icon className="absolute text-gold/40 animate-float-delayed top-1/3 right-1/4" icon="solar:star-fall-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
<iconify-icon className="absolute text-rose/30 animate-float-fast bottom-1/4 left-1/3" icon="solar:hearts-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
<iconify-icon className="absolute text-gold/50 animate-float bottom-1/3 right-1/3" icon="solar:star-shine-linear" style={{fontSize: '1.2rem'}}></iconify-icon>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in text-xs font-medium tracking-wide text-ink/70">
<iconify-icon className="text-rose" icon="solar:calendar-date-linear"></iconify-icon>
<span>Happy Anniversary</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter text-ink mb-4 font-semibold leading-tight">
                One Year <br className="md:hidden"/> <span className="italic text-rose">With You</span>
</h1>
<p className="text-base md:text-lg text-ink/80 max-w-xl mx-auto mb-10 font-light reveal">
                365 days later and you’re still my favorite part of every day.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal w-full sm:w-auto">
<a className="group relative px-8 py-4 bg-ink text-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 w-full sm:w-auto" href="#story">
<div className="absolute inset-0 bg-rose translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
<span className="relative flex items-center justify-center gap-2 text-sm font-medium">
                        Start Our Story
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</span>
</a>
<a className="px-8 py-4 glass text-ink rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 text-sm font-medium w-full sm:w-auto" href="#game">
<iconify-icon className="text-rose" icon="solar:gamepad-linear"></iconify-icon>
                    Play Our Love Game
                </a>
</div>

<div className="mt-16 relative w-64 h-80 md:w-80 md:h-96 reveal group cursor-pointer">
<div className="absolute inset-0 bg-rose/20 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-champagne/40 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
<div className="absolute inset-0 bg-white p-3 pb-12 rounded-2xl shadow-xl z-10 transition-transform duration-500 group-hover:-translate-y-2 flex flex-col items-center justify-center overflow-hidden">

<div className="w-full h-full bg-blush/50 rounded-lg flex items-center justify-center border border-rose/10 relative overflow-hidden">
<iconify-icon className="text-rose/40" icon="solar:gallery-linear" style={{fontSize: '3rem'}}></iconify-icon>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80')] bg-cover bg-center opacity-80 mix-blend-multiply"></div>
</div>
<span className="font-signature text-2xl absolute bottom-3 text-ink/80">Us.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="story">
<div className="max-w-3xl mx-auto reveal">
<div className="glass p-8 md:p-14 rounded-3xl relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-rose/20 to-transparent rounded-bl-full"></div>
<iconify-icon className="text-rose/30 mb-6" icon="solar:quote-left-linear" style={{fontSize: '3rem'}}></iconify-icon>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-6 font-semibold">
                    To my favorite person,
                </h2>
<div className="space-y-4 text-base md:text-lg text-ink/80 font-light leading-relaxed">
<p>
                        This little website is for you. For us. For every laugh, every memory, every late-night talk, every hug, and every moment that made this first year unforgettable.
                    </p>
<p>
                        I wanted to give you something more than a gift — something you could feel. A little corner of the internet just to remind you how much you mean to me.
                    </p>
</div>
<div className="mt-10 flex flex-col items-end border-t border-ink/10 pt-6">
<span className="text-sm text-ink/60 mb-1">Forever yours,</span>
<span className="font-signature text-4xl text-ink">[Your Name]</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-white/30 backdrop-blur-sm">
<div className="max-w-4xl mx-auto text-center mb-16 reveal">
<h2 className="font-serif text-4xl tracking-tight text-ink mb-4 font-semibold">Our Story So Far</h2>
<p className="text-sm text-ink/60 font-light">The moments that led us here.</p>
</div>
<div className="max-w-3xl mx-auto relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-rose/30 -translate-x-1/2"></div>

<div className="space-y-12">

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group reveal">
<div className="hidden md:block w-5/12 text-right pr-8">
<span className="text-sm font-medium text-rose tracking-wide uppercase">The Beginning</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-rose group-hover:bg-rose group-hover:scale-125 transition-all z-10"></div>
<div className="pl-16 md:pl-8 w-full md:w-5/12">
<div className="glass p-6 rounded-2xl group-hover:-translate-y-1 transition-transform">
<span className="md:hidden text-xs font-medium text-rose tracking-wide uppercase block mb-2">The Beginning</span>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-rose text-xl" icon="solar:eye-linear"></iconify-icon>
<h3 className="font-serif text-xl font-semibold">The day we met</h3>
</div>
<p className="text-sm text-ink/70 font-light">I still remember exactly what you were wearing. Little did I know.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group reveal md:flex-row-reverse">
<div className="hidden md:block w-5/12 text-left pl-8">
<span className="text-sm font-medium text-rose tracking-wide uppercase">First Date</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-rose group-hover:bg-rose group-hover:scale-125 transition-all z-10"></div>
<div className="pl-16 md:pl-8 w-full md:w-5/12 md:pr-8 md:pl-0 md:text-right">
<div className="glass p-6 rounded-2xl group-hover:-translate-y-1 transition-transform">
<span className="md:hidden text-xs font-medium text-rose tracking-wide uppercase block mb-2">First Date</span>
<div className="flex items-center gap-3 mb-2 md:justify-end">
<h3 className="font-serif text-xl font-semibold">Butterflies &amp; Coffee</h3>
<iconify-icon className="text-rose text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<p className="text-sm text-ink/70 font-light">We talked for hours and it still wasn't enough time.</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group reveal">
<div className="hidden md:block w-5/12 text-right pr-8">
<span className="text-sm font-medium text-rose tracking-wide uppercase">The Realization</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-rose group-hover:bg-rose group-hover:scale-125 transition-all z-10"></div>
<div className="pl-16 md:pl-8 w-full md:w-5/12">
<div className="glass p-6 rounded-2xl group-hover:-translate-y-1 transition-transform">
<span className="md:hidden text-xs font-medium text-rose tracking-wide uppercase block mb-2">The Realization</span>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-rose text-xl" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="font-serif text-xl font-semibold">When I knew</h3>
</div>
<p className="text-sm text-ink/70 font-light">That one random Tuesday when I caught you laughing and just thought, "Oh, I'm in trouble."</p>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between group reveal md:flex-row-reverse">
<div className="hidden md:block w-5/12 text-left pl-8">
<span className="text-sm font-medium text-rose tracking-wide uppercase">Today</span>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose border-2 border-rose group-hover:scale-125 transition-all z-10 animate-pulse"></div>
<div className="pl-16 md:pl-8 w-full md:w-5/12 md:pr-8 md:pl-0 md:text-right">
<div className="glass p-6 rounded-2xl bg-white/80 group-hover:-translate-y-1 transition-transform border-rose/30 shadow-[0_0_20px_rgba(230,168,179,0.3)]">
<span className="md:hidden text-xs font-medium text-rose tracking-wide uppercase block mb-2">Today</span>
<div className="flex items-center gap-3 mb-2 md:justify-end">
<h3 className="font-serif text-xl font-semibold">One Year Later</h3>
<iconify-icon className="text-rose text-xl animate-pulse-slow" icon="solar:hearts-linear"></iconify-icon>
</div>
<p className="text-sm text-ink/70 font-light">Loving you is the easiest thing I've ever done.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16 reveal flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose/10 text-rose text-xs font-medium mb-4">
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
                    Countless reasons why
                </div>
<h2 className="font-serif text-4xl tracking-tight text-ink mb-4 font-semibold">365 Days of Loving You</h2>
<p className="text-sm text-ink/60 font-light max-w-md">Hover or tap to reveal a few of the million reasons why you're my favorite.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 perspective-1000">


</div>
</div>
</section>

<section className="py-24 px-6 bg-champagne/20 relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-64 bg-rose/10 rounded-full filter blur-3xl"></div>
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
<div>
<h2 className="font-serif text-4xl tracking-tight text-ink mb-2 font-semibold">Our Digital Scrapbook</h2>
<p className="text-sm text-ink/60 font-light">A collection of perfectly imperfect moments.</p>
</div>
<button className="mt-4 md:mt-0 px-5 py-2 glass rounded-full text-xs font-medium text-ink hover:bg-white transition flex items-center gap-2" onclick="shuffleGallery()">
<iconify-icon icon="solar:shuffle-linear"></iconify-icon>
                    Shuffle Memories
                </button>
</div>
<div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 pb-10" id="gallery-grid">


</div>
</div>
</section>

<section className="py-24 px-6 flex justify-center reveal">
<div className="glass p-6 md:p-8 rounded-3xl max-w-md w-full shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-rose/20 flex items-center justify-center">
<iconify-icon className="text-rose text-xl" icon="solar:microphone-linear"></iconify-icon>
</div>
<div>
<h3 className="font-serif text-xl font-semibold text-ink">Press play when you miss me</h3>
<p className="text-xs text-ink/60 font-light">A little message from me to you.</p>
</div>
</div>
<div className="flex items-center gap-4">
<button className="w-12 h-12 shrink-0 rounded-full bg-ink text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-transform shadow-[0_0_15px_rgba(59,50,44,0.3)]" id="playBtn" onclick="toggleAudio()">
<iconify-icon className="text-lg translate-x-0.5" icon="solar:play-linear" id="playIcon"></iconify-icon>
</button>
<div className="flex-grow flex flex-col gap-1">

<div className="flex items-end gap-0.5 h-8 w-full overflow-hidden opacity-70" id="waveform">

</div>

<div className="h-1 w-full bg-ink/10 rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-rose w-0 transition-all duration-100 ease-linear" id="audioProgress"></div>
</div>
<div className="flex justify-between text-[10px] text-ink/50 mt-1 font-medium">
<span id="currentTime">0:00</span>
<span>0:30</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#2A2420] text-cream relative" id="game">
<div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>
<div className="max-w-xl mx-auto relative z-10 reveal">
<div className="text-center mb-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-4">
<iconify-icon icon="solar:gamepad-linear"></iconify-icon>
                    Mini Game
                </div>
<h2 className="font-serif text-4xl tracking-tight mb-2 font-semibold">Love Match</h2>
<p className="text-sm text-cream/60 font-light">Find all the matching pairs to reveal a surprise.</p>
</div>
<div className="glass-dark p-6 md:p-8 rounded-3xl">
<div className="flex justify-between items-center mb-6 text-sm font-medium">
<span className="text-cream/70">Matches: <span className="text-rose font-bold" id="score">0</span>/6</span>
<button className="text-cream/50 hover:text-white transition flex items-center gap-1" onclick="initGame()">
<iconify-icon icon="solar:restart-linear"></iconify-icon> Restart
                    </button>
</div>

<div className="grid grid-cols-4 gap-3 perspective-1000 mb-6" id="game-grid">

</div>
<div className="hidden text-center py-4 animate-fade-in" id="game-win">
<h3 className="font-serif text-2xl font-semibold text-rose mb-2">You matched our love perfectly! 💖</h3>
<p className="text-xs text-cream/70">You win my heart. (Again.)</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-ink mb-12 font-semibold text-center reveal">Our Little Things</h2>
<div className="flex flex-wrap gap-3 justify-center">

</div>
</div>
</section>

<section className="py-20 px-6 bg-white relative">
<div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
<div className="p-6 reveal group">
<div className="text-4xl md:text-5xl font-serif text-rose mb-2 font-semibold flex justify-center items-center">
<span className="counter" data-target="1">0</span>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-ink/50">Amazing Year</div>
</div>
<div className="p-6 reveal group" style={{transitionDelay: '100ms'}}>
<div className="text-4xl md:text-5xl font-serif text-rose mb-2 font-semibold flex justify-center items-center">
<span className="counter" data-target="12">0</span>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-ink/50">Months</div>
</div>
<div className="p-6 reveal group" style={{transitionDelay: '200ms'}}>
<div className="text-4xl md:text-5xl font-serif text-rose mb-2 font-semibold flex justify-center items-center">
<span className="counter" data-target="52">0</span>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-ink/50">Weeks</div>
</div>
<div className="p-6 reveal group" style={{transitionDelay: '300ms'}}>
<div className="text-4xl md:text-5xl font-serif text-rose mb-2 font-semibold flex justify-center items-center">
<span className="counter" data-target="365">0</span>
</div>
<div className="text-xs font-medium uppercase tracking-widest text-ink/50">Days of Love</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-[#FCFAF8] to-champagne/30">
<div className="max-w-5xl mx-auto reveal">
<h2 className="font-serif text-4xl tracking-tight text-ink mb-12 font-semibold text-center">What I want for us next</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500 bg-white/40">
<div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-6">
<iconify-icon className="text-rose text-2xl" icon="solar:ticket-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold mb-2">More Adventures</h3>
<p className="text-sm text-ink/70 font-light">New places, new memories, getting lost together and finding our way back.</p>
</div>
<div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500 bg-white/40 md:-translate-y-6">
<div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-6">
<iconify-icon className="text-rose text-2xl" icon="solar:home-smile-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold mb-2">More Peace</h3>
<p className="text-sm text-ink/70 font-light">Quiet mornings, lazy Sundays, and building a life that feels like a safe haven.</p>
</div>
<div className="glass p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-500 bg-white/40">
<div className="w-12 h-12 rounded-full bg-rose/10 flex items-center justify-center mb-6">
<iconify-icon className="text-rose text-2xl" icon="solar:hand-stars-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-semibold mb-2">More Growth</h3>
<p className="text-sm text-ink/70 font-light">Supporting each other's dreams and becoming the best versions of ourselves, together.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-ink text-cream relative text-center">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#F4EBE1 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-2xl mx-auto relative z-10 reveal">
<iconify-icon className="text-gold mb-6 animate-pulse-slow" icon="solar:stars-linear" style={{fontSize: '2.5rem'}}></iconify-icon>
<h2 className="font-serif text-4xl md:text-5xl tracking-tighter mb-8 font-semibold">
                To year two, <br/>
<span className="italic text-rose/90 font-light">and everything after that.</span>
</h2>
<p className="text-base md:text-lg text-cream/70 font-light leading-relaxed mb-12">
                Thank you for the best 365 days. Thank you for choosing me, for putting up with my quirks, and for making my life endlessly better just by being in it. I don't know what the future holds, but as long as you're by my side, I know it's going to be beautiful. I love you, more than words or this little website could ever say.
            </p>
<button className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all flex items-center justify-center gap-2 mx-auto text-sm font-medium backdrop-blur-sm" onclick="window.scrollTo({top: 0, behavior: 'smooth'})">
<iconify-icon className="text-rose" icon="solar:heart-bold"></iconify-icon>
                Read this again when you miss me
            </button>
</div>
</section>

<footer className="py-8 text-center bg-ink border-t border-white/10 relative z-10">
<p className="text-xs text-cream/50 flex items-center justify-center gap-1">
            Made with <iconify-icon className="text-rose animate-pulse" icon="solar:heart-bold"></iconify-icon> for [Her Name]
        </p>
</footer>



    </>
  );
}
