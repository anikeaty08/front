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
            // Initialize Lucide Icons
            lucide.createIcons();

            gsap.registerPlugin(ScrollTrigger);

            // Staggered Text Reveal
            gsap.to(".word", {
                y: "0%",
                stagger: 0.15,
                duration: 1.2,
                ease: "power4.out",
                delay: 0.2,
                scrollTrigger: {
                    trigger: ".gsap-reveal",
                    start: "top 90%"
                }
            });

            // Fade Animations
            gsap.fromTo('.reveal-fade', 
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: '.gsap-reveal', start: 'top 85%' } }
            );

            // Dropping Lines
            const dropLines = document.querySelectorAll('.drop-line');
            dropLines.forEach((line, index) => {
                gsap.fromTo(line, 
                    { y: -100, opacity: 0 },
                    { y: 200, opacity: 1, duration: 2.0 + index, repeat: -1, ease: "linear", delay: index * 0.5 }
                );
            });
        });
    


        import { Renderer, Program, Mesh, Triangle, Vec2 } from 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/+esm';

        const vertex = `
            attribute vec2 position;
            void main(){gl_Position=vec4(position,0.0,1.0);}
        `;

        const fragment = `
            #ifdef GL_ES
            precision lowp float;
            #endif
            uniform vec2 uResolution;
            uniform float uTime; uniform float uHueShift; uniform float uNoise;
            uniform float uScan; uniform float uScanFreq; uniform float uWarp;
            vec4 buf[8]; float rand(vec2 c){return fract(sin(dot(c,vec2(12.9898,78.233)))*43758.5453);}
            mat3 rgb2yiq=mat3(0.299,0.587,0.114,0.596,-0.274,-0.322,0.211,-0.523,0.312);
            mat3 yiq2rgb=mat3(1.0,0.956,0.621,1.0,-0.272,-0.647,1.0,-1.106,1.703);
            vec3 hueShiftRGB(vec3 col,float deg){vec3 yiq=rgb2yiq*col;float rad=radians(deg);float cosh=cos(rad),sinh=sin(rad);vec3 yiqShift=vec3(yiq.x,yiq.y*cosh-yiq.z*sinh,yiq.y*sinh+yiq.z*cosh);return clamp(yiq2rgb*yiqShift,0.0,1.0);}
            vec4 sigmoid(vec4 x){return 1./(1.+exp(-x));}
            vec4 cppn(vec2 c,float i0,float i1,float i2){
                buf[6]=vec4(c.x,c.y,0.39+i0,0.36+i1); buf[7]=vec4(0.14+i2,length(c),0.,0.);
                buf[0]=sigmoid(mat4(6.5,-3.6,0.7,-1.1,2.4,3.1,1.2,0.06,-5.4,-6.1,1.8,-4.7,6.0,-5.5,-0.9,3.2)*buf[6]+mat4(0.8,-5.7,3.9,1.6,-0.2,0.5,-1.7,-5.3,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(0.2,1.1,-1.7,5.0));
                buf[1]=sigmoid(mat4(-3.3,-6.0,0.5,-4.4,0.8,1.7,5.6,1.6,2.4,-3.5,1.7,6.3,3.3,8.2,1.1,-1.1)*buf[6]+mat4(5.2,-13.0,0.0,15.8,2.9,3.1,-0.8,-1.6,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-5.9,-6.5,-0.8,1.5));
                buf[2]=sigmoid(mat4(-15.2,8.0,-2.4,-1.9,-5.9,4.3,2.6,1.2,-7.3,6.7,5.2,5.9,5.0,8.9,-1.7,-1.1)*buf[6]+mat4(-11.9,-11.6,6.1,11.2,2.1,-6.2,-1.7,-0.7,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-4.1,-3.2,-4.5,-3.6));
                buf[3]=sigmoid(mat4(3.1,-13.7,1.8,3.2,0.6,12.7,1.9,0.5,-0.0,4.4,1.4,1.8,5.0,13.0,3.3,-4.5)*buf[6]+mat4(-0.1,7.7,-3.1,4.7,0.6,3.7,-0.8,-0.3,0.,0.,0.,0.,0.,0.,0.,0.)*buf[7]+vec4(-1.1,-21.6,0.7,1.2));
                buf[0]=sigmoid(mat4(1.6,1.3,2.9,0.,-1.8,-1.4,-3.5,0.,-1.3,-1.0,-2.3,0.,0.2,0.2,0.4,0.)*buf[0]+mat4(-0.6,-0.5,-0.9,0.,0.1,0.1,0.1,0.,-2.9,-2.5,-4.9,0.,1.4,1.1,2.5,0.)*buf[1]+mat4(-1.2,-1.0,-2.1,0.,-0.7,-0.5,-1.4,0.,0.1,0.1,0.2,0.,0.9,0.8,1.2,0.)*buf[2]+mat4(-2.4,-1.9,-4.3,0.,-22.6,-18.0,-41.9,0.,0.6,0.5,1.1,0.,-1.5,-1.3,-2.6,0.)*buf[3]+vec4(-1.5,-3.6,0.2,0.));
                return vec4(buf[0].xyz,1.);
            }
            void main(){
                vec2 uv=(gl_FragCoord.xy/uResolution.xy)*2.-1.; uv.y*=-1.;
                uv+=uWarp*vec2(sin(uv.y*6.2+uTime*0.5),cos(uv.x*6.2+uTime*0.5))*0.05;
                vec4 col=cppn(uv,0.3*sin(0.8*uTime),0.3*sin(1.2*uTime),0.3*sin(0.9*uTime));
                col.rgb=hueShiftRGB(col.rgb,uHueShift);
                col.rgb*=2.5;
                col.rgb*=1.-(sin(gl_FragCoord.y*uScanFreq)*0.5+0.5)*uScan;
                col.rgb+=(rand(gl_FragCoord.xy+uTime)-0.5)*uNoise;
                gl_FragColor=vec4(clamp(col.rgb,0.,1.),1.);
            }
        `;

        const canvas = document.getElementById('darkveil-canvas');
        const parent = canvas.parentElement;
        const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), canvas, alpha: true });
        const gl = renderer.gl;
        const geometry = new Triangle(gl);
        
        const program = new Program(gl, {
            vertex, fragment,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: new Vec2() },
                uHueShift: { value: 20 },
                uNoise: { value: 0.05 },
                uScan: { value: 0 },
                uScanFreq: { value: 0 },
                uWarp: { value: 2.5 }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });

        const resize = () => {
            const w = parent.clientWidth, h = parent.clientHeight;
            renderer.setSize(w, h);
            program.uniforms.uResolution.value.set(w, h);
        };
        window.addEventListener('resize', resize);
        resize();

        const start = performance.now();
        const loop = () => {
            program.uniforms.uTime.value = ((performance.now() - start) / 1000) * 2.5;
            renderer.render({ scene: mesh });
            requestAnimationFrame(loop);
        };
        loop();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative z-10 w-full lg:max-w-[1440px] mx-auto flex flex-col min-h-screen lg:border-x border-white/10 bg-black/20 backdrop-blur-[2px] lg:px-8 lg:py-8">

