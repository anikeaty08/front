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
      
<div aria-hidden="true" className="hidden md:flex" data-ascii-dither-bg="" style={{position: 'absolute', top: '0', left: '0', right: '0', bottom: 'auto', height: '100vh', zIndex: '0', pointerEvents: 'none', overflow: 'hidden', opacity: '0.5'}}></div>


<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
<div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div className="w-px h-full bg-current"></div>
<div className="w-px h-full bg-current hidden md:block"></div>
<div className="w-px h-full bg-current hidden lg:block"></div>
<div className="w-px h-full bg-current"></div>
</div>
</div>

<nav className="absolute top-0 w-full z-40 py-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-3xl transition-transform group-hover:scale-110" icon="solar:palette-linear"></iconify-icon>
<span className="text-xl tracking-tighter uppercase font-jakarta font-light">LoveArt</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Home</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Style Explorer</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Gallery</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Pricing</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:flex items-center justify-center bg-[#2C2824] text-[#F2EFEA] px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform font-geist shadow-sm" href="#">
                    Launch Studio
                </a>
<button className="md:hidden opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 min-h-screen flex flex-col justify-between overflow-hidden section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">
<h1 className="text-6xl md:text-8xl lg:text-[10rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-8">

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.1s'}}>G</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.15s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.2s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.25s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.3s'}}>e</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.35s'}}>r</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.4s'}}>y</span></span>
</span>

<span className="flex text-black/30">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.45s'}}>Q</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.5s'}}>u</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.55s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.6s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.65s'}}>i</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.7s'}}>t</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.75s'}}>y</span></span>
</span>

<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.8s'}}>A</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.85s'}}>r</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.9s'}}>t</span></span>
</span>
</h1>
<div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-90 mt-20 hidden md:flex">
<img alt="Abstract AI Art Masterpiece" className="w-full max-w-4xl object-cover h-[70vh] mix-blend-multiply rounded-3xl" src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{maskImage: 'linear-gradient(black 70%, transparent 100%)'}}/>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
<div className="max-w-xs flex items-start gap-3">
<div className="relative mt-1 text-[#C48C56]">
<iconify-icon className="text-xl" icon="solar:stars-bold-duotone"></iconify-icon>
<div className="sonar-ring"></div>
</div>
<p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                        Museum-grade artificial intelligence designed for those who demand aesthetic perfection without prompt engineering.
                    </p>
</div>
<div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
<p className="text-lg opacity-80 font-normal leading-relaxed font-geist">
                        Transform fleeting thoughts into breathtaking visual masterpieces in milliseconds.
                    </p>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105" href="#">
<span className="font-geist">Start Creating for Free</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="w-full border-t border-black/10 mt-16 pt-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm tracking-tight font-medium opacity-60">
<div className="flex items-center gap-3 font-geist"><span className="opacity-50">01</span> CHOOSE CANVAS</div>
<div className="flex items-center gap-3 md:justify-center font-geist"><span className="opacity-50">02</span> SELECT VIBE</div>
<div className="flex items-center gap-3 md:justify-end font-geist"><span className="opacity-50">03</span> MASTERPIECE OUTPUT</div>
</div>
</div>
</section>

<section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-md">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
<iconify-icon className="hover:opacity-100 transition-opacity" height="48" icon="simple-icons:adobe" width="48"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden sm:block" height="48" icon="simple-icons:figma" width="48"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="48" icon="simple-icons:framer" width="48"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:canva" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden md:block" height="64" icon="simple-icons:webflow" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden lg:block" height="64" icon="simple-icons:awwwards" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity" height="64" icon="simple-icons:behance" width="64"></iconify-icon>
<iconify-icon className="hover:opacity-100 transition-opacity hidden sm:block" height="48" icon="simple-icons:dribbble" width="48"></iconify-icon>
</div>
</section>

<section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center section-container group">
<div className="absolute inset-0 bg-black/30 z-10 transition-colors group-hover:bg-black/20"></div>
<img alt="Immersive abstract fluid art" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=3840&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 text-center text-white max-w-3xl px-6">
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 leading-tight drop-shadow-lg font-jakarta font-light">
                No Prompts Required. We translate your human emotion into exact digital brushstrokes.
            </h2>
<div className="flex items-center justify-center gap-3 text-lg opacity-90 drop-shadow-md">
<div className="w-8 h-[1px] bg-white/60"></div>
<p className="font-geist">Over 12.4 million masterpieces generated.</p>
<div className="w-8 h-[1px] bg-white/60"></div>
</div>
</div>
</section>

