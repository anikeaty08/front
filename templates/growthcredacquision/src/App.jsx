import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
charcoal: {
DEFAULT: '#11100F',
light: '#1A1817',
dark: '#0A0909'
},
offwhite: '#EAE6E1',
gold: '#B8944F',
},
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
transitionDuration: {
'800': '800ms',
'1000': '1000ms',
'1200': '1200ms',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Smooth Accordion Logic
            document.querySelectorAll('.faq-toggle').forEach(button => {
                button.addEventListener('click', () => {
                    const content = button.nextElementSibling;
                    const icon = button.querySelector('.icon-plus');
                    const isOpen = content.classList.contains('open');

                    // Close all others softly
                    document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('open'));
                    document.querySelectorAll('.icon-plus').forEach(i => {
                        i.textContent = '+';
                        i.style.transform = 'rotate(0deg)';
                    });

                    // Toggle current
                    if (!isOpen) {
                        content.classList.add('open');
                        icon.textContent = '−';
                        icon.style.transform = 'rotate(180deg)';
                    }
                });
            });

            // Navigation glass effect on scroll
            const nav = document.querySelector('nav');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-bg">
<div className="orb-1"></div>
<div className="orb-2"></div>
</div>

<nav className="fixed w-full top-0 z-50 bg-transparent transition-all duration-500 border-b border-transparent">
<div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
<a className="text-white font-serif text-lg tracking-[0.2em] uppercase font-normal z-10" href="#">GC</a>
<a className="text-xs uppercase tracking-widest font-normal text-offwhite/70 hover:text-gold transition-colors duration-300 relative group z-10" href="#talk">
                Request a Conversation
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-32 pb-16 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
<svg className="w-full h-full object-cover min-w-[150vw] md:min-w-full" preserveaspectratio="xMidYMid slice" viewbox="0 0 1000 1000">
<g className="animate-spin-slow origin-center">
<circle cx="500" cy="500" fill="none" r="300" stroke="rgba(184, 148, 79, 0.15)" stroke-dasharray="4 8" strokeWidth="1"></circle>
<circle className="animate-spin-reverse-slow origin-center" cx="500" cy="500" fill="none" r="450" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1"></circle>
<circle cx="500" cy="500" fill="none" r="600" stroke="rgba(184, 148, 79, 0.05)" stroke-dasharray="10 20" strokeWidth="0.5"></circle>
<path className="animate-draw-path" d="M 500 200 Q 800 500 500 800 Q 200 500 500 200" fill="none" stroke="rgba(184, 148, 79, 0.15)" stroke-dasharray="1200" strokeWidth="0.5"></path>
</g>
</svg>
</div>
<div className="max-w-5xl mx-auto w-full relative z-10">
<span className="reveal block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-8">
                For firm owners who built something that matters — and need to know it will continue.
            </span>
<h1 className="reveal delay-100 text-4xl md:text-5xl lg:text-6xl font-serif text-white uppercase tracking-widest leading-loose mb-10">
                You've given your practice thirty years.<br className="hidden md:block"/>
                It's taken more than that from you.
            </h1>
<div className="reveal delay-200 glass-panel p-8 md:p-12 max-w-3xl mb-12">
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light mb-6">
                    You built a firm that clients trust, employees depend on, and your community respects. You did it through decades of early mornings, late nights, and the kind of quiet sacrifice that nobody outside your office will ever fully understand.
                </p>
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light mb-6">
                    But somewhere in the last few years, something shifted. The work didn't change — you did. The passion that used to carry you through 14-hour days is gone. What's left is obligation. Duty. The weight of being the only person who can hold it all together.
                </p>
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light mb-6">
                    You've thought about transitioning your practice. You've probably thought about it more than you've told anyone. But every option you've explored has led to the same place — a process that's too slow, a buyer who doesn't understand, or a number that doesn't respect what you've built.
                </p>
<p className="text-base md:text-lg text-white/90 leading-relaxed font-normal">
                    We acquire professional services practices from firm owners like you. We keep your people. We serve your clients. We install the systems that let the practice thrive without depending on any single individual. And we do it in weeks, not years.
                </p>