<div className="hidden lg:block absolute -top-1 -left-1 w-2 h-2 border border-white/20 bg-[#030303] z-50"></div>
<div className="hidden lg:block absolute -top-1 -right-1 w-2 h-2 border border-white/20 bg-[#030303] z-50"></div>
<div className="hidden lg:block absolute -bottom-1 -left-1 w-2 h-2 border border-white/20 bg-[#030303] z-50"></div>
<div className="hidden lg:block absolute -bottom-1 -right-1 w-2 h-2 border border-white/20 bg-[#030303] z-50"></div>

<div className="flex-1 relative lg:rounded-[2rem] overflow-hidden flex flex-col shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-0 lg:p-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent z-10">

<div className="absolute inset-0 lg:inset-[1px] bg-[#09090b]/90 backdrop-blur-xl lg:rounded-[calc(2rem-1px)] z-0"></div>

<div className="absolute inset-0 lg:inset-[1px] z-0 overflow-hidden lg:rounded-[calc(2rem-1px)]">
<canvas className="w-full h-full opacity-100 mix-blend-screen pointer-events-none" height="9386" id="darkveil-canvas" style={{width: '1372px', height: '4693px'}} width="2744"></canvas>
</div>

<div className="absolute left-1/2 top-[55%] -translate-x-1/2 w-[300px] h-[300px] pointer-events-none z-0">
<div className="drop-line absolute left-[35%] top-0 w-[1px] h-32" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.3), transparent)', opacity: '0'}}></div>
<div className="drop-line absolute left-[50%] top-10 w-[1px] h-48" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.6), transparent)', opacity: '0'}}></div>
<div className="drop-line absolute left-[65%] top-4 w-[1px] h-24" style={{background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25), transparent)', opacity: '0'}}></div>
</div>

<div className="relative z-10 flex flex-col h-full w-full px-5 py-8 md:px-10 md:py-10 flex-1">

<nav className="flex items-center justify-between w-full reveal-fade">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
<iconify-icon className="text-black text-xl" icon="solar:infinity-bold-duotone"></iconify-icon>
</div>
</div>

