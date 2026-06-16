import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
        // Parallax effect for grid pattern
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.getElementById('gridPattern');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

        // Subtle animation for grid pattern
        let animationOffset = 0;
        function animateGrid() {
            animationOffset += 0.5;
            const gridPattern = document.getElementById('gridPattern');
            if (gridPattern) {
                gridPattern.style.backgroundPosition = `${Math.sin(animationOffset * 0.01) * 2}px ${Math.cos(animationOffset * 0.01) * 2}px`;
            }
            requestAnimationFrame(animateGrid);
        }
        
        animateGrid();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<iframe className="fixed inset-0 w-full h-full -z-10" frameborder="0" height="100%" src="https://my.spline.design/aidatamodelinteraction-mdTL3FktFVHgDvFr5TKtnYDV" width="100%">
</iframe>

<div className="fixed inset-0 grid-pattern" id="gridPattern"></div>


    </>
  );
}
