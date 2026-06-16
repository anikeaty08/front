import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const grid = document.getElementById('grid');
        const cols = 20; // Adjust based on screen size
        const rows = Math.ceil(window.innerHeight / (window.innerWidth / cols));
        const totalCells = cols * rows;
        
        // Create grid items
        for (let i = 0; i < totalCells; i++) {
            const div = document.createElement('div');
            div.className = 'grid-item border border-neutral-800 aspect-square';
            div.dataset.index = i;
            grid.appendChild(div);
        }
        
        // Add hover effect to highlight surrounding cells
        const gridItems = document.querySelectorAll('.grid-item');
        
        gridItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                
                // Only 4 direct neighbors (top, right, bottom, left)
                const neighbors = [
                    index - cols,     // top
                    index + 1,        // right
                    index + cols,     // bottom
                    index - 1         // left
                ];
                
                neighbors.forEach((neighborIndex, i) => {
                    const neighborRow = Math.floor(neighborIndex / cols);
                    const neighborCol = neighborIndex % cols;
                    
                    // Check bounds and ensure it's actually adjacent (no wrapping)
                    let isValid = neighborIndex >= 0 && neighborIndex < gridItems.length;
                    
                    // For left/right, check they're on the same row
                    if (i === 1 && neighborCol !== col + 1) isValid = false; // right
                    if (i === 3 && neighborCol !== col - 1) isValid = false; // left
                    
                    if (isValid) {
                        gridItems[neighborIndex].style.borderColor = 'rgb(250 204 21)';
                    }
                });
            });
            
            item.addEventListener('mouseleave', () => {
                const row = Math.floor(index / cols);
                const col = index % cols;
                
                const neighbors = [
                    index - cols, index + 1, index + cols, index - 1
                ];
                
                neighbors.forEach((neighborIndex, i) => {
                    const neighborRow = Math.floor(neighborIndex / cols);
                    const neighborCol = neighborIndex % cols;
                    
                    let isValid = neighborIndex >= 0 && neighborIndex < gridItems.length;
                    
                    if (i === 1 && neighborCol !== col + 1) isValid = false;
                    if (i === 3 && neighborCol !== col - 1) isValid = false;
                    
                    if (isValid) {
                        gridItems[neighborIndex].style.borderColor = 'rgb(38 38 38)';
                    }
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 xl:grid-cols-20 w-screen h-screen" id="grid">

</div>


    </>
  );
}
