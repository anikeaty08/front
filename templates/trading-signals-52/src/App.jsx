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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
brand: {
dark: '#0B0F1A',
cyan: '#00f5ff',
purple: '#7a00ff',
yellow: '#FFD700',
blue: '#0088cc'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-glow': 'pulse-glow 3s infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'pulse-glow': {
'0%, 100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.2)' },
'50%': { boxShadow: '0 0 40px rgba(122, 0, 255, 0.5)' },
},
shimmer: {
'0%': { backgroundPosition: '-200% 0' },
'100%': { backgroundPosition: '200% 0' },
}
}
}
}
}



        // Particle System
        const canvas = document.getElementById('stars');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        function resize() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.size = Math.random() * 1.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x > width) this.x = 0;
                if (this.x < 0) this.x = width;
                if (this.y > height) this.y = 0;
                if (this.y < 0) this.y = height;
            }
            draw() {
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function initParticles() {
            particles = [];
            const count = width < 768 ? 50 : 100; 
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', () => {
            resize();
            initParticles();
        });

        resize();
        initParticles();
        animate();

        // Countdown Timer Logic
        function startTimer() {
            // Set a deadline (e.g., 24 hours from now)
            const countTo = new Date();
            countTo.setHours(countTo.getHours() + 24);
            
            // Or use a fixed date: const countTo = new Date('2023-12-31T23:59:59');

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');
            const secondsEl = document.getElementById('seconds');

            function update() {
                const now = new Date().getTime();
                const distance = countTo - now;

                // Loop the timer if it ends for visual purposes
                if (distance < 0) {
                   countTo.setHours(countTo.getHours() + 24);
                   return;
                }

                const d = Math.floor(distance / (1000 * 60 * 60 * 24));
                const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((distance % (1000 * 60)) / 1000);

                daysEl.innerText = d.toString().padStart(2, '0');
                hoursEl.innerText = h.toString().padStart(2, '0');
                minutesEl.innerText = m.toString().padStart(2, '0');
                secondsEl.innerText = s.toString().padStart(2, '0');
            }

            setInterval(update, 1000);
            update();
        }

        startTimer();
    
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
      

<div id="canvas-container">
<canvas id="stars"></canvas>
</div>
<div className="fixed inset-0 z-[-2] bg-grid pointer-events-none"></div>
<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-brand-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[100px] pointer-events-none"></div>

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#0B0F1A]/70 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center text-white font-bold text-lg shadow-[0_0_15px_rgba(0,245,255,0.3)]">
                    J
                </div>
<span className="text-sm font-semibold tracking-[0.2em] text-white/90">Canada pre.</span>
</div>
<div>
<a className="text-xs font-medium text-white/70 hover:text-white transition-colors border border-white/10 rounded-full px-4 py-2 hover:bg-white/5 hover:border-brand-cyan/30" href="https://t.me/+mbbp4e5gXTliYWJh">
                    MEMBER ACCESS
                </a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center mb-24 relative">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/20 bg-brand-cyan/5 text-brand-cyan text-xs font-medium tracking-wide mb-8 reveal-text" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
                LIVE STATUS
            </div>

<div className="reveal-text mb-8 relative group" style={{animationDelay: '0.2s'}}>
<div className="absolute inset-0 bg-yellow-400/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
<div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-[3px] border-yellow-400 overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.2)]">
<img alt="Canada predictor" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 reveal-text" style={{animationDelay: '0.3s'}}>
               Canada predictor💸
            </h1>

<div className="flex items-center justify-center gap-4 md:gap-8 mb-6 reveal-text" style={{animationDelay: '0.4s'}}>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="days">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">DAYS</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="hours">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">HOURS</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="minutes">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">MINUTES</span>
<span className="text-yellow-400 font-bold mt-1">:</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-4xl font-mono font-bold text-yellow-400" id="seconds">00</span>
<span className="text-[10px] md:text-xs text-yellow-400/70 tracking-widest mt-1">SECONDS</span>
</div>
</div>