</div>
<div className="reveal delay-300 flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-12">
<a className="inline-flex items-center gap-3 text-white px-8 py-4 text-xs font-normal uppercase tracking-[0.2em] rounded-full glass-btn group" href="#talk">
                    Request a Confidential Conversation
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="text-xs font-normal uppercase tracking-widest text-offwhite/50 hover:text-white transition-colors duration-300 flex items-center gap-2 group" href="#how-it-works">
                    How this works
                    <iconify-icon className="text-lg group-hover:translate-y-1 transition-transform duration-300" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="reveal delay-300 text-xs text-offwhite/40 font-light uppercase tracking-widest">
                Confidential from first contact <span className="mx-2 opacity-30">|</span> Your team stays <span className="mx-2 opacity-30">|</span> 30-day close
            </div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="reveal mb-20 text-center md:text-left">
<span className="block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-6">
                    We've sat across the desk from owners like you
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose mb-8">
                    YOU HAVEN'T SAID MOST OF THIS OUT LOUD.<br/>
                    BUT YOU'VE THOUGHT ALL OF IT.
                </h2>
<p className="text-lg text-offwhite/70 max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
                    The firm owners who come to us don't arrive with a polished exit strategy. They arrive with years of accumulated weight they've been carrying alone. If any of the following sounds familiar, this page was written for you.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="reveal delay-100 glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"I SHOULD HAVE DEALT WITH THIS FIVE YEARS AGO."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">You've been telling yourself "two more years" for six years now. There was always a reason to wait — a big client, a key hire, tax season, a case that needed you. But the reasons never stopped coming, and now you're further from the exit than you were when you first started thinking about it. The window isn't opening. It's closing. And you can feel it.</p>
</div>
<div className="reveal delay-200 glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"THE PRACTICE CAN'T FUNCTION WITHOUT ME."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">Every important client wants to talk to you — not your associate, not your partner, you. Every significant decision runs through your desk. You built the firm this way because you trusted no one else to do it right. And now that architecture has become a prison. You can't take two weeks off. You can't get sick. You've made yourself indispensable, and the cost of being indispensable is that you can never leave.</p>
</div>
<div className="reveal glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"I TRIED. IT DIDN'T WORK."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">Maybe you listed with a broker who promised $1.5 million and delivered 14 months of silence. Maybe you spent two years grooming a junior partner who left to start their own firm. Maybe you hired an exit planning consultant who produced a beautiful 80-page binder that's been sitting on your credenza since 2021. Every failed attempt added another layer of scar tissue. You're not just skeptical of solutions — you've stopped believing they exist.</p>
</div>
<div className="reveal delay-100 glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"NOBODY'S TELLING ME HOW."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">Everyone tells you to retire. Your spouse. Your doctor. Your financial advisor. Your friends at the bar association dinner. But nobody tells you how to actually do it when the practice IS you — when your name is on the door, your relationships are the revenue, and your clients would leave if you did. "Just sell it" is advice from people who've never built what you've built.</p>
</div>
<div className="reveal glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"I DON'T KNOW WHO I AM WITHOUT THIS."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">This is the one you don't say at dinner parties. You've been a managing partner for so long that the title IS your identity. What do you tell people you do? What does Tuesday morning look like with nowhere to go? The firm gave you purpose, status, a reason to get up. Walking away from it doesn't feel like retirement. It feels like disappearing.</p>
</div>
<div className="reveal delay-100 glass-panel p-10 group relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
<h3 className="text-lg font-serif text-white uppercase tracking-widest leading-relaxed mb-6 group-hover:text-gold transition-colors duration-500">"IF I SELL TO THE WRONG PERSON, EVERYTHING GETS DESTROYED."</h3>
<p className="text-sm text-offwhite/70 leading-relaxed font-light">You've heard the stories. Henderson sold to that firm out of Dallas — they fired half his staff within six months. Miller's acquirer rebranded everything and tripled the fees. You didn't spend 30 years building trust in this community to watch someone dismantle it for a quarterly earnings report. The fear isn't selling. The fear is selling to the wrong hands.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-4xl mx-auto">
<div className="reveal mb-20">
<span className="block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-6 text-center">
                    What nobody is telling you
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose text-center">
                    EVERY YEAR YOU WAIT, THREE THINGS HAPPEN.<br/>
                    NONE OF THEM ARE IN YOUR FAVOR.
                </h2>
