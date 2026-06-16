import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Define SVG templates for face parts
        const eyesOptions = [
            // Option 1: Regular eyes
            `<g transform="translate(55, 65)">
                <circle cx="0" cy="0" r="12" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="6" fill="black"/>
            </g>
            <g transform="translate(145, 65)">
                <circle cx="0" cy="0" r="12" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="6" fill="black"/>
            </g>`,
            
            // Option 2: Sleepy eyes
            `<g transform="translate(55, 65)">
                <path d="M-12,0 Q0,-15 12,0" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </g>
            <g transform="translate(145, 65)">
                <path d="M-12,0 Q0,-15 12,0" fill="none" stroke="black" stroke-width="2" stroke-linecap="round"/>
            </g>`,
            
            // Option 3: Rectangle eyes
            `<g transform="translate(55, 65)">
                <rect x="-12" y="-5" width="24" height="10" rx="5" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="4" fill="black"/>
            </g>
            <g transform="translate(145, 65)">
                <rect x="-12" y="-5" width="24" height="10" rx="5" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="4" fill="black"/>
            </g>`,
            
            // Option 4: X eyes
            `<g transform="translate(55, 65)">
                <circle cx="0" cy="0" r="12" fill="white" stroke="black" stroke-width="2"/>
                <line x1="-8" y1="-8" x2="8" y2="8" stroke="black" stroke-width="2"/>
                <line x1="8" y1="-8" x2="-8" y2="8" stroke="black" stroke-width="2"/>
            </g>
            <g transform="translate(145, 65)">
                <circle cx="0" cy="0" r="12" fill="white" stroke="black" stroke-width="2"/>
                <line x1="-8" y1="-8" x2="8" y2="8" stroke="black" stroke-width="2"/>
                <line x1="8" y1="-8" x2="-8" y2="8" stroke="black" stroke-width="2"/>
            </g>`,
            
            // Option 5: Big eyes
            `<g transform="translate(55, 65)">
                <circle cx="0" cy="0" r="15" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="5" fill="black"/>
                <circle cx="6" cy="-5" r="3" fill="white"/>
            </g>
            <g transform="translate(145, 65)">
                <circle cx="0" cy="0" r="15" fill="white" stroke="black" stroke-width="2"/>
                <circle cx="0" cy="0" r="5" fill="black"/>
                <circle cx="6" cy="-5" r="3" fill="white"/>
            </g>`,
            
            // Option 6: Line eyes
            `<g transform="translate(55, 65)">
                <line x1="-12" y1="0" x2="12" y2="0" stroke="black" stroke-width="4" stroke-linecap="round"/>
            </g>
            <g transform="translate(145, 65)">
                <line x1="-12" y1="0" x2="12" y2="0" stroke="black" stroke-width="4" stroke-linecap="round"/>
            </g>`
        ];
        
        const noseOptions = [
            // Option 1: Triangle nose
            `<path d="M0,0 Q10,15 0,20 Q-10,15 0,0" fill="#FFA07A" stroke="black" stroke-width="1.5"/>`,
            
            // Option 2: Circle nose
            `<circle cx="0" cy="0" r="10" fill="#FFA07A" stroke="black" stroke-width="1.5"/>`,
            
            // Option 3: Rectangle nose
            `<rect x="-5" y="-10" width="10" height="20" rx="5" fill="#FFA07A" stroke="black" stroke-width="1.5"/>`,
            
            // Option 4: Triangle nose
            `<path d="M-10,-10 L10,-10 L0,10 Z" fill="#FFA07A" stroke="black" stroke-width="1.5"/>`,
            
            // Option 5: Line with ball nose
            `<line x1="0" y1="-15" x2="0" y2="5" stroke="black" stroke-width="2"/>
             <circle cx="0" cy="10" r="5" fill="#FFA07A" stroke="black" stroke-width="1.5"/>`,
            
            // Option 6: Curved line with dots
            `<path d="M-10,0 Q0,-15 10,0" fill="none" stroke="black" stroke-width="2"/>
             <circle cx="-10" cy="0" r="3" fill="#FFA07A" stroke="black" stroke-width="1"/>
             <circle cx="10" cy="0" r="3" fill="#FFA07A" stroke="black" stroke-width="1"/>`
        ];
        
        const mouthOptions = [
            // Option 1: Smile
            `<path d="M-30,0 Q0,20 30,0" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>`,
            
            // Option 2: Frown
            `<path d="M-30,0 Q0,-20 30,0" fill="none" stroke="black" stroke-width="3" stroke-linecap="round"/>`,
            
            // Option 3: Straight line with color
            `<rect x="-20" y="-5" width="40" height="10" rx="5" fill="#FF6B6B" stroke="black" stroke-width="1.5"/>`,
            
            // Option 4: Open mouth
            `<path d="M-25,0 Q0,20 25,0 Q0,40 -25,0" fill="#FF6B6B" stroke="black" stroke-width="1.5"/>`,
            
            // Option 5: Straight line
            `<path d="M-20,0 L20,0" stroke="black" stroke-width="3" stroke-linecap="round"/>`,
            
            // Option 6: Teeth
            `<path d="M-20,-5 L20,-5 L20,5 L-20,5 Z" fill="#FF6B6B" stroke="black" stroke-width="1.5"/>
             <line x1="-10" y1="-5" x2="-10" y2="5" stroke="black" stroke-width="1.5"/>
             <line x1="0" y1="-5" x2="0" y2="5" stroke="black" stroke-width="1.5"/>
             <line x1="10" y1="-5" x2="10" y2="5" stroke="black" stroke-width="1.5"/>`
        ];
        
        // Get elements
        const eyesElement = document.getElementById('eyes');
        const noseElement = document.getElementById('nose');
        const mouthElement = document.getElementById('mouth');
        const randomizeBtn = document.getElementById('randomize');
        
        // Function to update face parts
        function updateFacePart(partElement, options, optionIndex) {
            partElement.innerHTML = options[optionIndex];
            
            // Update the selected class on the UI options
            document.querySelectorAll(`[data-part="${partElement.id}"]`).forEach((el, i) => {
                if (i === optionIndex) {
                    el.classList.add('selected');
                } else {
                    el.classList.remove('selected');
                }
            });
        }
        
        // Add event listeners to part options
        document.querySelectorAll('.part-option').forEach(option => {
            option.addEventListener('click', () => {
                const part = option.getAttribute('data-part');
                const optionIndex = parseInt(option.getAttribute('data-option')) - 1;
                
                if (part === 'eyes') {
                    updateFacePart(eyesElement, eyesOptions, optionIndex);
                } else if (part === 'nose') {
                    updateFacePart(noseElement, noseOptions, optionIndex);
                } else if (part === 'mouth') {
                    updateFacePart(mouthElement, mouthOptions, optionIndex);
                }
            });
        });
        
        // Randomize function
        function randomize() {
            const randomEye = Math.floor(Math.random() * eyesOptions.length);
            const randomNose = Math.floor(Math.random() * noseOptions.length);
            const randomMouth = Math.floor(Math.random() * mouthOptions.length);
            
            updateFacePart(eyesElement, eyesOptions, randomEye);
            updateFacePart(noseElement, noseOptions, randomNose);
            updateFacePart(mouthElement, mouthOptions, randomMouth);
        }
        
        // Add event listener to randomize button
        randomizeBtn.addEventListener('click', randomize);
        
        // Start with a random face
        randomize();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-4xl mx-auto my-8 p-6 bg-white rounded-xl shadow-lg">
