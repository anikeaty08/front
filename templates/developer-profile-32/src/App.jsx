import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();

        // Flickering Grid Logic adapted to Vanilla JS
        (function() {
            const canvas = document.getElementById('flickering-grid');
            const container = document.getElementById('grid-container');
            const ctx = canvas.getContext('2d');

            // Config matches the requested style (subtle, dark mode compatible)
            const squareSize = 4;
            const gridGap = 6;
            const flickerChance = 0.3;
            const color = "rgb(80, 80, 80)"; // Slightly lighter gray for visibility on black
            const maxOpacity = 0.4;

            let cols = 0;
            let rows = 0;
            let squares = null;
            let dpr = 1;
            let animationFrameId;
            let lastTime = 0;
            
            // Helper to parse color
            function getRGB(c) {
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = tempCanvas.height = 1;
                const tempCtx = tempCanvas.getContext('2d');
                tempCtx.fillStyle = c;
                tempCtx.fillRect(0, 0, 1, 1);
                const [r, g, b] = tempCtx.getImageData(0, 0, 1, 1).data;
                return `rgba(${r}, ${g}, ${b},`;
            }
            
            const rgbPrefix = getRGB(color);

            function setupCanvas() {
                const width = container.clientWidth;
                const height = container.clientHeight;
                dpr = window.devicePixelRatio || 1;
                
                canvas.width = width * dpr;
                canvas.height = height * dpr;
                canvas.style.width = `${width}px`;
                canvas.style.height = `${height}px`;
                
                cols = Math.floor(width / (squareSize + gridGap));
                rows = Math.floor(height / (squareSize + gridGap));
                
                squares = new Float32Array(cols * rows);
                for (let i = 0; i < squares.length; i++) {
                    squares[i] = Math.random() * maxOpacity;
                }
            }

            function updateSquares(deltaTime) {
                for (let i = 0; i < squares.length; i++) {
                    if (Math.random() < flickerChance * deltaTime) {
                        squares[i] = Math.random() * maxOpacity;
                    }
                }
            }

            function drawGrid() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                // Optional: Transparent fill to ensure clean slate
                ctx.fillStyle = "transparent";
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < cols; i++) {
                    for (let j = 0; j < rows; j++) {
                        const opacity = squares[i * rows + j];
                        ctx.fillStyle = `${rgbPrefix}${opacity})`;
                        ctx.fillRect(
                            i * (squareSize + gridGap) * dpr,
                            j * (squareSize + gridGap) * dpr,
                            squareSize * dpr,
                            squareSize * dpr
                        );
                    }
                }
            }

            function animate(time) {
                const deltaTime = (time - lastTime) / 1000;
                lastTime = time;

                updateSquares(deltaTime);
                drawGrid();
                animationFrameId = requestAnimationFrame(animate);
            }

            // Init
            setupCanvas();
            animationFrameId = requestAnimationFrame(animate);

            // Resize Observer
            const resizeObserver = new ResizeObserver(() => {
                setupCanvas();
            });
            resizeObserver.observe(container);

        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="border-x min-h-screen bg-black max-w-2xl border-zinc-900 mr-auto ml-auto relative">

<header className="sticky z-50 flex bg-black/80 border-zinc-900/50 border-b pt-3 pr-4 pb-3 pl-4 top-0 backdrop-blur-md items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex flex-col">
<div className="flex items-center gap-1">
<span className="font-semibold text-lg tracking-tight">HV</span>
</div>
<span className="text-xs font-normal text-zinc-500"></span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2 hover:bg-zinc-900 rounded-full transition-colors">
<svg className="lucide lucide-search size-5 text-zinc-100" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</header>

<div className="relative h-48 w-full overflow-hidden border-b border-zinc-800">

<div className="absolute inset-0 w-full h-full bg-zinc-950" id="grid-container">
<canvas className="w-full h-full" height="238" id="flickering-grid" style={{width: '670px', height: '191px'}} width="837"></canvas>
</div>
</div>

<div className="px-4 relative">
<div className="flex justify-between items-start">

<div className="relative -mt-16">
<div className="size-32 rounded-full border-4 border-black bg-zinc-900 overflow-hidden shadow-xl relative z-10 group">



<img alt="Avatar" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://i.pinimg.com/736x/fd/a1/74/fda1746e8d9e0d2d9255788e368e25d1.jpg"/>
</div>
</div>

