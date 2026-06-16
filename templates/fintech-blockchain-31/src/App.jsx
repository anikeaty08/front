import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const loader = document.getElementById('mosaic-loader');
            const states = [
                '<iconify-icon icon="solar:ticket-linear" width="28" height="28"></iconify-icon>',
                '<span class="font-bold text-lg tracking-tighter leading-none">40%</span>'
            ];
            let currentState = 0;

            function triggerMosaic() {
                const nextState = (currentState + 1) % states.length;
                
                // Create overlay grid
                const overlay = document.createElement('div');
                overlay.className = 'absolute inset-0 grid grid-cols-4 grid-rows-4 z-10';
                
                // Generate blocks
                const blocks = Array.from({ length: 16 }, () => {
                    const block = document.createElement('div');
                    // Increased transition duration slightly
                    block.className = 'bg-[#8ced8c] opacity-0 transition-opacity duration-[100ms]';
                    
                    // Assign random target opacity
                    const opacities = ['1', '0.6', '0.3'];
                    block.dataset.targetOpacity = opacities[Math.floor(Math.random() * opacities.length)];
                    
                    overlay.appendChild(block);
                    return block;
                });
                
                loader.appendChild(overlay);

                // Randomize indices
                const indices = Array.from({ length: 16 }, (_, i) => i).sort(() => Math.random() - 0.5);
                
                // Phase 1: Cover with mosaic blocks (Slowed interval from 6ms to 15ms)
                indices.forEach((index, i) => {
                    setTimeout(() => blocks[index].style.opacity = blocks[index].dataset.targetOpacity, i * 15);
                });

                // Phase 2: Swap content and reveal
                setTimeout(() => {
                    // Remove current content
                    Array.from(loader.childNodes).forEach(node => {
                        if (node !== overlay) loader.removeChild(node);
                    });

                    // Insert new state content
                    const temp = document.createElement('div');
                    temp.innerHTML = states[nextState];
                    Array.from(temp.childNodes).forEach(node => loader.insertBefore(node, overlay));
                    
                    currentState = nextState;

                    // Uncover blocks
                    indices.forEach((index, i) => {
                        setTimeout(() => blocks[index].style.opacity = '0', i * 15);
                    });

                    // Clean up and schedule next transition
                    setTimeout(() => {
                        if (loader.contains(overlay)) loader.removeChild(overlay);
                        // Longer wait time between animations (1500ms to 2500ms)
                        setTimeout(triggerMosaic, 2500);
                    }, indices.length * 15 + 100);

                }, indices.length * 15 + 150);
            }

            // Start the sequence loop with slower initial delay
            setTimeout(triggerMosaic, 2500);
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-500 hover:text-white transition-colors focus:outline-none">
<iconify-icon height="32" icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
<main className="w-full max-w-[560px] flex flex-col items-center mt-8 md:mt-0">

<div className="mb-14 md:mb-20 w-full text-center">
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-5">
                Welcome to TxFlow
            </h1>
<p className="text-lg md:text-xl text-gray-400">
                The Blockchain where finance happens.
            </p>
</div>

<div className="w-full flex flex-col">
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-white mb-6 text-left">
                Enter your access code to Join Alpha Mainnet
            </h2>

<input className="w-full bg-[#1b211b] text-gray-300 placeholder-gray-500 rounded-md px-5 py-4 text-lg font-mono focus:outline-none focus:ring-1 focus:ring-[#8ced8c] transition-shadow border border-transparent" placeholder="87ehHe9kf9eju09hHe80" type="text"/>

<div className="w-full bg-[#162716] rounded-md mt-5 border border-[#8ced8c]/10 px-5 py-4 flex items-center gap-4">

<div className="relative w-8 h-8 flex-none flex justify-center items-center text-[#8ced8c]" id="mosaic-loader">
<iconify-icon height="28" icon="solar:ticket-linear" width="28"></iconify-icon>
</div>

<span className="text-lg text-white">
                    Use code <span className="text-[#8ced8c] font-mono">ALPHA</span> for exclusive Alpha access
                </span>
</div>

<button className="w-full bg-[#8ced8c] bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.08)_2px,rgba(0,0,0,0.08)_4px)] text-black font-medium text-xl py-4 rounded-md mt-6 hover:opacity-90 transition-opacity active:scale-[0.99] flex justify-center items-center">
                Verify
            </button>

<p className="text-center text-lg text-gray-400 mt-8">
                Don't have a code? 
                <a className="text-[#8ced8c] hover:underline ml-1" href="#">Join the Waitlist</a>
</p>
</div>
</main>



    </>
  );
}
