import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('webgl-noise');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        
        if (gl) {
            const vsSource = `
                attribute vec2 a_position;
                void main() {
                    gl_Position = vec4(a_position, 0.0, 1.0);
                }
            `;
            
            const fsSource = `
                precision mediump float;
                uniform float u_time;
                uniform vec2 u_resolution;
                
                float random(vec2 st) {
                    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
                }
                
                void main() {
                    vec2 st = gl_FragCoord.xy / u_resolution.xy;
                    float noise = random(st * (u_time * 0.00001 + 1.0));
                    gl_FragColor = vec4(vec3(noise), 1.0);
                }
            `;
            
            const compileShader = (type, source) => {
                const shader = gl.createShader(type);
                gl.shaderSource(shader, source);
                gl.compileShader(shader);
                return shader;
            };
            
            const vs = compileShader(gl.VERTEX_SHADER, vsSource);
            const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
            
            const program = gl.createProgram();
            gl.attachShader(program, vs);
            gl.attachShader(program, fs);
            gl.linkProgram(program);
            gl.useProgram(program);
            
            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
            
            const positionLocation = gl.getAttribLocation(program, "a_position");
            gl.enableVertexAttribArray(positionLocation);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
            
            const timeLocation = gl.getUniformLocation(program, "u_time");
            const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
            
            const renderNoise = (time) => {
                if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    gl.viewport(0, 0, canvas.width, canvas.height);
                }
                
                gl.uniform1f(timeLocation, time);
                gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
                
                gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
                requestAnimationFrame(renderNoise);
            };
            
            requestAnimationFrame(renderNoise);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 w-full h-full pointer-events-none z-[100] opacity-[0.12] mix-blend-overlay" id="webgl-noise"></canvas>
<div className="max-w-7xl mx-auto px-6 py-8 relative z-10 flex flex-col gap-16 md:gap-24">

