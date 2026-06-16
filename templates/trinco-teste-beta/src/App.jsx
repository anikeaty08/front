import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            gsap.registerPlugin(ScrollTrigger);

            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const isDesktop = window.matchMedia("(pointer: fine)").matches;

            // 1. Mouse Glow Effect (Only Desktop)
            if (isDesktop && !prefersReducedMotion) {
                const glow = document.getElementById('mouse-glow');
                let mouseX = 0, mouseY = 0;
                let glowX = 0, glowY = 0;

                document.addEventListener('mousemove', (e) => {
                    mouseX = e.clientX;
                    mouseY = e.clientY;
                    if(glow.style.opacity === "0" || !glow.style.opacity) {
                        glow.style.opacity = "1";
                    }
                });

                // Smooth following using requestAnimationFrame
                function animateGlow() {
                    glowX += (mouseX - glowX) * 0.1;
                    glowY += (mouseY - glowY) * 0.1;
                    glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
                    requestAnimationFrame(animateGlow);
                }
                animateGlow();
                
                document.addEventListener('mouseleave', () => glow.style.opacity = "0");
            }

            // 2. Hero Text Animation (Staggered words)
            if (!prefersReducedMotion) {
                const words = document.querySelectorAll('.reveal-word span');
                gsap.to(words, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power3.out",
                    delay: 0.2
                });
            }

            // 3. Hero Lock Animation (Interactive & On Load)
            const lockTl = gsap.timeline({ defaults: { ease: "back.out(1.5)", duration: 0.8 } });
            lockTl.to("#lock-top", { opacity: 1, y: 0, startAt: { y: -30, opacity: 0 }, delay: 0.8 })
                  .to("#lock-left", { opacity: 1, x: 0, startAt: { x: -20, opacity: 0 } }, "-=0.6")
                  .to("#lock-right", { opacity: 1, x: 0, startAt: { x: 20, opacity: 0 } }, "-=0.7")
                  .to(".trinco-lock-piece", { scale: 1.05, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" });
            
            // Re-trigger lock animation on click
            document.getElementById('hero-lock').addEventListener('click', () => {
                gsap.fromTo(".trinco-lock-piece", 
                    { scale: 1, y: 0 }, 
                    { scale: 1.1, y: -2, duration: 0.1, yoyo: true, repeat: 1, ease: "power2.out", stagger: 0.05 }
                );
            });

            // 4. Dynamic Pain Section Animation
            if (!prefersReducedMotion) {
                const painTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: "#pain-card",
                        start: "top 60%",
                        once: true
                    }
                });

                painTl.to('#pain-progress', { width: '90%', duration: 1.5, ease: "power2.inOut" })
                      .to('#pain-progress', { backgroundColor: '#ef4444', duration: 0.3 }, "+=0.2")
                      .to('#pain-status', { opacity: 1, y: 0, startAt: { y: -10 }, duration: 0.4 }, "-=0.2")
                      .to('#pain-glow', { opacity: 1, duration: 0.5 }, "-=0.4")
                      .to('#pain-consequence', { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.2)" }, "+=0.1");
            }

            // 5. Scroll Reveals (Mask Slide)
            if (!prefersReducedMotion) {
                gsap.utils.toArray('.reveal-mask').forEach(elem => {
                    gsap.set(elem, { visibility: "visible" });
                    gsap.fromTo(elem, 
                        { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 40 },
                        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0, duration: 1.2, ease: "power4.out",
                          scrollTrigger: { trigger: elem, start: "top 85%" }
                        }
                    );
                });
            } else {
                gsap.utils.toArray('.reveal-mask').forEach(elem => {
                    gsap.set(elem, { visibility: "visible", clipPath: "none", y: 0 });
                });
            }

            // 6. 3D Tilt Cards (Desktop only)
            if (isDesktop && !prefersReducedMotion) {
                document.querySelectorAll('.tilt-card').forEach(card => {
                    card.addEventListener('mousemove', e => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        // Calculate rotation (inverted for natural feel)
                        const rotateX = ((y - centerY) / centerY) * -8;
                        const rotateY = ((x - centerX) / centerX) * 8;
                        
                        gsap.to(card, {
                            rotateX: rotateX,
                            rotateY: rotateY,
                            transformPerspective: 1000,
                            ease: "power2.out",
                            duration: 0.4
                        });
                    });

                    card.addEventListener('mouseleave', () => {
                        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.7, ease: "elastic.out(1, 0.3)" });
                    });
                });
            }

            // 7. Interactive Timeline Drawing
            if (!prefersReducedMotion) {
                gsap.to('#timeline-progress', {
                    height: '100%',
                    ease: "none",
                    scrollTrigger: {
                        trigger: '#how-it-works',
                        start: "top 40%",
                        end: "bottom 80%",
                        scrub: 1
                    }
                });

                // Highlight dots as line passes them
                gsap.utils.toArray('.timeline-step').forEach((step, i) => {
                    const dot = step.querySelector('.step-dot');
                    ScrollTrigger.create({
                        trigger: step,
                        start: "top 50%",
                        onEnter: () => {
                            gsap.to(dot, { backgroundColor: '#18A957', borderColor: '#18A957', color: '#fff', scale: 1.2, duration: 0.3, ease: "back.out" });
                        },
                        onLeaveBack: () => {
                            gsap.to(dot, { backgroundColor: '#0B0D10', borderColor: '#22262B', color: '#555D67', scale: 1, duration: 0.3 });
                        }
                    });
                });
            }

            // 8. FAQ Accordion Logic
            const faqBtns = document.querySelectorAll('.faq-btn');
            faqBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const content = btn.nextElementSibling;
                    const icon = btn.querySelector('iconify-icon');
                    const isExpanded = btn.getAttribute('aria-expanded') === 'true';

                    // Close all
                    document.querySelectorAll('.faq-content').forEach(c => {
                        gsap.to(c, { height: 0, duration: 0.4, ease: "power3.inOut" });
                    });
                    document.querySelectorAll('.faq-btn').forEach(b => {
                        b.setAttribute('aria-expanded', 'false');
                        b.querySelector('iconify-icon').style.transform = 'rotate(0deg)';
                    });

                    // Open target if was closed
                    if (!isExpanded) {
                        btn.setAttribute('aria-expanded', 'true');
                        icon.style.transform = 'rotate(180deg)';
                        gsap.set(content, { height: "auto" });
                        const targetHeight = content.offsetHeight;
                        gsap.fromTo(content, { height: 0 }, { height: targetHeight, duration: 0.4, ease: "power3.inOut" });
                    }
                });
            });

            // 9. Magnetic Buttons (Desktop)
            if (isDesktop && !prefersReducedMotion) {
                const magnetBtns = document.querySelectorAll('.magnet-btn');
                magnetBtns.forEach(btn => {
                    btn.addEventListener('mousemove', (e) => {
                        const rect = btn.getBoundingClientRect();
                        const x = e.clientX - rect.left - rect.width / 2;
                        const y = e.clientY - rect.top - rect.height / 2;
                        
                        gsap.to(btn, {
                            x: x * 0.15,
                            y: y * 0.15,
                            duration: 0.3,
                            ease: "power2.out"
                        });
                    });

                    btn.addEventListener('mouseleave', () => {
                        gsap.to(btn, {
                            x: 0,
                            y: 0,
                            duration: 0.6,
                            ease: "elastic.out(1, 0.3)"
                        });
                    });
                });
            }

            // Header Blur on Scroll
            const header = document.getElementById('main-header');
            window.addEventListener('scroll', () => {
                if(window.scrollY > 50) {
                    header.classList.add('shadow-md', 'shadow-[#000]/20');
                    header.classList.replace('bg-[#0B0D10]/70', 'bg-[#0B0D10]/90');
                } else {
                    header.classList.remove('shadow-md', 'shadow-[#000]/20');
                    header.classList.replace('bg-[#0B0D10]/90', 'bg-[#0B0D10]/70');
                }
            }, { passive: true });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="mouse-glow"></div>