<h1 className="text-3xl font-bold text-center text-purple-600 mb-6">Silly Face Creator</h1>
<div className="flex flex-col md:flex-row gap-6">

<div className="md:w-1/2">
<div className="bg-yellow-200 w-64 h-64 mx-auto rounded-full relative mb-6" id="face-container">

<svg className="absolute" height="100%" viewbox="0 0 200 200" width="100%">

<g id="eyes" transform="translate(0, 10)">
<g id="left-eye" transform="translate(55, 65)">

<circle cx="0" cy="0" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<circle cx="0" cy="0" fill="black" r="6"></circle>
</g>
<g id="right-eye" transform="translate(145, 65)">

<circle cx="0" cy="0" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<circle cx="0" cy="0" fill="black" r="6"></circle>
</g>
</g>

<g id="nose" transform="translate(100, 100)">

<path d="M0,0 Q10,15 0,20 Q-10,15 0,0" fill="#FFA07A" stroke="black" strokeWidth="1.5"></path>
</g>

<g id="mouth" transform="translate(100, 140)">

<path d="M-30,0 Q0,20 30,0" fill="none" stroke="black" strokeLinecap="round" strokeWidth="3"></path>
</g>
</svg>
</div>
<button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105" id="randomize">
                    Randomize Face!
                </button>
</div>

<div className="md:w-1/2">
<div className="mb-6">
<h2 className="text-lg font-semibold text-purple-600 mb-2">Eyes</h2>
<div className="grid grid-cols-3 gap-4">