<nav className="w-full flex justify-between items-center p-3 rounded-full bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 transition-all relative overflow-hidden">
<div className="flex items-center gap-3 pl-4 relative z-10">
<div className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-[inset_4px_4px_8px_#121214,inset_-4px_-4px_8px_#262628] text-purple-400">
<iconify-icon className="text-2xl" icon="ph:globe-hemisphere-west-duotone"></iconify-icon>
</div>
<div className="flex flex-col justify-center">
<span className="text-lg font-semibold tracking-tight text-zinc-100 leading-tight">Global Study Road</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-full bg-[#171719] shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#202023] border border-black/20 relative z-10">
<a className="px-5 py-2 rounded-full text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Services</a>
<a className="px-5 py-2 rounded-full text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Smart Match</a>
<a className="px-5 py-2 rounded-full text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors flex items-center gap-1" href="#">
                    Study <iconify-icon className="text-sm" icon="ph:caret-down-duotone"></iconify-icon>
</a>
<a className="px-5 py-2 rounded-full text-base font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Pricing</a>
</div>
<button className="pr-4 pl-2 py-2 flex items-center gap-3 rounded-full bg-[#1c1c1e] shadow-[4px_4px_8px_#121214,-4px_-4px_8px_#262628] border border-white/5 active:shadow-[inset_3px_3px_6px_#121214,inset_-3px_-3px_6px_#262628] transition-all relative z-10">
<div className="w-8 h-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-800">
<img alt="Usman" className="w-full h-full object-cover opacity-90" src="https://i.pravatar.cc/150?u=usman"/>
</div>
<span className="text-base font-medium text-zinc-200">Usman</span>
<iconify-icon className="text-sm text-zinc-500" icon="ph:caret-down-duotone"></iconify-icon>
</button>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
<div className="lg:col-span-8 flex flex-col gap-8 rounded-[2.5rem] bg-[#1c1c1e] p-2 shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-white/5 relative overflow-hidden">
<div className="flex-1 rounded-[2rem] bg-[#161618] p-10 lg:p-14 shadow-[inset_8px_8px_16px_#0e0e0f,inset_-8px_-8px_16px_#1e1e21] border border-black/40 flex flex-col justify-center relative overflow-hidden">

<svg className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] opacity-[0.15] animate-[spin_40s_linear_infinite] pointer-events-none" viewbox="0 0 200 200">
<defs>
<lineargradient id="meshGradient" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#a855f7"></stop>
<stop offset="100%" stop-color="#6b21a8"></stop>
</lineargradient>
</defs>
<path d="M100 0 C155 0 200 45 200 100 C200 155 155 200 100 200 C45 200 0 155 0 100 C0 45 45 0 100 0 Z" fill="none" stroke="url(#meshGradient)" strokeWidth="0.5"></path>
<path d="M100 20 C144 20 180 56 180 100 C180 144 144 180 100 180 C56 180 20 144 20 100 C20 56 56 20 100 20 Z" fill="none" stroke="url(#meshGradient)" strokeWidth="0.5"></path>
<path d="M100 40 C133 40 160 67 160 100 C160 133 133 160 100 160 C67 160 40 133 40 100 C40 67 67 40 100 40 Z" fill="none" stroke="url(#meshGradient)" strokeWidth="0.5" transform="rotate(45 100 100)"></path>
<path d="M100 60 C122 60 140 78 140 100 C140 122 122 140 100 140 C78 140 60 122 60 100 C60 78 78 60 100 60 Z" fill="none" stroke="url(#meshGradient)" strokeWidth="0.5"></path>
</svg>
<div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
<div className="relative z-10 max-w-2xl">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-100 mb-2 leading-[1.1]">
                            Your Gateway to
                            <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-700 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">Global Scholarships</span>
</h1>
<p className="text-xl text-zinc-400 mt-8 mb-6 leading-relaxed max-w-xl">
                            Discover scholarships around the world and prepare application documents with smart, self-service tools.
                        </p>
<p className="text-lg text-zinc-500 leading-relaxed max-w-lg mb-12">
                            Covering scholarships across multiple countries, disciplines, and degree levels, updated regularly from trusted sources.
                        </p>
<button className="group relative inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-[#1c1c1e] text-purple-400 shadow-[6px_6px_12px_#121214,-6px_-6px_12px_#262628] border border-white/5 active:shadow-[inset_4px_4px_8px_#121214,inset_-4px_-4px_8px_#262628] transition-all duration-150">
<span className="text-lg font-semibold tracking-tight">Watch Demo</span>
<div className="w-8 h-8 rounded-full bg-[#161618] flex items-center justify-center shadow-[inset_2px_2px_4px_#0e0e0f,inset_-2px_-2px_4px_#1e1e21] group-active:shadow-[2px_2px_4px_#121214,-2px_-2px_4px_#262628] transition-all duration-150">
<iconify-icon className="text-lg text-purple-500" icon="ph:play-duotone"></iconify-icon>
</div>
</button>
</div>
</div>
</div>

<div className="lg:col-span-4 rounded-[2.5rem] bg-[#1c1c1e] p-8 shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-white/5 flex flex-col relative overflow-hidden justify-between group">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.15)_0%,transparent_70%)] pointer-events-none group-hover:opacity-50 transition-opacity duration-700"></div>
<div>
<div className="w-14 h-14 rounded-2xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_4px_4px_8px_#0e0e0f,inset_-4px_-4px_8px_#1e1e21] border border-black/20 relative">

<div className="absolute inset-0 rounded-2xl border border-purple-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
<iconify-icon className="text-3xl relative z-10" icon="ph:cpu-duotone"></iconify-icon>
</div>
<h3 className="text-3xl font-semibold tracking-tight text-zinc-100 mb-4 relative z-10">Smart Matching AI</h3>
<p className="text-lg text-zinc-400 relative z-10">Our proprietary ML engine matches your unique profile with thousands of scholarships in real-time.</p>
</div>
<div className="mt-8 relative z-10">
<div className="flex justify-between text-sm font-medium text-zinc-500 mb-3 px-1">
<span>Match Precision</span>
<span className="text-purple-400">100%</span>
</div>
<div className="h-4 w-full bg-[#121214] rounded-full shadow-[inset_2px_2px_4px_#0a0a0b,inset_-2px_-2px_4px_#1a1a1c] relative flex items-center overflow-hidden">
<div className="absolute left-0 h-full w-full bg-gradient-to-r from-purple-600/50 to-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.4)]"></div>