<div className="flex gap-2 pt-3 gap-x-2 gap-y-2 items-center">
<button className="size-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition-colors" title="Resume">
<svg className="lucide lucide-file-text size-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</button>
<button className="size-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition-colors" title="GitHub">
<svg className="lucide lucide-github size-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</button>
<button className="size-9 flex items-center justify-center rounded-full border border-zinc-700 text-zinc-100 hover:bg-zinc-900 transition-colors" title="LinkedIn">
<svg className="lucide lucide-linkedin size-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</button>
</div>
</div>

<div className="mt-3 space-y-3">
<div className="">
<div className="flex gap-1 gap-x-1 gap-y-1 items-center">
<h1 className="text-xl font-semibold text-white tracking-tight">Harsha Vardhan</h1>
</div>
<p className="text-sm font-normal text-zinc-500">[@Bey0ndV0ID]</p>
</div>
<div className="text-base font-normal leading-snug text-zinc-100">
<div className="flex flex-wrap gap-x-1 items-center">
<span className="">I'm a Full Stack Developer based in Vizag, India.
                        I build web apps with TypeScript, React.js, Node.js, and Express.js.</span>
</div>
</div>
</div>
</div>

<div className="mt-2 flex border-b border-zinc-800 overflow-x-auto no-scrollbar">
<button className="flex-1 py-3.5 text-sm font-medium text-white border-b-2 border-blue-500 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors">
                About Me
            </button>
<button className="flex-1 py-3.5 text-sm font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 transition-colors">
                Projects
            </button>
<button className="flex-1 py-3.5 text-sm font-medium text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50 transition-colors">
                Blogs

        </button>
</div>

<article className="p-4 border-b border-zinc-800 hover:bg-zinc-900/30 transition-colors cursor-pointer">
<div className="flex gap-3">

<div className="flex-1 min-w-0">



<div className="leading-relaxed whitespace-pre-wrap text-sm font-normal text-zinc-300 mb-5">Full Stack
                        Developer crafting scalable, pixel-perfect web experiences. I build comprehensive backend
                        systems and performant database architectures, actively coding in
                        <span className="inline-flex items-center align-sub gap-1 font-medium text-zinc-100"><svg className="lucide lucide-atom text-blue-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg> React</span>,
                        <span className="inline-flex items-center align-sub gap-1 font-medium text-zinc-100"><svg className="lucide lucide-server text-green-500" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg> Node.js</span>,
                        and
                        <span className="inline-flex items-center align-sub gap-1 font-medium text-zinc-100"><svg className="lucide lucide-database text-cyan-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> PostgreSQL</span>.
                    </div>

<div className="space-y-3">
<h4 className="text-[11px] font-semibold uppercase tracking-wider text-zinc-500 ml-0.5">Core Stack
                        </h4>
<div className="grid grid-cols-2 gap-2">

<div className="group flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default">
<div className="flex items-center justify-center p-1.5 rounded-md bg-blue-500/10 text-blue-400 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-atom size-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z">
</path>
<path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z">
</path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-200">React &amp; Next.js</span>
<span className="text-[10px] text-zinc-500">Frontend</span>
</div>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default">
<div className="flex items-center justify-center p-1.5 rounded-md bg-blue-600/10 text-blue-500 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-file-code-2 size-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4"></path>
<polyline points="14 2 14 8 20 8"></polyline>
<path d="m9 13-2 2 2 2"></path>
<path d="m13 13 2 2-2 2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-200">TypeScript</span>
<span className="text-[10px] text-zinc-500">Language</span>
</div>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default">
<div className="flex items-center justify-center p-1.5 rounded-md bg-green-500/10 text-green-500 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-server size-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-200">Node.js</span>
<span className="text-[10px] text-zinc-500">Backend</span>
</div>
</div>

<div className="group flex items-center gap-3 p-2.5 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 hover:border-zinc-700 transition-all cursor-default">
<div className="flex items-center justify-center p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 group-hover:scale-105 transition-transform">
<svg className="lucide lucide-layout-template size-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="7" rx="1" width="18" x="3" y="3"></rect>
<rect height="7" rx="1" width="9" x="3" y="14"></rect>
<rect height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-200">Tailwind</span>
<span className="text-[10px] text-zinc-500">Styling</span>
</div>
</div>
</div>
</div>
</div>
</div>
</article>
</main>



    </>
  );
}
