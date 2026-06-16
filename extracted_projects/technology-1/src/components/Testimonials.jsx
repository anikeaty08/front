import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "Dasher completely eliminated our devops overhead. Our team ships features 3x faster now, and the global edge network handles our traffic spikes without breaking a sweat.",
    author: "Sarah Jenkins",
    role: "CTO at Nexus",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80"
  },
  {
    quote: "We migrated our entire microservice architecture to Dasher over a weekend. The latency drop was immediate and our infrastructure costs plummeted by 40%.",
    author: "Marcus Chen",
    role: "Lead Architect at Velo",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80"
  },
  {
    quote: "The developer experience is unmatched. From zero-config deployments to the real-time analytics dashboard, it's the platform I've always wanted to build on.",
    author: "Elena Rodriguez",
    role: "Indie Hacker",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.test-header', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      gsap.from('.test-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.test-container',
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <div className="test-header mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          Loved by builders worldwide
        </h2>
      </div>

      <div className="test-container grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="test-card p-8 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:bg-white/[0.04] transition-colors duration-300 hover:border-white/10 group">
            <div className="mb-8 relative">
              <iconify-icon icon="solar:quote-right-bold" class="text-3xl text-[#FF4500]/20 mb-4 group-hover:text-[#FF4500]/40 transition-colors duration-300"></iconify-icon>
              <p className="text-zinc-300 leading-relaxed text-sm">"{t.quote}"</p>
            </div>
            
            <div className="flex items-center gap-4">
              <img 
                src={t.image} 
                alt={t.author} 
                className="w-10 h-10 rounded-full object-cover border border-white/10 group-hover:border-[#FF4500]/50 transition-colors duration-300"
                loading="lazy"
              />
              <div>
                <div className="text-white font-medium text-sm">{t.author}</div>
                <div className="text-zinc-500 text-xs">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}