<svg className="absolute inset-0 w-full h-full animate-[translate-x-[100%]_2s_linear_infinite]" preserveaspectratio="none" viewbox="0 0 100 10">
<lineargradient id="scan-light" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="transparent"></stop>
<stop offset="50%" stop-color="rgba(255,255,255,0.8)"></stop>
<stop offset="100%" stop-color="transparent"></stop>
</lineargradient>
<rect className="animate-[dash_1.5s_linear_infinite]" fill="url(#scan-light)" height="10" width="10" x="-10"></rect>
</svg>
</div>
</div>
</div>

<div className="lg:col-span-12 rounded-[2.5rem] bg-[#1c1c1e] p-6 shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-white/5">
<div className="w-full flex flex-col md:flex-row items-center gap-4 bg-[#161618] p-3 rounded-[1.5rem] shadow-[inset_6px_6px_12px_#0e0e0f,inset_-6px_-6px_12px_#1e1e21] border border-black/30">
<div className="flex-1 flex items-center px-4 w-full">
<iconify-icon className="text-2xl text-zinc-500 mr-4" icon="ph:magnifying-glass-duotone"></iconify-icon>
<input className="w-full bg-transparent border-none text-xl text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-0" placeholder="What scholarship are you looking for?" type="text"/>
</div>
<button className="w-full md:w-auto px-10 py-4 rounded-xl bg-purple-600 text-white shadow-[4px_4px_8px_#121214,-4px_-4px_8px_#262628,inset_1px_1px_1px_rgba(255,255,255,0.3)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-2px_-2px_4px_rgba(255,255,255,0.1)] border border-purple-500 transition-all duration-100 flex items-center justify-center relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[translate-x-[200%]_1s_ease-in-out_infinite]"></div>
<iconify-icon className="text-2xl relative z-10" icon="ph:arrow-right-duotone"></iconify-icon>
</button>
</div>
<div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500 mt-5 px-4 font-medium">
<span>Popular:</span>
<a className="px-3 py-1.5 rounded-lg bg-[#161618] border border-white/5 shadow-[inset_1px_1px_3px_#0e0e0f] text-zinc-300 hover:text-purple-400 transition-colors" href="#">Engineering Programs</a>
<a className="px-3 py-1.5 rounded-lg bg-[#161618] border border-white/5 shadow-[inset_1px_1px_3px_#0e0e0f] text-zinc-300 hover:text-purple-400 transition-colors" href="#">Computer Science</a>
<a className="px-3 py-1.5 rounded-lg bg-[#161618] border border-white/5 shadow-[inset_1px_1px_3px_#0e0e0f] text-zinc-300 hover:text-purple-400 transition-colors" href="#">Scholarships</a>
</div>
</div>
</main>

<section className="flex flex-col items-center justify-center w-full py-12 relative overflow-hidden">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-200 mb-3 text-center">Trusted Scholarships from Top Universities</h2>
<p className="text-base text-zinc-500 max-w-2xl text-center mb-10">We eliminate misinformation by sourcing data exclusively from official universities, professors and government programs.</p>
<div className="w-full overflow-hidden relative mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
<div className="animate-scroll flex items-center justify-around gap-16 opacity-40 font-semibold tracking-widest text-3xl uppercase text-zinc-400">
<span>Harvard</span><span>MIT</span><span>Oxford</span><span>Cambridge</span><span>Stanford</span><span>Yale</span><span>Imperial</span><span>ETH</span>
<span>Harvard</span><span>MIT</span><span>Oxford</span><span>Cambridge</span><span>Stanford</span><span>Yale</span><span>Imperial</span><span>ETH</span>
</div>
</div>
</section>

