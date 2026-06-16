import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
gray: { 900: '#111827', 950: '#030712' },
orange: { 500: '#F97316' }
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'float-slow': 'float-subtle 4s ease-in-out infinite',
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-12': { transform: 'rotateY(12deg)' },
'.rotate-x-6': { transform: 'rotateX(6deg)' },
})
}
]
};



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        // --- 1. LOADER ---
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.style.opacity = '0';
                setTimeout(() => { loader.style.display = 'none'; }, 1500);
            }, 1500);
        });

        // --- 2. PARTICLE ENGINE (CANVAS) ---
        const canvas = document.getElementById('neural-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: 0, y: 0 };

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
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.color = Math.random() > 0.8 ? 'rgba(249, 115, 22,' : 'rgba(255, 255, 255,'; 
                this.alpha = Math.random() * 0.5 + 0.1;
            }

            update() {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const dist = Math.sqrt(dx*dx + dy*dy);
                
                if(dist < 150) {
                    this.speedX -= dx * 0.0005;
                    this.speedY -= dy * 0.0005;
                }

                this.x += this.speedX;
                this.y += this.speedY;
                
                // Bounds loop
                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;
            }

            draw() {
                ctx.fillStyle = this.color + this.alpha + ')';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Init Particles
        for (let i = 0; i < 80; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                for(let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx*dx + dy*dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(50, 50, 60, ${0.1 - distance/1000})`;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            particles.forEach(p => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();

        // --- 3. CURSOR & INTERACTION ---
        const cursorDot = document.getElementById('cursor-dot');
        const cursorRing = document.getElementById('cursor-ring');

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
            
            // Lag effect
            setTimeout(() => {
                cursorRing.style.left = e.clientX + 'px';
                cursorRing.style.top = e.clientY + 'px';
            }, 80);
        });

        const clickables = document.querySelectorAll('a, button, input, textarea, .group, .cursor-pointer');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.width = '64px';
                cursorRing.style.height = '64px';
                cursorRing.style.borderColor = '#F97316';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(0.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.width = '32px';
                cursorRing.style.height = '32px';
                cursorRing.style.borderColor = 'rgba(255,255,255,0.3)';
                cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });

        // --- 4. SCROLL OBSERVER ---
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-[slideUp_0.8s_ease-out_forwards]', 'opacity-100');
                    entry.target.classList.remove('opacity-0');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('opacity-0');
            observer.observe(el);
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div bis_size='{"x":0,"y":0,"w":922,"h":556,"abs_x":440,"abs_y":43}' className="aura-background-component fixed top-0 w-full h-screen -z-10 blur-sm opacity-40" data-alpha-mask="89" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 89%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 89%, transparent)'}}><div bis_size='{"x":0,"y":0,"w":922,"h":556,"abs_x":440,"abs_y":43}' className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div bis_size='{"x":402,"y":217,"w":2,"h":2,"abs_x":842,"abs_y":260}' className="" id="cursor-dot" style={{left: '933px', top: '1px', transform: 'translate(-50%, -50%) scale(1)'}}></div>
<div bis_size='{"x":901,"y":-31,"w":64,"h":64,"abs_x":1341,"abs_y":12}' className="" id="cursor-ring" style={{width: '32px', height: '32px', borderColor: 'rgba(255, 255, 255, 0.3)', left: '933px', top: '1px'}}></div>

<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="" id="loader" style={{opacity: '0', display: 'none'}}>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="flex flex-col items-center">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="font-display text-4xl font-bold tracking-tighter mb-4 text-white">SYNTH<span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="text-orange-500">.</span>MIND</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="font-mono text-xs text-orange-500 tracking-[0.3em] uppercase">Loading Neural Model</div>
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="w-48 h-[1px] bg-gray-800 mt-6 overflow-hidden relative">
<div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":440,"abs_y":43}' className="absolute inset-0 bg-orange-500 w-full origin-left animate-[grow_1.5s_ease-in-out]"></div>
</div>
</div>
</div>

<canvas bis_size='{"x":0,"y":0,"w":922,"h":556,"abs_x":440,"abs_y":43}' className="fixed -z-10 opacity-30 w-full h-full top-0 left-0" height="556" id="neural-canvas" width="926"></canvas>

<div bis_size='{"x":0,"y":0,"w":922,"h":556,"abs_x":440,"abs_y":43}' className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] -z-5 pointer-events-none"></div>

<nav bis_size='{"x":0,"y":0,"w":922,"h":95,"abs_x":440,"abs_y":43}' className="fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center backdrop-blur-sm border-b border-white/5">
<div bis_size='{"x":48,"y":33,"w":88,"h":28,"abs_x":488,"abs_y":76}' className="flex items-center gap-3 group cursor-none">
<div bis_size='{"x":48,"y":39,"w":16,"h":16,"abs_x":488,"abs_y":82}' className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-4 h-4 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', -BorderRadiusBefore: '8px'}}>
<iconify-icon bis_size='{"x":56,"y":47,"w":0,"h":0,"abs_x":496,"abs_y":90}' className="text-white group-hover:text-orange-500 transition-colors" icon="solar:intelligent-correction-linear" width="20"></iconify-icon>
</div>
<span bis_size='{"x":76,"y":33,"w":60,"h":28,"abs_x":516,"abs_y":76}' className="group-hover:text-white/90 text-lg font-bold text-white tracking-tight font-display">Laticce</span>
</div>
<div bis_size='{"x":318,"y":24,"w":271,"h":46,"abs_x":758,"abs_y":67}' className="hidden md:flex gap-8 bg-gray-900/50 border-white/5 border rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg backdrop-blur-md gap-x-8 gap-y-8 items-center">
<a bis_size='{"x":351,"y":37,"w":38,"h":20,"abs_x":791,"abs_y":80}' className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="/#vision">Home</a>
<a bis_size='{"x":421,"y":37,"w":51,"h":20,"abs_x":861,"abs_y":80}' className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="/#process">Process</a>
<a bis_size='{"x":505,"y":37,"w":51,"h":20,"abs_x":945,"abs_y":80}' className="hover:text-white transition-colors text-sm font-medium text-gray-400 tracking-tight" href="#projects">Projects</a>
</div>
<div bis_size='{"x":772,"y":34,"w":101,"h":25,"abs_x":1212,"abs_y":77}' className="flex items-center gap-4">
<div bis_size='{"x":772,"y":34,"w":101,"h":25,"abs_x":1212,"abs_y":77}' className="flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20">
<span bis_size='{"x":785,"y":43,"w":8,"h":8,"abs_x":1225,"abs_y":86}' className="relative flex h-2 w-2">
<span bis_size='{"x":785,"y":43,"w":8,"h":8,"abs_x":1225,"abs_y":86}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span bis_size='{"x":785,"y":43,"w":8,"h":8,"abs_x":1225,"abs_y":86}' className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span bis_size='{"x":801,"y":39,"w":59,"h":15,"abs_x":1241,"abs_y":82}' className="text-[10px] font-medium text-orange-500 tracking-wider font-mono">CONTACT US</span>
</div>
</div>
</nav>


<section bis_size='{"x":0,"y":0,"w":922,"h":700,"abs_x":440,"abs_y":43}' className="min-h-[700px] flex flex-col overflow-hidden h-screen pt-20 relative perspective-1000 items-center justify-center" id="vision">

<div bis_size='{"x":61,"y":-50,"w":800,"h":800,"abs_x":501,"abs_y":-7}' className="-translate-x-1/2 -translate-y-1/2 blur-[120px] animate-pulse bg-orange-500/5 w-[800px] h-[800px] rounded-full absolute top-1/2 left-1/2"></div>
<div bis_size='{"x":0,"y":80,"w":922,"h":620,"abs_x":440,"abs_y":123}' className="flex flex-col flex-1 z-20 text-center w-full max-w-6xl pr-6 pl-6 relative items-center justify-center">

<div bis_size='{"x":140,"y":157,"w":641,"h":239,"abs_x":580,"abs_y":200}' className="group relative cursor-default mb-8 md:mb-12">
<h1 bis_size='{"x":140,"y":157,"w":641,"h":239,"abs_x":580,"abs_y":200}' className="text-[11vw] leading-[0.85] bg-clip-text transition-all duration-700 ease-in-out group-hover:text-orange-500 group-hover:bg-none hover-float select-none md:text-[8.5rem] text-6xl font-bold text-transparent tracking-tighter font-display bg-gradient-to-b from-white via-gray-200 to-gray-600 mix-blend-overlay pb-2">Redefining <br bis_size='{"x":781,"y":127,"w":0,"h":174,"abs_x":1221,"abs_y":170}'/>Maple india</h1>
</div>

<div bis_size='{"x":24,"y":445,"w":874,"h":73,"abs_x":464,"abs_y":488}' className="flex flex-col md:flex-row animate-[fadeIn_0.8s_1.5s_forwards] md:text-center md:border-l-0 md:border-t md:rounded-none md:pt-6 md:gap-x-8 md:items-center md:mb-12 text-left bg-black/20 opacity-0 border-orange-500/50 rounded-r-lg border-l-2 mb-10 pt-2 pr-6 pb-2 pl-6 backdrop-blur-sm gap-x-y-2 gap-y-2 items-start">
<div bis_size='{"x":48,"y":470,"w":280,"h":40,"abs_x":488,"abs_y":513}' className="text-sm text-gray-400 tracking-widest font-mono">Architecting High-Impact Visuals</div>
<div bis_size='{"x":360,"y":470,"w":245,"h":40,"abs_x":800,"abs_y":513}' className="text-sm text-gray-300 tracking-widest font-mono">Seamless Workflow Automation</div>
<div bis_size='{"x":637,"y":470,"w":236,"h":40,"abs_x":1077,"abs_y":513}' className="text-sm text-gray-500 tracking-widest font-mono">Enterprise-Scale Efficiency</div>
</div>

<div bis_size='{"x":337,"y":566,"w":246,"h":56,"abs_x":777,"abs_y":609}' className="opacity-0 animate-[slideUp_0.8s_1.8s_forwards]">
<a bis_size='{"x":337,"y":566,"w":246,"h":56,"abs_x":777,"abs_y":609}' className="group relative inline-flex items-center gap-3 px-10 py-4 bg-orange-500 text-white font-semibold rounded-full overflow-hidden transition-all hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:scale-105" href="#projects">
<span bis_size='{"x":377,"y":582,"w":134,"h":24,"abs_x":817,"abs_y":625}' className="z-10 text-base tracking-tight font-mono relative">SEE OUR PROJECTS</span>
<iconify-icon bis_size='{"x":524,"y":584,"w":20,"h":20,"abs_x":964,"abs_y":627}' className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div bis_size='{"x":408,"y":601,"w":104,"h":67,"abs_x":848,"abs_y":644}' className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_1s_2.5s_forwards] flex flex-col items-center gap-3 z-20">
<div bis_size='{"x":460,"y":601,"w":1,"h":40,"abs_x":900,"abs_y":644}' className="w-[1px] h-10 bg-gradient-to-b from-transparent via-orange-500 to-transparent"></div>
<span bis_size='{"x":408,"y":653,"w":104,"h":15,"abs_x":848,"abs_y":696}' className="text-[10px] uppercase animate-pulse text-gray-500 tracking-[0.2em] font-mono">SLIDE FOR MORE</span>
</div>
</section>

<section bis_size='{"x":0,"y":700,"w":922,"h":1348,"abs_x":440,"abs_y":743}' className="bg-gray-950 border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative" id="process">
<div bis_size='{"x":24,"y":829,"w":874,"h":1091,"abs_x":464,"abs_y":872}' className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

<div bis_size='{"x":24,"y":829,"w":874,"h":511,"abs_x":464,"abs_y":872}' className="reveal-on-scroll space-y-10 opacity-0">
<div bis_size='{"x":24,"y":829,"w":874,"h":24,"abs_x":464,"abs_y":872}' className="flex items-center gap-3 text-orange-500">
<iconify-icon bis_size='{"x":24,"y":829,"w":24,"h":24,"abs_x":464,"abs_y":872}' icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
<span bis_size='{"x":60,"y":833,"w":62,"h":16,"abs_x":500,"abs_y":876}' className="uppercase text-xs tracking-widest font-mono">About Us</span>
</div>
<h2 bis_size='{"x":24,"y":893,"w":874,"h":96,"abs_x":464,"abs_y":936}' className="md:text-5xl leading-tight text-4xl font-semibold tracking-tight font-display">Where Human Intuition<br bis_size='{"x":527,"y":886,"w":0,"h":61,"abs_x":967,"abs_y":929}'/> <span bis_size='{"x":24,"y":934,"w":628,"h":61,"abs_x":464,"abs_y":977}' className="text-gray-500">Meets Algorithmic Precision.</span></h2>
<p bis_size='{"x":24,"y":1029,"w":874,"h":87,"abs_x":464,"abs_y":1072}' className="leading-relaxed text-lg font-light text-gray-400">We are not just an agency; we are an AI-native partner. Our team merges deep creative expertise with cutting-edge generative technology to deliver assets and systems that were previously impossible. We don't just use AI—we build with it.</p>
<div bis_size='{"x":24,"y":1156,"w":874,"h":184,"abs_x":464,"abs_y":1199}' className="grid grid-cols-2 gap-6 pt-4">
<div bis_size='{"x":24,"y":1172,"w":425,"h":168,"abs_x":464,"abs_y":1215}' className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
<iconify-icon bis_size='{"x":49,"y":1197,"w":32,"h":32,"abs_x":489,"abs_y":1240}' className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:bolt-linear" width="32"></iconify-icon>
<div bis_size='{"x":49,"y":1247,"w":375,"h":32,"abs_x":489,"abs_y":1290}' className="text-2xl font-bold font-display mb-1">Cost Efficiency</div>
<div bis_size='{"x":49,"y":1283,"w":375,"h":32,"abs_x":489,"abs_y":1326}' className="uppercase text-xs text-gray-500 tracking-wide font-mono">Drastically lower production overheads through automated creative cycles.</div>
</div>
<div bis_size='{"x":473,"y":1172,"w":425,"h":168,"abs_x":913,"abs_y":1215}' className="hover:bg-white/[0.05] transition-colors group border-white/10 border rounded-xl pt-6 pr-6 pb-6 pl-6">
<iconify-icon bis_size='{"x":498,"y":1197,"w":32,"h":32,"abs_x":938,"abs_y":1240}' className="text-orange-500 mb-3 group-hover:scale-110 transition-transform" icon="solar:infinity-linear" width="32"></iconify-icon>
<div bis_size='{"x":498,"y":1247,"w":375,"h":32,"abs_x":938,"abs_y":1290}' className="text-2xl font-bold font-display mb-1">Infinite Scalability</div>
<div bis_size='{"x":498,"y":1283,"w":375,"h":32,"abs_x":938,"abs_y":1326}' className="uppercase text-xs text-gray-500 tracking-wide font-mono">Produce thousands of personalized creative variations in seconds.</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":1420,"w":874,"h":500,"abs_x":464,"abs_y":1463}' className="relative h-[500px] w-full perspective-1000 group cursor-pointer reveal-on-scroll opacity-0">
<div bis_size='{"x":24,"y":1420,"w":874,"h":500,"abs_x":464,"abs_y":1463}' className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-purple-500/20 rounded-2xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>

<div bis_size='{"x":24,"y":1420,"w":874,"h":500,"abs_x":464,"abs_y":1463}' className="relative w-full h-full transform-style-3d transition-all duration-700 ease-out transform group-hover:rotate-y-12 group-hover:rotate-x-6">

<div bis_size='{"x":24,"y":1420,"w":874,"h":500,"abs_x":464,"abs_y":1463}' className="absolute inset-0 bg-gray-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
<div bis_size='{"x":25,"y":1421,"w":872,"h":32,"abs_x":465,"abs_y":1464}' className="h-8 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
<div bis_size='{"x":41,"y":1431,"w":12,"h":12,"abs_x":481,"abs_y":1474}' className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div bis_size='{"x":61,"y":1431,"w":12,"h":12,"abs_x":501,"abs_y":1474}' className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
<div bis_size='{"x":81,"y":1431,"w":12,"h":12,"abs_x":521,"abs_y":1474}' className="w-3 h-3 rounded-full bg-green-500/50"></div>
</div>
<div bis_size='{"x":25,"y":1453,"w":872,"h":466,"abs_x":465,"abs_y":1496}' className="flex-1 relative overflow-hidden">
<img alt="Generative Art" bis_size='{"x":25,"y":1453,"w":872,"h":466,"abs_x":465,"abs_y":1496}' className="object-cover w-full h-full opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/852a4c0d-7411-45c0-a46b-4ac766933976_1600w.webp" style={{}}/>
<div bis_size='{"x":25,"y":1453,"w":872,"h":466,"abs_x":465,"abs_y":1496}' className="bg-gradient-to-t from-gray-900 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>

<div bis_size='{"x":49,"y":1849,"w":824,"h":62,"abs_x":489,"abs_y":1892}' className="group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 text-xs text-gray-400 font-mono bg-black/60 opacity-0 border-white/10 border rounded-lg pt-4 pr-4 pb-4 pl-4 absolute right-6 bottom-6 left-6 backdrop-blur-md translate-y-4">
<div bis_size='{"x":66,"y":1866,"w":790,"h":16,"abs_x":506,"abs_y":1909}' className="flex text-orange-500 mb-2 justify-between">
<span bis_size='{"x":66,"y":1866,"w":145,"h":16,"abs_x":506,"abs_y":1909}' className="">generating_workflow...</span>
<span bis_size='{"x":836,"y":1866,"w":19,"h":16,"abs_x":1276,"abs_y":1909}'>98%</span>
</div>
<div bis_size='{"x":66,"y":1890,"w":790,"h":4,"abs_x":506,"abs_y":1933}' className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
<div bis_size='{"x":66,"y":1890,"w":774,"h":4,"abs_x":506,"abs_y":1933}' className="h-full bg-orange-500 w-[98%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section bis_size='{"x":0,"y":2048,"w":922,"h":810,"abs_x":440,"abs_y":2091}' className="py-24 relative bg-gray-950 border-t border-white/5" id="process-steps">
<div bis_size='{"x":0,"y":2145,"w":922,"h":617,"abs_x":440,"abs_y":2188}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":24,"y":2145,"w":874,"h":84,"abs_x":464,"abs_y":2188}' className="mb-16 reveal-on-scroll opacity-0">
<h2 bis_size='{"x":24,"y":2145,"w":874,"h":40,"abs_x":464,"abs_y":2188}' className="text-4xl font-bold font-display tracking-tight text-white mb-4">Our Process</h2>
<p bis_size='{"x":24,"y":2201,"w":576,"h":28,"abs_x":464,"abs_y":2244}' className="text-gray-500 max-w-xl text-lg">A systematic approach to deploying generative intelligence.</p>
</div>

<div bis_size='{"x":24,"y":2293,"w":874,"h":469,"abs_x":464,"abs_y":2336}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div bis_size='{"x":24,"y":2293,"w":421,"h":207,"abs_x":464,"abs_y":2336}' className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-100 opacity-0">
<div bis_size='{"x":25,"y":2294,"w":419,"h":1,"abs_x":465,"abs_y":2337}' className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":57,"y":2326,"w":355,"h":32,"abs_x":497,"abs_y":2369}' className="mb-6 flex justify-between items-start">
<iconify-icon bis_size='{"x":57,"y":2326,"w":32,"h":32,"abs_x":497,"abs_y":2369}' className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:magnifer-linear" width="32"></iconify-icon>
<span bis_size='{"x":380,"y":2326,"w":31,"h":24,"abs_x":820,"abs_y":2369}' className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">01</span>
</div>
<h3 bis_size='{"x":57,"y":2382,"w":355,"h":28,"abs_x":497,"abs_y":2425}' className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Discovery</h3>
<p bis_size='{"x":57,"y":2422,"w":355,"h":45,"abs_x":497,"abs_y":2465}' className="text-sm text-gray-500 leading-relaxed font-light">Identifying friction points in your creative and operational workflows to map the opportunity space.</p>
</div>

<div bis_size='{"x":477,"y":2293,"w":421,"h":207,"abs_x":917,"abs_y":2336}' className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-200 opacity-0">
<div bis_size='{"x":478,"y":2294,"w":419,"h":1,"abs_x":918,"abs_y":2337}' className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":510,"y":2326,"w":355,"h":32,"abs_x":950,"abs_y":2369}' className="mb-6 flex justify-between items-start">
<iconify-icon bis_size='{"x":510,"y":2326,"w":32,"h":32,"abs_x":950,"abs_y":2369}' className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:structure-linear" width="32"></iconify-icon>
<span bis_size='{"x":833,"y":2326,"w":31,"h":24,"abs_x":1273,"abs_y":2369}' className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">02</span>
</div>
<h3 bis_size='{"x":510,"y":2382,"w":355,"h":28,"abs_x":950,"abs_y":2425}' className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Architecture</h3>
<p bis_size='{"x":510,"y":2422,"w":355,"h":45,"abs_x":950,"abs_y":2465}' className="text-sm text-gray-500 leading-relaxed font-light">Designing custom AI models and automated pipelines tailored specifically for your brand's unique needs.</p>
</div>

<div bis_size='{"x":24,"y":2533,"w":421,"h":230,"abs_x":464,"abs_y":2576}' className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-300 opacity-0">
<div bis_size='{"x":25,"y":2534,"w":419,"h":1,"abs_x":465,"abs_y":2577}' className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":57,"y":2566,"w":355,"h":32,"abs_x":497,"abs_y":2609}' className="mb-6 flex justify-between items-start">
<iconify-icon bis_size='{"x":57,"y":2566,"w":32,"h":32,"abs_x":497,"abs_y":2609}' className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:play-circle-linear" width="32"></iconify-icon>
<span bis_size='{"x":380,"y":2566,"w":31,"h":24,"abs_x":820,"abs_y":2609}' className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">03</span>
</div>
<h3 bis_size='{"x":57,"y":2622,"w":355,"h":28,"abs_x":497,"abs_y":2665}' className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Execution</h3>
<p bis_size='{"x":57,"y":2662,"w":355,"h":68,"abs_x":497,"abs_y":2705}' className="text-sm text-gray-500 leading-relaxed font-light">Deploying high-end visual campaigns and seamlessly integrating new workflows into your existing ecosystem.</p>
</div>

<div bis_size='{"x":477,"y":2533,"w":421,"h":230,"abs_x":917,"abs_y":2576}' className="group relative p-8 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 rounded-2xl reveal-on-scroll delay-400 opacity-0">
<div bis_size='{"x":478,"y":2534,"w":419,"h":1,"abs_x":918,"abs_y":2577}' className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div bis_size='{"x":510,"y":2566,"w":355,"h":32,"abs_x":950,"abs_y":2609}' className="mb-6 flex justify-between items-start">
<iconify-icon bis_size='{"x":510,"y":2566,"w":32,"h":32,"abs_x":950,"abs_y":2609}' className="text-gray-400 group-hover:text-orange-500 transition-colors" icon="solar:graph-up-linear" width="32"></iconify-icon>
<span bis_size='{"x":833,"y":2566,"w":31,"h":24,"abs_x":1273,"abs_y":2609}' className="font-mono text-xs text-orange-500 tracking-widest bg-orange-500/10 px-2 py-1 rounded">04</span>
</div>
<h3 bis_size='{"x":510,"y":2622,"w":355,"h":28,"abs_x":950,"abs_y":2665}' className="text-xl font-display font-medium text-white mb-3 group-hover:translate-x-1 transition-transform">Optimization</h3>
<p bis_size='{"x":510,"y":2662,"w":355,"h":45,"abs_x":950,"abs_y":2705}' className="text-sm text-gray-500 leading-relaxed font-light">Continuous fine-tuning of models and pipelines to ensure maximum performance and output quality.</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2859,"w":922,"h":680,"abs_x":440,"abs_y":2902}' className="py-24 px-6 border-t border-white/5 bg-[#050505]" id="projects">
<div bis_size='{"x":24,"y":2956,"w":874,"h":487,"abs_x":464,"abs_y":2999}' className="max-w-[1600px] mx-auto">
<div bis_size='{"x":24,"y":2956,"w":874,"h":72,"abs_x":464,"abs_y":2999}' className="flex justify-between items-end mb-12 reveal-on-scroll">
<div bis_size='{"x":24,"y":2956,"w":299,"h":72,"abs_x":464,"abs_y":2999}' className="">
<h2 bis_size='{"x":24,"y":2956,"w":299,"h":40,"abs_x":464,"abs_y":2999}' className="font-display text-4xl font-semibold tracking-tight text-white mb-2">Generated Output</h2>
<p bis_size='{"x":24,"y":3004,"w":299,"h":24,"abs_x":464,"abs_y":3047}' className="text-gray-500 font-light">Recent training clusters and results.</p>
</div>
</div>
<div bis_size='{"x":24,"y":3076,"w":874,"h":367,"abs_x":464,"abs_y":3119}' className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":3076,"w":275,"h":367,"abs_x":464,"abs_y":3119}' className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-100">
<div bis_size='{"x":25,"y":3077,"w":273,"h":365,"abs_x":465,"abs_y":3120}' className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Abstract AI" bis_size='{"x":25,"y":3077,"w":273,"h":365,"abs_x":465,"abs_y":3120}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48158ae4-0512-47bf-8a73-ab2be48fdadc_800w.webp" style={{}}/>
</div>
<div bis_size='{"x":25,"y":3077,"w":273,"h":365,"abs_x":465,"abs_y":3120}' className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0 cursor-pointer" onclick="window.location.href='https://drive.google.com/file/d/1oaKwXZio8k8SooFpmJqsz-q4AwxaHOXc/view?usp=drive_link'" role="button">
</div>
<div bis_size='{"x":25,"y":3346,"w":273,"h":112,"abs_x":465,"abs_y":3389}' className="group-hover:translate-y-0 transition-transform duration-300 w-full pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0 translate-y-4">
<div bis_size='{"x":49,"y":3370,"w":225,"h":16,"abs_x":489,"abs_y":3413}' className="text-orange-500 text-xs font-mono mb-2 tracking-widest">FINTECH // LONDON</div>
<h3 bis_size='{"x":49,"y":3394,"w":225,"h":32,"abs_x":489,"abs_y":3437}' className="font-display text-2xl font-medium text-white mb-2">Neo-Bank Identity</h3>
</div>
</div>

<div bis_size='{"x":323,"y":3076,"w":275,"h":367,"abs_x":763,"abs_y":3119}' className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-200">
<div bis_size='{"x":324,"y":3077,"w":273,"h":365,"abs_x":764,"abs_y":3120}' className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="AI Architecture" bis_size='{"x":324,"y":3077,"w":273,"h":365,"abs_x":764,"abs_y":3120}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e7cedac2-cfed-44fe-87d7-432e596c123a_800w.webp" style={{}}/>
</div>
<div bis_size='{"x":324,"y":3077,"w":273,"h":365,"abs_x":764,"abs_y":3120}' className="bg-gradient-to-t from-black via-transparent to-transparent opacity-80 absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":324,"y":3346,"w":273,"h":112,"abs_x":764,"abs_y":3389}' className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div bis_size='{"x":348,"y":3370,"w":225,"h":16,"abs_x":788,"abs_y":3413}' className="text-orange-500 text-xs font-mono mb-2 tracking-widest">FASHION // TOKYO</div>
<h3 bis_size='{"x":348,"y":3394,"w":225,"h":32,"abs_x":788,"abs_y":3437}' className="font-display text-2xl font-medium text-white mb-2">Synthetic Fabrics</h3>
</div>
</div>

<div bis_size='{"x":622,"y":3076,"w":275,"h":367,"abs_x":1062,"abs_y":3119}' className="group relative aspect-[4/5] md:aspect-[3/4] rounded-xl overflow-hidden border border-white/5 cursor-pointer reveal-on-scroll delay-300">
<div bis_size='{"x":623,"y":3077,"w":273,"h":365,"abs_x":1063,"abs_y":3120}' className="absolute inset-0 bg-gray-800 transition-transform duration-700 group-hover:scale-105">
<img alt="Data Vis" bis_size='{"x":623,"y":3077,"w":273,"h":365,"abs_x":1063,"abs_y":3120}' className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/01e03aad-6c6c-4c37-8f2e-539467e631dd_800w.webp"/>
</div>
<div bis_size='{"x":623,"y":3077,"w":273,"h":365,"abs_x":1063,"abs_y":3120}' className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div bis_size='{"x":623,"y":3346,"w":273,"h":112,"abs_x":1063,"abs_y":3389}' className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
<div bis_size='{"x":647,"y":3370,"w":225,"h":16,"abs_x":1087,"abs_y":3413}' className="text-orange-500 text-xs font-mono mb-2 tracking-widest">DATA // GLOBAL</div>
<h3 bis_size='{"x":647,"y":3394,"w":225,"h":32,"abs_x":1087,"abs_y":3437}' className="font-display text-2xl font-medium text-white mb-2">Market Pulse</h3>
</div>
</div>
</div>
</div>
</section>


<section bis_size='{"x":0,"y":3539,"w":922,"h":970,"abs_x":440,"abs_y":3582}' className="min-h-screen flex overflow-hidden bg-gray-950 pt-24 pb-24 relative items-center justify-center" id="access">
<div bis_size='{"x":0,"y":3539,"w":922,"h":970,"abs_x":440,"abs_y":3582}' className="absolute inset-0 overflow-hidden pointer-events-none">
<div bis_size='{"x":61,"y":3624,"w":800,"h":800,"abs_x":501,"abs_y":3667}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-[120px] opacity-20">
</div>
</div>
<div bis_size='{"x":77,"y":3635,"w":768,"h":778,"abs_x":517,"abs_y":3678}' className="z-10 reveal-on-scroll w-full max-w-3xl pr-8 pl-8 relative opacity-0">
<div bis_size='{"x":109,"y":3635,"w":704,"h":220,"abs_x":549,"abs_y":3678}' className="text-center mb-16">
<div bis_size='{"x":429,"y":3635,"w":64,"h":64,"abs_x":869,"abs_y":3678}' className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center shadow-glow">
<iconify-icon bis_size='{"x":445,"y":3651,"w":32,"h":32,"abs_x":885,"abs_y":3694}' className="animate-[spin_10s_linear_infinite] text-orange-500" height="32" icon="solar:rocket-2-outline" width="32"></iconify-icon>
</div>
<h2 bis_size='{"x":109,"y":3723,"w":704,"h":96,"abs_x":549,"abs_y":3766}' className="text-5xl font-bold tracking-tight font-display mb-3">Ready to automate your creative future?</h2>
<p bis_size='{"x":109,"y":3831,"w":704,"h":24,"abs_x":549,"abs_y":3874}' className="text-gray-500">Join the ranks of forward-thinking brands leveraging Generative AI.</p>
</div>
<form bis_size='{"x":109,"y":3919,"w":704,"h":494,"abs_x":549,"abs_y":3962}' className="md:p-10 bg-gray-900/30 border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-md space-y-6">
<div bis_size='{"x":150,"y":3960,"w":622,"h":328,"abs_x":590,"abs_y":4003}' className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div bis_size='{"x":150,"y":3960,"w":295,"h":69,"abs_x":590,"abs_y":4003}' className="group">
<label bis_size='{"x":150,"y":3960,"w":295,"h":16,"abs_x":590,"abs_y":4003}' className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Name</label>
<input bis_size='{"x":150,"y":3984,"w":295,"h":45,"abs_x":590,"abs_y":4027}' className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b pt-2 pb-2" placeholder="Name or Org" type="text"/>
</div>

<div bis_size='{"x":477,"y":3960,"w":295,"h":69,"abs_x":917,"abs_y":4003}' className="group">
<label bis_size='{"x":477,"y":3960,"w":295,"h":16,"abs_x":917,"abs_y":4003}' className="block uppercase group-focus-within:text-orange-500 transition-colors text-xs text-gray-500 tracking-wider font-mono mb-2">Phone</label>
<input bis_size='{"x":477,"y":3984,"w":295,"h":45,"abs_x":917,"abs_y":4027}' className="focus:outline-none focus:border-orange-500 transition-colors text-lg text-white bg-transparent w-full border-gray-700 border-b pt-2 pb-2" placeholder="+1 (555) 000-0000" type="tel"/>
</div>

<div bis_size='{"x":150,"y":4061,"w":622,"h":69,"abs_x":590,"abs_y":4104}' className="group md:col-span-2">
<label bis_size='{"x":150,"y":4061,"w":622,"h":16,"abs_x":590,"abs_y":4104}' className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Coordinates</label>
<input bis_size='{"x":150,"y":4085,"w":622,"h":45,"abs_x":590,"abs_y":4128}' className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors" placeholder="Email Address" type="email"/>
</div>

<div bis_size='{"x":150,"y":4162,"w":622,"h":126,"abs_x":590,"abs_y":4205}' className="group md:col-span-2">
<label bis_size='{"x":150,"y":4162,"w":622,"h":16,"abs_x":590,"abs_y":4205}' className="block text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider group-focus-within:text-orange-500 transition-colors">Project Brief</label>
<textarea bis_size='{"x":150,"y":4186,"w":622,"h":96,"abs_x":590,"abs_y":4229}' className="w-full bg-transparent border-b border-gray-700 py-2 text-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none h-24" placeholder="Tell us about your creative goals or workflow challenges..."></textarea>
</div>
</div>
<div bis_size='{"x":150,"y":4312,"w":622,"h":60,"abs_x":590,"abs_y":4355}' className="text-right pt-4">
<button bis_size='{"x":590,"y":4328,"w":181,"h":44,"abs_x":1030,"abs_y":4371}' className="hover:bg-orange-500 hover:text-white transition-all duration-300 inline-flex gap-2 text-sm font-bold text-black tracking-wide bg-white rounded-lg pt-3 pr-8 pb-3 pl-8 gap-x-2 gap-y-2 items-center group" type="submit">
<span bis_size='{"x":622,"y":4340,"w":95,"h":20,"abs_x":1062,"abs_y":4383}'>CONTACT US</span>
<iconify-icon bis_size='{"x":726,"y":4343,"w":14,"h":14,"abs_x":1166,"abs_y":4386}' className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer bis_size='{"x":0,"y":4509,"w":922,"h":121,"abs_x":440,"abs_y":4552}' className="border-t border-white/5 bg-gray-950 py-12 px-6">
<div bis_size='{"x":24,"y":4558,"w":874,"h":24,"abs_x":464,"abs_y":4601}' className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div bis_size='{"x":24,"y":4558,"w":82,"h":24,"abs_x":464,"abs_y":4601}' className="flex items-center gap-2">
<div bis_size='{"x":24,"y":4562,"w":16,"h":16,"abs_x":464,"abs_y":4605}' className="flex group-hover:border-orange-500/50 transition-colors duration-300 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-orange-400 to-orange-600 w-4 h-4 rounded-lg relative items-center justify-center" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(251, 146, 60, 1), rgba(234, 88, 12, 1))', -BorderRadiusBefore: '8px'}}>
<iconify-icon bis_size='{"x":32,"y":4570,"w":0,"h":0,"abs_x":472,"abs_y":4613}' className="text-white group-hover:text-orange-500 transition-colors" icon="solar:intelligent-correction-linear" width="20"></iconify-icon>
</div>
<span bis_size='{"x":48,"y":4558,"w":58,"h":24,"abs_x":488,"abs_y":4601}' className="font-bold text-white tracking-tight font-display" style={{}}>LATICCE</span>
</div>
<div bis_size='{"x":376,"y":4563,"w":227,"h":15,"abs_x":816,"abs_y":4606}' className="text-[10px] uppercase text-gray-600 tracking-widest font-mono">Based in Spain. Operating Globally.</div>
<div bis_size='{"x":874,"y":4558,"w":24,"h":24,"abs_x":1314,"abs_y":4601}' className="flex gap-6 text-gray-500">
<a bis_size='{"x":874,"y":4558,"w":0,"h":24,"abs_x":1314,"abs_y":4601}' className="hover:text-white transition-colors" href="#"><iconify-icon bis_size='{"x":874,"y":4576,"w":0,"h":0,"abs_x":1314,"abs_y":4619}' icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a bis_size='{"x":898,"y":4558,"w":0,"h":24,"abs_x":1338,"abs_y":4601}' className="hover:text-white transition-colors" href="#"><iconify-icon bis_size='{"x":898,"y":4576,"w":0,"h":0,"abs_x":1338,"abs_y":4619}' icon="solar:brand-github-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