<div className="hidden lg:block p-[1px] bg-gradient-to-br from-white/20 to-white/5 rounded-full shadow-lg">
<div className="flex items-center rounded-full bg-[#111]/80 backdrop-blur-md px-1.5 py-1.5">
<div className="flex items-center px-4 gap-6 text-sm font-light text-gray-400">
<a className="text-white" href="#">Systems</a>
<a className="hover:text-gray-200 transition-colors" href="#">Clusters</a>
<a className="hover:text-gray-200 transition-colors" href="#">Network</a>
<a className="hover:text-gray-200 transition-colors" href="#">Toolkit</a>
<a className="hover:text-gray-200 transition-colors" href="#">Tokenomics</a>
</div>
<div className="w-px h-4 bg-white/10 mx-2"></div>
<a className="flex items-center gap-1.5 text-sm font-light text-gray-300 hover:text-white transition-colors px-3" href="#">
                                Console <iconify-icon className="text-sm" icon="solar:arrow-up-right-bold-duotone"></iconify-icon>
</a>
<div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center ml-1">
<iconify-icon className="text-white text-sm" icon="solar:shield-check-bold-duotone"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-light text-gray-300 hover:text-white transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:user-bold-duotone"></iconify-icon>
                            Sign In
                        </a>
<button className="lg:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-bold-duotone"></iconify-icon>
</button>
</div>
</nav>

<main className="flex-1 flex flex-col text-center w-full mt-16 relative items-center justify-center md:mt-32">

<div className="absolute hidden lg:flex items-center gap-3 top-[15%] left-[8%] group cursor-default">
<div className="p-[1px] rounded-full bg-gradient-to-br from-white/30 to-white/5 shadow-lg">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#111]/80 backdrop-blur-md z-10">
<iconify-icon className="text-white text-sm" icon="solar:cpu-bold-duotone"></iconify-icon>
</div>
</div>
<div className="w-12 h-px bg-gradient-to-r from-white/30 to-transparent"></div>
<div className="text-left translate-y-[-2px]">
<div className="text-sm font-light text-gray-200 flex items-center gap-1.5"><span className="w-1 h-1 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span> Edge Sync</div>
<div className="text-xs text-gray-500 mt-0.5 tracking-wider font-mono">1.42 ms</div>
</div>
</div>
<div className="absolute hidden lg:flex flex-row-reverse items-center gap-3 top-[22%] right-[10%] group cursor-default">
<div className="p-[1px] rounded-full bg-gradient-to-bl from-white/30 to-white/5 shadow-lg">
<div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#111]/80 backdrop-blur-md z-10">
<iconify-icon className="text-white text-sm" icon="solar:database-bold-duotone"></iconify-icon>
</div>
</div>
<div className="w-10 h-px bg-gradient-to-l from-white/30 to-transparent"></div>
<div className="text-right translate-y-[-2px]">
<div className="text-sm font-light text-gray-200 flex items-center justify-end gap-1.5">Validation <span className="w-1 h-1 rounded-full bg-white/60"></span></div>
<div className="text-xs text-gray-500 mt-0.5 tracking-wider font-mono">v8.2.0</div>
</div>
</div>

<div className="text-sm font-light tracking-widest text-gray-500 mb-6 flex items-center gap-2 reveal-fade">
<span>01</span><div className="w-6 h-px bg-gray-600"></div><span className="">CONCEPT</span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto leading-[1.05] drop-shadow-2xl tracking-tight font-extralight text-white gsap-reveal" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
<span className="overflow-hidden inline-flex pb-2"><span className="translate-y-[110%] word inline-block will-change-transform">Decentralized</span></span><br/>
<span className="overflow-hidden inline-flex pb-2 lg:-ml-2"><span className="translate-y-[110%] word inline-block will-change-transform">Planetary</span></span>
<span className="overflow-hidden inline-flex pb-2"><span className="translate-y-[110%] word inline-block will-change-transform">Infrastructure</span></span>
</h1>

<p className="text-base md:text-lg text-gray-400 font-extralight max-w-xl mx-auto mb-10 leading-relaxed reveal-fade">
                        Enabling forward-thinking developers to deploy, manage, and scale edge networks with sub-millisecond latency across the globe.
                    </p>

<div className="flex flex-wrap justify-center items-center gap-4 reveal-fade">
<a className="px-6 py-3 bg-white text-black rounded-full text-base font-normal hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]" href="#">
                            Deploy Clusters <span className="ml-1 opacity-60">↗</span>
</a>
<div className="p-[1px] rounded-full bg-gradient-to-br from-white/20 to-white/5 hover:opacity-80 transition-opacity">
<a className="block px-6 py-3 text-white rounded-full text-base font-light bg-[#111]/60 backdrop-blur-md" href="#">
                                Explore Documentation
                            </a>
