import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // Flashlight Effect
            const cards = document.querySelectorAll('.card-flashlight');
            
            cards.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                });
            });

            // Parallax Effect
            const parallaxLayers = document.querySelectorAll('.parallax-layer');
            let ticking = false;

            function updateParallax() {
                parallaxLayers.forEach(layer => {
                    const speed = parseFloat(layer.getAttribute('data-parallax-speed')) || 0.1;
                    const parent = layer.parentElement;
                    const rect = parent.getBoundingClientRect();
                    const viewportCenter = window.innerHeight / 2;
                    const elementCenter = rect.top + (rect.height / 2);
                    
                    // Render parallax only if the element is roughly visible in the viewport
                    if (rect.top < window.innerHeight && rect.bottom > 0) {
                        const distanceFromCenter = elementCenter - viewportCenter;
                        const yPos = distanceFromCenter * speed;
                        layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    }
                });
                ticking = false;
            }

            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(updateParallax);
                    ticking = true;
                }
            });
            
            // Initial render
            updateParallax();
        });

        // WebGL Image Reveal Setup
        (function() {
            const vsSource = `
                attribute vec2 aPosition;
                varying vec2 vUv;
                void main() {
                    vUv = aPosition * 0.5 + 0.5;
                    gl_Position = vec4(aPosition, 0.0, 1.0);
                }
            `;

            const fsSource = `
                precision highp float;
                varying vec2 vUv;
                uniform sampler2D uImage;
                uniform float uProgress;

                void main() {
                    // 4 Column logic
                    float cols = 4.0;
                    float colIndex = floor(vUv.x * cols);
                    
                    // Stagger animation timing per column
                    float stagger = 0.15;
                    float delay = colIndex * stagger;
                    
                    // Map global progress (0 -> 1) to localized column progress
                    float localProgress = clamp((uProgress * (1.0 + 3.0 * stagger) - delay), 0.0, 1.0);
                    
                    // Cubic Out Easing
                    float f = localProgress - 1.0;
                    float ease = f * f * f + 1.0;

                    // Reveal Mask: WebGL loads image textures flipped vertically by default
                    // So vUv.y = 1.0 is the top visual edge of the image.
                    // We animate the bottom edge of our visible area downwards.
                    if (vUv.y < 1.0 - ease) {
                        discard;
                    }

                    gl_FragColor = texture2D(uImage, vUv);
                }
            `;

            function initWebGLImage(originalImg) {
                if (originalImg.dataset.webglInit) return;
                originalImg.dataset.webglInit = "true";

                // Preload image via JS to handle CORS cleanly before binding to WebGL
                const img = new Image();
                img.crossOrigin = "anonymous";
                
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    // Setting internal resolution to match image bounds
                    canvas.width = img.naturalWidth;
                    canvas.height = img.naturalHeight;
                    
                    // Inherit all Tailwind classes and inline styles (e.g. object-fit, mix-blend, mask)
                    canvas.className = originalImg.className;
                    canvas.style.cssText = originalImg.style.cssText;
                    
                    originalImg.parentNode.insertBefore(canvas, originalImg);
                    originalImg.style.display = 'none'; // Visually hide the original DOM element

                    const gl = canvas.getContext('webgl', { alpha: true, premultipliedAlpha: false });
                    if (!gl) return;

                    // Shader Compilation
                    const compileShader = (type, source) => {
                        const shader = gl.createShader(type);
                        gl.shaderSource(shader, source);
                        gl.compileShader(shader);
                        return shader;
                    };

                    const program = gl.createProgram();
                    gl.attachShader(program, compileShader(gl.VERTEX_SHADER, vsSource));
                    gl.attachShader(program, compileShader(gl.FRAGMENT_SHADER, fsSource));
                    gl.linkProgram(program);
                    gl.useProgram(program);

                    // Setup Full-Screen Quad Buffer
                    const positionBuffer = gl.createBuffer();
                    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
                    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                        -1, -1,  1, -1, -1,  1,
                        -1,  1,  1, -1,  1,  1
                    ]), gl.STATIC_DRAW);

                    const positionLocation = gl.getAttribLocation(program, "aPosition");
                    gl.enableVertexAttribArray(positionLocation);
                    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

                    // Setup Texture Layer
                    const texture = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_2D, texture);
                    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

                    const uProgressLoc = gl.getUniformLocation(program, "uProgress");

                    let startTime = null;
                    const duration = 1200; // Animation duration in ms
                    let animating = false;

                    const render = (time) => {
                        if (!startTime) startTime = time;
                        let progress = (time - startTime) / duration;
                        if (progress > 1.0) progress = 1.0;
                        
                        gl.viewport(0, 0, canvas.width, canvas.height);
                        gl.clearColor(0, 0, 0, 0);
                        gl.clear(gl.COLOR_BUFFER_BIT);

                        gl.uniform1f(uProgressLoc, progress);
                        gl.drawArrays(gl.TRIANGLES, 0, 6);

                        if (progress < 1.0) {
                            requestAnimationFrame(render);
                        } else {
                            animating = false;
                        }
                    };

                    // Render initial empty state
                    gl.viewport(0, 0, canvas.width, canvas.height);
                    gl.clearColor(0, 0, 0, 0);
                    gl.clear(gl.COLOR_BUFFER_BIT);

                    // Intersection Observer to trigger when visible
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                if (!animating) {
                                    animating = true;
                                    startTime = null; // Reset timer
                                    requestAnimationFrame(render);
                                }
                                observer.unobserve(canvas);
                            }
                        });
                    }, { threshold: 0.1 });

                    observer.observe(canvas);
                };
                
                img.src = originalImg.src;
            }

            const images = document.querySelectorAll('img');
            images.forEach(initWebGLImage);
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div aria-hidden="true" className="hidden md:flex" data-ascii-dither-bg="" style={{position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', height: '100vh', zIndex: '0', pointerEvents: 'none', overflow: 'hidden', opacity: '0.5'}}></div>


<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
<div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div className="w-px h-full bg-current"></div>
<div className="w-px h-full bg-current hidden md:block"></div>
<div className="w-px h-full bg-current hidden lg:block"></div>
<div className="w-px h-full bg-current"></div>
</div>
</div>

<nav className="z-40 w-full pt-8 pb-8 absolute top-0">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="/">
<iconify-icon className="text-3xl transition-transform group-hover:scale-110" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xl tracking-tighter uppercase font-jakarta font-light">Aris</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
<a className="opacity-100 transition-opacity font-geist" href="/portfolio">Portfolio</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="/exhibitions">Exhibitions</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="/darkroom">Darkroom</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="/journal">Journal</a>
</div>
<div className="flex gap-4 md:gap-5 items-center">
<button className="hover:opacity-100 transition-opacity opacity-70 cursor-pointer" onclick="window.location.href='/search'" role="button">
<iconify-icon className="text-2xl" icon="solar:magnifer-bold-duotone"></iconify-icon>
</button>
<button className="hover:opacity-100 transition-opacity opacity-70 relative cursor-pointer" onclick="window.location.href='/shop'" role="button">
<iconify-icon className="text-2xl" height="24" icon="solar:bag-bold-duotone" style={{color: 'rgb(44, 40, 36)'}} width="24"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
</button>
<button aria-label="Toggle mobile menu" className="md:hidden hover:opacity-100 transition-opacity opacity-70 cursor-pointer ml-2 flex items-center justify-center" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" role="button">
<svg className="lucide lucide-menu" fill="none" height="26" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="26" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-[#F2EFEA] border-b border-black/10 shadow-2xl z-50" id="mobile-menu">
<div className="flex flex-col gap-6 px-6 py-8 font-geist">
<a className="text-3xl tracking-tight font-medium opacity-100 transition-opacity" href="/portfolio">Portfolio</a>
<a className="text-3xl tracking-tight font-medium hover:opacity-70 transition-opacity" href="/exhibitions">Exhibitions</a>
<a className="text-3xl tracking-tight font-medium hover:opacity-70 transition-opacity" href="/darkroom">Darkroom</a>
<a className="text-3xl tracking-tight font-medium hover:opacity-70 transition-opacity" href="/journal">Journal</a>
<div className="w-full h-px bg-black/10 my-2"></div>
<div className="flex gap-6 opacity-60">
<a className="text-sm font-medium tracking-tight uppercase hover:opacity-100 transition-opacity" href="#">Instagram</a>
<a className="text-sm font-medium tracking-tight uppercase hover:opacity-100 transition-opacity" href="#">Twitter</a>
</div>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 min-h-screen flex flex-col justify-between overflow-hidden section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-8">

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.1s'}}>C</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.15s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.2s'}}>p</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.25s'}}>t</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.3s'}}>u</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.35s'}}>r</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.4s'}}>i</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.45s'}}>n</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.5s'}}>g</span></span>
</span>

