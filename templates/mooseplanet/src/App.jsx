import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Trigger initial entry animations
            setTimeout(() => {
                document.body.classList.add('is-loaded');
            }, 50);

            // Scroll reveal utilizing IntersectionObserver
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.scroll-reveal');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="noise-overlay"></div>
<div className="ambient-glow glow-1"></div>
<div className="ambient-glow glow-2"></div>
<div className="w-full max-w-[1200px] mx-auto px-[clamp(1.5rem,5vw,5rem)]">

<nav className="flex justify-between items-center py-8 anim-nav">
<div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--text-secondary)] select-none">
                Moose Planet
            </div>
<div className="flex gap-5 md:gap-8 font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-muted)]">
<a className="hover:text-[var(--text-primary)] transition-colors duration-300" href="#focus">Focus</a>
<a className="hover:text-[var(--text-primary)] transition-colors duration-300" href="#ethos">Ethos</a>
<a className="hover:text-[var(--text-primary)] transition-colors duration-300" href="#contact">Contact</a>
</div>
</nav>

<main className="pt-[14vh] md:pt-[18vh] pb-[clamp(5rem,10vh,8rem)]">
<div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--accent-dim)] mb-6 anim-stagger delay-1">
                Creative Studio · Salt Lake City
            </div>
<h1 className="font-serif text-[clamp(3.5rem,8vw,8.125rem)] leading-[0.92] tracking-[-0.02em] text-[var(--text-primary)] anim-stagger delay-2">
                Tuned to frequencies<br/>
                most people <em className="italic text-[var(--accent)]">skip</em>
</h1>
<p className="mt-8 font-sans font-light text-base text-[var(--text-secondary)] max-w-[30rem] leading-[1.6] anim-stagger delay-3">
                Moose Planet is a creative studio building at the intersection of sound, software, and story. We craft tools for creators, music for screens, and systems that scale.
            </p>
<div className="w-[3.75rem] h-[1px] bg-[var(--accent-dim)] my-12 anim-stagger delay-4"></div>
<div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] anim-stagger delay-5">
                Bridging emotion and execution
            </div>
</main>

<section className="py-[clamp(5rem,10vh,7rem)] border-t border-[var(--rule)]" id="focus">
<div className="flex justify-between items-center mb-16 font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] scroll-reveal">
<span>Disciplines</span>
<span>04</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[var(--rule)] border border-[var(--rule)] scroll-reveal">

<div className="flex flex-col gap-5 p-9 md:p-12 bg-[var(--bg)] hover:bg-[var(--bg-elevated)] transition-colors duration-500 min-h-[18rem]">
<span className="font-mono text-xs text-[var(--text-muted)]">01</span>
<h2 className="font-serif text-3xl tracking-tight text-[var(--text-primary)]">Digital Infrastructure</h2>
<p className="font-sans font-light text-sm text-[var(--text-secondary)] leading-[1.6]">
                        Developing robust applications and digital tools designed to eliminate friction. We build platforms that empower creators to focus on what matters most.
                    </p>
<span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-dim)]">Software · Architecture · AI</span>
</div>

<div className="flex flex-col gap-5 p-9 md:p-12 bg-[var(--bg)] hover:bg-[var(--bg-elevated)] transition-colors duration-500 min-h-[18rem]">
<span className="font-mono text-xs text-[var(--text-muted)]">02</span>
<h2 className="font-serif text-3xl tracking-tight text-[var(--text-primary)]">Sonic Architecture</h2>
<p className="font-sans font-light text-sm text-[var(--text-secondary)] leading-[1.6]">
                        Crafting bespoke audio landscapes and original compositions for visual media. Our sonic work is engineered to anchor narratives and elevate emotional impact.
                    </p>
<span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-dim)]">Music · Composition · Scoring</span>
</div>

<div className="flex flex-col gap-5 p-9 md:p-12 bg-[var(--bg)] hover:bg-[var(--bg-elevated)] transition-colors duration-500 min-h-[18rem]">
<span className="font-mono text-xs text-[var(--text-muted)]">03</span>
<h2 className="font-serif text-3xl tracking-tight text-[var(--text-primary)]">Interface Copy</h2>
<p className="font-sans font-light text-sm text-[var(--text-secondary)] leading-[1.6]">
                        Shaping the words that interface with your users. We refine complex ideas into clear, actionable language that guides behavior and defines brand identity.
                    </p>