</div>
</div>
</main>

<footer className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-8 md:gap-0 mt-20 md:mt-0 reveal-fade">
<div className="flex flex-col items-center md:items-start gap-3">
<div className="text-sm font-light tracking-widest text-gray-500 flex items-center gap-2">
<span>02</span><div className="w-6 h-px bg-gray-600"></div><span>ARCHITECTURE</span>
</div>
<div className="flex items-center gap-3 rounded-full pl-1 pr-4 py-1 p-[1px] bg-gradient-to-b from-white/20 to-white/5 bg-[#111]/40 backdrop-blur-md w-max shadow-sm">
<div className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center">
<iconify-icon className="text-xs" icon="solar:arrow-down-bold-duotone"></iconify-icon>
</div>
<span className="text-xs font-light text-gray-400 tracking-widest uppercase">View Topography</span>
</div>
</div>
<div className="flex flex-col items-center md:items-end gap-2">
<span className="text-xs font-light text-gray-400 tracking-widest uppercase">Active Nodes</span>
<div className="flex gap-1.5">
<div className="w-6 h-0.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.6)]"></div>
<div className="w-4 h-0.5 rounded-full bg-white/20"></div>
<div className="w-4 h-0.5 rounded-full bg-white/20"></div>
<div className="w-4 h-0.5 rounded-full bg-white/20"></div>
</div>
</div>
</footer>
</div>

<div className="flex flex-col w-full z-10 pt-24 pb-12 relative items-center">
<div className="text-sm font-light tracking-widest text-gray-500 mb-8 flex items-center gap-2 reveal-fade">
<span>03</span><div className="w-6 h-px bg-gray-600"></div><span className="">INTEGRATIONS</span>
</div>
<div className="flex justify-center items-center gap-8 md:gap-14 opacity-50 grayscale flex-wrap px-6 reveal-fade w-full max-w-5xl">
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:vercel"></iconify-icon>
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:stripe"></iconify-icon>
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:supabase"></iconify-icon>
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:github"></iconify-icon>
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:cloudflare"></iconify-icon>
<iconify-icon className="text-3xl md:text-4xl text-white hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:prisma"></iconify-icon>
</div>
</div>

