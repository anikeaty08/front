import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const container = document.getElementById('cards-container');
        const cards = document.querySelectorAll('article');
        const dots = document.querySelectorAll('.pagination button');
        let activeCardId = 1;
        
        // Initialize card drag functionality
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
                
                if (diff > 6) { // Much more sensitive (was 30)
                    card.classList.add('dragging-right');
                    card.classList.remove('dragging-left');
                } else if (diff < -6) { // Much more sensitive (was -30)
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
                    // Go to previous card
                    navigateToCard(activeCardId === 1 ? 3 : activeCardId - 1);
                } else if (card.classList.contains('dragging-left')) {
                    // Go to next card
                    navigateToCard(activeCardId === 3 ? 1 : activeCardId + 1);
                }
                
                card.classList.remove('dragging-left', 'dragging-right');
            }
        });
        
        // Dot navigation
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const cardId = dot.id.split('-')[1];
                navigateToCard(parseInt(cardId));
            });
        });
        
        function navigateToCard(cardId) {
            activeCardId = cardId;
            
            // Update container class
            container.className = `card-${cardId}-active`;
            
            // Update dots
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
  }, []);

  return (
    <>
      
<section className="card-1-active" id="cards-container">
<article data-card-id="1" id="card-1">
<header>
<h2>Utility-First Approach</h2>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-puzzle-piece"></i>
</div>
<div className="poem">
<p>
                        Tailwind builds interfaces piece by piece,<br/>
                        With utility classes that never cease.<br/>
                        No more custom CSS sprawling free,<br/>
                        Just composable classes for all to see.
                    </p>
<p>
                        Write less custom code, stay in your flow,<br/>
                        With responsive modifiers that help you grow.<br/>
                        Using classes like flex, grid, and p-4,<br/>
                        Your markup reveals what the styling's for.
                    </p>
<p>
                        The workflow feels rapid, intuitive, clean,<br/>
                        Keeping your projects lean and your code serene.<br/>
                        Direct in your HTML, no context switching,<br/>
                        Makes development faster without any glitching.
                    </p>
<p>
                        So embrace the approach that's utility-first,<br/>
                        Where productivity soars and design is immersed—<br/>
                        No fighting the framework or swimming upstream,<br/>
                        Just clean, functional UIs fulfilling your dream.
                    </p>
</div>
</div>
</article>
<article data-card-id="2" id="card-2">
<header>
<h2>Responsive Design</h2>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-mobile-screen"></i>
</div>
<div className="poem">
<p>Built-in breakpoints make layouts adapt,<br/>
                        From mobile to desktop, no feature's trapped.<br/>
                        With sm:, md:, lg:, and xl: prefixes in hand,<br/>
                        Your design flows seamlessly across the land.
                    </p>
<p>Start small and build up, the mobile-first way,<br/>
                        Let larger screens have their specific display.<br/>
                        No media queries cluttering your code,<br/>
                        Just intuitive classes that ease your load.</p>
<p>Container queries now join the responsive game,<br/>
                        Making component-based design less of a pain.<br/>
                        With @container and @supports at play,<br/>
                        Advanced responsive patterns are just a class away.
                    </p>
<p>Dynamic layouts shift with screen real estate,<br/>
                        From stacked to side-by-side, they'll navigate.<br/>
                        Tailwind's responsive system keeps UIs refined—<br/>
                        Fluid, adaptable, and perfectly aligned.
                    </p>
</div>
</div>
</article>
<article data-card-id="3" id="card-3">
<header>
<h2>Customization</h2>
<div className="drag-indicator">
<span></span>
<span></span>
<span></span>
</div>
</header>
<div>
<div className="icon">
<i className="fa-solid fa-sliders"></i>
</div>
<div className="poem">
<p>
                        The config file welcomes your custom touch,<br/>
                        Themes, colors, and spacing—adjust as much.<br/>
                        Your brand's palette easily slides in place,<br/>
                        Making Tailwind yours with effortless grace.
                    </p>
<p>Extend the defaults or replace them outright,<br/>
                        Define what you need with future in sight.<br/>
                        Add plugins for patterns you frequently use,<br/>
                        Or create your variants—there's nothing to lose.</p>
<p>Just-in-time compiler keeps bundles tight,<br/>
                        Generating only the CSS you write.<br/>
                        Safe-list important classes for dynamic needs,<br/>
                        While purging unused styles for optimal speeds.</p>
<p>Your design system lives in tailwind.config,<br/>
                        A single source of truth that's easy to tweak.<br/>
                        The lessons clear as developers build:<br/>
                        Constraint inspires creativity when skillfully filled.</p>
</div>
</div>
</article>
<div className="pagination">
<button className="active" id="dot-1"></button>
<button id="dot-2"></button>
<button id="dot-3"></button>
</div>
<div className="swipe-hint">
<i className="fa-solid fa-arrows-left-right"></i> Drag cards to navigate
        </div>
</section>


    </>
  );
}