<span className="flex text-black/30">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.55s'}}>t</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.6s'}}>h</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.65s'}}>e</span></span>
</span>

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.7s'}}>L</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.75s'}}>i</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.8s'}}>g</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.85s'}}>h</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.9s'}}>t</span></span>
</span>
</h1>
<div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-90 mt-20 hidden md:flex overflow-hidden pointer-events-none">
<div className="parallax-layer w-full h-[120%] -top-[10%] relative flex items-center justify-center" data-parallax-speed="0.15">
<img alt="Vintage Medium Format Camera" className="w-full max-w-4xl object-contain h-[70vh] mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/240c3b22-d41b-4411-a0e2-0ba150349d52_3840w.webp" style={{maskImage: 'linear-gradient(black 70%, transparent 100%)'}}/>
</div>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
<div className="max-w-xs flex items-start gap-3">
<div className="relative mt-1 text-[#C48C56]">
<iconify-icon className="text-xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<div className="sonar-ring"></div>
</div>
<p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                        Documenting the profound interplay of light, shadow, and human emotion across diverse landscapes.
                    </p>
</div>
<div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
<p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                        Specializing in analog and digital mediums to craft timeless, cinematic narratives.
                    </p>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105" href="#">
<span className="font-geist">View Portfolio</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full border-t border-black/10 mt-16 pt-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm tracking-tight font-medium opacity-60">
<div className="flex items-center gap-3 font-geist"><span className="opacity-50">01</span> PORTRAITURE</div>
<div className="flex items-center gap-3 md:justify-center font-geist"><span className="opacity-50">02</span> EDITORIAL</div>
<div className="flex items-center gap-3 md:justify-end font-geist"><span className="opacity-50">03</span> FINE ART</div>
</div>
</div>
</section>

