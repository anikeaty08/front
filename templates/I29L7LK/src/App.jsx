import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        gsap.registerPlugin(ScrollTrigger);

        // Split text into words for animation
        function splitTextIntoWords(selector) {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                const text = element.textContent;
                const words = text.split(' ');
                element.innerHTML = words.map(word => `<span class="word">${word}</span>`).join(' ');
            });
        }

        // Split hero text, card titles, and quote into words
        splitTextIntoWords('.hero-text');
        splitTextIntoWords('.card-title');
        splitTextIntoWords('.quote-text');
        splitTextIntoWords('.content-title');

        // Animate hero text words
        const heroWords = document.querySelectorAll('.hero-text .word');
        gsap.to(heroWords, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            delay: 0.5
        });

        const cards = gsap.utils.toArray(".card");
        const cardVisibleAmount = 120;
        const initialOffset = 120;

        // Set initial positions
        cards.forEach((card, index) => {
            if (index > 0) {
                gsap.set(card, { y: index * initialOffset });
            } else {
                gsap.set(card, { y: 0 });
            }
        });

        // Animate card stacking
        cards.forEach((card, index) => {
            if (index > 0) {
                ScrollTrigger.create({
                    trigger: ".cards-container",
                    start: "top top",
                    end: `+=${cards.length * 200}`,
                    scrub: true,
                    animation: gsap.to(card, {
                        y: index * cardVisibleAmount,
                        ease: "none"
                    })
                });
            }

            // Animate card title words
            const cardWords = card.querySelectorAll('.card-title .word');
            gsap.set(cardWords, { opacity: 0, y: 30 });

            ScrollTrigger.create({
                trigger: card,
                start: "top 80%",
                end: "top 20%",
                scrub: false,
                onEnter: () => {
                    gsap.to(cardWords, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: "power2.out"
                    });
                }
            });
        });

        // Pin the cards container
        ScrollTrigger.create({
            trigger: ".cards-container",
            start: "top top",
            end: `+=${cards.length * 300}`,
            pin: true
        });

        // Animate content section items
        const contentItems = document.querySelectorAll('.content-item');
        contentItems.forEach((item, index) => {
            const subtitle = item.querySelector('.content-subtitle');
            const titleWords = item.querySelectorAll('.content-title .word');
            const text = item.querySelector('.content-text');

            gsap.set([subtitle, titleWords, text], { opacity: 0, y: 50 });

            ScrollTrigger.create({
                trigger: item,
                start: "top 80%",
                end: "top 50%",
                scrub: false,
                onEnter: () => {
                    const tl = gsap.timeline();
                    tl.to(subtitle, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        ease: "power2.out"
                    })
                    .to(titleWords, {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.08,
                        ease: "power2.out"
                    }, "-=0.3")
                    .to(text, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        ease: "power2.out"
                    }, "-=0.2");
                }
            });
        });

        // Animate quote section
        const quoteWords = document.querySelectorAll('.quote-text .word');
        const quoteAuthor = document.querySelector('.quote-author');
        
        gsap.set(quoteWords, { opacity: 0, y: 50 });
        gsap.set(quoteAuthor, { opacity: 0, y: 30 });

        ScrollTrigger.create({
            trigger: ".quote-section",
            start: "top 70%",
            end: "top 30%",
            scrub: false,
            onEnter: () => {
                gsap.to(quoteWords, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power2.out"
                });
                
                gsap.to(quoteAuthor, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 1,
                    ease: "power2.out"
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="hero-section">
<h2 className="hero-text">In the quiet moments between heartbeats, we discover the infinite wisdom that has always been waiting within us.</h2>
</div>
<div className="divider"></div>
<div className="cards-container">
<div className="card card-1">
<div className="card-content">
<h2 className="card-title">Mindfulness</h2>
</div>
</div>
<div className="card card-2">
<div className="card-content">
<h2 className="card-title">Breathe</h2>
</div>
</div>
<div className="card card-3">
<div className="card-content">
<h2 className="card-title">Focus</h2>
</div>
</div>
<div className="card card-4">
<div className="card-content">
<h2 className="card-title">Balance</h2>
</div>
</div>
<div className="card card-5">
<div className="card-content">
<h2 className="card-title">Clarity</h2>
</div>
</div>
</div>
<div className="scroll-spacer"></div>
<div className="content-section">
<div className="content-grid">
<div className="content-item">
<div className="content-subtitle">Philosophy</div>
<h3 className="content-title">The Art of Being Present</h3>
<p className="content-text">True mindfulness is not about emptying the mind, but about being fully aware of what is happening in this moment. It's the practice of observing thoughts, feelings, and sensations without judgment.</p>
</div>
<div className="content-item">
<div className="content-subtitle">Practice</div>
<h3 className="content-title">Cultivating Inner Peace</h3>
<p className="content-text">Through conscious breathing and gentle awareness, we learn to create space between stimulus and response. This space is where freedom lives, where choice replaces reaction.</p>
</div>
<div className="content-item">
<div className="content-subtitle">Wisdom</div>
<h3 className="content-title">Beyond the Mind</h3>
<p className="content-text">The thinking mind is a powerful tool, but it is not who we are. In the stillness beneath our thoughts lies an ocean of peace, waiting to be discovered by those who dare to be still.</p>
</div>
<div className="content-item">
<div className="content-subtitle">Journey</div>
<h3 className="content-title">The Pathless Path</h3>
<p className="content-text">Awakening is not a destination to reach, but a recognition of what has always been here. It's the gentle remembering of our true nature, which was never actually forgotten.</p>
</div>
</div>
</div>
<div className="quote-section">
<blockquote className="quote-text">"The present moment is the only time over which we have dominion."</blockquote>
<cite className="quote-author">Thích Nhất Hạnh</cite>
</div>


    </>
  );
}