<section className="flex flex-col gap-10">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">Scholarship Discovery<br/>Made Simple</h2>
<p className="text-lg text-zinc-400 leading-relaxed">Stop wasting weeks on manual searching. Our AI does the heavy lifting while you focus on winning.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform duration-300" icon="ph:globe-hemisphere-west-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-2">Global Search Access</h4>
<p className="text-base text-zinc-500">Verified database of 50k+ scholarships updated daily.</p>
</div>
</div>
<div className="p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform duration-300" icon="ph:file-text-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-2">Personalized Resume</h4>
<p className="text-base text-zinc-500">AI-tailored resumes for each scholarship.</p>
</div>
</div>
<div className="p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform duration-300" icon="ph:pen-nib-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-2">Statement of Purpose</h4>
<p className="text-base text-zinc-500">SOPs aligned perfectly with scholarship goals.</p>
</div>
</div>
<div className="md:col-span-2 p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col justify-between group hover:border-purple-500/30 transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 h-full w-1/2 opacity-10 bg-[radial-gradient(ellipse_at_right,rgba(168,85,247,1)_0%,transparent_70%)] pointer-events-none group-hover:opacity-20 transition-opacity"></div>
<div className="w-12 h-12 rounded-xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform duration-300" icon="ph:calendar-blank-duotone"></iconify-icon>
</div>
<div className="relative z-10 w-full lg:w-2/3">
<h4 className="text-2xl font-semibold tracking-tight text-zinc-200 mb-3">Study Plan</h4>
<p className="text-lg text-zinc-500 mb-6">Study plans perfectly tailored to scholarship requirements and expectations.</p>
<div className="flex gap-2">
<span className="px-3 py-1 rounded-md bg-[#161618] text-xs font-medium text-zinc-400 border border-white/5 shadow-sm">Year 1</span>
<span className="px-3 py-1 rounded-md bg-[#161618] text-xs font-medium text-zinc-400 border border-white/5 shadow-sm">Year 2</span>
<span className="px-3 py-1 rounded-md bg-[#161618] text-xs font-medium text-zinc-400 border border-white/5 shadow-sm">Thesis</span>
</div>
</div>
</div>
<div className="p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col justify-between group hover:border-purple-500/30 transition-colors">
<div className="w-12 h-12 rounded-xl bg-[#161618] flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20">
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform duration-300" icon="ph:envelope-duotone"></iconify-icon>
</div>
<div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-2">Letters &amp; Emails</h4>
<p className="text-base text-zinc-500">Curated cover letters, recommendations, and outreach emails.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-10 mt-12 relative">
<div className="flex flex-col md:flex-row gap-8 items-end justify-between">
<div>
<span className="text-purple-400 font-medium mb-3 block">Platform Tour</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-4">Scholarship search<br/>on autopilot.</h2>
</div>
<p className="text-lg text-zinc-400 max-w-sm pb-2">Take a quick tour and see how our AI does the heavy lifting while you focus on winning.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative mt-4">

<svg className="hidden md:block absolute top-[28px] left-[16%] w-[68%] h-12 z-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 1000 50">
<path className="animate-dash" d="M0,25 C250,25 250,25 500,25 C750,25 750,25 1000,25" fill="none" stroke="rgba(168,85,247,0.3)" strokeLinecap="round" strokeWidth="3"></path>
</svg>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 relative z-10 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-full bg-[#161618] flex items-center justify-center mb-6 text-zinc-300 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20 mx-auto md:mx-0">
<span className="font-semibold text-lg">1</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-3 text-center md:text-left">Build Your Smart Profile</h4>
<p className="text-base text-zinc-500 text-center md:text-left">Upload your resume and academic history. Our AI extracts your core strengths instantly.</p>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-purple-500/30 relative z-10 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-full bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.5)] border border-purple-500/50 mx-auto md:mx-0 relative">
<div className="absolute inset-0 rounded-full bg-purple-500/20 animate-ping"></div>
<span className="font-semibold text-lg relative z-10">2</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-100 mb-3 text-center md:text-left">AI Matching Engine</h4>
<p className="text-base text-zinc-400 text-center md:text-left">We scan 50,000+ verified scholarships to find the ones where you have the highest win rate.</p>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 relative z-10 hover:-translate-y-2 transition-transform duration-300">
<div className="w-14 h-14 rounded-full bg-[#161618] flex items-center justify-center mb-6 text-zinc-300 shadow-[inset_3px_3px_6px_#0e0e0f,inset_-3px_-3px_6px_#1e1e21] border border-black/20 mx-auto md:mx-0">
<span className="font-semibold text-lg">3</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-zinc-200 mb-3 text-center md:text-left">Automated Application</h4>
<p className="text-base text-zinc-500 text-center md:text-left">Generate tailored essays and track every application from one centralized dashboard.</p>
</div>
</div>
</section>