</div>
<div className="space-y-10">
<div className="reveal glass-panel p-10 md:p-14">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6 text-gold">YOUR HEALTH IS KEEPING SCORE.</h3>
<div className="space-y-6">
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light">Three pill bottles on the nightstand that weren't there five years ago. A blood pressure reading your doctor doesn't like. The exhaustion that coffee stopped fixing a long time ago. The chest tightness on the stairs that you told yourself was nothing.</p>
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light">You know the research. Chronic occupational stress in professionals over 60 is associated with a 20-30% increased risk of cardiovascular events. You've spent your career advising clients to manage risk. This is a risk you're not managing.</p>
<p className="text-base md:text-lg text-white leading-relaxed font-normal">One day, you'll have to stop. The only question is whether you choose the day — or it chooses you.</p>
</div>
</div>
<div className="reveal glass-panel p-10 md:p-14">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6 text-gold">YOUR PRACTICE IS LOSING VALUE.</h3>
<div className="space-y-6">
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light">The Silver Tsunami isn't coming. It's here. Over 10,000 professionals turn 65 every single day. The market for small professional services practices is getting more crowded with sellers every month, and buyer demand isn't keeping pace. The supply-demand equation is shifting against you in real time.</p>
<p className="text-base md:text-lg text-white leading-relaxed font-normal">The practice you could have transitioned for strong money three years ago is worth less today. Not because the market crashed. Because the clock moved. And every month you wait, the gap between what you think your practice is worth and what someone will actually pay for it grows wider.</p>
</div>
</div>
<div className="reveal glass-panel p-10 md:p-14">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6 text-gold">YOUR OPTIONS ARE DISAPPEARING.</h3>
<div className="space-y-6">
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light">At 60, you had four paths. At 65, the junior partner left. At 67, your children made it clear they don't want the firm. At 70, the broker you hired couldn't find a buyer.</p>
<p className="text-base md:text-lg text-white leading-relaxed font-normal">That's not an exit strategy. That's decay. And it's what happens to the majority of professional services firm owners who never make a decision — because indecision IS a decision, and it's the most expensive one available.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-6xl mx-auto">
<div className="reveal mb-24 text-center">
<span className="block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-6">
                    Why everything else failed
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose">
                    YOU'VE TRIED THE TRADITIONAL ROUTES.<br/>
                    HERE'S WHY NONE WORKED — AND WHAT'S DIFFERENT.
                </h2>
</div>
<div className="hidden lg:grid grid-cols-2 gap-16 mb-10 px-8">
<div className="text-xs uppercase tracking-[0.2em] text-offwhite/40 font-normal text-center">What You've Tried</div>
<div className="text-xs uppercase tracking-[0.2em] text-gold font-normal text-center">How This Works</div>
</div>
<div className="space-y-6 relative">

<svg className="hidden lg:block absolute left-1/2 top-0 bottom-0 h-full w-[2px] -translate-x-1/2 overflow-visible z-10 pointer-events-none" preserveaspectratio="none">
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="1" x2="1" y1="0" y2="100%"></line>
<line className="animate-flow-line" stroke="#B8944F" stroke-dasharray="100 2000" strokeLinecap="round" strokeWidth="2" x1="1" x2="1" y1="0" y2="100%"></line>
</svg>