<section className="z-10 reveal-fade w-full max-w-[1200px] mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<style>
        @keyframes typing {
            0% { max-width: 0; opacity: 0; }
            1% { opacity: 1; }
            100% { max-width: 100%; opacity: 1; }
        }
        @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #10b981; }
        }
        .animate-type-1 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards; border-right: 2px solid transparent; }
        .animate-type-2 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 1s; border-right: 2px solid transparent; }
        .animate-type-3 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 2s; border-right: 2px solid transparent; }
        .animate-type-4 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 3s; border-right: 2px solid transparent; }
        .animate-type-5 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 4s; border-right: 2px solid transparent; }
        .animate-type-6 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 5s; border-right: 2px solid transparent; }
        .animate-type-7 { overflow: hidden; white-space: nowrap; max-width: 0; opacity: 0; animation: typing 1s steps(30, end) forwards 6s; border-right: 2px solid #10b981; animation: typing 1s steps(30, end) forwards 6s, blink-caret .75s step-end infinite 7s; }

        @keyframes reverse-spin {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        .animate-reverse-spin {
            animation: reverse-spin 20s linear infinite;
        }

        @keyframes sonar-ripple {
            0% { transform: scale(0.5); opacity: 1; border-width: 2px; }
            100% { transform: scale(2.5); opacity: 0; border-width: 1px; }
        }
        .animate-sonar {
            animation: sonar-ripple 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes flashlight-move {
            0% { background-position: 0% 0%; }
            50% { background-position: 100% 100%; }
            100% { background-position: 0% 0%; }
        }
        .flashlight-bg {
            background: radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 50%);
            background-size: 200% 200%;
            animation: flashlight-move 8s ease-in-out infinite;
        }
    </style>
<div className="w-full border-t border-x border-white/[0.08] flex flex-col relative bg-[#030303]">

<div className="grid grid-cols-1 lg:grid-cols-2 border-b border-white/[0.08]">
<div className="p-8 lg:p-14 lg:border-r border-white/[0.08] flex flex-col justify-end">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 leading-[1.1]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                    Infrastructure,<br/>Optimized by Intelligence.
                </h2>
<p className="text-base text-gray-400 font-extralight max-w-md">NovaCore is your gateway to building resilient, distributed, high-performance applications.</p>
</div>
<div className="p-8 lg:p-14 flex items-start border-t lg:border-t-0 border-white/[0.08]">
<p className="text-base text-gray-500 font-extralight max-w-[320px] leading-relaxed">
                    Autonomous node management with instant failover—redundancy built into every layer of your global mesh.
                </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 border-b border-white/[0.08]">

<div className="group relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col gap-8 h-full overflow-hidden">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 flashlight-bg"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-white/10 group-hover:bg-white/[0.01] transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 h-64 bg-[#080808] border border-white/[0.05] rounded-xl p-5 overflow-hidden flex flex-col shadow-inner">
<div className="flex text-xs font-mono leading-relaxed tracking-wider">
<div className="flex flex-col text-gray-700 text-right pr-4 select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span>
</div>
<div className="flex flex-col text-gray-400 w-full">
<div className="animate-type-1"><span className="text-gray-200">Mesh</span> <span className="text-emerald-400">"novaMesh"</span> {</div>
<div className="animate-type-2 pl-4">api_token = var.nova_auth_token</div>
<div className="animate-type-3 pl-4">region = var.target_region</div>
<div className="animate-type-4">}</div>
<div className="h-6"></div>
<div className="animate-type-5"><span className="text-gray-200">resource</span> <span className="text-emerald-400">"novacore_vpc"</span> <span className="text-emerald-400">"primary"</span> {</div>
<div className="animate-type-6 pl-4"><span className="text-gray-600"># Low-latency peering enabled</span></div>
<div className="animate-type-7">}</div>
</div>
</div>
</div>
<div className="mt-auto flex flex-col gap-2 relative z-10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-200" data-lucide="bot" strokeWidth="1.5"></i>
<h3 className="text-xl font-normal tracking-tight text-white">Provision Nodes</h3>
</div>
<p className="text-base text-gray-500 font-extralight leading-relaxed">Automate global deployments in under 120ms.</p>
</div>
</div>

<div className="group relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col gap-8 h-full overflow-hidden">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 flashlight-bg"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-white/10 group-hover:bg-white/[0.01] transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 h-64 w-full flex items-center justify-center overflow-hidden">
<div className="relative w-[180px] h-[180px]">

<div className="absolute w-[160px] h-[160px] rounded-full border border-dashed border-white/10 z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

<div className="absolute w-full h-full animate-[spin_20s_linear_infinite] z-10">
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-shield w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg></div>
</div>
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-zap w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg></div>
</div>
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-activity w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg></div>
</div>
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-refresh-cw w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg></div>
</div>
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-layers w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg></div>
</div>
<div className="absolute top-1/2 left-1/2 -mt-5 -ml-5">
<div className="w-10 h-10 rounded-full bg-[#080808] border border-white/10 flex items-center justify-center shadow-lg animate-reverse-spin"><svg className="lucide lucide-network w-4 h-4 text-gray-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 z-20 flex items-center justify-center">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-pink-500 to-orange-500 p-[2px] shadow-[0_0_15px_rgba(236,72,153,0.4)]">
<div className="w-full h-full bg-[#030303] rounded-full"></div>
</div>
<div className="absolute flex items-center justify-center w-6 h-6 bg-gradient-to-tr from-blue-500 via-pink-500 to-orange-500 rounded-full drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]">
<svg className="lucide lucide-plus w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
<div className="mt-auto flex flex-col gap-2 relative z-10">
<div className="flex items-center gap-3">
<svg aria-hidden="true" className="lucide lucide-globe w-5 h-5 text-gray-200" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h3 className="text-xl font-normal tracking-tight text-white">Smart Routing</h3>
</div>
<p className="text-base text-gray-500 font-extralight leading-relaxed">Dynamic traffic shaping based on real-time latency metrics.</p>
</div>
</div>

<div className="group relative p-8 lg:p-10 flex flex-col gap-8 h-full overflow-hidden">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 flashlight-bg"></div>
<div className="absolute inset-0 border border-transparent group-hover:border-white/10 group-hover:bg-white/[0.01] transition-all duration-500 pointer-events-none z-0"></div>
<div className="relative z-10 h-64 w-full flex flex-col justify-between">
<div className="relative w-full h-32 flex items-center justify-center mt-2">


<div className="absolute w-[80px] h-[80px] rounded-full border border-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-sonar opacity-0 pointer-events-none"></div>
<div className="absolute w-[80px] h-[80px] rounded-full border border-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-sonar opacity-0 pointer-events-none" style={{animationDelay: '1.33s'}}></div>
<div className="absolute w-[80px] h-[80px] rounded-full border border-orange-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-sonar opacity-0 pointer-events-none" style={{animationDelay: '2.66s'}}></div>
</div>
<div className="flex flex-col gap-2 w-full px-2">
<div className="w-full bg-[#080808] border border-white/[0.08] rounded p-2.5 flex items-center gap-2 text-xs font-mono shadow-sm">
<span className="text-emerald-400">add</span><span className="text-gray-400">`novacore_vpc_peering`</span>
</div>
<div className="w-[95%] mx-auto bg-[#080808] border border-white/[0.04] rounded p-2.5 flex items-center gap-2 text-xs font-mono opacity-60">
<span className="text-gray-500">resource `novacore_iam_group` "ops" {</span>
</div>
<div className="w-[90%] mx-auto bg-[#080808] border border-white/[0.02] rounded p-2.5 flex items-center gap-2 text-[10px] font-mono opacity-30">
<span className="text-gray-600">Mesh `nova_id_240_81` "ops" {</span>
</div>
</div>
</div>
<div className="mt-auto flex flex-col gap-2 relative z-10">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-gray-200" data-lucide="bar-chart-2" strokeWidth="1.5"></i>
<h3 className="text-xl font-normal tracking-tight text-white">Global Clusters</h3>
</div>
<p className="text-base text-gray-500 font-extralight leading-relaxed">Scale compute resources across 45+ regions instantly.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 p-8 lg:p-14 gap-12 items-end border-b border-white/[0.08]">
<div className="lg:col-span-8 flex flex-col justify-end">
<p className="text-sm tracking-wide text-gray-500 font-normal mb-5">Global-scale distribution engine.</p>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight tracking-tight text-white leading-[1.3] max-w-3xl" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                    Turn your application into a NovaCore global mesh with zero-config endpoints, adaptive descriptions, and hosted execution.
                </h2>
</div>
<div className="lg:col-span-4 flex justify-start lg:justify-end w-full">
<div className="w-full max-w-[280px] h-32 bg-[#050b14] border border-white/[0.05] rounded-md overflow-hidden relative shadow-inner">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent"></div>
<div className="absolute -top-[10%] -right-[20%] w-[150%] h-[30px] bg-white rounded-full rotate-[-35deg] blur-[15px] opacity-70"></div>
<div className="absolute top-[20%] right-[10%] w-[80%] h-[10px] bg-blue-200 rounded-full rotate-[-35deg] blur-[4px] opacity-90"></div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 flex flex-col reveal-fade bg-[#030303] w-full pt-24 pr-6 pb-24 pl-6 relative items-center justify-center">
<div className="w-full max-w-[1200px] bg-[#080808] border border-white/[0.08] rounded-[2rem] p-8 md:p-14 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-500/5 blur-[100px] rounded-full"></div>
<div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-orange-500/5 blur-[100px] rounded-full"></div>
</div>

<div className="relative z-10 w-full mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-normal text-gray-300 w-max mb-8 shadow-sm">
<span className="text-orange-500 text-[10px] leading-none">◆</span> Why Nexus?
            </div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-white max-w-2xl leading-[1.1]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>
                Build at the<br/>speed of thought
            </h2>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full relative z-10">

<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h3 className="text-lg text-white font-normal">Design</h3>
<p className="text-sm text-gray-400 font-extralight max-w-md leading-relaxed min-h-[60px]">
                        Architecting systems through manual configuration, fragmented service maps, and constant environment syncing.
                    </p>
</div>

<div className="w-full aspect-[4/3] rounded-2xl border border-white/10 bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 shadow-inner">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

<div className="w-full max-w-[340px] bg-[#111] border border-white/10 rounded-xl shadow-2xl z-10 flex flex-col p-2.5 gap-1.5 backdrop-blur-md">

<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.02]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-emerald-500" icon="simple-icons:supabase"></iconify-icon>
<span className="text-xs text-gray-400 font-light">Supabase</span>
</div>
<div className="px-2 py-1 rounded border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[10px] flex items-center gap-1.5">
                                Configuring <svg className="lucide lucide-settings w-3 h-3 animate-[spin_3s_linear_infinite]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.02]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="simple-icons:vercel"></iconify-icon>
<span className="text-xs text-gray-400 font-light">Vercel</span>
</div>
<div className="px-2 py-1 rounded border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[10px] flex items-center gap-1.5">
                                Deploying <svg className="lucide lucide-refresh-cw w-3 h-3 animate-[spin_4s_linear_infinite]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.02]">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-pink-500" icon="simple-icons:figma"></iconify-icon>
<span className="text-xs text-gray-400 font-light">Figma</span>
</div>
<div className="px-2 py-1 rounded border border-orange-500/20 bg-orange-500/10 text-orange-400 text-[10px] flex items-center gap-1.5">
                                Syncing <svg className="lucide lucide-loader-2 w-3 h-3 animate-[spin_2s_linear_infinite]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 1 1-6.219-8.56"></path></svg>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg border border-transparent">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="simple-icons:slack"></iconify-icon>
<span className="text-xs text-gray-400 font-light opacity-60">Slack</span>
</div>
<div className="px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] flex items-center gap-1 opacity-80">
                                Live <svg className="lucide lucide-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>

<div className="flex items-center justify-between p-2.5 rounded-lg border border-transparent">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg" icon="simple-icons:notion"></iconify-icon>
<span className="text-xs text-gray-400 font-light opacity-60">Notion</span>
</div>
<div className="px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] flex items-center gap-1 opacity-80">
                                Live <svg className="lucide lucide-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<h3 className="text-lg text-white font-normal">Process</h3>
<p className="text-sm text-gray-400 font-extralight max-w-md leading-relaxed min-h-[60px]">
                        Nexus Neural Engine automates the deployment lifecycle, intelligently routing requests across 500+ global edges.
                    </p>
</div>

<div className="w-full aspect-[4/3] rounded-2xl border border-white/10 bg-[#0A0A0A] relative overflow-hidden flex items-center justify-center p-4 sm:p-6 shadow-inner">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10"></div>

<div className="w-full max-w-[360px] bg-[#111] border border-white/10 rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden backdrop-blur-md">

<div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0C0C0C]">
<div className="flex items-center gap-2.5 p-3.5 border-r border-b border-white/[0.08]">
<iconify-icon className="text-base text-emerald-500" icon="simple-icons:supabase"></iconify-icon><span className="text-[10px] text-gray-400 font-light">DB</span>
</div>
<div className="flex items-center gap-2.5 p-3.5 border-r border-b border-white/[0.08]">
<iconify-icon className="text-base text-white" icon="simple-icons:vercel"></iconify-icon><span className="text-[10px] text-gray-400 font-light">Edge</span>
</div>
<div className="flex items-center gap-2.5 p-3.5 border-b border-white/[0.08]">
<iconify-icon className="text-base text-pink-500" icon="simple-icons:figma"></iconify-icon><span className="text-[10px] text-gray-400 font-light">Assets</span>
</div>
<div className="flex items-center gap-2.5 p-3.5 border-r border-white/[0.08]">
<iconify-icon className="text-base text-white" icon="simple-icons:shopify"></iconify-icon><span className="text-[10px] text-gray-400 font-light">Shop</span>
</div>
<div className="flex items-center gap-2.5 p-3.5 border-r border-white/[0.08]">
<iconify-icon className="text-base text-blue-400" icon="simple-icons:slack"></iconify-icon><span className="text-[10px] text-gray-400 font-light">Notify</span>
</div>
<div className="flex items-center gap-2.5 p-3.5">
<iconify-icon className="text-base text-white" icon="simple-icons:notion"></iconify-icon><span className="text-[10px] text-gray-400 font-light">Docs</span>
</div>
</div>

<div className="flex items-center gap-2.5 p-4 border-b border-white/[0.08] bg-gradient-to-r from-blue-500/5 to-transparent">
<svg className="lucide lucide-sparkles w-4 h-4 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063A2 2 0 0 0 14.063 15.5L12.5 21.635a.5.5 0 0 1-.962 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path d="M4 17v2"></path><path d="M5 18H3"></path></svg>
<span className="text-xs text-gray-200 font-normal tracking-wide">Nexus Neural Engine active</span>
</div>

<div className="p-5 bg-[#080808] flex flex-col gap-5">
<div className="bg-[#111] border border-white/[0.05] rounded-lg p-3.5">
<p className="text-[11px] text-gray-400 font-extralight leading-relaxed">
                                    Traffic intelligently routed through 542 identified optimal nodes. Global state consistency achieved across 48 regions. System latency: 4.2ms.
                                </p>
</div>
<button className="w-full py-2.5 bg-white text-black text-xs font-normal rounded-lg hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                Initialize neural pipeline
                            </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section><section className="w-full bg-[#030303] py-24 px-6 relative z-10 flex flex-col items-center justify-center reveal-fade">
<h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-white mb-4 text-center" style={{fontFamily: '\'DM Sans\', sans-serif'}}>Subscribe to our newsletter</h2>
<p className="text-lg text-gray-400 font-extralight text-center mb-10 max-w-md">Sign up today and get your first 5,000 compute hours free.</p>
<form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mb-8">
<div className="relative flex-1">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<i className="h-5 w-5 text-gray-500" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<input className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors font-light" placeholder="Enter your email address" type="email"/>
</div>
<button className="px-7 py-3 bg-white text-black rounded-xl text-base font-normal hover:bg-gray-200 transition-colors whitespace-nowrap shadow-sm" type="button">Get started</button>
</form>
<div className="flex items-center gap-4 text-sm text-gray-400 font-extralight">
<span className="">Our experts are ready to help!</span>
<div className="flex -space-x-2">
<img alt="Avatar" className="w-7 h-7 rounded-full border border-[#030303] bg-gray-800" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border border-[#030303] bg-gray-800" src="https://i.pravatar.cc/100?img=2"/>
<img alt="Avatar" className="w-7 h-7 rounded-full border border-[#030303] bg-gray-800" src="https://i.pravatar.cc/100?img=3"/>
</div>
</div>
</section>

<div className="bg-[#030303] w-full z-20 pt-20 pb-0 relative">

<div className="reveal-fade w-full max-w-[1000px] z-30 mx-auto pr-6 pb-12 pl-6">
<div className="w-full bg-[#0a0a0c] border border-white/10 rounded-3xl overflow-hidden relative shadow-[0_25px_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row min-h-[300px]">

<div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none"></div>

<div className="p-10 md:p-14 md:w-[55%] relative z-10 flex flex-col justify-center">
<h3 className="text-3xl md:text-4xl font-light tracking-tight text-white mb-4 leading-[1.1]" style={{fontFamily: '\'DM Sans\', sans-serif'}}>Experience superior<br/>planetary scaling</h3>
<p className="text-base text-gray-400 font-extralight mb-8">Deploy across 250+ edge locations globally.</p>
<div className="w-max">
<a className="inline-flex px-7 py-3 bg-white text-black rounded-xl text-base font-normal hover:bg-gray-200 transition-colors shadow-sm" href="#">Get started</a>
</div>
</div>

<div className="w-full md:w-[45%] h-56 md:h-auto relative overflow-hidden flex items-center justify-end right-0">

<div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10 md:w-32"></div>

<div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 md:left-[20%] -translate-x-1/2 -translate-y-1/2 z-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 2px, transparent 2px)', backgroundSize: '24px 24px', maskImage: 'radial-gradient(ellipse at center, black 10%, transparent 50%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 10%, transparent 50%)'}}>
</div>

<div className="absolute right-[20%] top-[30%] z-10 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="2"></i></div>
<div className="absolute right-[40%] bottom-[25%] z-10 p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/70"><i className="w-3 h-3" data-lucide="map-pin" strokeWidth="2"></i></div>
<div className="absolute right-[10%] bottom-[45%] z-10 p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-white/50"><i className="w-4 h-4" data-lucide="map-pin" strokeWidth="2"></i></div>
</div>
</div>
</div>

<footer className="w-full bg-[#050505] border-t border-white/[0.05] pt-32 pb-12 px-6 lg:px-14 relative z-10 reveal-fade">
<div className="max-w-[1100px] mx-auto flex flex-col">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-5 flex flex-col gap-6">
<div className="flex items-center gap-2 text-white mb-2">
<i className="w-6 h-6" data-lucide="scan" strokeWidth="2"></i>
<span className="text-xl font-normal tracking-tight">SuperHero</span>
</div>
<address className="text-sm text-gray-500 font-extralight leading-loose not-italic">
                                    100 Global Edge Way<br/>
                                    Suite 500<br/>
                                    Metropolis, NY 10001<br/>
                                    United States
                                </address>
<div className="flex flex-col sm:flex-row gap-6 sm:gap-12 text-sm mt-4">
<div className="flex flex-col gap-1.5">
<span className="text-gray-600 font-normal">Phone number</span>
<a className="text-gray-400 font-extralight hover:text-white transition-colors" href="tel:18005550199">1-800-555-0199</a>
</div>
<div className="flex flex-col gap-1.5">
<span className="text-gray-600 font-normal">Email</span>
<a className="text-gray-400 font-extralight hover:text-white transition-colors" href="mailto:support@superhero.dev">support@superhero.dev</a>
</div>
</div>
</div>

<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-8">
<div className="flex flex-col gap-4">
<span className="text-sm text-gray-600 font-normal mb-2">Quick links</span>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Pricing</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Resources</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">About us</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">FAQ</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Contact us</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm text-gray-600 font-normal mb-2">Social</span>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Facebook</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Instagram</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">LinkedIn</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Twitter</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Youtube</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-sm text-gray-600 font-normal mb-2">Legal</span>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Terms of service</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Privacy policy</a>
<a className="text-sm text-gray-400 font-extralight hover:text-white transition-colors w-max" href="#">Cookie policy</a>
</div>
</div>
</div>

<div className="w-full flex justify-center text-xs text-gray-600 font-extralight pt-8 border-t border-white/[0.05]">
                            © 2024 SuperHero. All rights reserved.
                        </div>
</div>
</footer>
</div>
</div>
</div>





    </>
  );
}
