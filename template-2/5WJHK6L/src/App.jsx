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
                    colors: {
                        aura: {
                            bg: '#0d0e10',
                            card: '#13141a',
                            border: '#1f2023',
                            accent: '#5e6ad2',
                            purple: '#8b5cf6',
                            text: '#b4bcd0',
                            muted: '#7c8794'
                        }
                    },
                    fontFamily: {
                        geist: ['Geist', 'sans-serif'],
                    }
                }
            }
        }
    


        const container = document.getElementById('testimonials-container');
        const cards = document.querySelectorAll('.testimonial-card');
        const dots = document.querySelectorAll('.pagination button');
        let activeCardId = 1;
        
        cards.forEach(card => {
            let startX;
            let currentX;
            let isDragging = false;
            
            card.addEventListener('mousedown', startDrag);
            card.addEventListener('touchstart', e => {
                e.preventDefault();
                startDrag(e.touches[0]);
            }, { passive: false });
            
            function startDrag(e) {
                if (card.dataset.cardId != activeCardId) return;
                
                isDragging = true;
                startX = e.clientX;
                
                document.addEventListener('mousemove', drag);
                document.addEventListener('touchmove', e => drag(e.touches[0]), { passive: true });
                
                document.addEventListener('mouseup', endDrag);
                document.addEventListener('touchend', endDrag);
            }
            
            function drag(e) {
                if (!isDragging) return;
                
                currentX = e.clientX;
                const diff = currentX - startX;
                
                if (diff > 6) {
                    card.classList.add('dragging-right');
                    card.classList.remove('dragging-left');
                } else if (diff < -6) {
                    card.classList.add('dragging-left');
                    card.classList.remove('dragging-right');
                } else {
                    card.classList.remove('dragging-left', 'dragging-right');
                }
            }
            
            function endDrag() {
                if (!isDragging) return;
                isDragging = false;
                
                document.removeEventListener('mousemove', drag);
                document.removeEventListener('touchmove', drag);
                
                if (card.classList.contains('dragging-right')) {
                    navigateToCard(activeCardId === 1 ? 3 : activeCardId - 1);
                } else if (card.classList.contains('dragging-left')) {
                    navigateToCard(activeCardId === 3 ? 1 : activeCardId + 1);
                }
                
                card.classList.remove('dragging-left', 'dragging-right');
            }
        });
        
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const cardId = dot.id.split('-')[1];
                navigateToCard(parseInt(cardId));
            });
        });
        
        function navigateToCard(cardId) {
            activeCardId = cardId;
            
            container.className = `testimonials-stack card-${cardId}-active`;
            
            dots.forEach(dot => {
                const dotId = dot.id.split('-')[1];
                if (parseInt(dotId) === cardId) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
    
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
      
<div className="container-center">
<div className="max-w-4xl w-full p-8">

<section className="testimonials-stack card-1-active" id="testimonials-container">

<div className="testimonial-card glass-effect" data-card-id="1">
<div className="p-8">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="avatar">SM</div>
<div>
<h3 className="text-white font-medium text-lg">Sarah Mitchell</h3>
<p className="text-sm text-aura-muted mt-1">VP of Engineering at TechFlow</p>
</div>
</div>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</div>
<blockquote className="text-aura-text leading-relaxed text-lg mb-6">
                            "This platform has completely transformed how our team collaborates. The AI-powered analytics provide insights we never had before, and the performance improvements are remarkable. Best investment we've made this year."
                        </blockquote>
<div className="flex items-center justify-between border-t border-aura-border pt-4">
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-aura-accent/20 text-aura-accent border border-aura-accent/30">FEATURED</span>
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Enterprise</span>
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Verified</span>
</div>
<div className="flex items-center gap-4 text-xs text-aura-muted">
<span><i className="fas fa-users mr-1"></i> 200+ team</span>
<span><i className="fas fa-calendar mr-1"></i> 2 years customer</span>
</div>
</div>
</div>
</div>

<div className="testimonial-card glass-effect" data-card-id="2">
<div className="p-8">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="avatar" style={{background: `linear-gradient(135deg, #10b981, #059669)`}}>MC</div>
<div>
<h3 className="text-white font-medium text-lg">Marcus Chen</h3>
<p className="text-sm text-aura-muted mt-1">Product Manager at DataSync</p>
</div>
</div>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</div>
<blockquote className="text-aura-text leading-relaxed text-lg mb-6">
                            "The real-time collaboration features are game-changing. Our remote team feels more connected than ever, and the platform's reliability is outstanding. The mobile experience is seamless across all devices."
                        </blockquote>
<div className="flex items-center justify-between border-t border-aura-border pt-4">
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Startup</span>
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Mobile</span>
</div>
<div className="flex items-center gap-4 text-xs text-aura-muted">
<span><i className="fas fa-thumbs-up mr-1"></i> Helpful</span>
<span><i className="fas fa-shield-alt mr-1"></i> Verified Purchase</span>
</div>
</div>
</div>
</div>

<div className="testimonial-card glass-effect" data-card-id="3">
<div className="p-8">
<div className="flex items-start justify-between mb-6">
<div className="flex items-center gap-4">
<div className="avatar" style={{background: `linear-gradient(135deg, #f59e0b, #d97706)`}}>AR</div>
<div>
<h3 className="text-white font-medium text-lg">Alex Rodriguez</h3>
<p className="text-sm text-aura-muted mt-1">CTO at StartupFlow</p>
</div>
</div>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</div>
<blockquote className="text-aura-text leading-relaxed text-lg mb-6">
                            "Incredible performance boost and the mobile apps are flawless. Support team is responsive and the feature roadmap aligns perfectly with our needs. The customization options are endless."
                        </blockquote>
<div className="flex items-center justify-between border-t border-aura-border pt-4">
<div className="flex gap-2">
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">Enterprise</span>
<span className="text-xs px-2 py-1 rounded-md bg-aura-border text-aura-muted">API User</span>
</div>
<div className="flex items-center gap-4 text-xs text-aura-muted">
<span><i className="fas fa-clock mr-1"></i> 6 months ago</span>
<span><i className="fas fa-share mr-1"></i> Shared 8 times</span>
</div>
</div>
</div>
</div>
<div className="pagination">
<button className="active" id="dot-1"></button>
<button id="dot-2"></button>
<button id="dot-3"></button>
</div>
<div className="swipe-hint">
<i className="fas fa-arrows-left-right"></i> Drag cards to navigate
                </div>
</section>
</div>
</div>


    </>
  );
}
