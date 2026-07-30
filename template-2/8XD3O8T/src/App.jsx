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



        document.addEventListener('DOMContentLoaded', function() {
            const blocks = document.querySelectorAll('[draggable="true"]');
            const scriptArea = document.getElementById('script-area');
            const runButton = document.getElementById('run-button');
            const clearButton = document.getElementById('clear-button');
            const sprite = document.getElementById('sprite');
            const speechBubble = document.getElementById('speech-bubble');
            
            // Display elements
            const sizeValue = document.getElementById('size-value');
            const directionValue = document.getElementById('direction-value');
            const xPosition = document.getElementById('x-position');
            const yPosition = document.getElementById('y-position');
            
            // Initial sprite properties
            let spriteProps = {
                x: 150,
                y: 120,
                scale: 1,
                direction: 0,
                color: 'orange-400'
            };
            
            // Update display
            function updateDisplay() {
                xPosition.textContent = spriteProps.x;
                yPosition.textContent = spriteProps.y;
                sizeValue.textContent = Math.round(spriteProps.scale * 100) + '%';
                directionValue.textContent = spriteProps.direction + '°';
            }
            
            // Set up drag and drop
            blocks.forEach(block => {
                block.addEventListener('dragstart', function(e) {
                    e.dataTransfer.setData('text/plain', block.getAttribute('data-action'));
                });
            });
            
            scriptArea.addEventListener('dragover', function(e) {
                e.preventDefault();
            });
            
            scriptArea.addEventListener('drop', function(e) {
                e.preventDefault();
                const action = e.dataTransfer.getData('text/plain');
                const newBlock = document.createElement('div');
                
                // Style the block based on action type
                let blockClass = 'text-white p-2 rounded-md mb-2 ';
                
                if (action.startsWith('move') || action.startsWith('rotate')) {
                    blockClass += 'bg-blue-500';
                } else if (action === 'say' || action === 'grow' || action === 'shrink' || action === 'change-color') {
                    blockClass += 'bg-purple-500';
                } else {
                    blockClass += 'bg-amber-500';
                }
                
                newBlock.className = blockClass;
                newBlock.setAttribute('data-action', action);
                
                // Set the text content based on the action
                const blockTexts = {
                    'move-right': 'move 10 steps',
                    'move-left': 'move -10 steps',
                    'move-up': 'move up 10 steps',
                    'move-down': 'move down 10 steps',
                    'rotate-right': 'turn ↻ 15 degrees',
                    'rotate-left': 'turn ↺ 15 degrees',
                    'say': 'say "Hello!"',
                    'grow': 'grow',
                    'shrink': 'shrink',
                    'change-color': 'change color',
                    'reset': 'reset position'
                };
                
                newBlock.textContent = blockTexts[action] || action;
                
                scriptArea.appendChild(newBlock);
            });
            
            // Run the script
            runButton.addEventListener('click', function() {
                const blocks = scriptArea.querySelectorAll('[data-action]');
                
                // Skip the first block (When green flag clicked)
                let index = 1;
                
                function executeNextBlock() {
                    if (index < blocks.length) {
                        const block = blocks[index];
                        const action = block.getAttribute('data-action');
                        
                        // Highlight the current block
                        block.classList.add('ring-2', 'ring-yellow-400');
                        
                        // Execute the action
                        executeAction(action);
                        
                        // Remove highlight after a delay and move to next block
                        setTimeout(() => {
                            block.classList.remove('ring-2', 'ring-yellow-400');
                            index++;
                            executeNextBlock();
                        }, 500);
                    }
                }
                
                executeNextBlock();
            });
            
            // Execute a specific action
            function executeAction(action) {
                switch(action) {
                    case 'move-right':
                        spriteProps.x += 10;
                        break;
                    case 'move-left':
                        spriteProps.x -= 10;
                        break;
                    case 'move-up':
                        spriteProps.y -= 10;
                        break;
                    case 'move-down':
                        spriteProps.y += 10;
                        break;
                    case 'rotate-right':
                        spriteProps.direction = (spriteProps.direction + 15) % 360;
                        break;
                    case 'rotate-left':
                        spriteProps.direction = (spriteProps.direction - 15) % 360;
                        if (spriteProps.direction < 0) spriteProps.direction += 360;
                        break;
                    case 'say':
                        speechBubble.classList.remove('hidden');
                        setTimeout(() => {
                            speechBubble.classList.add('hidden');
                        }, 2000);
                        break;
                    case 'grow':
                        spriteProps.scale += 0.1;
                        break;
                    case 'shrink':
                        spriteProps.scale = Math.max(0.5, spriteProps.scale - 0.1);
                        break;
                    case 'change-color':
                        const colors = ['orange-400', 'blue-400', 'green-400', 'purple-400', 'red-400', 'yellow-400'];
                        const currentIndex = colors.indexOf(spriteProps.color);
                        const nextIndex = (currentIndex + 1) % colors.length;
                        spriteProps.color = colors[nextIndex];
                        
                        // Update sprite color
                        const headElement = sprite.querySelector('.sprite-cat .absolute:first-child');
                        const earElements = sprite.querySelectorAll('.sprite-cat .absolute:nth-child(2), .sprite-cat .absolute:nth-child(3)');
                        
                        if (headElement) {
                            // Remove old color class
                            headElement.className = headElement.className.replace(/bg-\w+-\d+/, `bg-${spriteProps.color}`);
                            
                            // Update ears
                            earElements.forEach(ear => {
                                ear.className = ear.className.replace(/bg-\w+-\d+/, `bg-${spriteProps.color}`);
                            });
                        }
                        break;
                    case 'reset':
                        spriteProps.x = 150;
                        spriteProps.y = 120;
                        spriteProps.scale = 1;
                        spriteProps.direction = 0;
                        speechBubble.classList.add('hidden');
                        break;
                }
                
                // Update sprite position and scale
                sprite.style.left = spriteProps.x + 'px';
                sprite.style.top = spriteProps.y + 'px';
                sprite.style.transform = `rotate(${spriteProps.direction}deg) scale(${spriteProps.scale})`;
                
                // Update display
                updateDisplay();
            }
            
            // Clear the script
            clearButton.addEventListener('click', function() {
                // Remove all blocks except the first one (When green flag clicked)
                const blocks = scriptArea.querySelectorAll('[data-action]');
                blocks.forEach((block, index) => {
                    if (index > 0) {
                        block.remove();
                    }
                });
                
                // Reset sprite
                spriteProps = {
                    x: 150,
                    y: 120,
                    scale: 1,
                    direction: 0,
                    color: 'orange-400'
                };
                
                sprite.style.left = spriteProps.x + 'px';
                sprite.style.top = spriteProps.y + 'px';
                sprite.style.transform = `rotate(${spriteProps.direction}deg) scale(${spriteProps.scale})`;
                speechBubble.classList.add('hidden');
                
                // Reset sprite color
                const headElement = sprite.querySelector('.sprite-cat .absolute:first-child');
                const earElements = sprite.querySelectorAll('.sprite-cat .absolute:nth-child(2), .sprite-cat .absolute:nth-child(3)');
                
                if (headElement) {
                    headElement.className = headElement.className.replace(/bg-\w+-\d+/, `bg-${spriteProps.color}`);
                    earElements.forEach(ear => {
                        ear.className = ear.className.replace(/bg-\w+-\d+/, `bg-${spriteProps.color}`);
                    });
                }
                
                // Update display
                updateDisplay();
            });
            
            // Initialize display
            updateDisplay();
        });
    
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
      