<span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-dim)]">UX Writing · Editorial</span>
</div>

<div className="flex flex-col gap-5 p-9 md:p-12 bg-[var(--bg)] hover:bg-[var(--bg-elevated)] transition-colors duration-500 min-h-[18rem]">
<span className="font-mono text-xs text-[var(--text-muted)]">04</span>
<h2 className="font-serif text-3xl tracking-tight text-[var(--text-primary)]">System Design</h2>
<p className="font-sans font-light text-sm text-[var(--text-secondary)] leading-[1.6]">
                        Architecting the underlying frameworks that allow creative endeavors to scale. We connect visionary ambition with practical, sustainable economics.
                    </p>
<span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.1em] text-[var(--accent-dim)]">Operations · Frameworks</span>
</div>
</div>
</section>

<section className="py-[clamp(5rem,10vh,7rem)] border-t border-[var(--rule)]" id="ethos">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

<div className="scroll-reveal">
<div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] mb-10">
                        Philosophy
                    </div>
</div>

<div className="scroll-reveal">
<div className="flex flex-col gap-6 font-sans font-light text-sm text-[var(--text-secondary)] leading-[1.8] mb-12">
<p>
                            We do not separate the art from the infrastructure. Every project we build lives at the intersection of creative ambition and sustainable systems. The best work emerges when you refuse to choose between making something beautiful and making something that functions.
                        </p>
<p>
                            Moose Planet exists because the most interesting problems sit between disciplines. Between sound design and data architecture. Between editorial precision and product velocity. Between pure emotion and flawless execution.
                        </p>
</div>
<div className="border-t border-[var(--rule)]">

<div className="flex justify-between items-center py-[1.125rem] border-b border-[var(--rule)]">
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)]">Discipline</span>
<span className="font-serif italic text-sm text-[var(--accent)]">Music, Software, Systems</span>
</div>

<div className="flex justify-between items-center py-[1.125rem] border-b border-[var(--rule)]">
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)]">Approach</span>
<span className="font-serif italic text-sm text-[var(--accent)]">Build in public, ship with taste</span>
</div>

<div className="flex justify-between items-center py-[1.125rem] border-b border-[var(--rule)]">
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)]">Belief</span>
<span className="font-serif italic text-sm text-[var(--accent)]">Restraint is a superpower</span>
</div>

<div className="flex justify-between items-center py-[1.125rem] border-b border-[var(--rule)]">
<span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)]">Founded</span>
<span className="font-serif italic text-sm text-[var(--accent)]">Salt Lake City, 2026</span>
</div>
</div>
</div>
</div>
</section>

<footer className="py-[clamp(5rem,10vh,7rem)] border-t border-[var(--rule)]" id="contact">
<div className="flex flex-col items-center text-center scroll-reveal">
<div className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] mb-8">
                    Get in touch
                </div>
<h2 className="font-serif text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.1] tracking-tight text-[var(--text-primary)]">
                    Let's build / <a className="italic text-[var(--accent)] hover:text-[var(--text-primary)] transition-colors duration-400" href="mailto:hello@mooseplanet.com">something together.</a>
</h2>
</div>
<div className="mt-24 md:mt-32 pt-8 border-t border-[var(--rule)] flex flex-col md:flex-row justify-between items-center gap-6 scroll-reveal">
<div className="font-mono text-xs text-[var(--text-muted)] tracking-wide">
                    © 2026 Moose Planet. All rights reserved.
                </div>
<div className="flex gap-6 font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
<a className="hover:text-[var(--accent)] transition-colors duration-300" href="#">Twitter</a>
<a className="hover:text-[var(--accent)] transition-colors duration-300" href="#">GitHub</a>
<a className="hover:text-[var(--accent)] transition-colors duration-300" href="#">YouTube</a>
</div>
</div>
</footer>
</div>


    </>
  );
}