<div className="reveal glass-panel grid grid-cols-1 lg:grid-cols-2 p-8 md:p-12 gap-12 lg:gap-24 relative overflow-hidden group">
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 mb-4">THE BROKER</h4>
<p className="text-sm md:text-base text-offwhite/60 leading-relaxed font-light">You listed with a business broker who told you the firm was worth $1.5M. Fourteen months later: two tire-kickers, zero real offers, and a growing sense of exposure.</p>
</div>
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4 lg:hidden">HOW THIS WORKS</h4>
<p className="text-sm md:text-base text-white/90 leading-relaxed font-light">We don't list your practice. We don't shop it to strangers. We don't put you "on the market." We are the buyer. One conversation. One assessment. One direct offer. <span className="text-gold font-normal">The only people who know you're considering a transition are you and us.</span></p>
</div>
</div>
<div className="reveal delay-100 glass-panel grid grid-cols-1 lg:grid-cols-2 p-8 md:p-12 gap-12 lg:gap-24 relative overflow-hidden group">
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 mb-4">INTERNAL SUCCESSION</h4>
<p className="text-sm md:text-base text-offwhite/60 leading-relaxed font-light">You spent two or three years grooming a senior associate to take over. Invested in them. Mentored them. Then they left. You felt betrayed.</p>
</div>
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4 lg:hidden">HOW THIS WORKS</h4>
<p className="text-sm md:text-base text-white/90 leading-relaxed font-light">We don't need you to have a successor. We don't need you to have solved the owner-dependency problem before we acquire. That's what we do after. <span className="text-gold font-normal">Your only job is to decide you're ready.</span></p>
</div>
</div>
<div className="reveal glass-panel grid grid-cols-1 lg:grid-cols-2 p-8 md:p-12 gap-12 lg:gap-24 relative overflow-hidden group">
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-white/50 mb-4">THE PE ROLL-UP</h4>
<p className="text-sm md:text-base text-offwhite/60 leading-relaxed font-light">A consolidator sent a pitch deck about "platform synergies." Behind the jargon, you could see they meant: fire your staff, squeeze your clients, strip the practice of everything personal.</p>
</div>
<div>
<h4 className="text-sm font-sans uppercase tracking-[0.2em] text-gold mb-4 lg:hidden">HOW THIS WORKS</h4>
<p className="text-sm md:text-base text-white/90 leading-relaxed font-light">We're operators, not financial engineers. We don't consolidate practices into platforms. We acquire individual firms and run them. <span className="text-gold font-normal">Your name stays. Your people stay. Your reputation stays.</span></p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10" id="how-it-works">
<div className="max-w-5xl mx-auto">
<div className="reveal mb-24 text-center">
<span className="block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-6">
                    The Process
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose">
                    THREE STEPS BETWEEN YOU AND THE REST OF YOUR LIFE.<br/>
                    EACH ONE IS SIMPLE. EACH ONE IS CONFIDENTIAL.
                </h2>
</div>
<div className="space-y-8 relative">

<div className="reveal glass-panel flex flex-col md:flex-row p-10 md:p-14 gap-8 md:gap-12 items-start">

<div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></circle>
<circle className="animate-draw-circle" cx="50" cy="50" fill="none" r="46" stroke="#B8944F" stroke-dasharray="289" stroke-dashoffset="289" strokeLinecap="round" strokeWidth="1.5"></circle>
</svg>
<span className="font-serif text-3xl md:text-4xl text-gold/60 font-light leading-none">01</span>
</div>
<div className="flex-1">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6">A CONFIDENTIAL CONVERSATION.</h3>
<p className="text-base text-offwhite/80 leading-relaxed font-light mb-6">Thirty minutes. Just you and us. No script, no pitch deck, no pressure. You tell us about your practice — what you built, how it runs, who depends on it, and what's keeping you from stepping away. We listen. We ask questions. And we're honest about whether we can help.</p>
<span className="text-xs font-normal text-gold uppercase tracking-widest block py-3 px-4 bg-gold/5 rounded-lg border border-gold/10 inline-block">30 minutes · Completely confidential · No cost · No commitment</span>
</div>
</div>

<div className="reveal delay-100 glass-panel flex flex-col md:flex-row p-10 md:p-14 gap-8 md:gap-12 items-start">

<div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></circle>
<circle className="animate-draw-circle" cx="50" cy="50" fill="none" r="46" stroke="#B8944F" stroke-dasharray="289" stroke-dashoffset="289" strokeLinecap="round" strokeWidth="1.5" style={{animationDelay: '2s'}}></circle>
</svg>
<span className="font-serif text-3xl md:text-4xl text-gold/60 font-light leading-none">02</span>
</div>
<div className="flex-1">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6">A WRITTEN ASSESSMENT.</h3>
<p className="text-base text-offwhite/80 leading-relaxed font-light mb-6">We review your practice — revenue, client retention, team structure, specialization, and the degree to which the firm depends on you personally. Within two weeks, you receive a written assessment that includes a clear, fair valuation and an honest evaluation of your transition options.</p>
<span className="text-xs font-normal text-gold uppercase tracking-widest block py-3 px-4 bg-gold/5 rounded-lg border border-gold/10 inline-block">1–2 weeks · No cost · Deliverable: Written valuation and assessment</span>
</div>
</div>