<div className="grid-bg"></div>
<div className="noise-bg"></div>

<header className="fixed top-0 inset-x-0 z-40 border-b border-[#22262B] bg-[#0B0D10]/70 backdrop-blur-xl transition-all duration-300" id="main-header">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-heading font-bold text-xl tracking-tight text-[#EDEFF2] flex items-center gap-2 group" href="#">
<div className="w-5 h-5 flex flex-wrap gap-0.5 items-center justify-center transition-transform group-hover:scale-110">
<div className="w-full h-1.5 bg-[#18A957] rounded-sm shadow-[0_0_8px_rgba(24,169,87,0.5)]"></div>
<div className="w-[45%] h-2.5 bg-[#EDEFF2] rounded-sm mr-auto"></div>
<div className="w-[45%] h-2.5 bg-[#EDEFF2] rounded-sm"></div>
</div>
                TRINCO
            </a>
<div className="flex items-center gap-6">
<span className="hidden md:flex items-center gap-2 text-xs font-medium text-[#18A957] bg-[#18A957]/10 px-3 py-1 rounded-full border border-[#18A957]/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18A957] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#18A957]"></span>
</span>
                    Beta Exclusivo
                </span>
<a className="hidden sm:inline-flex items-center text-sm font-medium text-[#EDEFF2] hover:text-[#18A957] transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[#18A957] hover:after:w-full after:transition-all after:duration-300" href="#waitlist">
                    Garantir Acesso
                </a>
</div>
</div>
</header>
<main className="flex-1 relative z-10 pt-24 lg:pt-32">

<section className="max-w-4xl mx-auto px-6 pt-12 pb-24 text-center relative">

<div className="absolute top-10 left-10 md:left-0 text-[#22262B] float-slow opacity-50 hidden md:block">
<iconify-icon className="text-4xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="absolute bottom-20 right-10 md:right-0 text-[#22262B] float-medium opacity-50 hidden md:block">
<iconify-icon className="text-4xl" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="relative w-20 h-20 mx-auto mb-10 flex flex-col items-center justify-center gap-1 group cursor-pointer" id="hero-lock">
<div className="absolute inset-0 bg-[#18A957]/20 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="w-full h-5 bg-[#18A957] rounded-sm trinco-lock-piece opacity-0 shadow-[0_0_15px_rgba(24,169,87,0.4)]" id="lock-top"></div>
<div className="w-full flex justify-between gap-1">
<div className="w-[48%] h-8 bg-[#EDEFF2] rounded-sm trinco-lock-piece opacity-0" id="lock-left"></div>
<div className="w-[48%] h-8 bg-[#EDEFF2] rounded-sm trinco-lock-piece opacity-0" id="lock-right"></div>
</div>
</div>
<h1 className="font-heading font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6 leading-[1.1]" id="hero-title">
<span className="reveal-word"><span>A</span></span>
<span className="reveal-word"><span>sua</span></span>
<span className="reveal-word"><span>promessa</span></span><br className="hidden sm:block"/>
<span className="reveal-word"><span>virou</span></span>
<span className="reveal-word"><span className="text-[#18A957] relative">
                    patrimônio.
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#18A957] to-transparent opacity-50 blur-sm"></span>
</span></span>
</h1>
<p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto mb-10 leading-relaxed reveal-mask">
                Você não falha por falta de informação.<br className="hidden sm:block"/>
                Você falha porque sua decisão não está <span className="text-[#EDEFF2] font-medium border-b border-[#22262B]">blindada contra você mesmo.</span>
</p>
<div className="flex flex-col items-center gap-6 reveal-mask">
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
<a className="magnet-btn w-full sm:w-auto bg-[#18A957] hover:bg-[#148F49] text-white font-medium text-sm py-4 px-10 rounded-lg shadow-[0_0_20px_rgba(24,169,87,0.3)] hover:shadow-[0_0_30px_rgba(24,169,87,0.5)] transition-all active:scale-95 group overflow-hidden relative" href="#waitlist">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
<span className="relative flex items-center gap-2">
                            Entrar na fila prioritária
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
<a className="w-full sm:w-auto bg-transparent border border-[#22262B] text-[#EDEFF2] hover:bg-[#22262B]/50 hover:border-[#555D67] font-medium text-sm py-4 px-8 rounded-lg transition-all active:scale-95 flex items-center justify-center gap-2" href="#how-it-works">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                        Como funciona
                    </a>
</div>
<div className="flex items-center gap-3 text-xs text-[#555D67] bg-[#0F1115]/50 border border-[#22262B] py-2 px-4 rounded-full backdrop-blur-sm">
<div className="flex -space-x-2">
<div className="w-5 h-5 rounded-full bg-[#22262B] border border-[#0B0D10] flex items-center justify-center"><iconify-icon className="text-[10px]" icon="solar:user-linear"></iconify-icon></div>
<div className="w-5 h-5 rounded-full bg-[#18A957]/20 border border-[#0B0D10] flex items-center justify-center"><iconify-icon className="text-[10px] text-[#18A957]" icon="solar:user-linear"></iconify-icon></div>
<div className="w-5 h-5 rounded-full bg-[#22262B] border border-[#0B0D10] flex items-center justify-center"><iconify-icon className="text-[10px]" icon="solar:user-linear"></iconify-icon></div>
</div>
<span>Junte-se a <strong className="text-[#EDEFF2]">482+</strong> investidores aguardando.</span>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-6 py-24 border-t border-[#22262B]/50" id="pain-section">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl tracking-tight mb-6 reveal-mask text-gradient">
                        A sabotagem é silenciosa.
                    </h2>
<p className="text-[#9CA3AF] text-base leading-relaxed mb-8 reveal-mask">
                        Você promete que vai investir todo mês. Aí chega o mês 3… e o aporte vira "só hoje". A disciplina escorrega nas pequenas urgências do dia a dia. <strong className="text-[#EDEFF2] font-medium">O custo da inércia é o seu futuro.</strong>
</p>
<ul className="space-y-5 reveal-mask">
<li className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#0F1115] border border-transparent hover:border-[#22262B] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#0F1115] border border-[#22262B] flex items-center justify-center shrink-0 group-hover:border-red-500/30 group-hover:text-red-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#EDEFF2] mb-1">Motivação não paga boleto</h4>
<p className="text-xs text-[#555D67]">Planilhas bonitas não impedem você de gastar o dinheiro do aporte.</p>
</div>
</li>
<li className="flex items-start gap-4 p-3 rounded-lg hover:bg-[#0F1115] border border-transparent hover:border-[#22262B] transition-colors group">
<div className="w-10 h-10 rounded-full bg-[#0F1115] border border-[#22262B] flex items-center justify-center shrink-0 group-hover:border-[#18A957]/30 group-hover:text-[#18A957] transition-colors">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-[#EDEFF2] mb-1">Disciplina precisa de estrutura</h4>
<p className="text-xs text-[#555D67]">Força de vontade acaba. Sistemas e travas permanecem.</p>
</div>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 bg-[#0F1115] border border-[#22262B] rounded-2xl p-8 reveal-mask relative overflow-hidden group shadow-2xl" id="pain-card">

<div className="absolute -top-20 -right-20 w-40 h-40 bg-red-500/10 blur-3xl rounded-full transition-opacity duration-500" id="pain-glow"></div>
<div className="flex items-center justify-between mb-8 border-b border-[#22262B] pb-4 relative z-10">
<span className="text-xs font-semibold tracking-widest text-[#555D67] uppercase flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon> Simulador de Disciplina
                        </span>
<span className="text-xs font-medium text-red-400 bg-red-400/10 border border-red-400/20 px-3 py-1 rounded-full opacity-0 transition-opacity duration-300" id="pain-status">
                            Falha no Mês 03
                        </span>
</div>
<div className="space-y-6 relative z-10">
<div className="flex justify-between text-xs text-[#9CA3AF]">
<span>Mês 01</span>
<span>Mês 02</span>
<span className="text-[#EDEFF2] font-semibold">Mês 03 (Agora)</span>
</div>
<div className="h-3 w-full bg-[#0B0D10] rounded-full overflow-hidden border border-[#22262B] p-0.5">
<div className="h-full bg-gradient-to-r from-[#18A957] to-[#148F49] rounded-full w-[10%] relative" id="pain-progress">
<div className="absolute top-0 right-0 bottom-0 w-10 bg-white/20 animate-pulse"></div>
</div>
</div>
<div className="bg-[#0B0D10] border border-[#22262B] rounded-lg p-4 flex items-center justify-between opacity-0 translate-y-4" id="pain-consequence">
<div className="flex items-center gap-3">
<iconify-icon className="text-red-400 text-xl" icon="solar:graph-down-linear"></iconify-icon>
<div>
<p className="text-xs text-[#9CA3AF]">Impacto nos Juros Compostos</p>
<p className="text-sm font-semibold text-[#EDEFF2]">- R$ 14.250,00 <span className="text-[10px] font-normal text-[#555D67]">em 10 anos</span></p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#0F1115] to-[#0B0D10] border-y border-[#22262B] py-24 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[#18A957]/50 to-transparent"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-20">
<span className="text-xs font-semibold tracking-widest text-[#18A957] uppercase mb-4 block reveal-mask">A Solução</span>
<h2 className="font-heading font-semibold text-3xl sm:text-4xl tracking-tight mb-6 reveal-mask">
                        TRINCO é estrutura.
                    </h2>
<p className="text-[#9CA3AF] text-base leading-relaxed reveal-mask">
                        Uma camada de compromisso que transforma intenção em consistência inquebrável. Sem recomendar ativos. Sem interferir na sua carteira.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-1000">

<div className="bg-[#0B0D10] border border-[#22262B] rounded-2xl p-8 tilt-card transition-colors hover:border-[#18A957]/30 reveal-mask group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#18A957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#0E3B2E] border border-[#18A957]/20 rounded-xl flex items-center justify-center mb-6 text-[#18A957] group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 shadow-inner">
<iconify-icon className="text-3xl" icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg mb-3 text-[#EDEFF2]">Compromisso Mensal</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">Você define o valor que vai investir. A decisão é tomada no seu momento de alta racionalidade, trancando a porta para desculpas.</p>
</div>

<div className="bg-[#0B0D10] border border-[#22262B] rounded-2xl p-8 tilt-card transition-colors hover:border-[#18A957]/30 reveal-mask group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#18A957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#0E3B2E] border border-[#18A957]/20 rounded-xl flex items-center justify-center mb-6 text-[#18A957] group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-3 shadow-inner">
<iconify-icon className="text-3xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg mb-3 text-[#EDEFF2]">Skin in the Game</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">Se não aportar, um valor pré-definido é doado para uma ONG. O custo da inércia se torna imediato, real e doloroso.</p>
</div>

<div className="bg-[#0B0D10] border border-[#22262B] rounded-2xl p-8 tilt-card transition-colors hover:border-[#18A957]/30 reveal-mask group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-[#18A957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-14 h-14 bg-[#0E3B2E] border border-[#18A957]/20 rounded-xl flex items-center justify-center mb-6 text-[#18A957] group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 shadow-inner">
<iconify-icon className="text-3xl" icon="solar:fire-linear"></iconify-icon>
</div>
<h3 className="font-heading font-medium text-lg mb-3 text-[#EDEFF2]">Histórico Intocável</h3>
<p className="text-sm text-[#9CA3AF] leading-relaxed">Construa seu 'streak' de meses blindados. O foco primário deixa de ser qual ativo comprar, e passa a ser a disciplina de comprar.</p>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 relative" id="how-it-works">
<h2 className="font-heading font-semibold text-3xl sm:text-4xl tracking-tight mb-20 text-center reveal-mask">
                Como funciona a blindagem
            </h2>
<div className="relative">

<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[#22262B] -translate-x-1/2 rounded-full"></div>

<div className="absolute left-6 md:left-1/2 top-0 w-[3px] bg-gradient-to-b from-[#18A957] to-[#148F49] -translate-x-1/2 h-0 rounded-full shadow-[0_0_15px_#18A957]" id="timeline-progress"></div>
<div className="space-y-24">

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between reveal-mask timeline-step">
<div className="hidden md:block w-[45%] text-right pr-10">
<h3 className="font-heading font-medium text-xl mb-2 text-[#EDEFF2]">Defina sua Meta</h3>
<p className="text-sm text-[#9CA3AF]">Estabeleça o valor sagrado do mês e escolha a instituição de impacto.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0B0D10] border-2 border-[#22262B] rounded-full flex items-center justify-center z-10 text-sm font-semibold text-[#555D67] transition-colors duration-300 step-dot">
                            1
                        </div>
<div className="md:hidden pl-16 pt-2 w-full">
<h3 className="font-heading font-medium text-lg mb-2 text-[#EDEFF2]">Defina sua Meta</h3>
<p className="text-sm text-[#9CA3AF] mb-4">Estabeleça o valor sagrado do mês.</p>
<div className="bg-[#0F1115] border border-[#22262B] p-4 rounded-xl shadow-lg">
<div className="flex items-center gap-3 text-sm text-[#EDEFF2] font-medium">
<iconify-icon className="text-[#18A957] text-xl" icon="solar:wad-of-money-linear"></iconify-icon> R$ 1.500,00
                                </div>
</div>
</div>
<div className="hidden md:block w-[45%] pl-10">
<div className="bg-[#0F1115] border border-[#22262B] p-5 rounded-xl shadow-lg transform hover:-translate-y-1 transition-transform cursor-default relative overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-[#18A957]"></div>
<div className="flex items-center gap-4 text-sm text-[#EDEFF2]">
<div className="w-10 h-10 rounded-full bg-[#18A957]/10 flex items-center justify-center">
<iconify-icon className="text-[#18A957] text-xl" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#9CA3AF] mb-0.5">Aporte Programado</p>
<p className="font-semibold text-base">R$ 1.500,00</p>
</div>
</div>
</div>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between reveal-mask timeline-step">
<div className="hidden md:block w-[45%] pr-10">
<div className="bg-[#0F1115] border border-[#22262B] p-5 rounded-xl shadow-lg flex justify-between items-center transform hover:-translate-y-1 transition-transform cursor-default relative overflow-hidden">
<span className="text-sm font-medium text-[#EDEFF2] flex items-center gap-2">
<iconify-icon className="text-[#18A957]" icon="solar:lock-password-linear"></iconify-icon> Tranca Ativada
                                </span>
<div className="w-10 h-5 bg-[#18A957] rounded-full relative shadow-[0_0_10px_rgba(24,169,87,0.3)]">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5 shadow-sm"></div>
</div>
</div>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0B0D10] border-2 border-[#22262B] rounded-full flex items-center justify-center z-10 text-sm font-semibold text-[#555D67] transition-colors duration-300 step-dot">
                            2
                        </div>
<div className="md:hidden pl-16 pt-2 w-full">
<h3 className="font-heading font-medium text-lg mb-2 text-[#EDEFF2]">Ative o TRINCO</h3>
<p className="text-sm text-[#9CA3AF] mb-4">Trave a decisão. Alterações bloqueadas.</p>
<div className="bg-[#0F1115] border border-[#22262B] p-4 rounded-xl shadow-lg flex justify-between items-center">
<span className="text-sm font-medium text-[#EDEFF2]">Ativado</span>
<div className="w-10 h-5 bg-[#18A957] rounded-full relative">
<div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
</div>
</div>
</div>
<div className="hidden md:block w-[45%] pl-10 text-left">
<h3 className="font-heading font-medium text-xl mb-2 text-[#EDEFF2]">Ative o TRINCO</h3>
<p className="text-sm text-[#9CA3AF]">Trave a decisão. A partir de agora, alterações são bloqueadas até o fim do ciclo. O acordo está feito.</p>
</div>
</div>

<div className="relative flex flex-col md:flex-row items-start md:items-center md:justify-between reveal-mask timeline-step">
<div className="hidden md:block w-[45%] text-right pr-10">
<h3 className="font-heading font-medium text-xl mb-2 text-[#EDEFF2]">Prova + Streak</h3>
<p className="text-sm text-[#9CA3AF]">Envie o comprovante. Valide o mês, libere dopamina saudável e aumente seu streak.</p>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-[#0B0D10] border-2 border-[#22262B] rounded-full flex items-center justify-center z-10 text-sm font-semibold text-[#555D67] transition-colors duration-300 step-dot">
                            3
                        </div>
<div className="md:hidden pl-16 pt-2 w-full">
<h3 className="font-heading font-medium text-lg mb-2 text-[#EDEFF2]">Prova + Streak</h3>
<p className="text-sm text-[#9CA3AF] mb-4">Valide e mantenha o fogo aceso.</p>
<div className="bg-[#0F1115] border border-[#18A957]/30 p-4 rounded-xl shadow-[0_0_20px_rgba(24,169,87,0.1)] flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#18A957]/20 flex items-center justify-center">
<iconify-icon className="text-[#18A957] text-lg" icon="solar:fire-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold text-[#EDEFF2]">3 meses blindados</span>
</div>
</div>
<div className="hidden md:block w-[45%] pl-10">
<div className="bg-[#0F1115] border border-[#18A957]/30 p-5 rounded-xl shadow-[0_0_30px_rgba(24,169,87,0.1)] flex items-center gap-4 transform hover:-translate-y-1 transition-transform cursor-default">
<div className="relative">
<div className="absolute inset-0 bg-[#18A957] blur-md opacity-40 rounded-full animate-pulse"></div>
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#18A957] to-[#0E3B2E] flex items-center justify-center relative z-10 border border-[#18A957]/50">
<iconify-icon className="text-white text-xl" icon="solar:fire-bold"></iconify-icon>
</div>
</div>
<div>
<p className="text-xs text-[#18A957] font-semibold tracking-wider uppercase mb-0.5">Streak Atual</p>
<p className="font-semibold text-base text-[#EDEFF2]">3 meses consecutivos</p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-20 text-center reveal-mask">
<p className="inline-flex items-center gap-2 text-xs text-[#9CA3AF] bg-[#0F1115] border border-[#22262B] px-5 py-3 rounded-full hover:border-[#555D67] transition-colors cursor-default">
<iconify-icon className="text-lg" icon="solar:info-circle-linear"></iconify-icon>
                    Se você falhar, sua promessa ainda gera impacto — a doação é feita com total transparência.
                </p>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24 border-t border-[#22262B]/50 relative z-20" id="waitlist">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-[#18A957]/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="text-center mb-12 reveal-mask relative z-10">
<span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#0B0D10] bg-[#18A957] px-3 py-1 rounded-sm uppercase mb-4 shadow-[0_0_15px_rgba(24,169,87,0.4)]">
<iconify-icon icon="solar:star-fall-bold"></iconify-icon> Filtro de Comprometimento
                </span>
<h2 className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-4 text-[#EDEFF2]">
                    Se o TRINCO custasse <span className="text-[#18A957] border-b-2 border-[#18A957]/30 pb-1">R$ 29/mês</span> para blindar sua consistência… você pagaria?
                </h2>
<p className="text-sm text-[#9CA3AF] max-w-xl mx-auto mt-6">
                    Você não está comprando um app financeiro comum. Você está comprando uma apólice de seguro contra a sua própria sabotagem.
                </p>
</div>
<div className="bg-[#0F1115]/90 backdrop-blur-xl border border-[#22262B] rounded-2xl p-6 sm:p-10 reveal-mask shadow-2xl relative z-10 glass-glow transition-all duration-300">
<form action="#" className="space-y-8" id="beta-form" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="space-y-2 group">
<label className="block text-xs font-medium text-[#9CA3AF] group-focus-within:text-[#18A957] transition-colors" htmlFor="name">Nome</label>
<input className="w-full bg-[#0B0D10] border border-[#22262B] rounded-xl px-4 py-3.5 text-sm text-[#EDEFF2] outline-none focus:border-[#18A957] focus:ring-1 focus:ring-[#18A957]/50 transition-all shadow-inner" id="name" name="name" placeholder="Como prefere ser chamado?" required="" type="text"/>
</div>
<div className="space-y-2 group">
<label className="block text-xs font-medium text-[#9CA3AF] group-focus-within:text-[#18A957] transition-colors" htmlFor="contact">E-mail ou WhatsApp</label>
<input className="w-full bg-[#0B0D10] border border-[#22262B] rounded-xl px-4 py-3.5 text-sm text-[#EDEFF2] outline-none focus:border-[#18A957] focus:ring-1 focus:ring-[#18A957]/50 transition-all shadow-inner" id="contact" name="contact" placeholder="Para receber o convite" required="" type="text"/>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="block text-xs font-medium text-[#9CA3AF] mb-3">Sua resposta define sua prioridade na fila:</label>
<label className="flex items-center p-4 border border-[#22262B] rounded-xl cursor-pointer hover:border-[#18A957]/50 transition-all bg-[#0B0D10] hover:bg-[#0B0D10]/80 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#18A957]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<input className="hidden custom-radio" name="wtp" required="" type="radio" value="yes"/>
<div className="w-5 h-5 rounded-full border-2 border-[#555D67] flex items-center justify-center mr-4 transition-all relative z-10 bg-[#0F1115]">
<div className="w-2 h-2 bg-white rounded-full scale-0 transition-transform duration-300 radio-inner"></div>
</div>
<span className="text-sm font-medium text-[#EDEFF2] relative z-10">Sim, eu pagaria. Preciso dessa estrutura agora.</span>
</label>
<label className="flex items-center p-4 border border-[#22262B] rounded-xl cursor-pointer hover:border-[#18A957]/50 transition-all bg-[#0B0D10] hover:bg-[#0B0D10]/80 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-[#18A957]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<input className="hidden custom-radio" name="wtp" type="radio" value="maybe"/>
<div className="w-5 h-5 rounded-full border-2 border-[#555D67] flex items-center justify-center mr-4 transition-all relative z-10 bg-[#0F1115]">
<div className="w-2 h-2 bg-white rounded-full scale-0 transition-transform duration-300 radio-inner"></div>
</div>
<span className="text-sm font-medium text-[#EDEFF2] relative z-10">Talvez. Quero testar o Beta primeiro.</span>
</label>
<label className="flex items-center p-4 border border-[#22262B] rounded-xl cursor-pointer hover:border-[#555D67] transition-all bg-[#0B0D10] opacity-70 hover:opacity-100">
<input className="hidden custom-radio" name="wtp" type="radio" value="no"/>
<div className="w-5 h-5 rounded-full border-2 border-[#555D67] flex items-center justify-center mr-4 transition-all bg-[#0F1115]">
<div className="w-2 h-2 bg-[#555D67] rounded-full scale-0 transition-transform duration-300 radio-inner"></div>
</div>
<span className="text-sm text-[#9CA3AF]">Não pagaria, confio na minha força de vontade.</span>
</label>
</div>
<div className="pt-4">
<button className="w-full magnet-btn bg-[#EDEFF2] hover:bg-white text-[#0B0D10] font-bold text-sm py-4 rounded-xl transition-all active:scale-[0.98] flex justify-center items-center gap-2 group" type="submit">
                            Solicitar Convite Beta
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<div className="flex items-center justify-center gap-4 mt-4 text-[11px] text-[#555D67]">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Sem Spam</span>
<span className="w-1 h-1 bg-[#22262B] rounded-full"></span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:logout-2-linear"></iconify-icon> Cancele quando quiser</span>
</div>
</div>
</form>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-24">
<h2 className="font-heading font-semibold text-2xl sm:text-3xl tracking-tight mb-12 text-center reveal-mask">
                Perguntas Frequentes
            </h2>
<div className="space-y-3 reveal-mask">

<div className="border border-[#22262B] rounded-xl bg-[#0F1115] overflow-hidden transition-colors hover:border-[#555D67]">
<button aria-expanded="false" className="faq-btn w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="font-medium text-sm text-[#EDEFF2] group-hover:text-[#18A957] transition-colors">TRINCO é corretora?</span>
<div className="w-8 h-8 rounded-full bg-[#0B0D10] border border-[#22262B] flex items-center justify-center shrink-0 group-hover:border-[#18A957]/50 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#18A957] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content h-0 overflow-hidden px-6 bg-[#0B0D10]">
<p className="text-sm text-[#9CA3AF] pb-6 pt-2 leading-relaxed">Não. Nós somos uma camada acima da sua corretora atual. Você continua investindo onde preferir (XP, BTG, NuInvest, etc). Nossa função é apenas garantir que a transferência aconteça.</p>
</div>
</div>
<div className="border border-[#22262B] rounded-xl bg-[#0F1115] overflow-hidden transition-colors hover:border-[#555D67]">
<button aria-expanded="false" className="faq-btn w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="font-medium text-sm text-[#EDEFF2] group-hover:text-[#18A957] transition-colors">O que acontece se eu falhar no mês?</span>
<div className="w-8 h-8 rounded-full bg-[#0B0D10] border border-[#22262B] flex items-center justify-center shrink-0 group-hover:border-[#18A957]/50 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#18A957] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content h-0 overflow-hidden px-6 bg-[#0B0D10]">
<p className="text-sm text-[#9CA3AF] pb-6 pt-2 leading-relaxed">O valor da "multa" (consequência) que você definiu na ativação é cobrado e 100% destinado à instituição de impacto escolhida. Seu fracasso pessoal vira um acerto social.</p>
</div>
</div>
<div className="border border-[#22262B] rounded-xl bg-[#0F1115] overflow-hidden transition-colors hover:border-[#555D67]">
<button aria-expanded="false" className="faq-btn w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="font-medium text-sm text-[#EDEFF2] group-hover:text-[#18A957] transition-colors">Como validam meu investimento?</span>
<div className="w-8 h-8 rounded-full bg-[#0B0D10] border border-[#22262B] flex items-center justify-center shrink-0 group-hover:border-[#18A957]/50 transition-colors">
<iconify-icon className="text-[#9CA3AF] group-hover:text-[#18A957] transition-all duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</button>
<div className="faq-content h-0 overflow-hidden px-6 bg-[#0B0D10]">
<p className="text-sm text-[#9CA3AF] pb-6 pt-2 leading-relaxed">No Beta, a verificação é feita via upload simples do comprovante (PDF/Imagem). Futuramente, integraremos Open Finance para que a verificação seja invisível e automática.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-[#22262B] bg-gradient-to-b from-[#0F1115] to-[#0B0D10] relative overflow-hidden">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#18A957]/5 blur-[120px] rounded-t-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 py-24 text-center reveal-mask relative z-10">
<h2 className="font-heading font-semibold text-4xl sm:text-5xl tracking-tight mb-6">Tranque a porta.</h2>
<p className="text-base text-[#9CA3AF] mb-10 max-w-lg mx-auto leading-relaxed">Pare de depender da motivação que oscila. Instale a disciplina que constrói impérios.</p>
<a className="inline-flex magnet-btn bg-[#EDEFF2] hover:bg-white text-[#0B0D10] font-bold text-sm py-4 px-10 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(237,239,242,0.1)] hover:shadow-[0_0_30px_rgba(237,239,242,0.2)]" href="#waitlist">
                    Quero blindar meu futuro
                </a>
</div>
</section>
</main>

<footer className="border-t border-[#22262B] bg-[#0B0D10] py-10 relative z-10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="text-[#555D67] text-xs flex items-center gap-2">
<div className="w-4 h-4 flex flex-wrap gap-[1px] items-center justify-center opacity-50 grayscale">
<div className="w-full h-1 bg-white rounded-sm"></div>
<div className="w-[45%] h-1.5 bg-white rounded-sm mr-auto"></div>
<div className="w-[45%] h-1.5 bg-white rounded-sm"></div>
</div>
<span className="font-heading font-bold text-[#9CA3AF] tracking-tight">TRINCO</span> © 
</div>
<p className="text-[10px] text-[#555D67] max-w-md text-center">
                TRINCO é uma ferramenta de produtividade financeira comportamental. Não somos corretora, consultoria ou casa de análise. A responsabilidade pelas escolhas de ativos é exclusivamente sua.
            </p>
<div className="flex gap-6 text-xs text-[#555D67]">
<a className="hover:text-[#EDEFF2] transition-colors" href="#">Privacidade</a>
<a className="hover:text-[#EDEFF2] transition-colors" href="#">Termos</a>
</div>
</div>
</footer>



    </>
  );
}