<div className="part-option bg-gray-100 p-2 rounded" data-option="1" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<circle cx="20" cy="20" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<circle cx="20" cy="20" fill="black" r="6"></circle>
<circle cx="60" cy="20" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<circle cx="60" cy="20" fill="black" r="6"></circle>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="2" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M8,20 Q20,5 32,20" fill="none" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
<path d="M48,20 Q60,5 72,20" fill="none" stroke="black" strokeLinecap="round" strokeWidth="2"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="3" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<rect fill="white" height="10" rx="5" stroke="black" strokeWidth="2" width="24" x="8" y="15"></rect>
<rect fill="white" height="10" rx="5" stroke="black" strokeWidth="2" width="24" x="48" y="15"></rect>
<circle cx="20" cy="20" fill="black" r="4"></circle>
<circle cx="60" cy="20" fill="black" r="4"></circle>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="4" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<circle cx="20" cy="20" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<circle cx="60" cy="20" fill="white" r="12" stroke="black" strokeWidth="2"></circle>
<line stroke="black" strokeWidth="2" x1="10" x2="30" y1="10" y2="30"></line>
<line stroke="black" strokeWidth="2" x1="30" x2="10" y1="10" y2="30"></line>
<line stroke="black" strokeWidth="2" x1="50" x2="70" y1="10" y2="30"></line>
<line stroke="black" strokeWidth="2" x1="70" x2="50" y1="10" y2="30"></line>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="5" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<circle cx="20" cy="20" fill="white" r="15" stroke="black" strokeWidth="2"></circle>
<circle cx="60" cy="20" fill="white" r="15" stroke="black" strokeWidth="2"></circle>
<circle cx="20" cy="20" fill="black" r="5"></circle>
<circle cx="60" cy="20" fill="black" r="5"></circle>
<circle cx="26" cy="15" fill="white" r="3"></circle>
<circle cx="66" cy="15" fill="white" r="3"></circle>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="6" data-part="eyes">
<svg height="40" viewbox="0 0 80 40" width="80">
<line stroke="black" strokeLinecap="round" strokeWidth="4" x1="8" x2="32" y1="20" y2="20"></line>
<line stroke="black" strokeLinecap="round" strokeWidth="4" x1="48" x2="72" y1="20" y2="20"></line>
</svg>
</div>
</div>
</div>
<div className="mb-6">
<h2 className="text-lg font-semibold text-purple-600 mb-2">Noses</h2>
<div className="grid grid-cols-3 gap-4">

<div className="part-option bg-gray-100 p-2 rounded" data-option="1" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M40,5 Q50,25 40,35 Q30,25 40,5" fill="#FFA07A" stroke="black" strokeWidth="1.5"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="2" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<circle cx="40" cy="20" fill="#FFA07A" r="10" stroke="black" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="3" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<rect fill="#FFA07A" height="20" rx="5" stroke="black" strokeWidth="1.5" width="10" x="35" y="10"></rect>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="4" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M30,10 L50,10 L40,30 Z" fill="#FFA07A" stroke="black" strokeWidth="1.5"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="5" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<line stroke="black" strokeWidth="2" x1="40" x2="40" y1="5" y2="25"></line>
<circle cx="40" cy="30" fill="#FFA07A" r="5" stroke="black" strokeWidth="1.5"></circle>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="6" data-part="nose">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M30,20 Q40,5 50,20" fill="none" stroke="black" strokeWidth="2"></path>
<circle cx="30" cy="20" fill="#FFA07A" r="3" stroke="black" strokeWidth="1"></circle>
<circle cx="50" cy="20" fill="#FFA07A" r="3" stroke="black" strokeWidth="1"></circle>
</svg>
</div>
</div>
</div>
<div className="mb-6">
<h2 className="text-lg font-semibold text-purple-600 mb-2">Mouths</h2>
<div className="grid grid-cols-3 gap-4">

<div className="part-option bg-gray-100 p-2 rounded" data-option="1" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M10,20 Q40,40 70,20" fill="none" stroke="black" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="2" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M10,30 Q40,10 70,30" fill="none" stroke="black" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="3" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<rect fill="#FF6B6B" height="10" rx="5" stroke="black" strokeWidth="1.5" width="40" x="20" y="15"></rect>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="4" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M15,20 Q40,40 65,20 Q40,60 15,20" fill="#FF6B6B" stroke="black" strokeWidth="1.5"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="5" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M20,20 L60,20" stroke="black" strokeLinecap="round" strokeWidth="3"></path>
</svg>
</div>

<div className="part-option bg-gray-100 p-2 rounded" data-option="6" data-part="mouth">
<svg height="40" viewbox="0 0 80 40" width="80">
<path d="M20,15 L60,15 L60,25 L20,25 Z" fill="#FF6B6B" stroke="black" strokeWidth="1.5"></path>
<line stroke="black" strokeWidth="1.5" x1="30" x2="30" y1="15" y2="25"></line>
<line stroke="black" strokeWidth="1.5" x1="40" x2="40" y1="15" y2="25"></line>
<line stroke="black" strokeWidth="1.5" x1="50" x2="50" y1="15" y2="25"></line>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