<div className="text-base md:text-lg font-bold text-white tracking-widest uppercase mb-10 reveal-text px-4 py-2 bg-white/5 rounded-lg border border-white/10 backdrop-blur-sm" style={{animationDelay: '0.5s'}}>
                [ INDIA NO.1 VIP PREDICTION CHANNEL ]
            </div>

<div className="flex flex-col items-center gap-4 w-full max-w-md reveal-text" style={{animationDelay: '0.6s'}}>
<a className="group relative w-full py-4 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-xl font-bold text-lg transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,136,204,0.4)] flex items-center justify-center gap-3 overflow-hidden shadow-lg border-t border-white/20" href="https://t.me/+mbbp4e5gXTliYWJh">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer"></div>
<iconify-icon className="relative z-10" icon="bxl:telegram" width="28"></iconify-icon>
<span className="relative z-10">Join Free Telegram</span>
<iconify-icon className="relative z-10" icon="bxl:telegram" width="28"></iconify-icon>
</a>

<a className="text-sm font-medium text-gray-400 hover:text-white transition-colors group/ad" href="https://t.me/+vRU6vJxlX0JjODJl">
                    Ads manage by <span className="text-yellow-400 group-hover/ad:underline underline-offset-4 decoration-yellow-400">Sureshots</span>
</a>
</div>

<div className="absolute top-1/2 left-10 hidden lg:block animate-float">
<iconify-icon className="text-brand-cyan/20 text-6xl" icon="lucide:bar-chart-2"></iconify-icon>
</div>
<div className="absolute top-1/3 right-10 hidden lg:block animate-float" style={{animationDelay: '2s'}}>
<iconify-icon className="text-brand-purple/20 text-6xl" icon="lucide:trending-up"></iconify-icon>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-cyan/20 to-transparent flex items-center justify-center mb-6 text-brand-cyan border border-brand-cyan/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Fast Updates</h3>
<p className="text-sm text-gray-400 leading-relaxed">Lightning fast signal delivery ensuring you never miss a market movement.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:globe" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">International</h3>
<p className="text-sm text-gray-400 leading-relaxed">Connecting traders worldwide in a single, unified premium ecosystem.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-transparent flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Secure &amp; Trusted</h3>
<p className="text-sm text-gray-400 leading-relaxed">Verified accuracy and transparency. We prioritize your trust above all.</p>
</div>

<div className="glass-card rounded-2xl p-8 group hover:-translate-y-2 transition-transform duration-500">
<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-transparent flex items-center justify-center mb-6 text-amber-400 border border-amber-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:crown" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Premium VIP</h3>
<p className="text-sm text-gray-400 leading-relaxed">Exclusive insights reserved for our community members. Level up today.</p>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 mb-24">
<div className="relative rounded-3xl overflow-hidden border border-white/10 glass-card">
<div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/10 via-transparent to-brand-purple/10"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-12 gap-8">
<div className="text-center md:text-left max-w-lg">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-3">
                            Ready to dominate the market?
                        </h2>
<p className="text-gray-400 text-sm leading-relaxed">
                            Join thousands of successful members in the official Canada predictor channel.
                        </p>
</div>
<a className="relative group block bg-[#1c2230] hover:bg-[#232a3b] text-white py-4 px-8 rounded-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] overflow-hidden" href="https://t.me/+mbbp4e5gXTliYWJh">
<div className="flex items-center gap-3">
<iconify-icon className="text-brand-cyan" icon="lucide:send" width="20"></iconify-icon>
<span className="font-bold tracking-tight">JOIN CHANNEL</span>
<iconify-icon className="text-gray-400 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#0B0F1A]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-[10px]">J</div>
<span className="text-xs font-medium tracking-widest">Canada predictor</span>
</div>
<div className="flex flex-col items-center gap-1">
<div className="text-xs text-gray-600">
                        © 2023 Canada predictor.
                    </div>
</div>
<div className="flex gap-4">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="18"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" width="18"></iconify-icon>
</a>
</div>
</div>
</footer>
</main>



    </>
  );
}
