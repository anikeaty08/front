import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'brown': {
                            500: '#8B4513',
                        }
                    }
                }
            }
        }
        
        const spranky = document.getElementById('spranky');
        const poopButton = document.getElementById('poopButton');
        const poop = document.getElementById('poop');
        const message = document.getElementById('message');
        const toilet = document.getElementById('toilet');
        
        let isOnToilet = false;
        let hasPooped = false;
        
        poopButton.addEventListener('click', () => {
            if (hasPooped) {
                resetSpranky();
                return;
            }
            
            if (!isOnToilet) {
                // Move to toilet
                spranky.style.bottom = '32px';
                spranky.style.left = '50%';
                spranky.style.top = 'auto';
                message.textContent = "Spranky is on the toilet!";
                isOnToilet = true;
                poopButton.textContent = "Make Spranky Poo-Poo";
            } else {
                // Do the business
                poop.classList.remove('hidden');
                setTimeout(() => {
                    poop.classList.add('hidden');
                    message.textContent = "Yay! Spranky made a poo-poo in the toilet!";
                    poopButton.textContent = "Reset Spranky";
                    hasPooped = true;
                    
                    // Show poop in toilet
                    const poopInToilet = document.createElement('div');
                    poopInToilet.className = "absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-brown-500 rounded-full";
                    toilet.appendChild(poopInToilet);
                    
                    // Happy reaction
                    spranky.classList.add('animate-bounce');
                }, 500);
            }
        });
        
        function resetSpranky() {
            spranky.style.bottom = 'auto';
            spranky.style.top = '10px';
            spranky.style.left = '50%';
            message.textContent = "";
            isOnToilet = false;
            hasPooped = false;
            poopButton.textContent = "Make Spranky Go Potty";
            spranky.classList.remove('animate-bounce');
            
            // Remove poop from toilet
            const poopInToilet = toilet.querySelector('div:not(:first-child):not(:nth-child(2)):not(:nth-child(3))');
            if (poopInToilet) {
                toilet.removeChild(poopInToilet);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6 relative">
<h1 className="text-2xl font-bold text-center mb-4 text-purple-600">Spranky's Bathroom Time</h1>
<div className="relative h-80 bg-blue-50 rounded-lg overflow-hidden border-2 border-gray-300">

<div className="absolute bottom-0 w-full h-24 bg-gray-200 flex justify-center">

<div className="absolute bottom-0 w-24 h-32" id="toilet">
<div className="absolute bottom-0 w-24 h-14 bg-white rounded-t-lg"></div>
<div className="absolute bottom-14 w-24 h-10 bg-white rounded-t-full"></div>
<div className="absolute bottom-8 left-8 w-8 h-8 bg-blue-100 rounded-full"></div>
</div>
</div>

<div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 cursor-pointer transition-all duration-300" id="spranky">
<div className="w-16 h-16 bg-yellow-400 rounded-full relative mx-auto">
<div className="absolute top-3 left-3 w-3 h-3 bg-black rounded-full"></div>
<div className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full"></div>
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-6 h-3 bg-black rounded-full"></div>
<div className="absolute -top-4 left-4 w-2 h-6 bg-yellow-400 transform -rotate-12"></div>
<div className="absolute -top-4 right-4 w-2 h-6 bg-yellow-400 transform rotate-12"></div>
</div>
<div className="w-6 h-6 mx-auto mt-1">
<div className="hidden w-6 h-6 bg-brown-500 rounded-full" id="poop"></div>
</div>
</div>
</div>
<div className="mt-4 flex justify-center">
<button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded" id="poopButton">
                Make Spranky Go Potty
            </button>
</div>
<div className="mt-3 text-center text-gray-700 h-6" id="message"></div>
</div>


    </>
  );
}
