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



        // Scroll Reveal Logic
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-12');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach((el) => {
                observer.observe(el);
            });

            // Music Player Logic
            const musicToggle = document.getElementById('musicToggle');
            const bgMusic = document.getElementById('bgMusic');
            let isPlaying = false;

            // Set volume low for ambiance
            bgMusic.volume = 0.3;

            musicToggle.addEventListener('click', () => {
                if (isPlaying) {
                    bgMusic.pause();
                    musicToggle.querySelector('span.animate-ping').style.display = 'none';
                    musicToggle.querySelector('span.relative').classList.remove('bg-[#D4AF37]');
                    musicToggle.querySelector('span.relative').classList.add('bg-white/30');
                } else {
                    bgMusic.play().catch(e => console.log("Audio play failed:", e));
                    musicToggle.querySelector('span.animate-ping').style.display = 'inline-flex';
                    musicToggle.querySelector('span.relative').classList.add('bg-[#D4AF37]');
                    musicToggle.querySelector('span.relative').classList.remove('bg-white/30');
                }
                isPlaying = !isPlaying;
            });

            // Confetti Logic for "Magic" Button
            const eidiButton = document.getElementById('eidiButton');
            const confettiContainer = document.getElementById('confetti-container');

            eidiButton.addEventListener('click', () => {
                // Prevent multiple rapid clicks
                eidiButton.disabled = true;
                eidiButton.innerHTML = '<span class="relative">Blessings Sent ✨</span>';
                eidiButton.classList.remove('animate-pulse-gold');
                eidiButton.classList.add('bg-[#D4AF37]/20', 'border-[#D4AF37]');

                const colors = ['#D4AF37', '#FDE047', '#FFFFFF'];
                
                for (let i = 0; i < 100; i++) {
                    const confetti = document.createElement('div');
                    const color = colors[Math.floor(Math.random() * colors.length)];
                    
                    // Randomize size, shape, and position
                    const size = Math.random() * 8 + 4; // 4px to 12px
                    const isCircle = Math.random() > 0.5;
                    
                    confetti.style.width = `${size}px`;
                    confetti.style.height = `${size * (isCircle ? 1 : 2)}px`;
                    confetti.style.backgroundColor = color;
                    confetti.style.position = 'absolute';
                    confetti.style.left = `${Math.random() * 100}vw`;
                    confetti.style.top = `-20px`;
                    confetti.style.borderRadius = isCircle ? '50%' : '2px';
                    confetti.style.boxShadow = `0 0 10px ${color}80`;
                    
                    // Assign animation with random duration and delay
                    const duration = Math.random() * 3 + 2; // 2s to 5s
                    const delay = Math.random() * 0.5;
                    confetti.style.animation = `fall ${duration}s linear ${delay}s forwards`;
                    
                    confettiContainer.appendChild(confetti);

                    // Cleanup
                    setTimeout(() => {
                        confetti.remove();
                    }, (duration + delay) * 1000);
                }

                // Reset button after a while
                setTimeout(() => {
                    eidiButton.disabled = false;
                    eidiButton.innerHTML = `<span class="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#D4AF37] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span><span class="relative flex items-center gap-3">Claim Your Eidi <iconify-icon icon="solar:gift-linear" class="text-xl group-hover:rotate-12 transition-transform duration-300"></iconify-icon></span>`;
                    eidiButton.classList.add('animate-pulse-gold');
                    eidiButton.classList.remove('bg-[#D4AF37]/20');
                }, 5000);
            });
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
      

<div className="fixed inset-0 z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-b from-[#011a10] via-[#022B1A] to-[#01140c]"></div>

<div className="absolute inset-0 stars-bg opacity-40"></div>

<div className="absolute top-[10%] right-[15%] w-32 h-32 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-transparent blur-3xl mix-blend-screen opacity-70"></div>
<div className="absolute top-[12%] right-[18%] w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#D4AF37] shadow-[0_0_80px_rgba(212,175,55,0.8)] opacity-90 animate-float" style={{boxShadow: 'inset -10px -5px 20px rgba(0, 0, 0, 0.5), 0 0 50px rgba(212,175,55,0.6)'}}></div>

<div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#01140c] to-transparent z-10"></div>
<svg className="absolute bottom-0 w-full h-auto text-[#01140c] opacity-80" preserveaspectratio="none" viewbox="0 0 1440 320">
<path d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,218.7C672,224,768,224,864,208C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="currentColor"></path>

<path d="M200,320 C200,250 250,200 300,200 C350,200 400,250 400,320 Z" fill="currentColor"></path>
<path d="M1000,320 C1000,220 1080,150 1150,150 C1220,150 1300,220 1300,320 Z" fill="currentColor"></path>
</svg>
</div>

<header className="fixed top-0 w-full z-50 py-6 px-8 flex justify-between items-center mix-blend-difference">
<div className="text-[#D4AF37] tracking-[0.3em] text-xs font-light uppercase">
            EID
        </div>
<div className="flex gap-4">
<button className="text-white/60 hover:text-[#D4AF37] transition-colors duration-300">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</header>

