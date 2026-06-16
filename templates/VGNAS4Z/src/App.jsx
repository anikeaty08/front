import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        'serif': ['Crimson Text', 'serif'],
                        'mono': ['Space Mono', 'monospace']
                    },
                    colors: {
                        'parchment': '#F4F1E8',
                        'darkbrown': '#2D1B0F',
                        'gold': '#B8860B',
                        'mutedteal': '#5F7A7A'
                    }
                }
            }
        }
    


        // Enhanced mouse interaction with parchment effect
        let mouseX = 0, mouseY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Create subtle paper texture following cursor
            const paperEffect = document.createElement('div');
            paperEffect.style.position = 'fixed';
            paperEffect.style.left = mouseX + 'px';
            paperEffect.style.top = mouseY + 'px';
            paperEffect.style.width = '1px';
            paperEffect.style.height = '1px';
            paperEffect.style.background = 'radial-gradient(circle, rgba(244,241,232,0.1) 0%, transparent 70%)';
            paperEffect.style.borderRadius = '50%';
            paperEffect.style.pointerEvents = 'none';
            paperEffect.style.zIndex = '5';
            paperEffect.style.transform = 'translate(-50%, -50%)';
            
            document.body.appendChild(paperEffect);
            
            setTimeout(() => {
                paperEffect.remove();
            }, 1000);
        });

        // Typewriter cursor blink effect
        setInterval(() => {
            const cursor = document.querySelector('.typewriter');
            if (cursor) {
                cursor.style.borderColor = cursor.style.borderColor === 'transparent' ? '#B8860B' : 'transparent';
            }
        }, 500);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-20 left-10 w-8 h-8 bg-gold rounded-full opacity-5 ink-spot" style={{animationDelay: '2s'}}></div>
<div className="absolute top-60 right-20 w-6 h-6 bg-mutedteal rounded-full opacity-5 ink-spot" style={{animationDelay: '4s'}}></div>
<div className="absolute bottom-40 left-1/4 w-10 h-10 bg-gold rounded-full opacity-5 ink-spot" style={{animationDelay: '6s'}}></div>
<div className="absolute bottom-20 right-1/3 w-4 h-4 bg-mutedteal rounded-full opacity-5 ink-spot" style={{animationDelay: '8s'}}></div>
</div>

<nav className="fixed left-0 top-0 h-full w-72 bg-darkbrown/95 backdrop-blur-sm border-r-2 border-gold/30 z-20 p-8">
<div className="mb-12" style={{animation: 'fade-in-up 0.8s ease-out 0.2s forwards', opacity: '0'}}>
<h2 className="text-3xl font-bold text-gold font-serif">ACADEMIA</h2>
<p className="text-sm font-mono text-mutedteal mt-2">Scholarly Excellence</p>
<div className="w-12 h-px bg-gold/60 mt-4"></div>
</div>
<ul className="space-y-6">
<li style={{animation: 'fade-in-up 0.8s ease-out 0.4s forwards', opacity: '0'}}>
<a className="block text-lg hover:text-gold transition-colors duration-300" href="#">Testimonials</a>
</li>
<li style={{animation: 'fade-in-up 0.8s ease-out 0.6s forwards', opacity: '0'}}>
<a className="block text-lg hover:text-gold transition-colors duration-300" href="#">Programs</a>
</li>
<li style={{animation: 'fade-in-up 0.8s ease-out 0.8s forwards', opacity: '0'}}>
<a className="block text-lg hover:text-gold transition-colors duration-300" href="#">Faculty</a>
</li>
<li style={{animation: 'fade-in-up 0.8s ease-out 1s forwards', opacity: '0'}}>
<a className="block text-lg hover:text-gold transition-colors duration-300" href="#">Research</a>
</li>
<li style={{animation: 'fade-in-up 0.8s ease-out 1.2s forwards', opacity: '0'}}>
<a className="block text-lg hover:text-gold transition-colors duration-300" href="#">Library</a>
</li>
</ul>
<div className="absolute bottom-8 left-8" style={{animation: 'fade-in-up 0.8s ease-out 1.4s forwards', opacity: '0'}}>
<div className="text-sm text-mutedteal font-mono">
<p>Est. 2024</p>
<p className="text-gold">Digital Scholars</p>
</div>
</div>
</nav>

<div className="relative z-10 min-h-screen ml-72 px-16 py-20">

<div className="text-center mb-20">
<div className="mb-8">
<h2 className="text-sm font-mono text-mutedteal uppercase tracking-[0.3em] mb-4 typewriter">
                    Scholar Testimonials
                </h2>
<div className="w-24 h-px bg-gold/60 mx-auto"></div>
</div>
<h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8 text-gold" style={{animation: 'fade-in-up 0.8s ease-out 2s forwards', opacity: '0'}}>
                Voices of
                <span className="block italic text-parchment">Excellence</span>
</h1>
<p className="text-xl leading-relaxed text-parchment/80 max-w-3xl mx-auto" style={{animation: 'fade-in-up 0.8s ease-out 2.5s forwards', opacity: '0'}}>
                Distinguished scholars and innovators share their transformative experiences with our digital learning platform.
            </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">