<section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-md relative z-10">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:nasa" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden sm:block" height="64" icon="simple-icons:spacex" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:uber" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:visa" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden md:block" height="64" icon="simple-icons:bose" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden lg:block" height="64" icon="simple-icons:discover" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:dji" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden sm:block" height="64" icon="simple-icons:sony" width="64"></iconify-icon>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center section-container group">
<div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover:bg-black/20 pointer-events-none"></div>
<div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-layer z-0" data-parallax-speed="0.15">
<img alt="Photographer silhouette in sweeping landscape" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3522fe85-bc52-4e1c-ab0a-2b52aa9ca0a4_3840w.webp"/>
</div>
<div className="relative z-20 text-center text-white max-w-3xl px-6">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight drop-shadow-lg font-jakarta font-light">
                Observing the quiet moments, anticipating the emotion before it unfolds.
            </h2>
<div className="flex items-center justify-center gap-3 text-lg opacity-90 drop-shadow-md">
<div className="w-8 h-[1px] bg-white/60"></div>
<p className="font-geist">Over 15 years of chasing the perfect light.</p>
<div className="w-8 h-[1px] bg-white/60"></div>
</div>
</div>
</section>

<section className="py-32 section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">The Art of<br/>Observation</h2>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium" href="#">
<span className="font-geist">View Archives</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
<div className="lg:col-span-4 max-w-sm">
<p className="text-sm font-medium tracking-tight opacity-50 mb-4 uppercase font-geist">( Method )</p>
<p className="text-xl leading-relaxed opacity-90 mb-8 font-jakarta font-light">
                        Every frame serves a narrative purpose. We strip away the superfluous, leaving only what actively contributes to the story. Light is measured for dynamic tension, ensuring emotion without aesthetic compromise.
                    </p>