<div className="reveal delay-200 glass-panel flex flex-col md:flex-row p-10 md:p-14 gap-8 md:gap-12 items-start">

<div className="relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shrink-0">
<svg className="absolute inset-0 w-full h-full -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="46" stroke="rgba(255,255,255,0.05)" strokeWidth="1"></circle>
<circle className="animate-draw-circle" cx="50" cy="50" fill="none" r="46" stroke="#B8944F" stroke-dasharray="289" stroke-dashoffset="289" strokeLinecap="round" strokeWidth="1.5" style={{animationDelay: '4s'}}></circle>
</svg>
<span className="font-serif text-3xl md:text-4xl text-gold/60 font-light leading-none">03</span>
</div>
<div className="flex-1">
<h3 className="text-xl font-serif text-white uppercase tracking-widest leading-relaxed mb-6">A FAIR OFFER WITH TERMS THAT FIT.</h3>
<p className="text-base text-offwhite/80 leading-relaxed font-light mb-6">If the fit is right, we present a direct offer. The structure is built around what works for you — not what works for our accountant. Lump sum, seller financing, revenue share, or a hybrid. Most transitions close within 30 days of the offer.</p>
<span className="text-xs font-normal text-gold uppercase tracking-widest block py-3 px-4 bg-gold/5 rounded-lg border border-gold/10 inline-block leading-relaxed">Close in 30 days · Terms built around your life · Flexible transition</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative z-10">
<div className="max-w-5xl mx-auto">
<div className="reveal mb-24 text-center">
<span className="block text-xs uppercase tracking-[0.2em] text-gold font-normal mb-6">
                    What changes
                </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose">
                    THE DISTANCE BETWEEN WHERE YOU ARE<br/>
                    AND WHERE YOU'VE EARNED THE RIGHT TO BE.
                </h2>
</div>
<div className="space-y-8 relative">

<svg className="hidden md:block absolute left-1/2 top-0 bottom-0 h-full w-[2px] -translate-x-1/2 overflow-visible z-10 pointer-events-none" preserveaspectratio="none">
<line stroke="rgba(255,255,255,0.05)" strokeWidth="1" x1="1" x2="1" y1="0" y2="100%"></line>
<line className="animate-flow-line" stroke="#B8944F" stroke-dasharray="150 1500" strokeLinecap="round" strokeWidth="2" style={{animationDelay: '2s'}} x1="1" x2="1" y1="0" y2="100%"></line>
</svg>

<div className="reveal glass-panel grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden relative group">
<div className="p-10 md:p-12 bg-charcoal/20">
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-white/30">TODAY</span>
<p className="text-base text-offwhite/60 font-light leading-relaxed">You wake at 5:45am to a body that hurts more than it used to. Three medications on the nightstand. The same commute you've driven for twenty years.</p>
</div>
<div className="p-10 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-gold">AFTER</span>
<p className="text-base text-white/90 font-light leading-relaxed relative z-10">You wake when you're rested. The morning is yours. You decide what it holds.</p>
</div>
</div>

<div className="reveal glass-panel grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden relative group delay-100">
<div className="p-10 md:p-12 bg-charcoal/20">
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-white/30">TODAY</span>
<p className="text-base text-offwhite/60 font-light leading-relaxed">47 emails by 9am. Every one of them needs you. Client demands, staff questions, vendor invoices, compliance deadlines. You are the hub through which everything passes.</p>
</div>
<div className="p-10 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-gold">AFTER</span>
<p className="text-base text-white/90 font-light leading-relaxed relative z-10">The practice runs. The systems handle intake, scheduling, follow-ups, billing. Your former team is doing the work they're good at — without waiting for you to approve every decision.</p>
</div>
</div>