<section className="py-32 section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
<h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">The Creative<br/>Process</h2>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium" href="#">
<span className="font-geist">Explore Studio</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
<div className="lg:col-span-4 max-w-sm">
<p className="text-sm font-medium tracking-tight opacity-50 mb-4 uppercase font-geist">( Workflow )</p>
<p className="text-xl leading-relaxed opacity-90 mb-8 font-jakarta font-light">
                        Our proprietary engine strips away the complexity of traditional AI generation. No complex prompting required—just pure, unadulterated creative translation. Select your canvas, define the vibe, and watch your imagination materialize.
                    </p>
<div className="relative inline-flex text-[#C48C56] mt-4">
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<div className="sonar-ring" style={{animationDelay: '1s'}}></div>
</div>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-end">

<div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer">
<div className="card-content">
<div className="aspect-square rounded-lg overflow-hidden bg-black/5 mb-6 relative">
<img alt="Colorful abstract art representing canvas" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="opacity-50 text-xs block mb-1 font-geist">01</span>
<p className="font-medium tracking-tight font-geist">Choose Canvas &amp; Vibe</p>
</div>
<span className="opacity-60 font-geist">Portrait, Landscape, Square</span>
</div>
</div>
</div>

<div className="card-flashlight p-6 pb-8 flex flex-col group cursor-pointer lg:-mt-24">
<div className="card-content">
<div className="aspect-[4/5] rounded-lg overflow-hidden bg-black/5 mb-6 relative">
<img alt="Vibrant digital manipulation representing human prompts" className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-end text-sm">
<div>
<span className="opacity-50 text-xs block mb-1 font-geist">02</span>
<p className="font-medium tracking-tight font-geist">Human Prompts</p>
</div>
<span className="opacity-60 font-geist">Describe feelings, not parameters</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 h-[70vh] w-full">
<div className="relative overflow-hidden group">
<img alt="Hall of Fame Digital Art 1" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1634986666676-ec8fd927c23d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
</div>
<div className="relative overflow-hidden group">
<img alt="Hall of Fame Digital Art 2" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1633327666270-5cb0f91ceeb5?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
<div className="absolute bottom-8 right-8 text-white/80 pointer-events-none">
<iconify-icon className="text-3xl animate-spin-slow" icon="solar:stars-bold-duotone"></iconify-icon>
</div>
</div>
</section>

<section className="bg-[#26221E] text-[#F2EFEA] py-32 section-container dark-section relative overflow-hidden">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 relative z-10">
<div className="flex justify-between items-end mb-20 border-b border-white/10 pb-8">
<h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">Membership<br/>Tiers</h2>
<p className="text-xl tracking-tight opacity-50 font-jakarta font-light">PRICING_2026</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="card-flashlight p-8 rounded-2xl flex flex-col group cursor-pointer border border-white/5 bg-white/5">
<div className="card-content flex flex-col h-full">
<p className="opacity-40 text-xs uppercase mb-4 font-geist tracking-widest">Free</p>
<h3 className="text-4xl font-jakarta font-light mb-2">$0<span className="text-lg opacity-50">/mo</span></h3>
<p className="text-sm opacity-60 font-geist mb-10">Perfect for discovering your unique style.</p>
<div className="space-y-4 text-sm font-medium tracking-tight mt-auto">
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">25 Generations / Month</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Standard Resolution</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Personal License</span>
</div>
</div>
</div>
</div>