<div className="testimonial-card paper-fold bg-parchment/10 backdrop-blur-sm border border-gold/30 p-8 rounded-lg" style={{animationDelay: '3s'}}>
<div className="mb-6">
<span className="text-6xl text-gold/40 quote-mark font-serif leading-none">"</span>
</div>
<blockquote className="text-lg italic leading-relaxed mb-8 text-parchment/90">
                    The intersection of classical learning methodologies with cutting-edge AI has revolutionized my research approach. This platform doesn't just teach—it transforms scholarly thinking.
                </blockquote>
<div className="flex items-center justify-between">
<div>
<h4 className="font-semibold text-gold text-lg">Dr. Margaret Whitfield</h4>
<p className="text-mutedteal font-mono text-sm">Professor of Digital Humanities</p>
<p className="text-parchment/60 text-sm">Oxford University</p>
</div>
<div className="scholar-rating text-right">
<div className="text-2xl">★★★★★</div>
<p className="text-xs font-mono text-parchment/60">Verified Scholar</p>
</div>
</div>
</div>

<div className="testimonial-card paper-fold bg-parchment/10 backdrop-blur-sm border border-gold/30 p-8 rounded-lg" style={{animationDelay: '3.5s'}}>
<div className="mb-6">
<span className="text-6xl text-gold/40 quote-mark font-serif leading-none">"</span>
</div>
<blockquote className="text-lg italic leading-relaxed mb-8 text-parchment/90">
                    A masterpiece of educational technology. The platform seamlessly blends traditional academic rigor with innovative digital tools, creating an unparalleled learning environment.
                </blockquote>
<div className="flex items-center justify-between">
<div>
<h4 className="font-semibold text-gold text-lg">Prof. Alessandro Chen</h4>
<p className="text-mutedteal font-mono text-sm">Chair of Computer Philosophy</p>
<p className="text-parchment/60 text-sm">MIT</p>
</div>
<div className="scholar-rating text-right">
<div className="text-2xl">★★★★★</div>
<p className="text-xs font-mono text-parchment/60">Verified Scholar</p>
</div>
</div>
</div>

<div className="testimonial-card paper-fold bg-parchment/10 backdrop-blur-sm border border-gold/30 p-8 rounded-lg" style={{animationDelay: '4s'}}>
<div className="mb-6">
<span className="text-6xl text-gold/40 quote-mark font-serif leading-none">"</span>
</div>
<blockquote className="text-lg italic leading-relaxed mb-8 text-parchment/90">
                    The thoughtful integration of AI consulting with classical pedagogy has elevated my institution's curriculum beyond what I thought possible. Simply extraordinary.
                </blockquote>
<div className="flex items-center justify-between">
<div>
<h4 className="font-semibold text-gold text-lg">Dr. Elena Vasquez</h4>
<p className="text-mutedteal font-mono text-sm">Dean of Emerging Technologies</p>
<p className="text-parchment/60 text-sm">Stanford University</p>
</div>
<div className="scholar-rating text-right">
<div className="text-2xl">★★★★★</div>
<p className="text-xs font-mono text-parchment/60">Verified Scholar</p>
</div>
</div>
</div>

<div className="testimonial-card paper-fold bg-parchment/10 backdrop-blur-sm border border-gold/30 p-8 rounded-lg" style={{animationDelay: '4.5s'}}>
<div className="mb-6">
<span className="text-6xl text-gold/40 quote-mark font-serif leading-none">"</span>
</div>
<blockquote className="text-lg italic leading-relaxed mb-8 text-parchment/90">
                    This platform represents the future of scholarly engagement—where tradition meets innovation in perfect harmony. My students are achieving unprecedented levels of intellectual growth.
                </blockquote>
<div className="flex items-center justify-between">
<div>
<h4 className="font-semibold text-gold text-lg">Prof. James Morrison</h4>
<p className="text-mutedteal font-mono text-sm">Director of AI Ethics</p>
<p className="text-parchment/60 text-sm">Cambridge University</p>
</div>
<div className="scholar-rating text-right">
<div className="text-2xl">★★★★★</div>
<p className="text-xs font-mono text-parchment/60">Verified Scholar</p>
</div>
</div>
</div>
</div>

<div className="mt-20 text-center" style={{animation: 'fade-in-up 0.8s ease-out 5s forwards', opacity: '0'}}>
<div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
<div>
<h3 className="text-4xl font-bold text-gold mb-2">150+</h3>
<p className="text-mutedteal font-mono text-sm">Distinguished Scholars</p>
</div>
<div>
<h3 className="text-4xl font-bold text-gold mb-2">98%</h3>
<p className="text-mutedteal font-mono text-sm">Satisfaction Rate</p>
</div>
<div>
<h3 className="text-4xl font-bold text-gold mb-2">50+</h3>
<p className="text-mutedteal font-mono text-sm">Partner Institutions</p>
</div>
</div>
</div>
</div>


    </>
  );
}
