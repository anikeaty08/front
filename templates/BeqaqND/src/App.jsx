import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function generateGradient() {
            const startColor = document.getElementById('startColor').value;
            const endColor = document.getElementById('endColor').value;
            const numColors = parseInt(document.getElementById('numColors').value);
            
            const gradientContainer = document.getElementById('gradientContainer');
            gradientContainer.innerHTML = '';
            
            for (let i = 0; i < numColors; i++) {
                const div = document.createElement('div');
                div.className = 'h-full';
                div.style.flex = '1';
                div.style.backgroundColor = interpolateColor(startColor, endColor, i / (numColors - 1));
                gradientContainer.appendChild(div);
            }
        }
        
        function interpolateColor(color1, color2, factor) {
            const r1 = parseInt(color1.substring(1, 3), 16);
            const g1 = parseInt(color1.substring(3, 5), 16);
            const b1 = parseInt(color1.substring(5, 7), 16);
            
            const r2 = parseInt(color2.substring(1, 3), 16);
            const g2 = parseInt(color2.substring(3, 5), 16);
            const b2 = parseInt(color2.substring(5, 7), 16);
            
            const r = Math.round(r1 + factor * (r2 - r1));
            const g = Math.round(g1 + factor * (g2 - g1));
            const b = Math.round(b1 + factor * (b2 - b1));
            
            return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        }
        
        function randomizeColors() {
            const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
            document.getElementById('startColor').value = randomColor();
            document.getElementById('endColor').value = randomColor();
            generateGradient();
        }
        
        function exportPalette() {
            const startColor = document.getElementById('startColor').value;
            const endColor = document.getElementById('endColor').value;
            const numColors = parseInt(document.getElementById('numColors').value);
            
            let colors = [];
            for (let i = 0; i < numColors; i++) {
                colors.push(interpolateColor(startColor, endColor, i / (numColors - 1)));
            }
            
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(colors));
            const downloadAnchorNode = document.createElement('a');
            downloadAnchorNode.setAttribute("href", dataStr);
            downloadAnchorNode.setAttribute("download", "colorup-palette.json");
            document.body.appendChild(downloadAnchorNode);
            downloadAnchorNode.click();
            downloadAnchorNode.remove();
        }
    


        // Initialize gradient on page load
        document.addEventListener('DOMContentLoaded', generateGradient);
        
        // Sync text inputs with color inputs
        document.getElementById('startColor').addEventListener('input', function() {
            document.getElementById('startColorText').value = this.value;
        });
        
        document.getElementById('endColor').addEventListener('input', function() {
            document.getElementById('endColorText').value = this.value;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
<h1 className="text-2xl font-bold text-center mb-2">Gradient Palette</h1>
<p className="text-gray-500 text-center mb-6">Create a gradient palette between two colors.</p>
<div className="w-full h-32 rounded-lg flex mb-6 overflow-hidden shadow-md" id="gradientContainer"></div>
<div className="flex flex-wrap items-center gap-4">
<div className="flex items-center">
<div className="w-8 h-8 rounded border border-gray-300 mr-2 overflow-hidden">
<input className="w-10 h-10 -ml-1 -mt-1 cursor-pointer" id="startColor" oninput="generateGradient()" type="color" value="#F5E6AD"/>
</div>
<input className="w-24 px-2 py-1 border border-gray-300 rounded" id="startColorText" oninput="document.getElementById('startColor').value = this.value; generateGradient()" type="text" value="#F5E6AD"/>
</div>
<div className="flex items-center">
<div className="w-8 h-8 rounded border border-gray-300 mr-2 overflow-hidden">
<input className="w-10 h-10 -ml-1 -mt-1 cursor-pointer" id="endColor" oninput="generateGradient()" type="color" value="#F13C77"/>
</div>
<input className="w-24 px-2 py-1 border border-gray-300 rounded" id="endColorText" oninput="document.getElementById('endColor').value = this.value; generateGradient()" type="text" value="#F13C77"/>
</div>
<div className="flex items-center">
<label className="mr-2 text-sm" htmlFor="numColors">Number of colors:</label>
<input className="w-16 px-2 py-1 border border-gray-300 rounded" id="numColors" max="20" min="2" oninput="generateGradient()" type="number" value="7"/>
</div>
<button className="px-4 py-1 border border-gray-300 rounded hover:bg-gray-100" onclick="randomizeColors()">
                Random
            </button>
<button className="ml-auto px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 flex items-center" onclick="exportPalette()">
                Export
                <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M19 14l-7 7m0 0l-7-7m7 7V3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>


    </>
  );
}