<button className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 group shadow-lg" id="musicToggle">
<iconify-icon className="group-hover:scale-110 transition-transform" height="20" icon="solar:music-note-linear" strokeWidth="1.5" width="20"></iconify-icon>

<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37]"></span>
</span>
</button>

<audio id="bgMusic" loop="">
<source src="https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3" type="audio/mpeg"/>
</audio>

<main className="relative z-20 flex flex-col items-center">

<section className="min-h-screen w-full flex flex-col items-center justify-center px-6 pt-20">
<div className="text-center animate-fade-in-slow relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#D4AF37]/20 blur-[100px] rounded-full -z-10"></div>
<p className="text-[#D4AF37]/80 text-xs md:text-sm uppercase tracking-[0.4em] font-light mb-6">
                    A Time For Joy
                </p>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#D4AF37] tracking-tight font-medium leading-none mb-8 drop-shadow-2xl">
                    Eid Mubarak
                </h1>
<p className="text-white/60 text-sm md:text-base font-light tracking-[0.2em] uppercase">
                    From Our Family to Yours
                </p>
</div>

<div className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50 animate-float">
<span className="text-[0.65rem] uppercase tracking-[0.2em] text-[#D4AF37]">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
</div>
</section>

<section className="w-full max-w-5xl mx-auto px-6 py-32 md:py-48 flex flex-col items-center text-center scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
<div className="glass-card rounded-3xl p-10 md:p-20 relative overflow-hidden group">

<div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-[#D4AF37]/40 rounded-tl-3xl m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-[#D4AF37]/40 rounded-br-3xl m-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<iconify-icon className="text-[#D4AF37] text-4xl mb-8 mx-auto block" icon="solar:moon-stars-linear"></iconify-icon>
<h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight font-medium mb-10">
                    A Season of Grace
                </h2>
<div className="space-y-6 text-white/70 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto">
<p>
                        As the crescent moon graces the evening sky, bringing an end to the holy month, our hearts are filled with immense gratitude. This Eid, we reflect on the moments of peace, the strength of unity, and the countless blessings bestowed upon us.
                    </p>
<p>
                        May the divine light of this auspicious occasion illuminate your path, bringing tranquility to your soul and prosperity to your home. Let us celebrate the bonds of kinship and the beauty of shared joy.
                    </p>
</div>
<div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
<p className="font-serif text-[#D4AF37] text-xl italic">With warmest regards,</p>
<p className="text-white/50 text-xs tracking-widest uppercase mt-4">The Royal Family</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out delay-100">
<div className="flex flex-col items-center mb-16 text-center">
<h3 className="font-serif text-2xl md:text-4xl text-[#D4AF37] tracking-tight font-medium mb-4">Cherished Moments</h3>
<p className="text-white/50 text-sm font-light tracking-wide max-w-md">Glimpses of laughter, love, and togetherness that define our celebrations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/60">
<img alt="Lanterns" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#022B1A] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-1">Tradition</p>
<p className="text-white font-serif text-lg">Lighting the Way</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/60 md:mt-12">
<img alt="Feast" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#022B1A] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-1">Gathering</p>
<p className="text-white font-serif text-lg">The Royal Feast</p>
</div>
</div>

<div className="group relative aspect-[4/5] rounded-2xl overflow-hidden glass-card cursor-pointer transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:border-[#D4AF37]/60 lg:mt-24">
<img alt="Architecture" className="object-cover w-full h-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#022B1A] via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<p className="text-[#D4AF37] text-xs tracking-widest uppercase mb-1">Spirituality</p>
<p className="text-white font-serif text-lg">Morning Prayers</p>
</div>
</div>
</div>
</section>

<section className="w-full min-h-[50vh] flex flex-col items-center justify-center py-32 relative scroll-reveal opacity-0 translate-y-12 transition-all duration-1000 ease-out">
<div className="text-center z-10 relative">
<p className="text-white/50 text-sm font-light tracking-wide mb-8">A token of our appreciation</p>
<button className="group relative inline-flex items-center justify-center px-10 py-5 font-serif text-lg text-[#D4AF37] transition-all duration-500 ease-out bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-full backdrop-blur-md overflow-hidden hover:border-[#D4AF37] animate-pulse-gold focus:outline-none" id="eidiButton">

<span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#D4AF37] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"></span>
<span className="relative flex items-center gap-3">
                        Claim Your Eidi
                        <iconify-icon className="text-xl group-hover:rotate-12 transition-transform duration-300" icon="solar:gift-linear"></iconify-icon>
</span>
</button>
</div>
</section>

<footer className="w-full py-12 border-t border-white/5 flex flex-col items-center justify-center text-center mt-20 relative z-20">
<div className="text-[#D4AF37] tracking-[0.3em] text-xs font-light uppercase mb-4">EID</div>
<p className="text-white/30 text-xs">© 2024 The Royal Celebration. All blessings reserved.</p>
</footer>
</main>

<div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" id="confetti-container"></div>


    </>
  );
}