<div className="container mx-auto p-4">
<h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Scratch Demo</h1>

<div className="flex flex-col md:flex-row gap-4">

<div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4 text-blue-500">Blocks</h2>

<div className="mb-4">
<h3 className="font-bold text-blue-400 mb-2">Motion</h3>
<div className="space-y-2">
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="move-right" draggable="true">
                            move 10 steps
                        </div>
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="move-left" draggable="true">
                            move -10 steps
                        </div>
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="move-up" draggable="true">
                            move up 10 steps
                        </div>
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="move-down" draggable="true">
                            move down 10 steps
                        </div>
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="rotate-right" draggable="true">
                            turn ↻ 15 degrees
                        </div>
<div className="bg-blue-500 text-white p-2 rounded-md cursor-move" data-action="rotate-left" draggable="true">
                            turn ↺ 15 degrees
                        </div>
</div>
</div>

<div className="mb-4">
<h3 className="font-bold text-purple-400 mb-2">Looks</h3>
<div className="space-y-2">
<div className="bg-purple-500 text-white p-2 rounded-md cursor-move" data-action="say" draggable="true">
                            say "Hello!"
                        </div>
<div className="bg-purple-500 text-white p-2 rounded-md cursor-move" data-action="grow" draggable="true">
                            grow
                        </div>
