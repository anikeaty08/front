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
      

<nav className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16">
<div className="flex items-center">

<div className="flex-shrink-0 flex items-center">
<span className="text-blue-600 text-2xl font-bold">colorup</span>
</div>

<div className="hidden md:flex ml-6 items-center space-x-2 px-3 py-1 bg-gray-50 rounded-full">
<div className="bg-orange-400 p-1 rounded">
<svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xs text-gray-600">ColorAI: Generate palettes from any image</span>
<a className="text-xs text-blue-600 font-medium" href="#">Try It Free</a>
</div>
</div>

<div className="flex items-center space-x-4">
<a className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Tools</a>
<a className="text-pink-600 hover:text-pink-700 px-3 py-2 text-sm font-medium" href="#">Go Pro</a>
<div className="h-6 w-px bg-gray-200"></div>
<a className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium" href="#">Sign in</a>
<a className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium" href="#">Sign up</a>
</div>
</div>
</div>
</nav>

<div className="flex-grow flex flex-col items-center py-10 px-6">

<main className="w-full max-w-3xl">
<h1 className="text-3xl font-bold text-center text-black mb-2">Gradient Palette</h1>
<p className="text-gray-500 text-center mb-8">Create a gradient palette between two colors.</p>
<div className="w-full h-32 rounded-lg flex mb-8 overflow-hidden shadow-md" id="gradientContainer"></div>
<div className="flex flex-wrap items-center gap-4 mb-16">
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
</main>

<section className="w-full max-w-4xl mb-12">
<h2 className="text-2xl font-bold text-black mb-8">Trending palettes</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg overflow-hidden shadow-md">
<div className="flex h-24">
<div className="w-1/5 bg-purple-900"></div>
<div className="w-1/5 bg-purple-600"></div>
<div className="w-1/5 bg-purple-400"></div>
<div className="w-1/5 bg-pink-300"></div>
<div className="w-1/5 bg-orange-200"></div>
</div>
<div className="p-3 flex justify-between items-center">
<span className="text-sm text-gray-700 font-medium">Purple Sunset</span>
<div className="flex gap-3">
<button className="text-gray-400 hover:text-red-500">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="text-gray-400 hover:text-gray-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden shadow-md">
<div className="flex h-24">
<div className="w-1/5 bg-yellow-200"></div>
<div className="w-1/5 bg-yellow-300"></div>
<div className="w-1/5 bg-pink-200"></div>
<div className="w-1/5 bg-pink-400"></div>
<div className="w-1/5 bg-pink-600"></div>
</div>
<div className="p-3 flex justify-between items-center">
<span className="text-sm text-gray-700 font-medium">Sunny Rose</span>
<div className="flex gap-3">
<button className="text-gray-400 hover:text-red-500">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="text-gray-400 hover:text-gray-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden shadow-md">
<div className="flex h-24">
<div className="w-1/5 bg-amber-900"></div>
<div className="w-1/5 bg-amber-700"></div>
<div className="w-1/5 bg-amber-500"></div>
<div className="w-1/5 bg-amber-300"></div>
<div className="w-1/5 bg-amber-100"></div>
</div>
<div className="p-3 flex justify-between items-center">
<span className="text-sm text-gray-700 font-medium">Autumn Leaves</span>
<div className="flex gap-3">
<button className="text-gray-400 hover:text-red-500">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
<button className="text-gray-400 hover:text-gray-600">
<svg className="h-5 w-5" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
<div className="flex justify-center mt-8">
<button className="px-6 py-2.5 bg-white text-black border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                    Browse more gradient palettes
                </button>
</div>
</section>
</div>

<footer className="bg-gray-50 border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">Colorup</h3>
<p className="text-gray-600 text-sm">Create beautiful color palettes with ease. Perfect for designers, developers, and creatives.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Products</h3>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Color Generator</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Gradient Maker</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Color Contrast</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Image Extractor</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Blog</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Color Theory</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">API</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Extensions</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-2">
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">About</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Careers</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Privacy</a></li>
<li><a className="text-gray-600 hover:text-gray-900 text-sm" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-500 text-sm">© 2023 Colorup. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">GitHub</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path>
</svg>
</a>
<a className="text-gray-400 hover:text-gray-500" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewbox="0 0 24 24">
<path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path>
</svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