<div className="relative inline-flex text-[#C48C56] mt-4">
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<div className="sonar-ring" style={{animationDelay: '1s'}}></div>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end">

<div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer">
<div className="card-content">
<div className="aspect-square rounded-lg overflow-hidden bg-black/5 mb-6 relative">
<img alt="Editorial Portrait" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/39023787-d88b-41fb-a0f1-920a6afaec68/800w.jpg"/>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="opacity-50 text-xs block mb-1 font-geist">01</span>
<p className="font-medium tracking-tight font-geist">Editorial Series Vol.1</p>
</div>
<span className="opacity-60 font-geist">240 Frames</span>
</div>
</div>
</div>

<div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer lg:-mt-24">
<div className="card-content">
<div className="aspect-[4/5] rounded-lg overflow-hidden bg-black/5 mb-6 relative">
<img alt="Urban Landscape Architecture" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df7a2dd9-504b-4462-9e25-8f9322d8a718_800w.webp"/>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="opacity-50 text-xs block mb-1 font-geist">02</span>
<p className="font-medium tracking-tight font-geist">Urban Geometry</p>
</div>
<span className="opacity-60 font-geist">850+ Frames</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 h-[70vh] w-full">
<div className="relative overflow-hidden group">
<div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-layer" data-parallax-speed="0.1">
<img alt="Darkroom abstract texture" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4597e05a-ba96-402e-84ec-525cc454779f_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-black/10 pointer-events-none z-10"></div>
</div>
<div className="relative overflow-hidden group">
<div className="absolute inset-0 w-full h-[120%] -top-[10%] parallax-layer" data-parallax-speed="0.15">
<img alt="Photographer in action" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/911b8b4e-f761-4dcd-a667-42f22a484592_1600w.webp"/>
</div>
<div className="absolute inset-0 bg-black/10 pointer-events-none z-10"></div>
<div className="absolute bottom-8 right-8 text-white/80 pointer-events-none z-20">
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone" style={{animation: 'spin 8s linear infinite'}}></iconify-icon>
</div>
</div>
</section>

<section className="bg-[#26221E] text-[#F2EFEA] py-32 section-container dark-section relative overflow-hidden">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 relative z-10">
<div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
<h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">Technical<br/>Mastery</h2>
<p className="text-xl tracking-tight opacity-50 font-jakarta font-light">ISO_400</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 items-center">

<div className="space-y-6 text-sm font-medium tracking-tight">
<p className="opacity-40 text-xs uppercase mb-8 font-geist">Selected Series</p>
<div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-40 text-xs w-6 font-geist">01</span>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Metropolitan Series</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-40 text-xs w-6 font-geist">02</span>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Nocturnal Light</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-40 text-xs w-6 font-geist">03</span>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Desert Monoliths</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-40 text-xs w-6 font-geist">04</span>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Studio Portraits</span>
</div>
<div className="flex items-center gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-40 text-xs w-6 font-geist">05</span>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Abstract Motion</span>
</div>
</div>

<div className="card-flashlight p-2 rounded-2xl h-[500px]">
<div className="card-content w-full h-full rounded-xl overflow-hidden relative">
<img alt="Camera lens macro detail" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/323d9f9e-26d3-4457-8d7d-8a78cdda94df_800w.webp"/>
</div>
</div>