<section className="mt-12 p-8 lg:p-12 rounded-[2.5rem] bg-[#1c1c1e] shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-900/10 blur-[120px] rounded-full pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="text-center mb-10 relative z-10">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-100 mb-4">Why Global Study Road Wins?</h2>
<p className="text-lg text-zinc-400">We don't just list scholarships but we match you with them using advanced AI intelligence.</p>
</div>
<div className="overflow-x-auto w-full relative z-10">
<table className="w-full text-left border-collapse min-w-[600px]">
<thead>
<tr className="text-zinc-500 border-b border-white/5">
<th className="py-5 px-6 font-medium text-base w-1/4">Metric</th>
<th className="py-5 px-6 font-semibold text-purple-400 bg-purple-500/5 rounded-t-2xl w-2/4 tracking-tight text-lg shadow-[inset_0_2px_10px_rgba(168,85,247,0.05)] border-x border-t border-purple-500/20">Global Study Road <span className="text-sm font-medium text-purple-300 ml-1 py-1 px-2 bg-purple-500/20 rounded-md">AI Powered</span></th>
<th className="py-5 px-6 font-medium text-base w-1/4">Conventional Sites</th>
</tr>
</thead>
<tbody className="text-base">
<tr className="border-b border-white/5">
<td className="py-5 px-6 text-zinc-400 font-medium">Scholarship Discovery</td>
<td className="py-5 px-6 bg-purple-500/5 text-zinc-200 border-x border-purple-500/20 font-medium">Intelligent AI Matched 10,000+ Scholarships</td>
<td className="py-5 px-6 text-zinc-600">Limited Manual Listings</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-5 px-6 text-zinc-400 font-medium">Document Preparation</td>
<td className="py-5 px-6 bg-purple-500/5 text-zinc-200 border-x border-purple-500/20 font-medium">Customized Docs like Resume, Study Plan and Statement of Purpose</td>
<td className="py-5 px-6 text-zinc-600">DIY Templates</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-5 px-6 text-zinc-400 font-medium">Document Customization</td>
<td className="py-5 px-6 bg-purple-500/5 text-zinc-200 border-x border-purple-500/20 font-medium">Every document adapts to your unique background and scholarship requirements</td>
<td className="py-5 px-6 text-zinc-600">Static Templates</td>
</tr>
<tr className="border-b border-white/5">
<td className="py-5 px-6 text-zinc-400 font-medium">Finding Scholarships</td>
<td className="py-5 px-6 bg-purple-500/5 text-zinc-200 border-x border-purple-500/20 font-medium">Global Verified Sources</td>
<td className="py-5 px-6 text-zinc-600">Limited Selection</td>
</tr>
<tr>
<td className="py-5 px-6 text-zinc-400 font-medium rounded-bl-2xl">Time Efficiency</td>
<td className="py-5 px-6 bg-purple-500/5 text-zinc-200 border-x border-b border-purple-500/20 rounded-b-2xl font-medium">Minutes, Not Weeks</td>
<td className="py-5 px-6 text-zinc-600 rounded-br-2xl">3–5 Weeks</td>
</tr>
</tbody>
</table>
</div>
</section>