<div className="reveal glass-panel grid grid-cols-1 md:grid-cols-2 p-0 overflow-hidden relative group">
<div className="p-10 md:p-12 bg-charcoal/20">
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-white/30">TODAY</span>
<p className="text-base text-offwhite/60 font-light leading-relaxed">You lie in bed at 2:47am, staring at the ceiling. The loop plays: what happens if I die? What happens to the team? What would I even do? You fall asleep with no answers.</p>
</div>
<div className="p-10 md:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<span className="font-sans text-xs uppercase tracking-widest block mb-4 text-gold">AFTER</span>
<p className="text-base text-white/90 font-light leading-relaxed relative z-10">You sleep through the night. Because the questions have answers now. The firm is in good hands. Your people are taken care of. Your clients are served.</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center items-center py-32 px-6 relative z-10" id="talk">
<div className="max-w-4xl mx-auto text-center relative z-10 glass-panel p-12 md:p-20 shadow-[0_0_80px_rgba(184,148,79,0.05)] border-t border-gold/20">

<div className="reveal mx-auto w-16 h-16 md:w-20 md:h-20 mb-10 relative">
<svg className="w-full h-full overflow-visible" viewbox="0 0 100 100">

<path d="M 25 50 C 25 30, 45 30, 50 50 C 55 70, 75 70, 75 50 C 75 30, 55 30, 50 50 C 45 70, 25 70, 25 50 Z" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1.5"></path>

<path className="animate-draw-infinity" d="M 25 50 C 25 30, 45 30, 50 50 C 55 70, 75 70, 75 50 C 75 30, 55 30, 50 50 C 45 70, 25 70, 25 50 Z" fill="none" stroke="#B8944F" stroke-dasharray="250" stroke-dashoffset="250" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
</div>
<h2 className="reveal delay-100 text-3xl md:text-4xl lg:text-5xl font-serif text-white uppercase tracking-widest leading-loose mb-10">
                YOU'VE CARRIED THIS LONG ENOUGH.<br/>
                SETTING IT DOWN ISN'T GIVING UP.<br/>
                IT'S THE LAST ACT OF A GOOD STEWARD.
            </h2>
<div className="reveal delay-200">
<p className="text-base md:text-lg text-offwhite/80 leading-relaxed font-light mb-6 max-w-2xl mx-auto">
                    No pressure. No obligation. No one will know you called. Just a private conversation between you and someone who understands what you've built, what it's cost you, and what you deserve now.
                </p>
<a className="inline-flex items-center gap-3 text-white px-10 py-5 text-xs font-normal uppercase tracking-[0.2em] rounded-full glass-btn group mt-6 mb-8" href="#">
                    Request a Confidential Conversation
                    <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<p className="text-[10px] text-offwhite/40 font-light uppercase tracking-widest block">
                    Completely confidential · 30 minutes · Your pace, your terms
                </p>
</div>
</div>
</section>

<footer className="pt-16 pb-12 px-6 relative z-10 border-t border-white/5 bg-charcoal/80 backdrop-blur-xl mt-16">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
<div className="text-center md:text-left">
<span className="text-white font-serif text-lg tracking-[0.2em] uppercase font-normal">GC</span>
</div>
<div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs uppercase tracking-widest text-offwhite/60 font-normal">
<a className="hover:text-gold transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-gold transition-colors" href="#">Is This For You</a>
<a className="hover:text-gold transition-colors" href="#">Questions</a>
<a className="hover:text-gold transition-colors" href="#">The Transition Letter</a>
</div>
<div className="text-center md:text-right text-xs font-normal uppercase tracking-widest space-y-4">
<a className="block text-offwhite/60 hover:text-white transition-colors" href="mailto:hello@growthcred.com">hello@growthcred.com</a>
<a className="block text-gold hover:text-white transition-colors" href="#talk">Request a Conversation</a>
</div>
</div>
<div className="text-center border-t border-white/5 pt-10">
<p className="text-xs text-offwhite/40 leading-relaxed font-light tracking-wide uppercase">
                    Growth Cred acquires and operates professional services practices.<br className="hidden sm:block"/>
                    We buy from good people. We keep good people. We protect what good people built.
                </p>
</div>
</div>
</footer>



    </>
  );
}
