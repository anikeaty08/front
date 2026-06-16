import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: '#D32F2F', // Rich Red
dark: '#111827', // Slate 900
neutral: '#475569', // Slate 600
light: '#F8FAFC', // Slate 50
'off-white': '#FFFFFF'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Outfit', 'sans-serif']
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em'
},
transitionTimingFunction: {
'expo': 'cubic-bezier(0.19, 1, 0.22, 1)'
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Icons ---
        lucide.createIcons();

        // --- Lenis Smooth Scroll ---
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureDirection: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // --- GSAP Setup ---
        gsap.registerPlugin(ScrollTrigger);

        // Loader & Hero Animation
        const tlLoader = gsap.timeline();
        tlLoader.to("#loader-bar", {
            width: "100%",
            duration: 1.2,
            ease: "power2.inOut"
        })
        .to("#loader", {
            yPercent: -100,
            duration: 0.8,
            ease: "power4.inOut",
            delay: 0.2
        })
        .fromTo(".hero-line", 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out" }, 
            "-=0.5"
        )
        .fromTo(".hero-text",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out" },
            "-=0.6"
        )
        .fromTo(".hero-card",
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" },
            "-=1"
        );

        // Scroll Reveals for Sections
        document.querySelectorAll('.reveal-trigger').forEach((el) => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 60,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            });
        });

        // --- Custom Cursor Logic ---
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorCircle = document.querySelector('.cursor-circle');

        if (window.matchMedia("(pointer: fine)").matches) {
            let mouseX = 0, mouseY = 0;
            let cursorX = 0, cursorY = 0;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0 });
            });

            gsap.ticker.add(() => {
                cursorX += (mouseX - cursorX) * 0.15;
                cursorY += (mouseY - cursorY) * 0.15;
                cursorCircle.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
            });

            const hoverTargets = document.querySelectorAll('a, button, .group, img');
            hoverTargets.forEach(el => {
                el.addEventListener('mouseenter', () => document.body.classList.add('hover-active'));
                el.addEventListener('mouseleave', () => document.body.classList.remove('hover-active'));
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<div className="loader" id="loader">
<div className="font-display font-semibold text-5xl md:text-6xl tracking-tight mb-6 text-dark flex items-center gap-2">
<span className="bg-brand text-white px-3 py-1 rounded-md">PLAN</span>B
        </div>
<div className="w-64 h-[2px] bg-slate-100 rounded-full overflow-hidden">
<div className="loader-bar" id="loader-bar" style={{width: '100%'}}></div>
</div>
</div><div className="cursor-dot hidden md:block"></div>
<div className="cursor-circle hidden md:block"></div>

<section className="relative min-h-[95vh] w-full overflow-hidden bg-white">
<div className="grid lg:grid-cols-2 h-full min-h-[95vh] w-full">

<div className="flex flex-col md:px-16 lg:px-24 order-2 lg:order-1 z-10 pt-24 pr-6 pb-24 pl-6 justify-center">
<div className="hero-line opacity-0 flex items-center gap-2 mb-12">
<span className="font-display font-semibold text-4xl bg-brand text-white px-3 py-1 rounded-md tracking-tight">PLAN</span>
<span className="font-display font-semibold text-5xl text-dark tracking-tight">B</span>
</div>
<h1 className="hero-line text-[10vw] lg:text-[4.5vw] leading-[1.05] text-dark uppercase text-balance font-semibold tracking-tight font-display opacity-0 mb-8">
                    Stoppez l'hémorragie<br/>
                    Reprenez le contrôle<br/>
                    Sauvez votre club
                </h1>
<p className="hero-text opacity-0 text-xl md:text-2xl text-brand font-medium max-w-xl leading-snug mb-6">
                    Fini de naviguer à vue quand la pression monte.
                </p>
<p className="hero-text opacity-0 text-lg md:text-xl text-neutral font-normal max-w-lg leading-relaxed mb-12">
                    Une intervention d'urgence, stratégique et humaine, pour restructurer votre trésorerie et éviter le point de non-retour.
                </p>
<div className="hero-text opacity-0">
<a className="inline-flex items-center bg-brand hover:bg-dark text-white rounded-full p-1.5 pr-8 transition-all duration-500 ease-expo group hover:shadow-xl hover:-translate-y-1" href="#contact">
<span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-brand transition-colors duration-300 shrink-0">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col py-1">
<span className="font-display font-semibold text-xl tracking-tight leading-none mb-1">Obtenir mon plan d'action</span>
<span className="text-xs uppercase tracking-widest text-white/80 font-medium">Appel de 30 min • Sans engagement</span>
</div>
</a>
</div>
</div>

<div className="relative h-[60vh] lg:h-full w-full bg-light order-1 lg:order-2 overflow-hidden hero-card opacity-0">
<img alt="Dirigeant de club de fitness confiant" className="object-top w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/670fc9c1-7858-4678-9572-2af6ca91f469_1600w.png"/>
</div>
</div>
</section>

<section className="py-32 px-6 bg-white reveal-trigger">
<div className="text-center max-w-4xl mr-auto ml-auto">
<h2 className="font-display font-semibold text-4xl md:text-5xl tracking-tight text-dark uppercase mb-3 text-balance">
                Gérants de
            </h2>
<p className="text-neutral text-lg md:text-xl uppercase tracking-widest mb-16">
                Clubs de fitness, box de crossfit et studios de coaching.
            </p>
<div className="flex flex-col gap-6 text-brand text-xl md:text-2xl font-medium mb-24 text-balance">
<p>Vos charges fixes vous étouffent et la trésorerie se creuse,</p>
<p className="">Vous perdez le contrôle face aux relances et aux imprévus,</p>
<p>Le stress impacte vos nuits et brouille vos décisions,</p>
<p>Vous n'avez personne de neutre avec qui chercher des solutions viables.</p>
</div>
<div className="inline-block">
<h3 className="font-display font-semibold text-4xl md:text-6xl tracking-tight text-brand uppercase mb-6">
                    N'attendez pas l'impasse
                </h3>
<p className="text-dark text-lg md:text-xl font-medium">
                    Il existe une méthode concrète pour sécuriser votre entreprise et reprendre l'offensive avant la rupture.
                </p>
</div>
</div>
</section>

<section className="w-full h-[40vh] md:h-[60vh] reveal-trigger">
<div className="bg-center grayscale-[20%] w-full h-full bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover">
</div>
</section>

<section className="py-32 px-6 bg-white overflow-hidden">
<div className="max-w-[1400px] mx-auto">
<div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
<div className="relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden reveal-trigger">
<img alt="Dirigeante" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54e2ef95-649e-40ff-9be5-528f91646f46_1600w.png"/>
</div>
<div className="reveal-trigger">
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-brand mb-12 text-balance leading-tight">
                        Le temps joue contre votre trésorerie
                    </h2>
<div className="space-y-8 text-dark text-xl md:text-2xl leading-relaxed mb-16">
<p className="">Dans une crise financière, l'espoir n'est pas une stratégie. Chaque semaine d'attente réduit vos marges de manœuvre et vos chances de survie.</p>
<p className="">Prendre les devants aujourd'hui, c'est vous offrir le luxe du choix : négocier en position de force, restructurer sereinement, et éviter de subir le pire.</p>
</div>
<p className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-dark uppercase mb-12">
                        Le meilleur moment pour agir, c'était hier.
                    </p>
<a className="inline-flex items-center bg-brand hover:bg-dark text-white rounded-full p-1.5 pr-8 transition-all duration-500 ease-expo group hover:shadow-xl hover:-translate-y-1" href="#contact">
<span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-brand transition-colors duration-300 shrink-0">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col py-1">
<span className="font-display font-semibold text-xl tracking-tight leading-none mb-1">Je reprends la main</span>
<span className="text-xs uppercase tracking-widest text-white/80 font-medium">Diagnostic de 30 min offert</span>
</div>
</a>
</div>
</div>
</div>
</section>

<section className="border-neutral/5 border-t pt-32 pr-6 pb-32 pl-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
<div className="order-2 md:order-1 reveal-trigger">
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-dark mb-12 text-balance leading-[1.1]">
                        Zéro blabla théorique.<br/>
                        Des actions immédiates.
                    </h2>
<p className="text-brand font-semibold text-2xl md:text-3xl tracking-tight mb-6">
                        Votre copilote opérationnel dans la tempête.
                    </p>
<p className="text-neutral md:text-2xl leading-relaxed text-xl mb-16">Pas d'audit interminable. Nous déployons des mesures d'urgence adaptées au monde du sport, en nous appuyant sur les données implacables de notre outil de gestion Prévibiz.</p>
<a className="inline-flex items-center bg-brand hover:bg-dark text-white rounded-full p-1.5 pr-8 transition-all duration-500 ease-expo group hover:shadow-xl hover:-translate-y-1" href="#contact">
<span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-brand transition-colors duration-300 shrink-0">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col py-1">
<span className="font-display font-semibold text-xl tracking-tight leading-none mb-1">Découvrir notre méthode</span>
<span className="text-xs uppercase tracking-widest text-white/80 font-medium">Gratuit et sans engagement</span>
</div>
</a>
</div>
<div className="order-1 md:order-2 relative h-[500px] md:h-[700px] rounded-3xl overflow-hidden reveal-trigger">
<img alt="Chemin verselement-locator=" className="w-full h-full object-cover transition-transform duration-[10000ms] ease-in-out hover:scale-110" html="" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/32bcd2d7-9a8a-493d-b61c-b7154da8297f_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="bg-[#E8EDF2] pt-32 pr-6 pb-32 pl-6">
<div className="max-w-[1400px] mx-auto">
<div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
<div className="reveal-trigger">
<h2 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark mb-8 leading-[1.05]">
                        Diagnostic<br/>de survie gratuit
                    </h2>
<p className="text-brand font-semibold text-2xl md:text-3xl tracking-tight mb-10">
                        30 minutes chrono pour évaluer les dégâts.
                    </p>
<ul className="text-dark md:text-xl text-lg font-medium mb-16 space-y-6">
<li className="flex gap-4 items-start reveal-trigger">
<div className="w-2 h-2 rounded-full bg-dark mt-2.5 shrink-0"></div>
<span>Analyser objectivement la gravité et l'urgence de vos finances.</span>
</li>
<li className="flex gap-4 items-start reveal-trigger">
<div className="w-2 h-2 rounded-full bg-dark mt-2.5 shrink-0"></div>
<span>Faire redescendre la pression mentale qui brouille vos décisions.</span>
</li>
<li className="flex gap-4 items-start reveal-trigger">
<div className="w-2 h-2 rounded-full bg-dark mt-2.5 shrink-0"></div>
<span>Identifier vos points de rupture à très court terme (cash, dettes).</span>
</li>
<li className="flex gap-4 items-start reveal-trigger">
<div className="w-2 h-2 rounded-full bg-dark mt-2.5 shrink-0"></div>
<span>Définir les 3 premières actions vitales à exécuter cette semaine.</span>
</li>
</ul>
<p className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-dark mb-10">
                        Ne restez plus seul face à vos chiffres.
                    </p>
<a className="inline-flex items-center bg-brand hover:bg-dark text-white rounded-full p-1.5 pr-8 transition-all duration-500 ease-expo group hover:shadow-xl hover:-translate-y-1" href="#contact">
<span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mr-4 group-hover:bg-white group-hover:text-brand transition-colors duration-300 shrink-0">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col py-1">
<span className="font-display font-semibold text-xl tracking-tight leading-none mb-1">Planifier mon diagnostic</span>
<span className="text-xs uppercase tracking-widest text-white/80 font-medium">Totalement confidentiel</span>
</div>
</a>
</div>
<div className="relative h-[600px] md:h-[800px] rounded-3xl overflow-hidden reveal-trigger">
<img alt="Dirigeant au téléphone" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bd257cd-3f9b-42f2-a9d3-ea6f62ca8a5f_1600w.png"/>
</div>
</div>
</div>
</section>

<section className="text-center pt-32 pr-6 pb-32 pl-6">
<div className="max-w-[1200px] mr-auto ml-auto">
<div className="mb-24 reveal-trigger">
<h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight text-dark mb-6">
                    La double expertise qu'il vous manquait
                </h2>
<p className="text-brand text-xl md:text-2xl font-medium max-w-3xl mx-auto">
                    Gérants de clubs de fitness et créateurs du logiciel Prévibiz, nous connaissons la réalité et la violence de votre quotidien.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-20 mb-32">

<div className="flex flex-col items-center reveal-trigger">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-black/5 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
<img alt="Portrait de Maxence - Confiant et rassurant" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d85f2b7e-2ea0-4c9d-a3aa-d8982b640c71_800w.png"/>
</div>
<h3 className="font-display font-semibold text-3xl tracking-tight text-dark mb-4">
                        L'expert stratégie &amp; cash
                    </h3>
<p className="text-neutral text-xl leading-relaxed max-w-sm">
                        Il traque la moindre fuite de trésorerie, coupe les dépenses toxiques et modélise un plan de sauvetage financier réaliste pour les mois à venir.
                    </p>
</div>

<div className="flex flex-col reveal-trigger items-center">
<div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden mb-8 shadow-2xl shadow-black/5 grayscale-[20%] hover:grayscale-0 transition-all duration-500">
<img alt="Coach de crise" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7263b9a8-71d9-4259-890f-aadbce7b062a_800w.png"/>
</div>
<h3 className="font-display font-semibold text-3xl tracking-tight text-dark mb-4">
                        Le coach de crise
                    </h3>
<p className="text-neutral text-xl leading-relaxed max-w-sm">
                        Il est votre bouclier mental. Il vous arme pour affronter les banques, gérer les conflits et prendre les décisions difficiles sans trembler.
                    </p>
</div>
</div>
<div className="flex justify-center reveal-trigger" id="contact">
<a className="inline-flex items-center bg-brand hover:bg-dark text-white rounded-full p-1.5 pr-10 transition-all duration-500 ease-expo group hover:shadow-2xl hover:-translate-y-1" href="#">
<span className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center mr-5 group-hover:bg-white group-hover:text-brand transition-colors duration-300 shrink-0">
<i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
<div className="flex flex-col py-2 text-left">
<span className="font-display font-semibold text-2xl tracking-tight leading-none mb-1.5">Je veux sortir de l'impasse</span>
<span className="text-sm uppercase tracking-widest text-white/80 font-medium">Entretien 100% confidentiel</span>
</div>
</a>
</div>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-neutral/10 text-center">
<p className="text-sm font-mono uppercase tracking-widest text-neutral/50">© 2025 PLAN B. Tous droits réservés.</p>
</footer>


    </>
  );
}