<div className="space-y-6 text-sm font-medium tracking-tight text-right">
<p className="opacity-40 text-xs uppercase mb-8 font-geist">Equipment &amp; Process</p>
<div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Medium format digital sensors</span>
<iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">35mm &amp; 120mm analog film</span>
</div>
<div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Hand-printed silver gelatin</span>
</div>
<div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Archival pigment processing</span>
</div>
<div className="flex items-center justify-end gap-4 group cursor-pointer border-b border-white/5 pb-4 hover:border-white/30 transition-colors">
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Custom modified vintage lenses</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1714] text-[#F2EFEA] py-8 overflow-hidden marquee-mask relative z-10">
<div className="animate-marquee flex items-center gap-8 text-5xl md:text-7xl font-medium tracking-tighter whitespace-nowrap opacity-20">
<span className="font-jakarta font-light">VISUAL STORYTELLING</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">CINEMATIC FRAMING</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">ANALOG TECHNIQUES</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">VISUAL STORYTELLING</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">CINEMATIC FRAMING</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">ANALOG TECHNIQUES</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
</div>
</section>

<section className="py-32 section-container relative z-10">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-jakarta font-light">Commissioned<br/>Work</h2>
<p className="text-lg opacity-80 font-normal leading-relaxed mb-12 border-b border-black/10 pb-12 font-geist">
                    Available for worldwide commissions, bringing a distinct cinematic approach to editorial, commercial, and fine art projects.
                </p>
<div className="flex gap-8 items-start mb-12">
<iconify-icon className="text-6xl text-black/20 flex-shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
<div className="">
<p className="font-medium tracking-tight mb-4 text-sm uppercase opacity-50 font-geist">Pre-Production Protocols</p>
<ul className="space-y-3 text-base font-medium opacity-90 tracking-tight">
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Creative direction &amp; moodboarding
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Location scouting &amp; lighting design
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Talent casting &amp; styling integration
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Post-production &amp; archival delivery
                            </li>
</ul>
</div>
</div>
<div className="flex items-center gap-6 mb-8 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5">
<img alt="Photographer Portrait" className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight font-geist">"We chase the light until the frame feels inevitable."</p>
<p className="text-xs opacity-50 mt-1 uppercase tracking-wider font-geist">Elena R. — Lead Photographer</p>
</div>
</div>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium" href="#">
<span className="font-geist">Book Consultation</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="h-full min-h-[500px] relative rounded-2xl overflow-hidden card-flashlight" style={{-MouseX: '366.5px', -MouseY: '130.0078125px'}}>
<div className="card-content w-full h-full absolute inset-0">
<img alt="Studio Setup" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/29404967-a371-4caf-aff8-d708d47e16b3_1600w.webp"/>
</div>
</div>
</div>
</section>

<footer className="bg-[#26221E] text-[#F2EFEA] pt-24 pb-12 section-container dark-section border-t border-white/10 relative z-10">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<a className="flex items-start gap-2 group relative" href="#">
<span className="text-5xl md:text-7xl tracking-tighter uppercase leading-none font-jakarta font-light">Aris</span>
<div className="relative mt-2 text-[#C48C56]">
<iconify-icon className="text-3xl transition-transform group-hover:rotate-90 duration-500" icon="solar:asterisk-bold-duotone"></iconify-icon>
</div>
</a>
<div className="max-w-sm">
<p className="text-lg opacity-70 font-normal leading-relaxed font-geist">
                    We synthesize technical precision with raw human emotion. Every frame is captured using calibrated light and shadow to elevate visual storytelling and endure lifetimes.
                </p>
</div>
</div>
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-end gap-12 text-xs font-medium tracking-tight opacity-50 uppercase border-t border-white/10 pt-8">
<div className="flex gap-6">
<span className="font-geist">Network</span>
<a className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist" href="#">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> Instagram
                </a>
<a className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist" href="#">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> Twitter
                </a>
<a className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist" href="#">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> LinkedIn
                </a>
</div>
<div className="flex gap-8">
<span className="hidden md:inline font-geist">Index</span>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Series</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Equipment</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Prints</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Portal</a>
</div>
</div>
</footer>



    </>
  );
}