<div className="card-flashlight p-8 rounded-2xl flex flex-col group cursor-pointer border border-[#C48C56]/30 bg-[#C48C56]/5 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C48C56]"></div>
<div className="card-content flex flex-col h-full">
<p className="opacity-40 text-xs uppercase mb-4 font-geist tracking-widest text-[#C48C56]">Pro</p>
<h3 className="text-4xl font-jakarta font-light mb-2">$12<span className="text-lg opacity-50">/mo</span></h3>
<p className="text-sm opacity-60 font-geist mb-10">For independent creators and freelancers.</p>
<div className="space-y-4 text-sm font-medium tracking-tight mt-auto">
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-[#C48C56] text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="opacity-90 transition-opacity font-geist">Unlimited Generations</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-[#C48C56] text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="opacity-90 transition-opacity font-geist">4K Print-Ready Resolution</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-[#C48C56] text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="opacity-90 transition-opacity font-geist">Commercial License</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-[#C48C56] text-lg" icon="solar:check-circle-bold"></iconify-icon>
<span className="opacity-90 transition-opacity font-geist">Priority Render Queue</span>
</div>
</div>
</div>
</div>

<div className="card-flashlight p-8 rounded-2xl flex flex-col group cursor-pointer border border-white/5 bg-white/5">
<div className="card-content flex flex-col h-full">
<p className="opacity-40 text-xs uppercase mb-4 font-geist tracking-widest">Plus</p>
<h3 className="text-4xl font-jakarta font-light mb-2">$24<span className="text-lg opacity-50">/mo</span></h3>
<p className="text-sm opacity-60 font-geist mb-10">Built for agencies and heavy volume.</p>
<div className="space-y-4 text-sm font-medium tracking-tight mt-auto">
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Everything in Pro</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">API Access</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Custom Style Training</span>
</div>
<div className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-white/30 transition-colors">
<iconify-icon className="opacity-40 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span className="opacity-70 group-hover:opacity-100 transition-opacity font-geist">Dedicated Support</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1714] text-[#F2EFEA] py-8 overflow-hidden marquee-mask">
<div className="animate-marquee flex items-center gap-8 text-5xl md:text-7xl font-medium tracking-tighter whitespace-nowrap opacity-20">
<span className="font-jakarta font-light">GALLERY QUALITY ART</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">NO PROMPTS REQUIRED</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">INSTANT MASTERPIECE</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">GALLERY QUALITY ART</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">NO PROMPTS REQUIRED</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light">INSTANT MASTERPIECE</span>
<iconify-icon className="text-3xl" icon="solar:stars-bold-duotone"></iconify-icon>
</div>
</section>

<section className="py-32 section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-jakarta font-light">Creator<br/>Stories</h2>
<p className="text-lg opacity-80 font-normal leading-relaxed mb-12 border-b border-black/10 pb-12 font-geist">
                    Join thousands of digital artists and non-creatives who have discovered their inner visionary.
                </p>
<div className="flex gap-8 items-start mb-12">
<iconify-icon className="text-6xl text-black/20 flex-shrink-0" icon="solar:arrow-right-up-linear"></iconify-icon>
<div className="">
<p className="font-medium tracking-tight mb-4 text-sm uppercase opacity-50 font-geist">Platform Advantages</p>
<ul className="space-y-3 text-base font-medium opacity-90 tracking-tight">
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Zero technical skills required
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Used by top-tier creative agencies
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                Full commercial licenses included
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1.5 h-1.5 rounded-full border border-current"></span>
                                4K print-ready lossless exports
                            </li>
</ul>
</div>
</div>
<div className="flex items-center gap-6 mb-8 p-4 rounded-xl bg-white/40 backdrop-blur-sm border border-black/5">
<img alt="Sarah K." className="w-14 h-14 rounded-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium tracking-tight font-geist">"I used to spend hours tweaking parameters. Now I just type my mood and get gallery-worthy pieces instantly."</p>
<p className="text-xs opacity-50 mt-1 uppercase tracking-wider font-geist">Sarah K. — Digital Artist</p>
</div>
</div>
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium" href="#">
<span className="font-geist">Read More Stories</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="h-full min-h-[500px] relative rounded-2xl overflow-hidden card-flashlight" style={{-MouseX: '366.5px', -MouseY: '130.0078125px'}}>
<div className="card-content w-full h-full absolute inset-0">
<img alt="Artist in Studio" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-[#26221E] text-[#F2EFEA] pt-24 pb-12 section-container dark-section border-t border-white/10">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-start gap-12 mb-24">
<a className="flex items-start gap-2 group relative" href="#">
<span className="text-5xl md:text-7xl tracking-tighter uppercase leading-none font-jakarta font-light">LoveArt</span>
<div className="relative mt-2 text-[#C48C56]">
<iconify-icon className="text-3xl transition-transform group-hover:rotate-90 duration-500" icon="solar:stars-bold-duotone"></iconify-icon>
</div>
</a>
<div className="max-w-sm">
<p className="text-lg opacity-70 font-normal leading-relaxed font-geist">
                    We synthesize artificial intelligence with refined aesthetics. Every masterpiece is generated using highly calibrated models to elevate your imagination.
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
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> Behance
                </a>
<a className="hover:opacity-100 transition-opacity flex items-center gap-1 font-geist" href="#">
<iconify-icon className="text-base" icon="solar:arrow-right-up-linear"></iconify-icon> X
                </a>
</div>
<div className="flex gap-8">
<span className="hidden md:inline font-geist">© 2026 LoveArt.ai</span>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Terms of Service</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Privacy Policy</a>
<a className="hover:opacity-100 transition-opacity font-geist" href="#">Contact</a>
</div>
</div>
</footer>



    </>
  );
}