<div className="bg-purple-500 text-white p-2 rounded-md cursor-move" data-action="shrink" draggable="true">
                            shrink
                        </div>
<div className="bg-purple-500 text-white p-2 rounded-md cursor-move" data-action="change-color" draggable="true">
                            change color
                        </div>
</div>
</div>

<div className="mb-4">
<h3 className="font-bold text-amber-400 mb-2">Control</h3>
<div className="space-y-2">
<div className="bg-amber-500 text-white p-2 rounded-md cursor-move" data-action="reset" draggable="true">
                            reset position
                        </div>
</div>
</div>
</div>

<div className="w-full md:w-1/3 bg-gray-100 p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4 text-gray-700">Script</h2>
<div className="min-h-[300px] border-2 border-dashed border-gray-300 p-4 rounded-md" id="script-area">
<div className="bg-green-500 text-white p-2 rounded-md mb-2">
                        When green flag clicked
                    </div>

</div>
<div className="mt-4 flex justify-center">
<button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center" id="run-button">
<svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" fillRule="evenodd"></path>
</svg>
                        Run
                    </button>
<button className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center" id="clear-button">
<svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" fillRule="evenodd"></path>
</svg>
                        Clear
                    </button>
</div>
</div>

<div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md">
<h2 className="text-xl font-bold mb-4 text-green-500">Stage</h2>
<div className="relative w-full h-[300px] bg-sky-200 rounded-md overflow-hidden border-2 border-gray-300" id="stage">
<div className="absolute" id="sprite" style={{left: `150px`, top: `120px`, transform: `rotate(0deg)`}}>

<div className="sprite-cat w-16 h-16 relative">

<div className="absolute w-14 h-14 bg-orange-400 rounded-full left-1 top-0"></div>

<div className="absolute w-4 h-4 bg-orange-400 rounded-full left-0 top-0 transform -translate-x-1 -translate-y-1"></div>
<div className="absolute w-4 h-4 bg-orange-400 rounded-full right-0 top-0 transform translate-x-1 -translate-y-1"></div>

<div className="absolute w-3 h-3 bg-white rounded-full left-4 top-4"></div>
<div className="absolute w-3 h-3 bg-white rounded-full right-4 top-4"></div>

<div className="absolute w-1.5 h-1.5 bg-black rounded-full left-5 top-5"></div>
<div className="absolute w-1.5 h-1.5 bg-black rounded-full right-5 top-5"></div>

<div className="absolute w-2 h-2 bg-pink-300 rounded-full left-1/2 top-7 transform -translate-x-1/2"></div>

<div className="absolute w-6 h-2 border-b-2 border-black rounded-b-lg left-1/2 top-9 transform -translate-x-1/2"></div>

<div className="absolute w-4 h-0.5 bg-gray-600 left-0 top-8"></div>
<div className="absolute w-4 h-0.5 bg-gray-600 left-0 top-9"></div>
<div className="absolute w-4 h-0.5 bg-gray-600 right-0 top-8 transform scale-x-[-1]"></div>
<div className="absolute w-4 h-0.5 bg-gray-600 right-0 top-9 transform scale-x-[-1]"></div>
</div>

<div className="hidden absolute -top-10 left-0 bg-white p-2 rounded-lg border border-gray-300 text-sm" id="speech-bubble">
                            Hello!
                        </div>
</div>
</div>

<div className="mt-4 bg-gray-100 p-3 rounded-md">
<h3 className="font-bold text-sm mb-2">Sprite Properties</h3>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-xs text-gray-600">Size:</label>
<div className="text-sm font-bold" id="size-value">100%</div>
</div>
<div>
<label className="text-xs text-gray-600">Direction:</label>
<div className="text-sm font-bold" id="direction-value">0°</div>
</div>
<div>
<label className="text-xs text-gray-600">X position:</label>
<div className="text-sm font-bold" id="x-position">150</div>
</div>
<div>
<label className="text-xs text-gray-600">Y position:</label>
<div className="text-sm font-bold" id="y-position">120</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
