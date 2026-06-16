import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const container = document.getElementById('plate-container');
            const plateCount = 18;
            const plates = [];
            
            // Generate Plates
            for (let i = 0; i < plateCount; i++) {
                const el = document.createElement('div');
                el.classList.add('l-plate');
                
                // Random scale
                const scale = 0.5 + Math.random() * 0.5; // 0.5 to 1.0
                
                // Random Size based on scale
                const size = 3 * scale;
                el.style.width = `${size}rem`;
                el.style.height = `${size}rem`;
                
                // Inner L
                const l = document.createElement('span');
                l.classList.add('l-letter');
                l.textContent = 'L';
                l.style.fontSize = `${2 * scale}rem`;
                l.style.marginTop = `${0.2 * scale}rem`;
                
                el.appendChild(l);
                
                // Random Position
                // We want them spread out but not too close to the exact center text
                let x = Math.random() * 100;
                let y = Math.random() * 100;
                
                // Store base position
                const basePos = { x, y };
                
                el.style.left = `${x}%`;
                el.style.top = `${y}%`;
                
                // Random Rotation
                const rotation = (Math.random() - 0.5) * 40;
                el.style.transform = `rotate(${rotation}deg)`;
                
                container.appendChild(el);
                
                plates.push({
                    el,
                    baseX: x, // percentage
                    baseY: y, // percentage
                    vx: 0,
                    vy: 0,
                    rotation: rotation,
                    scale: scale
                });
            }

            // Mouse Interaction
            let mouseX = window.innerWidth / 2;
            let mouseY = window.innerHeight / 2;

            window.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });

            function animate() {
                const containerRect = container.getBoundingClientRect();
                
                plates.forEach(plate => {
                    // Convert % pos to pixels relative to container
                    const plateX = (plate.baseX / 100) * containerRect.width;
                    const plateY = (plate.baseY / 100) * containerRect.height;
                    
                    // Distance from mouse relative to container
                    // Note: mouse coords are global, need to offset if container moves (e.g. scroll)
                    // but hero is usually top. Using clientX/Y works for fixed/absolute logic relative to viewport 
                    // if the container covers viewport.
                    
                    const dx = plateX - mouseX;
                    const dy = plateY - mouseY; // Simplification assuming full screen hero
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    
                    const repelRange = 300;
                    
                    if (dist < repelRange) {
                        const angle = Math.atan2(dy, dx);
                        const force = (repelRange - dist) / repelRange;
                        
                        // Push away
                        const pushX = Math.cos(angle) * force * 100;
                        const pushY = Math.sin(angle) * force * 100;
                        
                        plate.vx += (pushX - plate.vx) * 0.1;
                        plate.vy += (pushY - plate.vy) * 0.1;
                    } else {
                        // Return to home
                        plate.vx += (0 - plate.vx) * 0.05;
                        plate.vy += (0 - plate.vy) * 0.05;
                    }

                    plate.el.style.transform = `translate(${plate.vx}px, ${plate.vy}px) rotate(${plate.rotation}deg) scale(${plate.scale})`;
                });
                
                requestAnimationFrame(animate);
            }

            animate();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter text-white flex items-center gap-2" href="#">
<iconify-icon className="text-red-500 text-xl" icon="solar:wheel-linear" strokeWidth="1.5"></iconify-icon>
                CLUTCH.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#features">Process</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
<a className="text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 px-4 py-2 rounded-full transition-all duration-200 text-xs tracking-wide" href="#contact">
                    Book Lesson
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg pt-16">

<div className="absolute inset-0 z-0 opacity-40" id="plate-container"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
<span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">Accepting new students</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-6 leading-[0.95]">
                Master the road <br/>
<span className="text-zinc-500">with confidence.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Modern driving instruction designed for the next generation. No shouting, just structured progress and data-driven feedback.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-transform active:scale-95" href="#contact">
<span className="relative z-10">Start Driving</span>
<div className="absolute inset-0 bg-zinc-200 group-hover:translate-y-full transition-transform duration-300"></div>
</a>
<a className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#features">
                    View Packages
                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent z-10"></div>
</section>

<section className="py-24 md:py-32 relative bg-zinc-950" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200 text-2xl" icon="solar:smartphone-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">App Scheduling</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Book lessons, track your progress, and pay instantly through our dedicated student portal.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200 text-2xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Custom Routes</h3>
<p className="text-zinc-400 text-sm leading-relaxed">We analyze exam routes and traffic patterns to ensure you're prepared for any scenario.</p>
</div>

<div className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 hover:bg-zinc-900/40 transition-colors duration-300 group">
<div className="h-12 w-12 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-zinc-200 text-2xl" icon="solar:verified-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">High Pass Rate</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Our students pass their practical exam 30% faster than the national average.</p>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>

<section className="py-24 md:py-32 relative" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                        Ready to lose the <br/>
<span className="text-red-500">L plates?</span>
</h2>
<p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-md">
                        Fill out the form to schedule your first lesson. We usually respond within 2 hours during business days.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">+1 (555) 012-3456</span>
</div>
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-zinc-300 text-sm">hello@clutchdriving.com</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
<form className="space-y-4" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="first-name">First Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg p-3 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="last-name">Last Name</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg p-3 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="email">Email</label>
<input className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg p-3 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Experience Level</label>
<div className="grid grid-cols-3 gap-3 pt-1">
<label className="cursor-pointer">
<input className="peer sr-only" name="experience" type="radio"/>
<div className="text-center py-2.5 px-2 rounded-md border border-zinc-800 bg-zinc-950 text-zinc-400 text-xs font-medium peer-checked:bg-zinc-100 peer-checked:text-black peer-checked:border-zinc-100 transition-all">
                                        Beginner
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="experience" type="radio"/>
<div className="text-center py-2.5 px-2 rounded-md border border-zinc-800 bg-zinc-950 text-zinc-400 text-xs font-medium peer-checked:bg-zinc-100 peer-checked:text-black peer-checked:border-zinc-100 transition-all">
                                        Intermediate
                                    </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="experience" type="radio"/>
<div className="text-center py-2.5 px-2 rounded-md border border-zinc-800 bg-zinc-950 text-zinc-400 text-xs font-medium peer-checked:bg-zinc-100 peer-checked:text-black peer-checked:border-zinc-100 transition-all">
                                        Test Ready
                                    </div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-zinc-500 uppercase tracking-wider" htmlFor="message">Goals / Questions</label>
<textarea className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-lg p-3 outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all placeholder:text-zinc-700 resize-none" id="message" placeholder="I want to learn parallel parking..." rows="3"></textarea>
</div>
<div className="flex items-start gap-3 py-2">
<div className="relative flex items-center">
<input className="peer h-4 w-4 cursor-pointer appearance-none rounded border border-zinc-700 bg-zinc-900 checked:bg-white checked:border-white transition-all" id="terms" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black opacity-0 peer-checked:opacity-100 pointer-events-none text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="terms">I agree to the <span className="text-zinc-300 underline underline-offset-2">Terms of Service</span> and <span className="text-zinc-300 underline underline-offset-2">Privacy Policy</span>.</label>
</div>
<button className="w-full py-3 px-4 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-950 focus:ring-white transition-all mt-2" type="submit">
                            Send Request
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-600" icon="solar:wheel-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-600 tracking-tight">CLUTCH DRIVING SCHOOL © 2024</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:brand-tiktok-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