<section className="flex flex-col gap-10 mt-12">
<div className="text-center max-w-3xl mx-auto">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-6">Scholarship Destinations</h2>
<p className="text-lg text-zinc-400 leading-relaxed">Explore the world's best study destinations and discover opportunities that match your career goals.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇺🇸</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">United States</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇬🇧</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">United Kingdom</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇨🇦</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">Canada</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇦🇺</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">Australia</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇩🇪</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">Germany</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
<div className="p-6 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-purple-500/30 transition-all">
<div className="text-4xl filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all group-hover:scale-110 duration-300">🇦🇪</div>
<div className="text-center">
<h4 className="text-xl font-medium tracking-tight text-zinc-200">UAE</h4>
<span className="text-xs text-zinc-500">Study abroad scholarships</span>
</div>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row gap-12 items-center mt-12 p-10 lg:p-16 rounded-[2.5rem] bg-[#1c1c1e] shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-white/5">
<div className="flex-1 max-w-lg">
<span className="text-purple-400 font-medium mb-4 block">Expert Guidance</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-6 leading-tight">Prepare Your<br/>Scholarship Applications</h2>
<p className="text-lg text-zinc-400 leading-relaxed mb-8">Use our application tools to create structured drafts of resumes, statements of purpose, cover letters, study plans, and recommendation letters, tailored to each scholarship.</p>
<button className="px-6 py-3 rounded-full bg-zinc-100 text-[#1c1c1e] font-semibold tracking-tight shadow-md hover:bg-white hover:scale-105 transition-all">Start Preparing</button>
</div>
<div className="flex-1 w-full rounded-[2rem] bg-[#161618] shadow-[inset_6px_6px_12px_#0e0e0f,inset_-6px_-6px_12px_#1e1e21] p-8 border border-black/20 relative overflow-hidden h-80 flex flex-col gap-4 justify-center">

<svg className="absolute -right-10 -top-10 w-64 h-64 text-purple-500/10 animate-[spin_30s_linear_infinite]" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="currentColor" stroke-dasharray="10 5" strokeWidth="2"></circle>
<circle cx="50" cy="50" fill="none" r="25" stroke="currentColor" stroke-dasharray="5 5" strokeWidth="1"></circle>
</svg>
<div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="w-3/4 h-12 rounded-xl bg-[#1c1c1e] border border-white/5 shadow-md flex items-center px-4 gap-3 relative z-10 hover:translate-x-2 transition-transform cursor-pointer">
<iconify-icon className="text-purple-400 text-xl" icon="ph:file-text-duotone"></iconify-icon>
<div className="h-2 w-1/2 bg-zinc-700 rounded-full"></div>
</div>
<div className="w-full h-12 rounded-xl bg-[#1c1c1e] border border-white/5 shadow-md flex items-center px-4 gap-3 relative z-10 translate-x-4 hover:translate-x-6 transition-transform cursor-pointer">
<iconify-icon className="text-purple-400 text-xl" icon="ph:pen-nib-duotone"></iconify-icon>
<div className="h-2 w-2/3 bg-zinc-700 rounded-full"></div>
</div>
<div className="w-5/6 h-12 rounded-xl bg-[#1c1c1e] border border-white/5 shadow-md flex items-center px-4 gap-3 relative z-10 translate-x-2 hover:translate-x-4 transition-transform cursor-pointer">
<iconify-icon className="text-purple-400 text-xl" icon="ph:envelope-duotone"></iconify-icon>
<div className="h-2 w-1/3 bg-zinc-700 rounded-full"></div>
</div>
</div>
</section>

<section className="mt-12">
<div className="text-center mb-12">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-4">Success Stories</h2>
<p className="text-lg text-zinc-500">The Voices of Those Who Made It</p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">Fully funded PhD at UCL</h4>
<p className="text-base text-zinc-400 leading-relaxed">"I relied entirely on Global Study Road to find PhD positions. It helped me save a lot of time in finding professors and drafting my initial emails to supervisors."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">M</div>
<div>
<div className="text-base font-medium text-zinc-200">Michael</div>
<div className="text-xs text-zinc-500">Architecture · University College London</div>
</div>
</div>
</div>
<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">Fully funded offer</h4>
<p className="text-base text-zinc-400 leading-relaxed">"Global Study Road really helped me find the right positions by filtering them based on my field, university, and country. It saved me so much time!"</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">W</div>
<div>
<div className="text-base font-medium text-zinc-200">William</div>
<div className="text-xs text-zinc-500">Software Engineering · Politecnico di Torino</div>
</div>
</div>
</div>
<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">9 admission offers at age 46</h4>
<p className="text-base text-zinc-400 leading-relaxed">"Global Study Road gave me structure, confidence, and a clear path forward. It's never too late if you start smart."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">D</div>
<div>
<div className="text-base font-medium text-zinc-200">Darlene</div>
<div className="text-xs text-zinc-500">Civil Engineering · Multiple US Universities</div>
</div>
</div>
</div>
<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">Admission secured</h4>
<p className="text-base text-zinc-400 leading-relaxed">"With this site, I can easily find positions in different countries using customizable filters. It speeds up the entire process."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">D</div>
<div>
<div className="text-base font-medium text-zinc-200">Devon</div>
<div className="text-xs text-zinc-500">Computational Sciences · UMass Boston</div>
</div>
</div>
</div>
<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">Full scholarship to LSE</h4>
<p className="text-base text-zinc-400 leading-relaxed">"Found my dream program and secured funding within months. The AI-powered matching was incredibly accurate."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">C</div>
<div>
<div className="text-base font-medium text-zinc-200">Carlos</div>
<div className="text-xs text-zinc-500">Economics · London School of Economics</div>
</div>
</div>
</div>
<div className="break-inside-avoid p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col gap-6">
<h4 className="text-xl font-semibold tracking-tight text-zinc-200">ETH excellence scholarship</h4>
<p className="text-base text-zinc-400 leading-relaxed">"The document templates and application guidance helped me stand out among thousands of applicants."</p>
<div className="flex items-center gap-4 mt-auto">
<div className="w-12 h-12 rounded-full bg-[#161618] shadow-inner border border-white/5 flex items-center justify-center font-medium text-purple-400 text-lg">K</div>
<div>
<div className="text-base font-medium text-zinc-200">Kathryn</div>
<div className="text-xs text-zinc-500">Biotechnology · ETH Zurich</div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-3 mt-12 text-sm text-zinc-400">
<iconify-icon className="text-xl text-yellow-500 animate-[pulse_2s_ease-in-out_infinite]" icon="ph:shooting-star-duotone"></iconify-icon>
                Review us on <span className="font-medium text-zinc-200 hover:text-white cursor-pointer transition-colors">Trustpilot</span>
</div>
</section>

<section className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
<div className="lg:col-span-4 flex flex-col gap-6">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-100 leading-tight">Frequently Asked Questions</h2>
<div className="p-8 rounded-3xl bg-purple-600 border border-purple-500 shadow-[4px_4px_8px_#121214,-4px_-4px_8px_#262628,inset_1px_1px_1px_rgba(255,255,255,0.3)] relative overflow-hidden mt-6 group">
<svg className="absolute -right-8 -top-8 w-40 h-40 opacity-20 animate-[spin_10s_linear_infinite]" viewbox="0 0 100 100">
<polygon fill="none" points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="white" strokeWidth="2"></polygon>
<polygon fill="none" points="50,15 85,30 85,70 50,85 15,70 15,30" stroke="white" strokeWidth="1"></polygon>
</svg>
<div className="text-6xl font-semibold tracking-tight text-white mb-2 relative z-10">95%</div>
<div className="text-xl font-medium text-purple-200 relative z-10">Student Satisfaction Rate</div>
</div>
</div>
<div className="lg:col-span-8 flex flex-col gap-5">
<div className="p-8 rounded-3xl bg-[#1c1c1e] shadow-[8px_8px_16px_#121214,-8px_-8px_16px_#262628] border border-white/5 flex flex-col">
<div className="flex justify-between items-center text-xl font-medium tracking-tight text-zinc-200">
                        What types of scholarships are available on the platform?
                        <iconify-icon className="text-purple-400 text-2xl" icon="ph:caret-up-duotone"></iconify-icon>
</div>
<p className="text-base text-zinc-400 mt-4 leading-relaxed">Scholarships from universities, governments, and organizations across multiple countries and fields.</p>
</div>
<div className="p-8 rounded-3xl bg-[#161618] border border-black/20 shadow-[inset_4px_4px_8px_#0e0e0f,inset_-4px_-4px_8px_#1e1e21] cursor-pointer hover:bg-[#1a1a1c] transition-colors">
<div className="flex justify-between items-center text-xl font-medium tracking-tight text-zinc-400 hover:text-zinc-200 transition-colors">
                        What if I need help during the application process?
                        <iconify-icon className="text-xl" icon="ph:caret-down-duotone"></iconify-icon>
</div>
</div>
<div className="p-8 rounded-3xl bg-[#161618] border border-black/20 shadow-[inset_4px_4px_8px_#0e0e0f,inset_-4px_-4px_8px_#1e1e21] cursor-pointer hover:bg-[#1a1a1c] transition-colors">
<div className="flex justify-between items-center text-xl font-medium tracking-tight text-zinc-400 hover:text-zinc-200 transition-colors">
                        How does the subscription work?
                        <iconify-icon className="text-xl" icon="ph:caret-down-duotone"></iconify-icon>
</div>
</div>
<div className="p-8 rounded-3xl bg-[#161618] border border-black/20 shadow-[inset_4px_4px_8px_#0e0e0f,inset_-4px_-4px_8px_#1e1e21] cursor-pointer hover:bg-[#1a1a1c] transition-colors">
<div className="flex justify-between items-center text-xl font-medium tracking-tight text-zinc-400 hover:text-zinc-200 transition-colors">
                        How does the AI matching system work?
                        <iconify-icon className="text-xl" icon="ph:caret-down-duotone"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="mt-12 p-12 lg:p-24 rounded-[3rem] bg-[#1c1c1e] shadow-[12px_12px_24px_#121214,-12px_-12px_24px_#262628] border border-purple-500/20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0%,transparent_60%)] pointer-events-none"></div>

<svg className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="animate-dash" d="M0,50 Q25,20 50,50 T100,50" fill="none" stroke="rgba(168,85,247,0.5)" strokeWidth="0.2"></path>
<path className="animate-dash" d="M0,60 Q25,30 50,60 T100,60" fill="none" stroke="rgba(168,85,247,0.3)" strokeWidth="0.2" style={{animationDirection: 'reverse', animationDuration: '4s'}}></path>
</svg>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-zinc-100 mb-6 relative z-10">Join Our Community</h2>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 relative z-10 leading-relaxed">Unlock your global potential. Join thousands of students receiving the latest scholarship opportunities and success stories.</p>
<div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative z-10 p-2 rounded-[1.5rem] bg-[#161618] shadow-[inset_4px_4px_8px_#0e0e0f,inset_-4px_-4px_8px_#1e1e21] border border-black/30">
<input className="flex-1 bg-transparent px-6 py-4 text-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:ring-0 border-none" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-4 rounded-xl bg-purple-600 text-white font-medium tracking-tight shadow-[4px_4px_8px_#121214,-4px_-4px_8px_#262628,inset_1px_1px_1px_rgba(255,255,255,0.3)] active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3)] transition-all duration-100 hover:bg-purple-500">Subscribe</button>
</div>
<p className="text-sm text-zinc-600 mt-6 relative z-10">We respect your privacy. Unsubscribe at any time.</p>
</section>

<footer className="mt-12 pt-12 pb-6 border-t border-white/5 flex flex-col gap-12 relative z-10">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">
<div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#1c1c1e] flex items-center justify-center shadow-[inset_4px_4px_8px_#121214,inset_-4px_-4px_8px_#262628] text-purple-400">
<iconify-icon className="text-2xl" icon="ph:globe-hemisphere-west-duotone"></iconify-icon>
</div>
<span className="text-xl font-semibold tracking-tight text-zinc-100">Global Study Road</span>
</div>
<p className="text-base text-zinc-500 leading-relaxed max-w-sm">Helping students discover scholarships and prepare applications using smart, self-service tools.</p>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-sm font-semibold tracking-tight text-zinc-200 uppercase">Programs</h5>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Undergraduate</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Master's</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">PhD</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-sm font-semibold tracking-tight text-zinc-200 uppercase">Destinations</h5>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">United States</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">United Kingdom</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Canada</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Australia</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Germany</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Switzerland</a>
</div>
<div className="flex flex-col gap-4">
<h5 className="text-sm font-semibold tracking-tight text-zinc-200 uppercase">Company &amp; Support</h5>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">About Us</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Our Mission</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Help Center</a>
<a className="text-base text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Contact Us</a>
<a className="text-base text-purple-400 hover:text-purple-300 transition-colors" href="mailto:support@globalstudyroad.com">support@globalstudyroad.com</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
<div className="flex items-center gap-4">
<span>© 2026 GlobalStudyRoad. All rights reserved.</span>
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms of Service</a>
</div>
<div className="text-center md:text-right">
<p className="mb-1">GlobalStudyRoad is an independent scholarship discovery platform. We do not guarantee selection or funding.</p>
<p className="flex items-center justify-center md:justify-end gap-1">Powered by Qubit Dynamics <span className="text-purple-400 font-medium ml-1">Qubit AI ✨</span></p>
</div>
</div>
</footer>
</div>



    </>
  );
}
